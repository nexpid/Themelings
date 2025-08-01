// app/modules/emoji_picker/hooks/useEmojiHotrail.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var2 = function getEmojiHotrail(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.topEmojis;
            var4 = var1.newlyAddedEmojis;
            var2 = var1.rowSize;
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 34; continue _fun0001 }
 27:
            var2 = _closure1_slot1;
 34:
            var3 = var5.slice;
            var1 = var4.length;
            var2 = var2 - var1;
            var1 = 0;
            var3 = var3.bind(var5)(var1, var2);
            var1 = {};
            var1['visibleTopEmojis'] = var3;
            var1['visibleNewlyAddedEmojis'] = var4;
            var2 = var3.concat;
            var2 = var2.bind(var3)(var4);
            var1['allEmojis'] = var2;
            return var1;
        }
    };
    var _closure1_slot2 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.EMOJI_ROW_SIZE;
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/emoji_picker/hooks/useEmojiHotrail.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useEmojiHotrail(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['getEmojiHotrail'] = var2;
    return var1;
})();