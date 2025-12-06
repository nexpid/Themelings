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
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
case 0:
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
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
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
case 0:
                var3 = _closure1_slot11;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = _closure1_slot7;
                var1 = var2.ALL;
case 9:
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
case 0:
                var5 = arg1;
                var4 = arg2;
                var2 = null;
                if(!(var2 == var4)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var1 = _closure1_slot10;
                var1 = var1[var5];
                _fun0004_ip = 13; continue _fun0004;
case 11:
                var3 = _closure1_slot12;
                var3 = var3[var5];
                var5 = var2 == var3;
                var2 = undefined;
                if(var5) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = var3[var4];
case 14:
                var1 = var2;
case 13:
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
case 0:
                var2 = _closure1_slot10;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0005_ip = 16; continue _fun0005 }
case 11:
                var2 = arg2;
                var1 = var3[var2];
case 16:
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
case 0:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var4 = _closure1_slot10;
                var1 = arg1;
                var1 = var4[var1];
                var4 = null;
                if(!(var4 == var1)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                var1 = {};
case 17:
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
case 0:
                var3 = _closure1_slot13;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0007_ip = 19; continue _fun0007 }
case 10:
                var1 = _closure1_slot8;
case 19:
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
case 0:
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
                if(!(var3 == var5)) { _fun0008_ip = 20; continue _fun0008 }
case 21:
                var6 = _closure2_slot1;
                var5 = var4.primaryCategoryId;
                var3 = {};
                var7 = var4.guildId;
                var3[var7] = var4;
                var6[var5] = var3;
                _fun0008_ip = 22; continue _fun0008;
case 20:
                var3 = _closure2_slot1;
                var2 = var4.primaryCategoryId;
                var3 = var3[var2];
                var2 = var4.guildId;
                var3[var2] = var4;
case 22:
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
case 0:
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
            if(!(var5 != var10)) { _fun0009_ip = 23; continue _fun0009 }
case 24:
            var3 = _closure1_slot10;
            var7 = var3[var4];
            var6 = var5 == var7;
            var3 = undefined;
            if(var6) { _fun0009_ip = 25; continue _fun0009 }
case 26:
            var6 = var10.guildId;
            var3 = var7[var6];
case 25:
            if(!(var5 == var3)) { _fun0009_ip = 23; continue _fun0009 }
case 27:
            var6 = _closure1_slot10;
            var3 = {};
            var13 = var6[var4];
            var14 = var3;
            var7 = copyDataProperties(var14, var13);
            var7 = var10.guildId;
            var3[var7] = var10;
            var6[var4] = var3;
            var6 = var10.primaryCategoryId;
            if(!(var5 == var6)) { _fun0009_ip = 28; continue _fun0009 }
case 29:
            var3 = _closure1_slot7;
            var6 = var3.UNCATEGORIZED;
case 28:
            var7 = _closure1_slot12;
            var3 = {};
            var13 = var7[var4];
            var14 = var3;
            var8 = copyDataProperties(var14, var13);
            var8 = {};
            var11 = var7[var4];
            var12 = var5 == var11;
            var9 = undefined;
            if(var12) { _fun0009_ip = 30; continue _fun0009 }
case 31:
            var9 = var11[var6];
case 30:
            var14 = var8;
            var13 = var9;
            var9 = copyDataProperties(var14, var13);
            var9 = var10.guildId;
            var8[var9] = var10;
            var3[var6] = var8;
            var7[var4] = var3;
            var3 = _closure1_slot13;
            var3 = var3[var4];
            if(!(var5 != var3)) { _fun0009_ip = 23; continue _fun0009 }
case 32:
            var3 = _closure1_slot13;
            var7 = var3[var4];
            var8 = var5 == var7;
            var3 = undefined;
            if(var8) { _fun0009_ip = 33; continue _fun0009 }
case 34:
            var3 = var7[var6];
case 33:
            var5 = var5 != var3;
            var7 = 0;
            if(!var5) { _fun0009_ip = 35; continue _fun0009 }
case 36:
            var7 = var3;
case 35:
            var3 = _closure1_slot13;
            var2 = {};
            var13 = var3[var4];
            var14 = var2;
            var5 = copyDataProperties(var14, var13);
            var5 = 1;
            var5 = var7 + var5;
            var2[var6] = var5;
            var3[var4] = var2;
case 23:
            return var1;
        }
    };
    var2['GUILD_DIRECTORY_ENTRY_CREATE'] = var9;
    var9 = function handleDeleteEntry(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.guildId;
            var1 = _closure1_slot10;
            var7 = var1[var4];
            var5 = null;
            var8 = var5 == var7;
            var1 = undefined;
            var6 = undefined;
            if(var8) { _fun0010_ip = 37; continue _fun0010 }
case 38:
            var6 = var7[var3];
case 37:
            if(!(var5 != var6)) { _fun0010_ip = 39; continue _fun0010 }
case 40:
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
            if(!(var5 != var10)) { _fun0010_ip = 41; continue _fun0010 }
case 42:
            var8 = var10.delete;
            var8 = var8.bind(var10)(var3);
case 41:
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
            if(!(var5 != var3)) { _fun0010_ip = 39; continue _fun0010 }
case 43:
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
            if(!(var7 >= var5)) { _fun0010_ip = 44; continue _fun0010 }
case 45:
            var5 = var7;
case 44:
            var2[var6] = var5;
            var3[var4] = var2;
case 39:
            return var1;
        }
    };
    var2['GUILD_DIRECTORY_ENTRY_DELETE'] = var9;
    var9 = function handleUpdateEntry(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
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
            if(var2) { _fun0011_ip = 46; continue _fun0011 }
case 6:
            var2 = var12.guildId;
            var3 = var6[var2];
case 46:
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
            if(var2) { _fun0011_ip = 47; continue _fun0011 }
case 28:
            var10 = var13.primaryCategoryId;
case 47:
            if(!(var8 == var10)) { _fun0011_ip = 48; continue _fun0011 }
case 49:
            var2 = _closure1_slot7;
            var10 = var2.UNCATEGORIZED;
case 48:
            var6 = var12.primaryCategoryId;
            if(!(var8 == var6)) { _fun0011_ip = 50; continue _fun0011 }
case 51:
            var2 = _closure1_slot7;
            var6 = var2.UNCATEGORIZED;
case 50:
            var2 = global;
            var9 = var2.Object;
            var7 = var9.assign;
            var2 = _closure1_slot12;
            var2 = var2[var4];
            var11 = var8 == var2;
            var3 = undefined;
            if(var11) { _fun0011_ip = 52; continue _fun0011 }
case 53:
            var3 = var2[var10];
case 52:
            var2 = {};
            var7 = var7.bind(var9)(var2, var3);
            var2 = var8 != var13;
            if(!var2) { _fun0011_ip = 54; continue _fun0011 }
case 55:
            var2 = var10 !== var6;
case 54:
            if(!var2) { _fun0011_ip = 56; continue _fun0011 }
case 57:
            var2 = var12.guildId;
            var2 = delete var7[var2];
case 56:
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
            if(var14) { _fun0011_ip = 58; continue _fun0011 }
case 59:
            var9 = var11[var6];
case 58:
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
            if(!var2) { _fun0011_ip = 60; continue _fun0011 }
case 61:
            var3 = _closure1_slot13;
            var3 = var3[var4];
            var2 = var8 != var3;
case 60:
            if(!var2) { _fun0011_ip = 62; continue _fun0011 }
case 63:
            var3 = _closure1_slot13;
            var2 = {};
            var15 = var3[var4];
            var16 = var2;
            var7 = copyDataProperties(var16, var15);
            var7 = var3[var4];
            var11 = var8 == var7;
            var9 = undefined;
            if(var11) { _fun0011_ip = 64; continue _fun0011 }
case 65:
            var9 = var7[var10];
case 64:
            var7 = 0;
            var11 = var9 > var7;
            var9 = 0;
            if(!var11) { _fun0011_ip = 66; continue _fun0011 }
case 67:
            var11 = _closure1_slot13;
            var11 = var11[var4];
            var13 = var8 == var11;
            var12 = undefined;
            if(var13) { _fun0011_ip = 68; continue _fun0011 }
case 69:
            var12 = var11[var10];
case 68:
            var11 = 1;
            var9 = var12 - var11;
case 66:
            var2[var10] = var9;
            var5 = _closure1_slot13;
            var9 = var5[var4];
            var10 = var8 == var9;
            var5 = undefined;
            if(var10) { _fun0011_ip = 70; continue _fun0011 }
case 71:
            var5 = var9[var6];
case 70:
            var8 = var8 != var5;
            var7 = 0;
            if(!var8) { _fun0011_ip = 72; continue _fun0011 }
case 73:
            var7 = var5;
case 72:
            var5 = 1;
            var5 = var7 + var5;
            var2[var6] = var5;
            var3[var4] = var2;
case 62:
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