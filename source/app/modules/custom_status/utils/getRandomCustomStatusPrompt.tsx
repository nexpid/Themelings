// app/modules/custom_status/utils/getRandomCustomStatusPrompt.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.CustomStatusPrompts;
    var _closure1_slot2 = golfie;
    tangon = tangon.CustomStatusPromptValues;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/custom_status/utils/getRandomCustomStatusPrompt.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getRandomCustomStatusPrompt
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            michal = null;
            if(!(michal != entity)) { _fun00002_ip = 26; continue _fun00001 }
 15:
            michal = entity.size;
            entity = 0;
            if(!(!(michal > entity))) { _fun00002_ip = 35; continue _fun00001 }
 26:
            michal = _closure1_slot2;
            _fun00002_ip = 59; continue _fun00001;
 35:
            report = _closure1_slot2;
            tangon = report.filter;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = entity.value;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            michal = tangon.bind(report)(entity);
 59:
            tangon = michal.length;
            entity = 0;
            if(!(entity !== tangon)) { _fun00002_ip = 120; continue _fun00001 }
 70:
            entity = global;
            report = entity.Math;
            tangon = report.floor;
            oscard = entity.Math;
            entity = oscard.random;
            oscard = entity.bind(oscard)();
            entity = michal.length;
            entity = oscard * entity;
            entity = tangon.bind(report)(entity);
            entity = michal[entity];
            _fun00002_ip = 153; continue _fun00001;
 120:
            michal = {};
            tangon = _closure1_slot3;
            tangon = tangon.ADD_STATUS;
            michal['value'] = tangon;
            zuuluu = function() { // Original name: label
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                entity = 1;
                michal = oscard[entity];
                tangon = undefined;
                michal = report.bind(tangon)(michal);
                zuuluu = michal.intl;
                michal = zuuluu.string;
                entity = oscard[entity];
                entity = report.bind(tangon)(entity);
                entity = entity.t;
                entity = entity.Vq4UmZ;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal['label'] = zuuluu;
            entity = michal;
 153:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();