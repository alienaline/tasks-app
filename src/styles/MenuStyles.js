/* eslint-disable no-unused-vars */
import styled from 'styled-components';

const colorsUI = {
    background: '#F4F6F8',
    border: '#F1F1F1',
    menuText: '#B4B4B4',
    boxShadow: '#E6E6FA',
    icon: '#DCDCDC',
    iconHover: '#696969',
    addButton: '#4DD599',
    closeButton: '#5C5C5C',
    defaultTextColor: '#2F4F4F',
};

const colorPicker = {
    blue: '#B0E0E6',
    green: '#B6E6BD',
    gray: '#778899',
    yellow: '#FFC300',
    pink: '#FA8072',
    purple: '#663399',
    brown: '#A0522D',
    navy: '#0000CD'
};

export const MenuStyles = styled.div`
    background-color: ${colorsUI.background};
    border-right: 2px solid ${colorsUI.border};
    min-height: 100vh;

    .menu {
        display: grid;
        align-content: start;
        margin: 85px 15px;
        color: ${colorsUI.menuText};
        position: relative;
    }

    .menuHeader {
        font-size: 36px;
        font-weight: 700;
        margin: 0 10px 10px 10px;
    }

    .listButton {
        background: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 10px;
        margin: 5px 0;
        border-radius: 5px;
        text-align: left;
        transition: background-color 0.5s linear;
        &:hover {
            background-color: white;
            box-shadow: 0 0 10px  ${colorsUI.boxShadow};
        }
    }

    .listName {
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${colorsUI.defaultTextColor};
    }

    .icon {
        margin-right: 15px;
        vertical-align: middle;
    }

    .listColorIcon {  
        display: inline-flex;
        border-radius: 50%;
        height: 11px;
        width: 11px;
        background-color: black;
        vertical-align: middle;
    }

    .removeButton {
        vertical-align: middle;
        color: ${colorsUI.icon}; 
        &:hover {
            color: ${colorsUI.iconHover};
        }
    }

    .createListButton {
        justify-content: flex-start;
        color: ${colorsUI.icon};
        transition: background-color 0.5s linear;
        &:hover {
            color: ${colorsUI.iconHover};
        }
    }

    .modal {
        margin: 10px 0;
        position: relative;
    }

    .modalForm {
        display: grid;
    }

    .modalContent {
        background-color: white;
        border: 2px solid ${colorsUI.border};
        border-radius: 10px;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
    }

    .modalInput {
        border: 2px solid ${colorsUI.border};
        border-radius: 5px;
        padding: 10px 15px;
        margin: 18px;
        color: ${colorsUI.defaultTextColor};
    }

    .colorPicker {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 0 18px 0;
    }

    .colorPickerIcon {
        background: ${colorPicker.blue};
        border-radius: 50%;
        height: 25px;
        width: 25px;
        margin: 0 7px;
        cursor: pointer;
        transition: border 1s ease;
        &:focus {
            border: 3px solid #DAF7A6;
        }
    }

    .blue {
        background-color: ${colorPicker.blue};
    }
    .green {
        background-color: ${colorPicker.green};
    }
    .gray {
        background-color: ${colorPicker.gray};
    }
    .yellow {
        background-color: ${colorPicker.yellow};
    }
    .pink {
        background-color: ${colorPicker.pink};
    }
    .purple {
        background-color: ${colorPicker.purple};
    }
    .brown {
        background-color: ${colorPicker.brown};
    }
    .navy {
        background-color: ${colorPicker.navy};
    }

    .modalAddButton {
        background-color: ${colorsUI.addButton};
        border-radius: 5px;
        color: white;
        padding: 10px 15px;
        margin: 0 18px 18px 18px;
    }

    .modalCloseButton {
        position: absolute;
        background-color: ${colorsUI.closeButton};
        border-radius: 50%;
        padding: 3px 5px;
        top: -7px;
        right: -7px;
    }

    .modalCloseButtonIcon {
        color: white;
        vertical-align: middle;
    }

    .active {
        display: block;
    }

    .disabled {
        display: none;
    }

    @media (max-width: 1280px) {

        .menu {
            margin: 85px 7px;
        }

        .modal {
            position: relative;
        }
    }

    @media (max-width: 960px) {
        position: absolute;
        width: 230px;
        top: 40px;
        box-shadow: 0px 10px 30px ${colorsUI.boxShadow};

        .menu {
            display: block;
            margin: 85px auto;
            width: 200px;
        }

        .modal {
            position: absolute;
        }
    }
`;