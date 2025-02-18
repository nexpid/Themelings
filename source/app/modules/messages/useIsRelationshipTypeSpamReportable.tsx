// app/modules/messages/useIsRelationshipTypeSpamReportable.tsx
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RelationshipTypes;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/useIsRelationshipTypeSpamReportable.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useIsRelationshipTypeSpamReportable
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            var _closure2_slot0 = golfie;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 2;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(tangon);
            report = oscard.useStateFromStores;
            zuuluu = _closure1_slot2;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getRelationshipType;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = report.bind(oscard)(tangon, entity, zuuluu);
            entity = _closure1_slot3;
            entity = entity.NONE;
            entity = zuuluu === entity;
            if(entity) { _fun00002_ip = 104; continue _fun00001 }
 90:
            tangon = _closure1_slot3;
            tangon = tangon.BLOCKED;
            entity = zuuluu === tangon;
 104:
            if(entity) { _fun00002_ip = 121; continue _fun00001 }
 107:
            michal = _closure1_slot3;
            michal = michal.PENDING_INCOMING;
            entity = zuuluu === michal;
 121:
            return entity;
        }
    };
    zuuluu['useIsRelationshipTypeSpamReportable'] = michal;
    return entity;
})();