// app/modules/age_gate/native/components/AgeGateUnderage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignItems': 'center', 'justifyContent': 'center', 'flex': 1, 'padding': 16, 'paddingTop': 0};
    var11 = 16;
    var10 = 5;
    var12 = var6[var10];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var4['header'] = var9;
    var9 = {'marginTop': 8, 'lineHeight': 20, 'textAlign': 'center'};
    var4['body'] = var9;
    var9 = {'width': '100%', 'marginTop': 24, 'flexGrow': 0};
    var4['button'] = var9;
    var9 = {'width': 13, 'height': 22, 'marginRight': 6};
    var4['leftButtonChevron'] = var9;
    var9 = {};
    var9['margin'] = var10;
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_gate/native/components/AgeGateUnderage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AgeGateUnderage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var16 = var2.onClose;
            var _closure2_slot0 = var16;
            var20 = var2.underageMessage;
            var7 = var2.existingUser;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 35; continue _fun0001 }
 33:
            var7 = false;
 35:
            var _closure2_slot1 = var7;
            var10 = var2.fromRegister;
            if(!(var10 === var4)) { _fun0001_ip = 51; continue _fun0001 }
 49:
            var10 = false;
 51:
            var2 = var2.disableSwipe;
            if(!(var2 === var4)) { _fun0001_ip = 63; continue _fun0001 }
 61:
            var2 = false;
 63:
            var _closure2_slot2 = var2;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot10;
            var15 = var3.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 6;
            var6 = var5[var6];
            var8 = var3.bind(var4)(var6);
            var6 = var8.useNavigation;
            var12 = var6.bind(var8)();
            _closure2_slot3 = var12;
            var9 = _closure1_slot3;
            var8 = var9.useLayoutEffect;
            var6 = new Array(4);
            var6[0] = var16;
            var6[1] = var7;
            var6[2] = var12;
            var6[3] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = var3.setOptions;
                    var1 = {};
                    var5 = _closure2_slot1;
                    if(var5) { _fun0002_ip = 64; continue _fun0002 }
 22:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 7;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.getHeaderBackButton;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var7)(var5);
                    _fun0002_ip = 73; continue _fun0002;
 64:
                    var5 = function() {
                        var1 = null;
                        return var1;
                    };
 73:
                    var1['headerLeft'] = var5;
                    var4 = _closure2_slot2;
                    var4 = !var4;
                    var1['gestureEnabled'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var2, var6);
            var2 = 8;
            var2 = var5[var2];
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
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var18 = 9;
            var2 = var1[var18];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var18];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            if(var7) { _fun0001_ip = 251; continue _fun0001 }
 236:
            var5 = var1.nCB6GR;
            var13 = var2.bind(var3)(var5);
            _fun0001_ip = 264; continue _fun0001;
 251:
            var1 = var1.NR/zrK;
            var13 = var2.bind(var3)(var1);
 264:
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var15.container;
            var1['style'] = var5;
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 10;
            var5 = var12[var5];
            var6 = var8.bind(var4)(var5);
            var5 = {};
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(6);
            var5[0] = var6;
            var6 = 11;
            var6 = var12[var6];
            var14 = var8.bind(var4)(var6);
            var6 = {};
            var6 = var9.bind(var4)(var14, var6);
            var5[1] = var6;
            var14 = _closure1_slot4;
            var6 = {};
            var17 = 12;
            var17 = var12[var17];
            var17 = var8.bind(var4)(var17);
            var6['source'] = var17;
            var6 = var9.bind(var4)(var14, var6);
            var5[2] = var6;
            var6 = 13;
            var6 = var12[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var14 = var15.header;
            var6['style'] = var14;
            var6['children'] = var13;
            var6 = var9.bind(var4)(var8, var6);
            var5[3] = var6;
            var8 = _closure1_slot0;
            var6 = 14;
            var6 = var12[var6];
            var6 = var8.bind(var4)(var6);
            var8 = var6.TextWithIOSLinkWorkaround;
            var6 = {'style': null, 'variant': 'text-md/medium', 'color': 'interactive-normal'};
            var12 = var15.body;
            var6['style'] = var12;
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var13 = var12[var18];
            var13 = var17.bind(var4)(var13);
            var14 = var13.intl;
            if(var10) { _fun0001_ip = 639; continue _fun0001 }
 491:
            var19 = var14.format;
            var10 = var12[var18];
            var10 = var17.bind(var4)(var10);
            var10 = var10.t;
            var13 = var10.b0QzXV;
            var10 = {};
            var21 = null;
            if(!(var21 == var20)) { _fun0001_ip = 580; continue _fun0001 }
 526:
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var22 = var21[var18];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var18];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.WqEH4O;
            var20 = var22.bind(var23)(var21);
 580:
            var10['underageMessage'] = var20;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 15;
            var20 = var22[var20];
            var22 = var21.bind(var4)(var20);
            var21 = var22.getArticleURL;
            var20 = _closure1_slot6;
            var20 = var20.AGE_GATE;
            var20 = var21.bind(var22)(var20);
            var10['helpURL'] = var20;
            var10 = var19.bind(var14)(var13, var10);
            _fun0001_ip = 671; continue _fun0001;
 639:
            var13 = var14.string;
            var12 = var12[var18];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.GDQgHB;
            var10 = var13.bind(var14)(var12);
 671:
            var6['children'] = var10;
            var6 = var9.bind(var4)(var8, var6);
            var5[4] = var6;
            var6 = null;
            if(!var7) { _fun0001_ip = 932; continue _fun0001 }
 693:
            var9 = _closure1_slot9;
            var8 = _closure1_slot8;
            var7 = {};
            var13 = _closure1_slot7;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 16;
            var10 = var14[var10];
            var10 = var17.bind(var4)(var10);
            var12 = var10.Text;
            var10 = {'style': null, 'variant': 'text-md/medium', 'color': 'interactive-normal'};
            var19 = var15.body;
            var10['style'] = var19;
            var19 = var14[var18];
            var19 = var17.bind(var4)(var19);
            var22 = var19.intl;
            var21 = var22.format;
            var19 = var14[var18];
            var19 = var17.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19.3axQdH;
            var19 = {};
            var23 = 30;
            var19['days'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var10['children'] = var19;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var12 = _closure1_slot1;
            var11 = 17;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['onPress'] = var16;
            var15 = var15.button;
            var11['style'] = var15;
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.JhDw5u;
            var14 = var15.bind(var16)(var14);
            var11['text'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 932:
            var5[5] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();