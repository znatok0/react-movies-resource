import React from 'react';
import styled from 'styled-components';
import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';
import {StyledHeader, StyledRMDBLogo, StyledTMDBLogo} from '../styles/StyledHeader';

const Header = () => (
<StyledHeader>
    <div className="header-content">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"></StyledRMDBLogo>
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo"></StyledTMDBLogo>
    </div>
</StyledHeader>
)

export default Header;