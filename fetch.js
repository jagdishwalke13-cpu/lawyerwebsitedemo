const https = require('https');
const http = require('http');

const url = 'https://www.rajlawassociate.com';

const agent = new https.Agent({
  rejectUnauthorized: false
});

https.get(url, { agent }, (res) => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    // Basic extraction of text inside tags to see the content
    const text = data.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                     .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/\s+/g, ' ')
                     .trim();
    console.log(text.substring(0, 3000));
  });
}).on('error', (e) => {
  console.error(e);
});
