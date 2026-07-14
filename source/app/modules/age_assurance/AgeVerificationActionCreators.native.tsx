// app/modules/age_assurance/AgeVerificationActionCreators.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.AGE_VERIFICATION_MODAL_KEY;
    var _closure1_slot4 = var7;
    var7 = var2.AGE_VERIFICATION_GET_STARTED_MODAL_KEY;
    var _closure1_slot5 = var7;
    var7 = var2.AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY;
    var _closure1_slot6 = var7;
    var2 = var2.VerificationVendorName;
    var _closure1_slot7 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AGE_VERIFICATION_INCODE_PATH;
    var _closure1_slot8 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativePermissionTypes;
    var _closure1_slot9 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SafetyToastType;
    var _closure1_slot10 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot11 = var2;
    var2 = {};
    var7 = function showAgeVerification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var5 = var7.onClose;
            var8 = undefined;
            if(!(var5 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = function n() {
                var1 = undefined;
                return var1;
            };
case 2:
            var _closure2_slot0 = var5;
            var1 = var7.shouldShowExpressiveModal;
            var2 = var7.webviewUrl;
            var _closure2_slot1 = var2;
            var9 = var7.verificationVendorName;
            var1 = var7.incodeParameters;
            var6 = {'onClose': 0, 'shouldShowExpressiveModal': 0, 'webviewUrl': 0, 'verificationVendorName': 0, 'incodeParameters': 0};
            var4 = null;
            var15 = var6;
            var14 = null;
            var1 = silentSetPrototypeOf(var15, var14);
            var15 = {};
            var14 = var7;
            var13 = var6;
            var6 = copyDataProperties(var15, var14, var13);
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 7;
            var7 = var11[var7];
            var10 = var10.bind(var8)(var7);
            var7 = var10.isMetaQuest;
            var7 = var7.bind(var10)();
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot7;
            var7 = var7.INCODE;
            if(!(var9 === var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 10;
            var7 = var10[var7];
            var9 = var9.bind(var8)(var7);
            var7 = var9.isAgeVerificationIncodeEnabled;
            var6 = var6.entryPoint;
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 12;
            var6 = var9[var6];
            var11 = var7.bind(var8)(var6);
            var10 = var11.pushLazy;
            var7 = _closure1_slot3;
            var6 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var6 = undefined;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 14;
                        var4 = var2[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = 16;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=60);
case 13:
                        return var2;
case 14:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                        var4 = var2.default;
                        _closure4_slot0 = var4;
                        var3 = function() {
                            var4 = _closure1_slot11;
                            var3 = _closure4_slot0;
                            var2 = {};
                            var5 = _closure2_slot1;
                            var2['webviewUrl'] = var5;
                            var5 = _closure2_slot0;
                            var2['onClose'] = var5;
                            var6 = _closure2_slot2;
                            var7 = var2;
                            var1 = copyDataProperties(var7, var6);
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        return var3;
case 15:
                        return var2;
case 11:
                        return var1;
                    }
                };
                return var1;
            };
            var9 = var7.bind(var8)(var6);
            var7 = _closure1_slot4;
            var6 = {};
            var6 = var10.bind(var11)(var9, var6, var7);
            var2 = true;
case 9:
            return var2;
case 8:
            var6 = global;
            var2 = var6.window;
            var2 = var2.GLOBAL_ENV;
            var7 = var4 == var2;
            var11 = undefined;
            if(var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = var2.WEBAPP_ENDPOINT;
case 17:
            var7 = var4 == var11;
            var2 = null;
            if(var7) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var10 = '';
            var2 = null;
            if(!(var10 !== var11)) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 6;
            var7 = var12[var7];
            var9 = var9.bind(var8)(var7);
            var7 = var9.isDiscordBackendDevelopment;
            var7 = var7.bind(var9)();
            var9 = 'https:';
            if(!var7) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = 'http:';
case 22:
            var7 = _closure1_slot8;
            var6 = var6.HermesInternal;
            var6 = var6.concat;
            var2 = var6.bind(var10)(var9, var11, var7);
case 19:
            _closure2_slot3 = var2;
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 26; continue _fun0003 }
case 27: // try_start_0
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 11;
                        var2 = var5[var2];
                        var8 = undefined;
                        var6 = var4.bind(var8)(var2);
                        var5 = var6.requestPermission;
                        var2 = _closure1_slot9;
                        var4 = var2.CAMERA;
                        var2 = {};
                        var7 = true;
                        var2['showAuthorizationError'] = var7;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=70);
case 28:
                        return var2;
case 29:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 12;
                        var4 = var6[var4];
                        var7 = var5.bind(var8)(var4);
                        var6 = var7.pushLazy;
                        var5 = _closure1_slot3;
                        var4 = function* () {
                            var1 = function* anon_0_() {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                                    var6 = undefined;
                                    var _closure6_slot0 = var6;
                                    var5 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var4 = 14;
                                    var4 = var2[var4];
                                    var5 = var5.bind(var6)(var4);
                                    var4 = 13;
                                    var4 = var2[var4];
                                    var2 = var2.paths;
                                    var2 = var5.bind(var6)(var4, var2);
                                    SaveGenerator(address=60);
case 13:
                                    return var2;
case 14:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(var4) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                                    var4 = var2.default;
                                    _closure6_slot0 = var4;
                                    var3 = function() {
                                        var4 = _closure1_slot11;
                                        var3 = _closure6_slot0;
                                        var2 = {};
                                        var5 = _closure2_slot3;
                                        var2['webviewUrl'] = var5;
                                        var5 = _closure2_slot0;
                                        var2['onClose'] = var5;
                                        var6 = _closure2_slot2;
                                        var7 = var2;
                                        var1 = copyDataProperties(var7, var6);
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3, var2);
                                        return var1;
                                    };
                                    return var3;
case 15:
                                    return var2;
case 11:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var5 = var5.bind(var8)(var4);
                        var4 = _closure1_slot4;
                        var3 = {};
                        var3 = var6.bind(var7)(var5, var3, var4);
                        SaveGenerator(address=135);
case 32:
                        return var3;
case 33:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 34; continue _fun0003 }
case 35: // try_end0
                        _fun0003_ip = 36; continue _fun0003;
case 34:
                        return var3;
case 30:
                        return var2;
case 37: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 15;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.showFailedToast;
                        var2 = _closure1_slot10;
                        var2 = var2.TIGGER_PAWTECT_ERROR;
                        var2 = var4.bind(var5)(var2);
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var3)();
case 36:
                        var2 = undefined;
                        return var2;
case 26:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var4.bind(var8)(var3);
            var3 = var3.bind(var8)();
            var2 = true;
case 24:
            return var2;
case 4:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var4 = var3.bind(var8)(var2);
            var3 = var4.openAlert;
            var2 = _closure1_slot6;
            var7 = _closure1_slot11;
            var6 = _closure1_slot1;
            var1 = 9;
            var1 = var9[var1];
            var6 = var6.bind(var8)(var1);
            var1 = {};
            var1 = var7.bind(var8)(var6, var1);
            var1 = var3.bind(var4)(var2, var1, var5);
            var1 = true;
            return var1;
        }
    };
    var2['showAgeVerification'] = var7;
    var7 = function showAgeVerificationGetStartedModal(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var10 = var1.entryPoint;
            var _closure2_slot0 = var10;
            var6 = var1.onClose;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 7;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isMetaQuest;
            var5 = var4.bind(var5)();
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            if(var5) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var5 = 17;
            var5 = var9[var5];
            var7 = var4.bind(var1)(var5);
            var5 = var7.isAgeVerified;
            var5 = var5.bind(var7)();
            if(!var5) { _fun0005_ip = 32; continue _fun0005 }
case 40:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 18;
            var7 = var11[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.hasAgeGatedFeatures;
            var5 = var7.bind(var8)();
case 32:
            _closure2_slot1 = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 19;
            var5 = var8[var5];
            var7 = var7.bind(var1)(var5);
            var5 = var7.isAgeVerificationExpressiveModalEverywhereEnabled;
            var5 = var5.bind(var7)(var10);
            _closure2_slot2 = var5;
            var7 = _closure1_slot1;
            var5 = 12;
            var5 = var8[var5];
            var10 = var7.bind(var1)(var5);
            var8 = var10.pushLazy;
            var5 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 11; continue _fun0006 }
case 12:
                        var6 = undefined;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 14;
                        var4 = var2[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = 20;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=60);
case 13:
                        return var2;
case 14:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                        var4 = var2.default;
                        _closure4_slot0 = var4;
                        var3 = function() {
                            var4 = _closure1_slot11;
                            var3 = _closure4_slot0;
                            var2 = {};
                            var5 = _closure2_slot0;
                            var2['entryPoint'] = var5;
                            var5 = _closure2_slot1;
                            var2['isRetry'] = var5;
                            var1 = _closure2_slot2;
                            var2['useEmbeddedMethods'] = var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        return var3;
case 15:
                        return var2;
case 11:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var5.bind(var1)(var3);
            var5 = _closure1_slot5;
            var3 = {};
            var3 = var8.bind(var10)(var7, var3, var5);
            _fun0005_ip = 41; continue _fun0005;
case 38:
            var3 = 8;
            var3 = var9[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.openAlert;
            var3 = _closure1_slot6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot1;
            var2 = 9;
            var2 = var9[var2];
            var7 = var7.bind(var1)(var2);
            var2 = {};
            var2 = var8.bind(var1)(var7, var2);
            var2 = var4.bind(var5)(var3, var2, var6);
case 41:
            return var1;
        }
    };
    var2['showAgeVerificationGetStartedModal'] = var7;
    var4 = function openUrl(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 21;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openURL;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['openUrl'] = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/AgeVerificationActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();