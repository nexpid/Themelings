// app/modules/stickers/StickersHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var8 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var11;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var7 = function useFavoriteStickerIds() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.useFrecencySettings;
            var3 = var3.bind(var4)();
            var4 = var3.favoriteStickers;
            var3 = null;
            var5 = var3 == var4;
            if(var5) { _fun0004_ip = 28; continue _fun0004 }
case 36:
            var1 = var4.stickerIds;
case 28:
            if(!(var3 == var1)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var1 = _closure1_slot14;
case 37:
            return var1;
        }
    };
    var _closure1_slot18 = var7;
    var6 = function useFavoriteStickers() {
        var3 = _closure1_slot18;
        var5 = undefined;
        var6 = var3.bind(var5)();
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 10;
        var3 = var7[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot11;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure2_slot0;
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure1_slot11;
                var2 = var3.getStickerById;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var1 = null;
                    var1 = var1 != var5;
                    if(!var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 13;
                    var2 = var2[var7];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.isGuildSticker;
                    var2 = var2.bind(var4)(var5);
                    var2 = !var2;
                    if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.isAvailableGuildSticker;
                    var2 = var3.bind(var4)(var5);
case 41:
                    var1 = var2;
case 39:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot19 = var6;
    var5 = function useLatestFrecentStickerIds() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var7 = undefined;
            var3 = var3.bind(var7)(var2);
            var2 = var3.useFrecencySettings;
            var5 = var2.bind(var3)();
            var1 = _closure1_slot14;
            var6 = null;
            var3 = var6 == var5;
            var2 = undefined;
            if(var3) { _fun0006_ip = 43; continue _fun0006 }
case 36:
            var3 = var5.stickerFrecency;
            var4 = var6 == var3;
            var2 = undefined;
            if(var4) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var2 = var3.stickers;
case 43:
            if(!(var6 != var2)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var8 = var6 == var5;
            var2 = undefined;
            if(var8) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var5 = var5.stickerFrecency;
            var6 = var6 == var5;
            var2 = undefined;
            if(var6) { _fun0006_ip = 47; continue _fun0006 }
case 49:
            var2 = var5.stickers;
case 47:
            var1 = var3.bind(var4)(var2);
case 45:
            return var1;
        }
    };
    var _closure1_slot20 = var5;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var4);
    var1 = 0;
    var4 = var11[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var11[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var11[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var11[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var11[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var11[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var11[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var11[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var11[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot12 = var4;
    var8 = function useFetchStickerPacks() {
        var4 = _closure1_slot5;
        var3 = var4.useEffect;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchStickerPacks;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot13 = var8;
    var4 = new Array(0);
    var _closure1_slot14 = var4;
    var4 = function useStickerPackCategories(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot19;
        var4 = undefined;
        var9 = var3.bind(var4)();
        var _closure2_slot1 = var9;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 10;
        var8 = var7[var3];
        var13 = var6.bind(var4)(var8);
        var12 = var13.useStateFromStoresObject;
        var8 = _closure1_slot11;
        var11 = new Array(2);
        var11[0] = var8;
        var8 = _closure1_slot10;
        var11[1] = var8;
        var10 = function() {
            var1 = {};
            var4 = _closure1_slot11;
            var3 = var4.getPremiumPacks;
            var3 = var3.bind(var4)();
            var1['packs'] = var3;
            var2 = _closure1_slot10;
            var2 = var2.stickerFrecencyWithoutFetchingLatest;
            var2 = var2.frequently;
            var1['frequentlyUsedStickers'] = var2;
            return var1;
        };
        var8 = new Array(0);
        var8 = var12.bind(var13)(var11, var10, var8);
        var10 = var8.packs;
        var _closure2_slot2 = var10;
        var8 = var8.frequentlyUsedStickers;
        var _closure2_slot3 = var8;
        var3 = var7[var3];
        var11 = var6.bind(var4)(var3);
        var7 = var11.useStateFromStores;
        var3 = _closure1_slot9;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var2 = _closure1_slot9;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var7.bind(var11)(var6, var3);
        var _closure2_slot4 = var6;
        var3 = function(arg1) {
            var5 = arg1;
            var _closure3_slot0 = var5;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 10;
            var7 = var9[var3];
            var4 = undefined;
            var11 = var6.bind(var4)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getAllGuildStickers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var10.bind(var11)(var8, var7);
            var _closure3_slot1 = var8;
            var7 = var9[var3];
            var13 = var6.bind(var4)(var7);
            var12 = var13.useStateFromStoresArray;
            var7 = _closure1_slot8;
            var11 = new Array(2);
            var11[0] = var7;
            var7 = _closure1_slot6;
            var11[1] = var7;
            var10 = function() {
                var3 = _closure1_slot8;
                var1 = var3.getFlattenedGuildIds;
                var4 = var1.bind(var3)();
                var1 = new Array(0);
                var _closure4_slot0 = var1;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure1_slot6;
                        var2 = var3.getGuild;
                        var1 = arg1;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var3)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                        var2 = _closure4_slot0;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
case 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = new Array(0);
            var7 = var12.bind(var13)(var11, var10, var7);
            var _closure3_slot2 = var7;
            var3 = var9[var3];
            var9 = var6.bind(var4)(var3);
            var6 = var9.useStateFromStores;
            var3 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var9)(var4, var3);
            var _closure3_slot3 = var6;
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot16;
                    var2 = _closure3_slot2;
                    var4 = undefined;
                    var9 = var3.bind(var4)(var2);
                    var7 = var9.bind(var4)();
                    var2 = var7.done;
                    var14 = 15;
                    var8 = 0;
                    var3 = null;
                    if(var2) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var2 = var7.value;
                    var12 = var2.name;
                    var13 = var2.id;
                    var10 = _closure3_slot1;
                    var2 = var10.get;
                    var11 = var2.bind(var10)(var13);
                    var2 = var3 != var11;
                    if(!var2) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var10 = var11.length;
                    var2 = var8 !== var10;
case 54:
                    if(!var2) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var10 = var1.push;
                    var2 = {};
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var15 = var15[var14];
                    var15 = var16.bind(var4)(var15);
                    var15 = var15.StickerCategoryTypes;
                    var15 = var15.GUILD;
                    var2['type'] = var15;
                    var2['id'] = var13;
                    var2['name'] = var12;
                    var2['stickers'] = var11;
                    var2 = var10.bind(var1)(var2);
case 56:
                    var10 = var9.bind(var4)();
                    var2 = var10.done;
                    var7 = var10;
                    if(!var2) { _fun0008_ip = 53; continue _fun0008 }
case 52:
                    var2 = _closure3_slot0;
                    var7 = var3 == var2;
                    var2 = undefined;
                    if(var7) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var9 = _closure3_slot0;
                    var7 = var9.getGuildId;
                    var2 = var7.bind(var9)();
case 58:
                    if(!(var3 != var2)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var9 = _closure1_slot6;
                    var7 = var9.getGuild;
                    var10 = _closure3_slot0;
                    var2 = var10.getGuildId;
                    var2 = var2.bind(var10)();
                    var11 = var7.bind(var9)(var2);
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 14;
                    var2 = var9[var2];
                    var7 = var7.bind(var4)(var2);
                    var2 = var7.getManageResourcePermissions;
                    var2 = var2.bind(var7)(var11);
                    var7 = var2.canManageAllExpressions;
                    var9 = var1.findIndex;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var3 = _closure3_slot0;
                        var1 = var3.getGuildId;
                        var1 = var1.bind(var3)();
                        var1 = var2 === var1;
                        return var1;
                    };
                    var10 = var9.bind(var1)(var2);
                    var9 = 1;
                    if(!(!(var10 >= var9))) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var2 = -1;
                    var2 = var2 === var10;
                    if(!var2) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                    var2 = var3 != var11;
case 64:
                    if(!var2) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var2 = var7;
case 66:
                    if(!var2) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                    var7 = var1.unshift;
                    var2 = {};
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var14];
                    var12 = var13.bind(var4)(var12);
                    var12 = var12.StickerCategoryTypes;
                    var12 = var12.EMPTY_GUILD_UPSELL;
                    var2['type'] = var12;
                    var12 = var11.id;
                    var2['id'] = var12;
                    var11 = var11.name;
                    var2['name'] = var11;
                    var11 = new Array(0);
                    var2['stickers'] = var11;
                    var2 = var7.bind(var1)(var2);
                    _fun0008_ip = 68; continue _fun0008;
case 62:
                    var7 = var1.unshift;
                    var2 = var1.splice;
                    var2 = var2.bind(var1)(var10, var9);
                    var2 = var2[var8];
                    var2 = var7.bind(var1)(var2);
case 68:
                    var2 = _closure3_slot3;
                    if(!(var3 != var2)) { _fun0008_ip = 60; continue _fun0008 }
case 70:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 19;
                    var2 = var7[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.can;
                    var2 = {};
                    var6 = _closure1_slot12;
                    var6 = var6.USE_EXTERNAL_EMOJIS;
                    var2['permission'] = var6;
                    var6 = _closure3_slot3;
                    var2['user'] = var6;
                    var5 = _closure3_slot0;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
case 60:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var7 = var3.bind(var4)(var5);
        var _closure2_slot5 = var7;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(6);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var2[5] = var5;
        var1 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = _closure2_slot2;
                var3 = var4.map;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 13;
                var1 = var10[var1];
                var5 = undefined;
                var1 = var9.bind(var5)(var1);
                var1 = var1.createStickerPackCategory;
                var3 = var3.bind(var4)(var1);
                var4 = {};
                var7 = 15;
                var1 = var10[var7];
                var1 = var9.bind(var5)(var1);
                var1 = var1.StickerCategoryTypes;
                var1 = var1.FAVORITE;
                var4['type'] = var1;
                var1 = var10[var7];
                var1 = var9.bind(var5)(var1);
                var1 = var1.StickerCategoryTypes;
                var1 = var1.FAVORITE;
                var4['id'] = var1;
                var6 = 17;
                var1 = var10[var6];
                var1 = var9.bind(var5)(var1);
                var11 = var1.intl;
                var8 = var11.string;
                var1 = var10[var6];
                var1 = var9.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.y3LQCA;
                var1 = var8.bind(var11)(var1);
                var4['name'] = var1;
                var1 = _closure2_slot1;
                var4['stickers'] = var1;
                var1 = new Array(2);
                var1[0] = var4;
                var4 = {};
                var8 = var10[var7];
                var8 = var9.bind(var5)(var8);
                var8 = var8.StickerCategoryTypes;
                var8 = var8.RECENT;
                var4['type'] = var8;
                var7 = var10[var7];
                var7 = var9.bind(var5)(var7);
                var7 = var7.StickerCategoryTypes;
                var7 = var7.RECENT;
                var4['id'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var5)(var6);
                var6 = var6.t;
                var6 = var6.6hjpXV;
                var6 = var7.bind(var8)(var6);
                var4['name'] = var6;
                var7 = _closure2_slot3;
                var6 = null;
                var7 = var6 == var7;
                if(var7) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                var9 = _closure2_slot3;
                var8 = var9.filter;
                var7 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var11 = arg1;
                        var _closure4_slot0 = var11;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var4 = 13;
                        var1 = var1[var4];
                        var6 = undefined;
                        var2 = var2.bind(var6)(var1);
                        var1 = var2.isGuildSticker;
                        var1 = var1.bind(var2)(var11);
                        if(var1) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var4];
                        var2 = var2.bind(var6)(var1);
                        var1 = var2.isStandardSticker;
                        var2 = var1.bind(var2)(var11);
                        var1 = undefined;
                        if(!var2) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                        var7 = _closure2_slot2;
                        var4 = var7.some;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var1.pack_id;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var1 = var4.bind(var7)(var2);
case 75:
                        _fun0010_ip = 77; continue _fun0010;
case 73:
                        var7 = _closure1_slot11;
                        var4 = var7.getStickersByGuildId;
                        var2 = var11.guild_id;
                        var8 = var4.bind(var7)(var2);
                        var2 = null;
                        var7 = var2 == var8;
                        var4 = undefined;
                        if(var7) { _fun0010_ip = 78; continue _fun0010 }
case 79:
                        var7 = var8.some;
                        var5 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var1.id;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var4 = var7.bind(var8)(var5);
case 78:
                        var2 = var2 != var4;
                        if(!var2) { _fun0010_ip = 80; continue _fun0010 }
case 81:
                        var2 = var4;
case 80:
                        if(!var2) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 18;
                        var4 = var7[var3];
                        var10 = var5.bind(var6)(var4);
                        var9 = var10.getStickerSendability;
                        var8 = _closure2_slot4;
                        var4 = _closure2_slot0;
                        var4 = var9.bind(var10)(var11, var8, var4);
                        var3 = var7[var3];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.StickerSendability;
                        var3 = var3.NONSENDABLE;
                        var2 = var4 !== var3;
case 82:
                        var1 = var2;
case 77:
                        return var1;
                    }
                };
                var5 = var8.bind(var9)(var7);
case 71:
                if(!(var6 == var5)) { _fun0009_ip = 69; continue _fun0009 }
case 84:
                var5 = new Array(0);
case 69:
                var4['stickers'] = var5;
                var1[1] = var4;
                var13 = _closure2_slot5;
                var12 = 2;
                var14 = var1;
                var12 = arraySpread(var14, var13, var12);
                var14 = var1;
                var13 = var3;
                var2 = arraySpread(var14, var13, var12);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var4;
    var9 = 21;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/stickers/StickersHooks.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot13;
        var1 = undefined;
        var4 = var4.bind(var1)();
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 10;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var6 = var8.useStateFromStores;
        var4 = _closure1_slot11;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var1 = _closure1_slot11;
            var1 = var1.hasLoadedStickerPacks;
            return var1;
        };
        var6 = var6.bind(var8)(var5, var4);
        var _closure2_slot1 = var6;
        var5 = _closure1_slot5;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure2_slot1;
                if(!var2) { _fun0011_ip = 85; continue _fun0011 }
case 86:
                var5 = _closure1_slot11;
                var4 = var5.getStickerPack;
                var3 = _closure2_slot0;
                var4 = var4.bind(var5)(var3);
                var3 = null;
                var2 = var3 == var4;
case 85:
                if(!var2) { _fun0011_ip = 76; continue _fun0011 }
case 87:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchStickerPack;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
case 76:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useFetchStickerPack'] = var9;
    var9 = function(arg1) {
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 12;
        var1 = var5[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var4 = var1.AnimateStickers;
        var1 = var4.useSetting;
        var4 = var1.bind(var4)();
        var1 = 13;
        var1 = var5[var1];
        var3 = var3.bind(var2)(var1);
        var2 = var3.shouldAnimateSticker;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var3['useShouldAnimateSticker'] = var9;
    var9 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var11 = var2.collapsedStickersCategories;
            var _closure2_slot0 = var11;
            var10 = var2.filteredStickers;
            var _closure2_slot1 = var10;
            var9 = var2.listPaddingRight;
            var3 = undefined;
            if(!(var9 === var3)) { _fun0012_ip = 88; continue _fun0012 }
case 50:
            var9 = 0;
case 88:
            var _closure2_slot2 = var9;
            var8 = var2.listWidth;
            if(!(var8 === var3)) { _fun0012_ip = 89; continue _fun0012 }
case 7:
            var8 = 0;
case 89:
            var _closure2_slot3 = var8;
            var7 = var2.stickerNodeMargin;
            if(!(var7 === var3)) { _fun0012_ip = 76; continue _fun0012 }
case 90:
            var7 = 0;
case 76:
            var _closure2_slot4 = var7;
            var6 = var2.stickerNodeWidth;
            var _closure2_slot5 = var6;
            var5 = var2.stickersCategories;
            var _closure2_slot6 = var5;
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var2 = new Array(7);
            var2[0] = var11;
            var2[1] = var10;
            var2[2] = var9;
            var2[3] = var8;
            var2[4] = var7;
            var2[5] = var6;
            var2[6] = var5;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var5 = global;
                    var7 = var5.Math;
                    var4 = var7.floor;
                    var1 = _closure2_slot3;
                    var9 = _closure2_slot2;
                    var2 = var1 - var9;
                    var8 = _closure2_slot4;
                    var10 = var2 + var8;
                    var2 = _closure2_slot5;
                    var3 = var2 + var8;
                    var3 = var10 / var3;
                    var10 = var4.bind(var7)(var3);
                    var _closure3_slot0 = var10;
                    var4 = var5.Math;
                    var3 = var4.floor;
                    var7 = var5.Math;
                    var5 = var7.max;
                    var9 = var1 - var9;
                    var2 = var2 * var10;
                    var9 = var9 - var2;
                    var2 = 1;
                    var2 = var10 - var2;
                    var2 = var9 / var2;
                    var2 = var5.bind(var7)(var8, var2);
                    var3 = var3.bind(var4)(var2);
                    var2 = new Array(0);
                    var _closure3_slot1 = var2;
                    var5 = new Array(0);
                    var _closure3_slot2 = var5;
                    var4 = new Array(0);
                    var _closure3_slot3 = var4;
                    var15 = 0;
                    var _closure3_slot4 = var15;
                    var _closure3_slot5 = var15;
                    var _closure3_slot6 = var15;
                    if(!(var15 !== var1)) { _fun0013_ip = 91; continue _fun0013 }
case 92:
                    var14 = function addGridSection(arg1, arg2) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var14 = arg1;
                            var13 = arguments[2];
                            var1 = arg2;
                            var _closure4_slot0 = var1;
                            var1 = undefined;
                            if(!(var13 === var1)) { _fun0014_ip = 31; continue _fun0014 }
case 93:
                            var13 = false;
case 31:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 13;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.isGuildSticker;
                            var11 = 0;
                            var2 = var14[var11];
                            var2 = var3.bind(var4)(var2);
                            var5 = undefined;
                            if(!var2) { _fun0014_ip = 94; continue _fun0014 }
case 95:
                            var4 = _closure1_slot6;
                            var3 = var4.getGuild;
                            var2 = var14[var11];
                            var2 = var2.guild_id;
                            var5 = var3.bind(var4)(var2);
case 94:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 14;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getManageResourcePermissions;
                            var2 = var2.bind(var3)(var5);
                            var4 = var2.canCreateExpressions;
                            var3 = _closure1_slot7;
                            var2 = var3.getGuildId;
                            var6 = var2.bind(var3)();
                            var7 = _closure2_slot6;
                            var3 = var7.findIndex;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 15;
                                var3 = var3[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                var1 = var1.StickerCategoryTypes;
                                var1 = var1.FAVORITE;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var10 = var3.bind(var7)(var2);
                            var3 = var7.findIndex;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 15;
                                var3 = var3[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                var1 = var1.StickerCategoryTypes;
                                var1 = var1.RECENT;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var9 = var3.bind(var7)(var2);
                            var2 = var14.length;
                            var8 = null;
                            var3 = var8 != var5;
                            var7 = var5;
                            if(!var3) { _fun0014_ip = 96; continue _fun0014 }
case 97:
                            var5 = var7.id;
                            var3 = var6 === var5;
case 96:
                            if(!var3) { _fun0014_ip = 98; continue _fun0014 }
case 99:
                            var3 = var4;
case 98:
                            if(!var3) { _fun0014_ip = 100; continue _fun0014 }
case 101:
                            var5 = var14.length;
                            var6 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var4 = 16;
                            var4 = var16[var4];
                            var16 = var6.bind(var1)(var4);
                            var6 = var16.getTotalStickerCountForTier;
                            var4 = var7.premiumTier;
                            var4 = var6.bind(var16)(var4);
                            var3 = var5 < var4;
case 100:
                            var6 = var2;
                            if(!var3) { _fun0014_ip = 102; continue _fun0014 }
case 103:
                            var6 = var2 + 1;
case 102:
                            var2 = global;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var2 = _closure3_slot0;
                            var2 = var6 / var2;
                            var5 = var4.bind(var5)(var2);
                            var16 = _closure3_slot2;
                            var4 = _closure3_slot5;
                            var2 = 0;
                            if(var13) { _fun0014_ip = 104; continue _fun0014 }
case 105:
                            var2 = var5;
case 104:
                            var16[var4] = var2;
                            var16 = var11 < var5;
                            var4 = 15;
                            var2 = 17;
                            var11 = 0;
                            if(!var16) { _fun0014_ip = 106; continue _fun0014 }
case 107:
                            var16 = _closure3_slot0;
                            var18 = var11 * var16;
                            var17 = var18 + var16;
                            var16 = var14.slice;
                            var18 = var16.bind(var14)(var18, var17);
                            var17 = var18.map;
                            var16 = function(arg1, arg2) {
                                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                                    var3 = arg1;
                                    var1 = {};
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 15;
                                    var2 = var6[var2];
                                    var4 = undefined;
                                    var2 = var5.bind(var4)(var2);
                                    var2 = var2.StickerGridItemTypes;
                                    var2 = var2.STICKER;
                                    var1['type'] = var2;
                                    var1['sticker'] = var3;
                                    var2 = 13;
                                    var2 = var6[var2];
                                    var4 = var5.bind(var4)(var2);
                                    var2 = var4.isStandardSticker;
                                    var4 = var2.bind(var4)(var3);
                                    var2 = 'TODO - fix';
                                    if(!var4) { _fun0015_ip = 54; continue _fun0015 }
case 108:
                                    var2 = var3.pack_id;
case 54:
                                    var1['packId'] = var2;
                                    var3 = _closure3_slot5;
                                    var1['gridSectionIndex'] = var3;
                                    var3 = _closure3_slot4;
                                    var1['rowIndex'] = var3;
                                    var3 = arg2;
                                    var1['columnIndex'] = var3;
                                    var2 = _closure3_slot6;
                                    var1['visibleRowIndex'] = var2;
                                    var2 = _closure4_slot0;
                                    var1['category'] = var2;
                                    return var1;
                                }
                            };
                            var16 = var17.bind(var18)(var16);
                            var17 = _closure3_slot5;
                            var17 = var17 > var9;
                            if(!var17) { _fun0014_ip = 109; continue _fun0014 }
case 110:
                            var18 = _closure3_slot5;
                            var17 = var18 > var10;
case 109:
                            if(!var17) { _fun0014_ip = 111; continue _fun0014 }
case 112:
                            var17 = var8 != var7;
case 111:
                            if(!var17) { _fun0014_ip = 113; continue _fun0014 }
case 114:
                            var18 = var14.length;
                            var17 = var6 > var18;
case 113:
                            if(!var17) { _fun0014_ip = 115; continue _fun0014 }
case 70:
                            var18 = var16.push;
                            var17 = {};
                            var22 = _closure1_slot0;
                            var19 = _closure1_slot2;
                            var20 = var19[var4];
                            var20 = var22.bind(var1)(var20);
                            var20 = var20.StickerGridItemTypes;
                            var20 = var20.CREATE_STICKER;
                            var17['type'] = var20;
                            var20 = var7.id;
                            var17['guild_id'] = var20;
                            var20 = var19[var2];
                            var20 = var22.bind(var1)(var20);
                            var21 = var20.intl;
                            var20 = var21.string;
                            var19 = var19[var2];
                            var19 = var22.bind(var1)(var19);
                            var19 = var19.t;
                            var19 = var19.UwF+Cw;
                            var19 = var20.bind(var21)(var19);
                            var17['name'] = var19;
                            var19 = _closure3_slot5;
                            var17['gridSectionIndex'] = var19;
                            var19 = _closure3_slot4;
                            var17['rowIndex'] = var19;
                            var19 = var16.length;
                            var17['columnIndex'] = var19;
                            var19 = _closure3_slot6;
                            var17['visibleRowIndex'] = var19;
                            var17 = var18.bind(var16)(var17);
case 115:
                            if(var13) { _fun0014_ip = 116; continue _fun0014 }
case 117:
                            var17 = _closure3_slot6;
                            var17 = var17 + 1;
                            _closure3_slot6 = var17;
                            var18 = _closure3_slot3;
                            var17 = var18.push;
                            var17 = var17.bind(var18)(var16);
                            var18 = _closure3_slot1;
                            var17 = var18.push;
                            var16 = var16.length;
                            var16 = var17.bind(var18)(var16);
case 116:
                            var16 = _closure3_slot4;
                            var16 = var16 + 1;
                            _closure3_slot4 = var16;
                            var11 = var11 + 1;
                            if(var11 < var5) { _fun0014_ip = 107; continue _fun0014 }
case 106:
                            var2 = _closure3_slot5;
                            var2 = var2 + 1;
                            _closure3_slot5 = var2;
                            return var1;
                        }
                    };
                    var1 = _closure2_slot1;
                    var13 = null;
                    if(!(var13 != var1)) { _fun0013_ip = 118; continue _fun0013 }
case 119:
                    var1 = _closure2_slot1;
                    var1 = var1.sendable;
                    var1 = var1.length;
                    if(!(var1 > var15)) { _fun0013_ip = 120; continue _fun0013 }
case 121:
                    var1 = _closure2_slot1;
                    var8 = var1.sendable;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 15;
                    var1 = var7[var1];
                    var7 = undefined;
                    var1 = var9.bind(var7)(var1);
                    var1 = var1.StickerCategoryTypes;
                    var1 = var1.SEARCH_RESULTS;
                    var1 = var14.bind(var7)(var8, var1);
case 120:
                    var1 = _closure2_slot1;
                    var1 = var1.sendableWithPremium;
                    var1 = var1.length;
                    if(!(var1 > var15)) { _fun0013_ip = 91; continue _fun0013 }
case 122:
                    var1 = _closure2_slot1;
                    var8 = var1.sendableWithPremium;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 15;
                    var1 = var7[var1];
                    var7 = undefined;
                    var1 = var9.bind(var7)(var1);
                    var1 = var1.StickerCategoryTypes;
                    var1 = var1.SEARCH_RESULTS;
                    var1 = var14.bind(var7)(var8, var1);
                    _fun0013_ip = 91; continue _fun0013;
case 118:
                    var7 = _closure1_slot16;
                    var1 = _closure2_slot6;
                    var11 = undefined;
                    var10 = var7.bind(var11)(var1);
                    var7 = var10.bind(var11)();
                    var1 = var7.done;
                    var9 = true;
                    var8 = 15;
                    if(var1) { _fun0013_ip = 91; continue _fun0013 }
case 123:
                    var19 = var7.value;
                    var1 = var19.stickers;
                    var1 = var1.length;
                    if(!(!(var1 > var15))) { _fun0013_ip = 124; continue _fun0013 }
case 62:
                    var17 = var19.type;
                    var18 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var18.bind(var11)(var1);
                    var1 = var1.StickerCategoryTypes;
                    var1 = var1.EMPTY_GUILD_UPSELL;
                    if(!(var17 === var1)) { _fun0013_ip = 125; continue _fun0013 }
case 126:
                    var1 = _closure3_slot5;
                    var5[var1] = var15;
                    var1 = _closure3_slot5;
                    var1 = var1 + 1;
                    _closure3_slot5 = var1;
                    _fun0013_ip = 125; continue _fun0013;
case 124:
                    var1 = _closure3_slot4;
                    var1 = var1 + 1;
                    _closure3_slot4 = var1;
                    var18 = var19.stickers;
                    var17 = var19.type;
                    var1 = _closure2_slot0;
                    var20 = var13 == var1;
                    var1 = undefined;
                    if(var20) { _fun0013_ip = 127; continue _fun0013 }
case 128:
                    var21 = _closure2_slot0;
                    var20 = var21.has;
                    var19 = var19.id;
                    var1 = var20.bind(var21)(var19);
case 127:
                    var1 = var9 === var1;
                    var1 = var14.bind(var11)(var18, var17, var1);
case 125:
                    var17 = var10.bind(var11)();
                    var1 = var17.done;
                    var7 = var17;
                    if(!var1) { _fun0013_ip = 123; continue _fun0013 }
case 91:
                    var1 = {};
                    var6 = _closure3_slot4;
                    var1['rowCount'] = var6;
                    var1['rowCountBySection'] = var5;
                    var1['stickersGrid'] = var4;
                    var1['gutterWidth'] = var3;
                    var1['columnCounts'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useStickersGrid'] = var9;
    var9 = function(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 10;
        var7 = var8[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var7);
        var10 = var11.useStateFromStores;
        var7 = _closure1_slot9;
        var9 = new Array(1);
        var9[0] = var7;
        var7 = function() {
            var2 = _closure1_slot9;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var10.bind(var11)(var9, var7);
        var _closure2_slot1 = var7;
        var3 = var8[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot11;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = _closure1_slot16;
                var3 = _closure1_slot11;
                var1 = var3.getAllStickersIterator;
                var1 = var1.bind(var3)();
                var6 = undefined;
                var5 = var2.bind(var6)(var1);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var4 = 18;
                if(var1) { _fun0016_ip = 129; continue _fun0016 }
case 2:
                var11 = var2.value;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var10 = var8.bind(var6)(var1);
                var9 = var10.isSendableSticker;
                var8 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var9.bind(var10)(var11, var8, var1);
                if(var1) { _fun0016_ip = 130; continue _fun0016 }
case 57:
                var8 = var5.bind(var6)();
                var1 = var8.done;
                var2 = var8;
                if(var1) { _fun0016_ip = 129; continue _fun0016 }
case 131:
                _fun0016_ip = 2; continue _fun0016;
case 130:
                var1 = true;
                return var1;
case 129:
                var1 = false;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useHasSendableSticker'] = var9;
    var3['useFetchStickerPacks'] = var8;
    var3['useFavoriteStickerIds'] = var7;
    var3['useFavoriteStickers'] = var6;
    var3['useLatestFrecentStickerIds'] = var5;
    var5 = function useLatestFrecentStickers() {
        var3 = _closure1_slot20;
        var5 = undefined;
        var6 = var3.bind(var5)();
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 10;
        var3 = var7[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot11;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure2_slot0;
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure1_slot11;
                var2 = var3.getStickerById;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = undefined;
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useLatestFrecentStickers'] = var5;
    var3['useStickerPackCategories'] = var4;
    var4 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = arg1;
            var9 = arguments[1];
            var _closure2_slot0 = var4;
            var11 = undefined;
            if(!(var9 === var11)) { _fun0017_ip = 29; continue _fun0017 }
case 132:
            var9 = false;
case 29:
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var11;
            var _closure2_slot3 = var11;
            var _closure2_slot4 = var11;
            var _closure2_slot5 = var11;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var1 = var2[var1];
            var10 = var7.bind(var11)(var1);
            var8 = var10.useStateFromStores;
            var1 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getStickerById;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var8.bind(var10)(var3, var1);
            var16 = _closure1_slot5;
            var8 = var16.useState;
            var3 = true;
            var3 = var8.bind(var16)(var3);
            var14 = _closure1_slot4;
            var13 = 2;
            var10 = var14.bind(var11)(var3, var13);
            var3 = 0;
            var8 = var10[var3];
            var12 = 1;
            var10 = var10[var12];
            _closure2_slot2 = var10;
            var15 = var16.useState;
            var10 = false;
            var10 = var15.bind(var16)(var10);
            var10 = var14.bind(var11)(var10, var13);
            var3 = var10[var3];
            var10 = var10[var12];
            _closure2_slot3 = var10;
            var12 = 13;
            var2 = var2[var12];
            var7 = var7.bind(var11)(var2);
            var2 = var7.isGuildSticker;
            var2 = var2.bind(var7)(var4);
            if(var2) { _fun0017_ip = 133; continue _fun0017 }
case 20:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var10 = var10.bind(var11)(var7);
            var7 = var10.isStandardSticker;
            var2 = var7.bind(var10)(var4);
case 133:
            var7 = {};
            var7['hasFetched'] = var3;
            var7['isReturnable'] = var2;
            var7['renderableSticker'] = var4;
            var7['shouldFetch'] = var8;
            var7['stickersStoreDefinition'] = var1;
            _closure2_slot4 = var7;
            var8 = _closure1_slot5;
            var6 = var8.useRef;
            var6 = var6.bind(var8)(var7);
            _closure2_slot5 = var6;
            var7 = var8.useEffect;
            var6 = function() {
                var2 = _closure2_slot5;
                var1 = _closure2_slot4;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var9;
            var5 = function() {
                var3 = _closure1_slot3;
                var1 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0018_ip = 134; continue _fun0018 }
case 86:
                            var2 = undefined;
                            var4 = undefined;
                            var5 = _closure2_slot5;
                            var8 = var5.current;
                            var5 = var8.hasFetched;
                            var7 = var8.isReturnable;
                            var4 = var8.renderableSticker;
                            var6 = var8.shouldFetch;
                            var8 = var8.stickersStoreDefinition;
                            var9 = _closure2_slot1;
                            if(!var9) { _fun0018_ip = 135; continue _fun0018 }
case 89:
                            if(var7) { _fun0018_ip = 135; continue _fun0018 }
case 136:
                            var7 = null;
                            if(!(var7 == var8)) { _fun0018_ip = 135; continue _fun0018 }
case 137:
                            if(!var6) { _fun0018_ip = 135; continue _fun0018 }
case 46:
                            if(var5) { _fun0018_ip = 135; continue _fun0018 }
case 138:
                            var6 = _closure2_slot2;
                            var5 = false;
                            var5 = var6.bind(var2)(var5);
case 54: // try_start_0
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 11;
                            var5 = var7[var5];
                            var6 = var6.bind(var2)(var5);
                            var5 = var6.fetchSticker;
                            var4 = var4.id;
                            var4 = var5.bind(var6)(var4);
                            SaveGenerator(address=132);
case 139:
                            return var4;
case 140:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(var5) { _fun0018_ip = 141; continue _fun0018 }
case 142: // try_end0
                            _fun0018_ip = 143; continue _fun0018;
case 141:
                            return var4;
case 144: // catch_target0
                            CatchBlockStart(arg_register=3);
case 143:
                            var4 = _closure2_slot3;
                            var3 = true;
                            var3 = var4.bind(var2)(var3);
case 135:
                            return var2;
case 134:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = var7.bind(var8)(var5, var6);
            if(var2) { _fun0017_ip = 145; continue _fun0017 }
case 105:
            var2 = null;
            var5 = var2 != var1;
            if(!var5) { _fun0017_ip = 26; continue _fun0017 }
case 146:
            var2 = var1;
case 26:
            var1 = new Array(2);
            var1[0] = var2;
            var1[1] = var3;
            _fun0017_ip = 147; continue _fun0017;
case 145:
            var2 = new Array(2);
            var2[0] = var4;
            var2[1] = var3;
            var1 = var2;
case 147:
            return var1;
        }
    };
    var3['useStickerForRenderableSticker'] = var4;
    var2 = function(arg1) {
        var5 = _closure1_slot15;
        var4 = undefined;
        var3 = arg1;
        var5 = var5.bind(var4)(var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure2_slot0;
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.StickerCategoryTypes;
                    var1 = var1.EMPTY_GUILD_UPSELL;
                    var1 = var3 === var1;
                    if(var1) { _fun0019_ip = 148; continue _fun0019 }
case 149:
                    var2 = var2.stickers;
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 148:
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useFilteredStickerPackCategories'] = var2;
    return var1;
})();