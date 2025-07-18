// app/modules/search_v2/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/search_v2/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getAdjustedPlaceholderCount(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.numColumns;
            var2 = var1.numResults;
            var3 = var1.placeholderCount;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0001_ip = 39; continue _fun0001 }
 27:
            var2 = var2 % var4;
            var2 = var4 - var2;
            var1 = var3 + var2;
 39:
            return var1;
        }
    };
    var3['getAdjustedPlaceholderCount'] = var2;
    return var1;
})();