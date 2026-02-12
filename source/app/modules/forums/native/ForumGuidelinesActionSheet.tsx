// app/modules/forums/native/ForumGuidelinesActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FORUM_GUIDELINES_ACTION_SHEET;
    var _closure1_slot6 = var4;
    var14 = 4;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var9 = var4.jsxs;
    var _closure1_slot8 = var9;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var9 = {};
    var15 = 16;
    var9['paddingHorizontal'] = var15;
    var4['scrollContainer'] = var9;
    var9 = {'alignItems': 'center', 'paddingTop': 20, 'paddingBottom': 24};
    var4['header'] = var9;
    var12 = {};
    var9 = 8;
    var12['marginTop'] = var9;
    var4['headerTitle'] = var12;
    var12 = {};
    var12['padding'] = var15;
    var13 = 6;
    var16 = var6[var13];
    var16 = var7.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SURFACE_HIGH;
    var12['backgroundColor'] = var16;
    var16 = var6[var13];
    var16 = var7.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var12['borderRadius'] = var16;
    var4['guidelinesContainer'] = var12;
    var12 = {};
    var12['paddingBottom'] = var15;
    var4['footer'] = var12;
    var12 = {};
    var16 = var6[var13];
    var16 = var7.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var12['borderRadius'] = var16;
    var12['marginHorizontal'] = var15;
    var4['button'] = var12;
    var12 = {'marginTop': 16, 'position': 'absolute', 'left': 16, 'right': 16, 'shadowColor': null, 'shadowOffset': null, 'shadowOpacity': 0.25, 'shadowRadius': 4};
    var15 = var6[var13];
    var15 = var7.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BLACK;
    var12['shadowColor'] = var15;
    var15 = {'width': 0, 'height': 1};
    var12['shadowOffset'] = var15;
    var15 = var6[var13];
    var15 = var7.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var12['borderRadius'] = var15;
    var4['floatingButtonContainer'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'position': 'absolute', 'top': 12, 'right': 0};
    var4['editButton'] = var12;
    var12 = {};
    var12['marginRight'] = var14;
    var4['editText'] = var12;
    var12 = {};
    var13 = var6[var13];
    var13 = var7.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_BRAND;
    var12['color'] = var13;
    var4['editIcon'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = {};
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.BookCheckIcon;
    var4['IconComponent'] = var9;
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot11 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/ForumGuidelinesActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ForumGuidelinesActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var27 = var2.channel;
            var _closure2_slot0 = var27;
            var3 = var2.onPress;
            var _closure2_slot1 = var3;
            var9 = var2.onClose;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot10;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useCanManageChannel;
            var15 = var2.bind(var3)(var27);
            var5 = _closure1_slot1;
            var2 = 10;
            var2 = var7[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var17 = var2.bottom;
            var _closure2_slot2 = var17;
            var10 = _closure1_slot4;
            var2 = var10.useState;
            var6 = var2.bind(var10)();
            var3 = _closure1_slot3;
            var2 = 2;
            var8 = var3.bind(var4)(var6, var2);
            var6 = 0;
            var2 = var8[var6];
            var _closure2_slot3 = var2;
            var3 = 1;
            var3 = var8[var3];
            var _closure2_slot4 = var3;
            var3 = 11;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.bind(var4)();
            var8 = var10.useMemo;
            var7 = new Array(2);
            var7[0] = var17;
            var7[1] = var2;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 12;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    var4 = 0;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot2;
case 4:
                    var3 = 72;
                    var4 = var3 + var4;
                    var3 = _closure2_slot3;
                    var3 = var4 + var3;
                    var2 = _closure2_slot2;
                    var1 = var3 + var2;
case 2:
                    return var1;
                }
            };
            var3 = var8.bind(var10)(var3, var7);
            var7 = null;
            var7 = var7 != var3;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var3;
case 6:
            var6 = var5 < var6;
            _closure2_slot5 = var6;
            var20 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var20 = var3;
case 8:
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg2;
                    var2 = _closure2_slot3;
                    if(!(var3 !== var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var5.bind(var7)(var2, var3);
            var5 = var7.useEffect;
            var2 = var27.id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.markAsSeen;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var5.bind(var7)(var2, var3);
            var10 = function handlePress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 12:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var2 = _closure1_slot6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var19 = !var6;
            if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = _closure1_slot7;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var2 = 15;
            var2 = var22[var2];
            var2 = var21.bind(var4)(var2);
            var3 = var2.SafeAreaPaddingView;
            var2 = {};
            var7 = true;
            var2['bottom'] = var7;
            var7 = var13.footer;
            var2['style'] = var7;
            var8 = _closure1_slot1;
            var7 = 16;
            var7 = var22[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var11 = 17;
            var16 = var22[var11];
            var16 = var21.bind(var4)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var11 = var22[var11];
            var11 = var21.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.NX+WJN;
            var11 = var16.bind(var18)(var11);
            var7['text'] = var11;
            var7['onPress'] = var10;
            var11 = var13.button;
            var7['style'] = var11;
            var7 = var5.bind(var4)(var8, var7);
            var2['children'] = var7;
            var19 = var5.bind(var4)(var3, var2);
case 14:
            var5 = _closure1_slot4;
            var7 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var17;
            var3[1] = var6;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = 0;
                    if(!var3) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var3 = _closure2_slot2;
                    var2 = 40;
                    var3 = var3 + var2;
                    var2 = 32;
                    var1 = var3 + var2;
case 16:
                    return var1;
                }
            };
            var18 = var7.bind(var5)(var2, var3);
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 18;
            var2 = var16[var2];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useLocation;
            var2 = var2.bind(var3)();
            var2 = var2.pathname;
            _closure2_slot6 = var2;
            var3 = var5.useRef;
            var26 = true;
            var3 = var3.bind(var5)(var26);
            _closure2_slot7 = var3;
            var7 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var27.id;
            var3[1] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.tryParseChannelPath;
                    var4 = _closure2_slot6;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure2_slot7;
                    var5 = var5.current;
                    if(var5) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var5 = null;
                    if(!(var5 != var4)) { _fun0006_ip = 18; continue _fun0006 }
case 20:
                    var5 = var4.channelId;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    if(!(var5 !== var4)) { _fun0006_ip = 18; continue _fun0006 }
case 21:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 14;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.hideActionSheet;
                    var3 = _closure1_slot6;
                    var3 = var4.bind(var5)(var3);
                    _fun0006_ip = 22; continue _fun0006;
case 18:
                    var3 = _closure2_slot7;
                    var2 = false;
                    var3['current'] = var2;
case 22:
                    return var1;
                }
            };
            var2 = var7.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var7 = var27.id;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 14;
                var5 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var5);
                var5 = var6.hideActionSheet;
                var2 = _closure1_slot6;
                var2 = var5.bind(var6)(var2);
                var2 = 20;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var21 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot9;
            var1 = {};
            var8 = _closure1_slot7;
            var5 = 21;
            var5 = var16[var5];
            var5 = var11.bind(var4)(var5);
            var7 = var5.BottomSheet;
            var5 = {};
            var5['scrollable'] = var26;
            var5['contentHeight'] = var20;
            var5['footer'] = var19;
            var5['onDismiss'] = var9;
            var9 = 22;
            var9 = var16[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.BottomSheetScrollView;
            var9 = {};
            var16 = var13.scrollContainer;
            var9['style'] = var16;
            var16 = {};
            var16['bottom'] = var17;
            var9['scrollIndicatorInsets'] = var16;
            var16 = {};
            var16['paddingBottom'] = var18;
            var9['contentContainerStyle'] = var16;
            var9['onContentSizeChange'] = var14;
            var16 = _closure1_slot5;
            var14 = {};
            var18 = var13.header;
            var14['style'] = var18;
            if(!var15) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var20 = _closure1_slot8;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var18 = 23;
            var18 = var25[var18];
            var18 = var23.bind(var4)(var18);
            var19 = var18.PressableOpacity;
            var18 = {};
            var28 = 17;
            var22 = var25[var28];
            var22 = var23.bind(var4)(var22);
            var29 = var22.intl;
            var24 = var29.string;
            var22 = var25[var28];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.bt75uw;
            var22 = var24.bind(var29)(var22);
            var18['accessibilityLabel'] = var22;
            var22 = 'button';
            var18['accessibilityRole'] = var22;
            var22 = var13.editButton;
            var18['style'] = var22;
            var18['onPress'] = var21;
            var24 = _closure1_slot7;
            var21 = 24;
            var21 = var25[var21];
            var21 = var23.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-brand'};
            var29 = var13.editText;
            var21['style'] = var29;
            var29 = var25[var28];
            var29 = var23.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var25[var28];
            var28 = var23.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.bt75uw;
            var28 = var29.bind(var30)(var28);
            var21['children'] = var28;
            var22 = var24.bind(var4)(var22, var21);
            var21 = new Array(2);
            var21[0] = var22;
            var22 = 25;
            var22 = var25[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.PencilIcon;
            var22 = {};
            var25 = var13.editIcon;
            var25 = var25.color;
            var22['color'] = var25;
            var25 = 'xs';
            var22['size'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var21[1] = var22;
            var18['children'] = var21;
            var15 = var20.bind(var4)(var19, var18);
case 23:
            var18 = new Array(3);
            var18[0] = var15;
            var15 = _closure1_slot11;
            var18[1] = var15;
            var19 = _closure1_slot7;
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 24;
            var15 = var24[var20];
            var15 = var21.bind(var4)(var15);
            var23 = var15.Text;
            var22 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
            var15 = var13.headerTitle;
            var22['style'] = var15;
            var15 = 17;
            var25 = var24[var15];
            var25 = var21.bind(var4)(var25);
            var29 = var25.intl;
            var28 = var29.string;
            var25 = var24[var15];
            var25 = var21.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.4d4T4l;
            var25 = var28.bind(var29)(var25);
            var22['children'] = var25;
            var22 = var19.bind(var4)(var23, var22);
            var18[2] = var22;
            var14['children'] = var18;
            var16 = var3.bind(var4)(var16, var14);
            var14 = new Array(2);
            var14[0] = var16;
            var18 = _closure1_slot5;
            var16 = {};
            var22 = var13.guidelinesContainer;
            var16['style'] = var22;
            var20 = var24[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'text-md/medium', 'color': 'text-default'};
            var23 = _closure1_slot1;
            var22 = 26;
            var22 = var24[var22];
            var25 = var23.bind(var4)(var22);
            var24 = var25.parseForumPostGuidelines;
            var23 = var27.topic;
            var22 = {'channelId': null, 'allowHeading': true, 'allowList': true, 'allowLinks': true};
            var27 = var27.id;
            var22['channelId'] = var27;
            var22 = var24.bind(var25)(var23, var26, var22);
            var20['children'] = var22;
            var20 = var19.bind(var4)(var21, var20);
            var16['children'] = var20;
            var16 = var19.bind(var4)(var18, var16);
            var14[1] = var16;
            var9['children'] = var14;
            var9 = var3.bind(var4)(var11, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var16 = 16;
            var7 = var11[var16];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var14 = var13.floatingButtonContainer;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var16 = var17 + var16;
            var14['bottom'] = var16;
            var13[1] = var14;
            var7['style'] = var13;
            var14 = _closure1_slot0;
            var12 = var11[var15];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var11[var15];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.NX+WJN;
            var11 = var12.bind(var13)(var11);
            var7['text'] = var11;
            var7['onPress'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 25:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function openForumGuidelinesActionSheet(arg1) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 14;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 28;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 27;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot6;
        var2 = {};
        var9 = arg1;
        var10 = var2;
        var7 = copyDataProperties(var10, var9);
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openForumGuidelinesActionSheet'] = var2;
    return var1;
})();