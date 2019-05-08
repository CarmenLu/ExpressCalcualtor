const express = require('express')
const app = express()

app.get('/', function (req, res) {
    //解析参数
    let cmpt = Array("+","-","*","/")
    let { op1, op2, signal } = req.query
    //注意"+"号转码
    if (req.url.indexOf('+') > -1) {
        signal = '+'
    }
    //三个参数是否有值或运算符是否有错误
    if (op1 && op2 && (cmpt.indexOf(signal)>-1)) {
        res.send('result:' + eval(op1 + signal + op2));
    }
    else {
        res.send('请正确输入值')
    }
})

app.listen(3000, () => console.log('Run!'))
