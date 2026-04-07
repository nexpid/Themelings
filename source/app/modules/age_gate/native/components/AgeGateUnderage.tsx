// app/modules/age_gate/native/components/AgeGateUnderage.tsx
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'alignItems': 'center', 'justifyContent': 'center', 'flex': 1, 'padding': 16, 'paddingTop': 0};
            var3 = 16;
            var5 = arg1;
            var4 = 0;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 80;
case 2:
            var2['paddingBottom'] = var4;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.colors;
            var4 = var4.BACKGROUND_BASE_LOW;
            var2['backgroundColor'] = var4;
            var1['container'] = var2;
            var2 = {};
            var2['marginTop'] = var3;
            var1['header'] = var2;
            var2 = {'marginTop': 8, 'lineHeight': 20, 'textAlign': 'center'};
            var1['body'] = var2;
            var2 = {'width': '100%', 'marginTop': 24};
            var1['buttonWrapper'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_gate/native/components/AgeGateUnderage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AgeGateUnderage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var17 = var2.onClose;
            var _closure2_slot0 = var17;
            var21 = var2.underageMessage;
            var7 = var2.existingUser;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var7 = false;
case 4:
            var _closure2_slot1 = var7;
            var12 = var2.fromRegister;
            if(!(var12 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var12 = false;
case 6:
            var2 = var2.disableSwipe;
            if(!(var2 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = false;
case 8:
            var _closure2_slot2 = var2;
            var _closure2_slot3 = var4;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.bind(var4)();
            var3 = _closure1_slot9;
            var14 = var3.bind(var4)(var5);
            var3 = _closure1_slot0;
            var8 = 7;
            var8 = var6[var8];
            var9 = var3.bind(var4)(var8);
            var8 = var9.useNavigation;
            var13 = var8.bind(var9)();
            _closure2_slot3 = var13;
            var10 = _closure1_slot3;
            var9 = var10.useLayoutEffect;
            var8 = new Array(4);
            var8[0] = var17;
            var8[1] = var7;
            var8[2] = var13;
            var8[3] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = var3.setOptions;
                    var1 = {};
                    var5 = _closure2_slot1;
                    if(var5) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 8;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.getHeaderBackButton;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var7)(var5);
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var5 = function() {
                        var1 = null;
                        return var1;
                    };
case 12:
                    var1['headerLeft'] = var5;
                    var4 = _closure2_slot2;
                    var4 = !var4;
                    var1['gestureEnabled'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var2, var8);
            var2 = 9;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigatorBackPressHandler;
            var1 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = true;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var20 = 10;
            var2 = var1[var20];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var20];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            if(var7) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var6 = var1.nCB6Ga;
            var16 = var2.bind(var3)(var6);
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var1 = var1.NR/zrG;
            var16 = var2.bind(var3)(var1);
case 15:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var14.container;
            var1['style'] = var6;
            var6 = null;
            var8 = null;
            if(var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var10 = _closure1_slot6;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 11;
            var5 = var13[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var8 = var10.bind(var4)(var9, var5);
case 16:
            var5 = new Array(6);
            var5[0] = var8;
            var10 = _closure1_slot6;
            var15 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 12;
            var8 = var13[var8];
            var9 = var15.bind(var4)(var8);
            var8 = {};
            var8 = var10.bind(var4)(var9, var8);
            var5[1] = var8;
            var9 = _closure1_slot0;
            var8 = 13;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var18 = var8.ShieldSpotIllustration;
            var8 = {};
            var8 = var10.bind(var4)(var18, var8);
            var5[2] = var8;
            var8 = 14;
            var8 = var13[var8];
            var15 = var15.bind(var4)(var8);
            var8 = {};
            var18 = var14.header;
            var8['style'] = var18;
            var8['children'] = var16;
            var8 = var10.bind(var4)(var15, var8);
            var5[3] = var8;
            var8 = 15;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.TextWithIOSLinkWorkaround;
            var8 = {'style': null, 'variant': 'text-md/medium', 'color': 'interactive-text-default'};
            var13 = var14.body;
            var8['style'] = var13;
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var15 = var13[var20];
            var15 = var18.bind(var4)(var15);
            var16 = var15.intl;
            if(var12) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var19 = var16.format;
            var12 = var13[var20];
            var12 = var18.bind(var4)(var12);
            var12 = var12.t;
            var15 = var12.b0QzXe;
            var12 = {};
            if(!(var6 == var21)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var23 = var22[var20];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var20];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.WqEH4D;
            var21 = var23.bind(var24)(var22);
case 20:
            var12['underageMessage'] = var21;
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var21 = 16;
            var21 = var23[var21];
            var23 = var22.bind(var4)(var21);
            var22 = var23.getArticleURL;
            var21 = _closure1_slot5;
            var21 = var21.AGE_GATE;
            var21 = var22.bind(var23)(var21);
            var12['helpURL'] = var21;
            var12 = var19.bind(var16)(var15, var12);
            _fun0002_ip = 22; continue _fun0002;
case 18:
            var15 = var16.string;
            var13 = var13[var20];
            var13 = var18.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.GDQgHL;
            var12 = var15.bind(var16)(var13);
case 22:
            var8['children'] = var12;
            var8 = var10.bind(var4)(var9, var8);
            var5[4] = var8;
            var6 = null;
            if(!var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var9 = _closure1_slot8;
            var8 = _closure1_slot7;
            var7 = {};
            var13 = _closure1_slot6;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 17;
            var10 = var16[var10];
            var10 = var19.bind(var4)(var10);
            var12 = var10.Text;
            var10 = {'style': null, 'variant': 'text-md/medium', 'color': 'interactive-text-default'};
            var15 = var14.body;
            var10['style'] = var15;
            var15 = var16[var20];
            var15 = var19.bind(var4)(var15);
            var22 = var15.intl;
            var21 = var22.format;
            var15 = var16[var20];
            var15 = var19.bind(var4)(var15);
            var15 = var15.t;
            var18 = var15["3axQdB"];
            var15 = {};
            var23 = 30;
            var15['days'] = var23;
            var15 = var21.bind(var22)(var18, var15);
            var10['children'] = var15;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var12 = _closure1_slot4;
            var11 = {};
            var14 = var14.buttonWrapper;
            var11['style'] = var14;
            var14 = 18;
            var14 = var16[var14];
            var14 = var19.bind(var4)(var14);
            var15 = var14.Button;
            var14 = {};
            var14['onPress'] = var17;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.JhDw5o;
            var16 = var17.bind(var18)(var16);
            var14['text'] = var16;
            var16 = true;
            var14['grow'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 23:
            var5[5] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();