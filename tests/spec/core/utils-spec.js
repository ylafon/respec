describe("Core — Utils", function () {
    var MAXOUT = 5000, utils;

    // linkCSS()
    it("should add a link element", function () {
        runs(function () {
            require(["../../../js/core/utils"], function (u) { utils = u; });
        });
        waitsFor(function () { return utils; }, MAXOUT);
        runs(function () {
            utils.linkCSS(document, "BOGUS");
            expect($("link[href='BOGUS']").length == 1).toBeTruthy();
            $("link[href='BOGUS']").remove();
        });
    });
    it("should add several link elements", function () {
        runs(function () {
            utils.linkCSS(document, ["BOGUS", "BOGUS", "BOGUS"]);
            expect($("link[href='BOGUS']").length == 3).toBeTruthy();
            $("link[href='BOGUS']").remove();
        });
    });

    // $.renameElement()
    it("should rename the element", function () {
        runs(function () {
            var $div = $("<div><p><a></a></p></div>").appendTo($("body"));
            $div.find("p").renameElement("span");
            expect($div.find("span").length == 1).toBeTruthy();
            $div.remove();
        });
    });

    // lead0
    it("should prepend 0 only when needed", function () {
        runs(function () {
            expect(utils.lead0("1")).toEqual("01");
            expect(utils.lead0("01")).toEqual("01");
        });
    });

    // concatDate
    it("should format the date as needed", function () {
        runs(function () {
            var d = new Date();
            d.setFullYear(1977);
            d.setMonth(2);
            d.setDate(15);
            expect(utils.concatDate(d)).toEqual("19770315");
            expect(utils.concatDate(d, "-")).toEqual("1977-03-15");
        });
    });
});