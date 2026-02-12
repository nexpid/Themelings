// app/modules/age_assurance/AgeVerificationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var11;
    var5 = function isAgeVerified() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot9;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = null;
            var1 = var3 == var4;
            var5 = undefined;
            var7 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var4.ageVerificationStatus;
case 2:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 13;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.UNVERIFIED;
            var1 = var7 !== var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var3 == var4;
            var3 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4.ageVerificationStatus;
case 6:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AgeVerificationStatusUkAndAusOnly;
            var2 = var2.CLIENT_ONLY_PENDING;
            var1 = var3 !== var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var4 = function useIsAgeVerified() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var3.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var4.bind(var6)(var3, var1);
            var3 = null;
            var1 = var3 == var4;
            var7 = undefined;
            if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = var4.ageVerificationStatus;
case 8:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 13;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.UNVERIFIED;
            var1 = var7 !== var1;
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var7 = var3 == var4;
            var3 = undefined;
            if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = var4.ageVerificationStatus;
case 12:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AgeVerificationStatusUkAndAusOnly;
            var2 = var2.CLIENT_ONLY_PENDING;
            var1 = var3 !== var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var6 = global;
    var12 = var6.Object;
    var9 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var11[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var11[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var9 = var11[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var9);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var11[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var11[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var11[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var11[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var11[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var7 = var7.FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS;
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var7 = var7.MessageEmbedTypes;
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var7 = var7.AgeGateSource;
    var8 = 11;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var8 = var8.SafetyToastType;
    var _closure1_slot13 = var8;
    var12 = var6.Set;
    var9 = 12;
    var8 = var11[var9];
    var8 = var10.bind(var1)(var8);
    var8 = var8.AgeVerificationModalEntryPoint;
    var13 = var8.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT;
    var8 = new Array(3);
    var8[0] = var13;
    var13 = var11[var9];
    var13 = var10.bind(var1)(var13);
    var13 = var13.AgeVerificationModalEntryPoint;
    var13 = var13.START_STAGE_PROMPT;
    var8[1] = var13;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.AgeVerificationModalEntryPoint;
    var9 = var9.STAGE_CHANNEL_RAISE_HAND;
    var8[2] = var9;
    var9 = var12.prototype;
    var9 = Object.create(var9, {constructor: {value: var12}});
    var17 = var9;
    var16 = var8;
    var8 = new var17[var12](var16, var15);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot14 = var8;
    var8 = var6.Set;
    var9 = var7.NSFW_SERVER;
    var6 = new Array(6);
    var6[0] = var9;
    var9 = var7.NSFW_SERVER_INVITE;
    var6[1] = var9;
    var9 = var7.NSFW_SERVER_INVITE_EMBED;
    var6[2] = var9;
    var9 = var7.LARGE_GUILD;
    var6[3] = var9;
    var9 = var7.JOIN_LARGE_GUILD_UNDERAGE;
    var6[4] = var9;
    var7 = var7.ACCESS_LARGE_GUILD_UNDERAGE;
    var6[5] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var17 = var7;
    var16 = var6;
    var6 = new var17[var8](var16, var15);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot15 = var6;
    var8 = {};
    var6 = 'ctas';
    var8['CTAS'] = var6;
    var6 = 'content_type';
    var8['CONTENT_TYPE'] = var6;
    var _closure1_slot16 = var8;
    var7 = {};
    var6 = 'retry';
    var7['RETRY'] = var6;
    var _closure1_slot17 = var7;
    var6 = {};
    var9 = 'verified_adult';
    var6['VERIFIED_ADULT'] = var9;
    var9 = 'verified_teen';
    var6['VERIFIED_TEEN'] = var9;
    var9 = 'error';
    var6['ERROR'] = var9;
    var9 = 27;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/age_assurance/AgeVerificationUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function(arg1) {
        var3 = _closure1_slot15;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['ageGateSourceHasLightboxBackdrop'] = var9;
    var9 = function shouldShowTiggerPawtect() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot9;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var5 = var2 == var3;
            var4 = undefined;
            var2 = undefined;
            if(var5) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var2 = var3.ageVerificationStatus;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var2 !== var1;
            return var1;
        }
    };
    var3['shouldShowTiggerPawtect'] = var9;
    var9 = function useShouldShowTiggerPawtect() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var6)(var3, var2);
            var2 = null;
            var5 = var2 == var3;
            var2 = undefined;
            if(var5) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var2 = var3.ageVerificationStatus;
case 8:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var2 !== var1;
            return var1;
        }
    };
    var3['useShouldShowTiggerPawtect'] = var9;
    var9 = function isVerifiedTeen() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot9;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var5 = var2 == var3;
            var4 = undefined;
            var2 = undefined;
            if(var5) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var2 = var3.ageVerificationStatus;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_TEEN;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isVerifiedTeen'] = var9;
    var9 = function useIsVerifiedTeen() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var6)(var3, var2);
            var2 = null;
            var5 = var2 == var3;
            var2 = undefined;
            if(var5) { _fun0006_ip = 8; continue _fun0006 }
case 9:
            var2 = var3.ageVerificationStatus;
case 8:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_TEEN;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['useIsVerifiedTeen'] = var9;
    var9 = function isVerifiedAdult() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot9;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var5 = var2 == var3;
            var4 = undefined;
            var2 = undefined;
            if(var5) { _fun0007_ip = 2; continue _fun0007 }
case 3:
            var2 = var3.ageVerificationStatus;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isVerifiedAdult'] = var9;
    var9 = function useIsVerifiedAdult() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var6)(var3, var2);
            var2 = null;
            var5 = var2 == var3;
            var2 = undefined;
            if(var5) { _fun0008_ip = 8; continue _fun0008 }
case 9:
            var2 = var3.ageVerificationStatus;
case 8:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['useIsVerifiedAdult'] = var9;
    var9 = function isAssignedByDiscord() {
        var1 = false;
        return var1;
    };
    var3['isAssignedByDiscord'] = var9;
    var9 = function useIsAssignedByDiscord() {
        var1 = false;
        return var1;
    };
    var3['useIsAssignedByDiscord'] = var9;
    var9 = function useShowAssignedAgeGroupSettings() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var1 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
            var2 = var3.useIsFeatureAgeGated;
            var1 = 16;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.REACTIVE_CHECK;
            var1 = var2.bind(var3)(var1);
            if(!var1) { _fun0009_ip = 14; continue _fun0009 }
case 15:
            var1 = false;
case 14:
            return var1;
        }
    };
    var3['useShowAssignedAgeGroupSettings'] = var9;
    var3['AgeVerificationSystemNotificationEmbedKeys'] = var8;
    var3['AgeVerificationSystemNotificationCtaTypes'] = var7;
    var3['AgeVerificationSystemNotificationContentType'] = var6;
    var6 = function isAgeVerificationMessageWithRetryCta(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = _closure1_slot8;
            var4 = var5.getMessage;
            var3 = arg1;
            var1 = arg2;
            var3 = var4.bind(var5)(var3, var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0010_ip = 16; continue _fun0010 }
case 17:
            var4 = var3.embeds;
            if(!(var1 != var4)) { _fun0010_ip = 16; continue _fun0010 }
case 18:
            var4 = var3.embeds;
            var5 = var4.length;
            var4 = 0;
            if(!(var4 !== var5)) { _fun0010_ip = 16; continue _fun0010 }
case 19:
            var5 = var3.embeds;
            var5 = var5[var4];
            var5 = var5.fields;
            if(!(var1 != var5)) { _fun0010_ip = 16; continue _fun0010 }
case 20:
            var5 = var3.embeds;
            var5 = var5[var4];
            var6 = var5.type;
            var5 = _closure1_slot12;
            var5 = var5.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
            if(!(var6 === var5)) { _fun0010_ip = 16; continue _fun0010 }
case 21:
            var3 = var3.embeds;
            var3 = var3[var4];
            var5 = var3.fields;
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure1_slot16;
                var1 = var1.CTAS;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = var1 == var3;
            var1 = undefined;
            if(var4) { _fun0010_ip = 22; continue _fun0010 }
case 23:
            var5 = var3.rawValue;
            var4 = var5.split;
            var3 = ',';
            var4 = var4.bind(var5)(var3);
            var3 = var4.includes;
            var2 = _closure1_slot17;
            var2 = var2.RETRY;
            var1 = var3.bind(var4)(var2);
case 22:
            return var1;
case 16:
            var1 = false;
            return var1;
        }
    };
    var3['isAgeVerificationMessageWithRetryCta'] = var6;
    var3['isAgeVerified'] = var5;
    var3['useIsAgeVerified'] = var4;
    var4 = function useInitiateAgeVerification(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var10 = var3.onComplete;
            var _closure2_slot0 = var10;
            var6 = var3.entryPoint;
            var _closure2_slot1 = var6;
            var13 = var3.isRetry;
            var2 = undefined;
            if(!(var13 === var2)) { _fun0011_ip = 24; continue _fun0011 }
case 25:
            var13 = false;
case 24:
            var _closure2_slot2 = var13;
            var12 = var3.visibleContent;
            if(!(var12 === var2)) { _fun0011_ip = 26; continue _fun0011 }
case 27:
            var12 = null;
case 26:
            var _closure2_slot3 = var12;
            var8 = var3.shouldShowExpressiveModal;
            if(!(var8 === var2)) { _fun0011_ip = 28; continue _fun0011 }
case 29:
            var8 = false;
case 28:
            var _closure2_slot4 = var8;
            var7 = var3.classificationId;
            if(!(var7 === var2)) { _fun0011_ip = 20; continue _fun0011 }
case 30:
            var7 = null;
case 20:
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var2;
            var _closure2_slot7 = var2;
            var _closure2_slot8 = var2;
            var _closure2_slot9 = var2;
            var11 = _closure1_slot5;
            var4 = var11.useState;
            var3 = false;
            var9 = var4.bind(var11)(var3);
            var4 = _closure1_slot4;
            var3 = 2;
            var9 = var4.bind(var2)(var9, var3);
            var3 = 0;
            var3 = var9[var3];
            var4 = 1;
            var4 = var9[var4];
            _closure2_slot6 = var4;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 14;
            var4 = var14[var4];
            var15 = var9.bind(var2)(var4);
            var14 = var15.useStateFromStores;
            var4 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var14.bind(var15)(var9, var4);
            var9 = var11.useRef;
            var4 = null;
            var15 = var4 == var14;
            var4 = undefined;
            if(var15) { _fun0011_ip = 31; continue _fun0011 }
case 32:
            var4 = var14.ageVerificationStatus;
case 31:
            var4 = var9.bind(var11)(var4);
            var14 = var4.current;
            _closure2_slot7 = var14;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 17;
            var4 = var11[var4];
            var9 = var9.bind(var2)(var4);
            var4 = var9.useIsSuspendedUser;
            var4 = var4.bind(var9)();
            _closure2_slot8 = var4;
            var5 = _closure1_slot5;
            var11 = var5.useCallback;
            var9 = new Array(4);
            var9[0] = var14;
            var9[1] = var13;
            var9[2] = var12;
            var9[3] = var4;
            var4 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var5 = 'CLOSE_AGE_VERIFICATION_MODAL';
                    var3['type'] = var5;
                    var7 = _closure2_slot7;
                    var3['status'] = var7;
                    var3 = var4.bind(var6)(var3);
                    var3 = _closure2_slot2;
                    if(var3) { _fun0012_ip = 29; continue _fun0012 }
case 14:
                    var3 = _closure2_slot8;
case 29:
                    if(var3) { _fun0012_ip = 33; continue _fun0012 }
case 8:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 19;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.maybeOpenAgeVerificationUserFeedback;
                    var2 = {};
                    var6 = 'age_verification_intro_screen';
                    var2['location'] = var6;
                    var5 = _closure2_slot3;
                    var2['visibleContent'] = var5;
                    var2 = var3.bind(var4)(var2);
case 33:
                    return var1;
                }
            };
            var9 = var11.bind(var5)(var4, var9);
            _closure2_slot9 = var9;
            var4 = var5.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0013_ip = 34; continue _fun0013 }
case 35:
                            var8 = arg1;
                            var4 = _closure2_slot6;
                            var5 = undefined;
                            var2 = true;
                            var2 = var4.bind(var5)(var2);
case 3: // try_start_0 // try_start_1
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 18;
                            var2 = var7[var2];
                            var9 = var6.bind(var5)(var2);
                            var6 = var9.dispatch;
                            var2 = {};
                            var10 = 'INITIATE_AGE_VERIFICATION';
                            var2['type'] = var10;
                            var2 = var6.bind(var9)(var2);
                            var6 = _closure1_slot0;
                            var2 = 20;
                            var2 = var7[var2];
                            var7 = var6.bind(var5)(var2);
                            var6 = var7.requestAgeVerification;
                            var2 = {};
                            var2['method'] = var8;
                            var9 = _closure2_slot5;
                            var8 = null;
                            var9 = var8 != var9;
                            var8 = undefined;
                            if(!var9) { _fun0013_ip = 4; continue _fun0013 }
case 36:
                            var8 = _closure2_slot5;
case 4:
                            var2['classificationId'] = var8;
                            var2 = var6.bind(var7)(var2);
                            SaveGenerator(address=136);
case 37:
                            return var2;
case 38:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0013_ip = 39; continue _fun0013 }
case 40:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 21;
                            var4 = var7[var4];
                            var7 = var6.bind(var5)(var4);
                            var6 = var7.showAgeVerification;
                            var4 = {};
                            var8 = var2.verification_webview_url;
                            var4['webviewUrl'] = var8;
                            var8 = var2.verification_request_id;
                            var4['verificationRequestId'] = var8;
                            var8 = var2.verification_vendor_name;
                            var4['verificationVendorName'] = var8;
                            var8 = _closure2_slot0;
                            var4['onComplete'] = var8;
                            var8 = _closure2_slot9;
                            var4['onClose'] = var8;
                            var8 = _closure2_slot9;
                            var4['onCancel'] = var8;
                            var8 = _closure2_slot1;
                            var4['entryPoint'] = var8;
                            var8 = _closure2_slot4;
                            var4['shouldShowExpressiveModal'] = var8;
                            var4 = var6.bind(var7)(var4);
case 41: // try_end0
                            _fun0013_ip = 42; continue _fun0013;
case 39: // try_end1
                            var6 = _closure2_slot6;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 43: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=1);
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 22;
                            var4 = var7[var4];
                            var6 = var6.bind(var5)(var4);
                            var4 = var6.showFailedToast;
                            var2 = _closure1_slot13;
                            var2 = var2.TIGGER_PAWTECT_ERROR;
                            var2 = var4.bind(var6)(var2);
                            var2 = _closure2_slot9;
                            var2 = var2.bind(var5)();
case 42: // try_end2
                            var4 = _closure2_slot6;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
                            return var5;
case 44: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot6;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 34:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var2 = var1.bind(var2)();
            var1 = new Array(5);
            var1[0] = var10;
            var1[1] = var9;
            var1[2] = var8;
            var1[3] = var7;
            var1[4] = var6;
            var2 = var4.bind(var5)(var2, var1);
            var1 = {};
            var1['loading'] = var3;
            var1['initiateAgeVerification'] = var2;
            return var1;
        }
    };
    var3['useInitiateAgeVerification'] = var4;
    var4 = function useWatchAgeVerificationStatusChange(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 14;
            var4 = var11[var7];
            var1 = undefined;
            var9 = var10.bind(var1)(var4);
            var6 = var9.useStateFromStores;
            var4 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0015_ip = 45; continue _fun0015 }
case 46:
                    var1 = var2.ageVerificationStatus;
case 45:
                    return var1;
                }
            };
            var9 = var6.bind(var9)(var5, var4);
            var5 = _closure1_slot1;
            var4 = 23;
            var4 = var11[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.bind(var1)(var9);
            var4 = var11[var7];
            var14 = var10.bind(var1)(var4);
            var13 = var14.useStateFromStores;
            var4 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var4;
            var5 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getSuspendedUserToken;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var5 = var13.bind(var14)(var12, var5);
            var7 = var11[var7];
            var11 = var10.bind(var1)(var7);
            var10 = var11.useStateFromStores;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isAuthenticated;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var10.bind(var11)(var7, var4);
            var10 = null;
            var7 = var10 != var6;
            if(!var7) { _fun0014_ip = 47; continue _fun0014 }
case 48:
            var7 = var10 != var9;
case 47:
            if(!var7) { _fun0014_ip = 49; continue _fun0014 }
case 50:
            var7 = var6 !== var9;
case 49:
            var _closure2_slot1 = var7;
            var6 = !var5;
            if(!var6) { _fun0014_ip = 51; continue _fun0014 }
case 52:
            var6 = !var4;
case 51:
            var _closure2_slot2 = var6;
            var5 = _closure1_slot5;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0016_ip = 53; continue _fun0016 }
case 35:
                    var2 = _closure2_slot2;
case 53:
                    if(!var2) { _fun0016_ip = 46; continue _fun0016 }
case 54:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useWatchAgeVerificationStatusChange'] = var4;
    var4 = function isFullscreenAgeVerificationEntryPoint(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0017_ip = 3; continue _fun0017 }
case 55:
            var3 = _closure1_slot11;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 3:
            return var1;
        }
    };
    var3['isFullscreenAgeVerificationEntryPoint'] = var4;
    var4 = function getAgeVerificationGetStartedTitle(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var4 = _closure1_slot14;
            var3 = var4.has;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var1) { _fun0018_ip = 56; continue _fun0018 }
case 17:
            var1 = 25;
            var1 = var7[var1];
            var9 = undefined;
            var4 = var6.bind(var9)(var1);
            var3 = var4.getUpdatedAgeVerificationString;
            var1 = 24;
            var2 = var7[var1];
            var2 = var6.bind(var9)(var2);
            var8 = var2.intl;
            var5 = var8.string;
            var2 = var7[var1];
            var2 = var6.bind(var9)(var2);
            var2 = var2.t;
            var2 = var2.JHNunj;
            var2 = var5.bind(var8)(var2);
            var5 = var7[var1];
            var5 = var6.bind(var9)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var1 = var7[var1];
            var1 = var6.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.xYXsr6;
            var1 = var5.bind(var8)(var1);
            var1 = var3.bind(var4)(var2, var1);
            _fun0018_ip = 57; continue _fun0018;
case 56:
            var2 = 24;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.lSWVTM;
            var1 = var3.bind(var4)(var2);
case 57:
            return var1;
        }
    };
    var3['getAgeVerificationGetStartedTitle'] = var4;
    var4 = function getAgeVerificationGetStartedSubtitle(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var8 = arg2;
            var1 = arguments[2];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0019_ip = 53; continue _fun0019 }
case 55:
            var1 = false;
case 53:
            var5 = _closure1_slot14;
            var4 = var5.has;
            var3 = arg1;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0019_ip = 58; continue _fun0019 }
case 59:
            if(var1) { _fun0019_ip = 60; continue _fun0019 }
case 61:
            var1 = null;
            if(!(var1 == var8)) { _fun0019_ip = 62; continue _fun0019 }
case 26:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 25;
            var1 = var11[var1];
            var5 = var10.bind(var6)(var1);
            var4 = var5.getUpdatedAgeVerificationString;
            var1 = 24;
            var3 = var11[var1];
            var3 = var10.bind(var6)(var3);
            var9 = var3.intl;
            var7 = var9.string;
            var3 = var11[var1];
            var3 = var10.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.+BLIGh;
            var3 = var7.bind(var9)(var3);
            var7 = var11[var1];
            var7 = var10.bind(var6)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var1 = var11[var1];
            var1 = var10.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.HxS3oQ;
            var1 = var7.bind(var9)(var1);
            var1 = var4.bind(var5)(var3, var1);
            _fun0019_ip = 63; continue _fun0019;
case 62:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 24;
            var3 = var9[var3];
            var3 = var4.bind(var6)(var3);
            var7 = var3.intl;
            var5 = var7.format;
            var4 = _closure1_slot1;
            var3 = 26;
            var3 = var9[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.RpMIT0;
            var3 = {};
            var3['handleOnHelpUrlHook'] = var8;
            var1 = var5.bind(var7)(var4, var3);
case 63:
            _fun0019_ip = 64; continue _fun0019;
case 60:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 25;
            var3 = var11[var3];
            var7 = var9.bind(var6)(var3);
            var5 = var7.getUpdatedAgeVerificationString;
            var8 = 24;
            var3 = var11[var8];
            var3 = var9.bind(var6)(var3);
            var13 = var3.intl;
            var12 = var13.string;
            var10 = _closure1_slot1;
            var3 = 26;
            var4 = var11[var3];
            var4 = var10.bind(var6)(var4);
            var4 = var4.1/6wta;
            var4 = var12.bind(var13)(var4);
            var8 = var11[var8];
            var8 = var9.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var11[var3];
            var3 = var10.bind(var6)(var3);
            var3 = var3.h7qzoa;
            var3 = var8.bind(var9)(var3);
            var1 = var5.bind(var7)(var4, var3);
case 64:
            _fun0019_ip = 65; continue _fun0019;
case 58:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 24;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.S/xS/w;
            var1 = var3.bind(var4)(var2);
case 65:
            return var1;
        }
    };
    var3['getAgeVerificationGetStartedSubtitle'] = var4;
    var4 = function useShouldCallReactiveCheck() {
        var3 = _closure1_slot19;
        var5 = undefined;
        var6 = var3.bind(var5)();
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 14;
        var3 = var7[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot10;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot6;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = !var2;
                if(var2) { _fun0020_ip = 30; continue _fun0020 }
case 66:
                var5 = _closure1_slot6;
                var4 = var5.isFeatureAgeGated;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 16;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.AgeGatedFeature;
                var2 = var2.REACTIVE_CHECK;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0020_ip = 67; continue _fun0020 }
case 68:
                var4 = _closure1_slot10;
                var3 = var4.shouldCallReactiveCheck;
                var2 = var3.bind(var4)();
case 67:
                var1 = var2;
case 30:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useShouldCallReactiveCheck'] = var4;
    var2 = function shouldCallReactiveCheck() {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = _closure1_slot18;
            var7 = undefined;
            var2 = var1.bind(var7)();
            var1 = !var2;
            if(var2) { _fun0021_ip = 69; continue _fun0021 }
case 70:
            var5 = _closure1_slot6;
            var4 = var5.isFeatureAgeGated;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.AgeGatedFeature;
            var2 = var2.REACTIVE_CHECK;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0021_ip = 7; continue _fun0021 }
case 29:
            var4 = _closure1_slot10;
            var3 = var4.shouldCallReactiveCheck;
            var2 = var3.bind(var4)();
case 7:
            var1 = var2;
case 69:
            return var1;
        }
    };
    var3['shouldCallReactiveCheck'] = var2;
    return var1;
})();