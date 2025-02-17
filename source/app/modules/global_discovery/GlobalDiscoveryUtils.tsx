// app/modules/global_discovery/GlobalDiscoveryUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.GLOBAL_DISCOVERY_DEFAULT_TAB;
    var _closure1_slot2 = golf;
    tango = tango.GlobalDiscoveryTab;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery/GlobalDiscoveryUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getGlobalDiscoveryTabTitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot3;
            mike = mike.SERVERS;
            if(!(mike !== report)) { _fun00002_ip = 208; continue _fun00001 }
 23:
            mike = _closure1_slot3;
            mike = mike.APPS;
            if(!(mike !== report)) { _fun00002_ip = 147; continue _fun00001 }
 37:
            mike = _closure1_slot3;
            mike = mike.QUESTS;
            if(!(mike !== report)) { _fun00002_ip = 86; continue _fun00001 }
 51:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.assertNever;
            zulu = zulu.bind(tango)(report);
            return mike;
 86:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.EcaD4e;
            mike = zulu.bind(tango)(mike);
            return mike;
 147:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.bGwCoa;
            mike = zulu.bind(tango)(mike);
            return mike;
 208:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 1;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.+Anbp6;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getGlobalDiscoveryTabTitle'] = tango;
    mike = function(argFoo) { // Original name: getSelectedTabFromPathname
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            zulu = mike.startsWith;
            entity = '/discovery/applications';
            entity = zulu.bind(mike)(entity);
            if(entity) { _fun00004_ip = 82; continue _fun00003 }
 23:
            entity = '/discovery/quests';
            if(!(entity !== mike)) { _fun00004_ip = 67; continue _fun00003 }
 33:
            entity = '/discovery/servers';
            if(!(entity !== mike)) { _fun00004_ip = 52; continue _fun00003 }
 43:
            entity = _closure1_slot2;
            return entity;
 52:
            entity = _closure1_slot3;
            entity = entity.SERVERS;
            return entity;
 67:
            entity = _closure1_slot3;
            entity = entity.QUESTS;
            return entity;
 82:
            entity = _closure1_slot3;
            entity = entity.APPS;
            return entity;
        }
    };
    zulu['getSelectedTabFromPathname'] = mike;
    return entity;
})();