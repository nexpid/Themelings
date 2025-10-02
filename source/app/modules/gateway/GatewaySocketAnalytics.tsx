// app/modules/gateway/GatewaySocketAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function prettyPrintTrace_(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var15 = arg1;
            var14 = arg2;
            var1 = null;
            if(!(var1 != var15)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var15.length;
            var13 = 0;
            var2 = var13 < var1;
            var3 = '';
            var12 = 1;
            var11 = 1000;
            var10 = global;
            var9 = '\n';
            var8 = ': ';
            var6 = '|  ';
            var5 = undefined;
            var4 = 2;
            var1 = var3;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var21 = var15[var13];
            var2 = var13 + var12;
            var16 = var15[var2];
            var16 = var16.micros;
            var19 = var16 / var11;
            var16 = var10.HermesInternal;
            var16 = var16.concat;
            var23 = var9;
            var22 = var14;
            var20 = var8;
            var16 = var23[var16](var22, var21, var20, var19, var18);
            var16 = var3 + var16;
            var18 = _closure1_slot9;
            var2 = var15[var2];
            var17 = var2.calls;
            var2 = var14 + var6;
            var2 = var18.bind(var5)(var17, var2);
            var3 = var16 + var2;
            var13 = var13 + var4;
            var2 = var15.length;
            var1 = var3;
            if(var13 < var2) { _fun0001_ip = 5; continue _fun0001 }
case 4:
            return var1;
case 2:
            var1 = '';
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function eachTraceCall(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var1 = null;
            if(!(var1 != var8)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var8.length;
            var6 = 0;
            if(!(var1 > var6)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var1 = var8.length;
            var1 = var6 < var1;
            var5 = 1;
            var4 = undefined;
            var2 = 2;
            var6 = 0;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 9:
            var10 = var8[var6];
            var1 = var6 + var5;
            var1 = var8[var1];
            var9 = var1.micros;
            var9 = var7.bind(var4)(var10, var9);
            var9 = _closure1_slot10;
            var1 = var1.calls;
            var1 = var9.bind(var4)(var1, var7);
            var6 = var6 + var2;
            var1 = var8.length;
            if(var6 < var1) { _fun0002_ip = 9; continue _fun0002 }
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getReadyPayloadSizeAnalytics(arg1) {
        var1 = arg1;
        var3 = var1.guilds;
        var1 = 0;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var1;
        var4 = var3.forEach;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var2 = var1.unavailable;
                if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 7:
                var3 = var1.data_mode;
                var2 = 'partial';
                if(!(var2 !== var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var3 = var1.channels;
                _fun0003_ip = 13; continue _fun0003;
case 11:
                var1 = var1.partial_updates;
                var3 = var1.channels;
case 13:
                var4 = null;
                var1 = var4 != var3;
                if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var2 = var3.forEach;
                var1 = var4 != var2;
case 14:
                if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 16:
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure2_slot1;
                        var1 = var1 + 1;
                        _closure2_slot1 = var1;
                        var1 = arg1;
                        var3 = var1.type;
                        var1 = _closure1_slot8;
                        var1 = var1.GUILD_CATEGORY;
                        if(!(var3 === var1)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var1 = _closure2_slot0;
                        var1 = var1 + 1;
                        _closure2_slot0 = var1;
case 17:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 10:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var4.bind(var3)(var1);
        var1 = {};
        var3 = var3.length;
        var1['num_guilds'] = var3;
        var3 = _closure2_slot1;
        var1['num_guild_channels'] = var3;
        var2 = _closure2_slot0;
        var1['num_guild_category_channels'] = var2;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = ['guilds', 'merged_presences', 'merged_members', 'read_state', 'private_channels', 'user_guild_settings', 'user_settings', 'user_settings_proto', 'experiments', 'guild_experiments', 'relationships', 'users'];
    var _closure1_slot2 = var1;
    var1 = ['features'];
    var _closure1_slot3 = var1;
    var1 = ['threads', 'guild_scheduled_events'];
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot7 = var7;
    var4 = var4.ChannelTypes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/GatewaySocketAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function reportDevtoolsEvent() {
        var1 = undefined;
        return var1;
    };
    var3['reportDevtoolsEvent'] = var4;
    var4 = function logReadyPayloadReceived(arg1, arg2, arg3, arg4, arg5) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var8 = arg2;
            var7 = arg3;
            var9 = arg4;
            var2 = function getReadyPayloadTraceAnalytics(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var6 = var4._trace;
                    var5 = undefined;
                    var3 = undefined;
                    var4 = {};
                    var1 = var4;
                    var _closure3_slot0 = var4;
case 19: // try_start_0
                    var4 = global;
                    var8 = var4.JSON;
                    var7 = var8.parse;
                    var9 = var7.bind(var8)(var6);
                    var3 = var9;
                    var8 = 0;
                    var10 = var9[var8];
                    var9 = null;
                    var9 = var9 != var10;
                    var7 = var9;
                    if(!var9) { _fun0006_ip = 20; continue _fun0006 }
case 14:
                    var9 = var3;
                    var10 = var9[var8];
                    var9 = '';
                    var7 = var9 !== var10;
case 20:
                    var6 = var7;
                    if(!var7) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    var7 = var3;
                    var9 = var7[var8];
                    var8 = var9.startsWith;
                    var7 = 'gateway-';
                    var6 = var8.bind(var9)(var7);
case 21:
                    if(!var6) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var6 = var1;
                    var8 = var4.Math;
                    var7 = var8.floor;
                    var9 = var3;
                    var4 = 1;
                    var4 = var9[var4];
                    var9 = var4.micros;
                    var4 = 1000;
                    var4 = var9 / var4;
                    var4 = var7.bind(var8)(var4);
                    var6['identify_total_server_duration_ms'] = var4;
case 23:
                    var4 = _closure1_slot10;
                    var2 = function(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = arg1;
                            var5 = arg2;
                            var1 = 'start_session';
                            if(!(var1 !== var2)) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                            var1 = 'guilds_connect';
                            if(!(var1 === var2)) { _fun0007_ip = 24; continue _fun0007 }
case 12:
                            var2 = _closure3_slot0;
                            var1 = global;
                            var4 = var1.Math;
                            var3 = var4.floor;
                            var1 = 1000;
                            var1 = var5 / var1;
                            var1 = var3.bind(var4)(var1);
                            var2['identify_guilds_duration_ms'] = var1;
                            _fun0007_ip = 24; continue _fun0007;
case 25:
                            var2 = _closure3_slot0;
                            var1 = global;
                            var4 = var1.Math;
                            var3 = var4.floor;
                            var1 = 1000;
                            var1 = var5 / var1;
                            var1 = var3.bind(var4)(var1);
                            var2['identify_api_duration_ms'] = var1;
case 24:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var3, var2);
case 27: // try_end0
                    _fun0006_ip = 28; continue _fun0006;
case 29: // catch_target0
                    CatchBlockStart(arg_register=1);
case 28:
                    return var1;
                }
            };
            var1 = undefined;
            var5 = var2.bind(var1)(var8);
            var4 = null;
            if(!(var4 != var9)) { _fun0005_ip = 21; continue _fun0005 }
case 11:
            var6 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 3;
            var2 = var10[var2];
            var11 = var6.bind(var1)(var2);
            var10 = var11.addDetail;
            var2 = global;
            var12 = var2.Math;
            var6 = var12.round;
            var13 = var9.uncompressed_byte_size;
            var2 = 1024;
            var2 = var13 / var2;
            var6 = var6.bind(var12)(var2);
            var2 = 'payload_size(kb)';
            var2 = var10.bind(var11)(var2, var6);
case 21:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 3;
            var6 = var11[var6];
            var12 = var10.bind(var1)(var6);
            var11 = var12.addDetail;
            var6 = var5.identify_total_server_duration_ms;
            var13 = var4 != var6;
            var10 = 0;
            if(!var13) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var10 = var6;
case 30:
            var6 = 'server_time(ms)';
            var6 = var11.bind(var12)(var6, var10);
            var6 = {};
            var16 = var6;
            var15 = var9;
            var9 = copyDataProperties(var16, var15);
            var16 = var6;
            var15 = var5;
            var5 = copyDataProperties(var16, var15);
            var5 = _closure1_slot11;
            var15 = var5.bind(var1)(var8);
            var16 = var6;
            var5 = copyDataProperties(var16, var15);
            var15 = arg5;
            var16 = var6;
            var5 = copyDataProperties(var16, var15);
            var5 = var3.identifyStartTime;
            var8 = var7 - var5;
            var5 = 'duration_ms_since_identify_start';
            var6[var5] = var8;
            var5 = var3.connectionStartTime;
            var8 = var7 - var5;
            var5 = 'duration_ms_since_connection_start';
            var6[var5] = var8;
            var5 = global;
            var8 = var5.Date;
            var5 = var8.now;
            var5 = var5.bind(var8)();
            var7 = var5 - var7;
            var5 = 'duration_ms_since_emit_start';
            var6[var5] = var7;
            var7 = var3.hasConnectedOnce;
            var5 = 'is_reconnect';
            var6[var5] = var7;
            var7 = var3.isFastConnect;
            var5 = 'is_fast_connect';
            var6[var5] = var7;
            var7 = var3.didForceClearGuildHashes;
            var5 = 'did_force_clear_guild_hashes';
            var6[var5] = var7;
            var7 = var3.identifyUncompressedByteSize;
            var5 = 'identify_uncompressed_byte_size';
            var6[var5] = var7;
            var7 = var3.identifyCompressedByteSize;
            var5 = 'identify_compressed_byte_size';
            var6[var5] = var7;
            var5 = var3.analytics;
            var5 = var5.hadCacheAtStartup;
            var7 = var4 != var5;
            if(!var7) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var7 = var5;
case 32:
            var5 = 'had_cache_at_startup';
            var6[var5] = var7;
            var3 = var3.analytics;
            var3 = var3.usedCacheAtStartup;
            var4 = var4 != var3;
            if(!var4) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var4 = var3;
case 34:
            var3 = 'used_cache_at_startup';
            var6[var3] = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var7 = var4.bind(var1)(var3);
            var3 = var7.attachReadyPayloadProperties;
            var3 = var3.bind(var7)(var6);
            var3 = 5;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.READY_PAYLOAD_RECEIVED;
            var2 = {};
            var7 = true;
            var2['logEventProperties'] = var7;
            var2 = var4.bind(var5)(var3, var6, var2);
            return var1;
        }
    };
    var3['logReadyPayloadReceived'] = var4;
    var4 = function getConnectionPath(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var8 = undefined;
            var3 = undefined;
            var1 = undefined;
case 36: // try_start_0
            var4 = var2;
            var5 = var4._trace;
            var3 = var5;
            var4 = null;
            var5 = var4 == var5;
            var9 = undefined;
            if(var5) { _fun0008_ip = 37; continue _fun0008 }
case 38:
            var5 = var3;
            var3 = 0;
            var9 = var5[var3];
case 37:
            var5 = var4 == var9;
            var3 = null;
            if(var5) { _fun0008_ip = 10; continue _fun0008 }
case 17:
            var7 = _closure1_slot9;
            var5 = global;
            var6 = var5.JSON;
            var5 = var6.parse;
            var6 = var5.bind(var6)(var9);
            var5 = '';
            var3 = var7.bind(var8)(var6, var5);
case 10:
            var1 = var3;
            if(!(var4 == var3)) { _fun0008_ip = 39; continue _fun0008 }
case 40: // try_end0
            _fun0008_ip = 41; continue _fun0008;
case 39:
            return var1;
case 42: // catch_target0
            CatchBlockStart(arg_register=0);
case 41:
            var1 = var2;
            var3 = var1._trace;
            var1 = null;
            var3 = var1 != var3;
            var1 = '???';
            if(!var3) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var4 = var2._trace;
            var3 = var4.join;
            var2 = ' -> ';
            var1 = var3.bind(var4)(var2);
case 43:
            return var1;
        }
    };
    var3['getConnectionPath'] = var4;
    var4 = function getReadyPayloadByteSizeAnalytics(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var7 = arg1;
            var2 = global;
            var4 = var2.Math;
            var3 = var4.random;
            var4 = var3.bind(var4)();
            var3 = 0.01;
            if(!(!(var4 > var3))) { _fun0009_ip = 45; continue _fun0009 }
case 46:
            var4 = var2.Date;
            var3 = var4.now;
            var3 = var3.bind(var4)();
            var14 = var7.guilds;
            var15 = var7.merged_presences;
            var16 = var7.merged_members;
            var25 = var7.read_state;
            var24 = var7.private_channels;
            var20 = var7.user_guild_settings;
            var26 = var7.user_settings;
            var23 = var7.user_settings_proto;
            var21 = var7.experiments;
            var22 = var7.guild_experiments;
            var19 = var7.relationships;
            var27 = var7.users;
            var6 = _closure1_slot5;
            var5 = _closure1_slot2;
            var4 = undefined;
            var5 = var6.bind(var4)(var7, var5);
            var17 = new Array(0);
            var _closure2_slot0 = var17;
            var12 = new Array(0);
            var _closure2_slot1 = var12;
            var11 = new Array(0);
            var _closure2_slot2 = var11;
            var10 = new Array(0);
            var _closure2_slot3 = var10;
            var9 = new Array(0);
            var _closure2_slot4 = var9;
            var7 = new Array(0);
            var _closure2_slot5 = var7;
            var8 = new Array(0);
            var _closure2_slot6 = var8;
            var6 = new Array(0);
            var _closure2_slot7 = var6;
            var13 = var14.forEach;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var9 = arg1;
                    var1 = var9.unavailable;
                    if(var1) { _fun0010_ip = 47; continue _fun0010 }
case 3:
                    var5 = var9.properties;
                    var1 = null;
                    if(!(var1 == var5)) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                    var5 = {};
case 48:
                    var7 = var5.features;
                    var3 = _closure1_slot5;
                    var4 = _closure1_slot3;
                    var2 = undefined;
                    var4 = var3.bind(var2)(var5, var4);
                    var8 = var9.threads;
                    var6 = var9.guild_scheduled_events;
                    var1 = _closure1_slot4;
                    var3 = var3.bind(var2)(var9, var1);
                    var11 = _closure2_slot0;
                    var5 = var11.push;
                    var2 = var9.data_mode;
                    var10 = 'partial';
                    if(!(var10 !== var2)) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                    var2 = var9.channels;
                    _fun0010_ip = 52; continue _fun0010;
case 50:
                    var12 = var9.partial_updates;
                    var2 = var12.channels;
case 52:
                    var2 = var5.bind(var11)(var2);
                    var11 = _closure2_slot1;
                    var5 = var11.push;
                    var2 = var9.data_mode;
                    if(!(var10 !== var2)) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                    var2 = var9.roles;
                    _fun0010_ip = 55; continue _fun0010;
case 53:
                    var12 = var9.partial_updates;
                    var2 = var12.roles;
case 55:
                    var2 = var5.bind(var11)(var2);
                    var11 = _closure2_slot2;
                    var5 = var11.push;
                    var2 = var9.data_mode;
                    if(!(var10 !== var2)) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                    var2 = var9.emojis;
                    _fun0010_ip = 58; continue _fun0010;
case 56:
                    var12 = var9.partial_updates;
                    var2 = var12.emojis;
case 58:
                    var2 = var5.bind(var11)(var2);
                    var5 = _closure2_slot3;
                    var2 = var5.push;
                    var2 = var2.bind(var5)(var8);
                    var8 = _closure2_slot4;
                    var5 = var8.push;
                    var2 = var9.data_mode;
                    if(!(var10 !== var2)) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                    var2 = var9.stickers;
                    _fun0010_ip = 61; continue _fun0010;
case 59:
                    var9 = var9.partial_updates;
                    var2 = var9.stickers;
case 61:
                    var2 = var5.bind(var8)(var2);
                    var5 = _closure2_slot5;
                    var2 = var5.push;
                    var2 = var2.bind(var5)(var7);
                    var5 = _closure2_slot6;
                    var2 = var5.push;
                    var2 = var2.bind(var5)(var6);
                    var2 = _closure2_slot7;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3, var4);
case 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var13.bind(var14)(var1);
            var1 = {};
            var28 = var2.JSON;
            var18 = var28.stringify;
            var14 = null;
            var29 = var14 == var15;
            var13 = undefined;
            if(var29) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var13 = var15.friends;
case 62:
            if(!(var14 == var13)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var13 = new Array(0);
case 64:
            var13 = var18.bind(var28)(var13);
            var13 = var13.length;
            var1['presences_size'] = var13;
            var18 = var2.JSON;
            var13 = var18.stringify;
            var13 = var13.bind(var18)(var27);
            var13 = var13.length;
            var1['users_size'] = var13;
            var18 = var2.JSON;
            var13 = var18.stringify;
            var13 = var13.bind(var18)(var25);
            var13 = var13.length;
            var1['read_states_size'] = var13;
            var18 = var2.JSON;
            var13 = var18.stringify;
            var13 = var13.bind(var18)(var24);
            var13 = var13.length;
            var1['private_channels_size'] = var13;
            var25 = var2.JSON;
            var24 = var25.stringify;
            var27 = var14 != var26;
            var13 = '';
            var18 = var13;
            if(!var27) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var18 = var26;
case 66:
            var18 = var24.bind(var25)(var18);
            var18 = var18.length;
            var24 = var14 != var23;
            if(!var24) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var13 = var23;
case 68:
            var13 = var13.length;
            var13 = var18 + var13;
            var1['user_settings_size'] = var13;
            var18 = var2.JSON;
            var13 = var18.stringify;
            if(!(var14 == var21)) { _fun0009_ip = 70; continue _fun0009 }
case 71:
            var21 = new Array(0);
case 70:
            var13 = var13.bind(var18)(var21);
            var18 = var13.length;
            var21 = var2.JSON;
            var13 = var21.stringify;
            if(!(var14 == var22)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var22 = new Array(0);
case 72:
            var13 = var13.bind(var21)(var22);
            var13 = var13.length;
            var13 = var18 + var13;
            var1['experiments_size'] = var13;
            var18 = var2.JSON;
            var13 = var18.stringify;
            var13 = var13.bind(var18)(var20);
            var13 = var13.length;
            var1['user_guild_settings_size'] = var13;
            var18 = var2.JSON;
            var13 = var18.stringify;
            var13 = var13.bind(var18)(var19);
            var13 = var13.length;
            var1['relationships_size'] = var13;
            var18 = var2.JSON;
            var13 = var18.stringify;
            if(!(var14 == var5)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
            var5 = {};
case 74:
            var5 = var13.bind(var18)(var5);
            var5 = var5.length;
            var1['remaining_data_size'] = var5;
            var13 = var2.JSON;
            var5 = var13.stringify;
            var5 = var5.bind(var13)(var17);
            var5 = var5.length;
            var1['guild_channels_size'] = var5;
            var13 = var2.JSON;
            var5 = var13.stringify;
            if(!(var14 == var16)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
            var16 = new Array(0);
case 76:
            var5 = var5.bind(var13)(var16);
            var5 = var5.length;
            var1['guild_members_size'] = var5;
            var13 = var2.JSON;
            var5 = var13.stringify;
            var16 = var14 == var15;
            var4 = undefined;
            if(var16) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var4 = var15.guilds;
case 78:
            if(!(var14 == var4)) { _fun0009_ip = 80; continue _fun0009 }
case 81:
            var4 = new Array(0);
case 80:
            var4 = var5.bind(var13)(var4);
            var4 = var4.length;
            var1['guild_presences_size'] = var4;
            var5 = var2.JSON;
            var4 = var5.stringify;
            var4 = var4.bind(var5)(var12);
            var4 = var4.length;
            var1['guild_roles_size'] = var4;
            var5 = var2.JSON;
            var4 = var5.stringify;
            var4 = var4.bind(var5)(var11);
            var4 = var4.length;
            var1['guild_emojis_size'] = var4;
            var5 = var2.JSON;
            var4 = var5.stringify;
            var4 = var4.bind(var5)(var10);
            var4 = var4.length;
            var1['guild_threads_size'] = var4;
            var5 = var2.JSON;
            var4 = var5.stringify;
            var4 = var4.bind(var5)(var9);
            var4 = var4.length;
            var1['guild_stickers_size'] = var4;
            var5 = var2.JSON;
            var4 = var5.stringify;
            var4 = var4.bind(var5)(var8);
            var4 = var4.length;
            var1['guild_events_size'] = var4;
            var5 = var2.JSON;
            var4 = var5.stringify;
            var4 = var4.bind(var5)(var7);
            var4 = var4.length;
            var1['guild_features_size'] = var4;
            var5 = var2.JSON;
            var4 = var5.stringify;
            var4 = var4.bind(var5)(var6);
            var4 = var4.length;
            var1['guild_remaining_data_size'] = var4;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var2 = var2 - var3;
            var1['size_metrics_duration_ms'] = var2;
            return var1;
case 45:
            var1 = undefined;
            return var1;
        }
    };
    var3['getReadyPayloadByteSizeAnalytics'] = var4;
    var4 = function createResumeAnalytics(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var1 = {'connectTime': null, 'numEvents': 0, 'largestWaitTime': 0, 'dispatchTime': 0, 'totalWaitTime': 0, 'initialWaitTime': 0};
            var2 = null;
            var4 = var2 != var3;
            var2 = 0;
            if(!var4) { _fun0011_ip = 82; continue _fun0011 }
case 83:
            var2 = var3;
case 82:
            var1['connectTime'] = var2;
            var2 = global;
            var4 = var2.performance;
            var3 = var4.now;
            var3 = var3.bind(var4)();
            var1['startTime'] = var3;
            var3 = var2.performance;
            var2 = var3.now;
            var2 = var2.bind(var3)();
            var1['lastUpdateTime'] = var2;
            return var1;
        }
    };
    var3['createResumeAnalytics'] = var4;
    var2 = function logResumeAnalytics(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot6;
            var3 = var4.getCurrentUser;
            var5 = var3.bind(var4)();
            var3 = null;
            var3 = var3 == var5;
            if(var3) { _fun0012_ip = 37; continue _fun0012 }
case 83:
            var4 = var5.isStaff;
            var4 = var4.bind(var5)();
            var3 = !var4;
case 37:
            if(!var3) { _fun0012_ip = 84; continue _fun0012 }
case 85:
            var4 = global;
            var5 = var4.Math;
            var4 = var5.random;
            var5 = var4.bind(var5)();
            var4 = 0.5;
            var3 = var5 < var4;
case 84:
            if(var3) { _fun0012_ip = 86; continue _fun0012 }
case 87:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.CONNECTION_RESUMED;
            var2 = {};
            var6 = var1.connectTime;
            var2['connect_time_ms'] = var6;
            var6 = global;
            var9 = var6.Math;
            var8 = var9.floor;
            var10 = var6.performance;
            var7 = var10.now;
            var10 = var7.bind(var10)();
            var7 = var1.startTime;
            var7 = var10 - var7;
            var7 = var8.bind(var9)(var7);
            var2['resume_time_ms'] = var7;
            var7 = var1.numEvents;
            var2['num_events'] = var7;
            var9 = var6.Math;
            var8 = var9.floor;
            var7 = var1.largestWaitTime;
            var7 = var8.bind(var9)(var7);
            var2['largest_wait_time_ms'] = var7;
            var9 = var6.Math;
            var8 = var9.floor;
            var7 = var1.initialWaitTime;
            var7 = var8.bind(var9)(var7);
            var2['initial_wait_time_ms'] = var7;
            var9 = var6.Math;
            var8 = var9.floor;
            var7 = var1.totalWaitTime;
            var7 = var8.bind(var9)(var7);
            var2['total_wait_time_ms'] = var7;
            var7 = var6.Math;
            var6 = var7.floor;
            var1 = var1.dispatchTime;
            var1 = var6.bind(var7)(var1);
            var2['total_dispatch_time_ms'] = var1;
            var1 = {};
            var6 = true;
            var1['logEventProperties'] = var6;
            var1 = var4.bind(var5)(var3, var2, var1);
case 86:
            var1 = undefined;
            return var1;
        }
    };
    var3['logResumeAnalytics'] = var2;
    return var1;
})();