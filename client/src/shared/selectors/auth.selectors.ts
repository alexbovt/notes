import {ApplicationState} from "../../app/app.reducer";
import {User} from "../../features/auth/auth.slice";

export const authSelector = {
    isAuthenticated: (state: ApplicationState): boolean | null => state.auth.isAuthenticated,
    user: (state: ApplicationState): User | null => state.auth.user
}
