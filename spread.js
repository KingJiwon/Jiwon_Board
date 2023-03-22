// 배열 spread
const arr = [1, 2, 3];
const arr2 = ['4', '5', '6'];
console.log(arr);
console.log(...arr);
console.log([...arr, ...arr2]);

const str = 'test';
console.log([...str]);

//  객체 spread

const jiwonData = {
  name: '박지원',
  age: 26,
};

const jiwonInfo = {
  nickName: 'Kingjiwon',
  status: '나른함',
};

const jiwon = {
  jiwonData,
  jiwonInfo,
};

const jiwonSpread = {
  ...jiwonData,
  ...jiwonInfo,
};

console.log(jiwon);
console.log(jiwonSpread);

// 나머지 연산자
const jiwon2 = {
  name: '박지원',
  gender: 'M',
  nickName: 'Kingjiwon',
  email: 'wldnjs0401@naver.com',
};

const { name, ...restInfo } = jiwon2;

console.log(name, restInfo);

const arr3 = [1, 2, 3, 4, 5, 6, 7];
const [first, ...rest] = arr3;
console.log(first, rest);

// 매개변수
function spread(paramFirst, paramSecond, ...paramRest) {
  console.log(paramFirst);
  console.log(paramSecond);
  console.log(paramRest);
}
spread(1, 2, 3, 4, 5, 6, 7);
