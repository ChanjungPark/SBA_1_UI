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