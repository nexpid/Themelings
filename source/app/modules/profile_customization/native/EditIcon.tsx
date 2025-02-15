// app/modules/profile_customization/native/EditIcon.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'alignItems': 'center', 'justifyContent': 'center'};
    offset = 4;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_FLOATING;
    verify['backgroundColor'] = romeo;
    tango['editIcon'] = verify;
    verify = {'width': 24, 'height': 24};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.md;
    verify['borderRadius'] = romeo;
    tango['xs'] = verify;
    verify = {'width': 32, 'height': 32};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.lg;
    verify['borderRadius'] = offset;
    tango['sm'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/profile_customization/native/EditIcon.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: EditIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            options = mike.style;
            var _closure2_slot0 = options;
            golf = mike.size;
            tango = undefined;
            if(!(golf === tango)) { _fun00002_ip = 29; continue _fun00001 }
 25:
            golf = 'xs';
 29:
            var _closure2_slot1 = golf;
            var _closure2_slot2 = tango;
            mike = _closure1_slot5;
            verify = mike.bind(tango)();
            _closure2_slot2 = verify;
            oscar = _closure1_slot2;
            zulu = oscar.useMemo;
            mike = new Array(3);
            mike[0] = verify;
            mike[1] = options;
            mike[2] = golf;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = {};
                    mike = _closure2_slot2;
                    tango = mike.editIcon;
                    mike = new Array(3);
                    mike[0] = tango;
                    report = _closure2_slot1;
                    tango = 'sm';
                    if(!(tango !== report)) { _fun00004_ip = 47; continue _fun00003 }
 35:
                    tango = _closure2_slot2;
                    tango = tango.xs;
                    _fun00004_ip = 57; continue _fun00003;
 47:
                    report = _closure2_slot2;
                    tango = report.sm;
 57:
                    mike[1] = tango;
                    zulu = _closure2_slot0;
                    mike[2] = zulu;
                    entity['iconContainerStyle'] = mike;
                    return entity;
                }
            };
            entity = zulu.bind(oscar)(entity, mike);
            oscar = entity.iconContainerStyle;
            zulu = _closure1_slot4;
            mike = _closure1_slot3;
            entity = {};
            entity['style'] = oscar;
            oscar = _closure1_slot0;
            options = _closure1_slot1;
            report = 5;
            report = options[report];
            report = oscar.bind(tango)(report);
            oscar = report.PencilIcon;
            report = {};
            report['size'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();