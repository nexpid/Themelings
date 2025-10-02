// app/modules/soundboard/useSoundGrid.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
    var1 = function createSoundItems(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0004_ip = 36; continue _fun0004 }
case 32:
            var3 = true;
case 36:
            var4 = var5.map;
            var1 = function(arg1, arg2) {
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.SoundboardSoundItemType;
                var2 = var2.SOUND;
                var1['type'] = var2;
                var2 = arg1;
                var1['sound'] = var2;
                var2 = arg2;
                var1['index'] = var2;
                return var1;
            };
            var4 = var4.bind(var5)(var1);
            var1 = var4;
            if(!var3) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var3 = var4.sort;
            var2 = function(arg1, arg2) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.compare;
                var1 = arg1;
                var1 = var1.sound;
                var2 = var1.soundId;
                var1 = arg2;
                var1 = var1.sound;
                var1 = var1.soundId;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 37:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _addSectionForPotentialSoundIds(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var4 = var2.sections;
            var20 = var2.guildIds;
            var13 = var2.allSounds;
            var9 = var2.potentialSoundIdsForSection;
            var _closure2_slot0 = var9;
            var7 = var2.sectionType;
            var6 = var2.sortById;
            var12 = {};
            var _closure2_slot1 = var12;
            var10 = new Array(1);
            var3 = 0;
            var21 = var10;
            var19 = 0;
            var5 = arraySpread(var21, var20, var19);
            var1 = _closure1_slot10;
            var10[var5] = var1;
            var1 = 1;
            var1 = var5 + var1;
            var1 = var10.length;
            var5 = var3 < var1;
            var1 = undefined;
            var11 = null;
            var8 = 0;
            if(!var5) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var16 = var10[var8];
            var17 = function _loop(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var5 = _closure2_slot0;
                    var4 = var5.find;
                    var2 = function(arg1) {
                        var1 = _closure3_slot0;
                        var2 = var1.soundId;
                        var1 = arg1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var2);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var2 = _closure2_slot1;
                    var1 = var3.soundId;
                    var2[var1] = var3;
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = _closure1_slot13;
            var5 = var13.get;
            var5 = var5.bind(var13)(var16);
            if(!(var11 == var5)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var5 = new Array(0);
case 43:
            var16 = var15.bind(var1)(var5);
            var15 = var16.bind(var1)();
            var5 = var15.done;
            if(var5) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var5 = var15.value;
            var5 = var17.bind(var1)(var5);
            var18 = var16.bind(var1)();
            var5 = var18.done;
            var15 = var18;
            if(!var5) { _fun0005_ip = 46; continue _fun0005 }
case 45:
            var8 = var8 + 1;
            var5 = var10.length;
            if(var8 < var5) { _fun0005_ip = 40; continue _fun0005 }
case 39:
            var5 = new Array(0);
            var8 = _closure1_slot13;
            var10 = var8.bind(var1)(var9);
            var9 = var10.bind(var1)();
            var8 = var9.done;
            if(var8) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var8 = var9.value;
            var13 = var12[var8];
            if(!(var11 != var13)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var8 = var5.push;
            var8 = var8.bind(var5)(var13);
case 49:
            var13 = var10.bind(var1)();
            var8 = var13.done;
            var9 = var13;
            if(!var8) { _fun0005_ip = 48; continue _fun0005 }
case 47:
            var2 = _closure1_slot15;
            var5 = var2.bind(var1)(var5, var6);
            var2 = var5.length;
            if(!(var2 > var3)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var3 = var4.push;
            var2 = {};
            var2['key'] = var7;
            var6 = {};
            var6['type'] = var7;
            var2['categoryInfo'] = var6;
            var2['items'] = var5;
            var2 = var3.bind(var4)(var2);
case 51:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function addDefaultSection(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = var3.get;
            var1 = _closure1_slot10;
            var6 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 == var6)) { _fun0007_ip = 33; continue _fun0007 }
case 53:
            var6 = _closure1_slot11;
case 33:
            var3 = var4.push;
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 9;
            var7 = var10[var8];
            var1 = undefined;
            var7 = var9.bind(var1)(var7);
            var7 = var7.SoundboardSoundGridSectionType;
            var7 = var7.DEFAULTS;
            var2['key'] = var7;
            var7 = {};
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.SoundboardSoundGridSectionType;
            var8 = var8.DEFAULTS;
            var7['type'] = var8;
            var2['categoryInfo'] = var7;
            var5 = _closure1_slot15;
            var5 = var5.bind(var1)(var6);
            var2['items'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var2 = function useFrequentlyPlayedSounds() {
        var6 = _closure1_slot4;
        var5 = var6.useEffect;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.FrecencyUserSettingsActionCreators;
            var2 = var3.loadIfNecessary;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3 = new Array(0);
        var3 = var5.bind(var6)(var4, var3);
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = _closure1_slot8;
            var1 = var1.frecentlyPlayedSounds;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot10 = var8;
    var5 = var5.EMPTY_SOUND_LIST;
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot12 = var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/soundboard/useSoundGrid.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useSoundGrid(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var15 = arg1;
            var2 = arguments[1];
            var7 = arguments[2];
            var _closure2_slot0 = var15;
            var16 = undefined;
            if(!(var2 === var16)) { _fun0008_ip = 31; continue _fun0008 }
case 54:
            var2 = {};
case 31:
            var10 = var2.filterOutEmptyCurrentGuild;
            if(!(var10 === var16)) { _fun0008_ip = 55; continue _fun0008 }
case 33:
            var10 = false;
case 55:
            var _closure2_slot1 = var10;
            if(!(var7 === var16)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var7 = false;
case 56:
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var16;
            var _closure2_slot4 = var16;
            var _closure2_slot5 = var16;
            var _closure2_slot6 = var16;
            var _closure2_slot7 = var16;
            var _closure2_slot8 = var16;
            var _closure2_slot9 = var16;
            var _closure2_slot10 = var16;
            var _closure2_slot11 = var16;
            var _closure2_slot12 = var16;
            var _closure2_slot13 = var16;
            var _closure2_slot14 = var16;
            var _closure2_slot15 = var16;
            var4 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = 12;
            var5 = var20[var3];
            var9 = var4.bind(var16)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var8.bind(var9)(var6, var5);
            var12 = _closure1_slot1;
            var9 = 13;
            var5 = var20[var9];
            var8 = var12.bind(var16)(var5);
            var6 = var8.isPremium;
            var5 = _closure1_slot12;
            var5 = var5.TIER_2;
            var5 = var6.bind(var8)(var13, var5);
            _closure2_slot3 = var5;
            var6 = var20[var3];
            var14 = var4.bind(var16)(var6);
            var11 = var14.useStateFromStoresArray;
            var6 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot9;
                var1 = var3.getSounds;
                var2 = var1.bind(var3)();
                var1 = new Array(3);
                var1[0] = var2;
                var2 = var3.getFavorites;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                var2 = var3.isFetching;
                var2 = var2.bind(var3)();
                var1[2] = var2;
                return var1;
            };
            var11 = var11.bind(var14)(var8, var6);
            var8 = _closure1_slot3;
            var6 = 3;
            var8 = var8.bind(var16)(var11, var6);
            var6 = 0;
            var18 = var8[var6];
            _closure2_slot4 = var18;
            var6 = 1;
            var17 = var8[var6];
            _closure2_slot5 = var17;
            var6 = 2;
            var6 = var8[var6];
            _closure2_slot6 = var6;
            var8 = 14;
            var8 = var20[var8];
            var14 = var4.bind(var16)(var8);
            var11 = var14.useSortedGuildIdsForSoundboard;
            var8 = false;
            var19 = var11.bind(var14)(var15, var8);
            _closure2_slot7 = var19;
            var8 = var20[var3];
            var21 = var4.bind(var16)(var8);
            var15 = var21.useStateFromStoresArray;
            var11 = _closure1_slot5;
            var14 = new Array(1);
            var14[0] = var11;
            var8 = function() {
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var4 = _closure2_slot7;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure1_slot5;
                        var2 = var3.getGuild;
                        var1 = arg1;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var3)) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
case 57:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var15.bind(var21)(var14, var8);
            _closure2_slot8 = var8;
            var9 = var20[var9];
            var12 = var12.bind(var16)(var9);
            var9 = var12.canUseSoundboardEverywhere;
            var9 = var9.bind(var12)(var13);
            _closure2_slot9 = var9;
            var12 = var20[var3];
            var14 = var4.bind(var16)(var12);
            var13 = var14.useStateFromStores;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0010_ip = 38; continue _fun0010 }
case 3:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 38:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var12 = var13.bind(var14)(var12, var11);
            _closure2_slot10 = var12;
            var11 = var20[var3];
            var21 = var4.bind(var16)(var11);
            var15 = var21.useStateFromStores;
            var11 = _closure1_slot6;
            var14 = new Array(1);
            var14[0] = var11;
            var13 = new Array(1);
            var13[0] = var12;
            var11 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getManageResourcePermissions;
                var1 = _closure2_slot10;
                var1 = var2.bind(var3)(var1);
                var1 = var1.canCreateExpressions;
                return var1;
            };
            var11 = var15.bind(var21)(var14, var11, var13);
            _closure2_slot11 = var11;
            var13 = 16;
            var13 = var20[var13];
            var15 = var4.bind(var16)(var13);
            var14 = var15.useRecentlyHeardExperiment;
            var13 = {'location': 'soundboard-useSoundGrid', 'autoTrackExposure': true};
            var14 = var14.bind(var15)(var13);
            var13 = var14.canSeeRecentlyHeard;
            _closure2_slot12 = var13;
            var14 = var14.canSeeFrequentlyPlayed;
            _closure2_slot13 = var14;
            var15 = _closure1_slot18;
            var15 = var15.bind(var16)();
            _closure2_slot14 = var15;
            var3 = var20[var3];
            var20 = var4.bind(var16)(var3);
            var16 = var20.useStateFromStoresArray;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot8;
                var1 = var1.recentlyHeardSoundIds;
                return var1;
            };
            var16 = var16.bind(var20)(var4, var3);
            _closure2_slot15 = var16;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(15);
            var2[0] = var19;
            var2[1] = var18;
            var2[2] = var17;
            var2[3] = var16;
            var2[4] = var15;
            var2[5] = var14;
            var2[6] = var13;
            var2[7] = var12;
            var2[8] = var11;
            var2[9] = var10;
            var2[10] = var9;
            var2[11] = var8;
            var2[12] = var7;
            var2[13] = var6;
            var2[14] = var5;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var17 = 0;
                    var _closure3_slot0 = var17;
                    var _closure3_slot1 = var17;
                    var4 = new Array(0);
                    var1 = _closure2_slot2;
                    if(var1) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                    var5 = _closure1_slot16;
                    var1 = {};
                    var1['sections'] = var4;
                    var7 = _closure2_slot7;
                    var1['guildIds'] = var7;
                    var7 = _closure2_slot4;
                    var1['allSounds'] = var7;
                    var7 = global;
                    var9 = var7.Array;
                    var8 = var9.from;
                    var7 = _closure2_slot5;
                    var7 = var8.bind(var9)(var7);
                    var1['potentialSoundIdsForSection'] = var7;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var16 = 9;
                    var8 = var7[var16];
                    var7 = undefined;
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.SoundboardSoundGridSectionType;
                    var8 = var8.FAVORITES;
                    var1['sectionType'] = var8;
                    var8 = true;
                    var1['sortById'] = var8;
                    var1 = var5.bind(var7)(var1);
                    var1 = _closure2_slot12;
                    if(!var1) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                    var5 = _closure1_slot16;
                    var1 = {};
                    var1['sections'] = var4;
                    var8 = _closure2_slot7;
                    var1['guildIds'] = var8;
                    var8 = _closure2_slot4;
                    var1['allSounds'] = var8;
                    var8 = _closure2_slot15;
                    var1['potentialSoundIdsForSection'] = var8;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var16];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.SoundboardSoundGridSectionType;
                    var8 = var8.RECENTLY_HEARD;
                    var1['sectionType'] = var8;
                    var8 = false;
                    var1['sortById'] = var8;
                    var1 = var5.bind(var7)(var1);
case 61:
                    var1 = _closure2_slot13;
                    if(!var1) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                    var5 = _closure1_slot16;
                    var1 = {};
                    var1['sections'] = var4;
                    var8 = _closure2_slot7;
                    var1['guildIds'] = var8;
                    var8 = _closure2_slot4;
                    var1['allSounds'] = var8;
                    var10 = _closure2_slot14;
                    var9 = var10.map;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.soundId;
                        return var1;
                    };
                    var8 = var9.bind(var10)(var8);
                    var1['potentialSoundIdsForSection'] = var8;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var16];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.SoundboardSoundGridSectionType;
                    var8 = var8.FREQUENTLY_USED;
                    var1['sectionType'] = var8;
                    var8 = false;
                    var1['sortById'] = var8;
                    var1 = var5.bind(var7)(var1);
case 63:
                    var1 = _closure2_slot10;
                    if(!(var7 !== var1)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                    var9 = _closure2_slot10;
                    var1 = {};
                    var5 = _closure2_slot11;
                    var1['currentGuildHasAddPermissions'] = var5;
                    var5 = _closure2_slot4;
                    var1['allSounds'] = var5;
                    var5 = _closure2_slot1;
                    var1['filterOutEmptyCurrentGuild'] = var5;
                    var5 = var1.currentGuildHasAddPermissions;
                    var11 = var1.allSounds;
                    var1 = var1.filterOutEmptyCurrentGuild;
                    var10 = var11.get;
                    var8 = var9.id;
                    var10 = var10.bind(var11)(var8);
                    var8 = null;
                    if(!(var8 == var10)) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                    var10 = new Array(0);
case 67:
                    var8 = _closure1_slot15;
                    var8 = var8.bind(var7)(var10);
                    var11 = var10.length;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 11;
                    var10 = var13[var10];
                    var12 = var12.bind(var7)(var10);
                    var10 = var12.getMaxSoundboardSlots;
                    var10 = var10.bind(var12)(var9);
                    var10 = var11 < var10;
                    if(!var10) { _fun0011_ip = 69; continue _fun0011 }
case 70:
                    var10 = var5;
case 69:
                    var5 = var8.length;
                    var5 = var17 === var5;
                    var10 = !var10;
                    if(!var10) { _fun0011_ip = 71; continue _fun0011 }
case 72:
                    var10 = !var5;
case 71:
                    if(var10) { _fun0011_ip = 73; continue _fun0011 }
case 74:
                    var10 = var1;
case 73:
                    if(var10) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                    var11 = var8.push;
                    var10 = {};
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var16];
                    var12 = var13.bind(var7)(var12);
                    var12 = var12.SoundboardSoundItemType;
                    var12 = var12.ADD_SOUND;
                    var10['type'] = var12;
                    var10['guild'] = var9;
                    var10 = var11.bind(var8)(var10);
case 75:
                    if(!var1) { _fun0011_ip = 77; continue _fun0011 }
case 78:
                    var1 = var5;
case 77:
                    if(var1) { _fun0011_ip = 65; continue _fun0011 }
case 79:
                    var5 = var4.push;
                    var1 = {};
                    var10 = {};
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var16];
                    var11 = var12.bind(var7)(var11);
                    var11 = var11.SoundboardSoundGridSectionType;
                    var11 = var11.GUILD;
                    var10['type'] = var11;
                    var10['guild'] = var9;
                    var11 = false;
                    var10['isNitroLocked'] = var11;
                    var1['categoryInfo'] = var10;
                    var9 = var9.id;
                    var1['key'] = var9;
                    var1['items'] = var8;
                    var1 = var5.bind(var4)(var1);
case 65:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                    var5 = _closure1_slot17;
                    var1 = _closure2_slot4;
                    var1 = var5.bind(var7)(var4, var1);
case 80:
                    var1 = {};
                    var1['sections'] = var4;
                    var5 = _closure2_slot8;
                    var1['guilds'] = var5;
                    var5 = _closure2_slot10;
                    var15 = null;
                    var8 = var15 == var5;
                    var5 = undefined;
                    if(var8) { _fun0011_ip = 82; continue _fun0011 }
case 83:
                    var8 = _closure2_slot10;
                    var5 = var8.id;
case 82:
                    var1['currentGuildId'] = var5;
                    var5 = _closure2_slot4;
                    var1['allSounds'] = var5;
                    var5 = _closure2_slot3;
                    var1['hasNitro'] = var5;
                    var14 = var1.sections;
                    var5 = var1.guilds;
                    var13 = var1.currentGuildId;
                    var12 = var1.allSounds;
                    var11 = var1.hasNitro;
                    var1 = _closure1_slot13;
                    var10 = var1.bind(var7)(var5);
                    var5 = var10.bind(var7)();
                    var1 = var5.done;
                    var9 = var5;
                    var8 = undefined;
                    var5 = undefined;
                    if(var1) { _fun0011_ip = 84; continue _fun0011 }
case 85:
                    var21 = var9.value;
                    var1 = var21.id;
                    if(!(var1 !== var13)) { _fun0011_ip = 86; continue _fun0011 }
case 87:
                    var19 = _closure1_slot15;
                    var18 = var12.get;
                    var1 = var21.id;
                    var18 = var18.bind(var12)(var1);
                    var1 = var18;
                    if(!(var15 == var18)) { _fun0011_ip = 88; continue _fun0011 }
case 89:
                    var1 = new Array(0);
case 88:
                    var1 = var19.bind(var7)(var1);
                    var19 = var1.length;
                    var8 = var18;
                    var5 = var1;
                    if(!(var19 > var17)) { _fun0011_ip = 86; continue _fun0011 }
case 90:
                    var20 = var14.push;
                    var19 = {};
                    var22 = {};
                    var24 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var23 = var23[var16];
                    var23 = var24.bind(var7)(var23);
                    var23 = var23.SoundboardSoundGridSectionType;
                    var23 = var23.GUILD;
                    var22['type'] = var23;
                    var22['guild'] = var21;
                    var23 = !var11;
                    var22['isNitroLocked'] = var23;
                    var19['categoryInfo'] = var22;
                    var21 = var21.id;
                    var19['key'] = var21;
                    var19['items'] = var1;
                    var19 = var20.bind(var14)(var19);
                    var8 = var18;
                    var5 = var1;
case 86:
                    var18 = var10.bind(var7)();
                    var1 = var18.done;
                    var9 = var18;
                    if(!var1) { _fun0011_ip = 85; continue _fun0011 }
case 84:
                    var1 = _closure2_slot9;
                    if(!var1) { _fun0011_ip = 91; continue _fun0011 }
case 92:
                    var5 = _closure1_slot17;
                    var1 = _closure2_slot4;
                    var1 = var5.bind(var7)(var4, var1);
case 91:
                    var5 = var4.forEach;
                    var1 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.categoryInfo;
                            var4 = var1.type;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var3 = var3.SoundboardSoundGridSectionType;
                            var3 = var3.GUILD;
                            if(!(var4 === var3)) { _fun0012_ip = 93; continue _fun0012 }
case 4:
                            var3 = var2.categoryInfo;
                            var4 = var3.isNitroLocked;
                            if(var4) { _fun0012_ip = 94; continue _fun0012 }
case 95:
                            var5 = _closure3_slot0;
                            var4 = var2.items;
                            var4 = var4.length;
                            var4 = var5 + var4;
                            _closure3_slot0 = var4;
                            _fun0012_ip = 93; continue _fun0012;
case 94:
                            var4 = _closure3_slot1;
                            var2 = var2.items;
                            var2 = var2.length;
                            var2 = var4 + var2;
                            _closure3_slot1 = var2;
case 93:
                            return var1;
                        }
                    };
                    var1 = var5.bind(var4)(var1);
                    var1 = {};
                    var1['categories'] = var4;
                    var5 = _closure2_slot4;
                    var1['allSounds'] = var5;
                    var5 = _closure2_slot6;
                    var1['isFetching'] = var5;
                    var5 = {};
                    var7 = _closure2_slot5;
                    var7 = var7.size;
                    var5['favoriteSoundCount'] = var7;
                    var7 = _closure3_slot0;
                    var5['unlockedCustomSoundCount'] = var7;
                    var6 = _closure3_slot1;
                    var5['lockedCustomSoundCount'] = var6;
                    var1['soundCounts'] = var5;
                    _fun0011_ip = 96; continue _fun0011;
case 59:
                    var6 = _closure1_slot17;
                    var5 = _closure2_slot4;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var4, var5);
                    var2 = {};
                    var2['categories'] = var4;
                    var4 = _closure2_slot4;
                    var2['allSounds'] = var4;
                    var3 = _closure2_slot6;
                    var2['isFetching'] = var3;
                    var3 = {'favoriteSoundCount': 0, 'unlockedCustomSoundCount': 0, 'lockedCustomSoundCount': 0};
                    var2['soundCounts'] = var3;
                    var1 = var2;
case 96:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var5;
    var4 = function useSearchCategories(arg1, arg2, arg3) {
        var7 = arg1;
        var5 = arg2;
        var6 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var5;
        var _closure2_slot2 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var6 = var6.length;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = _closure2_slot2;
                var3 = var1.length;
                var1 = 0;
                if(!(!(var3 > var1))) { _fun0013_ip = 97; continue _fun0013 }
case 98:
                var1 = _closure2_slot0;
                _fun0013_ip = 99; continue _fun0013;
case 97:
                var3 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 9;
                var5 = var9[var7];
                var6 = undefined;
                var5 = var8.bind(var6)(var5);
                var5 = var5.SoundboardSoundGridSectionType;
                var5 = var5.SEARCH;
                var3['key'] = var5;
                var5 = {};
                var7 = var9[var7];
                var7 = var8.bind(var6)(var7);
                var7 = var7.SoundboardSoundGridSectionType;
                var7 = var7.SEARCH;
                var5['type'] = var7;
                var3['categoryInfo'] = var5;
                var5 = _closure1_slot15;
                var4 = _closure2_slot1;
                var2 = false;
                var2 = var5.bind(var6)(var4, var2);
                var3['items'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
case 99:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useSearchCategories'] = var4;
    var3['useFrequentlyPlayedSounds'] = var2;
    return var1;
})();