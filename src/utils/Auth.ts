
export const getToken = async () => {
  const response = await fetch('https://demoqa.com/Account/v1/GenerateToken', {
    method: 'POST',
    body: JSON.stringify({
      userName: 'vijay',
      password: 'Vijay123$',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data.token;
};
