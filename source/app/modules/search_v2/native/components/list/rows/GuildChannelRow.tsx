// app/modules/search_v2/native/components/list/rows/GuildChannelRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: GuildChannelLabel
        entity = argFoo;
        offset = entity.channel;
        entity = _closure1_slot7;
        tangon = undefined;
        report = entity.bind(tangon)();
        michal = _closure1_slot1;
        golfie = _closure1_slot2;
        entity = 6;
        entity = golfie[entity];
        entity = michal.bind(tangon)(entity);
        option = entity.bind(tangon)(offset);
        zuuluu = _closure1_slot6;
        michal = _closure1_slot4;
        entity = {};
        report = report.content;
        entity['style'] = report;
        oscard = _closure1_slot0;
        report = 7;
        report = golfie[report];
        golfie = oscard.bind(tangon)(report);
        oscard = golfie.renderChannelContent;
        report = {};
        report['channel'] = offset;
        verify = _closure1_slot5;
        report['layout'] = verify;
        report['name'] = option;
        report = oscard.bind(golfie)(report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    yankee = 0;
    golfie = oscard[yankee];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Image;
    var _closure1_slot3 = option;
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CHANNEL_LIST_SEARCH_LAYOUT;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    foxtra = 10;
    offset['paddingVertical'] = foxtra;
    tangon['container'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    tangon['content'] = offset;
    offset = {};
    offset['marginRight'] = yankee;
    tangon['iconContainer'] = offset;
    offset = {'width': 20, 'height': 20, 'marginRight': 8};
    yankee = 5;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.TEXT_MUTED;
    offset['tintColor'] = yankee;
    tangon['simpleIcon'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot7 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: GuildChannelRow
        zuuluu = argFoo;
        romeon = zuuluu.channel;
        verify = zuuluu.subtitle;
        golfie = zuuluu.trailing;
        oscard = zuuluu.extras;
        option = zuuluu.onPress;
        michal = {'channel': 0, 'subtitle': 0, 'trailing': 0, 'extras': 0, 'onPress': 0};
        update = null;
        source = michal;
        entity = silentSetPrototypeOf(source, update);
        source = {};
        update = zuuluu;
        echoed = michal;
        backup = copyDataProperties(source, update, echoed);
        entity = _closure1_slot7;
        tangon = undefined;
        offset = entity.bind(tangon)();
        michal = _closure1_slot0;
        sizing = _closure1_slot2;
        entity = 9;
        entity = sizing[entity];
        yankee = michal.bind(tangon)(entity);
        zuuluu = yankee.getChannelAccessibilityProps;
        entity = {'channel': null, 'unread': false, 'mentionCount': 0};
        entity['channel'] = romeon;
        kiloes = zuuluu.bind(yankee)(entity);
        entity = {};
        foxtra = _closure1_slot6;
        yankee = _closure1_slot3;
        zuuluu = {};
        output = offset.simpleIcon;
        zuuluu['style'] = output;
        output = 8;
        output = sizing[output];
        result = michal.bind(tangon)(output);
        output = result.getSimpleChannelIcon;
        output = output.bind(result)(romeon);
        zuuluu['source'] = output;
        zuuluu = foxtra.bind(tangon)(yankee, zuuluu);
        entity['icon'] = zuuluu;
        zuuluu = 32;
        entity['iconWidth'] = zuuluu;
        foxtra = entity.icon;
        yankee = entity.iconWidth;
        zuuluu = _closure1_slot6;
        entity = 10;
        entity = sizing[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.SearchListRow;
        entity = {};
        source = entity;
        update = kiloes;
        kiloes = copyDataProperties(source, update);
        source = entity;
        update = backup;
        backup = copyDataProperties(source, update);
        kiloes = offset.container;
        backup = 'containerStyle';
        entity[backup] = kiloes;
        backup = offset.iconContainer;
        offset = 'iconContainerStyle';
        entity[offset] = backup;
        offset = 'icon';
        entity[offset] = foxtra;
        offset = 'iconWidth';
        entity[offset] = yankee;
        yankee = _closure1_slot6;
        offset = _closure1_slot8;
        report = {};
        report['channel'] = romeon;
        offset = yankee.bind(tangon)(offset, report);
        report = 'label';
        entity[report] = offset;
        report = 'subLabel';
        entity[report] = verify;
        report = 'onPress';
        entity[report] = option;
        report = 'trailing';
        entity[report] = golfie;
        report = 'extras';
        entity[report] = oscard;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/list/rows/GuildChannelRow.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();