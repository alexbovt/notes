export const getRouteName = (path: string): string => {
    const locationParts = path.split('/').filter(x => x !== '')

    return locationParts.length > 0 ? locationParts[0] : ''
}
