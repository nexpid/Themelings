// app/modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.Pressable;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.getScaledSearchBarHeight;
    var _closure1_slot5 = var10;
    var4 = var4.VIEWABILITY_CONFIG;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useYouBarTotalHeight;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.jsx;
    var _closure1_slot9 = var10;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var8.bind(var1)(var4);
    var4 = var8.createAnimatedComponent;
    var4 = var4.bind(var8)(var9);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var1 = {};
            var2 = {'position': 'absolute', 'right': '50%', 'zIndex': 1, 'marginVertical': 12, 'marginHorizontal': 0, 'paddingRight': 9, 'paddingLeft': null, 'paddingVertical': 4, 'minHeight': 24, 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center', 'borderRadius': null, 'backgroundColor': null, 'elevation': 4};
            var9 = 1;
            var5 = 9;
            var4 = 5;
            if(!var7) { _fun0001_ip = 34; continue _fun0001 }
 31:
            var4 = 6;
 34:
            var2['paddingLeft'] = var4;
            var10 = 4;
            var11 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = var6[var5];
            var6 = undefined;
            var8 = var11.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var11 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var5];
            var8 = var11.bind(var6)(var8);
            if(var7) { _fun0001_ip = 128; continue _fun0001 }
 101:
            var11 = var8.colors;
            var7 = arg2;
            if(var7) { _fun0001_ip = 120; continue _fun0001 }
 112:
            var7 = var11.BG_SURFACE_OVERLAY;
            _fun0001_ip = 126; continue _fun0001;
 120:
            var7 = var11.ACTION_SHEET_GRADIENT_BG;
 126:
            _fun0001_ip = 139; continue _fun0001;
 128:
            var8 = var8.unsafe_rawColors;
            var7 = var8.RED_400;
 139:
            var2['backgroundColor'] = var7;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var11 = var7[var5];
            var11 = var8.bind(var6)(var11);
            var11 = var11.colors;
            var11 = var11.BLACK;
            var2['shadowColor'] = var11;
            var11 = {'width': 0, 'height': 1};
            var2['shadowOffset'] = var11;
            var11 = 0.08;
            var2['shadowOpacity'] = var11;
            var2['shadowRadius'] = var10;
            var2['borderWidth'] = var9;
            var5 = var7[var5];
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            var5 = var5.BORDER_SUBTLE;
            var2['borderColor'] = var5;
            var1['unreadBar'] = var2;
            var2 = {'textTransform': 'uppercase', 'marginTop': null, 'marginLeft': 2, 'marginRight': 0};
            var5 = _closure1_slot0;
            var4 = 10;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            var3 = 0;
            if(!var4) { _fun0001_ip = 298; continue _fun0001 }
 292:
            var3 = -1;
 298:
            var2['marginTop'] = var3;
            var1['text'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = "function ChannelsUnreadBarTsx1(){const{shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,runOnJS,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){runOnJS(resetReachedEnd)();}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};}";
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function ChannelsUnreadBar(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var2 = var4.position;
            var _closure2_slot0 = var2;
            var16 = var4.shown;
            var _closure2_slot1 = var16;
            var6 = var4.onPress;
            var _closure2_slot2 = var6;
            var5 = var4.isMention;
            var _closure2_slot3 = var5;
            var23 = var4.guildChannelsListUnreadBarInsetEnd;
            var _closure2_slot4 = var23;
            var29 = var4.scrollPosition;
            var _closure2_slot5 = var29;
            var28 = var4.listPaddingTop;
            var _closure2_slot6 = var28;
            var3 = var4.endReachedCounter;
            var _closure2_slot7 = var3;
            var33 = var4.headerHeight;
            var _closure2_slot8 = var33;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var10 = _closure1_slot4;
            var8 = var10.useState;
            var7 = null;
            var7 = var7 != var5;
            if(!var7) { _fun0002_ip = 161; continue _fun0002 }
 158:
            var7 = var5;
 161:
            var7 = var8.bind(var10)(var7);
            var31 = _closure1_slot3;
            var30 = 2;
            var7 = var31.bind(var4)(var7, var30);
            var26 = 0;
            var11 = var7[var26];
            _closure2_slot9 = var11;
            var15 = 1;
            var7 = var7[var15];
            _closure2_slot10 = var7;
            var25 = _closure1_slot4;
            var8 = var25.useEffect;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 28; continue _fun0003 }
 13:
                    var3 = _closure2_slot10;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var8.bind(var25)(var5, var7);
            var7 = _closure1_slot1;
            var20 = _closure1_slot2;
            var5 = 11;
            var5 = var20[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.bind(var4)();
            var5 = _closure1_slot12;
            var10 = var5.bind(var4)(var11, var7);
            var19 = _closure1_slot0;
            var7 = 12;
            var5 = var20[var7];
            var8 = var19.bind(var4)(var5);
            var5 = var8.useFontScale;
            var27 = var5.bind(var8)();
            var12 = 13;
            var5 = var20[var12];
            var5 = var19.bind(var4)(var5);
            var5 = var5.TextStyleSheet;
            var5 = var5.text-xs/bold;
            var5 = var5.lineHeight;
            var8 = var5 * var27;
            var5 = 8;
            var13 = var8 + var5;
            var22 = 7;
            var5 = var20[var22];
            var8 = var19.bind(var4)(var5);
            var5 = var8.useSharedValue;
            var17 = var5.bind(var8)(var26);
            _closure2_slot11 = var17;
            var5 = var20[var22];
            var8 = var19.bind(var4)(var5);
            var5 = var8.useSharedValue;
            var24 = var5.bind(var8)(var13);
            _closure2_slot12 = var24;
            var13 = var25.useCallback;
            var8 = new Array(2);
            var8[0] = var17;
            var8[1] = var24;
            var5 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.nativeEvent;
                    var1 = var1.layout;
                    var5 = var1.width;
                    var1 = 0;
                    if(!(var1 !== var5)) { _fun0004_ip = 42; continue _fun0004 }
 25:
                    var4 = _closure2_slot11;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5);
 42:
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var3 = var2.height;
                    if(!(var1 !== var3)) { _fun0004_ip = 79; continue _fun0004 }
 62:
                    var2 = _closure2_slot12;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
 79:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var13.bind(var25)(var5, var8);
            var14 = var25.useEffect;
            var13 = new Array(3);
            var13[0] = var16;
            var13[1] = var11;
            var13[2] = var2;
            var8 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0005_ip = 76; continue _fun0005 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot7;
                    var2 = var1.CHANNEL_LIST_UNREAD_BADGE_VIEWED;
                    var1 = {};
                    var6 = _closure2_slot9;
                    var1['is_mention'] = var6;
                    var5 = _closure2_slot0;
                    var1['position'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 76:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var14.bind(var25)(var8, var13);
            var13 = var25.useCallback;
            var8 = new Array(3);
            var8[0] = var6;
            var8[1] = var2;
            var8[2] = var11;
            var6 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.trackWithMetadata;
                var2 = _closure1_slot7;
                var4 = var2.CHANNEL_LIST_UNREAD_BADGE_CLICKED;
                var3 = {};
                var7 = _closure2_slot9;
                var3['is_mention'] = var7;
                var7 = _closure2_slot0;
                var3['position'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var14 = var13.bind(var25)(var6, var8);
            var6 = var20[var22];
            var8 = var19.bind(var4)(var6);
            var6 = var8.useSharedValue;
            var21 = var6.bind(var8)(var26);
            _closure2_slot13 = var21;
            var13 = var25.useCallback;
            var8 = new Array(1);
            var8[0] = var21;
            var6 = function() {
                var3 = _closure2_slot13;
                var2 = var3.set;
                var1 = 1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var13 = var13.bind(var25)(var6, var8);
            var18 = var25.useCallback;
            var8 = new Array(1);
            var8[0] = var21;
            var6 = function() {
                var3 = _closure2_slot13;
                var2 = var3.set;
                var1 = 0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var8 = var18.bind(var25)(var6, var8);
            var6 = _closure1_slot8;
            var6 = var6.bind(var4)();
            _closure2_slot14 = var6;
            var32 = var25.useMemo;
            var18 = new Array(3);
            var18[0] = var33;
            var18[1] = var2;
            var18[2] = var6;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = 'bottom';
                    if(!(var1 !== var2)) { _fun0006_ip = 27; continue _fun0006 }
 15:
                    var1 = {};
                    var2 = _closure2_slot8;
                    var1['top'] = var2;
                    _fun0006_ip = 40; continue _fun0006;
 27:
                    var2 = {};
                    var3 = _closure2_slot14;
                    var2['bottom'] = var3;
                    var1 = var2;
 40:
                    return var1;
                }
            };
            var18 = var32.bind(var25)(var6, var18);
            var6 = _closure1_slot5;
            var27 = var6.bind(var4)(var27);
            _closure2_slot15 = var27;
            var32 = var25.useState;
            var6 = false;
            var6 = var32.bind(var25)(var6);
            var6 = var31.bind(var4)(var6, var30);
            var26 = var6[var26];
            _closure2_slot16 = var26;
            var6 = var6[var15];
            _closure2_slot17 = var6;
            var15 = var25.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 26; continue _fun0007 }
 13:
                    var3 = _closure2_slot17;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var15.bind(var25)(var3, var6);
            var15 = var25.useCallback;
            var6 = function() {
                var1 = global;
                var4 = var1.setTimeout;
                var1 = _closure1_slot6;
                var2 = var1.minimumViewTime;
                var1 = 1;
                var3 = var2 + var1;
                var1 = undefined;
                var2 = function() {
                    var3 = _closure2_slot17;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var4.bind(var1)(var2, var3);
                return var1;
            };
            var3 = new Array(0);
            var25 = var15.bind(var25)(var6, var3);
            _closure2_slot18 = var25;
            var3 = var20[var22];
            var6 = var19.bind(var4)(var3);
            var3 = var6.useAnimatedStyle;
            var1 = function q() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0008_ip = 90; continue _fun0008 }
 10:
                    var3 = _closure2_slot0;
                    var2 = 'top';
                    if(!(var2 !== var3)) { _fun0008_ip = 31; continue _fun0008 }
 22:
                    var2 = _closure2_slot16;
                    var2 = !var2;
                    _fun0008_ip = 87; continue _fun0008;
 31:
                    var3 = _closure2_slot5;
                    var5 = null;
                    var3 = var5 != var3;
                    if(!var3) { _fun0008_ip = 52; continue _fun0008 }
 44:
                    var4 = _closure2_slot6;
                    var3 = var5 != var4;
 52:
                    if(!var3) { _fun0008_ip = 84; continue _fun0008 }
 55:
                    var5 = _closure2_slot5;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var6 = _closure2_slot6;
                    var4 = _closure2_slot15;
                    var4 = var6 + var4;
                    var3 = var5 > var4;
 84:
                    var2 = var3;
 87:
                    var1 = var2;
 90:
                    var2 = _closure2_slot16;
                    if(!var2) { _fun0008_ip = 140; continue _fun0008 }
 97:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.runOnJS;
                    var2 = _closure2_slot18;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.bind(var3)();
 140:
                    var3 = _closure2_slot12;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 12;
                    var4 = var3 - var2;
                    var5 = _closure2_slot0;
                    var3 = 'bottom';
                    if(var1) { _fun0008_ip = 190; continue _fun0008 }
 171:
                    var2 = -1;
                    if(!(var3 === var5)) { _fun0008_ip = 184; continue _fun0008 }
 181:
                    var2 = 1;
 184:
                    var13 = var4 * var2;
                    _fun0008_ip = 230; continue _fun0008;
 190:
                    var2 = 0;
                    if(!(var3 === var5)) { _fun0008_ip = 227; continue _fun0008 }
 196:
                    var5 = _closure2_slot4;
                    var3 = null;
                    var3 = var3 != var5;
                    var2 = 0;
                    if(!var3) { _fun0008_ip = 227; continue _fun0008 }
 211:
                    var4 = _closure2_slot4;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = -var3;
 227:
                    var13 = var2;
 230:
                    var2 = 0;
                    var14 = 0;
                    if(!var1) { _fun0008_ip = 240; continue _fun0008 }
 237:
                    var14 = 1;
 240:
                    var3 = _closure2_slot11;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var1 > var2;
                    var5 = 1;
                    if(!var1) { _fun0008_ip = 300; continue _fun0008 }
 263:
                    var2 = _closure2_slot11;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 5;
                    var2 = var2 + var1;
                    var3 = _closure2_slot11;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var5 = var2 / var1;
 300:
                    var1 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 15;
                    var2 = var10[var6];
                    var8 = undefined;
                    var12 = var9.bind(var8)(var2);
                    var7 = var12.withSpring;
                    var4 = 16;
                    var2 = var10[var4];
                    var2 = var9.bind(var8)(var2);
                    var3 = var2.springStandard;
                    var2 = 'animate-always';
                    var2 = var7.bind(var12)(var14, var3, var2);
                    var1['opacity'] = var2;
                    var3 = {};
                    var2 = var10[var6];
                    var12 = var9.bind(var8)(var2);
                    var7 = var12.withSpring;
                    var2 = var10[var4];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.springStandard;
                    var2 = var7.bind(var12)(var13, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(3);
                    var2[0] = var3;
                    var3 = {};
                    var12 = _closure2_slot11;
                    var7 = var12.get;
                    var12 = var7.bind(var12)();
                    var7 = 2;
                    var7 = var12 / var7;
                    var3['translateX'] = var7;
                    var2[1] = var3;
                    var3 = {};
                    var6 = var10[var6];
                    var7 = var9.bind(var8)(var6);
                    var6 = var7.withSpring;
                    var12 = 7;
                    var12 = var10[var12];
                    var14 = var9.bind(var8)(var12);
                    var13 = var14.interpolate;
                    var12 = _closure2_slot13;
                    var11 = var12.get;
                    var12 = var11.bind(var12)();
                    var11 = [1];
                    var11[1] = var5;
                    var5 = [0, 1];
                    var5 = var13.bind(var14)(var12, var5, var11);
                    var4 = var10[var4];
                    var4 = var9.bind(var8)(var4);
                    var4 = var4.ON_PRESS_SPRING;
                    var4 = var6.bind(var7)(var5, var4);
                    var3['scale'] = var4;
                    var2[2] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var15['shown'] = var16;
            var15['position'] = var2;
            var15['scrollPosition'] = var29;
            var15['listPaddingTop'] = var28;
            var15['searchBarHeight'] = var27;
            var15['justReachedEnd'] = var26;
            var26 = var20[var22];
            var26 = var19.bind(var4)(var26);
            var26 = var26.runOnJS;
            var15['runOnJS'] = var26;
            var15['resetReachedEnd'] = var25;
            var15['height'] = var24;
            var15['MARGIN'] = var7;
            var15['guildChannelsListUnreadBarInsetEnd'] = var23;
            var15['width'] = var17;
            var17 = 15;
            var17 = var20[var17];
            var17 = var19.bind(var4)(var17);
            var17 = var17.withSpring;
            var15['withSpring'] = var17;
            var17 = 16;
            var23 = var20[var17];
            var23 = var19.bind(var4)(var23);
            var23 = var23.springStandard;
            var15['springStandard'] = var23;
            var22 = var20[var22];
            var22 = var19.bind(var4)(var22);
            var22 = var22.interpolate;
            var15['interpolate'] = var22;
            var15['pressed'] = var21;
            var17 = var20[var17];
            var17 = var19.bind(var4)(var17);
            var17 = var17.ON_PRESS_SPRING;
            var15['ON_PRESS_SPRING'] = var17;
            var1['__closure'] = var15;
            var15 = 978162815161.0;
            var1['__workletHash'] = var15;
            var15 = _closure1_slot13;
            var1['__initData'] = var15;
            var17 = var3.bind(var6)(var1);
            if(var11) { _fun0002_ip = 993; continue _fun0002 }
 929:
            var1 = 'bottom';
            if(!(var1 !== var2)) { _fun0002_ip = 965; continue _fun0002 }
 937:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.ArrowSmallUpIcon;
            _fun0002_ip = 991; continue _fun0002;
 965:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 18;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.ArrowSmallDownIcon;
 991:
            _fun0002_ip = 1019; continue _fun0002;
 993:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 17;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.AtIcon;
 1019:
            var2 = _closure1_slot9;
            var1 = {};
            var15 = _closure1_slot1;
            var19 = _closure1_slot2;
            var6 = 9;
            var6 = var19[var6];
            var15 = var15.bind(var4)(var6);
            if(var11) { _fun0002_ip = 1061; continue _fun0002 }
 1048:
            var6 = var15.colors;
            var6 = var6.TEXT_BRAND;
            _fun0002_ip = 1072; continue _fun0002;
 1061:
            var15 = var15.unsafe_rawColors;
            var6 = var15.WHITE_500;
 1072:
            var1['color'] = var6;
            var6 = 'xxs';
            var1['size'] = var6;
            var6 = var2.bind(var4)(var3, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var1 = {};
            var19 = var10.unreadBar;
            var15 = new Array(3);
            var15[0] = var19;
            var15[1] = var18;
            var15[2] = var17;
            var1['style'] = var15;
            var15 = 'none';
            if(!var16) { _fun0002_ip = 1137; continue _fun0002 }
 1133:
            var15 = 'auto';
 1137:
            var1['pointerEvents'] = var15;
            var15 = 'button';
            var1['accessibilityRole'] = var15;
            var1['onPress'] = var14;
            var1['onPressIn'] = var13;
            var1['onPressOut'] = var8;
            var1['hitSlop'] = var7;
            var1['onLayout'] = var5;
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var10 = var10.text;
            var6['style'] = var10;
            var10 = 'text-xs/bold';
            var6['variant'] = var10;
            var10 = 'text-brand';
            if(!var11) { _fun0002_ip = 1242; continue _fun0002 }
 1236:
            var10 = 'always-white';
 1242:
            var6['color'] = var10;
            var10 = 1.5;
            var6['maxFontSizeMultiplier'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 20;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.y2b7CA;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();