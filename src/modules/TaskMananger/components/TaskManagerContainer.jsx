import React, {Component} from 'react';
import TaskList from "./TaskList";
import TaskItem from "./TaskItem";

class TaskManagerContainer extends Component {

    state = {
        tasks: [
            { text: 'Realizar compras' , checked: false },
            { text: 'Assistir vídeo aulas' , checked: false },
            { text: 'Passar o recado para o joão' , checked: false },
        ]
    };

    handleChangeChecked = (key, checkedState) => {
        const state = {...this.state};
        state.tasks[key].checked = checkedState;
        const first = [...state.tasks].filter(item => item.checked === false);
        const last = [...state.tasks].filter(item => item.checked === true);
        state.tasks = [...first, ...last];
        this.setState(state);
    };

    render() {
        return (
            <TaskList>
                <h1>TESTE</h1>
                {this.state.tasks.map((item, key) => (
                    <TaskItem key={key}
                      text={item.text}
                      checked={item.checked}
                      changeChecked={event => this.handleChangeChecked(key, !item.checked)}
                    />
                ))}
            </TaskList>
        );
    }
}

export default TaskManagerContainer;