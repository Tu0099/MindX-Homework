//bài 1

const input = Number(prompt("số bất kỳ"));

const a = 1;

if (input < 0){
    console.log("invalid input");
}else {
    for(let i = 1; i<= age;i++){a *= i}
    console.log(a);
}



//bài2

const name = prompt("name");

const age = Number(prompt("age"));

if (age < 18){
    console.log(`${name} chưa đủ tuổi vào trang web này`);
}else {
     const input= prompt(`${name} có muốn đăng nhập vào trang web không`);

if (input = yes){
    console.log(`${name} đã vào trang web thành công`);
}else{
    console.log(`${name} thoát khỏi trang web`);
}
}

//bài 3

const username = prompt("username");
const password = Number(prompt("password"));

const input = "tudzvcl";
const input2 = 6969;

if (username === input && password === input2){
    console.log("đăng nhập thành công");
}else if (username !== input){
    console.log("username nhaạp sai");
} else {
    console.log("password nhập sai");
}

// bài 4


// bài 5

while(yes){
    const A = Number(prompt("nhập vào A"));
    const B = Number(prompt("nhập vào B"));
    const C = Number(prompt("nhập vào C"));

    const Z = B*B - 4*A*C;

if(Z < 0){
    console.log("phương trình vô nghiệm");
}else if(Z = 0){
     x = -B / 2*A;
  console.log(`${x} là nghiệm kép của phương trình`);   
}else{
    x1 = -B + Math.sqrt(Z) / 2*A;
    x2 = -B - Math.sqrt(Z) / 2*A;

  console.log(`Vậy phương trình có 2 nghiệm X1 = ${x1}; X2 = ${x2}`);  
}   

}


//bài 6