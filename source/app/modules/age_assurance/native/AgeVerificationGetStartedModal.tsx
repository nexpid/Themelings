// app/modules/age_assurance/native/AgeVerificationGetStartedModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var1 = function getInitialRouteName(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot6;
            var1 = arg2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = arg1;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2.INTRO;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var1 = var2.RETRY;
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var1 = var2.EXPRESSIVE_INTRO;
case 7:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {};
    var10 = 3;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var10;
    var10 = 'transparent';
    var9['shadowColor'] = var10;
    var2['headerStyle'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var5 = 'INTRO';
    var2['INTRO'] = var5;
    var5 = 'RETRY';
    var2['RETRY'] = var5;
    var5 = 'EXPRESSIVE_INTRO';
    var2['EXPRESSIVE_INTRO'] = var5;
    var5 = 'GOOGLE_WALLET_VERIFICATION';
    var2['GOOGLE_WALLET_VERIFICATION'] = var5;
    var _closure1_slot6 = var2;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/age_assurance/native/AgeVerificationGetStartedModal.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function AgeVerificationGetStartedModal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var11 = var2.entryPoint;
            var _closure2_slot0 = var11;
            var7 = var2.isRetry;
            var _closure2_slot1 = var7;
            var6 = var2.useEmbeddedMethods;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = false;
case 8:
            var _closure2_slot2 = var6;
            var10 = var2.classificationId;
            var _closure2_slot3 = var10;
            var2 = var2.onComplete;
            var _closure2_slot4 = var2;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot5;
            var13 = var3.bind(var4)();
            _closure2_slot5 = var13;
            var8 = _closure1_slot3;
            var12 = var8.useMemo;
            var9 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.v4;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var12 = var12.bind(var8)(var9, var3);
            _closure2_slot6 = var12;
            var9 = var8.useMemo;
            var3 = new Array(5);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var10;
            var3[3] = var2;
            var3[4] = var11;
            var2 = function() {
                var12 = _closure2_slot5;
                var11 = _closure2_slot6;
                var10 = _closure2_slot0;
                var9 = _closure2_slot3;
                var8 = _closure2_slot4;
                var2 = function getScreens(arg1, arg2, arg3, arg4, arg5) {
                    var9 = arg1;
                    var1 = arg2;
                    var _closure4_slot0 = var1;
                    var1 = arg3;
                    var _closure4_slot1 = var1;
                    var1 = arg4;
                    var _closure4_slot2 = var1;
                    var1 = arg5;
                    var _closure4_slot3 = var1;
                    var13 = function closeModal() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var _closure4_slot4 = var13;
                    var1 = function closeModalWithOnComplete() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure4_slot4;
                            var1 = undefined;
                            var3 = var3.bind(var1)();
                            var4 = _closure4_slot3;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var2 = _closure4_slot3;
                            var2 = var2.bind(var1)();
case 10:
                            return var1;
                        }
                    };
                    var _closure4_slot5 = var1;
                    var1 = {};
                    var3 = _closure1_slot6;
                    var10 = var3.INTRO;
                    var3 = {};
                    var5 = var9.headerStyle;
                    var3['headerStyle'] = var5;
                    var5 = function headerTitle() {
                        var1 = null;
                        return var1;
                    };
                    var3['headerTitle'] = var5;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 5;
                    var11 = var8[var5];
                    var6 = undefined;
                    var12 = var7.bind(var6)(var11);
                    var11 = var12.getHeaderCloseButton;
                    var11 = var11.bind(var12)(var13);
                    var3['headerLeft'] = var11;
                    var11 = function render() {
                        var4 = _closure1_slot4;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = _closure4_slot4;
                        var1['onClose'] = var6;
                        var6 = _closure4_slot0;
                        var1['modalSessionId'] = var6;
                        var5 = _closure4_slot1;
                        var1['entryPoint'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['render'] = var11;
                    var1[9] = var3;
                    var3 = _closure1_slot6;
                    var10 = var3.RETRY;
                    var3 = {};
                    var11 = var9.headerStyle;
                    var3['headerStyle'] = var11;
                    var11 = function headerTitle() {
                        var1 = null;
                        return var1;
                    };
                    var3['headerTitle'] = var11;
                    var11 = var8[var5];
                    var12 = var7.bind(var6)(var11);
                    var11 = var12.getHeaderCloseButton;
                    var11 = var11.bind(var12)(var13);
                    var3['headerLeft'] = var11;
                    var11 = function render() {
                        var4 = _closure1_slot4;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = _closure4_slot4;
                        var1['onClose'] = var6;
                        var5 = _closure4_slot0;
                        var1['modalSessionId'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['render'] = var11;
                    var1[9] = var3;
                    var3 = _closure1_slot6;
                    var10 = var3.EXPRESSIVE_INTRO;
                    var3 = {};
                    var11 = var9.headerStyle;
                    var3['headerStyle'] = var11;
                    var11 = function headerTitle() {
                        var1 = null;
                        return var1;
                    };
                    var3['headerTitle'] = var11;
                    var11 = var8[var5];
                    var12 = var7.bind(var6)(var11);
                    var11 = var12.getHeaderCloseButton;
                    var11 = var11.bind(var12)(var13);
                    var3['headerLeft'] = var11;
                    var11 = function render(arg1, arg2) {
                        var4 = _closure1_slot4;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = _closure4_slot5;
                        var1['onClose'] = var6;
                        var6 = _closure4_slot0;
                        var1['modalSessionId'] = var6;
                        var6 = _closure4_slot2;
                        var1['classificationId'] = var6;
                        var5 = _closure4_slot1;
                        var1['entryPoint'] = var5;
                        var5 = arg2;
                        var1['navigation'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['render'] = var11;
                    var1[9] = var3;
                    var2 = _closure1_slot6;
                    var3 = var2.GOOGLE_WALLET_VERIFICATION;
                    var2 = {};
                    var9 = var9.headerStyle;
                    var2['headerStyle'] = var9;
                    var9 = function headerTitle() {
                        var1 = null;
                        return var1;
                    };
                    var2['headerTitle'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.getHeaderBackButton;
                    var5 = var5.bind(var6)();
                    var2['headerLeft'] = var5;
                    var4 = function render() {
                        var4 = _closure1_slot4;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = _closure4_slot5;
                        var1['onClose'] = var6;
                        var5 = _closure4_slot0;
                        var1['modalSessionId'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['render'] = var4;
                    var1[2] = var2;
                    return var1;
                };
                var13 = undefined;
                var1 = var13[var2](var12, var11, var10, var9, var8, var7);
                return var1;
            };
            var10 = var9.bind(var8)(var2, var3);
            var9 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var6;
            var3[1] = var7;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    if(var3) { _fun0004_ip = 12; continue _fun0004 }
case 3:
                    var1 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.AgeVerificationModalVersion;
                    if(var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var1 = var3.PRIMARY;
                    _fun0004_ip = 15; continue _fun0004;
case 13:
                    var1 = var3.RETRY;
case 15:
                    _fun0004_ip = 16; continue _fun0004;
case 12:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.AgeVerificationModalVersion;
                    var1 = var2.EXPRESSIVE_PRIMARY;
case 16:
                    return var1;
                }
            };
            var9 = var9.bind(var8)(var2, var3);
            _closure2_slot7 = var9;
            var3 = var8.useEffect;
            var2 = new Array(3);
            var2[0] = var12;
            var2[1] = var11;
            var2[2] = var9;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.trackAgeVerificationModalViewed;
                var4 = _closure2_slot6;
                var3 = _closure2_slot7;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var1 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot4;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Navigator;
            var1 = {};
            var1['screens'] = var10;
            var5 = _closure1_slot7;
            var5 = var5.bind(var4)(var7, var6);
            var1['initialRouteName'] = var5;
            var5 = 13;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5["13/7kX"];
            var5 = var6.bind(var7)(var5);
            var1['headerBackTitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['AgeVerificationGetStartedModalScenes'] = var2;
    return var1;
})();