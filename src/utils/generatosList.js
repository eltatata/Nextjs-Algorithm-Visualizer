export const generateList = () => {
    const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50))
    return numbers;
}

export const generateListNoRepeats = () => {
    const generatedNumbers = new Set();
    while (generatedNumbers.size < 10) {
        generatedNumbers.add(Math.floor(Math.random() * 50));
    }

    return Array.from(generatedNumbers);
}