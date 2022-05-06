function getID(id) {
    return document.getElementById(id);
}

// Nhập mảng
var arrList = [];
getID("btn-array").onclick = function () {
    var number = Number(getID("txtArray").value)
    // var emptyArr = '';

    arrList.push(number);

    // New array
    getID("newArray").innerHTML = '[' + arrList.toString() + ']';
    getID("newArray").classList.add("alert-success");
}


/* ====================================================================== */
// Bài 1 - tính tổng các số dương trong mảng
// function tinhTong(arrList) {
//     var tong = 0;
//     for (var i = 0; i < arrList.length; i++) {
//         if(arrList[i] >= 0) {
//             tong += arrList[i];
//         }
//     }
//     return tong;
// }

// var arrList = [1,-5,6,7,8,-9];
// console.log(tinhTong(arrList));

/* ----------------------------------------------------- */
getID("btn-result").onclick = function () {
    // var arrList = getID("txtMang").value;
    var sum = 0;

    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] >= 0) {
            sum += arrList[i];
        }
    }

    getID("result").innerHTML = `Tổng tất cả số dương trong mảng [${arrList}]: ${sum}`;

    getID("result").classList.add("alert-success");
}



/* ====================================================================== */
// Bài 2 - Đếm số dương trong mảng
getID("btn-ketQua").onclick = function () {
    var count = 0;

    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] > 0) {
            count++;
        }
    }

    getID("ketQua").innerHTML = `Có ${count} số dương trong mảng [${arrList}]`;

    getID("ketQua").classList.add("alert-success");
}

/* ====================================================================== */
// Bài 3 - tìm số nhỏ nhất trong mảng
getID("btn-console").onclick = function () {
    var min = arrList[0];

    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] < min) {
            min = arrList[i];
        }
    }

    getID("console").innerHTML = `Số nhỏ nhất trong mảng [${arrList}]: ${min}`;

    getID("console").classList.add("alert-success");
}

/* ====================================================================== */
// Bài 4 - Tìm số dương nhỏ nhất trong mảng
getID("btn-inKetQua").onclick = function () {
    var minNum = -1;
    var inResult = '';

    for (var i = 0; i < arrList.length; i++) {
        if ((minNum == -1 || arrList[i] < minNum) && arrList[i] > 0) {
            minNum = arrList[i];
            inResult = `Số dương nhỏ nhất trong mảng [${arrList}]: ${minNum}`;
        } else {
            inResult = `Không có số dương nhỏ nhất trong mảng [${arrList}]`;
        }
    }

    getID("inKetQua").innerHTML = inResult;

    getID("inKetQua").classList.add("alert-success");
}
/* test case: số dương trùng nhau thì kết quả -1





/* ====================================================================== */
// Bài 5 - Tìm số chẵn cuối cùng của mảng
getID("btn-lastNum").onclick = function () {
    for (var i = arrList.length - 1; i >= 0; i--) {
        if (arrList[i] % 2 == 0 && arrList[i] > 0) {
            getID("lastNum").innerHTML = `Số chẵn cuối cùng trong mảng  [${arrList}]: ${arrList[i]}`;
            getID("lastNum").classList.add("alert-success");
            break;
        }
        getID("lastNum").innerHTML = -1;
    }
}





/* ====================================================================== */
// Bài 6 - Đổi chỗ 2 giá trị trong mảng theo vị trí 
// Lấy giá trị đầu tiên trong mảng
function getA(arrList) {
    for (var index1 = 0; index1 < arrList.length; index1++) {
        return arrList[index1];
    }
}

// Lấy giá trị thứ 2 trong mảng
function getB(arrList) {
    for (var index2 = 0; index2 < arrList.length; index2++) {
        return arrList[index2];
    }
}

// Đổi chỗ vị trí 2 phần thử trong mảng
var flag;

getID("btn-doiCho").onclick = function () {
    var print = '';

    var index1 = getID("vitri1").value;

    var index2 = getID("vitri2").value;

    // Hoán vị giá trị của 
    if (index1 <= arrList.length && index2 <= arrList.length) {
        flag = arrList[index1];
        arrList[index1] = arrList[index2];
        arrList[index2] = flag;
        print = `Mảng sau khi đổi chỗ 2 vị trí ${index1} và ${index2}: [${arrList}]`;
    } else {
        print = `Không tìm thấy giá trị thứ ${index1} hoặc thứ ${index2} trong mảng. Vui lòng kiểm tra lại phần tử trong mảng!!!!`;
    }

    getID("doiCho").innerHTML = print;

    getID("doiCho").classList.add("alert-success");
}





/* ====================================================================== */
// Bài 7 - Sắp xếp mảng tăng dần
getID("btn-tangdan").onclick = function () {
    for (var i = 0; i < arrList.length - 1; i++) {
        for (var j = i + 1; j < arrList.length; j++) {
            if (arrList[i] > arrList[j]) {
                var temp;
                temp = arrList[i];
                arrList[i] = arrList[j];
                arrList[j] = temp;
            }
        }
        getID("xepTangDan").innerHTML = `Mảng [${arrList}] sau khi được sắp xếp tăng dần`;

        getID("xepTangDan").classList.add("alert-success");
    }
}





/* ====================================================================== */
// Bài 8 - Tìm số nguyên tố đầu tiên
/* Kiểm tra số nguyên tố */
function ktSoNguyenTo(x) {
    if (x <= 1) return 0; //0 : false
    for (var j = 2; j <= Math.sqrt(x); j++) {
        if (x % j == 0) return 0;
    }
    return 1; //1 : true
}

getID("btn-soNT").onclick = function () {
    for (var i = 0; i <= arrList.length - 1; i++) {
        if (ktSoNguyenTo(arrList[i])) {
            getID("soNguyenTo").innerHTML = `Số nguyên tố đầu tiên trong mảng [${arrList}]: ${arrList[i]}`;
            break;
        }
        getID("soNguyenTo").innerHTML = `-1`;
    }
}






/* ====================================================================== */
// Bài 9 - Đếm số nguyên
getID("btn-demSo").onclick = function () {
    var count = 0;
    var ketQua = '';
    for (var i = 0; i <= arrList.length - 1; i++) {
        if (Number.isInteger(arrList[i])) {
            count++;
        }
        ketQua = `Có tất cả ${count} số nguyên trong mảng [${arrList}]`;
    }
    getID("demSoNguyen").innerHTML = ketQua;
    getID("demSoNguyen").classList.add("alert-success");
}







/* ====================================================================== */
// Bài 10 - So sánh số lượng số âm và số dương trong mảng
// Đếm số lượng số dương trong mảng
function countduong(arrList) {
    var countDuong = 0;

    for (var i = 0; i <= arrList.length - 1; i++) {
        if (arrList[i] > 0) {
            countDuong++;
        }
    }
    return countDuong;
}

// Đếm số lượng số âm trong mảng
function countam(arrList) {
    var countAm = 0;

    for (var i = 0; i <= arrList.length - 1; i++) {
        if (arrList[i] < 0) {
            countAm++;
        }
    }
    return countAm;
}

// So sáng số dương và số âm
getID("btn-inDuongAm").onclick = function () {
    var content = '';

    if (countduong(arrList) > countam(arrList)) {
        content = "Số dương > Số âm";
    } else if (countduong(arrList) < countam(arrList)) {
        content = "Số âm > Số dương";
    } else {
        content = "Số dương = Số âm";
    }

    getID("inDuongAm").innerHTML = content;
}