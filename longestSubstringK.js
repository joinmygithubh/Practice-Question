function longestSubstringK(n, str, k) {
    let res = 0;
    for (let targetUniques = 1; targetUniques <= 26; targetUniques++) {
        let i = 0, j = 0;
        let freq = {};
        let charsWithKFreq = 0;

        while (j < n) {
            if (Object.keys(freq).length <= targetUniques) {
                if (!freq[str[j]]) {
                    freq[str[j]] = 1;
                } else {
                    freq[str[j]]++;
                }
                if (freq[str[j]] == k) {
                    charsWithKFreq++;
                }
                j++;
            } else {
                if (freq[str[i]] == k) {
                    charsWithKFreq--;
                }
                freq[str[i]]--;
                if (freq[str[i]] === 0) {
                    delete freq[str[i]];
                }
                i++;
            }

            if (charsWithKFreq === Object.keys(freq).length) {
                res = Math.max(res, j - i);
            }
        }
    }
    console.log(res)
}
