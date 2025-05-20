// app/modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: canSeeDevLinks
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot5;
            entity = michal.getCurrentUser;
            oscard = entity.bind(michal)();
            tangon = null;
            report = tangon == oscard;
            entity = undefined;
            if(report) { _fun00002_ip = 37; continue _fun00001 }
 27:
            report = oscard.isStaff;
            entity = report.bind(oscard)();
 37:
            if(entity) { _fun00002_ip = 75; continue _fun00001 }
 40:
            oscard = _closure1_slot5;
            report = oscard.getCurrentUser;
            oscard = report.bind(oscard)();
            report = tangon == oscard;
            michal = undefined;
            if(report) { _fun00002_ip = 72; continue _fun00001 }
 62:
            report = oscard.isStaffPersonal;
            michal = report.bind(oscard)();
 72:
            entity = michal;
 75:
            if(entity) { _fun00002_ip = 126; continue _fun00001 }
 78:
            oscard = _closure1_slot4;
            michal = oscard.getGuild;
            report = '943265993613008967';
            michal = michal.bind(oscard)(report);
            michal = tangon != michal;
            if(!michal) { _fun00002_ip = 123; continue _fun00001 }
 105:
            tangon = _closure1_slot3;
            zuuluu = tangon.isLurking;
            zuuluu = zuuluu.bind(tangon)(report);
            michal = !zuuluu;
 123:
            entity = michal;
 126:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: CodedLinks
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.message;
            var _closure2_slot0 = golfie;
            entity = golfie.author;
            tangon = null;
            michal = tangon == entity;
            entity = null;
            if(michal) { _fun00004_ip = 121; continue _fun00003 }
 31:
            michal = golfie.codedLinks;
            zuuluu = michal.length;
            michal = 0;
            entity = null;
            if(!(michal !== zuuluu)) { _fun00004_ip = 121; continue _fun00003 }
 50:
            report = _closure1_slot6;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 16;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = 'codedLinks';
            michal['keyPath'] = option;
            option = golfie.codedLinks;
            golfie = option.map;
            oscard = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    golfie = entity.type;
                    oscard = entity.code;
                    entity = global;
                    entity = entity.HermesInternal;
                    zuuluu = entity.concat;
                    michal = '';
                    entity = '-';
                    report = zuuluu.bind(michal)(golfie, entity, oscard);
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    option = 5;
                    michal = michal[option];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.INVITE;
                    if(!(michal !== golfie)) { _fun00006_ip = 895; continue _fun00005 }
 85:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.TEMPLATE;
                    if(!(michal !== golfie)) { _fun00006_ip = 856; continue _fun00005 }
 121:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.BUILD_OVERRIDE;
                    if(!(michal !== golfie)) { _fun00006_ip = 817; continue _fun00005 }
 157:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.MANUAL_BUILD_OVERRIDE;
                    if(!(michal !== golfie)) { _fun00006_ip = 817; continue _fun00005 }
 193:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.EVENT;
                    if(!(michal !== golfie)) { _fun00006_ip = 772; continue _fun00005 }
 229:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.CHANNEL_LINK;
                    if(!(michal !== golfie)) { _fun00006_ip = 733; continue _fun00005 }
 265:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.EMBEDDED_ACTIVITY_INVITE;
                    if(!(michal !== golfie)) { _fun00006_ip = 693; continue _fun00005 }
 301:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.QUESTS_EMBED;
                    if(!(michal !== golfie)) { _fun00006_ip = 653; continue _fun00005 }
 337:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.GUILD_PRODUCT;
                    if(!(michal !== golfie)) { _fun00006_ip = 649; continue _fun00005 }
 373:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.SERVER_SHOP;
                    if(!(michal !== golfie)) { _fun00006_ip = 649; continue _fun00005 }
 409:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.APP_DIRECTORY_STOREFRONT;
                    if(!(michal !== golfie)) { _fun00006_ip = 649; continue _fun00005 }
 445:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.APP_DIRECTORY_STOREFRONT_SKU;
                    if(!(michal !== golfie)) { _fun00006_ip = 649; continue _fun00005 }
 481:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.APP_DIRECTORY_PROFILE;
                    if(!(michal !== golfie)) { _fun00006_ip = 649; continue _fun00005 }
 517:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.APP_OAUTH2_LINK;
                    if(!(michal !== golfie)) { _fun00006_ip = 649; continue _fun00005 }
 550:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.ACTIVITY_BOOKMARK;
                    if(!(michal !== golfie)) { _fun00006_ip = 649; continue _fun00005 }
 583:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.COLLECTIBLES_SHOP;
                    if(!(michal !== golfie)) { _fun00006_ip = 649; continue _fun00005 }
 616:
                    zuuluu = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 15;
                    michal = option[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.assertNever;
                    michal = michal.bind(zuuluu)(golfie);
                    return tangon;
 649:
                    michal = null;
                    return michal;
 653:
                    golfie = _closure1_slot6;
                    zuuluu = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 14;
                    michal = option[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    michal['questId'] = oscard;
                    michal = golfie.bind(tangon)(zuuluu, michal, report);
                    return michal;
 693:
                    golfie = _closure1_slot6;
                    zuuluu = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 13;
                    michal = option[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    michal['inviteCode'] = oscard;
                    michal = golfie.bind(tangon)(zuuluu, michal, report);
                    return michal;
 733:
                    golfie = _closure1_slot6;
                    zuuluu = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 10;
                    michal = option[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    michal['code'] = oscard;
                    michal = golfie.bind(tangon)(zuuluu, michal, report);
                    return michal;
 772:
                    golfie = _closure1_slot6;
                    zuuluu = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 9;
                    michal = option[michal];
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.GuildScheduledEventLinkEmbed;
                    michal = {};
                    michal['code'] = oscard;
                    michal = golfie.bind(tangon)(zuuluu, michal, report);
                    return michal;
 817:
                    golfie = _closure1_slot6;
                    zuuluu = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 8;
                    michal = option[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    michal['url'] = oscard;
                    michal = golfie.bind(tangon)(zuuluu, michal, report);
                    return michal;
 856:
                    golfie = _closure1_slot6;
                    zuuluu = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 7;
                    michal = option[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    michal['code'] = oscard;
                    michal = golfie.bind(tangon)(zuuluu, michal, report);
                    return michal;
 895:
                    zuuluu = _closure1_slot6;
                    michal = _closure1_slot1;
                    golfie = _closure1_slot2;
                    entity = 6;
                    entity = golfie[entity];
                    michal = michal.bind(tangon)(entity);
                    entity = {};
                    golfie = _closure2_slot0;
                    entity['message'] = golfie;
                    entity['code'] = oscard;
                    entity = zuuluu.bind(tangon)(michal, entity, report);
                    return entity;
                }
            };
            oscard = golfie.bind(option)(oscard);
            michal['children'] = oscard;
            entity = report.bind(tangon)(zuuluu, michal);
 121:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: createCodedLinkEmbeds
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            var _closure2_slot0 = zuuluu;
            tangon = argBaz;
            var _closure2_slot1 = tangon;
            tangon = zuuluu.author;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00008_ip = 71; continue _fun00007 }
 31:
            zuuluu = michal.codedLinks;
            tangon = zuuluu.length;
            zuuluu = 0;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 71; continue _fun00007 }
 48:
            zuuluu = michal.codedLinks;
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    offset = entity.type;
                    oscard = entity.code;
                    verify = entity.url;
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    yankee = 5;
                    entity = entity[yankee];
                    tangon = undefined;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.CodedLinkType;
                    entity = entity.INVITE;
                    if(!(offset !== entity)) { _fun00010_ip = 1167; continue _fun00009 }
 62:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[yankee];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.CodedLinkType;
                    entity = entity.TEMPLATE;
                    if(!(offset !== entity)) { _fun00010_ip = 1126; continue _fun00009 }
 98:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[yankee];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.CodedLinkType;
                    entity = entity.BUILD_OVERRIDE;
                    if(!(offset !== entity)) { _fun00010_ip = 1085; continue _fun00009 }
 134:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[yankee];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.CodedLinkType;
                    entity = entity.MANUAL_BUILD_OVERRIDE;
                    if(!(offset !== entity)) { _fun00010_ip = 1028; continue _fun00009 }
 170:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[yankee];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.CodedLinkType;
                    entity = entity.EVENT;
                    if(!(offset !== entity)) { _fun00010_ip = 987; continue _fun00009 }
 206:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[yankee];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.CodedLinkType;
                    entity = entity.CHANNEL_LINK;
                    if(!(offset !== entity)) { _fun00010_ip = 946; continue _fun00009 }
 242:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[yankee];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.CodedLinkType;
                    entity = entity.APP_DIRECTORY_PROFILE;
                    if(!(offset !== entity)) { _fun00010_ip = 881; continue _fun00009 }
 278:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[yankee];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.CodedLinkType;
                    entity = entity.ACTIVITY_BOOKMARK;
                    if(!(offset !== entity)) { _fun00010_ip = 816; continue _fun00009 }
 314:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[yankee];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.CodedLinkType;
                    entity = entity.EMBEDDED_ACTIVITY_INVITE;
                    if(!(offset !== entity)) { _fun00010_ip = 764; continue _fun00009 }
 350:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[yankee];
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.CodedLinkType;
                    zuuluu = entity.GUILD_PRODUCT;
                    entity = null;
                    if(!(offset !== zuuluu)) { _fun00010_ip = 762; continue _fun00009 }
 388:
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[yankee];
                    zuuluu = golfie.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.SERVER_SHOP;
                    entity = null;
                    if(!(offset !== zuuluu)) { _fun00010_ip = 762; continue _fun00009 }
 426:
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[yankee];
                    zuuluu = golfie.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.QUESTS_EMBED;
                    if(!(offset !== zuuluu)) { _fun00010_ip = 709; continue _fun00009 }
 462:
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[yankee];
                    zuuluu = golfie.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    golfie = zuuluu.APP_DIRECTORY_STOREFRONT;
                    zuuluu = null;
                    if(!(offset !== golfie)) { _fun00010_ip = 707; continue _fun00009 }
 500:
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    golfie = golfie[yankee];
                    golfie = option.bind(tangon)(golfie);
                    golfie = golfie.CodedLinkType;
                    golfie = golfie.APP_DIRECTORY_STOREFRONT_SKU;
                    zuuluu = null;
                    if(!(offset !== golfie)) { _fun00010_ip = 707; continue _fun00009 }
 538:
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    golfie = golfie[yankee];
                    golfie = option.bind(tangon)(golfie);
                    golfie = golfie.CodedLinkType;
                    golfie = golfie.APP_OAUTH2_LINK;
                    if(!(offset !== golfie)) { _fun00010_ip = 641; continue _fun00009 }
 571:
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    golfie = golfie[yankee];
                    golfie = option.bind(tangon)(golfie);
                    golfie = golfie.CodedLinkType;
                    golfie = golfie.COLLECTIBLES_SHOP;
                    report = null;
                    if(!(offset !== golfie)) { _fun00010_ip = 639; continue _fun00009 }
 606:
                    option = _closure1_slot0;
                    yankee = _closure1_slot2;
                    golfie = 15;
                    golfie = yankee[golfie];
                    option = option.bind(tangon)(golfie);
                    golfie = option.assertNever;
                    golfie = golfie.bind(option)(offset);
                    report = undefined;
 639:
                    _fun00010_ip = 704; continue _fun00009;
 641:
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    golfie = 11;
                    golfie = offset[golfie];
                    offset = option.bind(tangon)(golfie);
                    option = offset.createAppMessageEmbed;
                    golfie = {};
                    romeon = _closure2_slot1;
                    golfie['theme'] = romeon;
                    golfie['appId'] = oscard;
                    golfie['embedUrl'] = verify;
                    yankee = _closure2_slot0;
                    golfie['message'] = yankee;
                    report = option.bind(offset)(golfie);
 704:
                    zuuluu = report;
 707:
                    _fun00010_ip = 759; continue _fun00009;
 709:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 14;
                    report = option[report];
                    option = golfie.bind(tangon)(report);
                    golfie = option.createQuestsEmbed;
                    report = {};
                    offset = _closure2_slot1;
                    report['theme'] = offset;
                    report['questId'] = oscard;
                    zuuluu = golfie.bind(option)(report);
 759:
                    entity = zuuluu;
 762:
                    _fun00010_ip = 814; continue _fun00009;
 764:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 13;
                    zuuluu = golfie[zuuluu];
                    golfie = report.bind(tangon)(zuuluu);
                    report = golfie.createEmbeddedActivityInviteEmbed;
                    zuuluu = {};
                    option = _closure2_slot1;
                    zuuluu['theme'] = option;
                    zuuluu['inviteCode'] = oscard;
                    entity = report.bind(golfie)(zuuluu);
 814:
                    _fun00010_ip = 879; continue _fun00009;
 816:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 12;
                    zuuluu = golfie[zuuluu];
                    golfie = report.bind(tangon)(zuuluu);
                    report = golfie.createActivityMessageEmbed;
                    zuuluu = {};
                    offset = _closure2_slot1;
                    zuuluu['theme'] = offset;
                    zuuluu['appId'] = oscard;
                    zuuluu['embedUrl'] = verify;
                    option = _closure2_slot0;
                    zuuluu['message'] = option;
                    entity = report.bind(golfie)(zuuluu);
 879:
                    _fun00010_ip = 944; continue _fun00009;
 881:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = golfie[zuuluu];
                    golfie = report.bind(tangon)(zuuluu);
                    report = golfie.createAppMessageEmbed;
                    zuuluu = {};
                    offset = _closure2_slot1;
                    zuuluu['theme'] = offset;
                    zuuluu['appId'] = oscard;
                    zuuluu['embedUrl'] = verify;
                    option = _closure2_slot0;
                    zuuluu['message'] = option;
                    entity = report.bind(golfie)(zuuluu);
 944:
                    _fun00010_ip = 985; continue _fun00009;
 946:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = golfie[zuuluu];
                    golfie = report.bind(tangon)(zuuluu);
                    report = golfie.createVoiceChannelLinkEmbed;
                    zuuluu = _closure2_slot1;
                    entity = report.bind(golfie)(oscard, zuuluu);
 985:
                    _fun00010_ip = 1026; continue _fun00009;
 987:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 9;
                    zuuluu = golfie[zuuluu];
                    golfie = report.bind(tangon)(zuuluu);
                    report = golfie.createGuildScheduledEventLinkEmbed;
                    zuuluu = _closure2_slot1;
                    entity = report.bind(golfie)(oscard, zuuluu);
 1026:
                    _fun00010_ip = 1083; continue _fun00009;
 1028:
                    zuuluu = _closure1_slot7;
                    report = zuuluu.bind(tangon)();
                    zuuluu = null;
                    if(!report) { _fun00010_ip = 1080; continue _fun00009 }
 1041:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 8;
                    report = option[report];
                    option = golfie.bind(tangon)(report);
                    golfie = option.createBuildOverrideEmbed;
                    report = _closure2_slot1;
                    zuuluu = golfie.bind(option)(oscard, report);
 1080:
                    entity = zuuluu;
 1083:
                    _fun00010_ip = 1124; continue _fun00009;
 1085:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = golfie[zuuluu];
                    golfie = report.bind(tangon)(zuuluu);
                    report = golfie.createBuildOverrideEmbed;
                    zuuluu = _closure2_slot1;
                    entity = report.bind(golfie)(oscard, zuuluu);
 1124:
                    _fun00010_ip = 1165; continue _fun00009;
 1126:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = golfie[zuuluu];
                    golfie = report.bind(tangon)(zuuluu);
                    report = golfie.createGuildTemplateEmbed;
                    zuuluu = _closure2_slot1;
                    entity = report.bind(golfie)(oscard, zuuluu);
 1165:
                    _fun00010_ip = 1211; continue _fun00009;
 1167:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 6;
                    michal = report[michal];
                    report = zuuluu.bind(tangon)(michal);
                    tangon = report.createInviteEmbed;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    entity = tangon.bind(report)(zuuluu, oscard, michal);
 1211:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            _fun00008_ip = 75; continue _fun00007;
 71:
            entity = new Array(0);
 75:
            return entity;
        }
    };
    zuuluu['createCodedLinkEmbeds'] = michal;
    return entity;
})();