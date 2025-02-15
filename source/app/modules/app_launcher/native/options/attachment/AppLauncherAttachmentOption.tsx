// app/modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: AttachmentPreviewAppLauncher
        entity = argFoo;
        romeo = entity.uri;
        yankee = entity.isImage;
        offset = entity.isVideo;
        entity = _closure1_slot8;
        tango = undefined;
        oscar = entity.bind(tango)();
        entity = oscar.selectedImage;
        verify = entity.width;
        golf = entity.height;
        zulu = _closure1_slot7;
        mike = _closure1_slot1;
        options = _closure1_slot2;
        entity = 7;
        entity = options[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        entity['uri'] = romeo;
        entity['isImage'] = yankee;
        entity['isVideo'] = offset;
        entity['width'] = verify;
        entity['height'] = golf;
        oscar = oscar.selectedImage;
        entity['style'] = oscar;
        golf = _closure1_slot7;
        oscar = _closure1_slot0;
        report = 8;
        report = options[report];
        report = oscar.bind(tango)(report);
        oscar = report.FileIcon;
        report = {};
        options = 'sm';
        report['size'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['defaultPreview'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DraftType;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 6;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.INTERACTIVE_NORMAL;
    verify['tintColor'] = romeo;
    tango['imageIcon'] = verify;
    verify = {'justifyContent': 'center', 'alignItems': 'center', 'backgroundColor': null, 'width': 32, 'height': 32};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_MOD_SUBTLE;
    verify['backgroundColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.lg;
    verify['borderRadius'] = romeo;
    tango['imageIconWrapper'] = verify;
    verify = {'width': 32, 'height': 32};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.sm;
    verify['borderRadius'] = offset;
    tango['selectedImage'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: AppLauncherAttachmentOption
        _fun119212: for(var _fun119212_ip = 0; ; ) switch(_fun119212_ip) {
 0:
            zulu = argFoo;
            verify = zulu.option;
            var _closure2_slot0 = verify;
            mike = zulu.channel;
            var _closure2_slot1 = mike;
            foxtrot = zulu.style;
            report = zulu.autoFocus;
            offset = zulu.hasError;
            oscar = zulu.onPress;
            zulu = zulu.onSelectAttachment;
            var _closure2_slot2 = zulu;
            golf = _closure1_slot8;
            tango = undefined;
            romeo = golf.bind(tango)();
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            golf = 9;
            golf = backup[golf];
            kilo = yankee.bind(tango)(golf);
            backup = kilo.useStateFromStores;
            golf = _closure1_slot6;
            yankee = new Array(1);
            yankee[0] = golf;
            golf = function() {
                report = _closure1_slot6;
                tango = report.getUpload;
                zulu = _closure2_slot1;
                zulu = zulu.id;
                mike = _closure2_slot0;
                mike = mike.name;
                entity = _closure1_slot5;
                entity = entity.ApplicationLauncherCommand;
                entity = tango.bind(report)(zulu, mike, entity);
                return entity;
            };
            yankee = backup.bind(kilo)(yankee, golf);
            var _closure2_slot3 = yankee;
            backup = _closure1_slot3;
            kilo = backup.useEffect;
            mike = mike.id;
            golf = new Array(2);
            golf[0] = mike;
            mike = verify.name;
            golf[1] = mike;
            mike = function() {
                entity = function() {
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 10;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.remove;
                    zulu = _closure2_slot1;
                    zulu = zulu.id;
                    mike = _closure2_slot0;
                    mike = mike.name;
                    entity = _closure1_slot5;
                    entity = entity.ApplicationLauncherCommand;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                };
                return entity;
            };
            mike = kilo.bind(backup)(mike, golf);
            mike = backup.useRef;
            mike = mike.bind(backup)(zulu);
            var _closure2_slot4 = mike;
            zulu = backup.useEffect;
            mike = function() {
                mike = _closure2_slot4;
                entity = _closure2_slot2;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(backup)(mike);
            zulu = backup.useEffect;
            golf = null;
            mike = golf == yankee;
            kilo = undefined;
            if(mike) { _fun119212_ip = 220; continue _fun119212 }
 214:
            kilo = yankee.filename;
 220:
            mike = new Array(1);
            mike[0] = kilo;
            entity = function() {
                _fun119217: for(var _fun119217_ip = 0; ; ) switch(_fun119217_ip) {
 0:
                    entity = _closure2_slot3;
                    tango = null;
                    report = tango == entity;
                    entity = undefined;
                    zulu = undefined;
                    if(report) { _fun119217_ip = 30; continue _fun119217 }
 20:
                    report = _closure2_slot3;
                    zulu = report.filename;
 30:
                    if(!(tango != zulu)) { _fun119217_ip = 71; continue _fun119217 }
 34:
                    zulu = _closure2_slot4;
                    zulu = zulu.current;
                    if(!(tango != zulu)) { _fun119217_ip = 71; continue _fun119217 }
 47:
                    tango = _closure2_slot4;
                    zulu = tango.current;
                    mike = _closure2_slot3;
                    mike = mike.filename;
                    mike = zulu.bind(tango)(mike);
 71:
                    return entity;
                }
            };
            entity = zulu.bind(backup)(entity, mike);
            zulu = _closure1_slot7;
            mike = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 11;
            entity = backup[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['style'] = foxtrot;
            entity['hasError'] = offset;
            entity['option'] = verify;
            verify = golf != yankee;
            entity['selected'] = verify;
            offset = golf != yankee;
            verify = undefined;
            if(!offset) { _fun119212_ip = 305; continue _fun119212 }
 299:
            verify = yankee.filename;
 305:
            entity['selectedItemName'] = verify;
            if(!(golf != yankee)) { _fun119212_ip = 361; continue _fun119212 }
 314:
            golf = yankee.item;
            verify = golf.platform;
            offset = _closure1_slot0;
            foxtrot = _closure1_slot2;
            golf = 12;
            golf = foxtrot[golf];
            golf = offset.bind(tango)(golf);
            golf = golf.UploadPlatform;
            golf = golf.REACT_NATIVE;
            if(!(verify !== golf)) { _fun119212_ip = 443; continue _fun119212 }
 361:
            offset = _closure1_slot7;
            verify = _closure1_slot4;
            golf = {};
            romeo = romeo.imageIconWrapper;
            golf['style'] = romeo;
            backup = _closure1_slot7;
            foxtrot = _closure1_slot0;
            kilo = _closure1_slot2;
            romeo = 13;
            romeo = kilo[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            foxtrot = romeo.ImageFileIcon;
            romeo = {'size': 'sm', 'color': 'interactive-normal'};
            romeo = backup.bind(tango)(foxtrot, romeo);
            golf['children'] = romeo;
            golf = offset.bind(tango)(verify, golf);
            _fun119212_ip = 497; continue _fun119212;
 443:
            offset = _closure1_slot7;
            verify = _closure1_slot9;
            options = {};
            romeo = yankee.item;
            romeo = romeo.uri;
            options['uri'] = romeo;
            romeo = yankee.isImage;
            options['isImage'] = romeo;
            yankee = yankee.isVideo;
            options['isVideo'] = yankee;
            golf = offset.bind(tango)(verify, options);
 497:
            entity['leading'] = golf;
            entity['onPress'] = oscar;
            entity['autoFocus'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();