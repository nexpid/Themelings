// app/modules/thumbhash/ThumbhashUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var2 = function thumbHashToRGBA(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = arguments[1];
            var _closure2_slot0 = var5;
            var53 = undefined;
            if(!(var1 === var53)) { _fun0001_ip = 20; continue _fun0001 }
 18:
            var1 = {};
 20:
            var52 = var1.detail;
            if(!(var52 === var53)) { _fun0001_ip = 33; continue _fun0001 }
 30:
            var52 = 1;
 33:
            var10 = var1.pop;
            if(!(var10 === var53)) { _fun0001_ip = 46; continue _fun0001 }
 43:
            var10 = 1;
 46:
            var _closure2_slot1 = var53;
            var _closure2_slot2 = var53;
            var1 = global;
            var2 = var1.Math;
            var51 = var2.PI;
            var2 = var1.Math;
            var50 = var2.min;
            var2 = var1.Math;
            var49 = var2.max;
            var2 = var1.Math;
            var48 = var2.cos;
            var2 = var1.Math;
            var3 = var2.round;
            var47 = 0;
            var6 = var5[var47];
            var46 = 1;
            var2 = var5[var46];
            var8 = 8;
            var2 = var2 << var8;
            var6 = var6 | var2;
            var45 = 2;
            var7 = var5[var45];
            var2 = 16;
            var2 = var7 << var2;
            var7 = var6 | var2;
            var44 = 3;
            var6 = var5[var44];
            var43 = 4;
            var2 = var5[var43];
            var2 = var2 << var8;
            var11 = var6 | var2;
            var2 = 23;
            var42 = var7 >> var2;
            var8 = 15;
            var2 = var11 >> var8;
            var6 = 7;
            if(var2) { _fun0001_ip = 203; continue _fun0001 }
 197:
            var9 = var6 & var11;
            _fun0001_ip = 215; continue _fun0001;
 203:
            var12 = var6;
            if(!var42) { _fun0001_ip = 212; continue _fun0001 }
 209:
            var12 = 5;
 212:
            var9 = var12;
 215:
            var41 = var49.bind(var53)(var44, var9);
            if(var2) { _fun0001_ip = 235; continue _fun0001 }
 224:
            var2 = var6;
            if(!var42) { _fun0001_ip = 233; continue _fun0001 }
 230:
            var2 = 5;
 233:
            _fun0001_ip = 239; continue _fun0001;
 235:
            var2 = var6 & var11;
 239:
            var40 = var49.bind(var53)(var44, var2);
            var39 = var46;
            if(!var42) { _fun0001_ip = 266; continue _fun0001 }
 251:
            var2 = 5;
            var2 = var5[var2];
            var2 = var8 & var2;
            var39 = var2 / var8;
 266:
            var38 = 5;
            var2 = var5[var38];
            var2 = var2 >> var43;
            var6 = var38;
            if(!var42) { _fun0001_ip = 286; continue _fun0001 }
 283:
            var6 = 6;
 286:
            _closure2_slot1 = var6;
            _closure2_slot2 = var47;
            var4 = function decodeChannel(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var11 = arg1;
                    var10 = arg2;
                    var9 = arg3;
                    var1 = new Array(0);
                    var8 = 0;
                    var12 = var8 < var10;
                    var6 = 1;
                    var5 = 2;
                    var4 = 15;
                    var3 = 7.5;
                    var2 = 0;
                    if(!var12) { _fun0002_ip = 175; continue _fun0002 }
 49:
                    var14 = var6;
                    if(!var2) { _fun0002_ip = 57; continue _fun0002 }
 55:
                    var14 = 0;
 57:
                    var13 = var14 * var10;
                    var12 = var10 - var2;
                    var12 = var11 * var12;
                    if(!(var13 < var12)) { _fun0002_ip = 168; continue _fun0002 }
 73:
                    var13 = var1.push;
                    var15 = _closure2_slot0;
                    var16 = _closure2_slot1;
                    var12 = _closure2_slot2;
                    var12 = var12 >> var6;
                    var12 = var16 + var12;
                    var15 = var15[var12];
                    var12 = _closure2_slot2;
                    var12 = parseFloat(var12);
                    var16 = var12 + 1;
                    _closure2_slot2 = var16;
                    var12 = var6 & var12;
                    var12 = var12 << var5;
                    var12 = var15 >> var12;
                    var12 = var12 & var4;
                    var12 = var12 / var3;
                    var12 = var12 - var6;
                    var12 = var12 * var9;
                    var12 = var13.bind(var1)(var12);
                    var14 = var14 + 1;
                    var13 = var14 * var10;
                    var12 = var10 - var2;
                    var12 = var11 * var12;
                    if(var13 < var12) { _fun0002_ip = 73; continue _fun0002 }
 168:
                    var2 = var2 + 1;
                    if(var2 < var10) { _fun0002_ip = 49; continue _fun0002 }
 175:
                    return var1;
                }
            };
            var6 = 18;
            var6 = var7 >> var6;
            var9 = 31;
            var6 = var6 & var9;
            var6 = var6 / var9;
            var6 = var6 / var45;
            var37 = var4.bind(var53)(var41, var40, var6);
            var9 = var11 >> var44;
            var6 = 63;
            var9 = var9 & var6;
            var9 = var9 / var6;
            var9 = var9 * var10;
            var36 = var4.bind(var53)(var44, var44, var9);
            var9 = 9;
            var9 = var11 >> var9;
            var9 = var9 & var6;
            var9 = var9 / var6;
            var9 = var9 * var10;
            var35 = var4.bind(var53)(var44, var44, var9);
            if(var42) { _fun0001_ip = 391; continue _fun0001 }
 385:
            var34 = new Array(0);
            _fun0001_ip = 402; continue _fun0001;
 391:
            var2 = var2 / var8;
            var34 = var4.bind(var53)(var38, var38, var2);
 402:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var47];
            var4 = var4.bind(var53)(var2);
            var2 = var4.thumbHashToApproximateAspectRatio;
            var8 = var2.bind(var4)(var5);
            var4 = var8 > var46;
            var5 = 32;
            var2 = var5;
            if(var4) { _fun0001_ip = 450; continue _fun0001 }
 446:
            var2 = var5 * var8;
 450:
            var4 = var3.bind(var53)(var2);
            var9 = var8 > var46;
            var2 = var5;
            if(!var9) { _fun0001_ip = 469; continue _fun0001 }
 465:
            var2 = var5 / var8;
 469:
            var3 = var3.bind(var53)(var2);
            var5 = var1.Uint8Array;
            var1 = var4 * var3;
            var94 = var1 * var43;
            var2 = var5.prototype;
            var2 = Object.create(var2, {constructor: {value: var5}});
            var95 = var2;
            var1 = new var95[var5](var94, var93);
            var2 = var1 instanceof Object ? var1 : var2;
            var33 = new Array(0);
            var32 = new Array(0);
            var54 = var47 < var3;
            var31 = 0.6666666666666666;
            var30 = 255;
            var29 = 0.5;
            var1 = var6 & var7;
            var28 = var1 / var6;
            var1 = 6;
            var1 = var7 >> var1;
            var1 = var1 & var6;
            var5 = 31.5;
            var1 = var1 / var5;
            var27 = var1 - var46;
            var1 = 12;
            var1 = var7 >> var1;
            var1 = var1 & var6;
            var1 = var1 / var5;
            var26 = var1 - var46;
            var25 = 0;
            var24 = 0;
            var23 = undefined;
            var22 = undefined;
            var21 = undefined;
            var20 = undefined;
            var19 = undefined;
            var18 = undefined;
            var17 = undefined;
            var16 = undefined;
            var15 = undefined;
            var14 = undefined;
            var13 = undefined;
            var12 = undefined;
            var11 = undefined;
            var10 = undefined;
            var9 = undefined;
            var8 = undefined;
            var7 = undefined;
            var6 = undefined;
            var5 = undefined;
            var1 = undefined;
            if(!var54) { _fun0001_ip = 1484; continue _fun0001 }
 649:
            var62 = var47 < var4;
            var61 = var24;
            var59 = var13;
            var58 = var12;
            var57 = var7;
            var56 = var6;
            var55 = var5;
            var54 = var1;
            var60 = 0;
            var24 = var61;
            var13 = var59;
            var12 = var58;
            var7 = var57;
            var6 = var56;
            var5 = var55;
            var1 = var54;
            if(!var62) { _fun0001_ip = 1474; continue _fun0001 }
 703:
            var62 = var44;
            if(!var42) { _fun0001_ip = 712; continue _fun0001 }
 709:
            var62 = var38;
 712:
            var76 = var49.bind(var53)(var41, var62);
            var63 = var47 < var76;
            var62 = 0;
            var77 = 0;
            if(!var63) { _fun0001_ip = 764; continue _fun0001 }
 729:
            var64 = var51 / var4;
            var63 = var60 + var29;
            var63 = var64 * var63;
            var63 = var63 * var62;
            var63 = var48.bind(var53)(var63);
            var33[var62] = var63;
            var62 = var62 + 1;
            var77 = var62;
            if(var77 < var76) { _fun0001_ip = 729; continue _fun0001 }
 764:
            var62 = var44;
            if(!var42) { _fun0001_ip = 773; continue _fun0001 }
 770:
            var62 = var38;
 773:
            var74 = var49.bind(var53)(var40, var62);
            var63 = var47 < var74;
            var62 = 0;
            var75 = 0;
            if(!var63) { _fun0001_ip = 825; continue _fun0001 }
 790:
            var64 = var51 / var3;
            var63 = var25 + var29;
            var63 = var64 * var63;
            var63 = var63 * var62;
            var63 = var48.bind(var53)(var63);
            var32[var62] = var63;
            var62 = var62 + 1;
            var75 = var62;
            if(var75 < var74) { _fun0001_ip = 790; continue _fun0001 }
 825:
            var65 = var47 < var40;
            var64 = var28;
            var63 = 0;
            var62 = 0;
            var81 = var64;
            var73 = 0;
            var72 = 0;
            if(!var65) { _fun0001_ip = 1004; continue _fun0001 }
 849:
            var67 = var46;
            if(!var63) { _fun0001_ip = 857; continue _fun0001 }
 855:
            var67 = 0;
 857:
            var65 = var32[var63];
            var66 = var45 * var65;
            var70 = var67 * var40;
            var65 = var40 - var63;
            var65 = var41 * var65;
            var71 = var67;
            var79 = var64;
            var78 = var62;
            var69 = var79;
            var68 = var78;
            var67 = var71;
            if(!(var70 < var65)) { _fun0001_ip = 973; continue _fun0001 }
 899:
            var65 = var71 > var52;
            if(var65) { _fun0001_ip = 910; continue _fun0001 }
 906:
            var65 = var63 > var52;
 910:
            var83 = var79;
            if(var65) { _fun0001_ip = 936; continue _fun0001 }
 916:
            var70 = var37[var78];
            var65 = var33[var71];
            var65 = var70 * var65;
            var65 = var65 * var66;
            var83 = var79 + var65;
 936:
            var80 = var71 + 1;
            var78 = var78 + 1;
            var70 = var80 * var40;
            var65 = var40 - var63;
            var65 = var41 * var65;
            var79 = var83;
            var71 = var80;
            var69 = var79;
            var68 = var78;
            var67 = var71;
            if(var70 < var65) { _fun0001_ip = 899; continue _fun0001 }
 973:
            var63 = var63 + 1;
            var64 = var69;
            var62 = var68;
            var59 = var67;
            var81 = var64;
            var72 = var62;
            var58 = var66;
            var73 = var63;
            if(var73 < var40) { _fun0001_ip = 849; continue _fun0001 }
 1004:
            var71 = var59;
            var70 = var58;
            var65 = var27;
            var64 = var26;
            var63 = 0;
            var62 = 0;
 1020:
            var67 = var46;
            if(!var63) { _fun0001_ip = 1028; continue _fun0001 }
 1026:
            var67 = 0;
 1028:
            var66 = var32[var63];
            var66 = var45 * var66;
            var69 = var44 - var63;
            var78 = var67;
            var84 = var65;
            var83 = var64;
            var82 = var62;
            var80 = var84;
            var79 = var83;
            var68 = var82;
            var67 = var78;
            if(!(var67 < var69)) { _fun0001_ip = 1126; continue _fun0001 }
 1068:
            var69 = var33[var78];
            var85 = var69 * var66;
            var69 = var36[var82];
            var69 = var69 * var85;
            var84 = var84 + var69;
            var69 = var35[var82];
            var69 = var69 * var85;
            var83 = var83 + var69;
            var78 = var78 + 1;
            var82 = var82 + 1;
            var69 = var44 - var63;
            var80 = var84;
            var79 = var83;
            var68 = var82;
            var67 = var78;
            if(var67 < var69) { _fun0001_ip = 1068; continue _fun0001 }
 1126:
            var69 = var63 + 1;
            var65 = var80;
            var64 = var79;
            var63 = var69;
            var62 = var68;
            if(var69 < var44) { _fun0001_ip = 1020; continue _fun0001 }
 1145:
            var65 = var39;
            var64 = 0;
            var63 = 0;
            var62 = var65;
            if(!var42) { _fun0001_ip = 1271; continue _fun0001 }
 1158:
            var83 = var46;
            if(!var64) { _fun0001_ip = 1166; continue _fun0001 }
 1164:
            var83 = 0;
 1166:
            var78 = var32[var64];
            var82 = var45 * var78;
            var78 = var38 - var64;
            var86 = var83;
            var88 = var65;
            var87 = var63;
            var85 = var88;
            var84 = var87;
            var83 = var86;
            if(!(var83 < var78)) { _fun0001_ip = 1243; continue _fun0001 }
 1200:
            var89 = var34[var87];
            var78 = var33[var86];
            var78 = var89 * var78;
            var78 = var78 * var82;
            var88 = var88 + var78;
            var86 = var86 + 1;
            var87 = var87 + 1;
            var78 = var38 - var64;
            var85 = var88;
            var84 = var87;
            var83 = var86;
            if(var83 < var78) { _fun0001_ip = 1200; continue _fun0001 }
 1243:
            var64 = var64 + 1;
            var65 = var85;
            var63 = var84;
            var55 = var83;
            var62 = var65;
            var56 = var63;
            var54 = var82;
            var57 = var64;
            if(var57 < var38) { _fun0001_ip = 1158; continue _fun0001 }
 1271:
            var63 = var31 * var80;
            var63 = var81 - var63;
            var64 = var44 * var81;
            var64 = var64 - var63;
            var64 = var64 + var79;
            var64 = var64 / var45;
            var65 = var50.bind(var53)(var46, var64);
            var65 = var30 * var65;
            var65 = var49.bind(var53)(var47, var65);
            var2[var61] = var65;
            var64 = var64 - var79;
            var64 = var50.bind(var53)(var46, var64);
            var64 = var30 * var64;
            var65 = var49.bind(var53)(var47, var64);
            var64 = var61 + var46;
            var2[var64] = var65;
            var63 = var50.bind(var53)(var46, var63);
            var63 = var30 * var63;
            var64 = var49.bind(var53)(var47, var63);
            var63 = var61 + var45;
            var2[var63] = var64;
            var63 = var50.bind(var53)(var46, var62);
            var63 = var30 * var63;
            var64 = var49.bind(var53)(var47, var63);
            var63 = var61 + var44;
            var2[var63] = var64;
            var60 = var60 + 1;
            var61 = var61 + var43;
            var20 = var62;
            var59 = var71;
            var58 = var70;
            var24 = var61;
            var23 = var81;
            var22 = var80;
            var21 = var79;
            var19 = var77;
            var18 = var76;
            var17 = var75;
            var16 = var74;
            var15 = var73;
            var14 = var72;
            var13 = var59;
            var12 = var58;
            var11 = var69;
            var10 = var68;
            var9 = var67;
            var8 = var66;
            var7 = var57;
            var6 = var56;
            var5 = var55;
            var1 = var54;
            if(var60 < var4) { _fun0001_ip = 703; continue _fun0001 }
 1474:
            var25 = var25 + 1;
            if(var25 < var3) { _fun0001_ip = 649; continue _fun0001 }
 1484:
            var1 = {};
            var1['w'] = var4;
            var1['h'] = var3;
            var1['rgba'] = var2;
            return var1;
        }
    };
    var _closure1_slot2 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 1;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/thumbhash/ThumbhashUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function createThumbhashImageFromPlaceholder(arg1) {
        var5 = _closure1_slot2;
        var1 = global;
        var7 = var1.Uint8Array;
        var6 = var7.from;
        var3 = var1.atob;
        var4 = undefined;
        var1 = arg1;
        var3 = var3.bind(var4)(var1);
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.charCodeAt;
            var1 = 0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var6.bind(var7)(var3, var1);
        var1 = {'detail': 1, 'pop': 1.1};
        var1 = var5.bind(var4)(var3, var1);
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 0;
        var2 = var5[var2];
        var5 = var3.bind(var4)(var2);
        var4 = var5.rgbaToDataURL;
        var3 = var1.w;
        var2 = var1.h;
        var1 = var1.rgba;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var3['createThumbhashImageFromPlaceholder'] = var4;
    var3['thumbHashToRGBA'] = var2;
    return var1;
})();