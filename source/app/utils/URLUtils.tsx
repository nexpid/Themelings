// app/utils/URLUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = yankee;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    offset = function(argFoo) { // Original name: isDiscordHostname
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            zuuluu = arguments[1];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            zuuluu = false;
 14:
            entity = null;
            entity = entity != golfie;
            if(!entity) { _fun00002_ip = 76; continue _fun00001 }
 23:
            report = _closure1_slot4;
            michal = report.test;
            michal = michal.bind(report)(golfie);
            if(michal) { _fun00002_ip = 73; continue _fun00001 }
 43:
            if(!zuuluu) { _fun00002_ip = 70; continue _fun00001 }
 46:
            oscard = _closure1_slot5;
            report = oscard.has;
            tangon = golfie.toLowerCase;
            tangon = tangon.bind(golfie)();
            zuuluu = report.bind(oscard)(tangon);
 70:
            michal = zuuluu;
 73:
            entity = michal;
 76:
            return entity;
        }
    };
    var _closure1_slot6 = offset;
    verify = function(argFoo) { // Original name: isDiscordProtocol
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00004_ip = 22; continue _fun00003 }
 12:
            michal = 'discord:';
            entity = michal === zuuluu;
 22:
            return entity;
        }
    };
    var _closure1_slot7 = verify;
    option = function(argFoo) { // Original name: isDiscordUrl
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argFoo;
            tangon = arguments[1];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00006_ip = 14; continue _fun00005 }
 12:
            tangon = false;
 14:
            report = null;
            if(!(report != golfie)) { _fun00006_ip = 86; continue _fun00005 }
 20:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            michal = 3;
            michal = option[michal];
            oscard = oscard.bind(zuuluu)(michal);
            michal = oscard.toURLSafe;
            oscard = michal.bind(oscard)(golfie);
            golfie = report == oscard;
            michal = undefined;
            if(golfie) { _fun00006_ip = 69; continue _fun00005 }
 63:
            michal = oscard.hostname;
 69:
            if(!(report != michal)) { _fun00006_ip = 86; continue _fun00005 }
 73:
            entity = _closure1_slot6;
            entity = entity.bind(zuuluu)(michal, tangon);
            if(entity) { _fun00006_ip = 90; continue _fun00005 }
 86:
            entity = false;
            return entity;
 90:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot8 = option;
    golfie = function(argFoo) { // Original name: isDiscordUri
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            entity = null;
            entity = entity != oscard;
            if(!entity) { _fun00008_ip = 63; continue _fun00007 }
 12:
            tangon = _closure1_slot7;
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 2;
            michal = zuuluu[michal];
            zuuluu = undefined;
            report = report.bind(zuuluu)(michal);
            michal = report.parse;
            michal = michal.bind(report)(oscard);
            michal = michal.protocol;
            entity = tangon.bind(zuuluu)(michal);
 63:
            return entity;
        }
    };
    var _closure1_slot9 = golfie;
    romeon = global;
    backup = romeon.Object;
    foxtra = backup.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = foxtra.bind(backup)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    michal = michal.Routes;
    var _closure1_slot3 = michal;
    michal = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i;
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    yankee = yankee.bind(entity)(michal);
    michal = yankee.v4;
    michal = michal.bind(yankee)();
    kiloes = michal.source;
    backup = romeon.RegExp;
    michal = romeon.HermesInternal;
    foxtra = michal.concat;
    yankee = '(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|';
    michal = '|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?';
    result = foxtra.bind(yankee)(kiloes, michal);
    michal = backup.prototype;
    yankee = Object.create(michal, {constructor: {value: backup}});
    output = 'ig';
    echoed = yankee;
    michal = new echoed[backup](result, output, sizing);
    yankee = michal instanceof Object ? michal : yankee;
    foxtra = romeon.Set;
    michal = romeon.window;
    michal = michal.GLOBAL_ENV;
    backup = michal.CDN_HOST;
    michal = new Array(4);
    michal[0] = backup;
    backup = romeon.window;
    backup = backup.GLOBAL_ENV;
    backup = backup.INVITE_HOST;
    michal[1] = backup;
    backup = romeon.window;
    backup = backup.GLOBAL_ENV;
    backup = backup.GIFT_CODE_HOST;
    michal[2] = backup;
    romeon = romeon.window;
    romeon = romeon.GLOBAL_ENV;
    romeon = romeon.GUILD_TEMPLATE_HOST;
    michal[3] = romeon;
    romeon = foxtra.prototype;
    romeon = Object.create(romeon, {constructor: {value: foxtra}});
    echoed = romeon;
    result = michal;
    michal = new echoed[foxtra](result, output);
    michal = michal instanceof Object ? michal : romeon;
    var _closure1_slot5 = michal;
    michal = {};
    michal['URL_REGEX'] = yankee;
    michal['isDiscordHostname'] = offset;
    offset = function(argFoo, argBar) { // Original name: isDiscordLocalhost
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            tangon = null;
            entity = tangon != zuuluu;
            if(!entity) { _fun00010_ip = 19; continue _fun00009 }
 12:
            michal = argBar;
            entity = tangon != michal;
 19:
            if(!entity) { _fun00010_ip = 45; continue _fun00009 }
 22:
            michal = global;
            michal = michal.window;
            michal = michal.location;
            michal = michal.host;
            entity = michal === zuuluu;
 45:
            return entity;
        }
    };
    michal['isDiscordLocalhost'] = offset;
    michal['isDiscordProtocol'] = verify;
    michal['isDiscordUrl'] = option;
    michal['isDiscordUri'] = golfie;
    golfie = function(argFoo) { // Original name: isDiscordCdnUrl
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00012_ip = 78; continue _fun00011 }
 12:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.parse;
            michal = michal.bind(zuuluu)(tangon);
            zuuluu = michal.hostname;
            michal = global;
            michal = michal.window;
            michal = michal.GLOBAL_ENV;
            michal = michal.CDN_HOST;
            entity = zuuluu === michal;
 78:
            return entity;
        }
    };
    michal['isDiscordCdnUrl'] = golfie;
    golfie = function(argFoo) { // Original name: isDiscordUrlOrUri
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot8;
            zuuluu = undefined;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00014_ip = 29; continue _fun00013 }
 20:
            michal = _closure1_slot9;
            entity = michal.bind(zuuluu)(tangon);
 29:
            return entity;
        }
    };
    michal['isDiscordUrlOrUri'] = golfie;
    golfie = function(argFoo) { // Original name: isAppRoute
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            entity = michal.toLowerCase;
            tangon = entity.bind(michal)();
            michal = tangon.startsWith;
            entity = '/channels/';
            entity = michal.bind(tangon)(entity);
            if(entity) { _fun00016_ip = 57; continue _fun00015 }
 33:
            zuuluu = tangon.startsWith;
            michal = _closure1_slot3;
            michal = michal.ACTIVITY;
            entity = zuuluu.bind(tangon)(michal);
 57:
            return entity;
        }
    };
    michal['isAppRoute'] = golfie;
    golfie = function(argFoo) { // Original name: format
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.format;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['format'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: formatPathWithQuery
        michal = _closure1_slot1;
        golfie = _closure1_slot2;
        entity = 2;
        entity = golfie[entity];
        oscard = undefined;
        zuuluu = michal.bind(oscard)(entity);
        michal = zuuluu.format;
        entity = {};
        report = argFoo;
        entity['pathname'] = report;
        report = _closure1_slot0;
        tangon = 4;
        tangon = golfie[tangon];
        oscard = report.bind(oscard)(tangon);
        report = oscard.pickBy;
        tangon = argBar;
        tangon = report.bind(oscard)(tangon);
        entity['query'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['formatPathWithQuery'] = golfie;
    golfie = function(argFoo) { // Original name: formatSearch
        michal = _closure1_slot1;
        golfie = _closure1_slot2;
        entity = 2;
        entity = golfie[entity];
        oscard = undefined;
        zuuluu = michal.bind(oscard)(entity);
        michal = zuuluu.format;
        entity = {};
        report = _closure1_slot0;
        tangon = 4;
        tangon = golfie[tangon];
        oscard = report.bind(oscard)(tangon);
        report = oscard.pickBy;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['query'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['formatSearch'] = golfie;
    golfie = function(argFoo) { // Original name: safeParseWithQuery
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
 3: // try_start_0
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.parse;
            michal = entity;
            entity = true;
            entity = zuuluu.bind(tangon)(michal, entity);
 45: // try_end0
            return entity;
 47: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    michal['safeParseWithQuery'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: toURLSafe
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            entity = argBar;
 6: // try_start_0
            zuuluu = global;
            tangon = zuuluu.URL;
            oscard = michal;
            report = entity;
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            golfie = michal;
            entity = new golfie[tangon](oscard, report, tangon);
            entity = entity instanceof Object ? entity : michal;
 40: // try_end0
            return entity;
 42: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    michal['toURLSafe'] = golfie;
    tangon = function(argFoo) { // Original name: makeUrl
        entity = global;
        michal = entity.location;
        option = michal.host;
        michal = entity.location;
        offset = michal.protocol;
        entity = entity.HermesInternal;
        tangon = entity.concat;
        yankee = '';
        verify = '//';
        golfie = argFoo;
        entity = yankee[tangon](offset, verify, option, golfie, oscard);
        return entity;
    };
    michal['makeUrl'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/URLUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();