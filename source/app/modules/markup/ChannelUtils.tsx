// app/modules/markup/ChannelUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.isGuildSelectableChannelType;
    var _closure1_slot0 = var7;
    var4 = var4.isGuildVocalChannelType;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/ChannelUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isChannelTypeMentionable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot0;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0001_ip = 29; continue _fun0001 }
 20:
            var2 = _closure1_slot1;
            var1 = var2.bind(var3)(var4);
 29:
            return var1;
        }
    };
    var3['isChannelTypeMentionable'] = var2;
    return var1;
})();