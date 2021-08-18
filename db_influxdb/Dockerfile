# https://github.com/arangodb/arangodb-docker/issues/22

# Specify the starting point image from docker-hub.  In this case its a docker image with node.js preinstalled on alpine linux.
FROM influxdb:latest

# CMD arangod --server.endpoint tcp://0.0.0.0:$PORT \
#   --database.directory standalone \
#   --database.password $ARANGO_ROOT_PASSWORD

CMD influxdb \
  -p 8086:8086 \
  -v influxdb:/root/influxdb/data \
  -v influxdb2:/root/influxdb2/data \
  -v influxdb2-config:/etc/influxdb2 \
  -v $PWD/influxdb.conf:/root/influxdb/influxdb.conf \
  -e DOCKER_INFLUXDB_INIT_MODE=setup \
  -e DOCKER_INFLUXDB_INIT_PASSWORD=my-password \
  -e DOCKER_INFLUXDB_INIT_ORG=my-org \
  -e DOCKER_INFLUXDB_INIT_BUCKET=my-bucket \
  -e DOCKER_INFLUXDB_INIT_RETENTION=1w \
  -e DOCKER_INFLUXDB_INIT_ADMIN_TOKEN=my-super-secret-auth-token \
  -e DOCKER_INFLUXDB_CONFIG_PATH=/root/influxdb2/config.toml \
  -e DOCKER_INFLUXDB_BOLT_PATH=/root/influxdb2/influxdb.bolt \
  -e DOCKER_INFLUXDB_ENGINE_PATH=/root/influxdb2/engine
