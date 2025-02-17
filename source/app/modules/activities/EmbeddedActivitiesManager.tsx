// app/modules/activities/EmbeddedActivitiesManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot32;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot32;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot34;
            entity = entity.bind(zulu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00008_ip = 71; continue _fun00007 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
            _fun00010_ip = 74; continue _fun00009;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot34 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: getShelfItemTrackingProperties
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = argFoo;
            entity = {};
            tango = null;
            report = tango == zulu;
            oscar = undefined;
            mike = undefined;
            if(report) { _fun00012_ip = 103; continue _fun00011 }
 18:
            zulu = zulu.activity;
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun00012_ip = 103; continue _fun00011 }
 33:
            tango = zulu.client_platform_config;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            report = 17;
            report = options[report];
            report = golf.bind(oscar)(report);
            golf = _closure1_slot0;
            zulu = 18;
            zulu = options[zulu];
            golf = golf.bind(oscar)(zulu);
            zulu = golf.getOS;
            zulu = zulu.bind(golf)();
            zulu = report.bind(oscar)(zulu);
            zulu = tango[zulu];
            mike = zulu.release_phase;
 103:
            entity['releasePhase'] = mike;
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: setAwaitingAnalyticsContext
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            tango = entity.applicationId;
            golf = entity.nonce;
            oscar = entity.locations;
            report = entity.source;
            mike = null;
            entity = mike != oscar;
            if(entity) { _fun00014_ip = 38; continue _fun00013 }
 34:
            entity = mike != report;
 38:
            if(!entity) { _fun00014_ip = 70; continue _fun00013 }
 41:
            zulu = _closure1_slot28;
            mike = {};
            mike['nonce'] = golf;
            mike['locations'] = oscar;
            mike['source'] = report;
            zulu[tango] = mike;
            entity = true;
 70:
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo, argBar) { // Original name: clearAwaitingAnalyticsContextImmediate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot28;
            entity = entity[zulu];
            tango = null;
            if(!(tango != entity)) { _fun00016_ip = 33; continue _fun00015 }
 20:
            report = entity.nonce;
            tango = argBar;
            if(!(report !== tango)) { _fun00016_ip = 37; continue _fun00015 }
 33:
            tango = undefined;
            return tango;
 37:
            mike = _closure1_slot28;
            mike = delete mike[zulu];
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
        tango = entity.setTimeout;
        entity = undefined;
        zulu = function() {
            tango = _closure1_slot37;
            zulu = _closure2_slot0;
            mike = _closure2_slot1;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        mike = 2000;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: handleActivityLaunchStart
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            mike = argFoo;
            oscar = mike.applicationId;
            tango = mike.nonce;
            entity = mike.analyticsLocations;
            report = mike.source;
            zulu = _closure1_slot36;
            mike = {};
            mike['applicationId'] = oscar;
            mike['nonce'] = tango;
            mike['locations'] = entity;
            entity = null;
            oscar = entity != report;
            entity = undefined;
            tango = undefined;
            if(!oscar) { _fun00018_ip = 64; continue _fun00017 }
 61:
            tango = report;
 64:
            mike['source'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function() { // Original name: handleActivityClose
        entity = undefined;
        tango = _closure1_slot41;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot40 = entity;
    entity = function() { // Original name: _handleActivityClose
        report = undefined;
        entity = undefined;
        tango = _closure1_slot8;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00020_ip = 742; continue _fun00019 }
 13:
                    oscar = mike.applicationId;
                    romeo = mike.location;
                    sizing = mike.instanceId;
                    tango = undefined;
                    SaveGenerator(address=35);
 33:
                    return tango;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00020_ip = 739; continue _fun00019 }
 44:
                    options = _closure1_slot19;
                    golf = options.getEmbeddedActivityDurationMs;
                    zulu = romeo.id;
                    yankee = golf.bind(options)(zulu, oscar);
                    golf = _closure1_slot11;
                    zulu = golf.getSessionId;
                    offset = zulu.bind(golf)();
                    kilo = null;
                    zulu = kilo != sizing;
                    if(!zulu) { _fun00020_ip = 97; continue _fun00019 }
 93:
                    zulu = kilo != offset;
 97:
                    if(!zulu) { _fun00020_ip = 202; continue _fun00019 }
 100:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 19;
                    zulu = options[zulu];
                    zulu = golf.bind(tango)(zulu);
                    options = zulu.HTTP;
                    golf = options.post;
                    zulu = {};
                    backup = _closure1_slot23;
                    foxtrot = backup.ACTIVITY_LEAVE;
                    verify = romeo.id;
                    verify = foxtrot.bind(backup)(oscar, verify, sizing);
                    zulu['url'] = verify;
                    verify = {};
                    verify['session_id'] = offset;
                    zulu['body'] = verify;
                    verify = 2;
                    zulu['retries'] = verify;
                    verify = false;
                    zulu['rejectWithError'] = verify;
                    zulu = golf.bind(options)(zulu);
                    SaveGenerator(address=193);
 191:
                    return zulu;
 193:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00020_ip = 736; continue _fun00019 }
 202:
                    golf = _closure1_slot27;
                    foxtrot = golf[oscar];
                    verify = _closure1_slot12;
                    options = verify.getChannel;
                    offset = _closure1_slot0;
                    backup = _closure1_slot2;
                    golf = 20;
                    golf = backup[golf];
                    offset = offset.bind(tango)(golf);
                    golf = offset.getEmbeddedActivityLocationChannelId;
                    golf = golf.bind(offset)(romeo);
                    sizing = options.bind(verify)(golf);
                    options = _closure1_slot15;
                    golf = options.getCurrentUser;
                    update = golf.bind(options)();
                    if(!(kilo != foxtrot)) { _fun00020_ip = 733; continue _fun00019 }
 275:
                    if(!(kilo != sizing)) { _fun00020_ip = 733; continue _fun00019 }
 282:
                    if(!(kilo != update)) { _fun00020_ip = 733; continue _fun00019 }
 289:
                    golf = sizing.getGuildId;
                    backup = golf.bind(sizing)();
                    options = _closure1_slot19;
                    golf = options.getShelfActivities;
                    romeo = golf.bind(options)(backup);
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    verify = 21;
                    verify = golf[verify];
                    offset = options.bind(tango)(verify);
                    verify = {};
                    verify['applicationId'] = oscar;
                    verify['activityConfigs'] = romeo;
                    echo = offset.bind(tango)(verify);
                    verify = _closure1_slot35;
                    verify = verify.bind(tango)(echo);
                    result = verify.releasePhase;
                    verify = 22;
                    verify = golf[verify];
                    offset = options.bind(tango)(verify);
                    verify = offset.getRawThermalState;
                    romeo = verify.bind(offset)();
                    verify = 23;
                    golf = golf[verify];
                    output = options.bind(tango)(golf);
                    offset = output.track;
                    golf = _closure1_slot20;
                    options = golf.ACTIVITY_SESSION_LEFT;
                    golf = {};
                    source = sizing.id;
                    golf['channel_id'] = source;
                    golf['guild_id'] = backup;
                    control = foxtrot.mediaSessionIds;
                    source = 0;
                    source = control[source];
                    golf['media_session_id'] = source;
                    source = foxtrot.activitySessionId;
                    golf['activity_session_id'] = source;
                    golf['application_id'] = oscar;
                    golf['duration_ms'] = yankee;
                    update = update.premiumType;
                    golf['user_premium_tier'] = update;
                    golf['raw_thermal_state'] = romeo;
                    golf['release_phase'] = result;
                    update = kilo == echo;
                    result = undefined;
                    if(update) { _fun00020_ip = 518; continue _fun00019 }
 497:
                    update = echo.activity;
                    source = kilo == update;
                    result = undefined;
                    if(source) { _fun00020_ip = 518; continue _fun00019 }
 512:
                    result = update.premium_tier_requirement;
 518:
                    golf['activity_premium_tier_requirement'] = result;
                    update = kilo == echo;
                    result = undefined;
                    if(update) { _fun00020_ip = 553; continue _fun00019 }
 532:
                    echo = echo.activity;
                    update = kilo == echo;
                    result = undefined;
                    if(update) { _fun00020_ip = 553; continue _fun00019 }
 547:
                    result = echo.shelf_rank;
 553:
                    golf['shelf_rank'] = result;
                    result = foxtrot.activityUserSessionId;
                    golf['activity_user_session_id'] = result;
                    result = sizing.type;
                    golf['channel_type'] = result;
                    result = foxtrot.mediaSessionIds;
                    golf['media_session_ids'] = result;
                    golf = offset.bind(output)(options, golf);
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[verify];
                    offset = options.bind(tango)(golf);
                    verify = offset.track;
                    golf = _closure1_slot20;
                    options = golf.ACTIVITY_IFRAME_UNMOUNT;
                    golf = {};
                    sizing = sizing.id;
                    golf['channel_id'] = sizing;
                    golf['guild_id'] = backup;
                    golf['application_id'] = oscar;
                    backup = foxtrot.launchId;
                    kilo = kilo != backup;
                    backup = undefined;
                    if(!kilo) { _fun00020_ip = 680; continue _fun00019 }
 663:
                    sizing = foxtrot.launchId;
                    kilo = new Array(1);
                    kilo[0] = sizing;
                    backup = kilo;
 680:
                    golf['instance_ids'] = backup;
                    backup = foxtrot.mediaSessionIds;
                    golf['media_session_ids'] = backup;
                    foxtrot = foxtrot.activityUserSessionId;
                    golf['activity_user_session_id'] = foxtrot;
                    golf['raw_thermal_state'] = romeo;
                    golf['duration_ms'] = yankee;
                    golf = verify.bind(offset)(options, golf);
                    report = _closure1_slot27;
                    report = delete report[oscar];
 733:
                    return tango;
 736:
                    return zulu;
 739:
                    return mike;
 742:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot41 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo) { // Original name: handleOpenEmbeddedActivity
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            output = entity.applicationId;
            var _closure2_slot0 = output;
            oscar = entity.isFirstActivityInChannel;
            offset = entity.isStart;
            report = entity.participants;
            sizing = entity.embeddedActivity;
            options = entity.location;
            vacuum = entity.inviterUserId;
            tango = _closure1_slot11;
            entity = tango.getId;
            entity = entity.bind(tango)();
            var _closure2_slot1 = entity;
            tango = report.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.userId;
                entity = _closure2_slot1;
                entity = mike === entity;
                return entity;
            };
            report = tango.bind(report)(entity);
            golf = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 20;
            tango = tango[entity];
            entity = undefined;
            golf = golf.bind(entity)(tango);
            tango = golf.getEmbeddedActivityLocationChannelId;
            options = tango.bind(golf)(options);
            golf = _closure1_slot12;
            tango = golf.getChannel;
            echo = tango.bind(golf)(options);
            tango = offset;
            if(!tango) { _fun00022_ip = 144; continue _fun00021 }
 138:
            golf = null;
            tango = golf != echo;
 144:
            if(!tango) { _fun00022_ip = 157; continue _fun00021 }
 147:
            golf = echo.isPrivate;
            tango = golf.bind(echo)();
 157:
            if(!tango) { _fun00022_ip = 163; continue _fun00021 }
 160:
            tango = oscar;
 163:
            if(!tango) { _fun00022_ip = 172; continue _fun00021 }
 166:
            oscar = null;
            tango = oscar == report;
 172:
            if(!tango) { _fun00022_ip = 214; continue _fun00021 }
 175:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 24;
            tango = golf[tango];
            options = oscar.bind(entity)(tango);
            golf = options.selectParticipant;
            oscar = echo.id;
            tango = null;
            tango = golf.bind(options)(oscar, tango);
 214:
            golf = null;
            if(!(golf != report)) { _fun00022_ip = 1192; continue _fun00021 }
 223:
            oscar = _closure1_slot13;
            tango = oscar.getMediaSessionId;
            backup = tango.bind(oscar)();
            sequence = sizing.compositeInstanceId;
            tango = golf == backup;
            if(!tango) { _fun00022_ip = 275; continue _fun00021 }
 250:
            oscar = golf == echo;
            options = undefined;
            if(oscar) { _fun00022_ip = 269; continue _fun00021 }
 259:
            oscar = echo.isVocal;
            options = oscar.bind(echo)();
 269:
            oscar = true;
            tango = oscar === options;
 275:
            if(!tango) { _fun00022_ip = 303; continue _fun00021 }
 278:
            oscar = golf == echo;
            options = undefined;
            if(oscar) { _fun00022_ip = 297; continue _fun00021 }
 287:
            oscar = echo.isPrivate;
            options = oscar.bind(echo)();
 297:
            oscar = false;
            tango = oscar === options;
 303:
            if(!(golf != sequence)) { _fun00022_ip = 1192; continue _fun00021 }
 310:
            if(tango) { _fun00022_ip = 1192; continue _fun00021 }
 316:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            tango = 25;
            tango = options[tango];
            oscar = oscar.bind(entity)(tango);
            tango = oscar.v4;
            foxtrot = tango.bind(oscar)();
            tango = 'location';
            options = tango in sizing;
            tango = 1;
            oscar = tango;
            if(!options) { _fun00022_ip = 366; continue _fun00021 }
 363:
            oscar = 2;
 366:
            options = golf == echo;
            romeo = undefined;
            if(options) { _fun00022_ip = 385; continue _fun00021 }
 375:
            options = echo.getGuildId;
            romeo = options.bind(echo)();
 385:
            verify = _closure1_slot15;
            options = verify.getCurrentUser;
            verify = options.bind(verify)();
            if(!(golf != echo)) { _fun00022_ip = 1192; continue _fun00021 }
 405:
            if(!(golf != verify)) { _fun00022_ip = 1192; continue _fun00021 }
 412:
            yankee = _closure1_slot19;
            options = yankee.getShelfActivities;
            update = options.bind(yankee)(romeo);
            yankee = _closure1_slot16;
            options = yankee.getState;
            options = options.bind(yankee)();
            result = options.shelfOrder;
            romeo = _closure1_slot1;
            kilo = _closure1_slot2;
            options = 21;
            options = kilo[options];
            yankee = romeo.bind(entity)(options);
            options = {};
            options['applicationId'] = output;
            options['activityConfigs'] = update;
            yankee = yankee.bind(entity)(options);
            options = result.findIndex;
            zulu = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity === mike;
                return entity;
            };
            zulu = options.bind(result)(zulu);
            options = tango + zulu;
            zulu = _closure1_slot35;
            zulu = zulu.bind(entity)(yankee);
            zulu = zulu.releasePhase;
            tango = 22;
            tango = kilo[tango];
            romeo = romeo.bind(entity)(tango);
            tango = romeo.getRawThermalState;
            romeo = tango.bind(romeo)();
            if(!(golf == backup)) { _fun00022_ip = 550; continue _fun00021 }
 544:
            kilo = new Array(0);
            _fun00022_ip = 561; continue _fun00021;
 550:
            tango = new Array(1);
            tango[0] = backup;
            kilo = tango;
 561:
            backup = {};
            backup['activitySessionId'] = sequence;
            backup['activityUserSessionId'] = foxtrot;
            tango = sizing.launchId;
            backup['launchId'] = tango;
            backup['mediaSessionIds'] = kilo;
            backup['activitiesInfraVersion'] = oscar;
            tango = _closure1_slot27;
            tango[output] = backup;
            tango = _closure1_slot28;
            update = tango[output];
            backup = _closure1_slot0;
            result = _closure1_slot2;
            tango = 26;
            tango = result[tango];
            result = backup.bind(entity)(tango);
            backup = result.isNullOrEmpty;
            tango = report.nonce;
            tango = backup.bind(result)(tango);
            if(tango) { _fun00022_ip = 677; continue _fun00021 }
 652:
            backup = report.nonce;
            result = golf == update;
            report = undefined;
            if(result) { _fun00022_ip = 673; continue _fun00021 }
 667:
            report = update.nonce;
 673:
            tango = backup === report;
 677:
            if(tango) { _fun00022_ip = 682; continue _fun00021 }
 680:
            update = undefined;
 682:
            backup = _closure1_slot1;
            tango = _closure1_slot2;
            report = 23;
            tango = tango[report];
            control = backup.bind(entity)(tango);
            source = control.track;
            tango = _closure1_slot20;
            result = tango.ACTIVITY_SESSION_JOINED;
            tango = {};
            backup = echo.id;
            tango['channel_id'] = backup;
            backup = echo.getGuildId;
            backup = backup.bind(echo)();
            tango['guild_id'] = backup;
            backup = 0;
            config = kilo[backup];
            tango['media_session_id'] = config;
            tango['activity_session_id'] = sequence;
            tango['application_id'] = output;
            config = golf == update;
            sequence = undefined;
            if(config) { _fun00022_ip = 778; continue _fun00021 }
 772:
            sequence = update.locations;
 778:
            tango['location_stack'] = sequence;
            verify = verify.premiumType;
            tango['user_premium_tier'] = verify;
            tango['raw_thermal_state'] = romeo;
            config = _closure1_slot9;
            sequence = config.getUserParticipantCount;
            verify = echo.id;
            verify = sequence.bind(config)(verify);
            tango['n_participants'] = verify;
            tango['is_activity_start'] = offset;
            tango['release_phase'] = zulu;
            verify = golf == yankee;
            zulu = undefined;
            if(verify) { _fun00022_ip = 866; continue _fun00021 }
 845:
            verify = yankee.activity;
            sequence = golf == verify;
            zulu = undefined;
            if(sequence) { _fun00022_ip = 866; continue _fun00021 }
 860:
            zulu = verify.premium_tier_requirement;
 866:
            tango['activity_premium_tier_requirement'] = zulu;
            verify = golf == yankee;
            zulu = undefined;
            if(verify) { _fun00022_ip = 901; continue _fun00021 }
 880:
            verify = yankee.activity;
            sequence = golf == verify;
            zulu = undefined;
            if(sequence) { _fun00022_ip = 901; continue _fun00021 }
 895:
            zulu = verify.shelf_rank;
 901:
            tango['shelf_rank'] = zulu;
            verify = options > backup;
            zulu = null;
            if(!verify) { _fun00022_ip = 918; continue _fun00021 }
 915:
            zulu = options;
 918:
            tango['shelf_sorted_rank'] = zulu;
            tango['activity_user_session_id'] = foxtrot;
            zulu = echo.type;
            tango['channel_type'] = zulu;
            sequence = golf == update;
            zulu = undefined;
            if(sequence) { _fun00022_ip = 952; continue _fun00021 }
 947:
            zulu = update.source;
 952:
            tango['source'] = zulu;
            config = _closure1_slot0;
            zulu = _closure1_slot2;
            sequence = 27;
            sequence = zulu[sequence];
            config = config.bind(entity)(sequence);
            sequence = config.computeCommandContextType;
            sequence = sequence.bind(config)(echo, output);
            tango['command_context_type'] = sequence;
            tango['invite_inviter_id'] = vacuum;
            tango = source.bind(control)(result, tango);
            tango = _closure1_slot1;
            zulu = zulu[report];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot20;
            zulu = mike.ACTIVITY_IFRAME_MOUNT;
            mike = {};
            source = golf == update;
            result = undefined;
            if(source) { _fun00022_ip = 1051; continue _fun00021 }
 1045:
            result = update.locations;
 1051:
            mike['location_stack'] = result;
            result = echo.id;
            mike['channel_id'] = result;
            result = echo.type;
            mike['channel_type'] = result;
            result = echo.getGuildId;
            result = result.bind(echo)();
            mike['guild_id'] = result;
            mike['application_id'] = output;
            sizing = sizing.launchId;
            mike['instance_id'] = sizing;
            backup = kilo[backup];
            mike['initial_media_session_id'] = backup;
            mike['activity_user_session_id'] = foxtrot;
            mike['raw_thermal_state'] = romeo;
            mike['is_activity_start'] = offset;
            romeo = golf == yankee;
            offset = undefined;
            if(romeo) { _fun00022_ip = 1161; continue _fun00021 }
 1140:
            yankee = yankee.activity;
            romeo = golf == yankee;
            offset = undefined;
            if(romeo) { _fun00022_ip = 1161; continue _fun00021 }
 1155:
            offset = yankee.shelf_rank;
 1161:
            mike['shelf_rank'] = offset;
            golf = null;
            if(!verify) { _fun00022_ip = 1174; continue _fun00021 }
 1171:
            golf = options;
 1174:
            mike['shelf_sorted_rank'] = golf;
            mike['activities_infra_version'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 1192:
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    yankee = 0;
    tango = golf[yankee];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    offset = 1;
    tango = golf[offset];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    verify = 2;
    tango = golf[verify];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot10 = tango;
    tango = 8;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 12;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 13;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 14;
    options = golf[tango];
    options = report.bind(entity)(options);
    var _closure1_slot17 = options;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.DevShelfFetchState;
    var _closure1_slot18 = tango;
    tango = 15;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot19 = tango;
    tango = 16;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    options = tango.AnalyticEvents;
    var _closure1_slot20 = options;
    options = tango.AbortCodes;
    var _closure1_slot21 = options;
    options = tango.RPCCloseCodes;
    var _closure1_slot22 = options;
    options = tango.Endpoints;
    var _closure1_slot23 = options;
    options = tango.RTCConnectionStates;
    var _closure1_slot24 = options;
    tango = tango.ComponentActions;
    var _closure1_slot25 = tango;
    tango = {};
    tango['ClientError'] = yankee;
    options = 'ClientError';
    tango[yankee] = options;
    tango['CallbackError'] = offset;
    options = 'CallbackError';
    tango[offset] = options;
    tango['ApiError'] = verify;
    options = 'ApiError';
    tango[verify] = options;
    var _closure1_slot26 = tango;
    tango = {};
    var _closure1_slot27 = tango;
    tango = {};
    var _closure1_slot28 = tango;
    tango = {};
    var _closure1_slot29 = tango;
    var _closure1_slot30 = entity;
    tango = 44;
    tango = golf[tango];
    report = report.bind(entity)(tango);
    tango = function(argFoo) {
        tango = function(argFoo) { // Original name: EmbeddedActivitiesManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot33;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    mike = _closure1_slot14;
                    entity = mike.getVoiceChannelId;
                    tango = entity.bind(mike)();
                    oscar = _closure1_slot31;
                    mike = _closure1_slot19;
                    entity = mike.getSelfEmbeddedActivities;
                    mike = entity.bind(mike)();
                    entity = mike.values;
                    mike = entity.bind(mike)();
                    entity = undefined;
                    yankee = oscar.bind(entity)(mike);
                    golf = yankee.bind(entity)();
                    oscar = golf.done;
                    verify = 28;
                    options = 20;
                    mike = null;
                    if(oscar) { _fun00024_ip = 201; continue _fun00023 }
 79:
                    oscar = golf.value;
                    kilo = oscar.location;
                    backup = oscar.applicationId;
                    romeo = _closure1_slot0;
                    oscar = _closure1_slot2;
                    oscar = oscar[options];
                    romeo = romeo.bind(entity)(oscar);
                    oscar = romeo.getEmbeddedActivityLocationChannelId;
                    romeo = oscar.bind(romeo)(kilo);
                    oscar = mike != romeo;
                    if(!oscar) { _fun00024_ip = 151; continue _fun00023 }
 129:
                    sizing = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    foxtrot = foxtrot[verify];
                    foxtrot = sizing.bind(entity)(foxtrot);
                    oscar = foxtrot.bind(entity)(romeo);
 151:
                    if(!oscar) { _fun00024_ip = 158; continue _fun00023 }
 154:
                    oscar = romeo !== tango;
 158:
                    if(!oscar) { _fun00024_ip = 186; continue _fun00023 }
 161:
                    foxtrot = _closure3_slot0;
                    romeo = foxtrot.leaveActivity;
                    oscar = {};
                    oscar['location'] = kilo;
                    oscar['applicationId'] = backup;
                    oscar = romeo.bind(foxtrot)(oscar);
 186:
                    romeo = yankee.bind(entity)();
                    oscar = romeo.done;
                    golf = romeo;
                    if(!oscar) { _fun00024_ip = 79; continue _fun00023 }
 201:
                    if(!(mike != tango)) { _fun00024_ip = 253; continue _fun00023 }
 205:
                    golf = _closure1_slot19;
                    oscar = golf.getEmbeddedActivitiesForChannel;
                    golf = oscar.bind(golf)(tango);
                    options = _closure1_slot11;
                    oscar = options.getId;
                    oscar = oscar.bind(options)();
                    var _closure4_slot0 = oscar;
                    oscar = golf.forEach;
                    report = function(argFoo) {
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                            tango = argFoo;
                            zulu = tango.userIds;
                            mike = zulu.has;
                            entity = _closure4_slot0;
                            entity = mike.bind(zulu)(entity);
                            if(!entity) { _fun00026_ip = 182; continue _fun00025 }
 32:
                            report = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 20;
                            zulu = zulu[mike];
                            mike = undefined;
                            report = report.bind(mike)(zulu);
                            zulu = report.getEmbeddedActivityLocationChannelId;
                            mike = tango.location;
                            report = zulu.bind(report)(mike);
                            zulu = _closure1_slot19;
                            mike = zulu.getSelfEmbeddedActivityForChannel;
                            report = mike.bind(zulu)(report);
                            mike = null;
                            if(!(mike != report)) { _fun00026_ip = 144; continue _fun00025 }
 94:
                            entity = _closure1_slot30;
                            if(!(mike == entity)) { _fun00026_ip = 182; continue _fun00025 }
 102:
                            zulu = _closure3_slot0;
                            mike = zulu.hidePIPEmbed;
                            entity = {};
                            oscar = report.location;
                            entity['location'] = oscar;
                            report = report.applicationId;
                            entity['applicationId'] = report;
                            entity = mike.bind(zulu)(entity);
                            _fun00026_ip = 182; continue _fun00025;
 144:
                            zulu = _closure3_slot0;
                            mike = zulu.leaveActivity;
                            entity = {};
                            report = tango.location;
                            entity['location'] = report;
                            tango = tango.applicationId;
                            entity['applicationId'] = tango;
                            entity = mike.bind(zulu)(entity);
 182:
                            entity = undefined;
                            return entity;
                        }
                    };
                    report = oscar.bind(golf)(report);
 253:
                    report = mike != tango;
                    mike = undefined;
                    if(!report) { _fun00024_ip = 265; continue _fun00023 }
 262:
                    mike = tango;
 265:
                    _closure1_slot30 = mike;
                    return entity;
                }
            };
            entity['handleSelectedChannelUpdate'] = zulu;
            zulu = function() {
                mike = _closure3_slot0;
                entity = mike.releaseWebView;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            entity['handleActivityWebViewRelease'] = zulu;
            zulu = function(argFoo) {
                entity = argFoo;
                tango = entity.nonce;
                zulu = entity.applicationId;
                mike = _closure1_slot38;
                entity = undefined;
                mike = mike.bind(entity)(zulu, tango);
                return entity;
            };
            entity['handleActivityLaunchSuccess'] = zulu;
            zulu = function() {
                tango = _closure1_slot8;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            StartGenerator();
                            mike = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(zulu) { _fun00028_ip = 1605; continue _fun00027 }
 13:
                            oscar = mike.error;
                            golf = mike.nonce;
                            echo = mike.channelId;
                            output = mike.applicationId;
                            backup = mike.isStart;
                            tango = undefined;
                            SaveGenerator(address=46);
 44:
                            return tango;
 46:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zulu) { _fun00028_ip = 1602; continue _fun00027 }
 55:
                            zulu = _closure1_slot37;
                            offset = zulu.bind(tango)(output, golf);
                            yankee = _closure1_slot0;
                            zulu = _closure1_slot2;
                            update = 29;
                            golf = zulu[update];
                            golf = yankee.bind(tango)(golf);
                            verify = golf.intl;
                            options = verify.string;
                            golf = zulu[update];
                            golf = yankee.bind(tango)(golf);
                            golf = golf.t;
                            golf = golf.IOy+Iy;
                            kilo = options.bind(verify)(golf);
                            golf = _closure1_slot1;
                            control = 30;
                            zulu = zulu[control];
                            zulu = golf.bind(tango)(zulu);
                            zulu = oscar instanceof zulu;
                            if(zulu) { _fun00028_ip = 959; continue _fun00027 }
 149:
                            golf = _closure1_slot1;
                            options = _closure1_slot2;
                            zulu = 33;
                            zulu = options[zulu];
                            zulu = golf.bind(tango)(zulu);
                            golf = oscar instanceof zulu;
                            zulu = _closure1_slot26;
                            if(golf) { _fun00028_ip = 881; continue _fun00027 }
 183:
                            result = zulu.ApiError;
                            sizing = oscar.status;
                            verify = oscar.code;
                            source = oscar.code;
                            golf = _closure1_slot21;
                            golf = golf.INVALID_ACTIVITY_LAUNCH_NO_ACCESS;
                            if(!(golf !== source)) { _fun00028_ip = 815; continue _fun00027 }
 221:
                            golf = _closure1_slot21;
                            golf = golf.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER;
                            if(!(golf !== source)) { _fun00028_ip = 747; continue _fun00027 }
 238:
                            golf = _closure1_slot21;
                            golf = golf.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES;
                            if(!(golf !== source)) { _fun00028_ip = 679; continue _fun00027 }
 255:
                            golf = _closure1_slot21;
                            golf = golf.INVALID_PERMISSIONS;
                            if(!(golf !== source)) { _fun00028_ip = 613; continue _fun00027 }
 272:
                            golf = _closure1_slot21;
                            golf = golf.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL;
                            if(!(golf !== source)) { _fun00028_ip = 547; continue _fun00027 }
 289:
                            golf = _closure1_slot21;
                            golf = golf.INVALID_ACTIVITY_LAUNCH_AGE_GATED;
                            if(!(golf !== source)) { _fun00028_ip = 481; continue _fun00027 }
 306:
                            golf = _closure1_slot21;
                            golf = golf.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE;
                            if(!(golf !== source)) { _fun00028_ip = 415; continue _fun00027 }
 320:
                            golf = _closure1_slot21;
                            golf = golf.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM;
                            foxtrot = result;
                            romeo = sizing;
                            yankee = verify;
                            options = kilo;
                            if(!(golf === source)) { _fun00028_ip = 1383; continue _fun00027 }
 349:
                            sequence = _closure1_slot0;
                            golf = _closure1_slot2;
                            source = golf[update];
                            source = sequence.bind(tango)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golf = golf[update];
                            golf = sequence.bind(tango)(golf);
                            golf = golf.t;
                            golf = golf.uGDCc3;
                            options = source.bind(vacuum)(golf);
                            foxtrot = result;
                            romeo = sizing;
                            yankee = verify;
                            _fun00028_ip = 1383; continue _fun00027;
 415:
                            sequence = _closure1_slot0;
                            golf = _closure1_slot2;
                            source = golf[update];
                            source = sequence.bind(tango)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golf = golf[update];
                            golf = sequence.bind(tango)(golf);
                            golf = golf.t;
                            golf = golf.RvkXdX;
                            options = source.bind(vacuum)(golf);
                            foxtrot = result;
                            romeo = sizing;
                            yankee = verify;
                            _fun00028_ip = 1383; continue _fun00027;
 481:
                            sequence = _closure1_slot0;
                            golf = _closure1_slot2;
                            source = golf[update];
                            source = sequence.bind(tango)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golf = golf[update];
                            golf = sequence.bind(tango)(golf);
                            golf = golf.t;
                            golf = golf.4WuFRE;
                            options = source.bind(vacuum)(golf);
                            foxtrot = result;
                            romeo = sizing;
                            yankee = verify;
                            _fun00028_ip = 1383; continue _fun00027;
 547:
                            sequence = _closure1_slot0;
                            golf = _closure1_slot2;
                            source = golf[update];
                            source = sequence.bind(tango)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golf = golf[update];
                            golf = sequence.bind(tango)(golf);
                            golf = golf.t;
                            golf = golf.j29zCg;
                            options = source.bind(vacuum)(golf);
                            foxtrot = result;
                            romeo = sizing;
                            yankee = verify;
                            _fun00028_ip = 1383; continue _fun00027;
 613:
                            sequence = _closure1_slot0;
                            golf = _closure1_slot2;
                            source = golf[update];
                            source = sequence.bind(tango)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golf = golf[update];
                            golf = sequence.bind(tango)(golf);
                            golf = golf.t;
                            golf = golf.hHGrW1;
                            options = source.bind(vacuum)(golf);
                            foxtrot = result;
                            romeo = sizing;
                            yankee = verify;
                            _fun00028_ip = 1383; continue _fun00027;
 679:
                            sequence = _closure1_slot0;
                            golf = _closure1_slot2;
                            source = golf[update];
                            source = sequence.bind(tango)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golf = golf[update];
                            golf = sequence.bind(tango)(golf);
                            golf = golf.t;
                            golf = golf.H+KK6e;
                            options = source.bind(vacuum)(golf);
                            foxtrot = result;
                            romeo = sizing;
                            yankee = verify;
                            _fun00028_ip = 1383; continue _fun00027;
 747:
                            sequence = _closure1_slot0;
                            golf = _closure1_slot2;
                            source = golf[update];
                            source = sequence.bind(tango)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golf = golf[update];
                            golf = sequence.bind(tango)(golf);
                            golf = golf.t;
                            golf = golf.zxv7EB;
                            options = source.bind(vacuum)(golf);
                            foxtrot = result;
                            romeo = sizing;
                            yankee = verify;
                            _fun00028_ip = 1383; continue _fun00027;
 815:
                            sequence = _closure1_slot0;
                            golf = _closure1_slot2;
                            source = golf[update];
                            source = sequence.bind(tango)(source);
                            vacuum = source.intl;
                            source = vacuum.string;
                            golf = golf[update];
                            golf = sequence.bind(tango)(golf);
                            golf = golf.t;
                            golf = golf.Gyzcra;
                            options = source.bind(vacuum)(golf);
                            foxtrot = result;
                            romeo = sizing;
                            yankee = verify;
                            _fun00028_ip = 1383; continue _fun00027;
 881:
                            verify = zulu.CallbackError;
                            golf = oscar.reason;
                            sizing = _closure1_slot0;
                            result = _closure1_slot2;
                            zulu = 34;
                            zulu = result[zulu];
                            result = sizing.bind(tango)(zulu);
                            sizing = result.interactionCallbackErrorReason;
                            zulu = oscar.reason;
                            sizing = sizing.bind(result)(zulu, output);
                            result = null;
                            zulu = kilo;
                            if(!(result != sizing)) { _fun00028_ip = 943; continue _fun00027 }
 940:
                            zulu = sizing;
 943:
                            options = zulu;
                            foxtrot = verify;
                            romeo = undefined;
                            yankee = golf;
                            _fun00028_ip = 1383; continue _fun00027;
 959:
                            zulu = _closure1_slot26;
                            verify = zulu.ClientError;
                            golf = oscar.reason;
                            sizing = _closure1_slot17;
                            zulu = sizing.getFetchState;
                            result = zulu.bind(sizing)();
                            sizing = _closure1_slot0;
                            source = _closure1_slot2;
                            zulu = 31;
                            zulu = source[zulu];
                            zulu = sizing.bind(tango)(zulu);
                            sizing = zulu.DeveloperMode;
                            zulu = sizing.getSetting;
                            zulu = zulu.bind(sizing)();
                            if(!zulu) { _fun00028_ip = 1042; continue _fun00027 }
 1028:
                            sizing = _closure1_slot18;
                            sizing = sizing.LOADED;
                            zulu = result !== sizing;
 1042:
                            if(!zulu) { _fun00028_ip = 1088; continue _fun00027 }
 1045:
                            sizing = _closure1_slot0;
                            result = _closure1_slot2;
                            zulu = 32;
                            zulu = result[zulu];
                            sizing = sizing.bind(tango)(zulu);
                            zulu = sizing.fetchDeveloperApplications;
                            zulu = zulu.bind(sizing)();
                            SaveGenerator(address=1079);
 1077:
                            return zulu;
 1079:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=15);
                            if(sizing) { _fun00028_ip = 1599; continue _fun00027 }
 1088:
                            result = oscar.reason;
                            source = _closure1_slot1;
                            sizing = _closure1_slot2;
                            sizing = sizing[control];
                            sizing = source.bind(tango)(sizing);
                            sizing = sizing.Reasons;
                            sizing = sizing.PRIMARY_APP_COMMAND_NOT_FOUND;
                            if(!(sizing !== result)) { _fun00028_ip = 1292; continue _fun00027 }
 1130:
                            source = _closure1_slot1;
                            sizing = _closure1_slot2;
                            sizing = sizing[control];
                            sizing = source.bind(tango)(sizing);
                            sizing = sizing.Reasons;
                            sizing = sizing.INVALID_CHANNEL;
                            if(!(sizing !== result)) { _fun00028_ip = 1230; continue _fun00027 }
 1163:
                            source = _closure1_slot1;
                            sizing = _closure1_slot2;
                            sizing = sizing[control];
                            sizing = source.bind(tango)(sizing);
                            sizing = sizing.Reasons;
                            sizing = sizing.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                            foxtrot = verify;
                            romeo = undefined;
                            yankee = golf;
                            options = kilo;
                            if(!(sizing === result)) { _fun00028_ip = 1383; continue _fun00027 }
 1210:
                            romeo = oscar.detailCode;
                            foxtrot = verify;
                            yankee = golf;
                            options = kilo;
                            _fun00028_ip = 1383; continue _fun00027;
 1230:
                            source = _closure1_slot0;
                            oscar = _closure1_slot2;
                            sizing = oscar[update];
                            sizing = source.bind(tango)(sizing);
                            result = sizing.intl;
                            sizing = result.string;
                            oscar = oscar[update];
                            oscar = source.bind(tango)(oscar);
                            oscar = oscar.t;
                            oscar = oscar.j29zCg;
                            options = sizing.bind(result)(oscar);
                            foxtrot = verify;
                            romeo = undefined;
                            yankee = golf;
                            _fun00028_ip = 1383; continue _fun00027;
 1292:
                            sizing = _closure1_slot17;
                            oscar = sizing.inDevModeForApplication;
                            oscar = oscar.bind(sizing)(output);
                            foxtrot = verify;
                            romeo = undefined;
                            yankee = golf;
                            options = kilo;
                            if(!oscar) { _fun00028_ip = 1383; continue _fun00027 }
 1321:
                            result = _closure1_slot0;
                            oscar = _closure1_slot2;
                            kilo = oscar[update];
                            kilo = result.bind(tango)(kilo);
                            sizing = kilo.intl;
                            kilo = sizing.string;
                            oscar = oscar[update];
                            oscar = result.bind(tango)(oscar);
                            oscar = oscar.t;
                            oscar = oscar.hXRXf3;
                            options = kilo.bind(sizing)(oscar);
                            foxtrot = verify;
                            romeo = undefined;
                            yankee = golf;
 1383:
                            golf = _closure3_slot0;
                            oscar = golf.showLaunchErrorModal;
                            oscar = oscar.bind(golf)(options);
                            golf = _closure1_slot12;
                            oscar = golf.getChannel;
                            kilo = oscar.bind(golf)(echo);
                            verify = null;
                            if(!(verify != kilo)) { _fun00028_ip = 1596; continue _fun00027 }
 1424:
                            oscar = kilo.getGuildId;
                            result = oscar.bind(kilo)();
                            golf = _closure1_slot1;
                            options = _closure1_slot2;
                            oscar = 22;
                            oscar = options[oscar];
                            sizing = golf.bind(tango)(oscar);
                            oscar = sizing.getRawThermalState;
                            sizing = oscar.bind(sizing)();
                            oscar = 23;
                            oscar = options[oscar];
                            options = golf.bind(tango)(oscar);
                            golf = options.track;
                            report = _closure1_slot20;
                            oscar = report.ACTIVITY_SESSION_JOIN_FAILED;
                            report = {};
                            report['channel_id'] = echo;
                            report['guild_id'] = result;
                            report['application_id'] = output;
                            report['raw_thermal_state'] = sizing;
                            report['is_activity_start'] = backup;
                            sizing = verify == kilo;
                            backup = undefined;
                            if(sizing) { _fun00028_ip = 1530; continue _fun00027 }
 1525:
                            backup = kilo.type;
 1530:
                            report['channel_type'] = backup;
                            kilo = verify == offset;
                            backup = undefined;
                            if(kilo) { _fun00028_ip = 1550; continue _fun00027 }
 1544:
                            backup = offset.locations;
 1550:
                            report['location_stack'] = backup;
                            report['error_type'] = foxtrot;
                            report['error_status'] = romeo;
                            report['error_code'] = yankee;
                            yankee = verify == offset;
                            verify = undefined;
                            if(yankee) { _fun00028_ip = 1586; continue _fun00027 }
 1581:
                            verify = offset.source;
 1586:
                            report['source'] = verify;
                            report = golf.bind(options)(oscar, report);
 1596:
                            return tango;
 1599:
                            return zulu;
 1602:
                            return mike;
 1605:
                            return entity;
                        }
                    };
                    mike = entity.next;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure4_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure4_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            zulu = zulu.bind(tango)();
            entity['handleActivityLaunchFail'] = zulu;
            zulu = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = argFoo;
                    tango = entity.reason;
                    entity = entity.application;
                    zulu = entity.id;
                    entity = null;
                    if(!(entity != zulu)) { _fun00030_ip = 255; continue _fun00029 }
 28:
                    if(!(entity != tango)) { _fun00030_ip = 255; continue _fun00029 }
 35:
                    report = _closure1_slot31;
                    oscar = _closure1_slot19;
                    entity = oscar.getSelfEmbeddedActivities;
                    oscar = entity.bind(oscar)();
                    entity = oscar.values;
                    entity = entity.bind(oscar)();
                    golf = undefined;
                    options = report.bind(golf)(entity);
                    oscar = options.bind(golf)();
                    report = oscar.done;
                    if(report) { _fun00030_ip = 146; continue _fun00029 }
 87:
                    verify = oscar.value;
                    report = verify.applicationId;
                    yankee = verify.location;
                    if(!(report === zulu)) { _fun00030_ip = 131; continue _fun00029 }
 106:
                    offset = _closure3_slot0;
                    verify = offset.leaveActivity;
                    report = {};
                    report['location'] = yankee;
                    report['applicationId'] = zulu;
                    report = verify.bind(offset)(report);
 131:
                    verify = options.bind(golf)();
                    report = verify.done;
                    oscar = verify;
                    if(!report) { _fun00030_ip = 87; continue _fun00029 }
 146:
                    oscar = tango.code;
                    report = _closure1_slot22;
                    report = report.CLOSE_NORMAL;
                    if(!(oscar !== report)) { _fun00030_ip = 255; continue _fun00029 }
 165:
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 23;
                    report = options[report];
                    golf = oscar.bind(golf)(report);
                    oscar = golf.track;
                    mike = _closure1_slot20;
                    report = mike.ACTIVITY_CLOSED_RPC_ERROR;
                    mike = {};
                    options = tango.code;
                    mike['rpc_close_code'] = options;
                    options = tango.message;
                    mike['rpc_message'] = options;
                    mike['application_id'] = zulu;
                    mike = oscar.bind(golf)(report, mike);
                    mike = _closure3_slot0;
                    entity = mike.showErrorModal;
                    entity = entity.bind(mike)(tango, zulu);
 255:
                    entity = undefined;
                    return entity;
                }
            };
            entity['superHandleRPCDisconnect'] = zulu;
            zulu = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.channelId;
                    mike = _closure1_slot14;
                    entity = mike.getVoiceChannelId;
                    mike = entity.bind(mike)();
                    entity = null;
                    entity = entity != mike;
                    if(!entity) { _fun00032_ip = 38; continue _fun00031 }
 34:
                    entity = mike === zulu;
 38:
                    if(!entity) { _fun00032_ip = 59; continue _fun00031 }
 41:
                    mike = _closure3_slot0;
                    entity = mike.handleCallEnded;
                    entity = entity.bind(mike)(zulu);
 59:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleCallDelete'] = zulu;
            zulu = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.state;
                    mike = _closure1_slot24;
                    mike = mike.DISCONNECTED;
                    if(!(zulu === mike)) { _fun00034_ip = 48; continue _fun00033 }
 25:
                    zulu = entity.channelId;
                    mike = _closure3_slot0;
                    entity = mike.handleCallEnded;
                    entity = entity.bind(mike)(zulu);
 48:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleRTCConnectionState'] = zulu;
            zulu = function(argFoo) {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    zulu = _closure1_slot19;
                    mike = zulu.getSelfEmbeddedActivityForChannel;
                    entity = argFoo;
                    tango = mike.bind(zulu)(entity);
                    entity = null;
                    if(!(entity != tango)) { _fun00036_ip = 65; continue _fun00035 }
 27:
                    zulu = _closure3_slot0;
                    mike = zulu.leaveActivity;
                    entity = {};
                    report = tango.location;
                    entity['location'] = report;
                    tango = tango.applicationId;
                    entity['applicationId'] = tango;
                    entity = mike.bind(zulu)(entity);
 65:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleCallEnded'] = zulu;
            zulu = function() {
                tango = _closure1_slot8;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                            StartGenerator();
                            mike = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(zulu) { _fun00038_ip = 946; continue _fun00037 }
 15:
                            kilo = mike.channelId;
                            foxtrot = mike.applicationId;
                            var _closure6_slot0 = foxtrot;
                            yankee = mike.analyticsLocations;
                            sizing = mike.commandOrigin;
                            offset = mike.inviterUserId;
                            zulu = undefined;
                            SaveGenerator(address=53);
 51:
                            return zulu;
 53:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun00038_ip = 943; continue _fun00037 }
 62:
                            report = _closure1_slot12;
                            tango = report.getChannel;
                            verify = tango.bind(report)(kilo);
                            if(!(zulu !== verify)) { _fun00038_ip = 940; continue _fun00037 }
 86:
                            oscar = _closure1_slot10;
                            report = oscar.has;
                            romeo = null;
                            backup = romeo == verify;
                            tango = undefined;
                            if(backup) { _fun00038_ip = 111; continue _fun00037 }
 106:
                            tango = verify.type;
 111:
                            tango = report.bind(oscar)(tango);
                            if(!tango) { _fun00038_ip = 140; continue _fun00037 }
 119:
                            report = _closure1_slot14;
                            tango = report.getVoiceChannelId;
                            tango = tango.bind(report)();
                            if(!(tango === kilo)) { _fun00038_ip = 940; continue _fun00037 }
 140:
                            report = _closure1_slot19;
                            tango = report.getSelfEmbeddedActivityForChannel;
                            report = tango.bind(report)(kilo);
                            oscar = romeo == report;
                            tango = undefined;
                            if(oscar) { _fun00038_ip = 169; continue _fun00037 }
 164:
                            tango = report.applicationId;
 169:
                            if(!(tango !== foxtrot)) { _fun00038_ip = 940; continue _fun00037 }
 176:
                            report = _closure1_slot1;
                            oscar = _closure1_slot2;
                            tango = 35;
                            tango = oscar[tango];
                            report = report.bind(zulu)(tango);
                            tango = report.fetchApplication;
                            tango = tango.bind(report)(foxtrot);
                            SaveGenerator(address=211);
 209:
                            return tango;
 211:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(report) { _fun00038_ip = 937; continue _fun00037 }
 220:
                            oscar = _closure1_slot0;
                            backup = _closure1_slot2;
                            report = 36;
                            report = backup[report];
                            oscar = oscar.bind(zulu)(report);
                            report = oscar.getIsActivitiesEnabledForCurrentPlatform;
                            report = report.bind(oscar)(verify);
                            if(report) { _fun00038_ip = 332; continue _fun00037 }
 254:
                            backup = _closure3_slot0;
                            oscar = backup.showLaunchErrorModal;
                            echo = _closure1_slot0;
                            update = _closure1_slot2;
                            report = 29;
                            output = update[report];
                            output = echo.bind(zulu)(output);
                            result = output.intl;
                            output = result.string;
                            report = update[report];
                            report = echo.bind(zulu)(report);
                            report = report.t;
                            report = report.UXoQTk;
                            report = output.bind(result)(report);
                            report = oscar.bind(backup)(report);
                            _fun00038_ip = 940; continue _fun00037;
 332:
                            oscar = _closure1_slot1;
                            backup = _closure1_slot2;
                            report = 37;
                            report = backup[report];
                            oscar = oscar.bind(zulu)(report);
                            backup = romeo == tango;
                            report = undefined;
                            if(backup) { _fun00038_ip = 382; continue _fun00037 }
 361:
                            backup = tango.embedded_activity_config;
                            output = romeo == backup;
                            report = undefined;
                            if(output) { _fun00038_ip = 382; continue _fun00037 }
 376:
                            report = backup.supported_platforms;
 382:
                            report = oscar.bind(zulu)(report);
                            if(report) { _fun00038_ip = 468; continue _fun00037 }
 390:
                            backup = _closure3_slot0;
                            oscar = backup.showLaunchErrorModal;
                            echo = _closure1_slot0;
                            update = _closure1_slot2;
                            report = 29;
                            output = update[report];
                            output = echo.bind(zulu)(output);
                            result = output.intl;
                            output = result.string;
                            report = update[report];
                            report = echo.bind(zulu)(report);
                            report = report.t;
                            report = report.uGDCc3;
                            report = output.bind(result)(report);
                            report = oscar.bind(backup)(report);
                            _fun00038_ip = 940; continue _fun00037;
 468:
                            oscar = romeo == verify;
                            report = undefined;
                            if(oscar) { _fun00038_ip = 487; continue _fun00037 }
 477:
                            oscar = verify.getGuildId;
                            report = oscar.bind(verify)();
 487:
                            oscar = romeo != report;
                            result = undefined;
                            if(!oscar) { _fun00038_ip = 499; continue _fun00037 }
 496:
                            result = report;
 499:
                            oscar = _closure1_slot0;
                            report = _closure1_slot2;
                            backup = 32;
                            report = report[backup];
                            verify = oscar.bind(zulu)(report);
                            oscar = verify.fetchShelf;
                            report = {};
                            report['guildId'] = result;
                            report = oscar.bind(verify)(report);
                            SaveGenerator(address=540);
 538:
                            return report;
 540:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(oscar) { _fun00038_ip = 934; continue _fun00037 }
 549:
                            update = report.activityConfigs;
                            echo = report.applications;
                            verify = _closure1_slot1;
                            oscar = _closure1_slot2;
                            output = 21;
                            oscar = oscar[output];
                            verify = verify.bind(zulu)(oscar);
                            oscar = {};
                            oscar['applicationId'] = foxtrot;
                            oscar['activityConfigs'] = update;
                            oscar['applications'] = echo;
                            oscar = verify.bind(zulu)(oscar);
                            if(!(romeo == oscar)) { _fun00038_ip = 710; continue _fun00037 }
 606:
                            verify = _closure1_slot0;
                            oscar = _closure1_slot2;
                            oscar = oscar[backup];
                            backup = verify.bind(zulu)(oscar);
                            verify = backup.fetchShelf;
                            oscar = {};
                            oscar['guildId'] = result;
                            result = true;
                            oscar['force'] = result;
                            oscar = verify.bind(backup)(oscar);
                            SaveGenerator(address=651);
 649:
                            return oscar;
 651:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                            if(verify) { _fun00038_ip = 931; continue _fun00037 }
 660:
                            backup = _closure1_slot1;
                            verify = _closure1_slot2;
                            verify = verify[output];
                            backup = backup.bind(zulu)(verify);
                            verify = {};
                            verify['applicationId'] = foxtrot;
                            output = oscar.activityConfigs;
                            verify['activityConfigs'] = output;
                            output = oscar.applications;
                            verify['applications'] = output;
                            verify = backup.bind(zulu)(verify);
 710:
                            backup = _closure1_slot19;
                            verify = backup.getEmbeddedActivitiesForChannel;
                            backup = verify.bind(backup)(kilo);
                            verify = backup.find;
                            options = function(argFoo) {
                                entity = argFoo;
                                mike = entity.applicationId;
                                entity = _closure6_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            backup = verify.bind(backup)(options);
                            options = romeo == backup;
                            output = undefined;
                            if(options) { _fun00038_ip = 760; continue _fun00037 }
 749:
                            options = backup.userIds;
                            output = options.size;
 760:
                            result = romeo != output;
                            verify = 0;
                            options = 0;
                            if(!result) { _fun00038_ip = 774; continue _fun00037 }
 771:
                            options = output;
 774:
                            if(!(!(options > verify))) { _fun00038_ip = 842; continue _fun00037 }
 778:
                            verify = _closure1_slot1;
                            output = _closure1_slot2;
                            options = 39;
                            options = output[options];
                            verify = verify.bind(zulu)(options);
                            options = {};
                            options['targetApplicationId'] = foxtrot;
                            options['channelId'] = kilo;
                            options['analyticsLocations'] = yankee;
                            options['commandOrigin'] = sizing;
                            options['inviterUserId'] = offset;
                            options = verify.bind(zulu)(options);
                            SaveGenerator(address=833);
 831:
                            return options;
 833:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(!verify) { _fun00038_ip = 940; continue _fun00037 }
 839:
                            return options;
 842:
                            options = _closure1_slot0;
                            verify = _closure1_slot2;
                            golf = 38;
                            golf = verify[golf];
                            verify = options.bind(zulu)(golf);
                            options = verify.maybeJoinEmbeddedActivity;
                            golf = {};
                            golf['channelId'] = kilo;
                            golf['applicationId'] = foxtrot;
                            kilo = romeo == backup;
                            foxtrot = undefined;
                            if(kilo) { _fun00038_ip = 893; continue _fun00037 }
 887:
                            foxtrot = backup.launchId;
 893:
                            golf['launchId'] = foxtrot;
                            golf['inputApplication'] = romeo;
                            golf['analyticsLocations'] = yankee;
                            golf['inviterUserId'] = offset;
                            golf = options.bind(verify)(golf);
                            SaveGenerator(address=922);
 920:
                            return golf;
 922:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                            if(!options) { _fun00038_ip = 940; continue _fun00037 }
 928:
                            return golf;
 931:
                            return oscar;
 934:
                            return report;
 937:
                            return tango;
 940:
                            return zulu;
 943:
                            return mike;
 946:
                            return entity;
                        }
                    };
                    mike = entity.next;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure4_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure4_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            zulu = zulu.bind(tango)();
            entity['handleDeferredOpen'] = zulu;
            zulu = function(argFoo) {
                mike = argFoo;
                mike = mike.guild;
                var _closure4_slot0 = mike;
                zulu = _closure1_slot19;
                mike = zulu.getSelfEmbeddedActivities;
                zulu = mike.bind(zulu)();
                mike = zulu.forEach;
                entity = function(argFoo) {
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        entity = argFoo;
                        oscar = entity.location;
                        report = entity.applicationId;
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 20;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.getEmbeddedActivityLocationGuildId;
                        zulu = mike.bind(zulu)(oscar);
                        mike = _closure4_slot0;
                        mike = mike.id;
                        if(!(mike === zulu)) { _fun00040_ip = 93; continue _fun00039 }
 65:
                        tango = _closure3_slot0;
                        zulu = tango.leaveActivity;
                        mike = {};
                        mike['location'] = oscar;
                        mike['applicationId'] = report;
                        mike = zulu.bind(tango)(mike);
 93:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity['handleGuildDelete'] = zulu;
            zulu = function(argFoo) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    entity = argFoo;
                    entity = entity.channel;
                    zulu = _closure1_slot19;
                    mike = zulu.getSelfEmbeddedActivityForChannel;
                    entity = entity.id;
                    tango = mike.bind(zulu)(entity);
                    entity = null;
                    if(!(entity != tango)) { _fun00042_ip = 75; continue _fun00041 }
 37:
                    zulu = _closure3_slot0;
                    mike = zulu.leaveActivity;
                    entity = {};
                    report = tango.location;
                    entity['location'] = report;
                    tango = tango.applicationId;
                    entity['applicationId'] = tango;
                    entity = mike.bind(zulu)(entity);
 75:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleChannelDelete'] = zulu;
            zulu = function(argFoo) {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.nonce;
                    entity = entity.data;
                    report = _closure1_slot28;
                    tango = entity.applicationId;
                    report = report[tango];
                    tango = null;
                    if(!(tango == report)) { _fun00044_ip = 327; continue _fun00043 }
 39:
                    report = entity.interactionType;
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    options = 40;
                    tango = tango[options];
                    oscar = undefined;
                    tango = golf.bind(oscar)(tango);
                    tango = tango.InteractionTypes;
                    tango = tango.APPLICATION_COMMAND;
                    if(!(report !== tango)) { _fun00044_ip = 244; continue _fun00043 }
 86:
                    report = entity.interactionType;
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    tango = golf.bind(oscar)(tango);
                    tango = tango.InteractionTypes;
                    tango = tango.MESSAGE_COMPONENT;
                    if(!(report !== tango)) { _fun00044_ip = 205; continue _fun00043 }
 125:
                    report = entity.interactionType;
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    tango = golf.bind(oscar)(tango);
                    tango = tango.InteractionTypes;
                    tango = tango.MODAL_SUBMIT;
                    golf = undefined;
                    if(!(report === tango)) { _fun00044_ip = 281; continue _fun00043 }
 166:
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 41;
                    tango = options[tango];
                    tango = report.bind(oscar)(tango);
                    report = tango.INTERACTION_MODAL_SUBMIT;
                    tango = new Array(1);
                    tango[0] = report;
                    golf = tango;
                    _fun00044_ip = 281; continue _fun00043;
 205:
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 41;
                    tango = options[tango];
                    tango = report.bind(oscar)(tango);
                    report = tango.INTERACTION_MESSAGE_COMPONENT;
                    tango = new Array(1);
                    tango[0] = report;
                    golf = tango;
                    _fun00044_ip = 281; continue _fun00043;
 244:
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 41;
                    tango = options[tango];
                    tango = report.bind(oscar)(tango);
                    report = tango.INTERACTION_APPLICATION_COMMAND;
                    tango = new Array(1);
                    tango[0] = report;
                    golf = tango;
 281:
                    report = _closure1_slot36;
                    tango = {};
                    options = entity.applicationId;
                    tango['applicationId'] = options;
                    tango['nonce'] = zulu;
                    tango['locations'] = golf;
                    tango = report.bind(oscar)(tango);
                    if(!tango) { _fun00044_ip = 327; continue _fun00043 }
 314:
                    mike = _closure1_slot29;
                    entity = entity.applicationId;
                    mike[zulu] = entity;
 327:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleInteractionQueue'] = zulu;
            zulu = function(argFoo) {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    entity = argFoo;
                    tango = entity.nonce;
                    mike = null;
                    if(!(mike != tango)) { _fun00046_ip = 50; continue _fun00045 }
 15:
                    zulu = _closure1_slot29;
                    zulu = zulu[tango];
                    if(!(mike != zulu)) { _fun00046_ip = 50; continue _fun00045 }
 30:
                    mike = _closure1_slot29;
                    mike = delete mike[tango];
                    mike = _closure1_slot38;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu, tango);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleInteractionSuccess'] = zulu;
            mike = function(argFoo) {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = argFoo;
                    tango = entity.nonce;
                    mike = null;
                    if(!(mike != tango)) { _fun00048_ip = 50; continue _fun00047 }
 15:
                    zulu = _closure1_slot29;
                    zulu = zulu[tango];
                    if(!(mike != zulu)) { _fun00048_ip = 50; continue _fun00047 }
 30:
                    mike = _closure1_slot29;
                    mike = delete mike[tango];
                    mike = _closure1_slot37;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu, tango);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleInteractionFailure'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = this;
            tango = _closure1_slot14;
            zulu = tango.addChangeListener;
            entity = mike.handleSelectedChannelUpdate;
            entity = zulu.bind(tango)(entity);
            golf = _closure1_slot0;
            report = _closure1_slot2;
            tango = 42;
            zulu = report[tango];
            entity = undefined;
            zulu = golf.bind(entity)(zulu);
            yankee = zulu.ComponentDispatch;
            offset = yankee.subscribe;
            zulu = _closure1_slot25;
            verify = zulu.RELEASE_ACTIVITY_WEB_VIEW;
            options = mike.handleActivityWebViewRelease;
            options = offset.bind(yankee)(verify, options);
            tango = report[tango];
            tango = golf.bind(entity)(tango);
            options = tango.ComponentDispatch;
            golf = options.subscribe;
            tango = zulu.OPEN_EMBEDDED_ACTIVITY;
            zulu = _closure1_slot42;
            zulu = golf.bind(options)(tango, zulu);
            tango = _closure1_slot1;
            zulu = 43;
            golf = report[zulu];
            offset = tango.bind(entity)(golf);
            verify = offset.subscribe;
            options = _closure1_slot39;
            golf = 'EMBEDDED_ACTIVITY_LAUNCH_START';
            golf = verify.bind(offset)(golf, options);
            golf = report[zulu];
            offset = tango.bind(entity)(golf);
            verify = offset.subscribe;
            options = mike.handleActivityLaunchSuccess;
            golf = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
            golf = verify.bind(offset)(golf, options);
            golf = report[zulu];
            offset = tango.bind(entity)(golf);
            verify = offset.subscribe;
            options = mike.handleActivityLaunchFail;
            golf = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
            golf = verify.bind(offset)(golf, options);
            golf = report[zulu];
            verify = tango.bind(entity)(golf);
            options = verify.subscribe;
            golf = _closure1_slot40;
            oscar = 'EMBEDDED_ACTIVITY_CLOSE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleDeferredOpen;
            oscar = 'EMBEDDED_ACTIVITY_DEFERRED_OPEN';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleRPCDisconnect;
            oscar = 'RPC_APP_DISCONNECTED';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleCallDelete;
            oscar = 'CALL_DELETE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleRTCConnectionState;
            oscar = 'RTC_CONNECTION_STATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleGuildDelete;
            oscar = 'GUILD_DELETE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleChannelDelete;
            oscar = 'CHANNEL_DELETE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleInteractionQueue;
            oscar = 'INTERACTION_QUEUE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleInteractionSuccess;
            oscar = 'INTERACTION_SUCCESS';
            oscar = options.bind(verify)(oscar, golf);
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.subscribe;
            zulu = mike.handleInteractionFailure;
            mike = 'INTERACTION_FAILURE';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = this;
            tango = _closure1_slot14;
            zulu = tango.removeChangeListener;
            entity = mike.handleSelectedChannelUpdate;
            entity = zulu.bind(tango)(entity);
            golf = _closure1_slot0;
            report = _closure1_slot2;
            tango = 42;
            zulu = report[tango];
            entity = undefined;
            zulu = golf.bind(entity)(zulu);
            yankee = zulu.ComponentDispatch;
            offset = yankee.unsubscribe;
            zulu = _closure1_slot25;
            verify = zulu.RELEASE_ACTIVITY_WEB_VIEW;
            options = mike.handleActivityWebViewRelease;
            options = offset.bind(yankee)(verify, options);
            tango = report[tango];
            tango = golf.bind(entity)(tango);
            options = tango.ComponentDispatch;
            golf = options.unsubscribe;
            tango = zulu.OPEN_EMBEDDED_ACTIVITY;
            zulu = _closure1_slot42;
            zulu = golf.bind(options)(tango, zulu);
            tango = _closure1_slot1;
            zulu = 43;
            golf = report[zulu];
            offset = tango.bind(entity)(golf);
            verify = offset.unsubscribe;
            options = _closure1_slot39;
            golf = 'EMBEDDED_ACTIVITY_LAUNCH_START';
            golf = verify.bind(offset)(golf, options);
            golf = report[zulu];
            offset = tango.bind(entity)(golf);
            verify = offset.unsubscribe;
            options = mike.handleActivityLaunchSuccess;
            golf = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
            golf = verify.bind(offset)(golf, options);
            golf = report[zulu];
            offset = tango.bind(entity)(golf);
            verify = offset.unsubscribe;
            options = mike.handleActivityLaunchFail;
            golf = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
            golf = verify.bind(offset)(golf, options);
            golf = report[zulu];
            verify = tango.bind(entity)(golf);
            options = verify.unsubscribe;
            golf = _closure1_slot40;
            oscar = 'EMBEDDED_ACTIVITY_CLOSE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleDeferredOpen;
            oscar = 'EMBEDDED_ACTIVITY_DEFERRED_OPEN';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleRPCDisconnect;
            oscar = 'RPC_APP_DISCONNECTED';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleCallDelete;
            oscar = 'CALL_DELETE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleRTCConnectionState;
            oscar = 'RTC_CONNECTION_STATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleGuildDelete;
            oscar = 'GUILD_DELETE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleChannelDelete;
            oscar = 'CHANNEL_DELETE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleInteractionQueue;
            oscar = 'INTERACTION_QUEUE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleInteractionSuccess;
            oscar = 'INTERACTION_SUCCESS';
            oscar = options.bind(verify)(oscar, golf);
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.unsubscribe;
            zulu = mike.handleInteractionFailure;
            mike = 'INTERACTION_FAILURE';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(report);
    report = 45;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/activities/EmbeddedActivitiesManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: getActiveAnalyticsSessionIDs
        mike = _closure1_slot27;
        entity = argFoo;
        entity = mike[entity];
        return entity;
    };
    zulu['getActiveAnalyticsSessionIDs'] = mike;
    return entity;
})();