import {expect} from 'chai';
import {JSDOM} from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should have h1 that says users', () => {
    // it('should say hello', (done) => {  // if async use the done param
        const index = fs.readFileSync('./src/index.html', "utf-8");
        // jsdom.env(index, function(err, window) {
        //     const h1 = window.document.getElementByTagName('h1')[0];
        //     expect(h1.innerHTML).to.equal("Hello World!");
        //     window.close();
        // });
        // The above code doesn't work as jsdom.env has been depricated
        // The new version, use the JSDOM constructor as seen below
        const dom = new JSDOM(index);
        const h1 = dom.window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Users");
        // done(); // if function is async use the done method to tell 'it' the test has finished!
        dom.window.close;
    })
})