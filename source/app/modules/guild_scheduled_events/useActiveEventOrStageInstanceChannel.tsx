// app/modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useActiveEventOrStageInstanceChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 1;
            var2 = var7[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.useFirstActiveEventChannel;
            var2 = var2.bind(var4)(var5);
            var6 = _closure1_slot1;
            var4 = 2;
            var4 = var7[var4];
            var4 = var6.bind(var1)(var4);
            var6 = var4.bind(var1)(var5);
            var5 = _closure1_slot3;
            var4 = var5.getChannel;
            var3 = 0;
            var6 = var6[var3];
            var3 = null;
            var7 = var3 == var6;
            if(var7) { _fun0001_ip = 89; continue _fun0001 }
 84:
            var1 = var6.id;
 89:
            var1 = var4.bind(var5)(var1);
            if(!(var3 != var2)) { _fun0001_ip = 101; continue _fun0001 }
 98:
            var1 = var2;
 101:
            return var1;
        }
    };
    var3['useActiveEventOrStageInstanceChannel'] = var2;
    return var1;
})();