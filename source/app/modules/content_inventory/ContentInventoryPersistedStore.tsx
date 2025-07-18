// app/modules/content_inventory/ContentInventoryPersistedStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 344; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function updateImpressionCaches() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0005_ip = 11; continue _fun0005 }
 9:
            var2 = false;
 11:
            if(var2) { _fun0005_ip = 45; continue _fun0005 }
 14:
            var2 = global;
            var3 = var2.Date;
            var2 = var3.now;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot10;
            if(!(!(var3 < var2))) { _fun0005_ip = 517; continue _fun0005 }
 45:
            var4 = global;
            var3 = var4.Date;
            var2 = var3.now;
            var3 = var2.bind(var3)();
            var2 = 2592000000.0;
            var8 = var3 - var2;
            var2 = _closure1_slot7;
            var2 = var2.itemImpressions;
            var2 = var2.length;
            var15 = 0;
            var2 = var15 < var2;
            var14 = 1;
            var13 = 2;
            var6 = 0;
            var5 = 0;
            var7 = 0;
            if(!var2) { _fun0005_ip = 183; continue _fun0005 }
 115:
            var9 = _closure1_slot5;
            var2 = _closure1_slot7;
            var2 = var2.itemImpressions;
            var2 = var2[var5];
            var2 = var9.bind(var1)(var2, var13);
            var9 = var2[var15];
            var2 = var2[var14];
            var7 = var6;
            if(!(var2 < var8)) { _fun0005_ip = 183; continue _fun0005 }
 154:
            var6 = var5 + var14;
            var5 = var5 + 1;
            var2 = _closure1_slot7;
            var2 = var2.itemImpressions;
            var2 = var2.length;
            var7 = var6;
            if(var5 < var2) { _fun0005_ip = 115; continue _fun0005 }
 183:
            if(!(var7 > var15)) { _fun0005_ip = 213; continue _fun0005 }
 187:
            var5 = _closure1_slot7;
            var6 = var5.itemImpressions;
            var2 = var6.slice;
            var2 = var2.bind(var6)(var7);
            var5['itemImpressions'] = var2;
 213:
            var2 = _closure1_slot7;
            var2 = var2.itemImpressions;
            var5 = var2.length;
            var2 = 2048;
            if(!(var5 > var2)) { _fun0005_ip = 270; continue _fun0005 }
 238:
            var5 = _closure1_slot7;
            var7 = var5.itemImpressions;
            var6 = var7.slice;
            var2 = -2048;
            var2 = var6.bind(var7)(var2);
            var5['itemImpressions'] = var2;
 270:
            var2 = _closure1_slot12;
            var12 = 1000;
            if(var2) { _fun0005_ip = 287; continue _fun0005 }
 283:
            var12 = _closure1_slot6;
 287:
            var2 = var4.Set;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var21 = var5;
            var2 = new var21[var2](var20);
            var6 = var2 instanceof Object ? var2 : var5;
            var2 = var4.Set;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var21 = var5;
            var2 = new var21[var2](var20);
            var2 = var2 instanceof Object ? var2 : var5;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var11 = var4 - var12;
            var5 = _closure1_slot14;
            var4 = _closure1_slot7;
            var4 = var4.itemImpressions;
            var10 = var5.bind(var1)(var4);
            var4 = var10.bind(var1)();
            var7 = var4.done;
            var5 = null;
            var9 = var4;
            var8 = null;
            var4 = null;
            if(var7) { _fun0005_ip = 482; continue _fun0005 }
 398:
            var16 = var9.value;
            var7 = _closure1_slot5;
            var7 = var7.bind(var1)(var16, var13);
            var17 = var7[var15];
            var7 = var7[var14];
            if(!(!(var7 < var11))) { _fun0005_ip = 438; continue _fun0005 }
 425:
            var16 = var8;
            if(!(var5 == var16)) { _fun0005_ip = 451; continue _fun0005 }
 432:
            var16 = var7 + var12;
            _fun0005_ip = 451; continue _fun0005;
 438:
            var7 = var6.add;
            var7 = var7.bind(var6)(var17);
            var16 = var8;
 451:
            var7 = var2.add;
            var7 = var7.bind(var2)(var17);
            var17 = var10.bind(var1)();
            var7 = var17.done;
            var8 = var16;
            var9 = var17;
            var4 = var8;
            if(!var7) { _fun0005_ip = 398; continue _fun0005 }
 482:
            _closure1_slot8 = var6;
            _closure1_slot9 = var2;
            var2 = inf;
            if(!(var5 != var4)) { _fun0005_ip = 507; continue _fun0005 }
 504:
            var2 = var4;
 507:
            _closure1_slot10 = var2;
            var2 = true;
            _closure1_slot11 = var2;
 517:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var8 = global;
    var9 = var8.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var7 = 0;
    var2 = var5[var7];
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
    var9 = 3;
    var2 = var5[var9];
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
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.DAY;
    var2 = var9 * var2;
    var _closure1_slot6 = var2;
    var9 = {};
    var2 = new Array(0);
    var9['itemImpressions'] = var2;
    var2 = false;
    var9['hidden'] = var2;
    var _closure1_slot7 = var9;
    var9 = var8.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot8 = var9;
    var8 = var8.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot9 = var8;
    var _closure1_slot10 = var7;
    var _closure1_slot11 = var2;
    var _closure1_slot12 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ContentInventoryPersistedStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var2 = {};
                var5 = _closure1_slot7;
                var6 = var2;
                var4 = copyDataProperties(var6, var5);
                var4 = null;
                if(!(var4 == var3)) { _fun0007_ip = 27; continue _fun0007 }
 25:
                var3 = {};
 27:
                var6 = var2;
                var5 = var3;
                var3 = copyDataProperties(var6, var5);
                _closure1_slot7 = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getImpressionCappedItemIds';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot16;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getDebugFastImpressionCappingEnabled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hidden';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot7;
            var1 = var1.hidden;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'reset';
        var5['key'] = var7;
        var6 = function value() {
            var2 = {};
            var1 = new Array(0);
            var2['itemImpressions'] = var1;
            var1 = false;
            var2['hidden'] = var1;
            _closure1_slot7 = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'ContentInventoryPersistedStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = 8;
    var2 = var5[var2];
    var13 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleImpressionsTracked(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.itemIds;
            var1 = _closure1_slot11;
            if(var1) { _fun0008_ip = 31; continue _fun0008 }
 21:
            var3 = _closure1_slot16;
            var1 = undefined;
            var1 = var3.bind(var1)();
 31:
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var9 = var1.bind(var3)();
            var1 = _closure1_slot14;
            var3 = undefined;
            var8 = var1.bind(var3)(var4);
            var5 = var8.bind(var3)();
            var4 = var5.done;
            var6 = var5;
            var5 = false;
            var1 = false;
            if(var4) { _fun0008_ip = 152; continue _fun0008 }
 78:
            var12 = var6.value;
            var10 = _closure1_slot9;
            var4 = var10.has;
            var4 = var4.bind(var10)(var12);
            if(var4) { _fun0008_ip = 134; continue _fun0008 }
 100:
            var4 = _closure1_slot7;
            var11 = var4.itemImpressions;
            var10 = var11.push;
            var4 = new Array(2);
            var4[0] = var12;
            var4[1] = var9;
            var4 = var10.bind(var11)(var4);
            var5 = true;
 134:
            var11 = var8.bind(var3)();
            var4 = var11.done;
            var6 = var11;
            var1 = var5;
            if(!var4) { _fun0008_ip = 78; continue _fun0008 }
 152:
            var2 = _closure1_slot16;
            var2 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS'] = var8;
    var8 = function handleDebugClearImpressions() {
        var3 = _closure1_slot7;
        var2 = new Array(0);
        var3['itemImpressions'] = var2;
        var3 = _closure1_slot16;
        var1 = undefined;
        var2 = true;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS'] = var8;
    var8 = function handleDebugLogImpressions() {
        var1 = false;
        return var1;
    };
    var2['CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS'] = var8;
    var8 = function handleDebugToggleFastImpressionCapping() {
        var1 = _closure1_slot12;
        var1 = !var1;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING'] = var8;
    var4 = function handleToggleContentInventoryFeedHidden() {
        var2 = _closure1_slot7;
        var1 = var2.hidden;
        var1 = !var1;
        var2['hidden'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var7](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/content_inventory/ContentInventoryPersistedStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();