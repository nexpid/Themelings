// app/modules/search_v2/native/components/list/rows/GuildChannelRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: GuildChannelLabel
        entity = argFoo;
        offset = entity.channel;
        entity = _closure1_slot7;
        tango = undefined;
        report = entity.bind(tango)();
        mike = _closure1_slot1;
        golf = _closure1_slot2;
        entity = 6;
        entity = golf[entity];
        entity = mike.bind(tango)(entity);
        options = entity.bind(tango)(offset);
        zulu = _closure1_slot6;
        mike = _closure1_slot4;
        entity = {};
        report = report.content;
        entity['style'] = report;
        oscar = _closure1_slot0;
        report = 7;
        report = golf[report];
        golf = oscar.bind(tango)(report);
        oscar = golf.renderChannelContent;
        report = {};
        report['channel'] = offset;
        verify = _closure1_slot5;
        report['layout'] = verify;
        report['name'] = options;
        report = oscar.bind(golf)(report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    yankee = 0;
    golf = oscar[yankee];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Image;
    var _closure1_slot3 = options;
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.CHANNEL_LIST_SEARCH_LAYOUT;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    foxtrot = 10;
    offset['paddingVertical'] = foxtrot;
    tango['container'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    tango['content'] = offset;
    offset = {};
    offset['marginRight'] = yankee;
    tango['iconContainer'] = offset;
    offset = {'width': 20, 'height': 20, 'marginRight': 8};
    yankee = 5;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.TEXT_MUTED;
    offset['tintColor'] = yankee;
    tango['simpleIcon'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot7 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: GuildChannelRow
        zulu = argFoo;
        romeo = zulu.channel;
        verify = zulu.subtitle;
        golf = zulu.trailing;
        oscar = zulu.extras;
        options = zulu.onPress;
        mike = {'channel': 0, 'subtitle': 0, 'trailing': 0, 'extras': 0, 'onPress': 0};
        update = null;
        source = mike;
        entity = silentSetPrototypeOf(source, update);
        source = {};
        update = zulu;
        echo = mike;
        backup = copyDataProperties(source, update, echo);
        entity = _closure1_slot7;
        tango = undefined;
        offset = entity.bind(tango)();
        mike = _closure1_slot0;
        sizing = _closure1_slot2;
        entity = 9;
        entity = sizing[entity];
        yankee = mike.bind(tango)(entity);
        zulu = yankee.getChannelAccessibilityProps;
        entity = {'channel': null, 'unread': false, 'mentionCount': 0};
        entity['channel'] = romeo;
        kilo = zulu.bind(yankee)(entity);
        entity = {};
        foxtrot = _closure1_slot6;
        yankee = _closure1_slot3;
        zulu = {};
        output = offset.simpleIcon;
        zulu['style'] = output;
        output = 8;
        output = sizing[output];
        result = mike.bind(tango)(output);
        output = result.getSimpleChannelIcon;
        output = output.bind(result)(romeo);
        zulu['source'] = output;
        zulu = foxtrot.bind(tango)(yankee, zulu);
        entity['icon'] = zulu;
        zulu = 32;
        entity['iconWidth'] = zulu;
        foxtrot = entity.icon;
        yankee = entity.iconWidth;
        zulu = _closure1_slot6;
        entity = 10;
        entity = sizing[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.SearchListRow;
        entity = {};
        source = entity;
        update = kilo;
        kilo = copyDataProperties(source, update);
        source = entity;
        update = backup;
        backup = copyDataProperties(source, update);
        kilo = offset.container;
        backup = 'containerStyle';
        entity[backup] = kilo;
        backup = offset.iconContainer;
        offset = 'iconContainerStyle';
        entity[offset] = backup;
        offset = 'icon';
        entity[offset] = foxtrot;
        offset = 'iconWidth';
        entity[offset] = yankee;
        yankee = _closure1_slot6;
        offset = _closure1_slot8;
        report = {};
        report['channel'] = romeo;
        offset = yankee.bind(tango)(offset, report);
        report = 'label';
        entity[report] = offset;
        report = 'subLabel';
        entity[report] = verify;
        report = 'onPress';
        entity[report] = options;
        report = 'trailing';
        entity[report] = golf;
        report = 'extras';
        entity[report] = oscar;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/list/rows/GuildChannelRow.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();