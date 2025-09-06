# 🤖 AI Self-Healing Automation Demo

## Overview
This project demonstrates **AI-driven self-healing test automation** using **Playwright + TypeScript**.  
When a Selenium/Playwright locator fails due to **dynamic DOM changes**, AI suggests a **new locator**, reducing flaky test failures and making automation more robust.  

## Features ✨
- Simulate broken locators in a **demo login page**  
- AI-powered **locator suggestions** using OpenAI GPT  
- Self-healing mechanism for **robust automation**   
- Easy to extend to other pages or tests  

## Tech Stack 🛠️
- TypeScript  
- Playwright  
- OpenAI API (GPT-4)  
- Node.js  

## Demo 🎬
1. Run `npm install` to install dependencies  
2. Place your OpenAI API key in `.env` or GitHub Secrets  
3. Run tests: `npx playwright test`  
4. See **AI suggest locators** when original ones fail  

## Benefits 💡
- Reduce flaky test failures  
- Showcases modern **AI + CI/CD automation**  
 
