// app/utils/native/MessagesUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.InviteStates;
    var _closure1_slot2 = golfie;
    michal = michal.MessageEmbedTypes;
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.GuildTemplateStates;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function(argFoo, argBar, argBaz) { // Original name: messageAuthorActivitiesChanged
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = argBar;
            tangon = argBaz;
            report = zuuluu.messageAuthorActivities;
            entity = tangon.messageAuthorActivities;
            entity = report !== entity;
            if(!entity) { _fun00002_ip = 40; continue _fun00001 }
 28:
            oscard = michal.activity;
            report = null;
            entity = report != oscard;
 40:
            if(!entity) { _fun00002_ip = 89; continue _fun00001 }
 43:
            report = zuuluu.messageAuthorActivities;
            zuuluu = michal.author;
            zuuluu = zuuluu.id;
            zuuluu = report[zuuluu];
            tangon = tangon.messageAuthorActivities;
            michal = michal.author;
            michal = michal.id;
            michal = tangon[michal];
            entity = zuuluu !== michal;
 89:
            return entity;
        }
    };
    michal['messageAuthorActivitiesChanged'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: codedLinksChanged
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            report = argBaz;
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = report;
            entity = tangon.codedLinks;
            michal = entity.length;
            entity = 0;
            entity = entity !== michal;
            if(!entity) { _fun00004_ip = 297; continue _fun00003 }
 42:
            golfie = oscard.invites;
            michal = report.invites;
            michal = golfie !== michal;
            if(michal) { _fun00004_ip = 77; continue _fun00003 }
 61:
            option = oscard.appDirectoryEmbedApplications;
            golfie = report.appDirectoryEmbedApplications;
            michal = option !== golfie;
 77:
            if(michal) { _fun00004_ip = 96; continue _fun00003 }
 80:
            option = oscard.invalidAppDirectoryEmbedApplicationIds;
            golfie = report.invalidAppDirectoryEmbedApplicationIds;
            michal = option !== golfie;
 96:
            if(michal) { _fun00004_ip = 115; continue _fun00003 }
 99:
            option = oscard.invalidApplicationIds;
            golfie = report.invalidApplicationIds;
            michal = option !== golfie;
 115:
            if(michal) { _fun00004_ip = 134; continue _fun00003 }
 118:
            option = oscard.appDirectoryEmbedApplicationFetchStates;
            golfie = report.appDirectoryEmbedApplicationFetchStates;
            michal = option !== golfie;
 134:
            if(michal) { _fun00004_ip = 153; continue _fun00003 }
 137:
            option = oscard.guildTemplates;
            golfie = report.guildTemplates;
            michal = option !== golfie;
 153:
            if(michal) { _fun00004_ip = 172; continue _fun00003 }
 156:
            option = oscard.buildOverrides;
            golfie = report.buildOverrides;
            michal = option !== golfie;
 172:
            if(michal) { _fun00004_ip = 191; continue _fun00003 }
 175:
            option = oscard.activityParticipants;
            golfie = report.activityParticipants;
            michal = option !== golfie;
 191:
            if(michal) { _fun00004_ip = 210; continue _fun00003 }
 194:
            option = oscard.quests;
            golfie = report.quests;
            michal = option !== golfie;
 210:
            if(michal) { _fun00004_ip = 229; continue _fun00003 }
 213:
            option = oscard.isFetchingCurrentQuests;
            golfie = report.isFetchingCurrentQuests;
            michal = option !== golfie;
 229:
            if(michal) { _fun00004_ip = 248; continue _fun00003 }
 232:
            option = oscard.applicationAssetFetchingIds;
            golfie = report.applicationAssetFetchingIds;
            michal = option !== golfie;
 248:
            if(michal) { _fun00004_ip = 267; continue _fun00003 }
 251:
            oscard = oscard.applications;
            report = report.applications;
            michal = oscard !== report;
 267:
            if(!michal) { _fun00004_ip = 294; continue _fun00003 }
 270:
            report = tangon.codedLinks;
            tangon = report.some;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    golfie = entity.type;
                    zuuluu = entity.code;
                    tangon = _closure1_slot0;
                    entity = _closure1_slot1;
                    oscard = 2;
                    michal = entity[oscard];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.BUILD_OVERRIDE;
                    if(!(golfie !== michal)) { _fun00006_ip = 1417; continue _fun00005 }
 57:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.MANUAL_BUILD_OVERRIDE;
                    if(!(golfie !== michal)) { _fun00006_ip = 1417; continue _fun00005 }
 93:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.INVITE;
                    if(!(golfie !== michal)) { _fun00006_ip = 1285; continue _fun00005 }
 129:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.TEMPLATE;
                    if(!(golfie !== michal)) { _fun00006_ip = 1175; continue _fun00005 }
 165:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.EVENT;
                    if(!(golfie !== michal)) { _fun00006_ip = 1171; continue _fun00005 }
 201:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.CHANNEL_LINK;
                    if(!(golfie !== michal)) { _fun00006_ip = 1167; continue _fun00005 }
 237:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.APP_DIRECTORY_PROFILE;
                    if(!(golfie !== michal)) { _fun00006_ip = 1064; continue _fun00005 }
 273:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.ACTIVITY_BOOKMARK;
                    if(!(golfie !== michal)) { _fun00006_ip = 981; continue _fun00005 }
 309:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.EMBEDDED_ACTIVITY_INVITE;
                    if(!(golfie !== michal)) { _fun00006_ip = 795; continue _fun00005 }
 345:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.GUILD_PRODUCT;
                    if(!(golfie !== michal)) { _fun00006_ip = 791; continue _fun00005 }
 381:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.SERVER_SHOP;
                    if(!(golfie !== michal)) { _fun00006_ip = 787; continue _fun00005 }
 417:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.QUESTS_EMBED;
                    if(!(golfie !== michal)) { _fun00006_ip = 731; continue _fun00005 }
 453:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.APP_DIRECTORY_STOREFRONT;
                    if(!(golfie !== michal)) { _fun00006_ip = 727; continue _fun00005 }
 489:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.APP_DIRECTORY_STOREFRONT_SKU;
                    if(!(golfie !== michal)) { _fun00006_ip = 723; continue _fun00005 }
 525:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.APP_OAUTH2_LINK;
                    if(!(golfie !== michal)) { _fun00006_ip = 632; continue _fun00005 }
 558:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.CodedLinkType;
                    michal = michal.COLLECTIBLES_SHOP;
                    if(!(golfie !== michal)) { _fun00006_ip = 628; continue _fun00005 }
 591:
                    michal = global;
                    tangon = michal.Error;
                    michal = michal.HermesInternal;
                    oscard = michal.concat;
                    michal = 'Unknown coded link type: ';
                    michal = oscard.bind(michal)(golfie);
                    michal = tangon.bind(entity)(michal);
                    throw michal;
 628:
                    michal = false;
                    return michal;
 632:
                    michal = _closure2_slot0;
                    michal = michal.applications;
                    oscard = michal[zuuluu];
                    michal = _closure2_slot1;
                    michal = michal.applications;
                    michal = michal[zuuluu];
                    michal = oscard !== michal;
                    if(michal) { _fun00006_ip = 694; continue _fun00005 }
 670:
                    oscard = _closure2_slot0;
                    golfie = oscard.applicationAssetFetchingIds;
                    oscard = _closure2_slot1;
                    oscard = oscard.applicationAssetFetchingIds;
                    michal = golfie !== oscard;
 694:
                    if(michal) { _fun00006_ip = 721; continue _fun00005 }
 697:
                    oscard = _closure2_slot0;
                    oscard = oscard.invalidApplicationIds;
                    tangon = _closure2_slot1;
                    tangon = tangon.invalidApplicationIds;
                    michal = oscard !== tangon;
 721:
                    return michal;
 723:
                    michal = false;
                    return michal;
 727:
                    michal = false;
                    return michal;
 731:
                    michal = _closure2_slot0;
                    oscard = michal.quests;
                    michal = _closure2_slot1;
                    michal = michal.quests;
                    michal = oscard !== michal;
                    if(michal) { _fun00006_ip = 785; continue _fun00005 }
 761:
                    oscard = _closure2_slot0;
                    oscard = oscard.isFetchingCurrentQuests;
                    tangon = _closure2_slot1;
                    tangon = tangon.isFetchingCurrentQuests;
                    michal = oscard !== tangon;
 785:
                    return michal;
 787:
                    michal = false;
                    return michal;
 791:
                    michal = false;
                    return michal;
 795:
                    option = _closure2_slot0;
                    tangon = option.invites;
                    michal = tangon.get;
                    tangon = michal.bind(tangon)(zuuluu);
                    michal = _closure2_slot1;
                    verify = michal.invites;
                    oscard = verify.get;
                    oscard = oscard.bind(verify)(zuuluu);
                    option = option.activityParticipants;
                    michal = michal.activityParticipants;
                    michal = option !== michal;
                    if(michal) { _fun00006_ip = 881; continue _fun00005 }
 857:
                    option = _closure2_slot0;
                    verify = option.invalidApplicationIds;
                    option = _closure2_slot1;
                    option = option.invalidApplicationIds;
                    michal = verify !== option;
 881:
                    if(michal) { _fun00006_ip = 908; continue _fun00005 }
 884:
                    option = _closure2_slot0;
                    option = option.applicationAssetFetchingIds;
                    golfie = _closure2_slot1;
                    golfie = golfie.applicationAssetFetchingIds;
                    michal = option !== golfie;
 908:
                    if(michal) { _fun00006_ip = 979; continue _fun00005 }
 911:
                    golfie = null;
                    verify = golfie == tangon;
                    option = undefined;
                    if(verify) { _fun00006_ip = 927; continue _fun00005 }
 922:
                    option = tangon.state;
 927:
                    verify = golfie == oscard;
                    tangon = undefined;
                    if(verify) { _fun00006_ip = 941; continue _fun00005 }
 936:
                    tangon = oscard.state;
 941:
                    tangon = option !== tangon;
                    if(!tangon) { _fun00006_ip = 976; continue _fun00005 }
 948:
                    option = golfie == oscard;
                    golfie = undefined;
                    if(option) { _fun00006_ip = 962; continue _fun00005 }
 957:
                    golfie = oscard.state;
 962:
                    oscard = _closure1_slot2;
                    oscard = oscard.RESOLVING;
                    tangon = golfie !== oscard;
 976:
                    michal = tangon;
 979:
                    return michal;
 981:
                    michal = _closure2_slot0;
                    oscard = michal.activityParticipants;
                    michal = _closure2_slot1;
                    michal = michal.activityParticipants;
                    michal = oscard !== michal;
                    if(michal) { _fun00006_ip = 1035; continue _fun00005 }
 1011:
                    oscard = _closure2_slot0;
                    golfie = oscard.invalidApplicationIds;
                    oscard = _closure2_slot1;
                    oscard = oscard.invalidApplicationIds;
                    michal = golfie !== oscard;
 1035:
                    if(michal) { _fun00006_ip = 1062; continue _fun00005 }
 1038:
                    oscard = _closure2_slot0;
                    oscard = oscard.applicationAssetFetchingIds;
                    tangon = _closure2_slot1;
                    tangon = tangon.applicationAssetFetchingIds;
                    michal = oscard !== tangon;
 1062:
                    return michal;
 1064:
                    oscard = _closure2_slot0;
                    tangon = oscard.appDirectoryEmbedApplications;
                    verify = tangon[zuuluu];
                    tangon = _closure2_slot1;
                    michal = tangon.appDirectoryEmbedApplications;
                    michal = michal[zuuluu];
                    option = oscard.invalidAppDirectoryEmbedApplicationIds;
                    golfie = option.has;
                    option = golfie.bind(option)(zuuluu);
                    offset = tangon.invalidAppDirectoryEmbedApplicationIds;
                    golfie = offset.has;
                    golfie = golfie.bind(offset)(zuuluu);
                    oscard = oscard.appDirectoryEmbedApplicationFetchStates;
                    oscard = oscard[zuuluu];
                    tangon = tangon.appDirectoryEmbedApplicationFetchStates;
                    tangon = tangon[zuuluu];
                    michal = verify !== michal;
                    if(michal) { _fun00006_ip = 1158; continue _fun00005 }
 1154:
                    michal = option !== golfie;
 1158:
                    if(michal) { _fun00006_ip = 1165; continue _fun00005 }
 1161:
                    michal = oscard !== tangon;
 1165:
                    return michal;
 1167:
                    michal = false;
                    return michal;
 1171:
                    michal = false;
                    return michal;
 1175:
                    michal = _closure2_slot0;
                    oscard = michal.guildTemplates;
                    michal = oscard.get;
                    michal = michal.bind(oscard)(zuuluu);
                    tangon = _closure2_slot1;
                    oscard = tangon.guildTemplates;
                    tangon = oscard.get;
                    tangon = tangon.bind(oscard)(zuuluu);
                    oscard = null;
                    option = oscard == michal;
                    golfie = undefined;
                    if(option) { _fun00006_ip = 1234; continue _fun00005 }
 1229:
                    golfie = michal.state;
 1234:
                    option = oscard == tangon;
                    michal = undefined;
                    if(option) { _fun00006_ip = 1248; continue _fun00005 }
 1243:
                    michal = tangon.state;
 1248:
                    michal = golfie !== michal;
                    if(!michal) { _fun00006_ip = 1283; continue _fun00005 }
 1255:
                    golfie = oscard == tangon;
                    oscard = undefined;
                    if(golfie) { _fun00006_ip = 1269; continue _fun00005 }
 1264:
                    oscard = tangon.state;
 1269:
                    tangon = _closure1_slot4;
                    tangon = tangon.RESOLVING;
                    michal = oscard !== tangon;
 1283:
                    return michal;
 1285:
                    oscard = _closure2_slot0;
                    golfie = oscard.invites;
                    michal = golfie.get;
                    michal = michal.bind(golfie)(zuuluu);
                    tangon = _closure2_slot1;
                    option = tangon.invites;
                    golfie = option.get;
                    golfie = golfie.bind(option)(zuuluu);
                    oscard = oscard.applicationAssetFetchingIds;
                    tangon = tangon.applicationAssetFetchingIds;
                    tangon = oscard !== tangon;
                    oscard = null;
                    verify = oscard == michal;
                    option = undefined;
                    if(verify) { _fun00006_ip = 1360; continue _fun00005 }
 1355:
                    option = michal.state;
 1360:
                    verify = oscard == golfie;
                    michal = undefined;
                    if(verify) { _fun00006_ip = 1374; continue _fun00005 }
 1369:
                    michal = golfie.state;
 1374:
                    michal = option !== michal;
                    if(!michal) { _fun00006_ip = 1409; continue _fun00005 }
 1381:
                    option = oscard == golfie;
                    oscard = undefined;
                    if(option) { _fun00006_ip = 1395; continue _fun00005 }
 1390:
                    oscard = golfie.state;
 1395:
                    report = _closure1_slot2;
                    report = report.RESOLVING;
                    michal = oscard !== report;
 1409:
                    if(michal) { _fun00006_ip = 1415; continue _fun00005 }
 1412:
                    michal = tangon;
 1415:
                    return michal;
 1417:
                    tangon = _closure2_slot0;
                    tangon = tangon.buildOverrides;
                    report = tangon[zuuluu];
                    michal = _closure2_slot1;
                    michal = michal.buildOverrides;
                    zuuluu = michal[zuuluu];
                    tangon = null;
                    oscard = tangon == report;
                    michal = undefined;
                    if(oscard) { _fun00006_ip = 1464; continue _fun00005 }
 1459:
                    michal = report.state;
 1464:
                    tangon = tangon == zuuluu;
                    entity = undefined;
                    if(tangon) { _fun00006_ip = 1478; continue _fun00005 }
 1473:
                    entity = zuuluu.state;
 1478:
                    entity = michal !== entity;
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu);
 294:
            entity = michal;
 297:
            return entity;
        }
    };
    michal['codedLinksChanged'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: giftCodesChanged
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = argBaz;
            var _closure2_slot1 = entity;
            entity = zuuluu.giftCodes;
            tangon = entity.length;
            entity = 0;
            entity = entity !== tangon;
            if(!entity) { _fun00008_ip = 63; continue _fun00007 }
 39:
            tangon = zuuluu.giftCodes;
            zuuluu = tangon.some;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    option = argFoo;
                    michal = _closure2_slot0;
                    tangon = michal.resolvedGiftCodes;
                    zuuluu = tangon.includes;
                    oscard = zuuluu.bind(tangon)(option);
                    entity = _closure2_slot1;
                    tangon = entity.resolvedGiftCodes;
                    zuuluu = tangon.includes;
                    report = zuuluu.bind(tangon)(option);
                    tangon = michal.resolvingGiftCodes;
                    zuuluu = tangon.includes;
                    tangon = zuuluu.bind(tangon)(option);
                    golfie = entity.resolvingGiftCodes;
                    zuuluu = golfie.includes;
                    zuuluu = zuuluu.bind(golfie)(option);
                    golfie = michal.acceptingGiftCodes;
                    michal = golfie.includes;
                    michal = michal.bind(golfie)(option);
                    golfie = entity.acceptingGiftCodes;
                    entity = golfie.includes;
                    entity = entity.bind(golfie)(option);
                    if(!(oscard === report)) { _fun00010_ip = 126; continue _fun00009 }
 114:
                    if(!(tangon === zuuluu)) { _fun00010_ip = 126; continue _fun00009 }
 118:
                    if(!(michal === entity)) { _fun00010_ip = 126; continue _fun00009 }
 122:
                    entity = undefined;
                    return entity;
 126:
                    entity = true;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal);
 63:
            return entity;
        }
    };
    michal['giftCodesChanged'] = golfie;
    tangon = function(argFoo, argBar, argBaz) { // Original name: mediaPostPreviewEmbedsChanged
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = argBaz;
            var _closure2_slot1 = entity;
            entity = argFoo;
            tangon = entity.embeds;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot3;
                entity = entity.POST_PREVIEW;
                entity = michal === entity;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.length;
            entity = 0;
            entity = entity !== zuuluu;
            if(!entity) { _fun00012_ip = 74; continue _fun00011 }
 56:
            zuuluu = tangon.some;
            michal = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.getMediaPostEmbedChannelId;
                    entity = argFoo;
                    entity = entity.url;
                    tangon = michal.bind(zuuluu)(entity);
                    entity = null;
                    entity = entity != tangon;
                    if(!entity) { _fun00014_ip = 88; continue _fun00013 }
 53:
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.mediaPostPreviewEmbeds;
                    zuuluu = zuuluu[tangon];
                    michal = _closure2_slot1;
                    michal = michal.mediaPostPreviewEmbeds;
                    michal = michal[tangon];
                    entity = zuuluu !== michal;
 88:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal);
 74:
            return entity;
        }
    };
    michal['mediaPostPreviewEmbedsChanged'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/native/MessagesUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();