// app/modules/directory_channels/GuildDirectoryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.DirectoryEntryCategories;
    var _closure1_slot7 = var8;
    var9 = var2.Object;
    var8 = var9.freeze;
    var2 = {};
    var2 = var8.bind(var9)(var2);
    var _closure1_slot8 = var2;
    var2 = false;
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var2 = {};
    var _closure1_slot14 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildDirectoryStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'isFetching';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCurrentCategoryId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot11;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0003_ip = 30; continue _fun0003 }
 20:
                var2 = _closure1_slot7;
                var1 = var2.ALL;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getDirectoryEntries';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var5 = arg1;
                var4 = arg2;
                var2 = null;
                if(!(var2 == var4)) { _fun0004_ip = 25; continue _fun0004 }
 12:
                var1 = _closure1_slot10;
                var1 = var1[var5];
                _fun0004_ip = 52; continue _fun0004;
 25:
                var3 = _closure1_slot12;
                var3 = var3[var5];
                var5 = var2 == var3;
                var2 = undefined;
                if(var5) { _fun0004_ip = 49; continue _fun0004 }
 45:
                var2 = var3[var4];
 49:
                var1 = var2;
 52:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getDirectoryEntry';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure1_slot10;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0005_ip = 32; continue _fun0005 }
 25:
                var2 = arg2;
                var1 = var3[var2];
 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getDirectoryAllEntriesCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var4 = _closure1_slot10;
                var1 = arg1;
                var1 = var4[var1];
                var4 = null;
                if(!(var4 == var1)) { _fun0006_ip = 35; continue _fun0006 }
 33:
                var1 = {};
 35:
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getDirectoryCategoryCounts';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = _closure1_slot13;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0007_ip = 24; continue _fun0007 }
 20:
                var1 = _closure1_slot8;
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getAdminGuildEntryIds';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot14;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildDirectoryStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleFetchStart() {
        var1 = true;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DIRECTORY_FETCH_START'] = var9;
    var9 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var7 = var1.entries;
        var2 = false;
        _closure1_slot9 = var2;
        var5 = {};
        var _closure2_slot0 = var5;
        var2 = {};
        var _closure2_slot1 = var2;
        var6 = var7.forEach;
        var4 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.guildDirectoryEntryFromServer;
                var2 = arg1;
                var4 = var3.bind(var4)(var2);
                var5 = _closure2_slot0;
                var3 = var4.guildId;
                var5[var3] = var4;
                var5 = _closure2_slot1;
                var3 = var4.primaryCategoryId;
                var5 = var5[var3];
                var3 = null;
                if(!(var3 == var5)) { _fun0008_ip = 103; continue _fun0008 }
 75:
                var6 = _closure2_slot1;
                var5 = var4.primaryCategoryId;
                var3 = {};
                var7 = var4.guildId;
                var3[var7] = var4;
                var6[var5] = var3;
                _fun0008_ip = 126; continue _fun0008;
 103:
                var3 = _closure2_slot1;
                var2 = var4.primaryCategoryId;
                var3 = var3[var2];
                var2 = var4.guildId;
                var3[var2] = var4;
 126:
                return var1;
            }
        };
        var4 = var6.bind(var7)(var4);
        var4 = _closure1_slot10;
        var4[var3] = var5;
        var1 = _closure1_slot12;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DIRECTORY_FETCH_SUCCESS'] = var9;
    var9 = function handleFetchFailure() {
        var1 = false;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DIRECTORY_FETCH_FAILURE'] = var9;
    var9 = function handleCreateEntry(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var6 = var1.entry;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.guildDirectoryEntryFromServer;
            var10 = var3.bind(var5)(var6);
            var5 = null;
            if(!(var5 != var10)) { _fun0009_ip = 286; continue _fun0009 }
 59:
            var3 = _closure1_slot10;
            var7 = var3[var4];
            var6 = var5 == var7;
            var3 = undefined;
            if(var6) { _fun0009_ip = 85; continue _fun0009 }
 76:
            var6 = var10.guildId;
            var3 = var7[var6];
 85:
            if(!(var5 == var3)) { _fun0009_ip = 286; continue _fun0009 }
 92:
            var6 = _closure1_slot10;
            var3 = {};
            var13 = var6[var4];
            var14 = var3;
            var7 = copyDataProperties(var14, var13);
            var7 = var10.guildId;
            var3[var7] = var10;
            var6[var4] = var3;
            var6 = var10.primaryCategoryId;
            if(!(var5 == var6)) { _fun0009_ip = 143; continue _fun0009 }
 133:
            var3 = _closure1_slot7;
            var6 = var3.UNCATEGORIZED;
 143:
            var7 = _closure1_slot12;
            var3 = {};
            var13 = var7[var4];
            var14 = var3;
            var8 = copyDataProperties(var14, var13);
            var8 = {};
            var11 = var7[var4];
            var12 = var5 == var11;
            var9 = undefined;
            if(var12) { _fun0009_ip = 179; continue _fun0009 }
 175:
            var9 = var11[var6];
 179:
            var14 = var8;
            var13 = var9;
            var9 = copyDataProperties(var14, var13);
            var9 = var10.guildId;
            var8[var9] = var10;
            var3[var6] = var8;
            var7[var4] = var3;
            var3 = _closure1_slot13;
            var3 = var3[var4];
            if(!(var5 != var3)) { _fun0009_ip = 286; continue _fun0009 }
 220:
            var3 = _closure1_slot13;
            var7 = var3[var4];
            var8 = var5 == var7;
            var3 = undefined;
            if(var8) { _fun0009_ip = 241; continue _fun0009 }
 237:
            var3 = var7[var6];
 241:
            var5 = var5 != var3;
            var7 = 0;
            if(!var5) { _fun0009_ip = 253; continue _fun0009 }
 250:
            var7 = var3;
 253:
            var3 = _closure1_slot13;
            var2 = {};
            var13 = var3[var4];
            var14 = var2;
            var5 = copyDataProperties(var14, var13);
            var5 = 1;
            var5 = var7 + var5;
            var2[var6] = var5;
            var3[var4] = var2;
 286:
            return var1;
        }
    };
    var2['GUILD_DIRECTORY_ENTRY_CREATE'] = var9;
    var9 = function handleDeleteEntry(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.guildId;
            var1 = _closure1_slot10;
            var7 = var1[var4];
            var5 = null;
            var8 = var5 == var7;
            var1 = undefined;
            var6 = undefined;
            if(var8) { _fun0010_ip = 41; continue _fun0010 }
 37:
            var6 = var7[var3];
 41:
            if(!(var5 != var6)) { _fun0010_ip = 274; continue _fun0010 }
 48:
            var6 = var6.primaryCategoryId;
            var7 = global;
            var11 = var7.Object;
            var10 = var11.assign;
            var8 = _closure1_slot10;
            var9 = var8[var4];
            var8 = {};
            var9 = var10.bind(var11)(var8, var9);
            var8 = delete var9[var3];
            var8 = _closure1_slot14;
            var10 = var8[var4];
            if(!(var5 != var10)) { _fun0010_ip = 109; continue _fun0010 }
 99:
            var8 = var10.delete;
            var8 = var8.bind(var10)(var3);
 109:
            var10 = _closure1_slot14;
            var12 = var7.Set;
            var14 = var10[var4];
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var15 = var11;
            var8 = new var15[var12](var14, var13);
            var8 = var8 instanceof Object ? var8 : var11;
            var10[var4] = var8;
            var8 = _closure1_slot10;
            var8[var4] = var9;
            var11 = var7.Object;
            var10 = var11.assign;
            var7 = _closure1_slot12;
            var8 = var7[var4];
            var9 = var8[var6];
            var8 = {};
            var8 = var10.bind(var11)(var8, var9);
            var3 = delete var8[var3];
            var3 = {};
            var13 = var7[var4];
            var14 = var3;
            var9 = copyDataProperties(var14, var13);
            var3[var6] = var8;
            var7[var4] = var3;
            var3 = _closure1_slot13;
            var3 = var3[var4];
            if(!(var5 != var3)) { _fun0010_ip = 274; continue _fun0010 }
 224:
            var3 = _closure1_slot13;
            var2 = var3[var4];
            var5 = var2[var6];
            var2 = 1;
            var7 = var5 - var2;
            var2 = {};
            var13 = var3[var4];
            var14 = var2;
            var5 = copyDataProperties(var14, var13);
            var5 = 0;
            if(!(var7 >= var5)) { _fun0010_ip = 265; continue _fun0010 }
 262:
            var5 = var7;
 265:
            var2[var6] = var5;
            var3[var4] = var2;
 274:
            return var1;
        }
    };
    var2['GUILD_DIRECTORY_ENTRY_DELETE'] = var9;
    var9 = function handleUpdateEntry(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var6 = var1.entry;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.guildDirectoryEntryFromServer;
            var12 = var2.bind(var3)(var6);
            var2 = _closure1_slot10;
            var6 = var2[var4];
            var8 = null;
            var2 = var8 == var6;
            var3 = undefined;
            if(var2) { _fun0011_ip = 78; continue _fun0011 }
 69:
            var2 = var12.guildId;
            var3 = var6[var2];
 78:
            var6 = _closure1_slot10;
            var2 = {};
            var15 = var6[var4];
            var16 = var2;
            var7 = copyDataProperties(var16, var15);
            var9 = var12.guildId;
            var7 = {};
            var16 = var7;
            var15 = var3;
            var10 = copyDataProperties(var16, var15);
            var16 = var7;
            var15 = var12;
            var10 = copyDataProperties(var16, var15);
            var2[var9] = var7;
            var6[var4] = var2;
            var2 = var8 == var3;
            var13 = var3;
            var10 = undefined;
            if(var2) { _fun0011_ip = 149; continue _fun0011 }
 143:
            var10 = var13.primaryCategoryId;
 149:
            if(!(var8 == var10)) { _fun0011_ip = 163; continue _fun0011 }
 153:
            var2 = _closure1_slot7;
            var10 = var2.UNCATEGORIZED;
 163:
            var6 = var12.primaryCategoryId;
            if(!(var8 == var6)) { _fun0011_ip = 183; continue _fun0011 }
 173:
            var2 = _closure1_slot7;
            var6 = var2.UNCATEGORIZED;
 183:
            var2 = global;
            var9 = var2.Object;
            var7 = var9.assign;
            var2 = _closure1_slot12;
            var2 = var2[var4];
            var11 = var8 == var2;
            var3 = undefined;
            if(var11) { _fun0011_ip = 217; continue _fun0011 }
 213:
            var3 = var2[var10];
 217:
            var2 = {};
            var7 = var7.bind(var9)(var2, var3);
            var2 = var8 != var13;
            if(!var2) { _fun0011_ip = 236; continue _fun0011 }
 232:
            var2 = var10 !== var6;
 236:
            if(!var2) { _fun0011_ip = 248; continue _fun0011 }
 239:
            var2 = var12.guildId;
            var2 = delete var7[var2];
 248:
            var3 = _closure1_slot12;
            var2 = {};
            var15 = var3[var4];
            var16 = var2;
            var9 = copyDataProperties(var16, var15);
            var2[var10] = var7;
            var7 = {};
            var11 = var3[var4];
            var14 = var8 == var11;
            var9 = undefined;
            if(var14) { _fun0011_ip = 289; continue _fun0011 }
 285:
            var9 = var11[var6];
 289:
            var16 = var7;
            var15 = var9;
            var9 = copyDataProperties(var16, var15);
            var11 = var12.guildId;
            var9 = {};
            var16 = var9;
            var15 = var13;
            var13 = copyDataProperties(var16, var15);
            var16 = var9;
            var15 = var12;
            var12 = copyDataProperties(var16, var15);
            var7[var11] = var9;
            var2[var6] = var7;
            var3[var4] = var2;
            var2 = var6 !== var10;
            if(!var2) { _fun0011_ip = 359; continue _fun0011 }
 347:
            var3 = _closure1_slot13;
            var3 = var3[var4];
            var2 = var8 != var3;
 359:
            if(!var2) { _fun0011_ip = 492; continue _fun0011 }
 365:
            var3 = _closure1_slot13;
            var2 = {};
            var15 = var3[var4];
            var16 = var2;
            var7 = copyDataProperties(var16, var15);
            var7 = var3[var4];
            var11 = var8 == var7;
            var9 = undefined;
            if(var11) { _fun0011_ip = 399; continue _fun0011 }
 395:
            var9 = var7[var10];
 399:
            var7 = 0;
            var11 = var9 > var7;
            var9 = 0;
            if(!var11) { _fun0011_ip = 438; continue _fun0011 }
 410:
            var11 = _closure1_slot13;
            var11 = var11[var4];
            var13 = var8 == var11;
            var12 = undefined;
            if(var13) { _fun0011_ip = 431; continue _fun0011 }
 427:
            var12 = var11[var10];
 431:
            var11 = 1;
            var9 = var12 - var11;
 438:
            var2[var10] = var9;
            var5 = _closure1_slot13;
            var9 = var5[var4];
            var10 = var8 == var9;
            var5 = undefined;
            if(var10) { _fun0011_ip = 464; continue _fun0011 }
 460:
            var5 = var9[var6];
 464:
            var8 = var8 != var5;
            var7 = 0;
            if(!var8) { _fun0011_ip = 476; continue _fun0011 }
 473:
            var7 = var5;
 476:
            var5 = 1;
            var5 = var7 + var5;
            var2[var6] = var5;
            var3[var4] = var2;
 492:
            return var1;
        }
    };
    var2['GUILD_DIRECTORY_ENTRY_UPDATE'] = var9;
    var9 = function handleSelectCategory(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = var1.categoryId;
        var1 = _closure1_slot11;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DIRECTORY_CATEGORY_SELECT'] = var9;
    var9 = function handleFetchCategoryCounts(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = var1.counts;
        var1 = _closure1_slot13;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS'] = var9;
    var4 = function handleFetchAdminEntries(arg1) {
        var2 = arg1;
        var3 = var2.channelId;
        var5 = var2.entries;
        var2 = global;
        var2 = var2.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var7 = var4;
        var2 = new var7[var2](var6);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure2_slot0 = var2;
        var4 = var5.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.guildDirectoryEntryFromServer;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var4 = _closure2_slot0;
            var3 = var4.add;
            var2 = var2.guildId;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var1 = _closure1_slot14;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/GuildDirectoryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();