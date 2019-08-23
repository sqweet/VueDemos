new Vue({
    el: '#title',
    data: {
        message: 'This is my learning page'
    }
});

new Vue({
    el: '#demo1',
    data: {
        label: 'change color1',
        change: false,
    }
});

new Vue({
    el: '#demo2',
    data: {
        ok: true,
        message: 'Vue.js都提供了完全的JavaScript表达式支持',
        id: 1
    }
});

new Vue({
    el: '#demo3',
    data: {
        ok: true,
        seen:true
    }
});

new Vue({
    el: '#demo4',
    data: {
        url: 'https://www.runoob.com/vue2/vue-template-syntax.html'
    }
});

new Vue({
    el: '#demo5',
    data: {
        message: 'Sweet'
    }
});

new Vue({
    el: '#demo6',
    data: {
        message: '按钮的事件我们可以使用 v-on 监听事件，并对用户的输入进行响应。'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

new Vue({
    el: '#demo7',
    data: {
        message: 'capitalize'
    },
    filters: {
        capitalize: function (value) {
            if (!value){
                return ''
            }
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1)

        }
    }
});

new Vue({
    el: '#demo8',
    data: {
        message: 'code'
    },
    filters: {
        capitalize: function (value) {
            if (!value){
                return ''
            }
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
});

new Vue({
    el: '#demo9',
});

new Vue({
    el: '#demo10',
    data: {
        sites: [
            { name : 'Annie'},
            { name : 'Sweet'},
            { name : 'null' },
        ]
    }
});

new Vue({
    el: '#demo11',
    data: {
        sites: [
            { name : 'Annie'},
            { name : 'Sweet'},
            { name : 'null' }
        ]
    }
});

new Vue({
      el: '#demo12',
    data: {
        object: {
            name: 'Sweet',
            age: 22,
            gender: 'male'
        }
    }
});

new Vue({
      el: '#demo13',
    data: {
          object: {
              name: 'Sweet',
              age: 22,
              gender: 'male'
          }
    }
});

new Vue({
    el: '#demo14'
});

new Vue({
      el: '#demo15',
    data: {
          message: 'おはようございます'
    },
    computed: {
          reverseMessage: function () {
              return this.message.split('').reverse().join('')
          }
    }
});

var vm = new Vue({
      el: '#demo16',
    data:{
        name: 'Google',
        url: 'www.google.com'
    },
    computed: {
          site: {
              get: function () {
                  return this.name + ' ' + this.url  
              } ,
              set: function (newValue) {
                  var names = newValue.split(' ');
                  this.name = names[0];
                  this.url = names[names.length - 1];
              }
          }
    }
});
vm.site = '百度 www.baidu.com';
document.write('name:' + vm.name);
document.write('<br>');
document.write('url:' + vm.url);

var vm2 = new Vue({
      el: '#demo17',
    data:{
        counter: 0
    },
});
vm2.$watch('counter', function(nval, oval) {
    var count = document.getElementById('tips');
    count.innerText= '计数器的值从' + oval + '变为' + nval;
});

var vm3 = new Vue({
      el: '#demo18',
    data:{
          cny: 0,
          usd: 0
    },
    watch: {
          usd: function (val) {
              this.usd = val;
              this.cny = val * 7.07
          },
          cny: function (val) {
              this.cny = val;
              this.usd = val / 7.07;
          }
    }
});

vm3.$watch('cny', function (nval, oval) {

   var tips1 = document.getElementById('tips2');
   var usd = document.getElementById('usdInput').value;
   tips1.innerText = nval + 'CNY可以兑换' + usd + 'USD';
   document.getElementById('tips3').innerText = '修改前的值是' + oval + '修改后的值是' + nval;
});

new Vue({
    el: '#shoppingCart',
    data: {
          goodsJson: [{
              name: 'apple',
              prise: 2,
              count: 0
          },
              {
                  name: 'banana',
                  prise: 1,
                  count: 0
              },
              {
                  name: 'orange',
                  prise: 1.5,
                  count: 0
          }]
    },
    method: {
          totalPrise: function () {
              var total = 0;
              for(var i=0;i<this.goodsJson.length;i++){
                  total += this.goodsJson[i].prise * this.goodsJson[i].count;
                  return total;
              }
          }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        Ip_Json: [{
            id: 1,
            name: 'iphone 8',
            price: 5099,
            count: 1
        },
            {
                id: 2,
                name: 'iphone xs',
                price: 8699,
                count: 1
            },
            {
                id: 3,
                name: 'iphone xr',
                price: 6499,
                count: 1
            }]

    },
    methods:{
        totalPrice : function(){
            var totalP = 0;
            for (var i = 0,len = this.Ip_Json.length;i<len;i++) {
                totalP+=this.Ip_Json[i].price*this.Ip_Json[i].count;
            }
            return totalP;
        }


    }
})

