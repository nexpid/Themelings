// app/modules/premium/referral_program/ReferralProgramUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
    var1 = 5;
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
            var3 = var1.trialOffer;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 148; continue _fun0002 }
 18:
            var1 = var3.referrer_id;
            var8 = undefined;
            var1 = var8 !== var1;
            var2 = var3.redeemed_at;
            var4 = var8 === var2;
            var2 = global;
            var6 = var2.Date;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 4;
            var5 = var9[var5];
            var7 = var7.bind(var8)(var5);
            var5 = var7.extractTimestamp;
            var3 = var3.id;
            var10 = var5.bind(var7)(var3);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var11 = var5;
            var3 = new var11[var6](var10, var9);
            var3 = var3 instanceof Object ? var3 : var5;
            var2 = var2.Date;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var11 = var5;
            var2 = new var11[var2](var10);
            var2 = var2 instanceof Object ? var2 : var5;
            if(!var1) { _fun0002_ip = 139; continue _fun0002 }
 136:
            var1 = var4;
 139:
            if(!var1) { _fun0002_ip = 146; continue _fun0002 }
 142:
            var1 = var2 >= var3;
 146:
            return var1;
 148:
            var1 = false;
            return var1;
        }
    };
    var3['useIsReferralProgramBadgeShowable'] = var2;
    return var1;
})();