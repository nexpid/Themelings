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
            tangon = 37;
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
            oscard = 38;
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
            oscard = 32;
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
            option = 30;
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
            foxtra = 39;
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
            zuuluu = 30;
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
    var _closure1_slot53 = golfie;
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
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.FileUploadErrorTypes;
    var _closure1_slot46 = michal;
    michal = 27;
    offset = oscard[michal];
    romeon = verify.bind(entity)(offset);
    offset = romeon.prototype;
    yankee = Object.create(offset, {constructor: {value: romeon}});
    kiloes = 'MessageActionCreators';
    sizing = yankee;
    offset = new sizing[romeon](kiloes, backup);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot47 = offset;
    michal = oscard[michal];
    offset = verify.bind(entity)(michal);
    michal = offset.prototype;
    verify = Object.create(michal, {constructor: {value: offset}});
    kiloes = 'MessageQueue';
    sizing = verify;
    michal = new sizing[offset](kiloes, backup);
    michal = michal instanceof Object ? michal : verify;
    var _closure1_slot48 = michal;
    michal = false;
    var _closure1_slot49 = michal;
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
    var _closure1_slot50 = michal;
    michal = {};
    offset = option.EMAIL_VERIFICATION_REQUIRED;
    verify = {};
    yankee = 'BOT_REQUIRES_EMAIL_VERIFICATION';
    verify['messageName'] = yankee;
    yankee = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 42;
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
        entity = 42;
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
        oscard = 43;
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
        entity = 42;
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
        entity = 42;
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
        entity = 42;
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
        entity = 42;
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
        entity = 42;
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
    var _closure1_slot51 = michal;
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
            michal = 44;
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
            michal = 30;
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
            tangon = _closure1_slot52;
            zuuluu = tangon.receiveMessage;
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 45;
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
        entity = 45;
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
        tangon = _closure1_slot52;
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
        entity = 45;
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
        tangon = _closure1_slot52;
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
            zuuluu = _closure1_slot51;
            zuuluu = option in zuuluu;
            if(zuuluu) { _fun00008_ip = 279; continue _fun00007 }
 139:
            tangon = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 42;
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
            verify = 43;
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
            golfie = _closure1_slot51;
            zuuluu = golfie[option];
            tangon = zuuluu.messageName;
            option = golfie[option];
            golfie = option.messageGetter;
            report = golfie.bind(option)();
            _fun00008_ip = 797; continue _fun00007;
 312:
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 42;
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
            zuuluu = 42;
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
            zuuluu = 42;
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
            zuuluu = 42;
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
            zuuluu = 42;
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
            yankee = 43;
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
            zuuluu = 42;
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
            zuuluu = _closure1_slot52;
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
            oscard = argFoo;
            report = argBar;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 46;
            zuuluu = zuuluu[entity];
            entity = undefined;
            option = golfie.bind(entity)(zuuluu);
            golfie = option.isEligibleForSensitiveContentGoreExperiment;
            zuuluu = 'ExplicitMediaClydeError';
            zuuluu = golfie.bind(option)(zuuluu);
            var _closure2_slot0 = zuuluu;
            golfie = _closure1_slot19;
            zuuluu = golfie.getChannel;
            foxtra = zuuluu.bind(golfie)(oscard);
            zuuluu = null;
            if(!(zuuluu != foxtra)) { _fun00010_ip = 410; continue _fun00009 }
 77:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 47;
            golfie = romeon[golfie];
            verify = yankee.bind(entity)(golfie);
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
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = {};
                    michal = _closure2_slot0;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 42;
                    tangon = option[zuuluu];
                    oscard = undefined;
                    tangon = golfie.bind(oscard)(tangon);
                    report = tangon.intl;
                    tangon = report.string;
                    zuuluu = option[zuuluu];
                    zuuluu = golfie.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.t;
                    if(michal) { _fun00012_ip = 74; continue _fun00011 }
 61:
                    michal = zuuluu.PoyOY2;
                    michal = tangon.bind(report)(michal);
                    _fun00012_ip = 85; continue _fun00011;
 74:
                    zuuluu = zuuluu.mktny8;
                    michal = tangon.bind(report)(zuuluu);
 85:
                    entity['message'] = michal;
                    michal = 'BOT_DM_EXPLICIT_CONTENT';
                    entity['messageName'] = michal;
                    return entity;
                }
            };
            offset = verify.bind(offset)(option, golfie);
            verify = offset.with;
            option = {'isDM': false, 'isGDM': true};
            golfie = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = {};
                    michal = _closure2_slot0;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 42;
                    tangon = option[zuuluu];
                    oscard = undefined;
                    tangon = golfie.bind(oscard)(tangon);
                    report = tangon.intl;
                    tangon = report.string;
                    zuuluu = option[zuuluu];
                    zuuluu = golfie.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.t;
                    if(michal) { _fun00014_ip = 74; continue _fun00013 }
 61:
                    michal = zuuluu.PoyOY2;
                    michal = tangon.bind(report)(michal);
                    _fun00014_ip = 85; continue _fun00013;
 74:
                    zuuluu = zuuluu.mktny8;
                    michal = tangon.bind(report)(zuuluu);
 85:
                    entity['message'] = michal;
                    michal = 'BOT_GDM_EXPLICIT_CONTENT';
                    entity['messageName'] = michal;
                    return entity;
                }
            };
            option = verify.bind(offset)(option, golfie);
            golfie = option.otherwise;
            tangon = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = {};
                    michal = _closure2_slot0;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 42;
                    tangon = option[zuuluu];
                    oscard = undefined;
                    tangon = golfie.bind(oscard)(tangon);
                    report = tangon.intl;
                    tangon = report.string;
                    zuuluu = option[zuuluu];
                    zuuluu = golfie.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.t;
                    if(michal) { _fun00016_ip = 74; continue _fun00015 }
 61:
                    michal = zuuluu.bNMQVF;
                    michal = tangon.bind(report)(michal);
                    _fun00016_ip = 85; continue _fun00015;
 74:
                    zuuluu = zuuluu.i4AbAQ;
                    michal = tangon.bind(report)(zuuluu);
 85:
                    entity['message'] = michal;
                    michal = 'BOT_GUILD_EXPLICIT_CONTENT';
                    entity['messageName'] = michal;
                    return entity;
                }
            };
            tangon = golfie.bind(option)(tangon);
            sizing = tangon.message;
            kiloes = tangon.messageName;
            tangon = 48;
            tangon = romeon[tangon];
            golfie = yankee.bind(entity)(tangon);
            tangon = golfie.createNonce;
            golfie = tangon.bind(golfie)();
            option = _closure1_slot52;
            tangon = option.sendBotMessage;
            result = option;
            output = oscard;
            backup = golfie;
            tangon = result[tangon](output, sizing, kiloes, backup, foxtra);
            offset = 49;
            tangon = romeon[offset];
            verify = yankee.bind(entity)(tangon);
            option = verify.trackMediaRedactionAction;
            tangon = {};
            offset = romeon[offset];
            offset = yankee.bind(entity)(offset);
            offset = offset.TrackMediaRedactionActionType;
            offset = offset.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT;
            tangon['action'] = offset;
            tangon['messageId'] = golfie;
            tangon['channelId'] = oscard;
            offset = argBaz;
            tangon['context'] = offset;
            tangon = option.bind(verify)(tangon);
            zuuluu = zuuluu != report;
            if(!zuuluu) { _fun00010_ip = 352; continue _fun00009 }
 341:
            option = report.length;
            tangon = 0;
            zuuluu = option > tangon;
 352:
            if(!zuuluu) { _fun00010_ip = 410; continue _fun00009 }
 355:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 44;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            option = 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE';
            michal['type'] = option;
            michal['messageId'] = golfie;
            michal['channelId'] = oscard;
            michal['attachments'] = report;
            michal = zuuluu.bind(tangon)(michal);
 410:
            return entity;
        }
    };
    michal['sendExplicitMediaClydeError'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: truncateMessages
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 44;
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
        entity = 44;
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
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            golfie = _closure1_slot52;
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
            if(michal) { _fun00018_ip = 94; continue _fun00017 }
 61:
            golfie = _closure1_slot52;
            zuuluu = golfie.fetchMessages;
            michal = {};
            michal['channelId'] = report;
            michal['limit'] = tangon;
            michal['jump'] = oscard;
            michal = zuuluu.bind(golfie)(michal);
            _fun00018_ip = 152; continue _fun00017;
 94:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 44;
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
        entity = 30;
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
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            foxtra = entity.channelId;
            romeon = entity.messageId;
            yankee = entity.flash;
            michal = undefined;
            if(!(yankee === michal)) { _fun00020_ip = 27; continue _fun00019 }
 25:
            yankee = false;
 27:
            offset = entity.offset;
            golfie = entity.context;
            zuuluu = entity.extraProperties;
            if(!(zuuluu === michal)) { _fun00020_ip = 50; continue _fun00019 }
 48:
            zuuluu = null;
 50:
            oscard = entity.isPreload;
            verify = entity.returnMessageId;
            report = entity.skipLocalFetch;
            option = entity.jumpType;
            tangon = entity.avoidInitialScroll;
            michal = 'string';
            entity = typeof golfie;
            if(!(michal === entity)) { _fun00020_ip = 123; continue _fun00019 }
 91:
            michal = _closure1_slot52;
            entity = michal.trackJump;
            result = michal;
            output = foxtra;
            sizing = romeon;
            kiloes = golfie;
            backup = zuuluu;
            entity = result[entity](output, sizing, kiloes, backup, foxtra);
 123:
            zuuluu = _closure1_slot52;
            michal = zuuluu.fetchMessages;
            entity = {};
            entity['channelId'] = foxtra;
            golfie = _closure1_slot35;
            entity['limit'] = golfie;
            golfie = {};
            golfie['messageId'] = romeon;
            golfie['flash'] = yankee;
            golfie['offset'] = offset;
            golfie['returnMessageId'] = verify;
            golfie['jumpType'] = option;
            entity['jump'] = golfie;
            entity['isPreload'] = oscard;
            entity['skipLocalFetch'] = report;
            entity['avoidInitialScroll'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['jumpToMessage'] = option;
    option = function(argFoo) { // Original name: focusMessage
        entity = argFoo;
        oscard = entity.channelId;
        report = entity.messageId;
        zuuluu = _closure1_slot52;
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
        entity = 50;
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
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                michal = entity.body;
                michal = michal.length;
                tangon = 0;
                if(!(!(michal > tangon))) { _fun00022_ip = 23; continue _fun00021 }
 19:
                michal = undefined;
                return michal;
 23:
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 51;
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
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
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
            tangon = entity.forICYMI;
            var _closure2_slot6 = tangon;
            entity = entity.avoidInitialScroll;
            var _closure2_slot7 = entity;
            entity = undefined;
            var _closure2_slot10 = entity;
            var _closure2_slot11 = entity;
            option = _closure1_slot19;
            tangon = option.getChannel;
            kiloes = tangon.bind(option)(foxtra);
            option = _closure1_slot7;
            tangon = option.isConnectedOrOverlay;
            tangon = tangon.bind(option)();
            var _closure2_slot8 = tangon;
            tangon = global;
            sizing = tangon.Date;
            option = sizing.now;
            option = option.bind(sizing)();
            var _closure2_slot9 = option;
            option = null;
            if(!(option != kiloes)) { _fun00024_ip = 199; continue _fun00023 }
 177:
            sizing = kiloes.type;
            kiloes = _closure1_slot30;
            kiloes = kiloes.GUILD_STORE;
            if(!(sizing !== kiloes)) { _fun00024_ip = 749; continue _fun00023 }
 199:
            sizing = _closure1_slot0;
            result = _closure1_slot2;
            kiloes = 52;
            kiloes = result[kiloes];
            kiloes = sizing.bind(entity)(kiloes);
            kiloes = kiloes.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(foxtra !== kiloes)) { _fun00024_ip = 747; continue _fun00023 }
 232:
            sizing = _closure1_slot47;
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
            sizing = _closure1_slot52;
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
            if(tangon) { _fun00024_ip = 747; continue _fun00023 }
 369:
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            tangon = 53;
            tangon = sizing[tangon];
            tangon = kiloes.bind(entity)(tangon);
            kiloes = tangon.fetchMessages;
            tangon = kiloes.recordStart;
            tangon = tangon.bind(kiloes)();
            kiloes = option != romeon;
            tangon = undefined;
            if(!kiloes) { _fun00024_ip = 417; continue _fun00023 }
 414:
            tangon = romeon;
 417:
            romeon = option == tangon;
            if(!romeon) { _fun00024_ip = 428; continue _fun00023 }
 424:
            romeon = option != backup;
 428:
            if(!romeon) { _fun00024_ip = 446; continue _fun00023 }
 431:
            romeon = {};
            target = romeon;
            papara = backup;
            backup = copyDataProperties(target, papara);
            tangon = romeon;
 446:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            romeon = 54;
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
            romeon = 44;
            romeon = kiloes[romeon];
            kiloes = backup.bind(entity)(romeon);
            backup = kiloes.dispatch;
            romeon = {};
            sizing = 'LOAD_MESSAGES';
            romeon['type'] = sizing;
            romeon = backup.bind(kiloes)(romeon);
            romeon = option == tangon;
            option = undefined;
            if(romeon) { _fun00024_ip = 558; continue _fun00023 }
 553:
            option = tangon.messageId;
 558:
            _closure2_slot10 = option;
            tangon = _closure1_slot50;
            romeon = tangon.prototype;
            romeon = Object.create(romeon, {constructor: {value: tangon}});
            status = romeon;
            tangon = new status[tangon](target);
            tangon = tangon instanceof Object ? tangon : romeon;
            _closure2_slot11 = tangon;
            if(zuuluu) { _fun00024_ip = 621; continue _fun00023 }
 593:
            zuuluu = report.fetchLocalMessages;
            status = report;
            target = foxtra;
            papara = yankee;
            cntext = offset;
            record = verify;
            config = tangon;
            zuuluu = status[zuuluu](target, papara, cntext, record, config, sequen);
 621:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 50;
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
                michal = 53;
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
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        entity = _closure3_slot0;
                        yankee = entity.body;
                        entity = _closure2_slot1;
                        golfie = null;
                        offset = golfie != entity;
                        entity = _closure2_slot2;
                        verify = golfie != entity;
                        entity = _closure2_slot10;
                        michal = golfie != entity;
                        if(michal) { _fun00026_ip = 96; continue _fun00025 }
 46:
                        tangon = yankee.length;
                        entity = _closure2_slot3;
                        entity = tangon === entity;
                        if(!entity) { _fun00026_ip = 93; continue _fun00025 }
 62:
                        tangon = offset;
                        if(tangon) { _fun00026_ip = 90; continue _fun00025 }
 68:
                        oscard = _closure2_slot1;
                        oscard = golfie == oscard;
                        if(!oscard) { _fun00026_ip = 87; continue _fun00025 }
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
                        entity = _closure2_slot10;
                        tangon = golfie != entity;
                        if(tangon) { _fun00026_ip = 129; continue _fun00025 }
 107:
                        entity = verify;
                        if(!entity) { _fun00026_ip = 126; continue _fun00025 }
 113:
                        option = yankee.length;
                        oscard = _closure2_slot3;
                        entity = option === oscard;
 126:
                        tangon = entity;
 129:
                        entity = _closure2_slot10;
                        option = michal;
                        oscard = tangon;
                        if(!(golfie != entity)) { _fun00026_ip = 389; continue _fun00025 }
 146:
                        entity = global;
                        foxtra = entity.Math;
                        romeon = foxtra.floor;
                        backup = _closure2_slot3;
                        entity = 2;
                        golfie = backup / entity;
                        golfie = romeon.bind(foxtra)(golfie);
                        romeon = _closure2_slot10;
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
                        romeon = 55;
                        output = output[romeon];
                        romeon = undefined;
                        romeon = result.bind(romeon)(output);
                        romeon = romeon.compare;
                        sizing = kiloes.bind(sizing)(romeon);
                        kiloes = sizing.indexOf;
                        romeon = _closure2_slot10;
                        romeon = kiloes.bind(sizing)(romeon);
                        entity = backup % entity;
                        entity = golfie + entity;
                        entity = entity - foxtra;
                        if(!(romeon < entity)) { _fun00026_ip = 305; continue _fun00025 }
 303:
                        michal = false;
 305:
                        entity = yankee.length;
                        entity = entity - romeon;
                        if(!(entity < golfie)) { _fun00026_ip = 320; continue _fun00025 }
 318:
                        tangon = false;
 320:
                        option = michal;
                        oscard = tangon;
                        if(!tangon) { _fun00026_ip = 389; continue _fun00025 }
 329:
                        golfie = yankee.length;
                        entity = 0;
                        option = michal;
                        oscard = tangon;
                        if(!(golfie > entity)) { _fun00026_ip = 389; continue _fun00025 }
 346:
                        romeon = _closure1_slot24;
                        golfie = romeon.lastMessageId;
                        zuuluu = _closure2_slot0;
                        zuuluu = golfie.bind(romeon)(zuuluu);
                        entity = yankee[entity];
                        entity = entity.id;
                        option = michal;
                        oscard = tangon;
                        if(!(entity === zuuluu)) { _fun00026_ip = 389; continue _fun00025 }
 384:
                        oscard = false;
                        option = michal;
 389:
                        zuuluu = _closure1_slot47;
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
                        michal = _closure2_slot11;
                        entity = michal.markComplete;
                        entity = entity.bind(michal)();
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 44;
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
                        oscard = _closure2_slot8;
                        oscard = !oscard;
                        if(oscard) { _fun00026_ip = 607; continue _fun00025 }
 585:
                        option = _closure1_slot7;
                        golfie = option.lastTimeConnectedChanged;
                        option = golfie.bind(option)();
                        golfie = _closure2_slot9;
                        oscard = option >= golfie;
 607:
                        michal['isStale'] = oscard;
                        oscard = _closure2_slot5;
                        michal['truncate'] = oscard;
                        report = _closure2_slot7;
                        michal['avoidInitialScroll'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                entity = true;
                return entity;
            };
            michal = function() {
                report = _closure1_slot47;
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
                entity = 44;
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
 747:
            return entity;
 749:
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
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00028_ip = 645; continue _fun00027 }
 12:
                    zuuluu = undefined;
                    var _closure4_slot0 = zuuluu;
                    oscard = _closure1_slot19;
                    report = oscard.getBasicChannel;
                    yankee = _closure2_slot0;
                    verify = report.bind(oscard)(yankee);
                    golfie = _closure1_slot1;
                    offset = _closure1_slot2;
                    report = 54;
                    report = offset[report];
                    oscard = golfie.bind(zuuluu)(report);
                    report = oscard.getOrCreate;
                    oscard = report.bind(oscard)(yankee);
                    report = 56;
                    report = offset[report];
                    golfie = golfie.bind(zuuluu)(report);
                    report = golfie.database;
                    golfie = report.bind(golfie)();
                    _closure4_slot0 = golfie;
                    report = null;
                    if(!(report != golfie)) { _fun00028_ip = 126; continue _fun00027 }
 106:
                    if(!(report != verify)) { _fun00028_ip = 126; continue _fun00027 }
 110:
                    golfie = _closure2_slot1;
                    if(!(report == golfie)) { _fun00028_ip = 126; continue _fun00027 }
 118:
                    golfie = _closure2_slot2;
                    if(!(report != golfie)) { _fun00028_ip = 173; continue _fun00027 }
 126:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    golfie = 53;
                    golfie = yankee[golfie];
                    romeon = offset.bind(zuuluu)(golfie);
                    yankee = romeon.addLocalMessages;
                    offset = _closure2_slot0;
                    golfie = -1;
                    golfie = yankee.bind(romeon)(offset, golfie);
                    _fun00028_ip = 639; continue _fun00027;
 173:
                    golfie = oscard.ready;
                    if(!golfie) { _fun00028_ip = 238; continue _fun00027 }
 182:
                    oscard = oscard.cached;
                    if(oscard) { _fun00028_ip = 238; continue _fun00027 }
 191:
                    golfie = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscard = 53;
                    oscard = offset[oscard];
                    yankee = golfie.bind(zuuluu)(oscard);
                    offset = yankee.addLocalMessages;
                    golfie = _closure2_slot0;
                    oscard = -2;
                    oscard = offset.bind(yankee)(golfie, oscard);
                    _fun00028_ip = 639; continue _fun00027;
 238:
                    golfie = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscard = 57;
                    oscard = offset[oscard];
                    golfie = golfie.bind(zuuluu)(oscard);
                    oscard = golfie.tryLoadAsync;
                    michal = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 58;
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
                    if(oscard) { _fun00028_ip = 642; continue _fun00027 }
 287:
                    if(!(report == michal)) { _fun00028_ip = 338; continue _fun00027 }
 291:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 53;
                    report = golfie[report];
                    offset = oscard.bind(zuuluu)(report);
                    golfie = offset.addLocalMessages;
                    oscard = _closure2_slot0;
                    report = -3;
                    report = golfie.bind(offset)(oscard, report);
                    _fun00028_ip = 639; continue _fun00027;
 338:
                    offset = _closure1_slot47;
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
                    oscard = 53;
                    oscard = offset[oscard];
                    offset = golfie.bind(zuuluu)(oscard);
                    golfie = offset.addLocalMessages;
                    oscard = michal.messages;
                    oscard = oscard.length;
                    oscard = golfie.bind(offset)(yankee, oscard);
                    report = report.completed;
                    if(report) { _fun00028_ip = 639; continue _fun00027 }
 475:
                    report = michal.messages;
                    oscard = report.length;
                    report = 0;
                    if(!(oscard > report)) { _fun00028_ip = 639; continue _fun00027 }
 495:
                    report = michal.messages;
                    oscard = report.length;
                    report = _closure2_slot3;
                    golfie = oscard >= report;
                    if(!golfie) { _fun00028_ip = 541; continue _fun00027 }
 517:
                    oscard = michal.connectionId;
                    offset = _closure1_slot7;
                    report = offset.lastTimeConnectedChanged;
                    report = report.bind(offset)();
                    golfie = oscard === report;
 541:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 44;
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
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00030_ip = 469; continue _fun00029 }
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
                    zuuluu = 56;
                    zuuluu = golfie[zuuluu];
                    oscard = oscard.bind(michal)(zuuluu);
                    zuuluu = oscard.database;
                    zuuluu = zuuluu.bind(oscard)();
                    _closure4_slot0 = zuuluu;
                    golfie = null;
                    if(!(golfie != zuuluu)) { _fun00030_ip = 466; continue _fun00029 }
 90:
                    if(!(golfie != verify)) { _fun00030_ip = 466; continue _fun00029 }
 97:
                    oscard = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    yankee = 54;
                    zuuluu = zuuluu[yankee];
                    offset = oscard.bind(michal)(zuuluu);
                    oscard = offset.getOrCreate;
                    zuuluu = _closure2_slot0;
                    zuuluu = oscard.bind(offset)(zuuluu);
                    zuuluu = zuuluu.hasMoreAfter;
                    if(zuuluu) { _fun00030_ip = 466; continue _fun00029 }
 144:
                    oscard = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 57;
                    zuuluu = offset[zuuluu];
                    offset = oscard.bind(michal)(zuuluu);
                    oscard = offset.tryLoadAsync;
                    zuuluu = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 58;
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
                    if(oscard) { _fun00030_ip = 463; continue _fun00029 }
 193:
                    if(!(golfie != zuuluu)) { _fun00030_ip = 466; continue _fun00029 }
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
                    if(yankee) { _fun00030_ip = 256; continue _fun00029 }
 251:
                    oscard = offset.id;
 256:
                    _closure4_slot1 = oscard;
                    if(!(golfie != oscard)) { _fun00030_ip = 287; continue _fun00029 }
 264:
                    golfie = zuuluu.messages;
                    oscard = golfie.filter;
                    report = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 55;
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
                    _fun00030_ip = 293; continue _fun00029;
 287:
                    golfie = zuuluu.messages;
 293:
                    offset = _closure1_slot47;
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
                    if(!(report !== oscard)) { _fun00030_ip = 466; continue _fun00029 }
 370:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 44;
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
                    _fun00030_ip = 466; continue _fun00029;
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
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
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
            if(michal) { _fun00032_ip = 925; continue _fun00031 }
 74:
            michal = option.ready;
            if(!michal) { _fun00032_ip = 925; continue _fun00031 }
 86:
            backup = null;
            verify = backup == oscard;
            zuuluu = undefined;
            michal = undefined;
            if(verify) { _fun00032_ip = 104; continue _fun00031 }
 99:
            michal = oscard.messageId;
 104:
            if(!(backup == michal)) { _fun00032_ip = 311; continue _fun00031 }
 111:
            verify = backup == offset;
            michal = undefined;
            if(verify) { _fun00032_ip = 125; continue _fun00031 }
 120:
            michal = offset.messageId;
 125:
            if(!(backup == michal)) { _fun00032_ip = 311; continue _fun00031 }
 132:
            if(!(backup != foxtra)) { _fun00032_ip = 152; continue _fun00031 }
 136:
            michal = option.hasBeforeCached;
            michal = michal.bind(option)(foxtra);
            if(michal) { _fun00032_ip = 246; continue _fun00031 }
 152:
            verify = backup == kiloes;
            if(verify) { _fun00032_ip = 175; continue _fun00031 }
 159:
            michal = option.hasAfterCached;
            michal = michal.bind(option)(kiloes);
            verify = !michal;
 175:
            michal = !verify;
            if(verify) { _fun00032_ip = 244; continue _fun00031 }
 181:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 44;
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
            _fun00032_ip = 309; continue _fun00031;
 246:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 44;
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
            if(verify) { _fun00032_ip = 325; continue _fun00031 }
 320:
            michal = oscard.messageId;
 325:
            if(!(backup != michal)) { _fun00032_ip = 353; continue _fun00031 }
 329:
            yankee = option.has;
            verify = oscard.messageId;
            michal = false;
            michal = yankee.bind(option)(verify, michal);
            if(michal) { _fun00032_ip = 860; continue _fun00031 }
 353:
            verify = backup == offset;
            michal = undefined;
            if(verify) { _fun00032_ip = 367; continue _fun00031 }
 362:
            michal = offset.messageId;
 367:
            romeon = oscard;
            if(!(backup != michal)) { _fun00032_ip = 413; continue _fun00031 }
 374:
            yankee = option.has;
            verify = offset.messageId;
            michal = false;
            michal = yankee.bind(option)(verify, michal);
            if(michal) { _fun00032_ip = 795; continue _fun00031 }
 398:
            michal = {};
            echoed = michal;
            result = offset;
            verify = copyDataProperties(echoed, result);
            romeon = michal;
 413:
            verify = backup == romeon;
            michal = undefined;
            if(verify) { _fun00032_ip = 427; continue _fun00031 }
 422:
            michal = romeon.messageId;
 427:
            michal = backup != michal;
            yankee = 0;
            if(!michal) { _fun00032_ip = 481; continue _fun00031 }
 436:
            verify = _closure1_slot1;
            foxtra = _closure1_slot2;
            michal = 55;
            michal = foxtra[michal];
            foxtra = verify.bind(zuuluu)(michal);
            verify = foxtra.extractTimestamp;
            kiloes = backup == romeon;
            michal = undefined;
            if(kiloes) { _fun00032_ip = 476; continue _fun00031 }
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
            if(!michal) { _fun00032_ip = 517; continue _fun00031 }
 513:
            michal = backup != foxtra;
 517:
            if(!michal) { _fun00032_ip = 560; continue _fun00031 }
 520:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kiloes = 55;
            kiloes = output[kiloes];
            output = sizing.bind(zuuluu)(kiloes);
            sizing = output.extractTimestamp;
            kiloes = foxtra.id;
            kiloes = sizing.bind(output)(kiloes);
            michal = kiloes >= yankee;
 560:
            if(michal) { _fun00032_ip = 625; continue _fun00031 }
 563:
            option = option.hasMoreAfter;
            option = !option;
            if(!option) { _fun00032_ip = 579; continue _fun00031 }
 575:
            option = backup != verify;
 579:
            if(!option) { _fun00032_ip = 622; continue _fun00031 }
 582:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kiloes = 55;
            kiloes = output[kiloes];
            output = sizing.bind(zuuluu)(kiloes);
            sizing = output.extractTimestamp;
            kiloes = verify.id;
            kiloes = sizing.bind(output)(kiloes);
            option = kiloes <= yankee;
 622:
            michal = option;
 625:
            if(michal) { _fun00032_ip = 728; continue _fun00031 }
 628:
            option = backup != foxtra;
            if(!option) { _fun00032_ip = 639; continue _fun00031 }
 635:
            option = backup != verify;
 639:
            if(!option) { _fun00032_ip = 682; continue _fun00031 }
 642:
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 55;
            backup = sizing[backup];
            kiloes = kiloes.bind(zuuluu)(backup);
            backup = kiloes.extractTimestamp;
            foxtra = foxtra.id;
            foxtra = backup.bind(kiloes)(foxtra);
            option = foxtra < yankee;
 682:
            if(!option) { _fun00032_ip = 725; continue _fun00031 }
 685:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 55;
            foxtra = kiloes[foxtra];
            backup = backup.bind(zuuluu)(foxtra);
            foxtra = backup.extractTimestamp;
            verify = verify.id;
            verify = foxtra.bind(backup)(verify);
            option = verify > yankee;
 725:
            michal = option;
 728:
            if(!michal) { _fun00032_ip = 793; continue _fun00031 }
 731:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 44;
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
            michal = 44;
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
            entity = 44;
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
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            tangon = arguments[2];
            zuuluu = arguments[3];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = undefined;
            if(!(tangon === michal)) { _fun00034_ip = 30; continue _fun00033 }
 28:
            tangon = true;
 30:
            var _closure2_slot2 = tangon;
            if(!(zuuluu === michal)) { _fun00034_ip = 40; continue _fun00033 }
 38:
            zuuluu = {};
 40:
            var _closure2_slot3 = zuuluu;
            zuuluu = _closure1_slot4;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00036_ip = 441; continue _fun00035 }
 12:
                        golfie = undefined;
                        var _closure4_slot0 = golfie;
                        michal = _closure2_slot1;
                        michal = michal.reaction;
                        if(michal) { _fun00036_ip = 420; continue _fun00035 }
 37:
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        michal = 59;
                        michal = oscard[michal];
                        report = report.bind(golfie)(michal);
                        michal = _closure2_slot0;
                        michal = report.bind(golfie)(michal);
                        SaveGenerator(address=73);
 71:
                        return michal;
 73:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00036_ip = 417; continue _fun00035 }
 82:
                        report = null;
                        if(!(report == michal)) { _fun00036_ip = 382; continue _fun00035 }
 91:
                        oscard = _closure2_slot3;
                        yankee = oscard.nonce;
                        if(!(report == yankee)) { _fun00036_ip = 135; continue _fun00035 }
 105:
                        oscard = _closure1_slot0;
                        verify = _closure1_slot2;
                        report = 48;
                        report = verify[report];
                        oscard = oscard.bind(golfie)(report);
                        report = oscard.createNonce;
                        yankee = report.bind(oscard)();
 135:
                        report = {};
                        result = _closure2_slot3;
                        echoed = report;
                        oscard = copyDataProperties(echoed, result);
                        oscard = 'nonce';
                        report[oscard] = yankee;
                        _closure2_slot3 = report;
                        oscard = _closure1_slot1;
                        verify = _closure1_slot2;
                        report = 60;
                        report = verify[report];
                        verify = oscard.bind(golfie)(report);
                        oscard = verify.backgroundify;
                        report = function() {
                            report = _closure1_slot52;
                            tangon = report._sendMessage;
                            zuuluu = _closure2_slot0;
                            michal = _closure2_slot1;
                            entity = _closure2_slot3;
                            entity = tangon.bind(report)(zuuluu, michal, entity);
                            return entity;
                        };
                        oscard = oscard.bind(verify)(report, golfie);
                        _closure4_slot0 = oscard;
                        verify = _closure1_slot10;
                        report = verify.recordMessageSendAttempt;
                        offset = _closure2_slot0;
                        report = report.bind(verify)(offset, yankee);
                        verify = _closure1_slot22;
                        report = verify.isReady;
                        report = report.bind(verify)(offset);
                        if(report) { _fun00036_ip = 375; continue _fun00035 }
 245:
                        report = _closure2_slot2;
                        if(!report) { _fun00036_ip = 286; continue _fun00035 }
 252:
                        verify = _closure2_slot0;
                        offset = _closure1_slot0;
                        yankee = _closure1_slot2;
                        report = 52;
                        report = yankee[report];
                        report = offset.bind(golfie)(report);
                        report = report.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        if(!(verify === report)) { _fun00036_ip = 292; continue _fun00035 }
 286:
                        report = oscard.bind(golfie)();
                        _fun00036_ip = 373; continue _fun00035;
 292:
                        romeon = _closure1_slot48;
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
                                zuuluu = _closure1_slot48;
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
                        _fun00036_ip = 379; continue _fun00035;
 375:
                        report = oscard.bind(golfie)();
 379:
                        return report;
 382:
                        golfie = _closure1_slot52;
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
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            if(!(michal != zuuluu)) { _fun00038_ip = 141; continue _fun00037 }
 12:
            entity = {};
            tangon = {};
            oscard = zuuluu.channel;
            report = oscard.getGuildId;
            oscard = report.bind(oscard)();
            golfie = michal != oscard;
            report = undefined;
            if(!golfie) { _fun00038_ip = 43; continue _fun00037 }
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
            if(zuuluu) { _fun00038_ip = 134; continue _fun00037 }
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
            _fun00038_ip = 143; continue _fun00037;
 141:
            entity = {};
 143:
            return entity;
        }
    };
    michal['getSendMessageOptionsForReply'] = option;
    option = function(argFoo) { // Original name: getSendMessageOptionsForConfettiPotion
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
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
            if(!(entity != report)) { _fun00040_ip = 104; continue _fun00039 }
 51:
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 61;
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
            if(entity) { _fun00040_ip = 108; continue _fun00039 }
 104:
            entity = {};
            _fun00040_ip = 135; continue _fun00039;
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
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            michal = argFoo;
            entity = michal.isGif;
            michal = michal.stickers;
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00042_ip = 44; continue _fun00041 }
 21:
            tangon = michal.length;
            zuuluu = 0;
            if(!(zuuluu !== tangon)) { _fun00042_ip = 44; continue _fun00041 }
 32:
            if(entity) { _fun00042_ip = 44; continue _fun00041 }
 35:
            entity = {};
            entity['stickerIds'] = michal;
            _fun00042_ip = 46; continue _fun00041;
 44:
            entity = {};
 46:
            return entity;
        }
    };
    michal['getSendMessageOptionsForStickers'] = option;
    option = function(argFoo) { // Original name: getSendMessageOptionsForScheduledMessage
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            michal = entity.scheduledTimestamp;
            entity = null;
            if(!(entity != michal)) { _fun00044_ip = 24; continue _fun00043 }
 15:
            entity = {};
            entity['scheduledTimestamp'] = michal;
            _fun00044_ip = 26; continue _fun00043;
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
        oscard = _closure1_slot52;
        tangon = oscard.getSendMessageOptionsForReply;
        zuuluu = report.pendingReply;
        option = tangon.bind(oscard)(zuuluu);
        verify = entity;
        zuuluu = copyDataProperties(verify, option);
        oscard = _closure1_slot52;
        tangon = oscard.getSendMessageOptionsForConfettiPotion;
        zuuluu = {};
        verify = zuuluu;
        option = report;
        golfie = copyDataProperties(verify, option);
        option = tangon.bind(oscard)(zuuluu);
        verify = entity;
        zuuluu = copyDataProperties(verify, option);
        oscard = _closure1_slot52;
        tangon = oscard.getSendMessageOptionsForStickers;
        zuuluu = {};
        verify = zuuluu;
        option = report;
        golfie = copyDataProperties(verify, option);
        option = tangon.bind(oscard)(zuuluu);
        verify = entity;
        zuuluu = copyDataProperties(verify, option);
        tangon = _closure1_slot52;
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
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            oscard = argCor;
            offset = argGra;
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 62;
            michal = michal[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(michal);
            michal = argBar;
            verify = tangon.bind(entity)(michal);
            golfie = null;
            michal = verify;
            if(!(golfie != offset)) { _fun00046_ip = 76; continue _fun00045 }
 48:
            tangon = global;
            tangon = tangon.HermesInternal;
            option = tangon.concat;
            report = '';
            tangon = '\n';
            michal = option.bind(report)(offset, tangon, verify);
 76:
            report = _closure1_slot52;
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
            if(!golfie) { _fun00046_ip = 138; continue _fun00045 }
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
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            oscard = argCor;
            report = _closure1_slot52;
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
            if(!golfie) { _fun00048_ip = 73; continue _fun00047 }
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
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            oscard = arguments[2];
            entity = arguments[3];
            michal = arguments[4];
            zuuluu = undefined;
            if(!(oscard === zuuluu)) { _fun00050_ip = 19; continue _fun00049 }
 15:
            oscard = '';
 19:
            if(!(entity === zuuluu)) { _fun00050_ip = 25; continue _fun00049 }
 23:
            entity = {};
 25:
            if(!(michal === zuuluu)) { _fun00050_ip = 31; continue _fun00049 }
 29:
            michal = false;
 31:
            report = _closure1_slot52;
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
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            offset = argFoo;
            verify = argBar;
            michal = arguments[2];
            var _closure2_slot0 = offset;
            var _closure2_slot1 = verify;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00052_ip = 27; continue _fun00051 }
 25:
            michal = {};
 27:
            oscard = michal.messageReference;
            golfie = michal.allowedMentions;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 50;
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
                zuuluu = 63;
                report = oscard[zuuluu];
                zuuluu = undefined;
                offset = tangon.bind(zuuluu)(report);
                option = offset.donateSentMessage;
                report = entity.body;
                golfie = report.content;
                verify = _closure2_slot0;
                golfie = option.bind(offset)(golfie, verify);
                option = _closure1_slot52;
                golfie = option.receiveMessage;
                michal = entity.body;
                michal = golfie.bind(option)(verify, michal);
                michal = 44;
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
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot47;
                    tangon = report.log;
                    zuuluu = 'Failed to send greeting';
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = entity.status;
                    zuuluu = 429;
                    if(!(zuuluu !== tangon)) { _fun00054_ip = 75; continue _fun00053 }
 42:
                    oscard = _closure1_slot52;
                    report = oscard.sendClydeError;
                    tangon = _closure2_slot0;
                    zuuluu = entity.body;
                    zuuluu = zuuluu.code;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
 75:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 44;
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
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = arguments[2];
            michal = undefined;
            if(!(entity === michal)) { _fun00056_ip = 11; continue _fun00055 }
 9:
            entity = {};
 11:
            report = _closure1_slot52;
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
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.some;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.animated;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            if(!entity) { _fun00058_ip = 131; continue _fun00057 }
 24:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 64;
            michal = tangon[michal];
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.canUseAnimatedEmojis;
            michal = argBar;
            michal = zuuluu.bind(tangon)(michal);
            if(michal) { _fun00058_ip = 131; continue _fun00057 }
 66:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 42;
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
            _fun00058_ip = 199; continue _fun00057;
 131:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 42;
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
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00060_ip = 1836; continue _fun00059 }
 12:
                    yankee = undefined;
                    var _closure4_slot0 = yankee;
                    var _closure4_slot1 = yankee;
                    var _closure4_slot2 = yankee;
                    var _closure4_slot3 = yankee;
                    var _closure4_slot4 = yankee;
                    var _closure4_slot5 = yankee;
                    var _closure4_slot6 = yankee;
                    var _closure4_slot7 = yankee;
                    ctrled = undefined;
                    offset = undefined;
                    kiloes = undefined;
                    var _closure4_slot8 = yankee;
                    var _closure4_slot9 = yankee;
                    vacuum = undefined;
                    var _closure4_slot10 = yankee;
                    var _closure4_slot11 = yankee;
                    update = undefined;
                    var _closure4_slot12 = yankee;
                    backup = undefined;
                    var _closure4_slot13 = yankee;
                    output = undefined;
                    romeon = undefined;
                    verify = undefined;
                    option = undefined;
                    golfie = undefined;
                    oscard = undefined;
                    report = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    tangon = 59;
                    tangon = foxtra[tangon];
                    report = report.bind(yankee)(tangon);
                    tangon = _closure2_slot0;
                    tangon = report.bind(yankee)(tangon);
                    foxtra = null;
                    if(!(foxtra == tangon)) { _fun00060_ip = 1797; continue _fun00059 }
 138:
                    report = _closure2_slot1;
                    status = report.content;
                    _closure4_slot0 = status;
                    variable36 = report.invalidEmojis;
                    sizing = report.validNonShortcutEmojis;
                    _closure4_slot1 = sizing;
                    report = report.tts;
                    whisks = yankee !== report;
                    if(!whisks) { _fun00060_ip = 183; continue _fun00059 }
 180:
                    whisks = report;
 183:
                    sizing = _closure2_slot2;
                    report = sizing.activityAction;
                    target = sizing.location;
                    _closure4_slot2 = target;
                    result = sizing.suggestedInvite;
                    _closure4_slot3 = result;
                    config = sizing.stickerIds;
                    _closure4_slot4 = config;
                    echoed = sizing.confettiPotionData;
                    limora = sizing.messageReference;
                    _closure4_slot5 = limora;
                    sierra = sizing.allowedMentions;
                    record = sizing.poll;
                    _closure4_slot6 = record;
                    sequen = sizing.contentInventoryEntry;
                    _closure4_slot7 = sequen;
                    result = sizing.attachments;
                    ctrled = sizing.attachmentsToUpload;
                    offset = sizing.onAttachmentUploadError;
                    cntext = sizing.flags;
                    papara = foxtra != cntext;
                    sizing = 0;
                    variable38 = 0;
                    if(!papara) { _fun00060_ip = 301; continue _fun00059 }
 298:
                    variable38 = cntext;
 301:
                    papara = _closure1_slot1;
                    equals = _closure1_slot2;
                    cntext = 65;
                    cntext = equals[cntext];
                    cntext = papara.bind(yankee)(cntext);
                    equals = cntext.bind(yankee)(status);
                    papara = _closure1_slot3;
                    cntext = 2;
                    equals = papara.bind(yankee)(equals, cntext);
                    cntext = equals[sizing];
                    papara = 1;
                    papara = equals[papara];
                    equals = status;
                    status = variable38;
                    if(!cntext) { _fun00060_ip = 408; continue _fun00059 }
 359:
                    _closure4_slot0 = papara;
                    quebec = _closure1_slot0;
                    variable37 = _closure1_slot2;
                    cntext = 66;
                    cntext = variable37[cntext];
                    variable37 = quebec.bind(yankee)(cntext);
                    quebec = variable37.addFlag;
                    cntext = _closure1_slot34;
                    cntext = cntext.SUPPRESS_NOTIFICATIONS;
                    status = quebec.bind(variable37)(variable38, cntext);
                    equals = papara;
 408:
                    papara = false;
                    kiloes = false;
                    cntext = _closure2_slot2;
                    cntext = cntext.messageReference;
                    variable37 = foxtra == cntext;
                    quebec = undefined;
                    if(variable37) { _fun00060_ip = 436; continue _fun00059 }
 431:
                    quebec = cntext.type;
 436:
                    cntext = _closure1_slot40;
                    cntext = cntext.FORWARD;
                    cntext = quebec === cntext;
                    _closure4_slot8 = cntext;
                    quebec = '';
                    if(!(quebec === equals)) { _fun00060_ip = 536; continue _fun00059 }
 462:
                    if(!(foxtra == report)) { _fun00060_ip = 536; continue _fun00059 }
 466:
                    if(!(foxtra == config)) { _fun00060_ip = 536; continue _fun00059 }
 470:
                    if(!(foxtra == record)) { _fun00060_ip = 536; continue _fun00059 }
 474:
                    if(!(foxtra == sequen)) { _fun00060_ip = 536; continue _fun00059 }
 478:
                    if(cntext) { _fun00060_ip = 536; continue _fun00059 }
 481:
                    if(!(foxtra != result)) { _fun00060_ip = 494; continue _fun00059 }
 485:
                    cntext = result.length;
                    if(!(sizing === cntext)) { _fun00060_ip = 536; continue _fun00059 }
 494:
                    cntext = ctrled;
                    if(!(foxtra != cntext)) { _fun00060_ip = 513; continue _fun00059 }
 501:
                    cntext = ctrled;
                    cntext = cntext.length;
                    if(!(!(cntext > sizing))) { _fun00060_ip = 534; continue _fun00059 }
 513:
                    cntext = global;
                    quebec = cntext.Promise;
                    cntext = quebec.resolve;
                    cntext = cntext.bind(quebec)();
                    return cntext;
 534:
                    kiloes = true;
 536:
                    if(!(foxtra == limora)) { _fun00060_ip = 552; continue _fun00059 }
 540:
                    cntext = _closure1_slot36;
                    variable37 = cntext.DEFAULT;
                    _fun00060_ip = 562; continue _fun00059;
 552:
                    cntext = _closure1_slot36;
                    variable37 = cntext.REPLY;
 562:
                    _closure4_slot9 = variable37;
                    cntext = _closure2_slot2;
                    cntext = cntext.nonce;
                    if(!(foxtra == cntext)) { _fun00060_ip = 610; continue _fun00059 }
 580:
                    variable38 = _closure1_slot0;
                    variable39 = _closure1_slot2;
                    quebec = 48;
                    quebec = variable39[quebec];
                    variable38 = variable38.bind(yankee)(quebec);
                    quebec = variable38.createNonce;
                    cntext = quebec.bind(variable38)();
 610:
                    vacuum = cntext;
                    _closure4_slot10 = cntext;
                    _closure4_slot11 = cntext;
                    quebec = _closure1_slot1;
                    variable38 = _closure1_slot2;
                    cntext = 45;
                    cntext = variable38[cntext];
                    quebec = quebec.bind(yankee)(cntext);
                    cntext = {};
                    variable38 = _closure2_slot0;
                    cntext['channelId'] = variable38;
                    cntext['content'] = equals;
                    cntext['tts'] = whisks;
                    cntext['type'] = variable37;
                    cntext['messageReference'] = limora;
                    cntext['allowedMentions'] = sierra;
                    variable37 = undefined;
                    if(!(sizing !== status)) { _fun00060_ip = 683; continue _fun00059 }
 680:
                    variable37 = status;
 683:
                    cntext['flags'] = variable37;
                    variable37 = vacuum;
                    cntext['nonce'] = variable37;
                    variable38 = _closure1_slot0;
                    variable39 = _closure1_slot2;
                    variable37 = 67;
                    variable37 = variable39[variable37];
                    variable38 = variable38.bind(yankee)(variable37);
                    variable37 = variable38.createPollServerDataFromCreateRequest;
                    variable37 = variable37.bind(variable38)(record);
                    cntext['poll'] = variable37;
                    update = quebec.bind(yankee)(cntext);
                    cntext = _closure2_slot2;
                    cntext = cntext.eagerDispatch;
                    if(!(papara !== cntext)) { _fun00060_ip = 867; continue _fun00059 }
 750:
                    papara = _closure1_slot0;
                    quebec = _closure1_slot2;
                    cntext = 68;
                    cntext = quebec[cntext];
                    variable37 = papara.bind(yankee)(cntext);
                    quebec = variable37.updateComboOnMessageSend;
                    papara = _closure2_slot0;
                    cntext = update;
                    cntext = cntext.id;
                    cntext = quebec.bind(variable37)(papara, cntext);
                    if(!(foxtra != config)) { _fun00060_ip = 837; continue _fun00059 }
 798:
                    papara = update;
                    quebec = config.map;
                    cntext = function(argFoo) {
                        zuuluu = _closure1_slot16;
                        michal = zuuluu.getStickerById;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    variable37 = quebec.bind(config)(cntext);
                    quebec = variable37.filter;
                    cntext = function(argFoo) {
                        michal = null;
                        entity = argFoo;
                        entity = michal != entity;
                        return entity;
                    };
                    cntext = quebec.bind(variable37)(cntext);
                    papara['sticker_items'] = cntext;
 837:
                    variable39 = _closure1_slot52;
                    variable38 = variable39.receiveMessage;
                    variable43 = _closure2_slot0;
                    variable42 = update;
                    variable40 = _closure2_slot2;
                    variable41 = true;
                    variable44 = variable39;
                    cntext = variable44[variable38](variable43, variable42, variable41, variable40, variable39);
 867:
                    cntext = _closure1_slot49;
                    if(cntext) { _fun00060_ip = 956; continue _fun00059 }
 874:
                    if(!(foxtra != variable36)) { _fun00060_ip = 956; continue _fun00059 }
 878:
                    cntext = variable36.length;
                    if(!(cntext > sizing)) { _fun00060_ip = 956; continue _fun00059 }
 887:
                    cntext = true;
                    _closure1_slot49 = cntext;
                    papara = _closure1_slot26;
                    cntext = papara.getCurrentUser;
                    quebec = cntext.bind(papara)();
                    papara = _closure1_slot52;
                    cntext = papara.validateMessage;
                    variable37 = _closure2_slot0;
                    cntext = cntext.bind(papara)(variable36, quebec, variable37);
                    variable36 = cntext.errorMessage;
                    quebec = cntext.errorMessageName;
                    papara = _closure1_slot52;
                    cntext = papara.sendBotMessage;
                    cntext = cntext.bind(papara)(variable37, variable36, quebec);
 956:
                    cntext = {};
                    quebec = _closure1_slot0;
                    variable36 = _closure1_slot2;
                    papara = 69;
                    papara = variable36[papara];
                    papara = quebec.bind(yankee)(papara);
                    papara = papara.MessageDataType;
                    papara = papara.SEND;
                    cntext['type'] = papara;
                    papara = {};
                    quebec = _closure2_slot0;
                    papara['channelId'] = quebec;
                    papara['content'] = equals;
                    equals = vacuum;
                    papara['nonce'] = equals;
                    papara['tts'] = whisks;
                    papara['message_reference'] = limora;
                    papara['allowed_mentions'] = sierra;
                    papara['flags'] = status;
                    papara['analyticsLocation'] = target;
                    cntext['message'] = papara;
                    backup = cntext;
                    _closure4_slot13 = cntext;
                    if(!(foxtra != report)) { _fun00060_ip = 1227; continue _fun00059 }
 1058:
                    papara = foxtra == report;
                    cntext = undefined;
                    if(papara) { _fun00060_ip = 1079; continue _fun00059 }
 1067:
                    papara = report.activity;
                    cntext = papara.session_id;
 1079:
                    status = report.type;
                    papara = _closure1_slot44;
                    target = papara.JOIN_REQUEST;
                    papara = cntext;
                    if(!(status !== target)) { _fun00060_ip = 1122; continue _fun00059 }
 1101:
                    papara = cntext;
                    if(!(foxtra == papara)) { _fun00060_ip = 1122; continue _fun00059 }
 1108:
                    target = _closure1_slot18;
                    cntext = target.getSessionId;
                    papara = cntext.bind(target)();
 1122:
                    if(!(foxtra != papara)) { _fun00060_ip = 1227; continue _fun00059 }
 1126:
                    cntext = {};
                    target = report.type;
                    cntext['type'] = target;
                    cntext['session_id'] = papara;
                    papara = report.activity;
                    report = papara.party;
                    report = foxtra != report;
                    if(!report) { _fun00060_ip = 1176; continue _fun00059 }
 1161:
                    target = papara.party;
                    target = target.id;
                    report = foxtra != target;
 1176:
                    if(!report) { _fun00060_ip = 1196; continue _fun00059 }
 1179:
                    report = papara.party;
                    report = report.id;
                    cntext['party_id'] = report;
 1196:
                    report = backup;
                    target = report.message;
                    papara = papara.application_id;
                    target['application_id'] = papara;
                    report = report.message;
                    report['activity'] = cntext;
 1227:
                    if(!(foxtra != record)) { _fun00060_ip = 1245; continue _fun00059 }
 1231:
                    report = backup;
                    report = report.message;
                    report['poll'] = record;
 1245:
                    if(!(foxtra != config)) { _fun00060_ip = 1263; continue _fun00059 }
 1249:
                    report = backup;
                    report = report.message;
                    report['sticker_ids'] = config;
 1263:
                    config = _closure1_slot11;
                    report = config.isEnabled;
                    report = report.bind(config)();
                    if(!report) { _fun00060_ip = 1298; continue _fun00059 }
 1280:
                    report = backup;
                    config = report.message;
                    report = true;
                    config['has_poggermode_enabled'] = report;
 1298:
                    if(!(foxtra != sequen)) { _fun00060_ip = 1316; continue _fun00059 }
 1302:
                    report = backup;
                    report = report.message;
                    report['content_inventory_entry'] = sequen;
 1316:
                    if(!(foxtra != echoed)) { _fun00060_ip = 1377; continue _fun00059 }
 1320:
                    report = backup;
                    sequen = report.message;
                    config = _closure1_slot0;
                    record = _closure1_slot2;
                    report = 61;
                    report = record[report];
                    config = config.bind(yankee)(report);
                    report = config.constructCreateConfettiPotionRequest;
                    report = report.bind(config)(echoed);
                    sequen['confetti_potion'] = report;
                    report = echoed.callback;
                    report = report.bind(echoed)();
 1377:
                    report = foxtra != result;
                    if(!report) { _fun00060_ip = 1393; continue _fun00059 }
 1384:
                    echoed = result.length;
                    report = echoed > sizing;
 1393:
                    if(!report) { _fun00060_ip = 1410; continue _fun00059 }
 1396:
                    report = backup;
                    report = report.message;
                    report['attachments'] = result;
 1410:
                    report = ctrled;
                    if(!(foxtra != report)) { _fun00060_ip = 1610; continue _fun00059 }
 1420:
                    report = ctrled;
                    report = report.length;
                    if(!(report > sizing)) { _fun00060_ip = 1610; continue _fun00059 }
 1435: // try_start_0
                    result = _closure1_slot0;
                    echoed = _closure1_slot2;
                    report = 70;
                    report = echoed[report];
                    echoed = result.bind(yankee)(report);
                    result = echoed.uploadMessageAttachments;
                    report = {};
                    sequen = _closure2_slot0;
                    report['channelId'] = sequen;
                    report['nonce'] = vacuum;
                    report['items'] = ctrled;
                    report['message'] = update;
                    source = _closure2_slot2;
                    source = source.doNotNotifyOnError;
                    source = !source;
                    update = source;
                    if(!source) { _fun00060_ip = 1506; continue _fun00059 }
 1504:
                    update = undefined;
 1506:
                    report['shouldUploadFailureSendNotification'] = update;
                    report = result.bind(echoed)(report);
                    SaveGenerator(address=1520);
 1518:
                    return report;
 1520:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=17);
                    if(result) { _fun00060_ip = 1652; continue _fun00059 }
 1529:
                    output = report;
                    if(!(foxtra != report)) { _fun00060_ip = 1649; continue _fun00059 }
 1536:
                    romeon = output.attachments;
                    output = output.uploader;
                    _closure4_slot12 = output;
                    if(!kiloes) { _fun00060_ip = 1574; continue _fun00059 }
 1555:
                    kiloes = romeon;
                    if(!(foxtra != kiloes)) { _fun00060_ip = 1646; continue _fun00059 }
 1562:
                    kiloes = romeon;
                    kiloes = kiloes.length;
                    if(!(sizing !== kiloes)) { _fun00060_ip = 1646; continue _fun00059 }
 1574:
                    kiloes = romeon;
                    if(!(foxtra != kiloes)) { _fun00060_ip = 1610; continue _fun00059 }
 1581:
                    backup = backup.message;
                    sizing = romeon;
                    kiloes = sizing.map;
                    romeon = function(argFoo, argBar) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 71;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.getAttachmentPayload;
                        michal = argFoo;
                        entity = argBar;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    romeon = kiloes.bind(sizing)(romeon);
                    backup['attachments'] = romeon;
 1610: // try_end0
                    romeon = global;
                    kiloes = romeon.Promise;
                    romeon = kiloes.prototype;
                    backup = Object.create(romeon, {constructor: {value: kiloes}});
                    variable43 = function(argFoo, argBar) {
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
                        zuuluu = 69;
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
                        verify = _closure1_slot48;
                        option = verify.info;
                        golfie = golfie.HermesInternal;
                        offset = golfie.concat;
                        golfie = 'Queueing message to be sent LogId:';
                        golfie = offset.bind(golfie)(oscard);
                        golfie = option.bind(verify)(golfie);
                        zuuluu = report[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.enqueue;
                        zuuluu = _closure4_slot13;
                        michal = function(argFoo) {
                            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                                zuuluu = argFoo;
                                entity = global;
                                michal = entity.Date;
                                entity = michal.now;
                                tangon = entity.bind(michal)();
                                michal = _closure5_slot2;
                                kiloes = tangon - michal;
                                michal = zuuluu.ok;
                                if(michal) { _fun00062_ip = 1211; continue _fun00061 }
 48:
                                verify = _closure1_slot47;
                                option = verify.log;
                                oscard = {};
                                michal = zuuluu.hasErr;
                                oscard['hasErr'] = michal;
                                michal = zuuluu.status;
                                oscard['status'] = michal;
                                yankee = zuuluu.body;
                                golfie = null;
                                romeon = golfie == yankee;
                                report = undefined;
                                michal = undefined;
                                if(romeon) { _fun00062_ip = 103; continue _fun00061 }
 98:
                                michal = yankee.code;
 103:
                                oscard['code'] = michal;
                                michal = zuuluu.err;
                                oscard['error'] = michal;
                                michal = 'Failed to send message';
                                michal = option.bind(verify)(michal, oscard);
                                michal = zuuluu.hasErr;
                                if(michal) { _fun00062_ip = 720; continue _fun00061 }
 141:
                                oscard = zuuluu.status;
                                michal = 400;
                                option = oscard >= michal;
                                yankee = undefined;
                                michal = false;
                                if(!option) { _fun00062_ip = 749; continue _fun00061 }
 166:
                                verify = zuuluu.status;
                                option = 500;
                                option = verify < option;
                                yankee = undefined;
                                michal = false;
                                if(!option) { _fun00062_ip = 749; continue _fun00061 }
 191:
                                option = zuuluu.body;
                                yankee = undefined;
                                michal = false;
                                if(!option) { _fun00062_ip = 749; continue _fun00061 }
 206:
                                option = zuuluu.body;
                                verify = option.code;
                                option = _closure1_slot27;
                                option = option.SLOWMODE_RATE_LIMITED;
                                if(!(verify !== option)) { _fun00062_ip = 579; continue _fun00061 }
 233:
                                verify = _closure1_slot0;
                                romeon = _closure1_slot2;
                                option = 79;
                                option = romeon[option];
                                option = verify.bind(report)(option);
                                romeon = option.AUTOMOD_ERROR_CODES;
                                verify = romeon.has;
                                option = zuuluu.body;
                                option = option.code;
                                option = verify.bind(romeon)(option);
                                if(option) { _fun00062_ip = 483; continue _fun00061 }
 285:
                                option = zuuluu.body;
                                verify = option.code;
                                option = _closure1_slot27;
                                option = option.POGGERMODE_TEMPORARILY_DISABLED;
                                if(!(verify !== option)) { _fun00062_ip = 434; continue _fun00061 }
 312:
                                option = zuuluu.body;
                                verify = option.code;
                                option = _closure1_slot27;
                                option = option.EXPLICIT_CONTENT;
                                if(!(verify !== option)) { _fun00062_ip = 417; continue _fun00061 }
 336:
                                option = _closure4_slot6;
                                option = golfie != option;
                                if(option) { _fun00062_ip = 354; continue _fun00061 }
 350:
                                option = _closure4_slot8;
 354:
                                if(option) { _fun00062_ip = 365; continue _fun00061 }
 357:
                                verify = _closure4_slot7;
                                option = golfie != verify;
 365:
                                yankee = undefined;
                                michal = false;
                                if(option) { _fun00062_ip = 749; continue _fun00061 }
 375:
                                foxtra = _closure1_slot52;
                                romeon = foxtra.sendClydeError;
                                verify = _closure2_slot0;
                                option = zuuluu.body;
                                option = option.code;
                                option = romeon.bind(foxtra)(verify, option);
                                yankee = undefined;
                                michal = false;
                                _fun00062_ip = 749; continue _fun00061;
 417:
                                option = _closure1_slot46;
                                yankee = option.EXPLICIT_CONTENT;
                                michal = false;
                                _fun00062_ip = 749; continue _fun00061;
 434:
                                verify = _closure1_slot1;
                                romeon = _closure1_slot2;
                                option = 44;
                                option = romeon[option];
                                romeon = verify.bind(report)(option);
                                verify = romeon.dispatch;
                                option = {};
                                foxtra = 'POGGERMODE_TEMPORARILY_DISABLED';
                                option['type'] = foxtra;
                                option = verify.bind(romeon)(option);
                                yankee = undefined;
                                michal = false;
                                _fun00062_ip = 749; continue _fun00061;
 483:
                                verify = _closure1_slot1;
                                romeon = _closure1_slot2;
                                option = 44;
                                option = romeon[option];
                                romeon = verify.bind(report)(option);
                                verify = romeon.dispatch;
                                option = {};
                                foxtra = 'MESSAGE_SEND_FAILED_AUTOMOD';
                                option['type'] = foxtra;
                                foxtra = _closure4_slot13;
                                option['messageData'] = foxtra;
                                foxtra = {};
                                backup = zuuluu.body;
                                backup = backup.code;
                                foxtra['code'] = backup;
                                backup = zuuluu.body;
                                backup = backup.message;
                                foxtra['message'] = backup;
                                option['errorResponseBody'] = foxtra;
                                option = verify.bind(romeon)(option);
                                yankee = undefined;
                                michal = false;
                                _fun00062_ip = 749; continue _fun00061;
 579:
                                option = zuuluu.body;
                                backup = option.retry_after;
                                option = golfie != backup;
                                if(!option) { _fun00062_ip = 603; continue _fun00061 }
 597:
                                verify = 0;
                                option = backup > verify;
 603:
                                yankee = undefined;
                                michal = false;
                                if(!option) { _fun00062_ip = 749; continue _fun00061 }
 613:
                                sizing = _closure1_slot1;
                                output = _closure1_slot2;
                                option = 44;
                                option = output[option];
                                romeon = sizing.bind(report)(option);
                                verify = romeon.dispatch;
                                option = {};
                                foxtra = 'SLOWMODE_SET_COOLDOWN';
                                option['type'] = foxtra;
                                foxtra = _closure2_slot0;
                                option['channelId'] = foxtra;
                                foxtra = _closure1_slot25;
                                foxtra = foxtra.SendMessage;
                                option['slowmodeType'] = foxtra;
                                foxtra = 78;
                                foxtra = output[foxtra];
                                foxtra = sizing.bind(report)(foxtra);
                                foxtra = foxtra.Millis;
                                foxtra = foxtra.SECOND;
                                foxtra = backup * foxtra;
                                option['cooldownMs'] = foxtra;
                                option = verify.bind(romeon)(option);
                                yankee = undefined;
                                michal = false;
                                _fun00062_ip = 749; continue _fun00061;
 720:
                                oscard = zuuluu.err;
                                option = oscard.code;
                                michal = false;
                                oscard = 'ABORTED';
                                yankee = undefined;
                                if(!(oscard === option)) { _fun00062_ip = 749; continue _fun00061 }
 745:
                                michal = true;
                                yankee = undefined;
 749:
                                if(michal) { _fun00062_ip = 1164; continue _fun00061 }
 755:
                                oscard = _closure4_slot12;
                                if(!(golfie != oscard)) { _fun00062_ip = 852; continue _fun00061 }
 766:
                                option = _closure1_slot1;
                                verify = _closure1_slot2;
                                oscard = 44;
                                oscard = verify[oscard];
                                verify = option.bind(report)(oscard);
                                option = verify.dispatch;
                                oscard = {};
                                romeon = 'UPLOAD_FAIL';
                                oscard['type'] = romeon;
                                romeon = _closure2_slot0;
                                oscard['channelId'] = romeon;
                                romeon = _closure4_slot12;
                                romeon = romeon._file;
                                oscard['file'] = romeon;
                                romeon = _closure4_slot11;
                                oscard['messageId'] = romeon;
                                oscard['reason'] = yankee;
                                romeon = true;
                                oscard['noSendFailed'] = romeon;
                                oscard = option.bind(verify)(oscard);
 852:
                                oscard = zuuluu.hasErr;
                                if(oscard) { _fun00062_ip = 951; continue _fun00061 }
 861:
                                oscard = _closure1_slot46;
                                oscard = oscard.EXPLICIT_CONTENT;
                                if(!(yankee === oscard)) { _fun00062_ip = 951; continue _fun00061 }
 875:
                                romeon = _closure1_slot52;
                                verify = romeon.sendExplicitMediaClydeError;
                                option = _closure2_slot0;
                                oscard = zuuluu.body;
                                foxtra = golfie == oscard;
                                golfie = undefined;
                                if(foxtra) { _fun00062_ip = 912; continue _fun00061 }
 906:
                                golfie = oscard.attachments;
 912:
                                foxtra = _closure1_slot0;
                                backup = _closure1_slot2;
                                oscard = 49;
                                oscard = backup[oscard];
                                oscard = foxtra.bind(report)(oscard);
                                oscard = oscard.TrackMediaRedactionContext;
                                oscard = oscard.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED;
                                oscard = verify.bind(romeon)(option, golfie, oscard);
 951:
                                golfie = _closure1_slot1;
                                option = _closure1_slot2;
                                oscard = 44;
                                oscard = option[oscard];
                                verify = golfie.bind(report)(oscard);
                                golfie = verify.dispatch;
                                oscard = {};
                                romeon = 'MESSAGE_SEND_FAILED';
                                oscard['type'] = romeon;
                                michal = _closure4_slot11;
                                oscard['messageId'] = michal;
                                romeon = _closure2_slot0;
                                oscard['channelId'] = romeon;
                                romeon = _closure2_slot2;
                                romeon = romeon.doNotNotifyOnError;
                                romeon = !romeon;
                                oscard['shouldNotify'] = romeon;
                                oscard['reason'] = yankee;
                                oscard = golfie.bind(verify)(oscard);
                                golfie = _closure1_slot0;
                                oscard = 72;
                                oscard = option[oscard];
                                option = golfie.bind(report)(oscard);
                                golfie = option.logMessageSendFailure;
                                oscard = {};
                                yankee = zuuluu.hasErr;
                                verify = undefined;
                                if(yankee) { _fun00062_ip = 1073; continue _fun00061 }
 1068:
                                verify = zuuluu.status;
 1073:
                                oscard['failureCode'] = verify;
                                yankee = zuuluu.hasErr;
                                verify = undefined;
                                if(!yankee) { _fun00062_ip = 1100; continue _fun00061 }
 1089:
                                yankee = zuuluu.err;
                                verify = yankee.message;
 1100:
                                oscard['errorMessage'] = verify;
                                oscard = golfie.bind(option)(oscard);
                                golfie = _closure1_slot1;
                                option = _closure1_slot2;
                                oscard = 69;
                                oscard = option[oscard];
                                golfie = golfie.bind(report)(oscard);
                                oscard = golfie.cancelPendingSendRequests;
                                michal = _closure2_slot0;
                                golfie = oscard.bind(golfie)(michal);
                                oscard = golfie.forEach;
                                michal = function(argFoo) {
                                    report = argFoo;
                                    oscard = _closure1_slot47;
                                    tangon = oscard.log;
                                    zuuluu = report.nonce;
                                    michal = 'Cancelling pending message';
                                    michal = tangon.bind(oscard)(michal, zuuluu);
                                    zuuluu = _closure1_slot1;
                                    michal = _closure1_slot2;
                                    entity = 44;
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
                                _fun00062_ip = 1197; continue _fun00061;
 1164:
                                verify = _closure1_slot52;
                                option = verify.deleteMessage;
                                golfie = _closure2_slot0;
                                oscard = _closure4_slot11;
                                michal = true;
                                michal = option.bind(verify)(golfie, oscard, michal);
 1197:
                                michal = _closure5_slot1;
                                michal = michal.bind(report)(zuuluu);
                                _fun00062_ip = 2545; continue _fun00061;
 1211:
                                oscard = _closure1_slot1;
                                verify = _closure1_slot2;
                                michal = 63;
                                report = verify[michal];
                                michal = undefined;
                                yankee = oscard.bind(michal)(report);
                                oscard = yankee.donateSentMessage;
                                report = _closure4_slot0;
                                backup = _closure2_slot0;
                                report = oscard.bind(yankee)(report, backup);
                                romeon = _closure1_slot52;
                                yankee = romeon.receiveMessage;
                                config = zuuluu.body;
                                report = {};
                                foxtra = {};
                                foxtra['duration'] = kiloes;
                                kiloes = _closure5_slot3;
                                foxtra['queueSize'] = kiloes;
                                report['sendAnalytics'] = foxtra;
                                foxtra = _closure4_slot6;
                                report['poll'] = foxtra;
                                cntext = romeon;
                                record = backup;
                                sequen = true;
                                vacuum = report;
                                report = cntext[yankee](record, config, sequen, vacuum, ctrled);
                                oscard = _closure1_slot0;
                                report = 61;
                                report = verify[report];
                                verify = oscard.bind(michal)(report);
                                oscard = verify.getSentConfettiPotionEmoji;
                                report = zuuluu.body;
                                report = oscard.bind(verify)(report);
                                verify = null;
                                if(!(verify != report)) { _fun00062_ip = 1486; continue _fun00061 }
 1361:
                                backup = _closure1_slot0;
                                kiloes = _closure1_slot2;
                                oscard = 73;
                                oscard = kiloes[oscard];
                                romeon = backup.bind(michal)(oscard);
                                yankee = romeon.fetchConsumableEntitlement;
                                oscard = 74;
                                oscard = kiloes[oscard];
                                oscard = backup.bind(michal)(oscard);
                                oscard = oscard.CONFETTI_POTION_SKU_ID;
                                oscard = yankee.bind(romeon)(oscard);
                                oscard = 75;
                                oscard = kiloes[oscard];
                                romeon = backup.bind(michal)(oscard);
                                yankee = romeon.triggerConfettiByEmoji;
                                oscard = {};
                                sizing = report.name;
                                oscard['name'] = sizing;
                                report = report.id;
                                oscard['id'] = report;
                                report = 76;
                                report = kiloes[report];
                                report = backup.bind(michal)(report);
                                report = report.ConfettiTriggerAnalyticsLocation;
                                vacuum = report.MessageSent;
                                cntext = romeon;
                                record = oscard;
                                config = undefined;
                                sequen = true;
                                report = cntext[yankee](record, config, sequen, vacuum, ctrled);
 1486:
                                oscard = _closure1_slot1;
                                yankee = _closure1_slot2;
                                report = 55;
                                report = yankee[report];
                                yankee = oscard.bind(michal)(report);
                                oscard = yankee.cast;
                                report = _closure2_slot0;
                                yankee = oscard.bind(yankee)(report);
                                oscard = _closure1_slot8;
                                report = oscard.getRequest;
                                report = report.bind(oscard)(yankee);
                                if(!(verify != report)) { _fun00062_ip = 1625; continue _fun00061 }
 1540:
                                backup = report.guildId;
                                romeon = report.userId;
                                foxtra = report.applicationStatus;
                                oscard = _closure1_slot0;
                                yankee = _closure1_slot2;
                                report = 77;
                                report = yankee[report];
                                yankee = oscard.bind(michal)(report);
                                oscard = yankee.trackMemberApplicationInterviewMessage;
                                report = {};
                                report['guildId'] = backup;
                                backup = _closure2_slot0;
                                report['channelId'] = backup;
                                backup = zuuluu.body;
                                backup = backup.id;
                                report['messageId'] = backup;
                                report['joinRequestStatus'] = foxtra;
                                report['joinRequestUserId'] = romeon;
                                report = oscard.bind(yankee)(report);
 1625:
                                yankee = _closure1_slot10;
                                oscard = yankee.recordMessageSendApiResponse;
                                report = _closure4_slot10;
                                report = oscard.bind(yankee)(report);
                                oscard = _closure4_slot9;
                                report = _closure1_slot36;
                                report = report.REPLY;
                                if(!(oscard === report)) { _fun00062_ip = 2108; continue _fun00061 }
 1667:
                                report = zuuluu.body;
                                output = report.id;
                                foxtra = _closure2_slot0;
                                report = _closure4_slot5;
                                report = verify == report;
                                yankee = undefined;
                                if(report) { _fun00062_ip = 1704; continue _fun00061 }
 1694:
                                report = _closure4_slot5;
                                yankee = report.message_id;
 1704:
                                oscard = _closure1_slot13;
                                report = oscard.getPendingReplyActionSource;
                                oscard = report.bind(oscard)(foxtra);
                                report = 'message_swipe';
                                if(!(report !== oscard)) { _fun00062_ip = 1936; continue _fun00061 }
 1734:
                                report = 'message_shortcut';
                                if(!(report === oscard)) { _fun00062_ip = 2108; continue _fun00061 }
 1747:
                                oscard = _closure1_slot19;
                                report = oscard.getChannel;
                                result = report.bind(oscard)(foxtra);
                                oscard = _closure1_slot1;
                                romeon = _closure1_slot2;
                                report = 41;
                                report = romeon[report];
                                backup = oscard.bind(michal)(report);
                                romeon = backup.track;
                                report = _closure1_slot28;
                                oscard = report.MESSAGE_SHORTCUT_ACTION_SENT;
                                report = {};
                                report['message_id'] = output;
                                report['channel_id'] = foxtra;
                                sizing = verify == result;
                                kiloes = undefined;
                                if(sizing) { _fun00062_ip = 1821; continue _fun00061 }
 1816:
                                kiloes = result.guild_id;
 1821:
                                report['guild_id'] = kiloes;
                                report['original_message_id'] = yankee;
                                kiloes = 'reply';
                                report['action'] = kiloes;
                                sizing = _closure1_slot0;
                                kiloes = _closure1_slot2;
                                echoed = 30;
                                kiloes = kiloes[echoed];
                                update = sizing.bind(michal)(kiloes);
                                sizing = update.collectGuildAnalyticsMetadata;
                                source = verify == result;
                                kiloes = undefined;
                                if(source) { _fun00062_ip = 1878; continue _fun00061 }
 1873:
                                kiloes = result.guild_id;
 1878:
                                config = sizing.bind(update)(kiloes);
                                record = report;
                                kiloes = copyDataProperties(record, config);
                                sizing = _closure1_slot0;
                                kiloes = _closure1_slot2;
                                kiloes = kiloes[echoed];
                                sizing = sizing.bind(michal)(kiloes);
                                kiloes = sizing.collectChannelAnalyticsMetadata;
                                config = kiloes.bind(sizing)(result);
                                record = report;
                                kiloes = copyDataProperties(record, config);
                                report = romeon.bind(backup)(oscard, report);
                                _fun00062_ip = 2108; continue _fun00061;
 1936:
                                report = verify != yankee;
                                sizing = null;
                                if(!report) { _fun00062_ip = 1961; continue _fun00061 }
 1945:
                                oscard = _closure1_slot22;
                                report = oscard.getMessage;
                                sizing = report.bind(oscard)(foxtra, yankee);
 1961:
                                oscard = _closure1_slot19;
                                report = oscard.getChannel;
                                kiloes = report.bind(oscard)(foxtra);
                                oscard = _closure1_slot26;
                                report = oscard.getCurrentUser;
                                backup = report.bind(oscard)();
                                oscard = _closure1_slot1;
                                yankee = _closure1_slot2;
                                report = 41;
                                report = yankee[report];
                                romeon = oscard.bind(michal)(report);
                                yankee = romeon.track;
                                report = _closure1_slot28;
                                oscard = report.MESSAGE_SWIPE_ACTION_SENT;
                                report = {};
                                report['message_id'] = output;
                                report['channel_id'] = foxtra;
                                output = verify == kiloes;
                                foxtra = undefined;
                                if(output) { _fun00062_ip = 2048; continue _fun00061 }
 2043:
                                foxtra = kiloes.guild_id;
 2048:
                                report['guild_id'] = foxtra;
                                foxtra = 'reply';
                                report['swipe_action'] = foxtra;
                                foxtra = verify != backup;
                                if(!foxtra) { _fun00062_ip = 2097; continue _fun00061 }
 2068:
                                kiloes = backup.id;
                                output = verify == sizing;
                                backup = undefined;
                                if(output) { _fun00062_ip = 2093; continue _fun00061 }
 2082:
                                sizing = sizing.author;
                                backup = sizing.id;
 2093:
                                foxtra = kiloes === backup;
 2097:
                                report['is_own_message'] = foxtra;
                                report = yankee.bind(romeon)(oscard, report);
 2108:
                                romeon = _closure1_slot1;
                                yankee = _closure1_slot2;
                                oscard = 44;
                                report = yankee[oscard];
                                kiloes = romeon.bind(michal)(report);
                                backup = kiloes.dispatch;
                                foxtra = {};
                                report = 'SLOWMODE_RESET_COOLDOWN';
                                foxtra['type'] = report;
                                report = _closure1_slot25;
                                report = report.SendMessage;
                                foxtra['slowmodeType'] = report;
                                report = _closure2_slot0;
                                foxtra['channelId'] = report;
                                foxtra = backup.bind(kiloes)(foxtra);
                                foxtra = yankee[oscard];
                                kiloes = romeon.bind(michal)(foxtra);
                                backup = kiloes.dispatch;
                                foxtra = {};
                                sizing = 'EMOJI_TRACK_USAGE';
                                foxtra['type'] = sizing;
                                sizing = _closure4_slot1;
                                foxtra['emojiUsed'] = sizing;
                                foxtra = backup.bind(kiloes)(foxtra);
                                foxtra = yankee[oscard];
                                kiloes = romeon.bind(michal)(foxtra);
                                backup = kiloes.dispatch;
                                foxtra = {};
                                sizing = 'STICKER_TRACK_USAGE';
                                foxtra['type'] = sizing;
                                sizing = _closure4_slot4;
                                foxtra['stickerIds'] = sizing;
                                foxtra = backup.bind(kiloes)(foxtra);
                                yankee = yankee[oscard];
                                foxtra = romeon.bind(michal)(yankee);
                                romeon = foxtra.dispatch;
                                yankee = {};
                                backup = 'LOCAL_MESSAGE_CREATE';
                                yankee['type'] = backup;
                                backup = {};
                                backup['channel_id'] = report;
                                sizing = _closure1_slot26;
                                kiloes = sizing.getCurrentUser;
                                kiloes = kiloes.bind(sizing)();
                                backup['author'] = kiloes;
                                yankee['message'] = backup;
                                yankee = romeon.bind(foxtra)(yankee);
                                yankee = {};
                                romeon = _closure4_slot0;
                                yankee['content'] = romeon;
                                yankee['channelId'] = report;
                                report = zuuluu.body;
                                report = report.id;
                                yankee['messageId'] = report;
                                report = _closure4_slot2;
                                romeon = verify != report;
                                backup = 'chat_input';
                                report = backup;
                                if(!romeon) { _fun00062_ip = 2364; continue _fun00061 }
 2360:
                                report = _closure4_slot2;
 2364:
                                yankee['location'] = report;
                                report = _closure4_slot3;
                                yankee['suggested'] = report;
                                report = function(argFoo) { // Original name: trackCodedLinks
                                    _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
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
                                        if(!(report === entity)) { _fun00064_ip = 51; continue _fun00063 }
 49:
                                        report = null;
 51:
                                        var _closure7_slot3 = report;
                                        zuuluu = zuuluu.overrideProperties;
                                        if(!(zuuluu === entity)) { _fun00064_ip = 67; continue _fun00063 }
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
                                        zuuluu = 28;
                                        zuuluu = oscard[zuuluu];
                                        zuuluu = report.bind(entity)(zuuluu);
                                        tangon = zuuluu.bind(entity)(tangon);
                                        zuuluu = tangon.forEach;
                                        michal = function(argFoo) {
                                            _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                                                entity = argFoo;
                                                option = entity.type;
                                                tangon = entity.code;
                                                golfie = entity.url;
                                                report = _closure1_slot0;
                                                entity = _closure1_slot2;
                                                oscard = 29;
                                                zuuluu = entity[oscard];
                                                entity = undefined;
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.INVITE;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1367; continue _fun00065 }
 62:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.TEMPLATE;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1243; continue _fun00065 }
 98:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.BUILD_OVERRIDE;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1428; continue _fun00065 }
 134:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.MANUAL_BUILD_OVERRIDE;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1428; continue _fun00065 }
 170:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.EVENT;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1428; continue _fun00065 }
 206:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.CHANNEL_LINK;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1428; continue _fun00065 }
 242:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.APP_DIRECTORY_PROFILE;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1154; continue _fun00065 }
 278:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.APP_DIRECTORY_STOREFRONT;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1111; continue _fun00065 }
 314:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.APP_DIRECTORY_STOREFRONT_SKU;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1023; continue _fun00065 }
 350:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.ACTIVITY_BOOKMARK;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 907; continue _fun00065 }
 386:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.EMBEDDED_ACTIVITY_INVITE;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 841; continue _fun00065 }
 422:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.GUILD_PRODUCT;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1428; continue _fun00065 }
 458:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.SERVER_SHOP;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1428; continue _fun00065 }
 494:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.QUESTS_EMBED;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 747; continue _fun00065 }
 530:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.APP_OAUTH2_LINK;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 636; continue _fun00065 }
 563:
                                                report = _closure1_slot0;
                                                zuuluu = _closure1_slot2;
                                                zuuluu = zuuluu[oscard];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.CodedLinkType;
                                                zuuluu = zuuluu.COLLECTIBLES_SHOP;
                                                if(!(option !== zuuluu)) { _fun00066_ip = 1428; continue _fun00065 }
 599:
                                                zuuluu = global;
                                                report = zuuluu.Error;
                                                zuuluu = zuuluu.HermesInternal;
                                                oscard = zuuluu.concat;
                                                zuuluu = 'Unknown coded link type: ';
                                                zuuluu = oscard.bind(zuuluu)(option);
                                                zuuluu = report.bind(entity)(zuuluu);
                                                throw zuuluu;
 636:
                                                report = _closure1_slot1;
                                                verify = _closure1_slot2;
                                                zuuluu = 30;
                                                zuuluu = verify[zuuluu];
                                                option = report.bind(entity)(zuuluu);
                                                oscard = option.trackWithMetadata;
                                                zuuluu = _closure1_slot28;
                                                report = zuuluu.APP_OAUTH2_LINK_EMBED_URL_SENT;
                                                zuuluu = {};
                                                zuuluu['application_id'] = tangon;
                                                zuuluu = oscard.bind(option)(report, zuuluu);
                                                report = _closure1_slot0;
                                                zuuluu = 32;
                                                oscard = verify[zuuluu];
                                                option = report.bind(entity)(oscard);
                                                oscard = option.trackAppEmbedLinkSent;
                                                zuuluu = verify[zuuluu];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.LinkType;
                                                report = zuuluu.OAUTH;
                                                zuuluu = _closure7_slot5;
                                                zuuluu = oscard.bind(option)(tangon, report, zuuluu);
                                                _fun00066_ip = 1428; continue _fun00065;
 747:
                                                verify = _closure1_slot0;
                                                offset = _closure1_slot2;
                                                zuuluu = 35;
                                                zuuluu = offset[zuuluu];
                                                oscard = verify.bind(entity)(zuuluu);
                                                report = oscard.trackQuestEvent;
                                                zuuluu = {};
                                                zuuluu['questId'] = tangon;
                                                option = _closure1_slot28;
                                                option = option.QUEST_LINK_SHARED;
                                                zuuluu['event'] = option;
                                                option = true;
                                                zuuluu['trackGuildAndChannelMetadata'] = option;
                                                option = 36;
                                                option = offset[option];
                                                option = verify.bind(entity)(option);
                                                option = option.QuestContent;
                                                option = option.QUESTS_EMBED;
                                                zuuluu['sourceQuestContent'] = option;
                                                zuuluu = report.bind(oscard)(zuuluu);
                                                _fun00066_ip = 1428; continue _fun00065;
 841:
                                                report = _closure1_slot0;
                                                verify = _closure1_slot2;
                                                zuuluu = 32;
                                                oscard = verify[zuuluu];
                                                option = report.bind(entity)(oscard);
                                                oscard = option.trackAppEmbedLinkSent;
                                                zuuluu = verify[zuuluu];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.LinkType;
                                                report = zuuluu.ACTIVITY_INVITE;
                                                zuuluu = _closure7_slot5;
                                                zuuluu = oscard.bind(option)(tangon, report, zuuluu);
                                                _fun00066_ip = 1428; continue _fun00065;
 907:
                                                oscard = _closure1_slot0;
                                                verify = _closure1_slot2;
                                                zuuluu = 34;
                                                zuuluu = verify[zuuluu];
                                                report = oscard.bind(entity)(zuuluu);
                                                zuuluu = report.extractActivityBookmarkParams;
                                                zuuluu = zuuluu.bind(report)(golfie);
                                                report = 32;
                                                golfie = verify[report];
                                                option = oscard.bind(entity)(golfie);
                                                golfie = option.trackAppEmbedLinkSent;
                                                report = verify[report];
                                                report = oscard.bind(entity)(report);
                                                report = report.LinkType;
                                                oscard = report.ACTIVITY;
                                                report = zuuluu.referrerId;
                                                verify = null;
                                                if(!(verify == report)) { _fun00066_ip = 996; continue _fun00065 }
 989:
                                                report = _closure7_slot5;
 996:
                                                yankee = zuuluu.customId;
                                                kiloes = option;
                                                backup = tangon;
                                                foxtra = oscard;
                                                romeon = report;
                                                zuuluu = kiloes[golfie](backup, foxtra, romeon, yankee, offset);
                                                _fun00066_ip = 1428; continue _fun00065;
 1023:
                                                report = _closure1_slot0;
                                                oscard = _closure1_slot2;
                                                zuuluu = 33;
                                                zuuluu = oscard[zuuluu];
                                                report = report.bind(entity)(zuuluu);
                                                zuuluu = report.parseStorefrontSkuCodedLink;
                                                zuuluu = zuuluu.bind(report)(tangon);
                                                report = null;
                                                if(!(report != zuuluu)) { _fun00066_ip = 1428; continue _fun00065 }
 1063:
                                                oscard = _closure1_slot0;
                                                golfie = _closure1_slot2;
                                                report = 31;
                                                report = golfie[report];
                                                golfie = oscard.bind(entity)(report);
                                                oscard = golfie.trackAppDirectoryProfileEmbed;
                                                report = zuuluu.applicationId;
                                                zuuluu = 'storefront_sku';
                                                zuuluu = oscard.bind(golfie)(report, zuuluu);
                                                _fun00066_ip = 1428; continue _fun00065;
 1111:
                                                report = _closure1_slot0;
                                                oscard = _closure1_slot2;
                                                zuuluu = 31;
                                                zuuluu = oscard[zuuluu];
                                                oscard = report.bind(entity)(zuuluu);
                                                report = oscard.trackAppDirectoryProfileEmbed;
                                                zuuluu = 'storefront';
                                                zuuluu = report.bind(oscard)(tangon, zuuluu);
                                                _fun00066_ip = 1428; continue _fun00065;
 1154:
                                                report = _closure1_slot0;
                                                option = _closure1_slot2;
                                                zuuluu = 31;
                                                zuuluu = option[zuuluu];
                                                oscard = report.bind(entity)(zuuluu);
                                                zuuluu = oscard.trackAppDirectoryProfileEmbed;
                                                zuuluu = zuuluu.bind(oscard)(tangon);
                                                zuuluu = 32;
                                                oscard = option[zuuluu];
                                                golfie = report.bind(entity)(oscard);
                                                oscard = golfie.trackAppEmbedLinkSent;
                                                zuuluu = option[zuuluu];
                                                zuuluu = report.bind(entity)(zuuluu);
                                                zuuluu = zuuluu.LinkType;
                                                report = zuuluu.APP_DISCOVERY;
                                                zuuluu = _closure7_slot5;
                                                zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                                                _fun00066_ip = 1428; continue _fun00065;
 1243:
                                                report = _closure1_slot9;
                                                zuuluu = report.getGuildTemplate;
                                                option = zuuluu.bind(report)(tangon);
                                                zuuluu = null;
                                                if(!(zuuluu != option)) { _fun00066_ip = 1365; continue _fun00065 }
 1264:
                                                report = option.state;
                                                zuuluu = _closure1_slot45;
                                                zuuluu = zuuluu.RESOLVING;
                                                if(!(report !== zuuluu)) { _fun00066_ip = 1365; continue _fun00065 }
 1283:
                                                report = _closure1_slot1;
                                                oscard = _closure1_slot2;
                                                zuuluu = 30;
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
                                                _fun00066_ip = 1428; continue _fun00065;
 1365:
                                                return entity;
 1367:
                                                zuuluu = _closure1_slot53;
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
 1428:
                                                return entity;
                                            }
                                        };
                                        michal = zuuluu.bind(tangon)(michal);
                                        return entity;
                                    }
                                };
                                report = report.bind(michal)(yankee);
                                foxtra = _closure4_slot0;
                                romeon = _closure2_slot0;
                                report = zuuluu.body;
                                yankee = report.id;
                                report = _closure4_slot2;
                                report = verify != report;
                                if(!report) { _fun00062_ip = 2420; continue _fun00061 }
 2416:
                                backup = _closure4_slot2;
 2420:
                                report = _closure2_slot2;
                                report = report.isGiftLinkSentOnBehalfOfUser;
                                report = !report;
                                offset = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: trackGiftCodes
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
                                    entity = 40;
                                    zuuluu = zuuluu[entity];
                                    entity = undefined;
                                    report = tangon.bind(entity)(zuuluu);
                                    tangon = report.findGiftCodes;
                                    zuuluu = argFoo;
                                    tangon = tangon.bind(report)(zuuluu);
                                    zuuluu = tangon.forEach;
                                    michal = function(argFoo) {
                                        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                                            tangon = _closure1_slot19;
                                            zuuluu = tangon.getChannel;
                                            michal = _closure7_slot0;
                                            oscard = zuuluu.bind(tangon)(michal);
                                            michal = null;
                                            if(!(michal != oscard)) { _fun00068_ip = 145; continue _fun00067 }
 30:
                                            tangon = _closure1_slot1;
                                            zuuluu = _closure1_slot2;
                                            michal = 30;
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
                                ctrled = !report;
                                cntext = undefined;
                                record = foxtra;
                                config = romeon;
                                sequen = yankee;
                                vacuum = backup;
                                report = cntext[offset](record, config, sequen, vacuum, ctrled, source);
                                report = _closure4_slot12;
                                if(!(verify != report)) { _fun00062_ip = 2536; continue _fun00061 }
 2467:
                                report = _closure1_slot1;
                                tangon = _closure1_slot2;
                                tangon = tangon[oscard];
                                oscard = report.bind(michal)(tangon);
                                report = oscard.dispatch;
                                tangon = {};
                                verify = 'UPLOAD_COMPLETE';
                                tangon['type'] = verify;
                                option = _closure2_slot0;
                                tangon['channelId'] = option;
                                golfie = _closure4_slot12;
                                golfie = golfie._file;
                                tangon['file'] = golfie;
                                golfie = false;
                                tangon['aborted'] = golfie;
                                tangon = report.bind(oscard)(tangon);
 2536:
                                entity = _closure5_slot0;
                                entity = entity.bind(michal)(zuuluu);
 2545:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = tangon.bind(report)(zuuluu, michal, oscard);
                        return entity;
                    };
                    variable44 = backup;
                    romeon = new variable44[kiloes](variable43, variable42);
                    romeon = romeon instanceof Object ? romeon : backup;
                    return romeon;
 1646:
                    return yankee;
 1649:
                    return yankee;
 1652:
                    return report;
 1655: // catch_target0
                    CatchBlockStart(arg_register=4);
                    output = report.file;
                    verify = output;
                    sizing = report.code;
                    option = sizing;
                    kiloes = report.reason;
                    golfie = kiloes;
                    oscard = report.responseBody;
                    romeon = _closure1_slot0;
                    backup = _closure1_slot2;
                    report = 72;
                    report = backup[report];
                    backup = romeon.bind(yankee)(report);
                    romeon = backup.logMessageSendFailure;
                    report = {};
                    output = output.items;
                    report['fileItems'] = output;
                    report['failureCode'] = sizing;
                    sizing = foxtra == kiloes;
                    kiloes = undefined;
                    if(sizing) { _fun00060_ip = 1751; continue _fun00059 }
 1742:
                    sizing = golfie;
                    kiloes = sizing.msg;
 1751:
                    report['errorMessage'] = kiloes;
                    report = romeon.bind(backup)(report);
                    romeon = offset;
                    romeon = foxtra == romeon;
                    report = romeon;
                    if(romeon) { _fun00060_ip = 1792; continue _fun00059 }
 1774:
                    variable43 = verify;
                    variable42 = option;
                    variable41 = golfie;
                    variable40 = oscard;
                    variable44 = undefined;
                    report = variable44[offset](variable43, variable42, variable41, variable40, variable39);
 1792:
                    report = undefined;
                    return report;
 1797:
                    oscard = _closure1_slot48;
                    report = oscard.info;
                    zuuluu = 'Converting channel to a private channel';
                    zuuluu = report.bind(oscard)(zuuluu);
                    zuuluu = tangon.then;
                    michal = function(argFoo) {
                        tangon = _closure1_slot48;
                        zuuluu = tangon.info;
                        michal = 'Finished converting channel to a private channel';
                        michal = zuuluu.bind(tangon)(michal);
                        report = _closure1_slot52;
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
 1836:
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
        entity = 44;
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
        entity = 44;
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
        entity = 44;
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
                _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00070_ip = 487; continue _fun00069 }
 12:
                    zuuluu = undefined;
                    var _closure4_slot0 = zuuluu;
                    yankee = _closure2_slot1;
                    golfie = _closure2_slot0;
                    report = _closure1_slot20;
                    michal = report.getEditActionSource;
                    report = michal.bind(report)(golfie);
                    michal = 'message_swipe';
                    if(!(michal === report)) { _fun00070_ip = 161; continue _fun00069 }
 59:
                    report = _closure1_slot19;
                    michal = report.getChannel;
                    romeon = michal.bind(report)(golfie);
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 41;
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
                    if(foxtra) { _fun00070_ip = 135; continue _fun00069 }
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
                    michal = 80;
                    michal = option[michal];
                    report = report.bind(zuuluu)(michal);
                    michal = report.unarchiveThreadIfNecessary;
                    michal = michal.bind(report)(golfie);
                    SaveGenerator(address=196);
 194:
                    return michal;
 196:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00070_ip = 484; continue _fun00069 }
 205:
                    verify = _closure2_slot0;
                    golfie = _closure2_slot1;
                    option = _closure1_slot22;
                    report = option.getMessage;
                    yankee = report.bind(option)(verify, golfie);
                    report = null;
                    option = report != yankee;
                    report = undefined;
                    if(!option) { _fun00070_ip = 382; continue _fun00069 }
 243:
                    romeon = yankee.type;
                    option = _closure1_slot36;
                    option = option.REPLY;
                    report = undefined;
                    if(!(romeon === option)) { _fun00070_ip = 382; continue _fun00069 }
 264:
                    foxtra = _closure1_slot14;
                    romeon = foxtra.getMessageByReference;
                    option = yankee.messageReference;
                    option = romeon.bind(foxtra)(option);
                    foxtra = option.state;
                    romeon = _closure1_slot15;
                    romeon = romeon.LOADED;
                    report = undefined;
                    if(!(foxtra === romeon)) { _fun00070_ip = 382; continue _fun00069 }
 306:
                    romeon = yankee.mentions;
                    yankee = romeon.includes;
                    option = option.message;
                    option = option.author;
                    option = option.id;
                    option = yankee.bind(romeon)(option);
                    report = undefined;
                    if(option) { _fun00070_ip = 382; continue _fun00069 }
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
                    verify = 69;
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
                        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                            option = argFoo;
                            entity = option.hasErr;
                            verify = !entity;
                            if(!verify) { _fun00072_ip = 66; continue _fun00071 }
 15:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 79;
                            michal = michal[entity];
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            zuuluu = entity.AUTOMOD_ERROR_CODES;
                            michal = zuuluu.has;
                            entity = option.body;
                            entity = entity.code;
                            verify = michal.bind(zuuluu)(entity);
 66:
                            if(!verify) { _fun00072_ip = 202; continue _fun00071 }
 72:
                            tangon = {};
                            oscard = _closure1_slot0;
                            report = _closure1_slot2;
                            michal = 69;
                            michal = report[michal];
                            zuuluu = undefined;
                            michal = oscard.bind(zuuluu)(michal);
                            michal = michal.MessageDataType;
                            michal = michal.EDIT;
                            tangon['type'] = michal;
                            michal = _closure4_slot0;
                            tangon['message'] = michal;
                            michal = _closure1_slot1;
                            entity = 44;
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
                            entity = 81;
                            zuuluu = romeon[entity];
                            entity = undefined;
                            zuuluu = yankee.bind(entity)(zuuluu);
                            report = zuuluu.AccessibilityAnnouncer;
                            tangon = report.announce;
                            zuuluu = 42;
                            oscard = romeon[zuuluu];
                            oscard = yankee.bind(entity)(oscard);
                            golfie = oscard.intl;
                            oscard = golfie.string;
                            zuuluu = romeon[zuuluu];
                            zuuluu = yankee.bind(entity)(zuuluu);
                            zuuluu = zuuluu.t;
                            if(offset) { _fun00072_ip = 327; continue _fun00071 }
 284:
                            if(verify) { _fun00072_ip = 307; continue _fun00071 }
 287:
                            verify = zuuluu.0x1HBA;
                            verify = oscard.bind(golfie)(verify);
                            verify = tangon.bind(report)(verify);
                            _fun00072_ip = 345; continue _fun00071;
 307:
                            verify = zuuluu.Hym4i4;
                            verify = oscard.bind(golfie)(verify);
                            verify = tangon.bind(report)(verify);
                            _fun00072_ip = 345; continue _fun00071;
 327:
                            zuuluu = zuuluu.Atp7FB;
                            zuuluu = oscard.bind(golfie)(zuuluu);
                            zuuluu = tangon.bind(report)(zuuluu);
 345:
                            golfie = _closure1_slot52;
                            oscard = golfie.endEditMessage;
                            tangon = _closure2_slot0;
                            verify = option.hasErr;
                            zuuluu = undefined;
                            if(verify) { _fun00072_ip = 376; continue _fun00071 }
 373:
                            zuuluu = option;
 376:
                            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
                            tangon = _closure1_slot52;
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
                _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00074_ip = 168; continue _fun00073 }
 10:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 80;
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
                    if(tangon) { _fun00074_ip = 165; continue _fun00073 }
 63:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 50;
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
                _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00076_ip = 163; continue _fun00075 }
 10:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 80;
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
                    if(tangon) { _fun00076_ip = 160; continue _fun00075 }
 63:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 50;
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
        _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
            zuuluu = arguments[2];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00078_ip = 27; continue _fun00077 }
 25:
            zuuluu = false;
 27:
            var _closure2_slot2 = zuuluu;
            zuuluu = _closure1_slot4;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00080_ip = 195; continue _fun00079 }
 12:
                        zuuluu = function() { // Original name: dispatchDelete
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 44;
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
                                entity = 81;
                                michal = option[entity];
                                entity = undefined;
                                michal = golfie.bind(entity)(michal);
                                tangon = michal.AccessibilityAnnouncer;
                                zuuluu = tangon.announce;
                                michal = 42;
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
                        var _closure4_slot0 = zuuluu;
                        michal = _closure2_slot2;
                        if(michal) { _fun00080_ip = 184; continue _fun00079 }
 34:
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        michal = 80;
                        michal = oscard[michal];
                        golfie = undefined;
                        oscard = report.bind(golfie)(michal);
                        report = oscard.unarchiveThreadIfNecessary;
                        michal = _closure2_slot0;
                        michal = report.bind(oscard)(michal);
                        SaveGenerator(address=78);
 76:
                        return michal;
 78:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00080_ip = 181; continue _fun00079 }
 84:
                        oscard = _closure1_slot0;
                        offset = _closure1_slot2;
                        report = 50;
                        report = offset[report];
                        report = oscard.bind(golfie)(report);
                        golfie = report.HTTP;
                        oscard = golfie.del;
                        report = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        yankee = _closure1_slot29;
                        offset = yankee.MESSAGE;
                        verify = _closure2_slot0;
                        option = _closure2_slot1;
                        option = offset.bind(yankee)(verify, option);
                        report['url'] = option;
                        oscard = oscard.bind(golfie)(report);
                        report = oscard.then;
                        tangon = function() {
                            michal = _closure4_slot0;
                            entity = undefined;
                            michal = michal.bind(entity)();
                            return entity;
                        };
                        tangon = report.bind(oscard)(tangon);
                        _fun00080_ip = 190; continue _fun00079;
 181:
                        return michal;
 184:
                        michal = undefined;
                        michal = zuuluu.bind(michal)();
 190:
                        michal = undefined;
                        return michal;
 195:
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
        _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
            entity = argFoo;
            report = this;
            zuuluu = entity.loggingName;
            michal = null;
            if(!(michal != zuuluu)) { _fun00082_ip = 94; continue _fun00081 }
 18:
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 30;
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
        entity = 44;
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
        entity = 50;
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
            _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                report = argFoo;
                michal = report.status;
                entity = 429;
                if(!(entity !== michal)) { _fun00084_ip = 82; continue _fun00083 }
 18:
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 42;
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
                _fun00084_ip = 189; continue _fun00083;
 82:
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                entity = 42;
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
                entity = 82;
                michal = verify[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.show;
                michal = {};
                option = _closure1_slot0;
                report = 42;
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
    var _closure1_slot52 = michal;
    tangon = 83;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/MessageActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();