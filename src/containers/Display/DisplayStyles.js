/* eslint-disable no-unused-vars */
import styled from 'styled-components';

const colorsUI = {
    border: '#F1F1F1',
    mockText: '#B4B4B4',
    grayButton: '#9C9C9C',
    submitButton: '#4DD599',
    cancelButton: '#F4F6F8',
    cancelButtonText: '#9C9C9C',
    defaultTextColor: '#2F4F4F',
    checkboxColor: '#4DD599',
    scrollbarThumb: '#FFDAB9'
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
    height: 100vh;
    position: relative;

    .displayContent {
        box-sizing: border-box;
        padding: 85px 60px 20px 60px;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 3px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 2px;
            background-color: red;
            background-color: ${colorsUI.scrollbarThumb};
        }
    }

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
        display: flex;
        align-items: center;
        transition: all 1s ease;
        word-wrap: break-word;
    }

    input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        min-width: 1em;
        min-height: 1em;
        border-radius: 50%;
        margin-right: 0.5em;
        border: 0.15em solid ${colorsUI.checkboxColor};
        outline: none;
        cursor: pointer;
    }

    input.checked {
        background-color: ${colorsUI.checkboxColor};
    }
    
    .taskText {
        font-size: 22px;
        color: ${colorsUI.defaultTextColor};

        &[data-state='completed'] {
            text-decoration: line-through wavy ${colors.pink};
        }
    }

    .buttonRemove {
        margin: 0 15px;
    }

    .iconRemove {
        color: ${colorsUI.grayButton};
        &:hover {
            color: ${colorsUI.defaultTextColor}
        }
    }

    .buttonClear,
    .newTaskButton {
        display: flex;
        align-items: center;
        color: ${colorsUI.grayButton};
        &:hover {
            color: ${colorsUI.defaultTextColor}
        }
    }

    .mockText {
        color: ${colorsUI.mockText};
        font-size: 22px;
        margin: 15px 0;
    }

    .tasksListForm {
        margin: 10px 0;
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

    @media (max-width: 385px) {
        margin: 45px 20px;
        
        .displayContent {
            padding: 45px 0;

            &::-webkit-scrollbar {
                display: none;
            }
        }

    }
`;