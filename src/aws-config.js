// test;

console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
const creds = new window.AWS.Credentials(
  'AKIAIFFLWN5CDUNXN6NQ',
  '0/QDT2fpT36kbvuro8HDp/GxqbIRunBMYufkwuIS'
);
const myConfig = new window.AWS.Config({
  credentials: creds,
  region: 'us-east-1'
});

window.AWS.config = myConfig;
