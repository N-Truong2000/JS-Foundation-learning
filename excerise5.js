function chiaBaiTienLen(soNguoiChoi) {
  if (soNguoiChoi < 2 || soNguoiChoi > 4) {
    return console.log( "Số người chơi không hợp lệ. Chỉ hỗ trợ từ 2 đến 4 người chơi.");
  }
  const baiTienLen = [];
  const boBai = [];
  const loaiBai = ["chuồng", "bích", "rô", "cơ"];
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 13; j++) {
      boBai.push({
        loai: loaiBai[i],
        giaTri: j
      });
    }
  }

  function traoBai() {
    for (let i = boBai.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [boBai[i], boBai[j]] = [boBai[j], boBai[i]];
    }
  }
  function hienThiBaiDaChia(bai){
    if(bai instanceof Array){
      bai.forEach((nguoiChoi, index) => {
      console.log(`Người chơi ${index + 1}:`);
      nguoiChoi.forEach((card, cardIndex) => {
        console.log(`Lá bài ${cardIndex + 1}: ${card.giaTri} ${card.loai}`);
      });
      console.log("-------------------------");
    });
  }
  }
  traoBai();
  const soLaBaiMotNguoi = 13;
  for (let i = 0; i < soNguoiChoi; i++) {
    const phanBai = boBai.slice(i * soLaBaiMotNguoi, (i + 1) * soLaBaiMotNguoi);
    baiTienLen.push(phanBai);
  }
  hienThiBaiDaChia(baiTienLen);
  return baiTienLen;
}



const soNguoiChoi = 3; 
const baiDaChia = chiaBaiTienLen(soNguoiChoi);
