// app/modules/premium/ReverseTrialUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _shouldShowReverseTrialFollowUpUpsell() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot3;
                    var2 = var3.getCurrentUser;
                    var7 = var2.bind(var3)();
                    var5 = null;
                    var3 = var5 != var7;
                    if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 4;
                    var6 = var6[var2];
                    var2 = undefined;
                    var6 = var8.bind(var2)(var6);
                    var2 = var6.isPremium;
                    var2 = var2.bind(var6)(var7);
                    var3 = !var2;
case 4:
                    if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var2 = arg1;
                    if(!(var5 == var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 5;
                    var6 = var6[var2];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var2 = var6.fetchUserOffer;
                    var2 = var2.bind(var6)();
                    SaveGenerator(address=117);
case 10:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 8:
                    var7 = _closure1_slot4;
                    var6 = var7.getUserTrialOffer;
                    var4 = _closure1_slot5;
                    var4 = var6.bind(var7)(var4);
                    var3 = var5 != var4;
case 6:
                    return var3;
case 12:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/ReverseTrialUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function shouldShowReverseTrialFollowUpUpsell() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['shouldShowReverseTrialFollowUpUpsell'] = var4;
    var2 = function useIsInReverseTrial() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var4 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var3 = var4.isOnReverseTrial;
                var2 = var3.bind(var4)();
case 13:
                var1 = var1 != var2;
                if(!var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var1 = var2;
case 15:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsInReverseTrial'] = var2;
    return var1;
})();