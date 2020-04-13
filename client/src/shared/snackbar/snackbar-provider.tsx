import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';

import {SnackBar} from './snackbar';

const AUTO_DISMISS = 1200;

type Toast = {
    message: string
}

interface Props {
    children: React.ReactElement
}

export const SnackBarContext = createContext({
    addToast: (newToast: Toast) => {
    }
});

export function useSnackBar() {
    return useContext(SnackBarContext)
}

//TODO add types
export function SnackBarProvider({children}: Props) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const activeAlertIds = toasts.map(x => x.message).join(',');

    useEffect(() => {
        if (activeAlertIds.length > 0) {
            const timer = setTimeout(() => setToasts(toasts => toasts.slice(0, toasts.length - 1)), AUTO_DISMISS);
            return () => clearTimeout(timer);
        }
    }, [activeAlertIds]);

    const addToast = useCallback((newToas: Toast) => setToasts(toasts => [newToas, ...toasts]), []);

    const value = useMemo(() => ({addToast}), [addToast]);

    return (
        <SnackBarContext.Provider value={value}>
            {children}
            {toasts.map(toast => <SnackBar key={toast.message}>{toast.message}</SnackBar>)}
        </SnackBarContext.Provider>
    )
}
