export function Input ({id, label, error, ...props}) {
    return (<>
       <div className="mb-3 w-100">

     <label htmlFor={id} className="form-label">{label}</label>
                            <input {...props}
                                formNoValidate
                                required
                                className="form-control rounded-pill px-3 py-2"
                                style={{background: "#222", color: "#fff", border: "none"}}
                            />

                        </div>
    {error && <div className="invalid-feedback d-block">{error}</div>}
    </>
)
}