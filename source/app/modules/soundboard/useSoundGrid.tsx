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
    var1 = function createSoundItems(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = null;
            var3 = var4;
            if(!(var1 != var2)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = undefined;
            var3 = var2.bind(var1)(var4);
case 36:
            var2 = var3.map;
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
            var1 = var2.bind(var3)(var1);
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
            var6 = var2.sortSoundsFn;
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
            if(!var5) { _fun0005_ip = 38; continue _fun0005 }
case 39:
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
                    if(!(var2 != var4)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var2 = _closure2_slot1;
                    var1 = var3.soundId;
                    var2[var1] = var3;
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = _closure1_slot13;
            var5 = var13.get;
            var5 = var5.bind(var13)(var16);
            if(!(var11 == var5)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var5 = new Array(0);
case 42:
            var16 = var15.bind(var1)(var5);
            var15 = var16.bind(var1)();
            var5 = var15.done;
            if(var5) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var5 = var15.value;
            var5 = var17.bind(var1)(var5);
            var18 = var16.bind(var1)();
            var5 = var18.done;
            var15 = var18;
            if(!var5) { _fun0005_ip = 45; continue _fun0005 }
case 44:
            var8 = var8 + 1;
            var5 = var10.length;
            if(var8 < var5) { _fun0005_ip = 39; continue _fun0005 }
case 38:
            var5 = new Array(0);
            var8 = _closure1_slot13;
            var10 = var8.bind(var1)(var9);
            var9 = var10.bind(var1)();
            var8 = var9.done;
            if(var8) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var8 = var9.value;
            var13 = var12[var8];
            if(!(var11 != var13)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var8 = var5.push;
            var8 = var8.bind(var5)(var13);
case 48:
            var13 = var10.bind(var1)();
            var8 = var13.done;
            var9 = var13;
            if(!var8) { _fun0005_ip = 47; continue _fun0005 }
case 46:
            var2 = _closure1_slot15;
            var5 = var2.bind(var1)(var5, var6);
            var2 = var5.length;
            if(!(var2 > var3)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var3 = var4.push;
            var2 = {};
            var2['key'] = var7;
            var6 = {};
            var6['type'] = var7;
            var2['categoryInfo'] = var6;
            var2['items'] = var5;
            var2 = var3.bind(var4)(var2);
case 50:
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
            var7 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 == var7)) { _fun0007_ip = 33; continue _fun0007 }
case 52:
            var7 = _closure1_slot11;
case 33:
            var3 = var4.push;
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 9;
            var6 = var9[var10];
            var1 = undefined;
            var6 = var8.bind(var1)(var6);
            var6 = var6.SoundboardSoundGridSectionType;
            var6 = var6.DEFAULTS;
            var2['key'] = var6;
            var6 = {};
            var10 = var9[var10];
            var10 = var8.bind(var1)(var10);
            var10 = var10.SoundboardSoundGridSectionType;
            var10 = var10.DEFAULTS;
            var6['type'] = var10;
            var2['categoryInfo'] = var6;
            var6 = _closure1_slot15;
            var5 = 11;
            var5 = var9[var5];
            var5 = var8.bind(var1)(var5);
            var5 = var5.sortSoundsOldestToNewestCreationDate;
            var5 = var6.bind(var1)(var7, var5);
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
            var16 = arg1;
            var2 = arguments[1];
            var8 = arguments[2];
            var _closure2_slot0 = var16;
            var17 = undefined;
            if(!(var2 === var17)) { _fun0008_ip = 31; continue _fun0008 }
case 53:
            var2 = {};
case 31:
            var11 = var2.filterOutEmptyCurrentGuild;
            if(!(var11 === var17)) { _fun0008_ip = 54; continue _fun0008 }
case 33:
            var11 = false;
case 54:
            var _closure2_slot1 = var11;
            if(!(var8 === var17)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var8 = false;
case 55:
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var17;
            var _closure2_slot4 = var17;
            var _closure2_slot5 = var17;
            var _closure2_slot6 = var17;
            var _closure2_slot7 = var17;
            var _closure2_slot8 = var17;
            var _closure2_slot9 = var17;
            var _closure2_slot10 = var17;
            var _closure2_slot11 = var17;
            var _closure2_slot12 = var17;
            var _closure2_slot13 = var17;
            var _closure2_slot14 = var17;
            var _closure2_slot15 = var17;
            var _closure2_slot16 = var17;
            var4 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 12;
            var5 = var21[var3];
            var9 = var4.bind(var17)(var5);
            var7 = var9.useStateFromStores;
            var5 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var7.bind(var9)(var6, var5);
            var13 = _closure1_slot1;
            var10 = 13;
            var5 = var21[var10];
            var7 = var13.bind(var17)(var5);
            var6 = var7.isPremium;
            var5 = _closure1_slot12;
            var5 = var5.TIER_2;
            var6 = var6.bind(var7)(var14, var5);
            _closure2_slot3 = var6;
            var5 = var21[var3];
            var12 = var4.bind(var17)(var5);
            var9 = var12.useStateFromStoresArray;
            var5 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
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
            var9 = var9.bind(var12)(var7, var5);
            var7 = _closure1_slot3;
            var5 = 3;
            var7 = var7.bind(var17)(var9, var5);
            var5 = 0;
            var19 = var7[var5];
            _closure2_slot4 = var19;
            var5 = 1;
            var18 = var7[var5];
            _closure2_slot5 = var18;
            var5 = 2;
            var7 = var7[var5];
            _closure2_slot6 = var7;
            var5 = 11;
            var5 = var21[var5];
            var9 = var4.bind(var17)(var5);
            var5 = var9.useSoundOrganizer;
            var5 = var5.bind(var9)();
            _closure2_slot7 = var5;
            var9 = 14;
            var9 = var21[var9];
            var15 = var4.bind(var17)(var9);
            var12 = var15.useSortedGuildIdsForSoundboard;
            var9 = false;
            var20 = var12.bind(var15)(var16, var9);
            _closure2_slot8 = var20;
            var9 = var21[var3];
            var22 = var4.bind(var17)(var9);
            var16 = var22.useStateFromStoresArray;
            var12 = _closure1_slot5;
            var15 = new Array(1);
            var15[0] = var12;
            var9 = function() {
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var4 = _closure2_slot8;
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
            var9 = var16.bind(var22)(var15, var9);
            _closure2_slot9 = var9;
            var10 = var21[var10];
            var13 = var13.bind(var17)(var10);
            var10 = var13.canUseSoundboardEverywhere;
            var10 = var10.bind(var13)(var14);
            _closure2_slot10 = var10;
            var13 = var21[var3];
            var15 = var4.bind(var17)(var13);
            var14 = var15.useStateFromStores;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0010_ip = 41; continue _fun0010 }
case 59:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 41:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var13 = var14.bind(var15)(var13, var12);
            _closure2_slot11 = var13;
            var12 = var21[var3];
            var22 = var4.bind(var17)(var12);
            var16 = var22.useStateFromStores;
            var12 = _closure1_slot6;
            var15 = new Array(1);
            var15[0] = var12;
            var14 = new Array(1);
            var14[0] = var13;
            var12 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getManageResourcePermissions;
                var1 = _closure2_slot11;
                var1 = var2.bind(var3)(var1);
                var1 = var1.canCreateExpressions;
                return var1;
            };
            var12 = var16.bind(var22)(var15, var12, var14);
            _closure2_slot12 = var12;
            var14 = 16;
            var14 = var21[var14];
            var16 = var4.bind(var17)(var14);
            var15 = var16.useRecentlyHeardExperiment;
            var14 = {'location': 'soundboard-useSoundGrid', 'autoTrackExposure': true};
            var15 = var15.bind(var16)(var14);
            var14 = var15.canSeeRecentlyHeard;
            _closure2_slot13 = var14;
            var15 = var15.canSeeFrequentlyPlayed;
            _closure2_slot14 = var15;
            var16 = _closure1_slot18;
            var16 = var16.bind(var17)();
            _closure2_slot15 = var16;
            var3 = var21[var3];
            var21 = var4.bind(var17)(var3);
            var17 = var21.useStateFromStoresArray;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot8;
                var1 = var1.recentlyHeardSoundIds;
                return var1;
            };
            var17 = var17.bind(var21)(var4, var3);
            _closure2_slot16 = var17;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(16);
            var2[0] = var20;
            var2[1] = var19;
            var2[2] = var18;
            var2[3] = var17;
            var2[4] = var16;
            var2[5] = var15;
            var2[6] = var14;
            var2[7] = var13;
            var2[8] = var12;
            var2[9] = var11;
            var2[10] = var10;
            var2[11] = var9;
            var2[12] = var8;
            var2[13] = var7;
            var2[14] = var6;
            var2[15] = var5;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var18 = 0;
                    var _closure3_slot0 = var18;
                    var _closure3_slot1 = var18;
                    var4 = new Array(0);
                    var1 = _closure2_slot2;
                    if(var1) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                    var5 = _closure1_slot16;
                    var1 = {};
                    var1['sections'] = var4;
                    var7 = _closure2_slot8;
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
                    var10 = _closure1_slot2;
                    var17 = 9;
                    var8 = var10[var17];
                    var7 = undefined;
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.SoundboardSoundGridSectionType;
                    var8 = var8.FAVORITES;
                    var1['sectionType'] = var8;
                    var8 = 11;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.sortSoundsOldestToNewestCreationDate;
                    var1['sortSoundsFn'] = var8;
                    var1 = var5.bind(var7)(var1);
                    var1 = _closure2_slot13;
                    if(!var1) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                    var5 = _closure1_slot16;
                    var1 = {};
                    var1['sections'] = var4;
                    var8 = _closure2_slot8;
                    var1['guildIds'] = var8;
                    var8 = _closure2_slot4;
                    var1['allSounds'] = var8;
                    var8 = _closure2_slot16;
                    var1['potentialSoundIdsForSection'] = var8;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var17];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.SoundboardSoundGridSectionType;
                    var8 = var8.RECENTLY_HEARD;
                    var1['sectionType'] = var8;
                    var1 = var5.bind(var7)(var1);
case 62:
                    var1 = _closure2_slot14;
                    if(!var1) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                    var5 = _closure1_slot16;
                    var1 = {};
                    var1['sections'] = var4;
                    var8 = _closure2_slot8;
                    var1['guildIds'] = var8;
                    var8 = _closure2_slot4;
                    var1['allSounds'] = var8;
                    var10 = _closure2_slot15;
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
                    var8 = var8[var17];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.SoundboardSoundGridSectionType;
                    var8 = var8.FREQUENTLY_USED;
                    var1['sectionType'] = var8;
                    var1 = var5.bind(var7)(var1);
case 64:
                    var1 = _closure2_slot11;
                    if(!(var7 !== var1)) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                    var9 = _closure2_slot11;
                    var8 = {};
                    var1 = _closure2_slot12;
                    var8['currentGuildHasAddPermissions'] = var1;
                    var1 = _closure2_slot4;
                    var8['allSounds'] = var1;
                    var1 = _closure2_slot1;
                    var8['filterOutEmptyCurrentGuild'] = var1;
                    var1 = _closure2_slot7;
                    var8['sortSoundsFn'] = var1;
                    var5 = var8.currentGuildHasAddPermissions;
                    var12 = var8.allSounds;
                    var1 = var8.filterOutEmptyCurrentGuild;
                    var11 = var8.sortSoundsFn;
                    var10 = var12.get;
                    var8 = var9.id;
                    var10 = var10.bind(var12)(var8);
                    var8 = null;
                    if(!(var8 == var10)) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                    var10 = new Array(0);
case 68:
                    var8 = _closure1_slot15;
                    var8 = var8.bind(var7)(var10, var11);
                    var11 = var10.length;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 10;
                    var10 = var13[var10];
                    var12 = var12.bind(var7)(var10);
                    var10 = var12.getMaxSoundboardSlots;
                    var10 = var10.bind(var12)(var9);
                    var10 = var11 < var10;
                    if(!var10) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                    var10 = var5;
case 70:
                    var5 = var8.length;
                    var5 = var18 === var5;
                    var10 = !var10;
                    if(!var10) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                    var10 = !var5;
case 72:
                    if(var10) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                    var10 = var1;
case 74:
                    if(var10) { _fun0011_ip = 76; continue _fun0011 }
case 77:
                    var11 = var8.push;
                    var10 = {};
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var17];
                    var12 = var13.bind(var7)(var12);
                    var12 = var12.SoundboardSoundItemType;
                    var12 = var12.ADD_SOUND;
                    var10['type'] = var12;
                    var10['guild'] = var9;
                    var10 = var11.bind(var8)(var10);
case 76:
                    if(!var1) { _fun0011_ip = 78; continue _fun0011 }
case 79:
                    var1 = var5;
case 78:
                    if(var1) { _fun0011_ip = 66; continue _fun0011 }
case 80:
                    var5 = var4.push;
                    var1 = {};
                    var10 = {};
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var17];
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
case 66:
                    var1 = _closure2_slot10;
                    if(var1) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                    var5 = _closure1_slot17;
                    var1 = _closure2_slot4;
                    var1 = var5.bind(var7)(var4, var1);
case 81:
                    var1 = {};
                    var1['sections'] = var4;
                    var5 = _closure2_slot9;
                    var1['guilds'] = var5;
                    var5 = _closure2_slot11;
                    var16 = null;
                    var8 = var16 == var5;
                    var5 = undefined;
                    if(var8) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                    var8 = _closure2_slot11;
                    var5 = var8.id;
case 83:
                    var1['currentGuildId'] = var5;
                    var5 = _closure2_slot4;
                    var1['allSounds'] = var5;
                    var5 = _closure2_slot3;
                    var1['hasNitro'] = var5;
                    var5 = _closure2_slot7;
                    var1['sortSoundsFn'] = var5;
                    var15 = var1.sections;
                    var5 = var1.guilds;
                    var14 = var1.currentGuildId;
                    var13 = var1.allSounds;
                    var12 = var1.hasNitro;
                    var11 = var1.sortSoundsFn;
                    var1 = _closure1_slot13;
                    var10 = var1.bind(var7)(var5);
                    var5 = var10.bind(var7)();
                    var1 = var5.done;
                    var9 = var5;
                    var8 = undefined;
                    var5 = undefined;
                    if(var1) { _fun0011_ip = 85; continue _fun0011 }
case 86:
                    var22 = var9.value;
                    var1 = var22.id;
                    if(!(var1 !== var14)) { _fun0011_ip = 87; continue _fun0011 }
case 88:
                    var20 = _closure1_slot15;
                    var19 = var13.get;
                    var1 = var22.id;
                    var19 = var19.bind(var13)(var1);
                    var1 = var19;
                    if(!(var16 == var19)) { _fun0011_ip = 89; continue _fun0011 }
case 90:
                    var1 = new Array(0);
case 89:
                    var1 = var20.bind(var7)(var1, var11);
                    var20 = var1.length;
                    var8 = var19;
                    var5 = var1;
                    if(!(var20 > var18)) { _fun0011_ip = 87; continue _fun0011 }
case 91:
                    var21 = var15.push;
                    var20 = {};
                    var23 = {};
                    var25 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var24 = var24[var17];
                    var24 = var25.bind(var7)(var24);
                    var24 = var24.SoundboardSoundGridSectionType;
                    var24 = var24.GUILD;
                    var23['type'] = var24;
                    var23['guild'] = var22;
                    var24 = !var12;
                    var23['isNitroLocked'] = var24;
                    var20['categoryInfo'] = var23;
                    var22 = var22.id;
                    var20['key'] = var22;
                    var20['items'] = var1;
                    var20 = var21.bind(var15)(var20);
                    var8 = var19;
                    var5 = var1;
case 87:
                    var19 = var10.bind(var7)();
                    var1 = var19.done;
                    var9 = var19;
                    if(!var1) { _fun0011_ip = 86; continue _fun0011 }
case 85:
                    var1 = _closure2_slot10;
                    if(!var1) { _fun0011_ip = 92; continue _fun0011 }
case 93:
                    var5 = _closure1_slot17;
                    var1 = _closure2_slot4;
                    var1 = var5.bind(var7)(var4, var1);
case 92:
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
                            if(!(var4 === var3)) { _fun0012_ip = 94; continue _fun0012 }
case 4:
                            var3 = var2.categoryInfo;
                            var4 = var3.isNitroLocked;
                            if(var4) { _fun0012_ip = 95; continue _fun0012 }
case 96:
                            var5 = _closure3_slot0;
                            var4 = var2.items;
                            var4 = var4.length;
                            var4 = var5 + var4;
                            _closure3_slot0 = var4;
                            _fun0012_ip = 94; continue _fun0012;
case 95:
                            var4 = _closure3_slot1;
                            var2 = var2.items;
                            var2 = var2.length;
                            var2 = var4 + var2;
                            _closure3_slot1 = var2;
case 94:
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
                    _fun0011_ip = 97; continue _fun0011;
case 60:
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
case 97:
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
                if(!(!(var3 > var1))) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                var1 = _closure2_slot0;
                _fun0013_ip = 100; continue _fun0013;
case 98:
                var3 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 9;
                var6 = var9[var7];
                var5 = undefined;
                var6 = var8.bind(var5)(var6);
                var6 = var6.SoundboardSoundGridSectionType;
                var6 = var6.SEARCH;
                var3['key'] = var6;
                var6 = {};
                var7 = var9[var7];
                var7 = var8.bind(var5)(var7);
                var7 = var7.SoundboardSoundGridSectionType;
                var7 = var7.SEARCH;
                var6['type'] = var7;
                var3['categoryInfo'] = var6;
                var4 = _closure1_slot15;
                var2 = _closure2_slot1;
                var2 = var4.bind(var5)(var2);
                var3['items'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
case 100:
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