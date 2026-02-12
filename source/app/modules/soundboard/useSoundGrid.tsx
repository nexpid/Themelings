// app/modules/soundboard/useSoundGrid.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
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
                var2 = 8;
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
    var _closure1_slot14 = var1;
    var1 = function addDefaultSection(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = var3.get;
            var1 = _closure1_slot9;
            var7 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 == var7)) { _fun0005_ip = 33; continue _fun0005 }
case 38:
            var7 = _closure1_slot10;
case 33:
            var3 = var4.push;
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 8;
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
            var6 = _closure1_slot14;
            var5 = 10;
            var5 = var9[var5];
            var5 = var8.bind(var1)(var5);
            var5 = var5.sortSoundsOldestToNewestCreationDate;
            var5 = var6.bind(var1)(var7, var5);
            var2['items'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot9 = var7;
    var4 = var4.EMPTY_SOUND_LIST;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot11 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/useSoundGrid.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useSoundGrid(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var21 = arg1;
            var2 = arguments[1];
            var8 = arguments[2];
            var _closure2_slot0 = var21;
            var13 = undefined;
            if(!(var2 === var13)) { _fun0006_ip = 31; continue _fun0006 }
case 39:
            var2 = {};
case 31:
            var12 = var2.filterOutEmptyCurrentGuild;
            if(!(var12 === var13)) { _fun0006_ip = 40; continue _fun0006 }
case 33:
            var12 = false;
case 40:
            var _closure2_slot1 = var12;
            var11 = var2.moveDefaultsToBottom;
            if(!(var11 === var13)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var11 = false;
case 41:
            var _closure2_slot2 = var11;
            if(!(var8 === var13)) { _fun0006_ip = 43; continue _fun0006 }
case 7:
            var8 = false;
case 43:
            var _closure2_slot3 = var8;
            var _closure2_slot4 = var13;
            var _closure2_slot5 = var13;
            var _closure2_slot6 = var13;
            var _closure2_slot7 = var13;
            var _closure2_slot8 = var13;
            var _closure2_slot9 = var13;
            var _closure2_slot10 = var13;
            var _closure2_slot11 = var13;
            var _closure2_slot12 = var13;
            var _closure2_slot13 = var13;
            var4 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 11;
            var5 = var18[var3];
            var9 = var4.bind(var13)(var5);
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
            var20 = var7.bind(var9)(var6, var5);
            var19 = _closure1_slot1;
            var10 = 12;
            var5 = var18[var10];
            var7 = var19.bind(var13)(var5);
            var6 = var7.isPremium;
            var5 = _closure1_slot11;
            var5 = var5.TIER_2;
            var6 = var6.bind(var7)(var20, var5);
            _closure2_slot4 = var6;
            var5 = var18[var3];
            var14 = var4.bind(var13)(var5);
            var9 = var14.useStateFromStoresArray;
            var5 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot8;
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
            var9 = var9.bind(var14)(var7, var5);
            var7 = _closure1_slot3;
            var5 = 3;
            var7 = var7.bind(var13)(var9, var5);
            var5 = 0;
            var16 = var7[var5];
            _closure2_slot5 = var16;
            var5 = 1;
            var15 = var7[var5];
            _closure2_slot6 = var15;
            var5 = 2;
            var7 = var7[var5];
            _closure2_slot7 = var7;
            var5 = 10;
            var5 = var18[var5];
            var9 = var4.bind(var13)(var5);
            var5 = var9.useSoundOrganizer;
            var5 = var5.bind(var9)();
            _closure2_slot8 = var5;
            var9 = 13;
            var9 = var18[var9];
            var17 = var4.bind(var13)(var9);
            var14 = var17.useSortedGuildIdsForSoundboard;
            var9 = false;
            var17 = var14.bind(var17)(var21, var9);
            _closure2_slot9 = var17;
            var9 = var18[var3];
            var23 = var4.bind(var13)(var9);
            var22 = var23.useStateFromStoresArray;
            var14 = _closure1_slot5;
            var21 = new Array(1);
            var21[0] = var14;
            var9 = function() {
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var4 = _closure2_slot9;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure1_slot5;
                        var2 = var3.getGuild;
                        var1 = arg1;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var3)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
case 44:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var22.bind(var23)(var21, var9);
            _closure2_slot10 = var9;
            var10 = var18[var10];
            var19 = var19.bind(var13)(var10);
            var10 = var19.canUseSoundboardEverywhere;
            var10 = var10.bind(var19)(var20);
            _closure2_slot11 = var10;
            var19 = var18[var3];
            var21 = var4.bind(var13)(var19);
            var20 = var21.useStateFromStores;
            var19 = new Array(1);
            var19[0] = var14;
            var14 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0008_ip = 46; continue _fun0008 }
case 3:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 46:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var14 = var20.bind(var21)(var19, var14);
            _closure2_slot12 = var14;
            var3 = var18[var3];
            var19 = var4.bind(var13)(var3);
            var18 = var19.useStateFromStores;
            var3 = _closure1_slot6;
            var13 = new Array(1);
            var13[0] = var3;
            var4 = new Array(1);
            var4[0] = var14;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getManageResourcePermissions;
                var1 = _closure2_slot12;
                var1 = var2.bind(var3)(var1);
                var1 = var1.canCreateExpressions;
                return var1;
            };
            var13 = var18.bind(var19)(var13, var3, var4);
            _closure2_slot13 = var13;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(13);
            var2[0] = var17;
            var2[1] = var16;
            var2[2] = var15;
            var2[3] = var14;
            var2[4] = var13;
            var2[5] = var12;
            var2[6] = var11;
            var2[7] = var10;
            var2[8] = var9;
            var2[9] = var8;
            var2[10] = var7;
            var2[11] = var6;
            var2[12] = var5;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var19 = 0;
                    var _closure3_slot0 = var19;
                    var _closure3_slot1 = var19;
                    var4 = new Array(0);
                    var1 = _closure2_slot3;
                    if(var1) { _fun0009_ip = 47; continue _fun0009 }
case 38:
                    var8 = {};
                    var8['sections'] = var4;
                    var1 = _closure2_slot9;
                    var8['guildIds'] = var1;
                    var1 = _closure2_slot5;
                    var8['allSounds'] = var1;
                    var2 = global;
                    var7 = var2.Array;
                    var6 = var7.from;
                    var1 = _closure2_slot6;
                    var1 = var6.bind(var7)(var1);
                    var8['potentialSoundIdsForSection'] = var1;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var18 = 8;
                    var6 = var10[var18];
                    var7 = undefined;
                    var6 = var9.bind(var7)(var6);
                    var6 = var6.SoundboardSoundGridSectionType;
                    var6 = var6.FAVORITES;
                    var8['sectionType'] = var6;
                    var6 = 10;
                    var6 = var10[var6];
                    var6 = var9.bind(var7)(var6);
                    var6 = var6.sortSoundsOldestToNewestCreationDate;
                    var8['sortSoundsFn'] = var6;
                    var6 = function _addSectionForPotentialSoundIds(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var2 = arg1;
                            var4 = var2.sections;
                            var20 = var2.guildIds;
                            var13 = var2.allSounds;
                            var9 = var2.potentialSoundIdsForSection;
                            var _closure4_slot0 = var9;
                            var7 = var2.sectionType;
                            var6 = var2.sortSoundsFn;
                            var12 = {};
                            var _closure4_slot1 = var12;
                            var10 = new Array(1);
                            var3 = 0;
                            var21 = var10;
                            var19 = 0;
                            var5 = arraySpread(var21, var20, var19);
                            var1 = _closure1_slot9;
                            var10[var5] = var1;
                            var1 = 1;
                            var1 = var5 + var1;
                            var1 = var10.length;
                            var5 = var3 < var1;
                            var1 = undefined;
                            var11 = null;
                            var8 = 0;
                            if(!var5) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                            var16 = var10[var8];
                            var17 = function _loop(arg1) {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    var3 = arg1;
                                    var _closure5_slot0 = var3;
                                    var5 = _closure4_slot0;
                                    var4 = var5.find;
                                    var2 = function(arg1) {
                                        var1 = _closure5_slot0;
                                        var2 = var1.soundId;
                                        var1 = arg1;
                                        var1 = var1 === var2;
                                        return var1;
                                    };
                                    var4 = var4.bind(var5)(var2);
                                    var2 = null;
                                    if(!(var2 != var4)) { _fun0011_ip = 41; continue _fun0011 }
case 46:
                                    var2 = _closure4_slot1;
                                    var1 = var3.soundId;
                                    var2[var1] = var3;
case 41:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var15 = _closure1_slot12;
                            var5 = var13.get;
                            var5 = var5.bind(var13)(var16);
                            if(!(var11 == var5)) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                            var5 = new Array(0);
case 50:
                            var16 = var15.bind(var1)(var5);
                            var15 = var16.bind(var1)();
                            var5 = var15.done;
                            if(var5) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                            var5 = var15.value;
                            var5 = var17.bind(var1)(var5);
                            var18 = var16.bind(var1)();
                            var5 = var18.done;
                            var15 = var18;
                            if(!var5) { _fun0010_ip = 53; continue _fun0010 }
case 52:
                            var8 = var8 + 1;
                            var5 = var10.length;
                            if(var8 < var5) { _fun0010_ip = 49; continue _fun0010 }
case 48:
                            var5 = new Array(0);
                            var8 = _closure1_slot12;
                            var10 = var8.bind(var1)(var9);
                            var9 = var10.bind(var1)();
                            var8 = var9.done;
                            if(var8) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                            var8 = var9.value;
                            var13 = var12[var8];
                            if(!(var11 != var13)) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                            var8 = var5.push;
                            var8 = var8.bind(var5)(var13);
case 56:
                            var13 = var10.bind(var1)();
                            var8 = var13.done;
                            var9 = var13;
                            if(!var8) { _fun0010_ip = 55; continue _fun0010 }
case 54:
                            var2 = _closure1_slot14;
                            var5 = var2.bind(var1)(var5, var6);
                            var2 = var5.length;
                            if(!(var2 > var3)) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                            var3 = var4.push;
                            var2 = {};
                            var2['key'] = var7;
                            var6 = {};
                            var6['type'] = var7;
                            var2['categoryInfo'] = var6;
                            var2['items'] = var5;
                            var2 = var3.bind(var4)(var2);
case 58:
                            return var1;
                        }
                    };
                    var6 = var6.bind(var7)(var8);
                    var6 = _closure2_slot12;
                    if(!(var7 !== var6)) { _fun0009_ip = 60; continue _fun0009 }
case 17:
                    var10 = _closure2_slot12;
                    var9 = {};
                    var6 = _closure2_slot13;
                    var9['currentGuildHasAddPermissions'] = var6;
                    var6 = _closure2_slot5;
                    var9['allSounds'] = var6;
                    var6 = _closure2_slot1;
                    var9['filterOutEmptyCurrentGuild'] = var6;
                    var6 = _closure2_slot8;
                    var9['sortSoundsFn'] = var6;
                    var8 = var9.currentGuildHasAddPermissions;
                    var13 = var9.allSounds;
                    var6 = var9.filterOutEmptyCurrentGuild;
                    var12 = var9.sortSoundsFn;
                    var11 = var13.get;
                    var9 = var10.id;
                    var11 = var11.bind(var13)(var9);
                    var9 = null;
                    if(!(var9 == var11)) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var11 = new Array(0);
case 61:
                    var9 = _closure1_slot14;
                    var9 = var9.bind(var7)(var11, var12);
                    var12 = var11.length;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 9;
                    var11 = var14[var11];
                    var13 = var13.bind(var7)(var11);
                    var11 = var13.getMaxSoundboardSlots;
                    var11 = var11.bind(var13)(var10);
                    var11 = var12 < var11;
                    if(!var11) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var11 = var8;
case 63:
                    var8 = var9.length;
                    var8 = var19 === var8;
                    var11 = !var11;
                    if(!var11) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var11 = !var8;
case 65:
                    if(var11) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                    var11 = var6;
case 67:
                    if(var11) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var12 = var9.push;
                    var11 = {};
                    var14 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var13 = var13[var18];
                    var13 = var14.bind(var7)(var13);
                    var13 = var13.SoundboardSoundItemType;
                    var13 = var13.ADD_SOUND;
                    var11['type'] = var13;
                    var11['guild'] = var10;
                    var11 = var12.bind(var9)(var11);
case 69:
                    if(!var6) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var6 = var8;
case 71:
                    if(var6) { _fun0009_ip = 60; continue _fun0009 }
case 73:
                    var8 = var4.push;
                    var6 = {};
                    var11 = {};
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var18];
                    var12 = var13.bind(var7)(var12);
                    var12 = var12.SoundboardSoundGridSectionType;
                    var12 = var12.GUILD;
                    var11['type'] = var12;
                    var11['guild'] = var10;
                    var12 = false;
                    var11['isNitroLocked'] = var12;
                    var6['categoryInfo'] = var11;
                    var10 = var10.id;
                    var6['key'] = var10;
                    var6['items'] = var9;
                    var6 = var8.bind(var4)(var6);
case 60:
                    var6 = _closure2_slot2;
                    if(var6) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                    var6 = _closure2_slot11;
case 74:
                    if(var6) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                    var8 = _closure1_slot15;
                    var6 = _closure2_slot5;
                    var6 = var8.bind(var7)(var4, var6);
case 76:
                    var6 = {};
                    var6['sections'] = var4;
                    var8 = _closure2_slot10;
                    var6['guilds'] = var8;
                    var8 = _closure2_slot12;
                    var17 = null;
                    var9 = var17 == var8;
                    var8 = undefined;
                    if(var9) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                    var9 = _closure2_slot12;
                    var8 = var9.id;
case 78:
                    var6['currentGuildId'] = var8;
                    var8 = _closure2_slot5;
                    var6['allSounds'] = var8;
                    var8 = _closure2_slot4;
                    var6['hasNitro'] = var8;
                    var8 = _closure2_slot8;
                    var6['sortSoundsFn'] = var8;
                    var16 = var6.sections;
                    var8 = var6.guilds;
                    var15 = var6.currentGuildId;
                    var14 = var6.allSounds;
                    var13 = var6.hasNitro;
                    var12 = var6.sortSoundsFn;
                    var6 = _closure1_slot12;
                    var11 = var6.bind(var7)(var8);
                    var8 = var11.bind(var7)();
                    var6 = var8.done;
                    var10 = var8;
                    var9 = undefined;
                    var8 = undefined;
                    if(var6) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                    var23 = var10.value;
                    var6 = var23.id;
                    if(!(var6 !== var15)) { _fun0009_ip = 82; continue _fun0009 }
case 83:
                    var21 = _closure1_slot14;
                    var20 = var14.get;
                    var6 = var23.id;
                    var20 = var20.bind(var14)(var6);
                    var6 = var20;
                    if(!(var17 == var20)) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                    var6 = new Array(0);
case 84:
                    var6 = var21.bind(var7)(var6, var12);
                    var21 = var6.length;
                    var9 = var20;
                    var8 = var6;
                    if(!(var21 > var19)) { _fun0009_ip = 82; continue _fun0009 }
case 86:
                    var22 = var16.push;
                    var21 = {};
                    var24 = {};
                    var26 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var25 = var25[var18];
                    var25 = var26.bind(var7)(var25);
                    var25 = var25.SoundboardSoundGridSectionType;
                    var25 = var25.GUILD;
                    var24['type'] = var25;
                    var24['guild'] = var23;
                    var25 = !var13;
                    var24['isNitroLocked'] = var25;
                    var21['categoryInfo'] = var24;
                    var23 = var23.id;
                    var21['key'] = var23;
                    var21['items'] = var6;
                    var21 = var22.bind(var16)(var21);
                    var9 = var20;
                    var8 = var6;
case 82:
                    var20 = var11.bind(var7)();
                    var6 = var20.done;
                    var10 = var20;
                    if(!var6) { _fun0009_ip = 81; continue _fun0009 }
case 80:
                    var6 = _closure2_slot2;
                    if(var6) { _fun0009_ip = 87; continue _fun0009 }
case 88:
                    var6 = _closure2_slot11;
case 87:
                    if(!var6) { _fun0009_ip = 89; continue _fun0009 }
case 90:
                    var6 = _closure1_slot15;
                    var1 = _closure2_slot5;
                    var1 = var6.bind(var7)(var4, var1);
case 89:
                    var6 = var4.forEach;
                    var1 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.categoryInfo;
                            var4 = var1.type;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var3 = var3.SoundboardSoundGridSectionType;
                            var3 = var3.GUILD;
                            if(!(var4 === var3)) { _fun0012_ip = 91; continue _fun0012 }
case 4:
                            var3 = var2.categoryInfo;
                            var4 = var3.isNitroLocked;
                            if(var4) { _fun0012_ip = 92; continue _fun0012 }
case 93:
                            var5 = _closure3_slot0;
                            var4 = var2.items;
                            var4 = var4.length;
                            var4 = var5 + var4;
                            _closure3_slot0 = var4;
                            _fun0012_ip = 91; continue _fun0012;
case 92:
                            var4 = _closure3_slot1;
                            var2 = var2.items;
                            var2 = var2.length;
                            var2 = var4 + var2;
                            _closure3_slot1 = var2;
case 91:
                            return var1;
                        }
                    };
                    var1 = var6.bind(var4)(var1);
                    var1 = {};
                    var1['categories'] = var4;
                    var7 = var2.Array;
                    var6 = var7.from;
                    var8 = _closure2_slot5;
                    var2 = var8.values;
                    var2 = var2.bind(var8)();
                    var6 = var6.bind(var7)(var2);
                    var2 = var6.flat;
                    var2 = var2.bind(var6)();
                    var1['availableSounds'] = var2;
                    var2 = _closure2_slot7;
                    var1['isFetching'] = var2;
                    var2 = {};
                    var6 = _closure2_slot6;
                    var6 = var6.size;
                    var2['favoriteSoundCount'] = var6;
                    var6 = _closure3_slot0;
                    var2['unlockedCustomSoundCount'] = var6;
                    var5 = _closure3_slot1;
                    var2['lockedCustomSoundCount'] = var5;
                    var1['soundCounts'] = var2;
                    _fun0009_ip = 94; continue _fun0009;
case 47:
                    var7 = _closure1_slot15;
                    var6 = _closure2_slot5;
                    var2 = undefined;
                    var2 = var7.bind(var2)(var4, var6);
                    var2 = {};
                    var2['categories'] = var4;
                    var7 = _closure2_slot5;
                    var6 = var7.get;
                    var4 = _closure1_slot9;
                    var4 = var6.bind(var7)(var4);
                    var6 = null;
                    if(!(var6 == var4)) { _fun0009_ip = 95; continue _fun0009 }
case 96:
                    var4 = _closure1_slot10;
case 95:
                    var2['availableSounds'] = var4;
                    var3 = _closure2_slot7;
                    var2['isFetching'] = var3;
                    var3 = {'favoriteSoundCount': 0, 'unlockedCustomSoundCount': 0, 'lockedCustomSoundCount': 0};
                    var2['soundCounts'] = var3;
                    var1 = var2;
case 94:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useSearchCategories(arg1, arg2, arg3) {
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
                var7 = 8;
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
                var4 = _closure1_slot14;
                var2 = _closure2_slot1;
                var2 = var4.bind(var5)(var2);
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
    var3['useSearchCategories'] = var2;
    return var1;
})();