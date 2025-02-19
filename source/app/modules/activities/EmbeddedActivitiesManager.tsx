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
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot34;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00008_ip = 71; continue _fun00007 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
            _fun00010_ip = 74; continue _fun00009;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot34 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: getShelfItemTrackingProperties
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            tangon = null;
            report = tangon == zuuluu;
            oscard = undefined;
            michal = undefined;
            if(report) { _fun00012_ip = 103; continue _fun00011 }
 18:
            zuuluu = zuuluu.activity;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00012_ip = 103; continue _fun00011 }
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
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: setAwaitingAnalyticsContext
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            tangon = entity.applicationId;
            golfie = entity.nonce;
            oscard = entity.locations;
            report = entity.source;
            michal = null;
            entity = michal != oscard;
            if(entity) { _fun00014_ip = 38; continue _fun00013 }
 34:
            entity = michal != report;
 38:
            if(!entity) { _fun00014_ip = 70; continue _fun00013 }
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
    var _closure1_slot36 = entity;
    entity = function(argFoo, argBar) { // Original name: clearAwaitingAnalyticsContextImmediate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot28;
            entity = entity[zuuluu];
            tangon = null;
            if(!(tangon != entity)) { _fun00016_ip = 33; continue _fun00015 }
 20:
            report = entity.nonce;
            tangon = argBar;
            if(!(report !== tangon)) { _fun00016_ip = 37; continue _fun00015 }
 33:
            tangon = undefined;
            return tangon;
 37:
            michal = _closure1_slot28;
            michal = delete michal[zuuluu];
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo, argBar) { // Original name: clearAwaitingAnalyticsContextAsync
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = global;
        tangon = entity.setTimeout;
        entity = undefined;
        zuuluu = function() {
            tangon = _closure1_slot37;
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
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: handleActivityLaunchStart
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            oscard = michal.applicationId;
            tangon = michal.nonce;
            entity = michal.analyticsLocations;
            report = michal.source;
            zuuluu = _closure1_slot36;
            michal = {};
            michal['applicationId'] = oscard;
            michal['nonce'] = tangon;
            michal['locations'] = entity;
            entity = null;
            oscard = entity != report;
            entity = undefined;
            tangon = undefined;
            if(!oscard) { _fun00018_ip = 64; continue _fun00017 }
 61:
            tangon = report;
 64:
            michal['source'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function() { // Original name: handleActivityClose
        entity = undefined;
        tangon = _closure1_slot41;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot40 = entity;
    entity = function() { // Original name: _handleActivityClose
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00020_ip = 742; continue _fun00019 }
 13:
                    oscard = michal.applicationId;
                    romeon = michal.location;
                    sizing = michal.instanceId;
                    tangon = undefined;
                    SaveGenerator(address=35);
 33:
                    return tangon;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00020_ip = 739; continue _fun00019 }
 44:
                    option = _closure1_slot19;
                    golfie = option.getEmbeddedActivityDurationMs;
                    zuuluu = romeon.id;
                    yankee = golfie.bind(option)(zuuluu, oscard);
                    golfie = _closure1_slot11;
                    zuuluu = golfie.getSessionId;
                    offset = zuuluu.bind(golfie)();
                    kiloes = null;
                    zuuluu = kiloes != sizing;
                    if(!zuuluu) { _fun00020_ip = 97; continue _fun00019 }
 93:
                    zuuluu = kiloes != offset;
 97:
                    if(!zuuluu) { _fun00020_ip = 202; continue _fun00019 }
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
                    verify = romeon.id;
                    verify = foxtra.bind(backup)(oscard, verify, sizing);
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
                    if(golfie) { _fun00020_ip = 736; continue _fun00019 }
 202:
                    golfie = _closure1_slot27;
                    foxtra = golfie[oscard];
                    verify = _closure1_slot12;
                    option = verify.getChannel;
                    offset = _closure1_slot0;
                    backup = _closure1_slot2;
                    golfie = 20;
                    golfie = backup[golfie];
                    offset = offset.bind(tangon)(golfie);
                    golfie = offset.getEmbeddedActivityLocationChannelId;
                    golfie = golfie.bind(offset)(romeon);
                    sizing = option.bind(verify)(golfie);
                    option = _closure1_slot15;
                    golfie = option.getCurrentUser;
                    update = golfie.bind(option)();
                    if(!(kiloes != foxtra)) { _fun00020_ip = 733; continue _fun00019 }
 275:
                    if(!(kiloes != sizing)) { _fun00020_ip = 733; continue _fun00019 }
 282:
                    if(!(kiloes != update)) { _fun00020_ip = 733; continue _fun00019 }
 289:
                    golfie = sizing.getGuildId;
                    backup = golfie.bind(sizing)();
                    option = _closure1_slot19;
                    golfie = option.getShelfActivities;
                    romeon = golfie.bind(option)(backup);
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    verify = 21;
                    verify = golfie[verify];
                    offset = option.bind(tangon)(verify);
                    verify = {};
                    verify['applicationId'] = oscard;
                    verify['activityConfigs'] = romeon;
                    echoed = offset.bind(tangon)(verify);
                    verify = _closure1_slot35;
                    verify = verify.bind(tangon)(echoed);
                    result = verify.releasePhase;
                    verify = 22;
                    verify = golfie[verify];
                    offset = option.bind(tangon)(verify);
                    verify = offset.getRawThermalState;
                    romeon = verify.bind(offset)();
                    verify = 23;
                    golfie = golfie[verify];
                    output = option.bind(tangon)(golfie);
                    offset = output.track;
                    golfie = _closure1_slot20;
                    option = golfie.ACTIVITY_SESSION_LEFT;
                    golfie = {};
                    source = sizing.id;
                    golfie['channel_id'] = source;
                    golfie['guild_id'] = backup;
                    ctrled = foxtra.mediaSessionIds;
                    source = 0;
                    source = ctrled[source];
                    golfie['media_session_id'] = source;
                    source = foxtra.activitySessionId;
                    golfie['activity_session_id'] = source;
                    golfie['application_id'] = oscard;
                    golfie['duration_ms'] = yankee;
                    update = update.premiumType;
                    golfie['user_premium_tier'] = update;
                    golfie['raw_thermal_state'] = romeon;
                    golfie['release_phase'] = result;
                    update = kiloes == echoed;
                    result = undefined;
                    if(update) { _fun00020_ip = 518; continue _fun00019 }
 497:
                    update = echoed.activity;
                    source = kiloes == update;
                    result = undefined;
                    if(source) { _fun00020_ip = 518; continue _fun00019 }
 512:
                    result = update.premium_tier_requirement;
 518:
                    golfie['activity_premium_tier_requirement'] = result;
                    update = kiloes == echoed;
                    result = undefined;
                    if(update) { _fun00020_ip = 553; continue _fun00019 }
 532:
                    echoed = echoed.activity;
                    update = kiloes == echoed;
                    result = undefined;
                    if(update) { _fun00020_ip = 553; continue _fun00019 }
 547:
                    result = echoed.shelf_rank;
 553:
                    golfie['shelf_rank'] = result;
                    result = foxtra.activityUserSessionId;
                    golfie['activity_user_session_id'] = result;
                    result = sizing.type;
                    golfie['channel_type'] = result;
                    result = foxtra.mediaSessionIds;
                    golfie['media_session_ids'] = result;
                    golfie = offset.bind(output)(option, golfie);
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[verify];
                    offset = option.bind(tangon)(golfie);
                    verify = offset.track;
                    golfie = _closure1_slot20;
                    option = golfie.ACTIVITY_IFRAME_UNMOUNT;
                    golfie = {};
                    sizing = sizing.id;
                    golfie['channel_id'] = sizing;
                    golfie['guild_id'] = backup;
                    golfie['application_id'] = oscard;
                    backup = foxtra.launchId;
                    kiloes = kiloes != backup;
                    backup = undefined;
                    if(!kiloes) { _fun00020_ip = 680; continue _fun00019 }
 663:
                    sizing = foxtra.launchId;
                    kiloes = new Array(1);
                    kiloes[0] = sizing;
                    backup = kiloes;
 680:
                    golfie['instance_ids'] = backup;
                    backup = foxtra.mediaSessionIds;
                    golfie['media_session_ids'] = backup;
                    foxtra = foxtra.activityUserSessionId;
                    golfie['activity_user_session_id'] = foxtra;
                    golfie['raw_thermal_state'] = romeon;
                    golfie['duration_ms'] = yankee;
                    golfie = verify.bind(offset)(option, golfie);
                    report = _closure1_slot27;
                    report = delete report[oscard];
 733:
                    return tangon;
 736:
                    return zuuluu;
 739:
                    return michal;
 742:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot41 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo) { // Original name: handleOpenEmbeddedActivity
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            output = entity.applicationId;
            var _closure2_slot0 = output;
            oscard = entity.isFirstActivityInChannel;
            offset = entity.isStart;
            report = entity.participants;
            sizing = entity.embeddedActivity;
            option = entity.location;
            vacuum = entity.inviterUserId;
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
            report = tangon.bind(report)(entity);
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 20;
            tangon = tangon[entity];
            entity = undefined;
            golfie = golfie.bind(entity)(tangon);
            tangon = golfie.getEmbeddedActivityLocationChannelId;
            option = tangon.bind(golfie)(option);
            golfie = _closure1_slot12;
            tangon = golfie.getChannel;
            echoed = tangon.bind(golfie)(option);
            tangon = offset;
            if(!tangon) { _fun00022_ip = 144; continue _fun00021 }
 138:
            golfie = null;
            tangon = golfie != echoed;
 144:
            if(!tangon) { _fun00022_ip = 157; continue _fun00021 }
 147:
            golfie = echoed.isPrivate;
            tangon = golfie.bind(echoed)();
 157:
            if(!tangon) { _fun00022_ip = 163; continue _fun00021 }
 160:
            tangon = oscard;
 163:
            if(!tangon) { _fun00022_ip = 172; continue _fun00021 }
 166:
            oscard = null;
            tangon = oscard == report;
 172:
            if(!tangon) { _fun00022_ip = 214; continue _fun00021 }
 175:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 24;
            tangon = golfie[tangon];
            option = oscard.bind(entity)(tangon);
            golfie = option.selectParticipant;
            oscard = echoed.id;
            tangon = null;
            tangon = golfie.bind(option)(oscard, tangon);
 214:
            golfie = null;
            if(!(golfie != report)) { _fun00022_ip = 1192; continue _fun00021 }
 223:
            oscard = _closure1_slot13;
            tangon = oscard.getMediaSessionId;
            backup = tangon.bind(oscard)();
            sequen = sizing.compositeInstanceId;
            tangon = golfie == backup;
            if(!tangon) { _fun00022_ip = 275; continue _fun00021 }
 250:
            oscard = golfie == echoed;
            option = undefined;
            if(oscard) { _fun00022_ip = 269; continue _fun00021 }
 259:
            oscard = echoed.isVocal;
            option = oscard.bind(echoed)();
 269:
            oscard = true;
            tangon = oscard === option;
 275:
            if(!tangon) { _fun00022_ip = 303; continue _fun00021 }
 278:
            oscard = golfie == echoed;
            option = undefined;
            if(oscard) { _fun00022_ip = 297; continue _fun00021 }
 287:
            oscard = echoed.isPrivate;
            option = oscard.bind(echoed)();
 297:
            oscard = false;
            tangon = oscard === option;
 303:
            if(!(golfie != sequen)) { _fun00022_ip = 1192; continue _fun00021 }
 310:
            if(tangon) { _fun00022_ip = 1192; continue _fun00021 }
 316:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 25;
            tangon = option[tangon];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.v4;
            foxtra = tangon.bind(oscard)();
            tangon = 'location';
            option = tangon in sizing;
            tangon = 1;
            oscard = tangon;
            if(!option) { _fun00022_ip = 366; continue _fun00021 }
 363:
            oscard = 2;
 366:
            option = golfie == echoed;
            romeon = undefined;
            if(option) { _fun00022_ip = 385; continue _fun00021 }
 375:
            option = echoed.getGuildId;
            romeon = option.bind(echoed)();
 385:
            verify = _closure1_slot15;
            option = verify.getCurrentUser;
            verify = option.bind(verify)();
            if(!(golfie != echoed)) { _fun00022_ip = 1192; continue _fun00021 }
 405:
            if(!(golfie != verify)) { _fun00022_ip = 1192; continue _fun00021 }
 412:
            yankee = _closure1_slot19;
            option = yankee.getShelfActivities;
            update = option.bind(yankee)(romeon);
            yankee = _closure1_slot16;
            option = yankee.getState;
            option = option.bind(yankee)();
            result = option.shelfOrder;
            romeon = _closure1_slot1;
            kiloes = _closure1_slot2;
            option = 21;
            option = kiloes[option];
            yankee = romeon.bind(entity)(option);
            option = {};
            option['applicationId'] = output;
            option['activityConfigs'] = update;
            yankee = yankee.bind(entity)(option);
            option = result.findIndex;
            zuuluu = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity === michal;
                return entity;
            };
            zuuluu = option.bind(result)(zuuluu);
            option = tangon + zuuluu;
            zuuluu = _closure1_slot35;
            zuuluu = zuuluu.bind(entity)(yankee);
            zuuluu = zuuluu.releasePhase;
            tangon = 22;
            tangon = kiloes[tangon];
            romeon = romeon.bind(entity)(tangon);
            tangon = romeon.getRawThermalState;
            romeon = tangon.bind(romeon)();
            if(!(golfie == backup)) { _fun00022_ip = 550; continue _fun00021 }
 544:
            kiloes = new Array(0);
            _fun00022_ip = 561; continue _fun00021;
 550:
            tangon = new Array(1);
            tangon[0] = backup;
            kiloes = tangon;
 561:
            backup = {};
            backup['activitySessionId'] = sequen;
            backup['activityUserSessionId'] = foxtra;
            tangon = sizing.launchId;
            backup['launchId'] = tangon;
            backup['mediaSessionIds'] = kiloes;
            backup['activitiesInfraVersion'] = oscard;
            tangon = _closure1_slot27;
            tangon[output] = backup;
            tangon = _closure1_slot28;
            update = tangon[output];
            backup = _closure1_slot0;
            result = _closure1_slot2;
            tangon = 26;
            tangon = result[tangon];
            result = backup.bind(entity)(tangon);
            backup = result.isNullOrEmpty;
            tangon = report.nonce;
            tangon = backup.bind(result)(tangon);
            if(tangon) { _fun00022_ip = 677; continue _fun00021 }
 652:
            backup = report.nonce;
            result = golfie == update;
            report = undefined;
            if(result) { _fun00022_ip = 673; continue _fun00021 }
 667:
            report = update.nonce;
 673:
            tangon = backup === report;
 677:
            if(tangon) { _fun00022_ip = 682; continue _fun00021 }
 680:
            update = undefined;
 682:
            backup = _closure1_slot1;
            tangon = _closure1_slot2;
            report = 23;
            tangon = tangon[report];
            ctrled = backup.bind(entity)(tangon);
            source = ctrled.track;
            tangon = _closure1_slot20;
            result = tangon.ACTIVITY_SESSION_JOINED;
            tangon = {};
            backup = echoed.id;
            tangon['channel_id'] = backup;
            backup = echoed.getGuildId;
            backup = backup.bind(echoed)();
            tangon['guild_id'] = backup;
            backup = 0;
            config = kiloes[backup];
            tangon['media_session_id'] = config;
            tangon['activity_session_id'] = sequen;
            tangon['application_id'] = output;
            config = golfie == update;
            sequen = undefined;
            if(config) { _fun00022_ip = 778; continue _fun00021 }
 772:
            sequen = update.locations;
 778:
            tangon['location_stack'] = sequen;
            verify = verify.premiumType;
            tangon['user_premium_tier'] = verify;
            tangon['raw_thermal_state'] = romeon;
            config = _closure1_slot9;
            sequen = config.getUserParticipantCount;
            verify = echoed.id;
            verify = sequen.bind(config)(verify);
            tangon['n_participants'] = verify;
            tangon['is_activity_start'] = offset;
            tangon['release_phase'] = zuuluu;
            verify = golfie == yankee;
            zuuluu = undefined;
            if(verify) { _fun00022_ip = 866; continue _fun00021 }
 845:
            verify = yankee.activity;
            sequen = golfie == verify;
            zuuluu = undefined;
            if(sequen) { _fun00022_ip = 866; continue _fun00021 }
 860:
            zuuluu = verify.premium_tier_requirement;
 866:
            tangon['activity_premium_tier_requirement'] = zuuluu;
            verify = golfie == yankee;
            zuuluu = undefined;
            if(verify) { _fun00022_ip = 901; continue _fun00021 }
 880:
            verify = yankee.activity;
            sequen = golfie == verify;
            zuuluu = undefined;
            if(sequen) { _fun00022_ip = 901; continue _fun00021 }
 895:
            zuuluu = verify.shelf_rank;
 901:
            tangon['shelf_rank'] = zuuluu;
            verify = option > backup;
            zuuluu = null;
            if(!verify) { _fun00022_ip = 918; continue _fun00021 }
 915:
            zuuluu = option;
 918:
            tangon['shelf_sorted_rank'] = zuuluu;
            tangon['activity_user_session_id'] = foxtra;
            zuuluu = echoed.type;
            tangon['channel_type'] = zuuluu;
            sequen = golfie == update;
            zuuluu = undefined;
            if(sequen) { _fun00022_ip = 952; continue _fun00021 }
 947:
            zuuluu = update.source;
 952:
            tangon['source'] = zuuluu;
            config = _closure1_slot0;
            zuuluu = _closure1_slot2;
            sequen = 27;
            sequen = zuuluu[sequen];
            config = config.bind(entity)(sequen);
            sequen = config.computeCommandContextType;
            sequen = sequen.bind(config)(echoed, output);
            tangon['command_context_type'] = sequen;
            tangon['invite_inviter_id'] = vacuum;
            tangon = source.bind(ctrled)(result, tangon);
            tangon = _closure1_slot1;
            zuuluu = zuuluu[report];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot20;
            zuuluu = michal.ACTIVITY_IFRAME_MOUNT;
            michal = {};
            source = golfie == update;
            result = undefined;
            if(source) { _fun00022_ip = 1051; continue _fun00021 }
 1045:
            result = update.locations;
 1051:
            michal['location_stack'] = result;
            result = echoed.id;
            michal['channel_id'] = result;
            result = echoed.type;
            michal['channel_type'] = result;
            result = echoed.getGuildId;
            result = result.bind(echoed)();
            michal['guild_id'] = result;
            michal['application_id'] = output;
            sizing = sizing.launchId;
            michal['instance_id'] = sizing;
            backup = kiloes[backup];
            michal['initial_media_session_id'] = backup;
            michal['activity_user_session_id'] = foxtra;
            michal['raw_thermal_state'] = romeon;
            michal['is_activity_start'] = offset;
            romeon = golfie == yankee;
            offset = undefined;
            if(romeon) { _fun00022_ip = 1161; continue _fun00021 }
 1140:
            yankee = yankee.activity;
            romeon = golfie == yankee;
            offset = undefined;
            if(romeon) { _fun00022_ip = 1161; continue _fun00021 }
 1155:
            offset = yankee.shelf_rank;
 1161:
            michal['shelf_rank'] = offset;
            golfie = null;
            if(!verify) { _fun00022_ip = 1174; continue _fun00021 }
 1171:
            golfie = option;
 1174:
            michal['shelf_sorted_rank'] = golfie;
            michal['activities_infra_version'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 1192:
            return entity;
        }
    };
    var _closure1_slot42 = entity;
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
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            zuuluu = _closure1_slot3;
            report = _closure2_slot0;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot33;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = zuuluu.bind(tangon)(oscard, report, entity);
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
                    zuuluu = _closure1_slot38;
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
                            if(zuuluu) { _fun00030_ip = 1605; continue _fun00029 }
 13:
                            oscard = michal.error;
                            golfie = michal.nonce;
                            echoed = michal.channelId;
                            output = michal.applicationId;
                            backup = michal.isStart;
                            tangon = undefined;
                            SaveGenerator(address=46);
 44:
                            return tangon;
 46:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zuuluu) { _fun00030_ip = 1602; continue _fun00029 }
 55:
                            zuuluu = _closure1_slot37;
                            offset = zuuluu.bind(tangon)(output, golfie);
                            yankee = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            update = 30;
                            golfie = zuuluu[update];
                            golfie = yankee.bind(tangon)(golfie);
                            verify = golfie.intl;
                            option = verify.string;
                            golfie = zuuluu[update];
                            golfie = yankee.bind(tangon)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.IOy+Iy;
                            kiloes = option.bind(verify)(golfie);
                            golfie = _closure1_slot1;
                            ctrled = 31;
                            zuuluu = zuuluu[ctrled];
                            zuuluu = golfie.bind(tangon)(zuuluu);
                            zuuluu = oscard instanceof zuuluu;
                            if(zuuluu) { _fun00030_ip = 959; continue _fun00029 }
 149:
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            zuuluu = 34;
                            zuuluu = option[zuuluu];
                            zuuluu = golfie.bind(tangon)(zuuluu);
                            golfie = oscard instanceof zuuluu;
                            zuuluu = _closure1_slot26;
                            if(golfie) { _fun00030_ip = 881; continue _fun00029 }
 183:
                            result = zuuluu.ApiError;
                            sizing = oscard.status;
                            verify = oscard.code;
                            source = oscard.code;
                            golfie = _closure1_slot21;
                            golfie = golfie.INVALID_ACTIVITY_LAUNCH_NO_ACCESS;
                            if(!(golfie !== source)) { _fun00030_ip = 815; continue _fun00029 }
 221:
                            golfie = _closure1_slot21;
                            golfie = golfie.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER;
                            if(!(golfie !== source)) { _fun00030_ip = 747; continue _fun00029 }
 238:
                            golfie = _closure1_slot21;
                            golfie = golfie.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES;
                            if(!(golfie !== source)) { _fun00030_ip = 679; continue _fun00029 }
 255:
                            golfie = _closure1_slot21;
                            golfie = golfie.INVALID_PERMISSIONS;
                            if(!(golfie !== source)) { _fun00030_ip = 613; continue _fun00029 }
 272:
                            golfie = _closure1_slot21;
                            golfie = golfie.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL;
                            if(!(golfie !== source)) { _fun00030_ip = 547; continue _fun00029 }
 289:
                            golfie = _closure1_slot21;
                            golfie = golfie.INVALID_ACTIVITY_LAUNCH_AGE_GATED;
                            if(!(golfie !== source)) { _fun00030_ip = 481; continue _fun00029 }
 306:
                            golfie = _closure1_slot21;
                            golfie = golfie.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE;
                            if(!(golfie !== source)) { _fun00030_ip = 415; continue _fun00029 }
 320:
                            golfie = _closure1_slot21;
                            golfie = golfie.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM;
                            foxtra = result;
                            romeon = sizing;
                            yankee = verify;
                            option = kiloes;
                            if(!(golfie === source)) { _fun00030_ip = 1383; continue _fun00029 }
 349:
                            sequen = _closure1_slot0;
                            golfie = _closure1_slot2;
                            source = golfie[update];
                            source = sequen.bind(tangon)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golfie = golfie[update];
                            golfie = sequen.bind(tangon)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.uGDCc3;
                            option = source.bind(vacuum)(golfie);
                            foxtra = result;
                            romeon = sizing;
                            yankee = verify;
                            _fun00030_ip = 1383; continue _fun00029;
 415:
                            sequen = _closure1_slot0;
                            golfie = _closure1_slot2;
                            source = golfie[update];
                            source = sequen.bind(tangon)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golfie = golfie[update];
                            golfie = sequen.bind(tangon)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.RvkXdX;
                            option = source.bind(vacuum)(golfie);
                            foxtra = result;
                            romeon = sizing;
                            yankee = verify;
                            _fun00030_ip = 1383; continue _fun00029;
 481:
                            sequen = _closure1_slot0;
                            golfie = _closure1_slot2;
                            source = golfie[update];
                            source = sequen.bind(tangon)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golfie = golfie[update];
                            golfie = sequen.bind(tangon)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.4WuFRE;
                            option = source.bind(vacuum)(golfie);
                            foxtra = result;
                            romeon = sizing;
                            yankee = verify;
                            _fun00030_ip = 1383; continue _fun00029;
 547:
                            sequen = _closure1_slot0;
                            golfie = _closure1_slot2;
                            source = golfie[update];
                            source = sequen.bind(tangon)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golfie = golfie[update];
                            golfie = sequen.bind(tangon)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.j29zCg;
                            option = source.bind(vacuum)(golfie);
                            foxtra = result;
                            romeon = sizing;
                            yankee = verify;
                            _fun00030_ip = 1383; continue _fun00029;
 613:
                            sequen = _closure1_slot0;
                            golfie = _closure1_slot2;
                            source = golfie[update];
                            source = sequen.bind(tangon)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golfie = golfie[update];
                            golfie = sequen.bind(tangon)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.hHGrW1;
                            option = source.bind(vacuum)(golfie);
                            foxtra = result;
                            romeon = sizing;
                            yankee = verify;
                            _fun00030_ip = 1383; continue _fun00029;
 679:
                            sequen = _closure1_slot0;
                            golfie = _closure1_slot2;
                            source = golfie[update];
                            source = sequen.bind(tangon)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golfie = golfie[update];
                            golfie = sequen.bind(tangon)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.H+KK6e;
                            option = source.bind(vacuum)(golfie);
                            foxtra = result;
                            romeon = sizing;
                            yankee = verify;
                            _fun00030_ip = 1383; continue _fun00029;
 747:
                            sequen = _closure1_slot0;
                            golfie = _closure1_slot2;
                            source = golfie[update];
                            source = sequen.bind(tangon)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golfie = golfie[update];
                            golfie = sequen.bind(tangon)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.zxv7EB;
                            option = source.bind(vacuum)(golfie);
                            foxtra = result;
                            romeon = sizing;
                            yankee = verify;
                            _fun00030_ip = 1383; continue _fun00029;
 815:
                            sequen = _closure1_slot0;
                            golfie = _closure1_slot2;
                            source = golfie[update];
                            source = sequen.bind(tangon)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golfie = golfie[update];
                            golfie = sequen.bind(tangon)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.Gyzcra;
                            option = source.bind(vacuum)(golfie);
                            foxtra = result;
                            romeon = sizing;
                            yankee = verify;
                            _fun00030_ip = 1383; continue _fun00029;
 881:
                            verify = zuuluu.CallbackError;
                            golfie = oscard.reason;
                            sizing = _closure1_slot0;
                            result = _closure1_slot2;
                            zuuluu = 35;
                            zuuluu = result[zuuluu];
                            result = sizing.bind(tangon)(zuuluu);
                            sizing = result.interactionCallbackErrorReason;
                            zuuluu = oscard.reason;
                            sizing = sizing.bind(result)(zuuluu, output);
                            result = null;
                            zuuluu = kiloes;
                            if(!(result != sizing)) { _fun00030_ip = 943; continue _fun00029 }
 940:
                            zuuluu = sizing;
 943:
                            option = zuuluu;
                            foxtra = verify;
                            romeon = undefined;
                            yankee = golfie;
                            _fun00030_ip = 1383; continue _fun00029;
 959:
                            zuuluu = _closure1_slot26;
                            verify = zuuluu.ClientError;
                            golfie = oscard.reason;
                            sizing = _closure1_slot17;
                            zuuluu = sizing.getFetchState;
                            result = zuuluu.bind(sizing)();
                            sizing = _closure1_slot0;
                            source = _closure1_slot2;
                            zuuluu = 32;
                            zuuluu = source[zuuluu];
                            zuuluu = sizing.bind(tangon)(zuuluu);
                            sizing = zuuluu.DeveloperMode;
                            zuuluu = sizing.getSetting;
                            zuuluu = zuuluu.bind(sizing)();
                            if(!zuuluu) { _fun00030_ip = 1042; continue _fun00029 }
 1028:
                            sizing = _closure1_slot18;
                            sizing = sizing.LOADED;
                            zuuluu = result !== sizing;
 1042:
                            if(!zuuluu) { _fun00030_ip = 1088; continue _fun00029 }
 1045:
                            sizing = _closure1_slot0;
                            result = _closure1_slot2;
                            zuuluu = 33;
                            zuuluu = result[zuuluu];
                            sizing = sizing.bind(tangon)(zuuluu);
                            zuuluu = sizing.fetchDeveloperApplications;
                            zuuluu = zuuluu.bind(sizing)();
                            SaveGenerator(address=1079);
 1077:
                            return zuuluu;
 1079:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=15);
                            if(sizing) { _fun00030_ip = 1599; continue _fun00029 }
 1088:
                            result = oscard.reason;
                            source = _closure1_slot1;
                            sizing = _closure1_slot2;
                            sizing = sizing[ctrled];
                            sizing = source.bind(tangon)(sizing);
                            sizing = sizing.Reasons;
                            sizing = sizing.PRIMARY_APP_COMMAND_NOT_FOUND;
                            if(!(sizing !== result)) { _fun00030_ip = 1292; continue _fun00029 }
 1130:
                            source = _closure1_slot1;
                            sizing = _closure1_slot2;
                            sizing = sizing[ctrled];
                            sizing = source.bind(tangon)(sizing);
                            sizing = sizing.Reasons;
                            sizing = sizing.INVALID_CHANNEL;
                            if(!(sizing !== result)) { _fun00030_ip = 1230; continue _fun00029 }
 1163:
                            source = _closure1_slot1;
                            sizing = _closure1_slot2;
                            sizing = sizing[ctrled];
                            sizing = source.bind(tangon)(sizing);
                            sizing = sizing.Reasons;
                            sizing = sizing.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                            foxtra = verify;
                            romeon = undefined;
                            yankee = golfie;
                            option = kiloes;
                            if(!(sizing === result)) { _fun00030_ip = 1383; continue _fun00029 }
 1210:
                            romeon = oscard.detailCode;
                            foxtra = verify;
                            yankee = golfie;
                            option = kiloes;
                            _fun00030_ip = 1383; continue _fun00029;
 1230:
                            source = _closure1_slot0;
                            oscard = _closure1_slot2;
                            sizing = oscard[update];
                            sizing = source.bind(tangon)(sizing);
                            result = sizing.intl;
                            sizing = result.string;
                            oscard = oscard[update];
                            oscard = source.bind(tangon)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.j29zCg;
                            option = sizing.bind(result)(oscard);
                            foxtra = verify;
                            romeon = undefined;
                            yankee = golfie;
                            _fun00030_ip = 1383; continue _fun00029;
 1292:
                            sizing = _closure1_slot17;
                            oscard = sizing.inDevModeForApplication;
                            oscard = oscard.bind(sizing)(output);
                            foxtra = verify;
                            romeon = undefined;
                            yankee = golfie;
                            option = kiloes;
                            if(!oscard) { _fun00030_ip = 1383; continue _fun00029 }
 1321:
                            result = _closure1_slot0;
                            oscard = _closure1_slot2;
                            kiloes = oscard[update];
                            kiloes = result.bind(tangon)(kiloes);
                            sizing = kiloes.intl;
                            kiloes = sizing.string;
                            oscard = oscard[update];
                            oscard = result.bind(tangon)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.hXRXf3;
                            option = kiloes.bind(sizing)(oscard);
                            foxtra = verify;
                            romeon = undefined;
                            yankee = golfie;
 1383:
                            golfie = _closure3_slot0;
                            oscard = golfie.showLaunchErrorModal;
                            oscard = oscard.bind(golfie)(option);
                            golfie = _closure1_slot12;
                            oscard = golfie.getChannel;
                            kiloes = oscard.bind(golfie)(echoed);
                            verify = null;
                            if(!(verify != kiloes)) { _fun00030_ip = 1596; continue _fun00029 }
 1424:
                            oscard = kiloes.getGuildId;
                            result = oscard.bind(kiloes)();
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            oscard = 22;
                            oscard = option[oscard];
                            sizing = golfie.bind(tangon)(oscard);
                            oscard = sizing.getRawThermalState;
                            sizing = oscard.bind(sizing)();
                            oscard = 23;
                            oscard = option[oscard];
                            option = golfie.bind(tangon)(oscard);
                            golfie = option.track;
                            report = _closure1_slot20;
                            oscard = report.ACTIVITY_SESSION_JOIN_FAILED;
                            report = {};
                            report['channel_id'] = echoed;
                            report['guild_id'] = result;
                            report['application_id'] = output;
                            report['raw_thermal_state'] = sizing;
                            report['is_activity_start'] = backup;
                            sizing = verify == kiloes;
                            backup = undefined;
                            if(sizing) { _fun00030_ip = 1530; continue _fun00029 }
 1525:
                            backup = kiloes.type;
 1530:
                            report['channel_type'] = backup;
                            kiloes = verify == offset;
                            backup = undefined;
                            if(kiloes) { _fun00030_ip = 1550; continue _fun00029 }
 1544:
                            backup = offset.locations;
 1550:
                            report['location_stack'] = backup;
                            report['error_type'] = foxtra;
                            report['error_status'] = romeon;
                            report['error_code'] = yankee;
                            yankee = verify == offset;
                            verify = undefined;
                            if(yankee) { _fun00030_ip = 1586; continue _fun00029 }
 1581:
                            verify = offset.source;
 1586:
                            report['source'] = verify;
                            report = golfie.bind(option)(oscard, report);
 1596:
                            return tangon;
 1599:
                            return zuuluu;
 1602:
                            return michal;
 1605:
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
                    report = _closure1_slot36;
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
                    tangon = entity.nonce;
                    michal = null;
                    if(!(michal != tangon)) { _fun00048_ip = 50; continue _fun00047 }
 15:
                    zuuluu = _closure1_slot29;
                    zuuluu = zuuluu[tangon];
                    if(!(michal != zuuluu)) { _fun00048_ip = 50; continue _fun00047 }
 30:
                    michal = _closure1_slot29;
                    michal = delete michal[tangon];
                    michal = _closure1_slot38;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu, tangon);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleInteractionSuccess'] = zuuluu;
            michal = function(argFoo) {
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
            entity['handleInteractionFailure'] = michal;
            return entity;
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
            zuuluu = _closure1_slot42;
            zuuluu = golfie.bind(option)(tangon, zuuluu);
            tangon = _closure1_slot1;
            zuuluu = 44;
            golfie = report[zuuluu];
            offset = tangon.bind(entity)(golfie);
            verify = offset.subscribe;
            option = _closure1_slot39;
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
            golfie = _closure1_slot40;
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
            zuuluu = _closure1_slot42;
            zuuluu = golfie.bind(option)(tangon, zuuluu);
            tangon = _closure1_slot1;
            zuuluu = 44;
            golfie = report[zuuluu];
            offset = tangon.bind(entity)(golfie);
            verify = offset.unsubscribe;
            option = _closure1_slot39;
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
            golfie = _closure1_slot40;
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