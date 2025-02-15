// app/modules/app_launcher/hooks/useSortedSectionCommands.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.CommandListSortOrder;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/hooks/useSortedSectionCommands.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useSortedSectionCommands
        _fun118970: for(var _fun118970_ip = 0; ; ) switch(_fun118970_ip) {
 0:
            entity = argFoo;
            verify = entity.sectionId;
            var _closure2_slot0 = verify;
            entity = entity.commandsByActiveSection;
            var _closure2_slot1 = entity;
            yankee = _closure1_slot4;
            zulu = yankee.useState;
            golf = _closure1_slot5;
            mike = golf.ALPHABETICAL;
            tango = zulu.bind(yankee)(mike);
            zulu = _closure1_slot3;
            offset = undefined;
            mike = 2;
            zulu = zulu.bind(offset)(tango, mike);
            mike = 0;
            report = zulu[mike];
            mike = 1;
            tango = zulu[mike];
            var _closure2_slot2 = tango;
            zulu = yankee.useMemo;
            mike = new Array(2);
            mike[0] = entity;
            mike[1] = verify;
            entity = function() {
                _fun118971: for(var _fun118971_ip = 0; ; ) switch(_fun118971_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = zulu.find;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.section;
                        mike = entity.id;
                        entity = _closure2_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    zulu = mike.bind(zulu)(entity);
                    mike = null;
                    tango = mike == zulu;
                    entity = undefined;
                    if(tango) { _fun118971_ip = 42; continue _fun118971 }
 37:
                    entity = zulu.data;
 42:
                    if(!(mike == entity)) { _fun118971_ip = 50; continue _fun118971 }
 46:
                    entity = new Array(0);
 50:
                    return entity;
                }
            };
            entity = zulu.bind(yankee)(entity, mike);
            zulu = {};
            zulu['alphabeticalSortedCommands'] = entity;
            mike = function(argFoo) { // Original name: usePopularSortedCommands
                mike = argFoo;
                report = mike.alphabeticalSortedCommands;
                var _closure3_slot0 = report;
                tango = _closure1_slot4;
                zulu = tango.useMemo;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    _fun118974: for(var _fun118974_ip = 0; ; ) switch(_fun118974_ip) {
 0:
                        entity = _closure3_slot0;
                        zulu = entity.length;
                        entity = 1;
                        if(!(!(zulu <= entity))) { _fun118974_ip = 128; continue _fun118974 }
 21:
                        entity = false;
                        var _closure4_slot0 = entity;
                        oscar = _closure3_slot0;
                        report = oscar.map;
                        zulu = function(argFoo, argBar) {
                            _fun118975: for(var _fun118975_ip = 0; ; ) switch(_fun118975_ip) {
 0:
                                mike = argFoo;
                                entity = _closure4_slot0;
                                if(entity) { _fun118975_ip = 25; continue _fun118975 }
 13:
                                report = mike.global_popularity_rank;
                                tango = null;
                                entity = tango != report;
 25:
                                _closure4_slot0 = entity;
                                entity = {};
                                entity['command'] = mike;
                                mike = argBar;
                                entity['alphabeticalSortIndex'] = mike;
                                return entity;
                            }
                        };
                        oscar = report.bind(oscar)(zulu);
                        report = _closure4_slot0;
                        zulu = {};
                        if(report) { _fun118974_ip = 76; continue _fun118974 }
 57:
                        report = _closure3_slot0;
                        zulu['popularSortedCommands'] = report;
                        zulu['canSort'] = entity;
                        entity = zulu;
                        _fun118974_ip = 126; continue _fun118974;
 76:
                        golf = oscar.sort;
                        report = function(argFoo, argBar) {
                            _fun118976: for(var _fun118976_ip = 0; ; ) switch(_fun118976_ip) {
 0:
                                tango = argFoo;
                                zulu = argBar;
                                entity = tango.command;
                                mike = entity.global_popularity_rank;
                                entity = zulu.command;
                                entity = entity.global_popularity_rank;
                                report = null;
                                if(!(report != mike)) { _fun118976_ip = 40; continue _fun118976 }
 36:
                                if(!(report == entity)) { _fun118976_ip = 61; continue _fun118976 }
 40:
                                if(!(report == mike)) { _fun118976_ip = 53; continue _fun118976 }
 44:
                                if(!(report != entity)) { _fun118976_ip = 65; continue _fun118976 }
 48:
                                report = 1;
                                return report;
 53:
                                report = -1;
                                return report;
 61:
                                if(!(mike === entity)) { _fun118976_ip = 83; continue _fun118976 }
 65:
                                tango = tango.alphabeticalSortIndex;
                                zulu = zulu.alphabeticalSortIndex;
                                zulu = tango - zulu;
                                return zulu;
 83:
                                entity = mike - entity;
                                return entity;
                            }
                        };
                        report = golf.bind(oscar)(report);
                        report = oscar.map;
                        tango = function(argFoo) {
                            entity = argFoo;
                            entity = entity.command;
                            return entity;
                        };
                        tango = report.bind(oscar)(tango);
                        zulu['popularSortedCommands'] = tango;
                        tango = true;
                        zulu['canSort'] = tango;
                        entity = zulu;
 126:
                        return entity;
 128:
                        entity = {};
                        mike = _closure3_slot0;
                        entity['popularSortedCommands'] = mike;
                        mike = false;
                        entity['canSort'] = mike;
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            mike = mike.bind(offset)(zulu);
            zulu = mike.popularSortedCommands;
            mike = mike.canSort;
            var _closure2_slot3 = mike;
            romeo = yankee.useEffect;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                zulu = _closure1_slot1;
                options = _closure1_slot2;
                entity = 3;
                mike = options[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.getApplication;
                zulu = _closure2_slot0;
                mike = {};
                golf = _closure1_slot0;
                oscar = 4;
                oscar = options[oscar];
                oscar = golf.bind(entity)(oscar);
                oscar = oscar.Millis;
                oscar = oscar.DAY;
                mike['dontRefetchMs'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            verify = romeo.bind(yankee)(verify, offset);
            offset = yankee.useLayoutEffect;
            verify = new Array(1);
            verify[0] = mike;
            options = function() {
                _fun118979: for(var _fun118979_ip = 0; ; ) switch(_fun118979_ip) {
 0:
                    mike = _closure2_slot3;
                    if(!mike) { _fun118979_ip = 34; continue _fun118979 }
 10:
                    zulu = _closure2_slot2;
                    entity = _closure1_slot5;
                    mike = entity.POPULAR;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 34:
                    entity = undefined;
                    return entity;
                }
            };
            options = offset.bind(yankee)(options, verify);
            golf = golf.POPULAR;
            if(!(golf !== report)) { _fun118970_ip = 225; continue _fun118970 }
 212:
            oscar = _closure1_slot5;
            oscar = oscar.ALPHABETICAL;
            zulu = entity;
 225:
            entity = {};
            entity['sortOrder'] = report;
            entity['setSortOrder'] = tango;
            entity['commands'] = zulu;
            entity['canSort'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();