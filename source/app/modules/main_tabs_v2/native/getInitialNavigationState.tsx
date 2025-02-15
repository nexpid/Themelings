// app/modules/main_tabs_v2/native/getInitialNavigationState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: wrapRouteForRootNavigator
        zulu = argFoo;
        mike = {};
        entity = 'main';
        mike['name'] = entity;
        entity = {};
        entity['routes'] = zulu;
        tango = zulu.length;
        zulu = 1;
        zulu = tango - zulu;
        entity['index'] = zulu;
        mike['state'] = entity;
        entity = new Array(1);
        entity[0] = mike;
        return entity;
    };
    var _closure1_slot9 = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: getInitialGuildState
        _fun54351: for(var _fun54351_ip = 0; ; ) switch(_fun54351_ip) {
 0:
            romeo = argFoo;
            entity = argBar;
            mike = null;
            if(!(mike == entity)) { _fun54351_ip = 30; continue _fun54351 }
 12:
            tango = _closure1_slot5;
            zulu = tango.getChannelId;
            entity = zulu.bind(tango)(romeo);
 30:
            zulu = mike != entity;
            oscar = undefined;
            yankee = undefined;
            if(!zulu) { _fun54351_ip = 44; continue _fun54351 }
 41:
            yankee = entity;
 44:
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 6;
            entity = report[entity];
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.getChatLayout;
            entity = entity.bind(zulu)();
            zulu = entity.isChatLockedOpen;
            entity = argBaz;
            if(!entity) { _fun54351_ip = 238; continue _fun54351 }
 92:
            if(!(mike != yankee)) { _fun54351_ip = 238; continue _fun54351 }
 99:
            if(zulu) { _fun54351_ip = 238; continue _fun54351 }
 105:
            entity = new Array(2);
            report = true;
            entity[0] = report;
            report = {};
            offset = 0;
            report['index'] = offset;
            options = _closure1_slot9;
            verify = {};
            golf = 'tabs';
            verify['name'] = golf;
            golf = {};
            backup = {};
            foxtrot = 'guilds';
            backup['name'] = foxtrot;
            foxtrot = {};
            foxtrot['guildId'] = romeo;
            foxtrot['channelId'] = yankee;
            backup['params'] = foxtrot;
            foxtrot = new Array(1);
            foxtrot[0] = backup;
            golf['routes'] = foxtrot;
            golf['index'] = offset;
            verify['state'] = golf;
            golf = new Array(2);
            golf[0] = verify;
            verify = {};
            offset = 'channel';
            verify['name'] = offset;
            offset = {};
            offset['guildId'] = romeo;
            offset['channelId'] = yankee;
            verify['params'] = offset;
            golf[1] = verify;
            golf = options.bind(oscar)(golf);
            report['routes'] = golf;
            entity[1] = report;
            _fun54351_ip = 354; continue _fun54351;
 238:
            report = !zulu;
            zulu = !report;
            if(report) { _fun54351_ip = 251; continue _fun54351 }
 247:
            zulu = mike != yankee;
 251:
            mike = new Array(2);
            mike[0] = zulu;
            zulu = {};
            options = 0;
            zulu['index'] = options;
            report = _closure1_slot9;
            golf = {};
            tango = 'tabs';
            golf['name'] = tango;
            tango = {};
            offset = {};
            verify = 'guilds';
            offset['name'] = verify;
            verify = {};
            verify['guildId'] = romeo;
            verify['channelId'] = yankee;
            offset['params'] = verify;
            verify = new Array(1);
            verify[0] = offset;
            tango['routes'] = verify;
            tango['index'] = options;
            golf['state'] = tango;
            tango = new Array(1);
            tango[0] = golf;
            tango = report.bind(oscar)(tango);
            zulu['routes'] = tango;
            mike[1] = zulu;
            entity = mike;
 354:
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = function() { // Original name: computeInitialNavigationStateWithoutLogging
        _fun54352: for(var _fun54352_ip = 0; ; ) switch(_fun54352_ip) {
 0:
            zulu = _closure1_slot3;
            entity = zulu.getToken;
            entity = entity.bind(zulu)();
            zulu = null;
            if(!(zulu == entity)) { _fun54352_ip = 79; continue _fun54352 }
 23:
            tango = {};
            entity = 'other';
            tango['page'] = entity;
            entity = new Array(2);
            entity[0] = tango;
            tango = {};
            oscar = {};
            report = 'auth';
            oscar['name'] = report;
            report = new Array(1);
            report[0] = oscar;
            tango['routes'] = report;
            report = 0;
            tango['index'] = report;
            entity[1] = tango;
            return entity;
 79:
            backup = _closure1_slot0;
            offset = _closure1_slot1;
            entity = 7;
            entity = offset[entity];
            report = undefined;
            tango = backup.bind(report)(entity);
            entity = tango.getHistory;
            entity = entity.bind(tango)();
            oscar = entity.location;
            entity = 8;
            tango = offset[entity];
            verify = backup.bind(report)(tango);
            options = verify.matchPath;
            golf = oscar.pathname;
            tango = {};
            foxtrot = _closure1_slot7;
            romeo = foxtrot.CHANNEL;
            sizing = 9;
            yankee = offset[sizing];
            yankee = backup.bind(report)(yankee);
            kilo = yankee.RouteParam;
            yankee = kilo.guildId;
            yankee = yankee.bind(kilo)();
            offset = offset[sizing];
            offset = backup.bind(report)(offset);
            kilo = offset.RouteParam;
            backup = kilo.channelId;
            offset = {};
            output = true;
            offset['optional'] = output;
            offset = backup.bind(kilo)(offset);
            backup = ':messageId?';
            offset = romeo.bind(foxtrot)(yankee, offset, backup);
            tango['path'] = offset;
            tango = options.bind(verify)(golf, tango);
            if(!(zulu != tango)) { _fun54352_ip = 259; continue _fun54352 }
 241:
            golf = oscar.openChannel;
            oscar = zulu != golf;
            if(!oscar) { _fun54352_ip = 257; continue _fun54352 }
 254:
            oscar = golf;
 257:
            _fun54352_ip = 380; continue _fun54352;
 259:
            kilo = _closure1_slot0;
            offset = _closure1_slot1;
            entity = offset[entity];
            verify = kilo.bind(report)(entity);
            options = verify.matchPath;
            entity = _closure1_slot4;
            golf = entity.lastNonVoiceRoute;
            entity = {};
            foxtrot = _closure1_slot7;
            romeo = foxtrot.CHANNEL;
            yankee = offset[sizing];
            yankee = kilo.bind(report)(yankee);
            result = yankee.RouteParam;
            yankee = result.guildId;
            yankee = yankee.bind(result)();
            offset = offset[sizing];
            offset = kilo.bind(report)(offset);
            sizing = offset.RouteParam;
            kilo = sizing.channelId;
            offset = {};
            offset['optional'] = output;
            offset = kilo.bind(sizing)(offset);
            offset = romeo.bind(foxtrot)(yankee, offset, backup);
            entity['path'] = offset;
            tango = options.bind(verify)(golf, entity);
            oscar = false;
 380:
            golf = zulu == tango;
            entity = undefined;
            if(golf) { _fun54352_ip = 395; continue _fun54352 }
 389:
            entity = tango.params;
 395:
            if(!(zulu == entity)) { _fun54352_ip = 401; continue _fun54352 }
 399:
            entity = {};
 401:
            tango = entity.channelId;
            entity = entity.guildId;
            if(!(zulu != entity)) { _fun54352_ip = 555; continue _fun54352 }
 418:
            zulu = _closure1_slot10;
            if(oscar) { _fun54352_ip = 433; continue _fun54352 }
 425:
            golf = _closure1_slot6;
            oscar = entity !== golf;
 433:
            oscar = zulu.bind(report)(entity, tango, oscar);
            tango = _closure1_slot2;
            zulu = 2;
            tango = tango.bind(report)(oscar, zulu);
            zulu = 0;
            oscar = tango[zulu];
            zulu = 1;
            tango = tango[zulu];
            zulu = 'other';
            if(oscar) { _fun54352_ip = 496; continue _fun54352 }
 473:
            golf = _closure1_slot6;
            oscar = 'guild-channels';
            if(!(entity === golf)) { _fun54352_ip = 493; continue _fun54352 }
 487:
            oscar = 'private-channels';
 493:
            zulu = oscar;
 496:
            oscar = 'private-channels';
            if(!(oscar !== zulu)) { _fun54352_ip = 531; continue _fun54352 }
 506:
            oscar = {};
            oscar['page'] = zulu;
            oscar['guildId'] = entity;
            entity = new Array(2);
            entity[0] = oscar;
            entity[1] = tango;
            _fun54352_ip = 553; continue _fun54352;
 531:
            oscar = {};
            oscar['page'] = zulu;
            zulu = new Array(2);
            zulu[0] = oscar;
            zulu[1] = tango;
            entity = zulu;
 553:
            return entity;
 555:
            zulu = {};
            entity = 'private-channels';
            zulu['page'] = entity;
            entity = new Array(2);
            entity[0] = zulu;
            tango = _closure1_slot10;
            zulu = _closure1_slot6;
            mike = false;
            zulu = tango.bind(report)(zulu, report, mike);
            mike = 1;
            mike = zulu[mike];
            entity[1] = mike;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    offset = oscar.ME;
    var _closure1_slot6 = offset;
    oscar = oscar.Routes;
    var _closure1_slot7 = oscar;
    oscar = 5;
    oscar = options[oscar];
    offset = verify.bind(entity)(oscar);
    oscar = offset.prototype;
    verify = Object.create(oscar, {constructor: {value: offset}});
    backup = 'getInitialNavigationState';
    kilo = verify;
    oscar = new kilo[offset](backup, foxtrot);
    oscar = oscar instanceof Object ? oscar : verify;
    var _closure1_slot8 = oscar;
    oscar = 10;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/main_tabs_v2/native/getInitialNavigationState.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: getInitialNavigationState
        _fun54353: for(var _fun54353_ip = 0; ; ) switch(_fun54353_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            entity = 1;
            entity = zulu[entity];
            var _closure2_slot0 = entity;
            zulu = null;
            if(!(zulu != tango)) { _fun54353_ip = 50; continue _fun54353 }
 35:
            zulu = tango.forEach;
            mike = function(argFoo) {
                entity = _closure2_slot0;
                zulu = entity.routes;
                mike = zulu.push;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
 50:
            return entity;
        }
    };
    zulu['default'] = oscar;
    zulu['wrapRouteForRootNavigator'] = report;
    report = function() { // Original name: getInitialAuthState
        entity = {};
        zulu = {};
        mike = 'auth';
        zulu['name'] = mike;
        mike = new Array(1);
        mike[0] = zulu;
        entity['routes'] = mike;
        mike = 0;
        entity['index'] = mike;
        return entity;
    };
    zulu['getInitialAuthState'] = report;
    zulu['getInitialGuildState'] = tango;
    mike = function() { // Original name: computeInitialNavigationState
        zulu = _closure1_slot11;
        entity = undefined;
        entity = zulu.bind(entity)();
        tango = _closure1_slot8;
        zulu = tango.log;
        mike = 'Initial State:';
        mike = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['computeInitialNavigationState'] = mike;
    return entity;
})();