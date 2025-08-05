// app/modules/collectibles/records/CollectiblesStoreListingRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var7 = function parseStylesResponse(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var2 = null;
            var1 = var4;
            if(!(var2 != var1)) { _fun0002_ip = 103; continue _fun0002 }
 14:
            var2 = {};
            var7 = var4.background_colors;
            var6 = var7.map;
            var5 = function(arg1) {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var4 = _closure1_slot0;
                var1 = 7;
                var1 = var5[var1];
                var5 = var4.bind(var3)(var1);
                var4 = var5.int2hex;
                var1 = arg1;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var2['backgroundColors'] = var5;
            var7 = var4.button_colors;
            var6 = var7.map;
            var5 = function(arg1) {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var4 = _closure1_slot0;
                var1 = 7;
                var1 = var5[var1];
                var5 = var4.bind(var3)(var1);
                var4 = var5.int2hex;
                var1 = arg1;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var2['buttonColors'] = var5;
            var5 = var4.confetti_colors;
            var4 = var5.map;
            var3 = function(arg1) {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var4 = _closure1_slot0;
                var1 = 7;
                var1 = var5[var1];
                var5 = var4.bind(var3)(var1);
                var4 = var5.int2hex;
                var1 = arg1;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var2['confettiColors'] = var3;
            var1 = var2;
 103:
            return var1;
        }
    };
    var _closure1_slot8 = var7;
    var2 = function(arg1) {
        var5 = function CollectiblesStoreListingRecord(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot6;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 65; continue _fun0003 }
 52:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0003_ip = 103; continue _fun0003;
 65:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
 103:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.storeListingId;
                var1['storeListingId'] = var3;
                var3 = var2.skuId;
                var1['skuId'] = var3;
                var3 = var2.name;
                var1['name'] = var3;
                var4 = var2.summary;
                var3 = var4.trim;
                var3 = var3.bind(var4)();
                var1['summary'] = var3;
                var3 = var2.unpublishedAt;
                var1['unpublishedAt'] = var3;
                var2 = var2.styles;
                var1['styles'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot4;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var8 = var3.store_listing_id;
                var6 = var3.sku_id;
                var7 = var3.unpublished_at;
                var5 = var3.styles;
                var2 = {'store_listing_id': 0, 'sku_id': 0, 'unpublished_at': 0, 'styles': 0};
                var4 = null;
                var11 = var2;
                var10 = null;
                var1 = silentSetPrototypeOf(var11, var10);
                var11 = {};
                var10 = var3;
                var9 = var2;
                var10 = copyDataProperties(var11, var10, var9);
                var3 = _closure2_slot0;
                var1 = {};
                var11 = var1;
                var2 = copyDataProperties(var11, var10);
                var2 = 'storeListingId';
                var1[var2] = var8;
                var2 = 'skuId';
                var1[var2] = var6;
                var2 = var4 != var7;
                if(!var2) { _fun0004_ip = 136; continue _fun0004 }
 105:
                var2 = global;
                var2 = var2.Date;
                var6 = var2.prototype;
                var6 = Object.create(var6, {constructor: {value: var2}});
                var12 = var6;
                var11 = var7;
                var2 = new var12[var2](var11, var10);
                var4 = var2 instanceof Object ? var2 : var6;
 136:
                var2 = 'unpublishedAt';
                var1[var2] = var4;
                var4 = _closure1_slot8;
                var2 = undefined;
                var4 = var4.bind(var2)(var5);
                var2 = 'styles';
                var1[var2] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var11 = var1;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/CollectiblesStoreListingRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();