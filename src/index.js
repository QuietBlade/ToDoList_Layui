
if (window.localStorage.getItem("data") == null)
    init()

function getData() {
    return JSON.parse(window.localStorage.getItem("data"))
}

function setData(data) {
    window.localStorage.setItem("data", JSON.stringify(data))
}

// 初始化数据
function init() {
    var data = [
        {
            index: 0, // 索引
            content: '今天要写1个bug',  // 正文
            state: 1,   // 0 未完成  1 已完成
        }, {
            index: 1, // 索引
            content: '今天修复10个bug',  // 正文
            state: 0,   // 0 未完成  1 已完成
        }, {
            index: 2,
            content: '今天要写10个bug',
            state: 0,
        }, {
            index: 3,
            content: '今天要写10个bug',
            state: 1,
        }, {
            index: 4,
            content: '今天要写10个bug',
            state: 0,
        }, {
            index: 5,
            content: '今天要写10个bug',
            state: 0,
        }, {
            index: 6,
            content: '今天要写10个bug',
            state: 0,
        }, {
            index: 7,
            content: '今天要写10个bug',
            state: 0,
        }, {
            index: 8,
            content: '今天要写10个bug',
            state: 0,
        }, {
            index: 9,
            content: '今天要写10个bug',
            state: 0,
        }, {
            index: 10,
            content: '今天要写10个bug',
            state: 0,
        },
    ]
    console.log(data)
    window.localStorage.setItem("data", JSON.stringify(data))
}

// 添加/保存 事项
function SaveItem(obj) {
    var data = getData()
    var index = 0
    if (data.length == 0)
        index = data.length
    else
        index = data[data.length - 1].index + 1
    json = {
        index: index, // 累加 index 避免冲突 , 当 长度为 0 时 重置index
        content: obj.content,
        state: 0,
    }
    data.push(json)
    console.log(data)
    setData(data)
}

// 删除 事项
function DeleteItem(index) {
    var data = getData()
    data.forEach((obj, dex) => {
        if (obj.index == index) {
            data.splice(dex, 1)
        }
    });
    setData(data)
}

// 更改 已完成未完成 状态
function ChangeItem(obj, state) {
    var data = getData()
    data.forEach(d => {
        if (obj.index == d.index) {
            d.state = state
        }
    });
    console.log(data)
    setData(data)
}

// 更新操作
function UpdateItem(obj) {
    var data = getData()
    data.forEach(d => {
        if (d.index == obj.index) {
            d.content = obj.content
        }
    });
    console.log(data)
    setData(data)
}

// 用于排序数组数据
function SortItem(a, b) {
    return a.state - b.state
}