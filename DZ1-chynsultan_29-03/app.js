var month = prompt('Enter your month of birh')
var day = prompt('Enter your birhday')
if(month === '3' && day >=21 || month === '4' && day <=19){
    console.log('Ваш знак зодиака - Овен');
}else if (month === '4' && day >=20 && day <=30 || month === '5' && day <=20){
    console.log('Ваш знак зодиака - Телец'); 
}else if (month === '5' && day >=21 || month === '6' && day <=20){
    console.log('Ваш знак зодиака - Близнецы'); 
}else if (month === '6' && day >=21 && day <=30 || month === '7' && day <=22){
    console.log('Ваш знак зодиака - Рак'); 
}else if (month === '7' && day >=23 || month === '8' && day <=22){
    console.log('Ваш знак зодиака - Лев'); 
}else if (month === '8' && day >=23 || month === '9' && day <=22){
    console.log('Ваш знак зодиака - Дева'); 
}else if (month === '9' && day >=23 && day <=30 || month === '10' && day <=22){
    console.log('Ваш знак зодиака - Весы'); 
}else if (month === '10' && day >=23 || month === '11' && day <=21){
    console.log('Ваш знак зодиака - Скорпион'); 
}else if (month === '11' && day >=22 && day <=30 || month === '12' && day <=21){
    console.log('Ваш знак зодиака - Стрелец'); 
}else if (month === '12' && day >=22 || month === '1' && day <=19){
    console.log('Ваш знак зодиака - Козерог'); 
}else if (month === '1' && day >=20 || month === '2' && day <=18){
    console.log('Ваш знак зодиака - Водолей'); 
}else if (month === '2' && day >=19 && day <=28 || month === '3' && day <=20){
    console.log('Ваш знак зодиака - Рыбы'); 
}else{
    alert('Туура жаз')
}



    