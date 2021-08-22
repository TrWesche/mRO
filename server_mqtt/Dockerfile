#docker build -f Dockerfile -t rabbitmq-mro .

# Specify the starting point image from docker-hub.  In this case its a docker image with node.js preinstalled on alpine linux.
FROM rabbitmq:management

COPY rabbitmq.conf ./etc/rabbitmq/rabbitmq.conf
COPY advanced.config ./etc/rabbitmq/advanced.config
COPY enabled_plugins ./etc/rabbitmq/enabled_plugins