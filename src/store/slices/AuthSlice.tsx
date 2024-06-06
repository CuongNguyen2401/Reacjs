import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserRequest } from '../../Model/User';
import { Token } from '../../Model/Token';
import { PayloadAction } from '@reduxjs/toolkit';
import { createNewUser, authenticate, fetchUserInfo } from '../../api/UserApi';

interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const registerUser = createAsyncThunk(
    'user/register',
    async (user: UserRequest, { rejectWithValue }) => {
        try {
            const response = await createNewUser(user);
            // Assuming response.result contains the token
            const token = response.result;
            return token;
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
            return response.result as Token;
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

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<{ user: User }>) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        });
        builder
            .addMatcher(
                (action) => action.type.endsWith('/pending') || action.type.endsWith('/rejected'),
                (state) => {
                    state.loading = true;
                }
            )

    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
