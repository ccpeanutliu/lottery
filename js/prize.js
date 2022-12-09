//level;name;amount
const prizeList = `
系友獎;行動電源;3
系友獎;三菱空氣清淨機;2
系友獎;google Nest Mini智慧音箱;1
三等獎;7-11一千元商品卡;1
二等獎;Sony無線藍芽耳罩式耳機;2
一等獎;任天堂Switch主機 + 超級瑪利歐3D世界;1
`

var prize = {};
prizeList.split('\n').filter(Boolean).map(x=>{
  var [level, name, amount] = x.split(';');
  amount = parseInt(amount);
  if (!(level in prize)){
    prize[level] = [];
  }
  prize[level].push({name: name, amount: amount});
})