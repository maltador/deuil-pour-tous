export const dateParser = (num) => {
    let options = {
        hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "long",
        year: "numeric", month: "short", day: "numeric"
    };
    let timestamp= Date.parse(num);
    let date= new Date(timestamp).toLocaleDateString('fr-FR', options);
    return date.toString();
}

export const isEmpty=(value)=>{
    return(
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    );
}

export const formatDate= (isoString)=>{
    const date= new Date(isoString);
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth()+1),
        date.getFullYear(),
    ].join('/');
}

export const formatDefaultDate =(isoString)=>{
    const date= new Date(isoString);
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth()+1),
        padTo2Digits(date.getDate()),
    ].join('-');
}

function padTo2Digits(num){
    return num.toString().padStart(2, '0');
}