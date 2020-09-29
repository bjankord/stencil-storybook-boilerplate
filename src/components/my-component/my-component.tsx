import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string = 'Ralph';

  /**
   * The middle name
   */
  @Prop() middle: string = 'Waldo';

  /**
   * The last name
   */
  @Prop() last: string = 'Emerson';

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm <span class="name">{this.getText()}</span></div>;
  }
}
