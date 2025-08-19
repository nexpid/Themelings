// app/modules/channel_list_v2/native/useChannelListWidth.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHANNEL_DRAWER_SPACING;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/useChannelListWidth.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useChannelListWidth() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 1;
            var1 = var8[var1];
            var5 = undefined;
            var2 = var7.bind(var5)(var1);
            var1 = var2.useDrawerWidth;
            var2 = var1.bind(var2)();
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var8[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var6 = var1.isChatBesideChannelList;
            var1 = 4;
            var1 = var8[var1];
            var9 = var7.bind(var5)(var1);
            var4 = var9.useYouBarEnabled;
            var1 = 'usechannellistwidth';
            var4 = var4.bind(var9)(var1);
            var1 = 3;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.DM_WIDTH;
            var2 = var2 - var1;
            var1 = 0;
            if(!var6) { _fun0001_ip = 126; continue _fun0001 }
 117:
            var1 = 0;
            if(var4) { _fun0001_ip = 126; continue _fun0001 }
 122:
            var1 = _closure1_slot3;
 126:
            var1 = var2 - var1;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getChannelListWidth() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 1;
            var1 = var7[var1];
            var5 = undefined;
            var2 = var6.bind(var5)(var1);
            var1 = var2.getDrawerWidth;
            var2 = var1.bind(var2)();
            var1 = 2;
            var1 = var7[var1];
            var4 = var6.bind(var5)(var1);
            var1 = var4.getChatLayout;
            var1 = var1.bind(var4)();
            var4 = var1.isChatBesideChannelList;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.DM_WIDTH;
            var2 = var2 - var1;
            var1 = 0;
            if(!var4) { _fun0002_ip = 94; continue _fun0002 }
 90:
            var1 = _closure1_slot3;
 94:
            var1 = var2 - var1;
            return var1;
        }
    };
    var3['getChannelListWidth'] = var2;
    return var1;
})();