// app/modules/messages/native/renderer/system_messages/createCommonMessage.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = 0;
    golf = oscar[tango];
    entity = undefined;
    verify = report.bind(entity)(golf);
    options = verify.experimental_createToken;
    golf = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tango = entity.theme;
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 1;
            entity = report[entity];
            oscar = undefined;
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.isThemeDark;
            zulu = entity.bind(zulu)(tango);
            entity = 'rgba(201,210,240,0.6)';
            if(!zulu) { _fun00002_ip = 123; continue _fun00001 }
 54:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 2;
            zulu = golf[zulu];
            report = tango.bind(oscar)(zulu);
            tango = report.hexWithOpacity;
            zulu = _closure1_slot1;
            mike = 3;
            mike = golf[mike];
            mike = zulu.bind(oscar)(mike);
            mike = mike.unsafe_rawColors;
            zulu = mike.WHITE_500;
            mike = 0.1;
            entity = tango.bind(report)(zulu, mike);
 123:
            return entity;
        }
    };
    verify = options.bind(verify)(golf);
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createNativeStyleProperties;
    tango = {};
    offset = 3;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_MUTED;
    tango['timestampColor'] = offset;
    tango['highlightColor'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot3 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/system_messages/createCommonMessage.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: createCommonMessage
        entity = argFoo;
        options = entity.message;
        offset = entity.theme;
        mike = entity.reactions;
        entity = _closure1_slot3;
        oscar = undefined;
        report = entity.bind(oscar)(offset);
        entity = {};
        zulu = options.id;
        entity['id'] = zulu;
        zulu = options.channel_id;
        entity['channelId'] = zulu;
        zulu = options.type;
        entity['type'] = zulu;
        zulu = options.mentioned;
        entity['mentioned'] = zulu;
        zulu = _closure1_slot0;
        golf = _closure1_slot2;
        verify = 4;
        verify = golf[verify];
        yankee = zulu.bind(oscar)(verify);
        verify = yankee.calendarFormat;
        options = options.timestamp;
        options = verify.bind(yankee)(options);
        entity['timestamp'] = options;
        options = report.timestampColor;
        entity['timestampColor'] = options;
        options = 1;
        options = golf[options];
        verify = zulu.bind(oscar)(options);
        options = verify.isThemeDark;
        options = options.bind(verify)(offset);
        entity['dark'] = options;
        report = report.highlightColor;
        entity['highlightColor'] = report;
        entity['reactions'] = mike;
        mike = 5;
        report = golf[mike];
        verify = zulu.bind(oscar)(report);
        options = verify.getAssetUriForEmbed;
        report = _closure1_slot1;
        tango = 6;
        tango = golf[tango];
        tango = report.bind(oscar)(tango);
        tango = options.bind(verify)(tango);
        entity['swipeToReplyIconUrl'] = tango;
        mike = golf[mike];
        tango = zulu.bind(oscar)(mike);
        zulu = tango.getAssetUriForEmbed;
        mike = 7;
        mike = golf[mike];
        mike = report.bind(oscar)(mike);
        mike = zulu.bind(tango)(mike);
        entity['swipeToEditIconUrl'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();