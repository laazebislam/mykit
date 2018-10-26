import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
describe("our first test", () => {

    it("should pass", () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        const indexFile = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(indexFile, function(err, window) {
            if (err) throw err;
            expect(window.document.querySelector("h1").textContent).to.equal('my starter kit');
            done();
            window.close();
        });

    });
});