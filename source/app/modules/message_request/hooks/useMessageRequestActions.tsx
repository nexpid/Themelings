// app/modules/message_request/hooks/useMessageRequestActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MessageRequestAnalyticsAction;
    var _closure1_slot7 = var7;
    var4 = var4.BATCH_REJECT_LIMIT;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/hooks/useMessageRequestActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMessageRequestActions(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var15 = var2.user;
            var _closure2_slot0 = var15;
            var10 = var2.onAcceptSuccess;
            var _closure2_slot1 = var10;
            var18 = var2.onRejectSuccess;
            var _closure2_slot2 = var18;
            var17 = var2.onError;
            var _closure2_slot3 = var17;
            var11 = undefined;
            var _closure2_slot9 = var11;
            var _closure2_slot10 = var11;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var2 = var3.bind(var11)(var2);
            var12 = var2.bind(var11)();
            var19 = _closure1_slot5;
            var2 = var19.useState;
            var16 = false;
            var2 = var2.bind(var19)(var16);
            var14 = _closure1_slot4;
            var13 = 2;
            var3 = var14.bind(var11)(var2, var13);
            var2 = 0;
            var6 = var3[var2];
            var9 = 1;
            var3 = var3[var9];
            var _closure2_slot4 = var3;
            var3 = var19.useState;
            var3 = var3.bind(var19)(var16);
            var3 = var14.bind(var11)(var3, var13);
            var5 = var3[var2];
            var3 = var3[var9];
            var _closure2_slot5 = var3;
            var3 = var19.useState;
            var3 = var3.bind(var19)(var16);
            var3 = var14.bind(var11)(var3, var13);
            var4 = var3[var2];
            var3 = var3[var9];
            var _closure2_slot6 = var3;
            var3 = var19.useState;
            var3 = var3.bind(var19)(var16);
            var8 = var14.bind(var11)(var3, var13);
            var3 = var8[var2];
            var8 = var8[var9];
            var _closure2_slot7 = var8;
            var8 = var19.useState;
            var8 = var8.bind(var19)(var16);
            var8 = var14.bind(var11)(var8, var13);
            var2 = var8[var2];
            var8 = var8[var9];
            var _closure2_slot8 = var8;
            var16 = var6;
            if(var16) { _fun0004_ip = 248; continue _fun0004 }
 245:
            var16 = var5;
 248:
            if(var16) { _fun0004_ip = 254; continue _fun0004 }
 251:
            var16 = var4;
 254:
            _closure2_slot9 = var16;
            var14 = _closure1_slot5;
            var9 = var14.useCallback;
            var7 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 232; continue _fun0005 }
 10:
                            var5 = arg1;
                            var2 = undefined;
                            var3 = undefined;
                            var6 = _closure2_slot9;
                            if(var6) { _fun0005_ip = 229; continue _fun0005 }
 30:
                            var6 = _closure2_slot4;
                            var7 = true;
                            var6 = var6.bind(var2)(var7);
 41: // try_start_0 // try_start_1
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 7;
                            var6 = var9[var6];
                            var8 = var8.bind(var2)(var6);
                            var6 = var8.acceptMessageRequest;
                            var5 = var6.bind(var8)(var5);
                            SaveGenerator(address=79);
 77:
                            return var5;
 79:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0005_ip = 114; continue _fun0005 }
 85:
                            var6 = _closure2_slot7;
                            var6 = var6.bind(var2)(var7);
                            var7 = _closure2_slot1;
                            var6 = null;
                            if(!(var6 != var7)) { _fun0005_ip = 112; continue _fun0005 }
 104:
                            var6 = _closure2_slot1;
                            var6 = var6.bind(var2)();
 112: // try_end0
                            _fun0005_ip = 201; continue _fun0005;
 114: // try_end1
                            var7 = _closure2_slot4;
                            var6 = false;
                            var6 = var7.bind(var2)(var6);
                            return var5;
 128: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=6);
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 8;
                            var5 = var8[var5];
                            var5 = var6.bind(var2)(var5);
                            var5 = var5.APIError;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var11 = var6;
                            var10 = var7;
                            var5 = new var11[var5](var10, var9);
                            var3 = var5 instanceof Object ? var5 : var6;
                            var6 = _closure2_slot3;
                            var5 = null;
                            if(!(var5 != var6)) { _fun0005_ip = 201; continue _fun0005 }
 192:
                            var5 = _closure2_slot3;
                            var3 = var5.bind(var2)(var3);
 201: // try_end2
                            var5 = _closure2_slot4;
                            var3 = false;
                            var3 = var5.bind(var2)(var3);
                            _fun0005_ip = 229; continue _fun0005;
 214: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=2);
                            var5 = _closure2_slot4;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                            throw var3;
 229:
                            return var2;
 232:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var8 = var7.bind(var11)();
            var7 = new Array(3);
            var7[0] = var16;
            var7[1] = var10;
            var7[2] = var17;
            var10 = var9.bind(var14)(var8, var7);
            _closure2_slot10 = var10;
            var9 = var14.useCallback;
            var7 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0006_ip = 232; continue _fun0006 }
 10:
                            var5 = arg1;
                            var2 = undefined;
                            var3 = undefined;
                            var6 = _closure2_slot9;
                            if(var6) { _fun0006_ip = 229; continue _fun0006 }
 30:
                            var6 = _closure2_slot5;
                            var7 = true;
                            var6 = var6.bind(var2)(var7);
 41: // try_start_0 // try_start_1
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 7;
                            var6 = var9[var6];
                            var8 = var8.bind(var2)(var6);
                            var6 = var8.rejectMessageRequest;
                            var5 = var6.bind(var8)(var5);
                            SaveGenerator(address=79);
 77:
                            return var5;
 79:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0006_ip = 114; continue _fun0006 }
 85:
                            var6 = _closure2_slot8;
                            var6 = var6.bind(var2)(var7);
                            var7 = _closure2_slot2;
                            var6 = null;
                            if(!(var6 != var7)) { _fun0006_ip = 112; continue _fun0006 }
 104:
                            var6 = _closure2_slot2;
                            var6 = var6.bind(var2)();
 112: // try_end0
                            _fun0006_ip = 201; continue _fun0006;
 114: // try_end1
                            var7 = _closure2_slot5;
                            var6 = false;
                            var6 = var7.bind(var2)(var6);
                            return var5;
 128: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=6);
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 8;
                            var5 = var8[var5];
                            var5 = var6.bind(var2)(var5);
                            var5 = var5.APIError;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var11 = var6;
                            var10 = var7;
                            var5 = new var11[var5](var10, var9);
                            var3 = var5 instanceof Object ? var5 : var6;
                            var6 = _closure2_slot3;
                            var5 = null;
                            if(!(var5 != var6)) { _fun0006_ip = 201; continue _fun0006 }
 192:
                            var5 = _closure2_slot3;
                            var3 = var5.bind(var2)(var3);
 201: // try_end2
                            var5 = _closure2_slot5;
                            var3 = false;
                            var3 = var5.bind(var2)(var3);
                            _fun0006_ip = 229; continue _fun0006;
 214: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=2);
                            var5 = _closure2_slot5;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                            throw var3;
 229:
                            return var2;
 232:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var8 = var7.bind(var11)();
            var7 = new Array(3);
            var7[0] = var16;
            var7[1] = var18;
            var7[2] = var17;
            var9 = var9.bind(var14)(var8, var7);
            var13 = var14.useCallback;
            var7 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0007_ip = 323; continue _fun0007 }
 10:
                            var8 = arg1;
                            var2 = undefined;
                            var6 = undefined;
                            var10 = undefined;
                            var11 = undefined;
                            var3 = undefined;
                            var5 = _closure2_slot9;
                            if(var5) { _fun0007_ip = 320; continue _fun0007 }
 36:
                            var5 = _closure2_slot5;
                            var7 = true;
                            var5 = var5.bind(var2)(var7);
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var9 = 9;
                            var9 = var13[var9];
                            var12 = var12.bind(var2)(var9);
                            var9 = var8;
                            var8 = _closure1_slot8;
                            var6 = var12.bind(var2)(var9, var8);
 83: // try_start_0 // try_start_2
                            var8 = _closure1_slot10;
                            var6 = var8.bind(var2)(var6);
                            var11 = var6;
                            var6 = var6.bind(var2)();
                            var10 = var6;
                            var6 = var6.done;
                            var9 = 7;
                            if(var6) { _fun0007_ip = 193; continue _fun0007 }
 113:
                            var6 = var10;
                            var12 = var6.value;
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var9];
                            var8 = var8.bind(var2)(var6);
                            var6 = var8.rejectMessageRequestBatch;
                            var6 = var6.bind(var8)(var12);
                            SaveGenerator(address=153);
 151:
                            return var6;
 153:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(var8) { _fun0007_ip = 179; continue _fun0007 }
 159:
                            var8 = var11;
                            var8 = var8.bind(var2)();
                            var10 = var8;
                            var8 = var8.done;
                            if(var8) { _fun0007_ip = 193; continue _fun0007 }
 177:
                            _fun0007_ip = 113; continue _fun0007;
 179: // try_end0 // try_end2
                            var9 = _closure2_slot5;
                            var8 = false;
                            var8 = var9.bind(var2)(var8);
                            return var6;
 193: // try_start_1 // try_start_3
                            var6 = _closure2_slot8;
                            var6 = var6.bind(var2)(var7);
                            var7 = _closure2_slot2;
                            var6 = null;
                            if(!(var6 != var7)) { _fun0007_ip = 220; continue _fun0007 }
 212:
                            var6 = _closure2_slot2;
                            var6 = var6.bind(var2)();
 220: // try_end1
                            _fun0007_ip = 292; continue _fun0007;
 222: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=6);
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 8;
                            var5 = var8[var5];
                            var5 = var6.bind(var2)(var5);
                            var5 = var5.APIError;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var16 = var6;
                            var15 = var7;
                            var5 = new var16[var5](var15, var14);
                            var3 = var5 instanceof Object ? var5 : var6;
                            var6 = _closure2_slot3;
                            var5 = null;
                            if(!(var5 != var6)) { _fun0007_ip = 292; continue _fun0007 }
 283:
                            var5 = _closure2_slot3;
                            var3 = var5.bind(var2)(var3);
 292: // try_end3
                            var5 = _closure2_slot5;
                            var3 = false;
                            var3 = var5.bind(var2)(var3);
                            _fun0007_ip = 320; continue _fun0007;
 305: // catch_target2 // catch_target3
                            CatchBlockStart(arg_register=2);
                            var5 = _closure2_slot5;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                            throw var3;
 320:
                            return var2;
 323:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var8 = var7.bind(var11)();
            var7 = new Array(3);
            var7[0] = var16;
            var7[1] = var18;
            var7[2] = var17;
            var8 = var13.bind(var14)(var8, var7);
            var13 = var14.useCallback;
            var7 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            StartGenerator();
                            var9 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0008_ip = 285; continue _fun0008 }
 15:
                            var _closure5_slot0 = var9;
                            var2 = _closure2_slot9;
                            if(var2) { _fun0008_ip = 280; continue _fun0008 }
 32:
                            var2 = _closure2_slot0;
                            var5 = null;
                            if(!(var5 != var2)) { _fun0008_ip = 193; continue _fun0008 }
 45:
                            var8 = _closure1_slot6;
                            var6 = var8.getMutualGuilds;
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var4 = var6.bind(var8)(var4);
                            if(!(var5 == var4)) { _fun0008_ip = 193; continue _fun0008 }
 76:
                            var6 = _closure2_slot6;
                            var5 = undefined;
                            var4 = true;
                            var4 = var6.bind(var5)(var4);
 89: // try_start_0 // try_start_1
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 10;
                            var2 = var6[var2];
                            var8 = var4.bind(var5)(var2);
                            var10 = _closure2_slot0;
                            var6 = var10.id;
                            var4 = var10.getAvatarURL;
                            var2 = 80;
                            var4 = var4.bind(var10)(var5, var2);
                            var2 = {'withMutualGuilds': true, 'withMutualFriendsCount': true};
                            var2 = var8.bind(var5)(var6, var4, var2);
                            SaveGenerator(address=158);
 156:
                            return var2;
 158:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0008_ip = 166; continue _fun0008 }
 164: // try_end0
                            _fun0008_ip = 182; continue _fun0008;
 166: // try_end1
                            var6 = _closure2_slot6;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
 180: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=1);
 182: // try_end2
                            var4 = _closure2_slot6;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
 193:
                            var2 = function() {
                                var4 = _closure1_slot3;
                                var3 = undefined;
                                var2 = function* () {
                                    var1 = function* anon_0_() {
                                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0009_ip = 229; continue _fun0009 }
 10:
                                            var2 = _closure2_slot0;
                                            var10 = null;
                                            if(!(var10 == var2)) { _fun0009_ip = 29; continue _fun0009 }
 23:
                                            var9 = new Array(0);
                                            _fun0009_ip = 87; continue _fun0009;
 29:
                                            var5 = _closure1_slot6;
                                            var3 = var5.getMutualGuilds;
                                            var2 = _closure2_slot0;
                                            var2 = var2.id;
                                            var6 = var3.bind(var5)(var2);
                                            var3 = var10 == var6;
                                            var2 = undefined;
                                            if(var3) { _fun0009_ip = 84; continue _fun0009 }
 65:
                                            var5 = var6.map;
                                            var3 = function(arg1) {
                                                var1 = arg1;
                                                var1 = var1.guild;
                                                var1 = var1.id;
                                                return var1;
                                            };
                                            var2 = var5.bind(var6)(var3);
 84:
                                            var9 = var2;
 87:
                                            var6 = _closure1_slot1;
                                            var5 = _closure1_slot2;
                                            var3 = 11;
                                            var5 = var5[var3];
                                            var3 = undefined;
                                            var8 = var6.bind(var3)(var5);
                                            var7 = var8.track;
                                            var5 = _closure1_slot9;
                                            var6 = var5.MESSAGE_REQUEST_ACTION;
                                            var5 = {};
                                            var2 = _closure1_slot7;
                                            var2 = var2.ACCEPT_CONFIRMATION_PROMPT;
                                            var5['action'] = var2;
                                            var11 = _closure5_slot0;
                                            var5['channel_id'] = var11;
                                            if(!(var10 == var9)) { _fun0009_ip = 162; continue _fun0009 }
 158:
                                            var9 = new Array(0);
 162:
                                            var5['mutual_guild_ids'] = var9;
                                            var9 = _closure2_slot0;
                                            var10 = var10 == var9;
                                            var9 = undefined;
                                            if(var10) { _fun0009_ip = 189; continue _fun0009 }
 180:
                                            var10 = _closure2_slot0;
                                            var9 = var10.id;
 189:
                                            var5['other_user_id'] = var9;
                                            var5 = var7.bind(var8)(var6, var5);
                                            var4 = _closure2_slot10;
                                            var2 = _closure5_slot0;
                                            var2 = var4.bind(var3)(var2);
                                            SaveGenerator(address=217);
 215:
                                            return var2;
 217:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0009_ip = 226; continue _fun0009 }
 223:
                                            return var3;
 226:
                                            return var2;
 229:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var2 = var4.bind(var3)(var2);
                                var _closure6_slot0 = var2;
                                var1 = function() {
                                    var1 = undefined;
                                    var4 = _closure6_slot0;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                return var1;
                            };
                            var6 = undefined;
                            var8 = var2.bind(var6)();
                            var4 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 12;
                            var2 = var10[var2];
                            var6 = var4.bind(var6)(var2);
                            var4 = var6.openAcceptMessageRequestConfirmModal;
                            var2 = {};
                            var2['channelId'] = var9;
                            var2['onConfirm'] = var8;
                            var7 = function onCancel() {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                    var1 = _closure2_slot0;
                                    var8 = null;
                                    if(!(var8 == var1)) { _fun0010_ip = 19; continue _fun0010 }
 13:
                                    var6 = new Array(0);
                                    _fun0010_ip = 77; continue _fun0010;
 19:
                                    var3 = _closure1_slot6;
                                    var2 = var3.getMutualGuilds;
                                    var1 = _closure2_slot0;
                                    var1 = var1.id;
                                    var4 = var2.bind(var3)(var1);
                                    var2 = var8 == var4;
                                    var1 = undefined;
                                    if(var2) { _fun0010_ip = 74; continue _fun0010 }
 55:
                                    var3 = var4.map;
                                    var2 = function(arg1) {
                                        var1 = arg1;
                                        var1 = var1.guild;
                                        var1 = var1.id;
                                        return var1;
                                    };
                                    var1 = var3.bind(var4)(var2);
 74:
                                    var6 = var1;
 77:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 11;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var5 = var3.bind(var1)(var2);
                                    var4 = var5.track;
                                    var2 = _closure1_slot9;
                                    var3 = var2.MESSAGE_REQUEST_ACTION;
                                    var2 = {};
                                    var9 = _closure1_slot7;
                                    var9 = var9.DISMISS_CONFIRMATION_PROMPT;
                                    var2['action'] = var9;
                                    var9 = _closure5_slot0;
                                    var2['channel_id'] = var9;
                                    if(!(var8 == var6)) { _fun0010_ip = 152; continue _fun0010 }
 148:
                                    var6 = new Array(0);
 152:
                                    var2['mutual_guild_ids'] = var6;
                                    var6 = _closure2_slot0;
                                    var8 = var8 == var6;
                                    var6 = undefined;
                                    if(var8) { _fun0010_ip = 179; continue _fun0010 }
 170:
                                    var7 = _closure2_slot0;
                                    var6 = var7.id;
 179:
                                    var2['other_user_id'] = var6;
                                    var2 = var4.bind(var5)(var3, var2);
                                    return var1;
                                }
                            };
                            var2['onCancel'] = var7;
                            var2 = var4.bind(var6)(var2);
                            _fun0008_ip = 280; continue _fun0008;
 265: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot6;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
 280:
                            var2 = undefined;
                            return var2;
 285:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var11 = var7.bind(var11)();
            var7 = new Array(3);
            var7[0] = var10;
            var7[1] = var16;
            var7[2] = var15;
            var11 = var13.bind(var14)(var11, var7);
            var13 = var14.useCallback;
            var7 = new Array(1);
            var7[0] = var10;
            var1 = function(arg1, arg2, arg3) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var1 = arg2;
                    var _closure3_slot1 = var1;
                    var1 = arg3;
                    var _closure3_slot2 = var1;
                    var6 = function onConfirm(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var7 = arg1;
                            var8 = arg2;
                            if(!var8) { _fun0012_ip = 51; continue _fun0012 }
 9:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var2 = var1.NonSpamRetrainingOptIn;
                            var1 = var2.updateSetting;
                            var1 = var1.bind(var2)(var7);
 51:
                            var1 = var7;
                            if(!var1) { _fun0012_ip = 70; continue _fun0012 }
 57:
                            var3 = _closure3_slot1;
                            var2 = null;
                            var1 = var2 != var3;
 70:
                            if(!var1) { _fun0012_ip = 116; continue _fun0012 }
 73:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.submitHamReportForFirstDM;
                            var1 = _closure3_slot1;
                            var1 = var2.bind(var3)(var1);
 116:
                            var4 = _closure2_slot10;
                            var9 = _closure3_slot0;
                            var3 = var9.id;
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 11;
                            var3 = var5[var3];
                            var6 = var4.bind(var1)(var3);
                            var5 = var6.track;
                            var3 = _closure1_slot9;
                            var4 = var3.MESSAGE_REQUEST_ACTION;
                            var3 = {};
                            var10 = _closure1_slot7;
                            var10 = var10.ACCEPT_HAM_CONFIRMATION_PROMPT;
                            var3['action'] = var10;
                            var9 = var9.id;
                            var3['channel_id'] = var9;
                            var3['is_dont_show_again_checked'] = var8;
                            var3['non_spam_retraining_opt_in'] = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = _closure3_slot2;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0012_ip = 241; continue _fun0012 }
 233:
                            var2 = _closure3_slot2;
                            var2 = var2.bind(var1)();
 241:
                            return var1;
                        }
                    };
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = var3.NonSpamRetrainingOptIn;
                    var3 = var4.getSetting;
                    var3 = var3.bind(var4)();
                    var4 = null;
                    if(!(var4 != var3)) { _fun0011_ip = 84; continue _fun0011 }
 77:
                    var3 = var6.bind(var1)(var3);
                    _fun0011_ip = 138; continue _fun0011;
 84:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.onMarkAsNotSpamConfirmationModal;
                    var2 = {};
                    var2['channel'] = var7;
                    var2['onConfirm'] = var6;
                    var5 = function onCancel() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot9;
                        var3 = var2.MESSAGE_REQUEST_ACTION;
                        var2 = {};
                        var6 = _closure1_slot7;
                        var6 = var6.DISMISS_HAM_CONFIRMATION_PROMPT;
                        var2['action'] = var6;
                        var6 = _closure3_slot0;
                        var6 = var6.id;
                        var2['channel_id'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2['onCancel'] = var5;
                    var2 = var3.bind(var4)(var2);
 138:
                    return var1;
                }
            };
            var7 = var13.bind(var14)(var1, var7);
            var1 = {};
            if(!var12) { _fun0004_ip = 452; continue _fun0004 }
 449:
            var10 = var11;
 452:
            var1['acceptMessageRequest'] = var10;
            var1['rejectMessageRequest'] = var9;
            var1['rejectAll'] = var8;
            var1['markAsNotSpam'] = var7;
            var1['isAcceptLoading'] = var6;
            var1['isRejectLoading'] = var5;
            var1['isUserProfileLoading'] = var4;
            var1['isOptimisticAccepted'] = var3;
            var1['isOptimisticRejected'] = var2;
            return var1;
        }
    };
    var3['useMessageRequestActions'] = var2;
    return var1;
})();