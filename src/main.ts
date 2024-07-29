/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import { createHead } from '@unhead/vue'
import './style.css'
import App from './App.vue'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient, initialState }) => {
    if (!app._context.provides['usehead']) {
      const head = createHead()
      app.use(head)
    }

    // 클라이언트 사이드 특정 로직
    // if (isClient) {
    //   console.log('클라이언트 사이드에서 실행')
    // }

    //  글로벌 믹스인 추가
    // app.mixin({
    //   created() {
    //     console.log('글로벌 믹스인 - created 훅')
    //   },
    // })

    //서버 사이드 렌더링 시 초기 데이터를 클라이언트에 전달하는 데 사용
    // initialState.data = { example: '이것은 초기 상태 데이터입니다' }

    // 사용자 인증, 권한 확인, 데이터 페칭 등 네비게이션 전 특정 작업을 수행할 때 유용
    router.beforeEach((to, from, next) => {
      next()
    })
  }
)
