// app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = golf[entity];
    tango = argCorge;
    entity = undefined;
    options = tango.bind(entity)(options);
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    report = options.memo;
    tango = function(argFoo) { // Original name: MessagesItemChannel
        _fun114739: for(var _fun114739_ip = 0; ; ) switch(_fun114739_ip) {
 0:
            mike = argFoo;
            zulu = mike.channelId;
            var _closure2_slot0 = zulu;
            oscar = mike.placeholderHeight;
            options = mike.row;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 6;
            zulu = report[zulu];
            report = undefined;
            golf = tango.bind(report)(zulu);
            tango = golf.useStateFromStores;
            verify = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = verify;
            entity = function() {
                zulu = _closure1_slot3;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = tango.bind(golf)(zulu, entity);
            entity = null;
            entity = entity == golf;
            zulu = undefined;
            if(entity) { _fun114739_ip = 102; continue _fun114739 }
 92:
            entity = golf.isPrivate;
            zulu = entity.bind(golf)();
 102:
            entity = true;
            if(!(entity !== zulu)) { _fun114739_ip = 151; continue _fun114739 }
 108:
            tango = _closure1_slot4;
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 7;
            entity = verify[entity];
            zulu = zulu.bind(report)(entity);
            entity = {};
            entity['height'] = oscar;
            entity['row'] = options;
            entity = tango.bind(report)(zulu, entity);
            _fun114739_ip = 191; continue _fun114739;
 151:
            tango = _closure1_slot4;
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 5;
            mike = options[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['channel'] = golf;
            mike['height'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 191:
            return entity;
        }
    };
    tango = report.bind(options)(tango);
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: getMessagesItemChannelSizes
        zulu = argFoo;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        mike = 3;
        tango = verify[mike];
        golf = undefined;
        tango = options.bind(golf)(tango);
        tango = tango.TextStyleSheet;
        tango = tango.redesign/channel-title/semibold;
        tango = tango.lineHeight;
        tango = tango * zulu;
        mike = verify[mike];
        mike = options.bind(golf)(mike);
        mike = mike.TextStyleSheet;
        mike = mike.text-xs/medium;
        mike = mike.lineHeight;
        zulu = mike * zulu;
        report = _closure1_slot1;
        entity = 4;
        mike = verify[entity];
        mike = report.bind(golf)(mike);
        mike = mike.spacing;
        mike = mike.PX_16;
        entity = verify[entity];
        entity = report.bind(golf)(entity);
        entity = entity.spacing;
        yankee = entity.PX_32;
        entity = {};
        entity['avatar'] = yankee;
        report = global;
        offset = report.Math;
        oscar = offset.max;
        report = tango + zulu;
        report = oscar.bind(offset)(yankee, report);
        oscar = report + mike;
        report = 5;
        report = verify[report];
        report = options.bind(golf)(report);
        report = report.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING;
        report = oscar + report;
        entity['height'] = report;
        entity['label'] = tango;
        entity['labelSecondary'] = zulu;
        entity['padding'] = mike;
        return entity;
    };
    zulu['getMessagesItemChannelSizes'] = mike;
    return entity;
})();