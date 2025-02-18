// app/utils/GuildUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = yankee;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = function(argFoo, argBar, argBaz) { // Original name: requestMembersDebounced
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = argBar;
            var _closure2_slot1 = entity;
            entity = argBaz;
            var _closure2_slot2 = entity;
            tangon = _closure1_slot4;
            entity = null;
            if(!(entity != tangon)) { _fun00002_ip = 55; continue _fun00001 }
 36:
            entity = global;
            report = entity.clearTimeout;
            tangon = _closure1_slot4;
            entity = undefined;
            entity = report.bind(entity)(tangon);
 55:
            entity = global;
            report = entity.setTimeout;
            entity = undefined;
            tangon = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = new Array(0);
                    var _closure3_slot0 = report;
                    oscard = function(argFoo) { // Original name: pushGuild
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.push;
                        entity = argFoo;
                        entity = entity.id;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    var _closure3_slot1 = oscard;
                    tangon = _closure2_slot0;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00004_ip = 112; continue _fun00003 }
 32:
                    tangon = global;
                    option = tangon.Array;
                    golfie = option.isArray;
                    tangon = _closure2_slot0;
                    tangon = golfie.bind(option)(tangon);
                    if(tangon) { _fun00004_ip = 91; continue _fun00003 }
 57:
                    option = _closure1_slot5;
                    golfie = option.getGuild;
                    tangon = _closure2_slot0;
                    tangon = golfie.bind(option)(tangon);
                    if(!(zuuluu != tangon)) { _fun00004_ip = 162; continue _fun00003 }
 82:
                    zuuluu = undefined;
                    zuuluu = oscard.bind(zuuluu)(tangon);
                    _fun00004_ip = 162; continue _fun00003;
 91:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            zuuluu = _closure1_slot5;
                            michal = zuuluu.getGuild;
                            entity = argFoo;
                            zuuluu = michal.bind(zuuluu)(entity);
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00006_ip = 40; continue _fun00005 }
 26:
                            michal = _closure3_slot1;
                            entity = undefined;
                            entity = michal.bind(entity)(zuuluu);
 40:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00004_ip = 162; continue _fun00003;
 112:
                    golfie = _closure1_slot1;
                    tangon = _closure1_slot3;
                    zuuluu = 4;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = golfie.bind(zuuluu)(tangon);
                    zuuluu = tangon.forEach;
                    golfie = _closure1_slot5;
                    michal = golfie.getGuilds;
                    michal = michal.bind(golfie)();
                    michal = zuuluu.bind(tangon)(michal, oscard);
 162:
                    zuuluu = report.length;
                    michal = 0;
                    if(!(zuuluu > michal)) { _fun00004_ip = 229; continue _fun00003 }
 173:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.requestMembers;
                    oscard = _closure2_slot1;
                    michal = oscard.toLocaleLowerCase;
                    michal = michal.bind(oscard)();
                    entity = _closure2_slot2;
                    entity = zuuluu.bind(tangon)(report, michal, entity);
 229:
                    entity = undefined;
                    return entity;
                }
            };
            michal = 200;
            michal = report.bind(entity)(tangon, michal);
            var _closure1_slot4 = michal;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: getCachedResults
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = null;
            michal = zuuluu != entity;
            oscard = '';
            report = oscard;
            if(!michal) { _fun00008_ip = 22; continue _fun00007 }
 19:
            report = entity;
 22:
            entity = global;
            entity = entity.HermesInternal;
            tangon = entity.concat;
            michal = ':';
            entity = argBar;
            report = tangon.bind(oscard)(report, michal, entity);
            tangon = _closure1_slot7;
            entity = tangon.get;
            entity = entity.bind(tangon)(report);
            if(!(zuuluu == entity)) { _fun00008_ip = 91; continue _fun00007 }
 70:
            tangon = _closure1_slot7;
            zuuluu = tangon.set;
            michal = true;
            michal = zuuluu.bind(tangon)(report, michal);
            michal = undefined;
            return michal;
 91:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    michal = function(argFoo) { // Original name: getGuildNameSuggestion
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            zuuluu = _closure1_slot6;
            entity = zuuluu.getCurrentUser;
            tangon = entity.bind(zuuluu)();
            zuuluu = _closure1_slot2;
            report = _closure1_slot3;
            entity = 6;
            entity = report[entity];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.getName;
            offset = entity.bind(zuuluu)(tangon);
            option = null;
            zuuluu = option == offset;
            tangon = '';
            entity = tangon;
            if(zuuluu) { _fun00010_ip = 179; continue _fun00009 }
 68:
            zuuluu = offset.length;
            verify = 0;
            entity = tangon;
            if(!(verify !== zuuluu)) { _fun00010_ip = 179; continue _fun00009 }
 82:
            zuuluu = _closure1_slot0;
            yankee = _closure1_slot3;
            michal = 7;
            tangon = yankee[michal];
            tangon = zuuluu.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            michal = yankee[michal];
            michal = zuuluu.bind(oscard)(michal);
            michal = michal.t;
            zuuluu = michal.Y6Qfjo;
            michal = {};
            oscard = offset;
            if(!(option != golfie)) { _fun00010_ip = 169; continue _fun00009 }
 143:
            golfie = golfie.truncateUsername;
            oscard = offset;
            if(!golfie) { _fun00010_ip = 169; continue _fun00009 }
 155:
            option = offset.slice;
            golfie = 20;
            oscard = option.bind(offset)(verify, golfie);
 169:
            michal['username'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 179:
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    offset = 1;
    tangon = golfie[offset];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    verify = yankee.bind(entity)(tangon);
    tangon = {};
    option = 3;
    option = golfie[option];
    option = yankee.bind(entity)(option);
    option = option.Millis;
    option = option.MINUTE;
    option = offset * option;
    tangon['maxAge'] = option;
    option = verify.prototype;
    option = Object.create(option, {constructor: {value: verify}});
    kiloes = option;
    backup = tangon;
    tangon = new kiloes[verify](backup, foxtra);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot7 = tangon;
    tangon = {};
    tangon['getGuildNameSuggestion'] = michal;
    report = function(argFoo, argBar) { // Original name: requestMembers
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            tangon = arguments[2];
            var _closure2_slot0 = report;
            entity = undefined;
            if(!(tangon === entity)) { _fun00012_ip = 24; continue _fun00011 }
 21:
            tangon = 10;
 24:
            var _closure2_slot1 = entity;
            michal = global;
            zuuluu = michal.Array;
            michal = zuuluu.isArray;
            golfie = michal.bind(zuuluu)(oscard);
            zuuluu = new Array(0);
            _closure2_slot1 = zuuluu;
            if(golfie) { _fun00012_ip = 85; continue _fun00011 }
 57:
            michal = _closure1_slot9;
            verify = michal.bind(entity)(oscard, report);
            michal = null;
            verify = michal == verify;
            michal = false;
            if(!verify) { _fun00012_ip = 102; continue _fun00011 }
 81:
            michal = true;
            _fun00012_ip = 102; continue _fun00011;
 85:
            verify = oscard.forEach;
            option = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = argFoo;
                    report = _closure1_slot9;
                    zuuluu = _closure2_slot0;
                    entity = undefined;
                    report = report.bind(entity)(tangon, zuuluu);
                    zuuluu = null;
                    if(!(zuuluu == report)) { _fun00014_ip = 45; continue _fun00013 }
 31:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.push;
                    michal = michal.bind(zuuluu)(tangon);
 45:
                    return entity;
                }
            };
            option = verify.bind(oscard)(option);
            michal = false;
 102:
            verify = zuuluu.length;
            option = 0;
            if(!(verify > option)) { _fun00012_ip = 116; continue _fun00011 }
 113:
            if(golfie) { _fun00012_ip = 135; continue _fun00011 }
 116:
            if(!michal) { _fun00012_ip = 149; continue _fun00011 }
 119:
            michal = _closure1_slot8;
            michal = michal.bind(entity)(oscard, report, tangon);
            _fun00012_ip = 149; continue _fun00011;
 135:
            michal = _closure1_slot8;
            michal = michal.bind(entity)(zuuluu, report, tangon);
 149:
            return entity;
        }
    };
    tangon['requestMembers'] = report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/GuildUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['getGuildNameSuggestion'] = michal;
    return entity;
})();