
exports.handler = async function(event, context) {
  return { statusCode: 200, body: JSON.stringify({ views: Math.floor(Math.random()*1000) }) };
}
