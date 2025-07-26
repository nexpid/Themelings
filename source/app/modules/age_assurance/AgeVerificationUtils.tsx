// app/modules/age_assurance/AgeVerificationUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var5 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var6 = var9[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.SafetyToastType;
    var _closure1_slot11 = var4;
    var6 = {};
    var4 = 'ctas';
    var6['CTAS'] = var4;
    var4 = 'content_type';
    var6['CONTENT_TYPE'] = var4;
    var _closure1_slot12 = var6;
    var5 = {};
    var4 = 'retry';
    var5['RETRY'] = var4;
    var _closure1_slot13 = var5;
    var4 = {};
    var7 = 'verified_adult';
    var4['VERIFIED_ADULT'] = var7;
    var7 = 'verified_teen';
    var4['VERIFIED_TEEN'] = var7;
    var7 = 'error';
    var4['ERROR'] = var7;
    var7 = 17;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/age_assurance/AgeVerificationUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function shouldShowTiggerPawtect() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot8;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var5 = var2 == var3;
            var4 = undefined;
            var2 = undefined;
            if(var5) { _fun0001_ip = 35; continue _fun0001 }
 29:
            var2 = var3.ageVerificationStatus;
 35:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
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
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
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
            if(var5) { _fun0002_ip = 72; continue _fun0002 }
 66:
            var2 = var3.ageVerificationStatus;
 72:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
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
 0:
            var3 = _closure1_slot8;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var5 = var2 == var3;
            var4 = undefined;
            var2 = undefined;
            if(var5) { _fun0003_ip = 35; continue _fun0003 }
 29:
            var2 = var3.ageVerificationStatus;
 35:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
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
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
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
            if(var5) { _fun0004_ip = 72; continue _fun0004 }
 66:
            var2 = var3.ageVerificationStatus;
 72:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
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
 0:
            var3 = _closure1_slot8;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var5 = var2 == var3;
            var4 = undefined;
            var2 = undefined;
            if(var5) { _fun0005_ip = 35; continue _fun0005 }
 29:
            var2 = var3.ageVerificationStatus;
 35:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
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
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
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
            if(var5) { _fun0006_ip = 72; continue _fun0006 }
 66:
            var2 = var3.ageVerificationStatus;
 72:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
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
 0:
            var5 = _closure1_slot7;
            var4 = var5.getMessage;
            var3 = arg1;
            var1 = arg2;
            var3 = var4.bind(var5)(var3, var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 200; continue _fun0007 }
 34:
            var4 = var3.embeds;
            if(!(var1 != var4)) { _fun0007_ip = 200; continue _fun0007 }
 47:
            var4 = var3.embeds;
            var5 = var4.length;
            var4 = 0;
            if(!(var4 !== var5)) { _fun0007_ip = 200; continue _fun0007 }
 67:
            var5 = var3.embeds;
            var5 = var5[var4];
            var5 = var5.fields;
            if(!(var1 != var5)) { _fun0007_ip = 200; continue _fun0007 }
 87:
            var5 = var3.embeds;
            var5 = var5[var4];
            var6 = var5.type;
            var5 = _closure1_slot10;
            var5 = var5.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
            if(!(var6 === var5)) { _fun0007_ip = 200; continue _fun0007 }
 116:
            var3 = var3.embeds;
            var3 = var3[var4];
            var5 = var3.fields;
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure1_slot12;
                var1 = var1.CTAS;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = var1 == var3;
            var1 = undefined;
            if(var4) { _fun0007_ip = 198; continue _fun0007 }
 158:
            var5 = var3.rawValue;
            var4 = var5.split;
            var3 = ',';
            var4 = var4.bind(var5)(var3);
            var3 = var4.includes;
            var2 = _closure1_slot13;
            var2 = var2.RETRY;
            var1 = var3.bind(var4)(var2);
 198:
            return var1;
 200:
            var1 = false;
            return var1;
        }
    };
    var3['isAgeVerificationMessageWithRetryCta'] = var4;
    var4 = function isAgeVerified() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = _closure1_slot8;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = null;
            var1 = var3 == var4;
            var5 = undefined;
            var7 = undefined;
            if(var1) { _fun0008_ip = 35; continue _fun0008 }
 29:
            var7 = var4.ageVerificationStatus;
 35:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 9;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.UNVERIFIED;
            var1 = var7 !== var1;
            if(!var1) { _fun0008_ip = 122; continue _fun0008 }
 74:
            var7 = var3 == var4;
            var3 = undefined;
            if(var7) { _fun0008_ip = 89; continue _fun0008 }
 83:
            var3 = var4.ageVerificationStatus;
 89:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AgeVerificationStatusUkAndAusOnly;
            var2 = var2.CLIENT_ONLY_PENDING;
            var1 = var3 !== var2;
 122:
            return var1;
        }
    };
    var3['isAgeVerified'] = var4;
    var4 = function useIsAgeVerified() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
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
            if(var1) { _fun0009_ip = 72; continue _fun0009 }
 66:
            var7 = var4.ageVerificationStatus;
 72:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 9;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.UNVERIFIED;
            var1 = var7 !== var1;
            if(!var1) { _fun0009_ip = 159; continue _fun0009 }
 111:
            var7 = var3 == var4;
            var3 = undefined;
            if(var7) { _fun0009_ip = 126; continue _fun0009 }
 120:
            var3 = var4.ageVerificationStatus;
 126:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AgeVerificationStatusUkAndAusOnly;
            var2 = var2.CLIENT_ONLY_PENDING;
            var1 = var3 !== var2;
 159:
            return var1;
        }
    };
    var3['useIsAgeVerified'] = var4;
    var4 = function useInitiateAgeVerification(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var7 = arg1;
            var9 = arguments[1];
            var4 = arguments[2];
            var _closure2_slot0 = var7;
            var2 = undefined;
            if(!(var9 === var2)) { _fun0010_ip = 23; continue _fun0010 }
 21:
            var9 = false;
 23:
            var _closure2_slot1 = var9;
            if(!(var4 === var2)) { _fun0010_ip = 33; continue _fun0010 }
 31:
            var4 = null;
 33:
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var2;
            var _closure2_slot4 = var2;
            var _closure2_slot5 = var2;
            var10 = _closure1_slot5;
            var6 = var10.useState;
            var3 = false;
            var8 = var6.bind(var10)(var3);
            var6 = _closure1_slot4;
            var3 = 2;
            var8 = var6.bind(var2)(var8, var3);
            var3 = 0;
            var3 = var8[var3];
            var6 = 1;
            var6 = var8[var6];
            _closure2_slot3 = var6;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 10;
            var6 = var11[var6];
            var12 = var8.bind(var2)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var11.bind(var12)(var8, var6);
            var8 = var10.useRef;
            var6 = null;
            var12 = var6 == var11;
            var6 = undefined;
            if(var12) { _fun0010_ip = 168; continue _fun0010 }
 162:
            var6 = var11.ageVerificationStatus;
 168:
            var6 = var8.bind(var10)(var6);
            var10 = var6.current;
            _closure2_slot4 = var10;
            var5 = _closure1_slot5;
            var8 = var5.useCallback;
            var6 = new Array(3);
            var6[0] = var10;
            var6[1] = var9;
            var6[2] = var4;
            var4 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var5 = 'CLOSE_AGE_VERIFICATION_MODAL';
                    var3['type'] = var5;
                    var7 = _closure2_slot4;
                    var3['status'] = var7;
                    var3 = var4.bind(var6)(var3);
                    var3 = _closure2_slot1;
                    if(var3) { _fun0011_ip = 117; continue _fun0011 }
 65:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.maybeOpenAgeVerificationUserFeedback;
                    var2 = {};
                    var6 = 'age_verification_intro_screen';
                    var2['location'] = var6;
                    var5 = _closure2_slot2;
                    var2['visibleContent'] = var5;
                    var2 = var3.bind(var4)(var2);
 117:
                    return var1;
                }
            };
            var6 = var8.bind(var5)(var4, var6);
            _closure2_slot5 = var6;
            var4 = var5.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0012_ip = 285; continue _fun0012 }
 10:
                            var8 = arg1;
                            var4 = _closure2_slot3;
                            var5 = undefined;
                            var2 = true;
                            var2 = var4.bind(var5)(var2);
 29: // try_start_0 // try_start_1
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 11;
                            var2 = var7[var2];
                            var9 = var6.bind(var5)(var2);
                            var6 = var9.dispatch;
                            var2 = {};
                            var10 = 'INITIATE_AGE_VERIFICATION';
                            var2['type'] = var10;
                            var2 = var6.bind(var9)(var2);
                            var6 = _closure1_slot0;
                            var2 = 13;
                            var2 = var7[var2];
                            var6 = var6.bind(var5)(var2);
                            var2 = var6.initiateVerification;
                            var2 = var2.bind(var6)();
                            SaveGenerator(address=104);
 102:
                            return var2;
 104:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0012_ip = 188; continue _fun0012 }
 110:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 14;
                            var4 = var7[var4];
                            var7 = var6.bind(var5)(var4);
                            var6 = var7.showAgeVerification;
                            var4 = {};
                            var9 = var2.verification_webview_url;
                            var4['webviewUrl'] = var9;
                            var9 = _closure2_slot0;
                            var4['onComplete'] = var9;
                            var9 = _closure2_slot5;
                            var4['onClose'] = var9;
                            var9 = _closure2_slot5;
                            var4['onCancel'] = var9;
                            var4['entryPoint'] = var8;
                            var4 = var6.bind(var7)(var4);
 186: // try_end0
                            _fun0012_ip = 256; continue _fun0012;
 188: // try_end1
                            var6 = _closure2_slot3;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
 202: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=1);
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 15;
                            var4 = var7[var4];
                            var6 = var6.bind(var5)(var4);
                            var4 = var6.showFailedToast;
                            var2 = _closure1_slot11;
                            var2 = var2.TIGGER_PAWTECT_ERROR;
                            var2 = var4.bind(var6)(var2);
                            var2 = _closure2_slot5;
                            var2 = var2.bind(var5)();
 256: // try_end2
                            var4 = _closure2_slot3;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
                            return var5;
 270: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot3;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
 285:
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
            var1 = new Array(2);
            var1[0] = var7;
            var1[1] = var6;
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
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 10;
            var4 = var11[var7];
            var1 = undefined;
            var9 = var10.bind(var1)(var4);
            var6 = var9.useStateFromStores;
            var4 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0014_ip = 33; continue _fun0014 }
 27:
                    var1 = var2.ageVerificationStatus;
 33:
                    return var1;
                }
            };
            var9 = var6.bind(var9)(var5, var4);
            var5 = _closure1_slot1;
            var4 = 16;
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
            if(!var7) { _fun0013_ip = 166; continue _fun0013 }
 162:
            var7 = var10 != var9;
 166:
            if(!var7) { _fun0013_ip = 173; continue _fun0013 }
 169:
            var7 = var6 !== var9;
 173:
            var _closure2_slot1 = var7;
            var6 = !var5;
            if(!var6) { _fun0013_ip = 186; continue _fun0013 }
 183:
            var6 = !var4;
 186:
            var _closure2_slot2 = var6;
            var5 = _closure1_slot5;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0015_ip = 14; continue _fun0015 }
 10:
                    var2 = _closure2_slot2;
 14:
                    if(!var2) { _fun0015_ip = 27; continue _fun0015 }
 17:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 27:
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
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0016_ip = 29; continue _fun0016 }
 12:
            var3 = _closure1_slot9;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
 29:
            return var1;
        }
    };
    var3['isFullscreenAgeVerificationEntryPoint'] = var2;
    return var1;
})();