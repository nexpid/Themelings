// app/uikit-native/EmptyState.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
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
    golf = tango.View;
    var _closure1_slot2 = golf;
    tango = tango.Image;
    var _closure1_slot3 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot4 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center', 'paddingHorizontal': 36, 'paddingBottom': 80};
    offset = 4;
    yankee = oscar[offset];
    offset = argBaz;
    offset = offset.bind(entity)(yankee);
    offset = offset.colors;
    offset = offset.BG_BASE_PRIMARY;
    verify['backgroundColor'] = offset;
    tango['container'] = verify;
    verify = {'flex': 1, 'maxWidth': 300, 'maxHeight': 200};
    tango['emptyImage'] = verify;
    verify = {'marginTop': 20, 'textTransform': 'uppercase'};
    tango['emptyTitle'] = verify;
    verify = {'textAlign': 'center', 'marginTop': 8};
    tango['emptyBody'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'uikit-native/EmptyState.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: EmptyState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = _closure1_slot6;
            tango = undefined;
            romeo = mike.bind(tango)();
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            yankee = 5;
            mike = mike[yankee];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useThemeContext;
            mike = mike.bind(zulu)();
            offset = mike.theme;
            mike = entity.Illustration;
            golf = null;
            if(!(golf == mike)) { _fun00002_ip = 168; continue _fun00001 }
 64:
            report = _closure1_slot4;
            zulu = _closure1_slot3;
            mike = {};
            oscar = 'contain';
            mike['resizeMode'] = oscar;
            verify = _closure1_slot0;
            oscar = _closure1_slot1;
            oscar = oscar[yankee];
            verify = verify.bind(tango)(oscar);
            oscar = verify.isThemeLight;
            oscar = oscar.bind(verify)(offset);
            if(oscar) { _fun00002_ip = 122; continue _fun00001 }
 114:
            oscar = entity.darkSource;
            _fun00002_ip = 128; continue _fun00001;
 122:
            oscar = entity.lightSource;
 128:
            mike['source'] = oscar;
            verify = romeo.emptyImage;
            oscar = new Array(2);
            oscar[0] = verify;
            verify = entity.imageStyle;
            oscar[1] = verify;
            mike['style'] = oscar;
            verify = report.bind(tango)(zulu, mike);
            _fun00002_ip = 223; continue _fun00001;
 168:
            report = _closure1_slot4;
            zulu = entity.Illustration;
            mike = {};
            oscar = 'contain';
            mike['resizeMode'] = oscar;
            offset = romeo.emptyImage;
            oscar = new Array(2);
            oscar[0] = offset;
            offset = entity.imageStyle;
            oscar[1] = offset;
            mike['style'] = oscar;
            verify = report.bind(tango)(zulu, mike);
 223:
            offset = entity.style;
            yankee = entity.body;
            sizing = entity.title;
            oscar = entity.children;
            foxtrot = entity.bodyStyle;
            result = entity.titleStyle;
            zulu = _closure1_slot5;
            mike = _closure1_slot2;
            entity = {};
            backup = romeo.container;
            report = new Array(2);
            report[0] = backup;
            report[1] = offset;
            entity['style'] = report;
            report = true;
            entity['accessible'] = report;
            report = new Array(4);
            report[0] = verify;
            offset = golf != sizing;
            verify = null;
            if(!offset) { _fun00002_ip = 381; continue _fun00001 }
 310:
            kilo = _closure1_slot4;
            backup = _closure1_slot0;
            output = _closure1_slot1;
            offset = 6;
            offset = output[offset];
            offset = backup.bind(tango)(offset);
            backup = offset.Text;
            offset = {'variant': 'heading-lg/semibold', 'color': 'header-primary', 'maxFontSizeMultiplier': 2};
            echo = romeo.emptyTitle;
            output = new Array(2);
            output[0] = echo;
            output[1] = result;
            offset['style'] = output;
            offset['children'] = sizing;
            verify = kilo.bind(tango)(backup, offset);
 381:
            report[1] = verify;
            verify = golf != yankee;
            golf = null;
            if(!verify) { _fun00002_ip = 465; continue _fun00001 }
 394:
            offset = _closure1_slot4;
            verify = _closure1_slot0;
            backup = _closure1_slot1;
            options = 6;
            options = backup[options];
            options = verify.bind(tango)(options);
            verify = options.Text;
            options = {'variant': 'text-md/medium', 'color': 'text-muted', 'maxFontSizeMultiplier': 2};
            backup = romeo.emptyBody;
            romeo = new Array(2);
            romeo[0] = backup;
            romeo[1] = foxtrot;
            options['style'] = romeo;
            options['children'] = yankee;
            golf = offset.bind(tango)(verify, options);
 465:
            report[2] = golf;
            report[3] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();