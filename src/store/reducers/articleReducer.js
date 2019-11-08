const initialState = {
    articles: []
};
const articleReducer = (state = initialState, action) => {
    // if (action.type === actionTypes.GET_ARTICLE) {\
    const articles = [
        ...state.articles,
        ...(action.articles||[])
    ]
    // console.log(articles)
    return {
        ...state,
        articles
        // articles: state.article.concat({
        }
    // }
};

export default articleReducer;