const useMinuteToHours = (mins) => {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return `${hours}h ${minutes}m`
}

export default useMinuteToHours;