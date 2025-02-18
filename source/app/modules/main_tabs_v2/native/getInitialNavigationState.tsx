// app/modules/main_tabs_v2/native/getInitialNavigationState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    report = function(argFoo) { // Original name: wrapRouteForRootNavigator
        zuuluu = argFoo;
        michal = {};
        entity = 'main';
        michal['name'] = entity;
        entity = {};
        entity['routes'] = zuuluu;
        tangon = zuuluu.length;
        zuuluu = 1;
        zuuluu = tangon - zuuluu;
        entity['index'] = zuuluu;
        michal['state'] = entity;
        entity = new Array(1);
        entity[0] = michal;
        return entity;
    };
    var _closure1_slot9 = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getInitialGuildState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            romeon = argFoo;
            entity = argBar;
            michal = null;
            if(!(michal == entity)) { _fun00002_ip = 30; continue _fun00001 }
 12:
            tangon = _closure1_slot5;
            zuuluu = tangon.getChannelId;
            entity = zuuluu.bind(tangon)(romeon);
 30:
            zuuluu = michal != entity;
            oscard = undefined;
            yankee = undefined;
            if(!zuuluu) { _fun00002_ip = 44; continue _fun00001 }
 41:
            yankee = entity;
 44:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 6;
            entity = report[entity];
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.getChatLayout;
            entity = entity.bind(zuuluu)();
            zuuluu = entity.isChatLockedOpen;
            entity = argBaz;
            if(!entity) { _fun00002_ip = 238; continue _fun00001 }
 92:
            if(!(michal != yankee)) { _fun00002_ip = 238; continue _fun00001 }
 99:
            if(zuuluu) { _fun00002_ip = 238; continue _fun00001 }
 105:
            entity = new Array(2);
            report = true;
            entity[0] = report;
            report = {};
            offset = 0;
            report['index'] = offset;
            option = _closure1_slot9;
            verify = {};
            golfie = 'tabs';
            verify['name'] = golfie;
            golfie = {};
            backup = {};
            foxtra = 'guilds';
            backup['name'] = foxtra;
            foxtra = {};
            foxtra['guildId'] = romeon;
            foxtra['channelId'] = yankee;
            backup['params'] = foxtra;
            foxtra = new Array(1);
            foxtra[0] = backup;
            golfie['routes'] = foxtra;
            golfie['index'] = offset;
            verify['state'] = golfie;
            golfie = new Array(2);
            golfie[0] = verify;
            verify = {};
            offset = 'channel';
            verify['name'] = offset;
            offset = {};
            offset['guildId'] = romeon;
            offset['channelId'] = yankee;
            verify['params'] = offset;
            golfie[1] = verify;
            golfie = option.bind(oscard)(golfie);
            report['routes'] = golfie;
            entity[1] = report;
            _fun00002_ip = 354; continue _fun00001;
 238:
            report = !zuuluu;
            zuuluu = !report;
            if(report) { _fun00002_ip = 251; continue _fun00001 }
 247:
            zuuluu = michal != yankee;
 251:
            michal = new Array(2);
            michal[0] = zuuluu;
            zuuluu = {};
            option = 0;
            zuuluu['index'] = option;
            report = _closure1_slot9;
            golfie = {};
            tangon = 'tabs';
            golfie['name'] = tangon;
            tangon = {};
            offset = {};
            verify = 'guilds';
            offset['name'] = verify;
            verify = {};
            verify['guildId'] = romeon;
            verify['channelId'] = yankee;
            offset['params'] = verify;
            verify = new Array(1);
            verify[0] = offset;
            tangon['routes'] = verify;
            tangon['index'] = option;
            golfie['state'] = tangon;
            tangon = new Array(1);
            tangon[0] = golfie;
            tangon = report.bind(oscard)(tangon);
            zuuluu['routes'] = tangon;
            michal[1] = zuuluu;
            entity = michal;
 354:
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = function() { // Original name: computeInitialNavigationStateWithoutLogging
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot3;
            entity = zuuluu.getToken;
            entity = entity.bind(zuuluu)();
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00004_ip = 79; continue _fun00003 }
 23:
            tangon = {};
            entity = 'other';
            tangon['page'] = entity;
            entity = new Array(2);
            entity[0] = tangon;
            tangon = {};
            oscard = {};
            report = 'auth';
            oscard['name'] = report;
            report = new Array(1);
            report[0] = oscard;
            tangon['routes'] = report;
            report = 0;
            tangon['index'] = report;
            entity[1] = tangon;
            return entity;
 79:
            backup = _closure1_slot0;
            offset = _closure1_slot1;
            entity = 7;
            entity = offset[entity];
            report = undefined;
            tangon = backup.bind(report)(entity);
            entity = tangon.getHistory;
            entity = entity.bind(tangon)();
            oscard = entity.location;
            entity = 8;
            tangon = offset[entity];
            verify = backup.bind(report)(tangon);
            option = verify.matchPath;
            golfie = oscard.pathname;
            tangon = {};
            foxtra = _closure1_slot7;
            romeon = foxtra.CHANNEL;
            sizing = 9;
            yankee = offset[sizing];
            yankee = backup.bind(report)(yankee);
            kiloes = yankee.RouteParam;
            yankee = kiloes.guildId;
            yankee = yankee.bind(kiloes)();
            offset = offset[sizing];
            offset = backup.bind(report)(offset);
            kiloes = offset.RouteParam;
            backup = kiloes.channelId;
            offset = {};
            output = true;
            offset['optional'] = output;
            offset = backup.bind(kiloes)(offset);
            backup = ':messageId?';
            offset = romeon.bind(foxtra)(yankee, offset, backup);
            tangon['path'] = offset;
            tangon = option.bind(verify)(golfie, tangon);
            if(!(zuuluu != tangon)) { _fun00004_ip = 259; continue _fun00003 }
 241:
            golfie = oscard.openChannel;
            oscard = zuuluu != golfie;
            if(!oscard) { _fun00004_ip = 257; continue _fun00003 }
 254:
            oscard = golfie;
 257:
            _fun00004_ip = 380; continue _fun00003;
 259:
            kiloes = _closure1_slot0;
            offset = _closure1_slot1;
            entity = offset[entity];
            verify = kiloes.bind(report)(entity);
            option = verify.matchPath;
            entity = _closure1_slot4;
            golfie = entity.lastNonVoiceRoute;
            entity = {};
            foxtra = _closure1_slot7;
            romeon = foxtra.CHANNEL;
            yankee = offset[sizing];
            yankee = kiloes.bind(report)(yankee);
            result = yankee.RouteParam;
            yankee = result.guildId;
            yankee = yankee.bind(result)();
            offset = offset[sizing];
            offset = kiloes.bind(report)(offset);
            sizing = offset.RouteParam;
            kiloes = sizing.channelId;
            offset = {};
            offset['optional'] = output;
            offset = kiloes.bind(sizing)(offset);
            offset = romeon.bind(foxtra)(yankee, offset, backup);
            entity['path'] = offset;
            tangon = option.bind(verify)(golfie, entity);
            oscard = false;
 380:
            golfie = zuuluu == tangon;
            entity = undefined;
            if(golfie) { _fun00004_ip = 395; continue _fun00003 }
 389:
            entity = tangon.params;
 395:
            if(!(zuuluu == entity)) { _fun00004_ip = 401; continue _fun00003 }
 399:
            entity = {};
 401:
            tangon = entity.channelId;
            entity = entity.guildId;
            if(!(zuuluu != entity)) { _fun00004_ip = 555; continue _fun00003 }
 418:
            zuuluu = _closure1_slot10;
            if(oscard) { _fun00004_ip = 433; continue _fun00003 }
 425:
            golfie = _closure1_slot6;
            oscard = entity !== golfie;
 433:
            oscard = zuuluu.bind(report)(entity, tangon, oscard);
            tangon = _closure1_slot2;
            zuuluu = 2;
            tangon = tangon.bind(report)(oscard, zuuluu);
            zuuluu = 0;
            oscard = tangon[zuuluu];
            zuuluu = 1;
            tangon = tangon[zuuluu];
            zuuluu = 'other';
            if(oscard) { _fun00004_ip = 496; continue _fun00003 }
 473:
            golfie = _closure1_slot6;
            oscard = 'guild-channels';
            if(!(entity === golfie)) { _fun00004_ip = 493; continue _fun00003 }
 487:
            oscard = 'private-channels';
 493:
            zuuluu = oscard;
 496:
            oscard = 'private-channels';
            if(!(oscard !== zuuluu)) { _fun00004_ip = 531; continue _fun00003 }
 506:
            oscard = {};
            oscard['page'] = zuuluu;
            oscard['guildId'] = entity;
            entity = new Array(2);
            entity[0] = oscard;
            entity[1] = tangon;
            _fun00004_ip = 553; continue _fun00003;
 531:
            oscard = {};
            oscard['page'] = zuuluu;
            zuuluu = new Array(2);
            zuuluu[0] = oscard;
            zuuluu[1] = tangon;
            entity = zuuluu;
 553:
            return entity;
 555:
            zuuluu = {};
            entity = 'private-channels';
            zuuluu['page'] = entity;
            entity = new Array(2);
            entity[0] = zuuluu;
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot6;
            michal = false;
            zuuluu = tangon.bind(report)(zuuluu, report, michal);
            michal = 1;
            michal = zuuluu[michal];
            entity[1] = michal;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    offset = oscard.ME;
    var _closure1_slot6 = offset;
    oscard = oscard.Routes;
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = option[oscard];
    offset = verify.bind(entity)(oscard);
    oscard = offset.prototype;
    verify = Object.create(oscard, {constructor: {value: offset}});
    backup = 'getInitialNavigationState';
    kiloes = verify;
    oscard = new kiloes[offset](backup, foxtra);
    oscard = oscard instanceof Object ? oscard : verify;
    var _closure1_slot8 = oscard;
    oscard = 10;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/main_tabs_v2/native/getInitialNavigationState.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: getInitialNavigationState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot11;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            entity = 1;
            entity = zuuluu[entity];
            var _closure2_slot0 = entity;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00006_ip = 50; continue _fun00005 }
 35:
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                entity = _closure2_slot0;
                zuuluu = entity.routes;
                michal = zuuluu.push;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
 50:
            return entity;
        }
    };
    zuuluu['default'] = oscard;
    zuuluu['wrapRouteForRootNavigator'] = report;
    report = function() { // Original name: getInitialAuthState
        entity = {};
        zuuluu = {};
        michal = 'auth';
        zuuluu['name'] = michal;
        michal = new Array(1);
        michal[0] = zuuluu;
        entity['routes'] = michal;
        michal = 0;
        entity['index'] = michal;
        return entity;
    };
    zuuluu['getInitialAuthState'] = report;
    zuuluu['getInitialGuildState'] = tangon;
    michal = function() { // Original name: computeInitialNavigationState
        zuuluu = _closure1_slot11;
        entity = undefined;
        entity = zuuluu.bind(entity)();
        tangon = _closure1_slot8;
        zuuluu = tangon.log;
        michal = 'Initial State:';
        michal = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['computeInitialNavigationState'] = michal;
    return entity;
})();