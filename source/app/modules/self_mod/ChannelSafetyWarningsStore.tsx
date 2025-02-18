// app/modules/self_mod/ChannelSafetyWarningsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot12;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: processChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.safetyWarnings;
            tangon = null;
            if(!(tangon != michal)) { _fun00006_ip = 88; continue _fun00005 }
 15:
            oscard = _closure1_slot9;
            zuuluu = entity.id;
            oscard[zuuluu] = michal;
            oscard = michal.some;
            zuuluu = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.type;
                    entity = _closure1_slot7;
                    entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                    entity = tangon === entity;
                    if(entity) { _fun00008_ip = 47; continue _fun00007 }
 28:
                    report = zuuluu.type;
                    tangon = _closure1_slot7;
                    tangon = tangon.INAPPROPRIATE_CONVERSATION_TIER_2;
                    entity = report === tangon;
 47:
                    if(!entity) { _fun00008_ip = 62; continue _fun00007 }
 50:
                    report = zuuluu.dismiss_timestamp;
                    tangon = null;
                    entity = tangon != report;
 62:
                    if(!entity) { _fun00008_ip = 139; continue _fun00007 }
 65:
                    golfie = zuuluu.dismiss_timestamp;
                    tangon = global;
                    zuuluu = tangon.Date;
                    report = zuuluu.prototype;
                    report = Object.create(report, {constructor: {value: zuuluu}});
                    option = report;
                    zuuluu = new option[zuuluu](golfie, oscard);
                    report = zuuluu instanceof Object ? zuuluu : report;
                    zuuluu = report.getTime;
                    zuuluu = zuuluu.bind(report)();
                    report = tangon.Date;
                    tangon = report.now;
                    tangon = tangon.bind(report)();
                    michal = _closure1_slot6;
                    michal = tangon - michal;
                    michal = zuuluu > michal;
                    entity = !michal;
 139:
                    return entity;
                }
            };
            zuuluu = oscard.bind(michal)(zuuluu);
            oscard = _closure1_slot10;
            if(zuuluu) { _fun00006_ip = 73; continue _fun00005 }
 56:
            report = oscard.delete;
            zuuluu = entity.id;
            zuuluu = report.bind(oscard)(zuuluu);
            _fun00006_ip = 88; continue _fun00005;
 73:
            report = oscard.add;
            zuuluu = entity.id;
            zuuluu = report.bind(oscard)(zuuluu);
 88:
            if(!(tangon == michal)) { _fun00006_ip = 144; continue _fun00005 }
 92:
            report = _closure1_slot9;
            zuuluu = entity.id;
            zuuluu = report[zuuluu];
            if(!(tangon != zuuluu)) { _fun00006_ip = 125; continue _fun00005 }
 112:
            tangon = _closure1_slot9;
            zuuluu = entity.id;
            zuuluu = delete tangon[zuuluu];
 125:
            zuuluu = _closure1_slot10;
            michal = zuuluu.delete;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
 144:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    offset = function() { // Original name: handleConnectionOpen
        michal = {};
        _closure1_slot9 = michal;
        michal = global;
        zuuluu = michal.Object;
        michal = zuuluu.values;
        tangon = _closure1_slot5;
        entity = tangon.getMutablePrivateChannels;
        entity = entity.bind(tangon)();
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = _closure1_slot13;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    report = global;
    verify = report.Object;
    tangon = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(verify)(zuuluu, entity, michal);
    romeon = 0;
    michal = golfie[romeon];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot0 = michal;
    yankee = 1;
    michal = golfie[yankee];
    michal = option.bind(entity)(michal);
    var _closure1_slot1 = michal;
    backup = 2;
    michal = golfie[backup];
    michal = option.bind(entity)(michal);
    var _closure1_slot2 = michal;
    foxtra = 3;
    michal = golfie[foxtra];
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    verify = 4;
    michal = golfie[verify];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    tangon = 5;
    michal = golfie[tangon];
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 6;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    michal = michal.Millis;
    michal = michal.SECOND;
    michal = tangon * michal;
    var _closure1_slot6 = michal;
    tangon = {};
    tangon['STRANGER_DANGER'] = yankee;
    michal = 'STRANGER_DANGER';
    tangon[yankee] = michal;
    tangon['INAPPROPRIATE_CONVERSATION_TIER_1'] = backup;
    michal = 'INAPPROPRIATE_CONVERSATION_TIER_1';
    tangon[backup] = michal;
    tangon['INAPPROPRIATE_CONVERSATION_TIER_2'] = foxtra;
    michal = 'INAPPROPRIATE_CONVERSATION_TIER_2';
    tangon[foxtra] = michal;
    tangon['LIKELY_ATO'] = verify;
    michal = 'LIKELY_ATO';
    tangon[verify] = michal;
    var _closure1_slot7 = tangon;
    michal = {};
    michal['UPVOTE'] = romeon;
    verify = 'UPVOTE';
    michal[romeon] = verify;
    michal['DOWNVOTE'] = yankee;
    verify = 'DOWNVOTE';
    michal[yankee] = verify;
    verify = new Array(0);
    var _closure1_slot8 = verify;
    verify = {};
    var _closure1_slot9 = verify;
    report = report.Set;
    verify = report.prototype;
    verify = Object.create(verify, {constructor: {value: report}});
    result = verify;
    report = new result[report](output);
    report = report instanceof Object ? report : verify;
    var _closure1_slot10 = report;
    report = 7;
    report = golfie[report];
    report = option.bind(entity)(report);
    verify = report.Store;
    report = function(argFoo) {
        tangon = function() { // Original name: ChannelSafetyWarningsStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot11;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.waitFor;
            entity = _closure1_slot5;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'getChannelSafetyWarning';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argBar;
                var _closure3_slot0 = entity;
                zuuluu = _closure1_slot9;
                entity = argFoo;
                tangon = zuuluu[entity];
                entity = null;
                zuuluu = entity == tangon;
                entity = undefined;
                if(zuuluu) { _fun00010_ip = 49; continue _fun00009 }
 34:
                zuuluu = tangon.find;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.id;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal);
 49:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getChannelSafetyWarnings';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = _closure1_slot9;
                entity = argFoo;
                entity = zuuluu[entity];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00012_ip = 24; continue _fun00011 }
 20:
                entity = _closure1_slot8;
 24:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'hasShownInitialTooltipForChannel';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot10;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = report.bind(entity)(verify);
    report = 8;
    report = golfie[report];
    output = option.bind(entity)(report);
    report = {};
    yankee = function(argFoo) { // Original name: handleChannelCreate
        zuuluu = _closure1_slot13;
        entity = argFoo;
        michal = entity.channel;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    report['CHANNEL_CREATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleChannelDelete
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            tangon = _closure1_slot9;
            zuuluu = entity.id;
            tangon = tangon[zuuluu];
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00014_ip = 43; continue _fun00013 }
 30:
            tangon = _closure1_slot9;
            zuuluu = entity.id;
            zuuluu = delete tangon[zuuluu];
 43:
            zuuluu = _closure1_slot10;
            michal = zuuluu.delete;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        }
    };
    report['CHANNEL_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleChannelUpdates
        entity = argFoo;
        zuuluu = entity.channels;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = _closure1_slot13;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    report['CHANNEL_UPDATES'] = yankee;
    report['CONNECTION_OPEN'] = offset;
    report['CONNECTION_OPEN_SUPPLEMENTAL'] = offset;
    offset = function(argFoo) { // Original name: handleChannelSafetyWarningFeedback
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.channelId;
            tangon = michal.warningId;
            var _closure2_slot0 = tangon;
            michal = michal.feedbackType;
            var _closure2_slot1 = michal;
            tangon = _closure1_slot9;
            report = tangon[zuuluu];
            tangon = null;
            if(!(tangon != report)) { _fun00016_ip = 70; continue _fun00015 }
 47:
            michal = _closure1_slot9;
            tangon = report.map;
            entity = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = argFoo;
                    report = tangon.id;
                    michal = _closure2_slot0;
                    entity = tangon;
                    if(!(report === michal)) { _fun00018_ip = 50; continue _fun00017 }
 22:
                    michal = {};
                    golfie = michal;
                    oscard = tangon;
                    tangon = copyDataProperties(golfie, oscard);
                    tangon = _closure2_slot1;
                    zuuluu = 'feedback_type';
                    michal[zuuluu] = tangon;
                    entity = michal;
 50:
                    return entity;
                }
            };
            entity = tangon.bind(report)(entity);
            michal[zuuluu] = entity;
 70:
            entity = undefined;
            return entity;
        }
    };
    report['CHANNEL_SAFETY_WARNING_FEEDBACK'] = offset;
    offset = function(argFoo) { // Original name: handleClearChannelSafetyWarnings
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            michal = _closure1_slot9;
            report = michal[zuuluu];
            tangon = _closure1_slot10;
            michal = tangon.delete;
            michal = michal.bind(tangon)(zuuluu);
            michal = null;
            if(!(michal != report)) { _fun00020_ip = 64; continue _fun00019 }
 39:
            michal = _closure1_slot9;
            tangon = report.map;
            entity = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = undefined;
                michal = 'dismiss_timestamp';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = tangon.bind(report)(entity);
            michal[zuuluu] = entity;
 64:
            entity = undefined;
            return entity;
        }
    };
    report['CLEAR_CHANNEL_SAFETY_WARNINGS'] = offset;
    offset = function(argFoo) { // Original name: handleDismissChannelSafetyWarnings
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            entity = entity.warningIds;
            var _closure2_slot0 = entity;
            entity = undefined;
            var _closure2_slot1 = entity;
            report = _closure1_slot9;
            oscard = report[tangon];
            report = null;
            if(!(report != oscard)) { _fun00022_ip = 108; continue _fun00021 }
 43:
            report = global;
            report = report.Date;
            golfie = report.prototype;
            golfie = Object.create(golfie, {constructor: {value: report}});
            verify = golfie;
            report = new verify[report](option);
            golfie = report instanceof Object ? report : golfie;
            report = golfie.toISOString;
            report = report.bind(golfie)();
            _closure2_slot1 = report;
            zuuluu = _closure1_slot9;
            report = oscard.map;
            michal = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    tangon = argFoo;
                    report = _closure2_slot0;
                    michal = report.includes;
                    entity = tangon.id;
                    michal = michal.bind(report)(entity);
                    entity = tangon;
                    if(!michal) { _fun00024_ip = 59; continue _fun00023 }
 31:
                    michal = {};
                    golfie = michal;
                    oscard = tangon;
                    tangon = copyDataProperties(golfie, oscard);
                    tangon = _closure2_slot1;
                    zuuluu = 'dismiss_timestamp';
                    michal[zuuluu] = tangon;
                    entity = michal;
 59:
                    return entity;
                }
            };
            michal = report.bind(oscard)(michal);
            zuuluu[tangon] = michal;
 108:
            return entity;
        }
    };
    report['DISMISS_CHANNEL_SAFETY_WARNINGS'] = offset;
    oscard = function(argFoo) { // Original name: handleAcknowledgeChannelSafetyWarningTooltip
        entity = argFoo;
        zuuluu = entity.channelId;
        michal = _closure1_slot10;
        entity = michal.add;
        entity = entity.bind(michal)(zuuluu);
        entity = undefined;
        return entity;
    };
    report['ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP'] = oscard;
    oscard = verify.prototype;
    oscard = Object.create(oscard, {constructor: {value: verify}});
    result = oscard;
    sizing = report;
    report = new result[verify](output, sizing, kiloes);
    report = report instanceof Object ? report : oscard;
    oscard = 9;
    golfie = golfie[oscard];
    oscard = argBar;
    option = oscard.bind(entity)(golfie);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/self_mod/ChannelSafetyWarningsStore.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['SafetyWarningTypes'] = tangon;
    zuuluu['SafetyWarningFeedbackTypes'] = michal;
    return entity;
})();