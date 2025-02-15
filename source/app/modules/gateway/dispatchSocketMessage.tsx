// app/modules/gateway/dispatchSocketMessage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun106320: for(var _fun106320_ip = 0; ; ) switch(_fun106320_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun106320_ip = 46; continue _fun106320 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun106320_ip = 55; continue _fun106320 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun106320_ip = 345; continue _fun106320 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun106320_ip = 323; continue _fun106320 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun106320_ip = 283; continue _fun106320 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun106320_ip = 270; continue _fun106320 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun106320_ip = 163; continue _fun106320 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun106320_ip = 179; continue _fun106320 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun106320_ip = 249; continue _fun106320 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun106320_ip = 249; continue _fun106320 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun106320_ip = 234; continue _fun106320 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun106320_ip = 247; continue _fun106320 }
 234:
            verify = _closure1_slot24;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun106320_ip = 265; continue _fun106320;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun106320_ip = 283; continue _fun106320;
 270:
            golf = _closure1_slot24;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun106320_ip = 323; continue _fun106320 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun106320_ip = 330; continue _fun106320 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun106321: for(var _fun106321_ip = 0; ; ) switch(_fun106321_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun106321_ip = 56; continue _fun106321 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun106321_ip = 67; continue _fun106321;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun106322: for(var _fun106322_ip = 0; ; ) switch(_fun106322_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun106322_ip = 23; continue _fun106322 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun106322_ip = 33; continue _fun106322 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun106322_ip = 70; continue _fun106322 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun106322_ip = 55; continue _fun106322 }
 70:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    options = function(argFoo, argBar) { // Original name: defineSimpleDispatch
        _fun106323: for(var _fun106323_ip = 0; ; ) switch(_fun106323_ip) {
 0:
            oscar = argBar;
            zulu = _closure1_slot23;
            entity = undefined;
            mike = argFoo;
            tango = zulu.bind(entity)(mike);
            zulu = tango.bind(entity)();
            mike = zulu.done;
            if(mike) { _fun106323_ip = 80; continue _fun106323 }
 34:
            verify = zulu.value;
            options = _closure1_slot22;
            mike = {};
            offset = function() { // Original name: preload
                entity = null;
                return entity;
            };
            mike['preload'] = offset;
            mike['dispatch'] = oscar;
            options[verify] = mike;
            options = tango.bind(entity)();
            mike = options.done;
            zulu = options;
            if(!mike) { _fun106323_ip = 34; continue _fun106323 }
 80:
            return entity;
        }
    };
    offset = function(argFoo, argBar, argBaz) { // Original name: definePreloadableDispatch
        _fun106325: for(var _fun106325_ip = 0; ; ) switch(_fun106325_ip) {
 0:
            golf = argBar;
            oscar = argBaz;
            zulu = _closure1_slot23;
            entity = undefined;
            mike = argFoo;
            tango = zulu.bind(entity)(mike);
            zulu = tango.bind(entity)();
            mike = zulu.done;
            if(mike) { _fun106325_ip = 74; continue _fun106325 }
 35:
            verify = zulu.value;
            options = _closure1_slot22;
            mike = {};
            mike['preload'] = golf;
            mike['dispatch'] = oscar;
            options[verify] = mike;
            options = tango.bind(entity)();
            mike = options.done;
            zulu = options;
            if(!mike) { _fun106325_ip = 35; continue _fun106325 }
 74:
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: dispatchOrResetSocket
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot1;
        zulu = _closure1_slot3;
        entity = 30;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.dispatch;
        tango = zulu.bind(tango)(report);
        zulu = tango.catch;
        mike = function(argFoo) {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 13;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.socket;
            mike = zulu.resetSocketOnDispatchError;
            entity = {};
            tango = argFoo;
            entity['error'] = tango;
            tango = _closure2_slot0;
            tango = tango.type;
            entity['action'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: dispatchGuildMemberAdd
        _fun106328: for(var _fun106328_ip = 0; ; ) switch(_fun106328_ip) {
 0:
            backup = argFoo;
            foxtrot = argBar;
            mike = argBaz;
            romeo = mike.roles;
            yankee = mike.nick;
            offset = mike.avatar;
            verify = mike.avatar_decoration_data;
            entity = mike.flags;
            options = mike.premium_since;
            golf = mike.pending;
            oscar = mike.joined_at;
            report = mike.communication_disabled_until;
            tango = mike.unusual_dm_activity_until;
            sizing = _closure1_slot11;
            kilo = sizing.getMember;
            zulu = foxtrot.id;
            kilo = kilo.bind(sizing)(backup, zulu);
            sizing = null;
            zulu = sizing != kilo;
            if(!zulu) { _fun106328_ip = 111; continue _fun106328 }
 101:
            output = kilo.nick;
            zulu = output === yankee;
 111:
            if(!zulu) { _fun106328_ip = 124; continue _fun106328 }
 114:
            output = kilo.avatar;
            zulu = output === offset;
 124:
            if(!zulu) { _fun106328_ip = 167; continue _fun106328 }
 127:
            echo = _closure1_slot1;
            result = _closure1_slot3;
            output = 20;
            result = result[output];
            output = undefined;
            echo = echo.bind(output)(result);
            result = echo.isEqual;
            output = kilo.roles;
            zulu = result.bind(echo)(output, romeo);
 167:
            if(!zulu) { _fun106328_ip = 210; continue _fun106328 }
 170:
            echo = _closure1_slot0;
            result = _closure1_slot3;
            output = 31;
            result = result[output];
            output = undefined;
            echo = echo.bind(output)(result);
            result = echo.isEqualAvatarDecoration;
            output = kilo.avatarDecoration;
            zulu = result.bind(echo)(output, verify);
 210:
            if(!zulu) { _fun106328_ip = 223; continue _fun106328 }
 213:
            output = kilo.premiumSince;
            zulu = output === options;
 223:
            if(!zulu) { _fun106328_ip = 236; continue _fun106328 }
 226:
            output = kilo.isPending;
            zulu = output === golf;
 236:
            if(!zulu) { _fun106328_ip = 249; continue _fun106328 }
 239:
            output = kilo.joinedAt;
            zulu = output === oscar;
 249:
            if(!zulu) { _fun106328_ip = 262; continue _fun106328 }
 252:
            output = kilo.communicationDisabledUntil;
            zulu = output === report;
 262:
            if(!zulu) { _fun106328_ip = 274; continue _fun106328 }
 265:
            output = kilo.flags;
            zulu = output === entity;
 274:
            if(!zulu) { _fun106328_ip = 311; continue _fun106328 }
 277:
            output = kilo.unusualDMActivityUntil;
            result = sizing != output;
            kilo = null;
            if(!result) { _fun106328_ip = 295; continue _fun106328 }
 292:
            kilo = output;
 295:
            output = sizing != tango;
            sizing = null;
            if(!output) { _fun106328_ip = 307; continue _fun106328 }
 304:
            sizing = tango;
 307:
            zulu = kilo === sizing;
 311:
            if(zulu) { _fun106328_ip = 392; continue _fun106328 }
 314:
            zulu = _closure1_slot25;
            mike = {};
            kilo = 'GUILD_MEMBER_ADD';
            mike['type'] = kilo;
            mike['guildId'] = backup;
            mike['user'] = foxtrot;
            mike['roles'] = romeo;
            mike['nick'] = yankee;
            mike['avatar'] = offset;
            mike['avatarDecoration'] = verify;
            mike['premiumSince'] = options;
            mike['isPending'] = golf;
            mike['joinedAt'] = oscar;
            mike['communicationDisabledUntil'] = report;
            mike['unusualDMActivityUntil'] = tango;
            mike['flags'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 392:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: dispatchMessageMembers
        _fun106329: for(var _fun106329_ip = 0; ; ) switch(_fun106329_ip) {
 0:
            mike = argFoo;
            options = mike.member;
            zulu = mike.mentions;
            golf = mike.author;
            oscar = mike.guild_id;
            var _closure2_slot0 = oscar;
            mike = null;
            tango = mike != options;
            if(!tango) { _fun106329_ip = 45; continue _fun106329 }
 41:
            tango = mike != oscar;
 45:
            if(!tango) { _fun106329_ip = 64; continue _fun106329 }
 48:
            report = _closure1_slot26;
            tango = undefined;
            tango = report.bind(tango)(oscar, golf, options);
 64:
            if(!(mike != zulu)) { _fun106329_ip = 85; continue _fun106329 }
 68:
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun106330: for(var _fun106330_ip = 0; ; ) switch(_fun106330_ip) {
 0:
                    report = argFoo;
                    entity = report.member;
                    zulu = null;
                    if(!(zulu != entity)) { _fun106330_ip = 57; continue _fun106330 }
 15:
                    mike = _closure2_slot0;
                    if(!(zulu != mike)) { _fun106330_ip = 57; continue _fun106330 }
 26:
                    tango = report.member;
                    mike = delete report.member;
                    zulu = _closure1_slot26;
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike, report, tango);
 57:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
 85:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: convertSessions
        zulu = argFoo;
        mike = zulu.map;
        entity = function(argFoo) {
            mike = argFoo;
            entity = {};
            zulu = mike.session_id;
            entity['sessionId'] = zulu;
            zulu = mike.last_modified;
            entity['lastModified'] = zulu;
            zulu = mike.status;
            entity['status'] = zulu;
            zulu = mike.activities;
            entity['activities'] = zulu;
            zulu = mike.active;
            zulu = !zulu;
            zulu = !zulu;
            entity['active'] = zulu;
            mike = mike.client_info;
            entity['clientInfo'] = mike;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: dispatchPresence
        entity = argFoo;
        verify = entity.guildId;
        options = entity.user;
        golf = entity.status;
        report = entity.activities;
        tango = entity.hiddenActivities;
        oscar = entity.clientStatus;
        zulu = _closure1_slot21;
        mike = zulu.add;
        entity = {};
        entity['guildId'] = verify;
        entity['user'] = options;
        entity['status'] = golf;
        entity['clientStatus'] = oscar;
        entity['activities'] = report;
        entity['hiddenActivities'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = ['newly_created'];
    var _closure1_slot4 = entity;
    entity = global;
    yankee = entity.Object;
    golf = yankee.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(yankee)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = verify.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.createChannelRecordFromServer;
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = verify.bind(entity)(golf);
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelLoader;
    var _closure1_slot10 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 11;
    tango = oscar[tango];
    yankee = verify.bind(entity)(tango);
    tango = yankee.prototype;
    golf = Object.create(tango, {constructor: {value: yankee}});
    result = 'ConnectionStore';
    echo = golf;
    tango = new echo[yankee](result, output);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot17 = tango;
    golf = 12;
    tango = oscar[golf];
    kilo = verify.bind(entity)(tango);
    tango = 13;
    yankee = oscar[tango];
    yankee = report.bind(entity)(yankee);
    result = yankee.socket;
    yankee = kilo.prototype;
    romeo = Object.create(yankee, {constructor: {value: kilo}});
    output = function(argFoo, argBar) {
        _fun106334: for(var _fun106334_ip = 0; ; ) switch(_fun106334_ip) {
 0:
            entity = argFoo;
            zulu = argBar;
            oscar = null;
            if(!(oscar == entity)) { _fun106334_ip = 34; continue _fun106334 }
 12:
            mike = {};
            tango = 'CHANNEL_UPDATES';
            mike['type'] = tango;
            tango = new Array(0);
            mike['channels'] = tango;
            entity = mike;
 34:
            mike = _closure1_slot6;
            tango = undefined;
            mike = mike.bind(tango)(zulu);
            golf = _closure1_slot9;
            report = golf.getChannel;
            zulu = zulu.id;
            golf = report.bind(golf)(zulu);
            zulu = oscar == golf;
            report = undefined;
            if(zulu) { _fun106334_ip = 139; continue _fun106334 }
 76:
            tango = golf.merge;
            zulu = {};
            yankee = zulu;
            offset = mike;
            options = copyDataProperties(yankee, offset);
            verify = golf.recipients;
            options = 'recipients';
            zulu[options] = verify;
            verify = mike.bitrate;
            if(!(oscar == verify)) { _fun106334_ip = 125; continue _fun106334 }
 119:
            verify = golf.bitrate;
 125:
            options = 'bitrate';
            zulu[options] = verify;
            report = tango.bind(golf)(zulu);
 139:
            tango = entity.channels;
            zulu = tango.push;
            if(!(oscar != report)) { _fun106334_ip = 157; continue _fun106334 }
 154:
            mike = report;
 157:
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    sizing = function(argFoo) {
        mike = 'CHANNEL_UPDATE';
        entity = argFoo;
        entity = mike !== entity;
        return entity;
    };
    echo = romeo;
    yankee = new echo[kilo](result, output, sizing, kilo);
    yankee = yankee instanceof Object ? yankee : romeo;
    var _closure1_slot18 = yankee;
    yankee = oscar[golf];
    kilo = verify.bind(entity)(yankee);
    yankee = oscar[tango];
    yankee = report.bind(entity)(yankee);
    result = yankee.socket;
    yankee = kilo.prototype;
    romeo = Object.create(yankee, {constructor: {value: kilo}});
    output = function(argFoo, argBar) {
        _fun106336: for(var _fun106336_ip = 0; ; ) switch(_fun106336_ip) {
 0:
            entity = argFoo;
            oscar = argBar;
            var _closure2_slot0 = oscar;
            mike = null;
            if(!(mike == entity)) { _fun106336_ip = 42; continue _fun106336 }
 18:
            mike = {};
            zulu = 'SOUNDBOARD_SOUNDS_RECEIVED';
            mike['type'] = zulu;
            zulu = new Array(0);
            mike['updates'] = zulu;
            entity = mike;
 42:
            tango = entity.updates;
            zulu = tango.push;
            mike = {};
            golf = oscar.guild_id;
            mike['guildId'] = golf;
            golf = oscar.soundboard_sounds;
            oscar = golf.map;
            report = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = mike.name;
                entity['name'] = zulu;
                zulu = mike.sound_id;
                entity['soundId'] = zulu;
                zulu = mike.emoji_name;
                entity['emojiName'] = zulu;
                zulu = mike.emoji_id;
                entity['emojiId'] = zulu;
                zulu = mike.user_id;
                entity['userId'] = zulu;
                zulu = mike.volume;
                entity['volume'] = zulu;
                mike = mike.available;
                entity['available'] = mike;
                mike = _closure2_slot0;
                mike = mike.guild_id;
                entity['guildId'] = mike;
                return entity;
            };
            report = oscar.bind(golf)(report);
            mike['sounds'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    sizing = function(argFoo) {
        mike = 'SOUNDBOARD_SOUNDS';
        entity = argFoo;
        entity = mike !== entity;
        return entity;
    };
    echo = romeo;
    yankee = new echo[kilo](result, output, sizing, kilo);
    yankee = yankee instanceof Object ? yankee : romeo;
    var _closure1_slot19 = yankee;
    yankee = oscar[golf];
    kilo = verify.bind(entity)(yankee);
    yankee = oscar[tango];
    yankee = report.bind(entity)(yankee);
    result = yankee.socket;
    yankee = kilo.prototype;
    romeo = Object.create(yankee, {constructor: {value: kilo}});
    output = function(argFoo, argBar) {
        _fun106339: for(var _fun106339_ip = 0; ; ) switch(_fun106339_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike == entity)) { _fun106339_ip = 31; continue _fun106339 }
 9:
            mike = {};
            zulu = 'GUILD_MEMBERS_CHUNK_BATCH';
            mike['type'] = zulu;
            zulu = new Array(0);
            mike['chunks'] = zulu;
            entity = mike;
 31:
            tango = entity.chunks;
            zulu = tango.push;
            mike = argBar;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    sizing = function(argFoo) {
        mike = 'GUILD_MEMBERS_CHUNK';
        entity = argFoo;
        entity = mike !== entity;
        return entity;
    };
    echo = romeo;
    yankee = new echo[kilo](result, output, sizing, kilo);
    yankee = yankee instanceof Object ? yankee : romeo;
    var _closure1_slot20 = yankee;
    golf = oscar[golf];
    romeo = verify.bind(entity)(golf);
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    result = tango.socket;
    tango = romeo.prototype;
    golf = Object.create(tango, {constructor: {value: romeo}});
    output = function(argFoo, argBar) {
        _fun106341: for(var _fun106341_ip = 0; ; ) switch(_fun106341_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike == entity)) { _fun106341_ip = 31; continue _fun106341 }
 9:
            mike = {};
            zulu = 'PRESENCE_UPDATES';
            mike['type'] = zulu;
            zulu = new Array(0);
            mike['updates'] = zulu;
            entity = mike;
 31:
            tango = entity.updates;
            zulu = tango.push;
            mike = argBar;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    sizing = function(argFoo) {
        _fun106342: for(var _fun106342_ip = 0; ; ) switch(_fun106342_ip) {
 0:
            zulu = argFoo;
            entity = 'PRESENCE_UPDATE';
            entity = entity !== zulu;
            if(!entity) { _fun106342_ip = 24; continue _fun106342 }
 14:
            mike = 'GUILD_MEMBERS_CHUNK';
            entity = mike !== zulu;
 24:
            return entity;
        }
    };
    echo = golf;
    tango = new echo[romeo](result, output, sizing, kilo);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot21 = tango;
    tango = {};
    var _closure1_slot22 = tango;
    verify = ['INITIAL_GUILD'];
    golf = function(argFoo) {
        _fun106343: for(var _fun106343_ip = 0; ; ) switch(_fun106343_ip) {
 0:
            mike = argFoo;
            tango = mike.data_mode;
            zulu = 'full';
            entity = null;
            if(!(zulu !== tango)) { _fun106343_ip = 50; continue _fun106343 }
 19:
            tango = _closure1_slot10;
            zulu = tango.loadGuildIds;
            report = mike.id;
            mike = new Array(1);
            mike[0] = report;
            entity = zulu.bind(tango)(mike);
 50:
            return entity;
        }
    };
    tango = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot3;
        entity = 14;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        tango = zulu.initialGuild;
        zulu = tango.measure;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 15;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            tango = mike.Emitter;
            zulu = tango.batched;
            mike = function() {
                _fun106346: for(var _fun106346_ip = 0; ; ) switch(_fun106346_ip) {
 0:
                    tango = _closure1_slot2;
                    offset = _closure1_slot3;
                    entity = 16;
                    mike = offset[entity];
                    entity = undefined;
                    options = tango.bind(entity)(mike);
                    golf = options.hydrateInitialGuild;
                    report = _closure2_slot0;
                    verify = _closure1_slot0;
                    tango = 13;
                    tango = offset[tango];
                    tango = verify.bind(entity)(tango);
                    tango = tango.socket;
                    tango = tango.identifyStartTime;
                    golf = golf.bind(options)(report, tango);
                    var _closure4_slot0 = golf;
                    report = _closure1_slot13;
                    tango = report.getCurrentUser;
                    report = tango.bind(report)();
                    tango = null;
                    if(!(tango != report)) { _fun106346_ip = 211; continue _fun106346 }
 97:
                    report = _closure1_slot25;
                    tango = {};
                    options = 'GUILD_CREATE';
                    tango['type'] = options;
                    tango['guild'] = golf;
                    tango = report.bind(entity)(tango);
                    tango = {};
                    options = 'VOICE_STATE_UPDATES';
                    tango['type'] = options;
                    options = golf.voice_states;
                    golf = options.map;
                    oscar = function(argFoo) {
                        _fun106347: for(var _fun106347_ip = 0; ; ) switch(_fun106347_ip) {
 0:
                            zulu = argFoo;
                            entity = {};
                            mike = zulu.user_id;
                            entity['userId'] = mike;
                            mike = _closure4_slot0;
                            mike = mike.id;
                            entity['guildId'] = mike;
                            mike = zulu.session_id;
                            entity['sessionId'] = mike;
                            mike = zulu.channel_id;
                            entity['channelId'] = mike;
                            mike = zulu.mute;
                            entity['mute'] = mike;
                            mike = zulu.deaf;
                            entity['deaf'] = mike;
                            mike = zulu.self_mute;
                            entity['selfMute'] = mike;
                            mike = zulu.self_deaf;
                            entity['selfDeaf'] = mike;
                            mike = zulu.self_video;
                            if(mike) { _fun106347_ip = 106; continue _fun106347 }
 104:
                            mike = false;
 106:
                            entity['selfVideo'] = mike;
                            mike = zulu.suppress;
                            entity['suppress'] = mike;
                            mike = zulu.self_stream;
                            if(mike) { _fun106347_ip = 133; continue _fun106347 }
 131:
                            mike = false;
 133:
                            entity['selfStream'] = mike;
                            report = zulu.request_to_speak_timestamp;
                            mike = null;
                            oscar = mike != report;
                            tango = null;
                            if(!oscar) { _fun106347_ip = 158; continue _fun106347 }
 155:
                            tango = report;
 158:
                            entity['requestToSpeakTimestamp'] = tango;
                            zulu = zulu.discoverable;
                            mike = mike == zulu;
                            if(mike) { _fun106347_ip = 179; continue _fun106347 }
 176:
                            mike = zulu;
 179:
                            entity['discoverable'] = mike;
                            return entity;
                        }
                    };
                    oscar = golf.bind(options)(oscar);
                    tango['voiceStates'] = oscar;
                    tango = report.bind(entity)(tango);
                    tango = _closure1_slot17;
                    zulu = tango.log;
                    mike = _closure2_slot0;
                    oscar = mike.id;
                    mike = global;
                    mike = mike.HermesInternal;
                    report = mike.concat;
                    mike = 'Dispatched INITIAL_GUILD ';
                    mike = report.bind(mike)(oscar);
                    mike = zulu.bind(tango)(mike);
 211:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    golf = ['READY_SUPPLEMENTAL'];
    tango = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot3;
        entity = 14;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.readySupplemental;
        tango = report.measure;
        zulu = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 15;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            tango = mike.Emitter;
            zulu = tango.batched;
            mike = function() {
                _fun106350: for(var _fun106350_ip = 0; ; ) switch(_fun106350_ip) {
 0:
                    oscar = _closure1_slot1;
                    entity = _closure1_slot3;
                    report = 14;
                    tango = entity[report];
                    entity = undefined;
                    tango = oscar.bind(entity)(tango);
                    golf = tango.hydrateReadySupplemental;
                    oscar = golf.measure;
                    tango = function() {
                        zulu = _closure1_slot2;
                        golf = _closure1_slot3;
                        mike = 16;
                        mike = golf[mike];
                        oscar = undefined;
                        tango = zulu.bind(oscar)(mike);
                        zulu = tango.hydrateReadySupplementalPayload;
                        mike = _closure2_slot0;
                        report = _closure1_slot0;
                        entity = 13;
                        entity = golf[entity];
                        entity = report.bind(oscar)(entity);
                        entity = entity.socket;
                        entity = entity.identifyStartTime;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    oscar = oscar.bind(golf)(tango);
                    _closure2_slot0 = oscar;
                    verify = function(argFoo) { // Original name: transformPresences
                        zulu = argFoo;
                        mike = zulu.map;
                        entity = function(argFoo) {
                            mike = argFoo;
                            entity = {};
                            zulu = mike.user;
                            entity['user'] = zulu;
                            zulu = mike.status;
                            entity['status'] = zulu;
                            zulu = mike.client_status;
                            entity['clientStatus'] = zulu;
                            zulu = mike.activities;
                            entity['activities'] = zulu;
                            mike = mike.hidden_activities;
                            entity['hiddenActivities'] = mike;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    var _closure4_slot0 = verify;
                    options = oscar.guilds;
                    golf = options.filter;
                    oscar = function(argFoo) {
                        entity = argFoo;
                        mike = entity.unavailable;
                        entity = true;
                        entity = entity !== mike;
                        return entity;
                    };
                    golf = golf.bind(options)(oscar);
                    var _closure4_slot1 = golf;
                    options = golf.forEach;
                    oscar = function(argFoo) {
                        _fun106355: for(var _fun106355_ip = 0; ; ) switch(_fun106355_ip) {
 0:
                            zulu = argFoo;
                            tango = _closure4_slot0;
                            mike = zulu.presences;
                            if(mike) { _fun106355_ip = 23; continue _fun106355 }
 19:
                            mike = new Array(0);
 23:
                            entity = undefined;
                            mike = tango.bind(entity)(mike);
                            zulu['presences'] = mike;
                            return entity;
                        }
                    };
                    oscar = options.bind(golf)(oscar);
                    oscar = _closure2_slot0;
                    oscar = oscar.presences;
                    if(oscar) { _fun106350_ip = 132; continue _fun106350 }
 126:
                    oscar = new Array(0);
                    _fun106350_ip = 147; continue _fun106350;
 132:
                    options = _closure2_slot0;
                    options = options.presences;
                    oscar = verify.bind(entity)(options);
 147:
                    var _closure4_slot2 = oscar;
                    oscar = _closure2_slot0;
                    offset = oscar.lazy_private_channels;
                    oscar = null;
                    if(!(oscar == offset)) { _fun106350_ip = 173; continue _fun106350 }
 169:
                    offset = new Array(0);
 173:
                    verify = offset.map;
                    options = function(argFoo) {
                        zulu = _closure1_slot6;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    options = verify.bind(offset)(options);
                    var _closure4_slot3 = options;
                    tango = _closure2_slot0;
                    tango = tango.game_invites;
                    if(!(oscar == tango)) { _fun106350_ip = 214; continue _fun106350 }
 210:
                    tango = new Array(0);
 214:
                    var _closure4_slot4 = tango;
                    oscar = _closure1_slot1;
                    tango = _closure1_slot3;
                    report = tango[report];
                    report = oscar.bind(entity)(report);
                    options = report.dispatchReadySupplemental;
                    oscar = options.measure;
                    report = function() {
                        zulu = _closure1_slot25;
                        mike = {};
                        entity = 'CONNECTION_OPEN_SUPPLEMENTAL';
                        mike['type'] = entity;
                        tango = _closure4_slot1;
                        mike['guilds'] = tango;
                        tango = _closure4_slot2;
                        mike['presences'] = tango;
                        tango = _closure4_slot3;
                        mike['lazyPrivateChannels'] = tango;
                        entity = _closure4_slot4;
                        mike['gameInvites'] = entity;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    report = oscar.bind(options)(report);
                    oscar = new Array(0);
                    var _closure4_slot5 = oscar;
                    report = golf.forEach;
                    zulu = function(argFoo) {
                        mike = argFoo;
                        var _closure5_slot0 = mike;
                        zulu = mike.voice_states;
                        mike = zulu.forEach;
                        entity = function(argFoo) {
                            _fun106359: for(var _fun106359_ip = 0; ; ) switch(_fun106359_ip) {
 0:
                                report = argFoo;
                                zulu = _closure4_slot5;
                                mike = zulu.push;
                                entity = {};
                                tango = report.user_id;
                                entity['userId'] = tango;
                                tango = _closure5_slot0;
                                tango = tango.id;
                                entity['guildId'] = tango;
                                tango = report.session_id;
                                entity['sessionId'] = tango;
                                tango = report.channel_id;
                                entity['channelId'] = tango;
                                tango = report.mute;
                                entity['mute'] = tango;
                                tango = report.deaf;
                                entity['deaf'] = tango;
                                tango = report.self_mute;
                                entity['selfMute'] = tango;
                                tango = report.self_deaf;
                                entity['selfDeaf'] = tango;
                                tango = report.self_video;
                                if(tango) { _fun106359_ip = 118; continue _fun106359 }
 116:
                                tango = false;
 118:
                                entity['selfVideo'] = tango;
                                tango = report.suppress;
                                entity['suppress'] = tango;
                                tango = report.self_stream;
                                if(tango) { _fun106359_ip = 145; continue _fun106359 }
 143:
                                tango = false;
 145:
                                entity['selfStream'] = tango;
                                golf = report.request_to_speak_timestamp;
                                tango = null;
                                options = tango != golf;
                                oscar = null;
                                if(!options) { _fun106359_ip = 170; continue _fun106359 }
 167:
                                oscar = golf;
 170:
                                entity['requestToSpeakTimestamp'] = oscar;
                                report = report.discoverable;
                                tango = tango == report;
                                if(tango) { _fun106359_ip = 191; continue _fun106359 }
 188:
                                tango = report;
 191:
                                entity['discoverable'] = tango;
                                entity = mike.bind(zulu)(entity);
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    zulu = report.bind(golf)(zulu);
                    report = _closure1_slot25;
                    zulu = {'type': 'VOICE_STATE_UPDATES', 'voiceStates': null, 'initial': true};
                    zulu['voiceStates'] = oscar;
                    zulu = report.bind(entity)(zulu);
                    zulu = _closure1_slot0;
                    mike = 13;
                    mike = tango[mike];
                    mike = zulu.bind(entity)(mike);
                    zulu = mike.localVoiceState;
                    mike = zulu.update;
                    mike = mike.bind(zulu)();
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        zulu = tango.bind(report)(zulu);
        zulu = global;
        tango = zulu.setTimeout;
        zulu = function() {
            zulu = _closure1_slot25;
            mike = {};
            entity = 'POST_CONNECTION_OPEN';
            mike['type'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        mike = 2000;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    verify = ['READY'];
    golf = function(argFoo) {
        _fun106361: for(var _fun106361_ip = 0; ; ) switch(_fun106361_ip) {
 0:
            report = _closure1_slot2;
            tango = _closure1_slot3;
            zulu = 16;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.preloadReadyPayloadData;
            oscar = zulu.bind(tango)();
            zulu = argFoo;
            report = zulu.guilds;
            tango = report.filter;
            zulu = function(argFoo) {
                _fun106362: for(var _fun106362_ip = 0; ; ) switch(_fun106362_ip) {
 0:
                    tango = argFoo;
                    entity = tango.unavailable;
                    entity = !entity;
                    if(!entity) { _fun106362_ip = 108; continue _fun106362 }
 15:
                    zulu = tango.data_mode;
                    mike = 'partial';
                    mike = mike === zulu;
                    if(!mike) { _fun106362_ip = 105; continue _fun106362 }
 32:
                    zulu = tango.partial_updates;
                    zulu = zulu.channels;
                    oscar = null;
                    if(!(oscar == zulu)) { _fun106362_ip = 54; continue _fun106362 }
 50:
                    zulu = new Array(0);
 54:
                    zulu = zulu.length;
                    report = 0;
                    zulu = zulu > report;
                    if(zulu) { _fun106362_ip = 97; continue _fun106362 }
 68:
                    tango = tango.partial_updates;
                    tango = tango.deleted_channel_ids;
                    if(!(oscar == tango)) { _fun106362_ip = 88; continue _fun106362 }
 84:
                    tango = new Array(0);
 88:
                    tango = tango.length;
                    zulu = tango > report;
 97:
                    if(zulu) { _fun106362_ip = 102; continue _fun106362 }
 100:
                    zulu = undefined;
 102:
                    mike = zulu;
 105:
                    entity = mike;
 108:
                    return entity;
                }
            };
            report = tango.bind(report)(zulu);
            tango = report.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            tango = tango.bind(report)(zulu);
            zulu = _closure1_slot10;
            mike = zulu.loadGuildIds;
            report = mike.bind(zulu)(tango);
            mike = null;
            if(!(mike == report)) { _fun106361_ip = 119; continue _fun106361 }
 101:
            mike = global;
            zulu = mike.Promise;
            mike = zulu.resolve;
            report = mike.bind(zulu)();
 119:
            mike = global;
            tango = mike.Promise;
            zulu = tango.all;
            mike = new Array(2);
            mike[0] = oscar;
            mike[1] = report;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.then;
            entity = function(argFoo) {
                _fun106364: for(var _fun106364_ip = 0; ; ) switch(_fun106364_ip) {
 0:
                    entity = argFoo;
                    mike = entity[Symbol.iterator];
                    entity = mike().next;
                    tango = entity().value;
                    zulu = mike;
                    entity = undefined;
                    zulu = zulu === entity;
                    if(zulu) { _fun106364_ip = 25; continue _fun106364 }
 22:
                    entity = tango;
 25:
                    if(zulu) { _fun106364_ip = 31; continue _fun106364 }
 28:
                    mike.return();
 31:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango = function(argFoo, argBar, argBaz) {
        _fun106365: for(var _fun106365_ip = 0; ; ) switch(_fun106365_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            zulu = argBaz;
            var _closure2_slot1 = zulu;
            entity = entity.user;
            zulu = entity.bot;
            if(zulu) { _fun106365_ip = 81; continue _fun106365 }
 33:
            report = _closure1_slot1;
            tango = _closure1_slot3;
            zulu = 14;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            tango = zulu.ready;
            zulu = tango.measure;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                tango = mike.Emitter;
                zulu = tango.batched;
                mike = function() {
                    _fun106367: for(var _fun106367_ip = 0; ; ) switch(_fun106367_ip) {
 0:
                        report = _closure1_slot1;
                        entity = _closure1_slot3;
                        options = 14;
                        tango = entity[options];
                        entity = undefined;
                        tango = report.bind(entity)(tango);
                        oscar = tango.hydrateReady;
                        report = oscar.measure;
                        tango = function() {
                            zulu = _closure1_slot2;
                            options = _closure1_slot3;
                            entity = 16;
                            entity = options[entity];
                            golf = undefined;
                            report = zulu.bind(golf)(entity);
                            tango = report.hydrateReadyPayloadPrioritized;
                            zulu = _closure2_slot0;
                            oscar = _closure1_slot0;
                            mike = 13;
                            mike = options[mike];
                            mike = oscar.bind(golf)(mike);
                            mike = mike.socket;
                            mike = mike.identifyStartTime;
                            entity = _closure2_slot1;
                            entity = tango.bind(report)(zulu, mike, entity);
                            return entity;
                        };
                        tango = report.bind(oscar)(tango);
                        _closure2_slot0 = tango;
                        golf = tango.private_channels;
                        oscar = golf.map;
                        tango = function(argFoo) {
                            zulu = _closure1_slot6;
                            mike = undefined;
                            entity = argFoo;
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        tango = oscar.bind(golf)(tango);
                        var _closure4_slot0 = tango;
                        tango = _closure2_slot0;
                        golf = tango.guilds;
                        oscar = golf.filter;
                        tango = function(argFoo) {
                            _fun106370: for(var _fun106370_ip = 0; ; ) switch(_fun106370_ip) {
 0:
                                mike = argFoo;
                                entity = mike.unavailable;
                                zulu = true;
                                entity = zulu === entity;
                                if(!entity) { _fun106370_ip = 28; continue _fun106370 }
 18:
                                mike = mike.geo_restricted;
                                entity = zulu !== mike;
 28:
                                return entity;
                            }
                        };
                        golf = oscar.bind(golf)(tango);
                        oscar = golf.map;
                        tango = function(argFoo) {
                            entity = argFoo;
                            entity = entity.id;
                            return entity;
                        };
                        tango = oscar.bind(golf)(tango);
                        var _closure4_slot1 = tango;
                        tango = _closure2_slot0;
                        golf = tango.guilds;
                        oscar = golf.filter;
                        tango = function(argFoo) {
                            entity = argFoo;
                            mike = entity.unavailable;
                            entity = true;
                            entity = entity !== mike;
                            return entity;
                        };
                        golf = oscar.bind(golf)(tango);
                        var _closure4_slot2 = golf;
                        tango = _closure2_slot0;
                        verify = tango.guilds;
                        oscar = verify.filter;
                        tango = function(argFoo) {
                            entity = argFoo;
                            mike = entity.geo_restricted;
                            entity = true;
                            entity = entity === mike;
                            return entity;
                        };
                        tango = oscar.bind(verify)(tango);
                        var _closure4_slot3 = tango;
                        oscar = golf.forEach;
                        tango = function(argFoo) {
                            mike = new Array(0);
                            entity = argFoo;
                            entity['presences'] = mike;
                            entity = undefined;
                            return entity;
                        };
                        tango = oscar.bind(golf)(tango);
                        tango = _closure2_slot0;
                        oscar = tango.user_settings_proto;
                        tango = null;
                        golf = tango == oscar;
                        oscar = undefined;
                        if(golf) { _fun106367_ip = 274; continue _fun106367 }
 233:
                        verify = _closure1_slot0;
                        offset = _closure1_slot3;
                        golf = 17;
                        golf = offset[golf];
                        offset = verify.bind(entity)(golf);
                        verify = offset.b64ToPreloadedUserSettingsProto;
                        golf = _closure2_slot0;
                        golf = golf.user_settings_proto;
                        oscar = verify.bind(offset)(golf);
 274:
                        var _closure4_slot4 = oscar;
                        golf = _closure1_slot1;
                        oscar = _closure1_slot3;
                        verify = 18;
                        verify = oscar[verify];
                        yankee = golf.bind(entity)(verify);
                        offset = 'AllGatewayConnectionStores';
                        verify = function() {
                            zulu = _closure1_slot0;
                            mike = _closure1_slot3;
                            entity = 19;
                            mike = mike[entity];
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            return entity;
                        };
                        verify = yankee.bind(entity)(offset, verify);
                        oscar = oscar[options];
                        oscar = golf.bind(entity)(oscar);
                        golf = oscar.dispatchReady;
                        oscar = golf.measure;
                        zulu = function() {
                            _fun106376: for(var _fun106376_ip = 0; ; ) switch(_fun106376_ip) {
 0:
                                zulu = _closure1_slot25;
                                mike = {};
                                tango = 'CONNECTION_OPEN';
                                mike['type'] = tango;
                                report = _closure2_slot0;
                                report = report.session_id;
                                mike['sessionId'] = report;
                                report = _closure2_slot0;
                                report = report.auth_session_id_hash;
                                mike['authSessionIdHash'] = report;
                                report = _closure2_slot0;
                                report = report.static_client_session_id;
                                mike['staticAuthSessionId'] = report;
                                report = _closure2_slot0;
                                report = report.user;
                                mike['user'] = report;
                                report = _closure2_slot0;
                                report = report.users;
                                mike['users'] = report;
                                oscar = _closure4_slot2;
                                mike['guilds'] = oscar;
                                oscar = _closure4_slot0;
                                mike['initialPrivateChannels'] = oscar;
                                oscar = _closure4_slot1;
                                mike['unavailableGuilds'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.read_state;
                                mike['readState'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.user_guild_settings;
                                mike['userGuildSettings'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.tutorial;
                                mike['tutorial'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.relationships;
                                mike['relationships'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.game_relationships;
                                mike['gameRelationships'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.friend_suggestion_count;
                                mike['friendSuggestionCount'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.presences;
                                mike['presences'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.analytics_token;
                                mike['analyticsToken'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.experiments;
                                mike['experiments'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.connected_accounts;
                                mike['connectedAccounts'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.guild_experiments;
                                mike['guildExperiments'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.required_action;
                                mike['requiredAction'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.consents;
                                mike['consents'] = oscar;
                                golf = _closure1_slot28;
                                entity = _closure2_slot0;
                                oscar = entity.sessions;
                                if(oscar) { _fun106376_ip = 345; continue _fun106376 }
 341:
                                oscar = new Array(0);
 345:
                                entity = undefined;
                                oscar = golf.bind(entity)(oscar);
                                mike['sessions'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.pending_payments;
                                mike['pendingPayments'] = oscar;
                                oscar = _closure2_slot0;
                                golf = oscar.country_code;
                                oscar = null;
                                options = oscar != golf;
                                oscar = undefined;
                                if(!options) { _fun106376_ip = 400; continue _fun106376 }
 397:
                                oscar = golf;
 400:
                                mike['countryCode'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.guild_join_requests;
                                if(oscar) { _fun106376_ip = 422; continue _fun106376 }
 418:
                                oscar = new Array(0);
 422:
                                mike['guildJoinRequests'] = oscar;
                                oscar = _closure4_slot4;
                                mike['userSettingsProto'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.api_code_version;
                                mike['apiCodeVersion'] = oscar;
                                oscar = _closure2_slot0;
                                oscar = oscar.auth;
                                mike['auth'] = oscar;
                                oscar = {};
                                golf = _closure2_slot0;
                                golf = golf.notification_settings;
                                golf = golf.flags;
                                oscar['flags'] = golf;
                                mike['notificationSettings'] = oscar;
                                report = _closure4_slot3;
                                mike['geoRestrictedGuilds'] = report;
                                tango = _closure2_slot0;
                                tango = tango.explicit_content_scan_version;
                                mike['explicitContentScanVersion'] = tango;
                                mike = zulu.bind(entity)(mike);
                                return entity;
                            }
                        };
                        zulu = oscar.bind(golf)(zulu);
                        zulu = _closure2_slot0;
                        zulu = zulu.auth_token;
                        if(!(tango != zulu)) { _fun106367_ip = 416; continue _fun106367 }
 364:
                        tango = _closure1_slot25;
                        zulu = {};
                        oscar = 'UPDATE_TOKEN';
                        zulu['type'] = oscar;
                        oscar = _closure2_slot0;
                        oscar = oscar.auth_token;
                        zulu['token'] = oscar;
                        report = _closure2_slot0;
                        report = report.user;
                        report = report.id;
                        zulu['userId'] = report;
                        zulu = tango.bind(entity)(zulu);
 416:
                        zulu = _closure1_slot0;
                        tango = _closure1_slot3;
                        mike = 13;
                        report = tango[mike];
                        report = zulu.bind(entity)(report);
                        oscar = report.localPresenceState;
                        report = oscar.update;
                        report = report.bind(oscar)();
                        mike = tango[mike];
                        mike = zulu.bind(entity)(mike);
                        zulu = mike.localVoiceState;
                        mike = zulu.update;
                        mike = mike.bind(zulu)();
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            _fun106365_ip = 102; continue _fun106365;
 81:
            zulu = _closure1_slot25;
            mike = {};
            entity = 'LOGOUT';
            mike['type'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 102:
            entity = undefined;
            return entity;
        }
    };
    tango = offset.bind(entity)(verify, golf, tango);
    golf = ['RESUMED'];
    tango = function() {
        tango = _closure1_slot0;
        report = _closure1_slot3;
        zulu = 13;
        oscar = report[zulu];
        entity = undefined;
        oscar = tango.bind(entity)(oscar);
        golf = oscar.localPresenceState;
        oscar = golf.forceUpdate;
        oscar = oscar.bind(golf)();
        zulu = report[zulu];
        zulu = tango.bind(entity)(zulu);
        tango = zulu.localVoiceState;
        zulu = tango.forceUpdate;
        zulu = zulu.bind(tango)();
        zulu = _closure1_slot25;
        mike = {};
        tango = 'CONNECTION_RESUMED';
        mike['type'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['TYPING_START'];
    tango = function(argFoo) {
        _fun106378: for(var _fun106378_ip = 0; ; ) switch(_fun106378_ip) {
 0:
            entity = argFoo;
            zulu = entity.member;
            mike = null;
            if(!(mike != zulu)) { _fun106378_ip = 53; continue _fun106378 }
 15:
            oscar = _closure1_slot26;
            report = entity.guild_id;
            mike = entity.member;
            tango = mike.user;
            zulu = entity.member;
            mike = undefined;
            mike = oscar.bind(mike)(report, tango, zulu);
 53:
            zulu = _closure1_slot25;
            mike = {};
            tango = 'TYPING_START';
            mike['type'] = tango;
            tango = entity.channel_id;
            mike['channelId'] = tango;
            entity = entity.user_id;
            mike['userId'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_RING_START'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_RING_START';
        mike['type'] = tango;
        tango = entity.ringing;
        mike['ringing'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        entity = entity.guild_id;
        mike['guildId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_RING_STOP'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_RING_STOP';
        mike['type'] = tango;
        tango = entity.ringing;
        mike['ringing'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        entity = entity.guild_id;
        mike['guildId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['ACTIVITY_START'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'ACTIVITY_START';
        mike['type'] = tango;
        tango = entity.user_id;
        mike['userId'] = tango;
        entity = entity.activity;
        mike['activity'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['ACTIVITY_USER_ACTION'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'ACTIVITY_USER_ACTION';
        mike['type'] = tango;
        tango = entity.action_type;
        mike['actionType'] = tango;
        tango = entity.user;
        mike['user'] = tango;
        tango = entity.application_id;
        mike['applicationId'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        entity = entity.message_id;
        mike['messageId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    verify = ['MESSAGE_CREATE'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        _fun106384: for(var _fun106384_ip = 0; ; ) switch(_fun106384_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot27;
            entity = undefined;
            zulu = zulu.bind(entity)(tango);
            report = tango.author;
            zulu = null;
            if(!(zulu != report)) { _fun106384_ip = 80; continue _fun106384 }
 29:
            zulu = _closure1_slot25;
            mike = {'type': 'MESSAGE_CREATE', 'guildId': null, 'channelId': null, 'message': null, 'optimistic': false, 'isPushNotification': false};
            report = tango.guild_id;
            mike['guildId'] = report;
            report = tango.channel_id;
            mike['channelId'] = report;
            mike['message'] = tango;
            mike = zulu.bind(entity)(mike);
 80:
            return entity;
        }
    };
    tango = offset.bind(entity)(verify, golf, tango);
    verify = ['MESSAGE_UPDATE'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        tango = argFoo;
        zulu = _closure1_slot27;
        entity = undefined;
        zulu = zulu.bind(entity)(tango);
        zulu = _closure1_slot25;
        mike = {};
        report = 'MESSAGE_UPDATE';
        mike['type'] = report;
        report = tango.guild_id;
        mike['guildId'] = report;
        mike['message'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    verify = ['MESSAGE_DELETE'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'MESSAGE_DELETE';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        tango = entity.id;
        mike['id'] = tango;
        entity = entity.channel_id;
        mike['channelId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    verify = ['MESSAGE_DELETE_BULK'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'MESSAGE_DELETE_BULK';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        tango = entity.ids;
        mike['ids'] = tango;
        entity = entity.channel_id;
        mike['channelId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    verify = ['MESSAGE_ACK'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildFromChannelId;
        entity = argFoo;
        entity = entity.channel_id;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'MESSAGE_ACK';
        mike['type'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        tango = entity.message_id;
        mike['messageId'] = tango;
        tango = entity.manual;
        mike['manual'] = tango;
        tango = entity.mention_count;
        mike['newMentionCount'] = tango;
        entity = entity.version;
        mike['version'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    golf = ['GUILD_FEATURE_ACK'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_FEATURE_ACK';
        mike['type'] = tango;
        tango = entity.resource_id;
        mike['id'] = tango;
        tango = entity.ack_type;
        mike['ackType'] = tango;
        entity = entity.entity_id;
        mike['ackedId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_NON_CHANNEL_ACK'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'USER_NON_CHANNEL_ACK';
        mike['type'] = tango;
        tango = entity.ack_type;
        mike['ackType'] = tango;
        entity = entity.entity_id;
        mike['ackedId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    verify = ['CHANNEL_PINS_ACK'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'CHANNEL_PINS_ACK';
        mike['type'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        tango = entity.timestamp;
        mike['timestamp'] = tango;
        entity = entity.version;
        mike['version'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    verify = ['CHANNEL_PINS_UPDATE'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'CHANNEL_PINS_UPDATE';
        mike['type'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        entity = entity.last_pin_timestamp;
        mike['lastPinTimestamp'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    verify = ['CHANNEL_CREATE', 'CHANNEL_DELETE'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo, argBar) {
        zulu = _closure1_slot25;
        mike = {};
        tango = argBar;
        mike['type'] = tango;
        report = _closure1_slot6;
        entity = undefined;
        tango = argFoo;
        tango = report.bind(entity)(tango);
        mike['channel'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    golf = ['VOICE_CHANNEL_STATUS_UPDATE'];
    tango = function(argFoo, argBar) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = argBar;
        mike['type'] = tango;
        tango = entity.id;
        mike['id'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        entity = entity.status;
        mike['status'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['CHANNEL_STATUSES'];
    tango = function(argFoo, argBar) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = argBar;
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        entity = entity.channels;
        mike['channels'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    verify = ['CHANNEL_UPDATE'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        zulu = _closure1_slot18;
        mike = zulu.add;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    verify = ['THREAD_CREATE', 'THREAD_UPDATE', 'THREAD_DELETE'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo, argBar) {
        report = argFoo;
        oscar = report.newly_created;
        zulu = _closure1_slot5;
        mike = _closure1_slot4;
        entity = undefined;
        report = zulu.bind(entity)(report, mike);
        zulu = _closure1_slot25;
        mike = {};
        golf = argBar;
        mike['type'] = golf;
        mike['isNewlyCreated'] = oscar;
        tango = _closure1_slot6;
        tango = tango.bind(entity)(report);
        mike['channel'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    verify = ['THREAD_LIST_SYNC'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        _fun106408: for(var _fun106408_ip = 0; ; ) switch(_fun106408_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot25;
            mike = {};
            entity = 'THREAD_LIST_SYNC';
            mike['type'] = entity;
            entity = tango.guild_id;
            mike['guildId'] = entity;
            golf = tango.threads;
            report = golf.map;
            entity = function(argFoo) {
                _fun106409: for(var _fun106409_ip = 0; ; ) switch(_fun106409_ip) {
 0:
                    zulu = argFoo;
                    report = _closure1_slot9;
                    tango = report.getChannel;
                    mike = zulu.parent_id;
                    mike = tango.bind(report)(mike);
                    tango = null;
                    if(!(tango != mike)) { _fun106409_ip = 55; continue _fun106409 }
 32:
                    tango = mike.nsfw;
                    zulu['nsfw'] = tango;
                    mike = mike.type;
                    zulu['parentChannelThreadType'] = mike;
 55:
                    mike = _closure1_slot6;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            entity = report.bind(golf)(entity);
            mike['threads'] = entity;
            entity = tango.most_recent_messages;
            mike['mostRecentMessages'] = entity;
            golf = tango.members;
            entity = undefined;
            report = undefined;
            if(!golf) { _fun106408_ip = 132; continue _fun106408 }
 83:
            offset = _closure1_slot1;
            yankee = _closure1_slot3;
            oscar = 20;
            oscar = yankee[oscar];
            verify = offset.bind(entity)(oscar);
            options = verify.map;
            golf = tango.members;
            oscar = 21;
            oscar = yankee[oscar];
            oscar = offset.bind(entity)(oscar);
            report = options.bind(verify)(golf, oscar);
 132:
            mike['members'] = report;
            tango = tango.channel_ids;
            mike['channelIds'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    tango = offset.bind(entity)(verify, golf, tango);
    golf = ['THREAD_MEMBER_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'THREAD_MEMBER_UPDATE';
        mike['type'] = tango;
        tango = entity.id;
        mike['id'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        tango = entity.user_id;
        mike['userId'] = tango;
        tango = entity.flags;
        mike['flags'] = tango;
        tango = entity.muted;
        mike['muted'] = tango;
        tango = entity.mute_config;
        mike['muteConfig'] = tango;
        entity = entity.join_timestamp;
        mike['joinTimestamp'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['THREAD_MEMBERS_UPDATE'];
    tango = function(argFoo) {
        _fun106411: for(var _fun106411_ip = 0; ; ) switch(_fun106411_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            zulu = _closure1_slot25;
            mike = {};
            entity = 'THREAD_MEMBERS_UPDATE';
            mike['type'] = entity;
            entity = tango.id;
            mike['id'] = entity;
            entity = tango.guild_id;
            mike['guildId'] = entity;
            entity = tango.member_count;
            mike['memberCount'] = entity;
            options = tango.added_members;
            entity = null;
            golf = entity == options;
            entity = undefined;
            report = undefined;
            if(golf) { _fun106411_ip = 93; continue _fun106411 }
 76:
            golf = options.map;
            oscar = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = mike.id;
                entity['id'] = zulu;
                zulu = _closure2_slot0;
                zulu = zulu.guild_id;
                entity['guildId'] = zulu;
                zulu = mike.user_id;
                entity['userId'] = zulu;
                zulu = mike.flags;
                entity['flags'] = zulu;
                mike = mike.join_timestamp;
                entity['joinTimestamp'] = mike;
                return entity;
            };
            report = golf.bind(options)(oscar);
 93:
            mike['addedMembers'] = report;
            report = tango.removed_member_ids;
            mike['removedMemberIds'] = report;
            tango = tango.member_ids_preview;
            mike['memberIdsPreview'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['FORUM_UNREADS'];
    tango = function(argFoo) {
        _fun106413: for(var _fun106413_ip = 0; ; ) switch(_fun106413_ip) {
 0:
            entity = argFoo;
            mike = entity.permission_denied;
            if(mike) { _fun106413_ip = 77; continue _fun106413 }
 12:
            zulu = _closure1_slot25;
            mike = {};
            tango = 'FORUM_UNREADS';
            mike['type'] = tango;
            tango = entity.channel_id;
            mike['channelId'] = tango;
            report = entity.threads;
            tango = report.map;
            entity = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = mike.thread_id;
                entity['threadId'] = zulu;
                zulu = mike.missing;
                entity['missing'] = zulu;
                mike = mike.count;
                entity['count'] = mike;
                return entity;
            };
            entity = tango.bind(report)(entity);
            mike['threads'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 77:
            entity = undefined;
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['SOUNDBOARD_SOUNDS'];
    tango = function(argFoo) {
        zulu = _closure1_slot19;
        mike = zulu.add;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['CHANNEL_RECIPIENT_ADD', 'CHANNEL_RECIPIENT_REMOVE'];
    tango = function(argFoo, argBar) {
        entity = argFoo;
        report = _closure1_slot9;
        tango = report.getBasicChannel;
        zulu = entity.channel_id;
        tango = tango.bind(report)(zulu);
        zulu = _closure1_slot25;
        mike = {};
        report = argBar;
        mike['type'] = report;
        report = entity.channel_id;
        mike['channelId'] = report;
        report = entity.user;
        mike['user'] = report;
        entity = entity.nick;
        mike['nick'] = entity;
        entity = null;
        entity = entity != tango;
        mike['isMember'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    verify = ['GUILD_CREATE'];
    golf = function(argFoo) {
        _fun106417: for(var _fun106417_ip = 0; ; ) switch(_fun106417_ip) {
 0:
            mike = argFoo;
            tango = mike.data_mode;
            zulu = 'full';
            entity = null;
            if(!(zulu !== tango)) { _fun106417_ip = 50; continue _fun106417 }
 19:
            tango = _closure1_slot10;
            zulu = tango.loadGuildIds;
            report = mike.id;
            mike = new Array(1);
            mike[0] = report;
            entity = zulu.bind(tango)(mike);
 50:
            return entity;
        }
    };
    tango = function(argFoo) {
        _fun106418: for(var _fun106418_ip = 0; ; ) switch(_fun106418_ip) {
 0:
            entity = argFoo;
            zulu = entity.unavailable;
            if(zulu) { _fun106418_ip = 130; continue _fun106418 }
 17:
            tango = _closure1_slot2;
            options = _closure1_slot3;
            zulu = 16;
            zulu = options[zulu];
            report = undefined;
            tango = tango.bind(report)(zulu);
            zulu = tango.hydratePreviouslyUnavailableGuild;
            golf = zulu.bind(tango)(entity);
            var _closure2_slot0 = golf;
            tango = _closure1_slot1;
            zulu = 22;
            zulu = options[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.createGuild;
            zulu = zulu.bind(tango)(golf);
            tango = _closure1_slot25;
            zulu = {};
            options = 'VOICE_STATE_UPDATES';
            zulu['type'] = options;
            options = golf.voice_states;
            golf = options.map;
            oscar = function(argFoo) {
                _fun106419: for(var _fun106419_ip = 0; ; ) switch(_fun106419_ip) {
 0:
                    zulu = argFoo;
                    entity = {};
                    mike = zulu.user_id;
                    entity['userId'] = mike;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity['guildId'] = mike;
                    mike = zulu.session_id;
                    entity['sessionId'] = mike;
                    mike = zulu.channel_id;
                    entity['channelId'] = mike;
                    mike = zulu.mute;
                    entity['mute'] = mike;
                    mike = zulu.deaf;
                    entity['deaf'] = mike;
                    mike = zulu.self_mute;
                    entity['selfMute'] = mike;
                    mike = zulu.self_deaf;
                    entity['selfDeaf'] = mike;
                    mike = zulu.self_video;
                    if(mike) { _fun106419_ip = 106; continue _fun106419 }
 104:
                    mike = false;
 106:
                    entity['selfVideo'] = mike;
                    mike = zulu.suppress;
                    entity['suppress'] = mike;
                    mike = zulu.self_stream;
                    if(mike) { _fun106419_ip = 133; continue _fun106419 }
 131:
                    mike = false;
 133:
                    entity['selfStream'] = mike;
                    report = zulu.request_to_speak_timestamp;
                    mike = null;
                    oscar = mike != report;
                    tango = null;
                    if(!oscar) { _fun106419_ip = 158; continue _fun106419 }
 155:
                    tango = report;
 158:
                    entity['requestToSpeakTimestamp'] = tango;
                    zulu = zulu.discoverable;
                    mike = mike == zulu;
                    if(mike) { _fun106419_ip = 179; continue _fun106419 }
 176:
                    mike = zulu;
 179:
                    entity['discoverable'] = mike;
                    return entity;
                }
            };
            oscar = golf.bind(options)(oscar);
            zulu['voiceStates'] = oscar;
            zulu = tango.bind(report)(zulu);
            _fun106418_ip = 160; continue _fun106418;
 130:
            zulu = _closure1_slot25;
            mike = {};
            tango = 'GUILD_UNAVAILABLE';
            mike['type'] = tango;
            entity = entity.id;
            mike['guildId'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 160:
            entity = undefined;
            return entity;
        }
    };
    tango = offset.bind(entity)(verify, golf, tango);
    golf = ['GUILD_UPDATE'];
    tango = function(argFoo) {
        _fun106420: for(var _fun106420_ip = 0; ; ) switch(_fun106420_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot25;
            zulu = {};
            entity = 'GUILD_UPDATE';
            zulu['type'] = entity;
            zulu['guild'] = tango;
            entity = undefined;
            zulu = report.bind(entity)(zulu);
            zulu = tango.unavailable;
            if(!zulu) { _fun106420_ip = 68; continue _fun106420 }
 40:
            zulu = _closure1_slot25;
            mike = {};
            report = 'GUILD_UNAVAILABLE';
            mike['type'] = report;
            tango = tango.id;
            mike['guildId'] = tango;
            mike = zulu.bind(entity)(mike);
 68:
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_DELETE'];
    tango = function(argFoo) {
        _fun106421: for(var _fun106421_ip = 0; ; ) switch(_fun106421_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot25;
            zulu = {};
            entity = 'GUILD_DELETE';
            zulu['type'] = entity;
            zulu['guild'] = tango;
            entity = undefined;
            zulu = report.bind(entity)(zulu);
            zulu = tango.geo_restricted;
            if(zulu) { _fun106421_ip = 79; continue _fun106421 }
 40:
            zulu = tango.unavailable;
            if(!zulu) { _fun106421_ip = 125; continue _fun106421 }
 49:
            report = _closure1_slot25;
            zulu = {};
            oscar = 'GUILD_UNAVAILABLE';
            zulu['type'] = oscar;
            oscar = tango.id;
            zulu['guildId'] = oscar;
            zulu = report.bind(entity)(zulu);
            _fun106421_ip = 125; continue _fun106421;
 79:
            zulu = _closure1_slot25;
            mike = {};
            report = 'GUILD_GEO_RESTRICTED';
            mike['type'] = report;
            report = tango.id;
            mike['guildId'] = report;
            report = tango.icon;
            mike['icon'] = report;
            tango = tango.name;
            mike['name'] = tango;
            mike = zulu.bind(entity)(mike);
 125:
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_MEMBERS_CHUNK'];
    tango = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot3;
        entity = 15;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        tango = zulu.Emitter;
        zulu = tango.batched;
        mike = function() {
            _fun106423: for(var _fun106423_ip = 0; ; ) switch(_fun106423_ip) {
 0:
                oscar = _closure1_slot20;
                report = oscar.add;
                tango = {};
                zulu = _closure2_slot0;
                golf = zulu.guild_id;
                tango['guildId'] = golf;
                golf = zulu.members;
                tango['members'] = golf;
                golf = zulu.not_found;
                tango['notFound'] = golf;
                tango = report.bind(oscar)(tango);
                tango = zulu.presences;
                zulu = null;
                if(!(zulu != tango)) { _fun106423_ip = 98; continue _fun106423 }
 69:
                mike = _closure2_slot0;
                tango = mike.presences;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    mike = argFoo;
                    golf = mike.user;
                    oscar = mike.status;
                    entity = mike.client_status;
                    report = mike.activities;
                    tango = mike.hidden_activities;
                    zulu = _closure1_slot29;
                    mike = {};
                    options = _closure2_slot0;
                    options = options.guild_id;
                    mike['guildId'] = options;
                    mike['user'] = golf;
                    mike['status'] = oscar;
                    mike['activities'] = report;
                    mike['hiddenActivities'] = tango;
                    mike['clientStatus'] = entity;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
 98:
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.flush;
                mike = 'GUILD_MEMBERS_CHUNK';
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['THREAD_MEMBER_LIST_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot3;
        entity = 15;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        tango = zulu.Emitter;
        zulu = tango.batched;
        mike = function() {
            _fun106426: for(var _fun106426_ip = 0; ; ) switch(_fun106426_ip) {
 0:
                oscar = _closure1_slot25;
                report = {};
                entity = 'THREAD_MEMBER_LIST_UPDATE';
                report['type'] = entity;
                tango = _closure2_slot0;
                entity = tango.guild_id;
                report['guildId'] = entity;
                entity = tango.thread_id;
                report['threadId'] = entity;
                entity = tango.members;
                report['members'] = entity;
                entity = undefined;
                report = oscar.bind(entity)(report);
                report = tango.presences;
                tango = null;
                if(!(tango != report)) { _fun106426_ip = 103; continue _fun106426 }
 74:
                zulu = _closure2_slot0;
                report = zulu.presences;
                tango = report.forEach;
                zulu = function(argFoo) {
                    mike = argFoo;
                    golf = mike.user;
                    oscar = mike.status;
                    entity = mike.client_status;
                    report = mike.activities;
                    tango = mike.hidden_activities;
                    zulu = _closure1_slot29;
                    mike = {};
                    options = _closure2_slot0;
                    options = options.guild_id;
                    mike['guildId'] = options;
                    mike['user'] = golf;
                    mike['status'] = oscar;
                    mike['activities'] = report;
                    mike['hiddenActivities'] = tango;
                    mike['clientStatus'] = entity;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
 103:
                zulu = _closure1_slot1;
                tango = _closure1_slot3;
                mike = 12;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.flush;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_BAN_ADD', 'GUILD_BAN_REMOVE', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'GUILD_MEMBER_REMOVE'];
    tango = function(argFoo, argBar) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = argBar;
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        tango = entity.user;
        mike['user'] = tango;
        tango = entity.avatar;
        mike['avatar'] = tango;
        tango = entity.avatar_decoration_data;
        mike['avatarDecoration'] = tango;
        tango = entity.roles;
        mike['roles'] = tango;
        tango = entity.nick;
        mike['nick'] = tango;
        tango = entity.premium_since;
        mike['premiumSince'] = tango;
        tango = entity.pending;
        mike['isPending'] = tango;
        tango = entity.joined_at;
        mike['joinedAt'] = tango;
        tango = entity.communication_disabled_until;
        mike['communicationDisabledUntil'] = tango;
        tango = entity.unusual_dm_activity_until;
        mike['unusualDMActivityUntil'] = tango;
        entity = entity.flags;
        mike['flags'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    verify = ['GUILD_ROLE_CREATE', 'GUILD_ROLE_UPDATE'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo, argBar) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = argBar;
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        entity = entity.role;
        mike['role'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    verify = ['GUILD_ROLE_DELETE'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_ROLE_DELETE';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        tango = entity.role_id;
        mike['roleId'] = tango;
        entity = entity.version;
        mike['version'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    golf = ['GUILD_EMOJIS_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_EMOJIS_UPDATE';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        entity = entity.emojis;
        mike['emojis'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_STICKERS_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_STICKERS_UPDATE';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        entity = entity.stickers;
        mike['stickers'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_INTEGRATIONS_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GUILD_INTEGRATIONS_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.guild_id;
        mike['guildId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['INTEGRATION_CREATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'INTEGRATION_CREATE';
        mike['type'] = tango;
        tango = entity.application;
        mike['application'] = tango;
        entity = entity.guild_id;
        mike['guildId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['INTEGRATION_DELETE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'INTEGRATION_DELETE';
        mike['type'] = tango;
        tango = entity.application_id;
        mike['applicationId'] = tango;
        entity = entity.guild_id;
        mike['guildId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'CURRENT_USER_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['user'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_SETTINGS_PROTO_UPDATE'];
    tango = function(argFoo) {
        _fun106439: for(var _fun106439_ip = 0; ; ) switch(_fun106439_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            mike = zulu[mike];
            zulu = undefined;
            golf = report.bind(zulu)(mike);
            oscar = golf.b64ToProtoWithType;
            mike = tango.settings;
            report = mike.type;
            mike = tango.settings;
            mike = mike.proto;
            oscar = oscar.bind(golf)(report, mike);
            mike = null;
            if(!(mike != oscar)) { _fun106439_ip = 137; continue _fun106439 }
 69:
            report = 'string';
            mike = typeof oscar;
            if(!(report !== mike)) { _fun106439_ip = 139; continue _fun106439 }
 80:
            mike = _closure1_slot25;
            entity = {};
            report = 'USER_SETTINGS_PROTO_UPDATE';
            entity['type'] = report;
            report = {};
            report['proto'] = oscar;
            oscar = tango.settings;
            oscar = oscar.type;
            report['type'] = oscar;
            entity['settings'] = report;
            tango = tango.partial;
            entity['partial'] = tango;
            entity = mike.bind(zulu)(entity);
 137:
            return zulu;
 139:
            entity = global;
            mike = entity.Error;
            entity = 'UserSettingsProto must not be a string';
            entity = mike.bind(zulu)(entity);
            throw entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_GUILD_SETTINGS_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'USER_GUILD_SETTINGS_FULL_UPDATE';
        mike['type'] = entity;
        entity = new Array(1);
        tango = argFoo;
        entity[0] = tango;
        mike['userGuildSettings'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_CONNECTIONS_UPDATE'];
    tango = function() {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'USER_CONNECTIONS_UPDATE';
        mike['type'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_REQUIRED_ACTION_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'USER_REQUIRED_ACTION_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.required_action;
        mike['requiredAction'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_NOTE_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'USER_NOTE_UPDATE';
        mike['type'] = entity;
        tango = argFoo;
        report = mike;
        entity = copyDataProperties(report, tango);
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['RELATIONSHIP_ADD'];
    tango = function(argFoo) {
        _fun106444: for(var _fun106444_ip = 0; ; ) switch(_fun106444_ip) {
 0:
            entity = argFoo;
            zulu = _closure1_slot25;
            mike = {};
            tango = 'RELATIONSHIP_ADD';
            mike['type'] = tango;
            tango = {};
            report = entity.id;
            tango['id'] = report;
            report = entity.type;
            tango['type'] = report;
            report = entity.user;
            tango['user'] = report;
            report = entity.since;
            tango['since'] = report;
            report = entity.nickname;
            tango['nickname'] = report;
            report = entity.is_spam_request;
            if(report) { _fun106444_ip = 82; continue _fun106444 }
 80:
            report = false;
 82:
            tango['isSpamRequest'] = report;
            report = entity.is_stranger_request;
            if(report) { _fun106444_ip = 98; continue _fun106444 }
 96:
            report = false;
 98:
            tango['isStrangerRequest'] = report;
            report = entity.user_ignored;
            if(report) { _fun106444_ip = 114; continue _fun106444 }
 112:
            report = false;
 114:
            tango['userIgnored'] = report;
            report = entity.origin_application_id;
            tango['originApplicationId'] = report;
            mike['relationship'] = tango;
            tango = entity.should_notify;
            entity = true;
            entity = entity === tango;
            mike['shouldNotify'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['RELATIONSHIP_REMOVE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'RELATIONSHIP_REMOVE';
        mike['type'] = entity;
        entity = argFoo;
        mike['relationship'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['RELATIONSHIP_UPDATE'];
    tango = function(argFoo) {
        _fun106446: for(var _fun106446_ip = 0; ; ) switch(_fun106446_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot25;
            mike = {};
            entity = 'RELATIONSHIP_UPDATE';
            mike['type'] = entity;
            entity = {};
            report = tango.id;
            entity['id'] = report;
            report = tango.type;
            entity['type'] = report;
            report = tango.user;
            entity['user'] = report;
            report = tango.nickname;
            entity['nickname'] = report;
            report = tango.since;
            entity['since'] = report;
            report = tango.is_spam_request;
            if(report) { _fun106446_ip = 82; continue _fun106446 }
 80:
            report = false;
 82:
            entity['isSpamRequest'] = report;
            report = tango.is_stranger_request;
            if(report) { _fun106446_ip = 98; continue _fun106446 }
 96:
            report = false;
 98:
            entity['isStrangerRequest'] = report;
            report = tango.user_ignored;
            if(report) { _fun106446_ip = 114; continue _fun106446 }
 112:
            report = false;
 114:
            entity['userIgnored'] = report;
            tango = tango.origin_application_id;
            entity['originApplicationId'] = tango;
            mike['relationship'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GAME_RELATIONSHIP_ADD'];
    tango = function(argFoo) {
        tango = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GAME_RELATIONSHIP_ADD';
        mike['type'] = entity;
        entity = {};
        report = tango.id;
        entity['id'] = report;
        report = tango.application_id;
        entity['applicationId'] = report;
        report = tango.type;
        entity['type'] = report;
        report = tango.since;
        entity['since'] = report;
        report = tango.dm_access_type;
        entity['dmAccessType'] = report;
        tango = tango.user;
        entity['user'] = tango;
        mike['gameRelationship'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GAME_RELATIONSHIP_REMOVE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GAME_RELATIONSHIP_REMOVE';
        mike['type'] = tango;
        tango = entity.id;
        mike['userId'] = tango;
        entity = entity.application_id;
        mike['applicationId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['PRESENCE_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot29;
        mike = {};
        tango = entity.guild_id;
        mike['guildId'] = tango;
        tango = entity.user;
        mike['user'] = tango;
        tango = entity.status;
        mike['status'] = tango;
        tango = entity.activities;
        mike['activities'] = tango;
        tango = entity.hidden_activities;
        mike['hiddenActivities'] = tango;
        entity = entity.client_status;
        mike['clientStatus'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['PRESENCES_REPLACE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'PRESENCES_REPLACE';
        mike['type'] = entity;
        entity = argFoo;
        mike['presences'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['SESSIONS_REPLACE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        tango = 'SESSIONS_REPLACE';
        mike['type'] = tango;
        report = _closure1_slot28;
        entity = undefined;
        tango = argFoo;
        tango = report.bind(entity)(tango);
        mike['sessions'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['VOICE_STATE_UPDATE'];
    tango = function(argFoo) {
        _fun106452: for(var _fun106452_ip = 0; ; ) switch(_fun106452_ip) {
 0:
            entity = argFoo;
            mike = entity.member;
            oscar = null;
            if(!(oscar != mike)) { _fun106452_ip = 53; continue _fun106452 }
 15:
            golf = _closure1_slot26;
            report = entity.guild_id;
            mike = entity.member;
            tango = mike.user;
            zulu = entity.member;
            mike = undefined;
            mike = golf.bind(mike)(report, tango, zulu);
 53:
            zulu = _closure1_slot25;
            mike = {};
            tango = 'VOICE_STATE_UPDATES';
            mike['type'] = tango;
            tango = {};
            golf = entity.user_id;
            tango['userId'] = golf;
            golf = entity.guild_id;
            tango['guildId'] = golf;
            golf = entity.session_id;
            tango['sessionId'] = golf;
            golf = entity.channel_id;
            tango['channelId'] = golf;
            golf = entity.mute;
            tango['mute'] = golf;
            golf = entity.deaf;
            tango['deaf'] = golf;
            golf = entity.self_mute;
            tango['selfMute'] = golf;
            golf = entity.self_deaf;
            tango['selfDeaf'] = golf;
            golf = entity.self_video;
            if(golf) { _fun106452_ip = 166; continue _fun106452 }
 164:
            golf = false;
 166:
            tango['selfVideo'] = golf;
            golf = entity.suppress;
            tango['suppress'] = golf;
            golf = entity.self_stream;
            if(golf) { _fun106452_ip = 193; continue _fun106452 }
 191:
            golf = false;
 193:
            tango['selfStream'] = golf;
            options = entity.request_to_speak_timestamp;
            verify = oscar != options;
            golf = null;
            if(!verify) { _fun106452_ip = 216; continue _fun106452 }
 213:
            golf = options;
 216:
            tango['requestToSpeakTimestamp'] = golf;
            golf = entity.discoverable;
            oscar = oscar == golf;
            if(oscar) { _fun106452_ip = 237; continue _fun106452 }
 234:
            oscar = golf;
 237:
            tango['discoverable'] = oscar;
            golf = _closure1_slot14;
            oscar = golf.getUserVoiceChannelId;
            report = entity.guild_id;
            entity = entity.user_id;
            entity = oscar.bind(golf)(report, entity);
            tango['oldChannelId'] = entity;
            entity = new Array(1);
            entity[0] = tango;
            mike['voiceStates'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['VOICE_SERVER_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'VOICE_SERVER_UPDATE';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        tango = entity.endpoint;
        mike['endpoint'] = tango;
        entity = entity.token;
        mike['token'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['CALL_CREATE'];
    tango = function(argFoo) {
        _fun106454: for(var _fun106454_ip = 0; ; ) switch(_fun106454_ip) {
 0:
            zulu = argFoo;
            report = _closure1_slot25;
            tango = {};
            entity = 'CALL_CREATE';
            tango['type'] = entity;
            entity = zulu.channel_id;
            tango['channelId'] = entity;
            entity = zulu.message_id;
            tango['messageId'] = entity;
            entity = zulu.region;
            tango['region'] = entity;
            entity = zulu.ringing;
            tango['ringing'] = entity;
            entity = undefined;
            tango = report.bind(entity)(tango);
            oscar = zulu.voice_states;
            zulu = null;
            if(!(zulu != oscar)) { _fun106454_ip = 123; continue _fun106454 }
 80:
            zulu = _closure1_slot25;
            mike = {};
            tango = 'VOICE_STATE_UPDATES';
            mike['type'] = tango;
            report = oscar.map;
            tango = function(argFoo) {
                _fun106455: for(var _fun106455_ip = 0; ; ) switch(_fun106455_ip) {
 0:
                    zulu = argFoo;
                    entity = {};
                    mike = zulu.user_id;
                    entity['userId'] = mike;
                    mike = null;
                    entity['guildId'] = mike;
                    tango = zulu.session_id;
                    entity['sessionId'] = tango;
                    tango = zulu.channel_id;
                    entity['channelId'] = tango;
                    tango = zulu.mute;
                    entity['mute'] = tango;
                    tango = zulu.deaf;
                    entity['deaf'] = tango;
                    tango = zulu.self_mute;
                    entity['selfMute'] = tango;
                    tango = zulu.self_deaf;
                    entity['selfDeaf'] = tango;
                    tango = zulu.self_video;
                    if(tango) { _fun106455_ip = 96; continue _fun106455 }
 94:
                    tango = false;
 96:
                    entity['selfVideo'] = tango;
                    tango = zulu.suppress;
                    entity['suppress'] = tango;
                    tango = zulu.self_stream;
                    if(tango) { _fun106455_ip = 123; continue _fun106455 }
 121:
                    tango = false;
 123:
                    entity['selfStream'] = tango;
                    report = zulu.request_to_speak_timestamp;
                    oscar = mike != report;
                    tango = null;
                    if(!oscar) { _fun106455_ip = 146; continue _fun106455 }
 143:
                    tango = report;
 146:
                    entity['requestToSpeakTimestamp'] = tango;
                    zulu = zulu.discoverable;
                    mike = mike == zulu;
                    if(mike) { _fun106455_ip = 167; continue _fun106455 }
 164:
                    mike = zulu;
 167:
                    entity['discoverable'] = mike;
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango);
            mike['voiceStates'] = tango;
            mike = zulu.bind(entity)(mike);
 123:
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['CALL_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'CALL_UPDATE';
        mike['type'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        tango = entity.message_id;
        mike['messageId'] = tango;
        tango = entity.region;
        mike['region'] = tango;
        entity = entity.ringing;
        mike['ringing'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['CALL_DELETE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'CALL_DELETE';
        mike['type'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        entity = entity.unavailable;
        mike['unavailable'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['OAUTH2_TOKEN_REVOKE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'OAUTH2_TOKEN_REVOKE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.access_token;
        mike['accessToken'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['RECENT_MENTION_DELETE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'RECENT_MENTION_DELETE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.message_id;
        mike['id'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['SAVED_MESSAGE_CREATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        tango = 'SAVED_MESSAGE_CREATE';
        mike['type'] = tango;
        report = _closure1_slot0;
        tango = _closure1_slot3;
        entity = 23;
        tango = tango[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.savedMessageCreateObjectToClient;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        mike['savedMessage'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['SAVED_MESSAGE_DELETE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        tango = 'SAVED_MESSAGE_DELETE';
        mike['type'] = tango;
        report = _closure1_slot0;
        tango = _closure1_slot3;
        entity = 23;
        tango = tango[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.savedMessageDeleteObjectToClient;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        mike['savedMessageData'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['FRIEND_SUGGESTION_CREATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'FRIEND_SUGGESTION_CREATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['suggestion'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['FRIEND_SUGGESTION_DELETE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'FRIEND_SUGGESTION_DELETE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.suggested_user_id;
        mike['suggestedUserId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['WEBHOOKS_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'WEBHOOKS_UPDATE';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        entity = entity.channel_id;
        mike['channelId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'];
    tango = function(argFoo, argBar) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = argBar;
        mike['type'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        tango = entity.message_id;
        mike['messageId'] = tango;
        tango = entity.user_id;
        mike['userId'] = tango;
        tango = entity.emoji;
        mike['emoji'] = tango;
        tango = entity.burst_colors;
        mike['colors'] = tango;
        tango = entity.type;
        mike['reactionType'] = tango;
        entity = entity.message_author_id;
        mike['messageAuthorId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['MESSAGE_POLL_VOTE_ADD', 'MESSAGE_POLL_VOTE_REMOVE'];
    tango = function(argFoo, argBar) {
        _fun106466: for(var _fun106466_ip = 0; ; ) switch(_fun106466_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot25;
            mike = {};
            tango = 'MESSAGE_REACTION_REMOVE';
            golf = 'MESSAGE_POLL_VOTE_ADD';
            oscar = argBar;
            if(!(golf === oscar)) { _fun106466_ip = 33; continue _fun106466 }
 29:
            tango = 'MESSAGE_REACTION_ADD';
 33:
            mike['type'] = tango;
            tango = report.channel_id;
            mike['channelId'] = tango;
            tango = report.message_id;
            mike['messageId'] = tango;
            tango = report.user_id;
            mike['userId'] = tango;
            tango = {};
            report = report.answer_id;
            tango['id'] = report;
            report = '';
            tango['name'] = report;
            mike['emoji'] = tango;
            report = _closure1_slot0;
            tango = _closure1_slot3;
            entity = 24;
            tango = tango[entity];
            entity = undefined;
            tango = report.bind(entity)(tango);
            tango = tango.ReactionTypes;
            tango = tango.VOTE;
            mike['reactionType'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['MESSAGE_REACTION_REMOVE_ALL'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'MESSAGE_REACTION_REMOVE_ALL';
        mike['type'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        entity = entity.message_id;
        mike['messageId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['MESSAGE_REACTION_REMOVE_EMOJI'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'MESSAGE_REACTION_REMOVE_EMOJI';
        mike['type'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        tango = entity.message_id;
        mike['messageId'] = tango;
        entity = entity.emoji;
        mike['emoji'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['MESSAGE_REACTION_ADD_MANY'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'MESSAGE_REACTION_ADD_MANY';
        mike['type'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        tango = entity.message_id;
        mike['messageId'] = tango;
        entity = entity.reactions;
        mike['reactions'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['PAYMENT_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'PAYMENT_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['payment'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['ENTITLEMENT_CREATE', 'ENTITLEMENT_UPDATE', 'ENTITLEMENT_DELETE'];
    tango = function(argFoo, argBar) {
        zulu = _closure1_slot25;
        mike = {};
        entity = argBar;
        mike['type'] = entity;
        entity = argFoo;
        mike['entitlement'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_PAYMENT_SOURCES_UPDATE'];
    tango = function() {
        _fun106472: for(var _fun106472_ip = 0; ; ) switch(_fun106472_ip) {
 0:
            zulu = _closure1_slot12;
            mike = zulu.hasLayers;
            mike = mike.bind(zulu)();
            if(!mike) { _fun106472_ip = 95; continue _fun106472 }
 20:
            zulu = _closure1_slot0;
            report = _closure1_slot3;
            mike = 25;
            mike = report[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.fetchPaymentSources;
            mike = mike.bind(zulu)();
            zulu = _closure1_slot2;
            mike = 26;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.fetchSubscriptionPlansBySKUs;
            tango = _closure1_slot15;
            entity = tango.getFetchedSKUIDs;
            entity = entity.bind(tango)();
            entity = mike.bind(zulu)(entity);
 95:
            entity = undefined;
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_SUBSCRIPTIONS_UPDATE'];
    tango = function() {
        _fun106473: for(var _fun106473_ip = 0; ; ) switch(_fun106473_ip) {
 0:
            tango = _closure1_slot2;
            zulu = _closure1_slot3;
            entity = 27;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.fetchCurrentUser;
            zulu = zulu.bind(tango)();
            tango = _closure1_slot12;
            zulu = tango.hasLayers;
            zulu = zulu.bind(tango)();
            if(!zulu) { _fun106473_ip = 82; continue _fun106473 }
 52:
            zulu = _closure1_slot0;
            tango = _closure1_slot3;
            mike = 25;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.fetchSubscriptions;
            mike = mike.bind(zulu)();
 82:
            return entity;
        }
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE'];
    tango = function(argFoo) {
        oscar = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_BOOST_SLOT_CREATE';
        mike['type'] = tango;
        report = _closure1_slot7;
        tango = report.createFromServer;
        options = _closure1_slot16;
        golf = options.getSubscriptionById;
        entity = oscar.subscription_id;
        entity = golf.bind(options)(entity);
        entity = tango.bind(report)(oscar, entity);
        mike['guildBoostSlot'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE'];
    tango = function(argFoo) {
        oscar = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_BOOST_SLOT_UPDATE';
        mike['type'] = tango;
        report = _closure1_slot7;
        tango = report.createFromServer;
        options = _closure1_slot16;
        golf = options.getSubscriptionById;
        entity = oscar.subscription_id;
        entity = golf.bind(options)(entity);
        entity = tango.bind(report)(oscar, entity);
        mike['guildBoostSlot'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['BILLING_POPUP_BRIDGE_CALLBACK'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'BILLING_POPUP_BRIDGE_CALLBACK';
        mike['type'] = tango;
        tango = entity.payment_source_type;
        mike['paymentSourceType'] = tango;
        tango = entity.state;
        mike['state'] = tango;
        tango = entity.path;
        mike['path'] = tango;
        entity = entity.query;
        mike['query'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_PAYMENT_BROWSER_CHECKOUT_DONE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'USER_PAYMENT_BROWSER_CHECKOUT_DONE';
        mike['type'] = tango;
        tango = entity.load_id;
        mike['loadId'] = tango;
        tango = entity.sku_id;
        mike['skuId'] = tango;
        entity = entity.sku_subscription_plan_id;
        mike['skuSubscriptionPlanId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_PAYMENT_CLIENT_ADD'];
    tango = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        entity = 28;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.getPurchaseTokenHash;
        tango = zulu.bind(tango)();
        zulu = tango.then;
        mike = function(argFoo) {
            _fun106479: for(var _fun106479_ip = 0; ; ) switch(_fun106479_ip) {
 0:
                mike = _closure2_slot0;
                tango = mike.purchase_token_hash;
                mike = argFoo;
                if(!(tango === mike)) { _fun106479_ip = 70; continue _fun106479 }
 22:
                zulu = _closure1_slot25;
                mike = {};
                report = 'USER_PAYMENT_CLIENT_ADD';
                mike['type'] = report;
                mike['purchaseTokenHash'] = tango;
                entity = _closure2_slot0;
                entity = entity.expires_at;
                mike['expiresAt'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 70:
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_MEMBER_LIST_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot3;
        entity = 15;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        tango = zulu.Emitter;
        zulu = tango.batched;
        mike = function() {
            mike = function(argFoo) { // Original name: handleItem
                _fun106482: for(var _fun106482_ip = 0; ; ) switch(_fun106482_ip) {
 0:
                    entity = argFoo;
                    mike = entity.member;
                    oscar = null;
                    if(!(oscar != mike)) { _fun106482_ip = 148; continue _fun106482 }
 18:
                    mike = entity.member;
                    options = _closure1_slot26;
                    zulu = _closure2_slot0;
                    golf = zulu.guild_id;
                    tango = mike.user;
                    zulu = undefined;
                    tango = options.bind(zulu)(golf, tango, mike);
                    tango = mike.presence;
                    if(!(oscar != tango)) { _fun106482_ip = 148; continue _fun106482 }
 67:
                    tango = mike.presence;
                    mike = _closure1_slot29;
                    entity = {};
                    report = _closure2_slot0;
                    report = report.guild_id;
                    entity['guildId'] = report;
                    report = tango.user;
                    entity['user'] = report;
                    report = tango.status;
                    entity['status'] = report;
                    report = tango.activities;
                    entity['activities'] = report;
                    report = tango.hidden_activities;
                    entity['hiddenActivities'] = report;
                    tango = tango.client_status;
                    entity['clientStatus'] = tango;
                    entity = mike.bind(zulu)(entity);
 148:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot0 = mike;
            tango = _closure2_slot0;
            zulu = tango.ops;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun106483: for(var _fun106483_ip = 0; ; ) switch(_fun106483_ip) {
 0:
                    entity = argFoo;
                    mike = entity.op;
                    zulu = entity.items;
                    tango = entity.item;
                    entity = 'SYNC';
                    if(!(entity !== mike)) { _fun106483_ip = 59; continue _fun106483 }
 27:
                    entity = 'UPDATE';
                    if(!(entity !== mike)) { _fun106483_ip = 43; continue _fun106483 }
 35:
                    entity = 'INSERT';
                    if(!(entity === mike)) { _fun106483_ip = 76; continue _fun106483 }
 43:
                    mike = _closure3_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)(tango);
                    _fun106483_ip = 76; continue _fun106483;
 59:
                    mike = zulu.forEach;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
 76:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            report = _closure1_slot1;
            zulu = _closure1_slot3;
            entity = 12;
            zulu = zulu[entity];
            entity = undefined;
            report = report.bind(entity)(zulu);
            zulu = report.flush;
            zulu = zulu.bind(report)();
            zulu = _closure1_slot25;
            mike = {};
            report = 'GUILD_MEMBER_LIST_UPDATE';
            mike['type'] = report;
            report = tango.guild_id;
            mike['guildId'] = report;
            report = tango.id;
            mike['id'] = report;
            report = tango.ops;
            mike['ops'] = report;
            report = tango.groups;
            mike['groups'] = report;
            report = tango.member_count;
            mike['memberCount'] = report;
            tango = tango.online_count;
            mike['onlineCount'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GIFT_CODE_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GIFT_CODE_UPDATE';
        mike['type'] = tango;
        tango = entity.uses;
        mike['uses'] = tango;
        entity = entity.code;
        mike['code'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GIFT_CODE_CREATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GIFT_CODE_CREATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['giftCode'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['LIBRARY_APPLICATION_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'LIBRARY_APPLICATION_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['libraryApplication'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['STREAM_CREATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'STREAM_CREATE';
        mike['type'] = tango;
        tango = entity.stream_key;
        mike['streamKey'] = tango;
        tango = entity.region;
        mike['region'] = tango;
        tango = entity.viewer_ids;
        mike['viewerIds'] = tango;
        tango = entity.rtc_server_id;
        mike['rtcServerId'] = tango;
        entity = entity.paused;
        mike['paused'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['STREAM_SERVER_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'STREAM_SERVER_UPDATE';
        mike['type'] = tango;
        tango = entity.stream_key;
        mike['streamKey'] = tango;
        tango = entity.endpoint;
        mike['endpoint'] = tango;
        entity = entity.token;
        mike['token'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['STREAM_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'STREAM_UPDATE';
        mike['type'] = tango;
        tango = entity.stream_key;
        mike['streamKey'] = tango;
        tango = entity.region;
        mike['region'] = tango;
        tango = entity.viewer_ids;
        mike['viewerIds'] = tango;
        entity = entity.paused;
        mike['paused'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['STREAM_DELETE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'STREAM_DELETE';
        mike['type'] = tango;
        tango = entity.stream_key;
        mike['streamKey'] = tango;
        tango = entity.unavailable;
        mike['unavailable'] = tango;
        entity = entity.reason;
        mike['reason'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GENERIC_PUSH_NOTIFICATION_SENT'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GENERIC_PUSH_NOTIFICATION_SENT';
        mike['type'] = tango;
        tango = entity.title;
        mike['title'] = tango;
        tango = entity.body;
        mike['body'] = tango;
        tango = entity.tracking_type;
        mike['trackingType'] = tango;
        tango = entity.icon;
        mike['icon'] = tango;
        tango = entity.route;
        mike['route'] = tango;
        entity = entity.tag;
        mike['tag'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['REACTION_NOTIFICATION_SENT'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'REACTION_NOTIFICATION_SENT';
        mike['type'] = tango;
        tango = entity.route;
        mike['route'] = tango;
        tango = entity.message;
        mike['message'] = tango;
        tango = entity.emoji;
        mike['emoji'] = tango;
        entity = entity.reactor_user_id;
        mike['reactorUserId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['NOTIFICATION_CENTER_ITEM_CREATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'NOTIFICATION_CENTER_ITEM_CREATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['item'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['NOTIFICATION_CENTER_ITEM_DELETE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'NOTIFICATION_CENTER_ITEM_DELETE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.id;
        mike['id'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['NOTIFICATION_CENTER_ITEMS_ACK'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'ids': null, 'optimistic': false};
        entity = argFoo;
        tango = entity.id;
        entity = new Array(1);
        entity[0] = tango;
        mike['ids'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['NOTIFICATION_CENTER_ITEM_COMPLETED'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'NOTIFICATION_CENTER_ITEM_COMPLETED';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.item_enum;
        mike['item_enum'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['QUESTS_USER_STATUS_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'QUESTS_USER_STATUS_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.user_status;
        mike['user_status'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['APPLICATION_COMMAND_PERMISSIONS_UPDATE'];
    tango = function(argFoo, argBar) {
        zulu = _closure1_slot25;
        mike = {};
        entity = argBar;
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.guild_id;
        mike['guildId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_APPLICATION_COMMAND_INDEX_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_APPLICATION_COMMAND_INDEX_UPDATE';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        entity = entity.version;
        mike['version'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_JOIN_REQUEST_CREATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_JOIN_REQUEST_CREATE';
        mike['type'] = tango;
        tango = entity.request;
        mike['request'] = tango;
        tango = entity.status;
        mike['status'] = tango;
        entity = entity.guild_id;
        mike['guildId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_JOIN_REQUEST_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_JOIN_REQUEST_UPDATE';
        mike['type'] = tango;
        tango = entity.request;
        mike['request'] = tango;
        tango = entity.status;
        mike['status'] = tango;
        entity = entity.guild_id;
        mike['guildId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_JOIN_REQUEST_DELETE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_JOIN_REQUEST_DELETE';
        mike['type'] = tango;
        tango = entity.id;
        mike['id'] = tango;
        tango = entity.user_id;
        mike['userId'] = tango;
        entity = entity.guild_id;
        mike['guildId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['INTERACTION_CREATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'INTERACTION_CREATE';
        mike['type'] = tango;
        tango = entity.id;
        mike['interactionId'] = tango;
        entity = entity.nonce;
        mike['nonce'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['INTERACTION_SUCCESS'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'INTERACTION_SUCCESS';
        mike['type'] = tango;
        tango = entity.id;
        mike['interactionId'] = tango;
        entity = entity.nonce;
        mike['nonce'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['INTERACTION_FAILURE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'INTERACTION_FAILURE';
        mike['type'] = tango;
        tango = entity.nonce;
        mike['nonce'] = tango;
        entity = entity.reason_code;
        mike['reasonCode'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE';
        mike['type'] = tango;
        tango = entity.choices;
        mike['choices'] = tango;
        entity = entity.nonce;
        mike['nonce'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['INTERACTION_MODAL_CREATE'];
    tango = function(argFoo) {
        tango = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        report = 'INTERACTION_MODAL_CREATE';
        mike['type'] = report;
        report = tango.id;
        mike['id'] = report;
        report = tango.channel_id;
        mike['channelId'] = report;
        report = tango.custom_id;
        mike['customId'] = report;
        report = tango.application;
        mike['application'] = report;
        report = tango.title;
        mike['title'] = report;
        oscar = _closure1_slot0;
        report = _closure1_slot3;
        entity = 29;
        report = report[entity];
        entity = undefined;
        golf = oscar.bind(entity)(report);
        oscar = golf.transformComponents;
        report = tango.components;
        report = oscar.bind(golf)(report);
        mike['components'] = report;
        tango = tango.nonce;
        mike['nonce'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['INTERACTION_IFRAME_MODAL_CREATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'INTERACTION_IFRAME_MODAL_CREATE';
        mike['type'] = tango;
        tango = entity.id;
        mike['id'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        tango = entity.custom_id;
        mike['customId'] = tango;
        tango = entity.application;
        mike['application'] = tango;
        tango = entity.title;
        mike['title'] = tango;
        tango = entity.iframe_path;
        mike['iframePath'] = tango;
        tango = entity.modal_size;
        mike['modalSize'] = tango;
        entity = entity.nonce;
        mike['nonce'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['STAGE_INSTANCE_CREATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'STAGE_INSTANCE_CREATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['instance'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['STAGE_INSTANCE_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'STAGE_INSTANCE_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['instance'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['STAGE_INSTANCE_DELETE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'STAGE_INSTANCE_DELETE';
        mike['type'] = entity;
        entity = argFoo;
        mike['instance'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SCHEDULED_EVENT_CREATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GUILD_SCHEDULED_EVENT_CREATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['guildScheduledEvent'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SCHEDULED_EVENT_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GUILD_SCHEDULED_EVENT_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['guildScheduledEvent'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SCHEDULED_EVENT_DELETE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GUILD_SCHEDULED_EVENT_DELETE';
        mike['type'] = entity;
        entity = argFoo;
        mike['guildScheduledEvent'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['eventException'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['eventException'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE';
        mike['type'] = entity;
        entity = argFoo;
        mike['eventException'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.event_id;
        mike['eventId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SCHEDULED_EVENT_USER_ADD'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_SCHEDULED_EVENT_USER_ADD';
        mike['type'] = tango;
        tango = entity.user_id;
        mike['userId'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        tango = entity.guild_scheduled_event_id;
        mike['guildEventId'] = tango;
        tango = entity.guild_scheduled_event_exception_id;
        mike['guildEventExceptionId'] = tango;
        entity = entity.response;
        mike['response'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SCHEDULED_EVENT_USER_REMOVE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
        mike['type'] = tango;
        tango = entity.user_id;
        mike['userId'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        tango = entity.guild_scheduled_event_id;
        mike['guildEventId'] = tango;
        tango = entity.guild_scheduled_event_exception_id;
        mike['guildEventExceptionId'] = tango;
        entity = entity.response;
        mike['response'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_DIRECTORY_ENTRY_CREATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_DIRECTORY_ENTRY_CREATE';
        mike['type'] = tango;
        tango = entity.directory_channel_id;
        mike['channelId'] = tango;
        mike['entry'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_DIRECTORY_ENTRY_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_DIRECTORY_ENTRY_UPDATE';
        mike['type'] = tango;
        tango = entity.directory_channel_id;
        mike['channelId'] = tango;
        mike['entry'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_DIRECTORY_ENTRY_DELETE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_DIRECTORY_ENTRY_DELETE';
        mike['type'] = tango;
        tango = entity.directory_channel_id;
        mike['channelId'] = tango;
        entity = entity.entity_id;
        mike['guildId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['AUTO_MODERATION_MENTION_RAID_DETECTION'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'AUTO_MODERATION_MENTION_RAID_DETECTION';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        tango = entity.decision_id;
        mike['decisionId'] = tango;
        entity = entity.suspicious_mention_activity_until;
        mike['suspiciousMentionActivityUntil'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['VOICE_CHANNEL_EFFECT_SEND'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'VOICE_CHANNEL_EFFECT_SEND';
        mike['type'] = tango;
        tango = entity.emoji;
        mike['emoji'] = tango;
        tango = entity.channel_id;
        mike['channelId'] = tango;
        tango = entity.user_id;
        mike['userId'] = tango;
        tango = entity.animation_type;
        mike['animationType'] = tango;
        tango = entity.animation_id;
        mike['animationId'] = tango;
        tango = entity.sound_id;
        mike['soundId'] = tango;
        tango = entity.sound_volume;
        mike['soundVolume'] = tango;
        tango = entity.points;
        mike['points'] = tango;
        tango = entity.streamer_id;
        mike['streamerId'] = tango;
        tango = entity.line_id;
        mike['lineId'] = tango;
        entity = entity.emoji_hose;
        mike['emojiHose'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SOUNDBOARD_SOUND_CREATE'];
    tango = function(argFoo) {
        tango = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GUILD_SOUNDBOARD_SOUND_CREATE';
        mike['type'] = entity;
        entity = {};
        oscar = tango.guild_id;
        entity['guildId'] = oscar;
        oscar = tango.name;
        entity['name'] = oscar;
        oscar = tango.sound_id;
        entity['soundId'] = oscar;
        golf = _closure1_slot8;
        options = tango.user;
        oscar = golf.prototype;
        oscar = Object.create(oscar, {constructor: {value: golf}});
        verify = oscar;
        report = new verify[golf](options, golf);
        report = report instanceof Object ? report : oscar;
        entity['user'] = report;
        report = tango.user_id;
        entity['userId'] = report;
        report = tango.volume;
        entity['volume'] = report;
        report = tango.emoji_id;
        entity['emojiId'] = report;
        report = tango.emoji_name;
        entity['emojiName'] = report;
        tango = tango.available;
        entity['available'] = tango;
        mike['sound'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SOUNDBOARD_SOUND_UPDATE'];
    tango = function(argFoo) {
        tango = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GUILD_SOUNDBOARD_SOUND_UPDATE';
        mike['type'] = entity;
        entity = {};
        oscar = tango.guild_id;
        entity['guildId'] = oscar;
        oscar = tango.name;
        entity['name'] = oscar;
        oscar = tango.sound_id;
        entity['soundId'] = oscar;
        golf = _closure1_slot8;
        options = tango.user;
        oscar = golf.prototype;
        oscar = Object.create(oscar, {constructor: {value: golf}});
        verify = oscar;
        report = new verify[golf](options, golf);
        report = report instanceof Object ? report : oscar;
        entity['user'] = report;
        report = tango.user_id;
        entity['userId'] = report;
        report = tango.volume;
        entity['volume'] = report;
        report = tango.emoji_id;
        entity['emojiId'] = report;
        report = tango.emoji_name;
        entity['emojiName'] = report;
        tango = tango.available;
        entity['available'] = tango;
        mike['sound'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SOUNDBOARD_SOUND_DELETE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_SOUNDBOARD_SOUND_DELETE';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        entity = entity.sound_id;
        mike['soundId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GUILD_SOUNDBOARD_SOUNDS_UPDATE'];
    tango = function(argFoo) {
        tango = argFoo;
        var _closure2_slot0 = tango;
        zulu = _closure1_slot25;
        mike = {};
        report = 'GUILD_SOUNDBOARD_SOUNDS_UPDATE';
        mike['type'] = report;
        report = tango.guild_id;
        mike['guildId'] = report;
        report = tango.soundboard_sounds;
        tango = report.map;
        entity = function(argFoo) {
            mike = argFoo;
            entity = {};
            zulu = mike.name;
            entity['name'] = zulu;
            zulu = mike.sound_id;
            entity['soundId'] = zulu;
            zulu = mike.emoji_name;
            entity['emojiName'] = zulu;
            zulu = mike.emoji_id;
            entity['emojiId'] = zulu;
            zulu = mike.user_id;
            entity['userId'] = zulu;
            zulu = mike.volume;
            entity['volume'] = zulu;
            mike = mike.available;
            entity['available'] = mike;
            mike = _closure2_slot0;
            mike = mike.guild_id;
            entity['guildId'] = mike;
            return entity;
        };
        entity = tango.bind(report)(entity);
        mike['soundboardSounds'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    verify = ['EMBEDDED_ACTIVITY_UPDATE_V2'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'EMBEDDED_ACTIVITY_UPDATE_V2';
        mike['type'] = tango;
        tango = entity.application_id;
        mike['applicationId'] = tango;
        tango = entity.launch_id;
        mike['launchId'] = tango;
        tango = entity.composite_instance_id;
        mike['compositeInstanceId'] = tango;
        tango = entity.location;
        mike['location'] = tango;
        entity = entity.participants;
        mike['participants'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    golf = ['AUTH_SESSION_CHANGE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'AUTH_SESSION_CHANGE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.auth_session_id_hash;
        mike['authSessionIdHash'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_CONNECTIONS_LINK_CALLBACK'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'USER_CONNECTIONS_LINK_CALLBACK';
        mike['type'] = tango;
        tango = entity.provider;
        mike['provider'] = tango;
        tango = entity.callback_code;
        mike['callbackCode'] = tango;
        entity = entity.callback_state;
        mike['callbackState'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_CONNECTIONS_CALLBACK'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'USER_CONNECTIONS_CALLBACK';
        mike['type'] = tango;
        tango = entity.provider;
        mike['provider'] = tango;
        tango = entity.code;
        mike['code'] = tango;
        tango = entity.state;
        mike['state'] = tango;
        entity = entity.openid_params;
        mike['openid_params'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['DELETED_ENTITY_IDS'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'DELETED_ENTITY_IDS';
        mike['type'] = entity;
        tango = argFoo;
        report = mike;
        entity = copyDataProperties(report, tango);
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    verify = ['CHANNEL_SYNC'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        entity = argFoo;
        tango = entity.channels;
        zulu = tango.forEach;
        mike = function(argFoo) {
            zulu = _closure1_slot18;
            mike = zulu.add;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        zulu = _closure1_slot25;
        mike = {};
        tango = 'CHANNEL_SYNC';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guild_id'] = tango;
        tango = entity.channels;
        mike['channels'] = tango;
        entity = entity.integrity_check;
        mike['integrity_check'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    golf = ['CONSOLE_COMMAND_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'CONSOLE_COMMAND_UPDATE';
        mike['type'] = tango;
        tango = entity.id;
        mike['id'] = tango;
        tango = entity.result;
        mike['result'] = tango;
        entity = entity.error;
        mike['error'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    verify = ['PASSIVE_UPDATE_V2'];
    golf = function(argFoo) {
        zulu = _closure1_slot10;
        mike = zulu.loadGuildIds;
        entity = argFoo;
        tango = entity.guild_id;
        entity = new Array(1);
        entity[0] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        report = 'PASSIVE_UPDATE_V2';
        mike['type'] = report;
        report = entity.guild_id;
        mike['guildId'] = report;
        report = entity.updated_members;
        mike['members'] = report;
        golf = entity.updated_channels;
        oscar = golf.map;
        report = function(argFoo) {
            mike = argFoo;
            entity = {};
            zulu = mike.id;
            entity['id'] = zulu;
            zulu = mike.last_message_id;
            entity['lastMessageId'] = zulu;
            mike = mike.last_pin_timestamp;
            entity['lastPinTimestamp'] = mike;
            return entity;
        };
        report = oscar.bind(golf)(report);
        mike['channels'] = report;
        oscar = entity.updated_voice_states;
        report = oscar.map;
        tango = function(argFoo) {
            _fun106544: for(var _fun106544_ip = 0; ; ) switch(_fun106544_ip) {
 0:
                zulu = argFoo;
                entity = {};
                mike = zulu.channel_id;
                entity['channelId'] = mike;
                mike = zulu.deaf;
                if(mike) { _fun106544_ip = 25; continue _fun106544 }
 23:
                mike = false;
 25:
                entity['deaf'] = mike;
                mike = zulu.mute;
                if(mike) { _fun106544_ip = 41; continue _fun106544 }
 39:
                mike = false;
 41:
                entity['mute'] = mike;
                report = zulu.request_to_speak_timestamp;
                mike = null;
                oscar = mike != report;
                tango = null;
                if(!oscar) { _fun106544_ip = 66; continue _fun106544 }
 63:
                tango = report;
 66:
                entity['requestToSpeakTimestamp'] = tango;
                tango = zulu.self_deaf;
                if(tango) { _fun106544_ip = 82; continue _fun106544 }
 80:
                tango = false;
 82:
                entity['selfDeaf'] = tango;
                tango = zulu.self_mute;
                if(tango) { _fun106544_ip = 98; continue _fun106544 }
 96:
                tango = false;
 98:
                entity['selfMute'] = tango;
                tango = zulu.self_stream;
                if(tango) { _fun106544_ip = 114; continue _fun106544 }
 112:
                tango = false;
 114:
                entity['selfStream'] = tango;
                tango = zulu.self_video;
                if(tango) { _fun106544_ip = 130; continue _fun106544 }
 128:
                tango = false;
 130:
                entity['selfVideo'] = tango;
                tango = zulu.session_id;
                entity['sessionId'] = tango;
                tango = zulu.suppress;
                entity['suppress'] = tango;
                tango = zulu.user_id;
                entity['userId'] = tango;
                zulu = zulu.discoverable;
                mike = mike == zulu;
                if(mike) { _fun106544_ip = 183; continue _fun106544 }
 180:
                mike = zulu;
 183:
                entity['discoverable'] = mike;
                return entity;
            }
        };
        tango = report.bind(oscar)(tango);
        mike['voiceStates'] = tango;
        entity = entity.removed_voice_states;
        mike['removedVoiceStateUsers'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(entity)(verify, golf, tango);
    golf = ['CREATOR_MONETIZATION_RESTRICTIONS_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        entity = entity.restrictions;
        mike['restrictions'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['BILLING_REFERRAL_TRIAL_OFFER_UPDATE'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'BILLING_REFERRAL_TRIAL_OFFER_UPDATE';
        mike['type'] = tango;
        tango = entity.user_trial_offer_id;
        mike['userTrialOfferId'] = tango;
        entity = entity.recipient_id;
        mike['recipientId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['LAST_MESSAGES'];
    tango = function(argFoo) {
        entity = argFoo;
        zulu = _closure1_slot25;
        mike = {};
        tango = 'MESSAGE_PREVIEWS_LOADED';
        mike['type'] = tango;
        tango = entity.guild_id;
        mike['guildId'] = tango;
        entity = entity.messages;
        mike['messages'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['AUTHENTICATOR_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'AUTHENTICATOR_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['credential'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['AUTHENTICATOR_CREATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'AUTHENTICATOR_CREATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['credential'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['AUTHENTICATOR_DELETE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'AUTHENTICATOR_DELETE';
        mike['type'] = entity;
        entity = argFoo;
        mike['credential'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['NOTIFICATION_SETTINGS_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'NOTIFICATION_SETTINGS_UPDATE';
        mike['type'] = entity;
        entity = {};
        tango = argFoo;
        tango = tango.flags;
        entity['flags'] = tango;
        mike['settings'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GAME_INVITE_CREATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GAME_INVITE_CREATE';
        mike['type'] = entity;
        entity = argFoo;
        mike['gameInvite'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GAME_INVITE_DELETE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GAME_INVITE_DELETE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.invite_id;
        mike['inviteId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['GAME_INVITE_DELETE_MANY'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'GAME_INVITE_DELETE_MANY';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.invite_ids;
        mike['inviteIds'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['CONVERSATION_SUMMARY_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'CONVERSATION_SUMMARY_UPDATE';
        mike['type'] = entity;
        tango = argFoo;
        report = mike;
        entity = copyDataProperties(report, tango);
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['PREMIUM_MARKETING_PREVIEW'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'PREMIUM_MARKETING_PREVIEW';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.properties;
        mike['properties'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_APPLICATION_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'USER_APPLICATION_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.application_id;
        mike['applicationId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['USER_APPLICATION_REMOVE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'USER_APPLICATION_REMOVE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.application_id;
        mike['applicationId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['DM_SETTINGS_UPSELL_SHOW'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'DM_SETTINGS_UPSELL_SHOW';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.guild_id;
        mike['guildId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['CONTENT_INVENTORY_INBOX_STALE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'CONTENT_INVENTORY_INBOX_STALE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.refresh_after_ms;
        mike['refreshAfterMs'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    golf = ['VIRTUAL_CURRENCY_BALANCE_UPDATE'];
    tango = function(argFoo) {
        zulu = _closure1_slot25;
        mike = {};
        entity = 'VIRTUAL_CURRENCY_BALANCE_UPDATE';
        mike['type'] = entity;
        entity = argFoo;
        entity = entity.balance;
        mike['balance'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = options.bind(entity)(golf, tango);
    tango = 32;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/dispatchSocketMessage.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getDispatchHandler
        mike = _closure1_slot22;
        entity = argFoo;
        entity = mike[entity];
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();