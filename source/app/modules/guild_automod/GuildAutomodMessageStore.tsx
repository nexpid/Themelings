// app/modules/guild_automod/GuildAutomodMessageStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun69068: for(var _fun69068_ip = 0; ; ) switch(_fun69068_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot19;
            entity = entity.bind(zulu)();
            if(entity) { _fun69068_ip = 51; continue _fun69068 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun69068_ip = 92; continue _fun69068;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun69068_ip = 71; continue _fun69068 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun69069: for(var _fun69069_ip = 0; ; ) switch(_fun69069_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun69069_ip = 76; continue _fun69069;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot19 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    verify = function(argFoo) { // Original name: handleMessageSendFailedAutomod
        entity = argFoo;
        golf = entity.messageData;
        oscar = entity.errorResponseBody;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 8;
        zulu = verify[entity];
        report = undefined;
        tango = options.bind(report)(zulu);
        zulu = tango.getFailedMessageId;
        tango = zulu.bind(tango)(golf);
        zulu = {};
        zulu['id'] = tango;
        entity = verify[entity];
        offset = options.bind(report)(entity);
        entity = offset.isMessageDataEdit;
        entity = entity.bind(offset)(golf);
        zulu['isBlockedEdit'] = entity;
        zulu['messageData'] = golf;
        entity = 9;
        entity = verify[entity];
        report = options.bind(report)(entity);
        entity = report.getAutomodErrorMessage;
        entity = entity.bind(report)(golf, oscar);
        zulu['errorMessage'] = entity;
        entity = _closure1_slot13;
        entity[tango] = zulu;
        entity = _closure1_slot14;
        entity = entity + 1;
        _closure1_slot14 = entity;
        entity = true;
        return entity;
    };
    offset = function(argFoo) { // Original name: handleLoadMessages
        _fun69073: for(var _fun69073_ip = 0; ; ) switch(_fun69073_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            golf = entity.messages;
            zulu = _closure1_slot8;
            entity = zulu.getChannel;
            report = entity.bind(zulu)(tango);
            entity = null;
            zulu = entity == report;
            tango = undefined;
            if(zulu) { _fun69073_ip = 52; continue _fun69073 }
 42:
            zulu = report.getGuildId;
            tango = zulu.bind(report)();
 52:
            if(!(entity != tango)) { _fun69073_ip = 119; continue _fun69073 }
 56:
            zulu = _closure1_slot16;
            oscar = zulu[tango];
            report = golf.reduce;
            zulu = function(argFoo, argBar) {
                _fun69074: for(var _fun69074_ip = 0; ; ) switch(_fun69074_ip) {
 0:
                    golf = argFoo;
                    zulu = argBar;
                    report = zulu.type;
                    entity = _closure1_slot12;
                    mike = entity.AUTO_MODERATION_ACTION;
                    entity = golf;
                    if(!(report === mike)) { _fun69074_ip = 137; continue _fun69074 }
 31:
                    offset = zulu.embeds;
                    report = null;
                    options = report == offset;
                    mike = undefined;
                    oscar = undefined;
                    if(options) { _fun69074_ip = 70; continue _fun69074 }
 50:
                    verify = offset.some;
                    options = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        entity = _closure1_slot11;
                        entity = entity.AUTO_MODERATION_NOTIFICATION;
                        entity = mike === entity;
                        return entity;
                    };
                    oscar = verify.bind(offset)(options);
 70:
                    entity = golf;
                    if(!oscar) { _fun69074_ip = 137; continue _fun69074 }
 76:
                    if(!(report != golf)) { _fun69074_ip = 129; continue _fun69074 }
 80:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 12;
                    tango = oscar[tango];
                    oscar = report.bind(mike)(tango);
                    report = oscar.compare;
                    tango = zulu.id;
                    report = report.bind(oscar)(golf, tango);
                    tango = -1;
                    mike = undefined;
                    if(!(tango === report)) { _fun69074_ip = 134; continue _fun69074 }
 129:
                    mike = zulu.id;
 134:
                    entity = mike;
 137:
                    return entity;
                }
            };
            zulu = report.bind(golf)(zulu, oscar);
            entity = entity != zulu;
            if(!entity) { _fun69073_ip = 104; continue _fun69073 }
 92:
            report = _closure1_slot16;
            report = report[tango];
            entity = report !== zulu;
 104:
            if(!entity) { _fun69073_ip = 117; continue _fun69073 }
 107:
            mike = _closure1_slot16;
            mike[tango] = zulu;
            entity = true;
 117:
            return entity;
 119:
            entity = false;
            return entity;
        }
    };
    entity = global;
    yankee = entity.Object;
    options = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, mike);
    mike = 0;
    options = oscar[mike];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 7;
    options = oscar[options];
    options = report.bind(entity)(options);
    yankee = options.AbortCodes;
    var _closure1_slot10 = yankee;
    yankee = options.MessageEmbedTypes;
    var _closure1_slot11 = yankee;
    options = options.MessageTypes;
    var _closure1_slot12 = options;
    options = {};
    var _closure1_slot13 = options;
    var _closure1_slot14 = mike;
    mike = {};
    var _closure1_slot15 = mike;
    mike = {};
    var _closure1_slot16 = mike;
    mike = function(argFoo) { // Original name: removeFailedMessage
        _fun69076: for(var _fun69076_ip = 0; ; ) switch(_fun69076_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot13;
            tango = entity[zulu];
            entity = null;
            if(!(entity != tango)) { _fun69076_ip = 28; continue _fun69076 }
 20:
            entity = _closure1_slot13;
            entity = delete entity[zulu];
 28:
            entity = _closure1_slot14;
            entity = entity + 1;
            _closure1_slot14 = entity;
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildAutomodMessageStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot18;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun69079: for(var _fun69079_ip = 0; ; ) switch(_fun69079_ip) {
 0:
                entity = argFoo;
                report = this;
                tango = report.waitFor;
                zulu = _closure1_slot9;
                zulu = tango.bind(report)(zulu);
                zulu = null;
                if(!(zulu != entity)) { _fun69079_ip = 50; continue _fun69079 }
 30:
                zulu = entity.automodFailedMessages;
                _closure1_slot13 = zulu;
                entity = entity.mentionRaidDetectionByGuild;
                _closure1_slot15 = entity;
 50:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            zulu = _closure1_slot13;
            entity['automodFailedMessages'] = zulu;
            zulu = _closure1_slot15;
            entity['mentionRaidDetectionByGuild'] = zulu;
            mike = _closure1_slot16;
            entity['lastIncidentAlertMessage'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getMessage';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun69081: for(var _fun69081_ip = 0; ; ) switch(_fun69081_ip) {
 0:
                tango = argFoo;
                mike = null;
                zulu = mike == tango;
                entity = null;
                if(zulu) { _fun69081_ip = 40; continue _fun69081 }
 14:
                zulu = _closure1_slot13;
                zulu = zulu[tango];
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun69081_ip = 37; continue _fun69081 }
 34:
                mike = zulu;
 37:
                entity = mike;
 40:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getMessagesVersion';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getMentionRaidDetected';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun69083: for(var _fun69083_ip = 0; ; ) switch(_fun69083_ip) {
 0:
                mike = _closure1_slot15;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun69083_ip = 26; continue _fun69083 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getLastIncidentAlertMessage';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun69084: for(var _fun69084_ip = 0; ; ) switch(_fun69084_ip) {
 0:
                mike = _closure1_slot16;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun69084_ip = 26; continue _fun69084 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'GuildAutomodMessageStore';
    options['displayName'] = mike;
    mike = 'GuildAutomodMessages';
    options['persistKey'] = mike;
    mike = 14;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    yankee = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot13 = entity;
        entity = _closure1_slot14;
        entity = entity + 1;
        _closure1_slot14 = entity;
        entity = true;
        return entity;
    };
    mike['CONNECTION_OPEN'] = yankee;
    mike['LOAD_MESSAGES_SUCCESS'] = offset;
    mike['LOCAL_MESSAGES_LOADED'] = offset;
    offset = function(argFoo) { // Original name: handleIncidentAlertMessageCreate
        _fun69086: for(var _fun69086_ip = 0; ; ) switch(_fun69086_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            options = entity.message;
            entity = null;
            if(!(entity != report)) { _fun69086_ip = 173; continue _fun69086 }
 22:
            mike = options.type;
            entity = _closure1_slot12;
            entity = entity.AUTO_MODERATION_ACTION;
            if(!(mike === entity)) { _fun69086_ip = 169; continue _fun69086 }
 47:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            zulu = 10;
            zulu = entity[zulu];
            golf = undefined;
            oscar = mike.bind(golf)(zulu);
            zulu = oscar.createMessageRecord;
            zulu = zulu.bind(oscar)(options);
            options = 11;
            entity = entity[options];
            mike = mike.bind(golf)(entity);
            entity = mike.isAutomodMessageRecord;
            entity = entity.bind(mike)(zulu);
            mike = !entity;
            entity = !mike;
            if(mike) { _fun69086_ip = 167; continue _fun69086 }
 112:
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            oscar = oscar.bind(golf)(mike);
            mike = oscar.isAutomodNotification;
            mike = mike.bind(oscar)(zulu);
            oscar = !mike;
            mike = !oscar;
            if(oscar) { _fun69086_ip = 164; continue _fun69086 }
 149:
            tango = _closure1_slot16;
            zulu = zulu.id;
            tango[report] = zulu;
            mike = true;
 164:
            entity = mike;
 167:
            return entity;
 169:
            entity = false;
            return entity;
 173:
            entity = false;
            return entity;
        }
    };
    mike['MESSAGE_CREATE'] = offset;
    mike['MESSAGE_SEND_FAILED_AUTOMOD'] = verify;
    mike['MESSAGE_EDIT_FAILED_AUTOMOD'] = verify;
    verify = function(argFoo) { // Original name: handleMessageNoticeRemove
        entity = argFoo;
        zulu = entity.messageId;
        mike = _closure1_slot17;
        entity = undefined;
        entity = mike.bind(entity)(zulu);
        entity = true;
        return entity;
    };
    mike['REMOVE_AUTOMOD_MESSAGE_NOTICE'] = verify;
    verify = function(argFoo) { // Original name: handleMessageEndEdit
        _fun69088: for(var _fun69088_ip = 0; ; ) switch(_fun69088_ip) {
 0:
            entity = argFoo;
            zulu = entity.response;
            tango = null;
            report = tango == zulu;
            entity = undefined;
            mike = undefined;
            if(report) { _fun69088_ip = 27; continue _fun69088 }
 22:
            mike = zulu.body;
 27:
            if(!(tango != mike)) { _fun69088_ip = 91; continue _fun69088 }
 31:
            mike = zulu.body;
            oscar = mike.code;
            report = _closure1_slot10;
            report = report.AUTOMOD_MESSAGE_BLOCKED;
            if(!(oscar !== report)) { _fun69088_ip = 87; continue _fun69088 }
 58:
            zulu = zulu.body;
            zulu = zulu.id;
            if(!(tango != zulu)) { _fun69088_ip = 83; continue _fun69088 }
 72:
            mike = _closure1_slot17;
            mike = mike.bind(entity)(zulu);
            return entity;
 83:
            entity = false;
            return entity;
 87:
            entity = false;
            return entity;
 91:
            entity = false;
            return entity;
        }
    };
    mike['MESSAGE_END_EDIT'] = verify;
    verify = function(argFoo) { // Original name: handleMentionRaidDetection
        entity = argFoo;
        zulu = entity.guildId;
        report = entity.decisionId;
        tango = entity.suspiciousMentionActivityUntil;
        mike = _closure1_slot15;
        entity = {};
        entity['guildId'] = zulu;
        entity['decisionId'] = report;
        entity['suspiciousMentionActivityUntil'] = tango;
        mike[zulu] = entity;
        entity = true;
        return entity;
    };
    mike['AUTO_MODERATION_MENTION_RAID_DETECTION'] = verify;
    tango = function(argFoo) { // Original name: handleMentionRaidNoticeDismiss
        entity = argFoo;
        mike = entity.guildId;
        entity = _closure1_slot15;
        entity = delete entity[mike];
        entity = true;
        return entity;
    };
    mike['AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_automod/GuildAutomodMessageStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();