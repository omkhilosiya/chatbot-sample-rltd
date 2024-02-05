import React, { useMemo } from 'react';
import { parser, renderer } from '@sendbird/react-uikit-message-template-view';
import type { Template } from '@sendbird/uikit-message-template';
import { createMessageTemplate } from '@sendbird/uikit-message-template';
import './index.scss';

export interface MessageTemplateProps {
  templateItems: Template['body']['items'];
}
const MessageTemplate = ({
  templateItems,
}: MessageTemplateProps) => {
  const CustomTemplate = useMemo(() => {
    const { MessageTemplate } = createMessageTemplate({
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

    return MessageTemplate;
  }, []);

  return <CustomTemplate templateItems={templateItems} />;
};

export default MessageTemplate;