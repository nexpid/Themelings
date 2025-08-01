// app/modules/private_channel_creation/maybeConvertPrivateChannel.tsx
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
    var4 = 'modules/private_channel_creation/maybeConvertPrivateChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function maybeConvertPrivateChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var1 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(var4 === var1)) { _fun0001_ip = 100; continue _fun0001 }
 38:
            var2 = _closure1_slot3;
            var1 = var2.getChannel;
            var2 = var1.bind(var2)(var4);
            var1 = null;
            var4 = var1 == var2;
            if(var4) { _fun0001_ip = 98; continue _fun0001 }
 61:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.ensurePrivateChannel;
            var2 = var2.recipients;
            var1 = var3.bind(var4)(var2);
 98:
            return var1;
 100:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();