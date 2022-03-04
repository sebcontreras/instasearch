
const matchKeyWords = (post, keywords) => {
    var matched = [];
    for (var keyword of keywords) {
        // console.log(`key word: ${keyword}`);
        if (post.data) {
            for (var data of post.data) {
                if (data.includes(keyword)) {
                    console.log(`key word matched`);
                    matched.push(keyword);
                    break;
                }
            }
        }
    }
    return matched;
}

const filterData = (data, keywords) => {

    // loop data
    // match keywords to post
    // return matched keywords array from each
    // if matched keywords > 0
    // append matched keywords to post
    // sort posts by matched keywords
    // return
    if (keywords === null || keywords.length === 0) {
        console.log('no keywords for matching provided, returning all');
        return data;
    }

    if (data === null || data.length === 0) {
        console.log(`null data to search`);
        return null;
    }

    var posts = data;
    console.log('print postscopy below');
    console.log(posts);
    console.log(`after postcopy`);
    console.log(`posts length: ${posts.length}`);

    var filteredPosts = [];

    for (var i = 0; i < posts.length; i++) {
        console.log(`Checking post...`);
        var matched = matchKeyWords(posts[i], keywords);
        if (matched.length > 0) {
            posts[i].matched = matched;
            filteredPosts.push(posts[i]);
            console.log(`FOUND MATCH:`);
            console.log(posts[i]);
        } else {
            console.log(`No match...`);
            console.log(posts[i]);
        }
    }

    // sort by matched then date

    return filteredPosts;
}

module.exports = {
    filterData
};