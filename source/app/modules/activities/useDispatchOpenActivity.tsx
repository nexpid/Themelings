// app/modules/activities/useDispatchOpenActivity.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = report;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot2 = tangon;
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useDispatchOpenActivity.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useDispatchOpenActivity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.userActivity;
            var _closure2_slot0 = oscard;
            entity = undefined;
            var _closure2_slot1 = entity;
            zuuluu = null;
            zuuluu = zuuluu == oscard;
            golfie = undefined;
            if(zuuluu) { _fun00002_ip = 37; continue _fun00001 }
 32:
            golfie = oscard.applicationId;
 37:
            _closure2_slot1 = golfie;
            report = _closure1_slot2;
            tangon = report.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = null;
                    entity = zuuluu != entity;
                    if(!entity) { _fun00004_ip = 24; continue _fun00003 }
 16:
                    michal = _closure2_slot1;
                    entity = zuuluu != michal;
 24:
                    if(!entity) { _fun00004_ip = 93; continue _fun00003 }
 27:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 1;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.dispatch;
                    entity = {};
                    report = 'EMBEDDED_ACTIVITY_OPEN';
                    entity['type'] = report;
                    report = _closure2_slot0;
                    report = report.location;
                    entity['location'] = report;
                    tangon = _closure2_slot1;
                    entity['applicationId'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 93:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();