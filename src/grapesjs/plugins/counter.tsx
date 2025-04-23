// plugins/reactCounter.ts
import { createRoot } from "react-dom/client";
import React from "react";
import Counter from "../../components/Counter.tsx";

const counterPlugin = (editor) => {
  const { Components, BlockManager } = editor;

  Components.addType("react-counter", {
    // 1️⃣ Model just stores an empty div; no HTML needed
    model: { defaults: { tagName: "div", draggable: true } },

    // 2️⃣ Custom view mounts/unmounts React
    view: {
      init() {
        const el = this.el;
        this.root = createRoot(el); // React 18+
        this.root.render(<Counter />);
      },
      onRemove() {
        this.root?.unmount();
      },
    },
  });

  // 3️⃣ Expose it as a draggable block
  BlockManager.add("counter-block", {
    label: "Counter",
    category: "React",
    content: { type: "react-counter" },
  });
};

export default counterPlugin;
