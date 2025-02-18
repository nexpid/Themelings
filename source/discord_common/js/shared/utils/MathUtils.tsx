// discord_common/js/shared/utils/MathUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    michal = global;
    oscard = michal.Object;
    report = oscard.defineProperty;
    tangon = {};
    michal = true;
    tangon['value'] = michal;
    michal = '__esModule';
    michal = report.bind(oscard)(zuuluu, michal, tangon);
    michal = {};
    tangon = 'function roundIfClose_MathUtilsTsx1(num,precision){const decimalPart=num-Math.floor(num);if(decimalPart>=1-precision){return Math.ceil(num);}if(decimalPart<=precision){return Math.floor(num);}return num;}';
    michal['code'] = tangon;
    var _closure1_slot0 = michal;
    michal = function() {
        entity = function(argFoo, argBar) { // Original name: roundIfClose
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                report = argBar;
                michal = global;
                zuuluu = michal.Math;
                entity = zuuluu.floor;
                entity = entity.bind(zuuluu)(tangon);
                zuuluu = tangon - entity;
                entity = 1;
                entity = entity - report;
                if(!(!(zuuluu >= entity))) { _fun00002_ip = 66; continue _fun00001 }
 40:
                entity = tangon;
                if(!(zuuluu <= report)) { _fun00002_ip = 64; continue _fun00001 }
 47:
                report = michal.Math;
                zuuluu = report.floor;
                entity = zuuluu.bind(report)(tangon);
 64:
                _fun00002_ip = 83; continue _fun00001;
 66:
                zuuluu = michal.Math;
                michal = zuuluu.ceil;
                entity = michal.bind(zuuluu)(tangon);
 83:
                return entity;
            }
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 15933993422996.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot0;
        entity['__initData'] = michal;
        return entity;
    };
    entity = undefined;
    michal = michal.bind(entity)();
    report = argPlu;
    tangon = 0;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/shared/utils/MathUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['roundIfClose'] = michal;
    return entity;
})();