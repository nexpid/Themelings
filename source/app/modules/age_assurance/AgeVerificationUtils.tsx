// app/modules/age_assurance/AgeVerificationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var9;
    var4 = global;
    var10 = var4.Object;
    var7 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var9[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var7 = var9[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var7);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.MessageEmbedTypes;
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.AgeGateSource;
    var6 = 9;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.SafetyToastType;
    var _closure1_slot11 = var6;
    var6 = var4.Set;
    var7 = var5.NSFW_SERVER;
    var4 = new Array(6);
    var4[0] = var7;
    var7 = var5.NSFW_SERVER_INVITE;
    var4[1] = var7;
    var7 = var5.NSFW_SERVER_INVITE_EMBED;
    var4[2] = var7;
    var7 = var5.LARGE_GUILD;
    var4[3] = var7;
    var7 = var5.JOIN_LARGE_GUILD_UNDERAGE;
    var4[4] = var7;
    var5 = var5.ACCESS_LARGE_GUILD_UNDERAGE;
    var4[5] = var5;
    var5 = var6.prototype;
    var5 = Object.create(var5, {constructor: {value: var6}});
    var14 = var5;
    var13 = var4;
    var4 = new var14[var6](var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot12 = var4;
    var6 = {};
    var4 = 'ctas';
    var6['CTAS'] = var4;
    var4 = 'content_type';
    var6['CONTENT_TYPE'] = var4;
    var _closure1_slot13 = var6;
    var5 = {};
    var4 = 'retry';
    var5['RETRY'] = var4;
    var _closure1_slot14 = var5;
    var4 = {};
    var7 = 'verified_adult';
    var4['VERIFIED_ADULT'] = var7;
    var7 = 'verified_teen';
    var4['VERIFIED_TEEN'] = var7;
    var7 = 'error';
    var4['ERROR'] = var7;
    var7 = 18;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/age_assurance/AgeVerificationUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function(arg1) {
        var3 = _closure1_slot12;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['ageGateSourceHasLightboxBackdrop'] = var7;
    var7 = function shouldShowTiggerPawtect() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot8;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var5 = var2 == var3;
            var4 = undefined;
            var2 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.ageVerificationStatus;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var2 !== var1;
            return var1;
        }
    };
    var3['shouldShowTiggerPawtect'] = var7;
    var7 = function useShouldShowTiggerPawtect() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var6)(var3, var2);
            var2 = null;
            var5 = var2 == var3;
            var2 = undefined;
            if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = var3.ageVerificationStatus;
case 4:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var2 !== var1;
            return var1;
        }
    };
    var3['useShouldShowTiggerPawtect'] = var7;
    var7 = function isVerifiedTeen() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot8;
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
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_TEEN;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isVerifiedTeen'] = var7;
    var7 = function useIsVerifiedTeen() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var6)(var3, var2);
            var2 = null;
            var5 = var2 == var3;
            var2 = undefined;
            if(var5) { _fun0004_ip = 4; continue _fun0004 }
case 5:
            var2 = var3.ageVerificationStatus;
case 4:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_TEEN;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['useIsVerifiedTeen'] = var7;
    var7 = function isVerifiedAdult() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot8;
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
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isVerifiedAdult'] = var7;
    var7 = function useIsVerifiedAdult() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var6)(var3, var2);
            var2 = null;
            var5 = var2 == var3;
            var2 = undefined;
            if(var5) { _fun0006_ip = 4; continue _fun0006 }
case 5:
            var2 = var3.ageVerificationStatus;
case 4:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['useIsVerifiedAdult'] = var7;
    var3['AgeVerificationSystemNotificationEmbedKeys'] = var6;
    var3['AgeVerificationSystemNotificationCtaTypes'] = var5;
    var3['AgeVerificationSystemNotificationContentType'] = var4;
    var4 = function isAgeVerificationMessageWithRetryCta(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = _closure1_slot7;
            var4 = var5.getMessage;
            var3 = arg1;
            var1 = arg2;
            var3 = var4.bind(var5)(var3, var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 6; continue _fun0007 }
case 7:
            var4 = var3.embeds;
            if(!(var1 != var4)) { _fun0007_ip = 6; continue _fun0007 }
case 8:
            var4 = var3.embeds;
            var5 = var4.length;
            var4 = 0;
            if(!(var4 !== var5)) { _fun0007_ip = 6; continue _fun0007 }
case 9:
            var5 = var3.embeds;
            var5 = var5[var4];
            var5 = var5.fields;
            if(!(var1 != var5)) { _fun0007_ip = 6; continue _fun0007 }
case 10:
            var5 = var3.embeds;
            var5 = var5[var4];
            var6 = var5.type;
            var5 = _closure1_slot10;
            var5 = var5.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
            if(!(var6 === var5)) { _fun0007_ip = 6; continue _fun0007 }
case 11:
            var3 = var3.embeds;
            var3 = var3[var4];
            var5 = var3.fields;
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure1_slot13;
                var1 = var1.CTAS;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = var1 == var3;
            var1 = undefined;
            if(var4) { _fun0007_ip = 12; continue _fun0007 }
case 13:
            var5 = var3.rawValue;
            var4 = var5.split;
            var3 = ',';
            var4 = var4.bind(var5)(var3);
            var3 = var4.includes;
            var2 = _closure1_slot14;
            var2 = var2.RETRY;
            var1 = var3.bind(var4)(var2);
case 12:
            return var1;
case 6:
            var1 = false;
            return var1;
        }
    };
    var3['isAgeVerificationMessageWithRetryCta'] = var4;
    var4 = function isAgeVerified() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot8;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = null;
            var1 = var3 == var4;
            var5 = undefined;
            var7 = undefined;
            if(var1) { _fun0008_ip = 2; continue _fun0008 }
case 3:
            var7 = var4.ageVerificationStatus;
case 2:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 10;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.UNVERIFIED;
            var1 = var7 !== var1;
            if(!var1) { _fun0008_ip = 14; continue _fun0008 }
case 15:
            var7 = var3 == var4;
            var3 = undefined;
            if(var7) { _fun0008_ip = 16; continue _fun0008 }
case 17:
            var3 = var4.ageVerificationStatus;
case 16:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AgeVerificationStatusUkAndAusOnly;
            var2 = var2.CLIENT_ONLY_PENDING;
            var1 = var3 !== var2;
case 14:
            return var1;
        }
    };
    var3['isAgeVerified'] = var4;
    var4 = function useIsAgeVerified() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var3.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var4.bind(var6)(var3, var1);
            var3 = null;
            var1 = var3 == var4;
            var7 = undefined;
            if(var1) { _fun0009_ip = 4; continue _fun0009 }
case 5:
            var7 = var4.ageVerificationStatus;
case 4:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 10;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.UNVERIFIED;
            var1 = var7 !== var1;
            if(!var1) { _fun0009_ip = 13; continue _fun0009 }
case 18:
            var7 = var3 == var4;
            var3 = undefined;
            if(var7) { _fun0009_ip = 19; continue _fun0009 }
case 20:
            var3 = var4.ageVerificationStatus;
case 19:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AgeVerificationStatusUkAndAusOnly;
            var2 = var2.CLIENT_ONLY_PENDING;
            var1 = var3 !== var2;
case 13:
            return var1;
        }
    };
    var3['useIsAgeVerified'] = var4;
    var4 = function useInitiateAgeVerification(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var8 = arg1;
            var10 = arguments[1];
            var4 = arguments[2];
            var6 = arguments[3];
            var _closure2_slot0 = var8;
            var2 = undefined;
            if(!(var10 === var2)) { _fun0010_ip = 21; continue _fun0010 }
case 22:
            var10 = false;
case 21:
            var _closure2_slot1 = var10;
            if(!(var4 === var2)) { _fun0010_ip = 23; continue _fun0010 }
case 7:
            var4 = null;
case 23:
            var _closure2_slot2 = var4;
            if(!(var6 === var2)) { _fun0010_ip = 24; continue _fun0010 }
case 25:
            var6 = false;
case 24:
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var2;
            var _closure2_slot5 = var2;
            var _closure2_slot6 = var2;
            var11 = _closure1_slot5;
            var7 = var11.useState;
            var3 = false;
            var9 = var7.bind(var11)(var3);
            var7 = _closure1_slot4;
            var3 = 2;
            var9 = var7.bind(var2)(var9, var3);
            var3 = 0;
            var3 = var9[var3];
            var7 = 1;
            var7 = var9[var7];
            _closure2_slot4 = var7;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 11;
            var7 = var12[var7];
            var13 = var9.bind(var2)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var12.bind(var13)(var9, var7);
            var9 = var11.useRef;
            var7 = null;
            var13 = var7 == var12;
            var7 = undefined;
            if(var13) { _fun0010_ip = 26; continue _fun0010 }
case 27:
            var7 = var12.ageVerificationStatus;
case 26:
            var7 = var9.bind(var11)(var7);
            var11 = var7.current;
            _closure2_slot5 = var11;
            var5 = _closure1_slot5;
            var9 = var5.useCallback;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var10;
            var7[2] = var4;
            var4 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var5 = 'CLOSE_AGE_VERIFICATION_MODAL';
                    var3['type'] = var5;
                    var7 = _closure2_slot5;
                    var3['status'] = var7;
                    var3 = var4.bind(var6)(var3);
                    var3 = _closure2_slot1;
                    if(var3) { _fun0011_ip = 28; continue _fun0011 }
case 29:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.maybeOpenAgeVerificationUserFeedback;
                    var2 = {};
                    var6 = 'age_verification_intro_screen';
                    var2['location'] = var6;
                    var5 = _closure2_slot2;
                    var2['visibleContent'] = var5;
                    var2 = var3.bind(var4)(var2);
case 28:
                    return var1;
                }
            };
            var7 = var9.bind(var5)(var4, var7);
            _closure2_slot6 = var7;
            var4 = var5.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0012_ip = 30; continue _fun0012 }
case 31:
                            var8 = arg1;
                            var2 = arg2;
                            var6 = _closure2_slot4;
                            var5 = undefined;
                            var4 = true;
                            var4 = var6.bind(var5)(var4);
case 32: // try_start_0 // try_start_1
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var6 = 12;
                            var6 = var9[var6];
                            var10 = var7.bind(var5)(var6);
                            var7 = var10.dispatch;
                            var6 = {};
                            var11 = 'INITIATE_AGE_VERIFICATION';
                            var6['type'] = var11;
                            var6 = var7.bind(var10)(var6);
                            var7 = _closure1_slot0;
                            var6 = 14;
                            var6 = var9[var6];
                            var7 = var7.bind(var5)(var6);
                            var6 = var7.initiateVerification;
                            var2 = var6.bind(var7)(var2);
                            SaveGenerator(address=108);
case 33:
                            return var2;
case 34:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0012_ip = 6; continue _fun0012 }
case 35:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 15;
                            var4 = var7[var4];
                            var7 = var6.bind(var5)(var4);
                            var6 = var7.showAgeVerification;
                            var4 = {};
                            var9 = var2.verification_webview_url;
                            var4['webviewUrl'] = var9;
                            var9 = _closure2_slot0;
                            var4['onComplete'] = var9;
                            var9 = _closure2_slot6;
                            var4['onClose'] = var9;
                            var9 = _closure2_slot6;
                            var4['onCancel'] = var9;
                            var4['entryPoint'] = var8;
                            var8 = _closure2_slot3;
                            var4['shouldShowExpressiveModal'] = var8;
                            var4 = var6.bind(var7)(var4);
case 12: // try_end0
                            _fun0012_ip = 36; continue _fun0012;
case 6: // try_end1
                            var6 = _closure2_slot4;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 37: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=1);
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 16;
                            var4 = var7[var4];
                            var6 = var6.bind(var5)(var4);
                            var4 = var6.showFailedToast;
                            var2 = _closure1_slot11;
                            var2 = var2.TIGGER_PAWTECT_ERROR;
                            var2 = var4.bind(var6)(var2);
                            var2 = _closure2_slot6;
                            var2 = var2.bind(var5)();
case 36: // try_end2
                            var4 = _closure2_slot4;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
                            return var5;
case 38: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot4;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 30:
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
            var1 = new Array(3);
            var1[0] = var8;
            var1[1] = var7;
            var1[2] = var6;
            var2 = var4.bind(var5)(var2, var1);
            var1 = {};
            var1['loading'] = var3;
            var1['initiateAgeVerification'] = var2;
            return var1;
        }
    };
    var3['useInitiateAgeVerification'] = var4;
    var4 = function useWatchAgeVerificationStatusChange(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 11;
            var4 = var11[var7];
            var1 = undefined;
            var9 = var10.bind(var1)(var4);
            var6 = var9.useStateFromStores;
            var4 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0014_ip = 39; continue _fun0014 }
case 40:
                    var1 = var2.ageVerificationStatus;
case 39:
                    return var1;
                }
            };
            var9 = var6.bind(var9)(var5, var4);
            var5 = _closure1_slot1;
            var4 = 17;
            var4 = var11[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.bind(var1)(var9);
            var4 = var11[var7];
            var14 = var10.bind(var1)(var4);
            var13 = var14.useStateFromStores;
            var4 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var4;
            var5 = function() {
                var2 = _closure1_slot6;
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
                var2 = _closure1_slot6;
                var1 = var2.isAuthenticated;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var10.bind(var11)(var7, var4);
            var10 = null;
            var7 = var10 != var6;
            if(!var7) { _fun0013_ip = 41; continue _fun0013 }
case 42:
            var7 = var10 != var9;
case 41:
            if(!var7) { _fun0013_ip = 43; continue _fun0013 }
case 44:
            var7 = var6 !== var9;
case 43:
            var _closure2_slot1 = var7;
            var6 = !var5;
            if(!var6) { _fun0013_ip = 45; continue _fun0013 }
case 46:
            var6 = !var4;
case 45:
            var _closure2_slot2 = var6;
            var5 = _closure1_slot5;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0015_ip = 47; continue _fun0015 }
case 31:
                    var2 = _closure2_slot2;
case 47:
                    if(!var2) { _fun0015_ip = 40; continue _fun0015 }
case 48:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useWatchAgeVerificationStatusChange'] = var4;
    var2 = function isFullscreenAgeVerificationEntryPoint(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0016_ip = 3; continue _fun0016 }
case 49:
            var3 = _closure1_slot9;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 3:
            return var1;
        }
    };
    var3['isFullscreenAgeVerificationEntryPoint'] = var2;
    return var1;
})();