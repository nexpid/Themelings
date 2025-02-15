// app/modules/clips/isClientClipsCapable.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.Features;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/clips/isClientClipsCapable.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: isClientClipsCapable
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 1;
            entity = tango[entity];
            oscar = undefined;
            entity = mike.bind(oscar)(entity);
            golf = entity.ClipsExperiment;
            tango = golf.getCurrentConfig;
            mike = {};
            entity = 'isClipsClientCapable';
            mike['location'] = entity;
            entity = {};
            options = false;
            entity['autoTrackExposure'] = options;
            entity = tango.bind(golf)(mike, entity);
            entity = entity.ignorePlatformRestriction;
            if(entity) { _fun00002_ip = 143; continue _fun00001 }
 76:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 2;
            mike = golf[mike];
            tango = tango.bind(oscar)(mike);
            mike = tango.isDesktop;
            mike = mike.bind(tango)();
            if(!mike) { _fun00002_ip = 140; continue _fun00001 }
 109:
            tango = report.getMediaEngine;
            report = tango.bind(report)();
            tango = report.supports;
            zulu = _closure1_slot3;
            zulu = zulu.CLIPS;
            mike = tango.bind(report)(zulu);
 140:
            entity = mike;
 143:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();