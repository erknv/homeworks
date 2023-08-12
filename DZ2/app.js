// 1 dz
var starbucks = {
    coffees: [
        { name1: 'Espresso', 
            description: 'this is a small amount of concentrated coffee (30-40 ml) prepared in a coffee machine by passing hot water under pressure through a filter with ground coffee.'},
        { name2: 'Americano',
            description: 'Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.'},
        { name3: 'Latte', 
            description: 'A shot or two of espresso with steamed milk and a layer of foam on top.'},
        ],
    tea: [
        { name4:'Matcha Green Tea Latte', 
            description: 'A sweet blend of matcha green tea with steamed milk.'},
        { name5:'Green Tea', 
            description: 'minimally fermented tea.'},
        { name6:'Black Tea', 
            description: 'type of tea that undergoes full fermentation.'},
        ],
    beverages: [
        { name7:'hot chocolate', 
            description: 'Hot chocolate, cocoa drink or simply cocoa is a drink that necessarily includes cocoa, as well as milk (or water) and sugar.'},
        { name8:'Caramel Macchiato', 
            description: 'Refreshing coffee with a rich taste and hints of vanilla with hints of sweet caramel.'},
        { name9:'Frappuccino', 
            description: 'a drink of coffee, milk, syrup and crushed ice, whipped until foamy and garnished with whipped cream.'},
        ],
    }
        console.log(starbucks)
    
    
    // 2 dz
    var array2 = ['Bishkek','Los Angeles','Chicago','New York','Houston','Dallas','Philadelphia','Seattle']
    for (let i = 0; i < array2.length; i++) {
        if (array2[i].length >= 7) {
          console.log(array2[i]);
        }
    }
    
    
    // 3 dz
    var week = prompt('day of the week')
    switch (week) {
        case '1':
            console.log('понедельник');
            break;
        case '2':
            console.log('вторник');
            break;
        case '3':
            console.log('среда');
            break;
        case '4':
            console.log('четверг');
            break;
        case '5':
            console.log('пятница');
            break;
        case '6':
            console.log('суббота');
            break;
        case '7':
            console.log('воскресенье');
            break;
        default:
            console.log('Туура жаз');
    }