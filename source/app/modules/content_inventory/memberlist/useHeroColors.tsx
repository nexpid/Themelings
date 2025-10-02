// app/modules/content_inventory/memberlist/useHeroColors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/content_inventory/memberlist/useHeroColors.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function _default(arg1) {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 9;
        var7 = var5[var3];
        var6 = undefined;
        var10 = var4.bind(var6)(var7);
        var9 = var10.useStateFromStores;
        var7 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() {
            var1 = _closure1_slot5;
            var1 = var1.saturation;
            return var1;
        };
        var9 = var9.bind(var10)(var8, var7);
        var3 = var5[var3];
        var10 = var4.bind(var6)(var3);
        var8 = var10.useStateFromStores;
        var3 = _closure1_slot6;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = function() {
            var1 = _closure1_slot6;
            var1 = var1.theme;
            return var1;
        };
        var8 = var8.bind(var10)(var7, var3);
        var3 = 6;
        var3 = var5[var3];
        var7 = var4.bind(var6)(var3);
        var3 = var7.getFallbackHeroColor;
        var7 = var3.bind(var7)(var8, var9);
        var3 = 4;
        var3 = var5[var3];
        var5 = var4.bind(var6)(var3);
        var4 = var5.useAvatarColors;
        var3 = arg1;
        var5 = var4.bind(var5)(var3, var7);
        var4 = _closure1_slot3;
        var3 = 2;
        var4 = var4.bind(var6)(var5, var3);
        var3 = 0;
        var6 = var4[var3];
        var _closure2_slot0 = var6;
        var3 = 1;
        var5 = var4[var3];
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 7;
                var4 = var1[var6];
                var5 = undefined;
                var9 = var3.bind(var5)(var4);
                var8 = var9.hex2int;
                var7 = _closure2_slot0;
                var9 = var8.bind(var9)(var7);
                var7 = var1[var6];
                var8 = var3.bind(var5)(var7);
                var7 = var8.hex2int;
                var4 = _closure2_slot1;
                var4 = var7.bind(var8)(var4);
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.getDarkness;
                var1 = var1.bind(var3)(var9);
                var11 = 0.725;
                var1 = var1 >= var11;
                var10 = 1;
                var8 = 8;
                var7 = 0.5;
                var12 = var9;
                var3 = var10;
                var9 = var12;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var13 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var13.bind(var5)(var1);
                var13 = var1.bind(var5)(var12);
                var1 = var13.darken;
                var13 = var1.bind(var13)(var7);
                var1 = var13.num;
                var13 = var1.bind(var13)();
                var3 = var3 + 1;
                var9 = var13;
                if(!(var3 < var8)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var14 = var14.bind(var5)(var1);
                var1 = var14.getDarkness;
                var1 = var1.bind(var14)(var13);
                var12 = var13;
                var9 = var12;
                if(!(var1 >= var11)) { _fun0001_ip = 3; continue _fun0001 }
case 2:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.getDarkness;
                var1 = var1.bind(var3)(var4);
                var1 = var1 >= var11;
                var3 = var4;
                var4 = var3;
                if(var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var12 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var12.bind(var5)(var1);
                var12 = var1.bind(var5)(var3);
                var1 = var12.darken;
                var12 = var1.bind(var12)(var7);
                var1 = var12.num;
                var12 = var1.bind(var12)();
                var10 = var10 + 1;
                var4 = var12;
                if(!(var10 < var8)) { _fun0001_ip = 5; continue _fun0001 }
case 7:
                var13 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var13 = var13.bind(var5)(var1);
                var1 = var13.getDarkness;
                var1 = var1.bind(var13)(var12);
                var3 = var12;
                var4 = var3;
                if(!(var1 >= var11)) { _fun0001_ip = 6; continue _fun0001 }
case 5:
                var1 = {};
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = var2[var6];
                var8 = var3.bind(var5)(var7);
                var7 = var8.int2hex;
                var7 = var7.bind(var8)(var9);
                var1['primaryColor'] = var7;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.int2hex;
                var2 = var2.bind(var3)(var4);
                var1['secondaryColor'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot5;
            var8 = var1.saturation;
            var1 = _closure1_slot6;
            var7 = var1.theme;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 6;
            var4 = var1[var4];
            var5 = undefined;
            var6 = var3.bind(var5)(var4);
            var4 = var6.getFallbackHeroColor;
            var7 = var4.bind(var6)(var7, var8);
            var6 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg2;
                    var2 = _closure1_slot5;
                    var5 = var2.desaturateUserColors;
                    var2 = 1;
                    if(!var5) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure1_slot5;
                    var2 = var5.saturation;
case 8:
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var5 = var2.useColorStore;
                    var2 = var5.getState;
                    var2 = var2.bind(var5)();
                    var5 = var2.palette;
                    var2 = arg1;
                    var6 = var5[var2];
                    var2 = null;
                    var5 = var2 == var6;
                    if(var5) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var5 = var6.map;
                    var4 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var4 = arg1;
                            var1 = var4[Symbol.iterator];
                            var4 = var1().next;
                            var5 = var4().value;
                            var2 = var1;
                            var3 = undefined;
                            var2 = var2 === var3;
                            var9 = undefined;
                            if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 9:
                            var9 = var5;
case 12:
                            var8 = undefined;
                            if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                            var6 = var4().value;
                            var5 = var1;
                            var5 = var5 === var3;
                            var8 = undefined;
                            var2 = var5;
                            if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 15:
                            var8 = var6;
                            var2 = var5;
case 13:
                            var6 = undefined;
                            if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                            var5 = var4().value;
                            var4 = var1;
                            var4 = var4 === var3;
                            var6 = undefined;
                            var2 = var4;
                            if(var4) { _fun0004_ip = 16; continue _fun0004 }
case 18:
                            var6 = var5;
                            var2 = var4;
case 16:
                            if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                            var1.return();
case 19:
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 5;
                            var4 = var7[var1];
                            var5 = var2.bind(var3)(var4);
                            var4 = {};
                            var4['r'] = var9;
                            var4['g'] = var8;
                            var4['b'] = var6;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.toHsl;
                            var4 = var4.bind(var5)();
                            var5 = var4.h;
                            var6 = var4.s;
                            var4 = var4.l;
                            var1 = var7[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var1['h'] = var5;
                            var5 = _closure3_slot0;
                            var5 = var6 * var5;
                            var1['s'] = var5;
                            var1['l'] = var4;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.toHexString;
                            var1 = var1.bind(var2)();
                            return var1;
                        }
                    };
                    var1 = var5.bind(var6)(var4);
case 10:
                    if(!(var2 == var1)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var2 = new Array(2);
                    var2[0] = var3;
                    var2[1] = var3;
                    var1 = var2;
case 21:
                    return var1;
                }
            };
            var4 = arg1;
            var7 = var6.bind(var5)(var4, var7);
            var6 = _closure1_slot3;
            var4 = 2;
            var4 = var6.bind(var5)(var7, var4);
            var6 = 0;
            var9 = var4[var6];
            var11 = 1;
            var8 = var4[var11];
            var6 = 7;
            var4 = var1[var6];
            var7 = var3.bind(var5)(var4);
            var4 = var7.hex2int;
            var9 = var4.bind(var7)(var9);
            var4 = var1[var6];
            var7 = var3.bind(var5)(var4);
            var4 = var7.hex2int;
            var4 = var4.bind(var7)(var8);
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.getDarkness;
            var1 = var1.bind(var3)(var9);
            var10 = 0.725;
            var1 = var1 >= var10;
            var8 = 8;
            var7 = 0.5;
            var12 = var9;
            var3 = var11;
            var9 = var12;
            if(var1) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var13 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var13.bind(var5)(var1);
            var13 = var1.bind(var5)(var12);
            var1 = var13.darken;
            var13 = var1.bind(var13)(var7);
            var1 = var13.num;
            var13 = var1.bind(var13)();
            var3 = var3 + 1;
            var9 = var13;
            if(!(var3 < var8)) { _fun0002_ip = 23; continue _fun0002 }
case 25:
            var14 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var14 = var14.bind(var5)(var1);
            var1 = var14.getDarkness;
            var1 = var1.bind(var14)(var13);
            var12 = var13;
            var9 = var12;
            if(!(var1 >= var10)) { _fun0002_ip = 24; continue _fun0002 }
case 23:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.getDarkness;
            var1 = var1.bind(var3)(var4);
            var1 = var1 >= var10;
            var3 = var4;
            var4 = var3;
            if(var1) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var12 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var12.bind(var5)(var1);
            var12 = var1.bind(var5)(var3);
            var1 = var12.darken;
            var12 = var1.bind(var12)(var7);
            var1 = var12.num;
            var12 = var1.bind(var12)();
            var11 = var11 + 1;
            var4 = var12;
            if(!(var11 < var8)) { _fun0002_ip = 26; continue _fun0002 }
case 28:
            var13 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var13 = var13.bind(var5)(var1);
            var1 = var13.getDarkness;
            var1 = var1.bind(var13)(var12);
            var3 = var12;
            var4 = var3;
            if(!(var1 >= var10)) { _fun0002_ip = 27; continue _fun0002 }
case 26:
            var1 = {};
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = var2[var6];
            var8 = var3.bind(var5)(var7);
            var7 = var8.int2hex;
            var7 = var7.bind(var8)(var9);
            var1['primaryColor'] = var7;
            var2 = var2[var6];
            var3 = var3.bind(var5)(var2);
            var2 = var3.int2hex;
            var2 = var2.bind(var3)(var4);
            var1['secondaryColor'] = var2;
            return var1;
        }
    };
    var3['getHeroColors'] = var2;
    return var1;
})();