// app/stores/PrivateChannelReadStateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
            var9 = _closure1_slot16;
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
            var7 = _closure1_slot16;
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
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var1 = function rebuildUnreads() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = _closure1_slot11;
            var1 = var2.getPrivateChannelIds;
            var4 = var1.bind(var2)();
            var2 = var4.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot9;
                var2 = var3.getMentionCount;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var5 = var2.bind(var4)(var1);
            var2 = var5.length;
            var1 = 20;
            if(!(var2 > var1)) { _fun0005_ip = 54; continue _fun0005 }
 48:
            var5['length'] = var1;
 54:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.areArraysShallowlyEqual;
            var1 = _closure1_slot12;
            var1 = var2.bind(var4)(var5, var1);
            var1 = !var1;
            if(!var1) { _fun0005_ip = 139; continue _fun0005 }
 98:
            _closure1_slot12 = var5;
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var7 = var5;
            var2 = new var8[var2](var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot13 = var2;
            var1 = true;
 139:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var10 = function handleConnectionOpen() {
        var2 = _closure1_slot17;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var9 = function handleGenericUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot8;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var4);
            var3 = null;
            var3 = var3 == var1;
            if(var3) { _fun0006_ip = 53; continue _fun0006 }
 34:
            var5 = _closure1_slot7;
            var4 = var1.type;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var3 = !var1;
 53:
            var1 = !var3;
            if(var3) { _fun0006_ip = 69; continue _fun0006 }
 59:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = var3.bind(var2)();
 69:
            return var1;
        }
    };
    var2 = global;
    var12 = var2.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.isPrivate;
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = new Array(0);
    var _closure1_slot12 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function PrivateChannelReadStateStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 69; continue _fun0007 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 105; continue _fun0007;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var6 = this;
            var5 = var6.waitFor;
            var10 = _closure1_slot11;
            var9 = _closure1_slot8;
            var8 = _closure1_slot10;
            var7 = _closure1_slot9;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUnreadPrivateChannelIds';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PrivateChannelReadStateStore';
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var10;
    var2['OVERLAY_INITIALIZE'] = var10;
    var2['MESSAGE_CREATE'] = var9;
    var2['MESSAGE_ACK'] = var9;
    var9 = function handleChannelSelect(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot8;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var4);
            var3 = null;
            var3 = var3 == var1;
            if(var3) { _fun0008_ip = 53; continue _fun0008 }
 34:
            var5 = _closure1_slot7;
            var4 = var1.type;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var3 = !var1;
 53:
            var1 = !var3;
            if(var3) { _fun0008_ip = 69; continue _fun0008 }
 59:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = var3.bind(var2)();
 69:
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleChannelDelete(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var4 = var1.id;
            var3 = _closure1_slot13;
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0009_ip = 49; continue _fun0009 }
 39:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = var3.bind(var2)();
 49:
            return var1;
        }
    };
    var2['CHANNEL_DELETE'] = var9;
    var9 = function handleWindowFocus() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var4 = _closure1_slot8;
            var3 = var4.getChannel;
            var5 = _closure1_slot10;
            var1 = var5.getChannelId;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var1);
            var3 = null;
            var3 = var3 == var1;
            if(var3) { _fun0010_ip = 59; continue _fun0010 }
 40:
            var5 = _closure1_slot7;
            var4 = var1.type;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var3 = !var1;
 59:
            var1 = !var3;
            if(var3) { _fun0010_ip = 75; continue _fun0010 }
 65:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = var3.bind(var2)();
 75:
            return var1;
        }
    };
    var2['WINDOW_FOCUS'] = var9;
    var9 = function handleChannelCreate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var4 = var1.id;
            var3 = _closure1_slot8;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var4);
            var3 = null;
            var3 = var3 == var1;
            if(var3) { _fun0011_ip = 58; continue _fun0011 }
 39:
            var5 = _closure1_slot7;
            var4 = var1.type;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var3 = !var1;
 58:
            var1 = !var3;
            if(var3) { _fun0011_ip = 74; continue _fun0011 }
 64:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = var3.bind(var2)();
 74:
            return var1;
        }
    };
    var2['CHANNEL_CREATE'] = var9;
    var4 = function handleChannelUpdates(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var4 = var1.channels;
            var1 = _closure1_slot15;
            var3 = undefined;
            var9 = var1.bind(var3)(var4);
            var5 = var9.bind(var3)();
            var1 = var5.done;
            var7 = null;
            var6 = var5;
            var5 = false;
            var4 = false;
            if(var1) { _fun0012_ip = 112; continue _fun0012 }
 44:
            var1 = var6.value;
            var11 = var1.id;
            var10 = _closure1_slot8;
            var1 = var10.getChannel;
            var10 = var1.bind(var10)(var11);
            var1 = var7 != var10;
            if(!var1) { _fun0012_ip = 89; continue _fun0012 }
 75:
            var11 = _closure1_slot7;
            var10 = var10.type;
            var1 = var11.bind(var3)(var10);
 89:
            if(!var1) { _fun0012_ip = 94; continue _fun0012 }
 92:
            var5 = true;
 94:
            var11 = var9.bind(var3)();
            var1 = var11.done;
            var6 = var11;
            var4 = var5;
            if(!var1) { _fun0012_ip = 44; continue _fun0012 }
 112:
            var1 = !var4;
            var1 = !var1;
            if(!var4) { _fun0012_ip = 129; continue _fun0012 }
 121:
            var2 = _closure1_slot17;
            var1 = var2.bind(var3)();
 129:
            return var1;
        }
    };
    var2['CHANNEL_UPDATES'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/PrivateChannelReadStateStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();