import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default () => {
    return [
        Components({
            extensions: ['vue', 'tsx', 'md'],
            include: [/\.md$/, /\.vue$/, /\.tsx$/],
            dts: resolve(__dirname, './types/components.d.ts'),
            resolvers: [
                ElementPlusResolver()
            ]
        })
    ]
}