// app/modules/stickers/StickersSuggestionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = /(!|\.|;|,|-|—|–|\?|"|')/g;
    var _closure1_slot0 = var1;
    var1 = /(\n|\t|\s)/g;
    var _closure1_slot1 = var1;
    var4 = function removePunctuation(arg1) {
        var5 = arg1;
        var4 = var5.replace;
        var3 = _closure1_slot0;
        var2 = '';
        var4 = var4.bind(var5)(var3, var2);
        var3 = var4.replace;
        var2 = _closure1_slot1;
        var1 = ' ';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot2 = var4;
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stickers/StickersSuggestionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['removePunctuation'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var1 = var2.trim;
            var3 = var1.bind(var2)();
            var2 = var3.split;
            var1 = ' ';
            var1 = var2.bind(var3)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = new Array(0);
case 4:
            return var1;
        }
    };
    var3['getQueriesFromUserInput'] = var2;
    return var1;
})();