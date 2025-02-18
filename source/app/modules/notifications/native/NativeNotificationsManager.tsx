// app/modules/notifications/native/NativeNotificationsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
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
            report = _closure1_slot6;
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
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot8 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: NativeNotificationsManager
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                golfie = this;
                romeon = 0;
                option = copyRestArgs(romeon);
                entity = _closure1_slot4;
                oscard = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(golfie, oscard);
                tangon = _closure1_slot9;
                entity = new Array(0);
                romeon = entity;
                yankee = option;
                offset = 0;
                option = arraySpread(romeon, yankee, offset);
                entity = tangon.bind(report)(golfie, oscard, entity);
                var _closure3_slot0 = entity;
                tangon = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.channelId;
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00008_ip = 44; continue _fun00007 }
 14:
                        michal = _closure1_slot8;
                        michal = michal.DCDNotificationManager;
                        if(!(entity != michal)) { _fun00008_ip = 44; continue _fun00007 }
 31:
                        entity = michal.clearNotificationsForChannel;
                        entity = entity.bind(michal)(zuuluu);
 44:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleAck'] = tangon;
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 6;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.isIOS;
                zuuluu = zuuluu.bind(tangon)();
                if(zuuluu) { _fun00006_ip = 119; continue _fun00005 }
 110:
                zuuluu = function() {
                    michal = _closure3_slot0;
                    entity = michal.handleSetCallNotificationExperiment;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                _fun00006_ip = 126; continue _fun00005;
 119:
                zuuluu = function() {
                    entity = undefined;
                    return entity;
                };
 126:
                entity['handlePostConnectionOpen'] = zuuluu;
                michal = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 6;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.isIOS;
                        zuuluu = zuuluu.bind(tangon)();
                        if(zuuluu) { _fun00010_ip = 215; continue _fun00009 }
 41:
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 7;
                        zuuluu = report[zuuluu];
                        option = tangon.bind(entity)(zuuluu);
                        golfie = option.getCurrentConfig;
                        zuuluu = {};
                        oscard = 'call_delete';
                        zuuluu['location'] = oscard;
                        zuuluu = golfie.bind(option)(zuuluu);
                        golfie = zuuluu.useImprovedNotifications;
                        zuuluu = 8;
                        zuuluu = report[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.getCurrentConfig;
                        zuuluu = {};
                        zuuluu['location'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
                        tangon = zuuluu.showFullscreenCallUI;
                        zuuluu = _closure1_slot8;
                        zuuluu = zuuluu.DCDNotificationManager;
                        zuuluu = zuuluu.setShowMissedCallNotifications;
                        report = null;
                        if(!(report != zuuluu)) { _fun00010_ip = 174; continue _fun00009 }
 147:
                        zuuluu = _closure1_slot8;
                        oscard = zuuluu.DCDNotificationManager;
                        zuuluu = oscard.setShowMissedCallNotifications;
                        if(golfie) { _fun00010_ip = 169; continue _fun00009 }
 166:
                        golfie = tangon;
 169:
                        zuuluu = zuuluu.bind(oscard)(golfie);
 174:
                        zuuluu = _closure1_slot8;
                        zuuluu = zuuluu.DCDNotificationManager;
                        zuuluu = zuuluu.setShowFullscreenCallUI;
                        if(!(report != zuuluu)) { _fun00010_ip = 215; continue _fun00009 }
 194:
                        michal = _closure1_slot8;
                        zuuluu = michal.DCDNotificationManager;
                        michal = zuuluu.setShowFullscreenCallUI;
                        michal = michal.bind(zuuluu)(tangon);
 215:
                        return entity;
                    }
                };
                entity['handleSetCallNotificationExperiment'] = michal;
                michal = {};
                zuuluu = entity.handleAck;
                michal['MESSAGE_ACK'] = zuuluu;
                zuuluu = entity.handleAck;
                michal['CHANNEL_SELECT'] = zuuluu;
                zuuluu = entity.handlePostConnectionOpen;
                michal['POST_CONNECTION_OPEN'] = zuuluu;
                zuuluu = entity.handleSetCallNotificationExperiment;
                michal['EXPERIMENT_OVERRIDE_BUCKET'] = zuuluu;
                zuuluu = entity.handleSetCallNotificationExperiment;
                michal['EXPERIMENTS_FETCH_SUCCESS'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/notifications/native/NativeNotificationsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();