import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <>
        <Banner>
            <h1>Universopedia</h1>
            <iframe src="https://giphy.com/embed/VI2UC13hwWin1MIfmi" width='150px' height='100px'></iframe>
        </Banner>
    </>
    
  )
}

export default Header

const Banner = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: silver;
`;