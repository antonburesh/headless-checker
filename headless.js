(async ()=>{
    const puppeteer = require('puppeteer');

    console.log("Запускаем браузер")
    const browser = await puppeteer.launch({
        headless: "shell",
    });
    console.log("Создаем новую вкладку")
    const page = await browser.newPage();
    console.log("Переходим на полигон")
    await page.goto('http://localhost:3000');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Закрываем браузер")
    await browser.close();
})()
