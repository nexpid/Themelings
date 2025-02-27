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
            verify = _closure1_slot17;
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
            golfie = _closure1_slot17;
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
    tangon = 22;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guilds_bar/useGuildMediaState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useGuildMediaState
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            kiloes = argFoo;
            var _closure2_slot0 = kiloes;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            result = 14;
            zuuluu = oscard[result];
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
            backup = option.bind(verify)(golfie, zuuluu);
            var _closure2_slot1 = backup;
            zuuluu = 15;
            zuuluu = oscard[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            zuuluu = golfie.useGuildActiveEvent;
            option = zuuluu.bind(golfie)(kiloes);
            var _closure2_slot2 = option;
            zuuluu = 16;
            zuuluu = oscard[zuuluu];
            verify = tangon.bind(report)(zuuluu);
            golfie = verify.useBlockingVoiceStatesConfigForBlocker;
            zuuluu = 'use-guild-media-state';
            zuuluu = golfie.bind(verify)(zuuluu);
            foxtra = zuuluu.enabled;
            var _closure2_slot3 = foxtra;
            zuuluu = oscard[result];
            offset = tangon.bind(report)(zuuluu);
            verify = offset.useStateFromStoresArray;
            zuuluu = _closure1_slot3;
            golfie = new Array(2);
            golfie[0] = zuuluu;
            zuuluu = _closure1_slot11;
            golfie[1] = zuuluu;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure1_slot3;
                    zuuluu = tangon.getEmbeddedActivitiesForGuild;
                    michal = _closure2_slot0;
                    tangon = zuuluu.bind(tangon)(michal);
                    michal = _closure2_slot3;
                    entity = tangon;
                    if(!michal) { _fun00012_ip = 54; continue _fun00011 }
 35:
                    zuuluu = tangon.filter;
                    michal = function(argFoo) {
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 17;
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
                    entity = zuuluu.bind(tangon)(michal);
 54:
                    return entity;
                }
            };
            verify = verify.bind(offset)(golfie, zuuluu);
            var _closure2_slot4 = verify;
            zuuluu = 18;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.getEmbeddedActivityLocationChannelId;
            zuuluu = 0;
            golfie = verify[zuuluu];
            zuuluu = null;
            offset = zuuluu == golfie;
            zuuluu = undefined;
            if(offset) { _fun00010_ip = 225; continue _fun00009 }
 220:
            zuuluu = golfie.location;
 225:
            offset = tangon.bind(oscard)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 19;
            oscard = zuuluu[oscard];
            golfie = tangon.bind(report)(oscard);
            oscard = golfie.useIsActivitiesInTextEnabled;
            offset = oscard.bind(golfie)(offset);
            var _closure2_slot5 = offset;
            oscard = zuuluu[result];
            echoed = tangon.bind(report)(oscard);
            romeon = echoed.useStateFromStoresObject;
            output = _closure1_slot12;
            yankee = new Array(5);
            yankee[0] = output;
            oscard = _closure1_slot14;
            yankee[1] = oscard;
            oscard = _closure1_slot9;
            yankee[2] = oscard;
            oscard = _closure1_slot10;
            yankee[3] = oscard;
            sizing = _closure1_slot8;
            yankee[4] = sizing;
            golfie = new Array(3);
            golfie[0] = foxtra;
            golfie[1] = kiloes;
            golfie[2] = backup;
            oscard = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
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
                    if(oscard) { _fun00014_ip = 57; continue _fun00013 }
 51:
                    romeon = entity.afkChannelId;
 57:
                    golfie = _closure1_slot14;
                    oscard = golfie.getUsersWithVideo;
                    entity = _closure2_slot0;
                    golfie = oscard.bind(golfie)(entity);
                    entity = _closure2_slot3;
                    if(entity) { _fun00014_ip = 106; continue _fun00013 }
 85:
                    option = _closure1_slot14;
                    oscard = option.getVoiceStates;
                    entity = _closure2_slot0;
                    yankee = oscard.bind(option)(entity);
                    _fun00014_ip = 156; continue _fun00013;
 106:
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 17;
                    entity = option[entity];
                    option = oscard.bind(foxtra)(entity);
                    oscard = option.filterBlockedUsersFromVoiceStates;
                    offset = _closure1_slot14;
                    verify = offset.getVoiceStates;
                    entity = _closure2_slot0;
                    entity = verify.bind(offset)(entity);
                    yankee = oscard.bind(option)(entity);
 156:
                    entity = {};
                    option = _closure2_slot1;
                    oscard = false;
                    if(option) { _fun00014_ip = 250; continue _fun00013 }
 167:
                    output = yankee;
                    oscard = false;
                    for(backup in output)
 180:
                    {
                        oscard = false;
 191:
                        option = backup;
                        source = _closure1_slot18;
                        update = _closure1_slot8;
                        echoed = update.getBasicChannel;
                        option = yankee[option];
                        option = option.channelId;
                        update = echoed.bind(update)(option);
                        option = michal != romeon;
                        echoed = undefined;
                        if(!option) { _fun00014_ip = 234; continue _fun00013 }
 231:
                        echoed = romeon;
 234:
                        option = _closure1_slot10;
                        option = source.bind(foxtra)(update, echoed, option);
                        oscard = true;
                        if(!option) { _fun00014_ip = 180; continue _fun00013 }
                    }
 250:
                    entity['guildHasVoice'] = oscard;
                    oscard = _closure2_slot1;
                    tangon = false;
                    if(oscard) { _fun00014_ip = 374; continue _fun00013 }
 264:
                    oscard = _closure1_slot16;
                    verify = oscard.bind(foxtra)(golfie);
                    golfie = verify.bind(foxtra)();
                    oscard = golfie.done;
                    tangon = false;
                    if(oscard) { _fun00014_ip = 374; continue _fun00013 }
 287:
                    oscard = golfie.value;
                    sizing = _closure1_slot18;
                    kiloes = _closure1_slot8;
                    backup = kiloes.getBasicChannel;
                    output = yankee[oscard];
                    result = michal == output;
                    oscard = undefined;
                    if(result) { _fun00014_ip = 324; continue _fun00013 }
 319:
                    oscard = output.channelId;
 324:
                    kiloes = backup.bind(kiloes)(oscard);
                    oscard = michal != romeon;
                    backup = undefined;
                    if(!oscard) { _fun00014_ip = 341; continue _fun00013 }
 338:
                    backup = romeon;
 341:
                    oscard = _closure1_slot10;
                    oscard = sizing.bind(foxtra)(kiloes, backup, oscard);
                    tangon = true;
                    if(oscard) { _fun00014_ip = 374; continue _fun00013 }
 357:
                    backup = verify.bind(foxtra)();
                    oscard = backup.done;
                    golfie = backup;
                    tangon = false;
                    if(!oscard) { _fun00014_ip = 287; continue _fun00013 }
 374:
                    entity['guildHasVideo'] = tangon;
                    michal = michal != report;
                    if(!michal) { _fun00014_ip = 401; continue _fun00013 }
 386:
                    tangon = _closure1_slot14;
                    zuuluu = tangon.hasVideo;
                    michal = zuuluu.bind(tangon)(report);
 401:
                    entity['selectedVoiceChannelHasVideo'] = michal;
                    return entity;
                }
            };
            yankee = romeon.bind(echoed)(yankee, oscard, golfie);
            golfie = yankee.guildHasVoice;
            var _closure2_slot6 = golfie;
            oscard = yankee.guildHasVideo;
            var _closure2_slot7 = oscard;
            romeon = yankee.selectedVoiceChannelHasVideo;
            var _closure2_slot8 = romeon;
            echoed = _closure1_slot7;
            yankee = echoed.getId;
            yankee = yankee.bind(echoed)();
            var _closure2_slot9 = yankee;
            zuuluu = zuuluu[result];
            report = tangon.bind(report)(zuuluu);
            tangon = report.useStateFromStoresObject;
            zuuluu = new Array(6);
            zuuluu[0] = output;
            zuuluu[1] = sizing;
            sizing = _closure1_slot3;
            zuuluu[2] = sizing;
            sizing = _closure1_slot4;
            zuuluu[3] = sizing;
            sizing = _closure1_slot6;
            zuuluu[4] = sizing;
            michal = _closure1_slot10;
            zuuluu[5] = michal;
            michal = new Array(10);
            michal[0] = kiloes;
            michal[1] = backup;
            michal[2] = foxtra;
            michal[3] = romeon;
            michal[4] = yankee;
            michal[5] = offset;
            michal[6] = verify;
            michal[7] = option;
            michal[8] = golfie;
            michal[9] = oscard;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
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
                    if(report) { _fun00016_ip = 51; continue _fun00015 }
 46:
                    zuuluu = michal.guild_id;
 51:
                    michal = _closure2_slot0;
                    michal = zuuluu === michal;
                    if(michal) { _fun00016_ip = 84; continue _fun00015 }
 65:
                    zuuluu = _closure2_slot1;
                    if(!zuuluu) { _fun00016_ip = 84; continue _fun00015 }
 72:
                    zuuluu = {'audio': false, 'video': false, 'screenshare': false, 'liveStage': false, 'activeEvent': false, 'activity': false, 'isCurrentUserConnected': false};
                    return zuuluu;
 84:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 20;
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
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            tangon = _closure1_slot8;
                            zuuluu = tangon.getChannel;
                            entity = argFoo;
                            report = zuuluu.bind(tangon)(entity);
                            entity = null;
                            entity = entity != report;
                            if(!entity) { _fun00018_ip = 73; continue _fun00017 }
 29:
                            tangon = _closure1_slot10;
                            zuuluu = tangon.can;
                            golfie = _closure1_slot0;
                            oscard = _closure1_slot2;
                            michal = 21;
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
                    if(!michal) { _fun00016_ip = 199; continue _fun00015 }
 159:
                    option = _closure1_slot8;
                    golfie = option.getChannel;
                    verify = golfie.bind(option)(romeon);
                    option = kiloes == verify;
                    golfie = undefined;
                    if(option) { _fun00016_ip = 192; continue _fun00015 }
 182:
                    option = verify.isGuildStageVoice;
                    golfie = option.bind(verify)();
 192:
                    zuuluu = kiloes != golfie;
                    report = golfie;
 199:
                    if(!zuuluu) { _fun00016_ip = 205; continue _fun00015 }
 202:
                    zuuluu = report;
 205:
                    report = !michal;
                    offset = !report;
                    if(!michal) { _fun00016_ip = 242; continue _fun00015 }
 214:
                    verify = _closure1_slot6;
                    option = verify.getActiveStreamForUser;
                    golfie = _closure2_slot9;
                    report = _closure2_slot0;
                    report = option.bind(verify)(golfie, report);
                    offset = kiloes != report;
 242:
                    report = _closure2_slot3;
                    if(report) { _fun00016_ip = 265; continue _fun00015 }
 249:
                    golfie = _closure1_slot6;
                    report = golfie.getAllApplicationStreams;
                    golfie = report.bind(golfie)();
                    _fun00016_ip = 310; continue _fun00015;
 265:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 17;
                    report = verify[report];
                    verify = option.bind(yankee)(report);
                    option = verify.filterOutStreamsByBlockedOwner;
                    backup = _closure1_slot6;
                    report = backup.getAllApplicationStreams;
                    report = report.bind(backup)();
                    golfie = option.bind(verify)(report);
 310:
                    report = golfie.some;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        michal = entity.guildId;
                        entity = _closure2_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    golfie = report.bind(golfie)(tangon);
                    tangon = _closure2_slot5;
                    if(tangon) { _fun00016_ip = 465; continue _fun00015 }
 338:
                    report = _closure1_slot16;
                    tangon = _closure2_slot4;
                    output = report.bind(yankee)(tangon);
                    tangon = output.bind(yankee)();
                    report = tangon.done;
                    verify = 18;
                    option = tangon;
                    tangon = false;
                    if(report) { _fun00016_ip = 480; continue _fun00015 }
 371:
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
                    if(!(kiloes != report)) { _fun00016_ip = 446; continue _fun00015 }
 427:
                    result = _closure1_slot5;
                    report = report.type;
                    report = result.bind(yankee)(report);
                    tangon = true;
                    if(report) { _fun00016_ip = 480; continue _fun00015 }
 446:
                    result = output.bind(yankee)();
                    report = result.done;
                    option = result;
                    tangon = false;
                    if(report) { _fun00016_ip = 480; continue _fun00015 }
 463:
                    _fun00016_ip = 371; continue _fun00015;
 465:
                    report = _closure2_slot4;
                    option = report.length;
                    report = 0;
                    tangon = option > report;
 480:
                    option = _closure1_slot3;
                    report = option.getEmbeddedActivitiesForGuild;
                    entity = _closure2_slot0;
                    entity = report.bind(option)(entity);
                    report = entity.length;
                    entity = 0;
                    entity = report > entity;
                    if(michal) { _fun00016_ip = 531; continue _fun00015 }
 513:
                    verify = _closure2_slot6;
                    report = _closure2_slot2;
                    report = kiloes != report;
                    option = _closure2_slot7;
                    _fun00016_ip = 584; continue _fun00015;
 531:
                    backup = _closure2_slot2;
                    backup = kiloes == backup;
                    yankee = undefined;
                    if(backup) { _fun00016_ip = 553; continue _fun00015 }
 544:
                    backup = _closure2_slot2;
                    yankee = backup.channel_id;
 553:
                    romeon = yankee === romeon;
                    yankee = michal;
                    if(!michal) { _fun00016_ip = 567; continue _fun00015 }
 563:
                    yankee = _closure2_slot8;
 567:
                    verify = true;
                    option = yankee;
                    report = romeon;
                    oscard = zuuluu;
                    golfie = offset;
                    tangon = entity;
 584:
                    entity = {};
                    entity['audio'] = verify;
                    entity['video'] = option;
                    entity['screenshare'] = golfie;
                    entity['liveStage'] = oscard;
                    entity['activeEvent'] = report;
                    entity['activity'] = tangon;
                    if(michal) { _fun00016_ip = 622; continue _fun00015 }
 619:
                    michal = zuuluu;
 622:
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