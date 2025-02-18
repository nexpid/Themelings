// app/modules/main_tabs_v2/UserSearchUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: cleanString
        tangon = argFoo;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.stripDiacritics;
        entity = tangon.toLocaleLowerCase;
        entity = entity.bind(tangon)();
        michal = michal.bind(zuuluu)(entity);
        entity = michal.trim;
        entity = entity.bind(michal)();
        return entity;
    };
    var _closure1_slot7 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.RelationshipTypes;
    var _closure1_slot6 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/UserSearchUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['cleanString'] = tangon;
    tangon = function(argFoo) { // Original name: getRelationshipType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            zuuluu = _closure1_slot5;
            entity = zuuluu.getRelationshipType;
            report = entity.bind(zuuluu)(oscard);
            entity = _closure1_slot6;
            zuuluu = entity.NONE;
            entity = report;
            if(!(report === zuuluu)) { _fun00002_ip = 72; continue _fun00001 }
 38:
            tangon = _closure1_slot3;
            zuuluu = tangon.getSuggestion;
            tangon = zuuluu.bind(tangon)(oscard);
            zuuluu = null;
            entity = report;
            if(!(zuuluu != tangon)) { _fun00002_ip = 72; continue _fun00001 }
 62:
            michal = _closure1_slot6;
            entity = michal.SUGGESTION;
 72:
            return entity;
        }
    };
    zuuluu['getRelationshipType'] = tangon;
    michal = function(argFoo) { // Original name: getNames
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            zuuluu = {};
            var _closure2_slot0 = zuuluu;
            golfie = _closure1_slot5;
            oscard = golfie.getNickname;
            michal = tangon.id;
            michal = oscard.bind(golfie)(michal);
            offset = null;
            if(!(offset != michal)) { _fun00004_ip = 69; continue _fun00003 }
 40:
            golfie = _closure1_slot7;
            oscard = undefined;
            option = golfie.bind(oscard)(michal);
            golfie = option.split;
            oscard = ' ';
            oscard = golfie.bind(option)(oscard);
            zuuluu[michal] = oscard;
 69:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 5;
            oscard = option[oscard];
            verify = undefined;
            golfie = golfie.bind(verify)(oscard);
            oscard = golfie.getGlobalName;
            golfie = oscard.bind(golfie)(tangon);
            oscard = offset != golfie;
            if(!oscard) { _fun00004_ip = 117; continue _fun00003 }
 109:
            option = zuuluu[golfie];
            oscard = offset == option;
 117:
            if(!oscard) { _fun00004_ip = 147; continue _fun00003 }
 120:
            oscard = _closure1_slot7;
            offset = oscard.bind(verify)(golfie);
            option = offset.split;
            oscard = ' ';
            oscard = option.bind(offset)(oscard);
            zuuluu[golfie] = oscard;
 147:
            golfie = tangon.username;
            option = _closure1_slot7;
            oscard = tangon.username;
            verify = option.bind(verify)(oscard);
            option = verify.split;
            oscard = ' ';
            oscard = option.bind(verify)(oscard);
            zuuluu[golfie] = oscard;
            oscard = _closure1_slot4;
            report = oscard.getNicknames;
            tangon = tangon.id;
            report = report.bind(oscard)(tangon);
            tangon = report.forEach;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure2_slot0;
                    tangon = michal[zuuluu];
                    michal = null;
                    if(!(michal == tangon)) { _fun00006_ip = 56; continue _fun00005 }
 20:
                    michal = _closure2_slot0;
                    tangon = _closure1_slot7;
                    entity = undefined;
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.split;
                    entity = ' ';
                    entity = tangon.bind(report)(entity);
                    michal[zuuluu] = entity;
 56:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tangon.bind(report)(entity);
            entity = {};
            entity['names'] = zuuluu;
            entity['nick'] = michal;
            return entity;
        }
    };
    zuuluu['getNames'] = michal;
    return entity;
})();