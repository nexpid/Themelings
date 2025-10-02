// app/modules/app_database/background_sync/native/BackgroundSync.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot19;
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
            var7 = _closure1_slot19;
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
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
    var1 = function _backgroundSync() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var5 = var2.force;
                    var4 = undefined;
                    if(!(var5 === var4)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var5 = false;
case 38:
                    var15 = var5;
                    var5 = var2.messagesOnly;
                    if(!(var5 === var4)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var5 = false;
case 40:
                    var16 = var5;
                    var2 = var2.checkLastMessageId;
                    if(!(var2 === var4)) { _fun0004_ip = 42; continue _fun0004 }
case 4:
                    var2 = false;
case 42:
                    var18 = var2;
                    var13 = undefined;
                    var17 = undefined;
                    var19 = undefined;
                    var7 = undefined;
                    SaveGenerator(address=72);
case 35:
                    return var4;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var9 = _closure1_slot14;
                    var8 = var9.verbose;
                    var3 = 'Starting Background Sync';
                    var3 = var8.bind(var9)(var3);
                    var3 = var15;
                    if(var3) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var10 = 14;
                    var3 = var3[var10];
                    var3 = var8.bind(var4)(var3);
                    var9 = var3.Storage;
                    var8 = var9.get;
                    var3 = _closure1_slot16;
                    var3 = var8.bind(var9)(var3);
                    var8 = null;
                    var8 = var8 != var3;
                    var9 = 0;
                    if(!var8) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var9 = var3;
case 48:
                    var3 = global;
                    var11 = var3.Date;
                    var8 = var11.now;
                    var8 = var8.bind(var11)();
                    if(!(!(var9 > var8))) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var11 = var3.Date;
                    var8 = var11.now;
                    var8 = var8.bind(var11)();
                    var9 = var8 - var9;
                    var8 = _closure1_slot15;
                    if(!(var9 < var8)) { _fun0004_ip = 46; continue _fun0004 }
case 52:
                    var11 = _closure1_slot14;
                    var9 = var11.log;
                    var8 = 'Skipping Background Sync because it has been too soon';
                    var8 = var9.bind(var11)(var8);
                    var8 = undefined;
                    return var8;
case 50:
                    var11 = _closure1_slot14;
                    var9 = var11.log;
                    var8 = 'Skipping Background Sync because of clock skew';
                    var8 = var9.bind(var11)(var8);
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var8 = var9.bind(var4)(var8);
                    var10 = var8.Storage;
                    var9 = var10.set;
                    var8 = _closure1_slot16;
                    var11 = var3.Date;
                    var3 = var11.now;
                    var3 = var3.bind(var11)();
                    var3 = var9.bind(var10)(var8, var3);
                    var3 = undefined;
                    return var3;
case 46:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 14;
                    var3 = var9[var3];
                    var3 = var8.bind(var4)(var3);
                    var11 = var3.Storage;
                    var10 = var11.set;
                    var8 = _closure1_slot16;
                    var9 = global;
                    var12 = var9.Date;
                    var3 = var12.now;
                    var3 = var3.bind(var12)();
                    var3 = var10.bind(var11)(var8, var3);
                    var8 = _closure1_slot10;
                    var3 = var8.refresh;
                    var3 = var3.bind(var8)();
                    SaveGenerator(address=397);
case 53:
                    return var3;
case 54:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                    var8 = _closure1_slot10;
                    var8 = var8.isLowDisk;
                    if(var8) { _fun0004_ip = 57; continue _fun0004 }
case 58:
                    var13 = {};
                    var10 = var9.Date;
                    var8 = var10.now;
                    var10 = var8.bind(var10)();
                    var17 = var10;
                    var8 = var9.String;
                    var19 = var8.bind(var4)(var10);
                    var7 = -1;
case 59: // try_start_0 // try_start_1
                    var10 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var12 = 15;
                    var8 = var8[var12];
                    var10 = var10.bind(var4)(var8);
                    var8 = var10.startBackgroundTask;
                    var8 = var8.bind(var10)();
                    SaveGenerator(address=493);
case 60:
                    return var8;
case 61:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(var10) { _fun0004_ip = 62; continue _fun0004 }
case 63:
                    var7 = var8;
                    var14 = var9.Promise;
                    var11 = var14.all;
                    var10 = _closure1_slot21;
                    var22 = var19;
                    var21 = var13;
                    var20 = var17;
                    var19 = var10.bind(var4)(var22, var21, var20);
                    var10 = new Array(3);
                    var10[0] = var19;
                    var19 = _closure1_slot25;
                    var23 = var18;
                    var27 = undefined;
                    var26 = var22;
                    var25 = var21;
                    var24 = var20;
                    var18 = var27[var19](var26, var25, var24, var23, var22);
                    var10[1] = var18;
                    var18 = var16;
                    if(var18) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                    var19 = _closure1_slot23;
                    var18 = var13;
                    var15 = var19.bind(var4)(var18, var17, var15);
                    _fun0004_ip = 66; continue _fun0004;
case 64:
                    var18 = var9.Promise;
                    var17 = var18.resolve;
                    var15 = var17.bind(var18)();
case 66:
                    var10[2] = var15;
                    var10 = var11.bind(var14)(var10);
                    SaveGenerator(address=622);
case 67:
                    return var10;
case 68:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0004_ip = 69; continue _fun0004 }
case 70:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var11 = 16;
                    var11 = var15[var11];
                    var15 = var14.bind(var4)(var11);
                    var14 = var15.dispatch;
                    var11 = {};
                    var17 = 'BACKGROUND_SYNC_FINISHED';
                    var11['type'] = var17;
                    var11['messagesOnly'] = var16;
                    var11 = var14.bind(var15)(var11);
case 71: // try_end0
                    _fun0004_ip = 72; continue _fun0004;
case 69: // try_end1
                    var14 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var15 = 18;
                    var15 = var11[var15];
                    var17 = var14.bind(var4)(var15);
                    var16 = var17.track;
                    var15 = _closure1_slot11;
                    var15 = var15.BACKGROUND_SYNC_COMPLETED;
                    var18 = var13;
                    var15 = var16.bind(var17)(var15, var18);
                    var17 = _closure1_slot14;
                    var16 = var17.verbose;
                    var15 = 'Finished Background Sync';
                    var15 = var16.bind(var17)(var15, var18);
                    var11 = var11[var12];
                    var15 = var14.bind(var4)(var11);
                    var14 = var15.endBackgroundTask;
                    var11 = var7;
                    var11 = var14.bind(var15)(var11);
                    return var10;
case 62:
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var14 = 18;
                    var14 = var10[var14];
                    var16 = var11.bind(var4)(var14);
                    var15 = var16.track;
                    var14 = _closure1_slot11;
                    var14 = var14.BACKGROUND_SYNC_COMPLETED;
                    var17 = var13;
                    var14 = var15.bind(var16)(var14, var17);
                    var16 = _closure1_slot14;
                    var15 = var16.verbose;
                    var14 = 'Finished Background Sync';
                    var14 = var15.bind(var16)(var14, var17);
                    var10 = var10[var12];
                    var12 = var11.bind(var4)(var10);
                    var11 = var12.endBackgroundTask;
                    var10 = var7;
                    var10 = var11.bind(var12)(var10);
                    return var8;
case 73: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=7);
                    var6 = var8;
                    var10 = var8.status;
                    var8 = 429;
                    if(!(var8 !== var10)) { _fun0004_ip = 74; continue _fun0004 }
case 75:
                    var12 = _closure1_slot14;
                    var11 = var12.error;
                    var10 = var6;
                    var8 = 'Background sync encountered error';
                    var8 = var11.bind(var12)(var8, var10);
                    _fun0004_ip = 76; continue _fun0004;
case 74:
                    var11 = _closure1_slot14;
                    var10 = var11.verbose;
                    var8 = 'Background sync was rate limited';
                    var8 = var10.bind(var11)(var8);
case 76:
                    var8 = var6;
                    var8 = var8.timeout;
                    if(var8) { _fun0004_ip = 77; continue _fun0004 }
case 78:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 17;
                    var8 = var11[var8];
                    var11 = var10.bind(var4)(var8);
                    var10 = var11.captureException;
                    var8 = var6;
                    var8 = var10.bind(var11)(var8);
case 77:
                    var8 = var13;
                    var9 = var9.String;
                    var6 = var6.message;
                    var6 = var9.bind(var4)(var6);
                    var8['error'] = var6;
case 72: // try_end2
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 18;
                    var6 = var9[var6];
                    var11 = var8.bind(var4)(var6);
                    var10 = var11.track;
                    var6 = _closure1_slot11;
                    var6 = var6.BACKGROUND_SYNC_COMPLETED;
                    var12 = var13;
                    var6 = var10.bind(var11)(var6, var12);
                    var11 = _closure1_slot14;
                    var10 = var11.verbose;
                    var6 = 'Finished Background Sync';
                    var6 = var10.bind(var11)(var6, var12);
                    var6 = 15;
                    var6 = var9[var6];
                    var9 = var8.bind(var4)(var6);
                    var8 = var9.endBackgroundTask;
                    var6 = var7;
                    var6 = var8.bind(var9)(var6);
                    _fun0004_ip = 79; continue _fun0004;
case 80: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=5);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 18;
                    var8 = var10[var8];
                    var12 = var9.bind(var4)(var8);
                    var11 = var12.track;
                    var8 = _closure1_slot11;
                    var8 = var8.BACKGROUND_SYNC_COMPLETED;
                    var8 = var11.bind(var12)(var8, var13);
                    var12 = _closure1_slot14;
                    var11 = var12.verbose;
                    var8 = 'Finished Background Sync';
                    var8 = var11.bind(var12)(var8, var13);
                    var8 = 15;
                    var8 = var10[var8];
                    var9 = var9.bind(var4)(var8);
                    var8 = var9.endBackgroundTask;
                    var7 = var8.bind(var9)(var7);
                    throw var6;
case 57:
                    var7 = _closure1_slot14;
                    var6 = var7.log;
                    var5 = 'Skipping Background Sync because disk is low';
                    var5 = var6.bind(var7)(var5);
case 79:
                    return var4;
case 55:
                    return var3;
case 44:
                    return var2;
case 36:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function backgroundSyncPrivateChannels() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _backgroundSyncPrivateChannels() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var7 = arg2;
                    var8 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 81; continue _fun0005 }
case 82:
                    var4 = undefined;
                    var _closure4_slot0 = var4;
                    var _closure4_slot1 = var4;
                    var _closure4_slot2 = var4;
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 19;
                    var2 = var9[var2];
                    var6 = var6.bind(var4)(var2);
                    var2 = var6.messages;
                    var12 = var2.bind(var6)();
                    _closure4_slot0 = var12;
                    var10 = null;
                    if(!(var10 == var12)) { _fun0005_ip = 83; continue _fun0005 }
case 84:
                    var9 = _closure1_slot14;
                    var6 = var9.log;
                    var2 = 'Aborting BG sync because there is no database';
                    var2 = var6.bind(var9)(var2);
                    _fun0005_ip = 85; continue _fun0005;
case 83:
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var2 = 20;
                    var2 = var14[var2];
                    var2 = var15.bind(var4)(var2);
                    var9 = var2.HTTP;
                    var6 = var9.post;
                    var2 = {};
                    var11 = _closure1_slot12;
                    var11 = var11.MESSAGE_LOG_PRIVATE_CHANNELS;
                    var2['url'] = var11;
                    var11 = {};
                    var13 = _closure1_slot13;
                    var11['per_channel_limit'] = var13;
                    var13 = 14;
                    var14 = var14[var13];
                    var14 = var15.bind(var4)(var14);
                    var16 = var14.Storage;
                    var15 = var16.get;
                    var14 = _closure1_slot17;
                    var14 = var15.bind(var16)(var14);
                    var11['last_synced_message_id'] = var14;
                    var2['body'] = var11;
                    var11 = 5000;
                    var2['timeout'] = var11;
                    var11 = false;
                    var2['rejectWithError'] = var11;
                    var2 = var6.bind(var9)(var2);
                    SaveGenerator(address=228);
case 86:
                    return var2;
case 87:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 88; continue _fun0005 }
case 89:
                    var15 = var2.body;
                    _closure4_slot1 = var15;
                    var6 = global;
                    var14 = var6.Date;
                    var9 = var14.now;
                    var9 = var9.bind(var14)();
                    var9 = var9 - var8;
                    var7['time_finish_fetch_private_channel_messages'] = var9;
                    var9 = 0;
                    var7['num_private_channel_messages'] = var9;
                    var14 = var6.JSON;
                    var9 = var14.stringify;
                    var9 = var9.bind(var14)(var15);
                    var9 = var9.length;
                    var7['size_private_channel_messages'] = var9;
                    var9 = var15.latest_message_id;
                    if(!(var10 != var9)) { _fun0005_ip = 90; continue _fun0005 }
case 8:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var13];
                    var9 = var10.bind(var4)(var9);
                    var14 = var9.Storage;
                    var13 = var14.set;
                    var10 = _closure1_slot17;
                    var9 = var15.latest_message_id;
                    var9 = var13.bind(var14)(var10, var9);
case 90:
                    var10 = {};
                    _closure4_slot2 = var10;
                    var13 = var6.Promise;
                    var9 = var13.all;
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var14 = 21;
                    var14 = var17[var14];
                    var17 = var16.bind(var4)(var14);
                    var16 = var17.keys;
                    var14 = var15.changes_by_channel_id;
                    var16 = var16.bind(var17)(var14);
                    var14 = var16.map;
                    var3 = function(arg1) {
                        var6 = arg1;
                        var5 = _closure1_slot27;
                        var10 = _closure4_slot0;
                        var9 = _closure4_slot2;
                        var1 = _closure4_slot1;
                        var1 = var1.changes_by_channel_id;
                        var7 = var1[var6];
                        var11 = undefined;
                        var8 = var6;
                        var1 = var11[var5](var10, var9, var8, var7, var6);
                        return var1;
                    };
                    var3 = var14.bind(var16)(var3);
                    var3 = var9.bind(var13)(var3);
                    SaveGenerator(address=447);
case 91:
                    return var3;
case 92:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0005_ip = 93; continue _fun0005 }
case 94:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 22;
                    var9 = var14[var9];
                    var13 = var13.bind(var4)(var9);
                    var9 = var13.isEmpty;
                    var9 = var9.bind(var13)(var10);
                    if(var9) { _fun0005_ip = 85; continue _fun0005 }
case 95:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 16;
                    var9 = var14[var9];
                    var14 = var13.bind(var4)(var9);
                    var13 = var14.dispatch;
                    var9 = {};
                    var16 = 'BACKGROUND_SYNC_CHANNEL_MESSAGES';
                    var9['type'] = var16;
                    var15 = var15.changes_by_channel_id;
                    var9['changesByChannelId'] = var15;
                    var9 = var13.bind(var14)(var9);
                    var9 = _closure1_slot29;
                    var20 = arg1;
                    var23 = undefined;
                    var22 = var12;
                    var21 = var10;
                    var19 = var7;
                    var18 = false;
                    var5 = var23[var9](var22, var21, var20, var19, var18, var17);
                    SaveGenerator(address=569);
case 96:
                    return var5;
case 97:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0005_ip = 98; continue _fun0005 }
case 99:
                    var9 = var6.Date;
                    var6 = var9.now;
                    var6 = var6.bind(var9)();
                    var6 = var6 - var8;
                    var7['time_save_private_channel_messages'] = var6;
                    _fun0005_ip = 85; continue _fun0005;
case 98:
                    return var5;
case 85:
                    return var4;
case 93:
                    return var3;
case 88:
                    return var2;
case 81:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function backgroundSyncGuildData() {
        var1 = undefined;
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function _backgroundSyncGuildData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 100; continue _fun0006 }
case 82:
                    var _closure4_slot0 = var8;
                    var7 = global;
                    var4 = var7.Promise;
                    var3 = var4.all;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 23;
                    var2 = var12[var2];
                    var6 = undefined;
                    var5 = var11.bind(var6)(var2);
                    var2 = var5.getCommittedVersions;
                    var5 = var2.bind(var5)();
                    var2 = new Array(3);
                    var2[0] = var5;
                    var5 = 24;
                    var5 = var12[var5];
                    var13 = var11.bind(var6)(var5);
                    var5 = var13.getCommittedVersions;
                    var5 = var5.bind(var13)();
                    var2[1] = var5;
                    var5 = 25;
                    var5 = var12[var5];
                    var11 = var11.bind(var6)(var5);
                    var5 = var11.canUseGuildVersions;
                    var5 = var5.bind(var11)();
                    var2[2] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=140);
case 101:
                    return var2;
case 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 103; continue _fun0006 }
case 104:
                    var4 = _closure1_slot3;
                    var3 = 3;
                    var4 = var4.bind(var6)(var2, var3);
                    var5 = 0;
                    var16 = var4[var5];
                    var3 = 1;
                    var14 = var4[var3];
                    var3 = 2;
                    var12 = var4[var3];
                    var4 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 20;
                    var3 = var11[var3];
                    var3 = var4.bind(var6)(var3);
                    var11 = var3.HTTP;
                    var4 = var11.post;
                    var3 = {};
                    var13 = _closure1_slot12;
                    var13 = var13.BACKGROUND_SYNC;
                    var3['url'] = var13;
                    if(var12) { _fun0006_ip = 105; continue _fun0006 }
case 106:
                    var12 = {};
                    _fun0006_ip = 107; continue _fun0006;
case 105:
                    var13 = {};
                    var13['guild_versions'] = var16;
                    var16 = var14.highest_last_message_id;
                    var13['highest_last_message_id'] = var16;
                    var14 = var14.api_code_version;
                    var13['api_code_version'] = var14;
                    var12 = var13;
case 107:
                    var3['body'] = var12;
                    var12 = 5000;
                    var3['timeout'] = var12;
                    var12 = false;
                    var3['rejectWithError'] = var12;
                    var3 = var4.bind(var11)(var3);
                    SaveGenerator(address=298);
case 108:
                    return var3;
case 109:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 110; continue _fun0006 }
case 111:
                    var4 = var3.body;
                    var11 = var4.guilds;
                    var14 = var4.api_code_version;
                    var12 = var7.Date;
                    var4 = var12.now;
                    var4 = var4.bind(var12)();
                    var4 = var4 - var9;
                    var8['time_finish_fetch_guild_data'] = var4;
                    var12 = var7.JSON;
                    var4 = var12.stringify;
                    var4 = var4.bind(var12)(var11);
                    var4 = var4.length;
                    var8['size_guild_data'] = var4;
                    var4 = var11.length;
                    var8['num_guilds'] = var4;
                    var8['num_unavailable_guilds'] = var5;
                    var4 = var11.length;
                    if(!(var5 !== var4)) { _fun0006_ip = 112; continue _fun0006 }
case 113:
                    var5 = var11.map;
                    var4 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = arg1;
                            var2 = var3.unavailable;
                            var1 = var3;
                            if(!var2) { _fun0007_ip = 114; continue _fun0007 }
case 115:
                            var4 = _closure4_slot0;
                            var2 = var4.num_unavailable_guilds;
                            var2 = var2 + 1;
                            var4['num_unavailable_guilds'] = var2;
                            var2 = {};
                            var3 = var3.id;
                            var2['id'] = var3;
                            var3 = 'unavailable';
                            var2['data_mode'] = var3;
                            var1 = var2;
case 114:
                            return var1;
                        }
                    };
                    var17 = var5.bind(var11)(var4);
                    var11 = var7.Promise;
                    var4 = var11.prototype;
                    var5 = Object.create(var4, {constructor: {value: var11}});
                    var20 = function(arg1) {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = 0;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var21 = var5;
                    var4 = new var21[var11](var20, var19);
                    var4 = var4 instanceof Object ? var4 : var5;
                    SaveGenerator(address=464);
case 116:
                    return var4;
case 117:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 118; continue _fun0006 }
case 119:
                    var5 = arg3;
                    if(var5) { _fun0006_ip = 120; continue _fun0006 }
case 121:
                    var11 = _closure1_slot9;
                    var5 = var11.getState;
                    var11 = var5.bind(var11)();
                    var5 = 'active';
                    if(!(var5 === var11)) { _fun0006_ip = 120; continue _fun0006 }
case 122:
                    var12 = _closure1_slot14;
                    var11 = var12.log;
                    var5 = 'Skipping guild data background sync because app is now active';
                    var5 = var11.bind(var12)(var5);
                    _fun0006_ip = 112; continue _fun0006;
case 120:
                    var12 = new Array(0);
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var5 = 16;
                    var5 = var13[var5];
                    var13 = var11.bind(var6)(var5);
                    var11 = var13.dispatch;
                    var5 = {};
                    var16 = 'BACKGROUND_SYNC';
                    var5['type'] = var16;
                    var5['guilds'] = var17;
                    var18 = var17.map;
                    var16 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var4 = arg1;
                            var1 = var4.data_mode;
                            var3 = 'unavailable';
                            if(!(var3 !== var1)) { _fun0008_ip = 123; continue _fun0008 }
case 124:
                            var1 = var4.data_mode;
                            var5 = 'partial';
                            if(!(var5 !== var1)) { _fun0008_ip = 125; continue _fun0008 }
case 126:
                            var1 = {};
                            var2 = 'full';
                            var1['dataMode'] = var2;
                            var2 = var4.id;
                            var1['guildId'] = var2;
                            var2 = var4.emojis;
                            var1['entities'] = var2;
                            _fun0008_ip = 127; continue _fun0008;
case 125:
                            var2 = {};
                            var2['dataMode'] = var5;
                            var5 = var4.id;
                            var2['guildId'] = var5;
                            var5 = var4.partial_updates;
                            var5 = var5.emojis;
                            var6 = null;
                            if(!(var6 == var5)) { _fun0008_ip = 128; continue _fun0008 }
case 129:
                            var5 = new Array(0);
case 128:
                            var2['updatedEntities'] = var5;
                            var5 = var4.partial_updates;
                            var5 = var5.deleted_emoji_ids;
                            if(!(var6 == var5)) { _fun0008_ip = 130; continue _fun0008 }
case 131:
                            var5 = new Array(0);
case 130:
                            var2['deletedEntityIds'] = var5;
                            var1 = var2;
case 127:
                            _fun0008_ip = 132; continue _fun0008;
case 123:
                            var2 = {};
                            var4 = var4.id;
                            var2['guildId'] = var4;
                            var2['dataMode'] = var3;
                            var1 = var2;
case 132:
                            return var1;
                        }
                    };
                    var16 = var18.bind(var17)(var16);
                    var5['emojis'] = var16;
                    var16 = var17.map;
                    var15 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var4 = arg1;
                            var1 = var4.data_mode;
                            var3 = 'unavailable';
                            if(!(var3 !== var1)) { _fun0009_ip = 123; continue _fun0009 }
case 124:
                            var1 = var4.data_mode;
                            var5 = 'partial';
                            if(!(var5 !== var1)) { _fun0009_ip = 125; continue _fun0009 }
case 126:
                            var1 = {};
                            var2 = 'full';
                            var1['dataMode'] = var2;
                            var2 = var4.id;
                            var1['guildId'] = var2;
                            var2 = var4.stickers;
                            var1['entities'] = var2;
                            _fun0009_ip = 127; continue _fun0009;
case 125:
                            var2 = {};
                            var2['dataMode'] = var5;
                            var5 = var4.id;
                            var2['guildId'] = var5;
                            var5 = var4.partial_updates;
                            var5 = var5.stickers;
                            var6 = null;
                            if(!(var6 == var5)) { _fun0009_ip = 128; continue _fun0009 }
case 129:
                            var5 = new Array(0);
case 128:
                            var2['updatedEntities'] = var5;
                            var5 = var4.partial_updates;
                            var5 = var5.deleted_sticker_ids;
                            if(!(var6 == var5)) { _fun0009_ip = 130; continue _fun0009 }
case 131:
                            var5 = new Array(0);
case 130:
                            var2['deletedEntityIds'] = var5;
                            var1 = var2;
case 127:
                            _fun0009_ip = 132; continue _fun0009;
case 123:
                            var2 = {};
                            var4 = var4.id;
                            var2['guildId'] = var4;
                            var2['dataMode'] = var3;
                            var1 = var2;
case 132:
                            return var1;
                        }
                    };
                    var15 = var16.bind(var17)(var15);
                    var5['stickers'] = var15;
                    var5['apiCodeVersion'] = var14;
                    var5['promisesForBackgroundSyncToWaitOn'] = var12;
                    var5 = var11.bind(var13)(var5);
                    var11 = var7.Promise;
                    var5 = var11.all;
                    var5 = var5.bind(var11)(var12);
                    SaveGenerator(address=651);
case 133:
                    return var5;
case 134:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                    if(var11) { _fun0006_ip = 135; continue _fun0006 }
case 136:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 26;
                    var10 = var12[var10];
                    var12 = var11.bind(var6)(var10);
                    var11 = var12.writeCaches;
                    var10 = true;
                    var10 = var11.bind(var12)(var10);
                    var10 = var7.Date;
                    var7 = var10.now;
                    var7 = var7.bind(var10)();
                    var7 = var7 - var9;
                    var8['time_save_guild_data'] = var7;
case 112:
                    return var6;
case 135:
                    return var5;
case 118:
                    return var4;
case 110:
                    return var3;
case 103:
                    return var2;
case 100:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot24 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function backgroundSyncGuildChannels() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _backgroundSyncGuildChannels() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var7 = arg2;
                    var8 = arg3;
                    var17 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 137; continue _fun0010 }
case 138:
                    var4 = undefined;
                    var _closure4_slot0 = var4;
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 19;
                    var3 = var9[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.messages;
                    var12 = var3.bind(var6)();
                    _closure4_slot0 = var12;
                    var21 = null;
                    if(!(var21 == var12)) { _fun0010_ip = 11; continue _fun0010 }
case 35:
                    var9 = _closure1_slot14;
                    var6 = var9.log;
                    var3 = 'Aborting BG sync because there is no database';
                    var3 = var6.bind(var9)(var3);
                    _fun0010_ip = 139; continue _fun0010;
case 11:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var13 = 22;
                    var3 = var3[var13];
                    var9 = var6.bind(var4)(var3);
                    var6 = global;
                    var11 = var6.Array;
                    var10 = var11.from;
                    var14 = _closure1_slot8;
                    var3 = var14.getReadStatesByChannel;
                    var14 = var3.bind(var14)();
                    var3 = var14.values;
                    var3 = var3.bind(var14)();
                    var3 = var10.bind(var11)(var3);
                    var10 = var9.bind(var4)(var3);
                    var9 = var10.filter;
                    var3 = function(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var4 = arg1;
                            var3 = _closure1_slot7;
                            var2 = var3.getBasicChannel;
                            var1 = var4.channelId;
                            var3 = var2.bind(var3)(var1);
                            var5 = null;
                            var1 = var5 != var3;
                            if(!var1) { _fun0011_ip = 140; continue _fun0011 }
case 141:
                            var8 = _closure1_slot5;
                            var2 = var3.type;
                            var7 = undefined;
                            var2 = var8.bind(var7)(var2);
                            var2 = !var2;
                            if(!var2) { _fun0011_ip = 142; continue _fun0011 }
case 42:
                            var6 = _closure1_slot6;
                            var3 = var3.type;
                            var3 = var6.bind(var7)(var3);
                            var2 = !var3;
case 142:
                            if(!var2) { _fun0011_ip = 128; continue _fun0011 }
case 143:
                            var3 = var4.guildId;
                            var3 = var5 != var3;
                            if(!var3) { _fun0011_ip = 144; continue _fun0011 }
case 145:
                            var4 = var4.lastViewed;
                            var3 = var5 != var4;
case 144:
                            var2 = var3;
case 128:
                            var1 = var2;
case 140:
                            return var1;
                        }
                    };
                    var10 = var9.bind(var10)(var3);
                    var9 = var10.sortBy;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.lastViewed;
                        var1 = -var1;
                        return var1;
                    };
                    var11 = var9.bind(var10)(var3);
                    var10 = var11.slice;
                    var9 = 0;
                    var3 = 25;
                    var10 = var10.bind(var11)(var9, var3);
                    var3 = var10.value;
                    var16 = var3.bind(var10)();
                    var14 = _closure1_slot14;
                    var11 = var14.verbose;
                    var10 = var16.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.channelId;
                        return var1;
                    };
                    var10 = var10.bind(var16)(var3);
                    var3 = 'Guild Message Background Syncing for ';
                    var3 = var11.bind(var14)(var3, var10);
                    var3 = var16.length;
                    if(!(var9 !== var3)) { _fun0010_ip = 139; continue _fun0010 }
case 146:
                    var10 = var6.Promise;
                    var3 = var10.all;
                    var11 = var16.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var3 = _closure4_slot0;
                        var2 = var3.withoutLogging;
                        var5 = var2.bind(var3)();
                        var4 = var5.getLatest;
                        var3 = var1.guildId;
                        var2 = var1.channelId;
                        var1 = 1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var2 = var11.bind(var16)(var2);
                    var2 = var3.bind(var10)(var2);
                    SaveGenerator(address=313);
case 147:
                    return var2;
case 148:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 149; continue _fun0010 }
case 150:
                    var15 = {};
                    var3 = var16.length;
                    var3 = var9 < var3;
                    var14 = 21;
                    var11 = '0';
                    var10 = 0;
                    if(!var3) { _fun0010_ip = 151; continue _fun0010 }
case 152:
                    var3 = var2[var10];
                    var18 = var3[var9];
                    var19 = var21 == var18;
                    var3 = undefined;
                    if(var19) { _fun0010_ip = 153; continue _fun0010 }
case 154:
                    var3 = var18.id;
case 153:
                    var19 = var21 != var3;
                    var18 = var11;
                    if(!var19) { _fun0010_ip = 155; continue _fun0010 }
case 156:
                    var18 = var3;
case 155:
                    var3 = var16[var10];
                    var19 = var17;
                    if(!var19) { _fun0010_ip = 157; continue _fun0010 }
case 158:
                    var22 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var20 = var20[var14];
                    var23 = var22.bind(var4)(var20);
                    var22 = var23.compare;
                    var20 = var3.lastMessageId;
                    var20 = var22.bind(var23)(var18, var20);
                    var19 = var20 >= var9;
case 157:
                    if(var19) { _fun0010_ip = 159; continue _fun0010 }
case 160:
                    var3 = var3.channelId;
                    var15[var3] = var18;
case 159:
                    var10 = var10 + 1;
                    var3 = var16.length;
                    if(var10 < var3) { _fun0010_ip = 152; continue _fun0010 }
case 151:
                    var14 = {};
                    var3 = _closure1_slot18;
                    var11 = var3.bind(var4)(var2);
                    var10 = var11.bind(var4)();
                    var3 = var10.done;
                    if(var3) { _fun0010_ip = 161; continue _fun0010 }
case 162:
                    var16 = _closure1_slot18;
                    var3 = var10.value;
                    var17 = var16.bind(var4)(var3);
                    var16 = var17.bind(var4)();
                    var3 = var16.done;
                    if(var3) { _fun0010_ip = 163; continue _fun0010 }
case 164:
                    var18 = var16.value;
                    var3 = var18.id;
                    var14[var3] = var18;
                    var18 = var17.bind(var4)();
                    var3 = var18.done;
                    var16 = var18;
                    if(!var3) { _fun0010_ip = 164; continue _fun0010 }
case 163:
                    var16 = var11.bind(var4)();
                    var3 = var16.done;
                    var10 = var16;
                    if(!var3) { _fun0010_ip = 162; continue _fun0010 }
case 161:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 20;
                    var3 = var11[var3];
                    var3 = var10.bind(var4)(var3);
                    var11 = var3.HTTP;
                    var10 = var11.post;
                    var3 = {};
                    var14 = _closure1_slot12;
                    var14 = var14.MESSAGE_LOG_GUILD_CHANNELS;
                    var3['url'] = var14;
                    var14 = {};
                    var16 = _closure1_slot13;
                    var14['per_channel_limit'] = var16;
                    var14['last_synced_message_id_by_channel_id'] = var15;
                    var3['body'] = var14;
                    var14 = 5000;
                    var3['timeout'] = var14;
                    var14 = false;
                    var3['rejectWithError'] = var14;
                    var3 = var10.bind(var11)(var3);
                    SaveGenerator(address=643);
case 165:
                    return var3;
case 166:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0010_ip = 167; continue _fun0010 }
case 168:
                    var20 = var3.body;
                    var11 = var6.Date;
                    var10 = var11.now;
                    var10 = var10.bind(var11)();
                    var10 = var10 - var8;
                    var7['time_finish_fetch_guild_channel_messages'] = var10;
                    var7['num_guild_channel_messages'] = var9;
                    var10 = var6.JSON;
                    var9 = var10.stringify;
                    var9 = var9.bind(var10)(var20);
                    var9 = var9.length;
                    var7['size_guild_channel_messages'] = var9;
                    var11 = {};
                    var14 = {};
                    var18 = var20.change_logs_by_channel_id;
                    for(var15 in var18)
case 169:
                    {
case 170:
                        var22 = var15;
                        var9 = var20.change_logs_by_channel_id;
                        var9 = var9[var22];
                        var9 = var9.changes;
                        if(var21 == var9) { _fun0010_ip = 169; continue _fun0010 }
case 171:
                        var14[var22] = var9;
                        var10 = _closure1_slot27;
                        var9 = var20.change_logs_by_channel_id;
                        var9 = var9[var22];
                        var25 = var9.changes;
                        var29 = undefined;
                        var28 = var12;
                        var27 = var11;
                        var26 = var22;
                        var9 = var29[var10](var28, var27, var26, var25, var24);
                        SaveGenerator(address=813);
case 172:
                        return var9;
case 173:
                        ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                        if(!var10) { _fun0010_ip = 169; continue _fun0010 }
case 174:
                        return var9;
                    }
case 175:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var13];
                    var10 = var10.bind(var4)(var9);
                    var9 = var10.isEmpty;
                    var9 = var9.bind(var10)(var11);
                    if(var9) { _fun0010_ip = 139; continue _fun0010 }
case 176:
                    var10 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var9 = 16;
                    var9 = var13[var9];
                    var13 = var10.bind(var4)(var9);
                    var10 = var13.dispatch;
                    var9 = {};
                    var15 = 'BACKGROUND_SYNC_CHANNEL_MESSAGES';
                    var9['type'] = var15;
                    var9['changesByChannelId'] = var14;
                    var9 = var10.bind(var13)(var9);
                    var10 = _closure1_slot29;
                    var26 = arg1;
                    var24 = true;
                    var29 = undefined;
                    var28 = var12;
                    var27 = var11;
                    var25 = var7;
                    var5 = var29[var10](var28, var27, var26, var25, var24, var23);
                    SaveGenerator(address=926);
case 177:
                    return var5;
case 178:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0010_ip = 179; continue _fun0010 }
case 180:
                    var9 = var6.Date;
                    var6 = var9.now;
                    var6 = var6.bind(var9)();
                    var6 = var6 - var8;
                    var7['time_save_guild_channel_messages'] = var6;
                    _fun0010_ip = 139; continue _fun0010;
case 179:
                    return var5;
case 139:
                    return var4;
case 167:
                    return var3;
case 149:
                    return var2;
case 137:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function processChannelChanges() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function _processChannelChanges() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var3 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 181; continue _fun0012 }
case 115:
                    var4 = arg1;
                    var _closure4_slot0 = var4;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0012_ip = 182; continue _fun0012 }
case 126:
                    var4 = var3.new_messages;
                    var10 = undefined;
                    if(!(var10 === var4)) { _fun0012_ip = 183; continue _fun0012 }
case 184:
                    var4 = new Array(0);
case 183:
                    var9 = var3.modified_messages;
                    if(!(var10 === var9)) { _fun0012_ip = 7; continue _fun0012 }
case 42:
                    var9 = new Array(0);
case 7:
                    var3 = var3.deleted_message_ids;
                    if(!(var10 === var3)) { _fun0012_ip = 84; continue _fun0012 }
case 185:
                    var3 = new Array(0);
case 84:
                    var7 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 22;
                    var6 = var13[var11];
                    var8 = var7.bind(var10)(var6);
                    var7 = var8.partition;
                    var12 = _closure1_slot0;
                    var6 = 27;
                    var6 = var13[var6];
                    var6 = var12.bind(var10)(var6);
                    var6 = var6.isLikelyNotDelta;
                    var8 = var7.bind(var8)(var9, var6);
                    var7 = _closure1_slot3;
                    var6 = 2;
                    var8 = var7.bind(var10)(var8, var6);
                    var7 = 0;
                    var19 = var8[var7];
                    var6 = 1;
                    var6 = var8[var6];
                    var9 = var4.push;
                    var8 = new Array(0);
                    var20 = var8;
                    var18 = 0;
                    var12 = arraySpread(var20, var19, var18);
                    var20 = var9;
                    var19 = var8;
                    var18 = var4;
                    var8 = apply(var20, var19, var18);
                    var8 = var6.length;
                    if(!(var8 > var7)) { _fun0012_ip = 186; continue _fun0012 }
case 187:
                    var9 = global;
                    var12 = var9.Promise;
                    var8 = var12.all;
                    var13 = var6.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var3 = _closure4_slot0;
                        var2 = var3.withoutLogging;
                        var5 = var2.bind(var3)();
                        var4 = var5.get;
                        var3 = var1.channel_id;
                        var2 = var1.id;
                        var1 = null;
                        var1 = var4.bind(var5)(var1, var3, var2);
                        return var1;
                    };
                    var2 = var13.bind(var6)(var2);
                    var2 = var8.bind(var12)(var2);
                    SaveGenerator(address=241);
case 188:
                    return var2;
case 189:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0012_ip = 190; continue _fun0012 }
case 191:
                    var13 = var2.filter;
                    var14 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var12 = 28;
                    var12 = var8[var12];
                    var12 = var14.bind(var10)(var12);
                    var12 = var12.isNotNullish;
                    var12 = var13.bind(var2)(var12);
                    var14 = _closure1_slot14;
                    var13 = var14.verbose;
                    var17 = var12.length;
                    var9 = var9.HermesInternal;
                    var16 = var9.concat;
                    var15 = 'Fetched ';
                    var9 = ' modified messages from the database';
                    var9 = var16.bind(var15)(var17, var9);
                    var9 = var13.bind(var14)(var9);
                    var9 = _closure1_slot1;
                    var8 = var8[var11];
                    var11 = var9.bind(var10)(var8);
                    var9 = var11.keyBy;
                    var8 = 'id';
                    var9 = var9.bind(var11)(var12, var8);
                    var5 = _closure1_slot18;
                    var8 = var5.bind(var10)(var6);
                    var6 = var8.bind(var10)();
                    var5 = var6.done;
                    if(var5) { _fun0012_ip = 186; continue _fun0012 }
case 192:
                    var12 = var6.value;
                    var5 = var12.id;
                    var5 = var5 in var9;
                    if(!var5) { _fun0012_ip = 91; continue _fun0012 }
case 193:
                    var11 = var4.push;
                    var5 = {};
                    var13 = var12.id;
                    var13 = var9[var13];
                    var19 = var13.message;
                    var20 = var5;
                    var13 = copyDataProperties(var20, var19);
                    var20 = var5;
                    var19 = var12;
                    var12 = copyDataProperties(var20, var19);
                    var5 = var11.bind(var4)(var5);
case 91:
                    var11 = var8.bind(var10)();
                    var5 = var11.done;
                    var6 = var11;
                    if(!var5) { _fun0012_ip = 192; continue _fun0012 }
case 186:
                    var5 = var4.length;
                    var5 = var5 > var7;
                    if(var5) { _fun0012_ip = 194; continue _fun0012 }
case 195:
                    var6 = var3.length;
                    var5 = var6 > var7;
case 194:
                    if(!var5) { _fun0012_ip = 182; continue _fun0012 }
case 196:
                    var5 = new Array(2);
                    var5[0] = var4;
                    var5[1] = var3;
                    var4 = arg2;
                    var3 = arg3;
                    var4[var3] = var5;
case 182:
                    var3 = undefined;
                    return var3;
case 190:
                    return var2;
case 181:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function writeMessageChanges(arg1, arg2, arg3, arg4, arg5) {
        var4 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var2 = arg4;
        var _closure2_slot2 = var2;
        var2 = arg5;
        var _closure2_slot3 = var2;
        var3 = var4.transaction;
        var2 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var7 = function _loop(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var10 = arg1;
                        var _closure4_slot0 = var10;
                        var5 = _closure1_slot3;
                        var1 = _closure2_slot0;
                        var4 = var1[var10];
                        var1 = undefined;
                        var2 = 2;
                        var4 = var5.bind(var1)(var4, var2);
                        var2 = 0;
                        var5 = var4[var2];
                        var2 = 1;
                        var2 = var4[var2];
                        var4 = _closure2_slot3;
                        var7 = _closure2_slot2;
                        if(var4) { _fun0014_ip = 197; continue _fun0014 }
case 198:
                        var8 = var7.num_private_channel_messages;
                        var4 = var5.length;
                        var4 = var8 + var4;
                        var7['num_private_channel_messages'] = var4;
                        _fun0014_ip = 199; continue _fun0014;
case 197:
                        var8 = var7.num_guild_channel_messages;
                        var4 = var5.length;
                        var4 = var8 + var4;
                        var7['num_guild_channel_messages'] = var4;
case 199:
                        var4 = _closure1_slot18;
                        var12 = var4.bind(var1)(var5);
                        var9 = var12.bind(var1)();
                        var7 = var9.done;
                        var11 = 29;
                        var8 = null;
                        if(var7) { _fun0014_ip = 200; continue _fun0014 }
case 127:
                        var21 = var9.value;
                        var15 = _closure3_slot0;
                        var14 = var15.put;
                        var16 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var11];
                        var7 = var16.bind(var1)(var7);
                        var17 = var7.KvMessage;
                        var16 = var17.fromMessage;
                        var20 = _closure2_slot1;
                        var24 = var17;
                        var23 = null;
                        var22 = var10;
                        var7 = var24[var16](var23, var22, var21, var20, var19);
                        var7 = var14.bind(var15)(var8, var10, var7);
                        var14 = var12.bind(var1)();
                        var7 = var14.done;
                        var9 = var14;
                        if(!var7) { _fun0014_ip = 127; continue _fun0014 }
case 200:
                        var7 = var2.forEach;
                        var6 = function(arg1) {
                            var5 = _closure3_slot0;
                            var4 = var5.deleteMessage;
                            var3 = _closure4_slot0;
                            var2 = null;
                            var1 = arg1;
                            var1 = var4.bind(var5)(var2, var3, var1);
                            return var1;
                        };
                        var6 = var7.bind(var2)(var6);
                        var7 = _closure3_slot0;
                        var6 = var7.trimChannel;
                        var4 = 200;
                        var4 = var6.bind(var7)(var8, var10, var4);
                        var4 = _closure1_slot14;
                        var3 = var4.verbose;
                        var23 = var5.length;
                        var21 = var2.length;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var24 = 'Wrote ';
                        var22 = ' and deleted ';
                        var20 = ' messages for ';
                        var19 = var10;
                        var2 = var24[var7](var23, var22, var21, var20, var19, var18);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var5 = _closure2_slot0;
                var1 = undefined;
                for(var2 in var5)
case 33:
                {
case 40:
                    var8 = var2;
                    var8 = var7.bind(var1)(var8);
                    _fun0013_ip = 33; continue _fun0013;
                }
case 201:
                return var1;
            }
        };
        var1 = 'Background Sync';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Platform;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.isPrivate;
    var _closure1_slot5 = var7;
    var4 = var4.isThread;
    var _closure1_slot6 = var4;
    var7 = 4;
    var4 = var6[var7];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.AnalyticEvents;
    var _closure1_slot11 = var9;
    var9 = var4.Endpoints;
    var _closure1_slot12 = var9;
    var4 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var6[var7];
    var4 = var5.bind(var1)(var4);
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 12;
    var4 = var6[var4];
    var10 = var8.bind(var1)(var4);
    var4 = var10.prototype;
    var9 = Object.create(var4, {constructor: {value: var10}});
    var13 = 'BackgroundSync';
    var14 = var9;
    var4 = new var14[var10](var13, var12);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot14 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.HOUR;
    var4 = var7 * var4;
    var _closure1_slot15 = var4;
    var4 = 'lastSyncTime';
    var _closure1_slot16 = var4;
    var4 = 'lastSyncedPrivateChannelsMessageId';
    var _closure1_slot17 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/background_sync/native/BackgroundSync.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function backgroundSync() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['backgroundSync'] = var2;
    return var1;
})();