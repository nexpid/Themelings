// app/modules/keyword_filter/hooks/useKeywordFilterSettings.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    tangon = function() { // Original name: useKeywordFilterSettings
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            report = tangon.bind(michal)(zuuluu);
            tangon = report.useStateFromStoresObject;
            entity = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure1_slot2;
                    entity = entity.settings;
                    zuuluu = entity.textAndImages;
                    michal = null;
                    tangon = michal == zuuluu;
                    entity = undefined;
                    if(tangon) { _fun00004_ip = 36; continue _fun00003 }
 30:
                    entity = zuuluu.keywordFilterSettings;
 36:
                    if(!(michal == entity)) { _fun00004_ip = 42; continue _fun00003 }
 40:
                    entity = {};
 42:
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu, entity);
            entity = {};
            oscard = zuuluu.profanity;
            tangon = null;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 80; continue _fun00001 }
 75:
            report = oscard.value;
 80:
            entity['profanity'] = report;
            oscard = zuuluu.sexualContent;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 105; continue _fun00001 }
 100:
            report = oscard.value;
 105:
            entity['sexualContent'] = report;
            zuuluu = zuuluu.slurs;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 130; continue _fun00001 }
 125:
            michal = zuuluu.value;
 130:
            entity['slurs'] = michal;
            return entity;
        }
    };
    var _closure1_slot3 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/keyword_filter/hooks/useKeywordFilterSettings.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useKeywordFilterSettings'] = tangon;
    michal = function() {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot3;
            oscard = undefined;
            michal = michal.bind(oscard)();
            zuuluu = michal.profanity;
            tangon = michal.sexualContent;
            michal = michal.slurs;
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 2;
            entity = golfie[entity];
            oscard = report.bind(oscard)(entity);
            report = oscard.useIsEligibleForKeywordFiltering;
            entity = {};
            golfie = 'use-should-filter-keywords';
            entity['location'] = golfie;
            entity = report.bind(oscard)(entity);
            report = !entity;
            entity = !report;
            if(report) { _fun00006_ip = 110; continue _fun00005 }
 83:
            if(zuuluu) { _fun00006_ip = 89; continue _fun00005 }
 86:
            zuuluu = tangon;
 89:
            if(zuuluu) { _fun00006_ip = 95; continue _fun00005 }
 92:
            zuuluu = michal;
 95:
            michal = null;
            michal = michal != zuuluu;
            if(!michal) { _fun00006_ip = 107; continue _fun00005 }
 104:
            michal = zuuluu;
 107:
            entity = michal;
 110:
            return entity;
        }
    };
    zuuluu['useShouldFilterKeywords'] = michal;
    return entity;
})();