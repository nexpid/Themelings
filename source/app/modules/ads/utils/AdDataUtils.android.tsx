// app/modules/ads/utils/AdDataUtils.android.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.defaultMobileAdData;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'MobileAdDataUtils';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/ads/utils/AdDataUtils.android.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getMobileAdData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0: // try_start_0
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.getGoogleAdvertisingId;
            entity = entity.bind(michal)();
 37: // try_end0
            return entity;
 39: // catch_target0
            CatchBlockStart(arg_register=4);
            tangon = _closure1_slot4;
            zuuluu = tangon.warn;
            michal = 'Failed to get google advertising ID:';
            michal = zuuluu.bind(tangon)(michal, report);
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            entity = _closure1_slot3;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getMobileAdData'] = tangon;
    michal = function() { // Original name: getAdUser
        entity = _closure1_slot2;
        entity = entity.adUser;
        return entity;
    };
    zuuluu['getAdUser'] = michal;
    return entity;
})();