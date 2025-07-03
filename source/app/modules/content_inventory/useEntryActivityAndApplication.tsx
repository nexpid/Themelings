// app/modules/content_inventory/useEntryActivityAndApplication.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/content_inventory/useEntryActivityAndApplication.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useEntryActivityAndApplication
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            var _closure2_slot0 = option;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            offset = 3;
            entity = zuuluu[offset];
            verify = undefined;
            golfie = michal.bind(verify)(entity);
            report = golfie.useStateFromStores;
            entity = _closure1_slot5;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getMatchingActivity;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = report.bind(golfie)(michal, entity);
            michal = _closure1_slot1;
            entity = 4;
            entity = zuuluu[entity];
            michal = michal.bind(verify)(entity);
            report = null;
            entity = report == golfie;
            zuuluu = undefined;
            if(entity) { _fun00002_ip = 97; continue _fun00001 }
 91:
            zuuluu = golfie.application_id;
 97:
            entity = new Array(2);
            entity[0] = zuuluu;
            yankee = option.extra;
            zuuluu = 'application_id';
            yankee = zuuluu in yankee;
            zuuluu = undefined;
            if(!yankee) { _fun00002_ip = 136; continue _fun00001 }
 124:
            option = option.extra;
            zuuluu = option.application_id;
 136:
            entity[1] = zuuluu;
            zuuluu = michal.bind(verify)(entity);
            michal = _closure1_slot3;
            entity = 2;
            michal = michal.bind(verify)(zuuluu, entity);
            entity = 0;
            zuuluu = michal[entity];
            var _closure2_slot1 = zuuluu;
            entity = 1;
            michal = michal[entity];
            entity = {};
            entity['activity'] = golfie;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[offset];
            option = option.bind(verify)(golfie);
            golfie = option.useStateFromStores;
            verify = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = verify;
            tangon = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getEmbeddedActivityForUserId;
                    entity = _closure2_slot0;
                    michal = entity.author_id;
                    oscard = _closure2_slot1;
                    entity = null;
                    oscard = entity == oscard;
                    entity = undefined;
                    if(oscard) { _fun00004_ip = 50; continue _fun00003 }
 41:
                    report = _closure2_slot1;
                    entity = report.id;
 50:
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            tangon = golfie.bind(option)(oscard, tangon);
            entity['embeddedActivity'] = tangon;
            tangon = michal;
            if(!(report != zuuluu)) { _fun00002_ip = 244; continue _fun00001 }
 241:
            tangon = zuuluu;
 244:
            entity['anyMatchingApplication'] = tangon;
            entity['activityApplication'] = zuuluu;
            entity['fallbackApplication'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();