import React from "react";
import { Container } from "bloomer";
import "./Issue.css";

const Issue = props => {
    const { title, html_url, body } = props.issue;
    return (
        <>
            <Container isFluid className="singleIssue">
                <h1>{title}</h1>
                <a href={html_url}>{html_url}</a>
                <p>{body}</p>
            </Container>
        </>
    )
}

export default Issue;