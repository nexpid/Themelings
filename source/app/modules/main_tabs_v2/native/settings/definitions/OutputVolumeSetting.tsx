// app/modules/main_tabs_v2/native/settings/definitions/OutputVolumeSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = {};
    verify = 2;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.RendererType;
    verify = verify.VOLUME_SLIDER;
    mike['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 4;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.xPHVBg;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = verify;
    golf = golf.VOICE;
    mike['parent'] = golf;
    golf = 200;
    mike['maximum'] = golf;
    golf = function() { // Original name: useOutputVolumeSettingValue
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot2;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            mike = _closure1_slot2;
            entity = mike.getOutputVolume;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useValue'] = golf;
    golf = 5;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    golf = golf.setOutputVolume;
    mike['onValueChange'] = golf;
    tango = function() { // Original name: additionalSearchTerms
        oscar = _closure1_slot0;
        golf = _closure1_slot1;
        mike = 4;
        entity = golf[mike];
        report = undefined;
        entity = oscar.bind(report)(entity);
        tango = entity.intl;
        zulu = tango.string;
        entity = golf[mike];
        entity = oscar.bind(report)(entity);
        entity = entity.t;
        entity = entity.3182VF;
        zulu = zulu.bind(tango)(entity);
        entity = new Array(2);
        entity[0] = zulu;
        zulu = golf[mike];
        zulu = oscar.bind(report)(zulu);
        tango = zulu.intl;
        zulu = tango.string;
        mike = golf[mike];
        mike = oscar.bind(report)(mike);
        mike = mike.t;
        mike = mike.DGq/PT;
        mike = zulu.bind(tango)(mike);
        entity[1] = mike;
        return entity;
    };
    mike['additionalSearchTerms'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/OutputVolumeSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();