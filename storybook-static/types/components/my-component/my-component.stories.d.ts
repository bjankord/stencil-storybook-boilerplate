declare const _default: {
  title: string;
  argTypes: {
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
        options: string[];
      };
    } | {
      description: string;
      defaultValue: string;
      type: string;
    } | {
      action: string;
      description: string;
      custom?: boolean;
    };
  };
  parameters: {
    notes: {
      markdown: string;
    };
  };
};
export default _default;
export declare const Default: any;
