// app/modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot8 = var5;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var5 = {'flex': 1, 'height': '100%'};
    var4['container'] = var5;
    var5 = {'height': '100%', 'flex': 1, 'justifyContent': 'space-between'};
    var4['modal'] = var5;
    var5 = 16;
    var10 = {'flexGrow': 0, 'paddingLeft': 16, 'paddingTop': 16, 'paddingRight': 16};
    var4['button'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'STEP_1';
    var4['STEP_1'] = var8;
    var8 = 'STEP_2';
    var4['STEP_2'] = var8;
    var8 = 'STEP_3';
    var4['STEP_3'] = var8;
    var _closure1_slot11 = var4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx';
    var5 = var6.bind(var7)(var5);
    var3['EnableCommunityModalSteps'] = var4;
    var2 = function EnableCommunityModalScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.onSuccess;
            var _closure2_slot0 = var2;
            var14 = var1.disableNextStep;
            var10 = var1.children;
            var16 = var1.buttonText;
            var2 = var1.currentStep;
            var _closure2_slot1 = var2;
            var4 = var1.headerRef;
            var _closure2_slot2 = var4;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var1 = _closure1_slot10;
            var12 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var7 = var3.bind(var5)(var1);
            var6 = var7.useStateFromStoresObject;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var6.bind(var7)(var3, var1);
            var1 = var1.guild;
            var _closure2_slot3 = var1;
            var17 = null;
            var6 = var17 == var1;
            var3 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var1.features;
            var7 = var8.has;
            var6 = _closure1_slot7;
            var6 = var6.COMMUNITY;
            var3 = var7.bind(var8)(var6);
case 2:
            _closure2_slot4 = var3;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 7;
            var6 = var8[var6];
            var9 = var7.bind(var5)(var6);
            var6 = var9.useNavigation;
            var6 = var6.bind(var9)();
            _closure2_slot5 = var6;
            var6 = 8;
            var6 = var8[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.useIsScreenReaderEnabled;
            var11 = var6.bind(var7)();
            _closure2_slot6 = var11;
            var9 = var17 != var1;
            _closure2_slot7 = var9;
            var7 = _closure1_slot3;
            var8 = var7.useEffect;
            var6 = new Array(3);
            var6[0] = var11;
            var6[1] = var9;
            var6[2] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot6;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot7;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 7; continue _fun0002 }
case 4:
                    var2 = undefined;
                    return var2;
case 7:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setAccessibilityFocus;
                        var1 = {};
                        var4 = _closure2_slot2;
                        var1['ref'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = 100;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = var8.bind(var7)(var4, var6);
            var6 = var7.useEffect;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.close;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var4);
            if(!(var17 != var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var1 = {};
            var6 = var12.container;
            var1['style'] = var6;
            var8 = _closure1_slot9;
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 13;
            var6 = var18[var6];
            var6 = var13.bind(var5)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {};
            var9 = true;
            var6['bottom'] = var9;
            var9 = var12.modal;
            var6['style'] = var9;
            var11 = _closure1_slot4;
            var9 = {};
            var19 = {};
            var20 = 1;
            var19['flexGrow'] = var20;
            var9['style'] = var19;
            var9['children'] = var10;
            var10 = var4.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var12 = var12.button;
            var10['style'] = var12;
            var12 = 14;
            var12 = var18[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.Button;
            var12 = {'variant': 'primary', 'grow': true};
            if(!(var17 == var16)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 15;
            var18 = var21[var17];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.PDTjLN;
            var16 = var18.bind(var19)(var17);
case 12:
            var12['text'] = var16;
            var15 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var5 = _closure2_slot1;
                    var3 = _closure1_slot11;
                    var3 = var3.STEP_1;
                    if(!(var3 !== var5)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = _closure1_slot11;
                    var3 = var3.STEP_2;
                    if(!(var3 !== var5)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var3 = _closure2_slot0;
                    if(!(var4 != var3)) { _fun0004_ip = 14; continue _fun0004 }
case 20:
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot3;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    _fun0004_ip = 14; continue _fun0004;
case 18:
                    var5 = _closure2_slot5;
                    var4 = var5.push;
                    var3 = _closure1_slot11;
                    var3 = var3.STEP_3;
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 14; continue _fun0004;
case 16:
                    var3 = _closure2_slot5;
                    var2 = var3.push;
                    var1 = _closure1_slot11;
                    var1 = var1.STEP_2;
                    var1 = var2.bind(var3)(var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var12['onPress'] = var15;
            var12['disabled'] = var14;
            var12 = var4.bind(var5)(var13, var12);
            var10['children'] = var12;
            var10 = var4.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 21; continue _fun0001;
case 10:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.SceneLoadingIndicator;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var3['EnableCommunityModalScreen'] = var2;
    return var1;
})();