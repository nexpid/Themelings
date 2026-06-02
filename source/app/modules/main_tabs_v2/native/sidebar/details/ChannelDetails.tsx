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
            var1 = arg1;
            var28 = var1.channelId;
            var _closure2_slot0 = var28;
            var8 = var1.isSearchLocked;
            var _closure2_slot1 = var8;
            var22 = var1.onBackPress;
            var16 = var1.componentWidth;
            var18 = var1.isShowing;
            var5 = undefined;
            if(!(var18 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var18 = true;
case 2:
            var _closure2_slot2 = var18;
            var2 = var1.onChannelDeleted;
            var _closure2_slot3 = var2;
            var40 = var1.expandTopic;
            if(!(var40 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var40 = false;
case 4:
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var1 = _closure1_slot14;
            var19 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 9;
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
            var41 = var6.bind(var7)(var4, var1);
            _closure2_slot4 = var41;
            var21 = null;
            var4 = var21 == var41;
            var1 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var41.guild_id;
case 6:
            var10 = _closure1_slot3;
            var6 = var10.useEffect;
            var4 = new Array(2);
            var4[0] = var41;
            var4[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot3;
                    if(!(var3 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var10)(var2, var4);
            var27 = _closure1_slot0;
            var30 = _closure1_slot2;
            var2 = 10;
            var2 = var30[var2];
            var4 = var27.bind(var5)(var2);
            var2 = var4.useChannelDetailsSearchContext;
            var17 = var2.bind(var4)(var28, var1);
            _closure2_slot5 = var17;
            var2 = 11;
            var2 = var30[var2];
            var4 = var27.bind(var5)(var2);
            var2 = var4.useSearchSuggestionsGesture;
            var2 = var2.bind(var4)(var17);
            var9 = var2.gesture;
            var25 = var2.dismissed;
            var24 = var2.setDismissed;
            var26 = var2.onLayoutMeasure;
            var12 = _closure1_slot1;
            var2 = 12;
            var4 = var30[var2];
            var6 = var12.bind(var5)(var4);
            var4 = 13;
            var4 = var30[var4];
            var4 = var12.bind(var5)(var4);
            var4 = var4.CHANNEL_DETAILS;
            var4 = var6.bind(var5)(var4);
            var6 = var4.analyticsLocations;
            var4 = _closure1_slot9;
            var15 = var4.bind(var5)(var28);
            _closure2_slot6 = var15;
            var4 = _closure1_slot8;
            var4 = var4.bind(var5)(var28);
            _closure2_slot7 = var4;
            var7 = var10.useRef;
            var29 = var7.bind(var10)(var21);
            _closure2_slot8 = var29;
            var11 = var10.useContext;
            var7 = 14;
            var7 = var30[var7];
            var7 = var27.bind(var5)(var7);
            var7 = var7.SwipeForMemberListContext;
            var7 = var11.bind(var10)(var7);
            _closure2_slot9 = var7;
            var11 = 15;
            var11 = var30[var11];
            var14 = var27.bind(var5)(var11);
            var11 = var14.useIsScreenReaderEnabled;
            var23 = var11.bind(var14)();
            var11 = 16;
            var11 = var30[var11];
            var11 = var12.bind(var5)(var11);
            var20 = var11.bind(var5)();
            var11 = 17;
            var11 = var30[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.bind(var5)();
            var14 = var11.top;
            _closure2_slot10 = var14;
            var12 = var10.useMemo;
            var11 = new Array(2);
            var11[0] = var14;
            var11[1] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.isAndroid;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 19;
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
            var14 = var12.bind(var10)(var7, var11);
            var12 = var10.useLayoutEffect;
            var11 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = new Array(0);
            var7 = var12.bind(var10)(var11, var7);
            var11 = var10.useEffect;
            var7 = new Array(4);
            var7[0] = var15;
            var7[1] = var8;
            var7[2] = var4;
            var7[3] = var17;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0004_ip = 15; continue _fun0004 }
case 9:
                    var2 = _closure2_slot7;
                    var1 = 'initial';
                    if(!(var1 !== var2)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var4 = _closure2_slot6;
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = null;
                    if(var4) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    if(!(var1 != var2)) { _fun0004_ip = 19; continue _fun0004 }
case 2:
                    var4 = var2.blur;
                    var4 = var4.bind(var2)();
case 19:
                    var7 = _closure1_slot5;
                    var6 = var7.isInitialSearchQuery;
                    var5 = _closure2_slot5;
                    var5 = var6.bind(var7)(var5);
                    if(var5) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 21;
                    var4 = var7[var4];
                    var5 = undefined;
                    var10 = var6.bind(var5)(var4);
                    var9 = var10.updateSearchQuery;
                    var8 = _closure2_slot5;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.reset;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var4 = var9.bind(var10)(var8, var4);
                    var4 = 22;
                    var4 = var7[var4];
                    var5 = var6.bind(var5)(var4);
                    var4 = var5.fetchInitialMessages;
                    var3 = _closure2_slot5;
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 15; continue _fun0004;
case 20:
                    var3 = undefined;
                    return var3;
case 17:
                    if(!(var1 != var2)) { _fun0004_ip = 15; continue _fun0004 }
case 22:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var11.bind(var10)(var4, var7);
            var33 = 23;
            var4 = var30[var33];
            var7 = var27.bind(var5)(var4);
            var4 = var7.useSharedValue;
            var31 = var4.bind(var7)(var5);
            _closure2_slot11 = var31;
            var11 = var10.useCallback;
            var7 = new Array(1);
            var7[0] = var31;
            var4 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var1 = _closure1_slot13;
                    if(!(!(var3 <= var1))) { _fun0005_ip = 23; continue _fun0005 }
case 8:
                    var4 = _closure2_slot11;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var5 = global;
                    var6 = var5.Math;
                    var5 = var6.abs;
                    var4 = var3 - var4;
                    var5 = var5.bind(var6)(var4);
                    var4 = 0.001;
                    var2 = var5 < var4;
case 24:
                    if(var2) { _fun0005_ip = 23; continue _fun0005 }
case 26:
                    var2 = _closure2_slot11;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var35 = var11.bind(var10)(var4, var7);
            var4 = var30[var33];
            var11 = var27.bind(var5)(var4);
            var7 = var11.useAnimatedStyle;
            var4 = function Q() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot11;
                    var1 = var2.get;
                    var7 = var1.bind(var2)();
                    var1 = {};
                    var2 = 'relative';
                    var1['position'] = var2;
                    var4 = _closure2_slot6;
                    var2 = 'auto';
                    if(!var4) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var2 = 'none';
case 27:
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
                    if(!var2) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var5 = 0;
case 29:
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
                    if(!var4) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var9 = 0;
                    var4 = var7 >= var9;
                    var2 = undefined;
                    if(!var4) { _fun0006_ip = 31; continue _fun0006 }
case 33:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 26;
                    var4 = var10[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.withSpring;
                    var3 = _closure2_slot6;
                    var4 = 0;
                    if(var3) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var4 = var7;
case 34:
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
case 31:
                    var1['height'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['headerHeight'] = var31;
            var12['isSearchActive'] = var15;
            var15 = 24;
            var15 = var30[var15];
            var15 = var27.bind(var5)(var15);
            var15 = var15.withTiming;
            var12['withTiming'] = var15;
            var15 = 25;
            var15 = var30[var15];
            var15 = var27.bind(var5)(var15);
            var15 = var15.timingFast;
            var12['timingFast'] = var15;
            var15 = 26;
            var15 = var30[var15];
            var15 = var27.bind(var5)(var15);
            var15 = var15.withSpring;
            var12['withSpring'] = var15;
            var15 = _closure1_slot10;
            var12['SPRING_CHANNEL_HEADER'] = var15;
            var4['__closure'] = var12;
            var12 = 8423441529588.0;
            var4['__workletHash'] = var12;
            var12 = _closure1_slot15;
            var4['__initData'] = var12;
            var34 = var7.bind(var11)(var4);
            var11 = var10.useEffect;
            var7 = new Array(1);
            var7[0] = var17;
            var4 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 27;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.initializeAutocomplete;
                var3 = _closure2_slot5;
                var3 = var6.bind(var7)(var3);
                var3 = 21;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.initializeSearchQuery;
                var2 = _closure2_slot5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var11.bind(var10)(var4, var7);
            var11 = var10.useEffect;
            var7 = new Array(2);
            var7[0] = var17;
            var7[1] = var18;
            var4 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 27;
                    var2 = var5[var2];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var2);
                    var2 = var6.clearAllSearchMesssages;
                    var2 = var2.bind(var6)();
                    var2 = 21;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var3 = var4.updateSearchQuery;
                    var2 = _closure2_slot5;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.reset;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
case 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var11.bind(var10)(var4, var7);
            var11 = var10.useEffect;
            var7 = new Array(2);
            var7[0] = var28;
            var7[1] = var17;
            var4 = function() {
                var1 = function() {
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 27;
                    var3 = var5[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var3 = var6.clearAllSearchMesssages;
                    var3 = var3.bind(var6)();
                    var6 = _closure1_slot7;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var1)(var3);
                    var3 = 21;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.deleteSearchQuery;
                    var2 = _closure2_slot5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            };
            var4 = var11.bind(var10)(var4, var7);
            var7 = var10.useEffect;
            var4 = new Array(1);
            var4[0] = var28;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                    if(!(var2 != var3)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
case 38:
                    return var1;
                }
            };
            var3 = var7.bind(var10)(var3, var4);
            var3 = var21 == var41;
            var27 = var1;
            var1 = null;
            if(var3) { _fun0001_ip = 40; continue _fun0001 }
case 41:
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
            var15 = var19.detailsContainer;
            var12 = new Array(2);
            var12[0] = var15;
            var12[1] = var14;
            var11['style'] = var12;
            var12 = true;
            var11['accessibilityViewIsModal'] = var12;
            var11['onAccessibilityEscape'] = var22;
            if(var8) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var14 = _closure1_slot12;
            var12 = _closure1_slot4;
            var8 = {};
            var15 = var19.newHeader;
            var8['style'] = var15;
            var32 = _closure1_slot11;
            var37 = _closure1_slot1;
            var38 = _closure1_slot2;
            var15 = 32;
            var15 = var38[var15];
            var30 = var37.bind(var5)(var15);
            var15 = {};
            var15['ref'] = var29;
            var15['channel'] = var41;
            var15['onBackPress'] = var22;
            var15['onSuggestionsLayoutMeasure'] = var26;
            var15['suggestionsDismissed'] = var25;
            var15['setSuggestionsDismissed'] = var24;
            var15['componentWidth'] = var16;
            var30 = var32.bind(var5)(var30, var15);
            var15 = new Array(2);
            var15[0] = var30;
            var30 = var38[var33];
            var30 = var37.bind(var5)(var30);
            var31 = var30.View;
            var30 = {};
            var30['style'] = var34;
            var33 = var38[var33];
            var33 = var37.bind(var5)(var33);
            var34 = var33.View;
            var33 = {};
            var36 = var19.information;
            var33['style'] = var36;
            var33['onLayout'] = var35;
            var35 = 33;
            var35 = var38[var35];
            var36 = var37.bind(var5)(var35);
            var35 = {};
            var35['channel'] = var41;
            var36 = var32.bind(var5)(var36, var35);
            var35 = new Array(3);
            var35[0] = var36;
            var36 = 34;
            var36 = var38[var36];
            var37 = var37.bind(var5)(var36);
            var36 = {};
            var36['channel'] = var41;
            var38 = var19.linkedLobby;
            var36['containerStyle'] = var38;
            var36 = var32.bind(var5)(var37, var36);
            var35[1] = var36;
            var36 = var41.isPrivate;
            var37 = var36.bind(var41)();
            var36 = null;
            if(var37) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var39 = _closure1_slot11;
            var38 = _closure1_slot1;
            var42 = _closure1_slot2;
            var37 = 35;
            var37 = var42[var37];
            var38 = var38.bind(var5)(var37);
            var37 = {};
            var37['channel'] = var41;
            var41 = 'left';
            var37['textAlign'] = var41;
            var37['initialExpanded'] = var40;
            var36 = var39.bind(var5)(var38, var37);
case 44:
            var35[2] = var36;
            var33['children'] = var35;
            var33 = var14.bind(var5)(var34, var33);
            var30['children'] = var33;
            var30 = var32.bind(var5)(var31, var30);
            var15[1] = var30;
            var8['children'] = var15;
            var12 = var14.bind(var5)(var12, var8);
            var8 = new Array(2);
            var8[0] = var12;
            var15 = _closure1_slot11;
            var14 = _closure1_slot0;
            var33 = _closure1_slot2;
            var12 = 36;
            var12 = var33[var12];
            var12 = var14.bind(var5)(var12);
            var14 = var12.Freeze;
            var12 = {};
            var18 = !var18;
            var12['freeze'] = var18;
            var30 = _closure1_slot4;
            var18 = {};
            var31 = var19.search;
            var18['style'] = var31;
            var31 = false;
            var18['collapsable'] = var31;
            var32 = _closure1_slot1;
            var31 = 31;
            var31 = var33[var31];
            var32 = var32.bind(var5)(var31);
            var31 = {};
            var31['searchContext'] = var17;
            var31['width'] = var16;
            var31 = var15.bind(var5)(var32, var31);
            var18['children'] = var31;
            var18 = var15.bind(var5)(var30, var18);
            var12['children'] = var18;
            var12 = var15.bind(var5)(var14, var12);
            var8[1] = var12;
            var11['children'] = var8;
            var8 = var11;
            _fun0001_ip = 46; continue _fun0001;
case 42:
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
            if(var20) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var20 = var23;
case 47:
            if(var20) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 18;
            var23 = var25[var23];
            var24 = var24.bind(var5)(var23);
            var23 = var24.isAndroid;
            var20 = var23.bind(var24)();
case 49:
            if(!var20) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var20 = var21 != var22;
case 51:
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
case 46:
            var8 = var10.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 40:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();