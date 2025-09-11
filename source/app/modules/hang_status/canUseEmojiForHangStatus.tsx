// app/modules/hang_status/canUseEmojiForHangStatus.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/canUseEmojiForHangStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function canUseEmojiForHangStatus(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.id;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 110; continue _fun0001 }
 14:
            var4 = _closure1_slot2;
            var3 = var4.getCustomEmojiById;
            var2 = var2.id;
            var6 = var3.bind(var4)(var2);
            var1 = var1 != var6;
            if(!var1) { _fun0001_ip = 108; continue _fun0001 }
 44:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.isEmojiDisabled;
            var2 = {};
            var2['emoji'] = var6;
            var6 = arg2;
            var2['channel'] = var6;
            var5 = _closure1_slot3;
            var5 = var5.STATUS;
            var2['intention'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
 108:
            return var1;
 110:
            var1 = true;
            return var1;
        }
    };
    var3['canUseEmojiForHangStatus'] = var2;
    return var1;
})();