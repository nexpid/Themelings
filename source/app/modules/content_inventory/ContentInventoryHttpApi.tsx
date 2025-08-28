// app/modules/content_inventory/ContentInventoryHttpApi.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var1 = function _postTrackToContentInventory() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 180; continue _fun0001 }
 10:
                    var8 = arg1;
                    var7 = arg2;
 16: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var6 = _closure1_slot5;
                    var6 = var6.MY_SPOTIFY_CONTENT_INVENTORY;
                    var2['url'] = var6;
                    var6 = {};
                    var6['connection_id'] = var8;
                    var8 = var7;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var6['tracks'] = var7;
                    var2['body'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=110);
 108:
                    return var2;
 110:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 119; continue _fun0001 }
 116: // try_end0
                    return var3;
 119:
                    return var2;
 122: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var10 = var3;
                    var9 = var4;
                    var2 = new var10[var2](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 180:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.ContentInventoryFeedKey;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 314; continue _fun0002 }
 13:
                    var9 = var2.token;
                    var12 = var2.feedId;
                    var10 = var2.feature;
                    var6 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    SaveGenerator(address=41);
 39:
                    return var6;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 311; continue _fun0002 }
 50: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 3;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var8 = var3.HTTP;
                    var7 = var8.get;
                    var3 = {};
                    var14 = _closure1_slot5;
                    var13 = var14.MY_CONTENT_INVENTORY;
                    var9 = var13.bind(var14)(var9);
                    var3['url'] = var9;
                    var9 = {};
                    var11 = _closure1_slot4;
                    var11 = var11.GAME_PROFILE_FEED;
                    var11 = var12 === var11;
                    var9['for_game_profile'] = var11;
                    var9['feature'] = var10;
                    var3['query'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=152);
 150:
                    return var3;
 152:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 252; continue _fun0002 }
 158:
                    var7 = var3.body;
                    var4 = var7;
                    var8 = var7.wait_ms_until_next_fetch;
                    var5 = var8;
                    var7 = null;
                    if(!(var7 != var8)) { _fun0002_ip = 249; continue _fun0002 }
 183:
                    var7 = global;
                    var8 = var7.Date;
                    var9 = var7.Date;
                    var7 = var9.now;
                    var7 = var7.bind(var9)();
                    var15 = var7 + var5;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var16 = var7;
                    var5 = new var16[var8](var15, var14);
                    var8 = var5 instanceof Object ? var5 : var7;
                    var7 = var4;
                    var5 = var8.toISOString;
                    var5 = var5.bind(var8)();
                    var7['expired_at'] = var5;
 249: // try_end0
                    return var4;
 252:
                    return var3;
 255: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.APIError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var16 = var4;
                    var15 = var5;
                    var3 = new var16[var3](var15, var14);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 311:
                    return var2;
 314:
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
    var6 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 305; continue _fun0003 }
 10:
                    var9 = arg1;
                    var8 = arg2;
 16: // try_start_0
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var7 = 5;
                    var2 = var5[var7];
                    var6 = undefined;
                    var10 = var3.bind(var6)(var2);
                    var3 = var10.dispatch;
                    var2 = {};
                    var11 = 'CONTENT_INVENTORY_FETCH_OUTBOX_START';
                    var2['type'] = var11;
                    var12 = var9;
                    var2['userId'] = var12;
                    var2 = var3.bind(var10)(var2);
                    var3 = _closure1_slot0;
                    var2 = 3;
                    var2 = var5[var2];
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var11 = _closure1_slot5;
                    var10 = var11.CONTENT_INVENTORY_OUTBOX;
                    var10 = var10.bind(var11)(var12);
                    var2['url'] = var10;
                    var2['signal'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=137);
 135:
                    return var2;
 137:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 202; continue _fun0003 }
 143:
                    var3 = var2.body;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS';
                    var4['type'] = var7;
                    var4['outbox'] = var3;
                    var7 = var9;
                    var4['userId'] = var7;
                    var4 = var5.bind(var6)(var4);
 199: // try_end0
                    return var3;
 202:
                    return var2;
 205: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var10 = 'CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE';
                    var3['type'] = var10;
                    var3['userId'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = _closure1_slot0;
                    var2 = 4;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 305:
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
    var5 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 378; continue _fun0004 }
 10:
                    var11 = arg1;
                    var12 = arg2;
                    var5 = arg3;
                    var2 = undefined;
                    var3 = undefined;
                    var6 = undefined;
 25: // try_start_0
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var10 = 5;
                    var4 = var13[var10];
                    var14 = var9.bind(var2)(var4);
                    var9 = var14.dispatch;
                    var4 = {};
                    var15 = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START';
                    var4['type'] = var15;
                    var4 = var9.bind(var14)(var4);
                    var9 = _closure1_slot0;
                    var4 = 3;
                    var4 = var13[var4];
                    var4 = var9.bind(var2)(var4);
                    var13 = var4.HTTP;
                    var9 = var13.del;
                    var4 = {};
                    var16 = _closure1_slot5;
                    var15 = var16.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY;
                    var14 = var11;
                    var14 = var14.id;
                    var14 = var15.bind(var16)(var14);
                    var4['url'] = var14;
                    var14 = false;
                    var4['rejectWithError'] = var14;
                    var4 = var9.bind(var13)(var4);
                    SaveGenerator(address=141);
 139:
                    return var4;
 141:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(var9) { _fun0004_ip = 213; continue _fun0004 }
 147:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var13 = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS';
                    var8['type'] = var13;
                    var8['userId'] = var12;
                    var8['entry'] = var11;
                    var8 = var9.bind(var10)(var8);
                    var9 = var5;
                    var8 = null;
                    if(!(var8 != var9)) { _fun0004_ip = 208; continue _fun0004 }
 204:
                    var5 = var5.bind(var2)();
 208: // try_end0
                    _fun0004_ip = 375; continue _fun0004;
 213:
                    return var4;
 216: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var7 = var4;
                    var5 = null;
                    var8 = var5 == var4;
                    var4 = undefined;
                    if(var8) { _fun0004_ip = 254; continue _fun0004 }
 232:
                    var7 = var7.body;
                    var6 = var7;
                    var7 = var5 == var7;
                    var4 = undefined;
                    if(var7) { _fun0004_ip = 254; continue _fun0004 }
 249:
                    var4 = var6.message;
 254:
                    var3 = var4;
                    if(!(var5 == var4)) { _fun0004_ip = 323; continue _fun0004 }
 261:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.FMbL3t;
                    var6 = var5.bind(var6)(var4);
                    _fun0004_ip = 326; continue _fun0004;
 323:
                    var6 = var3;
 326:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE';
                    var3['type'] = var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
 375:
                    return var2;
 378:
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
    var7 = 7;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/content_inventory/ContentInventoryHttpApi.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getMyContentInventory'] = var6;
    var3['getContentInventoryOutbox'] = var5;
    var3['deleteContentInventoryEntryHistory'] = var4;
    var2 = function postTrackToContentInventory() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['postTrackToContentInventory'] = var2;
    return var1;
})();