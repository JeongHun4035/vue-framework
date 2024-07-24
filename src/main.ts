/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import './style.css'
import App from './App.vue'

const rootRouteExists = routes.some((route) => route.path === '/')

// 루트 경로가 없으면 리디렉션 설정
if (!rootRouteExists) {
  routes.push({
    path: '/',
    redirect: '/home',
  })
}

export const createApp = ViteSSG(
  // 루트 컴포넌트
  App,
  // Vue Router 옵션
  { routes },
  // 커스텀 설정 함수
  ({ router, isClient, initialState }) => {
    // 라우터 사용

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
      console.log(`${from.path}에서 ${to.path}로 이동`)
      next()
    })
  }
)
