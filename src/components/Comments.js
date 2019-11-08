import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from "styled-components";
import {FaHeart} from 'react-icons/fa'

const WrapperList = styled.div`
        margin-left: 20px;
    `;

class Comments extends Component {
    state = {
        counter: this.props.likes
    };


    handleClick = () => {
        if(this.state.counter === undefined || NaN) {
            return (this.setState({counter: 1}))
        }
        return (
            this.setState({counter: this.state.counter + 1})
        )

    };

    render() {
        const {commentText, name, replies } = this.props;

        return (
            <div>
                    <h6>{name}</h6>
                    <p>{ReactHtmlParser(commentText)}</p>
                    <FaHeart onClick={this.handleClick}/>
                    <span>{this.state.counter}</span>
                {console.log(this.state.counter)}
                {replies && replies.length !== 0 ?
                    replies.map((item) => {
                        return (
                        <WrapperList key={Math.random()}><Comments {...item} /></WrapperList>
                        )
                    })
                    :
                    false}
            </div>
        );
    }
}

export default Comments;