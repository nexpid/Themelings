// app/modules/oauth2/native/OAuth2AuthorizeContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function isNearBottom(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.layoutMeasurement;
            var2 = var1.contentOffset;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = {};
            var5 = 0;
            var4['y'] = var5;
            var2 = var4;
case 2:
            var1 = var1.contentSize;
            var3 = var3.height;
            var2 = var2.y;
            var2 = var3 + var2;
            var3 = var1.height;
            var1 = 5;
            var1 = var3 - var1;
            var1 = var2 >= var1;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
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
    var9 = {};
    var9['flex'] = var12;
    var4['fill'] = var9;
    var9 = {'flex': 1, 'backgroundColor': null, 'paddingHorizontal': 16};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOBILE_PRIMARY;
    var9['backgroundColor'] = var13;
    var13 = 16;
    var4['scrollView'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-start', 'width': '100%', 'flexGrow': 1, 'gap': 16};
    var4['scrollViewContentLandscape'] = var9;
    var9 = {'flexDirection': 'column', 'width': '100%', 'flexGrow': 1, 'gap': 16};
    var4['scrollViewContentPortrait'] = var9;
    var9 = {};
    var14 = 24;
    var9['paddingTop'] = var14;
    var4['header'] = var9;
    var9 = {'flexDirection': 'column', 'gap': 16, 'padding': 16};
    var4['bodyContainer'] = var9;
    var9 = {};
    var9['marginHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var4['bodyContainerBackground'] = var9;
    var9 = {'flexDirection': 'column', 'padding': 16, 'gap': 16};
    var4['footerPortrait'] = var9;
    var9 = {};
    var9['height'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var10;
    var4['separator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/OAuth2AuthorizeContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function OAuth2AuthorizeContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var17 = var2.header;
            var18 = var2.body;
            var10 = var2.footer;
            var20 = var2.appDetails;
            var9 = var2.centerContent;
            var1 = var2.setAllContentSeen;
            var _closure2_slot0 = var1;
            var19 = var2.hasContentBackground;
            var2 = var2.onScroll;
            var _closure2_slot1 = var2;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot10;
            var11 = var2.bind(var4)();
            var28 = _closure1_slot4;
            var2 = var28.useRef;
            var6 = null;
            var13 = var2.bind(var28)(var6);
            var _closure2_slot2 = var13;
            var3 = _closure1_slot1;
            var22 = _closure1_slot2;
            var2 = 6;
            var2 = var22[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var16 = var2.width;
            var15 = var2.height;
            var2 = 7;
            var2 = var22[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var24 = var2.left;
            var23 = var2.right;
            var21 = var2.bottom;
            var2 = var28.useState;
            var27 = -1;
            var2 = var2.bind(var28)(var27);
            var26 = _closure1_slot3;
            var3 = 2;
            var2 = var26.bind(var4)(var2, var3);
            var5 = 0;
            var25 = var2[var5];
            var _closure2_slot3 = var25;
            var14 = 1;
            var2 = var2[var14];
            var _closure2_slot4 = var2;
            var2 = var28.useState;
            var2 = var2.bind(var28)(var27);
            var2 = var26.bind(var4)(var2, var3);
            var8 = var2[var5];
            var _closure2_slot5 = var8;
            var2 = var2[var14];
            var _closure2_slot6 = var2;
            var2 = var28.useState;
            var2 = var2.bind(var28)(var27);
            var2 = var26.bind(var4)(var2, var3);
            var3 = var2[var5];
            var2 = var2[var14];
            var _closure2_slot7 = var2;
            var14 = _closure1_slot0;
            var2 = 8;
            var2 = var22[var2];
            var2 = var14.bind(var4)(var2);
            var22 = var2.ActivityDMNoPushExperiment;
            var14 = var22.useExperiment;
            var2 = {};
            var26 = 'oauth2_authorize';
            var2['location'] = var26;
            var14 = var14.bind(var22)(var2);
            var22 = var25 >= var5;
            if(!var22) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var22 = var8 >= var5;
case 4:
            if(!var22) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var6 == var10;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3 >= var5;
case 8:
            var22 = var2;
case 6:
            _closure2_slot8 = var22;
            var5 = _closure1_slot4;
            var3 = var5.useLayoutEffect;
            var2 = new Array(4);
            var2[0] = var25;
            var2[1] = var22;
            var2[2] = var8;
            var2[3] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot8;
                    if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure1_slot11;
                    var2 = {};
                    var3 = {};
                    var5 = _closure2_slot5;
                    var3['height'] = var5;
                    var2['layoutMeasurement'] = var3;
                    var3 = {};
                    var5 = _closure2_slot3;
                    var3['height'] = var5;
                    var2['contentSize'] = var3;
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = _closure2_slot0;
                    var2 = null;
                    if(var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    if(!(var2 != var4)) { _fun0003_ip = 10; continue _fun0003 }
case 14:
                    var6 = _closure2_slot0;
                    var5 = false;
                    var5 = var6.bind(var3)(var5);
                    _fun0003_ip = 10; continue _fun0003;
case 12:
                    if(!(var2 != var4)) { _fun0003_ip = 10; continue _fun0003 }
case 15:
                    var2 = _closure2_slot0;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var11.fill;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = {};
            var8['marginBottom'] = var21;
            var5[1] = var8;
            var1['style'] = var5;
            var8 = _closure1_slot6;
            var5 = {};
            var22 = var11.scrollView;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = {};
            var22['paddingLeft'] = var24;
            var22['paddingRight'] = var23;
            var21[1] = var22;
            var5['style'] = var21;
            if(!(!(var16 > var15))) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var16 = var11.scrollViewContentPortrait;
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var16 = var11.scrollViewContentLandscape;
case 18:
            var15 = new Array(1);
            var15[0] = var16;
            var5['contentContainerStyle'] = var15;
            var5['ref'] = var13;
            var13 = function onContentSizeChange(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var3 = var4.scrollTo;
                    var2 = {};
                    var5 = 0;
                    var2['y'] = var5;
                    var2 = var3.bind(var4)(var2);
case 19:
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = arg2;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var5['onContentSizeChange'] = var13;
            var13 = 16;
            var5['scrollEventThrottle'] = var13;
            var13 = function onLayout(arg1) {
                var3 = _closure2_slot6;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onLayout'] = var13;
            var13 = function onScroll(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot11;
                    var2 = var3.nativeEvent;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var5 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0005_ip = 21; continue _fun0005 }
case 23:
                    var4 = _closure2_slot0;
                    var2 = true;
                    var2 = var4.bind(var1)(var2);
case 21:
                    var5 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)(var3);
case 24:
                    return var1;
                }
            };
            var5['onScroll'] = var13;
            var5['centerContent'] = var9;
            var9 = var6 != var17;
            var13 = null;
            if(!var9) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var16 = _closure1_slot7;
            var15 = _closure1_slot5;
            var9 = {};
            var21 = var11.header;
            var9['style'] = var21;
            var9['children'] = var17;
            var13 = var16.bind(var4)(var15, var9);
case 26:
            var9 = new Array(3);
            var9[0] = var13;
            var16 = _closure1_slot9;
            var15 = _closure1_slot5;
            var13 = {};
            var21 = var11.bodyContainer;
            var17 = new Array(2);
            var17[0] = var21;
            var21 = null;
            if(!var19) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var21 = var11.bodyContainerBackground;
case 28:
            var17[1] = var21;
            var13['style'] = var17;
            var17 = new Array(2);
            var17[0] = var18;
            var21 = var6 == var20;
            var18 = null;
            if(var21) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var21 = var14.enabled;
            var18 = null;
            if(var21) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            var23 = _closure1_slot9;
            var22 = _closure1_slot8;
            var21 = {};
            var27 = _closure1_slot7;
            var26 = _closure1_slot5;
            var24 = {};
            var25 = var11.separator;
            var24['style'] = var25;
            var25 = var27.bind(var4)(var26, var24);
            var24 = new Array(2);
            var24[0] = var25;
            var25 = {};
            var25['children'] = var20;
            var25 = var27.bind(var4)(var26, var25);
            var24[1] = var25;
            var21['children'] = var24;
            var18 = var23.bind(var4)(var22, var21);
case 30:
            var17[1] = var18;
            var13['children'] = var17;
            var13 = var16.bind(var4)(var15, var13);
            var9[1] = var13;
            var15 = var6 != var20;
            var13 = null;
            if(!var15) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var14 = var14.enabled;
            var13 = null;
            if(!var14) { _fun0002_ip = 33; continue _fun0002 }
case 35:
            var16 = _closure1_slot7;
            var15 = _closure1_slot5;
            var14 = {};
            var18 = var11.bodyContainer;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = null;
            if(!var19) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var18 = var11.bodyContainerBackground;
case 36:
            var17[1] = var18;
            var14['style'] = var17;
            var19 = _closure1_slot7;
            var18 = _closure1_slot5;
            var17 = {};
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 33:
            var9[2] = var13;
            var5['children'] = var9;
            var8 = var3.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var6 != var10;
            var6 = null;
            if(!var8) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var9 = _closure1_slot7;
            var8 = _closure1_slot5;
            var7 = {};
            var12 = function onLayout(arg1) {
                var3 = _closure2_slot7;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onLayout'] = var12;
            var11 = var11.footerPortrait;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 38:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();