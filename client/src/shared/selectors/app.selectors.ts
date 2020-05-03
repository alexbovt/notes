import {ApplicationState} from "../../app/app.reducer";

export const appSelector = {
    name: (state: ApplicationState) => state.app.name,
    title: (state: ApplicationState) => state.app.title,
    isLoading: (state: ApplicationState) => state.app.isLoading,
    toast: (state: ApplicationState) => state.app.toast
}
