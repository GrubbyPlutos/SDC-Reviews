const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['localhost'], keyspace: 'grubhub', localDataCenter: 'datacenter1' });

module.exports = client;