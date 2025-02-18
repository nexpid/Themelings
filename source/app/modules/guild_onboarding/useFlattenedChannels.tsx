// app/modules/guild_onboarding/useFlattenedChannels.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
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
            verify = _closure1_slot5;
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
            golfie = _closure1_slot5;
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
    var _closure1_slot4 = entity;
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
    var _closure1_slot5 = entity;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getFlattenedChannels
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            offset = argBaz;
            entity = arguments[3];
            michal = argBar;
            var _closure2_slot0 = michal;
            var _closure2_slot1 = offset;
            oscard = undefined;
            if(!(entity === oscard)) { _fun00008_ip = 27; continue _fun00007 }
 25:
            entity = false;
 27:
            var _closure2_slot2 = entity;
            var _closure2_slot3 = oscard;
            var _closure2_slot4 = oscard;
            var _closure2_slot5 = oscard;
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 1;
            zuuluu = golfie[entity];
            option = report.bind(oscard)(zuuluu);
            yankee = _closure1_slot3;
            verify = yankee.getMutableGuildChannelsForGuild;
            zuuluu = argFoo;
            zuuluu = verify.bind(yankee)(zuuluu);
            option = option.bind(oscard)(zuuluu);
            zuuluu = option.values;
            verify = zuuluu.bind(option)();
            option = verify.groupBy;
            zuuluu = 'parent_id';
            option = option.bind(verify)(zuuluu);
            zuuluu = option.value;
            zuuluu = zuuluu.bind(option)();
            _closure2_slot3 = zuuluu;
            zuuluu = golfie[entity];
            zuuluu = report.bind(oscard)(zuuluu);
            verify = zuuluu.bind(oscard)(offset);
            option = verify.map;
            zuuluu = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    entity = michal.isCategory;
                    entity = entity.bind(michal)();
                    if(entity) { _fun00010_ip = 24; continue _fun00009 }
 16:
                    entity = michal.parent_id;
                    _fun00010_ip = 29; continue _fun00009;
 24:
                    entity = michal.id;
 29:
                    return entity;
                }
            };
            romeon = option.bind(verify)(zuuluu);
            verify = romeon.filter;
            yankee = _closure1_slot0;
            zuuluu = 2;
            option = golfie[zuuluu];
            option = yankee.bind(oscard)(option);
            option = option.isNotNullish;
            verify = verify.bind(romeon)(option);
            option = verify.uniq;
            romeon = option.bind(verify)();
            verify = romeon.map;
            option = function(argFoo) {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getChannel;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = verify.bind(romeon)(option);
            option = verify.filter;
            zuuluu = golfie[zuuluu];
            zuuluu = yankee.bind(oscard)(zuuluu);
            zuuluu = zuuluu.isNotNullish;
            verify = option.bind(verify)(zuuluu);
            option = verify.sortBy;
            zuuluu = 'position';
            option = option.bind(verify)(zuuluu);
            zuuluu = option.value;
            zuuluu = zuuluu.bind(option)();
            option = global;
            yankee = option.Set;
            verify = zuuluu.map;
            option = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            backup = verify.bind(zuuluu)(option);
            verify = yankee.prototype;
            verify = Object.create(verify, {constructor: {value: yankee}});
            kiloes = verify;
            option = new kiloes[yankee](backup, foxtra);
            option = option instanceof Object ? option : verify;
            _closure2_slot4 = option;
            verify = offset.filter;
            option = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu.isCategory;
                    entity = entity.bind(zuuluu)();
                    if(entity) { _fun00012_ip = 57; continue _fun00011 }
 16:
                    tangon = zuuluu.parent_id;
                    michal = null;
                    michal = michal != tangon;
                    if(!michal) { _fun00012_ip = 54; continue _fun00011 }
 31:
                    report = _closure2_slot4;
                    tangon = report.has;
                    zuuluu = zuuluu.parent_id;
                    michal = tangon.bind(report)(zuuluu);
 54:
                    entity = michal;
 57:
                    entity = !entity;
                    return entity;
                }
            };
            option = verify.bind(offset)(option);
            _closure2_slot5 = option;
            entity = golfie[entity];
            golfie = report.bind(oscard)(entity);
            report = golfie.sortBy;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = argFoo;
                    entity = michal.isGuildVocal;
                    entity = entity.bind(michal)();
                    zuuluu = michal.position;
                    if(entity) { _fun00014_ip = 26; continue _fun00013 }
 21:
                    entity = zuuluu;
                    _fun00014_ip = 36; continue _fun00013;
 26:
                    michal = 10000;
                    entity = zuuluu + michal;
 36:
                    return entity;
                }
            };
            entity = report.bind(golfie)(option, entity);
            _closure2_slot5 = entity;
            report = function(argFoo) { // Original name: _loop
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    tangon = _closure2_slot2;
                    if(tangon) { _fun00016_ip = 33; continue _fun00015 }
 19:
                    report = _closure2_slot5;
                    tangon = report.push;
                    tangon = tangon.bind(report)(entity);
 33:
                    oscard = _closure2_slot0;
                    report = oscard.has;
                    tangon = entity.id;
                    tangon = report.bind(oscard)(tangon);
                    if(tangon) { _fun00016_ip = 76; continue _fun00015 }
 55:
                    oscard = _closure2_slot1;
                    report = oscard.filter;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        michal = entity.parent_id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    oscard = report.bind(oscard)(tangon);
                    _fun00016_ip = 89; continue _fun00015;
 76:
                    tangon = _closure2_slot3;
                    entity = entity.id;
                    oscard = tangon[entity];
 89:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 1;
                    tangon = tangon[entity];
                    entity = undefined;
                    report = report.bind(entity)(tangon);
                    tangon = report.sortBy;
                    golfie = null;
                    if(!(golfie == oscard)) { _fun00016_ip = 130; continue _fun00015 }
 126:
                    oscard = new Array(0);
 130:
                    zuuluu = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            michal = argFoo;
                            entity = michal.isGuildVocal;
                            entity = entity.bind(michal)();
                            zuuluu = michal.position;
                            if(entity) { _fun00018_ip = 26; continue _fun00017 }
 21:
                            entity = zuuluu;
                            _fun00018_ip = 36; continue _fun00017;
 26:
                            michal = 10000;
                            entity = zuuluu + michal;
 36:
                            return entity;
                        }
                    };
                    verify = tangon.bind(report)(oscard, zuuluu);
                    tangon = _closure2_slot5;
                    zuuluu = tangon.push;
                    michal = new Array(0);
                    option = 0;
                    offset = michal;
                    report = arraySpread(offset, verify, option);
                    offset = zuuluu;
                    verify = michal;
                    option = tangon;
                    michal = apply(offset, verify, option);
                    return entity;
                }
            };
            michal = _closure1_slot4;
            tangon = michal.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(oscard)();
            michal = zuuluu.done;
            if(michal) { _fun00008_ip = 408; continue _fun00007 }
 383:
            michal = zuuluu.value;
            michal = report.bind(oscard)(michal);
            golfie = tangon.bind(oscard)();
            michal = golfie.done;
            zuuluu = golfie;
            if(!michal) { _fun00008_ip = 383; continue _fun00007 }
 408:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_onboarding/useFlattenedChannels.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getFlattenedChannels'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useFlattenedChannels
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = arguments[2];
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            zuuluu = argBar;
            var _closure2_slot1 = zuuluu;
            report = undefined;
            if(!(michal === report)) { _fun00020_ip = 27; continue _fun00019 }
 25:
            michal = false;
 27:
            var _closure2_slot2 = michal;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 3;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useStateFromStoresArray;
            report = _closure1_slot3;
            michal = new Array(1);
            michal[0] = report;
            entity = function() {
                entity = global;
                zuuluu = entity.Array;
                michal = zuuluu.from;
                oscard = _closure2_slot1;
                tangon = michal.bind(zuuluu)(oscard);
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot3;
                    michal = zuuluu.getChannel;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                golfie = zuuluu.bind(tangon)(michal);
                tangon = golfie.filter;
                option = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 2;
                zuuluu = report[zuuluu];
                report = undefined;
                zuuluu = option.bind(report)(zuuluu);
                zuuluu = zuuluu.isNotNullish;
                offset = tangon.bind(golfie)(zuuluu);
                zuuluu = _closure1_slot6;
                romeon = _closure2_slot0;
                verify = _closure2_slot2;
                foxtra = undefined;
                yankee = oscard;
                entity = foxtra[zuuluu](romeon, yankee, offset, verify, option);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['useFlattenedChannels'] = michal;
    return entity;
})();