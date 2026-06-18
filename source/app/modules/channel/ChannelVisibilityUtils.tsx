// app/modules/channel/ChannelVisibilityUtils.tsx
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
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/ChannelVisibilityUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isChannelCurrentlyVisible(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot1;
            var4 = var5.getChannelId;
            var6 = _closure1_slot2;
            var1 = var6.getGuildId;
            var1 = var1.bind(var6)();
            var5 = var4.bind(var5)(var1);
            var1 = var5 === var3;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = var4.getCurrentSidebarChannelId;
            var2 = var2.bind(var4)(var5);
            var1 = var2 === var3;
case 2:
            return var1;
        }
    };
    var3['isChannelCurrentlyVisible'] = var2;
    return var1;
})();