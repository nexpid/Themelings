// app/modules/overlay/OverlayV3Experiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    report = function(argFoo) { // Original name: useOverlayV3
        zuuluu = _closure1_slot0;
        michal = zuuluu.useExperiment;
        entity = {};
        tangon = argFoo;
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot1 = report;
    tangon = function(argFoo) { // Original name: getUseOverlayV3
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            report = false;
 11:
            tangon = _closure1_slot0;
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            entity = argFoo;
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot2 = tangon;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = verify[entity];
    entity = undefined;
    oscard = option.bind(entity)(oscard);
    golfie = oscard.CommonTriggerPoints;
    oscard = 1;
    oscard = verify[oscard];
    yankee = option.bind(entity)(oscard);
    offset = yankee.createExperiment;
    oscard = {'kind': 'user', 'id': '2024-10_overlay_v3', 'label': 'Overlay V3 Shared Context OOP'};
    golfie = golfie.CONNECTION_OPEN;
    oscard['commonTriggerPoint'] = golfie;
    golfie = {'overlayV3tech': false, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    oscard['defaultConfig'] = golfie;
    golfie = {'id': 1, 'label': 'Use Overlay V3, All features included.'};
    romeon = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': true};
    golfie['config'] = romeon;
    romeon = new Array(4);
    romeon[0] = golfie;
    foxtra = {'id': 2, 'label': 'Use Overlay V3, Minus "Now Playing" Notif.'};
    golfie = 2;
    backup = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': false};
    foxtra['config'] = backup;
    romeon[1] = foxtra;
    foxtra = {'id': 3, 'label': 'Use Overlay V3 minus any activity'};
    backup = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': false, 'allowNowPlaying': false};
    foxtra['config'] = backup;
    romeon[2] = foxtra;
    foxtra = {'id': 4, 'label': 'Use Overlay V3 tech with Overlay 2 UI'};
    backup = {'overlayV3tech': true, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    foxtra['config'] = backup;
    romeon[3] = foxtra;
    oscard['treatments'] = romeon;
    oscard = offset.bind(yankee)(oscard);
    var _closure1_slot0 = oscard;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/overlay/OverlayV3Experiment.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['OverlayV3Experiment'] = oscard;
    zuuluu['useOverlayV3'] = report;
    zuuluu['getUseOverlayV3'] = tangon;
    tangon = function(argFoo) { // Original name: getUseAnyOverlayV3
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = arguments[1];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            tangon = true;
 11:
            michal = _closure1_slot2;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity, tangon);
            entity = entity.overlayV3tech;
            return entity;
        }
    };
    zuuluu['getUseAnyOverlayV3'] = tangon;
    tangon = function(argFoo) { // Original name: useAnyOverlayV3
        zuuluu = _closure1_slot1;
        michal = undefined;
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        entity = entity.overlayV3tech;
        return entity;
    };
    zuuluu['useAnyOverlayV3'] = tangon;
    michal = function(argFoo) { // Original name: isInOverlayNowPlayingExperiment
        zuuluu = _closure1_slot2;
        michal = undefined;
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        entity = entity.allowNowPlaying;
        return entity;
    };
    zuuluu['isInOverlayNowPlayingExperiment'] = michal;
    return entity;
})();