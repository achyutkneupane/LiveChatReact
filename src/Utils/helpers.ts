export const fullName = (firstName? : string, middleName? : string, lastName? : string) => {
    return `${firstName!} ${middleName ? middleName + " " : ""}${lastName!}`;
}