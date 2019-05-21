
var fs = require('fs');
console.log('첫번째기능');
fs.readFile('example/test.txt', 'utf8', function (err, result) {
    if (err) {
        console.error(err);
        throw err;      
    }
    else {
        console.log('에러는 없는데')
        console.error("두번째기능... 파일읽어오느라 시간이 초큼 걸려요");
        console.log(result);
    }
});
console.log('마지막 기능');
console.log('마지막 마지막 기능');
console.log('마지막 마지막 마지막 진짜 마지막 기능');
