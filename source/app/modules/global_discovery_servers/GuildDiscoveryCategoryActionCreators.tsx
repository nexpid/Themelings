// app/modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _maybeFetchGuildDiscoveryCategories
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun117099: for(var _fun117099_ip = 0; ; ) switch(_fun117099_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun117099_ip = 202; continue _fun117099 }
 10:
                    mike = _closure1_slot4;
                    oscar = mike.locale;
                    tango = _closure1_slot5;
                    mike = tango.getFetchedLocale;
                    mike = mike.bind(tango)();
                    if(!(oscar !== mike)) { _fun117099_ip = 194; continue _fun117099 }
 45:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 4;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    golf = mike.HTTP;
                    tango = golf.get;
                    mike = {};
                    options = _closure1_slot6;
                    options = options.GUILD_DISCOVERY_CATEGORIES;
                    mike['url'] = options;
                    verify = {};
                    verify['locale'] = oscar;
                    options = false;
                    verify['primary_only'] = options;
                    mike['query'] = verify;
                    verify = true;
                    mike['oldFormErrors'] = verify;
                    mike['rejectWithError'] = options;
                    mike = tango.bind(golf)(mike);
                    SaveGenerator(address=132);
 130:
                    return mike;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun117099_ip = 199; continue _fun117099 }
 138:
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 5;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS';
                    zulu['type'] = golf;
                    golf = mike.body;
                    zulu['categories'] = golf;
                    zulu['locale'] = oscar;
                    zulu = tango.bind(report)(zulu);
 194:
                    zulu = undefined;
                    return zulu;
 199:
                    return mike;
 202:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _fetchMetadataForGuild
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun117102: for(var _fun117102_ip = 0; ; ) switch(_fun117102_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun117102_ip = 326; continue _fun117102 }
 10:
                    golf = argFoo;
 13: // try_start_0
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 4;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.get;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    offset = _closure1_slot6;
                    verify = offset.GUILD_DISCOVERY_METADATA;
                    options = golf;
                    options = verify.bind(offset)(options);
                    mike['url'] = options;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=91);
 89:
                    return mike;
 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun117102_ip = 271; continue _fun117102 }
 100:
                    report = mike.body;
                    zulu = {};
                    options = report.primary_category_id;
                    zulu['primaryCategoryId'] = options;
                    options = report.category_ids;
                    zulu['secondaryCategoryIds'] = options;
                    options = report.keywords;
                    zulu['keywords'] = options;
                    options = report.emoji_discoverability_enabled;
                    zulu['emojiDiscoverabilityEnabled'] = options;
                    options = report.partner_actioned_timestamp;
                    zulu['partnerActionedTimestamp'] = options;
                    options = report.partner_application_timestamp;
                    zulu['partnerApplicationTimestamp'] = options;
                    options = report.is_published;
                    zulu['isPublished'] = options;
                    options = report.reasons_to_join;
                    zulu['reasonsToJoin'] = options;
                    options = report.social_links;
                    zulu['socialLinks'] = options;
                    report = report.about;
                    zulu['about'] = report;
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 5;
                    tango = options[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER';
                    tango['type'] = options;
                    tango['guildId'] = golf;
                    tango['metadata'] = zulu;
                    tango = report.bind(oscar)(tango);
 268: // try_end0
                    return zulu;
 271:
                    return mike;
 274: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 5;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'GUILD_DISCOVERY_METADATA_FETCH_FAIL';
                    zulu['type'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 326:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _fetchSlugForGuild
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun117105: for(var _fun117105_ip = 0; ; ) switch(_fun117105_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun117105_ip = 214; continue _fun117105 }
 10:
                    report = argFoo;
 13: // try_start_0
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 4;
                    mike = oscar[mike];
                    oscar = undefined;
                    mike = tango.bind(oscar)(mike);
                    golf = mike.HTTP;
                    tango = golf.get;
                    mike = {};
                    offset = _closure1_slot6;
                    verify = offset.GUILD_DISCOVERY_SLUG;
                    options = report;
                    options = verify.bind(offset)(options);
                    mike['url'] = options;
                    options = true;
                    mike['rejectWithError'] = options;
                    mike = tango.bind(golf)(mike);
                    SaveGenerator(address=87);
 85:
                    return mike;
 87:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun117105_ip = 153; continue _fun117105 }
 93:
                    tango = mike.body;
                    golf = tango.slug;
                    tango = _closure1_slot1;
                    options = _closure1_slot2;
                    zulu = 5;
                    zulu = options[zulu];
                    oscar = tango.bind(oscar)(zulu);
                    tango = oscar.dispatch;
                    zulu = {};
                    options = 'GUILD_DISCOVERY_SLUG_FETCH_SUCCESS';
                    zulu['type'] = options;
                    zulu['slug'] = golf;
                    zulu = tango.bind(oscar)(zulu);
 151: // try_end0
                    _fun117105_ip = 209; continue _fun117105;
 153:
                    return mike;
 156: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 5;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.dispatch;
                    mike = {};
                    oscar = 'GUILD_DISCOVERY_SLUG_FETCH_FAIL';
                    mike['type'] = oscar;
                    mike['guildId'] = report;
                    mike = zulu.bind(tango)(mike);
 209:
                    mike = undefined;
                    return mike;
 214:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _saveGuildMetadata
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun117108: for(var _fun117108_ip = 0; ; ) switch(_fun117108_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun117108_ip = 470; continue _fun117108 }
 13:
                    golf = mike.guildId;
                    result = mike.primaryCategoryId;
                    backup = mike.keywords;
                    output = mike.emojiDiscoverabilityEnabled;
                    sizing = mike.partnerActionedTimestamp;
                    kilo = mike.partnerApplicationTimestamp;
                    foxtrot = mike.isPublished;
                    romeo = mike.reasonsToJoin;
                    yankee = mike.socialLinks;
                    offset = mike.about;
                    oscar = undefined;
                    SaveGenerator(address=78);
 76:
                    return oscar;
 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun117108_ip = 467; continue _fun117108 }
 87: // try_start_0
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 4;
                    zulu = options[zulu];
                    zulu = report.bind(oscar)(zulu);
                    options = zulu.HTTP;
                    report = options.patch;
                    zulu = {};
                    update = _closure1_slot6;
                    echo = update.GUILD_DISCOVERY_METADATA;
                    verify = golf;
                    verify = echo.bind(update)(verify);
                    zulu['url'] = verify;
                    verify = {};
                    verify['primary_category_id'] = result;
                    verify['emoji_discoverability_enabled'] = output;
                    verify['partner_actioned_timestamp'] = sizing;
                    verify['partner_application_timestamp'] = kilo;
                    verify['keywords'] = backup;
                    verify['is_published'] = foxtrot;
                    verify['reasons_to_join'] = romeo;
                    verify['social_links'] = yankee;
                    verify['about'] = offset;
                    zulu['body'] = verify;
                    verify = true;
                    zulu['oldFormErrors'] = verify;
                    verify = false;
                    zulu['rejectWithError'] = verify;
                    zulu = report.bind(options)(zulu);
                    SaveGenerator(address=218);
 216:
                    return zulu;
 218:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun117108_ip = 401; continue _fun117108 }
 227:
                    report = zulu.body;
                    echo = report.primary_category_id;
                    result = report.category_ids;
                    output = report.keywords;
                    sizing = report.emoji_discoverability_enabled;
                    kilo = report.partner_actioned_timestamp;
                    backup = report.partner_application_timestamp;
                    foxtrot = report.is_published;
                    romeo = report.reasons_to_join;
                    yankee = report.social_links;
                    offset = report.about;
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 5;
                    tango = options[tango];
                    options = report.bind(oscar)(tango);
                    report = options.dispatch;
                    tango = {};
                    verify = 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER';
                    tango['type'] = verify;
                    verify = golf;
                    tango['guildId'] = verify;
                    verify = {};
                    verify['primaryCategoryId'] = echo;
                    verify['secondaryCategoryIds'] = result;
                    verify['keywords'] = output;
                    verify['emojiDiscoverabilityEnabled'] = sizing;
                    verify['partnerActionedTimestamp'] = kilo;
                    verify['partnerApplicationTimestamp'] = backup;
                    verify['isPublished'] = foxtrot;
                    verify['reasonsToJoin'] = romeo;
                    verify['socialLinks'] = yankee;
                    verify['about'] = offset;
                    tango['metadata'] = verify;
                    tango = report.bind(options)(tango);
 398: // try_end0
                    return oscar;
 401:
                    return zulu;
 404: // catch_target0
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 5;
                    tango = options[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
                    tango['type'] = options;
                    tango['guildId'] = golf;
                    golf = zulu.body;
                    tango['errors'] = golf;
                    tango = report.bind(oscar)(tango);
                    throw zulu;
 467:
                    return mike;
 470:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: maybeFetchGuildDiscoveryCategories
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['maybeFetchGuildDiscoveryCategories'] = tango;
    tango = function() { // Original name: fetchMetadataForGuild
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchMetadataForGuild'] = tango;
    tango = function() { // Original name: fetchSlugForGuild
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchSlugForGuild'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateGuildPrimaryCategory
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['primaryCategoryId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateGuildPrimaryCategory'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateGuildKeywords
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['keywords'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateGuildKeywords'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateGuildEmojiDiscoverabilityEnabled
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['emojiDiscoverabilityEnabled'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateGuildEmojiDiscoverabilityEnabled'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateGuildDiscoveryMetadataIsPublished
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['isPublished'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateGuildDiscoveryMetadataIsPublished'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateGuildDiscoveryMetadataAbout
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['about'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateGuildDiscoveryMetadataAbout'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateGuildDiscoveryMetadataReasonsToJoin
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['reasonsToJoin'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateGuildDiscoveryMetadataReasonsToJoin'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateGuildDiscoveryMetadataSocialLinks
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_UPDATE_DISCOVERY_METADATA';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['socialLinks'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateGuildDiscoveryMetadataSocialLinks'] = tango;
    tango = function() { // Original name: saveGuildMetadata
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['saveGuildMetadata'] = tango;
    tango = function(argFoo, argBar) { // Original name: addGuildCategory
        verify = argFoo;
        options = argBar;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = options;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.put;
        zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golf = _closure1_slot6;
        oscar = golf.GUILD_DISCOVERY_UPDATE_CATEGORY;
        oscar = oscar.bind(golf)(verify, options);
        zulu['url'] = oscar;
        report = tango.bind(report)(zulu);
        tango = report.then;
        zulu = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'GUILD_DISCOVERY_CATEGORY_ADD';
            mike['type'] = report;
            oscar = _closure2_slot0;
            mike['guildId'] = oscar;
            report = _closure2_slot1;
            mike['categoryId'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        tango = tango.bind(report)(zulu);
        zulu = tango.catch;
        mike = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
            mike['type'] = report;
            report = _closure2_slot0;
            mike['guildId'] = report;
            report = argFoo;
            report = report.body;
            mike['errors'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['addGuildCategory'] = tango;
    mike = function(argFoo, argBar) { // Original name: deleteGuildCategory
        verify = argFoo;
        options = argBar;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = options;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.del;
        zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golf = _closure1_slot6;
        oscar = golf.GUILD_DISCOVERY_UPDATE_CATEGORY;
        oscar = oscar.bind(golf)(verify, options);
        zulu['url'] = oscar;
        report = tango.bind(report)(zulu);
        tango = report.then;
        zulu = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'GUILD_DISCOVERY_CATEGORY_DELETE';
            mike['type'] = report;
            oscar = _closure2_slot0;
            mike['guildId'] = oscar;
            report = _closure2_slot1;
            mike['categoryId'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        tango = tango.bind(report)(zulu);
        zulu = tango.catch;
        mike = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
            mike['type'] = report;
            report = _closure2_slot0;
            mike['guildId'] = report;
            report = argFoo;
            report = report.body;
            mike['errors'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['deleteGuildCategory'] = mike;
    return entity;
})();