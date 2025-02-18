// discord_common/js/packages/dynamic-links/generateDynamicLink.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
            verify = _closure1_slot7;
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
            golfie = _closure1_slot7;
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
    var _closure1_slot6 = entity;
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
    var _closure1_slot7 = entity;
    entity = ['utmSource', 'androidFallbackLink', 'iosFallbackLink'];
    var _closure1_slot3 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/dynamic-links/generateDynamicLink.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: generateDynamicLink
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argBar;
            kiloes = golfie.utmSource;
            report = golfie.androidFallbackLink;
            oscard = golfie.iosFallbackLink;
            tangon = _closure1_slot4;
            michal = _closure1_slot3;
            zuuluu = undefined;
            foxtra = tangon.bind(zuuluu)(golfie, michal);
            michal = global;
            option = michal.URL;
            tangon = option.prototype;
            golfie = Object.create(tangon, {constructor: {value: option}});
            cntext = argFoo;
            papara = golfie;
            tangon = new papara[option](cntext, record);
            verify = tangon instanceof Object ? tangon : golfie;
            yankee = foxtra;
            tangon = null;
            for(golfie in yankee)
 86:
            {
 95:
                result = golfie;
                output = foxtra[result];
                if(tangon == output) { _fun00008_ip = 86; continue _fun00007 }
 106:
                sizing = verify.searchParams;
                backup = sizing.set;
                backup = backup.bind(sizing)(result, output);
                _fun00008_ip = 86; continue _fun00007;
            }
 125:
            option = michal.encodeURIComponent;
            golfie = verify.toString;
            golfie = golfie.bind(verify)();
            backup = option.bind(zuuluu)(golfie);
            offset = michal.encodeURIComponent;
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            verify = 4;
            verify = golfie[verify];
            verify = option.bind(zuuluu)(verify);
            verify = verify.bind(zuuluu)();
            foxtra = offset.bind(zuuluu)(verify);
            romeon = michal.RegExp;
            yankee = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)'];
            offset = yankee.join;
            verify = '|';
            sizing = offset.bind(yankee)(verify);
            verify = michal.HermesInternal;
            yankee = verify.concat;
            offset = '(';
            verify = ')';
            cntext = yankee.bind(offset)(sizing, verify);
            verify = romeon.prototype;
            offset = Object.create(verify, {constructor: {value: romeon}});
            record = 'ig';
            papara = offset;
            verify = new papara[romeon](cntext, record, config);
            yankee = verify instanceof Object ? verify : offset;
            offset = 2;
            golfie = golfie[offset];
            golfie = option.bind(zuuluu)(golfie);
            option = tangon == golfie;
            golfie = undefined;
            if(option) { _fun00008_ip = 323; continue _fun00007 }
 280:
            verify = _closure1_slot1;
            option = _closure1_slot2;
            option = option[offset];
            option = verify.bind(zuuluu)(option);
            verify = option.ua;
            option = tangon == verify;
            golfie = undefined;
            if(option) { _fun00008_ip = 323; continue _fun00007 }
 312:
            option = verify.match;
            golfie = option.bind(verify)(yankee);
 323:
            option = tangon != golfie;
            verify = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[offset];
            golfie = verify.bind(zuuluu)(golfie);
            golfie = tangon == golfie;
            verify = undefined;
            if(golfie) { _fun00008_ip = 375; continue _fun00007 }
 353:
            yankee = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[offset];
            golfie = yankee.bind(zuuluu)(golfie);
            verify = golfie.name;
 375:
            golfie = 'Safari';
            golfie = golfie === verify;
            if(!golfie) { _fun00008_ip = 391; continue _fun00007 }
 388:
            golfie = !option;
 391:
            verify = _closure1_slot1;
            option = _closure1_slot2;
            option = option[offset];
            option = verify.bind(zuuluu)(option);
            verify = tangon == option;
            option = undefined;
            if(verify) { _fun00008_ip = 455; continue _fun00007 }
 417:
            verify = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[offset];
            entity = verify.bind(zuuluu)(entity);
            entity = entity.os;
            verify = tangon == entity;
            option = undefined;
            if(verify) { _fun00008_ip = 455; continue _fun00007 }
 449:
            option = entity.family;
 455:
            entity = 'iOS';
            entity = entity !== option;
            if(entity) { _fun00008_ip = 471; continue _fun00007 }
 468:
            entity = golfie;
 471:
            romeon = 0;
            if(!entity) { _fun00008_ip = 479; continue _fun00007 }
 476:
            romeon = 1;
 479:
            entity = tangon != report;
            option = null;
            if(!entity) { _fun00008_ip = 499; continue _fun00007 }
 488:
            entity = michal.encodeURIComponent;
            option = entity.bind(zuuluu)(report);
 499:
            entity = tangon != oscard;
            report = null;
            if(!entity) { _fun00008_ip = 519; continue _fun00007 }
 508:
            entity = michal.encodeURIComponent;
            report = entity.bind(zuuluu)(oscard);
 519:
            entity = michal.HermesInternal;
            yankee = entity.concat;
            papara = '';
            cntext = 'https://discordapp.page.link';
            record = '/?link=';
            sequen = '&utm_source=';
            ctrled = '&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=';
            update = '&efr=';
            config = backup;
            vacuum = kiloes;
            source = foxtra;
            echoed = romeon;
            oscard = papara[yankee](cntext, record, config, sequen, vacuum, ctrled, source, update, echoed, result);
            zuuluu = oscard;
            if(!(tangon != option)) { _fun00008_ip = 613; continue _fun00007 }
 587:
            entity = michal.HermesInternal;
            golfie = entity.concat;
            entity = '&afl=';
            entity = golfie.bind(entity)(option);
            zuuluu = oscard + entity;
 613:
            entity = zuuluu;
            if(!(tangon != report)) { _fun00008_ip = 646; continue _fun00007 }
 620:
            michal = michal.HermesInternal;
            tangon = michal.concat;
            michal = '&ifl=';
            michal = tangon.bind(michal)(report);
            entity = zuuluu + michal;
 646:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    tangon = function() { // Original name: generateAttemptId
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        entity = michal.v4;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['generateAttemptId'] = tangon;
    michal = function(argFoo) { // Original name: parseDynamicLink
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            romeon = argFoo;
            entity = romeon;
            option = undefined;
            oscard = undefined;
            report = undefined;
            golfie = undefined;
            verify = undefined;
            zuuluu = undefined;
            michal = undefined;
            offset = undefined;
            yankee = romeon.startsWith;
            tangon = 'https://discordapp.page.link';
            tangon = yankee.bind(romeon)(tangon);
            if(tangon) { _fun00010_ip = 46; continue _fun00009 }
 42:
            tangon = null;
            return tangon;
 46: // try_start_0
            tangon = global;
            romeon = tangon.URL;
            backup = entity;
            yankee = romeon.prototype;
            yankee = Object.create(yankee, {constructor: {value: romeon}});
            kiloes = yankee;
            entity = new kiloes[romeon](backup, foxtra);
            entity = entity instanceof Object ? entity : yankee;
            romeon = entity.searchParams;
            report = romeon;
            yankee = romeon.get;
            entity = 'link';
            yankee = yankee.bind(romeon)(entity);
            golfie = yankee;
            entity = null;
            if(!(entity != yankee)) { _fun00010_ip = 301; continue _fun00009 }
 112:
            yankee = tangon.decodeURIComponent;
            backup = yankee.bind(option)(golfie);
            tangon = tangon.URL;
            golfie = tangon.prototype;
            golfie = Object.create(golfie, {constructor: {value: tangon}});
            kiloes = golfie;
            tangon = new kiloes[tangon](backup, foxtra);
            tangon = tangon instanceof Object ? tangon : golfie;
            zuuluu = tangon.searchParams;
            tangon = {};
            yankee = report;
            golfie = yankee.get;
            report = 'utm_source';
            report = golfie.bind(yankee)(report);
            oscard = report;
            golfie = entity != report;
            report = undefined;
            if(!golfie) { _fun00010_ip = 189; continue _fun00009 }
 186:
            report = oscard;
 189:
            tangon['utmSource'] = report;
            michal = tangon;
            tangon = _closure1_slot6;
            report = zuuluu;
            zuuluu = report.entries;
            zuuluu = zuuluu.bind(report)();
            zuuluu = tangon.bind(option)(zuuluu);
            offset = zuuluu;
            zuuluu = zuuluu.bind(option)();
            verify = zuuluu;
            zuuluu = zuuluu.done;
            oscard = 2;
            report = 0;
            tangon = 1;
            if(zuuluu) { _fun00010_ip = 299; continue _fun00009 }
 248:
            zuuluu = verify;
            yankee = zuuluu.value;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.bind(option)(yankee, oscard);
            romeon = zuuluu[report];
            yankee = zuuluu[tangon];
            zuuluu = michal;
            zuuluu[romeon] = yankee;
            zuuluu = offset;
            zuuluu = zuuluu.bind(option)();
            verify = zuuluu;
            zuuluu = zuuluu.done;
            if(!zuuluu) { _fun00010_ip = 248; continue _fun00009 }
 299: // try_end0
            return michal;
 301:
            return entity;
 303: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    zuuluu['parseDynamicLink'] = michal;
    return entity;
})();