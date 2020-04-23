const enhancer = require('./enhancer.js');
// test away!

const { succeed, fail, repair } = enhancer

const globalItem = {
  name: 'sword',
  durability: 12,
  enhancement: 13
}

describe("repair", () => {
  it("should return a new item", () => {

    expect(repair(globalItem)).not.toBe(globalItem)
  })

  it("should restore durability to 100", () => {
    
    const item = {
      name: 'armor',
      durability: 0,
      enhancement: 0, 
    }

    expect(repair(item).durability).toBe(100)

  })
})

describe("succeed", () => {
  it("should increase enhancement by 1", () => {

    expect(succeed(globalItem).enhancement).toBe(14)
  })
  
  it("should not change enhancement when enhancement is 20", () => {

    const item = {
      name: 'some name',
      durability: 0,
      enhancement: 20
    }

    expect(succeed(item).enhancement).toBe(20)
    })
  })

describe("fail", () => {
  it("should decrease durability by 5 when enhancement less than 15", () => {

    const itemOne = {
      name: 'some name',
      durability: 10,
      enhancement: 14
    }
    
    const itemTwo = {
      name: 'some name',
      durability: 20,
      enhancement: 14
    }


    expect(fail(itemOne).durability).toBe(5)
    expect(fail(itemTwo).durability).toBe(15)
  })
  
  it("should not bring durability below 0", () => {

    const itemOne = {
      name: 'some name',
      durability: 4,
      enhancement: 20
    }

    const itemTwo = {
      name: 'some name',
      durability: 8,
      enhancement: 20
    }
    
    const itemThree = {
      name: 'some name',
      durability: 3,
      enhancement: 4
    }

    expect(fail(itemOne).durability).toBe(0)
    expect(fail(itemTwo).durability).toBe(0)
    expect(fail(itemThree).durability).toBe(0)
  })
  
  it("should decrease durability by 10 when enhancement is greater than or equal to 15", () => {

    const itemOne = {
      name: 'some name',
      durability: 100,
      enhancement: 20
    }

    const itemTwo = {
      name: 'some name',
      durability: 50,
      enhancement: 15
    }
    
    const itemThree = {
      name: 'some name',
      durability: 30,
      enhancement: 14
    }
  

    expect(fail(itemOne).durability).toBe(90)
    expect(fail(itemTwo).durability).toBe(40)
  })
  
  it("should decrease enhancement by 1 when enhancement is greater than 16", () => {

    const itemOne = {
      name: 'some name',
      durability: 100,
      enhancement: 20
    }

    const itemTwo = {
      name: 'some name',
      durability: 50,
      enhancement: 15
    }
    
    const itemThree = {
      name: 'some name',
      durability: 50,
      enhancement: 17
    }
  

    expect(fail(itemOne).enhancement).toBe(19)
    expect(fail(itemTwo).enhancement).toBe(15)
    expect(fail(itemThree).enhancement).toBe(16)
  })
})