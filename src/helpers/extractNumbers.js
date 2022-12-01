export const extractNumbers = ( str) => {
    let numb = str.match(/\d/g);
    numb = numb.join("");
    return Number(numb)
}