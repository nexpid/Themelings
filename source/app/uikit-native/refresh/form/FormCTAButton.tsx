// app/uikit-native/refresh/form/FormCTAButton.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    sizing = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar) { // Original name: getCTAButtonColor
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = argBar;
            tango = _closure1_slot10;
            tango = tango.BRAND;
            if(!(tango !== zulu)) { _fun00002_ip = 71; continue _fun00001 }
 23:
            tango = _closure1_slot10;
            tango = tango.DANGER;
            if(!(tango !== zulu)) { _fun00002_ip = 63; continue _fun00001 }
 37:
            mike = _closure1_slot10;
            mike = mike.WARNING;
            if(!(mike !== zulu)) { _fun00002_ip = 55; continue _fun00001 }
 51:
            mike = undefined;
            return mike;
 55:
            mike = entity.textWarning;
            return mike;
 63:
            mike = entity.textDanger;
            return mike;
 71:
            entity = entity.textBrand;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    tango = function(argFoo) { // Original name: FormCTAButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = entity.color;
            tango = undefined;
            if(!(tango === report)) { _fun00004_ip = 27; continue _fun00003 }
 14:
            mike = _closure1_slot10;
            report = mike.BRAND;
 27:
            foxtrot = entity.label;
            mike = entity.fontSize;
            output = 16;
            if(!(tango !== mike)) { _fun00004_ip = 48; continue _fun00003 }
 45:
            output = mike;
 48:
            mike = entity.alignLeft;
            kilo = tango !== mike;
            if(!kilo) { _fun00004_ip = 64; continue _fun00003 }
 61:
            kilo = mike;
 64:
            mike = entity.disabled;
            offset = tango !== mike;
            if(!offset) { _fun00004_ip = 79; continue _fun00003 }
 76:
            offset = mike;
 79:
            mike = entity.loading;
            yankee = tango !== mike;
            if(!yankee) { _fun00004_ip = 95; continue _fun00003 }
 92:
            yankee = mike;
 95:
            verify = entity.testID;
            options = entity.style;
            romeo = entity.onPress;
            entity = _closure1_slot9;
            golf = entity.bind(tango)();
            zulu = _closure1_slot8;
            mike = _closure1_slot0;
            backup = _closure1_slot1;
            entity = 8;
            entity = backup[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.LegacyText;
            entity = {};
            sizing = golf.text;
            backup = new Array(4);
            backup[0] = sizing;
            sizing = _closure1_slot11;
            sizing = sizing.bind(tango)(report, golf);
            backup[1] = sizing;
            sizing = {};
            sizing['fontSize'] = output;
            backup[2] = sizing;
            if(!kilo) { _fun00004_ip = 201; continue _fun00003 }
 195:
            kilo = golf.alignLeft;
 201:
            backup[3] = kilo;
            entity['style'] = backup;
            entity['children'] = foxtrot;
            foxtrot = zulu.bind(tango)(mike, entity);
            if(!yankee) { _fun00004_ip = 242; continue _fun00003 }
 222:
            zulu = _closure1_slot8;
            mike = _closure1_slot3;
            entity = {};
            entity['color'] = report;
            foxtrot = zulu.bind(tango)(mike, entity);
 242:
            zulu = _closure1_slot2;
            mike = zulu.useContext;
            report = _closure1_slot0;
            backup = _closure1_slot1;
            entity = 9;
            entity = backup[entity];
            entity = report.bind(tango)(entity);
            entity = entity.RedesignCompatContext;
            entity = mike.bind(zulu)(entity);
            zulu = _closure1_slot8;
            mike = _closure1_slot5;
            report = {};
            if(entity) { _fun00004_ip = 423; continue _fun00003 }
 299:
            backup = golf.sectionBody;
            entity = new Array(3);
            entity[0] = backup;
            backup = offset;
            if(!offset) { _fun00004_ip = 324; continue _fun00003 }
 319:
            backup = golf.disabled;
 324:
            entity[1] = backup;
            entity[2] = options;
            report['style'] = entity;
            backup = _closure1_slot8;
            options = _closure1_slot4;
            entity = {};
            entity['testID'] = verify;
            kilo = 'button';
            entity['accessibilityRole'] = kilo;
            entity['onPress'] = romeo;
            kilo = golf.button;
            entity['style'] = kilo;
            kilo = offset;
            if(offset) { _fun00004_ip = 382; continue _fun00003 }
 379:
            kilo = yankee;
 382:
            entity['disabled'] = kilo;
            sizing = _closure1_slot7;
            kilo = _closure1_slot6;
            kilo = sizing.bind(tango)(kilo);
            entity['android_ripple'] = kilo;
            entity['children'] = foxtrot;
            entity = backup.bind(tango)(options, entity);
            report['children'] = entity;
            entity = report;
            _fun00004_ip = 508; continue _fun00003;
 423:
            golf = golf.rowButton;
            report['style'] = golf;
            options = _closure1_slot8;
            golf = _closure1_slot0;
            backup = _closure1_slot1;
            oscar = 10;
            oscar = backup[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.RowButton;
            oscar = {};
            oscar['label'] = foxtrot;
            oscar['onPress'] = romeo;
            romeo = false;
            oscar['arrow'] = romeo;
            if(offset) { _fun00004_ip = 486; continue _fun00003 }
 483:
            offset = yankee;
 486:
            oscar['disabled'] = offset;
            oscar['testID'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report['children'] = oscar;
            entity = report;
 508:
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    options = golf[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(options);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    options = mike.ActivityIndicator;
    var _closure1_slot3 = options;
    options = mike.Pressable;
    var _closure1_slot4 = options;
    options = mike.Platform;
    options = mike.StyleSheet;
    mike = mike.View;
    var _closure1_slot5 = mike;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    options = mike.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot6 = options;
    mike = mike.getThemedRippleConfig;
    var _closure1_slot7 = mike;
    mike = 3;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    foxtrot = mike.Fonts;
    mike = 4;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot8 = mike;
    mike = 5;
    mike = golf[mike];
    verify = oscar.bind(entity)(mike);
    options = verify.createStyles;
    mike = {};
    offset = {};
    kilo = 16;
    offset['paddingHorizontal'] = kilo;
    mike['rowButton'] = offset;
    offset = {};
    mike['sectionBody'] = offset;
    offset = {'minHeight': 44, 'justifyContent': 'center'};
    mike['button'] = offset;
    yankee = 'left';
    offset = {'lineHeight': 44, 'paddingHorizontal': 17, 'textAlign': 'left'};
    mike['text'] = offset;
    offset = {};
    backup = 6;
    romeo = golf[backup];
    echo = sizing.bind(entity)(romeo);
    result = foxtrot.PRIMARY_SEMIBOLD;
    romeo = 7;
    output = golf[romeo];
    output = sizing.bind(entity)(output);
    output = output.colors;
    output = output.CONTROL_BRAND_FOREGROUND;
    source = echo.bind(entity)(result, output, kilo);
    control = offset;
    output = copyDataProperties(control, source);
    mike['textBrand'] = offset;
    offset = {};
    output = golf[backup];
    echo = sizing.bind(entity)(output);
    result = foxtrot.PRIMARY_SEMIBOLD;
    output = golf[romeo];
    output = sizing.bind(entity)(output);
    output = output.colors;
    output = output.TEXT_DANGER;
    source = echo.bind(entity)(result, output, kilo);
    control = offset;
    output = copyDataProperties(control, source);
    mike['textDanger'] = offset;
    offset = {};
    backup = golf[backup];
    backup = sizing.bind(entity)(backup);
    foxtrot = foxtrot.PRIMARY_SEMIBOLD;
    romeo = golf[romeo];
    romeo = sizing.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.STATUS_WARNING;
    source = backup.bind(entity)(foxtrot, romeo, kilo);
    control = offset;
    romeo = copyDataProperties(control, source);
    mike['textWarning'] = offset;
    offset = {};
    offset['textAlign'] = yankee;
    mike['alignLeft'] = offset;
    offset = {};
    yankee = 0.5;
    offset['opacity'] = yankee;
    mike['disabled'] = offset;
    mike = options.bind(verify)(mike);
    var _closure1_slot9 = mike;
    mike = {};
    options = 'brand';
    mike['BRAND'] = options;
    options = 'danger';
    mike['DANGER'] = options;
    options = 'warning';
    mike['WARNING'] = options;
    var _closure1_slot10 = mike;
    tango['Colors'] = mike;
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'uikit-native/refresh/form/FormCTAButton.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['FormCTAButtonColors'] = mike;
    return entity;
})();