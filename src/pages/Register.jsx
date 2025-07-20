import { useRef, useState, useContext } from "react";
import { ThemeContext } from "../contexts.jsx/theme";

export function Register() {
    const email = useRef();
    const password = useRef();
    const password2 = useRef();
    const nickname = useRef();
    const remember = useRef();
    const [error, setError] = useState("");
    const { theme } = useContext(ThemeContext);
    const color = theme === "dark" ? "bg-black text-light" : "bg-light text-dark";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.current.value !== password2.current.value) {
            setError("Şifreler aynı değil!");
            return;
        }
        setError("");
        // Form verilerini burada kullanabilirsin
        console.log(
            "Email:", email.current.value,
            "Password:", password.current.value,
            "NickName:", nickname.current.value,
            "Remember:", remember.current.checked
        );
    };

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className={`card p-4 ${color}`} style={{maxWidth: 420, width: "100%"}}>
                <h4 className="mb-4 text-center">Register</h4>
                <div className="card-body w-100">
                    {error && <div className="alert alert-danger py-2">{error}</div>}
                    <form className="w-100" onSubmit={handleSubmit}>
                        <div className="mb-3 w-100">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                ref={email}
                                required
                                className="form-control rounded-pill px-3 py-2"
                                style={{background: "#222", color: "#fff", border: "none"}}
                            />
                        </div>
                        <div className="mb-3 w-100">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                ref={password}
                                required
                                className="form-control rounded-pill px-3 py-2"
                                style={{background: "#222", color: "#fff", border: "none"}}
                            />
                        </div>
                        <div className="mb-3 w-100">
                            <label htmlFor="password2" className="form-label">Şifreyi Tekrar Girin:</label>
                            <input
                                type="password"
                                id="password2"
                                name="password2"
                                ref={password2}
                                required
                                className="form-control rounded-pill px-3 py-2"
                                style={{background: "#222", color: "#fff", border: "none"}}
                            />
                        </div>
                        <div className="mb-3 w-100">
                            <label htmlFor="nickname" className="form-label">NickName:</label>
                            <input
                                type="text"
                                id="nickname"
                                name="nickname"
                                ref={nickname}
                                required
                                className="form-control rounded-pill px-3 py-2"
                                style={{background: "#222", color: "#fff", border: "none"}}
                            />
                        </div>
                        <div className="mb-3 w-100 d-flex align-items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                ref={remember}
                                className="form-check-input me-2"
                            />
                            <label htmlFor="remember" className="form-check-label">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-pill fw-bold">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}