// app/modules/message_previews/RemoteFetchData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot5;
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
            var7 = _closure1_slot5;
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
 344:
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
    var8 = 0;
    var4 = var6[var8];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var7 = 1;
    var4 = var6[var7];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = {};
    var4['Pending'] = var8;
    var5 = 'Pending';
    var4[var8] = var5;
    var4['Fetching'] = var7;
    var5 = 'Fetching';
    var4[var7] = var5;
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot2;
        var3 = function RemoteFetchData() {
            var3 = this;
            var4 = _closure1_slot1;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = global;
            var4 = var2.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['pending'] = var4;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['fetching'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'empty';
        var5['key'] = var2;
        var2 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = this;
                var1 = var2.pending;
                var1 = var1.size;
                var3 = 0;
                var1 = var3 === var1;
                if(!var1) { _fun0004_ip = 38; continue _fun0004 }
 23:
                var2 = var2.fetching;
                var2 = var2.size;
                var1 = var3 === var2;
 38:
                return var1;
            }
        };
        var5['value'] = var2;
        var2 = new Array(9);
        var2[0] = var5;
        var5 = {};
        var7 = 'status';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.pending;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0005_ip = 61; continue _fun0005 }
 25:
                var2 = var1.fetching;
                var1 = var2.has;
                var2 = var1.bind(var2)(var3);
                var1 = null;
                if(!var2) { _fun0005_ip = 59; continue _fun0005 }
 46:
                var2 = _closure1_slot3;
                var1 = var2.Fetching;
 59:
                _fun0005_ip = 74; continue _fun0005;
 61:
                var2 = _closure1_slot3;
                var1 = var2.Pending;
 74:
                return var1;
            }
        };
        var5['value'] = var7;
        var2[1] = var5;
        var5 = {};
        var7 = 'addWant';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.fetching;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0006_ip = 41; continue _fun0006 }
 25:
                var2 = var1.pending;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
 41:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var2[2] = var5;
        var5 = {};
        var7 = 'removeWant';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = arg1;
            var1 = this;
            var4 = var1.pending;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
            var2 = var1.fetching;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var2[3] = var5;
        var5 = {};
        var7 = 'nextWants';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var7 = var1.pending;
            var1 = new Array(0);
            var6 = 0;
            var8 = var1;
            var2 = arraySpread(var8, var7, var6);
            var2 = global;
            var5 = var2.Math;
            var4 = var5.min;
            var3 = var1.length;
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var3);
            var1['length'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var2[4] = var5;
        var5 = {};
        var7 = 'markFetching';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = this;
                var3 = _closure1_slot4;
                var1 = undefined;
                var2 = arg1;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0007_ip = 84; continue _fun0007 }
 32:
                var7 = var3.value;
                var6 = var5.pending;
                var2 = var6.delete;
                var2 = var2.bind(var6)(var7);
                var6 = var5.fetching;
                var2 = var6.add;
                var2 = var2.bind(var6)(var7);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0007_ip = 32; continue _fun0007 }
 84:
                return var1;
            }
        };
        var5['value'] = var7;
        var2[5] = var5;
        var5 = {};
        var7 = 'markCompleted';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var5 = this;
                var3 = _closure1_slot4;
                var1 = undefined;
                var2 = arg1;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0008_ip = 84; continue _fun0008 }
 32:
                var7 = var3.value;
                var6 = var5.pending;
                var2 = var6.delete;
                var2 = var2.bind(var6)(var7);
                var6 = var5.fetching;
                var2 = var6.delete;
                var2 = var2.bind(var6)(var7);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0008_ip = 32; continue _fun0008 }
 84:
                return var1;
            }
        };
        var5['value'] = var7;
        var2[6] = var5;
        var5 = {};
        var7 = 'markFailed';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = this;
                var3 = _closure1_slot4;
                var1 = undefined;
                var2 = arg1;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0009_ip = 84; continue _fun0009 }
 32:
                var7 = var3.value;
                var6 = var5.pending;
                var2 = var6.add;
                var2 = var2.bind(var6)(var7);
                var6 = var5.fetching;
                var2 = var6.delete;
                var2 = var2.bind(var6)(var7);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0009_ip = 32; continue _fun0009 }
 84:
                return var1;
            }
        };
        var5['value'] = var7;
        var2[7] = var5;
        var5 = {};
        var7 = 'try';
        var5['key'] = var7;
        var8 = _closure1_slot0;
        var1 = undefined;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 90; continue _fun0010 }
 10:
                    var3 = arg1;
                    var2 = arg2;
 16: // try_start_0
                    var6 = var5.markFetching;
                    var4 = var3;
                    var4 = var6.bind(var5)(var4);
                    var4 = var2;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
                    SaveGenerator(address=45);
 43:
                    return var2;
 45:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 70; continue _fun0010 }
 51:
                    var6 = var5.markCompleted;
                    var4 = var3;
                    var4 = var6.bind(var5)(var4);
 67: // try_end0
                    return var2;
 70:
                    return var2;
 73: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = var5.markFailed;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 90:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var6 = function _try() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var2[8] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 3;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/message_previews/RemoteFetchData.tsx';
    var5 = var6.bind(var7)(var5);
    var3['FetchStatus'] = var4;
    var3['RemoteFetchData'] = var2;
    return var1;
})();