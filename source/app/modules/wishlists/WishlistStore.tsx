// app/modules/wishlists/WishlistStore.tsx
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getOrCreateEntry(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot9;
            var1 = var3[var4];
            var2 = null;
            if(!(var1 == var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = {'data': null, 'status': 'not_loaded'};
            var3[var4] = var2;
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function WishlistStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'get';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 11; continue _fun0004 }
case 7:
                var1 = {'data': null, 'status': 'not_loaded'};
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'getWishlist';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = var1.data;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getWishlistItems';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = this;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var4 = var1.data;
                var2 = null;
                var3 = var2 == var4;
                var1 = undefined;
                if(var3) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                var3 = var4.getSkuIds;
                var1 = var3.bind(var4)();
case 12:
                if(!(var2 == var1)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var1 = new Array(0);
case 14:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasSkuId';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = this;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var5 = var1.data;
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0006_ip = 15; continue _fun0006 }
case 13:
                var4 = var5.hasSkuId;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 15:
                var1 = var1 != var2;
                if(!var1) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                var1 = var2;
case 16:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getStatus';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = var1.status;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.getStatus;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = 'fetching';
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.getStatus;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = 'error';
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = var1.error;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getUpdatedAt';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = var1.updatedAt;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getLastFetchedAt';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = this;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = var1.lastFetchedAt;
            return var1;
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.wishlistId;
        var2 = _closure1_slot11;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        var3 = 'fetching';
        var2['status'] = var3;
        var2['error'] = var1;
        return var1;
    };
    var2['WISHLIST_FETCH_START'] = var9;
    var9 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var5 = var1.wishlistId;
        var4 = var1.wishlistData;
        var2 = var1.updatedAt;
        var3 = _closure1_slot11;
        var1 = undefined;
        var3 = var3.bind(var1)(var5);
        var3['data'] = var4;
        var4 = 'success';
        var3['status'] = var4;
        var3['error'] = var1;
        var3['updatedAt'] = var2;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var3['lastFetchedAt'] = var2;
        return var1;
    };
    var2['WISHLIST_FETCH_SUCCESS'] = var9;
    var9 = function handleFetchFailure(arg1) {
        var1 = arg1;
        var4 = var1.wishlistId;
        var3 = var1.error;
        var2 = _closure1_slot11;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var4 = 'error';
        var2['status'] = var4;
        var2['error'] = var3;
        return var1;
    };
    var2['WISHLIST_FETCH_FAILURE'] = var9;
    var9 = function handleAddSkuSuccess(arg1) {
        var1 = arg1;
        var4 = var1.wishlistId;
        var2 = var1.wishlistData;
        var3 = _closure1_slot11;
        var1 = undefined;
        var3 = var3.bind(var1)(var4);
        var3['data'] = var2;
        var2 = 'success';
        var3['status'] = var2;
        var3['error'] = var1;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var3['lastFetchedAt'] = var2;
        return var1;
    };
    var2['WISHLIST_ADD_SKU_SUCCESS'] = var9;
    var9 = function handleAddSkuFailure(arg1) {
        var1 = arg1;
        var4 = var1.error;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.captureException;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['WISHLIST_ADD_SKU_FAILURE'] = var9;
    var9 = function handleRemoveSkuStart(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var5 = var1.wishlistId;
            var1 = var1.skuId;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot11;
            var1 = undefined;
            var3 = var3.bind(var1)(var5);
            var6 = var3.data;
            var5 = null;
            if(!(var5 != var6)) { _fun0007_ip = 18; continue _fun0007 }
case 19:
            var5 = _closure1_slot8;
            var2 = {};
            var6 = var3.data;
            var6 = var6.id;
            var2['id'] = var6;
            var6 = var3.data;
            var6 = var6.userId;
            var2['userId'] = var6;
            var6 = var3.data;
            var7 = var6.items;
            var6 = var7.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.skuId;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var4 = var6.bind(var7)(var4);
            var2['items'] = var4;
            var4 = var3.data;
            var4 = var4.applications;
            var2['applications'] = var4;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var9 = var4;
            var8 = var2;
            var2 = new var9[var5](var8, var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['data'] = var2;
case 18:
            return var1;
        }
    };
    var2['WISHLIST_REMOVE_SKU_START'] = var9;
    var9 = function handleRemoveSkuSuccess(arg1) {
        var1 = arg1;
        var4 = var1.wishlistId;
        var2 = var1.wishlistData;
        var3 = _closure1_slot11;
        var1 = undefined;
        var3 = var3.bind(var1)(var4);
        var3['data'] = var2;
        var2 = 'success';
        var3['status'] = var2;
        var3['error'] = var1;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var3['lastFetchedAt'] = var2;
        return var1;
    };
    var2['WISHLIST_REMOVE_SKU_SUCCESS'] = var9;
    var9 = function handleRemoveSkuFailure(arg1) {
        var1 = arg1;
        var5 = var1.wishlistId;
        var4 = var1.error;
        var3 = _closure1_slot11;
        var1 = undefined;
        var3 = var3.bind(var1)(var5);
        var3['updatedAt'] = var1;
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 6;
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.captureException;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['WISHLIST_REMOVE_SKU_FAILURE'] = var9;
    var9 = function handleUpdateVisibilitySuccess(arg1) {
        var1 = arg1;
        var3 = var1.wishlistId;
        var2 = _closure1_slot11;
        var1 = undefined;
        var3 = var2.bind(var1)(var3);
        var2 = 'success';
        var3['status'] = var2;
        var3['error'] = var1;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var3['lastFetchedAt'] = var2;
        return var1;
    };
    var2['WISHLIST_UPDATE_VISIBILITY_SUCCESS'] = var9;
    var9 = function handleUpdateVisibilityFailure(arg1) {
        var1 = arg1;
        var4 = var1.error;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.captureException;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['WISHLIST_UPDATE_VISIBILITY_FAILURE'] = var9;
    var9 = function handleReorderStart(arg1) {
        var1 = arg1;
        var4 = var1.wishlistId;
        var3 = var1.newWishlistData;
        var2 = _closure1_slot11;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2['data'] = var3;
        return var1;
    };
    var2['WISHLIST_REORDER_START'] = var9;
    var9 = function handleReorderSuccess(arg1) {
        var1 = arg1;
        var4 = var1.wishlistId;
        var2 = var1.wishlistData;
        var3 = _closure1_slot11;
        var1 = undefined;
        var3 = var3.bind(var1)(var4);
        var3['data'] = var2;
        var2 = 'success';
        var3['status'] = var2;
        var3['error'] = var1;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var3['lastFetchedAt'] = var2;
        return var1;
    };
    var2['WISHLIST_REORDER_SUCCESS'] = var9;
    var9 = function handleReorderFailure(arg1) {
        var1 = arg1;
        var5 = var1.wishlistId;
        var4 = var1.error;
        var3 = _closure1_slot11;
        var1 = undefined;
        var3 = var3.bind(var1)(var5);
        var3['updatedAt'] = var1;
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 6;
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.captureException;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['WISHLIST_REORDER_FAILURE'] = var9;
    var4 = function handleWishlistItemPurchased(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var5 = var1.recipientId;
            var7 = var1.skuId;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.default;
            var3 = var4.getFirstWishlistId;
            var3 = var3.bind(var4)(var5);
            var8 = null;
            var4 = var8 != var3;
            if(!var4) { _fun0008_ip = 4; continue _fun0008 }
case 20:
            var5 = _closure1_slot9;
            var5 = var5[var3];
            var4 = var8 != var5;
case 4:
            var6 = undefined;
            if(!var4) { _fun0008_ip = 21; continue _fun0008 }
case 22:
            var5 = _closure1_slot9;
            var5 = var5[var3];
            var5 = var5.data;
            var4 = var8 != var5;
            var6 = var5;
case 21:
            if(!var4) { _fun0008_ip = 23; continue _fun0008 }
case 24:
            var5 = var6.hasSkuId;
            var4 = var5.bind(var6)(var7);
case 23:
            if(!var4) { _fun0008_ip = 25; continue _fun0008 }
case 26:
            var2 = _closure1_slot9;
            var2 = var2[var3];
            var2['updatedAt'] = var1;
case 25:
            return var1;
        }
    };
    var2['WISHLIST_ITEM_PURCHASED'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/WishlistStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();