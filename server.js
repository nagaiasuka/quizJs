const express = require('express');
const app = express();
const port = 3000; // 使用するポート番号

// 静的ファイルの提供（このディレクトリ内のファイルを公開）
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`サーバーが http://localhost:${port} で実行中...`);
});
