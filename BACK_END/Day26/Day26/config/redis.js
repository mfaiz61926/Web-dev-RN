
const redis = require('redis');

const redisClient = redis.createClient({
    username: 'default',
    password: 'IvChtRNM7dLsOoJOtNSpaVj055cG4BC3',
    socket: {
        host: 'redis-19934.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 19934
    }
});



module.exports = redisClient;
