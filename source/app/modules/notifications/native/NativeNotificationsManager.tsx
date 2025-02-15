// app/modules/notifications/native/NativeNotificationsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
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
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
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
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot8 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: NativeNotificationsManager
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                golf = this;
                romeo = 0;
                options = copyRestArgs(romeo);
                entity = _closure1_slot4;
                oscar = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(golf, oscar);
                tango = _closure1_slot9;
                entity = new Array(0);
                romeo = entity;
                yankee = options;
                offset = 0;
                options = arraySpread(romeo, yankee, offset);
                entity = tango.bind(report)(golf, oscar, entity);
                var _closure3_slot0 = entity;
                tango = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.channelId;
                        entity = null;
                        if(!(entity != zulu)) { _fun00008_ip = 44; continue _fun00007 }
 14:
                        mike = _closure1_slot8;
                        mike = mike.DCDNotificationManager;
                        if(!(entity != mike)) { _fun00008_ip = 44; continue _fun00007 }
 31:
                        entity = mike.clearNotificationsForChannel;
                        entity = entity.bind(mike)(zulu);
 44:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleAck'] = tango;
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 6;
                zulu = oscar[zulu];
                tango = tango.bind(report)(zulu);
                zulu = tango.isIOS;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun00006_ip = 119; continue _fun00005 }
 110:
                zulu = function() {
                    mike = _closure3_slot0;
                    entity = mike.handleSetCallNotificationExperiment;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                _fun00006_ip = 126; continue _fun00005;
 119:
                zulu = function() {
                    entity = undefined;
                    return entity;
                };
 126:
                entity['handlePostConnectionOpen'] = zulu;
                mike = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 6;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.isIOS;
                        zulu = zulu.bind(tango)();
                        if(zulu) { _fun00010_ip = 215; continue _fun00009 }
 41:
                        tango = _closure1_slot1;
                        report = _closure1_slot2;
                        zulu = 7;
                        zulu = report[zulu];
                        options = tango.bind(entity)(zulu);
                        golf = options.getCurrentConfig;
                        zulu = {};
                        oscar = 'call_delete';
                        zulu['location'] = oscar;
                        zulu = golf.bind(options)(zulu);
                        golf = zulu.useImprovedNotifications;
                        zulu = 8;
                        zulu = report[zulu];
                        report = tango.bind(entity)(zulu);
                        tango = report.getCurrentConfig;
                        zulu = {};
                        zulu['location'] = oscar;
                        zulu = tango.bind(report)(zulu);
                        tango = zulu.showFullscreenCallUI;
                        zulu = _closure1_slot8;
                        zulu = zulu.DCDNotificationManager;
                        zulu = zulu.setShowMissedCallNotifications;
                        report = null;
                        if(!(report != zulu)) { _fun00010_ip = 174; continue _fun00009 }
 147:
                        zulu = _closure1_slot8;
                        oscar = zulu.DCDNotificationManager;
                        zulu = oscar.setShowMissedCallNotifications;
                        if(golf) { _fun00010_ip = 169; continue _fun00009 }
 166:
                        golf = tango;
 169:
                        zulu = zulu.bind(oscar)(golf);
 174:
                        zulu = _closure1_slot8;
                        zulu = zulu.DCDNotificationManager;
                        zulu = zulu.setShowFullscreenCallUI;
                        if(!(report != zulu)) { _fun00010_ip = 215; continue _fun00009 }
 194:
                        mike = _closure1_slot8;
                        zulu = mike.DCDNotificationManager;
                        mike = zulu.setShowFullscreenCallUI;
                        mike = mike.bind(zulu)(tango);
 215:
                        return entity;
                    }
                };
                entity['handleSetCallNotificationExperiment'] = mike;
                mike = {};
                zulu = entity.handleAck;
                mike['MESSAGE_ACK'] = zulu;
                zulu = entity.handleAck;
                mike['CHANNEL_SELECT'] = zulu;
                zulu = entity.handlePostConnectionOpen;
                mike['POST_CONNECTION_OPEN'] = zulu;
                zulu = entity.handleSetCallNotificationExperiment;
                mike['EXPERIMENT_OVERRIDE_BUCKET'] = zulu;
                zulu = entity.handleSetCallNotificationExperiment;
                mike['EXPERIMENTS_FETCH_SUCCESS'] = zulu;
                entity['actions'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notifications/native/NativeNotificationsManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();