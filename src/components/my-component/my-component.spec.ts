import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
            <span class="name">
              Ralph Waldo Emerson
            </span>
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Edgar" middle="Allen" last="Poe"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Edgar" middle="Allen" last="Poe">
        <mock:shadow-root>
          <div>
            Hello, World! I'm
            <span class="name">
              Edgar Allen Poe
            </span>
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
