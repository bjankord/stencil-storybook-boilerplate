export declare const propsFromDocs: (tag: keyof HTMLElementTagNameMap) => {
  [x: string]: {
    name: string;
    type?: {
      name: string;
      required: boolean;
    };
    defaultValue?: any;
    description: string;
    table?: {
      type: {
        summary: string;
      };
      defaultValue: {
        summary: string;
      };
    };
    control?: {
      type: string;
      options: Array<string>;
    };
  };
};
export declare const slotsFromDocs: (tag: keyof HTMLElementTagNameMap) => {
  [x: string]: {
    description: string;
    defaultValue: string;
    type: string;
  };
};
export declare const eventsFromDocs: (tag: keyof HTMLElementTagNameMap) => {
  [x: string]: {
    action: string;
    description: string;
    custom?: boolean;
  };
};
export declare const attachArgs: <T>(args: T, events: any, elm: HTMLElement) => void;
export declare const attachSlots: <T>(args: T, slots: any, elm: HTMLElement) => void;
