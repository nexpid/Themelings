// app/modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot12 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function GlobalDiscoveryServersFeaturedSearchManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot6;
                var4 = _closure2_slot0;
                var3 = undefined;
                var8 = var8.bind(var3)(var5, var4);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)(var4);
                var4 = _closure1_slot7;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var3)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var4.bind(var3)(var5, var1);
                var _closure3_slot0 = var1;
                var4 = {};
                var5 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4['POST_CONNECTION_OPEN'] = var5;
                var1['actions'] = var4;
                var4 = global;
                var4 = var4.Set;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var14 = var5;
                var4 = new var14[var4](var13);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['queue'] = var4;
                var4 = false;
                var1['isFetchEnabled'] = var4;
                var4 = function() {
                    var1 = _closure3_slot0;
                    var2 = true;
                    var1['isFetchEnabled'] = var2;
                    var3 = var1.queue;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var4 = arg1;
                            var1 = _closure1_slot11;
                            if(!(var4 !== var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var3 = _closure3_slot0;
                            var2 = var3.fetchCategoryFeaturedGuilds;
                            var1 = {};
                            var1['categoryId'] = var4;
                            var1 = var2.bind(var3)(var1);
                            _fun0003_ip = 11; continue _fun0003;
case 9:
                            var2 = _closure3_slot0;
                            var1 = var2.fetchFeaturedGuilds;
                            var1 = var1.bind(var2)();
case 11:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleConnectionOpen'] = var4;
                var4 = function() {
                    var4 = _closure1_slot4;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                StartGenerator();
                                var5 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                                var3 = _closure3_slot0;
                                var3 = var3.isFetchEnabled;
                                if(var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                                var2 = _closure3_slot0;
                                var4 = var2.queue;
                                var3 = var4.add;
                                var2 = _closure1_slot11;
                                var2 = var3.bind(var4)(var2);
                                _fun0004_ip = 16; continue _fun0004;
case 14:
                                var3 = null;
                                var6 = var3 == var5;
                                var4 = undefined;
                                var2 = undefined;
                                if(var6) { _fun0004_ip = 17; continue _fun0004 }
case 5:
                                var2 = var5.forceRefresh;
case 17:
                                var3 = var3 != var2;
                                if(!var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                                var3 = var2;
case 18:
                                var7 = _closure1_slot10;
                                var6 = var7.getLastFetchTimestamp;
                                var5 = {};
                                var8 = _closure1_slot11;
                                var5['categoryId'] = var8;
                                var6 = var6.bind(var7)(var5);
                                if(var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var3 = 9;
                                var3 = var7[var3];
                                var5 = var5.bind(var4)(var3);
                                var3 = var5.isStaleFeaturedGuilds;
                                var3 = var3.bind(var5)(var6);
                                if(!var3) { _fun0004_ip = 16; continue _fun0004 }
case 20:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot3;
                                var3 = 10;
                                var5 = var5[var3];
                                var7 = var6.bind(var4)(var5);
                                var6 = var7.dispatch;
                                var5 = {'type': 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START', 'categoryId': null, 'reset': true};
                                var8 = _closure1_slot11;
                                var5['categoryId'] = var8;
                                var8 = true;
                                var5 = var6.bind(var7)(var5);
case 22: // try_start_0
                                var13 = _closure1_slot0;
                                var14 = _closure1_slot3;
                                var5 = 11;
                                var5 = var14[var5];
                                var5 = var13.bind(var4)(var5);
                                var7 = var5.HTTP;
                                var6 = var7.get;
                                var5 = {};
                                var9 = _closure1_slot12;
                                var9 = var9.GUILD_DISCOVERY;
                                var5['url'] = var9;
                                var10 = _closure1_slot1;
                                var9 = 12;
                                var9 = var14[var9];
                                var11 = var10.bind(var4)(var9);
                                var10 = var11.stringify;
                                var9 = {};
                                var12 = 0;
                                var9['offset'] = var12;
                                var12 = 13;
                                var12 = var14[var12];
                                var12 = var13.bind(var4)(var12);
                                var12 = var12.GlobalDiscoveryServersLimits;
                                var12 = var12.FEATURED_DEFAULT_LIMIT;
                                var9['limit'] = var12;
                                var9 = var10.bind(var11)(var9);
                                var5['query'] = var9;
                                var5['oldFormErrors'] = var8;
                                var8 = false;
                                var5['rejectWithError'] = var8;
                                var5 = var6.bind(var7)(var5);
                                SaveGenerator(address=350);
case 23:
                                return var5;
case 24:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                                if(var6) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                                var6 = var5.body;
                                var9 = var6.total;
                                var6 = var5.body;
                                var10 = var6.guilds;
                                var8 = var10.map;
                                var11 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var7 = 9;
                                var7 = var6[var7];
                                var7 = var11.bind(var4)(var7);
                                var7 = var7.fromDiscoverableGuildServer;
                                var10 = var8.bind(var10)(var7);
                                var7 = _closure1_slot1;
                                var6 = var6[var3];
                                var8 = var7.bind(var4)(var6);
                                var7 = var8.dispatch;
                                var6 = {};
                                var11 = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS';
                                var6['type'] = var11;
                                var11 = _closure1_slot11;
                                var6['categoryId'] = var11;
                                var6['guilds'] = var10;
                                var6['total'] = var9;
                                var6 = var7.bind(var8)(var6);
case 27: // try_end0
                                _fun0004_ip = 16; continue _fun0004;
case 25:
                                return var5;
case 28: // catch_target0
                                CatchBlockStart(arg_register=8);
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var3 = var6[var3];
                                var8 = var5.bind(var4)(var3);
                                var7 = var8.dispatch;
                                var3 = {};
                                var5 = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE';
                                var3['type'] = var5;
                                var5 = _closure1_slot11;
                                var3['categoryId'] = var5;
                                var3['error'] = var9;
                                var3 = var7.bind(var8)(var3);
                                var3 = _closure1_slot2;
                                var2 = 14;
                                var2 = var6[var2];
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.trackGuildDiscoveryGetFeaturedGuildsFailed;
                                var2 = {};
                                var2['categoryId'] = var5;
                                var2 = var3.bind(var4)(var2);
case 16:
                                var2 = undefined;
                                return var2;
case 12:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var4 = var4.bind(var3)();
                var1['fetchFeaturedGuilds'] = var4;
                var2 = function() {
                    var4 = _closure1_slot4;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0005_ip = 29; continue _fun0005 }
case 13:
                                var7 = var2.categoryId;
                                var5 = var2.forceRefresh;
                                var3 = undefined;
                                if(!(var5 === var3)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                                var5 = false;
case 30:
                                SaveGenerator(address=37);
case 32:
                                return var3;
case 33:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                                var6 = _closure3_slot0;
                                var6 = var6.isFetchEnabled;
                                if(var6) { _fun0005_ip = 18; continue _fun0005 }
case 36:
                                var4 = _closure3_slot0;
                                var8 = var4.queue;
                                var6 = var8.add;
                                var4 = var7;
                                var4 = var6.bind(var8)(var4);
                                _fun0005_ip = 37; continue _fun0005;
case 18:
                                var9 = _closure1_slot10;
                                var8 = var9.getLastFetchTimestamp;
                                var6 = {};
                                var10 = var7;
                                var6['categoryId'] = var10;
                                var8 = var8.bind(var9)(var6);
                                if(var5) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                                var6 = _closure1_slot0;
                                var9 = _closure1_slot3;
                                var5 = 9;
                                var5 = var9[var5];
                                var6 = var6.bind(var3)(var5);
                                var5 = var6.isStaleFeaturedGuilds;
                                var5 = var5.bind(var6)(var8);
                                if(!var5) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                                var8 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var5 = 10;
                                var6 = var6[var5];
                                var9 = var8.bind(var3)(var6);
                                var8 = var9.dispatch;
                                var6 = {'type': 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START', 'categoryId': null, 'reset': true};
                                var10 = var7;
                                var6['categoryId'] = var10;
                                var10 = true;
                                var6 = var8.bind(var9)(var6);
case 40: // try_start_0
                                var8 = _closure1_slot0;
                                var13 = _closure1_slot3;
                                var6 = 11;
                                var6 = var13[var6];
                                var6 = var8.bind(var3)(var6);
                                var9 = var6.HTTP;
                                var8 = var9.get;
                                var6 = {};
                                var11 = _closure1_slot12;
                                var11 = var11.GUILD_DISCOVERY;
                                var6['url'] = var11;
                                var12 = _closure1_slot1;
                                var11 = 12;
                                var11 = var13[var11];
                                var13 = var12.bind(var3)(var11);
                                var12 = var13.stringify;
                                var11 = {};
                                var15 = var7;
                                var14 = new Array(1);
                                var14[0] = var15;
                                var11['categories'] = var14;
                                var11 = var12.bind(var13)(var11);
                                var6['query'] = var11;
                                var6['oldFormErrors'] = var10;
                                var10 = false;
                                var6['rejectWithError'] = var10;
                                var6 = var8.bind(var9)(var6);
                                SaveGenerator(address=329);
case 41:
                                return var6;
case 42:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                                if(var8) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                                var8 = var6.body;
                                var11 = var8.total;
                                var8 = var6.body;
                                var12 = var8.guilds;
                                var10 = var12.map;
                                var13 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var9 = 9;
                                var9 = var8[var9];
                                var9 = var13.bind(var3)(var9);
                                var9 = var9.fromDiscoverableGuildServer;
                                var12 = var10.bind(var12)(var9);
                                var9 = _closure1_slot1;
                                var8 = var8[var5];
                                var10 = var9.bind(var3)(var8);
                                var9 = var10.dispatch;
                                var8 = {};
                                var13 = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS';
                                var8['type'] = var13;
                                var13 = var7;
                                var8['categoryId'] = var13;
                                var8['guilds'] = var12;
                                var8['total'] = var11;
                                var8 = var9.bind(var10)(var8);
case 45: // try_end0
                                _fun0005_ip = 37; continue _fun0005;
case 43:
                                return var6;
case 46: // catch_target0
                                CatchBlockStart(arg_register=9);
                                var8 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var5 = var6[var5];
                                var9 = var8.bind(var3)(var5);
                                var8 = var9.dispatch;
                                var5 = {};
                                var11 = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE';
                                var5['type'] = var11;
                                var5['categoryId'] = var7;
                                var5['error'] = var10;
                                var5 = var8.bind(var9)(var5);
                                var5 = _closure1_slot2;
                                var4 = 14;
                                var4 = var6[var4];
                                var6 = var5.bind(var3)(var4);
                                var5 = var6.trackGuildDiscoveryGetFeaturedGuildsFailed;
                                var4 = {};
                                var4['categoryId'] = var7;
                                var4 = var5.bind(var6)(var4);
case 37:
                                return var3;
case 34:
                                return var2;
case 29:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = var2.bind(var3)();
                var1['fetchCategoryFeaturedGuilds'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot9;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot5;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();