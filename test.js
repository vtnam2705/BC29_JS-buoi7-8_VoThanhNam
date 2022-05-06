var arr = [-1,9,-9,5,6,7,8,2,1,3,0,10]

// function oddNum(arr) {
//     for (var i = arr.length - 1; i >= 0; i--) {
//         if(arr[i] > 0 && arr[i] % 2 == 0) {
//             return arr[i];
//             break;
//         } 
//     }
//     return -1;
// }

// console.log(oddNum(arr));

//Bài 6 - Đổi chỗ 2 vị trí trong mảng
function getA(arr) {
    for (let i = 0; i < arr.length; i++) {
        return arr[i];
    }
}

function getB(arr) {
    for (let j = 0; j < arr.length; j++) {
        return arr[j];
    }
}

var flag;

function doiCho(i, j) {
    if (i <= arr.length && j <= arr.length) {
        flag = arr[i];
        arr[i] = arr[j];
        arr[j] = flag;
        return arr;
    } else {
        return(`Không tìm thấy giá trị thứ ${i} hoặc thứ ${j} trong mảng. Vui lòng kiểm tra lại phần tử trong mảng!!!!`);
    }
}
console.log(doiCho(0, 3))

// // Bài 7 - Sắp xếp tăng dần
// var hoanVi;
// function tangDan(arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 hoanVi = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = hoanVi;
//             }
//         }
//     }
//     return arr;
// }

// console.log(tangDan(arr))

// // Bài 8 - tìm số nguyên tố đầu tiên
// function ktSoNguyenTo(x) {
//     if (x <= 1) return 0; //0 : false
//     for (var j = 2; j <= Math.sqrt(x); j++) {
//         if (x % j == 0) return 0;
//     }
//     return 1; //1 : true
// }

// function soNguyenToDauTien(arr) {
//     for(var i = 0; i <= arr.length - 1; i++) {
//         if(ktSoNguyenTo(arr[i])) {
//             return arr[i];
//             break;
//         }
//     }
// }

// console.log(soNguyenToDauTien(arr));

// // Bài 9 - Đếm số nguyên
// function countInteger(arr) {
    
//     var count = 0;
//     for (var i = 0; i <= arr.length - 1; i++) {
//         var ketQua = '';
        
//         if (Number.isInteger((arr[i]))) {
//             count++;
//         }
//         ketQua = `có tất cả ${count} số nguyên trong mảng [${arr}]`;
//     }
//     return ketQua;
// }

// console.log(countInteger(arr));

// // Bài 10 - So sánh số lượng số âm và số dương trong mảng
// // Đếm số lượng số dương trong mảng
// function countduong(arr) {
//     var countDuong = 0;

//     for (var i = 0; i <= arr.length - 1; i++) {
//         if(arr[i] > 0) {
//             countDuong++;
//         }
//     }
//     return countDuong;
// }

// // Đếm số lượng số âm trong mảng
// function countam(arr) {
//     var countAm = 0;

//     for (var i = 0; i <= arr.length - 1; i++) {
//         if(arr[i] < 0) {
//             countAm++;
//         }
//     }
//     return countAm;
// }

// // So sáng số dương và số âm
// function soSanh() {
//     var result = '';

//     if (countduong(arr) > countam(arr)) {
//         result = "Số dương > Số âm";
//     } else if (countduong(arr) < countam(arr)) {
//         result = "Số âm > Số dương"
//     } else {
//         result = "Số dương = Số âm" 
//     }

//     return result;
// }

// console.log(soSanh());