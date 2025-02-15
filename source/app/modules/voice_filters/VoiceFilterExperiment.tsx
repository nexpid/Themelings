// app/modules/voice_filters/VoiceFilterExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    foxtrot = true;
    tango['value'] = foxtrot;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    verify = oscar.bind(entity)(tango);
    options = verify.createExperiment;
    tango = {'kind': 'user', 'id': '2024-10_flamingo', 'label': 'Flamingo'};
    report = {};
    offset = false;
    report['enabled'] = offset;
    tango['defaultConfig'] = report;
    report = {'id': 1, 'label': 'Enabled - Treatment 1'};
    offset = {};
    offset['enabled'] = foxtrot;
    report['config'] = offset;
    offset = new Array(3);
    offset[0] = report;
    yankee = {'id': 2, 'label': 'Enabled - Treatment 2'};
    report = 2;
    romeo = {};
    romeo['enabled'] = foxtrot;
    yankee['config'] = romeo;
    offset[1] = yankee;
    yankee = {'id': 3, 'label': 'Enabled - Treatment 3'};
    romeo = {};
    romeo['enabled'] = foxtrot;
    yankee['config'] = romeo;
    offset[2] = yankee;
    tango['treatments'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot2 = tango;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_filters/VoiceFilterExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['VoiceFilterExperiment'] = tango;
    tango = function(argFoo) { // Original name: isVoiceFiltersEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = mike.location;
            oscar = mike.autoTrackExposure;
            report = _closure1_slot2;
            tango = report.getCurrentConfig;
            zulu = {};
            zulu['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            entity = entity.enabled;
            if(!entity) { _fun00002_ip = 86; continue _fun00001 }
 54:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.isDesktop;
            entity = mike.bind(zulu)();
 86:
            return entity;
        }
    };
    zulu['isVoiceFiltersEnabled'] = tango;
    mike = function(argFoo) { // Original name: useAreVoiceFiltersEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            entity = mike.location;
            oscar = mike.autoTrackExposure;
            report = _closure1_slot2;
            tango = report.useExperiment;
            zulu = {};
            zulu['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            entity = entity.enabled;
            if(!entity) { _fun00004_ip = 86; continue _fun00003 }
 54:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.isDesktop;
            entity = mike.bind(zulu)();
 86:
            return entity;
        }
    };
    zulu['useAreVoiceFiltersEnabled'] = mike;
    return entity;
})();