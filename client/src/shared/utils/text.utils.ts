export const capitalizeFirst = (text: string): string => {
    if (!text.length)
        return text

    const [first, ...rest] = text.split('')

    return first.toUpperCase() + rest.join('').toLowerCase()
}
