// app/modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useEffect;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumGroupMembers() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arguments[0];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = true;
case 2:
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 3;
            var2 = var9[var5];
            var12 = var8.bind(var6)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var2;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getMembers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var11.bind(var12)(var10, var3);
            var5 = var9[var5];
            var10 = var8.bind(var6)(var5);
            var8 = var10.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.hasFetchedMembers;
                var1 = var1.bind(var2)();
                var1 = !var1;
                return var1;
            };
            var2 = var8.bind(var10)(var5, var2);
            var8 = _closure1_slot1;
            var5 = 4;
            var5 = var9[var5];
            var5 = var8.bind(var6)(var5);
            var8 = var5.bind(var6)(var7);
            _closure2_slot1 = var8;
            var5 = _closure1_slot4;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var7;
            var1 = function() {
                var2 = function _fetchMembers() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                                var3 = _closure2_slot0;
                                var3 = !var3;
                                if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                                var5 = _closure1_slot5;
                                var4 = var5.isFetchingMembers;
                                var3 = var4.bind(var5)();
case 6:
                                if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                                var5 = _closure1_slot5;
                                var4 = var5.hasFetchedMembers;
                                var3 = var4.bind(var5)();
case 8:
                                if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                                var4 = _closure2_slot1;
                                var3 = null;
                                if(!(var3 != var4)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 5;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.fetchSubscriptionGroupMembers;
                                var2 = _closure2_slot1;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=114);
case 13:
                                return var2;
case 14:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 15:
                                return var2;
case 10:
                                var2 = undefined;
                                return var2;
case 4:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot0 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var2;
                var2 = function fetchMembers() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = !var2;
                return var1;
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = {};
            var1['premiumGroupMembers'] = var3;
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();