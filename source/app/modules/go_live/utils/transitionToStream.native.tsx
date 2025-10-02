// app/modules/go_live/utils/transitionToStream.native.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/utils/transitionToStream.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transitionToStream(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var2 = arg1;
            var2 = var2.channelId;
            var4 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 1;
            var2 = var5[var2];
            var3 = undefined;
            var7 = var6.bind(var3)(var2);
            var2 = var7.hideActionSheet;
            var2 = var2.bind(var7)();
            var2 = 2;
            var2 = var5[var2];
            var6 = var6.bind(var3)(var2);
            var2 = var6.popAll;
            var2 = var2.bind(var6)();
            var2 = _closure1_slot0;
            var1 = 3;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.openGuildVoiceModal;
            var1 = 'Go Live';
            var1 = var2.bind(var3)(var4, var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();