// app/uikit-native/refresh/form/FormTitle.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun63727: for(var _fun63727_ip = 0; ; ) switch(_fun63727_ip) {
 0:
        golf = argBar;
        foxtrot = argBaz;
        zulu = argFred;
        options = argPlugh;
        var _closure1_slot0 = golf;
        var _closure1_slot1 = options;
        entity = global;
        oscar = entity.Object;
        tango = oscar.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = tango.bind(oscar)(zulu, entity, mike);
        entity = 0;
        tango = options[entity];
        mike = argCorge;
        entity = undefined;
        mike = mike.bind(entity)(tango);
        mike = 1;
        mike = options[mike];
        mike = golf.bind(entity)(mike);
        tango = mike.View;
        var _closure1_slot2 = tango;
        mike = mike.Platform;
        mike = 2;
        mike = options[mike];
        mike = golf.bind(entity)(mike);
        romeo = mike.Fonts;
        mike = 3;
        tango = options[mike];
        tango = golf.bind(entity)(tango);
        tango = tango.jsx;
        var _closure1_slot3 = tango;
        mike = options[mike];
        mike = golf.bind(entity)(mike);
        mike = mike.jsxs;
        var _closure1_slot4 = mike;
        mike = 4;
        tango = options[mike];
        oscar = golf.bind(entity)(tango);
        tango = oscar.isAndroid;
        oscar = tango.bind(oscar)();
        tango = 58;
        if(!oscar) { _fun63727_ip = 184; continue _fun63727 }
 181:
        tango = 48;
 184:
        mike = options[mike];
        oscar = golf.bind(entity)(mike);
        mike = oscar.isAndroid;
        oscar = mike.bind(oscar)();
        mike = 48;
        if(!oscar) { _fun63727_ip = 211; continue _fun63727 }
 208:
        mike = 56;
 211:
        oscar = 5;
        oscar = options[oscar];
        offset = golf.bind(entity)(oscar);
        verify = offset.createStyles;
        oscar = {};
        backup = 16;
        yankee = {'flexDirection': 'row', 'justifyContent': 'space-between', 'paddingTop': 16, 'paddingBottom': 16};
        oscar['titleWrapper'] = yankee;
        yankee = {};
        yankee['paddingHorizontal'] = backup;
        oscar['horizontalPadding'] = yankee;
        yankee = {};
        backup = 26;
        yankee['paddingTop'] = backup;
        oscar['thinTitle'] = yankee;
        yankee = {};
        romeo = romeo.PRIMARY_SEMIBOLD;
        yankee['fontFamily'] = romeo;
        romeo = 13;
        yankee['fontSize'] = romeo;
        romeo = 6;
        backup = options[romeo];
        backup = foxtrot.bind(entity)(backup);
        backup = backup.colors;
        backup = backup.HEADER_SECONDARY;
        yankee['color'] = backup;
        oscar['titleText'] = yankee;
        yankee = {};
        romeo = options[romeo];
        romeo = foxtrot.bind(entity)(romeo);
        romeo = romeo.unsafe_rawColors;
        romeo = romeo.RED_400;
        yankee['color'] = romeo;
        oscar['error'] = yankee;
        oscar = verify.bind(offset)(oscar);
        var _closure1_slot5 = oscar;
        oscar = 8;
        oscar = options[oscar];
        options = golf.bind(entity)(oscar);
        golf = options.fileFinishedImporting;
        oscar = 'uikit-native/refresh/form/FormTitle.tsx';
        oscar = golf.bind(options)(oscar);
        report = function(argFoo) { // Original name: FormTitle
            _fun63728: for(var _fun63728_ip = 0; ; ) switch(_fun63728_ip) {
 0:
                entity = argFoo;
                yankee = entity.title;
                oscar = entity.icon;
                verify = entity.numberOfLines;
                offset = entity.uppercaseTitle;
                tango = undefined;
                if(!(offset === tango)) { _fun63728_ip = 33; continue _fun63728 }
 31:
                offset = true;
 33:
                sizing = entity.thinTitle;
                if(!(sizing === tango)) { _fun63728_ip = 45; continue _fun63728 }
 43:
                sizing = false;
 45:
                foxtrot = entity.error;
                if(!(foxtrot === tango)) { _fun63728_ip = 56; continue _fun63728 }
 54:
                foxtrot = false;
 56:
                romeo = entity.inset;
                if(!(romeo === tango)) { _fun63728_ip = 68; continue _fun63728 }
 66:
                romeo = false;
 68:
                options = entity.viewStyle;
                kilo = entity.textStyle;
                entity = _closure1_slot5;
                backup = entity.bind(tango)();
                zulu = _closure1_slot4;
                mike = _closure1_slot2;
                entity = {};
                output = backup.titleWrapper;
                golf = new Array(4);
                golf[0] = output;
                if(!sizing) { _fun63728_ip = 124; continue _fun63728 }
 118:
                sizing = backup.thinTitle;
 124:
                golf[1] = sizing;
                romeo = !romeo;
                if(!romeo) { _fun63728_ip = 140; continue _fun63728 }
 134:
                romeo = backup.horizontalPadding;
 140:
                golf[2] = romeo;
                golf[3] = options;
                entity['style'] = golf;
                options = _closure1_slot3;
                golf = _closure1_slot0;
                romeo = _closure1_slot1;
                report = 7;
                report = romeo[report];
                report = golf.bind(tango)(report);
                golf = report.LegacyText;
                report = {};
                sizing = backup.titleText;
                romeo = new Array(3);
                romeo[0] = sizing;
                romeo[1] = kilo;
                if(!foxtrot) { _fun63728_ip = 210; continue _fun63728 }
 205:
                foxtrot = backup.error;
 210:
                romeo[2] = foxtrot;
                report['style'] = romeo;
                report['numberOfLines'] = verify;
                verify = 'header';
                report['accessibilityRole'] = verify;
                verify = yankee;
                if(!offset) { _fun63728_ip = 247; continue _fun63728 }
 237:
                offset = yankee.toUpperCase;
                verify = offset.bind(yankee)();
 247:
                report['children'] = verify;
                golf = options.bind(tango)(golf, report);
                report = new Array(2);
                report[0] = golf;
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        zulu['default'] = report;
        zulu['FORM_TITLE_HEIGHT'] = tango;
        zulu['THIN_FORM_TITLE_HEIGHT'] = mike;
        return entity;
    }
})();