// app/modules/app_database/modules/ReadStates.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var1;
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
    var7 = var6.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var11 = 'ReadStates';
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot7 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function ReadStates() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot3;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = null;
            var3['readStateVersion'] = var2;
            var2 = {};
            var5 = function CONNECTION_OPEN(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.handleConnectionOpen;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['CONNECTION_OPEN'] = var5;
            var5 = function CHANNEL_PINS_ACK(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.handleReadStateAction;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['CHANNEL_PINS_ACK'] = var5;
            var5 = function MESSAGE_ACK(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.handleReadStateAction;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['MESSAGE_ACK'] = var5;
            var5 = function BACKGROUND_SYNC_FINISHED(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.messagesOnly;
                    if(var1) { _fun0004_ip = 36; continue _fun0004 }
 12:
                    var4 = _closure3_slot0;
                    var3 = var4.handleWriteCaches;
                    var2 = arg2;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['BACKGROUND_SYNC_FINISHED'] = var5;
            var4 = function WRITE_CACHES(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleWriteCaches;
                var2 = arg2;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['WRITE_CACHES'] = var4;
            var3['actions'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'getAll';
        var5['key'] = var2;
        var7 = _closure1_slot2;
        var2 = undefined;
        var1 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 162; continue _fun0005 }
 10:
                    var3 = global;
                    var4 = var3.performance;
                    var2 = var4.now;
                    var7 = var2.bind(var4)();
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.readStates;
                    var2 = arg1;
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.getMany;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=80);
 78:
                    return var2;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 159; continue _fun0005 }
 86:
                    var6 = var3.performance;
                    var5 = var6.now;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot7;
                    var4 = var5.log;
                    var14 = var6 - var7;
                    var12 = var2.length;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var15 = 'asynchronously loaded in ';
                    var13 = 'ms (readStates: ';
                    var11 = ')';
                    var3 = var15[var8](var14, var13, var12, var11, var10);
                    var3 = var4.bind(var5)(var3);
                    return var2;
 159:
                    return var2;
 162:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var7.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = function getAll() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'resetInMemoryState';
        var5['key'] = var7;
        var7 = function value() {
            var2 = null;
            var1 = this;
            var1['readStateVersion'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var1 = var1.readState;
            var2 = var1.version;
            var1 = this;
            var1['readStateVersion'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleReadStateAction';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.readStateVersion;
                var4 = null;
                if(!(var4 != var3)) { _fun0006_ip = 67; continue _fun0006 }
 18:
                var3 = var1.version;
                if(!(var4 == var3)) { _fun0006_ip = 55; continue _fun0006 }
 28:
                var5 = _closure1_slot7;
                var4 = var5.log;
                var3 = 'Received null read states version';
                var3 = var4.bind(var5)(var3, var1);
                _fun0006_ip = 67; continue _fun0006;
 55:
                var1 = var1.version;
                var2['readStateVersion'] = var1;
 67:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleWriteCaches';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var6 = arg1;
                var9 = this;
                var5 = _closure1_slot6;
                var4 = var5.getAllReadStates;
                var3 = false;
                var4 = var4.bind(var5)(var3);
                var3 = arg2;
                if(!var3) { _fun0007_ip = 540; continue _fun0007 }
 39:
                var3 = var9.readStateVersion;
                var17 = null;
                if(!(var17 != var3)) { _fun0007_ip = 603; continue _fun0007 }
 54:
                var3 = global;
                var8 = var3.Object;
                var7 = var8.keys;
                var10 = _closure1_slot5;
                var5 = var10.getMutablePrivateChannels;
                var5 = var5.bind(var10)();
                var7 = var7.bind(var8)(var5);
                var3 = var3.Set;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var27 = var5;
                var26 = var7;
                var3 = new var27[var3](var26, var25);
                var16 = var3 instanceof Object ? var3 : var5;
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var5 = 7;
                var5 = var3[var5];
                var8 = undefined;
                var5 = var10.bind(var8)(var5);
                var7 = var5.bind(var8)(var7);
                var5 = var7.sort;
                var15 = 8;
                var3 = var3[var15];
                var3 = var10.bind(var8)(var3);
                var3 = var3.compare;
                var5 = var5.bind(var7)(var3);
                var3 = var5.reverse;
                var5 = var3.bind(var5)();
                var3 = var5.value;
                var5 = var3.bind(var5)();
                var3 = 0;
                var5 = var5[var3];
                var7 = var17 != var5;
                var3 = '0';
                var10 = var3;
                if(!var7) { _fun0007_ip = 215; continue _fun0007 }
 212:
                var10 = var5;
 215:
                var5 = _closure1_slot8;
                var14 = var5.bind(var8)(var4);
                var7 = var14.bind(var8)();
                var5 = var7.done;
                var13 = 1;
                var11 = var10;
                var12 = var3;
                var3 = var12;
                var10 = var11;
                if(var5) { _fun0007_ip = 431; continue _fun0007 }
 254:
                var21 = var7.value;
                var5 = var21._lastMessageId;
                var19 = var12;
                var18 = var11;
                if(!(var17 != var5)) { _fun0007_ip = 401; continue _fun0007 }
 278:
                var20 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var15];
                var22 = var20.bind(var8)(var5);
                var20 = var22.compare;
                var5 = var21._lastMessageId;
                var5 = var20.bind(var22)(var5, var12);
                var20 = var12;
                if(!(var13 === var5)) { _fun0007_ip = 326; continue _fun0007 }
 320:
                var20 = var21._lastMessageId;
 326:
                var22 = var16.has;
                var5 = var21.channelId;
                var22 = var22.bind(var16)(var5);
                if(!var22) { _fun0007_ip = 383; continue _fun0007 }
 344:
                var23 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var15];
                var24 = var23.bind(var8)(var5);
                var23 = var24.compare;
                var5 = var21._lastMessageId;
                var5 = var23.bind(var24)(var5, var11);
                var22 = var13 === var5;
 383:
                var5 = var11;
                if(!var22) { _fun0007_ip = 395; continue _fun0007 }
 389:
                var5 = var21._lastMessageId;
 395:
                var18 = var5;
                var19 = var20;
 401:
                var20 = var14.bind(var8)();
                var5 = var20.done;
                var12 = var19;
                var11 = var18;
                var7 = var20;
                var3 = var12;
                var10 = var11;
                if(!var5) { _fun0007_ip = 254; continue _fun0007 }
 431:
                var7 = _closure1_slot0;
                var11 = _closure1_slot1;
                var5 = 6;
                var5 = var11[var5];
                var7 = var7.bind(var8)(var5);
                var5 = var7.nonGuildVersionsTransaction;
                var7 = var5.bind(var7)(var6);
                var5 = var7.putAll;
                var8 = {};
                var11 = 'highest_last_message_id';
                var8['id'] = var11;
                var8['versionString'] = var3;
                var3 = new Array(3);
                var3[0] = var8;
                var8 = {};
                var11 = 'private_channels_version';
                var8['id'] = var11;
                var8['versionString'] = var10;
                var3[1] = var8;
                var8 = {};
                var10 = 'read_state_version';
                var8['id'] = var10;
                var9 = var9.readStateVersion;
                var8['version'] = var9;
                var3[2] = var8;
                var3 = var5.bind(var7)(var3);
 540:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.readStatesTransaction;
                var5 = var3.bind(var5)(var6);
                var _closure3_slot0 = var5;
                var3 = var5.delete;
                var3 = var3.bind(var5)();
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var4 = arg1;
                    var3 = _closure3_slot0;
                    var2 = var3.put;
                    var8 = var4.type;
                    var7 = var4.channelId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var5 = '';
                    var1 = '-';
                    var1 = var6.bind(var5)(var8, var1, var7);
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
 603:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/ReadStates.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();