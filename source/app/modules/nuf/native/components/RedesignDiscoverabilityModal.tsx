// app/modules/nuf/native/components/RedesignDiscoverabilityModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function DiscoverabilityLandingScene(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.onComplete;
            var _closure2_slot0 = var7;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var8 = var5.bind(var4)(var3);
            var3 = var8.useNavigation;
            var8 = var3.bind(var8)();
            var _closure2_slot1 = var8;
            var3 = 10;
            var3 = var6[var3];
            var9 = var5.bind(var4)(var3);
            var6 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 33; continue _fun0002 }
 27:
                    var1 = var2.phone;
 33:
                    return var1;
                }
            };
            var10 = var6.bind(var9)(var5, var3);
            var _closure2_slot2 = var10;
            var3 = _closure1_slot5;
            var3 = var3.bind(var4)();
            var13 = var3.allowPhone;
            var _closure2_slot3 = var13;
            var9 = var3.name;
            var _closure2_slot4 = var9;
            var12 = var3.allowEmail;
            var _closure2_slot5 = var12;
            var11 = var13;
            if(var11) { _fun0001_ip = 150; continue _fun0001 }
 147:
            var11 = var12;
 150:
            _closure2_slot6 = var11;
            var6 = _closure1_slot3;
            var5 = var6.useCallback;
            var3 = new Array(7);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var11;
            var3[3] = var10;
            var3[4] = var9;
            var3[5] = var8;
            var3[6] = var7;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.updateDiscoverability;
                    var4 = {};
                    var7 = _closure2_slot3;
                    var4['phone'] = var7;
                    var7 = _closure2_slot5;
                    var4['email'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot6;
                    if(!var4) { _fun0003_ip = 91; continue _fun0003 }
 66:
                    var4 = _closure2_slot2;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0003_ip = 91; continue _fun0003 }
 76:
                    var4 = _closure2_slot3;
                    if(!var4) { _fun0003_ip = 91; continue _fun0003 }
 83:
                    var4 = _closure2_slot4;
                    if(!(var5 != var4)) { _fun0003_ip = 101; continue _fun0003 }
 91:
                    var4 = _closure2_slot0;
                    var4 = var4.bind(var1)();
                    _fun0003_ip = 147; continue _fun0003;
 101:
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 12;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.DiscoverabilityScenes;
                    var2 = var2.NAME;
                    var2 = var3.bind(var4)(var2);
 147:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onNext'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function DiscoverabilityNameScene(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var8 = var2.onComplete;
            var _closure2_slot0 = var8;
            var2 = _closure1_slot8;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var2 = _closure1_slot5;
            var2 = var2.bind(var4)();
            var9 = var2.name;
            var2 = var2.allowPhone;
            var _closure2_slot1 = var2;
            var10 = _closure1_slot3;
            var7 = var10.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var8;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0005_ip = 20; continue _fun0005 }
 10:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var10)(var2, var3);
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.startContactSyncForDiscoverability;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
                return var1;
            };
            var8 = var3.bind(var7)(var1, var2);
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
            if(!var10) { _fun0004_ip = 188; continue _fun0004 }
 185:
            var8 = var9;
 188:
            var5['initialName'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var2 = function RedesignDiscoverabilityModal(arg1) {
        var1 = arg1;
        var1 = var1.route;
        var1 = var1.params;
        var11 = var1.onComplete;
        var _closure2_slot0 = var11;
        var1 = _closure1_slot8;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 18;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var7 = var7.header;
        var1['headerStyle'] = var7;
        var10 = _closure1_slot3;
        var7 = var10.useMemo;
        var6 = new Array(1);
        var6[0] = var11;
        var5 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = _closure2_slot0;
                var3 = null;
                if(!(var3 == var4)) { _fun0006_ip = 24; continue _fun0006 }
 15:
                var3 = function() {
                    var1 = undefined;
                    return var1;
                };
                _fun0006_ip = 28; continue _fun0006;
 24:
                var3 = _closure2_slot0;
 28:
                var2 = function getScreens(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
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
                    var10 = function headerRight(arg1) {
                        var4 = _closure1_slot7;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 17;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = true;
                        var1['insideNavigator'] = var5;
                        var7 = arg1;
                        var8 = var1;
                        var5 = copyDataProperties(var8, var7);
                        var6 = function onPress() {
                            var3 = _closure4_slot0;
                            var2 = undefined;
                            var1 = true;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var5 = 'onPress';
                        var1[var5] = var6;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['headerRight'] = var10;
                    var10 = function render() {
                        var4 = _closure1_slot7;
                        var3 = _closure1_slot9;
                        var2 = {};
                        var1 = _closure4_slot0;
                        var2['onComplete'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
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
                        var2 = {};
                        var1 = _closure4_slot0;
                        var2['onComplete'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var2['render'] = var4;
                    var1[var3] = var2;
                    return var1;
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            }
        };
        var5 = var7.bind(var10)(var5, var6);
        var1['screens'] = var5;
        var5 = 12;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.DiscoverabilityScenes;
        var5 = var5.LANDING;
        var1['initialRouteName'] = var5;
        var5 = 19;
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
    var11 = {'borderBottomWidth': 0, 'backgroundColor': null, 'shadowColor': 'transparent'};
    var12 = 7;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_PRIMARY;
    var11['backgroundColor'] = var14;
    var4['header'] = var11;
    var11 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.HEADER_PRIMARY;
    var11['color'] = var14;
    var4['backButton'] = var11;
    var11 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_NORMAL;
    var11['color'] = var14;
    var4['skipButton'] = var11;
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
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/components/RedesignDiscoverabilityModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();