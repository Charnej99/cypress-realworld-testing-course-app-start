const ftp = require('basic-ftp');
const path = require('path');

async function uploadFile() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: 'ftp.example.com',
      user: 'yourUsername',
      password: 'yourPassword',
      secure: false
    });
    console.log('Connected to FTP');
    
    await client.uploadFrom(
      path.join(__dirname, 'cypress/downloads/file.pdf'),
      'remote/path/file.pdf'
    );
    console.log('File uploaded');
  } catch (err) {
    console.error('FTP upload failed:', err);
  }
  client.close();
}

uploadFile();

