// app/design/components/Input/native/Input.native.tsx
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot2 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot3 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 'row';
    verify['flexDirection'] = offset;
    offset = 4;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_8;
    verify['gap'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_4;
    verify['marginTop'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_4;
    verify['marginBottom'] = romeo;
    tango['inputRow'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_4;
    verify['marginBottom'] = romeo;
    tango['label'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_4;
    verify['marginTop'] = romeo;
    tango['description'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_4;
    verify['marginTop'] = offset;
    offset = 'auto';
    verify['width'] = offset;
    tango['error'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Input/native/Input.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: Input
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = _closure1_slot5;
            tango = undefined;
            yankee = mike.bind(tango)();
            kilo = entity.label;
            backup = entity.description;
            offset = entity.errorMessage;
            foxtrot = entity.children;
            report = entity.containerStyle;
            zulu = _closure1_slot4;
            mike = _closure1_slot2;
            entity = {};
            entity['style'] = report;
            oscar = null;
            report = oscar != kilo;
            options = null;
            if(!report) { _fun00002_ip = 126; continue _fun00001 }
 68:
            romeo = _closure1_slot3;
            verify = _closure1_slot0;
            sizing = _closure1_slot1;
            report = 5;
            report = sizing[report];
            report = verify.bind(tango)(report);
            verify = report.Text;
            report = {'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            sizing = yankee.label;
            report['style'] = sizing;
            report['children'] = kilo;
            options = romeo.bind(tango)(verify, report);
 126:
            report = new Array(4);
            report[0] = options;
            romeo = _closure1_slot3;
            verify = _closure1_slot2;
            options = {};
            kilo = yankee.inputRow;
            options['style'] = kilo;
            options['children'] = foxtrot;
            options = romeo.bind(tango)(verify, options);
            report[1] = options;
            verify = oscar != backup;
            options = null;
            if(!verify) { _fun00002_ip = 239; continue _fun00001 }
 177:
            foxtrot = _closure1_slot3;
            romeo = _closure1_slot0;
            kilo = _closure1_slot1;
            verify = 5;
            verify = kilo[verify];
            verify = romeo.bind(tango)(verify);
            romeo = verify.Text;
            verify = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            kilo = yankee.description;
            verify['style'] = kilo;
            verify['children'] = backup;
            options = foxtrot.bind(tango)(romeo, verify);
 239:
            report[2] = options;
            options = oscar != offset;
            oscar = null;
            if(!options) { _fun00002_ip = 303; continue _fun00001 }
 252:
            verify = _closure1_slot3;
            options = _closure1_slot0;
            romeo = _closure1_slot1;
            golf = 6;
            golf = romeo[golf];
            golf = options.bind(tango)(golf);
            options = golf.ErrorText;
            golf = {};
            yankee = yankee.error;
            golf['style'] = yankee;
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 303:
            report[3] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['Input'] = mike;
    return entity;
})();