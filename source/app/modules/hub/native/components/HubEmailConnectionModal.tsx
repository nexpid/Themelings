// app/modules/hub/native/components/HubEmailConnectionModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getScreens(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var10 = undefined;
            var3 = var3.bind(var10)(var1);
            var1 = arg2;
            if(var1) { _fun0001_ip = 49; continue _fun0001 }
 36:
            var1 = var3.getHeaderCloseButton;
            var7 = var1.bind(var3)(var5);
            _fun0001_ip = 60; continue _fun0001;
 49:
            var1 = var3.getHeaderBackButton;
            var7 = var1.bind(var3)(var5);
 60:
            var1 = {};
            var3 = _closure1_slot4;
            var5 = var3.STUDENT_PROMPT;
            var3 = {};
            var6 = true;
            var3['fullscreen'] = var6;
            var3['headerLeft'] = var7;
            var8 = function headerTitle() {
                var1 = null;
                return var1;
            };
            var3['headerTitle'] = var8;
            var8 = function render(arg1) {
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var8;
            var1[var5] = var3;
            var3 = _closure1_slot4;
            var5 = var3.VERIFY_EMAIL;
            var3 = {};
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 7;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.ImpressionNames;
            var8 = var8.HUB_EMAIL_SIGNUP;
            var3['impressionName'] = var8;
            var8 = function impressionProperties(arg1) {
                var1 = arg1;
                var3 = var1.invite;
                var1 = {};
                var2 = null;
                var2 = var2 != var3;
                var1['has_invite'] = var2;
                return var1;
            };
            var3['impressionProperties'] = var8;
            var3['fullscreen'] = var6;
            var3['headerLeft'] = var7;
            var7 = function headerTitle() {
                var1 = null;
                return var1;
            };
            var3['headerTitle'] = var7;
            var7 = function render(arg1) {
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var7;
            var1[var5] = var3;
            var3 = _closure1_slot4;
            var5 = var3.EMAIL_WAITLIST;
            var3 = {};
            var3['fullscreen'] = var6;
            var7 = function headerTitle() {
                var1 = null;
                return var1;
            };
            var3['headerTitle'] = var7;
            var7 = function render(arg1) {
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var7;
            var1[var5] = var3;
            var3 = _closure1_slot4;
            var5 = var3.SUBMIT_SCHOOL;
            var3 = {};
            var3['fullscreen'] = var6;
            var7 = function headerTitle() {
                var1 = null;
                return var1;
            };
            var3['headerTitle'] = var7;
            var7 = function render(arg1) {
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var7;
            var1[var5] = var3;
            var3 = _closure1_slot4;
            var5 = var3.SELECT_SCHOOL;
            var3 = {};
            var3['fullscreen'] = var6;
            var7 = function headerTitle() {
                var1 = null;
                return var1;
            };
            var3['headerTitle'] = var7;
            var7 = function render(arg1) {
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var7;
            var1[var5] = var3;
            var3 = _closure1_slot4;
            var5 = var3.VERIFY_PIN;
            var3 = {};
            var3['fullscreen'] = var6;
            var6 = function headerTitle() {
                var1 = null;
                return var1;
            };
            var3['headerTitle'] = var6;
            var6 = function render(arg1) {
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var6;
            var1[var5] = var3;
            var2 = _closure1_slot4;
            var3 = var2.SELECT_SCHOOL_SEARCH;
            var2 = {'fullscreen': true, 'headerShown': false};
            var4 = function render(arg1) {
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['render'] = var4;
            var1[var3] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HubEmailConnectionSteps;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 4;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.NAV_BAR_HEIGHT;
    var9['marginTop'] = var11;
    var9['flex'] = var10;
    var4['safeArea'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/native/components/HubEmailConnectionModal.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function HubEmailConnectionModal(arg1) {
        var1 = arg1;
        var3 = var1.isNestedNavigator;
        var _closure2_slot0 = var3;
        var3 = var1.onCloseExtra;
        var _closure2_slot1 = var3;
        var3 = var1.invite;
        var _closure2_slot2 = var3;
        var1 = var1.displayStudentPrompt;
        var _closure2_slot3 = var1;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideHubUpsell;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3 = new Array(0);
        var3 = var5.bind(var6)(var4, var3);
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 16;
        var3 = var9[var3];
        var4 = undefined;
        var5 = var8.bind(var4)(var3);
        var3 = var5.useNavigation;
        var3 = var3.bind(var5)();
        var _closure2_slot4 = var3;
        var5 = _closure1_slot1;
        var3 = 17;
        var3 = var9[var3];
        var3 = var5.bind(var4)(var3);
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = function handleClose() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0003_ip = 11; continue _fun0003 }
 9:
                        var5 = false;
 11:
                        var4 = _closure2_slot1;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0003_ip = 39; continue _fun0003 }
 24:
                        var4 = _closure2_slot1;
                        var3 = true;
                        var3 = var3 === var5;
                        var3 = var4.bind(var1)(var3);
 39:
                        var3 = _closure2_slot0;
                        if(var3) { _fun0003_ip = 81; continue _fun0003 }
 46:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 18;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.close;
                        var3 = var3.bind(var4)();
                        _fun0003_ip = 95; continue _fun0003;
 81:
                        var3 = _closure2_slot4;
                        var2 = var3.goBack;
                        var2 = var2.bind(var3)();
 95:
                        return var1;
                    }
                };
                var2 = new Array(0);
                var8 = _closure2_slot3;
                var5 = var2.push;
                var1 = {};
                var7 = _closure1_slot4;
                if(var8) { _fun0002_ip = 75; continue _fun0002 }
 37:
                var8 = var7.VERIFY_EMAIL;
                var1['name'] = var8;
                var8 = {};
                var9 = _closure2_slot2;
                var8['invite'] = var9;
                var8['onClose'] = var6;
                var1['params'] = var8;
                var8 = var5.bind(var2)(var1);
                _fun0002_ip = 102; continue _fun0002;
 75:
                var7 = var7.STUDENT_PROMPT;
                var1['name'] = var7;
                var7 = {};
                var7['onClose'] = var6;
                var1['params'] = var7;
                var1 = var5.bind(var2)(var1);
 102:
                var1 = {};
                var5 = _closure1_slot7;
                var4 = _closure2_slot0;
                var3 = undefined;
                var3 = var5.bind(var3)(var6, var4);
                var1['screens'] = var3;
                var1['initialRouteStack'] = var2;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var6 = var2.screens;
        var5 = var2.initialRouteStack;
        var3 = _closure1_slot5;
        var1 = 19;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var6;
        var1['initialRouteStack'] = var5;
        var5 = 20;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.13/7kZ;
        var5 = var6.bind(var7)(var5);
        var1['headerBackTitle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function HubEmailConnectionScreen(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var2 = _closure1_slot6;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 14;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.SafeAreaPaddingView;
        var1 = {};
        var7 = true;
        var1['top'] = var7;
        var6 = var6.safeArea;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['HubEmailConnectionScreen'] = var2;
    return var1;
})();