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
    var8 = var6.bind(var1)(var4);
    var5 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'height': '100%'};
    var4['container'] = var9;
    var9 = {'height': '100%', 'flex': 1, 'justifyContent': 'space-between'};
    var4['modal'] = var9;
    var9 = {'flexGrow': 0, 'paddingLeft': 16, 'paddingTop': 16, 'paddingRight': 16};
    var4['button'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var5 = 'STEP_1';
    var4['STEP_1'] = var5;
    var5 = 'STEP_2';
    var4['STEP_2'] = var5;
    var5 = 'STEP_3';
    var4['STEP_3'] = var5;
    var _closure1_slot11 = var4;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx';
    var5 = var6.bind(var7)(var5);
    var3['EnableCommunityModalSteps'] = var4;
    var2 = function EnableCommunityModalScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.onSuccess;
            var _closure2_slot0 = var2;
            var14 = var1.disableNextStep;
            var10 = var1.children;
            var16 = var1.buttonText;
            var1 = var1.currentStep;
            var _closure2_slot1 = var1;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var1 = _closure1_slot10;
            var13 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var4 = var6.useStateFromStoresObject;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var4.bind(var6)(var3, var1);
            var1 = var1.guild;
            var _closure2_slot2 = var1;
            var17 = null;
            var4 = var17 == var1;
            var3 = undefined;
            if(var4) { _fun0001_ip = 160; continue _fun0001 }
 134:
            var7 = var1.features;
            var6 = var7.has;
            var4 = _closure1_slot7;
            var4 = var4.COMMUNITY;
            var3 = var6.bind(var7)(var4);
 160:
            _closure2_slot3 = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 7;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useNavigation;
            var4 = var4.bind(var6)();
            _closure2_slot4 = var4;
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0002_ip = 55; continue _fun0002 }
 10:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.close;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var4);
            if(!(var17 != var1)) { _fun0001_ip = 523; continue _fun0001 }
 235:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var1 = {};
            var6 = var13.container;
            var1['style'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 11;
            var6 = var12[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {};
            var9 = true;
            var6['bottom'] = var9;
            var9 = var13.modal;
            var6['style'] = var9;
            var11 = _closure1_slot4;
            var9 = {};
            var18 = {};
            var19 = 1;
            var18['flexGrow'] = var19;
            var9['style'] = var18;
            var9['children'] = var10;
            var10 = var4.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var13 = var13.button;
            var10['style'] = var13;
            var13 = _closure1_slot1;
            var18 = 12;
            var12 = var12[var18];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            if(!(var17 == var16)) { _fun0001_ip = 429; continue _fun0001 }
 374:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 13;
            var19 = var22[var17];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var17 = var22[var17];
            var17 = var21.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.PDTjLC;
            var16 = var19.bind(var20)(var17);
 429:
            var12['text'] = var16;
            var17 = _closure1_slot1;
            var16 = _closure1_slot2;
            var16 = var16[var18];
            var16 = var17.bind(var5)(var16);
            var16 = var16.Colors;
            var16 = var16.BRAND;
            var12['color'] = var16;
            var15 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot11;
                    var3 = var3.STEP_1;
                    if(!(var3 !== var4)) { _fun0003_ip = 91; continue _fun0003 }
 24:
                    var3 = _closure1_slot11;
                    var3 = var3.STEP_2;
                    if(!(var3 !== var4)) { _fun0003_ip = 65; continue _fun0003 }
 38:
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 115; continue _fun0003 }
 48:
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot2;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    _fun0003_ip = 115; continue _fun0003;
 65:
                    var5 = _closure2_slot4;
                    var4 = var5.push;
                    var3 = _closure1_slot11;
                    var3 = var3.STEP_3;
                    var3 = var4.bind(var5)(var3);
                    _fun0003_ip = 115; continue _fun0003;
 91:
                    var3 = _closure2_slot4;
                    var2 = var3.push;
                    var1 = _closure1_slot11;
                    var1 = var1.STEP_2;
                    var1 = var2.bind(var3)(var1);
 115:
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
            _fun0001_ip = 561; continue _fun0001;
 523:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.SceneLoadingIndicator;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
 561:
            return var1;
        }
    };
    var3['EnableCommunityModalScreen'] = var2;
    return var1;
})();