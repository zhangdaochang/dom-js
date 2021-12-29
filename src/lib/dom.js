window.dom = {
    create(tagname){// 创建一个标签
        let container = document.createElement('template')
        container.innerHTML = tagname.trim()  // 不加trim可能会返回text节点
        return container.content.firstChild
    },
    after(node,node2){
        
        typeof node2 === 'object'?document.querySelector(node).after(node2):document.querySelector(node).after(dom.create(node2))
    },
    before(node,node2){
        typeof node2 === 'object'?document.querySelector(node).before(node2):document.querySelector(node).before(dom.create(node2))
    },
    append(node,node2){
        typeof node2 === 'object'?document.querySelector(node).append(node2):document.querySelector(node).append(dom.create(node2))
    },
    warp(node, node2){
        let temp = document.querySelector(node2)
        dom.remove(temp)
        document.querySelector(node).append(temp)
    },
    remove(node){
        typeof node === 'object'?node.parentNode.removeChild(node):document.querySelector(node).parentNode.removeChild(document.querySelector(node))
        return node
    },
    empty(node){
        if(typeof node ===  'object'){
            let temp = Array.from(node.childNodes)
            node.innerHTML=''
            return temp
        }else{
            let temp = Array.from(document.querySelector(node).childNodes)
            document.querySelector(node).innerHTML=''
            return temp
        }
    },
    attr(node,name,value){ // 重载
        if(arguments.length === 3){
            typeof node === 'object'? node.setAttribute(name,value):document.querySelector(node).setAttribute(name,value)
        }else if(arguments.length ===2){
            return typeof node === 'object'?node.getAttribute(name):document.querySelector(node).getAttribute(name)
        }
    },
    text(node,string){
        if(arguments.length === 2){
            let temp = typeof node === 'object'?node:document.querySelector(node)
            if('innerText' in temp){
                temp.innerText = string
            }else{
                temp.textContext = string
            }
        }else if(arguments.length ===1){
            let temp = typeof node === 'object'?node:document.querySelector(node)
            if('innerText' in temp){
                return temp.innerText
            }else{
                return temp.textContext
            }
        }
    },
    html(node,string){
        if(arguments.length === 2){
            typeof node === 'object'?node.innerHTML=string:document.querySelector(node).innerHTML=string
        }else if(arguments.length ===1){
            return typeof node === 'object'?node.innerHTML:document.querySelector(node).innerHTML
        }
    },
    style(node,name,value){
        let temp = typeof node === 'object'?node:document.querySelector(node)
        if(arguments.length === 3){
            temp.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                return temp.style[name]
            }else{
                let object = name
                for(let key in object){
                    temp.style[key] = object[key]
                }
            }
        }   
    },
    class:{// 类的操作
        add(node,className){
            typeof node === 'object'?node.classList.add(className):document.querySelector(node).classList.add(className)
        },
        remove(node,className){
            typeof node === 'object'?node.classList.remove(className):document.querySelector(node).classList.remove(className)
        },
        has(node,className){
            return typeof node === 'object'?node.classList.contains(className):document.querySelector(node).classList.contains(className)
        }
    },
    on(node,event,fn){ // 添加监听
        typeof node === 'object'?node.addEventListener(event, fn):document.querySelector(node).addEventListener(event,fn)
    },
    off(node,event,fn){ //移除监听
        typeof node === 'object'?node.removeEventListener(event, fn):document.querySelector(node).removeEventListener(event,fn)
    },
    find(selector){ // 获取所有匹配得
        return document.querySelectorAll(selector)
    },
    parent(node){ // 获取父亲
        return typeof node === 'object'?node.parentNode:document.querySelector(node).parentNode
    },
    children(node){// 获取孩子
        return typeof node === 'object'?node.children:document.querySelector(node).children
    },
    siblings(node){ // 获取兄弟
        let temp = typeof node === 'object'?node:document.querySelector(node)
        return Array.from(dom.children(dom.parent(temp))).filter((item)=>item!==temp)
    },
    next(node){ // 下一个
        let temp = typeof node === 'object'?node:document.querySelector(node)
        let x = temp.nextSibling
        while(x && x.nodeType === 3){
            x = x.nextSibling
        }
        return x
    },
    previous(node){ // 上一个
        let temp = typeof node === 'object'?node:document.querySelector(node)
        let x = temp.previousSibling
        while(x && x.nodeType === 3){
            x = x.previousSibling
        }
        return x
    },
    each(node,fn){ // 类似map
        let temp = typeof node === 'object'?node:document.querySelectorAll(node)
        for(let i =0;i<temp.length;i++){
            fn.call(null,temp[i])
        }
    },
    index(node){// 获取元素排第几
        let temp = typeof node === 'object'?node:document.querySelector(node)
        let children = dom.children(temp.parentNode)
        for (let i = 0;i<children.length;i++){
            if(temp===children[i]){
                return i+1
            } 
        }
    }
}

