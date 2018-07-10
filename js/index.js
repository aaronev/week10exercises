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

for (i = 0; i < items.length; i++) {
  for (attr in items[i]) {
    if(attr == "img") {
      var img = document.createElement('img')
      img.src = items[i][attr]
      document.body.appendChild(img)
    } else if (attr = "product"){
      var prod = document.createElement('h3')
      prod.textContext = items[i].product()
      document.body.appendChild(prod)
    } else {
      var h4 = document.createElement("h4")
      h4.textContent = items[i][attr]
      document.body.appendChild(h4)
    }
  }
}