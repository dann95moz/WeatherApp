export const useGetDayName = (date:Date) => {
    const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDate()]
}

