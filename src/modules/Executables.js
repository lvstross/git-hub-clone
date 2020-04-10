import 'dotenv/config';
const exec = require('child_process').exec;
const fs = require('fs');

const ROOT = process.env.ROOT_REPO_DIR_PATH;

function handler(error, stdout, stderr) {
  if (error) {
    console.log('Execution Error:', error);
  } else {
    console.log(stdout);
  }
}

export const makeRootDirectory = async (res) => {
  const command = `cd ~/; mkdir ${ROOT};`;
  await exec(command, handler);
  return res.send(`Root repository path created at ~/${ROOT}`);
}
