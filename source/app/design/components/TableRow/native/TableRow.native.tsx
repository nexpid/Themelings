// app/design/components/TableRow/native/TableRow.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: TableRow
        _fun48623: for(var _fun48623_ip = 0; ; ) switch(_fun48623_ip) {
 0:
            zulu = argFoo;
            control = zulu.label;
            source = zulu.subLabel;
            yankee = zulu.icon;
            update = zulu.trailing;
            echo = zulu.arrow;
            verify = zulu.onPress;
            result = zulu.disabled;
            report = undefined;
            if(!(result === report)) { _fun48623_ip = 49; continue _fun48623 }
 47:
            result = false;
 49:
            sequence = zulu.start;
            tango = zulu.end;
            output = zulu.labelLineClamp;
            sizing = zulu.subLabelLineClamp;
            kilo = zulu.variant;
            if(!(kilo === report)) { _fun48623_ip = 84; continue _fun48623 }
 80:
            kilo = 'default';
 84:
            backup = zulu.draggable;
            foxtrot = zulu.dragHandlePressableProps;
            mike = {'label': 0, 'subLabel': 0, 'icon': 0, 'trailing': 0, 'arrow': 0, 'onPress': 0, 'disabled': 0, 'start': 0, 'end': 0, 'labelLineClamp': 0, 'subLabelLineClamp': 0, 'variant': 0, 'draggable': 0, 'dragHandlePressableProps': 0};
            offset = null;
            context = mike;
            record = null;
            entity = silentSetPrototypeOf(context, record);
            context = {};
            record = zulu;
            config = mike;
            options = copyDataProperties(context, record, config);
            zulu = _closure1_slot2;
            mike = zulu.useContext;
            oscar = _closure1_slot0;
            romeo = _closure1_slot1;
            entity = 5;
            entity = romeo[entity];
            entity = oscar.bind(report)(entity);
            entity = entity.TableRowGroupContext;
            zulu = mike.bind(zulu)(entity);
            mike = !zulu;
            if(!mike) { _fun48623_ip = 189; continue _fun48623 }
 183:
            entity = true;
            mike = entity === tango;
 189:
            oscar = _closure1_slot7;
            tango = _closure1_slot0;
            romeo = _closure1_slot1;
            entity = 6;
            entity = romeo[entity];
            entity = tango.bind(report)(entity);
            tango = entity.Card;
            entity = {'shadow': 'none', 'border': 'none'};
            romeo = !zulu;
            if(!romeo) { _fun48623_ip = 241; continue _fun48623 }
 235:
            vacuum = true;
            romeo = vacuum === sequence;
 241:
            entity['start'] = romeo;
            entity['end'] = mike;
            entity['onPress'] = verify;
            entity['disabled'] = result;
            verify = _closure1_slot10;
            entity['style'] = verify;
            context = entity;
            record = options;
            options = copyDataProperties(context, record);
            romeo = _closure1_slot7;
            verify = _closure1_slot12;
            options = {};
            options['label'] = control;
            options['subLabel'] = source;
            options['icon'] = yankee;
            options['trailing'] = update;
            options['arrow'] = echo;
            options['disabled'] = result;
            options['labelLineClamp'] = output;
            options['subLabelLineClamp'] = sizing;
            options['variant'] = kilo;
            options['draggable'] = backup;
            options['dragHandlePressableProps'] = foxtrot;
            verify = romeo.bind(report)(verify, options);
            options = 'children';
            entity[options] = verify;
            options = oscar.bind(report)(tango, entity);
            entity = options;
            if(zulu) { _fun48623_ip = 448; continue _fun48623 }
 363:
            entity = options;
            if(mike) { _fun48623_ip = 448; continue _fun48623 }
 369:
            tango = _closure1_slot9;
            zulu = _closure1_slot8;
            mike = {};
            oscar = new Array(2);
            oscar[0] = options;
            verify = _closure1_slot7;
            options = _closure1_slot0;
            romeo = _closure1_slot1;
            golf = 7;
            golf = romeo[golf];
            golf = options.bind(report)(golf);
            options = golf.TableRowDivider;
            golf = {};
            offset = offset != yankee;
            golf['adjustSpacingForIcon'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 448:
            return entity;
        }
    };
    mike = function(argFoo) { // Original name: TableRowInner
        _fun48624: for(var _fun48624_ip = 0; ; ) switch(_fun48624_ip) {
 0:
            entity = argFoo;
            control = entity.label;
            vacuum = entity.labelLineClamp;
            sequence = entity.subLabel;
            config = entity.subLabelLineClamp;
            sizing = entity.icon;
            romeo = entity.trailing;
            oscar = entity.arrow;
            yankee = entity.disabled;
            papa = entity.variant;
            tango = undefined;
            if(!(papa === tango)) { _fun48624_ip = 63; continue _fun48624 }
 59:
            papa = 'default';
 63:
            options = entity.draggable;
            if(!(options === tango)) { _fun48624_ip = 75; continue _fun48624 }
 73:
            options = false;
 75:
            kilo = entity.dragHandlePressableProps;
            mike = _closure1_slot2;
            entity = mike.isValidElement;
            entity = entity.bind(mike)(romeo);
            offset = undefined;
            if(!entity) { _fun48624_ip = 144; continue _fun48624 }
 104:
            mike = romeo.type;
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 10;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.TableRowTrailingText;
            offset = undefined;
            if(!(mike === entity)) { _fun48624_ip = 144; continue _fun48624 }
 141:
            offset = romeo;
 144:
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 11;
            entity = report[entity];
            mike = zulu.bind(tango)(entity);
            entity = mike.useFontScale;
            mike = entity.bind(mike)();
            entity = 12;
            entity = report[entity];
            zulu = zulu.bind(tango)(entity);
            entity = zulu.isAndroid;
            entity = entity.bind(zulu)();
            if(entity) { _fun48624_ip = 214; continue _fun48624 }
 198:
            entity = 1.5;
            report = mike > entity;
            _fun48624_ip = 228; continue _fun48624;
 214:
            entity = 1.2;
            report = mike > entity;
 228:
            zulu = _closure1_slot11;
            verify = null;
            mike = verify != offset;
            entity = true;
            entity = entity === yankee;
            foxtrot = zulu.bind(tango)(entity, mike, report);
            zulu = _closure1_slot9;
            mike = _closure1_slot4;
            entity = {};
            report = foxtrot.row;
            entity['style'] = report;
            if(!options) { _fun48624_ip = 365; continue _fun48624 }
 274:
            backup = _closure1_slot7;
            yankee = _closure1_slot3;
            report = {};
            sierra = report;
            status = kilo;
            kilo = copyDataProperties(sierra, status);
            result = _closure1_slot7;
            output = _closure1_slot0;
            echo = _closure1_slot1;
            kilo = 13;
            kilo = echo[kilo];
            kilo = output.bind(tango)(kilo);
            output = kilo.DragIcon;
            kilo = {};
            echo = 'xs';
            kilo['size'] = echo;
            echo = foxtrot.dragHandle;
            kilo['style'] = echo;
            output = result.bind(tango)(output, kilo);
            kilo = 'children';
            report[kilo] = output;
            options = backup.bind(tango)(yankee, report);
 365:
            report = new Array(5);
            report[0] = options;
            options = verify != sizing;
            if(!options) { _fun48624_ip = 410; continue _fun48624 }
 380:
            kilo = _closure1_slot7;
            backup = _closure1_slot4;
            yankee = {};
            output = foxtrot.iconContainer;
            yankee['style'] = output;
            yankee['children'] = sizing;
            options = kilo.bind(tango)(backup, yankee);
 410:
            report[1] = options;
            backup = _closure1_slot9;
            yankee = _closure1_slot4;
            options = {};
            kilo = foxtrot.content;
            options['style'] = kilo;
            output = _closure1_slot9;
            sizing = _closure1_slot4;
            kilo = {};
            result = foxtrot.labels;
            kilo['style'] = result;
            echo = _closure1_slot2;
            result = echo.isValidElement;
            result = result.bind(echo)(control);
            echo = control;
            if(result) { _fun48624_ip = 552; continue _fun48624 }
 474:
            source = _closure1_slot7;
            update = _closure1_slot0;
            record = _closure1_slot1;
            result = 14;
            result = record[result];
            result = update.bind(tango)(result);
            update = result.Text;
            result = {};
            record = 'text-md/semibold';
            result['variant'] = record;
            record = 'header-primary';
            context = 'danger';
            if(!(context === papa)) { _fun48624_ip = 533; continue _fun48624 }
 527:
            record = 'text-danger';
 533:
            result['color'] = record;
            result['lineClamp'] = vacuum;
            result['children'] = control;
            echo = source.bind(tango)(update, result);
 552:
            result = new Array(2);
            result[0] = echo;
            echo = verify != sequence;
            if(!echo) { _fun48624_ip = 669; continue _fun48624 }
 567:
            source = _closure1_slot2;
            update = source.isValidElement;
            source = update.bind(source)(sequence);
            update = sequence;
            if(source) { _fun48624_ip = 666; continue _fun48624 }
 588:
            vacuum = _closure1_slot7;
            control = _closure1_slot0;
            record = _closure1_slot1;
            source = 14;
            source = record[source];
            source = control.bind(tango)(source);
            control = source.Text;
            source = {};
            record = 'text-xs/medium';
            source['variant'] = record;
            record = 'text-secondary';
            context = 'danger';
            if(!(context === papa)) { _fun48624_ip = 647; continue _fun48624 }
 641:
            record = 'text-danger';
 647:
            source['color'] = record;
            source['lineClamp'] = config;
            source['children'] = sequence;
            update = vacuum.bind(tango)(control, source);
 666:
            echo = update;
 669:
            result[1] = echo;
            kilo['children'] = result;
            sizing = output.bind(tango)(sizing, kilo);
            kilo = new Array(2);
            kilo[0] = sizing;
            sizing = verify != offset;
            if(!sizing) { _fun48624_ip = 746; continue _fun48624 }
 698:
            echo = _closure1_slot7;
            result = _closure1_slot4;
            output = {};
            source = foxtrot.trailing;
            update = new Array(2);
            update[0] = source;
            source = foxtrot.trailingText;
            update[1] = source;
            output['style'] = update;
            output['children'] = offset;
            sizing = echo.bind(tango)(result, output);
 746:
            kilo[1] = sizing;
            options['children'] = kilo;
            options = backup.bind(tango)(yankee, options);
            report[2] = options;
            options = verify != romeo;
            if(!options) { _fun48624_ip = 775; continue _fun48624 }
 771:
            options = verify == offset;
 775:
            if(!options) { _fun48624_ip = 808; continue _fun48624 }
 778:
            yankee = _closure1_slot7;
            offset = _closure1_slot4;
            verify = {};
            foxtrot = foxtrot.trailing;
            verify['style'] = foxtrot;
            verify['children'] = romeo;
            options = yankee.bind(tango)(offset, verify);
 808:
            report[3] = options;
            if(!oscar) { _fun48624_ip = 853; continue _fun48624 }
 815:
            verify = _closure1_slot7;
            options = _closure1_slot0;
            offset = _closure1_slot1;
            golf = 9;
            golf = offset[golf];
            golf = options.bind(tango)(golf);
            options = golf.TableRowArrow;
            golf = {};
            oscar = verify.bind(tango)(options, golf);
 853:
            report[4] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    verify = 0;
    offset = golf[verify];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(offset);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    offset = report.Pressable;
    var _closure1_slot3 = offset;
    report = report.View;
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    offset = report.TABLE_ROW_HEIGHT;
    var _closure1_slot5 = offset;
    report = report.TABLE_ROW_PADDING;
    var _closure1_slot6 = report;
    report = 3;
    offset = golf[report];
    offset = oscar.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot7 = offset;
    offset = golf[report];
    offset = oscar.bind(entity)(offset);
    offset = offset.Fragment;
    var _closure1_slot8 = offset;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot9 = report;
    report = {};
    report['padding'] = verify;
    var _closure1_slot10 = report;
    report = 4;
    report = golf[report];
    offset = oscar.bind(entity)(report);
    verify = offset.createStyles;
    report = function(argFoo, argBar, argBaz) {
        _fun48625: for(var _fun48625_ip = 0; ; ) switch(_fun48625_ip) {
 0:
            options = argBar;
            tango = argBaz;
            entity = {};
            mike = {};
            report = _closure1_slot6;
            mike['padding'] = report;
            report = _closure1_slot5;
            mike['minHeight'] = report;
            golf = 'row';
            mike['flexDirection'] = golf;
            oscar = 'center';
            mike['alignItems'] = oscar;
            report = 1;
            offset = argFoo;
            verify = report;
            if(!offset) { _fun48625_ip = 68; continue _fun48625 }
 58:
            verify = 0.5;
 68:
            mike['opacity'] = verify;
            entity['row'] = mike;
            mike = {};
            zulu = _closure1_slot6;
            mike['marginEnd'] = zulu;
            entity['iconContainer'] = mike;
            mike = {};
            zulu = 18;
            mike['marginStart'] = zulu;
            entity['trailing'] = mike;
            mike = {'flexShrink': 1, 'flexGrow': 1, 'flexDirection': null, 'alignItems': null, 'justifyContent': 'space-between'};
            if(!tango) { _fun48625_ip = 129; continue _fun48625 }
 125:
            golf = 'column';
 129:
            mike['flexDirection'] = golf;
            if(!tango) { _fun48625_ip = 142; continue _fun48625 }
 138:
            oscar = 'stretch';
 142:
            mike['alignItems'] = oscar;
            entity['content'] = mike;
            mike = {};
            mike['flexGrow'] = report;
            oscar = report;
            if(!options) { _fun48625_ip = 173; continue _fun48625 }
 165:
            oscar = report;
            if(tango) { _fun48625_ip = 173; continue _fun48625 }
 171:
            oscar = undefined;
 173:
            mike['flexShrink'] = oscar;
            oscar = undefined;
            if(!options) { _fun48625_ip = 194; continue _fun48625 }
 183:
            oscar = undefined;
            if(tango) { _fun48625_ip = 194; continue _fun48625 }
 188:
            oscar = '70%';
 194:
            mike['maxWidth'] = oscar;
            entity['labels'] = mike;
            mike = {};
            mike['flexShrink'] = report;
            if(!tango) { _fun48625_ip = 216; continue _fun48625 }
 214:
            zulu = 0;
 216:
            mike['marginStart'] = zulu;
            entity['trailingText'] = mike;
            mike = {};
            zulu = 8;
            mike['marginEnd'] = zulu;
            entity['dragHandle'] = mike;
            return entity;
        }
    };
    report = verify.bind(offset)(report);
    var _closure1_slot11 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.TableRowIcon;
    tango['Icon'] = report;
    report = 9;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.TableRowArrow;
    tango['Arrow'] = report;
    report = 10;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.TableRowTrailingText;
    tango['TrailingText'] = report;
    report = 15;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/TableRow/native/TableRow.native.tsx';
    report = oscar.bind(golf)(report);
    zulu['TableRow'] = tango;
    zulu['TableRowInner'] = mike;
    return entity;
})();