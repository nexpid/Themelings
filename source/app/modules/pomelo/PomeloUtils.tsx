// app/modules/pomelo/PomeloUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot10;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot10;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    tangon = function(argFoo, argBar) { // Original name: withoutCharacters
        tangon = argFoo;
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = tangon.split;
        zuuluu = '';
        tangon = michal.bind(tangon)(zuuluu);
        michal = tangon.filter;
        entity = function(argFoo) {
            report = argFoo;
            zuuluu = _closure2_slot0;
            michal = zuuluu.includes;
            tangon = report.charCodeAt;
            entity = 0;
            entity = tangon.bind(report)(entity);
            entity = michal.bind(zuuluu)(entity);
            entity = !entity;
            return entity;
        };
        michal = michal.bind(tangon)(entity);
        entity = michal.join;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    var _closure1_slot11 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    option = report.dirtyChars;
    var _closure1_slot3 = option;
    option = report.coalescePeriods;
    var _closure1_slot4 = option;
    report = report.CONTROL_CHARACTERS_CODE;
    var _closure1_slot5 = report;
    report = ['@', '#', ':'];
    var _closure1_slot6 = report;
    report = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'];
    var _closure1_slot7 = report;
    report = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
    var _closure1_slot8 = report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/pomelo/PomeloUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: getUserAvatarURLForPomelo
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = arguments[1];
            tangon = undefined;
            if(!(report === tangon)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            report = true;
 14:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 1;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.getUserAvatarURL;
            michal = {};
            oscard = entity.id;
            michal['id'] = oscard;
            oscard = entity.avatar;
            michal['avatar'] = oscard;
            entity = entity.bot;
            michal['bot'] = entity;
            entity = '0000';
            michal['discriminator'] = entity;
            entity = 80;
            entity = zuuluu.bind(tangon)(michal, report, entity);
            return entity;
        }
    };
    zuuluu['getUserAvatarURLForPomelo'] = report;
    report = function(argFoo) { // Original name: getDefaultPomelo
        entity = argFoo;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.stripDiacritics;
        zuuluu = entity.username;
        oscard = tangon.bind(report)(zuuluu);
        report = oscard.replace;
        zuuluu = _closure1_slot3;
        tangon = '';
        oscard = report.bind(oscard)(zuuluu, tangon);
        report = oscard.replace;
        zuuluu = _closure1_slot4;
        michal = '.';
        zuuluu = report.bind(oscard)(zuuluu, michal);
        michal = zuuluu.toLowerCase;
        zuuluu = michal.bind(zuuluu)();
        michal = entity.discriminator;
        entity = global;
        entity = entity.HermesInternal;
        entity = entity.concat;
        tangon = entity.bind(tangon)(zuuluu, michal);
        zuuluu = tangon.substring;
        michal = 0;
        entity = 32;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['getDefaultPomelo'] = report;
    zuuluu['withoutCharacters'] = tangon;
    tangon = function(argFoo) { // Original name: shouldSkipToEditUsername
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            michal = entity.username;
            entity = michal.toLowerCase;
            report = entity.bind(michal)();
            zuuluu = _closure1_slot11;
            michal = _closure1_slot5;
            tangon = undefined;
            michal = zuuluu.bind(tangon)(report, michal);
            zuuluu = michal.length;
            michal = 2;
            if(!(!(zuuluu < michal))) { _fun00010_ip = 259; continue _fun00009 }
 52:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot6;
            oscard = zuuluu.bind(tangon)(michal);
            zuuluu = oscard.bind(tangon)();
            michal = zuuluu.done;
            if(michal) { _fun00010_ip = 116; continue _fun00009 }
 77:
            golfie = zuuluu.value;
            michal = report.includes;
            michal = michal.bind(report)(golfie);
            if(michal) { _fun00010_ip = 112; continue _fun00009 }
 95:
            golfie = oscard.bind(tangon)();
            michal = golfie.done;
            zuuluu = golfie;
            if(michal) { _fun00010_ip = 116; continue _fun00009 }
 110:
            _fun00010_ip = 77; continue _fun00009;
 112:
            michal = true;
            return michal;
 116:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot8;
            oscard = zuuluu.bind(tangon)(michal);
            zuuluu = oscard.bind(tangon)();
            michal = zuuluu.done;
            if(michal) { _fun00010_ip = 181; continue _fun00009 }
 141:
            golfie = zuuluu.value;
            michal = golfie.toLowerCase;
            michal = michal.bind(golfie)();
            if(!(report !== michal)) { _fun00010_ip = 177; continue _fun00009 }
 160:
            golfie = oscard.bind(tangon)();
            michal = golfie.done;
            zuuluu = golfie;
            if(michal) { _fun00010_ip = 181; continue _fun00009 }
 175:
            _fun00010_ip = 141; continue _fun00009;
 177:
            michal = true;
            return michal;
 181:
            michal = _closure1_slot9;
            entity = _closure1_slot7;
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.bind(tangon)();
            entity = michal.done;
            if(entity) { _fun00010_ip = 255; continue _fun00009 }
 206:
            golfie = michal.value;
            oscard = report.includes;
            entity = golfie.toLowerCase;
            entity = entity.bind(golfie)();
            entity = oscard.bind(report)(entity);
            if(entity) { _fun00010_ip = 251; continue _fun00009 }
 234:
            oscard = zuuluu.bind(tangon)();
            entity = oscard.done;
            michal = oscard;
            if(entity) { _fun00010_ip = 255; continue _fun00009 }
 249:
            _fun00010_ip = 206; continue _fun00009;
 251:
            entity = true;
            return entity;
 255:
            entity = false;
            return entity;
 259:
            entity = true;
            return entity;
        }
    };
    zuuluu['shouldSkipToEditUsername'] = tangon;
    tangon = function(argFoo) { // Original name: formatPomeloForEditing
        michal = argFoo;
        entity = michal.toLowerCase;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.replace;
        entity = /\s/g;
        tangon = '';
        zuuluu = michal.bind(zuuluu)(entity, tangon);
        michal = zuuluu.replace;
        entity = '@';
        entity = michal.bind(zuuluu)(entity, tangon);
        return entity;
    };
    zuuluu['formatPomeloForEditing'] = tangon;
    tangon = function(argFoo) { // Original name: getMemberSince
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = undefined;
            entity = undefined;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 3;
            tangon = oscard[tangon];
            oscard = report.bind(zuuluu)(tangon);
            report = oscard.extractTimestamp;
            tangon = argFoo;
            entity = report.bind(oscard)(tangon);
 41: // try_start_0
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 4;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            tangon = global;
            report = tangon.Date;
            golfie = entity;
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            option = tangon;
            entity = new option[report](golfie, oscard);
            entity = entity instanceof Object ? entity : tangon;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.format;
            entity = 'MMM DD, YYYY';
            entity = michal.bind(zuuluu)(entity);
 113: // try_end0
            return entity;
 115: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    zuuluu['getMemberSince'] = tangon;
    tangon = function(argFoo) { // Original name: formatUsernameLiveCheckValidation
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        michal = 5;
        zuuluu = option[michal];
        oscard = undefined;
        report = golfie.bind(oscard)(zuuluu);
        tangon = report.match;
        zuuluu = argFoo;
        offset = tangon.bind(report)(zuuluu);
        verify = offset.with;
        report = {};
        zuuluu = true;
        report['rateLimited'] = zuuluu;
        tangon = function() {
            entity = {};
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 6;
            michal = golfie[michal];
            report = undefined;
            michal = oscard.bind(report)(michal);
            michal = michal.NameValidationState;
            michal = michal.RATE_LIMIT;
            entity['type'] = michal;
            michal = 7;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.T15lqq;
            michal = zuuluu.bind(tangon)(michal);
            entity['message'] = michal;
            return entity;
        };
        offset = verify.bind(offset)(report, tangon);
        verify = offset.with;
        report = {};
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        romeon = tangon.P;
        yankee = romeon.not;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.P;
        tangon = tangon.nullish;
        tangon = yankee.bind(romeon)(tangon);
        report['error'] = tangon;
        tangon = function(argFoo) {
            entity = argFoo;
            michal = entity.error;
            entity = {};
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 6;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            zuuluu = zuuluu.NameValidationState;
            zuuluu = zuuluu.ERROR;
            entity['type'] = zuuluu;
            entity['message'] = michal;
            return entity;
        };
        offset = verify.bind(offset)(report, tangon);
        verify = offset.with;
        report = {};
        tangon = false;
        report['taken'] = tangon;
        tangon = function() {
            entity = {};
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 6;
            michal = golfie[michal];
            report = undefined;
            michal = oscard.bind(report)(michal);
            michal = michal.NameValidationState;
            michal = michal.AVAILABLE;
            entity['type'] = michal;
            michal = 7;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.PgfBS0;
            michal = zuuluu.bind(tangon)(michal);
            entity['message'] = michal;
            return entity;
        };
        verify = verify.bind(offset)(report, tangon);
        report = verify.with;
        tangon = {};
        tangon['taken'] = zuuluu;
        zuuluu = function() {
            entity = {};
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 6;
            michal = golfie[michal];
            report = undefined;
            michal = oscard.bind(report)(michal);
            michal = michal.NameValidationState;
            michal = michal.ERROR;
            entity['type'] = michal;
            michal = 7;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.mCrAUV;
            michal = zuuluu.bind(tangon)(michal);
            entity['message'] = michal;
            return entity;
        };
        report = report.bind(verify)(tangon, zuuluu);
        tangon = report.with;
        zuuluu = {};
        michal = option[michal];
        michal = golfie.bind(oscard)(michal);
        michal = michal.P;
        michal = michal.nullish;
        zuuluu['error'] = michal;
        michal = function() {
            entity = {};
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.NameValidationState;
            michal = michal.INTERNAL_ERROR;
            entity['type'] = michal;
            michal = '';
            entity['message'] = michal;
            return entity;
        };
        zuuluu = tangon.bind(report)(zuuluu, michal);
        michal = zuuluu.otherwise;
        entity = function() {
            entity = undefined;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['formatUsernameLiveCheckValidation'] = tangon;
    michal = function(argFoo) { // Original name: getLocalizedForcedUUDate
        entity = global;
        report = entity.Date;
        entity = report.prototype;
        michal = Object.create(entity, {constructor: {value: report}});
        option = 2024;
        golfie = 2;
        oscard = 4;
        verify = michal;
        entity = new verify[report](option, golfie, oscard, report);
        tangon = entity instanceof Object ? entity : michal;
        zuuluu = tangon.toLocaleDateString;
        michal = argFoo;
        entity = {'month': 'long', 'day': 'numeric', 'year': 'numeric'};
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['getLocalizedForcedUUDate'] = michal;
    return entity;
})();