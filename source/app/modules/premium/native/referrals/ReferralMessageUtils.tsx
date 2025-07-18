// app/modules/premium/native/referrals/ReferralMessageUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/referrals/ReferralMessageUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function canOpenPremiumPlanDirectlyForReferralTrial() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = var3.getPremiumTypeSubscription;
            var1 = false;
            var4 = var4.bind(var3)(var1);
            var1 = var3.hasFetchedSubscriptions;
            var1 = var1.bind(var3)();
            var3 = _closure1_slot1;
            var2 = var3.isFetchingOffer;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0001_ip = 53; continue _fun0001 }
 47:
            var3 = null;
            var1 = var3 == var4;
 53:
            if(!var1) { _fun0001_ip = 59; continue _fun0001 }
 56:
            var1 = !var2;
 59:
            return var1;
        }
    };
    var3['canOpenPremiumPlanDirectlyForReferralTrial'] = var2;
    return var1;
})();