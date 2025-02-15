// app/modules/self_mod/ChannelSafetyWarningsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun79429: for(var _fun79429_ip = 0; ; ) switch(_fun79429_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun79429_ip = 51; continue _fun79429 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun79429_ip = 92; continue _fun79429;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun79429_ip = 71; continue _fun79429 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun79430: for(var _fun79430_ip = 0; ; ) switch(_fun79430_ip) {
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
            _fun79430_ip = 76; continue _fun79430;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: processChannel
        _fun79433: for(var _fun79433_ip = 0; ; ) switch(_fun79433_ip) {
 0:
            entity = argFoo;
            mike = entity.safetyWarnings;
            tango = null;
            if(!(tango != mike)) { _fun79433_ip = 90; continue _fun79433 }
 15:
            oscar = _closure1_slot9;
            zulu = entity.id;
            oscar[zulu] = mike;
            oscar = mike.some;
            zulu = function(argFoo) {
                _fun79434: for(var _fun79434_ip = 0; ; ) switch(_fun79434_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.type;
                    entity = _closure1_slot7;
                    entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                    entity = tango === entity;
                    if(entity) { _fun79434_ip = 47; continue _fun79434 }
 28:
                    report = zulu.type;
                    tango = _closure1_slot7;
                    tango = tango.INAPPROPRIATE_CONVERSATION_TIER_2;
                    entity = report === tango;
 47:
                    if(!entity) { _fun79434_ip = 62; continue _fun79434 }
 50:
                    report = zulu.dismiss_timestamp;
                    tango = null;
                    entity = tango != report;
 62:
                    if(!entity) { _fun79434_ip = 139; continue _fun79434 }
 65:
                    golf = zulu.dismiss_timestamp;
                    tango = global;
                    zulu = tango.Date;
                    report = zulu.prototype;
                    report = Object.create(report, {constructor: {value: zulu}});
                    options = report;
                    zulu = new options[zulu](golf, oscar);
                    report = zulu instanceof Object ? zulu : report;
                    zulu = report.getTime;
                    zulu = zulu.bind(report)();
                    report = tango.Date;
                    tango = report.now;
                    tango = tango.bind(report)();
                    mike = _closure1_slot6;
                    mike = tango - mike;
                    mike = zulu > mike;
                    entity = !mike;
 139:
                    return entity;
                }
            };
            zulu = oscar.bind(mike)(zulu);
            oscar = _closure1_slot10;
            if(zulu) { _fun79433_ip = 75; continue _fun79433 }
 58:
            report = oscar.delete;
            zulu = entity.id;
            zulu = report.bind(oscar)(zulu);
            _fun79433_ip = 90; continue _fun79433;
 75:
            report = oscar.add;
            zulu = entity.id;
            zulu = report.bind(oscar)(zulu);
 90:
            if(!(tango == mike)) { _fun79433_ip = 146; continue _fun79433 }
 94:
            report = _closure1_slot9;
            zulu = entity.id;
            zulu = report[zulu];
            if(!(tango != zulu)) { _fun79433_ip = 127; continue _fun79433 }
 114:
            tango = _closure1_slot9;
            zulu = entity.id;
            zulu = delete tango[zulu];
 127:
            zulu = _closure1_slot10;
            mike = zulu.delete;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
 146:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    offset = function() { // Original name: handleConnectionOpen
        mike = {};
        _closure1_slot9 = mike;
        mike = global;
        zulu = mike.Object;
        mike = zulu.values;
        tango = _closure1_slot5;
        entity = tango.getMutablePrivateChannels;
        entity = entity.bind(tango)();
        zulu = mike.bind(zulu)(entity);
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot13;
            entity = undefined;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    report = global;
    verify = report.Object;
    tango = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(verify)(zulu, entity, mike);
    romeo = 0;
    mike = golf[romeo];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot0 = mike;
    yankee = 1;
    mike = golf[yankee];
    mike = options.bind(entity)(mike);
    var _closure1_slot1 = mike;
    backup = 2;
    mike = golf[backup];
    mike = options.bind(entity)(mike);
    var _closure1_slot2 = mike;
    foxtrot = 3;
    mike = golf[foxtrot];
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    verify = 4;
    mike = golf[verify];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    tango = 5;
    mike = golf[tango];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 6;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    mike = mike.Millis;
    mike = mike.SECOND;
    mike = tango * mike;
    var _closure1_slot6 = mike;
    tango = {};
    tango['STRANGER_DANGER'] = yankee;
    mike = 'STRANGER_DANGER';
    tango[yankee] = mike;
    tango['INAPPROPRIATE_CONVERSATION_TIER_1'] = backup;
    mike = 'INAPPROPRIATE_CONVERSATION_TIER_1';
    tango[backup] = mike;
    tango['INAPPROPRIATE_CONVERSATION_TIER_2'] = foxtrot;
    mike = 'INAPPROPRIATE_CONVERSATION_TIER_2';
    tango[foxtrot] = mike;
    tango['LIKELY_ATO'] = verify;
    mike = 'LIKELY_ATO';
    tango[verify] = mike;
    var _closure1_slot7 = tango;
    mike = {};
    mike['UPVOTE'] = romeo;
    verify = 'UPVOTE';
    mike[romeo] = verify;
    mike['DOWNVOTE'] = yankee;
    verify = 'DOWNVOTE';
    mike[yankee] = verify;
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
    report = golf[report];
    report = options.bind(entity)(report);
    verify = report.Store;
    report = function(argFoo) {
        tango = function() { // Original name: ChannelSafetyWarningsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = this;
            mike = zulu.waitFor;
            entity = _closure1_slot5;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getChannelSafetyWarning';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun79440: for(var _fun79440_ip = 0; ; ) switch(_fun79440_ip) {
 0:
                entity = argBar;
                var _closure3_slot0 = entity;
                zulu = _closure1_slot9;
                entity = argFoo;
                tango = zulu[entity];
                entity = null;
                zulu = entity == tango;
                entity = undefined;
                if(zulu) { _fun79440_ip = 51; continue _fun79440 }
 34:
                zulu = tango.find;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.id;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 51:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getChannelSafetyWarnings';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun79442: for(var _fun79442_ip = 0; ; ) switch(_fun79442_ip) {
 0:
                zulu = _closure1_slot9;
                entity = argFoo;
                entity = zulu[entity];
                zulu = null;
                if(!(zulu == entity)) { _fun79442_ip = 24; continue _fun79442 }
 20:
                entity = _closure1_slot8;
 24:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'hasShownInitialTooltipForChannel';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot10;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = report.bind(entity)(verify);
    report = 8;
    report = golf[report];
    output = options.bind(entity)(report);
    report = {};
    yankee = function(argFoo) { // Original name: handleChannelCreate
        zulu = _closure1_slot13;
        entity = argFoo;
        mike = entity.channel;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    report['CHANNEL_CREATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleChannelDelete
        _fun79445: for(var _fun79445_ip = 0; ; ) switch(_fun79445_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            tango = _closure1_slot9;
            zulu = entity.id;
            tango = tango[zulu];
            zulu = null;
            if(!(zulu != tango)) { _fun79445_ip = 43; continue _fun79445 }
 30:
            tango = _closure1_slot9;
            zulu = entity.id;
            zulu = delete tango[zulu];
 43:
            zulu = _closure1_slot10;
            mike = zulu.delete;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        }
    };
    report['CHANNEL_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleChannelUpdates
        entity = argFoo;
        zulu = entity.channels;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot13;
            entity = undefined;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    report['CHANNEL_UPDATES'] = yankee;
    report['CONNECTION_OPEN'] = offset;
    report['CONNECTION_OPEN_SUPPLEMENTAL'] = offset;
    offset = function(argFoo) { // Original name: handleChannelSafetyWarningFeedback
        _fun79448: for(var _fun79448_ip = 0; ; ) switch(_fun79448_ip) {
 0:
            mike = argFoo;
            zulu = mike.channelId;
            tango = mike.warningId;
            var _closure2_slot0 = tango;
            mike = mike.feedbackType;
            var _closure2_slot1 = mike;
            tango = _closure1_slot9;
            report = tango[zulu];
            tango = null;
            if(!(tango != report)) { _fun79448_ip = 72; continue _fun79448 }
 47:
            mike = _closure1_slot9;
            tango = report.map;
            entity = function(argFoo) {
                _fun79449: for(var _fun79449_ip = 0; ; ) switch(_fun79449_ip) {
 0:
                    tango = argFoo;
                    report = tango.id;
                    mike = _closure2_slot0;
                    entity = tango;
                    if(!(report === mike)) { _fun79449_ip = 50; continue _fun79449 }
 22:
                    mike = {};
                    golf = mike;
                    oscar = tango;
                    tango = copyDataProperties(golf, oscar);
                    tango = _closure2_slot1;
                    zulu = 'feedback_type';
                    mike[zulu] = tango;
                    entity = mike;
 50:
                    return entity;
                }
            };
            entity = tango.bind(report)(entity);
            mike[zulu] = entity;
 72:
            entity = undefined;
            return entity;
        }
    };
    report['CHANNEL_SAFETY_WARNING_FEEDBACK'] = offset;
    offset = function(argFoo) { // Original name: handleClearChannelSafetyWarnings
        _fun79450: for(var _fun79450_ip = 0; ; ) switch(_fun79450_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            mike = _closure1_slot9;
            report = mike[zulu];
            tango = _closure1_slot10;
            mike = tango.delete;
            mike = mike.bind(tango)(zulu);
            mike = null;
            if(!(mike != report)) { _fun79450_ip = 66; continue _fun79450 }
 39:
            mike = _closure1_slot9;
            tango = report.map;
            entity = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = undefined;
                mike = 'dismiss_timestamp';
                entity[mike] = zulu;
                return entity;
            };
            entity = tango.bind(report)(entity);
            mike[zulu] = entity;
 66:
            entity = undefined;
            return entity;
        }
    };
    report['CLEAR_CHANNEL_SAFETY_WARNINGS'] = offset;
    offset = function(argFoo) { // Original name: handleDismissChannelSafetyWarnings
        _fun79452: for(var _fun79452_ip = 0; ; ) switch(_fun79452_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            entity = entity.warningIds;
            var _closure2_slot0 = entity;
            entity = undefined;
            var _closure2_slot1 = entity;
            report = _closure1_slot9;
            oscar = report[tango];
            report = null;
            if(!(report != oscar)) { _fun79452_ip = 110; continue _fun79452 }
 43:
            report = global;
            report = report.Date;
            golf = report.prototype;
            golf = Object.create(golf, {constructor: {value: report}});
            verify = golf;
            report = new verify[report](options);
            golf = report instanceof Object ? report : golf;
            report = golf.toISOString;
            report = report.bind(golf)();
            _closure2_slot1 = report;
            zulu = _closure1_slot9;
            report = oscar.map;
            mike = function(argFoo) {
                _fun79453: for(var _fun79453_ip = 0; ; ) switch(_fun79453_ip) {
 0:
                    tango = argFoo;
                    report = _closure2_slot0;
                    mike = report.includes;
                    entity = tango.id;
                    mike = mike.bind(report)(entity);
                    entity = tango;
                    if(!mike) { _fun79453_ip = 59; continue _fun79453 }
 31:
                    mike = {};
                    golf = mike;
                    oscar = tango;
                    tango = copyDataProperties(golf, oscar);
                    tango = _closure2_slot1;
                    zulu = 'dismiss_timestamp';
                    mike[zulu] = tango;
                    entity = mike;
 59:
                    return entity;
                }
            };
            mike = report.bind(oscar)(mike);
            zulu[tango] = mike;
 110:
            return entity;
        }
    };
    report['DISMISS_CHANNEL_SAFETY_WARNINGS'] = offset;
    oscar = function(argFoo) { // Original name: handleAcknowledgeChannelSafetyWarningTooltip
        entity = argFoo;
        zulu = entity.channelId;
        mike = _closure1_slot10;
        entity = mike.add;
        entity = entity.bind(mike)(zulu);
        entity = undefined;
        return entity;
    };
    report['ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP'] = oscar;
    oscar = verify.prototype;
    oscar = Object.create(oscar, {constructor: {value: verify}});
    result = oscar;
    sizing = report;
    report = new result[verify](output, sizing, kilo);
    report = report instanceof Object ? report : oscar;
    oscar = 9;
    golf = golf[oscar];
    oscar = argBar;
    options = oscar.bind(entity)(golf);
    golf = options.fileFinishedImporting;
    oscar = 'modules/self_mod/ChannelSafetyWarningsStore.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['SafetyWarningTypes'] = tango;
    zulu['SafetyWarningFeedbackTypes'] = mike;
    return entity;
})();