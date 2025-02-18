// app/modules/gateway/GatewaySocketAnalytics.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: prettyPrintTrace_
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            kiloes = argFoo;
            backup = argBar;
            entity = null;
            if(!(entity != kiloes)) { _fun00002_ip = 167; continue _fun00001 }
 15:
            entity = kiloes.length;
            foxtra = 0;
            michal = foxtra < entity;
            zuuluu = '';
            romeon = 1;
            yankee = 1000;
            offset = global;
            verify = '\n';
            option = ': ';
            oscard = '|  ';
            report = undefined;
            tangon = 2;
            entity = zuuluu;
            if(!michal) { _fun00002_ip = 165; continue _fun00001 }
 71:
            source = kiloes[foxtra];
            michal = foxtra + romeon;
            sizing = kiloes[michal];
            sizing = sizing.micros;
            echoed = sizing / yankee;
            sizing = offset.HermesInternal;
            sizing = sizing.concat;
            vacuum = verify;
            ctrled = backup;
            update = option;
            sizing = vacuum[sizing](ctrled, source, update, echoed, result);
            sizing = zuuluu + sizing;
            result = _closure1_slot9;
            michal = kiloes[michal];
            output = michal.calls;
            michal = backup + oscard;
            michal = result.bind(report)(output, michal);
            zuuluu = sizing + michal;
            foxtra = foxtra + tangon;
            michal = kiloes.length;
            entity = zuuluu;
            if(foxtra < michal) { _fun00002_ip = 71; continue _fun00001 }
 165:
            return entity;
 167:
            entity = '';
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: eachTraceCall
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            option = argFoo;
            golfie = argBar;
            entity = null;
            if(!(entity != option)) { _fun00004_ip = 101; continue _fun00003 }
 12:
            entity = option.length;
            oscard = 0;
            if(!(entity > oscard)) { _fun00004_ip = 101; continue _fun00003 }
 23:
            entity = option.length;
            entity = oscard < entity;
            report = 1;
            tangon = undefined;
            michal = 2;
            oscard = 0;
            if(!entity) { _fun00004_ip = 101; continue _fun00003 }
 48:
            offset = option[oscard];
            entity = oscard + report;
            entity = option[entity];
            verify = entity.micros;
            verify = golfie.bind(tangon)(offset, verify);
            verify = _closure1_slot10;
            entity = entity.calls;
            entity = verify.bind(tangon)(entity, golfie);
            oscard = oscard + michal;
            entity = option.length;
            if(oscard < entity) { _fun00004_ip = 48; continue _fun00003 }
 101:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: getReadyPayloadSizeAnalytics
        entity = argFoo;
        zuuluu = entity.guilds;
        entity = 0;
        var _closure2_slot0 = entity;
        var _closure2_slot1 = entity;
        tangon = zuuluu.forEach;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                michal = entity.unavailable;
                if(michal) { _fun00006_ip = 86; continue _fun00005 }
 12:
                zuuluu = entity.data_mode;
                michal = 'partial';
                if(!(michal !== zuuluu)) { _fun00006_ip = 34; continue _fun00005 }
 26:
                zuuluu = entity.channels;
                _fun00006_ip = 46; continue _fun00005;
 34:
                entity = entity.partial_updates;
                zuuluu = entity.channels;
 46:
                tangon = null;
                entity = tangon != zuuluu;
                if(!entity) { _fun00006_ip = 64; continue _fun00005 }
 55:
                michal = zuuluu.forEach;
                entity = tangon != michal;
 64:
                if(!entity) { _fun00006_ip = 86; continue _fun00005 }
 67:
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = _closure2_slot1;
                        entity = entity + 1;
                        _closure2_slot1 = entity;
                        entity = argFoo;
                        zuuluu = entity.type;
                        entity = _closure1_slot8;
                        entity = entity.GUILD_CATEGORY;
                        if(!(zuuluu === entity)) { _fun00008_ip = 50; continue _fun00007 }
 39:
                        entity = _closure2_slot0;
                        entity = entity + 1;
                        _closure2_slot0 = entity;
 50:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
 86:
                entity = undefined;
                return entity;
            }
        };
        entity = tangon.bind(zuuluu)(entity);
        entity = {};
        zuuluu = zuuluu.length;
        entity['num_guilds'] = zuuluu;
        zuuluu = _closure2_slot1;
        entity['num_guild_channels'] = zuuluu;
        michal = _closure2_slot0;
        entity['num_guild_category_channels'] = michal;
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = ['guilds', 'merged_presences', 'merged_members', 'read_state', 'private_channels', 'user_guild_settings', 'user_settings', 'user_settings_proto', 'experiments', 'guild_experiments', 'relationships', 'users'];
    var _closure1_slot2 = entity;
    entity = ['features'];
    var _closure1_slot3 = entity;
    entity = ['threads', 'guild_scheduled_events'];
    var _closure1_slot4 = entity;
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
    var _closure1_slot5 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot7 = golfie;
    tangon = tangon.ChannelTypes;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/GatewaySocketAnalytics.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: reportDevtoolsEvent
        entity = undefined;
        return entity;
    };
    zuuluu['reportDevtoolsEvent'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: logReadyPayloadReceived
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            option = argBar;
            golfie = argBaz;
            verify = argCor;
            michal = function(argFoo) { // Original name: getReadyPayloadTraceAnalytics
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = argFoo;
                    oscard = tangon._trace;
                    report = undefined;
                    zuuluu = undefined;
                    tangon = {};
                    entity = tangon;
                    var _closure3_slot0 = tangon;
 24: // try_start_0
                    tangon = global;
                    option = tangon.JSON;
                    golfie = option.parse;
                    verify = golfie.bind(option)(oscard);
                    zuuluu = verify;
                    option = 0;
                    offset = verify[option];
                    verify = null;
                    verify = verify != offset;
                    golfie = verify;
                    if(!verify) { _fun00012_ip = 79; continue _fun00011 }
 64:
                    verify = zuuluu;
                    offset = verify[option];
                    verify = '';
                    golfie = verify !== offset;
 79:
                    oscard = golfie;
                    if(!golfie) { _fun00012_ip = 109; continue _fun00011 }
 85:
                    golfie = zuuluu;
                    verify = golfie[option];
                    option = verify.startsWith;
                    golfie = 'gateway-';
                    oscard = option.bind(verify)(golfie);
 109:
                    if(!oscard) { _fun00012_ip = 164; continue _fun00011 }
 112:
                    oscard = entity;
                    option = tangon.Math;
                    golfie = option.floor;
                    verify = zuuluu;
                    tangon = 1;
                    tangon = verify[tangon];
                    verify = tangon.micros;
                    tangon = 1000;
                    tangon = verify / tangon;
                    tangon = golfie.bind(option)(tangon);
                    oscard['identify_total_server_duration_ms'] = tangon;
 164:
                    tangon = _closure1_slot10;
                    michal = function(argFoo, argBar) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            michal = argFoo;
                            report = argBar;
                            entity = 'start_session';
                            if(!(entity !== michal)) { _fun00014_ip = 70; continue _fun00013 }
 16:
                            entity = 'guilds_connect';
                            if(!(entity === michal)) { _fun00014_ip = 112; continue _fun00013 }
 26:
                            michal = _closure3_slot0;
                            entity = global;
                            tangon = entity.Math;
                            zuuluu = tangon.floor;
                            entity = 1000;
                            entity = report / entity;
                            entity = zuuluu.bind(tangon)(entity);
                            michal['identify_guilds_duration_ms'] = entity;
                            _fun00014_ip = 112; continue _fun00013;
 70:
                            michal = _closure3_slot0;
                            entity = global;
                            tangon = entity.Math;
                            zuuluu = tangon.floor;
                            entity = 1000;
                            entity = report / entity;
                            entity = zuuluu.bind(tangon)(entity);
                            michal['identify_api_duration_ms'] = entity;
 112:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = tangon.bind(report)(zuuluu, michal);
 184: // try_end0
                    _fun00012_ip = 188; continue _fun00011;
 186: // catch_target0
                    CatchBlockStart(arg_register=1);
 188:
                    return entity;
                }
            };
            entity = undefined;
            report = michal.bind(entity)(option);
            tangon = null;
            if(!(tangon != verify)) { _fun00010_ip = 109; continue _fun00009 }
 34:
            oscard = _closure1_slot0;
            offset = _closure1_slot1;
            michal = 3;
            michal = offset[michal];
            yankee = oscard.bind(entity)(michal);
            offset = yankee.addDetail;
            michal = global;
            romeon = michal.Math;
            oscard = romeon.round;
            foxtra = verify.uncompressed_byte_size;
            michal = 1024;
            michal = foxtra / michal;
            oscard = oscard.bind(romeon)(michal);
            michal = 'payload_size(kb)';
            michal = offset.bind(yankee)(michal, oscard);
 109:
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            oscard = 3;
            oscard = yankee[oscard];
            romeon = offset.bind(entity)(oscard);
            yankee = romeon.addDetail;
            oscard = report.identify_total_server_duration_ms;
            foxtra = tangon != oscard;
            offset = 0;
            if(!foxtra) { _fun00010_ip = 156; continue _fun00009 }
 153:
            offset = oscard;
 156:
            oscard = 'server_time(ms)';
            oscard = yankee.bind(romeon)(oscard, offset);
            oscard = {};
            sizing = oscard;
            kiloes = verify;
            verify = copyDataProperties(sizing, kiloes);
            sizing = oscard;
            kiloes = report;
            report = copyDataProperties(sizing, kiloes);
            report = _closure1_slot11;
            kiloes = report.bind(entity)(option);
            sizing = oscard;
            report = copyDataProperties(sizing, kiloes);
            kiloes = argGra;
            sizing = oscard;
            report = copyDataProperties(sizing, kiloes);
            report = zuuluu.identifyStartTime;
            option = golfie - report;
            report = 'duration_ms_since_identify_start';
            oscard[report] = option;
            report = zuuluu.connectionStartTime;
            option = golfie - report;
            report = 'duration_ms_since_connection_start';
            oscard[report] = option;
            report = global;
            option = report.Date;
            report = option.now;
            report = report.bind(option)();
            golfie = report - golfie;
            report = 'duration_ms_since_emit_start';
            oscard[report] = golfie;
            golfie = zuuluu.hasConnectedOnce;
            report = 'is_reconnect';
            oscard[report] = golfie;
            golfie = zuuluu.isFastConnect;
            report = 'is_fast_connect';
            oscard[report] = golfie;
            golfie = zuuluu.didForceClearGuildHashes;
            report = 'did_force_clear_guild_hashes';
            oscard[report] = golfie;
            golfie = zuuluu.identifyUncompressedByteSize;
            report = 'identify_uncompressed_byte_size';
            oscard[report] = golfie;
            golfie = zuuluu.identifyCompressedByteSize;
            report = 'identify_compressed_byte_size';
            oscard[report] = golfie;
            report = zuuluu.analytics;
            report = report.hadCacheAtStartup;
            golfie = tangon != report;
            if(!golfie) { _fun00010_ip = 387; continue _fun00009 }
 384:
            golfie = report;
 387:
            report = 'had_cache_at_startup';
            oscard[report] = golfie;
            zuuluu = zuuluu.analytics;
            zuuluu = zuuluu.usedCacheAtStartup;
            tangon = tangon != zuuluu;
            if(!tangon) { _fun00010_ip = 418; continue _fun00009 }
 415:
            tangon = zuuluu;
 418:
            zuuluu = 'used_cache_at_startup';
            oscard[zuuluu] = tangon;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            golfie = tangon.bind(entity)(zuuluu);
            zuuluu = golfie.attachReadyPayloadProperties;
            zuuluu = zuuluu.bind(golfie)(oscard);
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot7;
            zuuluu = michal.READY_PAYLOAD_RECEIVED;
            michal = {};
            golfie = true;
            michal['logEventProperties'] = golfie;
            michal = tangon.bind(report)(zuuluu, oscard, michal);
            return entity;
        }
    };
    zuuluu['logReadyPayloadReceived'] = tangon;
    tangon = function(argFoo) { // Original name: getConnectionPath
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            option = undefined;
            zuuluu = undefined;
            entity = undefined;
 9: // try_start_0
            tangon = michal;
            report = tangon._trace;
            zuuluu = report;
            tangon = null;
            report = tangon == report;
            verify = undefined;
            if(report) { _fun00016_ip = 41; continue _fun00015 }
 32:
            report = zuuluu;
            zuuluu = 0;
            verify = report[zuuluu];
 41:
            report = tangon == verify;
            zuuluu = null;
            if(report) { _fun00016_ip = 86; continue _fun00015 }
 50:
            golfie = _closure1_slot9;
            report = global;
            oscard = report.JSON;
            report = oscard.parse;
            oscard = report.bind(oscard)(verify);
            report = '';
            zuuluu = golfie.bind(option)(oscard, report);
 86:
            entity = zuuluu;
            if(!(tangon == zuuluu)) { _fun00016_ip = 95; continue _fun00015 }
 93: // try_end0
            _fun00016_ip = 99; continue _fun00015;
 95:
            return entity;
 97: // catch_target0
            CatchBlockStart(arg_register=0);
 99:
            entity = michal;
            zuuluu = entity._trace;
            entity = null;
            zuuluu = entity != zuuluu;
            entity = '???';
            if(!zuuluu) { _fun00016_ip = 145; continue _fun00015 }
 123:
            tangon = michal._trace;
            zuuluu = tangon.join;
            michal = ' -> ';
            entity = zuuluu.bind(tangon)(michal);
 145:
            return entity;
        }
    };
    zuuluu['getConnectionPath'] = tangon;
    tangon = function(argFoo) { // Original name: getReadyPayloadByteSizeAnalytics
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            golfie = argFoo;
            michal = global;
            tangon = michal.Math;
            zuuluu = tangon.random;
            tangon = zuuluu.bind(tangon)();
            zuuluu = 0.01;
            if(!(!(tangon > zuuluu))) { _fun00018_ip = 908; continue _fun00017 }
 40:
            tangon = michal.Date;
            zuuluu = tangon.now;
            zuuluu = zuuluu.bind(tangon)();
            backup = golfie.guilds;
            kiloes = golfie.merged_presences;
            sizing = golfie.merged_members;
            config = golfie.read_state;
            sequen = golfie.private_channels;
            update = golfie.user_guild_settings;
            record = golfie.user_settings;
            vacuum = golfie.user_settings_proto;
            source = golfie.experiments;
            ctrled = golfie.guild_experiments;
            echoed = golfie.relationships;
            cntext = golfie.users;
            oscard = _closure1_slot5;
            report = _closure1_slot2;
            tangon = undefined;
            report = oscard.bind(tangon)(golfie, report);
            output = new Array(0);
            var _closure2_slot0 = output;
            romeon = new Array(0);
            var _closure2_slot1 = romeon;
            yankee = new Array(0);
            var _closure2_slot2 = yankee;
            offset = new Array(0);
            var _closure2_slot3 = offset;
            verify = new Array(0);
            var _closure2_slot4 = verify;
            golfie = new Array(0);
            var _closure2_slot5 = golfie;
            option = new Array(0);
            var _closure2_slot6 = option;
            oscard = new Array(0);
            var _closure2_slot7 = oscard;
            foxtra = backup.forEach;
            entity = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    verify = argFoo;
                    entity = verify.unavailable;
                    if(entity) { _fun00020_ip = 316; continue _fun00019 }
 15:
                    report = verify.properties;
                    entity = null;
                    if(!(entity == report)) { _fun00020_ip = 29; continue _fun00019 }
 27:
                    report = {};
 29:
                    golfie = report.features;
                    zuuluu = _closure1_slot5;
                    tangon = _closure1_slot3;
                    michal = undefined;
                    tangon = zuuluu.bind(michal)(report, tangon);
                    option = verify.threads;
                    oscard = verify.guild_scheduled_events;
                    entity = _closure1_slot4;
                    zuuluu = zuuluu.bind(michal)(verify, entity);
                    yankee = _closure2_slot0;
                    report = yankee.push;
                    michal = verify.data_mode;
                    offset = 'partial';
                    if(!(offset !== michal)) { _fun00020_ip = 110; continue _fun00019 }
 102:
                    michal = verify.channels;
                    _fun00020_ip = 122; continue _fun00019;
 110:
                    romeon = verify.partial_updates;
                    michal = romeon.channels;
 122:
                    michal = report.bind(yankee)(michal);
                    yankee = _closure2_slot1;
                    report = yankee.push;
                    michal = verify.data_mode;
                    if(!(offset !== michal)) { _fun00020_ip = 154; continue _fun00019 }
 146:
                    michal = verify.roles;
                    _fun00020_ip = 166; continue _fun00019;
 154:
                    romeon = verify.partial_updates;
                    michal = romeon.roles;
 166:
                    michal = report.bind(yankee)(michal);
                    yankee = _closure2_slot2;
                    report = yankee.push;
                    michal = verify.data_mode;
                    if(!(offset !== michal)) { _fun00020_ip = 198; continue _fun00019 }
 190:
                    michal = verify.emojis;
                    _fun00020_ip = 210; continue _fun00019;
 198:
                    romeon = verify.partial_updates;
                    michal = romeon.emojis;
 210:
                    michal = report.bind(yankee)(michal);
                    report = _closure2_slot3;
                    michal = report.push;
                    michal = michal.bind(report)(option);
                    option = _closure2_slot4;
                    report = option.push;
                    michal = verify.data_mode;
                    if(!(offset !== michal)) { _fun00020_ip = 256; continue _fun00019 }
 248:
                    michal = verify.stickers;
                    _fun00020_ip = 268; continue _fun00019;
 256:
                    verify = verify.partial_updates;
                    michal = verify.stickers;
 268:
                    michal = report.bind(option)(michal);
                    report = _closure2_slot5;
                    michal = report.push;
                    michal = michal.bind(report)(golfie);
                    report = _closure2_slot6;
                    michal = report.push;
                    michal = michal.bind(report)(oscard);
                    michal = _closure2_slot7;
                    entity = michal.push;
                    entity = entity.bind(michal)(zuuluu, tangon);
 316:
                    entity = undefined;
                    return entity;
                }
            };
            entity = foxtra.bind(backup)(entity);
            entity = {};
            papara = michal.JSON;
            result = papara.stringify;
            backup = null;
            target = backup == kiloes;
            foxtra = undefined;
            if(target) { _fun00018_ip = 258; continue _fun00017 }
 252:
            foxtra = kiloes.friends;
 258:
            if(!(backup == foxtra)) { _fun00018_ip = 266; continue _fun00017 }
 262:
            foxtra = new Array(0);
 266:
            foxtra = result.bind(papara)(foxtra);
            foxtra = foxtra.length;
            entity['presences_size'] = foxtra;
            result = michal.JSON;
            foxtra = result.stringify;
            foxtra = foxtra.bind(result)(cntext);
            foxtra = foxtra.length;
            entity['users_size'] = foxtra;
            result = michal.JSON;
            foxtra = result.stringify;
            foxtra = foxtra.bind(result)(config);
            foxtra = foxtra.length;
            entity['read_states_size'] = foxtra;
            result = michal.JSON;
            foxtra = result.stringify;
            foxtra = foxtra.bind(result)(sequen);
            foxtra = foxtra.length;
            entity['private_channels_size'] = foxtra;
            config = michal.JSON;
            sequen = config.stringify;
            cntext = backup != record;
            foxtra = '';
            result = foxtra;
            if(!cntext) { _fun00018_ip = 391; continue _fun00017 }
 388:
            result = record;
 391:
            result = sequen.bind(config)(result);
            result = result.length;
            sequen = backup != vacuum;
            if(!sequen) { _fun00018_ip = 411; continue _fun00017 }
 408:
            foxtra = vacuum;
 411:
            foxtra = foxtra.length;
            foxtra = result + foxtra;
            entity['user_settings_size'] = foxtra;
            result = michal.JSON;
            foxtra = result.stringify;
            if(!(backup == source)) { _fun00018_ip = 445; continue _fun00017 }
 441:
            source = new Array(0);
 445:
            foxtra = foxtra.bind(result)(source);
            result = foxtra.length;
            source = michal.JSON;
            foxtra = source.stringify;
            if(!(backup == ctrled)) { _fun00018_ip = 475; continue _fun00017 }
 471:
            ctrled = new Array(0);
 475:
            foxtra = foxtra.bind(source)(ctrled);
            foxtra = foxtra.length;
            foxtra = result + foxtra;
            entity['experiments_size'] = foxtra;
            result = michal.JSON;
            foxtra = result.stringify;
            foxtra = foxtra.bind(result)(update);
            foxtra = foxtra.length;
            entity['user_guild_settings_size'] = foxtra;
            result = michal.JSON;
            foxtra = result.stringify;
            foxtra = foxtra.bind(result)(echoed);
            foxtra = foxtra.length;
            entity['relationships_size'] = foxtra;
            result = michal.JSON;
            foxtra = result.stringify;
            if(!(backup == report)) { _fun00018_ip = 566; continue _fun00017 }
 564:
            report = {};
 566:
            report = foxtra.bind(result)(report);
            report = report.length;
            entity['remaining_data_size'] = report;
            foxtra = michal.JSON;
            report = foxtra.stringify;
            report = report.bind(foxtra)(output);
            report = report.length;
            entity['guild_channels_size'] = report;
            foxtra = michal.JSON;
            report = foxtra.stringify;
            if(!(backup == sizing)) { _fun00018_ip = 628; continue _fun00017 }
 624:
            sizing = new Array(0);
 628:
            report = report.bind(foxtra)(sizing);
            report = report.length;
            entity['guild_members_size'] = report;
            foxtra = michal.JSON;
            report = foxtra.stringify;
            sizing = backup == kiloes;
            tangon = undefined;
            if(sizing) { _fun00018_ip = 670; continue _fun00017 }
 664:
            tangon = kiloes.guilds;
 670:
            if(!(backup == tangon)) { _fun00018_ip = 678; continue _fun00017 }
 674:
            tangon = new Array(0);
 678:
            tangon = report.bind(foxtra)(tangon);
            tangon = tangon.length;
            entity['guild_presences_size'] = tangon;
            report = michal.JSON;
            tangon = report.stringify;
            tangon = tangon.bind(report)(romeon);
            tangon = tangon.length;
            entity['guild_roles_size'] = tangon;
            report = michal.JSON;
            tangon = report.stringify;
            tangon = tangon.bind(report)(yankee);
            tangon = tangon.length;
            entity['guild_emojis_size'] = tangon;
            report = michal.JSON;
            tangon = report.stringify;
            tangon = tangon.bind(report)(offset);
            tangon = tangon.length;
            entity['guild_threads_size'] = tangon;
            report = michal.JSON;
            tangon = report.stringify;
            tangon = tangon.bind(report)(verify);
            tangon = tangon.length;
            entity['guild_stickers_size'] = tangon;
            report = michal.JSON;
            tangon = report.stringify;
            tangon = tangon.bind(report)(option);
            tangon = tangon.length;
            entity['guild_events_size'] = tangon;
            report = michal.JSON;
            tangon = report.stringify;
            tangon = tangon.bind(report)(golfie);
            tangon = tangon.length;
            entity['guild_features_size'] = tangon;
            report = michal.JSON;
            tangon = report.stringify;
            tangon = tangon.bind(report)(oscard);
            tangon = tangon.length;
            entity['guild_remaining_data_size'] = tangon;
            tangon = michal.Date;
            michal = tangon.now;
            michal = michal.bind(tangon)();
            michal = michal - zuuluu;
            entity['size_metrics_duration_ms'] = michal;
            return entity;
 908:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['getReadyPayloadByteSizeAnalytics'] = tangon;
    tangon = function(argFoo) { // Original name: createResumeAnalytics
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zuuluu = argFoo;
            entity = {'connectTime': null, 'numEvents': 0, 'largestWaitTime': 0, 'dispatchTime': 0, 'totalWaitTime': 0, 'initialWaitTime': 0};
            michal = null;
            tangon = michal != zuuluu;
            michal = 0;
            if(!tangon) { _fun00022_ip = 31; continue _fun00021 }
 28:
            michal = zuuluu;
 31:
            entity['connectTime'] = michal;
            michal = global;
            tangon = michal.performance;
            zuuluu = tangon.now;
            zuuluu = zuuluu.bind(tangon)();
            entity['startTime'] = zuuluu;
            zuuluu = michal.performance;
            michal = zuuluu.now;
            michal = michal.bind(zuuluu)();
            entity['lastUpdateTime'] = michal;
            return entity;
        }
    };
    zuuluu['createResumeAnalytics'] = tangon;
    michal = function(argFoo) { // Original name: logResumeAnalytics
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot6;
            zuuluu = tangon.getCurrentUser;
            report = zuuluu.bind(tangon)();
            zuuluu = null;
            zuuluu = zuuluu == report;
            if(zuuluu) { _fun00024_ip = 41; continue _fun00023 }
 28:
            tangon = report.isStaff;
            tangon = tangon.bind(report)();
            zuuluu = !tangon;
 41:
            if(!zuuluu) { _fun00024_ip = 76; continue _fun00023 }
 44:
            tangon = global;
            report = tangon.Math;
            tangon = report.random;
            report = tangon.bind(report)();
            tangon = 0.5;
            zuuluu = report < tangon;
 76:
            if(zuuluu) { _fun00024_ip = 334; continue _fun00023 }
 82:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 5;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.track;
            michal = _closure1_slot7;
            zuuluu = michal.CONNECTION_RESUMED;
            michal = {};
            oscard = entity.connectTime;
            michal['connect_time_ms'] = oscard;
            oscard = global;
            verify = oscard.Math;
            option = verify.floor;
            offset = oscard.performance;
            golfie = offset.now;
            offset = golfie.bind(offset)();
            golfie = entity.startTime;
            golfie = offset - golfie;
            golfie = option.bind(verify)(golfie);
            michal['resume_time_ms'] = golfie;
            golfie = entity.numEvents;
            michal['num_events'] = golfie;
            verify = oscard.Math;
            option = verify.floor;
            golfie = entity.largestWaitTime;
            golfie = option.bind(verify)(golfie);
            michal['largest_wait_time_ms'] = golfie;
            verify = oscard.Math;
            option = verify.floor;
            golfie = entity.initialWaitTime;
            golfie = option.bind(verify)(golfie);
            michal['initial_wait_time_ms'] = golfie;
            verify = oscard.Math;
            option = verify.floor;
            golfie = entity.totalWaitTime;
            golfie = option.bind(verify)(golfie);
            michal['total_wait_time_ms'] = golfie;
            golfie = oscard.Math;
            oscard = golfie.floor;
            entity = entity.dispatchTime;
            entity = oscard.bind(golfie)(entity);
            michal['total_dispatch_time_ms'] = entity;
            entity = {};
            oscard = true;
            entity['logEventProperties'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal, entity);
 334:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['logResumeAnalytics'] = michal;
    return entity;
})();