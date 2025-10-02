// app/uikit-native/calls/VideoBackground.tsx
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
                            if(!var3) { _fun0003_ip = 17; continue _fun0003 }
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
case 17:
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = _closure1_slot8;
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
    var _closure1_slot13 = var4;
    var2 = function useDominantColorFromImage(arg1, arg2) {
        var4 = _closure1_slot13;
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
    var _closure1_slot14 = var2;
    var12 = function VideoBackground(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var9 = var7.style;
            var4 = var7.url;
            var11 = var7.isStageCall;
            var5 = undefined;
            if(!(var11 === var5)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var11 = false;
case 18:
            var10 = var7.avatarStyle;
            var1 = var7.user;
            var1 = var7.guildId;
            var3 = var7.renderVideoDetails;
            var6 = {'style': 0, 'url': 0, 'isStageCall': 0, 'avatarStyle': 0, 'user': 0, 'guildId': 0, 'renderVideoDetails': 0};
            var1 = null;
            var19 = var6;
            var18 = null;
            var2 = silentSetPrototypeOf(var19, var18);
            var19 = {};
            var18 = var7;
            var17 = var6;
            var12 = copyDataProperties(var19, var18, var17);
            var2 = _closure1_slot11;
            var15 = var2.bind(var5)();
            var2 = _closure1_slot12;
            var13 = var2.bind(var5)(var4);
            var2 = _closure1_slot14;
            var14 = var2.bind(var5)(var4, var13);
            if(!(var1 != var13)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0004_ip = 4; continue _fun0004 }
case 22:
            var2 = var3.bind(var5)();
case 4:
            var3 = var1 != var2;
            var7 = null;
            if(!var3) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var7 = var2;
case 23:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = new Array(4);
            var8[0] = var9;
            var9 = var15.videoBackground;
            var8[1] = var9;
            var9 = {};
            var9['backgroundColor'] = var14;
            var8[2] = var9;
            var16 = var1 != var7;
            var9 = null;
            if(!var16) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var9 = var15.videoDetailsSpacer;
case 25:
            var8[3] = var9;
            var2['style'] = var8;
            var9 = _closure1_slot9;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 11;
            var6 = var15[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['source'] = var13;
            var19 = var6;
            var18 = var12;
            var12 = copyDataProperties(var19, var18);
            var12 = new Array(2);
            var12[0] = var10;
            var10 = null;
            if(!var11) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var13 = {};
            var13['backgroundColor'] = var14;
            var10 = var13;
case 27:
            var12[1] = var10;
            var10 = 'avatarStyle';
            var6[var10] = var12;
            var10 = 'isStageCall';
            var6[var10] = var11;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 20:
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var10 = var8[var5];
    var5 = metroImportAll;
    var11 = var5.bind(var1)(var10);
    var _closure1_slot4 = var11;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var10 = var5.View;
    var _closure1_slot5 = var10;
    var10 = var5.NativeModules;
    var _closure1_slot6 = var10;
    var5 = var5.Image;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.NOOP;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var10 = var5.jsx;
    var _closure1_slot9 = var10;
    var5 = var5.jsxs;
    var _closure1_slot10 = var5;
    var5 = 5;
    var5 = var8[var5];
    var14 = var7.bind(var1)(var5);
    var13 = var14.createStyles;
    var5 = {};
    var10 = {};
    var15 = 'center';
    var10['alignItems'] = var15;
    var5['videoBackground'] = var10;
    var15 = {};
    var10 = 12;
    var15['paddingTop'] = var10;
    var5['videoDetailsSpacer'] = var15;
    var5 = var13.bind(var14)(var5);
    var _closure1_slot11 = var5;
    var5 = 6;
    var5 = var8[var5];
    var13 = var9.bind(var1)(var5);
    var9 = var13.memoize;
    var5 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = null;
            var2 = var3 == var4;
            var1 = null;
            if(var2) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var2 = '';
            var1 = null;
            if(!(var2 !== var4)) { _fun0005_ip = 29; continue _fun0005 }
case 8:
            var5 = 'number';
            var3 = typeof var4;
            var2 = var4;
            if(!(var5 !== var3)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var3 = {};
            var3['uri'] = var4;
            var2 = var3;
case 31:
            var1 = var2;
case 29:
            return var1;
        }
    };
    var5 = var9.bind(var13)(var5);
    var _closure1_slot12 = var5;
    var6 = 11;
    var9 = var8[var6];
    var9 = var7.bind(var1)(var9);
    var9 = var9.AvatarSizes;
    var12['AvatarSizes'] = var9;
    var9 = var11.memo;
    var9 = var9.bind(var11)(var12);
    var10 = var8[var10];
    var12 = var7.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'uikit-native/calls/VideoBackground.tsx';
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