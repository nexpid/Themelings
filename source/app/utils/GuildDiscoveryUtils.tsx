// app/utils/GuildDiscoveryUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var1 = function _startLurking() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    var18 = arg2;
                    var7 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 514; continue _fun0001 }
 19:
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0001_ip = 27; continue _fun0001 }
 25:
                    var7 = {};
 27:
                    SaveGenerator(address=31);
 29:
                    return var3;
 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 511; continue _fun0001 }
 40:
                    var13 = var7.channelId;
                    var4 = var7.onSuccess;
                    var19 = var7.joinSource;
                    var17 = var7.loadId;
                    var5 = var7.shouldNavigate;
                    var10 = var3 === var5;
                    if(var10) { _fun0001_ip = 81; continue _fun0001 }
 78:
                    var10 = var5;
 81:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 5;
                    var5 = var11[var5];
                    var8 = var8.bind(var3)(var5);
                    var5 = var8.getHistory;
                    var12 = var5.bind(var8)();
                    var8 = _closure1_slot6;
                    var5 = var8.getGuild;
                    var11 = var5.bind(var8)(var9);
                    var8 = {};
                    var5 = {};
                    var5['analyticsSource'] = var18;
                    var8['state'] = var5;
                    var5 = null;
                    if(!(var5 != var11)) { _fun0001_ip = 160; continue _fun0001 }
 147:
                    var11 = var11.joinedAt;
                    if(!(var5 == var11)) { _fun0001_ip = 379; continue _fun0001 }
 160:
                    var14 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var16 = 8;
                    var11 = var11[var16];
                    var15 = var14.bind(var3)(var11);
                    var14 = var15.joinGuild;
                    var11 = {};
                    var20 = true;
                    var11['lurker'] = var20;
                    var11['source'] = var19;
                    var11['loadId'] = var17;
                    var19 = var5 == var18;
                    var17 = undefined;
                    if(var19) { _fun0001_ip = 219; continue _fun0001 }
 213:
                    var17 = var18.page;
 219:
                    var11['lurkLocation'] = var17;
                    var11 = var14.bind(var15)(var9, var11);
                    SaveGenerator(address=234);
 232:
                    return var11;
 234:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=13);
                    if(var14) { _fun0001_ip = 376; continue _fun0001 }
 243:
                    if(!var10) { _fun0001_ip = 500; continue _fun0001 }
 249:
                    var15 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var16];
                    var16 = var15.bind(var3)(var14);
                    var15 = var16.transitionToGuildSync;
                    var14 = {};
                    var24 = var14;
                    var23 = var8;
                    var17 = copyDataProperties(var24, var23);
                    var17 = 'welcomeModalChannelId';
                    var14[var17] = var13;
                    var18 = var5 != var13;
                    var17 = 'navigationReplace';
                    var14[var17] = var18;
                    var18 = var5 != var13;
                    var17 = 'openChannel';
                    var14[var17] = var18;
                    var12 = var12.location;
                    var17 = var12.search;
                    var12 = 'search';
                    var14[var12] = var17;
                    var21 = var7.messageId;
                    var25 = var16;
                    var24 = var9;
                    var23 = var14;
                    var22 = var13;
                    var12 = var25[var15](var24, var23, var22, var21, var20);
                    SaveGenerator(address=364);
 362:
                    return var12;
 364:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=13);
                    if(!var14) { _fun0001_ip = 500; continue _fun0001 }
 373:
                    return var12;
 376:
                    return var11;
 379:
                    if(!var10) { _fun0001_ip = 500; continue _fun0001 }
 382:
                    if(!(var5 != var13)) { _fun0001_ip = 468; continue _fun0001 }
 386:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 7;
                    var10 = var12[var10];
                    var11 = var11.bind(var3)(var10);
                    var12 = _closure1_slot10;
                    var10 = var12.CHANNEL;
                    var7 = var7.messageId;
                    var10 = var10.bind(var12)(var9, var13, var7);
                    var7 = {};
                    var24 = var7;
                    var23 = var8;
                    var12 = copyDataProperties(var24, var23);
                    var13 = true;
                    var12 = 'navigationReplace';
                    var7[var12] = var13;
                    var12 = 'openChannel';
                    var7[var12] = var13;
                    var7 = var11.bind(var3)(var10, var7);
                    _fun0001_ip = 500; continue _fun0001;
 468:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 6;
                    var6 = var10[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.transitionToGuild;
                    var6 = var6.bind(var7)(var9, var8);
 500:
                    if(!(var5 != var4)) { _fun0001_ip = 508; continue _fun0001 }
 504:
                    var4 = var4.bind(var3)();
 508:
                    return var3;
 511:
                    return var2;
 514:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var4 = function makeDiscoverableGuild(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.name;
        var1['name'] = var3;
        var3 = var2.description;
        var1['description'] = var3;
        var3 = var2.splash;
        var1['splash'] = var3;
        var3 = var2.banner;
        var1['banner'] = var3;
        var3 = var2.icon;
        var1['icon'] = var3;
        var3 = global;
        var5 = var3.Set;
        var6 = var2.features;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var7 = var4;
        var3 = new var7[var5](var6, var5);
        var3 = var3 instanceof Object ? var3 : var4;
        var1['features'] = var3;
        var3 = var2.approximate_presence_count;
        var1['presenceCount'] = var3;
        var3 = var2.approximate_member_count;
        var1['memberCount'] = var3;
        var3 = var2.premium_subscription_count;
        var1['premiumSubscriptionCount'] = var3;
        var3 = var2.preferred_locale;
        var1['preferredLocale'] = var3;
        var3 = var2.discovery_splash;
        var1['discoverySplash'] = var3;
        var3 = var2.emojis;
        var1['emojis'] = var3;
        var3 = var2.emoji_count;
        var1['emojiCount'] = var3;
        var3 = var2.stickers;
        var1['stickers'] = var3;
        var3 = var2.sticker_count;
        var1['stickerCount'] = var3;
        var2 = var2.keywords;
        var1['keywords'] = var2;
        return var1;
    };
    var _closure1_slot12 = var4;
    var1 = function _getDiscoverableGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 218; continue _fun0002 }
 10:
                    var12 = arg1;
                    var6 = undefined;
                    var8 = undefined;
                    var4 = undefined;
 19: // try_start_0
                    var5 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 10;
                    var2 = var11[var2];
                    var2 = var5.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.get;
                    var2 = {};
                    var9 = _closure1_slot9;
                    var9 = var9.GUILD_DISCOVERY;
                    var2['url'] = var9;
                    var10 = _closure1_slot1;
                    var9 = 11;
                    var9 = var11[var9];
                    var11 = var10.bind(var6)(var9);
                    var10 = var11.stringify;
                    var9 = {};
                    var9['guild_ids'] = var12;
                    var9 = var10.bind(var11)(var9);
                    var2['query'] = var9;
                    var9 = true;
                    var2['oldFormErrors'] = var9;
                    var2['rejectWithError'] = var9;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=126);
 124:
                    return var2;
 126:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 208; continue _fun0002 }
 132:
                    var5 = var2.body;
                    var8 = var5;
                    var7 = null;
                    var9 = var7 == var5;
                    var5 = undefined;
                    if(var9) { _fun0002_ip = 181; continue _fun0002 }
 151:
                    var9 = var8;
                    var9 = var9.guilds;
                    var8 = var9;
                    var9 = var7 == var9;
                    var5 = undefined;
                    if(var9) { _fun0002_ip = 181; continue _fun0002 }
 172:
                    var9 = var8;
                    var8 = 0;
                    var5 = var9[var8];
 181:
                    var4 = var5;
                    if(!(var7 != var5)) { _fun0002_ip = 202; continue _fun0002 }
 188:
                    var5 = _closure1_slot12;
                    var3 = var4;
                    var3 = var5.bind(var6)(var3);
                    _fun0002_ip = 205; continue _fun0002;
 202:
                    var3 = var4;
 205: // try_end0
                    return var3;
 208:
                    return var2;
 211: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = null;
                    return var2;
 218:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.AnalyticEvents;
    var _closure1_slot7 = var6;
    var6 = var5.SearchTypes;
    var _closure1_slot8 = var6;
    var6 = var5.Endpoints;
    var _closure1_slot9 = var6;
    var5 = var5.Routes;
    var _closure1_slot10 = var5;
    var5 = {};
    var6 = 'Search';
    var5['SEARCH'] = var6;
    var6 = 'Recommended';
    var5['RECOMMENDED'] = var6;
    var6 = 'Popular';
    var5['POPULAR'] = var6;
    var6 = 'Recommended - E3';
    var5['RECOMMENDED_E3'] = var6;
    var6 = 'Header';
    var5['HEADER'] = var6;
    var6 = 'Global Discovery';
    var5['GLOBAL_DISCOVERY'] = var6;
    var6 = 'Forward Breadcrumb';
    var5['FORWARD_BREADCRUMB'] = var6;
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/GuildDiscoveryUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['AnalyticsContexts'] = var5;
    var5 = '>1000';
    var3['IOS_MINIMUM_MEMBER_COUNT'] = var5;
    var5 = '>200';
    var3['MINIMUM_MEMBER_COUNT'] = var5;
    var5 = function startLurking() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['startLurking'] = var5;
    var3['makeDiscoverableGuild'] = var4;
    var4 = function trackDiscoveryExited(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0003_ip = 11; continue _fun0003 }
 9:
            var6 = null;
 11:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.GUILD_DISCOVERY_EXITED;
            var2 = {};
            var7 = arg1;
            var2['load_id'] = var7;
            var7 = arg2;
            var2['guild_ids_viewed'] = var7;
            var2['recommendations_source'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackDiscoveryExited'] = var4;
    var4 = function trackSearchClosed(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.SEARCH_CLOSED;
        var2 = {};
        var6 = arg1;
        var2['load_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchClosed'] = var4;
    var4 = function trackSearchStarted(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0004_ip = 11; continue _fun0004 }
 9:
            var6 = {};
 11:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.SEARCH_STARTED;
            var2 = {};
            var7 = _closure1_slot8;
            var7 = var7.GUILD_DISCOVERY;
            var2['search_type'] = var7;
            var7 = arg1;
            var2['load_id'] = var7;
            var6 = var6.location;
            var2['location'] = var6;
            var6 = arg2;
            var2['category_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackSearchStarted'] = var4;
    var4 = function trackGuildDiscoverySearchStart(arg1) {
        var1 = arg1;
        var7 = var1.withCounts;
        var6 = var1.offset;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.GUILD_DISCOVERY_SEARCH_START;
        var2 = {};
        var2['with_counts'] = var7;
        var2['offset'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackGuildDiscoverySearchStart'] = var4;
    var4 = function trackSearchFailed(arg1) {
        var1 = arg1;
        var9 = var1.categoryId;
        var8 = var1.error;
        var7 = var1.willRequestRetry;
        var6 = var1.isRequestRetry;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.GUILD_DISCOVERY_SEARCH_FAILED;
        var2 = {};
        var2['category_id'] = var9;
        var9 = var8.status;
        var2['request_status'] = var9;
        var8 = var8.code;
        var2['request_error_code'] = var8;
        var2['will_request_retry'] = var7;
        var2['is_request_retry'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchFailed'] = var4;
    var4 = function trackGuildDiscoveryGetFeaturedGuildsFailed(arg1) {
        var1 = arg1;
        var6 = var1.categoryId;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED;
        var2 = {};
        var2['category_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackGuildDiscoveryGetFeaturedGuildsFailed'] = var4;
    var4 = function trackSearchResultsViewed(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var10 = var1.loadId;
            var9 = var1.searchId;
            var8 = var1.query;
            var12 = var1.guildResults;
            var7 = var1.analyticsContext;
            var6 = var1.categoryId;
            var11 = var1.isTagSearch;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.SEARCH_RESULT_VIEWED;
            var2 = {};
            var13 = _closure1_slot8;
            if(var11) { _fun0005_ip = 105; continue _fun0005 }
 97:
            var11 = var13.GUILD_DISCOVERY;
            _fun0005_ip = 111; continue _fun0005;
 105:
            var11 = var13.GUILD_DISCOVERY_TAG;
 111:
            var2['search_type'] = var11;
            var2['load_id'] = var10;
            var2['search_id'] = var9;
            var10 = var1 !== var12;
            var11 = null;
            if(!var10) { _fun0005_ip = 142; continue _fun0005 }
 137:
            var11 = var12.length;
 142:
            var2['total_results'] = var11;
            var9 = null;
            if(!var10) { _fun0005_ip = 169; continue _fun0005 }
 152:
            var11 = var12.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var9 = var11.bind(var12)(var10);
 169:
            var2['guild_ids'] = var9;
            var2['query'] = var8;
            var7 = var7.location;
            var2['location'] = var7;
            var2['category_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackSearchResultsViewed'] = var4;
    var4 = function trackGuildJoinClicked(arg1) {
        var8 = arg1;
        var2 = _closure1_slot4;
        var1 = var2.getLoadId;
        var7 = var1.bind(var2)(var8);
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.GUILD_DISCOVERY_GUILD_JOIN_CLICKED;
        var2 = {};
        var2['guild_id'] = var8;
        var2['load_id'] = var7;
        var7 = _closure1_slot5;
        var6 = var7.getMemberCount;
        var6 = var6.bind(var7)(var8);
        var2['guild_size'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackGuildJoinClicked'] = var4;
    var2 = function getDiscoverableGuild() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getDiscoverableGuild'] = var2;
    return var1;
})();