import { test, expect } from "@playwright/test";

test.only("Playwright Element Locating", async ({ page }) => {
  await page.goto("opencart/index.php?route=account/register");

  await page.getByRole("textbox", { name: "* First Name" }).fill("Salman");
  await page.getByRole("textbox", { name: "* Last Name" }).fill("Rahman");

  await page.getByLabel("E-Mail").fill("RandomEmail@gmail.com");

  await page.getByPlaceholder("Telephone").fill("01625352");

  await expect(page.getByText("Your Personal Details")).toBeVisible();

  await expect(page.getByAltText("naveenopencart")).toBeEnabled();

  await expect(page.getByTitle("naveenopencart")).toBeEnabled();

  await page.pause();
});
