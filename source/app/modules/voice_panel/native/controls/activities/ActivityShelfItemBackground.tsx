// app/modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Image;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = function(argFoo) {
        entity = {};
        mike = {'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': 'black'};
        entity['previewImage'] = mike;
        mike = {};
        zulu = '100%';
        mike['width'] = zulu;
        zulu = argFoo;
        mike['aspectRatio'] = zulu;
        entity['activityImage'] = mike;
        return entity;
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot6 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: ActivityShelfItemBackground
        _fun122140: for(var _fun122140_ip = 0; ; ) switch(_fun122140_ip) {
 0:
            entity = argFoo;
            romeo = entity.imageBackground;
            zulu = entity.aspectRatio;
            offset = entity.accessibilityLabel;
            entity = _closure1_slot6;
            report = undefined;
            oscar = entity.bind(report)(zulu);
            tango = _closure1_slot3;
            zulu = tango.useState;
            entity = false;
            tango = zulu.bind(tango)(entity);
            zulu = _closure1_slot2;
            entity = 2;
            tango = zulu.bind(report)(tango, entity);
            entity = 0;
            entity = tango[entity];
            zulu = 1;
            zulu = tango[zulu];
            var _closure2_slot0 = zulu;
            tango = romeo.state;
            zulu = 'not-found';
            if(!(zulu !== tango)) { _fun122140_ip = 304; continue _fun122140 }
 100:
            if(entity) { _fun122140_ip = 304; continue _fun122140 }
 106:
            zulu = romeo.state;
            entity = 'loading';
            if(!(entity !== zulu)) { _fun122140_ip = 260; continue _fun122140 }
 122:
            entity = romeo.url;
            verify = null;
            if(!(verify != entity)) { _fun122140_ip = 260; continue _fun122140 }
 136:
            tango = _closure1_slot5;
            zulu = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 5;
            entity = golf[entity];
            zulu = zulu.bind(report)(entity);
            entity = {};
            golf = oscar.previewImage;
            entity['style'] = golf;
            options = _closure1_slot4;
            golf = {};
            yankee = function() { // Original name: onError
                zulu = _closure2_slot0;
                mike = undefined;
                entity = true;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            golf['onError'] = yankee;
            yankee = {};
            romeo = romeo.url;
            yankee['uri'] = romeo;
            golf['source'] = yankee;
            yankee = oscar.activityImage;
            golf['style'] = yankee;
            yankee = 'image';
            golf['accessibilityRole'] = yankee;
            yankee = verify != offset;
            verify = '';
            if(!yankee) { _fun122140_ip = 238; continue _fun122140 }
 235:
            verify = offset;
 238:
            golf['accessibilityLabel'] = verify;
            golf = tango.bind(report)(options, golf);
            entity['children'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun122140_ip = 302; continue _fun122140;
 260:
            golf = _closure1_slot5;
            tango = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 5;
            zulu = options[zulu];
            tango = tango.bind(report)(zulu);
            zulu = {};
            options = oscar.previewImage;
            zulu['style'] = options;
            entity = golf.bind(report)(tango, zulu);
 302:
            _fun122140_ip = 370; continue _fun122140;
 304:
            tango = _closure1_slot5;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            mike = 5;
            mike = options[mike];
            zulu = golf.bind(report)(mike);
            mike = {};
            oscar = oscar.previewImage;
            mike['style'] = oscar;
            oscar = 6;
            oscar = options[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            oscar = tango.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 370:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();