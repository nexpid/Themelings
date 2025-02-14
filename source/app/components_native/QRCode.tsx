// app/components_native/QRCode.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = verify;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun95168: for(var _fun95168_ip = 0; ; ) switch(_fun95168_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot8;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot7;
            entity = _closure1_slot20;
            entity = entity.bind(zulu)();
            if(entity) { _fun95168_ip = 51; continue _fun95168 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun95168_ip = 92; continue _fun95168;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun95168_ip = 71; continue _fun95168 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot8;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun95169: for(var _fun95169_ip = 0; ; ) switch(_fun95169_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun95169_ip = 76; continue _fun95169;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot20 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = ['style', 'text', 'blur'];
    var _closure1_slot3 = entity;
    tango = global;
    golf = tango.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = foxtrot.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 1;
    report = verify[report];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = verify[report];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 3;
    report = verify[report];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = verify[report];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = verify[report];
    report = foxtrot.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    oscar = verify[report];
    report = argCorge;
    offset = report.bind(entity)(oscar);
    report = 7;
    report = verify[report];
    report = options.bind(entity)(report);
    oscar = report.View;
    var _closure1_slot10 = oscar;
    oscar = report.Image;
    var _closure1_slot11 = oscar;
    report = report.StyleSheet;
    var _closure1_slot12 = report;
    report = 8;
    oscar = verify[report];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.jsx;
    var _closure1_slot13 = oscar;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot14 = report;
    report = 9;
    report = verify[report];
    golf = options.bind(entity)(report);
    oscar = golf.createLegacyClassComponentStyles;
    report = {};
    yankee = {'display': 'flex', 'alignSelf': 'flex-start'};
    romeo = 10;
    backup = verify[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_8;
    yankee['padding'] = backup;
    romeo = verify[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.xs;
    yankee['borderRadius'] = romeo;
    report['qrCode'] = yankee;
    yankee = {'display': 'flex', 'alignSelf': 'flex-start', 'alignItems': 'center', 'justifyContent': 'center', 'position': 'relative'};
    report['qrCodeContainer'] = yankee;
    yankee = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    report['qrCodeOverlay'] = yankee;
    yankee = {'width': 40, 'height': 40};
    report['size-40'] = yankee;
    yankee = {'width': 60, 'height': 60};
    report['size-60'] = yankee;
    report = oscar.bind(golf)(report);
    var _closure1_slot15 = report;
    report = {};
    oscar = 'SIZE_40';
    report['SIZE_40'] = oscar;
    oscar = 'SIZE_60';
    report['SIZE_60'] = oscar;
    var _closure1_slot16 = report;
    golf = tango.Object;
    oscar = golf.freeze;
    tango = {};
    romeo = report.SIZE_40;
    yankee = 'size-40';
    tango[romeo] = yankee;
    romeo = report.SIZE_60;
    yankee = 'size-60';
    tango[romeo] = yankee;
    tango = oscar.bind(golf)(tango);
    var _closure1_slot17 = tango;
    golf = offset.PureComponent;
    oscar = function(argFoo) {
        tango = function() { // Original name: QRCode
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot5;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot19;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot9;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot6;
        report = {};
        oscar = 'render';
        report['key'] = oscar;
        entity = function() { // Original name: value
            _fun95174: for(var _fun95174_ip = 0; ; ) switch(_fun95174_ip) {
 0:
                entity = this;
                zulu = _closure1_slot15;
                mike = entity.context;
                tango = undefined;
                report = zulu.bind(tango)(mike);
                zulu = entity.props;
                oscar = zulu.style;
                yankee = zulu.text;
                verify = zulu.blur;
                mike = _closure1_slot4;
                entity = _closure1_slot3;
                offset = mike.bind(tango)(zulu, entity);
                zulu = _closure1_slot13;
                mike = _closure1_slot10;
                entity = {};
                golf = report.qrCode;
                report = new Array(3);
                report[0] = golf;
                golf = {};
                options = offset.bgColor;
                golf['backgroundColor'] = options;
                report[1] = golf;
                report[2] = oscar;
                entity['style'] = report;
                oscar = _closure1_slot14;
                report = {};
                golf = {};
                options = 'relative';
                golf['position'] = options;
                options = offset.size;
                golf['width'] = options;
                options = offset.size;
                golf['height'] = options;
                report['style'] = golf;
                options = _closure1_slot1;
                foxtrot = _closure1_slot2;
                golf = 11;
                golf = foxtrot[golf];
                options = options.bind(tango)(golf);
                golf = {};
                golf['value'] = yankee;
                yankee = 'M';
                golf['level'] = yankee;
                kilo = golf;
                backup = offset;
                offset = copyDataProperties(kilo, backup);
                options = zulu.bind(tango)(options, golf);
                golf = new Array(2);
                golf[0] = options;
                options = null;
                if(!verify) { _fun95174_ip = 262; continue _fun95174 }
 207:
                yankee = _closure1_slot13;
                offset = _closure1_slot1;
                foxtrot = _closure1_slot2;
                verify = 12;
                verify = foxtrot[verify];
                offset = offset.bind(tango)(verify);
                verify = {};
                romeo = _closure1_slot12;
                romeo = romeo.absoluteFill;
                verify['style'] = romeo;
                romeo = 'dark';
                verify['blurTheme'] = romeo;
                options = yankee.bind(tango)(offset, verify);
 262:
                golf[1] = options;
                report['children'] = golf;
                report = oscar.bind(tango)(mike, report);
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    oscar = oscar.bind(entity)(golf);
    var _closure1_slot18 = oscar;
    golf = 13;
    yankee = verify[golf];
    yankee = options.bind(entity)(yankee);
    yankee = yankee.ThemeContext;
    oscar['contextType'] = yankee;
    yankee = {'size': 128, 'bgColor': '#ffffff', 'fgColor': '#000000'};
    oscar['defaultProps'] = yankee;
    offset = offset.PureComponent;
    mike = function(argFoo) {
        tango = function() { // Original name: QRCodeWithOverlay
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot5;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot19;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot9;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot6;
        report = {};
        oscar = 'render';
        report['key'] = oscar;
        entity = function() { // Original name: value
            _fun95177: for(var _fun95177_ip = 0; ; ) switch(_fun95177_ip) {
 0:
                yankee = this;
                mike = _closure1_slot15;
                entity = yankee.context;
                tango = undefined;
                backup = mike.bind(tango)(entity);
                entity = yankee.props;
                mike = entity.overlaySize;
                golf = entity.blur;
                entity = _closure1_slot17;
                oscar = null;
                if(!(oscar == mike)) { _fun95177_ip = 59; continue _fun95177 }
 49:
                zulu = _closure1_slot16;
                mike = zulu.SIZE_40;
 59:
                foxtrot = entity[mike];
                zulu = _closure1_slot14;
                mike = _closure1_slot10;
                entity = {};
                report = backup.qrCodeContainer;
                entity['style'] = report;
                verify = _closure1_slot13;
                options = _closure1_slot18;
                report = {};
                sizing = yankee.props;
                output = report;
                yankee = copyDataProperties(output, sizing);
                romeo = false;
                yankee = 'blur';
                report[yankee] = romeo;
                options = verify.bind(tango)(options, report);
                report = new Array(3);
                report[0] = options;
                options = {};
                romeo = backup.qrCodeOverlay;
                yankee = new Array(2);
                yankee[0] = romeo;
                romeo = _closure1_slot12;
                romeo = romeo.absoluteFill;
                yankee[1] = romeo;
                options['style'] = yankee;
                romeo = _closure1_slot11;
                yankee = {};
                foxtrot = backup[foxtrot];
                yankee['style'] = foxtrot;
                backup = _closure1_slot0;
                kilo = _closure1_slot2;
                foxtrot = 14;
                foxtrot = kilo[foxtrot];
                foxtrot = backup.bind(tango)(foxtrot);
                yankee['source'] = foxtrot;
                yankee = verify.bind(tango)(romeo, yankee);
                options['children'] = yankee;
                options = verify.bind(tango)(mike, options);
                report[1] = options;
                oscar = null;
                if(!golf) { _fun95177_ip = 273; continue _fun95177 }
 227:
                verify = _closure1_slot13;
                options = _closure1_slot1;
                yankee = _closure1_slot2;
                golf = 15;
                golf = yankee[golf];
                options = options.bind(tango)(golf);
                golf = {};
                offset = _closure1_slot12;
                offset = offset.absoluteFill;
                golf['style'] = offset;
                oscar = verify.bind(tango)(options, golf);
 273:
                report[2] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(offset);
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.ThemeContext;
    mike['contextType'] = golf;
    golf = {'size': 144, 'bgColor': '#ffffff', 'fgColor': '#000000'};
    mike['defaultProps'] = golf;
    golf = 16;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'components_native/QRCode.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['QRCodeOverlaySizes'] = report;
    zulu['QR_CODE_OVERLAY_SIZE_MAP'] = tango;
    zulu['QRCodeWithOverlay'] = mike;
    return entity;
})();