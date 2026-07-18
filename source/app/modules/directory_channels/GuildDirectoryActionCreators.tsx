// app/modules/directory_channels/GuildDirectoryActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var1 = function _addDirectoryGuildEntry() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var14 = arg2;
                    var13 = arguments[3];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = undefined;
                    if(!(var13 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = _closure1_slot5;
                    var13 = var2.UNCATEGORIZED;
case 4:
                    SaveGenerator(address=42);
case 6:
                    return var4;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var6 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 7;
                    var3 = var11[var3];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.post;
                    var3 = {};
                    var10 = _closure1_slot6;
                    var9 = var10.DIRECTORY_CHANNEL_ENTRY;
                    var9 = var9.bind(var10)(var8, var14);
                    var3['url'] = var9;
                    var9 = {};
                    var10 = arg3;
                    var9['description'] = var10;
                    var9['primary_category_id'] = var13;
                    var3['body'] = var9;
                    var9 = {};
                    var10 = _closure1_slot0;
                    var12 = 8;
                    var12 = var11[var12];
                    var12 = var10.bind(var4)(var12);
                    var12 = var12.NetworkActionNames;
                    var12 = var12.DIRECTORY_GUILD_ENTRY_CREATE;
                    var9['event'] = var12;
                    var12 = {};
                    var12['directory_channel_id'] = var8;
                    var12['guild_id'] = var14;
                    var12['primary_category_id'] = var13;
                    var9['properties'] = var12;
                    var3['trackedActionData'] = var9;
                    var9 = 6;
                    var9 = var11[var9];
                    var10 = var10.bind(var4)(var9);
                    var9 = var10.rejectWithMigratedError;
                    var9 = var9.bind(var10)();
                    var3['rejectWithError'] = var9;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=216);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'GUILD_DIRECTORY_ENTRY_CREATE';
                    var5['type'] = var9;
                    var5['channelId'] = var8;
                    var8 = var3.body;
                    var5['entry'] = var8;
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 12:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _updateDirectoryEntry() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var13 = arguments[3];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = undefined;
                    if(!(var13 === var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var2 = _closure1_slot5;
                    var13 = var2.UNCATEGORIZED;
case 16:
                    SaveGenerator(address=39);
case 18:
                    return var4;
case 19:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 6;
                    var3 = var11[var9];
                    var3 = var10.bind(var4)(var3);
                    var7 = var3.HTTP;
                    var6 = var7.patch;
                    var3 = {};
                    var15 = _closure1_slot6;
                    var14 = var15.DIRECTORY_CHANNEL_ENTRY;
                    var12 = arg2;
                    var12 = var14.bind(var15)(var8, var12);
                    var3['url'] = var12;
                    var12 = {};
                    var14 = arg3;
                    var12['description'] = var14;
                    var12['primary_category_id'] = var13;
                    var3['body'] = var12;
                    var9 = var11[var9];
                    var10 = var10.bind(var4)(var9);
                    var9 = var10.rejectWithMigratedError;
                    var9 = var9.bind(var10)();
                    var3['rejectWithError'] = var9;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=157);
case 22:
                    return var3;
case 23:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 13; continue _fun0002 }
case 24:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'GUILD_DIRECTORY_ENTRY_UPDATE';
                    var5['type'] = var9;
                    var5['channelId'] = var8;
                    var8 = var3.body;
                    var5['entry'] = var8;
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 13:
                    return var3;
case 20:
                    return var2;
case 14:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _fetchGuildEntriesForIds() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var6 = arg1;
                    var9 = arg2;
case 15: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var11 = _closure1_slot6;
                    var10 = var11.DIRECTORY_CHANNEL_LIST_BY_ID;
                    var8 = var6;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var8 = {};
                    var8['entity_ids'] = var9;
                    var2['query'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=104);
case 27:
                    return var2;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 5;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['channelId'] = var6;
                    var6 = var2.body;
                    var3['entries'] = var6;
                    var3 = var4.bind(var5)(var3);
case 31: // try_end0
                    _fun0003_ip = 32; continue _fun0003;
case 29:
                    return var2;
case 33: // catch_target0
                    CatchBlockStart(arg_register=1);
case 32:
                    var2 = undefined;
                    return var2;
case 25:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.DirectoryEntryCategories;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 4;
    var5 = var9[var4];
    var6 = var7.bind(var1)(var5);
    var5 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 34; continue _fun0004 }
case 26:
                    var6 = arg1;
                    var10 = arg2;
case 15: // try_start_0
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 5;
                    var2 = var8[var7];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var2);
                    var4 = var9.dispatch;
                    var2 = {};
                    var11 = 'GUILD_DIRECTORY_FETCH_START';
                    var2['type'] = var11;
                    var2 = var4.bind(var9)(var2);
                    var4 = _closure1_slot0;
                    var2 = 6;
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var8 = var2.HTTP;
                    var4 = var8.get;
                    var2 = {};
                    var12 = _closure1_slot6;
                    var11 = var12.DIRECTORY_CHANNEL_ENTRIES;
                    var9 = var6;
                    var9 = var11.bind(var12)(var9);
                    var2['url'] = var9;
                    var9 = {};
                    var9['category_id'] = var10;
                    var2['query'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var4.bind(var8)(var2);
                    SaveGenerator(address=140);
case 35:
                    return var2;
case 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GUILD_DIRECTORY_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['channelId'] = var6;
                    var6 = var2.body;
                    var3['entries'] = var6;
                    var3 = var4.bind(var5)(var3);
case 39: // try_end0
                    _fun0004_ip = 40; continue _fun0004;
case 37:
                    return var2;
case 41: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'GUILD_DIRECTORY_FETCH_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
case 40:
                    var2 = undefined;
                    return var2;
case 34:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var5.bind(var1)();
    var10 = 200;
    var6 = var6.bind(var1)(var5, var10);
    var5 = var9[var4];
    var11 = var7.bind(var1)(var5);
    var5 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 42; continue _fun0005 }
case 26:
                    var6 = arg1;
case 43: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var10 = _closure1_slot6;
                    var9 = var10.DIRECTORY_CHANNEL_CATEGORY_COUNTS;
                    var8 = var6;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=87);
case 44:
                    return var2;
case 45:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 5;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['channelId'] = var6;
                    var6 = var2.body;
                    var3['counts'] = var6;
                    var3 = var4.bind(var5)(var3);
case 48: // try_end0
                    _fun0005_ip = 49; continue _fun0005;
case 46:
                    return var2;
case 50: // catch_target0
                    CatchBlockStart(arg_register=1);
case 49:
                    var2 = undefined;
                    return var2;
case 42:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var5.bind(var1)();
    var5 = var11.bind(var1)(var5, var10);
    var4 = var9[var4];
    var7 = var7.bind(var1)(var4);
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 51; continue _fun0006 }
case 15:
                    var8 = var6;
                    var7 = var5;
                    var4 = _closure1_slot4;
                    var3 = var4.shouldFetch;
                    var3 = var3.bind(var4)(var6, var5);
                    if(var3) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 5;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'GUILD_DIRECTORY_CACHED_SEARCH';
                    var3['type'] = var6;
                    var6 = var8;
                    var3['channelId'] = var6;
                    var6 = var7;
                    var3['query'] = var6;
                    var3 = var4.bind(var5)(var3);
                    _fun0006_ip = 54; continue _fun0006;
case 52: // try_start_0
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var9 = 5;
                    var3 = var5[var9];
                    var6 = undefined;
                    var10 = var4.bind(var6)(var3);
                    var4 = var10.dispatch;
                    var3 = {};
                    var11 = 'GUILD_DIRECTORY_SEARCH_START';
                    var3['type'] = var11;
                    var13 = var8;
                    var3['channelId'] = var13;
                    var11 = var7;
                    var3['query'] = var11;
                    var3 = var4.bind(var10)(var3);
                    var4 = _closure1_slot0;
                    var3 = 6;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var12 = _closure1_slot6;
                    var10 = var12.DIRECTORY_ENTRIES_SEARCH;
                    var10 = var10.bind(var12)(var13);
                    var3['url'] = var10;
                    var10 = {};
                    var10['query'] = var11;
                    var3['query'] = var10;
                    var10 = true;
                    var3['rejectWithError'] = var10;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=241);
case 55:
                    return var3;
case 56:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'GUILD_DIRECTORY_SEARCH_SUCCESS';
                    var4['type'] = var9;
                    var4['channelId'] = var8;
                    var4['query'] = var7;
                    var7 = var3.body;
                    var4['results'] = var7;
                    var4 = var5.bind(var6)(var4);
case 59: // try_end0
                    _fun0006_ip = 54; continue _fun0006;
case 57:
                    return var3;
case 60: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'GUILD_DIRECTORY_FETCH_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
case 54:
                    var2 = undefined;
                    return var2;
case 51:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var4 = var7.bind(var1)(var4, var10);
    var7 = 9;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/directory_channels/GuildDirectoryActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var3['fetchDirectoryEntries'] = var6;
    var3['fetchDirectoryCounts'] = var5;
    var5 = function addDirectoryGuildEntry() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['addDirectoryGuildEntry'] = var5;
    var5 = function removeDirectoryGuildEntry(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 7;
        var2 = var4[var1];
        var1 = undefined;
        var8 = var3.bind(var1)(var2);
        var7 = var8.delete;
        var2 = {};
        var11 = _closure1_slot6;
        var9 = var11.DIRECTORY_CHANNEL_ENTRY;
        var9 = var9.bind(var11)(var6, var5);
        var2['url'] = var9;
        var9 = {};
        var11 = _closure1_slot0;
        var10 = 8;
        var10 = var4[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.NetworkActionNames;
        var10 = var10.DIRECTORY_GUILD_ENTRY_DELETE;
        var9['event'] = var10;
        var10 = {};
        var10['directory_channel_id'] = var6;
        var10['guild_id'] = var5;
        var9['properties'] = var10;
        var2['trackedActionData'] = var9;
        var9 = true;
        var2['rejectWithError'] = var9;
        var2 = var7.bind(var8)(var2);
        var2 = 5;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var7 = 'GUILD_DIRECTORY_ENTRY_DELETE';
        var2['type'] = var7;
        var2['channelId'] = var6;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['removeDirectoryGuildEntry'] = var5;
    var3['searchDirectoryEntries'] = var4;
    var4 = function clearDirectorySearch(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_DIRECTORY_SEARCH_CLEAR';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearDirectorySearch'] = var4;
    var4 = function updateDirectoryEntry() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateDirectoryEntry'] = var4;
    var4 = function selectDirectoryCategory(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_DIRECTORY_CATEGORY_SELECT';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['categoryId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['selectDirectoryCategory'] = var4;
    var2 = function fetchGuildEntriesForIds() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchGuildEntriesForIds'] = var2;
    return var1;
})();