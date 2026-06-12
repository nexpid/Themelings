// app/modules/client_themes/CustomThemesRandomUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var6 = ['#94E0CF', '#9AF0B1', '#9A90FF', '#9A53FF', '#FDA6E4', '#FFE6C0', '#EFB4AA', '#56B69F', '#29C566', '#5348CA', '#6D24D4', '#CA48C8', '#F0AE29', '#DF4232'];
    var _closure1_slot2 = var6;
    var1 = [0, 45, 90, 135, 180, 225, 270, 315];
    var _closure1_slot3 = var1;
    var1 = [20, 40, 60, 80];
    var _closure1_slot4 = var1;
    var5 = {};
    var1 = 'solid';
    var5['SOLID'] = var1;
    var1 = 'gradient';
    var5['GRADIENT'] = var1;
    var _closure1_slot5 = var5;
    var4 = {};
    var1 = 'two-color';
    var4['TWO_COLOR'] = var1;
    var1 = 'analogous';
    var4['ANALOGOUS'] = var1;
    var1 = 'complementary';
    var4['COMPLEMENTARY'] = var1;
    var1 = 'split-complementary';
    var4['SPLIT_COMPLEMENTARY'] = var1;
    var1 = 'triadic';
    var4['TRIADIC'] = var1;
    var _closure1_slot6 = var4;
    var8 = var4.ANALOGOUS;
    var1 = new Array(4);
    var1[0] = var8;
    var8 = var4.COMPLEMENTARY;
    var1[1] = var8;
    var8 = var4.SPLIT_COMPLEMENTARY;
    var1[2] = var8;
    var8 = var4.TRIADIC;
    var1[3] = var8;
    var _closure1_slot7 = var1;
    var1 = 1;
    var8 = var7[var1];
    var7 = require;
    var1 = undefined;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/client_themes/CustomThemesRandomUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['COLOR_PALETTE'] = var6;
    var3['ColorType'] = var5;
    var3['GradientType'] = var4;
    var2 = function generateRandomColorOptions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot4;
            var1 = global;
            var6 = var1.Math;
            var5 = var6.floor;
            var7 = var1.Math;
            var3 = var7.random;
            var7 = var3.bind(var7)();
            var3 = var4.length;
            var3 = var7 * var3;
            var3 = var5.bind(var6)(var3);
            var3 = var4[var3];
            var5 = _closure1_slot3;
            var7 = var1.Math;
            var6 = var7.floor;
            var8 = var1.Math;
            var4 = var8.random;
            var8 = var4.bind(var8)();
            var4 = var5.length;
            var4 = var8 * var4;
            var4 = var6.bind(var7)(var4);
            var4 = var5[var4];
            var6 = var1.Math;
            var5 = var6.random;
            var6 = var5.bind(var6)();
            var5 = 0.2;
            var5 = var6 < var5;
            var6 = 'path2';
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 'path1';
case 2:
            var5 = 'path1';
            if(!(var5 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot2;
            var8 = var1.Math;
            var7 = var8.floor;
            var9 = var1.Math;
            var5 = var9.random;
            var9 = var5.bind(var9)();
            var5 = var6.length;
            var5 = var9 * var5;
            var5 = var7.bind(var8)(var5);
            var8 = var6[var5];
            var6 = _closure1_slot7;
            var9 = var1.Math;
            var7 = var9.floor;
            var10 = var1.Math;
            var5 = var10.random;
            var10 = var5.bind(var10)();
            var5 = var6.length;
            var5 = var10 * var5;
            var5 = var7.bind(var9)(var5);
            var6 = var6[var5];
            var7 = function generateColorHarmony(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var6 = arg2;
                    var9 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var4 = undefined;
case 6: // try_start_0
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var10 = 0;
                    var7 = var7[var10];
                    var8 = var8.bind(var9)(var7);
                    var7 = var1;
                    var11 = var8.bind(var9)(var7);
                    var8 = var11.get;
                    var7 = 'hsl.h';
                    var3 = var8.bind(var11)(var7);
                    var8 = var11.get;
                    var7 = 'hsl.s';
                    var5 = var8.bind(var11)(var7);
                    var8 = var11.get;
                    var7 = 'hsl.l';
                    var4 = var8.bind(var11)(var7);
                    var7 = var6;
                    var6 = _closure1_slot6;
                    var6 = var6.ANALOGOUS;
                    if(!(var6 !== var7)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var6 = _closure1_slot6;
                    var6 = var6.COMPLEMENTARY;
                    if(!(var6 !== var7)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var6 = _closure1_slot6;
                    var6 = var6.SPLIT_COMPLEMENTARY;
                    if(!(var6 !== var7)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var6 = _closure1_slot6;
                    var6 = var6.TRIADIC;
                    if(!(var6 !== var7)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var7 = var1;
                    var6 = new Array(1);
                    var6[0] = var7;
case 15: // try_end0
                    return var6;
case 13: // try_start_1
                    var7 = var1;
                    var13 = var5;
                    var12 = var4;
                    var15 = var3;
                    var6 = new Array(3);
                    var6[0] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var11 = var7[var10];
                    var17 = var8.bind(var9)(var11);
                    var16 = var17.hsl;
                    var11 = 120;
                    var11 = var15 + var11;
                    var14 = 360;
                    var11 = var11 % var14;
                    var16 = var16.bind(var17)(var11, var13, var12);
                    var11 = var16.hex;
                    var11 = var11.bind(var16)();
                    var6[1] = var11;
                    var7 = var7[var10];
                    var11 = var8.bind(var9)(var7);
                    var8 = var11.hsl;
                    var7 = 240;
                    var7 = var15 + var7;
                    var7 = var7 % var14;
                    var8 = var8.bind(var11)(var7, var13, var12);
                    var7 = var8.hex;
                    var7 = var7.bind(var8)();
                    var6[2] = var7;
case 16: // try_end1
                    return var6;
case 11: // try_start_2
                    var7 = var1;
                    var13 = var5;
                    var12 = var4;
                    var15 = var3;
                    var6 = new Array(3);
                    var6[0] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var11 = var7[var10];
                    var17 = var8.bind(var9)(var11);
                    var16 = var17.hsl;
                    var11 = 150;
                    var11 = var15 + var11;
                    var14 = 360;
                    var11 = var11 % var14;
                    var16 = var16.bind(var17)(var11, var13, var12);
                    var11 = var16.hex;
                    var11 = var11.bind(var16)();
                    var6[1] = var11;
                    var7 = var7[var10];
                    var11 = var8.bind(var9)(var7);
                    var8 = var11.hsl;
                    var7 = 210;
                    var7 = var15 + var7;
                    var7 = var7 % var14;
                    var8 = var8.bind(var11)(var7, var13, var12);
                    var7 = var8.hex;
                    var7 = var7.bind(var8)();
                    var6[2] = var7;
case 17: // try_end2
                    return var6;
case 9: // try_start_3
                    var13 = var1;
                    var15 = var5;
                    var14 = var4;
                    var16 = var3;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = var8[var10];
                    var12 = var11.bind(var9)(var6);
                    var7 = var12.hsl;
                    var6 = 180;
                    var16 = var16 + var6;
                    var6 = 360;
                    var6 = var16 % var6;
                    var7 = var7.bind(var12)(var6, var15, var14);
                    var6 = var7.hex;
                    var7 = var6.bind(var7)();
                    var6 = new Array(3);
                    var6[0] = var13;
                    var8 = var8[var10];
                    var12 = var11.bind(var9)(var8);
                    var11 = var12.mix;
                    var8 = 0.5;
                    var11 = var11.bind(var12)(var13, var7, var8);
                    var8 = var11.hex;
                    var8 = var8.bind(var11)();
                    var6[1] = var8;
                    var6[2] = var7;
case 18: // try_end3
                    return var6;
case 7: // try_start_4
                    var11 = var1;
                    var7 = var5;
                    var6 = var4;
                    var8 = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = var4[var10];
                    var13 = var5.bind(var9)(var2);
                    var12 = var13.hsl;
                    var3 = 30;
                    var2 = var8 - var3;
                    var12 = var12.bind(var13)(var2, var7, var6);
                    var2 = var12.hex;
                    var12 = var2.bind(var12)();
                    var2 = new Array(3);
                    var2[0] = var12;
                    var2[1] = var11;
                    var4 = var4[var10];
                    var5 = var5.bind(var9)(var4);
                    var4 = var5.hsl;
                    var3 = var8 + var3;
                    var4 = var4.bind(var5)(var3, var7, var6);
                    var3 = var4.hex;
                    var3 = var3.bind(var4)();
                    var2[2] = var3;
case 19: // try_end4
                    return var2;
case 20: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=1);
                    var2 = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                }
            };
            var5 = undefined;
            var7 = var7.bind(var5)(var8, var6);
            var5 = {};
            var8 = _closure1_slot5;
            var8 = var8.GRADIENT;
            var5['type'] = var8;
            var5['colors'] = var7;
            var5['angle'] = var4;
            var5['intensity'] = var3;
            var5['gradientType'] = var6;
            return var5;
case 4:
            var8 = var1.Math;
            var7 = var8.floor;
            var6 = var1.Math;
            var5 = var6.random;
            var9 = var5.bind(var6)();
            var6 = _closure1_slot2;
            var5 = var6.length;
            var5 = var9 * var5;
            var5 = var7.bind(var8)(var5);
            var8 = var1.Math;
            var7 = var8.floor;
            var10 = var1.Math;
            var9 = var10.random;
            var9 = var9.bind(var10)();
            var6 = var6.length;
            var6 = var9 * var6;
            var6 = var7.bind(var8)(var6);
            if(!(var6 === var5)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = var1.Math;
            var8 = var9.floor;
            var10 = var1.Math;
            var7 = var10.random;
            var10 = var7.bind(var10)();
            var7 = _closure1_slot2;
            var7 = var7.length;
            var7 = var10 * var7;
            var6 = var8.bind(var9)(var7);
            if(var6 === var5) { _fun0001_ip = 22; continue _fun0001 }
case 21:
            var1 = _closure1_slot2;
            var7 = var1[var5];
            var5 = new Array(2);
            var5[0] = var7;
            var1 = var1[var6];
            var5[1] = var1;
            var1 = {};
            var6 = _closure1_slot5;
            var6 = var6.GRADIENT;
            var1['type'] = var6;
            var1['colors'] = var5;
            var1['angle'] = var4;
            var1['intensity'] = var3;
            var2 = _closure1_slot6;
            var2 = var2.TWO_COLOR;
            var1['gradientType'] = var2;
            return var1;
        }
    };
    var3['generateRandomColorOptions'] = var2;
    return var1;
})();