# https://github.com/arangodb/arangodb-docker/issues/22

# Specify the starting point image from docker-hub.  In this case its a docker image with node.js preinstalled on alpine linux.
FROM eclipse-mosquitto:latest

CMD eclipse-mosquitto \
  -p 1883:1883 \
  -p 9001:9001 \
  -v mosquitto.conf:/mosquitto/config/mosquitto.conf