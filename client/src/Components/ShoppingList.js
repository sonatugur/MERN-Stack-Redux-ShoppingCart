import React from 'react'
import { CSSTransition,TransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';

import {
    ListGroupItem,
    ListGroup,
    Button,
    Container,
} from 'reactstrap';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions.js';

class ShoppingList extends React.Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick(id) {
        this.props.deleteItem(id);
    }

    render() {
        const {items} =this.props.item;
        return (
                <Container>
                    <br/><br/><br/>
                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {items.map(({_id,name}) => (
                                <CSSTransition  key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem >
                                        <Button className="remove-btn"
                                        color="danger" size="m" onClick={this.onDeleteClick.bind(this,_id)} >&times;</Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems : PropTypes.func.isRequired,
    deleteItem : PropTypes.func.isRequired,
    item : PropTypes.object.isRequired    
}
const mapStateToProps = (state) => ({
    item : state.item
});
export default connect(mapStateToProps,{getItems,deleteItem})(ShoppingList);