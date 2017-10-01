const functions = require('firebase-functions');

const cors = require('cors')({
  origin: true
});

const technologies = [
    'Azure',
      'C',
      'C++',
      'C#',
      '.NET',
      'ASP.NET',
      'MVC',
      'Elastic',
      'Containers',
      'Docker',
      'Cloud Development',
      'Visual Studio',
      'Android',
      'Ionic',
      'Nginx',
      'SQL',
      'NoSql',
      'IoT',
      'RabbitMq',
      'Microservices',
      'Installshield',
      'Batch',
      'Bash',
      'Shell',
      'Powershell',
      'Octopus',
      'Bamboo',
      'Git',
      'VSS',
      'Clearcase',
      'SVN',
      'HTML',
      'JavaScript',
      'CSS',
      'Angular',
      'Knockout',
      'Polymer'
];

exports.technologies = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        res.send(technologies);
    });
});