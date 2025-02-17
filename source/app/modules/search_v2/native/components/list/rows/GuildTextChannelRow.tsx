// app/modules/search_v2/native/components/list/rows/GuildTextChannelRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.CHANNEL_LIST_SEARCH_LAYOUT;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: GuildTextChannelRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            options = report.channel;
            var _closure2_slot0 = options;
            golf = report.trailing;
            verify = report.lastMessageId;
            yankee = report.onPress;
            var _closure2_slot1 = yankee;
            tango = {'channel': 0, 'trailing': 0, 'lastMessageId': 0, 'onPress': 0};
            zulu = null;
            sizing = tango;
            kilo = null;
            entity = silentSetPrototypeOf(sizing, kilo);
            sizing = {};
            kilo = report;
            backup = tango;
            report = copyDataProperties(sizing, kilo, backup);
            tango = undefined;
            var _closure2_slot4 = tango;
            foxtrot = options.id;
            var _closure2_slot2 = foxtrot;
            romeo = options.guild_id;
            var _closure2_slot3 = romeo;
            entity = zulu != verify;
            if(!entity) { _fun00002_ip = 133; continue _fun00001 }
 99:
            oscar = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 3;
            entity = offset[entity];
            oscar = oscar.bind(tango)(entity);
            entity = oscar.extractTimestamp;
            zulu = entity.bind(oscar)(verify);
 133:
            _closure2_slot4 = zulu;
            offset = _closure1_slot3;
            verify = offset.useMemo;
            oscar = new Array(3);
            oscar[0] = foxtrot;
            oscar[1] = romeo;
            oscar[2] = zulu;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 4;
                    entity = zulu[entity];
                    verify = undefined;
                    zulu = mike.bind(verify)(entity);
                    mike = zulu.renderChannelSubtitle;
                    entity = {};
                    golf = _closure2_slot4;
                    oscar = null;
                    golf = oscar != golf;
                    if(!golf) { _fun00004_ip = 84; continue _fun00003 }
 49:
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    golf = 5;
                    golf = offset[golf];
                    verify = options.bind(verify)(golf);
                    options = verify.getChannelActiveAgoTimestamp;
                    golf = _closure2_slot4;
                    oscar = options.bind(verify)(golf);
 84:
                    entity['subtitle'] = oscar;
                    report = _closure1_slot4;
                    entity['layout'] = report;
                    report = _closure2_slot2;
                    entity['channelId'] = report;
                    tango = _closure2_slot3;
                    entity['guildId'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            verify = verify.bind(offset)(zulu, oscar);
            oscar = offset.useCallback;
            romeo = options.id;
            zulu = new Array(2);
            zulu[0] = romeo;
            zulu[1] = yankee;
            mike = function() {
                zulu = _closure2_slot1;
                entity = _closure2_slot0;
                mike = entity.id;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            oscar = oscar.bind(offset)(mike, zulu);
            zulu = _closure1_slot5;
            mike = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 6;
            entity = offset[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            sizing = entity;
            kilo = report;
            report = copyDataProperties(sizing, kilo);
            report = 'subtitle';
            entity[report] = verify;
            report = 'channel';
            entity[report] = options;
            report = 'trailing';
            entity[report] = golf;
            report = 'onPress';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/list/rows/GuildTextChannelRow.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();