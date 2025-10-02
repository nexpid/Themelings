// app/modules/screen/native/useWindowSizeClassifier.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var1 = function calculateFromWidth(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 360;
            if(!(!(var2 <= var1))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 600;
            if(!(!(var2 <= var1))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 840;
            if(!(!(var2 <= var1))) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot3;
            var1 = var1.XLARGE;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var2 = _closure1_slot3;
            var1 = var2.LARGE;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var2 = _closure1_slot3;
            var1 = var2.NORMAL;
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var2 = _closure1_slot3;
            var1 = var2.SMALL;
case 10:
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
    var4 = {};
    var7 = 0;
    var4['SMALL'] = var7;
    var1 = 'SMALL';
    var4[var7] = var1;
    var1 = 1;
    var4['NORMAL'] = var1;
    var7 = 'NORMAL';
    var4[var1] = var7;
    var8 = 2;
    var4['LARGE'] = var8;
    var7 = 'LARGE';
    var4[var8] = var7;
    var8 = 3;
    var4['XLARGE'] = var8;
    var7 = 'XLARGE';
    var4[var8] = var7;
    var _closure1_slot3 = var4;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/screen/native/useWindowSizeClassifier.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useWindowSizeClassifier() {
        var3 = _closure1_slot4;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 0;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var1.bind(var2)();
        var1 = var1.width;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['default'] = var5;
    var3['WindowSizeClassifier'] = var4;
    var2 = function getWindowSizeClassifier() {
        var3 = _closure1_slot4;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 0;
        var1 = var2[var1];
        var2 = undefined;
        var4 = var4.bind(var2)(var1);
        var1 = var4.getAppContainerDimensions;
        var1 = var1.bind(var4)();
        var1 = var1.width;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['getWindowSizeClassifier'] = var2;
    return var1;
})();