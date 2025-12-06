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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function cleanupResyncState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot22;
            var3 = var3[var2];
            var4 = null;
            if(!(var4 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = global;
            var6 = var3.clearTimeout;
            var3 = _closure1_slot22;
            var5 = var3[var2];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = _closure1_slot22;
            var3 = delete var3[var2];
case 6:
            var3 = _closure1_slot21;
            var3 = var3[var2];
            if(!(var4 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = global;
            var5 = var3.clearTimeout;
            var3 = _closure1_slot21;
            var4 = var3[var2];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var1 = _closure1_slot21;
            var1 = delete var1[var2];
case 8:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function cleanupIntegrityCheckState(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot24;
            var3 = var3[var2];
            var4 = null;
            if(!(var4 != var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var3 = global;
            var6 = var3.clearTimeout;
            var3 = _closure1_slot24;
            var5 = var3[var2];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = _closure1_slot24;
            var3 = delete var3[var2];
case 6:
            var3 = _closure1_slot23;
            var3 = var3[var2];
            if(!(var4 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = global;
            var5 = var3.clearTimeout;
            var3 = _closure1_slot23;
            var4 = var3[var2];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var1 = _closure1_slot23;
            var1 = delete var1[var2];
case 8:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function handleGuildCreate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var2 = var2.guild;
            var _closure2_slot0 = var2;
            var3 = var2.unavailable;
            var2 = true;
            if(!(var2 !== var3)) { _fun0004_ip = 6; continue _fun0004 }
case 10:
            var2 = global;
            var4 = var2.setTimeout;
            var3 = undefined;
            var2 = function() {
                var5 = _closure1_slot20;
                var4 = var5.delete;
                var2 = _closure2_slot0;
                var1 = var2.id;
                var1 = var4.bind(var5)(var1);
                var5 = _closure1_slot31;
                var4 = var2.id;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var3 = _closure1_slot33;
                var2 = var2.id;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = 0;
            var1 = var4.bind(var3)(var2, var1);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function handlePostConnectionOpen() {
        var3 = _closure1_slot20;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot31;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot10;
        var2 = var3.getGuildIds;
        var4 = var2.bind(var3)();
        var3 = var4.forEach;
        var2 = function(arg1) {
            var3 = _closure1_slot33;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function handleChannelSync(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = var3.integrity_check;
            if(var1) { _fun0005_ip = 11; continue _fun0005 }
case 12:
            var4 = _closure1_slot19;
            var2 = var3.guild_id;
            var2 = var4[var2];
            var4 = null;
            var4 = var4 != var2;
            var8 = 'unknown';
            if(!var4) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var8 = var2;
case 13:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var5.bind(var4)(var2);
            var6 = var7.track;
            var2 = _closure1_slot12;
            var5 = var2.GUILD_CHANNEL_RESYNC_COMPLETED;
            var2 = {};
            var9 = var3.guild_id;
            var2['guild_id'] = var9;
            var2['request_id'] = var8;
            var8 = var3.channels;
            var8 = var8.length;
            var2['num_new_channels'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            var5 = _closure1_slot26;
            var2 = var3.guild_id;
            var2 = var5.bind(var4)(var2);
            var2 = _closure1_slot33;
            var1 = var3.guild_id;
            var1 = var2.bind(var4)(var1);
            _fun0005_ip = 15; continue _fun0005;
case 11:
            var2 = function doIntegrityCheck(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.guild_id;
                    var10 = var1.channels;
                    var1 = undefined;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var1;
                    var3 = _closure1_slot19;
                    var3 = var3[var4];
                    var6 = null;
                    var6 = var6 != var3;
                    var11 = 'unknown';
                    if(!var6) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                    var11 = var3;
case 16:
                    var6 = _closure1_slot9;
                    var3 = var6.getMutableGuildChannelsForGuild;
                    var3 = var3.bind(var6)(var4);
                    _closure3_slot0 = var3;
                    var3 = global;
                    var6 = var3.Set;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var16 = var7;
                    var6 = new var16[var6](var15);
                    var9 = var6 instanceof Object ? var6 : var7;
                    _closure3_slot1 = var9;
                    var6 = var10.forEach;
                    var5 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var4 = _closure3_slot0;
                            var3 = var1.id;
                            var5 = var4[var3];
                            var7 = null;
                            if(!(var7 != var5)) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                            var9 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var8 = 17;
                            var6 = var3[var8];
                            var3 = undefined;
                            var10 = var9.bind(var3)(var6);
                            var9 = var10.hasFlag;
                            var6 = var1.flags;
                            var11 = var7 != var6;
                            var7 = 0;
                            if(!var11) { _fun0007_ip = 4; continue _fun0007 }
case 20:
                            var7 = var6;
case 4:
                            var6 = _closure1_slot13;
                            var6 = var6.OBFUSCATED;
                            var12 = var9.bind(var10)(var7, var6);
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var8 = var7.bind(var3)(var6);
                            var7 = var8.hasFlag;
                            var6 = var5.flags;
                            var5 = _closure1_slot13;
                            var5 = var5.OBFUSCATED;
                            var11 = var7.bind(var8)(var6, var5);
                            if(!(var12 !== var11)) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                            var6 = _closure1_slot14;
                            var5 = var6.warn;
                            var17 = var1.id;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var9 = var4.concat;
                            var18 = 'Integrity check failure: ';
                            var16 = ' serverObfuscated: ';
                            var14 = ' != clientObfuscated: ';
                            var15 = var12;
                            var13 = var11;
                            var4 = var18[var9](var17, var16, var15, var14, var13, var12);
                            var4 = var5.bind(var6)(var4);
                            var6 = _closure3_slot1;
                            var5 = var6.add;
                            var4 = var1.id;
                            var4 = var5.bind(var6)(var4);
case 21:
                            return var3;
case 18:
                            var5 = _closure1_slot14;
                            var4 = var5.warn;
                            var8 = var1.id;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var6 = 'Integrity check failure: ';
                            var3 = ' was missing.';
                            var3 = var7.bind(var6)(var8, var3);
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure3_slot1;
                            var2 = var3.add;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var6.bind(var10)(var5);
                    var6 = var3.Array;
                    var5 = var6.from;
                    var7 = var5.bind(var6)(var9);
                    var6 = var7.join;
                    var5 = ', ';
                    var8 = var6.bind(var7)(var5);
                    var6 = var9.size;
                    var5 = 0;
                    if(!(!(var6 > var5))) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var5 = _closure1_slot14;
                    var5 = var5.verbose;
                    _fun0006_ip = 25; continue _fun0006;
case 23:
                    var6 = _closure1_slot14;
                    var5 = var6.warn;
case 25:
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var6 = 'Integrity check for guild ';
                    var3 = ' completed. Discrepancies found: ';
                    var3 = var7.bind(var6)(var4, var3, var8);
                    var3 = var5.bind(var1)(var3);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 14;
                    var3 = var6[var3];
                    var7 = var5.bind(var1)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot12;
                    var5 = var3.GUILD_CHANNEL_INTEGRITY_CHECK_COMPLETED;
                    var3 = {};
                    var3['guild_id'] = var4;
                    var3['request_id'] = var11;
                    var10 = var10.length;
                    var3['num_channels_received'] = var10;
                    var9 = var9.size;
                    var3['num_discrepancies_found'] = var9;
                    var3['discrepancy_channel_ids'] = var8;
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = _closure1_slot27;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure1_slot20;
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                }
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
case 15:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function scheduleGuildResyncs() {
        var1 = undefined;
        var4 = _closure1_slot32;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function _scheduleGuildResyncs() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.getAll;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=55);
case 16:
                    return var2;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                    var5 = var2.forEach;
                    var4 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            var4 = _closure4_slot0;
                            var2 = null;
                            var2 = var2 != var4;
                            if(!var2) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                            var4 = var1.id;
                            var3 = _closure4_slot0;
                            var2 = var4 !== var3;
case 31:
                            if(var2) { _fun0009_ip = 9; continue _fun0009 }
case 33:
                            var4 = var1.id;
                            var3 = var1.requestId;
                            var2 = function scheduleGuildResync(arg1, arg2) {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    var4 = arg1;
                                    var _closure6_slot0 = var4;
                                    var5 = _closure1_slot19;
                                    var1 = arg2;
                                    var5[var4] = var1;
                                    var1 = _closure1_slot21;
                                    var5 = var1[var4];
                                    var1 = null;
                                    if(!(var1 != var5)) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                                    var1 = global;
                                    var6 = var1.clearTimeout;
                                    var1 = _closure1_slot21;
                                    var5 = var1[var4];
                                    var1 = undefined;
                                    var1 = var6.bind(var1)(var5);
case 34:
                                    var1 = global;
                                    var7 = var1.Math;
                                    var6 = var7.ceil;
                                    var8 = var1.Math;
                                    var5 = var8.random;
                                    var8 = var5.bind(var8)();
                                    var5 = _closure1_slot15;
                                    var5 = var8 * var5;
                                    var6 = var6.bind(var7)(var5);
                                    var3 = _closure1_slot21;
                                    var5 = var1.setTimeout;
                                    var1 = undefined;
                                    var2 = function() {
                                        var1 = _closure1_slot21;
                                        var3 = _closure6_slot0;
                                        var1 = delete var1[var3];
                                        var2 = function triggerGuildChannelResync(arg1) {
                                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                                var3 = arg1;
                                                var5 = _closure1_slot0;
                                                var4 = _closure1_slot2;
                                                var1 = 16;
                                                var4 = var4[var1];
                                                var1 = undefined;
                                                var5 = var5.bind(var1)(var4);
                                                var4 = var5.isChannelMetadataObfuscationEnabled;
                                                var4 = var4.bind(var5)();
                                                if(var4) { _fun0011_ip = 36; continue _fun0011 }
case 37:
                                                return var1;
case 36:
                                                var4 = _closure1_slot19;
                                                var4 = var4[var3];
                                                var5 = null;
                                                var6 = var5 != var4;
                                                var8 = 'unknown';
                                                if(!var6) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                                                var8 = var4;
case 38:
                                                var6 = _closure1_slot10;
                                                var4 = var6.getGuild;
                                                var4 = var4.bind(var6)(var3);
                                                if(!(var5 != var4)) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                                                var6 = new Array(0);
                                                var5 = _closure1_slot9;
                                                var4 = var5.getMutableGuildChannelsForGuild;
                                                var14 = var4.bind(var5)(var3);
                                                var12 = var14;
                                                var4 = 0;
                                                var5 = 17;
                                                var10 = 0;
                                                for(var7 in var12)
case 42:
                                                {
                                                    var10 = var4;
case 43:
                                                    var16 = var7;
                                                    var15 = var14[var16];
                                                    var18 = _closure1_slot0;
                                                    var17 = _closure1_slot2;
                                                    var17 = var17[var5];
                                                    var19 = var18.bind(var1)(var17);
                                                    var18 = var19.hasFlag;
                                                    var17 = var15.flags;
                                                    var15 = _closure1_slot13;
                                                    var15 = var15.OBFUSCATED;
                                                    var15 = var18.bind(var19)(var17, var15);
                                                    if(!var15) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                                                    var15 = var6.push;
                                                    var15 = var15.bind(var6)(var16);
case 44:
                                                    var4 = var4 + 1;
                                                    _fun0011_ip = 42; continue _fun0011;
                                                }
case 46:
                                                var5 = _closure1_slot1;
                                                var7 = _closure1_slot2;
                                                var4 = 14;
                                                var4 = var7[var4];
                                                var9 = var5.bind(var1)(var4);
                                                var7 = var9.track;
                                                var4 = _closure1_slot12;
                                                var5 = var4.GUILD_CHANNEL_RESYNC_EXECUTED;
                                                var4 = {};
                                                var4['guild_id'] = var3;
                                                var4['request_id'] = var8;
                                                var11 = var6.length;
                                                var4['num_obfuscated_channels'] = var11;
                                                var4['num_total_channels'] = var10;
                                                var4 = var7.bind(var9)(var5, var4);
                                                var5 = _closure1_slot11;
                                                var4 = var5.getSocket;
                                                var5 = var4.bind(var5)();
                                                var4 = var5.triggerGuildChannelResync;
                                                var4 = var4.bind(var5)(var3, var6);
                                                var4 = function scheduleResyncTimeout(arg1, arg2) {
                                                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                                        var4 = arg1;
                                                        var _closure9_slot0 = var4;
                                                        var1 = arg2;
                                                        var _closure9_slot1 = var1;
                                                        var3 = _closure1_slot22;
                                                        var5 = var3[var4];
                                                        var3 = null;
                                                        if(!(var3 != var5)) { _fun0012_ip = 47; continue _fun0012 }
case 48:
                                                        var3 = global;
                                                        var6 = var3.clearTimeout;
                                                        var3 = _closure1_slot22;
                                                        var5 = var3[var4];
                                                        var3 = undefined;
                                                        var3 = var6.bind(var3)(var5);
case 47:
                                                        var3 = _closure1_slot22;
                                                        var5 = global;
                                                        var6 = var5.setTimeout;
                                                        var5 = _closure1_slot17;
                                                        var1 = undefined;
                                                        var2 = function() {
                                                            var3 = _closure9_slot0;
                                                            var8 = _closure9_slot1;
                                                            var5 = _closure1_slot14;
                                                            var4 = var5.warn;
                                                            var1 = global;
                                                            var1 = var1.HermesInternal;
                                                            var7 = var1.concat;
                                                            var6 = 'Resync timeout for guild ';
                                                            var1 = ' with request ';
                                                            var1 = var7.bind(var6)(var3, var1, var8);
                                                            var1 = var4.bind(var5)(var1);
                                                            var5 = _closure1_slot1;
                                                            var4 = _closure1_slot2;
                                                            var1 = 14;
                                                            var4 = var4[var1];
                                                            var1 = undefined;
                                                            var7 = var5.bind(var1)(var4);
                                                            var6 = var7.track;
                                                            var4 = _closure1_slot12;
                                                            var5 = var4.GUILD_CHANNEL_RESYNC_FAILED;
                                                            var4 = {};
                                                            var4['guild_id'] = var3;
                                                            var4['request_id'] = var8;
                                                            var8 = 'timeout';
                                                            var4['failure_reason'] = var8;
                                                            var4 = var6.bind(var7)(var5, var4);
                                                            var2 = _closure1_slot26;
                                                            var2 = var2.bind(var1)(var3);
                                                            return var1;
                                                        };
                                                        var2 = var6.bind(var1)(var2, var5);
                                                        var3[var4] = var2;
                                                        return var1;
                                                    }
                                                };
                                                var4 = var4.bind(var1)(var3, var8);
                                                var4 = _closure1_slot33;
                                                var4 = var4.bind(var1)(var3);
                                                return var1;
case 40:
                                                var5 = _closure1_slot1;
                                                var6 = _closure1_slot2;
                                                var4 = 14;
                                                var4 = var6[var4];
                                                var7 = var5.bind(var1)(var4);
                                                var6 = var7.track;
                                                var4 = _closure1_slot12;
                                                var5 = var4.GUILD_CHANNEL_RESYNC_FAILED;
                                                var4 = {};
                                                var4['guild_id'] = var3;
                                                var4['request_id'] = var8;
                                                var8 = 'guild_not_found';
                                                var4['failure_reason'] = var8;
                                                var4 = var6.bind(var7)(var5, var4);
                                                var2 = _closure1_slot26;
                                                var2 = var2.bind(var1)(var3);
                                                return var1;
                                            }
                                        };
                                        var1 = undefined;
                                        var2 = var2.bind(var1)(var3);
                                        return var1;
                                    };
                                    var2 = var5.bind(var1)(var2, var6);
                                    var3[var4] = var2;
                                    return var1;
                                }
                            };
                            var1 = undefined;
                            var1 = var2.bind(var1)(var4, var3);
case 9:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var2)(var4);
                    return var3;
case 29:
                    return var2;
case 26:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function scheduleIntegrityCheck(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var3);
            var3 = var6.isChannelMetadataIntegrityCheckEnabled;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0013_ip = 49; continue _fun0013 }
case 17:
            var3 = _closure1_slot23;
            var3 = var3[var4];
            var6 = null;
            var3 = var6 != var3;
            var7 = _closure1_slot27;
            var7 = var7.bind(var1)(var4);
            var7 = _closure1_slot19;
            var9 = var7[var4];
            if(!(var9 == var6)) { _fun0013_ip = 50; continue _fun0013 }
case 51:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 18;
            var6 = var10[var6];
            var8 = var8.bind(var1)(var6);
            var6 = var8.v4;
            var6 = var6.bind(var8)();
            var7[var4] = var6;
            var9 = var6;
case 50:
            if(var3) { _fun0013_ip = 52; continue _fun0013 }
case 42:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 14;
            var3 = var7[var3];
            var8 = var6.bind(var1)(var3);
            var7 = var8.track;
            var3 = _closure1_slot12;
            var6 = var3.GUILD_CHANNEL_INTEGRITY_CHECK_REQUESTED;
            var3 = {};
            var3['guild_id'] = var4;
            var3['request_id'] = var9;
            var3 = var7.bind(var8)(var6, var3);
case 52:
            var6 = global;
            var8 = var6.Math;
            var7 = var8.ceil;
            var9 = var6.Math;
            var3 = var9.random;
            var9 = var3.bind(var9)();
            var3 = _closure1_slot16;
            var3 = var9 * var3;
            var7 = var7.bind(var8)(var3);
            var3 = _closure1_slot23;
            var6 = var6.setTimeout;
            var5 = _closure1_slot16;
            var5 = var5 + var7;
            var2 = function() {
                var1 = _closure1_slot23;
                var3 = _closure2_slot0;
                var1 = delete var1[var3];
                var2 = function triggerIntegrityCheck(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 16;
                        var4 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.isChannelMetadataIntegrityCheckEnabled;
                        var4 = var4.bind(var5)();
                        if(var4) { _fun0014_ip = 36; continue _fun0014 }
case 37:
                        return var1;
case 36:
                        var5 = _closure1_slot20;
                        var4 = var5.has;
                        var4 = var4.bind(var5)(var3);
                        if(var4) { _fun0014_ip = 53; continue _fun0014 }
case 9:
                        var4 = _closure1_slot19;
                        var4 = var4[var3];
                        var6 = null;
                        var5 = var6 != var4;
                        var8 = 'unknown';
                        if(!var5) { _fun0014_ip = 54; continue _fun0014 }
case 26:
                        var8 = var4;
case 54:
                        var5 = _closure1_slot10;
                        var4 = var5.getGuild;
                        var4 = var4.bind(var5)(var3);
                        if(!(var6 != var4)) { _fun0014_ip = 55; continue _fun0014 }
case 56:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 14;
                        var4 = var7[var4];
                        var9 = var5.bind(var1)(var4);
                        var7 = var9.track;
                        var4 = _closure1_slot12;
                        var5 = var4.GUILD_CHANNEL_INTEGRITY_CHECK_EXECUTED;
                        var4 = {};
                        var4['guild_id'] = var3;
                        var4['request_id'] = var8;
                        var4 = var7.bind(var9)(var5, var4);
                        var5 = _closure1_slot11;
                        var4 = var5.getSocket;
                        var5 = var4.bind(var5)();
                        var4 = var5.triggerGuildChannelResync;
                        var4 = var4.bind(var5)(var3, var6);
                        var4 = function scheduleIntegrityCheckTimeout(arg1, arg2) {
                            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                                var4 = arg1;
                                var _closure5_slot0 = var4;
                                var1 = arg2;
                                var _closure5_slot1 = var1;
                                var3 = _closure1_slot24;
                                var5 = var3[var4];
                                var3 = null;
                                if(!(var3 != var5)) { _fun0015_ip = 47; continue _fun0015 }
case 48:
                                var3 = global;
                                var6 = var3.clearTimeout;
                                var3 = _closure1_slot24;
                                var5 = var3[var4];
                                var3 = undefined;
                                var3 = var6.bind(var3)(var5);
case 47:
                                var3 = _closure1_slot24;
                                var5 = global;
                                var6 = var5.setTimeout;
                                var5 = _closure1_slot18;
                                var1 = undefined;
                                var2 = function() {
                                    var3 = _closure5_slot0;
                                    var8 = _closure5_slot1;
                                    var5 = _closure1_slot14;
                                    var4 = var5.warn;
                                    var1 = global;
                                    var1 = var1.HermesInternal;
                                    var7 = var1.concat;
                                    var6 = 'Integrity check timeout for guild ';
                                    var1 = ' with request ';
                                    var1 = var7.bind(var6)(var3, var1, var8);
                                    var1 = var4.bind(var5)(var1);
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var1 = 14;
                                    var4 = var4[var1];
                                    var1 = undefined;
                                    var7 = var5.bind(var1)(var4);
                                    var6 = var7.track;
                                    var4 = _closure1_slot12;
                                    var5 = var4.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED;
                                    var4 = {};
                                    var4['guild_id'] = var3;
                                    var4['request_id'] = var8;
                                    var8 = 'timeout';
                                    var4['failure_reason'] = var8;
                                    var4 = var6.bind(var7)(var5, var4);
                                    var2 = _closure1_slot27;
                                    var2 = var2.bind(var1)(var3);
                                    return var1;
                                };
                                var2 = var6.bind(var1)(var2, var5);
                                var3[var4] = var2;
                                return var1;
                            }
                        };
                        var4 = var4.bind(var1)(var3, var8);
                        return var1;
case 55:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 14;
                        var4 = var6[var4];
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.track;
                        var4 = _closure1_slot12;
                        var5 = var4.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED;
                        var4 = {};
                        var4['guild_id'] = var3;
                        var4['request_id'] = var8;
                        var8 = 'guild_not_found';
                        var4['failure_reason'] = var8;
                        var4 = var6.bind(var7)(var5, var4);
                        var2 = _closure1_slot27;
                        var2 = var2.bind(var1)(var3);
                        return var1;
case 53:
                        return var1;
                    }
                };
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = var6.bind(var1)(var2, var5);
            var3[var4] = var2;
case 49:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
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
    var10 = 2;
    var2 = var6[var10];
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
    var2 = var2.AnalyticEvents;
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ChannelFlags;
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var6[var2];
    var11 = var8.bind(var1)(var2);
    var2 = var11.prototype;
    var9 = Object.create(var2, {constructor: {value: var11}});
    var14 = 'ChannelResyncManager';
    var15 = var9;
    var2 = new var15[var11](var14, var13);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot14 = var2;
    var2 = 12;
    var9 = var6[var2];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.SECOND;
    var9 = var10 * var9;
    var _closure1_slot15 = var9;
    var9 = var6[var2];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.SECOND;
    var10 = 30;
    var9 = var10 * var9;
    var _closure1_slot16 = var9;
    var9 = var6[var2];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.SECOND;
    var9 = var10 * var9;
    var _closure1_slot17 = var9;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var2 = var2.Millis;
    var9 = var2.SECOND;
    var2 = 60;
    var2 = var2 * var9;
    var _closure1_slot18 = var2;
    var2 = 13;
    var2 = var6[var2];
    var8 = var8.bind(var1)(var2);
    var2 = function(arg1) {
        var3 = function ChannelResyncManager(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
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
                var1 = _closure1_slot25;
                var1 = var1.bind(var4)();
                if(var1) { _fun0016_ip = 26; continue _fun0016 }
case 57:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0016_ip = 58; continue _fun0016;
case 26:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 58:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot28;
                var2['GUILD_CREATE'] = var4;
                var4 = _closure1_slot29;
                var2['POST_CONNECTION_OPEN'] = var4;
                var3 = _closure1_slot30;
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
    var8 = {};
    var _closure1_slot19 = var8;
    var4 = var4.Set;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var15 = var8;
    var4 = new var15[var4](var14);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var _closure1_slot21 = var4;
    var4 = {};
    var _closure1_slot22 = var4;
    var4 = {};
    var _closure1_slot23 = var4;
    var4 = {};
    var _closure1_slot24 = var4;
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var15 = var4;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/ChannelResyncManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();