// app/modules/threads/ThreadMemberListHooks.tsx
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StatusTypes;
    var _closure1_slot6 = tango;
    tango = new Array(0);
    var _closure1_slot7 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/ThreadMemberListHooks.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useThreadMemberListSections
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argBar;
            mike = argFoo;
            var _closure2_slot0 = mike;
            var _closure2_slot1 = report;
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 4;
            zulu = golf[zulu];
            oscar = undefined;
            tango = tango.bind(oscar)(zulu);
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
                    tango = null;
                    report = tango == entity;
                    entity = undefined;
                    zulu = undefined;
                    if(report) { _fun00004_ip = 29; continue _fun00003 }
 20:
                    report = _closure2_slot1;
                    zulu = report.id;
 29:
                    if(!(tango != zulu)) { _fun00004_ip = 100; continue _fun00003 }
 33:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 5;
                    zulu = options[zulu];
                    oscar = golf.bind(entity)(zulu);
                    report = oscar.subscribeChannel;
                    zulu = _closure2_slot1;
                    tango = zulu.id;
                    zulu = _closure2_slot0;
                    mike = 6;
                    mike = options[mike];
                    mike = golf.bind(entity)(mike);
                    mike = mike.DEFAULT_RANGES;
                    mike = report.bind(oscar)(tango, zulu, mike);
 100:
                    return entity;
                }
            };
            zulu = tango.bind(oscar)(zulu);
            tango = _closure1_slot0;
            zulu = 7;
            options = golf[zulu];
            yankee = tango.bind(oscar)(options);
            offset = yankee.useStateFromStores;
            options = _closure1_slot4;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity != zulu;
                    entity = undefined;
                    if(!zulu) { _fun00006_ip = 45; continue _fun00005 }
 18:
                    tango = _closure1_slot4;
                    zulu = tango.getRoles;
                    mike = _closure2_slot1;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 45:
                    return entity;
                }
            };
            offset = offset.bind(yankee)(verify, options);
            var _closure2_slot2 = offset;
            zulu = golf[zulu];
            golf = tango.bind(oscar)(zulu);
            oscar = golf.useStateFromStoresObject;
            zulu = _closure1_slot5;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                entity = {};
                tango = _closure1_slot5;
                mike = tango.getMemberListVersion;
                zulu = _closure2_slot0;
                mike = mike.bind(tango)(zulu);
                entity['version'] = mike;
                mike = tango.getMemberListSections;
                mike = mike.bind(tango)(zulu);
                entity['members'] = mike;
                return entity;
            };
            zulu = oscar.bind(golf)(tango, zulu);
            verify = zulu.version;
            tango = zulu.members;
            var _closure2_slot3 = tango;
            zulu = null;
            options = zulu == report;
            var _closure2_slot4 = options;
            golf = _closure1_slot3;
            oscar = golf.useMemo;
            report = new Array(4);
            report[0] = offset;
            report[1] = tango;
            report[2] = verify;
            report[3] = options;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = _closure2_slot4;
                    if(tango) { _fun00008_ip = 175; continue _fun00007 }
 18:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    tango = 8;
                    tango = report[tango];
                    report = undefined;
                    tango = oscar.bind(report)(tango);
                    zulu = _closure2_slot2;
                    tango = tango.bind(report)(zulu);
                    zulu = tango.values;
                    report = zulu.bind(tango)();
                    tango = report.filter;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.hoist;
                        return entity;
                    };
                    report = tango.bind(report)(zulu);
                    tango = report.sortBy;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.position;
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.reverse;
                    report = zulu.bind(tango)();
                    tango = report.map;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.value;
                    tango = zulu.bind(tango)();
                    oscar = tango.push;
                    zulu = _closure1_slot6;
                    report = zulu.ONLINE;
                    zulu = zulu.OFFLINE;
                    zulu = oscar.bind(tango)(report, zulu);
                    zulu = tango.map;
                    mike = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            mike = argFoo;
                            entity = {};
                            zulu = _closure1_slot6;
                            zulu = zulu.ONLINE;
                            if(!(mike !== zulu)) { _fun00010_ip = 154; continue _fun00009 }
 25:
                            zulu = _closure1_slot6;
                            zulu = zulu.OFFLINE;
                            if(!(mike !== zulu)) { _fun00010_ip = 95; continue _fun00009 }
 39:
                            report = _closure2_slot2;
                            zulu = null;
                            golf = zulu == report;
                            report = undefined;
                            if(golf) { _fun00010_ip = 79; continue _fun00009 }
 57:
                            oscar = _closure2_slot2;
                            oscar = oscar[mike];
                            golf = zulu == oscar;
                            report = undefined;
                            if(golf) { _fun00010_ip = 79; continue _fun00009 }
 74:
                            report = oscar.name;
 79:
                            oscar = zulu != report;
                            zulu = '';
                            if(!oscar) { _fun00010_ip = 93; continue _fun00009 }
 90:
                            zulu = report;
 93:
                            _fun00010_ip = 152; continue _fun00009;
 95:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            report = 9;
                            oscar = offset[report];
                            options = undefined;
                            oscar = verify.bind(options)(oscar);
                            golf = oscar.intl;
                            oscar = golf.string;
                            report = offset[report];
                            report = verify.bind(options)(report);
                            report = report.t;
                            report = report.Vv0abG;
                            zulu = oscar.bind(golf)(report);
 152:
                            _fun00010_ip = 211; continue _fun00009;
 154:
                            options = _closure1_slot0;
                            verify = _closure1_slot2;
                            tango = 9;
                            report = verify[tango];
                            golf = undefined;
                            report = options.bind(golf)(report);
                            oscar = report.intl;
                            report = oscar.string;
                            tango = verify[tango];
                            tango = options.bind(golf)(tango);
                            tango = tango.t;
                            tango = tango.WbGtnJ;
                            zulu = report.bind(oscar)(tango);
 211:
                            entity['label'] = zulu;
                            zulu = _closure2_slot3;
                            tango = null;
                            oscar = tango == zulu;
                            zulu = undefined;
                            if(oscar) { _fun00010_ip = 256; continue _fun00009 }
 233:
                            report = _closure2_slot3;
                            report = report[mike];
                            oscar = tango == report;
                            zulu = undefined;
                            if(oscar) { _fun00010_ip = 256; continue _fun00009 }
 250:
                            zulu = report.userIds;
 256:
                            if(!(tango == zulu)) { _fun00010_ip = 264; continue _fun00009 }
 260:
                            zulu = new Array(0);
 264:
                            entity['userIds'] = zulu;
                            entity['id'] = mike;
                            entity['roleId'] = mike;
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    return mike;
 175:
                    entity = _closure1_slot7;
                    return entity;
                }
            };
            entity = oscar.bind(golf)(entity, report);
            if(!(zulu == tango)) { _fun00002_ip = 219; continue _fun00001 }
 215:
            entity = _closure1_slot7;
 219:
            return entity;
        }
    };
    zulu['useThreadMemberListSections'] = mike;
    return entity;
})();