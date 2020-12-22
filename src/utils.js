// use scrollIntoView function to locate the anchor point In the same page
function scrollIntoViewById(id, f) {
    f = typeof f !== 'undefined' ? f : true;
    let el = document.getElementById(id);
    el && el.scrollIntoView(f);
}

// 按键防抖
function debounce(fn, delay) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(()=>{fn.apply(this, args);},delay);
    };
}

// collection to array
function toArray(coll) {
    let a = [];
    for (let i=0, len=coll.length; i<len; i++) {
        a.push(coll[i]);
    }
    return a;
}

// 使用定时器异步处理array
function processArrayByTimer(items, process, callback){
    let todo = items.concat();  // 克隆原数组

    setTimeout(function(){
        process(todo.shift());

        if (todo.length > 0) {
            setTimeout(arguments.callee, 25);
        } else {
            callback(items);
        }
    }, 25);
}

// 使用定时器异步处理长于50ms的任务
function timedProcessArrayByTimer(items, process, callback){
    let todo = items.concat();  // 克隆原数组

    setTimeout(function(){
        let start = +new Date();  // +使得日期转化成数字
        
        do {
            process(todo.shift());
        } while (todo.length > 0 && (+new Date() - start < 50));

        if (todo.length > 0) {
            setTimeout(arguments.callee, 25);
        } else {
            callback(items);
        }
    }, 25);
}

// 使用定时器分步运行各步骤
function multistepByTimer(steps, args, callback){
    let tasks = steps.concat();  // 克隆数组
    
    setTimeout(function(){

        // 执行下一个任务
        let task = tasks.shift();
        task.apply(null, args||[]);

        if (tasks.length > 0){
            setTimeout(arguments.callee, 25);
        } else {
            callback();
        }
    }, 25);
}

function resolvePath(path) {
    const segments = path.split('/');
    let resolved = [];
    for (let i=0, len=segments.length; i<len; i++){
        if (segments[i] === '..') {
            resolved.pop();
        } else if (segments[i] !== '.') {
            resolved.push(segments[i]);
        }
    }
    return resolved.join('/');
}

function logDate() {
    "use strict";
    var now = new Date();
    return now.toDateString();
}

// 增加页面加载完成后所需要执行的代码
function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof oldonload !== "function"){
        window.onload = func;
    } else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

// 编写insertAfter函数
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

// 获取下一个元素节点
function getNextElement(node) {
    if (node.nextSibling) {
        var next = node.nextSibling;
    } else {
        return null;
    }
    if (next.nodeType  == 1) {
        return next;
    } else {
        return getNextElement(next);
    }
}

// 设置标签的className，为标签添加类
function addClass(element, value) {
    var newClassName;
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

