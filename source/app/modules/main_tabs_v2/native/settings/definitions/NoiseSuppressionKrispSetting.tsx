// app/modules/main_tabs_v2/native/settings/definitions/NoiseSuppressionKrispSetting.tsx
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
    options = options.RADIO;
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
    golf = function() { // Original name: useNoiseSuppressionKrispSettingValue
        _fun97088: for(var _fun97088_ip = 0; ; ) switch(_fun97088_ip) {
 0:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            tango = 3;
            entity = golf[tango];
            report = undefined;
            yankee = oscar.bind(report)(entity);
            offset = yankee.useStateFromStores;
            options = _closure1_slot2;
            verify = new Array(1);
            verify[0] = options;
            entity = function() {
                mike = _closure1_slot2;
                entity = mike.getNoiseSuppression;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = offset.bind(yankee)(verify, entity);
            tango = golf[tango];
            golf = oscar.bind(report)(tango);
            oscar = golf.useStateFromStores;
            tango = new Array(1);
            tango[0] = options;
            zulu = function() {
                mike = _closure1_slot2;
                entity = mike.getNoiseCancellation;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = oscar.bind(golf)(tango, zulu);
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 4;
            mike = oscar[mike];
            mike = tango.bind(report)(mike);
            mike = mike.NoiseSuppressionOpt;
            if(zulu) { _fun97088_ip = 140; continue _fun97088 }
 121:
            if(entity) { _fun97088_ip = 132; continue _fun97088 }
 124:
            entity = mike.NONE;
            _fun97088_ip = 138; continue _fun97088;
 132:
            entity = mike.STANDARD;
 138:
            _fun97088_ip = 146; continue _fun97088;
 140:
            entity = mike.KRISP;
 146:
            return entity;
        }
    };
    mike['useValue'] = golf;
    golf = function(argFoo) { // Original name: onNoiseSuppressionKrispValueSettingChange
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.handleNoiseSuppressionChange;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['onValueChange'] = golf;
    golf = function() { // Original name: useNoiseSuppressionKrispSettingOptions
        mike = {};
        golf = _closure1_slot0;
        options = _closure1_slot1;
        tango = 4;
        entity = options[tango];
        oscar = undefined;
        entity = golf.bind(oscar)(entity);
        entity = entity.NoiseSuppressionOpt;
        entity = entity.KRISP;
        mike['value'] = entity;
        zulu = 5;
        entity = options[zulu];
        entity = golf.bind(oscar)(entity);
        verify = entity.intl;
        report = verify.string;
        entity = options[zulu];
        entity = golf.bind(oscar)(entity);
        entity = entity.t;
        entity = entity.rdoNzs;
        entity = report.bind(verify)(entity);
        mike['label'] = entity;
        entity = new Array(3);
        entity[0] = mike;
        mike = {};
        report = options[tango];
        report = golf.bind(oscar)(report);
        report = report.NoiseSuppressionOpt;
        report = report.STANDARD;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.qXeYHx;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[1] = mike;
        mike = {};
        tango = options[tango];
        tango = golf.bind(oscar)(tango);
        tango = tango.NoiseSuppressionOpt;
        tango = tango.NONE;
        mike['value'] = tango;
        tango = options[zulu];
        tango = golf.bind(oscar)(tango);
        report = tango.intl;
        tango = report.string;
        zulu = options[zulu];
        zulu = golf.bind(oscar)(zulu);
        zulu = zulu.t;
        zulu = zulu.wkYAl5;
        zulu = tango.bind(report)(zulu);
        mike['label'] = zulu;
        entity[2] = mike;
        return entity;
    };
    mike['useOptions'] = golf;
    golf = function() { // Original name: useHasNoiseSuppressionKrispSetting
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
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['usePredicate'] = golf;
    tango = function() { // Original name: additionalSearchTerms
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
        entity = entity.hmfkCg;
        mike = mike.bind(zulu)(entity);
        entity = new Array(1);
        entity[0] = mike;
        return entity;
    };
    mike['additionalSearchTerms'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/NoiseSuppressionKrispSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();