// app/uikit-native/Avatar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var2 = function getStatusSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 7;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.XXSMALL;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.XSMALL;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.XSMALL_20;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.SMALL;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.REFRESH_MEDIUM_32;
            if(!(var2 !== var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.NORMAL;
            if(!(var2 !== var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.TABS_22;
            if(!(var2 !== var3)) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.LARGE;
            if(!(var2 !== var3)) { _fun0001_ip = 9; continue _fun0001 }
case 12:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.LARGE_48;
            if(!(var2 !== var3)) { _fun0001_ip = 9; continue _fun0001 }
case 13:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.XLARGE;
            if(!(var2 !== var3)) { _fun0001_ip = 9; continue _fun0001 }
case 14:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.XXLARGE;
            if(!(var2 !== var3)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.PROFILE;
            if(!(var2 !== var3)) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var2 = null;
            return var2;
case 15:
            var2 = _closure1_slot6;
            var2 = var2.LARGE;
            return var2;
case 9:
            var2 = _closure1_slot6;
            var2 = var2.MEDIUM;
            return var2;
case 7:
            var2 = _closure1_slot6;
            var2 = var2.REFRESH_MEDIUM_10;
            return var2;
case 2:
            var1 = _closure1_slot6;
            var1 = var1.SMALL;
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = function getAvatarDecorationMargin(arg1) {
        var3 = arg1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 11;
        var1 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var1);
        var1 = var2.getDecorationSizeForAvatarSize;
        var2 = var1.bind(var2)(var3);
        var1 = 7;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.styles;
        var1 = var1[var3];
        var1 = var1.width;
        var2 = var2 - var1;
        var1 = 2;
        var1 = var2 / var1;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.STATUS_PADDING;
    var _closure1_slot5 = var9;
    var7 = var7.StatusSizes;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.StatusTypes;
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.jsx;
    var _closure1_slot8 = var9;
    var7 = var7.jsxs;
    var _closure1_slot9 = var7;
    var7 = 5;
    var7 = var6[var7];
    var10 = var5.bind(var1)(var7);
    var9 = var10.createStyles;
    var7 = function(arg1) {
        var5 = arg1;
        var1 = {};
        var6 = 'absolute';
        var2 = {'position': 'absolute', 'right': 4294967293, 'bottom': 4294967293};
        var1['status'] = var2;
        var2 = {'position': 'absolute', 'right': 4294967294, 'bottom': 4294967294, 'backgroundColor': 'transparent', 'borderWidth': 4};
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var7 = 6;
        var10 = var9[var7];
        var4 = undefined;
        var10 = var8.bind(var4)(var10);
        var10 = var10.colors;
        var10 = var10.STATUS_SPEAKING;
        var2['borderColor'] = var10;
        var1['speaking'] = var2;
        var2 = {'position': 'absolute', 'right': 4294967294, 'bottom': 4294967294};
        var1['stageSpeaking'] = var2;
        var2 = {'width': 24, 'height': 24, 'justifyContent': 'center', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'right': 0, 'bottom': 0};
        var10 = var9[var7];
        var10 = var8.bind(var4)(var10);
        var10 = var10.unsafe_rawColors;
        var10 = var10.RED_400;
        var2['backgroundColor'] = var10;
        var7 = var9[var7];
        var7 = var8.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.md;
        var2['borderRadius'] = var7;
        var1['voiceStatus'] = var2;
        var2 = {};
        var2['position'] = var6;
        var3 = _closure1_slot12;
        var6 = var3.bind(var4)(var5);
        var6 = -var6;
        var2['top'] = var6;
        var3 = var3.bind(var4)(var5);
        var3 = -var3;
        var2['left'] = var3;
        var1['decoration'] = var2;
        var2 = {};
        var3 = 'relative';
        var2['position'] = var3;
        var1['container'] = var2;
        return var1;
    };
    var7 = var9.bind(var10)(var7);
    var _closure1_slot10 = var7;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var31 = var2.channel;
            var13 = var2.streaming;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var13 = false;
case 18:
            var19 = var2.isMobileOnline;
            if(!(var19 === var4)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var19 = false;
case 20:
            var _closure2_slot0 = var19;
            var15 = var2.status;
            var _closure2_slot1 = var15;
            var20 = var2.size;
            if(!(var20 === var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.AvatarSizes;
            var20 = var3.NORMAL;
case 22:
            var _closure2_slot2 = var20;
            var25 = var2.animate;
            if(!(var25 === var4)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var25 = false;
case 24:
            var26 = var2.speaking;
            if(!(var26 === var4)) { _fun0002_ip = 26; continue _fun0002 }
case 5:
            var26 = false;
case 26:
            var17 = var2.avatarDecoration;
            var7 = var2.mute;
            var6 = var2.deaf;
            var14 = var2.statusStyle;
            var21 = var2.avatarStyle;
            var33 = var2.style;
            var29 = var2.cutout;
            var _closure2_slot3 = var29;
            var24 = var2.autoStatusCutout;
            var _closure2_slot4 = var24;
            var5 = var2.isStageCall;
            if(!(var5 === var4)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var5 = false;
case 27:
            var28 = var2.source;
            var16 = var2.user;
            var30 = var2.guildId;
            var22 = var2.disablePlaceholder;
            var27 = var2.needsOffscreenAlphaCompositing;
            if(!(var27 === var4)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var27 = false;
case 29:
            var23 = var2.accessible;
            var11 = var2.accessibilityLabel;
            var18 = var2.typing;
            if(!(var18 === var4)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var18 = false;
case 31:
            var _closure2_slot5 = var18;
            var9 = var2.statusSizeOverride;
            var _closure2_slot6 = var9;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot10;
            var12 = var2.bind(var4)(var20);
            _closure2_slot7 = var12;
            var8 = _closure1_slot3;
            var3 = var8.useMemo;
            var2 = new Array(8);
            var2[0] = var29;
            var2[1] = var24;
            var2[2] = var19;
            var2[3] = var20;
            var2[4] = var15;
            var2[5] = var18;
            var2[6] = var9;
            var2[7] = var12;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0003_ip = 19; continue _fun0003 }
case 33:
                    var5 = _closure2_slot3;
                    _fun0003_ip = 34; continue _fun0003;
case 19:
                    var1 = {};
                    var4 = _closure2_slot2;
                    var1['avatarSize'] = var4;
                    var4 = _closure2_slot1;
                    var1['userStatus'] = var4;
                    var4 = _closure2_slot0;
                    var1['isMobileOnline'] = var4;
                    var6 = _closure2_slot4;
                    var4 = true;
                    if(!(var4 !== var6)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var4 = _closure2_slot4;
                    var4 = var4.padding;
                    _fun0003_ip = 37; continue _fun0003;
case 35:
                    var4 = _closure1_slot5;
case 37:
                    var1['padding'] = var4;
                    var4 = _closure2_slot5;
                    var1['typing'] = var4;
                    var4 = _closure2_slot6;
                    var1['statusSizeOverride'] = var4;
                    var10 = var1.avatarSize;
                    var11 = var1.userStatus;
                    var7 = var1.isMobileOnline;
                    var8 = var1.padding;
                    var4 = var1.typing;
                    var9 = var1.statusSizeOverride;
                    var6 = var3 != var11;
                    var16 = undefined;
                    var1 = undefined;
                    if(!var6) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                    var6 = _closure1_slot7;
                    var6 = var6.UNKNOWN;
                    var1 = undefined;
                    if(!(var11 !== var6)) { _fun0003_ip = 38; continue _fun0003 }
case 40:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 7;
                    var6 = var12[var6];
                    var6 = var11.bind(var16)(var6);
                    var6 = var6.AVATAR_SIZE_MAP;
                    var11 = var6[var10];
                    if(!(var3 == var9)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var6 = _closure1_slot11;
                    var9 = var6.bind(var16)(var10);
case 41:
                    var10 = var3 != var9;
                    var6 = 0;
                    if(!var10) { _fun0003_ip = 10; continue _fun0003 }
case 43:
                    var6 = var9;
case 10:
                    var9 = 4;
                    var15 = var6 / var9;
                    if(var4) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                    if(var7) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                    var10 = 2;
                    var4 = var6 / var10;
                    var8 = var4 + var8;
                    var9 = var11 - var8;
                    var4 = var10 * var15;
                    var12 = var9 - var4;
                    var4 = {};
                    var9 = {};
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var14 = 10;
                    var14 = var18[var14];
                    var14 = var17.bind(var16)(var14);
                    var14 = var14.CutoutShape;
                    var14 = var14.Circle;
                    var9['shape'] = var14;
                    var9['x'] = var12;
                    var9['y'] = var12;
                    var8 = var10 * var8;
                    var9['size'] = var8;
                    var8 = new Array(1);
                    var8[0] = var9;
                    var4['nativeCutouts'] = var8;
                    var1 = var4;
                    _fun0003_ip = 38; continue _fun0003;
case 46:
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var4 = 8;
                    var4 = var18[var4];
                    var8 = var17.bind(var16)(var4);
                    var4 = var8.getMobileStatusContainerRect;
                    var4 = var4.bind(var8)(var6);
                    var12 = var4.width;
                    var10 = var4.height;
                    var8 = var4.cornerRadius;
                    var4 = {};
                    var9 = {};
                    var14 = 10;
                    var14 = var18[var14];
                    var14 = var17.bind(var16)(var14);
                    var14 = var14.CutoutShape;
                    var14 = var14.RoundedRect;
                    var9['shape'] = var14;
                    var14 = var11 - var12;
                    var14 = var14 + var15;
                    var9['x'] = var14;
                    var14 = var11 - var10;
                    var14 = var14 + var15;
                    var9['y'] = var14;
                    var9['width'] = var12;
                    var9['height'] = var10;
                    var9['cornerRadius'] = var8;
                    var8 = new Array(1);
                    var8[0] = var9;
                    var4['nativeCutouts'] = var8;
                    var1 = var4;
                    _fun0003_ip = 38; continue _fun0003;
case 44:
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var17 = 8;
                    var4 = var12[var17];
                    var8 = var8.bind(var16)(var4);
                    var4 = var8.getStatusTypingDimensions;
                    var4 = var4.bind(var8)(var6);
                    var9 = var4.width;
                    var10 = var4.height;
                    var8 = _closure1_slot1;
                    var4 = 9;
                    var4 = var12[var4];
                    var4 = var8.bind(var16)(var4);
                    var3 = var3 != var7;
                    if(!var3) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                    var3 = var7;
case 48:
                    var12 = var4.bind(var16)(var6, var3);
                    var8 = _closure1_slot5;
                    var7 = 2;
                    var3 = var7 * var8;
                    var4 = var10 + var3;
                    var3 = {};
                    var6 = {};
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var13 = 10;
                    var13 = var14[var13];
                    var13 = var15.bind(var16)(var13);
                    var13 = var13.CutoutShape;
                    var13 = var13.RoundedRect;
                    var6['shape'] = var13;
                    var13 = var11 - var9;
                    var13 = var13 - var8;
                    var14 = var14[var17];
                    var15 = var15.bind(var16)(var14);
                    var14 = var15.getAnimatedTypingTranslateX;
                    var12 = var12.width;
                    var12 = var14.bind(var15)(var12);
                    var12 = var13 + var12;
                    var6['x'] = var12;
                    var10 = var11 - var10;
                    var10 = var10 - var8;
                    var6['y'] = var10;
                    var8 = var7 * var8;
                    var8 = var9 + var8;
                    var6['width'] = var8;
                    var6['height'] = var4;
                    var4 = var4 / var7;
                    var6['cornerRadius'] = var4;
                    var4 = new Array(1);
                    var4[0] = var6;
                    var3['nativeCutouts'] = var4;
                    var1 = var3;
case 38:
                    var5 = var1;
case 34:
                    var1 = {};
                    var1['cutout'] = var5;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.getDecorationCutoutForAvatarCutout;
                    var2 = _closure2_slot7;
                    var2 = var2.decoration;
                    var2 = var2.top;
                    var2 = -var2;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['decorationCutout'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var8 = var1.cutout;
            var24 = var1.decorationCutout;
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var34 = _closure1_slot0;
            var32 = _closure1_slot2;
            var29 = 7;
            var32 = var32[var29];
            var32 = var34.bind(var4)(var32);
            var32 = var32.styles;
            var34 = var32[var20];
            var32 = new Array(3);
            var32[0] = var34;
            var34 = var12.container;
            var32[1] = var34;
            var32[2] = var33;
            var1['style'] = var32;
            var1['needsOffscreenAlphaCompositing'] = var27;
            var1['accessible'] = var23;
            var1['accessibilityLabel'] = var11;
            var11 = null;
            var23 = null;
            if(!var26) { _fun0002_ip = 50; continue _fun0002 }
case 15:
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var29];
            var26 = var27.bind(var4)(var26);
            var26 = var26.AVATAR_SIZE_MAP;
            var27 = var26[var20];
            var26 = 4;
            var36 = var27 + var26;
            var32 = _closure1_slot8;
            if(var5) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var26 = _closure1_slot4;
            var5 = {};
            var33 = var12.speaking;
            var27 = new Array(2);
            var27[0] = var33;
            var33 = {};
            var33['width'] = var36;
            var33['height'] = var36;
            var34 = 2;
            var34 = var36 / var34;
            var33['borderRadius'] = var34;
            var27[1] = var33;
            var5['style'] = var27;
            var5 = var32.bind(var4)(var26, var5);
            _fun0002_ip = 53; continue _fun0002;
case 51:
            var27 = _closure1_slot1;
            var33 = _closure1_slot2;
            var26 = 12;
            var26 = var33[var26];
            var27 = var27.bind(var4)(var26);
            var26 = {};
            var34 = var12.stageSpeaking;
            var33 = new Array(2);
            var33[0] = var34;
            var34 = {};
            var34['width'] = var36;
            var34['height'] = var36;
            var35 = 2;
            var35 = var36 / var35;
            var34['borderRadius'] = var35;
            var33[1] = var34;
            var26['style'] = var33;
            var5 = var32.bind(var4)(var27, var26);
case 53:
            var23 = var5;
case 50:
            var5 = new Array(5);
            var5[0] = var23;
            var27 = {};
            var27['disablePlaceholder'] = var22;
            var27['style'] = var21;
            var27['cutout'] = var8;
            if(!(var11 == var28)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            if(!(var11 == var16)) { _fun0002_ip = 54; continue _fun0002 }
case 56:
            var21 = var11 == var31;
            var8 = null;
            if(var21) { _fun0002_ip = 57; continue _fun0002 }
case 54:
            if(!(var11 == var28)) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            if(!(var11 == var16)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var22 = var11 != var31;
            var21 = undefined;
            if(!var22) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var26 = _closure1_slot8;
            var23 = _closure1_slot1;
            var22 = _closure1_slot2;
            var22 = var22[var29];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var22['channel'] = var31;
            var22['size'] = var20;
            var22['animate'] = var25;
            var39 = var22;
            var38 = var27;
            var31 = copyDataProperties(var39, var38);
            var21 = var26.bind(var4)(var23, var22);
case 62:
            _fun0002_ip = 64; continue _fun0002;
case 60:
            var26 = _closure1_slot8;
            var23 = _closure1_slot1;
            var22 = _closure1_slot2;
            var22 = var22[var29];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var22['user'] = var16;
            var22['guildId'] = var30;
            var22['size'] = var20;
            var22['animate'] = var25;
            var39 = var22;
            var38 = var27;
            var30 = copyDataProperties(var39, var38);
            var21 = var26.bind(var4)(var23, var22);
case 64:
            _fun0002_ip = 65; continue _fun0002;
case 58:
            var26 = _closure1_slot8;
            var23 = _closure1_slot1;
            var22 = _closure1_slot2;
            var22 = var22[var29];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var22['source'] = var28;
            var22['size'] = var20;
            var22['animate'] = var25;
            var39 = var22;
            var38 = var27;
            var27 = copyDataProperties(var39, var38);
            var21 = var26.bind(var4)(var23, var22);
case 65:
            var8 = var21;
case 57:
            var5[1] = var8;
            var21 = var11 == var17;
            var8 = null;
            if(var21) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var23 = _closure1_slot8;
            var22 = _closure1_slot1;
            var28 = _closure1_slot2;
            var21 = 13;
            var21 = var28[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var27 = _closure1_slot0;
            var26 = 11;
            var26 = var28[var26];
            var27 = var27.bind(var4)(var26);
            var26 = var27.getDecorationSizeForAvatarSize;
            var26 = var26.bind(var27)(var20);
            var21['size'] = var26;
            var21['avatarDecoration'] = var17;
            var26 = var12.decoration;
            var21['decorationStyle'] = var26;
            var21['animate'] = var25;
            var21['cutout'] = var24;
            var17 = var17.asset;
            var8 = var23.bind(var4)(var22, var21, var17);
case 66:
            var5[2] = var8;
            var17 = var11 == var15;
            var8 = null;
            if(var17) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var17 = _closure1_slot7;
            var17 = var17.UNKNOWN;
            var8 = null;
            if(!(var15 !== var17)) { _fun0002_ip = 68; continue _fun0002 }
case 70:
            if(!(var11 == var9)) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var17 = _closure1_slot11;
            var20 = var17.bind(var4)(var20);
            _fun0002_ip = 73; continue _fun0002;
case 71:
            var20 = var9;
case 73:
            var9 = var11 != var20;
            var17 = null;
            if(!var9) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var9 = {};
            var9['size'] = var20;
            var9['isMobileOnline'] = var19;
            var9['status'] = var15;
            var9['streaming'] = var13;
            var15 = var12.status;
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var14;
            var9['style'] = var13;
            var17 = var9;
case 74:
            var13 = var11 == var17;
            var9 = null;
            if(var13) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            if(!var18) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            if(!(var11 == var16)) { _fun0002_ip = 80; continue _fun0002 }
case 78:
            var14 = _closure1_slot8;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 14;
            var11 = var15[var11];
            var13 = var13.bind(var4)(var11);
            var11 = {};
            var39 = var11;
            var38 = var17;
            var15 = copyDataProperties(var39, var38);
            var11 = var14.bind(var4)(var13, var11);
            _fun0002_ip = 81; continue _fun0002;
case 80:
            var15 = _closure1_slot8;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 14;
            var13 = var19[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.StatusWithTyping;
            var13 = {};
            var39 = var13;
            var38 = var17;
            var17 = copyDataProperties(var39, var38);
            var17 = 'typing';
            var13[var17] = var18;
            var17 = var16.id;
            var16 = 'userId';
            var13[var16] = var17;
            var11 = var15.bind(var4)(var14, var13);
case 81:
            var9 = var11;
case 76:
            var8 = var9;
case 68:
            var5[3] = var8;
            if(var6) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var6 = undefined;
            if(!var7) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var9 = _closure1_slot8;
            var8 = _closure1_slot4;
            var7 = {};
            var13 = var12.status;
            var11 = new Array(2);
            var11[0] = var13;
            var13 = var12.voiceStatus;
            var11[1] = var13;
            var7['style'] = var11;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 15;
            var11 = var16[var14];
            var13 = var15.bind(var4)(var11);
            var11 = {};
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.Sizes;
            var14 = var14.REFRESH_SMALL_16;
            var11['size'] = var14;
            var14 = 17;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var11['source'] = var14;
            var14 = 6;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.unsafe_rawColors;
            var14 = var14.WHITE_500;
            var11['color'] = var14;
            var11 = var9.bind(var4)(var13, var11);
            var7['children'] = var11;
            var6 = var9.bind(var4)(var8, var7);
case 84:
            _fun0002_ip = 86; continue _fun0002;
case 82:
            var9 = _closure1_slot8;
            var8 = _closure1_slot4;
            var7 = {};
            var13 = var12.status;
            var11 = new Array(2);
            var11[0] = var13;
            var12 = var12.voiceStatus;
            var11[1] = var12;
            var7['style'] = var11;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 15;
            var10 = var14[var12];
            var11 = var13.bind(var4)(var10);
            var10 = {};
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.Sizes;
            var12 = var12.REFRESH_SMALL_16;
            var10['size'] = var12;
            var12 = 16;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var10['source'] = var12;
            var12 = 6;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.WHITE_500;
            var10['color'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 86:
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var7 = 18;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'uikit-native/Avatar.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var3['AvatarSizes'] = var4;
    var3['getStatusSize'] = var2;
    return var1;
})();