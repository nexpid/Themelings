// app/lib/guild/GuildThreadSubscriptions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot5;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot5;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function GuildThreadSubscriptions(arg1) {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = {};
            var3['_subscriptions'] = var2;
            var2 = arg1;
            var3['_onChange'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'reset';
        var1['key'] = var2;
        var2 = function value() {
            var2 = {};
            var1 = this;
            var1['_subscriptions'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(7);
        var2[0] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var2 = var3._get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = var2.keys;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getSubscribedThreadIds';
        var1['key'] = var6;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var12 = this;
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var15 = var2;
                var1 = new var15[var1](var14);
                var1 = var1 instanceof Object ? var1 : var2;
                var10 = var12._subscriptions;
                var5 = undefined;
                for(var7 in var10)
 50:
                {
 59:
                    var4 = var7;
                    var3 = _closure1_slot4;
                    var2 = var12._subscriptions;
                    var4 = var2[var4];
                    var2 = var4.keys;
                    var2 = var2.bind(var4)();
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0004_ip = 50; continue _fun0004 }
 102:
                    var13 = var3.value;
                    var2 = var1.add;
                    var2 = var2.bind(var1)(var13);
                    var13 = var4.bind(var5)();
                    var2 = var13.done;
                    var3 = var13;
                    if(var2) { _fun0004_ip = 50; continue _fun0004 }
 132:
                    _fun0004_ip = 102; continue _fun0004;
                }
 134:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = '_get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = this;
                var2 = var1._subscriptions;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0005_ip = 81; continue _fun0005 }
 22:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var5 = {'max': 3, 'updateAgeOnGet': true};
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var1 = var2 instanceof Object ? var2 : var3;
 81:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var1 = var3._subscriptions;
                var1 = var4 in var1;
                if(!var1) { _fun0006_ip = 45; continue _fun0006 }
 19:
                var1 = var3._subscriptions;
                var1 = delete var1[var4];
                var2 = var3._onChange;
                var1 = new Array(0);
                var1 = var2.bind(var3)(var4, var1);
 45:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'subscribe';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var6 = arg1;
                var5 = arg2;
                var7 = arg3;
                var3 = this;
                var1 = var3._get;
                var4 = var1.bind(var3)(var6);
                var1 = var4.has;
                var1 = var1.bind(var4)(var5);
                if(var1) { _fun0007_ip = 149; continue _fun0007 }
 36:
                var1 = null;
                var1 = var1 != var7;
                if(!var1) { _fun0007_ip = 55; continue _fun0007 }
 45:
                var2 = var4.has;
                var1 = var2.bind(var4)(var7);
 55:
                if(!var1) { _fun0007_ip = 86; continue _fun0007 }
 58:
                var2 = var4.set;
                var1 = global;
                var8 = var1.Date;
                var1 = var8.now;
                var1 = var1.bind(var8)();
                var1 = var2.bind(var4)(var7, var1);
 86:
                var2 = var4.set;
                var1 = global;
                var7 = var1.Date;
                var1 = var7.now;
                var1 = var1.bind(var7)();
                var1 = var2.bind(var4)(var5, var1);
                var1 = var3._subscriptions;
                var1[var6] = var4;
                var2 = var3._onChange;
                var1 = var4.keys;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var6, var1);
                var1 = true;
                _fun0007_ip = 179; continue _fun0007;
 149:
                var3 = var4.set;
                var2 = global;
                var6 = var2.Date;
                var2 = var6.now;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var4)(var5, var2);
                var1 = false;
 179:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'unsubscribe';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var5 = arg1;
                var3 = arg2;
                var4 = this;
                var1 = var4._subscriptions;
                var1 = var5 in var1;
                if(var1) { _fun0008_ip = 26; continue _fun0008 }
 22:
                var1 = false;
                return var1;
 26:
                var1 = var4._subscriptions;
                var6 = var1[var5];
                var1 = var6.has;
                var1 = var1.bind(var6)(var3);
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0008_ip = 89; continue _fun0008 }
 55:
                var2 = var6.del;
                var2 = var2.bind(var6)(var3);
                var3 = var4._onChange;
                var2 = var6.keys;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var4)(var5, var2);
                var1 = true;
 89:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[6] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/guild/GuildThreadSubscriptions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();