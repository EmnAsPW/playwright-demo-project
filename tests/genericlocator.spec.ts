import { test, expect } from "@playwright/test";

test("Single Element Locating", async ({ page }) => {
  await page.goto("opencart/index.php?route=account/register");

  const firstNameTxt = page.locator("#input-firstname");
  const lastNameTxt = page.locator("input[name='lastname']");
  const emailTxt = page.locator("//input[@name='email']");

  await firstNameTxt.fill("Salman");
  await lastNameTxt.fill("Rahman");
  await emailTxt.fill("randomEmail@gmail.com");

  await page.pause();
});
