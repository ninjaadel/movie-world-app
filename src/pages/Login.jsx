import { useState } from 'react';
import { Input } from '../components/ui/input';
import { useUserInput } from '../hooks/userInput';

export function Login() {
  const { values: emailValue, setValues: setEmailValues, isEditted: emailIsEditted, setIsEditted: setEmailIsEditted, handleIsblur: handleEmailIsblur, handleInputChange: handleEmailInputChange } = useUserInput()
  const { values: passwordValue, setValues: setPasswordValues, isEditted: passwordIsEditted, setIsEditted: setPasswordIsEditted, handleIsblur: handlePasswordIsblur, handleInputChange: handlePasswordInputChange } = useUserInput()
  const { values: nicknameValue, setValues: setNicknameValues, isEditted: nicknameIsEditted, setIsEditted: setNicknameIsEditted, handleIsblur: handleNicknameIsblur, handleInputChange: handleNicknameInputChange } = useUserInput()


  const EmailIsInvalid = emailIsEditted && !emailValue.includes('@');
  const PasswordIsInvalid = passwordIsEditted && passwordValue.length < 6;
  const NicknameIsInvalid = nicknameIsEditted && nicknameValue.length < 2;

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!emailValue.includes('@') || passwordValue.length < 6) {
      // Hatalıysa burada uyarı verebilirsin
      return;
    }
    console.log({ emailValue, passwordValue, nicknameValue }); // Tüm input değerlerini gösterir
  }

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="card p-4 bg-black text-light" style={{ maxWidth: 420, width: "100%" }}>
        <h4 className="mb-4 text-center">Login</h4>
        <div className="card-body w-100">
          <form className="w-100" onSubmit={handleFormSubmit}>
            <Input
              id="email"
              name="email"
              value={emailValue}
              label="Email:"
              error={EmailIsInvalid && (<div>Lütfen geçerli bir e-posta adresi girin.</div>)}
              type="email"
              onBlur={handleEmailIsblur}
              onChange={handleEmailInputChange}
            />
            <Input
              id="password"
              name="password"
              value={passwordValue}
              label="Password:"
              error={PasswordIsInvalid && (<div>Şifre en az 6 karakter olmalıdır.</div>)}
              type="password"
              onBlur={handlePasswordIsblur}
              onChange={handlePasswordInputChange}
            />
            <Input
              id="nickname"
              name="nickname"
              value={nicknameValue}
              label="NickName:"
              error={NicknameIsInvalid && (<div>Geçerli bir takma ad girin.</div>)}
              type="text"
              onBlur={handleNicknameIsblur}
              onChange={handleNicknameInputChange}
            />
            <div className="mb-3 w-100 d-flex align-items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="form-check-input me-2"
                
                
              />
              <label htmlFor="remember" className="form-check-label">Remember me</label>
            </div>
            <button type="submit" className="btn btn-warning w-100 rounded-pill fw-bold">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}