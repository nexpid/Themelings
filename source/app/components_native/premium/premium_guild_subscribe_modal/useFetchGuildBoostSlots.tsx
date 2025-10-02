// app/components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchGuildBoostSlots() {
        var5 = _closure1_slot5;
        var4 = var5.useState;
        var1 = true;
        var6 = var4.bind(var5)(var1);
        var4 = _closure1_slot4;
        var8 = undefined;
        var1 = 2;
        var6 = var4.bind(var8)(var6, var1);
        var1 = 0;
        var1 = var6[var1];
        var _closure2_slot0 = var1;
        var4 = 1;
        var4 = var6[var4];
        var _closure2_slot1 = var4;
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 5;
        var6 = var9[var4];
        var12 = var7.bind(var8)(var6);
        var11 = var12.useStateFromStores;
        var6 = _closure1_slot6;
        var10 = new Array(1);
        var10[0] = var6;
        var6 = function() {
            var1 = _closure1_slot6;
            var1 = var1.hasFetched;
            return var1;
        };
        var6 = var11.bind(var12)(var10, var6);
        var _closure2_slot2 = var6;
        var4 = var9[var4];
        var8 = var7.bind(var8)(var4);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var2 = _closure1_slot7;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var7.bind(var8)(var4, var3);
        var _closure2_slot3 = var7;
        var3 = var5.useRef;
        var3 = var3.bind(var5)(var7);
        var _closure2_slot4 = var3;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var7;
        var3[1] = var6;
        var3[2] = var1;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot3;
                var1 = _closure2_slot4;
                var1 = var1.current;
                if(!(var2 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.AppStates;
                var1 = var1.ACTIVE;
                if(!(var2 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
                var1 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 3:
                                var9 = global;
                                var6 = var9.Promise;
                                var5 = var6.all;
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 7;
                                var2 = var3[var2];
                                var3 = undefined;
                                var4 = var4.bind(var3)(var2);
                                var2 = var4.init;
                                var4 = var2.bind(var4)();
                                var2 = new Array(3);
                                var2[0] = var4;
                                var8 = _closure2_slot2;
                                if(var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var8 = 8;
                                var8 = var11[var8];
                                var10 = var10.bind(var3)(var8);
                                var8 = var10.fetchGuildBoostSlots;
                                var8 = var8.bind(var10)();
                                _fun0002_ip = 9; continue _fun0002;
case 7:
                                var10 = var9.Promise;
                                var9 = var10.resolve;
                                var8 = var9.bind(var10)();
case 9:
                                var2[1] = var8;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 8;
                                var7 = var9[var7];
                                var8 = var8.bind(var3)(var7);
                                var7 = var8.fetchAppliedGuildBoostsForUser;
                                var7 = var7.bind(var8)();
                                var2[2] = var7;
                                var2 = var5.bind(var6)(var2);
                                SaveGenerator(address=172);
case 10:
                                return var2;
case 11:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                                var5 = _closure2_slot1;
                                var4 = false;
                                var4 = var5.bind(var3)(var4);
                                return var3;
case 12:
                                return var2;
case 6:
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
                var2 = undefined;
                var1 = var1.bind(var2)();
                var4 = _closure2_slot4;
                var3 = _closure2_slot3;
                var4['current'] = var3;
                var1 = var1.bind(var2)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();