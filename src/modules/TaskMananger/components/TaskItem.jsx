import React, {Component} from 'react';

import PropTypes from 'prop-types';

class TaskItem extends Component
{
    render() {

        const { checked, changeChecked, text} = this.props;
        const textStyle = (checked) ? {color: 'red'} : {color: 'black'};

        return (
            <div>
                <input type="checkbox" onChange={changeChecked} checked={checked}/>
                <span style={textStyle}>{text}</span>
            </div>
        );
    }
}

TaskItem.propTypes = {
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    changeChecked: PropTypes.func.isRequired
};

export default TaskItem;