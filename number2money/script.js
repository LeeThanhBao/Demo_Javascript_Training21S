let n = parseInt(prompt("nhập số:"));
let kq = "";
const num = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"]

function soChuc(n, bool) {
    let sochuc = Math.floor(n / 10);
    let donvi = n % 10;

    let kq = "";
    if (sochuc == 1) {
        kq += "mười "
        if (donvi == 5) {
            kq += "lăm"
        }
        if (donvi == 0) {
            kq = kq;
        } else {
            kq += num[donvi];
        }


    }
    if (sochuc > 1) {
        kq += num[sochuc] + " mươi"
        if (donvi == 4) {
            kq += " tư"
        } else if (donvi == 1) {
            kq += " mốt"
        } else if (donvi == 5) {
            kq += " lăm"
        }
    }
    if (bool || (sochuc==0 && donvi > 0)) {
        kq = "linh "; 
        if(donvi==4){
            kq+= " tư"
        }
        else kq+= num[donvi]
    }

    return kq;
}

function soTram(n, bool) {
    let sotram = Math.floor(n / 100);
    let soduhangchuc = n % 100;
    let result = "";
    if (bool && sotram > 0) {
        result = num[sotram] + " trăm ";
        result += soChuc(soduhangchuc, false);
         
    }else{
        result += soChuc(soduhangchuc, true);
    }
    return result;
}
function soNghin(n, bool){
    let res="";
    let soHangNghin = Math.floor(n / 1000);
    let SoduHangTram = n % 1000;
    if(soHangNghin==0){
        res= soTram(SoduHangTram,bool);
    }else if(soHangNghin>0){
        res= num[soHangNghin]+ " nghìn "
        res+= soTram(SoduHangTram,bool)
    }
    return res
}

alert(soNghin(n, true));