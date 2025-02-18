// app/modules/panels/morphable/native/useScreenNameSharedValue.tsx
export default (function(_, argBar, __, argCor, ___, argFre, argPlu) {
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/panels/morphable/native/useScreenNameSharedValue.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useScreenNameSharedValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            entity = 1;
            entity = report[entity];
            oscard = undefined;
            golfie = tangon.bind(oscard)(entity);
            entity = golfie.getRootNavigationRef;
            offset = entity.bind(golfie)();
            entity = 2;
            entity = report[entity];
            report = tangon.bind(oscard)(entity);
            tangon = report.useSharedValue;
            golfie = null;
            entity = golfie == offset;
            yankee = undefined;
            if(entity) { _fun00002_ip = 75; continue _fun00001 }
 65:
            entity = offset.isReady;
            yankee = entity.bind(offset)();
 75:
            option = 'unknown';
            verify = true;
            entity = option;
            if(!(verify === yankee)) { _fun00002_ip = 125; continue _fun00001 }
 88:
            verify = offset.getCurrentRoute;
            verify = verify.bind(offset)();
            offset = golfie == verify;
            oscard = undefined;
            if(offset) { _fun00002_ip = 112; continue _fun00001 }
 107:
            oscard = verify.name;
 112:
            golfie = golfie != oscard;
            entity = option;
            if(!golfie) { _fun00002_ip = 125; continue _fun00001 }
 122:
            entity = oscard;
 125:
            entity = tangon.bind(report)(entity);
            var _closure2_slot0 = entity;
            report = _closure1_slot2;
            tangon = report.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = function() { // Original name: handleStateChange
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            zuuluu = _closure3_slot0;
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00006_ip = 89; continue _fun00005 }
 13:
                            tangon = _closure3_slot0;
                            zuuluu = tangon.isReady;
                            zuuluu = zuuluu.bind(tangon)();
                            if(!zuuluu) { _fun00006_ip = 89; continue _fun00005 }
 30:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.getCurrentRoute;
                            report = michal.bind(zuuluu)();
                            zuuluu = _closure2_slot0;
                            michal = zuuluu.set;
                            oscard = entity == report;
                            tangon = undefined;
                            if(oscard) { _fun00006_ip = 70; continue _fun00005 }
 65:
                            tangon = report.name;
 70:
                            report = entity != tangon;
                            entity = 'unknown';
                            if(!report) { _fun00006_ip = 84; continue _fun00005 }
 81:
                            entity = tangon;
 84:
                            entity = michal.bind(zuuluu)(entity);
 89:
                            entity = undefined;
                            return entity;
                        }
                    };
                    var _closure3_slot1 = report;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 1;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.getRootNavigationRef;
                    tangon = zuuluu.bind(tangon)();
                    var _closure3_slot0 = tangon;
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00004_ip = 60; continue _fun00003 }
 58:
                    return michal;
 60:
                    zuuluu = tangon.addListener;
                    michal = 'state';
                    michal = zuuluu.bind(tangon)(michal, report);
                    entity = function() {
                        tangon = _closure3_slot0;
                        zuuluu = tangon.removeListener;
                        michal = _closure3_slot1;
                        entity = 'state';
                        entity = zuuluu.bind(tangon)(entity, michal);
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();