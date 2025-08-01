// app/modules/emojis/top_emojis/TopEmojisUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emojis/top_emojis/TopEmojisUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function maybeFetchTopEmojisByGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 135; continue _fun0001 }
 12:
            var5 = _closure1_slot2;
            var4 = var5.getCurrentUser;
            var4 = var4.bind(var5)();
            if(!(var2 != var4)) { _fun0001_ip = 135; continue _fun0001 }
 32:
            var5 = _closure1_slot3;
            var4 = var5.getTopEmojisMetadata;
            var4 = var4.bind(var5)(var3);
            if(!(var2 != var4)) { _fun0001_ip = 84; continue _fun0001 }
 53:
            var4 = var4.topEmojisTTL;
            if(!(var2 != var4)) { _fun0001_ip = 139; continue _fun0001 }
 63:
            var2 = global;
            var5 = var2.Date;
            var2 = var5.now;
            var2 = var2.bind(var5)();
            if(!(!(var2 < var4))) { _fun0001_ip = 139; continue _fun0001 }
 84:
            var4 = _closure1_slot4;
            var2 = var4.getIsFetching;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0001_ip = 135; continue _fun0001 }
 102:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.fetchTopEmojis;
            var1 = var1.bind(var2)(var3);
 135:
            var1 = undefined;
            return var1;
 139:
            var1 = undefined;
            return var1;
        }
    };
    var3['maybeFetchTopEmojisByGuild'] = var2;
    return var1;
})();