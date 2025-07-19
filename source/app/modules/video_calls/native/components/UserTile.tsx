// app/modules/video_calls/native/components/UserTile.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var7 = var6[var4];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.clearVoiceChannelEffectForUser;
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
    var4 = var4.VideoToggleState;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var7 = var4.jsxs;
    var _closure1_slot15 = var7;
    var4 = var4.Fragment;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'width': '100%', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
    var11 = 12;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var10['backgroundColor'] = var13;
    var4['container'] = var10;
    var10 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center', 'alignSelf': 'stretch'};
    var4['imageBackground'] = var10;
    var10 = {'width': '100%', 'flexDirection': 'row', 'justifyContent': 'center'};
    var4['autoDisabledVideoWrapper'] = var10;
    var10 = {'backgroundColor': null, 'alignItems': 'center', 'height': 24};
    var13 = 13;
    var14 = var6[var13];
    var17 = var5.bind(var1)(var14);
    var15 = var17.hexWithOpacity;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.PRIMARY_700;
    var16 = 0.5;
    var14 = var15.bind(var17)(var14, var16);
    var10['backgroundColor'] = var14;
    var4['autoDisabledVideo'] = var10;
    var10 = {'borderRadius': null, 'width': 24, 'justifyContent': 'center'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var10['borderRadius'] = var14;
    var4['autoDisabledVideoIconWrapper'] = var10;
    var10 = {'borderRadius': null, 'flexDirection': 'row', 'justifyContent': 'space-evenly', 'paddingHorizontal': 8, 'paddingVertical': 4, 'alignItems': 'center'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var4['autoDisabledVideoTextWrapper'] = var10;
    var10 = {'position': 'absolute', 'bottom': 8, 'right': 8, 'backgroundColor': null, 'borderRadius': null, 'width': 24, 'height': 24, 'justifyContent': 'center', 'alignItems': 'center'};
    var13 = var6[var13];
    var15 = var5.bind(var1)(var13);
    var14 = var15.hexWithOpacity;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_700;
    var13 = var14.bind(var15)(var13, var16);
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var10['borderRadius'] = var11;
    var4['statusWrapper'] = var10;
    var10 = {'marginLeft': 8, 'height': 20, 'alignItems': 'center'};
    var4['labelText'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var14 = var1.streamId;
            var12 = var1.user;
            var15 = var1.resizeMode;
            var4 = var1.ringing;
            var7 = var1.avatarSize;
            var8 = var1.speaking;
            var13 = var1.gestureEnabled;
            var3 = var1.hasVideo;
            var _closure2_slot0 = var3;
            var11 = var1.guildId;
            var1 = _closure1_slot17;
            var5 = undefined;
            var9 = var1.bind(var5)();
            var _closure2_slot1 = var9;
            var1 = var12.id;
            var _closure2_slot2 = var1;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 14;
            var10 = var19[var17];
            var22 = var18.bind(var5)(var10);
            var21 = var22.useStateFromStores;
            var10 = _closure1_slot8;
            var20 = new Array(1);
            var20[0] = var10;
            var16 = new Array(2);
            var16[0] = var3;
            var16[1] = var1;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 35; continue _fun0002 }
 10:
                    var3 = _closure2_slot2;
                    var4 = _closure1_slot8;
                    var2 = var4.getId;
                    var2 = var2.bind(var4)();
                    var1 = var3 === var2;
 35:
                    return var1;
                }
            };
            var10 = var21.bind(var22)(var20, var10, var16);
            var16 = var19[var17];
            var24 = var18.bind(var5)(var16);
            var23 = var24.useStateFromStoresArray;
            var16 = _closure1_slot10;
            var22 = new Array(1);
            var22[0] = var16;
            var21 = new Array(1);
            var21[0] = var1;
            var20 = function() {
                var3 = _closure1_slot10;
                var2 = var3.isLocalVideoAutoDisabled;
                var1 = _closure2_slot2;
                var2 = var2.bind(var3)(var1);
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var22 = var23.bind(var24)(var22, var20, var21);
            var21 = _closure1_slot3;
            var20 = 1;
            var21 = var21.bind(var5)(var22, var20);
            var20 = 0;
            var20 = var21[var20];
            var _closure2_slot3 = var20;
            var17 = var19[var17];
            var19 = var18.bind(var5)(var17);
            var18 = var19.useStateFromStores;
            var17 = new Array(1);
            var17[0] = var16;
            var16 = new Array(1);
            var16[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 28; continue _fun0003 }
 13:
                    var1 = _closure1_slot11;
                    var1 = var1.NONE;
                    _fun0003_ip = 63; continue _fun0003;
 28:
                    var5 = _closure1_slot10;
                    var4 = var5.getVideoToggleState;
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot13;
                    var2 = var2.DEFAULT;
                    var1 = var4.bind(var5)(var3, var2);
 63:
                    return var1;
                }
            };
            var16 = var18.bind(var19)(var17, var1, var16);
            var1 = _closure1_slot11;
            var1 = var1.AUTO_PROBING;
            var1 = var16 === var1;
            var _closure2_slot4 = var1;
            if(var4) { _fun0001_ip = 399; continue _fun0001 }
 287:
            if(!var3) { _fun0001_ip = 399; continue _fun0001 }
 290:
            if(var1) { _fun0001_ip = 399; continue _fun0001 }
 293:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 20;
            var1 = var16[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['resizeMode'] = var15;
            var1['streamId'] = var14;
            var1['gestureEnabled'] = var13;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 21;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.VideoSpinnerContext;
            if(var10) { _fun0001_ip = 371; continue _fun0001 }
 363:
            var10 = var13.REMOTE_VIDEO;
            _fun0001_ip = 377; continue _fun0001;
 371:
            var10 = var13.SELF_VIDEO;
 377:
            var1['videoSpinnerContext'] = var10;
            var10 = var12.id;
            var1['userId'] = var10;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 481; continue _fun0001;
 399:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 15;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var9 = var9.imageBackground;
            var2['style'] = var9;
            var10 = var12.getAvatarURL;
            var9 = 128;
            var9 = var10.bind(var12)(var11, var9);
            var2['url'] = var9;
            var2['speaking'] = var8;
            var2['size'] = var7;
            var6 = function renderVideoDetails() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0004_ip = 22; continue _fun0004 }
 10:
                    var3 = _closure2_slot4;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 295; continue _fun0004 }
 22:
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var11 = _closure2_slot1;
                    var2 = var11.autoDisabledVideoWrapper;
                    var3['style'] = var2;
                    var7 = _closure1_slot15;
                    var6 = {};
                    var8 = var11.autoDisabledVideo;
                    var2 = new Array(2);
                    var2[0] = var8;
                    var8 = var11.autoDisabledVideoTextWrapper;
                    var2[1] = var8;
                    var6['style'] = var2;
                    var13 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var12 = 16;
                    var8 = var15[var12];
                    var2 = undefined;
                    var10 = var13.bind(var2)(var8);
                    var8 = {};
                    var14 = 17;
                    var14 = var15[var14];
                    var14 = var13.bind(var2)(var14);
                    var8['source'] = var14;
                    var12 = var15[var12];
                    var12 = var13.bind(var2)(var12);
                    var12 = var12.Sizes;
                    var12 = var12.SMALL;
                    var8['size'] = var12;
                    var12 = true;
                    var8['disableColor'] = var12;
                    var10 = var5.bind(var2)(var10, var8);
                    var8 = new Array(2);
                    var8[0] = var10;
                    var14 = _closure1_slot0;
                    var9 = 18;
                    var9 = var15[var9];
                    var9 = var14.bind(var2)(var9);
                    var10 = var9.Text;
                    var9 = {'variant': 'text-sm/normal', 'color': 'text-normal'};
                    var11 = var11.labelText;
                    var9['style'] = var11;
                    var11 = 19;
                    var12 = var15[var11];
                    var12 = var14.bind(var2)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var15[var11];
                    var11 = var14.bind(var2)(var11);
                    var11 = var11.t;
                    var11 = var11.m2Hyj4;
                    var11 = var12.bind(var13)(var11);
                    var9['children'] = var11;
                    var9 = var5.bind(var2)(var10, var9);
                    var8[1] = var9;
                    var6['children'] = var8;
                    var6 = var7.bind(var2)(var4, var6);
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
 295:
                    return var1;
                }
            };
            var2['renderVideoDetails'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 481:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var2 = var4.muted;
            var3 = var4.deafened;
            var9 = var4.userId;
            var _closure2_slot0 = var9;
            var16 = var4.style;
            var4 = _closure1_slot17;
            var5 = undefined;
            var12 = var4.bind(var5)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 14;
            var4 = var7[var4];
            var8 = var6.bind(var5)(var4);
            var7 = var8.useStateFromStoresArray;
            var4 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = new Array(1);
            var4[0] = var9;
            var1 = function() {
                var4 = _closure1_slot10;
                var1 = var4.isLocalMute;
                var3 = _closure2_slot0;
                var2 = var1.bind(var4)(var3);
                var1 = new Array(3);
                var1[0] = var2;
                var2 = var4.isLocalVideoDisabled;
                var2 = var2.bind(var4)(var3);
                var1[1] = var2;
                var2 = var4.isLocalVideoAutoDisabled;
                var2 = var2.bind(var4)(var3);
                var1[2] = var2;
                return var1;
            };
            var6 = var7.bind(var8)(var6, var1, var4);
            var4 = _closure1_slot3;
            var1 = 3;
            var6 = var4.bind(var5)(var6, var1);
            var1 = 0;
            var4 = var6[var1];
            var1 = 1;
            var14 = var6[var1];
            var1 = 2;
            var1 = var6[var1];
            if(var4) { _fun0005_ip = 192; continue _fun0005 }
 140:
            if(var3) { _fun0005_ip = 170; continue _fun0005 }
 143:
            var15 = undefined;
            if(!var2) { _fun0005_ip = 212; continue _fun0005 }
 148:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 24;
            var2 = var4[var2];
            var15 = var3.bind(var5)(var2);
            _fun0005_ip = 212; continue _fun0005;
 170:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 23;
            var2 = var4[var2];
            var15 = var3.bind(var5)(var2);
            _fun0005_ip = 212; continue _fun0005;
 192:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 22;
            var2 = var4[var2];
            var15 = var3.bind(var5)(var2);
 212:
            if(!var14) { _fun0005_ip = 218; continue _fun0005 }
 215:
            var14 = !var1;
 218:
            if(var14) { _fun0005_ip = 233; continue _fun0005 }
 221:
            var1 = null;
            var2 = var1 != var15;
            if(!var2) { _fun0005_ip = 574; continue _fun0005 }
 233:
            var4 = _closure1_slot15;
            var3 = _closure1_slot16;
            var2 = {};
            var13 = null;
            var7 = null;
            if(!var14) { _fun0005_ip = 368; continue _fun0005 }
 250:
            var9 = _closure1_slot14;
            var8 = _closure1_slot5;
            var6 = {};
            var17 = var12.statusWrapper;
            var10 = new Array(2);
            var10[0] = var17;
            var10[1] = var16;
            var6['style'] = var10;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = 16;
            var10 = var20[var18];
            var17 = var19.bind(var5)(var10);
            var10 = {};
            var21 = 25;
            var21 = var20[var21];
            var21 = var19.bind(var5)(var21);
            var10['source'] = var21;
            var18 = var20[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.Sizes;
            var18 = var18.SMALL;
            var10['size'] = var18;
            var18 = true;
            var10['disableColor'] = var18;
            var10 = var9.bind(var5)(var17, var10);
            var6['children'] = var10;
            var7 = var9.bind(var5)(var8, var6);
 368:
            var6 = new Array(2);
            var6[0] = var7;
            var8 = var13 != var15;
            var7 = null;
            if(!var8) { _fun0005_ip = 560; continue _fun0005 }
 388:
            var10 = _closure1_slot14;
            var9 = _closure1_slot5;
            var8 = {};
            var17 = var12.statusWrapper;
            var12 = new Array(3);
            var12[0] = var17;
            var12[1] = var16;
            var13 = null;
            if(!var14) { _fun0005_ip = 433; continue _fun0005 }
 421:
            var14 = {};
            var16 = 38;
            var14['right'] = var16;
            var13 = var14;
 433:
            var12[2] = var13;
            var8['style'] = var12;
            var13 = _closure1_slot14;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = 16;
            var11 = var17[var14];
            var12 = var16.bind(var5)(var11);
            var11 = {};
            var11['source'] = var15;
            var14 = var17[var14];
            var14 = var16.bind(var5)(var14);
            var14 = var14.Sizes;
            var14 = var14.SMALL;
            var11['size'] = var14;
            var14 = 12;
            var14 = var17[var14];
            var14 = var16.bind(var5)(var14);
            var14 = var14.unsafe_rawColors;
            var14 = var14.WHITE_500;
            var11['color'] = var14;
            var14 = 22;
            var14 = var17[var14];
            var14 = var16.bind(var5)(var14);
            var14 = var15 === var14;
            var11['disableColor'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 560:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 574:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/UserTile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var1 = var6.participant;
            var _closure2_slot0 = var1;
            var5 = var6.onSingleTap;
            var _closure2_slot1 = var5;
            var3 = var6.onDoubleTap;
            var _closure2_slot2 = var3;
            var2 = var6.onLongPress;
            var _closure2_slot3 = var2;
            var22 = var6.avatarSize;
            var25 = var6.resizeMode;
            var4 = undefined;
            if(!(var25 === var4)) { _fun0006_ip = 98; continue _fun0006 }
 63:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 20;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.ResizeMode;
            var25 = var7.COVER;
 98:
            var12 = var6.statusStyle;
            var17 = var6.gestureEnabled;
            var18 = var6.hasNotch;
            var16 = var6.style;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var6 = _closure1_slot17;
            var8 = var6.bind(var4)();
            var6 = _closure1_slot4;
            var10 = var6.useCallback;
            var7 = new Array(2);
            var7[0] = var5;
            var7[1] = var1;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0007_ip = 33; continue _fun0007 }
 20:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 33:
                    return var1;
                }
            };
            var7 = var10.bind(var6)(var5, var7);
            var10 = var6.useCallback;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var1;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0008_ip = 33; continue _fun0008 }
 20:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 33:
                    return var1;
                }
            };
            var30 = var10.bind(var6)(var3, var5);
            var5 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0009_ip = 33; continue _fun0009 }
 20:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 33:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var2, var3);
            var26 = var1.streamId;
            var24 = var1.ringing;
            var13 = var1.user;
            _closure2_slot4 = var13;
            var6 = var1.voiceState;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 26;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var10 = var1.id;
            var2['userId'] = var10;
            var23 = var3.bind(var4)(var2);
            var11 = _closure1_slot9;
            var3 = var11.getChannel;
            var10 = null;
            var14 = var10 == var6;
            var2 = undefined;
            if(var14) { _fun0006_ip = 322; continue _fun0006 }
 317:
            var2 = var6.channelId;
 322:
            var3 = var3.bind(var11)(var2);
            var11 = var10 == var3;
            var2 = undefined;
            if(var11) { _fun0006_ip = 341; continue _fun0006 }
 336:
            var2 = var3.guild_id;
 341:
            var3 = var10 != var2;
            var29 = undefined;
            if(!var3) { _fun0006_ip = 353; continue _fun0006 }
 350:
            var29 = var2;
 353:
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 27;
            var2 = var11[var2];
            var2 = var3.bind(var4)(var2);
            var27 = var2.bind(var4)(var1);
            var3 = var10 == var6;
            var2 = undefined;
            if(var3) { _fun0006_ip = 397; continue _fun0006 }
 387:
            var3 = var6.isVoiceMuted;
            var2 = var3.bind(var6)();
 397:
            var15 = var10 != var2;
            if(!var15) { _fun0006_ip = 407; continue _fun0006 }
 404:
            var15 = var2;
 407:
            var3 = var10 == var6;
            var2 = undefined;
            if(var3) { _fun0006_ip = 426; continue _fun0006 }
 416:
            var3 = var6.isVoiceDeafened;
            var2 = var3.bind(var6)();
 426:
            var14 = var10 != var2;
            if(!var14) { _fun0006_ip = 436; continue _fun0006 }
 433:
            var14 = var2;
 436:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = 14;
            var2 = var6[var11];
            var31 = var3.bind(var4)(var2);
            var28 = var31.useStateFromStores;
            var2 = _closure1_slot10;
            var21 = new Array(1);
            var21[0] = var2;
            var2 = var13.id;
            var19 = new Array(2);
            var19[0] = var2;
            var2 = var1.type;
            var19[1] = var2;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = _closure2_slot4;
                    var3 = var1.id;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0010_ip = 85; continue _fun0010 }
 21:
                    var5 = _closure1_slot10;
                    var4 = var5.isLocalVideoDisabled;
                    var3 = _closure2_slot4;
                    var3 = var3.id;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var6 = 28;
                    var6 = var7[var6];
                    var7 = undefined;
                    var6 = var8.bind(var7)(var6);
                    var2 = _closure2_slot0;
                    var2 = var2.type;
                    var2 = var6.bind(var7)(var2);
                    var1 = var4.bind(var5)(var3, var2);
 85:
                    return var1;
                }
            };
            var28 = var28.bind(var31)(var21, var2, var19);
            var2 = 29;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useVoiceChatNavigationContext;
            var2 = var2.bind(var3)();
            var6 = var10 == var2;
            var3 = undefined;
            if(var6) { _fun0006_ip = 546; continue _fun0006 }
 540:
            var3 = var2.swipeDismissRef;
 546:
            var2 = var1.user;
            var6 = var10 == var2;
            var19 = undefined;
            if(var6) { _fun0006_ip = 565; continue _fun0006 }
 560:
            var19 = var2.id;
 565:
            _closure2_slot5 = var19;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var11];
            var21 = var6.bind(var4)(var2);
            var11 = var21.useStateFromStores;
            var2 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0011_ip = 40; continue _fun0011 }
 16:
                    var4 = _closure1_slot6;
                    var3 = var4.getEffectForUserId;
                    var2 = _closure2_slot5;
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var21 = var11.bind(var21)(var6, var2);
            var2 = var1.type;
            var1 = _closure1_slot12;
            var1 = var1.USER;
            var11 = var2 === var1;
            if(!var11) { _fun0006_ip = 642; continue _fun0006 }
 638:
            var11 = var10 != var19;
 642:
            if(!var11) { _fun0006_ip = 649; continue _fun0006 }
 645:
            var11 = var10 != var21;
 649:
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 30;
            var2 = var1[var2];
            var6 = var6.bind(var4)(var2);
            var2 = {};
            var2['onDoubleTapStart'] = var30;
            var2['onSingleTapStart'] = var7;
            var30 = var6.bind(var4)(var2);
            var2 = _closure1_slot0;
            var31 = 31;
            var1 = var1[var31];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Gesture;
            var1 = var2.LongPress;
            var2 = var1.bind(var2)();
            var1 = var2.onStart;
            var5 = var1.bind(var2)(var5);
            var2 = var5.minDuration;
            var1 = 800;
            var2 = var2.bind(var5)(var1);
            var7 = var2;
            if(!(var10 != var3)) { _fun0006_ip = 764; continue _fun0006 }
 753:
            var1 = var2.requireExternalGestureToFail;
            var7 = var1.bind(var2)(var3);
 764:
            var3 = _closure1_slot14;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = var5[var31];
            var1 = var6.bind(var4)(var1);
            var2 = var1.GestureDetector;
            var1 = {};
            var5 = var5[var31];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Gesture;
            var5 = var6.Simultaneous;
            var5 = var5.bind(var6)(var7, var30);
            var1['gesture'] = var5;
            var7 = _closure1_slot15;
            var6 = _closure1_slot5;
            var5 = {};
            var30 = var8.container;
            var8 = new Array(2);
            var8[0] = var30;
            var8[1] = var16;
            var5['style'] = var8;
            var16 = _closure1_slot18;
            var8 = {};
            var8['guildId'] = var29;
            if(!var27) { _fun0006_ip = 872; continue _fun0006 }
 869:
            var27 = !var28;
 872:
            var8['hasVideo'] = var27;
            var8['streamId'] = var26;
            var8['user'] = var13;
            var8['resizeMode'] = var25;
            var8['ringing'] = var24;
            var8['speaking'] = var23;
            var8['avatarSize'] = var22;
            var8['gestureEnabled'] = var17;
            var16 = var3.bind(var4)(var16, var8);
            var8 = new Array(3);
            var8[0] = var16;
            var10 = null;
            if(!var11) { _fun0006_ip = 988; continue _fun0006 }
 930:
            var17 = _closure1_slot14;
            var16 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 32;
            var11 = var22[var11];
            var16 = var16.bind(var4)(var11);
            var11 = {};
            var11['voiceChannelEffect'] = var21;
            var20 = function onComplete() {
                var3 = _closure1_slot7;
                var2 = _closure2_slot5;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var11['onComplete'] = var20;
            var11['userId'] = var19;
            var11['hasNotch'] = var18;
            var10 = var17.bind(var4)(var16, var11);
 988:
            var8[1] = var10;
            var11 = _closure1_slot14;
            var10 = _closure1_slot19;
            var9 = {};
            var9['muted'] = var15;
            var9['deafened'] = var14;
            var13 = var13.id;
            var9['userId'] = var13;
            var9['style'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();