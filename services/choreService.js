import * as Papa from 'papaparse';

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