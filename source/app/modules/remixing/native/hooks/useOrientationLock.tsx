// app/modules/remixing/native/hooks/useOrientationLock.tsx
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Dimensions;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/remixing/native/hooks/useOrientationLock.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: usePortraitOrientationOnly
        tangon = _closure1_slot2;
        zuuluu = tangon.useEffect;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 2;
                michal = zuuluu[michal];
                zuuluu = undefined;
                tangon = tangon.bind(zuuluu)(michal);
                michal = tangon.isIpadOS;
                michal = michal.bind(tangon)();
                if(michal) { _fun00002_ip = 76; continue _fun00001 }
 38:
                michal = _closure1_slot0;
                tangon = _closure1_slot1;
                entity = 3;
                entity = tangon[entity];
                tangon = michal.bind(zuuluu)(entity);
                zuuluu = tangon.lockOrientation;
                michal = 'PORTRAIT';
                entity = false;
                entity = zuuluu.bind(tangon)(michal, entity);
 76:
                entity = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot1;
                        entity = 2;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.isIpadOS;
                        zuuluu = zuuluu.bind(tangon)();
                        if(zuuluu) { _fun00004_ip = 78; continue _fun00003 }
 38:
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot1;
                        michal = 3;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.unlockOrientation;
                        michal = {};
                        report = false;
                        michal['unlockAfterRotatingToPreviousLock'] = report;
                        michal = zuuluu.bind(tangon)(michal);
 78:
                        return entity;
                    }
                };
                return entity;
            }
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function() {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot3;
            michal = zuuluu.get;
            entity = 'screen';
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.width;
            michal = entity.height;
            tangon = zuuluu > michal;
            entity = {};
            report = zuuluu;
            if(!tangon) { _fun00006_ip = 46; continue _fun00005 }
 43:
            report = michal;
 46:
            entity['width'] = report;
            if(!tangon) { _fun00006_ip = 56; continue _fun00005 }
 53:
            michal = zuuluu;
 56:
            entity['height'] = michal;
            return entity;
        }
    };
    zuuluu['getPortraitOrientationScreenSize'] = michal;
    return entity;
})();