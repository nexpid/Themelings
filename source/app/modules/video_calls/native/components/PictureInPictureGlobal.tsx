// app/modules/video_calls/native/components/PictureInPictureGlobal.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.StyleSheet;
    var _closure1_slot6 = var7;
    var4 = var4.TouchableOpacity;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useBestActiveChatInputContainerHeight;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PictureInPicturePositions;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = 12;
    var11 = {'flex': 1, 'marginLeft': 12, 'marginRight': 12};
    var4['container'] = var11;
    var11 = var6[var10];
    var12 = var5.bind(var1)(var11);
    var11 = var12.generateBoxShadowStyle;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
    var10 = var11.bind(var12)(var10);
    var4['elevationShadow'] = var10;
    var10 = {};
    var12 = 13;
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10['borderRadius'] = var11;
    var11 = 'hidden';
    var10['overflow'] = var11;
    var4['pip'] = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BLACK;
    var10['backgroundColor'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var10['borderRadius'] = var12;
    var10['overflow'] = var11;
    var4['background'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channel;
            var _closure2_slot0 = var8;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var1 = _closure1_slot17;
            var18 = var1.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var8.id;
            var3 = var2.bind(var4)(var1);
            var10 = _closure1_slot0;
            var1 = 15;
            var2 = var6[var1];
            var13 = var10.bind(var4)(var2);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot9;
            var11 = new Array(2);
            var11[0] = var2;
            var9 = _closure1_slot11;
            var11[1] = var9;
            var9 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getStreamParticipants;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var3 = var2.bind(var3)(var1);
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    var2 = var1.id;
                    var3 = _closure1_slot11;
                    var1 = var3.getId;
                    var1 = var1.bind(var3)();
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var12.bind(var13)(var11, var9);
            var9 = var6[var1];
            var11 = var10.bind(var4)(var9);
            var10 = var11.useStateFromStores;
            var9 = new Array(2);
            var9[0] = var2;
            var2 = _closure1_slot8;
            var9[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var1 = var3.getCurrentEmbeddedActivity;
                    var8 = var1.bind(var3)();
                    var1 = null;
                    var3 = var1 != var8;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot9;
                    var4 = var5.getParticipant;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 16;
                    var6 = var6[var2];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.getEmbeddedActivityParticipantId;
                    var2 = {};
                    var9 = var8.applicationId;
                    var2['applicationId'] = var9;
                    var8 = var8.compositeInstanceId;
                    var2['instanceId'] = var8;
                    var2 = var6.bind(var7)(var2);
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var13 = var10.bind(var11)(var9, var2);
            var2 = 17;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var8.id;
            var2 = var5.bind(var4)(var2);
            var12 = null;
            var5 = var13;
            if(!(var12 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var3.user;
            var9 = var6.id;
            var10 = _closure1_slot11;
            var6 = var10.getId;
            var6 = var6.bind(var10)();
            var5 = var13;
            if(!(var9 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var5 = var3;
case 4:
            if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = var13;
case 7:
            _closure2_slot1 = var5;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = var6[var1];
            var15 = var3.bind(var4)(var2);
            var11 = var15.useStateFromStores;
            var2 = _closure1_slot12;
            var10 = new Array(1);
            var10[0] = var2;
            var9 = new Array(1);
            var9[0] = var5;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var4 = _closure1_slot12;
                    var3 = var4.isLocalVideoDisabled;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 9:
                    return var1;
                }
            };
            var2 = var11.bind(var15)(var10, var2, var9);
            var1 = var6[var1];
            var11 = var3.bind(var4)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot9;
            var9 = new Array(2);
            var9[0] = var1;
            var1 = _closure1_slot11;
            var9[1] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure1_slot9;
                    var4 = var5.getParticipant;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var6 = _closure1_slot11;
                    var1 = var6.getId;
                    var1 = var1.bind(var6)();
                    var2 = var4.bind(var5)(var2, var1);
                    var4 = null;
                    var5 = var4 != var2;
                    var1 = null;
                    if(!var5) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var5 = var2.type;
                    var3 = _closure1_slot14;
                    var3 = var3.USER;
                    var1 = null;
                    if(!(var5 === var3)) { _fun0004_ip = 11; continue _fun0004 }
case 13:
                    var3 = var2.streamId;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 11; continue _fun0004 }
case 14:
                    var1 = var2;
case 11:
                    return var1;
                }
            };
            var10 = var10.bind(var11)(var9, var1);
            var9 = _closure1_slot4;
            var15 = var9.useCallback;
            var11 = new Array(1);
            var11[0] = var8;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.openGuildVoiceModal;
                var3 = _closure2_slot0;
                var2 = 'PIP';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var19 = var15.bind(var9)(var1, var11);
            _closure2_slot2 = var19;
            var1 = 19;
            var1 = var6[var1];
            var15 = var3.bind(var4)(var1);
            var11 = var15.useShouldForcePipOrientation;
            var1 = {};
            var1['channel'] = var8;
            var17 = var11.bind(var15)(var1);
            _closure2_slot3 = var17;
            var1 = 20;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsScreenLandscape;
            var15 = var1.bind(var3)();
            _closure2_slot4 = var15;
            var3 = _closure1_slot1;
            var1 = 21;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var6 = var8.id;
            var1['channelId'] = var6;
            var1['forcedOrientation'] = var17;
            var3 = var3.bind(var4)(var1);
            var1 = var3.width;
            _closure2_slot5 = var1;
            var11 = var3.height;
            _closure2_slot6 = var11;
            var6 = var9.useMemo;
            var3 = new Array(4);
            var3[0] = var17;
            var3[1] = var15;
            var3[2] = var11;
            var3[3] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot6;
                    var1['height'] = var3;
                    var3 = _closure2_slot5;
                    var1['width'] = var3;
                    var3 = _closure2_slot4;
                    if(var3) { _fun0005_ip = 13; continue _fun0005 }
case 15:
                    var4 = _closure2_slot3;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.OrientationType;
                    var3 = var2.LANDSCAPE;
                    var2 = 'column';
                    if(!(var4 === var3)) { _fun0005_ip = 16; continue _fun0005 }
case 13:
                    var2 = 'row';
case 16:
                    var1['flexDirection'] = var2;
                    return var1;
                }
            };
            var15 = var6.bind(var9)(var1, var3);
            var1 = var12 == var5;
            var3 = undefined;
            if(var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var3 = var5.type;
case 17:
            var1 = _closure1_slot14;
            var1 = var1.ACTIVITY;
            var17 = var3 === var1;
            if(!var17) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 23;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var5.applicationId;
            var17 = var3.bind(var4)(var1);
case 19:
            if(!var17) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var17 = var12 == var14;
case 21:
            var1 = var12 == var5;
            var3 = undefined;
            if(var1) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var3 = var5.type;
case 23:
            var1 = _closure1_slot14;
            var1 = var1.HIDDEN_STREAM;
            if(!(var1 !== var3)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var1 = _closure1_slot14;
            var1 = var1.STREAM;
            if(!(var1 !== var3)) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            var1 = _closure1_slot14;
            var1 = var1.USER;
            if(!(var1 !== var3)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var1 = _closure1_slot14;
            var1 = var1.ACTIVITY;
            var11 = null;
            if(!(var1 === var3)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 28;
            var1 = var9[var1];
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var1['participant'] = var5;
            var1['channel'] = var8;
            var7 = function onSingleTap() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var1 = var3.getCurrentEmbeddedActivity;
                    var5 = var1.bind(var3)();
                    var1 = null;
                    if(!(var1 != var5)) { _fun0006_ip = 13; continue _fun0006 }
case 32:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 29;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure2_slot0;
                    var2 = var2.guild_id;
                    var6 = var1 == var5;
                    var1 = undefined;
                    if(var6) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var1 = var5.location;
case 33:
                    var1 = var3.bind(var4)(var2, var1);
case 13:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var1['onSingleTap'] = var7;
            var11 = var6.bind(var4)(var3, var1);
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var1 = null;
            if(var2) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var6 = _closure1_slot15;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 26;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['participant'] = var5;
            var8 = _closure1_slot0;
            var7 = 27;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.AvatarSizes;
            var7 = var7.PROFILE;
            var2['avatarSize'] = var7;
            var7 = 25;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.ResizeMode;
            var7 = var7.COVER;
            var2['resizeMode'] = var7;
            var2['onSingleTap'] = var19;
            var2['onDoubleTap'] = var19;
            var1 = var6.bind(var4)(var3, var2);
case 35:
            var11 = var1;
            _fun0001_ip = 30; continue _fun0001;
case 25:
            var3 = _closure1_slot15;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 24;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot0;
            var6 = 25;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.ResizeMode;
            var6 = var6.CONTAIN;
            var1['resizeMode'] = var6;
            var1['participant'] = var5;
            var1['onSingleTap'] = var19;
            var1['onDoubleTap'] = var19;
            var11 = var3.bind(var4)(var2, var1);
case 30:
            var3 = _closure1_slot15;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var18.background;
            var1['style'] = var5;
            var6 = _closure1_slot7;
            var5 = {};
            var7 = 0.7;
            var5['activeOpacity'] = var7;
            var8 = _closure1_slot16;
            var7 = {};
            var20 = var18.pip;
            var9 = new Array(3);
            var9[0] = var20;
            var18 = var18.elevationShadow;
            var9[1] = var18;
            var9[2] = var15;
            var7['style'] = var9;
            var15 = var12 != var10;
            if(!var15) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var15 = !var17;
case 37:
            if(!var15) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var20 = _closure1_slot15;
            var18 = _closure1_slot1;
            var23 = _closure1_slot2;
            var9 = 26;
            var9 = var23[var9];
            var18 = var18.bind(var4)(var9);
            var9 = {};
            var9['participant'] = var10;
            var22 = _closure1_slot0;
            var21 = 27;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.AvatarSizes;
            var21 = var21.PROFILE;
            var9['avatarSize'] = var21;
            var21 = 25;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.ResizeMode;
            var21 = var21.COVER;
            var9['resizeMode'] = var21;
            var9['onSingleTap'] = var19;
            var15 = var20.bind(var4)(var18, var9);
case 39:
            var9 = new Array(3);
            var9[0] = var15;
            var15 = var12 != var14;
            if(!var15) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var15 = !var17;
case 41:
            if(!var15) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var18 = _closure1_slot15;
            var17 = _closure1_slot1;
            var20 = _closure1_slot2;
            var16 = 30;
            var16 = var20[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['onSingleTap'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 43:
            var9[1] = var15;
            var10 = var12 == var10;
            if(var10) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var10 = var12 == var14;
case 45:
            if(var10) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var10 = var12 == var13;
case 47:
            if(!var10) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var10 = var11;
case 49:
            var9[2] = var10;
            var7['children'] = var9;
            var7 = var8.bind(var4)(var2, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var7 = var1.channel;
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var1 = function() {
            var1 = _closure1_slot13;
            var1 = var1.TOP_RIGHT;
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = _closure1_slot3;
        var4 = undefined;
        var1 = 2;
        var2 = var2.bind(var4)(var3, var1);
        var1 = 0;
        var8 = var2[var1];
        var1 = 1;
        var6 = var2[var1];
        var3 = _closure1_slot15;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 31;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['channel'] = var7;
        var1['preferredPosition'] = var8;
        var1['onMove'] = var6;
        var6 = _closure1_slot18;
        var5 = {};
        var5['channel'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'function PictureInPictureGlobalTsx1(){const{withTiming,drawerState,STANDARD_EASING}=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});}';
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function PictureInPictureGlobalTsx2(){const{interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/PictureInPictureGlobal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PictureInPictureGlobal(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var9 = var2.channel;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var2 = _closure1_slot17;
            var10 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 32;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useIsChannelFocused;
            var2 = var2.bind(var3)();
            var14 = 1;
            if(!var2) { _fun0007_ip = 51; continue _fun0007 }
case 33:
            var14 = 0;
case 51:
            _closure2_slot0 = var14;
            var2 = _closure1_slot10;
            var8 = var2.bind(var4)();
            _closure2_slot1 = var8;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 33;
            var2 = var12[var5];
            var6 = var11.bind(var4)(var2);
            var3 = var6.useDerivedValue;
            var2 = function n() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 34;
                var1 = var8[var1];
                var6 = undefined;
                var4 = var7.bind(var6)(var1);
                var3 = var4.withTiming;
                var2 = _closure2_slot0;
                var1 = {};
                var5 = 35;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.STANDARD_EASING;
                var1['easing'] = var5;
                var5 = 250;
                var1['duration'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var13 = {};
            var15 = 34;
            var15 = var12[var15];
            var15 = var11.bind(var4)(var15);
            var15 = var15.withTiming;
            var13['withTiming'] = var15;
            var13['drawerState'] = var14;
            var14 = 35;
            var14 = var12[var14];
            var14 = var11.bind(var4)(var14);
            var14 = var14.STANDARD_EASING;
            var13['STANDARD_EASING'] = var14;
            var2['__closure'] = var13;
            var13 = 5168896066356.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot20;
            var2['__initData'] = var13;
            var13 = var3.bind(var6)(var2);
            _closure2_slot2 = var13;
            var2 = var12[var5];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function o() {
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 33;
                var2 = var10[var3];
                var8 = undefined;
                var12 = var9.bind(var8)(var2);
                var11 = var12.interpolate;
                var5 = _closure2_slot2;
                var4 = var5.get;
                var6 = var4.bind(var5)();
                var4 = 36;
                var4 = var10[var4];
                var4 = var9.bind(var8)(var4);
                var4 = var4.NAV_BAR_HEIGHT;
                var7 = 12;
                var4 = var4 + var7;
                var5 = new Array(2);
                var5[0] = var4;
                var5[1] = var7;
                var4 = [0, 1];
                var4 = var11.bind(var12)(var6, var4, var5);
                var1['marginTop'] = var4;
                var3 = var10[var3];
                var6 = var9.bind(var8)(var3);
                var5 = var6.interpolate;
                var4 = _closure2_slot2;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var2 = _closure2_slot1;
                var2 = var2 + var7;
                var3 = new Array(2);
                var3[0] = var2;
                var2 = 37;
                var2 = var10[var2];
                var2 = var9.bind(var8)(var2);
                var2 = var2.PIP_AVOIDANCE_TAB_BAR_HEIGHT;
                var2 = var2 + var7;
                var3[1] = var2;
                var2 = [0, 1];
                var2 = var5.bind(var6)(var4, var2, var3);
                var1['marginBottom'] = var2;
                return var1;
            };
            var6 = {};
            var14 = var12[var5];
            var14 = var11.bind(var4)(var14);
            var14 = var14.interpolate;
            var6['interpolate'] = var14;
            var6['animatedDrawerState'] = var13;
            var13 = 36;
            var13 = var12[var13];
            var13 = var11.bind(var4)(var13);
            var13 = var13.NAV_BAR_HEIGHT;
            var6['NAV_BAR_HEIGHT'] = var13;
            var13 = 12;
            var6['PADDING'] = var13;
            var6['chatInputContainerHeight'] = var8;
            var8 = 37;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.PIP_AVOIDANCE_TAB_BAR_HEIGHT;
            var6['PIP_AVOIDANCE_TAB_BAR_HEIGHT'] = var8;
            var1['__closure'] = var6;
            var6 = 8833756900366.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot21;
            var1['__initData'] = var6;
            var11 = var2.bind(var3)(var1);
            var3 = _closure1_slot15;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = _closure1_slot6;
            var6 = var6.absoluteFill;
            var1['style'] = var6;
            var8 = 'box-none';
            var1['pointerEvents'] = var8;
            var6 = _closure1_slot1;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var12 = var10.container;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var5['style'] = var10;
            var5['pointerEvents'] = var8;
            var8 = _closure1_slot19;
            var7 = {};
            var7['channel'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();