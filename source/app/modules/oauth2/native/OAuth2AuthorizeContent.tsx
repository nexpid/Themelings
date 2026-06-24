// app/modules/oauth2/native/OAuth2AuthorizeContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var6;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot2 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.ScrollView;
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
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var4['fill'] = var9;
    var9 = {'flex': 1, 'backgroundColor': null, 'paddingHorizontal': 16};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var13;
    var13 = 16;
    var4['scrollView'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'width': '100%', 'flexGrow': 1, 'gap': 16};
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
    var13 = var13.BORDER_SUBTLE;
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
    var10 = var10.BORDER_SUBTLE;
    var9['backgroundColor'] = var10;
    var4['separator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
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
            var20 = var2.header;
            var21 = var2.body;
            var10 = var2.footer;
            var29 = var2.appDetails;
            var13 = var2.centerContent;
            var1 = var2.setAllContentSeen;
            var _closure2_slot0 = var1;
            var25 = var2.hasContentBackground;
            var3 = var2.onScroll;
            var _closure2_slot1 = var3;
            var16 = var2.obscured;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot9;
            var11 = var2.bind(var4)();
            var26 = _closure1_slot3;
            var2 = var26.useRef;
            var6 = null;
            var14 = var2.bind(var26)(var6);
            var _closure2_slot2 = var14;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 6;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var8 = var2.width;
            var2 = var2.height;
            var22 = var8 > var2;
            var2 = 7;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var19 = var2.left;
            var18 = var2.right;
            var9 = var2.bottom;
            var2 = var26.useState;
            var23 = -1;
            var2 = var2.bind(var26)(var23);
            var15 = _closure1_slot2;
            var3 = 2;
            var2 = var15.bind(var4)(var2, var3);
            var5 = 0;
            var17 = var2[var5];
            var _closure2_slot3 = var17;
            var24 = 1;
            var2 = var2[var24];
            var _closure2_slot4 = var2;
            var2 = var26.useState;
            var2 = var2.bind(var26)(var23);
            var2 = var15.bind(var4)(var2, var3);
            var8 = var2[var5];
            var _closure2_slot5 = var8;
            var2 = var2[var24];
            var _closure2_slot6 = var2;
            var2 = var26.useState;
            var2 = var2.bind(var26)(var23);
            var2 = var15.bind(var4)(var2, var3);
            var3 = var2[var5];
            var2 = var2[var24];
            var _closure2_slot7 = var2;
            var15 = var17 >= var5;
            if(!var15) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var15 = var8 >= var5;
case 4:
            if(!var15) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var6 == var10;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3 >= var5;
case 8:
            var15 = var2;
case 6:
            _closure2_slot8 = var15;
            var5 = _closure1_slot3;
            var3 = var5.useLayoutEffect;
            var2 = new Array(4);
            var2[0] = var17;
            var2[1] = var15;
            var2[2] = var8;
            var2[3] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot8;
                    if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure1_slot10;
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
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 8;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var11.fill;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = {};
            var8['marginBottom'] = var9;
            var5[1] = var8;
            var1['style'] = var5;
            var9 = _closure1_slot6;
            var8 = _closure1_slot5;
            var5 = {};
            var17 = var11.scrollView;
            var15 = new Array(2);
            var15[0] = var17;
            var17 = {};
            var17['paddingLeft'] = var19;
            var17['paddingRight'] = var18;
            var15[1] = var17;
            var5['style'] = var15;
            if(var22) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var17 = var11.scrollViewContentPortrait;
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var17 = var11.scrollViewContentLandscape;
case 18:
            var15 = new Array(1);
            var15[0] = var17;
            var5['contentContainerStyle'] = var15;
            var5['ref'] = var14;
            var14 = function onContentSizeChange(arg1, arg2) {
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
            var5['onContentSizeChange'] = var14;
            var14 = 16;
            var5['scrollEventThrottle'] = var14;
            var14 = function onLayout(arg1) {
                var3 = _closure2_slot6;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onLayout'] = var14;
            var14 = function onScroll(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot10;
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
            var5['onScroll'] = var14;
            var5['centerContent'] = var13;
            var15 = _closure1_slot8;
            var14 = _closure1_slot0;
            var17 = _closure1_slot1;
            var13 = 9;
            var13 = var17[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['obscured'] = var16;
            var16 = var6 != var20;
            var17 = null;
            if(!var16) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var19 = _closure1_slot6;
            var18 = _closure1_slot4;
            var16 = {};
            var23 = var11.header;
            var16['style'] = var23;
            var16['children'] = var20;
            var17 = var19.bind(var4)(var18, var16);
case 26:
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot8;
            var18 = _closure1_slot4;
            var17 = {};
            var23 = var11.bodyContainer;
            var20 = new Array(3);
            var20[0] = var23;
            var23 = null;
            if(!var25) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var23 = var11.bodyContainerBackground;
case 28:
            var20[1] = var23;
            if(var22) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var22 = {};
            _fun0002_ip = 32; continue _fun0002;
case 30:
            var23 = {};
            var23['flex'] = var24;
            var22 = var23;
case 32:
            var20[2] = var22;
            var17['style'] = var20;
            var20 = new Array(2);
            var20[0] = var21;
            var22 = var6 != var29;
            var21 = null;
            if(!var22) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var24 = _closure1_slot8;
            var23 = _closure1_slot7;
            var22 = {};
            var28 = _closure1_slot6;
            var27 = _closure1_slot4;
            var25 = {};
            var26 = var11.separator;
            var25['style'] = var26;
            var26 = var28.bind(var4)(var27, var25);
            var25 = new Array(2);
            var25[0] = var26;
            var26 = {};
            var26['children'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var25[1] = var26;
            var22['children'] = var25;
            var21 = var24.bind(var4)(var23, var22);
case 33:
            var20[1] = var21;
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var5['children'] = var13;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var6 != var10;
            var6 = null;
            if(!var8) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var9 = _closure1_slot6;
            var8 = _closure1_slot4;
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
case 35:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();