// app/modules/wishlists/WishlistRecommendationsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getKey(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = new Array(0);
            var6 = var3;
            var5 = var2;
            var4 = 0;
            var4 = arraySpread(var6, var5, var4);
            var5 = arg2;
            var6 = var3;
            var1 = arraySpread(var6, var5, var4);
            var2 = var3.join;
            var1 = ',';
            var1 = var2.bind(var3)(var1);
            return var1;
case 6:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var6 = 'No user IDs provided';
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function handleUserSettingsStoreUpdate() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot6;
            var1 = _closure1_slot5;
            var1 = var1.locale;
            if(!(var3 !== var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = {};
            _closure1_slot7 = var1;
            var1 = _closure1_slot5;
            var1 = var1.locale;
            var _closure1_slot6 = var1;
            var1 = undefined;
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function WishlistRecommendationsStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 12; continue _fun0004;
case 10:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 12:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var3 = var5.waitFor;
            var1 = _closure1_slot5;
            var1 = var3.bind(var5)(var1);
            var4 = var5.syncWith;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = _closure1_slot10;
            var1 = var4.bind(var5)(var3, var1);
            var1 = _closure1_slot5;
            var1 = var1.locale;
            _closure1_slot6 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getRecommendations';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var1 = var5.length;
                var2 = 0;
                if(!(var2 !== var1)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var1 = var4.length;
                if(!(var2 === var1)) { _fun0005_ip = 15; continue _fun0005 }
case 13:
                var1 = undefined;
                return var1;
case 15:
                var2 = _closure1_slot7;
                var3 = _closure1_slot9;
                var1 = undefined;
                var1 = var3.bind(var1)(var5, var4);
                var1 = var2[var1];
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 7;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleLogout() {
        var1 = {};
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var8;
    var8 = function handleFetchStart(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userIds;
            var4 = var1.applicationIds;
            var1 = var5.length;
            var2 = 0;
            if(!(var2 !== var1)) { _fun0006_ip = 16; continue _fun0006 }
case 13:
            var1 = var4.length;
            if(!(var2 !== var1)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var2 = _closure1_slot9;
            var1 = undefined;
            var5 = var2.bind(var1)(var5, var4);
            var2 = {};
            var7 = _closure1_slot7;
            var8 = var2;
            var4 = copyDataProperties(var8, var7);
            var4 = {};
            var6 = 'loading';
            var4['state'] = var6;
            var2[4] = var4;
            _closure1_slot7 = var2;
            return var1;
case 16:
            var1 = false;
            return var1;
        }
    };
    var2['WISHLIST_RECOMMENDATIONS_FETCH_START'] = var8;
    var8 = function handleFetchSuccess(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userIds;
            var4 = var1.applicationIds;
            var6 = var1.data;
            var1 = var5.length;
            var2 = 0;
            if(!(var2 !== var1)) { _fun0007_ip = 18; continue _fun0007 }
case 19:
            var1 = var4.length;
            if(!(var2 !== var1)) { _fun0007_ip = 18; continue _fun0007 }
case 20:
            var2 = _closure1_slot9;
            var1 = undefined;
            var5 = var2.bind(var1)(var5, var4);
            var2 = {};
            var8 = _closure1_slot7;
            var9 = var2;
            var4 = copyDataProperties(var9, var8);
            var4 = {};
            var7 = 'success';
            var4['state'] = var7;
            var4['data'] = var6;
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var4['fetchedAt'] = var6;
            var2[4] = var4;
            _closure1_slot7 = var2;
            return var1;
case 18:
            var1 = false;
            return var1;
        }
    };
    var2['WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS'] = var8;
    var4 = function handleFetchFailure(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userIds;
            var4 = var1.applicationIds;
            var1 = var5.length;
            var2 = 0;
            if(!(var2 !== var1)) { _fun0008_ip = 21; continue _fun0008 }
case 13:
            var1 = var4.length;
            if(!(var2 !== var1)) { _fun0008_ip = 21; continue _fun0008 }
case 17:
            var2 = _closure1_slot9;
            var1 = undefined;
            var5 = var2.bind(var1)(var5, var4);
            var2 = _closure1_slot7;
            var2 = var2[var5];
            var4 = null;
            var6 = var4 == var2;
            var4 = undefined;
            if(var6) { _fun0008_ip = 5; continue _fun0008 }
case 10:
            var4 = var2.state;
case 5:
            var2 = 'success';
            if(!(var2 !== var4)) { _fun0008_ip = 22; continue _fun0008 }
case 23:
            var2 = {};
            var8 = _closure1_slot7;
            var9 = var2;
            var4 = copyDataProperties(var9, var8);
            var4 = {};
            var6 = 'error';
            var4['state'] = var6;
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var4['fetchedAt'] = var6;
            var2[4] = var4;
            _closure1_slot7 = var2;
            return var1;
case 22:
            var1 = false;
            return var1;
case 21:
            var1 = false;
            return var1;
        }
    };
    var2['WISHLIST_RECOMMENDATIONS_FETCH_FAILURE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/WishlistRecommendationsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();