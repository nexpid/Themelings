// app/modules/parent_tools/FamilyCenterUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.FAMILY_CENTER_ERROR_CODE_TO_FAILURE;
    var _closure1_slot3 = golfie;
    golfie = tangon.FamilyCenterFailureCode;
    var _closure1_slot4 = golfie;
    tangon = tangon.TeenActionDisplayType;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/parent_tools/FamilyCenterUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() {
        entity = {};
        golfie = _closure1_slot0;
        report = _closure1_slot2;
        oscard = 1;
        zuuluu = report[oscard];
        tangon = undefined;
        zuuluu = golfie.bind(tangon)(zuuluu);
        offset = zuuluu.intl;
        verify = offset.string;
        zuuluu = _closure1_slot1;
        michal = 2;
        option = report[michal];
        option = zuuluu.bind(tangon)(option);
        option = option.VjIAQU;
        option = verify.bind(offset)(option);
        entity['today'] = option;
        oscard = report[oscard];
        oscard = golfie.bind(tangon)(oscard);
        option = oscard.intl;
        golfie = option.string;
        oscard = report[michal];
        oscard = zuuluu.bind(tangon)(oscard);
        oscard = oscard.2a8xHR;
        oscard = golfie.bind(option)(oscard);
        entity['yesterday'] = oscard;
        michal = report[michal];
        michal = zuuluu.bind(tangon)(michal);
        michal = michal.Xt6oND;
        entity['days'] = michal;
        return entity;
    };
    zuuluu['getEmptyActivityFormatter'] = tangon;
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = {};
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            golfie = 1;
            zuuluu = oscard[golfie];
            report = undefined;
            zuuluu = option.bind(report)(zuuluu);
            yankee = zuuluu.intl;
            offset = yankee.string;
            tangon = _closure1_slot1;
            zuuluu = 2;
            entity = oscard[zuuluu];
            verify = tangon.bind(report)(entity);
            entity = argFoo;
            if(entity) { _fun00002_ip = 150; continue _fun00001 }
 59:
            entity = verify.g1ZX6u;
            entity = offset.bind(yankee)(entity);
            michal['today'] = entity;
            entity = oscard[golfie];
            entity = option.bind(report)(entity);
            foxtra = entity.intl;
            romeon = foxtra.string;
            entity = oscard[zuuluu];
            entity = tangon.bind(report)(entity);
            entity = entity.s3qSVl;
            entity = romeon.bind(foxtra)(entity);
            michal['yesterday'] = entity;
            entity = oscard[zuuluu];
            entity = tangon.bind(report)(entity);
            entity = entity.f1UJiI;
            michal['days'] = entity;
            entity = michal;
            _fun00002_ip = 239; continue _fun00001;
 150:
            verify = verify.2AtcIi;
            verify = offset.bind(yankee)(verify);
            michal['today'] = verify;
            golfie = oscard[golfie];
            golfie = option.bind(report)(golfie);
            verify = golfie.intl;
            option = verify.string;
            golfie = oscard[zuuluu];
            golfie = tangon.bind(report)(golfie);
            golfie = golfie.stOECg;
            golfie = option.bind(verify)(golfie);
            michal['yesterday'] = golfie;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.n8n5BQ;
            michal['days'] = zuuluu;
            entity = michal;
 239:
            return entity;
        }
    };
    zuuluu['getActivityWindowTimestampFormatter'] = tangon;
    tangon = function(argFoo, argBar, argBaz) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            offset = argBaz;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 3;
            michal = golfie[zuuluu];
            tangon = undefined;
            michal = oscard.bind(tangon)(michal);
            yankee = michal.bind(tangon)();
            verify = yankee.diff;
            michal = golfie[zuuluu];
            michal = oscard.bind(tangon)(michal);
            option = michal.bind(tangon)(report);
            michal = 's';
            romeon = verify.bind(yankee)(option, michal);
            michal = argBar;
            michal = michal.bind(tangon)();
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            oscard = zuuluu.bind(tangon)(report);
            report = oscard.format;
            zuuluu = 'LL';
            zuuluu = report.bind(oscard)(zuuluu);
            oscard = 86400;
            if(!(!(romeon < oscard))) { _fun00004_ip = 240; continue _fun00003 }
 113:
            zuuluu = 172800;
            if(!(!(romeon < zuuluu))) { _fun00004_ip = 232; continue _fun00003 }
 123:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 1;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            report = entity.intl;
            tangon = report.formatToPlainString;
            zuuluu = michal.days;
            entity = {};
            golfie = global;
            verify = golfie.Math;
            option = verify.min;
            yankee = golfie.Math;
            golfie = yankee.floor;
            oscard = romeon / oscard;
            golfie = golfie.bind(yankee)(oscard);
            oscard = null;
            yankee = oscard != offset;
            oscard = 999;
            if(!yankee) { _fun00004_ip = 213; continue _fun00003 }
 210:
            oscard = offset;
 213:
            oscard = option.bind(verify)(golfie, oscard);
            entity['days'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00004_ip = 238; continue _fun00003;
 232:
            entity = michal.yesterday;
 238:
            _fun00004_ip = 246; continue _fun00003;
 240:
            entity = michal.today;
 246:
            return entity;
        }
    };
    zuuluu['formatUserActivityTimestamp'] = tangon;
    tangon = function(argFoo, argBar) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 3;
            michal = golfie[entity];
            report = undefined;
            michal = oscard.bind(report)(michal);
            offset = michal.bind(report)();
            verify = offset.diff;
            michal = golfie[entity];
            michal = oscard.bind(report)(michal);
            option = michal.bind(report)(tangon);
            michal = 's';
            offset = verify.bind(offset)(option, michal);
            michal = argBar;
            michal = michal.bind(report)();
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            oscard = entity.bind(report)(tangon);
            tangon = oscard.format;
            entity = 'LL';
            verify = tangon.bind(oscard)(entity);
            golfie = 60;
            if(!(!(offset < golfie))) { _fun00006_ip = 434; continue _fun00005 }
 107:
            yankee = 3600;
            if(!(!(offset < yankee))) { _fun00006_ip = 361; continue _fun00005 }
 120:
            romeon = 86400;
            if(!(!(offset < romeon))) { _fun00006_ip = 288; continue _fun00005 }
 133:
            entity = 172800;
            if(!(!(offset < entity))) { _fun00006_ip = 280; continue _fun00005 }
 146:
            entity = 604800;
            if(!(!(offset < entity))) { _fun00006_ip = 207; continue _fun00005 }
 156:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 1;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            option = entity.intl;
            oscard = option.formatToPlainString;
            tangon = michal.date;
            entity = {};
            entity['date'] = verify;
            entity = oscard.bind(option)(tangon, entity);
            _fun00006_ip = 278; continue _fun00005;
 207:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 1;
            tangon = option[tangon];
            tangon = oscard.bind(report)(tangon);
            verify = tangon.intl;
            option = verify.formatToPlainString;
            oscard = michal.days;
            tangon = {};
            foxtra = global;
            backup = foxtra.Math;
            foxtra = backup.floor;
            romeon = offset / romeon;
            romeon = foxtra.bind(backup)(romeon);
            tangon['count'] = romeon;
            entity = option.bind(verify)(oscard, tangon);
 278:
            _fun00006_ip = 286; continue _fun00005;
 280:
            entity = michal.yesterday;
 286:
            _fun00006_ip = 359; continue _fun00005;
 288:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 1;
            tangon = option[tangon];
            tangon = oscard.bind(report)(tangon);
            verify = tangon.intl;
            option = verify.formatToPlainString;
            oscard = michal.hours;
            tangon = {};
            romeon = global;
            foxtra = romeon.Math;
            romeon = foxtra.floor;
            yankee = offset / yankee;
            yankee = romeon.bind(foxtra)(yankee);
            tangon['count'] = yankee;
            entity = option.bind(verify)(oscard, tangon);
 359:
            _fun00006_ip = 432; continue _fun00005;
 361:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 1;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            oscard = zuuluu.intl;
            report = oscard.formatToPlainString;
            tangon = michal.minutes;
            zuuluu = {};
            option = global;
            verify = option.Math;
            option = verify.floor;
            golfie = offset / golfie;
            golfie = option.bind(verify)(golfie);
            zuuluu['count'] = golfie;
            entity = report.bind(oscard)(tangon, zuuluu);
 432:
            _fun00006_ip = 440; continue _fun00005;
 434:
            entity = michal.seconds;
 440:
            return entity;
        }
    };
    zuuluu['formatLinkTimestamp'] = tangon;
    tangon = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.display_type;
            entity = _closure1_slot5;
            entity = entity.USER_ADD;
            entity = tangon === entity;
            if(entity) { _fun00008_ip = 49; continue _fun00007 }
 29:
            report = zuuluu.display_type;
            tangon = _closure1_slot5;
            tangon = tangon.USER_INTERACTION;
            entity = report === tangon;
 49:
            if(entity) { _fun00008_ip = 72; continue _fun00007 }
 52:
            zuuluu = zuuluu.display_type;
            michal = _closure1_slot5;
            michal = michal.USER_CALLED;
            entity = zuuluu === michal;
 72:
            return entity;
        }
    };
    zuuluu['isUserAction'] = tangon;
    tangon = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.display_type;
            entity = _closure1_slot5;
            entity = entity.GUILD_ADD;
            entity = tangon === entity;
            if(entity) { _fun00010_ip = 49; continue _fun00009 }
 29:
            zuuluu = zuuluu.display_type;
            michal = _closure1_slot5;
            michal = michal.GUILD_INTERACTION;
            entity = zuuluu === michal;
 49:
            return entity;
        }
    };
    zuuluu['isGuildAction'] = tangon;
    tangon = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.values;
            entity = _closure1_slot5;
            tangon = michal.bind(zuuluu)(entity);
            entity = tangon.length;
            zuuluu = 0;
            entity = zuuluu < entity;
            if(!entity) { _fun00012_ip = 71; continue _fun00011 }
 42:
            entity = tangon[zuuluu];
            michal = entity.toString;
            michal = michal.bind(entity)();
            if(!(michal !== report)) { _fun00012_ip = 75; continue _fun00011 }
 59:
            zuuluu = zuuluu + 1;
            michal = tangon.length;
            if(zuuluu < michal) { _fun00012_ip = 42; continue _fun00011 }
 71:
            michal = undefined;
            return michal;
 75:
            return entity;
        }
    };
    zuuluu['displayTypeFromString'] = tangon;
    michal = function(argFoo) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot3;
            entity = argFoo;
            entity = entity.code;
            entity = zuuluu[entity];
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00014_ip = 35; continue _fun00013 }
 25:
            michal = _closure1_slot4;
            entity = michal.GENERIC_ERROR;
 35:
            return entity;
        }
    };
    zuuluu['getFailureCodeForAPIError'] = michal;
    return entity;
})();