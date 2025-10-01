var findRepeatedDnaSequences = function(s) {
    const len = s.length;
    if (len < 10) return [];
    const seen = new Set();
    const repeated = new Set();
    for (let i = 0; i <= len - 10; i++) {
        const seq = s.substring(i, i + 10);
        if (seen.has(seq)) {
            repeated.add(seq);
        } 
        else {
            seen.add(seq);
        }
    }


    return Array.from(repeated);
};