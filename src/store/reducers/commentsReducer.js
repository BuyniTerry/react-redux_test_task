const initialState = {
    comments: []
};
const commentsReducer = (state = initialState, action) => {
    // if (action.type === actionTypes.GET_ARTICLE) {\
    const comments = [
        ...state.comments,
        ...(action.comments||[])
    ]
    // console.log(articles)
    return {
        ...state,
        comments
        // articles: state.article.concat({
    }
    // }
};

export default commentsReducer;