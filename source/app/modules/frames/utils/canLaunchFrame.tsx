// app/modules/frames/utils/canLaunchFrame.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationFlags;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/utils/canLaunchFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function canLaunchFrame(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var4[var2];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.isRealApplication;
            var2 = var2.bind(var3)(var5);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 2;
            var2 = var7[var3];
            var9 = var4.bind(var6)(var2);
            var8 = var9.hasApplicationFlag;
            var2 = _closure1_slot2;
            var1 = var2.EMBEDDED;
            var1 = var8.bind(var9)(var5, var1);
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.hasApplicationFlag;
            var2 = var2.CONTEXTLESS_ACTIVITY;
            var2 = var3.bind(var4)(var5, var2);
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = var2;
case 5:
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var3['canLaunchFrame'] = var2;
    return var1;
})();