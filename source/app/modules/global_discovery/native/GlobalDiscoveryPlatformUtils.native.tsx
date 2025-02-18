// app/modules/global_discovery/native/GlobalDiscoveryPlatformUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GlobalDiscoveryTab;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/global_discovery/native/GlobalDiscoveryPlatformUtils.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: navigateToGlobalDiscovery
        entity = argFoo;
        oscard = entity.initialTab;
        report = entity.options;
        tangon = _closure1_slot2;
        zuuluu = tangon.setState;
        michal = {};
        michal['selectedTab'] = oscard;
        michal = zuuluu.bind(tangon)(michal);
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.navigateToRootTab;
        michal = {};
        oscard = 'discovery';
        michal['screen'] = oscard;
        michal['options'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['navigateToGlobalDiscovery'] = tangon;
    michal = function() { // Original name: handleGlobalDiscoveryTabPress
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot2;
            zuuluu = tangon.getField;
            michal = 'selectedTab';
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot3;
            michal = michal.SERVERS;
            if(!(zuuluu === michal)) { _fun00002_ip = 68; continue _fun00001 }
 36:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.handleTabPressPrefetch;
            entity = entity.bind(michal)();
 68:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['handleGlobalDiscoveryTabPress'] = michal;
    return entity;
})();