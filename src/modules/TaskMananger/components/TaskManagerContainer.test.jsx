import React from 'react';
import { shallow, mount } from 'enzyme';
import TaskManagerContainer from "./TaskManagerContainer";
import TaskItem from "./TaskItem";

describe('Test TaskManagerContainer Component',  () => {

    it('Check if initial state has three tasks', () => {
        const wrapper = shallow(<TaskManagerContainer/>);
        expect(wrapper.instance().state.tasks.length).toEqual(3);
    });

    /**
     * todo realizar tradução do comentário sobre o reverse dos items quando atualizados com checked true/false
     */
    it('Check if a prop "checked" of a task is updated by method "handleChangeChecked"', () => {
        const wrapper = shallow(<TaskManagerContainer/>);
        const wrapperInstance = wrapper.instance();
        /**
         * os itens que são marcados como checked são jogados para para o final, portanto como todos
         * estão marcados como false, e apenas o item 0 foi marcado como true, ele será jogado para o ultimo item.
         * Então a indice dele de 2 ( porque o estado inicial é criado com 3 items )
         */
        wrapperInstance.handleChangeChecked(0, true);
        expect(wrapperInstance.state.tasks[2].checked).toEqual(true);
    });


    it('dever renderizar tres componentes',() => {
        const wrapper = shallow(<TaskManagerContainer/>);
        expect(wrapper.find('TaskItem')).toHaveLength(3);
    });

    it('Check snapshot version', () => {
        const wrapper = shallow(<TaskManagerContainer/>);
        expect(wrapper).toMatchSnapshot();
    });


});