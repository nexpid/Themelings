// app/modules/scheduled_messages/ScheduledMessageStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
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
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var4 = function reset() {
        var1 = {};
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = false;
    var _closure1_slot5 = var7;
    var7 = {};
    var _closure1_slot6 = var7;
    var2 = var2.Set;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var14 = var7;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot7 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function ScheduledMessageStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 42; continue _fun0005;
case 40:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 42:
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
        var1 = 'getMessagesPendingDeletion';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getScheduledMessagesForInbox';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPendingScheduledMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot8;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'loading';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot5;
            return var1;
        };
        var5['get'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'scheduledMessageStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var13 = var6.bind(var1)(var2);
    var2 = {};
    var9 = function handleScheduledMessageCreateSuccess(arg1) {
        var1 = arg1;
        var2 = var1.channelId;
        var5 = var1.scheduledMessageSend;
        var1 = {};
        var6 = _closure1_slot6;
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var4 = var5.scheduledMessageId;
        var1[var4] = var5;
        _closure1_slot6 = var1;
        var1 = {};
        var6 = _closure1_slot8;
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        _closure1_slot8 = var1;
        var1 = delete var1[var2];
        var1 = undefined;
        return var1;
    };
    var2['SCHEDULED_MESSAGES_CREATE_SUCCESS'] = var9;
    var9 = function handleScheduledMessageDeleteStart(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.scheduledMessageId;
            var4 = _closure1_slot7;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var2 = global;
            var5 = var2.Set;
            var6 = _closure1_slot7;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var2 = new var7[var5](var6, var5);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot7 = var2;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
case 43:
            var1 = false;
            return var1;
        }
    };
    var2['SCHEDULED_MESSAGES_DELETE_START'] = var9;
    var9 = function handleScheduledMessageDeleteSuccess(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.scheduledMessageId;
            var4 = _closure1_slot7;
            var1 = var4.has;
            var1 = var1.bind(var4)(var2);
            if(var1) { _fun0007_ip = 37; continue _fun0007 }
case 44:
            var1 = false;
            return var1;
case 37:
            var1 = global;
            var5 = var1.Set;
            var7 = _closure1_slot7;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var8 = var4;
            var1 = new var8[var5](var7, var6);
            var4 = var1 instanceof Object ? var1 : var4;
            _closure1_slot7 = var4;
            var1 = var4.delete;
            var1 = var1.bind(var4)(var2);
            var1 = {};
            var6 = _closure1_slot6;
            var7 = var1;
            var4 = copyDataProperties(var7, var6);
            _closure1_slot6 = var1;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        }
    };
    var2['SCHEDULED_MESSAGES_DELETE_SUCCESS'] = var9;
    var9 = function handleScheduledMessageDeleteFailure(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.scheduledMessageId;
            var4 = _closure1_slot7;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0008_ip = 37; continue _fun0008 }
case 44:
            var2 = false;
            return var2;
case 37:
            var2 = global;
            var5 = var2.Set;
            var6 = _closure1_slot7;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var2 = new var7[var5](var6, var5);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot7 = var2;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['SCHEDULED_MESSAGES_DELETE_FAILURE'] = var9;
    var9 = function handleFetchScheduledMessages(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0009_ip = 45; continue _fun0009 }
case 46:
            var1 = true;
            _closure1_slot5 = var1;
            var1 = undefined;
            return var1;
case 45:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['FETCH_SCHEDULED_MESSAGES'] = var9;
    var9 = function handleFetchScheduledMessagesSuccess(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var4 = var1.messages;
            var1 = {};
            _closure1_slot6 = var1;
            var2 = _closure1_slot10;
            var1 = undefined;
            var5 = var2.bind(var1)(var4);
            var4 = var5.bind(var1)();
            var2 = var4.done;
            if(var2) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            var7 = var4.value;
            var6 = _closure1_slot6;
            var2 = var7.scheduledMessageId;
            var6[var2] = var7;
            var6 = var5.bind(var1)();
            var2 = var6.done;
            var4 = var6;
            if(!var2) { _fun0010_ip = 48; continue _fun0010 }
case 47:
            var2 = false;
            _closure1_slot5 = var2;
            return var1;
        }
    };
    var2['FETCH_SCHEDULED_MESSAGES_SUCCESS'] = var9;
    var9 = function handleFetchScheduledMessagesFailure(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0011_ip = 45; continue _fun0011 }
case 46:
            var1 = false;
            _closure1_slot5 = var1;
            var1 = undefined;
            return var1;
case 45:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['FETCH_SCHEDULED_MESSAGES_FAILURE'] = var9;
    var9 = function handleCreatePendingScheduledMessage(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var5 = var1.scheduledTimestamp;
        var2 = {};
        var7 = _closure1_slot8;
        var8 = var2;
        var3 = copyDataProperties(var8, var7);
        var3 = {};
        var3['channelId'] = var4;
        var3['scheduledTimestamp'] = var5;
        var2[var4] = var3;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CREATE_PENDING_SCHEDULED_MESSAGE'] = var9;
    var8 = function handleDeletePendingScheduledMessage(arg1) {
        var1 = arg1;
        var2 = var1.channelId;
        var1 = {};
        var5 = _closure1_slot8;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        _closure1_slot8 = var1;
        var1 = delete var1[var2];
        var1 = undefined;
        return var1;
    };
    var2['DELETE_PENDING_SCHEDULED_MESSAGE'] = var8;
    var2['LOGOUT'] = var4;
    var2['CONNECTION_OPEN'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var7](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/scheduled_messages/ScheduledMessageStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();