/**
 * 使用时在main.js中做如下引入和安装
 * //引入toast插件 
 * import toast from 'components/common/toast'
 * //安装toast插件
 * Vue.use(toast)
 */
import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  //1 创建组件构造器啊
  const toastContrustor = Vue.extend(Toast)
  //2 new的方式，根据组件构造器，可以创建出一个组件对象
  const toast = new toastContrustor()
  //3 将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4 toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj