// app/modules/activities/utils/tryLaunchAsFrame.tsx
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
    var4 = 'modules/activities/utils/tryLaunchAsFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function tryLaunchAsFrame(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.applicationId;
            var3 = _closure1_slot3;
            var1 = var3.getApplication;
            var6 = var1.bind(var3)(var5);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var7.bind(var1)(var4);
            var1 = var4.canLaunchFrame;
            var1 = var1.bind(var4)(var6);
            var3 = !var1;
case 2:
            var1 = !var3;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.launchFrame;
            var2 = {};
            var2['applicationId'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 4:
            return var1;
        }
    };
    var3['tryLaunchAsFrame'] = var2;
    return var1;
})();