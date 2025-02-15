// app/modules/main_tabs_v2/native/settings/definitions/StreamOutputVolumeSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: getActiveApplicationStream
        _fun97058: for(var _fun97058_ip = 0; ; ) switch(_fun97058_ip) {
 0:
            mike = arguments[0];
            golf = undefined;
            if(!(mike === golf)) { _fun97058_ip = 35; continue _fun97058 }
 9:
            tango = _closure1_slot3;
            entity = new Array(2);
            entity[0] = tango;
            zulu = _closure1_slot4;
            entity[1] = zulu;
            mike = entity;
 35:
            tango = mike;
            entity = tango[Symbol.iterator];
            tango = entity().next;
            report = tango().value;
            mike = entity;
            zulu = mike === golf;
            mike = undefined;
            if(zulu) { _fun97058_ip = 60; continue _fun97058 }
 57:
            mike = report;
 60:
            oscar = undefined;
            if(zulu) { _fun97058_ip = 90; continue _fun97058 }
 65:
            report = tango().value;
            tango = entity;
            tango = tango === golf;
            oscar = undefined;
            zulu = tango;
            if(tango) { _fun97058_ip = 90; continue _fun97058 }
 84:
            oscar = report;
            zulu = tango;
 90:
            if(zulu) { _fun97058_ip = 96; continue _fun97058 }
 93:
            entity.return();
 96:
            entity = mike.getLastActiveStream;
            mike = entity.bind(mike)();
            report = null;
            zulu = report != mike;
            entity = null;
            if(!zulu) { _fun97058_ip = 142; continue _fun97058 }
 117:
            tango = mike.ownerId;
            zulu = oscar.getId;
            zulu = zulu.bind(oscar)();
            entity = null;
            if(!(tango !== zulu)) { _fun97058_ip = 142; continue _fun97058 }
 139:
            entity = mike;
 142:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = {};
    options = 4;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.RendererType;
    options = options.VOLUME_SLIDER;
    mike['type'] = options;
    options = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 9;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.pEAl4e;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    golf = golf.VOICE;
    mike['parent'] = golf;
    golf = 200;
    mike['maximum'] = golf;
    golf = function() { // Original name: useStreamVolumeSettingValue
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        report = _closure1_slot3;
        mike = new Array(3);
        mike[0] = report;
        report = _closure1_slot4;
        mike[1] = report;
        entity = _closure1_slot5;
        mike[2] = entity;
        entity = function() {
            _fun97061: for(var _fun97061_ip = 0; ; ) switch(_fun97061_ip) {
 0:
                zulu = _closure1_slot6;
                tango = _closure1_slot3;
                entity = new Array(2);
                entity[0] = tango;
                tango = _closure1_slot4;
                entity[1] = tango;
                golf = undefined;
                zulu = zulu.bind(golf)(entity);
                entity = null;
                tango = entity != zulu;
                entity = 0;
                if(!tango) { _fun97061_ip = 99; continue _fun97061 }
 45:
                report = _closure1_slot5;
                tango = report.getLocalVolume;
                zulu = zulu.ownerId;
                oscar = _closure1_slot0;
                options = _closure1_slot2;
                mike = 6;
                mike = options[mike];
                mike = oscar.bind(golf)(mike);
                mike = mike.MediaEngineContextTypes;
                mike = mike.STREAM;
                entity = tango.bind(report)(zulu, mike);
 99:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useValue'] = golf;
    golf = function(argFoo) { // Original name: onStreamValueSettingValueChange
        zulu = _closure1_slot6;
        entity = undefined;
        zulu = zulu.bind(entity)();
        report = _closure1_slot1;
        golf = _closure1_slot2;
        tango = 7;
        tango = golf[tango];
        options = report.bind(entity)(tango);
        tango = null;
        oscar = tango != zulu;
        tango = 'Can not set stream volume without active stream';
        tango = options.bind(entity)(oscar, tango);
        tango = 8;
        tango = golf[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.setLocalVolume;
        tango = zulu.ownerId;
        zulu = _closure1_slot0;
        mike = 6;
        mike = golf[mike];
        mike = zulu.bind(entity)(mike);
        mike = mike.MediaEngineContextTypes;
        zulu = mike.STREAM;
        mike = argFoo;
        mike = report.bind(oscar)(tango, mike, zulu);
        return entity;
    };
    mike['onValueChange'] = golf;
    golf = function() { // Original name: useHasStreamVolumeSetting
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        report = _closure1_slot3;
        mike = new Array(2);
        mike[0] = report;
        entity = _closure1_slot4;
        mike[1] = entity;
        entity = function() {
            zulu = _closure1_slot6;
            tango = _closure1_slot3;
            mike = new Array(2);
            mike[0] = tango;
            entity = _closure1_slot4;
            mike[1] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = null;
            entity = entity != mike;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['usePredicate'] = golf;
    tango = function() { // Original name: additionalSearchTerms
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 9;
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
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/StreamOutputVolumeSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();