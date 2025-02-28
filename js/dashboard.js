async function validateToken(token) {
  const url = `https://oauth2.googleapis.com/tokeninfo?access_token=${token}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Invalid token');
    }

    const data = await response.json();
    console.log('Token Info:', data);
  } catch (error) {
    console.error('Failed to validate token:', error.message);
    alert('토큰이 유효하지 않습니다.\n다시 로그인 해주세요.');
    window.location.href = '/';
  }
}

// 토큰 검증
const accessToken = localStorage.getItem('access_token');
validateToken(accessToken);
