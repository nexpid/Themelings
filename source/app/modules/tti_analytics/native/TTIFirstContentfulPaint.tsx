// app/modules/tti_analytics/native/TTIFirstContentfulPaint.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/tti_analytics/native/TTIFirstContentfulPaint.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TTIFirstContentfulPaint(arg1) {
        var1 = arg1;
        var6 = var1.checkFocusedScreen;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.getRootNavigationRef;
                var6 = var3.bind(var5)();
                var5 = var4 == var6;
                var3 = undefined;
                if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = var6.getCurrentRoute;
                var3 = var5.bind(var6)();
case 4:
                if(!(var4 != var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = var3.name;
                var2 = _closure2_slot0;
                if(!(var3 === var2)) { _fun0001_ip = 8; continue _fun0001 }
case 2:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 3;
                var4 = var5[var2];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var7 = var4.firstContentfulPaint;
                var6 = var7.record;
                var4 = arg1;
                var4 = var4.nativeEvent;
                var4 = var4.timestamp;
                var4 = var6.bind(var7)(var4);
                var4 = _closure1_slot0;
                var3 = 4;
                var3 = var5[var3];
                var4 = var4.bind(var2)(var3);
                var3 = var4.notifyAboutTTI;
                var3 = var3.bind(var4)();
                return var2;
case 8:
                return var1;
case 6:
                return var1;
            }
        };
        var5 = var4.bind(var5)(var2, var3);
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.TTIMeasurementView;
        var1 = {};
        var1['onMeasurement'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['TTIFirstContentfulPaint'] = var2;
    return var1;
})();