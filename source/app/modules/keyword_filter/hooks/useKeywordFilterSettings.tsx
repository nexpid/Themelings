// app/modules/keyword_filter/hooks/useKeywordFilterSettings.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot2 = tango;
    tango = function() { // Original name: useKeywordFilterSettings
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            report = tango.bind(mike)(zulu);
            tango = report.useStateFromStoresObject;
            entity = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure1_slot2;
                    entity = entity.settings;
                    zulu = entity.textAndImages;
                    mike = null;
                    tango = mike == zulu;
                    entity = undefined;
                    if(tango) { _fun00004_ip = 36; continue _fun00003 }
 30:
                    entity = zulu.keywordFilterSettings;
 36:
                    if(!(mike == entity)) { _fun00004_ip = 42; continue _fun00003 }
 40:
                    entity = {};
 42:
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu, entity);
            entity = {};
            oscar = zulu.profanity;
            tango = null;
            golf = tango == oscar;
            report = undefined;
            if(golf) { _fun00002_ip = 80; continue _fun00001 }
 75:
            report = oscar.value;
 80:
            entity['profanity'] = report;
            oscar = zulu.sexualContent;
            golf = tango == oscar;
            report = undefined;
            if(golf) { _fun00002_ip = 105; continue _fun00001 }
 100:
            report = oscar.value;
 105:
            entity['sexualContent'] = report;
            zulu = zulu.slurs;
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun00002_ip = 130; continue _fun00001 }
 125:
            mike = zulu.value;
 130:
            entity['slurs'] = mike;
            return entity;
        }
    };
    var _closure1_slot3 = tango;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/keyword_filter/hooks/useKeywordFilterSettings.tsx';
    report = oscar.bind(golf)(report);
    zulu['useKeywordFilterSettings'] = tango;
    mike = function() {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = _closure1_slot3;
            oscar = undefined;
            mike = mike.bind(oscar)();
            zulu = mike.profanity;
            tango = mike.sexualContent;
            mike = mike.slurs;
            report = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 2;
            entity = golf[entity];
            oscar = report.bind(oscar)(entity);
            report = oscar.useIsEligibleForKeywordFiltering;
            entity = {};
            golf = 'use-should-filter-keywords';
            entity['location'] = golf;
            entity = report.bind(oscar)(entity);
            report = !entity;
            entity = !report;
            if(report) { _fun00006_ip = 110; continue _fun00005 }
 83:
            if(zulu) { _fun00006_ip = 89; continue _fun00005 }
 86:
            zulu = tango;
 89:
            if(zulu) { _fun00006_ip = 95; continue _fun00005 }
 92:
            zulu = mike;
 95:
            mike = null;
            mike = mike != zulu;
            if(!mike) { _fun00006_ip = 107; continue _fun00005 }
 104:
            mike = zulu;
 107:
            entity = mike;
 110:
            return entity;
        }
    };
    zulu['useShouldFilterKeywords'] = mike;
    return entity;
})();