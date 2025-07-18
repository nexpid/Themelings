// app/design/utils/native/mergeProps.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = function chainCallbacks(arg1) {
        var3 = 0;
        var2 = copyRestArgs(var3);
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var7 = 0;
                var12 = 0;
                var6 = copyRestArgs(var12);
                var5 = _closure2_slot0;
                var1 = var5.length;
                var2 = var7 < var1;
                var1 = undefined;
                var4 = 'function';
                var3 = 0;
                if(!var2) { _fun0001_ip = 86; continue _fun0001 }
 35:
                var8 = var5[var3];
                var2 = typeof var8;
                if(!(var4 === var2)) { _fun0001_ip = 74; continue _fun0001 }
 46:
                var2 = new Array(0);
                var12 = var2;
                var11 = var6;
                var10 = 0;
                var9 = arraySpread(var12, var11, var10);
                var12 = var8;
                var11 = var2;
                var10 = undefined;
                var2 = apply(var12, var11, var10);
 74:
                var3 = var3 + 1;
                var2 = var5.length;
                if(var3 < var2) { _fun0001_ip = 35; continue _fun0001 }
 86:
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
    var5 = native7;
    var1 = 0;
    var6 = var5[var1];
    var5 = native2;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/utils/native/mergeProps.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['chainCallbacks'] = var4;
    var4 = function mergeRefs(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = 0;
            var6 = 0;
            var2 = copyRestArgs(var6);
            var _closure2_slot0 = var2;
            var5 = var2.length;
            var4 = 1;
            if(!(var4 !== var5)) { _fun0002_ip = 33; continue _fun0002 }
 26:
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var7 = arg1;
                    var6 = _closure2_slot0;
                    var1 = var6.length;
                    var5 = 0;
                    var2 = var5 < var1;
                    var1 = undefined;
                    var4 = null;
                    var3 = 'function';
                    if(!var2) { _fun0003_ip = 72; continue _fun0003 }
 32:
                    var2 = var6[var5];
                    var8 = typeof var2;
                    if(!(var3 !== var8)) { _fun0003_ip = 55; continue _fun0003 }
 43:
                    if(!(var4 != var2)) { _fun0003_ip = 60; continue _fun0003 }
 47:
                    var2['current'] = var7;
                    _fun0003_ip = 60; continue _fun0003;
 55:
                    var2 = var2.bind(var1)(var7);
 60:
                    var5 = var5 + 1;
                    var2 = var6.length;
                    if(var5 < var2) { _fun0003_ip = 32; continue _fun0003 }
 72:
                    return var1;
                }
            };
            _fun0002_ip = 37; continue _fun0002;
 33:
            var1 = var2[var3];
 37:
            return var1;
        }
    };
    var3['mergeRefs'] = var4;
    var2 = function mergeProps(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(!var2) { _fun0004_ip = 293; continue _fun0004 }
 78:
            var26 = var17[var6];
            var24 = var26;
            var20 = var5;
            var19 = var4;
            var2 = var3;
            var5 = var20;
            var4 = var19;
            var3 = var2;
            for(var21 in var24)
 114:
            {
                var5 = var20;
                var4 = var19;
                var3 = var2;
 135:
                var29 = var21;
                var28 = var1[var29];
                var27 = var26[var29];
                var30 = typeof var28;
                if(!(var7 === var30)) { _fun0004_ip = 206; continue _fun0004 }
 153:
                var30 = typeof var27;
                if(!(var7 === var30)) { _fun0004_ip = 206; continue _fun0004 }
 160:
                var30 = var29[var18];
                if(!(var8 === var30)) { _fun0004_ip = 206; continue _fun0004 }
 168:
                var30 = var29[var16];
                if(!(var9 === var30)) { _fun0004_ip = 206; continue _fun0004 }
 176:
                var30 = var29.charCodeAt;
                var30 = var30.bind(var29)(var12);
                if(!(var30 >= var10)) { _fun0004_ip = 206; continue _fun0004 }
 191:
                var30 = var29.charCodeAt;
                var30 = var30.bind(var29)(var12);
                if(!(!(var30 <= var11))) { _fun0004_ip = 250; continue _fun0004 }
 206:
                if(!(var13 !== var29)) { _fun0004_ip = 222; continue _fun0004 }
 210:
                var30 = var28;
                if(!(var15 !== var27)) { _fun0004_ip = 220; continue _fun0004 }
 217:
                var30 = var27;
 220:
                _fun0004_ip = 232; continue _fun0004;
 222:
                var31 = var28.concat;
                var30 = var31.bind(var28)(var27);
 232:
                var1[var29] = var30;
                var20 = var29;
                var19 = var28;
                var2 = var27;
                _fun0004_ip = 114; continue _fun0004;
 250:
                var30 = _closure1_slot0;
                var30 = var30.bind(var15)(var28, var27);
                var1[var29] = var30;
                var20 = var29;
                var19 = var28;
                var2 = var27;
                _fun0004_ip = 114; continue _fun0004;
            }
 278:
            var6 = var6 + 1;
            var2 = var17.length;
            if(var6 < var2) { _fun0004_ip = 78; continue _fun0004 }
 293:
            return var1;
        }
    };
    var3['mergeProps'] = var2;
    return var1;
})();