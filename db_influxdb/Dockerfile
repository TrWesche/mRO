# Specify the starting point image from docker-hub.  In this case its a docker image with node.js preinstalled on alpine linux.

# docker build -t influxdb/mro:2.0 .

FROM influxdb:latest

# CMD arangod --server.endpoint tcp://0.0.0.0:$PORT \
#   --database.directory standalone \
#   --database.password $ARANGO_ROOT_PASSWORD

CMD influxdb \
  -p $PORT:8086 \
  -e DOCKER_INFLUXDB_INIT_MODE=setup \
  -e DOCKER_INFLUXDB_INIT_USERNAME=$INITIAL_SU_USERNAME \
  -e DOCKER_INFLUXDB_INIT_PASSWORD=$INITIAL_SU_PASSWORD \
  -e DOCKER_INFLUXDB_INIT_ORG=$INITIAL_ORG_NAME \
  -e DOCKER_INFLUXDB_INIT_BUCKET=$INITIAL_BUCKET_NAME \
  -e DOCKER_INFLUXDB_INIT_RETENTION=$INITIAL_BUCKET_DATA_RET_DURATION \