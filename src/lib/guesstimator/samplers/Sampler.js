var jStat = require('jstat').jStat;

export const Sample = (n, sampler, inputs) => {
    let results = []
    while (results.length < n) {
      results.push(sampler.apply(inputs))
    }
    return results
}
