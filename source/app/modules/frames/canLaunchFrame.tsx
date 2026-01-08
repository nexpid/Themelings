// app/modules/frames/canLaunchFrame.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _canLaunchFrame(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = null;
            var1 = var5 != var3;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var8 = undefined;
            var6 = var6.bind(var8)(var2);
            var2 = var6.isRealApplication;
            var6 = var2.bind(var6)(var3);
            var2 = false;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var3.flags;
            var5 = var5 != var3;
            var7 = 0;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var3;
case 6:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 3;
            var3 = var9[var5];
            var11 = var6.bind(var8)(var3);
            var10 = var11.hasFlag;
            var3 = _closure1_slot3;
            var3 = var3.EMBEDDED;
            var3 = var10.bind(var11)(var7, var3);
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.hasFlag;
            var4 = _closure1_slot3;
            var4 = var4.CONTEXTLESS_ACTIVITY;
            var4 = var5.bind(var6)(var7, var4);
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4;
case 8:
            var2 = var3;
case 4:
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = arg2;
            var2 = var3.enabled;
case 10:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationFlags;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/canLaunchFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canLaunchFrame(arg1) {
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 4;
        var1 = var3[var1];
        var3 = undefined;
        var5 = var2.bind(var3)(var1);
        var2 = var5.getContextlessFramesMobileExperiment;
        var1 = 'canLaunchFrame';
        var2 = var2.bind(var5)(var1);
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['canLaunchFrame'] = var4;
    var2 = function useCanLaunchFrame(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useContextlessFramesMobileExperiment;
        var3 = 'canLaunchFrame';
        var5 = var4.bind(var5)(var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCanLaunchFrame'] = var2;
    return var1;
})();