// app/modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var8 = arguments[1];
            var5 = undefined;
            if(!(var8 === var5)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var8 = false;
 14:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 1;
            var1 = var9[var1];
            var3 = var6.bind(var5)(var1);
            var1 = var3.useIsEligibleSenderForReferralProgramExperiment;
            var3 = var1.bind(var3)(var7);
            var1 = var3.enabled;
            var3 = var3.eligibleToFetch;
            var4 = 2;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useMaybeFetchReferralsRemaining;
            var3 = !var3;
            if(var3) { _fun0001_ip = 86; continue _fun0001 }
 83:
            var3 = var8;
 86:
            var3 = var4.bind(var6)(var7, var3);
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 3;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStores;
            var2 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getIsEligibleToSendReferrals;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            if(!var1) { _fun0001_ip = 148; continue _fun0001 }
 145:
            var1 = var2;
 148:
            return var1;
        }
    };
    var3['useIsEligibleSenderForReferralProgram'] = var2;
    return var1;
})();