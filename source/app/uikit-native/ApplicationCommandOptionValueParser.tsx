// app/uikit-native/ApplicationCommandOptionValueParser.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot16;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot16;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    var _closure1_slot16 = entity;
    golfie = function(argFoo) { // Original name: getUsers
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.getGuildId;
            option = zuuluu.bind(michal)();
            zuuluu = michal.isPrivate;
            zuuluu = zuuluu.bind(michal)();
            if(zuuluu) { _fun00008_ip = 134; continue _fun00007 }
 28:
            zuuluu = null;
            if(!(zuuluu == option)) { _fun00008_ip = 70; continue _fun00007 }
 34:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 9;
            zuuluu = report[zuuluu];
            report = undefined;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = new Array(0);
            tangon = tangon.bind(report)(zuuluu);
            _fun00008_ip = 132; continue _fun00007;
 70:
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            report = 9;
            report = oscard[report];
            oscard = undefined;
            report = golfie.bind(oscard)(report);
            golfie = _closure1_slot7;
            zuuluu = golfie.getMembers;
            zuuluu = zuuluu.bind(golfie)(option);
            oscard = report.bind(oscard)(zuuluu);
            report = oscard.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.userId;
                entity = {};
                entity['userId'] = michal;
                return entity;
            };
            tangon = report.bind(oscard)(zuuluu);
 132:
            _fun00008_ip = 187; continue _fun00007;
 134:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 9;
            zuuluu = report[zuuluu];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            michal = michal.recipients;
            report = zuuluu.bind(report)(michal);
            zuuluu = report.map;
            michal = function(argFoo) {
                entity = {};
                michal = argFoo;
                entity['userId'] = michal;
                return entity;
            };
            tangon = zuuluu.bind(report)(michal);
 187:
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.userId;
                michal = _closure1_slot9;
                entity = michal.getUser;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            michal = 10;
            report = report[michal];
            michal = undefined;
            michal = oscard.bind(michal)(report);
            michal = michal.isNotNullish;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                michal = argFoo;
                entity = {};
                zuuluu = michal.id;
                entity['id'] = zuuluu;
                michal = michal.tag;
                entity['text'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot17 = golfie;
    oscard = function(argFoo) { // Original name: getRoles
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            tangon = entity.guild_id;
            entity = null;
            if(!(entity == tangon)) { _fun00010_ip = 18; continue _fun00009 }
 14:
            zuuluu = {};
            _fun00010_ip = 36; continue _fun00009;
 18:
            michal = _closure1_slot8;
            entity = michal.getRoles;
            zuuluu = entity.bind(michal)(tangon);
 36:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            entity = michal[entity];
            michal = undefined;
            entity = tangon.bind(michal)(entity);
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.id;
                michal = entity.name;
                entity = {};
                entity['id'] = zuuluu;
                entity['text'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot18 = oscard;
    report = function(argFoo, argBar) { // Original name: getChannels
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            golfie = argBar;
            var _closure2_slot0 = golfie;
            michal = zuuluu.getGuildId;
            verify = michal.bind(zuuluu)();
            var _closure2_slot1 = verify;
            michal = null;
            if(!(michal != verify)) { _fun00012_ip = 166; continue _fun00011 }
 35:
            oscard = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 9;
            report = yankee[report];
            option = undefined;
            oscard = oscard.bind(option)(report);
            offset = _closure1_slot0;
            report = 11;
            report = yankee[report];
            report = offset.bind(option)(report);
            report = report.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
            option = oscard.bind(option)(report);
            oscard = option.flatMap;
            report = function(argFoo) {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannels;
                entity = _closure2_slot1;
                michal = michal.bind(zuuluu)(entity);
                entity = argFoo;
                zuuluu = michal[entity];
                michal = zuuluu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.channel;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = oscard.bind(option)(report);
            report = oscard.concat;
            option = _closure1_slot5;
            tangon = option.computeAllActiveJoinedThreads;
            tangon = tangon.bind(option)(verify);
            oscard = report.bind(oscard)(tangon);
            report = oscard.filter;
            tangon = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity == zuuluu;
                    if(entity) { _fun00014_ip = 38; continue _fun00013 }
 16:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.includes;
                    michal = argFoo;
                    michal = michal.type;
                    entity = zuuluu.bind(tangon)(michal);
 38:
                    return entity;
                }
            };
            oscard = report.bind(oscard)(tangon);
            report = oscard.map;
            tangon = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.id;
                michal = entity.name;
                entity = {};
                entity['id'] = zuuluu;
                entity['text'] = michal;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            return tangon;
 166:
            tangon = new Array(0);
            michal = michal == golfie;
            if(michal) { _fun00012_ip = 192; continue _fun00011 }
 177:
            oscard = golfie.includes;
            report = zuuluu.type;
            michal = oscard.bind(golfie)(report);
 192:
            if(!michal) { _fun00012_ip = 205; continue _fun00011 }
 195:
            michal = tangon.push;
            michal = michal.bind(tangon)(zuuluu);
 205:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 9;
            michal = zuuluu[michal];
            zuuluu = undefined;
            michal = report.bind(zuuluu)(michal);
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.id;
                michal = entity.name;
                entity = {};
                entity['id'] = zuuluu;
                entity['text'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot19 = report;
    entity = global;
    romeon = entity.Object;
    option = romeon.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(romeon)(zuuluu, entity, tangon);
    entity = 0;
    tangon = offset[entity];
    entity = undefined;
    option = yankee.bind(entity)(tangon);
    tangon = 1;
    tangon = offset[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    romeon = offset[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(romeon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = offset[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = offset[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = offset[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = offset[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = offset[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = offset[tangon];
    tangon = verify.bind(entity)(tangon);
    yankee = tangon.MENTION_SENTINEL;
    var _closure1_slot10 = yankee;
    tangon = tangon.CHANNEL_SENTINEL;
    var _closure1_slot11 = tangon;
    tangon = /^@(([^@#:]+)#([0-9]{4}))$/i;
    var _closure1_slot12 = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: matchPrefix
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            report = argBar;
            tangon = argBaz;
            var _closure2_slot0 = michal;
            zuuluu = 0;
            zuuluu = report[zuuluu];
            if(!(zuuluu === michal)) { _fun00016_ip = 109; continue _fun00015 }
 25:
            zuuluu = report.substr;
            michal = michal.length;
            michal = zuuluu.bind(report)(michal);
            var _closure2_slot1 = michal;
            zuuluu = tangon.sortBy;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.text;
                entity = entity.length;
                entity = -entity;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.text;
                michal = _closure2_slot1;
                entity = michal.toLowerCase;
                michal = entity.bind(michal)();
                entity = zuuluu.toLowerCase;
                entity = entity.bind(zuuluu)();
                entity = michal === entity;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                tangon = entity.text;
                entity = {};
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu + tangon;
                entity['text'] = zuuluu;
                entity['id'] = michal;
                return entity;
            };
            michal = michal.bind(zuuluu)(entity);
            entity = michal.first;
            entity = entity.bind(michal)();
            return entity;
 109:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    tangon = function(argFoo) { // Original name: ApplicationCommandOptionValueParser
        zuuluu = this;
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot3;
        tangon = _closure1_slot20;
        entity = undefined;
        tangon = report.bind(entity)(zuuluu, tangon);
        michal = function(argFoo, argBar) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                verify = argFoo;
                golfie = argBar;
                michal = verify.trim;
                romeon = michal.bind(verify)();
                var _closure3_slot0 = romeon;
                tangon = _closure1_slot17;
                michal = _closure2_slot0;
                zuuluu = michal.channel;
                offset = undefined;
                tangon = tangon.bind(offset)(zuuluu);
                var _closure3_slot1 = tangon;
                zuuluu = _closure1_slot18;
                michal = michal.channel;
                michal = zuuluu.bind(offset)(michal);
                var _closure3_slot2 = michal;
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    michal = argFoo;
                    entity = {};
                    oscard = entity;
                    report = michal;
                    zuuluu = copyDataProperties(oscard, report);
                    tangon = michal.text;
                    zuuluu = tangon.split;
                    michal = '#';
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = 0;
                    zuuluu = zuuluu[michal];
                    michal = 'text';
                    entity[michal] = zuuluu;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                var _closure3_slot3 = michal;
                oscard = function() { // Original name: matchUser
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        golfie = _closure1_slot13;
                        oscard = _closure1_slot10;
                        report = _closure3_slot0;
                        zuuluu = _closure3_slot1;
                        entity = undefined;
                        zuuluu = golfie.bind(entity)(oscard, report, zuuluu);
                        report = null;
                        golfie = report == zuuluu;
                        oscard = undefined;
                        if(golfie) { _fun00020_ip = 47; continue _fun00019 }
 42:
                        oscard = zuuluu.id;
 47:
                        if(!(report == oscard)) { _fun00020_ip = 100; continue _fun00019 }
 51:
                        golfie = _closure1_slot13;
                        oscard = _closure1_slot10;
                        tangon = _closure3_slot0;
                        michal = _closure3_slot3;
                        tangon = golfie.bind(entity)(oscard, tangon, michal);
                        oscard = report == tangon;
                        michal = undefined;
                        if(oscard) { _fun00020_ip = 88; continue _fun00019 }
 83:
                        michal = tangon.id;
 88:
                        michal = report != michal;
                        zuuluu = tangon;
                        entity = undefined;
                        if(!michal) { _fun00020_ip = 124; continue _fun00019 }
 100:
                        michal = {};
                        tangon = 'userMention';
                        michal['type'] = tangon;
                        zuuluu = zuuluu.id;
                        michal['userId'] = zuuluu;
                        entity = michal;
 124:
                        return entity;
                    }
                };
                tangon = function() { // Original name: matchRole
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        oscard = _closure1_slot13;
                        report = _closure1_slot10;
                        tangon = _closure3_slot0;
                        zuuluu = _closure3_slot2;
                        entity = undefined;
                        zuuluu = oscard.bind(entity)(report, tangon, zuuluu);
                        report = null;
                        oscard = report == zuuluu;
                        tangon = undefined;
                        if(oscard) { _fun00022_ip = 47; continue _fun00021 }
 42:
                        tangon = zuuluu.id;
 47:
                        if(!(report == tangon)) { _fun00022_ip = 83; continue _fun00021 }
 51:
                        tangon = _closure3_slot0;
                        michal = '@everyone';
                        entity = undefined;
                        if(!(michal === tangon)) { _fun00022_ip = 81; continue _fun00021 }
 67:
                        entity = {'type': 'textMention', 'text': '@everyone'};
 81:
                        _fun00022_ip = 106; continue _fun00021;
 83:
                        michal = {};
                        tangon = 'roleMention';
                        michal['type'] = tangon;
                        zuuluu = zuuluu.id;
                        michal['roleId'] = zuuluu;
                        entity = michal;
 106:
                        return entity;
                    }
                };
                michal = golfie.type;
                zuuluu = _closure1_slot0;
                entity = _closure1_slot2;
                backup = 12;
                entity = entity[backup];
                entity = zuuluu.bind(offset)(entity);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.USER;
                if(!(michal === entity)) { _fun00018_ip = 223; continue _fun00017 }
 146:
                entity = oscard.bind(offset)();
                michal = null;
                if(!(michal == entity)) { _fun00018_ip = 576; continue _fun00017 }
 159:
                yankee = _closure1_slot12;
                zuuluu = 0;
                yankee['lastIndex'] = zuuluu;
                zuuluu = yankee.exec;
                sizing = zuuluu.bind(yankee)(romeon);
                if(!(michal != sizing)) { _fun00018_ip = 223; continue _fun00017 }
 186:
                kiloes = _closure1_slot9;
                foxtra = kiloes.findByTag;
                zuuluu = 2;
                yankee = sizing[zuuluu];
                zuuluu = 3;
                zuuluu = sizing[zuuluu];
                zuuluu = foxtra.bind(kiloes)(yankee, zuuluu);
                if(!(michal == zuuluu)) { _fun00018_ip = 553; continue _fun00017 }
 223:
                yankee = golfie.type;
                foxtra = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[backup];
                michal = foxtra.bind(offset)(michal);
                michal = michal.ApplicationCommandOptionType;
                michal = michal.ROLE;
                if(!(yankee === michal)) { _fun00018_ip = 274; continue _fun00017 }
 261:
                michal = tangon.bind(offset)();
                yankee = null;
                if(!(yankee == michal)) { _fun00018_ip = 551; continue _fun00017 }
 274:
                foxtra = golfie.type;
                kiloes = _closure1_slot0;
                yankee = _closure1_slot2;
                yankee = yankee[backup];
                yankee = kiloes.bind(offset)(yankee);
                yankee = yankee.ApplicationCommandOptionType;
                yankee = yankee.CHANNEL;
                if(!(foxtra === yankee)) { _fun00018_ip = 370; continue _fun00017 }
 312:
                foxtra = _closure1_slot13;
                yankee = _closure1_slot11;
                sizing = _closure1_slot19;
                report = _closure2_slot0;
                kiloes = report.channel;
                report = golfie.channelTypes;
                report = sizing.bind(offset)(kiloes, report);
                report = foxtra.bind(offset)(yankee, romeon, report);
                foxtra = null;
                if(!(foxtra != report)) { _fun00018_ip = 370; continue _fun00017 }
 358:
                yankee = report.id;
                if(!(foxtra == yankee)) { _fun00018_ip = 530; continue _fun00017 }
 370:
                yankee = golfie.type;
                foxtra = _closure1_slot0;
                golfie = _closure1_slot2;
                golfie = golfie[backup];
                golfie = foxtra.bind(offset)(golfie);
                golfie = golfie.ApplicationCommandOptionType;
                golfie = golfie.MENTIONABLE;
                if(!(yankee === golfie)) { _fun00018_ip = 487; continue _fun00017 }
 408:
                tangon = tangon.bind(offset)();
                golfie = null;
                if(!(golfie == tangon)) { _fun00018_ip = 528; continue _fun00017 }
 418:
                oscard = oscard.bind(offset)();
                if(!(golfie == oscard)) { _fun00018_ip = 526; continue _fun00017 }
 426:
                yankee = _closure1_slot12;
                offset = 0;
                yankee['lastIndex'] = offset;
                offset = yankee.exec;
                foxtra = offset.bind(yankee)(romeon);
                if(!(golfie != foxtra)) { _fun00018_ip = 487; continue _fun00017 }
 453:
                romeon = _closure1_slot9;
                yankee = romeon.findByTag;
                option = 2;
                offset = foxtra[option];
                option = 3;
                option = foxtra[option];
                option = yankee.bind(romeon)(offset, option);
                if(!(golfie == option)) { _fun00018_ip = 503; continue _fun00017 }
 487:
                golfie = {};
                offset = 'text';
                golfie['type'] = offset;
                golfie['text'] = verify;
                return golfie;
 503:
                golfie = {};
                verify = 'userMention';
                golfie['type'] = verify;
                option = option.id;
                golfie['userId'] = option;
                return golfie;
 526:
                return oscard;
 528:
                return tangon;
 530:
                tangon = {};
                oscard = 'channelMention';
                tangon['type'] = oscard;
                report = report.id;
                tangon['channelId'] = report;
                return tangon;
 551:
                return michal;
 553:
                michal = {};
                tangon = 'userMention';
                michal['type'] = tangon;
                zuuluu = zuuluu.id;
                michal['userId'] = zuuluu;
                return michal;
 576:
                return entity;
            }
        };
        zuuluu['parse'] = michal;
        michal = argFoo;
        zuuluu['channel'] = michal;
        return entity;
    };
    var _closure1_slot20 = tangon;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    option = 14;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'uikit-native/ApplicationCommandOptionValueParser.tsx';
    option = verify.bind(offset)(option);
    zuuluu['getUsers'] = golfie;
    zuuluu['getRoles'] = oscard;
    zuuluu['getChannels'] = report;
    zuuluu['ApplicationCommandOptionValueParser'] = tangon;
    tangon = function(argFoo, argBar, argBaz) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            backup = argFoo;
            michal = argBar;
            foxtra = argBaz;
            entity = michal.options;
            romeon = null;
            if(!(romeon != entity)) { _fun00024_ip = 295; continue _fun00023 }
 23:
            entity = {};
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            offset = 13;
            zuuluu = zuuluu[offset];
            verify = undefined;
            tangon = tangon.bind(verify)(zuuluu);
            zuuluu = tangon.createParserState;
            option = zuuluu.bind(tangon)(backup);
            zuuluu = _closure1_slot15;
            michal = michal.options;
            golfie = zuuluu.bind(verify)(michal);
            zuuluu = golfie.bind(verify)();
            michal = zuuluu.done;
            oscard = 'text';
            report = 0;
            tangon = 12;
            if(michal) { _fun00024_ip = 293; continue _fun00023 }
 99:
            michal = zuuluu.value;
            kiloes = michal.name;
            kiloes = foxtra[kiloes];
            if(!(romeon != kiloes)) { _fun00024_ip = 275; continue _fun00023 }
 120:
            sizing = kiloes[report];
            sizing = sizing.type;
            if(!(oscard === sizing)) { _fun00024_ip = 266; continue _fun00023 }
 136:
            output = michal.type;
            result = _closure1_slot0;
            sizing = _closure1_slot2;
            sizing = sizing[tangon];
            sizing = result.bind(verify)(sizing);
            sizing = sizing.ApplicationCommandOptionType;
            sizing = sizing.STRING;
            if(!(output === sizing)) { _fun00024_ip = 266; continue _fun00023 }
 174:
            sizing = michal.choices;
            if(!(romeon == sizing)) { _fun00024_ip = 266; continue _fun00023 }
 184:
            sizing = michal.autocomplete;
            if(sizing) { _fun00024_ip = 266; continue _fun00023 }
 193:
            output = michal.name;
            result = {};
            result['type'] = oscard;
            echoed = _closure1_slot1;
            sizing = _closure1_slot2;
            sizing = sizing[offset];
            update = echoed.bind(verify)(sizing);
            echoed = update.parse;
            sizing = kiloes[report];
            sizing = sizing.text;
            sizing = echoed.bind(update)(backup, sizing, option);
            sizing = sizing.content;
            result['text'] = sizing;
            sizing = new Array(1);
            sizing[0] = result;
            entity[output] = sizing;
            _fun00024_ip = 275; continue _fun00023;
 266:
            michal = michal.name;
            entity[michal] = kiloes;
 275:
            kiloes = golfie.bind(verify)();
            michal = kiloes.done;
            zuuluu = kiloes;
            if(!michal) { _fun00024_ip = 99; continue _fun00023 }
 293:
            return entity;
 295:
            entity = {};
            return entity;
        }
    };
    zuuluu['parseOptionValuesForSend'] = tangon;
    michal = function(argFoo) {
        michal = argFoo;
        report = michal.channel;
        var _closure2_slot0 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure1_slot14;
            tangon = _closure2_slot0;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useApplicationCommandOptionValueParser'] = michal;
    return entity;
})();