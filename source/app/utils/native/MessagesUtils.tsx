// app/utils/native/MessagesUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.InviteStates;
    var _closure1_slot2 = golf;
    mike = mike.MessageEmbedTypes;
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.GuildTemplateStates;
    var _closure1_slot4 = mike;
    mike = {};
    golf = function(argFoo, argBar, argBaz) { // Original name: messageAuthorActivitiesChanged
        _fun100124: for(var _fun100124_ip = 0; ; ) switch(_fun100124_ip) {
 0:
            mike = argFoo;
            zulu = argBar;
            tango = argBaz;
            report = zulu.messageAuthorActivities;
            entity = tango.messageAuthorActivities;
            entity = report !== entity;
            if(!entity) { _fun100124_ip = 40; continue _fun100124 }
 28:
            oscar = mike.activity;
            report = null;
            entity = report != oscar;
 40:
            if(!entity) { _fun100124_ip = 89; continue _fun100124 }
 43:
            report = zulu.messageAuthorActivities;
            zulu = mike.author;
            zulu = zulu.id;
            zulu = report[zulu];
            tango = tango.messageAuthorActivities;
            mike = mike.author;
            mike = mike.id;
            mike = tango[mike];
            entity = zulu !== mike;
 89:
            return entity;
        }
    };
    mike['messageAuthorActivitiesChanged'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: codedLinksChanged
        _fun100125: for(var _fun100125_ip = 0; ; ) switch(_fun100125_ip) {
 0:
            tango = argFoo;
            oscar = argBar;
            report = argBaz;
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = report;
            entity = tango.codedLinks;
            mike = entity.length;
            entity = 0;
            entity = entity !== mike;
            if(!entity) { _fun100125_ip = 297; continue _fun100125 }
 42:
            golf = oscar.invites;
            mike = report.invites;
            mike = golf !== mike;
            if(mike) { _fun100125_ip = 77; continue _fun100125 }
 61:
            options = oscar.appDirectoryEmbedApplications;
            golf = report.appDirectoryEmbedApplications;
            mike = options !== golf;
 77:
            if(mike) { _fun100125_ip = 96; continue _fun100125 }
 80:
            options = oscar.invalidAppDirectoryEmbedApplicationIds;
            golf = report.invalidAppDirectoryEmbedApplicationIds;
            mike = options !== golf;
 96:
            if(mike) { _fun100125_ip = 115; continue _fun100125 }
 99:
            options = oscar.invalidApplicationIds;
            golf = report.invalidApplicationIds;
            mike = options !== golf;
 115:
            if(mike) { _fun100125_ip = 134; continue _fun100125 }
 118:
            options = oscar.appDirectoryEmbedApplicationFetchStates;
            golf = report.appDirectoryEmbedApplicationFetchStates;
            mike = options !== golf;
 134:
            if(mike) { _fun100125_ip = 153; continue _fun100125 }
 137:
            options = oscar.guildTemplates;
            golf = report.guildTemplates;
            mike = options !== golf;
 153:
            if(mike) { _fun100125_ip = 172; continue _fun100125 }
 156:
            options = oscar.buildOverrides;
            golf = report.buildOverrides;
            mike = options !== golf;
 172:
            if(mike) { _fun100125_ip = 191; continue _fun100125 }
 175:
            options = oscar.activityParticipants;
            golf = report.activityParticipants;
            mike = options !== golf;
 191:
            if(mike) { _fun100125_ip = 210; continue _fun100125 }
 194:
            options = oscar.quests;
            golf = report.quests;
            mike = options !== golf;
 210:
            if(mike) { _fun100125_ip = 229; continue _fun100125 }
 213:
            options = oscar.isFetchingCurrentQuests;
            golf = report.isFetchingCurrentQuests;
            mike = options !== golf;
 229:
            if(mike) { _fun100125_ip = 248; continue _fun100125 }
 232:
            options = oscar.applicationAssetFetchingIds;
            golf = report.applicationAssetFetchingIds;
            mike = options !== golf;
 248:
            if(mike) { _fun100125_ip = 267; continue _fun100125 }
 251:
            oscar = oscar.applications;
            report = report.applications;
            mike = oscar !== report;
 267:
            if(!mike) { _fun100125_ip = 294; continue _fun100125 }
 270:
            report = tango.codedLinks;
            tango = report.some;
            zulu = function(argFoo) {
                _fun100126: for(var _fun100126_ip = 0; ; ) switch(_fun100126_ip) {
 0:
                    entity = argFoo;
                    golf = entity.type;
                    zulu = entity.code;
                    tango = _closure1_slot0;
                    entity = _closure1_slot1;
                    oscar = 2;
                    mike = entity[oscar];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.BUILD_OVERRIDE;
                    if(!(golf !== mike)) { _fun100126_ip = 1417; continue _fun100126 }
 57:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.MANUAL_BUILD_OVERRIDE;
                    if(!(golf !== mike)) { _fun100126_ip = 1417; continue _fun100126 }
 93:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.INVITE;
                    if(!(golf !== mike)) { _fun100126_ip = 1285; continue _fun100126 }
 129:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.TEMPLATE;
                    if(!(golf !== mike)) { _fun100126_ip = 1175; continue _fun100126 }
 165:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.EVENT;
                    if(!(golf !== mike)) { _fun100126_ip = 1171; continue _fun100126 }
 201:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.CHANNEL_LINK;
                    if(!(golf !== mike)) { _fun100126_ip = 1167; continue _fun100126 }
 237:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.APP_DIRECTORY_PROFILE;
                    if(!(golf !== mike)) { _fun100126_ip = 1064; continue _fun100126 }
 273:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.ACTIVITY_BOOKMARK;
                    if(!(golf !== mike)) { _fun100126_ip = 981; continue _fun100126 }
 309:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.EMBEDDED_ACTIVITY_INVITE;
                    if(!(golf !== mike)) { _fun100126_ip = 795; continue _fun100126 }
 345:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.GUILD_PRODUCT;
                    if(!(golf !== mike)) { _fun100126_ip = 791; continue _fun100126 }
 381:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.SERVER_SHOP;
                    if(!(golf !== mike)) { _fun100126_ip = 787; continue _fun100126 }
 417:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.QUESTS_EMBED;
                    if(!(golf !== mike)) { _fun100126_ip = 731; continue _fun100126 }
 453:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.APP_DIRECTORY_STOREFRONT;
                    if(!(golf !== mike)) { _fun100126_ip = 727; continue _fun100126 }
 489:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.APP_DIRECTORY_STOREFRONT_SKU;
                    if(!(golf !== mike)) { _fun100126_ip = 723; continue _fun100126 }
 525:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.APP_OAUTH2_LINK;
                    if(!(golf !== mike)) { _fun100126_ip = 632; continue _fun100126 }
 558:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    mike = tango.bind(entity)(mike);
                    mike = mike.CodedLinkType;
                    mike = mike.COLLECTIBLES_SHOP;
                    if(!(golf !== mike)) { _fun100126_ip = 628; continue _fun100126 }
 591:
                    mike = global;
                    tango = mike.Error;
                    mike = mike.HermesInternal;
                    oscar = mike.concat;
                    mike = 'Unknown coded link type: ';
                    mike = oscar.bind(mike)(golf);
                    mike = tango.bind(entity)(mike);
                    throw mike;
 628:
                    mike = false;
                    return mike;
 632:
                    mike = _closure2_slot0;
                    mike = mike.applications;
                    oscar = mike[zulu];
                    mike = _closure2_slot1;
                    mike = mike.applications;
                    mike = mike[zulu];
                    mike = oscar !== mike;
                    if(mike) { _fun100126_ip = 694; continue _fun100126 }
 670:
                    oscar = _closure2_slot0;
                    golf = oscar.applicationAssetFetchingIds;
                    oscar = _closure2_slot1;
                    oscar = oscar.applicationAssetFetchingIds;
                    mike = golf !== oscar;
 694:
                    if(mike) { _fun100126_ip = 721; continue _fun100126 }
 697:
                    oscar = _closure2_slot0;
                    oscar = oscar.invalidApplicationIds;
                    tango = _closure2_slot1;
                    tango = tango.invalidApplicationIds;
                    mike = oscar !== tango;
 721:
                    return mike;
 723:
                    mike = false;
                    return mike;
 727:
                    mike = false;
                    return mike;
 731:
                    mike = _closure2_slot0;
                    oscar = mike.quests;
                    mike = _closure2_slot1;
                    mike = mike.quests;
                    mike = oscar !== mike;
                    if(mike) { _fun100126_ip = 785; continue _fun100126 }
 761:
                    oscar = _closure2_slot0;
                    oscar = oscar.isFetchingCurrentQuests;
                    tango = _closure2_slot1;
                    tango = tango.isFetchingCurrentQuests;
                    mike = oscar !== tango;
 785:
                    return mike;
 787:
                    mike = false;
                    return mike;
 791:
                    mike = false;
                    return mike;
 795:
                    options = _closure2_slot0;
                    tango = options.invites;
                    mike = tango.get;
                    tango = mike.bind(tango)(zulu);
                    mike = _closure2_slot1;
                    verify = mike.invites;
                    oscar = verify.get;
                    oscar = oscar.bind(verify)(zulu);
                    options = options.activityParticipants;
                    mike = mike.activityParticipants;
                    mike = options !== mike;
                    if(mike) { _fun100126_ip = 881; continue _fun100126 }
 857:
                    options = _closure2_slot0;
                    verify = options.invalidApplicationIds;
                    options = _closure2_slot1;
                    options = options.invalidApplicationIds;
                    mike = verify !== options;
 881:
                    if(mike) { _fun100126_ip = 908; continue _fun100126 }
 884:
                    options = _closure2_slot0;
                    options = options.applicationAssetFetchingIds;
                    golf = _closure2_slot1;
                    golf = golf.applicationAssetFetchingIds;
                    mike = options !== golf;
 908:
                    if(mike) { _fun100126_ip = 979; continue _fun100126 }
 911:
                    golf = null;
                    verify = golf == tango;
                    options = undefined;
                    if(verify) { _fun100126_ip = 927; continue _fun100126 }
 922:
                    options = tango.state;
 927:
                    verify = golf == oscar;
                    tango = undefined;
                    if(verify) { _fun100126_ip = 941; continue _fun100126 }
 936:
                    tango = oscar.state;
 941:
                    tango = options !== tango;
                    if(!tango) { _fun100126_ip = 976; continue _fun100126 }
 948:
                    options = golf == oscar;
                    golf = undefined;
                    if(options) { _fun100126_ip = 962; continue _fun100126 }
 957:
                    golf = oscar.state;
 962:
                    oscar = _closure1_slot2;
                    oscar = oscar.RESOLVING;
                    tango = golf !== oscar;
 976:
                    mike = tango;
 979:
                    return mike;
 981:
                    mike = _closure2_slot0;
                    oscar = mike.activityParticipants;
                    mike = _closure2_slot1;
                    mike = mike.activityParticipants;
                    mike = oscar !== mike;
                    if(mike) { _fun100126_ip = 1035; continue _fun100126 }
 1011:
                    oscar = _closure2_slot0;
                    golf = oscar.invalidApplicationIds;
                    oscar = _closure2_slot1;
                    oscar = oscar.invalidApplicationIds;
                    mike = golf !== oscar;
 1035:
                    if(mike) { _fun100126_ip = 1062; continue _fun100126 }
 1038:
                    oscar = _closure2_slot0;
                    oscar = oscar.applicationAssetFetchingIds;
                    tango = _closure2_slot1;
                    tango = tango.applicationAssetFetchingIds;
                    mike = oscar !== tango;
 1062:
                    return mike;
 1064:
                    oscar = _closure2_slot0;
                    tango = oscar.appDirectoryEmbedApplications;
                    verify = tango[zulu];
                    tango = _closure2_slot1;
                    mike = tango.appDirectoryEmbedApplications;
                    mike = mike[zulu];
                    options = oscar.invalidAppDirectoryEmbedApplicationIds;
                    golf = options.has;
                    options = golf.bind(options)(zulu);
                    offset = tango.invalidAppDirectoryEmbedApplicationIds;
                    golf = offset.has;
                    golf = golf.bind(offset)(zulu);
                    oscar = oscar.appDirectoryEmbedApplicationFetchStates;
                    oscar = oscar[zulu];
                    tango = tango.appDirectoryEmbedApplicationFetchStates;
                    tango = tango[zulu];
                    mike = verify !== mike;
                    if(mike) { _fun100126_ip = 1158; continue _fun100126 }
 1154:
                    mike = options !== golf;
 1158:
                    if(mike) { _fun100126_ip = 1165; continue _fun100126 }
 1161:
                    mike = oscar !== tango;
 1165:
                    return mike;
 1167:
                    mike = false;
                    return mike;
 1171:
                    mike = false;
                    return mike;
 1175:
                    mike = _closure2_slot0;
                    oscar = mike.guildTemplates;
                    mike = oscar.get;
                    mike = mike.bind(oscar)(zulu);
                    tango = _closure2_slot1;
                    oscar = tango.guildTemplates;
                    tango = oscar.get;
                    tango = tango.bind(oscar)(zulu);
                    oscar = null;
                    options = oscar == mike;
                    golf = undefined;
                    if(options) { _fun100126_ip = 1234; continue _fun100126 }
 1229:
                    golf = mike.state;
 1234:
                    options = oscar == tango;
                    mike = undefined;
                    if(options) { _fun100126_ip = 1248; continue _fun100126 }
 1243:
                    mike = tango.state;
 1248:
                    mike = golf !== mike;
                    if(!mike) { _fun100126_ip = 1283; continue _fun100126 }
 1255:
                    golf = oscar == tango;
                    oscar = undefined;
                    if(golf) { _fun100126_ip = 1269; continue _fun100126 }
 1264:
                    oscar = tango.state;
 1269:
                    tango = _closure1_slot4;
                    tango = tango.RESOLVING;
                    mike = oscar !== tango;
 1283:
                    return mike;
 1285:
                    oscar = _closure2_slot0;
                    golf = oscar.invites;
                    mike = golf.get;
                    mike = mike.bind(golf)(zulu);
                    tango = _closure2_slot1;
                    options = tango.invites;
                    golf = options.get;
                    golf = golf.bind(options)(zulu);
                    oscar = oscar.applicationAssetFetchingIds;
                    tango = tango.applicationAssetFetchingIds;
                    tango = oscar !== tango;
                    oscar = null;
                    verify = oscar == mike;
                    options = undefined;
                    if(verify) { _fun100126_ip = 1360; continue _fun100126 }
 1355:
                    options = mike.state;
 1360:
                    verify = oscar == golf;
                    mike = undefined;
                    if(verify) { _fun100126_ip = 1374; continue _fun100126 }
 1369:
                    mike = golf.state;
 1374:
                    mike = options !== mike;
                    if(!mike) { _fun100126_ip = 1409; continue _fun100126 }
 1381:
                    options = oscar == golf;
                    oscar = undefined;
                    if(options) { _fun100126_ip = 1395; continue _fun100126 }
 1390:
                    oscar = golf.state;
 1395:
                    report = _closure1_slot2;
                    report = report.RESOLVING;
                    mike = oscar !== report;
 1409:
                    if(mike) { _fun100126_ip = 1415; continue _fun100126 }
 1412:
                    mike = tango;
 1415:
                    return mike;
 1417:
                    tango = _closure2_slot0;
                    tango = tango.buildOverrides;
                    report = tango[zulu];
                    mike = _closure2_slot1;
                    mike = mike.buildOverrides;
                    zulu = mike[zulu];
                    tango = null;
                    oscar = tango == report;
                    mike = undefined;
                    if(oscar) { _fun100126_ip = 1464; continue _fun100126 }
 1459:
                    mike = report.state;
 1464:
                    tango = tango == zulu;
                    entity = undefined;
                    if(tango) { _fun100126_ip = 1478; continue _fun100126 }
 1473:
                    entity = zulu.state;
 1478:
                    entity = mike !== entity;
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu);
 294:
            entity = mike;
 297:
            return entity;
        }
    };
    mike['codedLinksChanged'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: giftCodesChanged
        _fun100127: for(var _fun100127_ip = 0; ; ) switch(_fun100127_ip) {
 0:
            zulu = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = argBaz;
            var _closure2_slot1 = entity;
            entity = zulu.giftCodes;
            tango = entity.length;
            entity = 0;
            entity = entity !== tango;
            if(!entity) { _fun100127_ip = 63; continue _fun100127 }
 39:
            tango = zulu.giftCodes;
            zulu = tango.some;
            mike = function(argFoo) {
                _fun100128: for(var _fun100128_ip = 0; ; ) switch(_fun100128_ip) {
 0:
                    options = argFoo;
                    mike = _closure2_slot0;
                    tango = mike.resolvedGiftCodes;
                    zulu = tango.includes;
                    oscar = zulu.bind(tango)(options);
                    entity = _closure2_slot1;
                    tango = entity.resolvedGiftCodes;
                    zulu = tango.includes;
                    report = zulu.bind(tango)(options);
                    tango = mike.resolvingGiftCodes;
                    zulu = tango.includes;
                    tango = zulu.bind(tango)(options);
                    golf = entity.resolvingGiftCodes;
                    zulu = golf.includes;
                    zulu = zulu.bind(golf)(options);
                    golf = mike.acceptingGiftCodes;
                    mike = golf.includes;
                    mike = mike.bind(golf)(options);
                    golf = entity.acceptingGiftCodes;
                    entity = golf.includes;
                    entity = entity.bind(golf)(options);
                    if(!(oscar === report)) { _fun100128_ip = 126; continue _fun100128 }
 114:
                    if(!(tango === zulu)) { _fun100128_ip = 126; continue _fun100128 }
 118:
                    if(!(mike === entity)) { _fun100128_ip = 126; continue _fun100128 }
 122:
                    entity = undefined;
                    return entity;
 126:
                    entity = true;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 63:
            return entity;
        }
    };
    mike['giftCodesChanged'] = golf;
    tango = function(argFoo, argBar, argBaz) { // Original name: mediaPostPreviewEmbedsChanged
        _fun100129: for(var _fun100129_ip = 0; ; ) switch(_fun100129_ip) {
 0:
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = argBaz;
            var _closure2_slot1 = entity;
            entity = argFoo;
            tango = entity.embeds;
            zulu = tango.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure1_slot3;
                entity = entity.POST_PREVIEW;
                entity = mike === entity;
                return entity;
            };
            tango = zulu.bind(tango)(entity);
            zulu = tango.length;
            entity = 0;
            entity = entity !== zulu;
            if(!entity) { _fun100129_ip = 74; continue _fun100129 }
 56:
            zulu = tango.some;
            mike = function(argFoo) {
                _fun100131: for(var _fun100131_ip = 0; ; ) switch(_fun100131_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 3;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.getMediaPostEmbedChannelId;
                    entity = argFoo;
                    entity = entity.url;
                    tango = mike.bind(zulu)(entity);
                    entity = null;
                    entity = entity != tango;
                    if(!entity) { _fun100131_ip = 88; continue _fun100131 }
 53:
                    zulu = _closure2_slot0;
                    zulu = zulu.mediaPostPreviewEmbeds;
                    zulu = zulu[tango];
                    mike = _closure2_slot1;
                    mike = mike.mediaPostPreviewEmbeds;
                    mike = mike[tango];
                    entity = zulu !== mike;
 88:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 74:
            return entity;
        }
    };
    mike['mediaPostPreviewEmbedsChanged'] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/native/MessagesUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();