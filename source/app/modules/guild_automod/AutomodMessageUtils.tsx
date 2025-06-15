// app/modules/guild_automod/AutomodMessageUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    michal = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = function(argFoo, argBar) { // Original name: getEmbedFieldFromMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = argFoo;
            golfie = entity.embeds;
            zuuluu = null;
            if(!(zuuluu == golfie)) { _fun00002_ip = 28; continue _fun00001 }
 24:
            golfie = new Array(0);
 28:
            oscard = _closure1_slot2;
            tangon = undefined;
            report = 1;
            oscard = oscard.bind(tangon)(golfie, report);
            report = 0;
            report = oscard[report];
            if(!(zuuluu != report)) { _fun00002_ip = 94; continue _fun00001 }
 56:
            golfie = report.type;
            oscard = _closure1_slot7;
            oscard = oscard.AUTO_MODERATION_MESSAGE;
            if(!(golfie !== oscard)) { _fun00002_ip = 153; continue _fun00001 }
 75:
            oscard = report.type;
            entity = _closure1_slot7;
            entity = entity.AUTO_MODERATION_NOTIFICATION;
            if(!(oscard !== entity)) { _fun00002_ip = 96; continue _fun00001 }
 94:
            return tangon;
 96:
            oscard = zuuluu == report;
            entity = undefined;
            if(oscard) { _fun00002_ip = 151; continue _fun00001 }
 105:
            option = report.fields;
            oscard = zuuluu == option;
            entity = undefined;
            if(oscard) { _fun00002_ip = 151; continue _fun00001 }
 120:
            golfie = option.find;
            oscard = function(argFoo) {
                entity = argFoo;
                michal = entity.rawName;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            oscard = golfie.bind(option)(oscard);
            golfie = zuuluu == oscard;
            entity = undefined;
            if(golfie) { _fun00002_ip = 151; continue _fun00001 }
 145:
            entity = oscard.rawValue;
 151:
            return entity;
 153:
            oscard = zuuluu == report;
            entity = undefined;
            if(oscard) { _fun00002_ip = 208; continue _fun00001 }
 162:
            oscard = report.fields;
            report = zuuluu == oscard;
            entity = undefined;
            if(report) { _fun00002_ip = 208; continue _fun00001 }
 177:
            report = oscard.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.rawName;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            michal = report.bind(oscard)(michal);
            zuuluu = zuuluu == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 208; continue _fun00001 }
 202:
            entity = michal.rawValue;
 208:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getMessageContentFromEmbed
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = entity.embeds;
            entity = null;
            if(!(entity == report)) { _fun00004_ip = 19; continue _fun00003 }
 15:
            report = new Array(0);
 19:
            tangon = _closure1_slot2;
            michal = undefined;
            zuuluu = 1;
            tangon = tangon.bind(michal)(report, zuuluu);
            zuuluu = 0;
            zuuluu = tangon[zuuluu];
            tangon = entity == zuuluu;
            if(tangon) { _fun00004_ip = 56; continue _fun00003 }
 50:
            michal = zuuluu.rawDescription;
 56:
            zuuluu = entity != michal;
            entity = '';
            if(!zuuluu) { _fun00004_ip = 70; continue _fun00003 }
 67:
            entity = michal;
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: getDecisionOutcomeFromMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 6;
            entity = michal[entity];
            michal = undefined;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            zuuluu = entity.DECISION_OUTCOME;
            entity = argFoo;
            entity = tangon.bind(michal)(entity, zuuluu);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00006_ip = 58; continue _fun00005 }
 56:
            return michal;
 58:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getQuarantineTypeFromMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 6;
            entity = michal[entity];
            michal = undefined;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            zuuluu = entity.QUARANTINE_USER;
            entity = argFoo;
            entity = tangon.bind(michal)(entity, zuuluu);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00008_ip = 58; continue _fun00007 }
 56:
            return michal;
 58:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getQuarantineActionFromMessage
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 6;
            entity = michal[entity];
            michal = undefined;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            zuuluu = entity.QUARANTINE_USER_ACTION;
            entity = argFoo;
            entity = tangon.bind(michal)(entity, zuuluu);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00010_ip = 58; continue _fun00009 }
 56:
            return michal;
 58:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: getProfileUpdateTypeFromMessage
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 6;
            entity = michal[entity];
            michal = undefined;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            zuuluu = entity.BLOCK_PROFILE_UPDATE_TYPE;
            entity = argFoo;
            entity = tangon.bind(michal)(entity, zuuluu);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00012_ip = 58; continue _fun00011 }
 56:
            return michal;
 58:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: getQuarantineEventFromMessage
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 6;
            entity = michal[entity];
            michal = undefined;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            zuuluu = entity.QUARANTINE_EVENT;
            entity = argFoo;
            entity = tangon.bind(michal)(entity, zuuluu);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00014_ip = 58; continue _fun00013 }
 56:
            return michal;
 58:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _getUserProfileRuleHeaderText
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            report = argBaz;
            golfie = _closure1_slot0;
            entity = _closure1_slot1;
            option = 7;
            entity = entity[option];
            oscard = undefined;
            entity = golfie.bind(oscard)(entity);
            entity = entity.AutomodQuarantineUserActionMessageEmbedKeys;
            entity = entity.BLOCK_PROFILE_UPDATE;
            if(!(entity !== zuuluu)) { _fun00016_ip = 565; continue _fun00015 }
 53:
            golfie = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[option];
            entity = golfie.bind(oscard)(entity);
            entity = entity.AutomodQuarantineUserActionMessageEmbedKeys;
            entity = entity.QUARANTINE_USER;
            if(!(entity !== zuuluu)) { _fun00016_ip = 180; continue _fun00015 }
 86:
            golfie = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[option];
            entity = golfie.bind(oscard)(entity);
            entity = entity.AutomodQuarantineUserActionMessageEmbedKeys;
            entity = entity.BLOCK_GUEST_JOIN;
            if(!(entity !== zuuluu)) { _fun00016_ip = 121; continue _fun00015 }
 119:
            return oscard;
 121:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 9;
            zuuluu = verify[entity];
            zuuluu = option.bind(oscard)(zuuluu);
            golfie = zuuluu.intl;
            zuuluu = golfie.string;
            entity = verify[entity];
            entity = option.bind(oscard)(entity);
            entity = entity.t;
            entity = entity.MrYeyc;
            entity = zuuluu.bind(golfie)(entity);
            return entity;
 180:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            golfie = 10;
            entity = entity[golfie];
            entity = zuuluu.bind(oscard)(entity);
            entity = entity.AutomodQuarantineEventMessageEmbedKeys;
            entity = entity.MESSAGE_SEND;
            if(!(entity !== report)) { _fun00016_ip = 506; continue _fun00015 }
 219:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golfie];
            entity = zuuluu.bind(oscard)(entity);
            entity = entity.AutomodQuarantineEventMessageEmbedKeys;
            entity = entity.GUILD_JOIN;
            if(!(entity !== report)) { _fun00016_ip = 447; continue _fun00015 }
 255:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golfie];
            entity = zuuluu.bind(oscard)(entity);
            entity = entity.AutomodQuarantineEventMessageEmbedKeys;
            entity = entity.USERNAME_UPDATE;
            if(!(entity !== report)) { _fun00016_ip = 388; continue _fun00015 }
 288:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golfie];
            entity = zuuluu.bind(oscard)(entity);
            entity = entity.AutomodQuarantineEventMessageEmbedKeys;
            zuuluu = entity.CLAN_TAG_UPDATE;
            entity = undefined;
            if(!(zuuluu === report)) { _fun00016_ip = 563; continue _fun00015 }
 326:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 9;
            report = verify[zuuluu];
            report = option.bind(oscard)(report);
            golfie = report.intl;
            report = golfie.string;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.qV4K6u;
            entity = report.bind(golfie)(zuuluu);
            _fun00016_ip = 563; continue _fun00015;
 388:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 9;
            report = verify[zuuluu];
            report = option.bind(oscard)(report);
            golfie = report.intl;
            report = golfie.string;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.KNSkCw;
            entity = report.bind(golfie)(zuuluu);
            _fun00016_ip = 563; continue _fun00015;
 447:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 9;
            report = verify[zuuluu];
            report = option.bind(oscard)(report);
            golfie = report.intl;
            report = golfie.string;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.m9wWzs;
            entity = report.bind(golfie)(zuuluu);
            _fun00016_ip = 563; continue _fun00015;
 506:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 9;
            report = verify[zuuluu];
            report = option.bind(oscard)(report);
            golfie = report.intl;
            report = golfie.string;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.PmSMMT;
            entity = report.bind(golfie)(zuuluu);
 563:
            return entity;
 565:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            report = 8;
            entity = entity[report];
            entity = zuuluu.bind(oscard)(entity);
            entity = entity.AutomodBlockProfileUpdateMessageEmbedKeys;
            entity = entity.NICKNAME_UPDATE;
            if(!(entity !== tangon)) { _fun00016_ip = 695; continue _fun00015 }
 601:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zuuluu.bind(oscard)(entity);
            entity = entity.AutomodBlockProfileUpdateMessageEmbedKeys;
            zuuluu = entity.NICKNAME_RESET;
            entity = undefined;
            if(!(zuuluu === tangon)) { _fun00016_ip = 752; continue _fun00015 }
 636:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 9;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.7u/rlZ;
            entity = tangon.bind(report)(zuuluu);
            _fun00016_ip = 752; continue _fun00015;
 695:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 9;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.t98DPT;
            entity = zuuluu.bind(tangon)(michal);
 752:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    report = function(argFoo, argBar) { // Original name: getChannelName
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            entity = argBar;
            if(entity) { _fun00018_ip = 71; continue _fun00017 }
 9:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 9;
            michal = golfie[entity];
            report = undefined;
            michal = oscard.bind(report)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            entity = entity.t;
            entity = entity./YzI6+;
            entity = michal.bind(zuuluu)(entity);
            _fun00018_ip = 154; continue _fun00017;
 71:
            zuuluu = null;
            report = zuuluu == tangon;
            golfie = undefined;
            michal = undefined;
            if(report) { _fun00018_ip = 89; continue _fun00017 }
 84:
            michal = tangon.name;
 89:
            if(!(zuuluu == michal)) { _fun00018_ip = 151; continue _fun00017 }
 93:
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 9;
            tangon = option[zuuluu];
            tangon = oscard.bind(golfie)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.J90oLS;
            michal = tangon.bind(report)(zuuluu);
 151:
            entity = michal;
 154:
            return entity;
        }
    };
    var _closure1_slot19 = report;
    tangon = function(argFoo) { // Original name: extractAutomodMessageFields
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            option = argFoo;
            golfie = _closure1_slot11;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            oscard = 6;
            entity = offset[oscard];
            michal = undefined;
            entity = verify.bind(michal)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            entity = entity.CHANNEL_ID;
            tangon = golfie.bind(michal)(option, entity);
            entity = offset[oscard];
            entity = verify.bind(michal)(entity);
            entity = entity.AutomodMessageEmbedKeys;
            entity = entity.ALERT_ACTIONS_EXECUTION;
            yankee = golfie.bind(michal)(option, entity);
            entity = 15;
            entity = offset[entity];
            zuuluu = verify.bind(michal)(entity);
            entity = zuuluu.parseAlertActionsExecution;
            zuuluu = entity.bind(zuuluu)(yankee);
            entity = {};
            yankee = _closure1_slot12;
            yankee = yankee.bind(michal)(option);
            entity['content'] = yankee;
            yankee = offset[oscard];
            yankee = verify.bind(michal)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.RULE_NAME;
            yankee = golfie.bind(michal)(option, yankee);
            entity['ruleName'] = yankee;
            yankee = offset[oscard];
            yankee = verify.bind(michal)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.DECISION_ID;
            yankee = golfie.bind(michal)(option, yankee);
            entity['decisionId'] = yankee;
            yankee = offset[oscard];
            yankee = verify.bind(michal)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.KEYWORD;
            yankee = golfie.bind(michal)(option, yankee);
            entity['keyword'] = yankee;
            yankee = offset[oscard];
            yankee = verify.bind(michal)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.KEYWORD_MATCHED_CONTENT;
            yankee = golfie.bind(michal)(option, yankee);
            entity['keywordMatchedContent'] = yankee;
            yankee = offset[oscard];
            yankee = verify.bind(michal)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.FLAGGED_MESSAGE_ID;
            yankee = golfie.bind(michal)(option, yankee);
            entity['flaggedMessageId'] = yankee;
            yankee = offset[oscard];
            yankee = verify.bind(michal)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.TIMEOUT_DURATION;
            yankee = golfie.bind(michal)(option, yankee);
            entity['timeoutDuration'] = yankee;
            yankee = offset[oscard];
            yankee = verify.bind(michal)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.QUARANTINE_USER;
            yankee = golfie.bind(michal)(option, yankee);
            entity['quarantineType'] = yankee;
            yankee = offset[oscard];
            yankee = verify.bind(michal)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.QUARANTINE_USER_ACTION;
            yankee = golfie.bind(michal)(option, yankee);
            entity['quarantineAction'] = yankee;
            yankee = offset[oscard];
            yankee = verify.bind(michal)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.DECISION_REASON;
            yankee = golfie.bind(michal)(option, yankee);
            entity['decisionReason'] = yankee;
            yankee = offset[oscard];
            yankee = verify.bind(michal)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.APPLICATION_NAME;
            yankee = golfie.bind(michal)(option, yankee);
            entity['applicationName'] = yankee;
            yankee = offset[oscard];
            yankee = verify.bind(michal)(yankee);
            yankee = yankee.AutomodMessageEmbedKeys;
            yankee = yankee.INTERACTION_USER_ID;
            yankee = golfie.bind(michal)(option, yankee);
            entity['interactionUserId'] = yankee;
            oscard = offset[oscard];
            oscard = verify.bind(michal)(oscard);
            oscard = oscard.AutomodMessageEmbedKeys;
            oscard = oscard.INTERACTION_CALLBACK_TYPE;
            oscard = golfie.bind(michal)(option, oscard);
            entity['interactionCallbackType'] = oscard;
            oscard = _closure1_slot4;
            report = oscard.getChannel;
            report = report.bind(oscard)(tangon);
            entity['embedChannel'] = report;
            entity['embedChannelId'] = tangon;
            tangon = null;
            tangon = tangon != zuuluu;
            if(!tangon) { _fun00020_ip = 545; continue _fun00019 }
 542:
            michal = zuuluu;
 545:
            entity['alertActionsExecution'] = michal;
            return entity;
        }
    };
    var _closure1_slot20 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(michal, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    oscard = 1;
    offset = option[oscard];
    oscard = argCor;
    oscard = oscard.bind(entity)(offset);
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.MessageEmbedTypes;
    var _closure1_slot7 = verify;
    verify = oscard.MessageTypes;
    var _closure1_slot8 = verify;
    verify = oscard.NOOP_NULL;
    var _closure1_slot9 = verify;
    oscard = oscard.Permissions;
    var _closure1_slot10 = oscard;
    oscard = 18;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_automod/AutomodMessageUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: useAutomodMessageFields
        michal = argFoo;
        var _closure2_slot0 = michal;
        oscard = _closure1_slot3;
        report = oscard.useMemo;
        tangon = new Array(1);
        tangon[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot20;
            michal = _closure2_slot0;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = report.bind(oscard)(michal, tangon);
        var _closure2_slot1 = michal;
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        tangon = 16;
        report = report[tangon];
        tangon = undefined;
        oscard = oscard.bind(tangon)(report);
        report = oscard.useStateFromStores;
        zuuluu = _closure1_slot4;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        golfie = michal.embedChannelId;
        zuuluu = new Array(1);
        zuuluu[0] = golfie;
        entity = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.getChannel;
            entity = _closure2_slot1;
            entity = entity.embedChannelId;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu = report.bind(oscard)(tangon, entity, zuuluu);
        entity = {};
        offset = entity;
        verify = michal;
        michal = copyDataProperties(offset, verify);
        michal = 'embedChannel';
        entity[michal] = zuuluu;
        return entity;
    };
    michal['default'] = oscard;
    oscard = function(argFoo) { // Original name: isAutomodMessageRecord
        entity = argFoo;
        michal = entity.type;
        entity = _closure1_slot8;
        entity = entity.AUTO_MODERATION_ACTION;
        entity = michal === entity;
        return entity;
    };
    michal['isAutomodMessageRecord'] = oscard;
    oscard = function(argFoo) { // Original name: isAutomodNotification
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tangon = entity.embeds;
            entity = null;
            michal = entity == tangon;
            entity = undefined;
            if(michal) { _fun00022_ip = 38; continue _fun00021 }
 20:
            zuuluu = tangon.some;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot7;
                entity = entity.AUTO_MODERATION_NOTIFICATION;
                entity = michal === entity;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 38:
            return entity;
        }
    };
    michal['isAutomodNotification'] = oscard;
    oscard = function(argFoo, argBar, argBaz) { // Original name: getActionHeaderTextMobile
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            verify = argFoo;
            option = argBar;
            entity = _closure1_slot16;
            yankee = undefined;
            oscard = entity.bind(yankee)(verify);
            entity = _closure1_slot15;
            report = entity.bind(yankee)(verify);
            entity = _closure1_slot17;
            zuuluu = entity.bind(yankee)(verify);
            entity = _closure1_slot14;
            entity = entity.bind(yankee)(verify);
            michal = null;
            if(!(michal != entity)) { _fun00024_ip = 71; continue _fun00023 }
 53:
            entity = _closure1_slot18;
            entity = entity.bind(yankee)(oscard, report, zuuluu);
            if(!(michal == entity)) { _fun00024_ip = 777; continue _fun00023 }
 71:
            zuuluu = _closure1_slot13;
            report = zuuluu.bind(yankee)(verify);
            golfie = _closure1_slot11;
            offset = _closure1_slot0;
            romeon = _closure1_slot1;
            zuuluu = 6;
            oscard = romeon[zuuluu];
            oscard = offset.bind(yankee)(oscard);
            oscard = oscard.AutomodMessageEmbedKeys;
            oscard = oscard.INTERACTION_CALLBACK_TYPE;
            oscard = golfie.bind(yankee)(verify, oscard);
            zuuluu = romeon[zuuluu];
            zuuluu = offset.bind(yankee)(zuuluu);
            zuuluu = zuuluu.AutomodMessageEmbedKeys;
            zuuluu = zuuluu.APPLICATION_NAME;
            offset = golfie.bind(yankee)(verify, zuuluu);
            if(!(michal == offset)) { _fun00024_ip = 310; continue _fun00023 }
 156:
            golfie = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 12;
            zuuluu = verify[zuuluu];
            zuuluu = golfie.bind(yankee)(zuuluu);
            zuuluu = zuuluu.AutomodDecisionOutcomeEmbedKeys;
            zuuluu = zuuluu.BLOCKED;
            if(!(report === zuuluu)) { _fun00024_ip = 251; continue _fun00023 }
 192:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            zuuluu = 9;
            golfie = foxtra[zuuluu];
            golfie = romeon.bind(yankee)(golfie);
            verify = golfie.intl;
            golfie = verify.string;
            zuuluu = foxtra[zuuluu];
            zuuluu = romeon.bind(yankee)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.2kuGkJ;
            zuuluu = golfie.bind(verify)(zuuluu);
            _fun00024_ip = 308; continue _fun00023;
 251:
            foxtra = _closure1_slot0;
            backup = _closure1_slot1;
            golfie = 9;
            verify = backup[golfie];
            verify = foxtra.bind(yankee)(verify);
            romeon = verify.intl;
            verify = romeon.string;
            golfie = backup[golfie];
            golfie = foxtra.bind(yankee)(golfie);
            golfie = golfie.t;
            golfie = golfie.Oo38tr;
            zuuluu = verify.bind(romeon)(golfie);
 308:
            return zuuluu;
 310:
            verify = _closure1_slot6;
            golfie = verify.getUser;
            zuuluu = argBaz;
            verify = golfie.bind(verify)(zuuluu);
            golfie = _closure1_slot0;
            romeon = _closure1_slot1;
            zuuluu = 11;
            zuuluu = romeon[zuuluu];
            zuuluu = golfie.bind(yankee)(zuuluu);
            zuuluu = zuuluu.AutomodInteractionCallbackTypeEmbedKeys;
            zuuluu = zuuluu.MODAL;
            if(!(oscard === zuuluu)) { _fun00024_ip = 371; continue _fun00023 }
 364:
            if(!(michal == verify)) { _fun00024_ip = 564; continue _fun00023 }
 371:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 12;
            michal = oscard[michal];
            michal = zuuluu.bind(yankee)(michal);
            michal = michal.AutomodDecisionOutcomeEmbedKeys;
            michal = michal.BLOCKED;
            if(!(report === michal)) { _fun00024_ip = 484; continue _fun00023 }
 407:
            zuuluu = _closure1_slot0;
            romeon = _closure1_slot1;
            michal = 9;
            oscard = romeon[michal];
            oscard = zuuluu.bind(yankee)(oscard);
            golfie = oscard.intl;
            oscard = golfie.formatToPlainString;
            michal = romeon[michal];
            michal = zuuluu.bind(yankee)(michal);
            michal = michal.t;
            zuuluu = michal.I0FiWl;
            michal = {};
            michal['applicationName'] = offset;
            romeon = option.username;
            michal['integrationOwner'] = romeon;
            michal = oscard.bind(golfie)(zuuluu, michal);
            _fun00024_ip = 559; continue _fun00023;
 484:
            oscard = _closure1_slot0;
            foxtra = _closure1_slot1;
            zuuluu = 9;
            golfie = foxtra[zuuluu];
            golfie = oscard.bind(yankee)(golfie);
            romeon = golfie.intl;
            golfie = romeon.formatToPlainString;
            zuuluu = foxtra[zuuluu];
            zuuluu = oscard.bind(yankee)(zuuluu);
            zuuluu = zuuluu.t;
            oscard = zuuluu.0Kmtr6;
            zuuluu = {};
            zuuluu['applicationName'] = offset;
            foxtra = option.username;
            zuuluu['integrationOwner'] = foxtra;
            michal = golfie.bind(romeon)(oscard, zuuluu);
 559:
            _fun00024_ip = 775; continue _fun00023;
 564:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 12;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(yankee)(zuuluu);
            zuuluu = zuuluu.AutomodDecisionOutcomeEmbedKeys;
            zuuluu = zuuluu.BLOCKED;
            if(!(report === zuuluu)) { _fun00024_ip = 687; continue _fun00023 }
 600:
            report = _closure1_slot0;
            romeon = _closure1_slot1;
            zuuluu = 9;
            oscard = romeon[zuuluu];
            oscard = report.bind(yankee)(oscard);
            golfie = oscard.intl;
            oscard = golfie.formatToPlainString;
            zuuluu = romeon[zuuluu];
            zuuluu = report.bind(yankee)(zuuluu);
            zuuluu = zuuluu.t;
            report = zuuluu.MCK/t7;
            zuuluu = {};
            zuuluu['applicationName'] = offset;
            romeon = verify.username;
            zuuluu['interactionUser'] = romeon;
            romeon = option.username;
            zuuluu['integrationOwner'] = romeon;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            _fun00024_ip = 772; continue _fun00023;
 687:
            report = _closure1_slot0;
            romeon = _closure1_slot1;
            tangon = 9;
            oscard = romeon[tangon];
            oscard = report.bind(yankee)(oscard);
            golfie = oscard.intl;
            oscard = golfie.formatToPlainString;
            tangon = romeon[tangon];
            tangon = report.bind(yankee)(tangon);
            tangon = tangon.t;
            report = tangon.Xy2Iw8;
            tangon = {};
            tangon['applicationName'] = offset;
            verify = verify.username;
            tangon['interactionUser'] = verify;
            option = option.username;
            tangon['integrationOwner'] = option;
            zuuluu = oscard.bind(golfie)(report, tangon);
 772:
            michal = zuuluu;
 775:
            return michal;
 777:
            return entity;
        }
    };
    michal['getActionHeaderTextMobile'] = oscard;
    michal['getChannelName'] = report;
    report = function(argFoo, argBar) { // Original name: getActionHeaderText
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            report = argFoo;
            zuuluu = argBar;
            output = arguments[2];
            offset = arguments[3];
            yankee = arguments[4];
            foxtra = undefined;
            if(!(output === foxtra)) { _fun00026_ip = 28; continue _fun00025 }
 21:
            output = _closure1_slot9;
 28:
            entity = _closure1_slot16;
            kiloes = entity.bind(foxtra)(report);
            entity = _closure1_slot15;
            verify = entity.bind(foxtra)(report);
            entity = _closure1_slot17;
            michal = entity.bind(foxtra)(report);
            entity = _closure1_slot14;
            entity = entity.bind(foxtra)(report);
            tangon = _closure1_slot13;
            golfie = tangon.bind(foxtra)(report);
            romeon = _closure1_slot11;
            sizing = _closure1_slot0;
            tangon = _closure1_slot1;
            backup = 6;
            option = tangon[backup];
            option = sizing.bind(foxtra)(option);
            option = option.AutomodMessageEmbedKeys;
            option = option.INTERACTION_CALLBACK_TYPE;
            option = romeon.bind(foxtra)(report, option);
            tangon = tangon[backup];
            tangon = sizing.bind(foxtra)(tangon);
            tangon = tangon.AutomodMessageEmbedKeys;
            tangon = tangon.APPLICATION_NAME;
            romeon = romeon.bind(foxtra)(report, tangon);
            tangon = null;
            if(!(tangon != entity)) { _fun00026_ip = 169; continue _fun00025 }
 151:
            entity = _closure1_slot18;
            entity = entity.bind(foxtra)(kiloes, verify, michal);
            if(!(tangon == entity)) { _fun00026_ip = 1036; continue _fun00025 }
 169:
            kiloes = _closure1_slot5;
            verify = kiloes.can;
            michal = _closure1_slot10;
            michal = michal.VIEW_CHANNEL;
            michal = verify.bind(kiloes)(michal, zuuluu);
            verify = _closure1_slot19;
            sizing = verify.bind(foxtra)(zuuluu, michal);
            if(!(tangon != zuuluu)) { _fun00026_ip = 215; continue _fun00025 }
 209:
            kiloes = output;
            if(michal) { _fun00026_ip = 219; continue _fun00025 }
 215:
            kiloes = _closure1_slot9;
 219:
            zuuluu = _closure1_slot11;
            verify = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[backup];
            michal = verify.bind(foxtra)(michal);
            michal = michal.AutomodMessageEmbedKeys;
            michal = michal.VOICE_CHANNEL_STATUS_OUTCOME;
            report = zuuluu.bind(foxtra)(report, michal);
            zuuluu = tangon == report;
            michal = null;
            if(zuuluu) { _fun00026_ip = 394; continue _fun00025 }
 270:
            zuuluu = 'blocked';
            if(!(zuuluu !== report)) { _fun00026_ip = 313; continue _fun00025 }
 278:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 9;
            zuuluu = verify[zuuluu];
            zuuluu = report.bind(foxtra)(zuuluu);
            zuuluu = zuuluu.t;
            backup = zuuluu.bma6cn;
            _fun00026_ip = 346; continue _fun00025;
 313:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 9;
            zuuluu = verify[zuuluu];
            zuuluu = report.bind(foxtra)(zuuluu);
            zuuluu = zuuluu.t;
            backup = zuuluu.cLQrq6;
 346:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 9;
            zuuluu = verify[zuuluu];
            zuuluu = report.bind(foxtra)(zuuluu);
            verify = zuuluu.intl;
            report = verify.format;
            zuuluu = {};
            zuuluu['channelName'] = sizing;
            zuuluu['channelHook'] = output;
            michal = report.bind(verify)(backup, zuuluu);
 394:
            if(!(tangon == michal)) { _fun00026_ip = 1034; continue _fun00025 }
 401:
            if(!(tangon == romeon)) { _fun00026_ip = 591; continue _fun00025 }
 408:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 12;
            zuuluu = verify[zuuluu];
            zuuluu = report.bind(foxtra)(zuuluu);
            zuuluu = zuuluu.AutomodDecisionOutcomeEmbedKeys;
            zuuluu = zuuluu.BLOCKED;
            if(!(golfie === zuuluu)) { _fun00026_ip = 516; continue _fun00025 }
 444:
            report = _closure1_slot0;
            output = _closure1_slot1;
            zuuluu = 9;
            verify = output[zuuluu];
            verify = report.bind(foxtra)(verify);
            backup = verify.intl;
            verify = backup.format;
            zuuluu = output[zuuluu];
            zuuluu = report.bind(foxtra)(zuuluu);
            zuuluu = zuuluu.t;
            report = zuuluu.lOIOSE;
            zuuluu = {};
            zuuluu['channelName'] = sizing;
            zuuluu['channelHook'] = kiloes;
            zuuluu = verify.bind(backup)(report, zuuluu);
            _fun00026_ip = 586; continue _fun00025;
 516:
            verify = _closure1_slot0;
            result = _closure1_slot1;
            report = 9;
            backup = result[report];
            backup = verify.bind(foxtra)(backup);
            output = backup.intl;
            backup = output.format;
            report = result[report];
            report = verify.bind(foxtra)(report);
            report = report.t;
            verify = report.IZg0VV;
            report = {};
            report['channelName'] = sizing;
            report['channelHook'] = kiloes;
            zuuluu = backup.bind(output)(verify, report);
 586:
            _fun00026_ip = 1031; continue _fun00025;
 591:
            verify = _closure1_slot0;
            backup = _closure1_slot1;
            report = 11;
            report = backup[report];
            report = verify.bind(foxtra)(report);
            report = report.AutomodInteractionCallbackTypeEmbedKeys;
            report = report.MODAL;
            if(!(option === report)) { _fun00026_ip = 634; continue _fun00025 }
 627:
            if(!(tangon == yankee)) { _fun00026_ip = 837; continue _fun00025 }
 634:
            report = _closure1_slot0;
            option = _closure1_slot1;
            tangon = 12;
            tangon = option[tangon];
            tangon = report.bind(foxtra)(tangon);
            tangon = tangon.AutomodDecisionOutcomeEmbedKeys;
            tangon = tangon.BLOCKED;
            if(!(golfie === tangon)) { _fun00026_ip = 752; continue _fun00025 }
 670:
            report = _closure1_slot0;
            backup = _closure1_slot1;
            tangon = 9;
            option = backup[tangon];
            option = report.bind(foxtra)(option);
            verify = option.intl;
            option = verify.format;
            tangon = backup[tangon];
            tangon = report.bind(foxtra)(tangon);
            tangon = tangon.t;
            report = tangon.s3tjMD;
            tangon = {};
            tangon['applicationName'] = romeon;
            tangon['channelName'] = sizing;
            tangon['channelHook'] = kiloes;
            tangon['integrationOwnerHook'] = offset;
            tangon = option.bind(verify)(report, tangon);
            _fun00026_ip = 832; continue _fun00025;
 752:
            option = _closure1_slot0;
            output = _closure1_slot1;
            report = 9;
            verify = output[report];
            verify = option.bind(foxtra)(verify);
            backup = verify.intl;
            verify = backup.format;
            report = output[report];
            report = option.bind(foxtra)(report);
            report = report.t;
            option = report.AXQufH;
            report = {};
            report['applicationName'] = romeon;
            report['channelName'] = sizing;
            report['channelHook'] = kiloes;
            report['integrationOwnerHook'] = offset;
            tangon = verify.bind(backup)(option, report);
 832:
            _fun00026_ip = 1028; continue _fun00025;
 837:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            report = 12;
            report = verify[report];
            report = option.bind(foxtra)(report);
            report = report.AutomodDecisionOutcomeEmbedKeys;
            report = report.BLOCKED;
            if(!(golfie === report)) { _fun00026_ip = 950; continue _fun00025 }
 873:
            golfie = _closure1_slot0;
            backup = _closure1_slot1;
            report = 9;
            option = backup[report];
            option = golfie.bind(foxtra)(option);
            verify = option.intl;
            option = verify.format;
            report = backup[report];
            report = golfie.bind(foxtra)(report);
            report = report.t;
            golfie = report.S3lNIS;
            report = {};
            report['applicationName'] = romeon;
            report['interactionUserHook'] = yankee;
            report['integrationOwnerHook'] = offset;
            report = option.bind(verify)(golfie, report);
            _fun00026_ip = 1025; continue _fun00025;
 950:
            golfie = _closure1_slot0;
            backup = _closure1_slot1;
            oscard = 9;
            option = backup[oscard];
            option = golfie.bind(foxtra)(option);
            verify = option.intl;
            option = verify.format;
            oscard = backup[oscard];
            oscard = golfie.bind(foxtra)(oscard);
            oscard = oscard.t;
            golfie = oscard.4xL9Sk;
            oscard = {};
            oscard['applicationName'] = romeon;
            oscard['interactionUserHook'] = yankee;
            oscard['integrationOwnerHook'] = offset;
            report = option.bind(verify)(golfie, oscard);
 1025:
            tangon = report;
 1028:
            zuuluu = tangon;
 1031:
            michal = zuuluu;
 1034:
            return michal;
 1036:
            return entity;
        }
    };
    michal['getActionHeaderText'] = report;
    report = function(argFoo) { // Original name: getQuarantineReasonString
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            oscard = 13;
            michal = michal[oscard];
            report = undefined;
            michal = tangon.bind(report)(michal);
            michal = michal.AutomodQuarantineUserMessageEmbedKeys;
            michal = michal.NICKNAME;
            if(!(michal !== zuuluu)) { _fun00028_ip = 384; continue _fun00027 }
 47:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.AutomodQuarantineUserMessageEmbedKeys;
            michal = michal.USERNAME;
            if(!(michal !== zuuluu)) { _fun00028_ip = 327; continue _fun00027 }
 83:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.AutomodQuarantineUserMessageEmbedKeys;
            michal = michal.GLOBAL_NAME;
            if(!(michal !== zuuluu)) { _fun00028_ip = 268; continue _fun00027 }
 119:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.AutomodQuarantineUserMessageEmbedKeys;
            michal = michal.CLAN_TAG;
            if(!(michal !== zuuluu)) { _fun00028_ip = 209; continue _fun00027 }
 152:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 9;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.pJQVnp;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 209:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 9;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.Rtum09;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 268:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 9;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.V9eJ8/;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 327:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 9;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.pJQVnp;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 384:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 9;
            michal = oscard[entity];
            michal = tangon.bind(report)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.t;
            entity = entity.fkBQa2;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['getQuarantineReasonString'] = report;
    report = function(argFoo) { // Original name: extractAutomodNotificationFields
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot11;
            verify = _closure1_slot0;
            foxtra = _closure1_slot1;
            entity = 14;
            tangon = foxtra[entity];
            michal = undefined;
            tangon = verify.bind(michal)(tangon);
            tangon = tangon.AutomodNotificationEmbedKeys;
            tangon = tangon.NOTIFICATION_TYPE;
            tangon = zuuluu.bind(michal)(report, tangon);
            oscard = foxtra[entity];
            oscard = verify.bind(michal)(oscard);
            oscard = oscard.AutomodNotificationEmbedKeys;
            oscard = oscard.JOIN_ATTEMPTS;
            yankee = zuuluu.bind(michal)(report, oscard);
            oscard = foxtra[entity];
            oscard = verify.bind(michal)(oscard);
            oscard = oscard.AutomodNotificationEmbedKeys;
            oscard = oscard.RAID_DATETIME;
            romeon = zuuluu.bind(michal)(report, oscard);
            oscard = foxtra[entity];
            oscard = verify.bind(michal)(oscard);
            oscard = oscard.AutomodNotificationEmbedKeys;
            oscard = oscard.DMS_SENT;
            offset = zuuluu.bind(michal)(report, oscard);
            oscard = foxtra[entity];
            oscard = verify.bind(michal)(oscard);
            oscard = oscard.AutomodNotificationEmbedKeys;
            oscard = oscard.RAID_TYPE;
            option = zuuluu.bind(michal)(report, oscard);
            oscard = foxtra[entity];
            oscard = verify.bind(michal)(oscard);
            oscard = oscard.AutomodNotificationEmbedKeys;
            oscard = oscard.RESOLVED_REASON;
            golfie = zuuluu.bind(michal)(report, oscard);
            oscard = foxtra[entity];
            oscard = verify.bind(michal)(oscard);
            oscard = oscard.AutomodNotificationEmbedKeys;
            oscard = oscard.DECISION_ID;
            oscard = zuuluu.bind(michal)(report, oscard);
            entity = foxtra[entity];
            entity = verify.bind(michal)(entity);
            entity = entity.AutomodNotificationEmbedKeys;
            entity = entity.SUSPICIOUS_MENTION_ACTIVITY_UNTIL;
            report = zuuluu.bind(michal)(report, entity);
            entity = {};
            zuuluu = null;
            foxtra = zuuluu == tangon;
            verify = null;
            if(foxtra) { _fun00030_ip = 255; continue _fun00029 }
 252:
            verify = tangon;
 255:
            foxtra = zuuluu != verify;
            tangon = undefined;
            if(!foxtra) { _fun00030_ip = 267; continue _fun00029 }
 264:
            tangon = verify;
 267:
            entity['notificationType'] = tangon;
            verify = zuuluu != yankee;
            tangon = undefined;
            if(!verify) { _fun00030_ip = 294; continue _fun00029 }
 281:
            verify = global;
            verify = verify.parseInt;
            tangon = verify.bind(michal)(yankee);
 294:
            entity['joinAttempts'] = tangon;
            verify = zuuluu != romeon;
            tangon = undefined;
            if(!verify) { _fun00030_ip = 339; continue _fun00029 }
 308:
            verify = global;
            verify = verify.Date;
            yankee = verify.prototype;
            yankee = Object.create(yankee, {constructor: {value: verify}});
            sizing = yankee;
            kiloes = romeon;
            verify = new sizing[verify](kiloes, backup);
            tangon = verify instanceof Object ? verify : yankee;
 339:
            entity['raidDatetime'] = tangon;
            verify = zuuluu != offset;
            tangon = undefined;
            if(!verify) { _fun00030_ip = 366; continue _fun00029 }
 353:
            verify = global;
            verify = verify.parseInt;
            tangon = verify.bind(michal)(offset);
 366:
            entity['dmsSent'] = tangon;
            verify = zuuluu != option;
            tangon = undefined;
            if(!verify) { _fun00030_ip = 383; continue _fun00029 }
 380:
            tangon = option;
 383:
            entity['raidType'] = tangon;
            option = zuuluu != golfie;
            tangon = undefined;
            if(!option) { _fun00030_ip = 400; continue _fun00029 }
 397:
            tangon = golfie;
 400:
            entity['resolvedReason'] = tangon;
            golfie = zuuluu != oscard;
            tangon = undefined;
            if(!golfie) { _fun00030_ip = 417; continue _fun00029 }
 414:
            tangon = oscard;
 417:
            entity['decisionId'] = tangon;
            zuuluu = zuuluu != report;
            michal = undefined;
            if(!zuuluu) { _fun00030_ip = 462; continue _fun00029 }
 431:
            zuuluu = global;
            zuuluu = zuuluu.Date;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            sizing = tangon;
            kiloes = report;
            zuuluu = new sizing[zuuluu](kiloes, backup);
            michal = zuuluu instanceof Object ? zuuluu : tangon;
 462:
            entity['suspiciousMentionActivityUntil'] = michal;
            return entity;
        }
    };
    michal['extractAutomodNotificationFields'] = report;
    michal['extractAutomodMessageFields'] = tangon;
    tangon = function(argFoo) { // Original name: useAutomodAlertActions
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00032_ip = 43; continue _fun00031 }
 9:
            zuuluu = _closure1_slot20;
            michal = undefined;
            michal = zuuluu.bind(michal)(tangon);
            zuuluu = michal.alertActionsExecution;
            tangon = entity != zuuluu;
            michal = null;
            if(!tangon) { _fun00032_ip = 41; continue _fun00031 }
 38:
            michal = zuuluu;
 41:
            return michal;
 43:
            return entity;
        }
    };
    michal['useAutomodAlertActions'] = tangon;
    tangon = function(argFoo) { // Original name: getRaidAlertResolveCTAText
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00034_ip = 361; continue _fun00033 }
 12:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            oscard = 17;
            michal = michal[oscard];
            report = undefined;
            michal = tangon.bind(report)(michal);
            michal = michal.RaidResolutionType;
            michal = michal.LEGITIMATE_ACTIVITY;
            if(!(michal !== zuuluu)) { _fun00034_ip = 302; continue _fun00033 }
 56:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.RaidResolutionType;
            michal = michal.DM_SPAM;
            if(!(michal !== zuuluu)) { _fun00034_ip = 243; continue _fun00033 }
 92:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.RaidResolutionType;
            michal = michal.JOIN_RAID;
            if(!(michal !== zuuluu)) { _fun00034_ip = 184; continue _fun00033 }
 125:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 9;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.GPg6JC;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 184:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 9;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.qhaRbG;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 243:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 9;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.j5V0io;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 302:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 9;
            michal = oscard[entity];
            michal = tangon.bind(report)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.t;
            entity = entity.riQ+HB;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 361:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 9;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.Gh3A0N;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['getRaidAlertResolveCTAText'] = tangon;
    zuuluu = function(argFoo) { // Original name: getUserIdOfAutomodAction
        tangon = _closure1_slot11;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 14;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.AutomodNotificationEmbedKeys;
        michal = entity.ACTION_BY_USER_ID;
        entity = argFoo;
        entity = tangon.bind(zuuluu)(entity, michal);
        return entity;
    };
    michal['getUserIdOfAutomodAction'] = zuuluu;
    michal['IS_BACKWARDS_COMPAT_RAID_TYPE'] = entity;
    return entity;
})();