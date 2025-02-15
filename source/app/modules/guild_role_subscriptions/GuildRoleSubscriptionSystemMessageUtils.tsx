// app/modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: identityHook
        entity = argFoo;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: getRoleSubscriptionPurchaseContentCommonData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argBar;
            zulu = _closure1_slot3;
            mike = zulu.getGuild;
            entity = argFoo;
            golf = mike.bind(zulu)(entity);
            mike = null;
            report = mike == tango;
            entity = undefined;
            if(report) { _fun00002_ip = 40; continue _fun00001 }
 34:
            entity = tango.total_months_subscribed;
 40:
            options = mike != entity;
            oscar = 0;
            report = 0;
            if(!options) { _fun00002_ip = 54; continue _fun00001 }
 51:
            report = entity;
 54:
            entity = {};
            entity['guild'] = golf;
            entity['totalMonthsSubscribed'] = report;
            report = report > oscar;
            entity['showWithDuration'] = report;
            report = mike == tango;
            zulu = undefined;
            if(report) { _fun00002_ip = 91; continue _fun00001 }
 83:
            zulu = tango.is_renewal;
 91:
            mike = mike != zulu;
            if(!mike) { _fun00002_ip = 101; continue _fun00001 }
 98:
            mike = zulu;
 101:
            entity['isRenewal'] = mike;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getRoleSubscriptionPurchaseSystemMessageContent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            options = entity.username;
            oscar = entity.usernameOnClickHandler;
            tango = undefined;
            if(!(oscar === tango)) { _fun00004_ip = 27; continue _fun00003 }
 20:
            oscar = _closure1_slot10;
 27:
            golf = entity.roleSubscriptionOnClickHandler;
            if(!(golf === tango)) { _fun00004_ip = 44; continue _fun00003 }
 37:
            golf = _closure1_slot9;
 44:
            mike = entity.guildId;
            report = entity.roleSubscriptionData;
            entity = _closure1_slot11;
            entity = entity.bind(tango)(mike, report);
            verify = entity.guild;
            zulu = entity.totalMonthsSubscribed;
            mike = entity.showWithDuration;
            offset = entity.isRenewal;
            entity = {};
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            yankee = 5;
            yankee = foxtrot[yankee];
            yankee = romeo.bind(tango)(yankee);
            yankee = yankee.t;
            if(mike) { _fun00004_ip = 140; continue _fun00003 }
 121:
            if(offset) { _fun00004_ip = 132; continue _fun00003 }
 124:
            mike = yankee.mYjFFx;
            _fun00004_ip = 138; continue _fun00003;
 132:
            mike = yankee.mPTTdn;
 138:
            _fun00004_ip = 160; continue _fun00003;
 140:
            if(offset) { _fun00004_ip = 151; continue _fun00003 }
 143:
            offset = yankee.eCgb2d;
            _fun00004_ip = 157; continue _fun00003;
 151:
            offset = yankee.Iy66Mz;
 157:
            mike = offset;
 160:
            entity['content'] = mike;
            mike = {};
            mike['username'] = options;
            mike['usernameHook'] = oscar;
            oscar = null;
            offset = oscar == verify;
            options = undefined;
            if(offset) { _fun00004_ip = 191; continue _fun00003 }
 186:
            options = verify.name;
 191:
            mike['guildName'] = options;
            mike['handleGuildNameClick'] = golf;
            oscar = oscar == report;
            tango = undefined;
            if(oscar) { _fun00004_ip = 218; continue _fun00003 }
 212:
            tango = report.tier_name;
 218:
            mike['tierName'] = tango;
            mike['months'] = zulu;
            entity['formatParams'] = mike;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tango = report.bind(entity)(tango);
    golf = tango.getJoinButtonLabels;
    var _closure1_slot5 = golf;
    golf = tango.getRenewButtonLabels;
    var _closure1_slot6 = golf;
    tango = tango.STICKERS;
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot8 = golf;
    tango = tango.NOOP;
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: pickRoleSubscriptionPurchaseSticker
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot4;
            mike = zulu.getCurrentUser;
            zulu = mike.bind(zulu)();
            mike = null;
            tango = mike == zulu;
            report = undefined;
            oscar = undefined;
            if(tango) { _fun00006_ip = 34; continue _fun00005 }
 29:
            oscar = zulu.id;
 34:
            mike = mike != oscar;
            zulu = 0;
            if(!mike) { _fun00006_ip = 74; continue _fun00005 }
 43:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 4;
            mike = golf[mike];
            tango = tango.bind(report)(mike);
            mike = tango.extractTimestamp;
            zulu = mike.bind(tango)(oscar);
 74:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 4;
            mike = oscar[mike];
            report = tango.bind(report)(mike);
            tango = report.extractTimestamp;
            mike = argFoo;
            mike = tango.bind(report)(mike);
            zulu = zulu + mike;
            mike = _closure1_slot7;
            entity = mike.length;
            entity = zulu % entity;
            entity = mike[entity];
            return entity;
        }
    };
    zulu['pickRoleSubscriptionPurchaseSticker'] = tango;
    tango = function(argFoo, argBar) { // Original name: getRoleSubscriptionPurchaseStickerCTA
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argBar;
            if(mike) { _fun00008_ip = 21; continue _fun00007 }
 9:
            zulu = _closure1_slot5;
            mike = undefined;
            mike = zulu.bind(mike)();
            _fun00008_ip = 31; continue _fun00007;
 21:
            tango = _closure1_slot6;
            zulu = undefined;
            mike = tango.bind(zulu)();
 31:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 4;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.extractTimestamp;
            entity = argFoo;
            zulu = zulu.bind(tango)(entity);
            entity = mike.length;
            entity = zulu % entity;
            entity = mike[entity];
            return entity;
        }
    };
    zulu['getRoleSubscriptionPurchaseStickerCTA'] = tango;
    tango = function(argFoo) { // Original name: getRoleSubscriptionPurchaseSystemMessageFormattedContent
        entity = argFoo;
        options = entity.username;
        golf = entity.usernameOnClickHandler;
        oscar = entity.roleSubscriptionOnClickHandler;
        report = entity.guildId;
        tango = entity.roleSubscriptionData;
        zulu = _closure1_slot12;
        mike = {};
        mike['username'] = options;
        mike['usernameOnClickHandler'] = golf;
        mike['roleSubscriptionOnClickHandler'] = oscar;
        mike['guildId'] = report;
        mike['roleSubscriptionData'] = tango;
        report = undefined;
        mike = zulu.bind(report)(mike);
        tango = mike.content;
        zulu = mike.formatParams;
        mike = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 5;
        entity = oscar[entity];
        entity = mike.bind(report)(entity);
        mike = entity.intl;
        entity = mike.format;
        entity = entity.bind(mike)(tango, zulu);
        return entity;
    };
    zulu['getRoleSubscriptionPurchaseSystemMessageFormattedContent'] = tango;
    tango = function(argFoo) { // Original name: getRoleSubscriptionPurchaseSystemMessageAstFormattedContent
        entity = argFoo;
        options = entity.username;
        golf = entity.usernameOnClickHandler;
        oscar = entity.roleSubscriptionOnClickHandler;
        report = entity.guildId;
        tango = entity.roleSubscriptionData;
        zulu = _closure1_slot12;
        mike = {};
        mike['username'] = options;
        mike['usernameOnClickHandler'] = golf;
        mike['roleSubscriptionOnClickHandler'] = oscar;
        mike['guildId'] = report;
        mike['roleSubscriptionData'] = tango;
        report = undefined;
        mike = zulu.bind(report)(mike);
        tango = mike.content;
        zulu = mike.formatParams;
        mike = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 5;
        entity = oscar[entity];
        entity = mike.bind(report)(entity);
        mike = entity.intl;
        entity = mike.formatToParts;
        entity = entity.bind(mike)(tango, zulu);
        return entity;
    };
    zulu['getRoleSubscriptionPurchaseSystemMessageAstFormattedContent'] = tango;
    tango = function(argFoo) { // Original name: getRoleSubscriptionPurchaseSystemMessageContentMobile
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            options = entity.username;
            golf = entity.usernameOnClickHandler;
            verify = undefined;
            if(!(golf === verify)) { _fun00010_ip = 27; continue _fun00009 }
 20:
            golf = _closure1_slot10;
 27:
            oscar = entity.roleSubscriptionOnClickHandler;
            if(!(oscar === verify)) { _fun00010_ip = 44; continue _fun00009 }
 37:
            oscar = _closure1_slot9;
 44:
            zulu = entity.guildId;
            offset = entity.roleSubscriptionData;
            mike = _closure1_slot11;
            mike = mike.bind(verify)(zulu, offset);
            foxtrot = mike.guild;
            report = mike.totalMonthsSubscribed;
            tango = mike.showWithDuration;
            mike = mike.isRenewal;
            romeo = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 5;
            yankee = yankee[zulu];
            yankee = romeo.bind(verify)(yankee);
            yankee = yankee.t;
            if(tango) { _fun00010_ip = 138; continue _fun00009 }
 119:
            if(mike) { _fun00010_ip = 130; continue _fun00009 }
 122:
            tango = yankee.6Z1E+/;
            _fun00010_ip = 136; continue _fun00009;
 130:
            tango = yankee.OxP1ND;
 136:
            _fun00010_ip = 158; continue _fun00009;
 138:
            if(mike) { _fun00010_ip = 149; continue _fun00009 }
 141:
            mike = yankee.+N9bxs;
            _fun00010_ip = 155; continue _fun00009;
 149:
            mike = yankee.OQ0OU1;
 155:
            tango = mike;
 158:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[zulu];
            entity = mike.bind(verify)(entity);
            zulu = entity.intl;
            mike = zulu.formatToParts;
            entity = {};
            yankee = null;
            backup = yankee == foxtrot;
            romeo = undefined;
            if(backup) { _fun00010_ip = 204; continue _fun00009 }
 199:
            romeo = foxtrot.name;
 204:
            entity['guildName'] = romeo;
            yankee = yankee == offset;
            verify = undefined;
            if(yankee) { _fun00010_ip = 224; continue _fun00009 }
 218:
            verify = offset.tier_name;
 224:
            entity['tierName'] = verify;
            entity['username'] = options;
            entity['usernameOnClick'] = golf;
            entity['roleSubscriptionOnClick'] = oscar;
            entity['months'] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    zulu['getRoleSubscriptionPurchaseSystemMessageContentMobile'] = tango;
    tango = function(argFoo) { // Original name: isEligibleForRoleSubscriptionPurchaseSystemMessageSettings
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.isCreatorMonetizationEnabledGuild;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isEligibleForRoleSubscriptionPurchaseSystemMessageSettings'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: trackRoleSubscriptionPurchaseMessageTierClick
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.trackWithMetadata;
            mike = _closure1_slot8;
            zulu = mike.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED;
            mike = {};
            golf = argFoo;
            mike['guild_id'] = golf;
            golf = _closure1_slot4;
            oscar = golf.getCurrentUser;
            golf = oscar.bind(golf)();
            oscar = null;
            options = oscar == golf;
            oscar = undefined;
            if(options) { _fun00012_ip = 79; continue _fun00011 }
 74:
            oscar = golf.id;
 79:
            mike['user_id'] = oscar;
            oscar = argBar;
            mike['channel_id'] = oscar;
            oscar = argBaz;
            mike['message_id'] = oscar;
            oscar = argCorge;
            mike['role_subscription_listing_id'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackRoleSubscriptionPurchaseMessageTierClick'] = tango;
    mike = function(argFoo, argBar) { // Original name: getRoleSubscriptionPurchaseSystemMessageEventProperties
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            entity = {};
            tango = zulu.guild_id;
            entity['guild_id'] = tango;
            report = _closure1_slot4;
            tango = report.getCurrentUser;
            report = tango.bind(report)();
            tango = null;
            oscar = tango == report;
            tango = undefined;
            if(oscar) { _fun00014_ip = 49; continue _fun00013 }
 44:
            tango = report.id;
 49:
            entity['sender'] = tango;
            tango = mike.author;
            tango = tango.id;
            entity['target_user'] = tango;
            zulu = zulu.id;
            entity['channel_id'] = zulu;
            mike = mike.id;
            entity['message_id'] = mike;
            return entity;
        }
    };
    zulu['getRoleSubscriptionPurchaseSystemMessageEventProperties'] = mike;
    return entity;
})();