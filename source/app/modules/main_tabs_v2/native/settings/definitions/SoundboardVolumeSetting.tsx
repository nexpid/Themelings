// app/modules/main_tabs_v2/native/settings/definitions/SoundboardVolumeSetting.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    tango = mike.MobileSetting;
    mike = {};
    options = 1;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.RendererType;
    options = options.VOLUME_SLIDER;
    mike['type'] = options;
    golf = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 2;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.kbFsAA;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = golf;
    tango = tango.VOICE;
    mike['parent'] = tango;
    tango = 100;
    mike['maximum'] = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.getAmplitudinalSoundboardVolume;
    mike['useValue'] = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.updateUserSoundboardVolume;
    mike['onValueChange'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/SoundboardVolumeSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();