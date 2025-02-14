// app/modules/saved_messages/native/ForLaterCardReminderHeader.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
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
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot4 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderTopLeftRadius': null, 'borderTopRightRadius': null, 'overflow': 'hidden', 'gap': 8, 'marginHorizontal': 4294967280, 'marginTop': 4294967280, 'paddingHorizontal': 16, 'paddingVertical': 12};
    offset = 3;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_MOBILE_PRIMARY;
    verify['backgroundColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.lg;
    verify['borderTopLeftRadius'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.lg;
    verify['borderTopRightRadius'] = romeo;
    tango['container'] = verify;
    verify = {'width': 24, 'height': 24, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    verify['borderRadius'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.CARD_PRIMARY_BG;
    verify['backgroundColor'] = offset;
    tango['icon'] = verify;
    verify = {'marginVertical': 4294967292, 'marginLeft': 'auto'};
    tango['actionsContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/saved_messages/native/ForLaterCardReminderHeader.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ForLaterCardReminderHeader
        _fun89087: for(var _fun89087_ip = 0; ; ) switch(_fun89087_ip) {
 0:
            entity = argFoo;
            mike = entity.savedMessage;
            options = entity.throttledNow;
            verify = entity.actions;
            entity = _closure1_slot6;
            report = undefined;
            offset = entity.bind(report)();
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            romeo = 4;
            entity = entity[romeo];
            oscar = zulu.bind(report)(entity);
            tango = oscar.useDueInString;
            zulu = {};
            entity = null;
            foxtrot = entity == mike;
            yankee = undefined;
            if(foxtrot) { _fun89087_ip = 85; continue _fun89087 }
 73:
            foxtrot = mike.saveData;
            yankee = foxtrot.dueAt;
 85:
            zulu['dueAt'] = yankee;
            zulu['now'] = options;
            yankee = _closure1_slot0;
            options = _closure1_slot2;
            options = options[romeo];
            options = yankee.bind(report)(options);
            options = options.DueInStringTypes;
            options = options.SHORT;
            zulu['type'] = options;
            zulu = tango.bind(oscar)(zulu);
            romeo = zulu.dueInText;
            zulu = zulu.isOverdue;
            mike = mike.saveData;
            mike = mike.dueAt;
            if(!(entity != mike)) { _fun89087_ip = 401; continue _fun89087 }
 163:
            foxtrot = 'header-primary';
            if(!zulu) { _fun89087_ip = 178; continue _fun89087 }
 172:
            foxtrot = 'text-danger';
 178:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 3;
            mike = oscar[mike];
            mike = tango.bind(report)(mike);
            mike = mike.colors;
            if(zulu) { _fun89087_ip = 214; continue _fun89087 }
 206:
            sizing = mike.INTERACTIVE_NORMAL;
            _fun89087_ip = 220; continue _fun89087;
 214:
            sizing = mike.TEXT_DANGER;
 220:
            tango = _closure1_slot5;
            zulu = _closure1_slot3;
            mike = {};
            oscar = offset.container;
            mike['style'] = oscar;
            options = _closure1_slot4;
            oscar = {};
            yankee = offset.icon;
            oscar['style'] = yankee;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            golf = 5;
            golf = backup[golf];
            golf = yankee.bind(report)(golf);
            kilo = golf.ClockIcon;
            golf = {};
            output = 'xxs';
            golf['size'] = output;
            golf['color'] = sizing;
            golf = options.bind(report)(kilo, golf);
            oscar['children'] = golf;
            golf = options.bind(report)(zulu, oscar);
            oscar = new Array(3);
            oscar[0] = golf;
            golf = 6;
            golf = backup[golf];
            golf = yankee.bind(report)(golf);
            yankee = golf.Text;
            golf = {};
            backup = 'text-md/semibold';
            golf['variant'] = backup;
            golf['color'] = foxtrot;
            golf['children'] = romeo;
            golf = options.bind(report)(yankee, golf);
            oscar[1] = golf;
            golf = {};
            offset = offset.actionsContainer;
            golf['style'] = offset;
            golf['children'] = verify;
            golf = options.bind(report)(zulu, golf);
            oscar[2] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 401:
            return entity;
        }
    };
    zulu['ForLaterCardReminderHeader'] = mike;
    return entity;
})();