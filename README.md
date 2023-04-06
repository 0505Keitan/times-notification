# times notify for slack (Bolt 版)

Slack上で新しくtimesチャンネルが作成された時に、指定のチャンネルに通知を投稿する。
[Bolt for JavaScript](https://github.com/slackapi/bolt-js) を利用

# 動作確認環境

- Node.js v18.0.0
- TypeScript Version 4.3.5

# Slack アプリケーションの作成方法

[https://qiita.com/seratch/items/1a460c08c3e245b56441](https://qiita.com/seratch/items/1a460c08c3e245b56441)
以上を参考に、WebSocket モードでアプリケーションを作成

## Event Subscription の設定

- message.channels
- channel_created

## Bot Token Scope の設定

- channels:history
- channels:read
- chat:write
# Node.js での実行環境の設定

`.env` ファイルに以下を記載、作製した Slack のトークンとチャンネルIDのプロパティを設定。`_env`ファイルをコピーして作成。

```
SLACK_BOT_TOKEN=xoxb-XXXXXXXXXXXXXXXXXXXXXXXXXX
SLACK_APP_TOKEN=xapp-XXXXXXXXXXXXXXXXXXXXXXXXXX
NOTIFY_CHANNEL_ID=XXXXXXX
```

## 起動

```
npm i
npx run build
npm run start
```

# 参考: Bolt のリファレンス

[https://slack.dev/bolt-js/ja-jp/reference](https://slack.dev/bolt-js/ja-jp/reference)
