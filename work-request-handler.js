var superagent = require('superagent');

function request(method, path, cb) {
  var response = null
  superagent(method, `https://app.asana.com/api/1.0/${path}`)
    .set('Authorization', `Bearer ${context.secrets.ASANA_API_KEY}`)
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      cb(err, res)
    })
}

/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  var data = context.body
  console.log(context)
  var email = data['Email']
  var asana = new Asana()
  console.log(asana)
  cb(null, { hello: context.query.name || 'Anonymous' });
};