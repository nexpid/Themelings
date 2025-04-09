// app/modules/app_launcher/hooks/useAppLauncherFrecents.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = option;
    var _closure1_slot3 = oscard;
    entity = function(argFoo) { // Original name: useFrecentApps
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            report = michal.sectionDescriptors;
            oscard = michal.context;
            var _closure2_slot0 = oscard;
            option = michal.onlyActivityApps;
            var _closure2_slot1 = option;
            backup = michal.includeAuthorizedAppsAndFetch;
            var _closure2_slot2 = backup;
            offset = undefined;
            var _closure2_slot4 = offset;
            var _closure2_slot5 = offset;
            var _closure2_slot6 = offset;
            var _closure2_slot7 = offset;
            tangon = _closure1_slot0;
            golfie = _closure1_slot3;
            zuuluu = 7;
            verify = golfie[zuuluu];
            foxtra = tangon.bind(offset)(verify);
            romeon = foxtra.useStateFromStores;
            verify = _closure1_slot5;
            yankee = new Array(1);
            yankee[0] = verify;
            verify = function() {
                michal = _closure1_slot5;
                entity = michal.getFetchState;
                entity = entity.bind(michal)();
                return entity;
            };
            verify = romeon.bind(foxtra)(yankee, verify);
            var _closure2_slot3 = verify;
            foxtra = _closure1_slot4;
            romeon = foxtra.useEffect;
            yankee = new Array(2);
            yankee[0] = backup;
            yankee[1] = verify;
            verify = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun00004_ip = 31; continue _fun00003 }
 10:
                    zuuluu = _closure2_slot3;
                    michal = _closure1_slot6;
                    michal = michal.NOT_FETCHED;
                    entity = zuuluu === michal;
 31:
                    if(!entity) { _fun00004_ip = 69; continue _fun00003 }
 34:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 8;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.fetch;
                    entity = entity.bind(michal)();
 69:
                    entity = undefined;
                    return entity;
                }
            };
            verify = romeon.bind(foxtra)(verify, yankee);
            zuuluu = golfie[zuuluu];
            verify = tangon.bind(offset)(zuuluu);
            golfie = verify.useStateFromStoresArray;
            zuuluu = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun00006_ip = 61; continue _fun00005 }
 10:
                    michal = _closure1_slot5;
                    entity = michal.getApps;
                    report = entity.bind(michal)();
                    michal = null;
                    zuuluu = michal == report;
                    entity = undefined;
                    if(zuuluu) { _fun00006_ip = 57; continue _fun00005 }
 38:
                    tangon = report.filter;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        zuuluu = entity.scopes;
                        michal = zuuluu.includes;
                        report = _closure1_slot0;
                        tangon = _closure1_slot3;
                        entity = 9;
                        tangon = tangon[entity];
                        entity = undefined;
                        entity = report.bind(entity)(tangon);
                        entity = entity.OAuth2Scopes;
                        entity = entity.APPLICATIONS_COMMANDS;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = tangon.bind(report)(zuuluu);
 57:
                    if(!(michal == entity)) { _fun00006_ip = 65; continue _fun00005 }
 61:
                    entity = new Array(0);
 65:
                    return entity;
                }
            };
            verify = golfie.bind(verify)(tangon, zuuluu);
            tangon = report.filter;
            zuuluu = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.id;
                    entity = _closure1_slot9;
                    entity = entity.FRECENCY;
                    entity = tangon !== entity;
                    if(!entity) { _fun00008_ip = 47; continue _fun00007 }
 28:
                    zuuluu = zuuluu.id;
                    michal = _closure1_slot9;
                    michal = michal.BUILT_IN;
                    entity = zuuluu !== michal;
 47:
                    return entity;
                }
            };
            golfie = tangon.bind(report)(zuuluu);
            zuuluu = 'channel';
            romeon = zuuluu in oscard;
            if(!romeon) { _fun00002_ip = 260; continue _fun00001 }
 217:
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            yankee = tangon.bind(offset)(zuuluu);
            report = yankee.checkShouldFilterWordle;
            tangon = oscard.channel;
            zuuluu = 'useAppLauncherFrecents.useFrecentApps()';
            romeon = report.bind(yankee)(tangon, zuuluu);
 260:
            _closure2_slot4 = romeon;
            tangon = oscard.type;
            zuuluu = 'contextless';
            zuuluu = zuuluu === tangon;
            _closure2_slot5 = zuuluu;
            yankee = _closure1_slot4;
            report = yankee.useMemo;
            tangon = new Array(2);
            tangon[0] = romeon;
            tangon[1] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = new Array(0);
                    zuuluu = _closure2_slot5;
                    if(!zuuluu) { _fun00010_ip = 31; continue _fun00009 }
 14:
                    tangon = entity.push;
                    zuuluu = _closure1_slot8;
                    zuuluu = tangon.bind(entity)(zuuluu);
 31:
                    michal = _closure2_slot4;
                    if(!michal) { _fun00010_ip = 79; continue _fun00009 }
 38:
                    zuuluu = entity.push;
                    report = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 10;
                    tangon = tangon[michal];
                    michal = undefined;
                    michal = report.bind(michal)(tangon);
                    michal = michal.WORDLE_APPLICATION_ID;
                    michal = zuuluu.bind(entity)(michal);
 79:
                    return entity;
                }
            };
            report = report.bind(yankee)(zuuluu, tangon);
            _closure2_slot6 = report;
            tangon = _closure1_slot0;
            yankee = _closure1_slot3;
            zuuluu = 11;
            zuuluu = yankee[zuuluu];
            tangon = tangon.bind(offset)(zuuluu);
            zuuluu = tangon.useSortApplicationsViaFrecency;
            golfie = zuuluu.bind(tangon)(golfie, verify);
            _closure2_slot7 = golfie;
            tangon = _closure1_slot4;
            zuuluu = tangon.useMemo;
            michal = new Array(4);
            michal[0] = option;
            michal[1] = golfie;
            michal[2] = oscard;
            michal[3] = report;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot1;
                    report = _closure2_slot7;
                    tangon = report.filter;
                    if(entity) { _fun00012_ip = 35; continue _fun00011 }
 21:
                    entity = function(argFoo) {
                        zuuluu = _closure2_slot6;
                        michal = zuuluu.includes;
                        entity = argFoo;
                        entity = entity.id;
                        entity = michal.bind(zuuluu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    entity = tangon.bind(report)(entity);
                    _fun00012_ip = 64; continue _fun00011;
 35:
                    zuuluu = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            michal = argFoo;
                            entity = michal.application;
                            zuuluu = null;
                            entity = zuuluu != entity;
                            if(!entity) { _fun00014_ip = 58; continue _fun00013 }
 17:
                            oscard = _closure1_slot0;
                            report = _closure1_slot3;
                            tangon = 12;
                            report = report[tangon];
                            tangon = undefined;
                            oscard = oscard.bind(tangon)(report);
                            report = oscard.isEmbeddedApp;
                            tangon = michal.application;
                            entity = report.bind(oscard)(tangon);
 58:
                            if(!entity) { _fun00014_ip = 114; continue _fun00013 }
 61:
                            oscard = _closure1_slot0;
                            report = _closure1_slot3;
                            tangon = 13;
                            report = report[tangon];
                            tangon = undefined;
                            oscard = oscard.bind(tangon)(report);
                            report = oscard.queryForPrimaryAppCommand;
                            tangon = _closure2_slot0;
                            michal = michal.id;
                            michal = report.bind(oscard)(tangon, michal);
                            entity = zuuluu != michal;
 114:
                            return entity;
                        }
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.filter;
                    michal = function(argFoo) {
                        zuuluu = _closure2_slot6;
                        michal = zuuluu.includes;
                        entity = argFoo;
                        entity = entity.id;
                        entity = michal.bind(zuuluu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal);
 64:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FetchState;
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.WATCH_YOUTUBE_PROD_APP_ID;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.BuiltInSectionId;
    var _closure1_slot9 = golfie;
    golfie = tangon.DISCOVERY_COMMANDS_QUERY_LIMIT;
    tangon = {};
    verify = 5;
    option = oscard[verify];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandType;
    offset = option.CHAT;
    option = new Array(2);
    option[0] = offset;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.ApplicationCommandType;
    verify = verify.PRIMARY_ENTRY_POINT;
    option[1] = verify;
    tangon['commandTypes'] = option;
    var _closure1_slot10 = tangon;
    tangon = {'placeholderCount': 0, 'limit': null, 'includeFrecency': true};
    tangon['limit'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/hooks/useAppLauncherFrecents.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useAppLauncherFrecentCommandsAndApps
        entity = argFoo;
        option = entity.context;
        golfie = entity.onlyActivityApps;
        var _closure2_slot0 = golfie;
        michal = _closure1_slot2;
        yankee = _closure1_slot3;
        entity = 6;
        entity = yankee[entity];
        report = undefined;
        verify = michal.bind(report)(entity);
        michal = verify.useDiscovery;
        entity = {};
        entity['context'] = option;
        oscard = _closure1_slot10;
        entity['filters'] = oscard;
        oscard = _closure1_slot11;
        entity['options'] = oscard;
        oscard = true;
        entity['allowFetch'] = oscard;
        verify = michal.bind(verify)(entity);
        backup = verify.commands;
        var _closure2_slot1 = backup;
        foxtra = verify.commandsByActiveSection;
        var _closure2_slot2 = foxtra;
        michal = verify.sectionDescriptors;
        entity = verify.filterSection;
        var _closure2_slot3 = entity;
        verify = verify.loading;
        kiloes = _closure1_slot4;
        romeon = kiloes.useEffect;
        offset = new Array(1);
        offset[0] = entity;
        entity = function() {
            zuuluu = _closure2_slot3;
            entity = _closure1_slot9;
            michal = entity.FRECENCY;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = romeon.bind(kiloes)(entity, offset);
        offset = _closure1_slot0;
        entity = 7;
        entity = yankee[entity];
        romeon = offset.bind(report)(entity);
        yankee = romeon.useStateFromStores;
        entity = _closure1_slot7;
        offset = new Array(1);
        offset[0] = entity;
        entity = function() {
            michal = _closure1_slot7;
            entity = michal.getLastUsedCommandId;
            entity = entity.bind(michal)();
            return entity;
        };
        romeon = yankee.bind(romeon)(offset, entity);
        var _closure2_slot4 = romeon;
        entity = {};
        entity['loading'] = verify;
        yankee = _closure1_slot4;
        offset = yankee.useMemo;
        verify = new Array(4);
        verify[0] = backup;
        verify[1] = foxtra;
        verify[2] = romeon;
        verify[3] = golfie;
        tangon = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = _closure2_slot0;
                if(michal) { _fun00016_ip = 114; continue _fun00015 }
 12:
                tangon = _closure2_slot2;
                michal = 0;
                tangon = tangon[michal];
                michal = null;
                oscard = michal == tangon;
                report = undefined;
                if(oscard) { _fun00016_ip = 38; continue _fun00015 }
 33:
                report = tangon.data;
 38:
                if(!(michal == report)) { _fun00016_ip = 46; continue _fun00015 }
 42:
                report = new Array(0);
 46:
                oscard = _closure2_slot1;
                tangon = oscard.find;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.id;
                    entity = _closure2_slot4;
                    entity = michal === entity;
                    return entity;
                };
                tangon = tangon.bind(oscard)(entity);
                entity = report;
                if(!(michal != tangon)) { _fun00016_ip = 112; continue _fun00015 }
 74:
                michal = new Array(1);
                michal[0] = tangon;
                tangon = report.filter;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    michal = entity.id;
                    entity = _closure2_slot4;
                    entity = michal !== entity;
                    return entity;
                };
                option = tangon.bind(report)(zuuluu);
                golfie = 1;
                verify = michal;
                zuuluu = arraySpread(verify, option, golfie);
                entity = michal;
 112:
                return entity;
 114:
                entity = new Array(0);
                return entity;
            }
        };
        tangon = offset.bind(yankee)(tangon, verify);
        entity['frecencyCommands'] = tangon;
        tangon = _closure1_slot12;
        zuuluu = {};
        zuuluu['sectionDescriptors'] = michal;
        zuuluu['context'] = option;
        zuuluu['onlyActivityApps'] = golfie;
        zuuluu['includeAuthorizedAppsAndFetch'] = oscard;
        zuuluu = tangon.bind(report)(zuuluu);
        entity['frecentApps'] = zuuluu;
        entity['sectionDescriptors'] = michal;
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: useAppLauncherFrecentApps
        entity = argFoo;
        golfie = entity.context;
        oscard = entity.onlyActivityApps;
        verify = entity.allowCommandFetch;
        report = entity.includeAuthorizedAppsAndFetch;
        zuuluu = _closure1_slot2;
        tangon = _closure1_slot3;
        entity = 6;
        entity = tangon[entity];
        tangon = undefined;
        option = zuuluu.bind(tangon)(entity);
        zuuluu = option.useDiscovery;
        entity = {};
        entity['context'] = golfie;
        offset = _closure1_slot10;
        entity['filters'] = offset;
        offset = _closure1_slot11;
        entity['options'] = offset;
        entity['allowFetch'] = verify;
        zuuluu = zuuluu.bind(option)(entity);
        option = zuuluu.sectionDescriptors;
        entity = {};
        zuuluu = zuuluu.loading;
        entity['loading'] = zuuluu;
        zuuluu = _closure1_slot12;
        michal = {};
        michal['sectionDescriptors'] = option;
        michal['context'] = golfie;
        michal['onlyActivityApps'] = oscard;
        michal['includeAuthorizedAppsAndFetch'] = report;
        michal = zuuluu.bind(tangon)(michal);
        entity['frecentApps'] = michal;
        return entity;
    };
    zuuluu['useAppLauncherFrecentApps'] = michal;
    return entity;
})();