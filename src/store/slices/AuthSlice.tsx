// authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserRequest } from '../../Model/User';
import { Token } from '../../Model/Token';
import { PayloadAction } from '@reduxjs/toolkit';
import { createNewUser, authenticate, fetchUserInfo, refreshAuthTokenApi } from '../../api/UserApi';
import { Role } from '../../Model/Role';


interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    role: Role | null;
    token: string | null;
    refreshToken: string | null;
}

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    role: null,
    token: null,
    refreshToken: null,
};

export const registerUser = createAsyncThunk(
    'user/register',
    async (user: UserRequest, { rejectWithValue }) => {
        try {
            const response = await createNewUser(user);
            return response.result;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            return rejectWithValue(errorMessage);
        }
    }
);

export const loginUser = createAsyncThunk(
    'user/login',
    async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await authenticate(username, password);
            const Auth = response.result;
            const accessToken = Auth.accessToken.toString();
            const refreshToken = Auth.refreshToken.toString();

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            const userInfo = await fetchUserInfo(accessToken);

            const user = userInfo.result;
            const roles = userInfo.result.roles;

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('role', JSON.stringify(roles));

            return { accessToken, refreshToken, user, roles };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            return rejectWithValue(errorMessage);
        }
    }
);

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (accessToken: string, { rejectWithValue }) => {
        try {
            const response = await fetchUserInfo(accessToken);
            return response.data;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            return rejectWithValue(errorMessage);
        }
    }
);

export const refreshAuthToken = createAsyncThunk(
    'user/refreshToken',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state: any = getState();
            const refreshToken = state.user.refreshToken;
            if (!refreshToken) throw new Error('No refresh token available');

            const response = await refreshAuthTokenApi(refreshToken);
            return response.result as Token;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            return rejectWithValue(errorMessage);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            state.token = null;
            state.refreshToken = null;
            state.role = null;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
            localStorage.removeItem('role');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ accessToken: string; refreshToken: string; user: User; roles: Role }>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.token = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.user = action.payload.user;
                state.role = action.payload.roles;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});
export const { logout } = userSlice.actions;

export default userSlice.reducer;
