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

export const DisplayStyles = styled.div`
    margin: 85px 60px 60px 60px;

    .icon {
        margin-right: 10px;
        color: #75787e;
        vertical-align: middle;
    }

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

    .blue {
        color: ${colors.blue};
    }
    .green {
        color: ${colors.green};
    }
    .gray {
        color: ${colors.gray};
    }
    .yellow {
        color: ${colors.yellow};
    }
    .pink {
        color: ${colors.pink};
    }
    .purple {
        color: ${colors.purple};
    }
    .brown {
        color: ${colors.brown};
    }
    .navy {
        color: ${colors.navy};
    }

    .tasksList {
        margin: 30px 0;
    }

    .task {
        margin: 15px 0;
    }

    .taskText {
        font-size: 22px;
    }

    .mockText {
        color: #B4B4B4;
        font-size: 22px;
        margin: 15px 0;
    }

    .tasksListForm {
        margin: 10px 0;
    }

    .addTaskButton {
        color: #9C9C9C;
        vertical-align: 
    }

    .form {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .inputTasksForm {
        width: 100%;
        border: 1px solid #EFEFEF;
        border-radius: 4px;
        padding: 10px 15px;
        margin: 0 0 15px 0;
    }

    .buttonSubmit {
        border-radius: 4px;
        padding: 10px 15px;
        background-color: #4DD599;
        color: white;
        margin: 0 15px 0 0;
    }

    .buttonCancel {
        border-radius: 4px;
        padding: 10px 15px;
        background-color: #F4F6F8;
        color: #9C9C9C;
    }

    .active {
        display: block;
    }

    .disabled {
        display: none;
    }
    
`;