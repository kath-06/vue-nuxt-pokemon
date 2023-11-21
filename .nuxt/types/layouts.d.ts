import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "pokemon"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}