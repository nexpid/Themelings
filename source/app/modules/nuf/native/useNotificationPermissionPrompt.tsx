// app/modules/nuf/native/useNotificationPermissionPrompt.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
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
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/nuf/native/useNotificationPermissionPrompt.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useNotificationPermissionPrompt
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        tangon = 5;
        golfie = oscard[tangon];
        entity = undefined;
        offset = report.bind(entity)(golfie);
        verify = offset.useStateFromStores;
        golfie = _closure1_slot5;
        option = new Array(1);
        option[0] = golfie;
        golfie = function() {
            michal = _closure1_slot5;
            entity = michal.isConnected;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = verify.bind(offset)(option, golfie);
        var _closure2_slot0 = golfie;
        tangon = oscard[tangon];
        option = report.bind(entity)(tangon);
        oscard = option.useStateFromStores;
        tangon = _closure1_slot6;
        report = new Array(2);
        report[0] = tangon;
        tangon = _closure1_slot4;
        report[1] = tangon;
        tangon = function() {
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot4;
            entity = _closure1_slot6;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        oscard = oscard.bind(option)(report, tangon);
        var _closure2_slot1 = oscard;
        report = _closure1_slot3;
        tangon = report.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                if(!michal) { _fun00002_ip = 113; continue _fun00001 }
 10:
                entity = _closure2_slot1;
                if(entity) { _fun00002_ip = 113; continue _fun00001 }
 17:
                michal = _closure1_slot7;
                report = michal.promptSeen;
                oscard = _closure1_slot1;
                michal = _closure1_slot2;
                tangon = 7;
                michal = michal[tangon];
                zuuluu = undefined;
                michal = oscard.bind(zuuluu)(michal);
                michal = michal.shouldRequestNotification;
                if(!michal) { _fun00002_ip = 66; continue _fun00001 }
 63:
                michal = !report;
 66:
                if(!michal) { _fun00002_ip = 113; continue _fun00001 }
 69:
                michal = _closure1_slot1;
                entity = _closure1_slot2;
                report = entity[tangon];
                oscard = michal.bind(zuuluu)(report);
                report = oscard.requestPermission;
                report = report.bind(oscard)();
                entity = entity[tangon];
                michal = michal.bind(zuuluu)(entity);
                entity = false;
                michal['shouldRequestNotification'] = entity;
 113:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();