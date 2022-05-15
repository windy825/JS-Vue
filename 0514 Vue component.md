# Vue Component

<br>

- **Component**

  기존 HTML 요소를 확장하여 재사용 가능한 코드를 캡슐화 하는데 도움을 줌

  일반적으로 범용성을 위해 개발된 소프트웨어 구성 요소 의미

  **유지보수와 재사용성 측면에 강력한 기능 제공**

<br>

- **SFC (Single File Component)**

  뷰 컴포넌트 기반 개발의 핵심 특징

  한 컴포넌트는 .Vue 확장자를 가진 하나의 파일 안에서 작성되는 코드의 결과물

  **Vue컴포넌트 === Vue 인스턴스 === .Vue 파일**

<br>

- 처음 시작할땐 준비단계에서 시간 소요가 증가하겠지만, 이후 변수 관리가 용이하며 

  기능 별로 유지, 보수 비용 감소

  한 컴포넌트는 여러 개의 하위 컴포넌트를 가질 수 있음

  Vue는 컴포넌트 기반의 개발 환경 제공

<br>

- ```vue
  const app1 = new Vue({ ... })
  ```

  뷰 컴포넌트 : `app1`

  반드시 파일단위 구분이 아닌 , 한 파일 안에도 여러개의 컴포넌트를 만들어 개발 가능

  뷰 인스턴스는 .vue 파일 안에 작성된 코드의 집합

  HTML, CSS, JS를 .vue 라는 확장자를 가진 파일 안에서 관리하며 개발

<br>

<br>

<br>

# Vue CLI

Vue.js 개발을 위한 표준 도구

#### Node.js

JS를 **브라우저가 아닌 환경**에서도 구동할 수 있도록 하는 **JS 런타임 환경**

단순히 브라우저만 조작할 수 있던 JS를 SSR 아키텍처에서도 사용할 수 있도록 함

<br>

#### NPM

Node Package Manage

JS 위한 패키지 관리자 (다양한 의존성 패키지 관리)

node.js의 기본 패키지 관리자, 설치 시 함께 설치됨

<br>

```
$ npm install -g @vue/cli

$ vue --version
```

<br>

<br>

<br>

# Babel & Webpack

<br>

#### Babel (JS compiler)

원시코드(최신버전)   ==번역==>   목적코드(구 버전) 

코드가 특정 브라우저에서 동작하지 않는 상황에 대해 대비 가능

<br>

#### Webpack (static module bundler)

![제목 없음](https://user-images.githubusercontent.com/89068148/168430677-45edf645-9605-433b-9e8e-59d6bf9fbbc6.png)

**모듈**(JS 파일 하나 의미) 간의 의존성 문제를 해결하기 위한 도구

프로젝트에 필요한 모든 모듈을 매핑하고 내부적으로 종속성 그래프를 빌드함

- **필요성**

  - 브라우저만 조작 가능한 시기엔 모듈 관련 문법 없이 JS를 사용

  - JS와 애플리케이션이 복잡해지고 커짐

  - 전역 scope를 공유하는 기존 개발 방식의 한계

  - 라이브러리를 만들어 필요한 모듈을 불러오거나, 코드를 모듈 단위로 작성하는 시도

    ESM, AMD, CommonJS, UMD

- **모듈 의존성 문제**

  - 모듈이 많아지고, 라이브러리 혹은 모듈 간 의존성이 깊어지면서

    문제 발생시 원인 파악이 힘듬

  - Bundling : 모듈 의존성 문제를 해결하는 작업

    webpack 역시 다양한 bundler 중 하나

  - 여러 모듈을 묶어주고, 해당 파일은 하나 혹은 여러 개로 합쳐짐

  - bundling 된 결과물은 더 이상 순서에 영향 받지 않고 동작 가능

- **Vue CLI는 Babel, Webpack 에 대한 초기 설정이 자동으로 되있음**

<br>

<br>

#### Node.js

- JS Runtime Environment

- JS를 브라우저 밖에서 실행할 수 있는 새로운 환경

#### Babel

- 컴파일러

- ES2015 + 버전 코드를 구 버전 코드로 바꿔주는 도구 (호환성 문제 해결)

#### Webpack

- Module Bundler
- 모듈 간의 의존성 문제를 해결하기 위한 도구

<br>

<br>

`src/main.js`

- webpack 이 빌드를 시작할때 가장 먼저 불러오는 entry point
- 실제 단일 파일에서 DOM과 data를 연결 했던 것과 동일한 작업이 이루어지는 곳
- Vue 전역에서 활용 할 모듈을 등록할 수 있는 파일

`package.kson`

- 프로젝트의 **종속성 목록**과 **지원되는 브라우저에 대한 구성 옵션** 포함

`package-lock.json`

- node_modules 에 설치되는 모듈과 관련된 모든 의존성을 설정 및 관리
- 팀원 및 배포 환경에서 정확히 동일한 종속성을 설치하도록 보장
- 사용할 패키지 버전 고정
- 개발 과정 간의 의존성 패키지 충돌 방지

<br>

<br>

<br>

# Pass Props & Emit Events

<br>

Vue app 은 **중첩된 컴포넌트 트리** 형태

컴포넌트 간 **부모-자식 관계**로 구성되고, 이들 사이에 의사소통이 필요

```
부모   == Pass Props ==>   자식   /   데이터 전달
부모  <== Emit Event ==    자식   /   메시지 전달
```

<br>

#### 컴포넌트 등록

1. 불러오기 `import`
2. 등록하기 `register`
3. 보여주기 `print` 

<br>

#### Props

- 부모(상위) 컴포넌트의 정보를 전달하기 위한 사용자 지정 특성
- 자식(하위) 에선 **`props 옵션` 을 사용하여 수신하는 props를 명시적으로 선언**해야 함
- 데이터는 props 옵션을 통해 부모 >> 자식 전달됨 **(모두 단방향)**

- 모든 컴포넌트는 자체 격리된 범위가 있음

  자식 컴포넌트의 템플릿에서 **상위 데이터를 직접 참조할 수 없음**

- Static Props / Dynamic Props
- 선언할때는 camelCase, 템플릿(HTML) 에서는 kebab-case

##### 컴포넌트의 data는 반드시 함수

각 인스턴스는 모두 같은 data 객체를 공유하므로 새로운 data 객체를 반환해야 한다.

##### static 구문으로 숫자 전달 불가

##### v-bind (JS 표현식으로 평가) 를 통해 숫자나 식 전달 가능

<br>

### Emit event

`$emit(eventNmae)`

- 현재 인스턴스에서 이벤트를 트리거
- 추가 인자는 리스너의 콜백 함수로 전달

- 컴포넌트와 props와 달리, **이벤트는 자동 대소문자 변환 없음**

  DOM 템플릿의 v-on 리스너는 항상 소문자로 변환되므로 그냥 

  **이벤트 이름은 항상 kebab-case 사용하자**

<br>

<br>

<br>

# Vue Router

Vue.js 공식 라우터

라우트에 컴포넌트를 매핑, 어떤 주소에서 렌더링할 지 알려줌

`$ vue add router`

- 기존 App.vue를 덮어쓰므로, 백업(커밋) 필요

<br>

#### History mode

- HTML hitory API를 사용해서 router 구현

- 브라우저의 히스토리는 남기지만, 실제 페이지는 이동하지 않는 기능을 지원

- **페이지를 다시 로드하지 않고 URL 탐색 가능**

  SPA의 단점인 'URL이 변경되지 않는다' 해결

- `<router-link>`의 클릭 이벤트를 차단하여, 페이지가 다시 로드되는 것 방지

<br>

#### Named Routes

```vue
// App.vue

<router-link to="{ name: 'home' }">home???</router-link>
<router-link to="{ name: 'about' }">about???</router-link>
```

<br>

#### 프로그래밍 방식 작성

- `<router-link>` 활성화될때 내부적으로 호출되는 메서드는 `router.push()`

```vue
<template>
	<div>
        <h1>This is an about page</h1>
        <button @click="moveToHome">Home으로 이동하기</button>
    </div>
</template>

<script>
	export default {
        name: 'AboutView',
        methods: {
            moveToHome: function () {
                // literal string path
                this.$router.push('/')
                
                // object
                this.$router.push({ path:'/' })
                
                // named route
                this.$router.push({ name:'home' })

                this.$router.push({ name:'user', params: {userId:'123'} })
                
                // with query, resulting in /register?plan=private
                this.$router.push({ path:'register', query: {plan:'private'} })
            }
        }
    }
</script>
```

- Dynamic Route Matching

  - 동적 인자 전달

    ```javascript
    import UserView from '@/views/UserView'
    
    const routes = [
        {
            path: '/user/:userId',
            name: 'User',
            component: UserView
        }
    ]
    ```

  - 컴포넌트에서 `this.$route.params.<인자>` 로 사용 가능

<br>

#### Vue Router 가 필요한 이유?

SPA 등장 이전엔, 서버에서 모든 라우팅을 통제

이후, 서버는 index.html 하나만 제공하고, 나머지 모든 처리는 HTML 위에서 JS 코드가 진행

**SSR  ==> CSR**

- 클라이언트는 더 이상 서버로 요청을 보내지 않고, 

  HTML 안에서 주소가 변경될때 맞는 컴포넌트를 렌더링

- 라우팅에 대한 결정권을 클라이언트가 가진다