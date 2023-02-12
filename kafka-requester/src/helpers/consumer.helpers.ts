export const KafkaConfig = {
  clientId: String(process.env.KAFKA_CLIENT_ID),
  groupId1: String(process.env.KAFKA_GROUP_ID_1),
  groupId2: String(process.env.KAFKA_GROUP_ID_2),
  groupId3: String(process.env.KAFKA_GROUP_ID_3),
  kafkaMicroTopic: String(process.env.KAFKA_MICRO_TOPIC),
  kafkaCoreTopic: String(process.env.KAFKA_CORE_TOPIC),
  kafkaHandlerTopic: String(process.env.KAFKA_HANDLER_TOPIC),
  kafkaRequesterTopic: String(process.env.KAFKA_REQUESTER_TOPIC),
  kafkaUrl: `${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`,
};
