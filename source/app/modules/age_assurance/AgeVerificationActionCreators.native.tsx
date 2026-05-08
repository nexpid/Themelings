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
    var2 = var2.AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY;
    var _closure1_slot6 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = function showAgeVerification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var6 = var8.onClose;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = function s() {
                var1 = undefined;
                return var1;
            };
case 2:
            var _closure2_slot0 = var6;
            var2 = var8.shouldShowExpressiveModal;
            var5 = var8.webviewUrl;
            var _closure2_slot1 = var5;
            var7 = {'onClose': 0, 'shouldShowExpressiveModal': 0, 'webviewUrl': 0};
            var4 = null;
            var12 = var7;
            var11 = null;
            var2 = silentSetPrototypeOf(var12, var11);
            var12 = {};
            var11 = var8;
            var10 = var7;
            var2 = copyDataProperties(var12, var11, var10);
            var _closure2_slot2 = var2;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 3;
            var7 = var9[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.isMetaQuest;
            var7 = var7.bind(var8)();
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var4 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var8 = var5.bind(var1)(var4);
            var7 = var8.pushLazy;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var6 = undefined;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 8;
                        var4 = var2[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = 7;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=60);
case 10:
                        return var2;
case 11:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var4 = var2.default;
                        _closure4_slot0 = var4;
                        var3 = function() {
                            var4 = _closure1_slot7;
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
case 12:
                        return var2;
case 8:
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var4.bind(var1)(var3);
            var4 = _closure1_slot4;
            var3 = {};
            var3 = var7.bind(var8)(var5, var3, var4);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.openAlert;
            var3 = _closure1_slot6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var2 = 5;
            var2 = var9[var2];
            var7 = var7.bind(var1)(var2);
            var2 = {};
            var2 = var8.bind(var1)(var7, var2);
            var2 = var4.bind(var5)(var3, var2, var6);
case 6:
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
            if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var5 = 9;
            var5 = var9[var5];
            var7 = var4.bind(var1)(var5);
            var5 = var7.isAgeVerified;
            var5 = var5.bind(var7)();
            if(!var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 10;
            var7 = var11[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.hasAgeGatedFeatures;
            var5 = var7.bind(var8)();
case 16:
            _closure2_slot1 = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 11;
            var5 = var8[var5];
            var7 = var7.bind(var1)(var5);
            var5 = var7.isAgeVerificationExpressiveModalEverywhereEnabled;
            var5 = var5.bind(var7)(var10);
            _closure2_slot2 = var5;
            var7 = _closure1_slot1;
            var5 = 6;
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
                        if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                        var6 = undefined;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 8;
                        var4 = var2[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = 12;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=60);
case 10:
                        return var2;
case 11:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                        var4 = var2.default;
                        _closure4_slot0 = var4;
                        var3 = function() {
                            var4 = _closure1_slot7;
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
case 12:
                        return var2;
case 8:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var5.bind(var1)(var3);
            var5 = _closure1_slot5;
            var3 = {};
            var3 = var8.bind(var10)(var7, var3, var5);
            _fun0003_ip = 18; continue _fun0003;
case 14:
            var3 = 4;
            var3 = var9[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.openAlert;
            var3 = _closure1_slot6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var2 = 5;
            var2 = var9[var2];
            var7 = var7.bind(var1)(var2);
            var2 = {};
            var2 = var8.bind(var1)(var7, var2);
            var2 = var4.bind(var5)(var3, var2, var6);
case 18:
            return var1;
        }
    };
    var2['showAgeVerificationGetStartedModal'] = var7;
    var4 = function openUrl(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openURL;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['openUrl'] = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/AgeVerificationActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();