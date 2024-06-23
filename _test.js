const assert=require("assert")

Feature('Sample Feature')

Scenario('First Test', ({ I }) => {
	I.amOnPage('https://practicesoftwaretesting.com/#/auth/login')
	I.wait(1)
    I.saveScreenshot("Test1.png",true)
})

Scenario('Second Test', ({ I }) => {
	I.amOnPage('https://practicesoftwaretesting.com/#/auth/login')
	I.wait(2)
    I.see("Login")
    I.dontSee("Amazon")
    I.seeElement("#email")
    I.dontSeeElement("#FAIL")
    I.saveScreenshot("Test2.png",true)
})

Scenario('Third Test', async ({ I }) => {
	I.amOnPage('https://practicesoftwaretesting.com/#/auth/login')
	I.wait(3)
    const text=await I.grabTextFrom('h3')
    assert.strictEqual(text,"Login","Text Not Matched")
    I.saveScreenshot("Test3.png",true)
})
