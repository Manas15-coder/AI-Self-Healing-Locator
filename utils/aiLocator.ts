import OpenAI from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function suggestLocator(failedLocator: string, htmlSnippet: string) {
    const prompt = `
    The following Playwright locator failed: ${failedLocator}.
    Here is the HTML snippet: ${htmlSnippet}.
    Suggest a working CSS selector or XPath to reliably locate the element.
    `;

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message?.content || "";
}
