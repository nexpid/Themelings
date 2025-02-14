// app/modules/app_launcher/native/screens/search/useTrackSearchItems.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/screens/search/useTrackSearchItems.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: useTrackSearchItems
        options = argFoo;
        golf = argBar;
        oscar = argBaz;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        var _closure2_slot2 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 1;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useAppLauncherContext;
        zulu = zulu.bind(tango)();
        verify = zulu.entrypoint;
        var _closure2_slot3 = verify;
        report = _closure1_slot2;
        zulu = report.useRef;
        entity = {};
        entity = zulu.bind(report)(entity);
        var _closure2_slot4 = entity;
        entity = report.useRef;
        entity = entity.bind(report)(oscar);
        var _closure2_slot5 = entity;
        entity = {};
        tango = report.useCallback;
        zulu = new Array(4);
        zulu[0] = verify;
        zulu[1] = options;
        zulu[2] = golf;
        zulu[3] = oscar;
        mike = function(argFoo) {
            _fun118849: for(var _fun118849_ip = 0; ; ) switch(_fun118849_ip) {
 0:
                entity = argFoo;
                zulu = entity.viewableItems;
                mike = _closure2_slot5;
                tango = mike.current;
                mike = _closure2_slot2;
                if(!(tango !== mike)) { _fun118849_ip = 55; continue _fun118849 }
 29:
                tango = _closure2_slot5;
                mike = _closure2_slot2;
                tango['current'] = mike;
                mike = _closure2_slot4;
                entity = {};
                mike['current'] = entity;
 55:
                mike = zulu.forEach;
                entity = function(argFoo) {
                    _fun118850: for(var _fun118850_ip = 0; ; ) switch(_fun118850_ip) {
 0:
                        oscar = argFoo;
                        entity = oscar.isViewable;
                        if(!entity) { _fun118850_ip = 266; continue _fun118850 }
 15:
                        mike = _closure2_slot0;
                        entity = oscar.item;
                        yankee = undefined;
                        zulu = mike.bind(yankee)(entity);
                        mike = null;
                        if(!(mike != zulu)) { _fun118850_ip = 266; continue _fun118850 }
 43:
                        entity = _closure2_slot4;
                        entity = entity.current;
                        entity = entity[zulu];
                        if(!(mike == entity)) { _fun118850_ip = 266; continue _fun118850 }
 63:
                        entity = _closure2_slot4;
                        mike = entity.current;
                        entity = true;
                        mike[zulu] = entity;
                        mike = _closure2_slot1;
                        entity = oscar.item;
                        entity = mike.bind(yankee)(entity);
                        options = entity.applicationId;
                        golf = entity.commandId;
                        offset = _closure1_slot0;
                        romeo = _closure1_slot1;
                        entity = 2;
                        entity = romeo[entity];
                        tango = offset.bind(yankee)(entity);
                        zulu = tango.trackImpression;
                        mike = {};
                        entity = 3;
                        verify = romeo[entity];
                        verify = offset.bind(yankee)(verify);
                        verify = verify.ImpressionTypes;
                        verify = verify.VIEW;
                        mike['type'] = verify;
                        entity = romeo[entity];
                        entity = offset.bind(yankee)(entity);
                        entity = entity.ImpressionNames;
                        entity = entity.APP_LAUNCHER_SEARCH_RESULTS_ITEM;
                        mike['name'] = entity;
                        entity = {};
                        verify = 4;
                        verify = romeo[verify];
                        verify = offset.bind(yankee)(verify);
                        verify = verify.ApplicationCommandTriggerLocations;
                        verify = verify.APP_LAUNCHER_HOME_SEARCH;
                        entity['location'] = verify;
                        entity['application_id'] = options;
                        entity['command_id'] = golf;
                        oscar = oscar.index;
                        entity['search_results_position'] = oscar;
                        oscar = _closure2_slot2;
                        entity['query'] = oscar;
                        report = _closure2_slot3;
                        entity['source'] = report;
                        mike['properties'] = entity;
                        entity = false;
                        entity = zulu.bind(tango)(mike, entity);
 266:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        entity['handleViewableItemsChanged'] = mike;
        return entity;
    };
    zulu['useTrackSearchItems'] = mike;
    return entity;
})();