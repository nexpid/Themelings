// app/utils/StoreUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var9 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var10 = dependencyMap;
        var _closure1_slot0 = var9;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var10;
        var1 = function _httpGetWithCountryCodeQuery() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        var11 = arg1;
                        var5 = arguments[1];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 623; continue _fun0002 }
 18:
                        var7 = undefined;
                        if(!(var5 === var7)) { _fun0002_ip = 26; continue _fun0002 }
 24:
                        var5 = true;
 26:
                        SaveGenerator(address=30);
 28:
                        return var7;
 30:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 620; continue _fun0002 }
 39:
                        var6 = _closure1_slot4;
                        var3 = var6.isAuthenticated;
                        var3 = var3.bind(var6)();
                        if(!var5) { _fun0002_ip = 309; continue _fun0002 }
 62:
                        if(!var3) { _fun0002_ip = 309; continue _fun0002 }
 68:
                        var12 = new Array(0);
                        var3 = _closure1_slot6;
                        var3 = var3.hasFetchedPaymentSources;
                        if(var3) { _fun0002_ip = 145; continue _fun0002 }
 87:
                        var5 = var12.push;
                        var3 = _closure1_slot5;
                        var3 = var3.paymentSourcesFetchRequest;
                        var6 = null;
                        if(!(var6 == var3)) { _fun0002_ip = 140; continue _fun0002 }
 110:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 10;
                        var6 = var10[var6];
                        var9 = var9.bind(var7)(var6);
                        var6 = var9.fetchPaymentSources;
                        var3 = var6.bind(var9)();
 140:
                        var3 = var5.bind(var12)(var3);
 145:
                        var3 = _closure1_slot5;
                        var3 = var3.ipCountryCodeLoaded;
                        if(var3) { _fun0002_ip = 198; continue _fun0002 }
 158:
                        var5 = var12.push;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 10;
                        var3 = var9[var3];
                        var6 = var6.bind(var7)(var3);
                        var3 = var6.fetchIpCountryCode;
                        var3 = var3.bind(var6)();
                        var3 = var5.bind(var12)(var3);
 198:
                        var5 = var12.push;
                        var3 = function waitForSubscriptionsToBeFetched() {
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = function() {
                                var4 = _closure1_slot3;
                                var3 = undefined;
                                var2 = function* (arg1) {
                                    var1 = function* anon_0_(arg1) {
                                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                            StartGenerator();
                                            var3 = arg1;
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0003_ip = 126; continue _fun0003 }
 12:
                                            var _closure8_slot0 = var3;
                                            var2 = undefined;
                                            var _closure8_slot1 = var2;
                                            var7 = _closure1_slot7;
                                            var6 = var7.hasFetchedSubscriptions;
                                            var6 = var6.bind(var7)();
                                            if(var6) { _fun0003_ip = 119; continue _fun0003 }
 42:
                                            var6 = _closure1_slot5;
                                            var6 = var6.isSubscriptionFetching;
                                            if(var6) { _fun0003_ip = 104; continue _fun0003 }
 55:
                                            var6 = _closure1_slot0;
                                            var7 = _closure1_slot2;
                                            var4 = 10;
                                            var4 = var7[var4];
                                            var6 = var6.bind(var2)(var4);
                                            var4 = var6.fetchSubscriptions;
                                            var4 = var4.bind(var6)();
                                            SaveGenerator(address=89);
 87:
                                            return var4;
 89:
                                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                                            if(var6) { _fun0003_ip = 101; continue _fun0003 }
 95:
                                            var6 = var3.bind(var2)();
                                            _fun0003_ip = 123; continue _fun0003;
 101:
                                            return var4;
 104:
                                            var4 = function wait() {
                                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                                    var1 = _closure1_slot5;
                                                    var2 = var1.isSubscriptionFetching;
                                                    if(var2) { _fun0004_ip = 31; continue _fun0004 }
 19:
                                                    var3 = _closure8_slot0;
                                                    var2 = undefined;
                                                    var2 = var3.bind(var2)();
                                                    _fun0004_ip = 54; continue _fun0004;
 31:
                                                    var2 = global;
                                                    var4 = var2.setTimeout;
                                                    var3 = _closure8_slot1;
                                                    var2 = undefined;
                                                    var1 = 50;
                                                    var1 = var4.bind(var2)(var3, var1);
 54:
                                                    var1 = undefined;
                                                    return var1;
                                                }
                                            };
                                            _closure8_slot1 = var4;
                                            var4 = var4.bind(var2)();
                                            _fun0003_ip = 123; continue _fun0003;
 119:
                                            var3 = var3.bind(var2)();
 123:
                                            return var2;
 126:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var2 = var4.bind(var3)(var2);
                                var _closure6_slot0 = var2;
                                var1 = function() {
                                    var1 = undefined;
                                    var4 = _closure6_slot0;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                return var1;
                            };
                            var1 = undefined;
                            var4 = var2.bind(var1)();
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {constructor: {value: var3}});
                            var5 = var2;
                            var1 = new var5[var3](var4, var3);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        };
                        var3 = var3.bind(var7)();
                        var3 = var5.bind(var12)(var3);
                        var9 = global;
                        var6 = var9.Promise;
                        var5 = var6.race;
                        var10 = var9.Promise;
                        var3 = var10.allSettled;
                        var10 = var3.bind(var10)(var12);
                        var3 = new Array(2);
                        var3[0] = var10;
                        var10 = var9.Promise;
                        var9 = var10.prototype;
                        var9 = Object.create(var9, {constructor: {value: var10}});
                        var14 = function(arg1) {
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = arg1;
                            var1 = 10000;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var15 = var9;
                        var8 = new var15[var10](var14, var13);
                        var8 = var8 instanceof Object ? var8 : var9;
                        var3[1] = var8;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address=300);
 298:
                        return var3;
 300:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 617; continue _fun0002 }
 309:
                        var6 = _closure1_slot6;
                        var5 = var6.getDefaultBillingCountryCode;
                        var6 = var5.bind(var6)();
                        var5 = _closure1_slot6;
                        var5 = var5.defaultPaymentSource;
                        var8 = null;
                        var10 = var8 == var5;
                        var9 = undefined;
                        if(var10) { _fun0002_ip = 351; continue _fun0002 }
 346:
                        var9 = var5.id;
 351:
                        var10 = var8 != var9;
                        var5 = null;
                        if(!var10) { _fun0002_ip = 363; continue _fun0002 }
 360:
                        var5 = var9;
 363:
                        var10 = _closure1_slot7;
                        var9 = var10.getPremiumTypeSubscription;
                        var9 = var9.bind(var10)();
                        var10 = var8 != var9;
                        if(!var10) { _fun0002_ip = 394; continue _fun0002 }
 384:
                        var12 = var9.paymentSourceId;
                        var10 = var8 != var12;
 394:
                        if(!var10) { _fun0002_ip = 403; continue _fun0002 }
 397:
                        var5 = var9.paymentSourceId;
 403:
                        if(!(var8 === var6)) { _fun0002_ip = 432; continue _fun0002 }
 407:
                        var9 = _closure1_slot5;
                        var10 = var9.ipCountryCode;
                        var12 = var8 != var10;
                        var9 = null;
                        if(!var12) { _fun0002_ip = 429; continue _fun0002 }
 426:
                        var9 = var10;
 429:
                        var6 = var9;
 432:
                        var9 = {};
                        if(!(var8 != var6)) { _fun0002_ip = 444; continue _fun0002 }
 438:
                        var9['country_code'] = var6;
 444:
                        if(!(var8 != var5)) { _fun0002_ip = 454; continue _fun0002 }
 448:
                        var9['payment_source_id'] = var5;
 454:
                        if(!(var8 == var6)) { _fun0002_ip = 465; continue _fun0002 }
 458:
                        var6 = var11;
                        if(!(var8 != var5)) { _fun0002_ip = 543; continue _fun0002 }
 465:
                        var10 = 'string';
                        var8 = typeof var11;
                        var5 = var11;
                        if(!(var10 === var8)) { _fun0002_ip = 498; continue _fun0002 }
 479:
                        var8 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        var8['url'] = var11;
                        var5 = var8;
 498:
                        var8 = var5.query;
                        var8 = typeof var8;
                        if(!(var10 !== var8)) { _fun0002_ip = 581; continue _fun0002 }
 510:
                        var8 = {};
                        var14 = var8;
                        var13 = var9;
                        var9 = copyDataProperties(var14, var13);
                        var13 = var5.query;
                        var14 = var8;
                        var9 = copyDataProperties(var14, var13);
                        var5['query'] = var8;
                        var6 = var5;
 543:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 11;
                        var4 = var8[var4];
                        var4 = var5.bind(var7)(var4);
                        var5 = var4.HTTP;
                        var4 = var5.get;
                        var4 = var4.bind(var5)(var6);
                        return var4;
 581:
                        var4 = global;
                        var6 = var4.Error;
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {constructor: {value: var6}});
                        var14 = 'string query not supported';
                        var15 = var5;
                        var4 = new var15[var6](var14, var13);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
 617:
                        return var3;
 620:
                        return var2;
 623:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot17 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot17 = var1;
        var5 = function getNowPlayingReason(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg3;
                var1 = arg2;
                var _closure2_slot0 = var1;
                var3 = var4.getNowPlaying;
                var1 = arg1;
                var6 = var3.bind(var4)(var1);
                var1 = null;
                if(!(var1 == var6)) { _fun0005_ip = 36; continue _fun0005 }
 34:
                var6 = {};
 36:
                var _closure2_slot1 = var6;
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 14;
                var3 = var9[var3];
                var8 = undefined;
                var5 = var5.bind(var8)(var3);
                var3 = var5.keys;
                var6 = var3.bind(var5)(var6);
                var5 = var6.map;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var3 = _closure2_slot0;
                        var2 = var3.getUser;
                        var1 = arg1;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        var2 = var1 == var3;
                        if(var2) { _fun0006_ip = 63; continue _fun0006 }
 30:
                        var2 = {};
                        var2['user'] = var3;
                        var4 = _closure2_slot1;
                        var3 = var3.id;
                        var3 = var4[var3];
                        var3 = var3.startedPlaying;
                        var2['startTime'] = var3;
                        var1 = var2;
 63:
                        return var1;
                    }
                };
                var6 = var5.bind(var6)(var3);
                var5 = var6.filter;
                var7 = _closure1_slot0;
                var3 = 15;
                var3 = var9[var3];
                var3 = var7.bind(var8)(var3);
                var3 = var3.isNotNullish;
                var5 = var5.bind(var6)(var3);
                var3 = var5.sort;
                var2 = function(arg1, arg2) {
                    var1 = arg2;
                    var2 = var1.startTime;
                    var1 = arg1;
                    var1 = var1.startTime;
                    var1 = var2 - var1;
                    return var1;
                };
                var3 = var3.bind(var5)(var2);
                var5 = var3.length;
                var2 = 0;
                var1 = null;
                if(!(var2 !== var5)) { _fun0005_ip = 175; continue _fun0005 }
 151:
                var2 = {};
                var4 = _closure1_slot10;
                var4 = var4.NOW_PLAYING;
                var2['type'] = var4;
                var2['userInfo'] = var3;
                var1 = var2;
 175:
                return var1;
            }
        };
        var _closure1_slot18 = var5;
        var4 = function getEverPlayedReason(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arg3;
                var1 = arg2;
                var _closure2_slot0 = var1;
                var3 = var4.getStatisticsForApplication;
                var1 = arg1;
                var5 = var3.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var5)) { _fun0007_ip = 143; continue _fun0007 }
 32:
                var4 = var5.map;
                var3 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var3 = arg1;
                        var4 = _closure2_slot0;
                        var2 = var4.getUser;
                        var1 = var3.user_id;
                        var4 = var2.bind(var4)(var1);
                        var1 = null;
                        var2 = var1 == var4;
                        if(var2) { _fun0008_ip = 75; continue _fun0008 }
 36:
                        var2 = {};
                        var2['user'] = var4;
                        var4 = global;
                        var5 = var4.Date;
                        var4 = var5.parse;
                        var3 = var3.last_played_at;
                        var3 = var4.bind(var5)(var3);
                        var2['endTime'] = var3;
                        var1 = var2;
 75:
                        return var1;
                    }
                };
                var6 = var4.bind(var5)(var3);
                var4 = var6.filter;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 15;
                var7 = var7[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var7);
                var3 = var3.isNotNullish;
                var4 = var4.bind(var6)(var3);
                var3 = var4.sort;
                var2 = function(arg1, arg2) {
                    var1 = arg2;
                    var2 = var1.endTime;
                    var1 = arg1;
                    var1 = var1.endTime;
                    var1 = var2 - var1;
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var6 = var4.length;
                var3 = 0;
                var2 = null;
                if(!(var3 !== var6)) { _fun0007_ip = 141; continue _fun0007 }
 117:
                var3 = {};
                var5 = _closure1_slot10;
                var5 = var5.EVER_PLAYED;
                var3['type'] = var5;
                var3['userInfo'] = var4;
                var2 = var3;
 141:
                return var2;
 143:
                return var1;
            }
        };
        var _closure1_slot19 = var4;
        var1 = global;
        var11 = var1.Object;
        var7 = var11.defineProperty;
        var6 = {};
        var1 = true;
        var6['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var11)(var3, var1, var6);
        var1 = 0;
        var6 = var10[var1];
        var1 = undefined;
        var6 = var8.bind(var1)(var6);
        var _closure1_slot3 = var6;
        var6 = 1;
        var6 = var10[var6];
        var6 = var8.bind(var1)(var6);
        var _closure1_slot4 = var6;
        var6 = 2;
        var6 = var10[var6];
        var6 = var8.bind(var1)(var6);
        var _closure1_slot5 = var6;
        var6 = 3;
        var7 = var10[var6];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot6 = var7;
        var7 = 4;
        var7 = var10[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot7 = var7;
        var7 = 5;
        var7 = var10[var7];
        var7 = var9.bind(var1)(var7);
        var11 = var7.Endpoints;
        var _closure1_slot8 = var11;
        var11 = var7.OperatingSystems;
        var _closure1_slot9 = var11;
        var11 = var7.StoreRecommendationTypes;
        var _closure1_slot10 = var11;
        var11 = var7.Routes;
        var _closure1_slot11 = var11;
        var11 = var7.SKUAccessTypes;
        var _closure1_slot12 = var11;
        var7 = var7.SKUFlags;
        var _closure1_slot13 = var7;
        var7 = 6;
        var7 = var10[var7];
        var8 = var8.bind(var1)(var7);
        var7 = var8.shim;
        var7 = var7.bind(var8)();
        var8 = 7;
        var7 = var10[var8];
        var7 = var9.bind(var1)(var7);
        var7 = var7.isMobile;
        var7 = !var7;
        if(!var7) { _fun0001_ip = 302; continue _fun0001 }
 284:
        var8 = var10[var8];
        var8 = var9.bind(var1)(var8);
        var8 = var8.isTablet;
        var7 = !var8;
 302:
        if(!var7) { _fun0001_ip = 337; continue _fun0001 }
 305:
        var8 = 8;
        var8 = var10[var8];
        var11 = var9.bind(var1)(var8);
        var8 = var11.getChromeVersion;
        var11 = var8.bind(var11)();
        var8 = -1;
        var7 = var8 !== var11;
 337:
        var _closure1_slot14 = var7;
        var8 = new Array(0);
        var _closure1_slot15 = var8;
        var8 = new Array(0);
        var _closure1_slot16 = var8;
        var8 = 19;
        var8 = var10[var8];
        var10 = var9.bind(var1)(var8);
        var9 = var10.fileFinishedImporting;
        var8 = 'utils/StoreUtils.tsx';
        var8 = var9.bind(var10)(var8);
        var3['SUPPORTS_WEBP'] = var7;
        var3['RECENTLY_RELEASED_MONTHS_THRESHOLD'] = var6;
        var6 = function getStoreListingLocation(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var8 = arg1;
                var1 = arg2;
                var4 = var1.analyticsSource;
                var3 = var1.analyticsProperties;
                var10 = var1.storeListingId;
                var5 = var1.slug;
                var7 = var1.channelId;
                var6 = var1.guildId;
                var2 = {};
                var1 = {};
                var1['analyticsSource'] = var4;
                var1['analyticsProperties'] = var3;
                var2['state'] = var1;
                var3 = null;
                var4 = var3 != var10;
                var1 = '';
                if(!var4) { _fun0009_ip = 95; continue _fun0009 }
 71:
                var4 = global;
                var4 = var4.HermesInternal;
                var9 = var4.concat;
                var4 = '?store_listing_id=';
                var1 = var9.bind(var4)(var10);
 95:
                var2['search'] = var1;
                var1 = {};
                if(!(var3 != var7)) { _fun0009_ip = 110; continue _fun0009 }
 106:
                if(!(var3 == var6)) { _fun0009_ip = 131; continue _fun0009 }
 110:
                var4 = _closure1_slot11;
                var3 = var4.APPLICATION_STORE_LISTING_SKU;
                var3 = var3.bind(var4)(var8, var5);
                _fun0009_ip = 151; continue _fun0009;
 131:
                var5 = _closure1_slot11;
                var4 = var5.CHANNEL;
                var3 = var4.bind(var5)(var6, var7, var8);
 151:
                var1['pathname'] = var3;
                var13 = var1;
                var12 = var2;
                var2 = copyDataProperties(var13, var12);
                return var1;
            }
        };
        var3['getStoreListingLocation'] = var6;
        var6 = function getApplicationStoreListingLocation(arg1, arg2) {
            var1 = arg2;
            var4 = var1.analyticsSource;
            var3 = var1.analyticsProperties;
            var7 = var1.slug;
            var1 = {};
            var6 = _closure1_slot11;
            var5 = var6.APPLICATION_STORE_LISTING_APPLICATION;
            var2 = arg1;
            var2 = var5.bind(var6)(var2, var7);
            var1['pathname'] = var2;
            var2 = {};
            var2['analyticsSource'] = var4;
            var2['analyticsProperties'] = var3;
            var1['state'] = var2;
            return var1;
        };
        var3['getApplicationStoreListingLocation'] = var6;
        var6 = function getAssetURL(arg1, arg2, arg3, arg4) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var15 = arg1;
                var1 = arg2;
                var7 = arg3;
                var14 = arg4;
                var2 = global;
                var3 = var2.window;
                var3 = var3.GLOBAL_ENV;
                var13 = var3.CDN_HOST;
                var4 = null;
                if(!(var4 == var14)) { _fun0010_ip = 107; continue _fun0010 }
 38:
                var5 = var1.mimeType;
                if(var5) { _fun0010_ip = 53; continue _fun0010 }
 47:
                var5 = var1.mime_type;
 53:
                var6 = 'mp4';
                var3 = 'video/quicktime';
                var14 = var6;
                if(!(var3 !== var5)) { _fun0010_ip = 107; continue _fun0010 }
 72:
                var3 = 'video/mp4';
                var14 = var6;
                if(!(var3 !== var5)) { _fun0010_ip = 107; continue _fun0010 }
 85:
                var3 = 'image/gif';
                if(!(var3 !== var5)) { _fun0010_ip = 103; continue _fun0010 }
 95:
                var14 = 'webp';
                _fun0010_ip = 107; continue _fun0010;
 103:
                var14 = 'gif';
 107:
                var3 = 'webp';
                var3 = var3 !== var14;
                if(var3) { _fun0010_ip = 127; continue _fun0010 }
 120:
                var3 = _closure1_slot14;
 127:
                if(var3) { _fun0010_ip = 134; continue _fun0010 }
 130:
                var14 = 'png';
 134:
                var5 = 'string';
                var3 = typeof var1;
                var12 = var1;
                if(!(var5 !== var3)) { _fun0010_ip = 153; continue _fun0010 }
 148:
                var12 = var1.id;
 153:
                if(!(var4 == var13)) { _fun0010_ip = 223; continue _fun0010 }
 157:
                var1 = var2.window;
                var1 = var1.GLOBAL_ENV;
                var8 = var1.API_ENDPOINT;
                var3 = _closure1_slot8;
                var1 = var3.STORE_ASSET;
                var6 = var1.bind(var3)(var15, var12, var14);
                var1 = var2.HermesInternal;
                var5 = var1.concat;
                var3 = '';
                var1 = 'https:';
                var3 = var5.bind(var3)(var1, var8, var6);
                _fun0010_ip = 280; continue _fun0010;
 223:
                var1 = var2.HermesInternal;
                var11 = var1.concat;
                var25 = '';
                var24 = 'https:';
                var23 = '//';
                var21 = '/app-assets/';
                var19 = '/store/';
                var17 = '.';
                var22 = var13;
                var20 = var15;
                var18 = var12;
                var16 = var14;
                var3 = var25[var11](var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
 280:
                var1 = var3;
                if(!(var4 != var7)) { _fun0010_ip = 372; continue _fun0010 }
 287:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 9;
                var5 = var10[var4];
                var8 = undefined;
                var6 = var9.bind(var8)(var5);
                var5 = var6.getBestMediaProxySize;
                var4 = var10[var4];
                var8 = var9.bind(var8)(var4);
                var4 = var8.getDevicePixelRatio;
                var4 = var4.bind(var8)();
                var4 = var7 * var4;
                var5 = var5.bind(var6)(var4);
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = '?size=';
                var2 = var4.bind(var2)(var5);
                var1 = var3 + var2;
 372:
                return var1;
            }
        };
        var3['getAssetURL'] = var6;
        var6 = function httpGetWithCountryCodeQuery() {
            var1 = undefined;
            var4 = _closure1_slot17;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['httpGetWithCountryCodeQuery'] = var6;
        var6 = function nativePlatformTypeToSKUOperatingSystem(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 12;
                var2 = var2[var6];
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var2 = var2.PlatformTypes;
                var2 = var2.WINDOWS;
                if(!(var2 !== var3)) { _fun0011_ip = 138; continue _fun0011 }
 44:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.PlatformTypes;
                var2 = var2.OSX;
                if(!(var2 !== var3)) { _fun0011_ip = 126; continue _fun0011 }
 77:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.PlatformTypes;
                var2 = var2.LINUX;
                if(!(var2 !== var3)) { _fun0011_ip = 114; continue _fun0011 }
 110:
                var2 = null;
                return var2;
 114:
                var2 = _closure1_slot9;
                var2 = var2.LINUX;
                return var2;
 126:
                var2 = _closure1_slot9;
                var2 = var2.MACOS;
                return var2;
 138:
                var1 = _closure1_slot9;
                var1 = var1.WINDOWS;
                return var1;
            }
        };
        var3['nativePlatformTypeToSKUOperatingSystem'] = var6;
        var6 = function skuOperatingSystemToText(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var5 = arg1;
                var2 = _closure1_slot9;
                var2 = var2.WINDOWS;
                if(!(var2 !== var5)) { _fun0012_ip = 228; continue _fun0012 }
 23:
                var2 = _closure1_slot9;
                var2 = var2.MACOS;
                if(!(var2 !== var5)) { _fun0012_ip = 167; continue _fun0012 }
 40:
                var2 = _closure1_slot9;
                var2 = var2.LINUX;
                if(!(var2 !== var5)) { _fun0012_ip = 106; continue _fun0012 }
 54:
                var2 = global;
                var4 = var2.Error;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Unknown operating system value: ';
                var8 = var3.bind(var2)(var5);
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var2 = new var9[var4](var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
 106:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.tcawo6;
                var2 = var3.bind(var4)(var2);
                return var2;
 167:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.E4u4n5;
                var2 = var3.bind(var4)(var2);
                return var2;
 228:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.0/xHFB;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3['skuOperatingSystemToText'] = var6;
        var6 = function getPrimarySKUForApplication(arg1, arg2, arg3) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var3 = arg2;
                var4 = arg3;
                var2 = var3.getApplication;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var5 = null;
                var3 = var5 == var2;
                var1 = null;
                if(var3) { _fun0013_ip = 62; continue _fun0013 }
 31:
                var3 = var2.primarySkuId;
                var3 = var5 == var3;
                var1 = null;
                if(var3) { _fun0013_ip = 62; continue _fun0013 }
 46:
                var3 = var4.get;
                var2 = var2.primarySkuId;
                var1 = var3.bind(var4)(var2);
 62:
                return var1;
            }
        };
        var3['getPrimarySKUForApplication'] = var6;
        var3['getNowPlayingReason'] = var5;
        var3['getEverPlayedReason'] = var4;
        var4 = function getSocialRecommendationReasons(arg1, arg2, arg3, arg4, arg5) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = arg2;
                var7 = arg3;
                var6 = arg5;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 != var1)) { _fun0014_ip = 200; continue _fun0014 }
 33:
                var5 = var1.applicationId;
                var1 = new Array(0);
                var11 = new Array(0);
                var10 = _closure1_slot18;
                var4 = undefined;
                var9 = arg4;
                var9 = var10.bind(var4)(var5, var7, var9);
                if(!(var2 != var9)) { _fun0014_ip = 100; continue _fun0014 }
 69:
                var10 = var1.push;
                var10 = var10.bind(var1)(var9);
                var12 = var9.userInfo;
                var10 = var12.map;
                var9 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    var1 = var1.id;
                    return var1;
                };
                var11 = var10.bind(var12)(var9);
 100:
                var9 = var6.getStatisticsForApplication;
                var10 = var9.bind(var6)(var5);
                if(!(var2 != var10)) { _fun0014_ip = 198; continue _fun0014 }
 115:
                var9 = var10.map;
                var8 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user_id;
                    return var1;
                };
                var10 = var9.bind(var10)(var8);
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 16;
                var8 = var12[var8];
                var9 = var9.bind(var4)(var8);
                var8 = var9.difference;
                var8 = var8.bind(var9)(var10, var11);
                var9 = var8.length;
                var8 = 0;
                if(!(var9 > var8)) { _fun0014_ip = 198; continue _fun0014 }
 173:
                var3 = _closure1_slot19;
                var3 = var3.bind(var4)(var5, var7, var6);
                if(!(var2 != var3)) { _fun0014_ip = 198; continue _fun0014 }
 188:
                var2 = var1.push;
                var2 = var2.bind(var1)(var3);
 198:
                return var1;
 200:
                var1 = _closure1_slot15;
                return var1;
            }
        };
        var3['getSocialRecommendationReasons'] = var4;
        var2 = function getNonSocialRecommendationReasons(arg1, arg2, arg3) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var4 = arg1;
                var2 = arg2;
                var3 = arg3;
                var1 = var2.get;
                var2 = var1.bind(var2)(var4);
                var1 = var3.getForSKU;
                var4 = var1.bind(var3)(var4);
                var3 = null;
                if(!(var3 != var2)) { _fun0015_ip = 327; continue _fun0015 }
 39:
                if(!(var3 != var4)) { _fun0015_ip = 327; continue _fun0015 }
 46:
                var1 = new Array(0);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 17;
                var6 = var8[var6];
                var9 = undefined;
                var10 = var7.bind(var9)(var6);
                var8 = var10.hasFlag;
                var7 = var2.flags;
                var6 = _closure1_slot13;
                var6 = var6.HAS_FREE_PREMIUM_CONTENT;
                var6 = var8.bind(var10)(var7, var6);
                if(!var6) { _fun0015_ip = 131; continue _fun0015 }
 105:
                var7 = var1.push;
                var6 = {};
                var8 = _closure1_slot10;
                var8 = var8.HAS_FREE_PREMIUM_CONTENT;
                var6['type'] = var8;
                var6 = var7.bind(var1)(var6);
 131:
                var7 = var2.releaseDate;
                var6 = var3 != var7;
                if(!var6) { _fun0015_ip = 191; continue _fun0015 }
 144:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 18;
                var8 = var11[var8];
                var8 = var10.bind(var9)(var8);
                var10 = var8.bind(var9)();
                var9 = var10.diff;
                var8 = 'months';
                var9 = var9.bind(var10)(var7, var8);
                var8 = 3;
                var6 = var9 < var8;
 191:
                if(!var6) { _fun0015_ip = 278; continue _fun0015 }
 194:
                var6 = var2.accessType;
                var2 = _closure1_slot12;
                var2 = var2.EARLY_ACCESS;
                if(!(var6 !== var2)) { _fun0015_ip = 247; continue _fun0015 }
 214:
                var6 = var1.push;
                var2 = {};
                var8 = _closure1_slot10;
                var8 = var8.RECENT_RELEASE_DATE;
                var2['type'] = var8;
                var2['releaseDate'] = var7;
                var2 = var6.bind(var1)(var2);
                _fun0015_ip = 278; continue _fun0015;
 247:
                var6 = var1.push;
                var2 = {};
                var8 = _closure1_slot10;
                var8 = var8.EARLY_ACCESS;
                var2['type'] = var8;
                var2['releaseDate'] = var7;
                var2 = var6.bind(var1)(var2);
 278:
                var2 = var4.flavorText;
                if(!(var3 != var2)) { _fun0015_ip = 325; continue _fun0015 }
 288:
                var3 = var1.push;
                var2 = {};
                var5 = _closure1_slot10;
                var5 = var5.FLAVOR_TEXT;
                var2['type'] = var5;
                var4 = var4.flavorText;
                var2['flavorText'] = var4;
                var2 = var3.bind(var1)(var2);
 325:
                return var1;
 327:
                var1 = _closure1_slot16;
                return var1;
            }
        };
        var3['getNonSocialRecommendationReasons'] = var2;
        return var1;
    }
})();