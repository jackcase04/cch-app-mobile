import * as Papa from 'papaparse';

// This file just parses the CSV data into a format that can be used by the app
// Does so for chores data into format { {date, name, location}, ... }
// for names just { name1, name2, ... }

// Parse the data from the CSV file
export const parseChoresData = (data) => {
    const results = Papa.parse(data, {
        header: false,
        skipEmptyLines: true
    });
    
    return results.data.map(([date, name, location]) => ({
        date,
        name,
        location
    }));
}

// Parse the names from the CSV file
export const parseNamesData = (data) => {
    const results = Papa.parse(data, {
        header: false,
        skipEmptyLines: true
    });

    return results.data.map(([name]) => name);
}