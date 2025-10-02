// app/modules/teams/useUserTeams.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var6 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot4 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/teams/useUserTeams.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var8 = var2.refreshOnDepChange;
            _closure2_slot0 = var8;
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var2 = new Array(0);
            var2 = var4.bind(var7)(var2);
            var11 = _closure1_slot3;
            var10 = 2;
            var2 = var11.bind(var5)(var2, var10);
            var3 = 0;
            var4 = var2[var3];
            var9 = 1;
            var2 = var2[var9];
            _closure2_slot1 = var2;
            var2 = var7.useState;
            var6 = true;
            var2 = var2.bind(var7)(var6);
            var2 = var11.bind(var5)(var2, var10);
            var3 = var2[var3];
            var2 = var2[var9];
            _closure2_slot2 = var2;
            var2 = function() {
                var4 = _closure1_slot2;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var4 = _closure2_slot2;
                            var2 = undefined;
                            var6 = true;
                            var4 = var4.bind(var2)(var6);
case 6: // try_start_0
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var4 = 3;
                            var4 = var7[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.fetchTeams;
                            var4 = var4.bind(var5)(var6);
                            SaveGenerator(address=61);
case 7:
                            return var4;
case 8:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                            var6 = _closure2_slot1;
                            var5 = var4.body;
                            var5 = var6.bind(var2)(var5);
case 11: // try_end0
                            _fun0002_ip = 12; continue _fun0002;
case 9:
                            return var4;
case 13: // catch_target0
                            CatchBlockStart(arg_register=3);
case 12:
                            var4 = _closure2_slot2;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
                            return var2;
case 4:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var2 = var2.bind(var5)();
            _closure2_slot3 = var2;
            var5 = var7.useRef;
            var5 = var5.bind(var7)(var6);
            _closure2_slot4 = var5;
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var2 = _closure2_slot0;
case 14:
                    if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = _closure2_slot4;
                    var2 = false;
                    var3['current'] = var2;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['teams'] = var4;
            var1['loading'] = var3;
            var1['refresh'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();