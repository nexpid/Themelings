// app/utils/native/WelcomeScreenUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NO_WELCOME_SCREEN;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.JoinGuildSources;
    var _closure1_slot9 = tango;
    tango = {};
    golf = false;
    tango['welcomeScreenModalVisible'] = golf;
    tango['shouldFetchGuildId'] = entity;
    var _closure1_slot10 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/native/WelcomeScreenUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useShowWelcomeModal
        options = argFoo;
        golf = argBar;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 6;
        entity = oscar[entity];
        tango = undefined;
        verify = report.bind(tango)(entity);
        entity = verify.useLocation;
        entity = entity.bind(verify)();
        entity = entity.welcomeModalChannelId;
        var _closure2_slot2 = entity;
        verify = _closure1_slot1;
        entity = 7;
        entity = oscar[entity];
        entity = verify.bind(tango)(entity);
        entity = entity.bind(tango)(golf, options);
        var _closure2_slot3 = entity;
        entity = 8;
        entity = oscar[entity];
        oscar = report.bind(tango)(entity);
        report = oscar.useStateFromStoresObject;
        entity = _closure1_slot8;
        tango = new Array(3);
        tango[0] = entity;
        entity = _closure1_slot5;
        tango[1] = entity;
        entity = _closure1_slot7;
        tango[2] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = _closure2_slot3;
                if(mike) { _fun00002_ip = 19; continue _fun00001 }
 13:
                mike = _closure1_slot10;
                return mike;
 19:
                zulu = _closure1_slot8;
                mike = zulu.getGuild;
                tango = _closure2_slot0;
                zulu = mike.bind(zulu)(tango);
                report = _closure1_slot7;
                mike = report.getSelectableChannelIds;
                report = mike.bind(report)(tango);
                options = _closure1_slot5;
                mike = options.get;
                oscar = mike.bind(options)(tango);
                mike = options.hasSeen;
                mike = mike.bind(options)(tango);
                tango = options.hasError;
                golf = tango.bind(options)();
                tango = options.isFetching;
                options = tango.bind(options)();
                tango = !mike;
                if(!tango) { _fun00002_ip = 107; continue _fun00001 }
 103:
                tango = _closure2_slot3;
 107:
                if(!tango) { _fun00002_ip = 122; continue _fun00001 }
 110:
                mike = _closure2_slot2;
                entity = _closure2_slot1;
                tango = mike === entity;
 122:
                entity = {};
                mike = tango;
                if(!mike) { _fun00002_ip = 136; continue _fun00001 }
 130:
                offset = null;
                mike = offset != oscar;
 136:
                if(!mike) { _fun00002_ip = 147; continue _fun00001 }
 139:
                verify = _closure1_slot6;
                mike = oscar !== verify;
 147:
                if(!mike) { _fun00002_ip = 153; continue _fun00001 }
 150:
                mike = !options;
 153:
                if(!mike) { _fun00002_ip = 159; continue _fun00001 }
 156:
                mike = !golf;
 159:
                if(!mike) { _fun00002_ip = 173; continue _fun00001 }
 162:
                golf = report.length;
                report = 0;
                mike = golf > report;
 173:
                entity['welcomeScreenModalVisible'] = mike;
                mike = undefined;
                if(!tango) { _fun00002_ip = 208; continue _fun00001 }
 183:
                tango = null;
                oscar = tango == oscar;
                mike = undefined;
                if(!oscar) { _fun00002_ip = 208; continue _fun00001 }
 194:
                tango = tango != zulu;
                mike = undefined;
                if(!tango) { _fun00002_ip = 208; continue _fun00001 }
 203:
                mike = zulu.id;
 208:
                entity['shouldFetchGuildId'] = mike;
                return entity;
            }
        };
        tango = report.bind(oscar)(tango, entity);
        entity = tango.welcomeScreenModalVisible;
        oscar = tango.shouldFetchGuildId;
        var _closure2_slot4 = oscar;
        report = _closure1_slot3;
        tango = report.useEffect;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure2_slot4;
                mike = null;
                if(!(mike != zulu)) { _fun00004_ip = 53; continue _fun00003 }
 13:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.fetchWelcomeScreen;
                entity = _closure2_slot4;
                entity = mike.bind(zulu)(entity);
 53:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useShowWelcomeModal'] = tango;
    mike = function(argFoo) { // Original name: openWelcomeActionSheet
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            zulu = mike.guildId;
            var _closure2_slot0 = zulu;
            mike = mike.onHide;
            var _closure2_slot1 = mike;
            tango = function() { // Original name: openWelcomeActionSheet
                report = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                tango = mike[entity];
                entity = undefined;
                oscar = report.bind(entity)(tango);
                report = oscar.openLazy;
                tango = _closure1_slot0;
                zulu = 12;
                zulu = mike[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = 11;
                zulu = mike[zulu];
                mike = mike.paths;
                tango = tango.bind(entity)(zulu, mike);
                options = _closure2_slot0;
                mike = global;
                mike = mike.HermesInternal;
                zulu = mike.concat;
                mike = 'GuildWelcomeActionSheet';
                zulu = zulu.bind(mike)(options);
                mike = {};
                mike['guildId'] = options;
                golf = _closure2_slot1;
                mike['onHide'] = golf;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            zulu = _closure1_slot4;
            entity = zulu.getLurkingSource;
            report = entity.bind(zulu)();
            entity = null;
            oscar = entity == report;
            entity = undefined;
            zulu = undefined;
            if(oscar) { _fun00006_ip = 66; continue _fun00005 }
 61:
            zulu = report.type;
 66:
            mike = _closure1_slot9;
            mike = mike.MOBILE_GUILD_DISCOVERY;
            if(!(zulu !== mike)) { _fun00006_ip = 86; continue _fun00005 }
 80:
            mike = tango.bind(entity)();
            _fun00006_ip = 106; continue _fun00005;
 86:
            mike = global;
            zulu = mike.setTimeout;
            mike = 600;
            mike = zulu.bind(entity)(tango, mike);
 106:
            return entity;
        }
    };
    zulu['openWelcomeActionSheet'] = mike;
    return entity;
})();