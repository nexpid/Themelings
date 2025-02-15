// app/modules/guild_automod/AutomodMessageUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    mike = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    entity = function(argFoo, argBar) { // Original name: getEmbedFieldFromMessage
        _fun59607: for(var _fun59607_ip = 0; ; ) switch(_fun59607_ip) {
 0:
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = argFoo;
            golf = entity.embeds;
            zulu = null;
            if(!(zulu == golf)) { _fun59607_ip = 28; continue _fun59607 }
 24:
            golf = new Array(0);
 28:
            oscar = _closure1_slot2;
            tango = undefined;
            report = 1;
            oscar = oscar.bind(tango)(golf, report);
            report = 0;
            report = oscar[report];
            if(!(zulu != report)) { _fun59607_ip = 94; continue _fun59607 }
 56:
            golf = report.type;
            oscar = _closure1_slot7;
            oscar = oscar.AUTO_MODERATION_MESSAGE;
            if(!(golf !== oscar)) { _fun59607_ip = 152; continue _fun59607 }
 75:
            oscar = report.type;
            entity = _closure1_slot7;
            entity = entity.AUTO_MODERATION_NOTIFICATION;
            if(!(oscar !== entity)) { _fun59607_ip = 96; continue _fun59607 }
 94:
            return tango;
 96:
            oscar = zulu == report;
            entity = undefined;
            if(oscar) { _fun59607_ip = 150; continue _fun59607 }
 105:
            options = report.fields;
            oscar = zulu == options;
            entity = undefined;
            if(oscar) { _fun59607_ip = 150; continue _fun59607 }
 120:
            golf = options.find;
            oscar = function(argFoo) {
                entity = argFoo;
                mike = entity.rawName;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            oscar = golf.bind(options)(oscar);
            golf = zulu == oscar;
            entity = undefined;
            if(golf) { _fun59607_ip = 150; continue _fun59607 }
 144:
            entity = oscar.rawValue;
 150:
            return entity;
 152:
            oscar = zulu == report;
            entity = undefined;
            if(oscar) { _fun59607_ip = 206; continue _fun59607 }
 161:
            oscar = report.fields;
            report = zulu == oscar;
            entity = undefined;
            if(report) { _fun59607_ip = 206; continue _fun59607 }
 176:
            report = oscar.find;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.rawName;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            mike = report.bind(oscar)(mike);
            zulu = zulu == mike;
            entity = undefined;
            if(zulu) { _fun59607_ip = 206; continue _fun59607 }
 200:
            entity = mike.rawValue;
 206:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getMessageContentFromEmbed
        _fun59610: for(var _fun59610_ip = 0; ; ) switch(_fun59610_ip) {
 0:
            entity = argFoo;
            report = entity.embeds;
            entity = null;
            if(!(entity == report)) { _fun59610_ip = 19; continue _fun59610 }
 15:
            report = new Array(0);
 19:
            tango = _closure1_slot2;
            mike = undefined;
            zulu = 1;
            tango = tango.bind(mike)(report, zulu);
            zulu = 0;
            zulu = tango[zulu];
            tango = entity == zulu;
            if(tango) { _fun59610_ip = 56; continue _fun59610 }
 50:
            mike = zulu.rawDescription;
 56:
            zulu = entity != mike;
            entity = '';
            if(!zulu) { _fun59610_ip = 70; continue _fun59610 }
 67:
            entity = mike;
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: getDecisionOutcomeFromMessage
        _fun59611: for(var _fun59611_ip = 0; ; ) switch(_fun59611_ip) {
 0:
            tango = _closure1_slot11;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            entity = mike[entity];
            mike = undefined;
            entity = zulu.bind(mike)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            zulu = entity.DECISION_OUTCOME;
            entity = argFoo;
            entity = tango.bind(mike)(entity, zulu);
            zulu = null;
            if(!(zulu == entity)) { _fun59611_ip = 58; continue _fun59611 }
 56:
            return mike;
 58:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getQuarantineTypeFromMessage
        _fun59612: for(var _fun59612_ip = 0; ; ) switch(_fun59612_ip) {
 0:
            tango = _closure1_slot11;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            entity = mike[entity];
            mike = undefined;
            entity = zulu.bind(mike)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            zulu = entity.QUARANTINE_USER;
            entity = argFoo;
            entity = tango.bind(mike)(entity, zulu);
            zulu = null;
            if(!(zulu == entity)) { _fun59612_ip = 58; continue _fun59612 }
 56:
            return mike;
 58:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getQuarantineActionFromMessage
        _fun59613: for(var _fun59613_ip = 0; ; ) switch(_fun59613_ip) {
 0:
            tango = _closure1_slot11;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            entity = mike[entity];
            mike = undefined;
            entity = zulu.bind(mike)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            zulu = entity.QUARANTINE_USER_ACTION;
            entity = argFoo;
            entity = tango.bind(mike)(entity, zulu);
            zulu = null;
            if(!(zulu == entity)) { _fun59613_ip = 58; continue _fun59613 }
 56:
            return mike;
 58:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: getProfileUpdateTypeFromMessage
        _fun59614: for(var _fun59614_ip = 0; ; ) switch(_fun59614_ip) {
 0:
            tango = _closure1_slot11;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            entity = mike[entity];
            mike = undefined;
            entity = zulu.bind(mike)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            zulu = entity.BLOCK_PROFILE_UPDATE_TYPE;
            entity = argFoo;
            entity = tango.bind(mike)(entity, zulu);
            zulu = null;
            if(!(zulu == entity)) { _fun59614_ip = 58; continue _fun59614 }
 56:
            return mike;
 58:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: getQuarantineEventFromMessage
        _fun59615: for(var _fun59615_ip = 0; ; ) switch(_fun59615_ip) {
 0:
            tango = _closure1_slot11;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            entity = mike[entity];
            mike = undefined;
            entity = zulu.bind(mike)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            zulu = entity.QUARANTINE_EVENT;
            entity = argFoo;
            entity = tango.bind(mike)(entity, zulu);
            zulu = null;
            if(!(zulu == entity)) { _fun59615_ip = 58; continue _fun59615 }
 56:
            return mike;
 58:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _getUserProfileRuleHeaderText
        _fun59616: for(var _fun59616_ip = 0; ; ) switch(_fun59616_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            report = argBaz;
            golf = _closure1_slot0;
            entity = _closure1_slot1;
            options = 7;
            entity = entity[options];
            oscar = undefined;
            entity = golf.bind(oscar)(entity);
            entity = entity.AutomodQuarantineUserActionMessageEmbedKeys;
            entity = entity.BLOCK_PROFILE_UPDATE;
            if(!(entity !== zulu)) { _fun59616_ip = 555; continue _fun59616 }
 53:
            golf = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[options];
            entity = golf.bind(oscar)(entity);
            entity = entity.AutomodQuarantineUserActionMessageEmbedKeys;
            entity = entity.QUARANTINE_USER;
            if(!(entity !== zulu)) { _fun59616_ip = 178; continue _fun59616 }
 86:
            golf = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[options];
            entity = golf.bind(oscar)(entity);
            entity = entity.AutomodQuarantineUserActionMessageEmbedKeys;
            entity = entity.BLOCK_GUEST_JOIN;
            if(!(entity !== zulu)) { _fun59616_ip = 121; continue _fun59616 }
 119:
            return oscar;
 121:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 9;
            zulu = verify[entity];
            zulu = options.bind(oscar)(zulu);
            golf = zulu.intl;
            zulu = golf.string;
            entity = verify[entity];
            entity = options.bind(oscar)(entity);
            entity = entity.t;
            entity = entity.MrYeyc;
            entity = zulu.bind(golf)(entity);
            return entity;
 178:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            golf = 10;
            entity = entity[golf];
            entity = zulu.bind(oscar)(entity);
            entity = entity.AutomodQuarantineEventMessageEmbedKeys;
            entity = entity.MESSAGE_SEND;
            if(!(entity !== report)) { _fun59616_ip = 498; continue _fun59616 }
 217:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golf];
            entity = zulu.bind(oscar)(entity);
            entity = entity.AutomodQuarantineEventMessageEmbedKeys;
            entity = entity.GUILD_JOIN;
            if(!(entity !== report)) { _fun59616_ip = 441; continue _fun59616 }
 253:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golf];
            entity = zulu.bind(oscar)(entity);
            entity = entity.AutomodQuarantineEventMessageEmbedKeys;
            entity = entity.USERNAME_UPDATE;
            if(!(entity !== report)) { _fun59616_ip = 384; continue _fun59616 }
 286:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golf];
            entity = zulu.bind(oscar)(entity);
            entity = entity.AutomodQuarantineEventMessageEmbedKeys;
            zulu = entity.CLAN_TAG_UPDATE;
            entity = undefined;
            if(!(zulu === report)) { _fun59616_ip = 553; continue _fun59616 }
 324:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 9;
            report = verify[zulu];
            report = options.bind(oscar)(report);
            golf = report.intl;
            report = golf.string;
            zulu = verify[zulu];
            zulu = options.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.qV4K6u;
            entity = report.bind(golf)(zulu);
            _fun59616_ip = 553; continue _fun59616;
 384:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 9;
            report = verify[zulu];
            report = options.bind(oscar)(report);
            golf = report.intl;
            report = golf.string;
            zulu = verify[zulu];
            zulu = options.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.KNSkCw;
            entity = report.bind(golf)(zulu);
            _fun59616_ip = 553; continue _fun59616;
 441:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 9;
            report = verify[zulu];
            report = options.bind(oscar)(report);
            golf = report.intl;
            report = golf.string;
            zulu = verify[zulu];
            zulu = options.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.m9wWzs;
            entity = report.bind(golf)(zulu);
            _fun59616_ip = 553; continue _fun59616;
 498:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 9;
            report = verify[zulu];
            report = options.bind(oscar)(report);
            golf = report.intl;
            report = golf.string;
            zulu = verify[zulu];
            zulu = options.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.PmSMMT;
            entity = report.bind(golf)(zulu);
 553:
            return entity;
 555:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            report = 8;
            entity = entity[report];
            entity = zulu.bind(oscar)(entity);
            entity = entity.AutomodBlockProfileUpdateMessageEmbedKeys;
            entity = entity.NICKNAME_UPDATE;
            if(!(entity !== tango)) { _fun59616_ip = 683; continue _fun59616 }
 591:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zulu.bind(oscar)(entity);
            entity = entity.AutomodBlockProfileUpdateMessageEmbedKeys;
            zulu = entity.NICKNAME_RESET;
            entity = undefined;
            if(!(zulu === tango)) { _fun59616_ip = 738; continue _fun59616 }
 626:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 9;
            tango = options[zulu];
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.7u/rlZ;
            entity = tango.bind(report)(zulu);
            _fun59616_ip = 738; continue _fun59616;
 683:
            report = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 9;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.t98DPT;
            entity = zulu.bind(tango)(mike);
 738:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    report = function(argFoo, argBar) { // Original name: getChannelName
        _fun59617: for(var _fun59617_ip = 0; ; ) switch(_fun59617_ip) {
 0:
            tango = argFoo;
            entity = argBar;
            if(entity) { _fun59617_ip = 71; continue _fun59617 }
 9:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 9;
            mike = golf[entity];
            report = undefined;
            mike = oscar.bind(report)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            entity = entity.t;
            entity = entity./YzI6+;
            entity = mike.bind(zulu)(entity);
            _fun59617_ip = 154; continue _fun59617;
 71:
            zulu = null;
            report = zulu == tango;
            golf = undefined;
            mike = undefined;
            if(report) { _fun59617_ip = 89; continue _fun59617 }
 84:
            mike = tango.name;
 89:
            if(!(zulu == mike)) { _fun59617_ip = 151; continue _fun59617 }
 93:
            oscar = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 9;
            tango = options[zulu];
            tango = oscar.bind(golf)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.t;
            zulu = zulu.J90oLS;
            mike = tango.bind(report)(zulu);
 151:
            entity = mike;
 154:
            return entity;
        }
    };
    var _closure1_slot19 = report;
    tango = function(argFoo) { // Original name: extractAutomodMessageFields
        _fun59618: for(var _fun59618_ip = 0; ; ) switch(_fun59618_ip) {
 0:
            options = argFoo;
            golf = _closure1_slot11;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            oscar = 6;
            entity = offset[oscar];
            mike = undefined;
            entity = verify.bind(mike)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            entity = entity.CHANNEL_ID;
            tango = golf.bind(mike)(options, entity);
            entity = offset[oscar];
            entity = verify.bind(mike)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            entity = entity.ALERT_ACTIONS_EXECUTION;
            yankee = golf.bind(mike)(options, entity);
            entity = 15;
            entity = offset[entity];
            zulu = verify.bind(mike)(entity);
            entity = zulu.parseAlertActionsExecution;
            zulu = entity.bind(zulu)(yankee);
            entity = {};
            yankee = _closure1_slot12;
            yankee = yankee.bind(mike)(options);
            entity['content'] = yankee;
            yankee = offset[oscar];
            yankee = verify.bind(mike)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.RULE_NAME;
            yankee = golf.bind(mike)(options, yankee);
            entity['ruleName'] = yankee;
            yankee = offset[oscar];
            yankee = verify.bind(mike)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.DECISION_ID;
            yankee = golf.bind(mike)(options, yankee);
            entity['decisionId'] = yankee;
            yankee = offset[oscar];
            yankee = verify.bind(mike)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.KEYWORD;
            yankee = golf.bind(mike)(options, yankee);
            entity['keyword'] = yankee;
            yankee = offset[oscar];
            yankee = verify.bind(mike)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.KEYWORD_MATCHED_CONTENT;
            yankee = golf.bind(mike)(options, yankee);
            entity['keywordMatchedContent'] = yankee;
            yankee = offset[oscar];
            yankee = verify.bind(mike)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.FLAGGED_MESSAGE_ID;
            yankee = golf.bind(mike)(options, yankee);
            entity['flaggedMessageId'] = yankee;
            yankee = offset[oscar];
            yankee = verify.bind(mike)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.TIMEOUT_DURATION;
            yankee = golf.bind(mike)(options, yankee);
            entity['timeoutDuration'] = yankee;
            yankee = offset[oscar];
            yankee = verify.bind(mike)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.QUARANTINE_USER;
            yankee = golf.bind(mike)(options, yankee);
            entity['quarantineType'] = yankee;
            yankee = offset[oscar];
            yankee = verify.bind(mike)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.QUARANTINE_USER_ACTION;
            yankee = golf.bind(mike)(options, yankee);
            entity['quarantineAction'] = yankee;
            yankee = offset[oscar];
            yankee = verify.bind(mike)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.DECISION_REASON;
            yankee = golf.bind(mike)(options, yankee);
            entity['decisionReason'] = yankee;
            yankee = offset[oscar];
            yankee = verify.bind(mike)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.APPLICATION_NAME;
            yankee = golf.bind(mike)(options, yankee);
            entity['applicationName'] = yankee;
            yankee = offset[oscar];
            yankee = verify.bind(mike)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.INTERACTION_USER_ID;
            yankee = golf.bind(mike)(options, yankee);
            entity['interactionUserId'] = yankee;
            oscar = offset[oscar];
            oscar = verify.bind(mike)(oscar);
            oscar = oscar.AutomodMessageEmbedKeys;
            oscar = oscar.INTERACTION_CALLBACK_TYPE;
            oscar = golf.bind(mike)(options, oscar);
            entity['interactionCallbackType'] = oscar;
            oscar = _closure1_slot4;
            report = oscar.getChannel;
            report = report.bind(oscar)(tango);
            entity['embedChannel'] = report;
            entity['embedChannelId'] = tango;
            tango = null;
            tango = tango != zulu;
            if(!tango) { _fun59618_ip = 545; continue _fun59618 }
 542:
            mike = zulu;
 545:
            entity['alertActionsExecution'] = mike;
            return entity;
        }
    };
    var _closure1_slot20 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(mike, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 1;
    offset = options[oscar];
    oscar = argCorge;
    oscar = oscar.bind(entity)(offset);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.MessageEmbedTypes;
    var _closure1_slot7 = verify;
    verify = oscar.MessageTypes;
    var _closure1_slot8 = verify;
    verify = oscar.NOOP_NULL;
    var _closure1_slot9 = verify;
    oscar = oscar.Permissions;
    var _closure1_slot10 = oscar;
    oscar = 18;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_automod/AutomodMessageUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: useAutomodMessageFields
        mike = argFoo;
        var _closure2_slot0 = mike;
        oscar = _closure1_slot3;
        report = oscar.useMemo;
        tango = new Array(1);
        tango[0] = mike;
        mike = function() {
            zulu = _closure1_slot20;
            mike = _closure2_slot0;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        mike = report.bind(oscar)(mike, tango);
        var _closure2_slot1 = mike;
        oscar = _closure1_slot0;
        report = _closure1_slot1;
        tango = 16;
        report = report[tango];
        tango = undefined;
        oscar = oscar.bind(tango)(report);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot4;
        tango = new Array(1);
        tango[0] = zulu;
        golf = mike.embedChannelId;
        zulu = new Array(1);
        zulu[0] = golf;
        entity = function() {
            zulu = _closure1_slot4;
            mike = zulu.getChannel;
            entity = _closure2_slot1;
            entity = entity.embedChannelId;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = report.bind(oscar)(tango, entity, zulu);
        entity = {};
        offset = entity;
        verify = mike;
        mike = copyDataProperties(offset, verify);
        mike = 'embedChannel';
        entity[mike] = zulu;
        return entity;
    };
    mike['default'] = oscar;
    oscar = function(argFoo) { // Original name: isAutomodMessageRecord
        entity = argFoo;
        mike = entity.type;
        entity = _closure1_slot8;
        entity = entity.AUTO_MODERATION_ACTION;
        entity = mike === entity;
        return entity;
    };
    mike['isAutomodMessageRecord'] = oscar;
    oscar = function(argFoo) { // Original name: isAutomodNotification
        _fun59623: for(var _fun59623_ip = 0; ; ) switch(_fun59623_ip) {
 0:
            entity = argFoo;
            tango = entity.embeds;
            entity = null;
            mike = entity == tango;
            entity = undefined;
            if(mike) { _fun59623_ip = 38; continue _fun59623 }
 20:
            zulu = tango.some;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure1_slot7;
                entity = entity.AUTO_MODERATION_NOTIFICATION;
                entity = mike === entity;
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 38:
            return entity;
        }
    };
    mike['isAutomodNotification'] = oscar;
    oscar = function(argFoo, argBar, argBaz) { // Original name: getActionHeaderTextMobile
        _fun59625: for(var _fun59625_ip = 0; ; ) switch(_fun59625_ip) {
 0:
            verify = argFoo;
            options = argBar;
            entity = _closure1_slot16;
            yankee = undefined;
            oscar = entity.bind(yankee)(verify);
            entity = _closure1_slot15;
            report = entity.bind(yankee)(verify);
            entity = _closure1_slot17;
            zulu = entity.bind(yankee)(verify);
            entity = _closure1_slot14;
            entity = entity.bind(yankee)(verify);
            mike = null;
            if(!(mike != entity)) { _fun59625_ip = 71; continue _fun59625 }
 53:
            entity = _closure1_slot18;
            entity = entity.bind(yankee)(oscar, report, zulu);
            if(!(mike == entity)) { _fun59625_ip = 765; continue _fun59625 }
 71:
            zulu = _closure1_slot13;
            report = zulu.bind(yankee)(verify);
            golf = _closure1_slot11;
            offset = _closure1_slot0;
            romeo = _closure1_slot1;
            zulu = 6;
            oscar = romeo[zulu];
            oscar = offset.bind(yankee)(oscar);
            oscar = oscar.AutomodMessageEmbedKeys;
            oscar = oscar.INTERACTION_CALLBACK_TYPE;
            oscar = golf.bind(yankee)(verify, oscar);
            zulu = romeo[zulu];
            zulu = offset.bind(yankee)(zulu);
            zulu = zulu.AutomodMessageEmbedKeys;
            zulu = zulu.APPLICATION_NAME;
            offset = golf.bind(yankee)(verify, zulu);
            if(!(mike == offset)) { _fun59625_ip = 306; continue _fun59625 }
 156:
            golf = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 12;
            zulu = verify[zulu];
            zulu = golf.bind(yankee)(zulu);
            zulu = zulu.AutomodDecisionOutcomeEmbedKeys;
            zulu = zulu.BLOCKED;
            if(!(report === zulu)) { _fun59625_ip = 249; continue _fun59625 }
 192:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot1;
            zulu = 9;
            golf = foxtrot[zulu];
            golf = romeo.bind(yankee)(golf);
            verify = golf.intl;
            golf = verify.string;
            zulu = foxtrot[zulu];
            zulu = romeo.bind(yankee)(zulu);
            zulu = zulu.t;
            zulu = zulu.2kuGkJ;
            zulu = golf.bind(verify)(zulu);
            _fun59625_ip = 304; continue _fun59625;
 249:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot1;
            golf = 9;
            verify = backup[golf];
            verify = foxtrot.bind(yankee)(verify);
            romeo = verify.intl;
            verify = romeo.string;
            golf = backup[golf];
            golf = foxtrot.bind(yankee)(golf);
            golf = golf.t;
            golf = golf.Oo38tr;
            zulu = verify.bind(romeo)(golf);
 304:
            return zulu;
 306:
            verify = _closure1_slot6;
            golf = verify.getUser;
            zulu = argBaz;
            verify = golf.bind(verify)(zulu);
            golf = _closure1_slot0;
            romeo = _closure1_slot1;
            zulu = 11;
            zulu = romeo[zulu];
            zulu = golf.bind(yankee)(zulu);
            zulu = zulu.AutomodInteractionCallbackTypeEmbedKeys;
            zulu = zulu.MODAL;
            if(!(oscar === zulu)) { _fun59625_ip = 367; continue _fun59625 }
 360:
            if(!(mike == verify)) { _fun59625_ip = 556; continue _fun59625 }
 367:
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 12;
            mike = oscar[mike];
            mike = zulu.bind(yankee)(mike);
            mike = mike.AutomodDecisionOutcomeEmbedKeys;
            mike = mike.BLOCKED;
            if(!(report === mike)) { _fun59625_ip = 478; continue _fun59625 }
 403:
            zulu = _closure1_slot0;
            romeo = _closure1_slot1;
            mike = 9;
            oscar = romeo[mike];
            oscar = zulu.bind(yankee)(oscar);
            golf = oscar.intl;
            oscar = golf.formatToPlainString;
            mike = romeo[mike];
            mike = zulu.bind(yankee)(mike);
            mike = mike.t;
            zulu = mike.I0FiWl;
            mike = {};
            mike['applicationName'] = offset;
            romeo = options.username;
            mike['integrationOwner'] = romeo;
            mike = oscar.bind(golf)(zulu, mike);
            _fun59625_ip = 551; continue _fun59625;
 478:
            oscar = _closure1_slot0;
            foxtrot = _closure1_slot1;
            zulu = 9;
            golf = foxtrot[zulu];
            golf = oscar.bind(yankee)(golf);
            romeo = golf.intl;
            golf = romeo.formatToPlainString;
            zulu = foxtrot[zulu];
            zulu = oscar.bind(yankee)(zulu);
            zulu = zulu.t;
            oscar = zulu.0Kmtr6;
            zulu = {};
            zulu['applicationName'] = offset;
            foxtrot = options.username;
            zulu['integrationOwner'] = foxtrot;
            mike = golf.bind(romeo)(oscar, zulu);
 551:
            _fun59625_ip = 763; continue _fun59625;
 556:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 12;
            zulu = golf[zulu];
            zulu = oscar.bind(yankee)(zulu);
            zulu = zulu.AutomodDecisionOutcomeEmbedKeys;
            zulu = zulu.BLOCKED;
            if(!(report === zulu)) { _fun59625_ip = 677; continue _fun59625 }
 592:
            report = _closure1_slot0;
            romeo = _closure1_slot1;
            zulu = 9;
            oscar = romeo[zulu];
            oscar = report.bind(yankee)(oscar);
            golf = oscar.intl;
            oscar = golf.formatToPlainString;
            zulu = romeo[zulu];
            zulu = report.bind(yankee)(zulu);
            zulu = zulu.t;
            report = zulu.MCK/t7;
            zulu = {};
            zulu['applicationName'] = offset;
            romeo = verify.username;
            zulu['interactionUser'] = romeo;
            romeo = options.username;
            zulu['integrationOwner'] = romeo;
            zulu = oscar.bind(golf)(report, zulu);
            _fun59625_ip = 760; continue _fun59625;
 677:
            report = _closure1_slot0;
            romeo = _closure1_slot1;
            tango = 9;
            oscar = romeo[tango];
            oscar = report.bind(yankee)(oscar);
            golf = oscar.intl;
            oscar = golf.formatToPlainString;
            tango = romeo[tango];
            tango = report.bind(yankee)(tango);
            tango = tango.t;
            report = tango.Xy2Iw8;
            tango = {};
            tango['applicationName'] = offset;
            verify = verify.username;
            tango['interactionUser'] = verify;
            options = options.username;
            tango['integrationOwner'] = options;
            zulu = oscar.bind(golf)(report, tango);
 760:
            mike = zulu;
 763:
            return mike;
 765:
            return entity;
        }
    };
    mike['getActionHeaderTextMobile'] = oscar;
    mike['getChannelName'] = report;
    report = function(argFoo, argBar) { // Original name: getActionHeaderText
        _fun59626: for(var _fun59626_ip = 0; ; ) switch(_fun59626_ip) {
 0:
            report = argFoo;
            zulu = argBar;
            output = arguments[2];
            offset = arguments[3];
            yankee = arguments[4];
            foxtrot = undefined;
            if(!(output === foxtrot)) { _fun59626_ip = 28; continue _fun59626 }
 21:
            output = _closure1_slot9;
 28:
            entity = _closure1_slot16;
            kilo = entity.bind(foxtrot)(report);
            entity = _closure1_slot15;
            verify = entity.bind(foxtrot)(report);
            entity = _closure1_slot17;
            mike = entity.bind(foxtrot)(report);
            entity = _closure1_slot14;
            entity = entity.bind(foxtrot)(report);
            tango = _closure1_slot13;
            golf = tango.bind(foxtrot)(report);
            romeo = _closure1_slot11;
            sizing = _closure1_slot0;
            tango = _closure1_slot1;
            backup = 6;
            options = tango[backup];
            options = sizing.bind(foxtrot)(options);
            options = options.AutomodMessageEmbedKeys;
            options = options.INTERACTION_CALLBACK_TYPE;
            options = romeo.bind(foxtrot)(report, options);
            tango = tango[backup];
            tango = sizing.bind(foxtrot)(tango);
            tango = tango.AutomodMessageEmbedKeys;
            tango = tango.APPLICATION_NAME;
            romeo = romeo.bind(foxtrot)(report, tango);
            tango = null;
            if(!(tango != entity)) { _fun59626_ip = 169; continue _fun59626 }
 151:
            entity = _closure1_slot18;
            entity = entity.bind(foxtrot)(kilo, verify, mike);
            if(!(tango == entity)) { _fun59626_ip = 1017; continue _fun59626 }
 169:
            kilo = _closure1_slot5;
            verify = kilo.can;
            mike = _closure1_slot10;
            mike = mike.VIEW_CHANNEL;
            mike = verify.bind(kilo)(mike, zulu);
            verify = _closure1_slot19;
            sizing = verify.bind(foxtrot)(zulu, mike);
            if(!(tango != zulu)) { _fun59626_ip = 215; continue _fun59626 }
 209:
            kilo = output;
            if(mike) { _fun59626_ip = 219; continue _fun59626 }
 215:
            kilo = _closure1_slot9;
 219:
            zulu = _closure1_slot11;
            verify = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[backup];
            mike = verify.bind(foxtrot)(mike);
            mike = mike.AutomodMessageEmbedKeys;
            mike = mike.VOICE_CHANNEL_STATUS_OUTCOME;
            report = zulu.bind(foxtrot)(report, mike);
            zulu = tango == report;
            mike = null;
            if(zulu) { _fun59626_ip = 387; continue _fun59626 }
 267:
            zulu = 'blocked';
            if(!(zulu !== report)) { _fun59626_ip = 308; continue _fun59626 }
 275:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 9;
            zulu = verify[zulu];
            zulu = report.bind(foxtrot)(zulu);
            zulu = zulu.t;
            backup = zulu.bma6cn;
            _fun59626_ip = 339; continue _fun59626;
 308:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 9;
            zulu = verify[zulu];
            zulu = report.bind(foxtrot)(zulu);
            zulu = zulu.t;
            backup = zulu.cLQrq6;
 339:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 9;
            zulu = verify[zulu];
            zulu = report.bind(foxtrot)(zulu);
            verify = zulu.intl;
            report = verify.format;
            zulu = {};
            zulu['channelName'] = sizing;
            zulu['channelHook'] = output;
            mike = report.bind(verify)(backup, zulu);
 387:
            if(!(tango == mike)) { _fun59626_ip = 1015; continue _fun59626 }
 394:
            if(!(tango == romeo)) { _fun59626_ip = 580; continue _fun59626 }
 401:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 12;
            zulu = verify[zulu];
            zulu = report.bind(foxtrot)(zulu);
            zulu = zulu.AutomodDecisionOutcomeEmbedKeys;
            zulu = zulu.BLOCKED;
            if(!(golf === zulu)) { _fun59626_ip = 507; continue _fun59626 }
 437:
            report = _closure1_slot0;
            output = _closure1_slot1;
            zulu = 9;
            verify = output[zulu];
            verify = report.bind(foxtrot)(verify);
            backup = verify.intl;
            verify = backup.format;
            zulu = output[zulu];
            zulu = report.bind(foxtrot)(zulu);
            zulu = zulu.t;
            report = zulu.lOIOSE;
            zulu = {};
            zulu['channelName'] = sizing;
            zulu['channelHook'] = kilo;
            zulu = verify.bind(backup)(report, zulu);
            _fun59626_ip = 575; continue _fun59626;
 507:
            verify = _closure1_slot0;
            result = _closure1_slot1;
            report = 9;
            backup = result[report];
            backup = verify.bind(foxtrot)(backup);
            output = backup.intl;
            backup = output.format;
            report = result[report];
            report = verify.bind(foxtrot)(report);
            report = report.t;
            verify = report.IZg0VV;
            report = {};
            report['channelName'] = sizing;
            report['channelHook'] = kilo;
            zulu = backup.bind(output)(verify, report);
 575:
            _fun59626_ip = 1012; continue _fun59626;
 580:
            verify = _closure1_slot0;
            backup = _closure1_slot1;
            report = 11;
            report = backup[report];
            report = verify.bind(foxtrot)(report);
            report = report.AutomodInteractionCallbackTypeEmbedKeys;
            report = report.MODAL;
            if(!(options === report)) { _fun59626_ip = 623; continue _fun59626 }
 616:
            if(!(tango == yankee)) { _fun59626_ip = 822; continue _fun59626 }
 623:
            report = _closure1_slot0;
            options = _closure1_slot1;
            tango = 12;
            tango = options[tango];
            tango = report.bind(foxtrot)(tango);
            tango = tango.AutomodDecisionOutcomeEmbedKeys;
            tango = tango.BLOCKED;
            if(!(golf === tango)) { _fun59626_ip = 739; continue _fun59626 }
 659:
            report = _closure1_slot0;
            backup = _closure1_slot1;
            tango = 9;
            options = backup[tango];
            options = report.bind(foxtrot)(options);
            verify = options.intl;
            options = verify.format;
            tango = backup[tango];
            tango = report.bind(foxtrot)(tango);
            tango = tango.t;
            report = tango.s3tjMD;
            tango = {};
            tango['applicationName'] = romeo;
            tango['channelName'] = sizing;
            tango['channelHook'] = kilo;
            tango['integrationOwnerHook'] = offset;
            tango = options.bind(verify)(report, tango);
            _fun59626_ip = 817; continue _fun59626;
 739:
            options = _closure1_slot0;
            output = _closure1_slot1;
            report = 9;
            verify = output[report];
            verify = options.bind(foxtrot)(verify);
            backup = verify.intl;
            verify = backup.format;
            report = output[report];
            report = options.bind(foxtrot)(report);
            report = report.t;
            options = report.AXQufH;
            report = {};
            report['applicationName'] = romeo;
            report['channelName'] = sizing;
            report['channelHook'] = kilo;
            report['integrationOwnerHook'] = offset;
            tango = verify.bind(backup)(options, report);
 817:
            _fun59626_ip = 1009; continue _fun59626;
 822:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            report = 12;
            report = verify[report];
            report = options.bind(foxtrot)(report);
            report = report.AutomodDecisionOutcomeEmbedKeys;
            report = report.BLOCKED;
            if(!(golf === report)) { _fun59626_ip = 933; continue _fun59626 }
 858:
            golf = _closure1_slot0;
            backup = _closure1_slot1;
            report = 9;
            options = backup[report];
            options = golf.bind(foxtrot)(options);
            verify = options.intl;
            options = verify.format;
            report = backup[report];
            report = golf.bind(foxtrot)(report);
            report = report.t;
            golf = report.S3lNIS;
            report = {};
            report['applicationName'] = romeo;
            report['interactionUserHook'] = yankee;
            report['integrationOwnerHook'] = offset;
            report = options.bind(verify)(golf, report);
            _fun59626_ip = 1006; continue _fun59626;
 933:
            golf = _closure1_slot0;
            backup = _closure1_slot1;
            oscar = 9;
            options = backup[oscar];
            options = golf.bind(foxtrot)(options);
            verify = options.intl;
            options = verify.format;
            oscar = backup[oscar];
            oscar = golf.bind(foxtrot)(oscar);
            oscar = oscar.t;
            golf = oscar.4xL9Sk;
            oscar = {};
            oscar['applicationName'] = romeo;
            oscar['interactionUserHook'] = yankee;
            oscar['integrationOwnerHook'] = offset;
            report = options.bind(verify)(golf, oscar);
 1006:
            tango = report;
 1009:
            zulu = tango;
 1012:
            mike = zulu;
 1015:
            return mike;
 1017:
            return entity;
        }
    };
    mike['getActionHeaderText'] = report;
    report = function(argFoo) { // Original name: getQuarantineReasonString
        _fun59627: for(var _fun59627_ip = 0; ; ) switch(_fun59627_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            oscar = 13;
            mike = mike[oscar];
            report = undefined;
            mike = tango.bind(report)(mike);
            mike = mike.AutomodQuarantineUserMessageEmbedKeys;
            mike = mike.NICKNAME;
            if(!(mike !== zulu)) { _fun59627_ip = 380; continue _fun59627 }
 47:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.AutomodQuarantineUserMessageEmbedKeys;
            mike = mike.USERNAME;
            if(!(mike !== zulu)) { _fun59627_ip = 323; continue _fun59627 }
 83:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.AutomodQuarantineUserMessageEmbedKeys;
            mike = mike.GLOBAL_NAME;
            if(!(mike !== zulu)) { _fun59627_ip = 266; continue _fun59627 }
 119:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.AutomodQuarantineUserMessageEmbedKeys;
            mike = mike.CLAN_TAG;
            if(!(mike !== zulu)) { _fun59627_ip = 209; continue _fun59627 }
 152:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 9;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.pJQVnp;
            mike = zulu.bind(tango)(mike);
            return mike;
 209:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 9;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.Rtum09;
            mike = zulu.bind(tango)(mike);
            return mike;
 266:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 9;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.V9eJ8/;
            mike = zulu.bind(tango)(mike);
            return mike;
 323:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 9;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.pJQVnp;
            mike = zulu.bind(tango)(mike);
            return mike;
 380:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 9;
            mike = oscar[entity];
            mike = tango.bind(report)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.t;
            entity = entity.fkBQa2;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['getQuarantineReasonString'] = report;
    report = function(argFoo) { // Original name: extractAutomodNotificationFields
        _fun59628: for(var _fun59628_ip = 0; ; ) switch(_fun59628_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            verify = _closure1_slot0;
            foxtrot = _closure1_slot1;
            entity = 14;
            tango = foxtrot[entity];
            mike = undefined;
            tango = verify.bind(mike)(tango);
            tango = tango.AutomodNotificationEmbedKeys;
            tango = tango.NOTIFICATION_TYPE;
            tango = zulu.bind(mike)(report, tango);
            oscar = foxtrot[entity];
            oscar = verify.bind(mike)(oscar);
            oscar = oscar.AutomodNotificationEmbedKeys;
            oscar = oscar.JOIN_ATTEMPTS;
            yankee = zulu.bind(mike)(report, oscar);
            oscar = foxtrot[entity];
            oscar = verify.bind(mike)(oscar);
            oscar = oscar.AutomodNotificationEmbedKeys;
            oscar = oscar.RAID_DATETIME;
            romeo = zulu.bind(mike)(report, oscar);
            oscar = foxtrot[entity];
            oscar = verify.bind(mike)(oscar);
            oscar = oscar.AutomodNotificationEmbedKeys;
            oscar = oscar.DMS_SENT;
            offset = zulu.bind(mike)(report, oscar);
            oscar = foxtrot[entity];
            oscar = verify.bind(mike)(oscar);
            oscar = oscar.AutomodNotificationEmbedKeys;
            oscar = oscar.RAID_TYPE;
            options = zulu.bind(mike)(report, oscar);
            oscar = foxtrot[entity];
            oscar = verify.bind(mike)(oscar);
            oscar = oscar.AutomodNotificationEmbedKeys;
            oscar = oscar.RESOLVED_REASON;
            golf = zulu.bind(mike)(report, oscar);
            oscar = foxtrot[entity];
            oscar = verify.bind(mike)(oscar);
            oscar = oscar.AutomodNotificationEmbedKeys;
            oscar = oscar.DECISION_ID;
            oscar = zulu.bind(mike)(report, oscar);
            entity = foxtrot[entity];
            entity = verify.bind(mike)(entity);
            entity = entity.AutomodNotificationEmbedKeys;
            entity = entity.SUSPICIOUS_MENTION_ACTIVITY_UNTIL;
            report = zulu.bind(mike)(report, entity);
            entity = {};
            zulu = null;
            foxtrot = zulu == tango;
            verify = null;
            if(foxtrot) { _fun59628_ip = 255; continue _fun59628 }
 252:
            verify = tango;
 255:
            foxtrot = zulu != verify;
            tango = undefined;
            if(!foxtrot) { _fun59628_ip = 267; continue _fun59628 }
 264:
            tango = verify;
 267:
            entity['notificationType'] = tango;
            verify = zulu != yankee;
            tango = undefined;
            if(!verify) { _fun59628_ip = 294; continue _fun59628 }
 281:
            verify = global;
            verify = verify.parseInt;
            tango = verify.bind(mike)(yankee);
 294:
            entity['joinAttempts'] = tango;
            verify = zulu != romeo;
            tango = undefined;
            if(!verify) { _fun59628_ip = 339; continue _fun59628 }
 308:
            verify = global;
            verify = verify.Date;
            yankee = verify.prototype;
            yankee = Object.create(yankee, {constructor: {value: verify}});
            sizing = yankee;
            kilo = romeo;
            verify = new sizing[verify](kilo, backup);
            tango = verify instanceof Object ? verify : yankee;
 339:
            entity['raidDatetime'] = tango;
            verify = zulu != offset;
            tango = undefined;
            if(!verify) { _fun59628_ip = 366; continue _fun59628 }
 353:
            verify = global;
            verify = verify.parseInt;
            tango = verify.bind(mike)(offset);
 366:
            entity['dmsSent'] = tango;
            verify = zulu != options;
            tango = undefined;
            if(!verify) { _fun59628_ip = 383; continue _fun59628 }
 380:
            tango = options;
 383:
            entity['raidType'] = tango;
            options = zulu != golf;
            tango = undefined;
            if(!options) { _fun59628_ip = 400; continue _fun59628 }
 397:
            tango = golf;
 400:
            entity['resolvedReason'] = tango;
            golf = zulu != oscar;
            tango = undefined;
            if(!golf) { _fun59628_ip = 417; continue _fun59628 }
 414:
            tango = oscar;
 417:
            entity['decisionId'] = tango;
            zulu = zulu != report;
            mike = undefined;
            if(!zulu) { _fun59628_ip = 462; continue _fun59628 }
 431:
            zulu = global;
            zulu = zulu.Date;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            sizing = tango;
            kilo = report;
            zulu = new sizing[zulu](kilo, backup);
            mike = zulu instanceof Object ? zulu : tango;
 462:
            entity['suspiciousMentionActivityUntil'] = mike;
            return entity;
        }
    };
    mike['extractAutomodNotificationFields'] = report;
    mike['extractAutomodMessageFields'] = tango;
    tango = function(argFoo) { // Original name: useAutomodAlertActions
        _fun59629: for(var _fun59629_ip = 0; ; ) switch(_fun59629_ip) {
 0:
            tango = argFoo;
            entity = null;
            if(!(entity != tango)) { _fun59629_ip = 43; continue _fun59629 }
 9:
            zulu = _closure1_slot20;
            mike = undefined;
            mike = zulu.bind(mike)(tango);
            zulu = mike.alertActionsExecution;
            tango = entity != zulu;
            mike = null;
            if(!tango) { _fun59629_ip = 41; continue _fun59629 }
 38:
            mike = zulu;
 41:
            return mike;
 43:
            return entity;
        }
    };
    mike['useAutomodAlertActions'] = tango;
    tango = function(argFoo) { // Original name: getRaidAlertResolveCTAText
        _fun59630: for(var _fun59630_ip = 0; ; ) switch(_fun59630_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity != zulu)) { _fun59630_ip = 353; continue _fun59630 }
 12:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            oscar = 17;
            mike = mike[oscar];
            report = undefined;
            mike = tango.bind(report)(mike);
            mike = mike.RaidResolutionType;
            mike = mike.LEGITIMATE_ACTIVITY;
            if(!(mike !== zulu)) { _fun59630_ip = 296; continue _fun59630 }
 56:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.RaidResolutionType;
            mike = mike.DM_SPAM;
            if(!(mike !== zulu)) { _fun59630_ip = 239; continue _fun59630 }
 92:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.RaidResolutionType;
            mike = mike.JOIN_RAID;
            if(!(mike !== zulu)) { _fun59630_ip = 182; continue _fun59630 }
 125:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 9;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.GPg6JC;
            mike = zulu.bind(tango)(mike);
            return mike;
 182:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 9;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.qhaRbG;
            mike = zulu.bind(tango)(mike);
            return mike;
 239:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 9;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.j5V0io;
            mike = zulu.bind(tango)(mike);
            return mike;
 296:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 9;
            mike = oscar[entity];
            mike = tango.bind(report)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.t;
            entity = entity.riQ+HB;
            entity = mike.bind(zulu)(entity);
            return entity;
 353:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 9;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.Gh3A0N;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['getRaidAlertResolveCTAText'] = tango;
    zulu = function(argFoo) { // Original name: getUserIdOfAutomodAction
        tango = _closure1_slot11;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 14;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        entity = entity.AutomodNotificationEmbedKeys;
        mike = entity.ACTION_BY_USER_ID;
        entity = argFoo;
        entity = tango.bind(zulu)(entity, mike);
        return entity;
    };
    mike['getUserIdOfAutomodAction'] = zulu;
    mike['IS_BACKWARDS_COMPAT_RAID_TYPE'] = entity;
    return entity;
})();