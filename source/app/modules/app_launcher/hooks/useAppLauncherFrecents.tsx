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
        michal = argFoo;
        yankee = michal.sectionDescriptors;
        oscard = michal.context;
        var _closure2_slot0 = oscard;
        report = michal.onlyActivityApps;
        var _closure2_slot1 = report;
        backup = michal.includeAuthorizedAppsAndFetch;
        var _closure2_slot2 = backup;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        zuuluu = 6;
        golfie = offset[zuuluu];
        tangon = undefined;
        foxtra = verify.bind(tangon)(golfie);
        romeon = foxtra.useStateFromStores;
        golfie = _closure1_slot5;
        option = new Array(1);
        option[0] = golfie;
        golfie = function() {
            michal = _closure1_slot5;
            entity = michal.getFetchState;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = romeon.bind(foxtra)(option, golfie);
        var _closure2_slot3 = golfie;
        foxtra = _closure1_slot4;
        romeon = foxtra.useEffect;
        option = new Array(2);
        option[0] = backup;
        option[1] = golfie;
        golfie = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot2;
                if(!entity) { _fun00002_ip = 31; continue _fun00001 }
 10:
                zuuluu = _closure2_slot3;
                michal = _closure1_slot6;
                michal = michal.NOT_FETCHED;
                entity = zuuluu === michal;
 31:
                if(!entity) { _fun00002_ip = 69; continue _fun00001 }
 34:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 7;
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
        golfie = romeon.bind(foxtra)(golfie, option);
        zuuluu = offset[zuuluu];
        romeon = verify.bind(tangon)(zuuluu);
        option = romeon.useStateFromStoresArray;
        zuuluu = _closure1_slot5;
        golfie = new Array(1);
        golfie[0] = zuuluu;
        zuuluu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot2;
                if(!entity) { _fun00004_ip = 61; continue _fun00003 }
 10:
                michal = _closure1_slot5;
                entity = michal.getApps;
                report = entity.bind(michal)();
                michal = null;
                zuuluu = michal == report;
                entity = undefined;
                if(zuuluu) { _fun00004_ip = 57; continue _fun00003 }
 38:
                tangon = report.filter;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.scopes;
                    michal = zuuluu.includes;
                    report = _closure1_slot0;
                    tangon = _closure1_slot3;
                    entity = 8;
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
                if(!(michal == entity)) { _fun00004_ip = 65; continue _fun00003 }
 61:
                entity = new Array(0);
 65:
                return entity;
            }
        };
        option = option.bind(romeon)(golfie, zuuluu);
        golfie = yankee.filter;
        zuuluu = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                tangon = zuuluu.id;
                entity = _closure1_slot8;
                entity = entity.FRECENCY;
                entity = tangon !== entity;
                if(!entity) { _fun00006_ip = 47; continue _fun00005 }
 28:
                zuuluu = zuuluu.id;
                michal = _closure1_slot8;
                michal = michal.BUILT_IN;
                entity = zuuluu !== michal;
 47:
                return entity;
            }
        };
        golfie = golfie.bind(yankee)(zuuluu);
        zuuluu = 9;
        zuuluu = offset[zuuluu];
        tangon = verify.bind(tangon)(zuuluu);
        zuuluu = tangon.useSortApplicationsViaFrecency;
        golfie = zuuluu.bind(tangon)(golfie, option);
        var _closure2_slot4 = golfie;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure2_slot1;
                tangon = _closure2_slot4;
                if(entity) { _fun00008_ip = 19; continue _fun00007 }
 14:
                entity = tangon;
                _fun00008_ip = 38; continue _fun00007;
 19:
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = argFoo;
                        entity = michal.application;
                        zuuluu = null;
                        entity = zuuluu != entity;
                        if(!entity) { _fun00010_ip = 58; continue _fun00009 }
 17:
                        oscard = _closure1_slot0;
                        report = _closure1_slot3;
                        tangon = 10;
                        report = report[tangon];
                        tangon = undefined;
                        oscard = oscard.bind(tangon)(report);
                        report = oscard.isEmbeddedApp;
                        tangon = michal.application;
                        entity = report.bind(oscard)(tangon);
 58:
                        if(!entity) { _fun00010_ip = 114; continue _fun00009 }
 61:
                        oscard = _closure1_slot0;
                        report = _closure1_slot3;
                        tangon = 11;
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
                entity = zuuluu.bind(tangon)(michal);
 38:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
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
    golfie = tangon.BuiltInSectionId;
    var _closure1_slot8 = golfie;
    golfie = tangon.DISCOVERY_COMMANDS_QUERY_LIMIT;
    tangon = {};
    verify = 4;
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
    var _closure1_slot9 = tangon;
    tangon = {'placeholderCount': 0, 'limit': null, 'includeFrecency': true};
    tangon['limit'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = 12;
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
        entity = 5;
        entity = yankee[entity];
        report = undefined;
        verify = michal.bind(report)(entity);
        michal = verify.useDiscovery;
        entity = {};
        entity['context'] = option;
        oscard = _closure1_slot9;
        entity['filters'] = oscard;
        oscard = _closure1_slot10;
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
            entity = _closure1_slot8;
            michal = entity.FRECENCY;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = romeon.bind(kiloes)(entity, offset);
        offset = _closure1_slot0;
        entity = 6;
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
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = _closure2_slot0;
                if(michal) { _fun00012_ip = 114; continue _fun00011 }
 12:
                tangon = _closure2_slot2;
                michal = 0;
                tangon = tangon[michal];
                michal = null;
                oscard = michal == tangon;
                report = undefined;
                if(oscard) { _fun00012_ip = 38; continue _fun00011 }
 33:
                report = tangon.data;
 38:
                if(!(michal == report)) { _fun00012_ip = 46; continue _fun00011 }
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
                if(!(michal != tangon)) { _fun00012_ip = 112; continue _fun00011 }
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
        tangon = _closure1_slot11;
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
        entity = 5;
        entity = tangon[entity];
        tangon = undefined;
        option = zuuluu.bind(tangon)(entity);
        zuuluu = option.useDiscovery;
        entity = {};
        entity['context'] = golfie;
        offset = _closure1_slot9;
        entity['filters'] = offset;
        offset = _closure1_slot10;
        entity['options'] = offset;
        entity['allowFetch'] = verify;
        zuuluu = zuuluu.bind(option)(entity);
        option = zuuluu.sectionDescriptors;
        entity = {};
        zuuluu = zuuluu.loading;
        entity['loading'] = zuuluu;
        zuuluu = _closure1_slot11;
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