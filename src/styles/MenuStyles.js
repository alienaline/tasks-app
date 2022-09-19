import styled from 'styled-components';

export const MenuStyles = styled.div`
    background-color: #F4F6F8;
    border-right: 2px solid #F1F1F1;
    min-height: 100vh;

    .menu {
        display: grid;
        align-content: start;
        margin: 80px 20px;
    }

    .folderButton {
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

    .icon {
        margin-right: 10px;
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