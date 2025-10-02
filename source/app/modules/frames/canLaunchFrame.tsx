// app/modules/frames/canLaunchFrame.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function canApplicationLaunchAsFrame(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var3 = var5[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var3 = var4.isRealApplication;
            var3 = var3.bind(var4)(var1);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
            return var3;
case 2:
            var1 = var1.flags;
            var3 = null;
            var3 = var3 != var1;
            var5 = 0;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var1;
case 4:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var1 = var7[var3];
            var9 = var4.bind(var6)(var1);
            var8 = var9.hasFlag;
            var1 = _closure1_slot3;
            var1 = var1.EMBEDDED;
            var1 = var8.bind(var9)(var5, var1);
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.hasFlag;
            var2 = _closure1_slot3;
            var2 = var2.CONTEXTLESS_ACTIVITY;
            var2 = var3.bind(var4)(var5, var2);
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2;
case 6:
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
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot4;
            var4 = undefined;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getContextlessFramesExperiment;
            var2 = 'canLaunchFrame';
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
case 8:
            return var1;
        }
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
        var4 = var5.useContextlessFramesExperiment;
        var3 = 'canLaunchFrame';
        var3 = var4.bind(var5)(var3);
        var5 = var3.enabled;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var5 = _closure1_slot4;
                var4 = _closure2_slot0;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var2 = _closure2_slot1;
case 12:
                var1 = var2;
case 10:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCanLaunchFrame'] = var2;
    return var1;
})();