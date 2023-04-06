import {
  App,
  LogLevel,
  ChannelCreatedEvent
} from '@slack/bolt';
import * as dotenv from 'dotenv'
dotenv.config()

const app = new App({
  logLevel: LogLevel.INFO, // デバッグするときには DEBUG に変更
  socketMode: true,
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
});

function nowStr(): String {
  return new Date().toISOString();
}

app.event('channel_created', async ({ event, client }) => {
  const e = event as ChannelCreatedEvent;
  if(e.channel.name.indexOf('times') == -1) return; // チャンネル名にserval-boltが含まれていないものを除外
  await client.chat.postMessage({
    channel: process.env.NOTIFY_CHANNEL_ID || '',
    text: `新しいTimesチャンネルが作られたよ！ <#${e.channel.id}>`,
  });
});

(async () => {
  await app.start();
  console.log(`[${nowStr()}][INFO] ⚡️ Bolt app started`);
})();
