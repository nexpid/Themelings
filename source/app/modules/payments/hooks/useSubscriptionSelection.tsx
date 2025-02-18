// app/modules/payments/hooks/useSubscriptionSelection.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/payments/hooks/useSubscriptionSelection.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useSubscriptionSelection
        romeon = _closure1_slot3;
        entity = romeon.useState;
        offset = undefined;
        entity = entity.bind(romeon)(offset);
        yankee = _closure1_slot2;
        verify = 2;
        entity = yankee.bind(offset)(entity, verify);
        zuuluu = 0;
        option = entity[zuuluu];
        michal = 1;
        report = entity[michal];
        entity = romeon.useState;
        entity = entity.bind(romeon)(offset);
        entity = yankee.bind(offset)(entity, verify);
        tangon = entity[zuuluu];
        var _closure2_slot0 = tangon;
        tangon = entity[michal];
        entity = romeon.useState;
        entity = entity.bind(romeon)(offset);
        entity = yankee.bind(offset)(entity, verify);
        zuuluu = entity[zuuluu];
        michal = entity[michal];
        entity = {};
        entity['selectedSkuId'] = option;
        verify = _closure1_slot0;
        yankee = _closure1_slot1;
        option = 3;
        option = yankee[option];
        verify = verify.bind(offset)(option);
        option = verify.useStateFromStores;
        offset = _closure1_slot4;
        golfie = new Array(1);
        golfie[0] = offset;
        oscard = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                zuuluu = entity != zuuluu;
                if(!zuuluu) { _fun00002_ip = 37; continue _fun00001 }
 16:
                tangon = _closure1_slot4;
                zuuluu = tangon.get;
                michal = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal);
 37:
                return entity;
            }
        };
        oscard = option.bind(verify)(golfie, oscard);
        entity['selectedPlan'] = oscard;
        entity['setSelectedSkuId'] = report;
        entity['setSelectedPlanId'] = tangon;
        entity['selectedPlanNotification'] = zuuluu;
        entity['setSelectedPlanNotification'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();