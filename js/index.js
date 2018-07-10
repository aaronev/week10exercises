console.log('JS is working!!!!!!')

function item(name, serial, description, img, oldPrice, newPrice) {
  this.name = name  
  this.serial = serial
  this.description = description
  this.img = img
  this.oldPrice = oldPrice
  this.newPrice = newPrice
}

item.prototype.product = function() {
  return this.newPrice * this.oldPrice
}

var items = []
var chair = new item("chair", "2fhjqpaud", "It's a chair.", "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg", 30, 14)
var table = new item("table", "843ruh89", "It's a table.", "https://wallpaperbrowse.com/media/images/cat-1285634_960_720.png", 50, 100)
var sofa = new item("sofa", "junrqpedu83", "It's a sofa.", "https://wallpaperbrowse.com/media/images/4237670-images.jpg", 100, 200)


items.push(chair)
items.push(table)
items.push(sofa)