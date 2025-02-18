// app/modules/routing/RouteUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar) { // Original name: paramPattern
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[2];
            report = undefined;
            if(!(entity === report)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            entity = {};
 11:
            entity = entity.optional;
            if(!(entity === report)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            entity = false;
 23:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 2;
            michal = oscard[michal];
            michal = tangon.bind(report)(michal);
            zuuluu = michal.UnescapedPathParam;
            michal = 3;
            michal = oscard[michal];
            report = tangon.bind(report)(michal);
            tangon = report.escapeRegExp;
            michal = argFoo;
            option = tangon.bind(report)(michal);
            golfie = '';
            if(!entity) { _fun00002_ip = 89; continue _fun00001 }
 85:
            golfie = '?';
 89:
            entity = global;
            entity = entity.HermesInternal;
            oscard = entity.concat;
            backup = ':';
            romeon = '(';
            yankee = argBar;
            offset = ')';
            foxtra = option;
            verify = golfie;
            foxtra = backup[oscard](foxtra, romeon, yankee, offset, verify, option);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            backup = michal;
            entity = new backup[zuuluu](foxtra, romeon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    report = michal.EMPTY_NUX_SERVER;
    var _closure1_slot2 = report;
    report = michal.FAVORITES;
    var _closure1_slot3 = report;
    michal = michal.ME;
    var _closure1_slot4 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.isStaticChannelRoute;
    var _closure1_slot5 = report;
    michal = michal.StaticChannelRoutes;
    var _closure1_slot6 = michal;
    michal = /^\d+$/;
    var _closure1_slot7 = michal;
    michal = {};
    report = function() { // Original name: guildId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            entity = {};
 11:
            tangon = entity.name;
            if(!(tangon === report)) { _fun00004_ip = 24; continue _fun00003 }
 20:
            tangon = 'guildId';
 24:
            oscard = entity.optional;
            if(!(oscard === report)) { _fun00004_ip = 36; continue _fun00003 }
 34:
            oscard = false;
 36:
            zuuluu = _closure1_slot8;
            michal = _closure1_slot4;
            golfie = new Array(3);
            golfie[0] = michal;
            michal = _closure1_slot3;
            golfie[1] = michal;
            michal = _closure1_slot2;
            golfie[2] = michal;
            michal = golfie.map;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 3;
            entity = verify[entity];
            entity = option.bind(report)(entity);
            entity = entity.escapeRegExp;
            golfie = michal.bind(golfie)(entity);
            michal = golfie.join;
            entity = '|';
            option = michal.bind(golfie)(entity);
            entity = global;
            entity = entity.HermesInternal;
            golfie = entity.concat;
            michal = '';
            entity = '|\\d+';
            michal = golfie.bind(michal)(option, entity);
            entity = {};
            entity['optional'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal, entity);
            return entity;
        }
    };
    michal['guildId'] = report;
    report = function() { // Original name: channelId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            entity = {};
 11:
            tangon = entity.name;
            if(!(tangon === report)) { _fun00006_ip = 24; continue _fun00005 }
 20:
            tangon = 'channelId';
 24:
            oscard = entity.optional;
            if(!(oscard === report)) { _fun00006_ip = 36; continue _fun00005 }
 34:
            oscard = false;
 36:
            zuuluu = _closure1_slot8;
            yankee = _closure1_slot6;
            golfie = new Array(0);
            offset = 0;
            romeon = golfie;
            michal = arraySpread(romeon, yankee, offset);
            michal = golfie.map;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 3;
            entity = verify[entity];
            entity = option.bind(report)(entity);
            entity = entity.escapeRegExp;
            golfie = michal.bind(golfie)(entity);
            michal = golfie.join;
            entity = '|';
            option = michal.bind(golfie)(entity);
            entity = global;
            entity = entity.HermesInternal;
            golfie = entity.concat;
            michal = '';
            entity = '|\\d+';
            michal = golfie.bind(michal)(option, entity);
            entity = {};
            entity['optional'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal, entity);
            return entity;
        }
    };
    michal['channelId'] = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/routing/RouteUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: isValidGuildId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00008_ip = 71; continue _fun00007 }
 12:
            michal = _closure1_slot4;
            michal = report === michal;
            if(michal) { _fun00008_ip = 34; continue _fun00007 }
 26:
            tangon = _closure1_slot3;
            michal = report === tangon;
 34:
            if(michal) { _fun00008_ip = 45; continue _fun00007 }
 37:
            tangon = _closure1_slot2;
            michal = report === tangon;
 45:
            if(michal) { _fun00008_ip = 68; continue _fun00007 }
 48:
            tangon = _closure1_slot7;
            zuuluu = tangon.test;
            zuuluu = zuuluu.bind(tangon)(report);
            zuuluu = !zuuluu;
            michal = !zuuluu;
 68:
            entity = michal;
 71:
            return entity;
        }
    };
    zuuluu['isValidGuildId'] = report;
    tangon = function(argFoo) { // Original name: isValidChannelId
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity == report;
            if(entity) { _fun00010_ip = 58; continue _fun00009 }
 12:
            tangon = _closure1_slot7;
            michal = tangon.test;
            michal = michal.bind(tangon)(report);
            tangon = !michal;
            michal = !tangon;
            if(!tangon) { _fun00010_ip = 55; continue _fun00009 }
 38:
            tangon = _closure1_slot5;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)(report);
            zuuluu = !zuuluu;
            michal = !zuuluu;
 55:
            entity = michal;
 58:
            return entity;
        }
    };
    zuuluu['isValidChannelId'] = tangon;
    zuuluu['RouteParam'] = michal;
    return entity;
})();