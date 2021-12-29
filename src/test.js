const div = dom.find('#test>.red')[0] // 获取对应的元素
console.log(div)
dom.style(div, 'color', 'green') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素


dom.each('#test>div', (n)=> console.log(n)) // 遍历 divList 里的所有元素