// app/modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx
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
    verify = golfie.bind(entity)(tangon);
    option = verify.duration;
    golfie = 30;
    tangon = 'days';
    tangon = option.bind(verify)(golfie, tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useOutboundPromotionRedemptionEndDate
        oscard = argFoo;
        report = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 2;
                entity = zuuluu[entity];
                golfie = undefined;
                tangon = michal.bind(golfie)(entity);
                zuuluu = tangon.dateFormat;
                entity = _closure2_slot1;
                if(entity) { _fun00002_ip = 78; continue _fun00001 }
 41:
                michal = _closure1_slot1;
                option = _closure1_slot2;
                entity = 1;
                entity = option[entity];
                michal = michal.bind(golfie)(entity);
                entity = _closure2_slot0;
                entity = entity.endDate;
                michal = michal.bind(golfie)(entity);
                _fun00002_ip = 183; continue _fun00001;
 78:
                entity = _closure2_slot0;
                option = entity.outboundRedemptionEndDate;
                entity = null;
                if(!(entity == option)) { _fun00002_ip = 145; continue _fun00001 }
 94:
                option = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 1;
                entity = verify[entity];
                option = option.bind(golfie)(entity);
                entity = _closure2_slot0;
                entity = entity.endDate;
                verify = option.bind(golfie)(entity);
                option = verify.add;
                entity = _closure1_slot4;
                entity = option.bind(verify)(entity);
                _fun00002_ip = 180; continue _fun00001;
 145:
                option = _closure1_slot1;
                verify = _closure1_slot2;
                oscard = 1;
                oscard = verify[oscard];
                oscard = option.bind(golfie)(oscard);
                report = _closure2_slot0;
                report = report.outboundRedemptionEndDate;
                entity = oscard.bind(golfie)(report);
 180:
                michal = entity;
 183:
                entity = 'LL';
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();