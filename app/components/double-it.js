/*
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DoubleItComponent extends Component {
  @tracked multiple = 1;

  @action
  double() {
    this.multiple = this.multiple * 2;
  }
}*/

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DoubleItComponent extends Component {
  @tracked multiple = 1;

  @action
  updateMultiple(newMultiple) {
    this.multiple = newMultiple;
  }
}
