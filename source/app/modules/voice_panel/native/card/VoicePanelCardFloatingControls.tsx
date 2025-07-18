// app/modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function StreamIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.voicePlatform;
            var5 = _closure1_slot20;
            var4 = undefined;
            var5 = var5.bind(var4)();
            var10 = _closure1_slot3;
            var9 = var10.useContext;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var9.bind(var10)(var6);
            var11 = var6.controlsSpecs;
            var _closure2_slot0 = var11;
            var9 = _closure1_slot0;
            var6 = 12;
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
                    var1 = _closure1_slot11;
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
            var11 = _closure1_slot11;
            var10['VoicePanelControlsModes'] = var11;
            var11 = 4;
            var10['GAP'] = var11;
            var2['__closure'] = var10;
            var10 = 3270040588948.0;
            var2['__workletHash'] = var10;
            var10 = _closure1_slot21;
            var2['__initData'] = var10;
            var6 = var6.bind(var9)(var2);
            var2 = 17;
            var2 = var8[var2];
            var7 = var7.bind(var4)(var2);
            var2 = _closure1_slot15;
            var2 = var2.XBOX;
            if(!(var3 !== var2)) { _fun0001_ip = 221; continue _fun0001 }
 185:
            var2 = _closure1_slot15;
            var2 = var2.MOBILE;
            if(!(var3 === var2)) { _fun0001_ip = 241; continue _fun0001 }
 199:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 19;
            var2 = var8[var2];
            var7 = var3.bind(var4)(var2);
            _fun0001_ip = 241; continue _fun0001;
 221:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 18;
            var2 = var8[var2];
            var7 = var3.bind(var4)(var2);
 241:
            var3 = _closure1_slot16;
            var2 = _closure1_slot19;
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
    var _closure1_slot39 = var1;
    var1 = function AnimatedLabelIcon(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.icon;
            var2 = _closure1_slot20;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var3 = var5.type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 20;
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
            var6 = _closure1_slot16;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var10.iconContainer;
            var2['style'] = var7;
            var7 = var5.onPress;
            var2['onPress'] = var7;
            var9 = _closure1_slot16;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 23;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.CircleWarningIcon;
            var7 = {};
            var11 = 'xs';
            var7['size'] = var11;
            var12 = _closure1_slot1;
            var11 = 15;
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
            var6 = _closure1_slot16;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 22;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var7 = var10.iconContainer;
            var2['style'] = var7;
            var9 = _closure1_slot16;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var5.onPress;
            var7['onPress'] = var11;
            var11 = 12;
            var7['hitSlop'] = var11;
            var13 = _closure1_slot16;
            var12 = _closure1_slot0;
            var11 = 21;
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
            var6 = _closure1_slot16;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var10.iconContainer;
            var2['style'] = var7;
            var7 = var5.onPress;
            var2['onPress'] = var7;
            var9 = _closure1_slot16;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 21;
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
            var3 = _closure1_slot16;
            var2 = _closure1_slot39;
            var1 = {};
            var5 = var5.voicePlatform;
            var1['voicePlatform'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot40 = var1;
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
                var1 = 20;
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
                var1 = 20;
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
            var7 = 25;
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
            var2 = 24;
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
            var1 = 24;
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
            var1 = 24;
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
    var _closure1_slot41 = var1;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Platform;
    var4 = var4.Pressable;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MODE_CHANGE_PHYSICS;
    var _closure1_slot9 = var8;
    var4 = var4.VoicePanelModes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VOICE_PANEL_CARD_INNER_PADDING;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ParticipantTypes;
    var _closure1_slot14 = var8;
    var4 = var4.VoicePlatforms;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot16 = var8;
    var8 = var4.jsxs;
    var _closure1_slot17 = var8;
    var4 = var4.Fragment;
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var9 = var12.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 13;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var4 = 14;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'left': 8, 'right': 8, 'bottom': 8, 'justifyContent': 'center', 'alignItems': 'center', 'marginHorizontal': 8};
    var4['labelPositionContainer'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center', 'borderRadius': null, 'overflow': 'hidden', 'paddingHorizontal': 8, 'backgroundColor': null, 'height': 28, 'gap': 4};
    var11 = 15;
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
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_POSITIVE;
    var10['tintColor'] = var11;
    var4['ringingIcon'] = var10;
    var10 = {};
    var11 = -2;
    var10['marginEnd'] = var11;
    var4['secureFramesIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = "function VoicePanelCardFloatingControlsTsx2(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}";
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
            var2 = 16;
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
                var2 = 12;
                var2 = var9[var2];
                var7 = undefined;
                var3 = var8.bind(var7)(var2);
                var2 = var3.useAnimatedStyle;
                var1 = function n() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = _closure3_slot0;
                        var1 = var2.get;
                        var7 = var1.bind(var2)();
                        var1 = {};
                        var2 = 'absolute';
                        var1['position'] = var2;
                        var5 = _closure1_slot12;
                        if(var7) { _fun0006_ip = 41; continue _fun0006 }
 36:
                        var2 = var5;
                        _fun0006_ip = 58; continue _fun0006;
 41:
                        var4 = 2;
                        var5 = var4 * var5;
                        var4 = 28;
                        var4 = var4 + var5;
                        var2 = -var4;
 58:
                        var1['top'] = var2;
                        var2 = _closure1_slot12;
                        var1['left'] = var2;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 26;
                        var4 = var4[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.withSpring;
                        var2 = 1;
                        var4 = var2;
                        if(!var7) { _fun0006_ip = 108; continue _fun0006 }
 106:
                        var4 = 0;
 108:
                        var3 = _closure1_slot9;
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
                var6 = _closure1_slot12;
                var5['VOICE_PANEL_CARD_INNER_PADDING'] = var6;
                var6 = 26;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.withSpring;
                var5['withSpring'] = var6;
                var6 = _closure1_slot9;
                var5['MODE_CHANGE_PHYSICS'] = var6;
                var1['__closure'] = var5;
                var5 = 4080439075039.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot22;
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 27;
                    var3 = var1[var6];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var4 = var7.isStableStreamParticipant;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var7)(var3);
                    if(!var3) { _fun0007_ip = 143; continue _fun0007 }
 46:
                    var8 = _closure1_slot7;
                    var7 = var8.getStreamForUser;
                    var3 = _closure2_slot0;
                    var3 = var3.user;
                    var4 = var3.id;
                    var3 = _closure2_slot1;
                    var9 = var7.bind(var8)(var4, var3);
                    var3 = null;
                    if(!(var3 != var9)) { _fun0007_ip = 260; continue _fun0007 }
 89:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 28;
                    var3 = var10[var3];
                    var7 = var8.bind(var1)(var3);
                    var4 = var7.stopStream;
                    var3 = 29;
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
                    if(!var3) { _fun0007_ip = 258; continue _fun0007 }
 178:
                    var4 = _closure1_slot6;
                    var3 = var4.getCurrentEmbeddedActivity;
                    var7 = var3.bind(var4)();
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 30;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.leaveActivity;
                    var2 = {};
                    var6 = null;
                    var8 = var6 == var7;
                    var6 = undefined;
                    if(var8) { _fun0007_ip = 236; continue _fun0007 }
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
            var3 = _closure1_slot16;
            var1 = 31;
            var1 = var10[var1];
            var2 = var13.bind(var4)(var1);
            var1 = {};
            var12 = 32;
            var12 = var10[var12];
            var12 = var13.bind(var4)(var12);
            var1['icon'] = var12;
            var1['onPress'] = var11;
            var1['style'] = var8;
            var1['layout'] = var7;
            var8 = _closure1_slot0;
            var7 = 27;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isStableActivityParticipant;
            var9 = var7.bind(var8)(var9);
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 24;
            var7 = var11[var6];
            var7 = var10.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            if(var9) { _fun0005_ip = 280; continue _fun0005 }
 249:
            if(var5) { _fun0005_ip = 265; continue _fun0005 }
 252:
            var5 = var6.q3O3Jy;
            var5 = var7.bind(var8)(var5);
            _fun0005_ip = 278; continue _fun0005;
 265:
            var9 = var6.S5anIS;
            var5 = var7.bind(var8)(var9);
 278:
            _fun0005_ip = 291; continue _fun0005;
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
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = "function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}";
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            var3 = 16;
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
            var2 = 12;
            var2 = var12[var2];
            var3 = var13.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function c() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var7 = var2.bind(var3)();
                    if(var7) { _fun0009_ip = 49; continue _fun0009 }
 19:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure1_slot10;
                    var1 = var1.PIP;
                    var7 = var2 === var1;
 49:
                    var1 = {};
                    var2 = 'absolute';
                    var1['position'] = var2;
                    var5 = _closure1_slot12;
                    if(var7) { _fun0009_ip = 74; continue _fun0009 }
 69:
                    var2 = var5;
                    _fun0009_ip = 91; continue _fun0009;
 74:
                    var4 = 2;
                    var5 = var4 * var5;
                    var4 = 28;
                    var4 = var4 + var5;
                    var2 = -var4;
 91:
                    var1['top'] = var2;
                    var2 = _closure1_slot12;
                    var1['right'] = var2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.withSpring;
                    var2 = 1;
                    var4 = var2;
                    if(!var7) { _fun0009_ip = 141; continue _fun0009 }
 139:
                    var4 = 0;
 141:
                    var3 = _closure1_slot9;
                    var3 = var5.bind(var6)(var4, var3);
                    var1['opacity'] = var3;
                    var1['zIndex'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var7['controlsHidden'] = var14;
            var7['mode'] = var9;
            var9 = _closure1_slot10;
            var7['VoicePanelModes'] = var9;
            var9 = 28;
            var7['FLOATING_BAR_HEIGHT'] = var9;
            var9 = _closure1_slot12;
            var7['VOICE_PANEL_CARD_INNER_PADDING'] = var9;
            var9 = 26;
            var9 = var12[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.withSpring;
            var7['withSpring'] = var9;
            var9 = _closure1_slot9;
            var7['MODE_CHANGE_PHYSICS'] = var9;
            var1['__closure'] = var7;
            var7 = 12421495364262.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot24;
            var1['__initData'] = var7;
            var7 = var2.bind(var3)(var1);
            var3 = _closure1_slot16;
            var1 = 31;
            var1 = var12[var1];
            var2 = var11.bind(var4)(var1);
            var1 = {};
            var9 = 33;
            var9 = var12[var9];
            var9 = var11.bind(var4)(var9);
            var1['icon'] = var9;
            var1['onPress'] = var8;
            var1['style'] = var7;
            var1['layout'] = var5;
            var5 = null;
            if(!(var5 == var10)) { _fun0008_ip = 375; continue _fun0008 }
 316:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 24;
            var7 = var11[var5];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var11[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.77cRNz;
            var5 = var7.bind(var8)(var5);
            _fun0008_ip = 440; continue _fun0008;
 375:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 24;
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
    var _closure1_slot25 = var4;
    var4 = {'mass': 0.1, 'stiffness': 400, 'overshootClamping': true};
    var _closure1_slot26 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx4(){const{flip}=this.__closure;return flip.get();}';
    var4['code'] = var8;
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = "function VoicePanelCardFloatingControlsTsx5(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}}";
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx6(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx7(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx8(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}';
    var4['code'] = var8;
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx9(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+"deg"}]};}';
    var4['code'] = var8;
    var _closure1_slot32 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var2 = arg1;
            var15 = var2.controlsHidden;
            var _closure2_slot0 = var15;
            var2 = _closure1_slot20;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 12;
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
            var5 = 34;
            var5 = var10[var5];
            var9 = var3.bind(var4)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var1 = _closure1_slot5;
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
            var5 = 7663309832237.0;
            var9['__workletHash'] = var5;
            var5 = _closure1_slot27;
            var9['__initData'] = var5;
            var5 = function n(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 26;
                    var7 = var6[var1];
                    var1 = undefined;
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.withSpring;
                    var7 = _closure1_slot1;
                    var10 = 35;
                    var6 = var6[var10];
                    var7 = var7.bind(var1)(var6);
                    var6 = arg1;
                    if(var6) { _fun0011_ip = 158; continue _fun0011 }
 66:
                    var12 = -10;
                    var6 = 10;
                    var19 = var7.bind(var1)(var12, var6);
                    var18 = _closure1_slot26;
                    var12 = function n(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0012_ip = 35; continue _fun0012 }
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
                    var15 = _closure2_slot1;
                    var6['flip'] = var15;
                    var12['__closure'] = var6;
                    var6 = 1799436949573.0;
                    var12['__workletHash'] = var6;
                    var6 = _closure1_slot30;
                    var12['__initData'] = var6;
                    var17 = 'respect-motion-settings';
                    var20 = var9;
                    var16 = var12;
                    var6 = var20[var8](var19, var18, var17, var16, var15);
                    var6 = var3.bind(var4)(var6);
                    _fun0011_ip = 242; continue _fun0011;
 158:
                    var6 = 55;
                    var19 = var7.bind(var1)(var10, var6);
                    var18 = _closure1_slot26;
                    var5 = function o(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0013_ip = 35; continue _fun0013 }
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
                    var10 = 17264907521028.0;
                    var5['__workletHash'] = var10;
                    var2 = _closure1_slot29;
                    var5['__initData'] = var2;
                    var17 = 'respect-motion-settings';
                    var20 = var9;
                    var16 = var5;
                    var2 = var20[var8](var19, var18, var17, var16, var15);
                    var2 = var3.bind(var4)(var2);
 242:
                    return var1;
                }
            };
            var16 = {};
            var16['angle'] = var7;
            var6 = 26;
            var6 = var10[var6];
            var6 = var3.bind(var4)(var6);
            var6 = var6.withSpring;
            var16['withSpring'] = var6;
            var6 = _closure1_slot1;
            var18 = 35;
            var18 = var10[var18];
            var18 = var6.bind(var4)(var18);
            var16['getRandomNumberInRange'] = var18;
            var18 = _closure1_slot26;
            var16['RING_PHYSICS'] = var18;
            var16['flip'] = var17;
            var5['__closure'] = var16;
            var16 = 15646860695268.0;
            var5['__workletHash'] = var16;
            var16 = _closure1_slot28;
            var5['__initData'] = var16;
            var5 = var12.bind(var14)(var9, var5);
            var5 = var10[var2];
            var12 = var3.bind(var4)(var5);
            var9 = var12.useAnimatedStyle;
            var5 = function I() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(!var3) { _fun0014_ip = 47; continue _fun0014 }
 23:
                    var4 = _closure1_slot12;
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
            var15 = _closure1_slot12;
            var14['VOICE_PANEL_CARD_INNER_PADDING'] = var15;
            var5['__closure'] = var14;
            var14 = 726627995932.0;
            var5['__workletHash'] = var14;
            var14 = _closure1_slot31;
            var5['__initData'] = var14;
            var12 = var9.bind(var12)(var5);
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function C() {
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
            var5 = 791392364030.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot32;
            var1['__initData'] = var5;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot16;
            var5 = 36;
            var1 = var10[var5];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var7 = new Array(2);
            var7[0] = var12;
            var12 = var11.ringingIconContainer;
            var7[1] = var12;
            var1['style'] = var7;
            var7 = _closure1_slot16;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var8 = !var8;
            if(!var8) { _fun0010_ip = 517; continue _fun0010 }
 514:
            var8 = var9;
 517:
            var5['style'] = var8;
            var8 = 'none';
            var5['pointerEvents'] = var8;
            var10 = _closure1_slot16;
            var16 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 13;
            var8 = var14[var12];
            var9 = var16.bind(var4)(var8);
            var8 = {};
            var15 = 37;
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
    var _closure1_slot33 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var8 = var1.controlsHidden;
        var4 = _closure1_slot16;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 38;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var6 = _closure1_slot13;
        var6 = var6.LIGHT;
        var1['theme'] = var6;
        var7 = _closure1_slot16;
        var6 = _closure1_slot33;
        var5 = {};
        var5['controlsHidden'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot34 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx10(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden,withSpring,MODE_CHANGE_PHYSICS,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;const hidden=!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();return{opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),top:hidden?FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING:0};}';
    var4['code'] = var8;
    var _closure1_slot35 = var4;
    var4 = {};
    var8 = "function VoicePanelCardFloatingControlsTsx11(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}";
    var4['code'] = var8;
    var _closure1_slot36 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var16 = var1.controlsHidden;
            var _closure2_slot0 = var16;
            var18 = var1.label;
            var12 = var1.layout;
            var21 = var1.participant;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot3;
            var2 = var3.useContext;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 16;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var2.bind(var3)(var1);
            var6 = var1.guildId;
            var5 = var1.channelId;
            var8 = var1.controlsSpecs;
            var _closure2_slot1 = var8;
            var23 = var1.focused;
            var _closure2_slot2 = var23;
            var10 = var1.connected;
            var _closure2_slot3 = var10;
            var20 = var1.mode;
            var _closure2_slot4 = var20;
            var13 = _closure1_slot0;
            var1 = 39;
            var1 = var7[var1];
            var2 = var13.bind(var4)(var1);
            var1 = var2.useIsScreenReaderEnabled;
            var9 = var1.bind(var2)();
            var _closure2_slot5 = var9;
            var1 = _closure1_slot20;
            var17 = var1.bind(var4)();
            var1 = 40;
            var1 = var7[var1];
            var3 = var13.bind(var4)(var1);
            var2 = var3.useIsUserSecureFramesVerified;
            var1 = {};
            var11 = 27;
            var7 = var7[var11];
            var13 = var13.bind(var4)(var7);
            var7 = var13.isStableParticipantWithUser;
            var13 = var7.bind(var13)(var21);
            var7 = undefined;
            if(!var13) { _fun0015_ip = 225; continue _fun0015 }
 215:
            var13 = var21.user;
            var7 = var13.id;
 225:
            var1['userId'] = var7;
            var1['channelId'] = var5;
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 20;
            var2 = var1[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var21.type;
            var7 = _closure1_slot0;
            var1 = var1[var11];
            var7 = var7.bind(var4)(var1);
            var1 = var7.isStableParticipantWithUser;
            var7 = var1.bind(var7)(var21);
            var1 = undefined;
            if(!var7) { _fun0015_ip = 302; continue _fun0015 }
 292:
            var7 = var21.user;
            var1 = var7.id;
 302:
            var29 = undefined;
            var28 = var2;
            var27 = var1;
            var26 = var6;
            var25 = var5;
            var22 = var29[var3](var28, var27, var26, var25, var24);
            var1 = var22.length;
            var2 = 1;
            var7 = var1 >= var2;
            _closure2_slot6 = var7;
            var3 = var22.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.VoicePanelCardUserStateIconType;
                var1 = var1.STREAM_ICON;
                var1 = var2 !== var1;
                return var1;
            };
            var1 = var3.bind(var22)(var1);
            var1 = var1.length;
            var24 = var1 >= var2;
            _closure2_slot7 = var24;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 12;
            var3 = var5[var1];
            var11 = var2.bind(var4)(var3);
            var6 = var11.useAnimatedStyle;
            var3 = function c() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var3 = _closure2_slot7;
                    if(!var3) { _fun0016_ip = 29; continue _fun0016 }
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
                    if(var4) { _fun0016_ip = 78; continue _fun0016 }
 48:
                    var5 = _closure2_slot4;
                    var1 = var5.get;
                    var5 = var1.bind(var5)();
                    var1 = _closure1_slot10;
                    var1 = var1.PIP;
                    var4 = var5 === var1;
 78:
                    if(var4) { _fun0016_ip = 103; continue _fun0016 }
 81:
                    var1 = !var3;
                    if(var3) { _fun0016_ip = 100; continue _fun0016 }
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
                    var2 = 26;
                    var5 = var5[var2];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.withSpring;
                    var5 = 1;
                    if(!var4) { _fun0016_ip = 143; continue _fun0016 }
 141:
                    var5 = 0;
 143:
                    var2 = _closure1_slot9;
                    var2 = var6.bind(var7)(var5, var2);
                    var1['opacity'] = var2;
                    var2 = 0;
                    if(!var4) { _fun0016_ip = 173; continue _fun0016 }
 162:
                    var4 = _closure1_slot12;
                    var3 = 28;
                    var2 = var3 + var4;
 173:
                    var1['top'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var15['hasHiddenVisibleIcon'] = var24;
            var15['focused'] = var23;
            var15['connected'] = var10;
            var15['mode'] = var20;
            var20 = _closure1_slot10;
            var15['VoicePanelModes'] = var20;
            var15['controlsHidden'] = var16;
            var16 = 26;
            var16 = var5[var16];
            var16 = var2.bind(var4)(var16);
            var16 = var16.withSpring;
            var15['withSpring'] = var16;
            var16 = _closure1_slot9;
            var15['MODE_CHANGE_PHYSICS'] = var16;
            var16 = 28;
            var15['FLOATING_BAR_HEIGHT'] = var16;
            var16 = _closure1_slot12;
            var15['VOICE_PANEL_CARD_INNER_PADDING'] = var16;
            var3['__closure'] = var15;
            var15 = 6051665012297.0;
            var3['__workletHash'] = var15;
            var15 = _closure1_slot35;
            var3['__initData'] = var15;
            var11 = var6.bind(var11)(var3);
            var1 = var5[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function _() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var3 = !var1;
                    if(var3) { _fun0017_ip = 77; continue _fun0017 }
 22:
                    var1 = _closure2_slot5;
                    var1 = !var1;
                    if(!var1) { _fun0017_ip = 67; continue _fun0017 }
 32:
                    var5 = _closure2_slot1;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var5 = var2.mode;
                    var2 = _closure1_slot11;
                    var2 = var2.HIDDEN;
                    var1 = var5 === var2;
 67:
                    if(!var1) { _fun0017_ip = 74; continue _fun0017 }
 70:
                    var1 = _closure2_slot6;
 74:
                    var3 = var1;
 77:
                    var1 = {};
                    var5 = 'auto';
                    var2 = var5;
                    if(!var3) { _fun0017_ip = 101; continue _fun0017 }
 89:
                    var4 = _closure2_slot6;
                    var2 = var5;
                    if(!var4) { _fun0017_ip = 101; continue _fun0017 }
 99:
                    var2 = 0;
 101:
                    var1['width'] = var2;
                    var2 = 0;
                    if(!var3) { _fun0017_ip = 116; continue _fun0017 }
 110:
                    var2 = -4;
 116:
                    var1['marginRight'] = var2;
                    return var1;
                }
            };
            var6 = {};
            var6['connected'] = var10;
            var6['isScreenReaderEnabled'] = var9;
            var6['controlsSpecs'] = var8;
            var8 = _closure1_slot11;
            var6['VoicePanelControlsModes'] = var8;
            var6['hasIcon'] = var7;
            var7 = 4;
            var6['GAP'] = var7;
            var1['__closure'] = var6;
            var6 = 9793041057235.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot36;
            var1['__initData'] = var6;
            var16 = var2.bind(var3)(var1);
            var3 = _closure1_slot16;
            var6 = _closure1_slot1;
            var9 = 36;
            var1 = var5[var9];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var7 = var17.labelPositionContainer;
            var1['style'] = var7;
            var1['layout'] = var12;
            var8 = 'box-none';
            var1['pointerEvents'] = var8;
            var7 = _closure1_slot17;
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
            if(!var10) { _fun0015_ip = 792; continue _fun0015 }
 729:
            var15 = _closure1_slot16;
            var11 = _closure1_slot1;
            var20 = _closure1_slot2;
            var8 = 22;
            var8 = var20[var8];
            var11 = var11.bind(var4)(var8);
            var8 = {};
            var20 = var17.initialIcons;
            var8['style'] = var20;
            var20 = var22.map;
            var19 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot16;
                var4 = _closure1_slot40;
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
 792:
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot17;
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
            var16 = _closure1_slot16;
            var15 = _closure1_slot0;
            var12 = 41;
            var12 = var19[var12];
            var12 = var15.bind(var4)(var12);
            var15 = var12.Text;
            var12 = {'variant': 'heading-sm/semibold', 'color': 'always-white', 'lineClamp': 1, 'style': null, 'ellipsizeMode': 'tail'};
            var20 = 'always-white';
            var19 = var17.floatingText;
            var12['style'] = var19;
            var19 = _closure1_slot41;
            var19 = var19.bind(var4)(var22, var18);
            var12['accessibilityLabel'] = var19;
            var12['children'] = var18;
            var15 = var16.bind(var4)(var15, var12);
            var12 = new Array(3);
            var12[0] = var15;
            var16 = var21.type;
            var15 = _closure1_slot14;
            var15 = var15.USER;
            var15 = var16 === var15;
            if(!var15) { _fun0015_ip = 1012; continue _fun0015 }
 961:
            var19 = _closure1_slot16;
            var18 = _closure1_slot1;
            var22 = _closure1_slot2;
            var16 = 42;
            var16 = var22[var16];
            var18 = var18.bind(var4)(var16);
            var16 = {};
            var21 = var21.user;
            var21 = var21.id;
            var16['userId'] = var21;
            var16['textColor'] = var20;
            var15 = var19.bind(var4)(var18, var16);
 1012:
            var12[1] = var15;
            if(!var13) { _fun0015_ip = 1126; continue _fun0015 }
 1019:
            var16 = _closure1_slot16;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var14 = 43;
            var14 = var21[var14];
            var14 = var20.bind(var4)(var14);
            var15 = var14.ShieldLockIcon;
            var14 = {};
            var17 = var17.secureFramesIcon;
            var14['style'] = var17;
            var17 = 'xs';
            var14['size'] = var17;
            var17 = 24;
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
 1126:
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
    var _closure1_slot37 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardFloatingControlsTsx12(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}';
    var4['code'] = var8;
    var _closure1_slot38 = var4;
    var4 = var7.memo;
    var2 = function FloatingControls(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var2 = arg1;
            var12 = var2.label;
            var10 = var2.participant;
            var _closure2_slot0 = var10;
            var9 = var2.isRinging;
            var11 = var2.layout;
            var5 = _closure1_slot3;
            var3 = var5.useContext;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var2 = var3.bind(var5)(var2);
            var19 = var2.guildId;
            var _closure2_slot1 = var19;
            var18 = var2.channelId;
            var16 = var2.controlsSpecs;
            var _closure2_slot2 = var16;
            var15 = var2.focused;
            var _closure2_slot3 = var15;
            var13 = var2.mode;
            var _closure2_slot4 = var13;
            var5 = _closure1_slot0;
            var2 = 34;
            var3 = var8[var2];
            var17 = var5.bind(var4)(var3);
            var14 = var17.useStateFromStores;
            var3 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot8;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var14.bind(var17)(var6, var3);
            var3 = 27;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.isStableParticipantWithUser;
            var3 = var3.bind(var5)(var10);
            var3 = !var3;
            var17 = !var3;
            if(var3) { _fun0018_ip = 199; continue _fun0018 }
 193:
            var17 = var10.isSelf;
 199:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = var5[var2];
            var20 = var3.bind(var4)(var2);
            var14 = var20.useStateFromStores;
            var2 = _closure1_slot6;
            var8 = new Array(2);
            var8[0] = var2;
            var2 = _closure1_slot7;
            var8[1] = var2;
            var2 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 27;
                    var2 = var1[var6];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var5 = var7.isStableActivityParticipant;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var7)(var4);
                    if(var4) { _fun0019_ip = 129; continue _fun0019 }
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
                    if(var5) { _fun0019_ip = 127; continue _fun0019 }
 87:
                    var8 = _closure1_slot7;
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
                    var4 = _closure1_slot6;
                    var3 = var4.getCurrentEmbeddedActivity;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot0;
                    var2 = var2.applicationId;
                    var4 = null;
                    var4 = var4 == var3;
                    var1 = undefined;
                    if(var4) { _fun0019_ip = 168; continue _fun0019 }
 163:
                    var1 = var3.applicationId;
 168:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var14 = var14.bind(var20)(var8, var2);
            var8 = _closure1_slot1;
            var2 = 44;
            var2 = var5[var2];
            var8 = var8.bind(var4)(var2);
            var2 = var10.id;
            var8 = var8.bind(var4)(var19, var18, var2);
            var2 = 12;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useDerivedValue;
            var1 = function I() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var4 = var1.mode;
                    var1 = _closure1_slot11;
                    var1 = var1.HIDDEN;
                    var1 = var4 === var1;
                    if(var1) { _fun0020_ip = 60; continue _fun0020 }
 41:
                    var5 = _closure2_slot3;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = null;
                    var1 = var4 != var5;
 60:
                    if(var1) { _fun0020_ip = 90; continue _fun0020 }
 63:
                    var4 = _closure2_slot4;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = _closure1_slot10;
                    var2 = var2.PIP;
                    var1 = var3 === var2;
 90:
                    return var1;
                }
            };
            var5 = {};
            var5['controlsSpecs'] = var16;
            var16 = _closure1_slot11;
            var5['VoicePanelControlsModes'] = var16;
            var5['focused'] = var15;
            var5['mode'] = var13;
            var13 = _closure1_slot10;
            var5['VoicePanelModes'] = var13;
            var1['__closure'] = var5;
            var5 = 3747005516083.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot38;
            var1['__initData'] = var5;
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot17;
            var2 = _closure1_slot18;
            var1 = {};
            if(!var9) { _fun0018_ip = 412; continue _fun0018 }
 391:
            var16 = _closure1_slot16;
            var15 = _closure1_slot34;
            var5 = {};
            var5['controlsHidden'] = var13;
            var9 = var16.bind(var4)(var15, var5);
 412:
            var5 = new Array(4);
            var5[0] = var9;
            var9 = var6;
            if(!var6) { _fun0018_ip = 429; continue _fun0018 }
 426:
            var9 = var14;
 429:
            if(!var9) { _fun0018_ip = 468; continue _fun0018 }
 432:
            var16 = _closure1_slot16;
            var15 = _closure1_slot23;
            var14 = {};
            var14['controlsHidden'] = var13;
            var14['participant'] = var10;
            var14['isSelf'] = var17;
            var14['layout'] = var11;
            var9 = var16.bind(var4)(var15, var14);
 468:
            var5[1] = var9;
            if(!var6) { _fun0018_ip = 478; continue _fun0018 }
 475:
            var6 = var8;
 478:
            if(!var6) { _fun0018_ip = 522; continue _fun0018 }
 481:
            var14 = _closure1_slot16;
            var9 = _closure1_slot25;
            var8 = {};
            var8['controlsHidden'] = var13;
            var15 = var10.id;
            var8['participantId'] = var15;
            var8['targetName'] = var12;
            var8['layout'] = var11;
            var6 = var14.bind(var4)(var9, var8);
 522:
            var5[2] = var6;
            var6 = null;
            var6 = var6 != var12;
            if(!var6) { _fun0018_ip = 570; continue _fun0018 }
 535:
            var9 = _closure1_slot16;
            var8 = _closure1_slot37;
            var7 = {};
            var7['controlsHidden'] = var13;
            var7['label'] = var12;
            var7['layout'] = var11;
            var7['participant'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 570:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();