// app/modules/age_assurance/AgeVerificationActionCreators.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function openIncodeAgeVerificationModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.onClose;
            var _closure2_slot0 = var3;
            var1 = var1.onComplete;
            var _closure2_slot1 = var1;
            var5 = global;
            var1 = var5.window;
            var1 = var1.GLOBAL_ENV;
            var4 = null;
            var6 = var4 == var1;
            var3 = undefined;
            var9 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var1.WEBAPP_ENDPOINT;
case 2:
            var6 = var4 == var9;
            var1 = null;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = '';
            var1 = null;
            if(!(var8 !== var9)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var11 = var5.URL;
            var6 = var5.HermesInternal;
            var6 = var6.concat;
            var7 = 'https:';
            var14 = var6.bind(var7)(var9);
            var10 = var11.prototype;
            var10 = Object.create(var10, {constructor: {value: var11}});
            var15 = var10;
            var6 = new var15[var11](var14, var13);
            var6 = var6 instanceof Object ? var6 : var10;
            var11 = var6.hostname;
            var6 = 'localhost';
            if(!(var6 !== var11)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = '127.0.0.1';
            if(!(var6 !== var11)) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var10 = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/;
            var6 = var10.test;
            var6 = var6.bind(var10)(var11);
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 7:
            var7 = 'http:';
case 10:
            var6 = _closure1_slot9;
            var5 = var5.HermesInternal;
            var5 = var5.concat;
            var1 = var5.bind(var8)(var7, var9, var6);
case 4:
            var _closure2_slot2 = var1;
            var1 = var4 != var1;
            if(!var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 13: // try_start_0
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var2 = var5[var2];
                        var8 = undefined;
                        var6 = var4.bind(var8)(var2);
                        var5 = var6.requestPermission;
                        var2 = _closure1_slot10;
                        var4 = var2.CAMERA;
                        var2 = {};
                        var7 = true;
                        var2['showAuthorizationError'] = var7;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=70);
case 14:
                        return var2;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 8;
                        var4 = var6[var4];
                        var7 = var5.bind(var8)(var4);
                        var6 = var7.pushLazy;
                        var5 = _closure1_slot3;
                        var4 = function* () {
                            var1 = function* anon_0_() {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                                    var6 = undefined;
                                    var _closure6_slot0 = var6;
                                    var5 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var4 = 10;
                                    var4 = var2[var4];
                                    var5 = var5.bind(var6)(var4);
                                    var4 = 9;
                                    var4 = var2[var4];
                                    var2 = var2.paths;
                                    var2 = var5.bind(var6)(var4, var2);
                                    SaveGenerator(address=60);
case 2:
                                    return var2;
case 19:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 20:
                                    var4 = var2.default;
                                    _closure6_slot0 = var4;
                                    var3 = function() {
                                        var4 = _closure1_slot12;
                                        var3 = _closure6_slot0;
                                        var2 = {};
                                        var5 = _closure2_slot2;
                                        var2['webviewUrl'] = var5;
                                        var5 = _closure2_slot0;
                                        var2['onClose'] = var5;
                                        var1 = _closure2_slot1;
                                        var2['onComplete'] = var1;
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3, var2);
                                        return var1;
                                    };
                                    return var3;
case 6:
                                    return var2;
case 17:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var5 = var5.bind(var8)(var4);
                        var4 = _closure1_slot5;
                        var3 = {};
                        var3 = var6.bind(var7)(var5, var3, var4);
                        SaveGenerator(address=135);
case 21:
                        return var3;
case 22:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 23; continue _fun0002 }
case 24: // try_end0
                        _fun0002_ip = 25; continue _fun0002;
case 23:
                        return var3;
case 15:
                        return var2;
case 26: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 11;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.showFailedToast;
                        var2 = _closure1_slot11;
                        var2 = var2.TIGGER_PAWTECT_ERROR;
                        var2 = var4.bind(var5)(var2);
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var3)();
case 25:
                        var2 = undefined;
                        return var2;
case 4:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var2 = var2.bind(var3)();
            var1 = true;
case 11:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.AGE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = var7;
    var7 = var2.AGE_VERIFICATION_GET_STARTED_MODAL_KEY;
    var _closure1_slot6 = var7;
    var7 = var2.AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY;
    var _closure1_slot7 = var7;
    var2 = var2.VerificationVendorName;
    var _closure1_slot8 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AGE_VERIFICATION_INCODE_PATH;
    var _closure1_slot9 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativePermissionTypes;
    var _closure1_slot10 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SafetyToastType;
    var _closure1_slot11 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot12 = var2;
    var2 = {};
    var7 = function showAgeVerification(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var6 = var7.onClose;
            var9 = undefined;
            if(!(var6 === var9)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var6 = function n() {
                var1 = undefined;
                return var1;
            };
case 27:
            var _closure2_slot0 = var6;
            var1 = var7.shouldShowExpressiveModal;
            var4 = var7.webviewUrl;
            var _closure2_slot1 = var4;
            var8 = var7.verificationVendorName;
            var1 = var7.incodeParameters;
            var5 = {'onClose': 0, 'shouldShowExpressiveModal': 0, 'webviewUrl': 0, 'verificationVendorName': 0, 'incodeParameters': 0};
            var1 = null;
            var14 = var5;
            var13 = null;
            var2 = silentSetPrototypeOf(var14, var13);
            var14 = {};
            var13 = var7;
            var12 = var5;
            var5 = copyDataProperties(var14, var13, var12);
            var _closure2_slot2 = var5;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 12;
            var7 = var11[var7];
            var10 = var10.bind(var9)(var7);
            var7 = var10.isMetaQuest;
            var7 = var7.bind(var10)();
            if(var7) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var7 = _closure1_slot8;
            var7 = var7.INCODE;
            if(!(var8 === var7)) { _fun0004_ip = 10; continue _fun0004 }
case 31:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 15;
            var7 = var10[var7];
            var10 = var8.bind(var9)(var7);
            var8 = var10.isAgeVerificationIncodeEnabled;
            var7 = var5.entryPoint;
            var7 = var8.bind(var10)(var7);
            if(var7) { _fun0004_ip = 32; continue _fun0004 }
case 10:
            var1 = var1 != var4;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 8;
            var4 = var8[var4];
            var10 = var7.bind(var9)(var4);
            var8 = var10.pushLazy;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                        var6 = undefined;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 10;
                        var4 = var2[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = 16;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=60);
case 2:
                        return var2;
case 19:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0005_ip = 6; continue _fun0005 }
case 20:
                        var4 = var2.default;
                        _closure4_slot0 = var4;
                        var3 = function() {
                            var4 = _closure1_slot12;
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
case 6:
                        return var2;
case 17:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var4.bind(var9)(var3);
            var4 = _closure1_slot5;
            var3 = {};
            var3 = var8.bind(var10)(var7, var3, var4);
            var1 = true;
case 33:
            _fun0004_ip = 35; continue _fun0004;
case 32:
            var4 = _closure1_slot13;
            var3 = {};
            var3['onClose'] = var6;
            var5 = var5.onComplete;
            var3['onComplete'] = var5;
            var1 = var4.bind(var9)(var3);
case 35:
            _fun0004_ip = 36; continue _fun0004;
case 29:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 13;
            var3 = var10[var3];
            var5 = var4.bind(var9)(var3);
            var4 = var5.openAlert;
            var3 = _closure1_slot7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var2 = 14;
            var2 = var10[var2];
            var7 = var7.bind(var9)(var2);
            var2 = {};
            var2 = var8.bind(var9)(var7, var2);
            var2 = var4.bind(var5)(var3, var2, var6);
            var1 = true;
case 36:
            return var1;
        }
    };
    var2['showAgeVerification'] = var7;
    var7 = function showAgeVerificationGetStartedModal(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var11 = var1.entryPoint;
            var _closure2_slot0 = var11;
            var6 = var1.onClose;
            var _closure2_slot1 = var6;
            var1 = undefined;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var1;
            var _closure2_slot4 = var1;
            var5 = function handleClose() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.dispatch;
                    var3 = {};
                    var2 = 'CLOSE_AGE_VERIFICATION_MODAL';
                    var3['type'] = var2;
                    var6 = _closure2_slot3;
                    var3['status'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0007_ip = 16; continue _fun0007 }
case 14:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 16:
                    return var1;
                }
            };
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isMetaQuest;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var3 = 17;
            var3 = var9[var3];
            var7 = var4.bind(var1)(var3);
            var3 = var7.isAgeVerified;
            var3 = var3.bind(var7)();
            if(!var3) { _fun0006_ip = 15; continue _fun0006 }
case 39:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 18;
            var7 = var12[var7];
            var10 = var10.bind(var1)(var7);
            var7 = var10.hasAgeGatedFeatures;
            var3 = var7.bind(var10)();
case 15:
            _closure2_slot2 = var3;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 15;
            var7 = var12[var7];
            var10 = var10.bind(var1)(var7);
            var7 = var10.isAgeVerificationIncodeEnabled;
            var7 = var7.bind(var10)(var11);
            if(var7) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 20;
            var3 = var10[var3];
            var7 = var7.bind(var1)(var3);
            var3 = var7.isExpressiveModalV2Enabled;
            var3 = var3.bind(var7)(var11);
            if(!var3) { _fun0006_ip = 42; continue _fun0006 }
case 12:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 8;
            var3 = var10[var3];
            var13 = var7.bind(var1)(var3);
            var12 = var13.pushLazy;
            var7 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 17; continue _fun0008 }
case 18:
                        var6 = undefined;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 10;
                        var4 = var2[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = 21;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=60);
case 2:
                        return var2;
case 19:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0008_ip = 6; continue _fun0008 }
case 20:
                        var4 = var2.default;
                        _closure4_slot0 = var4;
                        var3 = function() {
                            var4 = _closure1_slot12;
                            var3 = _closure4_slot0;
                            var2 = {};
                            var1 = _closure2_slot0;
                            var2['entryPoint'] = var1;
                            var1 = function onClose() {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var3 = _closure2_slot1;
                                    var1 = null;
                                    var4 = var1 == var3;
                                    var3 = undefined;
                                    var1 = undefined;
                                    if(var4) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                                    var2 = _closure2_slot1;
                                    var1 = var2.bind(var3)();
case 44:
                                    return var1;
                                }
                            };
                            var2['onClose'] = var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        return var3;
case 6:
                        return var2;
case 17:
                        return var1;
                    }
                };
                return var1;
            };
            var10 = var7.bind(var1)(var3);
            var7 = _closure1_slot6;
            var3 = {};
            var3 = var12.bind(var13)(var10, var3, var7);
            _fun0006_ip = 46; continue _fun0006;
case 42:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 22;
            var3 = var10[var3];
            var7 = var7.bind(var1)(var3);
            var3 = var7.isAgeVerificationExpressiveModalEverywhereEnabled;
            var3 = var3.bind(var7)(var11);
            _closure2_slot4 = var3;
            var7 = _closure1_slot1;
            var3 = 8;
            var3 = var10[var3];
            var12 = var7.bind(var1)(var3);
            var11 = var12.pushLazy;
            var7 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0010_ip = 17; continue _fun0010 }
case 18:
                        var6 = undefined;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 10;
                        var4 = var2[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = 23;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=60);
case 2:
                        return var2;
case 19:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0010_ip = 6; continue _fun0010 }
case 20:
                        var4 = var2.default;
                        _closure4_slot0 = var4;
                        var3 = function() {
                            var4 = _closure1_slot12;
                            var3 = _closure4_slot0;
                            var2 = {};
                            var5 = _closure2_slot0;
                            var2['entryPoint'] = var5;
                            var5 = _closure2_slot2;
                            var2['isRetry'] = var5;
                            var1 = _closure2_slot4;
                            var2['useEmbeddedMethods'] = var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        return var3;
case 6:
                        return var2;
case 17:
                        return var1;
                    }
                };
                return var1;
            };
            var10 = var7.bind(var1)(var3);
            var7 = _closure1_slot6;
            var3 = {};
            var3 = var11.bind(var12)(var10, var3, var7);
            _fun0006_ip = 46; continue _fun0006;
case 40:
            var7 = _closure1_slot4;
            var3 = var7.getCurrentUser;
            var7 = var3.bind(var7)();
            var3 = null;
            var10 = var3 == var7;
            var3 = undefined;
            if(var10) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var3 = var7.ageVerificationStatus;
case 47:
            _closure2_slot3 = var3;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 19;
            var3 = var10[var3];
            var10 = var7.bind(var1)(var3);
            var7 = var10.dispatch;
            var3 = {};
            var11 = 'INITIATE_AGE_VERIFICATION';
            var3['type'] = var11;
            var3 = var7.bind(var10)(var3);
            var7 = _closure1_slot13;
            var3 = {};
            var3['onClose'] = var5;
            var8 = function onComplete() {
                var1 = undefined;
                return var1;
            };
            var3['onComplete'] = var8;
            var3 = var7.bind(var1)(var3);
            if(var3) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var5 = var5.bind(var1)();
            var3 = undefined;
case 49:
            var3 = undefined;
            return var3;
case 37:
            var3 = 13;
            var3 = var9[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.openAlert;
            var3 = _closure1_slot7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var2 = 14;
            var2 = var9[var2];
            var7 = var7.bind(var1)(var2);
            var2 = {};
            var2 = var8.bind(var1)(var7, var2);
            var2 = var4.bind(var5)(var3, var2, var6);
case 46:
            return var1;
        }
    };
    var2['showAgeVerificationGetStartedModal'] = var7;
    var4 = function openUrl(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 24;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openURL;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['openUrl'] = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/AgeVerificationActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();