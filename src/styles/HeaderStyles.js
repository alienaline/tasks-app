import styled from 'styled-components';

export const HeaderStyles = styled.header`
    height: 40px;
    background-color: #DAF7A6;

    .menu {
        display: none;
    }

    @media (max-width: 960px) {
        .menu {
            display: flex;

        }

        .menuButton {
        }
    }
`;