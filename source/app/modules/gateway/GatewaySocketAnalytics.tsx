// app/modules/gateway/GatewaySocketAnalytics.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: prettyPrintTrace_
        _fun106060: for(var _fun106060_ip = 0; ; ) switch(_fun106060_ip) {
 0:
            kilo = argFoo;
            backup = argBar;
            entity = null;
            if(!(entity != kilo)) { _fun106060_ip = 167; continue _fun106060 }
 15:
            entity = kilo.length;
            foxtrot = 0;
            mike = foxtrot < entity;
            zulu = '';
            romeo = 1;
            yankee = 1000;
            offset = global;
            verify = '\n';
            options = ': ';
            oscar = '|  ';
            report = undefined;
            tango = 2;
            entity = zulu;
            if(!mike) { _fun106060_ip = 165; continue _fun106060 }
 71:
            source = kilo[foxtrot];
            mike = foxtrot + romeo;
            sizing = kilo[mike];
            sizing = sizing.micros;
            echo = sizing / yankee;
            sizing = offset.HermesInternal;
            sizing = sizing.concat;
            vacuum = verify;
            control = backup;
            update = options;
            sizing = vacuum[sizing](control, source, update, echo, result);
            sizing = zulu + sizing;
            result = _closure1_slot9;
            mike = kilo[mike];
            output = mike.calls;
            mike = backup + oscar;
            mike = result.bind(report)(output, mike);
            zulu = sizing + mike;
            foxtrot = foxtrot + tango;
            mike = kilo.length;
            entity = zulu;
            if(foxtrot < mike) { _fun106060_ip = 71; continue _fun106060 }
 165:
            return entity;
 167:
            entity = '';
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: eachTraceCall
        _fun106061: for(var _fun106061_ip = 0; ; ) switch(_fun106061_ip) {
 0:
            options = argFoo;
            golf = argBar;
            entity = null;
            if(!(entity != options)) { _fun106061_ip = 101; continue _fun106061 }
 12:
            entity = options.length;
            oscar = 0;
            if(!(entity > oscar)) { _fun106061_ip = 101; continue _fun106061 }
 23:
            entity = options.length;
            entity = oscar < entity;
            report = 1;
            tango = undefined;
            mike = 2;
            oscar = 0;
            if(!entity) { _fun106061_ip = 101; continue _fun106061 }
 48:
            offset = options[oscar];
            entity = oscar + report;
            entity = options[entity];
            verify = entity.micros;
            verify = golf.bind(tango)(offset, verify);
            verify = _closure1_slot10;
            entity = entity.calls;
            entity = verify.bind(tango)(entity, golf);
            oscar = oscar + mike;
            entity = options.length;
            if(oscar < entity) { _fun106061_ip = 48; continue _fun106061 }
 101:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: getReadyPayloadSizeAnalytics
        entity = argFoo;
        zulu = entity.guilds;
        entity = 0;
        var _closure2_slot0 = entity;
        var _closure2_slot1 = entity;
        tango = zulu.forEach;
        entity = function(argFoo) {
            _fun106063: for(var _fun106063_ip = 0; ; ) switch(_fun106063_ip) {
 0:
                entity = argFoo;
                mike = entity.unavailable;
                if(mike) { _fun106063_ip = 86; continue _fun106063 }
 12:
                zulu = entity.data_mode;
                mike = 'partial';
                if(!(mike !== zulu)) { _fun106063_ip = 34; continue _fun106063 }
 26:
                zulu = entity.channels;
                _fun106063_ip = 46; continue _fun106063;
 34:
                entity = entity.partial_updates;
                zulu = entity.channels;
 46:
                tango = null;
                entity = tango != zulu;
                if(!entity) { _fun106063_ip = 64; continue _fun106063 }
 55:
                mike = zulu.forEach;
                entity = tango != mike;
 64:
                if(!entity) { _fun106063_ip = 86; continue _fun106063 }
 67:
                mike = zulu.forEach;
                entity = function(argFoo) {
                    _fun106064: for(var _fun106064_ip = 0; ; ) switch(_fun106064_ip) {
 0:
                        entity = _closure2_slot1;
                        entity = entity + 1;
                        _closure2_slot1 = entity;
                        entity = argFoo;
                        zulu = entity.type;
                        entity = _closure1_slot8;
                        entity = entity.GUILD_CATEGORY;
                        if(!(zulu === entity)) { _fun106064_ip = 50; continue _fun106064 }
 39:
                        entity = _closure2_slot0;
                        entity = entity + 1;
                        _closure2_slot0 = entity;
 50:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
 86:
                entity = undefined;
                return entity;
            }
        };
        entity = tango.bind(zulu)(entity);
        entity = {};
        zulu = zulu.length;
        entity['num_guilds'] = zulu;
        zulu = _closure2_slot1;
        entity['num_guild_channels'] = zulu;
        mike = _closure2_slot0;
        entity['num_guild_category_channels'] = mike;
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
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot7 = golf;
    tango = tango.ChannelTypes;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/GatewaySocketAnalytics.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: reportDevtoolsEvent
        entity = undefined;
        return entity;
    };
    zulu['reportDevtoolsEvent'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: logReadyPayloadReceived
        _fun106066: for(var _fun106066_ip = 0; ; ) switch(_fun106066_ip) {
 0:
            zulu = argFoo;
            options = argBar;
            golf = argBaz;
            verify = argCorge;
            mike = function(argFoo) { // Original name: getReadyPayloadTraceAnalytics
                _fun106067: for(var _fun106067_ip = 0; ; ) switch(_fun106067_ip) {
 0:
                    tango = argFoo;
                    oscar = tango._trace;
                    report = undefined;
                    zulu = undefined;
                    tango = {};
                    entity = tango;
                    var _closure3_slot0 = tango;
 24: // try_start_0
                    tango = global;
                    options = tango.JSON;
                    golf = options.parse;
                    verify = golf.bind(options)(oscar);
                    zulu = verify;
                    options = 0;
                    offset = verify[options];
                    verify = null;
                    verify = verify != offset;
                    golf = verify;
                    if(!verify) { _fun106067_ip = 79; continue _fun106067 }
 64:
                    verify = zulu;
                    offset = verify[options];
                    verify = '';
                    golf = verify !== offset;
 79:
                    oscar = golf;
                    if(!golf) { _fun106067_ip = 109; continue _fun106067 }
 85:
                    golf = zulu;
                    verify = golf[options];
                    options = verify.startsWith;
                    golf = 'gateway-';
                    oscar = options.bind(verify)(golf);
 109:
                    if(!oscar) { _fun106067_ip = 164; continue _fun106067 }
 112:
                    oscar = entity;
                    options = tango.Math;
                    golf = options.floor;
                    verify = zulu;
                    tango = 1;
                    tango = verify[tango];
                    verify = tango.micros;
                    tango = 1000;
                    tango = verify / tango;
                    tango = golf.bind(options)(tango);
                    oscar['identify_total_server_duration_ms'] = tango;
 164:
                    tango = _closure1_slot10;
                    mike = function(argFoo, argBar) {
                        _fun106068: for(var _fun106068_ip = 0; ; ) switch(_fun106068_ip) {
 0:
                            mike = argFoo;
                            report = argBar;
                            entity = 'start_session';
                            if(!(entity !== mike)) { _fun106068_ip = 70; continue _fun106068 }
 16:
                            entity = 'guilds_connect';
                            if(!(entity === mike)) { _fun106068_ip = 112; continue _fun106068 }
 26:
                            mike = _closure3_slot0;
                            entity = global;
                            tango = entity.Math;
                            zulu = tango.floor;
                            entity = 1000;
                            entity = report / entity;
                            entity = zulu.bind(tango)(entity);
                            mike['identify_guilds_duration_ms'] = entity;
                            _fun106068_ip = 112; continue _fun106068;
 70:
                            mike = _closure3_slot0;
                            entity = global;
                            tango = entity.Math;
                            zulu = tango.floor;
                            entity = 1000;
                            entity = report / entity;
                            entity = zulu.bind(tango)(entity);
                            mike['identify_api_duration_ms'] = entity;
 112:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = tango.bind(report)(zulu, mike);
 184: // try_end0
                    _fun106067_ip = 188; continue _fun106067;
 186: // catch_target0
                    CatchBlockStart(arg_register=1);
 188:
                    return entity;
                }
            };
            entity = undefined;
            report = mike.bind(entity)(options);
            tango = null;
            if(!(tango != verify)) { _fun106066_ip = 109; continue _fun106066 }
 34:
            oscar = _closure1_slot0;
            offset = _closure1_slot1;
            mike = 3;
            mike = offset[mike];
            yankee = oscar.bind(entity)(mike);
            offset = yankee.addDetail;
            mike = global;
            romeo = mike.Math;
            oscar = romeo.round;
            foxtrot = verify.uncompressed_byte_size;
            mike = 1024;
            mike = foxtrot / mike;
            oscar = oscar.bind(romeo)(mike);
            mike = 'payload_size(kb)';
            mike = offset.bind(yankee)(mike, oscar);
 109:
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            oscar = 3;
            oscar = yankee[oscar];
            romeo = offset.bind(entity)(oscar);
            yankee = romeo.addDetail;
            oscar = report.identify_total_server_duration_ms;
            foxtrot = tango != oscar;
            offset = 0;
            if(!foxtrot) { _fun106066_ip = 156; continue _fun106066 }
 153:
            offset = oscar;
 156:
            oscar = 'server_time(ms)';
            oscar = yankee.bind(romeo)(oscar, offset);
            oscar = {};
            sizing = oscar;
            kilo = verify;
            verify = copyDataProperties(sizing, kilo);
            sizing = oscar;
            kilo = report;
            report = copyDataProperties(sizing, kilo);
            report = _closure1_slot11;
            kilo = report.bind(entity)(options);
            sizing = oscar;
            report = copyDataProperties(sizing, kilo);
            kilo = argGrault;
            sizing = oscar;
            report = copyDataProperties(sizing, kilo);
            report = zulu.identifyStartTime;
            options = golf - report;
            report = 'duration_ms_since_identify_start';
            oscar[report] = options;
            report = zulu.connectionStartTime;
            options = golf - report;
            report = 'duration_ms_since_connection_start';
            oscar[report] = options;
            report = global;
            options = report.Date;
            report = options.now;
            report = report.bind(options)();
            golf = report - golf;
            report = 'duration_ms_since_emit_start';
            oscar[report] = golf;
            golf = zulu.hasConnectedOnce;
            report = 'is_reconnect';
            oscar[report] = golf;
            golf = zulu.isFastConnect;
            report = 'is_fast_connect';
            oscar[report] = golf;
            golf = zulu.didForceClearGuildHashes;
            report = 'did_force_clear_guild_hashes';
            oscar[report] = golf;
            golf = zulu.identifyUncompressedByteSize;
            report = 'identify_uncompressed_byte_size';
            oscar[report] = golf;
            golf = zulu.identifyCompressedByteSize;
            report = 'identify_compressed_byte_size';
            oscar[report] = golf;
            report = zulu.analytics;
            report = report.hadCacheAtStartup;
            golf = tango != report;
            if(!golf) { _fun106066_ip = 387; continue _fun106066 }
 384:
            golf = report;
 387:
            report = 'had_cache_at_startup';
            oscar[report] = golf;
            zulu = zulu.analytics;
            zulu = zulu.usedCacheAtStartup;
            tango = tango != zulu;
            if(!tango) { _fun106066_ip = 418; continue _fun106066 }
 415:
            tango = zulu;
 418:
            zulu = 'used_cache_at_startup';
            oscar[zulu] = tango;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 4;
            zulu = report[zulu];
            golf = tango.bind(entity)(zulu);
            zulu = golf.attachReadyPayloadProperties;
            zulu = zulu.bind(golf)(oscar);
            zulu = 5;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot7;
            zulu = mike.READY_PAYLOAD_RECEIVED;
            mike = {};
            golf = true;
            mike['logEventProperties'] = golf;
            mike = tango.bind(report)(zulu, oscar, mike);
            return entity;
        }
    };
    zulu['logReadyPayloadReceived'] = tango;
    tango = function(argFoo) { // Original name: getConnectionPath
        _fun106069: for(var _fun106069_ip = 0; ; ) switch(_fun106069_ip) {
 0:
            mike = argFoo;
            options = undefined;
            zulu = undefined;
            entity = undefined;
 9: // try_start_0
            tango = mike;
            report = tango._trace;
            zulu = report;
            tango = null;
            report = tango == report;
            verify = undefined;
            if(report) { _fun106069_ip = 41; continue _fun106069 }
 32:
            report = zulu;
            zulu = 0;
            verify = report[zulu];
 41:
            report = tango == verify;
            zulu = null;
            if(report) { _fun106069_ip = 86; continue _fun106069 }
 50:
            golf = _closure1_slot9;
            report = global;
            oscar = report.JSON;
            report = oscar.parse;
            oscar = report.bind(oscar)(verify);
            report = '';
            zulu = golf.bind(options)(oscar, report);
 86:
            entity = zulu;
            if(!(tango == zulu)) { _fun106069_ip = 95; continue _fun106069 }
 93: // try_end0
            _fun106069_ip = 99; continue _fun106069;
 95:
            return entity;
 97: // catch_target0
            CatchBlockStart(arg_register=0);
 99:
            entity = mike;
            zulu = entity._trace;
            entity = null;
            zulu = entity != zulu;
            entity = '???';
            if(!zulu) { _fun106069_ip = 145; continue _fun106069 }
 123:
            tango = mike._trace;
            zulu = tango.join;
            mike = ' -> ';
            entity = zulu.bind(tango)(mike);
 145:
            return entity;
        }
    };
    zulu['getConnectionPath'] = tango;
    tango = function(argFoo) { // Original name: getReadyPayloadByteSizeAnalytics
        _fun106070: for(var _fun106070_ip = 0; ; ) switch(_fun106070_ip) {
 0:
            golf = argFoo;
            mike = global;
            tango = mike.Math;
            zulu = tango.random;
            tango = zulu.bind(tango)();
            zulu = 0.01;
            if(!(!(tango > zulu))) { _fun106070_ip = 910; continue _fun106070 }
 40:
            tango = mike.Date;
            zulu = tango.now;
            zulu = zulu.bind(tango)();
            backup = golf.guilds;
            kilo = golf.merged_presences;
            sizing = golf.merged_members;
            config = golf.read_state;
            sequence = golf.private_channels;
            update = golf.user_guild_settings;
            record = golf.user_settings;
            vacuum = golf.user_settings_proto;
            source = golf.experiments;
            control = golf.guild_experiments;
            echo = golf.relationships;
            context = golf.users;
            oscar = _closure1_slot5;
            report = _closure1_slot2;
            tango = undefined;
            report = oscar.bind(tango)(golf, report);
            output = new Array(0);
            var _closure2_slot0 = output;
            romeo = new Array(0);
            var _closure2_slot1 = romeo;
            yankee = new Array(0);
            var _closure2_slot2 = yankee;
            offset = new Array(0);
            var _closure2_slot3 = offset;
            verify = new Array(0);
            var _closure2_slot4 = verify;
            golf = new Array(0);
            var _closure2_slot5 = golf;
            options = new Array(0);
            var _closure2_slot6 = options;
            oscar = new Array(0);
            var _closure2_slot7 = oscar;
            foxtrot = backup.forEach;
            entity = function(argFoo) {
                _fun106071: for(var _fun106071_ip = 0; ; ) switch(_fun106071_ip) {
 0:
                    verify = argFoo;
                    entity = verify.unavailable;
                    if(entity) { _fun106071_ip = 316; continue _fun106071 }
 15:
                    report = verify.properties;
                    entity = null;
                    if(!(entity == report)) { _fun106071_ip = 29; continue _fun106071 }
 27:
                    report = {};
 29:
                    golf = report.features;
                    zulu = _closure1_slot5;
                    tango = _closure1_slot3;
                    mike = undefined;
                    tango = zulu.bind(mike)(report, tango);
                    options = verify.threads;
                    oscar = verify.guild_scheduled_events;
                    entity = _closure1_slot4;
                    zulu = zulu.bind(mike)(verify, entity);
                    yankee = _closure2_slot0;
                    report = yankee.push;
                    mike = verify.data_mode;
                    offset = 'partial';
                    if(!(offset !== mike)) { _fun106071_ip = 110; continue _fun106071 }
 102:
                    mike = verify.channels;
                    _fun106071_ip = 122; continue _fun106071;
 110:
                    romeo = verify.partial_updates;
                    mike = romeo.channels;
 122:
                    mike = report.bind(yankee)(mike);
                    yankee = _closure2_slot1;
                    report = yankee.push;
                    mike = verify.data_mode;
                    if(!(offset !== mike)) { _fun106071_ip = 154; continue _fun106071 }
 146:
                    mike = verify.roles;
                    _fun106071_ip = 166; continue _fun106071;
 154:
                    romeo = verify.partial_updates;
                    mike = romeo.roles;
 166:
                    mike = report.bind(yankee)(mike);
                    yankee = _closure2_slot2;
                    report = yankee.push;
                    mike = verify.data_mode;
                    if(!(offset !== mike)) { _fun106071_ip = 198; continue _fun106071 }
 190:
                    mike = verify.emojis;
                    _fun106071_ip = 210; continue _fun106071;
 198:
                    romeo = verify.partial_updates;
                    mike = romeo.emojis;
 210:
                    mike = report.bind(yankee)(mike);
                    report = _closure2_slot3;
                    mike = report.push;
                    mike = mike.bind(report)(options);
                    options = _closure2_slot4;
                    report = options.push;
                    mike = verify.data_mode;
                    if(!(offset !== mike)) { _fun106071_ip = 256; continue _fun106071 }
 248:
                    mike = verify.stickers;
                    _fun106071_ip = 268; continue _fun106071;
 256:
                    verify = verify.partial_updates;
                    mike = verify.stickers;
 268:
                    mike = report.bind(options)(mike);
                    report = _closure2_slot5;
                    mike = report.push;
                    mike = mike.bind(report)(golf);
                    report = _closure2_slot6;
                    mike = report.push;
                    mike = mike.bind(report)(oscar);
                    mike = _closure2_slot7;
                    entity = mike.push;
                    entity = entity.bind(mike)(zulu, tango);
 316:
                    entity = undefined;
                    return entity;
                }
            };
            entity = foxtrot.bind(backup)(entity);
            entity = {};
            papa = mike.JSON;
            result = papa.stringify;
            backup = null;
            target = backup == kilo;
            foxtrot = undefined;
            if(target) { _fun106070_ip = 260; continue _fun106070 }
 254:
            foxtrot = kilo.friends;
 260:
            if(!(backup == foxtrot)) { _fun106070_ip = 268; continue _fun106070 }
 264:
            foxtrot = new Array(0);
 268:
            foxtrot = result.bind(papa)(foxtrot);
            foxtrot = foxtrot.length;
            entity['presences_size'] = foxtrot;
            result = mike.JSON;
            foxtrot = result.stringify;
            foxtrot = foxtrot.bind(result)(context);
            foxtrot = foxtrot.length;
            entity['users_size'] = foxtrot;
            result = mike.JSON;
            foxtrot = result.stringify;
            foxtrot = foxtrot.bind(result)(config);
            foxtrot = foxtrot.length;
            entity['read_states_size'] = foxtrot;
            result = mike.JSON;
            foxtrot = result.stringify;
            foxtrot = foxtrot.bind(result)(sequence);
            foxtrot = foxtrot.length;
            entity['private_channels_size'] = foxtrot;
            config = mike.JSON;
            sequence = config.stringify;
            context = backup != record;
            foxtrot = '';
            result = foxtrot;
            if(!context) { _fun106070_ip = 393; continue _fun106070 }
 390:
            result = record;
 393:
            result = sequence.bind(config)(result);
            result = result.length;
            sequence = backup != vacuum;
            if(!sequence) { _fun106070_ip = 413; continue _fun106070 }
 410:
            foxtrot = vacuum;
 413:
            foxtrot = foxtrot.length;
            foxtrot = result + foxtrot;
            entity['user_settings_size'] = foxtrot;
            result = mike.JSON;
            foxtrot = result.stringify;
            if(!(backup == source)) { _fun106070_ip = 447; continue _fun106070 }
 443:
            source = new Array(0);
 447:
            foxtrot = foxtrot.bind(result)(source);
            result = foxtrot.length;
            source = mike.JSON;
            foxtrot = source.stringify;
            if(!(backup == control)) { _fun106070_ip = 477; continue _fun106070 }
 473:
            control = new Array(0);
 477:
            foxtrot = foxtrot.bind(source)(control);
            foxtrot = foxtrot.length;
            foxtrot = result + foxtrot;
            entity['experiments_size'] = foxtrot;
            result = mike.JSON;
            foxtrot = result.stringify;
            foxtrot = foxtrot.bind(result)(update);
            foxtrot = foxtrot.length;
            entity['user_guild_settings_size'] = foxtrot;
            result = mike.JSON;
            foxtrot = result.stringify;
            foxtrot = foxtrot.bind(result)(echo);
            foxtrot = foxtrot.length;
            entity['relationships_size'] = foxtrot;
            result = mike.JSON;
            foxtrot = result.stringify;
            if(!(backup == report)) { _fun106070_ip = 568; continue _fun106070 }
 566:
            report = {};
 568:
            report = foxtrot.bind(result)(report);
            report = report.length;
            entity['remaining_data_size'] = report;
            foxtrot = mike.JSON;
            report = foxtrot.stringify;
            report = report.bind(foxtrot)(output);
            report = report.length;
            entity['guild_channels_size'] = report;
            foxtrot = mike.JSON;
            report = foxtrot.stringify;
            if(!(backup == sizing)) { _fun106070_ip = 630; continue _fun106070 }
 626:
            sizing = new Array(0);
 630:
            report = report.bind(foxtrot)(sizing);
            report = report.length;
            entity['guild_members_size'] = report;
            foxtrot = mike.JSON;
            report = foxtrot.stringify;
            sizing = backup == kilo;
            tango = undefined;
            if(sizing) { _fun106070_ip = 672; continue _fun106070 }
 666:
            tango = kilo.guilds;
 672:
            if(!(backup == tango)) { _fun106070_ip = 680; continue _fun106070 }
 676:
            tango = new Array(0);
 680:
            tango = report.bind(foxtrot)(tango);
            tango = tango.length;
            entity['guild_presences_size'] = tango;
            report = mike.JSON;
            tango = report.stringify;
            tango = tango.bind(report)(romeo);
            tango = tango.length;
            entity['guild_roles_size'] = tango;
            report = mike.JSON;
            tango = report.stringify;
            tango = tango.bind(report)(yankee);
            tango = tango.length;
            entity['guild_emojis_size'] = tango;
            report = mike.JSON;
            tango = report.stringify;
            tango = tango.bind(report)(offset);
            tango = tango.length;
            entity['guild_threads_size'] = tango;
            report = mike.JSON;
            tango = report.stringify;
            tango = tango.bind(report)(verify);
            tango = tango.length;
            entity['guild_stickers_size'] = tango;
            report = mike.JSON;
            tango = report.stringify;
            tango = tango.bind(report)(options);
            tango = tango.length;
            entity['guild_events_size'] = tango;
            report = mike.JSON;
            tango = report.stringify;
            tango = tango.bind(report)(golf);
            tango = tango.length;
            entity['guild_features_size'] = tango;
            report = mike.JSON;
            tango = report.stringify;
            tango = tango.bind(report)(oscar);
            tango = tango.length;
            entity['guild_remaining_data_size'] = tango;
            tango = mike.Date;
            mike = tango.now;
            mike = mike.bind(tango)();
            mike = mike - zulu;
            entity['size_metrics_duration_ms'] = mike;
            return entity;
 910:
            entity = undefined;
            return entity;
        }
    };
    zulu['getReadyPayloadByteSizeAnalytics'] = tango;
    tango = function(argFoo) { // Original name: createResumeAnalytics
        _fun106072: for(var _fun106072_ip = 0; ; ) switch(_fun106072_ip) {
 0:
            zulu = argFoo;
            entity = {'connectTime': null, 'numEvents': 0, 'largestWaitTime': 0, 'dispatchTime': 0, 'totalWaitTime': 0, 'initialWaitTime': 0};
            mike = null;
            tango = mike != zulu;
            mike = 0;
            if(!tango) { _fun106072_ip = 31; continue _fun106072 }
 28:
            mike = zulu;
 31:
            entity['connectTime'] = mike;
            mike = global;
            tango = mike.performance;
            zulu = tango.now;
            zulu = zulu.bind(tango)();
            entity['startTime'] = zulu;
            zulu = mike.performance;
            mike = zulu.now;
            mike = mike.bind(zulu)();
            entity['lastUpdateTime'] = mike;
            return entity;
        }
    };
    zulu['createResumeAnalytics'] = tango;
    mike = function(argFoo) { // Original name: logResumeAnalytics
        _fun106073: for(var _fun106073_ip = 0; ; ) switch(_fun106073_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot6;
            zulu = tango.getCurrentUser;
            report = zulu.bind(tango)();
            zulu = null;
            zulu = zulu == report;
            if(zulu) { _fun106073_ip = 41; continue _fun106073 }
 28:
            tango = report.isStaff;
            tango = tango.bind(report)();
            zulu = !tango;
 41:
            if(!zulu) { _fun106073_ip = 76; continue _fun106073 }
 44:
            tango = global;
            report = tango.Math;
            tango = report.random;
            report = tango.bind(report)();
            tango = 0.5;
            zulu = report < tango;
 76:
            if(zulu) { _fun106073_ip = 334; continue _fun106073 }
 82:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 5;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.track;
            mike = _closure1_slot7;
            zulu = mike.CONNECTION_RESUMED;
            mike = {};
            oscar = entity.connectTime;
            mike['connect_time_ms'] = oscar;
            oscar = global;
            verify = oscar.Math;
            options = verify.floor;
            offset = oscar.performance;
            golf = offset.now;
            offset = golf.bind(offset)();
            golf = entity.startTime;
            golf = offset - golf;
            golf = options.bind(verify)(golf);
            mike['resume_time_ms'] = golf;
            golf = entity.numEvents;
            mike['num_events'] = golf;
            verify = oscar.Math;
            options = verify.floor;
            golf = entity.largestWaitTime;
            golf = options.bind(verify)(golf);
            mike['largest_wait_time_ms'] = golf;
            verify = oscar.Math;
            options = verify.floor;
            golf = entity.initialWaitTime;
            golf = options.bind(verify)(golf);
            mike['initial_wait_time_ms'] = golf;
            verify = oscar.Math;
            options = verify.floor;
            golf = entity.totalWaitTime;
            golf = options.bind(verify)(golf);
            mike['total_wait_time_ms'] = golf;
            golf = oscar.Math;
            oscar = golf.floor;
            entity = entity.dispatchTime;
            entity = oscar.bind(golf)(entity);
            mike['total_dispatch_time_ms'] = entity;
            entity = {};
            oscar = true;
            entity['logEventProperties'] = oscar;
            entity = tango.bind(report)(zulu, mike, entity);
 334:
            entity = undefined;
            return entity;
        }
    };
    zulu['logResumeAnalytics'] = mike;
    return entity;
})();