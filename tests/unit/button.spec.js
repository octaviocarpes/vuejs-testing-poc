import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils';
import Button from '@/components/Button/Button';

describe('Button component tests', () => {
	test('Button snapshot test', () => {
		const wrapper = mount(Button);
		expect(wrapper).toMatchSnapshot();
	});

	test('Button internal state', () => {
		const wrapper = mount(Button);
		expect(wrapper.vm).toBeTruthy();
		expect(typeof Button.data).toBe('function');
		expect(wrapper.vm.buttonColor).toBe(false);
	});

	test('Button styling test', () => {
		const wrapper = mount(Button);
		expect(wrapper.classes()).toContain('button-container');
		expect(wrapper.text()).toContain('I am a button');
	});

	test('Button behavior test', async () => {
		const { getByText } = render(Button);
		const button = getByText('I am a button');

		await fireEvent.click(button);
		expect(button.classList).toContain('blue');
	});
});