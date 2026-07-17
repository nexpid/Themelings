// app/modules/wishlists/records/CollectiblesWishlistItemRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function createCollectiblesItemFromServerResponse(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var4 = var3.type;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 13;
            var2 = var2[var7];
            var6 = undefined;
            var2 = var5.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var4)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var4)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var4)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_FRAME;
            if(!(var2 !== var4)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var2 = null;
            return var2;
case 46:
            var4 = _closure1_slot11;
            var2 = var4.fromServer;
            var2 = var2.bind(var4)(var3);
            return var2;
case 44:
            var4 = _closure1_slot9;
            var2 = var4.fromServer;
            var2 = var2.bind(var4)(var3);
            return var2;
case 42:
            var4 = _closure1_slot10;
            var2 = var4.fromServer;
            var2 = var2.bind(var4)(var3);
            return var2;
case 40:
            var2 = _closure1_slot7;
            var1 = var2.fromServer;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.transformSKUToCollectiblesItem;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var7[var4];
    var5 = var5.bind(var1)(var4);
    var4 = 12;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.SKUProductLines;
    var _closure1_slot13 = var4;
    var4 = function(arg1) {
        var5 = function CollectiblesWishlistItemRecord(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var4 = this;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var7 = undefined;
                var1 = var1.bind(var7)(var4, var2);
                var11 = new Array(1);
                var11[0] = var3;
                var1 = _closure1_slot5;
                var10 = var1.bind(var7)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot17;
                var1 = var1.bind(var7)();
                if(var1) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var4, var11);
                _fun0006_ip = 50; continue _fun0006;
case 48:
                var5 = global;
                var9 = var5.Reflect;
                var6 = var9.construct;
                var5 = _closure1_slot5;
                var5 = var5.bind(var7)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var9)(var10, var11, var5);
case 50:
                var1 = var2.bind(var7)(var4, var1);
                var2 = _closure1_slot13;
                var2 = var2.COLLECTIBLES;
                var1['skuProductLine'] = var2;
                var2 = var3.bundle_items;
                var6 = null;
                if(!(var6 == var2)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                var2 = var3.collectibles_item;
                if(!(var6 == var2)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                var2 = var3.skipValidation;
                if(var2) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                var2 = global;
                var5 = var2.Error;
                var2 = var5.prototype;
                var4 = Object.create(var2, {constructor: {value: var5}});
                var14 = 'Collectibles wishlist item missing both collectibles_item and bundle_items';
                var15 = var4;
                var2 = new var15[var5](var14, var13);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
case 53:
                var4 = _closure1_slot18;
                var2 = var3.collectibles_item;
                var2 = var4.bind(var7)(var2);
                if(!(var6 != var2)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                var1['collectiblesItem'] = var2;
                _fun0006_ip = 55; continue _fun0006;
case 57:
                var2 = global;
                var5 = var2.Error;
                var2 = var5.prototype;
                var4 = Object.create(var2, {constructor: {value: var5}});
                var14 = 'Collectibles item not found';
                var15 = var4;
                var2 = new var15[var5](var14, var13);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
case 51:
                var2 = new Array(0);
                var4 = _closure1_slot15;
                var3 = var3.bundle_items;
                var5 = var4.bind(var7)(var3);
                var4 = var5.bind(var7)();
                var3 = var4.done;
                if(var3) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                var9 = _closure1_slot18;
                var3 = var4.value;
                var9 = var9.bind(var7)(var3);
                if(!(var6 != var9)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                var3 = var2.push;
                var3 = var3.bind(var2)(var9);
case 61:
                var9 = var5.bind(var7)();
                var3 = var9.done;
                var4 = var9;
                if(!var3) { _fun0006_ip = 60; continue _fun0006 }
case 59:
                var4 = var2.length;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                var1['bundleItems'] = var2;
case 55:
                return var1;
case 63:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var14 = 'Bundle has no valid items';
                var15 = var2;
                var1 = new var15[var3](var14, var13);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot6;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot3;
        var1 = {};
        var2 = 'fromServer';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var8 = var1;
                var7 = var2;
                var4 = copyDataProperties(var8, var7);
                var5 = var2.sku;
                var4 = null;
                var5 = var4 != var5;
                var4 = undefined;
                if(!var5) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                var6 = _closure1_slot12;
                var5 = var6.createFromServer;
                var2 = var2.sku;
                var4 = var5.bind(var6)(var2);
case 65:
                var2 = 'sku';
                var1[1] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var9 = var2;
                var8 = var1;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var7 = 'fromSKU';
        var1['key'] = var7;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var1 = _closure1_slot8;
                var3 = undefined;
                var4 = var1.bind(var3)(var5);
                var1 = null;
                if(!(var1 != var4)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                var6 = _closure2_slot0;
                var2 = {};
                var8 = var5.id;
                var2['sku_id'] = var8;
                var7 = _closure1_slot13;
                var7 = var7.COLLECTIBLES;
                var2['sku_product_line'] = var7;
                var7 = var5.name;
                var2['sku_name'] = var7;
                var2['sku'] = var5;
                var5 = true;
                var2['skipValidation'] = var5;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var2;
                var2 = new var10[var6](var9, var8);
                var2 = var2 instanceof Object ? var2 : var5;
                var7 = var4.type;
                var6 = 'single';
                var5 = undefined;
                if(!(var6 === var7)) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                var5 = var4.item;
case 69:
                var2['collectiblesItem'] = var5;
                var6 = var4.type;
                var5 = 'bundle';
                var3 = undefined;
                if(!(var5 === var6)) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                var3 = var4.items;
case 71:
                var2['bundleItems'] = var3;
                return var2;
case 67:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var _closure1_slot14 = var4;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/wishlists/records/CollectiblesWishlistItemRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function isCollectiblesWishlistItemRecord(arg1) {
        var2 = _closure1_slot14;
        var1 = arg1;
        var1 = var1 instanceof var2;
        return var1;
    };
    var3['isCollectiblesWishlistItemRecord'] = var2;
    return var1;
})();