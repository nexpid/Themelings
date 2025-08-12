// app/modules/premium/referral_program/ReferralProgramUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = function isReferralProgramPopoverSeen() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 3;
        var1 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var1);
        var2 = var3.UNSAFE_isDismissibleContentDismissed;
        var1 = 4;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.DismissibleContent;
        var1 = var1.REFERRAL_PROGRAM_POPOVER;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot4 = var4;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/referral_program/ReferralProgramUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getReferralTrialOfferExpirationCopy(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = global;
            var2 = var7.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = arg1;
            var4 = var1 - var2;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var8 = undefined;
            var3 = var5.bind(var8)(var3);
            var3 = var3.Millis;
            var3 = var3.HOUR;
            var9 = var4 / var3;
            var6 = 24;
            if(!(!(var9 > var6))) { _fun0001_ip = 254; continue _fun0001 }
 75:
            if(!(!(var9 >= var1))) { _fun0001_ip = 170; continue _fun0001 }
 79:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 2;
            var4 = var10[var1];
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var10[var1];
            var1 = var3.bind(var8)(var1);
            var1 = var1.t;
            var3 = var1./d0GmZ;
            var1 = {};
            var12 = var7.Math;
            var11 = var12.floor;
            var10 = 60;
            var10 = var10 * var9;
            var10 = var11.bind(var12)(var10);
            var1['numMinutes'] = var10;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 252; continue _fun0001;
 170:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 2;
            var5 = var11[var3];
            var5 = var4.bind(var8)(var5);
            var10 = var5.intl;
            var5 = var10.formatToPlainString;
            var3 = var11[var3];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            var4 = var3.k9v339;
            var3 = {};
            var12 = var7.Math;
            var11 = var12.floor;
            var11 = var11.bind(var12)(var9);
            var3['numHours'] = var11;
            var1 = var5.bind(var10)(var4, var3);
 252:
            _fun0001_ip = 340; continue _fun0001;
 254:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 2;
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
 340:
            return var1;
        }
    };
    var3['getReferralTrialOfferExpirationCopy'] = var5;
    var5 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 3;
        var1 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var1);
        var2 = var3.UNSAFE_isDismissibleContentDismissed;
        var1 = 4;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.DismissibleContent;
        var1 = var1.REFERRAL_PROGRAM_NITRO_TAB_BADGE;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isReferralProgramBadgeAcknowledged'] = var5;
    var5 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 3;
        var2 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var2);
        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
        var2 = 4;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.DismissibleContent;
        var2 = var2.REFERRAL_PROGRAM_NITRO_TAB_BADGE;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['markReferralProgramBadgeAcknowledged'] = var5;
    var5 = function(arg1) {
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
            var5 = 5;
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
    var3['useIsReferralProgramBadgeShowable'] = var5;
    var5 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 3;
        var2 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var2);
        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
        var2 = 4;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.DismissibleContent;
        var2 = var2.REFERRAL_PROGRAM_POPOVER;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['markReferralProgramPopoverSeen'] = var5;
    var3['isReferralProgramPopoverSeen'] = var4;
    var2 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 6;
            var1 = var9[var6];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.useExperiment;
            var1 = {};
            var10 = 'useIsReferralProgramPopoverShowable';
            var1['location'] = var10;
            var3 = var3.bind(var4)(var1);
            var7 = _closure1_slot0;
            var1 = 7;
            var1 = var9[var1];
            var8 = var7.bind(var5)(var1);
            var4 = var8.useIsEligibleSenderForReferralProgram;
            var11 = var3.cohort;
            var1 = var9[var6];
            var1 = var7.bind(var5)(var1);
            var1 = var1.ReferralProgramPopoverExperimentCohort;
            var1 = var1.Control;
            var1 = var11 === var1;
            var1 = var4.bind(var8)(var10, var1);
            var4 = _closure1_slot4;
            var8 = var4.bind(var5)();
            var4 = 8;
            var4 = var9[var4];
            var10 = var7.bind(var5)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getReferralsRemaining;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var9.bind(var10)(var7, var4);
            if(!var1) { _fun0003_ip = 168; continue _fun0003 }
 162:
            var4 = false;
            var1 = var4 === var8;
 168:
            if(!var1) { _fun0003_ip = 177; continue _fun0003 }
 171:
            var4 = null;
            var1 = var4 !== var7;
 177:
            if(!var1) { _fun0003_ip = 186; continue _fun0003 }
 180:
            var4 = 0;
            var1 = var7 > var4;
 186:
            if(!var1) { _fun0003_ip = 228; continue _fun0003 }
 189:
            var3 = var3.cohort;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ReferralProgramPopoverExperimentCohort;
            var2 = var2.Control;
            var1 = var3 !== var2;
 228:
            return var1;
        }
    };
    var3['useIsReferralProgramPopoverShowable'] = var2;
    return var1;
})();