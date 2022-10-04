// This function for generate the minimum estimate date for return
export const estimateMin = (borrowDate) => {
    if (borrowDate) {     
        // Convert value borrowDate from string to Date 
        const borrowDay = new Date(borrowDate)
        // Variable for lend date range with estimate date
        const range = 7 // days
        // This will generate minimum estimated date 
        // of the borrowDate value with the specified range
        const estimateDay = new Date(borrowDay.getTime()+range*24*60*60*1000)
        // Convert estimateDay value into string (format: "YYYY-MM-DD")
        return new Date(estimateDay).toISOString().split("T")[0]
    // When the borrowDate value is null or undefined 
    // will generate the minimum estimated date is tomorrow
    } else {
        const estimateDay = new Date(Date.now()+1*24*60*60*1000)
        return new Date(estimateDay).toISOString().split("T")[0]
    }
}