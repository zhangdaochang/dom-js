let div = dom.create("<div><a href='www.html.com'>aaa</a></div>") // 创建div

dom.before('#test','<p id="im">我是之前</p>')
dom.after('#test','<p>我是之后</p>')  // (node1,node2)


let div3 = dom.create("<div><a href='www.html.com'>aaa</a></div>") // 创建div
dom.append('div',div3)  // 创建子元素 dom.append(#test,div3)


dom.warp('div','div > div:nth-child(4) > a') // 父节点，要移除的子节点 dom.warp(window.test,'div > div > div > a')

dom.remove(test) // dom.remove('#test')

dom.attr('p','title','i im')

console.log(dom.attr(window.im,'title'))

dom.text('p','diid') // dom.text(window.im,'diid')

console.log(dom.text('p')) // dom.text(window.im)


dom.html('p','<div>tesat</div>') // dom.html(window.im,'<div>tesat</div>')

console.log(dom.html('p'))


dom.style('p',{color:'red'})
dom.style('p','border','1px solid red')
console.log(dom.style('p','color'))

dom.class.add('p:nth-child(2)','blue')
dom.class.remove('p:nth-child(2)','blue')

dom.class.add('p:nth-child(2)','red')
console.log(dom.class.has('p:nth-child(2)','red'))

let fn =()=>{
    console.log('onclick>>>')
}

dom.on('p','click',fn)
dom.off('p','click',fn)

console.log(dom.find('p'))
console.log(dom.find('#test1 > .red'))

console.log(dom.parent('#test1'))

console.log(dom.children(window.test1))

console.log(dom.siblings('#test1 > div'))

console.log(dom.next('#test1 > div'))

console.log(dom.previous('#test1 > div:nth-child(2)'))


dom.each('#test>div', (n)=> console.log(n))

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each('#test>div', (n)=> console.log(n))


console.log(dom.index('#test1'))