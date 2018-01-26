// test;

console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
console.log(
  process.env.AWS_SECRET_ACCESS_KEY,
  'process.env.AWS_SECRET_ACCESS_KEY'
);

console.log(
  process.env.AWS_SECRET_KEY,
  'process.env.AWS_SECRET_KEY'
);

const awsKey =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    : process.env.AWS_SECRET_KEY;
const awsSecretKey =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_AWS_SECRET_KEY
    : process.env.AWS_SECRET_ACCESS_KEY;
const creds = new window.AWS.Credentials(awsKey, awsSecretKey);
const myConfig = new window.AWS.Config({
  credentials: creds,
  region: 'us-east-1'
});

window.AWS.config = myConfig;
