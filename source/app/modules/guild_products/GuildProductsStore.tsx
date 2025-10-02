// app/modules/guild_products/GuildProductsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function makeProductListingGuildIndex(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'guild:';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function makeProductListingGuildPublishedIndex(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'guild:';
        var2 = arg1;
        var1 = ':published';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var11 = 0;
    var2 = var7[var11];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var10 = 1;
    var2 = var7[var10];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var5 = 2;
    var2 = var7[var5];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = {};
    var2['NOT_FETCHED'] = var11;
    var4 = 'NOT_FETCHED';
    var2[var11] = var4;
    var2['FETCHING'] = var10;
    var4 = 'FETCHING';
    var2[var10] = var4;
    var2['FETCHED'] = var5;
    var4 = 'FETCHED';
    var2[var5] = var4;
    var _closure1_slot7 = var2;
    var4 = {};
    var _closure1_slot8 = var4;
    var4 = {};
    var _closure1_slot9 = var4;
    var4 = {};
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var5 = 10;
    var4 = var5 * var4;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var12 = var4.SecondaryIndexMap;
    var4 = var12.prototype;
    var10 = Object.create(var4, {constructor: {value: var12}});
    var15 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot15;
            var1 = var2.guild_id;
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = new Array(1);
            var1[0] = var3;
            var3 = var2.published;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var1.push;
            var4 = _closure1_slot16;
            var2 = var2.guild_id;
            var2 = var4.bind(var5)(var2);
            var2 = var3.bind(var1)(var2);
case 6:
            return var1;
        }
    };
    var14 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.extractTimestamp;
            var2 = var1.id;
            var2 = var3.bind(var4)(var2);
            var1 = var1.published;
            if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = 1000000000000.0;
            var1 = var1 - var2;
            _fun0003_ip = 3; continue _fun0003;
case 8:
            var1 = -var2;
case 3:
            return var1;
        }
    };
    var16 = var10;
    var4 = new var16[var12](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot12 = var4;
    var4 = new Array(0);
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var10 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildProductsStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 8; continue _fun0004 }
case 10:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 11; continue _fun0004;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 11:
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
        var1 = 'getGuildProductsForGuildFetchState';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot8;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                var2 = _closure1_slot7;
                var1 = var2.NOT_FETCHED;
case 12:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuildProduct';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGuildProductsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = arg1;
                var1 = arg2;
                var1 = var1.publishedOnly;
                var2 = null;
                if(!(var2 != var6)) { _fun0006_ip = 14; continue _fun0006 }
case 13:
                var3 = _closure1_slot12;
                var2 = var3.values;
                if(var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                var5 = _closure1_slot15;
                var1 = undefined;
                var1 = var5.bind(var1)(var6);
                _fun0006_ip = 17; continue _fun0006;
case 15:
                var5 = _closure1_slot16;
                var4 = undefined;
                var1 = var5.bind(var4)(var6);
case 17:
                var1 = var2.bind(var3)(var1);
                _fun0006_ip = 18; continue _fun0006;
case 14:
                var1 = _closure1_slot13;
case 18:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGuildProductFetchState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot9;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0007_ip = 12; continue _fun0007 }
case 13:
                var2 = _closure1_slot7;
                var1 = var2.NOT_FETCHED;
case 12:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isGuildProductsCacheExpired';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var3 = var1.bind(var2)();
                var4 = _closure1_slot10;
                var2 = arg1;
                var4 = var4[var2];
                var2 = null;
                var5 = var2 != var4;
                var2 = 0;
                if(!var5) { _fun0008_ip = 19; continue _fun0008 }
case 20:
                var2 = var4;
case 19:
                var2 = var3 - var2;
                var1 = _closure1_slot11;
                var1 = var2 > var1;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var4.bind(var1)(var10);
    var4 = 'GuildProductsStore';
    var10['displayName'] = var4;
    var4 = 9;
    var4 = var7[var4];
    var15 = var9.bind(var1)(var4);
    var4 = {};
    var11 = function handleConnectionOpen() {
        var3 = _closure1_slot12;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = {};
        _closure1_slot8 = var1;
        var1 = {};
        _closure1_slot9 = var1;
        var1 = {};
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CONNECTION_OPEN'] = var11;
    var11 = function handleFetchGuildProducts(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var3 = _closure1_slot8;
        var2 = _closure1_slot7;
        var2 = var2.FETCHING;
        var3[var5] = var2;
        var4 = _closure1_slot12;
        var3 = var4.values;
        var2 = _closure1_slot15;
        var1 = undefined;
        var2 = var2.bind(var1)(var5);
        var7 = var3.bind(var4)(var2);
        var4 = new Array(0);
        var6 = 0;
        var8 = var4;
        var2 = arraySpread(var8, var7, var6);
        var3 = var4.forEach;
        var2 = function(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['GUILD_PRODUCTS_FETCH'] = var11;
    var11 = function handleFetchProductsSuccess(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = var1.products;
        var5 = _closure1_slot8;
        var2 = _closure1_slot7;
        var2 = var2.FETCHED;
        var5[var4] = var2;
        var2 = _closure1_slot10;
        var1 = global;
        var5 = var1.Date;
        var1 = var5.now;
        var1 = var1.bind(var5)();
        var2[var4] = var1;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var2 = arg1;
            var5 = _closure1_slot12;
            var4 = var5.set;
            var3 = var2.id;
            var3 = var4.bind(var5)(var3, var2);
            var3 = _closure1_slot9;
            var2 = var2.id;
            var1 = _closure1_slot7;
            var1 = var1.FETCHED;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_PRODUCTS_FETCH_SUCCESS'] = var11;
    var11 = function handleFetchProductsFailure(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot8;
        var1 = _closure1_slot7;
        var1 = var1.FETCHED;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_PRODUCTS_FETCH_FAILURE'] = var11;
    var11 = function handleCreateProduct(arg1) {
        var1 = arg1;
        var4 = var1.product;
        var3 = _closure1_slot12;
        var2 = var3.set;
        var1 = var4.id;
        var1 = var2.bind(var3)(var1, var4);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_PRODUCT_CREATE'] = var11;
    var11 = function handleUpdateProduct(arg1) {
        var1 = arg1;
        var4 = var1.product;
        var3 = _closure1_slot12;
        var2 = var3.set;
        var1 = var4.id;
        var1 = var2.bind(var3)(var1, var4);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_PRODUCT_UPDATE'] = var11;
    var11 = function handleDeleteProduct(arg1) {
        var1 = arg1;
        var3 = var1.productId;
        var2 = _closure1_slot12;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_PRODUCT_DELETE'] = var11;
    var11 = function handleFetchGuildProduct(arg1) {
        var1 = arg1;
        var3 = var1.productId;
        var2 = _closure1_slot9;
        var1 = _closure1_slot7;
        var1 = var1.FETCHING;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_PRODUCT_FETCH'] = var11;
    var11 = function handleFetchProductSuccess(arg1) {
        var1 = arg1;
        var4 = var1.product;
        var5 = _closure1_slot9;
        var3 = var4.id;
        var2 = _closure1_slot7;
        var2 = var2.FETCHED;
        var5[var3] = var2;
        var3 = _closure1_slot12;
        var2 = var3.set;
        var1 = var4.id;
        var1 = var2.bind(var3)(var1, var4);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_PRODUCT_FETCH_SUCCESS'] = var11;
    var8 = function handleFetchProductFailure(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.productId;
            var2 = var1.error;
            var5 = _closure1_slot9;
            var4 = _closure1_slot7;
            var4 = var4.FETCHED;
            var5[var3] = var4;
            var4 = var2.status;
            var2 = 404;
            if(!(var2 === var4)) { _fun0009_ip = 21; continue _fun0009 }
case 22:
            var2 = _closure1_slot12;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
case 21:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_PRODUCT_FETCH_FAILURE'] = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var16 = var8;
    var14 = var4;
    var4 = new var16[var10](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_products/GuildProductsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();