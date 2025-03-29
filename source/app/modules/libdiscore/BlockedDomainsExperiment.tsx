// app/modules/libdiscore/BlockedDomainsExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    romeon = true;
    tangon['value'] = romeon;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    verify = tangon.CommonTriggerPoints;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Logger;
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    sizing = 'libdiscore';
    output = golfie;
    tangon = new output[option](sizing, kiloes);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-03_blocked_domains_libdiscore', 'label': 'Use Blocked Domains from Libdiscore'};
    offset = {};
    yankee = false;
    offset['enabled'] = yankee;
    tangon['defaultConfig'] = offset;
    verify = verify.CONNECTION_OPEN;
    tangon['commonTriggerPoint'] = verify;
    offset = {'id': 0, 'label': 'Control'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(2);
    verify[0] = offset;
    offset = {'id': 1, 'label': 'Enable libdiscore blocked domains'};
    yankee = {};
    yankee['enabled'] = romeon;
    offset['config'] = yankee;
    verify[1] = offset;
    tangon['treatments'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot3 = tangon;
    tangon = null;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/libdiscore/BlockedDomainsExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: isLibdiscoreBlockedDomainsEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = null;
            if(!(michal === zuuluu)) { _fun00002_ip = 163; continue _fun00001 }
 16:
            tangon = _closure1_slot3;
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            report = 'blockedDomains';
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.enabled;
            zuuluu = !michal;
            michal = !zuuluu;
            if(zuuluu) { _fun00002_ip = 116; continue _fun00001 }
 57:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 3;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.isLibdiscoreLoadedTest;
            tangon = zuuluu.bind(tangon)();
            michal = true;
            if(tangon) { _fun00002_ip = 116; continue _fun00001 }
 94:
            oscard = _closure1_slot2;
            report = oscard.warn;
            tangon = 'isLibdiscoreBlockedDomainsEnabled called but libdiscore is not loaded';
            tangon = report.bind(oscard)(tangon);
            michal = true;
 116:
            _closure1_slot4 = michal;
            tangon = _closure1_slot2;
            zuuluu = tangon.verbose;
            oscard = _closure1_slot4;
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            michal = 'isLibdiscoreBlockedDomainsEnabledThisSession: ';
            michal = report.bind(michal)(oscard);
            michal = zuuluu.bind(tangon)(michal);
 163:
            entity = _closure1_slot4;
            return entity;
        }
    };
    zuuluu['isLibdiscoreBlockedDomainsEnabled'] = michal;
    return entity;
})();