// app/modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _maybeFetchGuildDiscoveryCategories() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = _closure1_slot4;
                    var6 = var2.locale;
                    var4 = _closure1_slot5;
                    var2 = var4.getFetchedLocale;
                    var2 = var2.bind(var4)();
                    if(!(var6 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.GUILD_DISCOVERY_CATEGORIES;
                    var2['url'] = var8;
                    var9 = {};
                    var9['locale'] = var6;
                    var8 = false;
                    var9['primary_only'] = var8;
                    var2['query'] = var9;
                    var9 = true;
                    var2['oldFormErrors'] = var9;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=135);
case 6:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 5;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var7 = var2.body;
                    var3['categories'] = var7;
                    var3['locale'] = var6;
                    var3 = var4.bind(var5)(var3);
case 4:
                    var3 = undefined;
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _fetchMetadataForGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 3:
                    var7 = arg1;
case 11: // try_start_0
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var10 = _closure1_slot6;
                    var9 = var10.GUILD_DISCOVERY_METADATA;
                    var8 = var7;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=95);
case 12:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var5 = var2.body;
                    var3 = {};
                    var8 = var5.primary_category_id;
                    var3['primaryCategoryId'] = var8;
                    var8 = var5.category_ids;
                    var3['secondaryCategoryIds'] = var8;
                    var8 = var5.keywords;
                    var3['keywords'] = var8;
                    var8 = var5.emoji_discoverability_enabled;
                    var3['emojiDiscoverabilityEnabled'] = var8;
                    var8 = var5.partner_actioned_timestamp;
                    var3['partnerActionedTimestamp'] = var8;
                    var8 = var5.partner_application_timestamp;
                    var3['partnerApplicationTimestamp'] = var8;
                    var8 = var5.is_published;
                    var3['isPublished'] = var8;
                    var8 = var5.reasons_to_join;
                    var3['reasonsToJoin'] = var8;
                    var8 = var5.social_links;
                    var3['socialLinks'] = var8;
                    var5 = var5.about;
                    var3['about'] = var5;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER';
                    var4['type'] = var8;
                    var4['guildId'] = var7;
                    var4['metadata'] = var3;
                    var4 = var5.bind(var6)(var4);
case 16: // try_end0
                    return var3;
case 14:
                    return var2;
case 17: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'GUILD_DISCOVERY_METADATA_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 10:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _fetchSlugForGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 3:
                    var5 = arg1;
case 11: // try_start_0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var10 = _closure1_slot6;
                    var9 = var10.GUILD_DISCOVERY_SLUG;
                    var8 = var5;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=87);
case 19:
                    return var2;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 12:
                    var4 = var2.body;
                    var7 = var4.slug;
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var8 = 'GUILD_DISCOVERY_SLUG_FETCH_SUCCESS';
                    var3['type'] = var8;
                    var3['slug'] = var7;
                    var3 = var4.bind(var6)(var3);
case 22: // try_end0
                    _fun0003_ip = 23; continue _fun0003;
case 21:
                    return var2;
case 24: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'GUILD_DISCOVERY_SLUG_FETCH_FAIL';
                    var2['type'] = var6;
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 23:
                    var2 = undefined;
                    return var2;
case 18:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _saveGuildMetadata() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 25; continue _fun0004 }
case 11:
                    var7 = var2.guildId;
                    var18 = var2.primaryCategoryId;
                    var14 = var2.keywords;
                    var17 = var2.emojiDiscoverabilityEnabled;
                    var16 = var2.partnerActionedTimestamp;
                    var15 = var2.partnerApplicationTimestamp;
                    var13 = var2.isPublished;
                    var12 = var2.reasonsToJoin;
                    var11 = var2.socialLinks;
                    var10 = var2.about;
                    var6 = undefined;
                    SaveGenerator(address=78);
case 26:
                    return var6;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 28; continue _fun0004 }
case 20: // try_start_0
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 4;
                    var3 = var8[var3];
                    var3 = var5.bind(var6)(var3);
                    var8 = var3.HTTP;
                    var5 = var8.patch;
                    var3 = {};
                    var20 = _closure1_slot6;
                    var19 = var20.GUILD_DISCOVERY_METADATA;
                    var9 = var7;
                    var9 = var19.bind(var20)(var9);
                    var3['url'] = var9;
                    var9 = {};
                    var9['primary_category_id'] = var18;
                    var9['emoji_discoverability_enabled'] = var17;
                    var9['partner_actioned_timestamp'] = var16;
                    var9['partner_application_timestamp'] = var15;
                    var9['keywords'] = var14;
                    var9['is_published'] = var13;
                    var9['reasons_to_join'] = var12;
                    var9['social_links'] = var11;
                    var9['about'] = var10;
                    var3['body'] = var9;
                    var9 = true;
                    var3['oldFormErrors'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=218);
case 29:
                    return var3;
case 30:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var5 = var3.body;
                    var19 = var5.primary_category_id;
                    var18 = var5.category_ids;
                    var17 = var5.keywords;
                    var16 = var5.emoji_discoverability_enabled;
                    var15 = var5.partner_actioned_timestamp;
                    var14 = var5.partner_application_timestamp;
                    var13 = var5.is_published;
                    var12 = var5.reasons_to_join;
                    var11 = var5.social_links;
                    var10 = var5.about;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var8 = var5.bind(var6)(var4);
                    var5 = var8.dispatch;
                    var4 = {};
                    var9 = 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER';
                    var4['type'] = var9;
                    var9 = var7;
                    var4['guildId'] = var9;
                    var9 = {};
                    var9['primaryCategoryId'] = var19;
                    var9['secondaryCategoryIds'] = var18;
                    var9['keywords'] = var17;
                    var9['emojiDiscoverabilityEnabled'] = var16;
                    var9['partnerActionedTimestamp'] = var15;
                    var9['partnerApplicationTimestamp'] = var14;
                    var9['isPublished'] = var13;
                    var9['reasonsToJoin'] = var12;
                    var9['socialLinks'] = var11;
                    var9['about'] = var10;
                    var4['metadata'] = var9;
                    var4 = var5.bind(var8)(var4);
case 33: // try_end0
                    return var6;
case 31:
                    return var3;
case 34: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
                    var4['type'] = var8;
                    var4['guildId'] = var7;
                    var7 = var3.body;
                    var4['errors'] = var7;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 28:
                    return var2;
case 25:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function maybeFetchGuildDiscoveryCategories() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybeFetchGuildDiscoveryCategories'] = var4;
    var4 = function fetchMetadataForGuild() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchMetadataForGuild'] = var4;
    var4 = function fetchSlugForGuild() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSlugForGuild'] = var4;
    var4 = function updateGuildPrimaryCategory(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['primaryCategoryId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateGuildPrimaryCategory'] = var4;
    var4 = function updateGuildKeywords(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['keywords'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateGuildKeywords'] = var4;
    var4 = function updateGuildEmojiDiscoverabilityEnabled(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['emojiDiscoverabilityEnabled'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateGuildEmojiDiscoverabilityEnabled'] = var4;
    var4 = function updateGuildDiscoveryMetadataIsPublished(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['isPublished'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateGuildDiscoveryMetadataIsPublished'] = var4;
    var4 = function updateGuildDiscoveryMetadataAbout(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['about'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateGuildDiscoveryMetadataAbout'] = var4;
    var4 = function updateGuildDiscoveryMetadataReasonsToJoin(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['reasonsToJoin'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateGuildDiscoveryMetadataReasonsToJoin'] = var4;
    var4 = function updateGuildDiscoveryMetadataSocialLinks(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['socialLinks'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateGuildDiscoveryMetadataSocialLinks'] = var4;
    var4 = function saveGuildMetadata() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['saveGuildMetadata'] = var4;
    var4 = function addGuildCategory(arg1, arg2) {
        var9 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var8;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.put;
        var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var7 = _closure1_slot6;
        var6 = var7.GUILD_DISCOVERY_UPDATE_CATEGORY;
        var6 = var6.bind(var7)(var9, var8);
        var3['url'] = var6;
        var5 = var4.bind(var5)(var3);
        var4 = var5.then;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GUILD_DISCOVERY_CATEGORY_ADD';
            var2['type'] = var5;
            var6 = _closure2_slot0;
            var2['guildId'] = var6;
            var5 = _closure2_slot1;
            var2['categoryId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.catch;
        var2 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
            var2['type'] = var5;
            var5 = _closure2_slot0;
            var2['guildId'] = var5;
            var5 = arg1;
            var5 = var5.body;
            var2['errors'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['addGuildCategory'] = var4;
    var2 = function deleteGuildCategory(arg1, arg2) {
        var9 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var8;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.del;
        var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var7 = _closure1_slot6;
        var6 = var7.GUILD_DISCOVERY_UPDATE_CATEGORY;
        var6 = var6.bind(var7)(var9, var8);
        var3['url'] = var6;
        var5 = var4.bind(var5)(var3);
        var4 = var5.then;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GUILD_DISCOVERY_CATEGORY_DELETE';
            var2['type'] = var5;
            var6 = _closure2_slot0;
            var2['guildId'] = var6;
            var5 = _closure2_slot1;
            var2['categoryId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.catch;
        var2 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
            var2['type'] = var5;
            var5 = _closure2_slot0;
            var2['guildId'] = var5;
            var5 = arg1;
            var5 = var5.body;
            var2['errors'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['deleteGuildCategory'] = var2;
    return var1;
})();