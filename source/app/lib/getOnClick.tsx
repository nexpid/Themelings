// app/lib/getOnClick.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: openInviteModal
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _openInviteModal
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun67470: for(var _fun67470_ip = 0; ; ) switch(_fun67470_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67470_ip = 84; continue _fun67470 }
 7:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 10;
                    mike = zulu[mike];
                    zulu = undefined;
                    report = tango.bind(zulu)(mike);
                    tango = report.dispatch;
                    mike = {};
                    oscar = 'DISPLAYED_INVITE_SHOW';
                    mike['type'] = oscar;
                    oscar = argBar;
                    mike['code'] = oscar;
                    mike['username'] = zulu;
                    mike['deeplinkAttemptId'] = zulu;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=72);
 70:
                    return mike;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun67470_ip = 81; continue _fun67470 }
 78:
                    return zulu;
 81:
                    return mike;
 84:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _handleInviteCodedLink
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun67473: for(var _fun67473_ip = 0; ; ) switch(_fun67473_ip) {
 0:
                    StartGenerator();
                    tango = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67473_ip = 331; continue _fun67473 }
 13:
                    oscar = _closure1_slot6;
                    report = oscar.getInvite;
                    mike = tango.code;
                    report = report.bind(oscar)(mike);
                    golf = null;
                    if(!(golf == report)) { _fun67473_ip = 106; continue _fun67473 }
 42:
                    options = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 11;
                    oscar = oscar[mike];
                    mike = undefined;
                    verify = options.bind(mike)(oscar);
                    options = verify.resolveInvite;
                    oscar = tango.code;
                    mike = 'Markdown Link';
                    mike = options.bind(verify)(oscar, mike);
                    SaveGenerator(address=91);
 89:
                    return mike;
 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun67473_ip = 328; continue _fun67473 }
 100:
                    report = mike.invite;
 106:
                    if(!(golf != report)) { _fun67473_ip = 323; continue _fun67473 }
 113:
                    options = report.state;
                    oscar = _closure1_slot11;
                    oscar = oscar.EXPIRED;
                    if(!(options !== oscar)) { _fun67473_ip = 170; continue _fun67473 }
 132:
                    options = report.state;
                    oscar = _closure1_slot11;
                    oscar = oscar.BANNED;
                    if(!(options !== oscar)) { _fun67473_ip = 170; continue _fun67473 }
 151:
                    options = report.state;
                    oscar = _closure1_slot11;
                    oscar = oscar.ERROR;
                    if(!(options === oscar)) { _fun67473_ip = 203; continue _fun67473 }
 170:
                    verify = _closure1_slot14;
                    options = tango.code;
                    oscar = undefined;
                    oscar = verify.bind(oscar)(report, options);
                    SaveGenerator(address=191);
 189:
                    return oscar;
 191:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(!options) { _fun67473_ip = 323; continue _fun67473 }
 200:
                    return oscar;
 203:
                    options = _closure1_slot9;
                    oscar = options.getFlattenedGuildIds;
                    verify = oscar.bind(options)();
                    offset = golf == report;
                    oscar = undefined;
                    options = undefined;
                    if(offset) { _fun67473_ip = 247; continue _fun67473 }
 228:
                    offset = report.guild;
                    yankee = golf == offset;
                    options = undefined;
                    if(yankee) { _fun67473_ip = 247; continue _fun67473 }
 242:
                    options = offset.id;
 247:
                    if(!(golf != options)) { _fun67473_ip = 264; continue _fun67473 }
 251:
                    golf = verify.includes;
                    golf = golf.bind(verify)(options);
                    if(golf) { _fun67473_ip = 292; continue _fun67473 }
 264:
                    golf = _closure1_slot14;
                    tango = tango.code;
                    tango = golf.bind(oscar)(report, tango);
                    SaveGenerator(address=283);
 281:
                    return tango;
 283:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(!golf) { _fun67473_ip = 323; continue _fun67473 }
 289:
                    return tango;
 292:
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 11;
                    zulu = golf[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.transitionToInviteSync;
                    zulu = zulu.bind(tango)(report);
 323:
                    zulu = undefined;
                    return zulu;
 328:
                    return mike;
 331:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
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
    tango = golf.bind(entity)(tango);
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot10 = golf;
    golf = tango.AppContext;
    golf = tango.InviteStates;
    var _closure1_slot11 = golf;
    golf = tango.Routes;
    tango = tango.UserSettingsSections;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.QuestsExperimentLocations;
    var _closure1_slot12 = tango;
    tango = {};
    tango['skipExtensionCheck'] = entity;
    golf = new Array(0);
    tango['analyticsLocations'] = golf;
    var _closure1_slot13 = tango;
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/getOnClick.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getOnClick
        _fun67474: for(var _fun67474_ip = 0; ; ) switch(_fun67474_ip) {
 0:
            verify = argFoo;
            mike = arguments[1];
            var _closure2_slot0 = verify;
            golf = undefined;
            if(!(mike === golf)) { _fun67474_ip = 25; continue _fun67474 }
 18:
            mike = _closure1_slot13;
 25:
            options = mike.skipExtensionCheck;
            mike = mike.analyticsLocations;
            var _closure2_slot1 = mike;
            var _closure2_slot2 = golf;
            var _closure2_slot3 = golf;
            var _closure2_slot4 = golf;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 12;
            mike = tango[mike];
            zulu = zulu.bind(golf)(mike);
            mike = zulu.findCodedLink;
            mike = mike.bind(zulu)(verify);
            _closure2_slot2 = mike;
            tango = null;
            if(!(tango != mike)) { _fun67474_ip = 182; continue _fun67474 }
 97:
            report = mike.type;
            offset = _closure1_slot0;
            zulu = _closure1_slot2;
            yankee = 13;
            zulu = zulu[yankee];
            zulu = offset.bind(golf)(zulu);
            zulu = zulu.CodedLinkType;
            zulu = zulu.INVITE;
            if(!(report !== zulu)) { _fun67474_ip = 991; continue _fun67474 }
 141:
            report = mike.type;
            offset = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[yankee];
            zulu = offset.bind(golf)(zulu);
            zulu = zulu.CodedLinkType;
            zulu = zulu.EMBEDDED_ACTIVITY_INVITE;
            if(!(report !== zulu)) { _fun67474_ip = 991; continue _fun67474 }
 182:
            if(!(tango != mike)) { _fun67474_ip = 315; continue _fun67474 }
 189:
            report = mike.type;
            offset = _closure1_slot0;
            zulu = _closure1_slot2;
            yankee = 13;
            zulu = zulu[yankee];
            zulu = offset.bind(golf)(zulu);
            zulu = zulu.CodedLinkType;
            zulu = zulu.APP_DIRECTORY_PROFILE;
            if(!(report !== zulu)) { _fun67474_ip = 982; continue _fun67474 }
 233:
            report = mike.type;
            offset = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[yankee];
            zulu = offset.bind(golf)(zulu);
            zulu = zulu.CodedLinkType;
            zulu = zulu.APP_DIRECTORY_STOREFRONT;
            if(!(report !== zulu)) { _fun67474_ip = 982; continue _fun67474 }
 274:
            report = mike.type;
            offset = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[yankee];
            zulu = offset.bind(golf)(zulu);
            zulu = zulu.CodedLinkType;
            zulu = zulu.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(report !== zulu)) { _fun67474_ip = 982; continue _fun67474 }
 315:
            if(!(tango != mike)) { _fun67474_ip = 363; continue _fun67474 }
 319:
            report = mike.type;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 13;
            zulu = yankee[zulu];
            zulu = offset.bind(golf)(zulu);
            zulu = zulu.CodedLinkType;
            zulu = zulu.ACTIVITY_BOOKMARK;
            if(!(report !== zulu)) { _fun67474_ip = 973; continue _fun67474 }
 363:
            if(!(tango != mike)) { _fun67474_ip = 411; continue _fun67474 }
 367:
            report = mike.type;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 13;
            zulu = yankee[zulu];
            zulu = offset.bind(golf)(zulu);
            zulu = zulu.CodedLinkType;
            zulu = zulu.GUILD_PRODUCT;
            if(!(report !== zulu)) { _fun67474_ip = 964; continue _fun67474 }
 411:
            if(!(tango != mike)) { _fun67474_ip = 509; continue _fun67474 }
 415:
            report = mike.type;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 13;
            zulu = yankee[zulu];
            zulu = offset.bind(golf)(zulu);
            zulu = zulu.CodedLinkType;
            zulu = zulu.QUESTS_EMBED;
            if(!(report === zulu)) { _fun67474_ip = 509; continue _fun67474 }
 456:
            report = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 21;
            zulu = offset[zulu];
            offset = report.bind(golf)(zulu);
            report = offset.getIsEligibleForQuests;
            zulu = {};
            yankee = _closure1_slot12;
            yankee = yankee.EMBED_MOBILE;
            zulu['location'] = yankee;
            zulu = report.bind(offset)(zulu);
            if(zulu) { _fun67474_ip = 955; continue _fun67474 }
 509:
            if(!(tango != mike)) { _fun67474_ip = 557; continue _fun67474 }
 513:
            report = mike.type;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 13;
            zulu = yankee[zulu];
            zulu = offset.bind(golf)(zulu);
            zulu = zulu.CodedLinkType;
            zulu = zulu.COLLECTIBLES_SHOP;
            if(!(report !== zulu)) { _fun67474_ip = 946; continue _fun67474 }
 557:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            foxtrot = 24;
            zulu = zulu[foxtrot];
            report = report.bind(golf)(zulu);
            zulu = report.toURLSafe;
            zulu = zulu.bind(report)(verify);
            if(!(tango == zulu)) { _fun67474_ip = 594; continue _fun67474 }
 592:
            zulu = {};
 594:
            romeo = zulu.host;
            output = zulu.hostname;
            yankee = zulu.pathname;
            _closure2_slot3 = yankee;
            report = zulu.search;
            zulu = zulu.hash;
            backup = _closure1_slot1;
            offset = _closure1_slot2;
            offset = offset[foxtrot];
            kilo = backup.bind(golf)(offset);
            backup = kilo.isDiscordHostname;
            sizing = tango != output;
            offset = null;
            if(!sizing) { _fun67474_ip = 662; continue _fun67474 }
 659:
            offset = output;
 662:
            offset = backup.bind(kilo)(offset);
            if(offset) { _fun67474_ip = 723; continue _fun67474 }
 670:
            kilo = _closure1_slot1;
            backup = _closure1_slot2;
            backup = backup[foxtrot];
            sizing = kilo.bind(golf)(backup);
            kilo = sizing.isDiscordLocalhost;
            result = tango != romeo;
            backup = null;
            if(!result) { _fun67474_ip = 705; continue _fun67474 }
 702:
            backup = romeo;
 705:
            result = tango != output;
            romeo = null;
            if(!result) { _fun67474_ip = 717; continue _fun67474 }
 714:
            romeo = output;
 717:
            offset = kilo.bind(sizing)(backup, romeo);
 723:
            if(!(tango != yankee)) { _fun67474_ip = 764; continue _fun67474 }
 727:
            if(!offset) { _fun67474_ip = 764; continue _fun67474 }
 730:
            romeo = _closure1_slot1;
            offset = _closure1_slot2;
            offset = offset[foxtrot];
            romeo = romeo.bind(golf)(offset);
            offset = romeo.isAppRoute;
            offset = offset.bind(romeo)(yankee);
            if(offset) { _fun67474_ip = 903; continue _fun67474 }
 764:
            if(!(tango != mike)) { _fun67474_ip = 809; continue _fun67474 }
 768:
            offset = mike.type;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            mike = 13;
            mike = foxtrot[mike];
            mike = romeo.bind(golf)(mike);
            mike = mike.CodedLinkType;
            mike = mike.APP_OAUTH2_LINK;
            if(!(offset !== mike)) { _fun67474_ip = 894; continue _fun67474 }
 809:
            offset = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 27;
            mike = romeo[mike];
            offset = offset.bind(golf)(mike);
            mike = offset.tryParseEventDetailsPath;
            mike = mike.bind(offset)(yankee);
            mike = undefined;
            if(options) { _fun67474_ip = 892; continue _fun67474 }
 845:
            options = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 28;
            oscar = offset[oscar];
            options = options.bind(golf)(oscar);
            oscar = options.isSuspiciousDownload;
            oscar = oscar.bind(options)(verify);
            oscar = tango == oscar;
            mike = undefined;
            if(oscar) { _fun67474_ip = 892; continue _fun67474 }
 885:
            mike = function(argFoo) {
                _fun67488: for(var _fun67488_ip = 0; ; ) switch(_fun67488_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    if(!(entity != mike)) { _fun67488_ip = 19; continue _fun67488 }
 9:
                    entity = mike.preventDefault;
                    entity = entity.bind(mike)();
 19:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 29;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.show;
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
                    entity = true;
                    return entity;
                }
            };
 892:
            _fun67474_ip = 901; continue _fun67474;
 894:
            mike = function(argFoo) {
                _fun67487: for(var _fun67487_ip = 0; ; ) switch(_fun67487_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    if(!(entity != mike)) { _fun67487_ip = 19; continue _fun67487 }
 9:
                    entity = mike.preventDefault;
                    entity = entity.bind(mike)();
 19:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 26;
                    mike = report[mike];
                    zulu = undefined;
                    options = tango.bind(zulu)(mike);
                    golf = options.trackWithMetadata;
                    entity = _closure1_slot10;
                    oscar = entity.APP_OAUTH2_LINK_EMBED_URL_CLICKED;
                    mike = {};
                    verify = _closure2_slot2;
                    verify = verify.code;
                    mike['application_id'] = verify;
                    mike = golf.bind(options)(oscar, mike);
                    mike = 15;
                    mike = report[mike];
                    mike = tango.bind(zulu)(mike);
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
                    entity = true;
                    return entity;
                }
            };
 901:
            return mike;
 903:
            mike = {'navigationReplace': false, 'openChannel': true};
            _closure2_slot4 = mike;
            if(!(tango != report)) { _fun67474_ip = 927; continue _fun67474 }
 921:
            mike['search'] = report;
 927:
            if(!(tango != zulu)) { _fun67474_ip = 937; continue _fun67474 }
 931:
            mike['hash'] = zulu;
 937:
            mike = function(argFoo) {
                _fun67486: for(var _fun67486_ip = 0; ; ) switch(_fun67486_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    if(!(entity != mike)) { _fun67486_ip = 19; continue _fun67486 }
 9:
                    entity = mike.preventDefault;
                    entity = entity.bind(mike)();
 19:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 25;
                    entity = zulu[entity];
                    tango = undefined;
                    zulu = mike.bind(tango)(entity);
                    mike = _closure2_slot3;
                    entity = _closure2_slot4;
                    entity = zulu.bind(tango)(mike, entity);
                    entity = true;
                    return entity;
                }
            };
            return mike;
 946:
            mike = function(argFoo) {
                _fun67484: for(var _fun67484_ip = 0; ; ) switch(_fun67484_ip) {
 0:
                    zulu = argFoo;
                    mike = null;
                    if(!(mike != zulu)) { _fun67484_ip = 21; continue _fun67484 }
 11:
                    mike = zulu.preventDefault;
                    mike = mike.bind(zulu)();
 21:
                    mike = _closure2_slot2;
                    oscar = mike.code;
                    report = undefined;
                    tango = '';
                    mike = undefined;
                    if(!(tango !== oscar)) { _fun67484_ip = 54; continue _fun67484 }
 45:
                    zulu = _closure2_slot2;
                    mike = zulu.code;
 54:
                    var _closure3_slot0 = mike;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    zulu = 20;
                    zulu = mike[zulu];
                    tango = tango.bind(report)(zulu);
                    zulu = 23;
                    zulu = mike[zulu];
                    mike = mike.paths;
                    zulu = tango.bind(report)(zulu, mike);
                    mike = zulu.then;
                    entity = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.openCollectiblesShop;
                        mike = {};
                        entity = _closure2_slot1;
                        tango = -1;
                        tango = entity[tango];
                        mike['analyticsSource'] = tango;
                        mike['analyticsLocations'] = entity;
                        entity = _closure3_slot0;
                        mike['initialProductSkuId'] = entity;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = true;
                    return entity;
                }
            };
            return mike;
 955:
            mike = function(argFoo) {
                _fun67483: for(var _fun67483_ip = 0; ; ) switch(_fun67483_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    if(!(entity != mike)) { _fun67483_ip = 19; continue _fun67483 }
 9:
                    entity = mike.preventDefault;
                    entity = entity.bind(mike)();
 19:
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 22;
                    entity = zulu[entity];
                    zulu = undefined;
                    entity = mike.bind(zulu)(entity);
                    mike = entity.openQuestHome;
                    entity = {};
                    tango = _closure2_slot2;
                    tango = tango.code;
                    entity['scrollToQuestId'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = true;
                    return entity;
                }
            };
            return mike;
 964:
            mike = function(argFoo) {
                _fun67481: for(var _fun67481_ip = 0; ; ) switch(_fun67481_ip) {
 0:
                    zulu = argFoo;
                    mike = null;
                    if(!(mike != zulu)) { _fun67481_ip = 21; continue _fun67481 }
 11:
                    mike = zulu.preventDefault;
                    mike = mike.bind(zulu)();
 21:
                    mike = _closure2_slot2;
                    tango = mike.code;
                    zulu = tango.split;
                    mike = '-';
                    oscar = zulu.bind(tango)(mike);
                    tango = _closure1_slot3;
                    report = undefined;
                    zulu = 2;
                    tango = tango.bind(report)(oscar, zulu);
                    zulu = 0;
                    zulu = tango[zulu];
                    var _closure3_slot0 = zulu;
                    zulu = 1;
                    zulu = tango[zulu];
                    var _closure3_slot1 = zulu;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    zulu = 20;
                    zulu = mike[zulu];
                    tango = tango.bind(report)(zulu);
                    zulu = 19;
                    zulu = mike[zulu];
                    mike = mike.paths;
                    zulu = tango.bind(report)(zulu, mike);
                    mike = zulu.then;
                    entity = function(argFoo) {
                        entity = argFoo;
                        tango = entity.openGuildProductLink;
                        zulu = _closure3_slot0;
                        mike = _closure3_slot1;
                        entity = undefined;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = true;
                    return entity;
                }
            };
            return mike;
 973:
            mike = function(argFoo) {
                _fun67478: for(var _fun67478_ip = 0; ; ) switch(_fun67478_ip) {
 0:
                    tango = argFoo;
                    zulu = null;
                    if(!(zulu != tango)) { _fun67478_ip = 21; continue _fun67478 }
 11:
                    mike = tango.preventDefault;
                    mike = mike.bind(tango)();
 21:
                    tango = _closure2_slot2;
                    oscar = tango.code;
                    var _closure3_slot0 = oscar;
                    mike = _closure2_slot2;
                    options = mike.url;
                    report = _closure1_slot5;
                    tango = report.getApplication;
                    oscar = tango.bind(report)(oscar);
                    golf = zulu == oscar;
                    report = undefined;
                    tango = undefined;
                    if(golf) { _fun67478_ip = 95; continue _fun67478 }
 75:
                    oscar = oscar.bot;
                    golf = zulu == oscar;
                    tango = undefined;
                    if(golf) { _fun67478_ip = 95; continue _fun67478 }
 90:
                    tango = oscar.id;
 95:
                    if(!(zulu != tango)) { _fun67478_ip = 275; continue _fun67478 }
 102:
                    oscar = global;
                    oscar = oscar.URL;
                    golf = oscar.prototype;
                    golf = Object.create(golf, {constructor: {value: oscar}});
                    yankee = golf;
                    offset = options;
                    oscar = new yankee[oscar](offset, verify);
                    oscar = oscar instanceof Object ? oscar : golf;
                    verify = oscar.searchParams;
                    options = verify.get;
                    golf = 'custom_id';
                    options = options.bind(verify)(golf);
                    verify = zulu != options;
                    golf = undefined;
                    if(!verify) { _fun67478_ip = 165; continue _fun67478 }
 162:
                    golf = options;
 165:
                    var _closure3_slot1 = golf;
                    options = oscar.searchParams;
                    golf = options.get;
                    oscar = 'referrer_id';
                    oscar = golf.bind(options)(oscar);
                    golf = zulu != oscar;
                    zulu = undefined;
                    if(!golf) { _fun67478_ip = 201; continue _fun67478 }
 198:
                    zulu = oscar;
 201:
                    var _closure3_slot2 = zulu;
                    zulu = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 17;
                    mike = oscar[mike];
                    zulu = zulu.bind(report)(mike);
                    mike = zulu.openPrivateChannel;
                    tango = mike.bind(zulu)(tango);
                    zulu = tango.then;
                    mike = function(argFoo) {
                        mike = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 18;
                        entity = zulu[entity];
                        zulu = undefined;
                        mike = mike.bind(zulu)(entity);
                        entity = {};
                        report = _closure3_slot0;
                        entity['targetApplicationId'] = report;
                        report = argFoo;
                        entity['channelId'] = report;
                        report = _closure2_slot1;
                        entity['analyticsLocations'] = report;
                        report = _closure3_slot1;
                        entity['customId'] = report;
                        tango = _closure3_slot2;
                        entity['referrerId'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.catch;
                    entity = function() {
                        entity = undefined;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = true;
                    return entity;
 275:
                    entity = false;
                    return entity;
                }
            };
            return mike;
 982:
            mike = function(argFoo) {
                _fun67477: for(var _fun67477_ip = 0; ; ) switch(_fun67477_ip) {
 0:
                    mike = argFoo;
                    tango = null;
                    if(!(tango != mike)) { _fun67477_ip = 19; continue _fun67477 }
 9:
                    entity = mike.preventDefault;
                    entity = entity.bind(mike)();
 19:
                    mike = _closure2_slot2;
                    golf = mike.code;
                    mike = _closure2_slot2;
                    oscar = mike.type;
                    options = _closure1_slot0;
                    zulu = _closure1_slot2;
                    verify = 13;
                    report = zulu[verify];
                    zulu = undefined;
                    report = options.bind(zulu)(report);
                    report = report.CodedLinkType;
                    report = report.APP_DIRECTORY_PROFILE;
                    if(!(oscar !== report)) { _fun67477_ip = 174; continue _fun67477 }
 81:
                    report = _closure2_slot2;
                    oscar = report.type;
                    options = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[verify];
                    report = options.bind(zulu)(report);
                    report = report.CodedLinkType;
                    report = report.APP_DIRECTORY_STOREFRONT;
                    if(!(oscar !== report)) { _fun67477_ip = 174; continue _fun67477 }
 123:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 14;
                    report = options[report];
                    oscar = oscar.bind(zulu)(report);
                    report = oscar.parseStorefrontSkuCodedLink;
                    report = report.bind(oscar)(golf);
                    if(!(tango == report)) { _fun67477_ip = 172; continue _fun67477 }
 158:
                    oscar = {};
                    oscar['applicationId'] = zulu;
                    oscar['skuId'] = zulu;
                    report = oscar;
 172:
                    _fun67477_ip = 188; continue _fun67477;
 174:
                    oscar = {};
                    oscar['applicationId'] = golf;
                    oscar['skuId'] = zulu;
                    report = oscar;
 188:
                    verify = report.applicationId;
                    report = report.skuId;
                    oscar = _closure1_slot8;
                    report = oscar.getGuildId;
                    report = report.bind(oscar)();
                    oscar = tango != report;
                    options = undefined;
                    if(!oscar) { _fun67477_ip = 225; continue _fun67477 }
 222:
                    options = report;
 225:
                    if(!(tango != verify)) { _fun67477_ip = 310; continue _fun67477 }
 229:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 16;
                    tango = oscar[tango];
                    golf = report.bind(zulu)(tango);
                    oscar = golf.track;
                    tango = _closure1_slot10;
                    report = tango.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED;
                    tango = {};
                    tango['application_id'] = verify;
                    verify = 'mobile_native';
                    tango['device_platform'] = verify;
                    tango['guild_id'] = options;
                    verify = _closure1_slot7;
                    options = verify.getChannelId;
                    options = options.bind(verify)();
                    tango['channel_id'] = options;
                    tango = oscar.bind(golf)(report, tango);
 310:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 15;
                    mike = report[mike];
                    mike = tango.bind(zulu)(mike);
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
                    entity = true;
                    return entity;
                }
            };
            return mike;
 991:
            entity = function(argFoo) {
                _fun67475: for(var _fun67475_ip = 0; ; ) switch(_fun67475_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    if(!(entity != mike)) { _fun67475_ip = 19; continue _fun67475 }
 9:
                    entity = mike.preventDefault;
                    entity = entity.bind(mike)();
 19:
                    zulu = _closure2_slot2;
                    mike = function() { // Original name: handleInviteCodedLink
                        entity = undefined;
                        tango = _closure1_slot16;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
                    entity = true;
                    return entity;
                }
            };
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();