// app/modules/channel/native/openChannelPicker.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel/native/openChannelPicker.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: openChannelPicker
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            golf = report.selectedChannel;
            romeo = report.guildId;
            oscar = report.channelType;
            yankee = report.filterFn;
            entity = undefined;
            if(!(yankee === entity)) { _fun00002_ip = 41; continue _fun00001 }
 34:
            yankee = function() { // Original name: h
                entity = true;
                return entity;
            };
 41:
            foxtrot = report.onClose;
            zulu = {'selectedChannel': 0, 'guildId': 0, 'channelType': 0, 'filterFn': 0, 'onClose': 0};
            tango = null;
            source = zulu;
            update = null;
            mike = silentSetPrototypeOf(source, update);
            source = {};
            update = report;
            echo = zulu;
            mike = copyDataProperties(source, update, echo);
            verify = _closure1_slot4;
            report = verify.getGuild;
            verify = report.bind(verify)(romeo);
            offset = _closure1_slot3;
            report = offset.getChannels;
            report = report.bind(offset)(romeo);
            offset = report[oscar];
            if(!(tango == offset)) { _fun00002_ip = 128; continue _fun00001 }
 124:
            offset = new Array(0);
 128:
            report = _closure1_slot1;
            result = _closure1_slot2;
            tango = 2;
            tango = result[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.openLazy;
            output = _closure1_slot0;
            zulu = 4;
            zulu = result[zulu];
            romeo = output.bind(entity)(zulu);
            zulu = 3;
            tango = result[zulu];
            zulu = result.paths;
            tango = romeo.bind(entity)(tango, zulu);
            zulu = {};
            romeo = {};
            backup = 5;
            kilo = result[backup];
            kilo = output.bind(entity)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            backup = result[backup];
            backup = output.bind(entity)(backup);
            backup = backup.t;
            backup = backup.r2pts7;
            backup = kilo.bind(sizing)(backup);
            romeo['title'] = backup;
            romeo['onClose'] = foxtrot;
            zulu['header'] = romeo;
            zulu['guild'] = verify;
            verify = offset.filter;
            offset = verify.bind(offset)(yankee);
            verify = offset.map;
            options = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                return entity;
            };
            options = verify.bind(offset)(options);
            zulu['channels'] = options;
            zulu['selectedChannel'] = golf;
            source = zulu;
            update = mike;
            mike = copyDataProperties(source, update);
            mike = 'ChannelPicker';
            mike = report.bind(oscar)(tango, mike, zulu);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();