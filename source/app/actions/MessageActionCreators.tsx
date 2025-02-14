// app/actions/MessageActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    golf = function(argFoo) { // Original name: trackInvite
        _fun66641: for(var _fun66641_ip = 0; ; ) switch(_fun66641_ip) {
 0:
            mike = argFoo;
            foxtrot = mike.inviteKey;
            verify = mike.channelId;
            golf = mike.messageId;
            offset = mike.location;
            report = mike.suggested;
            entity = undefined;
            if(!(report === entity)) { _fun66641_ip = 38; continue _fun66641 }
 36:
            report = null;
 38:
            zulu = mike.overrideProperties;
            if(!(zulu === entity)) { _fun66641_ip = 50; continue _fun66641 }
 48:
            zulu = {};
 50:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            tango = 33;
            tango = options[tango];
            oscar = oscar.bind(entity)(tango);
            tango = oscar.parseExtraDataFromInviteKey;
            tango = tango.bind(oscar)(foxtrot);
            options = _closure1_slot19;
            oscar = options.getChannel;
            oscar = oscar.bind(options)(verify);
            yankee = null;
            if(!(yankee == oscar)) { _fun66641_ip = 370; continue _fun66641 }
 107:
            options = {};
            romeo = _closure1_slot21;
            verify = romeo.getInvite;
            verify = verify.bind(romeo)(foxtrot);
            romeo = yankee != verify;
            if(!romeo) { _fun66641_ip = 150; continue _fun66641 }
 131:
            kilo = verify.state;
            backup = _closure1_slot33;
            backup = backup.RESOLVED;
            romeo = kilo === backup;
 150:
            if(!romeo) { _fun66641_ip = 163; continue _fun66641 }
 153:
            backup = verify.inviter;
            romeo = yankee != backup;
 163:
            if(!romeo) { _fun66641_ip = 961; continue _fun66641 }
 169:
            romeo = verify.inviter;
            romeo = romeo.id;
            options['invite_inviter_id'] = romeo;
            romeo = verify.target_application;
            if(!(yankee != romeo)) { _fun66641_ip = 213; continue _fun66641 }
 196:
            verify = verify.target_application;
            verify = verify.id;
            options['application_id'] = verify;
 213:
            backup = {};
            echo = backup;
            result = options;
            options = copyDataProperties(echo, result);
            options = 'location';
            backup[options] = offset;
            options = _closure1_slot31;
            verify = options.FRIEND_INVITE;
            options = 'invite_type';
            backup[options] = verify;
            verify = tango.baseCode;
            options = 'invite_code';
            backup[options] = verify;
            options = 'message_id';
            backup[options] = golf;
            options = _closure1_slot32;
            verify = options.DIRECT_MESSAGE;
            options = 'send_type';
            backup[options] = verify;
            verify = tango.guildScheduledEventId;
            options = 'invite_guild_scheduled_event_id';
            backup[options] = verify;
            echo = backup;
            result = zulu;
            options = copyDataProperties(echo, result);
            verify = _closure1_slot1;
            romeo = _closure1_slot2;
            options = 29;
            options = romeo[options];
            romeo = verify.bind(entity)(options);
            verify = romeo.trackWithMetadata;
            options = _closure1_slot28;
            options = options.INVITE_SENT;
            options = verify.bind(romeo)(options, backup);
            _fun66641_ip = 961; continue _fun66641;
 370:
            options = oscar.isMultiUserDM;
            options = options.bind(oscar)();
            if(options) { _fun66641_ip = 410; continue _fun66641 }
 383:
            options = oscar.isPrivate;
            options = options.bind(oscar)();
            backup = null;
            if(options) { _fun66641_ip = 420; continue _fun66641 }
 398:
            options = _closure1_slot31;
            backup = options.SERVER_INVITE;
            _fun66641_ip = 420; continue _fun66641;
 410:
            options = _closure1_slot31;
            backup = options.GDM_INVITE;
 420:
            options = {};
            romeo = _closure1_slot21;
            verify = romeo.getInvite;
            foxtrot = verify.bind(romeo)(foxtrot);
            verify = backup;
            if(!(yankee != foxtrot)) { _fun66641_ip = 712; continue _fun66641 }
 447:
            kilo = foxtrot.state;
            romeo = _closure1_slot33;
            romeo = romeo.RESOLVED;
            verify = backup;
            if(!(kilo === romeo)) { _fun66641_ip = 712; continue _fun66641 }
 472:
            romeo = foxtrot.channel;
            verify = backup;
            if(!(yankee != romeo)) { _fun66641_ip = 712; continue _fun66641 }
 487:
            romeo = foxtrot.channel;
            kilo = romeo.id;
            options['invite_channel_id'] = kilo;
            sizing = foxtrot.guild;
            output = yankee == sizing;
            kilo = undefined;
            if(output) { _fun66641_ip = 522; continue _fun66641 }
 517:
            kilo = sizing.id;
 522:
            options['invite_guild_id'] = kilo;
            kilo = romeo.type;
            options['invite_channel_type'] = kilo;
            kilo = foxtrot.inviter;
            if(!(yankee != kilo)) { _fun66641_ip = 566; continue _fun66641 }
 549:
            kilo = foxtrot.inviter;
            kilo = kilo.id;
            options['invite_inviter_id'] = kilo;
 566:
            kilo = foxtrot.target_application;
            if(!(yankee != kilo)) { _fun66641_ip = 593; continue _fun66641 }
 576:
            foxtrot = foxtrot.target_application;
            foxtrot = foxtrot.id;
            options['application_id'] = foxtrot;
 593:
            kilo = _closure1_slot17;
            foxtrot = kilo.getLastActiveStream;
            sizing = foxtrot.bind(kilo)();
            verify = backup;
            if(!(yankee != sizing)) { _fun66641_ip = 712; continue _fun66641 }
 614:
            foxtrot = sizing.channelId;
            romeo = romeo.id;
            verify = backup;
            if(!(foxtrot === romeo)) { _fun66641_ip = 712; continue _fun66641 }
 631:
            romeo = _closure1_slot31;
            romeo = romeo.STREAM;
            foxtrot = sizing.ownerId;
            options['destination_user_id'] = foxtrot;
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            foxtrot = 34;
            foxtrot = kilo[foxtrot];
            kilo = backup.bind(entity)(foxtrot);
            backup = kilo.getStreamerApplication;
            foxtrot = _closure1_slot23;
            backup = backup.bind(kilo)(sizing, foxtrot);
            kilo = yankee != backup;
            foxtrot = null;
            if(!kilo) { _fun66641_ip = 703; continue _fun66641 }
 698:
            foxtrot = backup.id;
 703:
            options['application_id'] = foxtrot;
            verify = romeo;
 712:
            if(!(yankee != report)) { _fun66641_ip = 786; continue _fun66641 }
 716:
            yankee = report.isAffinitySuggestion;
            options['is_suggested'] = yankee;
            yankee = report.rowNum;
            options['row_num'] = yankee;
            yankee = report.numTotal;
            options['num_total'] = yankee;
            yankee = report.numAffinityConnections;
            options['num_affinity_connections'] = yankee;
            report = report.isFiltered;
            options['is_filtered'] = report;
 786:
            report = {};
            echo = report;
            result = options;
            options = copyDataProperties(echo, result);
            options = 'location';
            report[options] = offset;
            options = 'invite_type';
            report[options] = verify;
            verify = tango.baseCode;
            options = 'invite_code';
            report[options] = verify;
            options = oscar.getGuildId;
            verify = options.bind(oscar)();
            options = 'guild_id';
            report[options] = verify;
            options = oscar.id;
            oscar = 'channel_id';
            report[oscar] = options;
            oscar = 'message_id';
            report[oscar] = golf;
            oscar = _closure1_slot32;
            golf = oscar.DIRECT_MESSAGE;
            oscar = 'send_type';
            report[oscar] = golf;
            oscar = tango.guildScheduledEventId;
            tango = 'invite_guild_scheduled_event_id';
            report[tango] = oscar;
            echo = report;
            result = zulu;
            zulu = copyDataProperties(echo, result);
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 29;
            zulu = oscar[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.trackWithMetadata;
            mike = _closure1_slot28;
            mike = mike.INVITE_SENT;
            mike = zulu.bind(tango)(mike, report);
 961:
            return entity;
        }
    };
    var _closure1_slot52 = golf;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = verify.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.hideMessageConfettiBar;
    var _closure1_slot12 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 11;
    options = oscar[mike];
    options = verify.bind(entity)(options);
    var _closure1_slot14 = options;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ReferencedMessageState;
    var _closure1_slot15 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot16 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot17 = mike;
    mike = 14;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot18 = mike;
    mike = 15;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot19 = mike;
    mike = 16;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot20 = mike;
    mike = 17;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot21 = mike;
    mike = 18;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot22 = mike;
    mike = 19;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    mike = 20;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot23 = mike;
    mike = 21;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot24 = mike;
    mike = 22;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.SlowmodeType;
    var _closure1_slot25 = mike;
    mike = 23;
    mike = oscar[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot26 = mike;
    mike = 24;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.AbortCodes;
    var _closure1_slot27 = options;
    offset = mike.AnalyticEvents;
    var _closure1_slot28 = offset;
    offset = mike.Endpoints;
    var _closure1_slot29 = offset;
    offset = mike.Permissions;
    offset = mike.ChannelTypes;
    var _closure1_slot30 = offset;
    offset = mike.LoggingInviteTypes;
    var _closure1_slot31 = offset;
    offset = mike.SendTypes;
    var _closure1_slot32 = offset;
    offset = mike.InviteStates;
    var _closure1_slot33 = offset;
    offset = mike.MessageFlags;
    var _closure1_slot34 = offset;
    offset = mike.MAX_MESSAGES_FOR_JUMP;
    var _closure1_slot35 = offset;
    offset = mike.MessageTypes;
    var _closure1_slot36 = offset;
    offset = mike.AllowedMentionTypes;
    var _closure1_slot37 = offset;
    offset = mike.HelpdeskArticles;
    var _closure1_slot38 = offset;
    offset = mike.MarketingURLs;
    var _closure1_slot39 = offset;
    offset = mike.MessageReferenceTypes;
    var _closure1_slot40 = offset;
    offset = mike.LOCAL_BOT_ID;
    var _closure1_slot41 = offset;
    offset = mike.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot42 = offset;
    offset = mike.MessageStates;
    var _closure1_slot43 = offset;
    mike = mike.ActivityActionTypes;
    var _closure1_slot44 = mike;
    mike = 25;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.GuildTemplateStates;
    var _closure1_slot45 = mike;
    mike = 26;
    offset = oscar[mike];
    romeo = verify.bind(entity)(offset);
    offset = romeo.prototype;
    yankee = Object.create(offset, {constructor: {value: romeo}});
    kilo = 'MessageActionCreators';
    sizing = yankee;
    offset = new sizing[romeo](kilo, backup);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot46 = offset;
    mike = oscar[mike];
    offset = verify.bind(entity)(mike);
    mike = offset.prototype;
    verify = Object.create(mike, {constructor: {value: offset}});
    kilo = 'MessageQueue';
    sizing = verify;
    mike = new sizing[offset](kilo, backup);
    mike = mike instanceof Object ? mike : verify;
    var _closure1_slot47 = mike;
    mike = false;
    var _closure1_slot48 = mike;
    mike = function() {
        tango = _closure1_slot6;
        zulu = function() { // Original name: RemoteFetch
            zulu = this;
            tango = _closure1_slot5;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = false;
            zulu['completed'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        report = 'markComplete';
        entity['key'] = report;
        mike = function() { // Original name: value
            mike = true;
            entity = this;
            entity['completed'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    var _closure1_slot49 = mike;
    mike = {};
    offset = options.EMAIL_VERIFICATION_REQUIRED;
    verify = {};
    yankee = 'BOT_REQUIRES_EMAIL_VERIFICATION';
    verify['messageName'] = yankee;
    yankee = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 37;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.k1Cjqq;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    verify['messageGetter'] = yankee;
    mike[offset] = verify;
    offset = options.INVALID_MESSAGE_SEND_USER;
    verify = {};
    yankee = 'BOT_DM_SEND_FAILED_WITH_HELP_LINK';
    verify['messageName'] = yankee;
    yankee = function() { // Original name: messageGetter
        mike = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 37;
        zulu = verify[entity];
        options = undefined;
        zulu = mike.bind(options)(zulu);
        tango = zulu.intl;
        zulu = tango.formatToPlainString;
        entity = verify[entity];
        entity = mike.bind(options)(entity);
        entity = entity.t;
        mike = entity.CTMXwM;
        entity = {};
        golf = _closure1_slot1;
        oscar = 38;
        oscar = verify[oscar];
        golf = golf.bind(options)(oscar);
        oscar = golf.getArticleURL;
        report = _closure1_slot38;
        report = report.DM_COULD_NOT_BE_DELIVERED;
        report = oscar.bind(golf)(report);
        entity['helpUrl'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    verify['messageGetter'] = yankee;
    mike[offset] = verify;
    offset = options.RATE_LIMIT_DM_OPEN;
    verify = {};
    yankee = 'BOT_DM_RATE_LIMITED';
    verify['messageName'] = yankee;
    yankee = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 37;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.E8nbNT;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    verify['messageGetter'] = yankee;
    mike[offset] = verify;
    offset = options.SEND_MESSAGE_TEMPORARILY_DISABLED;
    verify = {};
    yankee = 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED';
    verify['messageName'] = yankee;
    romeo = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 37;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.aRUbam;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    verify['messageGetter'] = romeo;
    mike[offset] = verify;
    offset = options.SLOWMODE_RATE_LIMITED;
    verify = {};
    verify['messageName'] = yankee;
    yankee = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 37;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.aRUbam;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    verify['messageGetter'] = yankee;
    mike[offset] = verify;
    offset = options.INVALID_MESSAGE_SEND_GAME_FRIEND_DM;
    verify = {};
    yankee = 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND';
    verify['messageName'] = yankee;
    yankee = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 37;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity./meGhY;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    verify['messageGetter'] = yankee;
    mike[offset] = verify;
    verify = options.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE;
    options = {};
    offset = 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT';
    options['messageName'] = offset;
    offset = function() { // Original name: messageGetter
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 37;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.Oc1Zj4;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['messageGetter'] = offset;
    mike[verify] = options;
    var _closure1_slot50 = mike;
    mike = {};
    options = function(argFoo, argBar) { // Original name: receiveMessage
        _fun66652: for(var _fun66652_ip = 0; ; ) switch(_fun66652_ip) {
 0:
            oscar = arguments[2];
            report = arguments[3];
            entity = undefined;
            if(!(oscar === entity)) { _fun66652_ip = 14; continue _fun66652 }
 12:
            oscar = false;
 14:
            if(!(report === entity)) { _fun66652_ip = 20; continue _fun66652 }
 18:
            report = {};
 20:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 39;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'MESSAGE_CREATE';
            mike['type'] = golf;
            golf = argFoo;
            mike['channelId'] = golf;
            golf = argBar;
            mike['message'] = golf;
            mike['optimistic'] = oscar;
            mike['sendMessageOptions'] = report;
            report = false;
            mike['isPushNotification'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['receiveMessage'] = options;
    options = function(argFoo, argBar, argBaz, argCorge) { // Original name: sendBotMessage
        _fun66653: for(var _fun66653_ip = 0; ; ) switch(_fun66653_ip) {
 0:
            report = argFoo;
            options = argBaz;
            entity = null;
            if(!(entity != options)) { _fun66653_ip = 77; continue _fun66653 }
 12:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 29;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.trackWithMetadata;
            entity = _closure1_slot28;
            mike = entity.AUTOMATED_MESSAGE_RECEIVED;
            entity = {};
            oscar = 'Clyde';
            entity['message_author'] = oscar;
            entity['message_name'] = options;
            entity = zulu.bind(tango)(mike, entity);
 77:
            tango = _closure1_slot51;
            zulu = tango.receiveMessage;
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 40;
            mike = mike[entity];
            entity = undefined;
            golf = oscar.bind(entity)(mike);
            oscar = golf.createBotMessage;
            mike = {};
            verify = argCorge;
            mike['messageId'] = verify;
            mike['channelId'] = report;
            verify = argBar;
            mike['content'] = verify;
            mike['loggingName'] = options;
            mike = oscar.bind(golf)(mike);
            mike = zulu.bind(tango)(report, mike);
            return entity;
        }
    };
    mike['sendBotMessage'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: sendNitroSystemMessage
        oscar = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 40;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = {};
        mike['channelId'] = oscar;
        tango = argBaz;
        mike['nonce'] = tango;
        tango = _closure1_slot36;
        tango = tango.NITRO_NOTIFICATION;
        mike['type'] = tango;
        tango = argBar;
        mike['content'] = tango;
        tango = _closure1_slot34;
        tango = tango.EPHEMERAL;
        mike['flags'] = tango;
        tango = {'id': null, 'username': 'Nitro Notification', 'discriminator': null, 'avatar': 'nitro', 'bot': true};
        report = _closure1_slot41;
        tango['id'] = report;
        report = _closure1_slot42;
        tango['discriminator'] = report;
        report = true;
        mike['author'] = tango;
        offset = zulu.bind(entity)(mike);
        tango = _closure1_slot51;
        zulu = tango.receiveMessage;
        mike = {};
        yankee = mike;
        options = copyDataProperties(yankee, offset);
        golf = _closure1_slot43;
        options = golf.SENT;
        golf = 'state';
        mike[golf] = options;
        golf = 'channel_id';
        mike[golf] = oscar;
        mike = zulu.bind(tango)(oscar, mike, report);
        return entity;
    };
    mike['sendNitroSystemMessage'] = options;
    options = function(argFoo, argBar) { // Original name: sendGiftingPromptSystemMessage
        oscar = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 40;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = {};
        mike['channelId'] = oscar;
        tango = _closure1_slot36;
        tango = tango.GIFTING_PROMPT;
        mike['type'] = tango;
        tango = '';
        mike['content'] = tango;
        tango = _closure1_slot34;
        tango = tango.EPHEMERAL;
        mike['flags'] = tango;
        tango = {'id': null, 'username': 'Gifting Prompt', 'discriminator': null, 'avatar': 'gifting_prompt', 'bot': true};
        report = _closure1_slot41;
        tango['id'] = report;
        report = _closure1_slot42;
        tango['discriminator'] = report;
        report = true;
        mike['author'] = tango;
        tango = argBar;
        mike['giftingPrompt'] = tango;
        offset = zulu.bind(entity)(mike);
        tango = _closure1_slot51;
        zulu = tango.receiveMessage;
        mike = {};
        yankee = mike;
        options = copyDataProperties(yankee, offset);
        golf = _closure1_slot43;
        options = golf.SENT;
        golf = 'state';
        mike[golf] = options;
        mike = zulu.bind(tango)(oscar, mike, report);
        return entity;
    };
    mike['sendGiftingPromptSystemMessage'] = options;
    options = function(argFoo) { // Original name: sendClydeError
        _fun66656: for(var _fun66656_ip = 0; ; ) switch(_fun66656_ip) {
 0:
            oscar = argFoo;
            options = arguments[1];
            entity = undefined;
            if(!(options === entity)) { _fun66656_ip = 14; continue _fun66656 }
 12:
            options = 0;
 14:
            tango = _closure1_slot19;
            zulu = tango.getChannel;
            offset = zulu.bind(tango)(oscar);
            zulu = null;
            if(!(zulu != offset)) { _fun66656_ip = 804; continue _fun66656 }
 40:
            zulu = _closure1_slot27;
            zulu = zulu.SLOWMODE_RATE_LIMITED;
            if(!(options !== zulu)) { _fun66656_ip = 714; continue _fun66656 }
 57:
            zulu = _closure1_slot27;
            zulu = zulu.INVALID_MESSAGE_SEND_USER;
            if(!(options !== zulu)) { _fun66656_ip = 608; continue _fun66656 }
 74:
            zulu = _closure1_slot27;
            zulu = zulu.TOO_MANY_THREADS;
            if(!(options !== zulu)) { _fun66656_ip = 458; continue _fun66656 }
 91:
            zulu = _closure1_slot27;
            zulu = zulu.TOO_MANY_ANNOUNCEMENT_THREADS;
            if(!(options !== zulu)) { _fun66656_ip = 394; continue _fun66656 }
 108:
            zulu = _closure1_slot27;
            zulu = zulu.HARMFUL_LINK_MESSAGE_BLOCKED;
            if(!(options !== zulu)) { _fun66656_ip = 312; continue _fun66656 }
 125:
            zulu = _closure1_slot50;
            zulu = options in zulu;
            if(zulu) { _fun66656_ip = 279; continue _fun66656 }
 139:
            tango = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 37;
            report = romeo[zulu];
            report = tango.bind(entity)(report);
            golf = report.intl;
            report = golf.formatToPlainString;
            zulu = romeo[zulu];
            zulu = tango.bind(entity)(zulu);
            zulu = zulu.t;
            tango = zulu.CTMXwM;
            zulu = {};
            yankee = _closure1_slot1;
            verify = 38;
            verify = romeo[verify];
            romeo = yankee.bind(entity)(verify);
            yankee = romeo.getArticleURL;
            verify = _closure1_slot38;
            verify = verify.DM_COULD_NOT_BE_DELIVERED;
            verify = yankee.bind(romeo)(verify);
            zulu['helpUrl'] = verify;
            tango = report.bind(golf)(tango, zulu);
            zulu = global;
            zulu = zulu.HermesInternal;
            golf = zulu.concat;
            report = 'SEND_FAILED (';
            zulu = ')';
            zulu = golf.bind(report)(options, zulu);
            report = tango;
            tango = zulu;
            _fun66656_ip = 787; continue _fun66656;
 279:
            golf = _closure1_slot50;
            zulu = golf[options];
            tango = zulu.messageName;
            options = golf[options];
            golf = options.messageGetter;
            report = golf.bind(options)();
            _fun66656_ip = 787; continue _fun66656;
 312:
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 37;
            options = yankee[zulu];
            options = golf.bind(entity)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            zulu = yankee[zulu];
            zulu = golf.bind(entity)(zulu);
            zulu = zulu.t;
            golf = zulu.zSG3Q0;
            zulu = {};
            yankee = _closure1_slot39;
            yankee = yankee.HARMFUL_LINKS;
            zulu['helpUrl'] = yankee;
            report = options.bind(verify)(golf, zulu);
            tango = 'HARMFUL_LINK_MESSAGE_BLOCKED';
            _fun66656_ip = 787; continue _fun66656;
 394:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 37;
            golf = yankee[zulu];
            golf = verify.bind(entity)(golf);
            options = golf.intl;
            golf = options.string;
            zulu = yankee[zulu];
            zulu = verify.bind(entity)(zulu);
            zulu = zulu.t;
            zulu = zulu.aY+lLC;
            report = golf.bind(options)(zulu);
            tango = 'TOO_MANY_ANNOUNCEMENT_THREADS';
            _fun66656_ip = 787; continue _fun66656;
 458:
            zulu = offset.isForumLikeChannel;
            zulu = zulu.bind(offset)();
            if(zulu) { _fun66656_ip = 541; continue _fun66656 }
 471:
            zulu = offset.isForumPost;
            zulu = zulu.bind(offset)();
            if(zulu) { _fun66656_ip = 541; continue _fun66656 }
 484:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 37;
            golf = yankee[zulu];
            golf = verify.bind(entity)(golf);
            options = golf.intl;
            golf = options.string;
            zulu = yankee[zulu];
            zulu = verify.bind(entity)(zulu);
            zulu = zulu.t;
            zulu = zulu.5EMPAw;
            golf = golf.bind(options)(zulu);
            _fun66656_ip = 596; continue _fun66656;
 541:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 37;
            options = romeo[zulu];
            options = yankee.bind(entity)(options);
            verify = options.intl;
            options = verify.string;
            zulu = romeo[zulu];
            zulu = yankee.bind(entity)(zulu);
            zulu = zulu.t;
            zulu = zulu./jUd29;
            golf = options.bind(verify)(zulu);
 596:
            tango = 'TOO_MANY_THREADS';
            report = golf;
            _fun66656_ip = 787; continue _fun66656;
 608:
            golf = _closure1_slot0;
            foxtrot = _closure1_slot2;
            zulu = 37;
            options = foxtrot[zulu];
            options = golf.bind(entity)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            zulu = foxtrot[zulu];
            zulu = golf.bind(entity)(zulu);
            zulu = zulu.t;
            golf = zulu.CTMXwM;
            zulu = {};
            romeo = _closure1_slot1;
            yankee = 38;
            yankee = foxtrot[yankee];
            foxtrot = romeo.bind(entity)(yankee);
            romeo = foxtrot.getArticleURL;
            yankee = _closure1_slot38;
            yankee = yankee.DM_COULD_NOT_BE_DELIVERED;
            yankee = romeo.bind(foxtrot)(yankee);
            zulu['helpUrl'] = yankee;
            report = options.bind(verify)(golf, zulu);
            tango = 'INVALID_MESSAGE_SEND_USER';
            _fun66656_ip = 787; continue _fun66656;
 714:
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 37;
            options = yankee[zulu];
            options = golf.bind(entity)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            zulu = yankee[zulu];
            zulu = golf.bind(entity)(zulu);
            zulu = zulu.t;
            golf = zulu.IWntYm;
            zulu = {};
            offset = offset.rateLimitPerUser;
            zulu['seconds'] = offset;
            report = options.bind(verify)(golf, zulu);
            tango = 'SLOWMODE_RATE_LIMITED';
 787:
            zulu = _closure1_slot51;
            mike = zulu.sendBotMessage;
            mike = mike.bind(zulu)(oscar, report, tango);
 804:
            return entity;
        }
    };
    mike['sendClydeError'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: sendExplicitMediaClydeError
        _fun66657: for(var _fun66657_ip = 0; ; ) switch(_fun66657_ip) {
 0:
            report = argFoo;
            tango = argBar;
            zulu = _closure1_slot19;
            mike = zulu.getChannel;
            foxtrot = mike.bind(zulu)(report);
            mike = null;
            if(!(mike != foxtrot)) { _fun66657_ip = 371; continue _fun66657 }
 34:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 41;
            golf = romeo[zulu];
            zulu = undefined;
            verify = yankee.bind(zulu)(golf);
            options = verify.match;
            golf = {};
            offset = foxtrot.isDM;
            offset = offset.bind(foxtrot)();
            golf['isDM'] = offset;
            offset = foxtrot.isGroupDM;
            offset = offset.bind(foxtrot)();
            golf['isGDM'] = offset;
            offset = options.bind(verify)(golf);
            verify = offset.with;
            options = {};
            golf = true;
            options['isDM'] = golf;
            golf = function() {
                entity = {};
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 37;
                zulu = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = oscar.bind(report)(mike);
                mike = mike.t;
                mike = mike.PoyOY2;
                mike = zulu.bind(tango)(mike);
                entity['message'] = mike;
                mike = 'BOT_DM_EXPLICIT_CONTENT';
                entity['messageName'] = mike;
                return entity;
            };
            offset = verify.bind(offset)(options, golf);
            verify = offset.with;
            options = {'isDM': false, 'isGDM': true};
            golf = function() {
                entity = {};
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 37;
                zulu = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = oscar.bind(report)(mike);
                mike = mike.t;
                mike = mike.PoyOY2;
                mike = zulu.bind(tango)(mike);
                entity['message'] = mike;
                mike = 'BOT_GDM_EXPLICIT_CONTENT';
                entity['messageName'] = mike;
                return entity;
            };
            options = verify.bind(offset)(options, golf);
            golf = options.otherwise;
            oscar = function() {
                entity = {};
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 37;
                zulu = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = oscar.bind(report)(mike);
                mike = mike.t;
                mike = mike.bNMQVF;
                mike = zulu.bind(tango)(mike);
                entity['message'] = mike;
                mike = 'BOT_GUILD_EXPLICIT_CONTENT';
                entity['messageName'] = mike;
                return entity;
            };
            oscar = golf.bind(options)(oscar);
            sizing = oscar.message;
            kilo = oscar.messageName;
            oscar = 42;
            oscar = romeo[oscar];
            golf = yankee.bind(zulu)(oscar);
            oscar = golf.createNonce;
            oscar = oscar.bind(golf)();
            options = _closure1_slot51;
            golf = options.sendBotMessage;
            result = options;
            output = report;
            backup = oscar;
            golf = result[golf](output, sizing, kilo, backup, foxtrot);
            offset = 43;
            golf = romeo[offset];
            verify = yankee.bind(zulu)(golf);
            options = verify.trackMediaRedactionAction;
            golf = {};
            offset = romeo[offset];
            offset = yankee.bind(zulu)(offset);
            offset = offset.TrackMediaRedactionActionType;
            offset = offset.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT;
            golf['action'] = offset;
            golf['messageId'] = oscar;
            golf['channelId'] = report;
            offset = argBaz;
            golf['context'] = offset;
            golf = options.bind(verify)(golf);
            mike = mike != tango;
            if(!mike) { _fun66657_ip = 313; continue _fun66657 }
 302:
            options = tango.length;
            golf = 0;
            mike = options > golf;
 313:
            if(!mike) { _fun66657_ip = 371; continue _fun66657 }
 316:
            mike = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 39;
            entity = golf[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.dispatch;
            entity = {};
            golf = 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE';
            entity['type'] = golf;
            entity['messageId'] = oscar;
            entity['channelId'] = report;
            entity['attachments'] = tango;
            entity = mike.bind(zulu)(entity);
 371:
            entity = undefined;
            return entity;
        }
    };
    mike['sendExplicitMediaClydeError'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: truncateMessages
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 39;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'TRUNCATE_MESSAGES';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['truncateBottom'] = report;
        report = argBaz;
        mike['truncateTop'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['truncateMessages'] = options;
    options = function(argFoo) { // Original name: clearChannel
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 39;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CLEAR_MESSAGES';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['clearChannel'] = options;
    options = function(argFoo, argBar) { // Original name: jumpToPresent
        _fun66663: for(var _fun66663_ip = 0; ; ) switch(_fun66663_ip) {
 0:
            report = argFoo;
            tango = argBar;
            golf = _closure1_slot51;
            oscar = golf.trackJump;
            zulu = null;
            mike = 'Present';
            mike = oscar.bind(golf)(report, zulu, mike);
            oscar = {};
            mike = true;
            oscar['present'] = mike;
            zulu = _closure1_slot22;
            mike = zulu.hasPresent;
            mike = mike.bind(zulu)(report);
            if(mike) { _fun66663_ip = 94; continue _fun66663 }
 61:
            golf = _closure1_slot51;
            zulu = golf.fetchMessages;
            mike = {};
            mike['channelId'] = report;
            mike['limit'] = tango;
            mike['jump'] = oscar;
            mike = zulu.bind(golf)(mike);
            _fun66663_ip = 152; continue _fun66663;
 94:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 39;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            golf = 'LOAD_MESSAGES_SUCCESS_CACHED';
            entity['type'] = golf;
            entity['jump'] = oscar;
            entity['channelId'] = report;
            entity['limit'] = tango;
            entity = mike.bind(zulu)(entity);
 152:
            entity = undefined;
            return entity;
        }
    };
    mike['jumpToPresent'] = options;
    options = function(argFoo, argBar, argBaz, argCorge) { // Original name: trackJump
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 29;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.trackWithMetadata;
        mike = _closure1_slot28;
        zulu = mike.JUMP;
        mike = {};
        oscar = argBaz;
        mike['context'] = oscar;
        oscar = argFoo;
        mike['channel_id'] = oscar;
        oscar = argBar;
        mike['message_id'] = oscar;
        golf = argCorge;
        options = mike;
        oscar = copyDataProperties(options, golf);
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    mike['trackJump'] = options;
    options = function(argFoo) { // Original name: jumpToMessage
        _fun66665: for(var _fun66665_ip = 0; ; ) switch(_fun66665_ip) {
 0:
            entity = argFoo;
            romeo = entity.channelId;
            yankee = entity.messageId;
            offset = entity.flash;
            mike = undefined;
            if(!(offset === mike)) { _fun66665_ip = 27; continue _fun66665 }
 25:
            offset = false;
 27:
            verify = entity.offset;
            oscar = entity.context;
            zulu = entity.extraProperties;
            if(!(zulu === mike)) { _fun66665_ip = 50; continue _fun66665 }
 48:
            zulu = null;
 50:
            report = entity.isPreload;
            options = entity.returnMessageId;
            tango = entity.skipLocalFetch;
            golf = entity.jumpType;
            mike = 'string';
            entity = typeof oscar;
            if(!(mike === entity)) { _fun66665_ip = 117; continue _fun66665 }
 85:
            mike = _closure1_slot51;
            entity = mike.trackJump;
            output = mike;
            sizing = romeo;
            kilo = yankee;
            backup = oscar;
            foxtrot = zulu;
            entity = output[entity](sizing, kilo, backup, foxtrot, romeo);
 117:
            zulu = _closure1_slot51;
            mike = zulu.fetchMessages;
            entity = {};
            entity['channelId'] = romeo;
            oscar = _closure1_slot35;
            entity['limit'] = oscar;
            oscar = {};
            oscar['messageId'] = yankee;
            oscar['flash'] = offset;
            oscar['offset'] = verify;
            oscar['returnMessageId'] = options;
            oscar['jumpType'] = golf;
            entity['jump'] = oscar;
            entity['isPreload'] = report;
            entity['skipLocalFetch'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['jumpToMessage'] = options;
    options = function(argFoo) { // Original name: focusMessage
        entity = argFoo;
        oscar = entity.channelId;
        report = entity.messageId;
        zulu = _closure1_slot51;
        mike = zulu.fetchMessages;
        entity = {};
        entity['channelId'] = oscar;
        tango = _closure1_slot35;
        entity['limit'] = tango;
        tango = {};
        tango['messageId'] = report;
        entity['focus'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['focusMessage'] = options;
    options = function(argFoo) { // Original name: fetchMessage
        entity = argFoo;
        golf = entity.channelId;
        report = entity.messageId;
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 44;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.get;
        entity = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': false};
        oscar = _closure1_slot29;
        tango = oscar.MESSAGES;
        tango = tango.bind(oscar)(golf);
        entity['url'] = tango;
        tango = {};
        oscar = 1;
        tango['limit'] = oscar;
        tango['around'] = report;
        entity['query'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.then;
        entity = function(argFoo) {
            _fun66668: for(var _fun66668_ip = 0; ; ) switch(_fun66668_ip) {
 0:
                entity = argFoo;
                mike = entity.body;
                mike = mike.length;
                tango = 0;
                if(!(!(mike > tango))) { _fun66668_ip = 23; continue _fun66668 }
 19:
                mike = undefined;
                return mike;
 23:
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 45;
                zulu = zulu[mike];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                mike = zulu.createMessageRecord;
                entity = entity.body;
                entity = entity[tango];
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['fetchMessage'] = options;
    options = function(argFoo) { // Original name: fetchMessages
        _fun66669: for(var _fun66669_ip = 0; ; ) switch(_fun66669_ip) {
 0:
            entity = argFoo;
            report = this;
            foxtrot = entity.channelId;
            var _closure2_slot0 = foxtrot;
            yankee = entity.before;
            var _closure2_slot1 = yankee;
            offset = entity.after;
            var _closure2_slot2 = offset;
            verify = entity.limit;
            var _closure2_slot3 = verify;
            romeo = entity.jump;
            var _closure2_slot4 = romeo;
            backup = entity.focus;
            golf = entity.isPreload;
            zulu = entity.skipLocalFetch;
            output = entity.truncate;
            var _closure2_slot5 = output;
            entity = entity.forICYMI;
            var _closure2_slot6 = entity;
            entity = undefined;
            var _closure2_slot9 = entity;
            var _closure2_slot10 = entity;
            options = _closure1_slot19;
            tango = options.getChannel;
            kilo = tango.bind(options)(foxtrot);
            options = _closure1_slot7;
            tango = options.isConnectedOrOverlay;
            tango = tango.bind(options)();
            var _closure2_slot7 = tango;
            tango = global;
            sizing = tango.Date;
            options = sizing.now;
            options = options.bind(sizing)();
            var _closure2_slot8 = options;
            options = null;
            if(!(options != kilo)) { _fun66669_ip = 189; continue _fun66669 }
 167:
            sizing = kilo.type;
            kilo = _closure1_slot30;
            kilo = kilo.GUILD_STORE;
            if(!(sizing !== kilo)) { _fun66669_ip = 743; continue _fun66669 }
 189:
            sizing = _closure1_slot0;
            result = _closure1_slot2;
            kilo = 46;
            kilo = result[kilo];
            kilo = sizing.bind(entity)(kilo);
            kilo = kilo.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(foxtrot !== kilo)) { _fun66669_ip = 741; continue _fun66669 }
 222:
            sizing = _closure1_slot46;
            kilo = sizing.log;
            echo = tango.JSON;
            result = echo.stringify;
            vacuum = result.bind(echo)(romeo);
            tango = tango.HermesInternal;
            source = tango.concat;
            status = 'Fetching messages for ';
            papa = ' between ';
            record = ' and ';
            sequence = '. jump=';
            target = foxtrot;
            context = yankee;
            config = offset;
            tango = status[source](target, papa, context, record, config, sequence, vacuum, control);
            tango = kilo.bind(sizing)(tango);
            sizing = _closure1_slot51;
            kilo = sizing._tryFetchMessagesCached;
            tango = {};
            tango['channelId'] = foxtrot;
            tango['before'] = yankee;
            tango['after'] = offset;
            tango['limit'] = verify;
            tango['jump'] = romeo;
            tango['focus'] = backup;
            tango['truncate'] = output;
            tango = kilo.bind(sizing)(tango);
            if(tango) { _fun66669_ip = 741; continue _fun66669 }
 359:
            kilo = _closure1_slot1;
            sizing = _closure1_slot2;
            tango = 47;
            tango = sizing[tango];
            tango = kilo.bind(entity)(tango);
            kilo = tango.fetchMessages;
            tango = kilo.recordStart;
            tango = tango.bind(kilo)();
            kilo = options != romeo;
            tango = undefined;
            if(!kilo) { _fun66669_ip = 407; continue _fun66669 }
 404:
            tango = romeo;
 407:
            romeo = options == tango;
            if(!romeo) { _fun66669_ip = 418; continue _fun66669 }
 414:
            romeo = options != backup;
 418:
            if(!romeo) { _fun66669_ip = 436; continue _fun66669 }
 421:
            romeo = {};
            target = romeo;
            papa = backup;
            backup = copyDataProperties(target, papa);
            tango = romeo;
 436:
            backup = _closure1_slot1;
            kilo = _closure1_slot2;
            romeo = 48;
            sizing = kilo[romeo];
            output = backup.bind(entity)(sizing);
            sizing = output.getOrCreate;
            output = sizing.bind(output)(foxtrot);
            sizing = output.loadStart;
            output = sizing.bind(output)(tango);
            romeo = kilo[romeo];
            sizing = backup.bind(entity)(romeo);
            romeo = sizing.commit;
            romeo = romeo.bind(sizing)(output);
            romeo = 39;
            romeo = kilo[romeo];
            kilo = backup.bind(entity)(romeo);
            backup = kilo.dispatch;
            romeo = {};
            sizing = 'LOAD_MESSAGES';
            romeo['type'] = sizing;
            romeo = backup.bind(kilo)(romeo);
            romeo = options == tango;
            options = undefined;
            if(romeo) { _fun66669_ip = 548; continue _fun66669 }
 543:
            options = tango.messageId;
 548:
            _closure2_slot9 = options;
            tango = _closure1_slot49;
            romeo = tango.prototype;
            romeo = Object.create(romeo, {constructor: {value: tango}});
            status = romeo;
            tango = new status[tango](target);
            tango = tango instanceof Object ? tango : romeo;
            _closure2_slot10 = tango;
            if(zulu) { _fun66669_ip = 611; continue _fun66669 }
 583:
            zulu = report.fetchLocalMessages;
            status = report;
            target = foxtrot;
            papa = yankee;
            context = offset;
            record = verify;
            config = tango;
            zulu = status[zulu](target, papa, context, record, config, sequence);
 611:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 44;
            zulu = report[zulu];
            zulu = tango.bind(entity)(zulu);
            report = zulu.HTTP;
            tango = report.get;
            zulu = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': false};
            romeo = _closure1_slot29;
            oscar = romeo.MESSAGES;
            oscar = oscar.bind(romeo)(foxtrot);
            zulu['url'] = oscar;
            oscar = {};
            oscar['before'] = yankee;
            oscar['after'] = offset;
            oscar['limit'] = verify;
            oscar['around'] = options;
            oscar['preload'] = golf;
            zulu['query'] = oscar;
            report = tango.bind(report)(zulu);
            tango = report.then;
            zulu = function(argFoo) {
                mike = argFoo;
                var _closure3_slot0 = mike;
                tango = _closure1_slot1;
                report = _closure1_slot2;
                mike = 47;
                oscar = report[mike];
                zulu = undefined;
                oscar = tango.bind(zulu)(oscar);
                golf = oscar.fetchMessages;
                oscar = golf.recordEnd;
                oscar = oscar.bind(golf)();
                mike = report[mike];
                mike = tango.bind(zulu)(mike);
                zulu = mike.dispatchMessages;
                mike = zulu.measure;
                entity = function() {
                    _fun66671: for(var _fun66671_ip = 0; ; ) switch(_fun66671_ip) {
 0:
                        mike = _closure3_slot0;
                        yankee = mike.body;
                        mike = _closure2_slot1;
                        golf = null;
                        offset = golf != mike;
                        mike = _closure2_slot2;
                        verify = golf != mike;
                        mike = _closure2_slot9;
                        mike = golf != mike;
                        if(mike) { _fun66671_ip = 96; continue _fun66671 }
 46:
                        tango = yankee.length;
                        zulu = _closure2_slot3;
                        zulu = tango === zulu;
                        if(!zulu) { _fun66671_ip = 93; continue _fun66671 }
 62:
                        tango = offset;
                        if(tango) { _fun66671_ip = 90; continue _fun66671 }
 68:
                        oscar = _closure2_slot1;
                        oscar = golf == oscar;
                        if(!oscar) { _fun66671_ip = 87; continue _fun66671 }
 79:
                        options = _closure2_slot2;
                        oscar = golf == options;
 87:
                        tango = oscar;
 90:
                        zulu = tango;
 93:
                        mike = zulu;
 96:
                        zulu = _closure2_slot9;
                        tango = golf != zulu;
                        if(tango) { _fun66671_ip = 129; continue _fun66671 }
 107:
                        zulu = verify;
                        if(!zulu) { _fun66671_ip = 126; continue _fun66671 }
 113:
                        options = yankee.length;
                        oscar = _closure2_slot3;
                        zulu = options === oscar;
 126:
                        tango = zulu;
 129:
                        zulu = _closure2_slot9;
                        options = mike;
                        oscar = tango;
                        if(!(golf != zulu)) { _fun66671_ip = 378; continue _fun66671 }
 146:
                        zulu = global;
                        romeo = zulu.Math;
                        golf = romeo.floor;
                        foxtrot = _closure2_slot3;
                        zulu = 2;
                        zulu = foxtrot / zulu;
                        golf = golf.bind(romeo)(zulu);
                        zulu = _closure2_slot9;
                        romeo = new Array(1);
                        romeo[0] = zulu;
                        foxtrot = yankee.map;
                        zulu = function(argFoo) {
                            entity = argFoo;
                            entity = entity.id;
                            return entity;
                        };
                        control = foxtrot.bind(yankee)(zulu);
                        source = 1;
                        vacuum = romeo;
                        zulu = arraySpread(vacuum, control, source);
                        zulu = romeo.filter;
                        entity = function(argFoo, argBar, argBaz) {
                            zulu = argBaz;
                            mike = zulu.indexOf;
                            entity = argFoo;
                            mike = mike.bind(zulu)(entity);
                            entity = argBar;
                            entity = mike === entity;
                            return entity;
                        };
                        foxtrot = zulu.bind(romeo)(entity);
                        romeo = foxtrot.sort;
                        kilo = _closure1_slot1;
                        backup = _closure1_slot2;
                        entity = 49;
                        backup = backup[entity];
                        entity = undefined;
                        entity = kilo.bind(entity)(backup);
                        entity = entity.compare;
                        foxtrot = romeo.bind(foxtrot)(entity);
                        romeo = foxtrot.indexOf;
                        entity = _closure2_slot9;
                        romeo = romeo.bind(foxtrot)(entity);
                        if(!(romeo < golf)) { _fun66671_ip = 294; continue _fun66671 }
 292:
                        mike = false;
 294:
                        entity = yankee.length;
                        entity = entity - romeo;
                        if(!(entity < golf)) { _fun66671_ip = 309; continue _fun66671 }
 307:
                        tango = false;
 309:
                        options = mike;
                        oscar = tango;
                        if(!tango) { _fun66671_ip = 378; continue _fun66671 }
 318:
                        golf = yankee.length;
                        entity = 0;
                        options = mike;
                        oscar = tango;
                        if(!(golf > entity)) { _fun66671_ip = 378; continue _fun66671 }
 335:
                        romeo = _closure1_slot24;
                        golf = romeo.lastMessageId;
                        zulu = _closure2_slot0;
                        zulu = golf.bind(romeo)(zulu);
                        entity = yankee[entity];
                        entity = entity.id;
                        options = mike;
                        oscar = tango;
                        if(!(entity === zulu)) { _fun66671_ip = 378; continue _fun66671 }
 373:
                        oscar = false;
                        options = mike;
 378:
                        zulu = _closure1_slot46;
                        mike = zulu.log;
                        vacuum = yankee.length;
                        romeo = _closure2_slot0;
                        entity = global;
                        entity = entity.HermesInternal;
                        kilo = entity.concat;
                        sequence = 'Fetched ';
                        control = ' messages for ';
                        update = ' isBefore:';
                        result = ' isAfter:';
                        source = romeo;
                        echo = offset;
                        output = verify;
                        entity = sequence[kilo](vacuum, control, source, update, echo, result, output, sizing);
                        entity = mike.bind(zulu)(entity);
                        mike = _closure2_slot10;
                        entity = mike.markComplete;
                        entity = entity.bind(mike)();
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 39;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        foxtrot = 'LOAD_MESSAGES_SUCCESS';
                        mike['type'] = foxtrot;
                        mike['channelId'] = romeo;
                        mike['messages'] = yankee;
                        mike['isBefore'] = offset;
                        mike['isAfter'] = verify;
                        mike['hasMoreBefore'] = options;
                        mike['hasMoreAfter'] = oscar;
                        oscar = _closure2_slot3;
                        mike['limit'] = oscar;
                        oscar = _closure2_slot4;
                        mike['jump'] = oscar;
                        oscar = _closure2_slot6;
                        mike['forICYMI'] = oscar;
                        oscar = _closure2_slot7;
                        oscar = !oscar;
                        if(oscar) { _fun66671_ip = 596; continue _fun66671 }
 574:
                        options = _closure1_slot7;
                        golf = options.lastTimeConnectedChanged;
                        options = golf.bind(options)();
                        golf = _closure2_slot8;
                        oscar = options >= golf;
 596:
                        mike['isStale'] = oscar;
                        report = _closure2_slot5;
                        mike['truncate'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                entity = true;
                return entity;
            };
            mike = function() {
                report = _closure1_slot46;
                zulu = report.log;
                tango = _closure2_slot0;
                mike = global;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                mike = 'Failed to fetch messages for ';
                mike = oscar.bind(mike)(tango);
                mike = zulu.bind(report)(mike);
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 39;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.dispatch;
                entity = {};
                report = 'LOAD_MESSAGES_FAILURE';
                entity['type'] = report;
                entity['channelId'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = false;
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return mike;
 741:
            return entity;
 743:
            entity = false;
            return entity;
        }
    };
    mike['fetchMessages'] = options;
    options = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: fetchLocalMessages
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        mike = argGrault;
        var _closure2_slot4 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun66677: for(var _fun66677_ip = 0; ; ) switch(_fun66677_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun66677_ip = 647; continue _fun66677 }
 12:
                    zulu = undefined;
                    var _closure4_slot0 = zulu;
                    oscar = _closure1_slot19;
                    report = oscar.getBasicChannel;
                    yankee = _closure2_slot0;
                    verify = report.bind(oscar)(yankee);
                    golf = _closure1_slot1;
                    offset = _closure1_slot2;
                    report = 48;
                    report = offset[report];
                    oscar = golf.bind(zulu)(report);
                    report = oscar.getOrCreate;
                    oscar = report.bind(oscar)(yankee);
                    report = 50;
                    report = offset[report];
                    golf = golf.bind(zulu)(report);
                    report = golf.database;
                    golf = report.bind(golf)();
                    _closure4_slot0 = golf;
                    report = null;
                    if(!(report != golf)) { _fun66677_ip = 126; continue _fun66677 }
 106:
                    if(!(report != verify)) { _fun66677_ip = 126; continue _fun66677 }
 110:
                    golf = _closure2_slot1;
                    if(!(report == golf)) { _fun66677_ip = 126; continue _fun66677 }
 118:
                    golf = _closure2_slot2;
                    if(!(report != golf)) { _fun66677_ip = 173; continue _fun66677 }
 126:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    golf = 47;
                    golf = yankee[golf];
                    romeo = offset.bind(zulu)(golf);
                    yankee = romeo.addLocalMessages;
                    offset = _closure2_slot0;
                    golf = -1;
                    golf = yankee.bind(romeo)(offset, golf);
                    _fun66677_ip = 641; continue _fun66677;
 173:
                    golf = oscar.ready;
                    if(!golf) { _fun66677_ip = 238; continue _fun66677 }
 182:
                    oscar = oscar.cached;
                    if(oscar) { _fun66677_ip = 238; continue _fun66677 }
 191:
                    golf = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscar = 47;
                    oscar = offset[oscar];
                    yankee = golf.bind(zulu)(oscar);
                    offset = yankee.addLocalMessages;
                    golf = _closure2_slot0;
                    oscar = -2;
                    oscar = offset.bind(yankee)(golf, oscar);
                    _fun66677_ip = 641; continue _fun66677;
 238:
                    golf = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscar = 51;
                    oscar = offset[oscar];
                    golf = golf.bind(zulu)(oscar);
                    oscar = golf.tryLoadAsync;
                    mike = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 52;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.load;
                        zulu = _closure4_slot0;
                        mike = _closure2_slot0;
                        entity = _closure2_slot3;
                        entity = tango.bind(report)(zulu, mike, entity);
                        return entity;
                    };
                    mike = oscar.bind(golf)(mike);
                    SaveGenerator(address=280);
 278:
                    return mike;
 280:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun66677_ip = 644; continue _fun66677 }
 289:
                    if(!(report == mike)) { _fun66677_ip = 340; continue _fun66677 }
 293:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 47;
                    report = golf[report];
                    offset = oscar.bind(zulu)(report);
                    golf = offset.addLocalMessages;
                    oscar = _closure2_slot0;
                    report = -3;
                    report = golf.bind(offset)(oscar, report);
                    _fun66677_ip = 641; continue _fun66677;
 340:
                    offset = _closure1_slot46;
                    golf = offset.log;
                    report = mike.messages;
                    vacuum = report.length;
                    yankee = _closure2_slot0;
                    report = _closure2_slot4;
                    echo = report.completed;
                    oscar = global;
                    oscar = oscar.HermesInternal;
                    kilo = oscar.concat;
                    sequence = 'fetched ';
                    control = ' messages from local database (channel_id: ';
                    update = ', remote_fetch_completed: ';
                    result = ')';
                    source = yankee;
                    oscar = sequence[kilo](vacuum, control, source, update, echo, result, output);
                    oscar = golf.bind(offset)(oscar);
                    golf = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscar = 47;
                    oscar = offset[oscar];
                    offset = golf.bind(zulu)(oscar);
                    golf = offset.addLocalMessages;
                    oscar = mike.messages;
                    oscar = oscar.length;
                    oscar = golf.bind(offset)(yankee, oscar);
                    report = report.completed;
                    if(report) { _fun66677_ip = 641; continue _fun66677 }
 477:
                    report = mike.messages;
                    oscar = report.length;
                    report = 0;
                    if(!(oscar > report)) { _fun66677_ip = 641; continue _fun66677 }
 497:
                    report = mike.messages;
                    oscar = report.length;
                    report = _closure2_slot3;
                    golf = oscar >= report;
                    if(!golf) { _fun66677_ip = 543; continue _fun66677 }
 519:
                    oscar = mike.connectionId;
                    offset = _closure1_slot7;
                    report = offset.lastTimeConnectedChanged;
                    report = report.bind(offset)();
                    golf = oscar === report;
 543:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 39;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    offset = 'LOCAL_MESSAGES_LOADED';
                    tango['type'] = offset;
                    verify = verify.guild_id;
                    tango['guildId'] = verify;
                    options = _closure2_slot0;
                    tango['channelId'] = options;
                    options = mike.users;
                    tango['users'] = options;
                    options = mike.members;
                    tango['members'] = options;
                    options = mike.messages;
                    tango['messages'] = options;
                    golf = !golf;
                    tango['stale'] = golf;
                    tango = report.bind(oscar)(tango);
 641:
                    return zulu;
 644:
                    return mike;
 647:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetchLocalMessages'] = options;
    options = function(argFoo, argBar) { // Original name: fetchNewLocalMessages
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun66681: for(var _fun66681_ip = 0; ; ) switch(_fun66681_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun66681_ip = 473; continue _fun66681 }
 12:
                    mike = undefined;
                    var _closure4_slot0 = mike;
                    var _closure4_slot1 = mike;
                    golf = _closure1_slot19;
                    oscar = golf.getBasicChannel;
                    zulu = _closure2_slot0;
                    verify = oscar.bind(golf)(zulu);
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 50;
                    zulu = golf[zulu];
                    oscar = oscar.bind(mike)(zulu);
                    zulu = oscar.database;
                    zulu = zulu.bind(oscar)();
                    _closure4_slot0 = zulu;
                    golf = null;
                    if(!(golf != zulu)) { _fun66681_ip = 470; continue _fun66681 }
 90:
                    if(!(golf != verify)) { _fun66681_ip = 470; continue _fun66681 }
 97:
                    oscar = _closure1_slot1;
                    zulu = _closure1_slot2;
                    yankee = 48;
                    zulu = zulu[yankee];
                    offset = oscar.bind(mike)(zulu);
                    oscar = offset.getOrCreate;
                    zulu = _closure2_slot0;
                    zulu = oscar.bind(offset)(zulu);
                    zulu = zulu.hasMoreAfter;
                    if(zulu) { _fun66681_ip = 470; continue _fun66681 }
 144:
                    oscar = _closure1_slot0;
                    offset = _closure1_slot2;
                    zulu = 51;
                    zulu = offset[zulu];
                    offset = oscar.bind(mike)(zulu);
                    oscar = offset.tryLoadAsync;
                    zulu = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 52;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.load;
                        zulu = _closure4_slot0;
                        mike = _closure2_slot0;
                        entity = _closure2_slot1;
                        entity = tango.bind(report)(zulu, mike, entity);
                        return entity;
                    };
                    zulu = oscar.bind(offset)(zulu);
                    SaveGenerator(address=186);
 184:
                    return zulu;
 186:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun66681_ip = 467; continue _fun66681 }
 195:
                    if(!(golf != zulu)) { _fun66681_ip = 470; continue _fun66681 }
 202:
                    offset = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[yankee];
                    yankee = offset.bind(mike)(oscar);
                    offset = yankee.getOrCreate;
                    oscar = _closure2_slot0;
                    offset = offset.bind(yankee)(oscar);
                    oscar = offset.last;
                    offset = oscar.bind(offset)();
                    yankee = golf == offset;
                    oscar = undefined;
                    if(yankee) { _fun66681_ip = 258; continue _fun66681 }
 253:
                    oscar = offset.id;
 258:
                    _closure4_slot1 = oscar;
                    if(!(golf != oscar)) { _fun66681_ip = 291; continue _fun66681 }
 266:
                    golf = zulu.messages;
                    oscar = golf.filter;
                    report = function(argFoo) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 49;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.compare;
                        entity = argFoo;
                        mike = entity.id;
                        entity = _closure4_slot1;
                        mike = zulu.bind(tango)(mike, entity);
                        entity = 0;
                        entity = mike > entity;
                        return entity;
                    };
                    golf = oscar.bind(golf)(report);
                    _fun66681_ip = 297; continue _fun66681;
 291:
                    golf = zulu.messages;
 297:
                    offset = _closure1_slot46;
                    oscar = offset.log;
                    report = zulu.messages;
                    echo = report.length;
                    output = golf.length;
                    report = global;
                    report = report.HermesInternal;
                    foxtrot = report.concat;
                    update = 'Fetched ';
                    result = ' messages from the cache after foregrounding. ';
                    sizing = ' are new';
                    report = update[foxtrot](echo, result, output, sizing, kilo);
                    report = oscar.bind(offset)(report);
                    oscar = golf.length;
                    report = 0;
                    if(!(report !== oscar)) { _fun66681_ip = 470; continue _fun66681 }
 374:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 39;
                    tango = oscar[tango];
                    oscar = report.bind(mike)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    offset = 'LOCAL_MESSAGES_LOADED';
                    tango['type'] = offset;
                    verify = verify.guild_id;
                    tango['guildId'] = verify;
                    options = _closure2_slot0;
                    tango['channelId'] = options;
                    options = zulu.users;
                    tango['users'] = options;
                    options = zulu.members;
                    tango['members'] = options;
                    tango['messages'] = golf;
                    golf = true;
                    tango['stale'] = golf;
                    tango = report.bind(oscar)(tango);
                    _fun66681_ip = 470; continue _fun66681;
 467:
                    return zulu;
 470:
                    return mike;
 473:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetchNewLocalMessages'] = options;
    options = function(argFoo) { // Original name: _tryFetchMessagesCached
        _fun66684: for(var _fun66684_ip = 0; ; ) switch(_fun66684_ip) {
 0:
            entity = argFoo;
            golf = entity.channelId;
            foxtrot = entity.before;
            kilo = entity.after;
            report = entity.limit;
            oscar = entity.jump;
            offset = entity.focus;
            tango = entity.truncate;
            zulu = _closure1_slot22;
            mike = zulu.getMessages;
            options = mike.bind(zulu)(golf);
            mike = options.cached;
            if(mike) { _fun66684_ip = 925; continue _fun66684 }
 74:
            mike = options.ready;
            if(!mike) { _fun66684_ip = 925; continue _fun66684 }
 86:
            backup = null;
            verify = backup == oscar;
            zulu = undefined;
            mike = undefined;
            if(verify) { _fun66684_ip = 104; continue _fun66684 }
 99:
            mike = oscar.messageId;
 104:
            if(!(backup == mike)) { _fun66684_ip = 311; continue _fun66684 }
 111:
            verify = backup == offset;
            mike = undefined;
            if(verify) { _fun66684_ip = 125; continue _fun66684 }
 120:
            mike = offset.messageId;
 125:
            if(!(backup == mike)) { _fun66684_ip = 311; continue _fun66684 }
 132:
            if(!(backup != foxtrot)) { _fun66684_ip = 152; continue _fun66684 }
 136:
            mike = options.hasBeforeCached;
            mike = mike.bind(options)(foxtrot);
            if(mike) { _fun66684_ip = 246; continue _fun66684 }
 152:
            verify = backup == kilo;
            if(verify) { _fun66684_ip = 175; continue _fun66684 }
 159:
            mike = options.hasAfterCached;
            mike = mike.bind(options)(kilo);
            verify = !mike;
 175:
            mike = !verify;
            if(verify) { _fun66684_ip = 244; continue _fun66684 }
 181:
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            verify = 39;
            verify = romeo[verify];
            romeo = yankee.bind(zulu)(verify);
            yankee = romeo.dispatch;
            verify = {};
            sizing = 'LOAD_MESSAGES_SUCCESS_CACHED';
            verify['type'] = sizing;
            verify['channelId'] = golf;
            verify['after'] = kilo;
            verify['limit'] = report;
            verify['truncate'] = tango;
            verify = yankee.bind(romeo)(verify);
            mike = true;
 244:
            _fun66684_ip = 309; continue _fun66684;
 246:
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            verify = 39;
            verify = romeo[verify];
            romeo = yankee.bind(zulu)(verify);
            yankee = romeo.dispatch;
            verify = {};
            kilo = 'LOAD_MESSAGES_SUCCESS_CACHED';
            verify['type'] = kilo;
            verify['channelId'] = golf;
            verify['before'] = foxtrot;
            verify['limit'] = report;
            verify['truncate'] = tango;
            verify = yankee.bind(romeo)(verify);
            mike = true;
 309:
            return mike;
 311:
            verify = backup == oscar;
            mike = undefined;
            if(verify) { _fun66684_ip = 325; continue _fun66684 }
 320:
            mike = oscar.messageId;
 325:
            if(!(backup != mike)) { _fun66684_ip = 353; continue _fun66684 }
 329:
            yankee = options.has;
            verify = oscar.messageId;
            mike = false;
            mike = yankee.bind(options)(verify, mike);
            if(mike) { _fun66684_ip = 860; continue _fun66684 }
 353:
            verify = backup == offset;
            mike = undefined;
            if(verify) { _fun66684_ip = 367; continue _fun66684 }
 362:
            mike = offset.messageId;
 367:
            romeo = oscar;
            if(!(backup != mike)) { _fun66684_ip = 413; continue _fun66684 }
 374:
            yankee = options.has;
            verify = offset.messageId;
            mike = false;
            mike = yankee.bind(options)(verify, mike);
            if(mike) { _fun66684_ip = 795; continue _fun66684 }
 398:
            mike = {};
            echo = mike;
            result = offset;
            verify = copyDataProperties(echo, result);
            romeo = mike;
 413:
            verify = backup == romeo;
            mike = undefined;
            if(verify) { _fun66684_ip = 427; continue _fun66684 }
 422:
            mike = romeo.messageId;
 427:
            mike = backup != mike;
            yankee = 0;
            if(!mike) { _fun66684_ip = 481; continue _fun66684 }
 436:
            verify = _closure1_slot1;
            foxtrot = _closure1_slot2;
            mike = 49;
            mike = foxtrot[mike];
            foxtrot = verify.bind(zulu)(mike);
            verify = foxtrot.extractTimestamp;
            kilo = backup == romeo;
            mike = undefined;
            if(kilo) { _fun66684_ip = 476; continue _fun66684 }
 471:
            mike = romeo.messageId;
 476:
            yankee = verify.bind(foxtrot)(mike);
 481:
            mike = options.first;
            foxtrot = mike.bind(options)();
            mike = options.last;
            verify = mike.bind(options)();
            mike = options.hasMoreBefore;
            mike = !mike;
            if(!mike) { _fun66684_ip = 517; continue _fun66684 }
 513:
            mike = backup != foxtrot;
 517:
            if(!mike) { _fun66684_ip = 560; continue _fun66684 }
 520:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kilo = 49;
            kilo = output[kilo];
            output = sizing.bind(zulu)(kilo);
            sizing = output.extractTimestamp;
            kilo = foxtrot.id;
            kilo = sizing.bind(output)(kilo);
            mike = kilo >= yankee;
 560:
            if(mike) { _fun66684_ip = 625; continue _fun66684 }
 563:
            options = options.hasMoreAfter;
            options = !options;
            if(!options) { _fun66684_ip = 579; continue _fun66684 }
 575:
            options = backup != verify;
 579:
            if(!options) { _fun66684_ip = 622; continue _fun66684 }
 582:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kilo = 49;
            kilo = output[kilo];
            output = sizing.bind(zulu)(kilo);
            sizing = output.extractTimestamp;
            kilo = verify.id;
            kilo = sizing.bind(output)(kilo);
            options = kilo <= yankee;
 622:
            mike = options;
 625:
            if(mike) { _fun66684_ip = 728; continue _fun66684 }
 628:
            options = backup != foxtrot;
            if(!options) { _fun66684_ip = 639; continue _fun66684 }
 635:
            options = backup != verify;
 639:
            if(!options) { _fun66684_ip = 682; continue _fun66684 }
 642:
            kilo = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 49;
            backup = sizing[backup];
            kilo = kilo.bind(zulu)(backup);
            backup = kilo.extractTimestamp;
            foxtrot = foxtrot.id;
            foxtrot = backup.bind(kilo)(foxtrot);
            options = foxtrot < yankee;
 682:
            if(!options) { _fun66684_ip = 725; continue _fun66684 }
 685:
            backup = _closure1_slot1;
            kilo = _closure1_slot2;
            foxtrot = 49;
            foxtrot = kilo[foxtrot];
            backup = backup.bind(zulu)(foxtrot);
            foxtrot = backup.extractTimestamp;
            verify = verify.id;
            verify = foxtrot.bind(backup)(verify);
            options = verify > yankee;
 725:
            mike = options;
 728:
            if(!mike) { _fun66684_ip = 793; continue _fun66684 }
 731:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            options = 39;
            options = yankee[options];
            yankee = verify.bind(zulu)(options);
            verify = yankee.dispatch;
            options = {};
            foxtrot = 'LOAD_MESSAGES_SUCCESS_CACHED';
            options['type'] = foxtrot;
            options['channelId'] = golf;
            options['jump'] = romeo;
            romeo = _closure1_slot35;
            options['limit'] = romeo;
            options = verify.bind(yankee)(options);
            mike = true;
 793:
            return mike;
 795:
            options = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 39;
            mike = verify[mike];
            verify = options.bind(zulu)(mike);
            options = verify.dispatch;
            mike = {};
            yankee = 'LOAD_MESSAGES_SUCCESS_CACHED';
            mike['type'] = yankee;
            mike['channelId'] = golf;
            mike['focus'] = offset;
            mike['limit'] = report;
            mike['truncate'] = tango;
            mike = options.bind(verify)(mike);
            mike = true;
            return mike;
 860:
            mike = _closure1_slot1;
            options = _closure1_slot2;
            entity = 39;
            entity = options[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.dispatch;
            entity = {};
            options = 'LOAD_MESSAGES_SUCCESS_CACHED';
            entity['type'] = options;
            entity['channelId'] = golf;
            entity['jump'] = oscar;
            entity['limit'] = report;
            entity['truncate'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = true;
            return entity;
 925:
            entity = false;
            return entity;
        }
    };
    mike['_tryFetchMessagesCached'] = options;
    options = function(argFoo, argBar) { // Original name: sendMessage
        _fun66685: for(var _fun66685_ip = 0; ; ) switch(_fun66685_ip) {
 0:
            tango = arguments[2];
            zulu = arguments[3];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            mike = undefined;
            if(!(tango === mike)) { _fun66685_ip = 30; continue _fun66685 }
 28:
            tango = true;
 30:
            var _closure2_slot2 = tango;
            if(!(zulu === mike)) { _fun66685_ip = 40; continue _fun66685 }
 38:
            zulu = {};
 40:
            var _closure2_slot3 = zulu;
            zulu = _closure1_slot4;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun66687: for(var _fun66687_ip = 0; ; ) switch(_fun66687_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun66687_ip = 445; continue _fun66687 }
 12:
                        golf = undefined;
                        var _closure4_slot0 = golf;
                        mike = _closure2_slot1;
                        mike = mike.reaction;
                        if(mike) { _fun66687_ip = 424; continue _fun66687 }
 37:
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        mike = 53;
                        mike = oscar[mike];
                        report = report.bind(golf)(mike);
                        mike = _closure2_slot0;
                        mike = report.bind(golf)(mike);
                        SaveGenerator(address=73);
 71:
                        return mike;
 73:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun66687_ip = 421; continue _fun66687 }
 82:
                        report = null;
                        if(!(report == mike)) { _fun66687_ip = 386; continue _fun66687 }
 91:
                        verify = _closure1_slot1;
                        offset = _closure1_slot2;
                        oscar = 54;
                        oscar = offset[oscar];
                        offset = verify.bind(golf)(oscar);
                        verify = offset.backgroundify;
                        oscar = function() {
                            report = _closure1_slot51;
                            tango = report._sendMessage;
                            zulu = _closure2_slot0;
                            mike = _closure2_slot1;
                            entity = _closure2_slot3;
                            entity = tango.bind(report)(zulu, mike, entity);
                            return entity;
                        };
                        oscar = verify.bind(offset)(oscar, golf);
                        _closure4_slot0 = oscar;
                        verify = _closure2_slot3;
                        yankee = verify.nonce;
                        if(!(report == yankee)) { _fun66687_ip = 178; continue _fun66687 }
 148:
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        report = 42;
                        report = offset[report];
                        verify = verify.bind(golf)(report);
                        report = verify.createNonce;
                        yankee = report.bind(verify)();
 178:
                        report = {};
                        result = _closure2_slot3;
                        echo = report;
                        verify = copyDataProperties(echo, result);
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
                        if(report) { _fun66687_ip = 379; continue _fun66687 }
 247:
                        report = _closure2_slot2;
                        if(!report) { _fun66687_ip = 288; continue _fun66687 }
 254:
                        verify = _closure2_slot0;
                        offset = _closure1_slot0;
                        yankee = _closure1_slot2;
                        report = 46;
                        report = yankee[report];
                        report = offset.bind(golf)(report);
                        report = report.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        if(!(verify === report)) { _fun66687_ip = 294; continue _fun66687 }
 288:
                        report = oscar.bind(golf)();
                        _fun66687_ip = 377; continue _fun66687;
 294:
                        romeo = _closure1_slot47;
                        yankee = romeo.info;
                        kilo = _closure2_slot0;
                        verify = global;
                        offset = verify.HermesInternal;
                        backup = offset.concat;
                        foxtrot = 'Waiting for channel ';
                        offset = ' to be ready before sending.';
                        offset = backup.bind(foxtrot)(kilo, offset);
                        offset = yankee.bind(romeo)(offset);
                        offset = verify.Promise;
                        verify = offset.prototype;
                        verify = Object.create(verify, {constructor: {value: offset}});
                        echo = function(argFoo, argBar) {
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            mike = argBar;
                            var _closure5_slot1 = mike;
                            tango = _closure1_slot22;
                            zulu = tango.whenReady;
                            mike = _closure2_slot0;
                            entity = function() {
                                zulu = _closure1_slot47;
                                mike = zulu.info;
                                oscar = _closure2_slot0;
                                entity = global;
                                entity = entity.HermesInternal;
                                report = entity.concat;
                                tango = 'Channel ';
                                entity = ' is ready for sending now.';
                                entity = report.bind(tango)(oscar, entity);
                                entity = mike.bind(zulu)(entity);
                                mike = _closure4_slot0;
                                entity = undefined;
                                report = mike.bind(entity)();
                                tango = report.then;
                                zulu = _closure5_slot0;
                                mike = _closure5_slot1;
                                mike = tango.bind(report)(zulu, mike);
                                return entity;
                            };
                            entity = zulu.bind(tango)(mike, entity);
                            entity = undefined;
                            return entity;
                        };
                        update = verify;
                        options = new update[offset](echo, result);
                        report = options instanceof Object ? options : verify;
 377:
                        _fun66687_ip = 383; continue _fun66687;
 379:
                        report = oscar.bind(golf)();
 383:
                        return report;
 386:
                        golf = _closure1_slot51;
                        oscar = golf.sendMessage;
                        result = _closure2_slot1;
                        output = _closure2_slot2;
                        sizing = _closure2_slot3;
                        update = golf;
                        echo = mike;
                        zulu = update[oscar](echo, result, output, sizing, kilo);
                        return zulu;
 421:
                        return mike;
 424:
                        mike = global;
                        zulu = mike.Promise;
                        mike = zulu.resolve;
                        mike = mike.bind(zulu)();
                        return mike;
 445:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    mike['sendMessage'] = options;
    options = function(argFoo) { // Original name: getSendMessageOptionsForReply
        _fun66691: for(var _fun66691_ip = 0; ; ) switch(_fun66691_ip) {
 0:
            zulu = argFoo;
            mike = null;
            if(!(mike != zulu)) { _fun66691_ip = 141; continue _fun66691 }
 12:
            entity = {};
            tango = {};
            oscar = zulu.channel;
            report = oscar.getGuildId;
            oscar = report.bind(oscar)();
            golf = mike != oscar;
            report = undefined;
            if(!golf) { _fun66691_ip = 43; continue _fun66691 }
 40:
            report = oscar;
 43:
            tango['guild_id'] = report;
            report = zulu.channel;
            report = report.id;
            tango['channel_id'] = report;
            report = zulu.message;
            report = report.id;
            tango['message_id'] = report;
            entity['messageReference'] = tango;
            zulu = zulu.shouldMention;
            mike = undefined;
            if(zulu) { _fun66691_ip = 134; continue _fun66691 }
 92:
            zulu = {};
            tango = global;
            oscar = tango.Object;
            report = oscar.values;
            tango = _closure1_slot37;
            tango = report.bind(oscar)(tango);
            zulu['parse'] = tango;
            tango = false;
            zulu['replied_user'] = tango;
            mike = zulu;
 134:
            entity['allowedMentions'] = mike;
            _fun66691_ip = 143; continue _fun66691;
 141:
            entity = {};
 143:
            return entity;
        }
    };
    mike['getSendMessageOptionsForReply'] = options;
    options = function(argFoo) { // Original name: getSendMessageOptionsForConfettiPotion
        _fun66692: for(var _fun66692_ip = 0; ; ) switch(_fun66692_ip) {
 0:
            entity = argFoo;
            mike = entity.channelId;
            var _closure2_slot0 = mike;
            options = entity.content;
            golf = entity.isGif;
            oscar = entity.command;
            zulu = entity.uploads;
            report = entity.confettiPotionEmoji;
            entity = null;
            if(!(entity != report)) { _fun66692_ip = 104; continue _fun66692 }
 51:
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 55;
            mike = mike[entity];
            entity = undefined;
            mike = verify.bind(entity)(mike);
            entity = mike.canAddConfettiToMessageOnSend;
            backup = mike;
            foxtrot = options;
            romeo = golf;
            yankee = oscar;
            offset = zulu;
            entity = backup[entity](foxtrot, romeo, yankee, offset, verify);
            if(entity) { _fun66692_ip = 108; continue _fun66692 }
 104:
            entity = {};
            _fun66692_ip = 137; continue _fun66692;
 108:
            mike = {};
            zulu = {};
            zulu['emoji'] = report;
            tango = function() { // Original name: callback
                zulu = _closure1_slot12;
                mike = _closure2_slot0;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            zulu['callback'] = tango;
            mike['confettiPotionData'] = zulu;
            entity = mike;
 137:
            return entity;
        }
    };
    mike['getSendMessageOptionsForConfettiPotion'] = options;
    options = function(argFoo) { // Original name: getSendMessageOptionsForStickers
        _fun66694: for(var _fun66694_ip = 0; ; ) switch(_fun66694_ip) {
 0:
            mike = argFoo;
            entity = mike.isGif;
            mike = mike.stickers;
            zulu = null;
            if(!(zulu != mike)) { _fun66694_ip = 44; continue _fun66694 }
 21:
            tango = mike.length;
            zulu = 0;
            if(!(zulu !== tango)) { _fun66694_ip = 44; continue _fun66694 }
 32:
            if(entity) { _fun66694_ip = 44; continue _fun66694 }
 35:
            entity = {};
            entity['stickerIds'] = mike;
            _fun66694_ip = 46; continue _fun66694;
 44:
            entity = {};
 46:
            return entity;
        }
    };
    mike['getSendMessageOptionsForStickers'] = options;
    options = function(argFoo) { // Original name: getSendMessageOptionsForScheduledMessage
        _fun66695: for(var _fun66695_ip = 0; ; ) switch(_fun66695_ip) {
 0:
            entity = argFoo;
            mike = entity.scheduledTimestamp;
            entity = null;
            if(!(entity != mike)) { _fun66695_ip = 24; continue _fun66695 }
 15:
            entity = {};
            entity['scheduledTimestamp'] = mike;
            _fun66695_ip = 26; continue _fun66695;
 24:
            entity = {};
 26:
            return entity;
        }
    };
    mike['getSendMessageOptionsForScheduledMessage'] = options;
    options = function(argFoo) { // Original name: getSendMessageOptions
        report = argFoo;
        entity = {};
        oscar = _closure1_slot51;
        tango = oscar.getSendMessageOptionsForReply;
        zulu = report.pendingReply;
        options = tango.bind(oscar)(zulu);
        verify = entity;
        zulu = copyDataProperties(verify, options);
        oscar = _closure1_slot51;
        tango = oscar.getSendMessageOptionsForConfettiPotion;
        zulu = {};
        verify = zulu;
        options = report;
        golf = copyDataProperties(verify, options);
        options = tango.bind(oscar)(zulu);
        verify = entity;
        zulu = copyDataProperties(verify, options);
        oscar = _closure1_slot51;
        tango = oscar.getSendMessageOptionsForStickers;
        zulu = {};
        verify = zulu;
        options = report;
        golf = copyDataProperties(verify, options);
        options = tango.bind(oscar)(zulu);
        verify = entity;
        zulu = copyDataProperties(verify, options);
        tango = _closure1_slot51;
        zulu = tango.getSendMessageOptionsForScheduledMessage;
        mike = {};
        verify = mike;
        options = report;
        report = copyDataProperties(verify, options);
        options = zulu.bind(tango)(mike);
        verify = entity;
        mike = copyDataProperties(verify, options);
        return entity;
    };
    mike['getSendMessageOptions'] = options;
    options = function(argFoo, argBar, argBaz, argCorge) { // Original name: sendInvite
        _fun66697: for(var _fun66697_ip = 0; ; ) switch(_fun66697_ip) {
 0:
            oscar = argCorge;
            report = _closure1_slot51;
            tango = report._sendMessage;
            zulu = {};
            golf = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 56;
            mike = mike[entity];
            entity = undefined;
            golf = golf.bind(entity)(mike);
            mike = argBar;
            mike = golf.bind(entity)(mike);
            zulu['content'] = mike;
            mike = false;
            zulu['tts'] = mike;
            mike = new Array(0);
            zulu['validNonShortcutEmojis'] = mike;
            mike = new Array(0);
            zulu['invalidEmojis'] = mike;
            mike = {};
            golf = argBaz;
            mike['location'] = golf;
            golf = null;
            golf = golf != oscar;
            if(!golf) { _fun66697_ip = 98; continue _fun66697 }
 95:
            entity = oscar;
 98:
            mike['suggestedInvite'] = entity;
            entity = argFoo;
            entity = tango.bind(report)(entity, zulu, mike);
            return entity;
        }
    };
    mike['sendInvite'] = options;
    options = function(argFoo, argBar, argBaz, argCorge) { // Original name: sendActivityBookmark
        _fun66698: for(var _fun66698_ip = 0; ; ) switch(_fun66698_ip) {
 0:
            oscar = argCorge;
            report = _closure1_slot51;
            tango = report._sendMessage;
            zulu = {};
            entity = argBar;
            zulu['content'] = entity;
            entity = false;
            zulu['tts'] = entity;
            entity = new Array(0);
            zulu['validNonShortcutEmojis'] = entity;
            entity = new Array(0);
            zulu['invalidEmojis'] = entity;
            mike = {};
            entity = argBaz;
            mike['location'] = entity;
            entity = null;
            golf = entity != oscar;
            entity = undefined;
            if(!golf) { _fun66698_ip = 73; continue _fun66698 }
 70:
            entity = oscar;
 73:
            mike['suggestedInvite'] = entity;
            entity = argFoo;
            entity = tango.bind(report)(entity, zulu, mike);
            return entity;
        }
    };
    mike['sendActivityBookmark'] = options;
    options = function(argFoo, argBar) { // Original name: sendStickers
        _fun66699: for(var _fun66699_ip = 0; ; ) switch(_fun66699_ip) {
 0:
            oscar = arguments[2];
            entity = arguments[3];
            mike = arguments[4];
            zulu = undefined;
            if(!(oscar === zulu)) { _fun66699_ip = 19; continue _fun66699 }
 15:
            oscar = '';
 19:
            if(!(entity === zulu)) { _fun66699_ip = 25; continue _fun66699 }
 23:
            entity = {};
 25:
            if(!(mike === zulu)) { _fun66699_ip = 31; continue _fun66699 }
 29:
            mike = false;
 31:
            report = _closure1_slot51;
            tango = report._sendMessage;
            zulu = {};
            zulu['content'] = oscar;
            oscar = new Array(0);
            zulu['invalidEmojis'] = oscar;
            oscar = new Array(0);
            zulu['validNonShortcutEmojis'] = oscar;
            zulu['tts'] = mike;
            mike = {};
            verify = mike;
            options = entity;
            entity = copyDataProperties(verify, options);
            oscar = argBar;
            entity = 'stickerIds';
            mike[entity] = oscar;
            entity = argFoo;
            entity = tango.bind(report)(entity, zulu, mike);
            return entity;
        }
    };
    mike['sendStickers'] = options;
    options = function(argFoo, argBar) { // Original name: sendGreetMessage
        _fun66700: for(var _fun66700_ip = 0; ; ) switch(_fun66700_ip) {
 0:
            offset = argFoo;
            verify = argBar;
            mike = arguments[2];
            var _closure2_slot0 = offset;
            var _closure2_slot1 = verify;
            tango = undefined;
            if(!(mike === tango)) { _fun66700_ip = 27; continue _fun66700 }
 25:
            mike = {};
 27:
            oscar = mike.messageReference;
            golf = mike.allowedMentions;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 44;
            mike = options[mike];
            mike = zulu.bind(tango)(mike);
            tango = mike.HTTP;
            zulu = tango.post;
            mike = {};
            options = _closure1_slot29;
            report = options.MESSAGES_GREET;
            report = report.bind(options)(offset);
            mike['url'] = report;
            report = {};
            options = new Array(1);
            options[0] = verify;
            report['sticker_ids'] = options;
            report['allowed_mentions'] = golf;
            report['message_reference'] = oscar;
            mike['body'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            report = false;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                entity = argFoo;
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 57;
                report = oscar[zulu];
                zulu = undefined;
                offset = tango.bind(zulu)(report);
                options = offset.donateSentMessage;
                report = entity.body;
                golf = report.content;
                verify = _closure2_slot0;
                golf = options.bind(offset)(golf, verify);
                options = _closure1_slot51;
                golf = options.receiveMessage;
                mike = entity.body;
                mike = golf.bind(options)(verify, mike);
                mike = 39;
                mike = oscar[mike];
                tango = tango.bind(zulu)(mike);
                zulu = tango.dispatch;
                mike = {};
                oscar = 'STICKER_TRACK_USAGE';
                mike['type'] = oscar;
                oscar = _closure2_slot1;
                report = new Array(1);
                report[0] = oscar;
                mike['stickerIds'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = function(argFoo) {
                _fun66702: for(var _fun66702_ip = 0; ; ) switch(_fun66702_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot46;
                    tango = report.log;
                    zulu = 'Failed to send greeting';
                    zulu = tango.bind(report)(zulu);
                    tango = entity.status;
                    zulu = 429;
                    if(!(zulu !== tango)) { _fun66702_ip = 75; continue _fun66702 }
 42:
                    oscar = _closure1_slot51;
                    report = oscar.sendClydeError;
                    tango = _closure2_slot0;
                    zulu = entity.body;
                    zulu = zulu.code;
                    zulu = report.bind(oscar)(tango, zulu);
 75:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 39;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'MESSAGE_SEND_FAILED';
                    mike['type'] = report;
                    report = entity.body;
                    report = report.id;
                    mike['messageId'] = report;
                    report = _closure2_slot0;
                    mike['channelId'] = report;
                    mike = zulu.bind(tango)(mike);
                    throw entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike['sendGreetMessage'] = options;
    options = function(argFoo, argBar) { // Original name: sendPollMessage
        _fun66703: for(var _fun66703_ip = 0; ; ) switch(_fun66703_ip) {
 0:
            entity = arguments[2];
            mike = undefined;
            if(!(entity === mike)) { _fun66703_ip = 11; continue _fun66703 }
 9:
            entity = {};
 11:
            report = _closure1_slot51;
            tango = report._sendMessage;
            zulu = {'content': '', 'tts': false};
            mike = new Array(0);
            zulu['validNonShortcutEmojis'] = mike;
            mike = new Array(0);
            zulu['invalidEmojis'] = mike;
            mike = {};
            verify = mike;
            options = entity;
            entity = copyDataProperties(verify, options);
            oscar = argBar;
            entity = 'poll';
            mike[entity] = oscar;
            entity = argFoo;
            entity = tango.bind(report)(entity, zulu, mike);
            return entity;
        }
    };
    mike['sendPollMessage'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: validateMessage
        _fun66704: for(var _fun66704_ip = 0; ; ) switch(_fun66704_ip) {
 0:
            zulu = argFoo;
            mike = zulu.some;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.animated;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            if(!entity) { _fun66704_ip = 131; continue _fun66704 }
 26:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 58;
            mike = tango[mike];
            report = undefined;
            tango = zulu.bind(report)(mike);
            zulu = tango.canUseAnimatedEmojis;
            mike = argBar;
            mike = zulu.bind(tango)(mike);
            if(mike) { _fun66704_ip = 131; continue _fun66704 }
 68:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 37;
            mike = oscar[entity];
            mike = tango.bind(report)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.t;
            entity = entity.V5/GgI;
            zulu = mike.bind(zulu)(entity);
            mike = 'INVALID_ANIMATED_EMOJI_BODY';
            _fun66704_ip = 197; continue _fun66704;
 131:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            entity = 37;
            tango = options[entity];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            entity = options[entity];
            entity = golf.bind(oscar)(entity);
            entity = entity.t;
            entity = entity.Q87rIy;
            zulu = tango.bind(report)(entity);
            mike = 'INVALID_EXTERNAL_EMOJI_BODY';
 197:
            entity = {};
            entity['errorMessage'] = zulu;
            entity['errorMessageName'] = mike;
            return entity;
        }
    };
    mike['validateMessage'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: _sendMessage
        _fun66706: for(var _fun66706_ip = 0; ; ) switch(_fun66706_ip) {
 0:
            echo = argFoo;
            tango = argBar;
            sequence = argBaz;
            var _closure2_slot0 = echo;
            var _closure2_slot1 = tango;
            var _closure2_slot2 = sequence;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 53;
            zulu = oscar[zulu];
            options = undefined;
            zulu = report.bind(options)(zulu);
            zulu = zulu.bind(options)(echo);
            oscar = null;
            if(!(oscar == zulu)) { _fun66706_ip = 1203; continue _fun66706 }
 62:
            foxtrot = tango.content;
            var _closure2_slot3 = foxtrot;
            source = tango.invalidEmojis;
            report = tango.validNonShortcutEmojis;
            var _closure2_slot4 = report;
            tango = tango.tts;
            sizing = options !== tango;
            if(!sizing) { _fun66706_ip = 103; continue _fun66706 }
 100:
            sizing = tango;
 103:
            golf = sequence.activityAction;
            tango = sequence.location;
            var _closure2_slot5 = tango;
            tango = sequence.suggestedInvite;
            var _closure2_slot6 = tango;
            offset = sequence.stickerIds;
            var _closure2_slot7 = offset;
            report = sequence.confettiPotionData;
            kilo = sequence.messageReference;
            var _closure2_slot8 = kilo;
            backup = sequence.allowedMentions;
            yankee = sequence.poll;
            var _closure2_slot9 = yankee;
            verify = sequence.contentInventoryEntry;
            var _closure2_slot10 = verify;
            tango = sequence.flags;
            output = oscar != tango;
            romeo = 0;
            vacuum = 0;
            if(!output) { _fun66706_ip = 199; continue _fun66706 }
 196:
            vacuum = tango;
 199:
            output = _closure1_slot1;
            result = _closure1_slot2;
            tango = 59;
            tango = result[tango];
            tango = output.bind(options)(tango);
            result = tango.bind(options)(foxtrot);
            output = _closure1_slot3;
            tango = 2;
            result = output.bind(options)(result, tango);
            tango = result[romeo];
            output = 1;
            output = result[output];
            result = foxtrot;
            foxtrot = vacuum;
            if(!tango) { _fun66706_ip = 306; continue _fun66706 }
 257:
            _closure2_slot3 = output;
            update = _closure1_slot0;
            control = _closure1_slot2;
            tango = 60;
            tango = control[tango];
            control = update.bind(options)(tango);
            update = control.addFlag;
            tango = _closure1_slot34;
            tango = tango.SUPPRESS_NOTIFICATIONS;
            foxtrot = update.bind(control)(vacuum, tango);
            result = output;
 306:
            tango = sequence.messageReference;
            update = oscar == tango;
            output = undefined;
            if(update) { _fun66706_ip = 326; continue _fun66706 }
 321:
            output = tango.type;
 326:
            tango = _closure1_slot40;
            tango = tango.FORWARD;
            tango = output === tango;
            var _closure2_slot11 = tango;
            output = '';
            if(!(output === result)) { _fun66706_ip = 391; continue _fun66706 }
 352:
            if(!(oscar == golf)) { _fun66706_ip = 391; continue _fun66706 }
 356:
            if(!(oscar == offset)) { _fun66706_ip = 391; continue _fun66706 }
 360:
            if(!(oscar == yankee)) { _fun66706_ip = 391; continue _fun66706 }
 364:
            if(!(oscar == verify)) { _fun66706_ip = 391; continue _fun66706 }
 368:
            if(tango) { _fun66706_ip = 391; continue _fun66706 }
 371:
            tango = global;
            output = tango.Promise;
            tango = output.resolve;
            tango = tango.bind(output)();
            return tango;
 391:
            if(!(oscar == kilo)) { _fun66706_ip = 407; continue _fun66706 }
 395:
            tango = _closure1_slot36;
            update = tango.DEFAULT;
            _fun66706_ip = 417; continue _fun66706;
 407:
            tango = _closure1_slot36;
            update = tango.REPLY;
 417:
            var _closure2_slot12 = update;
            output = sequence.nonce;
            if(!(oscar == output)) { _fun66706_ip = 461; continue _fun66706 }
 431:
            control = _closure1_slot0;
            vacuum = _closure1_slot2;
            tango = 42;
            tango = vacuum[tango];
            control = control.bind(options)(tango);
            tango = control.createNonce;
            output = tango.bind(control)();
 461:
            var _closure2_slot13 = output;
            var _closure2_slot14 = output;
            control = sequence.eagerDispatch;
            tango = false;
            if(!(tango !== control)) { _fun66706_ip = 693; continue _fun66706 }
 484:
            control = _closure1_slot1;
            vacuum = _closure1_slot2;
            tango = 40;
            tango = vacuum[tango];
            vacuum = control.bind(options)(tango);
            tango = {};
            tango['channelId'] = echo;
            tango['content'] = result;
            tango['tts'] = sizing;
            tango['type'] = update;
            tango['messageReference'] = kilo;
            tango['allowedMentions'] = backup;
            update = undefined;
            if(!(romeo !== foxtrot)) { _fun66706_ip = 542; continue _fun66706 }
 539:
            update = foxtrot;
 542:
            tango['flags'] = update;
            tango['nonce'] = output;
            update = _closure1_slot0;
            control = _closure1_slot2;
            config = 61;
            config = control[config];
            record = update.bind(options)(config);
            config = record.createPollServerDataFromCreateRequest;
            config = config.bind(record)(yankee);
            tango['poll'] = config;
            vacuum = vacuum.bind(options)(tango);
            tango = 62;
            tango = control[tango];
            control = update.bind(options)(tango);
            update = control.updateComboOnMessageSend;
            tango = vacuum.id;
            tango = update.bind(control)(echo, tango);
            if(!(oscar != offset)) { _fun66706_ip = 665; continue _fun66706 }
 625:
            update = offset.map;
            tango = function(argFoo) {
                zulu = _closure1_slot16;
                mike = zulu.getStickerById;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            control = update.bind(offset)(tango);
            update = control.filter;
            tango = function(argFoo) {
                mike = null;
                entity = argFoo;
                entity = mike != entity;
                return entity;
            };
            tango = update.bind(control)(tango);
            vacuum['sticker_items'] = tango;
 665:
            control = _closure1_slot51;
            update = control.receiveMessage;
            papa = true;
            sierra = control;
            status = echo;
            target = vacuum;
            context = sequence;
            tango = sierra[update](status, target, papa, context, record);
 693:
            tango = _closure1_slot48;
            if(tango) { _fun66706_ip = 778; continue _fun66706 }
 700:
            if(!(oscar != source)) { _fun66706_ip = 778; continue _fun66706 }
 704:
            tango = source.length;
            if(!(tango > romeo)) { _fun66706_ip = 778; continue _fun66706 }
 713:
            tango = true;
            _closure1_slot48 = tango;
            romeo = _closure1_slot26;
            tango = romeo.getCurrentUser;
            update = tango.bind(romeo)();
            romeo = _closure1_slot51;
            tango = romeo.validateMessage;
            tango = tango.bind(romeo)(source, update, echo);
            source = tango.errorMessage;
            update = tango.errorMessageName;
            romeo = _closure1_slot51;
            tango = romeo.sendBotMessage;
            tango = tango.bind(romeo)(echo, source, update);
 778:
            tango = {};
            update = _closure1_slot0;
            source = _closure1_slot2;
            romeo = 63;
            romeo = source[romeo];
            romeo = update.bind(options)(romeo);
            romeo = romeo.MessageDataType;
            romeo = romeo.SEND;
            tango['type'] = romeo;
            romeo = {};
            romeo['channelId'] = echo;
            romeo['content'] = result;
            romeo['nonce'] = output;
            romeo['tts'] = sizing;
            romeo['message_reference'] = kilo;
            romeo['allowed_mentions'] = backup;
            romeo['flags'] = foxtrot;
            tango['message'] = romeo;
            var _closure2_slot15 = tango;
            if(!(oscar != golf)) { _fun66706_ip = 1031; continue _fun66706 }
 865:
            foxtrot = oscar == golf;
            romeo = undefined;
            if(foxtrot) { _fun66706_ip = 886; continue _fun66706 }
 874:
            foxtrot = golf.activity;
            romeo = foxtrot.session_id;
 886:
            kilo = golf.type;
            foxtrot = _closure1_slot44;
            backup = foxtrot.JOIN_REQUEST;
            foxtrot = romeo;
            if(!(kilo !== backup)) { _fun66706_ip = 929; continue _fun66706 }
 908:
            foxtrot = romeo;
            if(!(oscar == foxtrot)) { _fun66706_ip = 929; continue _fun66706 }
 915:
            backup = _closure1_slot18;
            romeo = backup.getSessionId;
            foxtrot = romeo.bind(backup)();
 929:
            if(!(oscar != foxtrot)) { _fun66706_ip = 1031; continue _fun66706 }
 933:
            romeo = {};
            backup = golf.type;
            romeo['type'] = backup;
            romeo['session_id'] = foxtrot;
            golf = golf.activity;
            foxtrot = golf.party;
            foxtrot = oscar != foxtrot;
            if(!foxtrot) { _fun66706_ip = 983; continue _fun66706 }
 968:
            backup = golf.party;
            backup = backup.id;
            foxtrot = oscar != backup;
 983:
            if(!foxtrot) { _fun66706_ip = 1003; continue _fun66706 }
 986:
            foxtrot = golf.party;
            foxtrot = foxtrot.id;
            romeo['party_id'] = foxtrot;
 1003:
            foxtrot = tango.message;
            golf = golf.application_id;
            foxtrot['application_id'] = golf;
            golf = tango.message;
            golf['activity'] = romeo;
 1031:
            if(!(oscar != yankee)) { _fun66706_ip = 1046; continue _fun66706 }
 1035:
            golf = tango.message;
            golf['poll'] = yankee;
 1046:
            if(!(oscar != offset)) { _fun66706_ip = 1061; continue _fun66706 }
 1050:
            golf = tango.message;
            golf['sticker_ids'] = offset;
 1061:
            offset = _closure1_slot11;
            golf = offset.isEnabled;
            golf = golf.bind(offset)();
            if(!golf) { _fun66706_ip = 1093; continue _fun66706 }
 1078:
            offset = tango.message;
            golf = true;
            offset['has_poggermode_enabled'] = golf;
 1093:
            if(!(oscar != verify)) { _fun66706_ip = 1108; continue _fun66706 }
 1097:
            golf = tango.message;
            golf['content_inventory_entry'] = verify;
 1108:
            if(!(oscar != report)) { _fun66706_ip = 1166; continue _fun66706 }
 1112:
            oscar = tango.message;
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 55;
            tango = verify[tango];
            golf = golf.bind(options)(tango);
            tango = golf.constructCreateConfettiPotionRequest;
            tango = tango.bind(golf)(report);
            oscar['confetti_potion'] = tango;
            tango = report.callback;
            tango = tango.bind(report)();
 1166:
            tango = global;
            oscar = tango.Promise;
            tango = oscar.prototype;
            report = Object.create(tango, {constructor: {value: oscar}});
            status = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                golf = global;
                zulu = golf.Date;
                entity = zulu.now;
                entity = entity.bind(zulu)();
                var _closure3_slot2 = entity;
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 63;
                oscar = report[zulu];
                entity = undefined;
                oscar = tango.bind(entity)(oscar);
                oscar = oscar.length;
                var _closure3_slot3 = oscar;
                offset = golf.Math;
                verify = offset.floor;
                yankee = golf.Math;
                oscar = yankee.random;
                yankee = oscar.bind(yankee)();
                oscar = 10000;
                oscar = oscar * yankee;
                oscar = verify.bind(offset)(oscar);
                verify = _closure1_slot47;
                options = verify.info;
                golf = golf.HermesInternal;
                offset = golf.concat;
                golf = 'Queueing message to be sent LogId:';
                golf = offset.bind(golf)(oscar);
                golf = options.bind(verify)(golf);
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.enqueue;
                zulu = _closure2_slot15;
                mike = function(argFoo) {
                    _fun66711: for(var _fun66711_ip = 0; ; ) switch(_fun66711_ip) {
 0:
                        zulu = argFoo;
                        entity = global;
                        mike = entity.Date;
                        entity = mike.now;
                        tango = entity.bind(mike)();
                        mike = _closure3_slot2;
                        backup = tango - mike;
                        mike = zulu.ok;
                        if(mike) { _fun66711_ip = 940; continue _fun66711 }
 48:
                        verify = _closure1_slot46;
                        options = verify.log;
                        oscar = {};
                        mike = zulu.hasErr;
                        oscar['hasErr'] = mike;
                        mike = zulu.status;
                        oscar['status'] = mike;
                        offset = zulu.body;
                        golf = null;
                        yankee = golf == offset;
                        tango = undefined;
                        mike = undefined;
                        if(yankee) { _fun66711_ip = 103; continue _fun66711 }
 98:
                        mike = offset.code;
 103:
                        oscar['code'] = mike;
                        mike = zulu.err;
                        oscar['error'] = mike;
                        mike = 'Failed to send message';
                        mike = options.bind(verify)(mike, oscar);
                        mike = zulu.hasErr;
                        if(mike) { _fun66711_ip = 655; continue _fun66711 }
 141:
                        oscar = zulu.status;
                        mike = 400;
                        options = oscar >= mike;
                        mike = false;
                        if(!options) { _fun66711_ip = 680; continue _fun66711 }
 164:
                        verify = zulu.status;
                        options = 500;
                        options = verify < options;
                        mike = false;
                        if(!options) { _fun66711_ip = 680; continue _fun66711 }
 187:
                        options = zulu.body;
                        mike = false;
                        if(!options) { _fun66711_ip = 680; continue _fun66711 }
 200:
                        options = zulu.body;
                        verify = options.code;
                        options = _closure1_slot27;
                        options = options.SLOWMODE_RATE_LIMITED;
                        if(!(verify !== options)) { _fun66711_ip = 518; continue _fun66711 }
 227:
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        options = 70;
                        options = offset[options];
                        options = verify.bind(tango)(options);
                        offset = options.AUTOMOD_ERROR_CODES;
                        verify = offset.has;
                        options = zulu.body;
                        options = options.code;
                        options = verify.bind(offset)(options);
                        if(options) { _fun66711_ip = 424; continue _fun66711 }
 279:
                        options = zulu.body;
                        verify = options.code;
                        options = _closure1_slot27;
                        options = options.POGGERMODE_TEMPORARILY_DISABLED;
                        if(!(verify !== options)) { _fun66711_ip = 377; continue _fun66711 }
 303:
                        verify = _closure2_slot9;
                        verify = golf != verify;
                        if(verify) { _fun66711_ip = 321; continue _fun66711 }
 317:
                        verify = _closure2_slot11;
 321:
                        if(verify) { _fun66711_ip = 332; continue _fun66711 }
 324:
                        offset = _closure2_slot10;
                        verify = golf != offset;
 332:
                        mike = false;
                        if(verify) { _fun66711_ip = 680; continue _fun66711 }
 340:
                        yankee = _closure1_slot51;
                        offset = yankee.sendClydeError;
                        verify = _closure2_slot0;
                        options = zulu.body;
                        options = options.code;
                        options = offset.bind(yankee)(verify, options);
                        mike = false;
                        _fun66711_ip = 680; continue _fun66711;
 377:
                        verify = _closure1_slot1;
                        offset = _closure1_slot2;
                        options = 39;
                        options = offset[options];
                        offset = verify.bind(tango)(options);
                        verify = offset.dispatch;
                        options = {};
                        yankee = 'POGGERMODE_TEMPORARILY_DISABLED';
                        options['type'] = yankee;
                        options = verify.bind(offset)(options);
                        mike = false;
                        _fun66711_ip = 680; continue _fun66711;
 424:
                        verify = _closure1_slot1;
                        offset = _closure1_slot2;
                        options = 39;
                        options = offset[options];
                        offset = verify.bind(tango)(options);
                        verify = offset.dispatch;
                        options = {};
                        yankee = 'MESSAGE_SEND_FAILED_AUTOMOD';
                        options['type'] = yankee;
                        yankee = _closure2_slot15;
                        options['messageData'] = yankee;
                        yankee = {};
                        foxtrot = zulu.body;
                        foxtrot = foxtrot.code;
                        yankee['code'] = foxtrot;
                        foxtrot = zulu.body;
                        foxtrot = foxtrot.message;
                        yankee['message'] = foxtrot;
                        options['errorResponseBody'] = yankee;
                        options = verify.bind(offset)(options);
                        mike = false;
                        _fun66711_ip = 680; continue _fun66711;
 518:
                        options = zulu.body;
                        yankee = options.retry_after;
                        golf = golf != yankee;
                        if(!golf) { _fun66711_ip = 542; continue _fun66711 }
 536:
                        options = 0;
                        golf = yankee > options;
 542:
                        mike = false;
                        if(!golf) { _fun66711_ip = 680; continue _fun66711 }
 550:
                        foxtrot = _closure1_slot1;
                        kilo = _closure1_slot2;
                        golf = 39;
                        golf = kilo[golf];
                        verify = foxtrot.bind(tango)(golf);
                        options = verify.dispatch;
                        golf = {};
                        offset = 'SLOWMODE_SET_COOLDOWN';
                        golf['type'] = offset;
                        offset = _closure2_slot0;
                        golf['channelId'] = offset;
                        offset = _closure1_slot25;
                        offset = offset.SendMessage;
                        golf['slowmodeType'] = offset;
                        offset = 69;
                        offset = kilo[offset];
                        offset = foxtrot.bind(tango)(offset);
                        offset = offset.Millis;
                        offset = offset.SECOND;
                        offset = yankee * offset;
                        golf['cooldownMs'] = offset;
                        golf = options.bind(verify)(golf);
                        mike = false;
                        _fun66711_ip = 680; continue _fun66711;
 655:
                        oscar = zulu.err;
                        golf = oscar.code;
                        mike = false;
                        oscar = 'ABORTED';
                        if(!(oscar === golf)) { _fun66711_ip = 680; continue _fun66711 }
 678:
                        mike = true;
 680:
                        if(mike) { _fun66711_ip = 896; continue _fun66711 }
 686:
                        oscar = _closure1_slot1;
                        options = _closure1_slot2;
                        mike = 39;
                        mike = options[mike];
                        verify = oscar.bind(tango)(mike);
                        golf = verify.dispatch;
                        oscar = {};
                        mike = 'MESSAGE_SEND_FAILED';
                        oscar['type'] = mike;
                        offset = _closure2_slot14;
                        oscar['messageId'] = offset;
                        offset = _closure2_slot0;
                        oscar['channelId'] = offset;
                        offset = _closure2_slot2;
                        offset = offset.doNotNotifyOnError;
                        offset = !offset;
                        oscar['shouldNotify'] = offset;
                        oscar = golf.bind(verify)(oscar);
                        golf = _closure1_slot0;
                        oscar = 71;
                        oscar = options[oscar];
                        options = golf.bind(tango)(oscar);
                        golf = options.logMessageSendFailure;
                        oscar = {};
                        offset = zulu.hasErr;
                        verify = undefined;
                        if(offset) { _fun66711_ip = 803; continue _fun66711 }
 798:
                        verify = zulu.status;
 803:
                        oscar['failureCode'] = verify;
                        offset = zulu.hasErr;
                        verify = undefined;
                        if(!offset) { _fun66711_ip = 830; continue _fun66711 }
 819:
                        offset = zulu.err;
                        verify = offset.message;
 830:
                        oscar['errorMessage'] = verify;
                        oscar = golf.bind(options)(oscar);
                        golf = _closure1_slot1;
                        options = _closure1_slot2;
                        oscar = 63;
                        oscar = options[oscar];
                        golf = golf.bind(tango)(oscar);
                        oscar = golf.cancelPendingSendRequests;
                        mike = _closure2_slot0;
                        golf = oscar.bind(golf)(mike);
                        oscar = golf.forEach;
                        mike = function(argFoo) {
                            report = argFoo;
                            oscar = _closure1_slot46;
                            tango = oscar.log;
                            zulu = report.nonce;
                            mike = 'Cancelling pending message';
                            mike = tango.bind(oscar)(mike, zulu);
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 39;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            oscar = 'MESSAGE_SEND_FAILED';
                            mike['type'] = oscar;
                            oscar = report.nonce;
                            mike['messageId'] = oscar;
                            report = report.channelId;
                            mike['channelId'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        };
                        mike = oscar.bind(golf)(mike);
                        _fun66711_ip = 926; continue _fun66711;
 896:
                        verify = _closure1_slot51;
                        options = verify.deleteMessage;
                        golf = _closure2_slot0;
                        oscar = _closure2_slot14;
                        mike = true;
                        mike = options.bind(verify)(golf, oscar, mike);
 926:
                        mike = _closure3_slot1;
                        mike = mike.bind(tango)(zulu);
                        _fun66711_ip = 2198; continue _fun66711;
 940:
                        oscar = _closure1_slot1;
                        options = _closure1_slot2;
                        mike = 57;
                        tango = options[mike];
                        mike = undefined;
                        verify = oscar.bind(mike)(tango);
                        golf = verify.donateSentMessage;
                        oscar = _closure2_slot3;
                        foxtrot = _closure2_slot0;
                        oscar = golf.bind(verify)(oscar, foxtrot);
                        yankee = _closure1_slot51;
                        verify = yankee.receiveMessage;
                        sequence = zulu.body;
                        oscar = {};
                        offset = {};
                        offset['duration'] = backup;
                        backup = _closure3_slot3;
                        offset['queueSize'] = backup;
                        oscar['sendAnalytics'] = offset;
                        offset = _closure2_slot9;
                        oscar['poll'] = offset;
                        record = yankee;
                        config = foxtrot;
                        vacuum = true;
                        control = oscar;
                        oscar = record[verify](config, sequence, vacuum, control, source);
                        golf = _closure1_slot0;
                        oscar = 55;
                        oscar = options[oscar];
                        options = golf.bind(mike)(oscar);
                        golf = options.getSentConfettiPotionEmoji;
                        oscar = zulu.body;
                        oscar = golf.bind(options)(oscar);
                        yankee = null;
                        if(!(yankee != oscar)) { _fun66711_ip = 1212; continue _fun66711 }
 1087:
                        foxtrot = _closure1_slot0;
                        backup = _closure1_slot2;
                        golf = 64;
                        golf = backup[golf];
                        verify = foxtrot.bind(mike)(golf);
                        options = verify.fetchConsumableEntitlement;
                        golf = 65;
                        golf = backup[golf];
                        golf = foxtrot.bind(mike)(golf);
                        golf = golf.CONFETTI_POTION_SKU_ID;
                        golf = options.bind(verify)(golf);
                        golf = 66;
                        golf = backup[golf];
                        verify = foxtrot.bind(mike)(golf);
                        options = verify.triggerConfettiByEmoji;
                        golf = {};
                        kilo = oscar.name;
                        golf['name'] = kilo;
                        oscar = oscar.id;
                        golf['id'] = oscar;
                        oscar = 67;
                        oscar = backup[oscar];
                        oscar = foxtrot.bind(mike)(oscar);
                        oscar = oscar.ConfettiTriggerAnalyticsLocation;
                        control = oscar.MessageSent;
                        record = verify;
                        config = golf;
                        sequence = undefined;
                        vacuum = true;
                        oscar = record[options](config, sequence, vacuum, control, source);
 1212:
                        golf = _closure1_slot1;
                        options = _closure1_slot2;
                        oscar = 49;
                        oscar = options[oscar];
                        options = golf.bind(mike)(oscar);
                        golf = options.cast;
                        oscar = _closure2_slot0;
                        options = golf.bind(options)(oscar);
                        golf = _closure1_slot8;
                        oscar = golf.getRequest;
                        oscar = oscar.bind(golf)(options);
                        if(!(yankee != oscar)) { _fun66711_ip = 1351; continue _fun66711 }
 1266:
                        foxtrot = oscar.guildId;
                        verify = oscar.userId;
                        offset = oscar.applicationStatus;
                        golf = _closure1_slot0;
                        options = _closure1_slot2;
                        oscar = 68;
                        oscar = options[oscar];
                        options = golf.bind(mike)(oscar);
                        golf = options.trackMemberApplicationInterviewMessage;
                        oscar = {};
                        oscar['guildId'] = foxtrot;
                        foxtrot = _closure2_slot0;
                        oscar['channelId'] = foxtrot;
                        foxtrot = zulu.body;
                        foxtrot = foxtrot.id;
                        oscar['messageId'] = foxtrot;
                        oscar['joinRequestStatus'] = offset;
                        oscar['joinRequestUserId'] = verify;
                        oscar = golf.bind(options)(oscar);
 1351:
                        options = _closure1_slot10;
                        golf = options.recordMessageSendApiResponse;
                        oscar = _closure2_slot13;
                        oscar = golf.bind(options)(oscar);
                        golf = _closure2_slot12;
                        oscar = _closure1_slot36;
                        oscar = oscar.REPLY;
                        if(!(golf === oscar)) { _fun66711_ip = 1834; continue _fun66711 }
 1393:
                        oscar = zulu.body;
                        sizing = oscar.id;
                        offset = _closure2_slot0;
                        oscar = _closure2_slot8;
                        oscar = yankee == oscar;
                        options = undefined;
                        if(oscar) { _fun66711_ip = 1430; continue _fun66711 }
 1420:
                        oscar = _closure2_slot8;
                        options = oscar.message_id;
 1430:
                        golf = _closure1_slot13;
                        oscar = golf.getPendingReplyActionSource;
                        golf = oscar.bind(golf)(offset);
                        oscar = 'message_swipe';
                        if(!(oscar !== golf)) { _fun66711_ip = 1662; continue _fun66711 }
 1460:
                        oscar = 'message_shortcut';
                        if(!(oscar === golf)) { _fun66711_ip = 1834; continue _fun66711 }
 1473:
                        golf = _closure1_slot19;
                        oscar = golf.getChannel;
                        output = oscar.bind(golf)(offset);
                        golf = _closure1_slot1;
                        verify = _closure1_slot2;
                        oscar = 36;
                        oscar = verify[oscar];
                        foxtrot = golf.bind(mike)(oscar);
                        verify = foxtrot.track;
                        oscar = _closure1_slot28;
                        golf = oscar.MESSAGE_SHORTCUT_ACTION_SENT;
                        oscar = {};
                        oscar['message_id'] = sizing;
                        oscar['channel_id'] = offset;
                        kilo = yankee == output;
                        backup = undefined;
                        if(kilo) { _fun66711_ip = 1547; continue _fun66711 }
 1542:
                        backup = output.guild_id;
 1547:
                        oscar['guild_id'] = backup;
                        oscar['original_message_id'] = options;
                        backup = 'reply';
                        oscar['action'] = backup;
                        kilo = _closure1_slot0;
                        backup = _closure1_slot2;
                        result = 29;
                        backup = backup[result];
                        echo = kilo.bind(mike)(backup);
                        kilo = echo.collectGuildAnalyticsMetadata;
                        update = yankee == output;
                        backup = undefined;
                        if(update) { _fun66711_ip = 1604; continue _fun66711 }
 1599:
                        backup = output.guild_id;
 1604:
                        sequence = kilo.bind(echo)(backup);
                        config = oscar;
                        backup = copyDataProperties(config, sequence);
                        kilo = _closure1_slot0;
                        backup = _closure1_slot2;
                        backup = backup[result];
                        kilo = kilo.bind(mike)(backup);
                        backup = kilo.collectChannelAnalyticsMetadata;
                        sequence = backup.bind(kilo)(output);
                        config = oscar;
                        backup = copyDataProperties(config, sequence);
                        oscar = verify.bind(foxtrot)(golf, oscar);
                        _fun66711_ip = 1834; continue _fun66711;
 1662:
                        oscar = yankee != options;
                        kilo = null;
                        if(!oscar) { _fun66711_ip = 1687; continue _fun66711 }
 1671:
                        golf = _closure1_slot22;
                        oscar = golf.getMessage;
                        kilo = oscar.bind(golf)(offset, options);
 1687:
                        golf = _closure1_slot19;
                        oscar = golf.getChannel;
                        backup = oscar.bind(golf)(offset);
                        golf = _closure1_slot26;
                        oscar = golf.getCurrentUser;
                        foxtrot = oscar.bind(golf)();
                        golf = _closure1_slot1;
                        options = _closure1_slot2;
                        oscar = 36;
                        oscar = options[oscar];
                        verify = golf.bind(mike)(oscar);
                        options = verify.track;
                        oscar = _closure1_slot28;
                        golf = oscar.MESSAGE_SWIPE_ACTION_SENT;
                        oscar = {};
                        oscar['message_id'] = sizing;
                        oscar['channel_id'] = offset;
                        sizing = yankee == backup;
                        offset = undefined;
                        if(sizing) { _fun66711_ip = 1774; continue _fun66711 }
 1769:
                        offset = backup.guild_id;
 1774:
                        oscar['guild_id'] = offset;
                        offset = 'reply';
                        oscar['swipe_action'] = offset;
                        offset = yankee != foxtrot;
                        if(!offset) { _fun66711_ip = 1823; continue _fun66711 }
 1794:
                        backup = foxtrot.id;
                        sizing = yankee == kilo;
                        foxtrot = undefined;
                        if(sizing) { _fun66711_ip = 1819; continue _fun66711 }
 1808:
                        kilo = kilo.author;
                        foxtrot = kilo.id;
 1819:
                        offset = backup === foxtrot;
 1823:
                        oscar['is_own_message'] = offset;
                        oscar = options.bind(verify)(golf, oscar);
 1834:
                        options = _closure1_slot1;
                        verify = _closure1_slot2;
                        golf = 39;
                        oscar = verify[golf];
                        backup = options.bind(mike)(oscar);
                        foxtrot = backup.dispatch;
                        offset = {};
                        oscar = 'SLOWMODE_RESET_COOLDOWN';
                        offset['type'] = oscar;
                        oscar = _closure1_slot25;
                        oscar = oscar.SendMessage;
                        offset['slowmodeType'] = oscar;
                        oscar = _closure2_slot0;
                        offset['channelId'] = oscar;
                        offset = foxtrot.bind(backup)(offset);
                        offset = verify[golf];
                        backup = options.bind(mike)(offset);
                        foxtrot = backup.dispatch;
                        offset = {};
                        kilo = 'EMOJI_TRACK_USAGE';
                        offset['type'] = kilo;
                        kilo = _closure2_slot4;
                        offset['emojiUsed'] = kilo;
                        offset = foxtrot.bind(backup)(offset);
                        offset = verify[golf];
                        backup = options.bind(mike)(offset);
                        foxtrot = backup.dispatch;
                        offset = {};
                        kilo = 'STICKER_TRACK_USAGE';
                        offset['type'] = kilo;
                        kilo = _closure2_slot7;
                        offset['stickerIds'] = kilo;
                        offset = foxtrot.bind(backup)(offset);
                        golf = verify[golf];
                        verify = options.bind(mike)(golf);
                        options = verify.dispatch;
                        golf = {};
                        offset = 'LOCAL_MESSAGE_CREATE';
                        golf['type'] = offset;
                        offset = {};
                        offset['channel_id'] = oscar;
                        foxtrot = _closure1_slot26;
                        romeo = foxtrot.getCurrentUser;
                        romeo = romeo.bind(foxtrot)();
                        offset['author'] = romeo;
                        golf['message'] = offset;
                        golf = options.bind(verify)(golf);
                        golf = {};
                        options = _closure2_slot3;
                        golf['content'] = options;
                        golf['channelId'] = oscar;
                        oscar = zulu.body;
                        oscar = oscar.id;
                        golf['messageId'] = oscar;
                        oscar = _closure2_slot5;
                        options = yankee != oscar;
                        verify = 'chat_input';
                        oscar = verify;
                        if(!options) { _fun66711_ip = 2090; continue _fun66711 }
 2086:
                        oscar = _closure2_slot5;
 2090:
                        golf['location'] = oscar;
                        oscar = _closure2_slot6;
                        golf['suggested'] = oscar;
                        oscar = function(argFoo) { // Original name: trackCodedLinks
                            _fun66712: for(var _fun66712_ip = 0; ; ) switch(_fun66712_ip) {
 0:
                                zulu = argFoo;
                                tango = zulu.content;
                                entity = zulu.channelId;
                                var _closure5_slot0 = entity;
                                entity = zulu.messageId;
                                var _closure5_slot1 = entity;
                                entity = zulu.location;
                                var _closure5_slot2 = entity;
                                report = zulu.suggested;
                                entity = undefined;
                                if(!(report === entity)) { _fun66712_ip = 51; continue _fun66712 }
 49:
                                report = null;
 51:
                                var _closure5_slot3 = report;
                                zulu = zulu.overrideProperties;
                                if(!(zulu === entity)) { _fun66712_ip = 67; continue _fun66712 }
 65:
                                zulu = {};
 67:
                                var _closure5_slot4 = zulu;
                                report = _closure1_slot1;
                                oscar = _closure1_slot2;
                                zulu = 27;
                                zulu = oscar[zulu];
                                zulu = report.bind(entity)(zulu);
                                tango = zulu.bind(entity)(tango);
                                zulu = tango.forEach;
                                mike = function(argFoo) {
                                    _fun66713: for(var _fun66713_ip = 0; ; ) switch(_fun66713_ip) {
 0:
                                        entity = argFoo;
                                        golf = entity.type;
                                        tango = entity.code;
                                        report = _closure1_slot0;
                                        entity = _closure1_slot2;
                                        oscar = 28;
                                        zulu = entity[oscar];
                                        entity = undefined;
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.INVITE;
                                        if(!(golf !== zulu)) { _fun66713_ip = 1041; continue _fun66713 }
 57:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.TEMPLATE;
                                        if(!(golf !== zulu)) { _fun66713_ip = 917; continue _fun66713 }
 93:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.BUILD_OVERRIDE;
                                        if(!(golf !== zulu)) { _fun66713_ip = 1102; continue _fun66713 }
 129:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.MANUAL_BUILD_OVERRIDE;
                                        if(!(golf !== zulu)) { _fun66713_ip = 1102; continue _fun66713 }
 165:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.EVENT;
                                        if(!(golf !== zulu)) { _fun66713_ip = 1102; continue _fun66713 }
 201:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.CHANNEL_LINK;
                                        if(!(golf !== zulu)) { _fun66713_ip = 1102; continue _fun66713 }
 237:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.APP_DIRECTORY_PROFILE;
                                        if(!(golf !== zulu)) { _fun66713_ip = 881; continue _fun66713 }
 273:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.APP_DIRECTORY_STOREFRONT;
                                        if(!(golf !== zulu)) { _fun66713_ip = 838; continue _fun66713 }
 309:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.APP_DIRECTORY_STOREFRONT_SKU;
                                        if(!(golf !== zulu)) { _fun66713_ip = 750; continue _fun66713 }
 345:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.ACTIVITY_BOOKMARK;
                                        if(!(golf !== zulu)) { _fun66713_ip = 1102; continue _fun66713 }
 381:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.EMBEDDED_ACTIVITY_INVITE;
                                        if(!(golf !== zulu)) { _fun66713_ip = 1102; continue _fun66713 }
 417:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.GUILD_PRODUCT;
                                        if(!(golf !== zulu)) { _fun66713_ip = 1102; continue _fun66713 }
 453:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.SERVER_SHOP;
                                        if(!(golf !== zulu)) { _fun66713_ip = 1102; continue _fun66713 }
 489:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.QUESTS_EMBED;
                                        if(!(golf !== zulu)) { _fun66713_ip = 685; continue _fun66713 }
 525:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.APP_OAUTH2_LINK;
                                        if(!(golf !== zulu)) { _fun66713_ip = 631; continue _fun66713 }
 558:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        zulu = zulu[oscar];
                                        zulu = report.bind(entity)(zulu);
                                        zulu = zulu.CodedLinkType;
                                        zulu = zulu.COLLECTIBLES_SHOP;
                                        if(!(golf !== zulu)) { _fun66713_ip = 1102; continue _fun66713 }
 594:
                                        zulu = global;
                                        report = zulu.Error;
                                        zulu = zulu.HermesInternal;
                                        oscar = zulu.concat;
                                        zulu = 'Unknown coded link type: ';
                                        zulu = oscar.bind(zulu)(golf);
                                        zulu = report.bind(entity)(zulu);
                                        throw zulu;
 631:
                                        report = _closure1_slot1;
                                        oscar = _closure1_slot2;
                                        zulu = 29;
                                        zulu = oscar[zulu];
                                        golf = report.bind(entity)(zulu);
                                        oscar = golf.trackWithMetadata;
                                        zulu = _closure1_slot28;
                                        report = zulu.APP_OAUTH2_LINK_EMBED_URL_SENT;
                                        zulu = {};
                                        zulu['application_id'] = tango;
                                        zulu = oscar.bind(golf)(report, zulu);
                                        _fun66713_ip = 1102; continue _fun66713;
 685:
                                        report = _closure1_slot0;
                                        oscar = _closure1_slot2;
                                        zulu = 32;
                                        zulu = oscar[zulu];
                                        oscar = report.bind(entity)(zulu);
                                        report = oscar.trackQuestEvent;
                                        zulu = {};
                                        zulu['questId'] = tango;
                                        golf = _closure1_slot28;
                                        golf = golf.QUEST_LINK_SHARED;
                                        zulu['event'] = golf;
                                        golf = true;
                                        zulu['trackGuildAndChannelMetadata'] = golf;
                                        zulu = report.bind(oscar)(zulu);
                                        _fun66713_ip = 1102; continue _fun66713;
 750:
                                        report = _closure1_slot0;
                                        oscar = _closure1_slot2;
                                        zulu = 31;
                                        zulu = oscar[zulu];
                                        report = report.bind(entity)(zulu);
                                        zulu = report.parseStorefrontSkuCodedLink;
                                        zulu = zulu.bind(report)(tango);
                                        report = null;
                                        if(!(report != zulu)) { _fun66713_ip = 1102; continue _fun66713 }
 790:
                                        oscar = _closure1_slot0;
                                        golf = _closure1_slot2;
                                        report = 30;
                                        report = golf[report];
                                        golf = oscar.bind(entity)(report);
                                        oscar = golf.trackAppDirectoryProfileEmbed;
                                        report = zulu.applicationId;
                                        zulu = 'storefront_sku';
                                        zulu = oscar.bind(golf)(report, zulu);
                                        _fun66713_ip = 1102; continue _fun66713;
 838:
                                        report = _closure1_slot0;
                                        oscar = _closure1_slot2;
                                        zulu = 30;
                                        zulu = oscar[zulu];
                                        oscar = report.bind(entity)(zulu);
                                        report = oscar.trackAppDirectoryProfileEmbed;
                                        zulu = 'storefront';
                                        zulu = report.bind(oscar)(tango, zulu);
                                        _fun66713_ip = 1102; continue _fun66713;
 881:
                                        report = _closure1_slot0;
                                        oscar = _closure1_slot2;
                                        zulu = 30;
                                        zulu = oscar[zulu];
                                        report = report.bind(entity)(zulu);
                                        zulu = report.trackAppDirectoryProfileEmbed;
                                        zulu = zulu.bind(report)(tango);
                                        _fun66713_ip = 1102; continue _fun66713;
 917:
                                        report = _closure1_slot9;
                                        zulu = report.getGuildTemplate;
                                        options = zulu.bind(report)(tango);
                                        zulu = null;
                                        if(!(zulu != options)) { _fun66713_ip = 1039; continue _fun66713 }
 938:
                                        report = options.state;
                                        zulu = _closure1_slot45;
                                        zulu = zulu.RESOLVING;
                                        if(!(report !== zulu)) { _fun66713_ip = 1039; continue _fun66713 }
 957:
                                        report = _closure1_slot1;
                                        oscar = _closure1_slot2;
                                        zulu = 29;
                                        zulu = oscar[zulu];
                                        golf = report.bind(entity)(zulu);
                                        oscar = golf.trackWithMetadata;
                                        zulu = _closure1_slot28;
                                        report = zulu.GUILD_TEMPLATE_LINK_SENT;
                                        zulu = {};
                                        zulu['guild_template_code'] = tango;
                                        verify = options.name;
                                        zulu['guild_template_name'] = verify;
                                        verify = options.description;
                                        zulu['guild_template_description'] = verify;
                                        options = options.sourceGuildId;
                                        zulu['guild_template_guild_id'] = options;
                                        zulu = oscar.bind(golf)(report, zulu);
                                        _fun66713_ip = 1102; continue _fun66713;
 1039:
                                        return entity;
 1041:
                                        zulu = _closure1_slot52;
                                        mike = {};
                                        mike['inviteKey'] = tango;
                                        report = _closure5_slot0;
                                        mike['channelId'] = report;
                                        report = _closure5_slot1;
                                        mike['messageId'] = report;
                                        report = _closure5_slot2;
                                        mike['location'] = report;
                                        report = _closure5_slot3;
                                        mike['suggested'] = report;
                                        tango = _closure5_slot4;
                                        mike['overrideProperties'] = tango;
                                        mike = zulu.bind(entity)(mike);
 1102:
                                        return entity;
                                    }
                                };
                                mike = zulu.bind(tango)(mike);
                                return entity;
                            }
                        };
                        oscar = oscar.bind(mike)(golf);
                        options = _closure2_slot3;
                        golf = _closure2_slot0;
                        oscar = zulu.body;
                        oscar = oscar.id;
                        offset = _closure2_slot5;
                        offset = yankee != offset;
                        if(!offset) { _fun66711_ip = 2148; continue _fun66711 }
 2144:
                        verify = _closure2_slot5;
 2148:
                        tango = _closure2_slot2;
                        tango = tango.isGiftLinkSentOnBehalfOfUser;
                        tango = !tango;
                        report = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: trackGiftCodes
                            entity = argBar;
                            var _closure5_slot0 = entity;
                            entity = argBaz;
                            var _closure5_slot1 = entity;
                            entity = argCorge;
                            var _closure5_slot2 = entity;
                            entity = argGrault;
                            var _closure5_slot3 = entity;
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            entity = 35;
                            zulu = zulu[entity];
                            entity = undefined;
                            report = tango.bind(entity)(zulu);
                            tango = report.findGiftCodes;
                            zulu = argFoo;
                            tango = tango.bind(report)(zulu);
                            zulu = tango.forEach;
                            mike = function(argFoo) {
                                _fun66715: for(var _fun66715_ip = 0; ; ) switch(_fun66715_ip) {
 0:
                                    tango = _closure1_slot19;
                                    zulu = tango.getChannel;
                                    mike = _closure5_slot0;
                                    oscar = zulu.bind(tango)(mike);
                                    mike = null;
                                    if(!(mike != oscar)) { _fun66715_ip = 145; continue _fun66715 }
 30:
                                    tango = _closure1_slot1;
                                    zulu = _closure1_slot2;
                                    mike = 29;
                                    zulu = zulu[mike];
                                    mike = undefined;
                                    tango = tango.bind(mike)(zulu);
                                    zulu = tango.trackWithMetadata;
                                    entity = _closure1_slot28;
                                    mike = entity.GIFT_CODE_SENT;
                                    entity = {};
                                    golf = _closure5_slot2;
                                    entity['location'] = golf;
                                    golf = argFoo;
                                    entity['gift_code'] = golf;
                                    golf = oscar.getGuildId;
                                    golf = golf.bind(oscar)();
                                    entity['guild_id'] = golf;
                                    golf = oscar.id;
                                    entity['channel_id'] = golf;
                                    oscar = oscar.type;
                                    entity['channel_type'] = oscar;
                                    oscar = _closure5_slot1;
                                    entity['message_id'] = oscar;
                                    report = _closure5_slot3;
                                    entity['automatic_send'] = report;
                                    entity = zulu.bind(tango)(mike, entity);
 145:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        };
                        source = !tango;
                        record = undefined;
                        config = options;
                        sequence = golf;
                        vacuum = oscar;
                        control = verify;
                        tango = record[report](config, sequence, vacuum, control, source, update);
                        entity = _closure3_slot0;
                        entity = entity.bind(mike)(zulu);
 2198:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = tango.bind(report)(zulu, mike, oscar);
                return entity;
            };
            sierra = report;
            tango = new sierra[oscar](status, target);
            tango = tango instanceof Object ? tango : report;
            return tango;
 1203:
            report = _closure1_slot47;
            tango = report.info;
            mike = 'Converting channel to a private channel';
            mike = tango.bind(report)(mike);
            mike = zulu.then;
            entity = function(argFoo) {
                tango = _closure1_slot47;
                zulu = tango.info;
                mike = 'Finished converting channel to a private channel';
                mike = zulu.bind(tango)(mike);
                report = _closure1_slot51;
                tango = report._sendMessage;
                zulu = _closure2_slot1;
                mike = _closure2_slot2;
                entity = argFoo;
                entity = tango.bind(report)(entity, zulu, mike);
                entity = undefined;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['_sendMessage'] = options;
    options = function(argFoo, argBar, argBaz, argCorge) { // Original name: startEditMessage
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 39;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MESSAGE_START_EDIT';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['messageId'] = report;
        report = argBaz;
        mike['content'] = report;
        report = argCorge;
        mike['source'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['startEditMessage'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: updateEditMessage
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 39;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MESSAGE_UPDATE_EDIT';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['textValue'] = report;
        report = argBaz;
        mike['richValue'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateEditMessage'] = options;
    options = function(argFoo, argBar) { // Original name: endEditMessage
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 39;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MESSAGE_END_EDIT';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['response'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['endEditMessage'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: editMessage
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        mike = mike.content;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun66722: for(var _fun66722_ip = 0; ; ) switch(_fun66722_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun66722_ip = 489; continue _fun66722 }
 12:
                    zulu = undefined;
                    var _closure4_slot0 = zulu;
                    yankee = _closure2_slot1;
                    golf = _closure2_slot0;
                    report = _closure1_slot20;
                    mike = report.getEditActionSource;
                    report = mike.bind(report)(golf);
                    mike = 'message_swipe';
                    if(!(mike === report)) { _fun66722_ip = 161; continue _fun66722 }
 59:
                    report = _closure1_slot19;
                    mike = report.getChannel;
                    romeo = mike.bind(report)(golf);
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    mike = 36;
                    mike = options[mike];
                    verify = report.bind(zulu)(mike);
                    options = verify.track;
                    mike = _closure1_slot28;
                    report = mike.MESSAGE_SWIPE_ACTION_SENT;
                    mike = {};
                    mike['message_id'] = yankee;
                    mike['channel_id'] = golf;
                    yankee = null;
                    foxtrot = yankee == romeo;
                    yankee = undefined;
                    if(foxtrot) { _fun66722_ip = 135; continue _fun66722 }
 130:
                    yankee = romeo.guild_id;
 135:
                    mike['guild_id'] = yankee;
                    yankee = 'edit';
                    mike['swipe_action'] = yankee;
                    yankee = true;
                    mike['is_own_message'] = yankee;
                    mike = options.bind(verify)(report, mike);
 161:
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    mike = 72;
                    mike = options[mike];
                    report = report.bind(zulu)(mike);
                    mike = report.unarchiveThreadIfNecessary;
                    mike = mike.bind(report)(golf);
                    SaveGenerator(address=196);
 194:
                    return mike;
 196:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun66722_ip = 486; continue _fun66722 }
 205:
                    verify = _closure2_slot0;
                    golf = _closure2_slot1;
                    options = _closure1_slot22;
                    report = options.getMessage;
                    yankee = report.bind(options)(verify, golf);
                    report = null;
                    options = report != yankee;
                    report = undefined;
                    if(!options) { _fun66722_ip = 382; continue _fun66722 }
 243:
                    romeo = yankee.type;
                    options = _closure1_slot36;
                    options = options.REPLY;
                    report = undefined;
                    if(!(romeo === options)) { _fun66722_ip = 382; continue _fun66722 }
 264:
                    foxtrot = _closure1_slot14;
                    romeo = foxtrot.getMessageByReference;
                    options = yankee.messageReference;
                    options = romeo.bind(foxtrot)(options);
                    foxtrot = options.state;
                    romeo = _closure1_slot15;
                    romeo = romeo.LOADED;
                    report = undefined;
                    if(!(foxtrot === romeo)) { _fun66722_ip = 382; continue _fun66722 }
 306:
                    romeo = yankee.mentions;
                    yankee = romeo.includes;
                    options = options.message;
                    options = options.author;
                    options = options.id;
                    options = yankee.bind(romeo)(options);
                    report = undefined;
                    if(options) { _fun66722_ip = 382; continue _fun66722 }
 343:
                    options = {};
                    yankee = global;
                    foxtrot = yankee.Object;
                    romeo = foxtrot.values;
                    yankee = _closure1_slot37;
                    yankee = romeo.bind(foxtrot)(yankee);
                    options['parse'] = yankee;
                    yankee = false;
                    options['replied_user'] = yankee;
                    report = options;
 382:
                    options = {};
                    options['channelId'] = verify;
                    options['messageId'] = golf;
                    oscar = _closure2_slot2;
                    options['content'] = oscar;
                    options['allowed_mentions'] = report;
                    _closure4_slot0 = options;
                    oscar = _closure1_slot1;
                    yankee = _closure1_slot2;
                    verify = 63;
                    report = yankee[verify];
                    golf = oscar.bind(zulu)(report);
                    oscar = golf.enqueue;
                    report = {};
                    offset = _closure1_slot0;
                    verify = yankee[verify];
                    verify = offset.bind(zulu)(verify);
                    verify = verify.MessageDataType;
                    verify = verify.EDIT;
                    report['type'] = verify;
                    report['message'] = options;
                    tango = function(argFoo) {
                        _fun66723: for(var _fun66723_ip = 0; ; ) switch(_fun66723_ip) {
 0:
                            options = argFoo;
                            entity = options.hasErr;
                            verify = !entity;
                            if(!verify) { _fun66723_ip = 66; continue _fun66723 }
 15:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 70;
                            mike = mike[entity];
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            zulu = entity.AUTOMOD_ERROR_CODES;
                            mike = zulu.has;
                            entity = options.body;
                            entity = entity.code;
                            verify = mike.bind(zulu)(entity);
 66:
                            if(!verify) { _fun66723_ip = 202; continue _fun66723 }
 72:
                            tango = {};
                            oscar = _closure1_slot0;
                            report = _closure1_slot2;
                            mike = 63;
                            mike = report[mike];
                            zulu = undefined;
                            mike = oscar.bind(zulu)(mike);
                            mike = mike.MessageDataType;
                            mike = mike.EDIT;
                            tango['type'] = mike;
                            mike = _closure4_slot0;
                            tango['message'] = mike;
                            mike = _closure1_slot1;
                            entity = 39;
                            entity = report[entity];
                            zulu = mike.bind(zulu)(entity);
                            mike = zulu.dispatch;
                            entity = {};
                            report = 'MESSAGE_EDIT_FAILED_AUTOMOD';
                            entity['type'] = report;
                            entity['messageData'] = tango;
                            tango = {};
                            report = options.body;
                            report = report.code;
                            tango['code'] = report;
                            report = options.body;
                            report = report.message;
                            tango['message'] = report;
                            entity['errorResponseBody'] = tango;
                            entity = mike.bind(zulu)(entity);
 202:
                            offset = options.hasErr;
                            yankee = _closure1_slot0;
                            romeo = _closure1_slot2;
                            entity = 73;
                            zulu = romeo[entity];
                            entity = undefined;
                            zulu = yankee.bind(entity)(zulu);
                            report = zulu.AccessibilityAnnouncer;
                            tango = report.announce;
                            zulu = 37;
                            oscar = romeo[zulu];
                            oscar = yankee.bind(entity)(oscar);
                            golf = oscar.intl;
                            oscar = golf.string;
                            zulu = romeo[zulu];
                            zulu = yankee.bind(entity)(zulu);
                            zulu = zulu.t;
                            if(offset) { _fun66723_ip = 323; continue _fun66723 }
 284:
                            if(verify) { _fun66723_ip = 305; continue _fun66723 }
 287:
                            verify = zulu.0x1HBA;
                            verify = oscar.bind(golf)(verify);
                            verify = tango.bind(report)(verify);
                            _fun66723_ip = 339; continue _fun66723;
 305:
                            verify = zulu.Hym4i4;
                            verify = oscar.bind(golf)(verify);
                            verify = tango.bind(report)(verify);
                            _fun66723_ip = 339; continue _fun66723;
 323:
                            zulu = zulu.Atp7FB;
                            zulu = oscar.bind(golf)(zulu);
                            zulu = tango.bind(report)(zulu);
 339:
                            golf = _closure1_slot51;
                            oscar = golf.endEditMessage;
                            tango = _closure2_slot0;
                            verify = options.hasErr;
                            zulu = undefined;
                            if(verify) { _fun66723_ip = 370; continue _fun66723 }
 367:
                            zulu = options;
 370:
                            zulu = oscar.bind(golf)(tango, zulu);
                            tango = _closure1_slot51;
                            zulu = tango.focusMessage;
                            mike = {};
                            oscar = _closure2_slot0;
                            mike['channelId'] = oscar;
                            report = _closure2_slot1;
                            mike['messageId'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    tango = oscar.bind(golf)(report, tango);
                    return zulu;
 486:
                    return mike;
 489:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['editMessage'] = options;
    options = function(argFoo, argBar) { // Original name: suppressEmbeds
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun66726: for(var _fun66726_ip = 0; ; ) switch(_fun66726_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun66726_ip = 168; continue _fun66726 }
 10:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 72;
                    mike = zulu[mike];
                    zulu = undefined;
                    report = tango.bind(zulu)(mike);
                    tango = report.unarchiveThreadIfNecessary;
                    mike = _closure2_slot0;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=57);
 55:
                    return mike;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun66726_ip = 165; continue _fun66726 }
 63:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 44;
                    tango = oscar[tango];
                    tango = report.bind(zulu)(tango);
                    oscar = tango.HTTP;
                    report = oscar.patch;
                    tango = {};
                    yankee = _closure1_slot29;
                    offset = yankee.MESSAGE;
                    verify = _closure2_slot0;
                    golf = _closure2_slot1;
                    golf = offset.bind(yankee)(verify, golf);
                    tango['url'] = golf;
                    golf = {};
                    options = _closure1_slot34;
                    options = options.SUPPRESS_EMBEDS;
                    golf['flags'] = options;
                    tango['body'] = golf;
                    golf = true;
                    tango['oldFormErrors'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 165:
                    return mike;
 168:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['suppressEmbeds'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: patchMessageAttachments
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun66729: for(var _fun66729_ip = 0; ; ) switch(_fun66729_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun66729_ip = 163; continue _fun66729 }
 10:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 72;
                    mike = zulu[mike];
                    zulu = undefined;
                    report = tango.bind(zulu)(mike);
                    tango = report.unarchiveThreadIfNecessary;
                    mike = _closure2_slot0;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=57);
 55:
                    return mike;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun66729_ip = 160; continue _fun66729 }
 63:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 44;
                    tango = oscar[tango];
                    tango = report.bind(zulu)(tango);
                    oscar = tango.HTTP;
                    report = oscar.patch;
                    tango = {};
                    yankee = _closure1_slot29;
                    offset = yankee.MESSAGE;
                    verify = _closure2_slot0;
                    golf = _closure2_slot1;
                    golf = offset.bind(yankee)(verify, golf);
                    tango['url'] = golf;
                    golf = {};
                    options = _closure2_slot2;
                    golf['attachments'] = options;
                    tango['body'] = golf;
                    golf = true;
                    tango['oldFormErrors'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 160:
                    return mike;
 163:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['patchMessageAttachments'] = options;
    options = function(argFoo, argBar) { // Original name: deleteMessage
        _fun66730: for(var _fun66730_ip = 0; ; ) switch(_fun66730_ip) {
 0:
            zulu = arguments[2];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun66730_ip = 27; continue _fun66730 }
 25:
            zulu = false;
 27:
            var _closure2_slot2 = zulu;
            zulu = _closure1_slot4;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun66732: for(var _fun66732_ip = 0; ; ) switch(_fun66732_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun66732_ip = 282; continue _fun66732 }
 12:
                        tango = function() { // Original name: dispatchDelete
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 39;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            report = 'MESSAGE_DELETE';
                            mike['type'] = report;
                            oscar = _closure2_slot1;
                            mike['id'] = oscar;
                            report = _closure2_slot0;
                            mike['channelId'] = report;
                            tango = zulu.bind(tango)(mike);
                            zulu = tango.then;
                            mike = function() {
                                golf = _closure1_slot0;
                                options = _closure1_slot2;
                                entity = 73;
                                mike = options[entity];
                                entity = undefined;
                                mike = golf.bind(entity)(mike);
                                tango = mike.AccessibilityAnnouncer;
                                zulu = tango.announce;
                                mike = 37;
                                report = options[mike];
                                report = golf.bind(entity)(report);
                                oscar = report.intl;
                                report = oscar.string;
                                mike = options[mike];
                                mike = golf.bind(entity)(mike);
                                mike = mike.t;
                                mike = mike.RYMs7u;
                                mike = report.bind(oscar)(mike);
                                mike = zulu.bind(tango)(mike);
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        };
                        var _closure4_slot0 = tango;
                        zulu = _closure2_slot2;
                        if(zulu) { _fun66732_ip = 184; continue _fun66732 }
 36:
                        oscar = _closure1_slot1;
                        golf = _closure1_slot2;
                        zulu = 72;
                        zulu = golf[zulu];
                        options = undefined;
                        golf = oscar.bind(options)(zulu);
                        oscar = golf.unarchiveThreadIfNecessary;
                        zulu = _closure2_slot0;
                        zulu = oscar.bind(golf)(zulu);
                        SaveGenerator(address=80);
 78:
                        return zulu;
 80:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(oscar) { _fun66732_ip = 181; continue _fun66732 }
 86:
                        golf = _closure1_slot0;
                        offset = _closure1_slot2;
                        oscar = 44;
                        oscar = offset[oscar];
                        oscar = golf.bind(options)(oscar);
                        options = oscar.HTTP;
                        golf = options.del;
                        oscar = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        romeo = _closure1_slot29;
                        yankee = romeo.MESSAGE;
                        offset = _closure2_slot0;
                        verify = _closure2_slot1;
                        verify = yankee.bind(romeo)(offset, verify);
                        oscar['url'] = verify;
                        golf = golf.bind(options)(oscar);
                        oscar = golf.then;
                        report = function() {
                            mike = _closure4_slot0;
                            entity = undefined;
                            mike = mike.bind(entity)();
                            return entity;
                        };
                        report = oscar.bind(golf)(report);
                        _fun66732_ip = 190; continue _fun66732;
 181:
                        return zulu;
 184:
                        zulu = undefined;
                        zulu = tango.bind(zulu)();
 190:
                        oscar = _closure1_slot22;
                        report = oscar.getMessage;
                        tango = _closure2_slot0;
                        mike = _closure2_slot1;
                        tango = report.bind(oscar)(tango, mike);
                        mike = null;
                        oscar = mike == tango;
                        mike = undefined;
                        report = undefined;
                        if(oscar) { _fun66732_ip = 235; continue _fun66732 }
 230:
                        report = tango.type;
 235:
                        tango = _closure1_slot36;
                        tango = tango.GUILD_INVITE_REMINDER;
                        if(!(report === tango)) { _fun66732_ip = 279; continue _fun66732 }
 249:
                        tango = _closure1_slot0;
                        report = _closure1_slot2;
                        zulu = 74;
                        zulu = report[zulu];
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.trackGuildInviteNotificationDismissed;
                        zulu = zulu.bind(tango)();
 279:
                        return mike;
 282:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    mike['deleteMessage'] = options;
    options = function(argFoo) { // Original name: dismissAutomatedMessage
        _fun66736: for(var _fun66736_ip = 0; ; ) switch(_fun66736_ip) {
 0:
            entity = argFoo;
            report = this;
            zulu = entity.loggingName;
            mike = null;
            if(!(mike != zulu)) { _fun66736_ip = 94; continue _fun66736 }
 18:
            oscar = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 29;
            tango = tango[zulu];
            zulu = undefined;
            oscar = oscar.bind(zulu)(tango);
            tango = oscar.trackWithMetadata;
            mike = _closure1_slot28;
            zulu = mike.AUTOMATED_MESSAGE_DISMISSED;
            mike = {};
            golf = entity.loggingName;
            mike['message_name'] = golf;
            golf = entity.author;
            golf = golf.username;
            mike['message_author'] = golf;
            mike = tango.bind(oscar)(zulu, mike);
 94:
            tango = report.deleteMessage;
            zulu = entity.channel_id;
            mike = entity.id;
            entity = true;
            entity = tango.bind(report)(zulu, mike, entity);
            entity = undefined;
            return entity;
        }
    };
    mike['dismissAutomatedMessage'] = options;
    options = function(argFoo, argBar) { // Original name: revealMessage
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 39;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MESSAGE_REVEAL';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['messageId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['revealMessage'] = options;
    options = function(argFoo, argBar) { // Original name: crosspostMessage
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 44;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {'url': null, 'oldFormErrors': true, 'failImmediatelyWhenRateLimited': true, 'rejectWithError': false};
        golf = _closure1_slot29;
        oscar = golf.MESSAGE_CROSSPOST;
        report = argFoo;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.catch;
        entity = function(argFoo) {
            _fun66739: for(var _fun66739_ip = 0; ; ) switch(_fun66739_ip) {
 0:
                report = argFoo;
                mike = report.status;
                entity = 429;
                if(!(entity !== mike)) { _fun66739_ip = 80; continue _fun66739 }
 18:
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 37;
                mike = golf[entity];
                tango = undefined;
                mike = oscar.bind(tango)(mike);
                zulu = mike.intl;
                mike = zulu.string;
                entity = golf[entity];
                entity = oscar.bind(tango)(entity);
                entity = entity.t;
                entity = entity.z2gyND;
                oscar = mike.bind(zulu)(entity);
                _fun66739_ip = 185; continue _fun66739;
 80:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                entity = 37;
                zulu = options[entity];
                mike = undefined;
                zulu = golf.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = options[entity];
                entity = golf.bind(mike)(entity);
                entity = entity.t;
                mike = entity.77cuq6;
                entity = {};
                golf = global;
                options = golf.Math;
                golf = options.floor;
                report = report.body;
                verify = report.retry_after;
                report = 60;
                report = verify / report;
                report = golf.bind(options)(report);
                entity['retryAfter'] = report;
                oscar = zulu.bind(tango)(mike, entity);
 185:
                zulu = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 75;
                mike = verify[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.show;
                mike = {};
                options = _closure1_slot0;
                report = 37;
                golf = verify[report];
                golf = options.bind(entity)(golf);
                yankee = golf.intl;
                offset = yankee.string;
                golf = verify[report];
                golf = options.bind(entity)(golf);
                golf = golf.t;
                golf = golf.Vd1hs7;
                golf = offset.bind(yankee)(golf);
                mike['title'] = golf;
                mike['body'] = oscar;
                oscar = verify[report];
                oscar = options.bind(entity)(oscar);
                golf = oscar.intl;
                oscar = golf.string;
                report = verify[report];
                report = options.bind(entity)(report);
                report = report.t;
                report = report.BddRzc;
                report = oscar.bind(golf)(report);
                mike['confirmText'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['crosspostMessage'] = options;
    mike['trackInvite'] = golf;
    var _closure1_slot51 = mike;
    tango = 76;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/MessageActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();