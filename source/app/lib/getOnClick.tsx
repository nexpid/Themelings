// app/lib/getOnClick.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: openInviteModal
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _openInviteModal
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 84; continue _fun00001 }
 7:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 10;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.dispatch;
                    michal = {};
                    oscard = 'DISPLAYED_INVITE_SHOW';
                    michal['type'] = oscard;
                    oscard = argBar;
                    michal['code'] = oscard;
                    michal['username'] = zuuluu;
                    michal['deeplinkAttemptId'] = zuuluu;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=72);
 70:
                    return michal;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 81; continue _fun00001 }
 78:
                    return zuuluu;
 81:
                    return michal;
 84:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _handleInviteCodedLink
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    tangon = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 331; continue _fun00003 }
 13:
                    oscard = _closure1_slot6;
                    report = oscard.getInvite;
                    michal = tangon.code;
                    report = report.bind(oscard)(michal);
                    golfie = null;
                    if(!(golfie == report)) { _fun00004_ip = 106; continue _fun00003 }
 42:
                    option = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 11;
                    oscard = oscard[michal];
                    michal = undefined;
                    verify = option.bind(michal)(oscard);
                    option = verify.resolveInvite;
                    oscard = tangon.code;
                    michal = 'Markdown Link';
                    michal = option.bind(verify)(oscard, michal);
                    SaveGenerator(address=91);
 89:
                    return michal;
 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 328; continue _fun00003 }
 100:
                    report = michal.invite;
 106:
                    if(!(golfie != report)) { _fun00004_ip = 323; continue _fun00003 }
 113:
                    option = report.state;
                    oscard = _closure1_slot11;
                    oscard = oscard.EXPIRED;
                    if(!(option !== oscard)) { _fun00004_ip = 170; continue _fun00003 }
 132:
                    option = report.state;
                    oscard = _closure1_slot11;
                    oscard = oscard.BANNED;
                    if(!(option !== oscard)) { _fun00004_ip = 170; continue _fun00003 }
 151:
                    option = report.state;
                    oscard = _closure1_slot11;
                    oscard = oscard.ERROR;
                    if(!(option === oscard)) { _fun00004_ip = 203; continue _fun00003 }
 170:
                    verify = _closure1_slot14;
                    option = tangon.code;
                    oscard = undefined;
                    oscard = verify.bind(oscard)(report, option);
                    SaveGenerator(address=191);
 189:
                    return oscard;
 191:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(!option) { _fun00004_ip = 323; continue _fun00003 }
 200:
                    return oscard;
 203:
                    option = _closure1_slot9;
                    oscard = option.getFlattenedGuildIds;
                    verify = oscard.bind(option)();
                    offset = golfie == report;
                    oscard = undefined;
                    option = undefined;
                    if(offset) { _fun00004_ip = 247; continue _fun00003 }
 228:
                    offset = report.guild;
                    yankee = golfie == offset;
                    option = undefined;
                    if(yankee) { _fun00004_ip = 247; continue _fun00003 }
 242:
                    option = offset.id;
 247:
                    if(!(golfie != option)) { _fun00004_ip = 264; continue _fun00003 }
 251:
                    golfie = verify.includes;
                    golfie = golfie.bind(verify)(option);
                    if(golfie) { _fun00004_ip = 292; continue _fun00003 }
 264:
                    golfie = _closure1_slot14;
                    tangon = tangon.code;
                    tangon = golfie.bind(oscard)(report, tangon);
                    SaveGenerator(address=283);
 281:
                    return tangon;
 283:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(!golfie) { _fun00004_ip = 323; continue _fun00003 }
 289:
                    return tangon;
 292:
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.transitionToInviteSync;
                    zuuluu = zuuluu.bind(tangon)(report);
 323:
                    zuuluu = undefined;
                    return zuuluu;
 328:
                    return michal;
 331:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot10 = golfie;
    golfie = tangon.AppContext;
    golfie = tangon.InviteStates;
    var _closure1_slot11 = golfie;
    golfie = tangon.Routes;
    tangon = tangon.UserSettingsSections;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.QuestsExperimentLocations;
    var _closure1_slot12 = tangon;
    tangon = {};
    tangon['skipExtensionCheck'] = entity;
    golfie = new Array(0);
    tangon['analyticsLocations'] = golfie;
    var _closure1_slot13 = tangon;
    tangon = 34;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/getOnClick.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getOnClick
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argFoo;
            michal = arguments[1];
            var _closure2_slot0 = verify;
            golfie = undefined;
            if(!(michal === golfie)) { _fun00006_ip = 25; continue _fun00005 }
 18:
            michal = _closure1_slot13;
 25:
            option = michal.skipExtensionCheck;
            michal = michal.analyticsLocations;
            var _closure2_slot1 = michal;
            var _closure2_slot2 = golfie;
            var _closure2_slot3 = golfie;
            var _closure2_slot4 = golfie;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = zuuluu.findCodedLink;
            michal = michal.bind(zuuluu)(verify);
            _closure2_slot2 = michal;
            tangon = null;
            if(!(tangon != michal)) { _fun00006_ip = 182; continue _fun00005 }
 97:
            report = michal.type;
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            yankee = 13;
            zuuluu = zuuluu[yankee];
            zuuluu = offset.bind(golfie)(zuuluu);
            zuuluu = zuuluu.CodedLinkType;
            zuuluu = zuuluu.INVITE;
            if(!(report !== zuuluu)) { _fun00006_ip = 979; continue _fun00005 }
 141:
            report = michal.type;
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[yankee];
            zuuluu = offset.bind(golfie)(zuuluu);
            zuuluu = zuuluu.CodedLinkType;
            zuuluu = zuuluu.EMBEDDED_ACTIVITY_INVITE;
            if(!(report !== zuuluu)) { _fun00006_ip = 979; continue _fun00005 }
 182:
            if(!(tangon != michal)) { _fun00006_ip = 315; continue _fun00005 }
 189:
            report = michal.type;
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            yankee = 13;
            zuuluu = zuuluu[yankee];
            zuuluu = offset.bind(golfie)(zuuluu);
            zuuluu = zuuluu.CodedLinkType;
            zuuluu = zuuluu.APP_DIRECTORY_PROFILE;
            if(!(report !== zuuluu)) { _fun00006_ip = 972; continue _fun00005 }
 233:
            report = michal.type;
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[yankee];
            zuuluu = offset.bind(golfie)(zuuluu);
            zuuluu = zuuluu.CodedLinkType;
            zuuluu = zuuluu.APP_DIRECTORY_STOREFRONT;
            if(!(report !== zuuluu)) { _fun00006_ip = 972; continue _fun00005 }
 274:
            report = michal.type;
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[yankee];
            zuuluu = offset.bind(golfie)(zuuluu);
            zuuluu = zuuluu.CodedLinkType;
            zuuluu = zuuluu.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(report !== zuuluu)) { _fun00006_ip = 972; continue _fun00005 }
 315:
            if(!(tangon != michal)) { _fun00006_ip = 363; continue _fun00005 }
 319:
            report = michal.type;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 13;
            zuuluu = yankee[zuuluu];
            zuuluu = offset.bind(golfie)(zuuluu);
            zuuluu = zuuluu.CodedLinkType;
            zuuluu = zuuluu.ACTIVITY_BOOKMARK;
            if(!(report !== zuuluu)) { _fun00006_ip = 965; continue _fun00005 }
 363:
            if(!(tangon != michal)) { _fun00006_ip = 411; continue _fun00005 }
 367:
            report = michal.type;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 13;
            zuuluu = yankee[zuuluu];
            zuuluu = offset.bind(golfie)(zuuluu);
            zuuluu = zuuluu.CodedLinkType;
            zuuluu = zuuluu.GUILD_PRODUCT;
            if(!(report !== zuuluu)) { _fun00006_ip = 958; continue _fun00005 }
 411:
            if(!(tangon != michal)) { _fun00006_ip = 509; continue _fun00005 }
 415:
            report = michal.type;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 13;
            zuuluu = yankee[zuuluu];
            zuuluu = offset.bind(golfie)(zuuluu);
            zuuluu = zuuluu.CodedLinkType;
            zuuluu = zuuluu.QUESTS_EMBED;
            if(!(report === zuuluu)) { _fun00006_ip = 509; continue _fun00005 }
 456:
            report = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 25;
            zuuluu = offset[zuuluu];
            offset = report.bind(golfie)(zuuluu);
            report = offset.getIsEligibleForQuests;
            zuuluu = {};
            yankee = _closure1_slot12;
            yankee = yankee.EMBED_MOBILE;
            zuuluu['location'] = yankee;
            zuuluu = report.bind(offset)(zuuluu);
            if(zuuluu) { _fun00006_ip = 951; continue _fun00005 }
 509:
            if(!(tangon != michal)) { _fun00006_ip = 557; continue _fun00005 }
 513:
            report = michal.type;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 13;
            zuuluu = yankee[zuuluu];
            zuuluu = offset.bind(golfie)(zuuluu);
            zuuluu = zuuluu.CodedLinkType;
            zuuluu = zuuluu.COLLECTIBLES_SHOP;
            if(!(report !== zuuluu)) { _fun00006_ip = 944; continue _fun00005 }
 557:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            foxtra = 28;
            zuuluu = zuuluu[foxtra];
            report = report.bind(golfie)(zuuluu);
            zuuluu = report.toURLSafe;
            zuuluu = zuuluu.bind(report)(verify);
            if(!(tangon == zuuluu)) { _fun00006_ip = 594; continue _fun00005 }
 592:
            zuuluu = {};
 594:
            romeon = zuuluu.host;
            output = zuuluu.hostname;
            yankee = zuuluu.pathname;
            _closure2_slot3 = yankee;
            report = zuuluu.search;
            zuuluu = zuuluu.hash;
            backup = _closure1_slot1;
            offset = _closure1_slot2;
            offset = offset[foxtra];
            kiloes = backup.bind(golfie)(offset);
            backup = kiloes.isDiscordHostname;
            sizing = tangon != output;
            offset = null;
            if(!sizing) { _fun00006_ip = 662; continue _fun00005 }
 659:
            offset = output;
 662:
            offset = backup.bind(kiloes)(offset);
            if(offset) { _fun00006_ip = 723; continue _fun00005 }
 670:
            kiloes = _closure1_slot1;
            backup = _closure1_slot2;
            backup = backup[foxtra];
            sizing = kiloes.bind(golfie)(backup);
            kiloes = sizing.isDiscordLocalhost;
            result = tangon != romeon;
            backup = null;
            if(!result) { _fun00006_ip = 705; continue _fun00005 }
 702:
            backup = romeon;
 705:
            result = tangon != output;
            romeon = null;
            if(!result) { _fun00006_ip = 717; continue _fun00005 }
 714:
            romeon = output;
 717:
            offset = kiloes.bind(sizing)(backup, romeon);
 723:
            if(!(tangon != yankee)) { _fun00006_ip = 764; continue _fun00005 }
 727:
            if(!offset) { _fun00006_ip = 764; continue _fun00005 }
 730:
            romeon = _closure1_slot1;
            offset = _closure1_slot2;
            offset = offset[foxtra];
            romeon = romeon.bind(golfie)(offset);
            offset = romeon.isAppRoute;
            offset = offset.bind(romeon)(yankee);
            if(offset) { _fun00006_ip = 899; continue _fun00005 }
 764:
            if(!(tangon != michal)) { _fun00006_ip = 809; continue _fun00005 }
 768:
            offset = michal.type;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            michal = 13;
            michal = foxtra[michal];
            michal = romeon.bind(golfie)(michal);
            michal = michal.CodedLinkType;
            michal = michal.APP_OAUTH2_LINK;
            if(!(offset !== michal)) { _fun00006_ip = 892; continue _fun00005 }
 809:
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            michal = 31;
            michal = romeon[michal];
            offset = offset.bind(golfie)(michal);
            michal = offset.tryParseEventDetailsPath;
            michal = michal.bind(offset)(yankee);
            michal = undefined;
            if(option) { _fun00006_ip = 890; continue _fun00005 }
 845:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 32;
            oscard = offset[oscard];
            option = option.bind(golfie)(oscard);
            oscard = option.isSuspiciousDownload;
            oscard = oscard.bind(option)(verify);
            oscard = tangon == oscard;
            michal = undefined;
            if(oscard) { _fun00006_ip = 890; continue _fun00005 }
 885:
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    if(!(entity != michal)) { _fun00008_ip = 19; continue _fun00007 }
 9:
                    entity = michal.preventDefault;
                    entity = entity.bind(michal)();
 19:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 33;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.show;
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    entity = true;
                    return entity;
                }
            };
 890:
            _fun00006_ip = 897; continue _fun00005;
 892:
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    if(!(entity != michal)) { _fun00010_ip = 19; continue _fun00009 }
 9:
                    entity = michal.preventDefault;
                    entity = entity.bind(michal)();
 19:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 30;
                    michal = report[michal];
                    zuuluu = undefined;
                    option = tangon.bind(zuuluu)(michal);
                    golfie = option.trackWithMetadata;
                    entity = _closure1_slot10;
                    oscard = entity.APP_OAUTH2_LINK_EMBED_URL_CLICKED;
                    michal = {};
                    verify = _closure2_slot2;
                    verify = verify.code;
                    michal['application_id'] = verify;
                    michal = golfie.bind(option)(oscard, michal);
                    michal = 15;
                    michal = report[michal];
                    michal = tangon.bind(zuuluu)(michal);
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    entity = true;
                    return entity;
                }
            };
 897:
            return michal;
 899:
            michal = {'navigationReplace': false, 'openChannel': true};
            _closure2_slot4 = michal;
            if(!(tangon != report)) { _fun00006_ip = 927; continue _fun00005 }
 921:
            michal['search'] = report;
 927:
            if(!(tangon != zuuluu)) { _fun00006_ip = 937; continue _fun00005 }
 931:
            michal['hash'] = zuuluu;
 937:
            michal = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    if(!(entity != michal)) { _fun00012_ip = 19; continue _fun00011 }
 9:
                    entity = michal.preventDefault;
                    entity = entity.bind(michal)();
 19:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 29;
                    entity = zuuluu[entity];
                    tangon = undefined;
                    zuuluu = michal.bind(tangon)(entity);
                    michal = _closure2_slot3;
                    entity = _closure2_slot4;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = true;
                    return entity;
                }
            };
            return michal;
 944:
            michal = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 21; continue _fun00013 }
 11:
                    michal = zuuluu.preventDefault;
                    michal = michal.bind(zuuluu)();
 21:
                    michal = _closure2_slot2;
                    oscard = michal.code;
                    report = undefined;
                    tangon = '';
                    michal = undefined;
                    if(!(tangon !== oscard)) { _fun00014_ip = 54; continue _fun00013 }
 45:
                    zuuluu = _closure2_slot2;
                    michal = zuuluu.code;
 54:
                    var _closure3_slot0 = michal;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    zuuluu = 24;
                    zuuluu = michal[zuuluu];
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = 27;
                    zuuluu = michal[zuuluu];
                    michal = michal.paths;
                    zuuluu = tangon.bind(report)(zuuluu, michal);
                    michal = zuuluu.then;
                    entity = function(argFoo) {
                        entity = argFoo;
                        zuuluu = entity.openCollectiblesShop;
                        michal = {};
                        entity = _closure2_slot1;
                        tangon = -1;
                        tangon = entity[tangon];
                        michal['analyticsSource'] = tangon;
                        michal['analyticsLocations'] = entity;
                        entity = _closure3_slot0;
                        michal['initialProductSkuId'] = entity;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = true;
                    return entity;
                }
            };
            return michal;
 951:
            michal = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    if(!(entity != michal)) { _fun00016_ip = 19; continue _fun00015 }
 9:
                    entity = michal.preventDefault;
                    entity = entity.bind(michal)();
 19:
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 26;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.openQuestHome;
                    entity = {};
                    tangon = _closure2_slot2;
                    tangon = tangon.code;
                    entity['scrollToQuestId'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = true;
                    return entity;
                }
            };
            return michal;
 958:
            michal = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = argFoo;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00018_ip = 21; continue _fun00017 }
 11:
                    michal = zuuluu.preventDefault;
                    michal = michal.bind(zuuluu)();
 21:
                    michal = _closure2_slot2;
                    tangon = michal.code;
                    zuuluu = tangon.split;
                    michal = '-';
                    oscard = zuuluu.bind(tangon)(michal);
                    tangon = _closure1_slot3;
                    report = undefined;
                    zuuluu = 2;
                    tangon = tangon.bind(report)(oscard, zuuluu);
                    zuuluu = 0;
                    zuuluu = tangon[zuuluu];
                    var _closure3_slot0 = zuuluu;
                    zuuluu = 1;
                    zuuluu = tangon[zuuluu];
                    var _closure3_slot1 = zuuluu;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    zuuluu = 24;
                    zuuluu = michal[zuuluu];
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = 23;
                    zuuluu = michal[zuuluu];
                    michal = michal.paths;
                    zuuluu = tangon.bind(report)(zuuluu, michal);
                    michal = zuuluu.then;
                    entity = function(argFoo) {
                        entity = argFoo;
                        tangon = entity.openGuildProductLink;
                        zuuluu = _closure3_slot0;
                        michal = _closure3_slot1;
                        entity = undefined;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = true;
                    return entity;
                }
            };
            return michal;
 965:
            michal = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = argFoo;
                    golfie = null;
                    if(!(golfie != zuuluu)) { _fun00020_ip = 21; continue _fun00019 }
 11:
                    entity = zuuluu.preventDefault;
                    entity = entity.bind(zuuluu)();
 21:
                    zuuluu = _closure2_slot2;
                    option = zuuluu.code;
                    var _closure3_slot0 = option;
                    entity = _closure2_slot2;
                    report = entity.url;
                    zuuluu = _closure1_slot5;
                    entity = zuuluu.getApplication;
                    verify = entity.bind(zuuluu)(option);
                    entity = global;
                    entity = entity.URL;
                    zuuluu = entity.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
                    output = zuuluu;
                    sizing = report;
                    entity = new output[entity](sizing, kiloes);
                    zuuluu = entity instanceof Object ? entity : zuuluu;
                    var _closure3_slot1 = zuuluu;
                    oscard = zuuluu.searchParams;
                    report = oscard.get;
                    entity = 'referrer_id';
                    report = report.bind(oscard)(entity);
                    offset = golfie != report;
                    oscard = undefined;
                    entity = undefined;
                    if(!offset) { _fun00020_ip = 133; continue _fun00019 }
 130:
                    entity = report;
 133:
                    var _closure3_slot2 = entity;
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 17;
                    entity = offset[entity];
                    entity = report.bind(oscard)(entity);
                    entity = entity.bind(oscard)();
                    var _closure3_slot3 = entity;
                    report = _closure1_slot0;
                    entity = 18;
                    entity = offset[entity];
                    report = report.bind(oscard)(entity);
                    entity = report.getPlayInContext;
                    offset = entity.bind(report)(option);
                    report = offset.currentChannelId;
                    var _closure3_slot4 = report;
                    entity = offset.instanceId;
                    var _closure3_slot5 = entity;
                    entity = offset.isCurrentlyInInstance;
                    offset = offset.canLaunchInChannel;
                    if(offset) { _fun00020_ip = 340; continue _fun00019 }
 227:
                    offset = golfie == verify;
                    foxtra = undefined;
                    if(offset) { _fun00020_ip = 256; continue _fun00019 }
 236:
                    verify = verify.bot;
                    offset = golfie == verify;
                    foxtra = undefined;
                    if(offset) { _fun00020_ip = 256; continue _fun00019 }
 251:
                    foxtra = verify.id;
 256:
                    verify = golfie != foxtra;
                    if(!verify) { _fun00020_ip = 338; continue _fun00019 }
 263:
                    yankee = _closure1_slot1;
                    romeon = _closure1_slot2;
                    offset = 21;
                    offset = romeon[offset];
                    romeon = yankee.bind(oscard)(offset);
                    yankee = romeon.openPrivateChannel;
                    offset = {};
                    offset['recipientIds'] = foxtra;
                    romeon = yankee.bind(romeon)(offset);
                    yankee = romeon.then;
                    offset = function() {
                        tangon = _closure1_slot4;
                        zuuluu = undefined;
                        michal = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(michal) { _fun00022_ip = 194; continue _fun00021 }
 10:
                                    report = _closure1_slot0;
                                    zuuluu = _closure1_slot2;
                                    michal = 19;
                                    michal = zuuluu[michal];
                                    zuuluu = undefined;
                                    verify = report.bind(zuuluu)(michal);
                                    option = verify.getCustomActivityLinkParams;
                                    golfie = _closure3_slot0;
                                    michal = _closure3_slot1;
                                    offset = michal.searchParams;
                                    report = offset.get;
                                    michal = 'link_id';
                                    report = report.bind(offset)(michal);
                                    michal = _closure3_slot1;
                                    yankee = michal.searchParams;
                                    offset = yankee.get;
                                    michal = 'custom_id';
                                    michal = offset.bind(yankee)(michal);
                                    michal = option.bind(verify)(golfie, report, michal);
                                    SaveGenerator(address=107);
 105:
                                    return michal;
 107:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(report) { _fun00022_ip = 191; continue _fun00021 }
 113:
                                    golfie = michal.customId;
                                    report = _closure1_slot1;
                                    option = _closure1_slot2;
                                    tangon = 22;
                                    tangon = option[tangon];
                                    report = report.bind(zuuluu)(tangon);
                                    tangon = {};
                                    option = _closure3_slot0;
                                    tangon['targetApplicationId'] = option;
                                    option = argFoo;
                                    tangon['channelId'] = option;
                                    option = _closure2_slot1;
                                    tangon['analyticsLocations'] = option;
                                    tangon['customId'] = golfie;
                                    oscard = _closure3_slot2;
                                    tangon['referrerId'] = oscard;
                                    tangon = report.bind(zuuluu)(tangon);
                                    return zuuluu;
 191:
                                    return michal;
 194:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        michal = tangon.bind(zuuluu)(michal);
                        var _closure4_slot0 = michal;
                        entity = function() {
                            entity = undefined;
                            tangon = _closure4_slot0;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        return entity;
                    };
                    offset = offset.bind(oscard)();
                    romeon = yankee.bind(romeon)(offset);
                    yankee = romeon.catch;
                    offset = function() {
                        entity = undefined;
                        return entity;
                    };
                    offset = yankee.bind(romeon)(offset);
                    verify = true;
 338:
                    return verify;
 340:
                    entity = !entity;
                    if(!entity) { _fun00020_ip = 350; continue _fun00019 }
 346:
                    entity = golfie != report;
 350:
                    if(!entity) { _fun00020_ip = 463; continue _fun00019 }
 353:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 19;
                    tangon = golfie[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = golfie.getCustomActivityLinkParams;
                    offset = zuuluu.searchParams;
                    verify = offset.get;
                    tangon = 'link_id';
                    tangon = verify.bind(offset)(tangon);
                    offset = zuuluu.searchParams;
                    verify = offset.get;
                    zuuluu = 'custom_id';
                    zuuluu = verify.bind(offset)(zuuluu);
                    report = report.bind(golfie)(option, tangon, zuuluu);
                    tangon = report.then;
                    zuuluu = function() {
                        tangon = _closure1_slot4;
                        zuuluu = undefined;
                        michal = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(michal) { _fun00024_ip = 155; continue _fun00023 }
 10:
                                    michal = argFoo;
                                    option = michal.customId;
                                    tangon = undefined;
                                    SaveGenerator(address=25);
 23:
                                    return tangon;
 25:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(zuuluu) { _fun00024_ip = 152; continue _fun00023 }
 31:
                                    report = _closure1_slot0;
                                    oscard = _closure1_slot2;
                                    zuuluu = 20;
                                    zuuluu = oscard[zuuluu];
                                    oscard = report.bind(tangon)(zuuluu);
                                    report = oscard.runPrimaryAppCommandOrJoinEmbeddedActivity;
                                    zuuluu = {};
                                    verify = _closure3_slot4;
                                    zuuluu['channelId'] = verify;
                                    verify = _closure3_slot0;
                                    zuuluu['applicationId'] = verify;
                                    offset = _closure3_slot5;
                                    verify = null;
                                    verify = verify == offset;
                                    zuuluu['isStart'] = verify;
                                    verify = _closure3_slot3;
                                    zuuluu['embeddedActivitiesManager'] = verify;
                                    zuuluu['customId'] = option;
                                    golfie = _closure3_slot2;
                                    zuuluu['referrerId'] = golfie;
                                    golfie = _closure2_slot1;
                                    zuuluu['analyticsLocations'] = golfie;
                                    zuuluu = report.bind(oscard)(zuuluu);
                                    SaveGenerator(address=140);
 138:
                                    return zuuluu;
 140:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                    if(report) { _fun00024_ip = 149; continue _fun00023 }
 146:
                                    return tangon;
 149:
                                    return zuuluu;
 152:
                                    return michal;
 155:
                                    return entity;
                                }
                            };
                            michal = entity.next;
                            michal = michal.bind(entity)();
                            return entity;
                        };
                        michal = tangon.bind(zuuluu)(michal);
                        var _closure4_slot0 = michal;
                        entity = function() {
                            entity = undefined;
                            tangon = _closure4_slot0;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        return entity;
                    };
                    zuuluu = zuuluu.bind(oscard)();
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.catch;
                    michal = function() {
                        entity = undefined;
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    entity = true;
 463:
                    return entity;
                }
            };
            return michal;
 972:
            michal = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    michal = argFoo;
                    tangon = null;
                    if(!(tangon != michal)) { _fun00026_ip = 19; continue _fun00025 }
 9:
                    entity = michal.preventDefault;
                    entity = entity.bind(michal)();
 19:
                    michal = _closure2_slot2;
                    golfie = michal.code;
                    michal = _closure2_slot2;
                    oscard = michal.type;
                    option = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    verify = 13;
                    report = zuuluu[verify];
                    zuuluu = undefined;
                    report = option.bind(zuuluu)(report);
                    report = report.CodedLinkType;
                    report = report.APP_DIRECTORY_PROFILE;
                    if(!(oscard !== report)) { _fun00026_ip = 174; continue _fun00025 }
 81:
                    report = _closure2_slot2;
                    oscard = report.type;
                    option = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[verify];
                    report = option.bind(zuuluu)(report);
                    report = report.CodedLinkType;
                    report = report.APP_DIRECTORY_STOREFRONT;
                    if(!(oscard !== report)) { _fun00026_ip = 174; continue _fun00025 }
 123:
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 14;
                    report = option[report];
                    oscard = oscard.bind(zuuluu)(report);
                    report = oscard.parseStorefrontSkuCodedLink;
                    report = report.bind(oscard)(golfie);
                    if(!(tangon == report)) { _fun00026_ip = 172; continue _fun00025 }
 158:
                    oscard = {};
                    oscard['applicationId'] = zuuluu;
                    oscard['skuId'] = zuuluu;
                    report = oscard;
 172:
                    _fun00026_ip = 188; continue _fun00025;
 174:
                    oscard = {};
                    oscard['applicationId'] = golfie;
                    oscard['skuId'] = zuuluu;
                    report = oscard;
 188:
                    verify = report.applicationId;
                    report = report.skuId;
                    oscard = _closure1_slot8;
                    report = oscard.getGuildId;
                    report = report.bind(oscard)();
                    oscard = tangon != report;
                    option = undefined;
                    if(!oscard) { _fun00026_ip = 225; continue _fun00025 }
 222:
                    option = report;
 225:
                    if(!(tangon != verify)) { _fun00026_ip = 310; continue _fun00025 }
 229:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 16;
                    tangon = oscard[tangon];
                    golfie = report.bind(zuuluu)(tangon);
                    oscard = golfie.track;
                    tangon = _closure1_slot10;
                    report = tangon.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED;
                    tangon = {};
                    tangon['application_id'] = verify;
                    verify = 'mobile_native';
                    tangon['device_platform'] = verify;
                    tangon['guild_id'] = option;
                    verify = _closure1_slot7;
                    option = verify.getChannelId;
                    option = option.bind(verify)();
                    tangon['channel_id'] = option;
                    tangon = oscard.bind(golfie)(report, tangon);
 310:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 15;
                    michal = report[michal];
                    michal = tangon.bind(zuuluu)(michal);
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    entity = true;
                    return entity;
                }
            };
            return michal;
 979:
            entity = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    if(!(entity != michal)) { _fun00028_ip = 19; continue _fun00027 }
 9:
                    entity = michal.preventDefault;
                    entity = entity.bind(michal)();
 19:
                    zuuluu = _closure2_slot2;
                    michal = function() { // Original name: handleInviteCodedLink
                        entity = undefined;
                        tangon = _closure1_slot16;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
                    entity = true;
                    return entity;
                }
            };
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();