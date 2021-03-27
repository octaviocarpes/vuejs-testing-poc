export default {
	data() {
		return {
			buttonColor: false
		};
	},
	methods: {
		changeButtonColor() {
			this.buttonColor = !this.buttonColor;
		}
	},
	computed: {
		buttonStyle() {
			return this.buttonColor;
		}
	}
};