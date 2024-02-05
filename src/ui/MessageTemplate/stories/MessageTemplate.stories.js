import React from 'react';
import MessageTemplateMessage from '../index';

const description = `
  \`import MessageTemplate from "@sendbird/uikit-react/ui/MessageTemplate";\`
`;

export default {
  title: '@sendbird/uikit-react/ui/MessageTemplate',
  component: MessageTemplateMessage,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const WithControl = (arg) => (<MessageTemplateMessage {...arg} />);

export const messageTemplate = () => <MessageTemplateMessage />;
