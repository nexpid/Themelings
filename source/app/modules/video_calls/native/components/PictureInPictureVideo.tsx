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
 0:
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
            if(var9) { _fun0001_ip = 32; continue _fun0001 }
 29:
            var4 = var6;
 32:
            var4 = undefined;
            var6 = var3;
            if(var6) { _fun0001_ip = 60; continue _fun0001 }
 40:
            var6 = var5().value;
            var9 = var2;
            var9 = var9 === var12;
            var3 = var9;
            if(var9) { _fun0001_ip = 60; continue _fun0001 }
 57:
            var4 = var6;
 60:
            var4 = undefined;
            var6 = var3;
            if(var6) { _fun0001_ip = 88; continue _fun0001 }
 68:
            var5 = var5().value;
            var6 = var2;
            var6 = var6 === var12;
            var3 = var6;
            if(var6) { _fun0001_ip = 88; continue _fun0001 }
 85:
            var4 = var5;
 88:
            var8 = var4;
            var4 = var3;
            if(var4) { _fun0001_ip = 100; continue _fun0001 }
 97:
            var2.return();
 100:
            var10 = arg2;
            var5 = var10[Symbol.iterator];
            var10 = var5().next;
            var6 = undefined;
            var9 = undefined;
            var11 = var10().value;
            var13 = var5;
            var13 = var13 === var12;
            var6 = var13;
            if(var13) { _fun0001_ip = 130; continue _fun0001 }
 127:
            var9 = var11;
 130:
            var9 = undefined;
            var11 = var6;
            if(var11) { _fun0001_ip = 158; continue _fun0001 }
 138:
            var11 = var10().value;
            var13 = var5;
            var13 = var13 === var12;
            var6 = var13;
            if(var13) { _fun0001_ip = 158; continue _fun0001 }
 155:
            var9 = var11;
 158:
            var9 = undefined;
            var11 = var6;
            if(var11) { _fun0001_ip = 186; continue _fun0001 }
 166:
            var10 = var10().value;
            var11 = var5;
            var11 = var11 === var12;
            var6 = var11;
            if(var11) { _fun0001_ip = 186; continue _fun0001 }
 183:
            var9 = var10;
 186:
            var7 = var9;
            var9 = var6;
            if(var9) { _fun0001_ip = 198; continue _fun0001 }
 195:
            var5.return();
 198:
            var7 = var8 === var7;
            return var7;
 204:
            CatchBlockStart(arg_register=3);
            _fun0001_ip = 210; continue _fun0001;
 208:
            CatchBlockStart(arg_register=3);
 210:
            if(var6) { _fun0001_ip = 216; continue _fun0001 }
 213:
            var5.return();
 216:
            throw var4;
 218:
            CatchBlockStart(arg_register=0);
            _fun0001_ip = 224; continue _fun0001;
 222:
            CatchBlockStart(arg_register=0);
 224:
            if(var3) { _fun0001_ip = 230; continue _fun0001 }
 227:
            var2.return();
 230:
            throw var1;
        }
    };
    var _closure1_slot24 = var2;
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
    var9 = var5.useWindowDimensions;
    var _closure1_slot5 = var9;
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.togglePipFocus;
    var _closure1_slot14 = var9;
    var5 = var5.useIsVoiceChatFocused;
    var _closure1_slot15 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Color;
    var _closure1_slot16 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ParticipantTypes;
    var _closure1_slot17 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot18 = var9;
    var9 = var5.Fragment;
    var _closure1_slot19 = var9;
    var5 = var5.jsxs;
    var _closure1_slot20 = var5;
    var5 = 14;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = 15;
    var12 = var7[var11];
    var14 = var6.bind(var1)(var12);
    var12 = var14.generateBoxShadowStyle;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
    var11 = var12.bind(var14)(var11);
    var5['elevationShadow'] = var11;
    var11 = {};
    var12 = 16;
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
    var _closure1_slot21 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useVoiceChatNavigationContext;
            var2 = var1.bind(var2)();
            var8 = null;
            var3 = var8 == var2;
            var1 = undefined;
            if(var3) { _fun0002_ip = 94; continue _fun0002 }
 88:
            var1 = var2.openVoice;
 94:
            if(!(var8 == var1)) { _fun0002_ip = 124; continue _fun0002 }
 98:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 18;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var1 = var2.noop;
 124:
            _closure2_slot2 = var1;
            var1 = _closure1_slot15;
            var1 = var1.bind(var4)();
            _closure2_slot3 = var1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var15.id;
            var1 = var2.bind(var4)(var1);
            _closure2_slot4 = var1;
            var1 = var8 == var13;
            var2 = undefined;
            if(var1) { _fun0002_ip = 188; continue _fun0002 }
 183:
            var2 = var13.type;
 188:
            var1 = _closure1_slot17;
            var1 = var1.ACTIVITY;
            var5 = var2 === var1;
            if(!var5) { _fun0002_ip = 244; continue _fun0002 }
 205:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var3 = var8 == var13;
            var1 = undefined;
            if(var3) { _fun0002_ip = 239; continue _fun0002 }
 234:
            var1 = var13.applicationId;
 239:
            var5 = var2.bind(var4)(var1);
 244:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = new Array(1);
            var2[0] = var13;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 43; continue _fun0003 }
 16:
                    var4 = _closure1_slot10;
                    var3 = var4.isLocalVideoDisabled;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 43:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var3, var1, var2);
            var9 = function onScreenshareTap() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot11;
                    var2 = var3.getVoiceChannelId;
                    var6 = var2.bind(var3)();
                    var5 = null;
                    if(!(var5 != var6)) { _fun0004_ip = 109; continue _fun0004 }
 23:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.selectParticipant;
                    var7 = _closure2_slot1;
                    var8 = var5 == var7;
                    var7 = undefined;
                    if(var8) { _fun0004_ip = 76; continue _fun0004 }
 67:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
 76:
                    var8 = var5 != var7;
                    var5 = null;
                    if(!var8) { _fun0004_ip = 88; continue _fun0004 }
 85:
                    var5 = var7;
 88:
                    var3 = var3.bind(var4)(var6, var5);
                    var3 = _closure2_slot3;
                    if(!var3) { _fun0004_ip = 109; continue _fun0004 }
 101:
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var2)();
 109:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = function onPipTap() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0005_ip = 20; continue _fun0005 }
 10:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
 20:
                    var3 = _closure2_slot4;
                    if(var3) { _fun0005_ip = 42; continue _fun0005 }
 30:
                    var4 = _closure1_slot14;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
                    _fun0005_ip = 87; continue _fun0005;
 42:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.selectParticipant;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = null;
                    var1 = var3.bind(var4)(var2, var1);
 87:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var8 == var13;
            var3 = undefined;
            if(var1) { _fun0002_ip = 325; continue _fun0002 }
 320:
            var3 = var13.type;
 325:
            var1 = _closure1_slot17;
            var1 = var1.HIDDEN_STREAM;
            if(!(var1 !== var3)) { _fun0002_ip = 600; continue _fun0002 }
 342:
            var1 = _closure1_slot17;
            var1 = var1.STREAM;
            if(!(var1 !== var3)) { _fun0002_ip = 600; continue _fun0002 }
 359:
            var1 = _closure1_slot17;
            var1 = var1.USER;
            if(!(var1 !== var3)) { _fun0002_ip = 448; continue _fun0002 }
 373:
            var1 = _closure1_slot17;
            var1 = var1.ACTIVITY;
            var6 = null;
            if(!(var1 === var3)) { _fun0002_ip = 767; continue _fun0002 }
 392:
            var14 = _closure1_slot18;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 29;
            var1 = var16[var1];
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var1['participant'] = var13;
            var1['channel'] = var15;
            var15 = function onSingleTap() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure1_slot7;
                    var1 = var3.getCurrentEmbeddedActivity;
                    var1 = var1.bind(var3)();
                    var3 = null;
                    if(!(var3 != var1)) { _fun0006_ip = 68; continue _fun0006 }
 23:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 30;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure2_slot0;
                    var2 = var2.guild_id;
                    var1 = var1.location;
                    var1 = var3.bind(var4)(var2, var1);
 68:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0006_ip = 88; continue _fun0006 }
 78:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 88:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onSingleTap'] = var15;
            var6 = var14.bind(var4)(var3, var1);
            _fun0002_ip = 767; continue _fun0002;
 448:
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 26;
            var1 = var14[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.bind(var4)(var13);
            var1 = null;
            if(!var3) { _fun0002_ip = 592; continue _fun0002 }
 478:
            var1 = null;
            if(var2) { _fun0002_ip = 592; continue _fun0002 }
 483:
            var14 = _closure1_slot18;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 27;
            var2 = var17[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['participant'] = var13;
            var16 = _closure1_slot0;
            var15 = 28;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.PROFILE;
            var2['avatarSize'] = var15;
            var15 = 25;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.ResizeMode;
            var15 = var15.COVER;
            var2['resizeMode'] = var15;
            var2['onSingleTap'] = var7;
            var2['onDoubleTap'] = var7;
            var1 = var14.bind(var4)(var3, var2);
 592:
            var6 = var1;
            _fun0002_ip = 767; continue _fun0002;
 600:
            var1 = var13.user;
            var2 = var1.id;
            var3 = _closure1_slot9;
            var1 = var3.getId;
            var1 = var1.bind(var3)();
            if(!(var2 !== var1)) { _fun0002_ip = 722; continue _fun0002 }
 628:
            var3 = _closure1_slot18;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 24;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'removeEmptyStateButton': true, 'removeEmptyStateImage': true};
            var15 = _closure1_slot0;
            var14 = 25;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.ResizeMode;
            var14 = var14.CONTAIN;
            var1['resizeMode'] = var14;
            var1['participant'] = var13;
            var1['onSingleTap'] = var7;
            var1['onDoubleTap'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            _fun0002_ip = 764; continue _fun0002;
 722:
            var7 = _closure1_slot18;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 23;
            var2 = var13[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['onSingleTap'] = var9;
            var2['onDoubleTap'] = var9;
            var1 = var7.bind(var4)(var3, var2);
 764:
            var6 = var1;
 767:
            var3 = _closure1_slot20;
            var2 = _closure1_slot19;
            var1 = {};
            var9 = var8 == var12;
            var7 = null;
            if(var9) { _fun0002_ip = 900; continue _fun0002 }
 786:
            var7 = null;
            if(var5) { _fun0002_ip = 900; continue _fun0002 }
 791:
            var9 = _closure1_slot18;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 27;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var5['participant'] = var12;
            var12 = _closure1_slot0;
            var11 = 28;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.AvatarSizes;
            var11 = var11.PROFILE;
            var5['avatarSize'] = var11;
            var11 = 25;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.ResizeMode;
            var11 = var11.COVER;
            var5['resizeMode'] = var11;
            var10 = function onSingleTap() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0007_ip = 25; continue _fun0007 }
 10:
                    var3 = _closure1_slot14;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0007_ip = 35; continue _fun0007;
 25:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['onSingleTap'] = var10;
            var7 = var9.bind(var4)(var8, var5);
 900:
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot22 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var14 = var2.channel;
            var7 = var2.selfParticipant;
            var2 = _closure1_slot21;
            var5 = undefined;
            var13 = var2.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 21;
            var4 = var3[var4];
            var9 = var2.bind(var5)(var4);
            var8 = var9.useStateFromStoresArray;
            var4 = _closure1_slot13;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot13;
                var1 = var3.consumedRequestToRespondToSeriousThermalState;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.isReactingToThermalState;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var8 = var8.bind(var9)(var6, var4);
            var6 = _closure1_slot3;
            var4 = 2;
            var6 = var6.bind(var5)(var8, var4);
            var4 = 0;
            var8 = var6[var4];
            var4 = 1;
            var6 = var6[var4];
            var4 = {};
            var9 = var14.id;
            var4['channelId'] = var9;
            var4['selfParticipant'] = var7;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.channelId;
                    var _closure3_slot0 = var5;
                    var2 = var1.selfParticipant;
                    var _closure3_slot1 = var2;
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 21;
                    var6 = var10[var1];
                    var8 = undefined;
                    var12 = var4.bind(var8)(var6);
                    var11 = var12.useStateFromStores;
                    var6 = _closure1_slot13;
                    var7 = new Array(1);
                    var7[0] = var6;
                    var6 = function() {
                        var2 = _closure1_slot13;
                        var1 = var2.isReactingToThermalState;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var7 = var11.bind(var12)(var7, var6);
                    var6 = var10[var1];
                    var14 = var4.bind(var8)(var6);
                    var13 = var14.useStateFromStores;
                    var6 = _closure1_slot8;
                    var12 = new Array(1);
                    var12[0] = var6;
                    var11 = new Array(1);
                    var11[0] = var5;
                    var16 = _closure1_slot24;
                    var18 = function() {
                        var4 = _closure1_slot8;
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
                    var1 = _closure1_slot12;
                    var13 = new Array(1);
                    var13[0] = var1;
                    var12 = new Array(1);
                    var12[0] = var2;
                    var1 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var2 = _closure3_slot1;
                            var1 = null;
                            var2 = var1 == var2;
                            if(var2) { _fun0010_ip = 51; continue _fun0010 }
 16:
                            var3 = _closure1_slot12;
                            var2 = var3.getSpeakers;
                            var4 = var2.bind(var3)();
                            var3 = var4.find;
                            var2 = function(arg1) {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                    var4 = arg1;
                                    var1 = _closure3_slot1;
                                    var1 = var1.user;
                                    var1 = var1.id;
                                    var1 = var4 !== var1;
                                    if(!var1) { _fun0011_ip = 45; continue _fun0011 }
 27:
                                    var3 = _closure1_slot12;
                                    var2 = var3.isSpeaking;
                                    var1 = var2.bind(var3)(var4);
 45:
                                    return var1;
                                }
                            };
                            var1 = var3.bind(var4)(var2);
 51:
                            return var1;
                        }
                    };
                    var12 = var14.bind(var15)(var13, var1, var12);
                    var1 = 31;
                    var1 = var10[var1];
                    var10 = var4.bind(var8)(var1);
                    var4 = var10.useLeadingEdgeDebounce;
                    var1 = 1000;
                    var1 = var4.bind(var10)(var12, var1);
                    var _closure3_slot2 = var1;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0009_ip = 284; continue _fun0009 }
 245:
                    var10 = var11.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot2;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var10.bind(var11)(var1);
                    if(!(var4 != var1)) { _fun0009_ip = 284; continue _fun0009 }
 265:
                    var10 = var1.type;
                    var9 = _closure1_slot17;
                    var9 = var9.USER;
                    if(!(var10 !== var9)) { _fun0009_ip = 352; continue _fun0009 }
 284:
                    var9 = var4 == var2;
                    var8 = undefined;
                    if(var9) { _fun0009_ip = 299; continue _fun0009 }
 293:
                    var8 = var2.streamId;
 299:
                    if(!(var4 == var8)) { _fun0009_ip = 350; continue _fun0009 }
 303:
                    if(var7) { _fun0009_ip = 348; continue _fun0009 }
 306:
                    var7 = new Array(0);
                    var19 = var7;
                    var18 = var6;
                    var17 = 0;
                    var6 = arraySpread(var19, var18, var17);
                    var6 = var7.sort;
                    var3 = function(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.lastSpoke;
                            var1 = arg2;
                            var1 = var1.lastSpoke;
                            var2 = var2 < var1;
                            var1 = -1;
                            if(!var2) { _fun0012_ip = 34; continue _fun0012 }
 31:
                            var1 = 1;
 34:
                            return var1;
                        }
                    };
                    var3 = var6.bind(var7)(var3);
                    var3 = var3[var5];
                    if(!(var4 != var3)) { _fun0009_ip = 348; continue _fun0009 }
 346:
                    return var3;
 348:
                    return var2;
 350:
                    return var2;
 352:
                    return var1;
                }
            };
            var12 = var1.bind(var5)(var4);
            var1 = 32;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useColorValue;
            var1 = _closure1_slot16;
            var1 = var1.PRIMARY_800;
            var1 = var2.bind(var3)(var1);
            var4 = var1.hex;
            var1 = null;
            var2 = var1 == var12;
            var3 = undefined;
            if(var2) { _fun0008_ip = 204; continue _fun0008 }
 179:
            var10 = var12.user;
            var9 = var10.getAvatarURL;
            var7 = var14.guild_id;
            var2 = 80;
            var3 = var9.bind(var10)(var7, var2);
 204:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 33;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var15 = var2.bind(var5)(var3, var4);
            if(!(var1 != var12)) { _fun0008_ip = 641; continue _fun0008 }
 237:
            var2 = var12.streamId;
            var7 = var1 != var2;
            if(!var7) { _fun0008_ip = 274; continue _fun0008 }
 250:
            var3 = var12.voiceState;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0008_ip = 271; continue _fun0008 }
 265:
            var2 = var3.selfVideo;
 271:
            var7 = var2;
 274:
            var4 = _closure1_slot20;
            var3 = _closure1_slot6;
            var2 = {};
            var10 = var13.avatarContainer;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var10['backgroundColor'] = var15;
            var9[1] = var10;
            var2['style'] = var9;
            if(!var7) { _fun0008_ip = 419; continue _fun0008 }
 315:
            if(var6) { _fun0008_ip = 419; continue _fun0008 }
 318:
            var9 = _closure1_slot18;
            var7 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 27;
            var6 = var16[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['participant'] = var12;
            var15 = _closure1_slot0;
            var10 = 28;
            var10 = var16[var10];
            var10 = var15.bind(var5)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.PROFILE;
            var6['avatarSize'] = var10;
            var10 = 25;
            var10 = var16[var10];
            var10 = var15.bind(var5)(var10);
            var10 = var10.ResizeMode;
            var10 = var10.COVER;
            var6['resizeMode'] = var10;
            var7 = var9.bind(var5)(var7, var6);
            _fun0008_ip = 513; continue _fun0008;
 419:
            var10 = _closure1_slot18;
            var9 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 28;
            var6 = var17[var15];
            var9 = var9.bind(var5)(var6);
            var6 = {};
            var16 = _closure1_slot0;
            var15 = var17[var15];
            var15 = var16.bind(var5)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.LARGE_48;
            var6['size'] = var15;
            var6['channel'] = var14;
            var14 = var14.guild_id;
            var6['guildId'] = var14;
            var14 = var12.user;
            var6['user'] = var14;
            var12 = var12.speaking;
            var6['speaking'] = var12;
            var7 = var10.bind(var5)(var9, var6);
 513:
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(!var8) { _fun0008_ip = 625; continue _fun0008 }
 526:
            var10 = _closure1_slot18;
            var9 = _closure1_slot6;
            var8 = {};
            var12 = var13.thermalAlertIconContainer;
            var8['style'] = var12;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 34;
            var11 = var16[var11];
            var12 = var15.bind(var5)(var11);
            var11 = {};
            var14 = var13.thermalAlertIcon;
            var11['style'] = var14;
            var14 = 35;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var11['source'] = var14;
            var13 = var13.thermalAlertIcon;
            var13 = var13.color;
            var11['color'] = var13;
            var11 = var10.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 625:
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 641:
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot23 = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var18 = var1.channel;
            var17 = var1.pipParticipant;
            var16 = var1.selfParticipant;
            var1 = _closure1_slot21;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 36;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var5 = var6.useIsViewingActivity;
            var1 = {};
            var7 = var18.id;
            var1['channelId'] = var7;
            var10 = var5.bind(var6)(var1);
            var1 = 37;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useShouldForcePipOrientation;
            var1 = {};
            var1['channel'] = var18;
            var21 = var2.bind(var5)(var1);
            var2 = _closure1_slot1;
            var1 = 38;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var3 = var18.id;
            var1['channelId'] = var3;
            var1['forcedOrientation'] = var21;
            var12 = var2.bind(var4)(var1);
            var1 = _closure1_slot5;
            var1 = var1.bind(var4)();
            var20 = var1.width;
            var19 = var1.height;
            var3 = _closure1_slot18;
            var2 = _closure1_slot6;
            var1 = {};
            if(var10) { _fun0013_ip = 180; continue _fun0013 }
 172:
            var5 = var15.background;
            _fun0013_ip = 186; continue _fun0013;
 180:
            var5 = var15.backgroundPipFab;
 186:
            var1['style'] = var5;
            var7 = _closure1_slot18;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = 0.7;
            var5['activeOpacity'] = var8;
            var9 = _closure1_slot6;
            var8 = {};
            if(var10) { _fun0013_ip = 232; continue _fun0013 }
 224:
            var13 = var15.pip;
            _fun0013_ip = 238; continue _fun0013;
 232:
            var13 = var15.pipFab;
 238:
            var11 = new Array(4);
            var11[0] = var13;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var13 = 39;
            var13 = var23[var13];
            var22 = var22.bind(var4)(var13);
            var13 = var22.isAndroid;
            var22 = var13.bind(var22)();
            var13 = undefined;
            if(!var22) { _fun0013_ip = 286; continue _fun0013 }
 280:
            var13 = var15.elevationShadow;
 286:
            var11[1] = var13;
            var13 = {};
            if(!(!(var20 > var19))) { _fun0013_ip = 336; continue _fun0013 }
 296:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 40;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.OrientationType;
            var20 = var19.LANDSCAPE;
            var19 = 'column';
            if(!(var21 === var20)) { _fun0013_ip = 340; continue _fun0013 }
 336:
            var19 = 'row';
 340:
            var13['flexDirection'] = var19;
            var11[2] = var13;
            var11[3] = var12;
            var8['style'] = var11;
            var13 = _closure1_slot18;
            if(var10) { _fun0013_ip = 391; continue _fun0013 }
 363:
            var11 = _closure1_slot22;
            var10 = {};
            var10['channel'] = var18;
            var10['pipParticipant'] = var17;
            var10['selfParticipant'] = var16;
            var10 = var13.bind(var4)(var11, var10);
            _fun0013_ip = 452; continue _fun0013;
 391:
            var12 = _closure1_slot6;
            var11 = {};
            var19 = 'none';
            var11['pointerEvents'] = var19;
            var15 = var15.activityPipContainer;
            var11['style'] = var15;
            var15 = _closure1_slot23;
            var14 = {};
            var14['channel'] = var18;
            var14['pipParticipant'] = var17;
            var14['selfParticipant'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 452:
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
    var5 = 41;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/components/PictureInPictureVideo.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['areParticipantsEqual'] = var2;
    return var1;
})();