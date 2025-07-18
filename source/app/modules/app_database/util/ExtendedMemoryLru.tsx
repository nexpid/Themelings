// app/modules/app_database/util/ExtendedMemoryLru.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native4;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot7;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot7;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
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
                    _fun0002_ip = 67; continue _fun0002;
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
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var2 = function() {
        var4 = _closure1_slot5;
        var3 = function ExtendedMemoryLru(arg1, arg2) {
            var3 = this;
            var5 = _closure1_slot4;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var6 = var5[var2];
            var6 = var4.bind(var1)(var6);
            var8 = var6.Lru;
            var6 = var8.prototype;
            var7 = Object.create(var6, {constructor: {value: var8}});
            var10 = arg1;
            var11 = var7;
            var6 = new var11[var8](var10, var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['primary'] = var6;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var5 = var2.Lru;
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var10 = arg2;
            var11 = var4;
            var2 = new var11[var5](var10, var9);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['extended'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'totalLength';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var2 = var1.primary;
            var2 = var2.length;
            var1 = var1.extended;
            var1 = var1.length;
            var1 = var2 + var1;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(17);
        var2[0] = var1;
        var1 = {};
        var6 = 'primaryCapacity';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.primary;
            var1 = var1.capacity;
            return var1;
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'extendedCapacity';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.extended;
            var1 = var1.capacity;
            return var1;
        };
        var1['get'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1.primary;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var2 = var1.extended;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'has';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.primary;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'hasExtended';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var3 = var2.primary;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0004_ip = 41; continue _fun0004 }
 25:
                var3 = var2.extended;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
 41:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.primary;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'put';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var5 = var2.primary;
                var4 = var5.put;
                var3 = arg1;
                var1 = arg2;
                var6 = var4.bind(var5)(var3, var1);
                var1 = undefined;
                if(!(var1 !== var6)) { _fun0005_ip = 64; continue _fun0005 }
 33:
                var5 = var2.extended;
                var4 = var5.put;
                var2 = 0;
                var3 = var6[var2];
                var2 = 1;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var3, var2);
 64:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = arg1;
                var4 = this;
                var2 = var4.primary;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var5);
                var3 = var4.extended;
                var2 = var3.delete;
                var2 = var2.bind(var3)(var5);
                var3 = var4.upstreamItems;
                var3 = var3.bind(var4)();
                if(var1) { _fun0006_ip = 56; continue _fun0006 }
 53:
                var1 = var2;
 56:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'upstreamItems';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var9 = this;
                var1 = var9.canUpstreamItems;
                var1 = var1.bind(var9)();
                if(!var1) { _fun0007_ip = 154; continue _fun0007 }
 19:
                var2 = _closure1_slot6;
                var3 = var9.extended;
                var1 = var3.entries;
                var1 = var1.bind(var3)();
                var7 = undefined;
                var6 = var2.bind(var7)(var1);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var5 = 2;
                var4 = 0;
                var3 = 1;
                if(var1) { _fun0007_ip = 154; continue _fun0007 }
 69:
                var10 = var2.value;
                var1 = _closure1_slot3;
                var1 = var1.bind(var7)(var10, var5);
                var11 = var1[var4];
                var12 = var1[var3];
                var10 = var9.primary;
                var1 = var10.put;
                var1 = var1.bind(var10)(var11, var12);
                var10 = var9.extended;
                var1 = var10.delete;
                var1 = var1.bind(var10)(var11);
                var1 = var9.canUpstreamItems;
                var1 = var1.bind(var9)();
                if(!var1) { _fun0007_ip = 154; continue _fun0007 }
 139:
                var10 = var6.bind(var7)();
                var1 = var10.done;
                var2 = var10;
                if(!var1) { _fun0007_ip = 69; continue _fun0007 }
 154:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'canUpstreamItems';
        var1['key'] = var6;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = this;
                var1 = var2.primary;
                var3 = var1.length;
                var1 = var2.primary;
                var1 = var1.capacity;
                var1 = var3 < var1;
                if(!var1) { _fun0008_ip = 50; continue _fun0008 }
 33:
                var2 = var2.extended;
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
 50:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'entries';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.primary;
            var1 = var2.entries;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'keys';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.primary;
            var1 = var2.keys;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'values';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.primary;
            var1 = var2.values;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'allEntries';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.chain;
            var5 = var1.extended;
            var2 = var5.entries;
            var2 = var2.bind(var5)();
            var5 = var1.primary;
            var1 = var5.entries;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'allKeys';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.chain;
            var5 = var1.extended;
            var2 = var5.keys;
            var2 = var2.bind(var5)();
            var5 = var1.primary;
            var1 = var5.keys;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'allValues';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.chain;
            var5 = var1.extended;
            var2 = var5.values;
            var2 = var2.bind(var5)();
            var5 = var1.primary;
            var1 = var5.values;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var5;
        var2[16] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/util/ExtendedMemoryLru.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ExtendedMemoryLru'] = var2;
    return var1;
})();