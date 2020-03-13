import React, { Component } from "react";
import styled from 'styled-components';

const HeaderContainer = styled.div`
    min-height: 450px;
    color: #fff;
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    render() {
        return (
            <div className="header-container">
                <div class="bg-image"></div>
                <div class="header-text-wrap">
                    <h1>Daily Programming Journal</h1>
                    <p>Every programmer needs a way to record lessons learned and document challenges encountered. This is the perfect way to chart your progress.</p>
                    <a href="#" class="btn">Get Started</a>
                    <a href="#" class="btn">Read More</a>
                </div>
            </div>
        );
    }
}

export default Header;
