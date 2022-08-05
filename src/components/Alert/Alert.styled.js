import styled from 'styled-components';

const DefaultStyles = styled.div`
    background-color: yellow;
    display: block; 
    padding: 15px 25px;
    border: 1px solid rgb(184 218 255);
    border-radius: 5px;
`

const StyledAlert = styled(DefaultStyles)`
    background-color: ${ props => props.theme[props.variant]};
`

export { StyledAlert };