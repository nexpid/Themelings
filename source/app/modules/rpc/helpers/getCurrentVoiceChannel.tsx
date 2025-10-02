// app/modules/rpc/helpers/getCurrentVoiceChannel.tsx
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
    var4 = 'modules/rpc/helpers/getCurrentVoiceChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getCurrentVoiceChannel() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot2;
            var4 = var5.getVoiceStateForSession;
            var6 = _closure1_slot0;
            var2 = var6.getId;
            var3 = var2.bind(var6)();
            var2 = var6.getSessionId;
            var2 = var2.bind(var6)();
            var2 = var4.bind(var5)(var3, var2);
            var3 = null;
            var4 = var3 == var2;
            var3 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.channelId;
case 2:
            var2 = _closure1_slot1;
            var1 = var2.getChannel;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();