import React, {Component} from 'react';
import { connect } from 'react-redux'
import Article from "../components/Article";
import { articleAction } from '../store/actions/articleAction'
import { commentsAction } from '../store/actions/commentsAction'
// import { articleReducer } from '../store/reducers/articleReducer'
// import { commentsData } from '../data/API'
import Comments from "../components/Comments";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 300px;
    text-align: left;
`;

class Posts extends Component {
    componentDidMount() {
        this.props.getResponseArticles();
        this.props.getResponseComments();
    }

    render() {
        return (
            <Wrapper>
                {this.props.art.map( article => (
                    <Article key={Math.random()} article={article} />
                ) )}
                {/*{console.log(this.props.art)}*/}
                {this.props.com.map( comment => (
                    <Comments key={Math.random()} {...comment} />
                ))}
                {/*{console.log(this.props.com)}*/}
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        art: state.artRed.articles,
        com: state.comRed.comments
    }
};

const mapDispatchToProps = dispatch => ({
        getResponseArticles: () => dispatch(articleAction()),
        getResponseComments: () => dispatch(commentsAction())

    });

export default connect(mapStateToProps, mapDispatchToProps)(Posts);