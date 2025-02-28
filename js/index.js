document.getElementById('google-login').addEventListener('click', authenticate);

function authenticate() {
  console.log('test');
  const clientId =
    '400013054787-ahcffigopvohog3itjpsb1io6rj5irom.apps.googleusercontent.com';
  const redirectUri = 'http://localhost:8080/auth/callback';
  const scope = 'https://www.googleapis.com/auth/cloud-platform';
  window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
}
