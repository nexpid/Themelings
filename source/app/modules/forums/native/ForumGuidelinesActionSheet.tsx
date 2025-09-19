// app/modules/forums/native/ForumGuidelinesActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
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
    var12 = 4;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.jsxs;
    var _closure1_slot8 = var7;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var13 = 16;
    var9['paddingHorizontal'] = var13;
    var4['scrollContainer'] = var9;
    var9 = {'alignItems': 'center', 'paddingTop': 20, 'paddingBottom': 24};
    var4['header'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginTop'] = var10;
    var4['headerTitle'] = var9;
    var9 = {};
    var9['padding'] = var13;
    var10 = 6;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9['borderRadius'] = var14;
    var4['guidelinesContainer'] = var9;
    var9 = {};
    var9['paddingBottom'] = var13;
    var4['footer'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9['borderRadius'] = var14;
    var9['marginHorizontal'] = var13;
    var4['button'] = var9;
    var9 = {'marginTop': 16, 'position': 'absolute', 'left': 16, 'right': 16, 'shadowColor': null, 'shadowOffset': null, 'shadowOpacity': 0.25, 'shadowRadius': 4};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var9['shadowColor'] = var13;
    var13 = {'width': 0, 'height': 1};
    var9['shadowOffset'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var4['floatingButtonContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'position': 'absolute', 'top': 12, 'right': 0};
    var4['editButton'] = var9;
    var9 = {};
    var9['marginRight'] = var12;
    var4['editText'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_BRAND;
    var9['color'] = var10;
    var4['editIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/ForumGuidelinesActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ForumGuidelinesActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var28 = var2.channel;
            var _closure2_slot0 = var28;
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
            var2 = 7;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useCanManageChannel;
            var15 = var2.bind(var3)(var28);
            var5 = _closure1_slot1;
            var2 = 8;
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
            var3 = 9;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.bind(var4)();
            var8 = var10.useMemo;
            var7 = new Array(2);
            var7[0] = var17;
            var7[1] = var2;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 84; continue _fun0002 }
 20:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    var4 = 0;
                    if(!var3) { _fun0002_ip = 61; continue _fun0002 }
 57:
                    var4 = _closure2_slot2;
 61:
                    var3 = 72;
                    var4 = var3 + var4;
                    var3 = _closure2_slot3;
                    var3 = var4 + var3;
                    var2 = _closure2_slot2;
                    var1 = var3 + var2;
 84:
                    return var1;
                }
            };
            var3 = var8.bind(var10)(var3, var7);
            var7 = null;
            var7 = var7 != var3;
            if(!var7) { _fun0001_ip = 219; continue _fun0001 }
 216:
            var6 = var3;
 219:
            var6 = var5 < var6;
            _closure2_slot5 = var6;
            var21 = undefined;
            if(var6) { _fun0001_ip = 235; continue _fun0001 }
 232:
            var21 = var3;
 235:
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg2;
                    var2 = _closure2_slot3;
                    if(!(var3 !== var2)) { _fun0003_ip = 25; continue _fun0003 }
 14:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var5.bind(var7)(var2, var3);
            var5 = var7.useEffect;
            var2 = var28.id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
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
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 23; continue _fun0004 }
 13:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var2 = _closure1_slot6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var20 = !var6;
            if(var6) { _fun0001_ip = 459; continue _fun0001 }
 312:
            var5 = _closure1_slot7;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var2 = 13;
            var2 = var22[var2];
            var2 = var19.bind(var4)(var2);
            var3 = var2.SafeAreaPaddingView;
            var2 = {};
            var7 = true;
            var2['bottom'] = var7;
            var7 = var13.footer;
            var2['style'] = var7;
            var8 = _closure1_slot1;
            var7 = 14;
            var7 = var22[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var11 = 15;
            var16 = var22[var11];
            var16 = var19.bind(var4)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var11 = var22[var11];
            var11 = var19.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.NX+WJC;
            var11 = var16.bind(var18)(var11);
            var7['text'] = var11;
            var7['onPress'] = var10;
            var11 = var13.button;
            var7['style'] = var11;
            var7 = var5.bind(var4)(var8, var7);
            var2['children'] = var7;
            var20 = var5.bind(var4)(var3, var2);
 459:
            var5 = _closure1_slot4;
            var7 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var17;
            var3[1] = var6;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = 0;
                    if(!var3) { _fun0005_ip = 30; continue _fun0005 }
 12:
                    var3 = _closure2_slot2;
                    var2 = 40;
                    var3 = var3 + var2;
                    var2 = 32;
                    var1 = var3 + var2;
 30:
                    return var1;
                }
            };
            var19 = var7.bind(var5)(var2, var3);
            var11 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 16;
            var2 = var18[var16];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useLocation;
            var2 = var2.bind(var3)();
            var2 = var2.pathname;
            _closure2_slot6 = var2;
            var3 = var5.useRef;
            var27 = true;
            var3 = var3.bind(var5)(var27);
            _closure2_slot7 = var3;
            var7 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var28.id;
            var3[1] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.tryParseChannelPath;
                    var4 = _closure2_slot6;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure2_slot7;
                    var5 = var5.current;
                    if(var5) { _fun0006_ip = 116; continue _fun0006 }
 55:
                    var5 = null;
                    if(!(var5 != var4)) { _fun0006_ip = 116; continue _fun0006 }
 61:
                    var5 = var4.channelId;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    if(!(var5 !== var4)) { _fun0006_ip = 116; continue _fun0006 }
 79:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 12;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.hideActionSheet;
                    var3 = _closure1_slot6;
                    var3 = var4.bind(var5)(var3);
                    _fun0006_ip = 128; continue _fun0006;
 116:
                    var3 = _closure2_slot7;
                    var2 = false;
                    var3['current'] = var2;
 128:
                    return var1;
                }
            };
            var2 = var7.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var7 = var28.id;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 12;
                var5 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var5);
                var5 = var6.hideActionSheet;
                var2 = _closure1_slot6;
                var2 = var5.bind(var6)(var2);
                var2 = 18;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var22 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot9;
            var1 = {};
            var8 = _closure1_slot7;
            var5 = 19;
            var5 = var18[var5];
            var5 = var11.bind(var4)(var5);
            var7 = var5.BottomSheet;
            var5 = {};
            var5['scrollable'] = var27;
            var5['contentHeight'] = var21;
            var5['footer'] = var20;
            var5['onDismiss'] = var9;
            var9 = 20;
            var9 = var18[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.BottomSheetScrollView;
            var9 = {};
            var18 = var13.scrollContainer;
            var9['style'] = var18;
            var18 = {};
            var18['bottom'] = var17;
            var9['scrollIndicatorInsets'] = var18;
            var18 = {};
            var18['paddingBottom'] = var19;
            var9['contentContainerStyle'] = var18;
            var9['onContentSizeChange'] = var14;
            var18 = _closure1_slot5;
            var14 = {};
            var19 = var13.header;
            var14['style'] = var19;
            if(!var15) { _fun0001_ip = 1025; continue _fun0001 }
 748:
            var21 = _closure1_slot8;
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var19 = 21;
            var19 = var26[var19];
            var19 = var24.bind(var4)(var19);
            var20 = var19.PressableOpacity;
            var19 = {};
            var29 = 15;
            var23 = var26[var29];
            var23 = var24.bind(var4)(var23);
            var30 = var23.intl;
            var25 = var30.string;
            var23 = var26[var29];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.bt75u7;
            var23 = var25.bind(var30)(var23);
            var19['accessibilityLabel'] = var23;
            var23 = 'button';
            var19['accessibilityRole'] = var23;
            var23 = var13.editButton;
            var19['style'] = var23;
            var19['onPress'] = var22;
            var25 = _closure1_slot7;
            var22 = 22;
            var22 = var26[var22];
            var22 = var24.bind(var4)(var22);
            var23 = var22.Text;
            var22 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-brand'};
            var30 = var13.editText;
            var22['style'] = var30;
            var30 = var26[var29];
            var30 = var24.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var26[var29];
            var29 = var24.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.bt75u7;
            var29 = var30.bind(var31)(var29);
            var22['children'] = var29;
            var23 = var25.bind(var4)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var23 = 23;
            var23 = var26[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.PencilIcon;
            var23 = {};
            var26 = var13.editIcon;
            var26 = var26.color;
            var23['color'] = var26;
            var26 = 'xs';
            var23['size'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var22[1] = var23;
            var19['children'] = var22;
            var15 = var21.bind(var4)(var20, var19);
 1025:
            var19 = new Array(3);
            var19[0] = var15;
            var20 = _closure1_slot7;
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var15 = 24;
            var15 = var25[var15];
            var21 = var24.bind(var4)(var15);
            var15 = {};
            var22 = _closure1_slot0;
            var23 = 25;
            var23 = var25[var23];
            var23 = var22.bind(var4)(var23);
            var23 = var23.BookCheckIcon;
            var15['IconComponent'] = var23;
            var15 = var20.bind(var4)(var21, var15);
            var19[1] = var15;
            var21 = 22;
            var15 = var25[var21];
            var15 = var22.bind(var4)(var15);
            var26 = var15.Text;
            var23 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var15 = var13.headerTitle;
            var23['style'] = var15;
            var15 = 15;
            var29 = var25[var15];
            var29 = var22.bind(var4)(var29);
            var31 = var29.intl;
            var30 = var31.string;
            var29 = var25[var15];
            var29 = var22.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.4d4T4u;
            var29 = var30.bind(var31)(var29);
            var23['children'] = var29;
            var23 = var20.bind(var4)(var26, var23);
            var19[2] = var23;
            var14['children'] = var19;
            var18 = var3.bind(var4)(var18, var14);
            var14 = new Array(2);
            var14[0] = var18;
            var19 = _closure1_slot5;
            var18 = {};
            var23 = var13.guidelinesContainer;
            var18['style'] = var23;
            var21 = var25[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
            var23 = 26;
            var23 = var25[var23];
            var26 = var24.bind(var4)(var23);
            var25 = var26.parseForumPostGuidelines;
            var24 = var28.topic;
            var23 = {'channelId': null, 'allowHeading': true, 'allowList': true, 'allowLinks': true};
            var28 = var28.id;
            var23['channelId'] = var28;
            var23 = var25.bind(var26)(var24, var27, var23);
            var21['children'] = var23;
            var21 = var20.bind(var4)(var22, var21);
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var14[1] = var18;
            var9['children'] = var14;
            var9 = var3.bind(var4)(var11, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 1490; continue _fun0001 }
 1370:
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 14;
            var7 = var11[var7];
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
            var11 = var11.NX+WJC;
            var11 = var12.bind(var13)(var11);
            var7['text'] = var11;
            var7['onPress'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1490:
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
        var1 = 12;
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