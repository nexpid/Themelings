// app/uikit-native/AttachmentPreview.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: AttachmentIcon
        entity = argFoo;
        options = entity.fileName;
        var _closure2_slot0 = options;
        zulu = _closure1_slot8;
        tango = undefined;
        oscar = zulu.bind(tango)();
        golf = _closure1_slot3;
        report = golf.useMemo;
        zulu = new Array(1);
        zulu[0] = options;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 19;
                entity = tango[entity];
                tango = undefined;
                oscar = zulu.bind(tango)(entity);
                report = oscar.classifyFileName;
                entity = _closure2_slot0;
                zulu = null;
                options = zulu != entity;
                entity = '';
                if(!options) { _fun00002_ip = 55; continue _fun00001 }
 51:
                entity = _closure2_slot0;
 55:
                report = report.bind(oscar)(entity);
                entity = _closure1_slot9;
                entity = entity[report];
                if(!(zulu == entity)) { _fun00002_ip = 92; continue _fun00001 }
 72:
                zulu = _closure1_slot1;
                report = _closure1_slot2;
                mike = 16;
                mike = report[mike];
                entity = zulu.bind(tango)(mike);
 92:
                return entity;
            }
        };
        report = report.bind(golf)(mike, zulu);
        zulu = _closure1_slot6;
        mike = _closure1_slot4;
        entity = {};
        oscar = oscar.attachmentFileIcon;
        entity['style'] = oscar;
        entity['source'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: FilenameText
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            romeo = entity.fileName;
            entity = _closure1_slot8;
            tango = undefined;
            verify = entity.bind(tango)();
            zulu = /(?:\.([^.]+))?$/;
            mike = zulu.exec;
            backup = null;
            golf = backup != romeo;
            report = '';
            entity = report;
            if(!golf) { _fun00004_ip = 61; continue _fun00003 }
 58:
            entity = romeo;
 61:
            yankee = mike.bind(zulu)(entity);
            zulu = _closure1_slot7;
            mike = _closure1_slot5;
            entity = {};
            golf = backup != romeo;
            if(!golf) { _fun00004_ip = 87; continue _fun00003 }
 83:
            golf = report !== romeo;
 87:
            if(!golf) { _fun00004_ip = 155; continue _fun00003 }
 90:
            offset = _closure1_slot6;
            options = _closure1_slot0;
            foxtrot = _closure1_slot2;
            report = 20;
            report = foxtrot[report];
            report = options.bind(tango)(report);
            options = report.Text;
            report = {'style': null, 'ellipsizeMode': 'middle', 'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'header-primary'};
            foxtrot = verify.attachmentFileName;
            report['style'] = foxtrot;
            report['children'] = romeo;
            golf = offset.bind(tango)(options, report);
 155:
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot6;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 20;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {'style': null, 'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            verify = verify.attachmentFileName;
            oscar['style'] = verify;
            offset = 1;
            romeo = backup != yankee;
            foxtrot = 'UNKNOWN';
            verify = foxtrot;
            if(!romeo) { _fun00004_ip = 263; continue _fun00003 }
 235:
            romeo = yankee[offset];
            romeo = backup != romeo;
            verify = foxtrot;
            if(!romeo) { _fun00004_ip = 263; continue _fun00003 }
 249:
            yankee = yankee[offset];
            offset = yankee.toUpperCase;
            verify = offset.bind(yankee)();
 263:
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: DefaultAttachmentPreview
        entity = argFoo;
        verify = entity.fileName;
        offset = entity.maxFileWidth;
        options = entity.borderRadius;
        entity = _closure1_slot8;
        tango = undefined;
        report = entity.bind(tango)();
        zulu = _closure1_slot7;
        mike = _closure1_slot5;
        entity = {};
        golf = report.fileInfoAttachmentPreviewFile;
        report = new Array(2);
        report[0] = golf;
        golf = {};
        golf['maxWidth'] = offset;
        golf['borderRadius'] = options;
        report[1] = golf;
        entity['style'] = report;
        options = _closure1_slot6;
        golf = _closure1_slot11;
        report = {};
        report['fileName'] = verify;
        golf = options.bind(tango)(golf, report);
        report = new Array(2);
        report[0] = golf;
        options = _closure1_slot6;
        golf = _closure1_slot12;
        oscar = {};
        oscar['fileName'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot13 = entity;
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
    options = tango.bind(entity)(golf);
    var _closure1_slot3 = options;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Image;
    var _closure1_slot4 = golf;
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    romeo = report.bind(entity)(tango);
    yankee = romeo.createStyles;
    tango = {};
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'overflow': 'hidden', 'borderRadius': null, 'height': 75, 'padding': 12, 'flex': 1};
    golf = 4;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    golf = golf.radii;
    golf = golf.sm;
    offset['borderRadius'] = golf;
    golf = 12;
    tango['fileInfoAttachmentPreviewFile'] = offset;
    offset = 8;
    foxtrot = {'height': 32, 'width': 24, 'marginRight': 8};
    tango['attachmentFileIcon'] = foxtrot;
    foxtrot = {'paddingRight': 4, 'paddingLeft': 4, 'maxWidth': 136};
    tango['attachmentFileName'] = foxtrot;
    foxtrot = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'alignItems': 'center', 'justifyContent': 'center'};
    tango['videoIcon'] = foxtrot;
    tango = yankee.bind(romeo)(tango);
    var _closure1_slot8 = tango;
    tango = {};
    yankee = 5;
    yankee = oscar[yankee];
    yankee = verify.bind(entity)(yankee);
    tango['archive'] = yankee;
    yankee = 6;
    yankee = oscar[yankee];
    yankee = verify.bind(entity)(yankee);
    tango['acrobat'] = yankee;
    yankee = 7;
    yankee = oscar[yankee];
    yankee = verify.bind(entity)(yankee);
    tango['ae'] = yankee;
    offset = oscar[offset];
    offset = verify.bind(entity)(offset);
    tango['ai'] = offset;
    offset = 9;
    offset = oscar[offset];
    offset = verify.bind(entity)(offset);
    tango['audio'] = offset;
    offset = 10;
    offset = oscar[offset];
    offset = verify.bind(entity)(offset);
    tango['code'] = offset;
    offset = 11;
    offset = oscar[offset];
    offset = verify.bind(entity)(offset);
    tango['document'] = offset;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    tango['image'] = golf;
    golf = 13;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    tango['photoshop'] = golf;
    golf = 14;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    tango['sketch'] = golf;
    golf = 15;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    tango['spreadsheet'] = golf;
    golf = 16;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    tango['unknown'] = golf;
    golf = 17;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    tango['video'] = golf;
    golf = 18;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    tango['webcode'] = golf;
    var _closure1_slot9 = tango;
    golf = options.memo;
    tango = function(argFoo) {
        report = argFoo;
        tango = report.uri;
        zulu = report.width;
        mike = report.height;
        entity = report.borderRadius;
        offset = report.style;
        options = {};
        options['uri'] = tango;
        options['width'] = zulu;
        options['height'] = mike;
        yankee = {};
        yankee['width'] = zulu;
        yankee['height'] = mike;
        yankee['borderRadius'] = entity;
        tango = _closure1_slot6;
        zulu = _closure1_slot5;
        mike = {};
        report = new Array(3);
        report[0] = yankee;
        report[1] = offset;
        oscar = {};
        golf = 'hidden';
        oscar['overflow'] = golf;
        report[2] = oscar;
        mike['style'] = report;
        golf = _closure1_slot6;
        oscar = _closure1_slot1;
        report = _closure1_slot2;
        entity = 21;
        report = report[entity];
        entity = undefined;
        oscar = oscar.bind(entity)(report);
        report = {};
        verify = new Array(2);
        verify[0] = yankee;
        verify[1] = offset;
        report['style'] = verify;
        report['source'] = options;
        report['localImageSource'] = options;
        report = golf.bind(entity)(oscar, report);
        mike['children'] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot10 = tango;
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'uikit-native/AttachmentPreview.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: AttachmentPreview
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            offset = mike.uri;
            entity = mike.isImage;
            tango = mike.isVideo;
            verify = mike.width;
            report = undefined;
            if(!(verify === report)) { _fun00006_ip = 35; continue _fun00005 }
 32:
            verify = 75;
 35:
            options = mike.height;
            if(!(options === report)) { _fun00006_ip = 47; continue _fun00005 }
 44:
            options = 75;
 47:
            backup = mike.maxFileWidth;
            kilo = mike.fileName;
            golf = mike.borderRadius;
            if(!(golf === report)) { _fun00006_ip = 102; continue _fun00005 }
 68:
            oscar = _closure1_slot1;
            yankee = _closure1_slot2;
            zulu = 4;
            zulu = yankee[zulu];
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.radii;
            golf = zulu.sm;
 102:
            zulu = mike.showPlayOnVideoPreview;
            if(!(zulu === report)) { _fun00006_ip = 114; continue _fun00005 }
 112:
            zulu = false;
 114:
            yankee = mike.defaultPreview;
            if(!(yankee === report)) { _fun00006_ip = 157; continue _fun00005 }
 124:
            foxtrot = _closure1_slot6;
            romeo = _closure1_slot13;
            oscar = {};
            oscar['fileName'] = kilo;
            oscar['maxFileWidth'] = backup;
            oscar['borderRadius'] = golf;
            yankee = foxtrot.bind(report)(romeo, oscar);
 157:
            oscar = mike.style;
            romeo = _closure1_slot8;
            output = romeo.bind(report)();
            if(entity) { _fun00006_ip = 622; continue _fun00005 }
 179:
            if(!tango) { _fun00006_ip = 217; continue _fun00005 }
 182:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            entity = 22;
            entity = foxtrot[entity];
            romeo = romeo.bind(report)(entity);
            entity = romeo.isAndroid;
            entity = entity.bind(romeo)();
            if(entity) { _fun00006_ip = 423; continue _fun00005 }
 217:
            romeo = _closure1_slot0;
            entity = _closure1_slot2;
            foxtrot = 22;
            entity = entity[foxtrot];
            romeo = romeo.bind(report)(entity);
            entity = romeo.isIOS;
            entity = entity.bind(romeo)();
            if(!entity) { _fun00006_ip = 273; continue _fun00005 }
 250:
            romeo = offset.startsWith;
            entity = 'ph://';
            entity = romeo.bind(offset)(entity);
            if(entity) { _fun00006_ip = 423; continue _fun00005 }
 273:
            entity = yankee;
            if(!tango) { _fun00006_ip = 418; continue _fun00005 }
 282:
            romeo = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[foxtrot];
            romeo = romeo.bind(report)(tango);
            tango = romeo.isIOS;
            tango = tango.bind(romeo)();
            entity = yankee;
            if(!tango) { _fun00006_ip = 418; continue _fun00005 }
 315:
            romeo = _closure1_slot6;
            yankee = _closure1_slot5;
            tango = {};
            tango['style'] = oscar;
            kilo = _closure1_slot6;
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            foxtrot = 24;
            foxtrot = sizing[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            backup = foxtrot.VideoComponent;
            foxtrot = {'style': null, 'source': null, 'muted': true, 'paused': true, 'resizeMode': 'cover'};
            sizing = {};
            sizing['height'] = options;
            sizing['width'] = verify;
            foxtrot['style'] = sizing;
            sizing = {};
            sizing['uri'] = offset;
            foxtrot['source'] = sizing;
            foxtrot = kilo.bind(report)(backup, foxtrot);
            tango['children'] = foxtrot;
            entity = romeo.bind(report)(yankee, tango);
 418:
            _fun00006_ip = 620; continue _fun00005;
 423:
            if(zulu) { _fun00006_ip = 468; continue _fun00005 }
 426:
            yankee = _closure1_slot6;
            tango = _closure1_slot10;
            zulu = {};
            zulu['uri'] = offset;
            zulu['width'] = verify;
            zulu['height'] = options;
            zulu['borderRadius'] = golf;
            zulu['style'] = oscar;
            zulu = yankee.bind(report)(tango, zulu);
            _fun00006_ip = 617; continue _fun00005;
 468:
            romeo = _closure1_slot7;
            yankee = _closure1_slot5;
            tango = {};
            tango['style'] = oscar;
            kilo = _closure1_slot6;
            backup = _closure1_slot10;
            foxtrot = {};
            foxtrot['uri'] = offset;
            foxtrot['width'] = verify;
            foxtrot['height'] = options;
            foxtrot['borderRadius'] = golf;
            foxtrot['style'] = oscar;
            backup = kilo.bind(report)(backup, foxtrot);
            foxtrot = new Array(2);
            foxtrot[0] = backup;
            sizing = _closure1_slot6;
            kilo = _closure1_slot5;
            backup = {};
            output = output.videoIcon;
            backup['style'] = output;
            echo = _closure1_slot6;
            result = _closure1_slot0;
            update = _closure1_slot2;
            output = 23;
            output = update[output];
            output = result.bind(report)(output);
            result = output.CirclePlayIcon;
            output = {'size': 'md', 'color': 'white', 'secondaryColor': 'black'};
            output = echo.bind(report)(result, output);
            backup['children'] = output;
            backup = sizing.bind(report)(kilo, backup);
            foxtrot[1] = backup;
            tango['children'] = foxtrot;
            zulu = romeo.bind(report)(yankee, tango);
 617:
            entity = zulu;
 620:
            _fun00006_ip = 659; continue _fun00005;
 622:
            tango = _closure1_slot6;
            zulu = _closure1_slot10;
            mike = {};
            mike['uri'] = offset;
            mike['width'] = verify;
            mike['height'] = options;
            mike['borderRadius'] = golf;
            mike['style'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 659:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();