// app/modules/gateway/ChannelResyncManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot7;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot6;
            entity = _closure1_slot20;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot20 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: handleGuildCreate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            michal = michal.guild;
            var _closure2_slot0 = michal;
            zuuluu = michal.unavailable;
            michal = true;
            if(!(michal !== zuuluu)) { _fun00006_ip = 51; continue _fun00005 }
 26:
            michal = global;
            tangon = michal.setTimeout;
            zuuluu = undefined;
            michal = function() {
                report = _closure1_slot24;
                michal = _closure2_slot0;
                tangon = michal.id;
                entity = undefined;
                tangon = report.bind(entity)(tangon);
                zuuluu = _closure1_slot26;
                michal = michal.id;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = 0;
            entity = tangon.bind(zuuluu)(michal, entity);
 51:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: handlePostConnectionOpen
        zuuluu = _closure1_slot24;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)();
        zuuluu = _closure1_slot10;
        michal = zuuluu.getGuildIds;
        tangon = michal.bind(zuuluu)();
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            zuuluu = _closure1_slot26;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: handleChannelSync
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.integrity_check;
            if(entity) { _fun00008_ip = 33; continue _fun00007 }
 12:
            tangon = _closure1_slot26;
            michal = zuuluu.guild_id;
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            _fun00008_ip = 49; continue _fun00007;
 33:
            michal = function(argFoo) { // Original name: doIntegrityCheck
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.guild_id;
                    oscard = michal.channels;
                    report = _closure1_slot9;
                    zuuluu = report.getMutableGuildChannelsForGuild;
                    zuuluu = zuuluu.bind(report)(tangon);
                    var _closure3_slot0 = zuuluu;
                    report = oscard.map;
                    zuuluu = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            entity = argFoo;
                            zuuluu = _closure3_slot0;
                            michal = entity.id;
                            michal = zuuluu[michal];
                            report = null;
                            if(!(report != michal)) { _fun00012_ip = 207; continue _fun00011 }
 28:
                            option = _closure1_slot0;
                            tangon = _closure1_slot2;
                            golfie = 14;
                            tangon = tangon[golfie];
                            oscard = undefined;
                            verify = option.bind(oscard)(tangon);
                            option = verify.hasFlag;
                            tangon = entity.flags;
                            offset = report != tangon;
                            report = 0;
                            if(!offset) { _fun00012_ip = 76; continue _fun00011 }
 73:
                            report = tangon;
 76:
                            tangon = _closure1_slot12;
                            tangon = tangon.OBFUSCATED;
                            yankee = option.bind(verify)(report, tangon);
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            tangon = tangon[golfie];
                            oscard = report.bind(oscard)(tangon);
                            report = oscard.hasFlag;
                            tangon = michal.flags;
                            michal = _closure1_slot12;
                            michal = michal.OBFUSCATED;
                            offset = report.bind(oscard)(tangon, michal);
                            michal = yankee === offset;
                            if(michal) { _fun00012_ip = 205; continue _fun00011 }
 143:
                            report = _closure1_slot13;
                            tangon = report.warn;
                            sizing = entity.id;
                            zuuluu = global;
                            zuuluu = zuuluu.HermesInternal;
                            option = zuuluu.concat;
                            output = 'Integrity check failure: ';
                            kiloes = ' serverObfuscated: ';
                            foxtra = ' != clientObfuscated: ';
                            backup = yankee;
                            romeon = offset;
                            zuuluu = output[option](sizing, kiloes, backup, foxtra, romeon, yankee);
                            zuuluu = tangon.bind(report)(zuuluu);
                            michal = false;
 205:
                            return michal;
 207:
                            zuuluu = _closure1_slot13;
                            michal = zuuluu.warn;
                            oscard = entity.id;
                            entity = global;
                            entity = entity.HermesInternal;
                            report = entity.concat;
                            tangon = 'Integrity check failure: ';
                            entity = ' was missing.';
                            entity = report.bind(tangon)(oscard, entity);
                            entity = michal.bind(zuuluu)(entity);
                            entity = false;
                            return entity;
                        }
                    };
                    report = report.bind(oscard)(zuuluu);
                    zuuluu = report.every;
                    entity = function(argFoo) {
                        entity = argFoo;
                        return entity;
                    };
                    golfie = zuuluu.bind(report)(entity);
                    entity = _closure1_slot13;
                    if(golfie) { _fun00010_ip = 87; continue _fun00009 }
 80:
                    report = entity.warn;
                    _fun00010_ip = 93; continue _fun00009;
 87:
                    report = entity.verbose;
 93:
                    entity = global;
                    entity = entity.HermesInternal;
                    oscard = entity.concat;
                    zuuluu = 'Integrity check for guild ';
                    entity = ' completed. Passed: ';
                    zuuluu = oscard.bind(zuuluu)(tangon, entity, golfie);
                    entity = undefined;
                    zuuluu = report.bind(entity)(zuuluu);
                    zuuluu = _closure1_slot16;
                    michal = zuuluu.add;
                    michal = michal.bind(zuuluu)(tangon);
                    return entity;
                }
            };
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
 49:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: scheduleGuildResyncs
        entity = undefined;
        tangon = _closure1_slot25;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _scheduleGuildResyncs
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 84; continue _fun00013 }
 9:
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 12;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(michal);
                    michal = report.getAll;
                    michal = michal.bind(report)();
                    SaveGenerator(address=55);
 53:
                    return michal;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 81; continue _fun00013 }
 61:
                    report = michal.forEach;
                    tangon = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            entity = argFoo;
                            tangon = _closure4_slot0;
                            michal = null;
                            michal = michal != tangon;
                            if(!michal) { _fun00016_ip = 32; continue _fun00015 }
 19:
                            tangon = entity.id;
                            zuuluu = _closure4_slot0;
                            michal = tangon !== zuuluu;
 32:
                            if(michal) { _fun00016_ip = 56; continue _fun00015 }
 35:
                            zuuluu = entity.id;
                            michal = function(argFoo) { // Original name: scheduleGuildResync
                                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                    tangon = argFoo;
                                    var _closure6_slot0 = tangon;
                                    entity = _closure1_slot15;
                                    report = entity[tangon];
                                    entity = null;
                                    if(!(entity != report)) { _fun00018_ip = 49; continue _fun00017 }
 26:
                                    entity = global;
                                    oscard = entity.clearTimeout;
                                    entity = _closure1_slot15;
                                    report = entity[tangon];
                                    entity = undefined;
                                    entity = oscard.bind(entity)(report);
 49:
                                    entity = global;
                                    golfie = entity.Math;
                                    oscard = golfie.ceil;
                                    option = entity.Math;
                                    report = option.random;
                                    option = report.bind(option)();
                                    report = _closure1_slot14;
                                    report = option * report;
                                    oscard = oscard.bind(golfie)(report);
                                    zuuluu = _closure1_slot15;
                                    report = entity.setTimeout;
                                    entity = undefined;
                                    michal = function() {
                                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                            entity = _closure1_slot15;
                                            zuuluu = _closure6_slot0;
                                            entity = delete entity[zuuluu];
                                            report = _closure1_slot0;
                                            tangon = _closure1_slot2;
                                            entity = 13;
                                            tangon = tangon[entity];
                                            entity = undefined;
                                            report = report.bind(entity)(tangon);
                                            tangon = report.isChannelMetadataObfuscationEnabled;
                                            tangon = tangon.bind(report)();
                                            if(!tangon) { _fun00020_ip = 222; continue _fun00019 }
 56:
                                            report = _closure1_slot10;
                                            tangon = report.getGuild;
                                            report = tangon.bind(report)(zuuluu);
                                            tangon = null;
                                            if(!(tangon != report)) { _fun00020_ip = 222; continue _fun00019 }
 79:
                                            oscard = new Array(0);
                                            report = _closure1_slot9;
                                            tangon = report.getMutableGuildChannelsForGuild;
                                            yankee = tangon.bind(report)(zuuluu);
                                            verify = yankee;
                                            tangon = 14;
                                            for(report in verify)
 112:
                                            {
 121:
                                                foxtra = report;
                                                romeon = yankee[foxtra];
                                                kiloes = _closure1_slot0;
                                                backup = _closure1_slot2;
                                                backup = backup[tangon];
                                                sizing = kiloes.bind(entity)(backup);
                                                kiloes = sizing.hasFlag;
                                                backup = romeon.flags;
                                                romeon = _closure1_slot12;
                                                romeon = romeon.OBFUSCATED;
                                                romeon = kiloes.bind(sizing)(backup, romeon);
                                                if(!romeon) { _fun00020_ip = 112; continue _fun00019 }
 175:
                                                romeon = oscard.push;
                                                romeon = romeon.bind(oscard)(foxtra);
                                                _fun00020_ip = 112; continue _fun00019;
                                            }
 187:
                                            report = _closure1_slot11;
                                            tangon = report.getSocket;
                                            report = tangon.bind(report)();
                                            tangon = report.triggerGuildChannelResync;
                                            tangon = tangon.bind(report)(zuuluu, oscard);
                                            michal = _closure1_slot26;
                                            michal = michal.bind(entity)(zuuluu);
 222:
                                            return entity;
                                        }
                                    };
                                    michal = report.bind(entity)(michal, oscard);
                                    zuuluu[tangon] = michal;
                                    return entity;
                                }
                            };
                            entity = undefined;
                            entity = michal.bind(entity)(zuuluu);
 56:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tangon = report.bind(michal)(tangon);
                    return zuuluu;
 81:
                    return michal;
 84:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot25 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: scheduleIntegrityCheck
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            zuuluu = _closure1_slot18;
            report = zuuluu[tangon];
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00022_ip = 49; continue _fun00021 }
 26:
            zuuluu = global;
            oscard = zuuluu.clearTimeout;
            zuuluu = _closure1_slot18;
            report = zuuluu[tangon];
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)(report);
 49:
            oscard = global;
            golfie = oscard.Math;
            report = golfie.ceil;
            option = oscard.Math;
            zuuluu = option.random;
            option = zuuluu.bind(option)();
            zuuluu = _closure1_slot17;
            zuuluu = option * zuuluu;
            report = report.bind(golfie)(zuuluu);
            zuuluu = _closure1_slot18;
            oscard = oscard.setTimeout;
            entity = _closure1_slot17;
            report = entity + report;
            entity = undefined;
            michal = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure1_slot18;
                    report = _closure2_slot0;
                    entity = delete entity[report];
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 13;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.isChannelMetadataIntegrityCheckEnabled;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!zuuluu) { _fun00024_ip = 116; continue _fun00023 }
 53:
                    tangon = _closure1_slot10;
                    zuuluu = tangon.getGuild;
                    zuuluu = zuuluu.bind(tangon)(report);
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00024_ip = 116; continue _fun00023 }
 73:
                    oscard = _closure1_slot16;
                    zuuluu = oscard.has;
                    zuuluu = zuuluu.bind(oscard)(report);
                    if(zuuluu) { _fun00024_ip = 116; continue _fun00023 }
 90:
                    zuuluu = _closure1_slot11;
                    michal = zuuluu.getSocket;
                    zuuluu = michal.bind(zuuluu)();
                    michal = zuuluu.triggerGuildChannelResync;
                    michal = michal.bind(zuuluu)(report, tangon);
 116:
                    return entity;
                }
            };
            michal = oscard.bind(entity)(michal, report);
            zuuluu[tangon] = michal;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ChannelFlags;
    var _closure1_slot12 = michal;
    michal = 10;
    michal = oscard[michal];
    offset = option.bind(entity)(michal);
    michal = offset.prototype;
    verify = Object.create(michal, {constructor: {value: offset}});
    foxtra = 'ChannelResyncManager';
    backup = verify;
    michal = new backup[offset](foxtra, romeon);
    michal = michal instanceof Object ? michal : verify;
    var _closure1_slot13 = michal;
    michal = 11;
    michal = oscard[michal];
    option = option.bind(entity)(michal);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: ChannelResyncManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            entity = _closure1_slot5;
            report = _closure2_slot0;
            tangon = undefined;
            entity = entity.bind(tangon)(oscard, report);
            michal = _closure1_slot19;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = michal.bind(tangon)(oscard, report, entity);
            michal = {};
            tangon = _closure1_slot21;
            michal['GUILD_CREATE'] = tangon;
            tangon = _closure1_slot22;
            michal['POST_CONNECTION_OPEN'] = tangon;
            zuuluu = _closure1_slot23;
            michal['CHANNEL_SYNC'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot8;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot4;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(option);
    option = 2000;
    var _closure1_slot14 = option;
    option = {};
    var _closure1_slot15 = option;
    tangon = tangon.Set;
    option = tangon.prototype;
    option = Object.create(option, {constructor: {value: tangon}});
    backup = option;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot16 = tangon;
    tangon = 10000;
    var _closure1_slot17 = tangon;
    tangon = {};
    var _closure1_slot18 = tangon;
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    backup = tangon;
    michal = new backup[michal](foxtra);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/ChannelResyncManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();