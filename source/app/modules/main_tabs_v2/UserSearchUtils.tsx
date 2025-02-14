// app/modules/main_tabs_v2/UserSearchUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: cleanString
        tango = argFoo;
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.stripDiacritics;
        entity = tango.toLocaleLowerCase;
        entity = entity.bind(tango)();
        mike = mike.bind(zulu)(entity);
        entity = mike.trim;
        entity = entity.bind(mike)();
        return entity;
    };
    var _closure1_slot7 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.RelationshipTypes;
    var _closure1_slot6 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/UserSearchUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['cleanString'] = tango;
    tango = function(argFoo) { // Original name: getRelationshipType
        _fun61065: for(var _fun61065_ip = 0; ; ) switch(_fun61065_ip) {
 0:
            oscar = argFoo;
            zulu = _closure1_slot5;
            entity = zulu.getRelationshipType;
            report = entity.bind(zulu)(oscar);
            entity = _closure1_slot6;
            zulu = entity.NONE;
            entity = report;
            if(!(report === zulu)) { _fun61065_ip = 72; continue _fun61065 }
 38:
            tango = _closure1_slot3;
            zulu = tango.getSuggestion;
            tango = zulu.bind(tango)(oscar);
            zulu = null;
            entity = report;
            if(!(zulu != tango)) { _fun61065_ip = 72; continue _fun61065 }
 62:
            mike = _closure1_slot6;
            entity = mike.SUGGESTION;
 72:
            return entity;
        }
    };
    zulu['getRelationshipType'] = tango;
    mike = function(argFoo) { // Original name: getNames
        _fun61066: for(var _fun61066_ip = 0; ; ) switch(_fun61066_ip) {
 0:
            tango = argFoo;
            zulu = {};
            var _closure2_slot0 = zulu;
            golf = _closure1_slot5;
            oscar = golf.getNickname;
            mike = tango.id;
            mike = oscar.bind(golf)(mike);
            offset = null;
            if(!(offset != mike)) { _fun61066_ip = 69; continue _fun61066 }
 40:
            golf = _closure1_slot7;
            oscar = undefined;
            options = golf.bind(oscar)(mike);
            golf = options.split;
            oscar = ' ';
            oscar = golf.bind(options)(oscar);
            zulu[mike] = oscar;
 69:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 5;
            oscar = options[oscar];
            verify = undefined;
            golf = golf.bind(verify)(oscar);
            oscar = golf.getGlobalName;
            golf = oscar.bind(golf)(tango);
            oscar = offset != golf;
            if(!oscar) { _fun61066_ip = 117; continue _fun61066 }
 109:
            options = zulu[golf];
            oscar = offset == options;
 117:
            if(!oscar) { _fun61066_ip = 147; continue _fun61066 }
 120:
            oscar = _closure1_slot7;
            offset = oscar.bind(verify)(golf);
            options = offset.split;
            oscar = ' ';
            oscar = options.bind(offset)(oscar);
            zulu[golf] = oscar;
 147:
            golf = tango.username;
            options = _closure1_slot7;
            oscar = tango.username;
            verify = options.bind(verify)(oscar);
            options = verify.split;
            oscar = ' ';
            oscar = options.bind(verify)(oscar);
            zulu[golf] = oscar;
            oscar = _closure1_slot4;
            report = oscar.getNicknames;
            tango = tango.id;
            report = report.bind(oscar)(tango);
            tango = report.forEach;
            entity = function(argFoo) {
                _fun61067: for(var _fun61067_ip = 0; ; ) switch(_fun61067_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure2_slot0;
                    tango = mike[zulu];
                    mike = null;
                    if(!(mike == tango)) { _fun61067_ip = 56; continue _fun61067 }
 20:
                    mike = _closure2_slot0;
                    tango = _closure1_slot7;
                    entity = undefined;
                    report = tango.bind(entity)(zulu);
                    tango = report.split;
                    entity = ' ';
                    entity = tango.bind(report)(entity);
                    mike[zulu] = entity;
 56:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tango.bind(report)(entity);
            entity = {};
            entity['names'] = zulu;
            entity['nick'] = mike;
            return entity;
        }
    };
    zulu['getNames'] = mike;
    return entity;
})();