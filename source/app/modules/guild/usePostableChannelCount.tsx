// app/modules/guild/usePostableChannelCount.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild/usePostableChannelCount.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSendMessageChannelCount(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 3;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getChannels;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot4;
                    var1 = var2[var1];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0002_ip = 43; continue _fun0002 }
 39:
                    var1 = new Array(0);
 43:
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4, var1, var3);
            var3 = var4.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0001_ip = 106; continue _fun0001 }
 84:
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = var1.channel;
                var3 = _closure1_slot5;
                var2 = var3.can;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 4;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.combine;
                var1 = _closure1_slot6;
                var5 = var1.SEND_MESSAGES;
                var1 = var1.VIEW_CHANNEL;
                var1 = var6.bind(var7)(var5, var1);
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = var2.length;
 106:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();