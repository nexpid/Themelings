// app/modules/global_discovery/native/GlobalDiscoveryPlatformUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GlobalDiscoveryTab;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery/native/GlobalDiscoveryPlatformUtils.native.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: navigateToGlobalDiscovery
        entity = argFoo;
        oscar = entity.initialTab;
        report = entity.options;
        tango = _closure1_slot2;
        zulu = tango.setState;
        mike = {};
        mike['selectedTab'] = oscar;
        mike = zulu.bind(tango)(mike);
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.navigateToRootTab;
        mike = {};
        oscar = 'discovery';
        mike['screen'] = oscar;
        mike['options'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['navigateToGlobalDiscovery'] = tango;
    mike = function() { // Original name: handleGlobalDiscoveryTabPress
        _fun91418: for(var _fun91418_ip = 0; ; ) switch(_fun91418_ip) {
 0:
            tango = _closure1_slot2;
            zulu = tango.getField;
            mike = 'selectedTab';
            zulu = zulu.bind(tango)(mike);
            mike = _closure1_slot3;
            mike = mike.SERVERS;
            if(!(zulu === mike)) { _fun91418_ip = 68; continue _fun91418 }
 36:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.handleTabPressPrefetch;
            entity = entity.bind(mike)();
 68:
            entity = undefined;
            return entity;
        }
    };
    zulu['handleGlobalDiscoveryTabPress'] = mike;
    return entity;
})();