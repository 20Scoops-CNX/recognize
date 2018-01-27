const awsKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
const awsSecretKey = process.env.REACT_APP_AWS_SECRET_KEY;
const creds = new window.AWS.Credentials(awsKey, awsSecretKey);
const myConfig = new window.AWS.Config({
  credentials: creds,
  region: 'us-east-1'
});

window.AWS.config = myConfig;
