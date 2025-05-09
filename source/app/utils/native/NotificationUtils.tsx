// app/utils/native/NotificationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    golfie = true;
    michal['value'] = golfie;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.PermissionStateType;
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot5 = michal;
    michal = {};
    option = function() { // Original name: hasPermission
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.requestPermissions;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                entity = michal.alert;
                zuuluu = michal.badge;
                michal = michal.sound;
                if(entity) { _fun00002_ip = 27; continue _fun00001 }
 24:
                entity = zuuluu;
 27:
                if(entity) { _fun00002_ip = 33; continue _fun00001 }
 30:
                entity = michal;
 33:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['hasPermission'] = option;
    option = function(argFoo) { // Original name: requestPermission
        entity = argFoo;
        var _closure2_slot0 = entity;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        entity = 3;
        tangon = report[entity];
        entity = undefined;
        golfie = oscard.bind(entity)(tangon);
        oscard = golfie.setPushPermissionState;
        tangon = _closure1_slot4;
        tangon = tangon.REQUESTED;
        tangon = oscard.bind(golfie)(tangon);
        tangon = _closure1_slot1;
        oscard = 4;
        oscard = report[oscard];
        option = tangon.bind(entity)(oscard);
        golfie = option.track;
        zuuluu = _closure1_slot5;
        oscard = zuuluu.PERMISSIONS_REQUESTED;
        zuuluu = {};
        verify = 'notification';
        zuuluu['type'] = verify;
        zuuluu = golfie.bind(option)(oscard, zuuluu);
        zuuluu = 5;
        zuuluu = report[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.requestPermissions;
        tangon = zuuluu.bind(tangon)();
        zuuluu = tangon.then;
        michal = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.alert;
                michal = entity.sound;
                entity = entity.badge;
                if(zuuluu) { _fun00004_ip = 27; continue _fun00003 }
 24:
                zuuluu = michal;
 27:
                if(zuuluu) { _fun00004_ip = 33; continue _fun00003 }
 30:
                zuuluu = entity;
 33:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 4;
                tangon = tangon[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.track;
                michal = _closure1_slot5;
                tangon = michal.PERMISSIONS_ACKED;
                michal = {};
                golfie = 'notification';
                michal['type'] = golfie;
                golfie = 'denied';
                if(!zuuluu) { _fun00004_ip = 96; continue _fun00003 }
 92:
                golfie = 'accepted';
 96:
                michal['action'] = golfie;
                michal = report.bind(oscard)(tangon, michal);
                report = null;
                if(!(report != zuuluu)) { _fun00004_ip = 132; continue _fun00003 }
 112:
                tangon = _closure2_slot0;
                if(!(report != tangon)) { _fun00004_ip = 132; continue _fun00003 }
 123:
                michal = _closure2_slot0;
                michal = michal.bind(entity)(zuuluu);
 132:
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['requestPermission'] = option;
    option = function() { // Original name: showNotification
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 12; continue _fun00005 }
 7:
                    michal = undefined;
                    return michal;
 12:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['showNotification'] = option;
    michal['shouldRequestNotification'] = golfie;
    tangon = function(argFoo) { // Original name: playNotificationSound
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = arguments[1];
            entity = undefined;
            if(!(oscard === entity)) { _fun00008_ip = 12; continue _fun00007 }
 9:
            oscard = 1;
 12:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.playSound;
            offset = argFoo;
            golfie = arguments[2];
            yankee = report;
            verify = oscard;
            option = undefined;
            michal = yankee[tangon](offset, verify, option, golfie, oscard);
            return entity;
        }
    };
    michal['playNotificationSound'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/native/NotificationUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();