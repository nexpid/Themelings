// app/modules/voice_calls/native/components/VoiceCall.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var11 = var4.StyleSheet;
    var4 = var4.TouchableWithoutFeedback;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot14 = var7;
    var10 = var4.Fonts;
    var4 = var4.InputModes;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var7 = {};
    var18 = var11.absoluteFillObject;
    var19 = var7;
    var11 = copyDataProperties(var19, var18);
    var13 = 'stretch';
    var11 = 'alignSelf';
    var7[var11] = var13;
    var13 = 'center';
    var11 = 'alignItems';
    var7[var11] = var13;
    var11 = 'justifyContent';
    var7[var11] = var13;
    var13 = 'column';
    var11 = 'flexDirection';
    var7[var11] = var13;
    var11 = 14;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var14 = var13.BACKGROUND_PRIMARY;
    var13 = 'backgroundColor';
    var7[var13] = var14;
    var4['container'] = var7;
    var7 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexWrap': 'wrap', 'marginBottom': 24, 'maxWidth': 300};
    var4['avatarGrid'] = var7;
    var7 = {'height': 96, 'width': 96, 'borderRadius': 48, 'borderWidth': 4, 'margin': 2, 'alignItems': 'center', 'justifyContent': 'center', 'borderColor': 'transparent'};
    var4['avatarContainer'] = var7;
    var7 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_360;
    var7['borderColor'] = var13;
    var4['avatarContainerSpeaking'] = var7;
    var7 = {'height': 80, 'width': 20, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginHorizontal': 8};
    var4['dotContainer'] = var7;
    var7 = {'height': 4, 'width': 4, 'borderRadius': 2, 'backgroundColor': null, 'opacity': 0.1};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var7['backgroundColor'] = var13;
    var4['dot'] = var7;
    var7 = {'color': null, 'fontSize': 24, 'fontFamily': null, 'textAlign': 'center', 'marginBottom': 8, 'marginHorizontal': 12};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var7['color'] = var13;
    var10 = var10.PRIMARY_BOLD;
    var7['fontFamily'] = var10;
    var4['channelTitle'] = var7;
    var10 = {'color': null, 'fontSize': 16, 'textAlign': 'center', 'marginBottom': 8};
    var7 = var6[var11];
    var7 = var12.bind(var1)(var7);
    var7 = var7.unsafe_rawColors;
    var7 = var7.PRIMARY_300;
    var10['color'] = var7;
    var7 = 16;
    var4['statusText'] = var10;
    var10 = {'backgroundColor': null, 'width': 80, 'height': 80, 'borderRadius': 40, 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = 15;
    var13 = var6[var13];
    var16 = var5.bind(var1)(var13);
    var15 = var16.hexWithOpacity;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var14 = var13.PRIMARY_700;
    var13 = 0.5;
    var13 = var15.bind(var16)(var14, var13);
    var10['backgroundColor'] = var13;
    var4['excessLengthAvatar'] = var10;
    var10 = {'color': null, 'fontSize': 24, 'lineHeight': 30, 'textAlign': 'center'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var10['color'] = var11;
    var4['excessLengthText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 1000;
    var4['duration'] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var9 = var8.Easing;
    var8 = var9.inOut;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Easing;
    var7 = var7.ease;
    var7 = var8.bind(var9)(var7);
    var4['easing'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function VoiceCallTsx1(){const{isME,ringing,disconnected,DISCONNECTED_OPACITY,ringingOpacity}=this.__closure;let opacity;if(isME||!ringing&&!disconnected){opacity=1;}else if(disconnected){opacity=DISCONNECTED_OPACITY;}else{ringingOpacity.set(ringingOpacity.get());}return{opacity:opacity};}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = function WrappedAvatar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var19 = var1.user;
            var18 = var1.channel;
            var _closure2_slot0 = var18;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var1 = _closure1_slot19;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.analyticsLocations;
            var _closure2_slot1 = var1;
            var1 = null;
            var3 = var1 == var19;
            var2 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var19.id;
case 2:
            _closure2_slot2 = var2;
            var4 = _closure1_slot8;
            var3 = var4.getId;
            var3 = var3.bind(var4)();
            var15 = var2 === var3;
            _closure2_slot3 = var15;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 19;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var7 = var2;
            if(!(var1 == var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot14;
case 4:
            var3['userId'] = var7;
            var10 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 20;
            var7 = var3[var7];
            var13 = var4.bind(var5)(var7);
            var12 = var13.useStateFromStoresObject;
            var7 = _closure1_slot13;
            var9 = new Array(3);
            var9[0] = var7;
            var7 = _closure1_slot7;
            var9[1] = var7;
            var7 = _closure1_slot11;
            var9[2] = var7;
            var8 = new Array(2);
            var8[0] = var18;
            var8[1] = var2;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var1 = var4 != var1;
                    var6 = null;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = _closure1_slot13;
                    var3 = var7.getVoiceStateForChannel;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = _closure2_slot2;
                    var6 = var3.bind(var7)(var2, var1);
case 6:
                    var7 = var4 == var6;
                    var1 = var4 == var6;
                    var2 = undefined;
                    if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = var6.isVoiceMuted;
                    var2 = var1.bind(var6)();
case 8:
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var1 = _closure2_slot2;
                    var1 = var4 != var1;
                    if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var10 = _closure1_slot11;
                    var9 = var10.isLocalMute;
                    var3 = _closure2_slot2;
                    var1 = var9.bind(var10)(var3);
case 12:
                    var2 = var1;
case 10:
                    var3 = var4 == var6;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = var6.isVoiceDeafened;
                    var1 = var3.bind(var6)();
case 14:
                    var3 = var4 != var1;
                    if(!var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var3 = var1;
case 16:
                    var1 = _closure2_slot2;
                    var6 = var4 != var1;
                    var1 = null;
                    if(!var6) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var10 = _closure1_slot7;
                    var9 = var10.getParticipant;
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var5 = _closure2_slot2;
                    var1 = var9.bind(var10)(var6, var5);
case 18:
                    var4 = var4 == var1;
                    var8 = undefined;
                    if(var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var8 = var1.type;
case 20:
                    var4 = _closure1_slot16;
                    var6 = var4.USER;
                    var5 = var7;
                    var4 = false;
                    if(!(var8 === var6)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var1 = var1.ringing;
                    var6 = !var1;
                    if(!var6) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var6 = var7;
case 24:
                    var5 = var6;
                    var4 = var1;
case 22:
                    var1 = {};
                    var1['disconnected'] = var5;
                    var1['ringing'] = var4;
                    var1['deaf'] = var3;
                    var1['mute'] = var2;
                    return var1;
                }
            };
            var7 = var12.bind(var13)(var9, var7, var8);
            var12 = var7.disconnected;
            _closure2_slot4 = var12;
            var14 = var7.ringing;
            _closure2_slot5 = var14;
            var17 = var7.mute;
            var16 = var7.deaf;
            var7 = function useRingingOpacity(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.useSharedValue;
                var1 = 0.1;
                var1 = var4.bind(var5)(var1);
                var _closure3_slot1 = var1;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(2);
                var3[0] = var1;
                var3[1] = var6;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure3_slot0;
                        if(var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 16;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.cancelAnimation;
                        var2 = _closure3_slot1;
                        var2 = var3.bind(var4)(var2);
                        _fun0003_ip = 28; continue _fun0003;
case 26:
                        var3 = _closure3_slot1;
                        var1 = var3.set;
                        var8 = 0.1;
                        var1 = var1.bind(var3)(var8);
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 17;
                        var6 = var7[var1];
                        var4 = undefined;
                        var10 = var5.bind(var4)(var6);
                        var9 = var10.withTiming;
                        var6 = _closure1_slot20;
                        var2 = 1;
                        var11 = var9.bind(var10)(var2, var6);
                        var1 = var7[var1];
                        var2 = var5.bind(var4)(var1);
                        var1 = var2.withTiming;
                        var10 = var1.bind(var2)(var8, var6);
                        var1 = 16;
                        var2 = var7[var1];
                        var9 = var5.bind(var4)(var2);
                        var8 = var9.withRepeat;
                        var2 = var7[var1];
                        var6 = var5.bind(var4)(var2);
                        var2 = var6.withSequence;
                        var6 = var2.bind(var6)(var11, var10);
                        var2 = -1;
                        var6 = var8.bind(var9)(var6, var2);
                        var2 = var3.set;
                        var1 = var7[var1];
                        var5 = var5.bind(var4)(var1);
                        var4 = var5.withDelay;
                        var1 = 1000;
                        var1 = var4.bind(var5)(var1, var6);
                        var1 = var2.bind(var3)(var1);
case 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var9 = var7.bind(var5)(var14);
            _closure2_slot6 = var9;
            var13 = 16;
            var3 = var3[var13];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useAnimatedStyle;
            var3 = function s() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var4 = 1;
                    var2 = var4;
                    if(var3) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var3 = _closure2_slot5;
                    if(var3) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var3 = _closure2_slot4;
                    var2 = var4;
                    if(!var3) { _fun0004_ip = 29; continue _fun0004 }
case 31:
                    var3 = _closure2_slot4;
                    var2 = 0.1;
                    if(var3) { _fun0004_ip = 29; continue _fun0004 }
case 6:
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var5 = _closure2_slot6;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var3.bind(var4)(var1);
                    var2 = undefined;
case 29:
                    var1 = {};
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['isME'] = var15;
            var8['ringing'] = var14;
            var8['disconnected'] = var12;
            var12 = 0.1;
            var8['DISCONNECTED_OPACITY'] = var12;
            var8['ringingOpacity'] = var9;
            var3['__closure'] = var8;
            var8 = 6729353890052.0;
            var3['__workletHash'] = var8;
            var8 = _closure1_slot21;
            var3['__initData'] = var8;
            var12 = var4.bind(var7)(var3);
            if(!(var1 != var2)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var23 = {'direction': null, 'radius': 17, 'inset': 4294967291};
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 21;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.CutoutDirection;
            var2 = var2.BOTTOM_RIGHT;
            var23['direction'] = var2;
            var4 = _closure1_slot17;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = 'button';
            var2['accessibilityRole'] = var7;
            var8 = var1 == var19;
            var7 = undefined;
            if(var8) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var7 = var19.username;
case 35:
            var2['accessibilityLabel'] = var7;
            var6 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {'userId': null, 'channelId': null, 'disableMessage': false, 'disableCalls': true, 'isVoiceContext': true};
                var5 = _closure2_slot2;
                var2['userId'] = var5;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['channelId'] = var5;
                var4 = _closure2_slot1;
                var2['sourceAnalyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var6;
            var8 = _closure1_slot17;
            var7 = _closure1_slot5;
            var6 = {};
            var14 = var11.avatarContainer;
            var9 = new Array(2);
            var9[0] = var14;
            if(!var10) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var10 = var11.avatarContainerSpeaking;
case 37:
            var9[1] = var10;
            var6['style'] = var9;
            var11 = _closure1_slot17;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var9 = var10.bind(var5)(var9);
            var10 = var9.View;
            var9 = {};
            var9['style'] = var12;
            var13 = var1 != var19;
            var12 = null;
            if(!var13) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var15 = _closure1_slot17;
            var14 = _closure1_slot1;
            var13 = _closure1_slot2;
            var22 = 23;
            var13 = var13[var22];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            if(var17) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var21 = undefined;
            if(!var16) { _fun0001_ip = 43; continue _fun0001 }
case 41:
            var21 = var23;
case 43:
            var13['cutout'] = var21;
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var22];
            var20 = var21.bind(var5)(var20);
            var20 = var20.AvatarSizes;
            var20 = var20.XXLARGE;
            var13['size'] = var20;
            var13['user'] = var19;
            var18 = var18.guild_id;
            var13['guildId'] = var18;
            var13['mute'] = var17;
            var13['deaf'] = var16;
            var12 = var15.bind(var5)(var14, var13);
case 39:
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 33:
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var4 = function AvatarGrid(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var1 = _closure1_slot19;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var4 = var12.id;
            var _closure2_slot1 = var4;
            var15 = _closure1_slot4;
            var6 = var15.useState;
            var1 = new Array(0);
            var8 = var6.bind(var15)(var1);
            var6 = _closure1_slot3;
            var1 = 2;
            var1 = var6.bind(var5)(var8, var1);
            var10 = 0;
            var14 = var1[var10];
            var11 = 1;
            var1 = var1[var11];
            var _closure2_slot2 = var1;
            var8 = _closure1_slot8;
            var6 = var8.getId;
            var8 = var6.bind(var8)();
            var _closure2_slot3 = var8;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 20;
            var6 = var17[var9];
            var19 = var16.bind(var5)(var6);
            var18 = var19.useStateFromStores;
            var6 = _closure1_slot11;
            var13 = new Array(1);
            var13[0] = var6;
            var6 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getMode;
                var2 = var2.bind(var3)();
                var1 = _closure1_slot15;
                var1 = var1.PUSH_TO_TALK;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var18.bind(var19)(var13, var6);
            var18 = _closure1_slot1;
            var13 = 24;
            var13 = var17[var13];
            var13 = var18.bind(var5)(var13);
            var13 = var13.bind(var5)();
            var13 = var13.height;
            var9 = var17[var9];
            var18 = var16.bind(var5)(var9);
            var17 = var18.useStateFromStoresArray;
            var9 = _closure1_slot10;
            var16 = new Array(3);
            var16[0] = var9;
            var9 = _closure1_slot9;
            var16[1] = var9;
            var9 = _closure1_slot13;
            var16[2] = var9;
            var9 = new Array(2);
            var9[0] = var4;
            var9[1] = var8;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = _closure1_slot10;
                    var3 = var5.getChannel;
                    var2 = _closure2_slot1;
                    var3 = var3.bind(var5)(var2);
                    var5 = null;
                    if(!(var5 != var3)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var2 = var3.isPrivate;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0006_ip = 44; continue _fun0006 }
case 46:
                    var2 = global;
                    var8 = var2.Set;
                    var12 = var3.recipients;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var13 = var7;
                    var6 = new var13[var8](var12, var11);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var _closure3_slot0 = var6;
                    var8 = _closure1_slot9;
                    var7 = var8.getCall;
                    var6 = var3.id;
                    var6 = var7.bind(var8)(var6);
                    var8 = var5 == var6;
                    var7 = undefined;
                    if(var8) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var7 = var6.ringing;
case 47:
                    if(!(var5 == var7)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var7 = new Array(0);
case 49:
                    if(!(var5 == var3)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var6 = new Array(0);
                    _fun0006_ip = 53; continue _fun0006;
case 51:
                    var8 = var2.Object;
                    var5 = var8.keys;
                    var10 = _closure1_slot13;
                    var9 = var10.getVoiceStatesForChannel;
                    var4 = var3.id;
                    var4 = var9.bind(var10)(var4);
                    var6 = var5.bind(var8)(var4);
case 53:
                    var5 = var2.Set;
                    var4 = var6.concat;
                    var3 = var3.recipients;
                    var12 = var4.bind(var6)(var7, var3);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var13 = var4;
                    var3 = new var13[var5](var12, var11);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = var2.Array;
                    var2 = var3.from;
                    var3 = var2.bind(var3)(var4);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var4 = arg1;
                            var1 = _closure2_slot3;
                            var1 = var4 !== var1;
                            if(!var1) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                            var3 = _closure3_slot0;
                            var2 = var3.has;
                            var1 = var2.bind(var3)(var4);
case 54:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 44:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var16 = var17.bind(var18)(var16, var4, var9);
            var _closure2_slot4 = var16;
            var9 = var15.useEffect;
            var4 = new Array(2);
            var4[0] = var16;
            var4[1] = var1;
            var1 = function() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot4;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var9.bind(var15)(var1, var4);
            var1 = null;
            if(!(var1 != var12)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var4 = function createWrappedAvatar(arg1) {
                var5 = arg1;
                var4 = _closure1_slot17;
                var3 = _closure1_slot22;
                var2 = {};
                var6 = _closure2_slot0;
                var2['channel'] = var6;
                var6 = _closure1_slot12;
                var1 = var6.getUser;
                var1 = var1.bind(var6)(var5);
                var2['user'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var9 = new Array(0);
            var3 = var14.length;
            if(!(var11 !== var3)) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var3 = var14.length;
            if(!(var3 > var11)) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var3 = var14.map;
            var9 = var3.bind(var14)(var4);
            _fun0005_ip = 60; continue _fun0005;
case 58:
            var17 = _closure1_slot17;
            var16 = _closure1_slot25;
            var15 = {};
            var3 = 'threedotsavatar';
            var15 = var17.bind(var5)(var16, var15, var3);
            var3 = new Array(2);
            var3[0] = var15;
            var14 = var14[var10];
            var14 = var4.bind(var5)(var14);
            var3[1] = var14;
            var9 = var3;
case 60:
            var3 = 600;
            if(!(!(var13 < var3))) { _fun0005_ip = 62; continue _fun0005 }
case 63:
            var3 = 700;
            var14 = var13 < var3;
            var13 = 9;
            var3 = var13;
            if(!var14) { _fun0005_ip = 64; continue _fun0005 }
case 65:
            var3 = var13;
            if(!var6) { _fun0005_ip = 64; continue _fun0005 }
case 62:
            var3 = 6;
case 64:
            var6 = var9.unshift;
            var4 = var4.bind(var5)(var8);
            var4 = var6.bind(var9)(var4);
            var4 = var9.length;
            var6 = var9;
            if(!(var4 > var3)) { _fun0005_ip = 66; continue _fun0005 }
case 67:
            var4 = var9.length;
            var4 = var4 - var3;
            var8 = var9.slice;
            var3 = var3 - var11;
            var3 = var8.bind(var9)(var10, var3);
            var8 = var3.push;
            var11 = _closure1_slot17;
            var10 = _closure1_slot24;
            var9 = {};
            var9['channel'] = var12;
            var9['excessLength'] = var4;
            var4 = 'excesslengthavatar';
            var4 = var11.bind(var5)(var10, var9, var4);
            var4 = var8.bind(var3)(var4);
            var6 = var3;
case 66:
            var4 = _closure1_slot17;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.avatarGrid;
            var2['style'] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 56:
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var4 = function ExcessLengthAvatar(arg1) {
        var1 = arg1;
        var12 = var1.excessLength;
        var1 = var1.channel;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot19;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var3 = _closure1_slot17;
        var2 = _closure1_slot6;
        var1 = {};
        var6 = 'button';
        var1['accessibilityRole'] = var6;
        var5 = function onPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 25;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.openVoiceChannelActionSheet;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onPress'] = var5;
        var6 = _closure1_slot5;
        var5 = {};
        var7 = var11.avatarContainer;
        var5['style'] = var7;
        var7 = {};
        var9 = var11.excessLengthAvatar;
        var7['style'] = var9;
        var10 = _closure1_slot18;
        var9 = _closure1_slot1;
        var13 = _closure1_slot2;
        var8 = 26;
        var8 = var13[var8];
        var9 = var9.bind(var4)(var8);
        var8 = {};
        var11 = var11.excessLengthText;
        var8['style'] = var11;
        var11 = ['+'];
        var11[1] = var12;
        var8['children'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var7['children'] = var8;
        var7 = var3.bind(var4)(var6, var7);
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var4;
    var4 = function ThreeDotsAvatar() {
        var1 = _closure1_slot19;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot18;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var8.dotContainer;
        var1['style'] = var6;
        var7 = _closure1_slot17;
        var5 = {};
        var6 = var8.dot;
        var5['style'] = var6;
        var6 = var7.bind(var4)(var2, var5);
        var5 = new Array(3);
        var5[0] = var6;
        var6 = {};
        var9 = var8.dot;
        var6['style'] = var9;
        var6 = var7.bind(var4)(var2, var6);
        var5[1] = var6;
        var6 = {};
        var8 = var8.dot;
        var6['style'] = var8;
        var6 = var7.bind(var4)(var2, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var4;
    var4 = function CallStatus(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channel;
            var1 = _closure1_slot19;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 27;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var12.id;
            var1 = var2.bind(var4)(var1);
            var13 = var1.state;
            var3 = null;
            var1 = var12;
            if(!(var3 == var1)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var2 = {};
            var2['id'] = var3;
            var1 = var2;
case 68:
            var10 = var1.id;
            var3 = _closure1_slot18;
            var1 = _closure1_slot4;
            var2 = var1.Fragment;
            var1 = {};
            var8 = _closure1_slot17;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 28;
            var5 = var11[var5];
            var6 = var7.bind(var4)(var5);
            var5 = {};
            var14 = var9.statusText;
            var5['style'] = var14;
            var5['voiceState'] = var13;
            var5['channel'] = var12;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 29;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['channelId'] = var10;
            var9 = var9.statusText;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot26 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/components/VoiceCall.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var1 = arg1;
        var9 = var1.channel;
        var1 = _closure1_slot19;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var10 = _closure1_slot1;
        var13 = _closure1_slot2;
        var1 = 30;
        var1 = var13[var1];
        var1 = var10.bind(var4)(var1);
        var11 = var1.bind(var4)(var9);
        var3 = _closure1_slot18;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var12.container;
        var1['style'] = var5;
        var8 = _closure1_slot17;
        var5 = 31;
        var5 = var13[var5];
        var7 = var10.bind(var4)(var5);
        var5 = {};
        var14 = var9.id;
        var5['channelId'] = var14;
        var14 = var9.guild_id;
        var5['guildId'] = var14;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(4);
        var5[0] = var7;
        var14 = _closure1_slot23;
        var7 = {};
        var7['channel'] = var9;
        var7 = var8.bind(var4)(var14, var7);
        var5[1] = var7;
        var7 = 26;
        var7 = var13[var7];
        var10 = var10.bind(var4)(var7);
        var7 = {'numberOfLines': 2, 'ellipsizeMode': 'tail'};
        var12 = var12.channelTitle;
        var7['style'] = var12;
        var7['children'] = var11;
        var7 = var8.bind(var4)(var10, var7);
        var5[2] = var7;
        var7 = _closure1_slot26;
        var6 = {};
        var6['channel'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[3] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();