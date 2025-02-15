// app/modules/main_tabs_v2/native/settings/definitions/NoiseSuppressionSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    golf = oscar[entity];
    mike = argBaz;
    entity = undefined;
    mike = mike.bind(entity)(golf);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = {};
    options = 2;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.RendererType;
    options = options.TOGGLE;
    mike['type'] = options;
    options = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 5;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.t8QhiY;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    golf = golf.VOICE;
    mike['parent'] = golf;
    golf = function() { // Original name: useNoiseSuppressionSettingValue
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
            entity = mike.getNoiseSuppression;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useValue'] = golf;
    golf = function(argFoo) { // Original name: onNoiseSuppressionSettingValueChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 4;
            zulu = entity[oscar];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.handleNoiseSuppressionChange;
            report = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = report.bind(entity)(mike);
            report = mike.NoiseSuppressionOpt;
            mike = argFoo;
            if(mike) { _fun00002_ip = 68; continue _fun00001 }
 60:
            mike = report.NONE;
            _fun00002_ip = 74; continue _fun00001;
 68:
            mike = report.STANDARD;
 74:
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['onValueChange'] = golf;
    tango = function() { // Original name: useHasNoiseSuppressionSetting
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
            entity = mike.isNoiseCancellationSupported;
            entity = entity.bind(mike)();
            entity = !entity;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['usePredicate'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/NoiseSuppressionSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();