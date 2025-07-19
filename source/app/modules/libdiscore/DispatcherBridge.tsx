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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
    var8 = global;
    var9 = var8.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var10.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var10.bind(var1)(var4);
    var4 = 3;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var7 = var10.bind(var1)(var4);
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4._libdiscoreSetKvDerivedData;
    var _closure1_slot6 = var11;
    var4 = var4._libdiscoreSetKvRoot;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var11 = var10.bind(var1)(var4);
    var4 = var11.prototype;
    var10 = Object.create(var4, {constructor: {value: var11}});
    var14 = 'DispatcherBridge';
    var15 = var10;
    var4 = new var15[var11](var14, var13);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot9 = var4;
    var4 = new Array(2);
    var4[0] = var9;
    var4[1] = var7;
    var7 = {};
    var9 = function GUILD_MEMBER_ADD(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = _closure1_slot5;
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
    var _closure1_slot10 = var7;
    var7 = function() {
        var4 = _closure1_slot4;
        var3 = function DispatcherBridge(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var7 = arg1;
                var13 = this;
                var _closure3_slot0 = var13;
                var8 = var7;
                var1 = undefined;
                var4 = undefined;
                var9 = undefined;
                var6 = undefined;
                var10 = undefined;
                var11 = undefined;
                var _closure3_slot1 = var13;
                var12 = _closure1_slot3;
                var5 = _closure2_slot0;
                var5 = var12.bind(var1)(var13, var5);
                var5 = global;
                var12 = var5.Map;
                var14 = var12.prototype;
                var14 = Object.create(var14, {constructor: {value: var12}});
                var19 = var14;
                var12 = new var19[var12](var18);
                var12 = var12 instanceof Object ? var12 : var14;
                var13['tokenToStore'] = var12;
                var12 = var7.length;
                var7 = 0;
                if(!(var7 !== var12)) { _fun0004_ip = 532; continue _fun0004 }
 99:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 8;
                var7 = var13[var7];
                var7 = var12.bind(var1)(var7);
                var12 = var7.KV_DATABASE_API;
                var4 = var12;
                var _closure3_slot2 = var12;
                var7 = null;
                if(!(var7 == var12)) { _fun0004_ip = 164; continue _fun0004 }
 138:
                var13 = _closure1_slot9;
                var12 = var13.info;
                var7 = 'Not initializing DispatcherBridge, because kvStoreApi is unavailable.';
                var7 = var12.bind(var13)(var7);
                _fun0004_ip = 532; continue _fun0004;
 164: // try_start_0
                var7 = new Array(0);
                var6 = var7;
                var _closure3_slot3 = var7;
                var10 = function _loop(arg1) {
                    var4 = arg1;
                    var _closure4_slot0 = var4;
                    var1 = var4.getName;
                    var10 = var1.bind(var4)();
                    var6 = _closure3_slot2;
                    var5 = var6.registerStore;
                    var3 = function(arg1, arg2) {
                        var4 = _closure4_slot0;
                        var1 = _closure1_slot7;
                        var3 = var4[var1];
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = function(arg1) {
                        var3 = _closure4_slot0;
                        var1 = _closure1_slot6;
                        var2 = var3[var1];
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var10, var3, var2);
                    var9 = var2.storeToken;
                    var2 = _closure3_slot1;
                    var3 = var2.tokenToStore;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var9, var4);
                    var3 = _closure3_slot3;
                    var2 = var3.push;
                    var1 = var4.getMode;
                    var12 = var1.bind(var4)();
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var17 = '';
                    var15 = ' => [token: ';
                    var13 = ', mode: ';
                    var11 = ']';
                    var16 = var10;
                    var14 = var9;
                    var1 = var17[var7](var16, var15, var14, var13, var12, var11, var10);
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var12 = _closure1_slot12;
                var7 = var8;
                var7 = var12.bind(var1)(var7);
                var11 = var7;
                var7 = var7.bind(var1)();
                var9 = var7;
                var7 = var7.done;
                if(var7) { _fun0004_ip = 246; continue _fun0004 }
 212:
                var12 = var10;
                var7 = var9;
                var7 = var7.value;
                var7 = var12.bind(var1)(var7);
                var7 = var11;
                var7 = var7.bind(var1)();
                var9 = var7;
                var7 = var7.done;
                if(!var7) { _fun0004_ip = 212; continue _fun0004 }
 246:
                var7 = _closure1_slot9;
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
                        var7 = arg1;
                        var5 = var7;
                        var2 = undefined;
                        var11 = undefined;
                        var9 = undefined;
                        var3 = undefined;
                        var6 = undefined;
                        var8 = undefined;
                        var17 = undefined;
                        var13 = undefined;
                        var18 = undefined;
                        var19 = undefined;
                        var20 = undefined;
                        var10 = _closure1_slot10;
                        var7 = var7.type;
                        var22 = var10[var7];
                        var12 = global;
                        var10 = var12.performance;
                        var7 = var10.now;
                        var9 = var7.bind(var10)();
                        var10 = null;
                        if(!(var10 == var22)) { _fun0005_ip = 89; continue _fun0005 }
 67:
                        var15 = var12.JSON;
                        var14 = var15.stringify;
                        var7 = var5;
                        var7 = var14.bind(var15)(var7);
                        _fun0005_ip = 132; continue _fun0005;
 89:
                        var16 = var12.JSON;
                        var15 = var16.stringify;
                        var14 = {};
                        var21 = var5;
                        var23 = var21.type;
                        var14['type'] = var23;
                        var28 = var22.bind(var2)(var21);
                        var29 = var14;
                        var21 = copyDataProperties(var29, var28);
                        var7 = var15.bind(var16)(var14);
 132:
                        var11 = var7;
                        var7 = {};
                        var14 = 'json_stringify_action';
                        var7['kind'] = var14;
                        var15 = var12.performance;
                        var14 = var15.now;
                        var15 = var14.bind(var15)();
                        var14 = var9;
                        var14 = var15 - var14;
                        var7['durationMillis'] = var14;
                        var6 = var7;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var7 = 9;
                        var14 = var14[var7];
                        var14 = var15.bind(var2)(var14);
                        var15 = var14.TelemetryExperiment;
                        var14 = var15.shouldCollectMetrics;
                        var8 = var14.bind(var15)();
 215: // try_start_0
                        var21 = _closure3_slot2;
                        var15 = var21.dispatchAction;
                        var14 = var11;
                        var11 = var8;
                        var3 = var15.bind(var21)(var14, var11);
 240: // try_end0
                        var14 = var12.performance;
                        var11 = var14.now;
                        var11 = var11.bind(var14)();
                        var13 = var11 - var9;
                        var11 = _closure1_slot12;
                        var9 = var3;
                        var9 = var9.storeTokens;
                        var9 = var11.bind(var2)(var9);
                        var18 = var9;
                        var9 = var9.bind(var2)();
                        var17 = var9;
                        var9 = var9.done;
                        var15 = 'When dispatching action';
                        var14 = 'we got a store token';
                        var11 = 'that is unknown';
                        if(var9) { _fun0005_ip = 426; continue _fun0005 }
 315:
                        var9 = var17;
                        var22 = var9.value;
                        var19 = var22;
                        var9 = _closure3_slot0;
                        var21 = var9.tokenToStore;
                        var9 = var21.get;
                        var9 = var9.bind(var21)(var22);
                        var20 = var9;
                        if(!(var10 != var9)) { _fun0005_ip = 372; continue _fun0005 }
 353:
                        var22 = var20;
                        var21 = var22.doEmitChanges;
                        var9 = var5;
                        var9 = var21.bind(var22)(var9);
                        _fun0005_ip = 408; continue _fun0005;
 372:
                        var23 = _closure1_slot9;
                        var22 = var23.warn;
                        var9 = var5;
                        var28 = var9.type;
                        var26 = var19;
                        var30 = var23;
                        var29 = var15;
                        var27 = var14;
                        var25 = var11;
                        var9 = var30[var22](var29, var28, var27, var26, var25, var24);
 408:
                        var9 = var18;
                        var9 = var9.bind(var2)();
                        var17 = var9;
                        var9 = var9.done;
                        if(!var9) { _fun0005_ip = 315; continue _fun0005 }
 426:
                        var9 = var3;
                        var9 = var9.metrics;
                        if(!(var10 != var9)) { _fun0005_ip = 665; continue _fun0005 }
 442:
                        if(!var8) { _fun0005_ip = 665; continue _fun0005 }
 448:
                        var15 = new Array(1);
                        var15[0] = var6;
                        var11 = var3;
                        var3 = var11.metrics;
                        var28 = var3.timings;
                        var27 = 1;
                        var29 = var15;
                        var3 = arraySpread(var29, var28, var27);
                        var8 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var6 = 11;
                        var6 = var3[var6];
                        var10 = var8.bind(var2)(var6);
                        var9 = var10.track;
                        var6 = _closure1_slot8;
                        var8 = var6.LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY;
                        var6 = {};
                        var14 = var5;
                        var14 = var14.type;
                        var6['action_type'] = var14;
                        var6['total_duration_millis'] = var13;
                        var14 = var12.JSON;
                        var13 = var14.stringify;
                        var13 = var13.bind(var14)(var15);
                        var6['timings'] = var13;
                        var15 = var12.JSON;
                        var14 = var15.stringify;
                        var13 = var11.metrics;
                        var13 = var13.mutations;
                        var13 = var14.bind(var15)(var13);
                        var6['mutations'] = var13;
                        var13 = var12.JSON;
                        var12 = var13.stringify;
                        var11 = var11.metrics;
                        var11 = var11.memory;
                        var11 = var12.bind(var13)(var11);
                        var6['memory_usage'] = var11;
                        var6 = var9.bind(var10)(var8, var6);
                        var6 = _closure1_slot0;
                        var3 = var3[var7];
                        var3 = var6.bind(var2)(var3);
                        var6 = var3.TelemetryExperiment;
                        var3 = var6.didEmit;
                        var3 = var3.bind(var6)();
 665:
                        return var2;
 667: // catch_target0
                        CatchBlockStart(arg_register=6);
                        var1 = var7;
                        var8 = _closure3_slot2;
                        var6 = var8.findStoresThatCanHandleActionType;
                        var9 = var5;
                        var5 = var9.type;
                        var6 = var6.bind(var8)(var5);
                        var5 = _closure3_slot0;
                        var3 = var5.filterAuthorativeStores;
                        var6 = var3.bind(var5)(var6);
                        var5 = var6.map;
                        var3 = function(arg1) {
                            var2 = arg1;
                            var1 = var2.getName;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var3 = var5.bind(var6)(var3);
                        var12 = _closure1_slot9;
                        var11 = var12.error;
                        var28 = var9.type;
                        var29 = 'Failed to dispatch action';
                        var27 = 'authorative stores';
                        var25 = 'error:';
                        var30 = var12;
                        var26 = var3;
                        var24 = var7;
                        var5 = var30[var11](var29, var28, var27, var26, var25, var24, var23);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 10;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.captureException;
                        var4 = {};
                        var8 = {};
                        var9 = var9.type;
                        var8['action_type'] = var9;
                        var8['authorative_stores'] = var3;
                        var4['extra'] = var8;
                        var8 = {};
                        var9 = 'libdiscore';
                        var8['source'] = var9;
                        var4['tags'] = var8;
                        var4 = var5.bind(var6)(var7, var4);
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0005_ip = 867; continue _fun0005 }
 865:
                        return var2;
 867:
                        throw var1;
                    }
                };
                var _closure3_slot4 = var4;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 12;
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
                    var2 = _closure3_slot4;
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
 507: // try_end0
                _fun0004_ip = 532; continue _fun0004;
 509: // catch_target0
                CatchBlockStart(arg_register=4);
                var4 = _closure1_slot9;
                var3 = var4.error;
                var2 = 'Failed to initialize the dispatcher bridge';
                var2 = var3.bind(var4)(var2, var5);
 532:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'filterAuthorativeStores';
        var1['key'] = var5;
        var2 = function filterAuthorativeStores(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var8 = this;
                var1 = new Array(0);
                var3 = _closure1_slot12;
                var7 = undefined;
                var2 = arg1;
                var6 = var3.bind(var7)(var2);
                var3 = var6.bind(var7)();
                var2 = var3.done;
                var5 = 'libdiscore';
                var4 = null;
                if(var2) { _fun0006_ip = 114; continue _fun0006 }
 44:
                var10 = var3.value;
                var9 = var8.tokenToStore;
                var2 = var9.get;
                var9 = var2.bind(var9)(var10);
                var2 = var4 != var9;
                if(!var2) { _fun0006_ip = 86; continue _fun0006 }
 72:
                var10 = var9.getMode;
                var10 = var10.bind(var9)();
                var2 = var5 === var10;
 86:
                if(!var2) { _fun0006_ip = 99; continue _fun0006 }
 89:
                var2 = var1.push;
                var2 = var2.bind(var1)(var9);
 99:
                var9 = var6.bind(var7)();
                var2 = var9.done;
                var3 = var9;
                if(!var2) { _fun0006_ip = 44; continue _fun0006 }
 114:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var7 = var7.bind(var1)();
    var10 = var8.Set;
    var8 = var10.prototype;
    var9 = Object.create(var8, {constructor: {value: var10}});
    var14 = ['libdiscore', 'typescript-libdiscore-dual-read'];
    var15 = var9;
    var8 = new var15[var10](var14, var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot11 = var8;
    var2 = function filterKvStores(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var4 = arg1;
            var3 = _closure1_slot11;
            var2 = var3.has;
            var1 = var4.getMode;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/libdiscore/DispatcherBridge.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();