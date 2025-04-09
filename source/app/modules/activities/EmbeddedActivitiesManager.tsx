// app/modules/activities/EmbeddedActivitiesManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
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
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot32;
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
            golfie = _closure1_slot32;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot31 = entity;
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
    var _closure1_slot32 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
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
            _fun00008_ip = 74; continue _fun00007;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot33 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: getShelfItemTrackingProperties
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            tangon = null;
            report = tangon == zuuluu;
            oscard = undefined;
            michal = undefined;
            if(report) { _fun00010_ip = 103; continue _fun00009 }
 18:
            zuuluu = zuuluu.activity;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00010_ip = 103; continue _fun00009 }
 33:
            tangon = zuuluu.client_platform_config;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            report = 17;
            report = option[report];
            report = golfie.bind(oscard)(report);
            golfie = _closure1_slot0;
            zuuluu = 18;
            zuuluu = option[zuuluu];
            golfie = golfie.bind(oscard)(zuuluu);
            zuuluu = golfie.getOS;
            zuuluu = zuuluu.bind(golfie)();
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon[zuuluu];
            michal = zuuluu.release_phase;
 103:
            entity['releasePhase'] = michal;
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: setAwaitingAnalyticsContext
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            tangon = entity.applicationId;
            golfie = entity.nonce;
            oscard = entity.locations;
            report = entity.source;
            michal = null;
            entity = michal != oscard;
            if(entity) { _fun00012_ip = 38; continue _fun00011 }
 34:
            entity = michal != report;
 38:
            if(!entity) { _fun00012_ip = 70; continue _fun00011 }
 41:
            zuuluu = _closure1_slot28;
            michal = {};
            michal['nonce'] = golfie;
            michal['locations'] = oscard;
            michal['source'] = report;
            zuuluu[tangon] = michal;
            entity = true;
 70:
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo, argBar) { // Original name: clearAwaitingAnalyticsContextImmediate
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot28;
            entity = entity[zuuluu];
            tangon = null;
            if(!(tangon != entity)) { _fun00014_ip = 33; continue _fun00013 }
 20:
            report = entity.nonce;
            tangon = argBar;
            if(!(report !== tangon)) { _fun00014_ip = 37; continue _fun00013 }
 33:
            tangon = undefined;
            return tangon;
 37:
            michal = _closure1_slot28;
            michal = delete michal[zuuluu];
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo, argBar) { // Original name: clearAwaitingAnalyticsContextAsync
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = global;
        tangon = entity.setTimeout;
        entity = undefined;
        zuuluu = function() {
            tangon = _closure1_slot36;
            zuuluu = _closure2_slot0;
            michal = _closure2_slot1;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        michal = 2000;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: handleActivityLaunchStart
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            oscard = michal.applicationId;
            tangon = michal.nonce;
            entity = michal.analyticsLocations;
            report = michal.source;
            zuuluu = _closure1_slot35;
            michal = {};
            michal['applicationId'] = oscard;
            michal['nonce'] = tangon;
            michal['locations'] = entity;
            entity = null;
            oscard = entity != report;
            entity = undefined;
            tangon = undefined;
            if(!oscard) { _fun00016_ip = 64; continue _fun00015 }
 61:
            tangon = report;
 64:
            michal['source'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function() { // Original name: handleActivityClose
        entity = undefined;
        tangon = _closure1_slot40;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot39 = entity;
    entity = function() { // Original name: _handleActivityClose
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00018_ip = 756; continue _fun00017 }
 13:
                    oscard = michal.applicationId;
                    yankee = michal.location;
                    kiloes = michal.instanceId;
                    tangon = undefined;
                    SaveGenerator(address=35);
 33:
                    return tangon;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00018_ip = 753; continue _fun00017 }
 44:
                    option = _closure1_slot19;
                    golfie = option.getEmbeddedActivityDurationMs;
                    zuuluu = yankee.id;
                    romeon = golfie.bind(option)(zuuluu, oscard);
                    golfie = _closure1_slot11;
                    zuuluu = golfie.getSessionId;
                    offset = zuuluu.bind(golfie)();
                    sizing = null;
                    zuuluu = sizing != kiloes;
                    if(!zuuluu) { _fun00018_ip = 97; continue _fun00017 }
 93:
                    zuuluu = sizing != offset;
 97:
                    if(!zuuluu) { _fun00018_ip = 202; continue _fun00017 }
 100:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 19;
                    zuuluu = option[zuuluu];
                    zuuluu = golfie.bind(tangon)(zuuluu);
                    option = zuuluu.HTTP;
                    golfie = option.post;
                    zuuluu = {};
                    backup = _closure1_slot23;
                    foxtra = backup.ACTIVITY_LEAVE;
                    verify = yankee.id;
                    verify = foxtra.bind(backup)(oscard, verify, kiloes);
                    zuuluu['url'] = verify;
                    verify = {};
                    verify['session_id'] = offset;
                    zuuluu['body'] = verify;
                    verify = 2;
                    zuuluu['retries'] = verify;
                    verify = false;
                    zuuluu['rejectWithError'] = verify;
                    zuuluu = golfie.bind(option)(zuuluu);
                    SaveGenerator(address=193);
 191:
                    return zuuluu;
 193:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00018_ip = 750; continue _fun00017 }
 202:
                    golfie = _closure1_slot27;
                    backup = golfie[oscard];
                    verify = _closure1_slot12;
                    option = verify.getChannel;
                    offset = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    golfie = 20;
                    golfie = foxtra[golfie];
                    offset = offset.bind(tangon)(golfie);
                    golfie = offset.getEmbeddedActivityLocationChannelId;
                    golfie = golfie.bind(offset)(yankee);
                    result = option.bind(verify)(golfie);
                    option = _closure1_slot15;
                    golfie = option.getCurrentUser;
                    source = golfie.bind(option)();
                    if(!(sizing != backup)) { _fun00018_ip = 747; continue _fun00017 }
 275:
                    if(!(sizing != source)) { _fun00018_ip = 747; continue _fun00017 }
 282:
                    golfie = sizing == result;
                    kiloes = undefined;
                    if(golfie) { _fun00018_ip = 301; continue _fun00017 }
 291:
                    golfie = result.getGuildId;
                    kiloes = golfie.bind(result)();
 301:
                    option = _closure1_slot19;
                    golfie = option.getShelfActivities;
                    foxtra = golfie.bind(option)(kiloes);
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    verify = 21;
                    verify = golfie[verify];
                    offset = option.bind(tangon)(verify);
                    verify = {};
                    verify['applicationId'] = oscard;
                    verify['activityConfigs'] = foxtra;
                    update = offset.bind(tangon)(verify);
                    verify = _closure1_slot34;
                    verify = verify.bind(tangon)(update);
                    echoed = verify.releasePhase;
                    verify = 22;
                    verify = golfie[verify];
                    offset = option.bind(tangon)(verify);
                    verify = offset.getRawThermalState;
                    foxtra = verify.bind(offset)();
                    verify = 23;
                    golfie = golfie[verify];
                    output = option.bind(tangon)(golfie);
                    offset = output.track;
                    golfie = _closure1_slot20;
                    option = golfie.ACTIVITY_SESSION_LEFT;
                    golfie = {};
                    vacuum = sizing == result;
                    ctrled = undefined;
                    if(vacuum) { _fun00018_ip = 432; continue _fun00017 }
 427:
                    ctrled = result.id;
 432:
                    golfie['channel_id'] = ctrled;
                    golfie['guild_id'] = kiloes;
                    vacuum = backup.mediaSessionIds;
                    ctrled = 0;
                    ctrled = vacuum[ctrled];
                    golfie['media_session_id'] = ctrled;
                    ctrled = backup.activitySessionId;
                    golfie['activity_session_id'] = ctrled;
                    golfie['application_id'] = oscard;
                    golfie['duration_ms'] = romeon;
                    source = source.premiumType;
                    golfie['user_premium_tier'] = source;
                    golfie['raw_thermal_state'] = foxtra;
                    golfie['release_phase'] = echoed;
                    source = sizing == update;
                    echoed = undefined;
                    if(source) { _fun00018_ip = 529; continue _fun00017 }
 508:
                    update = update.activity;
                    source = sizing == update;
                    echoed = undefined;
                    if(source) { _fun00018_ip = 529; continue _fun00017 }
 523:
                    echoed = update.shelf_rank;
 529:
                    golfie['shelf_rank'] = echoed;
                    echoed = backup.activityUserSessionId;
                    golfie['activity_user_session_id'] = echoed;
                    update = sizing == result;
                    echoed = undefined;
                    if(update) { _fun00018_ip = 559; continue _fun00017 }
 554:
                    echoed = result.type;
 559:
                    golfie['channel_type'] = echoed;
                    echoed = backup.mediaSessionIds;
                    golfie['media_session_ids'] = echoed;
                    echoed = yankee.kind;
                    golfie['embedded_activity_location_kind'] = echoed;
                    golfie = offset.bind(output)(option, golfie);
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[verify];
                    offset = option.bind(tangon)(golfie);
                    verify = offset.track;
                    golfie = _closure1_slot20;
                    option = golfie.ACTIVITY_IFRAME_UNMOUNT;
                    golfie = {};
                    echoed = sizing == result;
                    output = undefined;
                    if(echoed) { _fun00018_ip = 639; continue _fun00017 }
 634:
                    output = result.id;
 639:
                    golfie['channel_id'] = output;
                    golfie['guild_id'] = kiloes;
                    golfie['application_id'] = oscard;
                    kiloes = backup.launchId;
                    sizing = sizing != kiloes;
                    kiloes = undefined;
                    if(!sizing) { _fun00018_ip = 684; continue _fun00017 }
 667:
                    output = backup.launchId;
                    sizing = new Array(1);
                    sizing[0] = output;
                    kiloes = sizing;
 684:
                    golfie['instance_ids'] = kiloes;
                    kiloes = backup.mediaSessionIds;
                    golfie['media_session_ids'] = kiloes;
                    backup = backup.activityUserSessionId;
                    golfie['activity_user_session_id'] = backup;
                    golfie['raw_thermal_state'] = foxtra;
                    golfie['duration_ms'] = romeon;
                    yankee = yankee.kind;
                    golfie['embedded_activity_location_kind'] = yankee;
                    golfie = verify.bind(offset)(option, golfie);
                    report = _closure1_slot27;
                    report = delete report[oscard];
 747:
                    return tangon;
 750:
                    return zuuluu;
 753:
                    return michal;
 756:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot40 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: handleOpenEmbeddedActivity
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            result = entity.applicationId;
            var _closure2_slot0 = result;
            golfie = entity.isFirstActivityInChannel;
            yankee = entity.isStart;
            report = entity.participants;
            output = entity.embeddedActivity;
            oscard = entity.location;
            sequen = entity.inviterUserId;
            tangon = _closure1_slot11;
            entity = tangon.getId;
            entity = entity.bind(tangon)();
            var _closure2_slot1 = entity;
            tangon = report.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.userId;
                entity = _closure2_slot1;
                entity = michal === entity;
                return entity;
            };
            tangon = tangon.bind(report)(entity);
            option = _closure1_slot0;
            entity = _closure1_slot2;
            romeon = 20;
            report = entity[romeon];
            entity = undefined;
            option = option.bind(entity)(report);
            report = option.getEmbeddedActivityLocationChannelId;
            offset = report.bind(option)(oscard);
            option = null;
            if(!(option == offset)) { _fun00020_ip = 152; continue _fun00019 }
 124:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[romeon];
            verify = verify.bind(entity)(report);
            report = verify.getEmbeddedActivityLocationStartingChannelId;
            offset = report.bind(verify)(oscard);
 152:
            verify = _closure1_slot12;
            report = verify.getChannel;
            source = report.bind(verify)(offset);
            report = yankee;
            if(!report) { _fun00020_ip = 176; continue _fun00019 }
 172:
            report = option != source;
 176:
            if(!report) { _fun00020_ip = 189; continue _fun00019 }
 179:
            verify = source.isPrivate;
            report = verify.bind(source)();
 189:
            if(!report) { _fun00020_ip = 195; continue _fun00019 }
 192:
            report = golfie;
 195:
            if(!report) { _fun00020_ip = 202; continue _fun00019 }
 198:
            report = option == tangon;
 202:
            if(!report) { _fun00020_ip = 242; continue _fun00019 }
 205:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            report = 24;
            report = verify[report];
            verify = golfie.bind(entity)(report);
            golfie = verify.selectParticipant;
            report = source.id;
            report = golfie.bind(verify)(report, option);
 242:
            if(!(option != tangon)) { _fun00020_ip = 1256; continue _fun00019 }
 249:
            golfie = _closure1_slot13;
            report = golfie.getMediaSessionId;
            report = report.bind(golfie)();
            record = output.compositeInstanceId;
            golfie = option == report;
            if(!golfie) { _fun00020_ip = 301; continue _fun00019 }
 276:
            verify = option == source;
            offset = undefined;
            if(verify) { _fun00020_ip = 295; continue _fun00019 }
 285:
            verify = source.isVocal;
            offset = verify.bind(source)();
 295:
            verify = true;
            golfie = verify === offset;
 301:
            if(!golfie) { _fun00020_ip = 329; continue _fun00019 }
 304:
            verify = option == source;
            offset = undefined;
            if(verify) { _fun00020_ip = 323; continue _fun00019 }
 313:
            verify = source.isPrivate;
            offset = verify.bind(source)();
 323:
            verify = false;
            golfie = verify === offset;
 329:
            if(!(option != record)) { _fun00020_ip = 1256; continue _fun00019 }
 336:
            if(golfie) { _fun00020_ip = 1256; continue _fun00019 }
 342:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 25;
            golfie = offset[golfie];
            verify = verify.bind(entity)(golfie);
            golfie = verify.v4;
            backup = golfie.bind(verify)();
            golfie = 'location';
            offset = golfie in output;
            verify = 1;
            golfie = verify;
            if(!offset) { _fun00020_ip = 392; continue _fun00019 }
 389:
            golfie = 2;
 392:
            offset = option == source;
            echoed = undefined;
            if(offset) { _fun00020_ip = 411; continue _fun00019 }
 401:
            offset = source.getGuildId;
            echoed = offset.bind(source)();
 411:
            romeon = _closure1_slot15;
            offset = romeon.getCurrentUser;
            config = offset.bind(romeon)();
            if(!(option != config)) { _fun00020_ip = 1256; continue _fun00019 }
 431:
            romeon = _closure1_slot19;
            offset = romeon.getShelfActivities;
            update = offset.bind(romeon)(echoed);
            romeon = _closure1_slot16;
            offset = romeon.getState;
            offset = offset.bind(romeon)();
            sizing = offset.shelfOrder;
            foxtra = _closure1_slot1;
            kiloes = _closure1_slot2;
            offset = 21;
            offset = kiloes[offset];
            romeon = foxtra.bind(entity)(offset);
            offset = {};
            offset['applicationId'] = result;
            offset['activityConfigs'] = update;
            romeon = romeon.bind(entity)(offset);
            offset = sizing.findIndex;
            zuuluu = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity === michal;
                return entity;
            };
            zuuluu = offset.bind(sizing)(zuuluu);
            verify = verify + zuuluu;
            zuuluu = _closure1_slot34;
            zuuluu = zuuluu.bind(entity)(romeon);
            offset = zuuluu.releasePhase;
            zuuluu = 22;
            zuuluu = kiloes[zuuluu];
            foxtra = foxtra.bind(entity)(zuuluu);
            zuuluu = foxtra.getRawThermalState;
            foxtra = zuuluu.bind(foxtra)();
            if(!(option == report)) { _fun00020_ip = 569; continue _fun00019 }
 563:
            sizing = new Array(0);
            _fun00020_ip = 580; continue _fun00019;
 569:
            zuuluu = new Array(1);
            zuuluu[0] = report;
            sizing = zuuluu;
 580:
            report = {};
            report['activitySessionId'] = record;
            report['activityUserSessionId'] = backup;
            zuuluu = output.launchId;
            report['launchId'] = zuuluu;
            report['mediaSessionIds'] = sizing;
            report['activitiesInfraVersion'] = golfie;
            zuuluu = _closure1_slot27;
            zuuluu[result] = report;
            zuuluu = _closure1_slot28;
            ctrled = zuuluu[result];
            report = _closure1_slot0;
            kiloes = _closure1_slot2;
            zuuluu = 26;
            zuuluu = kiloes[zuuluu];
            kiloes = report.bind(entity)(zuuluu);
            report = kiloes.isNullOrEmpty;
            zuuluu = tangon.nonce;
            zuuluu = report.bind(kiloes)(zuuluu);
            if(zuuluu) { _fun00020_ip = 696; continue _fun00019 }
 671:
            report = tangon.nonce;
            kiloes = option == ctrled;
            tangon = undefined;
            if(kiloes) { _fun00020_ip = 692; continue _fun00019 }
 686:
            tangon = ctrled.nonce;
 692:
            zuuluu = report === tangon;
 696:
            if(zuuluu) { _fun00020_ip = 701; continue _fun00019 }
 699:
            ctrled = undefined;
 701:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            report = 23;
            zuuluu = zuuluu[report];
            vacuum = tangon.bind(entity)(zuuluu);
            update = vacuum.track;
            zuuluu = _closure1_slot20;
            tangon = zuuluu.ACTIVITY_SESSION_JOINED;
            zuuluu = {};
            cntext = option == source;
            kiloes = undefined;
            if(cntext) { _fun00020_ip = 752; continue _fun00019 }
 747:
            kiloes = source.id;
 752:
            zuuluu['channel_id'] = kiloes;
            zuuluu['guild_id'] = echoed;
            kiloes = 0;
            cntext = sizing[kiloes];
            zuuluu['media_session_id'] = cntext;
            zuuluu['activity_session_id'] = record;
            zuuluu['application_id'] = result;
            cntext = option == ctrled;
            record = undefined;
            if(cntext) { _fun00020_ip = 796; continue _fun00019 }
 790:
            record = ctrled.locations;
 796:
            zuuluu['location_stack'] = record;
            config = config.premiumType;
            zuuluu['user_premium_tier'] = config;
            zuuluu['raw_thermal_state'] = foxtra;
            record = option != source;
            config = null;
            if(!record) { _fun00020_ip = 846; continue _fun00019 }
 826:
            papara = _closure1_slot9;
            cntext = papara.getUserParticipantCount;
            record = source.id;
            config = cntext.bind(papara)(record);
 846:
            zuuluu['n_participants'] = config;
            zuuluu['is_activity_start'] = yankee;
            zuuluu['release_phase'] = offset;
            config = option == romeon;
            offset = undefined;
            if(config) { _fun00020_ip = 893; continue _fun00019 }
 872:
            config = romeon.activity;
            record = option == config;
            offset = undefined;
            if(record) { _fun00020_ip = 893; continue _fun00019 }
 887:
            offset = config.shelf_rank;
 893:
            zuuluu['shelf_rank'] = offset;
            offset = verify > kiloes;
            config = null;
            if(!offset) { _fun00020_ip = 910; continue _fun00019 }
 907:
            config = verify;
 910:
            zuuluu['shelf_sorted_rank'] = config;
            zuuluu['activity_user_session_id'] = backup;
            record = option == source;
            config = undefined;
            if(record) { _fun00020_ip = 934; continue _fun00019 }
 929:
            config = source.type;
 934:
            zuuluu['channel_type'] = config;
            record = option == ctrled;
            config = undefined;
            if(record) { _fun00020_ip = 953; continue _fun00019 }
 948:
            config = ctrled.source;
 953:
            zuuluu['source'] = config;
            record = option != source;
            config = null;
            if(!record) { _fun00020_ip = 998; continue _fun00019 }
 966:
            cntext = _closure1_slot0;
            papara = _closure1_slot2;
            record = 27;
            record = papara[record];
            cntext = cntext.bind(entity)(record);
            record = cntext.computeCommandContextType;
            config = record.bind(cntext)(source, result);
 998:
            zuuluu['command_context_type'] = config;
            zuuluu['invite_inviter_id'] = sequen;
            config = option == ctrled;
            sequen = undefined;
            if(config) { _fun00020_ip = 1025; continue _fun00019 }
 1019:
            sequen = ctrled.interactionId;
 1025:
            zuuluu['interaction_id'] = sequen;
            sequen = oscard.kind;
            zuuluu['embedded_activity_location_kind'] = sequen;
            zuuluu = update.bind(vacuum)(tangon, zuuluu);
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot20;
            zuuluu = michal.ACTIVITY_IFRAME_MOUNT;
            michal = {};
            vacuum = option == ctrled;
            update = undefined;
            if(vacuum) { _fun00020_ip = 1097; continue _fun00019 }
 1091:
            update = ctrled.locations;
 1097:
            michal['location_stack'] = update;
            ctrled = option == source;
            update = undefined;
            if(ctrled) { _fun00020_ip = 1116; continue _fun00019 }
 1111:
            update = source.id;
 1116:
            michal['channel_id'] = update;
            ctrled = option == source;
            update = undefined;
            if(ctrled) { _fun00020_ip = 1134; continue _fun00019 }
 1129:
            update = source.type;
 1134:
            michal['channel_type'] = update;
            michal['guild_id'] = echoed;
            michal['application_id'] = result;
            output = output.launchId;
            michal['instance_id'] = output;
            kiloes = sizing[kiloes];
            michal['initial_media_session_id'] = kiloes;
            michal['activity_user_session_id'] = backup;
            michal['raw_thermal_state'] = foxtra;
            michal['is_activity_start'] = yankee;
            foxtra = option == romeon;
            yankee = undefined;
            if(foxtra) { _fun00020_ip = 1215; continue _fun00019 }
 1194:
            romeon = romeon.activity;
            foxtra = option == romeon;
            yankee = undefined;
            if(foxtra) { _fun00020_ip = 1215; continue _fun00019 }
 1209:
            yankee = romeon.shelf_rank;
 1215:
            michal['shelf_rank'] = yankee;
            option = null;
            if(!offset) { _fun00020_ip = 1228; continue _fun00019 }
 1225:
            option = verify;
 1228:
            michal['shelf_sorted_rank'] = option;
            michal['activities_infra_version'] = golfie;
            oscard = oscard.kind;
            michal['embedded_activity_location_kind'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 1256:
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    yankee = 0;
    tangon = golfie[yankee];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    offset = 1;
    tangon = golfie[offset];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    verify = 2;
    tangon = golfie[verify];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 13;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 14;
    option = golfie[tangon];
    option = report.bind(entity)(option);
    var _closure1_slot17 = option;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.DevShelfFetchState;
    var _closure1_slot18 = tangon;
    tangon = 15;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot19 = tangon;
    tangon = 16;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.AnalyticEvents;
    var _closure1_slot20 = option;
    option = tangon.AbortCodes;
    var _closure1_slot21 = option;
    option = tangon.RPCCloseCodes;
    var _closure1_slot22 = option;
    option = tangon.Endpoints;
    var _closure1_slot23 = option;
    option = tangon.RTCConnectionStates;
    var _closure1_slot24 = option;
    tangon = tangon.ComponentActions;
    var _closure1_slot25 = tangon;
    tangon = {};
    tangon['ClientError'] = yankee;
    option = 'ClientError';
    tangon[yankee] = option;
    tangon['CallbackError'] = offset;
    option = 'CallbackError';
    tangon[offset] = option;
    tangon['ApiError'] = verify;
    option = 'ApiError';
    tangon[verify] = option;
    var _closure1_slot26 = tangon;
    tangon = {};
    var _closure1_slot27 = tangon;
    tangon = {};
    var _closure1_slot28 = tangon;
    tangon = {};
    var _closure1_slot29 = tangon;
    var _closure1_slot30 = entity;
    tangon = 45;
    tangon = golfie[tangon];
    report = report.bind(entity)(tangon);
    tangon = function(argFoo) {
        tangon = function(argFoo) { // Original name: EmbeddedActivitiesManager
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot3;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                option = option.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot5;
                entity = _closure1_slot33;
                entity = entity.bind(tangon)();
                if(entity) { _fun00022_ip = 86; continue _fun00021 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00022_ip = 120; continue _fun00021;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                zuuluu = function() {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        michal = _closure1_slot14;
                        entity = michal.getVoiceChannelId;
                        tangon = entity.bind(michal)();
                        oscard = _closure1_slot31;
                        michal = _closure1_slot19;
                        entity = michal.getSelfEmbeddedActivities;
                        michal = entity.bind(michal)();
                        entity = michal.values;
                        michal = entity.bind(michal)();
                        entity = undefined;
                        yankee = oscard.bind(entity)(michal);
                        golfie = yankee.bind(entity)();
                        oscard = golfie.done;
                        verify = 28;
                        option = 20;
                        michal = null;
                        if(oscard) { _fun00024_ip = 201; continue _fun00023 }
 79:
                        oscard = golfie.value;
                        kiloes = oscard.location;
                        backup = oscard.applicationId;
                        romeon = _closure1_slot0;
                        oscard = _closure1_slot2;
                        oscard = oscard[option];
                        romeon = romeon.bind(entity)(oscard);
                        oscard = romeon.getEmbeddedActivityLocationChannelId;
                        romeon = oscard.bind(romeon)(kiloes);
                        oscard = michal != romeon;
                        if(!oscard) { _fun00024_ip = 151; continue _fun00023 }
 129:
                        sizing = _closure1_slot1;
                        foxtra = _closure1_slot2;
                        foxtra = foxtra[verify];
                        foxtra = sizing.bind(entity)(foxtra);
                        oscard = foxtra.bind(entity)(romeon);
 151:
                        if(!oscard) { _fun00024_ip = 158; continue _fun00023 }
 154:
                        oscard = romeon !== tangon;
 158:
                        if(!oscard) { _fun00024_ip = 186; continue _fun00023 }
 161:
                        foxtra = _closure3_slot0;
                        romeon = foxtra.leaveActivity;
                        oscard = {};
                        oscard['location'] = kiloes;
                        oscard['applicationId'] = backup;
                        oscard = romeon.bind(foxtra)(oscard);
 186:
                        romeon = yankee.bind(entity)();
                        oscard = romeon.done;
                        golfie = romeon;
                        if(!oscard) { _fun00024_ip = 79; continue _fun00023 }
 201:
                        if(!(michal != tangon)) { _fun00024_ip = 253; continue _fun00023 }
 205:
                        golfie = _closure1_slot19;
                        oscard = golfie.getEmbeddedActivitiesForChannel;
                        golfie = oscard.bind(golfie)(tangon);
                        option = _closure1_slot11;
                        oscard = option.getId;
                        oscard = oscard.bind(option)();
                        var _closure4_slot0 = oscard;
                        oscard = golfie.forEach;
                        report = function(argFoo) {
                            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                                tangon = argFoo;
                                zuuluu = tangon.userIds;
                                michal = zuuluu.has;
                                entity = _closure4_slot0;
                                entity = michal.bind(zuuluu)(entity);
                                if(!entity) { _fun00026_ip = 182; continue _fun00025 }
 32:
                                report = _closure1_slot0;
                                zuuluu = _closure1_slot2;
                                michal = 20;
                                zuuluu = zuuluu[michal];
                                michal = undefined;
                                report = report.bind(michal)(zuuluu);
                                zuuluu = report.getEmbeddedActivityLocationChannelId;
                                michal = tangon.location;
                                report = zuuluu.bind(report)(michal);
                                zuuluu = _closure1_slot19;
                                michal = zuuluu.getSelfEmbeddedActivityForChannel;
                                report = michal.bind(zuuluu)(report);
                                michal = null;
                                if(!(michal != report)) { _fun00026_ip = 144; continue _fun00025 }
 94:
                                entity = _closure1_slot30;
                                if(!(michal == entity)) { _fun00026_ip = 182; continue _fun00025 }
 102:
                                zuuluu = _closure3_slot0;
                                michal = zuuluu.hidePIPEmbed;
                                entity = {};
                                oscard = report.location;
                                entity['location'] = oscard;
                                report = report.applicationId;
                                entity['applicationId'] = report;
                                entity = michal.bind(zuuluu)(entity);
                                _fun00026_ip = 182; continue _fun00025;
 144:
                                zuuluu = _closure3_slot0;
                                michal = zuuluu.leaveActivity;
                                entity = {};
                                report = tangon.location;
                                entity['location'] = report;
                                tangon = tangon.applicationId;
                                entity['applicationId'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
 182:
                                entity = undefined;
                                return entity;
                            }
                        };
                        report = oscard.bind(golfie)(report);
 253:
                        report = michal != tangon;
                        michal = undefined;
                        if(!report) { _fun00024_ip = 265; continue _fun00023 }
 262:
                        michal = tangon;
 265:
                        _closure1_slot30 = michal;
                        return entity;
                    }
                };
                entity['handleSelectedChannelUpdate'] = zuuluu;
                zuuluu = function() {
                    michal = _closure3_slot0;
                    entity = michal.releaseWebView;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                entity['handleActivityWebViewRelease'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        entity = argFoo;
                        report = entity.nonce;
                        tangon = entity.applicationId;
                        zuuluu = _closure1_slot37;
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(tangon, report);
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 29;
                        michal = tangon[michal];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.isUsingDevShelfActivityUrlOverride;
                        michal = michal.bind(zuuluu)();
                        if(!michal) { _fun00028_ip = 81; continue _fun00027 }
 62:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.showDevShelfOverrideEnabled;
                        michal = michal.bind(zuuluu)();
 81:
                        return entity;
                    }
                };
                entity['handleActivityLaunchSuccess'] = zuuluu;
                zuuluu = function() {
                    tangon = _closure1_slot8;
                    zuuluu = undefined;
                    michal = function* (argFoo) {
                        entity = function* (argFoo) { // Original name: ?anon_0_
                            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                                StartGenerator();
                                michal = argFoo;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(zuuluu) { _fun00030_ip = 1531; continue _fun00029 }
 13:
                                oscard = michal.error;
                                golfie = michal.nonce;
                                update = michal.channelId;
                                result = michal.applicationId;
                                kiloes = michal.isStart;
                                verify = michal.locationKind;
                                tangon = undefined;
                                SaveGenerator(address=52);
 50:
                                return tangon;
 52:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(zuuluu) { _fun00030_ip = 1528; continue _fun00029 }
 61:
                                zuuluu = _closure1_slot36;
                                yankee = zuuluu.bind(tangon)(result, golfie);
                                romeon = _closure1_slot0;
                                zuuluu = _closure1_slot2;
                                source = 30;
                                golfie = zuuluu[source];
                                golfie = romeon.bind(tangon)(golfie);
                                offset = golfie.intl;
                                option = offset.string;
                                golfie = zuuluu[source];
                                golfie = romeon.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.IOy+Iy;
                                sizing = option.bind(offset)(golfie);
                                golfie = _closure1_slot1;
                                vacuum = 31;
                                zuuluu = zuuluu[vacuum];
                                zuuluu = golfie.bind(tangon)(zuuluu);
                                zuuluu = oscard instanceof zuuluu;
                                if(zuuluu) { _fun00030_ip = 880; continue _fun00029 }
 155:
                                golfie = _closure1_slot1;
                                option = _closure1_slot2;
                                zuuluu = 34;
                                zuuluu = option[zuuluu];
                                zuuluu = golfie.bind(tangon)(zuuluu);
                                golfie = oscard instanceof zuuluu;
                                zuuluu = _closure1_slot26;
                                if(golfie) { _fun00030_ip = 802; continue _fun00029 }
 189:
                                echoed = zuuluu.ApiError;
                                output = oscard.status;
                                offset = oscard.code;
                                ctrled = oscard.code;
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_ACTIVITY_LAUNCH_NO_ACCESS;
                                if(!(golfie !== ctrled)) { _fun00030_ip = 736; continue _fun00029 }
 227:
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER;
                                if(!(golfie !== ctrled)) { _fun00030_ip = 668; continue _fun00029 }
 244:
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_PERMISSIONS;
                                if(!(golfie !== ctrled)) { _fun00030_ip = 602; continue _fun00029 }
 261:
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL;
                                if(!(golfie !== ctrled)) { _fun00030_ip = 536; continue _fun00029 }
 278:
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_ACTIVITY_LAUNCH_AGE_GATED;
                                if(!(golfie !== ctrled)) { _fun00030_ip = 470; continue _fun00029 }
 295:
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE;
                                if(!(golfie !== ctrled)) { _fun00030_ip = 404; continue _fun00029 }
 309:
                                golfie = _closure1_slot21;
                                golfie = golfie.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM;
                                backup = echoed;
                                foxtra = output;
                                romeon = offset;
                                option = sizing;
                                if(!(golfie === ctrled)) { _fun00030_ip = 1304; continue _fun00029 }
 338:
                                config = _closure1_slot0;
                                golfie = _closure1_slot2;
                                ctrled = golfie[source];
                                ctrled = config.bind(tangon)(ctrled);
                                sequen = ctrled.intl;
                                ctrled = sequen.string;
                                golfie = golfie[source];
                                golfie = config.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.uGDCc3;
                                option = ctrled.bind(sequen)(golfie);
                                backup = echoed;
                                foxtra = output;
                                romeon = offset;
                                _fun00030_ip = 1304; continue _fun00029;
 404:
                                config = _closure1_slot0;
                                golfie = _closure1_slot2;
                                ctrled = golfie[source];
                                ctrled = config.bind(tangon)(ctrled);
                                sequen = ctrled.intl;
                                ctrled = sequen.string;
                                golfie = golfie[source];
                                golfie = config.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.RvkXdX;
                                option = ctrled.bind(sequen)(golfie);
                                backup = echoed;
                                foxtra = output;
                                romeon = offset;
                                _fun00030_ip = 1304; continue _fun00029;
 470:
                                config = _closure1_slot0;
                                golfie = _closure1_slot2;
                                ctrled = golfie[source];
                                ctrled = config.bind(tangon)(ctrled);
                                sequen = ctrled.intl;
                                ctrled = sequen.string;
                                golfie = golfie[source];
                                golfie = config.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.4WuFRE;
                                option = ctrled.bind(sequen)(golfie);
                                backup = echoed;
                                foxtra = output;
                                romeon = offset;
                                _fun00030_ip = 1304; continue _fun00029;
 536:
                                config = _closure1_slot0;
                                golfie = _closure1_slot2;
                                ctrled = golfie[source];
                                ctrled = config.bind(tangon)(ctrled);
                                sequen = ctrled.intl;
                                ctrled = sequen.string;
                                golfie = golfie[source];
                                golfie = config.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.j29zCg;
                                option = ctrled.bind(sequen)(golfie);
                                backup = echoed;
                                foxtra = output;
                                romeon = offset;
                                _fun00030_ip = 1304; continue _fun00029;
 602:
                                config = _closure1_slot0;
                                golfie = _closure1_slot2;
                                ctrled = golfie[source];
                                ctrled = config.bind(tangon)(ctrled);
                                sequen = ctrled.intl;
                                ctrled = sequen.string;
                                golfie = golfie[source];
                                golfie = config.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.hHGrW1;
                                option = ctrled.bind(sequen)(golfie);
                                backup = echoed;
                                foxtra = output;
                                romeon = offset;
                                _fun00030_ip = 1304; continue _fun00029;
 668:
                                config = _closure1_slot0;
                                golfie = _closure1_slot2;
                                ctrled = golfie[source];
                                ctrled = config.bind(tangon)(ctrled);
                                sequen = ctrled.intl;
                                ctrled = sequen.string;
                                golfie = golfie[source];
                                golfie = config.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.zxv7EB;
                                option = ctrled.bind(sequen)(golfie);
                                backup = echoed;
                                foxtra = output;
                                romeon = offset;
                                _fun00030_ip = 1304; continue _fun00029;
 736:
                                config = _closure1_slot0;
                                golfie = _closure1_slot2;
                                ctrled = golfie[source];
                                ctrled = config.bind(tangon)(ctrled);
                                sequen = ctrled.intl;
                                ctrled = sequen.string;
                                golfie = golfie[source];
                                golfie = config.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.Gyzcra;
                                option = ctrled.bind(sequen)(golfie);
                                backup = echoed;
                                foxtra = output;
                                romeon = offset;
                                _fun00030_ip = 1304; continue _fun00029;
 802:
                                offset = zuuluu.CallbackError;
                                golfie = oscard.reason;
                                output = _closure1_slot0;
                                echoed = _closure1_slot2;
                                zuuluu = 35;
                                zuuluu = echoed[zuuluu];
                                echoed = output.bind(tangon)(zuuluu);
                                output = echoed.interactionCallbackErrorReason;
                                zuuluu = oscard.reason;
                                output = output.bind(echoed)(zuuluu, result);
                                echoed = null;
                                zuuluu = sizing;
                                if(!(echoed != output)) { _fun00030_ip = 864; continue _fun00029 }
 861:
                                zuuluu = output;
 864:
                                option = zuuluu;
                                backup = offset;
                                foxtra = undefined;
                                romeon = golfie;
                                _fun00030_ip = 1304; continue _fun00029;
 880:
                                zuuluu = _closure1_slot26;
                                offset = zuuluu.ClientError;
                                golfie = oscard.reason;
                                output = _closure1_slot17;
                                zuuluu = output.getFetchState;
                                echoed = zuuluu.bind(output)();
                                output = _closure1_slot0;
                                ctrled = _closure1_slot2;
                                zuuluu = 32;
                                zuuluu = ctrled[zuuluu];
                                zuuluu = output.bind(tangon)(zuuluu);
                                output = zuuluu.DeveloperMode;
                                zuuluu = output.getSetting;
                                zuuluu = zuuluu.bind(output)();
                                if(!zuuluu) { _fun00030_ip = 963; continue _fun00029 }
 949:
                                output = _closure1_slot18;
                                output = output.LOADED;
                                zuuluu = echoed !== output;
 963:
                                if(!zuuluu) { _fun00030_ip = 1009; continue _fun00029 }
 966:
                                output = _closure1_slot0;
                                echoed = _closure1_slot2;
                                zuuluu = 33;
                                zuuluu = echoed[zuuluu];
                                output = output.bind(tangon)(zuuluu);
                                zuuluu = output.fetchDeveloperApplications;
                                zuuluu = zuuluu.bind(output)();
                                SaveGenerator(address=1000);
 998:
                                return zuuluu;
 1000:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=16);
                                if(output) { _fun00030_ip = 1525; continue _fun00029 }
 1009:
                                echoed = oscard.reason;
                                ctrled = _closure1_slot1;
                                output = _closure1_slot2;
                                output = output[vacuum];
                                output = ctrled.bind(tangon)(output);
                                output = output.Reasons;
                                output = output.PRIMARY_APP_COMMAND_NOT_FOUND;
                                if(!(output !== echoed)) { _fun00030_ip = 1213; continue _fun00029 }
 1051:
                                ctrled = _closure1_slot1;
                                output = _closure1_slot2;
                                output = output[vacuum];
                                output = ctrled.bind(tangon)(output);
                                output = output.Reasons;
                                output = output.INVALID_CHANNEL;
                                if(!(output !== echoed)) { _fun00030_ip = 1151; continue _fun00029 }
 1084:
                                ctrled = _closure1_slot1;
                                output = _closure1_slot2;
                                output = output[vacuum];
                                output = ctrled.bind(tangon)(output);
                                output = output.Reasons;
                                output = output.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                                backup = offset;
                                foxtra = undefined;
                                romeon = golfie;
                                option = sizing;
                                if(!(output === echoed)) { _fun00030_ip = 1304; continue _fun00029 }
 1131:
                                foxtra = oscard.detailCode;
                                backup = offset;
                                romeon = golfie;
                                option = sizing;
                                _fun00030_ip = 1304; continue _fun00029;
 1151:
                                ctrled = _closure1_slot0;
                                oscard = _closure1_slot2;
                                output = oscard[source];
                                output = ctrled.bind(tangon)(output);
                                echoed = output.intl;
                                output = echoed.string;
                                oscard = oscard[source];
                                oscard = ctrled.bind(tangon)(oscard);
                                oscard = oscard.t;
                                oscard = oscard.j29zCg;
                                option = output.bind(echoed)(oscard);
                                backup = offset;
                                foxtra = undefined;
                                romeon = golfie;
                                _fun00030_ip = 1304; continue _fun00029;
 1213:
                                output = _closure1_slot17;
                                oscard = output.inDevModeForApplication;
                                oscard = oscard.bind(output)(result);
                                backup = offset;
                                foxtra = undefined;
                                romeon = golfie;
                                option = sizing;
                                if(!oscard) { _fun00030_ip = 1304; continue _fun00029 }
 1242:
                                echoed = _closure1_slot0;
                                oscard = _closure1_slot2;
                                sizing = oscard[source];
                                sizing = echoed.bind(tangon)(sizing);
                                output = sizing.intl;
                                sizing = output.string;
                                oscard = oscard[source];
                                oscard = echoed.bind(tangon)(oscard);
                                oscard = oscard.t;
                                oscard = oscard.hXRXf3;
                                option = sizing.bind(output)(oscard);
                                backup = offset;
                                foxtra = undefined;
                                romeon = golfie;
 1304:
                                golfie = _closure3_slot0;
                                oscard = golfie.showLaunchErrorModal;
                                oscard = oscard.bind(golfie)(option);
                                golfie = _closure1_slot12;
                                oscard = golfie.getChannel;
                                sizing = oscard.bind(golfie)(update);
                                offset = null;
                                oscard = offset == sizing;
                                echoed = undefined;
                                if(oscard) { _fun00030_ip = 1357; continue _fun00029 }
 1347:
                                oscard = sizing.getGuildId;
                                echoed = oscard.bind(sizing)();
 1357:
                                golfie = _closure1_slot1;
                                option = _closure1_slot2;
                                oscard = 22;
                                oscard = option[oscard];
                                output = golfie.bind(tangon)(oscard);
                                oscard = output.getRawThermalState;
                                output = oscard.bind(output)();
                                oscard = 23;
                                oscard = option[oscard];
                                option = golfie.bind(tangon)(oscard);
                                golfie = option.track;
                                report = _closure1_slot20;
                                oscard = report.ACTIVITY_SESSION_JOIN_FAILED;
                                report = {};
                                report['channel_id'] = update;
                                report['guild_id'] = echoed;
                                report['application_id'] = result;
                                report['raw_thermal_state'] = output;
                                report['is_activity_start'] = kiloes;
                                output = offset == sizing;
                                kiloes = undefined;
                                if(output) { _fun00030_ip = 1453; continue _fun00029 }
 1448:
                                kiloes = sizing.type;
 1453:
                                report['channel_type'] = kiloes;
                                sizing = offset == yankee;
                                kiloes = undefined;
                                if(sizing) { _fun00030_ip = 1473; continue _fun00029 }
 1467:
                                kiloes = yankee.locations;
 1473:
                                report['location_stack'] = kiloes;
                                report['error_type'] = backup;
                                report['error_status'] = foxtra;
                                report['error_code'] = romeon;
                                romeon = offset == yankee;
                                offset = undefined;
                                if(romeon) { _fun00030_ip = 1507; continue _fun00029 }
 1502:
                                offset = yankee.source;
 1507:
                                report['source'] = offset;
                                report['embedded_activity_location_kind'] = verify;
                                report = golfie.bind(option)(oscard, report);
                                return tangon;
 1525:
                                return zuuluu;
 1528:
                                return michal;
 1531:
                                return entity;
                            }
                        };
                        michal = entity.next;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    var _closure4_slot0 = michal;
                    entity = function() {
                        entity = undefined;
                        tangon = _closure4_slot0;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)();
                entity['handleActivityLaunchFail'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        entity = argFoo;
                        tangon = entity.reason;
                        entity = entity.application;
                        zuuluu = entity.id;
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00032_ip = 255; continue _fun00031 }
 28:
                        if(!(entity != tangon)) { _fun00032_ip = 255; continue _fun00031 }
 35:
                        report = _closure1_slot31;
                        oscard = _closure1_slot19;
                        entity = oscard.getSelfEmbeddedActivities;
                        oscard = entity.bind(oscard)();
                        entity = oscard.values;
                        entity = entity.bind(oscard)();
                        golfie = undefined;
                        option = report.bind(golfie)(entity);
                        oscard = option.bind(golfie)();
                        report = oscard.done;
                        if(report) { _fun00032_ip = 146; continue _fun00031 }
 87:
                        verify = oscard.value;
                        report = verify.applicationId;
                        yankee = verify.location;
                        if(!(report === zuuluu)) { _fun00032_ip = 131; continue _fun00031 }
 106:
                        offset = _closure3_slot0;
                        verify = offset.leaveActivity;
                        report = {};
                        report['location'] = yankee;
                        report['applicationId'] = zuuluu;
                        report = verify.bind(offset)(report);
 131:
                        verify = option.bind(golfie)();
                        report = verify.done;
                        oscard = verify;
                        if(!report) { _fun00032_ip = 87; continue _fun00031 }
 146:
                        oscard = tangon.code;
                        report = _closure1_slot22;
                        report = report.CLOSE_NORMAL;
                        if(!(oscard !== report)) { _fun00032_ip = 255; continue _fun00031 }
 165:
                        oscard = _closure1_slot1;
                        option = _closure1_slot2;
                        report = 23;
                        report = option[report];
                        golfie = oscard.bind(golfie)(report);
                        oscard = golfie.track;
                        michal = _closure1_slot20;
                        report = michal.ACTIVITY_CLOSED_RPC_ERROR;
                        michal = {};
                        option = tangon.code;
                        michal['rpc_close_code'] = option;
                        option = tangon.message;
                        michal['rpc_message'] = option;
                        michal['application_id'] = zuuluu;
                        michal = oscard.bind(golfie)(report, michal);
                        michal = _closure3_slot0;
                        entity = michal.showErrorModal;
                        entity = entity.bind(michal)(tangon, zuuluu);
 255:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['superHandleRPCDisconnect'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.channelId;
                        michal = _closure1_slot14;
                        entity = michal.getVoiceChannelId;
                        michal = entity.bind(michal)();
                        entity = null;
                        entity = entity != michal;
                        if(!entity) { _fun00034_ip = 38; continue _fun00033 }
 34:
                        entity = michal === zuuluu;
 38:
                        if(!entity) { _fun00034_ip = 59; continue _fun00033 }
 41:
                        michal = _closure3_slot0;
                        entity = michal.handleCallEnded;
                        entity = entity.bind(michal)(zuuluu);
 59:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleCallDelete'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.state;
                        michal = _closure1_slot24;
                        michal = michal.DISCONNECTED;
                        if(!(zuuluu === michal)) { _fun00036_ip = 48; continue _fun00035 }
 25:
                        zuuluu = entity.channelId;
                        michal = _closure3_slot0;
                        entity = michal.handleCallEnded;
                        entity = entity.bind(michal)(zuuluu);
 48:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleRTCConnectionState'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                        zuuluu = _closure1_slot19;
                        michal = zuuluu.getSelfEmbeddedActivityForChannel;
                        entity = argFoo;
                        tangon = michal.bind(zuuluu)(entity);
                        entity = null;
                        if(!(entity != tangon)) { _fun00038_ip = 65; continue _fun00037 }
 27:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.leaveActivity;
                        entity = {};
                        report = tangon.location;
                        entity['location'] = report;
                        tangon = tangon.applicationId;
                        entity['applicationId'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
 65:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleCallEnded'] = zuuluu;
                zuuluu = function() {
                    tangon = _closure1_slot8;
                    zuuluu = undefined;
                    michal = function* (argFoo) {
                        entity = function* (argFoo) { // Original name: ?anon_0_
                            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                                StartGenerator();
                                michal = argFoo;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(zuuluu) { _fun00040_ip = 946; continue _fun00039 }
 15:
                                kiloes = michal.channelId;
                                foxtra = michal.applicationId;
                                var _closure6_slot0 = foxtra;
                                yankee = michal.analyticsLocations;
                                sizing = michal.commandOrigin;
                                offset = michal.inviterUserId;
                                zuuluu = undefined;
                                SaveGenerator(address=53);
 51:
                                return zuuluu;
 53:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(tangon) { _fun00040_ip = 943; continue _fun00039 }
 62:
                                report = _closure1_slot12;
                                tangon = report.getChannel;
                                verify = tangon.bind(report)(kiloes);
                                if(!(zuuluu !== verify)) { _fun00040_ip = 940; continue _fun00039 }
 86:
                                oscard = _closure1_slot10;
                                report = oscard.has;
                                romeon = null;
                                backup = romeon == verify;
                                tangon = undefined;
                                if(backup) { _fun00040_ip = 111; continue _fun00039 }
 106:
                                tangon = verify.type;
 111:
                                tangon = report.bind(oscard)(tangon);
                                if(!tangon) { _fun00040_ip = 140; continue _fun00039 }
 119:
                                report = _closure1_slot14;
                                tangon = report.getVoiceChannelId;
                                tangon = tangon.bind(report)();
                                if(!(tangon === kiloes)) { _fun00040_ip = 940; continue _fun00039 }
 140:
                                report = _closure1_slot19;
                                tangon = report.getSelfEmbeddedActivityForChannel;
                                report = tangon.bind(report)(kiloes);
                                oscard = romeon == report;
                                tangon = undefined;
                                if(oscard) { _fun00040_ip = 169; continue _fun00039 }
 164:
                                tangon = report.applicationId;
 169:
                                if(!(tangon !== foxtra)) { _fun00040_ip = 940; continue _fun00039 }
 176:
                                report = _closure1_slot1;
                                oscard = _closure1_slot2;
                                tangon = 36;
                                tangon = oscard[tangon];
                                report = report.bind(zuuluu)(tangon);
                                tangon = report.fetchApplication;
                                tangon = tangon.bind(report)(foxtra);
                                SaveGenerator(address=211);
 209:
                                return tangon;
 211:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                if(report) { _fun00040_ip = 937; continue _fun00039 }
 220:
                                oscard = _closure1_slot0;
                                backup = _closure1_slot2;
                                report = 37;
                                report = backup[report];
                                oscard = oscard.bind(zuuluu)(report);
                                report = oscard.getIsActivitiesEnabledForCurrentPlatform;
                                report = report.bind(oscard)(verify);
                                if(report) { _fun00040_ip = 332; continue _fun00039 }
 254:
                                backup = _closure3_slot0;
                                oscard = backup.showLaunchErrorModal;
                                echoed = _closure1_slot0;
                                update = _closure1_slot2;
                                report = 30;
                                output = update[report];
                                output = echoed.bind(zuuluu)(output);
                                result = output.intl;
                                output = result.string;
                                report = update[report];
                                report = echoed.bind(zuuluu)(report);
                                report = report.t;
                                report = report.UXoQTk;
                                report = output.bind(result)(report);
                                report = oscard.bind(backup)(report);
                                _fun00040_ip = 940; continue _fun00039;
 332:
                                oscard = _closure1_slot1;
                                backup = _closure1_slot2;
                                report = 38;
                                report = backup[report];
                                oscard = oscard.bind(zuuluu)(report);
                                backup = romeon == tangon;
                                report = undefined;
                                if(backup) { _fun00040_ip = 382; continue _fun00039 }
 361:
                                backup = tangon.embedded_activity_config;
                                output = romeon == backup;
                                report = undefined;
                                if(output) { _fun00040_ip = 382; continue _fun00039 }
 376:
                                report = backup.supported_platforms;
 382:
                                report = oscard.bind(zuuluu)(report);
                                if(report) { _fun00040_ip = 468; continue _fun00039 }
 390:
                                backup = _closure3_slot0;
                                oscard = backup.showLaunchErrorModal;
                                echoed = _closure1_slot0;
                                update = _closure1_slot2;
                                report = 30;
                                output = update[report];
                                output = echoed.bind(zuuluu)(output);
                                result = output.intl;
                                output = result.string;
                                report = update[report];
                                report = echoed.bind(zuuluu)(report);
                                report = report.t;
                                report = report.uGDCc3;
                                report = output.bind(result)(report);
                                report = oscard.bind(backup)(report);
                                _fun00040_ip = 940; continue _fun00039;
 468:
                                oscard = romeon == verify;
                                report = undefined;
                                if(oscard) { _fun00040_ip = 487; continue _fun00039 }
 477:
                                oscard = verify.getGuildId;
                                report = oscard.bind(verify)();
 487:
                                oscard = romeon != report;
                                result = undefined;
                                if(!oscard) { _fun00040_ip = 499; continue _fun00039 }
 496:
                                result = report;
 499:
                                oscard = _closure1_slot0;
                                report = _closure1_slot2;
                                backup = 33;
                                report = report[backup];
                                verify = oscard.bind(zuuluu)(report);
                                oscard = verify.fetchShelf;
                                report = {};
                                report['guildId'] = result;
                                report = oscard.bind(verify)(report);
                                SaveGenerator(address=540);
 538:
                                return report;
 540:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                                if(oscard) { _fun00040_ip = 934; continue _fun00039 }
 549:
                                update = report.activityConfigs;
                                echoed = report.applications;
                                verify = _closure1_slot1;
                                oscard = _closure1_slot2;
                                output = 21;
                                oscard = oscard[output];
                                verify = verify.bind(zuuluu)(oscard);
                                oscard = {};
                                oscard['applicationId'] = foxtra;
                                oscard['activityConfigs'] = update;
                                oscard['applications'] = echoed;
                                oscard = verify.bind(zuuluu)(oscard);
                                if(!(romeon == oscard)) { _fun00040_ip = 710; continue _fun00039 }
 606:
                                verify = _closure1_slot0;
                                oscard = _closure1_slot2;
                                oscard = oscard[backup];
                                backup = verify.bind(zuuluu)(oscard);
                                verify = backup.fetchShelf;
                                oscard = {};
                                oscard['guildId'] = result;
                                result = true;
                                oscard['force'] = result;
                                oscard = verify.bind(backup)(oscard);
                                SaveGenerator(address=651);
 649:
                                return oscard;
 651:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                                if(verify) { _fun00040_ip = 931; continue _fun00039 }
 660:
                                backup = _closure1_slot1;
                                verify = _closure1_slot2;
                                verify = verify[output];
                                backup = backup.bind(zuuluu)(verify);
                                verify = {};
                                verify['applicationId'] = foxtra;
                                output = oscard.activityConfigs;
                                verify['activityConfigs'] = output;
                                output = oscard.applications;
                                verify['applications'] = output;
                                verify = backup.bind(zuuluu)(verify);
 710:
                                backup = _closure1_slot19;
                                verify = backup.getEmbeddedActivitiesForChannel;
                                backup = verify.bind(backup)(kiloes);
                                verify = backup.find;
                                option = function(argFoo) {
                                    entity = argFoo;
                                    michal = entity.applicationId;
                                    entity = _closure6_slot0;
                                    entity = michal === entity;
                                    return entity;
                                };
                                backup = verify.bind(backup)(option);
                                option = romeon == backup;
                                output = undefined;
                                if(option) { _fun00040_ip = 760; continue _fun00039 }
 749:
                                option = backup.userIds;
                                output = option.size;
 760:
                                result = romeon != output;
                                verify = 0;
                                option = 0;
                                if(!result) { _fun00040_ip = 774; continue _fun00039 }
 771:
                                option = output;
 774:
                                if(!(!(option > verify))) { _fun00040_ip = 842; continue _fun00039 }
 778:
                                verify = _closure1_slot1;
                                output = _closure1_slot2;
                                option = 40;
                                option = output[option];
                                verify = verify.bind(zuuluu)(option);
                                option = {};
                                option['targetApplicationId'] = foxtra;
                                option['channelId'] = kiloes;
                                option['analyticsLocations'] = yankee;
                                option['commandOrigin'] = sizing;
                                option['inviterUserId'] = offset;
                                option = verify.bind(zuuluu)(option);
                                SaveGenerator(address=833);
 831:
                                return option;
 833:
                                ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                                if(!verify) { _fun00040_ip = 940; continue _fun00039 }
 839:
                                return option;
 842:
                                option = _closure1_slot0;
                                verify = _closure1_slot2;
                                golfie = 39;
                                golfie = verify[golfie];
                                verify = option.bind(zuuluu)(golfie);
                                option = verify.maybeJoinEmbeddedActivity;
                                golfie = {};
                                golfie['channelId'] = kiloes;
                                golfie['applicationId'] = foxtra;
                                kiloes = romeon == backup;
                                foxtra = undefined;
                                if(kiloes) { _fun00040_ip = 893; continue _fun00039 }
 887:
                                foxtra = backup.launchId;
 893:
                                golfie['launchId'] = foxtra;
                                golfie['inputApplication'] = romeon;
                                golfie['analyticsLocations'] = yankee;
                                golfie['inviterUserId'] = offset;
                                golfie = option.bind(verify)(golfie);
                                SaveGenerator(address=922);
 920:
                                return golfie;
 922:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                                if(!option) { _fun00040_ip = 940; continue _fun00039 }
 928:
                                return golfie;
 931:
                                return oscard;
 934:
                                return report;
 937:
                                return tangon;
 940:
                                return zuuluu;
 943:
                                return michal;
 946:
                                return entity;
                            }
                        };
                        michal = entity.next;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    var _closure4_slot0 = michal;
                    entity = function() {
                        entity = undefined;
                        tangon = _closure4_slot0;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)();
                entity['handleDeferredOpen'] = zuuluu;
                zuuluu = function(argFoo) {
                    michal = argFoo;
                    michal = michal.guild;
                    var _closure4_slot0 = michal;
                    zuuluu = _closure1_slot19;
                    michal = zuuluu.getSelfEmbeddedActivities;
                    zuuluu = michal.bind(zuuluu)();
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                            entity = argFoo;
                            oscard = entity.location;
                            report = entity.applicationId;
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 20;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.getEmbeddedActivityLocationGuildId;
                            zuuluu = michal.bind(zuuluu)(oscard);
                            michal = _closure4_slot0;
                            michal = michal.id;
                            if(!(michal === zuuluu)) { _fun00042_ip = 93; continue _fun00041 }
 65:
                            tangon = _closure3_slot0;
                            zuuluu = tangon.leaveActivity;
                            michal = {};
                            michal['location'] = oscard;
                            michal['applicationId'] = report;
                            michal = zuuluu.bind(tangon)(michal);
 93:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleGuildDelete'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                        entity = argFoo;
                        entity = entity.channel;
                        zuuluu = _closure1_slot19;
                        michal = zuuluu.getSelfEmbeddedActivityForChannel;
                        entity = entity.id;
                        tangon = michal.bind(zuuluu)(entity);
                        entity = null;
                        if(!(entity != tangon)) { _fun00044_ip = 75; continue _fun00043 }
 37:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.leaveActivity;
                        entity = {};
                        report = tangon.location;
                        entity['location'] = report;
                        tangon = tangon.applicationId;
                        entity['applicationId'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
 75:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleChannelDelete'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.nonce;
                        entity = entity.data;
                        report = _closure1_slot28;
                        tangon = entity.applicationId;
                        report = report[tangon];
                        tangon = null;
                        if(!(tangon == report)) { _fun00046_ip = 327; continue _fun00045 }
 39:
                        report = entity.interactionType;
                        golfie = _closure1_slot0;
                        tangon = _closure1_slot2;
                        option = 41;
                        tangon = tangon[option];
                        oscard = undefined;
                        tangon = golfie.bind(oscard)(tangon);
                        tangon = tangon.InteractionTypes;
                        tangon = tangon.APPLICATION_COMMAND;
                        if(!(report !== tangon)) { _fun00046_ip = 244; continue _fun00045 }
 86:
                        report = entity.interactionType;
                        golfie = _closure1_slot0;
                        tangon = _closure1_slot2;
                        tangon = tangon[option];
                        tangon = golfie.bind(oscard)(tangon);
                        tangon = tangon.InteractionTypes;
                        tangon = tangon.MESSAGE_COMPONENT;
                        if(!(report !== tangon)) { _fun00046_ip = 205; continue _fun00045 }
 125:
                        report = entity.interactionType;
                        golfie = _closure1_slot0;
                        tangon = _closure1_slot2;
                        tangon = tangon[option];
                        tangon = golfie.bind(oscard)(tangon);
                        tangon = tangon.InteractionTypes;
                        tangon = tangon.MODAL_SUBMIT;
                        golfie = undefined;
                        if(!(report === tangon)) { _fun00046_ip = 281; continue _fun00045 }
 166:
                        report = _closure1_slot1;
                        option = _closure1_slot2;
                        tangon = 42;
                        tangon = option[tangon];
                        tangon = report.bind(oscard)(tangon);
                        report = tangon.INTERACTION_MODAL_SUBMIT;
                        tangon = new Array(1);
                        tangon[0] = report;
                        golfie = tangon;
                        _fun00046_ip = 281; continue _fun00045;
 205:
                        report = _closure1_slot1;
                        option = _closure1_slot2;
                        tangon = 42;
                        tangon = option[tangon];
                        tangon = report.bind(oscard)(tangon);
                        report = tangon.INTERACTION_MESSAGE_COMPONENT;
                        tangon = new Array(1);
                        tangon[0] = report;
                        golfie = tangon;
                        _fun00046_ip = 281; continue _fun00045;
 244:
                        report = _closure1_slot1;
                        option = _closure1_slot2;
                        tangon = 42;
                        tangon = option[tangon];
                        tangon = report.bind(oscard)(tangon);
                        report = tangon.INTERACTION_APPLICATION_COMMAND;
                        tangon = new Array(1);
                        tangon[0] = report;
                        golfie = tangon;
 281:
                        report = _closure1_slot35;
                        tangon = {};
                        option = entity.applicationId;
                        tangon['applicationId'] = option;
                        tangon['nonce'] = zuuluu;
                        tangon['locations'] = golfie;
                        tangon = report.bind(oscard)(tangon);
                        if(!tangon) { _fun00046_ip = 327; continue _fun00045 }
 314:
                        michal = _closure1_slot29;
                        entity = entity.applicationId;
                        michal[zuuluu] = entity;
 327:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleInteractionQueue'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                        entity = argFoo;
                        report = entity.nonce;
                        michal = entity.interactionId;
                        zuuluu = null;
                        if(!(zuuluu != report)) { _fun00048_ip = 54; continue _fun00047 }
 21:
                        tangon = _closure1_slot29;
                        tangon = tangon[report];
                        if(!(zuuluu != tangon)) { _fun00048_ip = 54; continue _fun00047 }
 36:
                        entity = _closure1_slot28;
                        entity = entity[tangon];
                        if(!(zuuluu != entity)) { _fun00048_ip = 54; continue _fun00047 }
 48:
                        entity['interactionId'] = michal;
 54:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleInteractionCreate'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                        entity = argFoo;
                        tangon = entity.nonce;
                        michal = null;
                        if(!(michal != tangon)) { _fun00050_ip = 50; continue _fun00049 }
 15:
                        zuuluu = _closure1_slot29;
                        zuuluu = zuuluu[tangon];
                        if(!(michal != zuuluu)) { _fun00050_ip = 50; continue _fun00049 }
 30:
                        michal = _closure1_slot29;
                        michal = delete michal[tangon];
                        michal = _closure1_slot37;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu, tangon);
 50:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleInteractionSuccess'] = zuuluu;
                michal = function(argFoo) {
                    _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                        entity = argFoo;
                        tangon = entity.nonce;
                        michal = null;
                        if(!(michal != tangon)) { _fun00052_ip = 50; continue _fun00051 }
 15:
                        zuuluu = _closure1_slot29;
                        zuuluu = zuuluu[tangon];
                        if(!(michal != zuuluu)) { _fun00052_ip = 50; continue _fun00051 }
 30:
                        michal = _closure1_slot29;
                        michal = delete michal[tangon];
                        michal = _closure1_slot36;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu, tangon);
 50:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleInteractionFailure'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            michal = this;
            tangon = _closure1_slot14;
            zuuluu = tangon.addChangeListener;
            entity = michal.handleSelectedChannelUpdate;
            entity = zuuluu.bind(tangon)(entity);
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 43;
            zuuluu = report[tangon];
            entity = undefined;
            zuuluu = golfie.bind(entity)(zuuluu);
            yankee = zuuluu.ComponentDispatch;
            offset = yankee.subscribe;
            zuuluu = _closure1_slot25;
            verify = zuuluu.RELEASE_ACTIVITY_WEB_VIEW;
            option = michal.handleActivityWebViewRelease;
            option = offset.bind(yankee)(verify, option);
            tangon = report[tangon];
            tangon = golfie.bind(entity)(tangon);
            option = tangon.ComponentDispatch;
            golfie = option.subscribe;
            tangon = zuuluu.OPEN_EMBEDDED_ACTIVITY;
            zuuluu = _closure1_slot41;
            zuuluu = golfie.bind(option)(tangon, zuuluu);
            tangon = _closure1_slot1;
            zuuluu = 44;
            golfie = report[zuuluu];
            offset = tangon.bind(entity)(golfie);
            verify = offset.subscribe;
            option = _closure1_slot38;
            golfie = 'EMBEDDED_ACTIVITY_LAUNCH_START';
            golfie = verify.bind(offset)(golfie, option);
            golfie = report[zuuluu];
            offset = tangon.bind(entity)(golfie);
            verify = offset.subscribe;
            option = michal.handleActivityLaunchSuccess;
            golfie = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
            golfie = verify.bind(offset)(golfie, option);
            golfie = report[zuuluu];
            offset = tangon.bind(entity)(golfie);
            verify = offset.subscribe;
            option = michal.handleActivityLaunchFail;
            golfie = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
            golfie = verify.bind(offset)(golfie, option);
            golfie = report[zuuluu];
            verify = tangon.bind(entity)(golfie);
            option = verify.subscribe;
            golfie = _closure1_slot39;
            oscard = 'EMBEDDED_ACTIVITY_CLOSE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleDeferredOpen;
            oscard = 'EMBEDDED_ACTIVITY_DEFERRED_OPEN';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleRPCDisconnect;
            oscard = 'RPC_APP_DISCONNECTED';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleCallDelete;
            oscard = 'CALL_DELETE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleRTCConnectionState;
            oscard = 'RTC_CONNECTION_STATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleGuildDelete;
            oscard = 'GUILD_DELETE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleChannelDelete;
            oscard = 'CHANNEL_DELETE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleInteractionQueue;
            oscard = 'INTERACTION_QUEUE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleInteractionCreate;
            oscard = 'INTERACTION_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleInteractionSuccess;
            oscard = 'INTERACTION_SUCCESS';
            oscard = option.bind(verify)(oscard, golfie);
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.subscribe;
            zuuluu = michal.handleInteractionFailure;
            michal = 'INTERACTION_FAILURE';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = '_terminate';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            michal = this;
            tangon = _closure1_slot14;
            zuuluu = tangon.removeChangeListener;
            entity = michal.handleSelectedChannelUpdate;
            entity = zuuluu.bind(tangon)(entity);
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 43;
            zuuluu = report[tangon];
            entity = undefined;
            zuuluu = golfie.bind(entity)(zuuluu);
            yankee = zuuluu.ComponentDispatch;
            offset = yankee.unsubscribe;
            zuuluu = _closure1_slot25;
            verify = zuuluu.RELEASE_ACTIVITY_WEB_VIEW;
            option = michal.handleActivityWebViewRelease;
            option = offset.bind(yankee)(verify, option);
            tangon = report[tangon];
            tangon = golfie.bind(entity)(tangon);
            option = tangon.ComponentDispatch;
            golfie = option.unsubscribe;
            tangon = zuuluu.OPEN_EMBEDDED_ACTIVITY;
            zuuluu = _closure1_slot41;
            zuuluu = golfie.bind(option)(tangon, zuuluu);
            tangon = _closure1_slot1;
            zuuluu = 44;
            golfie = report[zuuluu];
            offset = tangon.bind(entity)(golfie);
            verify = offset.unsubscribe;
            option = _closure1_slot38;
            golfie = 'EMBEDDED_ACTIVITY_LAUNCH_START';
            golfie = verify.bind(offset)(golfie, option);
            golfie = report[zuuluu];
            offset = tangon.bind(entity)(golfie);
            verify = offset.unsubscribe;
            option = michal.handleActivityLaunchSuccess;
            golfie = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
            golfie = verify.bind(offset)(golfie, option);
            golfie = report[zuuluu];
            offset = tangon.bind(entity)(golfie);
            verify = offset.unsubscribe;
            option = michal.handleActivityLaunchFail;
            golfie = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
            golfie = verify.bind(offset)(golfie, option);
            golfie = report[zuuluu];
            verify = tangon.bind(entity)(golfie);
            option = verify.unsubscribe;
            golfie = _closure1_slot39;
            oscard = 'EMBEDDED_ACTIVITY_CLOSE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleDeferredOpen;
            oscard = 'EMBEDDED_ACTIVITY_DEFERRED_OPEN';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleRPCDisconnect;
            oscard = 'RPC_APP_DISCONNECTED';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleCallDelete;
            oscard = 'CALL_DELETE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleRTCConnectionState;
            oscard = 'RTC_CONNECTION_STATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleGuildDelete;
            oscard = 'GUILD_DELETE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleChannelDelete;
            oscard = 'CHANNEL_DELETE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleInteractionQueue;
            oscard = 'INTERACTION_QUEUE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleInteractionCreate;
            oscard = 'INTERACTION_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleInteractionSuccess;
            oscard = 'INTERACTION_SUCCESS';
            oscard = option.bind(verify)(oscard, golfie);
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.unsubscribe;
            zuuluu = michal.handleInteractionFailure;
            michal = 'INTERACTION_FAILURE';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(report);
    report = 46;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/activities/EmbeddedActivitiesManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getActiveAnalyticsSessionIDs
        michal = _closure1_slot27;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    zuuluu['getActiveAnalyticsSessionIDs'] = michal;
    return entity;
})();