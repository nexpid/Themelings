// app/modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _maybeFetchGuildDiscoveryCategories
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 206; continue _fun00001 }
 10:
                    michal = _closure1_slot4;
                    oscard = michal.locale;
                    tangon = _closure1_slot5;
                    michal = tangon.getFetchedLocale;
                    michal = michal.bind(tangon)();
                    if(!(oscard !== michal)) { _fun00002_ip = 198; continue _fun00001 }
 46:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 4;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    golfie = michal.HTTP;
                    tangon = golfie.get;
                    michal = {};
                    option = _closure1_slot6;
                    option = option.GUILD_DISCOVERY_CATEGORIES;
                    michal['url'] = option;
                    verify = {};
                    verify['locale'] = oscard;
                    option = false;
                    verify['primary_only'] = option;
                    michal['query'] = verify;
                    verify = true;
                    michal['oldFormErrors'] = verify;
                    michal['rejectWithError'] = option;
                    michal = tangon.bind(golfie)(michal);
                    SaveGenerator(address=135);
 133:
                    return michal;
 135:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 203; continue _fun00001 }
 141:
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS';
                    zuuluu['type'] = golfie;
                    golfie = michal.body;
                    zuuluu['categories'] = golfie;
                    zuuluu['locale'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 198:
                    zuuluu = undefined;
                    return zuuluu;
 203:
                    return michal;
 206:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _fetchMetadataForGuild
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 326; continue _fun00003 }
 10:
                    golfie = argFoo;
 13: // try_start_0
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 4;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.get;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    offset = _closure1_slot6;
                    verify = offset.GUILD_DISCOVERY_METADATA;
                    option = golfie;
                    option = verify.bind(offset)(option);
                    michal['url'] = option;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=91);
 89:
                    return michal;
 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 271; continue _fun00003 }
 100:
                    report = michal.body;
                    zuuluu = {};
                    option = report.primary_category_id;
                    zuuluu['primaryCategoryId'] = option;
                    option = report.category_ids;
                    zuuluu['secondaryCategoryIds'] = option;
                    option = report.keywords;
                    zuuluu['keywords'] = option;
                    option = report.emoji_discoverability_enabled;
                    zuuluu['emojiDiscoverabilityEnabled'] = option;
                    option = report.partner_actioned_timestamp;
                    zuuluu['partnerActionedTimestamp'] = option;
                    option = report.partner_application_timestamp;
                    zuuluu['partnerApplicationTimestamp'] = option;
                    option = report.is_published;
                    zuuluu['isPublished'] = option;
                    option = report.reasons_to_join;
                    zuuluu['reasonsToJoin'] = option;
                    option = report.social_links;
                    zuuluu['socialLinks'] = option;
                    report = report.about;
                    zuuluu['about'] = report;
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 5;
                    tangon = option[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER';
                    tangon['type'] = option;
                    tangon['guildId'] = golfie;
                    tangon['metadata'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
 268: // try_end0
                    return zuuluu;
 271:
                    return michal;
 274: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'GUILD_DISCOVERY_METADATA_FETCH_FAIL';
                    zuuluu['type'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 326:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _fetchSlugForGuild
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 214; continue _fun00005 }
 10:
                    report = argFoo;
 13: // try_start_0
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 4;
                    michal = oscard[michal];
                    oscard = undefined;
                    michal = tangon.bind(oscard)(michal);
                    golfie = michal.HTTP;
                    tangon = golfie.get;
                    michal = {};
                    offset = _closure1_slot6;
                    verify = offset.GUILD_DISCOVERY_SLUG;
                    option = report;
                    option = verify.bind(offset)(option);
                    michal['url'] = option;
                    option = true;
                    michal['rejectWithError'] = option;
                    michal = tangon.bind(golfie)(michal);
                    SaveGenerator(address=87);
 85:
                    return michal;
 87:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 153; continue _fun00005 }
 93:
                    tangon = michal.body;
                    golfie = tangon.slug;
                    tangon = _closure1_slot1;
                    option = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = option[zuuluu];
                    oscard = tangon.bind(oscard)(zuuluu);
                    tangon = oscard.dispatch;
                    zuuluu = {};
                    option = 'GUILD_DISCOVERY_SLUG_FETCH_SUCCESS';
                    zuuluu['type'] = option;
                    zuuluu['slug'] = golfie;
                    zuuluu = tangon.bind(oscard)(zuuluu);
 151: // try_end0
                    _fun00006_ip = 209; continue _fun00005;
 153:
                    return michal;
 156: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    oscard = 'GUILD_DISCOVERY_SLUG_FETCH_FAIL';
                    michal['type'] = oscard;
                    michal['guildId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 209:
                    michal = undefined;
                    return michal;
 214:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _saveGuildMetadata
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 470; continue _fun00007 }
 13:
                    golfie = michal.guildId;
                    result = michal.primaryCategoryId;
                    backup = michal.keywords;
                    output = michal.emojiDiscoverabilityEnabled;
                    sizing = michal.partnerActionedTimestamp;
                    kiloes = michal.partnerApplicationTimestamp;
                    foxtra = michal.isPublished;
                    romeon = michal.reasonsToJoin;
                    yankee = michal.socialLinks;
                    offset = michal.about;
                    oscard = undefined;
                    SaveGenerator(address=78);
 76:
                    return oscard;
 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 467; continue _fun00007 }
 87: // try_start_0
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = option[zuuluu];
                    zuuluu = report.bind(oscard)(zuuluu);
                    option = zuuluu.HTTP;
                    report = option.patch;
                    zuuluu = {};
                    update = _closure1_slot6;
                    echoed = update.GUILD_DISCOVERY_METADATA;
                    verify = golfie;
                    verify = echoed.bind(update)(verify);
                    zuuluu['url'] = verify;
                    verify = {};
                    verify['primary_category_id'] = result;
                    verify['emoji_discoverability_enabled'] = output;
                    verify['partner_actioned_timestamp'] = sizing;
                    verify['partner_application_timestamp'] = kiloes;
                    verify['keywords'] = backup;
                    verify['is_published'] = foxtra;
                    verify['reasons_to_join'] = romeon;
                    verify['social_links'] = yankee;
                    verify['about'] = offset;
                    zuuluu['body'] = verify;
                    verify = true;
                    zuuluu['oldFormErrors'] = verify;
                    verify = false;
                    zuuluu['rejectWithError'] = verify;
                    zuuluu = report.bind(option)(zuuluu);
                    SaveGenerator(address=218);
 216:
                    return zuuluu;
 218:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 401; continue _fun00007 }
 227:
                    report = zuuluu.body;
                    echoed = report.primary_category_id;
                    result = report.category_ids;
                    output = report.keywords;
                    sizing = report.emoji_discoverability_enabled;
                    kiloes = report.partner_actioned_timestamp;
                    backup = report.partner_application_timestamp;
                    foxtra = report.is_published;
                    romeon = report.reasons_to_join;
                    yankee = report.social_links;
                    offset = report.about;
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 5;
                    tangon = option[tangon];
                    option = report.bind(oscard)(tangon);
                    report = option.dispatch;
                    tangon = {};
                    verify = 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER';
                    tangon['type'] = verify;
                    verify = golfie;
                    tangon['guildId'] = verify;
                    verify = {};
                    verify['primaryCategoryId'] = echoed;
                    verify['secondaryCategoryIds'] = result;
                    verify['keywords'] = output;
                    verify['emojiDiscoverabilityEnabled'] = sizing;
                    verify['partnerActionedTimestamp'] = kiloes;
                    verify['partnerApplicationTimestamp'] = backup;
                    verify['isPublished'] = foxtra;
                    verify['reasonsToJoin'] = romeon;
                    verify['socialLinks'] = yankee;
                    verify['about'] = offset;
                    tangon['metadata'] = verify;
                    tangon = report.bind(option)(tangon);
 398: // try_end0
                    return oscard;
 401:
                    return zuuluu;
 404: // catch_target0
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 5;
                    tangon = option[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
                    tangon['type'] = option;
                    tangon['guildId'] = golfie;
                    golfie = zuuluu.body;
                    tangon['errors'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    throw zuuluu;
 467:
                    return michal;
 470:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: maybeFetchGuildDiscoveryCategories
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['maybeFetchGuildDiscoveryCategories'] = tangon;
    tangon = function() { // Original name: fetchMetadataForGuild
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchMetadataForGuild'] = tangon;
    tangon = function() { // Original name: fetchSlugForGuild
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchSlugForGuild'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateGuildPrimaryCategory
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['primaryCategoryId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateGuildPrimaryCategory'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateGuildKeywords
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['keywords'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateGuildKeywords'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateGuildEmojiDiscoverabilityEnabled
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['emojiDiscoverabilityEnabled'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateGuildEmojiDiscoverabilityEnabled'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateGuildDiscoveryMetadataIsPublished
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['isPublished'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateGuildDiscoveryMetadataIsPublished'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateGuildDiscoveryMetadataAbout
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['about'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateGuildDiscoveryMetadataAbout'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateGuildDiscoveryMetadataReasonsToJoin
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['reasonsToJoin'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateGuildDiscoveryMetadataReasonsToJoin'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateGuildDiscoveryMetadataSocialLinks
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['socialLinks'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateGuildDiscoveryMetadataSocialLinks'] = tangon;
    tangon = function() { // Original name: saveGuildMetadata
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['saveGuildMetadata'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: addGuildCategory
        verify = argFoo;
        option = argBar;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = option;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.HTTP;
        tangon = report.put;
        zuuluu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golfie = _closure1_slot6;
        oscard = golfie.GUILD_DISCOVERY_UPDATE_CATEGORY;
        oscard = oscard.bind(golfie)(verify, option);
        zuuluu['url'] = oscard;
        report = tangon.bind(report)(zuuluu);
        tangon = report.then;
        zuuluu = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'GUILD_DISCOVERY_CATEGORY_ADD';
            michal['type'] = report;
            oscard = _closure2_slot0;
            michal['guildId'] = oscard;
            report = _closure2_slot1;
            michal['categoryId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.catch;
        michal = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
            michal['type'] = report;
            report = _closure2_slot0;
            michal['guildId'] = report;
            report = argFoo;
            report = report.body;
            michal['errors'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['addGuildCategory'] = tangon;
    michal = function(argFoo, argBar) { // Original name: deleteGuildCategory
        verify = argFoo;
        option = argBar;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = option;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.HTTP;
        tangon = report.del;
        zuuluu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golfie = _closure1_slot6;
        oscard = golfie.GUILD_DISCOVERY_UPDATE_CATEGORY;
        oscard = oscard.bind(golfie)(verify, option);
        zuuluu['url'] = oscard;
        report = tangon.bind(report)(zuuluu);
        tangon = report.then;
        zuuluu = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'GUILD_DISCOVERY_CATEGORY_DELETE';
            michal['type'] = report;
            oscard = _closure2_slot0;
            michal['guildId'] = oscard;
            report = _closure2_slot1;
            michal['categoryId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.catch;
        michal = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
            michal['type'] = report;
            report = _closure2_slot0;
            michal['guildId'] = report;
            report = argFoo;
            report = report.body;
            michal['errors'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['deleteGuildCategory'] = michal;
    return entity;
})();