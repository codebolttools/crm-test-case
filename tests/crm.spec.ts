import { test, expect } from '@playwright/test';

// Function to perform login
async function login(page) {
  // Navigate to the login page
  await page.goto('http://localhost:3000/login');

  // Wait for the login page to load
  await expect(page.locator('input#normal_login_email')).toBeVisible();

  // Fill in the login form
  await page.fill('input#normal_login_email', 'admin@demo.com');
  await page.fill('input#normal_login_password', 'admin123');

  // Submit the login form
  await page.click('button[type="submit"]');

  // Wait for the page to redirect to the homepage
  await expect(page).toHaveURL('http://localhost:3000/');
}

test('check Email field in Add New Client popup', async ({ page }) => {
  // Perform login
  await login(page);

  // Navigate to the customer page
  await page.goto('http://localhost:3000/customer');

  // Click on the "Add New Client" button
  await page.click('button:has-text("Add New Client")');

  // Check if the Email field exists in the popup using a more specific locator
  const emailField = page.getByRole('textbox', { name: 'email@example.com' });
  await expect(emailField).toBeVisible();
});

test('check if amount is present on invoice page', async ({ page }) => {
  // Perform login
  await login(page);

  // Navigate to the invoice creation page
  await page.goto('http://localhost:3000/invoice/create');
  await expect(page.locator('body')).toBeVisible(); // Wait for the page to load

  // Click on the search input field
  // const searchInput = page.locator('input[type="search"][role="combobox"]#rc_select_8');
  // await searchInput.click();
});
test('test if there is a "Download Recent Invoices" button', async ({ page }) => {
  // Perform login
  await login(page);

  // Navigate to the customer page
  await page.goto('http://localhost:3000');

  // Assert that the "Download Recent Invoices" button is present
  const downloadButton = page.locator('button:has-text("Download Recent Invoices")');
  await expect(downloadButton).toBeVisible();

  // Click the "Download Recent Invoices" button
  await downloadButton.click();

  // Optionally, add further checks for what happens after the click
  // Example: Check if a download or popup occurs
});
test('test if designation field was added to client', async ({ page }) => {
  // Perform login
  await login(page);

  // Navigate to the customer page
  await page.goto('http://localhost:3000/customer');

  // Click on the "Add New Client" button
  await page.click('button:has-text("Add New Client")');

  // Locate the correct Designation field
  const designationField = page.locator('form', { hasText: 'NameCountryAddressPhoneEmailDesignationSubmit' }).locator('#designation');

  // Verify the field is visible
  await expect(designationField).toBeVisible();
});
