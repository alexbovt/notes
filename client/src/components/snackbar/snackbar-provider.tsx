import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';

import {SnackBar} from './snackbar';


type Toast = {
    message: string
}

interface Props {
    children: React.ReactElement
}

export const SnackBarContext = createContext({
    addToast: (newToast: { message: string }) => {
    }
});

export function useSnackBar() {
    return useContext(SnackBarContext)
}

//TODO add types
//TODO check material ui snacknar api and refactor hook
export function SnackBarProvider({children}: Props) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const activeAlertIds = toasts.map(x => x.message).join(',');

    useEffect(() => {
        if (activeAlertIds.length > 0) {
            const timer = setTimeout(() => setToasts(toasts => toasts.slice(0, toasts.length - 1)), 1200);
            return () => clearTimeout(timer);
        }
    }, [activeAlertIds]);

    const addToast = useCallback((newToast: { message: string }) => setToasts(toasts => [{
        message: newToast.message,
        isOpen: true
    }, ...toasts]), []);

    const value = useMemo(() => ({addToast}), [addToast]);

    return (
        <SnackBarContext.Provider value={value}>
            {children}
            {toasts.map(toast => <SnackBar
                key={toast.message}
                message={toast.message}
            />)}
        </SnackBarContext.Provider>
    )
}
