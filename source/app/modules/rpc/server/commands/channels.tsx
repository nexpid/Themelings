// app/modules/rpc/server/commands/channels.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.isVoiceChannel;
    var _closure1_slot3 = golfie;
    michal = michal.isTextChannel;
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    romeon = michal.RPC_SCOPE_CONFIG;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.Routes;
    var _closure1_slot10 = tangon;
    tangon = michal.Permissions;
    var _closure1_slot11 = tangon;
    tangon = michal.RPCCommands;
    michal = michal.RPCErrors;
    var _closure1_slot12 = michal;
    michal = {};
    offset = tangon.GET_CHANNEL;
    golfie = {};
    yankee = {};
    backup = romeon.ANY;
    verify = 8;
    foxtra = oscard[verify];
    foxtra = report.bind(entity)(foxtra);
    foxtra = foxtra.OAuth2Scopes;
    kiloes = foxtra.RPC;
    foxtra = new Array(3);
    foxtra[0] = kiloes;
    kiloes = oscard[verify];
    kiloes = report.bind(entity)(kiloes);
    kiloes = kiloes.OAuth2Scopes;
    kiloes = kiloes.GUILDS;
    foxtra[1] = kiloes;
    kiloes = oscard[verify];
    kiloes = report.bind(entity)(kiloes);
    kiloes = kiloes.OAuth2Scopes;
    kiloes = kiloes.GUILDS_CHANNELS_READ;
    foxtra[2] = kiloes;
    yankee[backup] = foxtra;
    golfie['scope'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.args;
            report = michal.channel_id;
            michal = entity.socket;
            tangon = _closure1_slot5;
            zuuluu = tangon.getChannel;
            oscard = zuuluu.bind(tangon)(report);
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00002_ip = 311; continue _fun00001 }
 46:
            zuuluu = oscard.isPrivate;
            zuuluu = zuuluu.bind(oscard)();
            if(!zuuluu) { _fun00002_ip = 231; continue _fun00001 }
 62:
            zuuluu = michal.authorization;
            option = zuuluu.scopes;
            tangon = option.includes;
            verify = _closure1_slot0;
            zuuluu = _closure1_slot2;
            offset = 8;
            zuuluu = zuuluu[offset];
            golfie = undefined;
            zuuluu = verify.bind(golfie)(zuuluu);
            zuuluu = zuuluu.OAuth2Scopes;
            zuuluu = zuuluu.RPC;
            zuuluu = tangon.bind(option)(zuuluu);
            if(zuuluu) { _fun00002_ip = 231; continue _fun00001 }
 121:
            tangon = option.includes;
            verify = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[offset];
            zuuluu = verify.bind(golfie)(zuuluu);
            zuuluu = zuuluu.OAuth2Scopes;
            zuuluu = zuuluu.DM_CHANNELS_READ;
            zuuluu = tangon.bind(option)(zuuluu);
            if(zuuluu) { _fun00002_ip = 231; continue _fun00001 }
 163:
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 9;
            zuuluu = option[zuuluu];
            option = tangon.bind(golfie)(zuuluu);
            golfie = {};
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.INVALID_PERMISSIONS;
            golfie['errorCode'] = zuuluu;
            zuuluu = option.prototype;
            tangon = Object.create(zuuluu, {constructor: {value: option}});
            romeon = 'Invalid scope';
            backup = tangon;
            foxtra = golfie;
            zuuluu = new backup[option](foxtra, romeon, yankee);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            throw zuuluu;
 231:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 10;
            zuuluu = offset[golfie];
            option = undefined;
            tangon = verify.bind(option)(zuuluu);
            zuuluu = tangon.transformChannel;
            golfie = offset[golfie];
            verify = verify.bind(option)(golfie);
            option = verify.hasMessageReadPermission;
            golfie = michal.application;
            golfie = golfie.id;
            michal = michal.authorization;
            michal = michal.scopes;
            michal = option.bind(verify)(oscard, golfie, michal);
            michal = zuuluu.bind(tangon)(oscard, michal);
            return michal;
 311:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = {};
            entity = _closure1_slot12;
            entity = entity.INVALID_CHANNEL;
            zuuluu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = 'Invalid channel id: ';
            romeon = michal.bind(entity)(report);
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            backup = michal;
            foxtra = zuuluu;
            entity = new backup[tangon](foxtra, romeon, yankee);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    golfie['handler'] = yankee;
    michal[offset] = golfie;
    offset = tangon.GET_CHANNELS;
    golfie = {};
    yankee = oscard[verify];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RPC;
    golfie['scope'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            entity = entity.args;
            report = entity.guild_id;
            tangon = undefined;
            var _closure2_slot0 = tangon;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 11;
            michal = golfie[michal];
            golfie = oscard.bind(tangon)(michal);
            oscard = golfie.values;
            option = _closure1_slot5;
            michal = option.loadAllGuildAndPrivateChannelsFromDisk;
            michal = michal.bind(option)();
            golfie = oscard.bind(golfie)(michal);
            option = golfie;
            if(!report) { _fun00004_ip = 116; continue _fun00003 }
 75:
            oscard = _closure1_slot6;
            michal = oscard.getGuild;
            oscard = michal.bind(oscard)(report);
            _closure2_slot0 = oscard;
            michal = null;
            if(!(michal != oscard)) { _fun00004_ip = 159; continue _fun00003 }
 99:
            oscard = golfie.filter;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.guild_id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal === entity;
                return entity;
            };
            option = oscard.bind(golfie)(michal);
 116:
            michal = {};
            golfie = option.filter;
            oscard = function(argFoo) {
                tangon = _closure1_slot7;
                zuuluu = tangon.can;
                entity = _closure1_slot11;
                michal = entity.VIEW_CHANNEL;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                tangon = entity.id;
                zuuluu = entity.name;
                michal = entity.type;
                entity = {};
                entity['id'] = tangon;
                entity['name'] = zuuluu;
                entity['type'] = michal;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(zuuluu);
            michal['channels'] = zuuluu;
            return michal;
 159:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 9;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = {};
            entity = _closure1_slot12;
            entity = entity.INVALID_GUILD;
            zuuluu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = 'Invalid guild id: ';
            verify = michal.bind(entity)(report);
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            yankee = michal;
            offset = zuuluu;
            entity = new yankee[tangon](offset, verify, option);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    golfie['handler'] = yankee;
    michal[offset] = golfie;
    offset = tangon.GET_CHANNEL_PERMISSIONS;
    golfie = {};
    yankee = {};
    backup = romeon.ANY;
    foxtra = oscard[verify];
    foxtra = report.bind(entity)(foxtra);
    foxtra = foxtra.OAuth2Scopes;
    kiloes = foxtra.GUILDS_MEMBERS_READ;
    foxtra = new Array(2);
    foxtra[0] = kiloes;
    kiloes = oscard[verify];
    kiloes = report.bind(entity)(kiloes);
    kiloes = kiloes.OAuth2Scopes;
    kiloes = kiloes.GUILDS_CHANNELS_READ;
    foxtra[1] = kiloes;
    yankee[backup] = foxtra;
    golfie['scope'] = yankee;
    yankee = function() { // Original name: handler
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            oscard = michal.bind(tangon)();
            michal = null;
            if(!(michal != oscard)) { _fun00006_ip = 59; continue _fun00005 }
 35:
            michal = {};
            report = _closure1_slot7;
            zuuluu = report.computePermissions;
            zuuluu = zuuluu.bind(report)(oscard);
            michal['permissions'] = zuuluu;
            return michal;
 59:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = {};
            entity = _closure1_slot12;
            entity = entity.INVALID_CHANNEL;
            zuuluu['errorCode'] = entity;
            entity = tangon.prototype;
            michal = Object.create(entity, {constructor: {value: tangon}});
            golfie = 'Invalid channel';
            verify = michal;
            option = zuuluu;
            entity = new verify[tangon](option, golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    golfie['handler'] = yankee;
    michal[offset] = golfie;
    offset = tangon.SELECT_VOICE_CHANNEL;
    golfie = {};
    yankee = oscard[verify];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RPC;
    golfie['scope'] = yankee;
    yankee = function(argFoo) { // Original name: validation
        report = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 13;
        entity = michal[entity];
        michal = undefined;
        entity = zuuluu.bind(michal)(entity);
        michal = entity.bind(michal)(report);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        tangon = report.string;
        golfie = tangon.bind(report)();
        oscard = golfie.allow;
        tangon = null;
        tangon = oscard.bind(golfie)(tangon);
        entity['channel_id'] = tangon;
        tangon = report.number;
        golfie = tangon.bind(report)();
        oscard = golfie.min;
        tangon = 0;
        golfie = oscard.bind(golfie)(tangon);
        oscard = golfie.max;
        tangon = 60;
        tangon = oscard.bind(golfie)(tangon);
        entity['timeout'] = tangon;
        tangon = report.boolean;
        tangon = tangon.bind(report)();
        entity['force'] = tangon;
        tangon = report.boolean;
        tangon = tangon.bind(report)();
        entity['navigate'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie['validation'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            option = entity.server;
            golfie = entity.socket;
            var _closure2_slot0 = golfie;
            entity = entity.args;
            verify = entity.channel_id;
            var _closure2_slot1 = verify;
            oscard = entity.timeout;
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00008_ip = 50; continue _fun00007 }
 48:
            oscard = 0;
 50:
            report = entity.force;
            if(!(report === tangon)) { _fun00008_ip = 62; continue _fun00007 }
 60:
            report = false;
 62:
            entity = entity.navigate;
            if(!(entity === tangon)) { _fun00008_ip = 74; continue _fun00007 }
 72:
            entity = false;
 74:
            var _closure2_slot2 = entity;
            if(verify) { _fun00008_ip = 119; continue _fun00007 }
 84:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            zuuluu = 14;
            zuuluu = yankee[zuuluu];
            yankee = offset.bind(tangon)(zuuluu);
            offset = yankee.selectVoiceChannel;
            zuuluu = null;
            offset = offset.bind(yankee)(zuuluu);
            return zuuluu;
 119:
            offset = _closure1_slot8;
            zuuluu = offset.getVoiceChannelId;
            zuuluu = zuuluu.bind(offset)();
            offset = null;
            if(!(offset != zuuluu)) { _fun00008_ip = 149; continue _fun00007 }
 139:
            if(!(zuuluu !== verify)) { _fun00008_ip = 149; continue _fun00007 }
 143:
            zuuluu = false;
            if(!(zuuluu !== report)) { _fun00008_ip = 223; continue _fun00007 }
 149:
            report = option.storeWait;
            zuuluu = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = report.bind(option)(golfie, zuuluu, oscard);
            report = oscard.catch;
            zuuluu = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 9;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = {};
                entity = _closure1_slot12;
                entity = entity.SELECT_CHANNEL_TIMED_OUT;
                zuuluu['errorCode'] = entity;
                entity = tangon.prototype;
                michal = Object.create(entity, {constructor: {value: tangon}});
                report = 'Request to select voice channel timed out.';
                golfie = michal;
                oscard = zuuluu;
                entity = new golfie[tangon](oscard, report, tangon);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            };
            oscard = report.bind(oscard)(zuuluu);
            report = oscard.then;
            zuuluu = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    golfie = argFoo;
                    entity = null;
                    if(!(entity != golfie)) { _fun00010_ip = 235; continue _fun00009 }
 12:
                    michal = _closure1_slot3;
                    entity = golfie.type;
                    verify = undefined;
                    entity = michal.bind(verify)(entity);
                    if(entity) { _fun00010_ip = 102; continue _fun00009 }
 34:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 9;
                    entity = zuuluu[entity];
                    report = michal.bind(verify)(entity);
                    zuuluu = {};
                    entity = _closure1_slot12;
                    entity = entity.INVALID_CHANNEL;
                    zuuluu['errorCode'] = entity;
                    entity = report.prototype;
                    michal = Object.create(entity, {constructor: {value: report}});
                    romeon = 'Channel is not a voice channel';
                    backup = michal;
                    foxtra = zuuluu;
                    entity = new backup[report](foxtra, romeon, yankee);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
 102:
                    entity = global;
                    zuuluu = entity.Promise;
                    michal = zuuluu.all;
                    report = entity.Promise;
                    entity = report.resolve;
                    report = entity.bind(report)(golfie);
                    entity = new Array(2);
                    entity[0] = report;
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 10;
                    report = offset[tangon];
                    oscard = option.bind(verify)(report);
                    report = oscard.transformChannel;
                    tangon = offset[tangon];
                    offset = option.bind(verify)(tangon);
                    verify = offset.hasMessageReadPermission;
                    tangon = _closure2_slot0;
                    option = tangon.application;
                    option = option.id;
                    tangon = tangon.authorization;
                    tangon = tangon.scopes;
                    tangon = verify.bind(offset)(golfie, option, tangon);
                    tangon = report.bind(oscard)(golfie, tangon);
                    entity[1] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
 235:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 9;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = {};
                    entity = _closure1_slot12;
                    entity = entity.INVALID_CHANNEL;
                    zuuluu['errorCode'] = entity;
                    report = _closure2_slot1;
                    entity = global;
                    entity = entity.HermesInternal;
                    michal = entity.concat;
                    entity = 'Invalid channel id: ';
                    romeon = michal.bind(entity)(report);
                    michal = tangon.prototype;
                    michal = Object.create(michal, {constructor: {value: tangon}});
                    backup = michal;
                    foxtra = zuuluu;
                    entity = new backup[tangon](foxtra, romeon, yankee);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            report = report.bind(oscard)(zuuluu);
            zuuluu = report.then;
            michal = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    oscard = argFoo;
                    entity = oscard[Symbol.iterator];
                    oscard = entity().next;
                    michal = oscard().value;
                    zuuluu = entity;
                    tangon = undefined;
                    report = zuuluu === tangon;
                    zuuluu = undefined;
                    if(report) { _fun00012_ip = 27; continue _fun00011 }
 24:
                    zuuluu = michal;
 27:
                    michal = undefined;
                    if(report) { _fun00012_ip = 57; continue _fun00011 }
 32:
                    golfie = oscard().value;
                    oscard = entity;
                    oscard = oscard === tangon;
                    michal = undefined;
                    report = oscard;
                    if(oscard) { _fun00012_ip = 57; continue _fun00011 }
 51:
                    michal = golfie;
                    report = oscard;
 57:
                    if(report) { _fun00012_ip = 63; continue _fun00011 }
 60:
                    entity.return();
 63:
                    entity = michal.guild_id;
                    if(!entity) { _fun00012_ip = 221; continue _fun00011 }
 74:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 15;
                    report = golfie[report];
                    option = oscard.bind(tangon)(report);
                    golfie = option.isChannelFull;
                    oscard = _closure1_slot9;
                    report = _closure1_slot6;
                    report = golfie.bind(option)(zuuluu, oscard, report);
                    if(report) { _fun00012_ip = 329; continue _fun00011 }
 124:
                    golfie = _closure1_slot7;
                    oscard = golfie.can;
                    report = _closure1_slot11;
                    report = report.CONNECT;
                    report = oscard.bind(golfie)(report, zuuluu);
                    if(report) { _fun00012_ip = 221; continue _fun00011 }
 153:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 9;
                    report = golfie[report];
                    option = oscard.bind(tangon)(report);
                    golfie = {};
                    report = _closure1_slot12;
                    report = report.INVALID_PERMISSIONS;
                    golfie['errorCode'] = report;
                    report = option.prototype;
                    oscard = Object.create(report, {constructor: {value: option}});
                    yankee = 'Connect permission required to join channel';
                    foxtra = oscard;
                    romeon = golfie;
                    report = new foxtra[option](romeon, yankee, offset);
                    report = report instanceof Object ? report : oscard;
                    throw report;
 221:
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 14;
                    report = option[report];
                    option = oscard.bind(tangon)(report);
                    oscard = option.selectVoiceChannel;
                    report = zuuluu.id;
                    report = oscard.bind(option)(report);
                    report = _closure2_slot2;
                    if(!report) { _fun00012_ip = 327; continue _fun00011 }
 270:
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 16;
                    report = option[report];
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.replaceWith;
                    verify = _closure1_slot10;
                    option = verify.CHANNEL;
                    golfie = zuuluu.guild_id;
                    zuuluu = zuuluu.id;
                    zuuluu = option.bind(verify)(golfie, zuuluu);
                    zuuluu = report.bind(oscard)(zuuluu);
 327:
                    return michal;
 329:
                    zuuluu = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 9;
                    michal = report[michal];
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = {};
                    entity = _closure1_slot12;
                    entity = entity.INVALID_CHANNEL;
                    zuuluu['errorCode'] = entity;
                    entity = tangon.prototype;
                    michal = Object.create(entity, {constructor: {value: tangon}});
                    yankee = 'Channel is full';
                    foxtra = michal;
                    romeon = zuuluu;
                    entity = new foxtra[tangon](romeon, yankee, offset);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            michal = zuuluu.bind(report)(michal);
            return michal;
 223:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = {};
            entity = _closure1_slot12;
            entity = entity.SELECT_VOICE_FORCE_REQUIRED;
            zuuluu['errorCode'] = entity;
            entity = tangon.prototype;
            michal = Object.create(entity, {constructor: {value: tangon}});
            foxtra = 'User is already joined to a voice channel.';
            kiloes = michal;
            backup = zuuluu;
            entity = new kiloes[tangon](backup, foxtra, romeon);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    golfie['handler'] = yankee;
    michal[offset] = golfie;
    offset = tangon.GET_SELECTED_VOICE_CHANNEL;
    golfie = {};
    yankee = {};
    foxtra = romeon.ANY;
    romeon = oscard[verify];
    romeon = report.bind(entity)(romeon);
    romeon = romeon.OAuth2Scopes;
    backup = romeon.RPC;
    romeon = new Array(2);
    romeon[0] = backup;
    backup = oscard[verify];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    backup = backup.RPC_VOICE_READ;
    romeon[1] = backup;
    yankee[foxtra] = romeon;
    golfie['scope'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            michal = entity.socket;
            tangon = _closure1_slot8;
            entity = tangon.getVoiceChannelId;
            golfie = entity.bind(tangon)();
            entity = null;
            tangon = entity != golfie;
            report = null;
            if(!tangon) { _fun00014_ip = 51; continue _fun00013 }
 37:
            oscard = _closure1_slot5;
            tangon = oscard.getChannel;
            report = tangon.bind(oscard)(golfie);
 51:
            tangon = entity != report;
            entity = null;
            if(!tangon) { _fun00014_ip = 138; continue _fun00013 }
 60:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 10;
            zuuluu = verify[oscard];
            golfie = undefined;
            tangon = option.bind(golfie)(zuuluu);
            zuuluu = tangon.transformChannel;
            oscard = verify[oscard];
            option = option.bind(golfie)(oscard);
            golfie = option.hasMessageReadPermission;
            oscard = michal.application;
            oscard = oscard.id;
            michal = michal.authorization;
            michal = michal.scopes;
            michal = golfie.bind(option)(report, oscard, michal);
            entity = zuuluu.bind(tangon)(report, michal);
 138:
            return entity;
        }
    };
    golfie['handler'] = yankee;
    michal[offset] = golfie;
    offset = tangon.SELECT_TEXT_CHANNEL;
    golfie = {};
    yankee = oscard[verify];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RPC;
    golfie['scope'] = yankee;
    yankee = function(argFoo) { // Original name: validation
        report = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 13;
        entity = michal[entity];
        michal = undefined;
        entity = zuuluu.bind(michal)(entity);
        michal = entity.bind(michal)(report);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        tangon = report.string;
        golfie = tangon.bind(report)();
        oscard = golfie.allow;
        tangon = null;
        tangon = oscard.bind(golfie)(tangon);
        entity['channel_id'] = tangon;
        tangon = report.number;
        oscard = tangon.bind(report)();
        report = oscard.min;
        tangon = 0;
        oscard = report.bind(oscard)(tangon);
        report = oscard.max;
        tangon = 60;
        tangon = report.bind(oscard)(tangon);
        entity['timeout'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie['validation'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            golfie = entity.server;
            oscard = entity.socket;
            var _closure2_slot0 = oscard;
            zuuluu = entity.args;
            entity = zuuluu.channel_id;
            var _closure2_slot1 = entity;
            report = zuuluu.timeout;
            option = undefined;
            if(!(report === option)) { _fun00016_ip = 50; continue _fun00015 }
 48:
            report = 0;
 50:
            if(entity) { _fun00016_ip = 101; continue _fun00015 }
 53:
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 16;
            zuuluu = verify[zuuluu];
            tangon = tangon.bind(option)(zuuluu);
            zuuluu = tangon.transitionTo;
            entity = _closure1_slot10;
            entity = entity.ME;
            entity = zuuluu.bind(tangon)(entity);
            entity = null;
            _fun00016_ip = 173; continue _fun00015;
 101:
            tangon = golfie.storeWait;
            zuuluu = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = tangon.bind(golfie)(oscard, zuuluu, report);
            tangon = report.catch;
            zuuluu = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 9;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = {};
                entity = _closure1_slot12;
                entity = entity.SELECT_CHANNEL_TIMED_OUT;
                zuuluu['errorCode'] = entity;
                entity = tangon.prototype;
                michal = Object.create(entity, {constructor: {value: tangon}});
                report = 'Request to select text channel timed out.';
                golfie = michal;
                oscard = zuuluu;
                entity = new golfie[tangon](oscard, report, tangon);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            };
            report = tangon.bind(report)(zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    golfie = argFoo;
                    entity = null;
                    if(!(entity != golfie)) { _fun00018_ip = 235; continue _fun00017 }
 12:
                    michal = _closure1_slot4;
                    entity = golfie.type;
                    verify = undefined;
                    entity = michal.bind(verify)(entity);
                    if(entity) { _fun00018_ip = 102; continue _fun00017 }
 34:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 9;
                    entity = zuuluu[entity];
                    report = michal.bind(verify)(entity);
                    zuuluu = {};
                    entity = _closure1_slot12;
                    entity = entity.INVALID_CHANNEL;
                    zuuluu['errorCode'] = entity;
                    entity = report.prototype;
                    michal = Object.create(entity, {constructor: {value: report}});
                    romeon = 'Channel is not a text channel';
                    backup = michal;
                    foxtra = zuuluu;
                    entity = new backup[report](foxtra, romeon, yankee);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
 102:
                    entity = global;
                    zuuluu = entity.Promise;
                    michal = zuuluu.all;
                    report = entity.Promise;
                    entity = report.resolve;
                    report = entity.bind(report)(golfie);
                    entity = new Array(2);
                    entity[0] = report;
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 10;
                    report = offset[tangon];
                    oscard = option.bind(verify)(report);
                    report = oscard.transformChannel;
                    tangon = offset[tangon];
                    offset = option.bind(verify)(tangon);
                    verify = offset.hasMessageReadPermission;
                    tangon = _closure2_slot0;
                    option = tangon.application;
                    option = option.id;
                    tangon = tangon.authorization;
                    tangon = tangon.scopes;
                    tangon = verify.bind(offset)(golfie, option, tangon);
                    tangon = report.bind(oscard)(golfie, tangon);
                    entity[1] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
 235:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 9;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = {};
                    entity = _closure1_slot12;
                    entity = entity.INVALID_CHANNEL;
                    zuuluu['errorCode'] = entity;
                    report = _closure2_slot1;
                    entity = global;
                    entity = entity.HermesInternal;
                    michal = entity.concat;
                    entity = 'Invalid channel id: ';
                    romeon = michal.bind(entity)(report);
                    michal = tangon.prototype;
                    michal = Object.create(michal, {constructor: {value: tangon}});
                    backup = michal;
                    foxtra = zuuluu;
                    entity = new backup[tangon](foxtra, romeon, yankee);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    report = argFoo;
                    zuuluu = report[Symbol.iterator];
                    report = zuuluu().next;
                    entity = report().value;
                    michal = zuuluu;
                    oscard = undefined;
                    tangon = michal === oscard;
                    michal = undefined;
                    if(tangon) { _fun00020_ip = 27; continue _fun00019 }
 24:
                    michal = entity;
 27:
                    entity = undefined;
                    if(tangon) { _fun00020_ip = 57; continue _fun00019 }
 32:
                    golfie = report().value;
                    report = zuuluu;
                    report = report === oscard;
                    entity = undefined;
                    tangon = report;
                    if(report) { _fun00020_ip = 57; continue _fun00019 }
 51:
                    entity = golfie;
                    tangon = report;
 57:
                    if(tangon) { _fun00020_ip = 63; continue _fun00019 }
 60:
                    zuuluu.return();
 63:
                    zuuluu = entity.guild_id;
                    if(!zuuluu) { _fun00020_ip = 171; continue _fun00019 }
 71:
                    golfie = _closure1_slot7;
                    report = golfie.can;
                    tangon = _closure1_slot11;
                    tangon = tangon.VIEW_CHANNEL;
                    tangon = report.bind(golfie)(tangon, michal);
                    if(tangon) { _fun00020_ip = 171; continue _fun00019 }
 103:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 9;
                    tangon = golfie[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = {};
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.INVALID_CHANNEL;
                    report['errorCode'] = zuuluu;
                    zuuluu = golfie.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: golfie}});
                    verify = 'No permission to see channel';
                    yankee = tangon;
                    offset = report;
                    zuuluu = new yankee[golfie](offset, verify, option);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 171:
                    zuuluu = entity.guild_id;
                    if(zuuluu) { _fun00020_ip = 220; continue _fun00019 }
 182:
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 14;
                    zuuluu = golfie[zuuluu];
                    golfie = tangon.bind(oscard)(zuuluu);
                    tangon = golfie.selectPrivateChannel;
                    zuuluu = michal.id;
                    zuuluu = tangon.bind(golfie)(zuuluu);
                    _fun00020_ip = 277; continue _fun00019;
 220:
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 16;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.replaceWith;
                    golfie = _closure1_slot10;
                    oscard = golfie.CHANNEL;
                    report = entity.guild_id;
                    michal = michal.id;
                    michal = oscard.bind(golfie)(report, michal);
                    michal = zuuluu.bind(tangon)(michal);
 277:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal);
 173:
            return entity;
        }
    };
    golfie['handler'] = yankee;
    michal[offset] = golfie;
    golfie = tangon.CREATE_CHANNEL_INVITE;
    tangon = {};
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.OAuth2Scopes;
    verify = verify.RPC;
    tangon['scope'] = verify;
    option = function(argFoo) { // Original name: handler
        michal = argFoo;
        tangon = michal.args;
        oscard = tangon.channel_id;
        var _closure2_slot0 = oscard;
        michal = null;
        zuuluu = Object.create(michal);
        michal = 0;
        zuuluu['channel_id'] = michal;
        verify = {};
        option = tangon;
        golfie = zuuluu;
        report = copyDataProperties(verify, option, golfie);
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 17;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.createInvite;
        michal = 'RPC';
        zuuluu = zuuluu.bind(tangon)(oscard, report, michal);
        michal = zuuluu.catch;
        entity = function() {
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = {};
            entity = _closure1_slot12;
            entity = entity.INVALID_PERMISSIONS;
            zuuluu['errorCode'] = entity;
            oscard = _closure2_slot0;
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            michal = 'Unable to generate an invite for ';
            entity = '. Does this user have permissions?';
            golfie = report.bind(michal)(oscard, entity);
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            verify = michal;
            option = zuuluu;
            entity = new verify[tangon](option, golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['handler'] = option;
    michal[golfie] = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/channels.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();