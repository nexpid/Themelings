// app/modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SuggestedFriendSource;
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useSuggestedFriends
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            tango = null;
            if(!(tango == mike)) { _fun00002_ip = 13; continue _fun00001 }
 11:
            mike = {};
 13:
            golf = mike.isConnected;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 4;
            mike = oscar[mike];
            verify = undefined;
            options = report.bind(verify)(mike);
            oscar = options.useStateFromStoresArray;
            mike = _closure1_slot5;
            report = new Array(1);
            report[0] = mike;
            mike = function() {
                mike = _closure1_slot5;
                entity = mike.getSuggestions;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = oscar.bind(options)(report, mike);
            var _closure2_slot0 = mike;
            options = _closure1_slot4;
            oscar = options.useState;
            report = new Array(0);
            options = oscar.bind(options)(report);
            oscar = _closure1_slot3;
            report = 2;
            options = oscar.bind(verify)(options, report);
            report = 0;
            oscar = options[report];
            var _closure2_slot1 = oscar;
            report = 1;
            report = options[report];
            tango = tango == golf;
            if(tango) { _fun00002_ip = 137; continue _fun00001 }
 134:
            tango = golf;
 137:
            var _closure2_slot2 = tango;
            options = _closure1_slot4;
            golf = options.useMemo;
            zulu = new Array(3);
            zulu[0] = oscar;
            zulu[1] = mike;
            zulu[2] = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot2;
                    if(zulu) { _fun00004_ip = 18; continue _fun00003 }
 12:
                    zulu = new Array(0);
                    return zulu;
 18:
                    report = _closure2_slot1;
                    tango = report.filter;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        mike = entity.source;
                        entity = _closure1_slot6;
                        entity = entity.USER_SUGGESTIONS;
                        entity = mike === entity;
                        return entity;
                    };
                    oscar = tango.bind(report)(zulu);
                    tango = _closure2_slot0;
                    zulu = tango.map;
                    mike = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            mike = argFoo;
                            entity = {};
                            zulu = mike.user;
                            entity['user'] = zulu;
                            tango = mike.name;
                            zulu = null;
                            report = zulu != tango;
                            zulu = undefined;
                            if(!report) { _fun00006_ip = 33; continue _fun00005 }
 30:
                            zulu = tango;
 33:
                            entity['friendSuggestionName'] = zulu;
                            zulu = _closure1_slot6;
                            zulu = zulu.USER_SUGGESTIONS;
                            entity['source'] = zulu;
                            mike = mike.contactNames;
                            entity['contactNames'] = mike;
                            return entity;
                        }
                    };
                    report = zulu.bind(tango)(mike);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 5;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.unionBy;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.user;
                        entity = entity.id;
                        return entity;
                    };
                    zulu = zulu.bind(tango)(oscar, report, mike);
                    mike = zulu.sort;
                    entity = function(argFoo, argBar) {
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        entity = 6;
                        mike = oscar[entity];
                        tango = undefined;
                        golf = report.bind(tango)(mike);
                        zulu = golf.getName;
                        mike = argFoo;
                        mike = mike.user;
                        zulu = zulu.bind(golf)(mike);
                        mike = zulu.localeCompare;
                        entity = oscar[entity];
                        report = report.bind(tango)(entity);
                        tango = report.getName;
                        entity = argBar;
                        entity = entity.user;
                        entity = tango.bind(report)(entity);
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            zulu = golf.bind(options)(entity, zulu);
            entity = {};
            entity['added'] = oscar;
            entity['setAdded'] = report;
            entity['friendSuggestions'] = zulu;
            if(tango) { _fun00002_ip = 206; continue _fun00001 }
 199:
            mike = mike.length;
            _fun00002_ip = 211; continue _fun00001;
 206:
            mike = zulu.length;
 211:
            entity['numFriendSuggestions'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();