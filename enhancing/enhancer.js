module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const item = {
  name: 'sword',
  durability: 0,
  enhancement: 0
}

function succeed(item) {
  if (item.enhancement < 20){
    return {
      ...item,
      enhancement: item.enhancement + 1
    }
  }
  return item
}

function fail(item) {
  const { durability, enhancement } = item
  let newDurability = durability
  let newEnhancement = enhancement

  if (enhancement < 15 && enhancement >= 5){
    newDurability = durability - 5
  }
  
  if (enhancement >= 15 && durability < 10){
    newDurability = 0
  } else if (enhancement >= 15){
    newDurability = durability - 10
  }
  
  if (enhancement > 16){
    newEnhancement = enhancement - 1
  }

  if (durability < 5){
    newDurability = 0
  }

  return {
    ...item, 
    durability: newDurability,
    enhancement: newEnhancement
  }
}


function repair(item) {
  return { 
    ...item, 
    durability: 100
  };
}

function get(item) {
  return { ...item };
}
