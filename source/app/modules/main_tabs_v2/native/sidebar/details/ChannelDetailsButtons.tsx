// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsButtons.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function ChannelDetailsButton(arg1) {
        var1 = arg1;
        var8 = var1.icon;
        var10 = var1.label;
        var9 = var1.onPress;
        var1 = _closure1_slot19;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot17;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.button;
        var1['style'] = var6;
        var7 = _closure1_slot17;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 12;
        var5 = var11[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.IconButton;
        var5 = {};
        var5['label'] = var10;
        var5['onPress'] = var9;
        var9 = 'secondary';
        var5['variant'] = var9;
        var5['icon'] = var8;
        var8 = 2;
        var5['maxFontSizeMultiplier'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function SearchButton(arg1) {
        var2 = arg1;
        var6 = var2.channelId;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var5 = _closure1_slot8;
            var4 = _closure2_slot0;
            var1 = undefined;
            var3 = true;
            var2 = 'action';
            var2 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot17;
        var3 = _closure1_slot26;
        var2 = {};
        var2['onPress'] = var1;
        var10 = _closure1_slot0;
        var7 = _closure1_slot2;
        var6 = 13;
        var8 = var7[var6];
        var1 = undefined;
        var8 = var10.bind(var1)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var6 = var7[var6];
        var6 = var10.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.5h0QOD;
        var6 = var8.bind(var9)(var6);
        var2['label'] = var6;
        var6 = _closure1_slot1;
        var5 = 14;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var2['icon'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function SettingsButton(arg1) {
        var2 = arg1;
        var9 = var2.channelId;
        var _closure2_slot0 = var9;
        var10 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 15;
        var2 = var7[var2];
        var4 = undefined;
        var3 = var10.bind(var4)(var2);
        var2 = var3.useNavigation;
        var8 = var2.bind(var3)();
        var _closure2_slot1 = var8;
        var6 = _closure1_slot3;
        var3 = var6.useCallback;
        var2 = new Array(2);
        var2[0] = var9;
        var2[1] = var8;
        var1 = function() {
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 16;
            var3 = var6[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.init;
            var7 = _closure2_slot0;
            var4 = var4.bind(var5)(var7);
            var5 = _closure1_slot0;
            var4 = 17;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.navigateToChannelDetailsScreen;
            var11 = _closure2_slot1;
            var2 = _closure1_slot16;
            var10 = var2.OVERVIEW;
            var8 = 'channel-details-button';
            var12 = var6;
            var9 = var7;
            var2 = var12[var5](var11, var10, var9, var8, var7);
            return var1;
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot17;
        var2 = _closure1_slot26;
        var1 = {};
        var1['onPress'] = var6;
        var6 = 13;
        var8 = var7[var6];
        var8 = var10.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var6 = var7[var6];
        var6 = var10.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.3D5yo6;
        var6 = var8.bind(var9)(var6);
        var1['label'] = var6;
        var6 = _closure1_slot1;
        var5 = 18;
        var5 = var7[var5];
        var5 = var6.bind(var4)(var5);
        var1['icon'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function MuteButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.channelId;
            var _closure2_slot0 = var9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 19;
            var2 = var12[var2];
            var4 = undefined;
            var6 = var11.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(3);
            var3[0] = var2;
            var2 = _closure1_slot5;
            var3[1] = var2;
            var2 = _closure1_slot7;
            var3[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 102; continue _fun0002 }
 33:
                    var2 = var3.isThread;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0002_ip = 79; continue _fun0002 }
 46:
                    var7 = _closure1_slot7;
                    var6 = var7.isChannelMuted;
                    var2 = var3.getGuildId;
                    var5 = var2.bind(var3)();
                    var2 = var3.id;
                    var2 = var6.bind(var7)(var5, var2);
                    _fun0002_ip = 99; continue _fun0002;
 79:
                    var5 = _closure1_slot5;
                    var4 = var5.isMuted;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
 99:
                    var1 = var2;
 102:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var3, var2);
            var2 = 15;
            var2 = var12[var2];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useNavigation;
            var8 = var2.bind(var3)();
            var _closure2_slot1 = var8;
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var8;
            var1 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.navigateToChannelDetailsScreen;
                var11 = _closure2_slot1;
                var3 = _closure1_slot14;
                var10 = var3.MUTE;
                var9 = _closure2_slot0;
                var8 = 'channel-details-button';
                var12 = var7;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot17;
            var2 = _closure1_slot26;
            var1 = {};
            var8 = 13;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.w4m94+;
            var8 = var9.bind(var10)(var8);
            var1['label'] = var8;
            var1['onPress'] = var6;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            if(var5) { _fun0001_ip = 230; continue _fun0001 }
 221:
            var5 = 21;
            var5 = var8[var5];
            _fun0001_ip = 237; continue _fun0001;
 230:
            var7 = 20;
            var5 = var8[var7];
 237:
            var5 = var6.bind(var4)(var5);
            var1['icon'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function ThreadsButton(arg1) {
        var2 = arg1;
        var9 = var2.channelId;
        var _closure2_slot0 = var9;
        var10 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 15;
        var2 = var7[var2];
        var4 = undefined;
        var3 = var10.bind(var4)(var2);
        var2 = var3.useNavigation;
        var8 = var2.bind(var3)();
        var _closure2_slot1 = var8;
        var6 = _closure1_slot3;
        var3 = var6.useCallback;
        var2 = new Array(2);
        var2[0] = var9;
        var2[1] = var8;
        var1 = function() {
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 22;
            var2 = var5[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var2);
            var2 = var6.trackThreadBrowserOpened;
            var2 = var2.bind(var6)();
            var2 = 17;
            var2 = var5[var2];
            var7 = var4.bind(var1)(var2);
            var6 = var7.navigateToChannelDetailsScreen;
            var11 = _closure2_slot1;
            var3 = _closure1_slot14;
            var10 = var3.THREADS;
            var9 = _closure2_slot0;
            var8 = 'channel-details-button';
            var12 = var7;
            var2 = var12[var6](var11, var10, var9, var8, var7);
            return var1;
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot17;
        var2 = _closure1_slot26;
        var1 = {};
        var1['onPress'] = var6;
        var6 = 13;
        var8 = var7[var6];
        var8 = var10.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var6 = var7[var6];
        var6 = var10.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.B2panJ;
        var6 = var8.bind(var9)(var6);
        var1['label'] = var6;
        var6 = _closure1_slot1;
        var5 = 23;
        var5 = var7[var5];
        var5 = var6.bind(var4)(var5);
        var1['icon'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function ChannelDetailsButtons(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var4 = var2.channel;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot19;
            var5 = undefined;
            var3 = var3.bind(var5)();
            var _closure2_slot1 = var3;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var9 = var4.id;
            var6 = new Array(2);
            var6[0] = var9;
            var4 = var4.type;
            var6[1] = var4;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getChannelDetailsButtons;
                var1 = _closure2_slot0;
                var2 = var1.type;
                var1 = false;
                var3 = var3.bind(var4)(var2, var1);
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var5 = arg1;
                        var1 = _closure2_slot0;
                        var2 = var1.id;
                        var1 = _closure1_slot13;
                        var1 = var1.SEARCH;
                        if(!(var1 !== var5)) { _fun0004_ip = 166; continue _fun0004 }
 35:
                        var1 = _closure1_slot13;
                        var1 = var1.THREADS;
                        if(!(var1 !== var5)) { _fun0004_ip = 137; continue _fun0004 }
 49:
                        var1 = _closure1_slot13;
                        var1 = var1.MUTE;
                        if(!(var1 !== var5)) { _fun0004_ip = 108; continue _fun0004 }
 63:
                        var1 = _closure1_slot13;
                        var4 = var1.SETTINGS;
                        var8 = undefined;
                        var1 = undefined;
                        if(!(var4 === var5)) { _fun0004_ip = 193; continue _fun0004 }
 81:
                        var7 = _closure1_slot17;
                        var6 = _closure1_slot28;
                        var5 = {};
                        var5['channelId'] = var2;
                        var4 = 'settings';
                        var1 = var7.bind(var8)(var6, var5, var4);
                        _fun0004_ip = 193; continue _fun0004;
 108:
                        var8 = _closure1_slot17;
                        var7 = _closure1_slot29;
                        var6 = {};
                        var6['channelId'] = var2;
                        var5 = undefined;
                        var4 = 'mute';
                        var1 = var8.bind(var5)(var7, var6, var4);
                        _fun0004_ip = 193; continue _fun0004;
 137:
                        var8 = _closure1_slot17;
                        var7 = _closure1_slot30;
                        var6 = {};
                        var6['channelId'] = var2;
                        var5 = undefined;
                        var4 = 'threads';
                        var1 = var8.bind(var5)(var7, var6, var4);
                        _fun0004_ip = 193; continue _fun0004;
 166:
                        var6 = _closure1_slot17;
                        var5 = _closure1_slot27;
                        var4 = {};
                        var4['channelId'] = var2;
                        var3 = undefined;
                        var2 = 'search';
                        var1 = var6.bind(var3)(var5, var4, var2);
 193:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var7.bind(var8)(var4, var6);
            var _closure2_slot2 = var8;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var9 = var8.length;
            var4 = new Array(3);
            var4[0] = var9;
            var9 = var3.buttonsSpacing;
            var4[1] = var9;
            var3 = var3.buttonsTightSpacing;
            var4[2] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot2;
                    var3 = var1.length;
                    var1 = 2;
                    if(!(var1 !== var3)) { _fun0005_ip = 31; continue _fun0005 }
 19:
                    var1 = _closure2_slot1;
                    var1 = var1.buttonsSpacing;
                    _fun0005_ip = 41; continue _fun0005;
 31:
                    var2 = _closure2_slot1;
                    var1 = var2.buttonsTightSpacing;
 41:
                    return var1;
                }
            };
            var9 = var6.bind(var7)(var3, var4);
            var10 = _closure1_slot3;
            var7 = var10.useContext;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 24;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.SwipeForMemberListContext;
            var10 = var7.bind(var10)(var3);
            var _closure2_slot3 = var10;
            var3 = 10;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useAnimatedScrollHandler;
            var3 = {};
            var7 = function o(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 53; continue _fun0006 }
 13:
                    var1 = _closure2_slot3;
                    var3 = var1.disallowGesture;
                    var2 = var3.set;
                    var1 = arg1;
                    var1 = var1.contentOffset;
                    var4 = var1.x;
                    var1 = 0;
                    var1 = var1 !== var4;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = {};
            var11['swipeForMemberListContext'] = var10;
            var7['__closure'] = var11;
            var11 = 3002962882428.0;
            var7['__workletHash'] = var11;
            var11 = _closure1_slot20;
            var7['__initData'] = var11;
            var3['onScroll'] = var7;
            var7 = function s() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 35; continue _fun0007 }
 13:
                    var1 = _closure2_slot3;
                    var3 = var1.disallowGesture;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = {};
            var11['swipeForMemberListContext'] = var10;
            var7['__closure'] = var11;
            var11 = 3514082722415.0;
            var7['__workletHash'] = var11;
            var11 = _closure1_slot21;
            var7['__initData'] = var11;
            var3['onEndDrag'] = var7;
            var11 = var4.bind(var6)(var3);
            var6 = _closure1_slot3;
            var4 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var10;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0008_ip = 78; continue _fun0008 }
 16:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 25;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var4 = var3.Gesture;
                    var3 = var4.Native;
                    var4 = var3.bind(var4)();
                    var3 = var4.simultaneousWithExternalGesture;
                    var2 = _closure2_slot3;
                    var2 = var2.gesture;
                    var1 = var3.bind(var4)(var2);
 78:
                    return var1;
                }
            };
            var7 = var4.bind(var6)(var1, var3);
            var6 = _closure1_slot17;
            var4 = _closure1_slot18;
            var1 = {'horizontal': true, 'alwaysBounceHorizontal': false};
            var3 = null;
            var12 = var3 != var10;
            var10 = undefined;
            if(!var12) { _fun0003_ip = 372; continue _fun0003 }
 369:
            var10 = var11;
 372:
            var1['onScroll'] = var10;
            var1['contentContainerStyle'] = var9;
            var1['children'] = var8;
            var6 = var6.bind(var5)(var4, var1);
            var1 = var6;
            if(!(var3 != var7)) { _fun0003_ip = 446; continue _fun0003 }
 399:
            var4 = _closure1_slot17;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 25;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.GestureDetector;
            var2 = {};
            var2['gesture'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 446:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function TransitionGroupItem(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var5 = var1.children;
            var6 = var1.width;
            var _closure2_slot0 = var6;
            var12 = var1.transitionState;
            var _closure2_slot1 = var12;
            var14 = var1.cleanUp;
            var _closure2_slot2 = var14;
            var17 = var1.animated;
            var _closure2_slot3 = var17;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var10 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 10;
            var7 = var1[var8];
            var9 = var10.bind(var4)(var7);
            var7 = var9.useSharedValue;
            var16 = 26;
            var1 = var1[var16];
            var1 = var10.bind(var4)(var1);
            var1 = var1.TransitionStates;
            var10 = var1.MOUNTED;
            var1 = 0;
            if(!(var12 === var10)) { _fun0009_ip = 116; continue _fun0009 }
 113:
            var1 = 1;
 116:
            var13 = var7.bind(var9)(var1);
            _closure2_slot4 = var13;
            var15 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = var1[var8];
            var10 = var15.bind(var4)(var7);
            var9 = var10.useAnimatedStyle;
            var7 = function c() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 27;
                    var2 = var2[var5];
                    var9 = undefined;
                    var15 = var4.bind(var9)(var2);
                    var14 = var15.withSpring;
                    var6 = _closure2_slot4;
                    var4 = var6.get;
                    var13 = var4.bind(var6)();
                    var12 = _closure1_slot15;
                    var4 = _closure2_slot3;
                    var7 = 'animate-never';
                    var11 = var7;
                    if(!var4) { _fun0010_ip = 74; continue _fun0010 }
 68:
                    var11 = 'respect-motion-settings';
 74:
                    var6 = function t(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0011_ip = 54; continue _fun0011 }
 6:
                            var3 = _closure2_slot1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 26;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
 54:
                            if(!var1) { _fun0011_ip = 103; continue _fun0011 }
 57:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
 103:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var16 = {};
                    var4 = _closure2_slot1;
                    var16['transitionState'] = var4;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 26;
                    var4 = var10[var4];
                    var4 = var8.bind(var9)(var4);
                    var4 = var4.TransitionStates;
                    var16['TransitionStates'] = var4;
                    var4 = 10;
                    var17 = var10[var4];
                    var17 = var8.bind(var9)(var17);
                    var17 = var17.runOnJS;
                    var16['runOnJS'] = var17;
                    var17 = _closure2_slot2;
                    var16['cleanUp'] = var17;
                    var6['__closure'] = var16;
                    var16 = 9346021878481.0;
                    var6['__workletHash'] = var16;
                    var16 = _closure1_slot23;
                    var6['__initData'] = var16;
                    var22 = var15;
                    var21 = var13;
                    var20 = var12;
                    var19 = var11;
                    var18 = var6;
                    var6 = var22[var14](var21, var20, var19, var18, var17);
                    var1['opacity'] = var6;
                    var5 = var10[var5];
                    var6 = var8.bind(var9)(var5);
                    var5 = var6.withSpring;
                    var4 = var10[var4];
                    var11 = var8.bind(var9)(var4);
                    var10 = var11.interpolate;
                    var8 = _closure2_slot4;
                    var4 = var8.get;
                    var9 = var4.bind(var8)();
                    var4 = _closure2_slot0;
                    var8 = [0];
                    var8[1] = var4;
                    var4 = [0, 1];
                    var4 = var10.bind(var11)(var9, var4, var8);
                    var3 = _closure1_slot15;
                    var8 = _closure2_slot3;
                    if(!var8) { _fun0010_ip = 304; continue _fun0010 }
 298:
                    var7 = 'respect-motion-settings';
 304:
                    var3 = var5.bind(var6)(var4, var3, var7);
                    var1['width'] = var3;
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var2 = 'absolute';
                    var3 = 1;
                    if(!(var3 === var4)) { _fun0010_ip = 343; continue _fun0010 }
 339:
                    var2 = 'relative';
 343:
                    var1['position'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var18 = 27;
            var18 = var1[var18];
            var18 = var15.bind(var4)(var18);
            var18 = var18.withSpring;
            var11['withSpring'] = var18;
            var11['opacity'] = var13;
            var18 = _closure1_slot15;
            var11['SPRING_CHANNEL_DETAILS'] = var18;
            var11['animated'] = var17;
            var11['transitionState'] = var12;
            var16 = var1[var16];
            var16 = var15.bind(var4)(var16);
            var16 = var16.TransitionStates;
            var11['TransitionStates'] = var16;
            var16 = var1[var8];
            var16 = var15.bind(var4)(var16);
            var16 = var16.runOnJS;
            var11['runOnJS'] = var16;
            var11['cleanUp'] = var14;
            var14 = var1[var8];
            var14 = var15.bind(var4)(var14);
            var14 = var14.interpolate;
            var11['interpolate'] = var14;
            var11['width'] = var6;
            var7['__closure'] = var11;
            var11 = 6692494091051.0;
            var7['__workletHash'] = var11;
            var11 = _closure1_slot22;
            var7['__initData'] = var11;
            var7 = var9.bind(var10)(var7);
            var11 = _closure1_slot3;
            var10 = var11.useEffect;
            var9 = new Array(2);
            var9[0] = var13;
            var9[1] = var12;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var6 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.TransitionStates;
                    var5 = var2.YEETED;
                    var2 = 1;
                    if(!(var6 === var5)) { _fun0012_ip = 62; continue _fun0012 }
 60:
                    var2 = 0;
 62:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var3, var9);
            var3 = _closure1_slot17;
            var2 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = {};
            var8['width'] = var6;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot4 = var9;
    var9 = var4.ScrollView;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.setIsChannelDetailsSearchActive;
    var _closure1_slot8 = var10;
    var10 = var4.useChannelDetailsSearchActiveSource;
    var _closure1_slot9 = var10;
    var4 = var4.useIsChannelDetailsSearchActive;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.BUTTON_DEFAULT_HEIGHT;
    var _closure1_slot11 = var10;
    var10 = var4.CHANNEL_DETAILS_SEARCH_HEIGHT;
    var _closure1_slot12 = var10;
    var13 = var4.CHANNEL_DETAILS_TOP_MARGIN;
    var10 = var4.ChannelDetailsButtonTypes;
    var _closure1_slot13 = var10;
    var10 = var4.ChannelDetailsNavigatorScreens;
    var _closure1_slot14 = var10;
    var4 = var4.SPRING_CHANNEL_DETAILS;
    var _closure1_slot15 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelSettingsSections;
    var _closure1_slot16 = var4;
    var15 = 8;
    var4 = var6[var15];
    var4 = var5.bind(var1)(var4);
    var12 = var4.SEARCH_BAR_HEIGHT;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var8.bind(var1)(var4);
    var4 = var8.createAnimatedComponent;
    var4 = var4.bind(var8)(var9);
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var11 = 'center';
    var10 = {'flexGrow': 1, 'flexDirection': 'row', 'justifyContent': 'center', 'gap': 48};
    var4['buttonsTightSpacing'] = var10;
    var14 = 24;
    var10 = {'flexGrow': 1, 'flexDirection': 'row', 'justifyContent': 'space-evenly', 'paddingHorizontal': 24, 'gap': 24};
    var4['buttonsSpacing'] = var10;
    var10 = {'flexGrow': 0, 'flexShrink': 1, 'alignItems': 'center'};
    var4['button'] = var10;
    var10 = {};
    var10['marginTop'] = var15;
    var4['buttonText'] = var10;
    var10 = {};
    var10['marginHorizontal'] = var14;
    var4['buttons'] = var10;
    var10 = {};
    var10['marginTop'] = var13;
    var13 = 16;
    var10['marginBottom'] = var13;
    var10['height'] = var12;
    var4['search'] = var10;
    var10 = {};
    var10['justifyContent'] = var11;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function ChannelDetailsButtonsTsx1(event){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(event.contentOffset.x!==0);}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function ChannelDetailsButtonsTsx2(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = "function ChannelDetailsButtonsTsx3(){const{withSpring,opacity,SPRING_CHANNEL_DETAILS,animated,transitionState,TransitionStates,runOnJS,cleanUp,interpolate,width}=this.__closure;return{opacity:withSpring(opacity.get(),SPRING_CHANNEL_DETAILS,animated?'respect-motion-settings':'animate-never',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:withSpring(interpolate(opacity.get(),[0,1],[0,width]),SPRING_CHANNEL_DETAILS,animated?'respect-motion-settings':'animate-never'),position:opacity.get()===1?'relative':'absolute'};}";
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function ChannelDetailsButtonsTsx4(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = 'buttons';
    var4['BUTTONS'] = var8;
    var8 = 'search';
    var4['SEARCH'] = var8;
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = "function ChannelDetailsButtonsTsx5(){const{withSpring,activeState,CHANNEL_DETAILS_SEARCH_HEIGHT,BUTTON_DEFAULT_HEIGHT,SPRING_CHANNEL_DETAILS,animated}=this.__closure;return{minHeight:withSpring(activeState?CHANNEL_DETAILS_SEARCH_HEIGHT:BUTTON_DEFAULT_HEIGHT,SPRING_CHANNEL_DETAILS,animated?'respect-motion-settings':'animate-never')};}";
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        var3 = arg1;
        var16 = arg2;
        var19 = var3.channel;
        var _closure2_slot0 = var19;
        var17 = var3.onSuggestionsLayoutMesure;
        var _closure2_slot1 = var17;
        var1 = var3.suggestionsDismissed;
        var _closure2_slot2 = var1;
        var13 = var3.setSuggestionsDismissed;
        var _closure2_slot3 = var13;
        var9 = var3.componentWidth;
        var _closure2_slot4 = var16;
        var3 = _closure1_slot19;
        var4 = undefined;
        var7 = var3.bind(var4)();
        var _closure2_slot5 = var7;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 28;
        var3 = var11[var3];
        var8 = var6.bind(var4)(var3);
        var3 = var8.useChannelDetailWidth;
        var18 = var3.bind(var8)(var9);
        var _closure2_slot6 = var18;
        var8 = _closure1_slot10;
        var3 = var19.id;
        var15 = var8.bind(var4)(var3);
        var _closure2_slot7 = var15;
        var8 = _closure1_slot9;
        var3 = var19.id;
        var8 = var8.bind(var4)(var3);
        var12 = _closure1_slot3;
        var10 = var12.useMemo;
        var9 = new Array(1);
        var9[0] = var15;
        var3 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = _closure2_slot7;
                var2 = _closure1_slot24;
                if(var1) { _fun0013_ip = 33; continue _fun0013 }
 17:
                var3 = var2.BUTTONS;
                var1 = new Array(1);
                var1[0] = var3;
                _fun0013_ip = 50; continue _fun0013;
 33:
                var3 = var2.SEARCH;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 50:
                return var1;
            }
        };
        var10 = var10.bind(var12)(var3, var9);
        var14 = _closure1_slot3;
        var12 = var14.useCallback;
        var9 = function(arg1) {
            var1 = arg1;
            return var1;
        };
        var3 = new Array(0);
        var9 = var12.bind(var14)(var9, var3);
        var3 = 'initial';
        var14 = var3 !== var8;
        var _closure2_slot8 = var14;
        var12 = _closure1_slot3;
        var8 = var12.useCallback;
        var3 = new Array(9);
        var3[0] = var14;
        var3[1] = var19;
        var3[2] = var18;
        var3[3] = var17;
        var3[4] = var16;
        var3[5] = var13;
        var13 = var7.buttons;
        var3[6] = var13;
        var13 = var7.search;
        var3[7] = var13;
        var3[8] = var1;
        var1 = function(arg1, arg2, arg3, arg4) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var5 = arg1;
                var3 = arg2;
                var1 = arg3;
                var6 = arg4;
                var2 = _closure1_slot24;
                var2 = var2.BUTTONS;
                if(!(var2 !== var3)) { _fun0014_ip = 235; continue _fun0014 }
 32:
                var2 = _closure1_slot24;
                var2 = var2.SEARCH;
                if(!(var2 !== var3)) { _fun0014_ip = 50; continue _fun0014 }
 46:
                var2 = undefined;
                return var2;
 50:
                var7 = _closure1_slot17;
                var4 = _closure1_slot32;
                var3 = {};
                var3['transitionState'] = var1;
                var2 = _closure2_slot6;
                var3['width'] = var2;
                var3['cleanUp'] = var6;
                var2 = _closure2_slot8;
                var3['animated'] = var2;
                var11 = _closure1_slot17;
                var10 = _closure1_slot4;
                var8 = {};
                var2 = _closure2_slot5;
                var2 = var2.search;
                var8['style'] = var2;
                var14 = _closure1_slot17;
                var13 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 29;
                var12 = var12[var2];
                var2 = undefined;
                var13 = var13.bind(var2)(var12);
                var12 = {};
                var16 = _closure2_slot4;
                var12['ref'] = var16;
                var16 = _closure2_slot0;
                var17 = var16.id;
                var12['channelId'] = var17;
                var16 = var16.guild_id;
                var12['guildId'] = var16;
                var16 = _closure2_slot1;
                var12['onSuggestionsLayoutMesure'] = var16;
                var16 = _closure2_slot2;
                var12['suggestionsDismissed'] = var16;
                var15 = _closure2_slot3;
                var12['setSuggestionsDismissed'] = var15;
                var15 = true;
                var12['showBackButton'] = var15;
                var12 = var14.bind(var2)(var13, var12);
                var8['children'] = var12;
                var8 = var11.bind(var2)(var10, var8);
                var3['children'] = var8;
                var2 = var7.bind(var2)(var4, var3, var5);
                return var2;
 235:
                var4 = _closure1_slot17;
                var3 = _closure1_slot32;
                var2 = {};
                var2['transitionState'] = var1;
                var7 = _closure2_slot6;
                var2['width'] = var7;
                var2['cleanUp'] = var6;
                var6 = _closure2_slot8;
                var2['animated'] = var6;
                var8 = _closure1_slot17;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = _closure2_slot5;
                var10 = var10.buttons;
                var6['style'] = var10;
                var11 = _closure1_slot17;
                var10 = _closure1_slot31;
                var9 = {};
                var1 = _closure2_slot0;
                var9['channel'] = var1;
                var1 = undefined;
                var9 = var11.bind(var1)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var8 = var8.bind(var12)(var1, var3);
        var1 = 10;
        var3 = var11[var1];
        var12 = var6.bind(var4)(var3);
        var3 = var12.useAnimatedStyle;
        var2 = function S() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 27;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var5 = var6.withSpring;
                var4 = _closure2_slot7;
                if(var4) { _fun0015_ip = 48; continue _fun0015 }
 42:
                var4 = _closure1_slot11;
                _fun0015_ip = 52; continue _fun0015;
 48:
                var4 = _closure1_slot12;
 52:
                var3 = _closure1_slot15;
                var7 = _closure2_slot8;
                var2 = 'animate-never';
                if(!var7) { _fun0015_ip = 75; continue _fun0015 }
 69:
                var2 = 'respect-motion-settings';
 75:
                var2 = var5.bind(var6)(var4, var3, var2);
                var1['minHeight'] = var2;
                return var1;
            }
        };
        var13 = {};
        var16 = 27;
        var16 = var11[var16];
        var16 = var6.bind(var4)(var16);
        var16 = var16.withSpring;
        var13['withSpring'] = var16;
        var13['activeState'] = var15;
        var15 = _closure1_slot12;
        var13['CHANNEL_DETAILS_SEARCH_HEIGHT'] = var15;
        var15 = _closure1_slot11;
        var13['BUTTON_DEFAULT_HEIGHT'] = var15;
        var15 = _closure1_slot15;
        var13['SPRING_CHANNEL_DETAILS'] = var15;
        var13['animated'] = var14;
        var2['__closure'] = var13;
        var13 = 17218558972164.0;
        var2['__workletHash'] = var13;
        var13 = _closure1_slot25;
        var2['__initData'] = var13;
        var12 = var3.bind(var12)(var2);
        var3 = _closure1_slot17;
        var2 = _closure1_slot1;
        var1 = var11[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var13 = var7.container;
        var7 = new Array(2);
        var7[0] = var13;
        var7[1] = var12;
        var1['style'] = var7;
        var7 = _closure1_slot17;
        var5 = 26;
        var5 = var11[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.TransitionGroup;
        var5 = {};
        var5['items'] = var10;
        var5['getItemKey'] = var9;
        var5['renderItem'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();