// app/modules/threads/ThreadManager.tsx
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
 344:
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
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            _fun0004_ip = 76; continue _fun0004;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function ThreadManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot2;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot5;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 84; continue _fun0005 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0005_ip = 118; continue _fun0005;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot5;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
                var1 = var2.bind(var3)(var4, var1);
                var2 = {};
                var3 = var1.handleChannelDelete;
                var2['CHANNEL_DELETE'] = var3;
                var3 = var1.handleMessageCreate;
                var2['MESSAGE_CREATE'] = var3;
                var3 = var1.handleGuildDelete;
                var2['GUILD_DELETE'] = var3;
                var1['actions'] = var2;
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
        var1 = 'handleChannelDelete';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var4 = var1.channel;
                var1 = undefined;
                var _closure3_slot0 = var1;
                var5 = var4.guild_id;
                var3 = null;
                if(!(var3 != var5)) { _fun0006_ip = 109; continue _fun0006 }
 27:
                var6 = _closure1_slot8;
                var5 = var6.getAllThreadsForParent;
                var4 = var4.id;
                var4 = var5.bind(var6)(var4);
                _closure3_slot0 = var4;
                var5 = var4.length;
                var4 = 0;
                if(!(var5 > var4)) { _fun0006_ip = 109; continue _fun0006 }
 65:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 7;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var4 = var3.Emitter;
                var3 = var4.batched;
                var2 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = _closure1_slot9;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var3 = var6.bind(var1)();
                        var2 = var3.done;
                        var5 = 8;
                        var4 = 'THREAD_DELETE';
                        if(var2) { _fun0007_ip = 97; continue _fun0007 }
 40:
                        var10 = var3.value;
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var5];
                        var9 = var8.bind(var1)(var2);
                        var8 = var9.dispatch;
                        var2 = {};
                        var2['type'] = var4;
                        var2['channel'] = var10;
                        var2 = var8.bind(var9)(var2);
                        var8 = var6.bind(var1)();
                        var2 = var8.done;
                        var3 = var8;
                        if(!var2) { _fun0007_ip = 40; continue _fun0007 }
 97:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
 109:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleMessageCreate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = arg1;
                var5 = var1.channelId;
                var1 = var1.message;
                var4 = _closure1_slot8;
                var2 = var4.getChannel;
                var2 = var2.bind(var4)(var5);
                var4 = var1.author;
                var5 = null;
                var7 = var5 == var4;
                var1 = undefined;
                var6 = undefined;
                if(var7) { _fun0008_ip = 54; continue _fun0008 }
 49:
                var6 = var4.id;
 54:
                var7 = _closure1_slot7;
                var4 = var7.getId;
                var4 = var4.bind(var7)();
                if(!(var6 === var4)) { _fun0008_ip = 238; continue _fun0008 }
 75:
                if(!(var5 != var2)) { _fun0008_ip = 238; continue _fun0008 }
 82:
                var4 = var2.isActiveThread;
                var4 = var4.bind(var2)();
                if(!var4) { _fun0008_ip = 238; continue _fun0008 }
 98:
                var4 = global;
                var7 = var4.Date;
                var8 = var2.threadMetadata;
                var9 = var5 == var8;
                var6 = undefined;
                if(var9) { _fun0008_ip = 127; continue _fun0008 }
 121:
                var6 = var8.archiveTimestamp;
 127:
                var8 = var5 != var6;
                var5 = 0;
                if(!var8) { _fun0008_ip = 139; continue _fun0008 }
 136:
                var5 = var6;
 139:
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var11 = var6;
                var10 = var5;
                var5 = new var11[var7](var10, var9);
                var6 = var5 instanceof Object ? var5 : var6;
                var5 = var6.getTime;
                var5 = var5.bind(var6)();
                var6 = var4.Date;
                var4 = var6.now;
                var4 = var4.bind(var6)();
                var5 = var4 - var5;
                var4 = 5000;
                if(!(var5 < var4)) { _fun0008_ip = 238; continue _fun0008 }
 201:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 9;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.resort;
                var2 = var2.parent_id;
                var2 = var3.bind(var4)(var2);
 238:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleGuildDelete';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = arg1;
                var3 = var2.guild;
                var5 = _closure1_slot8;
                var4 = var5.getAllThreadsForGuild;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var _closure3_slot0 = var3;
                var4 = var3.length;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0009_ip = 94; continue _fun0009 }
 48:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.Emitter;
                var2 = var3.batched;
                var1 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var3 = _closure1_slot9;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var3 = var6.bind(var1)();
                        var2 = var3.done;
                        var5 = 8;
                        var4 = 'THREAD_DELETE';
                        if(var2) { _fun0010_ip = 97; continue _fun0010 }
 40:
                        var10 = var3.value;
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var5];
                        var9 = var8.bind(var1)(var2);
                        var8 = var9.dispatch;
                        var2 = {};
                        var2['type'] = var4;
                        var2['channel'] = var10;
                        var2 = var8.bind(var9)(var2);
                        var8 = var6.bind(var1)();
                        var2 = var8.done;
                        var3 = var8;
                        if(!var2) { _fun0010_ip = 40; continue _fun0010 }
 97:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
 94:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ThreadManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();