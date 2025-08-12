// app/modules/libdiscore/DispatcherBridge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot12;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot12;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var10 = var11.bind(var1)(var4);
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var7 = var11.bind(var1)(var4);
    var4 = 6;
    var4 = var6[var4];
    var9 = var11.bind(var1)(var4);
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var12 = var11.bind(var1)(var4);
    var4 = var12.prototype;
    var11 = Object.create(var4, {constructor: {value: var12}});
    var15 = 'DispatcherBridge';
    var16 = var11;
    var4 = new var16[var12](var15, var14);
    var4 = var4 instanceof Object ? var4 : var11;
    var _closure1_slot8 = var4;
    var4 = new Array(3);
    var4[0] = var10;
    var4[1] = var9;
    var4[2] = var7;
    var7 = {};
    var9 = function GUILD_MEMBER_ADD(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = _closure1_slot6;
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
    var7 = function() {
        var4 = _closure1_slot4;
        var3 = function DispatcherBridge(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var7 = arg1;
                var15 = this;
                var _closure3_slot0 = var15;
                var8 = var7;
                var1 = undefined;
                var4 = undefined;
                var13 = undefined;
                var6 = undefined;
                var14 = undefined;
                var9 = _closure1_slot3;
                var5 = _closure2_slot0;
                var5 = var9.bind(var1)(var15, var5);
                var5 = global;
                var9 = var5.Map;
                var10 = var9.prototype;
                var10 = Object.create(var10, {constructor: {value: var9}});
                var27 = var10;
                var9 = new var27[var9](var26);
                var9 = var9 instanceof Object ? var9 : var10;
                var15['tokenToStore'] = var9;
                var9 = var7.length;
                var7 = 0;
                if(!(var7 !== var9)) { _fun0004_ip = 630; continue _fun0004 }
 93:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 9;
                var7 = var10[var7];
                var7 = var9.bind(var1)(var7);
                var9 = var7.FLUX_API;
                var4 = var9;
                var _closure3_slot1 = var9;
                var7 = null;
                if(!(var7 == var9)) { _fun0004_ip = 158; continue _fun0004 }
 132:
                var10 = _closure1_slot8;
                var9 = var10.info;
                var7 = 'Not initializing DispatcherBridge, because kvStoreApi is unavailable.';
                var7 = var9.bind(var10)(var7);
                _fun0004_ip = 630; continue _fun0004;
 158: // try_start_0
                var6 = new Array(0);
                var9 = _closure1_slot11;
                var7 = var8;
                var7 = var9.bind(var1)(var7);
                var14 = var7;
                var7 = var7.bind(var1)();
                var13 = var7;
                var7 = var7.done;
                var12 = '';
                var11 = ' => [token: ';
                var10 = ', mode: ';
                var9 = ']';
                if(var7) { _fun0004_ip = 344; continue _fun0004 }
 215:
                var7 = var13;
                var18 = var7.value;
                var7 = var18.getName;
                var20 = var7.bind(var18)();
                var16 = var18.registerWithLibdiscore;
                var7 = var4;
                var7 = var16.bind(var18)(var7);
                var19 = var7.storeToken;
                var16 = var15.tokenToStore;
                var7 = var16.set;
                var7 = var7.bind(var16)(var19, var18);
                var17 = var6;
                var16 = var17.push;
                var7 = var18.getMode;
                var22 = var7.bind(var18)();
                var7 = var5.HermesInternal;
                var7 = var7.concat;
                var27 = var12;
                var26 = var20;
                var25 = var11;
                var24 = var19;
                var23 = var10;
                var21 = var9;
                var7 = var27[var7](var26, var25, var24, var23, var22, var21, var20);
                var7 = var16.bind(var17)(var7);
                var7 = var14;
                var7 = var7.bind(var1)();
                var13 = var7;
                var7 = var7.done;
                if(!var7) { _fun0004_ip = 215; continue _fun0004 }
 344:
                var7 = _closure1_slot8;
                var9 = var7.info;
                var14 = var8.length;
                var10 = var6;
                var6 = var10.join;
                var8 = ', ';
                var24 = var6.bind(var10)(var8);
                var6 = var5.HermesInternal;
                var11 = var6.concat;
                var27 = 'Registered ';
                var25 = ' store(s), mapping: ';
                var13 = '.';
                var26 = var14;
                var23 = var13;
                var6 = var27[var11](var26, var25, var24, var23, var22);
                var6 = var9.bind(var7)(var6);
                var6 = var4;
                var4 = var6.getActions;
                var12 = var4.bind(var6)();
                var6 = var7.info;
                var11 = var12.length;
                var4 = var12.join;
                var24 = var4.bind(var12)(var8);
                var4 = var5.HermesInternal;
                var9 = var4.concat;
                var27 = 'Registering ';
                var25 = ' bridged action(s): ';
                var26 = var11;
                var4 = var27[var9](var26, var25, var24, var23, var22);
                var4 = var6.bind(var7)(var4);
                var4 = function actionHandler(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var12 = arg1;
                        var4 = _closure1_slot9;
                        var1 = var12.type;
                        var8 = var4[var1];
                        var10 = global;
                        var4 = var10.performance;
                        var1 = var4.now;
                        var11 = var1.bind(var4)();
                        var7 = null;
                        if(!(var7 == var8)) { _fun0005_ip = 63; continue _fun0005 }
 44:
                        var4 = var10.JSON;
                        var1 = var4.stringify;
                        var13 = var1.bind(var4)(var12);
                        _fun0005_ip = 105; continue _fun0005;
 63:
                        var5 = var10.JSON;
                        var4 = var5.stringify;
                        var1 = {};
                        var6 = var12.type;
                        var1['type'] = var6;
                        var6 = undefined;
                        var26 = var8.bind(var6)(var12);
                        var27 = var1;
                        var6 = copyDataProperties(var27, var26);
                        var13 = var4.bind(var5)(var1);
 105:
                        var5 = {};
                        var1 = 'json_stringify_action';
                        var5['kind'] = var1;
                        var4 = var10.performance;
                        var1 = var4.now;
                        var1 = var1.bind(var4)();
                        var1 = var1 - var11;
                        var5['durationMillis'] = var1;
                        var8 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var4 = 10;
                        var6 = var1[var4];
                        var1 = undefined;
                        var6 = var8.bind(var1)(var6);
                        var8 = var6.TelemetryExperiment;
                        var6 = var8.shouldCollectMetrics;
                        var6 = var6.bind(var8)();
                        var9 = _closure3_slot1;
                        var8 = var9.dispatchAction;
                        var8 = var8.bind(var9)(var13, var6);
                        var9 = var8.ok;
                        if(var9) { _fun0005_ip = 433; continue _fun0005 }
 212:
                        var14 = var10.Error;
                        var27 = var8.error;
                        var13 = var14.prototype;
                        var13 = Object.create(var13, {constructor: {value: var14}});
                        var28 = var13;
                        var9 = new var28[var14](var27, var26);
                        var9 = var9 instanceof Object ? var9 : var13;
                        var15 = _closure3_slot1;
                        var14 = var15.findStoresThatCanHandleActionType;
                        var13 = var12.type;
                        var15 = var14.bind(var15)(var13);
                        var14 = _closure3_slot0;
                        var13 = var14.filterAuthorativeStores;
                        var15 = var13.bind(var14)(var15);
                        var14 = var15.map;
                        var13 = function(arg1) {
                            var2 = arg1;
                            var1 = var2.getName;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var13 = var14.bind(var15)(var13);
                        var20 = _closure1_slot8;
                        var19 = var20.error;
                        var26 = var12.type;
                        var27 = 'Failed to dispatch action';
                        var25 = 'authorative stores';
                        var23 = 'error:';
                        var28 = var20;
                        var24 = var13;
                        var22 = var9;
                        var14 = var28[var19](var27, var26, var25, var24, var23, var22, var21);
                        var15 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var14 = 11;
                        var14 = var16[var14];
                        var16 = var15.bind(var1)(var14);
                        var15 = var16.captureException;
                        var14 = {};
                        var17 = {};
                        var19 = var12.type;
                        var17['action_type'] = var19;
                        var17['authorative_stores'] = var13;
                        var14['extra'] = var17;
                        var17 = {};
                        var19 = 'libdiscore';
                        var17['source'] = var19;
                        var14['tags'] = var17;
                        var14 = var15.bind(var16)(var9, var14);
                        var14 = var13.length;
                        var13 = 0;
                        if(!(var14 > var13)) { _fun0005_ip = 1093; continue _fun0005 }
 431:
                        throw var9;
 433:
                        var13 = var10.performance;
                        var9 = var13.now;
                        var9 = var9.bind(var13)();
                        var11 = var9 - var11;
                        var8 = var8.value;
                        var9 = var8.metrics;
                        var13 = _closure1_slot11;
                        var8 = var8.storeTokens;
                        var17 = var13.bind(var1)(var8);
                        var13 = var17.bind(var1)();
                        var8 = var13.done;
                        var16 = 'When dispatching action';
                        var15 = 'we got a store token';
                        var14 = 'that is unknown';
                        if(var8) { _fun0005_ip = 600; continue _fun0005 }
 510:
                        var21 = var13.value;
                        var8 = _closure3_slot0;
                        var19 = var8.tokenToStore;
                        var8 = var19.get;
                        var19 = var8.bind(var19)(var21);
                        if(!(var7 != var19)) { _fun0005_ip = 552; continue _fun0005 }
 539:
                        var8 = var19.doEmitChanges;
                        var8 = var8.bind(var19)(var12);
                        _fun0005_ip = 585; continue _fun0005;
 552:
                        var20 = _closure1_slot8;
                        var19 = var20.warn;
                        var26 = var12.type;
                        var28 = var20;
                        var27 = var16;
                        var25 = var15;
                        var24 = var21;
                        var23 = var14;
                        var8 = var28[var19](var27, var26, var25, var24, var23, var22);
 585:
                        var19 = var17.bind(var1)();
                        var8 = var19.done;
                        var13 = var19;
                        if(!var8) { _fun0005_ip = 510; continue _fun0005 }
 600:
                        if(!(var7 != var9)) { _fun0005_ip = 1093; continue _fun0005 }
 607:
                        if(!var6) { _fun0005_ip = 1093; continue _fun0005 }
 613:
                        var13 = new Array(1);
                        var13[0] = var5;
                        var26 = var9.timings;
                        var25 = 1;
                        var27 = var13;
                        var5 = arraySpread(var27, var26, var25);
                        var7 = _closure1_slot5;
                        var6 = var7.get;
                        var5 = 'libdiscore_verbose_telemetry_logging';
                        var5 = var6.bind(var7)(var5);
                        if(!var5) { _fun0005_ip = 924; continue _fun0005 }
 663:
                        var6 = var13.map;
                        var5 = function(arg1) {
                            var1 = arg1;
                            var10 = var1.kind;
                            var8 = var1.durationMillis;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var4 = var1.concat;
                            var11 = ' - ';
                            var9 = ': ';
                            var7 = 'ms';
                            var1 = var11[var4](var10, var9, var8, var7, var6);
                            return var1;
                        };
                        var6 = var6.bind(var13)(var5);
                        var5 = var6.join;
                        var8 = '\n';
                        var6 = var5.bind(var6)(var8);
                        var5 = ['Timings'];
                        var5[1] = var6;
                        var7 = new Array(3);
                        var7[0] = var5;
                        var14 = var9.mutations;
                        var6 = var14.map;
                        var5 = function(arg1) {
                            var1 = arg1;
                            var5 = var1.recordType;
                            var6 = var1.metrics;
                            var1 = global;
                            var4 = var1.Object;
                            var3 = var4.entries;
                            var6 = var3.bind(var4)(var6);
                            var4 = var6.filter;
                            var3 = function(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                    var4 = arg1;
                                    var1 = var4[Symbol.iterator];
                                    var4 = var1().next;
                                    var2 = var4().value;
                                    var2 = var1;
                                    var6 = undefined;
                                    var3 = var2 === var6;
                                    var2 = undefined;
                                    if(var3) { _fun0006_ip = 49; continue _fun0006 }
 24:
                                    var5 = var4().value;
                                    var4 = var1;
                                    var4 = var4 === var6;
                                    var2 = undefined;
                                    var3 = var4;
                                    if(var4) { _fun0006_ip = 49; continue _fun0006 }
 43:
                                    var2 = var5;
                                    var3 = var4;
 49:
                                    if(var3) { _fun0006_ip = 55; continue _fun0006 }
 52:
                                    var1.return();
 55:
                                    var1 = 0;
                                    var1 = var1 !== var2;
                                    return var1;
                                }
                            };
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.map;
                            var2 = function(arg1) {
                                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                    var3 = arg1;
                                    var1 = var3[Symbol.iterator];
                                    var3 = var1().next;
                                    var4 = var3().value;
                                    var2 = var1;
                                    var7 = undefined;
                                    var2 = var2 === var7;
                                    var5 = undefined;
                                    if(var2) { _fun0007_ip = 27; continue _fun0007 }
 24:
                                    var5 = var4;
 27:
                                    var4 = undefined;
                                    if(var2) { _fun0007_ip = 57; continue _fun0007 }
 32:
                                    var6 = var3().value;
                                    var3 = var1;
                                    var3 = var3 === var7;
                                    var4 = undefined;
                                    var2 = var3;
                                    if(var3) { _fun0007_ip = 57; continue _fun0007 }
 51:
                                    var4 = var6;
                                    var2 = var3;
 57:
                                    if(var2) { _fun0007_ip = 63; continue _fun0007 }
 60:
                                    var1.return();
 63:
                                    var1 = global;
                                    var1 = var1.HermesInternal;
                                    var3 = var1.concat;
                                    var2 = ' - ';
                                    var1 = ': ';
                                    var1 = var3.bind(var2)(var5, var1, var4);
                                    return var1;
                                }
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.join;
                            var4 = '\n';
                            var3 = var2.bind(var3)(var4);
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = ' * Record Type: ';
                            var1 = var2.bind(var1)(var5, var4, var3);
                            return var1;
                        };
                        var6 = var6.bind(var14)(var5);
                        var5 = var6.join;
                        var6 = var5.bind(var6)(var8);
                        var5 = ['Mutations'];
                        var5[1] = var6;
                        var7[1] = var5;
                        var14 = var9.memory;
                        var6 = var14.map;
                        var5 = function(arg1) {
                            var1 = arg1;
                            var5 = var1.recordType;
                            var4 = var1.statistics;
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.entries;
                            var4 = var2.bind(var3)(var4);
                            var3 = var4.map;
                            var2 = function(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                    var3 = arg1;
                                    var1 = var3[Symbol.iterator];
                                    var3 = var1().next;
                                    var4 = var3().value;
                                    var2 = var1;
                                    var7 = undefined;
                                    var2 = var2 === var7;
                                    var5 = undefined;
                                    if(var2) { _fun0008_ip = 27; continue _fun0008 }
 24:
                                    var5 = var4;
 27:
                                    var4 = undefined;
                                    if(var2) { _fun0008_ip = 57; continue _fun0008 }
 32:
                                    var6 = var3().value;
                                    var3 = var1;
                                    var3 = var3 === var7;
                                    var4 = undefined;
                                    var2 = var3;
                                    if(var3) { _fun0008_ip = 57; continue _fun0008 }
 51:
                                    var4 = var6;
                                    var2 = var3;
 57:
                                    if(var2) { _fun0008_ip = 63; continue _fun0008 }
 60:
                                    var1.return();
 63:
                                    var1 = global;
                                    var3 = var1.JSON;
                                    var2 = var3.stringify;
                                    var4 = var2.bind(var3)(var4);
                                    var1 = var1.HermesInternal;
                                    var3 = var1.concat;
                                    var2 = ' - ';
                                    var1 = ': ';
                                    var1 = var3.bind(var2)(var5, var1, var4);
                                    return var1;
                                }
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.join;
                            var4 = '\n';
                            var3 = var2.bind(var3)(var4);
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = ' * Record Type: ';
                            var1 = var2.bind(var1)(var5, var4, var3);
                            return var1;
                        };
                        var6 = var6.bind(var14)(var5);
                        var5 = var6.join;
                        var6 = var5.bind(var6)(var8);
                        var5 = ['Memory Usage'];
                        var5[1] = var6;
                        var7[2] = var5;
                        var6 = var7.filter;
                        var5 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                var6 = arg1;
                                var2 = var6[Symbol.iterator];
                                var6 = var2().next;
                                var8 = undefined;
                                var3 = undefined;
                                var5 = undefined;
                                var7 = var6().value;
                                var9 = var2;
                                var9 = var9 === var8;
                                var3 = var9;
                                if(var9) { _fun0009_ip = 32; continue _fun0009 }
 29:
                                var5 = var7;
 32:
                                var5 = undefined;
                                var7 = var3;
                                if(var7) { _fun0009_ip = 60; continue _fun0009 }
 40:
                                var6 = var6().value;
                                var7 = var2;
                                var7 = var7 === var8;
                                var3 = var7;
                                if(var7) { _fun0009_ip = 60; continue _fun0009 }
 57:
                                var5 = var6;
 60:
                                var4 = var5;
                                var5 = var3;
                                if(var5) { _fun0009_ip = 72; continue _fun0009 }
 69:
                                var2.return();
 72:
                                var5 = var4.length;
                                var4 = 0;
                                var4 = var5 > var4;
                                return var4;
 85:
                                CatchBlockStart(arg_register=0);
                                if(var3) { _fun0009_ip = 93; continue _fun0009 }
 90:
                                var2.return();
 93:
                                throw var1;
                            }
                        };
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.map;
                        var2 = function(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                var3 = arg1;
                                var1 = var3[Symbol.iterator];
                                var3 = var1().next;
                                var4 = var3().value;
                                var2 = var1;
                                var7 = undefined;
                                var2 = var2 === var7;
                                var5 = undefined;
                                if(var2) { _fun0010_ip = 27; continue _fun0010 }
 24:
                                var5 = var4;
 27:
                                var4 = undefined;
                                if(var2) { _fun0010_ip = 57; continue _fun0010 }
 32:
                                var6 = var3().value;
                                var3 = var1;
                                var3 = var3 === var7;
                                var4 = undefined;
                                var2 = var3;
                                if(var3) { _fun0010_ip = 57; continue _fun0010 }
 51:
                                var4 = var6;
                                var2 = var3;
 57:
                                if(var2) { _fun0010_ip = 63; continue _fun0010 }
 60:
                                var1.return();
 63:
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var3 = var1.concat;
                                var2 = '';
                                var1 = ':\n';
                                var1 = var3.bind(var2)(var5, var1, var4);
                                return var1;
                            }
                        };
                        var6 = var5.bind(var6)(var2);
                        var5 = var6.join;
                        var2 = '\n\n';
                        var23 = var5.bind(var6)(var2);
                        var6 = _closure1_slot8;
                        var5 = var6.info;
                        var27 = var12.type;
                        var2 = var10.HermesInternal;
                        var14 = var2.concat;
                        var28 = 'Handling action ';
                        var26 = ' took ';
                        var24 = 'ms\n';
                        var25 = var11;
                        var2 = var28[var14](var27, var26, var25, var24, var23, var22);
                        var2 = var5.bind(var6)(var2);
 924:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 12;
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
                        var11 = var9.mutations;
                        var11 = var12.bind(var13)(var11);
                        var5['mutations'] = var11;
                        var11 = var10.JSON;
                        var10 = var11.stringify;
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
 1093:
                        return var1;
                    }
                };
                var _closure3_slot2 = var4;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 13;
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
                    var2 = _closure3_slot2;
                    var1[1] = var2;
                    return var1;
                };
                var5 = var11.bind(var12)(var5);
                var25 = var6.bind(var10)(var5);
                var5 = _closure1_slot0;
                var4 = var9[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.DispatchBand;
                var23 = var4.Database;
                var26 = 'LibDiscoreDispatcherBridge';
                var24 = function() {
                    var1 = undefined;
                    return var1;
                };
                var27 = var8;
                var3 = var27[var7](var26, var25, var24, var23, var22);
 605: // try_end0
                _fun0004_ip = 630; continue _fun0004;
 607: // catch_target0
                CatchBlockStart(arg_register=4);
                var4 = _closure1_slot8;
                var3 = var4.error;
                var2 = 'Failed to initialize the dispatcher bridge';
                var2 = var3.bind(var4)(var2, var5);
 630:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'filterAuthorativeStores';
        var1['key'] = var5;
        var2 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var8 = this;
                var1 = new Array(0);
                var3 = _closure1_slot11;
                var7 = undefined;
                var2 = arg1;
                var6 = var3.bind(var7)(var2);
                var3 = var6.bind(var7)();
                var2 = var3.done;
                var5 = 'libdiscore';
                var4 = null;
                if(var2) { _fun0011_ip = 114; continue _fun0011 }
 44:
                var10 = var3.value;
                var9 = var8.tokenToStore;
                var2 = var9.get;
                var9 = var2.bind(var9)(var10);
                var2 = var4 != var9;
                if(!var2) { _fun0011_ip = 86; continue _fun0011 }
 72:
                var10 = var9.getMode;
                var10 = var10.bind(var9)();
                var2 = var5 === var10;
 86:
                if(!var2) { _fun0011_ip = 99; continue _fun0011 }
 89:
                var2 = var1.push;
                var2 = var2.bind(var1)(var9);
 99:
                var9 = var6.bind(var7)();
                var2 = var9.done;
                var3 = var9;
                if(!var2) { _fun0011_ip = 44; continue _fun0011 }
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
    var15 = ['libdiscore', 'typescript-libdiscore-dual-read'];
    var16 = var9;
    var8 = new var16[var10](var15, var14);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot10 = var8;
    var2 = function filterStores(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var4 = arg1;
            var3 = _closure1_slot10;
            var2 = var3.has;
            var1 = var4.getMode;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var15 = var2.bind(var1)(var4);
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var16 = var4;
    var2 = new var16[var7](var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/libdiscore/DispatcherBridge.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();