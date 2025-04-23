/* ------------------------------------------------------------------ */
/* Plugin: all custom components / overrides live here                */

import { Editor } from 'grapesjs';

/* ------------------------------------------------------------------ */
const heroPlugin = (editor: Editor) => {
  const { Components, BlockManager } = editor;

  /* --- 1.  New “Hero Section” component type ---------------------- */
  Components.addType('hero-section', {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['hero', 'py-20', 'text-center', 'text-white'],
        traits: [
          { name: 'title', label: 'Headline', type: 'text' },
          { name: 'subtitle', label: 'Sub-text', type: 'text' },
          { name: 'bg', label: 'BG Color', type: 'color' },
        ],
        components: [
          { type: 'text', 'data-gjs-trait': 'title', content: 'Your headline' },
          {
            type: 'text',
            'data-gjs-trait': 'subtitle',
            content: 'Sub-copy here',
          },
        ],
        script() {
          const { bg } = this.getAttributes();
          this.style.backgroundColor = bg || '#1e293b';
        },
      },
    },
  });

  /* --- 2.  Expose it in the block panel --------------------------- */
  BlockManager.add('hero-block', {
    label: 'Hero',
    category: 'Marketing',
    content: { type: 'hero-section' },
  });

  /* --- 3.  Extend the default <img> component --------------------- */
  const ImgModel = Components.getType('image').model;
  ImgModel.prototype.defaults.traits.push({
    name: 'rounded',
    type: 'checkbox',
    label: 'Rounded',
  });

  ImgModel.prototype.init = function () {
    this.on('change:attributes:rounded', () => {
      const el = this.getEl();
      const { rounded } = this.getAttributes();
      el?.classList.toggle('rounded-full', Boolean(rounded));
    });
  };
};

export default heroPlugin;
