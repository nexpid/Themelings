// app/modules/user_settings/native/profiles/useGuildProfileEditForm.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FormStates;
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/profiles/useGuildProfileEditForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildProfileEditForm() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var10 = 7;
            var1 = var4[var10];
            var9 = undefined;
            var6 = var3.bind(var9)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = var5.bind(var6)(var2, var1);
            var _closure2_slot0 = var24;
            var1 = var4[var10];
            var6 = var3.bind(var9)(var1);
            var5 = var6.useStateFromStoresObject;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot5;
                var2 = var3.getAllPending;
                var5 = var2.bind(var3)();
                var6 = var1;
                var2 = copyDataProperties(var6, var5);
                var2 = var3.showNotice;
                var4 = var2.bind(var3)();
                var2 = 'hasEdits';
                var1[var2] = var4;
                var2 = var3.getErrors;
                var4 = var2.bind(var3)();
                var2 = 'errors';
                var1[var2] = var4;
                var2 = var3.getGuild;
                var4 = var2.bind(var3)();
                var2 = 'guild';
                var1[var2] = var4;
                var2 = var3.getSource;
                var4 = var2.bind(var3)();
                var2 = 'source';
                var1[var2] = var4;
                var2 = var3.getFormState;
                var3 = var2.bind(var3)();
                var2 = 'formState';
                var1[var2] = var3;
                return var1;
            };
            var6 = var5.bind(var6)(var2, var1);
            var23 = var6.pendingAvatar;
            var _closure2_slot1 = var23;
            var22 = var6.pendingNickname;
            var _closure2_slot2 = var22;
            var20 = var6.pendingBanner;
            var _closure2_slot3 = var20;
            var19 = var6.pendingBio;
            var _closure2_slot4 = var19;
            var18 = var6.pendingPronouns;
            var _closure2_slot5 = var18;
            var17 = var6.pendingThemeColors;
            var _closure2_slot6 = var17;
            var2 = var6.guild;
            var _closure2_slot7 = var2;
            var12 = var6.formState;
            var21 = var6.pendingAvatarDecoration;
            var _closure2_slot8 = var21;
            var16 = var6.pendingProfileEffectId;
            var _closure2_slot9 = var16;
            var1 = 8;
            var1 = var4[var1];
            var4 = var3.bind(var9)(var1);
            var3 = var4.useGuildAutomodProfileQuarantineErrors;
            var5 = null;
            var8 = var5 == var2;
            var1 = undefined;
            if(var8) { _fun0001_ip = 230; continue _fun0001 }
 225:
            var1 = var2.id;
 230:
            var13 = var3.bind(var4)(var1);
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var10];
            var15 = var4.bind(var9)(var3);
            var14 = var15.useStateFromStores;
            var3 = _closure1_slot5;
            var8 = new Array(2);
            var8[0] = var3;
            var3 = _closure1_slot6;
            var8[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot5;
                    var1 = var3.getFormState;
                    var3 = var1.bind(var3)();
                    var1 = _closure1_slot9;
                    var1 = var1.SUBMITTING;
                    var1 = var3 === var1;
                    if(var1) { _fun0002_ip = 44; continue _fun0002 }
 34:
                    var2 = _closure1_slot6;
                    var1 = var2.isSubmitting;
 44:
                    return var1;
                }
            };
            var8 = var14.bind(var15)(var8, var3);
            var3 = {};
            var28 = var3;
            var27 = var13;
            var13 = copyDataProperties(var28, var27);
            var27 = var6.errors;
            var28 = var3;
            var13 = copyDataProperties(var28, var27);
            var26 = _closure1_slot4;
            var15 = var26.useMemo;
            var14 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var4 = var1.DelayedCall;
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var6 = 200;
                var5 = function() {
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 10;
                    var3 = var6[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.wait;
                    var5 = _closure1_slot0;
                    var2 = 11;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.resetAllPending;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var7 = var2;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var13 = new Array(0);
            var15 = var15.bind(var26)(var14, var13);
            var _closure2_slot10 = var15;
            var25 = var26.useEffect;
            var14 = new Array(1);
            var14[0] = var15;
            var13 = function() {
                var1 = function() {
                    var2 = _closure2_slot10;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 10;
                    var3 = var6[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.wait;
                    var5 = _closure1_slot0;
                    var2 = 11;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.resetAllPending;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            };
            var13 = var25.bind(var26)(var13, var14);
            var14 = _closure1_slot1;
            var13 = 12;
            var13 = var1[var13];
            var13 = var14.bind(var9)(var13);
            var13 = var13.bind(var9)();
            var _closure2_slot11 = var13;
            var1 = var1[var10];
            var13 = var4.bind(var9)(var1);
            var10 = var13.useStateFromStores;
            var1 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot11;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var10.bind(var13)(var4, var1);
            var10 = var8;
            if(var10) { _fun0001_ip = 454; continue _fun0001 }
 440:
            var1 = _closure1_slot9;
            var1 = var1.CLOSED;
            var10 = var12 === var1;
 454:
            var _closure2_slot12 = var10;
            var1 = {};
            var14 = _closure1_slot4;
            var13 = var14.useCallback;
            var12 = _closure1_slot3;
            var11 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 786; continue _fun0003 }
 10:
                        var2 = _closure2_slot12;
                        if(var2) { _fun0003_ip = 781; continue _fun0003 }
 23:
                        var2 = _closure2_slot0;
                        var9 = null;
                        if(!(var9 != var2)) { _fun0003_ip = 781; continue _fun0003 }
 36:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 13;
                        var7 = var4[var2];
                        var8 = undefined;
                        var11 = var3.bind(var8)(var7);
                        var10 = var11.getGuildMemberChangesForUpdateRequest;
                        var7 = {};
                        var12 = _closure2_slot1;
                        var7['pendingAvatar'] = var12;
                        var12 = _closure2_slot2;
                        var7['pendingNickname'] = var12;
                        var12 = _closure2_slot8;
                        var7['pendingAvatarDecoration'] = var12;
                        var14 = var10.bind(var11)(var7);
                        var2 = var4[var2];
                        var4 = var3.bind(var8)(var2);
                        var3 = var4.getProfileChangesForUpdateRequest;
                        var2 = {};
                        var7 = _closure2_slot3;
                        var2['pendingBanner'] = var7;
                        var7 = _closure2_slot4;
                        var2['pendingBio'] = var7;
                        var7 = _closure2_slot5;
                        var2['pendingPronouns'] = var7;
                        var7 = _closure2_slot6;
                        var2['pendingThemeColors'] = var7;
                        var7 = _closure2_slot9;
                        var2['pendingProfileEffectId'] = var7;
                        var12 = var3.bind(var4)(var2);
                        var3 = global;
                        var4 = var3.Object;
                        var2 = var4.keys;
                        var2 = var2.bind(var4)(var14);
                        var2 = var2.length;
                        var7 = 0;
                        var2 = var2 > var7;
                        var16 = true;
                        var10 = true;
                        if(!var2) { _fun0003_ip = 506; continue _fun0003 }
 207:
                        var4 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var2 = 11;
                        var2 = var11[var2];
                        var11 = var4.bind(var8)(var2);
                        var4 = var11.saveGuildIdentityChanges;
                        var2 = _closure2_slot7;
                        var13 = var9 == var2;
                        var2 = undefined;
                        if(var13) { _fun0003_ip = 255; continue _fun0003 }
 246:
                        var13 = _closure2_slot7;
                        var2 = var13.id;
 255:
                        var2 = var4.bind(var11)(var2, var14);
                        SaveGenerator(address=265);
 263:
                        return var2;
 265:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 778; continue _fun0003 }
 274:
                        var4 = var2.ok;
                        if(!var4) { _fun0003_ip = 384; continue _fun0003 }
 283:
                        var15 = var2.body;
                        var4 = _closure2_slot1;
                        if(!(var8 !== var4)) { _fun0003_ip = 384; continue _fun0003 }
 296:
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var4 = 14;
                        var4 = var13[var4];
                        var13 = var11.bind(var8)(var4);
                        var11 = var13.trackUserAvatarUpdated;
                        var4 = {};
                        var4['isGuildProfile'] = var16;
                        var15 = var15.avatar;
                        var4['avatarHash'] = var15;
                        var14 = var14.avatarId;
                        var4['avatarId'] = var14;
                        var14 = _closure2_slot1;
                        var15 = var9 == var14;
                        var14 = undefined;
                        if(var15) { _fun0003_ip = 374; continue _fun0003 }
 364:
                        var15 = _closure2_slot1;
                        var14 = var15.assetOrigin;
 374:
                        var4['avatarAssetOrigin'] = var14;
                        var4 = var11.bind(var13)(var4);
 384:
                        var4 = var9 != var2;
                        if(!var4) { _fun0003_ip = 397; continue _fun0003 }
 391:
                        var4 = var2.ok;
 397:
                        if(var4) { _fun0003_ip = 433; continue _fun0003 }
 400:
                        var13 = var9 == var2;
                        var11 = undefined;
                        if(var13) { _fun0003_ip = 429; continue _fun0003 }
 409:
                        var13 = var2.body;
                        var14 = var9 == var13;
                        var11 = undefined;
                        if(var14) { _fun0003_ip = 429; continue _fun0003 }
 423:
                        var11 = var13.avatar;
 429:
                        var4 = var9 == var11;
 433:
                        if(var4) { _fun0003_ip = 478; continue _fun0003 }
 436:
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var4 = 15;
                        var4 = var13[var4];
                        var13 = var11.bind(var8)(var4);
                        var11 = var13.showGenericGuildProfileUpdateFailureToast;
                        var4 = var2.body;
                        var4 = var4.avatar;
                        var4 = var11.bind(var13)(var4);
 478:
                        var4 = var9 == var2;
                        var11 = undefined;
                        if(var4) { _fun0003_ip = 493; continue _fun0003 }
 487:
                        var11 = var2.ok;
 493:
                        var4 = var9 != var11;
                        if(!var4) { _fun0003_ip = 503; continue _fun0003 }
 500:
                        var4 = var11;
 503:
                        var10 = var4;
 506:
                        var4 = var3.Object;
                        var3 = var4.keys;
                        var3 = var3.bind(var4)(var12);
                        var3 = var3.length;
                        var4 = var10;
                        if(!(var3 > var7)) { _fun0003_ip = 755; continue _fun0003 }
 537:
                        var7 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 16;
                        var3 = var11[var3];
                        var11 = var7.bind(var8)(var3);
                        var7 = var11.saveProfileChanges;
                        var3 = _closure2_slot7;
                        var13 = var9 == var3;
                        var3 = undefined;
                        if(var13) { _fun0003_ip = 585; continue _fun0003 }
 576:
                        var13 = _closure2_slot7;
                        var3 = var13.id;
 585:
                        var3 = var7.bind(var11)(var12, var3);
                        SaveGenerator(address=595);
 593:
                        return var3;
 595:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0003_ip = 775; continue _fun0003 }
 604:
                        if(!(var9 != var3)) { _fun0003_ip = 617; continue _fun0003 }
 608:
                        var7 = var3.ok;
                        if(var7) { _fun0003_ip = 716; continue _fun0003 }
 617:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var7 = 17;
                        var7 = var12[var7];
                        var7 = var11.bind(var8)(var7);
                        var7 = var7.APIError;
                        var11 = var7.prototype;
                        var11 = Object.create(var11, {constructor: {value: var7}});
                        var19 = var11;
                        var18 = var3;
                        var7 = new var19[var7](var18, var17);
                        var12 = var7 instanceof Object ? var7 : var11;
                        var11 = var12.getFirstFieldErrorMessage;
                        var7 = 'banner';
                        var11 = var11.bind(var12)(var7);
                        if(!(var9 != var11)) { _fun0003_ip = 716; continue _fun0003 }
 685:
                        var7 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var6 = 15;
                        var6 = var12[var6];
                        var7 = var7.bind(var8)(var6);
                        var6 = var7.showGenericGuildProfileUpdateFailureToast;
                        var6 = var6.bind(var7)(var11);
 716:
                        var6 = var10;
                        var7 = undefined;
                        if(!var10) { _fun0003_ip = 746; continue _fun0003 }
 724:
                        var10 = var9 == var3;
                        var8 = undefined;
                        if(var10) { _fun0003_ip = 739; continue _fun0003 }
 733:
                        var8 = var3.ok;
 739:
                        var6 = var9 != var8;
                        var7 = var8;
 746:
                        if(!var6) { _fun0003_ip = 752; continue _fun0003 }
 749:
                        var6 = var7;
 752:
                        var4 = var6;
 755:
                        if(!var4) { _fun0003_ip = 772; continue _fun0003 }
 758:
                        var6 = _closure2_slot10;
                        var5 = var6.delay;
                        var5 = var5.bind(var6)();
 772:
                        return var4;
 775:
                        return var3;
 778:
                        return var2;
 781:
                        var2 = undefined;
                        return var2;
 786:
                        return var1;
                    }
                };
                return var1;
            };
            var12 = var12.bind(var9)(var11);
            var11 = new Array(12);
            var11[0] = var10;
            var11[1] = var24;
            var11[2] = var23;
            var11[3] = var22;
            var11[4] = var21;
            var11[5] = var20;
            var11[6] = var19;
            var11[7] = var18;
            var11[8] = var17;
            var11[9] = var16;
            var17 = var5 == var2;
            var16 = undefined;
            if(var17) { _fun0001_ip = 543; continue _fun0001 }
 538:
            var16 = var2.id;
 543:
            var11[10] = var16;
            var11[11] = var15;
            var11 = var13.bind(var14)(var12, var11);
            var1['handleSubmit'] = var11;
            var1['isDisabled'] = var10;
            var1['isSubmitting'] = var8;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 11;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var7 = var7.resetAllPending;
            var1['resetPending'] = var7;
            var28 = var1;
            var27 = var6;
            var6 = copyDataProperties(var28, var27);
            if(!(var5 != var2)) { _fun0001_ip = 620; continue _fun0001 }
 617:
            var4 = var2;
 620:
            var2 = 'guild';
            var1[var2] = var4;
            var2 = 'errors';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['default'] = var2;
    var2 = 200;
    var3['RESET_DELAY_MS'] = var2;
    return var1;
})();