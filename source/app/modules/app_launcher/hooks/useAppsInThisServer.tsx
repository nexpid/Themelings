// app/modules/app_launcher/hooks/useAppsInThisServer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useGuildIndexState;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot6 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/hooks/useAppsInThisServer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useAppsInThisServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.context;
            option = undefined;
            var _closure2_slot0 = option;
            var _closure2_slot1 = option;
            var _closure2_slot2 = option;
            var _closure2_slot3 = option;
            michal = verify.type;
            entity = 'channel';
            zuuluu = undefined;
            if(!(entity === michal)) { _fun00002_ip = 48; continue _fun00001 }
 43:
            zuuluu = verify.channel;
 48:
            michal = _closure1_slot5;
            offset = null;
            oscard = offset == zuuluu;
            entity = undefined;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 66:
            entity = zuuluu.guild_id;
 71:
            golfie = true;
            michal = michal.bind(option)(entity, golfie);
            _closure2_slot0 = michal;
            zuuluu = _closure1_slot2;
            backup = _closure1_slot3;
            entity = 3;
            entity = backup[entity];
            oscard = zuuluu.bind(option)(entity);
            zuuluu = oscard.useDiscovery;
            entity = {};
            entity['context'] = verify;
            verify = {};
            foxtra = _closure1_slot0;
            romeon = 4;
            yankee = backup[romeon];
            yankee = foxtra.bind(option)(yankee);
            yankee = yankee.ApplicationCommandType;
            kiloes = yankee.CHAT;
            yankee = new Array(2);
            yankee[0] = kiloes;
            romeon = backup[romeon];
            romeon = foxtra.bind(option)(romeon);
            romeon = romeon.ApplicationCommandType;
            romeon = romeon.PRIMARY_ENTRY_POINT;
            yankee[1] = romeon;
            verify['commandTypes'] = yankee;
            entity['filters'] = verify;
            verify = {'placeholderCount': 0, 'limit': null, 'includeFrecency': true};
            yankee = _closure1_slot6;
            verify['limit'] = yankee;
            entity['options'] = verify;
            entity['allowFetch'] = golfie;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.commandsByActiveSection;
            _closure2_slot1 = entity;
            zuuluu = zuuluu.loading;
            verify = _closure1_slot4;
            golfie = verify.useMemo;
            oscard = new Array(1);
            oscard[0] = entity;
            entity = function() {
                tangon = _closure2_slot1;
                zuuluu = tangon.reduce;
                entity = global;
                entity = entity.Set;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                golfie = michal;
                entity = new golfie[entity](oscard);
                michal = entity instanceof Object ? entity : michal;
                entity = function(argFoo, argBar) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        zuuluu = argBar;
                        michal = zuuluu.section;
                        zuuluu = zuuluu.data;
                        tangon = zuuluu.length;
                        zuuluu = 0;
                        if(!(tangon > zuuluu)) { _fun00004_ip = 42; continue _fun00003 }
 27:
                        zuuluu = entity.add;
                        michal = michal.id;
                        michal = zuuluu.bind(entity)(michal);
 42:
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            entity = golfie.bind(verify)(entity, oscard);
            _closure2_slot2 = entity;
            golfie = verify.useMemo;
            oscard = michal.result;
            yankee = offset == oscard;
            offset = undefined;
            if(yankee) { _fun00002_ip = 298; continue _fun00001 }
 292:
            offset = oscard.sections;
 298:
            oscard = new Array(2);
            oscard[0] = offset;
            oscard[1] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = global;
                    tangon = michal.Object;
                    zuuluu = tangon.values;
                    michal = _closure2_slot0;
                    oscard = michal.result;
                    report = null;
                    golfie = report == oscard;
                    michal = undefined;
                    if(golfie) { _fun00006_ip = 45; continue _fun00005 }
 39:
                    michal = oscard.sections;
 45:
                    if(!(report == michal)) { _fun00006_ip = 51; continue _fun00005 }
 49:
                    michal = {};
 51:
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.descriptor;
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.filter;
                    entity = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.id;
                            report = _closure1_slot0;
                            tangon = _closure1_slot3;
                            entity = 5;
                            tangon = tangon[entity];
                            entity = undefined;
                            entity = report.bind(entity)(tangon);
                            entity = entity.BUILT_IN_SECTIONS;
                            zuuluu = zuuluu in entity;
                            entity = !zuuluu;
                            if(zuuluu) { _fun00008_ip = 71; continue _fun00007 }
 49:
                            tangon = _closure2_slot2;
                            zuuluu = tangon.has;
                            michal = michal.id;
                            entity = zuuluu.bind(tangon)(michal);
 71:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            golfie = golfie.bind(verify)(entity, oscard);
            oscard = _closure1_slot0;
            verify = _closure1_slot3;
            entity = 6;
            entity = verify[entity];
            oscard = oscard.bind(option)(entity);
            entity = oscard.useSortApplicationsViaFrecency;
            option = entity.bind(oscard)(golfie);
            _closure2_slot3 = option;
            entity = {};
            golfie = _closure1_slot4;
            oscard = golfie.useMemo;
            report = new Array(1);
            report[0] = option;
            tangon = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                michal = 7;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.compact;
                oscard = _closure2_slot3;
                report = oscard.map;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = entity.application;
                    return entity;
                };
                michal = report.bind(oscard)(michal);
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.map;
                entity = function(argFoo) {
                    entity = {};
                    michal = argFoo;
                    entity['application'] = michal;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = oscard.bind(golfie)(tangon, report);
            entity['appsInThisServer'] = tangon;
            michal = michal.fetchState;
            michal = michal.fetching;
            if(michal) { _fun00002_ip = 413; continue _fun00001 }
 410:
            michal = zuuluu;
 413:
            entity['isLoading'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();