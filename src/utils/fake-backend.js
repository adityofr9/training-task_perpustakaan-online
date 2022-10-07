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


// Sorting Books Table based on book status
export const sortedStatus = (books) => {
    // First sort criteria by input date
    const sorted = books.sort((a, b) => {
        return new Date(b.inputDate) - new Date(a.inputDate)
    })

    // Second sort criteria by book status and input date
    sorted.sort((a, b) => {
        let fa = a.status
        let fb = b.status

        if (fa === "Borrowed" && fb === "Available") {
            return -1
        }
        if (fa === "Available" && fb === "Borrowed") {
            return 1
        }
        return 0
    })
}


// Sorting Transaction Table based on return status and lend date
export const sortedReturn = (transaction) => {
    // First sort criteria by lend date
    const sorted = transaction.sort((a, b) => {
        return new Date(b.borrowDate) - new Date(a.borrowDate)
    })

    // First sort criteria by Returned Book Status
    sorted.sort((a, b) => {
        let fa = a.returnedDate
        let fb = b.returnedDate

        if (fa === "" && fb !== "") {
            return -1
        }
        if (fa !== "" && fb === "") {
            return 1
        }
        return 0
    })

    // This logic if you want to sort by Returned Date
    // Second sort criteria by Returned Date
    // const sorted = status.sort((a,b) => {
    //     let sa = a.returnedDate
    //     let sb = b.returnedDate

    //     if (sa !== "" && sb !== "") {
    //         return new Date(sb) - new Date(sa)
    //     }

    //     if (sa === "" && sb === "") {
    //         return 0
    //     }
    // })
    // return sorted

}