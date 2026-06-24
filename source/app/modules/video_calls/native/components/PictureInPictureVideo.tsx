// app/modules/video_calls/native/components/PictureInPictureVideo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var2 = function areParticipantsEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = var5[Symbol.iterator];
            var5 = var2().next;
            var12 = undefined;
            var3 = undefined;
            var4 = undefined;
            var6 = var5().value;
            var9 = var2;
            var9 = var9 === var12;
            var3 = var9;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6;
case 2:
            var4 = undefined;
            var6 = var3;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var5().value;
            var9 = var2;
            var9 = var9 === var12;
            var3 = var9;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = var6;
case 4:
            var4 = undefined;
            var6 = var3;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = var5().value;
            var6 = var2;
            var6 = var6 === var12;
            var3 = var6;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var4 = var5;
case 7:
            var8 = var4;
            var4 = var3;
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2.return();
case 10:
            var10 = arg2;
            var5 = var10[Symbol.iterator];
            var10 = var5().next;
            var6 = undefined;
            var9 = undefined;
            var11 = var10().value;
            var13 = var5;
            var13 = var13 === var12;
            var6 = var13;
            if(var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var11;
case 12:
            var9 = undefined;
            var11 = var6;
            if(var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = var10().value;
            var13 = var5;
            var13 = var13 === var12;
            var6 = var13;
            if(var13) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var9 = var11;
case 14:
            var9 = undefined;
            var11 = var6;
            if(var11) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var10 = var10().value;
            var11 = var5;
            var11 = var11 === var12;
            var6 = var11;
            if(var11) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var9 = var10;
case 17:
            var7 = var9;
            var9 = var6;
            if(var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var5.return();
case 20:
            var7 = var8 === var7;
            return var7;
case 22:
            CatchBlockStart(arg_register=3);
            _fun0001_ip = 23; continue _fun0001;
case 24:
            CatchBlockStart(arg_register=3);
case 23:
            if(var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var5.return();
case 25:
            throw var4;
case 27:
            CatchBlockStart(arg_register=0);
            _fun0001_ip = 28; continue _fun0001;
case 29:
            CatchBlockStart(arg_register=0);
case 28:
            if(var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var2.return();
case 30:
            throw var1;
        }
    };
    var _closure1_slot22 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var13.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.TouchableOpacity;
    var _closure1_slot4 = var9;
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.togglePipFocus;
    var _closure1_slot13 = var9;
    var5 = var5.useIsVoiceChatFocused;
    var _closure1_slot14 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ParticipantTypes;
    var _closure1_slot15 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot16 = var9;
    var9 = var5.Fragment;
    var _closure1_slot17 = var9;
    var5 = var5.jsxs;
    var _closure1_slot18 = var5;
    var5 = 13;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = 14;
    var12 = var7[var11];
    var14 = var6.bind(var1)(var12);
    var12 = var14.generateBoxShadowStyle;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
    var11 = var12.bind(var14)(var11);
    var5['elevationShadow'] = var11;
    var11 = {};
    var12 = 15;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BLACK;
    var11['backgroundColor'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11['borderRadius'] = var14;
    var14 = 'hidden';
    var11['overflow'] = var14;
    var5['background'] = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BLACK;
    var11['backgroundColor'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var11['borderRadius'] = var15;
    var5['backgroundPipFab'] = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var11['borderRadius'] = var15;
    var11['overflow'] = var14;
    var5['pip'] = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var11['borderRadius'] = var15;
    var11['overflow'] = var14;
    var5['pipFab'] = var11;
    var11 = {'width': '100%', 'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
    var5['avatarContainer'] = var11;
    var11 = {'flex': 1, 'width': '100%'};
    var5['activityPipContainer'] = var11;
    var11 = {'width': 22, 'height': 22, 'backgroundColor': 'rgba(78, 80, 88, 0.48)', 'borderRadius': 11, 'justifyContent': 'center', 'alignItems': 'center', 'position': 'absolute', 'top': 6, 'left': 6};
    var5['thermalAlertIconContainer'] = var11;
    var11 = {'width': 14, 'height': 14};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var11['color'] = var12;
    var5['thermalAlertIcon'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot19 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var15 = var1.channel;
            var _closure2_slot0 = var15;
            var13 = var1.pipParticipant;
            var _closure2_slot1 = var13;
            var12 = var1.selfParticipant;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var9 = function onScreenshareTap() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getVoiceChannelId;
                    var6 = var2.bind(var3)();
                    var5 = null;
                    if(!(var5 != var6)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.selectParticipant;
                    var7 = _closure2_slot1;
                    var8 = var5 == var7;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
case 34:
                    var8 = var5 != var7;
                    var5 = null;
                    if(!var8) { _fun0003_ip = 7; continue _fun0003 }
case 9:
                    var5 = var7;
case 7:
                    var3 = var3.bind(var4)(var6, var5);
                    var3 = _closure2_slot3;
                    if(!var3) { _fun0003_ip = 32; continue _fun0003 }
case 36:
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var2)();
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = function onPipTap() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 37:
                    var3 = _closure2_slot4;
                    if(var3) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var4 = _closure1_slot13;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
                    _fun0004_ip = 41; continue _fun0004;
case 39:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.selectParticipant;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = null;
                    var1 = var3.bind(var4)(var2, var1);
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useVoiceChatNavigationContext;
            var2 = var1.bind(var2)();
            var8 = null;
            var3 = var8 == var2;
            var1 = undefined;
            if(var3) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var1 = var2.openVoice;
case 42:
            if(!(var8 == var1)) { _fun0002_ip = 15; continue _fun0002 }
case 44:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var1 = var2.noop;
case 15:
            _closure2_slot2 = var1;
            var1 = _closure1_slot14;
            var1 = var1.bind(var4)();
            _closure2_slot3 = var1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var15.id;
            var1 = var2.bind(var4)(var1);
            _closure2_slot4 = var1;
            var1 = var8 == var13;
            var2 = undefined;
            if(var1) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var2 = var13.type;
case 45:
            var1 = _closure1_slot15;
            var1 = var1.ACTIVITY;
            var5 = var2 === var1;
            if(!var5) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var3 = var8 == var13;
            var1 = undefined;
            if(var3) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var1 = var13.applicationId;
case 49:
            var5 = var2.bind(var4)(var1);
case 47:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
            var6 = var14.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = new Array(1);
            var2[0] = var13;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var4 = _closure1_slot9;
                    var3 = var4.isLocalVideoDisabled;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 51:
                    return var1;
                }
            };
            var2 = var6.bind(var14)(var3, var1, var2);
            var1 = var8 == var13;
            var3 = undefined;
            if(var1) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var3 = var13.type;
case 53:
            var1 = _closure1_slot15;
            var1 = var1.HIDDEN_STREAM;
            if(!(var1 !== var3)) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var1 = _closure1_slot15;
            var1 = var1.STREAM;
            if(!(var1 !== var3)) { _fun0002_ip = 55; continue _fun0002 }
case 57:
            var1 = _closure1_slot15;
            var1 = var1.USER;
            if(!(var1 !== var3)) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var1 = _closure1_slot15;
            var1 = var1.ACTIVITY;
            var6 = null;
            if(!(var1 === var3)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var14 = _closure1_slot16;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 27;
            var1 = var16[var1];
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var1['participant'] = var13;
            var1['channel'] = var15;
            var15 = function onSingleTap() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var1 = var3.getCurrentEmbeddedActivity;
                    var1 = var1.bind(var3)();
                    var3 = null;
                    if(!(var3 != var1)) { _fun0006_ip = 8; continue _fun0006 }
case 33:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure2_slot0;
                    var2 = var2.guild_id;
                    var1 = var1.location;
                    var1 = var3.bind(var4)(var2, var1);
case 8:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0006_ip = 7; continue _fun0006 }
case 62:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onSingleTap'] = var15;
            var6 = var14.bind(var4)(var3, var1);
            _fun0002_ip = 60; continue _fun0002;
case 58:
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 25;
            var1 = var14[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.bind(var4)(var13);
            var1 = null;
            if(!var3) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var1 = null;
            if(var2) { _fun0002_ip = 63; continue _fun0002 }
case 65:
            var14 = _closure1_slot16;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 26;
            var2 = var17[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['participant'] = var13;
            var16 = _closure1_slot0;
            var15 = 14;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.PROFILE;
            var2['avatarSize'] = var15;
            var15 = 24;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.ResizeMode;
            var15 = var15.COVER;
            var2['resizeMode'] = var15;
            var2['onSingleTap'] = var7;
            var2['onDoubleTap'] = var7;
            var1 = var14.bind(var4)(var3, var2);
case 63:
            var6 = var1;
            _fun0002_ip = 60; continue _fun0002;
case 55:
            var1 = var13.user;
            var2 = var1.id;
            var3 = _closure1_slot8;
            var1 = var3.getId;
            var1 = var1.bind(var3)();
            if(!(var2 !== var1)) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var3 = _closure1_slot16;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 23;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'removeEmptyStateButton': true, 'removeEmptyStateImage': true};
            var15 = _closure1_slot0;
            var14 = 24;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.ResizeMode;
            var14 = var14.CONTAIN;
            var1['resizeMode'] = var14;
            var1['participant'] = var13;
            var1['onSingleTap'] = var7;
            var1['onDoubleTap'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            _fun0002_ip = 68; continue _fun0002;
case 66:
            var7 = _closure1_slot16;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 22;
            var2 = var13[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['onSingleTap'] = var9;
            var2['onDoubleTap'] = var9;
            var1 = var7.bind(var4)(var3, var2);
case 68:
            var6 = var1;
case 60:
            var3 = _closure1_slot18;
            var2 = _closure1_slot17;
            var1 = {};
            var9 = var8 == var12;
            var7 = null;
            if(var9) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var7 = null;
            if(var5) { _fun0002_ip = 69; continue _fun0002 }
case 71:
            var9 = _closure1_slot16;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 26;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var5['participant'] = var12;
            var12 = _closure1_slot0;
            var11 = 14;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.AvatarSizes;
            var11 = var11.PROFILE;
            var5['avatarSize'] = var11;
            var11 = 24;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.ResizeMode;
            var11 = var11.COVER;
            var5['resizeMode'] = var11;
            var10 = function onSingleTap() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0007_ip = 72; continue _fun0007 }
case 38:
                    var3 = _closure1_slot13;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0007_ip = 73; continue _fun0007;
case 72:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['onSingleTap'] = var10;
            var7 = var9.bind(var4)(var8, var5);
case 69:
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot20 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var12 = var2.channel;
            var4 = var2.selfParticipant;
            var2 = _closure1_slot19;
            var5 = undefined;
            var13 = var2.bind(var5)();
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 20;
            var3 = var7[var3];
            var9 = var2.bind(var5)(var3);
            var8 = var9.useStateFromStoresArray;
            var3 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot12;
                var1 = var3.consumedRequestToRespondToSeriousThermalState;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.isReactingToThermalState;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var8 = var8.bind(var9)(var6, var3);
            var6 = _closure1_slot3;
            var3 = 2;
            var6 = var6.bind(var5)(var8, var3);
            var3 = 0;
            var8 = var6[var3];
            var3 = 1;
            var6 = var6[var3];
            var3 = {};
            var9 = var12.id;
            var3['channelId'] = var9;
            var3['selfParticipant'] = var4;
            var1 = function useActivityPipParticipant(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.channelId;
                    var _closure3_slot0 = var5;
                    var2 = var1.selfParticipant;
                    var _closure3_slot1 = var2;
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 20;
                    var6 = var10[var1];
                    var8 = undefined;
                    var12 = var4.bind(var8)(var6);
                    var11 = var12.useStateFromStores;
                    var6 = _closure1_slot12;
                    var7 = new Array(1);
                    var7[0] = var6;
                    var6 = function() {
                        var2 = _closure1_slot12;
                        var1 = var2.isReactingToThermalState;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var7 = var11.bind(var12)(var7, var6);
                    var6 = var10[var1];
                    var14 = var4.bind(var8)(var6);
                    var13 = var14.useStateFromStores;
                    var6 = _closure1_slot7;
                    var12 = new Array(1);
                    var12[0] = var6;
                    var11 = new Array(1);
                    var11[0] = var5;
                    var16 = _closure1_slot22;
                    var18 = function() {
                        var4 = _closure1_slot7;
                        var1 = var4.getParticipants;
                        var3 = _closure3_slot0;
                        var2 = var1.bind(var4)(var3);
                        var1 = new Array(3);
                        var1[0] = var2;
                        var2 = var4.getVideoParticipants;
                        var2 = var2.bind(var4)(var3);
                        var1[1] = var2;
                        var2 = var4.getParticipantsVersion;
                        var2 = var2.bind(var4)(var3);
                        var1[2] = var2;
                        return var1;
                    };
                    var20 = var14;
                    var19 = var12;
                    var17 = var11;
                    var11 = var20[var13](var19, var18, var17, var16, var15);
                    var6 = _closure1_slot3;
                    var5 = 2;
                    var12 = var6.bind(var8)(var11, var5);
                    var5 = 0;
                    var11 = var12[var5];
                    var6 = 1;
                    var6 = var12[var6];
                    var1 = var10[var1];
                    var15 = var4.bind(var8)(var1);
                    var14 = var15.useStateFromStores;
                    var1 = _closure1_slot11;
                    var13 = new Array(1);
                    var13[0] = var1;
                    var12 = new Array(1);
                    var12[0] = var2;
                    var1 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var2 = _closure3_slot1;
                            var1 = null;
                            var2 = var1 == var2;
                            if(var2) { _fun0010_ip = 74; continue _fun0010 }
case 52:
                            var3 = _closure1_slot11;
                            var2 = var3.getSpeakers;
                            var4 = var2.bind(var3)();
                            var3 = var4.find;
                            var2 = function(arg1) {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    var4 = arg1;
                                    var1 = _closure3_slot1;
                                    var1 = var1.user;
                                    var1 = var1.id;
                                    var1 = var4 !== var1;
                                    if(!var1) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                                    var3 = _closure1_slot11;
                                    var2 = var3.isSpeaking;
                                    var1 = var2.bind(var3)(var4);
case 75:
                                    return var1;
                                }
                            };
                            var1 = var3.bind(var4)(var2);
case 74:
                            return var1;
                        }
                    };
                    var12 = var14.bind(var15)(var13, var1, var12);
                    var1 = 29;
                    var1 = var10[var1];
                    var10 = var4.bind(var8)(var1);
                    var4 = var10.useLeadingEdgeDebounce;
                    var1 = 1000;
                    var1 = var4.bind(var10)(var12, var1);
                    var _closure3_slot2 = var1;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0009_ip = 77; continue _fun0009 }
case 78:
                    var10 = var11.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot2;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var10.bind(var11)(var1);
                    if(!(var4 != var1)) { _fun0009_ip = 77; continue _fun0009 }
case 79:
                    var10 = var1.type;
                    var9 = _closure1_slot15;
                    var9 = var9.USER;
                    if(!(var10 !== var9)) { _fun0009_ip = 80; continue _fun0009 }
case 77:
                    var9 = var4 == var2;
                    var8 = undefined;
                    if(var9) { _fun0009_ip = 81; continue _fun0009 }
case 82:
                    var8 = var2.streamId;
case 81:
                    if(!(var4 == var8)) { _fun0009_ip = 83; continue _fun0009 }
case 84:
                    if(var7) { _fun0009_ip = 85; continue _fun0009 }
case 86:
                    var7 = new Array(0);
                    var19 = var7;
                    var18 = var6;
                    var17 = 0;
                    var6 = arraySpread(var19, var18, var17);
                    var6 = var7.sort;
                    var3 = function(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.lastSpoke;
                            var1 = arg2;
                            var1 = var1.lastSpoke;
                            var2 = var2 < var1;
                            var1 = -1;
                            if(!var2) { _fun0012_ip = 87; continue _fun0012 }
case 88:
                            var1 = 1;
case 87:
                            return var1;
                        }
                    };
                    var3 = var6.bind(var7)(var3);
                    var3 = var3[var5];
                    if(!(var4 != var3)) { _fun0009_ip = 85; continue _fun0009 }
case 89:
                    return var3;
case 85:
                    return var2;
case 83:
                    return var2;
case 80:
                    return var1;
                }
            };
            var11 = var1.bind(var5)(var3);
            var1 = 30;
            var1 = var7[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useToken;
            var4 = _closure1_slot1;
            var1 = 15;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.unsafe_rawColors;
            var1 = var1.PRIMARY_800;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 == var11;
            var3 = undefined;
            if(var2) { _fun0008_ip = 90; continue _fun0008 }
case 21:
            var10 = var11.user;
            var9 = var10.getAvatarURL;
            var7 = var12.guild_id;
            var2 = 80;
            var3 = var9.bind(var10)(var7, var2);
case 90:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 31;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var15 = var2.bind(var5)(var3, var4);
            if(!(var1 != var11)) { _fun0008_ip = 91; continue _fun0008 }
case 49:
            var2 = var11.streamId;
            var7 = var1 != var2;
            if(!var7) { _fun0008_ip = 92; continue _fun0008 }
case 93:
            var3 = var11.voiceState;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0008_ip = 94; continue _fun0008 }
case 95:
            var2 = var3.selfVideo;
case 94:
            var7 = var2;
case 92:
            var4 = _closure1_slot18;
            var3 = _closure1_slot5;
            var2 = {};
            var10 = var13.avatarContainer;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var10['backgroundColor'] = var15;
            var9[1] = var10;
            var2['style'] = var9;
            if(!var7) { _fun0008_ip = 96; continue _fun0008 }
case 53:
            if(var6) { _fun0008_ip = 96; continue _fun0008 }
case 97:
            var9 = _closure1_slot16;
            var7 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 26;
            var6 = var16[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['participant'] = var11;
            var15 = _closure1_slot0;
            var10 = 14;
            var10 = var16[var10];
            var10 = var15.bind(var5)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.PROFILE;
            var6['avatarSize'] = var10;
            var10 = 24;
            var10 = var16[var10];
            var10 = var15.bind(var5)(var10);
            var10 = var10.ResizeMode;
            var10 = var10.COVER;
            var6['resizeMode'] = var10;
            var7 = var9.bind(var5)(var7, var6);
            _fun0008_ip = 98; continue _fun0008;
case 96:
            var10 = _closure1_slot16;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 14;
            var6 = var17[var15];
            var6 = var16.bind(var5)(var6);
            var9 = var6.Avatar;
            var6 = {};
            var15 = var17[var15];
            var15 = var16.bind(var5)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.LARGE_48;
            var6['size'] = var15;
            var6['channel'] = var12;
            var12 = var12.guild_id;
            var6['guildId'] = var12;
            var12 = var11.user;
            var6['user'] = var12;
            var11 = var11.speaking;
            var6['speaking'] = var11;
            var7 = var10.bind(var5)(var9, var6);
case 98:
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(!var8) { _fun0008_ip = 99; continue _fun0008 }
case 100:
            var10 = _closure1_slot16;
            var9 = _closure1_slot5;
            var8 = {};
            var11 = var13.thermalAlertIconContainer;
            var8['style'] = var11;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 14;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Icon;
            var11 = {};
            var15 = var13.thermalAlertIcon;
            var11['style'] = var15;
            var15 = _closure1_slot1;
            var14 = 32;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var11['source'] = var14;
            var13 = var13.thermalAlertIcon;
            var13 = var13.color;
            var11['color'] = var13;
            var11 = var10.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 99:
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 91:
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot21 = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var18 = var1.channel;
            var17 = var1.pipParticipant;
            var16 = var1.selfParticipant;
            var1 = _closure1_slot19;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 33;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var5 = var6.useIsViewingActivity;
            var1 = {};
            var7 = var18.id;
            var1['channelId'] = var7;
            var10 = var5.bind(var6)(var1);
            var1 = 34;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useShouldForcePipOrientation;
            var1 = {};
            var1['channel'] = var18;
            var21 = var2.bind(var5)(var1);
            var2 = _closure1_slot1;
            var1 = 35;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var18.id;
            var1['channelId'] = var6;
            var1['forcedOrientation'] = var21;
            var12 = var5.bind(var4)(var1);
            var1 = 36;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var20 = var1.width;
            var19 = var1.height;
            var3 = _closure1_slot16;
            var2 = _closure1_slot5;
            var1 = {};
            if(var10) { _fun0013_ip = 101; continue _fun0013 }
case 102:
            var5 = var15.background;
            _fun0013_ip = 103; continue _fun0013;
case 101:
            var5 = var15.backgroundPipFab;
case 103:
            var1['style'] = var5;
            var7 = _closure1_slot16;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = 0.7;
            var5['activeOpacity'] = var8;
            var9 = _closure1_slot5;
            var8 = {};
            if(var10) { _fun0013_ip = 104; continue _fun0013 }
case 105:
            var13 = var15.pip;
            _fun0013_ip = 106; continue _fun0013;
case 104:
            var13 = var15.pipFab;
case 106:
            var11 = new Array(4);
            var11[0] = var13;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var13 = 37;
            var13 = var23[var13];
            var22 = var22.bind(var4)(var13);
            var13 = var22.isAndroid;
            var22 = var13.bind(var22)();
            var13 = undefined;
            if(!var22) { _fun0013_ip = 107; continue _fun0013 }
case 108:
            var13 = var15.elevationShadow;
case 107:
            var11[1] = var13;
            var13 = {};
            if(!(!(var20 > var19))) { _fun0013_ip = 109; continue _fun0013 }
case 110:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 38;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.OrientationType;
            var20 = var19.LANDSCAPE;
            var19 = 'column';
            if(!(var21 === var20)) { _fun0013_ip = 111; continue _fun0013 }
case 109:
            var19 = 'row';
case 111:
            var13['flexDirection'] = var19;
            var11[2] = var13;
            var11[3] = var12;
            var8['style'] = var11;
            var13 = _closure1_slot16;
            if(var10) { _fun0013_ip = 112; continue _fun0013 }
case 113:
            var11 = _closure1_slot20;
            var10 = {};
            var10['channel'] = var18;
            var10['pipParticipant'] = var17;
            var10['selfParticipant'] = var16;
            var10 = var13.bind(var4)(var11, var10);
            _fun0013_ip = 114; continue _fun0013;
case 112:
            var12 = _closure1_slot5;
            var11 = {};
            var19 = 'none';
            var11['pointerEvents'] = var19;
            var15 = var15.activityPipContainer;
            var11['style'] = var15;
            var15 = _closure1_slot21;
            var14 = {};
            var14['channel'] = var18;
            var14['pipParticipant'] = var17;
            var14['selfParticipant'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 114:
            var8['children'] = var10;
            var8 = var7.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 39;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/components/PictureInPictureVideo.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['areParticipantsEqual'] = var2;
    return var1;
})();