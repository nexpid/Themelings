// app/modules/display_name_styles/DisplayNameStylesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var5 = function wrapHue(arg1) {
        var1 = arg1;
        var2 = 360;
        var1 = var1 % var2;
        var1 = var1 + var2;
        var1 = var1 % var2;
        return var1;
    };
    var _closure1_slot8 = var5;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.FLYWHEEL_EFFECTS;
    var _closure1_slot4 = var6;
    var6 = var4.FLYWHEEL_FONTS;
    var _closure1_slot5 = var6;
    var4 = var4.getColorPresetsForEffect;
    var _closure1_slot6 = var4;
    var4 = [0, 60, 90, 30];
    var _closure1_slot7 = var4;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/display_name_styles/DisplayNameStylesUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function getEffectColorCount(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var4 = var4[var1];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var4 = var4.DisplayNameEffect;
            var4 = var4.GRADIENT;
            if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var1];
            var4 = var6.bind(var5)(var4);
            var4 = var4.DisplayNameEffect;
            var4 = var4.GUMMY;
            if(!(var4 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var1];
            var2 = var4.bind(var5)(var2);
            var2 = var2.DisplayNameEffect;
            var2 = var2.PRISM;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = 1;
            return var2;
case 6:
            var2 = 5;
            return var2;
case 4:
            var2 = 4;
            return var2;
case 2:
            return var1;
        }
    };
    var3['getEffectColorCount'] = var6;
    var6 = function generateColorVariants(arg1) {
        var11 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var11);
        var1 = var2.alpha;
        var14 = 1;
        var7 = var1.bind(var2)(var14);
        var1 = var7.get;
        var5 = 'hsl.l';
        var9 = var1.bind(var7)(var5);
        var1 = var7.get;
        var6 = 'hsl.s';
        var1 = var1.bind(var7)(var6);
        var2 = global;
        var4 = var2.Math;
        var3 = var4.min;
        var10 = 1.2;
        var1 = var10 * var1;
        var3 = var3.bind(var4)(var14, var1);
        var12 = var2.Math;
        var4 = var12.min;
        var1 = 0.1;
        var1 = var9 + var1;
        var8 = 0.6;
        var4 = var4.bind(var12)(var8, var1);
        var1 = {};
        var1['main'] = var11;
        var11 = var7.set;
        var13 = var2.Math;
        var12 = var13.min;
        var10 = var10 * var9;
        var10 = var12.bind(var13)(var14, var10);
        var11 = var11.bind(var7)(var5, var10);
        var10 = var11.hex;
        var10 = var10.bind(var11)();
        var1['light1'] = var10;
        var11 = var7.set;
        var13 = var2.Math;
        var12 = var13.min;
        var10 = 1.6;
        var10 = var10 * var9;
        var10 = var12.bind(var13)(var14, var10);
        var11 = var11.bind(var7)(var5, var10);
        var10 = var11.hex;
        var10 = var10.bind(var11)();
        var1['light2'] = var10;
        var10 = var7.set;
        var12 = var2.Math;
        var11 = var12.max;
        var8 = var8 * var9;
        var13 = 0;
        var8 = var11.bind(var12)(var13, var8);
        var10 = var10.bind(var7)(var5, var8);
        var8 = var10.hex;
        var8 = var8.bind(var10)();
        var1['dark1'] = var8;
        var10 = var7.set;
        var12 = var2.Math;
        var11 = var12.max;
        var8 = 0.2;
        var8 = var8 * var9;
        var8 = var11.bind(var12)(var13, var8);
        var10 = var10.bind(var7)(var5, var8);
        var8 = var10.hex;
        var8 = var8.bind(var10)();
        var1['dark2'] = var8;
        var8 = var7.set;
        var11 = var2.Math;
        var10 = var11.max;
        var2 = 0.4;
        var9 = var2 * var9;
        var2 = 0.12;
        var2 = var10.bind(var11)(var2, var9);
        var8 = var8.bind(var7)(var5, var2);
        var2 = var8.hex;
        var2 = var2.bind(var8)();
        var1['toonStroke'] = var2;
        var2 = var7.set;
        var3 = var2.bind(var7)(var6, var3);
        var2 = var3.set;
        var3 = var2.bind(var3)(var5, var4);
        var2 = var3.hex;
        var2 = var2.bind(var3)();
        var1['neonStroke'] = var2;
        return var1;
    };
    var3['generateColorVariants'] = var6;
    var3['wrapHue'] = var5;
    var3['GUMMY_HUE_SHIFTS'] = var4;
    var4 = function buildGummyColors(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var9 = 3;
            var3 = var6[var9];
            var8 = undefined;
            var4 = var4.bind(var8)(var3);
            var5 = _closure1_slot0;
            var3 = 4;
            var3 = var6[var3];
            var6 = var5.bind(var8)(var3);
            var5 = var6.int2hex;
            var3 = arg1;
            var3 = var5.bind(var6)(var3);
            var4 = var4.bind(var8)(var3);
            var3 = var4.hsl;
            var4 = var3.bind(var4)();
            var3 = _closure1_slot3;
            var3 = var3.bind(var8)(var4, var9);
            var6 = 0;
            var7 = var3[var6];
            var5 = 1;
            var10 = var3[var5];
            var4 = 2;
            var3 = var3[var4];
            var11 = global;
            var12 = var11.Number;
            var11 = var12.isNaN;
            var12 = var11.bind(var12)(var7);
            var11 = 0;
            if(var12) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var11 = var7;
case 8:
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var10;
            var7[2] = var3;
            var3 = _closure1_slot3;
            var3 = var3.bind(var8)(var7, var9);
            var6 = var3[var6];
            var _closure2_slot0 = var6;
            var5 = var3[var5];
            var _closure2_slot1 = var5;
            var3 = var3[var4];
            var _closure2_slot2 = var3;
            var3 = _closure1_slot7;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var4 = var5.hsl;
                var3 = _closure1_slot8;
                var7 = _closure2_slot0;
                var2 = arg1;
                var2 = var7 + var2;
                var3 = var3.bind(var6)(var2);
                var2 = _closure2_slot1;
                var1 = _closure2_slot2;
                var2 = var4.bind(var5)(var3, var2, var1);
                var1 = var2.num;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['buildGummyColors'] = var4;
    var4 = function hueToGummyPastelColor(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.hsl;
        var3 = arg1;
        var2 = 0.78;
        var1 = 0.72;
        var2 = var4.bind(var5)(var3, var2, var1);
        var1 = var2.num;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['hueToGummyPastelColor'] = var4;
    var4 = function parseServerDisplayNameStyles(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = {};
            var4 = var3.font_id;
            var2['fontId'] = var4;
            var4 = var3.effect_id;
            var2['effectId'] = var4;
            var3 = var3.colors;
            var2['colors'] = var3;
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['parseServerDisplayNameStyles'] = var4;
    var4 = function generateRandomDisplayNameStyles(arg1, arg2) {
        var3 = arg1;
        var4 = arg2;
        var2 = global;
        var6 = var2.Math;
        var5 = var6.floor;
        var7 = var2.Math;
        var1 = var7.random;
        var7 = var1.bind(var7)();
        var1 = var4.length;
        var1 = var7 * var1;
        var1 = var5.bind(var6)(var1);
        var4 = var4[var1];
        var6 = var2.Math;
        var5 = var6.floor;
        var7 = var2.Math;
        var1 = var7.random;
        var7 = var1.bind(var7)();
        var1 = var3.length;
        var1 = var7 * var1;
        var1 = var5.bind(var6)(var1);
        var5 = var3[var1];
        var3 = _closure1_slot6;
        var1 = undefined;
        var3 = var3.bind(var1)(var4);
        var1 = {};
        var1['fontId'] = var5;
        var1['effectId'] = var4;
        var5 = var2.Math;
        var4 = var5.floor;
        var6 = var2.Math;
        var2 = var6.random;
        var6 = var2.bind(var6)();
        var2 = var3.length;
        var2 = var6 * var2;
        var2 = var4.bind(var5)(var2);
        var9 = var3[var2];
        var2 = new Array(0);
        var8 = 0;
        var10 = var2;
        var3 = arraySpread(var10, var9, var8);
        var1['colors'] = var2;
        return var1;
    };
    var3['generateRandomDisplayNameStyles'] = var4;
    var4 = function applyFlywheelViewingFallback(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 11:
            var2 = null;
            if(!(var2 != var1)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var5 = _closure1_slot5;
            var4 = var5.includes;
            var3 = var1.fontId;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var6 = var1.fontId;
            _fun0004_ip = 16; continue _fun0004;
case 14:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.DisplayNameFont;
            var6 = var3.DEFAULT;
case 16:
            var5 = _closure1_slot4;
            var4 = var5.includes;
            var3 = var1.effectId;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0004_ip = 4; continue _fun0004 }
case 17:
            var5 = var1.effectId;
            _fun0004_ip = 18; continue _fun0004;
case 4:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.DisplayNameEffect;
            var5 = var2.SOLID;
case 18:
            var2 = var1.fontId;
            if(!(var6 === var2)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var3 = var1.effectId;
            var2 = var1;
            if(!(var5 !== var3)) { _fun0004_ip = 21; continue _fun0004 }
case 19:
            var3 = {};
            var8 = var3;
            var7 = var1;
            var4 = copyDataProperties(var8, var7);
            var4 = 'fontId';
            var3[3] = var6;
            var4 = 'effectId';
            var3[3] = var5;
            var2 = var3;
case 21:
            return var2;
case 12:
            return var1;
        }
    };
    var3['applyFlywheelViewingFallback'] = var4;
    var2 = function hasNonLatinLetters(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var3 = var4.replace;
            var2 = /(?:[\0-@\[-`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06F0-\u06F9\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07C9\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u088F-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09EF\u09F2-\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B70\u0B72-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C62-\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDC\u0CDF\u0CE2-\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57-\u0D5E\u0D62-\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0EDB\u0EE0-\u0EFF\u0F01-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u1040-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16F0\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u194F\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19FF\u1A17-\u1A1F\u1A55-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BFF\u1C24-\u1C4C\u1C50-\u1C59\u1C7E\u1C7F\u1C8B-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u2182\u2185-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u3004\u3007-\u3030\u3036-\u303A\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA620-\uA629\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6E6-\uA716\uA720\uA721\uA789\uA78A\uA7CE\uA7CF\uA7D2\uA7D4\uA7DD-\uA7F1\uA802\uA806\uA80B\uA823-\uA83F\uA874-\uA881\uA8B4-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF-\uA909\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9D0-\uA9DF\uA9E5\uA9F0-\uA9F9\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEFF\uDF20-\uDF2C\uDF41\uDF4A-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0-\uDFFF]|\uD801[\uDC9E-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDBF\uDDF4-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE5-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD24-\uDD49\uDD66-\uDD6E\uDD86-\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEC1\uDEC5-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF46-\uDF6F\uDF82-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDD02\uDD27-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDD9\uDDDB\uDDDD-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDF7F\uDF8A\uDF8C\uDF8D\uDF8F\uDFB6\uDFB8-\uDFD0\uDFD2\uDFD4-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEFF\uDF1B-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCE0-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFBF\uDFE1-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC00-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD812-\uD817\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD834\uD836\uD83C-\uD83F\uD87C\uD87D\uD87F\uD889-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDC5F]|\uD810[\uDFFB-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD818[\uDC00-\uDCFF\uDD1E-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F-\uDE6F\uDEBF-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDD3F\uDD6D-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFE\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDDCF\uDDEE\uDDEF\uDDF1-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5-\uDCFF\uDD44-\uDD4A\uDD4C-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF3A-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD888[\uDFB0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
            var1 = '';
            var3 = var3.bind(var4)(var2, var1);
            var2 = /(?:[\0-@\[-`\{-\xA9\xAB-\xB9\xBB-\xBF\xD7\xF7\u02B9-\u02DF\u02E5-\u1CFF\u1D26-\u1D2B\u1D5D-\u1D61\u1D66-\u1D6A\u1D78\u1DBF-\u1DFF\u1F00-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u2129\u212C-\u2131\u2133-\u214D\u214F-\u215F\u2189-\u2C5F\u2C80-\uA721\uA788-\uA78A\uA7CE\uA7CF\uA7D2\uA7D4\uA7DD-\uA7F1\uA800-\uAB2F\uAB5B\uAB65\uAB6A-\uD7FF\uE000-\uFAFF\uFB07-\uFF20\uFF3B-\uFF40\uFF5B-\uFFFF]|[\uD800\uD802-\uD836\uD838-\uDBFF][\uDC00-\uDFFF]|\uD801[\uDC00-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
            var1 = var2.test;
            var1 = var1.bind(var2)(var3);
            return var1;
case 22:
            var1 = false;
            return var1;
        }
    };
    var3['hasNonLatinLetters'] = var2;
    return var1;
})();