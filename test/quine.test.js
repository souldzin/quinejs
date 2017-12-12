const mocha = require('mocha');
const {expect} = require('chai');
const fs = require('fs');
const path = require('path');

// GET QUINE
const PARENT_DIR = path.dirname(__dirname);
const QUINE_PATH = path.resolve(PARENT_DIR, 'src', 'quine');
const QUINE_PATH_JS = `${QUINE_PATH}.js`;
const quine = require(QUINE_PATH);

describe('quinejs', function(){
    it('should create itself', function(done){
        const expected = quine();

        fs.readFile(QUINE_PATH_JS, function(e, data){
            if(e) {
                done(e);
                return;
            }

            const actual = data.toString("utf-8");

            expect(actual).to.equals(expected);

            done();
        });
    });
});