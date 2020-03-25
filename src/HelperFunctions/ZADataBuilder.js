// const genderChecker = (data) => {

// }

const dataBuilder = (data) => {
    let newData = {}
    let provinces = {
        "GP": 0, "KZN": 0, "WC": 0, "EC": 0, "NC": 0, "NW": 0, "FS": 0, "LP": 0, "MP": 0, "untracked": 0
    }
    let ages = {
        "minors": 0, "youngAdults": 0, "adults": 0, "adultsOver40": 0, "adultsOver50": 0, "seniors": 0, "unspecified": 0
    }
    let genders = {
        "male": 0, "female": 0, "unspecified": 0
    }
    let transmission_types = {
        "travel": 0, "pending": 0, "no_travel": 0, "visit": 0
    }

    for (let index = 0; index < data.length; index++) {
        if (data[index]["gender"] === "male") {
            genders = { ...genders, "male": genders["male"] + 1 }
        } else if (data[index]["gender"] === "female") {
            genders = { ...genders, "female": genders["female"] + 1 }
        } else {
            genders = { ...genders, "unspecified": genders["unspecified"] + 1 }
        }

        if (data[index]["age"] === "" && data[index]["age"] === "") {
            ages = { ...ages, "unspecified": ages["unspecified"] + 1 }
        } else if (data[index]["age"] < 18) {
            ages = { ...ages, "minors": ages["minors"] + 1 }
        } else if (data[index]["age"] >= 18 && data[index]["age"] < 30) {
            ages = { ...ages, "youngAdults": ages["youngAdults"] + 1 }
        } else if (data[index]["age"] >= 30 && data[index]["age"] < 40) {
            ages = { ...ages, "adults": ages["adults"] + 1 }
        } else if (data[index]["age"] >= 40 && data[index]["age"] < 50) {
            ages = { ...ages, "adultsOver40": ages["adultsOver40"] + 1 }
        } else if (data[index]["age"] >= 50 && data[index]["age"] < 59) {
            ages = { ...ages, "adultsOver50": ages["adultsOver50"] + 1 }
        } else {
            ages = { ...ages, "seniors": ages["seniors"] + 1 }
        }

        if (data[index]["transmission_type"].substring(0, 5) === "Trave" || data[index]["transmission_type"] === "r") {
            transmission_types = {
                ...transmission_types, "travel": transmission_types["travel"] + 1
            }
        } else if (data[index]["transmission_type"].substring(0, 5) === "Visit") {
            transmission_types = {
                ...transmission_types, "visit": transmission_types["visit"] + 1
            }
        } else if (data[index]["transmission_type"].substring(0, 5) === "no in") {
            transmission_types = {
                ...transmission_types, "no_travel": transmission_types["no_travel"] + 1
            }
        } else if (data[index]["transmission_type"].substring(0, 6) === "with n") {
            transmission_types = {
                ...transmission_types, "no_travel": transmission_types["no_travel"] + 1
            }
        } else {
            transmission_types = {
                ...transmission_types, "pending": transmission_types["pending"] + 1
            }
        }

        if (data[index]["validators"] === "GP") {
            provinces = { ...provinces, "GP": provinces["GP"] + 1 }
        } else if (data[index]["validators"] === "WC") {
            provinces = { ...provinces, "WC": provinces["WC"] + 1 }
        } else if (data[index]["validators"] === "KZN") {
            provinces = { ...provinces, "KZN": provinces["KZN"] + 1 }
        } else if (data[index]["validators"] === "EC") {
            provinces = { ...provinces, "EC": provinces["EC"] + 1 }
        } else if (data[index]["validators"] === "NC") {
            provinces = { ...provinces, "NC": provinces["NC"] + 1 }
        } else if (data[index]["validators"] === "NW") {
            provinces = { ...provinces, "NW": provinces["NW"] + 1 }
        } else if (data[index]["validators"] === "LP") {
            provinces = { ...provinces, "LP": provinces["LP"] + 1 }
        } else if (data[index]["validators"] === "MP") {
            provinces = { ...provinces, "MP": provinces["MP"] + 1 }
        } else if (data[index]["validators"] === "FS") {
            provinces = { ...provinces, "FS": provinces["FS"] + 1 }
        } else {
            provinces = { ...provinces, "untracked": provinces["untracked"] + 1 }
        }
    }

    newData = {
        ages: ages,
        genders: genders,
        transmission_types: transmission_types,
        provinces: provinces
    }

    return newData;
}

export default dataBuilder;