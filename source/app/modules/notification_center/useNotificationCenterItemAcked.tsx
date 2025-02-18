// app/modules/notification_center/useNotificationCenterItemAcked.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/notification_center/useNotificationCenterItemAcked.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 1;
            michal = report[michal];
            report = undefined;
            golfie = tangon.bind(report)(michal);
            tangon = golfie.useStateFromStores;
            option = _closure1_slot2;
            michal = new Array(1);
            michal[0] = option;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.isLocalItemAcked;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(golfie)(michal, entity);
            entity = oscard.forceUnacked;
            entity = !entity;
            if(!entity) { _fun00002_ip = 117; continue _fun00001 }
 76:
            if(michal) { _fun00002_ip = 114; continue _fun00001 }
 79:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 2;
            zuuluu = golfie[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.isRemoteAcked;
            zuuluu = argBar;
            michal = tangon.bind(report)(oscard, zuuluu);
 114:
            entity = michal;
 117:
            return entity;
        }
    };
    zuuluu['useNotificationCenterItemAcked'] = michal;
    return entity;
})();