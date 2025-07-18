// app/modules/pomelo/useUsernameLiveCheck.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/useUsernameLiveCheck.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var9 = arguments[1];
            var10 = arguments[2];
            var2 = arguments[3];
            var _closure2_slot0 = var7;
            var11 = undefined;
            if(!(var9 === var11)) { _fun0001_ip = 26; continue _fun0001 }
 24:
            var9 = true;
 26:
            var _closure2_slot1 = var9;
            if(!(var10 === var11)) { _fun0001_ip = 36; continue _fun0001 }
 34:
            var10 = false;
 36:
            var _closure2_slot2 = var10;
            if(!(var2 === var11)) { _fun0001_ip = 46; continue _fun0001 }
 44:
            var2 = false;
 46:
            var _closure2_slot3 = var2;
            var _closure2_slot4 = var11;
            var _closure2_slot5 = var11;
            var _closure2_slot6 = var11;
            var _closure2_slot7 = var11;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 2;
            var4 = var12[var8];
            var16 = var6.bind(var11)(var4);
            var15 = var16.useStateFromStores;
            var4 = _closure1_slot4;
            var14 = new Array(1);
            var14[0] = var4;
            var13 = new Array(1);
            var13[0] = var7;
            var5 = function() {
                var3 = _closure1_slot4;
                var2 = var3.validate;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var15.bind(var16)(var14, var5, var13);
            _closure2_slot4 = var5;
            var8 = var12[var8];
            var14 = var6.bind(var11)(var8);
            var13 = var14.useStateFromStores;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isRateLimited;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var13.bind(var14)(var8, var4);
            _closure2_slot5 = var8;
            var4 = 3;
            var4 = var12[var4];
            var6 = var6.bind(var11)(var4);
            var4 = var6.usePomeloDebounceDelay;
            var11 = var4.bind(var6)();
            _closure2_slot6 = var11;
            var4 = _closure1_slot3;
            var6 = var4.useMemo;
            var3 = new Array(3);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.debounce;
                var2 = _closure2_slot6;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.attemptPomelo;
                        var2 = _closure2_slot2;
                        var4 = 'modal';
                        if(!var2) { _fun0002_ip = 49; continue _fun0002 }
 45:
                        var4 = 'registration';
 49:
                        var8 = _closure2_slot2;
                        var7 = _closure2_slot3;
                        var10 = arg1;
                        var11 = var6;
                        var9 = var4;
                        var1 = var11[var5](var10, var9, var8, var7, var6);
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = var6.bind(var4)(var2, var3);
            _closure2_slot7 = var2;
            var6 = var4.useEffect;
            var3 = new Array(5);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var5;
            var3[3] = var7;
            var3[4] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0003_ip = 17; continue _fun0003 }
 10:
                    var3 = _closure2_slot5;
                    var2 = !var3;
 17:
                    if(!var2) { _fun0003_ip = 30; continue _fun0003 }
 20:
                    var4 = _closure2_slot4;
                    var3 = null;
                    var2 = var3 == var4;
 30:
                    if(!var2) { _fun0003_ip = 45; continue _fun0003 }
 33:
                    var4 = _closure2_slot0;
                    var3 = '';
                    var2 = var3 !== var4;
 45:
                    if(!var2) { _fun0003_ip = 63; continue _fun0003 }
 48:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var4)(var2, var3);
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0004_ip = 58; continue _fun0004 }
 20:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 6;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.formatUsernameLiveCheckValidation;
                    var2 = _closure2_slot4;
                    var1 = var3.bind(var4)(var2);
 58:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useUsernameLiveCheck'] = var2;
    return var1;
})();