

var count=0;

for(var i=0; i<3; i++){ //3번 반복

  for(var j=0; j<2; j++){ //2번
    count++;
    console.log(`메롱 ` + count + `번`);  // 총 6번 출력
    //console.log('메롱'+ ++count);
    // console.log('${i}, ${j}');
    
  }
}


//구구단 2단
var level = 2;

console.log(`구구단 ${level}단`)
for(var line=1; line<=9; line++){
  console.log(`${level}x${line}=${level*line}`);
}

//구구단 n단

for (var level=2; level<=9; level++){

  console.log(`\n구구단 ${level}단\n`)
for(var line=1; line<=9; line++){
  console.log(`${level}x${line}=${level*line}`);

}
}

// for (var x=1; x<=3; x++{
//   console.log('하하');
//   for(var y=1; y<=5; y++){
//     for(var z=1; z<2; z++){
//       console.log('히히');
//     }
//   }
// }