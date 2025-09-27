// app/modules/cache/CacheStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var10 = function handleClearCaches(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot18;
            var2 = var5.log;
            var1 = 'Clearing cache store';
            var1 = var2.bind(var5)(var1);
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            _closure1_slot21 = var1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var7 = var6[var2];
            var1 = undefined;
            var7 = var5.bind(var1)(var7);
            var9 = var7.Storage;
            var8 = var9.remove;
            var7 = _closure1_slot15;
            var7 = var8.bind(var9)(var7);
            var7 = var6[var2];
            var7 = var5.bind(var1)(var7);
            var9 = var7.Storage;
            var8 = var9.remove;
            var7 = _closure1_slot16;
            var7 = var8.bind(var9)(var7);
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var6 = var2.Storage;
            var5 = var6.remove;
            var2 = _closure1_slot17;
            var2 = var5.bind(var6)(var2);
            var2 = 'no-cache';
            _closure1_slot20 = var2;
            var5 = var4.type;
            var2 = 'CLEAR_CACHES';
            var2 = var2 === var5;
            if(!var2) { _fun0002_ip = 183; continue _fun0002 }
 177:
            var2 = var4.preventWritingCachesAgainThisSession;
 183:
            if(!var2) { _fun0002_ip = 192; continue _fun0002 }
 186:
            var2 = true;
            _closure1_slot19 = var2;
 192:
            return var1;
        }
    };
    var1 = function _loadChannelHistory() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var10 = arg1;
                    var7 = arg2;
                    var6 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 398; continue _fun0003 }
 19:
                    var3 = global;
                    var4 = var3.performance;
                    var2 = var4.now;
                    var5 = var2.bind(var4)();
                    var2 = null;
                    if(!(var2 != var10)) { _fun0003_ip = 49; continue _fun0003 }
 42:
                    if(!(var2 == var6)) { _fun0003_ip = 181; continue _fun0003 }
 49:
                    var8 = _closure1_slot18;
                    var4 = var8.verbose;
                    var2 = var3.HermesInternal;
                    var12 = var2.concat;
                    var21 = 'skipped loaded messages (channel: ';
                    var19 = ', database: ';
                    var17 = ').';
                    var20 = var6;
                    var18 = var10;
                    var2 = var21[var12](var20, var19, var18, var17, var16);
                    var2 = var4.bind(var8)(var2);
                    var4 = var3.performance;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var4 = var2 - var5;
                    var2 = new Array(2);
                    var2[0] = var4;
                    var4 = {'guildId': null, 'channelId': null};
                    var8 = new Array(0);
                    var4['users'] = var8;
                    var8 = new Array(0);
                    var4['members'] = var8;
                    var8 = new Array(0);
                    var4['messages'] = var8;
                    var2[1] = var4;
                    return var2;
 181:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 15;
                    var8 = var8[var2];
                    var2 = undefined;
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.startupLoad;
                    var17 = _closure1_slot14;
                    var21 = var9;
                    var20 = var10;
                    var19 = var7;
                    var18 = var6;
                    var2 = var21[var8](var20, var19, var18, var17, var16);
                    SaveGenerator(address=238);
 236:
                    return var2;
 238:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0003_ip = 395; continue _fun0003 }
 247:
                    var9 = _closure1_slot18;
                    var8 = var9.verbose;
                    var4 = var2.messages;
                    var20 = var4.length;
                    var4 = var3.HermesInternal;
                    var13 = var4.concat;
                    var21 = 'loaded ';
                    var19 = ' messages (guild: ';
                    var17 = ', channel: ';
                    var15 = ').';
                    var18 = var7;
                    var16 = var6;
                    var4 = var21[var13](var20, var19, var18, var17, var16, var15, var14);
                    var4 = var8.bind(var9)(var4);
                    var4 = {};
                    var4['guildId'] = var7;
                    var4['channelId'] = var6;
                    var6 = var2.users;
                    var4['users'] = var6;
                    var6 = var2.members;
                    var4['members'] = var6;
                    var6 = var2.messages;
                    var4['messages'] = var6;
                    var6 = var3.performance;
                    var3 = var6.now;
                    var3 = var3.bind(var6)();
                    var5 = var3 - var5;
                    var3 = new Array(2);
                    var3[0] = var5;
                    var3[1] = var4;
                    return var3;
 395:
                    return var2;
 398:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function _loadEarlyCache() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var17 = arg1;
                    var20 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 1473; continue _fun0004 }
 18:
                    var _closure4_slot0 = var17;
                    var _closure4_slot1 = var20;
                    var16 = undefined;
                    var _closure4_slot2 = var16;
                    var _closure4_slot3 = var16;
                    var _closure4_slot4 = var16;
                    var _closure4_slot5 = var16;
                    var _closure4_slot6 = var16;
                    var _closure4_slot7 = var16;
                    var _closure4_slot8 = var16;
                    var _closure4_slot9 = var16;
                    var _closure4_slot10 = var16;
                    var _closure4_slot11 = var16;
                    var _closure4_slot12 = var16;
                    var5 = _closure1_slot18;
                    var4 = var5.verbose;
                    var2 = 'loading early cache';
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure1_slot10;
                    var2 = var4.getSocket;
                    var4 = var2.bind(var4)();
                    _closure4_slot2 = var4;
                    var2 = var4.connect;
                    var2 = var2.bind(var4)();
                    var4 = _closure1_slot13;
                    var2 = var4.getGuildId;
                    var2 = var2.bind(var4)();
                    var8 = null;
                    var4 = var8 != var2;
                    var44 = null;
                    if(!var4) { _fun0004_ip = 152; continue _fun0004 }
 149:
                    var44 = var2;
 152:
                    _closure4_slot3 = var44;
                    var4 = _closure1_slot12;
                    var2 = var4.getChannelId;
                    var2 = var2.bind(var4)();
                    var4 = var8 != var2;
                    var43 = null;
                    if(!var4) { _fun0004_ip = 182; continue _fun0004 }
 179:
                    var43 = var2;
 182:
                    _closure4_slot4 = var43;
                    var5 = global;
                    var4 = var5.performance;
                    var2 = var4.now;
                    var10 = var2.bind(var4)();
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 16;
                    var7 = var6[var2];
                    var7 = var4.bind(var16)(var7);
                    var12 = var7.loadCachedMessages;
                    var11 = var12.measureAsyncWithoutNesting;
                    var7 = function() {
                        var5 = _closure4_slot0;
                        var4 = _closure4_slot3;
                        var3 = _closure4_slot4;
                        var2 = function loadChannelHistory() {
                            var1 = undefined;
                            var4 = _closure1_slot27;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)(var5, var4, var3);
                        return var1;
                    };
                    var18 = var11.bind(var12)(var7);
                    var7 = var6[var2];
                    var7 = var4.bind(var16)(var7);
                    var12 = var7.fetchGuildCache;
                    var11 = var12.measureAsync;
                    var7 = function() {
                        var4 = _closure4_slot0;
                        var3 = _closure4_slot1;
                        var2 = function loadInitialGuilds() {
                            var1 = undefined;
                            var4 = _closure1_slot29;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)(var4, var3);
                        return var1;
                    };
                    var15 = var11.bind(var12)(var7);
                    var2 = var6[var2];
                    var2 = var4.bind(var16)(var2);
                    var6 = var2.fetchGuildCache;
                    var4 = var6.measureAsync;
                    var2 = function() {
                        var4 = _closure4_slot0;
                        var3 = _closure4_slot1;
                        var2 = function loadInitialGuildChannels() {
                            var1 = undefined;
                            var4 = _closure1_slot30;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)(var4, var3);
                        return var1;
                    };
                    var14 = var4.bind(var6)(var2);
                    if(!(var8 == var17)) { _fun0004_ip = 334; continue _fun0004 }
 311:
                    var6 = var5.Promise;
                    var4 = var6.resolve;
                    var2 = new Array(0);
                    var13 = var4.bind(var6)(var2);
                    _fun0004_ip = 382; continue _fun0004;
 334:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 17;
                    var2 = var6[var2];
                    var11 = var4.bind(var16)(var2);
                    var7 = var11.timeAsync;
                    var6 = '💾';
                    var4 = 'cache: private_channels';
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getAsync;
                        var2 = _closure4_slot0;
                        var1 = null;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var13 = var7.bind(var11)(var6, var4, var2);
 382:
                    if(!(var8 != var17)) { _fun0004_ip = 436; continue _fun0004 }
 386:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 17;
                    var2 = var6[var2];
                    var11 = var4.bind(var16)(var2);
                    var7 = var11.timeAsync;
                    var6 = '💾';
                    var4 = 'cache: user_settings';
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getAll;
                        var1 = _closure4_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var12 = var7.bind(var11)(var6, var4, var2);
                    _fun0004_ip = 455; continue _fun0004;
 436:
                    var6 = var5.Promise;
                    var4 = var6.resolve;
                    var2 = {};
                    var12 = var4.bind(var6)(var2);
 455:
                    if(!(var8 != var17)) { _fun0004_ip = 509; continue _fun0004 }
 459:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 17;
                    var2 = var6[var2];
                    var11 = var4.bind(var16)(var2);
                    var7 = var11.timeAsync;
                    var6 = '💾';
                    var4 = 'cache: read_states';
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getAll;
                        var1 = _closure4_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var11 = var7.bind(var11)(var6, var4, var2);
                    _fun0004_ip = 530; continue _fun0004;
 509:
                    var6 = var5.Promise;
                    var4 = var6.resolve;
                    var2 = new Array(0);
                    var11 = var4.bind(var6)(var2);
 530:
                    if(!(var8 != var17)) { _fun0004_ip = 584; continue _fun0004 }
 534:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 17;
                    var2 = var6[var2];
                    var19 = var4.bind(var16)(var2);
                    var7 = var19.timeAsync;
                    var6 = '💾';
                    var4 = 'cache: user_guild_settings';
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 21;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getAll;
                        var1 = _closure4_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var7.bind(var19)(var6, var4, var2);
                    _fun0004_ip = 605; continue _fun0004;
 584:
                    var6 = var5.Promise;
                    var4 = var6.resolve;
                    var2 = new Array(0);
                    var7 = var4.bind(var6)(var2);
 605:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 22;
                    var19 = var6[var2];
                    var22 = var4.bind(var16)(var19);
                    var21 = 'AllCacheStores';
                    var19 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 23;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var19 = var22.bind(var16)(var21, var19);
                    var2 = var6[var2];
                    var6 = var4.bind(var16)(var2);
                    var4 = 'MobileAppDatabaseManager';
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var6.bind(var16)(var4, var2);
                    var6 = var5.Promise;
                    var4 = var6.all;
                    var2 = new Array(7);
                    var2[0] = var18;
                    var2[1] = var15;
                    var2[2] = var14;
                    var2[3] = var13;
                    var2[4] = var12;
                    var2[5] = var11;
                    var2[6] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=721);
 719:
                    return var2;
 721:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 1470; continue _fun0004 }
 730:
                    var6 = _closure1_slot3;
                    var4 = 7;
                    var11 = var6.bind(var16)(var2, var4);
                    var12 = _closure1_slot3;
                    var7 = 0;
                    var6 = var11[var7];
                    var4 = 2;
                    var12 = var12.bind(var16)(var6, var4);
                    var76 = var12[var7];
                    var6 = 1;
                    var14 = var12[var6];
                    _closure4_slot5 = var14;
                    var6 = var11[var6];
                    _closure4_slot6 = var6;
                    var13 = var11[var4];
                    _closure4_slot7 = var13;
                    var4 = 3;
                    var4 = var11[var4];
                    _closure4_slot8 = var4;
                    var6 = 4;
                    var15 = var11[var6];
                    _closure4_slot9 = var15;
                    var6 = 5;
                    var12 = var11[var6];
                    _closure4_slot10 = var12;
                    var6 = 6;
                    var11 = var11[var6];
                    _closure4_slot11 = var11;
                    var18 = var5.performance;
                    var6 = var18.now;
                    var6 = var6.bind(var18)();
                    var78 = var6 - var10;
                    var18 = _closure1_slot18;
                    var10 = var18.verbose;
                    var6 = var5.HermesInternal;
                    var22 = var6.concat;
                    var79 = 'cache loaded in ';
                    var77 = 'ms (channel_history ';
                    var75 = 'ms)';
                    var6 = var79[var22](var78, var77, var76, var75, var74);
                    var6 = var10.bind(var18)(var6);
                    if(!(var8 == var14)) { _fun0004_ip = 981; continue _fun0004 }
 908:
                    var10 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var6 = 27;
                    var6 = var18[var6];
                    var10 = var10.bind(var16)(var6);
                    var6 = 'database:history_cache_null';
                    var6 = var10.bind(var16)(var6);
                    var18 = _closure1_slot18;
                    var10 = var18.verbose;
                    var6 = 'finished without dispatching CACHE_LOADED';
                    var6 = var10.bind(var18)(var6);
                    var6 = new Array(3);
                    var10 = false;
                    var6[0] = var10;
                    var6[1] = var8;
                    var6[2] = var7;
                    return var6;
 981:
                    var10 = var5.Object;
                    var7 = var10.fromEntries;
                    var19 = var14.members;
                    var18 = var19.map;
                    var6 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.userId;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    };
                    var6 = var18.bind(var19)(var6);
                    var6 = var7.bind(var10)(var6);
                    _closure4_slot12 = var6;
                    var6 = var13.guildId;
                    var7 = var8 != var6;
                    if(!var7) { _fun0004_ip = 1045; continue _fun0004 }
 1035:
                    var6 = var13.channels;
                    var7 = var8 != var6;
 1045:
                    var6 = var13.guildId;
                    var18 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var10 = 25;
                    var10 = var19[var10];
                    var10 = var18.bind(var16)(var10);
                    var18 = var10.Emitter;
                    var10 = var18.batched;
                    var9 = function() {
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 17;
                        var6 = var5[var3];
                        var1 = undefined;
                        var10 = var4.bind(var1)(var6);
                        var9 = var10.time;
                        var6 = '💾';
                        var8 = 'Dispatch Mini Cache';
                        var7 = function() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 26;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.dispatch;
                                var1 = {};
                                var4 = 'CACHE_LOADED';
                                var1['type'] = var4;
                                var5 = _closure4_slot6;
                                var1['guilds'] = var5;
                                var5 = _closure4_slot8;
                                var1['privateChannels'] = var5;
                                var5 = _closure4_slot7;
                                var5 = var5.channels;
                                var6 = null;
                                if(!(var6 == var5)) { _fun0005_ip = 81; continue _fun0005 }
 77:
                                var5 = new Array(0);
 81:
                                var1['initialGuildChannels'] = var5;
                                var5 = _closure4_slot5;
                                var10 = var5.users;
                                var5 = new Array(0);
                                var9 = 0;
                                var11 = var5;
                                var7 = arraySpread(var11, var10, var9);
                                var1['users'] = var5;
                                var5 = _closure4_slot5;
                                var5 = var5.channelId;
                                if(!(var6 != var5)) { _fun0005_ip = 155; continue _fun0005 }
 127:
                                var5 = {};
                                var7 = _closure4_slot5;
                                var8 = var7.channelId;
                                var7 = _closure4_slot5;
                                var7 = var7.messages;
                                var5[var8] = var7;
                                _fun0005_ip = 157; continue _fun0005;
 155:
                                var5 = {};
 157:
                                var1['messages'] = var5;
                                var5 = _closure4_slot5;
                                var5 = var5.guildId;
                                if(!(var6 != var5)) { _fun0005_ip = 197; continue _fun0005 }
 175:
                                var5 = {};
                                var6 = _closure4_slot5;
                                var7 = var6.guildId;
                                var6 = _closure4_slot12;
                                var5[var7] = var6;
                                _fun0005_ip = 199; continue _fun0005;
 197:
                                var5 = {};
 199:
                                var1['guildMembers'] = var5;
                                var5 = _closure4_slot9;
                                var1['userSettings'] = var5;
                                var5 = _closure4_slot11;
                                var1['userGuildSettings'] = var5;
                                var4 = _closure4_slot10;
                                var1['readStates'] = var4;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            }
                        };
                        var7 = var9.bind(var10)(var6, var8, var7);
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.time;
                        var3 = 'socket.processFirstQueuedDispatch()';
                        var2 = function() {
                            var1 = _closure4_slot2;
                            var3 = var1.dispatcher;
                            var2 = var3.processFirstQueuedDispatch;
                            var1 = global;
                            var5 = var1.Set;
                            var1 = var5.prototype;
                            var4 = Object.create(var1, {constructor: {value: var5}});
                            var6 = ['INITIAL_GUILD'];
                            var7 = var4;
                            var1 = new var7[var5](var6, var5);
                            var1 = var1 instanceof Object ? var1 : var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = var4.bind(var5)(var6, var3, var2);
                        return var1;
                    };
                    var9 = var10.bind(var18)(var9);
                    var10 = _closure1_slot18;
                    var9 = var10.verbose;
                    var19 = var5.JSON;
                    var18 = var19.stringify;
                    var42 = var18.bind(var19)(var20);
                    var41 = var8 != var17;
                    var18 = var8 == var17;
                    var40 = undefined;
                    if(var18) { _fun0004_ip = 1137; continue _fun0004 }
 1132:
                    var40 = var17.name;
 1137:
                    var39 = var4.length;
                    var38 = var14.guildId;
                    var37 = var14.channelId;
                    var17 = var14.messages;
                    var36 = var17.length;
                    var17 = var14.members;
                    var35 = var17.length;
                    var14 = var14.users;
                    var34 = var14.length;
                    var13 = var13.channels;
                    var14 = var8 == var13;
                    var33 = undefined;
                    if(var14) { _fun0004_ip = 1205; continue _fun0004 }
 1200:
                    var33 = var13.length;
 1205:
                    var14 = var5.Object;
                    var13 = var14.keys;
                    var13 = var13.bind(var14)(var15);
                    var50 = var13.length;
                    var48 = var12.length;
                    var46 = var11.length;
                    var5 = var5.HermesInternal;
                    var29 = var5.concat;
                    var79 = 'early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ';
                    var78 = arg2;
                    var77 = '\n          selected_guild: ';
                    var75 = '\n          selected_channel: ';
                    var73 = '\n          navigation_state: ';
                    var71 = '\n          database: ';
                    var69 = '\n            name: ';
                    var67 = '\n        data:\n          database:\n            private_channels: ';
                    var65 = '\n            channel_history:\n              guild: ';
                    var63 = '\n              channel: ';
                    var61 = '\n              messages: ';
                    var59 = '\n                members: ';
                    var57 = '\n                users: ';
                    var55 = '\n            initial_guild:\n              id: ';
                    var53 = '\n              channels: ';
                    var51 = '\n            user_settings: ';
                    var49 = '\n            read_states: ';
                    var47 = '\n            user_guild_settings: ';
                    var45 = '\n      )';
                    var76 = var44;
                    var74 = var43;
                    var72 = var42;
                    var70 = var41;
                    var68 = var40;
                    var66 = var39;
                    var64 = var38;
                    var62 = var37;
                    var60 = var36;
                    var58 = var35;
                    var56 = var34;
                    var54 = var6;
                    var52 = var33;
                    var5 = var79[var29](var78, var77, var76, var75, var74, var73, var72, var71, var70, var69, var68, var67, var66, var65, var64, var63, var62, var61, var60, var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47, var46, var45, var44);
                    var5 = var9.bind(var10)(var5);
                    var9 = _closure1_slot18;
                    var5 = var9.verbose;
                    var3 = 'finished dispatching CACHE_LOADED';
                    var3 = var5.bind(var9)(var3);
                    var3 = new Array(3);
                    var5 = true;
                    var3[0] = var5;
                    var5 = null;
                    if(!var7) { _fun0004_ip = 1454; continue _fun0004 }
 1442:
                    var7 = var8 != var6;
                    var5 = null;
                    if(!var7) { _fun0004_ip = 1454; continue _fun0004 }
 1451:
                    var5 = var6;
 1454:
                    var3[1] = var5;
                    var4 = var4.length;
                    var3[2] = var4;
                    return var3;
 1470:
                    return var2;
 1473:
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
    var1 = function _loadInitialGuilds() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var3 = arg1;
                    var7 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 345; continue _fun0006 }
 18:
                    var _closure4_slot0 = var3;
                    var6 = undefined;
                    var _closure4_slot1 = var6;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0006_ip = 338; continue _fun0006 }
 37:
                    var5 = var7.page;
                    var3 = 'private-channels';
                    if(!(var3 !== var5)) { _fun0006_ip = 97; continue _fun0006 }
 53:
                    var3 = 'guild-channels';
                    if(!(var3 !== var5)) { _fun0006_ip = 97; continue _fun0006 }
 63:
                    var3 = 'other';
                    if(!(var3 === var5)) { _fun0006_ip = 106; continue _fun0006 }
 71:
                    var5 = var7.guildId;
                    var3 = '@me';
                    if(!(var3 === var5)) { _fun0006_ip = 106; continue _fun0006 }
 86:
                    var3 = true;
                    _closure1_slot25 = var3;
                    _fun0006_ip = 106; continue _fun0006;
 97:
                    var3 = true;
                    _closure1_slot25 = var3;
 106:
                    var5 = _closure1_slot25;
                    if(var5) { _fun0006_ip = 275; continue _fun0006 }
 119:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 30;
                    var5 = var9[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.getCommittedVersions;
                    var5 = var5.bind(var8)();
                    SaveGenerator(address=153);
 151:
                    return var5;
 153:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 272; continue _fun0006 }
 159:
                    var8 = var5.initial_guild_id;
                    if(!(var4 == var8)) { _fun0006_ip = 174; continue _fun0006 }
 169:
                    var8 = var7.guildId;
 174:
                    _closure4_slot1 = var8;
                    if(!(var4 != var8)) { _fun0006_ip = 265; continue _fun0006 }
 182:
                    var7 = '@me';
                    if(!(var7 !== var8)) { _fun0006_ip = 265; continue _fun0006 }
 192:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 28;
                    var7 = var9[var7];
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.tryLoadAsync;
                    var7 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getOneAsync;
                        var2 = _closure4_slot0;
                        var1 = _closure4_slot1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
                    SaveGenerator(address=232);
 230:
                    return var7;
 232:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 262; continue _fun0006 }
 238:
                    if(!(var4 == var7)) { _fun0006_ip = 248; continue _fun0006 }
 242:
                    var8 = new Array(0);
                    _fun0006_ip = 259; continue _fun0006;
 248:
                    var9 = new Array(1);
                    var9[0] = var7;
                    var8 = var9;
 259:
                    return var8;
 262:
                    return var7;
 265:
                    var7 = new Array(0);
                    return var7;
 272:
                    return var5;
 275:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 28;
                    var3 = var7[var3];
                    var5 = var5.bind(var6)(var3);
                    var3 = var5.tryLoadAsync;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.timeAsync;
                        var3 = '💾';
                        var2 = 'cache: guilds';
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 29;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getAsync;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=315);
 313:
                    return var2;
 315:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 335; continue _fun0006 }
 321:
                    var3 = var2;
                    if(!(var4 == var3)) { _fun0006_ip = 332; continue _fun0006 }
 328:
                    var3 = new Array(0);
 332:
                    return var3;
 335:
                    return var2;
 338:
                    var2 = new Array(0);
                    return var2;
 345:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function _loadInitialGuildChannels() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    var11 = arg1;
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 322; continue _fun0007 }
 18:
                    var _closure4_slot0 = var11;
                    var8 = undefined;
                    var _closure4_slot1 = var8;
                    var5 = null;
                    if(!(var5 != var11)) { _fun0007_ip = 286; continue _fun0007 }
 37:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 30;
                    var2 = var9[var2];
                    var7 = var7.bind(var8)(var2);
                    var2 = var7.getCommittedVersions;
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=74);
 72:
                    return var2;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0007_ip = 283; continue _fun0007 }
 83:
                    var10 = var2.initial_guild_id;
                    var7 = var5 == var10;
                    if(!var7) { _fun0007_ip = 112; continue _fun0007 }
 96:
                    var12 = var6.page;
                    var9 = 'guild-channels';
                    var7 = var9 === var12;
 112:
                    if(!var7) { _fun0007_ip = 120; continue _fun0007 }
 115:
                    var10 = var6.guildId;
 120:
                    if(!(var5 != var11)) { _fun0007_ip = 195; continue _fun0007 }
 124:
                    if(!(var5 != var10)) { _fun0007_ip = 195; continue _fun0007 }
 128:
                    _closure4_slot1 = var10;
                    var5 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 28;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.tryLoadAsync;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getAsync;
                        var2 = _closure4_slot0;
                        var1 = _closure4_slot1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=174);
 172:
                    return var4;
 174:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 192; continue _fun0007 }
 180:
                    var5['channels'] = var4;
                    var5['guildId'] = var10;
                    return var5;
 192:
                    return var4;
 195:
                    var6 = _closure1_slot18;
                    var5 = var6.verbose;
                    var3 = global;
                    var4 = var3.HermesInternal;
                    var9 = var4.concat;
                    var17 = 'skipped loading initial guild (guild: ';
                    var15 = ', database: ';
                    var13 = ')';
                    var16 = var10;
                    var14 = var11;
                    var4 = var17[var9](var16, var15, var14, var13, var12);
                    var4 = var5.bind(var6)(var4);
                    var5 = var3.Promise;
                    var4 = var5.resolve;
                    var3 = {'channels': null, 'guildId': null};
                    var3 = var4.bind(var5)(var3);
                    return var3;
 283:
                    return var2;
 286:
                    var2 = global;
                    var4 = var2.Promise;
                    var3 = var4.resolve;
                    var2 = {'channels': null, 'guildId': null};
                    var2 = var3.bind(var4)(var2);
                    return var2;
 322:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function _loadLateLazyCache() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 359; continue _fun0008 }
 12:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = arg2;
                    var _closure4_slot1 = var2;
                    var2 = arg3;
                    var _closure4_slot2 = var2;
                    var2 = arg4;
                    var _closure4_slot3 = var2;
                    var5 = undefined;
                    var _closure4_slot4 = var5;
                    var _closure4_slot5 = var5;
                    var _closure4_slot6 = var5;
                    var _closure4_slot7 = var5;
                    var _closure4_slot8 = var5;
                    var4 = _closure1_slot18;
                    var3 = var4.verbose;
                    var2 = 'loading late lazy cache';
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var10 = 16;
                    var2 = var2[var10];
                    var2 = var3.bind(var5)(var2);
                    var4 = var2.fetchLazyCache;
                    var3 = var4.measureAsync;
                    var2 = function() {
                        var1 = global;
                        var3 = var1.Promise;
                        var2 = var3.all;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 28;
                        var1 = var8[var5];
                        var6 = undefined;
                        var10 = var7.bind(var6)(var1);
                        var9 = var10.tryLoadAsync;
                        var1 = function() {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                var2 = _closure4_slot0;
                                var1 = null;
                                if(!(var1 == var2)) { _fun0009_ip = 36; continue _fun0009 }
 13:
                                var1 = global;
                                var3 = var1.Promise;
                                var2 = var3.resolve;
                                var1 = true;
                                var1 = var2.bind(var3)(var1);
                                _fun0009_ip = 91; continue _fun0009;
 36:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 17;
                                var3 = var3[var2];
                                var2 = undefined;
                                var6 = var4.bind(var2)(var3);
                                var5 = var6.timeAsync;
                                var4 = '💾';
                                var3 = 'cache: cache_version';
                                var2 = function() {
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 31;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.okAsync;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var1 = var5.bind(var6)(var4, var3, var2);
 91:
                                return var1;
                            }
                        };
                        var9 = var9.bind(var10)(var1);
                        var1 = new Array(3);
                        var1[0] = var9;
                        var9 = var8[var5];
                        var11 = var7.bind(var6)(var9);
                        var10 = var11.tryLoadAsync;
                        var9 = function() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                var2 = _closure4_slot0;
                                var1 = null;
                                if(!(var1 != var2)) { _fun0010_ip = 77; continue _fun0010 }
 13:
                                var2 = _closure1_slot25;
                                if(var2) { _fun0010_ip = 77; continue _fun0010 }
 23:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 17;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.timeAsync;
                                var3 = '💾';
                                var2 = 'cache: lazy guilds';
                                var1 = function() {
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 29;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.getAsync;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var1 = var4.bind(var5)(var3, var2, var1);
                                _fun0010_ip = 100; continue _fun0010;
 77:
                                var2 = global;
                                var4 = var2.Promise;
                                var3 = var4.resolve;
                                var2 = new Array(0);
                                var1 = var3.bind(var4)(var2);
 100:
                                return var1;
                            }
                        };
                        var9 = var10.bind(var11)(var9);
                        var1[1] = var9;
                        var5 = var8[var5];
                        var6 = var7.bind(var6)(var5);
                        var5 = var6.tryLoadAsync;
                        var4 = function() {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                var2 = _closure4_slot0;
                                var1 = null;
                                if(!(var1 == var2)) { _fun0011_ip = 63; continue _fun0011 }
 13:
                                var1 = global;
                                var3 = var1.Promise;
                                var2 = var3.resolve;
                                var1 = {};
                                var4 = new Array(0);
                                var1['all'] = var4;
                                var4 = new Array(0);
                                var1['stale'] = var4;
                                var4 = new Array(0);
                                var1['channels'] = var4;
                                var1 = var2.bind(var3)(var1);
                                _fun0011_ip = 118; continue _fun0011;
 63:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 17;
                                var3 = var3[var2];
                                var2 = undefined;
                                var6 = var4.bind(var2)(var3);
                                var5 = var6.timeAsync;
                                var4 = '💾';
                                var3 = 'cache: basic_channels';
                                var2 = function() {
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 32;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.getAsync;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var1 = var5.bind(var6)(var4, var3, var2);
 118:
                                return var1;
                            }
                        };
                        var4 = var5.bind(var6)(var4);
                        var1[2] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=132);
 130:
                    return var2;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 356; continue _fun0008 }
 141:
                    var4 = _closure1_slot3;
                    var3 = 3;
                    var4 = var4.bind(var5)(var2, var3);
                    var3 = 0;
                    var3 = var4[var3];
                    _closure4_slot4 = var3;
                    var3 = 1;
                    var3 = var4[var3];
                    _closure4_slot5 = var3;
                    var3 = 2;
                    var3 = var4[var3];
                    _closure4_slot6 = var3;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var10];
                    var3 = var4.bind(var5)(var3);
                    var8 = var3.fetchStaleChannels;
                    var4 = var8.measureAsync;
                    var3 = function() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var2 = _closure4_slot0;
                            var3 = null;
                            if(!(var3 != var2)) { _fun0012_ip = 42; continue _fun0012 }
 13:
                            var2 = _closure4_slot6;
                            if(!(var3 != var2)) { _fun0012_ip = 42; continue _fun0012 }
 21:
                            var1 = _closure4_slot6;
                            var1 = var1.stale;
                            var2 = var1.length;
                            var1 = 0;
                            if(!(!(var2 > var1))) { _fun0012_ip = 67; continue _fun0012 }
 42:
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.resolve;
                            var1 = new Array(0);
                            var1 = var2.bind(var3)(var1);
                            _fun0012_ip = 110; continue _fun0012;
 67:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 28;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.tryLoadAsync;
                            var2 = function() {
                                var4 = _closure4_slot0;
                                var1 = _closure4_slot6;
                                var3 = var1.stale;
                                var2 = function loadGuildChannels(arg1, arg2) {
                                    var5 = arg2;
                                    var2 = arg1;
                                    var _closure7_slot0 = var2;
                                    var6 = _closure1_slot18;
                                    var4 = var6.verbose;
                                    var11 = var5.length;
                                    var3 = var5.join;
                                    var2 = ', ';
                                    var13 = var3.bind(var5)(var2);
                                    var2 = global;
                                    var3 = var2.HermesInternal;
                                    var9 = var3.concat;
                                    var16 = 'loading stale guild channels (count: ';
                                    var14 = ', ids: ';
                                    var12 = ')';
                                    var15 = var11;
                                    var3 = var16[var9](var15, var14, var13, var12, var11);
                                    var3 = var4.bind(var6)(var3);
                                    var3 = var2.Promise;
                                    var2 = var3.all;
                                    var4 = var5.map;
                                    var1 = function(arg1) {
                                        var5 = arg1;
                                        var _closure8_slot0 = var5;
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var2 = 18;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var4 = var4.bind(var2)(var3);
                                        var3 = var4.getAsync;
                                        var2 = _closure7_slot0;
                                        var3 = var3.bind(var4)(var2, var5);
                                        var2 = var3.then;
                                        var1 = function(arg1) {
                                            var2 = _closure8_slot0;
                                            var1 = new Array(2);
                                            var1[0] = var2;
                                            var2 = arg1;
                                            var1[1] = var2;
                                            return var1;
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        return var1;
                                    };
                                    var1 = var4.bind(var5)(var1);
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var1 = undefined;
                                var1 = var2.bind(var1)(var4, var3);
                                return var1;
                            };
                            var1 = var3.bind(var4)(var2);
 110:
                            return var1;
                        }
                    };
                    var3 = var4.bind(var8)(var3);
                    SaveGenerator(address=229);
 227:
                    return var3;
 229:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 353; continue _fun0008 }
 235:
                    _closure4_slot7 = var3;
                    var4 = global;
                    var9 = var4.Promise;
                    var4 = var9.prototype;
                    var8 = Object.create(var4, {constructor: {value: var9}});
                    var12 = function(arg1) {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = 0;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var13 = var8;
                    var4 = new var13[var9](var12, var11);
                    var4 = var4 instanceof Object ? var4 : var8;
                    SaveGenerator(address=276);
 274:
                    return var4;
 276:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0008_ip = 350; continue _fun0008 }
 282:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var8 = var9.bind(var5)(var8);
                    var9 = var8.loadLazyCache;
                    var8 = var9.recordStart;
                    var8 = var8.bind(var9)();
                    var9 = _closure1_slot10;
                    var8 = var9.getSocket;
                    var8 = var8.bind(var9)();
                    _closure4_slot8 = var8;
                    var7 = _closure1_slot32;
                    var6 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var1 = global;
                            var3 = var1.performance;
                            var2 = var3.now;
                            var12 = var2.bind(var3)();
                            var3 = _closure4_slot4;
                            var2 = false;
                            if(!(var2 !== var3)) { _fun0013_ip = 1255; continue _fun0013 }
 35:
                            var2 = _closure4_slot5;
                            var8 = null;
                            if(!(var8 != var2)) { _fun0013_ip = 1058; continue _fun0013 }
 48:
                            var2 = _closure4_slot6;
                            if(!(var8 != var2)) { _fun0013_ip = 1058; continue _fun0013 }
 59:
                            var2 = _closure4_slot7;
                            if(!(var8 != var2)) { _fun0013_ip = 1058; continue _fun0013 }
 70:
                            var2 = _closure4_slot4;
                            if(!(var8 == var2)) { _fun0013_ip = 118; continue _fun0013 }
 78:
                            var2 = _closure4_slot5;
                            var2 = var2.length;
                            var3 = 0;
                            if(!(!(var2 > var3))) { _fun0013_ip = 932; continue _fun0013 }
 96:
                            var2 = _closure4_slot6;
                            var2 = var2.all;
                            var2 = var2.length;
                            if(!(!(var2 > var3))) { _fun0013_ip = 932; continue _fun0013 }
 118:
                            var3 = _closure1_slot23;
                            if(var3) { _fun0013_ip = 842; continue _fun0013 }
 131:
                            var6 = _closure4_slot8;
                            var5 = var6.addAnalytics;
                            var3 = {};
                            var11 = true;
                            var3['hadCacheAtStartup'] = var11;
                            var3 = var5.bind(var6)(var3);
                            var3 = {};
                            var5 = 'CACHE_LOADED_LAZY';
                            var3['type'] = var5;
                            var5 = _closure4_slot5;
                            var3['guilds'] = var5;
                            var5 = _closure4_slot7;
                            var3['guildChannels'] = var5;
                            var5 = _closure4_slot6;
                            var5 = var5.channels;
                            var3['basicGuildChannels'] = var5;
                            var5 = _closure4_slot2;
                            var3['initialGuildId'] = var5;
                            var _closure5_slot0 = var3;
                            var9 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var6 = 16;
                            var10 = var5[var6];
                            var3 = undefined;
                            var10 = var9.bind(var3)(var10);
                            var14 = var10.deserializeCache;
                            var13 = var14.measure;
                            var10 = function() {
                                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                                    var1 = _closure5_slot0;
                                    var2 = var1.channels;
                                    var3 = null;
                                    if(!(var3 != var2)) { _fun0014_ip = 55; continue _fun0014 }
 19:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 14;
                                    var2 = var5[var2];
                                    var5 = undefined;
                                    var4 = var4.bind(var5)(var2);
                                    var2 = var1.channels;
                                    var2 = var4.bind(var5)(var2);
 55:
                                    var2 = var1.privateChannels;
                                    if(!(var3 != var2)) { _fun0014_ip = 101; continue _fun0014 }
 65:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 14;
                                    var2 = var5[var2];
                                    var5 = undefined;
                                    var4 = var4.bind(var5)(var2);
                                    var2 = var1.privateChannels;
                                    var2 = var4.bind(var5)(var2);
 101:
                                    var2 = var1.guildChannels;
                                    if(!(var3 != var2)) { _fun0014_ip = 153; continue _fun0014 }
 111:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 14;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var3 = var4.bind(var2)(var3);
                                    var2 = var3.deserializeChannelEntries;
                                    var1 = var1.guildChannels;
                                    var1 = var2.bind(var3)(var1);
 153:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var10 = var13.bind(var14)(var10);
                            var5 = var5[var6];
                            var5 = var9.bind(var3)(var5);
                            var10 = var5.dispatchLazyCache;
                            var9 = var10.measure;
                            var5 = function() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 26;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.dispatch;
                                var1 = _closure5_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var5 = var9.bind(var10)(var5);
                            var10 = _closure1_slot18;
                            var9 = var10.verbose;
                            var13 = var1.performance;
                            var5 = var13.now;
                            var5 = var5.bind(var13)();
                            var14 = var5 - var12;
                            var5 = var1.HermesInternal;
                            var13 = var5.concat;
                            var12 = 'late lazy cache loaded (ok: true, took: ';
                            var5 = 'ms)';
                            var5 = var13.bind(var12)(var14, var5);
                            var5 = var9.bind(var10)(var5);
                            var10 = _closure4_slot8;
                            var9 = var10.addAnalytics;
                            var5 = {};
                            var5['usedCacheAtStartup'] = var11;
                            var5 = var9.bind(var10)(var5);
                            var11 = _closure4_slot7;
                            var10 = var11.reduce;
                            var9 = function(arg1, arg2) {
                                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                                    var4 = arg2;
                                    var2 = var4[Symbol.iterator];
                                    var4 = var2().next;
                                    var1 = var4().value;
                                    var1 = var2;
                                    var6 = undefined;
                                    var3 = var1 === var6;
                                    var1 = undefined;
                                    if(var3) { _fun0015_ip = 49; continue _fun0015 }
 24:
                                    var5 = var4().value;
                                    var4 = var2;
                                    var4 = var4 === var6;
                                    var1 = undefined;
                                    var3 = var4;
                                    if(var4) { _fun0015_ip = 49; continue _fun0015 }
 43:
                                    var1 = var5;
                                    var3 = var4;
 49:
                                    if(var3) { _fun0015_ip = 55; continue _fun0015 }
 52:
                                    var2.return();
 55:
                                    var2 = var1.length;
                                    var1 = arg1;
                                    var1 = var1 + var2;
                                    return var1;
                                }
                            };
                            var5 = 0;
                            var10 = var10.bind(var11)(var9, var5);
                            var9 = _closure4_slot7;
                            var9 = var9.length;
                            var11 = _closure4_slot6;
                            var13 = var11.all;
                            var12 = var13.reduce;
                            var11 = function(arg1, arg2) {
                                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                                    var4 = arg2;
                                    var2 = var4[Symbol.iterator];
                                    var4 = var2().next;
                                    var1 = var4().value;
                                    var1 = var2;
                                    var6 = undefined;
                                    var3 = var1 === var6;
                                    var1 = undefined;
                                    if(var3) { _fun0016_ip = 49; continue _fun0016 }
 24:
                                    var5 = var4().value;
                                    var4 = var2;
                                    var4 = var4 === var6;
                                    var1 = undefined;
                                    var3 = var4;
                                    if(var4) { _fun0016_ip = 49; continue _fun0016 }
 43:
                                    var1 = var5;
                                    var3 = var4;
 49:
                                    if(var3) { _fun0016_ip = 55; continue _fun0016 }
 52:
                                    var2.return();
 55:
                                    var2 = var1.length;
                                    var1 = arg1;
                                    var1 = var1 + var2;
                                    return var1;
                                }
                            };
                            var12 = var12.bind(var13)(var11, var5);
                            var11 = _closure4_slot6;
                            var13 = var11.channels;
                            var11 = var13.reduce;
                            var4 = function(arg1, arg2) {
                                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                                    var4 = arg2;
                                    var2 = var4[Symbol.iterator];
                                    var4 = var2().next;
                                    var1 = var4().value;
                                    var1 = var2;
                                    var6 = undefined;
                                    var3 = var1 === var6;
                                    var1 = undefined;
                                    if(var3) { _fun0017_ip = 49; continue _fun0017 }
 24:
                                    var5 = var4().value;
                                    var4 = var2;
                                    var4 = var4 === var6;
                                    var1 = undefined;
                                    var3 = var4;
                                    if(var4) { _fun0017_ip = 49; continue _fun0017 }
 43:
                                    var1 = var5;
                                    var3 = var4;
 49:
                                    if(var3) { _fun0017_ip = 55; continue _fun0017 }
 52:
                                    var2.return();
 55:
                                    var2 = var1.length;
                                    var1 = arg1;
                                    var1 = var1 + var2;
                                    return var1;
                                }
                            };
                            var37 = var11.bind(var13)(var4, var5);
                            var11 = var12 - var37;
                            var4 = _closure4_slot6;
                            var4 = var4.stale;
                            var4 = var4.length;
                            var36 = '';
                            if(!(var5 !== var4)) { _fun0013_ip = 534; continue _fun0013 }
 486:
                            var4 = _closure4_slot6;
                            var13 = var4.stale;
                            var5 = var13.join;
                            var4 = ', ';
                            var13 = var5.bind(var13)(var4);
                            var4 = var1.HermesInternal;
                            var5 = var4.concat;
                            var4 = ' · ';
                            var36 = var5.bind(var4)(var13);
 534:
                            var13 = _closure1_slot18;
                            var5 = var13.verbose;
                            var35 = _closure4_slot1;
                            var34 = _closure4_slot2;
                            var4 = _closure4_slot0;
                            var33 = var8 != var4;
                            var32 = _closure4_slot4;
                            var4 = var8 == var4;
                            var31 = undefined;
                            if(var4) { _fun0013_ip = 582; continue _fun0013 }
 573:
                            var4 = _closure4_slot0;
                            var31 = var4.name;
 582:
                            var4 = _closure4_slot5;
                            var55 = var4.length;
                            var4 = _closure4_slot6;
                            var4 = var4.channels;
                            var51 = var4.length;
                            var4 = _closure4_slot6;
                            var4 = var4.stale;
                            var47 = var4.length;
                            var4 = _closure4_slot7;
                            var39 = var4.length;
                            var4 = var1.HermesInternal;
                            var26 = var4.concat;
                            var66 = 'lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ';
                            var64 = '\n          initial_guild: ';
                            var62 = '\n          database: ';
                            var60 = '\n            ok: ';
                            var58 = '\n            name: ';
                            var56 = '\n        data:\n          database:\n            guilds: ';
                            var54 = '\n            basic_channels:\n              total: ';
                            var18 = ' (';
                            var50 = ' guilds)\n              stale: ';
                            var46 = ' guilds';
                            var44 = ')\n              unstale: ';
                            var42 = '\n            full_channels (guilds_with_stale_basic_channels):\n              total: ';
                            var38 = ' guilds)\n      )';
                            var65 = var35;
                            var63 = var34;
                            var61 = var33;
                            var59 = var32;
                            var57 = var31;
                            var53 = var12;
                            var52 = var18;
                            var49 = var11;
                            var48 = var18;
                            var45 = var36;
                            var43 = var37;
                            var41 = var10;
                            var40 = var18;
                            var4 = var66[var26](var65, var64, var63, var62, var61, var60, var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47, var46, var45, var44, var43, var42, var41, var40, var39, var38, var37);
                            var4 = var5.bind(var13)(var4);
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var4 = var4[var6];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.setCacheInfo;
                            var4 = {};
                            var13 = _closure4_slot5;
                            var13 = var13.length;
                            var4['guilds'] = var13;
                            var13 = _closure4_slot3;
                            var4['privateChannels'] = var13;
                            var4['basicChannels'] = var12;
                            var4['basicChannelsStale'] = var11;
                            var4['fullChannels'] = var10;
                            var4['fullChannelGuilds'] = var9;
                            var4 = var5.bind(var6)(var4);
                            return var3;
 842:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 27;
                            var6 = var5[var3];
                            var3 = undefined;
                            var9 = var4.bind(var3)(var6);
                            var6 = 'already_connected';
                            var6 = var9.bind(var3)(var6);
                            var9 = _closure1_slot18;
                            var6 = var9.log;
                            var2 = 'Skipping lazy cache; already connected.';
                            var2 = var6.bind(var9)(var2);
                            var2 = 26;
                            var2 = var5[var2];
                            var4 = var4.bind(var3)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'CACHE_LOADED_LAZY_NO_CACHE';
                            var2['type'] = var5;
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            return var2;
 932:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 27;
                            var6 = var5[var3];
                            var3 = undefined;
                            var9 = var4.bind(var3)(var6);
                            var6 = 'database:versionless';
                            var6 = var9.bind(var3)(var6);
                            var9 = _closure1_slot18;
                            var6 = var9.log;
                            var2 = 'kv_cache was not ok (null version with values)';
                            var2 = var6.bind(var9)(var2);
                            var2 = 26;
                            var6 = var5[var2];
                            var10 = var4.bind(var3)(var6);
                            var9 = var10.dispatch;
                            var6 = {'type': 'CLEAR_CACHES', 'reason': 'database:versionless'};
                            var6 = var9.bind(var10)(var6);
                            var2 = var5[var2];
                            var4 = var4.bind(var3)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'CACHE_LOADED_LAZY_NO_CACHE';
                            var2['type'] = var5;
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            return var2;
 1058:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 27;
                            var6 = var4[var2];
                            var2 = undefined;
                            var9 = var3.bind(var2)(var6);
                            var6 = 'database:load_failed';
                            var6 = var9.bind(var2)(var6);
                            var6 = _closure1_slot18;
                            var5 = var6.log;
                            var9 = _closure4_slot0;
                            var65 = var8 != var9;
                            var9 = _closure4_slot6;
                            var63 = var8 != var9;
                            var9 = _closure4_slot7;
                            var61 = var8 != var9;
                            var7 = _closure4_slot5;
                            var59 = var8 != var7;
                            var1 = var1.HermesInternal;
                            var11 = var1.concat;
                            var66 = "couldn't load database item (\n          database: ";
                            var64 = '\n          basic_channels: ';
                            var62 = '\n          guild_channels: ';
                            var60 = '\n          guilds: ';
                            var58 = '\n        )';
                            var1 = var66[var11](var65, var64, var63, var62, var61, var60, var59, var58, var57);
                            var1 = var5.bind(var6)(var1);
                            var1 = 26;
                            var5 = var4[var1];
                            var7 = var3.bind(var2)(var5);
                            var6 = var7.dispatch;
                            var5 = {'type': 'CLEAR_CACHES', 'reason': 'database:load_failed'};
                            var5 = var6.bind(var7)(var5);
                            var1 = var4[var1];
                            var3 = var3.bind(var2)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'CACHE_LOADED_LAZY_NO_CACHE';
                            var1['type'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
 1255:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 27;
                            var1 = var4[var1];
                            var2 = undefined;
                            var5 = var3.bind(var2)(var1);
                            var1 = 'database:not_ok';
                            var1 = var5.bind(var2)(var1);
                            var1 = 26;
                            var5 = var4[var1];
                            var7 = var3.bind(var2)(var5);
                            var6 = var7.dispatch;
                            var5 = {'type': 'CLEAR_CACHES', 'reason': 'database:not_ok'};
                            var5 = var6.bind(var7)(var5);
                            var1 = var4[var1];
                            var3 = var3.bind(var2)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'CACHE_LOADED_LAZY_NO_CACHE';
                            var1['type'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var7.bind(var5)(var6);
                    return var5;
 350:
                    return var4;
 353:
                    return var3;
 356:
                    return var2;
 359:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot31 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function resumeFluxAndSocket(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot10;
            var1 = var4.getSocket;
            var1 = var1.bind(var4)();
            var _closure2_slot1 = var1;
            var1 = false;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 25;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var6 = var4.Emitter;
            var5 = var6.batched;
            var4 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0: // try_start_0
                    var2 = _closure2_slot0;
                    var4 = undefined;
                    var2 = var2.bind(var4)();
                    var2 = _closure2_slot1;
                    var3 = var2.dispatcher;
                    var2 = var3.hasStuffToDispatchNow;
                    var3 = var2.bind(var3)();
                    if(var3) { _fun0019_ip = 86; continue _fun0019 }
 41:
                    var6 = _closure1_slot18;
                    var5 = var6.verbose;
                    var3 = 'Unpausing Dispatch Queue';
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure2_slot1;
                    var5 = var3.dispatcher;
                    var3 = var5.unpauseDispatchQueue;
                    var3 = var3.bind(var5)();
 82: // try_end0
                    var3 = undefined;
                    return var3;
 86: // try_start_1
                    var3 = true;
                    _closure2_slot2 = var3;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 16;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var5 = var3.loadLazyCache;
                    var3 = var5.recordEnd;
                    var3 = var3.bind(var5)();
                    var5 = _closure1_slot18;
                    var3 = var5.verbose;
                    var2 = 'Processing First Queued Dispatch';
                    var2 = var3.bind(var5)(var2);
                    var1 = _closure2_slot1;
                    var5 = var1.dispatcher;
                    var3 = var5.processFirstQueuedDispatch;
                    var1 = global;
                    var7 = var1.Set;
                    var2 = var7.prototype;
                    var6 = Object.create(var2, {constructor: {value: var7}});
                    var9 = ['READY', 'INITIAL_GUILD'];
                    var10 = var6;
                    var2 = new var10[var7](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var6;
                    var2 = var3.bind(var5)(var2);
                    var3 = var1.setTimeout;
                    var2 = function() {
                        var3 = _closure1_slot18;
                        var2 = var3.verbose;
                        var1 = 'Unpausing Dispatch Queue';
                        var1 = var2.bind(var3)(var1);
                        var1 = _closure2_slot1;
                        var2 = var1.dispatcher;
                        var1 = var2.unpauseDispatchQueue;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    var1 = 100;
                    var1 = var3.bind(var4)(var2, var1);
 230: // try_end1
                    _fun0019_ip = 321; continue _fun0019;
 232: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot18;
                    var3 = var4.warn;
                    var2 = 'Lazy cache has encountered error';
                    var2 = var3.bind(var4)(var2, var5);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'RESET_SOCKET';
                    var1['type'] = var4;
                    var4 = {};
                    var4['error'] = var5;
                    var5 = 'LazyCache';
                    var4['action'] = var5;
                    var1['args'] = var4;
                    var1 = var2.bind(var3)(var1);
 321:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var3 = _closure2_slot2;
            if(var3) { _fun0018_ip = 123; continue _fun0018 }
 87:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var3 = var2.loadLazyCache;
            var2 = var3.recordEnd;
            var2 = var2.bind(var3)();
 123:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var4);
    var11 = 0;
    var4 = var7[var11];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot14 = var9;
    var9 = var4.CACHE_STORE_KEY;
    var _closure1_slot15 = var9;
    var9 = var4.CACHE_STORE_LAZY_KEY;
    var _closure1_slot16 = var9;
    var4 = var4.CACHE_STORE_CHANNELS_LAZY_KEY;
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var7[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var12 = Object.create(var4, {constructor: {value: var9}});
    var4 = 'CacheStore';
    var16 = var12;
    var15 = var4;
    var9 = new var16[var9](var15, var14);
    var9 = var9 instanceof Object ? var9 : var12;
    var _closure1_slot18 = var9;
    var9 = false;
    var _closure1_slot19 = var9;
    var12 = 'initializing';
    var _closure1_slot20 = var12;
    var _closure1_slot21 = var11;
    var _closure1_slot22 = var9;
    var _closure1_slot23 = var9;
    var _closure1_slot24 = var9;
    var _closure1_slot25 = var9;
    var9 = 25;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var11 = var9.Store;
    var9 = function(arg1) {
        var4 = function CacheStoreClass() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot1;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot26;
                var1 = var1.bind(var3)();
                if(var1) { _fun0020_ip = 69; continue _fun0020 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0020_ip = 105; continue _fun0020;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot8;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var8 = 'hasCache';
        var5['key'] = var8;
        var8 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'getLazyCacheStatus';
        var5['key'] = var8;
        var8 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'lastWriteTime';
        var5['key'] = var8;
        var8 = function get() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['get'] = var8;
        var1[3] = var5;
        var5 = {};
        var8 = 'canWriteCaches';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.isAuthenticated;
                var1 = var1.bind(var2)();
                if(var1) { _fun0021_ip = 63; continue _fun0021 }
 38:
                var4 = _closure1_slot18;
                var2 = var4.log;
                var1 = 'Not writing cache because not authenticated';
                var1 = var2.bind(var4)(var1);
                var1 = false;
                _fun0021_ip = 143; continue _fun0021;
 63:
                var2 = _closure1_slot19;
                if(var2) { _fun0021_ip = 117; continue _fun0021 }
 70:
                var2 = arg1;
                var4 = !var2;
                if(!var4) { _fun0021_ip = 86; continue _fun0021 }
 79:
                var2 = _closure1_slot24;
                var4 = !var2;
 86:
                var2 = !var4;
                if(!var4) { _fun0021_ip = 115; continue _fun0021 }
 92:
                var6 = _closure1_slot18;
                var5 = var6.log;
                var4 = 'Not writing cache because never connected';
                var4 = var5.bind(var6)(var4);
                var2 = false;
 115:
                _fun0021_ip = 140; continue _fun0021;
 117:
                var5 = _closure1_slot18;
                var4 = var5.log;
                var3 = 'Not writing cache because caches cleared';
                var3 = var4.bind(var5)(var3);
                var2 = false;
 140:
                var1 = var2;
 143:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[4] = var5;
        var5 = {};
        var8 = 'loadCacheAsync';
        var5['key'] = var8;
        var8 = _closure1_slot9;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0022_ip = 488; continue _fun0022 }
 12:
                    var4 = arg1;
                    var _closure4_slot0 = var4;
                    var5 = undefined;
                    var3 = undefined;
                    var9 = undefined;
                    var _closure4_slot1 = var5;
                    var10 = undefined;
                    var _closure4_slot2 = var5;
                    var8 = undefined;
                    var7 = undefined;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 34;
                    var6 = var12[var6];
                    var12 = var11.bind(var5)(var6);
                    var11 = var12.callOnce;
                    var6 = arg2;
                    var3 = var11.bind(var12)(var6);
                    var11 = _closure1_slot20;
                    var6 = 'initializing';
                    if(!(var6 === var11)) { _fun0022_ip = 427; continue _fun0022 }
 93: // try_start_0
                    var11 = _closure1_slot11;
                    var6 = var11.getId;
                    var14 = var6.bind(var11)();
                    var9 = var14;
                    _closure4_slot1 = var14;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 35;
                    var6 = var12[var6];
                    var13 = var11.bind(var5)(var6);
                    var6 = var13.carefullyOpenDatabase;
                    var6 = var6.bind(var13)(var14);
                    var10 = var6;
                    _closure4_slot2 = var6;
                    var6 = 16;
                    var6 = var12[var6];
                    var6 = var11.bind(var5)(var6);
                    var12 = var6.loadMiniCache;
                    var11 = var12.measureAsync;
                    var6 = function() {
                        var5 = _closure4_slot2;
                        var4 = _closure4_slot1;
                        var3 = _closure4_slot0;
                        var2 = function loadEarlyCache() {
                            var1 = undefined;
                            var4 = _closure1_slot28;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)(var5, var4, var3);
                        return var1;
                    };
                    var6 = var11.bind(var12)(var6);
                    SaveGenerator(address=190);
 188:
                    return var6;
 190:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=10);
                    if(var11) { _fun0022_ip = 302; continue _fun0022 }
 196:
                    var12 = _closure1_slot3;
                    var11 = 3;
                    var13 = var12.bind(var5)(var6, var11);
                    var11 = 0;
                    var11 = var13[var11];
                    var12 = 1;
                    var8 = var13[var12];
                    var12 = 2;
                    var7 = var13[var12];
                    var12 = var3;
                    var12 = var12.bind(var5)();
                    if(var11) { _fun0022_ip = 261; continue _fun0022 }
 239:
                    var11 = function dontLoadLateLazyCache() {
                        var3 = _closure1_slot32;
                        var2 = undefined;
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 26;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'CACHE_LOADED_LAZY_NO_CACHE';
                            var1['type'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var3.bind(var2)(var1);
                        var1 = global;
                        var2 = var1.Promise;
                        var1 = var2.resolve;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var11 = var11.bind(var5)();
                    SaveGenerator(address=252);
 250:
                    return var11;
 252:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(!var12) { _fun0022_ip = 294; continue _fun0022 }
 258: // try_end0
                    return var11;
 261: // try_start_1
                    var18 = var10;
                    var17 = var9;
                    var16 = var8;
                    var15 = var7;
                    var7 = function loadLateLazyCache() {
                        var1 = undefined;
                        var4 = _closure1_slot31;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var19 = undefined;
                    var7 = var19[var7](var18, var17, var16, var15, var14);
                    SaveGenerator(address=288);
 286:
                    return var7;
 288:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0022_ip = 299; continue _fun0022 }
 294: // try_end1
                    _fun0022_ip = 424; continue _fun0022;
 299:
                    return var7;
 302:
                    return var6;
 305: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    var9 = _closure1_slot18;
                    var8 = var9.error;
                    var7 = var10.stack;
                    var6 = 'clearing cache. exception encountered while loading cache.';
                    var6 = var8.bind(var9)(var6, var10, var7);
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 27;
                    var6 = var8[var6];
                    var9 = var7.bind(var5)(var6);
                    var6 = 'cache:exception';
                    var6 = var9.bind(var5)(var6);
                    var6 = var3;
                    var6 = var6.bind(var5)();
                    var6 = 26;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var9 = 'RESET_SOCKET';
                    var6['type'] = var9;
                    var9 = {};
                    var9['error'] = var10;
                    var10 = 'loadCacheAsync';
                    var9['action'] = var10;
                    var6['args'] = var9;
                    var6 = var7.bind(var8)(var6);
 424:
                    return var5;
 427:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 27;
                    var4 = var7[var4];
                    var6 = var6.bind(var5)(var4);
                    var4 = 'cache:lazy_cache_not_initializing';
                    var4 = var6.bind(var5)(var4);
                    var3 = var3.bind(var5)();
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = function() {
                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getSocket;
                            var3 = var1.bind(var2)();
                            var2 = null;
                            var5 = var2 == var3;
                            var1 = undefined;
                            if(var5) { _fun0023_ip = 53; continue _fun0023 }
 28:
                            var3 = var3.dispatcher;
                            var2 = var2 == var3;
                            var1 = undefined;
                            if(var2) { _fun0023_ip = 53; continue _fun0023 }
 43:
                            var2 = var3.unpauseDispatchQueue;
                            var1 = var2.bind(var3)();
 53:
                            return var1;
                        }
                    };
                    var2 = 0;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = undefined;
                    return var2;
 488:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function loadCacheAsync() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var9.bind(var1)(var11);
    var9['displayName'] = var4;
    var4 = 26;
    var4 = var7[var4];
    var15 = var8.bind(var1)(var4);
    var4 = {};
    var11 = function handleConnectionOpen() {
        var1 = true;
        _closure1_slot23 = var1;
        _closure1_slot24 = var1;
        var1 = false;
        return var1;
    };
    var4['CONNECTION_OPEN'] = var11;
    var4['LOGOUT'] = var10;
    var11 = function handleConnectionClose() {
        var1 = false;
        _closure1_slot23 = var1;
        var2 = true;
        _closure1_slot24 = var2;
        return var1;
    };
    var4['CONNECTION_CLOSED'] = var11;
    var11 = function handleCacheLoaded() {
        var1 = true;
        _closure1_slot22 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CACHE_LOADED'] = var11;
    var11 = function handleCacheLoadedLazy() {
        var1 = true;
        _closure1_slot22 = var1;
        var1 = 'cache-loaded';
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CACHE_LOADED_LAZY'] = var11;
    var11 = function handleCacheLoadedLazyNoCache() {
        var1 = 'no-cache';
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CACHE_LOADED_LAZY_NO_CACHE'] = var11;
    var4['CLEAR_CACHES'] = var10;
    var5 = function saveCaches() {
        var4 = _closure1_slot18;
        var3 = var4.verbose;
        var1 = 'Writing cache now';
        var1 = var3.bind(var4)(var1);
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        _closure1_slot21 = var1;
        var1 = true;
        _closure1_slot22 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 13;
        var6 = var5[var3];
        var1 = undefined;
        var6 = var4.bind(var1)(var6);
        var8 = var6.Storage;
        var7 = var8.remove;
        var6 = _closure1_slot15;
        var6 = var7.bind(var8)(var6);
        var6 = var5[var3];
        var6 = var4.bind(var1)(var6);
        var8 = var6.Storage;
        var7 = var8.remove;
        var6 = _closure1_slot17;
        var6 = var7.bind(var8)(var6);
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var4 = var3.Storage;
        var3 = var4.remove;
        var2 = _closure1_slot16;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['WRITE_CACHES'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var16 = var5;
    var14 = var4;
    var4 = new var16[var9](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 36;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/cache/CacheStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ENABLE_CACHE_STORE'] = var2;
    return var1;
})();