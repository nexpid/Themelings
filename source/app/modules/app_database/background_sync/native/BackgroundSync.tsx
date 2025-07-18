// app/modules/app_database/background_sync/native/BackgroundSync.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot19;
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
            var7 = _closure1_slot19;
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
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
    var1 = function _backgroundSync() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 1216; continue _fun0004 }
 13:
                    var5 = var2.force;
                    var4 = undefined;
                    if(!(var5 === var4)) { _fun0004_ip = 27; continue _fun0004 }
 25:
                    var5 = false;
 27:
                    var15 = var5;
                    var5 = var2.messagesOnly;
                    if(!(var5 === var4)) { _fun0004_ip = 42; continue _fun0004 }
 40:
                    var5 = false;
 42:
                    var16 = var5;
                    var2 = var2.checkLastMessageId;
                    if(!(var2 === var4)) { _fun0004_ip = 57; continue _fun0004 }
 55:
                    var2 = false;
 57:
                    var18 = var2;
                    var13 = undefined;
                    var17 = undefined;
                    var19 = undefined;
                    var7 = undefined;
                    SaveGenerator(address=72);
 70:
                    return var4;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 1213; continue _fun0004 }
 81:
                    var9 = _closure1_slot14;
                    var8 = var9.verbose;
                    var3 = 'Starting Background Sync';
                    var3 = var8.bind(var9)(var3);
                    var3 = var15;
                    if(var3) { _fun0004_ip = 321; continue _fun0004 }
 114:
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
                    if(!var8) { _fun0004_ip = 168; continue _fun0004 }
 165:
                    var9 = var3;
 168:
                    var3 = global;
                    var11 = var3.Date;
                    var8 = var11.now;
                    var8 = var8.bind(var11)();
                    if(!(!(var9 > var8))) { _fun0004_ip = 242; continue _fun0004 }
 189:
                    var11 = var3.Date;
                    var8 = var11.now;
                    var8 = var8.bind(var11)();
                    var9 = var8 - var9;
                    var8 = _closure1_slot15;
                    if(!(var9 < var8)) { _fun0004_ip = 321; continue _fun0004 }
 216:
                    var11 = _closure1_slot14;
                    var9 = var11.log;
                    var8 = 'Skipping Background Sync because it has been too soon';
                    var8 = var9.bind(var11)(var8);
                    var8 = undefined;
                    return var8;
 242:
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
 321:
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
 395:
                    return var3;
 397:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 1210; continue _fun0004 }
 406:
                    var8 = _closure1_slot10;
                    var8 = var8.isLowDisk;
                    if(var8) { _fun0004_ip = 1186; continue _fun0004 }
 422:
                    var13 = {};
                    var10 = var9.Date;
                    var8 = var10.now;
                    var10 = var8.bind(var10)();
                    var17 = var10;
                    var8 = var9.String;
                    var19 = var8.bind(var4)(var10);
                    var7 = -1;
 459: // try_start_0 // try_start_1
                    var10 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var12 = 15;
                    var8 = var8[var12];
                    var10 = var10.bind(var4)(var8);
                    var8 = var10.startBackgroundTask;
                    var8 = var8.bind(var10)();
                    SaveGenerator(address=493);
 491:
                    return var8;
 493:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(var10) { _fun0004_ip = 772; continue _fun0004 }
 502:
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
                    if(var18) { _fun0004_ip = 593; continue _fun0004 }
 577:
                    var19 = _closure1_slot23;
                    var18 = var13;
                    var15 = var19.bind(var4)(var18, var17, var15);
                    _fun0004_ip = 609; continue _fun0004;
 593:
                    var18 = var9.Promise;
                    var17 = var18.resolve;
                    var15 = var17.bind(var18)();
 609:
                    var10[2] = var15;
                    var10 = var11.bind(var14)(var10);
                    SaveGenerator(address=622);
 620:
                    return var10;
 622:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0004_ip = 680; continue _fun0004 }
 628:
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
 675: // try_end0
                    _fun0004_ip = 1002; continue _fun0004;
 680: // try_end1
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
 772:
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
 864: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=7);
                    var6 = var8;
                    var10 = var8.status;
                    var8 = 429;
                    if(!(var8 !== var10)) { _fun0004_ip = 910; continue _fun0004 }
 884:
                    var12 = _closure1_slot14;
                    var11 = var12.error;
                    var10 = var6;
                    var8 = 'Background sync encountered error';
                    var8 = var11.bind(var12)(var8, var10);
                    _fun0004_ip = 931; continue _fun0004;
 910:
                    var11 = _closure1_slot14;
                    var10 = var11.verbose;
                    var8 = 'Background sync was rate limited';
                    var8 = var10.bind(var11)(var8);
 931:
                    var8 = var6;
                    var8 = var8.timeout;
                    if(var8) { _fun0004_ip = 977; continue _fun0004 }
 943:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 17;
                    var8 = var11[var8];
                    var11 = var10.bind(var4)(var8);
                    var10 = var11.captureException;
                    var8 = var6;
                    var8 = var10.bind(var11)(var8);
 977:
                    var8 = var13;
                    var9 = var9.String;
                    var6 = var6.message;
                    var6 = var9.bind(var4)(var6);
                    var8['error'] = var6;
 1002: // try_end2
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
                    _fun0004_ip = 1207; continue _fun0004;
 1096: // catch_target1 // catch_target2
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
 1186:
                    var7 = _closure1_slot14;
                    var6 = var7.log;
                    var5 = 'Skipping Background Sync because disk is low';
                    var5 = var6.bind(var7)(var5);
 1207:
                    return var4;
 1210:
                    return var3;
 1213:
                    return var2;
 1216:
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
 0:
                    StartGenerator();
                    var7 = arg2;
                    var8 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 616; continue _fun0005 }
 18:
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
                    if(!(var10 == var12)) { _fun0005_ip = 101; continue _fun0005 }
 75:
                    var9 = _closure1_slot14;
                    var6 = var9.log;
                    var2 = 'Aborting BG sync because there is no database';
                    var2 = var6.bind(var9)(var2);
                    _fun0005_ip = 607; continue _fun0005;
 101:
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
 226:
                    return var2;
 228:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 613; continue _fun0005 }
 237:
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
                    if(!(var10 != var9)) { _fun0005_ip = 367; continue _fun0005 }
 323:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var13];
                    var9 = var10.bind(var4)(var9);
                    var14 = var9.Storage;
                    var13 = var14.set;
                    var10 = _closure1_slot17;
                    var9 = var15.latest_message_id;
                    var9 = var13.bind(var14)(var10, var9);
 367:
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
 445:
                    return var3;
 447:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0005_ip = 610; continue _fun0005 }
 456:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 22;
                    var9 = var14[var9];
                    var13 = var13.bind(var4)(var9);
                    var9 = var13.isEmpty;
                    var9 = var9.bind(var13)(var10);
                    if(var9) { _fun0005_ip = 607; continue _fun0005 }
 490:
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
 567:
                    return var5;
 569:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0005_ip = 604; continue _fun0005 }
 575:
                    var9 = var6.Date;
                    var6 = var9.now;
                    var6 = var6.bind(var9)();
                    var6 = var6 - var8;
                    var7['time_save_private_channel_messages'] = var6;
                    _fun0005_ip = 607; continue _fun0005;
 604:
                    return var5;
 607:
                    return var4;
 610:
                    return var3;
 613:
                    return var2;
 616:
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
 0:
                    StartGenerator();
                    var8 = arg1;
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 732; continue _fun0006 }
 18:
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
 138:
                    return var2;
 140:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 729; continue _fun0006 }
 149:
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
                    if(var12) { _fun0006_ip = 236; continue _fun0006 }
 232:
                    var12 = {};
                    _fun0006_ip = 268; continue _fun0006;
 236:
                    var13 = {};
                    var13['guild_versions'] = var16;
                    var16 = var14.highest_last_message_id;
                    var13['highest_last_message_id'] = var16;
                    var14 = var14.api_code_version;
                    var13['api_code_version'] = var14;
                    var12 = var13;
 268:
                    var3['body'] = var12;
                    var12 = 5000;
                    var3['timeout'] = var12;
                    var12 = false;
                    var3['rejectWithError'] = var12;
                    var3 = var4.bind(var11)(var3);
                    SaveGenerator(address=298);
 296:
                    return var3;
 298:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 726; continue _fun0006 }
 307:
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
                    if(!(var5 !== var4)) { _fun0006_ip = 717; continue _fun0006 }
 410:
                    var5 = var11.map;
                    var4 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var3 = arg1;
                            var2 = var3.unavailable;
                            var1 = var3;
                            if(!var2) { _fun0007_ip = 60; continue _fun0007 }
 15:
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
 60:
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
 462:
                    return var4;
 464:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 723; continue _fun0006 }
 473:
                    var5 = arg3;
                    if(var5) { _fun0006_ip = 527; continue _fun0006 }
 479:
                    var11 = _closure1_slot9;
                    var5 = var11.getState;
                    var11 = var5.bind(var11)();
                    var5 = 'active';
                    if(!(var5 === var11)) { _fun0006_ip = 527; continue _fun0006 }
 501:
                    var12 = _closure1_slot14;
                    var11 = var12.log;
                    var5 = 'Skipping guild data background sync because app is now active';
                    var5 = var11.bind(var12)(var5);
                    _fun0006_ip = 717; continue _fun0006;
 527:
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
 0:
                            var4 = arg1;
                            var1 = var4.data_mode;
                            var3 = 'unavailable';
                            if(!(var3 !== var1)) { _fun0008_ip = 137; continue _fun0008 }
 17:
                            var1 = var4.data_mode;
                            var5 = 'partial';
                            if(!(var5 !== var1)) { _fun0008_ip = 64; continue _fun0008 }
 31:
                            var1 = {};
                            var2 = 'full';
                            var1['dataMode'] = var2;
                            var2 = var4.id;
                            var1['guildId'] = var2;
                            var2 = var4.emojis;
                            var1['entities'] = var2;
                            _fun0008_ip = 135; continue _fun0008;
 64:
                            var2 = {};
                            var2['dataMode'] = var5;
                            var5 = var4.id;
                            var2['guildId'] = var5;
                            var5 = var4.partial_updates;
                            var5 = var5.emojis;
                            var6 = null;
                            if(!(var6 == var5)) { _fun0008_ip = 102; continue _fun0008 }
 98:
                            var5 = new Array(0);
 102:
                            var2['updatedEntities'] = var5;
                            var5 = var4.partial_updates;
                            var5 = var5.deleted_emoji_ids;
                            if(!(var6 == var5)) { _fun0008_ip = 127; continue _fun0008 }
 123:
                            var5 = new Array(0);
 127:
                            var2['deletedEntityIds'] = var5;
                            var1 = var2;
 135:
                            _fun0008_ip = 156; continue _fun0008;
 137:
                            var2 = {};
                            var4 = var4.id;
                            var2['guildId'] = var4;
                            var2['dataMode'] = var3;
                            var1 = var2;
 156:
                            return var1;
                        }
                    };
                    var16 = var18.bind(var17)(var16);
                    var5['emojis'] = var16;
                    var16 = var17.map;
                    var15 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var4 = arg1;
                            var1 = var4.data_mode;
                            var3 = 'unavailable';
                            if(!(var3 !== var1)) { _fun0009_ip = 137; continue _fun0009 }
 17:
                            var1 = var4.data_mode;
                            var5 = 'partial';
                            if(!(var5 !== var1)) { _fun0009_ip = 64; continue _fun0009 }
 31:
                            var1 = {};
                            var2 = 'full';
                            var1['dataMode'] = var2;
                            var2 = var4.id;
                            var1['guildId'] = var2;
                            var2 = var4.stickers;
                            var1['entities'] = var2;
                            _fun0009_ip = 135; continue _fun0009;
 64:
                            var2 = {};
                            var2['dataMode'] = var5;
                            var5 = var4.id;
                            var2['guildId'] = var5;
                            var5 = var4.partial_updates;
                            var5 = var5.stickers;
                            var6 = null;
                            if(!(var6 == var5)) { _fun0009_ip = 102; continue _fun0009 }
 98:
                            var5 = new Array(0);
 102:
                            var2['updatedEntities'] = var5;
                            var5 = var4.partial_updates;
                            var5 = var5.deleted_sticker_ids;
                            if(!(var6 == var5)) { _fun0009_ip = 127; continue _fun0009 }
 123:
                            var5 = new Array(0);
 127:
                            var2['deletedEntityIds'] = var5;
                            var1 = var2;
 135:
                            _fun0009_ip = 156; continue _fun0009;
 137:
                            var2 = {};
                            var4 = var4.id;
                            var2['guildId'] = var4;
                            var2['dataMode'] = var3;
                            var1 = var2;
 156:
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
 649:
                    return var5;
 651:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                    if(var11) { _fun0006_ip = 720; continue _fun0006 }
 657:
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
 717:
                    return var6;
 720:
                    return var5;
 723:
                    return var4;
 726:
                    return var3;
 729:
                    return var2;
 732:
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
 0:
                    StartGenerator();
                    var7 = arg2;
                    var8 = arg3;
                    var17 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 973; continue _fun0010 }
 21:
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
                    if(!(var21 == var12)) { _fun0010_ip = 96; continue _fun0010 }
 70:
                    var9 = _closure1_slot14;
                    var6 = var9.log;
                    var3 = 'Aborting BG sync because there is no database';
                    var3 = var6.bind(var9)(var3);
                    _fun0010_ip = 964; continue _fun0010;
 96:
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
 0:
                            var4 = arg1;
                            var3 = _closure1_slot7;
                            var2 = var3.getBasicChannel;
                            var1 = var4.channelId;
                            var3 = var2.bind(var3)(var1);
                            var5 = null;
                            var1 = var5 != var3;
                            if(!var1) { _fun0011_ip = 105; continue _fun0011 }
 35:
                            var8 = _closure1_slot5;
                            var2 = var3.type;
                            var7 = undefined;
                            var2 = var8.bind(var7)(var2);
                            var2 = !var2;
                            if(!var2) { _fun0011_ip = 74; continue _fun0011 }
 57:
                            var6 = _closure1_slot6;
                            var3 = var3.type;
                            var3 = var6.bind(var7)(var3);
                            var2 = !var3;
 74:
                            if(!var2) { _fun0011_ip = 102; continue _fun0011 }
 77:
                            var3 = var4.guildId;
                            var3 = var5 != var3;
                            if(!var3) { _fun0011_ip = 99; continue _fun0011 }
 89:
                            var4 = var4.lastViewed;
                            var3 = var5 != var4;
 99:
                            var2 = var3;
 102:
                            var1 = var2;
 105:
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
                    if(!(var9 !== var3)) { _fun0010_ip = 964; continue _fun0010 }
 275:
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
 311:
                    return var2;
 313:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 970; continue _fun0010 }
 322:
                    var15 = {};
                    var3 = var16.length;
                    var3 = var9 < var3;
                    var14 = 21;
                    var11 = '0';
                    var10 = 0;
                    if(!var3) { _fun0010_ip = 455; continue _fun0010 }
 347:
                    var3 = var2[var10];
                    var18 = var3[var9];
                    var19 = var21 == var18;
                    var3 = undefined;
                    if(var19) { _fun0010_ip = 369; continue _fun0010 }
 364:
                    var3 = var18.id;
 369:
                    var19 = var21 != var3;
                    var18 = var11;
                    if(!var19) { _fun0010_ip = 382; continue _fun0010 }
 379:
                    var18 = var3;
 382:
                    var3 = var16[var10];
                    var19 = var17;
                    if(!var19) { _fun0010_ip = 431; continue _fun0010 }
 392:
                    var22 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var20 = var20[var14];
                    var23 = var22.bind(var4)(var20);
                    var22 = var23.compare;
                    var20 = var3.lastMessageId;
                    var20 = var22.bind(var23)(var18, var20);
                    var19 = var20 >= var9;
 431:
                    if(var19) { _fun0010_ip = 443; continue _fun0010 }
 434:
                    var3 = var3.channelId;
                    var15[var3] = var18;
 443:
                    var10 = var10 + 1;
                    var3 = var16.length;
                    if(var10 < var3) { _fun0010_ip = 347; continue _fun0010 }
 455:
                    var14 = {};
                    var3 = _closure1_slot18;
                    var11 = var3.bind(var4)(var2);
                    var10 = var11.bind(var4)();
                    var3 = var10.done;
                    if(var3) { _fun0010_ip = 548; continue _fun0010 }
 478:
                    var16 = _closure1_slot18;
                    var3 = var10.value;
                    var17 = var16.bind(var4)(var3);
                    var16 = var17.bind(var4)();
                    var3 = var16.done;
                    if(var3) { _fun0010_ip = 533; continue _fun0010 }
 504:
                    var18 = var16.value;
                    var3 = var18.id;
                    var14[var3] = var18;
                    var18 = var17.bind(var4)();
                    var3 = var18.done;
                    var16 = var18;
                    if(!var3) { _fun0010_ip = 504; continue _fun0010 }
 533:
                    var16 = var11.bind(var4)();
                    var3 = var16.done;
                    var10 = var16;
                    if(!var3) { _fun0010_ip = 478; continue _fun0010 }
 548:
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
 641:
                    return var3;
 643:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0010_ip = 967; continue _fun0010 }
 652:
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
 738:
                    {
 747:
                        var22 = var15;
                        var9 = var20.change_logs_by_channel_id;
                        var9 = var9[var22];
                        var9 = var9.changes;
                        if(var21 == var9) { _fun0010_ip = 738; continue _fun0010 }
 770:
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
 811:
                        return var9;
 813:
                        ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                        if(!var10) { _fun0010_ip = 738; continue _fun0010 }
 819:
                        return var9;
                    }
 822:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var13];
                    var10 = var10.bind(var4)(var9);
                    var9 = var10.isEmpty;
                    var9 = var9.bind(var10)(var11);
                    if(var9) { _fun0010_ip = 964; continue _fun0010 }
 853:
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
 924:
                    return var5;
 926:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0010_ip = 961; continue _fun0010 }
 932:
                    var9 = var6.Date;
                    var6 = var9.now;
                    var6 = var6.bind(var9)();
                    var6 = var6 - var8;
                    var7['time_save_guild_channel_messages'] = var6;
                    _fun0010_ip = 964; continue _fun0010;
 961:
                    return var5;
 964:
                    return var4;
 967:
                    return var3;
 970:
                    return var2;
 973:
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
 0:
                    StartGenerator();
                    var3 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 514; continue _fun0012 }
 15:
                    var4 = arg1;
                    var _closure4_slot0 = var4;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0012_ip = 506; continue _fun0012 }
 31:
                    var4 = var3.new_messages;
                    var10 = undefined;
                    if(!(var10 === var4)) { _fun0012_ip = 47; continue _fun0012 }
 43:
                    var4 = new Array(0);
 47:
                    var9 = var3.modified_messages;
                    if(!(var10 === var9)) { _fun0012_ip = 61; continue _fun0012 }
 57:
                    var9 = new Array(0);
 61:
                    var3 = var3.deleted_message_ids;
                    if(!(var10 === var3)) { _fun0012_ip = 75; continue _fun0012 }
 71:
                    var3 = new Array(0);
 75:
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
                    if(!(var8 > var7)) { _fun0012_ip = 460; continue _fun0012 }
 201:
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
 239:
                    return var2;
 241:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0012_ip = 511; continue _fun0012 }
 250:
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
                    if(var5) { _fun0012_ip = 460; continue _fun0012 }
 385:
                    var12 = var6.value;
                    var5 = var12.id;
                    var5 = var5 in var9;
                    if(!var5) { _fun0012_ip = 445; continue _fun0012 }
 402:
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
 445:
                    var11 = var8.bind(var10)();
                    var5 = var11.done;
                    var6 = var11;
                    if(!var5) { _fun0012_ip = 385; continue _fun0012 }
 460:
                    var5 = var4.length;
                    var5 = var5 > var7;
                    if(var5) { _fun0012_ip = 481; continue _fun0012 }
 472:
                    var6 = var3.length;
                    var5 = var6 > var7;
 481:
                    if(!var5) { _fun0012_ip = 506; continue _fun0012 }
 484:
                    var5 = new Array(2);
                    var5[0] = var4;
                    var5[1] = var3;
                    var4 = arg2;
                    var3 = arg3;
                    var4[var3] = var5;
 506:
                    var3 = undefined;
                    return var3;
 511:
                    return var2;
 514:
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
 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var7 = function _loop(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
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
                        if(var4) { _fun0014_ip = 85; continue _fun0014 }
 62:
                        var8 = var7.num_private_channel_messages;
                        var4 = var5.length;
                        var4 = var8 + var4;
                        var7['num_private_channel_messages'] = var4;
                        _fun0014_ip = 106; continue _fun0014;
 85:
                        var8 = var7.num_guild_channel_messages;
                        var4 = var5.length;
                        var4 = var8 + var4;
                        var7['num_guild_channel_messages'] = var4;
 106:
                        var4 = _closure1_slot18;
                        var12 = var4.bind(var1)(var5);
                        var9 = var12.bind(var1)();
                        var7 = var9.done;
                        var11 = 29;
                        var8 = null;
                        if(var7) { _fun0014_ip = 217; continue _fun0014 }
 135:
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
                        if(!var7) { _fun0014_ip = 135; continue _fun0014 }
 217:
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
 33:
                {
 42:
                    var8 = var2;
                    var8 = var7.bind(var1)(var8);
                    _fun0013_ip = 33; continue _fun0013;
                }
 52:
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