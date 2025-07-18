// app/modules/content_inventory/ContentInventoryStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function updateFeeds(arg1) {
        var4 = _closure1_slot8;
        var2 = arg1;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2 = global;
        var5 = var2.Map;
        var6 = _closure1_slot8;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var7 = var4;
        var2 = new var7[var5](var6, var5);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot8 = var2;
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
    var _closure1_slot8 = var8;
    var8 = var2.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot9 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot10 = var2;
    var2 = false;
    var _closure1_slot11 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ContentInventoryStore() {
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
        var1 = 'getFeeds';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFeed';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot8;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getFeedState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot9;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getLastFeedFetchDate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot10;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getFilters';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getFeedRequestId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = this;
                var2 = var3.getFeed;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0003_ip = 34; continue _fun0003 }
 28:
                var1 = var2.request_id;
 34:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getDebugImpressionCappingDisabled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getMatchingInboxEntry';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var4 = var2.activity;
                var3 = var2.userId;
                var _closure3_slot0 = var3;
                var3 = var2.feedId;
                var2 = var5.getFeed;
                var2 = var2.bind(var5)(var3);
                var3 = null;
                if(!(var3 != var2)) { _fun0004_ip = 50; continue _fun0004 }
 46:
                if(!(var3 == var4)) { _fun0004_ip = 54; continue _fun0004 }
 50:
                var3 = undefined;
                return var3;
 54:
                var5 = var2.entries;
                var3 = var5.reduce;
                var2 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var5 = arg1;
                        var3 = arg2;
                        var1 = var3.content;
                        var2 = var1.author_id;
                        var1 = _closure3_slot0;
                        if(!(var2 !== var1)) { _fun0005_ip = 46; continue _fun0005 }
 28:
                        var1 = new Array(0);
                        var6 = 0;
                        var8 = var1;
                        var7 = var5;
                        var2 = arraySpread(var8, var7, var6);
                        _fun0005_ip = 82; continue _fun0005;
 46:
                        var2 = new Array(1);
                        var6 = 0;
                        var8 = var2;
                        var7 = var5;
                        var4 = arraySpread(var8, var7, var6);
                        var3 = var3.content;
                        var2[var4] = var3;
                        var3 = 1;
                        var3 = var4 + var3;
                        var1 = var2;
 82:
                        return var1;
                    }
                };
                var1 = new Array(0);
                var3 = var3.bind(var5)(var2, var1);
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.findMatchingEntry;
                var1 = var1.bind(var2)(var3, var4);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ContentInventoryStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var3 = var2;
        var1 = new var3[var1](var2);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleSetContentInventoryFeed(arg1) {
        var1 = arg1;
        var5 = var1.feedId;
        var _closure2_slot0 = var5;
        var1 = var1.feed;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot13;
        var1 = undefined;
        var3 = function(arg1) {
            var4 = arg1;
            var3 = var4.set;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3 = var4.bind(var1)(var3);
        var4 = _closure1_slot10;
        var3 = var4.set;
        var2 = global;
        var2 = var2.Date;
        var6 = var2.prototype;
        var6 = Object.create(var6, {constructor: {value: var2}});
        var9 = var6;
        var2 = new var9[var2](var8);
        var2 = var2 instanceof Object ? var2 : var6;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var2['CONTENT_INVENTORY_SET_FEED'] = var9;
    var9 = function handleSetContentInventoryFeedState(arg1) {
        var1 = arg1;
        var4 = var1.feedId;
        var3 = var1.state;
        var2 = _closure1_slot9;
        var1 = var2.set;
        var1 = var1.bind(var2)(var4, var3);
        var1 = undefined;
        return var1;
    };
    var2['CONTENT_INVENTORY_SET_FEED_STATE'] = var9;
    var9 = function handleSetFilters(arg1) {
        var1 = arg1;
        var2 = var1.filters;
        var _closure1_slot7 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CONTENT_INVENTORY_SET_FILTERS'] = var9;
    var9 = function handleClearContentInventoryFeed(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var5 = var1.feedId;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot8;
            var3 = var4.has;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0006_ip = 39; continue _fun0006 }
 35:
            var3 = false;
            return var3;
 39:
            var3 = _closure1_slot13;
            var1 = undefined;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.delete;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var2['CONTENT_INVENTORY_CLEAR_FEED'] = var9;
    var4 = function handleDebugToggleImpressionCapping() {
        var1 = _closure1_slot11;
        var1 = !var1;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING'] = var4;
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
    var4 = 'modules/content_inventory/ContentInventoryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();