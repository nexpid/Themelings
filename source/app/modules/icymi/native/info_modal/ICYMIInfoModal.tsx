// app/modules/icymi/native/info_modal/ICYMIInfoModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/info_modal/ICYMIInfoModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMIInfoModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.extendedOnboarding;
            var _closure2_slot0 = var1;
            var6 = var3.skipIntro;
            var _closure2_slot1 = var6;
            var4 = {};
            var4['extendedOnboarding'] = var1;
            var4['skipIntro'] = var6;
            var3 = function useScreens(arg1) {
                var2 = arg1;
                var6 = var2.extendedOnboarding;
                var _closure3_slot0 = var6;
                var5 = var2.skipIntro;
                var _closure3_slot1 = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.useNavigatorScreens;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = {};
                        var10 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 3;
                        var5 = var3[var2];
                        var6 = undefined;
                        var5 = var10.bind(var6)(var5);
                        var5 = var5.ICYMIInfoScreens;
                        var12 = var5.DEFAULT;
                        var11 = {};
                        var9 = 4;
                        var5 = var3[var9];
                        var7 = var10.bind(var6)(var5);
                        var5 = var7.getHeaderCloseButton;
                        var5 = var5.bind(var7)();
                        var11['headerLeft'] = var5;
                        var5 = function render() {
                            var4 = _closure1_slot4;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 5;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var5 = _closure3_slot0;
                            var1['extendedOnboarding'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var11['render'] = var5;
                        var7 = 6;
                        var5 = var3[var7];
                        var5 = var10.bind(var6)(var5);
                        var5 = var5.ImpressionNames;
                        var5 = var5.ICYMI_ONBOARDING_OVERVIEW;
                        var11['impressionName'] = var5;
                        var13 = {};
                        var14 = _closure3_slot0;
                        var13['extended_onboarding'] = var14;
                        var11['impressionProperties'] = var13;
                        var1[var12] = var11;
                        var3 = var3[var2];
                        var3 = var10.bind(var6)(var3);
                        var3 = var3.ICYMIInfoScreens;
                        var10 = var3.TOPICS_CLOUD;
                        var3 = {};
                        var5 = _closure3_slot1;
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var11 = var11[var9];
                        var13 = var12.bind(var6)(var11);
                        if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var5 = var13.getHeaderBackButton;
                        var5 = var5.bind(var13)();
                        _fun0002_ip = 4; continue _fun0002;
case 2:
                        var12 = var13.getHeaderCloseButton;
                        var11 = function() {
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 7;
                            var2 = var6[var2];
                            var5 = undefined;
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.popWithKey;
                            var4 = _closure1_slot0;
                            var1 = 3;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.ICYMI_INFO_MODAL_KEY;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var5 = var12.bind(var13)(var11);
case 4:
                        var3['headerLeft'] = var5;
                        var5 = function headerRight() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var2 = _closure3_slot1;
                                var1 = null;
                                if(var2) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                                var5 = _closure1_slot4;
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var2 = 8;
                                var2 = var10[var2];
                                var4 = undefined;
                                var2 = var9.bind(var4)(var2);
                                var3 = var2.HeaderActionButton;
                                var2 = {};
                                var6 = 9;
                                var7 = var10[var6];
                                var7 = var9.bind(var4)(var7);
                                var8 = var7.intl;
                                var7 = var8.string;
                                var6 = var10[var6];
                                var6 = var9.bind(var4)(var6);
                                var6 = var6.t;
                                var6 = var6.5WxrcX;
                                var6 = var7.bind(var8)(var6);
                                var2['text'] = var6;
                                var6 = function onPress() {
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 10;
                                    var3 = var4[var1];
                                    var1 = undefined;
                                    var3 = var5.bind(var1)(var3);
                                    var6 = var3.ICYMIAnalytics;
                                    var5 = var6.trackFeedOnboardingScreenSkipped;
                                    var3 = {};
                                    var7 = 'topics';
                                    var3['location'] = var7;
                                    var3 = var5.bind(var6)(var3);
                                    var3 = _closure1_slot1;
                                    var2 = 7;
                                    var2 = var4[var2];
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.pop;
                                    var2 = var2.bind(var3)();
                                    return var1;
                                };
                                var2['onPress'] = var6;
                                var1 = var5.bind(var4)(var3, var2);
case 5:
                                return var1;
                            }
                        };
                        var3['headerRight'] = var5;
                        var5 = function render() {
                            var4 = _closure1_slot4;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var3['render'] = var5;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var11 = var4[var7];
                        var11 = var5.bind(var6)(var11);
                        var11 = var11.ImpressionNames;
                        var11 = var11.ICYMI_ONBOARDING_TOPICS;
                        var3['impressionName'] = var11;
                        var1[var10] = var3;
                        var2 = var4[var2];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.ICYMIInfoScreens;
                        var3 = var2.JOIN_GUILDS;
                        var2 = {};
                        var9 = var4[var9];
                        var10 = var5.bind(var6)(var9);
                        var9 = var10.getHeaderBackButton;
                        var9 = var9.bind(var10)();
                        var2['headerLeft'] = var9;
                        var9 = function headerRight() {
                            var4 = _closure1_slot4;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 8;
                            var1 = var9[var1];
                            var3 = undefined;
                            var1 = var8.bind(var3)(var1);
                            var2 = var1.HeaderActionButton;
                            var1 = {};
                            var5 = 9;
                            var6 = var9[var5];
                            var6 = var8.bind(var3)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var3)(var5);
                            var5 = var5.t;
                            var5 = var5.5WxrcX;
                            var5 = var6.bind(var7)(var5);
                            var1['text'] = var5;
                            var5 = function onPress() {
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 10;
                                var3 = var4[var1];
                                var1 = undefined;
                                var3 = var5.bind(var1)(var3);
                                var6 = var3.ICYMIAnalytics;
                                var5 = var6.trackFeedOnboardingScreenSkipped;
                                var3 = {};
                                var7 = 'guilds';
                                var3['location'] = var7;
                                var3 = var5.bind(var6)(var3);
                                var3 = _closure1_slot1;
                                var2 = 7;
                                var2 = var4[var2];
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.pop;
                                var2 = var2.bind(var3)();
                                return var1;
                            };
                            var1['onPress'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var2['headerRight'] = var9;
                        var8 = function render() {
                            var4 = _closure1_slot4;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var2['render'] = var8;
                        var4 = var4[var7];
                        var4 = var5.bind(var6)(var4);
                        var4 = var4.ImpressionNames;
                        var4 = var4.ICYMI_ONBOARDING_SELECT_GUILDS;
                        var2['impressionName'] = var4;
                        var1[var3] = var2;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var5 = undefined;
            var9 = var3.bind(var5)(var4);
            var8 = _closure1_slot3;
            var4 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var6;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 3;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.ICYMIInfoScreens;
                    var4 = var1.DEFAULT;
                    var1 = new Array(1);
                    var1[0] = var4;
                    _fun0004_ip = 9; continue _fun0004;
case 7:
                    var2 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 3;
                    var3 = var7[var4];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.ICYMIInfoScreens;
                    if(var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var8 = var3.DEFAULT;
                    var2 = new Array(3);
                    var2[0] = var8;
                    var8 = var7[var4];
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.ICYMIInfoScreens;
                    var8 = var8.TOPICS_CLOUD;
                    var2[1] = var8;
                    var8 = var7[var4];
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.ICYMIInfoScreens;
                    var8 = var8.JOIN_GUILDS;
                    var2[2] = var8;
                    _fun0004_ip = 12; continue _fun0004;
case 10:
                    var8 = var3.TOPICS_CLOUD;
                    var3 = new Array(2);
                    var3[0] = var8;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.ICYMIInfoScreens;
                    var4 = var4.JOIN_GUILDS;
                    var3[1] = var4;
                    var2 = var3;
case 12:
                    var1 = var2;
case 9:
                    return var1;
                }
            };
            var8 = var4.bind(var8)(var2, var3);
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            if(var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = 13;
            var1 = var10[var1];
            var1 = var3.bind(var5)(var1);
            var2 = var1.Modal;
            var1 = {};
            var1['screens'] = var9;
            var11 = 3;
            var11 = var10[var11];
            var11 = var3.bind(var5)(var11);
            var11 = var11.ICYMIInfoScreens;
            var11 = var11.DEFAULT;
            var1['initialRouteName'] = var11;
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var2 = 14;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.StepModal;
            var2 = {};
            var2['screens'] = var9;
            var2['steps'] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 3;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.ICYMIInfoScreens;
            if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var7.DEFAULT;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var6 = var7.TOPICS_CLOUD;
case 18:
            var2['initialRouteName'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();