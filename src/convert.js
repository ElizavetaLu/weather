export const convertUnixTime = (unixTimestamp) => {
    let date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString("it-IT").slice(0, 5)
}


export const convertToCelsius = degree => Math.round(degree - 273.15)
