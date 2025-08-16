// app/modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function navigateToChannelDetailsScreen(arg1, arg2, arg3) {
        var4 = arg1;
        var3 = var4.navigate;
        var2 = {};
        var1 = arg2;
        var2['screen'] = var1;
        var1 = arg3;
        var2['channelId'] = var1;
        var1 = 'channel-details-navigation-bar';
        var2['source'] = var1;
        var1 = 'sidebar';
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function getItemKey(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot27 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.setIsChannelDetailsSearchActive;
    var _closure1_slot8 = var8;
    var4 = var4.useIsChannelDetailsSearchActive;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ChannelDetailsButtonTypes;
    var _closure1_slot10 = var8;
    var4 = var4.ChannelDetailsNavigatorScreens;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelSettingsSections;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'relative', 'zIndex': 1};
    var14 = 10;
    var11 = var6[var14];
    var11 = var5.bind(var1)(var11);
    var11 = var11.SEARCH_BAR_HEIGHT;
    var10['height'] = var11;
    var12 = 11;
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10['marginTop'] = var11;
    var4['container'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': null, 'paddingVertical': null, 'position': 'absolute'};
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['paddingHorizontal'] = var11;
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var10['paddingVertical'] = var11;
    var11 = 'absolute';
    var14 = var6[var14];
    var14 = var5.bind(var1)(var14);
    var14 = var14.SEARCH_BAR_HEIGHT;
    var10['height'] = var14;
    var4['navigationHeader'] = var10;
    var10 = {'flex': 1, 'flexDirection': 'row', 'gap': null, 'justifyContent': 'flex-end'};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var10['gap'] = var12;
    var4['buttonsContainer'] = var10;
    var10 = {};
    var10['position'] = var11;
    var4['searchHeader'] = var10;
    var10 = {};
    var10['position'] = var11;
    var4['navItem'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'buttons';
    var4['BUTTONS'] = var8;
    var8 = 'search';
    var4['SEARCH'] = var8;
    var _closure1_slot16 = var4;
    var4 = function MuteButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.channelId;
            var _closure2_slot0 = var9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 12;
            var3 = var12[var3];
            var5 = undefined;
            var7 = var11.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(3);
            var4[0] = var3;
            var3 = _closure1_slot5;
            var4[1] = var3;
            var3 = _closure1_slot7;
            var4[2] = var3;
            var3 = function() {
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
            var6 = var6.bind(var7)(var4, var3);
            var3 = 13;
            var3 = var12[var3];
            var4 = var11.bind(var5)(var3);
            var3 = var4.useNavigation;
            var8 = var3.bind(var4)();
            var _closure2_slot1 = var8;
            var7 = _closure1_slot3;
            var4 = var7.useCallback;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var8;
            var2 = function() {
                var5 = _closure1_slot26;
                var4 = _closure2_slot1;
                var2 = _closure1_slot11;
                var3 = var2.MUTE;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7 = var4.bind(var7)(var2, var3);
            var4 = _closure1_slot13;
            var2 = 14;
            var2 = var12[var2];
            var2 = var11.bind(var5)(var2);
            var3 = var2.IconButton;
            var2 = {};
            var8 = 15;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.w4m94+;
            var8 = var9.bind(var10)(var8);
            var2['accessibilityLabel'] = var8;
            var2['onPress'] = var7;
            var7 = 'tertiary';
            var2['variant'] = var7;
            var7 = 'sm';
            var2['size'] = var7;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            if(var6) { _fun0001_ip = 262; continue _fun0001 }
 253:
            var6 = 17;
            var6 = var9[var6];
            _fun0001_ip = 269; continue _fun0001;
 262:
            var8 = 16;
            var6 = var9[var8];
 269:
            var6 = var7.bind(var5)(var6);
            var2['icon'] = var6;
            var1 = _closure1_slot10;
            var1 = var1.MUTE;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var4 = function SearchButton(arg1) {
        var1 = arg1;
        var6 = var1.channelId;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var7 = _closure1_slot8;
                var6 = _closure2_slot0;
                var1 = undefined;
                var5 = true;
                var4 = 'action';
                var4 = var7.bind(var1)(var6, var5, var4);
                var5 = _closure1_slot6;
                var4 = var5.getChannel;
                var4 = var4.bind(var5)(var6);
                var5 = null;
                if(!(var5 != var4)) { _fun0003_ip = 205; continue _fun0003 }
 52:
                var5 = var4.getGuildId;
                var8 = var5.bind(var4)();
                var5 = var4.isThread;
                var7 = var5.bind(var4)();
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 18;
                var5 = var9[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.getChannelDetailsSearchContext;
                var3 = _closure2_slot0;
                var6 = var5.bind(var6)(var3, var8, var7);
                var3 = var4.isPrivate;
                var4 = var3.bind(var4)();
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 19;
                var3 = var7[var3];
                var3 = var5.bind(var1)(var3);
                var3 = var3.SearchEntrypointAnalyticsLocations;
                if(var4) { _fun0003_ip = 156; continue _fun0003 }
 148:
                var5 = var3.CHANNEL_DETAILS_HEADER;
                _fun0003_ip = 162; continue _fun0003;
 156:
                var5 = var3.INDIVIDUAL_DM;
 162:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackSearchOpenedMobile;
                var2 = {};
                var2['searchContext'] = var6;
                var2['searchLocation'] = var5;
                var2 = var3.bind(var4)(var2);
 205:
                return var1;
            }
        };
        var6 = var4.bind(var5)(var2, var3);
        var5 = _closure1_slot13;
        var11 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 14;
        var2 = var8[var2];
        var4 = undefined;
        var2 = var11.bind(var4)(var2);
        var3 = var2.IconButton;
        var2 = {};
        var7 = 15;
        var9 = var8[var7];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var7 = var8[var7];
        var7 = var11.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.5h0QOD;
        var7 = var9.bind(var10)(var7);
        var2['accessibilityLabel'] = var7;
        var2['onPress'] = var6;
        var6 = 'tertiary';
        var2['variant'] = var6;
        var6 = 'sm';
        var2['size'] = var6;
        var7 = _closure1_slot1;
        var6 = 21;
        var6 = var8[var6];
        var6 = var7.bind(var4)(var6);
        var2['icon'] = var6;
        var1 = _closure1_slot10;
        var1 = var1.SEARCH;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot18 = var4;
    var4 = function SettingsButton(arg1) {
        var1 = arg1;
        var9 = var1.channel;
        var _closure2_slot0 = var9;
        var11 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 13;
        var3 = var8[var3];
        var5 = undefined;
        var4 = var11.bind(var5)(var3);
        var3 = var4.useNavigation;
        var7 = var3.bind(var4)();
        var _closure2_slot1 = var7;
        var6 = _closure1_slot3;
        var4 = var6.useCallback;
        var3 = new Array(2);
        var3[0] = var9;
        var3[1] = var7;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 172; continue _fun0004 }
 16:
                var3 = _closure2_slot0;
                var2 = var3.isDM;
                var2 = var2.bind(var3)();
                if(var2) { _fun0004_ip = 127; continue _fun0004 }
 33:
                var3 = _closure2_slot0;
                var2 = var3.isMultiUserDM;
                var2 = var2.bind(var3)();
                if(var2) { _fun0004_ip = 127; continue _fun0004 }
 50:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 23;
                var2 = var5[var2];
                var6 = undefined;
                var7 = var4.bind(var6)(var2);
                var5 = var7.init;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var4 = var5.bind(var7)(var4);
                var5 = _closure1_slot26;
                var4 = _closure2_slot1;
                var3 = _closure1_slot12;
                var3 = var3.OVERVIEW;
                var2 = var2.id;
                var2 = var5.bind(var6)(var4, var3, var2);
                _fun0004_ip = 172; continue _fun0004;
 127:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 22;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.openChannelLongPressActionSheet;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
 172:
                var1 = undefined;
                return var1;
            }
        };
        var6 = var4.bind(var6)(var2, var3);
        var4 = _closure1_slot13;
        var2 = 14;
        var2 = var8[var2];
        var2 = var11.bind(var5)(var2);
        var3 = var2.IconButton;
        var2 = {'accessibilityLabel': null, 'onPress': null, 'accessibilityRole': 'button', 'variant': 'tertiary', 'size': 'sm'};
        var7 = 15;
        var9 = var8[var7];
        var9 = var11.bind(var5)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var7 = var8[var7];
        var7 = var11.bind(var5)(var7);
        var7 = var7.t;
        var7 = var7.3D5yo6;
        var7 = var9.bind(var10)(var7);
        var2['accessibilityLabel'] = var7;
        var2['onPress'] = var6;
        var7 = _closure1_slot1;
        var6 = 24;
        var6 = var8[var6];
        var6 = var7.bind(var5)(var6);
        var2['icon'] = var6;
        var1 = _closure1_slot10;
        var1 = var1.SETTINGS;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = "function ChannelDetailsNavigationBarTsx1(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}";
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function ChannelDetailsNavigationBarTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var8 = var7.forwardRef;
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var10 = var1.channel;
        var9 = var1.onSuggestionsLayoutMeasure;
        var8 = var1.suggestionsDismissed;
        var7 = var1.setSuggestionsDismissed;
        var6 = var1.transitionState;
        var14 = var1.width;
        var _closure2_slot0 = var14;
        var15 = var1.cleanUp;
        var _closure2_slot1 = var15;
        var1 = _closure1_slot15;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var17 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 26;
        var1 = var11[var1];
        var1 = var17.bind(var4)(var1);
        var1 = var1.TransitionStates;
        var1 = var1.YEETED;
        var16 = var6 !== var1;
        var _closure2_slot2 = var16;
        var1 = 27;
        var6 = var11[var1];
        var12 = var17.bind(var4)(var6);
        var6 = var12.useAnimatedStyle;
        var3 = function S() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = {};
                var4 = _closure2_slot2;
                var3 = 'none';
                if(!var4) { _fun0005_ip = 20; continue _fun0005 }
 16:
                var3 = 'auto';
 20:
                var1['pointerEvents'] = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 28;
                var4 = var6[var4];
                var12 = undefined;
                var8 = var5.bind(var12)(var4);
                var7 = var8.withTiming;
                var4 = _closure2_slot2;
                var6 = 0;
                if(!var4) { _fun0005_ip = 67; continue _fun0005 }
 64:
                var6 = 1;
 67:
                var5 = {};
                var4 = 200;
                var5['duration'] = var4;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 27;
                var4 = var13[var10];
                var4 = var11.bind(var12)(var4);
                var16 = var4.Easing;
                var15 = var16.bezier;
                var14 = 0.25;
                var19 = 0.1;
                var17 = 1;
                var21 = var16;
                var20 = var14;
                var18 = var14;
                var4 = var21[var15](var20, var19, var18, var17, var16);
                var5['easing'] = var4;
                var4 = function n(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = arg1;
                        if(!var1) { _fun0006_ip = 52; continue _fun0006 }
 6:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
 52:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = {};
                var10 = var13[var10];
                var10 = var11.bind(var12)(var10);
                var10 = var10.runOnJS;
                var9['runOnJS'] = var10;
                var10 = _closure2_slot1;
                var9['cleanUp'] = var10;
                var4['__closure'] = var9;
                var9 = 10411737901360.0;
                var4['__workletHash'] = var9;
                var3 = _closure1_slot21;
                var4['__initData'] = var3;
                var18 = 'animate-always';
                var21 = var8;
                var20 = var6;
                var19 = var5;
                var17 = var4;
                var3 = var21[var7](var20, var19, var18, var17, var16);
                var1['opacity'] = var3;
                var2 = _closure2_slot0;
                var1['width'] = var2;
                return var1;
            }
        };
        var13 = {};
        var13['isActive'] = var16;
        var16 = 28;
        var16 = var11[var16];
        var16 = var17.bind(var4)(var16);
        var16 = var16.withTiming;
        var13['withTiming'] = var16;
        var16 = var11[var1];
        var16 = var17.bind(var4)(var16);
        var16 = var16.Easing;
        var13['Easing'] = var16;
        var16 = var11[var1];
        var16 = var17.bind(var4)(var16);
        var16 = var16.runOnJS;
        var13['runOnJS'] = var16;
        var13['cleanUp'] = var15;
        var13['width'] = var14;
        var3['__closure'] = var13;
        var13 = 1270940013897.0;
        var3['__workletHash'] = var13;
        var13 = _closure1_slot20;
        var3['__initData'] = var13;
        var12 = var6.bind(var12)(var3);
        var3 = _closure1_slot13;
        var6 = _closure1_slot1;
        var1 = var11[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var13 = var5.searchHeader;
        var5 = new Array(2);
        var5[0] = var13;
        var5[1] = var12;
        var1['style'] = var5;
        var5 = 29;
        var5 = var11[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var11 = arg2;
        var5['ref'] = var11;
        var11 = var10.id;
        var5['channelId'] = var11;
        var10 = var10.guild_id;
        var5['guildId'] = var10;
        var5['onSuggestionsLayoutMesure'] = var9;
        var5['suggestionsDismissed'] = var8;
        var5['setSuggestionsDismissed'] = var7;
        var7 = true;
        var5['showBackButton'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}";
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = 'function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}';
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = function NavigationHeader(arg1) {
        var1 = arg1;
        var9 = var1.channel;
        var _closure2_slot0 = var9;
        var11 = var1.onBackPress;
        var3 = var1.transitionState;
        var13 = var1.width;
        var _closure2_slot1 = var13;
        var14 = var1.cleanUp;
        var _closure2_slot2 = var14;
        var1 = _closure1_slot15;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var12 = _closure1_slot0;
        var15 = _closure1_slot2;
        var1 = 26;
        var1 = var15[var1];
        var1 = var12.bind(var4)(var1);
        var1 = var1.TransitionStates;
        var1 = var1.YEETED;
        var16 = var3 < var1;
        var _closure2_slot3 = var16;
        var1 = 27;
        var3 = var15[var1];
        var7 = var12.bind(var4)(var3);
        var5 = var7.useAnimatedStyle;
        var3 = function h() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = {};
                var4 = _closure2_slot3;
                var3 = 'none';
                if(!var4) { _fun0007_ip = 20; continue _fun0007 }
 16:
                var3 = 'auto';
 20:
                var1['pointerEvents'] = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 28;
                var4 = var6[var4];
                var12 = undefined;
                var8 = var5.bind(var12)(var4);
                var7 = var8.withTiming;
                var4 = _closure2_slot3;
                var6 = 0;
                if(!var4) { _fun0007_ip = 67; continue _fun0007 }
 64:
                var6 = 1;
 67:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 30;
                var4 = var13[var4];
                var4 = var11.bind(var12)(var4);
                var16 = var4.timingFast;
                var4 = function n(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = arg1;
                        if(!var1) { _fun0008_ip = 52; continue _fun0008 }
 6:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot2;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
 52:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = {};
                var10 = 27;
                var10 = var13[var10];
                var10 = var11.bind(var12)(var10);
                var10 = var10.runOnJS;
                var9['runOnJS'] = var10;
                var10 = _closure2_slot2;
                var9['cleanUp'] = var10;
                var4['__closure'] = var9;
                var9 = 17272451769590.0;
                var4['__workletHash'] = var9;
                var3 = _closure1_slot24;
                var4['__initData'] = var3;
                var15 = 'animate-always';
                var18 = var8;
                var17 = var6;
                var14 = var4;
                var3 = var18[var7](var17, var16, var15, var14, var13);
                var1['opacity'] = var3;
                var2 = _closure2_slot1;
                var1['width'] = var2;
                return var1;
            }
        };
        var8 = {};
        var8['isActive'] = var16;
        var16 = 28;
        var16 = var15[var16];
        var16 = var12.bind(var4)(var16);
        var16 = var16.withTiming;
        var8['withTiming'] = var16;
        var16 = 30;
        var16 = var15[var16];
        var16 = var12.bind(var4)(var16);
        var16 = var16.timingFast;
        var8['timingFast'] = var16;
        var16 = var15[var1];
        var16 = var12.bind(var4)(var16);
        var16 = var16.runOnJS;
        var8['runOnJS'] = var16;
        var8['cleanUp'] = var14;
        var8['width'] = var13;
        var3['__closure'] = var8;
        var8 = 15139742229370.0;
        var3['__workletHash'] = var8;
        var8 = _closure1_slot23;
        var3['__initData'] = var8;
        var7 = var5.bind(var7)(var3);
        var8 = _closure1_slot3;
        var5 = var8.useMemo;
        var3 = new Array(1);
        var3[0] = var9;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 31;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getChannelDetailsButtons;
            var1 = _closure2_slot0;
            var1 = var1.type;
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var6 = arg1;
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot10;
                    var1 = var1.SEARCH;
                    if(!(var1 !== var6)) { _fun0009_ip = 173; continue _fun0009 }
 30:
                    var1 = _closure1_slot10;
                    var1 = var1.MUTE;
                    if(!(var1 !== var6)) { _fun0009_ip = 143; continue _fun0009 }
 44:
                    var1 = _closure1_slot10;
                    var1 = var1.SETTINGS;
                    if(!(var1 !== var6)) { _fun0009_ip = 118; continue _fun0009 }
 58:
                    var1 = _closure1_slot10;
                    var4 = var1.MORE;
                    var8 = undefined;
                    var1 = undefined;
                    if(!(var4 === var6)) { _fun0009_ip = 201; continue _fun0009 }
 79:
                    var7 = _closure1_slot13;
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 25;
                    var4 = var9[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = {};
                    var4['channel'] = var2;
                    var1 = var7.bind(var8)(var5, var4, var6);
                    _fun0009_ip = 201; continue _fun0009;
 118:
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot19;
                    var5 = {};
                    var5['channel'] = var2;
                    var4 = undefined;
                    var1 = var8.bind(var4)(var7, var5, var6);
                    _fun0009_ip = 201; continue _fun0009;
 143:
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot17;
                    var5 = {};
                    var4 = var2.id;
                    var5['channelId'] = var4;
                    var4 = undefined;
                    var1 = var8.bind(var4)(var7, var5, var6);
                    _fun0009_ip = 201; continue _fun0009;
 173:
                    var5 = _closure1_slot13;
                    var4 = _closure1_slot18;
                    var3 = {};
                    var2 = var2.id;
                    var3['channelId'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3, var6);
 201:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var5.bind(var8)(var2, var3);
        var3 = _closure1_slot14;
        var14 = _closure1_slot1;
        var1 = var15[var1];
        var1 = var14.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var8 = var10.navigationHeader;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var7;
        var1['style'] = var5;
        var8 = _closure1_slot13;
        var5 = 32;
        var5 = var15[var5];
        var5 = var12.bind(var4)(var5);
        var7 = var5.PressableOpacity;
        var5 = {};
        var13 = 15;
        var16 = var15[var13];
        var16 = var12.bind(var4)(var16);
        var17 = var16.intl;
        var16 = var17.string;
        var13 = var15[var13];
        var13 = var12.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.13/7kZ;
        var13 = var16.bind(var17)(var13);
        var5['accessibilityLabel'] = var13;
        var5['onPress'] = var11;
        var11 = 33;
        var11 = var15[var11];
        var11 = var12.bind(var4)(var11);
        var12 = var11.ArrowLargeLeftIcon;
        var11 = {};
        var13 = 11;
        var13 = var15[var13];
        var13 = var14.bind(var4)(var13);
        var13 = var13.colors;
        var13 = var13.INTERACTIVE_NORMAL;
        var11['color'] = var13;
        var11 = var8.bind(var4)(var12, var11);
        var5['children'] = var11;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var7 = _closure1_slot4;
        var6 = {};
        var10 = var10.buttonsContainer;
        var6['style'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        var2 = arg1;
        var11 = arg2;
        var15 = var2.channel;
        var _closure2_slot0 = var15;
        var14 = var2.onBackPress;
        var _closure2_slot1 = var14;
        var7 = var2.componentWidth;
        var12 = var2.searchBarLayoutProps;
        var _closure2_slot2 = var12;
        var _closure2_slot3 = var11;
        var2 = _closure1_slot15;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 34;
        var2 = var10[var2];
        var3 = var6.bind(var4)(var2);
        var2 = var3.useChannelDetailWidth;
        var13 = var2.bind(var3)(var7);
        var _closure2_slot4 = var13;
        var3 = _closure1_slot9;
        var2 = var15.id;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot5 = var2;
        var7 = _closure1_slot3;
        var9 = var7.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = _closure2_slot5;
                var2 = _closure1_slot16;
                if(var1) { _fun0010_ip = 33; continue _fun0010 }
 17:
                var3 = var2.BUTTONS;
                var1 = new Array(1);
                var1[0] = var3;
                _fun0010_ip = 50; continue _fun0010;
 33:
                var3 = var2.SEARCH;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 50:
                return var1;
            }
        };
        var9 = var9.bind(var7)(var2, var3);
        var3 = var7.useCallback;
        var2 = new Array(5);
        var2[0] = var15;
        var2[1] = var14;
        var2[2] = var13;
        var2[3] = var12;
        var2[4] = var11;
        var1 = function(arg1, arg2, arg3, arg4) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var5 = arg1;
                var4 = arg2;
                var7 = arg3;
                var1 = arg4;
                var3 = _closure1_slot16;
                var3 = var3.BUTTONS;
                if(!(var3 !== var4)) { _fun0011_ip = 129; continue _fun0011 }
 29:
                var3 = _closure1_slot16;
                var3 = var3.SEARCH;
                if(!(var3 !== var4)) { _fun0011_ip = 47; continue _fun0011 }
 43:
                var3 = undefined;
                return var3;
 47:
                var8 = _closure1_slot13;
                var6 = _closure1_slot22;
                var4 = {};
                var9 = _closure2_slot3;
                var4['ref'] = var9;
                var9 = _closure2_slot0;
                var4['channel'] = var9;
                var11 = _closure2_slot2;
                var12 = var4;
                var9 = copyDataProperties(var12, var11);
                var9 = 'transitionState';
                var4[var9] = var7;
                var9 = _closure2_slot4;
                var3 = 'width';
                var4[var3] = var9;
                var3 = 'cleanUp';
                var4[var3] = var1;
                var3 = undefined;
                var3 = var8.bind(var3)(var6, var4, var5);
                return var3;
 129:
                var4 = _closure1_slot13;
                var3 = _closure1_slot25;
                var2 = {};
                var8 = _closure2_slot0;
                var2['channel'] = var8;
                var8 = _closure2_slot1;
                var2['onBackPress'] = var8;
                var2['transitionState'] = var7;
                var6 = _closure2_slot4;
                var2['width'] = var6;
                var2['cleanUp'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var7 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot13;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var5.container;
        var1['style'] = var5;
        var5 = 26;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.TransitionGroup;
        var5 = {};
        var5['items'] = var9;
        var8 = _closure1_slot27;
        var5['getItemKey'] = var8;
        var5['renderItem'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();