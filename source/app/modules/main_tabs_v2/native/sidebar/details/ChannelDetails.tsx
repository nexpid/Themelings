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
    var17 = 1;
    var4 = var6[var17];
    var4 = var5.bind(var1)(var4);
    var16 = var4.StyleSheet;
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
    var14 = var4.DESCRIPTION_HORIZONTAL_MARGIN;
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
    var15 = var4.PX_8;
    var _closure1_slot13 = var15;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var20 = var16.absoluteFillObject;
    var21 = var10;
    var16 = copyDataProperties(var21, var20);
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var18 = var16.BG_BASE_SECONDARY;
    var16 = 'backgroundColor';
    var10[var16] = var18;
    var16 = 'flex';
    var10[var16] = var17;
    var4['detailsContainer'] = var10;
    var10 = {};
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var10['marginHorizontal'] = var16;
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var10['gap'] = var16;
    var10['paddingTop'] = var15;
    var4['information'] = var10;
    var10 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var10['marginTop'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var10['marginBottom'] = var15;
    var4['linkedLobby'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['paddingTop'] = var14;
    var4['topic'] = var10;
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
    var8 = "function ChannelDetailsTsx1(){const{withTiming,searchActiveSource,timingInstant,timingFast,isSearchActive,runOnJS,onSearchInactiveAnimationFinish,onSearchActiveAnimationStart}=this.__closure;return{top:withTiming(0,searchActiveSource==='initial'?timingInstant:timingFast,'respect-motion-settings',function(finished){if(finished&&!isSearchActive){runOnJS(onSearchInactiveAnimationFinish)();}else{runOnJS(onSearchActiveAnimationStart)();}})};}";
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function ChannelDetailsTsx2(finished){const{isSearchActive,runOnJS,onSearchInactiveAnimationFinish,onSearchActiveAnimationStart}=this.__closure;if(finished&&!isSearchActive){runOnJS(onSearchInactiveAnimationFinish)();}else{runOnJS(onSearchActiveAnimationStart)();}}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = "function ChannelDetailsTsx3(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};}";
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function ChannelDetails(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var27 = var2.channelId;
            var _closure2_slot0 = var27;
            var8 = var2.isSearchLocked;
            var _closure2_slot1 = var8;
            var21 = var2.onBackPress;
            var9 = var2.componentWidth;
            var31 = var2.isShowing;
            var5 = undefined;
            if(!(var31 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var31 = true;
case 2:
            var _closure2_slot2 = var31;
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
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var3 = _closure1_slot14;
            var18 = var3.bind(var5)();
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
            var20 = null;
            var3 = var20 == var42;
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
            var17 = var2.bind(var6)(var27, var4);
            _closure2_slot5 = var17;
            var2 = 12;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useSearchSuggestionsGesture;
            var2 = var2.bind(var3)(var17);
            var9 = var2.gesture;
            var24 = var2.dismissed;
            var23 = var2.setDismissed;
            var25 = var2.onLayoutMeasure;
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
            var3 = var20 == var42;
            var26 = var4;
            var29 = undefined;
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = var42.isArchivedThread;
            var29 = var3.bind(var42)();
case 9:
            var3 = _closure1_slot9;
            var34 = var3.bind(var5)(var27);
            _closure2_slot6 = var34;
            var3 = _closure1_slot8;
            var15 = var3.bind(var5)(var27);
            _closure2_slot7 = var15;
            var7 = _closure1_slot3;
            var3 = var7.useRef;
            var28 = var3.bind(var7)(var20);
            _closure2_slot8 = var28;
            var4 = var7.useContext;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var3 = 15;
            var3 = var32[var3];
            var3 = var30.bind(var5)(var3);
            var3 = var3.SwipeForMemberListContext;
            var3 = var4.bind(var7)(var3);
            _closure2_slot9 = var3;
            var4 = 16;
            var4 = var32[var4];
            var10 = var30.bind(var5)(var4);
            var4 = var10.useIsScreenReaderEnabled;
            var22 = var4.bind(var10)();
            var10 = _closure1_slot1;
            var4 = 17;
            var4 = var32[var4];
            var4 = var10.bind(var5)(var4);
            var19 = var4.bind(var5)();
            var4 = 18;
            var4 = var32[var4];
            var4 = var10.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var11 = var4.top;
            _closure2_slot10 = var11;
            var10 = var7.useMemo;
            var4 = new Array(2);
            var4[0] = var11;
            var4[1] = var3;
            var3 = function() {
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
            var14 = var10.bind(var7)(var3, var4);
            var10 = var7.useLayoutEffect;
            var4 = function() {
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
            var3 = new Array(0);
            var3 = var10.bind(var7)(var4, var3);
            var10 = var7.useEffect;
            var4 = new Array(2);
            var4[0] = var27;
            var4[1] = var8;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = undefined;
                    var1 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = _closure2_slot8;
                            var2 = null;
                            var5 = var2 == var1;
                            var1 = undefined;
                            if(var5) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                            var3 = _closure2_slot8;
                            var3 = var3.current;
                            var2 = var2 == var3;
                            var1 = undefined;
                            if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 19:
                            var2 = var3.focus;
                            var1 = var2.bind(var3)();
case 17:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var2)(var1);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var7)(var3, var4);
            var10 = var7.useCallback;
            var4 = new Array(1);
            var4[0] = var17;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var7 = null;
                    var3 = var7 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                    var6 = _closure2_slot8;
                    var6 = var6.current;
                    var3 = var7 == var6;
                    var5 = var6;
case 20:
                    if(var3) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var3 = var5.blur;
                    var3 = var3.bind(var5)();
case 22:
                    var8 = _closure1_slot5;
                    var7 = var8.getState;
                    var6 = _closure2_slot5;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.isInitialSearchQuery;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var5 = var7.bind(var8)(var6, var5);
                    if(var5) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var7 = _closure1_slot5;
                    var6 = var7.setState;
                    var5 = _closure2_slot5;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.reset;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 22;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.fetchInitialMessages;
                    var2 = _closure2_slot5;
                    var2 = var3.bind(var4)(var2);
case 24:
                    return var1;
                }
            };
            var38 = var10.bind(var7)(var3, var4);
            _closure2_slot11 = var38;
            var10 = var7.useCallback;
            var4 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0007_ip = 19; continue _fun0007 }
case 26:
                    var4 = _closure2_slot8;
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var3 = var4;
case 19:
                    if(var2) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var2 = var3.focus;
                    var2 = var2.bind(var3)();
case 27:
                    return var1;
                }
            };
            var3 = new Array(0);
            var12 = var10.bind(var7)(var4, var3);
            _closure2_slot12 = var12;
            var35 = 23;
            var3 = var32[var35];
            var4 = var30.bind(var5)(var3);
            var3 = var4.useSharedValue;
            var36 = var3.bind(var4)(var5);
            _closure2_slot13 = var36;
            var10 = var7.useCallback;
            var4 = new Array(1);
            var4[0] = var36;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var1 = _closure1_slot13;
                    if(!(!(var3 <= var1))) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                    var4 = _closure2_slot13;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var5 = global;
                    var6 = var5.Math;
                    var5 = var6.abs;
                    var4 = var3 - var4;
                    var5 = var5.bind(var6)(var4);
                    var4 = 0.001;
                    var2 = var5 < var4;
case 31:
                    if(var2) { _fun0008_ip = 29; continue _fun0008 }
case 33:
                    var2 = _closure2_slot13;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = var10.bind(var7)(var3, var4);
            var3 = var32[var35];
            var10 = var30.bind(var5)(var3);
            var4 = var10.useAnimatedStyle;
            var3 = function K() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 24;
                    var3 = var5[var3];
                    var11 = undefined;
                    var7 = var4.bind(var11)(var3);
                    var6 = var7.withTiming;
                    var4 = _closure2_slot7;
                    var3 = 'initial';
                    if(!(var3 !== var4)) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 26;
                    var3 = var5[var3];
                    var3 = var4.bind(var11)(var3);
                    var5 = var3.timingFast;
                    _fun0009_ip = 36; continue _fun0009;
case 34:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 25;
                    var3 = var9[var3];
                    var3 = var4.bind(var11)(var3);
                    var5 = var3.timingInstant;
case 36:
                    var4 = function e(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0010_ip = 37; continue _fun0010 }
case 38:
                            var2 = _closure2_slot6;
                            if(var2) { _fun0010_ip = 37; continue _fun0010 }
case 39:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 23;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot11;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
                            _fun0010_ip = 40; continue _fun0010;
case 37:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 23;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot12;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 40:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = {};
                    var9 = _closure2_slot6;
                    var3['isSearchActive'] = var9;
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 23;
                    var9 = var12[var9];
                    var9 = var10.bind(var11)(var9);
                    var9 = var9.runOnJS;
                    var3['runOnJS'] = var9;
                    var9 = _closure2_slot11;
                    var3['onSearchInactiveAnimationFinish'] = var9;
                    var8 = _closure2_slot12;
                    var3['onSearchActiveAnimationStart'] = var8;
                    var4['__closure'] = var3;
                    var3 = 3100817967039.0;
                    var4['__workletHash'] = var3;
                    var2 = _closure1_slot16;
                    var4['__initData'] = var2;
                    var16 = 0;
                    var14 = 'respect-motion-settings';
                    var17 = var7;
                    var15 = var5;
                    var13 = var4;
                    var2 = var17[var6](var16, var15, var14, var13, var12);
                    var1['top'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var33 = 24;
            var39 = var32[var33];
            var39 = var30.bind(var5)(var39);
            var39 = var39.withTiming;
            var11['withTiming'] = var39;
            var11['searchActiveSource'] = var15;
            var15 = 25;
            var15 = var32[var15];
            var15 = var30.bind(var5)(var15);
            var15 = var15.timingInstant;
            var11['timingInstant'] = var15;
            var15 = 26;
            var39 = var32[var15];
            var39 = var30.bind(var5)(var39);
            var39 = var39.timingFast;
            var11['timingFast'] = var39;
            var11['isSearchActive'] = var34;
            var39 = var32[var35];
            var39 = var30.bind(var5)(var39);
            var39 = var39.runOnJS;
            var11['runOnJS'] = var39;
            var11['onSearchInactiveAnimationFinish'] = var38;
            var11['onSearchActiveAnimationStart'] = var12;
            var3['__closure'] = var11;
            var11 = 10079571864601.0;
            var3['__workletHash'] = var11;
            var11 = _closure1_slot15;
            var3['__initData'] = var11;
            var12 = var4.bind(var10)(var3);
            var3 = var32[var35];
            var10 = var30.bind(var5)(var3);
            var4 = var10.useAnimatedStyle;
            var3 = function Q() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot13;
                    var1 = var2.get;
                    var7 = var1.bind(var2)();
                    var1 = {};
                    var2 = 'relative';
                    var1['position'] = var2;
                    var4 = _closure2_slot6;
                    var2 = 'auto';
                    if(!var4) { _fun0011_ip = 23; continue _fun0011 }
case 12:
                    var2 = 'none';
case 23:
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
                    if(!var2) { _fun0011_ip = 41; continue _fun0011 }
case 11:
                    var5 = 0;
case 41:
                    var4 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 26;
                    var2 = var11[var2];
                    var2 = var4.bind(var6)(var2);
                    var4 = var2.timingFast;
                    var2 = 'animate-always';
                    var2 = var9.bind(var10)(var5, var4, var2);
                    var1['opacity'] = var2;
                    var2 = null;
                    var4 = var2 != var7;
                    var2 = undefined;
                    if(!var4) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                    var9 = 0;
                    var4 = var7 >= var9;
                    var2 = undefined;
                    if(!var4) { _fun0011_ip = 42; continue _fun0011 }
case 44:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 27;
                    var4 = var10[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.withSpring;
                    var3 = _closure2_slot6;
                    var4 = 0;
                    if(var3) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                    var4 = var7;
case 45:
                    var3 = {};
                    var13 = _closure1_slot10;
                    var14 = var3;
                    var8 = copyDataProperties(var14, var13);
                    var8 = {};
                    var8['min'] = var9;
                    var8['max'] = var7;
                    var7 = 'clamp';
                    var3[var7] = var8;
                    var2 = var5.bind(var6)(var4, var3);
case 42:
                    var1['height'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var11['headerHeight'] = var36;
            var11['isSearchActive'] = var34;
            var33 = var32[var33];
            var33 = var30.bind(var5)(var33);
            var33 = var33.withTiming;
            var11['withTiming'] = var33;
            var15 = var32[var15];
            var15 = var30.bind(var5)(var15);
            var15 = var15.timingFast;
            var11['timingFast'] = var15;
            var15 = 27;
            var15 = var32[var15];
            var15 = var30.bind(var5)(var15);
            var15 = var15.withSpring;
            var11['withSpring'] = var15;
            var15 = _closure1_slot10;
            var11['SPRING_CHANNEL_HEADER'] = var15;
            var3['__closure'] = var11;
            var11 = 13749753414902.0;
            var3['__workletHash'] = var11;
            var11 = _closure1_slot17;
            var3['__initData'] = var11;
            var36 = var4.bind(var10)(var3);
            var10 = var7.useEffect;
            var4 = new Array(1);
            var4[0] = var17;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
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
            var4[1] = var31;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0012_ip = 47; continue _fun0012 }
case 16:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 28;
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
case 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var7)(var3, var4);
            var10 = var7.useEffect;
            var4 = new Array(2);
            var4[0] = var27;
            var4[1] = var17;
            var3 = function() {
                var1 = function() {
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 28;
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
            var3[0] = var27;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getBestActiveInputForChannelId;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 48; continue _fun0013 }
case 27:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
case 48:
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1, var3);
            var3 = var20 == var42;
            var1 = null;
            if(var3) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = var10[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var6 = 30;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var9;
            var11 = _closure1_slot12;
            if(var8) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var39 = _closure1_slot1;
            var40 = _closure1_slot2;
            var8 = var40[var35];
            var8 = var39.bind(var5)(var8);
            var9 = var8.View;
            var8 = {};
            var15 = var18.detailsContainer;
            var10 = new Array(3);
            var10[0] = var15;
            var10[1] = var14;
            var10[2] = var12;
            var8['style'] = var10;
            var15 = true;
            var8['accessibilityViewIsModal'] = var15;
            var8['onAccessibilityEscape'] = var21;
            var12 = _closure1_slot4;
            var10 = {};
            var30 = var18.newHeader;
            var10['style'] = var30;
            var34 = _closure1_slot11;
            var30 = 33;
            var30 = var40[var30];
            var32 = var39.bind(var5)(var30);
            var30 = {};
            var30['ref'] = var28;
            var30['channel'] = var42;
            var30['onBackPress'] = var21;
            var30['onSuggestionsLayoutMeasure'] = var25;
            var30['suggestionsDismissed'] = var24;
            var30['setSuggestionsDismissed'] = var23;
            var30['componentWidth'] = var16;
            var32 = var34.bind(var5)(var32, var30);
            var30 = new Array(2);
            var30[0] = var32;
            var32 = var40[var35];
            var32 = var39.bind(var5)(var32);
            var33 = var32.View;
            var32 = {};
            var32['style'] = var36;
            var35 = var40[var35];
            var35 = var39.bind(var5)(var35);
            var36 = var35.View;
            var35 = {};
            var38 = var18.information;
            var35['style'] = var38;
            var35['onLayout'] = var37;
            var37 = 34;
            var37 = var40[var37];
            var38 = var39.bind(var5)(var37);
            var37 = {};
            var37['channel'] = var42;
            var38 = var34.bind(var5)(var38, var37);
            var37 = new Array(3);
            var37[0] = var38;
            var38 = 35;
            var38 = var40[var38];
            var39 = var39.bind(var5)(var38);
            var38 = {};
            var38['channel'] = var42;
            var40 = var18.linkedLobby;
            var38['containerStyle'] = var40;
            var38 = var34.bind(var5)(var39, var38);
            var37[1] = var38;
            var38 = var42.isPrivate;
            var39 = var38.bind(var42)();
            var38 = null;
            if(var39) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var41 = _closure1_slot11;
            var40 = _closure1_slot1;
            var43 = _closure1_slot2;
            var39 = 36;
            var39 = var43[var39];
            var40 = var40.bind(var5)(var39);
            var39 = {};
            var39['channel'] = var42;
            var42 = 'left';
            var39['textAlign'] = var42;
            var38 = var41.bind(var5)(var40, var39);
case 53:
            var37[2] = var38;
            var35['children'] = var37;
            var35 = var11.bind(var5)(var36, var35);
            var32['children'] = var35;
            var32 = var34.bind(var5)(var33, var32);
            var30[1] = var32;
            var10['children'] = var30;
            var12 = var11.bind(var5)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var12 = null;
            if(!(var15 !== var29)) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var30 = _closure1_slot11;
            var29 = _closure1_slot0;
            var35 = _closure1_slot2;
            var15 = 37;
            var15 = var35[var15];
            var15 = var29.bind(var5)(var15);
            var29 = var15.Freeze;
            var15 = {};
            var31 = !var31;
            var15['freeze'] = var31;
            var34 = _closure1_slot1;
            var31 = 38;
            var31 = var35[var31];
            var32 = var34.bind(var5)(var31);
            var31 = {};
            var33 = var18.search;
            var31['style'] = var33;
            var33 = 32;
            var33 = var35[var33];
            var34 = var34.bind(var5)(var33);
            var33 = {};
            var33['searchContext'] = var17;
            var33['width'] = var16;
            var33 = var30.bind(var5)(var34, var33);
            var31['children'] = var33;
            var31 = var30.bind(var5)(var32, var31);
            var15['children'] = var31;
            var12 = var30.bind(var5)(var29, var15);
case 55:
            var10[1] = var12;
            var8['children'] = var10;
            var8 = var11.bind(var5)(var9, var8);
            _fun0001_ip = 57; continue _fun0001;
case 51:
            var10 = _closure1_slot4;
            var9 = {};
            var15 = var18.detailsContainer;
            var12 = new Array(2);
            var12[0] = var15;
            var12[1] = var14;
            var9['style'] = var12;
            var12 = true;
            var9['accessibilityViewIsModal'] = var12;
            var9['onAccessibilityEscape'] = var21;
            var14 = _closure1_slot11;
            var12 = {};
            var29 = var18.searchLocked;
            var15 = new Array(2);
            var15[0] = var29;
            var18 = var18.autocompleteSuggestions;
            var15[1] = var18;
            var12['style'] = var15;
            var18 = _closure1_slot1;
            var29 = _closure1_slot2;
            var15 = 31;
            var15 = var29[var15];
            var18 = var18.bind(var5)(var15);
            var15 = {};
            var15['ref'] = var28;
            var15['channelId'] = var27;
            var15['guildId'] = var26;
            var15['onSuggestionsLayoutMesure'] = var25;
            var15['onBackPress'] = var21;
            var15['suggestionsDismissed'] = var24;
            var15['setSuggestionsDismissed'] = var23;
            if(var19) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var19 = var22;
case 58:
            if(var19) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 19;
            var22 = var24[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.isAndroid;
            var19 = var22.bind(var23)();
case 60:
            if(!var19) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var19 = var20 != var21;
case 62:
            var15['showBackButton'] = var19;
            var15 = var14.bind(var5)(var18, var15);
            var12['children'] = var15;
            var14 = var14.bind(var5)(var10, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot11;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var13 = 32;
            var13 = var18[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['searchContext'] = var17;
            var13['width'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
case 57:
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 49:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();