// app/modules/app_database/modules/messages/withFallbacks.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
 343:
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
    entity = function(argFoo) { // Original name: isSaveableChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.type;
            entity = _closure1_slot5;
            entity = entity.DM;
            entity = tangon === entity;
            if(entity) { _fun00008_ip = 47; continue _fun00007 }
 28:
            report = zuuluu.type;
            tangon = _closure1_slot5;
            tangon = tangon.GROUP_DM;
            entity = report === tangon;
 47:
            if(entity) { _fun00008_ip = 69; continue _fun00007 }
 50:
            zuuluu = zuuluu.type;
            michal = _closure1_slot5;
            michal = michal.GUILD_TEXT;
            entity = zuuluu === michal;
 69:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: addFallback
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argBar;
            tangon = argBaz;
            michal = tangon.hasExtended;
            entity = report.id;
            entity = michal.bind(tangon)(entity);
            if(entity) { _fun00010_ip = 79; continue _fun00009 }
 27:
            zuuluu = tangon.put;
            michal = report.id;
            entity = {};
            oscard = argFoo;
            entity['guildId'] = oscard;
            oscard = report.id;
            entity['channelId'] = oscard;
            report = report.type;
            entity['channelType'] = report;
            report = true;
            entity['fallback'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
 79:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: mergeInto
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot6;
            michal = tangon.allEntries;
            michal = michal.bind(tangon)();
            option = undefined;
            golfie = zuuluu.bind(option)(michal);
            zuuluu = golfie.bind(option)();
            michal = zuuluu.done;
            oscard = 2;
            report = 0;
            tangon = 1;
            if(michal) { _fun00012_ip = 102; continue _fun00011 }
 52:
            offset = zuuluu.value;
            michal = _closure1_slot2;
            michal = michal.bind(option)(offset, oscard);
            yankee = michal[report];
            offset = michal[tangon];
            michal = entity.put;
            michal = michal.bind(entity)(yankee, offset);
            offset = golfie.bind(option)();
            michal = offset.done;
            zuuluu = offset;
            if(!michal) { _fun00012_ip = 52; continue _fun00011 }
 102:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_database/modules/messages/withFallbacks.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: withFallbacks
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            oscard = argBar;
            michal = entity.totalLength;
            if(!(!(michal >= oscard))) { _fun00014_ip = 441; continue _fun00013 }
 19:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 4;
            michal = tangon[michal];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            option = michal.ExtendedMemoryLru;
            target = entity.primaryCapacity;
            papara = entity.extendedCapacity;
            report = option.prototype;
            report = Object.create(report, {constructor: {value: option}});
            status = report;
            michal = new status[option](target, papara, cntext);
            michal = michal instanceof Object ? michal : report;
            report = entity.totalLength;
            sizing = oscard - report;
            oscard = _closure1_slot6;
            golfie = _closure1_slot4;
            report = golfie.getGuildFolders;
            report = report.bind(golfie)();
            kiloes = oscard.bind(tangon)(report);
            oscard = kiloes.bind(tangon)();
            report = oscard.done;
            backup = global;
            foxtra = 0;
            romeon = 6;
            yankee = 5;
            offset = oscard;
            verify = undefined;
            option = undefined;
            golfie = undefined;
            oscard = undefined;
            if(report) { _fun00014_ip = 429; continue _fun00013 }
 151:
            output = _closure1_slot6;
            report = offset.value;
            report = report.guildIds;
            echoed = output.bind(tangon)(report);
            output = echoed.bind(tangon)();
            report = output.done;
            result = output;
            output = oscard;
            oscard = output;
            if(report) { _fun00014_ip = 411; continue _fun00013 }
 195:
            vacuum = result.value;
            source = backup.Object;
            update = source.values;
            ctrled = _closure1_slot3;
            report = ctrled.getMutableBasicGuildChannelsForGuild;
            report = report.bind(ctrled)(vacuum);
            source = update.bind(source)(report);
            report = source.length;
            report = foxtra < report;
            update = 0;
            ctrled = 0;
            if(!report) { _fun00014_ip = 367; continue _fun00013 }
 247:
            config = source[update];
            report = _closure1_slot8;
            report = report.bind(tangon)(config);
            if(!report) { _fun00014_ip = 291; continue _fun00013 }
 263:
            record = _closure1_slot0;
            sequen = _closure1_slot1;
            sequen = sequen[yankee];
            record = record.bind(tangon)(sequen);
            sequen = record.isReadableChannel;
            report = sequen.bind(record)(config);
 291:
            if(!report) { _fun00014_ip = 325; continue _fun00013 }
 294:
            record = _closure1_slot0;
            sequen = _closure1_slot1;
            sequen = sequen[romeon];
            record = record.bind(tangon)(sequen);
            sequen = record.isLimitedChannel;
            sequen = sequen.bind(record)(config);
            report = !sequen;
 325:
            if(!report) { _fun00014_ip = 339; continue _fun00013 }
 328:
            report = _closure1_slot9;
            report = report.bind(tangon)(vacuum, config, michal);
 339:
            report = michal.totalLength;
            if(!(!(report >= sizing))) { _fun00014_ip = 399; continue _fun00013 }
 349:
            update = update + 1;
            report = source.length;
            output = config;
            ctrled = update;
            if(ctrled < report) { _fun00014_ip = 247; continue _fun00013 }
 367:
            sequen = echoed.bind(tangon)();
            report = sequen.done;
            option = ctrled;
            result = sequen;
            verify = vacuum;
            golfie = source;
            oscard = output;
            if(report) { _fun00014_ip = 411; continue _fun00013 }
 394:
            _fun00014_ip = 195; continue _fun00013;
 399:
            report = _closure1_slot10;
            report = report.bind(tangon)(michal, entity);
            return michal;
 411:
            output = kiloes.bind(tangon)();
            report = output.done;
            offset = output;
            if(!report) { _fun00014_ip = 151; continue _fun00013 }
 429:
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.bind(tangon)(michal, entity);
            return michal;
 441:
            return entity;
        }
    };
    zuuluu['withFallbacks'] = michal;
    return entity;
})();