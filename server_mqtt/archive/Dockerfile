# docker run --name mosquitto eclipse-mosquitto
# docker cp mosquitto:/mosquitto/config .

# docker run -it -p 1883:1883 -p 9001:9001 -v $PWD/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto

# Specify the starting point image from docker-hub.  In this case its a docker image with node.js preinstalled on alpine linux.
FROM eclipse-mosquitto:latest

CMD eclipse-mosquitto \
  -p 1883:1883 \
  -p 9001:9001 \
  -v mosquitto.conf:/mosquitto/config/mosquitto.conf