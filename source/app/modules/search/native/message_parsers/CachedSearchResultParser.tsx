// app/modules/search/native/message_parsers/CachedSearchResultParser.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native3;
    var3 = native6;
    var5 = native7;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var2);
    var2 = 1;
    var2 = var5[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = function CachedSearchResultParser() {
        var3 = this;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = undefined;
        var4 = var5.bind(var1)(var3, var4);
        var4 = global;
        var4 = var4.Map;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var8 = var5;
        var4 = new var8[var4](var7);
        var4 = var4 instanceof Object ? var4 : var5;
        var3['resultsCache'] = var4;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = arg1;
                var1 = _closure2_slot0;
                var5 = var1.resultsCache;
                var4 = var5.get;
                var1 = var3.id;
                var1 = var4.bind(var5)(var1);
                var4 = null;
                if(!(var4 == var1)) { _fun0001_ip = 76; continue _fun0001 }
 37:
                var4 = _closure2_slot0;
                var2 = var4.getSearchResults;
                var2 = var2.bind(var4)(var3);
                var5 = var4.resultsCache;
                var4 = var5.set;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3, var2);
                return var2;
 76:
                return var1;
            }
        };
        var3['parse'] = var2;
        return var1;
    };
    var _closure1_slot1 = var2;
    var2 = var4.bind(var1)(var2);
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/message_parsers/CachedSearchResultParser.tsx';
    var4 = var5.bind(var6)(var4);
    var3['CachedSearchResultParser'] = var2;
    return var1;
})();