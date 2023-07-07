class Item {
  constructor(name, description) {
    this.name = name
    this.description = description
  }

  describe() {
    return `${this.name}: ${this.description}`
  }
}

class Menu {
  constructor() {
    this.items = []
  }

  start() {
    let selection = this.showMainMenuOptions()
    while (selection !== '0') {
      switch (selection) {
        case '1':
          this.createItem()
          break
        case '2':
          this.viewItems()
          break
        case '3':
          this.deleteItem()
          break
        default:
          alert('Invalid selection. Please try again.')
      }
      selection = this.showMainMenuOptions()
    }
    alert('Goodbye!')
  }

  showMainMenuOptions() {
    return prompt(`
      0) Exit
      1) Create an item
      2) View items
      3) Delete an item
    `)
  }

  createItem() {
    let name = prompt('Enter the name of the item:')
    let description = prompt('Enter the description of the item:')
    this.items.push(new Item(name, description))
    alert('Item created successfully!')
  }

  viewItems() {
    let itemsString = ''
    for (let i = 0; i < this.items.length; i++) {
      itemsString += `${i + 1}) ${this.items[i].describe()}\n`
    }
    alert(itemsString)
  }

  deleteItem() {
    let index = prompt('Enter the index of the item to delete:')
    if (index > -1 && index < this.items.length) {
      this.items.splice(index, 1)
      alert('Item deleted successfully!')
    } else {
      alert('Invalid index. Please try again.')
    }
  }
}

let menu = new Menu()
menu.start()
