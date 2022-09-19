import styled from 'styled-components';

export const HeaderStyles = styled.header`
    height: 40px;
    background-color: #DAF7A6;
    display: flex;
    align-items: center;

    .menu {
        display: none;
    }

    @media (max-width: 960px) {
        .menu {
            display: block;
            margin: 0 15px;
        }

        .menuButton {
            display: flex;
            border: 1px solid #8FBC8B;
            border-radius: 4px;
            padding: 5px 8px;
        }

        .icon {
            color: #8FBC8B;
        }
    }
`;