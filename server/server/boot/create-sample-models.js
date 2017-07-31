var async = require('async');
var faker = require('faker');

var NUMBER_OF_DEVELOPERS = 10;
var NUMBER_OF_SNIPPETS = 20;

var languages = ['Python', 'Javascript', 'Java', 'C++', 'C#', 'Bash', 'CSS', 'Go', 'Ruby'];

var developers = [{
  username: 'testing',
  email: 'test@test.com',
  password: 'test123'
}];

var snippetBodies = [{
  body: "Language.create(languages.map(function(language) { return { name: language, imageUrl: language + '.jpg' } }), cb);",
  languageIndex: 1
}, {
  body: 'for port in range(1,1025): sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM) result = sock.connect_ex((remoteServerIP, port)) if result == 0: print "Port {}: Open".format(port) sock.close()',
  languageIndex: 0
}];

for (var i = 0; i < NUMBER_OF_DEVELOPERS; i++) {
  var userName = faker.internet.userName();
  developers.push({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: userName + '123'
  });
}


module.exports = function(app) {
  
  var env = (process.env.NODE_ENV || 'development');

  if (env !== 'development') { return; }
  
  var pg = app.dataSources.pgSQL;

  async.parallel({
    developers: async.apply(createDevelopers),
    languages: async.apply(createLanguages)
  }, function(err, results) {
    if (err) throw err;

    var developers = results.developers;
    var languages = results.languages;

    createSnippets(languages, developers, function(err) {
      var lbTables = ['AccessToken', 'ACL'];
      pg.automigrate(lbTables, function(err) {
        console.log('models created');
      });
    });

  });

  function createDevelopers(cb) {
    pg.automigrate('Developer', function(err) {
      if (err) return cb(err);

      var Developer = app.models.Developer;
      Developer.create(developers, cb);
    });
  }
  function createLanguages(cb) {
    pg.automigrate('Language', function(err) {
      if (err) return cb(err);

      var Language = app.models.Language;
      Language.create(languages.map(function(language) { 
        return { 
          name: language,
          imageUrl: language + '.jpg',
          description: 'a language that is ' + language
        }
      }), cb);
    });
  }

  function createSnippets(languages, developers, cb) {
    pg.automigrate('Snippet', function(err) {
      if (err) return cb(err);

      var date = Date.now();
      var Snippet = app.models.Snippet;

      var snippets = [];

      for (var i = 0; i < NUMBER_OF_SNIPPETS; i++) {
        var bodyIndex = Math.floor(Math.random()*snippetBodies.length);
        var developerIndex = Math.floor(Math.random()*developers.length);
        var languageIndex = snippetBodies[bodyIndex].languageIndex;

        var snippet = {
          body: snippetBodies[bodyIndex].body,
          language: languages[languageIndex],
          developer: developers[developerIndex],
          created: date,
          notes: faker.hacker.phrase(),
          title: faker.lorem.words(),
          version: "0.1"
        }

        snippets.push(snippet);
      }

      Snippet.create(snippets, cb);
    });
  }

}
