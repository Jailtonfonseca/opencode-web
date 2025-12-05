import { createSignal, Show } from "solid-js";
import { login } from "../stores/auth";

export default function Login() {
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (login(password())) {
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">OpenCode</h1>
          <p class="py-6">
            Please enter your access code to continue.
          </p>
        </div>
        <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form class="card-body" onSubmit={handleSubmit}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered"
                required
                value={password()}
                onInput={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
            <Show when={error()}>
              <div class="text-error text-sm mt-2 text-center">{error()}</div>
            </Show>
          </form>
        </div>
      </div>
    </div>
  );
}
