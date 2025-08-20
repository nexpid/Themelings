// app/modules/content_inventory/ContentInventoryOutboxStore.tsx
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function resetOutboxes() {
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var3 = var2 instanceof Object ? var2 : var3;
        _closure1_slot7 = var3;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot8 = var1;
        var1 = null;
        _closure1_slot9 = var1;
        var1 = false;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var8 = var2.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot7 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot8 = var2;
    var2 = null;
    var _closure1_slot9 = var2;
    var2 = false;
    var _closure1_slot10 = var2;
    var _closure1_slot11 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ContentInventoryOutboxStore() {
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
                var1 = _closure1_slot12;
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
        var1 = 'getMatchingOutboxEntry';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var4 = var1.activity;
                var5 = var1.userId;
                var3 = _closure1_slot7;
                var1 = var3.get;
                var1 = var1.bind(var3)(var5);
                var3 = null;
                if(!(var3 != var1)) { _fun0003_ip = 41; continue _fun0003 }
 37:
                if(!(var3 == var4)) { _fun0003_ip = 45; continue _fun0003 }
 41:
                var3 = undefined;
                return var3;
 45:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.findMatchingEntry;
                var1 = var1.entries;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserOutbox';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot7;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFetchingUserOutbox';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot8;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'deleteOutboxEntryError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isDeletingEntryHistory';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasInitialized';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ContentInventoryOutboxStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        var2 = _closure1_slot13;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = true;
        _closure1_slot11 = var2;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleLogOut() {
        var2 = _closure1_slot13;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleFetchOutboxStart(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = _closure1_slot8;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['CONTENT_INVENTORY_FETCH_OUTBOX_START'] = var9;
    var9 = function handleFetchOutboxSuccess(arg1) {
        var1 = arg1;
        var8 = var1.outbox;
        var3 = var1.userId;
        var5 = _closure1_slot7;
        var4 = var5.set;
        var2 = {};
        var9 = var2;
        var6 = copyDataProperties(var9, var8);
        var6 = global;
        var7 = var6.Date;
        var6 = var7.now;
        var7 = var6.bind(var7)();
        var6 = 'lastFetched';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        var2 = _closure1_slot8;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS'] = var9;
    var9 = function handleFetchOutboxFailure(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = _closure1_slot8;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE'] = var9;
    var9 = function handleDeleteOutboxEntryStart() {
        var1 = null;
        _closure1_slot9 = var1;
        var1 = true;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START'] = var9;
    var9 = function handleDeleteOutboxEntrySuccess(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = var2.entry;
            var _closure2_slot0 = var3;
            var5 = var2.userId;
            var3 = null;
            _closure1_slot9 = var3;
            var6 = _closure1_slot7;
            var4 = var6.get;
            var6 = var4.bind(var6)(var5);
            if(!(var3 != var6)) { _fun0004_ip = 116; continue _fun0004 }
 47:
            var4 = var6.entries;
            var3 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 !== var1;
                return var1;
            };
            var7 = var3.bind(var4)(var1);
            var4 = _closure1_slot7;
            var3 = var4.set;
            var1 = {};
            var9 = var1;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var6 = 'entries';
            var1[var6] = var7;
            var1 = var3.bind(var4)(var5, var1);
            var1 = false;
            _closure1_slot10 = var1;
            var1 = undefined;
            return var1;
 116:
            var1 = false;
            return var1;
        }
    };
    var2['CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS'] = var9;
    var9 = function handleDeleteOutboxEntryFailure(arg1) {
        var1 = arg1;
        var1 = var1.error;
        _closure1_slot9 = var1;
        var1 = false;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE'] = var9;
    var4 = function handleClearError() {
        var1 = null;
        _closure1_slot9 = var1;
        var1 = false;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/content_inventory/ContentInventoryOutboxStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();