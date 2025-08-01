// app/modules/channel/canJoinVoiceChannel.tsx
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
    var4 = var4.isPrivate;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BasicPermissions;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/canJoinVoiceChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function canJoinVoiceChannel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var6 = _closure1_slot0;
            var3 = var5.type;
            var1 = undefined;
            var1 = var6.bind(var1)(var3);
            if(var1) { _fun0001_ip = 60; continue _fun0001 }
 28:
            var3 = var4.canBasicChannel;
            var2 = _closure1_slot1;
            var6 = var2.CONNECT;
            var2 = var2.VIEW_CHANNEL;
            var2 = var6 | var2;
            var1 = var3.bind(var4)(var2, var5);
 60:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();