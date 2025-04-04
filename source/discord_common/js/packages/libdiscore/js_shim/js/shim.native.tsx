// discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    tangon = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = tangon;
    var _closure1_slot1 = report;
    entity = function() { // Original name: _initLibdiscore
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 12; continue _fun00001 }
 7:
                    michal = undefined;
                    return michal;
 12:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 0;
    golfie = report[entity];
    oscard = argBaz;
    entity = undefined;
    oscard = oscard.bind(entity)(golfie);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = report[oscard];
    oscard = tangon.bind(entity)(oscard);
    oscard = oscard.NativeModules;
    var _closure1_slot3 = oscard;
    oscard = 3;
    oscard = report[oscard];
    option = tangon.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = '../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function() { // Original name: isLibdiscoreLoadedTest
        entity = _closure1_slot3;
        michal = entity.LibDiscoreModule;
        entity = undefined;
        entity = entity !== michal;
        return entity;
    };
    zuuluu['isLibdiscoreLoadedTest'] = oscard;
    oscard = function() { // Original name: initLibdiscore
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['initLibdiscore'] = oscard;
    oscard = function(argFoo) { // Original name: isBlockedDomain
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.BlockedDomainsStore;
        michal = zuuluu.isBlockedDomain;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isBlockedDomain'] = oscard;
    oscard = function(argFoo) { // Original name: startFetchingBlockedDomains
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.BlockedDomainsStore;
        zuuluu = tangon.startFetchingBlockedDomains;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['startFetchingBlockedDomains'] = oscard;
    michal = function() { // Original name: consumeLogs
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        entity = michal.consumeLogs;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['consumeLogs'] = michal;
    michal = 2;
    oscard = report[michal];
    oscard = tangon.bind(entity)(oscard);
    oscard = oscard.rustMultiply;
    zuuluu['rustMultiply'] = oscard;
    michal = report[michal];
    michal = tangon.bind(entity)(michal);
    michal = michal.crash;
    zuuluu['crash'] = michal;
    return entity;
})();