import Vue from 'vue'

import {
  Button,
  Form,
  FormItem,
  Input,
  Message
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message //$message是自定义属性，可以自己起名字.
