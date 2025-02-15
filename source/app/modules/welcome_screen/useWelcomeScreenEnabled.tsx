// app/modules/welcome_screen/useWelcomeScreenEnabled.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = report.bind(entity)(tango);
    tango = tango.isGuildTextChannelType;
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/welcome_screen/useWelcomeScreenEnabled.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useWelcomeScreenEnabled
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot3;
        mike = new Array(3);
        mike[0] = oscar;
        oscar = _closure1_slot4;
        mike[1] = oscar;
        report = _closure1_slot5;
        mike[2] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure1_slot4;
                tango = report.getGuild;
                mike = _closure2_slot1;
                report = tango.bind(report)(mike);
                oscar = null;
                mike = oscar == report;
                tango = undefined;
                golf = undefined;
                if(mike) { _fun00002_ip = 58; continue _fun00001 }
 37:
                options = report.hasFeature;
                mike = _closure1_slot6;
                mike = mike.WELCOME_SCREEN_ENABLED;
                golf = options.bind(report)(mike);
 58:
                mike = true;
                if(!(mike === golf)) { _fun00002_ip = 88; continue _fun00001 }
 64:
                golf = report.hasFeature;
                mike = _closure1_slot6;
                mike = mike.COMMUNITY;
                mike = golf.bind(report)(mike);
                if(mike) { _fun00002_ip = 92; continue _fun00001 }
 88:
                mike = false;
                return mike;
 92:
                golf = report.hasFeature;
                mike = _closure1_slot6;
                mike = mike.GUILD_SERVER_GUIDE;
                mike = golf.bind(report)(mike);
                if(mike) { _fun00002_ip = 205; continue _fun00001 }
 116:
                options = _closure1_slot3;
                mike = options.getChannel;
                golf = _closure2_slot0;
                mike = mike.bind(options)(golf);
                verify = _closure1_slot5;
                options = verify.getChannelId;
                entity = _closure2_slot1;
                entity = options.bind(verify)(entity);
                entity = golf === entity;
                if(!entity) { _fun00002_ip = 164; continue _fun00001 }
 160:
                entity = oscar != mike;
 164:
                if(!entity) { _fun00002_ip = 186; continue _fun00001 }
 167:
                oscar = mike.getGuildId;
                oscar = oscar.bind(mike)();
                report = report.id;
                entity = oscar === report;
 186:
                if(!entity) { _fun00002_ip = 203; continue _fun00001 }
 189:
                zulu = _closure1_slot2;
                mike = mike.type;
                entity = zulu.bind(tango)(mike);
 203:
                return entity;
 205:
                entity = false;
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();