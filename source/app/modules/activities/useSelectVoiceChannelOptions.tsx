// app/modules/activities/useSelectVoiceChannelOptions.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
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
 345:
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
    entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: canLaunchGuildActivity
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            oscard = 8;
            zuuluu = zuuluu[oscard];
            report = undefined;
            golfie = tangon.bind(report)(zuuluu);
            tangon = golfie.getEmbeddedActivityLaunchability;
            zuuluu = {};
            option = entity.id;
            zuuluu['channelId'] = option;
            option = argBar;
            zuuluu['ChannelStore'] = option;
            option = argBaz;
            zuuluu['GuildStore'] = option;
            option = argCor;
            zuuluu['PermissionStore'] = option;
            option = argGra;
            zuuluu['VoiceStateStore'] = option;
            zuuluu = tangon.bind(golfie)(zuuluu);
            tangon = entity.type;
            entity = _closure1_slot9;
            entity = entity.GUILD_VOICE;
            entity = tangon === entity;
            if(!entity) { _fun00008_ip = 137; continue _fun00007 }
 104:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.EmbeddedActivityLaunchability;
            michal = michal.CAN_LAUNCH;
            entity = zuuluu === michal;
 137:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: areChannelSelectOptionsEqual
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            michal = tangon.length;
            entity = zuuluu.length;
            if(!(michal === entity)) { _fun00010_ip = 96; continue _fun00009 }
 20:
            entity = tangon.length;
            michal = 0;
            entity = michal < entity;
            if(!entity) { _fun00010_ip = 88; continue _fun00009 }
 34:
            entity = tangon[michal];
            entity = entity.value;
            entity = entity.channel;
            report = entity.id;
            entity = zuuluu[michal];
            entity = entity.value;
            entity = entity.channel;
            entity = entity.id;
            if(!(report === entity)) { _fun00010_ip = 92; continue _fun00009 }
 76:
            michal = michal + 1;
            entity = tangon.length;
            if(michal < entity) { _fun00010_ip = 34; continue _fun00009 }
 88:
            entity = true;
            return entity;
 92:
            entity = false;
            return entity;
 96:
            entity = false;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
    var _closure1_slot9 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useSelectVoiceChannelOptions.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getActivityVoiceChannelSuggestion
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            verify = entity.guildId;
            zuuluu = entity.allowGdmActivityChannelSuggestion;
            oscard = undefined;
            if(!(zuuluu === oscard)) { _fun00012_ip = 22; continue _fun00011 }
 20:
            zuuluu = false;
 22:
            michal = null;
            if(!(michal == verify)) { _fun00012_ip = 33; continue _fun00011 }
 28:
            if(zuuluu) { _fun00012_ip = 33; continue _fun00011 }
 31:
            return michal;
 33:
            tangon = _closure1_slot6;
            entity = tangon.getVoiceChannelId;
            report = entity.bind(tangon)();
            tangon = _closure1_slot2;
            entity = tangon.getChannel;
            entity = entity.bind(tangon)(report);
            if(!(michal != entity)) { _fun00012_ip = 86; continue _fun00011 }
 68:
            tangon = entity.guild_id;
            if(!(michal == tangon)) { _fun00012_ip = 395; continue _fun00011 }
 80:
            if(zuuluu) { _fun00012_ip = 395; continue _fun00011 }
 86:
            golfie = new Array(0);
            zuuluu = global;
            report = zuuluu.Object;
            tangon = report.values;
            option = _closure1_slot3;
            zuuluu = option.getCategories;
            zuuluu = zuuluu.bind(option)(verify);
            offset = tangon.bind(report)(zuuluu);
            zuuluu = offset.length;
            tangon = 0;
            zuuluu = tangon < zuuluu;
            verify = 9;
            option = 0;
            report = undefined;
            if(!zuuluu) { _fun00012_ip = 329; continue _fun00011 }
 147:
            romeon = _closure1_slot10;
            zuuluu = offset[option];
            foxtra = romeon.bind(oscard)(zuuluu);
            romeon = foxtra.bind(oscard)();
            zuuluu = romeon.done;
            if(zuuluu) { _fun00012_ip = 314; continue _fun00011 }
 175:
            backup = romeon.value;
            echoed = _closure1_slot12;
            sequen = backup.channel;
            vacuum = _closure1_slot2;
            ctrled = _closure1_slot4;
            source = _closure1_slot5;
            update = _closure1_slot7;
            config = undefined;
            zuuluu = config[echoed](sequen, vacuum, ctrled, source, update, echoed);
            if(!zuuluu) { _fun00012_ip = 293; continue _fun00011 }
 214:
            kiloes = golfie.push;
            zuuluu = {};
            sizing = backup.channel;
            zuuluu['channel'] = sizing;
            result = _closure1_slot8;
            output = result.getVoiceStatesForChannel;
            sizing = backup.channel;
            result = output.bind(result)(sizing);
            output = result.filter;
            echoed = _closure1_slot0;
            sizing = _closure1_slot1;
            sizing = sizing[verify];
            sizing = echoed.bind(oscard)(sizing);
            sizing = sizing.isNotNullish;
            sizing = output.bind(result)(sizing);
            zuuluu['users'] = sizing;
            zuuluu = kiloes.bind(golfie)(zuuluu);
 293:
            kiloes = foxtra.bind(oscard)();
            zuuluu = kiloes.done;
            romeon = kiloes;
            report = backup;
            if(!zuuluu) { _fun00012_ip = 175; continue _fun00011 }
 314:
            option = option + 1;
            zuuluu = offset.length;
            if(option < zuuluu) { _fun00012_ip = 147; continue _fun00011 }
 329:
            report = golfie.sort;
            zuuluu = function(argFoo, argBar) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    entity = entity.users;
                    michal = entity.length;
                    entity = argBar;
                    entity = entity.users;
                    entity = entity.length;
                    michal = michal > entity;
                    entity = 1;
                    if(!michal) { _fun00014_ip = 44; continue _fun00013 }
 38:
                    entity = -1;
 44:
                    return entity;
                }
            };
            zuuluu = report.bind(golfie)(zuuluu);
            tangon = zuuluu[tangon];
            report = michal == tangon;
            zuuluu = undefined;
            if(report) { _fun00012_ip = 381; continue _fun00011 }
 362:
            tangon = tangon.channel;
            report = michal == tangon;
            zuuluu = undefined;
            if(report) { _fun00012_ip = 381; continue _fun00011 }
 376:
            zuuluu = tangon.id;
 381:
            tangon = michal != zuuluu;
            michal = null;
            if(!tangon) { _fun00012_ip = 393; continue _fun00011 }
 390:
            michal = zuuluu;
 393:
            return michal;
 395:
            entity = entity.id;
            return entity;
        }
    };
    zuuluu['getActivityVoiceChannelSuggestion'] = tangon;
    michal = function(argFoo) { // Original name: useSelectVoiceChannelOptions
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 10;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        oscard = report.bind(zuuluu)(tangon);
        report = oscard.useStateFromStores;
        zuuluu = _closure1_slot3;
        tangon = new Array(6);
        tangon[0] = zuuluu;
        zuuluu = _closure1_slot2;
        tangon[1] = zuuluu;
        zuuluu = _closure1_slot4;
        tangon[2] = zuuluu;
        zuuluu = _closure1_slot5;
        tangon[3] = zuuluu;
        zuuluu = _closure1_slot7;
        tangon[4] = zuuluu;
        zuuluu = _closure1_slot8;
        tangon[5] = zuuluu;
        zuuluu = new Array(1);
        zuuluu[0] = golfie;
        option = _closure1_slot13;
        offset = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = _closure2_slot0;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00016_ip = 117; continue _fun00015 }
 15:
                tangon = new Array(0);
                var _closure3_slot0 = tangon;
                zuuluu = global;
                report = zuuluu.Object;
                zuuluu = report.values;
                golfie = _closure1_slot3;
                oscard = golfie.getCategories;
                michal = _closure2_slot0;
                michal = oscard.bind(golfie)(michal);
                report = zuuluu.bind(report)(michal);
                zuuluu = report.forEach;
                michal = function(argFoo) {
                    zuuluu = argFoo;
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            entity = argFoo;
                            tangon = entity.channel;
                            golfie = _closure1_slot12;
                            yankee = _closure1_slot2;
                            offset = _closure1_slot4;
                            verify = _closure1_slot5;
                            option = _closure1_slot7;
                            entity = undefined;
                            foxtra = undefined;
                            romeon = tangon;
                            michal = foxtra[golfie](romeon, yankee, offset, verify, option, golfie);
                            if(!michal) { _fun00018_ip = 62; continue _fun00017 }
 45:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.push;
                            michal = michal.bind(zuuluu)(tangon);
 62:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                michal = zuuluu.bind(report)(michal);
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    michal = argFoo;
                    entity = {};
                    zuuluu = {};
                    zuuluu['channel'] = michal;
                    oscard = _closure1_slot8;
                    report = oscard.getVoiceStatesForChannel;
                    oscard = report.bind(oscard)(michal);
                    report = oscard.filter;
                    option = _closure1_slot0;
                    golfie = _closure1_slot1;
                    tangon = 9;
                    golfie = golfie[tangon];
                    tangon = undefined;
                    tangon = option.bind(tangon)(golfie);
                    tangon = tangon.isNotNullish;
                    tangon = report.bind(oscard)(tangon);
                    zuuluu['users'] = tangon;
                    entity['value'] = zuuluu;
                    michal = michal.name;
                    entity['label'] = michal;
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.sort;
                entity = function(argFoo, argBar) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        entity = argFoo;
                        entity = entity.value;
                        entity = entity.users;
                        michal = entity.length;
                        entity = argBar;
                        entity = entity.value;
                        entity = entity.users;
                        entity = entity.length;
                        michal = michal > entity;
                        entity = 1;
                        if(!michal) { _fun00020_ip = 54; continue _fun00019 }
 48:
                        entity = -1;
 54:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
 117:
                entity = new Array(0);
                return entity;
            }
        };
        romeon = oscard;
        yankee = tangon;
        verify = zuuluu;
        entity = romeon[report](yankee, offset, verify, option, golfie);
        return entity;
    };
    zuuluu['useSelectVoiceChannelOptions'] = michal;
    return entity;
})();