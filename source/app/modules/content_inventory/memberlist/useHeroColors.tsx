// app/modules/content_inventory/memberlist/useHeroColors.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
 0:
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
                if(var1) { _fun0001_ip = 220; continue _fun0001 }
 129:
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
                if(!(var3 < var8)) { _fun0001_ip = 220; continue _fun0001 }
 182:
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var14 = var14.bind(var5)(var1);
                var1 = var14.getDarkness;
                var1 = var1.bind(var14)(var13);
                var12 = var13;
                var9 = var12;
                if(!(var1 >= var11)) { _fun0001_ip = 129; continue _fun0001 }
 220:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.getDarkness;
                var1 = var1.bind(var3)(var4);
                var1 = var1 >= var11;
                var3 = var4;
                var4 = var3;
                if(var1) { _fun0001_ip = 352; continue _fun0001 }
 261:
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
                if(!(var10 < var8)) { _fun0001_ip = 352; continue _fun0001 }
 314:
                var13 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var13 = var13.bind(var5)(var1);
                var1 = var13.getDarkness;
                var1 = var1.bind(var13)(var12);
                var3 = var12;
                var4 = var3;
                if(!(var1 >= var11)) { _fun0001_ip = 261; continue _fun0001 }
 352:
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
 0:
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
 0:
                    var3 = arg2;
                    var2 = _closure1_slot5;
                    var5 = var2.desaturateUserColors;
                    var2 = 1;
                    if(!var5) { _fun0003_ip = 34; continue _fun0003 }
 24:
                    var5 = _closure1_slot5;
                    var2 = var5.saturation;
 34:
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
                    if(var5) { _fun0003_ip = 113; continue _fun0003 }
 98:
                    var5 = var6.map;
                    var4 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var4 = arg1;
                            var1 = var4[Symbol.iterator];
                            var4 = var1().next;
                            var5 = var4().value;
                            var2 = var1;
                            var3 = undefined;
                            var2 = var2 === var3;
                            var9 = undefined;
                            if(var2) { _fun0004_ip = 27; continue _fun0004 }
 24:
                            var9 = var5;
 27:
                            var8 = undefined;
                            if(var2) { _fun0004_ip = 57; continue _fun0004 }
 32:
                            var6 = var4().value;
                            var5 = var1;
                            var5 = var5 === var3;
                            var8 = undefined;
                            var2 = var5;
                            if(var5) { _fun0004_ip = 57; continue _fun0004 }
 51:
                            var8 = var6;
                            var2 = var5;
 57:
                            var6 = undefined;
                            if(var2) { _fun0004_ip = 87; continue _fun0004 }
 62:
                            var5 = var4().value;
                            var4 = var1;
                            var4 = var4 === var3;
                            var6 = undefined;
                            var2 = var4;
                            if(var4) { _fun0004_ip = 87; continue _fun0004 }
 81:
                            var6 = var5;
                            var2 = var4;
 87:
                            if(var2) { _fun0004_ip = 93; continue _fun0004 }
 90:
                            var1.return();
 93:
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
 113:
                    if(!(var2 == var1)) { _fun0003_ip = 132; continue _fun0003 }
 117:
                    var2 = new Array(2);
                    var2[0] = var3;
                    var2[1] = var3;
                    var1 = var2;
 132:
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
            if(var1) { _fun0002_ip = 292; continue _fun0002 }
 201:
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
            if(!(var3 < var8)) { _fun0002_ip = 292; continue _fun0002 }
 254:
            var14 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var14 = var14.bind(var5)(var1);
            var1 = var14.getDarkness;
            var1 = var1.bind(var14)(var13);
            var12 = var13;
            var9 = var12;
            if(!(var1 >= var10)) { _fun0002_ip = 201; continue _fun0002 }
 292:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.getDarkness;
            var1 = var1.bind(var3)(var4);
            var1 = var1 >= var10;
            var3 = var4;
            var4 = var3;
            if(var1) { _fun0002_ip = 424; continue _fun0002 }
 333:
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
            if(!(var11 < var8)) { _fun0002_ip = 424; continue _fun0002 }
 386:
            var13 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var13 = var13.bind(var5)(var1);
            var1 = var13.getDarkness;
            var1 = var1.bind(var13)(var12);
            var3 = var12;
            var4 = var3;
            if(!(var1 >= var10)) { _fun0002_ip = 333; continue _fun0002 }
 424:
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