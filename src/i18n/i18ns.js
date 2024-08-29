import Vue from "vue"

// 导入包
import VueI18n from "vue-i18n";

// 组件自带的国际化
import Locale from 'element-ui/lib/locale'

//多语言对象
import messages from "./Langs"

Vue.use(VueI18n)



// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'zh', // set locale
    messages, // set locale messages
})

Locale.i18n((key,value)=> i18n.t(key,value))


export default i18n;
