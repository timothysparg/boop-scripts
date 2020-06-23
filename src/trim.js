/**
    {
        "api":1,
        "name":"Trim",
        "description":"trim spaces from the ends",
        "author":"Tim Sparg",
        "icon":"",
        "tags":""
    }
**/

function main(state) {
    state.fullText = state.fullText.trim();
}

module.exports = main;