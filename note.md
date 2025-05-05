
# note:: :date:23/12/9

デプロイ, prod

  (cd ../nextui-dashboard-template/ && npm run build) && \
    (cd ../nextui-dashboard-template/ && cat .env .env.prod > .env.docker) && \
    docker-compose up
  
  or
    tmuxp load prod.yaml

dev, debug

  nextjs (nextui-dashboard-template)
    http://localhost:8526/

# note::

