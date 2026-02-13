// app/utils/native/MetaQuestUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var4;
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
    var4 = 'utils/native/MetaQuestUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isMetaQuest() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 0;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var6 = 1;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = null;
            var4 = var3 == var4;
            var3 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getConstants;
            var2 = var2.bind(var4)();
            var3 = var2.deviceBrand;
case 4:
            var2 = 'oculus';
            var1 = var2 === var3;
case 2:
            return var1;
        }
    };
    var3['isMetaQuest'] = var4;
    var2 = function isQuestRelease() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot2;
            var3 = _closure1_slot3;
            var1 = 2;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.getConstants;
            var3 = var1.bind(var2)();
            var1 = null;
            var5 = var1 == var3;
            var2 = undefined;
            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var3.ReleaseChannel;
            var3 = var1 == var5;
            var2 = undefined;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var4 = var5.startsWith;
            var3 = 'quest';
            var2 = var4.bind(var5)(var3);
case 6:
            var1 = var1 != var2;
            if(!var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var3['isQuestRelease'] = var2;
    return var1;
})();