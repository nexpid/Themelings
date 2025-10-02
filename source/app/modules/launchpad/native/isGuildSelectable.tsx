// app/modules/launchpad/native/isGuildSelectable.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/isGuildSelectable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isGuildSelectable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var2 = _closure1_slot3;
            var1 = var2.isMuted;
            var1 = var1.bind(var2)(var9);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot2;
            var2 = var3.hasUnread;
            var2 = var2.bind(var3)(var9);
            var3 = !var2;
            var2 = !var3;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = global;
            var7 = var3.Object;
            var6 = var7.keys;
            var8 = _closure1_slot0;
            var3 = var8.getStageInstancesByGuild;
            var3 = var3.bind(var8)(var9);
            var3 = var6.bind(var7)(var3);
            var6 = var3.length;
            var3 = 0;
            var3 = var6 > var3;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot1;
            var5 = var6.getAllApplicationStreams;
            var6 = var5.bind(var6)();
            var5 = var6.some;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.guildId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var4 = !var4;
            var3 = !var4;
case 6:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();