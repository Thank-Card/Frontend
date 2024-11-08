#node 22 버전에서 빌드
FROM node:22 as build
#work 디렉토리 지정
WORKDIR /Front
#빌드에 필요한 의존성 패키지 복사
COPY package*.json ./
#명령어 실행
RUN npm install
#현재 디렉토리의 모든 파일을 도커 컨테이너의 working 디렉토리에 복사
COPY . .
#빌드
RUN npm run build

#nginx를 베이스 이미지로 사용
FROM nginx:alpine
#리액트를 빌드한 파일을 nginx/html로 복사
COPY --from=build /Front/build /usr/share/nginx/html
# default conf 파일 제거
RUN rm /etc/nginx/conf.d/default.conf
# 내가 작성한 conf 파일을 nginx로 복사
COPY ./nginx.conf /etc/nginx/conf.d
#80번 포트에 노출
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]