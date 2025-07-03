// app/modules/custom_status/utils/useCustomStatusActivityForUser.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityTypes;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/custom_status/utils/useCustomStatusActivityForUser.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useCustomStatusActivityForUser
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            report = 3;
            michal = option[report];
            oscard = undefined;
            offset = golfie.bind(oscard)(michal);
            verify = offset.useStateFromStores;
            michal = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot2;
                entity = michal.getId;
                michal = entity.bind(michal)();
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            zuuluu = verify.bind(offset)(zuuluu, michal);
            michal = 4;
            michal = option[michal];
            verify = golfie.bind(oscard)(michal);
            michal = verify.useCustomStatusActivity;
            michal = michal.bind(verify)();
            report = option[report];
            oscard = golfie.bind(oscard)(report);
            report = oscard.useStateFromStores;
            golfie = _closure1_slot3;
            tangon = new Array(1);
            tangon[0] = golfie;
            entity = function() {
                tangon = _closure1_slot3;
                zuuluu = tangon.findActivity;
                michal = _closure2_slot0;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.type;
                    entity = _closure1_slot4;
                    entity = entity.CUSTOM_STATUS;
                    entity = michal === entity;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = report.bind(oscard)(tangon, entity);
            if(!zuuluu) { _fun00002_ip = 131; continue _fun00001 }
 128:
            entity = michal;
 131:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();