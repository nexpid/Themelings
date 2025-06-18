// app/modules/guilds_bar/useGuildMediaState.tsx
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
            verify = _closure1_slot17;
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
            golfie = _closure1_slot17;
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
    var _closure1_slot16 = entity;
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
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: canConnectToChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tangon = arguments[2];
            golfie = undefined;
            if(!(tangon === golfie)) { _fun00008_ip = 19; continue _fun00007 }
 12:
            tangon = _closure1_slot10;
 19:
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00008_ip = 72; continue _fun00007 }
 28:
            zuuluu = report.type;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            michal = 13;
            michal = option[michal];
            michal = oscard.bind(golfie)(michal);
            michal = michal.ChannelTypes;
            michal = michal.GUILD_STAGE_VOICE;
            entity = zuuluu !== michal;
 72:
            if(!entity) { _fun00008_ip = 87; continue _fun00007 }
 75:
            zuuluu = report.id;
            michal = argBar;
            entity = michal !== zuuluu;
 87:
            if(!entity) { _fun00008_ip = 115; continue _fun00007 }
 90:
            zuuluu = tangon.canBasicChannel;
            michal = _closure1_slot15;
            michal = michal.VIEW_CHANNEL;
            entity = zuuluu.bind(tangon)(michal, report);
 115:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
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
    tangon = tangon.isVoiceChannel;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BasicPermissions;
    var _closure1_slot15 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guilds_bar/useGuildMediaState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useGuildMediaState
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            backup = argFoo;
            var _closure2_slot0 = backup;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            output = 14;
            zuuluu = oscard[output];
            report = undefined;
            verify = tangon.bind(report)(zuuluu);
            option = verify.useStateFromStores;
            zuuluu = _closure1_slot13;
            golfie = new Array(1);
            golfie[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot13;
                michal = zuuluu.isMuted;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = option.bind(verify)(golfie, zuuluu);
            var _closure2_slot1 = foxtra;
            zuuluu = 15;
            zuuluu = oscard[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            zuuluu = golfie.useGuildActiveEvent;
            option = zuuluu.bind(golfie)(backup);
            var _closure2_slot2 = option;
            zuuluu = oscard[output];
            offset = tangon.bind(report)(zuuluu);
            verify = offset.useStateFromStoresArray;
            zuuluu = _closure1_slot3;
            golfie = new Array(2);
            golfie[0] = zuuluu;
            zuuluu = _closure1_slot11;
            golfie[1] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getEmbeddedActivitiesForGuild;
                entity = _closure2_slot0;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 16;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.hasBlockedOrIgnoredUserIds;
                    michal = argFoo;
                    option = michal.userIds;
                    michal = new Array(0);
                    golfie = 0;
                    verify = michal;
                    report = arraySpread(verify, option, golfie);
                    report = _closure1_slot11;
                    entity = report.getBlockedOrIgnoredIDs;
                    entity = entity.bind(report)();
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = !entity;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = verify.bind(offset)(golfie, zuuluu);
            var _closure2_slot3 = verify;
            zuuluu = 17;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.getEmbeddedActivityLocationChannelId;
            zuuluu = 0;
            golfie = verify[zuuluu];
            zuuluu = null;
            offset = zuuluu == golfie;
            zuuluu = undefined;
            if(offset) { _fun00010_ip = 187; continue _fun00009 }
 182:
            zuuluu = golfie.location;
 187:
            offset = tangon.bind(oscard)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 18;
            oscard = zuuluu[oscard];
            golfie = tangon.bind(report)(oscard);
            oscard = golfie.useIsActivitiesInTextEnabled;
            offset = oscard.bind(golfie)(offset);
            var _closure2_slot4 = offset;
            oscard = zuuluu[output];
            result = tangon.bind(report)(oscard);
            romeon = result.useStateFromStoresObject;
            sizing = _closure1_slot12;
            yankee = new Array(5);
            yankee[0] = sizing;
            oscard = _closure1_slot14;
            yankee[1] = oscard;
            oscard = _closure1_slot9;
            yankee[2] = oscard;
            oscard = _closure1_slot10;
            yankee[3] = oscard;
            kiloes = _closure1_slot8;
            yankee[4] = kiloes;
            golfie = new Array(2);
            golfie[0] = backup;
            golfie[1] = foxtra;
            oscard = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure1_slot12;
                    entity = michal.getVoiceChannelId;
                    report = entity.bind(michal)();
                    oscard = _closure1_slot9;
                    michal = oscard.getGuild;
                    entity = _closure2_slot0;
                    entity = michal.bind(oscard)(entity);
                    michal = null;
                    oscard = michal == entity;
                    foxtra = undefined;
                    romeon = undefined;
                    if(oscard) { _fun00012_ip = 57; continue _fun00011 }
 51:
                    romeon = entity.afkChannelId;
 57:
                    offset = _closure1_slot14;
                    entity = offset.getUsersWithVideo;
                    verify = _closure2_slot0;
                    golfie = entity.bind(offset)(verify);
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 16;
                    entity = option[entity];
                    option = oscard.bind(foxtra)(entity);
                    oscard = option.filterBlockedUsersFromVoiceStates;
                    entity = offset.getVoiceStates;
                    entity = entity.bind(offset)(verify);
                    yankee = oscard.bind(option)(entity);
                    entity = {};
                    option = _closure2_slot1;
                    oscard = false;
                    if(option) { _fun00012_ip = 214; continue _fun00011 }
 131:
                    output = yankee;
                    oscard = false;
                    for(backup in output)
 144:
                    {
                        oscard = false;
 155:
                        option = backup;
                        source = _closure1_slot18;
                        update = _closure1_slot8;
                        echoed = update.getBasicChannel;
                        option = yankee[option];
                        option = option.channelId;
                        update = echoed.bind(update)(option);
                        option = michal != romeon;
                        echoed = undefined;
                        if(!option) { _fun00012_ip = 198; continue _fun00011 }
 195:
                        echoed = romeon;
 198:
                        option = _closure1_slot10;
                        option = source.bind(foxtra)(update, echoed, option);
                        oscard = true;
                        if(!option) { _fun00012_ip = 144; continue _fun00011 }
                    }
 214:
                    entity['guildHasVoice'] = oscard;
                    oscard = _closure2_slot1;
                    tangon = false;
                    if(oscard) { _fun00012_ip = 338; continue _fun00011 }
 228:
                    oscard = _closure1_slot16;
                    verify = oscard.bind(foxtra)(golfie);
                    golfie = verify.bind(foxtra)();
                    oscard = golfie.done;
                    tangon = false;
                    if(oscard) { _fun00012_ip = 338; continue _fun00011 }
 251:
                    oscard = golfie.value;
                    sizing = _closure1_slot18;
                    kiloes = _closure1_slot8;
                    backup = kiloes.getBasicChannel;
                    output = yankee[oscard];
                    result = michal == output;
                    oscard = undefined;
                    if(result) { _fun00012_ip = 288; continue _fun00011 }
 283:
                    oscard = output.channelId;
 288:
                    kiloes = backup.bind(kiloes)(oscard);
                    oscard = michal != romeon;
                    backup = undefined;
                    if(!oscard) { _fun00012_ip = 305; continue _fun00011 }
 302:
                    backup = romeon;
 305:
                    oscard = _closure1_slot10;
                    oscard = sizing.bind(foxtra)(kiloes, backup, oscard);
                    tangon = true;
                    if(oscard) { _fun00012_ip = 338; continue _fun00011 }
 321:
                    backup = verify.bind(foxtra)();
                    oscard = backup.done;
                    golfie = backup;
                    tangon = false;
                    if(!oscard) { _fun00012_ip = 251; continue _fun00011 }
 338:
                    entity['guildHasVideo'] = tangon;
                    michal = michal != report;
                    if(!michal) { _fun00012_ip = 365; continue _fun00011 }
 350:
                    tangon = _closure1_slot14;
                    zuuluu = tangon.hasVideo;
                    michal = zuuluu.bind(tangon)(report);
 365:
                    entity['selectedVoiceChannelHasVideo'] = michal;
                    return entity;
                }
            };
            yankee = romeon.bind(result)(yankee, oscard, golfie);
            golfie = yankee.guildHasVoice;
            var _closure2_slot5 = golfie;
            oscard = yankee.guildHasVideo;
            var _closure2_slot6 = oscard;
            romeon = yankee.selectedVoiceChannelHasVideo;
            var _closure2_slot7 = romeon;
            result = _closure1_slot7;
            yankee = result.getId;
            yankee = yankee.bind(result)();
            var _closure2_slot8 = yankee;
            zuuluu = zuuluu[output];
            report = tangon.bind(report)(zuuluu);
            tangon = report.useStateFromStoresObject;
            zuuluu = new Array(6);
            zuuluu[0] = sizing;
            zuuluu[1] = kiloes;
            kiloes = _closure1_slot3;
            zuuluu[2] = kiloes;
            kiloes = _closure1_slot4;
            zuuluu[3] = kiloes;
            kiloes = _closure1_slot6;
            zuuluu[4] = kiloes;
            michal = _closure1_slot10;
            zuuluu[5] = michal;
            michal = new Array(9);
            michal[0] = backup;
            michal[1] = foxtra;
            michal[2] = romeon;
            michal[3] = yankee;
            michal[4] = offset;
            michal[5] = verify;
            michal[6] = option;
            michal[7] = golfie;
            michal[8] = oscard;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure1_slot12;
                    michal = zuuluu.getVoiceChannelId;
                    romeon = michal.bind(zuuluu)();
                    zuuluu = _closure1_slot8;
                    michal = zuuluu.getChannel;
                    michal = michal.bind(zuuluu)(romeon);
                    kiloes = null;
                    report = kiloes == michal;
                    yankee = undefined;
                    zuuluu = undefined;
                    if(report) { _fun00014_ip = 51; continue _fun00013 }
 46:
                    zuuluu = michal.guild_id;
 51:
                    michal = _closure2_slot0;
                    michal = zuuluu === michal;
                    if(michal) { _fun00014_ip = 88; continue _fun00013 }
 65:
                    zuuluu = _closure2_slot1;
                    if(!zuuluu) { _fun00014_ip = 88; continue _fun00013 }
 72:
                    zuuluu = {'audio': false, 'video': false, 'screenshare': false, 'liveStage': false, 'activeEvent': false, 'activity': false, 'isCurrentUserConnected': false};
                    return zuuluu;
 88:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 19;
                    zuuluu = oscard[zuuluu];
                    oscard = report.bind(yankee)(zuuluu);
                    report = oscard.keys;
                    option = _closure1_slot4;
                    golfie = option.getStageInstancesByGuild;
                    zuuluu = _closure2_slot0;
                    zuuluu = golfie.bind(option)(zuuluu);
                    oscard = report.bind(oscard)(zuuluu);
                    report = oscard.some;
                    zuuluu = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            tangon = _closure1_slot8;
                            zuuluu = tangon.getChannel;
                            entity = argFoo;
                            report = zuuluu.bind(tangon)(entity);
                            entity = null;
                            entity = entity != report;
                            if(!entity) { _fun00016_ip = 73; continue _fun00015 }
 29:
                            tangon = _closure1_slot10;
                            zuuluu = tangon.can;
                            golfie = _closure1_slot0;
                            oscard = _closure1_slot2;
                            michal = 20;
                            oscard = oscard[michal];
                            michal = undefined;
                            michal = golfie.bind(michal)(oscard);
                            michal = michal.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                            entity = zuuluu.bind(tangon)(michal, report);
 73:
                            return entity;
                        }
                    };
                    oscard = report.bind(oscard)(zuuluu);
                    zuuluu = michal;
                    report = undefined;
                    if(!michal) { _fun00014_ip = 203; continue _fun00013 }
 163:
                    option = _closure1_slot8;
                    golfie = option.getChannel;
                    verify = golfie.bind(option)(romeon);
                    option = kiloes == verify;
                    golfie = undefined;
                    if(option) { _fun00014_ip = 196; continue _fun00013 }
 186:
                    option = verify.isGuildStageVoice;
                    golfie = option.bind(verify)();
 196:
                    zuuluu = kiloes != golfie;
                    report = golfie;
 203:
                    if(!zuuluu) { _fun00014_ip = 209; continue _fun00013 }
 206:
                    zuuluu = report;
 209:
                    report = !michal;
                    offset = !report;
                    if(!michal) { _fun00014_ip = 246; continue _fun00013 }
 218:
                    verify = _closure1_slot6;
                    option = verify.getActiveStreamForUser;
                    golfie = _closure2_slot8;
                    report = _closure2_slot0;
                    report = option.bind(verify)(golfie, report);
                    offset = kiloes != report;
 246:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 16;
                    report = option[report];
                    option = golfie.bind(yankee)(report);
                    golfie = option.filterOutStreamsByBlockedOwner;
                    verify = _closure1_slot6;
                    report = verify.getAllApplicationStreams;
                    report = report.bind(verify)();
                    golfie = golfie.bind(option)(report);
                    report = golfie.some;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        michal = entity.guildId;
                        entity = _closure2_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    golfie = report.bind(golfie)(tangon);
                    tangon = _closure2_slot4;
                    if(tangon) { _fun00014_ip = 446; continue _fun00013 }
 319:
                    report = _closure1_slot16;
                    tangon = _closure2_slot3;
                    output = report.bind(yankee)(tangon);
                    tangon = output.bind(yankee)();
                    report = tangon.done;
                    verify = 17;
                    option = tangon;
                    tangon = false;
                    if(report) { _fun00014_ip = 461; continue _fun00013 }
 352:
                    report = option.value;
                    echoed = _closure1_slot8;
                    result = echoed.getChannel;
                    source = _closure1_slot0;
                    update = _closure1_slot2;
                    update = update[verify];
                    source = source.bind(yankee)(update);
                    update = source.getEmbeddedActivityLocationChannelId;
                    report = report.location;
                    report = update.bind(source)(report);
                    report = result.bind(echoed)(report);
                    if(!(kiloes != report)) { _fun00014_ip = 427; continue _fun00013 }
 408:
                    result = _closure1_slot5;
                    report = report.type;
                    report = result.bind(yankee)(report);
                    tangon = true;
                    if(report) { _fun00014_ip = 461; continue _fun00013 }
 427:
                    result = output.bind(yankee)();
                    report = result.done;
                    option = result;
                    tangon = false;
                    if(report) { _fun00014_ip = 461; continue _fun00013 }
 444:
                    _fun00014_ip = 352; continue _fun00013;
 446:
                    report = _closure2_slot3;
                    option = report.length;
                    report = 0;
                    tangon = option > report;
 461:
                    option = _closure1_slot3;
                    report = option.getEmbeddedActivitiesForGuild;
                    entity = _closure2_slot0;
                    entity = report.bind(option)(entity);
                    report = entity.length;
                    entity = 0;
                    entity = report > entity;
                    if(michal) { _fun00014_ip = 512; continue _fun00013 }
 494:
                    verify = _closure2_slot5;
                    report = _closure2_slot2;
                    report = kiloes != report;
                    option = _closure2_slot6;
                    _fun00014_ip = 565; continue _fun00013;
 512:
                    backup = _closure2_slot2;
                    backup = kiloes == backup;
                    yankee = undefined;
                    if(backup) { _fun00014_ip = 534; continue _fun00013 }
 525:
                    backup = _closure2_slot2;
                    yankee = backup.channel_id;
 534:
                    romeon = yankee === romeon;
                    yankee = michal;
                    if(!michal) { _fun00014_ip = 548; continue _fun00013 }
 544:
                    yankee = _closure2_slot7;
 548:
                    verify = true;
                    option = yankee;
                    report = romeon;
                    oscard = zuuluu;
                    golfie = offset;
                    tangon = entity;
 565:
                    entity = {};
                    entity['audio'] = verify;
                    entity['video'] = option;
                    entity['screenshare'] = golfie;
                    entity['liveStage'] = oscard;
                    entity['activeEvent'] = report;
                    entity['activity'] = tangon;
                    if(michal) { _fun00014_ip = 603; continue _fun00013 }
 600:
                    michal = zuuluu;
 603:
                    entity['isCurrentUserConnected'] = michal;
                    return entity;
                }
            };
            entity = tangon.bind(report)(zuuluu, entity, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();