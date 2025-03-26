// app/modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: GuildProductPurchaseSystemMessageInner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            offset = michal.row;
            yankee = michal.productName;
            var _closure2_slot0 = yankee;
            foxtra = michal.guildId;
            oscard = offset.message;
            var _closure2_slot1 = oscard;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 5;
            golfie = zuuluu[tangon];
            tangon = undefined;
            option = michal.bind(tangon)(golfie);
            golfie = option.useNullableMessageAuthor;
            option = golfie.bind(option)(oscard);
            golfie = option.nick;
            var _closure2_slot2 = golfie;
            backup = option.guildMemberAvatar;
            romeon = oscard.author;
            var _closure2_slot3 = romeon;
            verify = _closure1_slot3;
            option = verify.useMemo;
            kiloes = oscard.channel_id;
            oscard = new Array(4);
            oscard[0] = kiloes;
            oscard[1] = golfie;
            oscard[2] = yankee;
            yankee = romeon.id;
            oscard[3] = yankee;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getGuildProductPurchaseSystemMessageContentMobile;
                entity = {};
                report = _closure2_slot2;
                entity['username'] = report;
                report = {};
                oscard = 'bindUserMenu';
                report['action'] = oscard;
                oscard = _closure2_slot3;
                oscard = oscard.id;
                report['userId'] = oscard;
                oscard = _closure2_slot1;
                oscard = oscard.channel_id;
                report['messageChannelId'] = oscard;
                entity['usernameOnClickHandler'] = report;
                tangon = _closure2_slot0;
                entity['productName'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = option.bind(verify)(entity, oscard);
            entity = 6;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.ensureAvatarSource;
            entity = null;
            if(!(entity != backup)) { _fun00002_ip = 177; continue _fun00001 }
 173:
            if(!(entity == foxtra)) { _fun00002_ip = 190; continue _fun00001 }
 177:
            entity = romeon.getAvatarSource;
            entity = entity.bind(romeon)(tangon);
            _fun00002_ip = 242; continue _fun00001;
 190:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 7;
            oscard = yankee[oscard];
            yankee = verify.bind(tangon)(oscard);
            verify = yankee.getGuildMemberAvatarSource;
            oscard = {};
            kiloes = romeon.id;
            oscard['userId'] = kiloes;
            oscard['guildMemberAvatar'] = backup;
            oscard['guildId'] = foxtra;
            entity = verify.bind(yankee)(oscard, romeon);
 242:
            oscard = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 11;
            entity = verify[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['row'] = offset;
            entity['content'] = option;
            option = 0;
            entity['totalMonthsSubscribed'] = option;
            entity['username'] = golfie;
            oscard = oscard.uri;
            entity['avatarURL'] = oscard;
            option = _closure1_slot0;
            report = 9;
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
    tangon = tangon.MessageTypes;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: createGuildProductPurchaseSystemMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = {};
            echoed = report;
            result = entity;
            michal = copyDataProperties(echoed, result);
            tangon = _closure1_slot4;
            echoed = entity.message;
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            update = michal;
            entity = new update[tangon](echoed, result);
            michal = entity instanceof Object ? entity : michal;
            entity = 'message';
            report[entity] = michal;
            michal = report.message;
            entity = _closure1_slot6;
            entity = entity.ROLE_SUBSCRIPTION_PURCHASE;
            michal['type'] = entity;
            entity = report.message;
            michal = entity.purchaseNotification;
            entity = null;
            oscard = entity == michal;
            tangon = undefined;
            foxtra = undefined;
            if(oscard) { _fun00004_ip = 122; continue _fun00003 }
 101:
            michal = michal.guild_product_purchase;
            oscard = entity == michal;
            foxtra = undefined;
            if(oscard) { _fun00004_ip = 122; continue _fun00003 }
 116:
            foxtra = michal.product_name;
 122:
            if(!(entity != foxtra)) { _fun00004_ip = 512; continue _fun00003 }
 129:
            michal = report.message;
            golfie = michal.author;
            verify = _closure1_slot5;
            option = verify.getChannel;
            oscard = michal.getChannelId;
            oscard = oscard.bind(michal)();
            option = option.bind(verify)(oscard);
            oscard = entity == option;
            kiloes = undefined;
            if(oscard) { _fun00004_ip = 183; continue _fun00003 }
 173:
            oscard = option.getGuildId;
            kiloes = oscard.bind(option)();
 183:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 5;
            oscard = offset[oscard];
            option = verify.bind(tangon)(oscard);
            oscard = option.getMessageAuthor;
            oscard = oscard.bind(option)(michal);
            option = oscard.nick;
            sizing = oscard.guildMemberAvatar;
            oscard = 6;
            oscard = offset[oscard];
            offset = verify.bind(tangon)(oscard);
            verify = offset.ensureAvatarSource;
            if(!(entity != sizing)) { _fun00004_ip = 252; continue _fun00003 }
 248:
            if(!(entity == kiloes)) { _fun00004_ip = 265; continue _fun00003 }
 252:
            oscard = golfie.getAvatarSource;
            oscard = oscard.bind(golfie)(tangon);
            _fun00004_ip = 317; continue _fun00003;
 265:
            romeon = _closure1_slot0;
            backup = _closure1_slot2;
            yankee = 7;
            yankee = backup[yankee];
            backup = romeon.bind(tangon)(yankee);
            romeon = backup.getGuildMemberAvatarSource;
            yankee = {};
            output = golfie.id;
            yankee['userId'] = output;
            yankee['guildMemberAvatar'] = sizing;
            yankee['guildId'] = kiloes;
            oscard = romeon.bind(backup)(yankee, golfie);
 317:
            oscard = verify.bind(offset)(oscard);
            backup = {};
            verify = 'bindUserMenu';
            backup['action'] = verify;
            golfie = golfie.id;
            backup['userId'] = golfie;
            michal = michal.channel_id;
            backup['messageChannelId'] = michal;
            michal = {};
            offset = _closure1_slot0;
            golfie = _closure1_slot2;
            verify = 8;
            verify = golfie[verify];
            romeon = offset.bind(tangon)(verify);
            yankee = romeon.getGuildProductPurchaseSystemMessageContentMobile;
            verify = {};
            verify['username'] = option;
            verify['usernameOnClickHandler'] = backup;
            verify['productName'] = foxtra;
            verify = yankee.bind(romeon)(verify);
            michal['content'] = verify;
            verify = 0;
            michal['totalMonthsSubscribed'] = verify;
            michal['username'] = option;
            oscard = oscard.uri;
            michal['avatarURL'] = oscard;
            oscard = 9;
            option = golfie[oscard];
            option = offset.bind(tangon)(option);
            verify = option.intl;
            option = verify.string;
            oscard = golfie[oscard];
            oscard = offset.bind(tangon)(oscard);
            oscard = oscard.t;
            oscard = oscard.s2N5HR;
            oscard = option.bind(verify)(oscard);
            michal['welcomeLabel'] = oscard;
            oscard = _closure1_slot1;
            zuuluu = 10;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            result = zuuluu.bind(tangon)(report);
            echoed = michal;
            zuuluu = copyDataProperties(echoed, result);
            return michal;
 512:
            return entity;
        }
    };
    zuuluu['createGuildProductPurchaseSystemMessage'] = tangon;
    michal = function(argFoo) { // Original name: GuildProductPurchaseSystemMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            yankee = michal.row;
            option = {};
            romeon = option;
            michal = copyDataProperties(romeon, yankee);
            tangon = option.message;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.ROLE_SUBSCRIPTION_PURCHASE;
            tangon['type'] = zuuluu;
            tangon = option.message;
            zuuluu = tangon.getChannelId;
            verify = zuuluu.bind(tangon)();
            var _closure2_slot0 = verify;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 12;
            zuuluu = report[zuuluu];
            report = undefined;
            golfie = tangon.bind(report)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = verify;
            entity = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = oscard.bind(golfie)(tangon, entity, zuuluu);
            entity = null;
            tangon = entity == oscard;
            zuuluu = undefined;
            if(tangon) { _fun00006_ip = 145; continue _fun00005 }
 135:
            tangon = oscard.getGuildId;
            zuuluu = tangon.bind(oscard)();
 145:
            tangon = entity != zuuluu;
            oscard = undefined;
            if(!tangon) { _fun00006_ip = 157; continue _fun00005 }
 154:
            oscard = zuuluu;
 157:
            zuuluu = option.message;
            zuuluu = zuuluu.purchaseNotification;
            tangon = entity == zuuluu;
            golfie = undefined;
            if(tangon) { _fun00006_ip = 198; continue _fun00005 }
 177:
            zuuluu = zuuluu.guild_product_purchase;
            tangon = entity == zuuluu;
            golfie = undefined;
            if(tangon) { _fun00006_ip = 198; continue _fun00005 }
 192:
            golfie = zuuluu.product_name;
 198:
            zuuluu = entity == golfie;
            entity = null;
            if(zuuluu) { _fun00006_ip = 237; continue _fun00005 }
 207:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot8;
            michal = {};
            michal['row'] = option;
            michal['productName'] = golfie;
            michal['guildId'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 237:
            return entity;
        }
    };
    zuuluu['GuildProductPurchaseSystemMessage'] = michal;
    return entity;
})();