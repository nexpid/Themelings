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
    var8 = var4.jsxs;
    var _closure1_slot12 = var8;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var12 = 7;
    var4 = var6[var12];
    var4 = var13.bind(var1)(var4);
    var4 = var4.spacing;
    var15 = var4.PX_8;
    var _closure1_slot14 = var15;
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
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = "function ChannelDetailsTsx1(){const{headerHeight,isNewHeaderExperiment,isSearchActive,headerCollapseTop,withTiming,searchActiveSource,timingInstant,timingFast,runOnJS,onSearchInactiveAnimationFinish,onSearchActiveAnimationStart}=this.__closure;const _headerHeight=headerHeight.get();let topValue;if(isNewHeaderExperiment){topValue=0;}else if(isSearchActive&&_headerHeight!=null){topValue=-1*_headerHeight-headerCollapseTop;}else{topValue=0;}return{top:withTiming(topValue,searchActiveSource==='initial'?timingInstant:timingFast,'respect-motion-settings',function(finished){if(finished&&!isSearchActive){runOnJS(onSearchInactiveAnimationFinish)();}else{runOnJS(onSearchActiveAnimationStart)();}})};}";
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function ChannelDetailsTsx2(finished){const{isSearchActive,runOnJS,onSearchInactiveAnimationFinish,onSearchActiveAnimationStart}=this.__closure;if(finished&&!isSearchActive){runOnJS(onSearchInactiveAnimationFinish)();}else{runOnJS(onSearchActiveAnimationStart)();}}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = "function ChannelDetailsTsx3(){const{withTiming,isSearchActive,timingFast}=this.__closure;return{opacity:withTiming(isSearchActive?0:1,timingFast,'respect-motion-settings')};}";
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = "function ChannelDetailsTsx4(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};}";
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = var7.memo;
    var2 = function ChannelDetails(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var26 = var1.channelId;
            var _closure2_slot0 = var26;
            var8 = var1.isSearchLocked;
            var _closure2_slot1 = var8;
            var36 = var1.showBackButton;
            var20 = var1.onBackPress;
            var9 = var1.componentWidth;
            var30 = var1.isShowing;
            var5 = undefined;
            if(!(var30 === var5)) { _fun0001_ip = 56; continue _fun0001 }
 54:
            var30 = true;
 56:
            var _closure2_slot2 = var30;
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
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var1 = _closure1_slot15;
            var18 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 9;
            var1 = var6[var1];
            var7 = var3.bind(var5)(var1);
            var1 = var7.useChannelDetailWidth;
            var16 = var1.bind(var7)(var9);
            var1 = 10;
            var1 = var6[var1];
            var7 = var3.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var40 = var6.bind(var7)(var3, var1);
            _closure2_slot4 = var40;
            var1 = null;
            var3 = var1 == var40;
            var7 = undefined;
            if(var3) { _fun0001_ip = 222; continue _fun0001 }
 217:
            var7 = var40.guild_id;
 222:
            var9 = _closure1_slot3;
            var6 = var9.useEffect;
            var3 = new Array(2);
            var3[0] = var40;
            var3[1] = var2;
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
            var2 = var6.bind(var9)(var2, var3);
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 11;
            var2 = var11[var2];
            var6 = var3.bind(var5)(var2);
            var2 = var6.useChannelDetailsSearchContext;
            var17 = var2.bind(var6)(var26, var7);
            _closure2_slot5 = var17;
            var2 = 12;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useSearchSuggestionsGesture;
            var2 = var2.bind(var3)(var17);
            var9 = var2.gesture;
            var23 = var2.dismissed;
            var22 = var2.setDismissed;
            var24 = var2.onLayoutMeasure;
            var10 = _closure1_slot1;
            var2 = 13;
            var3 = var11[var2];
            var6 = var10.bind(var5)(var3);
            var3 = 14;
            var3 = var11[var3];
            var3 = var10.bind(var5)(var3);
            var3 = var3.CHANNEL_DETAILS;
            var3 = var6.bind(var5)(var3);
            var6 = var3.analyticsLocations;
            var3 = var1 == var40;
            var25 = var7;
            var28 = undefined;
            if(var3) { _fun0001_ip = 406; continue _fun0001 }
 396:
            var3 = var40.isArchivedThread;
            var28 = var3.bind(var40)();
 406:
            var3 = _closure1_slot9;
            var38 = var3.bind(var5)(var26);
            _closure2_slot6 = var38;
            var3 = _closure1_slot8;
            var32 = var3.bind(var5)(var26);
            _closure2_slot7 = var32;
            var34 = _closure1_slot3;
            var3 = var34.useRef;
            var27 = var3.bind(var34)(var1);
            _closure2_slot8 = var27;
            var7 = var34.useContext;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 15;
            var3 = var12[var3];
            var3 = var15.bind(var5)(var3);
            var3 = var3.SwipeForMemberListContext;
            var7 = var7.bind(var34)(var3);
            _closure2_slot9 = var7;
            var3 = 16;
            var3 = var12[var3];
            var11 = var15.bind(var5)(var3);
            var10 = var11.useChannelDetailsHeaderExperimentV2Enabled;
            var3 = 'channel-details';
            var3 = var10.bind(var11)(var3);
            _closure2_slot10 = var3;
            var10 = 17;
            var10 = var12[var10];
            var11 = var15.bind(var5)(var10);
            var10 = var11.useIsScreenReaderEnabled;
            var21 = var10.bind(var11)();
            var11 = _closure1_slot1;
            var10 = 18;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var19 = var10.bind(var5)();
            var10 = 19;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.bind(var5)();
            var11 = var10.top;
            _closure2_slot11 = var11;
            var29 = var34.useMemo;
            var14 = new Array(2);
            var14[0] = var11;
            var14[1] = var7;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isIOS;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0003_ip = 54; continue _fun0003 }
 38:
                    var2 = _closure2_slot9;
                    var1 = null;
                    var2 = var1 == var2;
                    if(var2) { _fun0003_ip = 71; continue _fun0003 }
 54:
                    var2 = {};
                    var3 = _closure2_slot11;
                    var2['paddingTop'] = var3;
                    var1 = var2;
 71:
                    return var1;
                }
            };
            var14 = var29.bind(var34)(var10, var14);
            var31 = var34.useLayoutEffect;
            var29 = function() {
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
            var10 = new Array(0);
            var10 = var31.bind(var34)(var29, var10);
            var31 = var34.useEffect;
            var29 = new Array(2);
            var29[0] = var26;
            var29[1] = var8;
            var10 = function() {
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
            var10 = var31.bind(var34)(var10, var29);
            var31 = var34.useCallback;
            var29 = new Array(1);
            var29[0] = var17;
            var10 = function() {
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
            var31 = var31.bind(var34)(var10, var29);
            _closure2_slot12 = var31;
            var33 = var34.useCallback;
            var29 = function() {
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
            var10 = new Array(0);
            var29 = var33.bind(var34)(var29, var10);
            _closure2_slot13 = var29;
            var10 = 23;
            var12 = var12[var10];
            var15 = var15.bind(var5)(var12);
            var12 = var15.useSharedValue;
            var39 = var12.bind(var15)(var5);
            _closure2_slot14 = var39;
            var33 = var34.useCallback;
            var15 = new Array(1);
            var15[0] = var39;
            var12 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var1 = _closure1_slot14;
                    if(!(!(var3 <= var1))) { _fun0008_ip = 109; continue _fun0008 }
 30:
                    var4 = _closure2_slot14;
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
                    var2 = _closure2_slot14;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
 109:
                    var1 = undefined;
                    return var1;
                }
            };
            var35 = var33.bind(var34)(var12, var15);
            var37 = 0;
            if(var3) { _fun0001_ip = 836; continue _fun0001 }
 787:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var15 = 20;
            var15 = var34[var15];
            var33 = var33.bind(var5)(var15);
            var15 = var33.isIOS;
            var15 = var15.bind(var33)();
            if(!var15) { _fun0001_ip = 829; continue _fun0001 }
 820:
            var7 = var1 == var7;
            var37 = 0;
            if(var7) { _fun0001_ip = 836; continue _fun0001 }
 829:
            var7 = 2;
            var37 = var11 / var7;
 836:
            _closure2_slot15 = var37;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var7 = var34[var10];
            var12 = var33.bind(var5)(var7);
            var11 = var12.useAnimatedStyle;
            var7 = function Z() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot14;
                    var1 = var2.get;
                    var3 = var1.bind(var2)();
                    var1 = _closure2_slot10;
                    var7 = 0;
                    if(var1) { _fun0009_ip = 66; continue _fun0009 }
 25:
                    var2 = _closure2_slot6;
                    var1 = 0;
                    if(!var2) { _fun0009_ip = 63; continue _fun0009 }
 34:
                    var2 = null;
                    var2 = var2 != var3;
                    var1 = 0;
                    if(!var2) { _fun0009_ip = 63; continue _fun0009 }
 45:
                    var2 = -1;
                    var3 = var2 * var3;
                    var2 = _closure2_slot15;
                    var1 = var3 - var2;
 63:
                    var7 = var1;
 66:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 24;
                    var3 = var5[var3];
                    var12 = undefined;
                    var6 = var4.bind(var12)(var3);
                    var5 = var6.withTiming;
                    var4 = _closure2_slot7;
                    var3 = 'initial';
                    if(!(var3 !== var4)) { _fun0009_ip = 138; continue _fun0009 }
 110:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 26;
                    var3 = var8[var3];
                    var3 = var4.bind(var12)(var3);
                    var4 = var3.timingFast;
                    _fun0009_ip = 164; continue _fun0009;
 138:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 25;
                    var3 = var10[var3];
                    var3 = var8.bind(var12)(var3);
                    var4 = var3.timingInstant;
 164:
                    var3 = function t(arg1) {
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
                            var1 = _closure2_slot12;
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
                            var1 = _closure2_slot13;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
 107:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var8 = {};
                    var10 = _closure2_slot6;
                    var8['isSearchActive'] = var10;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 23;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.runOnJS;
                    var8['runOnJS'] = var10;
                    var10 = _closure2_slot12;
                    var8['onSearchInactiveAnimationFinish'] = var10;
                    var9 = _closure2_slot13;
                    var8['onSearchActiveAnimationStart'] = var9;
                    var3['__closure'] = var8;
                    var8 = 3100817967039.0;
                    var3['__workletHash'] = var8;
                    var2 = _closure1_slot17;
                    var3['__initData'] = var2;
                    var15 = 'respect-motion-settings';
                    var18 = var6;
                    var17 = var7;
                    var16 = var4;
                    var14 = var3;
                    var2 = var18[var5](var17, var16, var15, var14, var13);
                    var1['top'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var15['headerHeight'] = var39;
            var15['isNewHeaderExperiment'] = var3;
            var15['isSearchActive'] = var38;
            var15['headerCollapseTop'] = var37;
            var37 = 24;
            var41 = var34[var37];
            var41 = var33.bind(var5)(var41);
            var41 = var41.withTiming;
            var15['withTiming'] = var41;
            var15['searchActiveSource'] = var32;
            var32 = 25;
            var32 = var34[var32];
            var32 = var33.bind(var5)(var32);
            var32 = var32.timingInstant;
            var15['timingInstant'] = var32;
            var32 = 26;
            var41 = var34[var32];
            var41 = var33.bind(var5)(var41);
            var41 = var41.timingFast;
            var15['timingFast'] = var41;
            var41 = var34[var10];
            var41 = var33.bind(var5)(var41);
            var41 = var41.runOnJS;
            var15['runOnJS'] = var41;
            var15['onSearchInactiveAnimationFinish'] = var31;
            var15['onSearchActiveAnimationStart'] = var29;
            var7['__closure'] = var15;
            var15 = 8160924312130.0;
            var7['__workletHash'] = var15;
            var15 = _closure1_slot16;
            var7['__initData'] = var15;
            var15 = var11.bind(var12)(var7);
            var7 = var34[var10];
            var12 = var33.bind(var5)(var7);
            var11 = var12.useAnimatedStyle;
            var7 = function q() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 24;
                    var3 = var5[var3];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var5 = var6.withTiming;
                    var3 = _closure2_slot6;
                    var4 = 1;
                    if(!var3) { _fun0011_ip = 47; continue _fun0011 }
 45:
                    var4 = 0;
 47:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 26;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var3 = var2.timingFast;
                    var2 = 'respect-motion-settings';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var29 = {};
            var31 = var34[var37];
            var31 = var33.bind(var5)(var31);
            var31 = var31.withTiming;
            var29['withTiming'] = var31;
            var29['isSearchActive'] = var38;
            var31 = var34[var32];
            var31 = var33.bind(var5)(var31);
            var31 = var31.timingFast;
            var29['timingFast'] = var31;
            var7['__closure'] = var29;
            var29 = 9154332877951.0;
            var7['__workletHash'] = var29;
            var29 = _closure1_slot18;
            var7['__initData'] = var29;
            var29 = var11.bind(var12)(var7);
            var7 = var34[var10];
            var12 = var33.bind(var5)(var7);
            var11 = var12.useAnimatedStyle;
            var7 = function $() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure2_slot14;
                    var1 = var2.get;
                    var7 = var1.bind(var2)();
                    var1 = {};
                    var2 = 'relative';
                    var1['position'] = var2;
                    var4 = _closure2_slot6;
                    var2 = 'auto';
                    if(!var4) { _fun0012_ip = 41; continue _fun0012 }
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
                    if(!var2) { _fun0012_ip = 88; continue _fun0012 }
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
                    if(!var4) { _fun0012_ip = 228; continue _fun0012 }
 142:
                    var9 = 0;
                    var4 = var7 >= var9;
                    var2 = undefined;
                    if(!var4) { _fun0012_ip = 228; continue _fun0012 }
 153:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 27;
                    var4 = var10[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.withSpring;
                    var3 = _closure2_slot6;
                    var4 = 0;
                    if(var3) { _fun0012_ip = 190; continue _fun0012 }
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
            var31 = {};
            var31['headerHeight'] = var39;
            var31['isSearchActive'] = var38;
            var37 = var34[var37];
            var37 = var33.bind(var5)(var37);
            var37 = var37.withTiming;
            var31['withTiming'] = var37;
            var32 = var34[var32];
            var32 = var33.bind(var5)(var32);
            var32 = var32.timingFast;
            var31['timingFast'] = var32;
            var32 = 27;
            var32 = var34[var32];
            var32 = var33.bind(var5)(var32);
            var32 = var32.withSpring;
            var31['withSpring'] = var32;
            var32 = _closure1_slot10;
            var31['SPRING_CHANNEL_HEADER'] = var32;
            var7['__closure'] = var31;
            var31 = 15903472982449.0;
            var7['__workletHash'] = var31;
            var31 = _closure1_slot19;
            var7['__initData'] = var31;
            var33 = var11.bind(var12)(var7);
            var12 = _closure1_slot3;
            var31 = var12.useEffect;
            var11 = new Array(1);
            var11[0] = var17;
            var7 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openSearchScreen;
                var2 = _closure2_slot5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = var31.bind(var12)(var7, var11);
            var31 = var12.useEffect;
            var11 = new Array(2);
            var11[0] = var17;
            var11[1] = var30;
            var7 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0013_ip = 74; continue _fun0013 }
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
            var7 = var31.bind(var12)(var7, var11);
            var31 = var12.useEffect;
            var11 = new Array(2);
            var11[0] = var26;
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
            var7 = var31.bind(var12)(var7, var11);
            var11 = var12.useEffect;
            var7 = new Array(1);
            var7[0] = var26;
            var4 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
                    if(!(var2 != var3)) { _fun0014_ip = 59; continue _fun0014 }
 49:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
 59:
                    return var1;
                }
            };
            var4 = var11.bind(var12)(var4, var7);
            if(!(var1 != var40)) { _fun0001_ip = 2585; continue _fun0001 }
 1399:
            var7 = _closure1_slot12;
            if(var3) { _fun0001_ip = 1711; continue _fun0001 }
 1409:
            var4 = _closure1_slot13;
            var3 = {};
            var31 = _closure1_slot1;
            var34 = _closure1_slot2;
            var11 = var34[var10];
            var11 = var31.bind(var5)(var11);
            var12 = var11.View;
            var11 = {};
            var11['style'] = var29;
            var11['onLayout'] = var35;
            var32 = _closure1_slot11;
            var29 = 34;
            var29 = var34[var29];
            var31 = var31.bind(var5)(var29);
            var29 = {};
            var29['channel'] = var40;
            var29['onBackPress'] = var20;
            var34 = var1 != var36;
            if(!var34) { _fun0001_ip = 1485; continue _fun0001 }
 1482:
            var34 = var36;
 1485:
            if(var34) { _fun0001_ip = 1491; continue _fun0001 }
 1488:
            var34 = var21;
 1491:
            var29['showBackButton'] = var34;
            var31 = var32.bind(var5)(var31, var29);
            var29 = new Array(3);
            var29[0] = var31;
            var31 = _closure1_slot11;
            var34 = _closure1_slot1;
            var36 = _closure1_slot2;
            var32 = 32;
            var32 = var36[var32];
            var37 = var34.bind(var5)(var32);
            var32 = {};
            var32['channel'] = var40;
            var38 = var18.linkedLobby;
            var32['containerStyle'] = var38;
            var32 = var31.bind(var5)(var37, var32);
            var29[1] = var32;
            var32 = 33;
            var32 = var36[var32];
            var37 = var34.bind(var5)(var32);
            var32 = {};
            var32['channel'] = var40;
            var38 = var18.topic;
            var32['containerStyle'] = var38;
            var32 = var31.bind(var5)(var37, var32);
            var29[2] = var32;
            var11['children'] = var29;
            var12 = var7.bind(var5)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var29 = _closure1_slot4;
            var12 = {};
            var32 = var18.autocompleteSuggestions;
            var12['style'] = var32;
            var32 = 35;
            var32 = var36[var32];
            var34 = var34.bind(var5)(var32);
            var32 = {};
            var32['ref'] = var27;
            var32['channel'] = var40;
            var32['onSuggestionsLayoutMesure'] = var24;
            var32['suggestionsDismissed'] = var23;
            var32['setSuggestionsDismissed'] = var22;
            var32['componentWidth'] = var16;
            var32 = var31.bind(var5)(var34, var32);
            var12['children'] = var32;
            var12 = var31.bind(var5)(var29, var12);
            var11[1] = var12;
            var3['children'] = var11;
            var12 = var7.bind(var5)(var4, var3);
            _fun0001_ip = 2026; continue _fun0001;
 1711:
            var4 = _closure1_slot4;
            var3 = {};
            var11 = var18.newHeader;
            var3['style'] = var11;
            var32 = _closure1_slot11;
            var37 = _closure1_slot1;
            var38 = _closure1_slot2;
            var11 = 30;
            var11 = var38[var11];
            var29 = var37.bind(var5)(var11);
            var11 = {};
            var11['ref'] = var27;
            var11['channel'] = var40;
            var11['onBackPress'] = var20;
            var31 = {};
            var31['onSuggestionsLayoutMeasure'] = var24;
            var31['suggestionsDismissed'] = var23;
            var31['setSuggestionsDismissed'] = var22;
            var11['searchBarLayoutProps'] = var31;
            var11['componentWidth'] = var16;
            var29 = var32.bind(var5)(var29, var11);
            var11 = new Array(2);
            var11[0] = var29;
            var29 = var38[var10];
            var29 = var37.bind(var5)(var29);
            var31 = var29.View;
            var29 = {};
            var29['style'] = var33;
            var33 = var38[var10];
            var33 = var37.bind(var5)(var33);
            var34 = var33.View;
            var33 = {};
            var36 = var18.information;
            var33['style'] = var36;
            var33['onLayout'] = var35;
            var35 = 31;
            var35 = var38[var35];
            var36 = var37.bind(var5)(var35);
            var35 = {};
            var35['channel'] = var40;
            var36 = var32.bind(var5)(var36, var35);
            var35 = new Array(3);
            var35[0] = var36;
            var36 = 32;
            var36 = var38[var36];
            var37 = var37.bind(var5)(var36);
            var36 = {};
            var36['channel'] = var40;
            var38 = var18.linkedLobby;
            var36['containerStyle'] = var38;
            var36 = var32.bind(var5)(var37, var36);
            var35[1] = var36;
            var36 = var40.isPrivate;
            var37 = var36.bind(var40)();
            var36 = null;
            if(var37) { _fun0001_ip = 1988; continue _fun0001 }
 1944:
            var39 = _closure1_slot11;
            var38 = _closure1_slot1;
            var41 = _closure1_slot2;
            var37 = 33;
            var37 = var41[var37];
            var38 = var38.bind(var5)(var37);
            var37 = {};
            var37['channel'] = var40;
            var40 = 'left';
            var37['textAlign'] = var40;
            var36 = var39.bind(var5)(var38, var37);
 1988:
            var35[2] = var36;
            var33['children'] = var35;
            var33 = var7.bind(var5)(var34, var33);
            var29['children'] = var33;
            var29 = var32.bind(var5)(var31, var29);
            var11[1] = var29;
            var3['children'] = var11;
            var12 = var7.bind(var5)(var4, var3);
 2026:
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var6 = 36;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var9;
            var11 = _closure1_slot12;
            if(var8) { _fun0001_ip = 2306; continue _fun0001 }
 2094:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var5)(var8);
            var9 = var8.View;
            var8 = {};
            var29 = var18.detailsContainer;
            var10 = new Array(3);
            var10[0] = var29;
            var10[1] = var14;
            var10[2] = var15;
            var8['style'] = var10;
            var15 = true;
            var8['accessibilityViewIsModal'] = var15;
            var8['onAccessibilityEscape'] = var20;
            var10 = new Array(2);
            var10[0] = var12;
            var12 = null;
            if(!(var15 !== var28)) { _fun0001_ip = 2287; continue _fun0001 }
 2170:
            var29 = _closure1_slot11;
            var28 = _closure1_slot0;
            var34 = _closure1_slot2;
            var15 = 39;
            var15 = var34[var15];
            var15 = var28.bind(var5)(var15);
            var28 = var15.Freeze;
            var15 = {};
            var30 = !var30;
            var15['freeze'] = var30;
            var33 = _closure1_slot1;
            var30 = 40;
            var30 = var34[var30];
            var31 = var33.bind(var5)(var30);
            var30 = {};
            var32 = var18.search;
            var30['style'] = var32;
            var32 = 38;
            var32 = var34[var32];
            var33 = var33.bind(var5)(var32);
            var32 = {};
            var32['searchContext'] = var17;
            var32['width'] = var16;
            var32 = var29.bind(var5)(var33, var32);
            var30['children'] = var32;
            var30 = var29.bind(var5)(var31, var30);
            var15['children'] = var30;
            var12 = var29.bind(var5)(var28, var15);
 2287:
            var10[1] = var12;
            var8['children'] = var10;
            var8 = var11.bind(var5)(var9, var8);
            _fun0001_ip = 2563; continue _fun0001;
 2306:
            var10 = _closure1_slot4;
            var9 = {};
            var15 = var18.detailsContainer;
            var12 = new Array(2);
            var12[0] = var15;
            var12[1] = var14;
            var9['style'] = var12;
            var12 = true;
            var9['accessibilityViewIsModal'] = var12;
            var9['onAccessibilityEscape'] = var20;
            var14 = _closure1_slot11;
            var12 = {};
            var28 = var18.searchLocked;
            var15 = new Array(2);
            var15[0] = var28;
            var18 = var18.autocompleteSuggestions;
            var15[1] = var18;
            var12['style'] = var15;
            var18 = _closure1_slot1;
            var28 = _closure1_slot2;
            var15 = 37;
            var15 = var28[var15];
            var18 = var18.bind(var5)(var15);
            var15 = {};
            var15['ref'] = var27;
            var15['channelId'] = var26;
            var15['guildId'] = var25;
            var15['onSuggestionsLayoutMesure'] = var24;
            var15['onBackPress'] = var20;
            var15['suggestionsDismissed'] = var23;
            var15['setSuggestionsDismissed'] = var22;
            if(var19) { _fun0001_ip = 2440; continue _fun0001 }
 2437:
            var19 = var21;
 2440:
            if(var19) { _fun0001_ip = 2472; continue _fun0001 }
 2443:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var21 = 20;
            var21 = var23[var21];
            var22 = var22.bind(var5)(var21);
            var21 = var22.isAndroid;
            var19 = var21.bind(var22)();
 2472:
            if(!var19) { _fun0001_ip = 2479; continue _fun0001 }
 2475:
            var19 = var1 != var20;
 2479:
            var15['showBackButton'] = var19;
            var15 = var14.bind(var5)(var18, var15);
            var12['children'] = var15;
            var14 = var14.bind(var5)(var10, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot11;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var13 = 38;
            var13 = var18[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['searchContext'] = var17;
            var13['width'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
 2563:
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 2585:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();