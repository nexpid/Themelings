// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var16 = 1;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var15 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.deleteChannelDetailsSearchState;
    var _closure1_slot7 = var8;
    var8 = var4.useChannelDetailsSearchActiveSource;
    var _closure1_slot8 = var8;
    var4 = var4.useIsChannelDetailsSearchActive;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.CHANNEL_DETAILS_TOP_MARGIN;
    var4 = var4.SPRING_CHANNEL_HEADER;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var12 = 7;
    var4 = var6[var12];
    var4 = var13.bind(var1)(var4);
    var4 = var4.spacing;
    var14 = var4.PX_8;
    var _closure1_slot13 = var14;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var19 = var15.absoluteFillObject;
    var20 = var10;
    var15 = copyDataProperties(var20, var19);
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var17 = var15.MOBILE_ACTIONSHEET_BACKGROUND;
    var15 = 'backgroundColor';
    var10[14] = var17;
    var15 = 'flex';
    var10[14] = var16;
    var4['detailsContainer'] = var10;
    var10 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10['marginHorizontal'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var10['gap'] = var15;
    var10['paddingTop'] = var14;
    var4['information'] = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10['marginTop'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['marginBottom'] = var14;
    var4['linkedLobby'] = var10;
    var10 = {'flex': 1, 'flexGrow': 1};
    var4['search'] = var10;
    var10 = {};
    var10['marginTop'] = var11;
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['marginBottom'] = var11;
    var4['searchLocked'] = var10;
    var10 = {};
    var11 = 10;
    var10['zIndex'] = var11;
    var4['autocompleteSuggestions'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var10['paddingBottom'] = var12;
    var10['zIndex'] = var11;
    var4['newHeader'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = "function ChannelDetailsTsx1(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};}";
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function ChannelDetails(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var28 = var2.channelId;
            var _closure2_slot0 = var28;
            var8 = var2.isSearchLocked;
            var _closure2_slot1 = var8;
            var22 = var2.onBackPress;
            var9 = var2.componentWidth;
            var30 = var2.isShowing;
            var5 = undefined;
            if(!(var30 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var30 = true;
case 2:
            var _closure2_slot2 = var30;
            var2 = var2.onChannelDeleted;
            var _closure2_slot3 = var2;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var3 = _closure1_slot14;
            var19 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var3 = var7.useChannelDetailWidth;
            var16 = var3.bind(var7)(var9);
            var3 = 10;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var42 = var6.bind(var7)(var4, var3);
            _closure2_slot4 = var42;
            var21 = null;
            var3 = var21 == var42;
            var4 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var42.guild_id;
case 4:
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var42;
            var3[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot3;
                    if(!(var3 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 11;
            var2 = var10[var2];
            var6 = var3.bind(var5)(var2);
            var2 = var6.useChannelDetailsSearchContext;
            var17 = var2.bind(var6)(var28, var4);
            _closure2_slot5 = var17;
            var2 = 12;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useSearchSuggestionsGesture;
            var2 = var2.bind(var3)(var17);
            var9 = var2.gesture;
            var25 = var2.dismissed;
            var24 = var2.setDismissed;
            var26 = var2.onLayoutMeasure;
            var7 = _closure1_slot1;
            var2 = 13;
            var3 = var10[var2];
            var6 = var7.bind(var5)(var3);
            var3 = 14;
            var3 = var10[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.CHANNEL_DETAILS;
            var3 = var6.bind(var5)(var3);
            var6 = var3.analyticsLocations;
            var3 = var21 == var42;
            var27 = var4;
            var15 = undefined;
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = var42.isArchivedThread;
            var15 = var3.bind(var42)();
case 9:
            var3 = _closure1_slot9;
            var12 = var3.bind(var5)(var28);
            _closure2_slot6 = var12;
            var3 = _closure1_slot8;
            var3 = var3.bind(var5)(var28);
            _closure2_slot7 = var3;
            var7 = _closure1_slot3;
            var4 = var7.useRef;
            var29 = var4.bind(var7)(var21);
            _closure2_slot8 = var29;
            var10 = var7.useContext;
            var18 = _closure1_slot0;
            var31 = _closure1_slot2;
            var4 = 15;
            var4 = var31[var4];
            var4 = var18.bind(var5)(var4);
            var4 = var4.SwipeForMemberListContext;
            var4 = var10.bind(var7)(var4);
            _closure2_slot9 = var4;
            var10 = 16;
            var10 = var31[var10];
            var11 = var18.bind(var5)(var10);
            var10 = var11.useIsScreenReaderEnabled;
            var23 = var10.bind(var11)();
            var11 = _closure1_slot1;
            var10 = 17;
            var10 = var31[var10];
            var10 = var11.bind(var5)(var10);
            var20 = var10.bind(var5)();
            var10 = 18;
            var10 = var31[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.bind(var5)();
            var14 = var10.top;
            _closure2_slot10 = var14;
            var11 = var7.useMemo;
            var10 = new Array(2);
            var10[0] = var14;
            var10[1] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 19;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.isAndroid;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 20;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.isIpadOS;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 13:
                    var2 = _closure2_slot9;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 11:
                    var2 = {};
                    var3 = _closure2_slot10;
                    var2['paddingTop'] = var3;
                    var1 = var2;
case 14:
                    return var1;
                }
            };
            var14 = var11.bind(var7)(var4, var10);
            var11 = var7.useLayoutEffect;
            var10 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = new Array(0);
            var4 = var11.bind(var7)(var10, var4);
            var11 = var7.useEffect;
            var10 = new Array(2);
            var10[0] = var28;
            var10[1] = var8;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = undefined;
                    if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    return var4;
case 15:
                    var2 = global;
                    var3 = var2.setTimeout;
                    var2 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = _closure2_slot8;
                            var3 = var1.current;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                            var2 = var3.focus;
                            var1 = var2.bind(var3)();
case 17:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
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
            var4 = var11.bind(var7)(var4, var10);
            var10 = var7.useEffect;
            var4 = new Array(4);
            var4[0] = var12;
            var4[1] = var8;
            var4[2] = var3;
            var4[3] = var17;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var2 = _closure2_slot7;
                    var1 = 'initial';
                    if(!(var1 !== var2)) { _fun0006_ip = 19; continue _fun0006 }
case 21:
                    var4 = _closure2_slot6;
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = null;
                    if(var4) { _fun0006_ip = 22; continue _fun0006 }
case 3:
                    if(!(var1 != var2)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var4 = var2.blur;
                    var4 = var4.bind(var2)();
case 23:
                    var9 = _closure1_slot5;
                    var8 = var9.getState;
                    var7 = _closure2_slot5;
                    var6 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.isInitialSearchQuery;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var6 = var8.bind(var9)(var7, var6);
                    if(var6) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var8 = _closure1_slot5;
                    var7 = var8.setState;
                    var6 = _closure2_slot5;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.reset;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var5 = var7.bind(var8)(var6, var5);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 22;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.fetchInitialMessages;
                    var3 = _closure2_slot5;
                    var3 = var4.bind(var5)(var3);
                    _fun0006_ip = 19; continue _fun0006;
case 25:
                    var3 = undefined;
                    return var3;
case 22:
                    if(!(var1 != var2)) { _fun0006_ip = 19; continue _fun0006 }
case 27:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var7)(var3, var4);
            var35 = 23;
            var3 = var31[var35];
            var4 = var18.bind(var5)(var3);
            var3 = var4.useSharedValue;
            var32 = var3.bind(var4)(var5);
            _closure2_slot11 = var32;
            var10 = var7.useCallback;
            var4 = new Array(1);
            var4[0] = var32;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var1 = _closure1_slot13;
                    if(!(!(var3 <= var1))) { _fun0007_ip = 28; continue _fun0007 }
case 6:
                    var4 = _closure2_slot11;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var5 = global;
                    var6 = var5.Math;
                    var5 = var6.abs;
                    var4 = var3 - var4;
                    var5 = var5.bind(var6)(var4);
                    var4 = 0.001;
                    var2 = var5 < var4;
case 29:
                    if(var2) { _fun0007_ip = 28; continue _fun0007 }
case 31:
                    var2 = _closure2_slot11;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = var10.bind(var7)(var3, var4);
            var3 = var31[var35];
            var10 = var18.bind(var5)(var3);
            var4 = var10.useAnimatedStyle;
            var3 = function W() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot11;
                    var1 = var2.get;
                    var7 = var1.bind(var2)();
                    var1 = {};
                    var2 = 'relative';
                    var1['position'] = var2;
                    var4 = _closure2_slot6;
                    var2 = 'auto';
                    if(!var4) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var2 = 'none';
case 32:
                    var1['pointerEvents'] = var2;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 24;
                    var2 = var5[var2];
                    var6 = undefined;
                    var10 = var4.bind(var6)(var2);
                    var9 = var10.withTiming;
                    var2 = _closure2_slot6;
                    var5 = 1;
                    if(!var2) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var5 = 0;
case 34:
                    var4 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 25;
                    var2 = var11[var2];
                    var2 = var4.bind(var6)(var2);
                    var4 = var2.timingFast;
                    var2 = 'animate-always';
                    var2 = var9.bind(var10)(var5, var4, var2);
                    var1['opacity'] = var2;
                    var2 = null;
                    var4 = var2 != var7;
                    var2 = undefined;
                    if(!var4) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var9 = 0;
                    var4 = var7 >= var9;
                    var2 = undefined;
                    if(!var4) { _fun0008_ip = 36; continue _fun0008 }
case 38:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 26;
                    var4 = var10[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.withSpring;
                    var3 = _closure2_slot6;
                    var4 = 0;
                    if(var3) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var4 = var7;
case 39:
                    var3 = {};
                    var13 = _closure1_slot10;
                    var14 = var3;
                    var8 = copyDataProperties(var14, var13);
                    var8 = {};
                    var8['min'] = var9;
                    var8['max'] = var7;
                    var7 = 'clamp';
                    var3[6] = var8;
                    var2 = var5.bind(var6)(var4, var3);
case 36:
                    var1['height'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var11['headerHeight'] = var32;
            var11['isSearchActive'] = var12;
            var12 = 24;
            var12 = var31[var12];
            var12 = var18.bind(var5)(var12);
            var12 = var12.withTiming;
            var11['withTiming'] = var12;
            var12 = 25;
            var12 = var31[var12];
            var12 = var18.bind(var5)(var12);
            var12 = var12.timingFast;
            var11['timingFast'] = var12;
            var12 = 26;
            var12 = var31[var12];
            var12 = var18.bind(var5)(var12);
            var12 = var12.withSpring;
            var11['withSpring'] = var12;
            var12 = _closure1_slot10;
            var11['SPRING_CHANNEL_HEADER'] = var12;
            var3['__closure'] = var11;
            var11 = 8423441529588.0;
            var3['__workletHash'] = var11;
            var11 = _closure1_slot15;
            var3['__initData'] = var11;
            var36 = var4.bind(var10)(var3);
            var10 = var7.useEffect;
            var4 = new Array(1);
            var4[0] = var17;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.initializeAutocomplete;
                var2 = _closure2_slot5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var10.bind(var7)(var3, var4);
            var10 = var7.useEffect;
            var4 = new Array(2);
            var4[0] = var17;
            var4[1] = var30;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 27;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.clearAllSearchMesssages;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot5;
                    var3 = var4.setState;
                    var2 = _closure2_slot5;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.reset;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var7)(var3, var4);
            var10 = var7.useEffect;
            var4 = new Array(2);
            var4[0] = var28;
            var4[1] = var17;
            var3 = function() {
                var1 = function() {
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.clearAllSearchMesssages;
                    var2 = var2.bind(var4)();
                    var5 = _closure1_slot7;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure1_slot5;
                    var3 = var4.deleteState;
                    var2 = _closure2_slot5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            };
            var3 = var10.bind(var7)(var3, var4);
            var4 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var28;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 28;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getBestActiveInputForChannelId;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 43; continue _fun0010 }
case 44:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
case 43:
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1, var3);
            var3 = var21 == var42;
            var1 = null;
            if(var3) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = var10[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var6 = 29;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var9;
            var10 = _closure1_slot12;
            var9 = _closure1_slot4;
            var11 = {};
            var18 = var19.detailsContainer;
            var12 = new Array(2);
            var12[0] = var18;
            var12[1] = var14;
            var11['style'] = var12;
            var14 = true;
            var11['accessibilityViewIsModal'] = var14;
            var11['onAccessibilityEscape'] = var22;
            if(var8) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var18 = _closure1_slot12;
            var12 = _closure1_slot4;
            var8 = {};
            var31 = var19.newHeader;
            var8['style'] = var31;
            var34 = _closure1_slot11;
            var39 = _closure1_slot1;
            var40 = _closure1_slot2;
            var31 = 32;
            var31 = var40[var31];
            var32 = var39.bind(var5)(var31);
            var31 = {};
            var31['ref'] = var29;
            var31['channel'] = var42;
            var31['onBackPress'] = var22;
            var31['onSuggestionsLayoutMeasure'] = var26;
            var31['suggestionsDismissed'] = var25;
            var31['setSuggestionsDismissed'] = var24;
            var31['componentWidth'] = var16;
            var32 = var34.bind(var5)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var32 = var40[var35];
            var32 = var39.bind(var5)(var32);
            var33 = var32.View;
            var32 = {};
            var32['style'] = var36;
            var35 = var40[var35];
            var35 = var39.bind(var5)(var35);
            var36 = var35.View;
            var35 = {};
            var38 = var19.information;
            var35['style'] = var38;
            var35['onLayout'] = var37;
            var37 = 33;
            var37 = var40[var37];
            var38 = var39.bind(var5)(var37);
            var37 = {};
            var37['channel'] = var42;
            var38 = var34.bind(var5)(var38, var37);
            var37 = new Array(3);
            var37[0] = var38;
            var38 = 34;
            var38 = var40[var38];
            var39 = var39.bind(var5)(var38);
            var38 = {};
            var38['channel'] = var42;
            var40 = var19.linkedLobby;
            var38['containerStyle'] = var40;
            var38 = var34.bind(var5)(var39, var38);
            var37[1] = var38;
            var38 = var42.isPrivate;
            var39 = var38.bind(var42)();
            var38 = null;
            if(var39) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var41 = _closure1_slot11;
            var40 = _closure1_slot1;
            var43 = _closure1_slot2;
            var39 = 35;
            var39 = var43[var39];
            var40 = var40.bind(var5)(var39);
            var39 = {};
            var39['channel'] = var42;
            var42 = 'left';
            var39['textAlign'] = var42;
            var38 = var41.bind(var5)(var40, var39);
case 49:
            var37[2] = var38;
            var35['children'] = var37;
            var35 = var18.bind(var5)(var36, var35);
            var32['children'] = var35;
            var32 = var34.bind(var5)(var33, var32);
            var31[1] = var32;
            var8['children'] = var31;
            var12 = var18.bind(var5)(var12, var8);
            var8 = new Array(2);
            var8[0] = var12;
            var12 = null;
            if(!(var14 !== var15)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var18 = _closure1_slot11;
            var15 = _closure1_slot0;
            var34 = _closure1_slot2;
            var14 = 36;
            var14 = var34[var14];
            var14 = var15.bind(var5)(var14);
            var15 = var14.Freeze;
            var14 = {};
            var30 = !var30;
            var14['freeze'] = var30;
            var33 = _closure1_slot1;
            var30 = 37;
            var30 = var34[var30];
            var31 = var33.bind(var5)(var30);
            var30 = {};
            var32 = var19.search;
            var30['style'] = var32;
            var32 = 31;
            var32 = var34[var32];
            var33 = var33.bind(var5)(var32);
            var32 = {};
            var32['searchContext'] = var17;
            var32['width'] = var16;
            var32 = var18.bind(var5)(var33, var32);
            var30['children'] = var32;
            var30 = var18.bind(var5)(var31, var30);
            var14['children'] = var30;
            var12 = var18.bind(var5)(var15, var14);
case 51:
            var8[1] = var12;
            var11['children'] = var8;
            var8 = var11;
            _fun0001_ip = 53; continue _fun0001;
case 47:
            var15 = _closure1_slot11;
            var14 = _closure1_slot4;
            var12 = {};
            var30 = var19.searchLocked;
            var18 = new Array(2);
            var18[0] = var30;
            var19 = var19.autocompleteSuggestions;
            var18[1] = var19;
            var12['style'] = var18;
            var19 = _closure1_slot1;
            var30 = _closure1_slot2;
            var18 = 30;
            var18 = var30[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var18['ref'] = var29;
            var18['channelId'] = var28;
            var18['guildId'] = var27;
            var18['onSuggestionsLayoutMesure'] = var26;
            var18['onBackPress'] = var22;
            var18['suggestionsDismissed'] = var25;
            var18['setSuggestionsDismissed'] = var24;
            if(var20) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var20 = var23;
case 54:
            if(var20) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 19;
            var23 = var25[var23];
            var24 = var24.bind(var5)(var23);
            var23 = var24.isAndroid;
            var20 = var23.bind(var24)();
case 56:
            if(!var20) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var20 = var21 != var22;
case 58:
            var18['showBackButton'] = var20;
            var18 = var15.bind(var5)(var19, var18);
            var12['children'] = var18;
            var14 = var15.bind(var5)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot11;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var13 = 31;
            var13 = var18[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['searchContext'] = var17;
            var13['width'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var11['children'] = var12;
            var8 = var11;
case 53:
            var8 = var10.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 45:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();