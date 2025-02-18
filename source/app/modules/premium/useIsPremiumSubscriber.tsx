// app/modules/premium/useIsPremiumSubscriber.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = tangon.PremiumTypes;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/useIsPremiumSubscriber.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useIsPremiumSubscriber
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = arguments[0];
            report = undefined;
            if(!(michal === report)) { _fun00002_ip = 24; continue _fun00001 }
 11:
            zuuluu = _closure1_slot3;
            michal = zuuluu.TIER_2;
 24:
            var _closure2_slot0 = michal;
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 2;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useStateFromStores;
            report = _closure1_slot2;
            michal = new Array(1);
            michal[0] = report;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getCurrentUser;
                tangon = michal.bind(zuuluu)();
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isPremiumExactly;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['useIsPremiumSubscriber'] = michal;
    return entity;
})();