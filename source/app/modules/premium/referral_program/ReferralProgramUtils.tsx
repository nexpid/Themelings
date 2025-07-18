// app/modules/premium/referral_program/ReferralProgramUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 6;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/referral_program/ReferralProgramUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getReferralTrialOfferExpirationCopy(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = global;
            var2 = var7.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = arg1;
            var3 = var1 - var2;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 0;
            var1 = var5[var1];
            var8 = undefined;
            var1 = var4.bind(var8)(var1);
            var1 = var1.Millis;
            var1 = var1.HOUR;
            var9 = var3 / var1;
            var6 = 24;
            if(!(!(var9 > var6))) { _fun0001_ip = 250; continue _fun0001 }
 74:
            var11 = 1;
            if(!(!(var9 >= var11))) { _fun0001_ip = 169; continue _fun0001 }
 81:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = var1[var11];
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var1[var11];
            var1 = var3.bind(var8)(var1);
            var1 = var1.t;
            var3 = var1./d0GmZ;
            var1 = {};
            var13 = var7.Math;
            var12 = var13.floor;
            var10 = 60;
            var10 = var10 * var9;
            var10 = var12.bind(var13)(var10);
            var1['numMinutes'] = var10;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 248; continue _fun0001;
 169:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = var3[var11];
            var5 = var4.bind(var8)(var5);
            var10 = var5.intl;
            var5 = var10.formatToPlainString;
            var3 = var3[var11];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            var4 = var3.k9v339;
            var3 = {};
            var12 = var7.Math;
            var11 = var12.floor;
            var11 = var11.bind(var12)(var9);
            var3['numHours'] = var11;
            var1 = var5.bind(var10)(var4, var3);
 248:
            _fun0001_ip = 336; continue _fun0001;
 250:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 1;
            var4 = var10[var2];
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var10[var2];
            var2 = var3.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2.g9s+dH;
            var2 = {};
            var8 = var7.Math;
            var7 = var8.floor;
            var6 = var9 / var6;
            var6 = var7.bind(var8)(var6);
            var2['numDays'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 336:
            return var1;
        }
    };
    var3['getReferralTrialOfferExpirationCopy'] = var4;
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var1 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var1);
        var2 = var3.UNSAFE_isDismissibleContentDismissed;
        var1 = 3;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.DismissibleContent;
        var1 = var1.REFERRAL_PROGRAM_NITRO_TAB_BADGE;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isReferralProgramBadgeAcknowledged'] = var4;
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var2);
        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
        var2 = 3;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.DismissibleContent;
        var2 = var2.REFERRAL_PROGRAM_NITRO_TAB_BADGE;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['markReferralProgramBadgeAcknowledged'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = var1.trialOffer;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var10 = undefined;
            var3 = var2.bind(var10)(var1);
            var2 = var3.useExperiment;
            var1 = {};
            var5 = 'useIsReferralProgramBadgeShowable';
            var1['location'] = var5;
            var6 = var2.bind(var3)(var1);
            var2 = var6.enabled;
            var1 = false;
            if(!(var1 !== var2)) { _fun0002_ip = 238; continue _fun0002 }
 71:
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 236; continue _fun0002 }
 80:
            var2 = var4.referrer_id;
            var2 = var10 !== var2;
            var3 = var4.redeemed_at;
            var5 = var10 === var3;
            var3 = global;
            var8 = var3.Date;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 5;
            var7 = var11[var7];
            var9 = var9.bind(var10)(var7);
            var7 = var9.extractTimestamp;
            var4 = var4.id;
            var12 = var7.bind(var9)(var4);
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var13 = var7;
            var4 = new var13[var8](var12, var11);
            var4 = var4 instanceof Object ? var4 : var7;
            var7 = var4.setDate;
            var8 = var4.getDate;
            var8 = var8.bind(var4)();
            var6 = var6.nDelayDays;
            var6 = var8 + var6;
            var6 = var7.bind(var4)(var6);
            var3 = var3.Date;
            var6 = var3.prototype;
            var6 = Object.create(var6, {constructor: {value: var3}});
            var13 = var6;
            var3 = new var13[var3](var12);
            var3 = var3 instanceof Object ? var3 : var6;
            if(!var2) { _fun0002_ip = 227; continue _fun0002 }
 224:
            var2 = var5;
 227:
            if(!var2) { _fun0002_ip = 234; continue _fun0002 }
 230:
            var2 = var3 >= var4;
 234:
            return var2;
 236:
            return var1;
 238:
            return var1;
        }
    };
    var3['useIsReferralProgramBadgeShowable'] = var2;
    return var1;
})();