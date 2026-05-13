// app/modules/age_assurance/AgeVerificationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var14;
    var1 = function isReactiveCheckEnabled() {
        var3 = _closure1_slot6;
        var2 = var3.isFeatureAgeGated;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 13;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var1.AgeGatedFeature;
        var1 = var1.REACTIVE_CHECK;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function useIsReactiveCheckEnabled() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 14;
        var1 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var1);
        var2 = var3.useIsFeatureAgeGated;
        var1 = 13;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.AgeGatedFeature;
        var1 = var1.REACTIVE_CHECK;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var11 = function useIsAssignedByDiscord() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 16;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot9;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot9;
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
                var1 = 15;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.AgeVerificationStatusUkAndAusOnly;
                var1 = var1.INFERRED_ADULT;
                var1 = var2 === var1;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var11;
    var7 = function isAgeVerified() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot9;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = null;
            var1 = var3 == var4;
            var5 = undefined;
            var7 = undefined;
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var7 = var4.ageVerificationStatus;
case 2:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 15;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.UNVERIFIED;
            var1 = var7 !== var1;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var7 = var3 == var4;
            var3 = undefined;
            if(var7) { _fun0002_ip = 6; continue _fun0002 }
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
    var _closure1_slot22 = var7;
    var6 = function useIsAgeVerified() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 16;
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
            if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var7 = var4.ageVerificationStatus;
case 8:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 15;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.UNVERIFIED;
            var1 = var7 !== var1;
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var7 = var3 == var4;
            var3 = undefined;
            if(var7) { _fun0003_ip = 12; continue _fun0003 }
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
    var _closure1_slot23 = var6;
    var5 = function useShouldCallReactiveCheck() {
        var3 = _closure1_slot23;
        var5 = undefined;
        var7 = var3.bind(var5)();
        var _closure2_slot0 = var7;
        var4 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 14;
        var3 = var8[var3];
        var9 = var4.bind(var5)(var3);
        var6 = var9.useIsFeatureAgeGated;
        var3 = 13;
        var3 = var8[var3];
        var3 = var4.bind(var5)(var3);
        var3 = var3.AgeGatedFeature;
        var3 = var3.REACTIVE_CHECK;
        var6 = var6.bind(var9)(var3);
        var _closure2_slot1 = var6;
        var3 = 16;
        var3 = var8[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot10;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = !var3;
                if(var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = _closure2_slot1;
                if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var4 = _closure1_slot10;
                var3 = var4.shouldCallReactiveCheck;
                var2 = var3.bind(var4)();
case 16:
                var1 = var2;
case 14:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot24 = var5;
    var4 = function shouldCallReactiveCheck() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot22;
            var4 = undefined;
            var2 = var1.bind(var4)();
            var1 = !var2;
            if(var2) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var2 = _closure1_slot19;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var4 = _closure1_slot10;
            var3 = var4.shouldCallReactiveCheck;
            var2 = var3.bind(var4)();
case 20:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot25 = var4;
    var1 = function _maybePerformReactiveCheck() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 5; continue _fun0006 }
case 22:
                    var3 = _closure1_slot25;
                    var5 = undefined;
                    var4 = var3.bind(var5)();
                    var3 = null;
                    if(!var4) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 24;
                    var2 = var6[var2];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.fetchReactiveCheckResult;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=59);
case 25:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    var3 = var2;
                    if(var4) { _fun0006_ip = 27; continue _fun0006 }
case 23:
                    return var3;
case 27:
                    return var2;
case 5:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var8 = global;
    var15 = var8.Object;
    var12 = var15.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var15)(var3, var1, var9);
    var1 = 0;
    var9 = var14[var1];
    var1 = undefined;
    var9 = var10.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var14[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var12 = var14[var9];
    var9 = metroImportAll;
    var9 = var9.bind(var1)(var12);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var14[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var14[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var14[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var14[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var14[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot10 = var9;
    var9 = 8;
    var9 = var14[var9];
    var9 = var13.bind(var1)(var9);
    var9 = var9.FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS;
    var _closure1_slot11 = var9;
    var9 = 9;
    var9 = var14[var9];
    var9 = var13.bind(var1)(var9);
    var9 = var9.MessageEmbedTypes;
    var _closure1_slot12 = var9;
    var9 = 10;
    var9 = var14[var9];
    var10 = var13.bind(var1)(var9);
    var9 = var10.AgeGateSource;
    var10 = var10.REACTIVE_CHECK_AGE_GATE_SOURCES;
    var _closure1_slot13 = var10;
    var10 = 11;
    var10 = var14[var10];
    var10 = var13.bind(var1)(var10);
    var10 = var10.SafetyToastType;
    var _closure1_slot14 = var10;
    var15 = var8.Set;
    var12 = 12;
    var10 = var14[var12];
    var10 = var13.bind(var1)(var10);
    var10 = var10.AgeVerificationModalEntryPoint;
    var16 = var10.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT;
    var10 = new Array(3);
    var10[0] = var16;
    var16 = var14[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.AgeVerificationModalEntryPoint;
    var16 = var16.START_STAGE_PROMPT;
    var10[1] = var16;
    var12 = var14[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.AgeVerificationModalEntryPoint;
    var12 = var12.STAGE_CHANNEL_RAISE_HAND;
    var10[2] = var12;
    var12 = var15.prototype;
    var12 = Object.create(var12, {constructor: {value: var15}});
    var20 = var12;
    var19 = var10;
    var10 = new var20[var15](var19, var18);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot15 = var10;
    var10 = var8.Set;
    var12 = var9.NSFW_SERVER;
    var8 = new Array(6);
    var8[0] = var12;
    var12 = var9.NSFW_SERVER_INVITE;
    var8[1] = var12;
    var12 = var9.NSFW_SERVER_INVITE_EMBED;
    var8[2] = var12;
    var12 = var9.LARGE_GUILD;
    var8[3] = var12;
    var12 = var9.JOIN_LARGE_GUILD_UNDERAGE;
    var8[4] = var12;
    var9 = var9.ACCESS_LARGE_GUILD_UNDERAGE;
    var8[5] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var20 = var9;
    var19 = var8;
    var8 = new var20[var10](var19, var18);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot16 = var8;
    var10 = {};
    var8 = 'ctas';
    var10['CTAS'] = var8;
    var8 = 'content_type';
    var10['CONTENT_TYPE'] = var8;
    var _closure1_slot17 = var10;
    var9 = {};
    var8 = 'retry';
    var9['RETRY'] = var8;
    var _closure1_slot18 = var9;
    var8 = {};
    var12 = 'verified_adult';
    var8['VERIFIED_ADULT'] = var12;
    var12 = 'verified_teen';
    var8['VERIFIED_TEEN'] = var12;
    var12 = 'error';
    var8['ERROR'] = var12;
    var12 = 25;
    var12 = var14[var12];
    var14 = var13.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/age_assurance/AgeVerificationUtils.tsx';
    var12 = var13.bind(var14)(var12);
    var12 = function(arg1) {
        var3 = _closure1_slot16;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['ageGateSourceHasLightboxBackdrop'] = var12;
    var12 = function shouldShowTiggerPawtect() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot9;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var2 = null;
            var2 = var2 == var1;
            var6 = undefined;
            var4 = undefined;
            if(var2) { _fun0007_ip = 2; continue _fun0007 }
case 3:
            var4 = var1.ageVerificationStatus;
case 2:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 15;
            var1 = var1[var7];
            var1 = var2.bind(var6)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var4 !== var1;
            if(!var1) { _fun0007_ip = 28; continue _fun0007 }
case 5:
            var2 = _closure1_slot19;
            var2 = var2.bind(var6)();
            var2 = !var2;
            if(var2) { _fun0007_ip = 29; continue _fun0007 }
case 30:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.AgeVerificationStatusUkAndAusOnly;
            var3 = var3.INFERRED_ADULT;
            var2 = var4 !== var3;
case 29:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['shouldShowTiggerPawtect'] = var12;
    var12 = function useShouldShowTiggerPawtect() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var5 = undefined;
            var6 = var3.bind(var5)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var4.bind(var6)(var3, var2);
            var2 = _closure1_slot20;
            var2 = var2.bind(var5)();
            if(!var2) { _fun0008_ip = 31; continue _fun0008 }
case 9:
            var3 = null;
            var3 = var3 == var4;
            var6 = undefined;
            if(var3) { _fun0008_ip = 7; continue _fun0008 }
case 32:
            var6 = var4.ageVerificationStatus;
case 7:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 15;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.AgeVerificationStatusUkAndAusOnly;
            var3 = var3.INFERRED_ADULT;
            var2 = var6 === var3;
case 31:
            var3 = null;
            var6 = var3 == var4;
            var3 = undefined;
            if(var6) { _fun0008_ip = 33; continue _fun0008 }
case 34:
            var3 = var4.ageVerificationStatus;
case 33:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var3 !== var1;
            if(!var1) { _fun0008_ip = 35; continue _fun0008 }
case 36:
            var1 = !var2;
case 35:
            return var1;
        }
    };
    var3['useShouldShowTiggerPawtect'] = var12;
    var12 = function isVerifiedTeen() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot9;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var5 = var2 == var3;
            var4 = undefined;
            var2 = undefined;
            if(var5) { _fun0009_ip = 2; continue _fun0009 }
case 3:
            var2 = var3.ageVerificationStatus;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_TEEN;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isVerifiedTeen'] = var12;
    var12 = function useIsVerifiedTeen() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
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
            if(var5) { _fun0010_ip = 8; continue _fun0010 }
case 9:
            var2 = var3.ageVerificationStatus;
case 8:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_TEEN;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['useIsVerifiedTeen'] = var12;
    var12 = function isVerifiedAdult() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = _closure1_slot9;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var2 = null;
            var2 = var2 == var1;
            var6 = undefined;
            var4 = undefined;
            if(var2) { _fun0011_ip = 2; continue _fun0011 }
case 3:
            var4 = var1.ageVerificationStatus;
case 2:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 15;
            var1 = var1[var7];
            var1 = var2.bind(var6)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var4 === var1;
            if(var1) { _fun0011_ip = 29; continue _fun0011 }
case 5:
            var2 = _closure1_slot19;
            var2 = var2.bind(var6)();
            if(!var2) { _fun0011_ip = 37; continue _fun0011 }
case 38:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.AgeVerificationStatusUkAndAusOnly;
            var3 = var3.INFERRED_ADULT;
            var2 = var4 === var3;
case 37:
            var1 = var2;
case 29:
            return var1;
        }
    };
    var3['isVerifiedAdult'] = var12;
    var12 = function useIsVerifiedAdult() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var5 = undefined;
            var6 = var3.bind(var5)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var4.bind(var6)(var3, var2);
            var2 = _closure1_slot20;
            var2 = var2.bind(var5)();
            if(!var2) { _fun0012_ip = 31; continue _fun0012 }
case 9:
            var3 = null;
            var3 = var3 == var4;
            var6 = undefined;
            if(var3) { _fun0012_ip = 7; continue _fun0012 }
case 32:
            var6 = var4.ageVerificationStatus;
case 7:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 15;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.AgeVerificationStatusUkAndAusOnly;
            var3 = var3.INFERRED_ADULT;
            var2 = var6 === var3;
case 31:
            var3 = null;
            var6 = var3 == var4;
            var3 = undefined;
            if(var6) { _fun0012_ip = 33; continue _fun0012 }
case 34:
            var3 = var4.ageVerificationStatus;
case 33:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.VERIFIED_ADULT;
            var1 = var3 === var1;
            if(var1) { _fun0012_ip = 35; continue _fun0012 }
case 36:
            var1 = var2;
case 35:
            return var1;
        }
    };
    var3['useIsVerifiedAdult'] = var12;
    var12 = function isAssignedByDiscord() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = _closure1_slot9;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var5 = var2 == var3;
            var4 = undefined;
            var2 = undefined;
            if(var5) { _fun0013_ip = 2; continue _fun0013 }
case 3:
            var2 = var3.ageVerificationStatus;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.INFERRED_ADULT;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isAssignedByDiscord'] = var12;
    var3['useIsAssignedByDiscord'] = var11;
    var11 = function useShowAssignedAgeGroupSettings() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = _closure1_slot21;
            var6 = undefined;
            var2 = var2.bind(var6)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 14;
            var1 = var7[var1];
            var4 = var5.bind(var6)(var1);
            var3 = var4.useIsFeatureAgeGated;
            var1 = 13;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.REACTIVE_CHECK;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0014_ip = 5; continue _fun0014 }
case 27:
            var1 = var2;
case 5:
            return var1;
        }
    };
    var3['useShowAssignedAgeGroupSettings'] = var11;
    var3['AgeVerificationSystemNotificationEmbedKeys'] = var10;
    var3['AgeVerificationSystemNotificationCtaTypes'] = var9;
    var3['AgeVerificationSystemNotificationContentType'] = var8;
    var8 = function isAgeVerificationMessageWithRetryCta(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var5 = _closure1_slot8;
            var4 = var5.getMessage;
            var3 = arg1;
            var1 = arg2;
            var3 = var4.bind(var5)(var3, var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0015_ip = 39; continue _fun0015 }
case 40:
            var4 = var3.embeds;
            if(!(var1 != var4)) { _fun0015_ip = 39; continue _fun0015 }
case 18:
            var4 = var3.embeds;
            var5 = var4.length;
            var4 = 0;
            if(!(var4 !== var5)) { _fun0015_ip = 39; continue _fun0015 }
case 41:
            var5 = var3.embeds;
            var5 = var5[var4];
            var5 = var5.fields;
            if(!(var1 != var5)) { _fun0015_ip = 39; continue _fun0015 }
case 42:
            var5 = var3.embeds;
            var5 = var5[var4];
            var6 = var5.type;
            var5 = _closure1_slot12;
            var5 = var5.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
            if(!(var6 === var5)) { _fun0015_ip = 39; continue _fun0015 }
case 43:
            var3 = var3.embeds;
            var3 = var3[var4];
            var5 = var3.fields;
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure1_slot17;
                var1 = var1.CTAS;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = var1 == var3;
            var1 = undefined;
            if(var4) { _fun0015_ip = 44; continue _fun0015 }
case 45:
            var5 = var3.rawValue;
            var4 = var5.split;
            var3 = ',';
            var4 = var4.bind(var5)(var3);
            var3 = var4.includes;
            var2 = _closure1_slot18;
            var2 = var2.RETRY;
            var1 = var3.bind(var4)(var2);
case 44:
            return var1;
case 39:
            var1 = false;
            return var1;
        }
    };
    var3['isAgeVerificationMessageWithRetryCta'] = var8;
    var3['isAgeVerified'] = var7;
    var3['useIsAgeVerified'] = var6;
    var6 = function useInitiateAgeVerification(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg1;
            var10 = var3.onComplete;
            var _closure2_slot0 = var10;
            var6 = var3.entryPoint;
            var _closure2_slot1 = var6;
            var8 = var3.shouldShowExpressiveModal;
            var2 = undefined;
            if(!(var8 === var2)) { _fun0016_ip = 46; continue _fun0016 }
case 16:
            var8 = false;
case 46:
            var _closure2_slot2 = var8;
            var7 = var3.classificationId;
            if(!(var7 === var2)) { _fun0016_ip = 47; continue _fun0016 }
case 48:
            var7 = null;
case 47:
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var2;
            var _closure2_slot5 = var2;
            var _closure2_slot6 = var2;
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
            _closure2_slot4 = var4;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 16;
            var4 = var12[var4];
            var13 = var9.bind(var2)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var12.bind(var13)(var9, var4);
            var9 = var11.useRef;
            var4 = null;
            var13 = var4 == var12;
            var4 = undefined;
            if(var13) { _fun0016_ip = 49; continue _fun0016 }
case 50:
            var4 = var12.ageVerificationStatus;
case 49:
            var4 = var9.bind(var11)(var4);
            var4 = var4.current;
            _closure2_slot5 = var4;
            var5 = _closure1_slot5;
            var11 = var5.useCallback;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'CLOSE_AGE_VERIFICATION_MODAL';
                var2['type'] = var5;
                var5 = _closure2_slot5;
                var2['status'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var11.bind(var5)(var4, var9);
            _closure2_slot6 = var9;
            var4 = var5.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0017_ip = 51; continue _fun0017 }
case 52:
                            var8 = arg1;
                            var4 = _closure2_slot4;
                            var5 = undefined;
                            var2 = true;
                            var2 = var4.bind(var5)(var2);
case 3: // try_start_0 // try_start_1
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 17;
                            var2 = var7[var2];
                            var9 = var6.bind(var5)(var2);
                            var6 = var9.dispatch;
                            var2 = {};
                            var10 = 'INITIATE_AGE_VERIFICATION';
                            var2['type'] = var10;
                            var2 = var6.bind(var9)(var2);
                            var6 = _closure1_slot0;
                            var2 = 18;
                            var2 = var7[var2];
                            var7 = var6.bind(var5)(var2);
                            var6 = var7.requestAgeVerification;
                            var2 = {};
                            var2['method'] = var8;
                            var9 = _closure2_slot3;
                            var8 = null;
                            var9 = var8 != var9;
                            var8 = undefined;
                            if(!var9) { _fun0017_ip = 4; continue _fun0017 }
case 37:
                            var8 = _closure2_slot3;
case 4:
                            var2['classificationId'] = var8;
                            var2 = var6.bind(var7)(var2);
                            SaveGenerator(address=136);
case 53:
                            return var2;
case 33:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0017_ip = 54; continue _fun0017 }
case 55:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 19;
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
                            var8 = _closure2_slot6;
                            var4['onClose'] = var8;
                            var8 = _closure2_slot6;
                            var4['onCancel'] = var8;
                            var8 = _closure2_slot1;
                            var4['entryPoint'] = var8;
                            var8 = _closure2_slot2;
                            var4['shouldShowExpressiveModal'] = var8;
                            var4 = var6.bind(var7)(var4);
case 56: // try_end0
                            _fun0017_ip = 57; continue _fun0017;
case 54: // try_end1
                            var6 = _closure2_slot4;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 58: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=1);
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 20;
                            var4 = var7[var4];
                            var6 = var6.bind(var5)(var4);
                            var4 = var6.showFailedToast;
                            var2 = _closure1_slot14;
                            var2 = var2.TIGGER_PAWTECT_ERROR;
                            var2 = var4.bind(var6)(var2);
                            var2 = _closure2_slot6;
                            var2 = var2.bind(var5)();
case 57: // try_end2
                            var4 = _closure2_slot4;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
                            return var5;
case 59: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot4;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 51:
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
    var3['useInitiateAgeVerification'] = var6;
    var6 = function useWatchAgeVerificationStatusChange(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 16;
            var4 = var11[var7];
            var1 = undefined;
            var9 = var10.bind(var1)(var4);
            var6 = var9.useStateFromStores;
            var4 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0019_ip = 60; continue _fun0019 }
case 61:
                    var1 = var2.ageVerificationStatus;
case 60:
                    return var1;
                }
            };
            var9 = var6.bind(var9)(var5, var4);
            var5 = _closure1_slot1;
            var4 = 21;
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
            if(!var7) { _fun0018_ip = 62; continue _fun0018 }
case 63:
            var7 = var10 != var9;
case 62:
            if(!var7) { _fun0018_ip = 64; continue _fun0018 }
case 65:
            var7 = var6 !== var9;
case 64:
            var _closure2_slot1 = var7;
            var6 = !var5;
            if(!var6) { _fun0018_ip = 66; continue _fun0018 }
case 67:
            var6 = !var4;
case 66:
            var _closure2_slot2 = var6;
            var5 = _closure1_slot5;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0020_ip = 68; continue _fun0020 }
case 52:
                    var2 = _closure2_slot2;
case 68:
                    if(!var2) { _fun0020_ip = 61; continue _fun0020 }
case 69:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useWatchAgeVerificationStatusChange'] = var6;
    var6 = function isFullscreenAgeVerificationEntryPoint(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0021_ip = 3; continue _fun0021 }
case 70:
            var3 = _closure1_slot11;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 3:
            return var1;
        }
    };
    var3['isFullscreenAgeVerificationEntryPoint'] = var6;
    var6 = function getAgeVerificationGetStartedTitle(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var4 = _closure1_slot15;
            var3 = var4.has;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 22;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            if(var1) { _fun0022_ip = 71; continue _fun0022 }
case 72:
            var1 = var2.xYXsr6;
            var1 = var3.bind(var4)(var1);
            _fun0022_ip = 73; continue _fun0022;
case 71:
            var2 = var2.lSWVTM;
            var1 = var3.bind(var4)(var2);
case 73:
            return var1;
        }
    };
    var3['getAgeVerificationGetStartedTitle'] = var6;
    var6 = function getAgeVerificationGetStartedSubtitle(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var8 = arg2;
            var1 = arguments[2];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0023_ip = 68; continue _fun0023 }
case 70:
            var1 = false;
case 68:
            var5 = _closure1_slot15;
            var4 = var5.has;
            var3 = arg1;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0023_ip = 74; continue _fun0023 }
case 14:
            if(var1) { _fun0023_ip = 35; continue _fun0023 }
case 75:
            var1 = null;
            if(!(var1 == var8)) { _fun0023_ip = 11; continue _fun0023 }
case 76:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 22;
            var3 = var7[var1];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.HxS3oQ;
            var1 = var3.bind(var4)(var1);
            _fun0023_ip = 77; continue _fun0023;
case 11:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 22;
            var3 = var9[var3];
            var3 = var4.bind(var6)(var3);
            var7 = var3.intl;
            var5 = var7.format;
            var4 = _closure1_slot1;
            var3 = 23;
            var3 = var9[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.RpMIT0;
            var3 = {};
            var3['handleOnHelpUrlHook'] = var8;
            var1 = var5.bind(var7)(var4, var3);
case 77:
            _fun0023_ip = 78; continue _fun0023;
case 35:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 22;
            var3 = var8[var3];
            var3 = var4.bind(var6)(var3);
            var5 = var3.intl;
            var4 = var5.string;
            var7 = _closure1_slot1;
            var3 = 23;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.h7qzoa;
            var1 = var4.bind(var5)(var3);
case 78:
            _fun0023_ip = 79; continue _fun0023;
case 74:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 22;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.S/xS/w;
            var1 = var3.bind(var4)(var2);
case 79:
            return var1;
        }
    };
    var3['getAgeVerificationGetStartedSubtitle'] = var6;
    var3['useShouldCallReactiveCheck'] = var5;
    var5 = function useMaybePerformReactiveCheckForSource(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot24;
        var1 = undefined;
        var7 = var4.bind(var1)();
        var _closure2_slot1 = var7;
        var5 = _closure1_slot5;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var1 = _closure2_slot1;
                if(!var1) { _fun0024_ip = 80; continue _fun0024 }
case 52:
                var4 = _closure1_slot13;
                var3 = var4.has;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
case 80:
                if(!var1) { _fun0024_ip = 72; continue _fun0024 }
case 40:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetchReactiveCheckResult;
                var1 = var1.bind(var2)();
case 72:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useMaybePerformReactiveCheckForSource'] = var5;
    var3['shouldCallReactiveCheck'] = var4;
    var2 = function maybePerformReactiveCheck() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybePerformReactiveCheck'] = var2;
    return var1;
})();