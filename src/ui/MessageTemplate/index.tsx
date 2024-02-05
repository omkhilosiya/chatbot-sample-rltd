import React from 'react';
import {MessageProvider} from '@sendbird/react-uikit-message-template-view';
import {BaseMessage} from '@sendbird/chat/message';
import {
  dummyMessageTemplateMessageOne,
  dummyMessageTemplateMessageTwo,
  mockBaseMessage
} from './messageTemplateDummyData.mock';
import MessageTemplate from '../../modules/GroupChannel/components/MessageTemplate';

const subData = JSON.parse(dummyMessageTemplateMessageOne.extendedMessagePayload.sub_data);
const templateItems = subData['body']?.['items'];

const BUBBLE_MAX_WIDTH = 800;
export default function MessageTemplateMessage(props = {}) {
  return <MessageProvider message={mockBaseMessage as unknown as BaseMessage}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <div style={{
        maxWidth: `${BUBBLE_MAX_WIDTH}px`,
      }}>
        <MessageTemplate
          templateItems={templateItems}
          {...props} />
      </div>
    </div>
  </MessageProvider>;
}