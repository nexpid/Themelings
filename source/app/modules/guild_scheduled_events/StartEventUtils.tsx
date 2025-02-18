// app/modules/guild_scheduled_events/StartEventUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function() { // Original name: createStageChannelForEvent
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = report;
    entity = function() { // Original name: _createStageChannelForEvent
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    romeon = argBar;
                    report = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 252; continue _fun00001 }
 16:
                    oscard = undefined;
                    if(!(report === oscard)) { _fun00002_ip = 26; continue _fun00001 }
 22:
                    report = new Array(0);
 26:
                    SaveGenerator(address=30);
 28:
                    return oscard;
 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 249; continue _fun00001 }
 39:
                    option = new Array(0);
                    tangon = option.push;
                    zuuluu = new Array(0);
                    yankee = 0;
                    kiloes = zuuluu;
                    backup = report;
                    foxtra = 0;
                    report = arraySpread(kiloes, backup, foxtra);
                    kiloes = tangon;
                    backup = zuuluu;
                    foxtra = option;
                    zuuluu = apply(kiloes, backup, foxtra);
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 6;
                    zuuluu = golfie[zuuluu];
                    golfie = report.bind(oscard)(zuuluu);
                    report = golfie.createChannel;
                    zuuluu = {};
                    verify = argFoo;
                    verify = verify.id;
                    zuuluu['guildId'] = verify;
                    verify = _closure1_slot9;
                    verify = verify.GUILD_STAGE_VOICE;
                    zuuluu['type'] = verify;
                    offset = romeon.substring;
                    verify = 100;
                    verify = offset.bind(romeon)(yankee, verify);
                    zuuluu['name'] = verify;
                    zuuluu['permissionOverwrites'] = option;
                    zuuluu = report.bind(golfie)(zuuluu);
                    SaveGenerator(address=169);
 167:
                    return zuuluu;
 169:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 246; continue _fun00001 }
 175:
                    report = null;
                    if(!(report != zuuluu)) { _fun00002_ip = 210; continue _fun00001 }
 181:
                    golfie = zuuluu.status;
                    report = 201;
                    if(!(report === golfie)) { _fun00002_ip = 210; continue _fun00001 }
 193:
                    report = _closure1_slot4;
                    tangon = zuuluu.body;
                    tangon = report.bind(oscard)(tangon);
                    return tangon;
 210:
                    tangon = global;
                    oscard = tangon.Error;
                    tangon = oscard.prototype;
                    report = Object.create(tangon, {constructor: {value: oscard}});
                    kiloes = "Can't create channel for event";
                    sizing = report;
                    tangon = new sizing[oscard](kiloes, backup);
                    tangon = tangon instanceof Object ? tangon : report;
                    throw tangon;
 246:
                    return zuuluu;
 249:
                    return michal;
 252:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    tangon = function(argFoo, argBar) { // Original name: findOrCreateEventChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = michal.guild_id;
            oscard = michal.channel_id;
            zuuluu = _closure1_slot6;
            entity = zuuluu.getGuild;
            golfie = entity.bind(zuuluu)(report);
            zuuluu = null;
            if(!(zuuluu != golfie)) { _fun00004_ip = 98; continue _fun00003 }
 36:
            report = _closure1_slot5;
            entity = report.getChannel;
            oscard = entity.bind(report)(oscard);
            if(!(zuuluu != oscard)) { _fun00004_ip = 75; continue _fun00003 }
 54:
            entity = global;
            report = entity.Promise;
            entity = report.resolve;
            entity = entity.bind(report)(oscard);
            _fun00004_ip = 96; continue _fun00003;
 75:
            oscard = _closure1_slot10;
            report = michal.name;
            tangon = undefined;
            michal = argBar;
            entity = oscard.bind(tangon)(golfie, report, michal);
 96:
            return entity;
 98:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
    entity = function() { // Original name: _preStartEventActions
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 104; continue _fun00005 }
 10:
                    tangon = report.entity_type;
                    michal = _closure1_slot7;
                    michal = michal.STAGE_INSTANCE;
                    if(!(tangon === michal)) { _fun00006_ip = 96; continue _fun00005 }
 33:
                    tangon = _closure1_slot12;
                    oscard = undefined;
                    michal = argBar;
                    michal = tangon.bind(oscard)(report, michal);
                    SaveGenerator(address=52);
 50:
                    return michal;
 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 101; continue _fun00005 }
 58:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(oscard)(zuuluu);
                    zuuluu = null;
                    tangon = zuuluu != michal;
                    zuuluu = 'could not find or create channel';
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
 96:
                    zuuluu = undefined;
                    return zuuluu;
 101:
                    return michal;
 104:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _setEventAsActive
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    zuuluu = argFoo;
                    offset = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 345; continue _fun00007 }
 16:
                    tangon = undefined;
                    if(!(offset === tangon)) { _fun00008_ip = 24; continue _fun00007 }
 22:
                    offset = false;
 24:
                    SaveGenerator(address=28);
 26:
                    return tangon;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 342; continue _fun00007 }
 37:
                    verify = zuuluu.channel_id;
                    oscard = zuuluu.entity_type;
                    option = zuuluu.name;
                    golfie = zuuluu.id;
                    yankee = zuuluu.guild_id;
                    report = _closure1_slot7;
                    report = report.STAGE_INSTANCE;
                    if(!(report !== oscard)) { _fun00008_ip = 237; continue _fun00007 }
 83:
                    report = _closure1_slot7;
                    report = report.VOICE;
                    if(!(report !== oscard)) { _fun00008_ip = 162; continue _fun00007 }
 97:
                    report = _closure1_slot7;
                    report = report.EXTERNAL;
                    if(!(report === oscard)) { _fun00008_ip = 336; continue _fun00007 }
 114:
                    oscard = _closure1_slot1;
                    romeon = _closure1_slot2;
                    report = 9;
                    report = romeon[report];
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.startEvent;
                    report = report.bind(oscard)(golfie, yankee);
                    SaveGenerator(address=150);
 148:
                    return report;
 150:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!oscard) { _fun00008_ip = 336; continue _fun00007 }
 159:
                    return report;
 162:
                    oscard = _closure1_slot1;
                    romeon = _closure1_slot2;
                    report = 7;
                    report = romeon[report];
                    backup = oscard.bind(tangon)(report);
                    report = null;
                    foxtra = report != verify;
                    report = 'channel_id is required';
                    report = backup.bind(tangon)(foxtra, report);
                    report = 9;
                    report = romeon[report];
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.startEvent;
                    report = report.bind(oscard)(golfie, yankee);
                    SaveGenerator(address=228);
 226:
                    return report;
 228:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!oscard) { _fun00008_ip = 336; continue _fun00007 }
 234:
                    return report;
 237:
                    oscard = _closure1_slot1;
                    yankee = _closure1_slot2;
                    report = 7;
                    report = yankee[report];
                    romeon = oscard.bind(tangon)(report);
                    report = null;
                    oscard = report != verify;
                    report = 'channel_id is required';
                    report = romeon.bind(tangon)(oscard, report);
                    oscard = _closure1_slot0;
                    report = 8;
                    report = yankee[report];
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.startStageInstance;
                    zuuluu = _closure1_slot8;
                    output = zuuluu.GUILD_ONLY;
                    update = oscard;
                    echoed = verify;
                    result = option;
                    sizing = offset;
                    kiloes = golfie;
                    zuuluu = update[report](echoed, result, output, sizing, kiloes, backup);
                    SaveGenerator(address=330);
 328:
                    return zuuluu;
 330:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 339; continue _fun00007 }
 336:
                    return tangon;
 339:
                    return zuuluu;
 342:
                    return michal;
 345:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.createChannelRecordFromServer;
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.GuildScheduledEventEntityTypes;
    var _closure1_slot7 = verify;
    oscard = oscard.GuildScheduledEventPrivacyLevel;
    var _closure1_slot8 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.ChannelTypes;
    var _closure1_slot9 = oscard;
    oscard = 10;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_scheduled_events/StartEventUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['createStageChannelForEvent'] = report;
    zuuluu['findOrCreateEventChannel'] = tangon;
    tangon = function() { // Original name: preStartEventActions
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['preStartEventActions'] = tangon;
    michal = function() { // Original name: setEventAsActive
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['setEventAsActive'] = michal;
    return entity;
})();