import { test } from "@playwright/test";
import { suggestLocator } from "../aiHelper";

test("AI self-healing locator demo", async ({ page }) => {
  // Load local demo page
  await page.goto("./pages/login.html");

  let locator = "#username"; // Wrong locator on purpose

  try {
    await page.fill(locator, "myUser");
  } catch (error) {
    console.log(`❌ Failed to locate element with: ${locator}`);

    // Capture page HTML
    const htmlSnippet = await page.content();

    // Ask AI for help
    const aiLocator = await suggestLocator(locator, htmlSnippet);

    console.log("🤖 AI suggested locator:", aiLocator);

    // Retry with AI suggested locator
    if (aiLocator) {
      await page.fill(aiLocator, "myUser");
      console.log("✅ Successfully filled username with AI suggested locator");
    }
  }

  // Fill password normally
  await page.fill("#password", "myPassword");
  await page.click("#login-btn");
});
