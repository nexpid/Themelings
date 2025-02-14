// app/modules/guild_role_subscriptions/native/components/FormImagePicker.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    kilo = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = kilo;
    var _closure1_slot2 = options;
    entity = function() { // Original name: pickImage
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _pickImage
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun127010: for(var _fun127010_ip = 0; ; ) switch(_fun127010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun127010_ip = 82; continue _fun127010 }
 7:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 6;
                    mike = zulu[mike];
                    zulu = undefined;
                    report = tango.bind(zulu)(mike);
                    tango = report.openImagePicker;
                    mike = argFoo;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=50);
 48:
                    return mike;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun127010_ip = 79; continue _fun127010 }
 56:
                    tango = null;
                    if(!(tango != mike)) { _fun127010_ip = 76; continue _fun127010 }
 62:
                    report = {};
                    report['uri'] = mike;
                    tango = argBar;
                    tango = tango.bind(zulu)(report);
 76:
                    return zulu;
 79:
                    return mike;
 82:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    mike = function(argFoo) { // Original name: ImagePickerIcon
        _fun127011: for(var _fun127011_ip = 0; ; ) switch(_fun127011_ip) {
 0:
            mike = argFoo;
            echo = mike.style;
            options = mike.image;
            var _closure2_slot0 = options;
            entity = mike.imageUploadSize;
            var _closure2_slot1 = entity;
            entity = mike.setImage;
            var _closure2_slot2 = entity;
            output = mike.previewResizeMode;
            zulu = mike.previewShape;
            yankee = mike.standalone;
            entity = mike.size;
            var _closure2_slot3 = entity;
            golf = mike.disabled;
            tango = undefined;
            if(!(golf === tango)) { _fun127011_ip = 80; continue _fun127011 }
 78:
            golf = false;
 80:
            mike = _closure1_slot8;
            romeo = mike.bind(tango)();
            foxtrot = 'center';
            if(!(foxtrot !== output)) { _fun127011_ip = 107; continue _fun127011 }
 99:
            update = romeo.image;
            _fun127011_ip = 113; continue _fun127011;
 107:
            update = romeo.imageCentered;
 113:
            mike = _closure1_slot9;
            mike = mike.CIRCLE;
            if(!(zulu !== mike)) { _fun127011_ip = 135; continue _fun127011 }
 127:
            result = romeo.imageSquircle;
            _fun127011_ip = 141; continue _fun127011;
 135:
            result = romeo.imageCircle;
 141:
            oscar = _closure1_slot4;
            zulu = oscar.useMemo;
            mike = new Array(2);
            mike[0] = options;
            mike[1] = entity;
            entity = function() {
                _fun127012: for(var _fun127012_ip = 0; ; ) switch(_fun127012_ip) {
 0:
                    entity = _closure2_slot0;
                    zulu = null;
                    tango = zulu == entity;
                    verify = undefined;
                    entity = undefined;
                    if(tango) { _fun127012_ip = 29; continue _fun127012 }
 20:
                    tango = _closure2_slot0;
                    entity = tango.uri;
 29:
                    if(!(zulu == entity)) { _fun127012_ip = 35; continue _fun127012 }
 33:
                    return verify;
 35:
                    entity = _closure2_slot0;
                    report = entity.uri;
                    tango = report.startsWith;
                    entity = 'data:';
                    entity = tango.bind(report)(entity);
                    if(entity) { _fun127012_ip = 178; continue _fun127012 }
 64:
                    entity = _closure2_slot3;
                    if(!(zulu != entity)) { _fun127012_ip = 178; continue _fun127012 }
 72:
                    zulu = _closure2_slot0;
                    tango = zulu.uri;
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 7;
                    report = offset[entity];
                    oscar = options.bind(verify)(report);
                    report = oscar.getBestMediaProxySize;
                    golf = _closure2_slot3;
                    entity = offset[entity];
                    options = options.bind(verify)(entity);
                    entity = options.getDevicePixelRatio;
                    entity = entity.bind(options)();
                    entity = golf * entity;
                    oscar = report.bind(oscar)(entity);
                    entity = global;
                    entity = entity.HermesInternal;
                    report = entity.concat;
                    entity = '?size=';
                    entity = report.bind(entity)(oscar);
                    entity = tango + entity;
                    zulu['uri'] = entity;
                    _fun127012_ip = 187; continue _fun127012;
 178:
                    mike = _closure2_slot0;
                    entity = mike.uri;
 187:
                    return entity;
                }
            };
            sizing = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot7;
            mike = _closure1_slot1;
            source = _closure1_slot2;
            entity = 8;
            entity = source[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            oscar = 'button';
            entity['accessibilityRole'] = oscar;
            kilo = _closure1_slot0;
            oscar = 9;
            verify = source[oscar];
            verify = kilo.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            oscar = source[oscar];
            oscar = kilo.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.HNo5cH;
            oscar = verify.bind(offset)(oscar);
            entity['accessibilityLabel'] = oscar;
            oscar = {};
            oscar['disabled'] = golf;
            entity['accessibilityState'] = oscar;
            report = function() { // Original name: onPress
                tango = _closure1_slot10;
                zulu = _closure2_slot1;
                mike = _closure2_slot2;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            entity['onPress'] = report;
            oscar = romeo.image;
            report = new Array(5);
            report[0] = oscar;
            report[1] = result;
            oscar = romeo.imageContainerEmpty;
            report[2] = oscar;
            oscar = golf;
            if(!oscar) { _fun127011_ip = 325; continue _fun127011 }
 320:
            oscar = romeo.disabled;
 325:
            report[3] = oscar;
            report[4] = echo;
            entity['style'] = report;
            entity['disabled'] = golf;
            offset = _closure1_slot6;
            oscar = _closure1_slot1;
            verify = _closure1_slot2;
            report = 10;
            report = verify[report];
            verify = oscar.bind(tango)(report);
            oscar = null;
            if(!(oscar == options)) { _fun127011_ip = 404; continue _fun127011 }
 371:
            report = {};
            report['resizeMode'] = foxtrot;
            kilo = _closure1_slot1;
            source = _closure1_slot2;
            foxtrot = 11;
            foxtrot = source[foxtrot];
            foxtrot = kilo.bind(tango)(foxtrot);
            report['source'] = foxtrot;
            _fun127011_ip = 458; continue _fun127011;
 404:
            foxtrot = {};
            kilo = new Array(3);
            kilo[0] = update;
            kilo[1] = echo;
            kilo[2] = result;
            foxtrot['style'] = kilo;
            result = oscar != output;
            kilo = 'cover';
            if(!result) { _fun127011_ip = 440; continue _fun127011 }
 437:
            kilo = output;
 440:
            foxtrot['resizeMode'] = kilo;
            kilo = {};
            kilo['uri'] = sizing;
            foxtrot['source'] = kilo;
            report = foxtrot;
 458:
            verify = offset.bind(tango)(verify, report);
            report = new Array(2);
            report[0] = verify;
            oscar = oscar != options;
            if(!oscar) { _fun127011_ip = 482; continue _fun127011 }
 479:
            oscar = !golf;
 482:
            if(!oscar) { _fun127011_ip = 626; continue _fun127011 }
 488:
            verify = _closure1_slot6;
            options = _closure1_slot5;
            golf = {};
            foxtrot = romeo.editImageIcon;
            offset = new Array(2);
            offset[0] = foxtrot;
            if(!yankee) { _fun127011_ip = 521; continue _fun127011 }
 515:
            yankee = romeo.standaloneIcon;
 521:
            offset[1] = yankee;
            golf['style'] = offset;
            romeo = _closure1_slot6;
            output = _closure1_slot1;
            kilo = _closure1_slot2;
            foxtrot = 12;
            offset = kilo[foxtrot];
            yankee = output.bind(tango)(offset);
            offset = {};
            sizing = '#292b30';
            offset['color'] = sizing;
            sizing = 13;
            sizing = kilo[sizing];
            sizing = output.bind(tango)(sizing);
            offset['source'] = sizing;
            backup = _closure1_slot0;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.IconSizes;
            foxtrot = foxtrot.SMALL;
            offset['size'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 626:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = mike;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, tango);
    yankee = 0;
    tango = options[yankee];
    entity = undefined;
    tango = kilo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    offset = 1;
    oscar = options[offset];
    tango = argCorge;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    oscar = options[tango];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.jsx;
    var _closure1_slot6 = oscar;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = options[tango];
    romeo = golf.bind(entity)(tango);
    verify = romeo.createStyles;
    tango = {};
    oscar = 16;
    foxtrot = {'flexDirection': 'row', 'justifyContent': 'space-between', 'marginHorizontal': 16};
    tango['imageSelectionRow'] = foxtrot;
    foxtrot = {'flex': 1, 'flexDirection': 'column', 'marginEnd': 16};
    tango['buttonColumn'] = foxtrot;
    foxtrot = {'flexWrap': 'wrap', 'marginBottom': 16};
    tango['imageDescription'] = foxtrot;
    foxtrot = {'alignSelf': 'center', 'width': 84, 'height': 84};
    tango['image'] = foxtrot;
    foxtrot = {'alignSelf': 'center', 'width': 20, 'height': 20};
    tango['imageCentered'] = foxtrot;
    foxtrot = {};
    backup = 42;
    foxtrot['borderRadius'] = backup;
    tango['imageCircle'] = foxtrot;
    foxtrot = {};
    backup = 5;
    sizing = options[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.sm;
    foxtrot['borderRadius'] = sizing;
    tango['imageSquircle'] = foxtrot;
    foxtrot = {};
    sizing = options[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BACKGROUND_TERTIARY;
    foxtrot['backgroundColor'] = sizing;
    tango['imageContainerEmpty'] = foxtrot;
    foxtrot = {'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'top': 0, 'height': 24, 'justifyContent': 'center', 'right': 0, 'padding': 4, 'position': 'absolute', 'width': 24};
    sizing = options[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.INTERACTIVE_NORMAL;
    foxtrot['backgroundColor'] = sizing;
    backup = options[backup];
    backup = kilo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    foxtrot['borderRadius'] = backup;
    tango['editImageIcon'] = foxtrot;
    foxtrot = {'top': 4294967292, 'right': 4294967292};
    tango['standaloneIcon'] = foxtrot;
    foxtrot = {};
    backup = 0.3;
    foxtrot['opacity'] = backup;
    tango['disabled'] = foxtrot;
    tango = verify.bind(romeo)(tango);
    var _closure1_slot8 = tango;
    tango = {};
    tango['CIRCLE'] = yankee;
    verify = 'CIRCLE';
    tango[yankee] = verify;
    tango['SQUIRCLE'] = offset;
    verify = 'SQUIRCLE';
    tango[offset] = verify;
    var _closure1_slot9 = tango;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_role_subscriptions/native/components/FormImagePicker.tsx';
    oscar = golf.bind(options)(oscar);
    report = function(argFoo) { // Original name: FormImagePicker
        _fun127014: for(var _fun127014_ip = 0; ; ) switch(_fun127014_ip) {
 0:
            tango = argFoo;
            output = tango.description;
            romeo = tango.imageUploadSize;
            var _closure2_slot0 = romeo;
            yankee = tango.image;
            offset = tango.setImage;
            var _closure2_slot1 = offset;
            foxtrot = tango.disabled;
            zulu = {'description': 0, 'imageUploadSize': 0, 'image': 0, 'setImage': 0, 'disabled': 0};
            entity = null;
            config = zulu;
            sequence = null;
            mike = silentSetPrototypeOf(config, sequence);
            config = {};
            sequence = tango;
            vacuum = zulu;
            verify = copyDataProperties(config, sequence, vacuum);
            mike = _closure1_slot8;
            tango = undefined;
            result = mike.bind(tango)();
            if(!(entity != yankee)) { _fun127014_ip = 152; continue _fun127014 }
 95:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 9;
            mike = golf[entity];
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = golf[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.0KOidn;
            control = mike.bind(zulu)(entity);
            _fun127014_ip = 207; continue _fun127014;
 152:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 9;
            mike = golf[entity];
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = golf[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.bGPfSk;
            control = mike.bind(zulu)(entity);
 207:
            zulu = _closure1_slot7;
            mike = _closure1_slot5;
            entity = {};
            report = result.imageSelectionRow;
            entity['style'] = report;
            options = _closure1_slot7;
            golf = _closure1_slot5;
            report = {};
            backup = result.buttonColumn;
            report['style'] = backup;
            sizing = _closure1_slot6;
            kilo = _closure1_slot0;
            update = _closure1_slot2;
            backup = 14;
            backup = update[backup];
            backup = kilo.bind(tango)(backup);
            kilo = backup.Text;
            backup = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            result = result.imageDescription;
            backup['style'] = result;
            backup['children'] = output;
            kilo = sizing.bind(tango)(kilo, backup);
            backup = new Array(2);
            backup[0] = kilo;
            output = _closure1_slot6;
            echo = _closure1_slot1;
            result = 15;
            kilo = update[result];
            sizing = echo.bind(tango)(kilo);
            kilo = {};
            kilo['text'] = control;
            control = update[result];
            control = echo.bind(tango)(control);
            control = control.Colors;
            control = control.GREY;
            kilo['color'] = control;
            control = update[result];
            control = echo.bind(tango)(control);
            control = control.Looks;
            control = control.FILLED;
            kilo['look'] = control;
            source = function() { // Original name: onPress
                tango = _closure1_slot10;
                zulu = _closure2_slot0;
                mike = _closure2_slot1;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            kilo['onPress'] = source;
            result = update[result];
            result = echo.bind(tango)(result);
            result = result.Sizes;
            result = result.MEDIUM;
            kilo['size'] = result;
            kilo['disabled'] = foxtrot;
            kilo = output.bind(tango)(sizing, kilo);
            backup[1] = kilo;
            report['children'] = backup;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot6;
            golf = _closure1_slot12;
            oscar = {};
            config = oscar;
            sequence = verify;
            verify = copyDataProperties(config, sequence);
            verify = 'disabled';
            oscar[verify] = foxtrot;
            verify = 'imageUploadSize';
            oscar[verify] = romeo;
            verify = 'image';
            oscar[verify] = yankee;
            verify = 'setImage';
            oscar[verify] = offset;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = report;
    zulu['PreviewShape'] = tango;
    zulu['ImagePickerIcon'] = mike;
    return entity;
})();