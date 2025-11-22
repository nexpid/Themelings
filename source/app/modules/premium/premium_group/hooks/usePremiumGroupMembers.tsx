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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.useEffect;
    var _closure1_slot5 = var8;
    var4 = var4.useState;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumGroupMembers() {
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
            var _closure2_slot2 = var5;
            var4 = _closure1_slot6;
            var2 = null;
            var7 = var4.bind(var5)(var2);
            var4 = _closure1_slot4;
            var2 = 2;
            var7 = var4.bind(var5)(var7, var2);
            var2 = 0;
            var2 = var7[var2];
            var4 = 1;
            var4 = var7[var4];
            _closure2_slot1 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 4;
            var4 = var8[var4];
            var9 = var7.bind(var5)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getPremiumTypeSubscription;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = var2.id;
case 4:
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var7, var4);
            _closure2_slot2 = var7;
            var4 = _closure1_slot5;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var1 = function() {
                var2 = function _fetchMembers() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                                var2 = undefined;
                                var5 = undefined;
                                var7 = undefined;
                                var9 = undefined;
                                var4 = _closure2_slot0;
                                if(!var4) { _fun0003_ip = 8; continue _fun0003 }
case 4: // try_start_0
                                var4 = _closure2_slot2;
                                var5 = var4;
                                var6 = null;
                                if(!(var6 == var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var4 = 5;
                                var4 = var11[var4];
                                var10 = var10.bind(var2)(var4);
                                var4 = var10.fetchPremiumGroupMembership;
                                var4 = var4.bind(var10)();
                                SaveGenerator(address=83);
case 11:
                                return var4;
case 12:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                                if(var10) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                                var7 = var4;
                                var11 = var6 == var4;
                                var10 = undefined;
                                if(var11) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                                var11 = var7;
                                var10 = var11.subscription_id;
case 15:
                                if(!(var6 != var10)) { _fun0003_ip = 9; continue _fun0003 }
case 17:
                                var5 = var7.subscription_id;
case 9:
                                var7 = var5;
                                if(!(var6 != var7)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var10 = 5;
                                var10 = var12[var10];
                                var11 = var11.bind(var2)(var10);
                                var10 = var11.fetchSubscriptionGroupMembers;
                                var5 = var10.bind(var11)(var5);
                                SaveGenerator(address=171);
case 20:
                                return var5;
case 21:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                                if(var10) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                                var9 = var5;
                                var10 = _closure3_slot0;
                                if(!var10) { _fun0003_ip = 18; continue _fun0003 }
case 24:
                                var11 = var9;
                                var10 = var11.find;
                                var9 = function(arg1) {
                                    var2 = arg1;
                                    var1 = var2.isPrimary;
                                    var1 = var1.bind(var2)();
                                    return var1;
                                };
                                var9 = var10.bind(var11)(var9);
                                var10 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var7 = 6;
                                var7 = var12[var7];
                                var10 = var10.bind(var2)(var7);
                                var7 = var6 != var9;
                                var6 = 'Primary member not found in premium group';
                                var6 = var10.bind(var2)(var7, var6);
                                var7 = _closure2_slot1;
                                var6 = {};
                                var9 = var9.user;
                                var6['primary'] = var9;
                                var10 = var11.filter;
                                var9 = function(arg1) {
                                    var2 = arg1;
                                    var1 = var2.isMember;
                                    var1 = var1.bind(var2)();
                                    return var1;
                                };
                                var12 = var10.bind(var11)(var9);
                                var10 = var12.map;
                                var9 = function(arg1) {
                                    var1 = arg1;
                                    var1 = var1.user;
                                    return var1;
                                };
                                var9 = var10.bind(var12)(var9);
                                var6['members'] = var9;
                                var10 = var11.filter;
                                var9 = function(arg1) {
                                    var2 = arg1;
                                    var1 = var2.isInvited;
                                    var1 = var1.bind(var2)();
                                    return var1;
                                };
                                var10 = var10.bind(var11)(var9);
                                var9 = var10.map;
                                var8 = function(arg1) {
                                    var1 = arg1;
                                    var1 = var1.user;
                                    return var1;
                                };
                                var8 = var9.bind(var10)(var8);
                                var6['invitedUsers'] = var8;
                                var6 = var7.bind(var2)(var6);
case 18: // try_end0
                                _fun0003_ip = 8; continue _fun0003;
case 22:
                                return var5;
case 13:
                                return var4;
case 25: // catch_target0
                                CatchBlockStart(arg_register=3);
                                var4 = _closure3_slot0;
                                if(!var4) { _fun0003_ip = 8; continue _fun0003 }
case 26:
                                var4 = _closure2_slot1;
                                var3 = null;
                                var3 = var4.bind(var2)(var3);
case 8:
                                return var2;
case 6:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot1 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot1 = var2;
                var2 = true;
                var _closure3_slot0 = var2;
                var3 = function fetchMembers() {
                    var1 = undefined;
                    var4 = _closure3_slot1;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var2 = undefined;
                var2 = var3.bind(var2)();
                var1 = function() {
                    var1 = false;
                    _closure3_slot0 = var1;
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var1 = var4.bind(var5)(var1, var3);
            var1 = {};
            var1['premiumGroupMembers'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();