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
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var10 = function handleClearCaches(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var4.preventWritingCachesAgainThisSession;
case 6:
            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = true;
            _closure1_slot19 = var2;
case 8:
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
case 0:
                    StartGenerator();
                    var9 = arg1;
                    var7 = arg2;
                    var12 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = global;
                    var4 = var3.performance;
                    var2 = var4.now;
                    var5 = var2.bind(var4)();
                    var11 = null;
                    if(!(var11 != var9)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    if(!(var11 == var12)) { _fun0003_ip = 14; continue _fun0003 }
case 12:
                    var6 = _closure1_slot18;
                    var4 = var6.verbose;
                    var2 = var3.HermesInternal;
                    var13 = var2.concat;
                    var24 = 'skipped loaded messages (channel: ';
                    var22 = ', database: ';
                    var20 = ').';
                    var23 = var12;
                    var21 = var9;
                    var2 = var24[var13](var23, var22, var21, var20, var19);
                    var2 = var4.bind(var6)(var2);
                    var4 = var3.performance;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var4 = var2 - var5;
                    var2 = new Array(2);
                    var2[0] = var4;
                    var4 = {'guildId': null, 'channelId': null};
                    var6 = new Array(0);
                    var4['users'] = var6;
                    var6 = new Array(0);
                    var4['members'] = var6;
                    var6 = new Array(0);
                    var4['messages'] = var6;
                    var2[1] = var4;
                    return var2;
case 14:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 15;
                    var2 = var8[var2];
                    var13 = undefined;
                    var8 = var4.bind(var13)(var2);
                    var4 = var8.startupLoad;
                    var20 = _closure1_slot14;
                    var24 = var8;
                    var23 = var9;
                    var22 = var7;
                    var21 = var12;
                    var2 = var24[var4](var23, var22, var21, var20, var19);
                    SaveGenerator(address=238);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var9 = _closure1_slot18;
                    var8 = var9.verbose;
                    var4 = var2.messages;
                    var23 = var4.length;
                    var4 = var3.HermesInternal;
                    var16 = var4.concat;
                    var24 = 'loaded ';
                    var22 = ' messages (guild: ';
                    var20 = ', channel: ';
                    var18 = ').';
                    var21 = var7;
                    var19 = var12;
                    var4 = var24[var16](var23, var22, var21, var20, var19, var18, var17);
                    var4 = var8.bind(var9)(var4);
                    var4 = {};
                    var4['guildId'] = var7;
                    var4['channelId'] = var12;
                    var7 = var2.users;
                    var4['users'] = var7;
                    var7 = var2.members;
                    var4['members'] = var7;
                    var7 = var2.messages;
                    var4['messages'] = var7;
                    var9 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var7 = 16;
                    var8 = var14[var7];
                    var10 = var9.bind(var13)(var8);
                    var9 = var10.recordChannelFetchedLocal;
                    var8 = _closure1_slot0;
                    var7 = var14[var7];
                    var7 = var8.bind(var13)(var7);
                    var22 = var7.INITIAL_MESSAGE_FETCH_KEY;
                    var19 = _closure1_slot14;
                    var18 = var2.messages;
                    var24 = var10;
                    var23 = var12;
                    var21 = null;
                    var20 = null;
                    var6 = var24[var9](var23, var22, var21, var20, var19, var18, var17);
                    var6 = var3.performance;
                    var3 = var6.now;
                    var3 = var3.bind(var6)();
                    var5 = var3 - var5;
                    var3 = new Array(2);
                    var3[0] = var5;
                    var3[1] = var4;
                    return var3;
case 17:
                    return var2;
case 10:
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
case 0:
                    StartGenerator();
                    var21 = arg1;
                    var24 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var _closure4_slot0 = var21;
                    var _closure4_slot1 = var24;
                    var8 = undefined;
                    var _closure4_slot2 = var8;
                    var _closure4_slot3 = var8;
                    var _closure4_slot4 = var8;
                    var _closure4_slot5 = var8;
                    var _closure4_slot6 = var8;
                    var _closure4_slot7 = var8;
                    var _closure4_slot8 = var8;
                    var _closure4_slot9 = var8;
                    var _closure4_slot10 = var8;
                    var _closure4_slot11 = var8;
                    var _closure4_slot12 = var8;
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
                    var5 = null;
                    var4 = var5 != var2;
                    var49 = null;
                    if(!var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var49 = var2;
case 21:
                    _closure4_slot3 = var49;
                    var4 = _closure1_slot12;
                    var2 = var4.getChannelId;
                    var2 = var2.bind(var4)();
                    var4 = var5 != var2;
                    var48 = null;
                    if(!var4) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var48 = var2;
case 23:
                    _closure4_slot4 = var48;
                    var7 = global;
                    var4 = var7.performance;
                    var2 = var4.now;
                    var11 = var2.bind(var4)();
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var13 = 17;
                    var9 = var2[var13];
                    var9 = var4.bind(var8)(var9);
                    var12 = var9.loadCachedMessages;
                    var10 = var12.measureAsyncWithoutNesting;
                    var9 = function() {
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
                    var18 = var10.bind(var12)(var9);
                    var9 = var2[var13];
                    var9 = var4.bind(var8)(var9);
                    var12 = var9.fetchGuildCache;
                    var10 = var12.measureAsync;
                    var9 = function() {
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
                    var17 = var10.bind(var12)(var9);
                    var2 = var2[var13];
                    var2 = var4.bind(var8)(var2);
                    var9 = var2.fetchGuildCache;
                    var4 = var9.measureAsync;
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
                    var16 = var4.bind(var9)(var2);
                    if(!(var5 == var21)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var9 = var7.Promise;
                    var4 = var9.resolve;
                    var2 = new Array(0);
                    var15 = var4.bind(var9)(var2);
                    _fun0004_ip = 27; continue _fun0004;
case 25:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 18;
                    var2 = var9[var2];
                    var12 = var4.bind(var8)(var2);
                    var10 = var12.timeAsync;
                    var9 = '💾';
                    var4 = 'cache: private_channels';
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getAsync;
                        var2 = _closure4_slot0;
                        var1 = null;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var15 = var10.bind(var12)(var9, var4, var2);
case 27:
                    if(!(var5 != var21)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 18;
                    var2 = var9[var2];
                    var12 = var4.bind(var8)(var2);
                    var10 = var12.timeAsync;
                    var9 = '💾';
                    var4 = 'cache: user_settings';
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
                    var14 = var10.bind(var12)(var9, var4, var2);
                    _fun0004_ip = 30; continue _fun0004;
case 28:
                    var9 = var7.Promise;
                    var4 = var9.resolve;
                    var2 = {};
                    var14 = var4.bind(var9)(var2);
case 30:
                    if(!(var5 != var21)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 18;
                    var2 = var9[var2];
                    var12 = var4.bind(var8)(var2);
                    var10 = var12.timeAsync;
                    var9 = '💾';
                    var4 = 'cache: read_states';
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
                    var12 = var10.bind(var12)(var9, var4, var2);
                    _fun0004_ip = 33; continue _fun0004;
case 31:
                    var9 = var7.Promise;
                    var4 = var9.resolve;
                    var2 = new Array(0);
                    var12 = var4.bind(var9)(var2);
case 33:
                    if(!(var5 != var21)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 18;
                    var2 = var9[var2];
                    var19 = var4.bind(var8)(var2);
                    var10 = var19.timeAsync;
                    var9 = '💾';
                    var4 = 'cache: user_guild_settings';
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 22;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getAll;
                        var1 = _closure4_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10 = var10.bind(var19)(var9, var4, var2);
                    _fun0004_ip = 36; continue _fun0004;
case 34:
                    var9 = var7.Promise;
                    var4 = var9.resolve;
                    var2 = new Array(0);
                    var10 = var4.bind(var9)(var2);
case 36:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 23;
                    var19 = var9[var2];
                    var22 = var4.bind(var8)(var19);
                    var20 = 'AllCacheStores';
                    var19 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var19 = var22.bind(var8)(var20, var19);
                    var2 = var9[var2];
                    var9 = var4.bind(var8)(var2);
                    var4 = 'MobileAppDatabaseManager';
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var9.bind(var8)(var4, var2);
                    var9 = var7.Promise;
                    var4 = var9.all;
                    var2 = new Array(7);
                    var2[0] = var18;
                    var2[1] = var17;
                    var2[2] = var16;
                    var2[3] = var15;
                    var2[4] = var14;
                    var2[5] = var12;
                    var2[6] = var10;
                    var2 = var4.bind(var9)(var2);
                    SaveGenerator(address=717);
case 37:
                    return var2;
case 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var9 = _closure1_slot3;
                    var4 = 7;
                    var12 = var9.bind(var8)(var2, var4);
                    var14 = _closure1_slot3;
                    var4 = 0;
                    var10 = var12[var4];
                    var9 = 2;
                    var14 = var14.bind(var8)(var10, var9);
                    var81 = var14[var4];
                    var10 = 1;
                    var19 = var14[var10];
                    _closure4_slot5 = var19;
                    var14 = var12[var10];
                    _closure4_slot6 = var14;
                    var18 = var12[var9];
                    _closure4_slot7 = var18;
                    var9 = 3;
                    var9 = var12[var9];
                    _closure4_slot8 = var9;
                    var10 = 4;
                    var20 = var12[var10];
                    _closure4_slot9 = var20;
                    var10 = 5;
                    var17 = var12[var10];
                    _closure4_slot10 = var17;
                    var10 = 6;
                    var16 = var12[var10];
                    _closure4_slot11 = var16;
                    var12 = var7.performance;
                    var10 = var12.now;
                    var10 = var10.bind(var12)();
                    var83 = var10 - var11;
                    var12 = _closure1_slot18;
                    var11 = var12.verbose;
                    var10 = var7.HermesInternal;
                    var23 = var10.concat;
                    var84 = 'cache loaded in ';
                    var82 = 'ms (channel_history ';
                    var80 = 'ms)';
                    var10 = var84[var23](var83, var82, var81, var80, var79);
                    var10 = var11.bind(var12)(var10);
                    if(!(var5 != var19)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var12 = var7.Object;
                    var11 = var12.fromEntries;
                    var22 = var19.members;
                    var15 = var22.map;
                    var10 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.userId;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    };
                    var10 = var15.bind(var22)(var10);
                    var10 = var11.bind(var12)(var10);
                    _closure4_slot12 = var10;
                    var10 = var18.guildId;
                    var12 = var5 != var10;
                    if(!var12) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var10 = var18.channels;
                    var12 = var5 != var10;
case 43:
                    var11 = var18.guildId;
                    var15 = var7.Promise;
                    var10 = var15.prototype;
                    var10 = Object.create(var10, {constructor: {value: var15}});
                    var83 = function(arg1, arg2) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var2 = arg2;
                        var _closure5_slot1 = var2;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 27;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var3 = var2.Emitter;
                        var2 = var3.batched;
                        var1 = function() {
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 18;
                            var6 = var5[var3];
                            var1 = undefined;
                            var10 = var4.bind(var1)(var6);
                            var9 = var10.time;
                            var6 = '💾';
                            var8 = 'Dispatch Mini Cache';
                            var7 = function() {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 28;
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
                                    if(!(var6 == var5)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                                    var5 = new Array(0);
case 45:
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
                                    if(!(var6 != var5)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                                    var5 = {};
                                    var7 = _closure4_slot5;
                                    var8 = var7.channelId;
                                    var7 = _closure4_slot5;
                                    var7 = var7.messages;
                                    var5[7] = var7;
                                    _fun0005_ip = 49; continue _fun0005;
case 47:
                                    var5 = {};
case 49:
                                    var1['messages'] = var5;
                                    var5 = _closure4_slot5;
                                    var5 = var5.guildId;
                                    if(!(var6 != var5)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                                    var5 = {};
                                    var6 = _closure4_slot5;
                                    var7 = var6.guildId;
                                    var6 = _closure4_slot12;
                                    var5[6] = var6;
                                    _fun0005_ip = 52; continue _fun0005;
case 50:
                                    var5 = {};
case 52:
                                    var1['guildMembers'] = var5;
                                    var5 = _closure4_slot9;
                                    var1['userSettings'] = var5;
                                    var5 = _closure4_slot11;
                                    var1['userGuildSettings'] = var5;
                                    var4 = _closure4_slot10;
                                    var1['readStates'] = var4;
                                    var4 = var2.bind(var3)(var1);
                                    var3 = var4.then;
                                    var2 = _closure5_slot0;
                                    var1 = _closure5_slot1;
                                    var1 = var3.bind(var4)(var2, var1);
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
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var84 = var10;
                    var6 = new var84[var15](var83, var82);
                    var6 = var6 instanceof Object ? var6 : var10;
                    SaveGenerator(address=1011);
case 53:
                    return var6;
case 54:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(var10) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                    var15 = _closure1_slot18;
                    var10 = var15.verbose;
                    var23 = var7.JSON;
                    var22 = var23.stringify;
                    var47 = var22.bind(var23)(var24);
                    var46 = var5 != var21;
                    var22 = var5 == var21;
                    var45 = undefined;
                    if(var22) { _fun0004_ip = 57; continue _fun0004 }
case 58:
                    var45 = var21.name;
case 57:
                    var44 = var9.length;
                    var43 = var19.guildId;
                    var42 = var19.channelId;
                    var21 = var19.messages;
                    var41 = var21.length;
                    var21 = var19.members;
                    var40 = var21.length;
                    var19 = var19.users;
                    var39 = var19.length;
                    var18 = var18.channels;
                    var19 = var5 == var18;
                    var38 = undefined;
                    if(var19) { _fun0004_ip = 59; continue _fun0004 }
case 60:
                    var38 = var18.length;
case 59:
                    var19 = var7.Object;
                    var18 = var19.keys;
                    var18 = var18.bind(var19)(var20);
                    var55 = var18.length;
                    var53 = var17.length;
                    var51 = var16.length;
                    var7 = var7.HermesInternal;
                    var34 = var7.concat;
                    var84 = 'early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ';
                    var83 = arg2;
                    var82 = '\n          selected_guild: ';
                    var80 = '\n          selected_channel: ';
                    var78 = '\n          navigation_state: ';
                    var76 = '\n          database: ';
                    var74 = '\n            name: ';
                    var72 = '\n        data:\n          database:\n            private_channels: ';
                    var70 = '\n            channel_history:\n              guild: ';
                    var68 = '\n              channel: ';
                    var66 = '\n              messages: ';
                    var64 = '\n                members: ';
                    var62 = '\n                users: ';
                    var60 = '\n            initial_guild:\n              id: ';
                    var58 = '\n              channels: ';
                    var56 = '\n            user_settings: ';
                    var54 = '\n            read_states: ';
                    var52 = '\n            user_guild_settings: ';
                    var50 = '\n      )';
                    var81 = var49;
                    var79 = var48;
                    var77 = var47;
                    var75 = var46;
                    var73 = var45;
                    var71 = var44;
                    var69 = var43;
                    var67 = var42;
                    var65 = var41;
                    var63 = var40;
                    var61 = var39;
                    var59 = var11;
                    var57 = var38;
                    var7 = var84[var34](var83, var82, var81, var80, var79, var78, var77, var76, var75, var74, var73, var72, var71, var70, var69, var68, var67, var66, var65, var64, var63, var62, var61, var60, var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49);
                    var7 = var10.bind(var15)(var7);
                    var10 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var13];
                    var13 = var10.bind(var8)(var7);
                    var10 = var13.setEarlyCacheInfo;
                    var7 = {};
                    var14 = var14.length;
                    var7['guilds'] = var14;
                    var7 = var10.bind(var13)(var7);
                    var13 = _closure1_slot18;
                    var10 = var13.verbose;
                    var7 = 'finished dispatching CACHE_LOADED';
                    var7 = var10.bind(var13)(var7);
                    var7 = new Array(3);
                    var10 = true;
                    var7[0] = var10;
                    var10 = null;
                    if(!var12) { _fun0004_ip = 61; continue _fun0004 }
case 62:
                    var12 = var5 != var11;
                    var10 = null;
                    if(!var12) { _fun0004_ip = 61; continue _fun0004 }
case 63:
                    var10 = var11;
case 61:
                    var7[1] = var10;
                    var9 = var9.length;
                    var7[2] = var9;
                    return var7;
case 55:
                    return var6;
case 41:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 26;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = 'database:history_cache_null';
                    var6 = var7.bind(var8)(var6);
                    var7 = _closure1_slot18;
                    var6 = var7.verbose;
                    var3 = 'finished without dispatching CACHE_LOADED';
                    var3 = var6.bind(var7)(var3);
                    var3 = new Array(3);
                    var6 = false;
                    var3[0] = var6;
                    var3[1] = var5;
                    var3[2] = var4;
                    return var3;
case 39:
                    return var2;
case 19:
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
case 0:
                    StartGenerator();
                    var3 = arg1;
                    var7 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 64; continue _fun0006 }
case 20:
                    var _closure4_slot0 = var3;
                    var6 = undefined;
                    var _closure4_slot1 = var6;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                    var5 = var7.page;
                    var3 = 'private-channels';
                    if(!(var3 !== var5)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                    var3 = 'guild-channels';
                    if(!(var3 !== var5)) { _fun0006_ip = 67; continue _fun0006 }
case 69:
                    var3 = 'other';
                    if(!(var3 === var5)) { _fun0006_ip = 70; continue _fun0006 }
case 71:
                    var5 = var7.guildId;
                    var3 = '@me';
                    if(!(var3 === var5)) { _fun0006_ip = 70; continue _fun0006 }
case 72:
                    var3 = true;
                    _closure1_slot25 = var3;
                    _fun0006_ip = 70; continue _fun0006;
case 67:
                    var3 = true;
                    _closure1_slot25 = var3;
case 70:
                    var5 = _closure1_slot25;
                    if(var5) { _fun0006_ip = 73; continue _fun0006 }
case 74:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 31;
                    var5 = var9[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.getCommittedVersions;
                    var5 = var5.bind(var8)();
                    SaveGenerator(address=153);
case 75:
                    return var5;
case 76:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 77; continue _fun0006 }
case 78:
                    var8 = var5.initial_guild_id;
                    if(!(var4 == var8)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
                    var8 = var7.guildId;
case 79:
                    _closure4_slot1 = var8;
                    if(!(var4 != var8)) { _fun0006_ip = 81; continue _fun0006 }
case 23:
                    var7 = '@me';
                    if(!(var7 !== var8)) { _fun0006_ip = 81; continue _fun0006 }
case 8:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 29;
                    var7 = var9[var7];
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.tryLoadAsync;
                    var7 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 30;
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
case 82:
                    return var7;
case 83:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 84; continue _fun0006 }
case 16:
                    if(!(var4 == var7)) { _fun0006_ip = 85; continue _fun0006 }
case 86:
                    var8 = new Array(0);
                    _fun0006_ip = 87; continue _fun0006;
case 85:
                    var9 = new Array(1);
                    var9[0] = var7;
                    var8 = var9;
case 87:
                    return var8;
case 84:
                    return var7;
case 81:
                    var7 = new Array(0);
                    return var7;
case 77:
                    return var5;
case 73:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 29;
                    var3 = var7[var3];
                    var5 = var5.bind(var6)(var3);
                    var3 = var5.tryLoadAsync;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.timeAsync;
                        var3 = '💾';
                        var2 = 'cache: guilds';
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 30;
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
case 88:
                    return var2;
case 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 90; continue _fun0006 }
case 91:
                    var3 = var2;
                    if(!(var4 == var3)) { _fun0006_ip = 92; continue _fun0006 }
case 93:
                    var3 = new Array(0);
case 92:
                    return var3;
case 90:
                    return var2;
case 65:
                    var2 = new Array(0);
                    return var2;
case 64:
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
case 0:
                    StartGenerator();
                    var11 = arg1;
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 94; continue _fun0007 }
case 20:
                    var _closure4_slot0 = var11;
                    var8 = undefined;
                    var _closure4_slot1 = var8;
                    var5 = null;
                    if(!(var5 != var11)) { _fun0007_ip = 95; continue _fun0007 }
case 66:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 31;
                    var2 = var9[var2];
                    var7 = var7.bind(var8)(var2);
                    var2 = var7.getCommittedVersions;
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=74);
case 5:
                    return var2;
case 4:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0007_ip = 96; continue _fun0007 }
case 97:
                    var10 = var2.initial_guild_id;
                    var7 = var5 == var10;
                    if(!var7) { _fun0007_ip = 98; continue _fun0007 }
case 99:
                    var12 = var6.page;
                    var9 = 'guild-channels';
                    var7 = var9 === var12;
case 98:
                    if(!var7) { _fun0007_ip = 100; continue _fun0007 }
case 101:
                    var10 = var6.guildId;
case 100:
                    if(!(var5 != var11)) { _fun0007_ip = 102; continue _fun0007 }
case 103:
                    if(!(var5 != var10)) { _fun0007_ip = 102; continue _fun0007 }
case 104:
                    _closure4_slot1 = var10;
                    var5 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 29;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.tryLoadAsync;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 19;
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
case 105:
                    return var4;
case 79:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 8; continue _fun0007 }
case 106:
                    var5['channels'] = var4;
                    var5['guildId'] = var10;
                    return var5;
case 8:
                    return var4;
case 102:
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
case 96:
                    return var2;
case 95:
                    var2 = global;
                    var4 = var2.Promise;
                    var3 = var4.resolve;
                    var2 = {'channels': null, 'guildId': null};
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 94:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 88; continue _fun0008 }
case 107:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = arg2;
                    var _closure4_slot1 = var2;
                    var2 = arg3;
                    var _closure4_slot2 = var2;
                    var2 = arg4;
                    var _closure4_slot3 = var2;
                    var4 = undefined;
                    var _closure4_slot4 = var4;
                    var _closure4_slot5 = var4;
                    var _closure4_slot6 = var4;
                    var _closure4_slot7 = var4;
                    var _closure4_slot8 = var4;
                    var7 = _closure1_slot18;
                    var3 = var7.verbose;
                    var2 = 'loading late lazy cache';
                    var2 = var3.bind(var7)(var2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var9 = 17;
                    var2 = var2[var9];
                    var2 = var3.bind(var4)(var2);
                    var7 = var2.fetchLazyCache;
                    var3 = var7.measureAsync;
                    var2 = function() {
                        var1 = global;
                        var3 = var1.Promise;
                        var2 = var3.all;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 29;
                        var1 = var8[var5];
                        var6 = undefined;
                        var10 = var7.bind(var6)(var1);
                        var9 = var10.tryLoadAsync;
                        var1 = function() {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                var2 = _closure4_slot0;
                                var1 = null;
                                if(!(var1 == var2)) { _fun0009_ip = 108; continue _fun0009 }
case 109:
                                var1 = global;
                                var3 = var1.Promise;
                                var2 = var3.resolve;
                                var1 = true;
                                var1 = var2.bind(var3)(var1);
                                _fun0009_ip = 110; continue _fun0009;
case 108:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 18;
                                var3 = var3[var2];
                                var2 = undefined;
                                var6 = var4.bind(var2)(var3);
                                var5 = var6.timeAsync;
                                var4 = '💾';
                                var3 = 'cache: cache_version';
                                var2 = function() {
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 32;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.okAsync;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var1 = var5.bind(var6)(var4, var3, var2);
case 110:
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
case 0:
                                var2 = _closure4_slot0;
                                var1 = null;
                                if(!(var1 != var2)) { _fun0010_ip = 46; continue _fun0010 }
case 109:
                                var2 = _closure1_slot25;
                                if(var2) { _fun0010_ip = 46; continue _fun0010 }
case 111:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 18;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.timeAsync;
                                var3 = '💾';
                                var2 = 'cache: lazy guilds';
                                var1 = function() {
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 30;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.getAsync;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var1 = var4.bind(var5)(var3, var2, var1);
                                _fun0010_ip = 112; continue _fun0010;
case 46:
                                var2 = global;
                                var4 = var2.Promise;
                                var3 = var4.resolve;
                                var2 = new Array(0);
                                var1 = var3.bind(var4)(var2);
case 112:
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
case 0:
                                var2 = _closure4_slot0;
                                var1 = null;
                                if(!(var1 == var2)) { _fun0011_ip = 113; continue _fun0011 }
case 109:
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
                                _fun0011_ip = 114; continue _fun0011;
case 113:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 18;
                                var3 = var3[var2];
                                var2 = undefined;
                                var6 = var4.bind(var2)(var3);
                                var5 = var6.timeAsync;
                                var4 = '💾';
                                var3 = 'cache: basic_channels';
                                var2 = function() {
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 33;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.getAsync;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var1 = var5.bind(var6)(var4, var3, var2);
case 114:
                                return var1;
                            }
                        };
                        var4 = var5.bind(var6)(var4);
                        var1[2] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=132);
case 115:
                    return var2;
case 116:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 117; continue _fun0008 }
case 118:
                    var7 = _closure1_slot3;
                    var3 = 3;
                    var7 = var7.bind(var4)(var2, var3);
                    var3 = 0;
                    var3 = var7[var3];
                    _closure4_slot4 = var3;
                    var3 = 1;
                    var3 = var7[var3];
                    _closure4_slot5 = var3;
                    var3 = 2;
                    var3 = var7[var3];
                    _closure4_slot6 = var3;
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var9];
                    var3 = var7.bind(var4)(var3);
                    var8 = var3.fetchStaleChannels;
                    var7 = var8.measureAsync;
                    var3 = function() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var2 = _closure4_slot0;
                            var3 = null;
                            if(!(var3 != var2)) { _fun0012_ip = 13; continue _fun0012 }
case 109:
                            var2 = _closure4_slot6;
                            if(!(var3 != var2)) { _fun0012_ip = 13; continue _fun0012 }
case 119:
                            var1 = _closure4_slot6;
                            var1 = var1.stale;
                            var2 = var1.length;
                            var1 = 0;
                            if(!(!(var2 > var1))) { _fun0012_ip = 120; continue _fun0012 }
case 13:
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.resolve;
                            var1 = new Array(0);
                            var1 = var2.bind(var3)(var1);
                            _fun0012_ip = 121; continue _fun0012;
case 120:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 29;
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
                                        var2 = 19;
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
case 121:
                            return var1;
                        }
                    };
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=229);
case 122:
                    return var3;
case 123:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0008_ip = 124; continue _fun0008 }
case 125:
                    _closure4_slot7 = var3;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var7 = var8.bind(var4)(var7);
                    var8 = var7.loadLazyCache;
                    var7 = var8.recordStart;
                    var7 = var7.bind(var8)();
                    var8 = _closure1_slot10;
                    var7 = var8.getSocket;
                    var7 = var7.bind(var8)();
                    _closure4_slot8 = var7;
                    var6 = _closure1_slot32;
                    var5 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var1 = global;
                            var3 = var1.performance;
                            var2 = var3.now;
                            var12 = var2.bind(var3)();
                            var3 = _closure4_slot4;
                            var2 = false;
                            if(!(var2 !== var3)) { _fun0013_ip = 126; continue _fun0013 }
case 108:
                            var2 = _closure4_slot5;
                            var8 = null;
                            if(!(var8 != var2)) { _fun0013_ip = 127; continue _fun0013 }
case 128:
                            var2 = _closure4_slot6;
                            if(!(var8 != var2)) { _fun0013_ip = 127; continue _fun0013 }
case 129:
                            var2 = _closure4_slot7;
                            if(!(var8 != var2)) { _fun0013_ip = 127; continue _fun0013 }
case 3:
                            var2 = _closure4_slot4;
                            if(!(var8 == var2)) { _fun0013_ip = 130; continue _fun0013 }
case 131:
                            var2 = _closure4_slot5;
                            var2 = var2.length;
                            var3 = 0;
                            if(!(!(var2 > var3))) { _fun0013_ip = 132; continue _fun0013 }
case 99:
                            var2 = _closure4_slot6;
                            var2 = var2.all;
                            var2 = var2.length;
                            if(!(!(var2 > var3))) { _fun0013_ip = 132; continue _fun0013 }
case 130:
                            var3 = _closure1_slot23;
                            if(var3) { _fun0013_ip = 133; continue _fun0013 }
case 134:
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
                            var6 = 17;
                            var10 = var5[var6];
                            var3 = undefined;
                            var10 = var9.bind(var3)(var10);
                            var14 = var10.deserializeCache;
                            var13 = var14.measure;
                            var10 = function() {
                                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                    var1 = _closure5_slot0;
                                    var2 = var1.channels;
                                    var3 = null;
                                    if(!(var3 != var2)) { _fun0014_ip = 135; continue _fun0014 }
case 11:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 14;
                                    var2 = var5[var2];
                                    var5 = undefined;
                                    var4 = var4.bind(var5)(var2);
                                    var2 = var1.channels;
                                    var2 = var4.bind(var5)(var2);
case 135:
                                    var2 = var1.privateChannels;
                                    if(!(var3 != var2)) { _fun0014_ip = 136; continue _fun0014 }
case 137:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 14;
                                    var2 = var5[var2];
                                    var5 = undefined;
                                    var4 = var4.bind(var5)(var2);
                                    var2 = var1.privateChannels;
                                    var2 = var4.bind(var5)(var2);
case 136:
                                    var2 = var1.guildChannels;
                                    if(!(var3 != var2)) { _fun0014_ip = 76; continue _fun0014 }
case 138:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 14;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var3 = var4.bind(var2)(var3);
                                    var2 = var3.deserializeChannelEntries;
                                    var1 = var1.guildChannels;
                                    var1 = var2.bind(var3)(var1);
case 76:
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
                                var1 = 28;
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
case 0:
                                    var4 = arg2;
                                    var2 = var4[Symbol.iterator];
                                    var4 = var2().next;
                                    var1 = var4().value;
                                    var1 = var2;
                                    var6 = undefined;
                                    var3 = var1 === var6;
                                    var1 = undefined;
                                    if(var3) { _fun0015_ip = 12; continue _fun0015 }
case 139:
                                    var5 = var4().value;
                                    var4 = var2;
                                    var4 = var4 === var6;
                                    var1 = undefined;
                                    var3 = var4;
                                    if(var4) { _fun0015_ip = 12; continue _fun0015 }
case 140:
                                    var1 = var5;
                                    var3 = var4;
case 12:
                                    if(var3) { _fun0015_ip = 135; continue _fun0015 }
case 141:
                                    var2.return();
case 135:
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
case 0:
                                    var4 = arg2;
                                    var2 = var4[Symbol.iterator];
                                    var4 = var2().next;
                                    var1 = var4().value;
                                    var1 = var2;
                                    var6 = undefined;
                                    var3 = var1 === var6;
                                    var1 = undefined;
                                    if(var3) { _fun0016_ip = 12; continue _fun0016 }
case 139:
                                    var5 = var4().value;
                                    var4 = var2;
                                    var4 = var4 === var6;
                                    var1 = undefined;
                                    var3 = var4;
                                    if(var4) { _fun0016_ip = 12; continue _fun0016 }
case 140:
                                    var1 = var5;
                                    var3 = var4;
case 12:
                                    if(var3) { _fun0016_ip = 135; continue _fun0016 }
case 141:
                                    var2.return();
case 135:
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
case 0:
                                    var4 = arg2;
                                    var2 = var4[Symbol.iterator];
                                    var4 = var2().next;
                                    var1 = var4().value;
                                    var1 = var2;
                                    var6 = undefined;
                                    var3 = var1 === var6;
                                    var1 = undefined;
                                    if(var3) { _fun0017_ip = 12; continue _fun0017 }
case 139:
                                    var5 = var4().value;
                                    var4 = var2;
                                    var4 = var4 === var6;
                                    var1 = undefined;
                                    var3 = var4;
                                    if(var4) { _fun0017_ip = 12; continue _fun0017 }
case 140:
                                    var1 = var5;
                                    var3 = var4;
case 12:
                                    if(var3) { _fun0017_ip = 135; continue _fun0017 }
case 141:
                                    var2.return();
case 135:
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
                            if(!(var5 !== var4)) { _fun0013_ip = 142; continue _fun0013 }
case 143:
                            var4 = _closure4_slot6;
                            var13 = var4.stale;
                            var5 = var13.join;
                            var4 = ', ';
                            var13 = var5.bind(var13)(var4);
                            var4 = var1.HermesInternal;
                            var5 = var4.concat;
                            var4 = ' · ';
                            var36 = var5.bind(var4)(var13);
case 142:
                            var13 = _closure1_slot18;
                            var5 = var13.verbose;
                            var35 = _closure4_slot1;
                            var34 = _closure4_slot2;
                            var4 = _closure4_slot0;
                            var33 = var8 != var4;
                            var32 = _closure4_slot4;
                            var4 = var8 == var4;
                            var31 = undefined;
                            if(var4) { _fun0013_ip = 144; continue _fun0013 }
case 145:
                            var4 = _closure4_slot0;
                            var31 = var4.name;
case 144:
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
                            var5 = var6.setLazyCacheInfo;
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
case 133:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 26;
                            var6 = var5[var3];
                            var3 = undefined;
                            var9 = var4.bind(var3)(var6);
                            var6 = 'already_connected';
                            var6 = var9.bind(var3)(var6);
                            var9 = _closure1_slot18;
                            var6 = var9.log;
                            var2 = 'Skipping lazy cache; already connected.';
                            var2 = var6.bind(var9)(var2);
                            var2 = 28;
                            var2 = var5[var2];
                            var4 = var4.bind(var3)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'CACHE_LOADED_LAZY_NO_CACHE';
                            var2['type'] = var5;
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            return var2;
case 132:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 26;
                            var6 = var5[var3];
                            var3 = undefined;
                            var9 = var4.bind(var3)(var6);
                            var6 = 'database:versionless';
                            var6 = var9.bind(var3)(var6);
                            var9 = _closure1_slot18;
                            var6 = var9.log;
                            var2 = 'kv_cache was not ok (null version with values)';
                            var2 = var6.bind(var9)(var2);
                            var2 = 28;
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
case 127:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 26;
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
                            var1 = 28;
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
case 126:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 26;
                            var1 = var4[var1];
                            var2 = undefined;
                            var5 = var3.bind(var2)(var1);
                            var1 = 'database:not_ok';
                            var1 = var5.bind(var2)(var1);
                            var1 = 28;
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
                    var5 = var6.bind(var4)(var5);
                    return var4;
case 124:
                    return var3;
case 117:
                    return var2;
case 88:
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
case 0:
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
            var1 = 27;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var6 = var4.Emitter;
            var5 = var6.batched;
            var4 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0: // try_start_0
                    var2 = _closure2_slot0;
                    var4 = undefined;
                    var2 = var2.bind(var4)();
                    var2 = _closure2_slot1;
                    var3 = var2.dispatcher;
                    var2 = var3.hasStuffToDispatchNow;
                    var3 = var2.bind(var3)();
                    if(var3) { _fun0019_ip = 72; continue _fun0019 }
case 146:
                    var6 = _closure1_slot18;
                    var5 = var6.verbose;
                    var3 = 'Unpausing Dispatch Queue';
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure2_slot1;
                    var5 = var3.dispatcher;
                    var3 = var5.unpauseDispatchQueue;
                    var3 = var3.bind(var5)();
case 147: // try_end0
                    var3 = undefined;
                    return var3;
case 72: // try_start_1
                    var3 = true;
                    _closure2_slot2 = var3;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 17;
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
case 82: // try_end1
                    _fun0019_ip = 94; continue _fun0019;
case 83: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot18;
                    var3 = var4.warn;
                    var2 = 'Lazy cache has encountered error';
                    var2 = var3.bind(var4)(var2, var5);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 28;
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
case 94:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var3 = _closure2_slot2;
            if(var3) { _fun0018_ip = 148; continue _fun0018 }
case 149:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var3 = var2.loadLazyCache;
            var2 = var3.recordEnd;
            var2 = var2.bind(var3)();
case 148:
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
    var9 = 27;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var11 = var9.Store;
    var9 = function(arg1) {
        var4 = function CacheStoreClass() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
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
                if(var1) { _fun0020_ip = 150; continue _fun0020 }
case 151:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0020_ip = 152; continue _fun0020;
case 150:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 152:
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
            var6 = this;
            var5 = var6.waitFor;
            var10 = _closure1_slot11;
            var9 = _closure1_slot10;
            var8 = _closure1_slot12;
            var7 = _closure1_slot13;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
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
case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 34;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.isAuthenticated;
                var1 = var1.bind(var2)();
                if(var1) { _fun0021_ip = 69; continue _fun0021 }
case 153:
                var4 = _closure1_slot18;
                var2 = var4.log;
                var1 = 'Not writing cache because not authenticated';
                var1 = var2.bind(var4)(var1);
                var1 = false;
                _fun0021_ip = 154; continue _fun0021;
case 69:
                var2 = _closure1_slot19;
                if(var2) { _fun0021_ip = 114; continue _fun0021 }
case 3:
                var2 = arg1;
                var4 = !var2;
                if(!var4) { _fun0021_ip = 72; continue _fun0021 }
case 155:
                var2 = _closure1_slot24;
                var4 = !var2;
case 72:
                var2 = !var4;
                if(!var4) { _fun0021_ip = 101; continue _fun0021 }
case 156:
                var6 = _closure1_slot18;
                var5 = var6.log;
                var4 = 'Not writing cache because never connected';
                var4 = var5.bind(var6)(var4);
                var2 = false;
case 101:
                _fun0021_ip = 157; continue _fun0021;
case 114:
                var5 = _closure1_slot18;
                var4 = var5.log;
                var3 = 'Not writing cache because caches cleared';
                var3 = var4.bind(var5)(var3);
                var2 = false;
case 157:
                var1 = var2;
case 154:
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
case 0:
                    StartGenerator();
                    var13 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0022_ip = 145; continue _fun0022 }
case 158:
                    var _closure4_slot0 = var13;
                    var5 = undefined;
                    var3 = undefined;
                    var9 = undefined;
                    var _closure4_slot1 = var5;
                    var10 = undefined;
                    var _closure4_slot2 = var5;
                    var8 = undefined;
                    var7 = undefined;
                    var12 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var11 = 35;
                    var11 = var6[var11];
                    var14 = var12.bind(var5)(var11);
                    var12 = var14.callOnce;
                    var11 = arg2;
                    var3 = var12.bind(var14)(var11);
                    var11 = _closure1_slot1;
                    var12 = 17;
                    var14 = var6[var12];
                    var16 = var11.bind(var5)(var14);
                    var15 = var16.setInitialPage;
                    var14 = var13.page;
                    var14 = var15.bind(var16)(var14);
                    var14 = var13.guildId;
                    var6 = var6[var12];
                    var13 = var11.bind(var5)(var6);
                    var11 = var13.setInitialGuildId;
                    var16 = null;
                    var15 = var16 != var14;
                    var6 = null;
                    if(!var15) { _fun0022_ip = 47; continue _fun0022 }
case 157:
                    var15 = '@me';
                    var6 = null;
                    if(!(var15 !== var14)) { _fun0022_ip = 47; continue _fun0022 }
case 21:
                    var6 = var14;
case 47:
                    var6 = var11.bind(var13)(var6);
                    var11 = _closure1_slot20;
                    var6 = 'initializing';
                    if(!(var6 === var11)) { _fun0022_ip = 159; continue _fun0022 }
case 7: // try_start_0
                    var11 = _closure1_slot11;
                    var6 = var11.getId;
                    var15 = var6.bind(var11)();
                    var9 = var15;
                    _closure4_slot1 = var15;
                    var11 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var13 = 36;
                    var13 = var6[var13];
                    var14 = var11.bind(var5)(var13);
                    var13 = var14.carefullyOpenDatabase;
                    var13 = var13.bind(var14)(var15);
                    var10 = var13;
                    _closure4_slot2 = var13;
                    var6 = var6[var12];
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
                    SaveGenerator(address=271);
case 160:
                    return var6;
case 161:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=10);
                    if(var11) { _fun0022_ip = 162; continue _fun0022 }
case 163:
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
                    if(var11) { _fun0022_ip = 164; continue _fun0022 }
case 165:
                    var11 = function dontLoadLateLazyCache() {
                        var3 = _closure1_slot32;
                        var2 = undefined;
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 28;
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
                    SaveGenerator(address=333);
case 166:
                    return var11;
case 25:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(!var12) { _fun0022_ip = 167; continue _fun0022 }
case 168: // try_end0
                    return var11;
case 164: // try_start_1
                    var20 = var10;
                    var19 = var9;
                    var18 = var8;
                    var17 = var7;
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
                    var21 = undefined;
                    var7 = var21[var7](var20, var19, var18, var17, var16);
                    SaveGenerator(address=369);
case 169:
                    return var7;
case 170:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0022_ip = 171; continue _fun0022 }
case 167: // try_end1
                    _fun0022_ip = 31; continue _fun0022;
case 171:
                    return var7;
case 162:
                    return var6;
case 172: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    var9 = _closure1_slot18;
                    var8 = var9.error;
                    var7 = var10.stack;
                    var6 = 'clearing cache. exception encountered while loading cache.';
                    var6 = var8.bind(var9)(var6, var10, var7);
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 26;
                    var6 = var8[var6];
                    var9 = var7.bind(var5)(var6);
                    var6 = 'cache:exception';
                    var6 = var9.bind(var5)(var6, var10);
                    var6 = var3;
                    var6 = var6.bind(var5)();
                    var6 = 28;
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
case 31:
                    return var5;
case 159:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 26;
                    var4 = var7[var4];
                    var6 = var6.bind(var5)(var4);
                    var4 = 'cache:lazy_cache_not_initializing';
                    var4 = var6.bind(var5)(var4);
                    var3 = var3.bind(var5)();
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = function() {
                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getSocket;
                            var3 = var1.bind(var2)();
                            var2 = null;
                            var5 = var2 == var3;
                            var1 = undefined;
                            if(var5) { _fun0023_ip = 68; continue _fun0023 }
case 173:
                            var3 = var3.dispatcher;
                            var2 = var2 == var3;
                            var1 = undefined;
                            if(var2) { _fun0023_ip = 68; continue _fun0023 }
case 140:
                            var2 = var3.unpauseDispatchQueue;
                            var1 = var2.bind(var3)();
case 68:
                            return var1;
                        }
                    };
                    var2 = 0;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = undefined;
                    return var2;
case 145:
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
    var4 = 28;
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
    var5 = 37;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/cache/CacheStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ENABLE_CACHE_STORE'] = var2;
    return var1;
})();