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
    var7 = var2.AGE_VERIFICATION_INCODE_UNSUPPORTED_ALERT_KEY;
    var _closure1_slot6 = var7;
    var7 = var2.AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY;
    var _closure1_slot7 = var7;
    var2 = var2.VerificationVendorName;
    var _closure1_slot8 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot9 = var2;
    var2 = {};
    var7 = function showAgeVerification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var6 = var7.onClose;
            var9 = undefined;
            if(!(var6 === var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = function n() {
                var1 = undefined;
                return var1;
            };
case 2:
            var _closure2_slot0 = var6;
            var1 = var7.shouldShowExpressiveModal;
            var4 = var7.webviewUrl;
            var _closure2_slot1 = var4;
            var8 = var7.verificationVendorName;
            var5 = {'onClose': 0, 'shouldShowExpressiveModal': 0, 'webviewUrl': 0, 'verificationVendorName': 0};
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
            var7 = 3;
            var7 = var11[var7];
            var10 = var10.bind(var9)(var7);
            var7 = var10.isMetaQuest;
            var7 = var7.bind(var10)();
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot8;
            var7 = var7.INCODE;
            if(!(var8 === var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 6;
            var7 = var10[var7];
            var8 = var8.bind(var9)(var7);
            var7 = var8.isAgeVerificationIncodeEnabled;
            var5 = var5.entryPoint;
            var5 = var7.bind(var8)(var5);
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 8;
            var4 = var7[var4];
            var8 = var5.bind(var9)(var4);
            var7 = var8.pushLazy;
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
                        var4 = 10;
                        var4 = var2[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = 9;
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
                            var4 = _closure1_slot9;
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
            var5 = var4.bind(var9)(var3);
            var4 = _closure1_slot4;
            var3 = {};
            var3 = var7.bind(var8)(var5, var3, var4);
            var1 = true;
case 9:
            _fun0001_ip = 17; continue _fun0001;
case 8:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 4;
            var3 = var11[var3];
            var7 = var4.bind(var9)(var3);
            var5 = var7.openAlert;
            var4 = _closure1_slot6;
            var10 = _closure1_slot9;
            var8 = _closure1_slot1;
            var3 = 7;
            var3 = var11[var3];
            var8 = var8.bind(var9)(var3);
            var3 = {};
            var3 = var10.bind(var9)(var8, var3);
            var3 = var5.bind(var7)(var4, var3, var6);
            var1 = true;
case 17:
            _fun0001_ip = 18; continue _fun0001;
case 4:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 4;
            var3 = var10[var3];
            var5 = var4.bind(var9)(var3);
            var4 = var5.openAlert;
            var3 = _closure1_slot7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var2 = 5;
            var2 = var10[var2];
            var7 = var7.bind(var9)(var2);
            var2 = {};
            var2 = var8.bind(var9)(var7, var2);
            var2 = var4.bind(var5)(var3, var2, var6);
            var1 = true;
case 18:
            return var1;
        }
    };
    var2['showAgeVerification'] = var7;
    var7 = function showAgeVerificationGetStartedModal(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            var4 = 3;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isMetaQuest;
            var5 = var4.bind(var5)();
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            if(var5) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var5 = 11;
            var5 = var9[var5];
            var7 = var4.bind(var1)(var5);
            var5 = var7.isAgeVerified;
            var5 = var5.bind(var7)();
            if(!var5) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 12;
            var7 = var11[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.hasAgeGatedFeatures;
            var5 = var7.bind(var8)();
case 21:
            _closure2_slot1 = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 13;
            var5 = var8[var5];
            var7 = var7.bind(var1)(var5);
            var5 = var7.isAgeVerificationExpressiveModalEverywhereEnabled;
            var5 = var5.bind(var7)(var10);
            _closure2_slot2 = var5;
            var7 = _closure1_slot1;
            var5 = 8;
            var5 = var8[var5];
            var10 = var7.bind(var1)(var5);
            var8 = var10.pushLazy;
            var5 = _closure1_slot3;
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
                        var4 = 10;
                        var4 = var2[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = 14;
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
                            var4 = _closure1_slot9;
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
            _fun0003_ip = 23; continue _fun0003;
case 19:
            var3 = 4;
            var3 = var9[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.openAlert;
            var3 = _closure1_slot7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var2 = 5;
            var2 = var9[var2];
            var7 = var7.bind(var1)(var2);
            var2 = {};
            var2 = var8.bind(var1)(var7, var2);
            var2 = var4.bind(var5)(var3, var2, var6);
case 23:
            return var1;
        }
    };
    var2['showAgeVerificationGetStartedModal'] = var7;
    var4 = function openUrl(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openURL;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['openUrl'] = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/AgeVerificationActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();