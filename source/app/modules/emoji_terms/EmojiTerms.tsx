// app/modules/emoji_terms/EmojiTerms.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = 2;
    var2 = var6[var2];
    var8 = var7.bind(var1)(var2);
    var2 = var8.prototype;
    var7 = Object.create(var2, {constructor: {value: var8}});
    var12 = function loadEmoji(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.emojiTermsImporter;
            var1 = arg1;
            var2 = var2[var1];
            if(!(var3 === var2)) { _fun0001_ip = 65; continue _fun0001 }
 42:
            var1 = global;
            var5 = var1.Promise;
            var4 = var5.resolve;
            var1 = {};
            var1 = var4.bind(var5)(var1);
            _fun0001_ip = 86; continue _fun0001;
 65:
            var4 = var2.bind(var3)();
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.default;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
 86:
            return var1;
        }
    };
    var13 = var7;
    var2 = new var13[var8](var12, var11);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot2 = var2;
    var2 = {};
    var7 = function setEmojiLocale(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.setParams;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['setEmojiLocale'] = var7;
    var4 = function getTermsForEmoji(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot2;
            var1 = var2.get;
            var3 = var1.bind(var2)();
            var1 = undefined;
            if(!(var1 === var3)) { _fun0002_ip = 28; continue _fun0002 }
 22:
            var1 = new Array(0);
            _fun0002_ip = 35; continue _fun0002;
 28:
            var2 = arg1;
            var1 = var3[var2];
 35:
            return var1;
        }
    };
    var2['getTermsForEmoji'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_terms/EmojiTerms.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();