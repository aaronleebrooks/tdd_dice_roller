import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from './components/buttons/Button';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

const mockFn = jest.fn();

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render 6 dice holders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.holder')).to.have.length(6);
    expect(wrapper.find('.roller')).to.have.length(6);
    expect(wrapper.find('.clear')).to.have.length(6);
  });

it('should generate a random integer between 1 and the maximum', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.instance()._getRandomIntInclusive(4)).to.be.a('number');
	expect(wrapper.instance()._getRandomIntInclusive(4)% 1).to.be.equal(0);
	expect(wrapper.instance()._getRandomIntInclusive(4)).to.be.below(5);
})

it('should add the random integer to the appropriate state on _rollDice', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.state('d6')).to.have.length(0);
	wrapper.instance()._rollDice(6);
	expect(wrapper.state('d6')).to.have.length(1);
})

it('should clear the appropriate state on _clearRoll', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.state('d20')).to.have.length(0);
	wrapper.instance()._rollDice(20);
	expect(wrapper.state('d20')).to.have.length(1);
	wrapper.instance()._clearRoll(20);
	expect(wrapper.state('d20')).to.have.length(0);
})

it('should render the results as they appear', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find('.result-p').exists()).to.equal(false);
	wrapper.instance()._rollDice(10);
	wrapper.update();
	expect(wrapper.find('.result-p').exists()).to.equal(true);
})

it('should unrender the results as they appear', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find('.result-p').exists()).to.equal(false);
	wrapper.instance()._rollDice(12);
	wrapper.update();
	expect(wrapper.find('.result-p').exists()).to.equal(true);
	wrapper.instance()._clearRoll(12);
	wrapper.update();
	expect(wrapper.find('.result-p').exists()).to.equal(false);
})