// app/modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useCallback;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticsPremiumFeatureNames;
    var _closure1_slot6 = golfie;
    tangon = tangon.AnalyticsPremiumFeatureTiers;
    var _closure1_slot7 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        report = argFoo;
        var _closure2_slot0 = report;
        oscard = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 4;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        option = oscard.bind(tangon)(zuuluu);
        golfie = option.useStateFromStores;
        zuuluu = _closure1_slot4;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot4;
            entity = entity.products;
            return entity;
        };
        oscard = golfie.bind(option)(oscard, zuuluu);
        var _closure2_slot1 = oscard;
        zuuluu = _closure1_slot3;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                backup = entity.type;
                zuuluu = entity.skuId;
                michal = _closure2_slot1;
                entity = michal.get;
                option = entity.bind(michal)(zuuluu);
                zuuluu = _closure1_slot1;
                yankee = _closure1_slot2;
                entity = 5;
                michal = yankee[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.track;
                michal = _closure1_slot5;
                zuuluu = michal.PREMIUM_FEATURE_TRY_OUT;
                michal = {};
                offset = _closure1_slot0;
                romeon = 6;
                romeon = yankee[romeon];
                foxtra = offset.bind(entity)(romeon);
                romeon = foxtra.match;
                sizing = romeon.bind(foxtra)(backup);
                kiloes = sizing.with;
                romeon = 7;
                foxtra = yankee[romeon];
                foxtra = offset.bind(entity)(foxtra);
                foxtra = foxtra.CollectiblesItemType;
                backup = foxtra.AVATAR_DECORATION;
                foxtra = function() {
                    entity = _closure1_slot6;
                    entity = entity.AVATAR_DECORATION;
                    return entity;
                };
                kiloes = kiloes.bind(sizing)(backup, foxtra);
                backup = kiloes.with;
                romeon = yankee[romeon];
                romeon = offset.bind(entity)(romeon);
                romeon = romeon.CollectiblesItemType;
                foxtra = romeon.PROFILE_EFFECT;
                romeon = function() {
                    entity = _closure1_slot6;
                    entity = entity.PROFILE_EFFECT;
                    return entity;
                };
                foxtra = backup.bind(kiloes)(foxtra, romeon);
                romeon = foxtra.otherwise;
                golfie = function() {
                    entity = undefined;
                    return entity;
                };
                golfie = romeon.bind(foxtra)(golfie);
                michal['feature_name'] = golfie;
                golfie = 8;
                golfie = yankee[golfie];
                offset = offset.bind(entity)(golfie);
                golfie = offset.isPremiumCollectiblesProduct;
                golfie = golfie.bind(offset)(option);
                verify = _closure1_slot7;
                if(golfie) { _fun00002_ip = 240; continue _fun00001 }
 232:
                golfie = verify.PREMIUM_STANDARD;
                _fun00002_ip = 246; continue _fun00001;
 240:
                golfie = verify.FREE;
 246:
                michal['feature_tier'] = golfie;
                golfie = null;
                verify = golfie == option;
                golfie = undefined;
                if(verify) { _fun00002_ip = 267; continue _fun00001 }
 262:
                golfie = option.name;
 267:
                michal['feature_selection'] = golfie;
                oscard = _closure2_slot0;
                michal['location_stack'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();