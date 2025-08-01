// app/modules/threads/native/navigateToThreadCreation.tsx
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
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/navigateToThreadCreation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function navigateToThreadCreation(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 0;
            var4 = var6[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var5 = var7.openThreadCreationForMobile;
            var4 = arg2;
            var4 = var5.bind(var7)(var2, var1, var4);
            var5 = _closure1_slot0;
            var4 = 1;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var6 = var7.navigateToCreateThread;
            var5 = var2.guild_id;
            var4 = var2.id;
            var4 = var6.bind(var7)(var5, var4);
            if(var4) { _fun0001_ip = 120; continue _fun0001 }
 84:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.transitionToChannel;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
 120:
            return var1;
        }
    };
    var3['navigateToThreadCreation'] = var2;
    return var1;
})();