// app/modules/nuf_channels/native/components/NUFTemplate.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = golf;
    tango = tango.Image;
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot5 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'padding': 16, 'alignItems': 'center'};
    offset = 4;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    tango['container'] = verify;
    verify = {'textAlign': 'center', 'marginBottom': 8};
    tango['title'] = verify;
    offset = 24;
    verify = {'textAlign': 'center', 'lineHeight': 18, 'marginBottom': 24};
    tango['description'] = verify;
    verify = {};
    verify['marginBottom'] = offset;
    tango['image'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/nuf_channels/native/components/NUFTemplate.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        entity = argFoo;
        output = entity.title;
        kilo = entity.description;
        backup = entity.imageSrc;
        verify = entity.onCTAPress;
        foxtrot = entity.CTALabel;
        entity = _closure1_slot7;
        tango = undefined;
        yankee = entity.bind(tango)();
        zulu = _closure1_slot6;
        mike = _closure1_slot3;
        entity = {};
        report = yankee.container;
        entity['style'] = report;
        options = _closure1_slot5;
        offset = _closure1_slot0;
        romeo = _closure1_slot2;
        golf = 5;
        report = romeo[golf];
        report = offset.bind(tango)(report);
        sizing = report.Text;
        report = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
        result = yankee.title;
        report['style'] = result;
        report['children'] = output;
        sizing = options.bind(tango)(sizing, report);
        report = new Array(4);
        report[0] = sizing;
        golf = romeo[golf];
        golf = offset.bind(tango)(golf);
        offset = golf.Text;
        golf = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
        sizing = yankee.description;
        golf['style'] = sizing;
        golf['children'] = kilo;
        golf = options.bind(tango)(offset, golf);
        report[1] = golf;
        offset = _closure1_slot4;
        golf = {};
        golf['source'] = backup;
        yankee = yankee.image;
        golf['style'] = yankee;
        golf = options.bind(tango)(offset, golf);
        report[2] = golf;
        yankee = _closure1_slot1;
        offset = 6;
        oscar = romeo[offset];
        golf = yankee.bind(tango)(oscar);
        oscar = {};
        oscar['text'] = foxtrot;
        foxtrot = romeo[offset];
        foxtrot = yankee.bind(tango)(foxtrot);
        foxtrot = foxtrot.Sizes;
        foxtrot = foxtrot.MEDIUM;
        oscar['size'] = foxtrot;
        offset = romeo[offset];
        offset = yankee.bind(tango)(offset);
        offset = offset.Colors;
        offset = offset.BRAND;
        oscar['color'] = offset;
        oscar['onPress'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[3] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();