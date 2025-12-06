// app/modules/premium/premium_group/hooks/usePremiumGroupMembershipSubscriptionId.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useEffect;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/hooks/usePremiumGroupMembershipSubscriptionId.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumGroupMembershipSubscriptionId() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arguments[0];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = true;
case 2:
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var8 = var4.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getSubscriptionId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var7.bind(var8)(var4, var1);
            _closure2_slot1 = var1;
            var4 = _closure1_slot3;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var6;
            var2 = function() {
                var2 = function _fetchMembership() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot2;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                                var2 = _closure2_slot0;
                                var2 = !var2;
                                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                                var5 = _closure1_slot4;
                                var4 = var5.isFetchingMembership;
                                var2 = var4.bind(var5)();
case 6:
                                if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                                var5 = _closure1_slot4;
                                var4 = var5.hasFetchedMembership;
                                var2 = var4.bind(var5)();
case 8:
                                if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                                var4 = _closure2_slot1;
                                var3 = null;
                                var2 = var3 != var4;
case 10:
                                if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 4;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var3);
                                var2 = var3.fetchPremiumGroupMembership;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=114);
case 14:
                                return var2;
case 15:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 16:
                                return var2;
case 12:
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
                var2 = function fetchMembership() {
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
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();