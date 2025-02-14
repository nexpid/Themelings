// app/modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun124491: for(var _fun124491_ip = 0; ; ) switch(_fun124491_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun124491_ip = 51; continue _fun124491 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun124491_ip = 92; continue _fun124491;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun124491_ip = 71; continue _fun124491 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun124492: for(var _fun124492_ip = 0; ; ) switch(_fun124492_ip) {
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
            _fun124492_ip = 76; continue _fun124492;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: scheduleNextNotification
        _fun124495: for(var _fun124495_ip = 0; ; ) switch(_fun124495_ip) {
 0:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 6;
            tango = tango[entity];
            entity = undefined;
            golf = report.bind(entity)(tango);
            oscar = golf.getCurrentConfig;
            report = {};
            tango = 'MessageRemindersNotificationManager';
            report['location'] = tango;
            tango = {};
            options = false;
            tango['autoTrackExposure'] = options;
            tango = oscar.bind(golf)(report, tango);
            tango = tango.enabled;
            if(!tango) { _fun124495_ip = 321; continue _fun124495 }
 71:
            report = _closure1_slot8;
            tango = null;
            if(!(tango != report)) { _fun124495_ip = 98; continue _fun124495 }
 81:
            report = global;
            oscar = report.clearTimeout;
            report = _closure1_slot8;
            report = oscar.bind(entity)(report);
 98:
            oscar = _closure1_slot7;
            report = oscar.getMessageReminders;
            golf = report.bind(oscar)();
            oscar = golf.find;
            report = function(argFoo) {
                _fun124496: for(var _fun124496_ip = 0; ; ) switch(_fun124496_ip) {
 0:
                    mike = argFoo;
                    entity = mike.saveData;
                    zulu = entity.dueAt;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun124496_ip = 68; continue _fun124496 }
 24:
                    mike = mike.saveData;
                    zulu = mike.dueAt;
                    mike = global;
                    mike = mike.Date;
                    tango = mike.prototype;
                    tango = Object.create(tango, {constructor: {value: mike}});
                    report = tango;
                    mike = new report[mike](tango);
                    mike = mike instanceof Object ? mike : tango;
                    entity = zulu > mike;
 68:
                    return entity;
                }
            };
            report = oscar.bind(golf)(report);
            var _closure2_slot0 = report;
            golf = tango == report;
            oscar = undefined;
            if(golf) { _fun124495_ip = 165; continue _fun124495 }
 144:
            golf = report.saveData;
            options = tango == golf;
            oscar = undefined;
            if(options) { _fun124495_ip = 165; continue _fun124495 }
 159:
            oscar = golf.dueAt;
 165:
            if(!(tango == oscar)) { _fun124495_ip = 178; continue _fun124495 }
 169:
            _closure1_slot8 = tango;
            _fun124495_ip = 321; continue _fun124495;
 178:
            tango = global;
            golf = tango.Date;
            oscar = golf.now;
            golf = oscar.bind(golf)();
            options = _closure1_slot0;
            verify = _closure1_slot1;
            oscar = 8;
            oscar = verify[oscar];
            oscar = options.bind(entity)(oscar);
            oscar = oscar.Millis;
            oscar = oscar.WEEK;
            golf = golf + oscar;
            oscar = report.saveData;
            options = oscar.dueAt;
            oscar = options.getTime;
            oscar = oscar.bind(options)();
            if(!(!(oscar > golf))) { _fun124495_ip = 321; continue _fun124495 }
 257:
            report = report.saveData;
            oscar = report.dueAt;
            report = oscar.getTime;
            oscar = report.bind(oscar)();
            golf = tango.Date;
            report = golf.now;
            report = report.bind(golf)();
            report = oscar - report;
            tango = tango.setTimeout;
            mike = function() {
                _fun124497: for(var _fun124497_ip = 0; ; ) switch(_fun124497_ip) {
 0:
                    oscar = _closure2_slot0;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    entity = 6;
                    zulu = zulu[entity];
                    entity = undefined;
                    golf = tango.bind(entity)(zulu);
                    report = golf.getCurrentConfig;
                    tango = {};
                    zulu = 'MessageRemindersNotificationManager';
                    tango['location'] = zulu;
                    zulu = {};
                    options = false;
                    zulu['autoTrackExposure'] = options;
                    zulu = report.bind(golf)(tango, zulu);
                    zulu = zulu.enabled;
                    if(!zulu) { _fun124497_ip = 126; continue _fun124497 }
 73:
                    tango = _closure1_slot0;
                    report = _closure1_slot1;
                    zulu = 7;
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'MESSAGE_REMINDER_DUE';
                    zulu['type'] = golf;
                    zulu['savedMessage'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    mike = _closure1_slot11;
                    mike = mike.bind(entity)();
 126:
                    return entity;
                }
            };
            mike = tango.bind(entity)(mike, report);
            _closure1_slot8 = mike;
 321:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = null;
    var _closure1_slot8 = tango;
    tango = 9;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: MessageRemindersNotificationManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot9;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = {};
            tango = function() { // Original name: SAVED_MESSAGES_UPDATE
                mike = _closure3_slot0;
                entity = mike.handleUpdates;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['SAVED_MESSAGES_UPDATE'] = tango;
            tango = function() { // Original name: SAVED_MESSAGE_CREATE
                mike = _closure3_slot0;
                entity = mike.handleUpdates;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['SAVED_MESSAGE_CREATE'] = tango;
            tango = function() { // Original name: SAVED_MESSAGE_DELETE
                mike = _closure3_slot0;
                entity = mike.handleUpdates;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['SAVED_MESSAGE_DELETE'] = tango;
            entity['actions'] = zulu;
            mike = function() {
                mike = _closure1_slot11;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            entity['handleUpdates'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot6;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot2;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();