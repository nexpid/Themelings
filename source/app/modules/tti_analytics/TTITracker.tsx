// app/modules/tti_analytics/TTITracker.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var4 = native1;
        var5 = native2;
        var8 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var4;
        var _closure1_slot1 = var5;
        var _closure1_slot2 = var8;
        var1 = native4;
        var _closure1_slot3 = var1;
        var _closure1_slot4 = var6;
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
                if(var2) { _fun0002_ip = 342; continue _fun0002 }
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
                var9 = _closure1_slot17;
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
                var7 = _closure1_slot17;
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
 342:
                var1 = var2.call;
                var3 = var1.bind(var2)(var3);
                var2 = var3.next;
                var1 = var2.bind;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var _closure1_slot16 = var1;
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
        var _closure1_slot17 = var1;
        var1 = function _isNativeReflectConstruct() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                _fun0005_ip = 74; continue _fun0005;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot18 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot18 = var1;
        var1 = function _serialize(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg2;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0006_ip = 45; continue _fun0006 }
 9:
                var4 = null;
                if(!(var4 != var2)) { _fun0006_ip = 45; continue _fun0006 }
 15:
                var1 = arg1;
                var2 = var2 - var1;
                var1 = null;
                if(!(!(var2 < var3))) { _fun0006_ip = 43; continue _fun0006 }
 28:
                var3 = 1000000;
                var1 = null;
                if(!(!(var2 > var3))) { _fun0006_ip = 43; continue _fun0006 }
 40:
                var1 = var2;
 43:
                return var1;
 45:
                var1 = null;
                return var1;
            }
        };
        var _closure1_slot19 = var1;
        var1 = global;
        var10 = var1.Object;
        var9 = var10.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var7);
        var1 = 0;
        var7 = var6[var1];
        var1 = undefined;
        var7 = var8.bind(var1)(var7);
        var _closure1_slot5 = var7;
        var7 = 1;
        var7 = var6[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot6 = var7;
        var7 = 2;
        var7 = var6[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot7 = var7;
        var7 = 3;
        var7 = var6[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot8 = var7;
        var7 = 4;
        var7 = var6[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot9 = var7;
        var7 = 5;
        var7 = var6[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot10 = var7;
        var8 = function loggerCallback() {
            var1 = undefined;
            return var1;
        };
        var _closure1_slot11 = var8;
        var8 = function() {
            var1 = global;
            var2 = var1.performance;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4['__timingFunction'] = var8;
        var8 = var4.__getTotalRequireTime;
        var4 = null;
        if(!(var4 != var8)) { _fun0001_ip = 244; continue _fun0001 }
 237:
        var4 = function() {
            var2 = _closure1_slot0;
            var1 = var2.__getTotalRequireTime;
            var1 = var1.bind(var2)();
            return var1;
        };
        _fun0001_ip = 249; continue _fun0001;
 244:
        var4 = function() {
            var1 = 0;
            return var1;
        };
 249:
        var _closure1_slot12 = var4;
        var4 = function() {
            var4 = _closure1_slot10;
            var3 = function TTITimer(arg1, arg2) {
                var3 = this;
                var4 = _closure1_slot9;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                var2 = arg1;
                var3['emoji'] = var2;
                var2 = arg2;
                var3['name'] = var2;
                var2 = 0;
                var3['start_'] = var2;
                var3['startNumImports'] = var2;
                var3['startImportTime'] = var2;
                var3['end_'] = var2;
                var3['endNumImports'] = var2;
                var3['endImportTime'] = var2;
                return var1;
            };
            var _closure2_slot2 = var3;
            var5 = {};
            var2 = 'start';
            var5['key'] = var2;
            var2 = function get() {
                var1 = this;
                var1 = var1.start_;
                return var1;
            };
            var5['get'] = var2;
            var2 = new Array(14);
            var2[0] = var5;
            var5 = {};
            var7 = 'end';
            var5['key'] = var7;
            var7 = function get() {
                var1 = this;
                var1 = var1.end_;
                return var1;
            };
            var5['get'] = var7;
            var2[1] = var5;
            var5 = {};
            var7 = 'hasStart';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var2 = var1.start_;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var5['value'] = var7;
            var2[2] = var5;
            var5 = {};
            var7 = 'hasData';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var2 = var1.end_;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var5['value'] = var7;
            var2[3] = var5;
            var5 = {};
            var7 = 'recordStart';
            var5['key'] = var7;
            var7 = function value() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = this;
                    var2 = var3.start_;
                    var1 = 0;
                    if(!(var1 === var2)) { _fun0007_ip = 25; continue _fun0007 }
 15:
                    var1 = var3.recordStart_;
                    var1 = var1.bind(var3)();
 25:
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot4;
                    var1 = 6;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.mark;
                    var4 = var3.emoji;
                    var8 = var3.name;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var3 = 'Start ';
                    var3 = var7.bind(var3)(var8);
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = _closure1_slot11;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[4] = var5;
            var5 = {};
            var7 = 'recordStart_';
            var5['key'] = var7;
            var7 = function value() {
                var3 = this;
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                var3['start_'] = var1;
                var5 = _closure1_slot3;
                var4 = _closure1_slot4;
                var1 = 7;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.size;
                var4 = var4.bind(var5)();
                var3['startNumImports'] = var4;
                var2 = _closure1_slot12;
                var2 = var2.bind(var1)();
                var3['startImportTime'] = var2;
                return var1;
            };
            var5['value'] = var7;
            var2[5] = var5;
            var5 = {};
            var7 = 'recordEnd';
            var5['key'] = var7;
            var7 = function value() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = this;
                    var2 = var1.end_;
                    var3 = 0;
                    if(!(var3 === var2)) { _fun0008_ip = 25; continue _fun0008 }
 15:
                    var2 = var1.start_;
                    if(!(var3 === var2)) { _fun0008_ip = 99; continue _fun0008 }
 25:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot4;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.mark;
                    var3 = var1.emoji;
                    var7 = var1.name;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = 'Finish ';
                    var2 = var6.bind(var2)(var7);
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0008_ip = 198; continue _fun0008;
 99:
                    var2 = var1.recordEnd_;
                    var2 = var2.bind(var1)();
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot4;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.mark;
                    var3 = var1.emoji;
                    var7 = var1.name;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = 'Finish ';
                    var2 = var6.bind(var2)(var7);
                    var6 = var1.end_;
                    var1 = var1.start_;
                    var1 = var6 - var1;
                    var1 = var4.bind(var5)(var3, var2, var1);
 198:
                    var2 = _closure1_slot11;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[6] = var5;
            var5 = {};
            var7 = 'recordEnd_';
            var5['key'] = var7;
            var7 = function value() {
                var3 = this;
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                var3['end_'] = var1;
                var5 = _closure1_slot3;
                var4 = _closure1_slot4;
                var1 = 7;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.size;
                var4 = var4.bind(var5)();
                var3['endNumImports'] = var4;
                var2 = _closure1_slot12;
                var2 = var2.bind(var1)();
                var3['endImportTime'] = var2;
                return var1;
            };
            var5['value'] = var7;
            var2[7] = var5;
            var5 = {};
            var7 = 'set';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var7 = arg2;
                    var3 = this;
                    var4 = var3.start_;
                    var2 = 0;
                    if(!(var2 === var4)) { _fun0009_ip = 91; continue _fun0009 }
 21:
                    var3['start_'] = var1;
                    var1 = var1 + var7;
                    var3['end_'] = var1;
                    var5 = _closure1_slot3;
                    var4 = _closure1_slot4;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.size;
                    var4 = var4.bind(var5)();
                    var3['endNumImports'] = var4;
                    var1 = _closure1_slot12;
                    var1 = var1.bind(var2)();
                    var3['endImportTime'] = var1;
 91:
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot4;
                    var1 = 6;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.mark;
                    var4 = var3.emoji;
                    var3 = var3.name;
                    var3 = var5.bind(var6)(var4, var3, var7);
                    var2 = _closure1_slot11;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[8] = var5;
            var5 = {};
            var7 = 'serializeStart';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var4 = _closure1_slot19;
                var1 = this;
                var3 = var1.start_;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var5['value'] = var7;
            var2[9] = var5;
            var5 = {};
            var7 = 'serializeEnd';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var4 = _closure1_slot19;
                var1 = this;
                var3 = var1.end_;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var5['value'] = var7;
            var2[10] = var5;
            var5 = {};
            var7 = 'measure';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var5 = arg1;
                    var1 = this;
                    var3 = var1.start_;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0010_ip = 97; continue _fun0010 }
 18:
                    var2 = var1.recordStart_;
                    var2 = var2.bind(var1)();
                    var6 = _closure1_slot2;
                    var4 = _closure1_slot4;
                    var2 = 6;
                    var2 = var4[var2];
                    var4 = undefined;
                    var8 = var6.bind(var4)(var2);
                    var7 = var8.time;
                    var6 = var1.emoji;
                    var2 = var1.name;
                    var2 = var7.bind(var8)(var6, var2, var5);
                    var6 = var1.recordEnd_;
                    var6 = var6.bind(var1)();
                    var3 = _closure1_slot11;
                    var3 = var3.bind(var4)();
                    return var2;
 97:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot4;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.time;
                    var2 = var1.emoji;
                    var1 = var1.name;
                    var1 = var3.bind(var4)(var2, var1, var5);
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[11] = var5;
            var5 = {};
            var7 = 'measureAsync';
            var5['key'] = var7;
            var8 = _closure1_slot8;
            var1 = undefined;
            var7 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        StartGenerator();
                        var6 = arg1;
                        var2 = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0011_ip = 173; continue _fun0011 }
 16:
                        var4 = var2.start_;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0011_ip = 121; continue _fun0011 }
 28:
                        var3 = var2.recordStart_;
                        var3 = var3.bind(var2)();
                        var7 = _closure1_slot2;
                        var5 = _closure1_slot4;
                        var3 = 6;
                        var3 = var5[var3];
                        var5 = undefined;
                        var9 = var7.bind(var5)(var3);
                        var8 = var9.timeAsync;
                        var7 = var2.emoji;
                        var3 = var2.name;
                        var3 = var8.bind(var9)(var7, var3, var6);
                        SaveGenerator(address=91);
 89:
                        return var3;
 91:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0011_ip = 118; continue _fun0011 }
 97:
                        var7 = var2.recordEnd_;
                        var7 = var7.bind(var2)();
                        var4 = _closure1_slot11;
                        var4 = var4.bind(var5)();
                        return var3;
 118:
                        return var3;
 121:
                        var5 = _closure1_slot2;
                        var4 = _closure1_slot4;
                        var3 = 6;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.timeAsync;
                        var3 = var2.emoji;
                        var2 = var2.name;
                        var2 = var4.bind(var5)(var3, var2, var6);
                        return var2;
 173:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var8.bind(var1)(var7);
            var _closure2_slot1 = var7;
            var7 = function measureAsync() {
                var1 = undefined;
                var4 = _closure2_slot1;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var5['value'] = var7;
            var2[12] = var5;
            var5 = {};
            var7 = 'measureAsyncWithoutNesting';
            var5['key'] = var7;
            var7 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        StartGenerator();
                        var6 = arg1;
                        var2 = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0012_ip = 300; continue _fun0012 }
 16:
                        var4 = var2.start_;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0012_ip = 248; continue _fun0012 }
 31:
                        var3 = var2.recordStart_;
                        var3 = var3.bind(var2)();
                        var7 = global;
                        var4 = var7.Date;
                        var3 = var4.now;
                        var12 = var3.bind(var4)();
                        var8 = _closure1_slot2;
                        var3 = _closure1_slot4;
                        var10 = 6;
                        var3 = var3[var10];
                        var5 = undefined;
                        var11 = var8.bind(var5)(var3);
                        var9 = var11.mark;
                        var8 = var2.emoji;
                        var14 = var2.name;
                        var3 = var7.HermesInternal;
                        var13 = var3.concat;
                        var3 = 'Start ';
                        var3 = var13.bind(var3)(var14);
                        var3 = var9.bind(var11)(var8, var3);
                        var3 = var6.bind(var5)();
                        SaveGenerator(address=136);
 134:
                        return var3;
 136:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                        if(var8) { _fun0012_ip = 245; continue _fun0012 }
 142:
                        var9 = _closure1_slot2;
                        var8 = _closure1_slot4;
                        var8 = var8[var10];
                        var11 = var9.bind(var5)(var8);
                        var10 = var11.mark;
                        var9 = var2.emoji;
                        var14 = var2.name;
                        var8 = var7.HermesInternal;
                        var13 = var8.concat;
                        var8 = 'Finish ';
                        var8 = var13.bind(var8)(var14);
                        var13 = var7.Date;
                        var7 = var13.now;
                        var7 = var7.bind(var13)();
                        var7 = var7 - var12;
                        var7 = var10.bind(var11)(var9, var8, var7);
                        var7 = var2.recordEnd_;
                        var7 = var7.bind(var2)();
                        var4 = _closure1_slot11;
                        var4 = var4.bind(var5)();
                        return var3;
 245:
                        return var3;
 248:
                        var5 = _closure1_slot2;
                        var4 = _closure1_slot4;
                        var3 = 6;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.timeAsync;
                        var3 = var2.emoji;
                        var2 = var2.name;
                        var2 = var4.bind(var5)(var3, var2, var6);
                        return var2;
 300:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var8.bind(var1)(var7);
            var _closure2_slot0 = var7;
            var6 = function measureAsyncWithoutNesting() {
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
            var2[13] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var4 = var4.bind(var1)();
        var _closure1_slot13 = var4;
        var4 = function() {
            var4 = _closure1_slot10;
            var3 = function TTIEvent(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = arguments[2];
                    var3 = this;
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0013_ip = 14; continue _fun0013 }
 12:
                    var2 = false;
 14:
                    var5 = _closure1_slot9;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var1)(var3, var4);
                    var4 = arg1;
                    var3['emoji'] = var4;
                    var4 = arg2;
                    var3['name'] = var4;
                    var3['onlyOnce'] = var2;
                    var2 = 0;
                    var3['time_'] = var2;
                    var4 = null;
                    var3['numImports'] = var4;
                    var3['importTime'] = var2;
                    return var1;
                }
            };
            var _closure2_slot0 = var3;
            var1 = {};
            var2 = 'time';
            var1['key'] = var2;
            var2 = function get() {
                var1 = this;
                var1 = var1.time_;
                return var1;
            };
            var1['get'] = var2;
            var2 = new Array(4);
            var2[0] = var1;
            var1 = {};
            var6 = 'record';
            var1['key'] = var6;
            var6 = function value() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var3 = arguments[0];
                    var2 = this;
                    var1 = undefined;
                    if(!(var3 === var1)) { _fun0014_ip = 29; continue _fun0014 }
 12:
                    var4 = global;
                    var5 = var4.Date;
                    var4 = var5.now;
                    var3 = var4.bind(var5)();
 29:
                    var5 = var2.time_;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0014_ip = 101; continue _fun0014 }
 41:
                    var4 = var2.onlyOnce;
                    if(var4) { _fun0014_ip = 198; continue _fun0014 }
 53:
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot4;
                    var4 = 6;
                    var4 = var6[var4];
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.mark;
                    var5 = var2.emoji;
                    var4 = var2.name;
                    var4 = var6.bind(var7)(var5, var4);
                    _fun0014_ip = 198; continue _fun0014;
 101:
                    var2['time_'] = var3;
                    var6 = _closure1_slot3;
                    var5 = _closure1_slot4;
                    var4 = 7;
                    var4 = var5[var4];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.size;
                    var4 = var4.bind(var6)();
                    var2['numImports'] = var4;
                    var4 = _closure1_slot12;
                    var4 = var4.bind(var1)();
                    var2['importTime'] = var4;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.mark;
                    var3 = var2.emoji;
                    var2 = var2.name;
                    var2 = var4.bind(var5)(var3, var2);
 198:
                    var2 = _closure1_slot11;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[1] = var1;
            var1 = {};
            var6 = 'hasData';
            var1['key'] = var6;
            var6 = function value() {
                var1 = this;
                var2 = var1.time_;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var1['value'] = var6;
            var2[2] = var1;
            var1 = {};
            var6 = 'serialize';
            var1['key'] = var6;
            var5 = function value(arg1) {
                var4 = _closure1_slot19;
                var1 = this;
                var3 = var1.time_;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var1['value'] = var5;
            var2[3] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var4 = var4.bind(var1)();
        var _closure1_slot14 = var4;
        var4 = function() {
            var4 = _closure1_slot10;
            var3 = function TTIImportEvent() {
                var3 = this;
                var4 = _closure1_slot9;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                var2 = 0;
                var3['time_'] = var2;
                return var1;
            };
            var _closure2_slot0 = var3;
            var1 = {};
            var2 = 'time';
            var1['key'] = var2;
            var2 = function get() {
                var1 = this;
                var1 = var1.time_;
                return var1;
            };
            var1['get'] = var2;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = {};
            var6 = 'record';
            var1['key'] = var6;
            var5 = function value() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = this;
                    var3 = var2.time_;
                    var1 = 0;
                    if(!(var1 === var3)) { _fun0015_ip = 34; continue _fun0015 }
 15:
                    var3 = _closure1_slot12;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
                    var2['time_'] = var1;
 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['value'] = var5;
            var2[1] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var4 = var4.bind(var1)();
        var _closure1_slot15 = var4;
        var4 = function TTITrackers() {
            var3 = this;
            var5 = _closure1_slot9;
            var2 = _closure1_slot20;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var7 = _closure1_slot13;
            var2 = var7.prototype;
            var5 = Object.create(var2, {constructor: {value: var7}});
            var13 = '❗';
            var12 = 'Load index.tsx';
            var14 = var5;
            var2 = new var14[var7](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['loadIndex'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var8 = '💾';
            var12 = 'Load fast_connect native module';
            var14 = var5;
            var13 = var8;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['loadFastConnectNativeModule'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var7 = '🌐';
            var12 = 'Fast Connect IDENTIFY';
            var14 = var5;
            var13 = var7;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['beginFastConnect'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var9 = '🏃';
            var12 = 'Load Imports';
            var14 = var5;
            var13 = var9;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['loadImports'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Initial Initialization';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['init'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Load Storage';
            var14 = var5;
            var13 = var8;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['loadStorage'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Parse Storage';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['parseStorage'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Load Mini Cache';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['loadMiniCache'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Fetch Guild Cache';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['fetchGuildCache'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Fetch Initial Guild Channels Cache';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['fetchGuildChannelsCache'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Load Cached Messages';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['loadCachedMessages'] = var2;
            var6 = _closure1_slot14;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var10 = '🎨';
            var12 = 'First React Render';
            var14 = var5;
            var13 = var10;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['renderApp'] = var2;
            var6 = _closure1_slot14;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'First React Render useEffect';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['renderAppEffect'] = var2;
            var6 = _closure1_slot14;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'React Render Messages';
            var14 = var5;
            var11 = true;
            var2 = new var14[var6](var13, var12, var11, var10);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['renderMessages'] = var2;
            var6 = _closure1_slot14;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'React Render Cached Messages';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11, var10);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['renderMessagesWithCache'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'RowGenerator.generate()';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['firstRowGenerator'] = var2;
            var6 = _closure1_slot14;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var9 = '🖥️';
            var12 = 'Display Cached Messages';
            var14 = var5;
            var13 = var9;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['displayMessagesWithCache'] = var2;
            var6 = _closure1_slot14;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'React Render Latest Messages';
            var14 = var5;
            var13 = var10;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['renderLatestMessages'] = var2;
            var6 = _closure1_slot14;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Display Latest Messages';
            var14 = var5;
            var13 = var9;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['displayLatestMessages'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Initial Guild';
            var14 = var5;
            var13 = var7;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['initialGuild'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Load Lazy Cache';
            var14 = var5;
            var13 = var8;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['loadLazyCache'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Fetch Lazy Cache';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['fetchLazyCache'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Parse Lazy Cache';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['parseLazyCache'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Fetch Stale Channels';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['fetchStaleChannels'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Deserialize Cache';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['deserializeCache'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Dispatch Lazy Cache';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['dispatchLazyCache'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Parse READY';
            var14 = var5;
            var13 = var7;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['parseReady'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'READY';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['ready'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Hydrate READY';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['hydrateReady'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Dispatch READY';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['dispatchReady'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Parse READY Supplemental';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['parseReadySupplemental'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'READY Supplemental';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['readySupplemental'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Hydrate READY Supplemental';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['hydrateReadySupplemental'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Dispatch READY Supplemental';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['dispatchReadySupplemental'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Fetch messages';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['fetchMessages'] = var2;
            var6 = _closure1_slot13;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var12 = 'Dispatch messages';
            var14 = var5;
            var2 = new var14[var6](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['dispatchMessages'] = var2;
            var2 = {};
            var5 = _closure1_slot15;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var14 = var6;
            var5 = new var14[var5](var13);
            var5 = var5 instanceof Object ? var5 : var6;
            var2['polyfillsEnd'] = var5;
            var5 = _closure1_slot15;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var14 = var6;
            var5 = new var14[var5](var13);
            var5 = var5 instanceof Object ? var5 : var6;
            var2['sentryEnd'] = var5;
            var5 = _closure1_slot15;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var14 = var6;
            var5 = new var14[var5](var13);
            var5 = var5 instanceof Object ? var5 : var6;
            var2['appStateChangeStart'] = var5;
            var5 = _closure1_slot15;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var14 = var6;
            var5 = new var14[var5](var13);
            var5 = var5 instanceof Object ? var5 : var6;
            var2['appStateChangeEnd'] = var5;
            var5 = _closure1_slot15;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var14 = var6;
            var5 = new var14[var5](var13);
            var5 = var5 instanceof Object ? var5 : var6;
            var2['loadMiniCacheStart'] = var5;
            var5 = _closure1_slot15;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var14 = var6;
            var5 = new var14[var5](var13);
            var5 = var5 instanceof Object ? var5 : var6;
            var2['loadStorageStart'] = var5;
            var4 = _closure1_slot15;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var14 = var5;
            var4 = new var14[var4](var13);
            var4 = var4 instanceof Object ? var4 : var5;
            var2['loadStorageEnd'] = var4;
            var3['imports'] = var2;
            return var1;
        };
        var _closure1_slot20 = var4;
        var4 = var7.bind(var1)(var4);
        var2 = function(arg1) {
            var4 = function TTITracker(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var4 = this;
                    var12 = 0;
                    var1 = copyRestArgs(var12);
                    var7 = _closure1_slot9;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var1;
                    var10 = 0;
                    var1 = arraySpread(var12, var11, var10);
                    var1 = _closure1_slot6;
                    var8 = var1.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var1 = _closure1_slot18;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0016_ip = 84; continue _fun0016 }
 71:
                    var1 = var8.apply;
                    var1 = var1.bind(var8)(var4, var9);
                    _fun0016_ip = 118; continue _fun0016;
 84:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var1 = var6.bind(var7)(var8, var9, var5);
 118:
                    var1 = var2.bind(var3)(var4, var1);
                    var2 = {};
                    var1['readyProperties'] = var2;
                    var2 = false;
                    var1['didBackgroundApp'] = var2;
                    var1['wasEverActive'] = var2;
                    var1['wasAuthenticated'] = var2;
                    var2 = null;
                    var1['interstitial'] = var2;
                    var3 = global;
                    var3 = var3.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var13 = var4;
                    var3 = new var13[var3](var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var1['cachedChannelCounts'] = var3;
                    var1['cachedChannelId'] = var2;
                    var1['cachedMessageIds'] = var2;
                    var3 = 'never-loaded';
                    var1['messageCacheMissingReason'] = var3;
                    var1['messageCacheAgeSeconds'] = var2;
                    var1['messageCacheCount'] = var2;
                    var1['messageCacheHavingCount'] = var2;
                    var1['messageCacheMissingCount'] = var2;
                    var1['messageRenderFullCount'] = var2;
                    var1['messageRenderCachedCount'] = var2;
                    var1['messageRenderHasMoreAfter'] = var2;
                    var1['firstAppActiveTime'] = var2;
                    var1['cacheInfo'] = var2;
                    var2 = {};
                    var1['extraProperties'] = var2;
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot7;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot10;
            var5 = {};
            var1 = 'setTTICallback';
            var5['key'] = var1;
            var1 = function value(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var1 = function loggerCallback() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var3 = var2.bind(var1)();
                        var2 = true;
                        if(!(var2 === var3)) { _fun0017_ip = 33; continue _fun0017 }
 19:
                        var2 = function loggerCallback() {
                            var1 = false;
                            return var1;
                        };
                        _closure1_slot11 = var2;
 33:
                        return var1;
                    }
                };
                _closure1_slot11 = var1;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(11);
            var1[0] = var5;
            var5 = {};
            var7 = 'setCacheInfo';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = arg1;
                var1 = this;
                var1['cacheInfo'] = var2;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'setInterstitial';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = arg1;
                var1 = this;
                var1['interstitial'] = var2;
                var2 = _closure1_slot11;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'addLocalMessages';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var3 = this;
                    var5 = var3.cachedChannelCounts;
                    var4 = var5.set;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var4.bind(var5)(var2, var1);
                    var1 = var3.cachedChannelCounts;
                    var1 = var1.size;
                    var2 = 100;
                    if(!(var1 > var2)) { _fun0018_ip = 104; continue _fun0018 }
 44:
                    var4 = var3.cachedChannelCounts;
                    var1 = var4.keys;
                    var6 = var1.bind(var4)();
                    var5 = var3.cachedChannelCounts;
                    var4 = var5.delete;
                    var1 = var6.next;
                    var1 = var1.bind(var6)();
                    var1 = var1.value;
                    var1 = var4.bind(var5)(var1);
                    var1 = var3.cachedChannelCounts;
                    var1 = var1.size;
                    if(var1 > var2) { _fun0018_ip = 44; continue _fun0018 }
 104:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'attachReadyPayloadProperties';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = arg1;
                var1 = this;
                var1['readyProperties'] = var2;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'appStateChanged';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var4 = arg1;
                    var2 = this;
                    var3 = 'active';
                    if(!(var3 === var4)) { _fun0019_ip = 57; continue _fun0019 }
 14:
                    var5 = var2.firstAppActiveTime;
                    var1 = null;
                    if(!(var1 == var5)) { _fun0019_ip = 49; continue _fun0019 }
 26:
                    var1 = global;
                    var5 = var1.Date;
                    var1 = var5.now;
                    var1 = var1.bind(var5)();
                    var2['firstAppActiveTime'] = var1;
 49:
                    var1 = true;
                    var2['wasEverActive'] = var1;
 57:
                    var1 = var2.readyProperties;
                    var5 = var1.num_guilds;
                    var1 = null;
                    if(!(var1 == var5)) { _fun0019_ip = 94; continue _fun0019 }
 75:
                    var1 = var2.didBackgroundApp;
                    if(var1) { _fun0019_ip = 88; continue _fun0019 }
 84:
                    var1 = var3 !== var4;
 88:
                    var2['didBackgroundApp'] = var1;
 94:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'recordRender';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var2 = arg2;
                    var1 = this;
                    var4 = var1.renderMessages;
                    var3 = var4.record;
                    var3 = var3.bind(var4)();
                    var3 = var2;
                    if(var3) { _fun0020_ip = 37; continue _fun0020 }
 28:
                    var5 = arg1;
                    var4 = 0;
                    var3 = var5 > var4;
 37:
                    if(!var3) { _fun0020_ip = 56; continue _fun0020 }
 40:
                    var4 = var1.renderMessagesWithCache;
                    var3 = var4.record;
                    var3 = var3.bind(var4)();
 56:
                    if(!var2) { _fun0020_ip = 75; continue _fun0020 }
 59:
                    var2 = var1.renderLatestMessages;
                    var1 = var2.record;
                    var1 = var1.bind(var2)();
 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'recordMessageRender';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var8 = arg1;
                    var2 = arg2;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot4;
                    var1 = 8;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var12 = var4.default;
                    var6 = var3.renderLatestMessages;
                    var4 = var6.hasData;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0021_ip = 581; continue _fun0021 }
 67:
                    var6 = var3.renderMessages;
                    var4 = var6.record;
                    var4 = var4.bind(var6)();
                    var4 = var2.length;
                    var7 = 0;
                    if(!(var4 > var7)) { _fun0021_ip = 110; continue _fun0021 }
 94:
                    var6 = var3.renderMessagesWithCache;
                    var4 = var6.record;
                    var4 = var4.bind(var6)();
 110:
                    var4 = arg3;
                    if(var4) { _fun0021_ip = 182; continue _fun0021 }
 116:
                    var6 = var3.cachedChannelId;
                    var4 = null;
                    var6 = var4 != var6;
                    if(!var6) { _fun0021_ip = 141; continue _fun0021 }
 131:
                    var9 = var3.cachedChannelId;
                    var6 = var8 !== var9;
 141:
                    if(var6) { _fun0021_ip = 581; continue _fun0021 }
 147:
                    var3['cachedChannelId'] = var8;
                    var3['cachedMessageIds'] = var2;
                    var6 = var2.length;
                    if(!(var6 > var7)) { _fun0021_ip = 581; continue _fun0021 }
 171:
                    var3['messageCacheMissingReason'] = var4;
                    _fun0021_ip = 581; continue _fun0021;
 182:
                    var6 = var3.renderLatestMessages;
                    var4 = var6.record;
                    var4 = var4.bind(var6)();
                    var6 = var3.cachedChannelId;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0021_ip = 567; continue _fun0021 }
 213:
                    var6 = var3.cachedChannelId;
                    if(!(var6 === var8)) { _fun0021_ip = 553; continue _fun0021 }
 226:
                    var6 = var3.cachedMessageIds;
                    if(!(var4 != var6)) { _fun0021_ip = 539; continue _fun0021 }
 239:
                    var6 = var3.cachedMessageIds;
                    var6 = var6.length;
                    if(!(var7 !== var6)) { _fun0021_ip = 539; continue _fun0021 }
 257:
                    var6 = var2.length;
                    if(!(var7 !== var6)) { _fun0021_ip = 525; continue _fun0021 }
 269:
                    var6 = var3.cachedChannelId;
                    if(!(var8 === var6)) { _fun0021_ip = 581; continue _fun0021 }
 282:
                    var10 = var3.cachedMessageIds;
                    var9 = var10.sort;
                    var6 = var12.compare;
                    var9 = var9.bind(var10)(var6);
                    var6 = var9.reverse;
                    var6 = var6.bind(var9)();
                    var11 = var6[var7];
                    var9 = var2.sort;
                    var6 = var12.compare;
                    var9 = var9.bind(var2)(var6);
                    var6 = var9.reverse;
                    var6 = var6.bind(var9)();
                    var10 = var6[var7];
                    var6 = global;
                    var9 = var6.Math;
                    var7 = var9.floor;
                    var6 = var12.extractTimestamp;
                    var10 = var6.bind(var12)(var10);
                    var6 = var12.extractTimestamp;
                    var6 = var6.bind(var12)(var11);
                    var10 = var10 - var6;
                    var6 = 1000;
                    var6 = var10 / var6;
                    var6 = var7.bind(var9)(var6);
                    var3['messageCacheAgeSeconds'] = var6;
                    var6 = var2.filter;
                    var5 = function(arg1) {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                            var1 = _closure3_slot0;
                            var4 = var1.cachedMessageIds;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0022_ip = 37; continue _fun0022 }
 24:
                            var3 = var4.includes;
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
 37:
                            return var1;
                        }
                    };
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.length;
                    var7 = var3.cachedChannelCounts;
                    var6 = var7.get;
                    var6 = var6.bind(var7)(var8);
                    var7 = var4 != var6;
                    var4 = null;
                    if(!var7) { _fun0021_ip = 459; continue _fun0021 }
 456:
                    var4 = var6;
 459:
                    var3['messageCacheCount'] = var4;
                    var3['messageCacheHavingCount'] = var5;
                    var4 = var2.length;
                    var4 = var4 - var5;
                    var3['messageCacheMissingCount'] = var4;
                    var2 = var2.length;
                    var3['messageRenderFullCount'] = var2;
                    var2 = var3.cachedMessageIds;
                    var2 = var2.length;
                    var3['messageRenderCachedCount'] = var2;
                    var2 = arg4;
                    var3['messageRenderHasMoreAfter'] = var2;
                    _fun0021_ip = 581; continue _fun0021;
 525:
                    var2 = 'channel-empty';
                    var3['messageCacheMissingReason'] = var2;
                    return var1;
 539:
                    var2 = 'no-cache';
                    var3['messageCacheMissingReason'] = var2;
                    return var1;
 553:
                    var2 = 'channel-changed';
                    var3['messageCacheMissingReason'] = var2;
                    return var1;
 567:
                    var2 = 'no-cache';
                    var3['messageCacheMissingReason'] = var2;
                    return var1;
 581:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'getStartTime';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var1 = arg1;
                    var2 = this;
                    var3 = var2.extraProperties;
                    var3 = var3.headless_task_ran;
                    if(!var3) { _fun0023_ip = 33; continue _fun0023 }
 21:
                    var4 = var2.firstAppActiveTime;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0023_ip = 58; continue _fun0023 }
 33:
                    var3 = null;
                    if(!(var3 != var1)) { _fun0023_ip = 45; continue _fun0023 }
 39:
                    var3 = 0;
                    if(!(var1 <= var3)) { _fun0023_ip = 56; continue _fun0023 }
 45:
                    var3 = var2.loadIndex;
                    var1 = var3.start;
 56:
                    _fun0023_ip = 64; continue _fun0023;
 58:
                    var1 = var2.firstAppActiveTime;
 64:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'processNativeLogs';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var23 = this;
                    var2 = var23.getStartTime;
                    var1 = arg2;
                    var22 = var2.bind(var23)(var1);
                    var3 = _closure1_slot16;
                    var1 = undefined;
                    var2 = arg1;
                    var20 = var3.bind(var1)(var2);
                    var3 = var20.bind(var1)();
                    var2 = var3.done;
                    var19 = null;
                    var18 = 'ChatModule.updateRows() Finish';
                    var17 = 'ChatModule.updateRows() Start';
                    var16 = 'CacheStorage Init End';
                    var15 = 'CacheStorage Init Start';
                    var14 = 'REACT_BRIDGE_LOADING_END';
                    var13 = 'REACT_BRIDGE_LOADING_START';
                    var12 = 'CREATE_UI_MANAGER_MODULE_END';
                    var11 = 'CREATE_UI_MANAGER_MODULE_START';
                    var10 = 'CREATE_CATALYST_INSTANCE_END';
                    var9 = 'CREATE_CATALYST_INSTANCE_START';
                    var8 = 'PROCESS_PACKAGES_END';
                    var7 = 'PROCESS_PACKAGES_START';
                    var6 = 'GET_REACT_INSTANCE_MANAGER_END';
                    var5 = 'GET_REACT_INSTANCE_MANAGER_START';
                    var4 = 'Finish MainApplication.initialize()';
                    if(var2) { _fun0024_ip = 784; continue _fun0024 }
 141:
                    var2 = var3.value;
                    var24 = var2.label;
                    if(!(var4 !== var24)) { _fun0024_ip = 738; continue _fun0024 }
 158:
                    if(!(var5 !== var24)) { _fun0024_ip = 708; continue _fun0024 }
 165:
                    if(!(var6 !== var24)) { _fun0024_ip = 678; continue _fun0024 }
 172:
                    if(!(var7 !== var24)) { _fun0024_ip = 648; continue _fun0024 }
 179:
                    if(!(var8 !== var24)) { _fun0024_ip = 618; continue _fun0024 }
 186:
                    if(!(var9 !== var24)) { _fun0024_ip = 585; continue _fun0024 }
 193:
                    if(!(var10 !== var24)) { _fun0024_ip = 552; continue _fun0024 }
 200:
                    if(!(var11 !== var24)) { _fun0024_ip = 519; continue _fun0024 }
 207:
                    if(!(var12 !== var24)) { _fun0024_ip = 486; continue _fun0024 }
 214:
                    if(!(var13 !== var24)) { _fun0024_ip = 453; continue _fun0024 }
 221:
                    if(!(var14 !== var24)) { _fun0024_ip = 420; continue _fun0024 }
 228:
                    if(!(var15 !== var24)) { _fun0024_ip = 387; continue _fun0024 }
 235:
                    if(!(var16 !== var24)) { _fun0024_ip = 354; continue _fun0024 }
 239:
                    if(!(var17 !== var24)) { _fun0024_ip = 302; continue _fun0024 }
 243:
                    if(!(var18 === var24)) { _fun0024_ip = 766; continue _fun0024 }
 250:
                    var24 = var23.extraProperties;
                    var24 = var24.time_first_native_message_render_end;
                    if(!(var19 == var24)) { _fun0024_ip = 766; continue _fun0024 }
 269:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_first_native_message_render_end'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 302:
                    var24 = var23.extraProperties;
                    var24 = var24.time_first_native_message_render_start;
                    if(!(var19 == var24)) { _fun0024_ip = 766; continue _fun0024 }
 321:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_first_native_message_render_start'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 354:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_init_native_storage_end'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 387:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_init_native_storage_start'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 420:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_react_bridge_loading_end'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 453:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_react_bridge_loading_start'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 486:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_create_ui_manager_module_end'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 519:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_create_ui_manager_module_start'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 552:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_create_catalyst_instance_end'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 585:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_create_catalyst_instance_start'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 618:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_process_packages_end'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 648:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_process_packages_start'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 678:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_get_react_instance_manager_end'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 708:
                    var25 = var23.extraProperties;
                    var26 = _closure1_slot19;
                    var24 = var2.timestamp;
                    var24 = var26.bind(var1)(var22, var24);
                    var25['time_get_react_instance_manager_start'] = var24;
                    _fun0024_ip = 766; continue _fun0024;
 738:
                    var24 = var23.extraProperties;
                    var25 = _closure1_slot19;
                    var2 = var2.timestamp;
                    var2 = var25.bind(var1)(var22, var2);
                    var24['time_main_application_initialize_end'] = var2;
 766:
                    var24 = var20.bind(var1)();
                    var2 = var24.done;
                    var3 = var24;
                    if(!var2) { _fun0024_ip = 141; continue _fun0024 }
 784:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'serializeTTITracker';
            var5['key'] = var7;
            var6 = function value(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                    var2 = this;
                    var4 = var2.getStartTime;
                    var3 = arg1;
                    var7 = var4.bind(var2)(var3);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot4;
                    var4 = 9;
                    var5 = var8[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var6 = _closure1_slot2;
                    var3 = 6;
                    var3 = var8[var3];
                    var3 = var6.bind(var4)(var3);
                    var6 = var3.logGroups;
                    var3 = 0;
                    var3 = var6[var3];
                    var3 = var3.logs;
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.filter;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.log;
                        var2 = var3.startsWith;
                        var1 = 'Require ';
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var5.bind(var6)(var3);
                    var3 = var5.map;
                    var1 = function(arg1) {
                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.delta;
                            var1 = null;
                            var3 = var1 != var2;
                            var1 = 0;
                            if(!var3) { _fun0026_ip = 23; continue _fun0026 }
 20:
                            var1 = var2;
 23:
                            return var1;
                        }
                    };
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.sum;
                    var5 = var1.bind(var3)();
                    var1 = {};
                    var9 = var2.extraProperties;
                    var10 = var1;
                    var3 = copyDataProperties(var10, var9);
                    var6 = var2.loadIndex;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_index_start';
                    var1[var3] = var6;
                    var6 = var2.loadIndex;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_index_end';
                    var1[var3] = var6;
                    var6 = var2.beginFastConnect;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_begin_fast_connect_start';
                    var1[var3] = var6;
                    var6 = var2.beginFastConnect;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_begin_fast_connect_end';
                    var1[var3] = var6;
                    var6 = var2.loadImports;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_imports_start';
                    var1[var3] = var6;
                    var6 = var2.loadImports;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_imports_end';
                    var1[var3] = var6;
                    var6 = var2.init;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_init_start';
                    var1[var3] = var6;
                    var6 = var2.init;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_init_end';
                    var1[var3] = var6;
                    var6 = var2.loadStorage;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_storage_start';
                    var1[var3] = var6;
                    var6 = var2.loadStorage;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_storage_end';
                    var1[var3] = var6;
                    var6 = var2.parseStorage;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_parse_storage_start';
                    var1[var3] = var6;
                    var6 = var2.parseStorage;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_parse_storage_end';
                    var1[var3] = var6;
                    var6 = var2.loadMiniCache;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_mini_cache_start';
                    var1[var3] = var6;
                    var6 = var2.loadMiniCache;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_mini_cache_end';
                    var1[var3] = var6;
                    var6 = var2.fetchGuildCache;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_fetch_initial_guild_start';
                    var1[var3] = var6;
                    var6 = var2.fetchGuildCache;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_fetch_initial_guild_end';
                    var1[var3] = var6;
                    var6 = var2.loadCachedMessages;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_cached_messages_start';
                    var1[var3] = var6;
                    var6 = var2.loadCachedMessages;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_cached_messages_end';
                    var1[var3] = var6;
                    var6 = var2.renderApp;
                    var3 = var6.serialize;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_render_app_start';
                    var1[var3] = var6;
                    var6 = var2.renderAppEffect;
                    var3 = var6.serialize;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_render_app_effect_start';
                    var1[var3] = var6;
                    var6 = var2.renderMessages;
                    var3 = var6.serialize;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_render_messages_end';
                    var1[var3] = var6;
                    var6 = var2.renderMessagesWithCache;
                    var3 = var6.serialize;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_render_messages_with_cache_end';
                    var1[var3] = var6;
                    var6 = var2.renderLatestMessages;
                    var3 = var6.serialize;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_render_latest_messages_end';
                    var1[var3] = var6;
                    var6 = var2.displayMessagesWithCache;
                    var3 = var6.serialize;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_display_messages_with_cache_end';
                    var1[var3] = var6;
                    var6 = var2.displayLatestMessages;
                    var3 = var6.serialize;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_display_latest_messages_end';
                    var1[var3] = var6;
                    var6 = var2.firstRowGenerator;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_first_row_generator_start';
                    var1[var3] = var6;
                    var6 = var2.firstRowGenerator;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_first_row_generator_end';
                    var1[var3] = var6;
                    var6 = var2.initialGuild;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_initial_guild_start';
                    var1[var3] = var6;
                    var6 = var2.initialGuild;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_initial_guild_end';
                    var1[var3] = var6;
                    var6 = var2.loadLazyCache;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_lazy_cache_start';
                    var1[var3] = var6;
                    var6 = var2.loadLazyCache;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_lazy_cache_end';
                    var1[var3] = var6;
                    var6 = var2.fetchLazyCache;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_fetch_lazy_cache_start';
                    var1[var3] = var6;
                    var6 = var2.fetchLazyCache;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_fetch_lazy_cache_end';
                    var1[var3] = var6;
                    var6 = var2.parseLazyCache;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_parse_lazy_cache_start';
                    var1[var3] = var6;
                    var6 = var2.parseLazyCache;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_parse_lazy_cache_end';
                    var1[var3] = var6;
                    var6 = var2.fetchStaleChannels;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_fetch_stale_channels_start';
                    var1[var3] = var6;
                    var6 = var2.fetchStaleChannels;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_fetch_stale_channels_end';
                    var1[var3] = var6;
                    var6 = var2.deserializeCache;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_deserialize_cache_start';
                    var1[var3] = var6;
                    var6 = var2.deserializeCache;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_deserialize_cache_end';
                    var1[var3] = var6;
                    var6 = var2.dispatchLazyCache;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_dispatch_lazy_cache_start';
                    var1[var3] = var6;
                    var6 = var2.dispatchLazyCache;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_dispatch_lazy_cache_end';
                    var1[var3] = var6;
                    var6 = var2.parseReady;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_parse_ready_start';
                    var1[var3] = var6;
                    var6 = var2.parseReady;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_parse_ready_end';
                    var1[var3] = var6;
                    var6 = var2.ready;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_ready_start';
                    var1[var3] = var6;
                    var6 = var2.ready;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_ready_end';
                    var1[var3] = var6;
                    var6 = var2.hydrateReady;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_hydrate_ready_start';
                    var1[var3] = var6;
                    var6 = var2.hydrateReady;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_hydrate_ready_end';
                    var1[var3] = var6;
                    var6 = var2.dispatchReady;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_dispatch_ready_start';
                    var1[var3] = var6;
                    var6 = var2.dispatchReady;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_dispatch_ready_end';
                    var1[var3] = var6;
                    var6 = var2.parseReadySupplemental;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_parse_ready_supplemental_start';
                    var1[var3] = var6;
                    var6 = var2.parseReadySupplemental;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_parse_ready_supplemental_end';
                    var1[var3] = var6;
                    var6 = var2.readySupplemental;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_ready_supplemental_start';
                    var1[var3] = var6;
                    var6 = var2.readySupplemental;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_ready_supplemental_end';
                    var1[var3] = var6;
                    var6 = var2.hydrateReadySupplemental;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_hydrate_ready_supplemental_start';
                    var1[var3] = var6;
                    var6 = var2.hydrateReadySupplemental;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_hydrate_ready_supplemental_end';
                    var1[var3] = var6;
                    var6 = var2.dispatchReadySupplemental;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_dispatch_ready_supplemental_start';
                    var1[var3] = var6;
                    var6 = var2.dispatchReadySupplemental;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_dispatch_ready_supplemental_end';
                    var1[var3] = var6;
                    var6 = var2.fetchMessages;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_fetch_messages_start';
                    var1[var3] = var6;
                    var6 = var2.fetchMessages;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_fetch_messages_end';
                    var1[var3] = var6;
                    var6 = var2.dispatchMessages;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_dispatch_messages_start';
                    var1[var3] = var6;
                    var6 = var2.dispatchMessages;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_dispatch_messages_end';
                    var1[var3] = var6;
                    var6 = var2.loadFastConnectNativeModule;
                    var3 = var6.serializeStart;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_fast_connect_native_module_start';
                    var1[var3] = var6;
                    var6 = var2.loadFastConnectNativeModule;
                    var3 = var6.serializeEnd;
                    var6 = var3.bind(var6)(var7);
                    var3 = 'time_load_fast_connect_native_module_end';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.identify_total_server_duration_ms;
                    var3 = 'identify_total_server_duration_ms';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.identify_api_duration_ms;
                    var3 = 'identify_api_duration_ms';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.identify_guilds_duration_ms;
                    var3 = 'identify_guilds_duration_ms';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.compressed_byte_size;
                    var3 = 'ready_compressed_byte_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.uncompressed_byte_size;
                    var3 = 'ready_uncompressed_byte_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.identify_compressed_byte_size;
                    var3 = 'identify_compressed_byte_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.identify_uncompressed_byte_size;
                    var3 = 'identify_uncompressed_byte_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.compression_algorithm;
                    var3 = 'ready_compression_algorithm';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.packing_algorithm;
                    var3 = 'ready_packing_algorithm';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.unpack_duration_ms;
                    var3 = 'ready_unpack_duration_ms';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.is_reconnect;
                    var3 = 'is_reconnect';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.is_fast_connect;
                    var3 = 'is_fast_connect';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.did_force_clear_guild_hashes;
                    var3 = 'did_force_clear_guild_hashes';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.num_guilds;
                    var3 = 'num_guilds';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.num_guild_channels;
                    var3 = 'num_changed_guild_channels';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.presences_size;
                    var3 = 'ready_presences_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.users_size;
                    var3 = 'ready_users_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.read_states_size;
                    var3 = 'ready_read_states_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.private_channels_size;
                    var3 = 'ready_private_channels_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.user_guild_settings_size;
                    var3 = 'ready_user_guild_settings_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.relationships_size;
                    var3 = 'ready_relationships_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.experiments_size;
                    var3 = 'ready_experiments_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.user_settings_size;
                    var3 = 'ready_user_settings_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.remaining_data_size;
                    var3 = 'ready_remaining_data_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.guild_channels_size;
                    var3 = 'ready_guild_channels_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.guild_members_size;
                    var3 = 'ready_guild_members_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.guild_presences_size;
                    var3 = 'ready_guild_presences_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.guild_roles_size;
                    var3 = 'ready_guild_roles_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.guild_emojis_size;
                    var3 = 'ready_guild_emojis_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.guild_remaining_data_size;
                    var3 = 'ready_guild_remaining_data_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.guild_threads_size;
                    var3 = 'ready_guild_threads_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.guild_stickers_size;
                    var3 = 'ready_guild_stickers_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.guild_events_size;
                    var3 = 'ready_guild_events_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.guild_features_size;
                    var3 = 'ready_guild_features_size';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.size_metrics_duration_ms;
                    var3 = 'ready_size_metrics_duration_ms';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.had_cache_at_startup;
                    var3 = 'had_cache_at_startup';
                    var1[var3] = var6;
                    var3 = var2.readyProperties;
                    var6 = var3.used_cache_at_startup;
                    var3 = 'used_cache_at_startup';
                    var1[var3] = var6;
                    var6 = var2.wasAuthenticated;
                    var3 = 'was_authenticated';
                    var1[var3] = var6;
                    var6 = var2.didBackgroundApp;
                    var3 = 'did_background_app';
                    var1[var3] = var6;
                    var6 = var2.interstitial;
                    var3 = 'interstitial';
                    var1[var3] = var6;
                    var6 = var2.messageCacheMissingReason;
                    var3 = 'message_cache_missing_reason';
                    var1[var3] = var6;
                    var6 = var2.messageCacheAgeSeconds;
                    var3 = 'message_cache_age_seconds';
                    var1[var3] = var6;
                    var6 = var2.messageCacheCount;
                    var3 = 'message_cache_count';
                    var1[var3] = var6;
                    var6 = var2.messageCacheHavingCount;
                    var3 = 'message_cache_having_count';
                    var1[var3] = var6;
                    var6 = var2.messageCacheMissingCount;
                    var3 = 'message_cache_missing_count';
                    var1[var3] = var6;
                    var6 = var2.messageRenderFullCount;
                    var3 = 'message_render_full_count';
                    var1[var3] = var6;
                    var6 = var2.messageRenderCachedCount;
                    var3 = 'message_render_cached_count';
                    var1[var3] = var6;
                    var6 = var2.messageRenderHasMoreAfter;
                    var3 = 'message_render_has_more_after';
                    var1[var3] = var6;
                    var3 = var2.loadImports;
                    var6 = var3.end;
                    var3 = var2.loadIndex;
                    var3 = var3.start;
                    var3 = var6 - var3;
                    var5 = var3 + var5;
                    var3 = 'duration_major_js_imports';
                    var1[var3] = var5;
                    var3 = var2.cacheInfo;
                    var5 = null;
                    var7 = var5 == var3;
                    var6 = undefined;
                    if(var7) { _fun0025_ip = 2980; continue _fun0025 }
 2974:
                    var6 = var3.guilds;
 2980:
                    var3 = 'cache_num_guilds';
                    var1[var3] = var6;
                    var3 = var2.cacheInfo;
                    var7 = var5 == var3;
                    var6 = undefined;
                    if(var7) { _fun0025_ip = 3012; continue _fun0025 }
 3006:
                    var6 = var3.privateChannels;
 3012:
                    var3 = 'cache_num_private_channels';
                    var1[var3] = var6;
                    var3 = var2.cacheInfo;
                    var7 = var5 == var3;
                    var6 = undefined;
                    if(var7) { _fun0025_ip = 3044; continue _fun0025 }
 3038:
                    var6 = var3.basicChannels;
 3044:
                    var3 = 'cache_num_basic_channels';
                    var1[var3] = var6;
                    var3 = var2.cacheInfo;
                    var7 = var5 == var3;
                    var6 = undefined;
                    if(var7) { _fun0025_ip = 3076; continue _fun0025 }
 3070:
                    var6 = var3.basicChannelsStale;
 3076:
                    var3 = 'cache_num_basic_channels_stale';
                    var1[var3] = var6;
                    var3 = var2.cacheInfo;
                    var7 = var5 == var3;
                    var6 = undefined;
                    if(var7) { _fun0025_ip = 3108; continue _fun0025 }
 3102:
                    var6 = var3.fullChannels;
 3108:
                    var3 = 'cache_num_full_channels';
                    var1[var3] = var6;
                    var3 = var2.cacheInfo;
                    var5 = var5 == var3;
                    var4 = undefined;
                    if(var5) { _fun0025_ip = 3140; continue _fun0025 }
 3134:
                    var4 = var3.fullChannelGuilds;
 3140:
                    var3 = 'cache_num_full_channel_guilds';
                    var1[var3] = var4;
                    var3 = var2.loadIndex;
                    var4 = var3.endNumImports;
                    var3 = 'num_imports_at_load_index_end';
                    var1[var3] = var4;
                    var3 = var2.init;
                    var4 = var3.endNumImports;
                    var3 = 'num_imports_at_init_end';
                    var1[var3] = var4;
                    var3 = var2.loadMiniCache;
                    var4 = var3.endNumImports;
                    var3 = 'num_imports_at_load_mini_cache_end';
                    var1[var3] = var4;
                    var3 = var2.renderApp;
                    var4 = var3.numImports;
                    var3 = 'num_imports_at_render_app_start';
                    var1[var3] = var4;
                    var3 = var2.renderAppEffect;
                    var4 = var3.numImports;
                    var3 = 'num_imports_at_render_app_effect_start';
                    var1[var3] = var4;
                    var3 = var2.renderMessages;
                    var4 = var3.numImports;
                    var3 = 'num_imports_at_render_messages_end';
                    var1[var3] = var4;
                    var3 = var2.renderMessagesWithCache;
                    var4 = var3.numImports;
                    var3 = 'num_imports_at_render_messages_with_cache_end';
                    var1[var3] = var4;
                    var3 = var2.renderLatestMessages;
                    var4 = var3.numImports;
                    var3 = 'num_imports_at_render_latest_messages_end';
                    var1[var3] = var4;
                    var3 = var2.loadLazyCache;
                    var4 = var3.startNumImports;
                    var3 = 'num_imports_at_load_lazy_cache_start';
                    var1[var3] = var4;
                    var3 = var2.loadLazyCache;
                    var4 = var3.endNumImports;
                    var3 = 'num_imports_at_load_lazy_cache_end';
                    var1[var3] = var4;
                    var3 = var2.ready;
                    var4 = var3.startNumImports;
                    var3 = 'num_imports_at_ready_start';
                    var1[var3] = var4;
                    var3 = var2.ready;
                    var4 = var3.endNumImports;
                    var3 = 'num_imports_at_ready_end';
                    var1[var3] = var4;
                    var3 = var2.readySupplemental;
                    var4 = var3.startNumImports;
                    var3 = 'num_imports_at_ready_supplemental_start';
                    var1[var3] = var4;
                    var3 = var2.readySupplemental;
                    var4 = var3.endNumImports;
                    var3 = 'num_imports_at_ready_supplemental_end';
                    var1[var3] = var4;
                    var3 = global;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.loadIndex;
                    var4 = var4.startImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_load_index_start';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.loadIndex;
                    var4 = var4.endImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_load_index_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.init;
                    var4 = var4.endImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_init_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.loadMiniCache;
                    var4 = var4.endImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_load_mini_cache_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.renderApp;
                    var4 = var4.importTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_render_app_start';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.renderAppEffect;
                    var4 = var4.importTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_render_app_effect_start';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.renderMessages;
                    var4 = var4.importTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_render_messages_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.renderMessagesWithCache;
                    var4 = var4.importTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_render_messages_with_cache_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.renderLatestMessages;
                    var4 = var4.importTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_render_latest_messages_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.loadLazyCache;
                    var4 = var4.startImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_load_lazy_cache_start';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.loadLazyCache;
                    var4 = var4.endImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_load_lazy_cache_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.ready;
                    var4 = var4.startImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_ready_start';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.ready;
                    var4 = var4.endImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_ready_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.readySupplemental;
                    var4 = var4.startImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_ready_supplemental_start';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.readySupplemental;
                    var4 = var4.endImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_ready_supplemental_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.imports;
                    var4 = var4.polyfillsEnd;
                    var4 = var4.time;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_polyfills_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.imports;
                    var4 = var4.sentryEnd;
                    var4 = var4.time;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_sentry_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.beginFastConnect;
                    var4 = var4.startImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_fast_connect_start';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.beginFastConnect;
                    var4 = var4.endImportTime;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_fast_connect_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.imports;
                    var4 = var4.appStateChangeStart;
                    var4 = var4.time;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_app_state_change_start';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.imports;
                    var4 = var4.appStateChangeEnd;
                    var4 = var4.time;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_app_state_change_end';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.imports;
                    var4 = var4.loadMiniCacheStart;
                    var4 = var4.time;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_load_mini_cache_start';
                    var1[var4] = var5;
                    var6 = var3.Math;
                    var5 = var6.ceil;
                    var4 = var2.imports;
                    var4 = var4.loadStorageStart;
                    var4 = var4.time;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'duration_imports_at_load_storage_start';
                    var1[var4] = var5;
                    var4 = var3.Math;
                    var3 = var4.ceil;
                    var2 = var2.imports;
                    var2 = var2.loadStorageEnd;
                    var2 = var2.time;
                    var3 = var3.bind(var4)(var2);
                    var2 = 'duration_imports_at_load_storage_end';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var5['value'] = var6;
            var1[10] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var2 = var2.bind(var1)(var4);
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var14 = var4;
        var2 = new var14[var2](var13);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 10;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/tti_analytics/TTITracker.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();