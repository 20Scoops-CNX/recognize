// test;

console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
const creds = new window.AWS.Credentials(
  process.env.AWS_SECRET_ACCESS_KEY,
  process.env.AWS_SECRET_KEY
);
const myConfig = new window.AWS.Config({
  credentials: creds,
  region: 'us-east-1'
});

window.AWS.config = myConfig;
