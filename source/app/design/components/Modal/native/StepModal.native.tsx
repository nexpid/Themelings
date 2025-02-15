// app/design/components/Modal/native/StepModal.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = '100%';
    verify['height'] = offset;
    tango['container'] = verify;
    verify = {'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'top': 0, 'left': 0, 'right': 0};
    offset = 5;
    offset = oscar[offset];
    offset = report.bind(entity)(offset);
    offset = offset.NAV_BAR_HEIGHT;
    verify['height'] = offset;
    tango['stepContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Modal/native/StepModal.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: StepModal
        _fun99377: for(var _fun99377_ip = 0; ; ) switch(_fun99377_ip) {
 0:
            tango = argFoo;
            foxtrot = tango.steps;
            var _closure2_slot0 = foxtrot;
            golf = tango.onWillFocus;
            var _closure2_slot1 = golf;
            romeo = null;
            zulu = Object.create(romeo);
            offset = 0;
            zulu['steps'] = offset;
            zulu['onWillFocus'] = offset;
            source = {};
            update = tango;
            echo = zulu;
            kilo = copyDataProperties(source, update, echo);
            mike = _closure1_slot8;
            tango = undefined;
            options = mike.bind(tango)();
            zulu = _closure1_slot1;
            backup = _closure1_slot2;
            mike = 6;
            mike = backup[mike];
            mike = zulu.bind(tango)(mike);
            sizing = mike.bind(tango)();
            oscar = _closure1_slot4;
            mike = oscar.useState;
            verify = mike.bind(oscar)(offset);
            zulu = _closure1_slot3;
            mike = 2;
            zulu = zulu.bind(tango)(verify, mike);
            yankee = zulu[offset];
            mike = 1;
            mike = zulu[mike];
            var _closure2_slot2 = mike;
            zulu = oscar.useCallback;
            mike = new Array(2);
            mike[0] = golf;
            mike[1] = foxtrot;
            entity = function(argFoo) {
                _fun99378: for(var _fun99378_ip = 0; ; ) switch(_fun99378_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.route;
                    oscar = _closure2_slot2;
                    entity = _closure2_slot0;
                    report = null;
                    options = report == entity;
                    entity = undefined;
                    golf = undefined;
                    if(options) { _fun99378_ip = 52; continue _fun99378 }
 33:
                    verify = _closure2_slot0;
                    options = verify.indexOf;
                    tango = tango.name;
                    golf = options.bind(verify)(tango);
 52:
                    options = report != golf;
                    tango = 0;
                    if(!options) { _fun99378_ip = 64; continue _fun99378 }
 61:
                    tango = golf;
 64:
                    tango = oscar.bind(entity)(tango);
                    tango = _closure2_slot1;
                    if(!(report != tango)) { _fun99378_ip = 86; continue _fun99378 }
 77:
                    mike = _closure2_slot1;
                    mike = mike.bind(entity)(zulu);
 86:
                    return entity;
                }
            };
            output = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot7;
            mike = _closure1_slot5;
            entity = {};
            oscar = options.container;
            entity['style'] = oscar;
            golf = _closure1_slot6;
            verify = _closure1_slot0;
            report = 7;
            report = backup[report];
            report = verify.bind(tango)(report);
            oscar = report.Modal;
            report = {};
            source = report;
            update = kilo;
            kilo = copyDataProperties(source, update);
            kilo = 'onWillFocus';
            report[kilo] = output;
            output = {};
            kilo = 5;
            kilo = backup[kilo];
            kilo = verify.bind(tango)(kilo);
            result = kilo.NAV_BAR_HEIGHT;
            kilo = sizing.top;
            kilo = result + kilo;
            output['height'] = kilo;
            kilo = 'headerStyle';
            report[kilo] = output;
            output = true;
            kilo = 'hideTitle';
            report[kilo] = output;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            oscar = {};
            kilo = options.stepContainer;
            options = new Array(2);
            options[0] = kilo;
            kilo = {};
            sizing = sizing.top;
            kilo['marginTop'] = sizing;
            options[1] = kilo;
            oscar['style'] = options;
            options = 'box-none';
            oscar['pointerEvents'] = options;
            options = 8;
            options = backup[options];
            options = verify.bind(tango)(options);
            verify = options.ModalStepIndicator;
            options = {};
            options['currentStep'] = yankee;
            backup = romeo == foxtrot;
            yankee = undefined;
            if(backup) { _fun99377_ip = 381; continue _fun99377 }
 376:
            yankee = foxtrot.length;
 381:
            romeo = romeo != yankee;
            offset = 0;
            if(!romeo) { _fun99377_ip = 393; continue _fun99377 }
 390:
            offset = yankee;
 393:
            options['totalSteps'] = offset;
            options = golf.bind(tango)(verify, options);
            oscar['children'] = options;
            oscar = golf.bind(tango)(mike, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['StepModal'] = mike;
    return entity;
})();