// Function to get todays date and return it in MM/DD/YYYY format
export const getTodaysDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = String(today.getFullYear());
    return `${month}/${day}/${year}`;
};

// Function to convert a time string and a date string to a Date object to be used as a notification trigger
export const convertToNotificationTrigger = (timeString, dateString) => {
    // Parse the date string
    const [month, day, year] = dateString.split('/').map(Number);
    const notificationDate = new Date(year, month - 1, day);

    // Parse the time string
    const [time, period] = timeString.split(/(am|pm)/i);
    const [hour, minute] = time.split(":").map(Number);
    
    let hours = hour;
    if (period && period.toLowerCase() === "pm" && hour < 12) {
        hours += 12;
    } else if (period && period.toLowerCase() === "am" && hour === 12) {
        hours = 0;
    }

    notificationDate.setHours(hours);
    notificationDate.setMinutes(minute);
    notificationDate.setSeconds(0);

    return notificationDate;
};

// Function to check if a time in (7:00pm) format has passed
export const hasTimePassed = (timeString) => {
    const now = new Date();
    
    const [time, period] = timeString.split(/(am|pm)/i);
    const [hour, minute] = time.split(":").map(Number);
    
    let hours = hour;
    if (period && period.toLowerCase() === "pm" && hour < 12) {
        hours += 12;
    } else if (period && period.toLowerCase() === "am" && hour === 12) {
        hours = 0; 
    }

    const targetDate = new Date(now);
    targetDate.setHours(hours);
    targetDate.setMinutes(minute);
    targetDate.setSeconds(0);

    return now > targetDate;
};

export const clearAsyncStorage = async () => {
    await AsyncStorage.clear();
};

// Filter for future chores
export const filterFutureChores = (choresData, reminder, name) => {
    const chores = choresData.filter(chore => {
        const [month, day, year] = chore.date.split('/').map(Number);
        const choreDate = new Date(year, month - 1, day);

        // convert reminder to hours and minutes
        const [time, period] = reminder.split(/(?=am|pm)/i);
        const [hour, minute] = time.split(':').map(Number);

        let adjustedHour = hour;
        if (period.toLowerCase() === 'pm' && hour !== 12) {
            adjustedHour += 12;
        } else if (period.toLowerCase() === 'am' && hour === 12) {
            adjustedHour = 0;
        }

        choreDate.setHours(adjustedHour, minute, 0, 0);

        const today = new Date();

        return chore.name === name && choreDate >= today;
    });

    return chores;
}