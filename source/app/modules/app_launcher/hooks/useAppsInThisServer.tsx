// app/modules/app_launcher/hooks/useAppsInThisServer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useGuildIndexState;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot6 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/hooks/useAppsInThisServer.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useAppsInThisServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.context;
            options = undefined;
            var _closure2_slot0 = options;
            var _closure2_slot1 = options;
            var _closure2_slot2 = options;
            var _closure2_slot3 = options;
            mike = verify.type;
            entity = 'channel';
            zulu = undefined;
            if(!(entity === mike)) { _fun00002_ip = 48; continue _fun00001 }
 43:
            zulu = verify.channel;
 48:
            mike = _closure1_slot5;
            offset = null;
            oscar = offset == zulu;
            entity = undefined;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 66:
            entity = zulu.guild_id;
 71:
            golf = true;
            mike = mike.bind(options)(entity, golf);
            _closure2_slot0 = mike;
            zulu = _closure1_slot2;
            backup = _closure1_slot3;
            entity = 3;
            entity = backup[entity];
            oscar = zulu.bind(options)(entity);
            zulu = oscar.useDiscovery;
            entity = {};
            entity['context'] = verify;
            verify = {};
            foxtrot = _closure1_slot0;
            romeo = 4;
            yankee = backup[romeo];
            yankee = foxtrot.bind(options)(yankee);
            yankee = yankee.ApplicationCommandType;
            kilo = yankee.CHAT;
            yankee = new Array(2);
            yankee[0] = kilo;
            romeo = backup[romeo];
            romeo = foxtrot.bind(options)(romeo);
            romeo = romeo.ApplicationCommandType;
            romeo = romeo.PRIMARY_ENTRY_POINT;
            yankee[1] = romeo;
            verify['commandTypes'] = yankee;
            entity['filters'] = verify;
            verify = {'placeholderCount': 0, 'limit': null, 'includeFrecency': true};
            yankee = _closure1_slot6;
            verify['limit'] = yankee;
            entity['options'] = verify;
            entity['allowFetch'] = golf;
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.commandsByActiveSection;
            _closure2_slot1 = entity;
            zulu = zulu.loading;
            verify = _closure1_slot4;
            golf = verify.useMemo;
            oscar = new Array(1);
            oscar[0] = entity;
            entity = function() {
                tango = _closure2_slot1;
                zulu = tango.reduce;
                entity = global;
                entity = entity.Set;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                golf = mike;
                entity = new golf[entity](oscar);
                mike = entity instanceof Object ? entity : mike;
                entity = function(argFoo, argBar) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        zulu = argBar;
                        mike = zulu.section;
                        zulu = zulu.data;
                        tango = zulu.length;
                        zulu = 0;
                        if(!(tango > zulu)) { _fun00004_ip = 42; continue _fun00003 }
 27:
                        zulu = entity.add;
                        mike = mike.id;
                        mike = zulu.bind(entity)(mike);
 42:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            entity = golf.bind(verify)(entity, oscar);
            _closure2_slot2 = entity;
            golf = verify.useMemo;
            oscar = mike.result;
            yankee = offset == oscar;
            offset = undefined;
            if(yankee) { _fun00002_ip = 298; continue _fun00001 }
 292:
            offset = oscar.sections;
 298:
            oscar = new Array(2);
            oscar[0] = offset;
            oscar[1] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = global;
                    tango = mike.Object;
                    zulu = tango.values;
                    mike = _closure2_slot0;
                    oscar = mike.result;
                    report = null;
                    golf = report == oscar;
                    mike = undefined;
                    if(golf) { _fun00006_ip = 45; continue _fun00005 }
 39:
                    mike = oscar.sections;
 45:
                    if(!(report == mike)) { _fun00006_ip = 51; continue _fun00005 }
 49:
                    mike = {};
 51:
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.descriptor;
                        return entity;
                    };
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.filter;
                    entity = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            mike = argFoo;
                            zulu = mike.id;
                            report = _closure1_slot0;
                            tango = _closure1_slot3;
                            entity = 5;
                            tango = tango[entity];
                            entity = undefined;
                            entity = report.bind(entity)(tango);
                            entity = entity.BUILT_IN_SECTIONS;
                            zulu = zulu in entity;
                            entity = !zulu;
                            if(zulu) { _fun00008_ip = 71; continue _fun00007 }
 49:
                            tango = _closure2_slot2;
                            zulu = tango.has;
                            mike = mike.id;
                            entity = zulu.bind(tango)(mike);
 71:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            golf = golf.bind(verify)(entity, oscar);
            oscar = _closure1_slot0;
            verify = _closure1_slot3;
            entity = 6;
            entity = verify[entity];
            oscar = oscar.bind(options)(entity);
            entity = oscar.useSortApplicationsViaFrecency;
            options = entity.bind(oscar)(golf);
            _closure2_slot3 = options;
            entity = {};
            golf = _closure1_slot4;
            oscar = golf.useMemo;
            report = new Array(1);
            report[0] = options;
            tango = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 7;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.compact;
                oscar = _closure2_slot3;
                report = oscar.map;
                mike = function(argFoo) {
                    entity = argFoo;
                    entity = entity.application;
                    return entity;
                };
                mike = report.bind(oscar)(mike);
                zulu = zulu.bind(tango)(mike);
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = {};
                    mike = argFoo;
                    entity['application'] = mike;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = oscar.bind(golf)(tango, report);
            entity['appsInThisServer'] = tango;
            mike = mike.fetchState;
            mike = mike.fetching;
            if(mike) { _fun00002_ip = 413; continue _fun00001 }
 410:
            mike = zulu;
 413:
            entity['isLoading'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();