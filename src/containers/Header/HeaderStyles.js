import styled from 'styled-components';

const colorsUI = {
    background: '#DAF7A6',
    border: '#8FBC8B',
    icon: '#8FBC8B'
};

export const HeaderStyles = styled.header`
    height: 5%;
    background-color: ${colorsUI.background};
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 5;


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
            border: 1px solid ${colorsUI.border};
            border-radius: 4px;
            padding: 5px 8px;
        }

        .icon {
            color: ${colorsUI.icon};
        }
    }
`;