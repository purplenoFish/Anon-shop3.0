
// 图片懒加载

// let imgs = document.querySelectorAll('img')

// const callback = entries => {
//     entries.forEach(e => {
//         // 值为真说明交叉
//         if(e.isIntersecting){
//             const img = e.target
//             // 获取自定义属性
//             const data_src = img.getAttribute('data-src')
//             // 设置src属性
//             img.setAttribute('src', data_src)
//             // 已经显示就卸载监听
//             observer.unobserve(img)
//         }
//     })
// }

// // 实例化
// const observer = new IntersectionObserver(callback)

// imgs.forEach(img => {
//     // 监听img是否交叉
//     observer.observe(img)
// });

var mySwiper = new Swiper('.swiper', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        // el: '.swiper-scrollbar',
    },
    // 自动切换
    speed: 2000,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        // pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    // 切换效果
    effect: 'cube',

})

// nav导航

const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const select = document.querySelector('.banner-select')

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
    // select.style.height = 0
})



// main

// 下拉菜单区域

const select_menu_divs = document.querySelectorAll('.select-menu-div')
const option_list = document.querySelectorAll('.option-list')

for (let i = 0; i < select_menu_divs.length; i++) {

    // 设置下标
    select_menu_divs[i].setAttribute('index', i)

    // 绑定点击事件
    select_menu_divs[i].onclick = function () {
        // 清除已存在的
        for (let j = 0; j < select_menu_divs.length; j++) {
            select_menu_divs[j].classList.remove('active')
        }
        this.classList.add('active')

        // 获取设置的index
        var index = this.getAttribute('index')
        // 移除其他的active属性
        for (let k = 0; k < option_list.length; k++) {
            option_list[k].classList.remove('active')
            // console.log(this)
            // 关闭掉眼睛
            select_menu_divs[k].lastElementChild.className = 'icon-eye-off'
        }
        option_list[index].classList.add('active')
        // 打开眼睛
        this.lastElementChild.className = 'icon-eye'
    }

}
// menudiv.forEach((p)=>{
//     p.addEventListener('click',function (){

//         for(let i = 0; i < option_list.length; i ++){

//             option_list[i].classList.toggle('active')
//         }
//         // for (let i = 0; i < menudiv.length; i++) {

//         //     // 清除active
//         //     for (let index = 0; index < option_list.length; index++) {
//         //         option_list[index].classList.toggle('active')            
//         //     }
//         //     option_list[i].classList.toggle('active')
//         //     // this.classList.add('active')
//         //     // 跟换图标
//         //     select_menu_divs[i].querySelector('.icon-eye-off').classList.toggle('icon-arrow-up')

//         // }
//     })
// p.nextElementSibling.addEventListener('mouseover',() => {

//     p.nextElementSibling.classList.toggle('active')
//     // 跟换图标
//     p.querySelector('.icon-eye-off').classList.toggle('icon-arrow-up')
// })

// })


// options.forEach(item => {
//     item.addEventListener('mouseover',() => {
//         item.style.cursor = 'pointer'
//     })
//     item.addEventListener('mouseout',() => {
//         item.style.cursor = ''
//     })
// })

// 中间商品成列区域

const item_img = document.querySelectorAll('.item-img')

const opacity = document.querySelectorAll('.opacity')

// const icoon = document.querySelectorAll("article[class*='icon-']")


// icoon.forEach(el => {
//     el.onclick = function (){
//         el.classList.toggle('red')
//         console.log(11)
//     }
// })

// 鼠标经过图片点赞内容显示里开隐藏

for (let j = 0; j < item_img.length; j++) {

    item_img[j].setAttribute('index', j)

    item_img[j].addEventListener('mouseover', function () {

        // 清除其他li的显示
        for (let i = 0; i < item_img.length; i++) {

            opacity[i].style.display = 'none'

        }
        // 获取下标
        var index = this.getAttribute('index')
        opacity[index].style.display = 'block'
    })



    // item_img[j].addEventListener('mouseout',() => {
    //     opacity.forEach(el => {
    //         el.classList.remove('active')
    //         el.style.display = 'none'
    //     });
    // })
}

// Echarts

// const modified = document.querySelector('.modified')
// 初始化

// var  myEchart = echarts.init(modified)

// var EchartsOption = {
//     graphic: {
//         elements: [
//             {
//                 type: 'text',
//                 left: 'center',
//                 top: 'center',
//                 style: {
//                     text: 'Anon shopping',          // 显示的内容
//                     fontSize: 80,
//                     fontWeight: 'bold',
//                     lineDash: [0, 200],
//                     lineDashOffset: 0,
//                     fill: 'transparent',
//                     stroke: '#000',
//                     lineWidth: 1
//                 },
//                 keyframeAnimation: {
//                     duration: 3000,
//                     loop: true,
//                     keyframes: [
//                         {
//                             percent: 0.7,
//                             style: {
//                                 fill: 'transparent',
//                                 lineDashOffset: 200,
//                                 lineDash: [200, 0]
//                             }
//                         },
//                         {
//                             // Stop for a while.
//                             percent: 0.8,
//                             style: {
//                                 fill: 'transparent'
//                             }
//                         },
//                         {
//                             percent: 1,
//                             style: {
//                                 fill: 'black'
//                             }
//                         }
//                     ]
//                 }
//             }
//         ]
//     }

// }

// 使用指定的配置项

// myEchart.setOption(EchartsOption)





// 背景动效

var words = [
    '健康码常绿',
    '越来越漂亮',
    '财源广进',
    '天天开心，没烦恼',
    '心想事成',
    '永远十八',
    '美梦成真',
    '五福临门',
    '吉祥如意',
    '鸿运当头',
    '百事顺遂',
    '一心一意',
    '二龙腾飞',
    '三阳开泰',
    '四季平安',
    '五福临门',
    '六六大顺',
    '七星高照',
    '八方来财',
    '九九归一',
    '十全十美',
    '不感冒，不发烧',
    '天天好吃好喝',
    '天天有人想你'
];

// 生成指定范围的随机数保留小数点后两位
function randomNum(min, max) {
    var num = (Math.random() * (max - min + 1) + min).toFixed(2);
    return num;
}

// 初始函数
function init() {
    var container = document.querySelectorAll('.body-container');
    var f = document.createDocumentFragment(); //创建文档片段对象

    words.forEach(w => {
        var word_box = document.createElement('div');
        var word = document.createElement('div');

        word.innerText = w;
        word.classList.add('word');

        // 随机生成色相值 0为红色 120为绿色 240为蓝色 360为红色
        var hue = randomNum(0, 240);
        word.style.color = 'hsl(' + hue + ',100%,65%)'

        word_box.classList.add('word-box');
        // 生成随机数值并赋值给自定义属性
        word_box.style.setProperty('--margin-top', randomNum(-40, 20) + 'vh');
        word_box.style.setProperty('--margin-left', randomNum(6, 35) + 'vw');
        word_box.style.setProperty('--animation-duration', randomNum(8, 20) + 's');
        word_box.style.setProperty('--margin-delay', randomNum(-20, 0) + 's');

        word_box.appendChild(word);
        f.appendChild(word_box)
    })
    for (let index = 0; index < container.length; index++) {
        container[index].appendChild(f)

    }
}

// 绑定加载事件

window.addEventListener('load', init);