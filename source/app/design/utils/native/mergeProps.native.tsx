// app/design/utils/native/mergeProps.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function chainCallbacks(arg1) {
        var3 = 0;
        var2 = copyRestArgs(var3);
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var7 = 0;
                var12 = 0;
                var6 = copyRestArgs(var12);
                var5 = _closure2_slot0;
                var1 = var5.length;
                var2 = var7 < var1;
                var1 = undefined;
                var4 = 'function';
                var3 = 0;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var8 = var5[var3];
                var2 = typeof var8;
                if(!(var4 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = new Array(0);
                var12 = var2;
                var11 = var6;
                var10 = 0;
                var9 = arraySpread(var12, var11, var10);
                var12 = var8;
                var11 = var2;
                var10 = undefined;
                var2 = apply(var12, var11, var10);
case 4:
                var3 = var3 + 1;
                var2 = var5.length;
                if(var3 < var2) { _fun0001_ip = 3; continue _fun0001 }
case 2:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot0 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/utils/native/mergeProps.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['chainCallbacks'] = var4;
    var4 = function mergeRefs(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = 0;
            var6 = 0;
            var2 = copyRestArgs(var6);
            var _closure2_slot0 = var2;
            var5 = var2.length;
            var4 = 1;
            if(!(var4 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = arg1;
                    var6 = _closure2_slot0;
                    var1 = var6.length;
                    var5 = 0;
                    var2 = var5 < var1;
                    var1 = undefined;
                    var4 = null;
                    var3 = 'function';
                    if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = var6[var5];
                    var8 = typeof var2;
                    if(!(var3 !== var8)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    if(!(var4 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2['current'] = var7;
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var2 = var2.bind(var1)(var7);
case 12:
                    var5 = var5 + 1;
                    var2 = var6.length;
                    if(var5 < var2) { _fun0003_ip = 9; continue _fun0003 }
case 8:
                    return var1;
                }
            };
            _fun0002_ip = 14; continue _fun0002;
case 6:
            var1 = var2[var3];
case 14:
            return var1;
        }
    };
    var3['mergeRefs'] = var4;
    var2 = function mergeProps(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var18 = 0;
            var33 = 0;
            var17 = copyRestArgs(var33);
            var1 = {};
            var32 = var17[var18];
            var33 = var1;
            var2 = copyDataProperties(var33, var32);
            var2 = var17.length;
            var16 = 1;
            var2 = var16 < var2;
            var15 = undefined;
            var13 = 'style';
            var12 = 2;
            var11 = 90;
            var10 = 65;
            var9 = 'n';
            var8 = 'o';
            var7 = 'function';
            var6 = var16;
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            if(!var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var26 = var17[var6];
            var24 = var26;
            var20 = var5;
            var19 = var4;
            var2 = var3;
            var5 = var20;
            var4 = var19;
            var3 = var2;
            for(var21 in var24)
case 17:
            {
                var5 = var20;
                var4 = var19;
                var3 = var2;
case 18:
                var29 = var21;
                var28 = var1[var29];
                var27 = var26[var29];
                var30 = typeof var28;
                if(!(var7 === var30)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var30 = typeof var27;
                if(!(var7 === var30)) { _fun0004_ip = 19; continue _fun0004 }
case 21:
                var30 = var29[var18];
                if(!(var8 === var30)) { _fun0004_ip = 19; continue _fun0004 }
case 22:
                var30 = var29[var16];
                if(!(var9 === var30)) { _fun0004_ip = 19; continue _fun0004 }
case 23:
                var30 = var29.charCodeAt;
                var30 = var30.bind(var29)(var12);
                if(!(var30 >= var10)) { _fun0004_ip = 19; continue _fun0004 }
case 24:
                var30 = var29.charCodeAt;
                var30 = var30.bind(var29)(var12);
                if(!(!(var30 <= var11))) { _fun0004_ip = 25; continue _fun0004 }
case 19:
                if(!(var13 !== var29)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var30 = var28;
                if(!(var15 !== var27)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var30 = var27;
case 28:
                _fun0004_ip = 30; continue _fun0004;
case 26:
                var31 = var28.concat;
                var30 = var31.bind(var28)(var27);
case 30:
                var1[var29] = var30;
                var20 = var29;
                var19 = var28;
                var2 = var27;
                _fun0004_ip = 17; continue _fun0004;
case 25:
                var30 = _closure1_slot0;
                var30 = var30.bind(var15)(var28, var27);
                var1[var29] = var30;
                var20 = var29;
                var19 = var28;
                var2 = var27;
                _fun0004_ip = 17; continue _fun0004;
            }
case 31:
            var6 = var6 + 1;
            var2 = var17.length;
            if(var6 < var2) { _fun0004_ip = 16; continue _fun0004 }
case 15:
            return var1;
        }
    };
    var3['mergeProps'] = var2;
    return var1;
})();