import { createPinia } from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'
// 创建 pinia 实例
const pinia = createPinia()
// 使⽤持久化存储插件
pinia.use(createUnistorage())
// 默认导出，给 main.ts 使⽤
export default pinia
// 模块统⼀导出
export * from './modules/member'
export * from './modules/address'
