function tinhDienTich(loaiHinh, ...thamSo) {
    try {
        switch (loaiHinh.toLowerCase()) {
            case 'hcm':
                if (thamSo.length !== 2) {
                    throw 'Hình chữ nhật cần hai tham số: chiều dài và chiều rộng.';
                }
               
                const chieuDai = thamSo[0];
                const chieuRong = thamSo[1];
                const dienTichHCN = chieuDai * chieuRong;
                return `Diện tích hình chữ nhật là: ${dienTichHCN}`;
            case 'tg':
                if (thamSo.length !== 2) {
                    throw 'Tam giác cần hai tham số: độ dài cạnh và chiều cao.';
                }
                const canhTamGiac = thamSo[0];
                const chieuCao = thamSo[1];
                const dienTichTG = (canhTamGiac * chieuCao) / 2;
                return `Diện tích tam giác là: ${dienTichTG}`;
            case 'tr':
                if (thamSo.length !== 1) {
                    throw 'Hình tròn cần một tham số: bán kính.';
                }
                const banKinh = thamSo[0];
                const dienTichHT = Math.PI * Math.pow(banKinh, 2);
                return `Diện tích hình tròn là: ${dienTichHT}`;
            default:
                throw 'Không hỗ trợ loại hình này.';
        }
    } catch (error) {
        return `Lỗi: ${error}`;
    }
}

function giaiPTBac2(a, b, c) {
    // Tính delta
    var delta = b * b - 4 * a * c;

    // Kiểm tra điều kiện
    if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return "Phương trình có hai nghiệm phân biệt: x1 = " + x1 + " và x2 = " + x2;
    } else if (delta === 0) {
        var x = -b / (2 * a);
        return "Phương trình có nghiệm kép: x = " + x;
    } else {
        return "Phương trình vô nghiệm";
    }
}

// Gọi hàm và in kết quả
var a = 1; // Thay đổi các giá trị của a, b, c tại đây
var b = -3;
var c = 2;

var ketQua = giaiPTBac2(a, b, c);
console.log(ketQua);

