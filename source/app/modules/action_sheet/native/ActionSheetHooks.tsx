// app/modules/action_sheet/native/ActionSheetHooks.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
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
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/action_sheet/native/ActionSheetHooks.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useKeyboardActionSheetHeight
        tango = _closure1_slot1;
        oscar = _closure1_slot2;
        zulu = 1;
        zulu = oscar[zulu];
        report = undefined;
        zulu = tango.bind(report)(zulu);
        zulu = zulu.bind(report)();
        golf = zulu.top;
        var _closure2_slot0 = golf;
        golf = zulu.bottom;
        var _closure2_slot1 = golf;
        golf = zulu.imeInsetsBottom;
        zulu = 2;
        zulu = oscar[zulu];
        zulu = tango.bind(report)(zulu);
        zulu = zulu.bind(report)();
        zulu = zulu.height;
        zulu = zulu + golf;
        var _closure2_slot2 = zulu;
        zulu = 3;
        zulu = oscar[zulu];
        zulu = tango.bind(report)(zulu);
        zulu = zulu.bind(report)();
        zulu = zulu.height;
        var _closure2_slot3 = zulu;
        tango = _closure1_slot0;
        zulu = 4;
        zulu = oscar[zulu];
        tango = tango.bind(report)(zulu);
        zulu = tango.useStateFromStoresObject;
        report = _closure1_slot3;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun87650: for(var _fun87650_ip = 0; ; ) switch(_fun87650_ip) {
 0:
                zulu = _closure2_slot2;
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 5;
                mike = oscar[mike];
                oscar = undefined;
                mike = report.bind(oscar)(mike);
                mike = mike.NAV_BAR_HEIGHT_MULTILINE;
                zulu = zulu - mike;
                mike = _closure2_slot0;
                mike = zulu - mike;
                zulu = _closure1_slot3;
                output = zulu.systemKeyboardHeight;
                report = 0;
                if(!(report === output)) { _fun87650_ip = 96; continue _fun87650 }
 66:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                zulu = 6;
                zulu = options[zulu];
                golf = golf.bind(oscar)(zulu);
                zulu = golf.getEstimatedKeyboardHeight;
                output = zulu.bind(golf)();
 96:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                zulu = 7;
                zulu = options[zulu];
                golf = golf.bind(oscar)(zulu);
                zulu = golf.isAndroid;
                golf = zulu.bind(golf)();
                zulu = 0;
                if(!golf) { _fun87650_ip = 134; continue _fun87650 }
 130:
                zulu = _closure2_slot1;
 134:
                zulu = output + zulu;
                if(!(zulu >= mike)) { _fun87650_ip = 145; continue _fun87650 }
 142:
                mike = zulu;
 145:
                if(!(zulu <= report)) { _fun87650_ip = 264; continue _fun87650 }
 149:
                report = _closure1_slot1;
                golf = _closure1_slot2;
                tango = 8;
                tango = golf[tango];
                report = report.bind(oscar)(tango);
                tango = report.captureMessage;
                sequence = _closure2_slot2;
                control = _closure2_slot3;
                update = _closure2_slot0;
                result = _closure2_slot1;
                entity = global;
                entity = entity.HermesInternal;
                romeo = entity.concat;
                sierra = "Invalid keyboard height: minimum: '";
                target = "', maximum: ";
                context = ', systemKeyboardHeight: ';
                config = ' windowHeight: ';
                vacuum = ' screenHeight: ';
                source = ' safeAreaTop: ';
                echo = ' safeAreaBottom: ';
                status = zulu;
                papa = mike;
                record = output;
                entity = sierra[romeo](status, target, papa, context, record, config, sequence, vacuum, control, source, update, echo, result, output);
                entity = tango.bind(report)(entity);
 264:
                entity = {};
                entity['minimum'] = zulu;
                entity['maximum'] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useKeyboardActionSheetHeight'] = mike;
    return entity;
})();