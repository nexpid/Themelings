// app/modules/nuf/native/components/DiscoverabilityModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function DiscoverabilityLandingScene() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var3);
            var3 = var7.useNavigation;
            var11 = var3.bind(var7)();
            var _closure2_slot0 = var11;
            var3 = 10;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.phone;
case 2:
                    return var1;
                }
            };
            var10 = var6.bind(var7)(var5, var3);
            var _closure2_slot1 = var10;
            var3 = _closure1_slot5;
            var3 = var3.bind(var4)();
            var8 = var3.allowPhone;
            var _closure2_slot2 = var8;
            var9 = var3.allowEmail;
            var _closure2_slot3 = var9;
            var7 = var8;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var9;
case 4:
            var _closure2_slot4 = var7;
            var6 = _closure1_slot3;
            var5 = var6.useCallback;
            var3 = new Array(5);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var9;
            var3[3] = var8;
            var3[4] = var7;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.updateDiscoverability;
                    var4 = {};
                    var7 = _closure2_slot2;
                    var4['phone'] = var7;
                    var7 = _closure2_slot3;
                    var4['email'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot4;
                    if(!var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var5 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                    var4 = _closure2_slot2;
                    if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 6:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.closeDiscoverabilityModal;
                    var4 = false;
                    var4 = var5.bind(var6)(var4);
                    _fun0003_ip = 10; continue _fun0003;
case 9:
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 12;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.DiscoverabilityScenes;
                    var2 = var2.NAME;
                    var2 = var3.bind(var4)(var2);
case 10:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onNext'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function DiscoverabilityNameScene() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot8;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var2 = _closure1_slot5;
            var2 = var2.bind(var4)();
            var9 = var2.name;
            var2 = var2.allowPhone;
            var _closure2_slot0 = var2;
            var8 = _closure1_slot3;
            var7 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.closeDiscoverabilityModal;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var3);
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 13;
                var5 = var4[var2];
                var1 = undefined;
                var7 = var3.bind(var1)(var5);
                var6 = var7.startContactSyncForDiscoverability;
                var5 = arg1;
                var5 = var6.bind(var7)(var5);
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.closeDiscoverabilityModal;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var8 = var3.bind(var7)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 15;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['onNext'] = var8;
            var8 = false;
            var5['loading'] = var8;
            var8 = null;
            var10 = var8 != var9;
            var8 = '';
            if(!var10) { _fun0004_ip = 13; continue _fun0004 }
case 10:
            var8 = var9;
case 13:
            var5['initialName'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var2 = function DiscoverabilityModal() {
        var4 = _closure1_slot7;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 17;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var10 = _closure1_slot3;
        var7 = var10.useMemo;
        var6 = function() {
            var2 = function getScreens() {
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 12;
                var3 = var8[var2];
                var6 = undefined;
                var3 = var7.bind(var6)(var3);
                var3 = var3.DiscoverabilityScenes;
                var9 = var3.LANDING;
                var3 = {'ignoreKeyboard': true, 'impressionName': null, 'fullscreen': true};
                var5 = 16;
                var10 = var8[var5];
                var10 = var7.bind(var6)(var10);
                var10 = var10.ImpressionNames;
                var10 = var10.DISCOVERABILITY;
                var3['impressionName'] = var10;
                var10 = function headerLeft() {
                    var1 = null;
                    return var1;
                };
                var3['headerLeft'] = var10;
                var10 = function headerTitle() {
                    var1 = null;
                    return var1;
                };
                var3['headerTitle'] = var10;
                var10 = function render() {
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot9;
                    var2 = undefined;
                    var1 = {};
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                };
                var3['render'] = var10;
                var1[var9] = var3;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.DiscoverabilityScenes;
                var3 = var2.NAME;
                var2 = {'ignoreKeyboard': true, 'impressionName': null, 'fullscreen': true};
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.ImpressionNames;
                var5 = var5.DISCOVERABILITY;
                var2['impressionName'] = var5;
                var5 = function headerTitle() {
                    var1 = null;
                    return var1;
                };
                var2['headerTitle'] = var5;
                var4 = function render() {
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot10;
                    var2 = undefined;
                    var1 = {};
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                };
                var2['render'] = var4;
                var1[var3] = var2;
                return var1;
            };
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5 = new Array(0);
        var5 = var7.bind(var10)(var6, var5);
        var1['screens'] = var5;
        var5 = 12;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.DiscoverabilityScenes;
        var5 = var5.LANDING;
        var1['initialRouteName'] = var5;
        var5 = 18;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.13/7kZ;
        var5 = var6.bind(var7)(var5);
        var1['headerBackTitle'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useContactSyncModalStore;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ModalAnimation;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var4 = {};
    var11 = {};
    var12 = 7;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.HEADER_PRIMARY;
    var11['color'] = var14;
    var4['backButton'] = var11;
    var11 = {'flex': 1, 'backgroundColor': null, 'justifyContent': 'center', 'paddingBottom': 44};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_PRIMARY;
    var11['backgroundColor'] = var12;
    var12 = 8;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var13 = var12.NAV_BAR_HEIGHT;
    var12 = 32;
    var12 = var13 + var12;
    var11['paddingTop'] = var12;
    var4['container'] = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = var7.SLIDE_IN_OUT;
    var4['animation'] = var7;
    var2['modalConfig'] = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/components/DiscoverabilityModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();