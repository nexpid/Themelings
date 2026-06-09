// app/modules/device/MetaQuestUtils.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var5 = function isMetaQuest() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.isMetaQuest;
        var1 = var1.bind(var2)();
        return var1;
    };
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var2);
    var1 = undefined;
    var2 = var5.bind(var1)();
    var6 = 2;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/device/MetaQuestUtils.android.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isMetaQuest'] = var5;
    var4 = function isQuestRelease() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.getConstants;
            var3 = var1.bind(var2)();
            var1 = null;
            var5 = var1 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.ReleaseChannel;
            var3 = var1 == var5;
            var2 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = var5.startsWith;
            var3 = 'quest';
            var2 = var4.bind(var5)(var3);
case 2:
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = var2;
case 5:
            return var1;
        }
    };
    var3['isQuestRelease'] = var4;
    var3['isThumbstickScrollDevice'] = var2;
    return var1;
})();