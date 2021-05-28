import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked count = 0;

  /*
  @action
  increment() {
    this.count = this.count + 1;
  }

  @action
  decrement() {
    this.count = this.count - 1;
  }*/
  @action
  change(amount) {
    this.count = this.count + amount;
  }

  @tracked multiple = 1;

  @action
  double() {
    // this.multiple = this.multiple * 2;
    this.args.updateMultiple(this.args.multiple * 2);
  }

  get total() {
    // return this.count * this.multiple;
    return this.count * this.args.multiple;
  }
}
