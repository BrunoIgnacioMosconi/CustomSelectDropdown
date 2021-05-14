export default class Select {
	constructor(element) {
		this.element = element;
		this.customElement = document.createElement('div');
		this.labelElement = document.createElement('span');
		this.optionCustomElement = document.createElement('ul');
		setupCustomElement(this);
	}


}

setupCustomElement =(select)=>{
	select.customElement.add('custom-select-container');
	select.labelElement.add('custom-select-value');
	select.customElement.append(select.labelElement);

}