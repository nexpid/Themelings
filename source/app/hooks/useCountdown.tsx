// app/hooks/useCountdown.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useCallback;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'hooks/useCountdown.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCountdown(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var12 = arg1;
            var6 = arguments[1];
            var10 = arguments[2];
            var7 = arguments[3];
            var _closure2_slot0 = var12;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 30; continue _fun0001 }
 24:
            var6 = 1000;
 30:
            var _closure2_slot1 = var10;
            if(!(var7 === var5)) { _fun0001_ip = 40; continue _fun0001 }
 38:
            var7 = false;
 40:
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var5;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 1;
            var1 = var8[var1];
            var11 = var9.bind(var5)(var1);
            var4 = var11.diffAsUnits;
            var1 = global;
            var13 = var1.Date;
            var1 = var13.now;
            var1 = var1.bind(var13)();
            var1 = var4.bind(var11)(var1, var12);
            var4 = 2;
            var4 = var8[var4];
            var9 = var9.bind(var5)(var4);
            var4 = var9.useForceUpdate;
            var11 = var4.bind(var9)();
            _closure2_slot3 = var11;
            var9 = _closure1_slot3;
            var4 = new Array(4);
            var4[0] = var12;
            var4[1] = var7;
            var4[2] = var11;
            var4[3] = var10;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.diffAsUnits;
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var4 = var2.bind(var3)();
                    var3 = _closure2_slot0;
                    var4 = var5.bind(var6)(var4, var3);
                    var3 = var4.days;
                    var5 = 0;
                    var3 = var5 === var3;
                    if(!var3) { _fun0002_ip = 86; continue _fun0002 }
 76:
                    var6 = var4.hours;
                    var3 = var5 === var6;
 86:
                    if(!var3) { _fun0002_ip = 99; continue _fun0002 }
 89:
                    var6 = var4.minutes;
                    var3 = var5 === var6;
 99:
                    if(!var3) { _fun0002_ip = 112; continue _fun0002 }
 102:
                    var4 = var4.seconds;
                    var3 = var5 === var4;
 112:
                    if(var3) { _fun0002_ip = 119; continue _fun0002 }
 115:
                    var3 = _closure2_slot2;
 119:
                    if(var3) { _fun0002_ip = 148; continue _fun0002 }
 122:
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)();
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 148; continue _fun0002 }
 140:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
 148:
                    return var1;
                }
            };
            var4 = var9.bind(var5)(var3, var4);
            var3 = _closure1_slot1;
            var2 = 3;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = null;
            if(var7) { _fun0001_ip = 185; continue _fun0001 }
 182:
            var2 = var6;
 185:
            var2 = var3.bind(var5)(var4, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();