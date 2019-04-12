import React from 'react';
import {mount, shallow} from 'enzyme';
import TaskItem from "./TaskItem";
import sinon from "sinon";

describe("Testing TaskItem Component",() => {

    it("should render correctly",() => {
        const wrapper = shallow(<TaskItem text={'teste'} checked={false} changeChecked={ ()=> null} />);
        expect(wrapper.contains(
            <div>
                <input/>
                <span>teste</span>
            </div>
        ));
    });

    it('Should render input type checkbox', () => {
        const wrapper = shallow(<TaskItem text={'teste'} checked={false} changeChecked={ ()=> null} />);
        expect(wrapper.find('input[type="checkbox"][onChange][checked]').length).toEqual(1);
    });

    it('Should simulate event change of checkbox', () => {
        const changeChecked = sinon.spy();
        const wrapper = mount(<TaskItem changeChecked={changeChecked} text={'test'} checked={false}/>);
        wrapper.find('input').simulate('change');
        expect(changeChecked.callCount).toEqual(1);
    });

    it('Should render the text with red style when task is checked', () => {
        const wrapper = shallow(<TaskItem text={'teste'} checked={true} changeChecked={ ()=> null} />);
        const span = wrapper.find('span').first();
        if(span.length) expect(span.prop('style')).toHaveProperty('color', 'red');
        else{
            throw new Error(`Should have at least one span`);
        }
    });

    it('Should render the text with black style when task is not checked', () => {
        const wrapper = shallow(<TaskItem text={'teste'} checked={false} changeChecked={ ()=> null} />);
        const span = wrapper.find('span').first();
        if(span.length) expect(span.prop('style')).toHaveProperty('color', 'black');
        else{
            throw new Error(`Should have at least one span`);
        }
    });

    it('Check TaskItem snapshot version with prop checked true', () => {
        const wrapper = shallow(<TaskItem text={'teste'} checked={true} changeChecked={ ()=> null} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Check TaskItem snapshot version with prop checked false', () => {
        const wrapper = shallow(<TaskItem text={'teste'} checked={false} changeChecked={ ()=> null} />);
        expect(wrapper).toMatchSnapshot();
    });
});