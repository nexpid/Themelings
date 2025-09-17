// app/modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function StreamIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.voicePlatform;
            var5 = _closure1_slot22;
            var4 = undefined;
            var5 = var5.bind(var4)();
            var10 = _closure1_slot3;
            var9 = var10.useContext;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 17;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var9.bind(var10)(var6);
            var11 = var6.controlsSpecs;
            var _closure2_slot0 = var11;
            var9 = _closure1_slot0;
            var6 = 13;
            var6 = var8[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.useAnimatedStyle;
            var2 = function o() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var2 = var1.mode;
                    var1 = _closure1_slot13;
                    var1 = var1.HIDDEN;
                    var3 = var2 === var1;
                    var1 = {};
                    var2 = 4;
                    if(!var3) { _fun0002_ip = 49; continue _fun0002 }
 46:
                    var2 = 2;
 49:
                    var1['marginLeft'] = var2;
                    var2 = 0;
                    if(!var3) { _fun0002_ip = 62; continue _fun0002 }
 59:
                    var2 = 2;
 62:
                    var1['marginRight'] = var2;
                    return var1;
                }
            };
            var10 = {};
            var10['controlsSpecs'] = var11;
            var11 = _closure1_slot13;
            var10['VoicePanelControlsModes'] = var11;
            var11 = 4;
            var10['GAP'] = var11;
            var2['__closure'] = var10;
            var10 = 15914667672663.0;
            var2['__workletHash'] = var10;
            var10 = _closure1_slot25;
            var2['__initData'] = var10;
            var6 = var6.bind(var9)(var2);
            var2 = 28;
            var2 = var8[var2];
            var7 = var7.bind(var4)(var2);
            var2 = _closure1_slot17;
            var2 = var2.XBOX;
            if(!(var3 !== var2)) { _fun0001_ip = 221; continue _fun0001 }
 185:
            var2 = _closure1_slot17;
            var2 = var2.MOBILE;
            if(!(var3 === var2)) { _fun0001_ip = 241; continue _fun0001 }
 199:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 30;
            var2 = var8[var2];
            var7 = var3.bind(var4)(var2);
            _fun0001_ip = 241; continue _fun0001;
 221:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 29;
            var2 = var8[var2];
            var7 = var3.bind(var4)(var2);
 241:
            var3 = _closure1_slot18;
            var2 = _closure1_slot21;
            var1 = {};
            var1['source'] = var7;
            var7 = var5.iconWithoutBackground;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function AnimatedLabelIcon(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.icon;
            var2 = _closure1_slot22;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var3 = var5.type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 31;
            var2 = var2[var7];
            var2 = var6.bind(var4)(var2);
            var2 = var2.VoicePanelCardUserStateIconType;
            var2 = var2.STREAM_ICON;
            if(!(var2 !== var3)) { _fun0003_ip = 533; continue _fun0003 }
 65:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var6.bind(var4)(var2);
            var2 = var2.VoicePanelCardUserStateIconType;
            var2 = var2.USER_VIDEO_ICON;
            if(!(var2 !== var3)) { _fun0003_ip = 435; continue _fun0003 }
 101:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var6.bind(var4)(var2);
            var2 = var2.VoicePanelCardUserStateIconType;
            var2 = var2.MUTE_DEAFEN_ICON;
            if(!(var2 !== var3)) { _fun0003_ip = 290; continue _fun0003 }
 137:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var6.bind(var4)(var2);
            var2 = var2.VoicePanelCardUserStateIconType;
            var2 = var2.USER_DISCONNECTED_ICON;
            if(!(var2 !== var3)) { _fun0003_ip = 172; continue _fun0003 }
 170:
            return var4;
 172:
            var6 = _closure1_slot18;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var10.iconContainer;
            var2['style'] = var7;
            var7 = var5.onPress;
            var2['onPress'] = var7;
            var9 = _closure1_slot18;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 34;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.CircleErrorIcon;
            var7 = {};
            var11 = 'xs';
            var7['size'] = var11;
            var12 = _closure1_slot1;
            var11 = 16;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.TEXT_WARNING;
            var7['color'] = var11;
            var7 = var9.bind(var4)(var8, var7);
            var2['children'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 290:
            var6 = _closure1_slot18;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 33;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var7 = var10.iconContainer;
            var2['style'] = var7;
            var9 = _closure1_slot18;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var5.onPress;
            var7['onPress'] = var11;
            var11 = 12;
            var7['hitSlop'] = var11;
            var13 = _closure1_slot18;
            var12 = _closure1_slot0;
            var11 = 32;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.MuteDeafenIcon;
            var11 = {};
            var14 = var10.icon;
            var11['style'] = var14;
            var14 = var5.muteDeafenIconState;
            var11['state'] = var14;
            var14 = true;
            var11['alwaysWhite'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var7['children'] = var11;
            var7 = var9.bind(var4)(var8, var7);
            var2['children'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 435:
            var6 = _closure1_slot18;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var10.iconContainer;
            var2['style'] = var7;
            var7 = var5.onPress;
            var2['onPress'] = var7;
            var9 = _closure1_slot18;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 32;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.VideoIcon;
            var7 = {};
            var10 = var10.icon;
            var7['style'] = var10;
            var10 = var5.videoIconState;
            var7['state'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var2['children'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 533:
            var3 = _closure1_slot18;
            var2 = _closure1_slot43;
            var1 = {};
            var5 = var5.voicePlatform;
            var1['voicePlatform'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function getAccessibilityLabel(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var5 = arg2;
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 31;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.VoicePanelCardUserStateIconType;
                var1 = var1.STREAM_ICON;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 == var3)) { _fun0004_ip = 269; continue _fun0004 }
 34:
            var3 = var4.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 31;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.VoicePanelCardUserStateIconType;
                var1 = var1.MUTE_DEAFEN_ICON;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            if(!(var2 == var1)) { _fun0004_ip = 57; continue _fun0004 }
 55:
            return var5;
 57:
            var3 = var1.muteDeafenIconState;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 35;
            var2 = var2[var7];
            var6 = undefined;
            var2 = var4.bind(var6)(var2);
            var2 = var2.MuteDeafenIconState;
            var2 = var2.DEAFENED;
            if(!(var2 !== var3)) { _fun0004_ip = 203; continue _fun0004 }
 104:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var6)(var2);
            var2 = var2.MuteDeafenIconState;
            var2 = var2.DEAFENED_SERVER;
            if(!(var2 !== var3)) { _fun0004_ip = 203; continue _fun0004 }
 137:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 22;
            var4 = var8[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.Hd1oVF;
            var2 = {};
            var2['username'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
 203:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 22;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.9hDjam;
            var1 = {};
            var1['username'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 269:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 22;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.I0mOAg;
            var1 = {};
            var1['username'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot45 = var1;
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
    var8 = var4.Image;
    var _closure1_slot4 = var8;
    var8 = var4.Platform;
    var4 = var4.Pressable;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MODE_CHANGE_PHYSICS;
    var _closure1_slot11 = var8;
    var4 = var4.VoicePanelModes;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.VOICE_PANEL_CARD_INNER_PADDING;
    var _closure1_slot14 = var11;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ParticipantTypes;
    var _closure1_slot16 = var8;
    var4 = var4.VoicePlatforms;
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot18 = var8;
    var8 = var4.jsxs;
    var _closure1_slot19 = var8;
    var4 = var4.Fragment;
    var _closure1_slot20 = var4;
    var4 = 13;
    var4 = var6[var4];
    var9 = var12.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 14;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var8.bind(var9)(var4);
    var _closure1_slot21 = var4;
    var4 = 15;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'left': 8, 'right': 8, 'bottom': 8, 'justifyContent': 'center', 'alignItems': 'center', 'marginHorizontal': 8};
    var4['labelPositionContainer'] = var10;
    var10 = {'position': 'absolute', 'left': 0, 'bottom': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var10['bottom'] = var11;
    var10['marginHorizontal'] = var11;
    var4['leftAlignedLabelPositionContainer'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center', 'borderRadius': null, 'overflow': 'hidden', 'paddingHorizontal': 8, 'backgroundColor': null, 'height': 28, 'gap': 4};
    var11 = 16;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND;
    var10['backgroundColor'] = var13;
    var4['labelOuterContainer'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'marginStart': 4294967292, 'marginEnd': 4294967292};
    var4['initialIcons'] = var10;
    var10 = {'width': 12, 'height': 12};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['tintColor'] = var13;
    var4['icon'] = var10;
    var10 = {'width': 16, 'height': 16};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['tintColor'] = var13;
    var4['iconWithoutBackground'] = var10;
    var10 = {'width': 20, 'height': 20, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var4['iconContainer'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4, 'overflow': 'hidden'};
    var4['floatingContainer'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'overflow': 'hidden', 'flexShrink': 1};
    var4['floatingTextContainer'] = var10;
    var10 = {'overflow': 'hidden', 'paddingStart': 4, 'paddingEnd': 4, 'flexShrink': 1, 'lineHeight': 14};
    var4['floatingText'] = var10;
    var10 = {'position': 'absolute', 'top': 8, 'right': 8, 'padding': 6};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_FLOATING;
    var10['backgroundColor'] = var13;
    var4['ringingIconContainer'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.STATUS_POSITIVE;
    var10['tintColor'] = var13;
    var4['ringingIcon'] = var10;
    var10 = {};
    var13 = -2;
    var10['marginEnd'] = var13;
    var4['secureFramesIcon'] = var10;
    var10 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['hangStatusContainer'] = var10;
    var10 = {'position': 'absolute', 'width': 24, 'height': 24};
    var4['hangStatus'] = var10;
    var10 = {'position': 'absolute', 'fontSize': 24, 'lineHeight': 32};
    var4['textEmojiHangStatus'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var10['tintColor'] = var11;
    var4['hangStatusAdd'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = "function VoicePanelCardFloatingControlsTsx1(){const{isSelf,selfHangStatus,controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=isSelf&&selfHangStatus==null?controlsHidden.get():false;return{position:'absolute',bottom:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}";
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var8 = var7.memo;
    var4 = function HangStatusButton(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var4 = var2.userId;
            var15 = var2.isSelf;
            var _closure2_slot0 = var15;
            var12 = var2.controlsHidden;
            var _closure2_slot1 = var12;
            var10 = var2.speaking;
            var9 = var2.layout;
            var2 = _closure1_slot22;
            var5 = undefined;
            var11 = var2.bind(var5)();
            var7 = _closure1_slot3;
            var3 = var7.useContext;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 17;
            var2 = var17[var2];
            var2 = var8.bind(var5)(var2);
            var2 = var3.bind(var7)(var2);
            var7 = var2.channelId;
            var _closure2_slot2 = var7;
            var16 = _closure1_slot0;
            var2 = 18;
            var2 = var17[var2];
            var3 = var16.bind(var5)(var2);
            var2 = var3.useHangStatusActivity;
            var13 = var2.bind(var3)(var4);
            var _closure2_slot3 = var13;
            var2 = 19;
            var2 = var17[var2];
            var8 = var16.bind(var5)(var2);
            var4 = var8.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getHangStatusActivity;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var4.bind(var8)(var3, var2);
            var _closure2_slot4 = var14;
            var2 = 13;
            var2 = var17[var2];
            var4 = var16.bind(var5)(var2);
            var3 = var4.useAnimatedStyle;
            var2 = function I() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    if(var2) { _fun0006_ip = 23; continue _fun0006 }
 13:
                    var4 = _closure2_slot4;
                    var3 = null;
                    var2 = var3 != var4;
 23:
                    var7 = !var2;
                    if(var2) { _fun0006_ip = 42; continue _fun0006 }
 29:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var7 = var1.bind(var2)();
 42:
                    var1 = {};
                    var2 = 'absolute';
                    var1['position'] = var2;
                    var5 = _closure1_slot14;
                    if(var7) { _fun0006_ip = 67; continue _fun0006 }
 62:
                    var2 = var5;
                    _fun0006_ip = 84; continue _fun0006;
 67:
                    var4 = 2;
                    var5 = var4 * var5;
                    var4 = 28;
                    var4 = var4 + var5;
                    var2 = -var4;
 84:
                    var1['bottom'] = var2;
                    var2 = _closure1_slot14;
                    var1['right'] = var2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.withSpring;
                    var2 = 1;
                    var4 = var2;
                    if(!var7) { _fun0006_ip = 134; continue _fun0006 }
 132:
                    var4 = 0;
 134:
                    var3 = _closure1_slot11;
                    var3 = var5.bind(var6)(var4, var3);
                    var1['opacity'] = var3;
                    var1['zIndex'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['isSelf'] = var15;
            var8['selfHangStatus'] = var14;
            var8['controlsHidden'] = var12;
            var12 = 28;
            var8['FLOATING_BAR_HEIGHT'] = var12;
            var12 = _closure1_slot14;
            var8['VOICE_PANEL_CARD_INNER_PADDING'] = var12;
            var12 = 20;
            var12 = var17[var12];
            var12 = var16.bind(var5)(var12);
            var12 = var12.withSpring;
            var8['withSpring'] = var12;
            var12 = _closure1_slot11;
            var8['MODE_CHANGE_PHYSICS'] = var12;
            var2['__closure'] = var8;
            var8 = 6404833205920.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot23;
            var2['__initData'] = var8;
            var12 = var3.bind(var4)(var2);
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(4);
            var2[0] = var13;
            var2[1] = var15;
            var2[2] = var14;
            var2[3] = var7;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 21;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.getHangStatusText;
                    if(var3) { _fun0007_ip = 52; continue _fun0007 }
 41:
                    var3 = _closure2_slot3;
                    var7 = var4.bind(var6)(var3);
                    _fun0007_ip = 61; continue _fun0007;
 52:
                    var3 = _closure2_slot4;
                    var7 = var4.bind(var6)(var3);
 61:
                    var3 = null;
                    if(!(var3 == var7)) { _fun0007_ip = 122; continue _fun0007 }
 67:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 22;
                    var4 = var9[var3];
                    var4 = var8.bind(var1)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var3 = var9[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.t;
                    var3 = var3.d8R2VF;
                    var7 = var4.bind(var6)(var3);
 122:
                    var3 = _closure2_slot0;
                    if(var3) { _fun0007_ip = 172; continue _fun0007 }
 129:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 24;
                    var3 = var6[var3];
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.open;
                    var3 = {};
                    var3['key'] = var7;
                    var3['content'] = var7;
                    var3 = var4.bind(var6)(var3);
                    _fun0007_ip = 213; continue _fun0007;
 172:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.showHangStatusPickerActionSheet;
                    var2 = {};
                    var5 = _closure2_slot2;
                    var2['channelId'] = var5;
                    var2 = var3.bind(var4)(var2);
 213:
                    return var1;
                }
            };
            var7 = var3.bind(var4)(var1, var2);
            var1 = null;
            var8 = null;
            if(!var15) { _fun0005_ip = 421; continue _fun0005 }
 353:
            var4 = _closure1_slot18;
            var3 = _closure1_slot4;
            var2 = {};
            var17 = var11.hangStatus;
            var16 = new Array(2);
            var16[0] = var17;
            var17 = var11.hangStatusAdd;
            var16[1] = var17;
            var2['style'] = var16;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 25;
            var16 = var18[var16];
            var16 = var17.bind(var5)(var16);
            var2['source'] = var16;
            var8 = var4.bind(var5)(var3, var2);
 421:
            var2 = var15;
            if(!var2) { _fun0005_ip = 431; continue _fun0005 }
 427:
            var2 = var1 != var14;
 431:
            if(var2) { _fun0005_ip = 438; continue _fun0005 }
 434:
            var2 = var1 != var13;
 438:
            if(!var2) { _fun0005_ip = 518; continue _fun0005 }
 441:
            var4 = _closure1_slot18;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 26;
            var2 = var16[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var16 = 24;
            var2['size'] = var16;
            var16 = var11.textEmojiHangStatus;
            var2['textEmojiStyle'] = var16;
            var16 = var11.hangStatus;
            var2['emojiStyle'] = var16;
            if(!var15) { _fun0005_ip = 502; continue _fun0005 }
 499:
            var13 = var14;
 502:
            var2['hangStatusActivity'] = var13;
            var2['speaking'] = var10;
            var8 = var4.bind(var5)(var3, var2);
 518:
            var2 = var1 == var8;
            var1 = null;
            if(var2) { _fun0005_ip = 652; continue _fun0005 }
 530:
            var4 = _closure1_slot18;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 27;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var13 = var11.hangStatusContainer;
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var2['style'] = var11;
            var2['layout'] = var9;
            var2['icon'] = var8;
            var2['onPress'] = var7;
            var9 = _closure1_slot0;
            var6 = 22;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.d8R2VF;
            var6 = var7.bind(var8)(var6);
            var2['accessibilityLabel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 652:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx2(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}';
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = {};
    var8 = "function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}";
    var4['code'] = var8;
    var _closure1_slot26 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var9 = var2.participant;
            var _closure2_slot0 = var9;
            var3 = var2.controlsHidden;
            var5 = var2.isSelf;
            var7 = var2.layout;
            var11 = _closure1_slot3;
            var8 = var11.useContext;
            var13 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 17;
            var2 = var10[var2];
            var4 = undefined;
            var2 = var13.bind(var4)(var2);
            var2 = var8.bind(var11)(var2);
            var12 = var2.guildId;
            var _closure2_slot1 = var12;
            var2 = function useTopLeftButtonStyles(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 13;
                var2 = var9[var2];
                var7 = undefined;
                var3 = var8.bind(var7)(var2);
                var2 = var3.useAnimatedStyle;
                var1 = function n() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var2 = _closure3_slot0;
                        var1 = var2.get;
                        var7 = var1.bind(var2)();
                        var1 = {};
                        var2 = 'absolute';
                        var1['position'] = var2;
                        var5 = _closure1_slot14;
                        if(var7) { _fun0009_ip = 41; continue _fun0009 }
 36:
                        var2 = var5;
                        _fun0009_ip = 58; continue _fun0009;
 41:
                        var4 = 2;
                        var5 = var4 * var5;
                        var4 = 28;
                        var4 = var4 + var5;
                        var2 = -var4;
 58:
                        var1['top'] = var2;
                        var2 = _closure1_slot14;
                        var1['left'] = var2;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 20;
                        var4 = var4[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.withSpring;
                        var2 = 1;
                        var4 = var2;
                        if(!var7) { _fun0009_ip = 108; continue _fun0009 }
 106:
                        var4 = 0;
 108:
                        var3 = _closure1_slot11;
                        var3 = var5.bind(var6)(var4, var3);
                        var1['opacity'] = var3;
                        var1['zIndex'] = var2;
                        return var1;
                    }
                };
                var5 = {};
                var5['controlsHidden'] = var6;
                var6 = 28;
                var5['FLOATING_BAR_HEIGHT'] = var6;
                var6 = _closure1_slot14;
                var5['VOICE_PANEL_CARD_INNER_PADDING'] = var6;
                var6 = 20;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.withSpring;
                var5['withSpring'] = var6;
                var6 = _closure1_slot11;
                var5['MODE_CHANGE_PHYSICS'] = var6;
                var1['__closure'] = var5;
                var5 = 14060283277726.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot26;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var2.bind(var4)(var3);
            var11 = _closure1_slot3;
            var3 = var11.useCallback;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var9;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 36;
                    var3 = var1[var6];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var4 = var7.isStableStreamParticipant;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var7)(var3);
                    if(!var3) { _fun0010_ip = 143; continue _fun0010 }
 46:
                    var8 = _closure1_slot9;
                    var7 = var8.getStreamForUser;
                    var3 = _closure2_slot0;
                    var3 = var3.user;
                    var4 = var3.id;
                    var3 = _closure2_slot1;
                    var9 = var7.bind(var8)(var4, var3);
                    var3 = null;
                    if(!(var3 != var9)) { _fun0010_ip = 260; continue _fun0010 }
 89:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 37;
                    var3 = var10[var3];
                    var7 = var8.bind(var1)(var3);
                    var4 = var7.stopStream;
                    var3 = 38;
                    var3 = var10[var3];
                    var8 = var8.bind(var1)(var3);
                    var3 = var8.encodeStreamKey;
                    var3 = var3.bind(var8)(var9);
                    var3 = var4.bind(var7)(var3);
 143:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.isStableActivityParticipant;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var6)(var3);
                    if(!var3) { _fun0010_ip = 258; continue _fun0010 }
 178:
                    var4 = _closure1_slot7;
                    var3 = var4.getCurrentEmbeddedActivity;
                    var7 = var3.bind(var4)();
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 39;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.leaveActivity;
                    var2 = {};
                    var6 = null;
                    var8 = var6 == var7;
                    var6 = undefined;
                    if(var8) { _fun0010_ip = 236; continue _fun0010 }
 231:
                    var6 = var7.location;
 236:
                    var2['location'] = var6;
                    var5 = _closure2_slot0;
                    var5 = var5.applicationId;
                    var2['applicationId'] = var5;
                    var2 = var3.bind(var4)(var2);
 258:
                    return var1;
 260:
                    return var1;
                }
            };
            var11 = var3.bind(var11)(var1, var2);
            var3 = _closure1_slot18;
            var1 = 27;
            var1 = var10[var1];
            var2 = var13.bind(var4)(var1);
            var1 = {};
            var12 = 40;
            var12 = var10[var12];
            var12 = var13.bind(var4)(var12);
            var1['icon'] = var12;
            var1['onPress'] = var11;
            var1['style'] = var8;
            var1['layout'] = var7;
            var8 = _closure1_slot0;
            var7 = 36;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isStableActivityParticipant;
            var9 = var7.bind(var8)(var9);
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 22;
            var7 = var11[var6];
            var7 = var10.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            if(var9) { _fun0008_ip = 280; continue _fun0008 }
 249:
            if(var5) { _fun0008_ip = 265; continue _fun0008 }
 252:
            var5 = var6.q3O3Jy;
            var5 = var7.bind(var8)(var5);
            _fun0008_ip = 278; continue _fun0008;
 265:
            var9 = var6.S5anIS;
            var5 = var7.bind(var8)(var9);
 278:
            _fun0008_ip = 291; continue _fun0008;
 280:
            var6 = var6.R/FK4O;
            var5 = var7.bind(var8)(var6);
 291:
            var1['accessibilityLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = "function VoicePanelCardFloatingControlsTsx4(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}";
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = arg1;
            var2 = var3.participantId;
            var _closure2_slot0 = var2;
            var14 = var3.controlsHidden;
            var _closure2_slot1 = var14;
            var10 = var3.targetName;
            var5 = var3.layout;
            var8 = _closure1_slot3;
            var7 = var8.useContext;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 17;
            var3 = var12[var3];
            var4 = undefined;
            var3 = var11.bind(var4)(var3);
            var3 = var7.bind(var8)(var3);
            var13 = var3.setFocused;
            var _closure2_slot2 = var13;
            var9 = var3.mode;
            var _closure2_slot3 = var9;
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var7.bind(var8)(var2, var3);
            var13 = _closure1_slot0;
            var2 = 13;
            var2 = var12[var2];
            var3 = var13.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function c() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var7 = var2.bind(var3)();
                    if(var7) { _fun0012_ip = 49; continue _fun0012 }
 19:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure1_slot12;
                    var1 = var1.PIP;
                    var7 = var2 === var1;
 49:
                    var1 = {};
                    var2 = 'absolute';
                    var1['position'] = var2;
                    var5 = _closure1_slot14;
                    if(var7) { _fun0012_ip = 74; continue _fun0012 }
 69:
                    var2 = var5;
                    _fun0012_ip = 91; continue _fun0012;
 74:
                    var4 = 2;
                    var5 = var4 * var5;
                    var4 = 28;
                    var4 = var4 + var5;
                    var2 = -var4;
 91:
                    var1['top'] = var2;
                    var2 = _closure1_slot14;
                    var1['right'] = var2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.withSpring;
                    var2 = 1;
                    var4 = var2;
                    if(!var7) { _fun0012_ip = 141; continue _fun0012 }
 139:
                    var4 = 0;
 141:
                    var3 = _closure1_slot11;
                    var3 = var5.bind(var6)(var4, var3);
                    var1['opacity'] = var3;
                    var1['zIndex'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var7['controlsHidden'] = var14;
            var7['mode'] = var9;
            var9 = _closure1_slot12;
            var7['VoicePanelModes'] = var9;
            var9 = 28;
            var7['FLOATING_BAR_HEIGHT'] = var9;
            var9 = _closure1_slot14;
            var7['VOICE_PANEL_CARD_INNER_PADDING'] = var9;
            var9 = 20;
            var9 = var12[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.withSpring;
            var7['withSpring'] = var9;
            var9 = _closure1_slot11;
            var7['MODE_CHANGE_PHYSICS'] = var9;
            var1['__closure'] = var7;
            var7 = 4955785289185.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot28;
            var1['__initData'] = var7;
            var7 = var2.bind(var3)(var1);
            var3 = _closure1_slot18;
            var1 = 27;
            var1 = var12[var1];
            var2 = var11.bind(var4)(var1);
            var1 = {};
            var9 = 41;
            var9 = var12[var9];
            var9 = var11.bind(var4)(var9);
            var1['icon'] = var9;
            var1['onPress'] = var8;
            var1['style'] = var7;
            var1['layout'] = var5;
            var5 = null;
            if(!(var5 == var10)) { _fun0011_ip = 375; continue _fun0011 }
 316:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 22;
            var7 = var11[var5];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var11[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.77cRNz;
            var5 = var7.bind(var8)(var5);
            _fun0011_ip = 440; continue _fun0011;
 375:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 22;
            var8 = var11[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.OervdX;
            var6 = {};
            var6['targetName'] = var10;
            var5 = var8.bind(var9)(var7, var6);
 440:
            var1['accessibilityLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot29 = var4;
    var4 = {'mass': 0.1, 'stiffness': 400, 'overshootClamping': true};
    var _closure1_slot30 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx5(){const{flip}=this.__closure;return flip.get();}';
    var4['code'] = var8;
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = "function VoicePanelCardFloatingControlsTsx6(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}}";
    var4['code'] = var8;
    var _closure1_slot32 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx7(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}';
    var4['code'] = var8;
    var _closure1_slot33 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx8(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}';
    var4['code'] = var8;
    var _closure1_slot34 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx9(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}';
    var4['code'] = var8;
    var _closure1_slot35 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx10(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+"deg"}]};}';
    var4['code'] = var8;
    var _closure1_slot36 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = arg1;
            var15 = var2.controlsHidden;
            var _closure2_slot0 = var15;
            var2 = _closure1_slot22;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 13;
            var5 = var10[var2];
            var7 = var3.bind(var4)(var5);
            var6 = var7.useSharedValue;
            var5 = true;
            var17 = var6.bind(var7)(var5);
            var _closure2_slot1 = var17;
            var5 = var10[var2];
            var7 = var3.bind(var4)(var5);
            var6 = var7.useSharedValue;
            var5 = 0;
            var7 = var6.bind(var7)(var5);
            var _closure2_slot2 = var7;
            var5 = 19;
            var5 = var10[var5];
            var9 = var3.bind(var4)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var8 = var8.bind(var9)(var6, var5);
            var5 = var10[var2];
            var14 = var3.bind(var4)(var5);
            var12 = var14.useAnimatedReaction;
            var9 = function o() {
                var2 = _closure2_slot1;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = {};
            var5['flip'] = var17;
            var9['__closure'] = var5;
            var5 = 3692264004972.0;
            var9['__workletHash'] = var5;
            var5 = _closure1_slot31;
            var9['__initData'] = var5;
            var5 = function n(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 20;
                    var6 = var10[var1];
                    var1 = undefined;
                    var9 = var7.bind(var1)(var6);
                    var8 = var9.withSpring;
                    var7 = _closure1_slot1;
                    var6 = 42;
                    var6 = var10[var6];
                    var10 = var7.bind(var1)(var6);
                    var6 = arg1;
                    if(var6) { _fun0014_ip = 158; continue _fun0014 }
 66:
                    var7 = -10;
                    var6 = 10;
                    var18 = var10.bind(var1)(var7, var6);
                    var17 = _closure1_slot30;
                    var7 = function n(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0015_ip = 35; continue _fun0015 }
 6:
                            var3 = _closure2_slot1;
                            var2 = var3.set;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var1 = !var1;
                            var1 = var2.bind(var3)(var1);
 35:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = {};
                    var14 = _closure2_slot1;
                    var6['flip'] = var14;
                    var7['__closure'] = var6;
                    var6 = 3012732268426.0;
                    var7['__workletHash'] = var6;
                    var6 = _closure1_slot34;
                    var7['__initData'] = var6;
                    var16 = 'respect-motion-settings';
                    var19 = var9;
                    var15 = var7;
                    var6 = var19[var8](var18, var17, var16, var15, var14);
                    var6 = var3.bind(var4)(var6);
                    _fun0014_ip = 245; continue _fun0014;
 158:
                    var7 = 35;
                    var6 = 55;
                    var18 = var10.bind(var1)(var7, var6);
                    var17 = _closure1_slot30;
                    var5 = function o(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0016_ip = 35; continue _fun0016 }
 6:
                            var3 = _closure2_slot1;
                            var2 = var3.set;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var1 = !var1;
                            var1 = var2.bind(var3)(var1);
 35:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10 = {};
                    var11 = _closure2_slot1;
                    var10['flip'] = var11;
                    var5['__closure'] = var10;
                    var10 = 1799436949573.0;
                    var5['__workletHash'] = var10;
                    var2 = _closure1_slot33;
                    var5['__initData'] = var2;
                    var16 = 'respect-motion-settings';
                    var19 = var9;
                    var15 = var5;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
                    var2 = var3.bind(var4)(var2);
 245:
                    return var1;
                }
            };
            var16 = {};
            var16['angle'] = var7;
            var6 = 20;
            var6 = var10[var6];
            var6 = var3.bind(var4)(var6);
            var6 = var6.withSpring;
            var16['withSpring'] = var6;
            var6 = _closure1_slot1;
            var18 = 42;
            var18 = var10[var18];
            var18 = var6.bind(var4)(var18);
            var16['getRandomNumberInRange'] = var18;
            var18 = _closure1_slot30;
            var16['RING_PHYSICS'] = var18;
            var16['flip'] = var17;
            var5['__closure'] = var16;
            var16 = 1062406987047.0;
            var5['__workletHash'] = var16;
            var16 = _closure1_slot32;
            var5['__initData'] = var16;
            var5 = var12.bind(var14)(var9, var5);
            var5 = var10[var2];
            var12 = var3.bind(var4)(var5);
            var9 = var12.useAnimatedStyle;
            var5 = function I() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(!var3) { _fun0017_ip = 47; continue _fun0017 }
 23:
                    var4 = _closure1_slot14;
                    var3 = 2;
                    var4 = var3 * var4;
                    var3 = 28;
                    var3 = var3 + var4;
                    var2 = -var3;
 47:
                    var1['top'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['controlsHidden'] = var15;
            var15 = 28;
            var14['FLOATING_BAR_HEIGHT'] = var15;
            var15 = _closure1_slot14;
            var14['VOICE_PANEL_CARD_INNER_PADDING'] = var15;
            var5['__closure'] = var14;
            var14 = 2849048501597.0;
            var5['__workletHash'] = var14;
            var14 = _closure1_slot35;
            var5['__initData'] = var14;
            var12 = var9.bind(var12)(var5);
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function S() {
                var1 = {};
                var3 = {};
                var4 = _closure2_slot2;
                var2 = var4.get;
                var6 = var2.bind(var4)();
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var4 = '';
                var2 = 'deg';
                var2 = var5.bind(var4)(var6, var2);
                var3['rotate'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var5 = {};
            var5['angle'] = var7;
            var1['__closure'] = var5;
            var5 = 15798418788614.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot36;
            var1['__initData'] = var5;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot18;
            var5 = 43;
            var1 = var10[var5];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var7 = new Array(2);
            var7[0] = var12;
            var12 = var11.ringingIconContainer;
            var7[1] = var12;
            var1['style'] = var7;
            var7 = _closure1_slot18;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var8 = !var8;
            if(!var8) { _fun0013_ip = 519; continue _fun0013 }
 516:
            var8 = var9;
 519:
            var5['style'] = var8;
            var8 = 'none';
            var5['pointerEvents'] = var8;
            var10 = _closure1_slot18;
            var16 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 14;
            var8 = var14[var12];
            var9 = var16.bind(var4)(var8);
            var8 = {};
            var15 = 44;
            var15 = var14[var15];
            var15 = var16.bind(var4)(var15);
            var8['source'] = var15;
            var13 = _closure1_slot0;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.IconSizes;
            var12 = var12.SMALL_20;
            var8['size'] = var12;
            var11 = var11.ringingIcon;
            var8['style'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot37 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var8 = var1.controlsHidden;
        var4 = _closure1_slot18;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 45;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var6 = _closure1_slot15;
        var6 = var6.LIGHT;
        var1['theme'] = var6;
        var7 = _closure1_slot18;
        var6 = _closure1_slot37;
        var5 = {};
        var5['controlsHidden'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot38 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx11(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden,withSpring,MODE_CHANGE_PHYSICS,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;const hidden=!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();return{opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),top:hidden?FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING:0};}';
    var4['code'] = var8;
    var _closure1_slot39 = var4;
    var4 = {};
    var8 = "function VoicePanelCardFloatingControlsTsx12(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}";
    var4['code'] = var8;
    var _closure1_slot40 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var20 = var1.controlsHidden;
            var _closure2_slot0 = var20;
            var18 = var1.label;
            var12 = var1.layout;
            var21 = var1.participant;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot3;
            var2 = var3.useContext;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 17;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var2.bind(var3)(var1);
            var7 = var1.guildId;
            var5 = var1.channelId;
            var9 = var1.controlsSpecs;
            var _closure2_slot1 = var9;
            var24 = var1.focused;
            var _closure2_slot2 = var24;
            var15 = var1.connected;
            var _closure2_slot3 = var15;
            var23 = var1.mode;
            var _closure2_slot4 = var23;
            var11 = _closure1_slot0;
            var1 = 46;
            var1 = var6[var1];
            var2 = var11.bind(var4)(var1);
            var1 = var2.useIsScreenReaderEnabled;
            var10 = var1.bind(var2)();
            var _closure2_slot5 = var10;
            var1 = _closure1_slot22;
            var17 = var1.bind(var4)();
            var1 = 47;
            var1 = var6[var1];
            var3 = var11.bind(var4)(var1);
            var2 = var3.useIsUserSecureFramesVerified;
            var1 = {};
            var8 = 36;
            var6 = var6[var8];
            var11 = var11.bind(var4)(var6);
            var6 = var11.isStableParticipantWithUser;
            var11 = var6.bind(var11)(var21);
            var6 = undefined;
            if(!var11) { _fun0018_ip = 225; continue _fun0018 }
 215:
            var11 = var21.user;
            var6 = var11.id;
 225:
            var1['userId'] = var6;
            var1['channelId'] = var5;
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 31;
            var2 = var1[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var21.type;
            var6 = _closure1_slot0;
            var1 = var1[var8];
            var6 = var6.bind(var4)(var1);
            var1 = var6.isStableParticipantWithUser;
            var6 = var1.bind(var6)(var21);
            var1 = undefined;
            if(!var6) { _fun0018_ip = 302; continue _fun0018 }
 292:
            var6 = var21.user;
            var1 = var6.id;
 302:
            var30 = undefined;
            var29 = var2;
            var28 = var1;
            var27 = var7;
            var26 = var5;
            var22 = var30[var3](var29, var28, var27, var26, var25);
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 48;
            var2 = var1[var2];
            var2 = var3.bind(var4)(var2);
            var6 = var2.HangStatusExperiment;
            var5 = var6.useExperiment;
            var2 = {};
            var2['guildId'] = var7;
            var7 = 'FloatingParticipantLabel';
            var2['location'] = var7;
            var2 = var5.bind(var6)(var2);
            var5 = var2.enableHangStatus;
            var2 = var22.length;
            var6 = 1;
            var8 = var2 >= var6;
            _closure2_slot6 = var8;
            var7 = var22.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 31;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.VoicePanelCardUserStateIconType;
                var1 = var1.STREAM_ICON;
                var1 = var2 !== var1;
                return var1;
            };
            var2 = var7.bind(var22)(var2);
            var2 = var2.length;
            var25 = var2 >= var6;
            _closure2_slot7 = var25;
            var2 = 13;
            var6 = var1[var2];
            var11 = var3.bind(var4)(var6);
            var7 = var11.useAnimatedStyle;
            var6 = function c() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var3 = _closure2_slot7;
                    if(!var3) { _fun0019_ip = 29; continue _fun0019 }
 10:
                    var4 = _closure2_slot2;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var1 = null;
                    var3 = var1 == var4;
 29:
                    var4 = _closure2_slot3;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var4 = !var1;
                    if(var4) { _fun0019_ip = 78; continue _fun0019 }
 48:
                    var5 = _closure2_slot4;
                    var1 = var5.get;
                    var5 = var1.bind(var5)();
                    var1 = _closure1_slot12;
                    var1 = var1.PIP;
                    var4 = var5 === var1;
 78:
                    if(var4) { _fun0019_ip = 103; continue _fun0019 }
 81:
                    var1 = !var3;
                    if(var3) { _fun0019_ip = 100; continue _fun0019 }
 87:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var1 = var2.bind(var3)();
 100:
                    var4 = var1;
 103:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 20;
                    var5 = var5[var2];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.withSpring;
                    var5 = 1;
                    if(!var4) { _fun0019_ip = 143; continue _fun0019 }
 141:
                    var5 = 0;
 143:
                    var2 = _closure1_slot11;
                    var2 = var6.bind(var7)(var5, var2);
                    var1['opacity'] = var2;
                    var2 = 0;
                    if(!var4) { _fun0019_ip = 173; continue _fun0019 }
 162:
                    var4 = _closure1_slot14;
                    var3 = 28;
                    var2 = var3 + var4;
 173:
                    var1['top'] = var2;
                    return var1;
                }
            };
            var16 = {};
            var16['hasHiddenVisibleIcon'] = var25;
            var16['focused'] = var24;
            var16['connected'] = var15;
            var16['mode'] = var23;
            var23 = _closure1_slot12;
            var16['VoicePanelModes'] = var23;
            var16['controlsHidden'] = var20;
            var20 = 20;
            var20 = var1[var20];
            var20 = var3.bind(var4)(var20);
            var20 = var20.withSpring;
            var16['withSpring'] = var20;
            var20 = _closure1_slot11;
            var16['MODE_CHANGE_PHYSICS'] = var20;
            var20 = 28;
            var16['FLOATING_BAR_HEIGHT'] = var20;
            var20 = _closure1_slot14;
            var16['VOICE_PANEL_CARD_INNER_PADDING'] = var20;
            var6['__closure'] = var16;
            var16 = 3943439475112.0;
            var6['__workletHash'] = var16;
            var16 = _closure1_slot39;
            var6['__initData'] = var16;
            var11 = var7.bind(var11)(var6);
            var2 = var1[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useAnimatedStyle;
            var2 = function u() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var3 = !var1;
                    if(var3) { _fun0020_ip = 77; continue _fun0020 }
 22:
                    var1 = _closure2_slot5;
                    var1 = !var1;
                    if(!var1) { _fun0020_ip = 67; continue _fun0020 }
 32:
                    var5 = _closure2_slot1;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var5 = var2.mode;
                    var2 = _closure1_slot13;
                    var2 = var2.HIDDEN;
                    var1 = var5 === var2;
 67:
                    if(!var1) { _fun0020_ip = 74; continue _fun0020 }
 70:
                    var1 = _closure2_slot6;
 74:
                    var3 = var1;
 77:
                    var1 = {};
                    var5 = 'auto';
                    var2 = var5;
                    if(!var3) { _fun0020_ip = 101; continue _fun0020 }
 89:
                    var4 = _closure2_slot6;
                    var2 = var5;
                    if(!var4) { _fun0020_ip = 101; continue _fun0020 }
 99:
                    var2 = 0;
 101:
                    var1['width'] = var2;
                    var2 = 0;
                    if(!var3) { _fun0020_ip = 116; continue _fun0020 }
 110:
                    var2 = -4;
 116:
                    var1['marginRight'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var7['connected'] = var15;
            var7['isScreenReaderEnabled'] = var10;
            var7['controlsSpecs'] = var9;
            var9 = _closure1_slot13;
            var7['VoicePanelControlsModes'] = var9;
            var7['hasIcon'] = var8;
            var8 = 4;
            var7['GAP'] = var8;
            var2['__closure'] = var7;
            var7 = 2980616778992.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot40;
            var2['__initData'] = var7;
            var16 = var3.bind(var6)(var2);
            var3 = _closure1_slot18;
            var2 = _closure1_slot1;
            var9 = 43;
            var1 = var1[var9];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            if(var5) { _fun0018_ip = 704; continue _fun0018 }
 696:
            var5 = var17.labelPositionContainer;
            _fun0018_ip = 710; continue _fun0018;
 704:
            var5 = var17.leftAlignedLabelPositionContainer;
 710:
            var1['style'] = var5;
            var1['layout'] = var12;
            var8 = 'box-none';
            var1['pointerEvents'] = var8;
            var7 = _closure1_slot19;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var15 = var17.labelOuterContainer;
            var10 = new Array(2);
            var10[0] = var15;
            var10[1] = var11;
            var5['style'] = var10;
            var5['pointerEvents'] = var8;
            var5['layout'] = var12;
            var10 = var22.length;
            var8 = 0;
            var10 = var10 > var8;
            if(!var10) { _fun0018_ip = 862; continue _fun0018 }
 799:
            var15 = _closure1_slot18;
            var11 = _closure1_slot1;
            var20 = _closure1_slot2;
            var8 = 33;
            var8 = var20[var8];
            var11 = var11.bind(var4)(var8);
            var8 = {};
            var20 = var17.initialIcons;
            var8['style'] = var20;
            var20 = var22.map;
            var19 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot18;
                var4 = _closure1_slot44;
                var3 = {};
                var3['icon'] = var1;
                var2 = var1.type;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var19 = var20.bind(var22)(var19);
            var8['children'] = var19;
            var10 = var15.bind(var4)(var11, var8);
 862:
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot19;
            var10 = _closure1_slot1;
            var19 = _closure1_slot2;
            var9 = var19[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var20 = var17.floatingContainer;
            var15 = new Array(2);
            var15[0] = var20;
            var15[1] = var16;
            var9['style'] = var15;
            var9['layout'] = var12;
            var16 = _closure1_slot18;
            var15 = _closure1_slot0;
            var12 = 49;
            var12 = var19[var12];
            var12 = var15.bind(var4)(var12);
            var15 = var12.Text;
            var12 = {'variant': 'heading-sm/semibold', 'color': 'always-white', 'lineClamp': 1, 'style': null, 'ellipsizeMode': 'tail'};
            var20 = 'always-white';
            var19 = var17.floatingText;
            var12['style'] = var19;
            var19 = _closure1_slot45;
            var19 = var19.bind(var4)(var22, var18);
            var12['accessibilityLabel'] = var19;
            var12['children'] = var18;
            var15 = var16.bind(var4)(var15, var12);
            var12 = new Array(3);
            var12[0] = var15;
            var16 = var21.type;
            var15 = _closure1_slot16;
            var15 = var15.USER;
            var15 = var16 === var15;
            if(!var15) { _fun0018_ip = 1082; continue _fun0018 }
 1031:
            var19 = _closure1_slot18;
            var18 = _closure1_slot1;
            var22 = _closure1_slot2;
            var16 = 50;
            var16 = var22[var16];
            var18 = var18.bind(var4)(var16);
            var16 = {};
            var21 = var21.user;
            var21 = var21.id;
            var16['userId'] = var21;
            var16['textColor'] = var20;
            var15 = var19.bind(var4)(var18, var16);
 1082:
            var12[1] = var15;
            if(!var13) { _fun0018_ip = 1196; continue _fun0018 }
 1089:
            var16 = _closure1_slot18;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var14 = 51;
            var14 = var21[var14];
            var14 = var20.bind(var4)(var14);
            var15 = var14.ShieldLockIcon;
            var14 = {};
            var17 = var17.secureFramesIcon;
            var14['style'] = var17;
            var17 = 'xs';
            var14['size'] = var17;
            var17 = 22;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.mR9cf3;
            var17 = var18.bind(var19)(var17);
            var14['accessibilityLabel'] = var17;
            var13 = var16.bind(var4)(var15, var14);
 1196:
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot41 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx13(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}';
    var4['code'] = var8;
    var _closure1_slot42 = var4;
    var4 = var7.memo;
    var2 = function FloatingControls(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var2 = arg1;
            var12 = var2.label;
            var10 = var2.participant;
            var _closure2_slot0 = var10;
            var9 = var2.isRinging;
            var5 = var2.showHangStatus;
            var19 = var2.speaking;
            var11 = var2.layout;
            var8 = _closure1_slot3;
            var6 = var8.useContext;
            var13 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 17;
            var2 = var3[var2];
            var4 = undefined;
            var2 = var13.bind(var4)(var2);
            var2 = var6.bind(var8)(var2);
            var13 = var2.guildId;
            var _closure2_slot1 = var13;
            var8 = var2.channelId;
            var22 = var2.controlsSpecs;
            var _closure2_slot2 = var22;
            var21 = var2.focused;
            var _closure2_slot3 = var21;
            var20 = var2.mode;
            var _closure2_slot4 = var20;
            var14 = _closure1_slot0;
            var2 = 19;
            var6 = var3[var2];
            var17 = var14.bind(var4)(var6);
            var16 = var17.useStateFromStores;
            var6 = _closure1_slot10;
            var15 = new Array(1);
            var15[0] = var6;
            var6 = function() {
                var2 = _closure1_slot10;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var16.bind(var17)(var15, var6);
            var18 = 36;
            var3 = var3[var18];
            var14 = var14.bind(var4)(var3);
            var3 = var14.isStableParticipantWithUser;
            var3 = var3.bind(var14)(var10);
            var3 = !var3;
            var17 = !var3;
            if(var3) { _fun0021_ip = 211; continue _fun0021 }
 205:
            var17 = var10.isSelf;
 211:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = var15[var2];
            var23 = var16.bind(var4)(var2);
            var14 = var23.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot9;
            var3[1] = var2;
            var2 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 36;
                    var2 = var1[var6];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var5 = var7.isStableActivityParticipant;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var7)(var4);
                    if(var4) { _fun0022_ip = 129; continue _fun0022 }
 46:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.isStableStreamParticipant;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var6)(var4);
                    var5 = !var4;
                    var4 = !var5;
                    if(var5) { _fun0022_ip = 127; continue _fun0022 }
 87:
                    var8 = _closure1_slot9;
                    var7 = var8.getActiveStreamForUser;
                    var5 = _closure2_slot0;
                    var5 = var5.user;
                    var6 = var5.id;
                    var5 = _closure2_slot1;
                    var6 = var7.bind(var8)(var6, var5);
                    var5 = null;
                    var4 = var5 != var6;
 127:
                    return var4;
 129:
                    var4 = _closure1_slot7;
                    var3 = var4.getCurrentEmbeddedActivity;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot0;
                    var2 = var2.applicationId;
                    var4 = null;
                    var4 = var4 == var3;
                    var1 = undefined;
                    if(var4) { _fun0022_ip = 168; continue _fun0022 }
 163:
                    var1 = var3.applicationId;
 168:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var14 = var14.bind(var23)(var3, var2);
            var3 = _closure1_slot1;
            var2 = 52;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var10.id;
            var8 = var3.bind(var4)(var13, var8, var2);
            var2 = 13;
            var2 = var15[var2];
            var3 = var16.bind(var4)(var2);
            var2 = var3.useDerivedValue;
            var1 = function h() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var4 = var1.mode;
                    var1 = _closure1_slot13;
                    var1 = var1.HIDDEN;
                    var1 = var4 === var1;
                    if(var1) { _fun0023_ip = 60; continue _fun0023 }
 41:
                    var5 = _closure2_slot3;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = null;
                    var1 = var4 != var5;
 60:
                    if(var1) { _fun0023_ip = 90; continue _fun0023 }
 63:
                    var4 = _closure2_slot4;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = _closure1_slot12;
                    var2 = var2.PIP;
                    var1 = var3 === var2;
 90:
                    return var1;
                }
            };
            var13 = {};
            var13['controlsSpecs'] = var22;
            var22 = _closure1_slot13;
            var13['VoicePanelControlsModes'] = var22;
            var13['focused'] = var21;
            var13['mode'] = var20;
            var20 = _closure1_slot12;
            var13['VoicePanelModes'] = var20;
            var1['__closure'] = var13;
            var13 = 16708205249554.0;
            var1['__workletHash'] = var13;
            var13 = _closure1_slot42;
            var1['__initData'] = var13;
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot19;
            var2 = _closure1_slot20;
            var1 = {};
            var15 = var15[var18];
            var16 = var16.bind(var4)(var15);
            var15 = var16.isStableParticipantWithUser;
            var15 = var15.bind(var16)(var10);
            if(!var15) { _fun0021_ip = 426; continue _fun0021 }
 423:
            var15 = var5;
 426:
            if(!var15) { _fun0021_ip = 479; continue _fun0021 }
 429:
            var18 = _closure1_slot18;
            var16 = _closure1_slot24;
            var5 = {};
            var20 = var10.user;
            var20 = var20.id;
            var5['userId'] = var20;
            var5['isSelf'] = var17;
            var5['controlsHidden'] = var13;
            var5['speaking'] = var19;
            var5['layout'] = var11;
            var15 = var18.bind(var4)(var16, var5);
 479:
            var5 = new Array(5);
            var5[0] = var15;
            if(!var9) { _fun0021_ip = 511; continue _fun0021 }
 490:
            var18 = _closure1_slot18;
            var16 = _closure1_slot38;
            var15 = {};
            var15['controlsHidden'] = var13;
            var9 = var18.bind(var4)(var16, var15);
 511:
            var5[1] = var9;
            var9 = var6;
            if(!var6) { _fun0021_ip = 524; continue _fun0021 }
 521:
            var9 = var14;
 524:
            if(!var9) { _fun0021_ip = 563; continue _fun0021 }
 527:
            var16 = _closure1_slot18;
            var15 = _closure1_slot27;
            var14 = {};
            var14['controlsHidden'] = var13;
            var14['participant'] = var10;
            var14['isSelf'] = var17;
            var14['layout'] = var11;
            var9 = var16.bind(var4)(var15, var14);
 563:
            var5[2] = var9;
            if(!var6) { _fun0021_ip = 573; continue _fun0021 }
 570:
            var6 = var8;
 573:
            if(!var6) { _fun0021_ip = 617; continue _fun0021 }
 576:
            var14 = _closure1_slot18;
            var9 = _closure1_slot29;
            var8 = {};
            var8['controlsHidden'] = var13;
            var15 = var10.id;
            var8['participantId'] = var15;
            var8['targetName'] = var12;
            var8['layout'] = var11;
            var6 = var14.bind(var4)(var9, var8);
 617:
            var5[3] = var6;
            var6 = null;
            var6 = var6 != var12;
            if(!var6) { _fun0021_ip = 665; continue _fun0021 }
 630:
            var9 = _closure1_slot18;
            var8 = _closure1_slot41;
            var7 = {};
            var7['controlsHidden'] = var13;
            var7['label'] = var12;
            var7['layout'] = var11;
            var7['participant'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 665:
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 53;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();