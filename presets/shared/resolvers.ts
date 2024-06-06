import type { Resolver } from 'unplugin-auto-import/types'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

type Arrayable<T> = T | Array<T>
type Resolvers = Arrayable<Arrayable<Resolver>>

export const AutoImportResolvers: Resolvers = [ElementPlusResolver()]

