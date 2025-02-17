// app/modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: EligibilityChecklistRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscar = entity.isLast;
            update = entity.item;
            entity = _closure1_slot7;
            tango = undefined;
            yankee = entity.bind(tango)();
            zulu = _closure1_slot5;
            mike = _closure1_slot6;
            entity = {};
            options = _closure1_slot3;
            report = {};
            offset = yankee.row;
            verify = new Array(2);
            verify[0] = offset;
            offset = update.checked;
            if(!offset) { _fun00002_ip = 72; continue _fun00001 }
 66:
            offset = yankee.eligibleRow;
 72:
            verify[1] = offset;
            report['style'] = verify;
            romeo = _closure1_slot4;
            offset = _closure1_slot1;
            foxtrot = _closure1_slot2;
            verify = 5;
            verify = foxtrot[verify];
            offset = offset.bind(tango)(verify);
            verify = {};
            foxtrot = yankee.rowStatusIcon;
            verify['style'] = foxtrot;
            foxtrot = update.checked;
            kilo = _closure1_slot1;
            sizing = _closure1_slot2;
            if(foxtrot) { _fun00002_ip = 147; continue _fun00001 }
 133:
            foxtrot = 7;
            foxtrot = sizing[foxtrot];
            foxtrot = kilo.bind(tango)(foxtrot);
            _fun00002_ip = 159; continue _fun00001;
 147:
            backup = 6;
            backup = sizing[backup];
            foxtrot = kilo.bind(tango)(backup);
 159:
            verify['source'] = foxtrot;
            offset = romeo.bind(tango)(offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            foxtrot = _closure1_slot5;
            romeo = _closure1_slot3;
            offset = {};
            backup = yankee.rowTextColumn;
            offset['style'] = backup;
            sizing = _closure1_slot4;
            kilo = _closure1_slot0;
            backup = _closure1_slot2;
            result = 8;
            backup = backup[result];
            backup = kilo.bind(tango)(backup);
            kilo = backup.Text;
            backup = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            output = yankee.rowLabel;
            backup['style'] = output;
            output = update.checked;
            if(output) { _fun00002_ip = 265; continue _fun00001 }
 257:
            output = update.uncheckedLabel;
            _fun00002_ip = 271; continue _fun00001;
 265:
            output = update.checkedLabel;
 271:
            backup['children'] = output;
            kilo = sizing.bind(tango)(kilo, backup);
            backup = new Array(3);
            backup[0] = kilo;
            output = _closure1_slot4;
            sizing = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[result];
            kilo = sizing.bind(tango)(kilo);
            sizing = kilo.Text;
            kilo = {'variant': 'text-sm/normal', 'color': 'interactive-normal'};
            result = update.description;
            kilo['children'] = result;
            kilo = output.bind(tango)(sizing, kilo);
            backup[1] = kilo;
            kilo = update.actionHandler;
            output = null;
            kilo = output != kilo;
            if(!kilo) { _fun00002_ip = 373; continue _fun00001 }
 363:
            sizing = update.actionLabel;
            kilo = output != sizing;
 373:
            if(!kilo) { _fun00002_ip = 507; continue _fun00001 }
 379:
            result = _closure1_slot4;
            vacuum = _closure1_slot1;
            source = _closure1_slot2;
            echo = 9;
            sizing = source[echo];
            output = vacuum.bind(tango)(sizing);
            sizing = {};
            control = yankee.actionButton;
            sizing['style'] = control;
            control = source[echo];
            control = vacuum.bind(tango)(control);
            control = control.Colors;
            control = control.PRIMARY;
            sizing['color'] = control;
            control = update.actionLabel;
            sizing['text'] = control;
            update = update.actionHandler;
            sizing['onPress'] = update;
            update = _closure1_slot0;
            echo = source[echo];
            echo = update.bind(tango)(echo);
            echo = echo.ButtonLooks;
            echo = echo.OUTLINED;
            sizing['look'] = echo;
            echo = yankee.actionButtonText;
            sizing['textStyle'] = echo;
            kilo = result.bind(tango)(output, sizing);
 507:
            backup[2] = kilo;
            offset['children'] = backup;
            offset = foxtrot.bind(tango)(romeo, offset);
            verify[1] = offset;
            report['children'] = verify;
            options = zulu.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            verify = _closure1_slot4;
            options = _closure1_slot1;
            offset = _closure1_slot2;
            if(oscar) { _fun00002_ip = 590; continue _fun00001 }
 558:
            oscar = 11;
            oscar = offset[oscar];
            golf = options.bind(tango)(oscar);
            oscar = {};
            yankee = yankee.divider;
            oscar['style'] = yankee;
            oscar = verify.bind(tango)(golf, oscar);
            _fun00002_ip = 617; continue _fun00001;
 590:
            golf = 10;
            golf = offset[golf];
            options = options.bind(tango)(golf);
            golf = {};
            offset = 16;
            golf['size'] = offset;
            oscar = verify.bind(tango)(options, golf);
 617:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot4 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot5 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    golf = {};
    yankee = 24;
    tango = {'paddingHorizontal': 24, 'paddingTop': 16, 'flex': 0, 'flexDirection': 'row'};
    golf['row'] = tango;
    tango = {};
    offset = 0.8;
    tango['opacity'] = offset;
    golf['eligibleRow'] = tango;
    tango = {'height': 20, 'width': 20, 'marginRight': 16};
    golf['rowStatusIcon'] = tango;
    tango = {'flex': 1, 'flexDirection': 'column'};
    golf['rowTextColumn'] = tango;
    tango = {};
    romeo = 4;
    tango['marginBottom'] = romeo;
    golf['rowLabel'] = tango;
    offset = {};
    tango = 12;
    offset['marginTop'] = tango;
    backup = oscar[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xl;
    offset['borderRadius'] = backup;
    backup = oscar[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.INTERACTIVE_ACTIVE;
    offset['borderColor'] = backup;
    golf['actionButton'] = offset;
    offset = {};
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.HEADER_PRIMARY;
    offset['color'] = romeo;
    golf['actionButtonText'] = offset;
    offset = {};
    offset['marginHorizontal'] = yankee;
    golf['divider'] = offset;
    golf = options.bind(verify)(golf);
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: EligibilityChecklist
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            zulu = mike.items;
            var _closure2_slot0 = zulu;
            report = mike.style;
            tango = zulu.length;
            mike = 0;
            if(!(mike !== tango)) { _fun00004_ip = 79; continue _fun00003 }
 31:
            mike = zulu.map;
            entity = function(argFoo, argBar) {
                entity = argFoo;
                report = _closure1_slot4;
                tango = _closure1_slot8;
                zulu = {};
                zulu['item'] = entity;
                mike = _closure2_slot0;
                oscar = mike.length;
                mike = 1;
                oscar = oscar - mike;
                mike = argBar;
                mike = mike === oscar;
                zulu['isLast'] = mike;
                mike = entity.checkedLabel;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            tango = _closure1_slot4;
            zulu = _closure1_slot3;
            mike = {};
            mike['style'] = report;
            mike['children'] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
 79:
            entity = null;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();