// app/modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot10;
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
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: scheduleNextNotification
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 6;
            tangon = tangon[entity];
            entity = undefined;
            golfie = report.bind(entity)(tangon);
            oscard = golfie.getCurrentConfig;
            report = {};
            tangon = 'MessageRemindersNotificationManager';
            report['location'] = tangon;
            tangon = {};
            option = false;
            tangon['autoTrackExposure'] = option;
            tangon = oscard.bind(golfie)(report, tangon);
            tangon = tangon.enabled;
            if(!tangon) { _fun00006_ip = 321; continue _fun00005 }
 71:
            report = _closure1_slot8;
            tangon = null;
            if(!(tangon != report)) { _fun00006_ip = 98; continue _fun00005 }
 81:
            report = global;
            oscard = report.clearTimeout;
            report = _closure1_slot8;
            report = oscard.bind(entity)(report);
 98:
            oscard = _closure1_slot7;
            report = oscard.getMessageReminders;
            golfie = report.bind(oscard)();
            oscard = golfie.find;
            report = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = argFoo;
                    entity = michal.saveData;
                    zuuluu = entity.dueAt;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00008_ip = 68; continue _fun00007 }
 24:
                    michal = michal.saveData;
                    zuuluu = michal.dueAt;
                    michal = global;
                    michal = michal.Date;
                    tangon = michal.prototype;
                    tangon = Object.create(tangon, {constructor: {value: michal}});
                    report = tangon;
                    michal = new report[michal](tangon);
                    michal = michal instanceof Object ? michal : tangon;
                    entity = zuuluu > michal;
 68:
                    return entity;
                }
            };
            report = oscard.bind(golfie)(report);
            var _closure2_slot0 = report;
            golfie = tangon == report;
            oscard = undefined;
            if(golfie) { _fun00006_ip = 165; continue _fun00005 }
 144:
            golfie = report.saveData;
            option = tangon == golfie;
            oscard = undefined;
            if(option) { _fun00006_ip = 165; continue _fun00005 }
 159:
            oscard = golfie.dueAt;
 165:
            if(!(tangon == oscard)) { _fun00006_ip = 178; continue _fun00005 }
 169:
            _closure1_slot8 = tangon;
            _fun00006_ip = 321; continue _fun00005;
 178:
            tangon = global;
            golfie = tangon.Date;
            oscard = golfie.now;
            golfie = oscard.bind(golfie)();
            option = _closure1_slot0;
            verify = _closure1_slot1;
            oscard = 8;
            oscard = verify[oscard];
            oscard = option.bind(entity)(oscard);
            oscard = oscard.Millis;
            oscard = oscard.WEEK;
            golfie = golfie + oscard;
            oscard = report.saveData;
            option = oscard.dueAt;
            oscard = option.getTime;
            oscard = oscard.bind(option)();
            if(!(!(oscard > golfie))) { _fun00006_ip = 321; continue _fun00005 }
 257:
            report = report.saveData;
            oscard = report.dueAt;
            report = oscard.getTime;
            oscard = report.bind(oscard)();
            golfie = tangon.Date;
            report = golfie.now;
            report = report.bind(golfie)();
            report = oscard - report;
            tangon = tangon.setTimeout;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    oscard = _closure2_slot0;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    entity = 6;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    golfie = tangon.bind(entity)(zuuluu);
                    report = golfie.getCurrentConfig;
                    tangon = {};
                    zuuluu = 'MessageRemindersNotificationManager';
                    tangon['location'] = zuuluu;
                    zuuluu = {};
                    option = false;
                    zuuluu['autoTrackExposure'] = option;
                    zuuluu = report.bind(golfie)(tangon, zuuluu);
                    zuuluu = zuuluu.enabled;
                    if(!zuuluu) { _fun00010_ip = 126; continue _fun00009 }
 73:
                    tangon = _closure1_slot0;
                    report = _closure1_slot1;
                    zuuluu = 7;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'MESSAGE_REMINDER_DUE';
                    zuuluu['type'] = golfie;
                    zuuluu['savedMessage'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    michal = _closure1_slot11;
                    michal = michal.bind(entity)();
 126:
                    return entity;
                }
            };
            michal = tangon.bind(entity)(michal, report);
            _closure1_slot8 = michal;
 321:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = null;
    var _closure1_slot8 = tangon;
    tangon = 9;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: MessageRemindersNotificationManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            zuuluu = _closure1_slot3;
            report = _closure2_slot0;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot9;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = zuuluu.bind(tangon)(oscard, report, entity);
            var _closure3_slot0 = entity;
            zuuluu = {};
            tangon = function() { // Original name: SAVED_MESSAGES_UPDATE
                michal = _closure3_slot0;
                entity = michal.handleUpdates;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu['SAVED_MESSAGES_UPDATE'] = tangon;
            tangon = function() { // Original name: SAVED_MESSAGE_CREATE
                michal = _closure3_slot0;
                entity = michal.handleUpdates;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu['SAVED_MESSAGE_CREATE'] = tangon;
            tangon = function() { // Original name: SAVED_MESSAGE_DELETE
                michal = _closure3_slot0;
                entity = michal.handleUpdates;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu['SAVED_MESSAGE_DELETE'] = tangon;
            entity['actions'] = zuuluu;
            michal = function() {
                michal = _closure1_slot11;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            entity['handleUpdates'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot6;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot2;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    romeon = tangon;
    michal = new romeon[michal](yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 10;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();