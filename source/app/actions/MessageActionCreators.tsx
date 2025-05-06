// app/actions/MessageActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscard;
    golfie = function(argFoo) { // Original name: trackInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            option = michal.inviteKey;
            verify = michal.channelId;
            golfie = michal.messageId;
            offset = michal.location;
            report = michal.suggested;
            entity = undefined;
            if(!(report === entity)) { _fun00002_ip = 38; continue _fun00001 }
 36:
            report = null;
 38:
            zuuluu = michal.overrideProperties;
            if(!(zuuluu === entity)) { _fun00002_ip = 50; continue _fun00001 }
 48:
            zuuluu = {};
 50:
            oscard = _closure1_slot18;
            tangon = oscard.getId;
            kiloes = tangon.bind(oscard)();
            oscard = _closure1_slot21;
            tangon = oscard.getInvite;
            foxtra = tangon.bind(oscard)(option);
            oscard = _closure1_slot0;
            yankee = _closure1_slot2;
            tangon = 34;
            tangon = yankee[tangon];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.parseExtraDataFromInviteKey;
            tangon = tangon.bind(oscard)(option);
            yankee = null;
            option = yankee != foxtra;
            if(!option) { _fun00002_ip = 153; continue _fun00001 }
 122:
            romeon = _closure1_slot0;
            backup = _closure1_slot2;
            oscard = 35;
            oscard = backup[oscard];
            romeon = romeon.bind(entity)(oscard);
            oscard = romeon.isEmbeddedApplicationInvite;
            option = oscard.bind(romeon)(foxtra);
 153:
            oscard = yankee == foxtra;
            backup = undefined;
            if(oscard) { _fun00002_ip = 182; continue _fun00001 }
 162:
            oscard = foxtra.target_application;
            romeon = yankee == oscard;
            backup = undefined;
            if(romeon) { _fun00002_ip = 182; continue _fun00001 }
 177:
            backup = oscard.id;
 182:
            oscard = yankee != backup;
            if(!oscard) { _fun00002_ip = 192; continue _fun00001 }
 189:
            oscard = option;
 192:
            if(!oscard) { _fun00002_ip = 249; continue _fun00001 }
 195:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            oscard = 31;
            option = output[oscard];
            romeon = sizing.bind(entity)(option);
            option = romeon.trackAppEmbedLinkSent;
            oscard = output[oscard];
            oscard = sizing.bind(entity)(oscard);
            oscard = oscard.LinkType;
            oscard = oscard.ACTIVITY_INVITE;
            oscard = option.bind(romeon)(backup, oscard, kiloes);
 249:
            option = _closure1_slot19;
            oscard = option.getChannel;
            oscard = oscard.bind(option)(verify);
            if(!(yankee == oscard)) { _fun00002_ip = 518; continue _fun00001 }
 270:
            option = {};
            verify = yankee != foxtra;
            if(!verify) { _fun00002_ip = 298; continue _fun00001 }
 279:
            backup = foxtra.state;
            romeon = _closure1_slot33;
            romeon = romeon.RESOLVED;
            verify = backup === romeon;
 298:
            if(!verify) { _fun00002_ip = 311; continue _fun00001 }
 301:
            romeon = foxtra.inviter;
            verify = yankee != romeon;
 311:
            if(!verify) { _fun00002_ip = 1094; continue _fun00001 }
 317:
            verify = foxtra.inviter;
            verify = verify.id;
            option['invite_inviter_id'] = verify;
            verify = foxtra.target_application;
            if(!(yankee != verify)) { _fun00002_ip = 361; continue _fun00001 }
 344:
            verify = foxtra.target_application;
            verify = verify.id;
            option['application_id'] = verify;
 361:
            backup = {};
            update = backup;
            echoed = option;
            option = copyDataProperties(update, echoed);
            option = 'location';
            backup[option] = offset;
            option = _closure1_slot31;
            verify = option.FRIEND_INVITE;
            option = 'invite_type';
            backup[option] = verify;
            verify = tangon.baseCode;
            option = 'invite_code';
            backup[option] = verify;
            option = 'message_id';
            backup[option] = golfie;
            option = _closure1_slot32;
            verify = option.DIRECT_MESSAGE;
            option = 'send_type';
            backup[option] = verify;
            verify = tangon.guildScheduledEventId;
            option = 'invite_guild_scheduled_event_id';
            backup[option] = verify;
            update = backup;
            echoed = zuuluu;
            option = copyDataProperties(update, echoed);
            verify = _closure1_slot1;
            romeon = _closure1_slot2;
            option = 29;
            option = romeon[option];
            romeon = verify.bind(entity)(option);
            verify = romeon.trackWithMetadata;
            option = _closure1_slot28;
            option = option.INVITE_SENT;
            option = verify.bind(romeon)(option, backup);
            _fun00002_ip = 1094; continue _fun00001;
 518:
            option = oscard.isMultiUserDM;
            option = option.bind(oscard)();
            if(option) { _fun00002_ip = 558; continue _fun00001 }
 531:
            option = oscard.isPrivate;
            option = option.bind(oscard)();
            backup = null;
            if(option) { _fun00002_ip = 568; continue _fun00001 }
 546:
            option = _closure1_slot31;
            backup = option.SERVER_INVITE;
            _fun00002_ip = 568; continue _fun00001;
 558:
            option = _closure1_slot31;
            backup = option.GDM_INVITE;
 568:
            option = {};
            verify = backup;
            if(!(yankee != foxtra)) { _fun00002_ip = 845; continue _fun00001 }
 580:
            kiloes = foxtra.state;
            romeon = _closure1_slot33;
            romeon = romeon.RESOLVED;
            verify = backup;
            if(!(kiloes === romeon)) { _fun00002_ip = 845; continue _fun00001 }
 605:
            romeon = foxtra.channel;
            verify = backup;
            if(!(yankee != romeon)) { _fun00002_ip = 845; continue _fun00001 }
 620:
            romeon = foxtra.channel;
            kiloes = romeon.id;
            option['invite_channel_id'] = kiloes;
            sizing = foxtra.guild;
            output = yankee == sizing;
            kiloes = undefined;
            if(output) { _fun00002_ip = 655; continue _fun00001 }
 650:
            kiloes = sizing.id;
 655:
            option['invite_guild_id'] = kiloes;
            kiloes = romeon.type;
            option['invite_channel_type'] = kiloes;
            kiloes = foxtra.inviter;
            if(!(yankee != kiloes)) { _fun00002_ip = 699; continue _fun00001 }
 682:
            kiloes = foxtra.inviter;
            kiloes = kiloes.id;
            option['invite_inviter_id'] = kiloes;
 699:
            kiloes = foxtra.target_application;
            if(!(yankee != kiloes)) { _fun00002_ip = 726; continue _fun00001 }
 709:
            foxtra = foxtra.target_application;
            foxtra = foxtra.id;
            option['application_id'] = foxtra;
 726:
            kiloes = _closure1_slot17;
            foxtra = kiloes.getLastActiveStream;
            sizing = foxtra.bind(kiloes)();
            verify = backup;
            if(!(yankee != sizing)) { _fun00002_ip = 845; continue _fun00001 }
 747:
            foxtra = sizing.channelId;
            romeon = romeon.id;
            verify = backup;
            if(!(foxtra === romeon)) { _fun00002_ip = 845; continue _fun00001 }
 764:
            romeon = _closure1_slot31;
            romeon = romeon.STREAM;
            foxtra = sizing.ownerId;
            option['destination_user_id'] = foxtra;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            foxtra = 36;
            foxtra = kiloes[foxtra];
            kiloes = backup.bind(entity)(foxtra);
            backup = kiloes.getStreamerApplication;
            foxtra = _closure1_slot23;
            backup = backup.bind(kiloes)(sizing, foxtra);
            kiloes = yankee != backup;
            foxtra = null;
            if(!kiloes) { _fun00002_ip = 836; continue _fun00001 }
 831:
            foxtra = backup.id;
 836:
            option['application_id'] = foxtra;
            verify = romeon;
 845:
            if(!(yankee != report)) { _fun00002_ip = 919; continue _fun00001 }
 849:
            yankee = report.isAffinitySuggestion;
            option['is_suggested'] = yankee;
            yankee = report.rowNum;
            option['row_num'] = yankee;
            yankee = report.numTotal;
            option['num_total'] = yankee;
            yankee = report.numAffinityConnections;
            option['num_affinity_connections'] = yankee;
            report = report.isFiltered;
            option['is_filtered'] = report;
 919:
            report = {};
            update = report;
            echoed = option;
            option = copyDataProperties(update, echoed);
            option = 'location';
            report[option] = offset;
            option = 'invite_type';
            report[option] = verify;
            verify = tangon.baseCode;
            option = 'invite_code';
            report[option] = verify;
            option = oscard.getGuildId;
            verify = option.bind(oscard)();
            option = 'guild_id';
            report[option] = verify;
            option = oscard.id;
            oscard = 'channel_id';
            report[oscard] = option;
            oscard = 'message_id';
            report[oscard] = golfie;
            oscard = _closure1_slot32;
            golfie = oscard.DIRECT_MESSAGE;
            oscard = 'send_type';
            report[oscard] = golfie;
            oscard = tangon.guildScheduledEventId;
            tangon = 'invite_guild_scheduled_event_id';
            report[tangon] = oscard;
            update = report;
            echoed = zuuluu;
            zuuluu = copyDataProperties(update, echoed);
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 29;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.trackWithMetadata;
            michal = _closure1_slot28;
            michal = michal.INVITE_SENT;
            michal = zuuluu.bind(tangon)(michal, report);
 1094:
            return entity;
        }
    };
    var _closure1_slot52 = golfie;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.hideMessageConfettiBar;
    var _closure1_slot12 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot13 = michal;
    michal = 11;
    option = oscard[michal];
    option = verify.bind(entity)(option);
    var _closure1_slot14 = option;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ReferencedMessageState;
    var _closure1_slot15 = michal;
    michal = 12;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot16 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot17 = michal;
    michal = 14;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot18 = michal;
    michal = 15;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot19 = michal;
    michal = 16;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot20 = michal;
    michal = 17;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot21 = michal;
    michal = 18;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot22 = michal;
    michal = 19;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    michal = 20;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot23 = michal;
    michal = 21;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot24 = michal;
    michal = 22;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.SlowmodeType;
    var _closure1_slot25 = michal;
    michal = 23;
    michal = oscard[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot26 = michal;
    michal = 24;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.AbortCodes;
    var _closure1_slot27 = option;
    offset = michal.AnalyticEvents;
    var _closure1_slot28 = offset;
    offset = michal.Endpoints;
    var _closure1_slot29 = offset;
    offset = michal.Permissions;
    offset = michal.ChannelTypes;
    var _closure1_slot30 = offset;
    offset = michal.LoggingInviteTypes;
    var _closure1_slot31 = offset;
    offset = michal.SendTypes;
    var _closure1_slot32 = offset;
    offset = michal.InviteStates;
    var _closure1_slot33 = offset;
    offset = michal.MessageFlags;
    var _closure1_slot34 = offset;
    offset = michal.MAX_MESSAGES_FOR_JUMP;
    var _closure1_slot35 = offset;
    offset = michal.MessageTypes;
    var _closure1_slot36 = offset;
    offset = michal.AllowedMentionTypes;
    var _closure1_slot37 = offset;
    offset = michal.HelpdeskArticles;
    var _closure1_slot38 = offset;
    offset = michal.MarketingURLs;
    var _closure1_slot39 = offset;
    offset = michal.MessageReferenceTypes;
    var _closure1_slot40 = offset;
    offset = michal.LOCAL_BOT_ID;
    var _closure1_slot41 = offset;
    offset = michal.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot42 = offset;
    offset = michal.MessageStates;
    var _closure1_slot43 = offset;
    michal = michal.ActivityActionTypes;
    var _closure1_slot44 = michal;
    michal = 25;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.GuildTemplateStates;
    var _closure1_slot45 = michal;
    michal = 26;
    offset = oscard[michal];
    romeon = verify.bind(entity)(offset);
    offset = romeon.prototype;
    yankee = Object.create(offset, {constructor: {value: romeon}});
    kiloes = 'MessageActionCreators';
    sizing = yankee;
    offset = new sizing[romeon](kiloes, backup);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot46 = offset;
    michal = oscard[michal];
    offset = verify.bind(entity)(michal);
    michal = offset.prototype;
    verify = Object.create(michal, {constructor: {value: offset}});
    kiloes = 'MessageQueue';
    sizing = verify;
    michal = new sizing[offset](kiloes, backup);
    michal = michal instanceof Object ? michal : verify;
    var _closure1_slot47 = michal;
    michal = false;
    var _closure1_slot48 = michal;
    michal = function() {
        tangon = _closure1_slot6;
        zuuluu = function() { // Original name: RemoteFetch
            zuuluu = this;
            tangon = _closure1_slot5;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = false;
            zuuluu['completed'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        report = 'markComplete';
        entity['key'] = report;
        michal = function() { // Original name: value
            michal = true;
            entity = this;
            entity['completed'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    var _closure1_slot49 = michal;
    michal = {};
    offset = option.EMAIL_VERIFICATION_REQUIRED;
    verify = {};
    yankee = 'BOT_REQUIRES_EMAIL_VERIFICATION';
    verify['messageName'] = yankee;
    yankee = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 39;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.k1Cjqq;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    verify['messageGetter'] = yankee;
    michal[offset] = verify;
    offset = option.INVALID_MESSAGE_SEND_USER;
    verify = {};
    yankee = 'BOT_DM_SEND_FAILED_WITH_HELP_LINK';
    verify['messageName'] = yankee;
    yankee = function() { // Original name: messageGetter
        michal = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 39;
        zuuluu = verify[entity];
        option = undefined;
        zuuluu = michal.bind(option)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.formatToPlainString;
        entity = verify[entity];
        entity = michal.bind(option)(entity);
        entity = entity.t;
        michal = entity.CTMXwM;
        entity = {};
        golfie = _closure1_slot1;
        oscard = 40;
        oscard = verify[oscard];
        golfie = golfie.bind(option)(oscard);
        oscard = golfie.getArticleURL;
        report = _closure1_slot38;
        report = report.DM_COULD_NOT_BE_DELIVERED;
        report = oscard.bind(golfie)(report);
        entity['helpUrl'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    verify['messageGetter'] = yankee;
    michal[offset] = verify;
    offset = option.RATE_LIMIT_DM_OPEN;
    verify = {};
    yankee = 'BOT_DM_RATE_LIMITED';
    verify['messageName'] = yankee;
    yankee = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 39;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.E8nbNT;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    verify['messageGetter'] = yankee;
    michal[offset] = verify;
    offset = option.SEND_MESSAGE_TEMPORARILY_DISABLED;
    verify = {};
    yankee = 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED';
    verify['messageName'] = yankee;
    romeon = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 39;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.aRUbam;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    verify['messageGetter'] = romeon;
    michal[offset] = verify;
    offset = option.SLOWMODE_RATE_LIMITED;
    verify = {};
    verify['messageName'] = yankee;
    yankee = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 39;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.aRUbam;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    verify['messageGetter'] = yankee;
    michal[offset] = verify;
    offset = option.INVALID_MESSAGE_SEND_GAME_FRIEND_DM;
    verify = {};
    yankee = 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND';
    verify['messageName'] = yankee;
    yankee = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 39;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity./meGhY;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    verify['messageGetter'] = yankee;
    michal[offset] = verify;
    verify = option.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE;
    option = {};
    offset = 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT';
    option['messageName'] = offset;
    offset = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 39;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.Oc1Zj4;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    option['messageGetter'] = offset;
    michal[verify] = option;
    var _closure1_slot50 = michal;
    michal = {};
    option = function(argFoo, argBar) { // Original name: receiveMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = arguments[2];
            report = arguments[3];
            entity = undefined;
            if(!(oscard === entity)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            oscard = false;
 14:
            if(!(report === entity)) { _fun00004_ip = 20; continue _fun00003 }
 18:
            report = {};
 20:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 41;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'MESSAGE_CREATE';
            michal['type'] = golfie;
            golfie = argFoo;
            michal['channelId'] = golfie;
            golfie = argBar;
            michal['message'] = golfie;
            michal['optimistic'] = oscard;
            michal['sendMessageOptions'] = report;
            report = false;
            michal['isPushNotification'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['receiveMessage'] = option;
    option = function(argFoo, argBar, argBaz, argCor) { // Original name: sendBotMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            option = argBaz;
            entity = null;
            if(!(entity != option)) { _fun00006_ip = 77; continue _fun00005 }
 12:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 29;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.trackWithMetadata;
            entity = _closure1_slot28;
            michal = entity.AUTOMATED_MESSAGE_RECEIVED;
            entity = {};
            oscard = 'Clyde';
            entity['message_author'] = oscard;
            entity['message_name'] = option;
            entity = zuuluu.bind(tangon)(michal, entity);
 77:
            tangon = _closure1_slot51;
            zuuluu = tangon.receiveMessage;
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 42;
            michal = michal[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(michal);
            oscard = golfie.createBotMessage;
            michal = {};
            verify = argCor;
            michal['messageId'] = verify;
            michal['channelId'] = report;
            verify = argBar;
            michal['content'] = verify;
            michal['loggingName'] = option;
            michal = oscard.bind(golfie)(michal);
            michal = zuuluu.bind(tangon)(report, michal);
            return entity;
        }
    };
    michal['sendBotMessage'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: sendNitroSystemMessage
        oscard = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 42;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = {};
        michal['channelId'] = oscard;
        tangon = argBaz;
        michal['nonce'] = tangon;
        tangon = _closure1_slot36;
        tangon = tangon.NITRO_NOTIFICATION;
        michal['type'] = tangon;
        tangon = argBar;
        michal['content'] = tangon;
        tangon = _closure1_slot34;
        tangon = tangon.EPHEMERAL;
        michal['flags'] = tangon;
        tangon = {'id': null, 'username': 'Nitro Notification', 'discriminator': null, 'avatar': 'nitro', 'bot': true};
        report = _closure1_slot41;
        tangon['id'] = report;
        report = _closure1_slot42;
        tangon['discriminator'] = report;
        report = true;
        michal['author'] = tangon;
        offset = zuuluu.bind(entity)(michal);
        tangon = _closure1_slot51;
        zuuluu = tangon.receiveMessage;
        michal = {};
        yankee = michal;
        option = copyDataProperties(yankee, offset);
        golfie = _closure1_slot43;
        option = golfie.SENT;
        golfie = 'state';
        michal[golfie] = option;
        golfie = 'channel_id';
        michal[golfie] = oscard;
        michal = zuuluu.bind(tangon)(oscard, michal, report);
        return entity;
    };
    michal['sendNitroSystemMessage'] = option;
    option = function(argFoo, argBar) { // Original name: sendGiftingPromptSystemMessage
        oscard = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 42;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = {};
        michal['channelId'] = oscard;
        tangon = _closure1_slot36;
        tangon = tangon.GIFTING_PROMPT;
        michal['type'] = tangon;
        tangon = '';
        michal['content'] = tangon;
        tangon = _closure1_slot34;
        tangon = tangon.EPHEMERAL;
        michal['flags'] = tangon;
        tangon = {'id': null, 'username': 'Gifting Prompt', 'discriminator': null, 'avatar': 'gifting_prompt', 'bot': true};
        report = _closure1_slot41;
        tangon['id'] = report;
        report = _closure1_slot42;
        tangon['discriminator'] = report;
        report = true;
        michal['author'] = tangon;
        tangon = argBar;
        michal['giftingPrompt'] = tangon;
        offset = zuuluu.bind(entity)(michal);
        tangon = _closure1_slot51;
        zuuluu = tangon.receiveMessage;
        michal = {};
        yankee = michal;
        option = copyDataProperties(yankee, offset);
        golfie = _closure1_slot43;
        option = golfie.SENT;
        golfie = 'state';
        michal[golfie] = option;
        michal = zuuluu.bind(tangon)(oscard, michal, report);
        return entity;
    };
    michal['sendGiftingPromptSystemMessage'] = option;
    option = function(argFoo) { // Original name: sendClydeError
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            option = arguments[1];
            entity = undefined;
            if(!(option === entity)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            option = 0;
 14:
            tangon = _closure1_slot19;
            zuuluu = tangon.getChannel;
            offset = zuuluu.bind(tangon)(oscard);
            zuuluu = null;
            if(!(zuuluu != offset)) { _fun00008_ip = 814; continue _fun00007 }
 40:
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.SLOWMODE_RATE_LIMITED;
            if(!(option !== zuuluu)) { _fun00008_ip = 722; continue _fun00007 }
 57:
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.INVALID_MESSAGE_SEND_USER;
            if(!(option !== zuuluu)) { _fun00008_ip = 616; continue _fun00007 }
 74:
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.TOO_MANY_THREADS;
            if(!(option !== zuuluu)) { _fun00008_ip = 462; continue _fun00007 }
 91:
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.TOO_MANY_ANNOUNCEMENT_THREADS;
            if(!(option !== zuuluu)) { _fun00008_ip = 396; continue _fun00007 }
 108:
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.HARMFUL_LINK_MESSAGE_BLOCKED;
            if(!(option !== zuuluu)) { _fun00008_ip = 312; continue _fun00007 }
 125:
            zuuluu = _closure1_slot50;
            zuuluu = option in zuuluu;
            if(zuuluu) { _fun00008_ip = 279; continue _fun00007 }
 139:
            tangon = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 39;
            report = romeon[zuuluu];
            report = tangon.bind(entity)(report);
            golfie = report.intl;
            report = golfie.formatToPlainString;
            zuuluu = romeon[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.CTMXwM;
            zuuluu = {};
            yankee = _closure1_slot1;
            verify = 40;
            verify = romeon[verify];
            romeon = yankee.bind(entity)(verify);
            yankee = romeon.getArticleURL;
            verify = _closure1_slot38;
            verify = verify.DM_COULD_NOT_BE_DELIVERED;
            verify = yankee.bind(romeon)(verify);
            zuuluu['helpUrl'] = verify;
            tangon = report.bind(golfie)(tangon, zuuluu);
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            golfie = zuuluu.concat;
            report = 'SEND_FAILED (';
            zuuluu = ')';
            zuuluu = golfie.bind(report)(option, zuuluu);
            report = tangon;
            tangon = zuuluu;
            _fun00008_ip = 797; continue _fun00007;
 279:
            golfie = _closure1_slot50;
            zuuluu = golfie[option];
            tangon = zuuluu.messageName;
            option = golfie[option];
            golfie = option.messageGetter;
            report = golfie.bind(option)();
            _fun00008_ip = 797; continue _fun00007;
 312:
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 39;
            option = yankee[zuuluu];
            option = golfie.bind(entity)(option);
            verify = option.intl;
            option = verify.formatToPlainString;
            zuuluu = yankee[zuuluu];
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            golfie = zuuluu.zSG3Q0;
            zuuluu = {};
            yankee = _closure1_slot39;
            yankee = yankee.HARMFUL_LINKS;
            zuuluu['helpUrl'] = yankee;
            report = option.bind(verify)(golfie, zuuluu);
            tangon = 'HARMFUL_LINK_MESSAGE_BLOCKED';
            _fun00008_ip = 797; continue _fun00007;
 396:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 39;
            golfie = yankee[zuuluu];
            golfie = verify.bind(entity)(golfie);
            option = golfie.intl;
            golfie = option.string;
            zuuluu = yankee[zuuluu];
            zuuluu = verify.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.aY+lLC;
            report = golfie.bind(option)(zuuluu);
            tangon = 'TOO_MANY_ANNOUNCEMENT_THREADS';
            _fun00008_ip = 797; continue _fun00007;
 462:
            zuuluu = offset.isForumLikeChannel;
            zuuluu = zuuluu.bind(offset)();
            if(zuuluu) { _fun00008_ip = 547; continue _fun00007 }
 475:
            zuuluu = offset.isForumPost;
            zuuluu = zuuluu.bind(offset)();
            if(zuuluu) { _fun00008_ip = 547; continue _fun00007 }
 488:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 39;
            golfie = yankee[zuuluu];
            golfie = verify.bind(entity)(golfie);
            option = golfie.intl;
            golfie = option.string;
            zuuluu = yankee[zuuluu];
            zuuluu = verify.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.5EMPAw;
            golfie = golfie.bind(option)(zuuluu);
            _fun00008_ip = 604; continue _fun00007;
 547:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 39;
            option = romeon[zuuluu];
            option = yankee.bind(entity)(option);
            verify = option.intl;
            option = verify.string;
            zuuluu = romeon[zuuluu];
            zuuluu = yankee.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu./jUd29;
            golfie = option.bind(verify)(zuuluu);
 604:
            tangon = 'TOO_MANY_THREADS';
            report = golfie;
            _fun00008_ip = 797; continue _fun00007;
 616:
            golfie = _closure1_slot0;
            foxtra = _closure1_slot2;
            zuuluu = 39;
            option = foxtra[zuuluu];
            option = golfie.bind(entity)(option);
            verify = option.intl;
            option = verify.formatToPlainString;
            zuuluu = foxtra[zuuluu];
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            golfie = zuuluu.CTMXwM;
            zuuluu = {};
            romeon = _closure1_slot1;
            yankee = 40;
            yankee = foxtra[yankee];
            foxtra = romeon.bind(entity)(yankee);
            romeon = foxtra.getArticleURL;
            yankee = _closure1_slot38;
            yankee = yankee.DM_COULD_NOT_BE_DELIVERED;
            yankee = romeon.bind(foxtra)(yankee);
            zuuluu['helpUrl'] = yankee;
            report = option.bind(verify)(golfie, zuuluu);
            tangon = 'INVALID_MESSAGE_SEND_USER';
            _fun00008_ip = 797; continue _fun00007;
 722:
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 39;
            option = yankee[zuuluu];
            option = golfie.bind(entity)(option);
            verify = option.intl;
            option = verify.formatToPlainString;
            zuuluu = yankee[zuuluu];
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            golfie = zuuluu.IWntYm;
            zuuluu = {};
            offset = offset.rateLimitPerUser;
            zuuluu['seconds'] = offset;
            report = option.bind(verify)(golfie, zuuluu);
            tangon = 'SLOWMODE_RATE_LIMITED';
 797:
            zuuluu = _closure1_slot51;
            michal = zuuluu.sendBotMessage;
            michal = michal.bind(zuuluu)(oscard, report, tangon);
 814:
            return entity;
        }
    };
    michal['sendClydeError'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: sendExplicitMediaClydeError
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot19;
            michal = zuuluu.getChannel;
            foxtra = michal.bind(zuuluu)(report);
            michal = null;
            if(!(michal != foxtra)) { _fun00010_ip = 369; continue _fun00009 }
 34:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 43;
            golfie = romeon[zuuluu];
            zuuluu = undefined;
            verify = yankee.bind(zuuluu)(golfie);
            option = verify.match;
            golfie = {};
            offset = foxtra.isDM;
            offset = offset.bind(foxtra)();
            golfie['isDM'] = offset;
            offset = foxtra.isGroupDM;
            offset = offset.bind(foxtra)();
            golfie['isGDM'] = offset;
            offset = option.bind(verify)(golfie);
            verify = offset.with;
            option = {};
            golfie = true;
            option['isDM'] = golfie;
            golfie = function() {
                entity = {};
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 39;
                zuuluu = golfie[michal];
                report = undefined;
                zuuluu = oscard.bind(report)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.string;
                michal = golfie[michal];
                michal = oscard.bind(report)(michal);
                michal = michal.t;
                michal = michal.PoyOY2;
                michal = zuuluu.bind(tangon)(michal);
                entity['message'] = michal;
                michal = 'BOT_DM_EXPLICIT_CONTENT';
                entity['messageName'] = michal;
                return entity;
            };
            offset = verify.bind(offset)(option, golfie);
            verify = offset.with;
            option = {'isDM': false, 'isGDM': true};
            golfie = function() {
                entity = {};
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 39;
                zuuluu = golfie[michal];
                report = undefined;
                zuuluu = oscard.bind(report)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.string;
                michal = golfie[michal];
                michal = oscard.bind(report)(michal);
                michal = michal.t;
                michal = michal.PoyOY2;
                michal = zuuluu.bind(tangon)(michal);
                entity['message'] = michal;
                michal = 'BOT_GDM_EXPLICIT_CONTENT';
                entity['messageName'] = michal;
                return entity;
            };
            option = verify.bind(offset)(option, golfie);
            golfie = option.otherwise;
            oscard = function() {
                entity = {};
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 39;
                zuuluu = golfie[michal];
                report = undefined;
                zuuluu = oscard.bind(report)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.string;
                michal = golfie[michal];
                michal = oscard.bind(report)(michal);
                michal = michal.t;
                michal = michal.bNMQVF;
                michal = zuuluu.bind(tangon)(michal);
                entity['message'] = michal;
                michal = 'BOT_GUILD_EXPLICIT_CONTENT';
                entity['messageName'] = michal;
                return entity;
            };
            oscard = golfie.bind(option)(oscard);
            sizing = oscard.message;
            kiloes = oscard.messageName;
            oscard = 44;
            oscard = romeon[oscard];
            golfie = yankee.bind(zuuluu)(oscard);
            oscard = golfie.createNonce;
            oscard = oscard.bind(golfie)();
            option = _closure1_slot51;
            golfie = option.sendBotMessage;
            result = option;
            output = report;
            backup = oscard;
            golfie = result[golfie](output, sizing, kiloes, backup, foxtra);
            offset = 45;
            golfie = romeon[offset];
            verify = yankee.bind(zuuluu)(golfie);
            option = verify.trackMediaRedactionAction;
            golfie = {};
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            offset = offset.TrackMediaRedactionActionType;
            offset = offset.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT;
            golfie['action'] = offset;
            golfie['messageId'] = oscard;
            golfie['channelId'] = report;
            offset = argBaz;
            golfie['context'] = offset;
            golfie = option.bind(verify)(golfie);
            michal = michal != tangon;
            if(!michal) { _fun00010_ip = 311; continue _fun00009 }
 300:
            option = tangon.length;
            golfie = 0;
            michal = option > golfie;
 311:
            if(!michal) { _fun00010_ip = 369; continue _fun00009 }
 314:
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 41;
            entity = golfie[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.dispatch;
            entity = {};
            golfie = 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE';
            entity['type'] = golfie;
            entity['messageId'] = oscard;
            entity['channelId'] = report;
            entity['attachments'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 369:
            entity = undefined;
            return entity;
        }
    };
    michal['sendExplicitMediaClydeError'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: truncateMessages
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 41;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'TRUNCATE_MESSAGES';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        report = argBar;
        michal['truncateBottom'] = report;
        report = argBaz;
        michal['truncateTop'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['truncateMessages'] = option;
    option = function(argFoo) { // Original name: clearChannel
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 41;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CLEAR_MESSAGES';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['clearChannel'] = option;
    option = function(argFoo, argBar) { // Original name: jumpToPresent
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            golfie = _closure1_slot51;
            oscard = golfie.trackJump;
            zuuluu = null;
            michal = 'Present';
            michal = oscard.bind(golfie)(report, zuuluu, michal);
            oscard = {};
            michal = true;
            oscard['present'] = michal;
            zuuluu = _closure1_slot22;
            michal = zuuluu.hasPresent;
            michal = michal.bind(zuuluu)(report);
            if(michal) { _fun00012_ip = 94; continue _fun00011 }
 61:
            golfie = _closure1_slot51;
            zuuluu = golfie.fetchMessages;
            michal = {};
            michal['channelId'] = report;
            michal['limit'] = tangon;
            michal['jump'] = oscard;
            michal = zuuluu.bind(golfie)(michal);
            _fun00012_ip = 152; continue _fun00011;
 94:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 41;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            golfie = 'LOAD_MESSAGES_SUCCESS_CACHED';
            entity['type'] = golfie;
            entity['jump'] = oscard;
            entity['channelId'] = report;
            entity['limit'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 152:
            entity = undefined;
            return entity;
        }
    };
    michal['jumpToPresent'] = option;
    option = function(argFoo, argBar, argBaz, argCor) { // Original name: trackJump
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 29;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot28;
        zuuluu = michal.JUMP;
        michal = {};
        oscard = argBaz;
        michal['context'] = oscard;
        oscard = argFoo;
        michal['channel_id'] = oscard;
        oscard = argBar;
        michal['message_id'] = oscard;
        golfie = argCor;
        option = michal;
        oscard = copyDataProperties(option, golfie);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    michal['trackJump'] = option;
    option = function(argFoo) { // Original name: jumpToMessage
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            romeon = entity.channelId;
            yankee = entity.messageId;
            offset = entity.flash;
            michal = undefined;
            if(!(offset === michal)) { _fun00014_ip = 27; continue _fun00013 }
 25:
            offset = false;
 27:
            verify = entity.offset;
            oscard = entity.context;
            zuuluu = entity.extraProperties;
            if(!(zuuluu === michal)) { _fun00014_ip = 50; continue _fun00013 }
 48:
            zuuluu = null;
 50:
            report = entity.isPreload;
            option = entity.returnMessageId;
            tangon = entity.skipLocalFetch;
            golfie = entity.jumpType;
            michal = 'string';
            entity = typeof oscard;
            if(!(michal === entity)) { _fun00014_ip = 117; continue _fun00013 }
 85:
            michal = _closure1_slot51;
            entity = michal.trackJump;
            output = michal;
            sizing = romeon;
            kiloes = yankee;
            backup = oscard;
            foxtra = zuuluu;
            entity = output[entity](sizing, kiloes, backup, foxtra, romeon);
 117:
            zuuluu = _closure1_slot51;
            michal = zuuluu.fetchMessages;
            entity = {};
            entity['channelId'] = romeon;
            oscard = _closure1_slot35;
            entity['limit'] = oscard;
            oscard = {};
            oscard['messageId'] = yankee;
            oscard['flash'] = offset;
            oscard['offset'] = verify;
            oscard['returnMessageId'] = option;
            oscard['jumpType'] = golfie;
            entity['jump'] = oscard;
            entity['isPreload'] = report;
            entity['skipLocalFetch'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['jumpToMessage'] = option;
    option = function(argFoo) { // Original name: focusMessage
        entity = argFoo;
        oscard = entity.channelId;
        report = entity.messageId;
        zuuluu = _closure1_slot51;
        michal = zuuluu.fetchMessages;
        entity = {};
        entity['channelId'] = oscard;
        tangon = _closure1_slot35;
        entity['limit'] = tangon;
        tangon = {};
        tangon['messageId'] = report;
        entity['focus'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['focusMessage'] = option;
    option = function(argFoo) { // Original name: fetchMessage
        entity = argFoo;
        golfie = entity.channelId;
        report = entity.messageId;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 46;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.get;
        entity = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': false};
        oscard = _closure1_slot29;
        tangon = oscard.MESSAGES;
        tangon = tangon.bind(oscard)(golfie);
        entity['url'] = tangon;
        tangon = {};
        oscard = 1;
        tangon['limit'] = oscard;
        tangon['around'] = report;
        entity['query'] = tangon;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.then;
        entity = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                michal = entity.body;
                michal = michal.length;
                tangon = 0;
                if(!(!(michal > tangon))) { _fun00016_ip = 23; continue _fun00015 }
 19:
                michal = undefined;
                return michal;
 23:
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 47;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                michal = zuuluu.createMessageRecord;
                entity = entity.body;
                entity = entity[tangon];
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['fetchMessage'] = option;
    option = function(argFoo) { // Original name: fetchMessages
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            report = this;
            foxtra = entity.channelId;
            var _closure2_slot0 = foxtra;
            yankee = entity.before;
            var _closure2_slot1 = yankee;
            offset = entity.after;
            var _closure2_slot2 = offset;
            verify = entity.limit;
            var _closure2_slot3 = verify;
            romeon = entity.jump;
            var _closure2_slot4 = romeon;
            backup = entity.focus;
            golfie = entity.isPreload;
            zuuluu = entity.skipLocalFetch;
            output = entity.truncate;
            var _closure2_slot5 = output;
            entity = entity.forICYMI;
            var _closure2_slot6 = entity;
            entity = undefined;
            var _closure2_slot9 = entity;
            var _closure2_slot10 = entity;
            option = _closure1_slot19;
            tangon = option.getChannel;
            kiloes = tangon.bind(option)(foxtra);
            option = _closure1_slot7;
            tangon = option.isConnectedOrOverlay;
            tangon = tangon.bind(option)();
            var _closure2_slot7 = tangon;
            tangon = global;
            sizing = tangon.Date;
            option = sizing.now;
            option = option.bind(sizing)();
            var _closure2_slot8 = option;
            option = null;
            if(!(option != kiloes)) { _fun00018_ip = 189; continue _fun00017 }
 167:
            sizing = kiloes.type;
            kiloes = _closure1_slot30;
            kiloes = kiloes.GUILD_STORE;
            if(!(sizing !== kiloes)) { _fun00018_ip = 739; continue _fun00017 }
 189:
            sizing = _closure1_slot0;
            result = _closure1_slot2;
            kiloes = 48;
            kiloes = result[kiloes];
            kiloes = sizing.bind(entity)(kiloes);
            kiloes = kiloes.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(foxtra !== kiloes)) { _fun00018_ip = 737; continue _fun00017 }
 222:
            sizing = _closure1_slot46;
            kiloes = sizing.log;
            echoed = tangon.JSON;
            result = echoed.stringify;
            vacuum = result.bind(echoed)(romeon);
            tangon = tangon.HermesInternal;
            source = tangon.concat;
            status = 'Fetching messages for ';
            papara = ' between ';
            record = ' and ';
            sequen = '. jump=';
            target = foxtra;
            cntext = yankee;
            config = offset;
            tangon = status[source](target, papara, cntext, record, config, sequen, vacuum, ctrled);
            tangon = kiloes.bind(sizing)(tangon);
            sizing = _closure1_slot51;
            kiloes = sizing._tryFetchMessagesCached;
            tangon = {};
            tangon['channelId'] = foxtra;
            tangon['before'] = yankee;
            tangon['after'] = offset;
            tangon['limit'] = verify;
            tangon['jump'] = romeon;
            tangon['focus'] = backup;
            tangon['truncate'] = output;
            tangon = kiloes.bind(sizing)(tangon);
            if(tangon) { _fun00018_ip = 737; continue _fun00017 }
 359:
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            tangon = 49;
            tangon = sizing[tangon];
            tangon = kiloes.bind(entity)(tangon);
            kiloes = tangon.fetchMessages;
            tangon = kiloes.recordStart;
            tangon = tangon.bind(kiloes)();
            kiloes = option != romeon;
            tangon = undefined;
            if(!kiloes) { _fun00018_ip = 407; continue _fun00017 }
 404:
            tangon = romeon;
 407:
            romeon = option == tangon;
            if(!romeon) { _fun00018_ip = 418; continue _fun00017 }
 414:
            romeon = option != backup;
 418:
            if(!romeon) { _fun00018_ip = 436; continue _fun00017 }
 421:
            romeon = {};
            target = romeon;
            papara = backup;
            backup = copyDataProperties(target, papara);
            tangon = romeon;
 436:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            romeon = 50;
            sizing = kiloes[romeon];
            output = backup.bind(entity)(sizing);
            sizing = output.getOrCreate;
            output = sizing.bind(output)(foxtra);
            sizing = output.loadStart;
            output = sizing.bind(output)(tangon);
            romeon = kiloes[romeon];
            sizing = backup.bind(entity)(romeon);
            romeon = sizing.commit;
            romeon = romeon.bind(sizing)(output);
            romeon = 41;
            romeon = kiloes[romeon];
            kiloes = backup.bind(entity)(romeon);
            backup = kiloes.dispatch;
            romeon = {};
            sizing = 'LOAD_MESSAGES';
            romeon['type'] = sizing;
            romeon = backup.bind(kiloes)(romeon);
            romeon = option == tangon;
            option = undefined;
            if(romeon) { _fun00018_ip = 548; continue _fun00017 }
 543:
            option = tangon.messageId;
 548:
            _closure2_slot9 = option;
            tangon = _closure1_slot49;
            romeon = tangon.prototype;
            romeon = Object.create(romeon, {constructor: {value: tangon}});
            status = romeon;
            tangon = new status[tangon](target);
            tangon = tangon instanceof Object ? tangon : romeon;
            _closure2_slot10 = tangon;
            if(zuuluu) { _fun00018_ip = 611; continue _fun00017 }
 583:
            zuuluu = report.fetchLocalMessages;
            status = report;
            target = foxtra;
            papara = yankee;
            cntext = offset;
            record = verify;
            config = tangon;
            zuuluu = status[zuuluu](target, papara, cntext, record, config, sequen);
 611:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 46;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            report = zuuluu.HTTP;
            tangon = report.get;
            zuuluu = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': false};
            romeon = _closure1_slot29;
            oscard = romeon.MESSAGES;
            oscard = oscard.bind(romeon)(foxtra);
            zuuluu['url'] = oscard;
            oscard = {};
            oscard['before'] = yankee;
            oscard['after'] = offset;
            oscard['limit'] = verify;
            oscard['around'] = option;
            oscard['preload'] = golfie;
            zuuluu['query'] = oscard;
            report = tangon.bind(report)(zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                michal = argFoo;
                var _closure3_slot0 = michal;
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                michal = 49;
                oscard = report[michal];
                zuuluu = undefined;
                oscard = tangon.bind(zuuluu)(oscard);
                golfie = oscard.fetchMessages;
                oscard = golfie.recordEnd;
                oscard = oscard.bind(golfie)();
                michal = report[michal];
                michal = tangon.bind(zuuluu)(michal);
                zuuluu = michal.dispatchMessages;
                michal = zuuluu.measure;
                entity = function() {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        entity = _closure3_slot0;
                        yankee = entity.body;
                        entity = _closure2_slot1;
                        golfie = null;
                        offset = golfie != entity;
                        entity = _closure2_slot2;
                        verify = golfie != entity;
                        entity = _closure2_slot9;
                        michal = golfie != entity;
                        if(michal) { _fun00020_ip = 96; continue _fun00019 }
 46:
                        tangon = yankee.length;
                        entity = _closure2_slot3;
                        entity = tangon === entity;
                        if(!entity) { _fun00020_ip = 93; continue _fun00019 }
 62:
                        tangon = offset;
                        if(tangon) { _fun00020_ip = 90; continue _fun00019 }
 68:
                        oscard = _closure2_slot1;
                        oscard = golfie == oscard;
                        if(!oscard) { _fun00020_ip = 87; continue _fun00019 }
 79:
                        option = _closure2_slot2;
                        oscard = golfie == option;
 87:
                        tangon = oscard;
 90:
                        entity = tangon;
 93:
                        michal = entity;
 96:
                        entity = _closure2_slot9;
                        tangon = golfie != entity;
                        if(tangon) { _fun00020_ip = 129; continue _fun00019 }
 107:
                        entity = verify;
                        if(!entity) { _fun00020_ip = 126; continue _fun00019 }
 113:
                        option = yankee.length;
                        oscard = _closure2_slot3;
                        entity = option === oscard;
 126:
                        tangon = entity;
 129:
                        entity = _closure2_slot9;
                        option = michal;
                        oscard = tangon;
                        if(!(golfie != entity)) { _fun00020_ip = 389; continue _fun00019 }
 146:
                        entity = global;
                        foxtra = entity.Math;
                        romeon = foxtra.floor;
                        backup = _closure2_slot3;
                        entity = 2;
                        golfie = backup / entity;
                        golfie = romeon.bind(foxtra)(golfie);
                        romeon = _closure2_slot9;
                        kiloes = new Array(1);
                        kiloes[0] = romeon;
                        foxtra = yankee.map;
                        romeon = function(argFoo) {
                            entity = argFoo;
                            entity = entity.id;
                            return entity;
                        };
                        sequen = foxtra.bind(yankee)(romeon);
                        foxtra = 1;
                        config = kiloes;
                        vacuum = foxtra;
                        romeon = arraySpread(config, sequen, vacuum);
                        romeon = kiloes.filter;
                        zuuluu = function(argFoo, argBar, argBaz) {
                            zuuluu = argBaz;
                            michal = zuuluu.indexOf;
                            entity = argFoo;
                            michal = michal.bind(zuuluu)(entity);
                            entity = argBar;
                            entity = michal === entity;
                            return entity;
                        };
                        sizing = romeon.bind(kiloes)(zuuluu);
                        kiloes = sizing.sort;
                        result = _closure1_slot1;
                        output = _closure1_slot2;
                        romeon = 51;
                        output = output[romeon];
                        romeon = undefined;
                        romeon = result.bind(romeon)(output);
                        romeon = romeon.compare;
                        sizing = kiloes.bind(sizing)(romeon);
                        kiloes = sizing.indexOf;
                        romeon = _closure2_slot9;
                        romeon = kiloes.bind(sizing)(romeon);
                        entity = backup % entity;
                        entity = golfie + entity;
                        entity = entity - foxtra;
                        if(!(romeon < entity)) { _fun00020_ip = 305; continue _fun00019 }
 303:
                        michal = false;
 305:
                        entity = yankee.length;
                        entity = entity - romeon;
                        if(!(entity < golfie)) { _fun00020_ip = 320; continue _fun00019 }
 318:
                        tangon = false;
 320:
                        option = michal;
                        oscard = tangon;
                        if(!tangon) { _fun00020_ip = 389; continue _fun00019 }
 329:
                        golfie = yankee.length;
                        entity = 0;
                        option = michal;
                        oscard = tangon;
                        if(!(golfie > entity)) { _fun00020_ip = 389; continue _fun00019 }
 346:
                        romeon = _closure1_slot24;
                        golfie = romeon.lastMessageId;
                        zuuluu = _closure2_slot0;
                        zuuluu = golfie.bind(romeon)(zuuluu);
                        entity = yankee[entity];
                        entity = entity.id;
                        option = michal;
                        oscard = tangon;
                        if(!(entity === zuuluu)) { _fun00020_ip = 389; continue _fun00019 }
 384:
                        oscard = false;
                        option = michal;
 389:
                        zuuluu = _closure1_slot46;
                        michal = zuuluu.log;
                        config = yankee.length;
                        romeon = _closure2_slot0;
                        entity = global;
                        entity = entity.HermesInternal;
                        kiloes = entity.concat;
                        record = 'Fetched ';
                        sequen = ' messages for ';
                        ctrled = ' isBefore:';
                        update = ' isAfter:';
                        vacuum = romeon;
                        source = offset;
                        echoed = verify;
                        entity = record[kiloes](config, sequen, vacuum, ctrled, source, update, echoed, result);
                        entity = michal.bind(zuuluu)(entity);
                        michal = _closure2_slot10;
                        entity = michal.markComplete;
                        entity = entity.bind(michal)();
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 41;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        foxtra = 'LOAD_MESSAGES_SUCCESS';
                        michal['type'] = foxtra;
                        michal['channelId'] = romeon;
                        michal['messages'] = yankee;
                        michal['isBefore'] = offset;
                        michal['isAfter'] = verify;
                        michal['hasMoreBefore'] = option;
                        michal['hasMoreAfter'] = oscard;
                        oscard = _closure2_slot3;
                        michal['limit'] = oscard;
                        oscard = _closure2_slot4;
                        michal['jump'] = oscard;
                        oscard = _closure2_slot6;
                        michal['forICYMI'] = oscard;
                        oscard = _closure2_slot7;
                        oscard = !oscard;
                        if(oscard) { _fun00020_ip = 607; continue _fun00019 }
 585:
                        option = _closure1_slot7;
                        golfie = option.lastTimeConnectedChanged;
                        option = golfie.bind(option)();
                        golfie = _closure2_slot8;
                        oscard = option >= golfie;
 607:
                        michal['isStale'] = oscard;
                        report = _closure2_slot5;
                        michal['truncate'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                entity = true;
                return entity;
            };
            michal = function() {
                report = _closure1_slot46;
                zuuluu = report.log;
                tangon = _closure2_slot0;
                michal = global;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                michal = 'Failed to fetch messages for ';
                michal = oscard.bind(michal)(tangon);
                michal = zuuluu.bind(report)(michal);
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 41;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dispatch;
                entity = {};
                report = 'LOAD_MESSAGES_FAILURE';
                entity['type'] = report;
                entity['channelId'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = false;
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 737:
            return entity;
 739:
            entity = false;
            return entity;
        }
    };
    michal['fetchMessages'] = option;
    option = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: fetchLocalMessages
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        michal = argGra;
        var _closure2_slot4 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00022_ip = 645; continue _fun00021 }
 12:
                    zuuluu = undefined;
                    var _closure4_slot0 = zuuluu;
                    oscard = _closure1_slot19;
                    report = oscard.getBasicChannel;
                    yankee = _closure2_slot0;
                    verify = report.bind(oscard)(yankee);
                    golfie = _closure1_slot1;
                    offset = _closure1_slot2;
                    report = 50;
                    report = offset[report];
                    oscard = golfie.bind(zuuluu)(report);
                    report = oscard.getOrCreate;
                    oscard = report.bind(oscard)(yankee);
                    report = 52;
                    report = offset[report];
                    golfie = golfie.bind(zuuluu)(report);
                    report = golfie.database;
                    golfie = report.bind(golfie)();
                    _closure4_slot0 = golfie;
                    report = null;
                    if(!(report != golfie)) { _fun00022_ip = 126; continue _fun00021 }
 106:
                    if(!(report != verify)) { _fun00022_ip = 126; continue _fun00021 }
 110:
                    golfie = _closure2_slot1;
                    if(!(report == golfie)) { _fun00022_ip = 126; continue _fun00021 }
 118:
                    golfie = _closure2_slot2;
                    if(!(report != golfie)) { _fun00022_ip = 173; continue _fun00021 }
 126:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    golfie = 49;
                    golfie = yankee[golfie];
                    romeon = offset.bind(zuuluu)(golfie);
                    yankee = romeon.addLocalMessages;
                    offset = _closure2_slot0;
                    golfie = -1;
                    golfie = yankee.bind(romeon)(offset, golfie);
                    _fun00022_ip = 639; continue _fun00021;
 173:
                    golfie = oscard.ready;
                    if(!golfie) { _fun00022_ip = 238; continue _fun00021 }
 182:
                    oscard = oscard.cached;
                    if(oscard) { _fun00022_ip = 238; continue _fun00021 }
 191:
                    golfie = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscard = 49;
                    oscard = offset[oscard];
                    yankee = golfie.bind(zuuluu)(oscard);
                    offset = yankee.addLocalMessages;
                    golfie = _closure2_slot0;
                    oscard = -2;
                    oscard = offset.bind(yankee)(golfie, oscard);
                    _fun00022_ip = 639; continue _fun00021;
 238:
                    golfie = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscard = 53;
                    oscard = offset[oscard];
                    golfie = golfie.bind(zuuluu)(oscard);
                    oscard = golfie.tryLoadAsync;
                    michal = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 54;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.load;
                        zuuluu = _closure4_slot0;
                        michal = _closure2_slot0;
                        entity = _closure2_slot3;
                        entity = tangon.bind(report)(zuuluu, michal, entity);
                        return entity;
                    };
                    michal = oscard.bind(golfie)(michal);
                    SaveGenerator(address=278);
 276:
                    return michal;
 278:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00022_ip = 642; continue _fun00021 }
 287:
                    if(!(report == michal)) { _fun00022_ip = 338; continue _fun00021 }
 291:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 49;
                    report = golfie[report];
                    offset = oscard.bind(zuuluu)(report);
                    golfie = offset.addLocalMessages;
                    oscard = _closure2_slot0;
                    report = -3;
                    report = golfie.bind(offset)(oscard, report);
                    _fun00022_ip = 639; continue _fun00021;
 338:
                    offset = _closure1_slot46;
                    golfie = offset.log;
                    report = michal.messages;
                    vacuum = report.length;
                    yankee = _closure2_slot0;
                    report = _closure2_slot4;
                    echoed = report.completed;
                    oscard = global;
                    oscard = oscard.HermesInternal;
                    kiloes = oscard.concat;
                    sequen = 'fetched ';
                    ctrled = ' messages from local database (channel_id: ';
                    update = ', remote_fetch_completed: ';
                    result = ')';
                    source = yankee;
                    oscard = sequen[kiloes](vacuum, ctrled, source, update, echoed, result, output);
                    oscard = golfie.bind(offset)(oscard);
                    golfie = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscard = 49;
                    oscard = offset[oscard];
                    offset = golfie.bind(zuuluu)(oscard);
                    golfie = offset.addLocalMessages;
                    oscard = michal.messages;
                    oscard = oscard.length;
                    oscard = golfie.bind(offset)(yankee, oscard);
                    report = report.completed;
                    if(report) { _fun00022_ip = 639; continue _fun00021 }
 475:
                    report = michal.messages;
                    oscard = report.length;
                    report = 0;
                    if(!(oscard > report)) { _fun00022_ip = 639; continue _fun00021 }
 495:
                    report = michal.messages;
                    oscard = report.length;
                    report = _closure2_slot3;
                    golfie = oscard >= report;
                    if(!golfie) { _fun00022_ip = 541; continue _fun00021 }
 517:
                    oscard = michal.connectionId;
                    offset = _closure1_slot7;
                    report = offset.lastTimeConnectedChanged;
                    report = report.bind(offset)();
                    golfie = oscard === report;
 541:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 41;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    offset = 'LOCAL_MESSAGES_LOADED';
                    tangon['type'] = offset;
                    verify = verify.guild_id;
                    tangon['guildId'] = verify;
                    option = _closure2_slot0;
                    tangon['channelId'] = option;
                    option = michal.users;
                    tangon['users'] = option;
                    option = michal.members;
                    tangon['members'] = option;
                    option = michal.messages;
                    tangon['messages'] = option;
                    golfie = !golfie;
                    tangon['stale'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 639:
                    return zuuluu;
 642:
                    return michal;
 645:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetchLocalMessages'] = option;
    option = function(argFoo, argBar) { // Original name: fetchNewLocalMessages
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00024_ip = 469; continue _fun00023 }
 12:
                    michal = undefined;
                    var _closure4_slot0 = michal;
                    var _closure4_slot1 = michal;
                    golfie = _closure1_slot19;
                    oscard = golfie.getBasicChannel;
                    zuuluu = _closure2_slot0;
                    verify = oscard.bind(golfie)(zuuluu);
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 52;
                    zuuluu = golfie[zuuluu];
                    oscard = oscard.bind(michal)(zuuluu);
                    zuuluu = oscard.database;
                    zuuluu = zuuluu.bind(oscard)();
                    _closure4_slot0 = zuuluu;
                    golfie = null;
                    if(!(golfie != zuuluu)) { _fun00024_ip = 466; continue _fun00023 }
 90:
                    if(!(golfie != verify)) { _fun00024_ip = 466; continue _fun00023 }
 97:
                    oscard = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    yankee = 50;
                    zuuluu = zuuluu[yankee];
                    offset = oscard.bind(michal)(zuuluu);
                    oscard = offset.getOrCreate;
                    zuuluu = _closure2_slot0;
                    zuuluu = oscard.bind(offset)(zuuluu);
                    zuuluu = zuuluu.hasMoreAfter;
                    if(zuuluu) { _fun00024_ip = 466; continue _fun00023 }
 144:
                    oscard = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 53;
                    zuuluu = offset[zuuluu];
                    offset = oscard.bind(michal)(zuuluu);
                    oscard = offset.tryLoadAsync;
                    zuuluu = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 54;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.load;
                        zuuluu = _closure4_slot0;
                        michal = _closure2_slot0;
                        entity = _closure2_slot1;
                        entity = tangon.bind(report)(zuuluu, michal, entity);
                        return entity;
                    };
                    zuuluu = oscard.bind(offset)(zuuluu);
                    SaveGenerator(address=184);
 182:
                    return zuuluu;
 184:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00024_ip = 463; continue _fun00023 }
 193:
                    if(!(golfie != zuuluu)) { _fun00024_ip = 466; continue _fun00023 }
 200:
                    offset = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[yankee];
                    yankee = offset.bind(michal)(oscard);
                    offset = yankee.getOrCreate;
                    oscard = _closure2_slot0;
                    offset = offset.bind(yankee)(oscard);
                    oscard = offset.last;
                    offset = oscard.bind(offset)();
                    yankee = golfie == offset;
                    oscard = undefined;
                    if(yankee) { _fun00024_ip = 256; continue _fun00023 }
 251:
                    oscard = offset.id;
 256:
                    _closure4_slot1 = oscard;
                    if(!(golfie != oscard)) { _fun00024_ip = 287; continue _fun00023 }
 264:
                    golfie = zuuluu.messages;
                    oscard = golfie.filter;
                    report = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 51;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.compare;
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure4_slot1;
                        michal = zuuluu.bind(tangon)(michal, entity);
                        entity = 0;
                        entity = michal > entity;
                        return entity;
                    };
                    golfie = oscard.bind(golfie)(report);
                    _fun00024_ip = 293; continue _fun00023;
 287:
                    golfie = zuuluu.messages;
 293:
                    offset = _closure1_slot46;
                    oscard = offset.log;
                    report = zuuluu.messages;
                    echoed = report.length;
                    output = golfie.length;
                    report = global;
                    report = report.HermesInternal;
                    foxtra = report.concat;
                    update = 'Fetched ';
                    result = ' messages from the cache after foregrounding. ';
                    sizing = ' are new';
                    report = update[foxtra](echoed, result, output, sizing, kiloes);
                    report = oscard.bind(offset)(report);
                    oscard = golfie.length;
                    report = 0;
                    if(!(report !== oscard)) { _fun00024_ip = 466; continue _fun00023 }
 370:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 41;
                    tangon = oscard[tangon];
                    oscard = report.bind(michal)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    offset = 'LOCAL_MESSAGES_LOADED';
                    tangon['type'] = offset;
                    verify = verify.guild_id;
                    tangon['guildId'] = verify;
                    option = _closure2_slot0;
                    tangon['channelId'] = option;
                    option = zuuluu.users;
                    tangon['users'] = option;
                    option = zuuluu.members;
                    tangon['members'] = option;
                    tangon['messages'] = golfie;
                    golfie = true;
                    tangon['stale'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    _fun00024_ip = 466; continue _fun00023;
 463:
                    return zuuluu;
 466:
                    return michal;
 469:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetchNewLocalMessages'] = option;
    option = function(argFoo) { // Original name: _tryFetchMessagesCached
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            golfie = entity.channelId;
            foxtra = entity.before;
            kiloes = entity.after;
            report = entity.limit;
            oscard = entity.jump;
            offset = entity.focus;
            tangon = entity.truncate;
            zuuluu = _closure1_slot22;
            michal = zuuluu.getMessages;
            option = michal.bind(zuuluu)(golfie);
            michal = option.cached;
            if(michal) { _fun00026_ip = 925; continue _fun00025 }
 74:
            michal = option.ready;
            if(!michal) { _fun00026_ip = 925; continue _fun00025 }
 86:
            backup = null;
            verify = backup == oscard;
            zuuluu = undefined;
            michal = undefined;
            if(verify) { _fun00026_ip = 104; continue _fun00025 }
 99:
            michal = oscard.messageId;
 104:
            if(!(backup == michal)) { _fun00026_ip = 311; continue _fun00025 }
 111:
            verify = backup == offset;
            michal = undefined;
            if(verify) { _fun00026_ip = 125; continue _fun00025 }
 120:
            michal = offset.messageId;
 125:
            if(!(backup == michal)) { _fun00026_ip = 311; continue _fun00025 }
 132:
            if(!(backup != foxtra)) { _fun00026_ip = 152; continue _fun00025 }
 136:
            michal = option.hasBeforeCached;
            michal = michal.bind(option)(foxtra);
            if(michal) { _fun00026_ip = 246; continue _fun00025 }
 152:
            verify = backup == kiloes;
            if(verify) { _fun00026_ip = 175; continue _fun00025 }
 159:
            michal = option.hasAfterCached;
            michal = michal.bind(option)(kiloes);
            verify = !michal;
 175:
            michal = !verify;
            if(verify) { _fun00026_ip = 244; continue _fun00025 }
 181:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 41;
            verify = romeon[verify];
            romeon = yankee.bind(zuuluu)(verify);
            yankee = romeon.dispatch;
            verify = {};
            sizing = 'LOAD_MESSAGES_SUCCESS_CACHED';
            verify['type'] = sizing;
            verify['channelId'] = golfie;
            verify['after'] = kiloes;
            verify['limit'] = report;
            verify['truncate'] = tangon;
            verify = yankee.bind(romeon)(verify);
            michal = true;
 244:
            _fun00026_ip = 309; continue _fun00025;
 246:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 41;
            verify = romeon[verify];
            romeon = yankee.bind(zuuluu)(verify);
            yankee = romeon.dispatch;
            verify = {};
            kiloes = 'LOAD_MESSAGES_SUCCESS_CACHED';
            verify['type'] = kiloes;
            verify['channelId'] = golfie;
            verify['before'] = foxtra;
            verify['limit'] = report;
            verify['truncate'] = tangon;
            verify = yankee.bind(romeon)(verify);
            michal = true;
 309:
            return michal;
 311:
            verify = backup == oscard;
            michal = undefined;
            if(verify) { _fun00026_ip = 325; continue _fun00025 }
 320:
            michal = oscard.messageId;
 325:
            if(!(backup != michal)) { _fun00026_ip = 353; continue _fun00025 }
 329:
            yankee = option.has;
            verify = oscard.messageId;
            michal = false;
            michal = yankee.bind(option)(verify, michal);
            if(michal) { _fun00026_ip = 860; continue _fun00025 }
 353:
            verify = backup == offset;
            michal = undefined;
            if(verify) { _fun00026_ip = 367; continue _fun00025 }
 362:
            michal = offset.messageId;
 367:
            romeon = oscard;
            if(!(backup != michal)) { _fun00026_ip = 413; continue _fun00025 }
 374:
            yankee = option.has;
            verify = offset.messageId;
            michal = false;
            michal = yankee.bind(option)(verify, michal);
            if(michal) { _fun00026_ip = 795; continue _fun00025 }
 398:
            michal = {};
            echoed = michal;
            result = offset;
            verify = copyDataProperties(echoed, result);
            romeon = michal;
 413:
            verify = backup == romeon;
            michal = undefined;
            if(verify) { _fun00026_ip = 427; continue _fun00025 }
 422:
            michal = romeon.messageId;
 427:
            michal = backup != michal;
            yankee = 0;
            if(!michal) { _fun00026_ip = 481; continue _fun00025 }
 436:
            verify = _closure1_slot1;
            foxtra = _closure1_slot2;
            michal = 51;
            michal = foxtra[michal];
            foxtra = verify.bind(zuuluu)(michal);
            verify = foxtra.extractTimestamp;
            kiloes = backup == romeon;
            michal = undefined;
            if(kiloes) { _fun00026_ip = 476; continue _fun00025 }
 471:
            michal = romeon.messageId;
 476:
            yankee = verify.bind(foxtra)(michal);
 481:
            michal = option.first;
            foxtra = michal.bind(option)();
            michal = option.last;
            verify = michal.bind(option)();
            michal = option.hasMoreBefore;
            michal = !michal;
            if(!michal) { _fun00026_ip = 517; continue _fun00025 }
 513:
            michal = backup != foxtra;
 517:
            if(!michal) { _fun00026_ip = 560; continue _fun00025 }
 520:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kiloes = 51;
            kiloes = output[kiloes];
            output = sizing.bind(zuuluu)(kiloes);
            sizing = output.extractTimestamp;
            kiloes = foxtra.id;
            kiloes = sizing.bind(output)(kiloes);
            michal = kiloes >= yankee;
 560:
            if(michal) { _fun00026_ip = 625; continue _fun00025 }
 563:
            option = option.hasMoreAfter;
            option = !option;
            if(!option) { _fun00026_ip = 579; continue _fun00025 }
 575:
            option = backup != verify;
 579:
            if(!option) { _fun00026_ip = 622; continue _fun00025 }
 582:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kiloes = 51;
            kiloes = output[kiloes];
            output = sizing.bind(zuuluu)(kiloes);
            sizing = output.extractTimestamp;
            kiloes = verify.id;
            kiloes = sizing.bind(output)(kiloes);
            option = kiloes <= yankee;
 622:
            michal = option;
 625:
            if(michal) { _fun00026_ip = 728; continue _fun00025 }
 628:
            option = backup != foxtra;
            if(!option) { _fun00026_ip = 639; continue _fun00025 }
 635:
            option = backup != verify;
 639:
            if(!option) { _fun00026_ip = 682; continue _fun00025 }
 642:
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 51;
            backup = sizing[backup];
            kiloes = kiloes.bind(zuuluu)(backup);
            backup = kiloes.extractTimestamp;
            foxtra = foxtra.id;
            foxtra = backup.bind(kiloes)(foxtra);
            option = foxtra < yankee;
 682:
            if(!option) { _fun00026_ip = 725; continue _fun00025 }
 685:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 51;
            foxtra = kiloes[foxtra];
            backup = backup.bind(zuuluu)(foxtra);
            foxtra = backup.extractTimestamp;
            verify = verify.id;
            verify = foxtra.bind(backup)(verify);
            option = verify > yankee;
 725:
            michal = option;
 728:
            if(!michal) { _fun00026_ip = 793; continue _fun00025 }
 731:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 41;
            option = yankee[option];
            yankee = verify.bind(zuuluu)(option);
            verify = yankee.dispatch;
            option = {};
            foxtra = 'LOAD_MESSAGES_SUCCESS_CACHED';
            option['type'] = foxtra;
            option['channelId'] = golfie;
            option['jump'] = romeon;
            romeon = _closure1_slot35;
            option['limit'] = romeon;
            option = verify.bind(yankee)(option);
            michal = true;
 793:
            return michal;
 795:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 41;
            michal = verify[michal];
            verify = option.bind(zuuluu)(michal);
            option = verify.dispatch;
            michal = {};
            yankee = 'LOAD_MESSAGES_SUCCESS_CACHED';
            michal['type'] = yankee;
            michal['channelId'] = golfie;
            michal['focus'] = offset;
            michal['limit'] = report;
            michal['truncate'] = tangon;
            michal = option.bind(verify)(michal);
            michal = true;
            return michal;
 860:
            michal = _closure1_slot1;
            option = _closure1_slot2;
            entity = 41;
            entity = option[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.dispatch;
            entity = {};
            option = 'LOAD_MESSAGES_SUCCESS_CACHED';
            entity['type'] = option;
            entity['channelId'] = golfie;
            entity['jump'] = oscard;
            entity['limit'] = report;
            entity['truncate'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = true;
            return entity;
 925:
            entity = false;
            return entity;
        }
    };
    michal['_tryFetchMessagesCached'] = option;
    option = function(argFoo, argBar) { // Original name: sendMessage
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tangon = arguments[2];
            zuuluu = arguments[3];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = undefined;
            if(!(tangon === michal)) { _fun00028_ip = 30; continue _fun00027 }
 28:
            tangon = true;
 30:
            var _closure2_slot2 = tangon;
            if(!(zuuluu === michal)) { _fun00028_ip = 40; continue _fun00027 }
 38:
            zuuluu = {};
 40:
            var _closure2_slot3 = zuuluu;
            zuuluu = _closure1_slot4;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00030_ip = 441; continue _fun00029 }
 12:
                        golfie = undefined;
                        var _closure4_slot0 = golfie;
                        michal = _closure2_slot1;
                        michal = michal.reaction;
                        if(michal) { _fun00030_ip = 420; continue _fun00029 }
 37:
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        michal = 55;
                        michal = oscard[michal];
                        report = report.bind(golfie)(michal);
                        michal = _closure2_slot0;
                        michal = report.bind(golfie)(michal);
                        SaveGenerator(address=73);
 71:
                        return michal;
 73:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00030_ip = 417; continue _fun00029 }
 82:
                        report = null;
                        if(!(report == michal)) { _fun00030_ip = 382; continue _fun00029 }
 91:
                        verify = _closure1_slot1;
                        offset = _closure1_slot2;
                        oscard = 56;
                        oscard = offset[oscard];
                        offset = verify.bind(golfie)(oscard);
                        verify = offset.backgroundify;
                        oscard = function() {
                            report = _closure1_slot51;
                            tangon = report._sendMessage;
                            zuuluu = _closure2_slot0;
                            michal = _closure2_slot1;
                            entity = _closure2_slot3;
                            entity = tangon.bind(report)(zuuluu, michal, entity);
                            return entity;
                        };
                        oscard = verify.bind(offset)(oscard, golfie);
                        _closure4_slot0 = oscard;
                        verify = _closure2_slot3;
                        yankee = verify.nonce;
                        if(!(report == yankee)) { _fun00030_ip = 176; continue _fun00029 }
 146:
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        report = 44;
                        report = offset[report];
                        verify = verify.bind(golfie)(report);
                        report = verify.createNonce;
                        yankee = report.bind(verify)();
 176:
                        report = {};
                        result = _closure2_slot3;
                        echoed = report;
                        verify = copyDataProperties(echoed, result);
                        verify = 'nonce';
                        report[verify] = yankee;
                        _closure2_slot3 = report;
                        verify = _closure1_slot10;
                        report = verify.recordMessageSendAttempt;
                        offset = _closure2_slot0;
                        report = report.bind(verify)(offset, yankee);
                        verify = _closure1_slot22;
                        report = verify.isReady;
                        report = report.bind(verify)(offset);
                        if(report) { _fun00030_ip = 375; continue _fun00029 }
 245:
                        report = _closure2_slot2;
                        if(!report) { _fun00030_ip = 286; continue _fun00029 }
 252:
                        verify = _closure2_slot0;
                        offset = _closure1_slot0;
                        yankee = _closure1_slot2;
                        report = 48;
                        report = yankee[report];
                        report = offset.bind(golfie)(report);
                        report = report.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        if(!(verify === report)) { _fun00030_ip = 292; continue _fun00029 }
 286:
                        report = oscard.bind(golfie)();
                        _fun00030_ip = 373; continue _fun00029;
 292:
                        romeon = _closure1_slot47;
                        yankee = romeon.info;
                        kiloes = _closure2_slot0;
                        verify = global;
                        offset = verify.HermesInternal;
                        backup = offset.concat;
                        foxtra = 'Waiting for channel ';
                        offset = ' to be ready before sending.';
                        offset = backup.bind(foxtra)(kiloes, offset);
                        offset = yankee.bind(romeon)(offset);
                        offset = verify.Promise;
                        verify = offset.prototype;
                        verify = Object.create(verify, {constructor: {value: offset}});
                        echoed = function(argFoo, argBar) {
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            michal = argBar;
                            var _closure5_slot1 = michal;
                            tangon = _closure1_slot22;
                            zuuluu = tangon.whenReady;
                            michal = _closure2_slot0;
                            entity = function() {
                                zuuluu = _closure1_slot47;
                                michal = zuuluu.info;
                                oscard = _closure2_slot0;
                                entity = global;
                                entity = entity.HermesInternal;
                                report = entity.concat;
                                tangon = 'Channel ';
                                entity = ' is ready for sending now.';
                                entity = report.bind(tangon)(oscard, entity);
                                entity = michal.bind(zuuluu)(entity);
                                michal = _closure4_slot0;
                                entity = undefined;
                                report = michal.bind(entity)();
                                tangon = report.then;
                                zuuluu = _closure5_slot0;
                                michal = _closure5_slot1;
                                michal = tangon.bind(report)(zuuluu, michal);
                                return entity;
                            };
                            entity = zuuluu.bind(tangon)(michal, entity);
                            entity = undefined;
                            return entity;
                        };
                        update = verify;
                        option = new update[offset](echoed, result);
                        report = option instanceof Object ? option : verify;
 373:
                        _fun00030_ip = 379; continue _fun00029;
 375:
                        report = oscard.bind(golfie)();
 379:
                        return report;
 382:
                        golfie = _closure1_slot51;
                        oscard = golfie.sendMessage;
                        result = _closure2_slot1;
                        output = _closure2_slot2;
                        sizing = _closure2_slot3;
                        update = golfie;
                        echoed = michal;
                        zuuluu = update[oscard](echoed, result, output, sizing, kiloes);
                        return zuuluu;
 417:
                        return michal;
 420:
                        michal = global;
                        zuuluu = michal.Promise;
                        michal = zuuluu.resolve;
                        michal = michal.bind(zuuluu)();
                        return michal;
 441:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['sendMessage'] = option;
    option = function(argFoo) { // Original name: getSendMessageOptionsForReply
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            if(!(michal != zuuluu)) { _fun00032_ip = 141; continue _fun00031 }
 12:
            entity = {};
            tangon = {};
            oscard = zuuluu.channel;
            report = oscard.getGuildId;
            oscard = report.bind(oscard)();
            golfie = michal != oscard;
            report = undefined;
            if(!golfie) { _fun00032_ip = 43; continue _fun00031 }
 40:
            report = oscard;
 43:
            tangon['guild_id'] = report;
            report = zuuluu.channel;
            report = report.id;
            tangon['channel_id'] = report;
            report = zuuluu.message;
            report = report.id;
            tangon['message_id'] = report;
            entity['messageReference'] = tangon;
            zuuluu = zuuluu.shouldMention;
            michal = undefined;
            if(zuuluu) { _fun00032_ip = 134; continue _fun00031 }
 92:
            zuuluu = {};
            tangon = global;
            oscard = tangon.Object;
            report = oscard.values;
            tangon = _closure1_slot37;
            tangon = report.bind(oscard)(tangon);
            zuuluu['parse'] = tangon;
            tangon = false;
            zuuluu['replied_user'] = tangon;
            michal = zuuluu;
 134:
            entity['allowedMentions'] = michal;
            _fun00032_ip = 143; continue _fun00031;
 141:
            entity = {};
 143:
            return entity;
        }
    };
    michal['getSendMessageOptionsForReply'] = option;
    option = function(argFoo) { // Original name: getSendMessageOptionsForConfettiPotion
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            michal = entity.channelId;
            var _closure2_slot0 = michal;
            option = entity.content;
            golfie = entity.isGif;
            oscard = entity.command;
            zuuluu = entity.uploads;
            report = entity.confettiPotionEmoji;
            entity = null;
            if(!(entity != report)) { _fun00034_ip = 104; continue _fun00033 }
 51:
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 57;
            michal = michal[entity];
            entity = undefined;
            michal = verify.bind(entity)(michal);
            entity = michal.canAddConfettiToMessageOnSend;
            backup = michal;
            foxtra = option;
            romeon = golfie;
            yankee = oscard;
            offset = zuuluu;
            entity = backup[entity](foxtra, romeon, yankee, offset, verify);
            if(entity) { _fun00034_ip = 108; continue _fun00033 }
 104:
            entity = {};
            _fun00034_ip = 135; continue _fun00033;
 108:
            michal = {};
            zuuluu = {};
            zuuluu['emoji'] = report;
            tangon = function() { // Original name: callback
                zuuluu = _closure1_slot12;
                michal = _closure2_slot0;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu['callback'] = tangon;
            michal['confettiPotionData'] = zuuluu;
            entity = michal;
 135:
            return entity;
        }
    };
    michal['getSendMessageOptionsForConfettiPotion'] = option;
    option = function(argFoo) { // Original name: getSendMessageOptionsForStickers
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            michal = argFoo;
            entity = michal.isGif;
            michal = michal.stickers;
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00036_ip = 44; continue _fun00035 }
 21:
            tangon = michal.length;
            zuuluu = 0;
            if(!(zuuluu !== tangon)) { _fun00036_ip = 44; continue _fun00035 }
 32:
            if(entity) { _fun00036_ip = 44; continue _fun00035 }
 35:
            entity = {};
            entity['stickerIds'] = michal;
            _fun00036_ip = 46; continue _fun00035;
 44:
            entity = {};
 46:
            return entity;
        }
    };
    michal['getSendMessageOptionsForStickers'] = option;
    option = function(argFoo) { // Original name: getSendMessageOptionsForScheduledMessage
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            michal = entity.scheduledTimestamp;
            entity = null;
            if(!(entity != michal)) { _fun00038_ip = 24; continue _fun00037 }
 15:
            entity = {};
            entity['scheduledTimestamp'] = michal;
            _fun00038_ip = 26; continue _fun00037;
 24:
            entity = {};
 26:
            return entity;
        }
    };
    michal['getSendMessageOptionsForScheduledMessage'] = option;
    option = function(argFoo) { // Original name: getSendMessageOptions
        report = argFoo;
        entity = {};
        oscard = _closure1_slot51;
        tangon = oscard.getSendMessageOptionsForReply;
        zuuluu = report.pendingReply;
        option = tangon.bind(oscard)(zuuluu);
        verify = entity;
        zuuluu = copyDataProperties(verify, option);
        oscard = _closure1_slot51;
        tangon = oscard.getSendMessageOptionsForConfettiPotion;
        zuuluu = {};
        verify = zuuluu;
        option = report;
        golfie = copyDataProperties(verify, option);
        option = tangon.bind(oscard)(zuuluu);
        verify = entity;
        zuuluu = copyDataProperties(verify, option);
        oscard = _closure1_slot51;
        tangon = oscard.getSendMessageOptionsForStickers;
        zuuluu = {};
        verify = zuuluu;
        option = report;
        golfie = copyDataProperties(verify, option);
        option = tangon.bind(oscard)(zuuluu);
        verify = entity;
        zuuluu = copyDataProperties(verify, option);
        tangon = _closure1_slot51;
        zuuluu = tangon.getSendMessageOptionsForScheduledMessage;
        michal = {};
        verify = michal;
        option = report;
        report = copyDataProperties(verify, option);
        option = zuuluu.bind(tangon)(michal);
        verify = entity;
        michal = copyDataProperties(verify, option);
        return entity;
    };
    michal['getSendMessageOptions'] = option;
    option = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: sendInvite
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            oscard = argCor;
            offset = argGra;
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 58;
            michal = michal[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(michal);
            michal = argBar;
            verify = tangon.bind(entity)(michal);
            golfie = null;
            michal = verify;
            if(!(golfie != offset)) { _fun00040_ip = 76; continue _fun00039 }
 48:
            tangon = global;
            tangon = tangon.HermesInternal;
            option = tangon.concat;
            report = '';
            tangon = '\n';
            michal = option.bind(report)(offset, tangon, verify);
 76:
            report = _closure1_slot51;
            tangon = report._sendMessage;
            zuuluu = {};
            zuuluu['content'] = michal;
            michal = false;
            zuuluu['tts'] = michal;
            michal = new Array(0);
            zuuluu['validNonShortcutEmojis'] = michal;
            michal = new Array(0);
            zuuluu['invalidEmojis'] = michal;
            michal = {};
            option = argBaz;
            michal['location'] = option;
            golfie = golfie != oscard;
            entity = undefined;
            if(!golfie) { _fun00040_ip = 138; continue _fun00039 }
 135:
            entity = oscard;
 138:
            michal['suggestedInvite'] = entity;
            entity = argFoo;
            entity = tangon.bind(report)(entity, zuuluu, michal);
            return entity;
        }
    };
    michal['sendInvite'] = option;
    option = function(argFoo, argBar, argBaz, argCor) { // Original name: sendActivityBookmark
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            oscard = argCor;
            report = _closure1_slot51;
            tangon = report._sendMessage;
            zuuluu = {};
            entity = argBar;
            zuuluu['content'] = entity;
            entity = false;
            zuuluu['tts'] = entity;
            entity = new Array(0);
            zuuluu['validNonShortcutEmojis'] = entity;
            entity = new Array(0);
            zuuluu['invalidEmojis'] = entity;
            michal = {};
            entity = argBaz;
            michal['location'] = entity;
            entity = null;
            golfie = entity != oscard;
            entity = undefined;
            if(!golfie) { _fun00042_ip = 73; continue _fun00041 }
 70:
            entity = oscard;
 73:
            michal['suggestedInvite'] = entity;
            entity = argFoo;
            entity = tangon.bind(report)(entity, zuuluu, michal);
            return entity;
        }
    };
    michal['sendActivityBookmark'] = option;
    option = function(argFoo, argBar) { // Original name: sendStickers
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            oscard = arguments[2];
            entity = arguments[3];
            michal = arguments[4];
            zuuluu = undefined;
            if(!(oscard === zuuluu)) { _fun00044_ip = 19; continue _fun00043 }
 15:
            oscard = '';
 19:
            if(!(entity === zuuluu)) { _fun00044_ip = 25; continue _fun00043 }
 23:
            entity = {};
 25:
            if(!(michal === zuuluu)) { _fun00044_ip = 31; continue _fun00043 }
 29:
            michal = false;
 31:
            report = _closure1_slot51;
            tangon = report._sendMessage;
            zuuluu = {};
            zuuluu['content'] = oscard;
            oscard = new Array(0);
            zuuluu['invalidEmojis'] = oscard;
            oscard = new Array(0);
            zuuluu['validNonShortcutEmojis'] = oscard;
            zuuluu['tts'] = michal;
            michal = {};
            verify = michal;
            option = entity;
            entity = copyDataProperties(verify, option);
            oscard = argBar;
            entity = 'stickerIds';
            michal[entity] = oscard;
            entity = argFoo;
            entity = tangon.bind(report)(entity, zuuluu, michal);
            return entity;
        }
    };
    michal['sendStickers'] = option;
    option = function(argFoo, argBar) { // Original name: sendGreetMessage
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            offset = argFoo;
            verify = argBar;
            michal = arguments[2];
            var _closure2_slot0 = offset;
            var _closure2_slot1 = verify;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00046_ip = 27; continue _fun00045 }
 25:
            michal = {};
 27:
            oscard = michal.messageReference;
            golfie = michal.allowedMentions;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 46;
            michal = option[michal];
            michal = zuuluu.bind(tangon)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.post;
            michal = {};
            option = _closure1_slot29;
            report = option.MESSAGES_GREET;
            report = report.bind(option)(offset);
            michal['url'] = report;
            report = {};
            option = new Array(1);
            option[0] = verify;
            report['sticker_ids'] = option;
            report['allowed_mentions'] = golfie;
            report['message_reference'] = oscard;
            michal['body'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            report = false;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                entity = argFoo;
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 59;
                report = oscard[zuuluu];
                zuuluu = undefined;
                offset = tangon.bind(zuuluu)(report);
                option = offset.donateSentMessage;
                report = entity.body;
                golfie = report.content;
                verify = _closure2_slot0;
                golfie = option.bind(offset)(golfie, verify);
                option = _closure1_slot51;
                golfie = option.receiveMessage;
                michal = entity.body;
                michal = golfie.bind(option)(verify, michal);
                michal = 41;
                michal = oscard[michal];
                tangon = tangon.bind(zuuluu)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                oscard = 'STICKER_TRACK_USAGE';
                michal['type'] = oscard;
                oscard = _closure2_slot1;
                report = new Array(1);
                report[0] = oscard;
                michal['stickerIds'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = function(argFoo) {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot46;
                    tangon = report.log;
                    zuuluu = 'Failed to send greeting';
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = entity.status;
                    zuuluu = 429;
                    if(!(zuuluu !== tangon)) { _fun00048_ip = 75; continue _fun00047 }
 42:
                    oscard = _closure1_slot51;
                    report = oscard.sendClydeError;
                    tangon = _closure2_slot0;
                    zuuluu = entity.body;
                    zuuluu = zuuluu.code;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
 75:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 41;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'MESSAGE_SEND_FAILED';
                    michal['type'] = report;
                    report = entity.body;
                    report = report.id;
                    michal['messageId'] = report;
                    report = _closure2_slot0;
                    michal['channelId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    throw entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal['sendGreetMessage'] = option;
    option = function(argFoo, argBar) { // Original name: sendPollMessage
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = arguments[2];
            michal = undefined;
            if(!(entity === michal)) { _fun00050_ip = 11; continue _fun00049 }
 9:
            entity = {};
 11:
            report = _closure1_slot51;
            tangon = report._sendMessage;
            zuuluu = {'content': '', 'tts': false};
            michal = new Array(0);
            zuuluu['validNonShortcutEmojis'] = michal;
            michal = new Array(0);
            zuuluu['invalidEmojis'] = michal;
            michal = {};
            verify = michal;
            option = entity;
            entity = copyDataProperties(verify, option);
            oscard = argBar;
            entity = 'poll';
            michal[entity] = oscard;
            entity = argFoo;
            entity = tangon.bind(report)(entity, zuuluu, michal);
            return entity;
        }
    };
    michal['sendPollMessage'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: validateMessage
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.some;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.animated;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            if(!entity) { _fun00052_ip = 131; continue _fun00051 }
 24:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 60;
            michal = tangon[michal];
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.canUseAnimatedEmojis;
            michal = argBar;
            michal = zuuluu.bind(tangon)(michal);
            if(michal) { _fun00052_ip = 131; continue _fun00051 }
 66:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 39;
            michal = oscard[entity];
            michal = tangon.bind(report)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.t;
            entity = entity.V5/GgI;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = 'INVALID_ANIMATED_EMOJI_BODY';
            _fun00052_ip = 199; continue _fun00051;
 131:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 39;
            tangon = option[entity];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            entity = option[entity];
            entity = golfie.bind(oscard)(entity);
            entity = entity.t;
            entity = entity.Q87rIy;
            zuuluu = tangon.bind(report)(entity);
            michal = 'INVALID_EXTERNAL_EMOJI_BODY';
 199:
            entity = {};
            entity['errorMessage'] = zuuluu;
            entity['errorMessageName'] = michal;
            return entity;
        }
    };
    michal['validateMessage'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: _sendMessage
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00054_ip = 1560; continue _fun00053 }
 12:
                    oscard = undefined;
                    var _closure4_slot0 = oscard;
                    var _closure4_slot1 = oscard;
                    var _closure4_slot2 = oscard;
                    var _closure4_slot3 = oscard;
                    var _closure4_slot4 = oscard;
                    var _closure4_slot5 = oscard;
                    var _closure4_slot6 = oscard;
                    var _closure4_slot7 = oscard;
                    var _closure4_slot8 = oscard;
                    var _closure4_slot9 = oscard;
                    var _closure4_slot10 = oscard;
                    var _closure4_slot11 = oscard;
                    var _closure4_slot12 = oscard;
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 55;
                    tangon = golfie[tangon];
                    report = report.bind(oscard)(tangon);
                    tangon = _closure2_slot0;
                    tangon = report.bind(oscard)(tangon);
                    option = null;
                    if(!(option == tangon)) { _fun00054_ip = 1521; continue _fun00053 }
 110:
                    report = _closure2_slot1;
                    foxtra = report.content;
                    _closure4_slot0 = foxtra;
                    cntext = report.invalidEmojis;
                    golfie = report.validNonShortcutEmojis;
                    _closure4_slot1 = golfie;
                    report = report.tts;
                    sequen = oscard !== report;
                    if(!sequen) { _fun00054_ip = 155; continue _fun00053 }
 152:
                    sequen = report;
 155:
                    golfie = _closure2_slot2;
                    report = golfie.activityAction;
                    verify = golfie.location;
                    _closure4_slot2 = verify;
                    verify = golfie.suggestedInvite;
                    _closure4_slot3 = verify;
                    result = golfie.stickerIds;
                    _closure4_slot4 = result;
                    romeon = golfie.confettiPotionData;
                    vacuum = golfie.messageReference;
                    _closure4_slot5 = vacuum;
                    ctrled = golfie.allowedMentions;
                    echoed = golfie.poll;
                    _closure4_slot6 = echoed;
                    output = golfie.contentInventoryEntry;
                    _closure4_slot7 = output;
                    yankee = golfie.attachments;
                    backup = golfie.attachmentsToUpload;
                    golfie = golfie.flags;
                    verify = option != golfie;
                    offset = 0;
                    update = 0;
                    if(!verify) { _fun00054_ip = 269; continue _fun00053 }
 266:
                    update = golfie;
 269:
                    verify = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    golfie = 61;
                    golfie = kiloes[golfie];
                    golfie = verify.bind(oscard)(golfie);
                    kiloes = golfie.bind(oscard)(foxtra);
                    verify = _closure1_slot3;
                    golfie = 2;
                    kiloes = verify.bind(oscard)(kiloes, golfie);
                    golfie = kiloes[offset];
                    verify = 1;
                    verify = kiloes[verify];
                    config = foxtra;
                    source = update;
                    if(!golfie) { _fun00054_ip = 376; continue _fun00053 }
 327:
                    _closure4_slot0 = verify;
                    foxtra = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    golfie = 62;
                    golfie = kiloes[golfie];
                    kiloes = foxtra.bind(oscard)(golfie);
                    foxtra = kiloes.addFlag;
                    golfie = _closure1_slot34;
                    golfie = golfie.SUPPRESS_NOTIFICATIONS;
                    source = foxtra.bind(kiloes)(update, golfie);
                    config = verify;
 376:
                    golfie = _closure2_slot2;
                    golfie = golfie.messageReference;
                    foxtra = option == golfie;
                    verify = undefined;
                    if(foxtra) { _fun00054_ip = 400; continue _fun00053 }
 395:
                    verify = golfie.type;
 400:
                    golfie = _closure1_slot40;
                    golfie = golfie.FORWARD;
                    golfie = verify === golfie;
                    _closure4_slot8 = golfie;
                    update = false;
                    foxtra = '';
                    verify = false;
                    if(!(foxtra === config)) { _fun00054_ip = 525; continue _fun00053 }
 430:
                    foxtra = option == report;
                    verify = false;
                    if(!foxtra) { _fun00054_ip = 525; continue _fun00053 }
 439:
                    foxtra = option == result;
                    verify = false;
                    if(!foxtra) { _fun00054_ip = 525; continue _fun00053 }
 448:
                    foxtra = option == echoed;
                    verify = false;
                    if(!foxtra) { _fun00054_ip = 525; continue _fun00053 }
 457:
                    foxtra = option == output;
                    verify = false;
                    if(!foxtra) { _fun00054_ip = 525; continue _fun00053 }
 466:
                    verify = false;
                    if(golfie) { _fun00054_ip = 525; continue _fun00053 }
 471:
                    if(!(option != yankee)) { _fun00054_ip = 486; continue _fun00053 }
 475:
                    golfie = yankee.length;
                    verify = false;
                    if(!(offset === golfie)) { _fun00054_ip = 525; continue _fun00053 }
 486:
                    if(!(option != backup)) { _fun00054_ip = 504; continue _fun00053 }
 490:
                    golfie = backup.length;
                    golfie = golfie > offset;
                    verify = true;
                    if(golfie) { _fun00054_ip = 525; continue _fun00053 }
 504:
                    golfie = global;
                    foxtra = golfie.Promise;
                    golfie = foxtra.resolve;
                    golfie = golfie.bind(foxtra)();
                    return golfie;
 525:
                    if(!(option == vacuum)) { _fun00054_ip = 541; continue _fun00053 }
 529:
                    golfie = _closure1_slot36;
                    record = golfie.DEFAULT;
                    _fun00054_ip = 551; continue _fun00053;
 541:
                    golfie = _closure1_slot36;
                    record = golfie.REPLY;
 551:
                    _closure4_slot9 = record;
                    golfie = _closure2_slot2;
                    kiloes = golfie.nonce;
                    if(!(option == kiloes)) { _fun00054_ip = 599; continue _fun00053 }
 569:
                    foxtra = _closure1_slot0;
                    papara = _closure1_slot2;
                    golfie = 44;
                    golfie = papara[golfie];
                    foxtra = foxtra.bind(oscard)(golfie);
                    golfie = foxtra.createNonce;
                    kiloes = golfie.bind(foxtra)();
 599:
                    _closure4_slot10 = kiloes;
                    _closure4_slot11 = kiloes;
                    golfie = _closure2_slot2;
                    golfie = golfie.eagerDispatch;
                    foxtra = undefined;
                    if(!(update !== golfie)) { _fun00054_ip = 844; continue _fun00053 }
 626:
                    update = _closure1_slot1;
                    papara = _closure1_slot2;
                    golfie = 42;
                    golfie = papara[golfie];
                    update = update.bind(oscard)(golfie);
                    golfie = {};
                    papara = _closure2_slot0;
                    golfie['channelId'] = papara;
                    golfie['content'] = config;
                    golfie['tts'] = sequen;
                    golfie['type'] = record;
                    golfie['messageReference'] = vacuum;
                    golfie['allowedMentions'] = ctrled;
                    record = undefined;
                    if(!(offset !== source)) { _fun00054_ip = 688; continue _fun00053 }
 685:
                    record = source;
 688:
                    golfie['flags'] = record;
                    golfie['nonce'] = kiloes;
                    record = _closure1_slot0;
                    papara = _closure1_slot2;
                    target = 63;
                    target = papara[target];
                    status = record.bind(oscard)(target);
                    target = status.createPollServerDataFromCreateRequest;
                    target = target.bind(status)(echoed);
                    golfie['poll'] = target;
                    golfie = update.bind(oscard)(golfie);
                    update = 64;
                    update = papara[update];
                    target = record.bind(oscard)(update);
                    papara = target.updateComboOnMessageSend;
                    record = _closure2_slot0;
                    update = golfie.id;
                    update = papara.bind(target)(record, update);
                    if(!(option != result)) { _fun00054_ip = 811; continue _fun00053 }
 775:
                    record = result.map;
                    update = function(argFoo) {
                        zuuluu = _closure1_slot16;
                        michal = zuuluu.getStickerById;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    papara = record.bind(result)(update);
                    record = papara.filter;
                    update = function(argFoo) {
                        michal = null;
                        entity = argFoo;
                        entity = michal != entity;
                        return entity;
                    };
                    update = record.bind(papara)(update);
                    golfie['sticker_items'] = update;
 811:
                    status = _closure1_slot51;
                    target = status.receiveMessage;
                    equals = _closure2_slot0;
                    sierra = _closure2_slot2;
                    limora = true;
                    quebec = status;
                    whisks = golfie;
                    update = quebec[target](equals, whisks, limora, sierra, status);
                    foxtra = golfie;
 844:
                    golfie = _closure1_slot48;
                    if(golfie) { _fun00054_ip = 933; continue _fun00053 }
 851:
                    if(!(option != cntext)) { _fun00054_ip = 933; continue _fun00053 }
 855:
                    golfie = cntext.length;
                    if(!(golfie > offset)) { _fun00054_ip = 933; continue _fun00053 }
 864:
                    golfie = true;
                    _closure1_slot48 = golfie;
                    update = _closure1_slot26;
                    golfie = update.getCurrentUser;
                    record = golfie.bind(update)();
                    update = _closure1_slot51;
                    golfie = update.validateMessage;
                    papara = _closure2_slot0;
                    golfie = golfie.bind(update)(cntext, record, papara);
                    cntext = golfie.errorMessage;
                    record = golfie.errorMessageName;
                    update = _closure1_slot51;
                    golfie = update.sendBotMessage;
                    golfie = golfie.bind(update)(papara, cntext, record);
 933:
                    golfie = {};
                    record = _closure1_slot0;
                    cntext = _closure1_slot2;
                    update = 65;
                    update = cntext[update];
                    update = record.bind(oscard)(update);
                    update = update.MessageDataType;
                    update = update.SEND;
                    golfie['type'] = update;
                    update = {};
                    record = _closure2_slot0;
                    update['channelId'] = record;
                    update['content'] = config;
                    update['nonce'] = kiloes;
                    update['tts'] = sequen;
                    update['message_reference'] = vacuum;
                    update['allowed_mentions'] = ctrled;
                    update['flags'] = source;
                    golfie['message'] = update;
                    _closure4_slot12 = golfie;
                    if(!(option != report)) { _fun00054_ip = 1190; continue _fun00053 }
 1024:
                    source = option == report;
                    update = undefined;
                    if(source) { _fun00054_ip = 1045; continue _fun00053 }
 1033:
                    source = report.activity;
                    update = source.session_id;
 1045:
                    vacuum = report.type;
                    source = _closure1_slot44;
                    ctrled = source.JOIN_REQUEST;
                    source = update;
                    if(!(vacuum !== ctrled)) { _fun00054_ip = 1088; continue _fun00053 }
 1067:
                    source = update;
                    if(!(option == source)) { _fun00054_ip = 1088; continue _fun00053 }
 1074:
                    ctrled = _closure1_slot18;
                    update = ctrled.getSessionId;
                    source = update.bind(ctrled)();
 1088:
                    if(!(option != source)) { _fun00054_ip = 1190; continue _fun00053 }
 1092:
                    update = {};
                    ctrled = report.type;
                    update['type'] = ctrled;
                    update['session_id'] = source;
                    report = report.activity;
                    source = report.party;
                    source = option != source;
                    if(!source) { _fun00054_ip = 1142; continue _fun00053 }
 1127:
                    ctrled = report.party;
                    ctrled = ctrled.id;
                    source = option != ctrled;
 1142:
                    if(!source) { _fun00054_ip = 1162; continue _fun00053 }
 1145:
                    source = report.party;
                    source = source.id;
                    update['party_id'] = source;
 1162:
                    source = golfie.message;
                    report = report.application_id;
                    source['application_id'] = report;
                    report = golfie.message;
                    report['activity'] = update;
 1190:
                    if(!(option != echoed)) { _fun00054_ip = 1205; continue _fun00053 }
 1194:
                    report = golfie.message;
                    report['poll'] = echoed;
 1205:
                    if(!(option != result)) { _fun00054_ip = 1220; continue _fun00053 }
 1209:
                    report = golfie.message;
                    report['sticker_ids'] = result;
 1220:
                    result = _closure1_slot11;
                    report = result.isEnabled;
                    report = report.bind(result)();
                    if(!report) { _fun00054_ip = 1252; continue _fun00053 }
 1237:
                    result = golfie.message;
                    report = true;
                    result['has_poggermode_enabled'] = report;
 1252:
                    if(!(option != output)) { _fun00054_ip = 1267; continue _fun00053 }
 1256:
                    report = golfie.message;
                    report['content_inventory_entry'] = output;
 1267:
                    if(!(option != romeon)) { _fun00054_ip = 1325; continue _fun00053 }
 1271:
                    output = golfie.message;
                    result = _closure1_slot0;
                    echoed = _closure1_slot2;
                    report = 57;
                    report = echoed[report];
                    result = result.bind(oscard)(report);
                    report = result.constructCreateConfettiPotionRequest;
                    report = report.bind(result)(romeon);
                    output['confetti_potion'] = report;
                    report = romeon.callback;
                    report = report.bind(romeon)();
 1325:
                    report = option != yankee;
                    if(!report) { _fun00054_ip = 1341; continue _fun00053 }
 1332:
                    romeon = yankee.length;
                    report = romeon > offset;
 1341:
                    if(!report) { _fun00054_ip = 1355; continue _fun00053 }
 1344:
                    report = golfie.message;
                    report['attachments'] = yankee;
 1355:
                    if(!(option != backup)) { _fun00054_ip = 1479; continue _fun00053 }
 1359:
                    report = backup.length;
                    if(!(report > offset)) { _fun00054_ip = 1479; continue _fun00053 }
 1368:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    report = 66;
                    report = romeon[report];
                    romeon = yankee.bind(oscard)(report);
                    yankee = romeon.uploadMessageAttachments;
                    report = {};
                    sizing = _closure2_slot0;
                    report['channelId'] = sizing;
                    report['nonce'] = kiloes;
                    report['items'] = backup;
                    report['message'] = foxtra;
                    report = yankee.bind(romeon)(report);
                    SaveGenerator(address=1427);
 1425:
                    return report;
 1427:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                    if(yankee) { _fun00054_ip = 1518; continue _fun00053 }
 1433:
                    if(!verify) { _fun00054_ip = 1449; continue _fun00053 }
 1436:
                    if(!(option != report)) { _fun00054_ip = 1515; continue _fun00053 }
 1440:
                    verify = report.length;
                    if(!(offset !== verify)) { _fun00054_ip = 1515; continue _fun00053 }
 1449:
                    if(!(option != report)) { _fun00054_ip = 1479; continue _fun00053 }
 1453:
                    option = golfie.message;
                    verify = report.map;
                    golfie = function(argFoo, argBar) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 67;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.getAttachmentPayload;
                        michal = argFoo;
                        entity = argBar;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    golfie = verify.bind(report)(golfie);
                    option['attachments'] = golfie;
 1479:
                    golfie = global;
                    verify = golfie.Promise;
                    golfie = verify.prototype;
                    option = Object.create(golfie, {constructor: {value: verify}});
                    equals = function(argFoo, argBar) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        entity = argBar;
                        var _closure5_slot1 = entity;
                        golfie = global;
                        zuuluu = golfie.Date;
                        entity = zuuluu.now;
                        entity = entity.bind(zuuluu)();
                        var _closure5_slot2 = entity;
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 65;
                        oscard = report[zuuluu];
                        entity = undefined;
                        oscard = tangon.bind(entity)(oscard);
                        oscard = oscard.length;
                        var _closure5_slot3 = oscard;
                        offset = golfie.Math;
                        verify = offset.floor;
                        yankee = golfie.Math;
                        oscard = yankee.random;
                        yankee = oscard.bind(yankee)();
                        oscard = 10000;
                        oscard = oscard * yankee;
                        oscard = verify.bind(offset)(oscard);
                        verify = _closure1_slot47;
                        option = verify.info;
                        golfie = golfie.HermesInternal;
                        offset = golfie.concat;
                        golfie = 'Queueing message to be sent LogId:';
                        golfie = offset.bind(golfie)(oscard);
                        golfie = option.bind(verify)(golfie);
                        zuuluu = report[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.enqueue;
                        zuuluu = _closure4_slot12;
                        michal = function(argFoo) {
                            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                                zuuluu = argFoo;
                                entity = global;
                                michal = entity.Date;
                                entity = michal.now;
                                tangon = entity.bind(michal)();
                                michal = _closure5_slot2;
                                kiloes = tangon - michal;
                                michal = zuuluu.ok;
                                if(michal) { _fun00056_ip = 947; continue _fun00055 }
 48:
                                verify = _closure1_slot46;
                                option = verify.log;
                                oscard = {};
                                michal = zuuluu.hasErr;
                                oscard['hasErr'] = michal;
                                michal = zuuluu.status;
                                oscard['status'] = michal;
                                offset = zuuluu.body;
                                golfie = null;
                                yankee = golfie == offset;
                                tangon = undefined;
                                michal = undefined;
                                if(yankee) { _fun00056_ip = 103; continue _fun00055 }
 98:
                                michal = offset.code;
 103:
                                oscard['code'] = michal;
                                michal = zuuluu.err;
                                oscard['error'] = michal;
                                michal = 'Failed to send message';
                                michal = option.bind(verify)(michal, oscard);
                                michal = zuuluu.hasErr;
                                if(michal) { _fun00056_ip = 658; continue _fun00055 }
 141:
                                oscard = zuuluu.status;
                                michal = 400;
                                option = oscard >= michal;
                                michal = false;
                                if(!option) { _fun00056_ip = 683; continue _fun00055 }
 164:
                                verify = zuuluu.status;
                                option = 500;
                                option = verify < option;
                                michal = false;
                                if(!option) { _fun00056_ip = 683; continue _fun00055 }
 187:
                                option = zuuluu.body;
                                michal = false;
                                if(!option) { _fun00056_ip = 683; continue _fun00055 }
 200:
                                option = zuuluu.body;
                                verify = option.code;
                                option = _closure1_slot27;
                                option = option.SLOWMODE_RATE_LIMITED;
                                if(!(verify !== option)) { _fun00056_ip = 521; continue _fun00055 }
 227:
                                verify = _closure1_slot0;
                                offset = _closure1_slot2;
                                option = 74;
                                option = offset[option];
                                option = verify.bind(tangon)(option);
                                offset = option.AUTOMOD_ERROR_CODES;
                                verify = offset.has;
                                option = zuuluu.body;
                                option = option.code;
                                option = verify.bind(offset)(option);
                                if(option) { _fun00056_ip = 427; continue _fun00055 }
 279:
                                option = zuuluu.body;
                                verify = option.code;
                                option = _closure1_slot27;
                                option = option.POGGERMODE_TEMPORARILY_DISABLED;
                                if(!(verify !== option)) { _fun00056_ip = 380; continue _fun00055 }
 303:
                                option = _closure4_slot6;
                                option = golfie != option;
                                if(option) { _fun00056_ip = 321; continue _fun00055 }
 317:
                                option = _closure4_slot8;
 321:
                                if(option) { _fun00056_ip = 332; continue _fun00055 }
 324:
                                verify = _closure4_slot7;
                                option = golfie != verify;
 332:
                                michal = false;
                                if(option) { _fun00056_ip = 683; continue _fun00055 }
 340:
                                yankee = _closure1_slot51;
                                offset = yankee.sendClydeError;
                                verify = _closure2_slot0;
                                option = zuuluu.body;
                                option = option.code;
                                option = offset.bind(yankee)(verify, option);
                                michal = false;
                                _fun00056_ip = 683; continue _fun00055;
 380:
                                verify = _closure1_slot1;
                                offset = _closure1_slot2;
                                option = 41;
                                option = offset[option];
                                offset = verify.bind(tangon)(option);
                                verify = offset.dispatch;
                                option = {};
                                yankee = 'POGGERMODE_TEMPORARILY_DISABLED';
                                option['type'] = yankee;
                                option = verify.bind(offset)(option);
                                michal = false;
                                _fun00056_ip = 683; continue _fun00055;
 427:
                                verify = _closure1_slot1;
                                offset = _closure1_slot2;
                                option = 41;
                                option = offset[option];
                                offset = verify.bind(tangon)(option);
                                verify = offset.dispatch;
                                option = {};
                                yankee = 'MESSAGE_SEND_FAILED_AUTOMOD';
                                option['type'] = yankee;
                                yankee = _closure4_slot12;
                                option['messageData'] = yankee;
                                yankee = {};
                                romeon = zuuluu.body;
                                romeon = romeon.code;
                                yankee['code'] = romeon;
                                romeon = zuuluu.body;
                                romeon = romeon.message;
                                yankee['message'] = romeon;
                                option['errorResponseBody'] = yankee;
                                option = verify.bind(offset)(option);
                                michal = false;
                                _fun00056_ip = 683; continue _fun00055;
 521:
                                option = zuuluu.body;
                                yankee = option.retry_after;
                                golfie = golfie != yankee;
                                if(!golfie) { _fun00056_ip = 545; continue _fun00055 }
 539:
                                option = 0;
                                golfie = yankee > option;
 545:
                                michal = false;
                                if(!golfie) { _fun00056_ip = 683; continue _fun00055 }
 553:
                                romeon = _closure1_slot1;
                                backup = _closure1_slot2;
                                golfie = 41;
                                golfie = backup[golfie];
                                verify = romeon.bind(tangon)(golfie);
                                option = verify.dispatch;
                                golfie = {};
                                offset = 'SLOWMODE_SET_COOLDOWN';
                                golfie['type'] = offset;
                                offset = _closure2_slot0;
                                golfie['channelId'] = offset;
                                offset = _closure1_slot25;
                                offset = offset.SendMessage;
                                golfie['slowmodeType'] = offset;
                                offset = 73;
                                offset = backup[offset];
                                offset = romeon.bind(tangon)(offset);
                                offset = offset.Millis;
                                offset = offset.SECOND;
                                offset = yankee * offset;
                                golfie['cooldownMs'] = offset;
                                golfie = option.bind(verify)(golfie);
                                michal = false;
                                _fun00056_ip = 683; continue _fun00055;
 658:
                                oscard = zuuluu.err;
                                golfie = oscard.code;
                                michal = false;
                                oscard = 'ABORTED';
                                if(!(oscard === golfie)) { _fun00056_ip = 683; continue _fun00055 }
 681:
                                michal = true;
 683:
                                if(michal) { _fun00056_ip = 900; continue _fun00055 }
 689:
                                oscard = _closure1_slot1;
                                option = _closure1_slot2;
                                michal = 41;
                                michal = option[michal];
                                verify = oscard.bind(tangon)(michal);
                                golfie = verify.dispatch;
                                oscard = {};
                                michal = 'MESSAGE_SEND_FAILED';
                                oscard['type'] = michal;
                                michal = _closure4_slot11;
                                oscard['messageId'] = michal;
                                offset = _closure2_slot0;
                                oscard['channelId'] = offset;
                                offset = _closure2_slot2;
                                offset = offset.doNotNotifyOnError;
                                offset = !offset;
                                oscard['shouldNotify'] = offset;
                                oscard = golfie.bind(verify)(oscard);
                                golfie = _closure1_slot0;
                                oscard = 75;
                                oscard = option[oscard];
                                option = golfie.bind(tangon)(oscard);
                                golfie = option.logMessageSendFailure;
                                oscard = {};
                                offset = zuuluu.hasErr;
                                verify = undefined;
                                if(offset) { _fun00056_ip = 809; continue _fun00055 }
 804:
                                verify = zuuluu.status;
 809:
                                oscard['failureCode'] = verify;
                                offset = zuuluu.hasErr;
                                verify = undefined;
                                if(!offset) { _fun00056_ip = 836; continue _fun00055 }
 825:
                                offset = zuuluu.err;
                                verify = offset.message;
 836:
                                oscard['errorMessage'] = verify;
                                oscard = golfie.bind(option)(oscard);
                                golfie = _closure1_slot1;
                                option = _closure1_slot2;
                                oscard = 65;
                                oscard = option[oscard];
                                golfie = golfie.bind(tangon)(oscard);
                                oscard = golfie.cancelPendingSendRequests;
                                michal = _closure2_slot0;
                                golfie = oscard.bind(golfie)(michal);
                                oscard = golfie.forEach;
                                michal = function(argFoo) {
                                    report = argFoo;
                                    oscard = _closure1_slot46;
                                    tangon = oscard.log;
                                    zuuluu = report.nonce;
                                    michal = 'Cancelling pending message';
                                    michal = tangon.bind(oscard)(michal, zuuluu);
                                    zuuluu = _closure1_slot1;
                                    michal = _closure1_slot2;
                                    entity = 41;
                                    michal = michal[entity];
                                    entity = undefined;
                                    tangon = zuuluu.bind(entity)(michal);
                                    zuuluu = tangon.dispatch;
                                    michal = {};
                                    oscard = 'MESSAGE_SEND_FAILED';
                                    michal['type'] = oscard;
                                    oscard = report.nonce;
                                    michal['messageId'] = oscard;
                                    report = report.channelId;
                                    michal['channelId'] = report;
                                    michal = zuuluu.bind(tangon)(michal);
                                    return entity;
                                };
                                michal = oscard.bind(golfie)(michal);
                                _fun00056_ip = 933; continue _fun00055;
 900:
                                verify = _closure1_slot51;
                                option = verify.deleteMessage;
                                golfie = _closure2_slot0;
                                oscard = _closure4_slot11;
                                michal = true;
                                michal = option.bind(verify)(golfie, oscard, michal);
 933:
                                michal = _closure5_slot1;
                                michal = michal.bind(tangon)(zuuluu);
                                _fun00056_ip = 2204; continue _fun00055;
 947:
                                oscard = _closure1_slot1;
                                option = _closure1_slot2;
                                michal = 59;
                                tangon = option[michal];
                                michal = undefined;
                                verify = oscard.bind(michal)(tangon);
                                golfie = verify.donateSentMessage;
                                oscard = _closure4_slot0;
                                backup = _closure2_slot0;
                                oscard = golfie.bind(verify)(oscard, backup);
                                romeon = _closure1_slot51;
                                verify = romeon.receiveMessage;
                                config = zuuluu.body;
                                oscard = {};
                                yankee = {};
                                yankee['duration'] = kiloes;
                                kiloes = _closure5_slot3;
                                yankee['queueSize'] = kiloes;
                                oscard['sendAnalytics'] = yankee;
                                yankee = _closure4_slot6;
                                oscard['poll'] = yankee;
                                cntext = romeon;
                                record = backup;
                                sequen = true;
                                vacuum = oscard;
                                oscard = cntext[verify](record, config, sequen, vacuum, ctrled);
                                golfie = _closure1_slot0;
                                oscard = 57;
                                oscard = option[oscard];
                                option = golfie.bind(michal)(oscard);
                                golfie = option.getSentConfettiPotionEmoji;
                                oscard = zuuluu.body;
                                oscard = golfie.bind(option)(oscard);
                                romeon = null;
                                if(!(romeon != oscard)) { _fun00056_ip = 1222; continue _fun00055 }
 1097:
                                backup = _closure1_slot0;
                                kiloes = _closure1_slot2;
                                golfie = 68;
                                golfie = kiloes[golfie];
                                verify = backup.bind(michal)(golfie);
                                option = verify.fetchConsumableEntitlement;
                                golfie = 69;
                                golfie = kiloes[golfie];
                                golfie = backup.bind(michal)(golfie);
                                golfie = golfie.CONFETTI_POTION_SKU_ID;
                                golfie = option.bind(verify)(golfie);
                                golfie = 70;
                                golfie = kiloes[golfie];
                                verify = backup.bind(michal)(golfie);
                                option = verify.triggerConfettiByEmoji;
                                golfie = {};
                                sizing = oscard.name;
                                golfie['name'] = sizing;
                                oscard = oscard.id;
                                golfie['id'] = oscard;
                                oscard = 71;
                                oscard = kiloes[oscard];
                                oscard = backup.bind(michal)(oscard);
                                oscard = oscard.ConfettiTriggerAnalyticsLocation;
                                vacuum = oscard.MessageSent;
                                cntext = verify;
                                record = golfie;
                                config = undefined;
                                sequen = true;
                                oscard = cntext[option](record, config, sequen, vacuum, ctrled);
 1222:
                                golfie = _closure1_slot1;
                                option = _closure1_slot2;
                                oscard = 51;
                                oscard = option[oscard];
                                option = golfie.bind(michal)(oscard);
                                golfie = option.cast;
                                oscard = _closure2_slot0;
                                option = golfie.bind(option)(oscard);
                                golfie = _closure1_slot8;
                                oscard = golfie.getRequest;
                                oscard = oscard.bind(golfie)(option);
                                if(!(romeon != oscard)) { _fun00056_ip = 1361; continue _fun00055 }
 1276:
                                backup = oscard.guildId;
                                verify = oscard.userId;
                                yankee = oscard.applicationStatus;
                                golfie = _closure1_slot0;
                                option = _closure1_slot2;
                                oscard = 72;
                                oscard = option[oscard];
                                option = golfie.bind(michal)(oscard);
                                golfie = option.trackMemberApplicationInterviewMessage;
                                oscard = {};
                                oscard['guildId'] = backup;
                                backup = _closure2_slot0;
                                oscard['channelId'] = backup;
                                backup = zuuluu.body;
                                backup = backup.id;
                                oscard['messageId'] = backup;
                                oscard['joinRequestStatus'] = yankee;
                                oscard['joinRequestUserId'] = verify;
                                oscard = golfie.bind(option)(oscard);
 1361:
                                option = _closure1_slot10;
                                golfie = option.recordMessageSendApiResponse;
                                oscard = _closure4_slot10;
                                oscard = golfie.bind(option)(oscard);
                                golfie = _closure4_slot9;
                                oscard = _closure1_slot36;
                                oscard = oscard.REPLY;
                                if(!(golfie === oscard)) { _fun00056_ip = 1844; continue _fun00055 }
 1403:
                                oscard = zuuluu.body;
                                output = oscard.id;
                                yankee = _closure2_slot0;
                                oscard = _closure4_slot5;
                                oscard = romeon == oscard;
                                option = undefined;
                                if(oscard) { _fun00056_ip = 1440; continue _fun00055 }
 1430:
                                oscard = _closure4_slot5;
                                option = oscard.message_id;
 1440:
                                golfie = _closure1_slot13;
                                oscard = golfie.getPendingReplyActionSource;
                                golfie = oscard.bind(golfie)(yankee);
                                oscard = 'message_swipe';
                                if(!(oscard !== golfie)) { _fun00056_ip = 1672; continue _fun00055 }
 1470:
                                oscard = 'message_shortcut';
                                if(!(oscard === golfie)) { _fun00056_ip = 1844; continue _fun00055 }
 1483:
                                golfie = _closure1_slot19;
                                oscard = golfie.getChannel;
                                result = oscard.bind(golfie)(yankee);
                                golfie = _closure1_slot1;
                                verify = _closure1_slot2;
                                oscard = 38;
                                oscard = verify[oscard];
                                backup = golfie.bind(michal)(oscard);
                                verify = backup.track;
                                oscard = _closure1_slot28;
                                golfie = oscard.MESSAGE_SHORTCUT_ACTION_SENT;
                                oscard = {};
                                oscard['message_id'] = output;
                                oscard['channel_id'] = yankee;
                                sizing = romeon == result;
                                kiloes = undefined;
                                if(sizing) { _fun00056_ip = 1557; continue _fun00055 }
 1552:
                                kiloes = result.guild_id;
 1557:
                                oscard['guild_id'] = kiloes;
                                oscard['original_message_id'] = option;
                                kiloes = 'reply';
                                oscard['action'] = kiloes;
                                sizing = _closure1_slot0;
                                kiloes = _closure1_slot2;
                                echoed = 29;
                                kiloes = kiloes[echoed];
                                update = sizing.bind(michal)(kiloes);
                                sizing = update.collectGuildAnalyticsMetadata;
                                source = romeon == result;
                                kiloes = undefined;
                                if(source) { _fun00056_ip = 1614; continue _fun00055 }
 1609:
                                kiloes = result.guild_id;
 1614:
                                config = sizing.bind(update)(kiloes);
                                record = oscard;
                                kiloes = copyDataProperties(record, config);
                                sizing = _closure1_slot0;
                                kiloes = _closure1_slot2;
                                kiloes = kiloes[echoed];
                                sizing = sizing.bind(michal)(kiloes);
                                kiloes = sizing.collectChannelAnalyticsMetadata;
                                config = kiloes.bind(sizing)(result);
                                record = oscard;
                                kiloes = copyDataProperties(record, config);
                                oscard = verify.bind(backup)(golfie, oscard);
                                _fun00056_ip = 1844; continue _fun00055;
 1672:
                                oscard = romeon != option;
                                sizing = null;
                                if(!oscard) { _fun00056_ip = 1697; continue _fun00055 }
 1681:
                                golfie = _closure1_slot22;
                                oscard = golfie.getMessage;
                                sizing = oscard.bind(golfie)(yankee, option);
 1697:
                                golfie = _closure1_slot19;
                                oscard = golfie.getChannel;
                                kiloes = oscard.bind(golfie)(yankee);
                                golfie = _closure1_slot26;
                                oscard = golfie.getCurrentUser;
                                backup = oscard.bind(golfie)();
                                golfie = _closure1_slot1;
                                option = _closure1_slot2;
                                oscard = 38;
                                oscard = option[oscard];
                                verify = golfie.bind(michal)(oscard);
                                option = verify.track;
                                oscard = _closure1_slot28;
                                golfie = oscard.MESSAGE_SWIPE_ACTION_SENT;
                                oscard = {};
                                oscard['message_id'] = output;
                                oscard['channel_id'] = yankee;
                                output = romeon == kiloes;
                                yankee = undefined;
                                if(output) { _fun00056_ip = 1784; continue _fun00055 }
 1779:
                                yankee = kiloes.guild_id;
 1784:
                                oscard['guild_id'] = yankee;
                                yankee = 'reply';
                                oscard['swipe_action'] = yankee;
                                yankee = romeon != backup;
                                if(!yankee) { _fun00056_ip = 1833; continue _fun00055 }
 1804:
                                kiloes = backup.id;
                                output = romeon == sizing;
                                backup = undefined;
                                if(output) { _fun00056_ip = 1829; continue _fun00055 }
 1818:
                                sizing = sizing.author;
                                backup = sizing.id;
 1829:
                                yankee = kiloes === backup;
 1833:
                                oscard['is_own_message'] = yankee;
                                oscard = option.bind(verify)(golfie, oscard);
 1844:
                                option = _closure1_slot1;
                                verify = _closure1_slot2;
                                golfie = 41;
                                oscard = verify[golfie];
                                kiloes = option.bind(michal)(oscard);
                                backup = kiloes.dispatch;
                                yankee = {};
                                oscard = 'SLOWMODE_RESET_COOLDOWN';
                                yankee['type'] = oscard;
                                oscard = _closure1_slot25;
                                oscard = oscard.SendMessage;
                                yankee['slowmodeType'] = oscard;
                                oscard = _closure2_slot0;
                                yankee['channelId'] = oscard;
                                yankee = backup.bind(kiloes)(yankee);
                                yankee = verify[golfie];
                                kiloes = option.bind(michal)(yankee);
                                backup = kiloes.dispatch;
                                yankee = {};
                                sizing = 'EMOJI_TRACK_USAGE';
                                yankee['type'] = sizing;
                                sizing = _closure4_slot1;
                                yankee['emojiUsed'] = sizing;
                                yankee = backup.bind(kiloes)(yankee);
                                yankee = verify[golfie];
                                kiloes = option.bind(michal)(yankee);
                                backup = kiloes.dispatch;
                                yankee = {};
                                sizing = 'STICKER_TRACK_USAGE';
                                yankee['type'] = sizing;
                                sizing = _closure4_slot4;
                                yankee['stickerIds'] = sizing;
                                yankee = backup.bind(kiloes)(yankee);
                                golfie = verify[golfie];
                                verify = option.bind(michal)(golfie);
                                option = verify.dispatch;
                                golfie = {};
                                yankee = 'LOCAL_MESSAGE_CREATE';
                                golfie['type'] = yankee;
                                yankee = {};
                                yankee['channel_id'] = oscard;
                                backup = _closure1_slot26;
                                foxtra = backup.getCurrentUser;
                                foxtra = foxtra.bind(backup)();
                                yankee['author'] = foxtra;
                                golfie['message'] = yankee;
                                golfie = option.bind(verify)(golfie);
                                golfie = {};
                                option = _closure4_slot0;
                                golfie['content'] = option;
                                golfie['channelId'] = oscard;
                                oscard = zuuluu.body;
                                oscard = oscard.id;
                                golfie['messageId'] = oscard;
                                oscard = _closure4_slot2;
                                option = romeon != oscard;
                                verify = 'chat_input';
                                oscard = verify;
                                if(!option) { _fun00056_ip = 2100; continue _fun00055 }
 2096:
                                oscard = _closure4_slot2;
 2100:
                                golfie['location'] = oscard;
                                oscard = _closure4_slot3;
                                golfie['suggested'] = oscard;
                                oscard = function(argFoo) { // Original name: trackCodedLinks
                                    _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                                        zuuluu = argFoo;
                                        tangon = zuuluu.content;
                                        entity = zuuluu.channelId;
                                        var _closure7_slot0 = entity;
                                        entity = zuuluu.messageId;
                                        var _closure7_slot1 = entity;
                                        entity = zuuluu.location;
                                        var _closure7_slot2 = entity;
                                        report = zuuluu.suggested;
                                        entity = undefined;
                                        if(!(report === entity)) { _fun00058_ip = 51; continue _fun00057 }
 49:
                                        report = null;
 51:
                                        var _closure7_slot3 = report;
                                        zuuluu = zuuluu.overrideProperties;
                                        if(!(zuuluu === entity)) { _fun00058_ip = 67; continue _fun00057 }
 65:
                                        zuuluu = {};
 67:
                                        var _closure7_slot4 = zuuluu;
                                        var _closure7_slot5 = entity;
                                        oscard = _closure1_slot18;
                                        report = oscard.getId;
                                        report = report.bind(oscard)();
                                        _closure7_slot5 = report;
                                        report = _closure1_slot1;
                                        oscard = _closure1_slot2;
                                        zuuluu = 27;
                                        zuuluu = oscard[zuuluu];
                                        zuuluu = report.bind(entity)(zuuluu);
                                        tangon = zuuluu.bind(entity)(tangon);
                                        zuuluu = tangon.forEach;
                                        michal = function(argFoo) {
                                            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                                                entity = argFoo;
                                                golfie = entity.type;
                                                tangon = entity.code;
                                                report = _closure1_slot0;
                                                entity = _closure1_slot2;
                                                oscard = 28;
                                                zuuluu = entity[oscard];
                                                entity = undefined;
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.INVITE;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 1283; continue _fun00059 }
 57:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.TEMPLATE;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 1159; continue _fun00059 }
 93:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.BUILD_OVERRIDE;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 1344; continue _fun00059 }
 129:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.MANUAL_BUILD_OVERRIDE;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 1344; continue _fun00059 }
 165:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.EVENT;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 1344; continue _fun00059 }
 201:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.CHANNEL_LINK;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 1344; continue _fun00059 }
 237:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.APP_DIRECTORY_PROFILE;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 1070; continue _fun00059 }
 273:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.APP_DIRECTORY_STOREFRONT;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 1027; continue _fun00059 }
 309:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.APP_DIRECTORY_STOREFRONT_SKU;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 939; continue _fun00059 }
 345:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.ACTIVITY_BOOKMARK;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 873; continue _fun00059 }
 381:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.EMBEDDED_ACTIVITY_INVITE;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 807; continue _fun00059 }
 417:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.GUILD_PRODUCT;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 1344; continue _fun00059 }
 453:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.SERVER_SHOP;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 1344; continue _fun00059 }
 489:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.QUESTS_EMBED;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 742; continue _fun00059 }
 525:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.APP_OAUTH2_LINK;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 631; continue _fun00059 }
 558:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.COLLECTIBLES_SHOP;
                                                if(!(golfie !== zuuluu)) { _fun00060_ip = 1344; continue _fun00059 }
 594:
                                                zuuluu = global;
                                                report = zuuluu.Error;
                                                zuuluu = zuuluu.HermesInternal;
                                                oscard = zuuluu.concat;
                                                zuuluu = 'Unknown coded link type: ';
                                                zuuluu = oscard.bind(zuuluu)(golfie);
                                                zuuluu = report.bind(entity)(zuuluu);
                                                throw zuuluu;
 631:
                                                report = _closure1_slot1;
                                                option = _closure1_slot2;
                                                zuuluu = 29;
                                                zuuluu = option[zuuluu];
                                                golfie = report.bind(entity)(zuuluu);
                                                oscard = golfie.trackWithMetadata;
                                                zuuluu = _closure1_slot28;
                                                report = zuuluu.APP_OAUTH2_LINK_EMBED_URL_SENT;
                                                zuuluu = {};
                                                zuuluu['application_id'] = tangon;
                                                zuuluu = oscard.bind(golfie)(report, zuuluu);
                                                report = _closure1_slot0;
                                                zuuluu = 31;
                                                oscard = option[zuuluu];
                                                golfie = report.bind(entity)(oscard);
                                                oscard = golfie.trackAppEmbedLinkSent;
                                                zuuluu = option[zuuluu];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.LinkType;
                                                report = zuuluu.OAUTH;
                                                zuuluu = _closure7_slot5;
                                                zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                                                _fun00060_ip = 1344; continue _fun00059;
 742:
                                                report = _closure1_slot0;
                                                oscard = _closure1_slot2;
                                                zuuluu = 33;
                                                zuuluu = oscard[zuuluu];
                                                oscard = report.bind(entity)(zuuluu);
                                                report = oscard.trackQuestEvent;
                                                zuuluu = {};
                                                zuuluu['questId'] = tangon;
                                                golfie = _closure1_slot28;
                                                golfie = golfie.QUEST_LINK_SHARED;
                                                zuuluu['event'] = golfie;
                                                golfie = true;
                                                zuuluu['trackGuildAndChannelMetadata'] = golfie;
                                                zuuluu = report.bind(oscard)(zuuluu);
                                                _fun00060_ip = 1344; continue _fun00059;
 807:
                                                report = _closure1_slot0;
                                                option = _closure1_slot2;
                                                zuuluu = 31;
                                                oscard = option[zuuluu];
                                                golfie = report.bind(entity)(oscard);
                                                oscard = golfie.trackAppEmbedLinkSent;
                                                zuuluu = option[zuuluu];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.LinkType;
                                                report = zuuluu.ACTIVITY_INVITE;
                                                zuuluu = _closure7_slot5;
                                                zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                                                _fun00060_ip = 1344; continue _fun00059;
 873:
                                                report = _closure1_slot0;
                                                option = _closure1_slot2;
                                                zuuluu = 31;
                                                oscard = option[zuuluu];
                                                golfie = report.bind(entity)(oscard);
                                                oscard = golfie.trackAppEmbedLinkSent;
                                                zuuluu = option[zuuluu];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.LinkType;
                                                report = zuuluu.ACTIVITY;
                                                zuuluu = _closure7_slot5;
                                                zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                                                _fun00060_ip = 1344; continue _fun00059;
 939:
                                                report = _closure1_slot0;
                                                oscard = _closure1_slot2;
                                                zuuluu = 32;
                                                zuuluu = oscard[zuuluu];
                                                report = report.bind(entity)(zuuluu);
                                                zuuluu = report.parseStorefrontSkuCodedLink;
                                                zuuluu = zuuluu.bind(report)(tangon);
                                                report = null;
                                                if(!(report != zuuluu)) { _fun00060_ip = 1344; continue _fun00059 }
 979:
                                                oscard = _closure1_slot0;
                                                golfie = _closure1_slot2;
                                                report = 30;
                                                report = golfie[report];
                                                golfie = oscard.bind(entity)(report);
                                                oscard = golfie.trackAppDirectoryProfileEmbed;
                                                report = zuuluu.applicationId;
                                                zuuluu = 'storefront_sku';
                                                zuuluu = oscard.bind(golfie)(report, zuuluu);
                                                _fun00060_ip = 1344; continue _fun00059;
 1027:
                                                report = _closure1_slot0;
                                                oscard = _closure1_slot2;
                                                zuuluu = 30;
                                                zuuluu = oscard[zuuluu];
                                                oscard = report.bind(entity)(zuuluu);
                                                report = oscard.trackAppDirectoryProfileEmbed;
                                                zuuluu = 'storefront';
                                                zuuluu = report.bind(oscard)(tangon, zuuluu);
                                                _fun00060_ip = 1344; continue _fun00059;
 1070:
                                                report = _closure1_slot0;
                                                option = _closure1_slot2;
                                                zuuluu = 30;
                                                zuuluu = option[zuuluu];
                                                oscard = report.bind(entity)(zuuluu);
                                                zuuluu = oscard.trackAppDirectoryProfileEmbed;
                                                zuuluu = zuuluu.bind(oscard)(tangon);
                                                zuuluu = 31;
                                                oscard = option[zuuluu];
                                                golfie = report.bind(entity)(oscard);
                                                oscard = golfie.trackAppEmbedLinkSent;
                                                zuuluu = option[zuuluu];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.LinkType;
                                                report = zuuluu.APP_DISCOVERY;
                                                zuuluu = _closure7_slot5;
                                                zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                                                _fun00060_ip = 1344; continue _fun00059;
 1159:
                                                report = _closure1_slot9;
                                                zuuluu = report.getGuildTemplate;
                                                option = zuuluu.bind(report)(tangon);
                                                zuuluu = null;
                                                if(!(zuuluu != option)) { _fun00060_ip = 1281; continue _fun00059 }
 1180:
                                                report = option.state;
                                                zuuluu = _closure1_slot45;
                                                zuuluu = zuuluu.RESOLVING;
                                                if(!(report !== zuuluu)) { _fun00060_ip = 1281; continue _fun00059 }
 1199:
                                                report = _closure1_slot1;
                                                oscard = _closure1_slot2;
                                                zuuluu = 29;
                                                zuuluu = oscard[zuuluu];
                                                golfie = report.bind(entity)(zuuluu);
                                                oscard = golfie.trackWithMetadata;
                                                zuuluu = _closure1_slot28;
                                                report = zuuluu.GUILD_TEMPLATE_LINK_SENT;
                                                zuuluu = {};
                                                zuuluu['guild_template_code'] = tangon;
                                                verify = option.name;
                                                zuuluu['guild_template_name'] = verify;
                                                verify = option.description;
                                                zuuluu['guild_template_description'] = verify;
                                                option = option.sourceGuildId;
                                                zuuluu['guild_template_guild_id'] = option;
                                                zuuluu = oscard.bind(golfie)(report, zuuluu);
                                                _fun00060_ip = 1344; continue _fun00059;
 1281:
                                                return entity;
 1283:
                                                zuuluu = _closure1_slot52;
                                                michal = {};
                                                michal['inviteKey'] = tangon;
                                                report = _closure7_slot0;
                                                michal['channelId'] = report;
                                                report = _closure7_slot1;
                                                michal['messageId'] = report;
                                                report = _closure7_slot2;
                                                michal['location'] = report;
                                                report = _closure7_slot3;
                                                michal['suggested'] = report;
                                                tangon = _closure7_slot4;
                                                michal['overrideProperties'] = tangon;
                                                michal = zuuluu.bind(entity)(michal);
 1344:
                                                return entity;
                                            }
                                        };
                                        michal = zuuluu.bind(tangon)(michal);
                                        return entity;
                                    }
                                };
                                oscard = oscard.bind(michal)(golfie);
                                option = _closure4_slot0;
                                golfie = _closure2_slot0;
                                oscard = zuuluu.body;
                                oscard = oscard.id;
                                yankee = _closure4_slot2;
                                yankee = romeon != yankee;
                                if(!yankee) { _fun00056_ip = 2156; continue _fun00055 }
 2152:
                                verify = _closure4_slot2;
 2156:
                                tangon = _closure2_slot2;
                                tangon = tangon.isGiftLinkSentOnBehalfOfUser;
                                tangon = !tangon;
                                report = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: trackGiftCodes
                                    entity = argBar;
                                    var _closure7_slot0 = entity;
                                    entity = argBaz;
                                    var _closure7_slot1 = entity;
                                    entity = argCor;
                                    var _closure7_slot2 = entity;
                                    entity = argGra;
                                    var _closure7_slot3 = entity;
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot2;
                                    entity = 37;
                                    zuuluu = zuuluu[entity];
                                    entity = undefined;
                                    report = tangon.bind(entity)(zuuluu);
                                    tangon = report.findGiftCodes;
                                    zuuluu = argFoo;
                                    tangon = tangon.bind(report)(zuuluu);
                                    zuuluu = tangon.forEach;
                                    michal = function(argFoo) {
                                        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                                            tangon = _closure1_slot19;
                                            zuuluu = tangon.getChannel;
                                            michal = _closure7_slot0;
                                            oscard = zuuluu.bind(tangon)(michal);
                                            michal = null;
                                            if(!(michal != oscard)) { _fun00062_ip = 145; continue _fun00061 }
 30:
                                            tangon = _closure1_slot1;
                                            zuuluu = _closure1_slot2;
                                            michal = 29;
                                            zuuluu = zuuluu[michal];
                                            michal = undefined;
                                            tangon = tangon.bind(michal)(zuuluu);
                                            zuuluu = tangon.trackWithMetadata;
                                            entity = _closure1_slot28;
                                            michal = entity.GIFT_CODE_SENT;
                                            entity = {};
                                            golfie = _closure7_slot2;
                                            entity['location'] = golfie;
                                            golfie = argFoo;
                                            entity['gift_code'] = golfie;
                                            golfie = oscard.getGuildId;
                                            golfie = golfie.bind(oscard)();
                                            entity['guild_id'] = golfie;
                                            golfie = oscard.id;
                                            entity['channel_id'] = golfie;
                                            oscard = oscard.type;
                                            entity['channel_type'] = oscard;
                                            oscard = _closure7_slot1;
                                            entity['message_id'] = oscard;
                                            report = _closure7_slot3;
                                            entity['automatic_send'] = report;
                                            entity = zuuluu.bind(tangon)(michal, entity);
 145:
                                            entity = undefined;
                                            return entity;
                                        }
                                    };
                                    michal = zuuluu.bind(tangon)(michal);
                                    return entity;
                                };
                                ctrled = !tangon;
                                cntext = undefined;
                                record = option;
                                config = golfie;
                                sequen = oscard;
                                vacuum = verify;
                                tangon = cntext[report](record, config, sequen, vacuum, ctrled, source);
                                entity = _closure5_slot0;
                                entity = entity.bind(michal)(zuuluu);
 2204:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = tangon.bind(report)(zuuluu, michal, oscard);
                        return entity;
                    };
                    quebec = option;
                    golfie = new quebec[verify](equals, whisks);
                    golfie = golfie instanceof Object ? golfie : option;
                    return golfie;
 1515:
                    return oscard;
 1518:
                    return report;
 1521:
                    oscard = _closure1_slot47;
                    report = oscard.info;
                    zuuluu = 'Converting channel to a private channel';
                    zuuluu = report.bind(oscard)(zuuluu);
                    zuuluu = tangon.then;
                    michal = function(argFoo) {
                        tangon = _closure1_slot47;
                        zuuluu = tangon.info;
                        michal = 'Finished converting channel to a private channel';
                        michal = zuuluu.bind(tangon)(michal);
                        report = _closure1_slot51;
                        tangon = report._sendMessage;
                        zuuluu = _closure2_slot1;
                        michal = _closure2_slot2;
                        entity = argFoo;
                        entity = tangon.bind(report)(entity, zuuluu, michal);
                        entity = undefined;
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return michal;
 1560:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['_sendMessage'] = option;
    option = function(argFoo, argBar, argBaz, argCor) { // Original name: startEditMessage
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 41;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'MESSAGE_START_EDIT';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        report = argBar;
        michal['messageId'] = report;
        report = argBaz;
        michal['content'] = report;
        report = argCor;
        michal['source'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['startEditMessage'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: updateEditMessage
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 41;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'MESSAGE_UPDATE_EDIT';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        report = argBar;
        michal['textValue'] = report;
        report = argBaz;
        michal['richValue'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['updateEditMessage'] = option;
    option = function(argFoo, argBar) { // Original name: endEditMessage
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 41;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'MESSAGE_END_EDIT';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        report = argBar;
        michal['response'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['endEditMessage'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: editMessage
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        michal = michal.content;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00064_ip = 487; continue _fun00063 }
 12:
                    zuuluu = undefined;
                    var _closure4_slot0 = zuuluu;
                    yankee = _closure2_slot1;
                    golfie = _closure2_slot0;
                    report = _closure1_slot20;
                    michal = report.getEditActionSource;
                    report = michal.bind(report)(golfie);
                    michal = 'message_swipe';
                    if(!(michal === report)) { _fun00064_ip = 161; continue _fun00063 }
 59:
                    report = _closure1_slot19;
                    michal = report.getChannel;
                    romeon = michal.bind(report)(golfie);
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 38;
                    michal = option[michal];
                    verify = report.bind(zuuluu)(michal);
                    option = verify.track;
                    michal = _closure1_slot28;
                    report = michal.MESSAGE_SWIPE_ACTION_SENT;
                    michal = {};
                    michal['message_id'] = yankee;
                    michal['channel_id'] = golfie;
                    yankee = null;
                    foxtra = yankee == romeon;
                    yankee = undefined;
                    if(foxtra) { _fun00064_ip = 135; continue _fun00063 }
 130:
                    yankee = romeon.guild_id;
 135:
                    michal['guild_id'] = yankee;
                    yankee = 'edit';
                    michal['swipe_action'] = yankee;
                    yankee = true;
                    michal['is_own_message'] = yankee;
                    michal = option.bind(verify)(report, michal);
 161:
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 76;
                    michal = option[michal];
                    report = report.bind(zuuluu)(michal);
                    michal = report.unarchiveThreadIfNecessary;
                    michal = michal.bind(report)(golfie);
                    SaveGenerator(address=196);
 194:
                    return michal;
 196:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00064_ip = 484; continue _fun00063 }
 205:
                    verify = _closure2_slot0;
                    golfie = _closure2_slot1;
                    option = _closure1_slot22;
                    report = option.getMessage;
                    yankee = report.bind(option)(verify, golfie);
                    report = null;
                    option = report != yankee;
                    report = undefined;
                    if(!option) { _fun00064_ip = 382; continue _fun00063 }
 243:
                    romeon = yankee.type;
                    option = _closure1_slot36;
                    option = option.REPLY;
                    report = undefined;
                    if(!(romeon === option)) { _fun00064_ip = 382; continue _fun00063 }
 264:
                    foxtra = _closure1_slot14;
                    romeon = foxtra.getMessageByReference;
                    option = yankee.messageReference;
                    option = romeon.bind(foxtra)(option);
                    foxtra = option.state;
                    romeon = _closure1_slot15;
                    romeon = romeon.LOADED;
                    report = undefined;
                    if(!(foxtra === romeon)) { _fun00064_ip = 382; continue _fun00063 }
 306:
                    romeon = yankee.mentions;
                    yankee = romeon.includes;
                    option = option.message;
                    option = option.author;
                    option = option.id;
                    option = yankee.bind(romeon)(option);
                    report = undefined;
                    if(option) { _fun00064_ip = 382; continue _fun00063 }
 343:
                    option = {};
                    yankee = global;
                    foxtra = yankee.Object;
                    romeon = foxtra.values;
                    yankee = _closure1_slot37;
                    yankee = romeon.bind(foxtra)(yankee);
                    option['parse'] = yankee;
                    yankee = false;
                    option['replied_user'] = yankee;
                    report = option;
 382:
                    option = {};
                    option['channelId'] = verify;
                    option['messageId'] = golfie;
                    oscard = _closure2_slot2;
                    option['content'] = oscard;
                    option['allowed_mentions'] = report;
                    _closure4_slot0 = option;
                    oscard = _closure1_slot1;
                    yankee = _closure1_slot2;
                    verify = 65;
                    report = yankee[verify];
                    golfie = oscard.bind(zuuluu)(report);
                    oscard = golfie.enqueue;
                    report = {};
                    offset = _closure1_slot0;
                    verify = yankee[verify];
                    verify = offset.bind(zuuluu)(verify);
                    verify = verify.MessageDataType;
                    verify = verify.EDIT;
                    report['type'] = verify;
                    report['message'] = option;
                    tangon = function(argFoo) {
                        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                            option = argFoo;
                            entity = option.hasErr;
                            verify = !entity;
                            if(!verify) { _fun00066_ip = 66; continue _fun00065 }
 15:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 74;
                            michal = michal[entity];
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            zuuluu = entity.AUTOMOD_ERROR_CODES;
                            michal = zuuluu.has;
                            entity = option.body;
                            entity = entity.code;
                            verify = michal.bind(zuuluu)(entity);
 66:
                            if(!verify) { _fun00066_ip = 202; continue _fun00065 }
 72:
                            tangon = {};
                            oscard = _closure1_slot0;
                            report = _closure1_slot2;
                            michal = 65;
                            michal = report[michal];
                            zuuluu = undefined;
                            michal = oscard.bind(zuuluu)(michal);
                            michal = michal.MessageDataType;
                            michal = michal.EDIT;
                            tangon['type'] = michal;
                            michal = _closure4_slot0;
                            tangon['message'] = michal;
                            michal = _closure1_slot1;
                            entity = 41;
                            entity = report[entity];
                            zuuluu = michal.bind(zuuluu)(entity);
                            michal = zuuluu.dispatch;
                            entity = {};
                            report = 'MESSAGE_EDIT_FAILED_AUTOMOD';
                            entity['type'] = report;
                            entity['messageData'] = tangon;
                            tangon = {};
                            report = option.body;
                            report = report.code;
                            tangon['code'] = report;
                            report = option.body;
                            report = report.message;
                            tangon['message'] = report;
                            entity['errorResponseBody'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 202:
                            offset = option.hasErr;
                            yankee = _closure1_slot0;
                            romeon = _closure1_slot2;
                            entity = 77;
                            zuuluu = romeon[entity];
                            entity = undefined;
                            zuuluu = yankee.bind(entity)(zuuluu);
                            report = zuuluu.AccessibilityAnnouncer;
                            tangon = report.announce;
                            zuuluu = 39;
                            oscard = romeon[zuuluu];
                            oscard = yankee.bind(entity)(oscard);
                            golfie = oscard.intl;
                            oscard = golfie.string;
                            zuuluu = romeon[zuuluu];
                            zuuluu = yankee.bind(entity)(zuuluu);
                            zuuluu = zuuluu.t;
                            if(offset) { _fun00066_ip = 327; continue _fun00065 }
 284:
                            if(verify) { _fun00066_ip = 307; continue _fun00065 }
 287:
                            verify = zuuluu.0x1HBA;
                            verify = oscard.bind(golfie)(verify);
                            verify = tangon.bind(report)(verify);
                            _fun00066_ip = 345; continue _fun00065;
 307:
                            verify = zuuluu.Hym4i4;
                            verify = oscard.bind(golfie)(verify);
                            verify = tangon.bind(report)(verify);
                            _fun00066_ip = 345; continue _fun00065;
 327:
                            zuuluu = zuuluu.Atp7FB;
                            zuuluu = oscard.bind(golfie)(zuuluu);
                            zuuluu = tangon.bind(report)(zuuluu);
 345:
                            golfie = _closure1_slot51;
                            oscard = golfie.endEditMessage;
                            tangon = _closure2_slot0;
                            verify = option.hasErr;
                            zuuluu = undefined;
                            if(verify) { _fun00066_ip = 376; continue _fun00065 }
 373:
                            zuuluu = option;
 376:
                            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
                            tangon = _closure1_slot51;
                            zuuluu = tangon.focusMessage;
                            michal = {};
                            oscard = _closure2_slot0;
                            michal['channelId'] = oscard;
                            report = _closure2_slot1;
                            michal['messageId'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    tangon = oscard.bind(golfie)(report, tangon);
                    return zuuluu;
 484:
                    return michal;
 487:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['editMessage'] = option;
    option = function(argFoo, argBar) { // Original name: suppressEmbeds
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00068_ip = 168; continue _fun00067 }
 10:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 76;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.unarchiveThreadIfNecessary;
                    michal = _closure2_slot0;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=57);
 55:
                    return michal;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00068_ip = 165; continue _fun00067 }
 63:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 46;
                    tangon = oscard[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.patch;
                    tangon = {};
                    yankee = _closure1_slot29;
                    offset = yankee.MESSAGE;
                    verify = _closure2_slot0;
                    golfie = _closure2_slot1;
                    golfie = offset.bind(yankee)(verify, golfie);
                    tangon['url'] = golfie;
                    golfie = {};
                    option = _closure1_slot34;
                    option = option.SUPPRESS_EMBEDS;
                    golfie['flags'] = option;
                    tangon['body'] = golfie;
                    golfie = true;
                    tangon['oldFormErrors'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 165:
                    return michal;
 168:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['suppressEmbeds'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: patchMessageAttachments
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00070_ip = 163; continue _fun00069 }
 10:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 76;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.unarchiveThreadIfNecessary;
                    michal = _closure2_slot0;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=57);
 55:
                    return michal;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00070_ip = 160; continue _fun00069 }
 63:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 46;
                    tangon = oscard[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.patch;
                    tangon = {};
                    yankee = _closure1_slot29;
                    offset = yankee.MESSAGE;
                    verify = _closure2_slot0;
                    golfie = _closure2_slot1;
                    golfie = offset.bind(yankee)(verify, golfie);
                    tangon['url'] = golfie;
                    golfie = {};
                    option = _closure2_slot2;
                    golfie['attachments'] = option;
                    tangon['body'] = golfie;
                    golfie = true;
                    tangon['oldFormErrors'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 160:
                    return michal;
 163:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['patchMessageAttachments'] = option;
    option = function(argFoo, argBar) { // Original name: deleteMessage
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            zuuluu = arguments[2];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00072_ip = 27; continue _fun00071 }
 25:
            zuuluu = false;
 27:
            var _closure2_slot2 = zuuluu;
            zuuluu = _closure1_slot4;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00074_ip = 278; continue _fun00073 }
 12:
                        tangon = function() { // Original name: dispatchDelete
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 41;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            report = 'MESSAGE_DELETE';
                            michal['type'] = report;
                            oscard = _closure2_slot1;
                            michal['id'] = oscard;
                            report = _closure2_slot0;
                            michal['channelId'] = report;
                            tangon = zuuluu.bind(tangon)(michal);
                            zuuluu = tangon.then;
                            michal = function() {
                                golfie = _closure1_slot0;
                                option = _closure1_slot2;
                                entity = 77;
                                michal = option[entity];
                                entity = undefined;
                                michal = golfie.bind(entity)(michal);
                                tangon = michal.AccessibilityAnnouncer;
                                zuuluu = tangon.announce;
                                michal = 39;
                                report = option[michal];
                                report = golfie.bind(entity)(report);
                                oscard = report.intl;
                                report = oscard.string;
                                michal = option[michal];
                                michal = golfie.bind(entity)(michal);
                                michal = michal.t;
                                michal = michal.RYMs7u;
                                michal = report.bind(oscard)(michal);
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        var _closure4_slot0 = tangon;
                        zuuluu = _closure2_slot2;
                        if(zuuluu) { _fun00074_ip = 180; continue _fun00073 }
 34:
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        zuuluu = 76;
                        zuuluu = golfie[zuuluu];
                        option = undefined;
                        golfie = oscard.bind(option)(zuuluu);
                        oscard = golfie.unarchiveThreadIfNecessary;
                        zuuluu = _closure2_slot0;
                        zuuluu = oscard.bind(golfie)(zuuluu);
                        SaveGenerator(address=78);
 76:
                        return zuuluu;
 78:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(oscard) { _fun00074_ip = 177; continue _fun00073 }
 84:
                        golfie = _closure1_slot0;
                        offset = _closure1_slot2;
                        oscard = 46;
                        oscard = offset[oscard];
                        oscard = golfie.bind(option)(oscard);
                        option = oscard.HTTP;
                        golfie = option.del;
                        oscard = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        romeon = _closure1_slot29;
                        yankee = romeon.MESSAGE;
                        offset = _closure2_slot0;
                        verify = _closure2_slot1;
                        verify = yankee.bind(romeon)(offset, verify);
                        oscard['url'] = verify;
                        golfie = golfie.bind(option)(oscard);
                        oscard = golfie.then;
                        report = function() {
                            michal = _closure4_slot0;
                            entity = undefined;
                            michal = michal.bind(entity)();
                            return entity;
                        };
                        report = oscard.bind(golfie)(report);
                        _fun00074_ip = 186; continue _fun00073;
 177:
                        return zuuluu;
 180:
                        zuuluu = undefined;
                        zuuluu = tangon.bind(zuuluu)();
 186:
                        oscard = _closure1_slot22;
                        report = oscard.getMessage;
                        tangon = _closure2_slot0;
                        michal = _closure2_slot1;
                        tangon = report.bind(oscard)(tangon, michal);
                        michal = null;
                        oscard = michal == tangon;
                        michal = undefined;
                        report = undefined;
                        if(oscard) { _fun00074_ip = 231; continue _fun00073 }
 226:
                        report = tangon.type;
 231:
                        tangon = _closure1_slot36;
                        tangon = tangon.GUILD_INVITE_REMINDER;
                        if(!(report === tangon)) { _fun00074_ip = 275; continue _fun00073 }
 245:
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        zuuluu = 78;
                        zuuluu = report[zuuluu];
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.trackGuildInviteNotificationDismissed;
                        zuuluu = zuuluu.bind(tangon)();
 275:
                        return michal;
 278:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['deleteMessage'] = option;
    option = function(argFoo) { // Original name: dismissAutomatedMessage
        _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
            entity = argFoo;
            report = this;
            zuuluu = entity.loggingName;
            michal = null;
            if(!(michal != zuuluu)) { _fun00076_ip = 94; continue _fun00075 }
 18:
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 29;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            oscard = oscard.bind(zuuluu)(tangon);
            tangon = oscard.trackWithMetadata;
            michal = _closure1_slot28;
            zuuluu = michal.AUTOMATED_MESSAGE_DISMISSED;
            michal = {};
            golfie = entity.loggingName;
            michal['message_name'] = golfie;
            golfie = entity.author;
            golfie = golfie.username;
            michal['message_author'] = golfie;
            michal = tangon.bind(oscard)(zuuluu, michal);
 94:
            tangon = report.deleteMessage;
            zuuluu = entity.channel_id;
            michal = entity.id;
            entity = true;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            entity = undefined;
            return entity;
        }
    };
    michal['dismissAutomatedMessage'] = option;
    option = function(argFoo, argBar) { // Original name: revealMessage
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 41;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'MESSAGE_REVEAL';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        report = argBar;
        michal['messageId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['revealMessage'] = option;
    option = function(argFoo, argBar) { // Original name: crosspostMessage
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 46;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {'url': null, 'oldFormErrors': true, 'failImmediatelyWhenRateLimited': true, 'rejectWithError': false};
        golfie = _closure1_slot29;
        oscard = golfie.MESSAGE_CROSSPOST;
        report = argFoo;
        tangon = argBar;
        tangon = oscard.bind(golfie)(report, tangon);
        entity['url'] = tangon;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.catch;
        entity = function(argFoo) {
            _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                report = argFoo;
                michal = report.status;
                entity = 429;
                if(!(entity !== michal)) { _fun00078_ip = 82; continue _fun00077 }
 18:
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 39;
                michal = golfie[entity];
                tangon = undefined;
                michal = oscard.bind(tangon)(michal);
                zuuluu = michal.intl;
                michal = zuuluu.string;
                entity = golfie[entity];
                entity = oscard.bind(tangon)(entity);
                entity = entity.t;
                entity = entity.z2gyND;
                oscard = michal.bind(zuuluu)(entity);
                _fun00078_ip = 189; continue _fun00077;
 82:
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                entity = 39;
                zuuluu = option[entity];
                michal = undefined;
                zuuluu = golfie.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = option[entity];
                entity = golfie.bind(michal)(entity);
                entity = entity.t;
                michal = entity.77cuq6;
                entity = {};
                golfie = global;
                option = golfie.Math;
                golfie = option.floor;
                report = report.body;
                verify = report.retry_after;
                report = 60;
                report = verify / report;
                report = golfie.bind(option)(report);
                entity['retryAfter'] = report;
                oscard = zuuluu.bind(tangon)(michal, entity);
 189:
                zuuluu = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 79;
                michal = verify[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.show;
                michal = {};
                option = _closure1_slot0;
                report = 39;
                golfie = verify[report];
                golfie = option.bind(entity)(golfie);
                yankee = golfie.intl;
                offset = yankee.string;
                golfie = verify[report];
                golfie = option.bind(entity)(golfie);
                golfie = golfie.t;
                golfie = golfie.Vd1hs7;
                golfie = offset.bind(yankee)(golfie);
                michal['title'] = golfie;
                michal['body'] = oscard;
                oscard = verify[report];
                oscard = option.bind(entity)(oscard);
                golfie = oscard.intl;
                oscard = golfie.string;
                report = verify[report];
                report = option.bind(entity)(report);
                report = report.t;
                report = report.BddRzc;
                report = oscard.bind(golfie)(report);
                michal['confirmText'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['crosspostMessage'] = option;
    michal['trackInvite'] = golfie;
    var _closure1_slot51 = michal;
    tangon = 80;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/MessageActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();