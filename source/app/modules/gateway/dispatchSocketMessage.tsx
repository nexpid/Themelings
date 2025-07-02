// app/modules/gateway/dispatchSocketMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
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
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
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
            verify = _closure1_slot24;
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
            golfie = _closure1_slot24;
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
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
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
    var _closure1_slot24 = entity;
    option = function(argFoo, argBar) { // Original name: defineSimpleDispatch
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argBar;
            zuuluu = _closure1_slot23;
            entity = undefined;
            michal = argFoo;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.bind(entity)();
            michal = zuuluu.done;
            if(michal) { _fun00008_ip = 78; continue _fun00007 }
 34:
            verify = zuuluu.value;
            option = _closure1_slot22;
            michal = {};
            offset = function() { // Original name: preload
                entity = null;
                return entity;
            };
            michal['preload'] = offset;
            michal['dispatch'] = oscard;
            option[verify] = michal;
            option = tangon.bind(entity)();
            michal = option.done;
            zuuluu = option;
            if(!michal) { _fun00008_ip = 34; continue _fun00007 }
 78:
            return entity;
        }
    };
    offset = function(argFoo, argBar, argBaz) { // Original name: definePreloadableDispatch
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argBar;
            oscard = argBaz;
            zuuluu = _closure1_slot23;
            entity = undefined;
            michal = argFoo;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.bind(entity)();
            michal = zuuluu.done;
            if(michal) { _fun00010_ip = 74; continue _fun00009 }
 35:
            verify = zuuluu.value;
            option = _closure1_slot22;
            michal = {};
            michal['preload'] = golfie;
            michal['dispatch'] = oscard;
            option[verify] = michal;
            option = tangon.bind(entity)();
            michal = option.done;
            zuuluu = option;
            if(!michal) { _fun00010_ip = 35; continue _fun00009 }
 74:
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: dispatchOrResetSocket
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot3;
        entity = 30;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.dispatch;
        tangon = zuuluu.bind(tangon)(report);
        zuuluu = tangon.catch;
        michal = function(argFoo) {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 13;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.socket;
            michal = zuuluu.resetSocketOnDispatchError;
            entity = {};
            tangon = argFoo;
            entity['error'] = tangon;
            tangon = _closure2_slot0;
            tangon = tangon.type;
            entity['action'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: dispatchGuildMemberAdd
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            backup = argFoo;
            foxtra = argBar;
            michal = argBaz;
            romeon = michal.roles;
            yankee = michal.nick;
            offset = michal.avatar;
            verify = michal.avatar_decoration_data;
            entity = michal.flags;
            option = michal.premium_since;
            golfie = michal.pending;
            oscard = michal.joined_at;
            report = michal.communication_disabled_until;
            tangon = michal.unusual_dm_activity_until;
            sizing = _closure1_slot11;
            kiloes = sizing.getMember;
            zuuluu = foxtra.id;
            kiloes = kiloes.bind(sizing)(backup, zuuluu);
            sizing = null;
            zuuluu = sizing != kiloes;
            if(!zuuluu) { _fun00012_ip = 111; continue _fun00011 }
 101:
            output = kiloes.nick;
            zuuluu = output === yankee;
 111:
            if(!zuuluu) { _fun00012_ip = 124; continue _fun00011 }
 114:
            output = kiloes.avatar;
            zuuluu = output === offset;
 124:
            if(!zuuluu) { _fun00012_ip = 167; continue _fun00011 }
 127:
            echoed = _closure1_slot1;
            result = _closure1_slot3;
            output = 20;
            result = result[output];
            output = undefined;
            echoed = echoed.bind(output)(result);
            result = echoed.isEqual;
            output = kiloes.roles;
            zuuluu = result.bind(echoed)(output, romeon);
 167:
            if(!zuuluu) { _fun00012_ip = 234; continue _fun00011 }
 170:
            echoed = _closure1_slot0;
            result = _closure1_slot3;
            output = 31;
            result = result[output];
            output = undefined;
            update = echoed.bind(output)(result);
            echoed = update.isEqualAvatarDecoration;
            output = kiloes.avatarDecoration;
            source = sizing != output;
            result = null;
            if(!source) { _fun00012_ip = 216; continue _fun00011 }
 213:
            result = output;
 216:
            source = sizing != verify;
            output = null;
            if(!source) { _fun00012_ip = 228; continue _fun00011 }
 225:
            output = verify;
 228:
            zuuluu = echoed.bind(update)(result, output);
 234:
            if(!zuuluu) { _fun00012_ip = 247; continue _fun00011 }
 237:
            output = kiloes.premiumSince;
            zuuluu = output === option;
 247:
            if(!zuuluu) { _fun00012_ip = 260; continue _fun00011 }
 250:
            output = kiloes.isPending;
            zuuluu = output === golfie;
 260:
            if(!zuuluu) { _fun00012_ip = 273; continue _fun00011 }
 263:
            output = kiloes.joinedAt;
            zuuluu = output === oscard;
 273:
            if(!zuuluu) { _fun00012_ip = 286; continue _fun00011 }
 276:
            output = kiloes.communicationDisabledUntil;
            zuuluu = output === report;
 286:
            if(!zuuluu) { _fun00012_ip = 298; continue _fun00011 }
 289:
            output = kiloes.flags;
            zuuluu = output === entity;
 298:
            if(!zuuluu) { _fun00012_ip = 335; continue _fun00011 }
 301:
            output = kiloes.unusualDMActivityUntil;
            result = sizing != output;
            kiloes = null;
            if(!result) { _fun00012_ip = 319; continue _fun00011 }
 316:
            kiloes = output;
 319:
            output = sizing != tangon;
            sizing = null;
            if(!output) { _fun00012_ip = 331; continue _fun00011 }
 328:
            sizing = tangon;
 331:
            zuuluu = kiloes === sizing;
 335:
            if(zuuluu) { _fun00012_ip = 416; continue _fun00011 }
 338:
            zuuluu = _closure1_slot25;
            michal = {};
            kiloes = 'GUILD_MEMBER_ADD';
            michal['type'] = kiloes;
            michal['guildId'] = backup;
            michal['user'] = foxtra;
            michal['roles'] = romeon;
            michal['nick'] = yankee;
            michal['avatar'] = offset;
            michal['avatarDecoration'] = verify;
            michal['premiumSince'] = option;
            michal['isPending'] = golfie;
            michal['joinedAt'] = oscard;
            michal['communicationDisabledUntil'] = report;
            michal['unusualDMActivityUntil'] = tangon;
            michal['flags'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 416:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: dispatchMessageMembers
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            option = michal.member;
            zuuluu = michal.mentions;
            golfie = michal.author;
            oscard = michal.guild_id;
            var _closure2_slot0 = oscard;
            michal = null;
            tangon = michal != option;
            if(!tangon) { _fun00014_ip = 45; continue _fun00013 }
 41:
            tangon = michal != oscard;
 45:
            if(!tangon) { _fun00014_ip = 64; continue _fun00013 }
 48:
            report = _closure1_slot26;
            tangon = undefined;
            tangon = report.bind(tangon)(oscard, golfie, option);
 64:
            if(!(michal != zuuluu)) { _fun00014_ip = 83; continue _fun00013 }
 68:
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    report = argFoo;
                    entity = report.member;
                    zuuluu = null;
                    if(!(zuuluu != entity)) { _fun00016_ip = 57; continue _fun00015 }
 15:
                    michal = _closure2_slot0;
                    if(!(zuuluu != michal)) { _fun00016_ip = 57; continue _fun00015 }
 26:
                    tangon = report.member;
                    michal = delete report.member;
                    zuuluu = _closure1_slot26;
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal, report, tangon);
 57:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
 83:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: convertSessions
        zuuluu = argFoo;
        michal = zuuluu.map;
        entity = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = argFoo;
                entity = {};
                zuuluu = michal.session_id;
                entity['sessionId'] = zuuluu;
                zuuluu = michal.last_modified;
                entity['lastModified'] = zuuluu;
                zuuluu = michal.status;
                entity['status'] = zuuluu;
                zuuluu = michal.activities;
                entity['activities'] = zuuluu;
                zuuluu = michal.hidden_activities;
                tangon = null;
                if(!(tangon == zuuluu)) { _fun00018_ip = 65; continue _fun00017 }
 61:
                zuuluu = new Array(0);
 65:
                entity['hiddenActivities'] = zuuluu;
                zuuluu = michal.active;
                zuuluu = !zuuluu;
                zuuluu = !zuuluu;
                entity['active'] = zuuluu;
                michal = michal.client_info;
                entity['clientInfo'] = michal;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: dispatchPresence
        entity = argFoo;
        offset = entity.guildId;
        verify = entity.user;
        option = entity.status;
        oscard = entity.activities;
        report = entity.hiddenActivities;
        golfie = entity.clientStatus;
        tangon = entity.processedAtTimestamp;
        zuuluu = _closure1_slot21;
        michal = zuuluu.add;
        entity = {};
        entity['guildId'] = offset;
        entity['user'] = verify;
        entity['status'] = option;
        entity['clientStatus'] = golfie;
        entity['activities'] = oscard;
        entity['hiddenActivities'] = report;
        entity['processedAtTimestamp'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = ['newly_created'];
    var _closure1_slot4 = entity;
    entity = global;
    yankee = entity.Object;
    golfie = yankee.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(yankee)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.createChannelRecordFromServer;
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    golfie = oscard[tangon];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot9 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelLoader;
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    yankee = verify.bind(entity)(tangon);
    tangon = yankee.prototype;
    golfie = Object.create(tangon, {constructor: {value: yankee}});
    result = 'ConnectionStore';
    echoed = golfie;
    tangon = new echoed[yankee](result, output);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot17 = tangon;
    golfie = 12;
    tangon = oscard[golfie];
    kiloes = verify.bind(entity)(tangon);
    tangon = 13;
    yankee = oscard[tangon];
    yankee = report.bind(entity)(yankee);
    result = yankee.socket;
    yankee = kiloes.prototype;
    romeon = Object.create(yankee, {constructor: {value: kiloes}});
    output = function(argFoo, argBar) {
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            zuuluu = argBar;
            oscard = null;
            if(!(oscard == entity)) { _fun00020_ip = 34; continue _fun00019 }
 12:
            michal = {};
            tangon = 'CHANNEL_UPDATES';
            michal['type'] = tangon;
            tangon = new Array(0);
            michal['channels'] = tangon;
            entity = michal;
 34:
            michal = _closure1_slot6;
            tangon = undefined;
            michal = michal.bind(tangon)(zuuluu);
            golfie = _closure1_slot9;
            report = golfie.getChannel;
            zuuluu = zuuluu.id;
            golfie = report.bind(golfie)(zuuluu);
            zuuluu = oscard == golfie;
            report = undefined;
            if(zuuluu) { _fun00020_ip = 139; continue _fun00019 }
 76:
            tangon = golfie.merge;
            zuuluu = {};
            yankee = zuuluu;
            offset = michal;
            option = copyDataProperties(yankee, offset);
            verify = golfie.recipients;
            option = 'recipients';
            zuuluu[option] = verify;
            verify = michal.bitrate;
            if(!(oscard == verify)) { _fun00020_ip = 125; continue _fun00019 }
 119:
            verify = golfie.bitrate;
 125:
            option = 'bitrate';
            zuuluu[option] = verify;
            report = tangon.bind(golfie)(zuuluu);
 139:
            tangon = entity.channels;
            zuuluu = tangon.push;
            if(!(oscard != report)) { _fun00020_ip = 157; continue _fun00019 }
 154:
            michal = report;
 157:
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    sizing = function(argFoo) {
        michal = 'CHANNEL_UPDATE';
        entity = argFoo;
        entity = michal !== entity;
        return entity;
    };
    echoed = romeon;
    yankee = new echoed[kiloes](result, output, sizing, kiloes);
    yankee = yankee instanceof Object ? yankee : romeon;
    var _closure1_slot18 = yankee;
    yankee = oscard[golfie];
    kiloes = verify.bind(entity)(yankee);
    yankee = oscard[tangon];
    yankee = report.bind(entity)(yankee);
    result = yankee.socket;
    yankee = kiloes.prototype;
    romeon = Object.create(yankee, {constructor: {value: kiloes}});
    output = function(argFoo, argBar) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            oscard = argBar;
            var _closure2_slot0 = oscard;
            michal = null;
            if(!(michal == entity)) { _fun00022_ip = 42; continue _fun00021 }
 18:
            michal = {};
            zuuluu = 'SOUNDBOARD_SOUNDS_RECEIVED';
            michal['type'] = zuuluu;
            zuuluu = new Array(0);
            michal['updates'] = zuuluu;
            entity = michal;
 42:
            tangon = entity.updates;
            zuuluu = tangon.push;
            michal = {};
            golfie = oscard.guild_id;
            michal['guildId'] = golfie;
            golfie = oscard.soundboard_sounds;
            oscard = golfie.map;
            report = function(argFoo) {
                michal = argFoo;
                entity = {};
                zuuluu = michal.name;
                entity['name'] = zuuluu;
                zuuluu = michal.sound_id;
                entity['soundId'] = zuuluu;
                zuuluu = michal.emoji_name;
                entity['emojiName'] = zuuluu;
                zuuluu = michal.emoji_id;
                entity['emojiId'] = zuuluu;
                zuuluu = michal.user_id;
                entity['userId'] = zuuluu;
                zuuluu = michal.volume;
                entity['volume'] = zuuluu;
                michal = michal.available;
                entity['available'] = michal;
                michal = _closure2_slot0;
                michal = michal.guild_id;
                entity['guildId'] = michal;
                return entity;
            };
            report = oscard.bind(golfie)(report);
            michal['sounds'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    sizing = function(argFoo) {
        michal = 'SOUNDBOARD_SOUNDS';
        entity = argFoo;
        entity = michal !== entity;
        return entity;
    };
    echoed = romeon;
    yankee = new echoed[kiloes](result, output, sizing, kiloes);
    yankee = yankee instanceof Object ? yankee : romeon;
    var _closure1_slot19 = yankee;
    yankee = oscard[golfie];
    kiloes = verify.bind(entity)(yankee);
    yankee = oscard[tangon];
    yankee = report.bind(entity)(yankee);
    result = yankee.socket;
    yankee = kiloes.prototype;
    romeon = Object.create(yankee, {constructor: {value: kiloes}});
    output = function(argFoo, argBar) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal == entity)) { _fun00024_ip = 31; continue _fun00023 }
 9:
            michal = {};
            zuuluu = 'GUILD_MEMBERS_CHUNK_BATCH';
            michal['type'] = zuuluu;
            zuuluu = new Array(0);
            michal['chunks'] = zuuluu;
            entity = michal;
 31:
            tangon = entity.chunks;
            zuuluu = tangon.push;
            michal = argBar;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    sizing = function(argFoo) {
        michal = 'GUILD_MEMBERS_CHUNK';
        entity = argFoo;
        entity = michal !== entity;
        return entity;
    };
    echoed = romeon;
    yankee = new echoed[kiloes](result, output, sizing, kiloes);
    yankee = yankee instanceof Object ? yankee : romeon;
    var _closure1_slot20 = yankee;
    golfie = oscard[golfie];
    romeon = verify.bind(entity)(golfie);
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    result = tangon.socket;
    tangon = romeon.prototype;
    golfie = Object.create(tangon, {constructor: {value: romeon}});
    output = function(argFoo, argBar) {
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal == entity)) { _fun00026_ip = 31; continue _fun00025 }
 9:
            michal = {};
            zuuluu = 'PRESENCE_UPDATES';
            michal['type'] = zuuluu;
            zuuluu = new Array(0);
            michal['updates'] = zuuluu;
            entity = michal;
 31:
            tangon = entity.updates;
            zuuluu = tangon.push;
            michal = argBar;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    sizing = function(argFoo) {
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zuuluu = argFoo;
            entity = 'PRESENCE_UPDATE';
            entity = entity !== zuuluu;
            if(!entity) { _fun00028_ip = 24; continue _fun00027 }
 14:
            michal = 'GUILD_MEMBERS_CHUNK';
            entity = michal !== zuuluu;
 24:
            return entity;
        }
    };
    echoed = golfie;
    tangon = new echoed[romeon](result, output, sizing, kiloes);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot21 = tangon;
    tangon = {};
    var _closure1_slot22 = tangon;
    verify = ['INITIAL_GUILD'];
    golfie = function(argFoo) {
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            michal = argFoo;
            tangon = michal.data_mode;
            zuuluu = 'full';
            entity = null;
            if(!(zuuluu !== tangon)) { _fun00030_ip = 50; continue _fun00029 }
 19:
            tangon = _closure1_slot10;
            zuuluu = tangon.loadGuildIds;
            report = michal.id;
            michal = new Array(1);
            michal[0] = report;
            entity = zuuluu.bind(tangon)(michal);
 50:
            return entity;
        }
    };
    tangon = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot3;
        entity = 14;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        tangon = zuuluu.initialGuild;
        zuuluu = tangon.measure;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 15;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.Emitter;
            zuuluu = tangon.batched;
            michal = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    tangon = _closure1_slot2;
                    offset = _closure1_slot3;
                    entity = 16;
                    michal = offset[entity];
                    entity = undefined;
                    option = tangon.bind(entity)(michal);
                    golfie = option.hydrateInitialGuild;
                    report = _closure2_slot0;
                    verify = _closure1_slot0;
                    tangon = 13;
                    tangon = offset[tangon];
                    tangon = verify.bind(entity)(tangon);
                    tangon = tangon.socket;
                    tangon = tangon.identifyStartTime;
                    golfie = golfie.bind(option)(report, tangon);
                    var _closure4_slot0 = golfie;
                    report = _closure1_slot13;
                    tangon = report.getCurrentUser;
                    report = tangon.bind(report)();
                    tangon = null;
                    if(!(tangon != report)) { _fun00032_ip = 209; continue _fun00031 }
 97:
                    report = _closure1_slot25;
                    tangon = {};
                    option = 'GUILD_CREATE';
                    tangon['type'] = option;
                    tangon['guild'] = golfie;
                    tangon = report.bind(entity)(tangon);
                    tangon = {};
                    option = 'VOICE_STATE_UPDATES';
                    tangon['type'] = option;
                    option = golfie.voice_states;
                    golfie = option.map;
                    oscard = function(argFoo) {
                        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                            zuuluu = argFoo;
                            entity = {};
                            michal = zuuluu.user_id;
                            entity['userId'] = michal;
                            michal = _closure4_slot0;
                            michal = michal.id;
                            entity['guildId'] = michal;
                            michal = zuuluu.session_id;
                            entity['sessionId'] = michal;
                            michal = zuuluu.channel_id;
                            entity['channelId'] = michal;
                            michal = zuuluu.mute;
                            entity['mute'] = michal;
                            michal = zuuluu.deaf;
                            entity['deaf'] = michal;
                            michal = zuuluu.self_mute;
                            entity['selfMute'] = michal;
                            michal = zuuluu.self_deaf;
                            entity['selfDeaf'] = michal;
                            michal = zuuluu.self_video;
                            if(michal) { _fun00034_ip = 106; continue _fun00033 }
 104:
                            michal = false;
 106:
                            entity['selfVideo'] = michal;
                            michal = zuuluu.suppress;
                            entity['suppress'] = michal;
                            michal = zuuluu.self_stream;
                            if(michal) { _fun00034_ip = 133; continue _fun00033 }
 131:
                            michal = false;
 133:
                            entity['selfStream'] = michal;
                            report = zuuluu.request_to_speak_timestamp;
                            michal = null;
                            oscard = michal != report;
                            tangon = null;
                            if(!oscard) { _fun00034_ip = 158; continue _fun00033 }
 155:
                            tangon = report;
 158:
                            entity['requestToSpeakTimestamp'] = tangon;
                            zuuluu = zuuluu.discoverable;
                            michal = michal == zuuluu;
                            if(michal) { _fun00034_ip = 179; continue _fun00033 }
 176:
                            michal = zuuluu;
 179:
                            entity['discoverable'] = michal;
                            return entity;
                        }
                    };
                    oscard = golfie.bind(option)(oscard);
                    tangon['voiceStates'] = oscard;
                    tangon = report.bind(entity)(tangon);
                    tangon = _closure1_slot17;
                    zuuluu = tangon.log;
                    michal = _closure2_slot0;
                    oscard = michal.id;
                    michal = global;
                    michal = michal.HermesInternal;
                    report = michal.concat;
                    michal = 'Dispatched INITIAL_GUILD ';
                    michal = report.bind(michal)(oscard);
                    michal = zuuluu.bind(tangon)(michal);
 209:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    golfie = ['READY_SUPPLEMENTAL'];
    tangon = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot3;
        entity = 14;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.readySupplemental;
        tangon = report.measure;
        zuuluu = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 15;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.Emitter;
            zuuluu = tangon.batched;
            michal = function() {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    oscard = _closure1_slot1;
                    entity = _closure1_slot3;
                    report = 14;
                    tangon = entity[report];
                    entity = undefined;
                    tangon = oscard.bind(entity)(tangon);
                    golfie = tangon.hydrateReadySupplemental;
                    oscard = golfie.measure;
                    tangon = function() {
                        zuuluu = _closure1_slot2;
                        golfie = _closure1_slot3;
                        michal = 16;
                        michal = golfie[michal];
                        oscard = undefined;
                        tangon = zuuluu.bind(oscard)(michal);
                        zuuluu = tangon.hydrateReadySupplementalPayload;
                        michal = _closure2_slot0;
                        report = _closure1_slot0;
                        entity = 13;
                        entity = golfie[entity];
                        entity = report.bind(oscard)(entity);
                        entity = entity.socket;
                        entity = entity.identifyStartTime;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    oscard = oscard.bind(golfie)(tangon);
                    _closure2_slot0 = oscard;
                    verify = function(argFoo) { // Original name: transformPresences
                        zuuluu = argFoo;
                        michal = zuuluu.map;
                        entity = function(argFoo) {
                            michal = argFoo;
                            entity = {};
                            zuuluu = michal.user;
                            entity['user'] = zuuluu;
                            zuuluu = michal.status;
                            entity['status'] = zuuluu;
                            zuuluu = michal.client_status;
                            entity['clientStatus'] = zuuluu;
                            zuuluu = michal.activities;
                            entity['activities'] = zuuluu;
                            zuuluu = michal.hidden_activities;
                            entity['hiddenActivities'] = zuuluu;
                            michal = michal.processed_at_timestamp;
                            entity['processedAtTimestamp'] = michal;
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    var _closure4_slot0 = verify;
                    option = oscard.guilds;
                    golfie = option.filter;
                    oscard = function(argFoo) {
                        entity = argFoo;
                        michal = entity.unavailable;
                        entity = true;
                        entity = entity !== michal;
                        return entity;
                    };
                    golfie = golfie.bind(option)(oscard);
                    var _closure4_slot1 = golfie;
                    option = golfie.forEach;
                    oscard = function(argFoo) {
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                            zuuluu = argFoo;
                            tangon = _closure4_slot0;
                            michal = zuuluu.presences;
                            if(michal) { _fun00038_ip = 23; continue _fun00037 }
 19:
                            michal = new Array(0);
 23:
                            entity = undefined;
                            michal = tangon.bind(entity)(michal);
                            zuuluu['presences'] = michal;
                            return entity;
                        }
                    };
                    oscard = option.bind(golfie)(oscard);
                    oscard = _closure2_slot0;
                    oscard = oscard.presences;
                    if(oscard) { _fun00036_ip = 124; continue _fun00035 }
 118:
                    oscard = new Array(0);
                    _fun00036_ip = 139; continue _fun00035;
 124:
                    option = _closure2_slot0;
                    option = option.presences;
                    oscard = verify.bind(entity)(option);
 139:
                    var _closure4_slot2 = oscard;
                    oscard = _closure2_slot0;
                    offset = oscard.lazy_private_channels;
                    oscard = null;
                    if(!(oscard == offset)) { _fun00036_ip = 165; continue _fun00035 }
 161:
                    offset = new Array(0);
 165:
                    verify = offset.map;
                    option = function(argFoo) {
                        zuuluu = _closure1_slot6;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    option = verify.bind(offset)(option);
                    var _closure4_slot3 = option;
                    tangon = _closure2_slot0;
                    tangon = tangon.game_invites;
                    if(!(oscard == tangon)) { _fun00036_ip = 204; continue _fun00035 }
 200:
                    tangon = new Array(0);
 204:
                    var _closure4_slot4 = tangon;
                    oscard = _closure1_slot1;
                    tangon = _closure1_slot3;
                    report = tangon[report];
                    report = oscard.bind(entity)(report);
                    option = report.dispatchReadySupplemental;
                    oscard = option.measure;
                    report = function() {
                        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                            zuuluu = _closure1_slot25;
                            michal = {};
                            entity = 'CONNECTION_OPEN_SUPPLEMENTAL';
                            michal['type'] = entity;
                            tangon = _closure4_slot1;
                            michal['guilds'] = tangon;
                            tangon = _closure4_slot2;
                            michal['presences'] = tangon;
                            tangon = _closure4_slot3;
                            michal['lazyPrivateChannels'] = tangon;
                            entity = _closure4_slot4;
                            michal['gameInvites'] = entity;
                            entity = _closure2_slot0;
                            report = entity.user_activities;
                            entity = null;
                            oscard = entity != report;
                            entity = undefined;
                            tangon = undefined;
                            if(!oscard) { _fun00040_ip = 85; continue _fun00039 }
 82:
                            tangon = report;
 85:
                            michal['userActivities'] = tangon;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        }
                    };
                    report = oscard.bind(option)(report);
                    oscard = new Array(0);
                    var _closure4_slot5 = oscard;
                    report = golfie.forEach;
                    zuuluu = function(argFoo) {
                        michal = argFoo;
                        var _closure5_slot0 = michal;
                        zuuluu = michal.voice_states;
                        michal = zuuluu.forEach;
                        entity = function(argFoo) {
                            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                                report = argFoo;
                                zuuluu = _closure4_slot5;
                                michal = zuuluu.push;
                                entity = {};
                                tangon = report.user_id;
                                entity['userId'] = tangon;
                                tangon = _closure5_slot0;
                                tangon = tangon.id;
                                entity['guildId'] = tangon;
                                tangon = report.session_id;
                                entity['sessionId'] = tangon;
                                tangon = report.channel_id;
                                entity['channelId'] = tangon;
                                tangon = report.mute;
                                entity['mute'] = tangon;
                                tangon = report.deaf;
                                entity['deaf'] = tangon;
                                tangon = report.self_mute;
                                entity['selfMute'] = tangon;
                                tangon = report.self_deaf;
                                entity['selfDeaf'] = tangon;
                                tangon = report.self_video;
                                if(tangon) { _fun00042_ip = 118; continue _fun00041 }
 116:
                                tangon = false;
 118:
                                entity['selfVideo'] = tangon;
                                tangon = report.suppress;
                                entity['suppress'] = tangon;
                                tangon = report.self_stream;
                                if(tangon) { _fun00042_ip = 145; continue _fun00041 }
 143:
                                tangon = false;
 145:
                                entity['selfStream'] = tangon;
                                golfie = report.request_to_speak_timestamp;
                                tangon = null;
                                option = tangon != golfie;
                                oscard = null;
                                if(!option) { _fun00042_ip = 170; continue _fun00041 }
 167:
                                oscard = golfie;
 170:
                                entity['requestToSpeakTimestamp'] = oscard;
                                report = report.discoverable;
                                tangon = tangon == report;
                                if(tangon) { _fun00042_ip = 191; continue _fun00041 }
 188:
                                tangon = report;
 191:
                                entity['discoverable'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    zuuluu = report.bind(golfie)(zuuluu);
                    report = _closure1_slot25;
                    zuuluu = {'type': 'VOICE_STATE_UPDATES', 'voiceStates': null, 'initial': true};
                    zuuluu['voiceStates'] = oscard;
                    zuuluu = report.bind(entity)(zuuluu);
                    zuuluu = _closure1_slot0;
                    michal = 13;
                    michal = tangon[michal];
                    michal = zuuluu.bind(entity)(michal);
                    zuuluu = michal.localVoiceState;
                    michal = zuuluu.update;
                    michal = michal.bind(zuuluu)();
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = global;
        tangon = zuuluu.setTimeout;
        zuuluu = function() {
            zuuluu = _closure1_slot25;
            michal = {};
            entity = 'POST_CONNECTION_OPEN';
            michal['type'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = 2000;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    verify = ['READY'];
    golfie = function(argFoo) {
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            report = _closure1_slot2;
            tangon = _closure1_slot3;
            zuuluu = 16;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.preloadReadyPayloadData;
            oscard = zuuluu.bind(tangon)();
            zuuluu = argFoo;
            report = zuuluu.guilds;
            tangon = report.filter;
            zuuluu = function(argFoo) {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    tangon = argFoo;
                    entity = tangon.unavailable;
                    entity = !entity;
                    if(!entity) { _fun00046_ip = 108; continue _fun00045 }
 15:
                    zuuluu = tangon.data_mode;
                    michal = 'partial';
                    michal = michal === zuuluu;
                    if(!michal) { _fun00046_ip = 105; continue _fun00045 }
 32:
                    zuuluu = tangon.partial_updates;
                    zuuluu = zuuluu.channels;
                    oscard = null;
                    if(!(oscard == zuuluu)) { _fun00046_ip = 54; continue _fun00045 }
 50:
                    zuuluu = new Array(0);
 54:
                    zuuluu = zuuluu.length;
                    report = 0;
                    zuuluu = zuuluu > report;
                    if(zuuluu) { _fun00046_ip = 97; continue _fun00045 }
 68:
                    tangon = tangon.partial_updates;
                    tangon = tangon.deleted_channel_ids;
                    if(!(oscard == tangon)) { _fun00046_ip = 88; continue _fun00045 }
 84:
                    tangon = new Array(0);
 88:
                    tangon = tangon.length;
                    zuuluu = tangon > report;
 97:
                    if(zuuluu) { _fun00046_ip = 102; continue _fun00045 }
 100:
                    zuuluu = undefined;
 102:
                    michal = zuuluu;
 105:
                    entity = michal;
 108:
                    return entity;
                }
            };
            report = tangon.bind(report)(zuuluu);
            tangon = report.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot10;
            michal = zuuluu.loadGuildIds;
            report = michal.bind(zuuluu)(tangon);
            michal = null;
            if(!(michal == report)) { _fun00044_ip = 115; continue _fun00043 }
 97:
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            report = michal.bind(zuuluu)();
 115:
            michal = global;
            tangon = michal.Promise;
            zuuluu = tangon.all;
            michal = new Array(2);
            michal[0] = oscard;
            michal[1] = report;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function(argFoo) {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = argFoo;
                    michal = entity[Symbol.iterator];
                    entity = michal().next;
                    tangon = entity().value;
                    zuuluu = michal;
                    entity = undefined;
                    zuuluu = zuuluu === entity;
                    if(zuuluu) { _fun00048_ip = 25; continue _fun00047 }
 22:
                    entity = tangon;
 25:
                    if(zuuluu) { _fun00048_ip = 31; continue _fun00047 }
 28:
                    michal.return();
 31:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    tangon = function(argFoo, argBar, argBaz) {
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            zuuluu = argBaz;
            var _closure2_slot1 = zuuluu;
            entity = entity.user;
            zuuluu = entity.bot;
            if(zuuluu) { _fun00050_ip = 79; continue _fun00049 }
 33:
            report = _closure1_slot1;
            tangon = _closure1_slot3;
            zuuluu = 14;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            tangon = zuuluu.ready;
            zuuluu = tangon.measure;
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                tangon = michal.Emitter;
                zuuluu = tangon.batched;
                michal = function() {
                    _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                        report = _closure1_slot1;
                        entity = _closure1_slot3;
                        option = 14;
                        tangon = entity[option];
                        entity = undefined;
                        tangon = report.bind(entity)(tangon);
                        oscard = tangon.hydrateReady;
                        report = oscard.measure;
                        tangon = function() {
                            zuuluu = _closure1_slot2;
                            option = _closure1_slot3;
                            entity = 16;
                            entity = option[entity];
                            golfie = undefined;
                            report = zuuluu.bind(golfie)(entity);
                            tangon = report.hydrateReadyPayloadPrioritized;
                            zuuluu = _closure2_slot0;
                            oscard = _closure1_slot0;
                            michal = 13;
                            michal = option[michal];
                            michal = oscard.bind(golfie)(michal);
                            michal = michal.socket;
                            michal = michal.identifyStartTime;
                            entity = _closure2_slot1;
                            entity = tangon.bind(report)(zuuluu, michal, entity);
                            return entity;
                        };
                        tangon = report.bind(oscard)(tangon);
                        _closure2_slot0 = tangon;
                        golfie = tangon.private_channels;
                        oscard = golfie.map;
                        tangon = function(argFoo) {
                            zuuluu = _closure1_slot6;
                            michal = undefined;
                            entity = argFoo;
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        tangon = oscard.bind(golfie)(tangon);
                        var _closure4_slot0 = tangon;
                        tangon = _closure2_slot0;
                        golfie = tangon.guilds;
                        oscard = golfie.filter;
                        tangon = function(argFoo) {
                            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                                michal = argFoo;
                                entity = michal.unavailable;
                                zuuluu = true;
                                entity = zuuluu === entity;
                                if(!entity) { _fun00054_ip = 28; continue _fun00053 }
 18:
                                michal = michal.geo_restricted;
                                entity = zuuluu !== michal;
 28:
                                return entity;
                            }
                        };
                        golfie = oscard.bind(golfie)(tangon);
                        oscard = golfie.map;
                        tangon = function(argFoo) {
                            entity = argFoo;
                            entity = entity.id;
                            return entity;
                        };
                        tangon = oscard.bind(golfie)(tangon);
                        var _closure4_slot1 = tangon;
                        tangon = _closure2_slot0;
                        golfie = tangon.guilds;
                        oscard = golfie.filter;
                        tangon = function(argFoo) {
                            entity = argFoo;
                            michal = entity.unavailable;
                            entity = true;
                            entity = entity !== michal;
                            return entity;
                        };
                        golfie = oscard.bind(golfie)(tangon);
                        var _closure4_slot2 = golfie;
                        tangon = _closure2_slot0;
                        verify = tangon.guilds;
                        oscard = verify.filter;
                        tangon = function(argFoo) {
                            entity = argFoo;
                            michal = entity.geo_restricted;
                            entity = true;
                            entity = entity === michal;
                            return entity;
                        };
                        tangon = oscard.bind(verify)(tangon);
                        var _closure4_slot3 = tangon;
                        oscard = golfie.forEach;
                        tangon = function(argFoo) {
                            michal = new Array(0);
                            entity = argFoo;
                            entity['presences'] = michal;
                            entity = undefined;
                            return entity;
                        };
                        tangon = oscard.bind(golfie)(tangon);
                        tangon = _closure2_slot0;
                        oscard = tangon.user_settings_proto;
                        tangon = null;
                        golfie = tangon == oscard;
                        oscard = undefined;
                        if(golfie) { _fun00052_ip = 260; continue _fun00051 }
 219:
                        verify = _closure1_slot0;
                        offset = _closure1_slot3;
                        golfie = 17;
                        golfie = offset[golfie];
                        offset = verify.bind(entity)(golfie);
                        verify = offset.b64ToPreloadedUserSettingsProto;
                        golfie = _closure2_slot0;
                        golfie = golfie.user_settings_proto;
                        oscard = verify.bind(offset)(golfie);
 260:
                        var _closure4_slot4 = oscard;
                        golfie = _closure1_slot1;
                        oscard = _closure1_slot3;
                        verify = 18;
                        verify = oscard[verify];
                        yankee = golfie.bind(entity)(verify);
                        offset = 'AllGatewayConnectionStores';
                        verify = function() {
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot3;
                            entity = 19;
                            michal = michal[entity];
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        verify = yankee.bind(entity)(offset, verify);
                        oscard = oscard[option];
                        oscard = golfie.bind(entity)(oscard);
                        golfie = oscard.dispatchReady;
                        oscard = golfie.measure;
                        zuuluu = function() {
                            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                                zuuluu = _closure1_slot25;
                                michal = {};
                                entity = 'CONNECTION_OPEN';
                                michal['type'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.session_id;
                                michal['sessionId'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.auth_session_id_hash;
                                michal['authSessionIdHash'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.static_client_session_id;
                                michal['staticAuthSessionId'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.user;
                                michal['user'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.users;
                                michal['users'] = entity;
                                entity = _closure4_slot2;
                                michal['guilds'] = entity;
                                entity = _closure4_slot0;
                                michal['initialPrivateChannels'] = entity;
                                entity = _closure4_slot1;
                                michal['unavailableGuilds'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.read_state;
                                michal['readState'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.user_guild_settings;
                                michal['userGuildSettings'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.tutorial;
                                michal['tutorial'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.relationships;
                                michal['relationships'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.game_relationships;
                                michal['gameRelationships'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.friend_suggestion_count;
                                michal['friendSuggestionCount'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.presences;
                                michal['presences'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.analytics_token;
                                michal['analyticsToken'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.experiments;
                                michal['experiments'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.connected_accounts;
                                michal['connectedAccounts'] = entity;
                                entity = _closure2_slot0;
                                entity = entity.guild_experiments;
                                michal['guildExperiments'] = entity;
                                entity = _closure2_slot0;
                                verify = entity.apex_experiments;
                                oscard = null;
                                offset = oscard != verify;
                                entity = undefined;
                                option = undefined;
                                if(!offset) { _fun00056_ip = 320; continue _fun00055 }
 317:
                                option = verify;
 320:
                                michal['apexExperiments'] = option;
                                option = _closure2_slot0;
                                option = option.required_action;
                                michal['requiredAction'] = option;
                                option = _closure2_slot0;
                                option = option.consents;
                                michal['consents'] = option;
                                option = _closure1_slot28;
                                golfie = _closure2_slot0;
                                golfie = golfie.sessions;
                                if(golfie) { _fun00056_ip = 376; continue _fun00055 }
 372:
                                golfie = new Array(0);
 376:
                                golfie = option.bind(entity)(golfie);
                                michal['sessions'] = golfie;
                                golfie = _closure2_slot0;
                                golfie = golfie.pending_payments;
                                michal['pendingPayments'] = golfie;
                                golfie = _closure2_slot0;
                                golfie = golfie.country_code;
                                option = oscard != golfie;
                                oscard = undefined;
                                if(!option) { _fun00056_ip = 427; continue _fun00055 }
 424:
                                oscard = golfie;
 427:
                                michal['countryCode'] = oscard;
                                oscard = _closure2_slot0;
                                oscard = oscard.guild_join_requests;
                                if(oscard) { _fun00056_ip = 449; continue _fun00055 }
 445:
                                oscard = new Array(0);
 449:
                                michal['guildJoinRequests'] = oscard;
                                oscard = _closure4_slot4;
                                michal['userSettingsProto'] = oscard;
                                oscard = _closure2_slot0;
                                oscard = oscard.api_code_version;
                                michal['apiCodeVersion'] = oscard;
                                oscard = _closure2_slot0;
                                oscard = oscard.auth;
                                michal['auth'] = oscard;
                                oscard = {};
                                golfie = _closure2_slot0;
                                golfie = golfie.notification_settings;
                                golfie = golfie.flags;
                                oscard['flags'] = golfie;
                                michal['notificationSettings'] = oscard;
                                report = _closure4_slot3;
                                michal['geoRestrictedGuilds'] = report;
                                report = _closure2_slot0;
                                report = report.explicit_content_scan_version;
                                michal['explicitContentScanVersion'] = report;
                                tangon = _closure2_slot0;
                                tangon = tangon.failed_states;
                                michal['failedStates'] = tangon;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            }
                        };
                        zuuluu = oscard.bind(golfie)(zuuluu);
                        zuuluu = _closure2_slot0;
                        zuuluu = zuuluu.auth_token;
                        if(!(tangon != zuuluu)) { _fun00052_ip = 398; continue _fun00051 }
 346:
                        tangon = _closure1_slot25;
                        zuuluu = {};
                        oscard = 'UPDATE_TOKEN';
                        zuuluu['type'] = oscard;
                        oscard = _closure2_slot0;
                        oscard = oscard.auth_token;
                        zuuluu['token'] = oscard;
                        report = _closure2_slot0;
                        report = report.user;
                        report = report.id;
                        zuuluu['userId'] = report;
                        zuuluu = tangon.bind(entity)(zuuluu);
 398:
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot3;
                        michal = 13;
                        report = tangon[michal];
                        report = zuuluu.bind(entity)(report);
                        oscard = report.localPresenceState;
                        report = oscard.update;
                        report = report.bind(oscard)();
                        michal = tangon[michal];
                        michal = zuuluu.bind(entity)(michal);
                        zuuluu = michal.localVoiceState;
                        michal = zuuluu.update;
                        michal = michal.bind(zuuluu)();
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            _fun00050_ip = 100; continue _fun00049;
 79:
            zuuluu = _closure1_slot25;
            michal = {};
            entity = 'LOGOUT';
            michal['type'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 100:
            entity = undefined;
            return entity;
        }
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    golfie = ['STATE_UPDATE'];
    tangon = function(argFoo) {
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot25;
            michal = {};
            entity = 'CONNECTION_OPEN_STATE_UPDATE';
            michal['type'] = entity;
            golfie = report.apex_experiments;
            tangon = null;
            option = tangon != golfie;
            entity = undefined;
            oscard = undefined;
            if(!option) { _fun00058_ip = 42; continue _fun00057 }
 39:
            oscard = golfie;
 42:
            michal['apexExperiments'] = oscard;
            report = report.user_activities;
            oscard = tangon != report;
            tangon = undefined;
            if(!oscard) { _fun00058_ip = 65; continue _fun00057 }
 62:
            tangon = report;
 65:
            michal['userActivities'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['RESUMED'];
    tangon = function() {
        tangon = _closure1_slot0;
        report = _closure1_slot3;
        zuuluu = 13;
        oscard = report[zuuluu];
        entity = undefined;
        oscard = tangon.bind(entity)(oscard);
        golfie = oscard.localPresenceState;
        oscard = golfie.forceUpdate;
        oscard = oscard.bind(golfie)();
        zuuluu = report[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        tangon = zuuluu.localVoiceState;
        zuuluu = tangon.forceUpdate;
        zuuluu = zuuluu.bind(tangon)();
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'CONNECTION_RESUMED';
        michal['type'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['TYPING_START'];
    tangon = function(argFoo) {
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.member;
            michal = null;
            if(!(michal != zuuluu)) { _fun00060_ip = 53; continue _fun00059 }
 15:
            oscard = _closure1_slot26;
            report = entity.guild_id;
            michal = entity.member;
            tangon = michal.user;
            zuuluu = entity.member;
            michal = undefined;
            michal = oscard.bind(michal)(report, tangon, zuuluu);
 53:
            zuuluu = _closure1_slot25;
            michal = {};
            tangon = 'TYPING_START';
            michal['type'] = tangon;
            tangon = entity.channel_id;
            michal['channelId'] = tangon;
            entity = entity.user_id;
            michal['userId'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_RING_START'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_RING_START';
        michal['type'] = tangon;
        tangon = entity.ringing;
        michal['ringing'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        entity = entity.guild_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_RING_STOP'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_RING_STOP';
        michal['type'] = tangon;
        tangon = entity.ringing;
        michal['ringing'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        entity = entity.guild_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['ACTIVITY_START'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'ACTIVITY_START';
        michal['type'] = tangon;
        tangon = entity.user_id;
        michal['userId'] = tangon;
        entity = entity.activity;
        michal['activity'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['ACTIVITY_USER_ACTION'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'ACTIVITY_USER_ACTION';
        michal['type'] = tangon;
        tangon = entity.action_type;
        michal['actionType'] = tangon;
        tangon = entity.user;
        michal['user'] = tangon;
        tangon = entity.application_id;
        michal['applicationId'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        entity = entity.message_id;
        michal['messageId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    verify = ['MESSAGE_CREATE'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot27;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            report = tangon.author;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00062_ip = 80; continue _fun00061 }
 29:
            zuuluu = _closure1_slot25;
            michal = {'type': 'MESSAGE_CREATE', 'guildId': null, 'channelId': null, 'message': null, 'optimistic': false, 'isPushNotification': false};
            report = tangon.guild_id;
            michal['guildId'] = report;
            report = tangon.channel_id;
            michal['channelId'] = report;
            michal['message'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 80:
            return entity;
        }
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    verify = ['MESSAGE_UPDATE'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        tangon = argFoo;
        zuuluu = _closure1_slot27;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(tangon);
        zuuluu = _closure1_slot25;
        michal = {};
        report = 'MESSAGE_UPDATE';
        michal['type'] = report;
        report = tangon.guild_id;
        michal['guildId'] = report;
        michal['message'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    verify = ['MESSAGE_DELETE'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'MESSAGE_DELETE';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        tangon = entity.id;
        michal['id'] = tangon;
        entity = entity.channel_id;
        michal['channelId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    verify = ['MESSAGE_DELETE_BULK'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'MESSAGE_DELETE_BULK';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        tangon = entity.ids;
        michal['ids'] = tangon;
        entity = entity.channel_id;
        michal['channelId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    verify = ['MESSAGE_ACK'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildFromChannelId;
        entity = argFoo;
        entity = entity.channel_id;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'MESSAGE_ACK';
        michal['type'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        tangon = entity.message_id;
        michal['messageId'] = tangon;
        tangon = entity.manual;
        michal['manual'] = tangon;
        tangon = entity.mention_count;
        michal['newMentionCount'] = tangon;
        entity = entity.version;
        michal['version'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    golfie = ['GUILD_FEATURE_ACK'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_FEATURE_ACK';
        michal['type'] = tangon;
        tangon = entity.resource_id;
        michal['id'] = tangon;
        tangon = entity.ack_type;
        michal['ackType'] = tangon;
        entity = entity.entity_id;
        michal['ackedId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_NON_CHANNEL_ACK'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'USER_NON_CHANNEL_ACK';
        michal['type'] = tangon;
        tangon = entity.ack_type;
        michal['ackType'] = tangon;
        entity = entity.entity_id;
        michal['ackedId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    verify = ['CHANNEL_PINS_ACK'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'CHANNEL_PINS_ACK';
        michal['type'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        tangon = entity.timestamp;
        michal['timestamp'] = tangon;
        entity = entity.version;
        michal['version'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    verify = ['CHANNEL_PINS_UPDATE'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'CHANNEL_PINS_UPDATE';
        michal['type'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        entity = entity.last_pin_timestamp;
        michal['lastPinTimestamp'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    verify = ['CHANNEL_CREATE', 'CHANNEL_DELETE'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo, argBar) {
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = argBar;
        michal['type'] = tangon;
        report = _closure1_slot6;
        entity = undefined;
        tangon = argFoo;
        tangon = report.bind(entity)(tangon);
        michal['channel'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    golfie = ['VOICE_CHANNEL_STATUS_UPDATE'];
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = argBar;
        michal['type'] = tangon;
        tangon = entity.id;
        michal['id'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        entity = entity.status;
        michal['status'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['CHANNEL_STATUSES'];
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = argBar;
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        entity = entity.channels;
        michal['channels'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['CHANNEL_MEMBER_COUNT_UPDATE'];
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = argBar;
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        tangon = entity.presence_count;
        michal['online'] = tangon;
        entity = entity.member_count;
        michal['total'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    verify = ['CHANNEL_UPDATE'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        zuuluu = _closure1_slot18;
        michal = zuuluu.add;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    verify = ['THREAD_CREATE', 'THREAD_UPDATE', 'THREAD_DELETE'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo, argBar) {
        report = argFoo;
        oscard = report.newly_created;
        zuuluu = _closure1_slot5;
        michal = _closure1_slot4;
        entity = undefined;
        report = zuuluu.bind(entity)(report, michal);
        zuuluu = _closure1_slot25;
        michal = {};
        golfie = argBar;
        michal['type'] = golfie;
        michal['isNewlyCreated'] = oscard;
        tangon = _closure1_slot6;
        tangon = tangon.bind(entity)(report);
        michal['channel'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    verify = ['THREAD_LIST_SYNC'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot25;
            michal = {};
            entity = 'THREAD_LIST_SYNC';
            michal['type'] = entity;
            entity = tangon.guild_id;
            michal['guildId'] = entity;
            golfie = tangon.threads;
            report = golfie.map;
            entity = function(argFoo) {
                _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                    zuuluu = argFoo;
                    report = _closure1_slot9;
                    tangon = report.getChannel;
                    michal = zuuluu.parent_id;
                    michal = tangon.bind(report)(michal);
                    tangon = null;
                    if(!(tangon != michal)) { _fun00066_ip = 55; continue _fun00065 }
 32:
                    tangon = michal.nsfw;
                    zuuluu['nsfw'] = tangon;
                    michal = michal.type;
                    zuuluu['parentChannelThreadType'] = michal;
 55:
                    michal = _closure1_slot6;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            entity = report.bind(golfie)(entity);
            michal['threads'] = entity;
            entity = tangon.most_recent_messages;
            michal['mostRecentMessages'] = entity;
            golfie = tangon.members;
            entity = undefined;
            report = undefined;
            if(!golfie) { _fun00064_ip = 130; continue _fun00063 }
 81:
            offset = _closure1_slot1;
            yankee = _closure1_slot3;
            oscard = 20;
            oscard = yankee[oscard];
            verify = offset.bind(entity)(oscard);
            option = verify.map;
            golfie = tangon.members;
            oscard = 21;
            oscard = yankee[oscard];
            oscard = offset.bind(entity)(oscard);
            report = option.bind(verify)(golfie, oscard);
 130:
            michal['members'] = report;
            tangon = tangon.channel_ids;
            michal['channelIds'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    golfie = ['THREAD_MEMBER_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'THREAD_MEMBER_UPDATE';
        michal['type'] = tangon;
        tangon = entity.id;
        michal['id'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        tangon = entity.user_id;
        michal['userId'] = tangon;
        tangon = entity.flags;
        michal['flags'] = tangon;
        tangon = entity.muted;
        michal['muted'] = tangon;
        tangon = entity.mute_config;
        michal['muteConfig'] = tangon;
        entity = entity.join_timestamp;
        michal['joinTimestamp'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['THREAD_MEMBERS_UPDATE'];
    tangon = function(argFoo) {
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            zuuluu = _closure1_slot25;
            michal = {};
            entity = 'THREAD_MEMBERS_UPDATE';
            michal['type'] = entity;
            entity = tangon.id;
            michal['id'] = entity;
            entity = tangon.guild_id;
            michal['guildId'] = entity;
            entity = tangon.member_count;
            michal['memberCount'] = entity;
            option = tangon.added_members;
            entity = null;
            golfie = entity == option;
            entity = undefined;
            report = undefined;
            if(golfie) { _fun00068_ip = 91; continue _fun00067 }
 76:
            golfie = option.map;
            oscard = function(argFoo) {
                michal = argFoo;
                entity = {};
                zuuluu = michal.id;
                entity['id'] = zuuluu;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.guild_id;
                entity['guildId'] = zuuluu;
                zuuluu = michal.user_id;
                entity['userId'] = zuuluu;
                zuuluu = michal.flags;
                entity['flags'] = zuuluu;
                michal = michal.join_timestamp;
                entity['joinTimestamp'] = michal;
                return entity;
            };
            report = golfie.bind(option)(oscard);
 91:
            michal['addedMembers'] = report;
            report = tangon.removed_member_ids;
            michal['removedMemberIds'] = report;
            tangon = tangon.member_ids_preview;
            michal['memberIdsPreview'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['FORUM_UNREADS'];
    tangon = function(argFoo) {
        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
            entity = argFoo;
            michal = entity.permission_denied;
            if(michal) { _fun00070_ip = 75; continue _fun00069 }
 12:
            zuuluu = _closure1_slot25;
            michal = {};
            tangon = 'FORUM_UNREADS';
            michal['type'] = tangon;
            tangon = entity.channel_id;
            michal['channelId'] = tangon;
            report = entity.threads;
            tangon = report.map;
            entity = function(argFoo) {
                michal = argFoo;
                entity = {};
                zuuluu = michal.thread_id;
                entity['threadId'] = zuuluu;
                zuuluu = michal.missing;
                entity['missing'] = zuuluu;
                michal = michal.count;
                entity['count'] = michal;
                return entity;
            };
            entity = tangon.bind(report)(entity);
            michal['threads'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 75:
            entity = undefined;
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['SOUNDBOARD_SOUNDS'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot19;
        michal = zuuluu.add;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['CHANNEL_RECIPIENT_ADD', 'CHANNEL_RECIPIENT_REMOVE'];
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        report = _closure1_slot9;
        tangon = report.getBasicChannel;
        zuuluu = entity.channel_id;
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot25;
        michal = {};
        report = argBar;
        michal['type'] = report;
        report = entity.channel_id;
        michal['channelId'] = report;
        report = entity.user;
        michal['user'] = report;
        entity = entity.nick;
        michal['nick'] = entity;
        entity = null;
        entity = entity != tangon;
        michal['isMember'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    verify = ['GUILD_CREATE'];
    golfie = function(argFoo) {
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            michal = argFoo;
            tangon = michal.data_mode;
            zuuluu = 'full';
            entity = null;
            if(!(zuuluu !== tangon)) { _fun00072_ip = 50; continue _fun00071 }
 19:
            tangon = _closure1_slot10;
            zuuluu = tangon.loadGuildIds;
            report = michal.id;
            michal = new Array(1);
            michal[0] = report;
            entity = zuuluu.bind(tangon)(michal);
 50:
            return entity;
        }
    };
    tangon = function(argFoo) {
        _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.unavailable;
            if(zuuluu) { _fun00074_ip = 128; continue _fun00073 }
 17:
            tangon = _closure1_slot2;
            option = _closure1_slot3;
            zuuluu = 16;
            zuuluu = option[zuuluu];
            report = undefined;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.hydratePreviouslyUnavailableGuild;
            golfie = zuuluu.bind(tangon)(entity);
            var _closure2_slot0 = golfie;
            tangon = _closure1_slot1;
            zuuluu = 22;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.createGuild;
            zuuluu = zuuluu.bind(tangon)(golfie);
            tangon = _closure1_slot25;
            zuuluu = {};
            option = 'VOICE_STATE_UPDATES';
            zuuluu['type'] = option;
            option = golfie.voice_states;
            golfie = option.map;
            oscard = function(argFoo) {
                _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                    zuuluu = argFoo;
                    entity = {};
                    michal = zuuluu.user_id;
                    entity['userId'] = michal;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity['guildId'] = michal;
                    michal = zuuluu.session_id;
                    entity['sessionId'] = michal;
                    michal = zuuluu.channel_id;
                    entity['channelId'] = michal;
                    michal = zuuluu.mute;
                    entity['mute'] = michal;
                    michal = zuuluu.deaf;
                    entity['deaf'] = michal;
                    michal = zuuluu.self_mute;
                    entity['selfMute'] = michal;
                    michal = zuuluu.self_deaf;
                    entity['selfDeaf'] = michal;
                    michal = zuuluu.self_video;
                    if(michal) { _fun00076_ip = 106; continue _fun00075 }
 104:
                    michal = false;
 106:
                    entity['selfVideo'] = michal;
                    michal = zuuluu.suppress;
                    entity['suppress'] = michal;
                    michal = zuuluu.self_stream;
                    if(michal) { _fun00076_ip = 133; continue _fun00075 }
 131:
                    michal = false;
 133:
                    entity['selfStream'] = michal;
                    report = zuuluu.request_to_speak_timestamp;
                    michal = null;
                    oscard = michal != report;
                    tangon = null;
                    if(!oscard) { _fun00076_ip = 158; continue _fun00075 }
 155:
                    tangon = report;
 158:
                    entity['requestToSpeakTimestamp'] = tangon;
                    zuuluu = zuuluu.discoverable;
                    michal = michal == zuuluu;
                    if(michal) { _fun00076_ip = 179; continue _fun00075 }
 176:
                    michal = zuuluu;
 179:
                    entity['discoverable'] = michal;
                    return entity;
                }
            };
            oscard = golfie.bind(option)(oscard);
            zuuluu['voiceStates'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            _fun00074_ip = 158; continue _fun00073;
 128:
            zuuluu = _closure1_slot25;
            michal = {};
            tangon = 'GUILD_UNAVAILABLE';
            michal['type'] = tangon;
            entity = entity.id;
            michal['guildId'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 158:
            entity = undefined;
            return entity;
        }
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    golfie = ['GUILD_UPDATE'];
    tangon = function(argFoo) {
        _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot25;
            zuuluu = {};
            entity = 'GUILD_UPDATE';
            zuuluu['type'] = entity;
            zuuluu['guild'] = tangon;
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = tangon.unavailable;
            if(!zuuluu) { _fun00078_ip = 68; continue _fun00077 }
 40:
            zuuluu = _closure1_slot25;
            michal = {};
            report = 'GUILD_UNAVAILABLE';
            michal['type'] = report;
            tangon = tangon.id;
            michal['guildId'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 68:
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_DELETE'];
    tangon = function(argFoo) {
        _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot25;
            zuuluu = {};
            entity = 'GUILD_DELETE';
            zuuluu['type'] = entity;
            zuuluu['guild'] = tangon;
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = tangon.geo_restricted;
            if(zuuluu) { _fun00080_ip = 79; continue _fun00079 }
 40:
            zuuluu = tangon.unavailable;
            if(!zuuluu) { _fun00080_ip = 125; continue _fun00079 }
 49:
            report = _closure1_slot25;
            zuuluu = {};
            oscard = 'GUILD_UNAVAILABLE';
            zuuluu['type'] = oscard;
            oscard = tangon.id;
            zuuluu['guildId'] = oscard;
            zuuluu = report.bind(entity)(zuuluu);
            _fun00080_ip = 125; continue _fun00079;
 79:
            zuuluu = _closure1_slot25;
            michal = {};
            report = 'GUILD_GEO_RESTRICTED';
            michal['type'] = report;
            report = tangon.id;
            michal['guildId'] = report;
            report = tangon.icon;
            michal['icon'] = report;
            tangon = tangon.name;
            michal['name'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 125:
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_MEMBERS_CHUNK'];
    tangon = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot3;
        entity = 15;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        tangon = zuuluu.Emitter;
        zuuluu = tangon.batched;
        michal = function() {
            _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                oscard = _closure1_slot20;
                report = oscard.add;
                tangon = {};
                zuuluu = _closure2_slot0;
                golfie = zuuluu.guild_id;
                tangon['guildId'] = golfie;
                golfie = zuuluu.members;
                tangon['members'] = golfie;
                golfie = zuuluu.not_found;
                tangon['notFound'] = golfie;
                tangon = report.bind(oscard)(tangon);
                tangon = zuuluu.presences;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00082_ip = 96; continue _fun00081 }
 69:
                michal = _closure2_slot0;
                tangon = michal.presences;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    entity = argFoo;
                    option = entity.user;
                    golfie = entity.status;
                    tangon = entity.client_status;
                    oscard = entity.activities;
                    report = entity.hidden_activities;
                    entity = entity.processed_at_timestamp;
                    zuuluu = _closure1_slot29;
                    michal = {};
                    verify = _closure2_slot0;
                    verify = verify.guild_id;
                    michal['guildId'] = verify;
                    michal['user'] = option;
                    michal['status'] = golfie;
                    michal['activities'] = oscard;
                    michal['hiddenActivities'] = report;
                    michal['clientStatus'] = tangon;
                    michal['processedAtTimestamp'] = entity;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
 96:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.flush;
                michal = 'GUILD_MEMBERS_CHUNK';
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['THREAD_MEMBER_LIST_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot3;
        entity = 15;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        tangon = zuuluu.Emitter;
        zuuluu = tangon.batched;
        michal = function() {
            _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                oscard = _closure1_slot25;
                report = {};
                entity = 'THREAD_MEMBER_LIST_UPDATE';
                report['type'] = entity;
                tangon = _closure2_slot0;
                entity = tangon.guild_id;
                report['guildId'] = entity;
                entity = tangon.thread_id;
                report['threadId'] = entity;
                entity = tangon.members;
                report['members'] = entity;
                entity = undefined;
                report = oscard.bind(entity)(report);
                report = tangon.presences;
                tangon = null;
                if(!(tangon != report)) { _fun00084_ip = 101; continue _fun00083 }
 74:
                zuuluu = _closure2_slot0;
                report = zuuluu.presences;
                tangon = report.forEach;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    option = entity.user;
                    golfie = entity.status;
                    tangon = entity.client_status;
                    oscard = entity.activities;
                    report = entity.hidden_activities;
                    entity = entity.processed_at_timestamp;
                    zuuluu = _closure1_slot29;
                    michal = {};
                    verify = _closure2_slot0;
                    verify = verify.guild_id;
                    michal['guildId'] = verify;
                    michal['user'] = option;
                    michal['status'] = golfie;
                    michal['activities'] = oscard;
                    michal['hiddenActivities'] = report;
                    michal['clientStatus'] = tangon;
                    michal['processedAtTimestamp'] = entity;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
 101:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot3;
                michal = 12;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.flush;
                michal = michal.bind(zuuluu)();
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_BAN_ADD', 'GUILD_BAN_REMOVE', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'GUILD_MEMBER_REMOVE'];
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = argBar;
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        tangon = entity.user;
        michal['user'] = tangon;
        tangon = entity.avatar;
        michal['avatar'] = tangon;
        tangon = entity.avatar_decoration_data;
        michal['avatarDecoration'] = tangon;
        tangon = entity.roles;
        michal['roles'] = tangon;
        tangon = entity.nick;
        michal['nick'] = tangon;
        tangon = entity.premium_since;
        michal['premiumSince'] = tangon;
        tangon = entity.pending;
        michal['isPending'] = tangon;
        tangon = entity.joined_at;
        michal['joinedAt'] = tangon;
        tangon = entity.communication_disabled_until;
        michal['communicationDisabledUntil'] = tangon;
        tangon = entity.unusual_dm_activity_until;
        michal['unusualDMActivityUntil'] = tangon;
        entity = entity.flags;
        michal['flags'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    verify = ['GUILD_ROLE_CREATE', 'GUILD_ROLE_UPDATE'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = argBar;
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        entity = entity.role;
        michal['role'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    verify = ['GUILD_ROLE_DELETE'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_ROLE_DELETE';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        tangon = entity.role_id;
        michal['roleId'] = tangon;
        entity = entity.version;
        michal['version'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    golfie = ['GUILD_EMOJIS_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_EMOJIS_UPDATE';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        entity = entity.emojis;
        michal['emojis'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_STICKERS_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_STICKERS_UPDATE';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        entity = entity.stickers;
        michal['stickers'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_INTEGRATIONS_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GUILD_INTEGRATIONS_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.guild_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['INTEGRATION_CREATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'INTEGRATION_CREATE';
        michal['type'] = tangon;
        tangon = entity.application;
        michal['application'] = tangon;
        entity = entity.guild_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['INTEGRATION_DELETE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'INTEGRATION_DELETE';
        michal['type'] = tangon;
        tangon = entity.application_id;
        michal['applicationId'] = tangon;
        entity = entity.guild_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'CURRENT_USER_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['user'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_SETTINGS_PROTO_UPDATE'];
    tangon = function(argFoo) {
        _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            michal = zuuluu[michal];
            zuuluu = undefined;
            golfie = report.bind(zuuluu)(michal);
            oscard = golfie.b64ToProtoWithType;
            michal = tangon.settings;
            report = michal.type;
            michal = tangon.settings;
            michal = michal.proto;
            oscard = oscard.bind(golfie)(report, michal);
            michal = null;
            if(!(michal != oscard)) { _fun00086_ip = 137; continue _fun00085 }
 69:
            report = 'string';
            michal = typeof oscard;
            if(!(report !== michal)) { _fun00086_ip = 139; continue _fun00085 }
 80:
            michal = _closure1_slot25;
            entity = {};
            report = 'USER_SETTINGS_PROTO_UPDATE';
            entity['type'] = report;
            report = {};
            report['proto'] = oscard;
            oscard = tangon.settings;
            oscard = oscard.type;
            report['type'] = oscard;
            entity['settings'] = report;
            tangon = tangon.partial;
            entity['partial'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 137:
            return zuuluu;
 139:
            entity = global;
            michal = entity.Error;
            entity = 'UserSettingsProto must not be a string';
            entity = michal.bind(zuuluu)(entity);
            throw entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_GUILD_SETTINGS_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'USER_GUILD_SETTINGS_FULL_UPDATE';
        michal['type'] = entity;
        entity = new Array(1);
        tangon = argFoo;
        entity[0] = tangon;
        michal['userGuildSettings'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_CONNECTIONS_UPDATE'];
    tangon = function() {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'USER_CONNECTIONS_UPDATE';
        michal['type'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_REQUIRED_ACTION_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'USER_REQUIRED_ACTION_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.required_action;
        michal['requiredAction'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_NOTE_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'USER_NOTE_UPDATE';
        michal['type'] = entity;
        tangon = argFoo;
        report = michal;
        entity = copyDataProperties(report, tangon);
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['RELATIONSHIP_ADD'];
    tangon = function(argFoo) {
        _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
            entity = argFoo;
            zuuluu = _closure1_slot25;
            michal = {};
            tangon = 'RELATIONSHIP_ADD';
            michal['type'] = tangon;
            tangon = {};
            report = entity.id;
            tangon['id'] = report;
            report = entity.type;
            tangon['type'] = report;
            report = entity.user;
            tangon['user'] = report;
            report = entity.since;
            tangon['since'] = report;
            report = entity.nickname;
            tangon['nickname'] = report;
            report = entity.is_spam_request;
            if(report) { _fun00088_ip = 82; continue _fun00087 }
 80:
            report = false;
 82:
            tangon['isSpamRequest'] = report;
            report = entity.is_stranger_request;
            if(report) { _fun00088_ip = 98; continue _fun00087 }
 96:
            report = false;
 98:
            tangon['isStrangerRequest'] = report;
            report = entity.user_ignored;
            if(report) { _fun00088_ip = 114; continue _fun00087 }
 112:
            report = false;
 114:
            tangon['userIgnored'] = report;
            report = entity.origin_application_id;
            tangon['originApplicationId'] = report;
            michal['relationship'] = tangon;
            tangon = entity.should_notify;
            entity = true;
            entity = entity === tangon;
            michal['shouldNotify'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['RELATIONSHIP_REMOVE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'RELATIONSHIP_REMOVE';
        michal['type'] = entity;
        entity = argFoo;
        michal['relationship'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['RELATIONSHIP_UPDATE'];
    tangon = function(argFoo) {
        _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot25;
            michal = {};
            entity = 'RELATIONSHIP_UPDATE';
            michal['type'] = entity;
            entity = {};
            report = tangon.id;
            entity['id'] = report;
            report = tangon.type;
            entity['type'] = report;
            report = tangon.user;
            entity['user'] = report;
            report = tangon.nickname;
            entity['nickname'] = report;
            report = tangon.since;
            entity['since'] = report;
            report = tangon.is_spam_request;
            if(report) { _fun00090_ip = 82; continue _fun00089 }
 80:
            report = false;
 82:
            entity['isSpamRequest'] = report;
            report = tangon.is_stranger_request;
            if(report) { _fun00090_ip = 98; continue _fun00089 }
 96:
            report = false;
 98:
            entity['isStrangerRequest'] = report;
            report = tangon.user_ignored;
            if(report) { _fun00090_ip = 114; continue _fun00089 }
 112:
            report = false;
 114:
            entity['userIgnored'] = report;
            tangon = tangon.origin_application_id;
            entity['originApplicationId'] = tangon;
            michal['relationship'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GAME_RELATIONSHIP_ADD'];
    tangon = function(argFoo) {
        tangon = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GAME_RELATIONSHIP_ADD';
        michal['type'] = entity;
        entity = {};
        report = tangon.id;
        entity['id'] = report;
        report = tangon.application_id;
        entity['applicationId'] = report;
        report = tangon.type;
        entity['type'] = report;
        report = tangon.since;
        entity['since'] = report;
        report = tangon.dm_access_type;
        entity['dmAccessType'] = report;
        tangon = tangon.user;
        entity['user'] = tangon;
        michal['gameRelationship'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GAME_RELATIONSHIP_REMOVE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GAME_RELATIONSHIP_REMOVE';
        michal['type'] = tangon;
        tangon = entity.id;
        michal['userId'] = tangon;
        entity = entity.application_id;
        michal['applicationId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['PRESENCE_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot29;
        michal = {};
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        tangon = entity.user;
        michal['user'] = tangon;
        tangon = entity.status;
        michal['status'] = tangon;
        tangon = entity.activities;
        michal['activities'] = tangon;
        tangon = entity.hidden_activities;
        michal['hiddenActivities'] = tangon;
        tangon = entity.client_status;
        michal['clientStatus'] = tangon;
        entity = entity.processed_at_timestamp;
        michal['processedAtTimestamp'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['PRESENCES_REPLACE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'PRESENCES_REPLACE';
        michal['type'] = entity;
        entity = argFoo;
        michal['presences'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['SESSIONS_REPLACE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'SESSIONS_REPLACE';
        michal['type'] = tangon;
        report = _closure1_slot28;
        entity = undefined;
        tangon = argFoo;
        tangon = report.bind(entity)(tangon);
        michal['sessions'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['VOICE_STATE_UPDATE'];
    tangon = function(argFoo) {
        _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
            entity = argFoo;
            michal = entity.member;
            oscard = null;
            if(!(oscard != michal)) { _fun00092_ip = 53; continue _fun00091 }
 15:
            golfie = _closure1_slot26;
            report = entity.guild_id;
            michal = entity.member;
            tangon = michal.user;
            zuuluu = entity.member;
            michal = undefined;
            michal = golfie.bind(michal)(report, tangon, zuuluu);
 53:
            zuuluu = _closure1_slot25;
            michal = {};
            tangon = 'VOICE_STATE_UPDATES';
            michal['type'] = tangon;
            tangon = {};
            golfie = entity.user_id;
            tangon['userId'] = golfie;
            golfie = entity.guild_id;
            tangon['guildId'] = golfie;
            golfie = entity.session_id;
            tangon['sessionId'] = golfie;
            golfie = entity.channel_id;
            tangon['channelId'] = golfie;
            golfie = entity.mute;
            tangon['mute'] = golfie;
            golfie = entity.deaf;
            tangon['deaf'] = golfie;
            golfie = entity.self_mute;
            tangon['selfMute'] = golfie;
            golfie = entity.self_deaf;
            tangon['selfDeaf'] = golfie;
            golfie = entity.self_video;
            if(golfie) { _fun00092_ip = 166; continue _fun00091 }
 164:
            golfie = false;
 166:
            tangon['selfVideo'] = golfie;
            golfie = entity.suppress;
            tangon['suppress'] = golfie;
            golfie = entity.self_stream;
            if(golfie) { _fun00092_ip = 193; continue _fun00091 }
 191:
            golfie = false;
 193:
            tangon['selfStream'] = golfie;
            option = entity.request_to_speak_timestamp;
            verify = oscard != option;
            golfie = null;
            if(!verify) { _fun00092_ip = 216; continue _fun00091 }
 213:
            golfie = option;
 216:
            tangon['requestToSpeakTimestamp'] = golfie;
            golfie = entity.discoverable;
            oscard = oscard == golfie;
            if(oscard) { _fun00092_ip = 237; continue _fun00091 }
 234:
            oscard = golfie;
 237:
            tangon['discoverable'] = oscard;
            golfie = _closure1_slot14;
            oscard = golfie.getUserVoiceChannelId;
            report = entity.guild_id;
            entity = entity.user_id;
            entity = oscard.bind(golfie)(report, entity);
            tangon['oldChannelId'] = entity;
            entity = new Array(1);
            entity[0] = tangon;
            michal['voiceStates'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['VOICE_SERVER_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'VOICE_SERVER_UPDATE';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        tangon = entity.endpoint;
        michal['endpoint'] = tangon;
        entity = entity.token;
        michal['token'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['CALL_CREATE'];
    tangon = function(argFoo) {
        _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
            zuuluu = argFoo;
            report = _closure1_slot25;
            tangon = {};
            entity = 'CALL_CREATE';
            tangon['type'] = entity;
            entity = zuuluu.channel_id;
            tangon['channelId'] = entity;
            entity = zuuluu.message_id;
            tangon['messageId'] = entity;
            entity = zuuluu.region;
            tangon['region'] = entity;
            entity = zuuluu.ringing;
            tangon['ringing'] = entity;
            entity = undefined;
            tangon = report.bind(entity)(tangon);
            oscard = zuuluu.voice_states;
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00094_ip = 121; continue _fun00093 }
 80:
            zuuluu = _closure1_slot25;
            michal = {};
            tangon = 'VOICE_STATE_UPDATES';
            michal['type'] = tangon;
            report = oscard.map;
            tangon = function(argFoo) {
                _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                    zuuluu = argFoo;
                    entity = {};
                    michal = zuuluu.user_id;
                    entity['userId'] = michal;
                    michal = null;
                    entity['guildId'] = michal;
                    tangon = zuuluu.session_id;
                    entity['sessionId'] = tangon;
                    tangon = zuuluu.channel_id;
                    entity['channelId'] = tangon;
                    tangon = zuuluu.mute;
                    entity['mute'] = tangon;
                    tangon = zuuluu.deaf;
                    entity['deaf'] = tangon;
                    tangon = zuuluu.self_mute;
                    entity['selfMute'] = tangon;
                    tangon = zuuluu.self_deaf;
                    entity['selfDeaf'] = tangon;
                    tangon = zuuluu.self_video;
                    if(tangon) { _fun00096_ip = 96; continue _fun00095 }
 94:
                    tangon = false;
 96:
                    entity['selfVideo'] = tangon;
                    tangon = zuuluu.suppress;
                    entity['suppress'] = tangon;
                    tangon = zuuluu.self_stream;
                    if(tangon) { _fun00096_ip = 123; continue _fun00095 }
 121:
                    tangon = false;
 123:
                    entity['selfStream'] = tangon;
                    report = zuuluu.request_to_speak_timestamp;
                    oscard = michal != report;
                    tangon = null;
                    if(!oscard) { _fun00096_ip = 146; continue _fun00095 }
 143:
                    tangon = report;
 146:
                    entity['requestToSpeakTimestamp'] = tangon;
                    zuuluu = zuuluu.discoverable;
                    michal = michal == zuuluu;
                    if(michal) { _fun00096_ip = 167; continue _fun00095 }
 164:
                    michal = zuuluu;
 167:
                    entity['discoverable'] = michal;
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon);
            michal['voiceStates'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 121:
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['CALL_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'CALL_UPDATE';
        michal['type'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        tangon = entity.message_id;
        michal['messageId'] = tangon;
        tangon = entity.region;
        michal['region'] = tangon;
        entity = entity.ringing;
        michal['ringing'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['CALL_DELETE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'CALL_DELETE';
        michal['type'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        entity = entity.unavailable;
        michal['unavailable'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['OAUTH2_TOKEN_REVOKE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'OAUTH2_TOKEN_REVOKE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.access_token;
        michal['accessToken'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['RECENT_MENTION_DELETE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'RECENT_MENTION_DELETE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.message_id;
        michal['id'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['SAVED_MESSAGE_CREATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'SAVED_MESSAGE_CREATE';
        michal['type'] = tangon;
        report = _closure1_slot0;
        tangon = _closure1_slot3;
        entity = 23;
        tangon = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.savedMessageCreateObjectToClient;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        michal['savedMessage'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['SAVED_MESSAGE_DELETE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'SAVED_MESSAGE_DELETE';
        michal['type'] = tangon;
        report = _closure1_slot0;
        tangon = _closure1_slot3;
        entity = 23;
        tangon = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.savedMessageDeleteObjectToClient;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        michal['savedMessageData'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['FRIEND_SUGGESTION_CREATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'FRIEND_SUGGESTION_CREATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['suggestion'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['FRIEND_SUGGESTION_DELETE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'FRIEND_SUGGESTION_DELETE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.suggested_user_id;
        michal['suggestedUserId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['WEBHOOKS_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'WEBHOOKS_UPDATE';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        entity = entity.channel_id;
        michal['channelId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'];
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = argBar;
        michal['type'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        tangon = entity.message_id;
        michal['messageId'] = tangon;
        tangon = entity.user_id;
        michal['userId'] = tangon;
        tangon = entity.emoji;
        michal['emoji'] = tangon;
        tangon = entity.burst_colors;
        michal['colors'] = tangon;
        tangon = entity.type;
        michal['reactionType'] = tangon;
        entity = entity.message_author_id;
        michal['messageAuthorId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['MESSAGE_POLL_VOTE_ADD', 'MESSAGE_POLL_VOTE_REMOVE'];
    tangon = function(argFoo, argBar) {
        _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot25;
            michal = {};
            tangon = 'MESSAGE_REACTION_REMOVE';
            golfie = 'MESSAGE_POLL_VOTE_ADD';
            oscard = argBar;
            if(!(golfie === oscard)) { _fun00098_ip = 33; continue _fun00097 }
 29:
            tangon = 'MESSAGE_REACTION_ADD';
 33:
            michal['type'] = tangon;
            tangon = report.channel_id;
            michal['channelId'] = tangon;
            tangon = report.message_id;
            michal['messageId'] = tangon;
            tangon = report.user_id;
            michal['userId'] = tangon;
            tangon = {};
            report = report.answer_id;
            tangon['id'] = report;
            report = '';
            tangon['name'] = report;
            michal['emoji'] = tangon;
            report = _closure1_slot0;
            tangon = _closure1_slot3;
            entity = 24;
            tangon = tangon[entity];
            entity = undefined;
            tangon = report.bind(entity)(tangon);
            tangon = tangon.ReactionTypes;
            tangon = tangon.VOTE;
            michal['reactionType'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['MESSAGE_REACTION_REMOVE_ALL'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'MESSAGE_REACTION_REMOVE_ALL';
        michal['type'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        entity = entity.message_id;
        michal['messageId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['MESSAGE_REACTION_REMOVE_EMOJI'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'MESSAGE_REACTION_REMOVE_EMOJI';
        michal['type'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        tangon = entity.message_id;
        michal['messageId'] = tangon;
        entity = entity.emoji;
        michal['emoji'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['MESSAGE_REACTION_ADD_MANY'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'MESSAGE_REACTION_ADD_MANY';
        michal['type'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        tangon = entity.message_id;
        michal['messageId'] = tangon;
        entity = entity.reactions;
        michal['reactions'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['PAYMENT_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'PAYMENT_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['payment'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['ENTITLEMENT_CREATE', 'ENTITLEMENT_UPDATE', 'ENTITLEMENT_DELETE'];
    tangon = function(argFoo, argBar) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = argBar;
        michal['type'] = entity;
        entity = argFoo;
        michal['entitlement'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_PAYMENT_SOURCES_UPDATE'];
    tangon = function() {
        _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
            zuuluu = _closure1_slot12;
            michal = zuuluu.hasLayers;
            michal = michal.bind(zuuluu)();
            if(!michal) { _fun00100_ip = 95; continue _fun00099 }
 20:
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            michal = 25;
            michal = report[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.fetchPaymentSources;
            michal = michal.bind(zuuluu)();
            zuuluu = _closure1_slot2;
            michal = 26;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.fetchSubscriptionPlansBySKUs;
            tangon = _closure1_slot15;
            entity = tangon.getFetchedSKUIDs;
            entity = entity.bind(tangon)();
            entity = michal.bind(zuuluu)(entity);
 95:
            entity = undefined;
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_SUBSCRIPTIONS_UPDATE'];
    tangon = function() {
        _fun00101: for(var _fun00102_ip = 0; ; ) switch(_fun00102_ip) {
 0:
            tangon = _closure1_slot2;
            zuuluu = _closure1_slot3;
            entity = 27;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.fetchCurrentUser;
            zuuluu = zuuluu.bind(tangon)();
            tangon = _closure1_slot12;
            zuuluu = tangon.hasLayers;
            zuuluu = zuuluu.bind(tangon)();
            if(!zuuluu) { _fun00102_ip = 82; continue _fun00101 }
 52:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot3;
            michal = 25;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.fetchSubscriptions;
            michal = michal.bind(zuuluu)();
 82:
            return entity;
        }
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE'];
    tangon = function(argFoo) {
        oscard = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_BOOST_SLOT_CREATE';
        michal['type'] = tangon;
        report = _closure1_slot7;
        tangon = report.createFromServer;
        option = _closure1_slot16;
        golfie = option.getSubscriptionById;
        entity = oscard.subscription_id;
        entity = golfie.bind(option)(entity);
        entity = tangon.bind(report)(oscard, entity);
        michal['guildBoostSlot'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE'];
    tangon = function(argFoo) {
        oscard = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_BOOST_SLOT_UPDATE';
        michal['type'] = tangon;
        report = _closure1_slot7;
        tangon = report.createFromServer;
        option = _closure1_slot16;
        golfie = option.getSubscriptionById;
        entity = oscard.subscription_id;
        entity = golfie.bind(option)(entity);
        entity = tangon.bind(report)(oscard, entity);
        michal['guildBoostSlot'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['BILLING_POPUP_BRIDGE_CALLBACK'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'BILLING_POPUP_BRIDGE_CALLBACK';
        michal['type'] = tangon;
        tangon = entity.payment_source_type;
        michal['paymentSourceType'] = tangon;
        tangon = entity.state;
        michal['state'] = tangon;
        tangon = entity.path;
        michal['path'] = tangon;
        entity = entity.query;
        michal['query'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_PAYMENT_BROWSER_CHECKOUT_DONE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'USER_PAYMENT_BROWSER_CHECKOUT_DONE';
        michal['type'] = tangon;
        tangon = entity.load_id;
        michal['loadId'] = tangon;
        tangon = entity.sku_id;
        michal['skuId'] = tangon;
        entity = entity.sku_subscription_plan_id;
        michal['skuSubscriptionPlanId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_PAYMENT_CLIENT_ADD'];
    tangon = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot3;
        entity = 28;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.getPurchaseTokenHash;
        tangon = zuuluu.bind(tangon)();
        zuuluu = tangon.then;
        michal = function(argFoo) {
            _fun00103: for(var _fun00104_ip = 0; ; ) switch(_fun00104_ip) {
 0:
                michal = _closure2_slot0;
                tangon = michal.purchase_token_hash;
                michal = argFoo;
                if(!(tangon === michal)) { _fun00104_ip = 70; continue _fun00103 }
 22:
                zuuluu = _closure1_slot25;
                michal = {};
                report = 'USER_PAYMENT_CLIENT_ADD';
                michal['type'] = report;
                michal['purchaseTokenHash'] = tangon;
                entity = _closure2_slot0;
                entity = entity.expires_at;
                michal['expiresAt'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 70:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_MEMBER_LIST_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot3;
        entity = 15;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        tangon = zuuluu.Emitter;
        zuuluu = tangon.batched;
        michal = function() {
            michal = function(argFoo) { // Original name: handleItem
                _fun00105: for(var _fun00106_ip = 0; ; ) switch(_fun00106_ip) {
 0:
                    entity = argFoo;
                    michal = entity.member;
                    oscard = null;
                    if(!(oscard != michal)) { _fun00106_ip = 159; continue _fun00105 }
 18:
                    michal = entity.member;
                    option = _closure1_slot26;
                    zuuluu = _closure2_slot0;
                    golfie = zuuluu.guild_id;
                    tangon = michal.user;
                    zuuluu = undefined;
                    tangon = option.bind(zuuluu)(golfie, tangon, michal);
                    tangon = michal.presence;
                    if(!(oscard != tangon)) { _fun00106_ip = 159; continue _fun00105 }
 67:
                    tangon = michal.presence;
                    michal = _closure1_slot29;
                    entity = {};
                    report = _closure2_slot0;
                    report = report.guild_id;
                    entity['guildId'] = report;
                    report = tangon.user;
                    entity['user'] = report;
                    report = tangon.status;
                    entity['status'] = report;
                    report = tangon.activities;
                    entity['activities'] = report;
                    report = tangon.hidden_activities;
                    entity['hiddenActivities'] = report;
                    report = tangon.client_status;
                    entity['clientStatus'] = report;
                    tangon = tangon.processed_at_timestamp;
                    entity['processedAtTimestamp'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 159:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot0 = michal;
            tangon = _closure2_slot0;
            zuuluu = tangon.ops;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00107: for(var _fun00108_ip = 0; ; ) switch(_fun00108_ip) {
 0:
                    entity = argFoo;
                    michal = entity.op;
                    zuuluu = entity.items;
                    tangon = entity.item;
                    entity = 'SYNC';
                    if(!(entity !== michal)) { _fun00108_ip = 59; continue _fun00107 }
 27:
                    entity = 'UPDATE';
                    if(!(entity !== michal)) { _fun00108_ip = 43; continue _fun00107 }
 35:
                    entity = 'INSERT';
                    if(!(entity === michal)) { _fun00108_ip = 76; continue _fun00107 }
 43:
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = michal.bind(entity)(tangon);
                    _fun00108_ip = 76; continue _fun00107;
 59:
                    michal = zuuluu.forEach;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity);
 76:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            report = _closure1_slot1;
            zuuluu = _closure1_slot3;
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = report.bind(entity)(zuuluu);
            zuuluu = report.flush;
            zuuluu = zuuluu.bind(report)();
            zuuluu = _closure1_slot25;
            michal = {};
            report = 'GUILD_MEMBER_LIST_UPDATE';
            michal['type'] = report;
            report = tangon.guild_id;
            michal['guildId'] = report;
            report = tangon.id;
            michal['id'] = report;
            report = tangon.ops;
            michal['ops'] = report;
            report = tangon.groups;
            michal['groups'] = report;
            report = tangon.member_count;
            michal['memberCount'] = report;
            tangon = tangon.online_count;
            michal['onlineCount'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GIFT_CODE_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GIFT_CODE_UPDATE';
        michal['type'] = tangon;
        tangon = entity.uses;
        michal['uses'] = tangon;
        entity = entity.code;
        michal['code'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GIFT_CODE_CREATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GIFT_CODE_CREATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['giftCode'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['LIBRARY_APPLICATION_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'LIBRARY_APPLICATION_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['libraryApplication'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['STREAM_CREATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'STREAM_CREATE';
        michal['type'] = tangon;
        tangon = entity.stream_key;
        michal['streamKey'] = tangon;
        tangon = entity.region;
        michal['region'] = tangon;
        tangon = entity.viewer_ids;
        michal['viewerIds'] = tangon;
        tangon = entity.rtc_server_id;
        michal['rtcServerId'] = tangon;
        tangon = entity.rtc_channel_id;
        michal['rtcChannelId'] = tangon;
        entity = entity.paused;
        michal['paused'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['STREAM_SERVER_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'STREAM_SERVER_UPDATE';
        michal['type'] = tangon;
        tangon = entity.stream_key;
        michal['streamKey'] = tangon;
        tangon = entity.endpoint;
        michal['endpoint'] = tangon;
        entity = entity.token;
        michal['token'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['STREAM_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'STREAM_UPDATE';
        michal['type'] = tangon;
        tangon = entity.stream_key;
        michal['streamKey'] = tangon;
        tangon = entity.region;
        michal['region'] = tangon;
        tangon = entity.viewer_ids;
        michal['viewerIds'] = tangon;
        entity = entity.paused;
        michal['paused'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['STREAM_DELETE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'STREAM_DELETE';
        michal['type'] = tangon;
        tangon = entity.stream_key;
        michal['streamKey'] = tangon;
        tangon = entity.unavailable;
        michal['unavailable'] = tangon;
        entity = entity.reason;
        michal['reason'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GENERIC_PUSH_NOTIFICATION_SENT'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GENERIC_PUSH_NOTIFICATION_SENT';
        michal['type'] = tangon;
        tangon = entity.title;
        michal['title'] = tangon;
        tangon = entity.body;
        michal['body'] = tangon;
        tangon = entity.tracking_type;
        michal['trackingType'] = tangon;
        tangon = entity.icon;
        michal['icon'] = tangon;
        tangon = entity.route;
        michal['route'] = tangon;
        entity = entity.tag;
        michal['tag'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['REACTION_NOTIFICATION_SENT'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'REACTION_NOTIFICATION_SENT';
        michal['type'] = tangon;
        tangon = entity.route;
        michal['route'] = tangon;
        tangon = entity.message;
        michal['message'] = tangon;
        tangon = entity.emoji;
        michal['emoji'] = tangon;
        entity = entity.reactor_user_id;
        michal['reactorUserId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['NOTIFICATION_CENTER_ITEM_CREATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'NOTIFICATION_CENTER_ITEM_CREATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['item'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['NOTIFICATION_CENTER_ITEM_DELETE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'NOTIFICATION_CENTER_ITEM_DELETE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.id;
        michal['id'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['NOTIFICATION_CENTER_ITEMS_ACK'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'ids': null, 'optimistic': false};
        entity = argFoo;
        tangon = entity.id;
        entity = new Array(1);
        entity[0] = tangon;
        michal['ids'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['NOTIFICATION_CENTER_ITEM_COMPLETED'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'NOTIFICATION_CENTER_ITEM_COMPLETED';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.item_enum;
        michal['item_enum'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['QUESTS_USER_STATUS_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'QUESTS_USER_STATUS_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.user_status;
        michal['user_status'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['QUESTS_USER_COMPLETION_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'QUESTS_USER_COMPLETION_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.quest_enrollment_blocked_until;
        michal['quest_enrollment_blocked_until'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['APPLICATION_COMMAND_PERMISSIONS_UPDATE'];
    tangon = function(argFoo, argBar) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = argBar;
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.guild_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_APPLICATION_COMMAND_INDEX_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_APPLICATION_COMMAND_INDEX_UPDATE';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        entity = entity.version;
        michal['version'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_JOIN_REQUEST_CREATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_JOIN_REQUEST_CREATE';
        michal['type'] = tangon;
        tangon = entity.request;
        michal['request'] = tangon;
        tangon = entity.status;
        michal['status'] = tangon;
        entity = entity.guild_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_JOIN_REQUEST_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_JOIN_REQUEST_UPDATE';
        michal['type'] = tangon;
        tangon = entity.request;
        michal['request'] = tangon;
        tangon = entity.status;
        michal['status'] = tangon;
        entity = entity.guild_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_JOIN_REQUEST_DELETE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_JOIN_REQUEST_DELETE';
        michal['type'] = tangon;
        tangon = entity.id;
        michal['id'] = tangon;
        tangon = entity.user_id;
        michal['userId'] = tangon;
        entity = entity.guild_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['INTERACTION_CREATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'INTERACTION_CREATE';
        michal['type'] = tangon;
        tangon = entity.id;
        michal['interactionId'] = tangon;
        entity = entity.nonce;
        michal['nonce'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['INTERACTION_SUCCESS'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'INTERACTION_SUCCESS';
        michal['type'] = tangon;
        tangon = entity.id;
        michal['interactionId'] = tangon;
        entity = entity.nonce;
        michal['nonce'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['INTERACTION_FAILURE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'INTERACTION_FAILURE';
        michal['type'] = tangon;
        tangon = entity.nonce;
        michal['nonce'] = tangon;
        entity = entity.reason_code;
        michal['reasonCode'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE';
        michal['type'] = tangon;
        tangon = entity.choices;
        michal['choices'] = tangon;
        entity = entity.nonce;
        michal['nonce'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['INTERACTION_MODAL_CREATE'];
    tangon = function(argFoo) {
        tangon = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        report = 'INTERACTION_MODAL_CREATE';
        michal['type'] = report;
        report = tangon.id;
        michal['id'] = report;
        report = tangon.channel_id;
        michal['channelId'] = report;
        report = tangon.custom_id;
        michal['customId'] = report;
        report = tangon.application;
        michal['application'] = report;
        report = tangon.title;
        michal['title'] = report;
        oscard = _closure1_slot0;
        report = _closure1_slot3;
        entity = 29;
        report = report[entity];
        entity = undefined;
        golfie = oscard.bind(entity)(report);
        oscard = golfie.transformComponents;
        report = tangon.components;
        report = oscard.bind(golfie)(report);
        michal['components'] = report;
        tangon = tangon.nonce;
        michal['nonce'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['INTERACTION_IFRAME_MODAL_CREATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'INTERACTION_IFRAME_MODAL_CREATE';
        michal['type'] = tangon;
        tangon = entity.id;
        michal['id'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        tangon = entity.custom_id;
        michal['customId'] = tangon;
        tangon = entity.application;
        michal['application'] = tangon;
        tangon = entity.title;
        michal['title'] = tangon;
        tangon = entity.iframe_path;
        michal['iframePath'] = tangon;
        tangon = entity.modal_size;
        michal['modalSize'] = tangon;
        entity = entity.nonce;
        michal['nonce'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['STAGE_INSTANCE_CREATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'STAGE_INSTANCE_CREATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['instance'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['STAGE_INSTANCE_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'STAGE_INSTANCE_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['instance'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['STAGE_INSTANCE_DELETE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'STAGE_INSTANCE_DELETE';
        michal['type'] = entity;
        entity = argFoo;
        michal['instance'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SCHEDULED_EVENT_CREATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GUILD_SCHEDULED_EVENT_CREATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['guildScheduledEvent'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SCHEDULED_EVENT_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GUILD_SCHEDULED_EVENT_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['guildScheduledEvent'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SCHEDULED_EVENT_DELETE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GUILD_SCHEDULED_EVENT_DELETE';
        michal['type'] = entity;
        entity = argFoo;
        michal['guildScheduledEvent'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['eventException'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['eventException'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE';
        michal['type'] = entity;
        entity = argFoo;
        michal['eventException'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.event_id;
        michal['eventId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SCHEDULED_EVENT_USER_ADD'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_SCHEDULED_EVENT_USER_ADD';
        michal['type'] = tangon;
        tangon = entity.user_id;
        michal['userId'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        tangon = entity.guild_scheduled_event_id;
        michal['guildEventId'] = tangon;
        tangon = entity.guild_scheduled_event_exception_id;
        michal['guildEventExceptionId'] = tangon;
        entity = entity.response;
        michal['response'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SCHEDULED_EVENT_USER_REMOVE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
        michal['type'] = tangon;
        tangon = entity.user_id;
        michal['userId'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        tangon = entity.guild_scheduled_event_id;
        michal['guildEventId'] = tangon;
        tangon = entity.guild_scheduled_event_exception_id;
        michal['guildEventExceptionId'] = tangon;
        entity = entity.response;
        michal['response'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_DIRECTORY_ENTRY_CREATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_DIRECTORY_ENTRY_CREATE';
        michal['type'] = tangon;
        tangon = entity.directory_channel_id;
        michal['channelId'] = tangon;
        michal['entry'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_DIRECTORY_ENTRY_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_DIRECTORY_ENTRY_UPDATE';
        michal['type'] = tangon;
        tangon = entity.directory_channel_id;
        michal['channelId'] = tangon;
        michal['entry'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_DIRECTORY_ENTRY_DELETE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_DIRECTORY_ENTRY_DELETE';
        michal['type'] = tangon;
        tangon = entity.directory_channel_id;
        michal['channelId'] = tangon;
        entity = entity.entity_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['AUTO_MODERATION_MENTION_RAID_DETECTION'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'AUTO_MODERATION_MENTION_RAID_DETECTION';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        tangon = entity.decision_id;
        michal['decisionId'] = tangon;
        entity = entity.suspicious_mention_activity_until;
        michal['suspiciousMentionActivityUntil'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['VOICE_CHANNEL_EFFECT_SEND'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'VOICE_CHANNEL_EFFECT_SEND';
        michal['type'] = tangon;
        tangon = entity.emoji;
        michal['emoji'] = tangon;
        tangon = entity.channel_id;
        michal['channelId'] = tangon;
        tangon = entity.user_id;
        michal['userId'] = tangon;
        tangon = entity.animation_type;
        michal['animationType'] = tangon;
        tangon = entity.animation_id;
        michal['animationId'] = tangon;
        tangon = entity.sound_id;
        michal['soundId'] = tangon;
        tangon = entity.sound_volume;
        michal['soundVolume'] = tangon;
        tangon = entity.points;
        michal['points'] = tangon;
        tangon = entity.streamer_id;
        michal['streamerId'] = tangon;
        tangon = entity.line_id;
        michal['lineId'] = tangon;
        entity = entity.emoji_hose;
        michal['emojiHose'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SOUNDBOARD_SOUND_CREATE'];
    tangon = function(argFoo) {
        tangon = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GUILD_SOUNDBOARD_SOUND_CREATE';
        michal['type'] = entity;
        entity = {};
        oscard = tangon.guild_id;
        entity['guildId'] = oscard;
        oscard = tangon.name;
        entity['name'] = oscard;
        oscard = tangon.sound_id;
        entity['soundId'] = oscard;
        golfie = _closure1_slot8;
        option = tangon.user;
        oscard = golfie.prototype;
        oscard = Object.create(oscard, {constructor: {value: golfie}});
        verify = oscard;
        report = new verify[golfie](option, golfie);
        report = report instanceof Object ? report : oscard;
        entity['user'] = report;
        report = tangon.user_id;
        entity['userId'] = report;
        report = tangon.volume;
        entity['volume'] = report;
        report = tangon.emoji_id;
        entity['emojiId'] = report;
        report = tangon.emoji_name;
        entity['emojiName'] = report;
        tangon = tangon.available;
        entity['available'] = tangon;
        michal['sound'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SOUNDBOARD_SOUND_UPDATE'];
    tangon = function(argFoo) {
        tangon = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GUILD_SOUNDBOARD_SOUND_UPDATE';
        michal['type'] = entity;
        entity = {};
        oscard = tangon.guild_id;
        entity['guildId'] = oscard;
        oscard = tangon.name;
        entity['name'] = oscard;
        oscard = tangon.sound_id;
        entity['soundId'] = oscard;
        golfie = _closure1_slot8;
        option = tangon.user;
        oscard = golfie.prototype;
        oscard = Object.create(oscard, {constructor: {value: golfie}});
        verify = oscard;
        report = new verify[golfie](option, golfie);
        report = report instanceof Object ? report : oscard;
        entity['user'] = report;
        report = tangon.user_id;
        entity['userId'] = report;
        report = tangon.volume;
        entity['volume'] = report;
        report = tangon.emoji_id;
        entity['emojiId'] = report;
        report = tangon.emoji_name;
        entity['emojiName'] = report;
        tangon = tangon.available;
        entity['available'] = tangon;
        michal['sound'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SOUNDBOARD_SOUND_DELETE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_SOUNDBOARD_SOUND_DELETE';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        entity = entity.sound_id;
        michal['soundId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_SOUNDBOARD_SOUNDS_UPDATE'];
    tangon = function(argFoo) {
        tangon = argFoo;
        var _closure2_slot0 = tangon;
        zuuluu = _closure1_slot25;
        michal = {};
        report = 'GUILD_SOUNDBOARD_SOUNDS_UPDATE';
        michal['type'] = report;
        report = tangon.guild_id;
        michal['guildId'] = report;
        report = tangon.soundboard_sounds;
        tangon = report.map;
        entity = function(argFoo) {
            michal = argFoo;
            entity = {};
            zuuluu = michal.name;
            entity['name'] = zuuluu;
            zuuluu = michal.sound_id;
            entity['soundId'] = zuuluu;
            zuuluu = michal.emoji_name;
            entity['emojiName'] = zuuluu;
            zuuluu = michal.emoji_id;
            entity['emojiId'] = zuuluu;
            zuuluu = michal.user_id;
            entity['userId'] = zuuluu;
            zuuluu = michal.volume;
            entity['volume'] = zuuluu;
            michal = michal.available;
            entity['available'] = michal;
            michal = _closure2_slot0;
            michal = michal.guild_id;
            entity['guildId'] = michal;
            return entity;
        };
        entity = tangon.bind(report)(entity);
        michal['soundboardSounds'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    verify = ['EMBEDDED_ACTIVITY_UPDATE_V2'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'EMBEDDED_ACTIVITY_UPDATE_V2';
        michal['type'] = tangon;
        tangon = entity.application_id;
        michal['applicationId'] = tangon;
        tangon = entity.launch_id;
        michal['launchId'] = tangon;
        tangon = entity.composite_instance_id;
        michal['compositeInstanceId'] = tangon;
        tangon = entity.location;
        michal['location'] = tangon;
        entity = entity.participants;
        michal['participants'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    golfie = ['AUTH_SESSION_CHANGE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'AUTH_SESSION_CHANGE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.auth_session_id_hash;
        michal['authSessionIdHash'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_CONNECTIONS_LINK_CALLBACK'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'USER_CONNECTIONS_LINK_CALLBACK';
        michal['type'] = tangon;
        tangon = entity.provider;
        michal['provider'] = tangon;
        tangon = entity.callback_code;
        michal['callbackCode'] = tangon;
        entity = entity.callback_state;
        michal['callbackState'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_CONNECTIONS_CALLBACK'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'USER_CONNECTIONS_CALLBACK';
        michal['type'] = tangon;
        tangon = entity.provider;
        michal['provider'] = tangon;
        tangon = entity.code;
        michal['code'] = tangon;
        tangon = entity.state;
        michal['state'] = tangon;
        entity = entity.openid_params;
        michal['openid_params'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['DELETED_ENTITY_IDS'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'DELETED_ENTITY_IDS';
        michal['type'] = entity;
        tangon = argFoo;
        report = michal;
        entity = copyDataProperties(report, tangon);
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    verify = ['CHANNEL_SYNC'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        entity = argFoo;
        tangon = entity.channels;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            zuuluu = _closure1_slot18;
            michal = zuuluu.add;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'CHANNEL_SYNC';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guild_id'] = tangon;
        tangon = entity.channels;
        michal['channels'] = tangon;
        entity = entity.integrity_check;
        michal['integrity_check'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    golfie = ['CONSOLE_COMMAND_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'CONSOLE_COMMAND_UPDATE';
        michal['type'] = tangon;
        tangon = entity.id;
        michal['id'] = tangon;
        tangon = entity.result;
        michal['result'] = tangon;
        entity = entity.error;
        michal['error'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    verify = ['PASSIVE_UPDATE_V2'];
    golfie = function(argFoo) {
        zuuluu = _closure1_slot10;
        michal = zuuluu.loadGuildIds;
        entity = argFoo;
        tangon = entity.guild_id;
        entity = new Array(1);
        entity[0] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        report = 'PASSIVE_UPDATE_V2';
        michal['type'] = report;
        report = entity.guild_id;
        michal['guildId'] = report;
        report = entity.updated_members;
        michal['members'] = report;
        golfie = entity.updated_channels;
        oscard = golfie.map;
        report = function(argFoo) {
            michal = argFoo;
            entity = {};
            zuuluu = michal.id;
            entity['id'] = zuuluu;
            zuuluu = michal.last_message_id;
            entity['lastMessageId'] = zuuluu;
            michal = michal.last_pin_timestamp;
            entity['lastPinTimestamp'] = michal;
            return entity;
        };
        report = oscard.bind(golfie)(report);
        michal['channels'] = report;
        oscard = entity.updated_voice_states;
        report = oscard.map;
        tangon = function(argFoo) {
            _fun00109: for(var _fun00110_ip = 0; ; ) switch(_fun00110_ip) {
 0:
                zuuluu = argFoo;
                entity = {};
                michal = zuuluu.channel_id;
                entity['channelId'] = michal;
                michal = zuuluu.deaf;
                if(michal) { _fun00110_ip = 25; continue _fun00109 }
 23:
                michal = false;
 25:
                entity['deaf'] = michal;
                michal = zuuluu.mute;
                if(michal) { _fun00110_ip = 41; continue _fun00109 }
 39:
                michal = false;
 41:
                entity['mute'] = michal;
                report = zuuluu.request_to_speak_timestamp;
                michal = null;
                oscard = michal != report;
                tangon = null;
                if(!oscard) { _fun00110_ip = 66; continue _fun00109 }
 63:
                tangon = report;
 66:
                entity['requestToSpeakTimestamp'] = tangon;
                tangon = zuuluu.self_deaf;
                if(tangon) { _fun00110_ip = 82; continue _fun00109 }
 80:
                tangon = false;
 82:
                entity['selfDeaf'] = tangon;
                tangon = zuuluu.self_mute;
                if(tangon) { _fun00110_ip = 98; continue _fun00109 }
 96:
                tangon = false;
 98:
                entity['selfMute'] = tangon;
                tangon = zuuluu.self_stream;
                if(tangon) { _fun00110_ip = 114; continue _fun00109 }
 112:
                tangon = false;
 114:
                entity['selfStream'] = tangon;
                tangon = zuuluu.self_video;
                if(tangon) { _fun00110_ip = 130; continue _fun00109 }
 128:
                tangon = false;
 130:
                entity['selfVideo'] = tangon;
                tangon = zuuluu.session_id;
                entity['sessionId'] = tangon;
                tangon = zuuluu.suppress;
                entity['suppress'] = tangon;
                tangon = zuuluu.user_id;
                entity['userId'] = tangon;
                zuuluu = zuuluu.discoverable;
                michal = michal == zuuluu;
                if(michal) { _fun00110_ip = 183; continue _fun00109 }
 180:
                michal = zuuluu;
 183:
                entity['discoverable'] = michal;
                return entity;
            }
        };
        tangon = report.bind(oscard)(tangon);
        michal['voiceStates'] = tangon;
        entity = entity.removed_voice_states;
        michal['removedVoiceStateUsers'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(entity)(verify, golfie, tangon);
    golfie = ['CREATOR_MONETIZATION_RESTRICTIONS_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        entity = entity.restrictions;
        michal['restrictions'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['BILLING_REFERRAL_TRIAL_OFFER_UPDATE'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'BILLING_REFERRAL_TRIAL_OFFER_UPDATE';
        michal['type'] = tangon;
        tangon = entity.user_trial_offer_id;
        michal['userTrialOfferId'] = tangon;
        entity = entity.recipient_id;
        michal['recipientId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['LAST_MESSAGES'];
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = 'MESSAGE_PREVIEWS_LOADED';
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        entity = entity.messages;
        michal['messages'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['AUTHENTICATOR_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'AUTHENTICATOR_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['credential'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['AUTHENTICATOR_CREATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'AUTHENTICATOR_CREATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['credential'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['AUTHENTICATOR_DELETE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'AUTHENTICATOR_DELETE';
        michal['type'] = entity;
        entity = argFoo;
        michal['credential'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['NOTIFICATION_SETTINGS_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'NOTIFICATION_SETTINGS_UPDATE';
        michal['type'] = entity;
        entity = {};
        tangon = argFoo;
        tangon = tangon.flags;
        entity['flags'] = tangon;
        michal['settings'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GAME_INVITE_CREATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GAME_INVITE_CREATE';
        michal['type'] = entity;
        entity = argFoo;
        michal['gameInvite'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GAME_INVITE_DELETE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GAME_INVITE_DELETE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.invite_id;
        michal['inviteId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GAME_INVITE_DELETE_MANY'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'GAME_INVITE_DELETE_MANY';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.invite_ids;
        michal['inviteIds'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['CONVERSATION_SUMMARY_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'CONVERSATION_SUMMARY_UPDATE';
        michal['type'] = entity;
        tangon = argFoo;
        report = michal;
        entity = copyDataProperties(report, tangon);
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['PREMIUM_MARKETING_PREVIEW'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'PREMIUM_MARKETING_PREVIEW';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.properties;
        michal['properties'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_APPLICATION_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'USER_APPLICATION_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.application_id;
        michal['applicationId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['USER_APPLICATION_REMOVE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'USER_APPLICATION_REMOVE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.application_id;
        michal['applicationId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['DM_SETTINGS_UPSELL_SHOW'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'DM_SETTINGS_UPSELL_SHOW';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.guild_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['CONTENT_INVENTORY_INBOX_STALE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'CONTENT_INVENTORY_INBOX_STALE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.refresh_after_ms;
        michal['refreshAfterMs'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['VIRTUAL_CURRENCY_BALANCE_UPDATE'];
    tangon = function(argFoo) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = 'VIRTUAL_CURRENCY_BALANCE_UPDATE';
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.balance;
        michal['balance'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_POWERUP_ENTITLEMENTS_CREATE', 'GUILD_POWERUP_ENTITLEMENTS_DELETE'];
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        zuuluu = _closure1_slot25;
        michal = {};
        tangon = argBar;
        michal['type'] = tangon;
        tangon = entity.guild_id;
        michal['guildId'] = tangon;
        entity = entity.entitlements;
        michal['entitlements'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    golfie = ['GUILD_APPLIED_BOOSTS_UPDATE'];
    tangon = function(argFoo, argBar) {
        zuuluu = _closure1_slot25;
        michal = {};
        entity = argBar;
        michal['type'] = entity;
        entity = argFoo;
        entity = entity.guild_id;
        michal['guildId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = option.bind(entity)(golfie, tangon);
    tangon = 32;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/dispatchSocketMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getDispatchHandler
        michal = _closure1_slot22;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();