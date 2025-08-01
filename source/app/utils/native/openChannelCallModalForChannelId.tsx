// app/utils/native/openChannelCallModalForChannelId.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/openChannelCallModalForChannelId.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openChannelCallModalForChannelId(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var5 = _closure1_slot2;
            var4 = var5.getChannel;
            var3 = arg1;
            var3 = var4.bind(var5)(var3);
            var4 = null;
            if(!(var4 != var3)) { _fun0001_ip = 120; continue _fun0001 }
 29:
            if(!var2) { _fun0001_ip = 42; continue _fun0001 }
 32:
            var4 = var3.isGuildStageVoice;
            var2 = var4.bind(var3)();
 42:
            if(!var2) { _fun0001_ip = 84; continue _fun0001 }
 45:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 1;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.connectToStage;
            var5 = var4.bind(var5)(var3);
            var4 = false;
            var2 = var4 === var5;
 84:
            if(var2) { _fun0001_ip = 120; continue _fun0001 }
 87:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.openChannelCallModal;
            var1 = var1.bind(var2)(var3);
 120:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();