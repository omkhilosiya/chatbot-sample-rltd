import React from 'react';
import { parser, renderer } from '@sendbird/react-uikit-message-template-view';
import type { Template } from '@sendbird/uikit-message-template';
import { createMessageTemplate } from '@sendbird/uikit-message-template';
import './index.scss';

export interface MessageTemplateProps {
  templateItems: Template['body']['items'];
}

const { MessageTemplate: CustomTemplate } = createMessageTemplate({
  parser,
  renderer,
  Container: ({ children }) => {
    return (
      <div
        className={[
          'sb-message-template__parent',
          'sendbird-message-template__root'
        ].join(' ')}
      >
        {children}
      </div>
    );
  },
});

const MessageTemplate = ({ templateItems }: MessageTemplateProps) => {
  return <CustomTemplate templateItems={templateItems} />;
};

export default MessageTemplate;
