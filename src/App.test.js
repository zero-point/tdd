var ver = require("./delete.js");

test("password should not be null", function() {
    var result = verify(null);
    var result2 = verify("");
//    expect(result).toEqual(false);
//    expect(result2).toEqual(false);

});

test("password should be correct", function() {
    var result = ver.notNull("klopklop");
    expect(result).toEqual(true);

});

test("password should be at least 8 chars", function() {
    var result =ver.verify("klopklo");
    expect(result).toEqual(false);
});

test("password should be at least 8 chars", function() {
    var result = verify("klopklop");
    expect(result).toEqual(true);
});



