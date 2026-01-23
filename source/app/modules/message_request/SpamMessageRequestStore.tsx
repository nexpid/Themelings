// app/modules/message_request/SpamMessageRequestStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = metroImportDefault;
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
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function isSpam(arg1) {
        var1 = arg1;
        var1 = var1.isSpam;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function processChannel(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot12;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            if(!var4) { _fun0005_ip = 39; continue _fun0005 }
case 33:
            var7 = _closure1_slot6;
            var6 = var7.has;
            var1 = var2.id;
            var1 = var6.bind(var7)(var1);
            var4 = !var1;
case 39:
            var1 = false;
            if(!var4) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var7 = _closure1_slot6;
            var6 = var7.add;
            var4 = var2.id;
            var4 = var6.bind(var7)(var4);
            var1 = true;
case 40:
            var4 = _closure1_slot12;
            var4 = var4.bind(var5)(var2);
            var4 = !var4;
            if(!var4) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var8 = _closure1_slot6;
            var7 = var8.has;
            var6 = var2.id;
            var4 = var7.bind(var8)(var6);
case 42:
            if(!var4) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var7 = _closure1_slot6;
            var6 = var7.delete;
            var4 = var2.id;
            var4 = var6.bind(var7)(var4);
            var1 = true;
case 44:
            var4 = _closure1_slot12;
            var4 = var4.bind(var5)(var2);
            var4 = !var4;
            if(!var4) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var7 = _closure1_slot7;
            var6 = var7.has;
            var5 = var2.id;
            var4 = var6.bind(var7)(var5);
case 46:
            if(!var4) { _fun0005_ip = 48; continue _fun0005 }
case 18:
            var4 = _closure1_slot7;
            var3 = var4.delete;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 48:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function handleConnectionOpen() {
        var3 = _closure1_slot6;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot7;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = global;
        var4 = var1.Object;
        var3 = var4.values;
        var5 = _closure1_slot5;
        var1 = var5.getMutablePrivateChannels;
        var1 = var1.bind(var5)();
        var4 = var3.bind(var4)(var1);
        var3 = var4.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot13;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        var1 = true;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function handleSpamAcceptOptimistic(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot7;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function handleChannelCreate(arg1) {
        var1 = arg1;
        var3 = var1.channel;
        var2 = _closure1_slot13;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function handleChannelUpdates(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channels;
            var2 = _closure1_slot10;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var6 = _closure1_slot13;
            var2 = var3.value;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0006_ip = 50; continue _fun0006 }
case 49:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function handleChannelDelete(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var5 = _closure1_slot6;
            var4 = var5.has;
            var1 = var2.id;
            var4 = var4.bind(var5)(var1);
            var1 = false;
            if(!var4) { _fun0007_ip = 32; continue _fun0007 }
case 50:
            var4 = _closure1_slot6;
            var3 = var4.delete;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 32:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var7 = global;
    var9 = var7.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var6 = var5[var4];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var8.bind(var1)(var6);
    var8 = var7.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot6 = var8;
    var7 = var7.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot7 = var7;
    var7 = false;
    var _closure1_slot8 = var7;
    var2 = function(arg1) {
        var4 = function SpamMessageRequestStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot0;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = {};
                var7 = _closure1_slot14;
                var1['CONNECTION_OPEN'] = var7;
                var1['CONNECTION_OPEN_SUPPLEMENTAL'] = var7;
                var7 = function CACHE_LOADED_LAZY() {
                    var2 = _closure3_slot0;
                    var1 = var2.loadCache;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['CACHE_LOADED_LAZY'] = var7;
                var7 = _closure1_slot16;
                var1['CHANNEL_CREATE'] = var7;
                var7 = _closure1_slot17;
                var1['CHANNEL_UPDATES'] = var7;
                var7 = _closure1_slot18;
                var1['CHANNEL_DELETE'] = var7;
                var7 = _closure1_slot15;
                var1['MESSAGE_REQUEST_ACCEPT_OPTIMISTIC'] = var7;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot3;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)();
                if(var1) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0008_ip = 53; continue _fun0008;
case 51:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 53:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
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
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot5;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'loadCache';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = this;
                var2 = var3.readSnapshot;
                var1 = _closure2_slot0;
                var1 = var1.LATEST_SNAPSHOT_VERSION;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var3)) { _fun0009_ip = 54; continue _fun0009 }
case 37:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var4 = var3;
                var1 = new var5[var1](var4, var3);
                var2 = var1 instanceof Object ? var1 : var2;
                _closure1_slot6 = var2;
case 54:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'takeSnapshot';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure2_slot0;
            var2 = var2.LATEST_SNAPSHOT_VERSION;
            var1['version'] = var2;
            var2 = global;
            var4 = var2.Array;
            var3 = var4.from;
            var2 = _closure1_slot6;
            var2 = var3.bind(var4)(var2);
            var1['data'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSpamChannelIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSpamChannelsCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            var1 = var1.size;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isSpam';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot6;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isAcceptedOptimistic';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot7;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isReady';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var6 = 'SpamMessageRequestStore';
    var2['displayName'] = var6;
    var2['LATEST_SNAPSHOT_VERSION'] = var4;
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/SpamMessageRequestStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();