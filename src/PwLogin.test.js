import { html } from 'lit';
import { expect, fixture, oneEvent } from '@open-wc/testing';

import '../pw-login.js';

describe('When user enters the name and a password', () => {
  it('Then a login button should be activated', async () => {
    const elem = await fixture(html`<pw-login></pw-login>`);
    const elemRoot = elem.shadowRoot

    const userName = elemRoot.querySelector('[data-testid="userName"]');
    const password = elemRoot.querySelector('[data-testid="password"]');
    
    userName.value = 'Jaime';
    password.value = '12345678';
    userName.dispatchEvent(new InputEvent('input', { data: userName.value }));
    password.dispatchEvent(new InputEvent('input', { data: password.value }));

    await elem.updateComplete;

    const submit = elemRoot.querySelector('[data-testid="submit"]');
    expect(submit).not.to.have.attribute('disabled');
  });
});
