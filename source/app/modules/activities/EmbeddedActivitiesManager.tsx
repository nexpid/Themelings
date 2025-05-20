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
                    if(zuuluu) { _fun00018_ip = 801; continue _fun00017 }
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
                    if(zuuluu) { _fun00018_ip = 798; continue _fun00017 }
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
                    if(golfie) { _fun00018_ip = 795; continue _fun00017 }
 202:
                    golfie = _closure1_slot27;
                    backup = golfie[oscard];
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    verify = 20;
                    golfie = golfie[verify];
                    option = option.bind(tangon)(golfie);
                    golfie = option.getEmbeddedActivityLocationChannelId;
                    output = golfie.bind(option)(yankee);
                    if(!(sizing == output)) { _fun00018_ip = 273; continue _fun00017 }
 245:
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    golfie = golfie[verify];
                    option = option.bind(tangon)(golfie);
                    golfie = option.getEmbeddedActivityLocationStartingChannelId;
                    output = golfie.bind(option)(yankee);
 273:
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    golfie = golfie[verify];
                    option = option.bind(tangon)(golfie);
                    golfie = option.getEmbeddedActivityLocationGuildId;
                    kiloes = golfie.bind(option)(yankee);
                    if(!(sizing == kiloes)) { _fun00018_ip = 333; continue _fun00017 }
 305:
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    golfie = golfie[verify];
                    option = option.bind(tangon)(golfie);
                    golfie = option.getEmbeddedActivityLocationStartingGuildId;
                    kiloes = golfie.bind(option)(yankee);
 333:
                    option = _closure1_slot12;
                    golfie = option.getChannel;
                    update = golfie.bind(option)(output);
                    option = _closure1_slot15;
                    golfie = option.getCurrentUser;
                    ctrled = golfie.bind(option)();
                    if(!(sizing != backup)) { _fun00018_ip = 792; continue _fun00017 }
 367:
                    if(!(sizing != ctrled)) { _fun00018_ip = 792; continue _fun00017 }
 374:
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
                    source = offset.bind(tangon)(verify);
                    verify = _closure1_slot34;
                    verify = verify.bind(tangon)(source);
                    echoed = verify.releasePhase;
                    verify = 22;
                    verify = golfie[verify];
                    offset = option.bind(tangon)(verify);
                    verify = offset.getRawThermalState;
                    foxtra = verify.bind(offset)();
                    verify = 23;
                    golfie = golfie[verify];
                    result = option.bind(tangon)(golfie);
                    offset = result.track;
                    golfie = _closure1_slot20;
                    option = golfie.ACTIVITY_SESSION_LEFT;
                    golfie = {};
                    golfie['channel_id'] = output;
                    golfie['guild_id'] = kiloes;
                    sequen = backup.mediaSessionIds;
                    vacuum = 0;
                    vacuum = sequen[vacuum];
                    golfie['media_session_id'] = vacuum;
                    vacuum = backup.activitySessionId;
                    golfie['activity_session_id'] = vacuum;
                    golfie['application_id'] = oscard;
                    golfie['duration_ms'] = romeon;
                    ctrled = ctrled.premiumType;
                    golfie['user_premium_tier'] = ctrled;
                    golfie['raw_thermal_state'] = foxtra;
                    golfie['release_phase'] = echoed;
                    ctrled = sizing == source;
                    echoed = undefined;
                    if(ctrled) { _fun00018_ip = 588; continue _fun00017 }
 567:
                    source = source.activity;
                    ctrled = sizing == source;
                    echoed = undefined;
                    if(ctrled) { _fun00018_ip = 588; continue _fun00017 }
 582:
                    echoed = source.shelf_rank;
 588:
                    golfie['shelf_rank'] = echoed;
                    echoed = backup.activityUserSessionId;
                    golfie['activity_user_session_id'] = echoed;
                    source = sizing == update;
                    echoed = undefined;
                    if(source) { _fun00018_ip = 618; continue _fun00017 }
 613:
                    echoed = update.type;
 618:
                    golfie['channel_type'] = echoed;
                    echoed = backup.mediaSessionIds;
                    golfie['media_session_ids'] = echoed;
                    echoed = yankee.kind;
                    golfie['embedded_activity_location_kind'] = echoed;
                    golfie = offset.bind(result)(option, golfie);
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[verify];
                    offset = option.bind(tangon)(golfie);
                    verify = offset.track;
                    golfie = _closure1_slot20;
                    option = golfie.ACTIVITY_IFRAME_UNMOUNT;
                    golfie = {};
                    golfie['channel_id'] = output;
                    golfie['guild_id'] = kiloes;
                    golfie['application_id'] = oscard;
                    kiloes = backup.launchId;
                    sizing = sizing != kiloes;
                    kiloes = undefined;
                    if(!sizing) { _fun00018_ip = 729; continue _fun00017 }
 712:
                    output = backup.launchId;
                    sizing = new Array(1);
                    sizing[0] = output;
                    kiloes = sizing;
 729:
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
 792:
                    return tangon;
 795:
                    return zuuluu;
 798:
                    return michal;
 801:
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
            config = entity.inviterUserId;
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
            offset = 20;
            report = entity[offset];
            entity = undefined;
            option = option.bind(entity)(report);
            report = option.getEmbeddedActivityLocationChannelId;
            update = report.bind(option)(oscard);
            option = null;
            if(!(option == update)) { _fun00020_ip = 152; continue _fun00019 }
 124:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[offset];
            verify = verify.bind(entity)(report);
            report = verify.getEmbeddedActivityLocationStartingChannelId;
            update = report.bind(verify)(oscard);
 152:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[offset];
            verify = verify.bind(entity)(report);
            report = verify.getEmbeddedActivityLocationGuildId;
            echoed = report.bind(verify)(oscard);
            if(!(option == echoed)) { _fun00020_ip = 212; continue _fun00019 }
 184:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[offset];
            verify = verify.bind(entity)(report);
            report = verify.getEmbeddedActivityLocationStartingGuildId;
            echoed = report.bind(verify)(oscard);
 212:
            verify = _closure1_slot12;
            report = verify.getChannel;
            source = report.bind(verify)(update);
            report = yankee;
            if(!report) { _fun00020_ip = 236; continue _fun00019 }
 232:
            report = option != source;
 236:
            if(!report) { _fun00020_ip = 249; continue _fun00019 }
 239:
            verify = source.isPrivate;
            report = verify.bind(source)();
 249:
            if(!report) { _fun00020_ip = 255; continue _fun00019 }
 252:
            report = golfie;
 255:
            if(!report) { _fun00020_ip = 262; continue _fun00019 }
 258:
            report = option == tangon;
 262:
            if(!report) { _fun00020_ip = 302; continue _fun00019 }
 265:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            report = 24;
            report = verify[report];
            verify = golfie.bind(entity)(report);
            golfie = verify.selectParticipant;
            report = source.id;
            report = golfie.bind(verify)(report, option);
 302:
            if(!(option != tangon)) { _fun00020_ip = 1269; continue _fun00019 }
 309:
            golfie = _closure1_slot13;
            report = golfie.getMediaSessionId;
            report = report.bind(golfie)();
            cntext = output.compositeInstanceId;
            golfie = option == report;
            if(!golfie) { _fun00020_ip = 361; continue _fun00019 }
 336:
            verify = option == source;
            offset = undefined;
            if(verify) { _fun00020_ip = 355; continue _fun00019 }
 345:
            verify = source.isVocal;
            offset = verify.bind(source)();
 355:
            verify = true;
            golfie = verify === offset;
 361:
            if(!golfie) { _fun00020_ip = 389; continue _fun00019 }
 364:
            verify = option == source;
            offset = undefined;
            if(verify) { _fun00020_ip = 383; continue _fun00019 }
 373:
            verify = source.isPrivate;
            offset = verify.bind(source)();
 383:
            verify = false;
            golfie = verify === offset;
 389:
            if(!(option != cntext)) { _fun00020_ip = 1269; continue _fun00019 }
 396:
            if(golfie) { _fun00020_ip = 1269; continue _fun00019 }
 402:
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
            if(!offset) { _fun00020_ip = 452; continue _fun00019 }
 449:
            golfie = 2;
 452:
            romeon = _closure1_slot15;
            offset = romeon.getCurrentUser;
            record = offset.bind(romeon)();
            if(!(option != record)) { _fun00020_ip = 1269; continue _fun00019 }
 472:
            romeon = _closure1_slot19;
            offset = romeon.getShelfActivities;
            ctrled = offset.bind(romeon)(echoed);
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
            offset['activityConfigs'] = ctrled;
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
            if(!(option == report)) { _fun00020_ip = 610; continue _fun00019 }
 604:
            sizing = new Array(0);
            _fun00020_ip = 621; continue _fun00019;
 610:
            zuuluu = new Array(1);
            zuuluu[0] = report;
            sizing = zuuluu;
 621:
            report = {};
            report['activitySessionId'] = cntext;
            report['activityUserSessionId'] = backup;
            zuuluu = output.launchId;
            report['launchId'] = zuuluu;
            report['mediaSessionIds'] = sizing;
            report['activitiesInfraVersion'] = golfie;
            zuuluu = _closure1_slot27;
            zuuluu[result] = report;
            zuuluu = _closure1_slot28;
            vacuum = zuuluu[result];
            report = _closure1_slot0;
            kiloes = _closure1_slot2;
            zuuluu = 26;
            zuuluu = kiloes[zuuluu];
            kiloes = report.bind(entity)(zuuluu);
            report = kiloes.isNullOrEmpty;
            zuuluu = tangon.nonce;
            zuuluu = report.bind(kiloes)(zuuluu);
            if(zuuluu) { _fun00020_ip = 737; continue _fun00019 }
 712:
            report = tangon.nonce;
            kiloes = option == vacuum;
            tangon = undefined;
            if(kiloes) { _fun00020_ip = 733; continue _fun00019 }
 727:
            tangon = vacuum.nonce;
 733:
            zuuluu = report === tangon;
 737:
            if(zuuluu) { _fun00020_ip = 742; continue _fun00019 }
 740:
            vacuum = undefined;
 742:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            report = 23;
            zuuluu = zuuluu[report];
            sequen = tangon.bind(entity)(zuuluu);
            ctrled = sequen.track;
            zuuluu = _closure1_slot20;
            tangon = zuuluu.ACTIVITY_SESSION_JOINED;
            zuuluu = {};
            zuuluu['channel_id'] = update;
            zuuluu['guild_id'] = echoed;
            kiloes = 0;
            papara = sizing[kiloes];
            zuuluu['media_session_id'] = papara;
            zuuluu['activity_session_id'] = cntext;
            zuuluu['application_id'] = result;
            papara = option == vacuum;
            cntext = undefined;
            if(papara) { _fun00020_ip = 823; continue _fun00019 }
 817:
            cntext = vacuum.locations;
 823:
            zuuluu['location_stack'] = cntext;
            record = record.premiumType;
            zuuluu['user_premium_tier'] = record;
            zuuluu['raw_thermal_state'] = foxtra;
            cntext = option != source;
            record = null;
            if(!cntext) { _fun00020_ip = 873; continue _fun00019 }
 853:
            target = _closure1_slot9;
            papara = target.getUserParticipantCount;
            cntext = source.id;
            record = papara.bind(target)(cntext);
 873:
            zuuluu['n_participants'] = record;
            zuuluu['is_activity_start'] = yankee;
            zuuluu['release_phase'] = offset;
            record = option == romeon;
            offset = undefined;
            if(record) { _fun00020_ip = 920; continue _fun00019 }
 899:
            record = romeon.activity;
            cntext = option == record;
            offset = undefined;
            if(cntext) { _fun00020_ip = 920; continue _fun00019 }
 914:
            offset = record.shelf_rank;
 920:
            zuuluu['shelf_rank'] = offset;
            offset = verify > kiloes;
            record = null;
            if(!offset) { _fun00020_ip = 937; continue _fun00019 }
 934:
            record = verify;
 937:
            zuuluu['shelf_sorted_rank'] = record;
            zuuluu['activity_user_session_id'] = backup;
            cntext = option == source;
            record = undefined;
            if(cntext) { _fun00020_ip = 961; continue _fun00019 }
 956:
            record = source.type;
 961:
            zuuluu['channel_type'] = record;
            cntext = option == vacuum;
            record = undefined;
            if(cntext) { _fun00020_ip = 980; continue _fun00019 }
 975:
            record = vacuum.source;
 980:
            zuuluu['source'] = record;
            cntext = option != source;
            record = null;
            if(!cntext) { _fun00020_ip = 1025; continue _fun00019 }
 993:
            papara = _closure1_slot0;
            target = _closure1_slot2;
            cntext = 27;
            cntext = target[cntext];
            papara = papara.bind(entity)(cntext);
            cntext = papara.computeCommandContextType;
            record = cntext.bind(papara)(source, result);
 1025:
            zuuluu['command_context_type'] = record;
            zuuluu['invite_inviter_id'] = config;
            record = option == vacuum;
            config = undefined;
            if(record) { _fun00020_ip = 1052; continue _fun00019 }
 1046:
            config = vacuum.interactionId;
 1052:
            zuuluu['interaction_id'] = config;
            config = oscard.kind;
            zuuluu['embedded_activity_location_kind'] = config;
            zuuluu = ctrled.bind(sequen)(tangon, zuuluu);
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot20;
            zuuluu = michal.ACTIVITY_IFRAME_MOUNT;
            michal = {};
            sequen = option == vacuum;
            ctrled = undefined;
            if(sequen) { _fun00020_ip = 1124; continue _fun00019 }
 1118:
            ctrled = vacuum.locations;
 1124:
            michal['location_stack'] = ctrled;
            michal['channel_id'] = update;
            ctrled = option == source;
            update = undefined;
            if(ctrled) { _fun00020_ip = 1147; continue _fun00019 }
 1142:
            update = source.type;
 1147:
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
            if(foxtra) { _fun00020_ip = 1228; continue _fun00019 }
 1207:
            romeon = romeon.activity;
            foxtra = option == romeon;
            yankee = undefined;
            if(foxtra) { _fun00020_ip = 1228; continue _fun00019 }
 1222:
            yankee = romeon.shelf_rank;
 1228:
            michal['shelf_rank'] = yankee;
            option = null;
            if(!offset) { _fun00020_ip = 1241; continue _fun00019 }
 1238:
            option = verify;
 1241:
            michal['shelf_sorted_rank'] = option;
            michal['activities_infra_version'] = golfie;
            oscard = oscard.kind;
            michal['embedded_activity_location_kind'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 1269:
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
                                if(zuuluu) { _fun00030_ip = 1543; continue _fun00029 }
 13:
                                oscard = michal.error;
                                golfie = michal.nonce;
                                offset = michal.channelId;
                                echoed = michal.guildId;
                                result = michal.applicationId;
                                kiloes = michal.isStart;
                                verify = michal.locationKind;
                                tangon = undefined;
                                SaveGenerator(address=57);
 55:
                                return tangon;
 57:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(zuuluu) { _fun00030_ip = 1540; continue _fun00029 }
 66:
                                zuuluu = _closure1_slot36;
                                yankee = zuuluu.bind(tangon)(result, golfie);
                                foxtra = _closure1_slot0;
                                zuuluu = _closure1_slot2;
                                ctrled = 30;
                                golfie = zuuluu[ctrled];
                                golfie = foxtra.bind(tangon)(golfie);
                                romeon = golfie.intl;
                                option = romeon.string;
                                golfie = zuuluu[ctrled];
                                golfie = foxtra.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.IOy+Iy;
                                output = option.bind(romeon)(golfie);
                                golfie = _closure1_slot1;
                                sequen = 31;
                                zuuluu = zuuluu[sequen];
                                zuuluu = golfie.bind(tangon)(zuuluu);
                                zuuluu = oscard instanceof zuuluu;
                                if(zuuluu) { _fun00030_ip = 885; continue _fun00029 }
 160:
                                golfie = _closure1_slot1;
                                option = _closure1_slot2;
                                zuuluu = 34;
                                zuuluu = option[zuuluu];
                                zuuluu = golfie.bind(tangon)(zuuluu);
                                golfie = oscard instanceof zuuluu;
                                zuuluu = _closure1_slot26;
                                if(golfie) { _fun00030_ip = 807; continue _fun00029 }
 194:
                                source = zuuluu.ApiError;
                                update = oscard.status;
                                sizing = oscard.code;
                                vacuum = oscard.code;
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_ACTIVITY_LAUNCH_NO_ACCESS;
                                if(!(golfie !== vacuum)) { _fun00030_ip = 741; continue _fun00029 }
 232:
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER;
                                if(!(golfie !== vacuum)) { _fun00030_ip = 673; continue _fun00029 }
 249:
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_PERMISSIONS;
                                if(!(golfie !== vacuum)) { _fun00030_ip = 607; continue _fun00029 }
 266:
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL;
                                if(!(golfie !== vacuum)) { _fun00030_ip = 541; continue _fun00029 }
 283:
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_ACTIVITY_LAUNCH_AGE_GATED;
                                if(!(golfie !== vacuum)) { _fun00030_ip = 475; continue _fun00029 }
 300:
                                golfie = _closure1_slot21;
                                golfie = golfie.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE;
                                if(!(golfie !== vacuum)) { _fun00030_ip = 409; continue _fun00029 }
 314:
                                golfie = _closure1_slot21;
                                golfie = golfie.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM;
                                backup = source;
                                foxtra = update;
                                romeon = sizing;
                                option = output;
                                if(!(golfie === vacuum)) { _fun00030_ip = 1309; continue _fun00029 }
 343:
                                record = _closure1_slot0;
                                golfie = _closure1_slot2;
                                vacuum = golfie[ctrled];
                                vacuum = record.bind(tangon)(vacuum);
                                config = vacuum.intl;
                                vacuum = config.string;
                                golfie = golfie[ctrled];
                                golfie = record.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.uGDCc3;
                                option = vacuum.bind(config)(golfie);
                                backup = source;
                                foxtra = update;
                                romeon = sizing;
                                _fun00030_ip = 1309; continue _fun00029;
 409:
                                record = _closure1_slot0;
                                golfie = _closure1_slot2;
                                vacuum = golfie[ctrled];
                                vacuum = record.bind(tangon)(vacuum);
                                config = vacuum.intl;
                                vacuum = config.string;
                                golfie = golfie[ctrled];
                                golfie = record.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.RvkXdX;
                                option = vacuum.bind(config)(golfie);
                                backup = source;
                                foxtra = update;
                                romeon = sizing;
                                _fun00030_ip = 1309; continue _fun00029;
 475:
                                record = _closure1_slot0;
                                golfie = _closure1_slot2;
                                vacuum = golfie[ctrled];
                                vacuum = record.bind(tangon)(vacuum);
                                config = vacuum.intl;
                                vacuum = config.string;
                                golfie = golfie[ctrled];
                                golfie = record.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.4WuFRE;
                                option = vacuum.bind(config)(golfie);
                                backup = source;
                                foxtra = update;
                                romeon = sizing;
                                _fun00030_ip = 1309; continue _fun00029;
 541:
                                record = _closure1_slot0;
                                golfie = _closure1_slot2;
                                vacuum = golfie[ctrled];
                                vacuum = record.bind(tangon)(vacuum);
                                config = vacuum.intl;
                                vacuum = config.string;
                                golfie = golfie[ctrled];
                                golfie = record.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.j29zCg;
                                option = vacuum.bind(config)(golfie);
                                backup = source;
                                foxtra = update;
                                romeon = sizing;
                                _fun00030_ip = 1309; continue _fun00029;
 607:
                                record = _closure1_slot0;
                                golfie = _closure1_slot2;
                                vacuum = golfie[ctrled];
                                vacuum = record.bind(tangon)(vacuum);
                                config = vacuum.intl;
                                vacuum = config.string;
                                golfie = golfie[ctrled];
                                golfie = record.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.hHGrW1;
                                option = vacuum.bind(config)(golfie);
                                backup = source;
                                foxtra = update;
                                romeon = sizing;
                                _fun00030_ip = 1309; continue _fun00029;
 673:
                                record = _closure1_slot0;
                                golfie = _closure1_slot2;
                                vacuum = golfie[ctrled];
                                vacuum = record.bind(tangon)(vacuum);
                                config = vacuum.intl;
                                vacuum = config.string;
                                golfie = golfie[ctrled];
                                golfie = record.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.zxv7EB;
                                option = vacuum.bind(config)(golfie);
                                backup = source;
                                foxtra = update;
                                romeon = sizing;
                                _fun00030_ip = 1309; continue _fun00029;
 741:
                                record = _closure1_slot0;
                                golfie = _closure1_slot2;
                                vacuum = golfie[ctrled];
                                vacuum = record.bind(tangon)(vacuum);
                                config = vacuum.intl;
                                vacuum = config.string;
                                golfie = golfie[ctrled];
                                golfie = record.bind(tangon)(golfie);
                                golfie = golfie.t;
                                golfie = golfie.Gyzcra;
                                option = vacuum.bind(config)(golfie);
                                backup = source;
                                foxtra = update;
                                romeon = sizing;
                                _fun00030_ip = 1309; continue _fun00029;
 807:
                                sizing = zuuluu.CallbackError;
                                golfie = oscard.reason;
                                update = _closure1_slot0;
                                source = _closure1_slot2;
                                zuuluu = 35;
                                zuuluu = source[zuuluu];
                                source = update.bind(tangon)(zuuluu);
                                update = source.interactionCallbackErrorReason;
                                zuuluu = oscard.reason;
                                update = update.bind(source)(zuuluu, result);
                                source = null;
                                zuuluu = output;
                                if(!(source != update)) { _fun00030_ip = 869; continue _fun00029 }
 866:
                                zuuluu = update;
 869:
                                option = zuuluu;
                                backup = sizing;
                                foxtra = undefined;
                                romeon = golfie;
                                _fun00030_ip = 1309; continue _fun00029;
 885:
                                zuuluu = _closure1_slot26;
                                sizing = zuuluu.ClientError;
                                golfie = oscard.reason;
                                update = _closure1_slot17;
                                zuuluu = update.getFetchState;
                                source = zuuluu.bind(update)();
                                update = _closure1_slot0;
                                vacuum = _closure1_slot2;
                                zuuluu = 32;
                                zuuluu = vacuum[zuuluu];
                                zuuluu = update.bind(tangon)(zuuluu);
                                update = zuuluu.DeveloperMode;
                                zuuluu = update.getSetting;
                                zuuluu = zuuluu.bind(update)();
                                if(!zuuluu) { _fun00030_ip = 968; continue _fun00029 }
 954:
                                update = _closure1_slot18;
                                update = update.LOADED;
                                zuuluu = source !== update;
 968:
                                if(!zuuluu) { _fun00030_ip = 1014; continue _fun00029 }
 971:
                                update = _closure1_slot0;
                                source = _closure1_slot2;
                                zuuluu = 33;
                                zuuluu = source[zuuluu];
                                update = update.bind(tangon)(zuuluu);
                                zuuluu = update.fetchDeveloperApplications;
                                zuuluu = zuuluu.bind(update)();
                                SaveGenerator(address=1005);
 1003:
                                return zuuluu;
 1005:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=19);
                                if(update) { _fun00030_ip = 1537; continue _fun00029 }
 1014:
                                source = oscard.reason;
                                vacuum = _closure1_slot1;
                                update = _closure1_slot2;
                                update = update[sequen];
                                update = vacuum.bind(tangon)(update);
                                update = update.Reasons;
                                update = update.PRIMARY_APP_COMMAND_NOT_FOUND;
                                if(!(update !== source)) { _fun00030_ip = 1218; continue _fun00029 }
 1056:
                                vacuum = _closure1_slot1;
                                update = _closure1_slot2;
                                update = update[sequen];
                                update = vacuum.bind(tangon)(update);
                                update = update.Reasons;
                                update = update.INVALID_CHANNEL;
                                if(!(update !== source)) { _fun00030_ip = 1156; continue _fun00029 }
 1089:
                                vacuum = _closure1_slot1;
                                update = _closure1_slot2;
                                update = update[sequen];
                                update = vacuum.bind(tangon)(update);
                                update = update.Reasons;
                                update = update.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                                backup = sizing;
                                foxtra = undefined;
                                romeon = golfie;
                                option = output;
                                if(!(update === source)) { _fun00030_ip = 1309; continue _fun00029 }
 1136:
                                foxtra = oscard.detailCode;
                                backup = sizing;
                                romeon = golfie;
                                option = output;
                                _fun00030_ip = 1309; continue _fun00029;
 1156:
                                vacuum = _closure1_slot0;
                                oscard = _closure1_slot2;
                                update = oscard[ctrled];
                                update = vacuum.bind(tangon)(update);
                                source = update.intl;
                                update = source.string;
                                oscard = oscard[ctrled];
                                oscard = vacuum.bind(tangon)(oscard);
                                oscard = oscard.t;
                                oscard = oscard.j29zCg;
                                option = update.bind(source)(oscard);
                                backup = sizing;
                                foxtra = undefined;
                                romeon = golfie;
                                _fun00030_ip = 1309; continue _fun00029;
 1218:
                                update = _closure1_slot17;
                                oscard = update.inDevModeForApplication;
                                oscard = oscard.bind(update)(result);
                                backup = sizing;
                                foxtra = undefined;
                                romeon = golfie;
                                option = output;
                                if(!oscard) { _fun00030_ip = 1309; continue _fun00029 }
 1247:
                                source = _closure1_slot0;
                                oscard = _closure1_slot2;
                                output = oscard[ctrled];
                                output = source.bind(tangon)(output);
                                update = output.intl;
                                output = update.string;
                                oscard = oscard[ctrled];
                                oscard = source.bind(tangon)(oscard);
                                oscard = oscard.t;
                                oscard = oscard.hXRXf3;
                                option = output.bind(update)(oscard);
                                backup = sizing;
                                foxtra = undefined;
                                romeon = golfie;
 1309:
                                golfie = _closure3_slot0;
                                oscard = golfie.showLaunchErrorModal;
                                oscard = oscard.bind(golfie)(option);
                                golfie = _closure1_slot12;
                                oscard = golfie.getChannel;
                                sizing = oscard.bind(golfie)(offset);
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
                                report['channel_id'] = offset;
                                offset = null;
                                if(!(offset == echoed)) { _fun00030_ip = 1432; continue _fun00029 }
 1410:
                                source = offset == sizing;
                                update = undefined;
                                if(source) { _fun00030_ip = 1429; continue _fun00029 }
 1419:
                                source = sizing.getGuildId;
                                update = source.bind(sizing)();
 1429:
                                echoed = update;
 1432:
                                report['guild_id'] = echoed;
                                report['application_id'] = result;
                                report['raw_thermal_state'] = output;
                                report['is_activity_start'] = kiloes;
                                output = offset == sizing;
                                kiloes = undefined;
                                if(output) { _fun00030_ip = 1465; continue _fun00029 }
 1460:
                                kiloes = sizing.type;
 1465:
                                report['channel_type'] = kiloes;
                                sizing = offset == yankee;
                                kiloes = undefined;
                                if(sizing) { _fun00030_ip = 1485; continue _fun00029 }
 1479:
                                kiloes = yankee.locations;
 1485:
                                report['location_stack'] = kiloes;
                                report['error_type'] = backup;
                                report['error_status'] = foxtra;
                                report['error_code'] = romeon;
                                romeon = offset == yankee;
                                offset = undefined;
                                if(romeon) { _fun00030_ip = 1519; continue _fun00029 }
 1514:
                                offset = yankee.source;
 1519:
                                report['source'] = offset;
                                report['embedded_activity_location_kind'] = verify;
                                report = golfie.bind(option)(oscard, report);
                                return tangon;
 1537:
                                return zuuluu;
 1540:
                                return michal;
 1543:
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
                                if(zuuluu) { _fun00040_ip = 945; continue _fun00039 }
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
                                if(tangon) { _fun00040_ip = 942; continue _fun00039 }
 62:
                                report = _closure1_slot12;
                                tangon = report.getChannel;
                                verify = tangon.bind(report)(kiloes);
                                if(!(zuuluu !== verify)) { _fun00040_ip = 939; continue _fun00039 }
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
                                if(!(tangon === kiloes)) { _fun00040_ip = 939; continue _fun00039 }
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
                                if(!(tangon !== foxtra)) { _fun00040_ip = 939; continue _fun00039 }
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
                                if(report) { _fun00040_ip = 936; continue _fun00039 }
 220:
                                oscard = _closure1_slot0;
                                backup = _closure1_slot2;
                                report = 37;
                                report = backup[report];
                                oscard = oscard.bind(zuuluu)(report);
                                report = oscard.getIsActivitiesEnabledForCurrentPlatform;
                                report = report.bind(oscard)();
                                if(report) { _fun00040_ip = 331; continue _fun00039 }
 253:
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
                                _fun00040_ip = 939; continue _fun00039;
 331:
                                oscard = _closure1_slot1;
                                backup = _closure1_slot2;
                                report = 38;
                                report = backup[report];
                                oscard = oscard.bind(zuuluu)(report);
                                backup = romeon == tangon;
                                report = undefined;
                                if(backup) { _fun00040_ip = 381; continue _fun00039 }
 360:
                                backup = tangon.embedded_activity_config;
                                output = romeon == backup;
                                report = undefined;
                                if(output) { _fun00040_ip = 381; continue _fun00039 }
 375:
                                report = backup.supported_platforms;
 381:
                                report = oscard.bind(zuuluu)(report);
                                if(report) { _fun00040_ip = 467; continue _fun00039 }
 389:
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
                                _fun00040_ip = 939; continue _fun00039;
 467:
                                oscard = romeon == verify;
                                report = undefined;
                                if(oscard) { _fun00040_ip = 486; continue _fun00039 }
 476:
                                oscard = verify.getGuildId;
                                report = oscard.bind(verify)();
 486:
                                oscard = romeon != report;
                                result = undefined;
                                if(!oscard) { _fun00040_ip = 498; continue _fun00039 }
 495:
                                result = report;
 498:
                                oscard = _closure1_slot0;
                                report = _closure1_slot2;
                                backup = 33;
                                report = report[backup];
                                verify = oscard.bind(zuuluu)(report);
                                oscard = verify.fetchShelf;
                                report = {};
                                report['guildId'] = result;
                                report = oscard.bind(verify)(report);
                                SaveGenerator(address=539);
 537:
                                return report;
 539:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                                if(oscard) { _fun00040_ip = 933; continue _fun00039 }
 548:
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
                                if(!(romeon == oscard)) { _fun00040_ip = 709; continue _fun00039 }
 605:
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
                                SaveGenerator(address=650);
 648:
                                return oscard;
 650:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                                if(verify) { _fun00040_ip = 930; continue _fun00039 }
 659:
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
 709:
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
                                if(option) { _fun00040_ip = 759; continue _fun00039 }
 748:
                                option = backup.userIds;
                                output = option.size;
 759:
                                result = romeon != output;
                                verify = 0;
                                option = 0;
                                if(!result) { _fun00040_ip = 773; continue _fun00039 }
 770:
                                option = output;
 773:
                                if(!(!(option > verify))) { _fun00040_ip = 841; continue _fun00039 }
 777:
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
                                SaveGenerator(address=832);
 830:
                                return option;
 832:
                                ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                                if(!verify) { _fun00040_ip = 939; continue _fun00039 }
 838:
                                return option;
 841:
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
                                if(kiloes) { _fun00040_ip = 892; continue _fun00039 }
 886:
                                foxtra = backup.launchId;
 892:
                                golfie['launchId'] = foxtra;
                                golfie['inputApplication'] = romeon;
                                golfie['analyticsLocations'] = yankee;
                                golfie['inviterUserId'] = offset;
                                golfie = option.bind(verify)(golfie);
                                SaveGenerator(address=921);
 919:
                                return golfie;
 921:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                                if(!option) { _fun00040_ip = 939; continue _fun00039 }
 927:
                                return golfie;
 930:
                                return oscard;
 933:
                                return report;
 936:
                                return tangon;
 939:
                                return zuuluu;
 942:
                                return michal;
 945:
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