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
    var2 = var2.VerificationVendorName;
    var _closure1_slot6 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SafetyToastType;
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot8 = var2;
    var2 = {};
    var7 = function showAgeVerification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var2 = var9.onClose;
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = function o() {
                var1 = undefined;
                return var1;
            };
case 2:
            var _closure2_slot0 = var2;
            var2 = var9.shouldShowExpressiveModal;
            var7 = var9.verificationVendorName;
            var5 = var9.webviewUrl;
            var _closure2_slot1 = var5;
            var8 = var9.verificationRequestId;
            var6 = {'onClose': 0, 'shouldShowExpressiveModal': 0, 'verificationVendorName': 0, 'webviewUrl': 0, 'verificationRequestId': 0};
            var4 = null;
            var12 = var6;
            var11 = null;
            var2 = silentSetPrototypeOf(var12, var11);
            var12 = {};
            var11 = var9;
            var10 = var6;
            var2 = copyDataProperties(var12, var11, var10);
            var _closure2_slot2 = var2;
            var6 = _closure1_slot6;
            var6 = var6.PERSONA;
            if(!(var7 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 4;
            var6 = var9[var6];
            var9 = var7.bind(var1)(var6);
            var7 = var9.isAgeVerificationPersonaEnabled;
            var6 = 'AgeVerificationActionCreators';
            var6 = var7.bind(var9)(var6);
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var4 != var8)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 5;
            var6 = var9[var6];
            var6 = var7.bind(var1)(var6);
            var7 = var6.Inquiry;
            var6 = var7.fromInquiry;
            var8 = var6.bind(var7)(var8);
            var7 = var8.onComplete;
            var6 = function() {
                var3 = _closure2_slot2;
                var2 = var3.onComplete;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var8 = var7.bind(var8)(var6);
            var7 = var8.onError;
            var6 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.showFailedToast;
                var2 = _closure1_slot7;
                var2 = var2.TIGGER_PAWTECT_ERROR;
                var2 = var3.bind(var4)(var2);
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
                return var1;
            };
            var8 = var7.bind(var8)(var6);
            var7 = var8.onCanceled;
            var6 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var7 = var7.bind(var8)(var6);
            var6 = var7.build;
            var7 = var6.bind(var7)();
            var6 = var7.start;
            var6 = var6.bind(var7)();
            _fun0001_ip = 9; continue _fun0001;
case 6:
            return var1;
case 4:
            if(!(var4 != var5)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 7;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var4 = _closure1_slot3;
            var3 = function* () {
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
                        var4 = 9;
                        var4 = var2[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = 8;
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
                            var4 = _closure1_slot8;
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
            var4 = var4.bind(var1)(var3);
            var3 = _closure1_slot4;
            var2 = {};
            var2 = var5.bind(var6)(var4, var2, var3);
case 9:
            return var1;
        }
    };
    var2['showAgeVerification'] = var7;
    var7 = function showAgeVerificationGetStartedModal(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var1 = var1.entryPoint;
            var _closure2_slot0 = var1;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 10;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isAgeVerified;
            var4 = var4.bind(var5)();
            if(!var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 11;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.hasAgeGatedFeatures;
            var5 = var5.bind(var6)();
            if(var5) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 12;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.getIsGidgetPawtectEnabled;
            var6 = 'age_verification_utils';
            var5 = var7.bind(var8)(var6);
case 19:
            var4 = var5;
case 17:
            _closure2_slot1 = var4;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 7;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var6 = undefined;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 9;
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
                        _closure4_slot0 = var4;
                        var3 = function() {
                            var4 = _closure1_slot8;
                            var3 = _closure4_slot0;
                            var2 = {};
                            var5 = _closure2_slot0;
                            var2['entryPoint'] = var5;
                            var1 = _closure2_slot1;
                            var2['isRetry'] = var1;
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
            var4 = var4.bind(var1)(var3);
            var3 = _closure1_slot5;
            var2 = {};
            var2 = var5.bind(var6)(var4, var2, var3);
            return var1;
        }
    };
    var2['showAgeVerificationGetStartedModal'] = var7;
    var4 = function openUrl(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openURL;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['openUrl'] = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/AgeVerificationActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();