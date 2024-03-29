
for(var i=1; i<=50; i++){
  console.log(i);
  if(i>10){
    break;
  }
}


console.log('========\n');

for(var i=0; i<3; i++){
  for(var j=0; j<2; j++){
    if(i===j){
      break;  //  break가 있는 가장 가까운 조건문만 멈춤.
    }
    console.log(`[${i}, ${j}]`);
  }
}