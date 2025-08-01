// app/modules/gateway/ChannelResyncManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function handleGuildCreate(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var2 = var2.guild;
            var _closure2_slot0 = var2;
            var3 = var2.unavailable;
            var2 = true;
            if(!(var2 !== var3)) { _fun0002_ip = 51; continue _fun0002 }
 26:
            var2 = global;
            var4 = var2.setTimeout;
            var3 = undefined;
            var2 = function() {
                var5 = _closure1_slot23;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var3 = _closure1_slot25;
                var2 = var2.id;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = 0;
            var1 = var4.bind(var3)(var2, var1);
 51:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function handlePostConnectionOpen() {
        var3 = _closure1_slot23;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot10;
        var2 = var3.getGuildIds;
        var4 = var2.bind(var3)();
        var3 = var4.forEach;
        var2 = function(arg1) {
            var3 = _closure1_slot25;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function handleChannelSync(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = var3.integrity_check;
            if(var1) { _fun0003_ip = 33; continue _fun0003 }
 12:
            var4 = _closure1_slot25;
            var2 = var3.guild_id;
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            _fun0003_ip = 49; continue _fun0003;
 33:
            var2 = function doIntegrityCheck(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.guild_id;
                    var6 = var2.channels;
                    var5 = _closure1_slot9;
                    var3 = var5.getMutableGuildChannelsForGuild;
                    var3 = var3.bind(var5)(var4);
                    var _closure3_slot0 = var3;
                    var5 = var6.map;
                    var3 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = arg1;
                            var3 = _closure3_slot0;
                            var2 = var1.id;
                            var2 = var3[var2];
                            var5 = null;
                            if(!(var5 != var2)) { _fun0005_ip = 207; continue _fun0005 }
 28:
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var7 = 14;
                            var4 = var4[var7];
                            var6 = undefined;
                            var9 = var8.bind(var6)(var4);
                            var8 = var9.hasFlag;
                            var4 = var1.flags;
                            var10 = var5 != var4;
                            var5 = 0;
                            if(!var10) { _fun0005_ip = 76; continue _fun0005 }
 73:
                            var5 = var4;
 76:
                            var4 = _closure1_slot12;
                            var4 = var4.OBFUSCATED;
                            var11 = var8.bind(var9)(var5, var4);
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var7];
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.hasFlag;
                            var4 = var2.flags;
                            var2 = _closure1_slot12;
                            var2 = var2.OBFUSCATED;
                            var10 = var5.bind(var6)(var4, var2);
                            var2 = var11 === var10;
                            if(var2) { _fun0005_ip = 205; continue _fun0005 }
 143:
                            var5 = _closure1_slot13;
                            var4 = var5.warn;
                            var16 = var1.id;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var8 = var3.concat;
                            var17 = 'Integrity check failure: ';
                            var15 = ' serverObfuscated: ';
                            var13 = ' != clientObfuscated: ';
                            var14 = var11;
                            var12 = var10;
                            var3 = var17[var8](var16, var15, var14, var13, var12, var11);
                            var3 = var4.bind(var5)(var3);
                            var2 = false;
 205:
                            return var2;
 207:
                            var3 = _closure1_slot13;
                            var2 = var3.warn;
                            var6 = var1.id;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var4 = 'Integrity check failure: ';
                            var1 = ' was missing.';
                            var1 = var5.bind(var4)(var6, var1);
                            var1 = var2.bind(var3)(var1);
                            var1 = false;
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var3);
                    var3 = var5.every;
                    var1 = function(arg1) {
                        var1 = arg1;
                        return var1;
                    };
                    var7 = var3.bind(var5)(var1);
                    var1 = _closure1_slot13;
                    if(var7) { _fun0004_ip = 87; continue _fun0004 }
 80:
                    var5 = var1.warn;
                    _fun0004_ip = 93; continue _fun0004;
 87:
                    var5 = var1.verbose;
 93:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var3 = 'Integrity check for guild ';
                    var1 = ' completed. Passed: ';
                    var3 = var6.bind(var3)(var4, var1, var7);
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure1_slot16;
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                }
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 49:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function scheduleGuildResyncs() {
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
    var1 = function _scheduleGuildResyncs() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 84; continue _fun0006 }
 9:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.getAll;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=55);
 53:
                    return var2;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 81; continue _fun0006 }
 61:
                    var5 = var2.forEach;
                    var4 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = arg1;
                            var4 = _closure4_slot0;
                            var2 = null;
                            var2 = var2 != var4;
                            if(!var2) { _fun0007_ip = 32; continue _fun0007 }
 19:
                            var4 = var1.id;
                            var3 = _closure4_slot0;
                            var2 = var4 !== var3;
 32:
                            if(var2) { _fun0007_ip = 56; continue _fun0007 }
 35:
                            var3 = var1.id;
                            var2 = function scheduleGuildResync(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                    var4 = arg1;
                                    var _closure6_slot0 = var4;
                                    var1 = _closure1_slot15;
                                    var5 = var1[var4];
                                    var1 = null;
                                    if(!(var1 != var5)) { _fun0008_ip = 49; continue _fun0008 }
 26:
                                    var1 = global;
                                    var6 = var1.clearTimeout;
                                    var1 = _closure1_slot15;
                                    var5 = var1[var4];
                                    var1 = undefined;
                                    var1 = var6.bind(var1)(var5);
 49:
                                    var1 = global;
                                    var7 = var1.Math;
                                    var6 = var7.ceil;
                                    var8 = var1.Math;
                                    var5 = var8.random;
                                    var8 = var5.bind(var8)();
                                    var5 = _closure1_slot14;
                                    var5 = var8 * var5;
                                    var6 = var6.bind(var7)(var5);
                                    var3 = _closure1_slot15;
                                    var5 = var1.setTimeout;
                                    var1 = undefined;
                                    var2 = function() {
                                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                            var1 = _closure1_slot15;
                                            var3 = _closure6_slot0;
                                            var1 = delete var1[var3];
                                            var5 = _closure1_slot0;
                                            var4 = _closure1_slot2;
                                            var1 = 13;
                                            var4 = var4[var1];
                                            var1 = undefined;
                                            var5 = var5.bind(var1)(var4);
                                            var4 = var5.isChannelMetadataObfuscationEnabled;
                                            var4 = var4.bind(var5)();
                                            if(!var4) { _fun0009_ip = 222; continue _fun0009 }
 56:
                                            var5 = _closure1_slot10;
                                            var4 = var5.getGuild;
                                            var5 = var4.bind(var5)(var3);
                                            var4 = null;
                                            if(!(var4 != var5)) { _fun0009_ip = 222; continue _fun0009 }
 79:
                                            var6 = new Array(0);
                                            var5 = _closure1_slot9;
                                            var4 = var5.getMutableGuildChannelsForGuild;
                                            var11 = var4.bind(var5)(var3);
                                            var9 = var11;
                                            var4 = 14;
                                            for(var5 in var9)
 112:
                                            {
 121:
                                                var13 = var5;
                                                var12 = var11[var13];
                                                var15 = _closure1_slot0;
                                                var14 = _closure1_slot2;
                                                var14 = var14[var4];
                                                var16 = var15.bind(var1)(var14);
                                                var15 = var16.hasFlag;
                                                var14 = var12.flags;
                                                var12 = _closure1_slot12;
                                                var12 = var12.OBFUSCATED;
                                                var12 = var15.bind(var16)(var14, var12);
                                                if(!var12) { _fun0009_ip = 112; continue _fun0009 }
 175:
                                                var12 = var6.push;
                                                var12 = var12.bind(var6)(var13);
                                                _fun0009_ip = 112; continue _fun0009;
                                            }
 187:
                                            var5 = _closure1_slot11;
                                            var4 = var5.getSocket;
                                            var5 = var4.bind(var5)();
                                            var4 = var5.triggerGuildChannelResync;
                                            var4 = var4.bind(var5)(var3, var6);
                                            var2 = _closure1_slot25;
                                            var2 = var2.bind(var1)(var3);
 222:
                                            return var1;
                                        }
                                    };
                                    var2 = var5.bind(var1)(var2, var6);
                                    var3[var4] = var2;
                                    return var1;
                                }
                            };
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
 56:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var2)(var4);
                    return var3;
 81:
                    return var2;
 84:
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
    var1 = function scheduleIntegrityCheck(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot18;
            var5 = var3[var4];
            var3 = null;
            if(!(var3 != var5)) { _fun0010_ip = 49; continue _fun0010 }
 26:
            var3 = global;
            var6 = var3.clearTimeout;
            var3 = _closure1_slot18;
            var5 = var3[var4];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
 49:
            var6 = global;
            var7 = var6.Math;
            var5 = var7.ceil;
            var8 = var6.Math;
            var3 = var8.random;
            var8 = var3.bind(var8)();
            var3 = _closure1_slot17;
            var3 = var8 * var3;
            var5 = var5.bind(var7)(var3);
            var3 = _closure1_slot18;
            var6 = var6.setTimeout;
            var1 = _closure1_slot17;
            var5 = var1 + var5;
            var1 = undefined;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = _closure1_slot18;
                    var5 = _closure2_slot0;
                    var1 = delete var1[var5];
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isChannelMetadataIntegrityCheckEnabled;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0011_ip = 116; continue _fun0011 }
 53:
                    var4 = _closure1_slot10;
                    var3 = var4.getGuild;
                    var3 = var3.bind(var4)(var5);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0011_ip = 116; continue _fun0011 }
 73:
                    var6 = _closure1_slot16;
                    var3 = var6.has;
                    var3 = var3.bind(var6)(var5);
                    if(var3) { _fun0011_ip = 116; continue _fun0011 }
 90:
                    var3 = _closure1_slot11;
                    var2 = var3.getSocket;
                    var3 = var2.bind(var3)();
                    var2 = var3.triggerGuildChannelResync;
                    var2 = var2.bind(var3)(var5, var4);
 116:
                    return var1;
                }
            };
            var2 = var6.bind(var1)(var2, var5);
            var3[var4] = var2;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ChannelFlags;
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var10 = var8.bind(var1)(var2);
    var2 = var10.prototype;
    var9 = Object.create(var2, {constructor: {value: var10}});
    var13 = 'ChannelResyncManager';
    var14 = var9;
    var2 = new var14[var10](var13, var12);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var6[var2];
    var8 = var8.bind(var1)(var2);
    var2 = function(arg1) {
        var3 = function ChannelResyncManager(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot5;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot19;
                var1 = var1.bind(var4)();
                if(var1) { _fun0012_ip = 84; continue _fun0012 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0012_ip = 118; continue _fun0012;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot20;
                var2['GUILD_CREATE'] = var4;
                var4 = _closure1_slot21;
                var2['POST_CONNECTION_OPEN'] = var4;
                var3 = _closure1_slot22;
                var2['CHANNEL_SYNC'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot8;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var8);
    var8 = 2000;
    var _closure1_slot14 = var8;
    var8 = {};
    var _closure1_slot15 = var8;
    var4 = var4.Set;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var14 = var8;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot16 = var4;
    var4 = 10000;
    var _closure1_slot17 = var4;
    var4 = {};
    var _closure1_slot18 = var4;
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/ChannelResyncManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();