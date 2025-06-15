// app/modules/application_commands/ApplicationCommandUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    oscard = argCor;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    var _closure1_slot3 = option;
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
            verify = _closure1_slot13;
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
            golfie = _closure1_slot13;
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
    var _closure1_slot12 = entity;
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
    var _closure1_slot13 = entity;
    report = function(argFoo) { // Original name: buildCommand
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.rootCommand;
            tangon = zuuluu.command;
            yankee = zuuluu.applicationId;
            verify = zuuluu.subCommandPath;
            zuuluu = zuuluu.useKeyedPermissions;
            romeon = undefined;
            var _closure2_slot0 = romeon;
            oscard = michal.permissions;
            report = null;
            golfie = report != oscard;
            if(!golfie) { _fun00008_ip = 72; continue _fun00007 }
 55:
            oscard = michal.permissions;
            option = oscard.length;
            oscard = 0;
            golfie = option > oscard;
 72:
            oscard = undefined;
            if(!golfie) { _fun00008_ip = 159; continue _fun00007 }
 77:
            if(zuuluu) { _fun00008_ip = 109; continue _fun00007 }
 80:
            zuuluu = {};
            _closure2_slot0 = zuuluu;
            offset = michal.permissions;
            option = offset.forEach;
            golfie = function(argFoo) {
                zuuluu = argFoo;
                michal = _closure2_slot0;
                entity = zuuluu.id;
                michal[entity] = zuuluu;
                entity = undefined;
                return entity;
            };
            golfie = option.bind(offset)(golfie);
            _fun00008_ip = 156; continue _fun00007;
 109:
            option = _closure1_slot0;
            offset = _closure1_slot3;
            golfie = 5;
            golfie = offset[golfie];
            offset = option.bind(romeon)(golfie);
            option = offset.keyPermissions;
            golfie = michal.permissions;
            golfie = option.bind(offset)(golfie);
            _closure2_slot0 = golfie;
            zuuluu = golfie;
 156:
            oscard = zuuluu;
 159:
            option = verify;
            if(!(report == verify)) { _fun00008_ip = 170; continue _fun00007 }
 166:
            option = new Array(0);
 170:
            golfie = option.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.name;
                return entity;
            };
            golfie = golfie.bind(option)(zuuluu);
            option = verify;
            if(!(report == option)) { _fun00008_ip = 196; continue _fun00007 }
 192:
            option = new Array(0);
 196:
            zuuluu = option.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.displayName;
                return entity;
            };
            option = zuuluu.bind(option)(entity);
            entity = {};
            zuuluu = michal.version;
            entity['version'] = zuuluu;
            zuuluu = michal.guild_id;
            entity['guildId'] = zuuluu;
            zuuluu = michal.id;
            kiloes = new Array(1);
            kiloes[0] = zuuluu;
            zuuluu = 1;
            result = kiloes;
            output = golfie;
            sizing = zuuluu;
            offset = arraySpread(result, output, sizing);
            backup = kiloes.join;
            foxtra = _closure1_slot7;
            foxtra = backup.bind(kiloes)(foxtra);
            entity['id'] = foxtra;
            foxtra = michal.name;
            backup = new Array(1);
            backup[0] = foxtra;
            result = backup;
            output = golfie;
            golfie = arraySpread(result, output, sizing);
            foxtra = backup.join;
            golfie = ' ';
            foxtra = foxtra.bind(backup)(golfie);
            entity['untranslatedName'] = foxtra;
            foxtra = tangon.name_localized;
            entity['serverLocalizedName'] = foxtra;
            entity['applicationId'] = yankee;
            yankee = michal.type;
            if(!(report == yankee)) { _fun00008_ip = 381; continue _fun00007 }
 349:
            backup = _closure1_slot0;
            kiloes = _closure1_slot3;
            foxtra = 6;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(romeon)(foxtra);
            foxtra = foxtra.ApplicationCommandType;
            yankee = foxtra.CHAT;
 381:
            entity['type'] = yankee;
            foxtra = _closure1_slot0;
            backup = _closure1_slot3;
            yankee = 7;
            yankee = backup[yankee];
            yankee = foxtra.bind(romeon)(yankee);
            yankee = yankee.ApplicationCommandInputType;
            yankee = yankee.BOT;
            entity['inputType'] = yankee;
            yankee = tangon.description;
            entity['untranslatedDescription'] = yankee;
            foxtra = _closure1_slot15;
            yankee = tangon.options;
            yankee = foxtra.bind(romeon)(yankee);
            entity['options'] = yankee;
            entity['rootCommand'] = michal;
            entity['subCommandPath'] = verify;
            verify = michal.default_member_permissions;
            yankee = report == verify;
            verify = undefined;
            if(yankee) { _fun00008_ip = 512; continue _fun00007 }
 475:
            yankee = _closure1_slot2;
            foxtra = _closure1_slot3;
            offset = 8;
            offset = foxtra[offset];
            romeon = yankee.bind(romeon)(offset);
            yankee = romeon.deserialize;
            offset = michal.default_member_permissions;
            verify = yankee.bind(romeon)(offset);
 512:
            entity['defaultMemberPermissions'] = verify;
            verify = michal.dm_permission;
            entity['dmPermission'] = verify;
            entity['permissions'] = oscard;
            verify = michal.name_localized;
            if(!(report == verify)) { _fun00008_ip = 548; continue _fun00007 }
 543:
            verify = michal.name;
 548:
            oscard = new Array(1);
            oscard[0] = verify;
            result = oscard;
            output = option;
            sizing = zuuluu;
            zuuluu = arraySpread(result, output, sizing);
            zuuluu = oscard.join;
            zuuluu = zuuluu.bind(oscard)(golfie);
            entity['displayName'] = zuuluu;
            zuuluu = tangon.description_localized;
            if(!(report == zuuluu)) { _fun00008_ip = 598; continue _fun00007 }
 593:
            zuuluu = tangon.description;
 598:
            entity['displayDescription'] = zuuluu;
            zuuluu = michal.nsfw;
            entity['nsfw'] = zuuluu;
            zuuluu = michal.contexts;
            entity['contexts'] = zuuluu;
            zuuluu = michal.integration_types;
            entity['integration_types'] = zuuluu;
            zuuluu = michal.global_popularity_rank;
            entity['global_popularity_rank'] = zuuluu;
            michal = michal.handler;
            entity['handler'] = michal;
            return entity;
        }
    };
    var _closure1_slot14 = report;
    entity = function(argFoo) { // Original name: mapOptions
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = null;
            michal = entity == tangon;
            entity = undefined;
            if(michal) { _fun00010_ip = 31; continue _fun00009 }
 14:
            zuuluu = tangon.map;
            michal = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = {};
                    offset = tangon;
                    verify = zuuluu;
                    entity = copyDataProperties(offset, verify);
                    option = zuuluu.choices;
                    entity = null;
                    michal = entity == option;
                    golfie = undefined;
                    report = undefined;
                    if(michal) { _fun00012_ip = 51; continue _fun00011 }
 34:
                    oscard = option.map;
                    michal = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            michal = argFoo;
                            entity = {};
                            oscard = entity;
                            report = michal;
                            zuuluu = copyDataProperties(oscard, report);
                            zuuluu = michal.name_localized;
                            tangon = null;
                            if(!(tangon == zuuluu)) { _fun00014_ip = 32; continue _fun00013 }
 27:
                            zuuluu = michal.name;
 32:
                            michal = 'displayName';
                            entity[michal] = zuuluu;
                            return entity;
                        }
                    };
                    report = oscard.bind(option)(michal);
 51:
                    michal = 'choices';
                    tangon[michal] = report;
                    oscard = _closure1_slot15;
                    report = zuuluu.options;
                    oscard = oscard.bind(golfie)(report);
                    report = 'options';
                    tangon[report] = oscard;
                    oscard = zuuluu.name_localized;
                    report = 'serverLocalizedName';
                    tangon[report] = oscard;
                    oscard = zuuluu.name_localized;
                    if(!(entity == oscard)) { _fun00012_ip = 116; continue _fun00011 }
 111:
                    oscard = zuuluu.name;
 116:
                    report = 'displayName';
                    tangon[report] = oscard;
                    report = zuuluu.description_localized;
                    if(!(entity == report)) { _fun00012_ip = 140; continue _fun00011 }
 135:
                    report = zuuluu.description;
 140:
                    entity = 'displayDescription';
                    tangon[entity] = report;
                    report = zuuluu.type;
                    oscard = _closure1_slot0;
                    entity = _closure1_slot3;
                    option = 6;
                    entity = entity[option];
                    entity = oscard.bind(golfie)(entity);
                    entity = entity.ApplicationCommandOptionType;
                    entity = entity.CHANNEL;
                    if(!(report === entity)) { _fun00012_ip = 204; continue _fun00011 }
 190:
                    entity = 'channel_types';
                    entity = entity in zuuluu;
                    if(entity) { _fun00012_ip = 470; continue _fun00011 }
 204:
                    report = zuuluu.type;
                    oscard = _closure1_slot0;
                    entity = _closure1_slot3;
                    entity = entity[option];
                    entity = oscard.bind(golfie)(entity);
                    entity = entity.ApplicationCommandOptionType;
                    entity = entity.NUMBER;
                    if(!(report !== entity)) { _fun00012_ip = 280; continue _fun00011 }
 242:
                    report = zuuluu.type;
                    oscard = _closure1_slot0;
                    entity = _closure1_slot3;
                    entity = entity[option];
                    entity = oscard.bind(golfie)(entity);
                    entity = entity.ApplicationCommandOptionType;
                    entity = entity.INTEGER;
                    if(!(report === entity)) { _fun00012_ip = 354; continue _fun00011 }
 280:
                    entity = 'min_value';
                    entity = entity in zuuluu;
                    if(entity) { _fun00012_ip = 306; continue _fun00011 }
 293:
                    entity = 'max_value';
                    entity = entity in zuuluu;
                    if(!entity) { _fun00012_ip = 354; continue _fun00011 }
 306:
                    entity = {};
                    offset = entity;
                    verify = tangon;
                    report = copyDataProperties(offset, verify);
                    oscard = zuuluu.min_value;
                    report = 'minValue';
                    entity[report] = oscard;
                    oscard = zuuluu.max_value;
                    report = 'maxValue';
                    entity[report] = oscard;
                    _fun00012_ip = 468; continue _fun00011;
 354:
                    oscard = zuuluu.type;
                    report = _closure1_slot0;
                    michal = _closure1_slot3;
                    michal = michal[option];
                    michal = report.bind(golfie)(michal);
                    michal = michal.ApplicationCommandOptionType;
                    report = michal.STRING;
                    michal = tangon;
                    if(!(oscard === report)) { _fun00012_ip = 465; continue _fun00011 }
 395:
                    report = 'min_length';
                    report = report in zuuluu;
                    if(report) { _fun00012_ip = 420; continue _fun00011 }
 406:
                    report = 'max_length';
                    report = report in zuuluu;
                    michal = tangon;
                    if(!report) { _fun00012_ip = 465; continue _fun00011 }
 420:
                    report = {};
                    offset = report;
                    verify = tangon;
                    oscard = copyDataProperties(offset, verify);
                    golfie = zuuluu.min_length;
                    oscard = 'minLength';
                    report[oscard] = golfie;
                    golfie = zuuluu.max_length;
                    oscard = 'maxLength';
                    report[oscard] = golfie;
                    michal = report;
 465:
                    entity = michal;
 468:
                    _fun00012_ip = 500; continue _fun00011;
 470:
                    michal = {};
                    offset = michal;
                    verify = tangon;
                    tangon = copyDataProperties(offset, verify);
                    tangon = zuuluu.channel_types;
                    zuuluu = 'channelTypes';
                    michal[zuuluu] = tangon;
                    entity = michal;
 500:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal);
 31:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: buildSubCommands
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            golfie = entity.rootCommand;
            oscard = entity.command;
            report = entity.applicationId;
            tangon = entity.subCommandPath;
            entity = entity.useKeyedPermissions;
            zuuluu = oscard.hasOwnProperty;
            michal = 'id';
            michal = zuuluu.bind(oscard)(michal);
            if(michal) { _fun00016_ip = 214; continue _fun00015 }
 55:
            offset = oscard.type;
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot3;
            romeon = 6;
            zuuluu = zuuluu[romeon];
            option = undefined;
            zuuluu = yankee.bind(option)(zuuluu);
            zuuluu = zuuluu.ApplicationCommandOptionType;
            zuuluu = zuuluu.SUB_COMMAND;
            if(!(offset !== zuuluu)) { _fun00016_ip = 247; continue _fun00015 }
 104:
            offset = oscard.type;
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[romeon];
            zuuluu = yankee.bind(option)(zuuluu);
            zuuluu = zuuluu.ApplicationCommandOptionType;
            zuuluu = zuuluu.SUB_COMMAND_GROUP;
            if(!(offset !== zuuluu)) { _fun00016_ip = 247; continue _fun00015 }
 142:
            offset = oscard.options;
            zuuluu = null;
            if(!(zuuluu != offset)) { _fun00016_ip = 169; continue _fun00015 }
 153:
            zuuluu = oscard.options;
            offset = zuuluu.length;
            zuuluu = 0;
            if(!(zuuluu === offset)) { _fun00016_ip = 247; continue _fun00015 }
 169:
            zuuluu = _closure1_slot14;
            michal = {};
            michal['rootCommand'] = golfie;
            michal['command'] = oscard;
            michal['applicationId'] = report;
            michal['subCommandPath'] = tangon;
            michal['useKeyedPermissions'] = entity;
            zuuluu = zuuluu.bind(option)(michal);
            michal = new Array(1);
            michal[0] = zuuluu;
            return michal;
 214:
            zuuluu = oscard.options;
            michal = null;
            if(!(michal != zuuluu)) { _fun00016_ip = 779; continue _fun00015 }
 228:
            michal = oscard.options;
            zuuluu = michal.length;
            michal = 0;
            if(!(michal !== zuuluu)) { _fun00016_ip = 779; continue _fun00015 }
 247:
            michal = new Array(0);
            zuuluu = oscard.options;
            kiloes = null;
            if(!(kiloes != zuuluu)) { _fun00016_ip = 777; continue _fun00015 }
 265:
            offset = oscard.options;
            option = offset.filter;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 6;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.SUB_COMMAND_GROUP;
                entity = michal === entity;
                return entity;
            };
            option = option.bind(offset)(zuuluu);
            zuuluu = option.length;
            yankee = 0;
            romeon = yankee < zuuluu;
            offset = undefined;
            backup = 6;
            foxtra = 0;
            if(!romeon) { _fun00016_ip = 501; continue _fun00015 }
 312:
            sizing = michal.push;
            output = _closure1_slot16;
            romeon = {};
            romeon['rootCommand'] = golfie;
            result = option[foxtra];
            romeon['command'] = result;
            romeon['applicationId'] = report;
            update = tangon;
            if(!(kiloes == tangon)) { _fun00016_ip = 352; continue _fun00015 }
 348:
            update = new Array(0);
 352:
            echoed = update.concat;
            source = {};
            result = option[foxtra];
            result = result.name;
            source['name'] = result;
            ctrled = _closure1_slot0;
            result = _closure1_slot3;
            result = result[backup];
            result = ctrled.bind(offset)(result);
            result = result.ApplicationCommandOptionType;
            result = result.SUB_COMMAND_GROUP;
            source['type'] = result;
            result = option[foxtra];
            result = result.name_localized;
            if(!(kiloes == result)) { _fun00016_ip = 428; continue _fun00015 }
 419:
            ctrled = option[foxtra];
            result = ctrled.name;
 428:
            source['displayName'] = result;
            result = new Array(1);
            result[0] = source;
            result = echoed.bind(update)(result);
            romeon['subCommandPath'] = result;
            romeon['useKeyedPermissions'] = entity;
            sequen = output.bind(offset)(romeon);
            romeon = new Array(0);
            config = romeon;
            vacuum = 0;
            output = arraySpread(config, sequen, vacuum);
            config = sizing;
            sequen = romeon;
            vacuum = michal;
            romeon = apply(config, sequen, vacuum);
            foxtra = foxtra + 1;
            romeon = option.length;
            if(foxtra < romeon) { _fun00016_ip = 312; continue _fun00015 }
 501:
            foxtra = oscard.options;
            romeon = foxtra.filter;
            verify = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 6;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.SUB_COMMAND;
                entity = michal === entity;
                return entity;
            };
            verify = romeon.bind(foxtra)(verify);
            romeon = verify.length;
            romeon = yankee < romeon;
            foxtra = 0;
            if(!romeon) { _fun00016_ip = 706; continue _fun00015 }
 538:
            sizing = michal.push;
            output = _closure1_slot14;
            romeon = {};
            romeon['rootCommand'] = golfie;
            result = verify[foxtra];
            romeon['command'] = result;
            romeon['applicationId'] = report;
            update = tangon;
            if(!(kiloes == update)) { _fun00016_ip = 578; continue _fun00015 }
 574:
            update = new Array(0);
 578:
            echoed = update.concat;
            source = {};
            result = verify[foxtra];
            result = result.name;
            source['name'] = result;
            ctrled = _closure1_slot0;
            result = _closure1_slot3;
            result = result[backup];
            result = ctrled.bind(offset)(result);
            result = result.ApplicationCommandOptionType;
            result = result.SUB_COMMAND;
            source['type'] = result;
            result = verify[foxtra];
            result = result.name_localized;
            if(!(kiloes == result)) { _fun00016_ip = 654; continue _fun00015 }
 645:
            ctrled = verify[foxtra];
            result = ctrled.name;
 654:
            source['displayName'] = result;
            result = new Array(1);
            result[0] = source;
            result = echoed.bind(update)(result);
            romeon['subCommandPath'] = result;
            romeon['useKeyedPermissions'] = entity;
            romeon = output.bind(offset)(romeon);
            romeon = sizing.bind(michal)(romeon);
            foxtra = foxtra + 1;
            romeon = verify.length;
            if(foxtra < romeon) { _fun00016_ip = 538; continue _fun00015 }
 706:
            option = option.length;
            option = yankee === option;
            if(!option) { _fun00016_ip = 727; continue _fun00015 }
 718:
            verify = verify.length;
            option = yankee === verify;
 727:
            if(!option) { _fun00016_ip = 775; continue _fun00015 }
 730:
            option = michal.push;
            verify = _closure1_slot14;
            zuuluu = {};
            zuuluu['rootCommand'] = golfie;
            zuuluu['command'] = oscard;
            zuuluu['applicationId'] = report;
            zuuluu['subCommandPath'] = tangon;
            zuuluu['useKeyedPermissions'] = entity;
            zuuluu = verify.bind(offset)(zuuluu);
            zuuluu = option.bind(michal)(zuuluu);
 775:
            return michal;
 777:
            return michal;
 779:
            zuuluu = _closure1_slot14;
            michal = {};
            michal['rootCommand'] = golfie;
            michal['command'] = oscard;
            michal['applicationId'] = report;
            michal['subCommandPath'] = tangon;
            michal['useKeyedPermissions'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = new Array(1);
            entity[0] = michal;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: hasAccessGivenPerms
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            report = argBaz;
            yankee = _closure1_slot0;
            entity = _closure1_slot3;
            golfie = 5;
            zuuluu = entity[golfie];
            verify = undefined;
            option = yankee.bind(verify)(zuuluu);
            oscard = option.toPermissionKey;
            zuuluu = michal.userId;
            offset = 7;
            entity = entity[offset];
            entity = yankee.bind(verify)(entity);
            entity = entity.ApplicationCommandPermissionType;
            entity = entity.USER;
            entity = oscard.bind(option)(zuuluu, entity);
            entity = report[entity];
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00018_ip = 298; continue _fun00017 }
 85:
            oscard = _closure1_slot12;
            michal = michal.roles;
            backup = oscard.bind(verify)(michal);
            oscard = backup.bind(verify)();
            yankee = oscard.done;
            michal = false;
            option = true;
            foxtra = oscard;
            romeon = false;
            oscard = false;
            if(yankee) { _fun00018_ip = 219; continue _fun00017 }
 123:
            output = foxtra.value;
            result = _closure1_slot0;
            yankee = _closure1_slot3;
            kiloes = yankee[golfie];
            sizing = result.bind(verify)(kiloes);
            kiloes = sizing.toPermissionKey;
            yankee = yankee[offset];
            yankee = result.bind(verify)(yankee);
            yankee = yankee.ApplicationCommandPermissionType;
            yankee = yankee.ROLE;
            yankee = kiloes.bind(sizing)(output, yankee);
            yankee = report[yankee];
            if(!(zuuluu != yankee)) { _fun00018_ip = 197; continue _fun00017 }
 186:
            yankee = yankee.permission;
            romeon = true;
            if(yankee) { _fun00018_ip = 217; continue _fun00017 }
 197:
            sizing = backup.bind(verify)();
            yankee = sizing.done;
            foxtra = sizing;
            oscard = romeon;
            if(yankee) { _fun00018_ip = 219; continue _fun00017 }
 215:
            _fun00018_ip = 123; continue _fun00017;
 217:
            return option;
 219:
            if(oscard) { _fun00018_ip = 296; continue _fun00017 }
 222:
            oscard = _closure1_slot0;
            tangon = _closure1_slot3;
            golfie = tangon[golfie];
            option = oscard.bind(verify)(golfie);
            golfie = option.toPermissionKey;
            tangon = tangon[offset];
            tangon = oscard.bind(verify)(tangon);
            tangon = tangon.ApplicationCommandPermissionType;
            oscard = tangon.ROLE;
            tangon = argBar;
            tangon = golfie.bind(option)(tangon, oscard);
            tangon = report[tangon];
            report = zuuluu != tangon;
            zuuluu = null;
            if(!report) { _fun00018_ip = 294; continue _fun00017 }
 288:
            zuuluu = tangon.permission;
 294:
            return zuuluu;
 296:
            return michal;
 298:
            entity = entity.permission;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    verify = 0;
    tangon = option[verify];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.isReadableType;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.DraftType;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    offset = tangon.BuiltInSectionId;
    var _closure1_slot6 = offset;
    tangon = tangon.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    offset = tangon.AnalyticEvents;
    var _closure1_slot8 = offset;
    tangon = tangon.ID_REGEX;
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = option[tangon];
    oscard = oscard.bind(entity)(tangon);
    tangon = oscard.deserialize;
    tangon = tangon.bind(oscard)(verify);
    var _closure1_slot11 = tangon;
    oscard = 13;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/application_commands/ApplicationCommandUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['buildCommand'] = report;
    report = function(argFoo, argBar) { // Original name: buildApplicationCommands
        michal = argBar;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot3;
        michal = 9;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.flatMap;
        michal = argFoo;
        entity = function(argFoo) {
            tangon = argFoo;
            report = _closure1_slot1;
            zuuluu = _closure1_slot3;
            michal = 10;
            michal = zuuluu[michal];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(michal);
            report = tangon.id;
            michal = null;
            report = michal != report;
            michal = 'Missing command id';
            michal = oscard.bind(zuuluu)(report, michal);
            michal = _closure1_slot16;
            entity = {};
            entity['rootCommand'] = tangon;
            entity['command'] = tangon;
            tangon = tangon.application_id;
            entity['applicationId'] = tangon;
            entity['subCommandPath'] = zuuluu;
            tangon = _closure2_slot0;
            entity['useKeyedPermissions'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['buildApplicationCommands'] = report;
    report = function(argFoo) { // Original name: applicationPermissionsList
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argFoo;
            entity = null;
            michal = entity == report;
            entity = undefined;
            if(michal) { _fun00020_ip = 37; continue _fun00019 }
 14:
            tangon = report.reduce;
            zuuluu = function(argFoo, argBar) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    tangon = argBar;
                    zuuluu = tangon.applicationCommandPermissions;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00022_ip = 50; continue _fun00021 }
 18:
                    zuuluu = entity.push;
                    michal = {};
                    report = tangon.id;
                    michal['id'] = report;
                    tangon = tangon.applicationCommandPermissions;
                    michal['permissions'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
 50:
                    return entity;
                }
            };
            michal = new Array(0);
            entity = tangon.bind(report)(zuuluu, michal);
 37:
            return entity;
        }
    };
    zuuluu['applicationPermissionsList'] = report;
    report = function(argFoo) { // Original name: isSnowflake
        tangon = argFoo;
        zuuluu = _closure1_slot9;
        michal = zuuluu.test;
        entity = tangon.trim;
        entity = entity.bind(tangon)();
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isSnowflake'] = report;
    report = function(argFoo, argBar, argBaz, argCor) { // Original name: getMatchingGroupCommands
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = argBaz;
        var _closure2_slot1 = michal;
        tangon = new Array(0);
        var _closure2_slot2 = tangon;
        zuuluu = _closure1_slot1;
        report = _closure1_slot3;
        michal = 9;
        michal = report[michal];
        report = undefined;
        zuuluu = zuuluu.bind(report)(michal);
        michal = argFoo;
        zuuluu = zuuluu.bind(report)(michal);
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zuuluu = argFoo;
                report = _closure2_slot0;
                tangon = report.test;
                michal = zuuluu.displayName;
                michal = tangon.bind(report)(michal);
                if(!michal) { _fun00024_ip = 61; continue _fun00023 }
 28:
                report = zuuluu.predicate;
                tangon = null;
                tangon = tangon == report;
                if(tangon) { _fun00024_ip = 58; continue _fun00023 }
 43:
                oscard = zuuluu.predicate;
                report = _closure2_slot1;
                tangon = oscard.bind(zuuluu)(report);
 58:
                michal = tangon;
 61:
                if(!michal) { _fun00024_ip = 78; continue _fun00023 }
 64:
                michal = _closure2_slot2;
                entity = michal.push;
                entity = entity.bind(michal)(zuuluu);
 78:
                entity = undefined;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        zuuluu = tangon.slice;
        michal = 0;
        entity = argCor;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['getMatchingGroupCommands'] = report;
    report = function(argFoo) { // Original name: getApplicationCommandOptionQueryOptions
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            report = argFoo;
            tangon = report.type;
            golfie = _closure1_slot0;
            michal = _closure1_slot3;
            verify = 6;
            zuuluu = michal[verify];
            option = undefined;
            zuuluu = golfie.bind(option)(zuuluu);
            zuuluu = zuuluu.ApplicationCommandOptionType;
            zuuluu = zuuluu.STRING;
            tangon = tangon === zuuluu;
            oscard = report.type;
            zuuluu = michal[verify];
            zuuluu = golfie.bind(option)(zuuluu);
            zuuluu = zuuluu.ApplicationCommandOptionType;
            zuuluu = zuuluu.CHANNEL;
            oscard = oscard === zuuluu;
            zuuluu = report.type;
            michal = michal[verify];
            michal = golfie.bind(option)(michal);
            michal = michal.ApplicationCommandOptionType;
            michal = michal.USER;
            zuuluu = zuuluu === michal;
            if(zuuluu) { _fun00026_ip = 150; continue _fun00025 }
 112:
            golfie = report.type;
            offset = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[verify];
            michal = offset.bind(option)(michal);
            michal = michal.ApplicationCommandOptionType;
            michal = michal.MENTIONABLE;
            zuuluu = golfie === michal;
 150:
            golfie = report.type;
            offset = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[verify];
            michal = offset.bind(option)(michal);
            michal = michal.ApplicationCommandOptionType;
            michal = michal.ROLE;
            michal = golfie === michal;
            if(michal) { _fun00026_ip = 229; continue _fun00025 }
 191:
            report = report.type;
            golfie = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[verify];
            entity = golfie.bind(option)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.MENTIONABLE;
            michal = report === entity;
 229:
            entity = {};
            report = tangon;
            if(tangon) { _fun00026_ip = 240; continue _fun00025 }
 237:
            report = michal;
 240:
            entity['canMentionEveryone'] = report;
            entity['canMentionHere'] = tangon;
            report = tangon;
            if(tangon) { _fun00026_ip = 259; continue _fun00025 }
 256:
            report = oscard;
 259:
            entity['canMentionChannels'] = report;
            report = tangon;
            if(tangon) { _fun00026_ip = 273; continue _fun00025 }
 270:
            report = zuuluu;
 273:
            entity['canMentionUsers'] = report;
            if(tangon) { _fun00026_ip = 284; continue _fun00025 }
 281:
            tangon = michal;
 284:
            entity['canMentionRoles'] = tangon;
            entity['canMentionAnyGuildUser'] = zuuluu;
            entity['canMentionNonMentionableRoles'] = michal;
            return entity;
        }
    };
    zuuluu['getApplicationCommandOptionQueryOptions'] = report;
    report = function(argFoo) { // Original name: allChannelsSentinel
        michal = _closure1_slot1;
        zuuluu = _closure1_slot3;
        entity = 11;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = argFoo;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.subtract;
        entity = 1;
        michal = michal.bind(zuuluu)(entity);
        entity = michal.toString;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['allChannelsSentinel'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: canUseApplicationCommands
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            golfie = argFoo;
            report = argBaz;
            entity = argBar;
            entity = !entity;
            if(!entity) { _fun00028_ip = 242; continue _fun00027 }
 18:
            michal = report.isMultiUserDM;
            michal = michal.bind(report)();
            zuuluu = !michal;
            michal = !zuuluu;
            if(!zuuluu) { _fun00028_ip = 239; continue _fun00027 }
 40:
            zuuluu = report.isDM;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00028_ip = 223; continue _fun00027 }
 56:
            zuuluu = report.isArchivedLockedThread;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00028_ip = 159; continue _fun00027 }
 72:
            oscard = _closure1_slot4;
            zuuluu = report.type;
            offset = undefined;
            zuuluu = oscard.bind(offset)(zuuluu);
            oscard = !zuuluu;
            zuuluu = !oscard;
            if(oscard) { _fun00028_ip = 157; continue _fun00027 }
 97:
            option = golfie.can;
            verify = _closure1_slot2;
            yankee = _closure1_slot3;
            oscard = 8;
            oscard = yankee[oscard];
            yankee = verify.bind(offset)(oscard);
            offset = yankee.combine;
            oscard = _closure1_slot10;
            verify = oscard.USE_APPLICATION_COMMANDS;
            oscard = oscard.SEND_MESSAGES;
            oscard = offset.bind(yankee)(verify, oscard);
            zuuluu = option.bind(golfie)(oscard, report);
 157:
            _fun00028_ip = 221; continue _fun00027;
 159:
            oscard = golfie.can;
            offset = _closure1_slot2;
            verify = _closure1_slot3;
            option = 8;
            verify = verify[option];
            option = undefined;
            offset = offset.bind(option)(verify);
            verify = offset.combine;
            tangon = _closure1_slot10;
            option = tangon.USE_APPLICATION_COMMANDS;
            tangon = tangon.MANAGE_THREADS;
            tangon = verify.bind(offset)(option, tangon);
            zuuluu = oscard.bind(golfie)(tangon, report);
 221:
            _fun00028_ip = 236; continue _fun00027;
 223:
            tangon = report.isSystemDM;
            tangon = tangon.bind(report)();
            zuuluu = !tangon;
 236:
            michal = zuuluu;
 239:
            entity = michal;
 242:
            return entity;
        }
    };
    zuuluu['canUseApplicationCommands'] = report;
    zuuluu['DISABLED_BY_DEFAULT_PERMISSION_FLAG'] = tangon;
    tangon = function(argFoo) { // Original name: hasAccess
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            option = entity.PermissionStore;
            golfie = entity.guild;
            yankee = entity.selfMember;
            verify = entity.applicationLevelPermissions;
            offset = entity.commandLevelPermissions;
            oscard = entity.defaultMemberPermissions;
            michal = golfie.ownerId;
            entity = yankee.userId;
            if(!(michal !== entity)) { _fun00030_ip = 235; continue _fun00029 }
 62:
            michal = option.can;
            entity = _closure1_slot10;
            entity = entity.ADMINISTRATOR;
            entity = michal.bind(option)(entity, golfie);
            if(entity) { _fun00030_ip = 235; continue _fun00029 }
 93:
            report = golfie.id;
            zuuluu = null;
            if(!(zuuluu != offset)) { _fun00030_ip = 128; continue _fun00029 }
 104:
            michal = _closure1_slot17;
            entity = undefined;
            entity = michal.bind(entity)(yankee, report, offset);
            offset = 'boolean';
            michal = typeof entity;
            if(!(offset !== michal)) { _fun00030_ip = 233; continue _fun00029 }
 128:
            michal = _closure1_slot17;
            offset = undefined;
            michal = michal.bind(offset)(yankee, report, verify);
            verify = 'boolean';
            report = typeof michal;
            report = verify === report;
            if(!report) { _fun00030_ip = 158; continue _fun00029 }
 155:
            report = !michal;
 158:
            michal = !report;
            if(report) { _fun00030_ip = 231; continue _fun00029 }
 164:
            zuuluu = zuuluu == oscard;
            if(zuuluu) { _fun00030_ip = 228; continue _fun00029 }
 171:
            verify = _closure1_slot2;
            yankee = _closure1_slot3;
            report = 8;
            report = yankee[report];
            verify = verify.bind(offset)(report);
            report = verify.equals;
            tangon = _closure1_slot11;
            tangon = report.bind(verify)(oscard, tangon);
            tangon = !tangon;
            if(!tangon) { _fun00030_ip = 225; continue _fun00029 }
 213:
            report = option.can;
            tangon = report.bind(option)(oscard, golfie);
 225:
            zuuluu = tangon;
 228:
            michal = zuuluu;
 231:
            return michal;
 233:
            return entity;
 235:
            entity = true;
            return entity;
        }
    };
    zuuluu['hasAccess'] = tangon;
    tangon = function(argFoo) { // Original name: getCommandAttachmentDraftType
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            michal = _closure1_slot3;
            oscard = 7;
            zuuluu = michal[oscard];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.CHAT;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 625; continue _fun00031 }
 47:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.APPLICATION_LAUNCHER;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 83:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.APP_LAUNCHER_APPLICATION_VIEW;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 119:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.CONTEXT_MENU;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 155:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.VOICE_UI;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 191:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.VOICE_TILE_ACTIVITY_SUGGESTIONS;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 227:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.MINI_SHELF;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 263:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.USER_PROFILE;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 299:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.NOW_PLAYING;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 335:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.ACTIVITY_DETAILS;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 371:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.ACTIVITIES_HOME;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 407:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.ACTIVITY_INSTANCE_EMBED;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 443:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.ACTIVITY_BOOKMARK_EMBED;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 479:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.APP_MESSAGE_EMBED;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 512:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 545:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.IMAGE_RECS_MENU;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 578:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.CommandOrigin;
            zuuluu = zuuluu.IMAGE_RECS_SUBMENU;
            if(!(zuuluu !== tangon)) { _fun00032_ip = 613; continue _fun00031 }
 611:
            return michal;
 613:
            michal = _closure1_slot5;
            michal = michal.ApplicationLauncherCommand;
            return michal;
 625:
            entity = _closure1_slot5;
            entity = entity.SlashCommand;
            return entity;
        }
    };
    zuuluu['getCommandAttachmentDraftType'] = tangon;
    tangon = function(argFoo) { // Original name: getCommandTriggerSection
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal == entity)) { _fun00034_ip = 13; continue _fun00033 }
 9:
            michal = undefined;
            return michal;
 13:
            tangon = entity.id;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.BUILT_IN;
            if(!(tangon !== zuuluu)) { _fun00034_ip = 126; continue _fun00033 }
 35:
            zuuluu = entity.id;
            entity = _closure1_slot6;
            entity = entity.FRECENCY;
            if(!(zuuluu !== entity)) { _fun00034_ip = 90; continue _fun00033 }
 54:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 7;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            entity = entity.ApplicationCommandTriggerSections;
            entity = entity.APP;
            _fun00034_ip = 124; continue _fun00033;
 90:
            report = _closure1_slot0;
            tangon = _closure1_slot3;
            zuuluu = 7;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            zuuluu = zuuluu.ApplicationCommandTriggerSections;
            entity = zuuluu.FRECENCY;
 124:
            _fun00034_ip = 160; continue _fun00033;
 126:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 7;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.ApplicationCommandTriggerSections;
            entity = michal.BUILT_IN;
 160:
            return entity;
        }
    };
    zuuluu['getCommandTriggerSection'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getApplicationCommandSection
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            entity = {};
            report = _closure1_slot0;
            oscard = _closure1_slot3;
            michal = 7;
            michal = oscard[michal];
            option = undefined;
            michal = report.bind(option)(michal);
            michal = michal.ApplicationCommandSectionType;
            michal = michal.APPLICATION;
            entity['type'] = michal;
            michal = tangon.id;
            entity['id'] = michal;
            michal = null;
            oscard = michal == tangon;
            report = undefined;
            if(oscard) { _fun00036_ip = 89; continue _fun00035 }
 69:
            oscard = tangon.bot;
            golfie = michal == oscard;
            report = undefined;
            if(golfie) { _fun00036_ip = 89; continue _fun00035 }
 84:
            report = oscard.username;
 89:
            if(!(michal == report)) { _fun00036_ip = 98; continue _fun00035 }
 93:
            report = tangon.name;
 98:
            entity['name'] = report;
            report = tangon.icon;
            entity['icon'] = report;
            entity['application'] = tangon;
            michal = michal != zuuluu;
            if(!michal) { _fun00036_ip = 125; continue _fun00035 }
 122:
            michal = zuuluu;
 125:
            entity['isUserApp'] = michal;
            return entity;
        }
    };
    zuuluu['getApplicationCommandSection'] = tangon;
    tangon = function(argFoo) { // Original name: extractInteractionDataProps
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            option = entity.id;
            michal = entity.options;
            tangon = null;
            report = tangon == michal;
            oscard = undefined;
            if(report) { _fun00038_ip = 42; continue _fun00037 }
 26:
            golfie = michal.find;
            report = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 6;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.SUB_COMMAND_GROUP;
                entity = michal === entity;
                return entity;
            };
            oscard = golfie.bind(michal)(report);
 42:
            report = option;
            if(!(tangon != oscard)) { _fun00038_ip = 93; continue _fun00037 }
 49:
            yankee = _closure1_slot7;
            offset = oscard.name;
            golfie = global;
            golfie = golfie.HermesInternal;
            verify = golfie.concat;
            golfie = '';
            golfie = verify.bind(golfie)(yankee, offset);
            report = option + golfie;
            michal = oscard.options;
 93:
            oscard = tangon == michal;
            entity = undefined;
            if(oscard) { _fun00038_ip = 118; continue _fun00037 }
 102:
            oscard = michal.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 6;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.SUB_COMMAND;
                entity = michal === entity;
                return entity;
            };
            entity = oscard.bind(michal)(zuuluu);
 118:
            zuuluu = report;
            if(!(tangon != entity)) { _fun00038_ip = 169; continue _fun00037 }
 125:
            option = _closure1_slot7;
            golfie = entity.name;
            tangon = global;
            tangon = tangon.HermesInternal;
            oscard = tangon.concat;
            tangon = '';
            tangon = oscard.bind(tangon)(option, golfie);
            zuuluu = report + tangon;
            michal = entity.options;
 169:
            entity = {};
            entity['commandKey'] = zuuluu;
            entity['interactionOptions'] = michal;
            return entity;
        }
    };
    zuuluu['extractInteractionDataProps'] = tangon;
    tangon = function(argFoo) { // Original name: trackCommandSelected
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            offset = entity.command;
            foxtra = entity.location;
            romeon = entity.triggerSection;
            yankee = entity.queryLength;
            verify = entity.sectionName;
            option = entity.query;
            golfie = entity.searchResultsPosition;
            oscard = entity.source;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot8;
            zuuluu = michal.APPLICATION_COMMAND_SELECTED;
            michal = {};
            sizing = offset.rootCommand;
            kiloes = null;
            output = kiloes == sizing;
            backup = undefined;
            if(output) { _fun00040_ip = 113; continue _fun00039 }
 108:
            backup = sizing.id;
 113:
            if(!(kiloes == backup)) { _fun00040_ip = 122; continue _fun00039 }
 117:
            backup = offset.id;
 122:
            michal['command_id'] = backup;
            backup = offset.applicationId;
            michal['application_id'] = backup;
            michal['location'] = foxtra;
            michal['section'] = romeon;
            michal['query_length'] = yankee;
            offset = offset.displayName;
            offset = offset.length;
            michal['command_text_length'] = offset;
            michal['section_name'] = verify;
            michal['query'] = option;
            michal['search_results_position'] = golfie;
            michal['source'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackCommandSelected'] = tangon;
    tangon = function(argFoo) { // Original name: getInitialInteractionMetadata
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.interactionMetadata;
            entity = null;
            michal = entity == zuuluu;
            if(michal) { _fun00042_ip = 45; continue _fun00041 }
 18:
            michal = 'triggering_interaction_metadata';
            tangon = michal in zuuluu;
            michal = zuuluu;
            if(!tangon) { _fun00042_ip = 42; continue _fun00041 }
 34:
            michal = zuuluu.triggering_interaction_metadata;
 42:
            entity = michal;
 45:
            return entity;
        }
    };
    zuuluu['getInitialInteractionMetadata'] = tangon;
    michal = function(argFoo, argBar) { // Original name: hasCommandIndexForApp
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argBar;
            michal = entity.result;
            entity = null;
            tangon = entity == michal;
            zuuluu = undefined;
            if(tangon) { _fun00044_ip = 26; continue _fun00043 }
 20:
            zuuluu = michal.sections;
 26:
            entity = entity != zuuluu;
            if(!entity) { _fun00044_ip = 40; continue _fun00043 }
 33:
            michal = argFoo;
            entity = michal in zuuluu;
 40:
            return entity;
        }
    };
    zuuluu['hasCommandIndexForApp'] = michal;
    return entity;
})();