// app/modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: RoleSubscriptionPurchaseSystemMessageInner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            backup = michal.row;
            romeon = michal.roleSubscriptionData;
            var _closure2_slot0 = romeon;
            kiloes = michal.guildId;
            var _closure2_slot1 = kiloes;
            report = backup.message;
            var _closure2_slot2 = report;
            foxtra = report.author;
            var _closure2_slot3 = foxtra;
            michal = report.getChannelId;
            sizing = michal.bind(report)();
            var _closure2_slot4 = sizing;
            zuuluu = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 5;
            michal = verify[michal];
            tangon = undefined;
            oscard = zuuluu.bind(tangon)(michal);
            michal = oscard.useNullableMessageAuthor;
            michal = michal.bind(oscard)(report);
            yankee = michal.nick;
            var _closure2_slot5 = yankee;
            echoed = michal.guildMemberAvatar;
            oscard = _closure1_slot1;
            michal = 6;
            michal = verify[michal];
            michal = oscard.bind(tangon)(michal);
            offset = michal.bind(tangon)(report);
            michal = 7;
            michal = verify[michal];
            option = oscard.bind(tangon)(michal);
            michal = {};
            oscard = 8;
            output = verify[oscard];
            update = zuuluu.bind(tangon)(output);
            result = update.pickRoleSubscriptionPurchaseSticker;
            output = report.id;
            output = result.bind(update)(output);
            michal['sticker'] = output;
            michal['isStickerReplyEnabled'] = offset;
            option = option.bind(tangon)(michal);
            michal = 9;
            michal = verify[michal];
            verify = zuuluu.bind(tangon)(michal);
            zuuluu = verify.ensureAvatarSource;
            michal = null;
            if(!(michal != echoed)) { _fun00002_ip = 221; continue _fun00001 }
 217:
            if(!(michal == kiloes)) { _fun00002_ip = 234; continue _fun00001 }
 221:
            michal = foxtra.getAvatarSource;
            michal = michal.bind(foxtra)(tangon);
            _fun00002_ip = 286; continue _fun00001;
 234:
            output = _closure1_slot0;
            result = _closure1_slot2;
            offset = 10;
            offset = result[offset];
            result = output.bind(tangon)(offset);
            output = result.getGuildMemberAvatarSource;
            offset = {};
            update = foxtra.id;
            offset['userId'] = update;
            offset['guildMemberAvatar'] = echoed;
            offset['guildId'] = kiloes;
            michal = output.bind(result)(offset, foxtra);
 286:
            offset = zuuluu.bind(verify)(michal);
            verify = _closure1_slot3;
            zuuluu = verify.useMemo;
            michal = new Array(6);
            michal[0] = sizing;
            michal[1] = kiloes;
            kiloes = report.id;
            michal[2] = kiloes;
            michal[3] = yankee;
            michal[4] = romeon;
            foxtra = foxtra.id;
            michal[5] = foxtra;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getRoleSubscriptionPurchaseSystemMessageContentMobile;
                entity = {};
                report = _closure2_slot5;
                entity['username'] = report;
                golfie = _closure2_slot1;
                entity['guildId'] = golfie;
                report = {};
                oscard = 'bindUserMenu';
                report['action'] = oscard;
                oscard = _closure2_slot3;
                oscard = oscard.id;
                report['userId'] = oscard;
                oscard = _closure2_slot4;
                report['messageChannelId'] = oscard;
                entity['usernameOnClickHandler'] = report;
                report = {};
                option = 'bindOpenRoleSubscriptionOverview';
                report['action'] = option;
                report['guildId'] = golfie;
                golfie = _closure2_slot2;
                golfie = golfie.id;
                report['messageId'] = golfie;
                report['channelId'] = oscard;
                tangon = _closure2_slot0;
                oscard = tangon.role_subscription_listing_id;
                report['roleSubscriptionListingId'] = oscard;
                entity['roleSubscriptionOnClickHandler'] = report;
                entity['roleSubscriptionData'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = zuuluu.bind(verify)(entity, michal);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 13;
            entity = verify[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['row'] = backup;
            entity['content'] = foxtra;
            romeon = romeon.total_months_subscribed;
            entity['totalMonthsSubscribed'] = romeon;
            entity['username'] = yankee;
            offset = offset.uri;
            entity['avatarURL'] = offset;
            entity['sticker'] = option;
            option = _closure1_slot0;
            oscard = verify[oscard];
            offset = option.bind(tangon)(oscard);
            golfie = offset.getRoleSubscriptionPurchaseStickerCTA;
            oscard = report.id;
            report = false;
            report = golfie.bind(offset)(oscard, report);
            entity['stickerLabel'] = report;
            report = 11;
            oscard = verify[report];
            oscard = option.bind(tangon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = verify[report];
            report = option.bind(tangon)(report);
            report = report.t;
            report = report.piPHvb;
            report = oscard.bind(golfie)(report);
            entity['welcomeLabel'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    tangon = tangon.SystemChannelFlags;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: RoleSubscriptionPurchaseSystemMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            option = michal.row;
            zuuluu = option.message;
            michal = zuuluu.getChannelId;
            offset = michal.bind(zuuluu)();
            var _closure2_slot0 = offset;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 14;
            tangon = report[tangon];
            report = undefined;
            verify = oscard.bind(report)(tangon);
            golfie = verify.useStateFromStores;
            tangon = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = new Array(1);
            tangon[0] = offset;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = golfie.bind(verify)(oscard, entity, tangon);
            entity = null;
            oscard = entity == golfie;
            tangon = undefined;
            if(oscard) { _fun00004_ip = 115; continue _fun00003 }
 105:
            oscard = golfie.getGuildId;
            tangon = oscard.bind(golfie)();
 115:
            golfie = entity != tangon;
            oscard = undefined;
            if(!golfie) { _fun00004_ip = 127; continue _fun00003 }
 124:
            oscard = tangon;
 127:
            golfie = zuuluu.roleSubscriptionData;
            zuuluu = entity == golfie;
            entity = null;
            if(zuuluu) { _fun00004_ip = 172; continue _fun00003 }
 142:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot8;
            michal = {};
            michal['row'] = option;
            michal['roleSubscriptionData'] = golfie;
            michal['guildId'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 172:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: createRoleSubscriptionPurchaseSystemMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            oscard = report.message;
            yankee = oscard.roleSubscriptionData;
            entity = null;
            if(!(entity != yankee)) { _fun00006_ip = 731; continue _fun00005 }
 23:
            michal = oscard.author;
            option = _closure1_slot4;
            golfie = option.getChannel;
            tangon = oscard.getChannelId;
            tangon = tangon.bind(oscard)();
            romeon = golfie.bind(option)(tangon);
            option = entity == romeon;
            tangon = undefined;
            golfie = undefined;
            if(option) { _fun00006_ip = 77; continue _fun00005 }
 67:
            option = romeon.getGuildId;
            golfie = option.bind(romeon)();
 77:
            verify = _closure1_slot5;
            option = verify.getGuild;
            option = option.bind(verify)(golfie);
            offset = _closure1_slot0;
            foxtra = _closure1_slot2;
            verify = 5;
            verify = foxtra[verify];
            offset = offset.bind(tangon)(verify);
            verify = offset.getMessageAuthor;
            verify = verify.bind(offset)(oscard);
            offset = verify.nick;
            output = verify.guildMemberAvatar;
            verify = entity != golfie;
            result = golfie;
            golfie = undefined;
            if(!verify) { _fun00006_ip = 300; continue _fun00005 }
 149:
            verify = entity != romeon;
            golfie = undefined;
            if(!verify) { _fun00006_ip = 300; continue _fun00005 }
 161:
            foxtra = entity != option;
            if(!foxtra) { _fun00006_ip = 191; continue _fun00005 }
 168:
            verify = option.systemChannelFlags;
            option = _closure1_slot6;
            option = option.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES;
            option = verify & option;
            foxtra = !option;
 191:
            verify = _closure1_slot0;
            backup = _closure1_slot2;
            option = 6;
            option = backup[option];
            verify = verify.bind(tangon)(option);
            option = verify.computeIsStickerReplyEnabled;
            sequen = verify;
            vacuum = result;
            ctrled = romeon;
            source = oscard;
            update = foxtra;
            option = sequen[option](vacuum, ctrled, source, update, echoed);
            golfie = undefined;
            if(!option) { _fun00006_ip = 300; continue _fun00005 }
 241:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            option = 7;
            option = kiloes[option];
            foxtra = backup.bind(tangon)(option);
            verify = foxtra.transformSticker;
            option = 8;
            option = kiloes[option];
            kiloes = backup.bind(tangon)(option);
            backup = kiloes.pickRoleSubscriptionPurchaseSticker;
            option = oscard.id;
            option = backup.bind(kiloes)(option);
            golfie = verify.bind(foxtra)(option);
 300:
            verify = _closure1_slot0;
            foxtra = _closure1_slot2;
            option = 9;
            option = foxtra[option];
            foxtra = verify.bind(tangon)(option);
            verify = foxtra.ensureAvatarSource;
            if(!(entity != output)) { _fun00006_ip = 334; continue _fun00005 }
 330:
            if(!(entity == result)) { _fun00006_ip = 347; continue _fun00005 }
 334:
            option = michal.getAvatarSource;
            option = option.bind(michal)(tangon);
            _fun00006_ip = 399; continue _fun00005;
 347:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            backup = 10;
            backup = sizing[backup];
            sizing = kiloes.bind(tangon)(backup);
            kiloes = sizing.getGuildMemberAvatarSource;
            backup = {};
            echoed = michal.id;
            backup['userId'] = echoed;
            backup['guildMemberAvatar'] = output;
            backup['guildId'] = result;
            option = kiloes.bind(sizing)(backup, michal);
 399:
            verify = verify.bind(foxtra)(option);
            kiloes = {};
            option = 'bindOpenRoleSubscriptionOverview';
            kiloes['action'] = option;
            kiloes['guildId'] = result;
            option = oscard.id;
            kiloes['messageId'] = option;
            foxtra = entity == romeon;
            option = undefined;
            if(foxtra) { _fun00006_ip = 443; continue _fun00005 }
 438:
            option = romeon.id;
 443:
            kiloes['channelId'] = option;
            romeon = oscard.roleSubscriptionData;
            foxtra = entity == romeon;
            option = undefined;
            if(foxtra) { _fun00006_ip = 468; continue _fun00005 }
 462:
            option = romeon.role_subscription_listing_id;
 468:
            kiloes['roleSubscriptionListingId'] = option;
            sizing = {};
            option = 'bindUserMenu';
            sizing['action'] = option;
            michal = michal.id;
            sizing['userId'] = michal;
            michal = oscard.channel_id;
            sizing['messageChannelId'] = michal;
            michal = {};
            foxtra = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 8;
            romeon = romeon[option];
            backup = foxtra.bind(tangon)(romeon);
            foxtra = backup.getRoleSubscriptionPurchaseSystemMessageContentMobile;
            romeon = {};
            romeon['username'] = offset;
            echoed = entity != result;
            output = undefined;
            if(!echoed) { _fun00006_ip = 550; continue _fun00005 }
 547:
            output = result;
 550:
            romeon['guildId'] = output;
            romeon['usernameOnClickHandler'] = sizing;
            romeon['roleSubscriptionOnClickHandler'] = kiloes;
            romeon['roleSubscriptionData'] = yankee;
            romeon = foxtra.bind(backup)(romeon);
            michal['content'] = romeon;
            yankee = yankee.total_months_subscribed;
            michal['totalMonthsSubscribed'] = yankee;
            michal['username'] = offset;
            verify = verify.uri;
            michal['avatarURL'] = verify;
            michal['sticker'] = golfie;
            offset = _closure1_slot0;
            golfie = _closure1_slot2;
            option = golfie[option];
            yankee = offset.bind(tangon)(option);
            verify = yankee.getRoleSubscriptionPurchaseStickerCTA;
            option = oscard.id;
            oscard = false;
            oscard = verify.bind(yankee)(option, oscard);
            michal['stickerLabel'] = oscard;
            oscard = 11;
            option = golfie[oscard];
            option = offset.bind(tangon)(option);
            verify = option.intl;
            option = verify.string;
            oscard = golfie[oscard];
            oscard = offset.bind(tangon)(oscard);
            oscard = oscard.t;
            oscard = oscard.piPHvb;
            oscard = option.bind(verify)(oscard);
            michal['welcomeLabel'] = oscard;
            oscard = _closure1_slot1;
            zuuluu = 12;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            ctrled = zuuluu.bind(tangon)(report);
            vacuum = michal;
            zuuluu = copyDataProperties(vacuum, ctrled);
            return michal;
 731:
            return entity;
        }
    };
    zuuluu['createRoleSubscriptionPurchaseSystemMessage'] = michal;
    return entity;
})();