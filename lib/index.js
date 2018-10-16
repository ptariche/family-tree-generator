const FS           = require('fs');
const YAML         = require('js-yaml');
const CSV_TO_JSON  = require('csvtojson/v2');
const JSON_TO_YAML = require('json2yaml');
const GRAPH        = require('kingraph');

const CSV_FILE     = process.env.CSV_FILE   || './examples/example_family.csv';
const PNG_OUTPUT   = process.env.PNG_OUTPUT || './examples/example_family.png';

const RUN = async () => {

  let family = await CSV_TO_JSON().fromFile(CSV_FILE);

  let parents = [];
  
  for (let i = 0; i < family.length; i++) {
    let member          = family[i];
    let name            = member['Full Birthname'];
    let father          = member['Father'];
    let mother          = member['Mother'];
    let fathersLastName = member[`Father's Last Name`];
    let maidenName      = member[`Mother's Last Name`];
    let subFamilyName   = `${fathersLastName}-${maidenName}`;
  
    let parentsKey = `${father}_${mother}`;
  
    let couple = parents.find(i => i.key === parentsKey);
  
    if (couple) {
      couple.children.push(name);
    } else {
      if (father || mother) {
        parents.push({
          key: parentsKey,
          house: subFamilyName,
          familyName: fathersLastName,
          maidenFamily: maidenName,
          parents: [father, mother],
          father: father,
          mother: mother,
          children: [name]
        });
      }
    }
  }
  
  let families    = { families: parents};
  let yamlFamlies = JSON_TO_YAML.stringify(families);
  
  const input = YAML.safeLoad(yamlFamlies);
  let graph   = await GRAPH(input, {
                            format: 'png',
                            async: true
                          });
  
  FS.writeFileSync(PNG_OUTPUT, graph, 'utf8');

  return;
};

RUN().then( () => {
  console.log('Done converting CSV to PNG');
}).catch (err => {
  console.error(err.stack || err);
});


