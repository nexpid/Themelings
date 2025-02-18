// app/modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useNotificationsTabBadge
        tangon = _closure1_slot0;
        golfie = _closure1_slot2;
        zuuluu = 2;
        zuuluu = golfie[zuuluu];
        report = undefined;
        option = tangon.bind(report)(zuuluu);
        oscard = option.useStateFromStores;
        zuuluu = _closure1_slot4;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot4;
            entity = entity.localItems;
            return entity;
        };
        oscard = oscard.bind(option)(tangon, zuuluu);
        var _closure2_slot0 = oscard;
        tangon = _closure1_slot1;
        zuuluu = 3;
        zuuluu = golfie[zuuluu];
        report = tangon.bind(report)(zuuluu);
        tangon = report.useExperiment;
        zuuluu = {};
        golfie = 'Notifications Tab Badge';
        zuuluu['location'] = golfie;
        zuuluu = tangon.bind(report)(zuuluu);
        report = zuuluu.showInDMs;
        var _closure2_slot1 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    michal = argFoo;
                    entity = _closure2_slot1;
                    entity = !entity;
                    if(!entity) { _fun00002_ip = 62; continue _fun00001 }
 16:
                    report = michal.type;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 4;
                    oscard = oscard[tangon];
                    tangon = undefined;
                    tangon = golfie.bind(tangon)(oscard);
                    tangon = tangon.NotificationCenterLocalItems;
                    tangon = tangon.INCOMING_FRIEND_REQUESTS;
                    entity = report === tangon;
 62:
                    if(entity) { _fun00002_ip = 124; continue _fun00001 }
 65:
                    zuuluu = _closure2_slot1;
                    zuuluu = !zuuluu;
                    if(!zuuluu) { _fun00002_ip = 121; continue _fun00001 }
 75:
                    report = michal.type;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 4;
                    oscard = oscard[tangon];
                    tangon = undefined;
                    tangon = golfie.bind(tangon)(oscard);
                    tangon = tangon.NotificationCenterLocalItems;
                    tangon = tangon.INCOMING_GAME_FRIEND_REQUESTS;
                    zuuluu = report === tangon;
 121:
                    entity = zuuluu;
 124:
                    if(entity) { _fun00002_ip = 173; continue _fun00001 }
 127:
                    zuuluu = michal.type;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 4;
                    tangon = tangon[michal];
                    michal = undefined;
                    michal = report.bind(michal)(tangon);
                    michal = michal.NotificationCenterLocalItems;
                    michal = michal.MOBILE_NATIVE_UPDATE_AVAILABLE;
                    entity = zuuluu === michal;
 173:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = entity.length;
            return entity;
        };
        zuuluu = zuuluu.bind(tangon)(entity, michal);
        entity = {};
        entity['value'] = zuuluu;
        michal = 0;
        michal = zuuluu > michal;
        entity['showDot'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();