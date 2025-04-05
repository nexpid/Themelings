// app/modules/guild_automod/GuildAutomodMessageStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    verify = function(argFoo) { // Original name: handleMessageSendFailedAutomod
        entity = argFoo;
        golfie = entity.messageData;
        oscard = entity.errorResponseBody;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 8;
        zuuluu = verify[entity];
        report = undefined;
        tangon = option.bind(report)(zuuluu);
        zuuluu = tangon.getFailedMessageId;
        tangon = zuuluu.bind(tangon)(golfie);
        zuuluu = {};
        zuuluu['id'] = tangon;
        entity = verify[entity];
        offset = option.bind(report)(entity);
        entity = offset.isMessageDataEdit;
        entity = entity.bind(offset)(golfie);
        zuuluu['isBlockedEdit'] = entity;
        zuuluu['messageData'] = golfie;
        entity = 9;
        entity = verify[entity];
        report = option.bind(report)(entity);
        entity = report.getAutomodErrorMessage;
        entity = entity.bind(report)(golfie, oscard);
        zuuluu['errorMessage'] = entity;
        entity = _closure1_slot13;
        entity[tangon] = zuuluu;
        entity = _closure1_slot14;
        entity = entity + 1;
        _closure1_slot14 = entity;
        entity = true;
        return entity;
    };
    offset = function(argFoo) { // Original name: handleLoadMessages
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            golfie = entity.messages;
            zuuluu = _closure1_slot8;
            entity = zuuluu.getChannel;
            report = entity.bind(zuuluu)(tangon);
            entity = null;
            zuuluu = entity == report;
            tangon = undefined;
            if(zuuluu) { _fun00004_ip = 52; continue _fun00003 }
 42:
            zuuluu = report.getGuildId;
            tangon = zuuluu.bind(report)();
 52:
            if(!(entity != tangon)) { _fun00004_ip = 117; continue _fun00003 }
 56:
            zuuluu = _closure1_slot16;
            oscard = zuuluu[tangon];
            report = golfie.reduce;
            zuuluu = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    golfie = argFoo;
                    zuuluu = argBar;
                    report = zuuluu.type;
                    entity = _closure1_slot12;
                    michal = entity.AUTO_MODERATION_ACTION;
                    entity = golfie;
                    if(!(report === michal)) { _fun00006_ip = 135; continue _fun00005 }
 31:
                    offset = zuuluu.embeds;
                    report = null;
                    option = report == offset;
                    michal = undefined;
                    oscard = undefined;
                    if(option) { _fun00006_ip = 68; continue _fun00005 }
 50:
                    verify = offset.some;
                    option = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        entity = _closure1_slot11;
                        entity = entity.AUTO_MODERATION_NOTIFICATION;
                        entity = michal === entity;
                        return entity;
                    };
                    oscard = verify.bind(offset)(option);
 68:
                    entity = golfie;
                    if(!oscard) { _fun00006_ip = 135; continue _fun00005 }
 74:
                    if(!(report != golfie)) { _fun00006_ip = 127; continue _fun00005 }
 78:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 12;
                    tangon = oscard[tangon];
                    oscard = report.bind(michal)(tangon);
                    report = oscard.compare;
                    tangon = zuuluu.id;
                    report = report.bind(oscard)(golfie, tangon);
                    tangon = -1;
                    michal = undefined;
                    if(!(tangon === report)) { _fun00006_ip = 132; continue _fun00005 }
 127:
                    michal = zuuluu.id;
 132:
                    entity = michal;
 135:
                    return entity;
                }
            };
            zuuluu = report.bind(golfie)(zuuluu, oscard);
            entity = entity != zuuluu;
            if(!entity) { _fun00004_ip = 102; continue _fun00003 }
 90:
            report = _closure1_slot16;
            report = report[tangon];
            entity = report !== zuuluu;
 102:
            if(!entity) { _fun00004_ip = 115; continue _fun00003 }
 105:
            michal = _closure1_slot16;
            michal[tangon] = zuuluu;
            entity = true;
 115:
            return entity;
 117:
            entity = false;
            return entity;
        }
    };
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, michal);
    michal = 0;
    option = oscard[michal];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 7;
    option = oscard[option];
    option = report.bind(entity)(option);
    yankee = option.AbortCodes;
    var _closure1_slot10 = yankee;
    yankee = option.MessageEmbedTypes;
    var _closure1_slot11 = yankee;
    option = option.MessageTypes;
    var _closure1_slot12 = option;
    option = {};
    var _closure1_slot13 = option;
    var _closure1_slot14 = michal;
    michal = {};
    var _closure1_slot15 = michal;
    michal = {};
    var _closure1_slot16 = michal;
    michal = function(argFoo) { // Original name: removeFailedMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot13;
            tangon = entity[zuuluu];
            entity = null;
            if(!(entity != tangon)) { _fun00008_ip = 28; continue _fun00007 }
 20:
            entity = _closure1_slot13;
            entity = delete entity[zuuluu];
 28:
            entity = _closure1_slot14;
            entity = entity + 1;
            _closure1_slot14 = entity;
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: GuildAutomodMessageStore
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot18;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 69; continue _fun00009 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00010_ip = 105; continue _fun00009;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                report = this;
                tangon = report.waitFor;
                zuuluu = _closure1_slot9;
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = null;
                if(!(zuuluu != entity)) { _fun00012_ip = 50; continue _fun00011 }
 30:
                zuuluu = entity.automodFailedMessages;
                _closure1_slot13 = zuuluu;
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
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            zuuluu = _closure1_slot13;
            entity['automodFailedMessages'] = zuuluu;
            zuuluu = _closure1_slot15;
            entity['mentionRaidDetectionByGuild'] = zuuluu;
            michal = _closure1_slot16;
            entity['lastIncidentAlertMessage'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                michal = null;
                zuuluu = michal == tangon;
                entity = null;
                if(zuuluu) { _fun00014_ip = 40; continue _fun00013 }
 14:
                zuuluu = _closure1_slot13;
                zuuluu = zuuluu[tangon];
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00014_ip = 37; continue _fun00013 }
 34:
                michal = zuuluu;
 37:
                entity = michal;
 40:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getMessagesVersion';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getMentionRaidDetected';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = _closure1_slot15;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00016_ip = 26; continue _fun00015 }
 23:
                entity = michal;
 26:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getLastIncidentAlertMessage';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = _closure1_slot16;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00018_ip = 26; continue _fun00017 }
 23:
                entity = michal;
 26:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'GuildAutomodMessageStore';
    option['displayName'] = michal;
    michal = 'GuildAutomodMessages';
    option['persistKey'] = michal;
    michal = 14;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    yankee = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot13 = entity;
        entity = _closure1_slot14;
        entity = entity + 1;
        _closure1_slot14 = entity;
        entity = true;
        return entity;
    };
    michal['CONNECTION_OPEN'] = yankee;
    michal['LOAD_MESSAGES_SUCCESS'] = offset;
    michal['LOCAL_MESSAGES_LOADED'] = offset;
    offset = function(argFoo) { // Original name: handleIncidentAlertMessageCreate
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            option = entity.message;
            entity = null;
            if(!(entity != report)) { _fun00020_ip = 173; continue _fun00019 }
 22:
            michal = option.type;
            entity = _closure1_slot12;
            entity = entity.AUTO_MODERATION_ACTION;
            if(!(michal === entity)) { _fun00020_ip = 169; continue _fun00019 }
 47:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = 10;
            zuuluu = entity[zuuluu];
            golfie = undefined;
            oscard = michal.bind(golfie)(zuuluu);
            zuuluu = oscard.createMessageRecord;
            zuuluu = zuuluu.bind(oscard)(option);
            option = 11;
            entity = entity[option];
            michal = michal.bind(golfie)(entity);
            entity = michal.isAutomodMessageRecord;
            entity = entity.bind(michal)(zuuluu);
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00020_ip = 167; continue _fun00019 }
 112:
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            oscard = oscard.bind(golfie)(michal);
            michal = oscard.isAutomodNotification;
            michal = michal.bind(oscard)(zuuluu);
            oscard = !michal;
            michal = !oscard;
            if(oscard) { _fun00020_ip = 164; continue _fun00019 }
 149:
            tangon = _closure1_slot16;
            zuuluu = zuuluu.id;
            tangon[report] = zuuluu;
            michal = true;
 164:
            entity = michal;
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
    michal['MESSAGE_CREATE'] = offset;
    michal['MESSAGE_SEND_FAILED_AUTOMOD'] = verify;
    michal['MESSAGE_EDIT_FAILED_AUTOMOD'] = verify;
    verify = function(argFoo) { // Original name: handleMessageNoticeRemove
        entity = argFoo;
        zuuluu = entity.messageId;
        michal = _closure1_slot17;
        entity = undefined;
        entity = michal.bind(entity)(zuuluu);
        entity = true;
        return entity;
    };
    michal['REMOVE_AUTOMOD_MESSAGE_NOTICE'] = verify;
    verify = function(argFoo) { // Original name: handleMessageEndEdit
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.response;
            tangon = null;
            report = tangon == zuuluu;
            entity = undefined;
            michal = undefined;
            if(report) { _fun00022_ip = 27; continue _fun00021 }
 22:
            michal = zuuluu.body;
 27:
            if(!(tangon != michal)) { _fun00022_ip = 91; continue _fun00021 }
 31:
            michal = zuuluu.body;
            oscard = michal.code;
            report = _closure1_slot10;
            report = report.AUTOMOD_MESSAGE_BLOCKED;
            if(!(oscard !== report)) { _fun00022_ip = 87; continue _fun00021 }
 58:
            zuuluu = zuuluu.body;
            zuuluu = zuuluu.id;
            if(!(tangon != zuuluu)) { _fun00022_ip = 83; continue _fun00021 }
 72:
            michal = _closure1_slot17;
            michal = michal.bind(entity)(zuuluu);
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
    michal['MESSAGE_END_EDIT'] = verify;
    verify = function(argFoo) { // Original name: handleMentionRaidDetection
        entity = argFoo;
        zuuluu = entity.guildId;
        report = entity.decisionId;
        tangon = entity.suspiciousMentionActivityUntil;
        michal = _closure1_slot15;
        entity = {};
        entity['guildId'] = zuuluu;
        entity['decisionId'] = report;
        entity['suspiciousMentionActivityUntil'] = tangon;
        michal[zuuluu] = entity;
        entity = true;
        return entity;
    };
    michal['AUTO_MODERATION_MENTION_RAID_DETECTION'] = verify;
    tangon = function(argFoo) { // Original name: handleMentionRaidNoticeDismiss
        entity = argFoo;
        michal = entity.guildId;
        entity = _closure1_slot15;
        entity = delete entity[michal];
        entity = true;
        return entity;
    };
    michal['AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_automod/GuildAutomodMessageStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();