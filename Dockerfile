FROM node:20-alpine

WORKDIR /build

RUN apk add git && \
    cat > build.sh << EOF \
    git clone https://github.com/Allenyou1126/blog-ng-next.git && \
    cd blog-ng-next && \
    npm install && \
    npm run build \
    EOF

CMD [ "bash", "-c", "build.sh" ]