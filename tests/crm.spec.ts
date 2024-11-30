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

// test('check Email field in Add New Client popup', async ({ page }) => {
//   // Perform login
//   await login(page);

//   // Navigate to the customer page
//   await page.goto('http://localhost:3000/customer');

//   // Click on the "Add New Client" button
//   await page.click('button:has-text("Add New Client")');

//   // Check if the Email field exists in the popup using a more specific locator
//   const emailField = page.getByRole('textbox', { name: 'email@example.com' });
//   await expect(emailField).toBeVisible();
// });

// test('check if amount is present on invoice page', async ({ page }) => {
//   // Perform login
//   await login(page);

//   // Navigate to the invoice creation page
//   await page.goto('http://localhost:3000/invoice/create');
//   await expect(page.locator('body')).toBeVisible(); // Wait for the page to load

//   // Click on the search input field
//   // const searchInput = page.locator('input[type="search"][role="combobox"]#rc_select_8');
//   // await searchInput.click();
// });
// test('test if there is a "Download Recent Invoices" button', async ({ page }) => {
//   // Perform login
//   await login(page);

//   // Navigate to the customer page
//   await page.goto('http://localhost:3000');

//   // Assert that the "Download Recent Invoices" button is present
//   const downloadButton = page.locator('button:has-text("Download Recent Invoices")');
//   await expect(downloadButton).toBeVisible();

//   // Click the "Download Recent Invoices" button
//   await downloadButton.click();

//   // Optionally, add further checks for what happens after the click
//   // Example: Check if a download or popup occurs
// });
// test('test if designation field was added to client', async ({ page }) => {
//   // Perform login
//   await login(page);

//   // Navigate to the customer page
//   await page.goto('http://localhost:3000/customer');

//   // Click on the "Add New Client" button
//   await page.click('button:has-text("Add New Client")');

//   // Locate the correct Designation field
//   const designationField = page.locator('form', { hasText: 'NameCountryAddressPhoneEmailDesignationSubmit' }).locator('#designation');
// //const designationField = page.locator("#designation")
//   // Verify the field is visible
//   //const designationField = page.locator('input[name="designation"], input[id="designation"]').first();
//   //const designationField = page.getByLabel('Designation');
//   // const designationFields = page.locator('input[name="designation"], input[id="designation"]');
//   // await expect(designationFields).toHaveCount(1);

//   // // Then select and verify visibility
//   // const designationField = designationFields.first();
//   await expect(designationField).toBeVisible();
// });
// test('test if New Report was added', async ({ page }) => {
//   // Perform login
//   await login(page);

//   // Navigate to the customer page
//   await page.goto('http://localhost:3000');

//   // Check if an <h3> with text "New Report" exists
//   const newReportHeader = page.locator('h3', { hasText: 'New Report' });
//   await expect(newReportHeader).toBeVisible();
// });
// test('test if New fields Age and Gender were added', async ({ page }) => {
//   // Perform login
//   await login(page);

//   // Navigate to the customer page
//   await page.goto('http://localhost:3000/customer');

//   // Click on the "Add New Client" button
//   await page.click('button:has-text("Add New Client")');



//   // Locate the Age field
//   // const ageField = page.locator('form', { hasText: 'NameCountryAddressPhoneEmailAgeSubmit' }).locator('#age');
//   // const ageField = page.locator('#age');
//   const ageField = page.getByRole('spinbutton');
//   // Verify the Age field is visible
//   await expect(ageField).toBeVisible();

//   // Locate the Gender field
//   //const genderField = page.locator('#gender');
//   //const genderField = page.getByLabel('Gender')
//   const genderField = page.locator('form').filter({ hasText: 'NameCountryAddressPhoneEmailDesignationAgeGenderSubmit' }).locator('#gender')
//   // // Verify the Gender field is visible
//   await expect(genderField).toBeVisible();


// });
// test('test if sortable list added to Customer Table with caret indicators', async ({ page }) => {
//   // Perform login
//   await login(page);

//   // Navigate to the customer page
//   await page.goto('http://localhost:3000/customer');



//   // Verify if the table is sortable by clicking on a column header
//   const columnHeader = page.locator('table th:has-text("Name")');

//   await columnHeader.click();

//   // Verify ascending sort indicator is active
//   const caretUpIcon = columnHeader.locator('span[aria-label="caret-up"].active');
//   await expect(caretUpIcon).toBeVisible();

//   // Capture and normalize row data
//   const rowsAsc = await page.locator('table tbody tr td:first-child');
//   let rowTextsAsc = (await rowsAsc.allInnerTexts())
//     .map(text => text.trim().toLowerCase())
//     .filter(text => text !== ''); // Remove empty strings
//   const sortedTextsAsc = [...rowTextsAsc].sort();

//   expect(rowTextsAsc).toEqual(sortedTextsAsc);

//   // Click again to sort in descending order
//   await columnHeader.click();

//   // Verify descending sort indicator is active
//   const caretDownIcon = columnHeader.locator('span[aria-label="caret-down"].active');
//   await expect(caretDownIcon).toBeVisible();

//   // Capture and normalize row data
//   let rowTextsDesc = (await rowsAsc.allInnerTexts())
//     .map(text => text.trim().toLowerCase())
//     .filter(text => text !== ''); // Remove empty strings
//   const sortedTextsDesc = [...sortedTextsAsc].reverse();

//   expect(rowTextsDesc).toEqual(sortedTextsDesc);
// });
// test('test if New Summarycard were added at home page', async ({ page }) => {
//   // Perform login
//   await login(page);

//   // Navigate to the customer page
//   await page.goto('http://localhost:3000');

//   // Check if an <h3> with text "New Report" exists
//   const newReportHeader = page.locator('h3', { hasText: 'Clients' });
//   const newPaymentHeader = page.locator('h3', { hasText: 'Payments' });
//   await expect(newReportHeader).toBeVisible();
//   await expect(newPaymentHeader).toBeVisible();
// });
// test('check if charts are added to the page', async ({ page }) => {
//   // Perform login
//   await login(page);

//   // Navigate to the page containing the chart
//   await page.goto('http://localhost:3000');

//   // Wait for the chart to be rendered
//   const chartContainer = page.locator('.recharts-responsive-container');
//   await expect(chartContainer).toBeVisible();


// });
// test('check if date range was added', async ({ page }) => {
//   // Perform login
//   await login(page);

//   // Navigate to the page containing the date range
//   await page.goto('http://localhost:3000/payment');

//   // Locate the date range picker or displayed date range
//   const dateRange = page.locator('.date-range-picker'); // Replace with the correct selector for the date range element

//   // Assert that the date range picker is visible
//   await expect(dateRange).toBeVisible();
// });
// test('test if export to pdf or excell button added', async ({ page }) => {
//   // Perform login
//   await login(page);

//   // Navigate to the customer page
//   await page.goto('http://localhost:3000');

//   // Assert that the "Download Recent Invoices" button is present
//   const downloadButton = page.locator('button:has-text("Export to PDF")').first();
//   await expect(downloadButton).toBeVisible();

//   // Click the "Download Recent Invoices" button
//   await downloadButton.click();


// });
test('test if date range picker updates payment summary on dashboard', async ({ page }) => {
  // Perform login
  await login(page);

  // Navigate to the dashboard page
  await page.goto('http://localhost:3000');

  // Locate the start date input
  const startDateInput = page.locator('input[placeholder="Start date"]');
  await expect(startDateInput).toBeVisible();

  // Locate the end date input
  const endDateInput = page.locator('input[placeholder="End date"]');
  await expect(endDateInput).toBeVisible();

  // Verify the Payment Summary section is visible
  const paymentSummaryHeader = page.locator('h3', { hasText: 'Payment Summary' });
  await expect(paymentSummaryHeader).toBeVisible();


});
test('test if date range for payment works as expected', async ({ page }) => {
  // Perform login
  await login(page);

  // Navigate to the dashboard page
  await page.goto('http://localhost:3000/payment');

  // Locate the start date input
  const startDateInput = page.locator('input[placeholder="Start date"]');
  await expect(startDateInput).toBeVisible();

  // Locate the end date input
  const endDateInput = page.locator('input[placeholder="End date"]');
  await expect(endDateInput).toBeVisible();

  // Set the date range

});

test('test if footer was added', async ({ page }) => {
  // Perform login
  await login(page);

  // Navigate to the dashboard page
  await page.goto('http://localhost:3000');

  // Check if the footer tag is present
  const footer = await page.locator('footer');
  await expect(footer).toBeVisible(); // Assert that the footer is visible
});
