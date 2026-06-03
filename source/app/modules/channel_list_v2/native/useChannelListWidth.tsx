// app/modules/channel_list_v2/native/useChannelListWidth.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 5;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/useChannelListWidth.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelListWidth() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 0;
            var3 = var8[var2];
            var6 = undefined;
            var4 = var7.bind(var6)(var3);
            var3 = var4.useDrawerWidth;
            var5 = var3.bind(var4)();
            var10 = _closure1_slot1;
            var1 = 1;
            var1 = var8[var1];
            var1 = var10.bind(var6)(var1);
            var1 = var1.bind(var6)();
            var4 = var1.isChatBesideChannelList;
            var1 = 2;
            var1 = var8[var1];
            var9 = var7.bind(var6)(var1);
            var3 = var9.useToken;
            var1 = 3;
            var1 = var8[var1];
            var1 = var10.bind(var6)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHANNEL_DRAWER_SPACING;
            var3 = var3.bind(var9)(var1);
            var1 = 4;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.DM_WIDTH;
            var1 = var5 - var1;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3;
case 2:
            var1 = var1 - var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();