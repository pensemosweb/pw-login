import { html, css, LitElement } from 'lit';

export class PwLogin extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--pw-login-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      userName: { type: String },
      password: { type: String },
      enabled: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.userName = '';
    this.password = '';
    this.enabled = false;
  }

  render() {
    const isEnabled = Boolean(this.userName && this.password);

    return html`
      <form>
        <label for="userName">
          Nombre:
        </label>
        <input
          id="userName"
          data-testid="userName"
          name="userName"
          type="text"
          value=${this.userName}
          @input=${this.onChange}
        />

        <label for="password">
          Contraseña:
        </label>
        <input
          id="password"
          data-testid="password"
          name="password"
          type="password"
          value=${this.password}
          @input=${this.onChange} />

        <button data-testid="submit" ?disabled=${!isEnabled}>Registrarme</button>
      </form>
    `;
  }

  onChange(e) {
    const field = e.target;
    this[field.name] = field.value;
  }
}
