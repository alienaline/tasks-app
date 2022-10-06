/* eslint-disable no-unused-vars */
import styled from 'styled-components';

const colorsUI = {
    border: '#F1F1F1',
    mockText: '#B4B4B4',
    grayButton: '#9C9C9C',
    submitButton: '#4DD599',
    cancelButton: '#F4F6F8',
    cancelButtonText: '#9C9C9C',
    defaultTextColor: '#2F4F4F'
};

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
        vertical-align: middle;
    }

    hr {
        background: ${colorsUI.border};
        border: 1px solid ${colorsUI.border};
        margin: 5px 0;
    }

    .listHeader {
        margin-bottom: 10px;
        font-size: 36px;
        font-weight: 700;
        color: ${colorsUI.defaultTextColor};
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
        color: ${colorsUI.defaultTextColor}
    }

    .mockText {
        color: ${colorsUI.mockText};
        font-size: 22px;
        margin: 15px 0;
    }

    .tasksListForm {
        margin: 10px 0;
    }

    .newTaskButton {
        color: ${colorsUI.grayButton};
        vertical-align: 
    }

    .form {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .inputTasksForm {
        width: 100%;
        border: 2px solid ${colorsUI.border};
        border-radius: 4px;
        padding: 10px 15px;
        margin: 0 0 15px 0;
        color: ${colorsUI.defaultTextColor};
    }

    .submitButton {
        border-radius: 4px;
        padding: 10px 15px;
        background-color: ${colorsUI.submitButton};
        color: white;
        margin: 0 15px 0 0;
    }

    .cancelButton {
        border-radius: 4px;
        padding: 10px 15px;
        background-color: ${colorsUI.cancelButton};
        color: ${colorsUI.cancelButtonText};
    }

    .active {
        display: block;
    }

    .disabled {
        display: none;
    }
    
`;