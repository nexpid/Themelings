// app/stores/ExternalStreamingStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot4;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot3;
            entity = _closure1_slot24;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot4;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot24 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: makeTwitchRequest
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.get;
        entity = {};
        verify = _closure1_slot15;
        report = global;
        tango = report.HermesInternal;
        options = tango.concat;
        golf = '';
        tango = argFoo;
        tango = options.bind(golf)(verify, tango);
        entity['url'] = tango;
        tango = argBar;
        entity['query'] = tango;
        tango = {};
        oscar = _closure1_slot12;
        tango['Client-ID'] = oscar;
        report = report.HermesInternal;
        golf = report.concat;
        oscar = 'Bearer ';
        report = argBaz;
        report = golf.bind(oscar)(report);
        tango['Authorization'] = report;
        entity['headers'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _getTwitchGame
        report = undefined;
        entity = undefined;
        tango = _closure1_slot8;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 112; continue _fun00005 }
 10:
                    mike = _closure1_slot21;
                    mike = mike[oscar];
                    options = null;
                    if(!(options == mike)) { _fun00006_ip = 109; continue _fun00005 }
 27:
                    offset = _closure1_slot25;
                    verify = {};
                    verify['id'] = oscar;
                    tango = undefined;
                    golf = '/games';
                    zulu = argBar;
                    zulu = offset.bind(tango)(golf, verify, zulu);
                    SaveGenerator(address=59);
 57:
                    return zulu;
 59:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00006_ip = 106; continue _fun00005 }
 65:
                    golf = zulu.body;
                    verify = golf.data;
                    golf = 0;
                    golf = verify[golf];
                    options = options == golf;
                    tango = undefined;
                    if(options) { _fun00006_ip = 95; continue _fun00005 }
 90:
                    tango = golf.name;
 95:
                    report = _closure1_slot21;
                    report[oscar] = tango;
                    return tango;
 106:
                    return zulu;
 109:
                    return mike;
 112:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot26 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: streamerModeUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = _closure1_slot10;
            entity = entity.enabled;
            mike = _closure1_slot22;
            if(entity) { _fun00008_ip = 31; continue _fun00007 }
 19:
            entity = mike.stop;
            entity = entity.bind(mike)();
            _fun00008_ip = 40; continue _fun00007;
 31:
            entity = mike.start;
            entity = entity.bind(mike)();
 40:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    mike = global;
    offset = mike.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    verify = 0;
    options = oscar[verify];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    romeo = 1;
    options = oscar[romeo];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    offset = 5;
    options = oscar[offset];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 7;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 8;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.PlatformTypes;
    var _closure1_slot11 = options;
    options = '33kozedd0zs6fbauka98psnc7zwom2s';
    var _closure1_slot12 = options;
    options = 9;
    yankee = oscar[options];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.Millis;
    yankee = yankee.MINUTE;
    yankee = romeo * yankee;
    var _closure1_slot13 = yankee;
    options = oscar[options];
    options = golf.bind(entity)(options);
    options = options.Millis;
    options = options.MINUTE;
    options = offset * options;
    var _closure1_slot14 = options;
    options = 'https://api.twitch.tv/helix';
    var _closure1_slot15 = options;
    options = /live_user_(.*)-\{width\}/;
    var _closure1_slot16 = options;
    options = null;
    var _closure1_slot17 = options;
    var _closure1_slot18 = verify;
    var _closure1_slot19 = options;
    mike = mike.Set;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    sizing = options;
    mike = new sizing[mike](kilo);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot20 = mike;
    mike = {};
    var _closure1_slot21 = mike;
    mike = function() {
        tango = _closure1_slot7;
        zulu = function() { // Original name: StreamingPoller
            zulu = this;
            tango = _closure1_slot6;
            mike = _closure2_slot2;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = false;
            zulu['_started'] = mike;
            return entity;
        };
        var _closure2_slot2 = zulu;
        entity = {};
        mike = 'start';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = this;
                entity = zulu._started;
                if(entity) { _fun00010_ip = 84; continue _fun00009 }
 12:
                entity = true;
                zulu['_started'] = entity;
                tango = _closure1_slot9;
                mike = tango.isFetching;
                mike = mike.bind(tango)();
                if(mike) { _fun00010_ip = 52; continue _fun00009 }
 40:
                mike = zulu._check;
                mike = mike.bind(zulu)();
                _fun00010_ip = 84; continue _fun00009;
 52:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 11;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.fetch;
                entity = entity.bind(mike)();
 84:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(6);
        mike[0] = entity;
        entity = {};
        report = 'stop';
        entity['key'] = report;
        report = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = this;
                entity = false;
                mike['_started'] = entity;
                tango = null;
                _closure1_slot19 = tango;
                zulu = 0;
                _closure1_slot18 = zulu;
                zulu = mike._nextCheck;
                if(!(tango != zulu)) { _fun00012_ip = 57; continue _fun00011 }
 36:
                zulu = global;
                tango = zulu.clearTimeout;
                zulu = mike._nextCheck;
                mike = undefined;
                mike = tango.bind(mike)(zulu);
 57:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {'type': 'STREAMING_UPDATE', 'stream': null};
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = report;
        mike[1] = entity;
        report = {};
        entity = '_checkTwitch';
        report['key'] = entity;
        verify = _closure1_slot8;
        entity = undefined;
        options = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    tango = argFoo;
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00014_ip = 785; continue _fun00013 }
 18:
                    verify = this;
                    var _closure4_slot0 = verify;
                    oscar = tango;
                    var _closure4_slot1 = tango;
                    verify = undefined;
                    if(!(mike === verify)) { _fun00014_ip = 40; continue _fun00013 }
 38:
                    mike = null;
 40:
                    golf = mike;
                    sequence = undefined;
                    output = undefined;
                    control = undefined;
                    update = undefined;
                    options = undefined;
                    sizing = undefined;
                    foxtrot = undefined;
                    kilo = undefined;
                    backup = undefined;
                    echo = undefined;
                    romeo = undefined;
                    yankee = undefined;
                    SaveGenerator(address=71);
 69:
                    return verify;
 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00014_ip = 782; continue _fun00013 }
 80:
                    zulu = oscar;
                    tango = zulu.revoked;
                    zulu = null;
                    if(tango) { _fun00014_ip = 779; continue _fun00013 }
 97:
                    tango = golf;
                    if(!(zulu == tango)) { _fun00014_ip = 113; continue _fun00013 }
 104:
                    offset = oscar;
                    tango = offset.accessToken;
 113:
                    golf = tango;
                    if(!(zulu != tango)) { _fun00014_ip = 776; continue _fun00013 }
 123: // try_start_0
                    config = _closure1_slot25;
                    vacuum = {};
                    tango = oscar;
                    tango = tango.id;
                    vacuum['user_id'] = tango;
                    source = 1;
                    vacuum['first'] = source;
                    result = golf;
                    tango = '/streams';
                    tango = config.bind(verify)(tango, vacuum, result);
                    SaveGenerator(address=173);
 171:
                    return tango;
 173:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=17);
                    if(result) { _fun00014_ip = 666; continue _fun00013 }
 182:
                    result = tango.body;
                    vacuum = result.data;
                    result = 0;
                    vacuum = vacuum[result];
                    control = vacuum;
                    if(!(zulu != vacuum)) { _fun00014_ip = 630; continue _fun00013 }
 208:
                    vacuum = control;
                    config = vacuum.type;
                    vacuum = 'live';
                    if(!(vacuum === config)) { _fun00014_ip = 630; continue _fun00013 }
 227:
                    vacuum = control.thumbnail_url;
                    update = vacuum;
                    options = control.game_id;
                    sizing = control.title;
                    control = {};
                    config = zulu != vacuum;
                    vacuum = undefined;
                    if(!config) { _fun00014_ip = 320; continue _fun00013 }
 260:
                    record = _closure1_slot0;
                    context = _closure1_slot2;
                    config = 13;
                    config = context[config];
                    papa = record.bind(verify)(config);
                    context = papa.getAssetFromImageURL;
                    config = _closure1_slot11;
                    record = config.TWITCH;
                    config = update;
                    config = context.bind(papa)(record, config);
                    sequence = config;
                    config = zulu != config;
                    vacuum = undefined;
                    if(!config) { _fun00014_ip = 320; continue _fun00013 }
 317:
                    vacuum = sequence;
 320:
                    control['large_image'] = vacuum;
                    foxtrot = control;
                    vacuum = options;
                    control = golf;
                    options = function() { // Original name: getTwitchGame
                        entity = undefined;
                        tango = _closure1_slot26;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    options = options.bind(verify)(vacuum, control);
                    SaveGenerator(address=349);
 347:
                    return options;
 349:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=21);
                    if(control) { _fun00014_ip = 627; continue _fun00013 }
 358:
                    kilo = options;
                    vacuum = _closure1_slot1;
                    sequence = _closure1_slot2;
                    control = 14;
                    control = sequence[control];
                    sequence = vacuum.bind(verify)(control);
                    vacuum = sequence.get;
                    control = _closure1_slot11;
                    control = control.TWITCH;
                    backup = vacuum.bind(sequence)(control);
                    control = update;
                    update = _closure1_slot16;
                    offset = update.exec;
                    update = offset.bind(update)(control);
                    control = zulu == update;
                    offset = undefined;
                    if(control) { _fun00014_ip = 432; continue _fun00013 }
 428:
                    offset = update[source];
 432:
                    output = offset;
                    if(!(zulu == offset)) { _fun00014_ip = 449; continue _fun00013 }
 439:
                    offset = oscar;
                    offset = offset.name;
                    _fun00014_ip = 452; continue _fun00013;
 449:
                    offset = output;
 452:
                    echo = offset;
                    offset = sizing;
                    output = zulu != offset;
                    offset = undefined;
                    if(!output) { _fun00014_ip = 497; continue _fun00013 }
 467:
                    update = sizing;
                    output = '';
                    offset = undefined;
                    if(!(output !== update)) { _fun00014_ip = 497; continue _fun00013 }
 480:
                    update = sizing;
                    output = update.slice;
                    sizing = 128;
                    offset = output.bind(update)(result, sizing);
 497:
                    romeo = offset;
                    offset = kilo;
                    sizing = zulu != offset;
                    offset = undefined;
                    if(!sizing) { _fun00014_ip = 542; continue _fun00013 }
 512:
                    output = kilo;
                    sizing = '';
                    offset = undefined;
                    if(!(sizing !== output)) { _fun00014_ip = 542; continue _fun00013 }
 525:
                    output = kilo;
                    sizing = output.slice;
                    kilo = 128;
                    offset = sizing.bind(output)(result, kilo);
 542:
                    yankee = offset;
                    offset = {};
                    kilo = backup;
                    kilo = kilo.getPlatformUserUrl;
                    sizing = zulu == kilo;
                    kilo = undefined;
                    if(sizing) { _fun00014_ip = 597; continue _fun00013 }
 565:
                    result = backup;
                    output = result.getPlatformUserUrl;
                    sizing = {};
                    update = oscar;
                    update = update.id;
                    sizing['id'] = update;
                    sizing['name'] = echo;
                    kilo = output.bind(result)(sizing);
 597:
                    offset['url'] = kilo;
                    backup = backup.name;
                    offset['name'] = backup;
                    offset['assets'] = foxtrot;
                    offset['details'] = romeo;
                    offset['state'] = yankee;
 624: // try_end0
                    return offset;
 627:
                    return options;
 630: // try_start_1
                    options = global;
                    yankee = options.Error;
                    options = yankee.prototype;
                    offset = Object.create(options, {constructor: {value: yankee}});
                    sierra = 'no stream';
                    lima = offset;
                    options = new lima[yankee](sierra, status);
                    options = options instanceof Object ? options : offset;
                    throw options;
 666: // try_end1
                    return tango;
 669: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    offset = tango.status;
                    options = 401;
                    tango = null;
                    if(!(options === offset)) { _fun00014_ip = 773; continue _fun00013 }
 688:
                    golf = zulu == golf;
                    tango = null;
                    if(!golf) { _fun00014_ip = 773; continue _fun00013 }
 697:
                    options = _closure1_slot1;
                    offset = _closure1_slot2;
                    golf = 11;
                    golf = offset[golf];
                    verify = options.bind(verify)(golf);
                    options = verify.refreshAccessToken;
                    golf = oscar.type;
                    oscar = oscar.id;
                    options = options.bind(verify)(golf, oscar);
                    golf = options.then;
                    oscar = function(argFoo) {
                        tango = _closure4_slot0;
                        zulu = tango._checkTwitch;
                        mike = _closure4_slot1;
                        entity = argFoo;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    golf = golf.bind(options)(oscar);
                    oscar = golf.catch;
                    report = function() {
                        entity = null;
                        return entity;
                    };
                    tango = oscar.bind(golf)(report);
 773:
                    return tango;
 776:
                    return zulu;
 779:
                    return zulu;
 782:
                    return mike;
 785:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        options = verify.bind(entity)(options);
        var _closure2_slot1 = options;
        options = function() { // Original name: _checkTwitch
            entity = undefined;
            tango = _closure2_slot1;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = options;
        mike[2] = report;
        report = {};
        options = '_checkYouTube';
        report['key'] = options;
        options = _closure1_slot8;
        golf = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00016_ip = 720; continue _fun00015 }
 18:
                    verify = this;
                    var _closure4_slot0 = verify;
                    oscar = golf;
                    var _closure4_slot1 = golf;
                    verify = undefined;
                    if(!(mike === verify)) { _fun00016_ip = 40; continue _fun00015 }
 38:
                    mike = null;
 40:
                    options = mike;
                    output = undefined;
                    backup = undefined;
                    kilo = undefined;
                    romeo = undefined;
                    foxtrot = undefined;
                    SaveGenerator(address=57);
 55:
                    return verify;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00016_ip = 717; continue _fun00015 }
 66:
                    zulu = null;
                    _closure1_slot19 = zulu;
                    offset = oscar;
                    offset = offset.revoked;
                    if(offset) { _fun00016_ip = 714; continue _fun00015 }
 90:
                    sizing = _closure1_slot20;
                    yankee = sizing.has;
                    offset = oscar;
                    offset = offset.id;
                    offset = yankee.bind(sizing)(offset);
                    if(offset) { _fun00016_ip = 714; continue _fun00015 }
 118: // try_start_0
                    yankee = _closure1_slot0;
                    sizing = _closure1_slot2;
                    offset = 10;
                    offset = sizing[offset];
                    offset = yankee.bind(verify)(offset);
                    result = offset.HTTP;
                    sizing = result.get;
                    offset = {'url': 'https://www.googleapis.com/youtube/v3/liveBroadcasts', 'query': null, 'headers': null, 'oldFormErrors': true, 'rejectWithError': false};
                    yankee = {'part': 'id,snippet', 'broadcastStatus': 'active', 'broadcastType': 'all'};
                    offset['query'] = yankee;
                    echo = {};
                    yankee = options;
                    if(!(zulu == yankee)) { _fun00016_ip = 202; continue _fun00015 }
 191:
                    yankee = oscar;
                    control = yankee.accessToken;
                    _fun00016_ip = 205; continue _fun00015;
 202:
                    control = options;
 205:
                    yankee = global;
                    update = yankee.HermesInternal;
                    source = update.concat;
                    update = 'Bearer ';
                    update = source.bind(update)(control);
                    echo['Authorization'] = update;
                    offset['headers'] = echo;
                    offset = sizing.bind(result)(offset);
                    SaveGenerator(address=249);
 247:
                    return offset;
 249:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=15);
                    if(sizing) { _fun00016_ip = 568; continue _fun00015 }
 258:
                    sizing = offset.body;
                    sizing = sizing.items;
                    backup = sizing;
                    result = sizing.length;
                    sizing = 1;
                    if(!(!(result < sizing))) { _fun00016_ip = 534; continue _fun00015 }
 287:
                    result = 0;
                    backup = backup[result];
                    kilo = backup.id;
                    backup = backup.snippet;
                    romeo = backup.title;
                    sizing = backup.thumbnails;
                    backup = {};
                    update = _closure1_slot0;
                    source = _closure1_slot2;
                    echo = 13;
                    echo = source[echo];
                    source = update.bind(verify)(echo);
                    update = source.getAssetFromImageURL;
                    echo = _closure1_slot11;
                    echo = echo.YOUTUBE;
                    sizing = sizing.high;
                    sizing = sizing.url;
                    sizing = update.bind(source)(echo, sizing);
                    output = sizing;
                    echo = zulu != sizing;
                    sizing = undefined;
                    if(!echo) { _fun00016_ip = 387; continue _fun00015 }
 384:
                    sizing = output;
 387:
                    backup['large_image'] = sizing;
                    foxtrot = backup;
                    backup = romeo;
                    sizing = zulu != backup;
                    backup = undefined;
                    if(!sizing) { _fun00016_ip = 437; continue _fun00015 }
 407:
                    output = romeo;
                    sizing = '';
                    backup = undefined;
                    if(!(sizing !== output)) { _fun00016_ip = 437; continue _fun00015 }
 420:
                    output = romeo;
                    sizing = output.slice;
                    romeo = 128;
                    backup = sizing.bind(output)(result, romeo);
 437:
                    romeo = {};
                    output = kilo;
                    kilo = yankee.HermesInternal;
                    sizing = kilo.concat;
                    kilo = 'https://youtube.com/watch?v=';
                    kilo = sizing.bind(kilo)(output);
                    romeo['url'] = kilo;
                    sizing = _closure1_slot1;
                    output = _closure1_slot2;
                    kilo = 14;
                    kilo = output[kilo];
                    output = sizing.bind(verify)(kilo);
                    sizing = output.get;
                    kilo = _closure1_slot11;
                    kilo = kilo.YOUTUBE;
                    kilo = sizing.bind(output)(kilo);
                    kilo = kilo.name;
                    romeo['name'] = kilo;
                    romeo['details'] = backup;
                    romeo['assets'] = foxtrot;
                    _closure1_slot19 = romeo;
 531: // try_end0
                    return romeo;
 534: // try_start_1
                    foxtrot = yankee.Error;
                    yankee = foxtrot.prototype;
                    romeo = Object.create(yankee, {constructor: {value: foxtrot}});
                    sequence = 'no stream';
                    config = romeo;
                    yankee = new config[foxtrot](sequence, vacuum);
                    yankee = yankee instanceof Object ? yankee : romeo;
                    throw yankee;
 568: // try_end1
                    return offset;
 571: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    tango = offset;
                    yankee = offset.status;
                    offset = 401;
                    if(!(offset === yankee)) { _fun00016_ip = 595; continue _fun00015 }
 591:
                    if(!(zulu != options)) { _fun00016_ip = 638; continue _fun00015 }
 595:
                    offset = tango.status;
                    options = 403;
                    tango = null;
                    if(!(options === offset)) { _fun00016_ip = 711; continue _fun00015 }
 612:
                    yankee = _closure1_slot20;
                    offset = yankee.add;
                    options = oscar;
                    options = options.id;
                    options = offset.bind(yankee)(options);
                    tango = null;
                    _fun00016_ip = 711; continue _fun00015;
 638:
                    options = _closure1_slot1;
                    offset = _closure1_slot2;
                    golf = 11;
                    golf = offset[golf];
                    verify = options.bind(verify)(golf);
                    options = verify.refreshAccessToken;
                    golf = oscar.type;
                    oscar = oscar.id;
                    options = options.bind(verify)(golf, oscar);
                    golf = options.then;
                    oscar = function(argFoo) {
                        tango = _closure4_slot0;
                        zulu = tango._checkYouTube;
                        mike = _closure4_slot1;
                        entity = argFoo;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    golf = golf.bind(options)(oscar);
                    oscar = golf.catch;
                    report = function() {
                        entity = null;
                        return entity;
                    };
                    tango = oscar.bind(golf)(report);
 711:
                    return tango;
 714:
                    return zulu;
 717:
                    return mike;
 720:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        golf = options.bind(entity)(golf);
        var _closure2_slot0 = golf;
        golf = function() { // Original name: _checkYouTube
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        mike[3] = report;
        report = {};
        golf = '_check';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                zulu = mike._started;
                if(!zulu) { _fun00018_ip = 219; continue _fun00017 }
 21:
                report = _closure1_slot9;
                zulu = report.getAccounts;
                report = zulu.bind(report)();
                oscar = null;
                if(!(oscar != report)) { _fun00018_ip = 219; continue _fun00017 }
 47:
                zulu = mike._nextCheck;
                if(!(oscar != zulu)) { _fun00018_ip = 78; continue _fun00017 }
 57:
                zulu = global;
                oscar = zulu.clearTimeout;
                zulu = mike._nextCheck;
                mike = undefined;
                mike = oscar.bind(mike)(zulu);
 78:
                mike = _closure1_slot11;
                mike = mike.TWITCH;
                options = new Array(1);
                options[0] = mike;
                var _closure3_slot1 = options;
                mike = global;
                oscar = mike.Date;
                zulu = oscar.now;
                oscar = zulu.bind(oscar)();
                zulu = _closure1_slot18;
                if(!(zulu <= oscar)) { _fun00018_ip = 157; continue _fun00017 }
 125:
                golf = options.push;
                zulu = _closure1_slot11;
                zulu = zulu.YOUTUBE;
                zulu = golf.bind(options)(zulu);
                zulu = _closure1_slot14;
                zulu = oscar + zulu;
                _closure1_slot18 = zulu;
 157:
                tango = report.filter;
                zulu = function(argFoo) {
                    zulu = _closure3_slot1;
                    mike = zulu.includes;
                    entity = argFoo;
                    entity = entity.type;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                report = tango.bind(report)(zulu);
                tango = report.map;
                zulu = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        tango = argFoo;
                        mike = tango.type;
                        entity = _closure1_slot11;
                        entity = entity.TWITCH;
                        if(!(mike !== entity)) { _fun00020_ip = 45; continue _fun00019 }
 25:
                        mike = _closure3_slot0;
                        entity = mike._checkYouTube;
                        entity = entity.bind(mike)(tango);
                        _fun00020_ip = 63; continue _fun00019;
 45:
                        zulu = _closure3_slot0;
                        mike = zulu._checkTwitch;
                        entity = mike.bind(zulu)(tango);
 63:
                        return entity;
                    }
                };
                tango = tango.bind(report)(zulu);
                zulu = mike.Promise;
                mike = zulu.allSettled;
                zulu = mike.bind(zulu)(tango);
                mike = zulu.then;
                entity = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        tango = argFoo;
                        mike = _closure3_slot0;
                        mike = mike._started;
                        if(!mike) { _fun00022_ip = 130; continue _fun00021 }
 19:
                        zulu = tango.find;
                        mike = function(argFoo) {
                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                mike = argFoo;
                                zulu = mike.status;
                                entity = 'fulfilled';
                                entity = entity === zulu;
                                if(!entity) { _fun00024_ip = 32; continue _fun00023 }
 21:
                                zulu = mike.value;
                                mike = null;
                                entity = mike != zulu;
 32:
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
                        oscar = null;
                        zulu = oscar == mike;
                        tango = undefined;
                        report = undefined;
                        if(zulu) { _fun00022_ip = 54; continue _fun00021 }
 49:
                        report = mike.value;
 54:
                        mike = oscar == report;
                        if(!mike) { _fun00022_ip = 72; continue _fun00021 }
 61:
                        zulu = _closure1_slot19;
                        mike = oscar != zulu;
 72:
                        if(!mike) { _fun00022_ip = 82; continue _fun00021 }
 75:
                        report = _closure1_slot19;
 82:
                        zulu = _closure1_slot1;
                        oscar = _closure1_slot2;
                        mike = 12;
                        mike = oscar[mike];
                        tango = zulu.bind(tango)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        oscar = 'STREAMING_UPDATE';
                        mike['type'] = oscar;
                        mike['stream'] = report;
                        mike = zulu.bind(tango)(mike);
 130:
                        mike = _closure3_slot0;
                        entity = mike._scheduleCheck;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
 219:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        mike[4] = report;
        report = {};
        golf = '_scheduleCheck';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                zulu = mike._started;
                if(!zulu) { _fun00026_ip = 52; continue _fun00025 }
 18:
                zulu = global;
                report = zulu.setTimeout;
                tango = _closure1_slot13;
                zulu = undefined;
                entity = function() {
                    mike = _closure3_slot0;
                    entity = mike._check;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = report.bind(zulu)(entity, tango);
                mike['_nextCheck'] = entity;
 52:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscar;
        mike[5] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    sizing = options;
    mike = new sizing[mike](kilo);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot22 = mike;
    mike = 16;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ExternalStreamingStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot6;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot23;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot5;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot7;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            report = this;
            tango = _closure1_slot27;
            entity = undefined;
            zulu = tango.bind(entity)();
            oscar = report.waitFor;
            zulu = _closure1_slot9;
            zulu = oscar.bind(report)(zulu);
            zulu = report.syncWith;
            oscar = _closure1_slot10;
            mike = new Array(1);
            mike[0] = oscar;
            mike = zulu.bind(report)(mike, tango);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getStream';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot17;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ExternalStreamingStore';
    options['displayName'] = mike;
    mike = 12;
    mike = oscar[mike];
    kilo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: streamUpdate
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            mike = argFoo;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 15;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = mike.stream;
            tango = _closure1_slot17;
            tango = oscar.bind(entity)(report, tango);
            if(tango) { _fun00028_ip = 71; continue _fun00027 }
 47:
            tango = mike.stream;
            mike = null;
            report = mike != tango;
            if(!report) { _fun00028_ip = 65; continue _fun00027 }
 62:
            mike = tango;
 65:
            _closure1_slot17 = mike;
            return entity;
 71:
            entity = false;
            return entity;
        }
    };
    mike['STREAMING_UPDATE'] = verify;
    tango = function() { // Original name: USER_CONNECTIONS_UPDATE
        mike = _closure1_slot22;
        entity = mike._check;
        entity = entity.bind(mike)();
        return entity;
    };
    mike['USER_CONNECTIONS_UPDATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    sizing = tango;
    backup = mike;
    mike = new sizing[options](kilo, backup, foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/ExternalStreamingStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();