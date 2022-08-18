import styled from 'styled-components';

export const HeaderStyles = styled.header`
    height: 40px;
    background-color: #DAF7A6;
`;

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
`;

export const DisplayStyles = styled.div`
    margin: 85px 60px 60px 60px;

    hr {
        background: #F1F1F1;
        border: 1px solid #F1F1F1;
        margin: 5px 0;
    }

    .folderHeader {
        margin-bottom: 10px;
        font-size: 36px;
        font-weight: 700;
    }

    .comment {
        display: flex;
        font-size: 12px;
        color: #75787e;
    }

    .commentInput {
        width: 100%;
        color: #75787e;
    }
`;