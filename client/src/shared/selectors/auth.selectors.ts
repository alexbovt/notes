import {ApplicationState} from "../../app/app.reducer";

export const authSelector = {
    isAuthenticated: (state: ApplicationState) => state.auth.isAuthenticated,
    user: (state: ApplicationState) => state.auth.user
}
