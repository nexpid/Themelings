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
 0:
            var1 = arg1;
            var27 = var1.channelId;
            var _closure2_slot0 = var27;
            var8 = var1.isSearchLocked;
            var _closure2_slot1 = var8;
            var21 = var1.onBackPress;
            var9 = var1.componentWidth;
            var31 = var1.isShowing;
            var5 = undefined;
            if(!(var31 === var5)) { _fun0001_ip = 50; continue _fun0001 }
 48:
            var31 = true;
 50:
            var _closure2_slot2 = var31;
            var2 = var1.onChannelDeleted;
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
            var1 = _closure1_slot14;
            var15 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 9;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var1 = var7.useChannelDetailWidth;
            var16 = var1.bind(var7)(var9);
            var1 = 10;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var39 = var6.bind(var7)(var4, var1);
            _closure2_slot4 = var39;
            var1 = null;
            var4 = var1 == var39;
            var7 = undefined;
            if(var4) { _fun0001_ip = 208; continue _fun0001 }
 203:
            var7 = var39.guild_id;
 208:
            var9 = _closure1_slot3;
            var6 = var9.useEffect;
            var4 = new Array(2);
            var4[0] = var39;
            var4[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0002_ip = 31; continue _fun0002 }
 13:
                    var2 = _closure2_slot3;
                    if(!(var3 != var2)) { _fun0002_ip = 31; continue _fun0002 }
 21:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var9)(var2, var4);
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 11;
            var2 = var11[var2];
            var6 = var4.bind(var5)(var2);
            var2 = var6.useChannelDetailsSearchContext;
            var17 = var2.bind(var6)(var27, var7);
            _closure2_slot5 = var17;
            var2 = 12;
            var2 = var11[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.useSearchSuggestionsGesture;
            var2 = var2.bind(var4)(var17);
            var9 = var2.gesture;
            var24 = var2.dismissed;
            var23 = var2.setDismissed;
            var25 = var2.onLayoutMeasure;
            var10 = _closure1_slot1;
            var2 = 13;
            var4 = var11[var2];
            var6 = var10.bind(var5)(var4);
            var4 = 14;
            var4 = var11[var4];
            var4 = var10.bind(var5)(var4);
            var4 = var4.CHANNEL_DETAILS;
            var4 = var6.bind(var5)(var4);
            var6 = var4.analyticsLocations;
            var4 = var1 == var39;
            var26 = var7;
            var29 = undefined;
            if(var4) { _fun0001_ip = 392; continue _fun0001 }
 382:
            var4 = var39.isArchivedThread;
            var29 = var4.bind(var39)();
 392:
            var4 = _closure1_slot9;
            var36 = var4.bind(var5)(var27);
            _closure2_slot6 = var36;
            var4 = _closure1_slot8;
            var32 = var4.bind(var5)(var27);
            _closure2_slot7 = var32;
            var12 = _closure1_slot3;
            var4 = var12.useRef;
            var28 = var4.bind(var12)(var1);
            _closure2_slot8 = var28;
            var7 = var12.useContext;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var4 = 15;
            var4 = var34[var4];
            var4 = var33.bind(var5)(var4);
            var4 = var4.SwipeForMemberListContext;
            var4 = var7.bind(var12)(var4);
            _closure2_slot9 = var4;
            var7 = 16;
            var7 = var34[var7];
            var10 = var33.bind(var5)(var7);
            var7 = var10.useIsScreenReaderEnabled;
            var22 = var7.bind(var10)();
            var10 = _closure1_slot1;
            var7 = 17;
            var7 = var34[var7];
            var7 = var10.bind(var5)(var7);
            var20 = var7.bind(var5)();
            var7 = 18;
            var7 = var34[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.bind(var5)();
            var11 = var7.top;
            _closure2_slot10 = var11;
            var10 = var12.useMemo;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 19;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.isAndroid;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0003_ip = 86; continue _fun0003 }
 37:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 20;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.isIpadOS;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0003_ip = 86; continue _fun0003 }
 70:
                    var2 = _closure2_slot9;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0003_ip = 103; continue _fun0003 }
 86:
                    var2 = {};
                    var3 = _closure2_slot10;
                    var2['paddingTop'] = var3;
                    var1 = var2;
 103:
                    return var1;
                }
            };
            var14 = var10.bind(var12)(var4, var7);
            var10 = var12.useLayoutEffect;
            var7 = function() {
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
            var4 = var10.bind(var12)(var7, var4);
            var10 = var12.useEffect;
            var7 = new Array(2);
            var7[0] = var27;
            var7[1] = var8;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0004_ip = 34; continue _fun0004 }
 10:
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = undefined;
                    var1 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = _closure2_slot8;
                            var2 = null;
                            var5 = var2 == var1;
                            var1 = undefined;
                            if(var5) { _fun0005_ip = 46; continue _fun0005 }
 18:
                            var3 = _closure2_slot8;
                            var3 = var3.current;
                            var2 = var2 == var3;
                            var1 = undefined;
                            if(var2) { _fun0005_ip = 46; continue _fun0005 }
 36:
                            var2 = var3.focus;
                            var1 = var2.bind(var3)();
 46:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var2)(var1);
 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var10.bind(var12)(var4, var7);
            var10 = var12.useCallback;
            var7 = new Array(1);
            var7[0] = var17;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot8;
                    var7 = null;
                    var3 = var7 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0006_ip = 38; continue _fun0006 }
 22:
                    var6 = _closure2_slot8;
                    var6 = var6.current;
                    var3 = var7 == var6;
                    var5 = var6;
 38:
                    if(var3) { _fun0006_ip = 51; continue _fun0006 }
 41:
                    var3 = var5.blur;
                    var3 = var3.bind(var5)();
 51:
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
                    if(var5) { _fun0006_ip = 146; continue _fun0006 }
 84:
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
 146:
                    return var1;
                }
            };
            var38 = var10.bind(var12)(var4, var7);
            _closure2_slot11 = var38;
            var10 = var12.useCallback;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot8;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0007_ip = 36; continue _fun0007 }
 20:
                    var4 = _closure2_slot8;
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var3 = var4;
 36:
                    if(var2) { _fun0007_ip = 49; continue _fun0007 }
 39:
                    var2 = var3.focus;
                    var2 = var2.bind(var3)();
 49:
                    return var1;
                }
            };
            var4 = new Array(0);
            var30 = var10.bind(var12)(var7, var4);
            _closure2_slot12 = var30;
            var10 = 23;
            var4 = var34[var10];
            var7 = var33.bind(var5)(var4);
            var4 = var7.useSharedValue;
            var37 = var4.bind(var7)(var5);
            _closure2_slot13 = var37;
            var11 = var12.useCallback;
            var7 = new Array(1);
            var7[0] = var37;
            var4 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var1 = _closure1_slot13;
                    if(!(!(var3 <= var1))) { _fun0008_ip = 109; continue _fun0008 }
 30:
                    var4 = _closure2_slot13;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0008_ip = 92; continue _fun0008 }
 55:
                    var5 = global;
                    var6 = var5.Math;
                    var5 = var6.abs;
                    var4 = var3 - var4;
                    var5 = var5.bind(var6)(var4);
                    var4 = 0.001;
                    var2 = var5 < var4;
 92:
                    if(var2) { _fun0008_ip = 109; continue _fun0008 }
 95:
                    var2 = _closure2_slot13;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
 109:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var11.bind(var12)(var4, var7);
            var7 = var34[var10];
            var18 = var33.bind(var5)(var7);
            var11 = var18.useAnimatedStyle;
            var7 = function K() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
                    if(!(var3 !== var4)) { _fun0009_ip = 75; continue _fun0009 }
 47:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 26;
                    var3 = var5[var3];
                    var3 = var4.bind(var11)(var3);
                    var5 = var3.timingFast;
                    _fun0009_ip = 101; continue _fun0009;
 75:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 25;
                    var3 = var9[var3];
                    var3 = var4.bind(var11)(var3);
                    var5 = var3.timingInstant;
 101:
                    var4 = function e(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0010_ip = 61; continue _fun0010 }
 6:
                            var2 = _closure2_slot6;
                            if(var2) { _fun0010_ip = 61; continue _fun0010 }
 16:
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
                            _fun0010_ip = 107; continue _fun0010;
 61:
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
 107:
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
            var19 = {};
            var35 = 24;
            var40 = var34[var35];
            var40 = var33.bind(var5)(var40);
            var40 = var40.withTiming;
            var19['withTiming'] = var40;
            var19['searchActiveSource'] = var32;
            var32 = 25;
            var32 = var34[var32];
            var32 = var33.bind(var5)(var32);
            var32 = var32.timingInstant;
            var19['timingInstant'] = var32;
            var32 = 26;
            var40 = var34[var32];
            var40 = var33.bind(var5)(var40);
            var40 = var40.timingFast;
            var19['timingFast'] = var40;
            var19['isSearchActive'] = var36;
            var40 = var34[var10];
            var40 = var33.bind(var5)(var40);
            var40 = var40.runOnJS;
            var19['runOnJS'] = var40;
            var19['onSearchInactiveAnimationFinish'] = var38;
            var19['onSearchActiveAnimationStart'] = var30;
            var7['__closure'] = var19;
            var19 = 10079571864601.0;
            var7['__workletHash'] = var19;
            var19 = _closure1_slot15;
            var7['__initData'] = var19;
            var18 = var11.bind(var18)(var7);
            var7 = var34[var10];
            var19 = var33.bind(var5)(var7);
            var11 = var19.useAnimatedStyle;
            var7 = function Q() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure2_slot13;
                    var1 = var2.get;
                    var7 = var1.bind(var2)();
                    var1 = {};
                    var2 = 'relative';
                    var1['position'] = var2;
                    var4 = _closure2_slot6;
                    var2 = 'auto';
                    if(!var4) { _fun0011_ip = 41; continue _fun0011 }
 37:
                    var2 = 'none';
 41:
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
                    if(!var2) { _fun0011_ip = 88; continue _fun0011 }
 86:
                    var5 = 0;
 88:
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
                    if(!var4) { _fun0011_ip = 228; continue _fun0011 }
 142:
                    var9 = 0;
                    var4 = var7 >= var9;
                    var2 = undefined;
                    if(!var4) { _fun0011_ip = 228; continue _fun0011 }
 153:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 27;
                    var4 = var10[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.withSpring;
                    var3 = _closure2_slot6;
                    var4 = 0;
                    if(var3) { _fun0011_ip = 190; continue _fun0011 }
 187:
                    var4 = var7;
 190:
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
 228:
                    var1['height'] = var2;
                    return var1;
                }
            };
            var30 = {};
            var30['headerHeight'] = var37;
            var30['isSearchActive'] = var36;
            var35 = var34[var35];
            var35 = var33.bind(var5)(var35);
            var35 = var35.withTiming;
            var30['withTiming'] = var35;
            var32 = var34[var32];
            var32 = var33.bind(var5)(var32);
            var32 = var32.timingFast;
            var30['timingFast'] = var32;
            var32 = 27;
            var32 = var34[var32];
            var32 = var33.bind(var5)(var32);
            var32 = var32.withSpring;
            var30['withSpring'] = var32;
            var32 = _closure1_slot10;
            var30['SPRING_CHANNEL_HEADER'] = var32;
            var7['__closure'] = var30;
            var30 = 13749753414902.0;
            var7['__workletHash'] = var30;
            var30 = _closure1_slot17;
            var7['__initData'] = var30;
            var19 = var11.bind(var19)(var7);
            var30 = var12.useEffect;
            var11 = new Array(1);
            var11[0] = var17;
            var7 = function() {
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
            var7 = var30.bind(var12)(var7, var11);
            var30 = var12.useEffect;
            var11 = new Array(2);
            var11[0] = var17;
            var11[1] = var31;
            var7 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0012_ip = 74; continue _fun0012 }
 10:
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
 74:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var30.bind(var12)(var7, var11);
            var30 = var12.useEffect;
            var11 = new Array(2);
            var11[0] = var27;
            var11[1] = var17;
            var7 = function() {
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
            var7 = var30.bind(var12)(var7, var11);
            var11 = var12.useEffect;
            var7 = new Array(1);
            var7[0] = var27;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
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
                    if(!(var2 != var3)) { _fun0013_ip = 59; continue _fun0013 }
 49:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
 59:
                    return var1;
                }
            };
            var3 = var11.bind(var12)(var3, var7);
            if(!(var1 != var39)) { _fun0001_ip = 2106; continue _fun0001 }
 1159:
            var30 = _closure1_slot12;
            var12 = _closure1_slot4;
            var3 = {};
            var7 = var15.newHeader;
            var3['style'] = var7;
            var35 = _closure1_slot11;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var32 = 30;
            var32 = var11[var32];
            var33 = var7.bind(var5)(var32);
            var32 = {};
            var32['ref'] = var28;
            var32['channel'] = var39;
            var32['onBackPress'] = var21;
            var34 = {};
            var34['onSuggestionsLayoutMeasure'] = var25;
            var34['suggestionsDismissed'] = var24;
            var34['setSuggestionsDismissed'] = var23;
            var32['searchBarLayoutProps'] = var34;
            var32['componentWidth'] = var16;
            var33 = var35.bind(var5)(var33, var32);
            var32 = new Array(2);
            var32[0] = var33;
            var33 = var11[var10];
            var33 = var7.bind(var5)(var33);
            var34 = var33.View;
            var33 = {};
            var33['style'] = var19;
            var19 = var11[var10];
            var19 = var7.bind(var5)(var19);
            var37 = var19.View;
            var36 = {};
            var19 = var15.information;
            var36['style'] = var19;
            var36['onLayout'] = var4;
            var4 = 31;
            var4 = var11[var4];
            var19 = var7.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var39;
            var4 = var35.bind(var5)(var19, var4);
            var38 = new Array(4);
            var38[0] = var4;
            var4 = 32;
            var4 = var11[var4];
            var7 = var7.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var39;
            var11 = var15.linkedLobby;
            var4['containerStyle'] = var11;
            var4 = var35.bind(var5)(var7, var4);
            var38[1] = var4;
            var4 = var39.isPrivate;
            var7 = var4.bind(var39)();
            var4 = null;
            if(var7) { _fun0001_ip = 1440; continue _fun0001 }
 1396:
            var19 = _closure1_slot11;
            var11 = _closure1_slot1;
            var40 = _closure1_slot2;
            var7 = 33;
            var7 = var40[var7];
            var11 = var11.bind(var5)(var7);
            var7 = {};
            var7['channel'] = var39;
            var39 = 'left';
            var7['textAlign'] = var39;
            var4 = var19.bind(var5)(var11, var7);
 1440:
            var38[2] = var4;
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var19 = 34;
            var39 = var11[var19];
            var39 = var7.bind(var5)(var39);
            var40 = var39.TTIFirstContentfulPaint;
            var39 = {};
            var39 = var4.bind(var5)(var40, var39);
            var38[3] = var39;
            var36['children'] = var38;
            var36 = var30.bind(var5)(var37, var36);
            var33['children'] = var36;
            var33 = var35.bind(var5)(var34, var33);
            var32[1] = var33;
            var3['children'] = var32;
            var12 = var30.bind(var5)(var12, var3);
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var6 = 35;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var9;
            var11 = _closure1_slot12;
            if(var8) { _fun0001_ip = 1788; continue _fun0001 }
 1576:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var5)(var8);
            var9 = var8.View;
            var8 = {};
            var30 = var15.detailsContainer;
            var10 = new Array(3);
            var10[0] = var30;
            var10[1] = var14;
            var10[2] = var18;
            var8['style'] = var10;
            var18 = true;
            var8['accessibilityViewIsModal'] = var18;
            var8['onAccessibilityEscape'] = var21;
            var10 = new Array(2);
            var10[0] = var12;
            var12 = null;
            if(!(var18 !== var29)) { _fun0001_ip = 1769; continue _fun0001 }
 1652:
            var30 = _closure1_slot11;
            var29 = _closure1_slot0;
            var35 = _closure1_slot2;
            var18 = 38;
            var18 = var35[var18];
            var18 = var29.bind(var5)(var18);
            var29 = var18.Freeze;
            var18 = {};
            var31 = !var31;
            var18['freeze'] = var31;
            var34 = _closure1_slot1;
            var31 = 39;
            var31 = var35[var31];
            var32 = var34.bind(var5)(var31);
            var31 = {};
            var33 = var15.search;
            var31['style'] = var33;
            var33 = 37;
            var33 = var35[var33];
            var34 = var34.bind(var5)(var33);
            var33 = {};
            var33['searchContext'] = var17;
            var33['width'] = var16;
            var33 = var30.bind(var5)(var34, var33);
            var31['children'] = var33;
            var31 = var30.bind(var5)(var32, var31);
            var18['children'] = var31;
            var12 = var30.bind(var5)(var29, var18);
 1769:
            var10[1] = var12;
            var8['children'] = var10;
            var8 = var11.bind(var5)(var9, var8);
            _fun0001_ip = 2084; continue _fun0001;
 1788:
            var10 = _closure1_slot4;
            var9 = {};
            var18 = var15.detailsContainer;
            var12 = new Array(2);
            var12[0] = var18;
            var12[1] = var14;
            var9['style'] = var12;
            var12 = true;
            var9['accessibilityViewIsModal'] = var12;
            var9['onAccessibilityEscape'] = var21;
            var12 = {};
            var18 = var15.searchLocked;
            var14 = new Array(2);
            var14[0] = var18;
            var15 = var15.autocompleteSuggestions;
            var14[1] = var15;
            var12['style'] = var14;
            var18 = _closure1_slot11;
            var15 = _closure1_slot1;
            var29 = _closure1_slot2;
            var14 = 36;
            var14 = var29[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['ref'] = var28;
            var14['channelId'] = var27;
            var14['guildId'] = var26;
            var14['onSuggestionsLayoutMesure'] = var25;
            var14['onBackPress'] = var21;
            var14['suggestionsDismissed'] = var24;
            var14['setSuggestionsDismissed'] = var23;
            if(var20) { _fun0001_ip = 1922; continue _fun0001 }
 1919:
            var20 = var22;
 1922:
            if(var20) { _fun0001_ip = 1954; continue _fun0001 }
 1925:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 19;
            var22 = var24[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.isAndroid;
            var20 = var22.bind(var23)();
 1954:
            if(!var20) { _fun0001_ip = 1961; continue _fun0001 }
 1957:
            var20 = var1 != var21;
 1961:
            var14['showBackButton'] = var20;
            var15 = var18.bind(var5)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var15 = _closure1_slot11;
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var19 = var18[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.TTIFirstContentfulPaint;
            var19 = {};
            var19 = var15.bind(var5)(var20, var19);
            var14[1] = var19;
            var12['children'] = var14;
            var14 = var11.bind(var5)(var10, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var14 = _closure1_slot1;
            var13 = 37;
            var13 = var18[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['searchContext'] = var17;
            var13['width'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
 2084:
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 2106:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();