import styled from 'styled-components';

const color =  type => {
    switch(type) {
        case 'success':
            return '#eaf0cc';
        case 'warning':
            return '#fff3cd';
        case 'danger':
            return '#f0cfcc';
        default:
            return '#eaf0cc';
    }
}

export const Alert = styled.div`
    display: ${props => props.visible ? 'flex' : 'none'};
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    border-radius: 5px;
    background-color: ${props => color(props.type)};
    margin: 1em;
`

export const Button = styled.button`
    background-color: transparent;
    border: 0;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    text-shadow: 0 1px 0 #fff;
    opacity: 50%;
    cursor: pointer;
`