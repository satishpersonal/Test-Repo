import { LightningElement,api,wire } from 'lwc';

export default class Slider extends LightningElement {
    @api sliderValue;
    handleChange(event){
        this.sliderValue = event.target.value;
    }
}