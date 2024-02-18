export const useGetDayName = () => {
    return function(language = 'en',date: Date) {
        return new Intl.DateTimeFormat(language, { weekday: 'long' }).format(date);
    }
}
