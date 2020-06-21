/**
    {
        "api":1,
        "name":"Dasher",
        "description":"replace spaces with dashes",
        "author":"Tim Sparg",
        "icon":"dash",
        "tags":""
    }
**/

function main(state) {
    state.fullText = state.fullText.replace(/ /g ,'-');
}

module.exports = main;