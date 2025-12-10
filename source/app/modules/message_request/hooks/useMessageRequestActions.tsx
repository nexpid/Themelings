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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
case 0:
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
            if(var16) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var16 = var5;
case 36:
            if(var16) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var16 = var4;
case 38:
            _closure2_slot9 = var16;
            var14 = _closure1_slot5;
            var9 = var14.useCallback;
            var7 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                            var5 = arg1;
                            var2 = undefined;
                            var3 = undefined;
                            var6 = _closure2_slot9;
                            if(var6) { _fun0005_ip = 42; continue _fun0005 }
case 3:
                            var6 = _closure2_slot4;
                            var7 = true;
                            var6 = var6.bind(var2)(var7);
case 43: // try_start_0 // try_start_1
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 7;
                            var6 = var9[var6];
                            var8 = var8.bind(var2)(var6);
                            var6 = var8.acceptMessageRequest;
                            var5 = var6.bind(var8)(var5);
                            SaveGenerator(address=79);
case 44:
                            return var5;
case 45:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                            var6 = _closure2_slot7;
                            var6 = var6.bind(var2)(var7);
                            var7 = _closure2_slot1;
                            var6 = null;
                            if(!(var6 != var7)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                            var6 = _closure2_slot1;
                            var6 = var6.bind(var2)();
case 48: // try_end0
                            _fun0005_ip = 50; continue _fun0005;
case 46: // try_end1
                            var7 = _closure2_slot4;
                            var6 = false;
                            var6 = var7.bind(var2)(var6);
                            return var5;
case 51: // try_start_2 // catch_target0
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
                            if(!(var5 != var6)) { _fun0005_ip = 50; continue _fun0005 }
case 52:
                            var5 = _closure2_slot3;
                            var3 = var5.bind(var2)(var3);
case 50: // try_end2
                            var5 = _closure2_slot4;
                            var3 = false;
                            var3 = var5.bind(var2)(var3);
                            _fun0005_ip = 42; continue _fun0005;
case 53: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=2);
                            var5 = _closure2_slot4;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                            throw var3;
case 42:
                            return var2;
case 40:
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
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                            var5 = arg1;
                            var2 = undefined;
                            var3 = undefined;
                            var6 = _closure2_slot9;
                            if(var6) { _fun0006_ip = 42; continue _fun0006 }
case 3:
                            var6 = _closure2_slot5;
                            var7 = true;
                            var6 = var6.bind(var2)(var7);
case 43: // try_start_0 // try_start_1
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 7;
                            var6 = var9[var6];
                            var8 = var8.bind(var2)(var6);
                            var6 = var8.rejectMessageRequest;
                            var5 = var6.bind(var8)(var5);
                            SaveGenerator(address=79);
case 44:
                            return var5;
case 45:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                            var6 = _closure2_slot8;
                            var6 = var6.bind(var2)(var7);
                            var7 = _closure2_slot2;
                            var6 = null;
                            if(!(var6 != var7)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                            var6 = _closure2_slot2;
                            var6 = var6.bind(var2)();
case 48: // try_end0
                            _fun0006_ip = 50; continue _fun0006;
case 46: // try_end1
                            var7 = _closure2_slot5;
                            var6 = false;
                            var6 = var7.bind(var2)(var6);
                            return var5;
case 51: // try_start_2 // catch_target0
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
                            if(!(var5 != var6)) { _fun0006_ip = 50; continue _fun0006 }
case 52:
                            var5 = _closure2_slot3;
                            var3 = var5.bind(var2)(var3);
case 50: // try_end2
                            var5 = _closure2_slot5;
                            var3 = false;
                            var3 = var5.bind(var2)(var3);
                            _fun0006_ip = 42; continue _fun0006;
case 53: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=2);
                            var5 = _closure2_slot5;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                            throw var3;
case 42:
                            return var2;
case 40:
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
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0007_ip = 8; continue _fun0007 }
case 41:
                            var8 = arg1;
                            var2 = undefined;
                            var6 = undefined;
                            var10 = undefined;
                            var11 = undefined;
                            var3 = undefined;
                            var5 = _closure2_slot9;
                            if(var5) { _fun0007_ip = 54; continue _fun0007 }
case 55:
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
case 56: // try_start_0 // try_start_2
                            var8 = _closure1_slot10;
                            var6 = var8.bind(var2)(var6);
                            var11 = var6;
                            var6 = var6.bind(var2)();
                            var10 = var6;
                            var6 = var6.done;
                            var9 = 7;
                            if(var6) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                            var6 = var10;
                            var12 = var6.value;
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var9];
                            var8 = var8.bind(var2)(var6);
                            var6 = var8.rejectMessageRequestBatch;
                            var6 = var6.bind(var8)(var12);
                            SaveGenerator(address=153);
case 59:
                            return var6;
case 60:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(var8) { _fun0007_ip = 16; continue _fun0007 }
case 61:
                            var8 = var11;
                            var8 = var8.bind(var2)();
                            var10 = var8;
                            var8 = var8.done;
                            if(var8) { _fun0007_ip = 57; continue _fun0007 }
case 62:
                            _fun0007_ip = 58; continue _fun0007;
case 16: // try_end0 // try_end2
                            var9 = _closure2_slot5;
                            var8 = false;
                            var8 = var9.bind(var2)(var8);
                            return var6;
case 57: // try_start_1 // try_start_3
                            var6 = _closure2_slot8;
                            var6 = var6.bind(var2)(var7);
                            var7 = _closure2_slot2;
                            var6 = null;
                            if(!(var6 != var7)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                            var6 = _closure2_slot2;
                            var6 = var6.bind(var2)();
case 63: // try_end1
                            _fun0007_ip = 65; continue _fun0007;
case 66: // catch_target0 // catch_target1
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
                            if(!(var5 != var6)) { _fun0007_ip = 65; continue _fun0007 }
case 10:
                            var5 = _closure2_slot3;
                            var3 = var5.bind(var2)(var3);
case 65: // try_end3
                            var5 = _closure2_slot5;
                            var3 = false;
                            var3 = var5.bind(var2)(var3);
                            _fun0007_ip = 54; continue _fun0007;
case 67: // catch_target2 // catch_target3
                            CatchBlockStart(arg_register=2);
                            var5 = _closure2_slot5;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                            throw var3;
case 54:
                            return var2;
case 8:
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
case 0:
                            StartGenerator();
                            var9 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                            var _closure5_slot0 = var9;
                            var2 = _closure2_slot9;
                            if(var2) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                            var2 = _closure2_slot0;
                            var5 = null;
                            if(!(var5 != var2)) { _fun0008_ip = 57; continue _fun0008 }
case 72:
                            var8 = _closure1_slot6;
                            var6 = var8.getMutualGuilds;
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var4 = var6.bind(var8)(var4);
                            if(!(var5 == var4)) { _fun0008_ip = 57; continue _fun0008 }
case 73:
                            var6 = _closure2_slot6;
                            var5 = undefined;
                            var4 = true;
                            var4 = var6.bind(var5)(var4);
case 74: // try_start_0 // try_start_1
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
case 75:
                            return var2;
case 15:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0008_ip = 76; continue _fun0008 }
case 77: // try_end0
                            _fun0008_ip = 78; continue _fun0008;
case 76: // try_end1
                            var6 = _closure2_slot6;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 79: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=1);
case 78: // try_end2
                            var4 = _closure2_slot6;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
case 57:
                            var2 = function() {
                                var4 = _closure1_slot3;
                                var3 = undefined;
                                var2 = function* () {
                                    var1 = function* anon_0_() {
                                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0009_ip = 42; continue _fun0009 }
case 41:
                                            var2 = _closure2_slot0;
                                            var10 = null;
                                            if(!(var10 == var2)) { _fun0009_ip = 80; continue _fun0009 }
case 31:
                                            var9 = new Array(0);
                                            _fun0009_ip = 81; continue _fun0009;
case 80:
                                            var5 = _closure1_slot6;
                                            var3 = var5.getMutualGuilds;
                                            var2 = _closure2_slot0;
                                            var2 = var2.id;
                                            var6 = var3.bind(var5)(var2);
                                            var3 = var10 == var6;
                                            var2 = undefined;
                                            if(var3) { _fun0009_ip = 82; continue _fun0009 }
case 83:
                                            var5 = var6.map;
                                            var3 = function(arg1) {
                                                var1 = arg1;
                                                var1 = var1.guild;
                                                var1 = var1.id;
                                                return var1;
                                            };
                                            var2 = var5.bind(var6)(var3);
case 82:
                                            var9 = var2;
case 81:
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
                                            if(!(var10 == var9)) { _fun0009_ip = 84; continue _fun0009 }
case 15:
                                            var9 = new Array(0);
case 84:
                                            var5['mutual_guild_ids'] = var9;
                                            var9 = _closure2_slot0;
                                            var10 = var10 == var9;
                                            var9 = undefined;
                                            if(var10) { _fun0009_ip = 85; continue _fun0009 }
case 79:
                                            var10 = _closure2_slot0;
                                            var9 = var10.id;
case 85:
                                            var5['other_user_id'] = var9;
                                            var5 = var7.bind(var8)(var6, var5);
                                            var4 = _closure2_slot10;
                                            var2 = _closure5_slot0;
                                            var2 = var4.bind(var3)(var2);
                                            SaveGenerator(address=217);
case 86:
                                            return var2;
case 87:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0009_ip = 88; continue _fun0009 }
case 89:
                                            return var3;
case 88:
                                            return var2;
case 42:
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
case 0:
                                    var1 = _closure2_slot0;
                                    var8 = null;
                                    if(!(var8 == var1)) { _fun0010_ip = 90; continue _fun0010 }
case 91:
                                    var6 = new Array(0);
                                    _fun0010_ip = 44; continue _fun0010;
case 90:
                                    var3 = _closure1_slot6;
                                    var2 = var3.getMutualGuilds;
                                    var1 = _closure2_slot0;
                                    var1 = var1.id;
                                    var4 = var2.bind(var3)(var1);
                                    var2 = var8 == var4;
                                    var1 = undefined;
                                    if(var2) { _fun0010_ip = 92; continue _fun0010 }
case 4:
                                    var3 = var4.map;
                                    var2 = function(arg1) {
                                        var1 = arg1;
                                        var1 = var1.guild;
                                        var1 = var1.id;
                                        return var1;
                                    };
                                    var1 = var3.bind(var4)(var2);
case 92:
                                    var6 = var1;
case 44:
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
                                    if(!(var8 == var6)) { _fun0010_ip = 93; continue _fun0010 }
case 94:
                                    var6 = new Array(0);
case 93:
                                    var2['mutual_guild_ids'] = var6;
                                    var6 = _closure2_slot0;
                                    var8 = var8 == var6;
                                    var6 = undefined;
                                    if(var8) { _fun0010_ip = 16; continue _fun0010 }
case 95:
                                    var7 = _closure2_slot0;
                                    var6 = var7.id;
case 16:
                                    var2['other_user_id'] = var6;
                                    var2 = var4.bind(var5)(var3, var2);
                                    return var1;
                                }
                            };
                            var2['onCancel'] = var7;
                            var2 = var4.bind(var6)(var2);
                            _fun0008_ip = 70; continue _fun0008;
case 24: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot6;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 70:
                            var2 = undefined;
                            return var2;
case 68:
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
case 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var1 = arg2;
                    var _closure3_slot1 = var1;
                    var1 = arg3;
                    var _closure3_slot2 = var1;
                    var6 = function onConfirm(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var7 = arg1;
                            var8 = arg2;
                            if(!var8) { _fun0012_ip = 96; continue _fun0012 }
case 97:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var2 = var1.NonSpamRetrainingOptIn;
                            var1 = var2.updateSetting;
                            var1 = var1.bind(var2)(var7);
case 96:
                            var1 = var7;
                            if(!var1) { _fun0012_ip = 35; continue _fun0012 }
case 98:
                            var3 = _closure3_slot1;
                            var2 = null;
                            var1 = var2 != var3;
case 35:
                            if(!var1) { _fun0012_ip = 99; continue _fun0012 }
case 100:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.submitHamReportForFirstDM;
                            var1 = _closure3_slot1;
                            var1 = var2.bind(var3)(var1);
case 99:
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
                            if(!(var3 != var4)) { _fun0012_ip = 101; continue _fun0012 }
case 102:
                            var2 = _closure3_slot2;
                            var2 = var2.bind(var1)();
case 101:
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
                    if(!(var4 != var3)) { _fun0011_ip = 82; continue _fun0011 }
case 44:
                    var3 = var6.bind(var1)(var3);
                    _fun0011_ip = 103; continue _fun0011;
case 82:
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
case 103:
                    return var1;
                }
            };
            var7 = var13.bind(var14)(var1, var7);
            var1 = {};
            if(!var12) { _fun0004_ip = 104; continue _fun0004 }
case 105:
            var10 = var11;
case 104:
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