// app/uikit-native/HelpMessage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    kilo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = kilo;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: getIcon
        _fun76673: for(var _fun76673_ip = 0; ; ) switch(_fun76673_ip) {
 0:
            mike = argFoo;
            entity = _closure1_slot7;
            entity = entity.WARNING;
            if(!(entity !== mike)) { _fun76673_ip = 291; continue _fun76673 }
 23:
            entity = _closure1_slot7;
            entity = entity.INFO;
            if(!(entity !== mike)) { _fun76673_ip = 218; continue _fun76673 }
 40:
            entity = _closure1_slot7;
            entity = entity.ERROR;
            if(!(entity !== mike)) { _fun76673_ip = 145; continue _fun76673 }
 54:
            entity = _closure1_slot7;
            entity = entity.SUCCESS;
            if(!(entity !== mike)) { _fun76673_ip = 72; continue _fun76673 }
 68:
            entity = undefined;
            return entity;
 72:
            tango = _closure1_slot4;
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 9;
            entity = options[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.CircleCheckIcon;
            entity = {};
            golf = _closure1_slot1;
            oscar = 4;
            oscar = options[oscar];
            oscar = golf.bind(zulu)(oscar);
            oscar = oscar.unsafe_rawColors;
            oscar = oscar.GREEN_400;
            entity['color'] = oscar;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
 145:
            tango = _closure1_slot4;
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 8;
            entity = options[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.CircleXIcon;
            entity = {};
            golf = _closure1_slot1;
            oscar = 4;
            oscar = options[oscar];
            oscar = golf.bind(zulu)(oscar);
            oscar = oscar.unsafe_rawColors;
            oscar = oscar.RED_400;
            entity['color'] = oscar;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
 218:
            tango = _closure1_slot4;
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 7;
            entity = options[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.CircleInformationIcon;
            entity = {};
            golf = _closure1_slot1;
            oscar = 4;
            oscar = options[oscar];
            oscar = golf.bind(zulu)(oscar);
            oscar = oscar.unsafe_rawColors;
            oscar = oscar.BLUE_345;
            entity['color'] = oscar;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
 291:
            tango = _closure1_slot4;
            mike = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 6;
            entity = golf[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.CircleWarningIcon;
            entity = {};
            oscar = _closure1_slot1;
            report = 4;
            report = golf[report];
            report = oscar.bind(zulu)(report);
            report = report.unsafe_rawColors;
            report = report.YELLOW_300;
            entity['color'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: useContainerStyle
        _fun76674: for(var _fun76674_ip = 0; ; ) switch(_fun76674_ip) {
 0:
            zulu = argFoo;
            entity = argBar;
            tango = _closure1_slot7;
            tango = tango.WARNING;
            if(!(tango !== zulu)) { _fun76674_ip = 93; continue _fun76674 }
 23:
            tango = _closure1_slot7;
            tango = tango.INFO;
            if(!(tango !== zulu)) { _fun76674_ip = 85; continue _fun76674 }
 37:
            tango = _closure1_slot7;
            tango = tango.ERROR;
            if(!(tango !== zulu)) { _fun76674_ip = 77; continue _fun76674 }
 51:
            mike = _closure1_slot7;
            mike = mike.SUCCESS;
            if(!(mike !== zulu)) { _fun76674_ip = 69; continue _fun76674 }
 65:
            mike = undefined;
            return mike;
 69:
            mike = entity.successContainer;
            return mike;
 77:
            mike = entity.errorContainer;
            return mike;
 85:
            mike = entity.infoContainer;
            return mike;
 93:
            entity = entity.warningContainer;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    yankee = 0;
    report = golf[yankee];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(report);
    offset = 1;
    mike = golf[offset];
    mike = oscar.bind(entity)(mike);
    mike = mike.View;
    var _closure1_slot3 = mike;
    verify = 2;
    mike = golf[verify];
    mike = oscar.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot4 = mike;
    mike = golf[verify];
    mike = oscar.bind(entity)(mike);
    mike = mike.jsxs;
    var _closure1_slot5 = mike;
    options = 3;
    mike = golf[options];
    romeo = oscar.bind(entity)(mike);
    report = romeo.createStyles;
    mike = {};
    foxtrot = {'display': 'flex', 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'padding': 8, 'borderWidth': 1, 'borderStyle': 'solid'};
    backup = 4;
    sizing = golf[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.xs;
    foxtrot['borderRadius'] = sizing;
    mike['container'] = foxtrot;
    foxtrot = {'flex': 1, 'marginLeft': 8};
    mike['content'] = foxtrot;
    foxtrot = {};
    sizing = 5;
    output = golf[sizing];
    update = oscar.bind(entity)(output);
    result = update.int2rgba;
    output = golf[sizing];
    source = oscar.bind(entity)(output);
    echo = source.hex2int;
    output = golf[backup];
    output = kilo.bind(entity)(output);
    output = output.unsafe_rawColors;
    output = output.YELLOW_300;
    output = echo.bind(source)(output);
    echo = 0.1;
    output = result.bind(update)(output, echo);
    foxtrot['backgroundColor'] = output;
    output = golf[backup];
    output = kilo.bind(entity)(output);
    output = output.unsafe_rawColors;
    output = output.YELLOW_300;
    foxtrot['borderColor'] = output;
    mike['warningContainer'] = foxtrot;
    foxtrot = {};
    output = golf[sizing];
    update = oscar.bind(entity)(output);
    result = update.int2rgba;
    output = golf[sizing];
    control = oscar.bind(entity)(output);
    source = control.hex2int;
    output = golf[backup];
    output = kilo.bind(entity)(output);
    output = output.unsafe_rawColors;
    output = output.BLUE_345;
    output = source.bind(control)(output);
    output = result.bind(update)(output, echo);
    foxtrot['backgroundColor'] = output;
    output = golf[backup];
    output = kilo.bind(entity)(output);
    output = output.unsafe_rawColors;
    output = output.BLUE_345;
    foxtrot['borderColor'] = output;
    mike['infoContainer'] = foxtrot;
    foxtrot = {};
    output = golf[sizing];
    update = oscar.bind(entity)(output);
    result = update.int2rgba;
    output = golf[sizing];
    control = oscar.bind(entity)(output);
    source = control.hex2int;
    output = golf[backup];
    output = kilo.bind(entity)(output);
    output = output.unsafe_rawColors;
    output = output.RED_400;
    output = source.bind(control)(output);
    output = result.bind(update)(output, echo);
    foxtrot['backgroundColor'] = output;
    output = golf[backup];
    output = kilo.bind(entity)(output);
    output = output.unsafe_rawColors;
    output = output.RED_400;
    foxtrot['borderColor'] = output;
    mike['errorContainer'] = foxtrot;
    foxtrot = {};
    output = golf[sizing];
    result = oscar.bind(entity)(output);
    output = result.int2rgba;
    sizing = golf[sizing];
    source = oscar.bind(entity)(sizing);
    update = source.hex2int;
    sizing = golf[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    sizing = sizing.GREEN_400;
    sizing = update.bind(source)(sizing);
    sizing = output.bind(result)(sizing, echo);
    foxtrot['backgroundColor'] = sizing;
    backup = golf[backup];
    backup = kilo.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    backup = backup.GREEN_400;
    foxtrot['borderColor'] = backup;
    mike['successContainer'] = foxtrot;
    mike = report.bind(romeo)(mike);
    var _closure1_slot6 = mike;
    mike = {};
    mike['WARNING'] = yankee;
    report = 'WARNING';
    mike[yankee] = report;
    mike['INFO'] = offset;
    report = 'INFO';
    mike[offset] = report;
    mike['ERROR'] = verify;
    report = 'ERROR';
    mike[verify] = report;
    mike['SUCCESS'] = options;
    report = 'SUCCESS';
    mike[options] = report;
    var _closure1_slot7 = mike;
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'uikit-native/HelpMessage.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: HelpMessage
        _fun76675: for(var _fun76675_ip = 0; ; ) switch(_fun76675_ip) {
 0:
            entity = argFoo;
            verify = entity.children;
            golf = entity.messageType;
            offset = entity.textVariant;
            tango = undefined;
            if(!(offset === tango)) { _fun76675_ip = 30; continue _fun76675 }
 26:
            offset = 'text-sm/medium';
 30:
            yankee = entity.textColor;
            if(!(yankee === tango)) { _fun76675_ip = 46; continue _fun76675 }
 40:
            yankee = 'text-normal';
 46:
            entity = _closure1_slot6;
            romeo = entity.bind(tango)();
            zulu = _closure1_slot5;
            mike = _closure1_slot3;
            entity = {};
            options = romeo.container;
            report = new Array(2);
            report[0] = options;
            options = _closure1_slot9;
            options = options.bind(tango)(golf, romeo);
            report[1] = options;
            entity['style'] = report;
            report = _closure1_slot8;
            golf = report.bind(tango)(golf);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot4;
            golf = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = 10;
            oscar = foxtrot[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {};
            romeo = romeo.content;
            oscar['style'] = romeo;
            oscar['color'] = yankee;
            oscar['variant'] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['HelpMessageTypes'] = mike;
    return entity;
})();