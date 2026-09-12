const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// ================================
// 首頁 / API 狀態
// ================================

app.get("/", (req, res) => {
  res.json({
    ok: true,
    service: "♾️ 無限資源 API",
    version: "1.0.0",
    by: "泥土",
    status: "online"
  });
});


// ================================
// 測試玩家
// ================================

app.get("/api/player/:player", (req, res) => {

  const player = req.params.player;

  if (!/^[A-Za-z0-9_]{1,32}$/.test(player)) {
    return res.status(400).json({
      error: "玩家名稱格式錯誤"
    });
  }

  res.json({
    player: player,
    money: 0,
    online: false
  });

});


// ================================
// 測試商店購買
// ================================

app.post("/api/shop/buy", (req, res) => {

  const {
    player,
    item,
    price
  } = req.body;

  if (!player || !item) {
    return res.status(400).json({
      error: "資料不完整"
    });
  }

  res.json({
    success: true,
    player: player,
    item: item,
    price: price,
    money: 0,
    message: "測試購買成功"
  });

});


// ================================
// 啟動 API
// ================================

app.listen(PORT, () => {

  console.log(
    `♾️ 無限資源 API 已啟動，Port: ${PORT}`
  );

});
