const passwordPattern = /^.{5,30}$/;
const usernamePattern = /^[A-Za-z0-9_]{5,30}$/;

export const validateLoginForm = (data) => {
    const errorObjet = {}
  if (!data.password || !passwordPattern.test(data.password)) {
    errorObjet.password = "Password must be between 5 and 30 characters";
  }
  if (!data.username || !usernamePattern.test(data.username)) {
    errorObjet.username =
      "Username must be between 5 and 30 characters, containing only letters, numbers, or underscores";
  }
  return errorObjet
}