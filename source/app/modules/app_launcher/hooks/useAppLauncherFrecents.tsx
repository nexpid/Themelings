// app/modules/app_launcher/hooks/useAppLauncherFrecents.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = function(argFoo) { // Original name: useFrecentApps
        mike = argFoo;
        yankee = mike.sectionDescriptors;
        oscar = mike.context;
        var _closure2_slot0 = oscar;
        report = mike.onlyActivityApps;
        var _closure2_slot1 = report;
        backup = mike.includeAuthorizedAppsAndFetch;
        var _closure2_slot2 = backup;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        zulu = 6;
        golf = offset[zulu];
        tango = undefined;
        foxtrot = verify.bind(tango)(golf);
        romeo = foxtrot.useStateFromStores;
        golf = _closure1_slot5;
        options = new Array(1);
        options[0] = golf;
        golf = function() {
            mike = _closure1_slot5;
            entity = mike.getFetchState;
            entity = entity.bind(mike)();
            return entity;
        };
        golf = romeo.bind(foxtrot)(options, golf);
        var _closure2_slot3 = golf;
        foxtrot = _closure1_slot4;
        romeo = foxtrot.useEffect;
        options = new Array(2);
        options[0] = backup;
        options[1] = golf;
        golf = function() {
            _fun114835: for(var _fun114835_ip = 0; ; ) switch(_fun114835_ip) {
 0:
                entity = _closure2_slot2;
                if(!entity) { _fun114835_ip = 31; continue _fun114835 }
 10:
                zulu = _closure2_slot3;
                mike = _closure1_slot6;
                mike = mike.NOT_FETCHED;
                entity = zulu === mike;
 31:
                if(!entity) { _fun114835_ip = 69; continue _fun114835 }
 34:
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.fetch;
                entity = entity.bind(mike)();
 69:
                entity = undefined;
                return entity;
            }
        };
        golf = romeo.bind(foxtrot)(golf, options);
        zulu = offset[zulu];
        romeo = verify.bind(tango)(zulu);
        options = romeo.useStateFromStoresArray;
        zulu = _closure1_slot5;
        golf = new Array(1);
        golf[0] = zulu;
        zulu = function() {
            _fun114836: for(var _fun114836_ip = 0; ; ) switch(_fun114836_ip) {
 0:
                entity = _closure2_slot2;
                if(!entity) { _fun114836_ip = 61; continue _fun114836 }
 10:
                mike = _closure1_slot5;
                entity = mike.getApps;
                report = entity.bind(mike)();
                mike = null;
                zulu = mike == report;
                entity = undefined;
                if(zulu) { _fun114836_ip = 57; continue _fun114836 }
 38:
                tango = report.filter;
                zulu = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.scopes;
                    mike = zulu.includes;
                    report = _closure1_slot0;
                    tango = _closure1_slot3;
                    entity = 8;
                    tango = tango[entity];
                    entity = undefined;
                    entity = report.bind(entity)(tango);
                    entity = entity.OAuth2Scopes;
                    entity = entity.APPLICATIONS_COMMANDS;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = tango.bind(report)(zulu);
 57:
                if(!(mike == entity)) { _fun114836_ip = 65; continue _fun114836 }
 61:
                entity = new Array(0);
 65:
                return entity;
            }
        };
        options = options.bind(romeo)(golf, zulu);
        golf = yankee.filter;
        zulu = function(argFoo) {
            _fun114838: for(var _fun114838_ip = 0; ; ) switch(_fun114838_ip) {
 0:
                zulu = argFoo;
                tango = zulu.id;
                entity = _closure1_slot8;
                entity = entity.FRECENCY;
                entity = tango !== entity;
                if(!entity) { _fun114838_ip = 47; continue _fun114838 }
 28:
                zulu = zulu.id;
                mike = _closure1_slot8;
                mike = mike.BUILT_IN;
                entity = zulu !== mike;
 47:
                return entity;
            }
        };
        golf = golf.bind(yankee)(zulu);
        zulu = 9;
        zulu = offset[zulu];
        tango = verify.bind(tango)(zulu);
        zulu = tango.useSortApplicationsViaFrecency;
        golf = zulu.bind(tango)(golf, options);
        var _closure2_slot4 = golf;
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun114839: for(var _fun114839_ip = 0; ; ) switch(_fun114839_ip) {
 0:
                entity = _closure2_slot1;
                tango = _closure2_slot4;
                if(entity) { _fun114839_ip = 19; continue _fun114839 }
 14:
                entity = tango;
                _fun114839_ip = 38; continue _fun114839;
 19:
                zulu = tango.filter;
                mike = function(argFoo) {
                    _fun114840: for(var _fun114840_ip = 0; ; ) switch(_fun114840_ip) {
 0:
                        mike = argFoo;
                        entity = mike.application;
                        zulu = null;
                        entity = zulu != entity;
                        if(!entity) { _fun114840_ip = 58; continue _fun114840 }
 17:
                        oscar = _closure1_slot0;
                        report = _closure1_slot3;
                        tango = 10;
                        report = report[tango];
                        tango = undefined;
                        oscar = oscar.bind(tango)(report);
                        report = oscar.isEmbeddedApp;
                        tango = mike.application;
                        entity = report.bind(oscar)(tango);
 58:
                        if(!entity) { _fun114840_ip = 114; continue _fun114840 }
 61:
                        oscar = _closure1_slot0;
                        report = _closure1_slot3;
                        tango = 11;
                        report = report[tango];
                        tango = undefined;
                        oscar = oscar.bind(tango)(report);
                        report = oscar.queryForPrimaryAppCommand;
                        tango = _closure2_slot0;
                        mike = mike.id;
                        mike = report.bind(oscar)(tango, mike);
                        entity = zulu != mike;
 114:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike);
 38:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FetchState;
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.BuiltInSectionId;
    var _closure1_slot8 = golf;
    golf = tango.DISCOVERY_COMMANDS_QUERY_LIMIT;
    tango = {};
    verify = 4;
    options = oscar[verify];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandType;
    offset = options.CHAT;
    options = new Array(2);
    options[0] = offset;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.ApplicationCommandType;
    verify = verify.PRIMARY_ENTRY_POINT;
    options[1] = verify;
    tango['commandTypes'] = options;
    var _closure1_slot9 = tango;
    tango = {'placeholderCount': 0, 'limit': null, 'includeFrecency': true};
    tango['limit'] = golf;
    var _closure1_slot10 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/hooks/useAppLauncherFrecents.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useAppLauncherFrecentCommandsAndApps
        entity = argFoo;
        options = entity.context;
        golf = entity.onlyActivityApps;
        var _closure2_slot0 = golf;
        mike = _closure1_slot2;
        yankee = _closure1_slot3;
        entity = 5;
        entity = yankee[entity];
        report = undefined;
        verify = mike.bind(report)(entity);
        mike = verify.useDiscovery;
        entity = {};
        entity['context'] = options;
        oscar = _closure1_slot9;
        entity['filters'] = oscar;
        oscar = _closure1_slot10;
        entity['options'] = oscar;
        oscar = true;
        entity['allowFetch'] = oscar;
        verify = mike.bind(verify)(entity);
        backup = verify.commands;
        var _closure2_slot1 = backup;
        foxtrot = verify.commandsByActiveSection;
        var _closure2_slot2 = foxtrot;
        mike = verify.sectionDescriptors;
        entity = verify.filterSection;
        var _closure2_slot3 = entity;
        verify = verify.loading;
        kilo = _closure1_slot4;
        romeo = kilo.useEffect;
        offset = new Array(1);
        offset[0] = entity;
        entity = function() {
            zulu = _closure2_slot3;
            entity = _closure1_slot8;
            mike = entity.FRECENCY;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity = romeo.bind(kilo)(entity, offset);
        offset = _closure1_slot0;
        entity = 6;
        entity = yankee[entity];
        romeo = offset.bind(report)(entity);
        yankee = romeo.useStateFromStores;
        entity = _closure1_slot7;
        offset = new Array(1);
        offset[0] = entity;
        entity = function() {
            mike = _closure1_slot7;
            entity = mike.getLastUsedCommandId;
            entity = entity.bind(mike)();
            return entity;
        };
        romeo = yankee.bind(romeo)(offset, entity);
        var _closure2_slot4 = romeo;
        entity = {};
        entity['loading'] = verify;
        yankee = _closure1_slot4;
        offset = yankee.useMemo;
        verify = new Array(4);
        verify[0] = backup;
        verify[1] = foxtrot;
        verify[2] = romeo;
        verify[3] = golf;
        tango = function() {
            _fun114844: for(var _fun114844_ip = 0; ; ) switch(_fun114844_ip) {
 0:
                mike = _closure2_slot0;
                if(mike) { _fun114844_ip = 114; continue _fun114844 }
 12:
                tango = _closure2_slot2;
                mike = 0;
                tango = tango[mike];
                mike = null;
                oscar = mike == tango;
                report = undefined;
                if(oscar) { _fun114844_ip = 38; continue _fun114844 }
 33:
                report = tango.data;
 38:
                if(!(mike == report)) { _fun114844_ip = 46; continue _fun114844 }
 42:
                report = new Array(0);
 46:
                oscar = _closure2_slot1;
                tango = oscar.find;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.id;
                    entity = _closure2_slot4;
                    entity = mike === entity;
                    return entity;
                };
                tango = tango.bind(oscar)(entity);
                entity = report;
                if(!(mike != tango)) { _fun114844_ip = 112; continue _fun114844 }
 74:
                mike = new Array(1);
                mike[0] = tango;
                tango = report.filter;
                zulu = function(argFoo) {
                    entity = argFoo;
                    mike = entity.id;
                    entity = _closure2_slot4;
                    entity = mike !== entity;
                    return entity;
                };
                options = tango.bind(report)(zulu);
                golf = 1;
                verify = mike;
                zulu = arraySpread(verify, options, golf);
                entity = mike;
 112:
                return entity;
 114:
                entity = new Array(0);
                return entity;
            }
        };
        tango = offset.bind(yankee)(tango, verify);
        entity['frecencyCommands'] = tango;
        tango = _closure1_slot11;
        zulu = {};
        zulu['sectionDescriptors'] = mike;
        zulu['context'] = options;
        zulu['onlyActivityApps'] = golf;
        zulu['includeAuthorizedAppsAndFetch'] = oscar;
        zulu = tango.bind(report)(zulu);
        entity['frecentApps'] = zulu;
        entity['sectionDescriptors'] = mike;
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useAppLauncherFrecentApps
        entity = argFoo;
        golf = entity.context;
        oscar = entity.onlyActivityApps;
        verify = entity.allowCommandFetch;
        report = entity.includeAuthorizedAppsAndFetch;
        zulu = _closure1_slot2;
        tango = _closure1_slot3;
        entity = 5;
        entity = tango[entity];
        tango = undefined;
        options = zulu.bind(tango)(entity);
        zulu = options.useDiscovery;
        entity = {};
        entity['context'] = golf;
        offset = _closure1_slot9;
        entity['filters'] = offset;
        offset = _closure1_slot10;
        entity['options'] = offset;
        entity['allowFetch'] = verify;
        zulu = zulu.bind(options)(entity);
        options = zulu.sectionDescriptors;
        entity = {};
        zulu = zulu.loading;
        entity['loading'] = zulu;
        zulu = _closure1_slot11;
        mike = {};
        mike['sectionDescriptors'] = options;
        mike['context'] = golf;
        mike['onlyActivityApps'] = oscar;
        mike['includeAuthorizedAppsAndFetch'] = report;
        mike = zulu.bind(tango)(mike);
        entity['frecentApps'] = mike;
        return entity;
    };
    zulu['useAppLauncherFrecentApps'] = mike;
    return entity;
})();