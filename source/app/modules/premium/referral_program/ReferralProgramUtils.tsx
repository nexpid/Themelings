// app/modules/premium/referral_program/ReferralProgramUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function isReferralProgramPopoverSeen() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var1 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var1);
        var2 = var3.UNSAFE_isDismissibleContentDismissed;
        var1 = 5;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.DismissibleContent;
        var1 = var1.REFERRAL_PROGRAM_POPOVER;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot4 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/referral_program/ReferralProgramUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getReferralTrialOfferExpirationCopy(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = global;
            var2 = var7.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = arg1;
            var3 = var1 - var2;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var8 = undefined;
            var1 = var4.bind(var8)(var1);
            var1 = var1.Millis;
            var1 = var1.HOUR;
            var9 = var3 / var1;
            var6 = 24;
            if(!(!(var9 > var6))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 1;
            if(!(!(var9 >= var1))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 3;
            var4 = var10[var1];
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var10[var1];
            var1 = var3.bind(var8)(var1);
            var1 = var1.t;
            var3 = var1["/d0GmT"];
            var1 = {};
            var12 = var7.Math;
            var11 = var12.floor;
            var10 = 60;
            var10 = var10 * var9;
            var10 = var11.bind(var12)(var10);
            var1['numMinutes'] = var10;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 3;
            var5 = var11[var3];
            var5 = var4.bind(var8)(var5);
            var10 = var5.intl;
            var5 = var10.formatToPlainString;
            var3 = var11[var3];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            var4 = var3.k9v33y;
            var3 = {};
            var12 = var7.Math;
            var11 = var12.floor;
            var11 = var11.bind(var12)(var9);
            var3['numHours'] = var11;
            var1 = var5.bind(var10)(var4, var3);
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 3;
            var4 = var10[var2];
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var10[var2];
            var2 = var3.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2.g9s+dA;
            var2 = {};
            var8 = var7.Math;
            var7 = var8.floor;
            var6 = var9 / var6;
            var6 = var7.bind(var8)(var6);
            var2['numDays'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var3['getReferralTrialOfferExpirationCopy'] = var5;
    var5 = function useIsReferralProgramEntrypointBadgeAcknowledged() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var1 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var1);
        var2 = var3.useIsDismissibleContentDismissed_UNSAFE;
        var1 = 5;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.DismissibleContent;
        var1 = var1.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useIsReferralProgramEntrypointBadgeAcknowledged'] = var5;
    var5 = function markReferralProgramEntrypointBadgeAcknowledged() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var2 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var2);
        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
        var2 = 5;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.DismissibleContent;
        var2 = var2.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['markReferralProgramEntrypointBadgeAcknowledged'] = var5;
    var5 = function isReferralProgramBadgeAcknowledged() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var1 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var1);
        var2 = var3.UNSAFE_isDismissibleContentDismissed;
        var1 = 5;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.DismissibleContent;
        var1 = var1.REFERRAL_PROGRAM_NITRO_TAB_BADGE;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isReferralProgramBadgeAcknowledged'] = var5;
    var5 = function markReferralProgramBadgeAcknowledged() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var2 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var2);
        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
        var2 = 5;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.DismissibleContent;
        var2 = var2.REFERRAL_PROGRAM_NITRO_TAB_BADGE;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['markReferralProgramBadgeAcknowledged'] = var5;
    var5 = function useIsReferralProgramBadgeShowable(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.trialOffer;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var3.referrer_id;
            var8 = undefined;
            var1 = var8 !== var1;
            var2 = var3.redeemed_at;
            var4 = var8 === var2;
            var2 = global;
            var6 = var2.Date;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 6;
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
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var4;
case 10:
            if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = var2 >= var3;
case 12:
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var3['useIsReferralProgramBadgeShowable'] = var5;
    var5 = function markReferralProgramPopoverSeen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 == var5)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var4 = undefined;
            var3 = var6.bind(var4)(var1);
            var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
            var1 = 5;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.REFERRAL_PROGRAM_POPOVER;
            var1 = var2.bind(var3)(var1);
            _fun0003_ip = 16; continue _fun0003;
case 14:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var2 = undefined;
            var4 = var7.bind(var2)(var1);
            var3 = var4.markSnowflakeBoundDismissibleContentAsDismissed;
            var1 = 5;
            var1 = var8[var1];
            var1 = var7.bind(var2)(var1);
            var1 = var1.DismissibleContent;
            var2 = var1.REFERRAL_PROGRAM_POPOVER_V2;
            var1 = {};
            var6 = _closure1_slot4;
            var6 = var6.INDIRECT_ACTION;
            var1['dismissAction'] = var6;
            var1 = var3.bind(var4)(var2, var5, var1);
case 16:
            var1 = undefined;
            return var1;
        }
    };
    var3['markReferralProgramPopoverSeen'] = var5;
    var3['isReferralProgramPopoverSeen'] = var4;
    var2 = function useIsReferralProgramPopoverShowable() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var10 = undefined;
            var7 = var4.bind(var10)(var1);
            var3 = var7.useIsEligibleSenderForReferralProgram;
            var1 = false;
            var1 = var3.bind(var7)(var1);
            var7 = 9;
            var3 = var6[var7];
            var12 = var4.bind(var10)(var3);
            var9 = var12.useStateFromStores;
            var11 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var11;
            var3 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getReferralsRemaining;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var9.bind(var12)(var8, var3);
            var7 = var6[var7];
            var9 = var4.bind(var10)(var7);
            var8 = var9.useStateFromStores;
            var7 = new Array(1);
            var7[0] = var11;
            var2 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getReminderStateId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var9)(var7, var2);
            var2 = 10;
            var2 = var6[var2];
            var6 = var4.bind(var10)(var2);
            var4 = var6.useIsReferralReminderDCExperimentEnabled;
            var2 = {};
            var7 = 'ReferralProgramUtils';
            var2['location'] = var7;
            var2 = var4.bind(var6)(var2);
            if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var2 = _closure1_slot5;
            var2 = var2.bind(var10)();
            var2 = !var2;
            _fun0004_ip = 19; continue _fun0004;
case 17:
            var4 = null;
            var4 = var4 != var8;
            if(!var4) { _fun0004_ip = 20; continue _fun0004 }
case 4:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 4;
            var5 = var11[var5];
            var7 = var9.bind(var10)(var5);
            var6 = var7.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
            var5 = 5;
            var5 = var11[var5];
            var5 = var9.bind(var10)(var5);
            var5 = var5.DismissibleContent;
            var5 = var5.REFERRAL_PROGRAM_POPOVER_V2;
            var5 = var6.bind(var7)(var5, var8);
            var5 = var5.isDismissed;
            var4 = !var5;
case 20:
            var2 = var4;
case 19:
            if(!var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var1 = var2;
case 21:
            if(!var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var2 = null;
            var1 = var2 != var3;
case 23:
            if(!var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var2 = 0;
            var1 = var3 > var2;
case 25:
            return var1;
        }
    };
    var3['useIsReferralProgramPopoverShowable'] = var2;
    return var1;
})();