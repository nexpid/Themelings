// app/modules/reactions/native/useEmojisForReactionRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/native/useEmojisForReactionRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useEmojisForReactionRow(arg1, arg2, arg3) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var2 = var6.getGuildId;
        var7 = var2.bind(var6)();
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 2;
        var2 = var8[var2];
        var4 = undefined;
        var5 = var5.bind(var4)(var2);
        var2 = var5.useFrequentlyUsedReactionEmojis;
        var7 = var2.bind(var5)(var7);
        var _closure2_slot1 = var7;
        var5 = _closure1_slot1;
        var2 = 3;
        var2 = var8[var2];
        var2 = var5.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var9 = var2.width;
        var2 = global;
        var8 = var2.Math;
        var5 = var8.min;
        var4 = arg2;
        var8 = var5.bind(var8)(var9, var4);
        var5 = var2.Math;
        var4 = var5.floor;
        var2 = arg3;
        var2 = var8 / var2;
        var2 = var4.bind(var5)(var2);
        var _closure2_slot2 = var2;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(3);
        var3[0] = var7;
        var3[1] = var6;
        var3[2] = var2;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isEmojiFilteredOrLocked;
                    var1 = {};
                    var5 = arg1;
                    var1['emoji'] = var5;
                    var5 = _closure2_slot0;
                    var1['channel'] = var5;
                    var4 = _closure1_slot4;
                    var4 = var4.REACTION;
                    var1['intention'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var3 = var1.length;
                var2 = _closure2_slot2;
                var4 = null;
                if(!(var3 < var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var1.push;
                var2 = var2.bind(var1)(var4);
                var3 = var1.length;
                var2 = _closure2_slot2;
                if(var3 < var2) { _fun0001_ip = 3; continue _fun0001 }
case 2:
                return var1;
            }
        };
        var4 = var4.bind(var5)(var1, var3);
        var3 = var4.slice;
        var1 = 1;
        var2 = var2 - var1;
        var1 = 0;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useEmojisForReactionRow'] = var2;
    return var1;
})();