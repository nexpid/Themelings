// app/modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = options;
    tango = function(argFoo) { // Original name: getActiveTabsRoute
        _fun111974: for(var _fun111974_ip = 0; ; ) switch(_fun111974_ip) {
 0:
            zulu = argFoo;
            mike = null;
            if(!(mike != zulu)) { _fun111974_ip = 183; continue _fun111974 }
 12:
            tango = zulu.state;
            oscar = mike == tango;
            report = undefined;
            entity = undefined;
            if(oscar) { _fun111974_ip = 93; continue _fun111974 }
 28:
            oscar = tango.routes;
            golf = zulu.state;
            options = mike == golf;
            tango = undefined;
            if(options) { _fun111974_ip = 53; continue _fun111974 }
 48:
            tango = golf.index;
 53:
            if(!(mike == tango)) { _fun111974_ip = 89; continue _fun111974 }
 57:
            golf = zulu.state;
            verify = mike == golf;
            options = undefined;
            if(verify) { _fun111974_ip = 82; continue _fun111974 }
 71:
            golf = golf.routes;
            options = golf.length;
 82:
            golf = 1;
            tango = options - golf;
 89:
            entity = oscar[tango];
 93:
            if(!(mike == entity)) { _fun111974_ip = 244; continue _fun111974 }
 100:
            oscar = zulu.params;
            golf = mike == oscar;
            tango = undefined;
            if(golf) { _fun111974_ip = 121; continue _fun111974 }
 115:
            tango = oscar.screen;
 121:
            if(!(mike == tango)) { _fun111974_ip = 199; continue _fun111974 }
 125:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 7;
            tango = golf[tango];
            oscar = oscar.bind(report)(tango);
            tango = oscar.getRootNavigationRef;
            tango = tango.bind(oscar)();
            mike = mike == tango;
            report = undefined;
            if(mike) { _fun111974_ip = 177; continue _fun111974 }
 167:
            mike = tango.isReady;
            report = mike.bind(tango)();
 177:
            mike = true;
            if(!(mike !== report)) { _fun111974_ip = 187; continue _fun111974 }
 183:
            mike = undefined;
            return mike;
 187:
            mike = tango.getCurrentRoute;
            mike = mike.bind(tango)();
            return mike;
 199:
            mike = {};
            tango = 'resolved';
            mike['key'] = tango;
            tango = zulu.params;
            tango = tango.screen;
            mike['name'] = tango;
            zulu = zulu.params;
            zulu = zulu.params;
            mike['params'] = zulu;
            return mike;
 244:
            return entity;
        }
    };
    var _closure1_slot11 = tango;
    entity = function(argFoo) { // Original name: resolveBackgroundScreen
        _fun111975: for(var _fun111975_ip = 0; ; ) switch(_fun111975_ip) {
 0:
            entity = argFoo;
            entity = entity.routes;
            options = 0;
            zulu = entity[options];
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 8;
            entity = entity[golf];
            tango = undefined;
            mike = mike.bind(tango)(entity);
            entity = mike.coerceTabsRoute;
            mike = entity.bind(mike)(zulu);
            oscar = null;
            if(!(oscar != mike)) { _fun111975_ip = 309; continue _fun111975 }
 60:
            entity = _closure1_slot11;
            zulu = entity.bind(tango)(mike);
            if(!(oscar != zulu)) { _fun111975_ip = 303; continue _fun111975 }
 76:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[golf];
            mike = mike.bind(tango)(entity);
            entity = mike.coerceGuildsRoute;
            golf = entity.bind(mike)(zulu);
            if(!(oscar != golf)) { _fun111975_ip = 297; continue _fun111975 }
 111:
            entity = golf.params;
            mike = oscar == entity;
            zulu = undefined;
            if(mike) { _fun111975_ip = 131; continue _fun111975 }
 126:
            zulu = entity.guildId;
 131:
            entity = golf.params;
            verify = oscar == entity;
            mike = undefined;
            if(verify) { _fun111975_ip = 151; continue _fun111975 }
 146:
            mike = entity.channelId;
 151:
            verify = oscar != mike;
            entity = undefined;
            if(!verify) { _fun111975_ip = 163; continue _fun111975 }
 160:
            entity = mike;
 163:
            if(!(oscar != entity)) { _fun111975_ip = 291; continue _fun111975 }
 170:
            mike = _closure1_slot9;
            mike = mike.bind(tango)(entity);
            if(mike) { _fun111975_ip = 206; continue _fun111975 }
 182:
            verify = _closure1_slot5;
            mike = verify.getChannel;
            mike = mike.bind(verify)(entity);
            if(!(oscar == mike)) { _fun111975_ip = 206; continue _fun111975 }
 200:
            mike = new Array(0);
            return mike;
 206:
            mike = {};
            mike['index'] = options;
            golf = golf.params;
            options = oscar == golf;
            tango = undefined;
            if(options) { _fun111975_ip = 233; continue _fun111975 }
 227:
            tango = golf.search;
 233:
            if(!(oscar != tango)) { _fun111975_ip = 240; continue _fun111975 }
 237:
            if(tango) { _fun111975_ip = 252; continue _fun111975 }
 240:
            tango = _closure1_slot10;
            tango = tango.BACKGROUND_SAVED;
            _fun111975_ip = 262; continue _fun111975;
 252:
            report = _closure1_slot10;
            tango = report.FALLBACK_RENDERED;
 262:
            mike['type'] = tango;
            mike['guildId'] = zulu;
            mike['channelId'] = entity;
            entity = false;
            mike['showCreateThread'] = entity;
            entity = new Array(1);
            entity[0] = mike;
            return entity;
 291:
            entity = new Array(0);
            return entity;
 297:
            entity = new Array(0);
            return entity;
 303:
            entity = new Array(0);
            return entity;
 309:
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: resolveChannelScreens
        _fun111976: for(var _fun111976_ip = 0; ; ) switch(_fun111976_ip) {
 0:
            options = argFoo;
            report = new Array(0);
            entity = options.index;
            tango = 0;
            entity = tango <= entity;
            offset = 8;
            golf = undefined;
            verify = null;
            zulu = 0;
            if(!entity) { _fun111976_ip = 177; continue _fun111976 }
 38:
            entity = options.routes;
            romeo = entity[zulu];
            yankee = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[offset];
            yankee = yankee.bind(golf)(entity);
            entity = yankee.coerceChannelRoute;
            romeo = entity.bind(yankee)(romeo);
            if(!(verify != romeo)) { _fun111976_ip = 162; continue _fun111976 }
 80:
            yankee = report.push;
            entity = {};
            foxtrot = report.length;
            entity['index'] = foxtrot;
            foxtrot = _closure1_slot10;
            foxtrot = foxtrot.DEFAULT;
            entity['type'] = foxtrot;
            foxtrot = romeo.params;
            foxtrot = foxtrot.guildId;
            entity['guildId'] = foxtrot;
            foxtrot = romeo.params;
            foxtrot = foxtrot.channelId;
            entity['channelId'] = foxtrot;
            romeo = romeo.params;
            romeo = romeo.showCreateThread;
            entity['showCreateThread'] = romeo;
            entity = yankee.bind(report)(entity);
 162:
            zulu = zulu + 1;
            entity = options.index;
            if(zulu <= entity) { _fun111976_ip = 38; continue _fun111976 }
 177:
            entity = argBar;
            entity = entity.isChatLockedOpen;
            if(!entity) { _fun111976_ip = 211; continue _fun111976 }
 189:
            entity = _closure1_slot12;
            zulu = entity.bind(golf)(options);
            var _closure2_slot0 = zulu;
            entity = zulu.length;
            if(!(!(entity > tango))) { _fun111976_ip = 234; continue _fun111976 }
 211:
            verify = report.length;
            entity = report;
            if(!(!(verify > tango))) { _fun111976_ip = 232; continue _fun111976 }
 223:
            oscar = _closure1_slot12;
            entity = oscar.bind(golf)(options);
 232:
            return entity;
 234:
            entity = new Array(0);
            sizing = entity;
            kilo = zulu;
            backup = 0;
            backup = arraySpread(sizing, kilo, backup);
            tango = report.map;
            mike = function(argFoo) {
                mike = argFoo;
                entity = {};
                report = entity;
                tango = mike;
                zulu = copyDataProperties(report, tango);
                zulu = mike.index;
                mike = _closure2_slot0;
                mike = mike.length;
                zulu = zulu + mike;
                mike = 'index';
                entity[mike] = zulu;
                return entity;
            };
            kilo = tango.bind(report)(mike);
            sizing = entity;
            mike = arraySpread(sizing, kilo, backup);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    yankee = 0;
    report = options[yankee];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    offset = 1;
    verify = options[offset];
    report = argCorge;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    verify = 2;
    report = options[verify];
    report = oscar.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = options[report];
    report = golf.bind(entity)(report);
    report = report.ME;
    var _closure1_slot8 = report;
    report = 6;
    report = options[report];
    report = golf.bind(entity)(report);
    report = report.isStaticChannelRoute;
    var _closure1_slot9 = report;
    report = {};
    report['DEFAULT'] = yankee;
    oscar = 'DEFAULT';
    report[yankee] = oscar;
    report['BACKGROUND_SAVED'] = offset;
    oscar = 'BACKGROUND_SAVED';
    report[offset] = oscar;
    report['FALLBACK_RENDERED'] = verify;
    oscar = 'FALLBACK_RENDERED';
    report[verify] = oscar;
    var _closure1_slot10 = report;
    oscar = 10;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: useChannelScreensFromNavigation
        golf = argFoo;
        var _closure2_slot0 = golf;
        tango = _closure1_slot1;
        report = _closure1_slot2;
        zulu = 9;
        zulu = report[zulu];
        options = undefined;
        zulu = tango.bind(options)(zulu);
        zulu = zulu.bind(options)();
        var _closure2_slot1 = zulu;
        report = _closure1_slot4;
        oscar = report.useState;
        tango = function() {
            _fun111979: for(var _fun111979_ip = 0; ; ) switch(_fun111979_ip) {
 0:
                tango = _closure1_slot13;
                zulu = _closure2_slot0;
                mike = zulu.getState;
                zulu = mike.bind(zulu)();
                mike = _closure2_slot1;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                mike = entity.length;
                golf = 0;
                if(!(!(mike > golf))) { _fun111979_ip = 134; continue _fun111979 }
 47:
                zulu = _closure1_slot7;
                mike = zulu.getGuildId;
                tango = mike.bind(zulu)();
                zulu = _closure1_slot6;
                mike = zulu.getChannelId;
                mike = mike.bind(zulu)();
                oscar = null;
                if(!(oscar != mike)) { _fun111979_ip = 127; continue _fun111979 }
 81:
                zulu = {};
                zulu['index'] = golf;
                golf = _closure1_slot10;
                golf = golf.FALLBACK_RENDERED;
                zulu['type'] = golf;
                if(!(oscar == tango)) { _fun111979_ip = 109; continue _fun111979 }
 105:
                tango = _closure1_slot8;
 109:
                zulu['guildId'] = tango;
                zulu['channelId'] = mike;
                mike = new Array(1);
                mike[0] = zulu;
                _fun111979_ip = 131; continue _fun111979;
 127:
                mike = new Array(0);
 131:
                entity = mike;
 134:
                return entity;
            }
        };
        oscar = oscar.bind(report)(tango);
        tango = _closure1_slot3;
        entity = 2;
        oscar = tango.bind(options)(oscar, entity);
        entity = 0;
        entity = oscar[entity];
        tango = 1;
        tango = oscar[tango];
        var _closure2_slot2 = tango;
        options = report.useCallback;
        oscar = function(argFoo) {
            _fun111980: for(var _fun111980_ip = 0; ; ) switch(_fun111980_ip) {
 0:
                zulu = argFoo;
                entity = null;
                if(!(entity != zulu)) { _fun111980_ip = 20; continue _fun111980 }
 9:
                mike = zulu.length;
                entity = 0;
                if(!(!(mike > entity))) { _fun111980_ip = 45; continue _fun111980 }
 20:
                tango = _closure2_slot2;
                mike = undefined;
                entity = function(argFoo) {
                    _fun111981: for(var _fun111981_ip = 0; ; ) switch(_fun111981_ip) {
 0:
                        report = argFoo;
                        mike = report.length;
                        tango = 0;
                        entity = report;
                        if(!(tango !== mike)) { _fun111981_ip = 89; continue _fun111981 }
 17:
                        mike = report[tango];
                        oscar = mike.type;
                        zulu = _closure1_slot10;
                        zulu = zulu.FALLBACK_RENDERED;
                        entity = report;
                        if(!(oscar !== zulu)) { _fun111981_ip = 89; continue _fun111981 }
 46:
                        zulu = {};
                        golf = report[tango];
                        options = zulu;
                        tango = copyDataProperties(options, golf);
                        mike = _closure1_slot10;
                        tango = mike.FALLBACK_RENDERED;
                        mike = 'type';
                        zulu[mike] = tango;
                        mike = new Array(1);
                        mike[0] = zulu;
                        entity = mike;
 89:
                        return entity;
                    }
                };
                entity = tango.bind(mike)(entity);
                _fun111980_ip = 59; continue _fun111980;
 45:
                mike = _closure2_slot2;
                entity = undefined;
                entity = mike.bind(entity)(zulu);
 59:
                entity = undefined;
                return entity;
            }
        };
        tango = new Array(0);
        oscar = options.bind(report)(oscar, tango);
        var _closure2_slot3 = oscar;
        options = report.useEffect;
        tango = new Array(3);
        tango[0] = golf;
        tango[1] = zulu;
        tango[2] = oscar;
        zulu = function() {
            report = _closure1_slot13;
            zulu = _closure2_slot0;
            entity = zulu.getState;
            tango = entity.bind(zulu)();
            zulu = _closure2_slot1;
            entity = undefined;
            zulu = report.bind(entity)(tango, zulu);
            mike = _closure2_slot3;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        zulu = options.bind(report)(zulu, tango);
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            report = function(argFoo) { // Original name: handleStateChange
                tango = _closure1_slot13;
                mike = argFoo;
                mike = mike.data;
                zulu = mike.state;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                report = report.bind(entity)(mike);
                mike = report.getChatLayout;
                mike = mike.bind(report)();
                zulu = tango.bind(entity)(zulu, mike);
                mike = _closure2_slot3;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            var _closure3_slot0 = report;
            tango = _closure2_slot0;
            zulu = tango.addListener;
            mike = 'state';
            mike = zulu.bind(tango)(mike, report);
            entity = function() {
                tango = _closure2_slot0;
                zulu = tango.removeListener;
                mike = _closure3_slot0;
                entity = 'state';
                entity = zulu.bind(tango)(entity, mike);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['default'] = oscar;
    zulu['ChannelScreenType'] = report;
    zulu['getActiveTabsRoute'] = tango;
    mike = function(argFoo) { // Original name: isActiveTabsGuilds
        _fun111986: for(var _fun111986_ip = 0; ; ) switch(_fun111986_ip) {
 0:
            entity = argFoo;
            mike = entity.routes;
            entity = 0;
            tango = mike[entity];
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 8;
            entity = entity[golf];
            oscar = undefined;
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.coerceTabsRoute;
            tango = entity.bind(zulu)(tango);
            zulu = null;
            if(!(zulu != tango)) { _fun111986_ip = 107; continue _fun111986 }
 57:
            entity = _closure1_slot11;
            report = entity.bind(oscar)(tango);
            entity = zulu != report;
            if(!entity) { _fun111986_ip = 105; continue _fun111986 }
 73:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[golf];
            tango = tango.bind(oscar)(mike);
            mike = tango.coerceGuildsRoute;
            mike = mike.bind(tango)(report);
            entity = zulu != mike;
 105:
            return entity;
 107:
            entity = false;
            return entity;
        }
    };
    zulu['isActiveTabsGuilds'] = mike;
    return entity;
})();