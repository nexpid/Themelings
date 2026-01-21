// app/modules/directory_channels/GuildDirectoryActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var11;
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
                    var12 = arg2;
                    var11 = arguments[3];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = undefined;
                    if(!(var11 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = _closure1_slot5;
                    var11 = var2.UNCATEGORIZED;
case 4:
                    SaveGenerator(address=42);
case 6:
                    return var4;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var6 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var3 = 7;
                    var3 = var14[var3];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.post;
                    var3 = {};
                    var10 = _closure1_slot6;
                    var9 = var10.DIRECTORY_CHANNEL_ENTRY;
                    var9 = var9.bind(var10)(var8, var12);
                    var3['url'] = var9;
                    var9 = {};
                    var10 = arg3;
                    var9['description'] = var10;
                    var9['primary_category_id'] = var11;
                    var3['body'] = var9;
                    var9 = {};
                    var13 = _closure1_slot0;
                    var10 = 8;
                    var10 = var14[var10];
                    var10 = var13.bind(var4)(var10);
                    var10 = var10.NetworkActionNames;
                    var10 = var10.DIRECTORY_GUILD_ENTRY_CREATE;
                    var9['event'] = var10;
                    var10 = {};
                    var10['directory_channel_id'] = var8;
                    var10['guild_id'] = var12;
                    var10['primary_category_id'] = var11;
                    var9['properties'] = var10;
                    var3['trackedActionData'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=196);
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
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var11[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var11[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var11[var2];
    var2 = var10.bind(var1)(var2);
    var2 = var2.DirectoryEntryCategories;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var11[var2];
    var2 = var10.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot6 = var2;
    var2 = 4;
    var6 = var11[var2];
    var8 = var5.bind(var1)(var6);
    var6 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var6 = arg1;
                    var10 = arg2;
case 16: // try_start_0
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
case 17:
                    return var2;
case 18:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 19; continue _fun0002 }
case 20:
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
case 21: // try_end0
                    _fun0002_ip = 22; continue _fun0002;
case 19:
                    return var2;
case 23: // catch_target0
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
case 22:
                    var2 = undefined;
                    return var2;
case 14:
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
    var7 = var6.bind(var1)();
    var6 = 200;
    var8 = var8.bind(var1)(var7, var6);
    var7 = var11[var2];
    var9 = var5.bind(var1)(var7);
    var7 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 15:
                    var6 = arg1;
case 25: // try_start_0
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
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 28; continue _fun0003 }
case 29:
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
case 30: // try_end0
                    _fun0003_ip = 31; continue _fun0003;
case 28:
                    return var2;
case 32: // catch_target0
                    CatchBlockStart(arg_register=1);
case 31:
                    var2 = undefined;
                    return var2;
case 24:
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
    var7 = var7.bind(var1)();
    var7 = var9.bind(var1)(var7, var6);
    var2 = var11[var2];
    var5 = var5.bind(var1)(var2);
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 33; continue _fun0004 }
case 16:
                    var8 = var6;
                    var7 = var5;
                    var4 = _closure1_slot4;
                    var3 = var4.shouldFetch;
                    var3 = var3.bind(var4)(var6, var5);
                    if(var3) { _fun0004_ip = 34; continue _fun0004 }
case 35:
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
                    _fun0004_ip = 36; continue _fun0004;
case 34: // try_start_0
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
case 37:
                    return var3;
case 38:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 39; continue _fun0004 }
case 40:
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
case 41: // try_end0
                    _fun0004_ip = 36; continue _fun0004;
case 39:
                    return var3;
case 42: // catch_target0
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
case 36:
                    var2 = undefined;
                    return var2;
case 33:
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
    var2 = var2.bind(var1)();
    var6 = var5.bind(var1)(var2, var6);
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var10 = arguments[3];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 16:
                    var4 = undefined;
                    if(!(var10 === var4)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var2 = _closure1_slot5;
                    var10 = var2.UNCATEGORIZED;
case 44:
                    SaveGenerator(address=39);
case 46:
                    return var4;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var7 = var3.HTTP;
                    var6 = var7.patch;
                    var3 = {};
                    var12 = _closure1_slot6;
                    var11 = var12.DIRECTORY_CHANNEL_ENTRY;
                    var9 = arg2;
                    var9 = var11.bind(var12)(var8, var9);
                    var3['url'] = var9;
                    var9 = {};
                    var11 = arg3;
                    var9['description'] = var11;
                    var9['primary_category_id'] = var10;
                    var3['body'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=140);
case 17:
                    return var3;
case 18:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 50; continue _fun0005 }
case 20:
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
case 50:
                    return var3;
case 48:
                    return var2;
case 43:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var5 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 51; continue _fun0006 }
case 15:
                    var6 = arg1;
                    var9 = arg2;
case 16: // try_start_0
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
case 52:
                    return var2;
case 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 54; continue _fun0006 }
case 55:
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
case 56: // try_end0
                    _fun0006_ip = 57; continue _fun0006;
case 54:
                    return var2;
case 58: // catch_target0
                    CatchBlockStart(arg_register=1);
case 57:
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
    var2 = var2.bind(var1)();
    var9 = 9;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/directory_channels/GuildDirectoryActionCreators.tsx';
    var9 = var10.bind(var11)(var9);
    var3['fetchDirectoryEntries'] = var8;
    var3['fetchDirectoryCounts'] = var7;
    var7 = function addDirectoryGuildEntry() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['addDirectoryGuildEntry'] = var7;
    var7 = function removeDirectoryGuildEntry(arg1, arg2) {
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
    var3['removeDirectoryGuildEntry'] = var7;
    var3['searchDirectoryEntries'] = var6;
    var6 = function(arg1) {
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
    var3['clearDirectorySearch'] = var6;
    var3['updateDirectoryEntry'] = var5;
    var4 = function(arg1, arg2) {
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
    var3['fetchGuildEntriesForIds'] = var2;
    return var1;
})();