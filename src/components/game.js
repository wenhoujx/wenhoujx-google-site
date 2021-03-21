export const nRows = 30;
export const nCols = 30;
const maxHistory = 3;

const initialState = {
    past: [],
    present: (() => {
        return Array(nRows).fill().map((row) => Array(nCols).fill(0))
    })(),
    future: []
}