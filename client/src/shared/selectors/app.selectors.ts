import {ApplicationState} from "../../app/app.reducer";

export const appSelector = {
    title: (state: ApplicationState) => state.app.title,
    isLoading: (state: ApplicationState) => state.app.isLoading
}
