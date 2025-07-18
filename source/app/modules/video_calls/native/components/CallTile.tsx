// app/modules/video_calls/native/components/CallTile.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var12 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var1 = function ParticipantIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.participant;
            var3 = _closure1_slot16;
            var5 = undefined;
            var6 = var3.bind(var5)();
            var4 = var1.type;
            var3 = _closure1_slot10;
            var3 = var3.STREAM;
            if(!(var4 !== var3)) { _fun0001_ip = 184; continue _fun0001 }
 44:
            var4 = var1.type;
            var3 = _closure1_slot10;
            var3 = var3.USER;
            var10 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 204; continue _fun0001 }
 68:
            var3 = var1.voicePlatform;
            var1 = _closure1_slot12;
            var1 = var1.MOBILE;
            if(!(var1 !== var3)) { _fun0001_ip = 162; continue _fun0001 }
 88:
            var1 = _closure1_slot12;
            var1 = var1.XBOX;
            if(!(var1 !== var3)) { _fun0001_ip = 140; continue _fun0001 }
 102:
            var1 = _closure1_slot12;
            var1 = var1.PLAYSTATION;
            var10 = undefined;
            if(!(var1 === var3)) { _fun0001_ip = 204; continue _fun0001 }
 118:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 23;
            var1 = var4[var1];
            var10 = var3.bind(var5)(var1);
            _fun0001_ip = 204; continue _fun0001;
 140:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 22;
            var1 = var4[var1];
            var10 = var3.bind(var5)(var1);
            _fun0001_ip = 204; continue _fun0001;
 162:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 21;
            var1 = var4[var1];
            var10 = var3.bind(var5)(var1);
            _fun0001_ip = 204; continue _fun0001;
 184:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 20;
            var1 = var4[var1];
            var10 = var3.bind(var5)(var1);
 204:
            var1 = null;
            var3 = var1 == var10;
            if(var3) { _fun0001_ip = 311; continue _fun0001 }
 213:
            var4 = _closure1_slot13;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 24;
            var2 = var9[var7];
            var3 = var8.bind(var5)(var2);
            var2 = {};
            var2['source'] = var10;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.Sizes;
            var7 = var7.REFRESH_SMALL_16;
            var2['size'] = var7;
            var7 = 9;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.unsafe_rawColors;
            var7 = var7.WHITE_500;
            var2['color'] = var7;
            var6 = var6.titleIcon;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 311:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var1 = 0;
    var4 = var8[var1];
    var2 = native4;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var _closure1_slot3 = var5;
    var2 = 1;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.StyleSheet;
    var _closure1_slot4 = var4;
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.resetFocus;
    var _closure1_slot8 = var4;
    var2 = var2.toggleFocus;
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.ParticipantTypes;
    var _closure1_slot10 = var4;
    var4 = var2.isStreamParticipant;
    var _closure1_slot11 = var4;
    var2 = var2.VoicePlatforms;
    var _closure1_slot12 = var2;
    var13 = 6;
    var2 = var8[var13];
    var2 = var7.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot13 = var4;
    var4 = var2.Fragment;
    var _closure1_slot14 = var4;
    var2 = var2.jsxs;
    var _closure1_slot15 = var2;
    var2 = 7;
    var2 = var8[var2];
    var9 = var7.bind(var1)(var2);
    var4 = var9.createStyles;
    var2 = {};
    var11 = 8;
    var10 = {'position': 'absolute', 'top': 8, 'right': 8};
    var2['liveContainer'] = var10;
    var10 = {};
    var10['marginRight'] = var13;
    var2['titleIcon'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'alignSelf': 'flex-start', 'backgroundColor': null, 'borderRadius': null, 'paddingHorizontal': 8, 'paddingVertical': 4};
    var11 = var8[var11];
    var16 = var7.bind(var1)(var11);
    var15 = var16.hexOpacityToRgba;
    var11 = 9;
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var14 = var13.PRIMARY_700;
    var13 = 0.5;
    var13 = var15.bind(var16)(var14, var13);
    var10['backgroundColor'] = var13;
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var2['usernameContainer'] = var10;
    var10 = {'overflow': 'hidden', 'position': 'absolute', 'bottom': 8, 'left': 8, 'right': 40};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var2['usernamePosition'] = var10;
    var10 = {'flex': 1, 'width': '100%'};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_600;
    var10['backgroundColor'] = var13;
    var2['streamPreview'] = var10;
    var10 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden', 'width': '100%'};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var10['backgroundColor'] = var13;
    var2['screenshareContainer'] = var10;
    var10 = {};
    var11 = var8[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BLACK;
    var10['backgroundColor'] = var11;
    var2['stageStreamContainer'] = var10;
    var2 = var4.bind(var9)(var2);
    var _closure1_slot16 = var2;
    var4 = var5.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(!(var21 === var4)) { _fun0002_ip = 88; continue _fun0002 }
 86:
            var21 = false;
 88:
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var5 = _closure1_slot11;
                    var2 = _closure2_slot0;
                    var7 = undefined;
                    var6 = var5.bind(var7)(var2);
                    var5 = null;
                    if(!var6) { _fun0003_ip = 69; continue _fun0003 }
 28:
                    var10 = _closure1_slot6;
                    var9 = var10.getStreamForUser;
                    var6 = _closure2_slot0;
                    var8 = var6.user;
                    var8 = var8.id;
                    var6 = var6.stream;
                    var6 = var6.guildId;
                    var5 = var9.bind(var10)(var8, var6);
 69:
                    var1['stream'] = var5;
                    var6 = _closure1_slot11;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var7)(var5);
                    var2 = null;
                    if(!var5) { _fun0003_ip = 133; continue _fun0003 }
 92:
                    var6 = _closure1_slot6;
                    var5 = var6.getActiveStreamForUser;
                    var3 = _closure2_slot0;
                    var4 = var3.user;
                    var4 = var4.id;
                    var3 = var3.stream;
                    var3 = var3.guildId;
                    var2 = var5.bind(var6)(var4, var3);
 133:
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
            var25 = var26.useMemo;
            var19 = new Array(4);
            var19[0] = var8;
            var19[1] = var9;
            var19[2] = var27;
            var19[3] = var16;
            var16 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var5 = _closure2_slot3;
                    var4 = 8;
                    var2 = var4;
                    if(!var5) { _fun0004_ip = 26; continue _fun0004 }
 18:
                    var5 = _closure2_slot5;
                    var2 = var4 + var5;
 26:
                    var1['bottom'] = var2;
                    var5 = _closure2_slot2;
                    var2 = var4;
                    if(!var5) { _fun0004_ip = 48; continue _fun0004 }
 40:
                    var3 = _closure2_slot6;
                    var2 = var4 + var3;
 48:
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
            if(!(var2 !== var13)) { _fun0002_ip = 872; continue _fun0002 }
 422:
            var2 = _closure1_slot10;
            var2 = var2.STREAM;
            if(!(var2 !== var13)) { _fun0002_ip = 616; continue _fun0002 }
 439:
            var2 = _closure1_slot10;
            var2 = var2.USER;
            if(!(var2 !== var13)) { _fun0002_ip = 531; continue _fun0002 }
 453:
            var2 = _closure1_slot10;
            var2 = var2.ACTIVITY;
            var7 = null;
            if(!(var2 === var13)) { _fun0002_ip = 897; continue _fun0002 }
 472:
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
            _fun0002_ip = 897; continue _fun0002;
 531:
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
            _fun0002_ip = 897; continue _fun0002;
 616:
            var2 = null;
            if(!(var2 == var14)) { _fun0002_ip = 664; continue _fun0002 }
 622:
            var3 = var2 != var3;
            var7 = null;
            if(!var3) { _fun0002_ip = 897; continue _fun0002 }
 634:
            var19 = _closure1_slot13;
            var13 = _closure1_slot17;
            var3 = {};
            var3['participant'] = var15;
            var3['style'] = var6;
            var7 = var19.bind(var4)(var13, var3);
            _fun0002_ip = 897; continue _fun0002;
 664:
            var3 = var14.ownerId;
            var13 = var2 == var5;
            var2 = undefined;
            if(var13) { _fun0002_ip = 684; continue _fun0002 }
 679:
            var2 = var5.id;
 684:
            if(!(var3 === var2)) { _fun0002_ip = 797; continue _fun0002 }
 688:
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
            if(!var23) { _fun0002_ip = 774; continue _fun0002 }
 768:
            var21 = var22.stageStreamContainer;
 774:
            var13['containerStyle'] = var21;
            var13 = var20.bind(var4)(var19, var13);
            var2['children'] = var13;
            var2 = var5.bind(var4)(var3, var2);
            _fun0002_ip = 867; continue _fun0002;
 797:
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
 867:
            var7 = var2;
            _fun0002_ip = 897; continue _fun0002;
 872:
            var5 = _closure1_slot13;
            var3 = _closure1_slot17;
            var2 = {};
            var2['participant'] = var15;
            var2['style'] = var6;
            var7 = var5.bind(var4)(var3, var2);
 897:
            var3 = var15.type;
            var2 = _closure1_slot10;
            var2 = var2.ACTIVITY;
            var13 = null;
            var6 = null;
            if(!(var3 !== var2)) { _fun0002_ip = 974; continue _fun0002 }
 920:
            var5 = _closure1_slot13;
            var3 = _closure1_slot19;
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
 974:
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
    var5 = var4.bind(var5)(var2);
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
    var _closure1_slot17 = var4;
    var2 = {};
    var9 = 'function CallTileTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}';
    var2['code'] = var9;
    var _closure1_slot18 = var2;
    var2 = function TileOverlay(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var15 = var2.participant;
            var6 = var2.isActiveStream;
            var16 = var2.channel;
            var13 = var2.hasLeftSafeArea;
            var17 = var2.hasRightSafeArea;
            var19 = var2.hasBottomSafeArea;
            var3 = var2.hasTopSafeArea;
            var2 = _closure1_slot16;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var22 = _closure1_slot2;
            var2 = 11;
            var2 = var22[var2];
            var2 = var5.bind(var4)(var2);
            var5 = var2.bind(var4)();
            var18 = var5.bottom;
            var10 = var5.left;
            var2 = var5.top;
            var14 = var5.right;
            var8 = _closure1_slot3;
            var7 = var8.useContext;
            var21 = _closure1_slot0;
            var5 = 25;
            var5 = var22[var5];
            var5 = var21.bind(var4)(var5);
            var5 = var5.RevealContext;
            var5 = var7.bind(var8)(var5);
            var20 = var5.reveal;
            var _closure2_slot0 = var20;
            var5 = 26;
            var7 = var22[var5];
            var8 = var21.bind(var4)(var7);
            var7 = var8.useAnimatedStyle;
            var1 = function A() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 27;
                    var2 = var4[var2];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.withTiming;
                    var2 = _closure2_slot0;
                    var3 = 0;
                    if(!var2) { _fun0006_ip = 47; continue _fun0006 }
 44:
                    var3 = 1;
 47:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 28;
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
            var23 = 27;
            var23 = var22[var23];
            var23 = var21.bind(var4)(var23);
            var23 = var23.withTiming;
            var9['withTiming'] = var23;
            var9['reveal'] = var20;
            var20 = 28;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.STANDARD_EASING;
            var9['STANDARD_EASING'] = var20;
            var1['__closure'] = var9;
            var9 = 15640123774063.0;
            var1['__workletHash'] = var9;
            var9 = _closure1_slot18;
            var1['__initData'] = var9;
            var7 = var7.bind(var8)(var1);
            var8 = {};
            var9 = 0;
            if(!var19) { _fun0005_ip = 273; continue _fun0005 }
 270:
            var9 = var18;
 273:
            var8['bottom'] = var9;
            var9 = 0;
            if(!var17) { _fun0005_ip = 285; continue _fun0005 }
 282:
            var9 = var14;
 285:
            var8['right'] = var9;
            var9 = 0;
            if(!var13) { _fun0005_ip = 297; continue _fun0005 }
 294:
            var9 = var10;
 297:
            var8['left'] = var9;
            var1 = 0;
            if(!var3) { _fun0005_ip = 309; continue _fun0005 }
 306:
            var1 = var2;
 309:
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
            if(!var6) { _fun0005_ip = 445; continue _fun0005 }
 383:
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var5 = {};
            var9 = var11.liveContainer;
            var5['style'] = var9;
            var13 = _closure1_slot13;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 29;
            var9 = var14[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9 = var13.bind(var4)(var10, var9);
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
 445:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var11.usernamePosition;
            var6['style'] = var9;
            var10 = _closure1_slot15;
            var9 = {};
            var11 = var11.usernameContainer;
            var9['style'] = var11;
            var14 = _closure1_slot13;
            var13 = _closure1_slot20;
            var11 = {};
            var11['participant'] = var15;
            var13 = var14.bind(var4)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var14 = _closure1_slot13;
            var13 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 30;
            var12 = var17[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['channel'] = var16;
            var12['participant'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var9['children'] = var11;
            var9 = var10.bind(var4)(var7, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var2;
    var6 = 31;
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