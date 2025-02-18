// app/modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: identityHook
        entity = argFoo;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: getRoleSubscriptionPurchaseContentCommonData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argBar;
            zuuluu = _closure1_slot3;
            michal = zuuluu.getGuild;
            entity = argFoo;
            golfie = michal.bind(zuuluu)(entity);
            michal = null;
            report = michal == tangon;
            entity = undefined;
            if(report) { _fun00002_ip = 40; continue _fun00001 }
 34:
            entity = tangon.total_months_subscribed;
 40:
            option = michal != entity;
            oscard = 0;
            report = 0;
            if(!option) { _fun00002_ip = 54; continue _fun00001 }
 51:
            report = entity;
 54:
            entity = {};
            entity['guild'] = golfie;
            entity['totalMonthsSubscribed'] = report;
            report = report > oscard;
            entity['showWithDuration'] = report;
            report = michal == tangon;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 91; continue _fun00001 }
 83:
            zuuluu = tangon.is_renewal;
 91:
            michal = michal != zuuluu;
            if(!michal) { _fun00002_ip = 101; continue _fun00001 }
 98:
            michal = zuuluu;
 101:
            entity['isRenewal'] = michal;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getRoleSubscriptionPurchaseSystemMessageContent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            option = entity.username;
            oscard = entity.usernameOnClickHandler;
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00004_ip = 27; continue _fun00003 }
 20:
            oscard = _closure1_slot10;
 27:
            golfie = entity.roleSubscriptionOnClickHandler;
            if(!(golfie === tangon)) { _fun00004_ip = 44; continue _fun00003 }
 37:
            golfie = _closure1_slot9;
 44:
            michal = entity.guildId;
            report = entity.roleSubscriptionData;
            entity = _closure1_slot11;
            entity = entity.bind(tangon)(michal, report);
            verify = entity.guild;
            zuuluu = entity.totalMonthsSubscribed;
            michal = entity.showWithDuration;
            offset = entity.isRenewal;
            entity = {};
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 5;
            yankee = foxtra[yankee];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.t;
            if(michal) { _fun00004_ip = 144; continue _fun00003 }
 121:
            if(offset) { _fun00004_ip = 134; continue _fun00003 }
 124:
            michal = yankee.mYjFFx;
            _fun00004_ip = 142; continue _fun00003;
 134:
            michal = yankee.mPTTdn;
 142:
            _fun00004_ip = 168; continue _fun00003;
 144:
            if(offset) { _fun00004_ip = 157; continue _fun00003 }
 147:
            offset = yankee.eCgb2d;
            _fun00004_ip = 165; continue _fun00003;
 157:
            offset = yankee.Iy66Mz;
 165:
            michal = offset;
 168:
            entity['content'] = michal;
            michal = {};
            michal['username'] = option;
            michal['usernameHook'] = oscard;
            oscard = null;
            offset = oscard == verify;
            option = undefined;
            if(offset) { _fun00004_ip = 199; continue _fun00003 }
 194:
            option = verify.name;
 199:
            michal['guildName'] = option;
            michal['handleGuildNameClick'] = golfie;
            oscard = oscard == report;
            tangon = undefined;
            if(oscard) { _fun00004_ip = 226; continue _fun00003 }
 220:
            tangon = report.tier_name;
 226:
            michal['tierName'] = tangon;
            michal['months'] = zuuluu;
            entity['formatParams'] = michal;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tangon = report.bind(entity)(tangon);
    golfie = tangon.getJoinButtonLabels;
    var _closure1_slot5 = golfie;
    golfie = tangon.getRenewButtonLabels;
    var _closure1_slot6 = golfie;
    tangon = tangon.STICKERS;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot8 = golfie;
    tangon = tangon.NOOP;
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: pickRoleSubscriptionPurchaseSticker
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.getCurrentUser;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            tangon = michal == zuuluu;
            report = undefined;
            oscard = undefined;
            if(tangon) { _fun00006_ip = 34; continue _fun00005 }
 29:
            oscard = zuuluu.id;
 34:
            michal = michal != oscard;
            zuuluu = 0;
            if(!michal) { _fun00006_ip = 74; continue _fun00005 }
 43:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 4;
            michal = golfie[michal];
            tangon = tangon.bind(report)(michal);
            michal = tangon.extractTimestamp;
            zuuluu = michal.bind(tangon)(oscard);
 74:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 4;
            michal = oscard[michal];
            report = tangon.bind(report)(michal);
            tangon = report.extractTimestamp;
            michal = argFoo;
            michal = tangon.bind(report)(michal);
            zuuluu = zuuluu + michal;
            michal = _closure1_slot7;
            entity = michal.length;
            entity = zuuluu % entity;
            entity = michal[entity];
            return entity;
        }
    };
    zuuluu['pickRoleSubscriptionPurchaseSticker'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getRoleSubscriptionPurchaseStickerCTA
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argBar;
            if(michal) { _fun00008_ip = 21; continue _fun00007 }
 9:
            zuuluu = _closure1_slot5;
            michal = undefined;
            michal = zuuluu.bind(michal)();
            _fun00008_ip = 31; continue _fun00007;
 21:
            tangon = _closure1_slot6;
            zuuluu = undefined;
            michal = tangon.bind(zuuluu)();
 31:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.extractTimestamp;
            entity = argFoo;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = michal.length;
            entity = zuuluu % entity;
            entity = michal[entity];
            return entity;
        }
    };
    zuuluu['getRoleSubscriptionPurchaseStickerCTA'] = tangon;
    tangon = function(argFoo) { // Original name: getRoleSubscriptionPurchaseSystemMessageFormattedContent
        entity = argFoo;
        option = entity.username;
        golfie = entity.usernameOnClickHandler;
        oscard = entity.roleSubscriptionOnClickHandler;
        report = entity.guildId;
        tangon = entity.roleSubscriptionData;
        zuuluu = _closure1_slot12;
        michal = {};
        michal['username'] = option;
        michal['usernameOnClickHandler'] = golfie;
        michal['roleSubscriptionOnClickHandler'] = oscard;
        michal['guildId'] = report;
        michal['roleSubscriptionData'] = tangon;
        report = undefined;
        michal = zuuluu.bind(report)(michal);
        tangon = michal.content;
        zuuluu = michal.formatParams;
        michal = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 5;
        entity = oscard[entity];
        entity = michal.bind(report)(entity);
        michal = entity.intl;
        entity = michal.format;
        entity = entity.bind(michal)(tangon, zuuluu);
        return entity;
    };
    zuuluu['getRoleSubscriptionPurchaseSystemMessageFormattedContent'] = tangon;
    tangon = function(argFoo) { // Original name: getRoleSubscriptionPurchaseSystemMessageAstFormattedContent
        entity = argFoo;
        option = entity.username;
        golfie = entity.usernameOnClickHandler;
        oscard = entity.roleSubscriptionOnClickHandler;
        report = entity.guildId;
        tangon = entity.roleSubscriptionData;
        zuuluu = _closure1_slot12;
        michal = {};
        michal['username'] = option;
        michal['usernameOnClickHandler'] = golfie;
        michal['roleSubscriptionOnClickHandler'] = oscard;
        michal['guildId'] = report;
        michal['roleSubscriptionData'] = tangon;
        report = undefined;
        michal = zuuluu.bind(report)(michal);
        tangon = michal.content;
        zuuluu = michal.formatParams;
        michal = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 5;
        entity = oscard[entity];
        entity = michal.bind(report)(entity);
        michal = entity.intl;
        entity = michal.formatToParts;
        entity = entity.bind(michal)(tangon, zuuluu);
        return entity;
    };
    zuuluu['getRoleSubscriptionPurchaseSystemMessageAstFormattedContent'] = tangon;
    tangon = function(argFoo) { // Original name: getRoleSubscriptionPurchaseSystemMessageContentMobile
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            option = entity.username;
            golfie = entity.usernameOnClickHandler;
            verify = undefined;
            if(!(golfie === verify)) { _fun00010_ip = 27; continue _fun00009 }
 20:
            golfie = _closure1_slot10;
 27:
            oscard = entity.roleSubscriptionOnClickHandler;
            if(!(oscard === verify)) { _fun00010_ip = 44; continue _fun00009 }
 37:
            oscard = _closure1_slot9;
 44:
            zuuluu = entity.guildId;
            offset = entity.roleSubscriptionData;
            michal = _closure1_slot11;
            michal = michal.bind(verify)(zuuluu, offset);
            foxtra = michal.guild;
            report = michal.totalMonthsSubscribed;
            tangon = michal.showWithDuration;
            michal = michal.isRenewal;
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 5;
            yankee = yankee[zuuluu];
            yankee = romeon.bind(verify)(yankee);
            yankee = yankee.t;
            if(tangon) { _fun00010_ip = 142; continue _fun00009 }
 119:
            if(michal) { _fun00010_ip = 132; continue _fun00009 }
 122:
            tangon = yankee.6Z1E+/;
            _fun00010_ip = 140; continue _fun00009;
 132:
            tangon = yankee.OxP1ND;
 140:
            _fun00010_ip = 166; continue _fun00009;
 142:
            if(michal) { _fun00010_ip = 155; continue _fun00009 }
 145:
            michal = yankee.+N9bxs;
            _fun00010_ip = 163; continue _fun00009;
 155:
            michal = yankee.OQ0OU1;
 163:
            tangon = michal;
 166:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[zuuluu];
            entity = michal.bind(verify)(entity);
            zuuluu = entity.intl;
            michal = zuuluu.formatToParts;
            entity = {};
            yankee = null;
            backup = yankee == foxtra;
            romeon = undefined;
            if(backup) { _fun00010_ip = 212; continue _fun00009 }
 207:
            romeon = foxtra.name;
 212:
            entity['guildName'] = romeon;
            yankee = yankee == offset;
            verify = undefined;
            if(yankee) { _fun00010_ip = 232; continue _fun00009 }
 226:
            verify = offset.tier_name;
 232:
            entity['tierName'] = verify;
            entity['username'] = option;
            entity['usernameOnClick'] = golfie;
            entity['roleSubscriptionOnClick'] = oscard;
            entity['months'] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    zuuluu['getRoleSubscriptionPurchaseSystemMessageContentMobile'] = tangon;
    tangon = function(argFoo) { // Original name: isEligibleForRoleSubscriptionPurchaseSystemMessageSettings
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.isCreatorMonetizationEnabledGuild;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isEligibleForRoleSubscriptionPurchaseSystemMessageSettings'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: trackRoleSubscriptionPurchaseMessageTierClick
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot8;
            zuuluu = michal.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED;
            michal = {};
            golfie = argFoo;
            michal['guild_id'] = golfie;
            golfie = _closure1_slot4;
            oscard = golfie.getCurrentUser;
            golfie = oscard.bind(golfie)();
            oscard = null;
            option = oscard == golfie;
            oscard = undefined;
            if(option) { _fun00012_ip = 79; continue _fun00011 }
 74:
            oscard = golfie.id;
 79:
            michal['user_id'] = oscard;
            oscard = argBar;
            michal['channel_id'] = oscard;
            oscard = argBaz;
            michal['message_id'] = oscard;
            oscard = argCor;
            michal['role_subscription_listing_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackRoleSubscriptionPurchaseMessageTierClick'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getRoleSubscriptionPurchaseSystemMessageEventProperties
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            entity = {};
            tangon = zuuluu.guild_id;
            entity['guild_id'] = tangon;
            report = _closure1_slot4;
            tangon = report.getCurrentUser;
            report = tangon.bind(report)();
            tangon = null;
            oscard = tangon == report;
            tangon = undefined;
            if(oscard) { _fun00014_ip = 49; continue _fun00013 }
 44:
            tangon = report.id;
 49:
            entity['sender'] = tangon;
            tangon = michal.author;
            tangon = tangon.id;
            entity['target_user'] = tangon;
            zuuluu = zuuluu.id;
            entity['channel_id'] = zuuluu;
            michal = michal.id;
            entity['message_id'] = michal;
            return entity;
        }
    };
    zuuluu['getRoleSubscriptionPurchaseSystemMessageEventProperties'] = michal;
    return entity;
})();