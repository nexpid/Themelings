// discord_common/js/packages/flux/Dispatcher.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var1 = function setDisplayName(arg1, arg2) {
        var2 = arg2;
        var1 = arg1;
        var1['displayName'] = var2;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot11 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var8 = var2.Set;
    var2 = var8.prototype;
    var4 = Object.create(var2, {constructor: {value: var8}});
    var13 = ['APP_STATE_UPDATE', 'CLEAR_CACHES', 'CONNECTION_CLOSED', 'CONNECTION_OPEN', 'CONNECTION_RESUMED', 'LOGIN_SUCCESS', 'LOGIN', 'LOGOUT', 'MESSAGE_SEND_FAILED', 'PUSH_NOTIFICATION_CLICK', 'RESET_SOCKET', 'SESSION_START', 'UPLOAD_FAIL', 'WRITE_CACHES'];
    var14 = var4;
    var2 = new var14[var8](var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var _closure1_slot6 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.Logger;
    var2 = var8.prototype;
    var4 = Object.create(var2, {constructor: {value: var8}});
    var13 = 'Flux';
    var14 = var4;
    var2 = new var14[var8](var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var _closure1_slot7 = var2;
    var2 = function() {
        var4 = _closure1_slot5;
        var3 = function Dispatcher() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = arguments[0];
                var3 = arguments[1];
                var2 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0004_ip = 17; continue _fun0004 }
 15:
                var6 = 0;
 17:
                var7 = _closure1_slot4;
                var5 = _closure2_slot0;
                var5 = var7.bind(var1)(var2, var5);
                var5 = new Array(0);
                var2['_interceptors'] = var5;
                var5 = {};
                var2['_subscriptions'] = var5;
                var5 = new Array(0);
                var2['_waitQueue'] = var5;
                var5 = false;
                var2['_processingWaitQueue'] = var5;
                var5 = null;
                var2['_currentDispatchActionType'] = var5;
                var7 = _closure1_slot8;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var11 = var8;
                var7 = new var11[var7](var10);
                var7 = var7 instanceof Object ? var7 : var8;
                var2['_actionHandlers'] = var7;
                var2['_sentryUtils'] = var1;
                var7 = {};
                var2['functionCache'] = var7;
                var2['_defaultBand'] = var6;
                var6 = arguments[2];
                var2['_sentryUtils'] = var6;
                if(!(var5 == var3)) { _fun0004_ip = 190; continue _fun0004 }
 144:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var4 = 3;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.ActionLogger;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var11 = var5;
                var4 = new var11[var4](var10);
                var3 = var4 instanceof Object ? var4 : var5;
 190:
                var2['actionLogger'] = var3;
                var5 = var2.actionLogger;
                var4 = var5.on;
                var3 = 'trace';
                var2 = function(arg1, arg2, arg3) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var6 = arg3;
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var4 = 4;
                        var3 = var1[var4];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.isTracing;
                        if(!var3) { _fun0005_ip = 44; continue _fun0005 }
 37:
                        var5 = 10;
                        var3 = var6 >= var5;
 44:
                        if(!var3) { _fun0005_ip = 84; continue _fun0005 }
 47:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var2 = var2[var4];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.mark;
                        var3 = '🦥';
                        var2 = arg2;
                        var2 = var4.bind(var5)(var3, var2, var6);
 84:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'isDispatching';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var2 = var1._currentDispatchActionType;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(14);
        var2[0] = var1;
        var1 = {};
        var6 = 'dispatch';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                var2 = arg1;
                var _closure4_slot0 = var2;
                var2 = arg2;
                var _closure4_slot1 = var2;
                var2 = _closure3_slot0;
                var4 = var2._waitQueue;
                var3 = var4.push;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0: // try_start_0
                        var2 = _closure3_slot0;
                        var3 = var2.functionCache;
                        var2 = _closure3_slot1;
                        var2 = var2.type;
                        var3 = var3[var2];
                        var2 = null;
                        if(!(var2 == var3)) { _fun0006_ip = 107; continue _fun0006 }
 32:
                        var3 = _closure3_slot0;
                        var6 = var3.functionCache;
                        var2 = _closure3_slot1;
                        var5 = var2.type;
                        var4 = function(arg1) {
                            var3 = _closure3_slot0;
                            var2 = var3._dispatchWithDevtools;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var6[var5] = var4;
                        var5 = _closure1_slot11;
                        var4 = var3.functionCache;
                        var3 = var2.type;
                        var4 = var4[var3];
                        var3 = var2.type;
                        var2 = 'dispatch_';
                        var3 = var2 + var3;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4, var3);
 107:
                        var2 = _closure3_slot0;
                        var3 = var2.functionCache;
                        var2 = _closure3_slot1;
                        var1 = var2.type;
                        var1 = var3[var1];
                        var1 = var1.bind(var3)(var2);
                        var2 = _closure4_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 148: // try_end0
                        _fun0006_ip = 166; continue _fun0006;
 150: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var2 = _closure4_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
 166:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var1 = var2.flushWaitQueue;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'dispatchForStoreTest';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var7 = arg1;
                var6 = arg2;
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var5 = false;
                var3 = 'dispatchForTest cannot be called in: production';
                var3 = var4.bind(var1)(var5, var3);
                var3 = _closure1_slot9;
                var2 = this;
                var4 = var2._actionHandlers;
                var2 = var4.getOrderedActionHandlers;
                var2 = var2.bind(var4)(var7);
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0007_ip = 147; continue _fun0007 }
 86:
                var2 = var3.value;
                var8 = var2.name;
                var9 = var2.actionHandler;
                var2 = var2.storeDidChange;
                var8 = var8 === var6;
                if(!var8) { _fun0007_ip = 124; continue _fun0007 }
 115:
                var9 = var9.bind(var1)(var7);
                var8 = var5 !== var9;
 124:
                if(!var8) { _fun0007_ip = 132; continue _fun0007 }
 127:
                var2 = var2.bind(var1)(var7);
 132:
                var8 = var4.bind(var1)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0007_ip = 86; continue _fun0007 }
 147:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'flushWaitQueue';
        var1['key'] = var6;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = this;
                var1 = undefined;
                var10 = undefined;
                var2 = undefined;
                var7 = undefined;
                var4 = var3._processingWaitQueue;
                if(var4) { _fun0008_ip = 394; continue _fun0008 }
 23: // try_start_0
                var6 = true;
                var3['_processingWaitQueue'] = var6;
                var8 = _closure1_slot1;
                var5 = _closure1_slot3;
                var9 = 6;
                var5 = var5[var9];
                var5 = var8.bind(var1)(var5);
                var5['isDispatching'] = var6;
                var8 = 0;
                var10 = 0;
                var5 = var3._waitQueue;
                var5 = var5.length;
                var6 = 100;
                if(!(var5 > var8)) { _fun0008_ip = 190; continue _fun0008 }
 82:
                var5 = var10;
                var5 = var5 + 1;
                var10 = var5;
                if(!(!(var5 > var6))) { _fun0008_ip = 226; continue _fun0008 }
 98:
                var5 = var3._waitQueue;
                var5 = var5.length;
                if(!(var5 > var8)) { _fun0008_ip = 148; continue _fun0008 }
 113:
                var11 = var3._waitQueue;
                var5 = var11.shift;
                var5 = var5.bind(var11)();
                var5 = var5.bind(var1)();
                var5 = var3._waitQueue;
                var5 = var5.length;
                if(var5 > var8) { _fun0008_ip = 113; continue _fun0008 }
 148:
                var11 = _closure1_slot1;
                var5 = _closure1_slot3;
                var5 = var5[var9];
                var11 = var11.bind(var1)(var5);
                var5 = var11.emit;
                var5 = var5.bind(var11)();
                var5 = var3._waitQueue;
                var5 = var5.length;
                if(var5 > var8) { _fun0008_ip = 82; continue _fun0008 }
 190: // try_end0
                var6 = false;
                var3['_processingWaitQueue'] = var6;
                var8 = _closure1_slot1;
                var5 = _closure1_slot3;
                var5 = var5[var9];
                var5 = var8.bind(var1)(var5);
                var5['isDispatching'] = var6;
                _fun0008_ip = 394; continue _fun0008;
 226: // try_start_1
                var6 = _closure1_slot2;
                var8 = _closure1_slot3;
                var5 = 7;
                var5 = var8[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.serialize;
                var8 = var5.bind(var6)();
                var7 = var8;
                var6 = _closure1_slot7;
                var5 = var6.error;
                var4 = 'LastFewActions';
                var4 = var5.bind(var6)(var4, var8);
                var5 = var3._sentryUtils;
                var2 = var5;
                var4 = null;
                if(!(var4 != var5)) { _fun0008_ip = 332; continue _fun0008 }
 295:
                var5 = var2;
                var4 = var5.addBreadcrumb;
                var2 = {};
                var6 = 'Dispatcher: Dispatch loop detected';
                var2['message'] = var6;
                var6 = {};
                var6['lastFewActions'] = var7;
                var2['data'] = var6;
                var2 = var4.bind(var5)(var2);
 332:
                var2 = global;
                var4 = var2.Error;
                var2 = 'Dispatch loop detected, aborting';
                var2 = var4.bind(var1)(var2);
                throw var2;
 353: // try_end1 // catch_target0 // catch_target1
                CatchBlockStart(arg_register=1);
                var4 = false;
                var3['_processingWaitQueue'] = var4;
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var3 = 6;
                var3 = var6[var3];
                var3 = var5.bind(var1)(var3);
                var3['isDispatching'] = var4;
                throw var2;
 394:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = '_dispatchWithDevtools';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var2 = var3._dispatchWithLogging;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = '_dispatchWithLogging';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var6 = arg1;
                var7 = this;
                var _closure3_slot0 = var7;
                var2 = var6;
                var _closure3_slot1 = var6;
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var8 = 5;
                var3 = var10[var8];
                var1 = undefined;
                var13 = var9.bind(var1)(var3);
                var11 = var7._currentDispatchActionType;
                var3 = null;
                var12 = var3 == var11;
                var17 = var6.type;
                var16 = var7._currentDispatchActionType;
                var3 = global;
                var11 = var3.HermesInternal;
                var15 = var11.concat;
                var14 = 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ';
                var11 = ' Already dispatching: ';
                var11 = var15.bind(var14)(var17, var11, var16);
                var11 = var13.bind(var1)(var12, var11);
                var8 = var10[var8];
                var10 = var9.bind(var1)(var8);
                var9 = var6.type;
                var8 = 'Dispatch.dispatch(...) called without an action type';
                var8 = var10.bind(var1)(var9, var8);
                var9 = _closure1_slot6;
                var8 = var9.has;
                var6 = var6.type;
                var6 = var8.bind(var9)(var6);
                if(!var6) { _fun0009_ip = 198; continue _fun0009 }
 153:
                var9 = _closure1_slot7;
                var8 = var9.log;
                var6 = var2;
                var11 = var6.type;
                var6 = var3.HermesInternal;
                var10 = var6.concat;
                var6 = 'Dispatching ';
                var6 = var10.bind(var6)(var11);
                var6 = var8.bind(var9)(var6);
 198:
                var9 = _closure1_slot0;
                var11 = _closure1_slot3;
                var6 = 8;
                var8 = var11[var6];
                var12 = var9.bind(var1)(var8);
                var10 = var12.mark;
                var9 = var2;
                var8 = var9.type;
                var8 = var10.bind(var12)(var8);
                var10 = _closure1_slot2;
                var8 = 7;
                var8 = var11[var8];
                var11 = var10.bind(var1)(var8);
                var10 = var11.add;
                var8 = var9.type;
                var8 = var10.bind(var11)(var8);
                var8 = var7.actionLogger;
                var7 = var8.log;
                var5 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var2 = arg1;
 3: // try_start_0
                        var5 = _closure3_slot0;
                        var4 = _closure3_slot1;
                        var3 = var4.type;
                        var5['_currentDispatchActionType'] = var3;
                        var3 = var5._dispatch;
                        var2 = var3.bind(var5)(var4, var2);
 37: // try_end0
                        var2 = _closure3_slot0;
                        var1 = null;
                        var2['_currentDispatchActionType'] = var1;
                        var1 = undefined;
                        return var1;
 53: // catch_target0
                        CatchBlockStart(arg_register=0);
                        var3 = _closure3_slot0;
                        var2 = null;
                        var3['_currentDispatchActionType'] = var2;
                        throw var1;
                    }
                };
                var5 = var7.bind(var8)(var9, var5);
                var8 = var5.totalTime;
                var7 = 100;
                if(!(var8 > var7)) { _fun0009_ip = 364; continue _fun0009 }
 304:
                var8 = _closure1_slot7;
                var7 = var8.verbose;
                var9 = var2;
                var21 = var9.type;
                var19 = var5.totalTime;
                var5 = var3.HermesInternal;
                var11 = var5.concat;
                var22 = 'Slow dispatch on ';
                var20 = ': ';
                var18 = 'ms';
                var5 = var22[var11](var21, var20, var19, var18, var17);
                var5 = var7.bind(var8)(var5);
 364: // try_start_0
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var4 = var4[var6];
                var5 = var5.bind(var1)(var4);
                var4 = var5.measure;
                var8 = var2.type;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var6 = 'DISPATCH[';
                var3 = ']';
                var3 = var7.bind(var6)(var8, var3);
                var2 = var2.type;
                var2 = var4.bind(var5)(var3, var2);
 430: // try_end0
                _fun0009_ip = 434; continue _fun0009;
 432: // catch_target0
                CatchBlockStart(arg_register=1);
 434:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = '_dispatch';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = arg1;
                var4 = arg2;
                var5 = this;
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var4;
                var7 = _closure1_slot9;
                var6 = var5._interceptors;
                var1 = undefined;
                var8 = var7.bind(var1)(var6);
                var7 = var8.bind(var1)();
                var6 = var7.done;
                if(var6) { _fun0011_ip = 85; continue _fun0011 }
 51:
                var6 = var7.value;
                var6 = var6.bind(var1)(var3);
                if(var6) { _fun0011_ip = 81; continue _fun0011 }
 64:
                var9 = var8.bind(var1)();
                var6 = var9.done;
                var7 = var9;
                if(var6) { _fun0011_ip = 85; continue _fun0011 }
 79:
                _fun0011_ip = 51; continue _fun0011;
 81:
                var6 = false;
                return var6;
 85:
                var7 = var5._actionHandlers;
                var6 = var7.getOrderedActionHandlers;
                var6 = var6.bind(var7)(var3);
                var _closure3_slot2 = var6;
                var8 = function _loop() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var3 = _closure3_slot2;
                        var1 = _closure3_slot3;
                        var1 = var3[var1];
                        var6 = var1.name;
                        var3 = var1.actionHandler;
                        var _closure4_slot0 = var3;
                        var3 = var1.storeDidChange;
                        var5 = _closure3_slot1;
                        var1 = undefined;
                        var4 = function() {
                            var3 = _closure4_slot0;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var5 = var5.bind(var1)(var6, var4);
                        var4 = false;
                        if(!(var4 !== var5)) { _fun0012_ip = 70; continue _fun0012 }
 61:
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var1)(var2);
 70:
                        return var1;
                    }
                };
                var7 = 0;
                var _closure3_slot3 = var7;
                var6 = var6.length;
                var9 = var7 < var6;
                if(!var9) { _fun0011_ip = 144; continue _fun0011 }
 129:
                var9 = var8.bind(var1)();
                var7 = var7 + 1;
                _closure3_slot3 = var7;
                if(var7 < var6) { _fun0011_ip = 129; continue _fun0011 }
 144:
                var5 = var5._subscriptions;
                var3 = var3.type;
                var5 = var5[var3];
                var _closure3_slot4 = var5;
                var3 = null;
                if(!(var3 != var5)) { _fun0011_ip = 186; continue _fun0011 }
 169:
                var3 = '__subscriptions';
                var2 = function() {
                    var3 = _closure3_slot4;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = arg1;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var4.bind(var1)(var3, var2);
 186:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'addInterceptor';
        var1['key'] = var6;
        var6 = function addInterceptor(arg1) {
            var1 = this;
            var3 = var1._interceptors;
            var2 = var3.push;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'wait';
        var1['key'] = var6;
        var6 = function wait(arg1) {
            var2 = this;
            var4 = var2._waitQueue;
            var3 = var4.push;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var1 = var2.flushWaitQueue;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'subscribe';
        var1['key'] = var6;
        var6 = function subscribe(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var2 = var1._subscriptions;
                var3 = var2[var4];
                var2 = null;
                if(!(var2 == var3)) { _fun0013_ip = 63; continue _fun0013 }
 22:
                var2 = var1._subscriptions;
                var1 = global;
                var1 = var1.Set;
                var5 = var1.prototype;
                var5 = Object.create(var5, {constructor: {value: var1}});
                var7 = var5;
                var1 = new var7[var1](var6);
                var1 = var1 instanceof Object ? var1 : var5;
                var2[var4] = var1;
                var3 = var1;
 63:
                var2 = var3.add;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'unsubscribe';
        var1['key'] = var6;
        var6 = function unsubscribe(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = var1._subscriptions;
                var3 = var3[var2];
                var4 = null;
                if(!(var4 != var3)) { _fun0014_ip = 56; continue _fun0014 }
 22:
                var5 = var3.delete;
                var4 = arg2;
                var4 = var5.bind(var3)(var4);
                var4 = var3.size;
                var3 = 0;
                if(!(var3 === var4)) { _fun0014_ip = 56; continue _fun0014 }
 46:
                var1 = var1._subscriptions;
                var1 = delete var1[var2];
 56:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'register';
        var1['key'] = var6;
        var6 = function register(arg1, arg2, arg3, arg4, arg5) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var7 = arg4;
                var1 = this;
                var6 = var1._actionHandlers;
                var5 = var6.register;
                var2 = null;
                if(!(var2 == var7)) { _fun0015_ip = 30; continue _fun0015 }
 24:
                var7 = var1._defaultBand;
 30:
                var12 = arg1;
                var11 = arg2;
                var10 = arg3;
                var8 = arg5;
                var13 = var6;
                var9 = var7;
                var1 = var13[var5](var12, var11, var10, var9, var8, var7);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'createToken';
        var1['key'] = var6;
        var6 = function createToken() {
            var1 = this;
            var2 = var1._actionHandlers;
            var1 = var2.createToken;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'addDependencies';
        var1['key'] = var6;
        var5 = function addDependencies(arg1, arg2) {
            var1 = this;
            var4 = var1._actionHandlers;
            var3 = var4.addDependencies;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[13] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot5;
        var3 = function ActionHandlersGraph() {
            var3 = this;
            var5 = _closure1_slot4;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = {};
            var3['_orderedActionHandlers'] = var4;
            var4 = null;
            var3['_orderedCallbackTokens'] = var4;
            var4 = 1;
            var3['_lastID'] = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 9;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.DepGraph;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_dependencyGraph'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getOrderedActionHandlers';
        var1['key'] = var2;
        var2 = function getOrderedActionHandlers(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var3 = var4._orderedActionHandlers;
                var1 = var2.type;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0016_ip = 43; continue _fun0016 }
 27:
                var3 = var4._computeOrderedActionHandlers;
                var2 = var2.type;
                var1 = var3.bind(var4)(var2);
 43:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(10);
        var2[0] = var1;
        var1 = {};
        var6 = 'register';
        var1['key'] = var6;
        var6 = function register(arg1, arg2, arg3, arg4) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var8 = arg1;
                var2 = arg2;
                var4 = arg4;
                var1 = arguments[4];
                var3 = this;
                var _closure3_slot0 = var8;
                var _closure3_slot1 = var2;
                var12 = undefined;
                if(!(var1 === var12)) { _fun0017_ip = 41; continue _fun0017 }
 31:
                var5 = var3.createToken;
                var1 = var5.bind(var3)();
 41:
                var _closure3_slot2 = var12;
                var _closure3_slot3 = var12;
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var5 = 5;
                var5 = var7[var5];
                var7 = var6.bind(var12)(var5);
                var5 = 0;
                var6 = var4 >= var5;
                if(!var6) { _fun0017_ip = 100; continue _fun0017 }
 81:
                var5 = global;
                var9 = var5.Number;
                var5 = var9.isInteger;
                var6 = var5.bind(var9)(var4);
 100:
                var5 = 'band must be a non-negative integer.';
                var5 = var7.bind(var12)(var6, var5);
                var7 = {};
                _closure3_slot2 = var7;
                var11 = function _loop2() {
                    var4 = _closure3_slot1;
                    var3 = _closure3_slot3;
                    var3 = var4[var3];
                    var _closure4_slot0 = var3;
                    var4 = function wrapper(arg1) {
                        var3 = _closure4_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var5 = _closure1_slot11;
                    var8 = _closure3_slot0;
                    var7 = _closure3_slot3;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var3 = '';
                    var1 = '_';
                    var3 = var6.bind(var3)(var8, var1, var7);
                    var1 = undefined;
                    var3 = var5.bind(var1)(var4, var3);
                    var3 = _closure3_slot2;
                    var2 = _closure3_slot3;
                    var3[var2] = var4;
                    return var1;
                };
                var9 = var2;
                for(var2 in var9)
 134:
                {
 143:
                    var14 = var2;
                    _closure3_slot3 = var14;
                    var14 = var11.bind(var12)();
                    _fun0017_ip = 134; continue _fun0017;
                }
 156:
                var6 = var3._dependencyGraph;
                var5 = var6.addNode;
                var2 = {};
                var2['name'] = var8;
                var2['band'] = var4;
                var2['actionHandler'] = var7;
                var7 = arg3;
                var2['storeDidChange'] = var7;
                var2 = var5.bind(var6)(var1, var2);
                var2 = var3._addToBand;
                var2 = var2.bind(var3)(var1, var4);
                var2 = var3._invalidateCaches;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'createToken';
        var1['key'] = var6;
        var6 = function createToken() {
            var3 = this;
            var1 = var3._lastID;
            var2 = parseFloat(var1);
            var1 = var2 + 1;
            var3['_lastID'] = var1;
            var1 = 'ID_';
            var1 = var1 + var2;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'addDependencies';
        var1['key'] = var6;
        var6 = function addDependencies(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var6 = arg1;
                var4 = arg2;
                var3 = this;
                var1 = var3._validateDependencies;
                var1 = var1.bind(var3)(var6, var4);
                var2 = _closure1_slot9;
                var1 = undefined;
                var5 = var2.bind(var1)(var4);
                var4 = var5.bind(var1)();
                var2 = var4.done;
                if(var2) { _fun0018_ip = 85; continue _fun0018 }
 47:
                var8 = var4.value;
                var7 = var3._dependencyGraph;
                var2 = var7.addDependency;
                var2 = var2.bind(var7)(var6, var8);
                var7 = var5.bind(var1)();
                var2 = var7.done;
                var4 = var7;
                if(!var2) { _fun0018_ip = 47; continue _fun0018 }
 85:
                var2 = var3._invalidateCaches;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = '_validateDependencies';
        var1['key'] = var6;
        var6 = function _validateDependencies(arg1, arg2) {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = '_invalidateCaches';
        var1['key'] = var6;
        var6 = function _invalidateCaches() {
            var2 = this;
            var1 = null;
            var2['_orderedCallbackTokens'] = var1;
            var1 = {};
            var2['_orderedActionHandlers'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = '_bandToken';
        var1['key'] = var6;
        var6 = function _bandToken(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var7 = arg1;
                var6 = this;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'band.';
                var1 = var2.bind(var1)(var7);
                var3 = var6._dependencyGraph;
                var2 = var3.hasNode;
                var2 = var2.bind(var3)(var1);
                if(var2) { _fun0019_ip = 140; continue _fun0019 }
 50:
                var4 = var6._dependencyGraph;
                var3 = var4.addNode;
                var2 = {};
                var2['name'] = var1;
                var2['band'] = var7;
                var5 = {};
                var2['actionHandler'] = var5;
                var5 = function storeDidChange() {
                    var1 = undefined;
                    return var1;
                };
                var2['storeDidChange'] = var5;
                var2 = var3.bind(var4)(var1, var2);
                var2 = 0;
                if(!(var7 > var2)) { _fun0019_ip = 140; continue _fun0019 }
 104:
                var4 = var6._dependencyGraph;
                var3 = var4.addDependency;
                var5 = var6._bandToken;
                var2 = 1;
                var2 = var7 - var2;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var1, var2);
 140:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = '_addToBand';
        var1['key'] = var6;
        var6 = function _addToBand(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var4 = arg1;
                var7 = arg2;
                var6 = this;
                var3 = var6._dependencyGraph;
                var2 = var3.addDependency;
                var1 = var6._bandToken;
                var1 = var1.bind(var6)(var7);
                var1 = var2.bind(var3)(var1, var4);
                var1 = 0;
                if(!(var7 > var1)) { _fun0020_ip = 80; continue _fun0020 }
 44:
                var3 = var6._dependencyGraph;
                var2 = var3.addDependency;
                var5 = var6._bandToken;
                var1 = 1;
                var1 = var7 - var1;
                var1 = var5.bind(var6)(var1);
                var1 = var2.bind(var3)(var4, var1);
 80:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = '_computeOrderedActionHandlers';
        var1['key'] = var6;
        var6 = function _computeOrderedActionHandlers(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var7 = var2._orderedCallbackTokens;
                var6 = null;
                if(!(var6 == var7)) { _fun0021_ip = 28; continue _fun0021 }
 18:
                var1 = var2._computeOrderedCallbackTokens;
                var7 = var1.bind(var2)();
 28:
                var1 = new Array(0);
                var5 = var7.length;
                var4 = 0;
                var8 = var4 < var5;
                if(!var8) { _fun0021_ip = 125; continue _fun0021 }
 46:
                var10 = var2._dependencyGraph;
                var9 = var10.getNodeData;
                var8 = var7[var4];
                var9 = var9.bind(var10)(var8);
                var12 = var9.name;
                var8 = var9.actionHandler;
                var10 = var9.storeDidChange;
                var11 = var8[var3];
                if(!(var6 != var11)) { _fun0021_ip = 118; continue _fun0021 }
 92:
                var9 = var1.push;
                var8 = {};
                var8['name'] = var12;
                var8['actionHandler'] = var11;
                var8['storeDidChange'] = var10;
                var8 = var9.bind(var1)(var8);
 118:
                var4 = var4 + 1;
                if(var4 < var5) { _fun0021_ip = 46; continue _fun0021 }
 125:
                var2 = var2._orderedActionHandlers;
                var2[var3] = var1;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = '_computeOrderedCallbackTokens';
        var1['key'] = var6;
        var5 = function _computeOrderedCallbackTokens() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var4 = this;
                var _closure3_slot0 = var4;
 9: // try_start_0
                var5 = var4._dependencyGraph;
                var3 = var5.overallOrder;
                var3 = var3.bind(var5)();
                var4['_orderedCallbackTokens'] = var3;
 31: // try_end0
                return var3;
 33: // catch_target0
                CatchBlockStart(arg_register=2);
                var2 = var3;
                var4 = var3.cyclePath;
                var3 = null;
                if(!(var3 == var4)) { _fun0022_ip = 55; continue _fun0022 }
 50:
                var3 = var2;
                throw var3;
 55:
                var3 = var2.cyclePath;
                var2 = var3.map;
                var1 = function(arg1) {
                    var6 = arg1;
                    var1 = _closure3_slot0;
                    var2 = var1._dependencyGraph;
                    var1 = var2.getNodeData;
                    var1 = var1.bind(var2)(var6);
                    var10 = var1.name;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var11 = '';
                    var9 = '(';
                    var7 = ')';
                    var8 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                };
                var5 = var2.bind(var3)(var1);
                var1 = global;
                var3 = var1.Error;
                var4 = var5.join;
                var2 = ' -> ';
                var4 = var4.bind(var5)(var2);
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Dependency Cycle Found: ';
                var6 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var5;
        var2[9] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/Dispatcher.tsx';
    var4 = var5.bind(var6)(var4);
    var3['Dispatcher'] = var2;
    return var1;
})();