function Monster(name, diet, img) {
  this.name = name
  this.diet = diet
  this.img = img
}

const monsters = []

const werewolf = new Monster("Werewolf", ["people", "candy"], "https://media-elerium.cursecdn.com/avatars/74/179/636163941522787261.jpg")
console.log(werewolf)

monsters.push(werewolf)

const vampire = new Monster("Vampire", ["blood", "apple fritters", "wine"], "http://globe-views.com/dcim/dreams/vampire/vampire-04.jpg")
console.log(vampire)

monsters.push(vampire)

const ghost = new Monster("Ghost", ["nuts", "acrons", "souls"], "http://dreamicus.com/data/ghost/ghost-03.jpg")

monsters.push(ghost)

const mummy = new Monster("Mummy", ["sand", "dirt"], "https://www.familiesonlinemagazine.com/wp-content/uploads/2016/09/halloween-mummy.png")

monsters.push(mummy)

const zombie = new Monster("Zombie", ["brains", "split pea soup"], "https://i.pinimg.com/736x/70/85/7c/70857c07397131b87821853dc33ace7e--zombie-makeup-zombie-art.jpg")

monsters.push(zombie)

console.log(monsters)

const monsterModel = {
  el: '#monster-app',
  data: {
    title: 'Monster Mash',
    monsters: monsters
  }
}

new Vue(monsterModel)