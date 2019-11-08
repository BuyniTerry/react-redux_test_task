import React, {Component} from 'react';
import styled from "styled-components";
import {Container} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';

const ArticleWrapper = styled.div`
    border: 1px solid black
`;

class Article extends Component {
    render() {
        const {id, text, title, date } = this.props.article;
        return (
            <Container>
                <ArticleWrapper key={id}>
                    <h3>{ReactHtmlParser(title)}</h3>
                    {ReactHtmlParser(text)}
                    <span>{date}</span>
                </ArticleWrapper>
            </Container>
        );
    }
}

export default Article;



