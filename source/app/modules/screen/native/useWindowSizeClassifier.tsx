// app/modules/screen/native/useWindowSizeClassifier.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var1 = function calculateFromWidth(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = 360;
            if(!(!(var2 <= var1))) { _fun0001_ip = 78; continue _fun0001 }
 13:
            var1 = 600;
            if(!(!(var2 <= var1))) { _fun0001_ip = 63; continue _fun0001 }
 23:
            var1 = 840;
            if(!(!(var2 <= var1))) { _fun0001_ip = 48; continue _fun0001 }
 33:
            var1 = _closure1_slot3;
            var1 = var1.XLARGE;
            _fun0001_ip = 61; continue _fun0001;
 48:
            var2 = _closure1_slot3;
            var1 = var2.LARGE;
 61:
            _fun0001_ip = 76; continue _fun0001;
 63:
            var2 = _closure1_slot3;
            var1 = var2.NORMAL;
 76:
            _fun0001_ip = 91; continue _fun0001;
 78:
            var2 = _closure1_slot3;
            var1 = var2.SMALL;
 91:
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