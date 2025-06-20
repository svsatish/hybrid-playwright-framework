import { Page } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToSignup() {
    await this.page.click('a[href="/login"]');
  }

  async registerUser(name: string, email: string, password: string) {
    await this.page.fill('[data-qa="signup-name"]', name);
    await this.page.fill('[data-qa="signup-email"]', email);
    await this.page.click('[data-qa="signup-button"]');

    await this.page.check('#id_gender1');
    await this.page.fill('#password', password);
    await this.page.selectOption('#days', '1');
    await this.page.selectOption('#months', '1');
    await this.page.selectOption('#years', '2000');

    await this.page.fill('#first_name', 'Satish');
    await this.page.fill('#last_name', 'Saripella');
    await this.page.fill('#address1', '123 Test Lane');
    await this.page.selectOption('#country', 'India');
    await this.page.fill('#state', 'Telangana');
    await this.page.fill('#city', 'Hyderabad');
    await this.page.fill('#zipcode', '500001');
    await this.page.fill('#mobile_number', '9999999999');

    await this.page.click('[data-qa="create-account"]');
  }

  async isAccountCreated(): Promise<boolean> {
    return this.page.isVisible('h2[data-qa="account-created"]');
  }
}
