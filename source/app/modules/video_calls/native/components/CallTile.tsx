// app/modules/video_calls/native/components/CallTile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var4 = function StreamPreviewTile(arg1) {
        var1 = arg1;
        var9 = var1.participant;
        var7 = var1.style;
        var1 = _closure1_slot16;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var1 = var9.user;
        var8 = var1.id;
        var3 = _closure1_slot13;
        var2 = _closure1_slot5;
        var1 = {};
        var10 = var6.streamPreview;
        var6 = new Array(2);
        var6[0] = var10;
        var6[1] = var7;
        var1['style'] = var6;
        var7 = _closure1_slot13;
        var6 = _closure1_slot1;
        var10 = _closure1_slot2;
        var5 = 19;
        var5 = var10[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var9 = var9.stream;
        var9 = var9.guildId;
        var5['guildId'] = var9;
        var5['userId'] = var8;
        var8 = {};
        var8['aspectRatio'] = var4;
        var9 = 0;
        var8['borderRadius'] = var9;
        var5['style'] = var8;
        var8 = true;
        var5['disableTransition'] = var8;
        var8 = function onPress() {
            var2 = _closure1_slot8;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['onPress'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var4;
    var1 = function ParticipantIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.participant;
            var2 = _closure1_slot16;
            var5 = undefined;
            var6 = var2.bind(var5)();
            var3 = var1.type;
            var2 = _closure1_slot10;
            var2 = var2.STREAM;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.type;
            var2 = _closure1_slot10;
            var2 = var2.USER;
            var11 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.voicePlatform;
            var1 = _closure1_slot12;
            var1 = var1.MOBILE;
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot12;
            var1 = var1.XBOX;
            if(!(var1 !== var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = _closure1_slot12;
            var1 = var1.PLAYSTATION;
            if(!(var1 !== var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = _closure1_slot12;
            var1 = var1.QUEST;
            var11 = undefined;
            if(!(var1 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 12:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var11 = var2.bind(var5)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 10:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 23;
            var1 = var3[var1];
            var11 = var2.bind(var5)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 8:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 22;
            var1 = var3[var1];
            var11 = var2.bind(var5)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 6:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var11 = var2.bind(var5)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var11 = var2.bind(var5)(var1);
case 4:
            var1 = null;
            var2 = var1 == var11;
            if(var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = _closure1_slot13;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = 25;
            var2 = var9[var8];
            var2 = var10.bind(var5)(var2);
            var3 = var2.Icon;
            var2 = {};
            var2['source'] = var11;
            var8 = var9[var8];
            var8 = var10.bind(var5)(var8);
            var8 = var8.Icon;
            var8 = var8.Sizes;
            var8 = var8.REFRESH_SMALL_16;
            var2['size'] = var8;
            var8 = _closure1_slot1;
            var7 = 9;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.unsafe_rawColors;
            var7 = var7.WHITE;
            var2['color'] = var7;
            var6 = var6.titleIcon;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var2 = function TileOverlay(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var16 = var2.participant;
            var6 = var2.isActiveStream;
            var17 = var2.channel;
            var11 = var2.hasLeftSafeArea;
            var18 = var2.hasRightSafeArea;
            var20 = var2.hasBottomSafeArea;
            var3 = var2.hasTopSafeArea;
            var2 = _closure1_slot16;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var21 = _closure1_slot2;
            var2 = 11;
            var2 = var21[var2];
            var2 = var5.bind(var4)(var2);
            var5 = var2.bind(var4)();
            var19 = var5.bottom;
            var10 = var5.left;
            var2 = var5.top;
            var15 = var5.right;
            var8 = _closure1_slot3;
            var7 = var8.useContext;
            var22 = _closure1_slot0;
            var5 = 26;
            var5 = var21[var5];
            var5 = var22.bind(var4)(var5);
            var5 = var5.RevealContext;
            var5 = var7.bind(var8)(var5);
            var14 = var5.reveal;
            var _closure2_slot0 = var14;
            var5 = 27;
            var7 = var21[var5];
            var8 = var22.bind(var4)(var7);
            var7 = var8.useAnimatedStyle;
            var1 = function T() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var2 = var4[var2];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.withTiming;
                    var2 = _closure2_slot0;
                    var3 = 0;
                    if(!var2) { _fun0003_ip = 15; continue _fun0003 }
case 3:
                    var3 = 1;
case 15:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 25;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.STANDARD_EASING;
                    var2['easing'] = var6;
                    var6 = 250;
                    var2['duration'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var9 = {};
            var23 = 28;
            var23 = var21[var23];
            var23 = var22.bind(var4)(var23);
            var23 = var23.withTiming;
            var9['withTiming'] = var23;
            var9['reveal'] = var14;
            var14 = 25;
            var21 = var21[var14];
            var21 = var22.bind(var4)(var21);
            var21 = var21.STANDARD_EASING;
            var9['STANDARD_EASING'] = var21;
            var1['__closure'] = var9;
            var9 = 15640123774063.0;
            var1['__workletHash'] = var9;
            var9 = _closure1_slot17;
            var1['__initData'] = var9;
            var7 = var7.bind(var8)(var1);
            var8 = {};
            var9 = 0;
            if(!var20) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var9 = var19;
case 16:
            var8['bottom'] = var9;
            var9 = 0;
            if(!var18) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var9 = var15;
case 18:
            var8['right'] = var9;
            var9 = 0;
            if(!var11) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var9 = var10;
case 20:
            var8['left'] = var9;
            var1 = 0;
            if(!var3) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var1 = var2;
case 22:
            var8['top'] = var1;
            var3 = _closure1_slot15;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = 'none';
            var1['pointerEvents'] = var5;
            var5 = _closure1_slot4;
            var9 = var5.absoluteFill;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var8;
            var5[2] = var7;
            var1['style'] = var5;
            if(!var6) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var5 = {};
            var9 = var12.liveContainer;
            var5['style'] = var9;
            var11 = _closure1_slot13;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var14];
            var9 = var10.bind(var4)(var9);
            var10 = var9.LiveTag;
            var9 = {};
            var9 = var11.bind(var4)(var10, var9);
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 24:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var12.usernamePosition;
            var6['style'] = var9;
            var11 = _closure1_slot15;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var12.usernameContainer;
            var9['style'] = var12;
            var15 = _closure1_slot13;
            var14 = _closure1_slot19;
            var12 = {};
            var12['participant'] = var16;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot13;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var13 = 29;
            var13 = var18[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['channel'] = var17;
            var13['participant'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var1 = global;
    var10 = var1.Object;
    var6 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var5);
    var1 = 0;
    var6 = var8[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var10 = var5.bind(var1)(var6);
    var _closure1_slot3 = var10;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.StyleSheet;
    var _closure1_slot4 = var6;
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.resetFocus;
    var _closure1_slot8 = var6;
    var5 = var5.toggleFocus;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.ParticipantTypes;
    var _closure1_slot10 = var6;
    var6 = var5.isStreamParticipant;
    var _closure1_slot11 = var6;
    var5 = var5.VoicePlatforms;
    var _closure1_slot12 = var5;
    var15 = 6;
    var5 = var8[var15];
    var5 = var7.bind(var1)(var5);
    var6 = var5.jsx;
    var _closure1_slot13 = var6;
    var6 = var5.Fragment;
    var _closure1_slot14 = var6;
    var5 = var5.jsxs;
    var _closure1_slot15 = var5;
    var5 = 7;
    var5 = var8[var5];
    var11 = var7.bind(var1)(var5);
    var6 = var11.createStyles;
    var5 = {};
    var13 = 8;
    var12 = {'position': 'absolute', 'top': 8, 'right': 8};
    var5['liveContainer'] = var12;
    var12 = {};
    var12['marginRight'] = var15;
    var5['titleIcon'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center', 'alignSelf': 'flex-start', 'backgroundColor': null, 'borderRadius': null, 'paddingHorizontal': 8, 'paddingVertical': 4};
    var13 = var8[var13];
    var18 = var7.bind(var1)(var13);
    var17 = var18.hexOpacityToRgba;
    var13 = 9;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var16 = var15.PRIMARY_700;
    var15 = 0.5;
    var15 = var17.bind(var18)(var16, var15);
    var12['backgroundColor'] = var15;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var12['borderRadius'] = var15;
    var5['usernameContainer'] = var12;
    var12 = {'overflow': 'hidden', 'position': 'absolute', 'bottom': 8, 'left': 8, 'right': 40};
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var12['borderRadius'] = var15;
    var5['usernamePosition'] = var12;
    var12 = {'flex': 1, 'width': '100%'};
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.PRIMARY_600;
    var12['backgroundColor'] = var15;
    var5['streamPreview'] = var12;
    var12 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden', 'width': '100%'};
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BLACK;
    var12['backgroundColor'] = var15;
    var5['screenshareContainer'] = var12;
    var12 = {};
    var13 = var8[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var12['backgroundColor'] = var13;
    var5['stageStreamContainer'] = var12;
    var5 = var6.bind(var11)(var5);
    var _closure1_slot16 = var5;
    var6 = var10.memo;
    var5 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var15 = var1.participant;
            var _closure2_slot0 = var15;
            var24 = var1.avatarSize;
            var12 = var1.channel;
            var _closure2_slot1 = var12;
            var11 = var1.hasTopSafeArea;
            var10 = var1.hasLeftSafeArea;
            var9 = var1.hasRightSafeArea;
            var _closure2_slot2 = var9;
            var8 = var1.hasBottomSafeArea;
            var _closure2_slot3 = var8;
            var18 = var1.shrinkStreamEmptyState;
            var6 = var1.contentStyle;
            var21 = var1.hasNotch;
            var4 = undefined;
            if(!(var21 === var4)) { _fun0004_ip = 7; continue _fun0004 }
case 26:
            var21 = false;
case 7:
            var20 = var1.resizeMode;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot16;
            var22 = var3.bind(var4)();
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 10;
            var3 = var13[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var19 = var3.analyticsLocations;
            _closure2_slot4 = var19;
            var3 = 11;
            var3 = var13[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var27 = var3.bottom;
            _closure2_slot5 = var27;
            var16 = var3.right;
            _closure2_slot6 = var16;
            var7 = _closure1_slot0;
            var5 = 12;
            var3 = var13[var5];
            var23 = var7.bind(var4)(var3);
            var17 = var23.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var14 = new Array(1);
            var14[0] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot11;
                    var2 = _closure2_slot0;
                    var7 = undefined;
                    var6 = var5.bind(var7)(var2);
                    var5 = null;
                    if(!var6) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var10 = _closure1_slot6;
                    var9 = var10.getStreamForUser;
                    var6 = _closure2_slot0;
                    var8 = var6.user;
                    var8 = var8.id;
                    var6 = var6.stream;
                    var6 = var6.guildId;
                    var5 = var9.bind(var10)(var8, var6);
case 27:
                    var1['stream'] = var5;
                    var6 = _closure1_slot11;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var7)(var5);
                    var2 = null;
                    if(!var5) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var6 = _closure1_slot6;
                    var5 = var6.getActiveStreamForUser;
                    var3 = _closure2_slot0;
                    var4 = var3.user;
                    var4 = var4.id;
                    var3 = var3.stream;
                    var3 = var3.guildId;
                    var2 = var5.bind(var6)(var4, var3);
case 29:
                    var1['activeStream'] = var2;
                    return var1;
                }
            };
            var14 = var17.bind(var23)(var14, var3);
            var3 = var14.stream;
            var14 = var14.activeStream;
            var26 = _closure1_slot3;
            var25 = var26.useCallback;
            var17 = var12.id;
            var23 = new Array(2);
            var23[0] = var17;
            var17 = var15.id;
            var23[1] = var17;
            var17 = function() {
                var3 = _closure1_slot8;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 13;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.selectParticipant;
                var3 = _closure2_slot1;
                var3 = var3.id;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var17 = var25.bind(var26)(var17, var23);
            var26 = _closure1_slot3;
            var25 = var26.useCallback;
            var28 = var12.id;
            var23 = new Array(2);
            var23[0] = var28;
            var23[1] = var19;
            var19 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = arg1;
                var4 = var4.user;
                var4 = var4.id;
                var2['userId'] = var4;
                var5 = _closure2_slot1;
                var5 = var5.id;
                var2['channelId'] = var5;
                var5 = true;
                var2['isVoiceContext'] = var5;
                var4 = _closure2_slot4;
                var2['sourceAnalyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23 = var25.bind(var26)(var19, var23);
            var26 = _closure1_slot3;
            var25 = var26.useMemo;
            var19 = new Array(4);
            var19[0] = var8;
            var19[1] = var9;
            var19[2] = var27;
            var19[3] = var16;
            var16 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var5 = _closure2_slot3;
                    var4 = 8;
                    var2 = var4;
                    if(!var5) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var5 = _closure2_slot5;
                    var2 = var4 + var5;
case 31:
                    var1['bottom'] = var2;
                    var5 = _closure2_slot2;
                    var2 = var4;
                    if(!var5) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var3 = _closure2_slot6;
                    var2 = var4 + var3;
case 33:
                    var1['right'] = var2;
                    return var1;
                }
            };
            var16 = var25.bind(var26)(var16, var19);
            var5 = var13[var5];
            var13 = var7.bind(var4)(var5);
            var7 = var13.useStateFromStores;
            var19 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var19;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var7.bind(var13)(var5, var2);
            var13 = var15.type;
            var2 = _closure1_slot10;
            var2 = var2.HIDDEN_STREAM;
            if(!(var2 !== var13)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = _closure1_slot10;
            var2 = var2.STREAM;
            if(!(var2 !== var13)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = _closure1_slot10;
            var2 = var2.USER;
            if(!(var2 !== var13)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var2 = _closure1_slot10;
            var2 = var2.ACTIVITY;
            var7 = null;
            if(!(var2 === var13)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var19 = _closure1_slot13;
            var13 = _closure1_slot1;
            var25 = _closure1_slot2;
            var2 = 18;
            var2 = var25[var2];
            var13 = var13.bind(var4)(var2);
            var2 = {};
            var2['participant'] = var15;
            var2['style'] = var6;
            var2['channel'] = var12;
            var25 = _closure1_slot9;
            var2['onSingleTap'] = var25;
            var7 = var19.bind(var4)(var13, var2);
            _fun0004_ip = 41; continue _fun0004;
case 39:
            var19 = _closure1_slot13;
            var13 = _closure1_slot1;
            var25 = _closure1_slot2;
            var2 = 17;
            var2 = var25[var2];
            var13 = var13.bind(var4)(var2);
            var2 = {};
            var2['participant'] = var15;
            var2['avatarSize'] = var24;
            var24 = _closure1_slot9;
            var2['onSingleTap'] = var24;
            var2['onDoubleTap'] = var17;
            var2['onLongPress'] = var23;
            var2['statusStyle'] = var16;
            var2['hasNotch'] = var21;
            var2['resizeMode'] = var20;
            var2['style'] = var6;
            var7 = var19.bind(var4)(var13, var2);
            _fun0004_ip = 41; continue _fun0004;
case 37:
            var2 = null;
            if(!(var2 == var14)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var3 = var2 != var3;
            var7 = null;
            if(!var3) { _fun0004_ip = 41; continue _fun0004 }
case 45:
            var19 = _closure1_slot13;
            var13 = _closure1_slot18;
            var3 = {};
            var3['participant'] = var15;
            var3['style'] = var6;
            var7 = var19.bind(var4)(var13, var3);
            _fun0004_ip = 41; continue _fun0004;
case 43:
            var3 = var14.ownerId;
            var13 = var2 == var5;
            var2 = undefined;
            if(var13) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var2 = var5.id;
case 46:
            if(!(var3 === var2)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var5 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var13 = var22.screenshareContainer;
            var2['style'] = var13;
            var20 = _closure1_slot13;
            var19 = _closure1_slot1;
            var21 = _closure1_slot2;
            var13 = 16;
            var13 = var21[var13];
            var19 = var19.bind(var4)(var13);
            var13 = {};
            var13['participant'] = var15;
            var21 = _closure1_slot9;
            var13['onSingleTap'] = var21;
            var13['onDoubleTap'] = var17;
            var21 = var12.isGuildStageVoice;
            var23 = var21.bind(var12)();
            var21 = undefined;
            if(!var23) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var21 = var22.stageStreamContainer;
case 50:
            var13['containerStyle'] = var21;
            var13 = var20.bind(var4)(var19, var13);
            var2['children'] = var13;
            var2 = var5.bind(var4)(var3, var2);
            _fun0004_ip = 52; continue _fun0004;
case 48:
            var13 = _closure1_slot13;
            var5 = _closure1_slot1;
            var19 = _closure1_slot2;
            var3 = 15;
            var3 = var19[var3];
            var5 = var5.bind(var4)(var3);
            var3 = {};
            var3['participant'] = var15;
            var19 = _closure1_slot9;
            var3['onSingleTap'] = var19;
            var3['onDoubleTap'] = var17;
            var3['removeEmptyStateImage'] = var18;
            var3['onFullScreen'] = var17;
            var3['fullscreenIconStyle'] = var16;
            var3['style'] = var6;
            var2 = var13.bind(var4)(var5, var3);
case 52:
            var7 = var2;
            _fun0004_ip = 41; continue _fun0004;
case 35:
            var5 = _closure1_slot13;
            var3 = _closure1_slot18;
            var2 = {};
            var2['participant'] = var15;
            var2['style'] = var6;
            var7 = var5.bind(var4)(var3, var2);
case 41:
            var3 = var15.type;
            var2 = _closure1_slot10;
            var2 = var2.ACTIVITY;
            var13 = null;
            var6 = null;
            if(!(var3 !== var2)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var5 = _closure1_slot13;
            var3 = _closure1_slot20;
            var2 = {};
            var2['participant'] = var15;
            var13 = var13 != var14;
            var2['isActiveStream'] = var13;
            var2['channel'] = var12;
            var2['hasTopSafeArea'] = var11;
            var2['hasLeftSafeArea'] = var10;
            var2['hasRightSafeArea'] = var9;
            var2['hasBottomSafeArea'] = var8;
            var6 = var5.bind(var4)(var3, var2);
case 53:
            var3 = _closure1_slot15;
            var2 = _closure1_slot14;
            var1 = {};
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var6.bind(var10)(var5);
    var6 = {};
    var10 = 'function CallTileTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}';
    var6['code'] = var10;
    var _closure1_slot17 = var6;
    var6 = 30;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/video_calls/native/components/CallTile.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['StreamPreviewTile'] = var4;
    var3['TileOverlay'] = var2;
    return var1;
})();