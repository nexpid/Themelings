// app/modules/tooltip/useCanShowTooltip.tsx
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/tooltip/useCanShowTooltip.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            golfie = arguments[1];
            option = arguments[2];
            var _closure2_slot0 = oscard;
            report = undefined;
            if(!(golfie === report)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            golfie = false;
 23:
            var _closure2_slot1 = golfie;
            if(!(option === report)) { _fun00002_ip = 33; continue _fun00001 }
 31:
            option = true;
 33:
            var _closure2_slot2 = option;
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            verify = tangon.bind(report)(entity);
            report = verify.useStateFromStores;
            entity = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.canShowTooltip;
                    entity = _closure2_slot0;
                    entity = zuuluu.bind(tangon)(entity);
                    if(!entity) { _fun00004_ip = 32; continue _fun00003 }
 28:
                    entity = _closure2_slot2;
 32:
                    return entity;
                }
            };
            entity = report.bind(verify)(tangon, entity);
            report = _closure1_slot3;
            tangon = report.useEffect;
            zuuluu = new Array(3);
            zuuluu[0] = option;
            zuuluu[1] = golfie;
            zuuluu[2] = oscard;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot2;
                    if(!michal) { _fun00006_ip = 55; continue _fun00005 }
 10:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.attemptToShowTooltip;
                    michal = _closure2_slot0;
                    entity = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal, entity);
 55:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['useCanShowTooltip'] = michal;
    return entity;
})();