// app/modules/app_launcher/native/screens/search/useTrackSearchItems.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/screens/search/useTrackSearchItems.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: useTrackSearchItems
        option = argFoo;
        golfie = argBar;
        oscard = argBaz;
        var _closure2_slot0 = option;
        var _closure2_slot1 = golfie;
        var _closure2_slot2 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 1;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useAppLauncherContext;
        zuuluu = zuuluu.bind(tangon)();
        verify = zuuluu.entrypoint;
        var _closure2_slot3 = verify;
        report = _closure1_slot2;
        zuuluu = report.useRef;
        entity = {};
        entity = zuuluu.bind(report)(entity);
        var _closure2_slot4 = entity;
        entity = report.useRef;
        entity = entity.bind(report)(oscard);
        var _closure2_slot5 = entity;
        entity = {};
        tangon = report.useCallback;
        zuuluu = new Array(4);
        zuuluu[0] = verify;
        zuuluu[1] = option;
        zuuluu[2] = golfie;
        zuuluu[3] = oscard;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.viewableItems;
                michal = _closure2_slot5;
                tangon = michal.current;
                michal = _closure2_slot2;
                if(!(tangon !== michal)) { _fun00002_ip = 55; continue _fun00001 }
 29:
                tangon = _closure2_slot5;
                michal = _closure2_slot2;
                tangon['current'] = michal;
                michal = _closure2_slot4;
                entity = {};
                michal['current'] = entity;
 55:
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        oscard = argFoo;
                        entity = oscard.isViewable;
                        if(!entity) { _fun00004_ip = 266; continue _fun00003 }
 15:
                        michal = _closure2_slot0;
                        entity = oscard.item;
                        yankee = undefined;
                        zuuluu = michal.bind(yankee)(entity);
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00004_ip = 266; continue _fun00003 }
 43:
                        entity = _closure2_slot4;
                        entity = entity.current;
                        entity = entity[zuuluu];
                        if(!(michal == entity)) { _fun00004_ip = 266; continue _fun00003 }
 63:
                        entity = _closure2_slot4;
                        michal = entity.current;
                        entity = true;
                        michal[zuuluu] = entity;
                        michal = _closure2_slot1;
                        entity = oscard.item;
                        entity = michal.bind(yankee)(entity);
                        option = entity.applicationId;
                        golfie = entity.commandId;
                        offset = _closure1_slot0;
                        romeon = _closure1_slot1;
                        entity = 2;
                        entity = romeon[entity];
                        tangon = offset.bind(yankee)(entity);
                        zuuluu = tangon.trackImpression;
                        michal = {};
                        entity = 3;
                        verify = romeon[entity];
                        verify = offset.bind(yankee)(verify);
                        verify = verify.ImpressionTypes;
                        verify = verify.VIEW;
                        michal['type'] = verify;
                        entity = romeon[entity];
                        entity = offset.bind(yankee)(entity);
                        entity = entity.ImpressionNames;
                        entity = entity.APP_LAUNCHER_SEARCH_RESULTS_ITEM;
                        michal['name'] = entity;
                        entity = {};
                        verify = 4;
                        verify = romeon[verify];
                        verify = offset.bind(yankee)(verify);
                        verify = verify.ApplicationCommandTriggerLocations;
                        verify = verify.APP_LAUNCHER_HOME_SEARCH;
                        entity['location'] = verify;
                        entity['application_id'] = option;
                        entity['command_id'] = golfie;
                        oscard = oscard.index;
                        entity['search_results_position'] = oscard;
                        oscard = _closure2_slot2;
                        entity['query'] = oscard;
                        report = _closure2_slot3;
                        entity['source'] = report;
                        michal['properties'] = entity;
                        entity = false;
                        entity = zuuluu.bind(tangon)(michal, entity);
 266:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['handleViewableItemsChanged'] = michal;
        return entity;
    };
    zuuluu['useTrackSearchItems'] = michal;
    return entity;
})();