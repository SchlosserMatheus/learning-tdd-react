import React, {Component} from 'react';

const style = {
    root: {
        padding: '10px',
        border: '1px solid red'
    }
};

class TaskList extends Component {
    render() {
        return (
            <div style={style.root} className={'task-list'}>
                {this.props.children}
            </div>
        );
    }
}

export default TaskList;