// use scrollIntoView function to locate the anchor point In the same page
function _scrollIntoViewById(id, f) {
    f = typeof f !== 'undefined' ? f : true;
    document.getElementById(id).scrollIntoView(f);
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
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

