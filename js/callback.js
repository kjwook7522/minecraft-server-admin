document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.hash.substring(1));
  const token = params.get('access_token');
  if (token) {
    localStorage.setItem('access_token', token);
  }
  const tokenType = params.get('token_type');
  if (tokenType) {
    localStorage.setItem('token_type', tokenType);
  }
  const expiredIn = params.get('expires_in');
  if (expiredIn) {
    localStorage.setItem('expires_in', expiredIn);
  }
  const scope = params.get('scope');
  if (scope) {
    localStorage.setItem('scope', scope);
  }

  window.location.href = '/dashboard';
});
