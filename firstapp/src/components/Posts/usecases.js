const POSTS_KEY_LS = 'posts'

function updateViewsForAllPosts(posts) {
    const updatedPosts = posts.map(post => {
        post.views = post.views + 1
        return post
    })
    return updatedPosts
}

function setAllPostsIntoLS(posts) {
    localStorage.setItem(POSTS_KEY_LS, JSON.stringify(posts))
}

function getAllPostsFromLS() {
    const all_posts = localStorage.getItem(POSTS_KEY_LS)
    return JSON.parse(all_posts) || []
}

function validate(posts, title, description, country) {
    const result = posts.find(post => post.title == title)
    if (result) {
        return { 
            result: {titleError: 'This title is already in use!'},
            validated: false
        }
    } else if (title.length == 0) {
        return { 
            result: {titleError: 'This field is required!'},
            validated: false
        }
    } else if (!description) {
        return { 
            result: {descriptionError: 'This field is required!'},
            validated: false
        }
    } else if (!country) {
        return { 
            result: {countryError: 'This field is required!'},
            validated: false
        }
    } else {
        return { 
            result: {titleError: "",  descriptionError: ""},
            validated: true
        }
    }
}

export {
    POSTS_KEY_LS,
    updateViewsForAllPosts,
    setAllPostsIntoLS,
    getAllPostsFromLS,
    validate
}




