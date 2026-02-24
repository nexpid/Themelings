// app/modules/device/MetaQuestUtils.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 2;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/device/MetaQuestUtils.android.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isMetaQuest() {
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
    var3['isMetaQuest'] = var4;
    var2 = function isQuestRelease() {
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
    var3['isQuestRelease'] = var2;
    return var1;
})();