// app/modules/remixing/native/hooks/TextHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useRemixingEditorStore;
    var _closure1_slot6 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = options.bind(entity)(golf);
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DEFAULT_TEXT_COLOR;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useRemixingTextStore;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RemixMode;
    var _closure1_slot10 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/native/hooks/TextHooks.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            kilo = entity.canvasSize;
            var _closure2_slot0 = kilo;
            backup = entity.scaleFactor;
            var _closure2_slot1 = backup;
            control = undefined;
            var _closure2_slot12 = control;
            var _closure2_slot13 = control;
            var _closure2_slot14 = control;
            tango = _closure1_slot6;
            oscar = _closure1_slot0;
            foxtrot = _closure1_slot3;
            entity = 6;
            entity = foxtrot[entity];
            entity = oscar.bind(control)(entity);
            mike = entity.shallow;
            entity = function(argFoo) {
                mike = argFoo;
                zulu = mike.editingComponent;
                entity = new Array(3);
                entity[0] = zulu;
                zulu = mike.setEditingComponent;
                entity[1] = zulu;
                mike = mike.setCurrentMode;
                entity[2] = mike;
                return entity;
            };
            tango = tango.bind(control)(entity, mike);
            mike = _closure1_slot4;
            entity = 3;
            tango = mike.bind(control)(tango, entity);
            entity = 0;
            mike = tango[entity];
            var _closure2_slot2 = mike;
            entity = 1;
            romeo = tango[entity];
            var _closure2_slot3 = romeo;
            entity = 2;
            options = tango[entity];
            var _closure2_slot4 = options;
            entity = _closure1_slot9;
            entity = entity.bind(control)();
            yankee = entity.setText;
            var _closure2_slot5 = yankee;
            offset = entity.setTextBackgroundColor;
            var _closure2_slot6 = offset;
            golf = entity.setTextTransform;
            var _closure2_slot7 = golf;
            verify = entity.setFontSize;
            var _closure2_slot8 = verify;
            sizing = entity.fontSize;
            entity = entity.reset;
            var _closure2_slot9 = entity;
            output = _closure1_slot1;
            tango = 7;
            tango = foxtrot[tango];
            tango = output.bind(control)(tango);
            tango = tango.bind(control)(sizing);
            output = tango.font;
            var _closure2_slot10 = output;
            sizing = tango.fontSource;
            var _closure2_slot11 = sizing;
            tango = 8;
            tango = foxtrot[tango];
            foxtrot = oscar.bind(control)(tango);
            oscar = foxtrot.useSupportedTextFilter;
            update = null;
            result = update != mike;
            tango = null;
            if(!result) { _fun00002_ip = 316; continue _fun00001 }
 268:
            echo = mike.type;
            source = _closure1_slot0;
            vacuum = _closure1_slot3;
            result = 9;
            result = vacuum[result];
            result = source.bind(control)(result);
            result = result.RemixElement;
            result = result.TEXT;
            tango = null;
            if(!(echo === result)) { _fun00002_ip = 316; continue _fun00001 }
 311:
            tango = mike.id;
 316:
            tango = oscar.bind(foxtrot)(tango, output);
            _closure2_slot12 = tango;
            oscar = _closure1_slot5;
            foxtrot = oscar.useCallback;
            report = new Array(3);
            report[0] = output;
            report[1] = sizing;
            report[2] = tango;
            tango = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot7;
                    entity = zulu.getTextState;
                    entity = entity.bind(zulu)();
                    golf = entity.textColor;
                    zulu = _closure1_slot9;
                    entity = zulu.getState;
                    entity = entity.bind(zulu)();
                    kilo = entity.text;
                    verify = entity.fontSize;
                    backup = entity.textWidth;
                    offset = entity.textBackgroundColor;
                    zulu = _closure2_slot10;
                    entity = null;
                    if(!(entity == zulu)) { _fun00004_ip = 114; continue _fun00003 }
 73:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    entity = 10;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.captureMessage;
                    entity = 'remix: createTextParams is failed because the font is null';
                    entity = zulu.bind(tango)(entity);
                    _fun00004_ip = 133; continue _fun00003;
 114:
                    entity = _closure2_slot12;
                    tango = undefined;
                    entity = entity.bind(tango)(kilo);
                    zulu = '';
                    if(!(zulu === entity)) { _fun00004_ip = 137; continue _fun00003 }
 133:
                    entity = undefined;
                    return entity;
 137:
                    entity = {};
                    options = _closure1_slot0;
                    oscar = _closure1_slot3;
                    yankee = 11;
                    yankee = oscar[yankee];
                    foxtrot = options.bind(tango)(yankee);
                    romeo = foxtrot.wrapText;
                    yankee = _closure2_slot10;
                    yankee = romeo.bind(foxtrot)(yankee, kilo, backup);
                    entity['lines'] = yankee;
                    entity['color'] = golf;
                    entity['backgroundColor'] = offset;
                    entity['fontSize'] = verify;
                    report = _closure2_slot11;
                    entity['fontSource'] = report;
                    report = 9;
                    oscar = oscar[report];
                    oscar = options.bind(tango)(oscar);
                    oscar = oscar.RemixShader;
                    oscar = oscar.RAINBOW;
                    if(!(golf === oscar)) { _fun00004_ip = 272; continue _fun00003 }
 231:
                    entity['color'] = zulu;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    mike = mike[report];
                    mike = zulu.bind(tango)(mike);
                    mike = mike.RemixShader;
                    mike = mike.RAINBOW;
                    entity['shader'] = mike;
 272:
                    return entity;
                }
            };
            foxtrot = foxtrot.bind(oscar)(tango, report);
            _closure2_slot13 = foxtrot;
            report = oscar.useCallback;
            tango = new Array(5);
            tango[0] = kilo;
            tango[1] = backup;
            tango[2] = foxtrot;
            tango[3] = mike;
            tango[4] = romeo;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot13;
                    entity = undefined;
                    offset = zulu.bind(entity)();
                    zulu = null;
                    if(!(zulu != offset)) { _fun00006_ip = 334; continue _fun00005 }
 22:
                    oscar = _closure1_slot9;
                    report = oscar.getState;
                    report = report.bind(oscar)();
                    verify = report.textTransform;
                    foxtrot = report.addTextPosition;
                    report = _closure2_slot2;
                    if(!(zulu != report)) { _fun00006_ip = 104; continue _fun00005 }
 59:
                    report = _closure2_slot2;
                    oscar = report.type;
                    golf = _closure1_slot0;
                    options = _closure1_slot3;
                    report = 9;
                    report = options[report];
                    report = golf.bind(entity)(report);
                    report = report.RemixElement;
                    report = report.TEXT;
                    if(!(oscar !== report)) { _fun00006_ip = 204; continue _fun00005 }
 104:
                    oscar = _closure1_slot2;
                    romeo = _closure1_slot3;
                    report = 12;
                    report = romeo[report];
                    options = oscar.bind(entity)(report);
                    golf = options.addText;
                    oscar = {};
                    result = _closure2_slot0;
                    echo = oscar;
                    report = copyDataProperties(echo, result);
                    yankee = _closure1_slot0;
                    report = 11;
                    report = romeo[report];
                    backup = yankee.bind(entity)(report);
                    romeo = backup.scalePoint;
                    yankee = {};
                    report = 0;
                    yankee['x'] = report;
                    report = foxtrot.y;
                    yankee['y'] = report;
                    report = _closure2_slot1;
                    report = romeo.bind(backup)(yankee, report);
                    report = golf.bind(options)(offset, oscar, report);
                    _fun00006_ip = 334; continue _fun00005;
 204:
                    oscar = _closure1_slot2;
                    golf = _closure1_slot3;
                    report = 12;
                    report = golf[report];
                    options = oscar.bind(entity)(report);
                    golf = options.updateText;
                    yankee = _closure2_slot2;
                    oscar = yankee.id;
                    report = {};
                    result = _closure2_slot0;
                    echo = report;
                    romeo = copyDataProperties(echo, result);
                    if(!(zulu == yankee)) { _fun00006_ip = 294; continue _fun00005 }
 256:
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot3;
                    tango = 11;
                    tango = romeo[tango];
                    romeo = yankee.bind(entity)(tango);
                    yankee = romeo.scalePoint;
                    tango = _closure2_slot1;
                    tango = yankee.bind(romeo)(foxtrot, tango);
                    _fun00006_ip = 303; continue _fun00005;
 294:
                    yankee = _closure2_slot2;
                    tango = yankee.position;
 303:
                    update = options;
                    echo = oscar;
                    result = offset;
                    output = report;
                    sizing = tango;
                    kilo = verify;
                    tango = update[golf](echo, result, output, sizing, kilo, backup);
                    mike = _closure2_slot3;
                    mike = mike.bind(entity)(zulu);
 334:
                    return entity;
                }
            };
            report = report.bind(oscar)(mike, tango);
            _closure2_slot14 = report;
            tango = oscar.useCallback;
            mike = new Array(2);
            mike[0] = report;
            mike[1] = entity;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 13;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.dismissKeyboard;
                    zulu = zulu.bind(tango)();
                    zulu = _closure1_slot9;
                    mike = zulu.getState;
                    mike = mike.bind(zulu)();
                    mike = mike.shouldSaveText;
                    if(!mike) { _fun00008_ip = 69; continue _fun00007 }
 58:
                    mike = _closure2_slot14;
                    mike = mike.bind(entity)();
 69:
                    mike = _closure2_slot9;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            mike = tango.bind(oscar)(entity, mike);
            entity = {};
            report = oscar.useCallback;
            tango = new Array(6);
            tango[0] = romeo;
            tango[1] = yankee;
            tango[2] = offset;
            tango[3] = verify;
            tango[4] = options;
            tango[5] = golf;
            zulu = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = argFoo;
                    golf = _closure1_slot0;
                    report = _closure1_slot3;
                    zulu = 14;
                    oscar = report[zulu];
                    entity = undefined;
                    options = golf.bind(entity)(oscar);
                    oscar = options.triggerHapticFeedback;
                    zulu = report[zulu];
                    zulu = golf.bind(entity)(zulu);
                    zulu = zulu.HapticFeedbackTypes;
                    zulu = zulu.IMPACT_MEDIUM;
                    zulu = oscar.bind(options)(zulu);
                    oscar = _closure2_slot3;
                    oscar = oscar.bind(entity)(tango);
                    options = _closure2_slot5;
                    oscar = tango.textParams;
                    offset = oscar.lines;
                    verify = offset.join;
                    oscar = '\n';
                    oscar = verify.bind(offset)(oscar);
                    oscar = options.bind(entity)(oscar);
                    oscar = 12;
                    report = report[oscar];
                    verify = golf.bind(entity)(report);
                    options = verify.setTextColor;
                    report = tango.textParams;
                    golf = report.color;
                    report = null;
                    if(!(report == golf)) { _fun00010_ip = 146; continue _fun00009 }
 142:
                    golf = _closure1_slot8;
 146:
                    golf = options.bind(verify)(golf);
                    report = report == tango;
                    golf = undefined;
                    if(report) { _fun00010_ip = 166; continue _fun00009 }
 160:
                    golf = tango.shader;
 166:
                    options = _closure1_slot0;
                    report = _closure1_slot3;
                    verify = 9;
                    report = report[verify];
                    report = options.bind(entity)(report);
                    report = report.RemixShader;
                    report = report.RAINBOW;
                    if(!(golf === report)) { _fun00010_ip = 251; continue _fun00009 }
 202:
                    options = _closure1_slot0;
                    report = _closure1_slot3;
                    oscar = report[oscar];
                    golf = options.bind(entity)(oscar);
                    oscar = golf.setTextColor;
                    report = report[verify];
                    report = options.bind(entity)(report);
                    report = report.RemixShader;
                    report = report.RAINBOW;
                    report = oscar.bind(golf)(report);
 251:
                    oscar = _closure2_slot6;
                    report = tango.textParams;
                    report = report.backgroundColor;
                    report = oscar.bind(entity)(report);
                    oscar = _closure2_slot7;
                    report = tango.transform;
                    report = oscar.bind(entity)(report);
                    report = _closure2_slot8;
                    tango = tango.textParams;
                    tango = tango.fontSize;
                    tango = report.bind(entity)(tango);
                    zulu = _closure2_slot4;
                    mike = _closure1_slot10;
                    mike = mike.TEXT_MODE;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            zulu = report.bind(oscar)(zulu, tango);
            entity['editText'] = zulu;
            entity['onUnmount'] = mike;
            return entity;
        }
    };
    zulu['useTextHooks'] = mike;
    return entity;
})();