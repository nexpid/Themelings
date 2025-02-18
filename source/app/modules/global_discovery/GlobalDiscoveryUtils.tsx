// app/modules/global_discovery/GlobalDiscoveryUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GLOBAL_DISCOVERY_DEFAULT_TAB;
    var _closure1_slot2 = golfie;
    tangon = tangon.GlobalDiscoveryTab;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/global_discovery/GlobalDiscoveryUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getGlobalDiscoveryTabTitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot3;
            michal = michal.SERVERS;
            if(!(michal !== report)) { _fun00002_ip = 208; continue _fun00001 }
 23:
            michal = _closure1_slot3;
            michal = michal.APPS;
            if(!(michal !== report)) { _fun00002_ip = 147; continue _fun00001 }
 37:
            michal = _closure1_slot3;
            michal = michal.QUESTS;
            if(!(michal !== report)) { _fun00002_ip = 86; continue _fun00001 }
 51:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.assertNever;
            zuuluu = zuuluu.bind(tangon)(report);
            return michal;
 86:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 1;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.EcaD4e;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 147:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 1;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.bGwCoa;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 208:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 1;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.+Anbp6;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getGlobalDiscoveryTabTitle'] = tangon;
    michal = function(argFoo) { // Original name: getSelectedTabFromPathname
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.startsWith;
            entity = '/discovery/applications';
            entity = zuuluu.bind(michal)(entity);
            if(entity) { _fun00004_ip = 82; continue _fun00003 }
 23:
            entity = '/discovery/quests';
            if(!(entity !== michal)) { _fun00004_ip = 67; continue _fun00003 }
 33:
            entity = '/discovery/servers';
            if(!(entity !== michal)) { _fun00004_ip = 52; continue _fun00003 }
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
    zuuluu['getSelectedTabFromPathname'] = michal;
    return entity;
})();