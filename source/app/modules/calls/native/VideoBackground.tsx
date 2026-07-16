// app/modules/calls/native/VideoBackground.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function useDominantRGBFromImage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var3;
            var1 = global;
            var4 = var1.Array;
            var1 = var4.isArray;
            var1 = var1.bind(var4)(var3);
            var8 = var3;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 0;
            var1 = var3[var1];
            _closure2_slot1 = var1;
            var8 = var1;
case 2:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var9 = undefined;
            var1 = var4.bind(var9)(var1);
            var6 = var1.bind(var9)();
            var _closure2_slot2 = var6;
            var5 = _closure1_slot4;
            var4 = var5.useState;
            var10 = null;
            var11 = var10 != var7;
            var1 = undefined;
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 8;
            var11 = var13[var11];
            var11 = var12.bind(var9)(var11);
            var11 = var11.cachedDominantColors;
            var1 = var11[var7];
case 4:
            if(!(var10 == var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 9;
            var10 = var14[var10];
            var12 = var11.bind(var9)(var10);
            var11 = var12.hexToRgb;
            var13 = _closure1_slot1;
            var10 = 10;
            var10 = var14[var10];
            var10 = var13.bind(var9)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.PRIMARY_800;
            var1 = var11.bind(var12)(var10);
case 6:
            var5 = var4.bind(var5)(var1);
            var4 = _closure1_slot3;
            var1 = 2;
            var5 = var4.bind(var9)(var5, var1);
            var1 = 0;
            var1 = var5[var1];
            var4 = 1;
            var4 = var5[var4];
            var _closure2_slot3 = var4;
            var5 = _closure1_slot4;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure2_slot0;
                    var1 = var4 != var3;
case 8:
                    if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var7 = 8;
                    var3 = var3[var7];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var6 = var3.cachedDominantColors;
                    var3 = _closure2_slot0;
                    var3 = var6[var3];
                    if(!(var4 != var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure2_slot3;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var6.bind(var5)(var3);
                    var6 = var3.cachedDominantColors;
                    var3 = _closure2_slot0;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    _fun0002_ip = 10; continue _fun0002;
case 12:
                    var3 = _closure2_slot1;
                    var4 = 'number';
                    var3 = typeof var3;
                    if(!(var4 !== var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = _closure1_slot6;
                    var5 = var3.ImageManager;
                    var4 = var5.getDominantColors;
                    var7 = _closure1_slot7;
                    var6 = var7.resolveAssetSource;
                    var3 = _closure2_slot1;
                    var3 = var6.bind(var7)(var3);
                    var4 = var4.bind(var5)(var3);
                    _fun0002_ip = 16; continue _fun0002;
case 14:
                    var3 = _closure1_slot6;
                    var5 = var3.ImageManager;
                    var3 = var5.getDominantColorsLocalAsset;
                    var7 = _closure1_slot7;
                    var6 = var7.resolveAssetSource;
                    var2 = _closure2_slot1;
                    var2 = var6.bind(var7)(var2);
                    var4 = var3.bind(var5)(var2);
case 16:
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure2_slot2;
                            var1 = undefined;
                            var3 = var3.bind(var1)();
                            if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 9:
                            var7 = _closure1_slot3;
                            var4 = arg1;
                            var5 = 0;
                            var6 = var4[var5];
                            var4 = 3;
                            var6 = var7.bind(var1)(var6, var4);
                            var4 = {};
                            var5 = var6[var5];
                            var4['r'] = var5;
                            var5 = 1;
                            var5 = var6[var5];
                            var4['g'] = var5;
                            var5 = 2;
                            var5 = var6[var5];
                            var4['b'] = var5;
                            var5 = _closure2_slot3;
                            var5 = var5.bind(var1)(var4);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 8;
                            var3 = var6[var3];
                            var3 = var5.bind(var1)(var3);
                            var3 = var3.cachedDominantColors;
                            var2 = _closure2_slot0;
                            var3[var2] = var4;
case 12:
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = _closure1_slot9;
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var2 = function useDominantColorFromImage(arg1, arg2) {
        var4 = _closure1_slot14;
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var3)(var2, var1);
        var13 = var1.r;
        var11 = var1.g;
        var9 = var1.b;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var14 = 'rgb(';
        var2 = ', ';
        var8 = ')';
        var12 = var2;
        var10 = var2;
        var1 = var14[var4](var13, var12, var11, var10, var9, var8, var7);
        return var1;
    };
    var _closure1_slot15 = var2;
    var11 = function VideoBackground(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var5 = var9.style;
            var4 = var9.url;
            var11 = var9.isStageCall;
            var6 = undefined;
            if(!(var11 === var6)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var11 = false;
case 17:
            var13 = var9.avatarStyle;
            var10 = var9.user;
            var18 = var9.guildId;
            var _closure2_slot0 = var18;
            var8 = var9.renderVideoDetails;
            var3 = {'style': 0, 'url': 0, 'isStageCall': 0, 'avatarStyle': 0, 'user': 0, 'guildId': 0, 'renderVideoDetails': 0};
            var1 = null;
            var25 = var3;
            var24 = null;
            var2 = silentSetPrototypeOf(var25, var24);
            var16 = 0;
            var25 = {};
            var24 = var9;
            var23 = var3;
            var12 = copyDataProperties(var25, var24, var23);
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var2 = _closure1_slot12;
            var9 = var2.bind(var6)();
            var2 = _closure1_slot13;
            var14 = var2.bind(var6)(var4);
            var2 = _closure1_slot15;
            var4 = var2.bind(var6)(var4, var14);
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 11;
            var2 = var17[var2];
            var15 = var15.bind(var6)(var2);
            var2 = 'VideoBackground-native';
            var20 = var15.bind(var6)(var2);
            _closure2_slot1 = var20;
            var15 = var1 == var10;
            var2 = undefined;
            if(var15) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var2 = var10.id;
case 19:
            if(!(var1 == var2)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var2 = _closure1_slot8;
case 21:
            _closure2_slot2 = var2;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 12;
            var10 = var17[var10];
            var10 = var15.bind(var6)(var10);
            var15 = var10.bind(var6)(var2, var18);
            var10 = var1 == var15;
            var19 = var2;
            var2 = undefined;
            if(var10) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var10 = var15.themeColors;
            var17 = var1 == var10;
            var2 = undefined;
            if(var17) { _fun0004_ip = 23; continue _fun0004 }
case 25:
            var2 = var10[var16];
case 23:
            var16 = var1 != var2;
            var10 = null;
            if(!var16) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var10 = var2;
case 26:
            var16 = var1 == var15;
            var2 = undefined;
            if(var16) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var16 = var15.themeColors;
            var15 = var1 == var16;
            var2 = undefined;
            if(var15) { _fun0004_ip = 28; continue _fun0004 }
case 30:
            var15 = 1;
            var2 = var16[var15];
case 28:
            var15 = var1 != var2;
            var21 = null;
            if(!var15) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var21 = var2;
case 31:
            var2 = var20;
            if(!var2) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var2 = var1 != var10;
case 33:
            if(!var2) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var1 != var21;
case 35:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 13;
            var15 = var17[var15];
            var17 = var16.bind(var6)(var15);
            var16 = var17.useVideoTileGradientColors;
            var15 = null;
            if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var15 = var10;
case 37:
            var10 = null;
            if(!var2) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var10 = var21;
case 39:
            var10 = var16.bind(var17)(var15, var10);
            var17 = _closure1_slot4;
            var16 = var17.useEffect;
            var15 = new Array(3);
            var15[0] = var20;
            var15[1] = var19;
            var15[2] = var18;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot8;
                    var2 = var3 !== var2;
                    if(!var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var2 = _closure2_slot1;
case 41:
                    if(!var2) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = _closure2_slot2;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['guildId'] = var5;
                    var5 = true;
                    var1['dispatchWait'] = var5;
                    var1 = var3.bind(var4)(var2, var4, var1);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var16.bind(var17)(var7, var15);
            if(!(var1 != var14)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var15 = var1 == var8;
            var7 = undefined;
            if(var15) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var7 = var8.bind(var6)();
case 47:
            var15 = var1 != var7;
            var8 = null;
            if(!var15) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var8 = var7;
case 49:
            var7 = new Array(4);
            var7[0] = var5;
            var5 = var9.videoBackground;
            var7[1] = var5;
            var5 = null;
            if(var2) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var15 = {};
            var15['backgroundColor'] = var4;
            var5 = var15;
case 51:
            var7[2] = var5;
            var15 = var1 != var8;
            var5 = null;
            if(!var15) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var5 = var9.videoDetailsSpacer;
case 53:
            var7[3] = var5;
            var9 = null;
            if(!var11) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var9 = null;
            if(var2) { _fun0004_ip = 55; continue _fun0004 }
case 57:
            var2 = {};
            var2['backgroundColor'] = var4;
            var9 = var2;
case 55:
            var5 = _closure1_slot10;
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 15;
            var2 = var15[var2];
            var2 = var4.bind(var6)(var2);
            var4 = var2.Avatar;
            var2 = {};
            var2['source'] = var14;
            var25 = var2;
            var24 = var12;
            var12 = copyDataProperties(var25, var24);
            var12 = new Array(2);
            var12[0] = var13;
            var12[1] = var9;
            var9 = 'avatarStyle';
            var2[8] = var12;
            var9 = 'isStageCall';
            var2[8] = var11;
            var9 = var5.bind(var6)(var4, var2);
            if(!(var1 == var10)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var5 = _closure1_slot11;
            var4 = _closure1_slot5;
            var2 = {};
            var2['style'] = var7;
            var11 = new Array(2);
            var11[0] = var9;
            var11[1] = var8;
            var2['children'] = var11;
            var2 = var5.bind(var6)(var4, var2);
            _fun0004_ip = 60; continue _fun0004;
case 58:
            var5 = _closure1_slot11;
            var4 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 16;
            var3 = var11[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var3['colors'] = var10;
            var10 = {'x': 0, 'y': 0};
            var3['start'] = var10;
            var10 = {'x': 0, 'y': 1};
            var3['end'] = var10;
            var3['style'] = var7;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 60:
            return var2;
case 45:
            return var1;
        }
    };
    var1 = global;
    var12 = var1.Object;
    var10 = var12.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var12)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var10 = var8[var5];
    var5 = metroImportAll;
    var10 = var5.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var12 = var5.View;
    var _closure1_slot5 = var12;
    var12 = var5.NativeModules;
    var _closure1_slot6 = var12;
    var5 = var5.Image;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var12 = var5.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = var12;
    var5 = var5.NOOP;
    var _closure1_slot9 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var12 = var5.jsx;
    var _closure1_slot10 = var12;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = 5;
    var5 = var8[var5];
    var13 = var7.bind(var1)(var5);
    var12 = var13.createStyles;
    var5 = {};
    var14 = {};
    var15 = 'center';
    var14['alignItems'] = var15;
    var5['videoBackground'] = var14;
    var14 = {};
    var15 = 12;
    var14['paddingTop'] = var15;
    var5['videoDetailsSpacer'] = var14;
    var5 = var12.bind(var13)(var5);
    var _closure1_slot12 = var5;
    var5 = 6;
    var5 = var8[var5];
    var12 = var9.bind(var1)(var5);
    var9 = var12.memoize;
    var5 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var3 = null;
            var2 = var3 == var4;
            var1 = null;
            if(var2) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var2 = '';
            var1 = null;
            if(!(var2 !== var4)) { _fun0006_ip = 61; continue _fun0006 }
case 8:
            var5 = 'number';
            var3 = typeof var4;
            var2 = var4;
            if(!(var5 !== var3)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var3 = {};
            var3['uri'] = var4;
            var2 = var3;
case 63:
            var1 = var2;
case 61:
            return var1;
        }
    };
    var5 = var9.bind(var12)(var5);
    var _closure1_slot13 = var5;
    var6 = 15;
    var9 = var8[var6];
    var9 = var7.bind(var1)(var9);
    var9 = var9.AvatarSizes;
    var11['AvatarSizes'] = var9;
    var9 = var10.memo;
    var9 = var9.bind(var10)(var11);
    var10 = 17;
    var10 = var8[var10];
    var12 = var7.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/calls/native/VideoBackground.tsx';
    var10 = var11.bind(var12)(var10);
    var3['default'] = var9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.AvatarSizes;
    var3['AvatarSizes'] = var6;
    var3['memoizedImageSource'] = var5;
    var3['useDominantRGBFromImage'] = var4;
    var3['useDominantColorFromImage'] = var2;
    return var1;
})();