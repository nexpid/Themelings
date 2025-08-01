// app/modules/auth/native/components/utils/usePasswordScore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var8 = 2;
    var5 = var7[var8];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot4 = var4;
    var4 = {};
    var4['WEAK'] = var8;
    var5 = 'WEAK';
    var4[var8] = var5;
    var8 = 3;
    var4['MEDIUM'] = var8;
    var5 = 'MEDIUM';
    var4[var8] = var5;
    var8 = 4;
    var4['STRONG'] = var8;
    var5 = 'STRONG';
    var4[var8] = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/auth/native/components/utils/usePasswordScore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PasswordScore'] = var4;
    var2 = function usePasswordScore(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot4;
        var2 = var6.useState;
        var5 = null;
        var2 = var2.bind(var6)(var5);
        var11 = _closure1_slot3;
        var10 = undefined;
        var9 = 2;
        var4 = var11.bind(var10)(var2, var9);
        var2 = 0;
        var3 = var4[var2];
        var8 = 1;
        var4 = var4[var8];
        var _closure2_slot1 = var4;
        var4 = var6.useState;
        var4 = var4.bind(var6)(var5);
        var4 = var11.bind(var10)(var4, var9);
        var2 = var4[var2];
        var4 = var4[var8];
        var _closure2_slot2 = var4;
        var4 = var6.useRef;
        var4 = var4.bind(var6)(var5);
        var _closure2_slot3 = var4;
        var8 = var6.useEffect;
        var5 = function() {
            var3 = _closure2_slot3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var5.bind(var4)(var2);
            var5 = var6.throttle;
            var2 = function() {
                var4 = _closure1_slot2;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                            StartGenerator();
                            var3 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0001_ip = 155; continue _fun0001 }
 13:
                            var2 = var3;
                            var4 = null;
                            if(!(var4 != var3)) { _fun0001_ip = 150; continue _fun0001 }
 25:
                            var3 = var2;
                            var5 = var3.length;
                            var3 = 0;
                            if(!(var5 > var3)) { _fun0001_ip = 150; continue _fun0001 }
 39: // try_start_0
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var3 = 4;
                            var3 = var6[var3];
                            var6 = undefined;
                            var5 = var5.bind(var6)(var3);
                            var3 = var5.scorePassword;
                            var2 = var3.bind(var5)(var2);
                            SaveGenerator(address=79);
 77:
                            return var2;
 79:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0001_ip = 122; continue _fun0001 }
 85:
                            var7 = _closure2_slot1;
                            var5 = var2.password_strength;
                            var5 = var7.bind(var6)(var5);
                            var5 = _closure2_slot2;
                            var3 = var2.valid;
                            var3 = var5.bind(var6)(var3);
 120: // try_end0
                            _fun0001_ip = 150; continue _fun0001;
 122:
                            return var2;
 125: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var5 = _closure2_slot1;
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var2 = _closure2_slot2;
                            var2 = var2.bind(var3)(var4);
 150:
                            var2 = undefined;
                            return var2;
 155:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure4_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure4_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var4 = var2.bind(var4)();
            var2 = 250;
            var2 = var5.bind(var6)(var4, var2);
            var3['current'] = var2;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot3;
                    var5 = var1.current;
                    var4 = null;
                    var6 = var4 == var5;
                    var1 = undefined;
                    var3 = undefined;
                    if(var6) { _fun0002_ip = 31; continue _fun0002 }
 25:
                    var3 = var5.cancel;
 31:
                    if(!(var4 != var3)) { _fun0002_ip = 54; continue _fun0002 }
 35:
                    var2 = _closure2_slot3;
                    var3 = var2.current;
                    var2 = var3.cancel;
                    var2 = var2.bind(var3)();
 54:
                    return var1;
                }
            };
            return var1;
        };
        var4 = new Array(0);
        var4 = var8.bind(var6)(var5, var4);
        var5 = var6.useEffect;
        var4 = new Array(1);
        var4[0] = var7;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure2_slot3;
                var3 = var2.current;
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0003_ip = 36; continue _fun0003 }
 21:
                var3 = _closure2_slot0;
                var4 = var3.length;
                var3 = 0;
                var2 = var4 > var3;
 36:
                if(!var2) { _fun0003_ip = 57; continue _fun0003 }
 39:
                var3 = _closure2_slot3;
                var2 = var3.current;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
 57:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = {};
        var1['passwordScore'] = var3;
        var1['passwordValid'] = var2;
        return var1;
    };
    var3['usePasswordScore'] = var2;
    return var1;
})();