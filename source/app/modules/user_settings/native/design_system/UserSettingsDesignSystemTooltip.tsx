// app/modules/user_settings/native/design_system/UserSettingsDesignSystemTooltip.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    tango = function() { // Original name: useCanRotate
        report = _closure1_slot3;
        zulu = report.useState;
        mike = false;
        oscar = zulu.bind(report)(mike);
        report = _closure1_slot2;
        zulu = undefined;
        mike = 2;
        report = report.bind(zulu)(oscar, mike);
        mike = 0;
        zulu = report[mike];
        var _closure2_slot0 = zulu;
        mike = 1;
        mike = report[mike];
        golf = _closure1_slot3;
        oscar = golf.useEffect;
        report = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = _closure2_slot0;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                if(mike) { _fun00002_ip = 47; continue _fun00001 }
 35:
                mike = tango.lockOrientationForiOS;
                mike = mike.bind(tango)();
                _fun00002_ip = 67; continue _fun00001;
 47:
                zulu = tango.unlockOrientation;
                mike = {};
                report = false;
                mike['unlockAfterRotatingToPreviousLock'] = report;
                mike = zulu.bind(tango)(mike);
 67:
                return entity;
            }
        };
        report = oscar.bind(golf)(report);
        oscar = _closure1_slot3;
        report = oscar.useEffect;
        tango = function() {
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.lockOrientationForiOS;
                entity = entity.bind(mike)();
                return entity;
            };
            return entity;
        };
        entity = new Array(0);
        entity = report.bind(oscar)(tango, entity);
        entity = new Array(2);
        entity[0] = zulu;
        entity[1] = mike;
        return entity;
    };
    var _closure1_slot10 = tango;
    entity = function() { // Original name: Content
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot8;
            tango = undefined;
            foxtrot = entity.bind(tango)();
            mike = _closure1_slot3;
            entity = mike.useState;
            verify = false;
            mike = entity.bind(mike)(verify);
            entity = _closure1_slot2;
            options = 2;
            mike = entity.bind(tango)(mike, options);
            report = 0;
            entity = mike[report];
            var _closure2_slot0 = entity;
            zulu = 1;
            mike = mike[zulu];
            var _closure2_slot1 = mike;
            mike = _closure1_slot10;
            golf = mike.bind(tango)();
            mike = _closure1_slot2;
            mike = mike.bind(tango)(golf, options);
            sizing = mike[report];
            kilo = mike[zulu];
            golf = _closure1_slot3;
            mike = golf.useState;
            golf = mike.bind(golf)(verify);
            mike = _closure1_slot2;
            mike = mike.bind(tango)(golf, options);
            yankee = mike[report];
            var _closure2_slot2 = yankee;
            offset = mike[zulu];
            result = 'Show tooltip';
            if(!entity) { _fun00004_ip = 142; continue _fun00003 }
 136:
            result = 'Hide tooltip';
 142:
            report = _closure1_slot3;
            zulu = report.useRef;
            mike = null;
            update = zulu.bind(report)(mike);
            report = _closure1_slot3;
            zulu = report.useMemo;
            mike = new Array(2);
            mike[0] = yankee;
            mike[1] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = {};
                    mike = 'NEW';
                    entity['label'] = mike;
                    tango = _closure2_slot2;
                    zulu = 'top';
                    if(!tango) { _fun00006_ip = 28; continue _fun00005 }
 24:
                    zulu = 'bottom';
 28:
                    entity['position'] = zulu;
                    mike = _closure2_slot0;
                    entity['visible'] = mike;
                    mike = function() { // Original name: onPress
                        zulu = _closure2_slot1;
                        mike = undefined;
                        entity = false;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    entity['onPress'] = mike;
                    return entity;
                }
            };
            zulu = zulu.bind(report)(entity, mike);
            options = _closure1_slot0;
            romeo = _closure1_slot1;
            entity = 6;
            entity = romeo[entity];
            mike = options.bind(tango)(entity);
            entity = mike.useTooltip;
            entity = entity.bind(mike)(update, zulu);
            zulu = _closure1_slot7;
            mike = _closure1_slot6;
            entity = {};
            verify = _closure1_slot5;
            golf = _closure1_slot4;
            report = {};
            foxtrot = foxtrot.container;
            report['style'] = foxtrot;
            output = _closure1_slot5;
            foxtrot = 7;
            foxtrot = romeo[foxtrot];
            foxtrot = options.bind(tango)(foxtrot);
            backup = foxtrot.Button;
            foxtrot = {};
            foxtrot['ref'] = update;
            echo = function() { // Original name: onPress
                zulu = _closure2_slot1;
                entity = _closure2_slot0;
                mike = !entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            foxtrot['onPress'] = echo;
            echo = 'primary';
            foxtrot['variant'] = echo;
            foxtrot['text'] = result;
            result = 'md';
            foxtrot['size'] = result;
            foxtrot = output.bind(tango)(backup, foxtrot);
            report['children'] = foxtrot;
            golf = verify.bind(tango)(golf, report);
            report = new Array(4);
            report[0] = golf;
            backup = _closure1_slot5;
            golf = 8;
            verify = romeo[golf];
            verify = options.bind(tango)(verify);
            foxtrot = verify.TableSwitchRow;
            verify = {};
            output = 'Unlock Orientation';
            verify['label'] = output;
            verify['value'] = sizing;
            verify['onValueChange'] = kilo;
            verify = backup.bind(tango)(foxtrot, verify);
            report[1] = verify;
            verify = _closure1_slot5;
            golf = romeo[golf];
            golf = options.bind(tango)(golf);
            options = golf.TableSwitchRow;
            golf = {};
            romeo = 'Enable Bottom Position';
            golf['label'] = romeo;
            golf['value'] = yankee;
            golf['onValueChange'] = offset;
            golf = verify.bind(tango)(options, golf);
            report[2] = golf;
            options = _closure1_slot5;
            golf = _closure1_slot9;
            oscar = {};
            oscar = options.bind(tango)(golf, oscar);
            report[3] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, mike);
    entity = 0;
    oscar = options[entity];
    mike = argBaz;
    entity = undefined;
    mike = mike.bind(entity)(oscar);
    var _closure1_slot2 = mike;
    yankee = 1;
    oscar = options[yankee];
    mike = argCorge;
    mike = mike.bind(entity)(oscar);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    mike = mike.View;
    var _closure1_slot4 = mike;
    mike = 3;
    oscar = options[mike];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.jsx;
    var _closure1_slot5 = oscar;
    oscar = options[mike];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.Fragment;
    var _closure1_slot6 = oscar;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    mike = mike.jsxs;
    var _closure1_slot7 = mike;
    mike = 4;
    mike = options[mike];
    verify = golf.bind(entity)(mike);
    oscar = verify.createStyles;
    mike = {};
    offset = {'padding': 16, 'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
    mike['container'] = offset;
    offset = {};
    offset['flex'] = yankee;
    mike['flex'] = offset;
    mike = oscar.bind(verify)(mike);
    var _closure1_slot8 = mike;
    mike = function() { // Original name: TooltipNote
        tango = _closure1_slot7;
        oscar = _closure1_slot0;
        options = _closure1_slot1;
        report = 9;
        entity = options[report];
        zulu = undefined;
        entity = oscar.bind(zulu)(entity);
        mike = entity.Text;
        entity = {};
        verify = 'text-sm/normal';
        entity['variant'] = verify;
        verify = {'padding': 16, 'paddingTop': 16};
        entity['style'] = verify;
        golf = _closure1_slot5;
        report = options[report];
        report = oscar.bind(zulu)(report);
        oscar = report.Text;
        report = {'variant': 'text-sm/bold', 'children': ' <LayerScope/>'};
        oscar = golf.bind(zulu)(oscar, report);
        report = ['Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing'];
        report[1] = oscar;
        oscar = ' on the surface you expect to see the tooltip.';
        report[2] = oscar;
        entity['children'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot9 = mike;
    oscar = 12;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/user_settings/native/design_system/UserSettingsDesignSystemTooltip.tsx';
    oscar = golf.bind(options)(oscar);
    report = function() { // Original name: UserSettingsDesignSystemTooltip
        entity = _closure1_slot8;
        tango = undefined;
        report = entity.bind(tango)();
        zulu = _closure1_slot5;
        oscar = _closure1_slot0;
        verify = _closure1_slot1;
        entity = 10;
        entity = verify[entity];
        entity = oscar.bind(tango)(entity);
        mike = entity.SafeAreaPaddingView;
        entity = {};
        report = report.flex;
        entity['style'] = report;
        report = true;
        entity['bottom'] = report;
        golf = _closure1_slot5;
        report = 11;
        report = verify[report];
        report = oscar.bind(tango)(report);
        oscar = report.LayerScope;
        report = {};
        offset = _closure1_slot5;
        verify = _closure1_slot11;
        options = {};
        options = offset.bind(tango)(verify, options);
        report['children'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = report;
    zulu['useCanRotate'] = tango;
    zulu['TooltipNote'] = mike;
    return entity;
})();