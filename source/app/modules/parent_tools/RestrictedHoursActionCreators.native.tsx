// app/modules/parent_tools/RestrictedHoursActionCreators.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _openRestrictedHoursModal() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 1;
                    var4 = var4[var3];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.pushLazy;
                    var5 = _closure1_slot3;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var3 = 3;
                                var3 = var2[var3];
                                var5 = undefined;
                                var4 = var4.bind(var5)(var3);
                                var3 = 2;
                                var3 = var2[var3];
                                var2 = var2.paths;
                                var2 = var4.bind(var5)(var3, var2);
                                SaveGenerator(address=54);
case 5:
                                return var2;
case 6:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                                var3 = var2.default;
                                return var3;
case 7:
                                return var2;
case 4:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var5 = var5.bind(var3)(var4);
                    var4 = {};
                    var8 = _closure1_slot6;
                    var4['onClose'] = var8;
                    var2 = _closure1_slot4;
                    var2 = var6.bind(var7)(var5, var4, var2);
                    SaveGenerator(address=82);
case 9:
                    return var2;
case 10:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    return var3;
case 11:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var2 = function closeRestrictedHoursModal() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.popWithKey;
        var2 = _closure1_slot4;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot6 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 'RESTRICTED_HOURS_MODAL_KEY';
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/RestrictedHoursActionCreators.native.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function openRestrictedHoursModal() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['openRestrictedHoursModal'] = var4;
    var3['closeRestrictedHoursModal'] = var2;
    return var1;
})();