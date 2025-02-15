// app/modules/forums/native/composer/hooks/useFocusHandlers.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    verify = 0;
    report = golf[verify];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot2 = tango;
    options = 1;
    report = golf[options];
    tango = argCorge;
    tango = tango.bind(entity)(report);
    var _closure1_slot3 = tango;
    tango = {};
    tango['TITLE'] = verify;
    report = 'TITLE';
    tango[verify] = report;
    tango['CONTENT'] = options;
    report = 'CONTENT';
    tango[options] = report;
    var _closure1_slot4 = tango;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/forums/native/composer/hooks/useFocusHandlers.tsx';
    report = oscar.bind(golf)(report);
    zulu['PostComposerInputs'] = tango;
    mike = function(argFoo) { // Original name: useFocusHandlers
        entity = argFoo;
        mike = entity.titleInput;
        var _closure2_slot0 = mike;
        entity = entity.contentInput;
        var _closure2_slot1 = entity;
        yankee = _closure1_slot3;
        zulu = yankee.useState;
        entity = _closure1_slot4;
        entity = entity.TITLE;
        entity = zulu.bind(yankee)(entity);
        verify = _closure1_slot2;
        options = undefined;
        golf = 2;
        entity = verify.bind(options)(entity, golf);
        mike = 0;
        zulu = entity[mike];
        var _closure2_slot2 = zulu;
        oscar = 1;
        report = entity[oscar];
        offset = yankee.useState;
        entity = false;
        entity = offset.bind(yankee)(entity);
        entity = verify.bind(options)(entity, golf);
        mike = entity[mike];
        entity = entity[oscar];
        var _closure2_slot3 = entity;
        entity = function(argFoo) { // Original name: _setOpeningKeyboard
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.isAndroid;
                mike = mike.bind(zulu)();
                if(!mike) { _fun00002_ip = 52; continue _fun00001 }
 37:
                zulu = _closure2_slot3;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
 52:
                return entity;
            }
        };
        var _closure2_slot4 = entity;
        entity = {};
        entity['setFocusedInput'] = report;
        report = function() { // Original name: focusLastInput
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = _closure2_slot4;
                entity = undefined;
                zulu = true;
                zulu = tango.bind(entity)(zulu);
                report = _closure2_slot2;
                tango = _closure1_slot4;
                tango = tango.TITLE;
                if(!(report !== tango)) { _fun00004_ip = 82; continue _fun00003 }
 37:
                tango = _closure2_slot2;
                zulu = _closure1_slot4;
                zulu = zulu.CONTENT;
                if(!(tango === zulu)) { _fun00004_ip = 107; continue _fun00003 }
 55:
                zulu = _closure2_slot1;
                tango = zulu.current;
                zulu = null;
                if(!(zulu != tango)) { _fun00004_ip = 107; continue _fun00003 }
 70:
                zulu = tango.focus;
                zulu = zulu.bind(tango)();
                _fun00004_ip = 107; continue _fun00003;
 82:
                mike = _closure2_slot0;
                zulu = mike.current;
                mike = null;
                if(!(mike != zulu)) { _fun00004_ip = 107; continue _fun00003 }
 97:
                mike = zulu.focus;
                mike = mike.bind(zulu)();
 107:
                mike = global;
                tango = mike.setTimeout;
                zulu = function() {
                    zulu = _closure2_slot4;
                    entity = undefined;
                    mike = false;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = 250;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            }
        };
        entity['focusLastInput'] = report;
        tango = function() { // Original name: blurLastInput
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = _closure2_slot4;
                entity = undefined;
                zulu = false;
                zulu = tango.bind(entity)(zulu);
                report = _closure2_slot2;
                tango = _closure1_slot4;
                tango = tango.TITLE;
                if(!(report !== tango)) { _fun00006_ip = 82; continue _fun00005 }
 37:
                tango = _closure2_slot2;
                zulu = _closure1_slot4;
                zulu = zulu.CONTENT;
                if(!(tango === zulu)) { _fun00006_ip = 107; continue _fun00005 }
 55:
                zulu = _closure2_slot1;
                tango = zulu.current;
                zulu = null;
                if(!(zulu != tango)) { _fun00006_ip = 107; continue _fun00005 }
 70:
                zulu = tango.blur;
                zulu = zulu.bind(tango)();
                _fun00006_ip = 107; continue _fun00005;
 82:
                mike = _closure2_slot0;
                zulu = mike.current;
                mike = null;
                if(!(mike != zulu)) { _fun00006_ip = 107; continue _fun00005 }
 97:
                mike = zulu.blur;
                mike = mike.bind(zulu)();
 107:
                return entity;
            }
        };
        entity['blurLastInput'] = tango;
        entity['focusedInput'] = zulu;
        entity['openingKeyboard'] = mike;
        return entity;
    };
    zulu['useFocusHandlers'] = mike;
    return entity;
})();