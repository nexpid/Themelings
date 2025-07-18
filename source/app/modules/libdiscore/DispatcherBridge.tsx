// app/modules/libdiscore/DispatcherBridge.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var10 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var10.bind(var1)(var4);
    var4 = 1;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var10.bind(var1)(var4);
    var4 = 3;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var7 = var10.bind(var1)(var4);
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4._libdiscoreSetKvDerivedData;
    var _closure1_slot5 = var11;
    var4 = var4._libdiscoreSetKvRoot;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var11 = var10.bind(var1)(var4);
    var4 = var11.prototype;
    var10 = Object.create(var4, {constructor: {value: var11}});
    var14 = 'DispatcherBridge';
    var15 = var10;
    var4 = new var15[var11](var14, var13);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot8 = var4;
    var4 = new Array(2);
    var4[0] = var9;
    var4[1] = var7;
    var7 = {};
    var9 = function GUILD_MEMBER_ADD(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = _closure1_slot4;
        var2 = var3.getId;
        var3 = var2.bind(var3)();
        var2 = 'currentUserId';
        var1[var2] = var3;
        return var1;
    };
    var7['GUILD_MEMBER_ADD'] = var9;
    var9 = function CONNECTION_OPEN(arg1) {
        var1 = {};
        var2 = arg1;
        var2 = var2.guilds;
        var1['guilds'] = var2;
        return var1;
    };
    var7['CONNECTION_OPEN'] = var9;
    var9 = function CACHE_LOADED(arg1) {
        var1 = {};
        var2 = arg1;
        var2 = var2.guilds;
        var1['guilds'] = var2;
        return var1;
    };
    var7['CACHE_LOADED'] = var9;
    var9 = function CACHE_LOADED_LAZY(arg1) {
        var1 = {};
        var2 = arg1;
        var2 = var2.guilds;
        var1['guilds'] = var2;
        return var1;
    };
    var7['CACHE_LOADED_LAZY'] = var9;
    var9 = function BACKGROUND_SYNC(arg1) {
        var1 = {};
        var2 = arg1;
        var2 = var2.guilds;
        var1['guilds'] = var2;
        return var1;
    };
    var7['BACKGROUND_SYNC'] = var9;
    var _closure1_slot9 = var7;
    var7 = function DispatcherBridge(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var12 = this;
            var _closure2_slot0 = var12;
            var8 = arg1;
            var1 = undefined;
            var4 = undefined;
            var9 = undefined;
            var6 = undefined;
            var10 = undefined;
            var11 = undefined;
            var _closure2_slot1 = var12;
            var7 = _closure1_slot3;
            var5 = _closure1_slot12;
            var5 = var7.bind(var1)(var12, var5);
            var5 = global;
            var7 = var5.Map;
            var13 = var7.prototype;
            var13 = Object.create(var13, {constructor: {value: var7}});
            var19 = var13;
            var7 = new var19[var7](var18);
            var7 = var7 instanceof Object ? var7 : var13;
            var12['tokenToStore'] = var7;
 79: // try_start_0
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 8;
            var7 = var13[var7];
            var12 = var12.bind(var1)(var7);
            var7 = var12.getKvStoreApi;
            var12 = var7.bind(var12)();
            var4 = var12;
            var _closure2_slot2 = var12;
            var7 = null;
            if(!(var7 != var12)) { _fun0004_ip = 470; continue _fun0004 }
 125:
            var7 = new Array(0);
            var6 = var7;
            var _closure2_slot3 = var7;
            var10 = function _loop(arg1) {
                var4 = arg1;
                var _closure3_slot0 = var4;
                var1 = var4.getName;
                var7 = var1.bind(var4)();
                var6 = _closure2_slot2;
                var5 = var6.registerStore;
                var3 = function(arg1, arg2) {
                    var4 = _closure3_slot0;
                    var1 = _closure1_slot6;
                    var3 = var4[var1];
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2 = function(arg1) {
                    var3 = _closure3_slot0;
                    var1 = _closure1_slot5;
                    var2 = var3[var1];
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var5.bind(var6)(var7, var3, var2);
                var6 = var2.token;
                var2 = _closure2_slot1;
                var3 = var2.tokenToStore;
                var2 = var3.set;
                var2 = var2.bind(var3)(var6, var4);
                var3 = _closure2_slot3;
                var2 = var3.push;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = '';
                var1 = ' => ';
                var1 = var5.bind(var4)(var7, var1, var6);
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var12 = _closure1_slot10;
            var7 = var8;
            var7 = var12.bind(var1)(var7);
            var11 = var7;
            var7 = var7.bind(var1)();
            var9 = var7;
            var7 = var7.done;
            if(var7) { _fun0004_ip = 207; continue _fun0004 }
 173:
            var12 = var10;
            var7 = var9;
            var7 = var7.value;
            var7 = var12.bind(var1)(var7);
            var7 = var11;
            var7 = var7.bind(var1)();
            var9 = var7;
            var7 = var7.done;
            if(!var7) { _fun0004_ip = 173; continue _fun0004 }
 207:
            var7 = _closure1_slot8;
            var9 = var7.info;
            var14 = var8.length;
            var10 = var6;
            var6 = var10.join;
            var8 = ', ';
            var16 = var6.bind(var10)(var8);
            var6 = var5.HermesInternal;
            var11 = var6.concat;
            var19 = 'Registered ';
            var17 = ' store(s), mapping: ';
            var13 = '.';
            var18 = var14;
            var15 = var13;
            var6 = var19[var11](var18, var17, var16, var15, var14);
            var6 = var9.bind(var7)(var6);
            var6 = var4;
            var4 = var6.getActions;
            var12 = var4.bind(var6)();
            var6 = var7.info;
            var11 = var12.length;
            var4 = var12.join;
            var16 = var4.bind(var12)(var8);
            var4 = var5.HermesInternal;
            var9 = var4.concat;
            var19 = 'Registering ';
            var17 = ' bridged action(s): ';
            var18 = var11;
            var4 = var19[var9](var18, var17, var16, var15, var14);
            var4 = var6.bind(var7)(var4);
            var4 = function actionHandler(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var12 = arg1;
                    var2 = _closure1_slot9;
                    var1 = var12.type;
                    var6 = var2[var1];
                    var10 = global;
                    var2 = var10.performance;
                    var1 = var2.now;
                    var8 = var1.bind(var2)();
                    var7 = null;
                    if(!(var7 == var6)) { _fun0005_ip = 61; continue _fun0005 }
 42:
                    var2 = var10.JSON;
                    var1 = var2.stringify;
                    var11 = var1.bind(var2)(var12);
                    _fun0005_ip = 103; continue _fun0005;
 61:
                    var4 = var10.JSON;
                    var2 = var4.stringify;
                    var1 = {};
                    var5 = var12.type;
                    var1['type'] = var5;
                    var5 = undefined;
                    var24 = var6.bind(var5)(var12);
                    var25 = var1;
                    var5 = copyDataProperties(var25, var24);
                    var11 = var2.bind(var4)(var1);
 103:
                    var2 = {};
                    var1 = 'json_stringify_action';
                    var2['kind'] = var1;
                    var4 = var10.performance;
                    var1 = var4.now;
                    var1 = var1.bind(var4)();
                    var1 = var1 - var8;
                    var2['durationMillis'] = var1;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 9;
                    var5 = var1[var4];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.TelemetryExperiment;
                    var5 = var6.shouldCollectMetrics;
                    var5 = var5.bind(var6)();
                    var9 = _closure2_slot2;
                    var6 = var9.dispatchAction;
                    var9 = var6.bind(var9)(var11, var5);
                    var11 = var10.performance;
                    var6 = var11.now;
                    var6 = var6.bind(var11)();
                    var11 = var6 - var8;
                    if(!(var7 == var9)) { _fun0005_ip = 260; continue _fun0005 }
 221:
                    var15 = _closure1_slot8;
                    var14 = var15.info;
                    var13 = var12.type;
                    var8 = 'When dispatching action';
                    var6 = 'libdiscore returned a failure. Check native logs for more info.';
                    var6 = var14.bind(var15)(var8, var13, var6);
                    _fun0005_ip = 627; continue _fun0005;
 260:
                    var8 = _closure1_slot10;
                    var6 = var9.storeTokens;
                    var16 = var8.bind(var1)(var6);
                    var8 = var16.bind(var1)();
                    var6 = var8.done;
                    var15 = 'When dispatching action';
                    var14 = 'we got a store token';
                    var13 = 'that is unknown';
                    if(var6) { _fun0005_ip = 397; continue _fun0005 }
 307:
                    var20 = var8.value;
                    var6 = _closure2_slot0;
                    var18 = var6.tokenToStore;
                    var6 = var18.get;
                    var18 = var6.bind(var18)(var20);
                    if(!(var7 != var18)) { _fun0005_ip = 349; continue _fun0005 }
 336:
                    var6 = var18.doEmitChanges;
                    var6 = var6.bind(var18)(var12);
                    _fun0005_ip = 382; continue _fun0005;
 349:
                    var19 = _closure1_slot8;
                    var18 = var19.warn;
                    var24 = var12.type;
                    var26 = var19;
                    var25 = var15;
                    var23 = var14;
                    var22 = var20;
                    var21 = var13;
                    var6 = var26[var18](var25, var24, var23, var22, var21, var20);
 382:
                    var18 = var16.bind(var1)();
                    var6 = var18.done;
                    var8 = var18;
                    if(!var6) { _fun0005_ip = 307; continue _fun0005 }
 397:
                    var6 = var9.metrics;
                    if(!(var7 != var6)) { _fun0005_ip = 627; continue _fun0005 }
 410:
                    if(!var5) { _fun0005_ip = 627; continue _fun0005 }
 416:
                    var13 = new Array(1);
                    var13[0] = var2;
                    var2 = var9.metrics;
                    var24 = var2.timings;
                    var23 = 1;
                    var25 = var13;
                    var2 = arraySpread(var25, var24, var23);
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 10;
                    var5 = var2[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot7;
                    var6 = var5.LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY;
                    var5 = {};
                    var12 = var12.type;
                    var5['action_type'] = var12;
                    var5['total_duration_millis'] = var11;
                    var12 = var10.JSON;
                    var11 = var12.stringify;
                    var11 = var11.bind(var12)(var13);
                    var5['timings'] = var11;
                    var13 = var10.JSON;
                    var12 = var13.stringify;
                    var11 = var9.metrics;
                    var11 = var11.mutations;
                    var11 = var12.bind(var13)(var11);
                    var5['mutations'] = var11;
                    var11 = var10.JSON;
                    var10 = var11.stringify;
                    var9 = var9.metrics;
                    var9 = var9.memory;
                    var9 = var10.bind(var11)(var9);
                    var5['memory_usage'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var3 = _closure1_slot0;
                    var2 = var2[var4];
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.TelemetryExperiment;
                    var2 = var3.didEmit;
                    var2 = var2.bind(var3)();
 627:
                    return var1;
                }
            };
            var _closure2_slot4 = var4;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 11;
            var6 = var9[var4];
            var8 = var7.bind(var1)(var6);
            var7 = var8.register;
            var10 = var5.Object;
            var6 = var10.fromEntries;
            var11 = var12.map;
            var5 = function(arg1) {
                var1 = new Array(2);
                var2 = arg1;
                var1[0] = var2;
                var2 = _closure2_slot4;
                var1[1] = var2;
                return var1;
            };
            var5 = var11.bind(var12)(var5);
            var17 = var6.bind(var10)(var5);
            var5 = _closure1_slot0;
            var4 = var9[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.DispatchBand;
            var15 = var4.Database;
            var18 = 'LibDiscoreDispatcherBridge';
            var16 = function() {
                var1 = undefined;
                return var1;
            };
            var19 = var8;
            var3 = var19[var7](var18, var17, var16, var15, var14);
 468: // try_end0
            _fun0004_ip = 518; continue _fun0004;
 470: // try_start_1
            var5 = _closure1_slot8;
            var4 = var5.info;
            var3 = 'Not initializing the action bridge, because discore kvStoreApi is unavailable.';
            var3 = var4.bind(var5)(var3);
 491: // try_end1
            var3 = undefined;
            return var3;
 495: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=4);
            var4 = _closure1_slot8;
            var3 = var4.error;
            var2 = 'Failed to initialize the dispatcher bridge';
            var2 = var3.bind(var4)(var2, var5);
 518:
            return var1;
        }
    };
    var _closure1_slot12 = var7;
    var7 = var8.bind(var1)(var7);
    var2 = function filterKvStores(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.actionsHandledByLibdiscore;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var14 = var2.bind(var1)(var4);
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var15 = var4;
    var2 = new var15[var7](var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/libdiscore/DispatcherBridge.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();