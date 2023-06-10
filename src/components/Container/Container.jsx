import PropTypes from 'prop-types';

export function Container({ children }) { 
    return <Container>{children}</Container>;
}

Container.propTypes = {
    children: PropTypes.node.isRequired
};