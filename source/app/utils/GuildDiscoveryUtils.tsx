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
case 0:
                    StartGenerator();
                    var9 = arg1;
                    var14 = arg2;
                    var7 = arguments[2];
                    var15 = arguments[3];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = {};
case 4:
                    SaveGenerator(address=34);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var13 = var7.channelId;
                    var4 = var7.onSuccess;
                    var19 = var7.joinSource;
                    var18 = var7.loadId;
                    var5 = var7.shouldNavigate;
                    var10 = var3 === var5;
                    if(var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var10 = var5;
case 10:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 5;
                    var5 = var11[var5];
                    var8 = var8.bind(var3)(var5);
                    var5 = var8.getHistory;
                    var11 = var5.bind(var8)();
                    var8 = _closure1_slot6;
                    var5 = var8.getGuild;
                    var12 = var5.bind(var8)(var9);
                    var8 = {};
                    var8['sourceLocationStack'] = var15;
                    var5 = {};
                    var5['analyticsSource'] = var14;
                    var8['state'] = var5;
                    var5 = null;
                    if(!(var5 != var12)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var16 = var12.joinedAt;
                    if(!(var5 == var16)) { _fun0001_ip = 14; continue _fun0001 }
case 12:
                    if(!(var5 != var12)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var16 = _closure1_slot4;
                    var12 = var16.isLurking;
                    var12 = var12.bind(var16)(var9);
                    if(var12) { _fun0001_ip = 17; continue _fun0001 }
case 15:
                    var12 = var5 == var15;
                    var17 = undefined;
                    if(var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var16 = var15.length;
                    var12 = 1;
                    var12 = var16 - var12;
                    var17 = var15[var12];
case 18:
                    if(!(var5 == var17)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var15 = var5 == var14;
                    var12 = undefined;
                    if(var15) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var12 = var14.page;
case 22:
                    var17 = var12;
case 20:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 9;
                    var12 = var15[var12];
                    var15 = var14.bind(var3)(var12);
                    var14 = var15.getMobileLurkerServerPreview;
                    var12 = 'startLurking';
                    var12 = var14.bind(var15)(var12);
                    var12 = var12.enabled;
                    if(!var12) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 10;
                    var12 = var15[var12];
                    var14 = var14.bind(var3)(var12);
                    var12 = var14.trackLurkStarted;
                    var12 = var12.bind(var14)(var9, var19, var17);
case 24:
                    var14 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var16 = 8;
                    var12 = var12[var16];
                    var15 = var14.bind(var3)(var12);
                    var14 = var15.joinGuild;
                    var12 = {};
                    var20 = true;
                    var12['lurker'] = var20;
                    var12['source'] = var19;
                    var12['loadId'] = var18;
                    var12['lurkLocation'] = var17;
                    var12 = var14.bind(var15)(var9, var12);
                    SaveGenerator(address=374);
case 26:
                    return var12;
case 27:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=13);
                    if(var14) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    if(!var10) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var15 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var16];
                    var17 = var15.bind(var3)(var14);
                    var16 = var17.transitionToGuildSync;
                    var15 = {};
                    var24 = var15;
                    var23 = var8;
                    var14 = copyDataProperties(var24, var23);
                    var14 = 'welcomeModalChannelId';
                    var15[13] = var13;
                    var18 = var5 != var13;
                    var14 = 'navigationReplace';
                    var15[13] = var18;
                    var18 = var5 != var13;
                    var14 = 'openChannel';
                    var15[13] = var18;
                    var14 = var11.location;
                    var18 = var14.search;
                    var14 = 'search';
                    var15[13] = var18;
                    var21 = var7.messageId;
                    var25 = var17;
                    var24 = var9;
                    var23 = var15;
                    var22 = var13;
                    var14 = var25[var16](var24, var23, var22, var21, var20);
                    SaveGenerator(address=504);
case 32:
                    return var14;
case 33:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(!var15) { _fun0001_ip = 30; continue _fun0001 }
case 34:
                    return var14;
case 28:
                    return var12;
case 17:
                    if(!var10) { _fun0001_ip = 30; continue _fun0001 }
case 35:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var12 = 8;
                    var12 = var15[var12];
                    var15 = var14.bind(var3)(var12);
                    var14 = var15.transitionToGuildSync;
                    var12 = {};
                    var24 = var12;
                    var23 = var8;
                    var16 = copyDataProperties(var24, var23);
                    var16 = 'welcomeModalChannelId';
                    var12[15] = var13;
                    var17 = var5 != var13;
                    var16 = 'navigationReplace';
                    var12[15] = var17;
                    var17 = var5 != var13;
                    var16 = 'openChannel';
                    var12[15] = var17;
                    var11 = var11.location;
                    var16 = var11.search;
                    var11 = 'search';
                    var12[10] = var16;
                    var21 = var7.messageId;
                    var25 = var15;
                    var24 = var9;
                    var23 = var12;
                    var22 = var13;
                    var11 = var25[var14](var24, var23, var22, var21, var20);
                    SaveGenerator(address=643);
case 36:
                    return var11;
case 37:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(!var12) { _fun0001_ip = 30; continue _fun0001 }
case 38:
                    return var11;
case 14:
                    if(!var10) { _fun0001_ip = 30; continue _fun0001 }
case 39:
                    if(!(var5 != var13)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
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
                    var7[11] = var13;
                    var12 = 'openChannel';
                    var7[11] = var13;
                    var7 = var11.bind(var3)(var10, var7);
                    _fun0001_ip = 30; continue _fun0001;
case 40:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 6;
                    var6 = var10[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.transitionToGuild;
                    var6 = var6.bind(var7)(var9, var8);
case 30:
                    if(!(var5 != var4)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
                    var4 = var4.bind(var3)();
case 42:
                    return var3;
case 8:
                    return var2;
case 2:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                    var12 = arg1;
                    var6 = undefined;
                    var8 = undefined;
                    var4 = undefined;
case 46: // try_start_0
                    var5 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 12;
                    var2 = var11[var2];
                    var2 = var5.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.get;
                    var2 = {};
                    var9 = _closure1_slot9;
                    var9 = var9.GUILD_DISCOVERY;
                    var2['url'] = var9;
                    var10 = _closure1_slot1;
                    var9 = 13;
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
                    SaveGenerator(address=127);
case 47:
                    return var2;
case 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                    var5 = var2.body;
                    var8 = var5;
                    var7 = null;
                    var9 = var7 == var5;
                    var5 = undefined;
                    if(var9) { _fun0002_ip = 51; continue _fun0002 }
case 52:
                    var9 = var8;
                    var9 = var9.guilds;
                    var8 = var9;
                    var9 = var7 == var9;
                    var5 = undefined;
                    if(var9) { _fun0002_ip = 51; continue _fun0002 }
case 53:
                    var9 = var8;
                    var8 = 0;
                    var5 = var9[var8];
case 51:
                    var4 = var5;
                    if(!(var7 != var5)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                    var5 = _closure1_slot12;
                    var3 = var4;
                    var3 = var5.bind(var6)(var3);
                    _fun0002_ip = 56; continue _fun0002;
case 54:
                    var3 = var4;
case 56: // try_end0
                    return var3;
case 49:
                    return var2;
case 57: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = null;
                    return var2;
case 44:
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
    var1 = function _fetchPublicDiscoveryGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 58; continue _fun0003 }
case 45:
                    var7 = arg1;
                    var4 = undefined;
                    var5 = undefined;
case 59: // try_start_0
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 12;
                    var2 = var6[var2];
                    var2 = var3.bind(var4)(var2);
                    var6 = var2.HTTP;
                    var3 = var6.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var9 = _closure1_slot9;
                    var8 = var9.GUILD_DISCOVERY_SLUG;
                    var10 = global;
                    var10 = var10.String;
                    var7 = var10.bind(var4)(var7);
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var2 = var3.bind(var6)(var2);
                    SaveGenerator(address=103);
case 60:
                    return var2;
case 61:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 54; continue _fun0003 }
case 62:
                    var3 = var2.body;
                    var5 = var3;
                    var6 = null;
                    var7 = var6 == var3;
                    var3 = undefined;
                    if(var7) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                    var7 = var5;
                    var3 = var7.guild;
case 63:
                    var7 = var6 == var3;
                    var3 = null;
                    if(var7) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                    var7 = var5;
                    var7 = var6 == var7;
                    var4 = undefined;
                    if(var7) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                    var7 = var5;
                    var4 = var7.slug;
case 67:
                    var4 = var6 == var4;
                    var3 = null;
                    if(var4) { _fun0003_ip = 65; continue _fun0003 }
case 69:
                    var4 = {};
                    var6 = var5.guild;
                    var4['guild'] = var6;
                    var5 = var5.slug;
                    var4['slug'] = var5;
                    var3 = var4;
case 65: // try_end0
                    return var3;
case 54:
                    return var2;
case 56: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = null;
                    return var2;
case 58:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var6 = 14;
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
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var6 = null;
case 70:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 11;
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
        var1 = 11;
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
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0005_ip = 70; continue _fun0005 }
case 71:
            var6 = {};
case 70:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
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
        var1 = 11;
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
        var1 = 11;
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
        var1 = 11;
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.SEARCH_RESULT_VIEWED;
            var2 = {};
            var13 = _closure1_slot8;
            if(var11) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var11 = var13.GUILD_DISCOVERY;
            _fun0006_ip = 74; continue _fun0006;
case 72:
            var11 = var13.GUILD_DISCOVERY_TAG;
case 74:
            var2['search_type'] = var11;
            var2['load_id'] = var10;
            var2['search_id'] = var9;
            var10 = var1 !== var12;
            var11 = null;
            if(!var10) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            var11 = var12.length;
case 75:
            var2['total_results'] = var11;
            var9 = null;
            if(!var10) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var11 = var12.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var9 = var11.bind(var12)(var10);
case 77:
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
        var1 = 11;
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
    var4 = function getDiscoverableGuild() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getDiscoverableGuild'] = var4;
    var2 = function fetchPublicDiscoveryGuild() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchPublicDiscoveryGuild'] = var2;
    return var1;
})();