// app/modules/premium/powerups/hooks/useDeactivateWarningText.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useDeactivateWarningText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDeactivateWarningText(arg1, arg2) {
        var11 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var11;
        var _closure2_slot1 = var8;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 4;
        var3 = var10[var4];
        var7 = undefined;
        var12 = var9.bind(var7)(var3);
        var6 = var12.useStateFromStores;
        var3 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getMemberCount;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var6.bind(var12)(var5, var3);
        var _closure2_slot2 = var6;
        var5 = _closure1_slot1;
        var3 = 5;
        var3 = var10[var3];
        var3 = var5.bind(var7)(var3);
        var3 = var3.bind(var7)(var11);
        var _closure2_slot3 = var3;
        var5 = var10[var4];
        var14 = var9.bind(var7)(var5);
        var13 = var14.useStateFromStores;
        var5 = _closure1_slot6;
        var12 = new Array(1);
        var12[0] = var5;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var3 = var2.bind(var3)(var1);
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var3.vanityURLCode;
case 2:
                var1 = var2 != var1;
                return var1;
            }
        };
        var5 = var13.bind(var14)(var12, var5);
        var _closure2_slot4 = var5;
        var4 = var10[var4];
        var10 = var9.bind(var7)(var4);
        var9 = var10.useStateFromStores;
        var4 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var4;
        var4 = new Array(3);
        var4[0] = var11;
        var11 = var8.skuId;
        var4[1] = var11;
        var4[2] = var3;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot1;
                var6 = var1.skuId;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var4 = var1.GUILD_POWERUP_ROLE_COLOR_SKU_ID;
                var5 = 0;
                var1 = 0;
                if(!(var6 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var6 = _closure2_slot3;
                var4 = null;
                var4 = var4 == var6;
                var1 = 0;
                if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var4 = _closure1_slot5;
                var3 = var4.getSortedRoles;
                var2 = _closure2_slot0;
                var4 = var3.bind(var4)(var2);
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = arg1;
                        var4 = arg2;
                        var1 = var4.colorStrings;
                        var2 = null;
                        var6 = var2 == var1;
                        var5 = undefined;
                        if(var6) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var5 = var1.secondaryColor;
case 7:
                        var1 = var3;
                        if(!(var2 != var5)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var5 = _closure2_slot3;
                        var4 = var4.id;
                        var4 = var5[var4];
                        var5 = var2 != var4;
                        var2 = 0;
                        if(!var5) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var2 = var4;
case 11:
                        var1 = var3 + var2;
case 9:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var5);
case 4:
                return var1;
            }
        };
        var7 = var9.bind(var10)(var7, var3, var4);
        var _closure2_slot5 = var7;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure2_slot1;
                var4 = var1.skuId;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var8 = 6;
                var3 = var3[var8];
                var7 = undefined;
                var3 = var5.bind(var7)(var3);
                var3 = var3.GUILD_POWERUP_ROLE_COLOR_SKU_ID;
                if(!(var3 !== var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var5.bind(var7)(var3);
                var3 = var3.VANITY_URL_POWERUP_SKU_ID;
                if(!(var3 !== var4)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var5.bind(var7)(var3);
                var3 = var3.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID;
                if(!(var3 !== var4)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var5.bind(var7)(var3);
                var3 = var3.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID;
                if(!(var3 !== var4)) { _fun0004_ip = 17; continue _fun0004 }
case 19:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 7;
                var3 = var9[var3];
                var3 = var4.bind(var7)(var3);
                var6 = var3.intl;
                var5 = var6.formatToPlainString;
                var4 = _closure1_slot1;
                var3 = 8;
                var3 = var9[var3];
                var3 = var4.bind(var7)(var3);
                var4 = var3["4jSvr1"];
                var3 = {};
                var9 = _closure2_slot1;
                var9 = var9.title;
                var3['perk'] = var9;
                var10 = _closure2_slot2;
                var9 = null;
                var10 = var9 != var10;
                var9 = 0;
                if(!var10) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var9 = _closure2_slot2;
case 20:
                var3['memberCount'] = var9;
                var3 = var5.bind(var6)(var4, var3);
                _fun0004_ip = 22; continue _fun0004;
case 17:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 7;
                var4 = var10[var4];
                var4 = var5.bind(var7)(var4);
                var6 = var4.intl;
                var5 = var6.string;
                var9 = _closure1_slot1;
                var4 = 8;
                var4 = var10[var4];
                var4 = var9.bind(var7)(var4);
                var4 = var4.Vf2ZcR;
                var3 = var5.bind(var6)(var4);
                _fun0004_ip = 22; continue _fun0004;
case 15:
                var4 = _closure2_slot4;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 7;
                var5 = var11[var5];
                var5 = var6.bind(var7)(var5);
                var9 = var5.intl;
                var6 = var9.string;
                var10 = _closure1_slot1;
                var5 = 8;
                var5 = var11[var5];
                var5 = var10.bind(var7)(var5);
                if(var4) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var4 = var5.Du91Rb;
                var4 = var6.bind(var9)(var4);
                _fun0004_ip = 25; continue _fun0004;
case 23:
                var5 = var5.hN75yb;
                var4 = var6.bind(var9)(var5);
case 25:
                var3 = var4;
                _fun0004_ip = 22; continue _fun0004;
case 13:
                var5 = _closure2_slot5;
                var4 = 0;
                if(!(!(var5 > var4))) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 7;
                var4 = var10[var4];
                var4 = var5.bind(var7)(var4);
                var9 = var4.intl;
                var6 = var9.formatToPlainString;
                var5 = _closure1_slot1;
                var4 = 8;
                var4 = var10[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.cavtEo;
                var4 = {};
                var10 = _closure2_slot1;
                var10 = var10.title;
                var4['perk'] = var10;
                var4 = var6.bind(var9)(var5, var4);
                _fun0004_ip = 28; continue _fun0004;
case 26:
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 7;
                var5 = var11[var5];
                var5 = var6.bind(var7)(var5);
                var10 = var5.intl;
                var9 = var10.formatToPlainString;
                var6 = _closure1_slot1;
                var5 = 8;
                var5 = var11[var5];
                var5 = var6.bind(var7)(var5);
                var6 = var5["4jSvr1"];
                var5 = {};
                var11 = _closure2_slot1;
                var11 = var11.title;
                var5['perk'] = var11;
                var11 = _closure2_slot5;
                var5['memberCount'] = var11;
                var4 = var9.bind(var10)(var6, var5);
case 28:
                var3 = var4;
case 22:
                var4 = _closure2_slot4;
                if(!var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var2 = _closure2_slot1;
                var5 = var2.skuId;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var6.bind(var7)(var2);
                var2 = var2.GUILD_POWERUP_LEVEL_3_SKU_ID;
                var4 = var5 === var2;
case 29:
                var2 = null;
                if(!var4) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 7;
                var4 = var8[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var6 = _closure1_slot1;
                var1 = 8;
                var1 = var8[var1];
                var1 = var6.bind(var7)(var1);
                var1 = var1.M4XL5n;
                var2 = var4.bind(var5)(var1);
case 31:
                var1 = {};
                var1['warningText'] = var3;
                var1['vanityUrlWarning'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();