// app/modules/app_database/modules/messages/requireSortedDescending.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 2;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_database/modules/messages/requireSortedDescending.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: requireSortedDescending
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            report = 0;
            zuuluu = entity[report];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            oscard = verify.length;
            zuuluu = 2;
            zuuluu = oscard <= zuuluu;
            if(zuuluu) { _fun00002_ip = 105; continue _fun00001 }
 42:
            oscard = _closure1_slot0;
            michal = _closure1_slot1;
            offset = 1;
            michal = michal[offset];
            option = oscard.bind(entity)(michal);
            golfie = option.compare;
            michal = verify[report];
            oscard = michal.id;
            michal = verify.length;
            michal = michal - offset;
            michal = verify[michal];
            michal = michal.id;
            michal = golfie.bind(option)(oscard, michal);
            zuuluu = michal >= report;
 105:
            michal = 'messages must be sorted in descending order.';
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['requireSortedDescending'] = michal;
    return entity;
})();