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

test("Multiple Elements Locating", async ({ page }) => {
  await page.goto("opencart/index.php?route=account/register");

  const formControl = page.locator(".form-control");

  console.log(await formControl.count());

  await formControl.first().fill("Samsung");

  await formControl.nth(1).fill("Shouvik");
  await formControl.nth(2).fill("Datta");
  await formControl.last().fill("1234");

  await page.pause();
});
