1. node-v12.18.4-x64.msi 설치
https://nodejs.org/ko/

2. cmd 관리자 권한으로 실행
node --version
npm --version

npm i -g yarn
yarn --version
npm i -g create-react-app
(yarn add global create-react-app)

cd ChanjungPark\SBAProject
dir
cd ../
create-react-app sbauiproject
cd sbauiproject
yarn start

3. vscode에서 SBAUIProject 폴더 open
아나콘다 프롬프트에서 SBAUIProject 폴더로 이동
code .
================================================================
public/index.html

<div id="root"></div>
id가 root인 div
----------------------------------------------------------------
src/App.js

function App() ...
이것은 class ... 아니고 function ... 으로 되어 있습니다.

class ... => OOP
function ... => functional Programming => FP

OOP vs FP

App.js 를 갔더니 FP로 되어있습니다

람다함수(Lambda Function)
= 익명 함수(Anonymous Function)

['name'] variable {'name':'hong'} value
->, =>
thin arrow(java), fat arrow(js)

javascript 언어에서 데이터 타입
두가지 변수 let, 상수 const
================================================================
위키피디아 : SPA 참고
싱글 페이지 애플리케이션(single-page application, SPA, 스파)은 
서버로부터 완전한 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써 
사용자와 소통하는 웹 애플리케이션이나 웹사이트를 말한다.

교과서는 644 page까지 있고 글자가 인쇄가 되어있어서 바꿀 수가 없습니다
static 상태라고 합니다

ebook은 1 page입니다

js, jsx
xls , xlsx (extends)