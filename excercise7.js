class HinhHoc {
    constructor() {
      if (this.constructor === HinhHoc) {
        throw new Error("Không thể tạo đối tượng của lớp trừu tượng.");
      }
    }
  
    tinhDienTich() {
      throw new Error();
    }
  
    tinhChuVi() {
      throw new Error();
    }
  }
  

  class HinhChuNhat extends HinhHoc {
    constructor(chieuDai, chieuRong) {
      super();
      this.chieuDai = chieuDai;
      this.chieuRong = chieuRong;
    }
  
    tinhDienTich() {
      return this.chieuDai * this.chieuRong;
    }
  
    tinhChuVi() {
      return 2 * (this.chieuDai + this.chieuRong);
    }
  }
  

  class HinhVuong extends HinhChuNhat {
    constructor(canh) {
      super(canh, canh);
      this.canh = canh;
    }
  }
  

  class HinhTron extends HinhHoc {
    constructor(banKinh) {
      super();
      this.banKinh = banKinh;
    }
  
    tinhDienTich() {
      return Math.PI * this.banKinh ** 2;
    }
  
    tinhChuVi() {
      return 2 * Math.PI * this.banKinh;
    }
  }
  

  class HinhTamGiac extends HinhHoc {
    constructor(a, b, c) {
      super();
      this.canhA = a;
      this.canhB = b;
      this.canhC = c;
    }
  
    tinhChuVi() {
      return this.canhA + this.canhB + this.canhC;
    }
  
    tinhDienTich() {
      const p = this.tinhChuVi() / 2; 
      return Math.sqrt(p * (p - this.canhA) * (p - this.canhB) * (p - this.canhC));
    }
  }
  

  const hinhChuNhat = new HinhChuNhat(4, 5);
  console.log("Diện tích hình chữ nhật:", hinhChuNhat.tinhDienTich());
  console.log("Chu vi hình chữ nhật:", hinhChuNhat.tinhChuVi());
  
  const hinhVuong = new HinhVuong(6);
  console.log("Diện tích hình vuông:", hinhVuong.tinhDienTich());
  console.log("Chu vi hình vuông:", hinhVuong.tinhChuVi());
  
  const hinhTron = new HinhTron(3);
  console.log("Diện tích hình tròn:", hinhTron.tinhDienTich());
  console.log("Chu vi hình tròn:", hinhTron.tinhChuVi());
  
  const hinhTamGiac = new HinhTamGiac(3, 4, 5);
  console.log("Diện tích hình tam giác:", hinhTamGiac.tinhDienTich());
  console.log("Chu vi hình tam giác:", hinhTamGiac.tinhChuVi());
  


class Deck  {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    generateDeck() {
        const deck = [];
        const suits = ['Bích', 'Chuồn', 'Rô', 'Cơ'];
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        for (const suit of suits) {
            for (const value of values) {
                deck.push(new Deck(value, suit));
            }
        }
        return deck;
    }
    shuffleDeck() {
       

    }
}

class TienLen {
    
}

class XiDach  {

}

