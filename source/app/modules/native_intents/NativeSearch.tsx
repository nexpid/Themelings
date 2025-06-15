// app/modules/native_intents/NativeSearch.tsx
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
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot11;
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
            golfie = _closure1_slot11;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: handleRelativeURL
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00008_ip = 27; continue _fun00007 }
 9:
            tangon = zuuluu.startsWith;
            michal = '/';
            michal = tangon.bind(zuuluu)(michal);
            if(michal) { _fun00008_ip = 41; continue _fun00007 }
 27:
            michal = entity != zuuluu;
            entity = undefined;
            if(!michal) { _fun00008_ip = 39; continue _fun00007 }
 36:
            entity = zuuluu;
 39:
            _fun00008_ip = 59; continue _fun00007;
 41:
            michal = global;
            michal = michal.location;
            michal = michal.origin;
            entity = michal + zuuluu;
 59:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: makeItem
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            yankee = argBar;
            verify = arguments[2];
            option = undefined;
            if(!(verify === option)) { _fun00010_ip = 17; continue _fun00009 }
 15:
            verify = true;
 17:
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 6;
            zuuluu = oscard[entity];
            foxtra = michal.bind(option)(zuuluu);
            romeon = foxtra.computeChannelName;
            output = _closure1_slot4;
            sizing = _closure1_slot3;
            kiloes = true;
            echoed = foxtra;
            result = tangon;
            zuuluu = echoed[romeon](result, output, sizing, kiloes, backup);
            entity = oscard[entity];
            golfie = michal.bind(option)(entity);
            oscard = golfie.computeChannelName;
            output = _closure1_slot4;
            sizing = _closure1_slot3;
            backup = false;
            echoed = golfie;
            result = tangon;
            kiloes = false;
            romeon = echoed[oscard](result, output, sizing, kiloes, backup);
            entity = null;
            oscard = entity == yankee;
            michal = undefined;
            if(oscard) { _fun00010_ip = 120; continue _fun00009 }
 114:
            michal = yankee.properties;
 120:
            oscard = entity != michal;
            michal = '';
            if(!oscard) { _fun00010_ip = 160; continue _fun00009 }
 131:
            oscard = yankee.properties;
            golfie = oscard.name;
            oscard = ' (';
            golfie = oscard + golfie;
            oscard = ')';
            michal = golfie + oscard;
 160:
            golfie = zuuluu + michal;
            michal = new Array(2);
            michal[0] = zuuluu;
            michal[1] = romeon;
            zuuluu = new Array(0);
            offset = entity == yankee;
            oscard = undefined;
            if(offset) { _fun00010_ip = 195; continue _fun00009 }
 189:
            oscard = yankee.properties;
 195:
            if(!(entity != oscard)) { _fun00010_ip = 220; continue _fun00009 }
 199:
            offset = zuuluu.push;
            oscard = yankee.properties;
            oscard = oscard.name;
            oscard = offset.bind(zuuluu)(oscard);
 220:
            offset = tangon.type;
            oscard = _closure1_slot6;
            oscard = oscard.GUILD_VOICE;
            if(!(offset === oscard)) { _fun00010_ip = 257; continue _fun00009 }
 239:
            offset = michal.push;
            oscard = '!';
            oscard = oscard + romeon;
            oscard = offset.bind(michal)(oscard);
 257:
            oscard = undefined;
            if(!verify) { _fun00010_ip = 307; continue _fun00009 }
 262:
            offset = _closure1_slot12;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            verify = 7;
            verify = foxtra[verify];
            foxtra = romeon.bind(option)(verify);
            romeon = foxtra.getChannelIconURL;
            verify = 128;
            verify = romeon.bind(foxtra)(tangon, verify, backup);
            oscard = offset.bind(option)(verify);
 307:
            offset = _closure1_slot7;
            verify = offset.CHANNEL;
            romeon = entity == yankee;
            option = undefined;
            if(romeon) { _fun00010_ip = 331; continue _fun00009 }
 326:
            option = yankee.id;
 331:
            if(!(entity == option)) { _fun00010_ip = 339; continue _fun00009 }
 335:
            option = _closure1_slot5;
 339:
            entity = tangon.id;
            option = verify.bind(offset)(option, entity);
            entity = {};
            entity['id'] = option;
            entity['relatedUniqueIdentifier'] = option;
            option = 'url';
            entity['type'] = option;
            entity['title'] = golfie;
            entity['displayName'] = golfie;
            entity['thumbnailURL'] = oscard;
            oscard = tangon.type;
            tangon = _closure1_slot6;
            tangon = tangon.DM;
            if(!(oscard !== tangon)) { _fun00010_ip = 415; continue _fun00009 }
 403:
            tangon = _closure1_slot9;
            tangon = tangon.OTHER_CHANNEL;
            _fun00010_ip = 425; continue _fun00009;
 415:
            report = _closure1_slot9;
            tangon = report.DM;
 425:
            entity['rankingHint'] = tangon;
            entity['keywords'] = zuuluu;
            entity['alternateNames'] = michal;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ME;
    var _closure1_slot5 = option;
    option = tangon.ChannelTypes;
    var _closure1_slot6 = option;
    tangon = tangon.Routes;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'NativeSearch';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot8 = tangon;
    tangon = {};
    option = 100;
    tangon['GUILD'] = option;
    golfie = 'GUILD';
    tangon[option] = golfie;
    option = 75;
    tangon['DM'] = option;
    golfie = 'DM';
    tangon[option] = golfie;
    option = 50;
    tangon['OTHER_CHANNEL'] = option;
    golfie = 'OTHER_CHANNEL';
    tangon[option] = golfie;
    var _closure1_slot9 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/native_intents/NativeSearch.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: clearSearchIndex
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.getCurrentConfig;
            zuuluu = {};
            oscard = 'clearSearchIndex';
            zuuluu['location'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.clearEnabled;
            if(!zuuluu) { _fun00012_ip = 142; continue _fun00011 }
 57: // try_start_0
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            report = zuuluu.ipc;
            tangon = report.invoke;
            zuuluu = 'DISCORD_SEARCH_CLEAR_INDEX';
            zuuluu = tangon.bind(report)(zuuluu);
 100: // try_end0
            _fun00012_ip = 142; continue _fun00011;
 102: // catch_target0
            CatchBlockStart(arg_register=5);
            tangon = _closure1_slot8;
            zuuluu = tangon.warn;
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            michal = 'clearSearchIndex: ';
            michal = report.bind(michal)(oscard);
            michal = zuuluu.bind(tangon)(michal);
 142:
            return entity;
        }
    };
    zuuluu['clearSearchIndex'] = tangon;
    tangon = function(argFoo) { // Original name: searchIndexConnectionOpen
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            entity = undefined;
            kiloes = undefined;
            zuuluu = undefined;
            sizing = undefined;
            output = undefined;
            result = undefined;
            echoed = undefined;
            update = undefined;
            source = undefined;
            ctrled = undefined;
            report = undefined;
            golfie = undefined;
            oscard = undefined;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            option = 4;
            option = offset[option];
            offset = verify.bind(entity)(option);
            verify = offset.getCurrentConfig;
            option = {};
            yankee = 'searchIndexConnectionOpen';
            option['location'] = yankee;
            option = verify.bind(offset)(option);
            option = option.searchEnabled;
            if(!option) { _fun00014_ip = 839; continue _fun00013 }
 85: // try_start_0
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            option = 5;
            option = offset[option];
            option = verify.bind(entity)(option);
            offset = option.ipc;
            verify = offset.invoke;
            option = 'DISCORD_SEARCH_CLEAR_INDEX';
            option = verify.bind(offset)(option);
 128: // try_end0
            _fun00014_ip = 170; continue _fun00013;
 130: // catch_target0
            CatchBlockStart(arg_register=11);
            offset = _closure1_slot8;
            verify = offset.warn;
            option = global;
            option = option.HermesInternal;
            yankee = option.concat;
            option = 'searchIndexConnectionOpen: clear: ';
            option = yankee.bind(option)(romeon);
            option = verify.bind(offset)(option);
 170:
            zuuluu = new Array(0);
            verify = _closure1_slot10;
            option = tangon;
            option = option.guilds;
            option = verify.bind(entity)(option);
            sizing = option;
            option = option.bind(entity)();
            kiloes = option;
            option = option.done;
            backup = false;
            foxtra = 8;
            romeon = 128;
            yankee = 'url';
            offset = '*';
            verify = null;
            if(option) { _fun00014_ip = 637; continue _fun00013 }
 231:
            option = kiloes;
            option = option.value;
            output = option;
            option = option.properties;
            if(!(verify != option)) { _fun00014_ip = 616; continue _fun00013 }
 255:
            sequen = _closure1_slot12;
            vacuum = _closure1_slot1;
            option = _closure1_slot2;
            option = option[foxtra];
            record = vacuum.bind(entity)(option);
            config = record.getGuildIconURL;
            vacuum = {};
            option = output;
            cntext = option.id;
            vacuum['id'] = cntext;
            cntext = option.properties;
            cntext = cntext.icon;
            vacuum['icon'] = cntext;
            vacuum['size'] = romeon;
            vacuum = config.bind(record)(vacuum);
            echoed = sequen.bind(entity)(vacuum);
            config = _closure1_slot7;
            sequen = config.CHANNEL;
            vacuum = option.id;
            vacuum = sequen.bind(config)(vacuum);
            sequen = {};
            sequen['id'] = vacuum;
            sequen['relatedUniqueIdentifier'] = vacuum;
            sequen['type'] = yankee;
            vacuum = option.properties;
            vacuum = vacuum.name;
            sequen['title'] = vacuum;
            vacuum = option.properties;
            vacuum = vacuum.name;
            sequen['displayName'] = vacuum;
            vacuum = option.properties;
            config = vacuum.name;
            vacuum = new Array(2);
            vacuum[0] = config;
            config = option.properties;
            config = config.name;
            config = offset + config;
            vacuum[1] = config;
            sequen['keywords'] = vacuum;
            vacuum = _closure1_slot9;
            vacuum = vacuum.GUILD;
            sequen['rankingHint'] = vacuum;
            vacuum = new Array(1);
            vacuum[0] = sequen;
            update = vacuum;
            vacuum = _closure1_slot10;
            option = option.channels;
            ctrled = option;
            if(!(verify == option)) { _fun00014_ip = 482; continue _fun00013 }
 476:
            option = new Array(0);
            _fun00014_ip = 485; continue _fun00013;
 482:
            option = ctrled;
 485:
            option = vacuum.bind(entity)(option);
            source = option;
            option = option.bind(entity)();
            result = option;
            option = option.done;
            if(option) { _fun00014_ip = 561; continue _fun00013 }
 508:
            option = result;
            record = option.value;
            sequen = update;
            vacuum = sequen.push;
            config = _closure1_slot13;
            option = output;
            option = config.bind(entity)(record, option, backup);
            option = vacuum.bind(sequen)(option);
            option = source;
            option = option.bind(entity)();
            result = option;
            option = option.done;
            if(!option) { _fun00014_ip = 508; continue _fun00013 }
 561:
            sequen = zuuluu;
            vacuum = sequen.push;
            option = {};
            config = output;
            record = config.id;
            option['id'] = record;
            config = config.id;
            option['relatedUniqueIdentifier'] = config;
            config = update;
            option['items'] = config;
            config = echoed;
            option['defaultThumbnailURL'] = config;
            option = vacuum.bind(sequen)(option);
 616:
            option = sizing;
            option = option.bind(entity)();
            kiloes = option;
            option = option.done;
            if(!option) { _fun00014_ip = 231; continue _fun00013 }
 637:
            golfie = new Array(0);
            option = _closure1_slot10;
            tangon = tangon.initialPrivateChannels;
            tangon = option.bind(entity)(tangon);
            oscard = tangon;
            tangon = tangon.bind(entity)();
            report = tangon;
            tangon = tangon.done;
            if(tangon) { _fun00014_ip = 722; continue _fun00013 }
 674:
            tangon = report;
            offset = tangon.value;
            verify = golfie;
            option = verify.push;
            tangon = _closure1_slot13;
            tangon = tangon.bind(entity)(offset);
            tangon = option.bind(verify)(tangon);
            tangon = oscard;
            tangon = tangon.bind(entity)();
            report = tangon;
            tangon = tangon.done;
            if(!tangon) { _fun00014_ip = 674; continue _fun00013 }
 722:
            oscard = zuuluu;
            report = oscard.push;
            tangon = {};
            option = _closure1_slot5;
            tangon['id'] = option;
            tangon['items'] = golfie;
            tangon = report.bind(oscard)(tangon);
 750: // try_start_1
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 5;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            oscard = tangon.ipc;
            report = oscard.invoke;
            tangon = zuuluu;
            zuuluu = 'DISCORD_SEARCH_INDEX_DOMAINS';
            zuuluu = report.bind(oscard)(zuuluu, tangon);
 797: // try_end1
            _fun00014_ip = 839; continue _fun00013;
 799: // catch_target1
            CatchBlockStart(arg_register=5);
            tangon = _closure1_slot8;
            zuuluu = tangon.warn;
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            michal = 'searchIndexConnectionOpen: index: ';
            michal = report.bind(michal)(oscard);
            michal = zuuluu.bind(tangon)(michal);
 839:
            return entity;
        }
    };
    zuuluu['searchIndexConnectionOpen'] = tangon;
    michal = function(argFoo) { // Original name: searchIndexLazyPrivateChannels
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = undefined;
            tangon = undefined;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 4;
            zuuluu = oscard[zuuluu];
            oscard = report.bind(entity)(zuuluu);
            report = oscard.getCurrentConfig;
            zuuluu = {};
            golfie = 'searchIndexLazyPrivateChannels';
            zuuluu['location'] = golfie;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.searchEnabled;
            if(!zuuluu) { _fun00016_ip = 239; continue _fun00015 }
 60:
            tangon = new Array(0);
            report = _closure1_slot10;
            zuuluu = argFoo;
            oscard = report.bind(entity)(zuuluu);
            report = oscard.bind(entity)();
            zuuluu = report.done;
            if(zuuluu) { _fun00016_ip = 130; continue _fun00015 }
 88:
            verify = report.value;
            option = tangon;
            golfie = option.push;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(entity)(verify);
            zuuluu = golfie.bind(option)(zuuluu);
            golfie = oscard.bind(entity)();
            zuuluu = golfie.done;
            report = golfie;
            if(!zuuluu) { _fun00016_ip = 88; continue _fun00015 }
 130: // try_start_0
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 5;
            zuuluu = oscard[zuuluu];
            zuuluu = report.bind(entity)(zuuluu);
            oscard = zuuluu.ipc;
            report = oscard.invoke;
            zuuluu = {};
            golfie = _closure1_slot5;
            zuuluu['id'] = golfie;
            zuuluu['items'] = tangon;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = 'DISCORD_SEARCH_INDEX_DOMAINS';
            zuuluu = report.bind(oscard)(zuuluu, tangon);
 197: // try_end0
            _fun00016_ip = 239; continue _fun00015;
 199: // catch_target0
            CatchBlockStart(arg_register=5);
            tangon = _closure1_slot8;
            zuuluu = tangon.warn;
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            michal = 'searchIndexLazyPrivateChannels: ';
            michal = report.bind(michal)(oscard);
            michal = zuuluu.bind(tangon)(michal);
 239:
            return entity;
        }
    };
    zuuluu['searchIndexLazyPrivateChannels'] = michal;
    return entity;
})();