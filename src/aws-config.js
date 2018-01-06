// test;
const creds = new window.AWS.Credentials('AKIAJ7HW6B5R5Y3GBRTQ', 'n8Qs8QT2mpiAVhHkQaHOnnxlrw8GU0hKsraZgiOO');
const myConfig = new window.AWS.Config({
  credentials: creds, region: 'us-east-1'
});

window.AWS.config = myConfig;
