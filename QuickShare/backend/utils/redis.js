const Redis = require('ioredis');

const redis = new Redis({
  host: 'infallible-kingly-swift-49155.db.redis.io',
  port: 13363,
  username: 'default',
  password: '3UGc2qS1wtbHpvrnjvH2993oFufWia9v',
  tls: false,
  retryStrategy: (times) => Math.min(times * 500, 3000),
});

redis.on('connect', () => console.log('Redis connected'));
redis.on('error', (err) => console.error('Redis error:', err.message));

module.exports = redis;
