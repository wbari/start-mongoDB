const core = require('@actions/core');
const exec = require('@actions/exec');

(async function (){
  await exec.exec(`sudo docker run --name mongo -d -p 27017:27017 mongo:${core.getInput('mongoDBVersion')}`);
})()

