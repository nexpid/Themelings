// app/stores/ExternalStreamingStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot4;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot3;
            entity = _closure1_slot24;
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
            report = _closure1_slot4;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot24 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: makeTwitchRequest
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 10;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.get;
        entity = {};
        verify = _closure1_slot15;
        report = global;
        tangon = report.HermesInternal;
        option = tangon.concat;
        golfie = '';
        tangon = argFoo;
        tangon = option.bind(golfie)(verify, tangon);
        entity['url'] = tangon;
        tangon = argBar;
        entity['query'] = tangon;
        tangon = {};
        oscard = _closure1_slot12;
        tangon['Client-ID'] = oscard;
        report = report.HermesInternal;
        golfie = report.concat;
        oscard = 'Bearer ';
        report = argBaz;
        report = golfie.bind(oscard)(report);
        tangon['Authorization'] = report;
        entity['headers'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _getTwitchGame
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 112; continue _fun00005 }
 10:
                    michal = _closure1_slot21;
                    michal = michal[oscard];
                    option = null;
                    if(!(option == michal)) { _fun00006_ip = 109; continue _fun00005 }
 27:
                    offset = _closure1_slot25;
                    verify = {};
                    verify['id'] = oscard;
                    tangon = undefined;
                    golfie = '/games';
                    zuuluu = argBar;
                    zuuluu = offset.bind(tangon)(golfie, verify, zuuluu);
                    SaveGenerator(address=59);
 57:
                    return zuuluu;
 59:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00006_ip = 106; continue _fun00005 }
 65:
                    golfie = zuuluu.body;
                    verify = golfie.data;
                    golfie = 0;
                    golfie = verify[golfie];
                    option = option == golfie;
                    tangon = undefined;
                    if(option) { _fun00006_ip = 95; continue _fun00005 }
 90:
                    tangon = golfie.name;
 95:
                    report = _closure1_slot21;
                    report[oscard] = tangon;
                    return tangon;
 106:
                    return zuuluu;
 109:
                    return michal;
 112:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot26 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: streamerModeUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = _closure1_slot10;
            entity = entity.enabled;
            michal = _closure1_slot22;
            if(entity) { _fun00008_ip = 31; continue _fun00007 }
 19:
            entity = michal.stop;
            entity = entity.bind(michal)();
            _fun00008_ip = 40; continue _fun00007;
 31:
            entity = michal.start;
            entity = entity.bind(michal)();
 40:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    michal = global;
    offset = michal.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    verify = 0;
    option = oscard[verify];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    romeon = 1;
    option = oscard[romeon];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    offset = 5;
    option = oscard[offset];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 7;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 8;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.PlatformTypes;
    var _closure1_slot11 = option;
    option = '33kozedd0zs6fbauka98psnc7zwom2s';
    var _closure1_slot12 = option;
    option = 9;
    yankee = oscard[option];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.Millis;
    yankee = yankee.MINUTE;
    yankee = romeon * yankee;
    var _closure1_slot13 = yankee;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    option = option.Millis;
    option = option.MINUTE;
    option = offset * option;
    var _closure1_slot14 = option;
    option = 'https://api.twitch.tv/helix';
    var _closure1_slot15 = option;
    option = /live_user_(.*)-\{width\}/;
    var _closure1_slot16 = option;
    option = null;
    var _closure1_slot17 = option;
    var _closure1_slot18 = verify;
    var _closure1_slot19 = option;
    michal = michal.Set;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    sizing = option;
    michal = new sizing[michal](kiloes);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot20 = michal;
    michal = {};
    var _closure1_slot21 = michal;
    michal = function() {
        tangon = _closure1_slot7;
        zuuluu = function() { // Original name: StreamingPoller
            zuuluu = this;
            tangon = _closure1_slot6;
            michal = _closure2_slot2;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = false;
            zuuluu['_started'] = michal;
            return entity;
        };
        var _closure2_slot2 = zuuluu;
        entity = {};
        michal = 'start';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = this;
                entity = zuuluu._started;
                if(entity) { _fun00010_ip = 84; continue _fun00009 }
 12:
                entity = true;
                zuuluu['_started'] = entity;
                tangon = _closure1_slot9;
                michal = tangon.isFetching;
                michal = michal.bind(tangon)();
                if(michal) { _fun00010_ip = 52; continue _fun00009 }
 40:
                michal = zuuluu._check;
                michal = michal.bind(zuuluu)();
                _fun00010_ip = 84; continue _fun00009;
 52:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 11;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.fetch;
                entity = entity.bind(michal)();
 84:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(6);
        michal[0] = entity;
        entity = {};
        report = 'stop';
        entity['key'] = report;
        report = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = this;
                entity = false;
                michal['_started'] = entity;
                tangon = null;
                _closure1_slot19 = tangon;
                zuuluu = 0;
                _closure1_slot18 = zuuluu;
                zuuluu = michal._nextCheck;
                if(!(tangon != zuuluu)) { _fun00012_ip = 57; continue _fun00011 }
 36:
                zuuluu = global;
                tangon = zuuluu.clearTimeout;
                zuuluu = michal._nextCheck;
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
 57:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {'type': 'STREAMING_UPDATE', 'stream': null};
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity['value'] = report;
        michal[1] = entity;
        report = {};
        entity = '_checkTwitch';
        report['key'] = entity;
        verify = _closure1_slot8;
        entity = undefined;
        option = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    tangon = argFoo;
                    michal = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 785; continue _fun00013 }
 18:
                    verify = this;
                    var _closure4_slot0 = verify;
                    oscard = tangon;
                    var _closure4_slot1 = tangon;
                    verify = undefined;
                    if(!(michal === verify)) { _fun00014_ip = 40; continue _fun00013 }
 38:
                    michal = null;
 40:
                    golfie = michal;
                    sequen = undefined;
                    output = undefined;
                    ctrled = undefined;
                    update = undefined;
                    option = undefined;
                    sizing = undefined;
                    foxtra = undefined;
                    kiloes = undefined;
                    backup = undefined;
                    echoed = undefined;
                    romeon = undefined;
                    yankee = undefined;
                    SaveGenerator(address=71);
 69:
                    return verify;
 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 782; continue _fun00013 }
 80:
                    zuuluu = oscard;
                    tangon = zuuluu.revoked;
                    zuuluu = null;
                    if(tangon) { _fun00014_ip = 779; continue _fun00013 }
 97:
                    tangon = golfie;
                    if(!(zuuluu == tangon)) { _fun00014_ip = 113; continue _fun00013 }
 104:
                    offset = oscard;
                    tangon = offset.accessToken;
 113:
                    golfie = tangon;
                    if(!(zuuluu != tangon)) { _fun00014_ip = 776; continue _fun00013 }
 123: // try_start_0
                    config = _closure1_slot25;
                    vacuum = {};
                    tangon = oscard;
                    tangon = tangon.id;
                    vacuum['user_id'] = tangon;
                    source = 1;
                    vacuum['first'] = source;
                    result = golfie;
                    tangon = '/streams';
                    tangon = config.bind(verify)(tangon, vacuum, result);
                    SaveGenerator(address=173);
 171:
                    return tangon;
 173:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=17);
                    if(result) { _fun00014_ip = 666; continue _fun00013 }
 182:
                    result = tangon.body;
                    vacuum = result.data;
                    result = 0;
                    vacuum = vacuum[result];
                    ctrled = vacuum;
                    if(!(zuuluu != vacuum)) { _fun00014_ip = 630; continue _fun00013 }
 208:
                    vacuum = ctrled;
                    config = vacuum.type;
                    vacuum = 'live';
                    if(!(vacuum === config)) { _fun00014_ip = 630; continue _fun00013 }
 227:
                    vacuum = ctrled.thumbnail_url;
                    update = vacuum;
                    option = ctrled.game_id;
                    sizing = ctrled.title;
                    ctrled = {};
                    config = zuuluu != vacuum;
                    vacuum = undefined;
                    if(!config) { _fun00014_ip = 320; continue _fun00013 }
 260:
                    record = _closure1_slot0;
                    cntext = _closure1_slot2;
                    config = 13;
                    config = cntext[config];
                    papara = record.bind(verify)(config);
                    cntext = papara.getAssetFromImageURL;
                    config = _closure1_slot11;
                    record = config.TWITCH;
                    config = update;
                    config = cntext.bind(papara)(record, config);
                    sequen = config;
                    config = zuuluu != config;
                    vacuum = undefined;
                    if(!config) { _fun00014_ip = 320; continue _fun00013 }
 317:
                    vacuum = sequen;
 320:
                    ctrled['large_image'] = vacuum;
                    foxtra = ctrled;
                    vacuum = option;
                    ctrled = golfie;
                    option = function() { // Original name: getTwitchGame
                        entity = undefined;
                        tangon = _closure1_slot26;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    option = option.bind(verify)(vacuum, ctrled);
                    SaveGenerator(address=349);
 347:
                    return option;
 349:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=21);
                    if(ctrled) { _fun00014_ip = 627; continue _fun00013 }
 358:
                    kiloes = option;
                    vacuum = _closure1_slot1;
                    sequen = _closure1_slot2;
                    ctrled = 14;
                    ctrled = sequen[ctrled];
                    sequen = vacuum.bind(verify)(ctrled);
                    vacuum = sequen.get;
                    ctrled = _closure1_slot11;
                    ctrled = ctrled.TWITCH;
                    backup = vacuum.bind(sequen)(ctrled);
                    ctrled = update;
                    update = _closure1_slot16;
                    offset = update.exec;
                    update = offset.bind(update)(ctrled);
                    ctrled = zuuluu == update;
                    offset = undefined;
                    if(ctrled) { _fun00014_ip = 432; continue _fun00013 }
 428:
                    offset = update[source];
 432:
                    output = offset;
                    if(!(zuuluu == offset)) { _fun00014_ip = 449; continue _fun00013 }
 439:
                    offset = oscard;
                    offset = offset.name;
                    _fun00014_ip = 452; continue _fun00013;
 449:
                    offset = output;
 452:
                    echoed = offset;
                    offset = sizing;
                    output = zuuluu != offset;
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
                    romeon = offset;
                    offset = kiloes;
                    sizing = zuuluu != offset;
                    offset = undefined;
                    if(!sizing) { _fun00014_ip = 542; continue _fun00013 }
 512:
                    output = kiloes;
                    sizing = '';
                    offset = undefined;
                    if(!(sizing !== output)) { _fun00014_ip = 542; continue _fun00013 }
 525:
                    output = kiloes;
                    sizing = output.slice;
                    kiloes = 128;
                    offset = sizing.bind(output)(result, kiloes);
 542:
                    yankee = offset;
                    offset = {};
                    kiloes = backup;
                    kiloes = kiloes.getPlatformUserUrl;
                    sizing = zuuluu == kiloes;
                    kiloes = undefined;
                    if(sizing) { _fun00014_ip = 597; continue _fun00013 }
 565:
                    result = backup;
                    output = result.getPlatformUserUrl;
                    sizing = {};
                    update = oscard;
                    update = update.id;
                    sizing['id'] = update;
                    sizing['name'] = echoed;
                    kiloes = output.bind(result)(sizing);
 597:
                    offset['url'] = kiloes;
                    backup = backup.name;
                    offset['name'] = backup;
                    offset['assets'] = foxtra;
                    offset['details'] = romeon;
                    offset['state'] = yankee;
 624: // try_end0
                    return offset;
 627:
                    return option;
 630: // try_start_1
                    option = global;
                    yankee = option.Error;
                    option = yankee.prototype;
                    offset = Object.create(option, {constructor: {value: yankee}});
                    sierra = 'no stream';
                    limora = offset;
                    option = new limora[yankee](sierra, status);
                    option = option instanceof Object ? option : offset;
                    throw option;
 666: // try_end1
                    return tangon;
 669: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    offset = tangon.status;
                    option = 401;
                    tangon = null;
                    if(!(option === offset)) { _fun00014_ip = 773; continue _fun00013 }
 688:
                    golfie = zuuluu == golfie;
                    tangon = null;
                    if(!golfie) { _fun00014_ip = 773; continue _fun00013 }
 697:
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = 11;
                    golfie = offset[golfie];
                    verify = option.bind(verify)(golfie);
                    option = verify.refreshAccessToken;
                    golfie = oscard.type;
                    oscard = oscard.id;
                    option = option.bind(verify)(golfie, oscard);
                    golfie = option.then;
                    oscard = function(argFoo) {
                        tangon = _closure4_slot0;
                        zuuluu = tangon._checkTwitch;
                        michal = _closure4_slot1;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    golfie = golfie.bind(option)(oscard);
                    oscard = golfie.catch;
                    report = function() {
                        entity = null;
                        return entity;
                    };
                    tangon = oscard.bind(golfie)(report);
 773:
                    return tangon;
 776:
                    return zuuluu;
 779:
                    return zuuluu;
 782:
                    return michal;
 785:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        option = verify.bind(entity)(option);
        var _closure2_slot1 = option;
        option = function() { // Original name: _checkTwitch
            entity = undefined;
            tangon = _closure2_slot1;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = option;
        michal[2] = report;
        report = {};
        option = '_checkYouTube';
        report['key'] = option;
        option = _closure1_slot8;
        golfie = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    michal = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 716; continue _fun00015 }
 18:
                    verify = this;
                    var _closure4_slot0 = verify;
                    oscard = golfie;
                    var _closure4_slot1 = golfie;
                    verify = undefined;
                    if(!(michal === verify)) { _fun00016_ip = 40; continue _fun00015 }
 38:
                    michal = null;
 40:
                    option = michal;
                    output = undefined;
                    backup = undefined;
                    kiloes = undefined;
                    romeon = undefined;
                    foxtra = undefined;
                    SaveGenerator(address=57);
 55:
                    return verify;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 713; continue _fun00015 }
 66:
                    zuuluu = null;
                    _closure1_slot19 = zuuluu;
                    offset = oscard;
                    offset = offset.revoked;
                    if(offset) { _fun00016_ip = 710; continue _fun00015 }
 90:
                    sizing = _closure1_slot20;
                    yankee = sizing.has;
                    offset = oscard;
                    offset = offset.id;
                    offset = yankee.bind(sizing)(offset);
                    if(offset) { _fun00016_ip = 710; continue _fun00015 }
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
                    echoed = {};
                    yankee = option;
                    if(!(zuuluu == yankee)) { _fun00016_ip = 198; continue _fun00015 }
 187:
                    yankee = oscard;
                    ctrled = yankee.accessToken;
                    _fun00016_ip = 201; continue _fun00015;
 198:
                    ctrled = option;
 201:
                    yankee = global;
                    update = yankee.HermesInternal;
                    source = update.concat;
                    update = 'Bearer ';
                    update = source.bind(update)(ctrled);
                    echoed['Authorization'] = update;
                    offset['headers'] = echoed;
                    offset = sizing.bind(result)(offset);
                    SaveGenerator(address=245);
 243:
                    return offset;
 245:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=15);
                    if(sizing) { _fun00016_ip = 564; continue _fun00015 }
 254:
                    sizing = offset.body;
                    sizing = sizing.items;
                    backup = sizing;
                    result = sizing.length;
                    sizing = 1;
                    if(!(!(result < sizing))) { _fun00016_ip = 530; continue _fun00015 }
 283:
                    result = 0;
                    backup = backup[result];
                    kiloes = backup.id;
                    backup = backup.snippet;
                    romeon = backup.title;
                    sizing = backup.thumbnails;
                    backup = {};
                    update = _closure1_slot0;
                    source = _closure1_slot2;
                    echoed = 13;
                    echoed = source[echoed];
                    source = update.bind(verify)(echoed);
                    update = source.getAssetFromImageURL;
                    echoed = _closure1_slot11;
                    echoed = echoed.YOUTUBE;
                    sizing = sizing.high;
                    sizing = sizing.url;
                    sizing = update.bind(source)(echoed, sizing);
                    output = sizing;
                    echoed = zuuluu != sizing;
                    sizing = undefined;
                    if(!echoed) { _fun00016_ip = 383; continue _fun00015 }
 380:
                    sizing = output;
 383:
                    backup['large_image'] = sizing;
                    foxtra = backup;
                    backup = romeon;
                    sizing = zuuluu != backup;
                    backup = undefined;
                    if(!sizing) { _fun00016_ip = 433; continue _fun00015 }
 403:
                    output = romeon;
                    sizing = '';
                    backup = undefined;
                    if(!(sizing !== output)) { _fun00016_ip = 433; continue _fun00015 }
 416:
                    output = romeon;
                    sizing = output.slice;
                    romeon = 128;
                    backup = sizing.bind(output)(result, romeon);
 433:
                    romeon = {};
                    output = kiloes;
                    kiloes = yankee.HermesInternal;
                    sizing = kiloes.concat;
                    kiloes = 'https://youtube.com/watch?v=';
                    kiloes = sizing.bind(kiloes)(output);
                    romeon['url'] = kiloes;
                    sizing = _closure1_slot1;
                    output = _closure1_slot2;
                    kiloes = 14;
                    kiloes = output[kiloes];
                    output = sizing.bind(verify)(kiloes);
                    sizing = output.get;
                    kiloes = _closure1_slot11;
                    kiloes = kiloes.YOUTUBE;
                    kiloes = sizing.bind(output)(kiloes);
                    kiloes = kiloes.name;
                    romeon['name'] = kiloes;
                    romeon['details'] = backup;
                    romeon['assets'] = foxtra;
                    _closure1_slot19 = romeon;
 527: // try_end0
                    return romeon;
 530: // try_start_1
                    foxtra = yankee.Error;
                    yankee = foxtra.prototype;
                    romeon = Object.create(yankee, {constructor: {value: foxtra}});
                    sequen = 'no stream';
                    config = romeon;
                    yankee = new config[foxtra](sequen, vacuum);
                    yankee = yankee instanceof Object ? yankee : romeon;
                    throw yankee;
 564: // try_end1
                    return offset;
 567: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    tangon = offset;
                    yankee = offset.status;
                    offset = 401;
                    if(!(offset === yankee)) { _fun00016_ip = 591; continue _fun00015 }
 587:
                    if(!(zuuluu != option)) { _fun00016_ip = 634; continue _fun00015 }
 591:
                    offset = tangon.status;
                    option = 403;
                    tangon = null;
                    if(!(option === offset)) { _fun00016_ip = 707; continue _fun00015 }
 608:
                    yankee = _closure1_slot20;
                    offset = yankee.add;
                    option = oscard;
                    option = option.id;
                    option = offset.bind(yankee)(option);
                    tangon = null;
                    _fun00016_ip = 707; continue _fun00015;
 634:
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = 11;
                    golfie = offset[golfie];
                    verify = option.bind(verify)(golfie);
                    option = verify.refreshAccessToken;
                    golfie = oscard.type;
                    oscard = oscard.id;
                    option = option.bind(verify)(golfie, oscard);
                    golfie = option.then;
                    oscard = function(argFoo) {
                        tangon = _closure4_slot0;
                        zuuluu = tangon._checkYouTube;
                        michal = _closure4_slot1;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    golfie = golfie.bind(option)(oscard);
                    oscard = golfie.catch;
                    report = function() {
                        entity = null;
                        return entity;
                    };
                    tangon = oscard.bind(golfie)(report);
 707:
                    return tangon;
 710:
                    return zuuluu;
 713:
                    return michal;
 716:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot0 = golfie;
        golfie = function() { // Original name: _checkYouTube
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        michal[3] = report;
        report = {};
        golfie = '_check';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = michal._started;
                if(!zuuluu) { _fun00018_ip = 219; continue _fun00017 }
 21:
                report = _closure1_slot9;
                zuuluu = report.getAccounts;
                report = zuuluu.bind(report)();
                oscard = null;
                if(!(oscard != report)) { _fun00018_ip = 219; continue _fun00017 }
 47:
                zuuluu = michal._nextCheck;
                if(!(oscard != zuuluu)) { _fun00018_ip = 78; continue _fun00017 }
 57:
                zuuluu = global;
                oscard = zuuluu.clearTimeout;
                zuuluu = michal._nextCheck;
                michal = undefined;
                michal = oscard.bind(michal)(zuuluu);
 78:
                michal = _closure1_slot11;
                michal = michal.TWITCH;
                option = new Array(1);
                option[0] = michal;
                var _closure3_slot1 = option;
                michal = global;
                oscard = michal.Date;
                zuuluu = oscard.now;
                oscard = zuuluu.bind(oscard)();
                zuuluu = _closure1_slot18;
                if(!(zuuluu <= oscard)) { _fun00018_ip = 157; continue _fun00017 }
 125:
                golfie = option.push;
                zuuluu = _closure1_slot11;
                zuuluu = zuuluu.YOUTUBE;
                zuuluu = golfie.bind(option)(zuuluu);
                zuuluu = _closure1_slot14;
                zuuluu = oscard + zuuluu;
                _closure1_slot18 = zuuluu;
 157:
                tangon = report.filter;
                zuuluu = function(argFoo) {
                    zuuluu = _closure3_slot1;
                    michal = zuuluu.includes;
                    entity = argFoo;
                    entity = entity.type;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                report = tangon.bind(report)(zuuluu);
                tangon = report.map;
                zuuluu = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon.type;
                        entity = _closure1_slot11;
                        entity = entity.TWITCH;
                        if(!(michal !== entity)) { _fun00020_ip = 45; continue _fun00019 }
 25:
                        michal = _closure3_slot0;
                        entity = michal._checkYouTube;
                        entity = entity.bind(michal)(tangon);
                        _fun00020_ip = 63; continue _fun00019;
 45:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu._checkTwitch;
                        entity = michal.bind(zuuluu)(tangon);
 63:
                        return entity;
                    }
                };
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = michal.Promise;
                michal = zuuluu.allSettled;
                zuuluu = michal.bind(zuuluu)(tangon);
                michal = zuuluu.then;
                entity = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        tangon = argFoo;
                        michal = _closure3_slot0;
                        michal = michal._started;
                        if(!michal) { _fun00022_ip = 130; continue _fun00021 }
 19:
                        zuuluu = tangon.find;
                        michal = function(argFoo) {
                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                michal = argFoo;
                                zuuluu = michal.status;
                                entity = 'fulfilled';
                                entity = entity === zuuluu;
                                if(!entity) { _fun00024_ip = 32; continue _fun00023 }
 21:
                                zuuluu = michal.value;
                                michal = null;
                                entity = michal != zuuluu;
 32:
                                return entity;
                            }
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        oscard = null;
                        zuuluu = oscard == michal;
                        tangon = undefined;
                        report = undefined;
                        if(zuuluu) { _fun00022_ip = 54; continue _fun00021 }
 49:
                        report = michal.value;
 54:
                        michal = oscard == report;
                        if(!michal) { _fun00022_ip = 72; continue _fun00021 }
 61:
                        zuuluu = _closure1_slot19;
                        michal = oscard != zuuluu;
 72:
                        if(!michal) { _fun00022_ip = 82; continue _fun00021 }
 75:
                        report = _closure1_slot19;
 82:
                        zuuluu = _closure1_slot1;
                        oscard = _closure1_slot2;
                        michal = 12;
                        michal = oscard[michal];
                        tangon = zuuluu.bind(tangon)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        oscard = 'STREAMING_UPDATE';
                        michal['type'] = oscard;
                        michal['stream'] = report;
                        michal = zuuluu.bind(tangon)(michal);
 130:
                        michal = _closure3_slot0;
                        entity = michal._scheduleCheck;
                        entity = entity.bind(michal)();
                        entity = undefined;
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
 219:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        michal[4] = report;
        report = {};
        golfie = '_scheduleCheck';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = michal._started;
                if(!zuuluu) { _fun00026_ip = 52; continue _fun00025 }
 18:
                zuuluu = global;
                report = zuuluu.setTimeout;
                tangon = _closure1_slot13;
                zuuluu = undefined;
                entity = function() {
                    michal = _closure3_slot0;
                    entity = michal._check;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = report.bind(zuuluu)(entity, tangon);
                michal['_nextCheck'] = entity;
 52:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscard;
        michal[5] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    sizing = option;
    michal = new sizing[michal](kiloes);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot22 = michal;
    michal = 16;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ExternalStreamingStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot6;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot23;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot5;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot7;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            report = this;
            tangon = _closure1_slot27;
            entity = undefined;
            zuuluu = tangon.bind(entity)();
            oscard = report.waitFor;
            zuuluu = _closure1_slot9;
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = report.syncWith;
            oscard = _closure1_slot10;
            michal = new Array(1);
            michal[0] = oscard;
            michal = zuuluu.bind(report)(michal, tangon);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'getStream';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot17;
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'ExternalStreamingStore';
    option['displayName'] = michal;
    michal = 12;
    michal = oscard[michal];
    kiloes = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: streamUpdate
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            michal = argFoo;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 15;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = michal.stream;
            tangon = _closure1_slot17;
            tangon = oscard.bind(entity)(report, tangon);
            if(tangon) { _fun00028_ip = 71; continue _fun00027 }
 47:
            tangon = michal.stream;
            michal = null;
            report = michal != tangon;
            if(!report) { _fun00028_ip = 65; continue _fun00027 }
 62:
            michal = tangon;
 65:
            _closure1_slot17 = michal;
            return entity;
 71:
            entity = false;
            return entity;
        }
    };
    michal['STREAMING_UPDATE'] = verify;
    tangon = function() { // Original name: USER_CONNECTIONS_UPDATE
        michal = _closure1_slot22;
        entity = michal._check;
        entity = entity.bind(michal)();
        return entity;
    };
    michal['USER_CONNECTIONS_UPDATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    sizing = tangon;
    backup = michal;
    michal = new sizing[option](kiloes, backup, foxtra);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/ExternalStreamingStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();