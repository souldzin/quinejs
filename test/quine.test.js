const mocha = require('mocha');
const {expect} = require('chai');
const fs = require('fs');
const path = require('path');

// GET QUINE
const PARENT_DIR = path.dirname(__dirname);
const QUINE_PATH = path.resolve(PARENT_DIR, 'src', 'quine');
const quine = require(QUINE_PATH);

describe('quinejs', function(){
    it('should create itself', function(done){
        const expected = quine();

        fs.readFile(QUINE_PATH, function(e, data){
            if(e) {
                console.error(e);
                done.fail("Error occurred while reading file for quine");
                return;
            }

            const actual = data.toString("utf-8");

            expect(actual).to.be.eql(expected);
            done();
        });
    });
});