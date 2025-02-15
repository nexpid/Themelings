// app/utils/native/parseURL.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot4 = golf;
    golf = tango.GuildSettingsSections;
    var _closure1_slot5 = golf;
    golf = tango.GuildSettingsSubsections;
    var _closure1_slot6 = golf;
    tango = tango.LinkingTypes;
    var _closure1_slot7 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UPDATE_CONFIG;
    var _closure1_slot8 = tango;
    tango = /feature\\/([\w-]+)/;
    var _closure1_slot9 = tango;
    tango = /users\\/(\d+)/;
    var _closure1_slot10 = tango;
    tango = /(?:connect|oauth2)\\/authorize/;
    var _closure1_slot11 = tango;
    tango = /promos\.discord\.gg/;
    var _closure1_slot12 = tango;
    tango = /mweb-handoff/;
    var _closure1_slot13 = tango;
    tango = /connections\\/(xbox|playstation|playstation-stg|crunchyroll)\\/link/;
    var _closure1_slot14 = tango;
    tango = /connections\\/([a-z-]+)/;
    var _closure1_slot15 = tango;
    tango = /guilds\\/(\d+)\\/settings(?:\\/([a-z-]+)(?:\\/([a-z-]+))?)?/;
    var _closure1_slot16 = tango;
    tango = /guilds\\/settings(?:\\/([a-z-]+)(?:\\/([a-z-]+))?)?/;
    var _closure1_slot17 = tango;
    tango = /activate/;
    var _closure1_slot18 = tango;
    tango = /quests\\/(\d+)/;
    var _closure1_slot19 = tango;
    tango = function(argFoo) { // Original name: parseQuery
        _fun90486: for(var _fun90486_ip = 0; ; ) switch(_fun90486_ip) {
 0:
            entity = argFoo;
 3: // try_start_0
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.parse;
            report = mike.bind(zulu)(entity);
            entity = global;
            zulu = entity.Object;
            mike = zulu.fromEntries;
            tango = entity.Object;
            entity = tango.entries;
            report = entity.bind(tango)(report);
            tango = report.map;
            entity = function(argFoo) {
                _fun90487: for(var _fun90487_ip = 0; ; ) switch(_fun90487_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    tango = report().value;
                    mike = entity;
                    golf = undefined;
                    zulu = mike === golf;
                    mike = undefined;
                    if(zulu) { _fun90487_ip = 27; continue _fun90487 }
 24:
                    mike = tango;
 27:
                    tango = undefined;
                    if(zulu) { _fun90487_ip = 57; continue _fun90487 }
 32:
                    oscar = report().value;
                    report = entity;
                    report = report === golf;
                    tango = undefined;
                    zulu = report;
                    if(report) { _fun90487_ip = 57; continue _fun90487 }
 51:
                    tango = oscar;
                    zulu = report;
 57:
                    if(zulu) { _fun90487_ip = 63; continue _fun90487 }
 60:
                    entity.return();
 63:
                    entity = new Array(2);
                    entity[0] = mike;
                    mike = global;
                    zulu = mike.Array;
                    mike = zulu.isArray;
                    zulu = mike.bind(zulu)(tango);
                    mike = tango;
                    if(!zulu) { _fun90487_ip = 101; continue _fun90487 }
 95:
                    zulu = 0;
                    mike = tango[zulu];
 101:
                    entity[1] = mike;
                    return entity;
                }
            };
            entity = tango.bind(report)(entity);
            entity = mike.bind(zulu)(entity);
 94: // try_end0
            return entity;
 96: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = {};
            return entity;
        }
    };
    var _closure1_slot20 = tango;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/native/parseURL.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: parseURL
        _fun90488: for(var _fun90488_ip = 0; ; ) switch(_fun90488_ip) {
 0:
            vacuum = arguments[1];
            yankee = undefined;
            if(!(vacuum === yankee)) { _fun90488_ip = 13; continue _fun90488 }
 11:
            vacuum = false;
 13:
            var _closure2_slot0 = yankee;
            mike = _closure1_slot1;
            entity = _closure1_slot2;
            context = 4;
            entity = entity[context];
            tango = mike.bind(yankee)(entity);
            mike = tango.sanitizeUrl;
            entity = argFoo;
            sierra = mike.bind(tango)(entity);
            backup = null;
            if(!(backup != sierra)) { _fun90488_ip = 4465; continue _fun90488 }
 63:
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 5;
            entity = tango[entity];
            mike = mike.bind(yankee)(entity);
            entity = mike.parse;
            entity = entity.bind(mike)(sierra);
            sizing = entity.protocol;
            papa = entity.host;
            lima = entity.pathname;
            foxtrot = entity.query;
            tango = _closure1_slot20;
            report = backup != foxtrot;
            entity = '';
            mike = entity;
            if(!report) { _fun90488_ip = 138; continue _fun90488 }
 135:
            mike = foxtrot;
 138:
            oscar = tango.bind(yankee)(mike);
            mike = oscar.fingerprint;
            report = oscar.username;
            tango = oscar.attemptId;
            result = oscar.friend_token;
            romeo = oscar.custom_id;
            offset = oscar.referrer_id;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = 6;
            oscar = verify[oscar];
            options = options.bind(yankee)(oscar);
            oscar = options.findCodedLink;
            oscar = oscar.bind(options)(sierra);
            if(!(backup != oscar)) { _fun90488_ip = 973; continue _fun90488 }
 216:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            output = 7;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.INVITE;
            if(!(verify !== options)) { _fun90488_ip = 4411; continue _fun90488 }
 260:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.TEMPLATE;
            if(!(verify !== options)) { _fun90488_ip = 4366; continue _fun90488 }
 301:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.BUILD_OVERRIDE;
            if(!(verify !== options)) { _fun90488_ip = 4321; continue _fun90488 }
 342:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.MANUAL_BUILD_OVERRIDE;
            if(!(verify !== options)) { _fun90488_ip = 4321; continue _fun90488 }
 383:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.EVENT;
            if(!(verify !== options)) { _fun90488_ip = 973; continue _fun90488 }
 424:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.CHANNEL_LINK;
            if(!(verify !== options)) { _fun90488_ip = 973; continue _fun90488 }
 465:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.APP_DIRECTORY_PROFILE;
            if(!(verify !== options)) { _fun90488_ip = 973; continue _fun90488 }
 506:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.ACTIVITY_BOOKMARK;
            if(!(verify !== options)) { _fun90488_ip = 914; continue _fun90488 }
 547:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.EMBEDDED_ACTIVITY_INVITE;
            if(!(verify !== options)) { _fun90488_ip = 973; continue _fun90488 }
 588:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.GUILD_PRODUCT;
            if(!(verify !== options)) { _fun90488_ip = 973; continue _fun90488 }
 629:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.SERVER_SHOP;
            if(!(verify !== options)) { _fun90488_ip = 973; continue _fun90488 }
 670:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.QUESTS_EMBED;
            if(!(verify !== options)) { _fun90488_ip = 973; continue _fun90488 }
 711:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.APP_DIRECTORY_STOREFRONT;
            if(!(verify !== options)) { _fun90488_ip = 973; continue _fun90488 }
 752:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(verify !== options)) { _fun90488_ip = 973; continue _fun90488 }
 793:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.APP_OAUTH2_LINK;
            if(!(verify !== options)) { _fun90488_ip = 973; continue _fun90488 }
 834:
            verify = oscar.type;
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            options = options[output];
            options = kilo.bind(yankee)(options);
            options = options.CodedLinkType;
            options = options.COLLECTIBLES_SHOP;
            if(!(verify !== options)) { _fun90488_ip = 973; continue _fun90488 }
 872:
            options = global;
            verify = options.Error;
            output = oscar.type;
            options = options.HermesInternal;
            kilo = options.concat;
            options = 'Unknown coded link type: ';
            options = kilo.bind(options)(output);
            options = verify.bind(yankee)(options);
            throw options;
 914:
            options = {};
            options['fingerprint'] = mike;
            options['attemptId'] = tango;
            verify = {};
            kilo = _closure1_slot7;
            kilo = kilo.ACTIVITY;
            verify['type'] = kilo;
            kilo = oscar.code;
            verify['applicationId'] = kilo;
            verify['customId'] = romeo;
            verify['referrerId'] = offset;
            verify['isDeepLink'] = vacuum;
            options['payload'] = verify;
            return options;
 973:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            options = 8;
            options = offset[options];
            options = verify.bind(yankee)(options);
            options = options.findGiftCodes;
            verify = options.bind(yankee)(sierra);
            offset = verify.length;
            options = 0;
            if(!(!(offset > options))) { _fun90488_ip = 4277; continue _fun90488 }
 1018:
            romeo = _closure1_slot0;
            kilo = _closure1_slot2;
            offset = 9;
            offset = kilo[offset];
            romeo = romeo.bind(yankee)(offset);
            offset = romeo.findRemoteAuthFingerprint;
            offset = offset.bind(romeo)(papa, lima);
            if(!(backup != offset)) { _fun90488_ip = 1066; continue _fun90488 }
 1054:
            romeo = offset.length;
            if(!(!(romeo > options))) { _fun90488_ip = 4237; continue _fun90488 }
 1066:
            kilo = _closure1_slot1;
            romeo = _closure1_slot2;
            output = 10;
            romeo = romeo[output];
            kilo = kilo.bind(yankee)(romeo);
            romeo = kilo.isDiscordHostname;
            romeo = romeo.bind(kilo)(papa);
            if(romeo) { _fun90488_ip = 1134; continue _fun90488 }
 1100:
            kilo = _closure1_slot1;
            romeo = _closure1_slot2;
            romeo = romeo[output];
            kilo = kilo.bind(yankee)(romeo);
            romeo = kilo.isDiscordProtocol;
            romeo = romeo.bind(kilo)(sizing);
            if(!romeo) { _fun90488_ip = 2805; continue _fun90488 }
 1134:
            if(!(backup != lima)) { _fun90488_ip = 2805; continue _fun90488 }
 1141:
            kilo = _closure1_slot0;
            romeo = _closure1_slot2;
            sequence = 11;
            romeo = romeo[sequence];
            kilo = kilo.bind(yankee)(romeo);
            romeo = kilo.tryParseChannelPath;
            romeo = romeo.bind(kilo)(lima);
            if(!(backup == romeo)) { _fun90488_ip = 4124; continue _fun90488 }
 1179:
            sizing = lima.match;
            kilo = _closure1_slot19;
            output = sizing.bind(lima)(kilo);
            if(!(backup != output)) { _fun90488_ip = 1213; continue _fun90488 }
 1198:
            kilo = output.length;
            sizing = 1;
            if(!(!(kilo > sizing))) { _fun90488_ip = 4080; continue _fun90488 }
 1213:
            echo = lima.match;
            kilo = _closure1_slot10;
            update = echo.bind(lima)(kilo);
            if(!(backup != update)) { _fun90488_ip = 1247; continue _fun90488 }
 1232:
            kilo = update.length;
            echo = 1;
            if(!(!(kilo > echo))) { _fun90488_ip = 4032; continue _fun90488 }
 1247:
            source = lima.match;
            kilo = _closure1_slot11;
            kilo = source.bind(lima)(kilo);
            if(!(backup != kilo)) { _fun90488_ip = 1317; continue _fun90488 }
 1266:
            source = _closure1_slot0;
            control = _closure1_slot2;
            kilo = 12;
            kilo = control[kilo];
            control = source.bind(yankee)(kilo);
            source = control.parseOAuth2AuthorizeProps;
            config = backup != foxtrot;
            kilo = entity;
            if(!config) { _fun90488_ip = 1305; continue _fun90488 }
 1302:
            kilo = foxtrot;
 1305:
            control = source.bind(control)(kilo);
            if(!(backup == control)) { _fun90488_ip = 3972; continue _fun90488 }
 1317:
            source = lima.match;
            kilo = _closure1_slot9;
            source = source.bind(lima)(kilo);
            if(!(backup != source)) { _fun90488_ip = 2638; continue _fun90488 }
 1339:
            config = source.length;
            kilo = 1;
            if(!(config > kilo)) { _fun90488_ip = 2638; continue _fun90488 }
 1354:
            config = source[kilo];
            kilo = 'composeMessage';
            if(!(kilo !== config)) { _fun90488_ip = 2612; continue _fun90488 }
 1371:
            kilo = 'contactSync';
            if(!(kilo !== config)) { _fun90488_ip = 2591; continue _fun90488 }
 1384:
            kilo = 'addFriends';
            if(!(kilo !== config)) { _fun90488_ip = 2570; continue _fun90488 }
 1397:
            kilo = 'friends';
            if(!(kilo !== config)) { _fun90488_ip = 2517; continue _fun90488 }
 1408:
            kilo = 'editProfile';
            if(!(kilo !== config)) { _fun90488_ip = 2496; continue _fun90488 }
 1421:
            kilo = 'voiceChannel';
            if(!(kilo !== config)) { _fun90488_ip = 2402; continue _fun90488 }
 1432:
            kilo = 'sessionManagement';
            if(!(kilo !== config)) { _fun90488_ip = 2378; continue _fun90488 }
 1445:
            kilo = 'home';
            if(!(kilo !== config)) { _fun90488_ip = 2301; continue _fun90488 }
 1456:
            kilo = 'icymi';
            if(!(kilo !== config)) { _fun90488_ip = 2277; continue _fun90488 }
 1467:
            kilo = 'connections';
            if(!(kilo !== config)) { _fun90488_ip = 2222; continue _fun90488 }
 1478:
            kilo = 'family-center';
            if(!(kilo !== config)) { _fun90488_ip = 2193; continue _fun90488 }
 1491:
            kilo = 'promo-url';
            if(!(kilo !== config)) { _fun90488_ip = 2125; continue _fun90488 }
 1504:
            kilo = 'account-standing';
            if(!(kilo !== config)) { _fun90488_ip = 2096; continue _fun90488 }
 1517:
            kilo = 'open-shop';
            if(!(kilo !== config)) { _fun90488_ip = 2072; continue _fun90488 }
 1530:
            kilo = 'authorized-apps';
            if(!(kilo !== config)) { _fun90488_ip = 2048; continue _fun90488 }
 1543:
            kilo = 'share';
            if(!(kilo !== config)) { _fun90488_ip = 1817; continue _fun90488 }
 1554:
            kilo = 'dave-protocol-verification';
            if(!(kilo !== config)) { _fun90488_ip = 1633; continue _fun90488 }
 1564:
            kilo = 'gift';
            if(!(kilo !== config)) { _fun90488_ip = 1609; continue _fun90488 }
 1572:
            source = 'store';
            kilo = null;
            if(!(source === config)) { _fun90488_ip = 2631; continue _fun90488 }
 1585:
            source = {};
            config = _closure1_slot7;
            config = config.NITRO_HOME;
            source['type'] = config;
            kilo = source;
            _fun90488_ip = 2631; continue _fun90488;
 1609:
            source = {};
            config = _closure1_slot7;
            config = config.GIFT;
            source['type'] = config;
            kilo = source;
            _fun90488_ip = 2631; continue _fun90488;
 1633:
            config = _closure1_slot20;
            record = backup != foxtrot;
            source = entity;
            if(!record) { _fun90488_ip = 1650; continue _fun90488 }
 1647:
            source = foxtrot;
 1650:
            source = config.bind(yankee)(source);
            record = source.userId;
            config = source.fingerprint;
            source = backup != record;
            kilo = null;
            if(!source) { _fun90488_ip = 2631; continue _fun90488 }
 1678:
            source = backup != config;
            kilo = null;
            if(!source) { _fun90488_ip = 2631; continue _fun90488 }
 1690:
            status = _closure1_slot0;
            whiskey = _closure1_slot2;
            source = 14;
            source = whiskey[source];
            quebec = status.bind(yankee)(source);
            target = quebec.getSecureFramesUIExperiment;
            source = {};
            equality = 'parseUrl';
            source['location'] = equality;
            source = target.bind(quebec)(source);
            source = source.enabled;
            target = 15;
            target = whiskey[target];
            whiskey = status.bind(yankee)(target);
            status = whiskey.getSecureFramesDeeplinkExperiment;
            target = {};
            target['location'] = equality;
            target = status.bind(whiskey)(target);
            target = target.enabled;
            if(!source) { _fun90488_ip = 1776; continue _fun90488 }
 1773:
            source = target;
 1776:
            kilo = null;
            if(!source) { _fun90488_ip = 2631; continue _fun90488 }
 1784:
            source = {};
            target = _closure1_slot7;
            target = target.DAVE_PROTOCOL_VERIFICATION;
            source['type'] = target;
            source['userId'] = record;
            source['fingerprint'] = config;
            kilo = source;
            _fun90488_ip = 2631; continue _fun90488;
 1817:
            config = _closure1_slot0;
            record = _closure1_slot2;
            source = 13;
            source = record[source];
            config = config.bind(yankee)(source);
            source = config.isIOS;
            source = source.bind(config)();
            kilo = null;
            if(!source) { _fun90488_ip = 2631; continue _fun90488 }
 1855:
            config = _closure1_slot20;
            record = backup != foxtrot;
            source = entity;
            if(!record) { _fun90488_ip = 1872; continue _fun90488 }
 1869:
            source = foxtrot;
 1872:
            config = config.bind(yankee)(source);
            target = config.text;
            record = config.channelId;
            source = config.shareId;
            equality = config.attachmentManifest;
            whiskey = function(argFoo) { // Original name: isValidUUID
                zulu = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                mike = zulu.test;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            _closure2_slot0 = whiskey;
            status = 'string';
            quebec = typeof source;
            config = undefined;
            if(!(status === quebec)) { _fun90488_ip = 1936; continue _fun90488 }
 1923:
            whiskey = whiskey.bind(yankee)(source);
            config = undefined;
            if(!whiskey) { _fun90488_ip = 1936; continue _fun90488 }
 1933:
            config = source;
 1936:
            source = typeof equality;
            if(!(status !== source)) { _fun90488_ip = 1947; continue _fun90488 }
 1943:
            whiskey = {};
            _fun90488_ip = 1966; continue _fun90488;
 1947:
            source = global;
            status = source.JSON;
            source = status.parse;
            whiskey = source.bind(status)(equality);
 1966:
            source = global;
            status = source.Object;
            source = status.entries;
            whiskey = source.bind(status)(whiskey);
            status = whiskey.reduce;
            source = function(argFoo, argBar) {
                _fun90490: for(var _fun90490_ip = 0; ; ) switch(_fun90490_ip) {
 0:
                    entity = argFoo;
                    golf = argBar;
                    tango = golf[Symbol.iterator];
                    golf = tango().next;
                    mike = golf().value;
                    zulu = tango;
                    report = undefined;
                    oscar = zulu === report;
                    zulu = undefined;
                    if(oscar) { _fun90490_ip = 30; continue _fun90490 }
 27:
                    zulu = mike;
 30:
                    mike = undefined;
                    if(oscar) { _fun90490_ip = 60; continue _fun90490 }
 35:
                    options = golf().value;
                    golf = tango;
                    golf = golf === report;
                    mike = undefined;
                    oscar = golf;
                    if(golf) { _fun90490_ip = 60; continue _fun90490 }
 54:
                    mike = options;
                    oscar = golf;
 60:
                    if(oscar) { _fun90490_ip = 66; continue _fun90490 }
 63:
                    tango.return();
 66:
                    tango = _closure2_slot0;
                    tango = tango.bind(report)(zulu);
                    if(!tango) { _fun90490_ip = 92; continue _fun90490 }
 81:
                    oscar = 'string';
                    report = typeof mike;
                    tango = oscar === report;
 92:
                    if(!tango) { _fun90490_ip = 99; continue _fun90490 }
 95:
                    entity[zulu] = mike;
 99:
                    return entity;
                }
            };
            golf = {};
            source = status.bind(whiskey)(source, golf);
            golf = {};
            status = _closure1_slot7;
            status = status.SHARE;
            golf['type'] = status;
            golf['text'] = target;
            golf['channelId'] = record;
            golf['shareId'] = config;
            golf['attachmentManifest'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2048:
            golf = {};
            source = _closure1_slot7;
            source = source.AUTHORIZED_APPS;
            golf['type'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2072:
            golf = {};
            source = _closure1_slot7;
            source = source.SHOP;
            golf['type'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2096:
            golf = {};
            source = _closure1_slot7;
            source = source.ACCOUNT_STANDING;
            golf['type'] = source;
            golf['pathname'] = lima;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2125:
            source = _closure1_slot20;
            config = backup != foxtrot;
            golf = entity;
            if(!config) { _fun90488_ip = 2142; continue _fun90488 }
 2139:
            golf = foxtrot;
 2142:
            golf = source.bind(yankee)(golf);
            source = golf.promo_url;
            kilo = null;
            if(!(yankee !== source)) { _fun90488_ip = 2631; continue _fun90488 }
 2164:
            golf = {};
            config = _closure1_slot7;
            config = config.FEATURE_PROMO_URL;
            golf['type'] = config;
            golf['promoUrl'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2193:
            golf = {};
            source = _closure1_slot7;
            source = source.FAMILY_CENTER;
            golf['type'] = source;
            golf['pathname'] = lima;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2222:
            source = _closure1_slot20;
            config = backup != foxtrot;
            golf = entity;
            if(!config) { _fun90488_ip = 2239; continue _fun90488 }
 2236:
            golf = foxtrot;
 2239:
            golf = source.bind(yankee)(golf);
            source = golf.source;
            golf = {};
            config = _closure1_slot7;
            config = config.CONNECTIONS;
            golf['type'] = config;
            golf['source'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2277:
            golf = {};
            source = _closure1_slot7;
            source = source.ICYMI;
            golf['type'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2301:
            source = _closure1_slot20;
            config = backup != foxtrot;
            golf = entity;
            if(!config) { _fun90488_ip = 2318; continue _fun90488 }
 2315:
            golf = foxtrot;
 2318:
            golf = source.bind(yankee)(golf);
            record = golf.guild_id;
            config = golf.highlight_channel_id;
            source = golf.highlight_message_id;
            golf = {};
            target = _closure1_slot7;
            target = target.GUILD_HOME;
            golf['type'] = target;
            golf['guildId'] = record;
            golf['highlightChannelId'] = config;
            golf['highlightMessageId'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2378:
            golf = {};
            source = _closure1_slot7;
            source = source.SESSION_MANAGEMENT;
            golf['type'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2402:
            source = _closure1_slot20;
            config = backup != foxtrot;
            golf = entity;
            if(!config) { _fun90488_ip = 2419; continue _fun90488 }
 2416:
            golf = foxtrot;
 2419:
            golf = source.bind(yankee)(golf);
            status = golf.guild_id;
            target = golf.channel_id;
            record = golf.user_id;
            config = golf.via;
            source = golf.action;
            golf = {};
            whiskey = _closure1_slot7;
            whiskey = whiskey.VOICE_CHANNEL;
            golf['type'] = whiskey;
            golf['guildId'] = status;
            golf['channelId'] = target;
            golf['userId'] = record;
            golf['via'] = config;
            golf['action'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2496:
            golf = {};
            source = _closure1_slot7;
            source = source.EDIT_PROFILE;
            golf['type'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2517:
            source = _closure1_slot20;
            config = backup != foxtrot;
            golf = entity;
            if(!config) { _fun90488_ip = 2534; continue _fun90488 }
 2531:
            golf = foxtrot;
 2534:
            golf = source.bind(yankee)(golf);
            source = golf.user_id;
            golf = {};
            config = _closure1_slot7;
            config = config.FRIENDS;
            golf['type'] = config;
            golf['userId'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2570:
            golf = {};
            source = _closure1_slot7;
            source = source.ADD_FRIENDS;
            golf['type'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2591:
            golf = {};
            source = _closure1_slot7;
            source = source.CONTACT_SYNC;
            golf['type'] = source;
            kilo = golf;
            _fun90488_ip = 2631; continue _fun90488;
 2612:
            golf = {};
            source = _closure1_slot7;
            source = source.COMPOSE_MESSAGE;
            golf['type'] = source;
            kilo = golf;
 2631:
            if(!(backup == kilo)) { _fun90488_ip = 3953; continue _fun90488 }
 2638:
            source = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[sequence];
            source = source.bind(yankee)(golf);
            golf = source.tryParseEventDetailsPath;
            sequence = golf.bind(source)(lima);
            if(!(backup == sequence)) { _fun90488_ip = 3887; continue _fun90488 }
 2673:
            source = lima.match;
            golf = _closure1_slot13;
            golf = source.bind(lima)(golf);
            if(!(backup == golf)) { _fun90488_ip = 3554; continue _fun90488 }
 2695:
            source = lima.match;
            golf = _closure1_slot14;
            source = source.bind(lima)(golf);
            if(!(backup == source)) { _fun90488_ip = 3452; continue _fun90488 }
 2717:
            config = lima.match;
            golf = _closure1_slot15;
            record = config.bind(lima)(golf);
            if(!(backup == record)) { _fun90488_ip = 3348; continue _fun90488 }
 2739:
            config = lima.match;
            golf = _closure1_slot16;
            config = config.bind(lima)(golf);
            if(!(backup == config)) { _fun90488_ip = 3219; continue _fun90488 }
 2761:
            target = lima.match;
            golf = _closure1_slot17;
            target = target.bind(lima)(golf);
            if(!(backup == target)) { _fun90488_ip = 3065; continue _fun90488 }
 2783:
            status = lima.match;
            golf = _closure1_slot18;
            golf = status.bind(lima)(golf);
            if(!(backup == golf)) { _fun90488_ip = 2984; continue _fun90488 }
 2805:
            status = backup == papa;
            golf = undefined;
            if(status) { _fun90488_ip = 2829; continue _fun90488 }
 2814:
            lima = papa.match;
            status = _closure1_slot12;
            golf = lima.bind(papa)(status);
 2829:
            if(!(backup == golf)) { _fun90488_ip = 2942; continue _fun90488 }
 2833:
            golf = _closure1_slot8;
            status = backup == golf;
            golf = undefined;
            if(status) { _fun90488_ip = 2861; continue _fun90488 }
 2846:
            status = _closure1_slot8;
            status = status.url;
            golf = status.host;
 2861:
            if(!(papa !== golf)) { _fun90488_ip = 2900; continue _fun90488 }
 2865:
            golf = {};
            golf['fingerprint'] = mike;
            golf['attemptId'] = tango;
            papa = {};
            status = _closure1_slot7;
            status = status.NONE;
            papa['type'] = status;
            golf['payload'] = papa;
            _fun90488_ip = 2940; continue _fun90488;
 2900:
            papa = {};
            papa['fingerprint'] = mike;
            papa['attemptId'] = tango;
            status = {};
            lima = _closure1_slot7;
            lima = lima.MOBILE_NATIVE_UPDATE;
            status['type'] = lima;
            status['url'] = sierra;
            papa['payload'] = status;
            golf = papa;
 2940:
            _fun90488_ip = 2982; continue _fun90488;
 2942:
            papa = {};
            papa['fingerprint'] = mike;
            papa['attemptId'] = tango;
            status = {};
            lima = _closure1_slot7;
            lima = lima.PROMOTIONS;
            status['type'] = lima;
            status['url'] = sierra;
            papa['payload'] = status;
            golf = papa;
 2982:
            return golf;
 2984:
            papa = _closure1_slot20;
            golf = global;
            status = golf.decodeURIComponent;
            sierra = backup != foxtrot;
            golf = entity;
            if(!sierra) { _fun90488_ip = 3009; continue _fun90488 }
 3006:
            golf = foxtrot;
 3009:
            golf = status.bind(yankee)(golf);
            golf = papa.bind(yankee)(golf);
            status = golf.user_code;
            golf = {};
            golf['fingerprint'] = mike;
            golf['attemptId'] = tango;
            papa = {};
            sierra = _closure1_slot7;
            sierra = sierra.ACTIVATE_DEVICE;
            papa['type'] = sierra;
            papa['userCode'] = status;
            golf['payload'] = papa;
            return golf;
 3065:
            papa = _closure1_slot3;
            golf = 3;
            papa = papa.bind(yankee)(target, golf);
            golf = 1;
            variable36 = papa[golf];
            golf = 2;
            lima = papa[golf];
            papa = _closure1_slot20;
            target = backup != foxtrot;
            golf = entity;
            if(!target) { _fun90488_ip = 3109; continue _fun90488 }
 3106:
            golf = foxtrot;
 3109:
            golf = papa.bind(yankee)(golf);
            target = golf.feature;
            golf = {};
            golf['fingerprint'] = mike;
            golf['attemptId'] = tango;
            papa = {};
            status = _closure1_slot7;
            status = status.GUILD_SETTINGS_PICKER;
            papa['type'] = status;
            sierra = _closure1_slot1;
            whiskey = _closure1_slot2;
            status = 18;
            equality = whiskey[status];
            quebec = sierra.bind(yankee)(equality);
            equality = _closure1_slot5;
            equality = quebec.bind(yankee)(equality, variable36);
            papa['settingsSection'] = equality;
            status = whiskey[status];
            sierra = sierra.bind(yankee)(status);
            status = _closure1_slot6;
            status = sierra.bind(yankee)(status, lima);
            papa['settingsSubsection'] = status;
            papa['feature'] = target;
            golf['payload'] = papa;
            return golf;
 3219:
            golf = _closure1_slot3;
            config = golf.bind(yankee)(config, context);
            golf = 1;
            context = config[golf];
            golf = 2;
            whiskey = config[golf];
            golf = 3;
            target = config[golf];
            golf = {};
            golf['fingerprint'] = mike;
            golf['attemptId'] = tango;
            config = {};
            papa = _closure1_slot7;
            papa = papa.GUILD_SETTINGS;
            config['type'] = papa;
            config['guildId'] = context;
            papa = _closure1_slot1;
            status = _closure1_slot2;
            context = 18;
            sierra = status[context];
            lima = papa.bind(yankee)(sierra);
            sierra = _closure1_slot5;
            sierra = lima.bind(yankee)(sierra, whiskey);
            config['settingsSection'] = sierra;
            context = status[context];
            papa = papa.bind(yankee)(context);
            context = _closure1_slot6;
            context = papa.bind(yankee)(context, target);
            config['settingsSubsection'] = context;
            golf['payload'] = config;
            return golf;
 3348:
            config = _closure1_slot3;
            golf = 2;
            config = config.bind(yankee)(record, golf);
            golf = config[options];
            golf = 1;
            context = config[golf];
            config = _closure1_slot20;
            golf = global;
            record = golf.decodeURIComponent;
            papa = backup != foxtrot;
            golf = entity;
            if(!papa) { _fun90488_ip = 3397; continue _fun90488 }
 3394:
            golf = foxtrot;
 3397:
            golf = record.bind(yankee)(golf);
            record = config.bind(yankee)(golf);
            golf = {};
            golf['fingerprint'] = mike;
            golf['attemptId'] = tango;
            config = {};
            papa = _closure1_slot7;
            papa = papa.USER_CONNECTIONS_CALLBACK;
            config['type'] = papa;
            config['provider'] = context;
            config['searchParams'] = record;
            golf['payload'] = config;
            return golf;
 3452:
            config = _closure1_slot20;
            golf = global;
            record = golf.decodeURIComponent;
            context = backup != foxtrot;
            golf = entity;
            if(!context) { _fun90488_ip = 3477; continue _fun90488 }
 3474:
            golf = foxtrot;
 3477:
            golf = record.bind(yankee)(golf);
            golf = config.bind(yankee)(golf);
            record = golf.code;
            config = golf.state;
            golf = 1;
            context = source[golf];
            golf = {};
            golf['fingerprint'] = mike;
            golf['attemptId'] = tango;
            source = {};
            papa = _closure1_slot7;
            papa = papa.USER_CONNECTIONS_LINK_CALLBACK;
            source['type'] = papa;
            source['provider'] = context;
            source['callbackCode'] = record;
            source['callbackState'] = config;
            golf['payload'] = source;
            return golf;
 3554:
            config = _closure1_slot20;
            golf = global;
            source = golf.decodeURIComponent;
            source = source.bind(yankee)(foxtrot);
            source = config.bind(yankee)(source);
            context = source.key;
            papa = source.redirect;
            target = source.fingerprint;
            if(!(backup != context)) { _fun90488_ip = 3759; continue _fun90488 }
 3600:
            if(!(backup != papa)) { _fun90488_ip = 3759; continue _fun90488 }
 3607:
            record = golf.URL;
            source = golf.location;
            status = source.protocol;
            source = golf.window;
            source = source.GLOBAL_ENV;
            config = source.WEBAPP_ENDPOINT;
            source = golf.HermesInternal;
            source = source.concat;
            variable38 = source.bind(entity)(status, config);
            config = record.prototype;
            config = Object.create(config, {constructor: {value: record}});
            variable40 = config;
            variable39 = papa;
            source = new variable40[record](variable39, variable38, variable37);
            record = source instanceof Object ? source : config;
            if(!(backup != target)) { _fun90488_ip = 3709; continue _fun90488 }
 3687:
            papa = record.searchParams;
            config = papa.append;
            source = 'fingerprint';
            source = config.bind(papa)(source, target);
 3709:
            source = {};
            source['fingerprint'] = target;
            source['attemptId'] = tango;
            config = {};
            papa = _closure1_slot7;
            papa = papa.MOBILE_WEB_HANDOFF;
            config['type'] = papa;
            config['nonce'] = context;
            config['redirectUrl'] = record;
            config['fingerprint'] = target;
            source['payload'] = config;
            return source;
 3759:
            config = _closure1_slot1;
            sierra = _closure1_slot2;
            source = 16;
            source = sierra[source];
            papa = config.bind(yankee)(source);
            context = papa.track;
            source = _closure1_slot4;
            record = source.MOBILE_WEB_HANDOFF_FAILURE;
            config = {};
            source = 'invalid_query_params';
            config['reason'] = source;
            status = _closure1_slot0;
            source = 17;
            source = sierra[source];
            status = status.bind(yankee)(source);
            source = status.maybeExtractId;
            source = source.bind(status)(target);
            config['fingerprint'] = source;
            source = {};
            source['fingerprint'] = target;
            source = context.bind(papa)(record, config, source);
            config = golf.Error;
            golf = config.prototype;
            source = Object.create(golf, {constructor: {value: config}});
            variable39 = 'Missing nonce or redirect query params';
            variable40 = source;
            golf = new variable40[config](variable39, variable38);
            golf = golf instanceof Object ? golf : source;
            throw golf;
 3887:
            golf = {};
            golf['fingerprint'] = mike;
            golf['attemptId'] = tango;
            source = {};
            config = _closure1_slot7;
            config = config.GUILD_EVENT_DETAILS;
            source['type'] = config;
            config = sequence.guildEventId;
            source['guildEventId'] = config;
            config = sequence.guildId;
            source['guildId'] = config;
            sequence = sequence.recurrenceId;
            source['recurrenceId'] = sequence;
            golf['payload'] = source;
            return golf;
 3953:
            golf = {};
            golf['fingerprint'] = mike;
            golf['attemptId'] = tango;
            golf['payload'] = kilo;
            return golf;
 3972:
            golf = {};
            golf['fingerprint'] = mike;
            golf['attemptId'] = tango;
            kilo = {};
            source = _closure1_slot7;
            source = source.OAUTH2_AUTHORIZE;
            kilo['type'] = source;
            source = {};
            variable39 = source;
            variable38 = control;
            control = copyDataProperties(variable39, variable38);
            control = 'wasDeepLink';
            source[control] = vacuum;
            kilo['props'] = source;
            golf['payload'] = kilo;
            return golf;
 4032:
            golf = {};
            golf['fingerprint'] = mike;
            golf['attemptId'] = tango;
            kilo = {};
            source = _closure1_slot7;
            source = source.USER_PROFILE;
            kilo['type'] = source;
            echo = update[echo];
            kilo['userId'] = echo;
            kilo['friendToken'] = result;
            golf['payload'] = kilo;
            return golf;
 4080:
            golf = {};
            golf['fingerprint'] = mike;
            golf['attemptId'] = tango;
            kilo = {};
            result = _closure1_slot7;
            result = result.QUESTS;
            kilo['type'] = result;
            sizing = output[sizing];
            kilo['questId'] = sizing;
            golf['payload'] = kilo;
            return golf;
 4124:
            golf = _closure1_slot20;
            kilo = backup != foxtrot;
            if(!kilo) { _fun90488_ip = 4138; continue _fun90488 }
 4135:
            entity = foxtrot;
 4138:
            entity = golf.bind(yankee)(entity);
            yankee = entity.summaryId;
            entity = {};
            entity['fingerprint'] = mike;
            entity['attemptId'] = tango;
            golf = {};
            foxtrot = romeo.messageId;
            if(!(backup == foxtrot)) { _fun90488_ip = 4184; continue _fun90488 }
 4172:
            foxtrot = _closure1_slot7;
            foxtrot = foxtrot.CHANNEL;
            _fun90488_ip = 4194; continue _fun90488;
 4184:
            backup = _closure1_slot7;
            foxtrot = backup.MESSAGE;
 4194:
            golf['type'] = foxtrot;
            foxtrot = romeo.guildId;
            golf['guildId'] = foxtrot;
            foxtrot = romeo.channelId;
            golf['channelId'] = foxtrot;
            romeo = romeo.messageId;
            golf['messageId'] = romeo;
            golf['summaryId'] = yankee;
            entity['payload'] = golf;
            return entity;
 4237:
            entity = {};
            entity['fingerprint'] = mike;
            entity['attemptId'] = tango;
            golf = {};
            yankee = _closure1_slot7;
            yankee = yankee.REMOTE_AUTH;
            golf['type'] = yankee;
            golf['remoteAuthFingerprint'] = offset;
            entity['payload'] = golf;
            return entity;
 4277:
            entity = {};
            entity['fingerprint'] = mike;
            entity['attemptId'] = tango;
            golf = {};
            offset = _closure1_slot7;
            offset = offset.GIFT_CODE;
            golf['type'] = offset;
            options = verify[options];
            golf['giftCode'] = options;
            entity['payload'] = golf;
            return entity;
 4321:
            entity = {};
            entity['fingerprint'] = mike;
            entity['attemptId'] = tango;
            golf = {};
            options = _closure1_slot7;
            options = options.BUILD_OVERRIDE;
            golf['type'] = options;
            options = oscar.code;
            golf['overrideUrl'] = options;
            entity['payload'] = golf;
            return entity;
 4366:
            entity = {};
            entity['fingerprint'] = mike;
            entity['attemptId'] = tango;
            golf = {};
            options = _closure1_slot7;
            options = options.GUILD_TEMPLATE;
            golf['type'] = options;
            options = oscar.code;
            golf['guildTemplateCode'] = options;
            entity['payload'] = golf;
            return entity;
 4411:
            entity = {};
            entity['fingerprint'] = mike;
            entity['attemptId'] = tango;
            mike = {};
            golf = _closure1_slot7;
            golf = golf.INVITE;
            mike['type'] = golf;
            oscar = oscar.code;
            mike['inviteCode'] = oscar;
            mike['username'] = report;
            mike['deeplinkAttemptId'] = tango;
            entity['payload'] = mike;
            return entity;
 4465:
            entity = {};
            mike = {};
            zulu = _closure1_slot7;
            zulu = zulu.NONE;
            mike['type'] = zulu;
            entity['payload'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();