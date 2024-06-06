import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { env } from './shared/env'
import { AutoImportResolvers } from './shared/resolvers'

export default () => {
    return [
        // vue 官方插件，用来解析 sfc
        Vue({
            include: [/\.md$/, /\.vue$/, /\.tsx$/]
        }),
        // 自动导入组件
        Components({
            extensions: ['vue', 'tsx', 'md'],
            include: [/\.md$/, /\.vue$/, /\.tsx$/],
            dts: resolve(__dirname, './types/components.d.ts'),
            resolvers: [
                ElementPlusResolver()
            ]
        }),
        // 自动导入api
        env.VITE_APP_API_AUTO_IMPORT && AutoImport({
            dts: './presets/types/auto-imports.d.ts',
            imports: ['vue'],
            resolvers: AutoImportResolvers
        })
    ]
}