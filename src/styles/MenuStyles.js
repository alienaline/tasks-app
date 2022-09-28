import styled from 'styled-components';

const colors = {
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
    background-color: #F4F6F8;
    border-right: 2px solid #F1F1F1;
    min-height: 100vh;

    .menu {
        display: grid;
        align-content: start;
        margin: 80px 20px;
    }

    .buttonFolder {
        background: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 10px;
        margin: 5px 0;
        border-radius: 5px;
        text-align: left;
        &:hover {
            background-color: white;
            box-shadow: 0 0 10px #E6E6FA;
        }
    }

    .folderName {
        font-size: 20px;
    }

    .icon {
        margin-right: 10px;
        vertical-align: middle;
    }

    .removeButton {
        vertical-align: middle;
        color: #DCDCDC; 
        &:hover {
            color: #696969;
        }
    }

    .allFolderButton {
        justify-content: flex-start; 
    }

    .createFolderButton {
        justify-content: flex-start;
        color: #DCDCDC;
        &:hover {
            color: #696969;
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
        border: 2px solid #F1F1F1;
        border-radius: 10px;
    }

    .modalInput {
        border: 2px solid #F1F1F1;
        border-radius: 5px;
        padding: 10px 15px;
        margin: 18px;
    }

    .colorPicker {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 0 18px 0;
    }

    .colorPickerIcon {
        background: ${colors.blue};
        border-radius: 50%;
        height: 25px;
        width: 25px;
        margin: 0 7px;
    }

    .modalAddButton {
        background-color: #4DD599;
        border-radius: 5px;
        color: white;
        padding: 10px 15px;
        margin: 0 18px 18px 18px;
    }

    .modalCloseButton {
        position: absolute;
        background-color: #5C5C5C;
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

    @media (max-width: 960px) {
        display: absolute;
        width: 230px;

        .menu {
            display: block;
            margin: 0 15px;
            width: 200px;
        }
    }
`;