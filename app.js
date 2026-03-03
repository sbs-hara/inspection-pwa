// app.js
const shootBtn = document.getElementById("shoot");
const cameraInput = document.getElementById("camera");
const statusEl  = document.getElementById("status");
const previewEl = document.getElementById("preview");

shootBtn?.addEventListener("click", () => {
  cameraInput?.click();
});

cameraInput?.addEventListener("change", async () => {
  const file = cameraInput.files?.[0];
  if (!file) return;

  // 画像プレビュー表示
  const url = URL.createObjectURL(file);
  previewEl.src = url;
  previewEl.style.display = "block";
  statusEl.textContent = "画像を読み込みました（ここから照合を実装します）";
});
