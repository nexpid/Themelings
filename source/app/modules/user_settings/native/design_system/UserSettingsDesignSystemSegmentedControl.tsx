// app/modules/user_settings/native/design_system/UserSettingsDesignSystemSegmentedControl.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = yankee.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot4 = golf;
    tango = tango.ScrollView;
    var _closure1_slot5 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'margin': 16, 'flex': 1, 'alignItems': 'center', 'padding': 40};
    tango['container'] = verify;
    verify = {'backgroundColor': null, 'borderWidth': 2, 'borderColor': null, 'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'height': 400};
    offset = 5;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_BASE_TERTIARY;
    verify['backgroundColor'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BORDER_STRONG;
    verify['borderColor'] = offset;
    tango['item'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/native/design_system/UserSettingsDesignSystemSegmentedControl.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: UserSettingsDesignSystemSegmentedControl
        report = _closure1_slot3;
        entity = report.useState;
        mike = 0;
        entity = entity.bind(report)(mike);
        zulu = _closure1_slot2;
        tango = undefined;
        result = 2;
        entity = zulu.bind(tango)(entity, result);
        options = entity[mike];
        oscar = 1;
        entity = entity[oscar];
        var _closure2_slot0 = entity;
        verify = report.useState;
        entity = 3;
        entity = verify.bind(report)(entity);
        entity = zulu.bind(tango)(entity, result);
        output = entity[mike];
        var _closure2_slot1 = output;
        entity = entity[oscar];
        var _closure2_slot2 = entity;
        entity = _closure1_slot8;
        verify = entity.bind(tango)();
        entity = function(argFoo) { // Original name: useSegmentedControlItems
            oscar = argFoo;
            var _closure3_slot0 = oscar;
            tango = _closure1_slot8;
            zulu = undefined;
            report = tango.bind(zulu)();
            var _closure3_slot1 = report;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(2);
            mike[0] = oscar;
            report = report.item;
            mike[1] = report;
            entity = function() {
                _fun99227: for(var _fun99227_ip = 0; ; ) switch(_fun99227_ip) {
 0:
                    entity = new Array(0);
                    mike = _closure3_slot0;
                    yankee = 0;
                    mike = yankee < mike;
                    offset = 1;
                    verify = global;
                    options = 'Item ';
                    golf = 'item-';
                    report = 6;
                    tango = undefined;
                    zulu = 'heading-xxl/bold';
                    if(!mike) { _fun99227_ip = 226; continue _fun99227 }
 54:
                    foxtrot = entity.push;
                    mike = {};
                    kilo = yankee + offset;
                    backup = verify.HermesInternal;
                    backup = backup.concat;
                    backup = backup.bind(options)(kilo);
                    mike['label'] = backup;
                    kilo = yankee + offset;
                    backup = verify.HermesInternal;
                    backup = backup.concat;
                    backup = backup.bind(golf)(kilo);
                    mike['id'] = backup;
                    sizing = _closure1_slot7;
                    kilo = _closure1_slot4;
                    backup = {};
                    output = _closure3_slot1;
                    output = output.item;
                    backup['style'] = output;
                    echo = _closure1_slot6;
                    result = _closure1_slot0;
                    output = _closure1_slot1;
                    output = output[report];
                    output = result.bind(tango)(output);
                    result = output.Text;
                    output = {};
                    output['variant'] = zulu;
                    source = yankee + offset;
                    update = ['Item '];
                    update[1] = source;
                    output['children'] = update;
                    output = echo.bind(tango)(result, output);
                    backup['children'] = output;
                    backup = sizing.bind(tango)(kilo, backup);
                    mike['page'] = backup;
                    mike = foxtrot.bind(entity)(mike);
                    yankee = yankee + 1;
                    mike = _closure3_slot0;
                    if(yankee < mike) { _fun99227_ip = 54; continue _fun99227 }
 226:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        offset = entity.bind(tango)(output);
        kilo = _closure1_slot0;
        echo = _closure1_slot1;
        entity = 7;
        entity = echo[entity];
        zulu = kilo.bind(tango)(entity);
        mike = zulu.useSegmentedControlState;
        entity = {};
        entity['items'] = offset;
        entity['pageWidth'] = options;
        entity['defaultIndex'] = oscar;
        backup = mike.bind(zulu)(entity);
        zulu = report.useCallback;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.nativeEvent;
            entity = entity.layout;
            zulu = entity.width;
            mike = _closure2_slot0;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        entity = new Array(0);
        options = zulu.bind(report)(mike, entity);
        zulu = _closure1_slot7;
        mike = _closure1_slot5;
        entity = {};
        oscar = _closure1_slot4;
        report = {};
        verify = verify.container;
        report['style'] = verify;
        report['onLayout'] = options;
        verify = _closure1_slot6;
        yankee = 8;
        golf = echo[yankee];
        golf = kilo.bind(tango)(golf);
        options = golf.Stack;
        golf = {};
        offset = 24;
        golf['spacing'] = offset;
        offset = 9;
        offset = echo[offset];
        offset = kilo.bind(tango)(offset);
        romeo = offset.SegmentedControl;
        offset = {};
        offset['state'] = backup;
        romeo = zulu.bind(tango)(romeo, offset);
        offset = new Array(3);
        offset[0] = romeo;
        romeo = 10;
        romeo = echo[romeo];
        romeo = kilo.bind(tango)(romeo);
        foxtrot = romeo.SegmentedControlPages;
        romeo = {};
        romeo['state'] = backup;
        romeo = zulu.bind(tango)(foxtrot, romeo);
        offset[1] = romeo;
        yankee = echo[yankee];
        yankee = kilo.bind(tango)(yankee);
        romeo = yankee.Stack;
        yankee = {'spacing': 8, 'direction': 'horizontal'};
        backup = 11;
        foxtrot = echo[backup];
        foxtrot = kilo.bind(tango)(foxtrot);
        update = foxtrot.Button;
        foxtrot = {'text': 'Add Tab', 'variant': 'active', 'size': 'sm'};
        source = 5;
        source = output >= source;
        foxtrot['disabled'] = source;
        source = function() { // Original name: onPress
            zulu = _closure2_slot2;
            mike = _closure2_slot1;
            entity = 1;
            mike = mike + entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        foxtrot['onPress'] = source;
        update = zulu.bind(tango)(update, foxtrot);
        foxtrot = new Array(2);
        foxtrot[0] = update;
        backup = echo[backup];
        backup = kilo.bind(tango)(backup);
        kilo = backup.Button;
        backup = {'text': 'Remove Tab', 'variant': 'destructive', 'size': 'sm'};
        output = result === output;
        backup['disabled'] = output;
        sizing = function() { // Original name: onPress
            zulu = _closure2_slot2;
            mike = _closure2_slot1;
            entity = 1;
            mike = mike - entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        backup['onPress'] = sizing;
        backup = zulu.bind(tango)(kilo, backup);
        foxtrot[1] = backup;
        yankee['children'] = foxtrot;
        yankee = verify.bind(tango)(romeo, yankee);
        offset[2] = yankee;
        golf['children'] = offset;
        golf = verify.bind(tango)(options, golf);
        report['children'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();