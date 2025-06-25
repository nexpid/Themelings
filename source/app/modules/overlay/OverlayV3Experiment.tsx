// app/modules/overlay/OverlayV3Experiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    oscard = function(argFoo) { // Original name: useOverlayV3
        zuuluu = _closure1_slot0;
        michal = zuuluu.useExperiment;
        entity = {};
        tangon = argFoo;
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot2 = oscard;
    report = function(argFoo) { // Original name: getUseOverlayV3
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
    var _closure1_slot3 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    kiloes = true;
    tangon['value'] = kiloes;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = offset[entity];
    entity = undefined;
    tangon = verify.bind(entity)(tangon);
    foxtra = tangon.CommonTriggerPoints;
    tangon = 1;
    golfie = offset[tangon];
    romeon = verify.bind(entity)(golfie);
    yankee = romeon.createExperiment;
    golfie = {'kind': 'user', 'id': '2024-10_overlay_v3', 'label': 'Overlay V3 Shared Context OOP'};
    option = foxtra.CONNECTION_OPEN;
    golfie['commonTriggerPoint'] = option;
    backup = false;
    option = {'overlayV3tech': false, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    golfie['defaultConfig'] = option;
    option = {'id': 1, 'label': 'Use Overlay V3, All features included.'};
    sizing = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': true};
    option['config'] = sizing;
    sizing = new Array(4);
    sizing[0] = option;
    output = {'id': 2, 'label': 'Use Overlay V3, Minus "Now Playing" Notif.'};
    option = 2;
    result = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': false};
    output['config'] = result;
    sizing[1] = output;
    output = {'id': 3, 'label': 'Use Overlay V3 minus any activity'};
    result = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': false, 'allowNowPlaying': false};
    output['config'] = result;
    sizing[2] = output;
    output = {'id': 4, 'label': 'Use Overlay V3 tech with Overlay 2 UI'};
    result = {'overlayV3tech': true, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    output['config'] = result;
    sizing[3] = output;
    golfie['treatments'] = sizing;
    golfie = yankee.bind(romeon)(golfie);
    var _closure1_slot0 = golfie;
    tangon = offset[tangon];
    romeon = verify.bind(entity)(tangon);
    yankee = romeon.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-06_overlay_raf_manager', 'label': 'Overlay RAF Manager'};
    foxtra = foxtra.CONNECTION_OPEN;
    tangon['commonTriggerPoint'] = foxtra;
    foxtra = {};
    foxtra['enabled'] = backup;
    tangon['defaultConfig'] = foxtra;
    backup = {'id': 1, 'label': 'Enable RAF Manager'};
    foxtra = {};
    foxtra['enabled'] = kiloes;
    backup['config'] = foxtra;
    foxtra = new Array(1);
    foxtra[0] = backup;
    tangon['treatments'] = foxtra;
    tangon = yankee.bind(romeon)(tangon);
    var _closure1_slot1 = tangon;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/overlay/OverlayV3Experiment.tsx';
    option = verify.bind(offset)(option);
    zuuluu['OverlayV3Experiment'] = golfie;
    zuuluu['useOverlayV3'] = oscard;
    zuuluu['getUseOverlayV3'] = report;
    report = function(argFoo) { // Original name: getUseAnyOverlayV3
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = arguments[1];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            tangon = true;
 11:
            michal = _closure1_slot3;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity, tangon);
            entity = entity.overlayV3tech;
            return entity;
        }
    };
    zuuluu['getUseAnyOverlayV3'] = report;
    report = function(argFoo) { // Original name: useAnyOverlayV3
        zuuluu = _closure1_slot2;
        michal = undefined;
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        entity = entity.overlayV3tech;
        return entity;
    };
    zuuluu['useAnyOverlayV3'] = report;
    report = function(argFoo) { // Original name: isInOverlayNowPlayingExperiment
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        entity = entity.allowNowPlaying;
        return entity;
    };
    zuuluu['isInOverlayNowPlayingExperiment'] = report;
    zuuluu['OverlayRafManagerExperiment'] = tangon;
    tangon = function(argFoo) { // Original name: useOverlayRafManager
        zuuluu = _closure1_slot1;
        michal = zuuluu.useExperiment;
        entity = {};
        tangon = argFoo;
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useOverlayRafManager'] = tangon;
    michal = function(argFoo) { // Original name: getUseOverlayRafManager
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            report = true;
 11:
            tangon = _closure1_slot1;
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
    zuuluu['getUseOverlayRafManager'] = michal;
    return entity;
})();