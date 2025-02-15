// app/modules/content_inventory/ContentInventoryManager.tsx
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
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot26;
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
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot25 = entity;
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot26 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: getBackoffJitter
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = arguments[0];
            entity = undefined;
            if(!(zulu === entity)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            zulu = 0;
 11:
            entity = global;
            mike = entity.Math;
            entity = mike.random;
            mike = entity.bind(mike)();
            entity = 1;
            entity = zulu + entity;
            mike = mike * entity;
            entity = _closure1_slot17;
            entity = mike * entity;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: setFeedState
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 17;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CONTENT_INVENTORY_SET_FEED_STATE';
        mike['type'] = report;
        report = argFoo;
        mike['feedId'] = report;
        report = argBar;
        mike['state'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: canFetch
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot21;
            mike = zulu.has;
            mike = mike.bind(zulu)(tango);
            if(mike) { _fun00008_ip = 285; continue _fun00007 }
 26:
            mike = _closure1_slot14;
            mike = mike.GAME_PROFILE_FEED;
            if(!(tango === mike)) { _fun00008_ip = 108; continue _fun00007 }
 40:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 18;
            mike = zulu[mike];
            zulu = undefined;
            oscar = report.bind(zulu)(mike);
            report = oscar.canSeeGameProfile;
            mike = 'ContentInventoryManager';
            mike = report.bind(oscar)(mike);
            if(mike) { _fun00008_ip = 86; continue _fun00007 }
 82:
            mike = false;
            return mike;
 86:
            report = _closure1_slot13;
            mike = report.getFeed;
            mike = mike.bind(report)(tango);
            if(!(zulu === mike)) { _fun00008_ip = 281; continue _fun00007 }
 108:
            mike = _closure1_slot18;
            if(!(tango === mike)) { _fun00008_ip = 269; continue _fun00007 }
 119:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 19;
            zulu = zulu[mike];
            mike = undefined;
            report = report.bind(mike)(zulu);
            zulu = report.isEligibleForContentInventoryV1;
            mike = 'ContentInventoryManager';
            mike = zulu.bind(report)(mike);
            if(mike) { _fun00008_ip = 165; continue _fun00007 }
 161:
            mike = false;
            return mike;
 165:
            mike = _closure1_slot12;
            mike = mike.hidden;
            if(!mike) { _fun00008_ip = 199; continue _fun00007 }
 178:
            zulu = _closure1_slot13;
            mike = zulu.getFeed;
            zulu = mike.bind(zulu)(tango);
            mike = null;
            if(!(mike == zulu)) { _fun00008_ip = 277; continue _fun00007 }
 199:
            zulu = _closure1_slot9;
            mike = zulu.isConnected;
            mike = mike.bind(zulu)();
            if(mike) { _fun00008_ip = 220; continue _fun00007 }
 216:
            mike = false;
            return mike;
 220:
            zulu = _closure1_slot11;
            mike = zulu.getIdleSince;
            zulu = mike.bind(zulu)();
            mike = null;
            if(!(mike != zulu)) { _fun00008_ip = 269; continue _fun00007 }
 240:
            mike = global;
            tango = mike.Date;
            mike = tango.now;
            mike = mike.bind(tango)();
            mike = mike - zulu;
            entity = _closure1_slot19;
            if(!(!(mike > entity))) { _fun00008_ip = 273; continue _fun00007 }
 269:
            entity = true;
            return entity;
 273:
            entity = false;
            return entity;
 277:
            entity = false;
            return entity;
 281:
            entity = false;
            return entity;
 285:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: cancelScheduledFetch
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot28;
            zulu = {};
            entity = false;
            zulu['loading'] = entity;
            entity = undefined;
            zulu = report.bind(entity)(tango, zulu);
            report = _closure1_slot20;
            zulu = report.get;
            report = zulu.bind(report)(tango);
            if(!(entity !== report)) { _fun00010_ip = 72; continue _fun00009 }
 45:
            zulu = global;
            zulu = zulu.clearTimeout;
            zulu = zulu.bind(entity)(report);
            zulu = _closure1_slot20;
            mike = zulu.delete;
            mike = mike.bind(zulu)(tango);
 72:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: scheduleNextFetch
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = _closure1_slot22;
            zulu = tango.get;
            entity = _closure1_slot18;
            zulu = zulu.bind(tango)(entity);
            tango = null;
            report = tango != zulu;
            verify = 0;
            entity = 0;
            if(!report) { _fun00012_ip = 37; continue _fun00011 }
 34:
            entity = zulu;
 37:
            if(!(entity > verify)) { _fun00012_ip = 52; continue _fun00011 }
 41:
            zulu = _closure1_slot16;
            if(!(!(entity <= zulu))) { _fun00012_ip = 452; continue _fun00011 }
 52:
            report = _closure1_slot30;
            zulu = _closure1_slot18;
            golf = undefined;
            zulu = report.bind(golf)(zulu);
            report = _closure1_slot29;
            zulu = _closure1_slot18;
            zulu = report.bind(golf)(zulu);
            if(!zulu) { _fun00012_ip = 452; continue _fun00011 }
 86:
            oscar = _closure1_slot13;
            report = oscar.getFeed;
            zulu = _closure1_slot18;
            report = report.bind(oscar)(zulu);
            oscar = tango == report;
            zulu = undefined;
            if(oscar) { _fun00012_ip = 120; continue _fun00011 }
 114:
            zulu = report.refresh_stale_inbox_after_ms;
 120:
            if(!(tango != zulu)) { _fun00012_ip = 135; continue _fun00011 }
 124:
            zulu = _closure1_slot23;
            if(!(tango != zulu)) { _fun00012_ip = 452; continue _fun00011 }
 135:
            oscar = tango == report;
            zulu = undefined;
            if(oscar) { _fun00012_ip = 150; continue _fun00011 }
 144:
            zulu = report.expired_at;
 150:
            zulu = tango == zulu;
            options = 0;
            if(zulu) { _fun00012_ip = 222; continue _fun00011 }
 159:
            zulu = global;
            offset = zulu.Date;
            foxtrot = report.expired_at;
            oscar = offset.prototype;
            oscar = Object.create(oscar, {constructor: {value: offset}});
            backup = oscar;
            report = new backup[offset](foxtrot, romeo);
            oscar = report instanceof Object ? report : oscar;
            report = oscar.getTime;
            report = report.bind(oscar)();
            oscar = zulu.Date;
            zulu = oscar.now;
            zulu = zulu.bind(oscar)();
            options = report - zulu;
 222:
            zulu = _closure1_slot23;
            zulu = tango == zulu;
            oscar = 0;
            if(zulu) { _fun00012_ip = 296; continue _fun00011 }
 235:
            zulu = global;
            offset = zulu.Date;
            foxtrot = _closure1_slot23;
            report = offset.prototype;
            report = Object.create(report, {constructor: {value: offset}});
            backup = report;
            tango = new backup[offset](foxtrot, romeo);
            report = tango instanceof Object ? tango : report;
            tango = report.getTime;
            tango = tango.bind(report)();
            report = zulu.Date;
            zulu = report.now;
            zulu = zulu.bind(report)();
            oscar = tango - zulu;
 296:
            entity = entity > verify;
            tango = 0;
            if(!entity) { _fun00012_ip = 313; continue _fun00011 }
 305:
            entity = _closure1_slot27;
            tango = entity.bind(golf)();
 313:
            entity = global;
            report = entity.Math;
            zulu = report.max;
            zulu = zulu.bind(report)(verify, oscar, options);
            oscar = zulu + tango;
            report = _closure1_slot28;
            tango = _closure1_slot18;
            zulu = {};
            options = false;
            zulu['loading'] = options;
            offset = entity.Date;
            verify = entity.Date;
            options = verify.now;
            options = options.bind(verify)();
            foxtrot = options + oscar;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            backup = verify;
            options = new backup[offset](foxtrot, romeo);
            options = options instanceof Object ? options : verify;
            zulu['nextFetchDate'] = options;
            zulu = report.bind(golf)(tango, zulu);
            tango = _closure1_slot20;
            zulu = tango.set;
            mike = _closure1_slot18;
            report = entity.setTimeout;
            entity = function() {
                zulu = _closure1_slot32;
                mike = {};
                tango = _closure1_slot18;
                mike['feedId'] = tango;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 20;
                tango = tango[entity];
                entity = undefined;
                tango = report.bind(entity)(tango);
                tango = tango.ContentInventoryFeature;
                tango = tango.INBOX;
                mike['feature'] = tango;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity = report.bind(golf)(entity, oscar);
            entity = zulu.bind(tango)(mike, entity);
 452:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: fetchInventory
        entity = undefined;
        tango = _closure1_slot33;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: _fetchInventory
        report = undefined;
        entity = undefined;
        tango = _closure1_slot8;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00014_ip = 626; continue _fun00013 }
 15:
                    zulu = mike.feedId;
                    tango = zulu;
                    var _closure4_slot0 = zulu;
                    zulu = mike.feature;
                    foxtrot = zulu;
                    var _closure4_slot1 = zulu;
                    verify = mike.force;
                    zulu = undefined;
                    if(!(verify === zulu)) { _fun00014_ip = 55; continue _fun00013 }
 53:
                    verify = false;
 55:
                    var _closure4_slot2 = verify;
                    kilo = undefined;
                    options = undefined;
                    golf = undefined;
                    SaveGenerator(address=69);
 67:
                    return zulu;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 623; continue _fun00013 }
 78:
                    yankee = _closure1_slot29;
                    offset = tango;
                    offset = yankee.bind(zulu)(offset);
                    if(offset) { _fun00014_ip = 102; continue _fun00013 }
 96:
                    if(!verify) { _fun00014_ip = 620; continue _fun00013 }
 102: // try_start_0
                    offset = _closure1_slot13;
                    verify = offset.getFeed;
                    yankee = tango;
                    backup = verify.bind(offset)(yankee);
                    kilo = backup;
                    offset = _closure1_slot21;
                    verify = offset.add;
                    verify = verify.bind(offset)(yankee);
                    offset = _closure1_slot28;
                    verify = {};
                    romeo = true;
                    verify['loading'] = romeo;
                    verify = offset.bind(zulu)(yankee, verify);
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    verify = 16;
                    verify = yankee[verify];
                    romeo = offset.bind(zulu)(verify);
                    yankee = romeo.getMyContentInventory;
                    verify = {};
                    offset = null;
                    sizing = offset == backup;
                    backup = undefined;
                    if(sizing) { _fun00014_ip = 203; continue _fun00013 }
 195:
                    backup = kilo.refresh_token;
 203:
                    verify['token'] = backup;
                    backup = tango;
                    verify['feedId'] = backup;
                    verify['feature'] = foxtrot;
                    verify = yankee.bind(romeo)(verify);
                    SaveGenerator(address=230);
 228:
                    return verify;
 230:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(yankee) { _fun00014_ip = 367; continue _fun00013 }
 239:
                    romeo = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    yankee = 17;
                    yankee = foxtrot[yankee];
                    backup = romeo.bind(zulu)(yankee);
                    foxtrot = backup.dispatch;
                    yankee = {};
                    romeo = 'CONTENT_INVENTORY_SET_FEED';
                    yankee['type'] = romeo;
                    romeo = tango;
                    yankee['feedId'] = romeo;
                    yankee['feed'] = verify;
                    yankee = foxtrot.bind(backup)(yankee);
                    backup = _closure1_slot22;
                    foxtrot = backup.set;
                    yankee = 0;
                    yankee = foxtrot.bind(backup)(romeo, yankee);
                    foxtrot = _closure1_slot21;
                    yankee = foxtrot.delete;
                    yankee = yankee.bind(foxtrot)(romeo);
                    foxtrot = _closure1_slot28;
                    yankee = {};
                    backup = false;
                    yankee['loading'] = backup;
                    yankee = foxtrot.bind(zulu)(romeo, yankee);
                    yankee = _closure1_slot18;
                    if(!(romeo === yankee)) { _fun00014_ip = 362; continue _fun00013 }
 350:
                    _closure1_slot23 = offset;
                    offset = _closure1_slot31;
                    offset = offset.bind(zulu)();
 362: // try_end0
                    _fun00014_ip = 620; continue _fun00013;
 367:
                    return verify;
 370: // catch_target0
                    CatchBlockStart(arg_register=8);
                    yankee = _closure1_slot22;
                    offset = yankee.get;
                    verify = tango;
                    offset = offset.bind(yankee)(verify);
                    options = offset;
                    verify = null;
                    offset = verify != offset;
                    verify = 0;
                    if(!offset) { _fun00014_ip = 406; continue _fun00013 }
 403:
                    verify = options;
 406:
                    golf = verify;
                    options = _closure1_slot16;
                    if(!(!(verify < options))) { _fun00014_ip = 472; continue _fun00013 }
 417:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    options = 17;
                    options = offset[options];
                    offset = verify.bind(zulu)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'CONTENT_INVENTORY_CLEAR_FEED';
                    options['type'] = yankee;
                    yankee = tango;
                    options['feedId'] = yankee;
                    options = verify.bind(offset)(options);
                    _fun00014_ip = 606; continue _fun00013;
 472:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    options = 14;
                    options = offset[options];
                    options = verify.bind(zulu)(options);
                    options = options.Millis;
                    options = options.MINUTE;
                    romeo = global;
                    yankee = romeo.Math;
                    verify = yankee.pow;
                    offset = golf;
                    golf = 2;
                    golf = verify.bind(yankee)(golf, offset);
                    foxtrot = options * golf;
                    golf = _closure1_slot27;
                    yankee = golf.bind(zulu)(offset);
                    options = _closure1_slot20;
                    golf = options.set;
                    verify = tango;
                    romeo = romeo.setTimeout;
                    yankee = foxtrot + yankee;
                    oscar = function() {
                        zulu = _closure1_slot32;
                        mike = {};
                        tango = _closure4_slot0;
                        mike['feedId'] = tango;
                        tango = _closure4_slot1;
                        mike['feature'] = tango;
                        entity = _closure4_slot2;
                        mike['force'] = entity;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    oscar = romeo.bind(zulu)(oscar, yankee);
                    oscar = golf.bind(options)(verify, oscar);
                    options = _closure1_slot22;
                    golf = options.set;
                    oscar = 1;
                    oscar = offset + oscar;
                    oscar = golf.bind(options)(verify, oscar);
 606:
                    oscar = _closure1_slot21;
                    report = oscar.delete;
                    tango = report.bind(oscar)(tango);
 620:
                    return zulu;
 623:
                    return mike;
 626:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot33 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: handleUpdatePollingState
        mike = _closure1_slot31;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function() { // Original name: handlePostConnectionOpen
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            mike = _closure1_slot34;
            entity = undefined;
            mike = mike.bind(entity)();
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 21;
            mike = report[mike];
            report = zulu.bind(entity)(mike);
            zulu = report.getUserProfileRecentActivityExperiment;
            mike = {'location': 'ContentInventoryManager', 'autoTrackExposure': false};
            mike = zulu.bind(report)(mike);
            mike = mike.recentActivityEnabled;
            if(!mike) { _fun00016_ip = 130; continue _fun00015 }
 67:
            zulu = _closure1_slot32;
            mike = {};
            report = _closure1_slot14;
            report = report.GAME_PROFILE_FEED;
            mike['feedId'] = report;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 20;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            tango = tango.ContentInventoryFeature;
            tango = tango.RECENT_ACTIVITY;
            mike['feature'] = tango;
            mike = zulu.bind(entity)(mike);
 130:
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function() { // Original name: handleConnectionClosed
        zulu = _closure1_slot30;
        mike = _closure1_slot18;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: handleManualRefresh
        entity = argFoo;
        report = entity.feedId;
        tango = entity.feature;
        zulu = _closure1_slot30;
        entity = undefined;
        zulu = zulu.bind(entity)(report);
        zulu = _closure1_slot32;
        mike = {};
        mike['feedId'] = report;
        mike['feature'] = tango;
        tango = true;
        mike['force'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: handleInboxStale
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            report = entity.refreshAfterMs;
            tango = _closure1_slot13;
            zulu = tango.getFeed;
            entity = _closure1_slot18;
            oscar = zulu.bind(tango)(entity);
            golf = null;
            tango = golf == oscar;
            entity = undefined;
            zulu = undefined;
            if(tango) { _fun00018_ip = 50; continue _fun00017 }
 44:
            zulu = oscar.refresh_stale_inbox_after_ms;
 50:
            if(!(golf != zulu)) { _fun00018_ip = 133; continue _fun00017 }
 54:
            zulu = global;
            options = zulu.Date;
            tango = options.now;
            tango = tango.bind(options)();
            if(!(golf == report)) { _fun00018_ip = 81; continue _fun00017 }
 75:
            report = oscar.refresh_stale_inbox_after_ms;
 81:
            verify = tango + report;
            zulu = zulu.Date;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            offset = tango;
            zulu = new offset[zulu](verify, options);
            tango = zulu instanceof Object ? zulu : tango;
            zulu = tango.toUTCString;
            zulu = zulu.bind(tango)();
            _closure1_slot23 = zulu;
            mike = _closure1_slot31;
            mike = mike.bind(entity)();
 133:
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: handleSpotifyNewTrack
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tango = entity.connectionId;
            zulu = entity.track;
            mike = null;
            if(!(mike != tango)) { _fun00020_ip = 79; continue _fun00019 }
 20:
            golf = _closure1_slot10;
            oscar = golf.getAccount;
            report = _closure1_slot15;
            report = report.SPOTIFY;
            oscar = oscar.bind(golf)(tango, report);
            golf = mike == oscar;
            mike = undefined;
            report = undefined;
            if(golf) { _fun00020_ip = 66; continue _fun00019 }
 60:
            report = oscar.showActivity;
 66:
            if(!report) { _fun00020_ip = 79; continue _fun00019 }
 69:
            entity = _closure1_slot24;
            entity = entity.bind(mike)(tango, zulu);
 79:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function() { // Original name: handleFetchGameProfileFeed
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 19;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            oscar = mike.ReEnableGameProfileInventoryExperiment;
            report = oscar.getCurrentConfig;
            zulu = {};
            mike = 'ContentInventoryManager';
            zulu['location'] = mike;
            mike = {};
            golf = false;
            mike['autoTrackExposure'] = golf;
            mike = report.bind(oscar)(zulu, mike);
            mike = mike.enabled;
            if(!mike) { _fun00022_ip = 135; continue _fun00021 }
 72:
            zulu = _closure1_slot32;
            mike = {};
            report = _closure1_slot14;
            report = report.GAME_PROFILE_FEED;
            mike['feedId'] = report;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 20;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            tango = tango.ContentInventoryFeature;
            tango = tango.GAME_PROFILE;
            mike['feature'] = tango;
            mike = zulu.bind(entity)(mike);
 135:
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function() { // Original name: handleFetchOverlayInvitesFeed
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 22;
            mike = golf[entity];
            entity = undefined;
            options = zulu.bind(entity)(mike);
            report = options.getCurrentConfig;
            zulu = {};
            oscar = 'ContentInventoryManager';
            zulu['location'] = oscar;
            mike = {};
            verify = true;
            mike['autoTrackExposure'] = verify;
            mike = report.bind(options)(zulu, mike);
            mike = mike.enabled;
            report = _closure1_slot0;
            zulu = 23;
            zulu = golf[zulu];
            report = report.bind(entity)(zulu);
            zulu = report.getUseOverlayV3;
            zulu = zulu.bind(report)(oscar);
            zulu = zulu.allowActivityWidget;
            if(mike) { _fun00024_ip = 102; continue _fun00023 }
 99:
            mike = zulu;
 102:
            if(!mike) { _fun00024_ip = 168; continue _fun00023 }
 105:
            zulu = _closure1_slot32;
            mike = {};
            report = _closure1_slot14;
            report = report.GAME_PROFILE_FEED;
            mike['feedId'] = report;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 20;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            tango = tango.ContentInventoryFeature;
            tango = tango.OVERLAY_INVITES;
            mike['feature'] = tango;
            mike = zulu.bind(entity)(mike);
 168:
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    verify = global;
    yankee = verify.Object;
    offset = yankee.defineProperty;
    options = {};
    tango = true;
    options['value'] = tango;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    romeo = 2;
    options = oscar[romeo];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    offset = oscar[options];
    offset = golf.bind(entity)(offset);
    var _closure1_slot7 = offset;
    offset = 5;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    var _closure1_slot8 = offset;
    offset = 6;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    var _closure1_slot9 = offset;
    offset = 7;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    var _closure1_slot10 = offset;
    offset = 8;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    var _closure1_slot11 = offset;
    offset = 9;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    offset = 10;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    var _closure1_slot12 = offset;
    offset = 11;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    var _closure1_slot13 = offset;
    offset = 12;
    offset = oscar[offset];
    offset = report.bind(entity)(offset);
    offset = offset.ContentInventoryFeedKey;
    var _closure1_slot14 = offset;
    yankee = 13;
    yankee = oscar[yankee];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.PlatformTypes;
    var _closure1_slot15 = yankee;
    var _closure1_slot16 = options;
    options = 14;
    yankee = oscar[options];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.Millis;
    yankee = yankee.MINUTE;
    yankee = romeo * yankee;
    var _closure1_slot17 = yankee;
    offset = offset.GLOBAL_FEED;
    var _closure1_slot18 = offset;
    options = oscar[options];
    options = golf.bind(entity)(options);
    options = options.Millis;
    offset = options.MINUTE;
    options = 15;
    offset = options * offset;
    var _closure1_slot19 = offset;
    offset = verify.Map;
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    sizing = yankee;
    offset = new sizing[offset](kilo);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot20 = offset;
    offset = verify.Set;
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    sizing = yankee;
    offset = new sizing[offset](kilo);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot21 = offset;
    verify = verify.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    sizing = offset;
    verify = new sizing[verify](kilo);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot22 = verify;
    verify = null;
    var _closure1_slot23 = verify;
    options = oscar[options];
    yankee = report.bind(entity)(options);
    offset = yankee.debounce;
    options = 16;
    options = oscar[options];
    options = report.bind(entity)(options);
    verify = options.postTrackToContentInventory;
    options = {};
    options['trailing'] = tango;
    tango = 3000;
    tango = offset.bind(yankee)(verify, tango, options);
    var _closure1_slot24 = tango;
    tango = 24;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: ContentInventoryManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot4;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            mike = _closure1_slot25;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            mike = {};
            tango = _closure1_slot35;
            mike['POST_CONNECTION_OPEN'] = tango;
            tango = _closure1_slot36;
            mike['CONNECTION_CLOSED'] = tango;
            tango = _closure1_slot34;
            mike['WINDOW_FOCUS'] = tango;
            mike['IDLE'] = tango;
            mike['CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN'] = tango;
            tango = _closure1_slot37;
            mike['CONTENT_INVENTORY_MANUAL_REFRESH'] = tango;
            tango = _closure1_slot38;
            mike['CONTENT_INVENTORY_INBOX_STALE'] = tango;
            tango = _closure1_slot39;
            mike['SPOTIFY_NEW_TRACK'] = tango;
            tango = _closure1_slot40;
            mike['GAME_PROFILE_OPEN'] = tango;
            zulu = _closure1_slot41;
            mike['OVERLAY_READY'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    sizing = tango;
    mike = new sizing[mike](kilo);
    mike = mike instanceof Object ? mike : tango;
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/content_inventory/ContentInventoryManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();