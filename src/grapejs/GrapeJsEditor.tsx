import * as React from 'react';
import grapesjs from 'grapesjs';
import GjsWrapper from '@grapesjs/react';
import GJsBlocksBasic from 'grapesjs-blocks-basic';
import GJsPresetWeb from 'grapesjs-preset-webpage';
import type { Editor } from 'grapesjs';
import '../style.css';
import heroPlugin from './plugins/hero';
import counterPlugin from './plugins/counter';

export const GjsEditor = () => {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded', { editor });
  };

  return (
    <GjsWrapper
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      options={{
        height: '100vh',
        storageManager: { type: 'local', autosave: true, autoload: true },
        blockManager: {
          appendTo: '#blocks',
          blocks: [
            {
              id: 'section', // id is mandatory
              label: '<b>Section</b>', // You can use HTML/SVG inside labels
              attributes: { class: 'gjs-block-section' },
              content: `<section>
                <h1>This is a simple title</h1>
                <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
              </section>`,
            },
            {
              id: 'text',
              label: 'Text',
              content: '<div data-gjs-type="text">Insert your text here</div>',
            },
            {
              id: 'image',
              label: 'Image',
              // Select the component once it's dropped
              select: true,
              // You can pass components as a JSON instead of a simple HTML string,
              // in this case we also use a defined component type `image`
              content: { type: 'image' },
              // This triggers `active` event on dropped components and the `image`
              // reacts by opening the AssetManager
              activate: true,
            },
          ],
        },
      }}
      /* ⬇️  Register core + custom plugins */
      plugins={[GJsBlocksBasic, GJsPresetWeb, heroPlugin, counterPlugin]}
      onEditor={onEditor}
    />
  );
};

export default GjsEditor;
