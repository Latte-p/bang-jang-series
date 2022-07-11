function for_1() {
  var i = 1;

  while (i < 10) { // 변수 i가 10보다 작을 때만 while 문을 반복함.

    console.log(i);

    i++; // 반복할 때마다 변수 i를 1씩 증가시켜 변수 i가 10보다 커지면 반복문을 종료함.

  }
}

function for_2() {
  var i = 1, j = 1;
  while (i > 3) { // 변수 i의 초깃값은 1이기 때문에 이 while 문은 한 번도 실행되지 않음.
     console.log("i : " + (i++));
  }  
  do { // 변수 j의 초깃값은 1이기 때문에 이 do / while 문은 단 한 번만 실행됨.
     console.log("j : " + (j++));
  } while (j > 3);
}
function for_3() {
  for (var i = 1; i < 10; i++) {
    console.log("i" + i);
  }
}
function for_4() {
  var arr = [3, 4, 5];

  for (var i = 0; i < arr.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
    console.log(i + " ");
  }

  for (var i in arr) { // 위와 같은 동작을 하는 for / in 문
    console.log(i + " ");
  }
}

function arr_1() {
  var arr = [1,2,3,4,5];
  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr[2]);
  console.log(arr[3]);
  console.log(arr[4]);
}
function func_1() {
  console.log(addNum(1, 2));
}

function addNum(x, y){
  return x+ y;
}

