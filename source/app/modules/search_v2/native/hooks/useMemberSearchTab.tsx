// app/modules/search_v2/native/hooks/useMemberSearchTab.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    tango = global;
    yankee = tango.Object;
    offset = yankee.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.createZustandStore;
    options = 2;
    options = oscar[options];
    options = verify.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = report.bind(entity)(options);
    verify = options.getIsAutocompleteVisible;
    var _closure1_slot6 = verify;
    verify = options.subscribeTextInputValue;
    var _closure1_slot7 = verify;
    options = options.useSearchTagsChannelIds;
    var _closure1_slot8 = options;
    options = 4;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.Permissions;
    var _closure1_slot9 = options;
    options = 5;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.AutocompleterResultTypes;
    var _closure1_slot10 = options;
    offset = new Array(0);
    var _closure1_slot11 = offset;
    verify = tango.Object;
    options = verify.freeze;
    tango = {'searchResultsQuery': '', 'data': null, 'isFetching': false, 'count': null};
    tango['data'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot12 = tango;
    tango = function() {
        entity = _closure1_slot12;
        return entity;
    };
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/hooks/useMemberSearchTab.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useMemberSearchTabCount
        _fun113690: for(var _fun113690_ip = 0; ; ) switch(_fun113690_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            report = _closure1_slot0;
            oscar = _closure1_slot3;
            zulu = 6;
            zulu = oscar[zulu];
            oscar = undefined;
            report = report.bind(oscar)(zulu);
            zulu = report.useIsMembersTabVisible;
            zulu = zulu.bind(report)(tango);
            var _closure2_slot1 = zulu;
            report = _closure1_slot8;
            offset = report.bind(oscar)(tango);
            golf = offset.size;
            options = 0;
            report = null;
            if(!(options !== golf)) { _fun113690_ip = 110; continue _fun113690 }
 71:
            verify = offset.size;
            golf = 1;
            oscar = null;
            if(!(golf === verify)) { _fun113690_ip = 107; continue _fun113690 }
 85:
            golf = global;
            verify = golf.Array;
            golf = verify.from;
            golf = golf.bind(verify)(offset);
            oscar = golf[options];
 107:
            report = oscar;
 110:
            var _closure2_slot2 = report;
            oscar = _closure1_slot4;
            options = oscar.useCallback;
            golf = new Array(1);
            golf[0] = report;
            report = function(argFoo, argBar) {
                _fun113691: for(var _fun113691_ip = 0; ; ) switch(_fun113691_ip) {
 0:
                    report = argFoo;
                    oscar = _closure1_slot13;
                    tango = oscar.getField;
                    zulu = 'searchResultsQuery';
                    tango = tango.bind(oscar)(zulu);
                    zulu = argBar;
                    if(!(tango === zulu)) { _fun113691_ip = 121; continue _fun113691 }
 34:
                    tango = new Array(0);
                    var _closure3_slot0 = tango;
                    golf = _closure1_slot5;
                    oscar = golf.getChannel;
                    zulu = _closure2_slot2;
                    zulu = oscar.bind(golf)(zulu);
                    var _closure3_slot1 = zulu;
                    zulu = report.forEach;
                    mike = function(argFoo) {
                        _fun113692: for(var _fun113692_ip = 0; ; ) switch(_fun113692_ip) {
 0:
                            zulu = argFoo;
                            mike = zulu.type;
                            entity = _closure1_slot10;
                            entity = entity.USER;
                            if(!(mike === entity)) { _fun113692_ip = 125; continue _fun113692 }
 25:
                            tango = _closure3_slot1;
                            mike = null;
                            if(!(mike != tango)) { _fun113692_ip = 111; continue _fun113692 }
 38:
                            report = _closure1_slot2;
                            tango = _closure1_slot3;
                            mike = 7;
                            tango = tango[mike];
                            mike = undefined;
                            oscar = report.bind(mike)(tango);
                            report = oscar.can;
                            tango = {};
                            golf = _closure1_slot9;
                            golf = golf.VIEW_CHANNEL;
                            tango['permission'] = golf;
                            golf = zulu.record;
                            tango['user'] = golf;
                            golf = _closure3_slot1;
                            tango['context'] = golf;
                            tango = report.bind(oscar)(tango);
                            if(tango) { _fun113692_ip = 111; continue _fun113692 }
 109:
                            return mike;
 111:
                            mike = _closure3_slot0;
                            entity = mike.push;
                            entity = entity.bind(mike)(zulu);
 125:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = zulu.bind(report)(mike);
                    zulu = _closure1_slot13;
                    mike = zulu.setState;
                    entity = {};
                    report = false;
                    entity['isFetching'] = report;
                    entity['data'] = tango;
                    tango = tango.length;
                    entity['count'] = tango;
                    entity = mike.bind(zulu)(entity);
 121:
                    entity = undefined;
                    return entity;
                }
            };
            report = options.bind(oscar)(report, golf);
            var _closure2_slot3 = report;
            options = oscar.useMemo;
            golf = new Array(2);
            golf[0] = report;
            report = tango.guildId;
            golf[1] = report;
            report = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 8;
                zulu = zulu[mike];
                mike = undefined;
                oscar = tango.bind(mike)(zulu);
                offset = _closure2_slot3;
                entity = _closure1_slot10;
                entity = entity.USER;
                tango = new Array(1);
                tango[0] = entity;
                zulu = {};
                entity = {};
                mike = _closure2_slot0;
                mike = mike.guildId;
                entity['guild'] = mike;
                mike = true;
                entity['strict'] = mike;
                zulu['userFilters'] = entity;
                entity = oscar.prototype;
                mike = Object.create(entity, {constructor: {value: oscar}});
                options = 50;
                yankee = mike;
                verify = tango;
                golf = zulu;
                entity = new yankee[oscar](offset, verify, options, golf, oscar);
                entity = entity instanceof Object ? entity : mike;
                mike = entity.createSearchContext;
                mike = mike.bind(entity)();
                return entity;
            };
            golf = options.bind(oscar)(report, golf);
            var _closure2_slot4 = golf;
            verify = oscar.useCallback;
            options = new Array(2);
            options[0] = golf;
            options[1] = tango;
            report = function(argFoo) {
                _fun113694: for(var _fun113694_ip = 0; ; ) switch(_fun113694_ip) {
 0:
                    report = argFoo;
                    oscar = _closure1_slot6;
                    tango = _closure2_slot0;
                    entity = undefined;
                    tango = oscar.bind(entity)(tango);
                    if(tango) { _fun113694_ip = 168; continue _fun113694 }
 30:
                    tango = report.trim;
                    oscar = tango.bind(report)();
                    tango = '';
                    if(!(tango !== oscar)) { _fun113694_ip = 154; continue _fun113694 }
 48:
                    golf = _closure1_slot13;
                    oscar = golf.setState;
                    tango = {'isFetching': true, 'data': null, 'count': 0};
                    options = _closure1_slot11;
                    tango['data'] = options;
                    tango['searchResultsQuery'] = report;
                    tango = oscar.bind(golf)(tango);
                    oscar = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 9;
                    tango = golf[tango];
                    options = oscar.bind(entity)(tango);
                    golf = options.requestMembers;
                    tango = _closure2_slot0;
                    oscar = tango.guildId;
                    tango = 50;
                    tango = golf.bind(options)(oscar, report, tango);
                    tango = _closure2_slot4;
                    zulu = tango.search;
                    zulu = zulu.bind(tango)(report);
                    _fun113694_ip = 168; continue _fun113694;
 154:
                    zulu = _closure1_slot13;
                    mike = zulu.resetState;
                    mike = mike.bind(zulu)();
 168:
                    return entity;
                }
            };
            verify = verify.bind(oscar)(report, options);
            var _closure2_slot5 = verify;
            options = oscar.useEffect;
            report = new Array(4);
            report[0] = golf;
            report[1] = zulu;
            report[2] = verify;
            report[3] = tango;
            tango = function() {
                _fun113695: for(var _fun113695_ip = 0; ; ) switch(_fun113695_ip) {
 0:
                    mike = _closure2_slot1;
                    if(mike) { _fun113695_ip = 14; continue _fun113695 }
 10:
                    mike = undefined;
                    return mike;
 14:
                    report = _closure1_slot0;
                    tango = _closure1_slot3;
                    zulu = 10;
                    zulu = tango[zulu];
                    tango = undefined;
                    golf = report.bind(tango)(zulu);
                    oscar = golf.debounce;
                    report = _closure2_slot5;
                    zulu = 250;
                    zulu = oscar.bind(golf)(report, zulu);
                    mike = _closure1_slot7;
                    entity = _closure2_slot0;
                    entity = mike.bind(tango)(entity, zulu);
                    return entity;
                }
            };
            tango = options.bind(oscar)(tango, report);
            report = oscar.useEffect;
            tango = new Array(1);
            tango[0] = golf;
            mike = function() {
                entity = function() {
                    mike = _closure2_slot4;
                    entity = mike.clean;
                    entity = entity.bind(mike)();
                    mike = _closure1_slot13;
                    entity = mike.resetState;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                return entity;
            };
            mike = report.bind(oscar)(mike, tango);
            tango = _closure1_slot13;
            mike = tango.useField;
            entity = 'count';
            mike = mike.bind(tango)(entity);
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        }
    };
    zulu['default'] = tango;
    tango = function() { // Original name: useIsMemberSearchTabFetching
        zulu = _closure1_slot13;
        mike = zulu.useField;
        entity = 'isFetching';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useIsMemberSearchTabFetching'] = tango;
    mike = function() { // Original name: useMemberSearchTabResults
        zulu = _closure1_slot13;
        mike = zulu.useField;
        entity = 'data';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useMemberSearchTabResults'] = mike;
    return entity;
})();