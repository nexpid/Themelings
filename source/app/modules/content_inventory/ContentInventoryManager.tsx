// app/modules/content_inventory/ContentInventoryManager.tsx
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
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot26;
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
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot25 = entity;
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
            _closure1_slot26 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: getBackoffJitter
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = arguments[0];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            zuuluu = 0;
 11:
            entity = global;
            michal = entity.Math;
            entity = michal.random;
            michal = entity.bind(michal)();
            entity = 1;
            entity = zuuluu + entity;
            michal = michal * entity;
            entity = _closure1_slot17;
            entity = michal * entity;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: setFeedState
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 17;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CONTENT_INVENTORY_SET_FEED_STATE';
        michal['type'] = report;
        report = argFoo;
        michal['feedId'] = report;
        report = argBar;
        michal['state'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: canFetch
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot21;
            michal = zuuluu.has;
            michal = michal.bind(zuuluu)(tangon);
            if(michal) { _fun00008_ip = 285; continue _fun00007 }
 26:
            michal = _closure1_slot14;
            michal = michal.GAME_PROFILE_FEED;
            if(!(tangon === michal)) { _fun00008_ip = 108; continue _fun00007 }
 40:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 18;
            michal = zuuluu[michal];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(michal);
            report = oscard.canSeeGameProfile;
            michal = 'ContentInventoryManager';
            michal = report.bind(oscard)(michal);
            if(michal) { _fun00008_ip = 86; continue _fun00007 }
 82:
            michal = false;
            return michal;
 86:
            report = _closure1_slot13;
            michal = report.getFeed;
            michal = michal.bind(report)(tangon);
            if(!(zuuluu === michal)) { _fun00008_ip = 281; continue _fun00007 }
 108:
            michal = _closure1_slot18;
            if(!(tangon === michal)) { _fun00008_ip = 269; continue _fun00007 }
 119:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 19;
            zuuluu = zuuluu[michal];
            michal = undefined;
            report = report.bind(michal)(zuuluu);
            zuuluu = report.isEligibleForContentInventoryV1;
            michal = 'ContentInventoryManager';
            michal = zuuluu.bind(report)(michal);
            if(michal) { _fun00008_ip = 165; continue _fun00007 }
 161:
            michal = false;
            return michal;
 165:
            michal = _closure1_slot12;
            michal = michal.hidden;
            if(!michal) { _fun00008_ip = 199; continue _fun00007 }
 178:
            zuuluu = _closure1_slot13;
            michal = zuuluu.getFeed;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = null;
            if(!(michal == zuuluu)) { _fun00008_ip = 277; continue _fun00007 }
 199:
            zuuluu = _closure1_slot9;
            michal = zuuluu.isConnected;
            michal = michal.bind(zuuluu)();
            if(michal) { _fun00008_ip = 220; continue _fun00007 }
 216:
            michal = false;
            return michal;
 220:
            zuuluu = _closure1_slot11;
            michal = zuuluu.getIdleSince;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            if(!(michal != zuuluu)) { _fun00008_ip = 269; continue _fun00007 }
 240:
            michal = global;
            tangon = michal.Date;
            michal = tangon.now;
            michal = michal.bind(tangon)();
            michal = michal - zuuluu;
            entity = _closure1_slot19;
            if(!(!(michal > entity))) { _fun00008_ip = 273; continue _fun00007 }
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
            tangon = argFoo;
            report = _closure1_slot28;
            zuuluu = {};
            entity = false;
            zuuluu['loading'] = entity;
            entity = undefined;
            zuuluu = report.bind(entity)(tangon, zuuluu);
            report = _closure1_slot20;
            zuuluu = report.get;
            report = zuuluu.bind(report)(tangon);
            if(!(entity !== report)) { _fun00010_ip = 72; continue _fun00009 }
 45:
            zuuluu = global;
            zuuluu = zuuluu.clearTimeout;
            zuuluu = zuuluu.bind(entity)(report);
            zuuluu = _closure1_slot20;
            michal = zuuluu.delete;
            michal = michal.bind(zuuluu)(tangon);
 72:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: scheduleNextFetch
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot22;
            zuuluu = tangon.get;
            entity = _closure1_slot18;
            zuuluu = zuuluu.bind(tangon)(entity);
            tangon = null;
            report = tangon != zuuluu;
            verify = 0;
            entity = 0;
            if(!report) { _fun00012_ip = 37; continue _fun00011 }
 34:
            entity = zuuluu;
 37:
            if(!(entity > verify)) { _fun00012_ip = 52; continue _fun00011 }
 41:
            zuuluu = _closure1_slot16;
            if(!(!(entity <= zuuluu))) { _fun00012_ip = 452; continue _fun00011 }
 52:
            report = _closure1_slot30;
            zuuluu = _closure1_slot18;
            golfie = undefined;
            zuuluu = report.bind(golfie)(zuuluu);
            report = _closure1_slot29;
            zuuluu = _closure1_slot18;
            zuuluu = report.bind(golfie)(zuuluu);
            if(!zuuluu) { _fun00012_ip = 452; continue _fun00011 }
 86:
            oscard = _closure1_slot13;
            report = oscard.getFeed;
            zuuluu = _closure1_slot18;
            report = report.bind(oscard)(zuuluu);
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00012_ip = 120; continue _fun00011 }
 114:
            zuuluu = report.refresh_stale_inbox_after_ms;
 120:
            if(!(tangon != zuuluu)) { _fun00012_ip = 135; continue _fun00011 }
 124:
            zuuluu = _closure1_slot23;
            if(!(tangon != zuuluu)) { _fun00012_ip = 452; continue _fun00011 }
 135:
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00012_ip = 150; continue _fun00011 }
 144:
            zuuluu = report.expired_at;
 150:
            zuuluu = tangon == zuuluu;
            option = 0;
            if(zuuluu) { _fun00012_ip = 222; continue _fun00011 }
 159:
            zuuluu = global;
            offset = zuuluu.Date;
            foxtra = report.expired_at;
            oscard = offset.prototype;
            oscard = Object.create(oscard, {constructor: {value: offset}});
            backup = oscard;
            report = new backup[offset](foxtra, romeon);
            oscard = report instanceof Object ? report : oscard;
            report = oscard.getTime;
            report = report.bind(oscard)();
            oscard = zuuluu.Date;
            zuuluu = oscard.now;
            zuuluu = zuuluu.bind(oscard)();
            option = report - zuuluu;
 222:
            zuuluu = _closure1_slot23;
            zuuluu = tangon == zuuluu;
            oscard = 0;
            if(zuuluu) { _fun00012_ip = 296; continue _fun00011 }
 235:
            zuuluu = global;
            offset = zuuluu.Date;
            foxtra = _closure1_slot23;
            report = offset.prototype;
            report = Object.create(report, {constructor: {value: offset}});
            backup = report;
            tangon = new backup[offset](foxtra, romeon);
            report = tangon instanceof Object ? tangon : report;
            tangon = report.getTime;
            tangon = tangon.bind(report)();
            report = zuuluu.Date;
            zuuluu = report.now;
            zuuluu = zuuluu.bind(report)();
            oscard = tangon - zuuluu;
 296:
            entity = entity > verify;
            tangon = 0;
            if(!entity) { _fun00012_ip = 313; continue _fun00011 }
 305:
            entity = _closure1_slot27;
            tangon = entity.bind(golfie)();
 313:
            entity = global;
            report = entity.Math;
            zuuluu = report.max;
            zuuluu = zuuluu.bind(report)(verify, oscard, option);
            oscard = zuuluu + tangon;
            report = _closure1_slot28;
            tangon = _closure1_slot18;
            zuuluu = {};
            option = false;
            zuuluu['loading'] = option;
            offset = entity.Date;
            verify = entity.Date;
            option = verify.now;
            option = option.bind(verify)();
            foxtra = option + oscard;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            backup = verify;
            option = new backup[offset](foxtra, romeon);
            option = option instanceof Object ? option : verify;
            zuuluu['nextFetchDate'] = option;
            zuuluu = report.bind(golfie)(tangon, zuuluu);
            tangon = _closure1_slot20;
            zuuluu = tangon.set;
            michal = _closure1_slot18;
            report = entity.setTimeout;
            entity = function() {
                zuuluu = _closure1_slot32;
                michal = {};
                tangon = _closure1_slot18;
                michal['feedId'] = tangon;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 20;
                tangon = tangon[entity];
                entity = undefined;
                tangon = report.bind(entity)(tangon);
                tangon = tangon.ContentInventoryFeature;
                tangon = tangon.INBOX;
                michal['feature'] = tangon;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = report.bind(golfie)(entity, oscard);
            entity = zuuluu.bind(tangon)(michal, entity);
 452:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: fetchInventory
        entity = undefined;
        tangon = _closure1_slot33;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: _fetchInventory
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 626; continue _fun00013 }
 15:
                    zuuluu = michal.feedId;
                    tangon = zuuluu;
                    var _closure4_slot0 = zuuluu;
                    zuuluu = michal.feature;
                    foxtra = zuuluu;
                    var _closure4_slot1 = zuuluu;
                    verify = michal.force;
                    zuuluu = undefined;
                    if(!(verify === zuuluu)) { _fun00014_ip = 55; continue _fun00013 }
 53:
                    verify = false;
 55:
                    var _closure4_slot2 = verify;
                    kiloes = undefined;
                    option = undefined;
                    golfie = undefined;
                    SaveGenerator(address=69);
 67:
                    return zuuluu;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 623; continue _fun00013 }
 78:
                    yankee = _closure1_slot29;
                    offset = tangon;
                    offset = yankee.bind(zuuluu)(offset);
                    if(offset) { _fun00014_ip = 102; continue _fun00013 }
 96:
                    if(!verify) { _fun00014_ip = 620; continue _fun00013 }
 102: // try_start_0
                    offset = _closure1_slot13;
                    verify = offset.getFeed;
                    yankee = tangon;
                    backup = verify.bind(offset)(yankee);
                    kiloes = backup;
                    offset = _closure1_slot21;
                    verify = offset.add;
                    verify = verify.bind(offset)(yankee);
                    offset = _closure1_slot28;
                    verify = {};
                    romeon = true;
                    verify['loading'] = romeon;
                    verify = offset.bind(zuuluu)(yankee, verify);
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    verify = 16;
                    verify = yankee[verify];
                    romeon = offset.bind(zuuluu)(verify);
                    yankee = romeon.getMyContentInventory;
                    verify = {};
                    offset = null;
                    sizing = offset == backup;
                    backup = undefined;
                    if(sizing) { _fun00014_ip = 203; continue _fun00013 }
 195:
                    backup = kiloes.refresh_token;
 203:
                    verify['token'] = backup;
                    backup = tangon;
                    verify['feedId'] = backup;
                    verify['feature'] = foxtra;
                    verify = yankee.bind(romeon)(verify);
                    SaveGenerator(address=230);
 228:
                    return verify;
 230:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(yankee) { _fun00014_ip = 367; continue _fun00013 }
 239:
                    romeon = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    yankee = 17;
                    yankee = foxtra[yankee];
                    backup = romeon.bind(zuuluu)(yankee);
                    foxtra = backup.dispatch;
                    yankee = {};
                    romeon = 'CONTENT_INVENTORY_SET_FEED';
                    yankee['type'] = romeon;
                    romeon = tangon;
                    yankee['feedId'] = romeon;
                    yankee['feed'] = verify;
                    yankee = foxtra.bind(backup)(yankee);
                    backup = _closure1_slot22;
                    foxtra = backup.set;
                    yankee = 0;
                    yankee = foxtra.bind(backup)(romeon, yankee);
                    foxtra = _closure1_slot21;
                    yankee = foxtra.delete;
                    yankee = yankee.bind(foxtra)(romeon);
                    foxtra = _closure1_slot28;
                    yankee = {};
                    backup = false;
                    yankee['loading'] = backup;
                    yankee = foxtra.bind(zuuluu)(romeon, yankee);
                    yankee = _closure1_slot18;
                    if(!(romeon === yankee)) { _fun00014_ip = 362; continue _fun00013 }
 350:
                    _closure1_slot23 = offset;
                    offset = _closure1_slot31;
                    offset = offset.bind(zuuluu)();
 362: // try_end0
                    _fun00014_ip = 620; continue _fun00013;
 367:
                    return verify;
 370: // catch_target0
                    CatchBlockStart(arg_register=8);
                    yankee = _closure1_slot22;
                    offset = yankee.get;
                    verify = tangon;
                    offset = offset.bind(yankee)(verify);
                    option = offset;
                    verify = null;
                    offset = verify != offset;
                    verify = 0;
                    if(!offset) { _fun00014_ip = 406; continue _fun00013 }
 403:
                    verify = option;
 406:
                    golfie = verify;
                    option = _closure1_slot16;
                    if(!(!(verify < option))) { _fun00014_ip = 472; continue _fun00013 }
 417:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 17;
                    option = offset[option];
                    offset = verify.bind(zuuluu)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'CONTENT_INVENTORY_CLEAR_FEED';
                    option['type'] = yankee;
                    yankee = tangon;
                    option['feedId'] = yankee;
                    option = verify.bind(offset)(option);
                    _fun00014_ip = 606; continue _fun00013;
 472:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 14;
                    option = offset[option];
                    option = verify.bind(zuuluu)(option);
                    option = option.Millis;
                    option = option.MINUTE;
                    romeon = global;
                    yankee = romeon.Math;
                    verify = yankee.pow;
                    offset = golfie;
                    golfie = 2;
                    golfie = verify.bind(yankee)(golfie, offset);
                    foxtra = option * golfie;
                    golfie = _closure1_slot27;
                    yankee = golfie.bind(zuuluu)(offset);
                    option = _closure1_slot20;
                    golfie = option.set;
                    verify = tangon;
                    romeon = romeon.setTimeout;
                    yankee = foxtra + yankee;
                    oscard = function() {
                        zuuluu = _closure1_slot32;
                        michal = {};
                        tangon = _closure4_slot0;
                        michal['feedId'] = tangon;
                        tangon = _closure4_slot1;
                        michal['feature'] = tangon;
                        entity = _closure4_slot2;
                        michal['force'] = entity;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    oscard = romeon.bind(zuuluu)(oscard, yankee);
                    oscard = golfie.bind(option)(verify, oscard);
                    option = _closure1_slot22;
                    golfie = option.set;
                    oscard = 1;
                    oscard = offset + oscard;
                    oscard = golfie.bind(option)(verify, oscard);
 606:
                    oscard = _closure1_slot21;
                    report = oscard.delete;
                    tangon = report.bind(oscard)(tangon);
 620:
                    return zuuluu;
 623:
                    return michal;
 626:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot33 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: handleUpdatePollingState
        michal = _closure1_slot31;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function() { // Original name: handlePostConnectionOpen
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = _closure1_slot34;
            entity = undefined;
            michal = michal.bind(entity)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 21;
            michal = report[michal];
            report = zuuluu.bind(entity)(michal);
            zuuluu = report.getUserProfileRecentActivityExperiment;
            michal = {'location': 'ContentInventoryManager', 'autoTrackExposure': false};
            michal = zuuluu.bind(report)(michal);
            michal = michal.recentActivityEnabled;
            if(!michal) { _fun00016_ip = 130; continue _fun00015 }
 67:
            zuuluu = _closure1_slot32;
            michal = {};
            report = _closure1_slot14;
            report = report.GAME_PROFILE_FEED;
            michal['feedId'] = report;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 20;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            tangon = tangon.ContentInventoryFeature;
            tangon = tangon.RECENT_ACTIVITY;
            michal['feature'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 130:
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function() { // Original name: handleConnectionClosed
        zuuluu = _closure1_slot30;
        michal = _closure1_slot18;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: handleManualRefresh
        entity = argFoo;
        report = entity.feedId;
        tangon = entity.feature;
        zuuluu = _closure1_slot30;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(report);
        zuuluu = _closure1_slot32;
        michal = {};
        michal['feedId'] = report;
        michal['feature'] = tangon;
        tangon = true;
        michal['force'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: handleInboxStale
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            report = entity.refreshAfterMs;
            tangon = _closure1_slot13;
            zuuluu = tangon.getFeed;
            entity = _closure1_slot18;
            oscard = zuuluu.bind(tangon)(entity);
            golfie = null;
            tangon = golfie == oscard;
            entity = undefined;
            zuuluu = undefined;
            if(tangon) { _fun00018_ip = 50; continue _fun00017 }
 44:
            zuuluu = oscard.refresh_stale_inbox_after_ms;
 50:
            if(!(golfie != zuuluu)) { _fun00018_ip = 133; continue _fun00017 }
 54:
            zuuluu = global;
            option = zuuluu.Date;
            tangon = option.now;
            tangon = tangon.bind(option)();
            if(!(golfie == report)) { _fun00018_ip = 81; continue _fun00017 }
 75:
            report = oscard.refresh_stale_inbox_after_ms;
 81:
            verify = tangon + report;
            zuuluu = zuuluu.Date;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            offset = tangon;
            zuuluu = new offset[zuuluu](verify, option);
            tangon = zuuluu instanceof Object ? zuuluu : tangon;
            zuuluu = tangon.toUTCString;
            zuuluu = zuuluu.bind(tangon)();
            _closure1_slot23 = zuuluu;
            michal = _closure1_slot31;
            michal = michal.bind(entity)();
 133:
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: handleSpotifyNewTrack
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tangon = entity.connectionId;
            zuuluu = entity.track;
            michal = null;
            if(!(michal != tangon)) { _fun00020_ip = 79; continue _fun00019 }
 20:
            golfie = _closure1_slot10;
            oscard = golfie.getAccount;
            report = _closure1_slot15;
            report = report.SPOTIFY;
            oscard = oscard.bind(golfie)(tangon, report);
            golfie = michal == oscard;
            michal = undefined;
            report = undefined;
            if(golfie) { _fun00020_ip = 66; continue _fun00019 }
 60:
            report = oscard.showActivity;
 66:
            if(!report) { _fun00020_ip = 79; continue _fun00019 }
 69:
            entity = _closure1_slot24;
            entity = entity.bind(michal)(tangon, zuuluu);
 79:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function() { // Original name: handleFetchGameProfileFeed
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 19;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            oscard = michal.ReEnableGameProfileInventoryExperiment;
            report = oscard.getCurrentConfig;
            zuuluu = {};
            michal = 'ContentInventoryManager';
            zuuluu['location'] = michal;
            michal = {};
            golfie = false;
            michal['autoTrackExposure'] = golfie;
            michal = report.bind(oscard)(zuuluu, michal);
            michal = michal.enabled;
            if(!michal) { _fun00022_ip = 135; continue _fun00021 }
 72:
            zuuluu = _closure1_slot32;
            michal = {};
            report = _closure1_slot14;
            report = report.GAME_PROFILE_FEED;
            michal['feedId'] = report;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 20;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            tangon = tangon.ContentInventoryFeature;
            tangon = tangon.GAME_PROFILE;
            michal['feature'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 135:
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function() { // Original name: handleFetchOverlayInvitesFeed
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 22;
            michal = golfie[entity];
            entity = undefined;
            option = zuuluu.bind(entity)(michal);
            report = option.getCurrentConfig;
            zuuluu = {};
            oscard = 'ContentInventoryManager';
            zuuluu['location'] = oscard;
            michal = {};
            verify = true;
            michal['autoTrackExposure'] = verify;
            michal = report.bind(option)(zuuluu, michal);
            michal = michal.enabled;
            report = _closure1_slot0;
            zuuluu = 23;
            zuuluu = golfie[zuuluu];
            report = report.bind(entity)(zuuluu);
            zuuluu = report.getUseOverlayV3;
            zuuluu = zuuluu.bind(report)(oscard);
            zuuluu = zuuluu.allowActivityWidget;
            if(michal) { _fun00024_ip = 102; continue _fun00023 }
 99:
            michal = zuuluu;
 102:
            if(!michal) { _fun00024_ip = 168; continue _fun00023 }
 105:
            zuuluu = _closure1_slot32;
            michal = {};
            report = _closure1_slot14;
            report = report.GAME_PROFILE_FEED;
            michal['feedId'] = report;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 20;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            tangon = tangon.ContentInventoryFeature;
            tangon = tangon.OVERLAY_INVITES;
            michal['feature'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 168:
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    verify = global;
    yankee = verify.Object;
    offset = yankee.defineProperty;
    option = {};
    tangon = true;
    option['value'] = tangon;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    romeon = 2;
    option = oscard[romeon];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    offset = oscard[option];
    offset = golfie.bind(entity)(offset);
    var _closure1_slot7 = offset;
    offset = 5;
    offset = oscard[offset];
    offset = golfie.bind(entity)(offset);
    var _closure1_slot8 = offset;
    offset = 6;
    offset = oscard[offset];
    offset = golfie.bind(entity)(offset);
    var _closure1_slot9 = offset;
    offset = 7;
    offset = oscard[offset];
    offset = golfie.bind(entity)(offset);
    var _closure1_slot10 = offset;
    offset = 8;
    offset = oscard[offset];
    offset = golfie.bind(entity)(offset);
    var _closure1_slot11 = offset;
    offset = 9;
    offset = oscard[offset];
    offset = golfie.bind(entity)(offset);
    offset = 10;
    offset = oscard[offset];
    offset = golfie.bind(entity)(offset);
    var _closure1_slot12 = offset;
    offset = 11;
    offset = oscard[offset];
    offset = golfie.bind(entity)(offset);
    var _closure1_slot13 = offset;
    offset = 12;
    offset = oscard[offset];
    offset = report.bind(entity)(offset);
    offset = offset.ContentInventoryFeedKey;
    var _closure1_slot14 = offset;
    yankee = 13;
    yankee = oscard[yankee];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.PlatformTypes;
    var _closure1_slot15 = yankee;
    var _closure1_slot16 = option;
    option = 14;
    yankee = oscard[option];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.Millis;
    yankee = yankee.MINUTE;
    yankee = romeon * yankee;
    var _closure1_slot17 = yankee;
    offset = offset.GLOBAL_FEED;
    var _closure1_slot18 = offset;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    option = option.Millis;
    offset = option.MINUTE;
    option = 15;
    offset = option * offset;
    var _closure1_slot19 = offset;
    offset = verify.Map;
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    sizing = yankee;
    offset = new sizing[offset](kiloes);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot20 = offset;
    offset = verify.Set;
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    sizing = yankee;
    offset = new sizing[offset](kiloes);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot21 = offset;
    verify = verify.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    sizing = offset;
    verify = new sizing[verify](kiloes);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot22 = verify;
    verify = null;
    var _closure1_slot23 = verify;
    option = oscard[option];
    yankee = report.bind(entity)(option);
    offset = yankee.debounce;
    option = 16;
    option = oscard[option];
    option = report.bind(entity)(option);
    verify = option.postTrackToContentInventory;
    option = {};
    option['trailing'] = tangon;
    tangon = 3000;
    tangon = offset.bind(yankee)(verify, tangon, option);
    var _closure1_slot24 = tangon;
    tangon = 24;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: ContentInventoryManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            entity = _closure1_slot4;
            report = _closure2_slot0;
            tangon = undefined;
            entity = entity.bind(tangon)(oscard, report);
            michal = _closure1_slot25;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = michal.bind(tangon)(oscard, report, entity);
            michal = {};
            tangon = _closure1_slot35;
            michal['POST_CONNECTION_OPEN'] = tangon;
            tangon = _closure1_slot36;
            michal['CONNECTION_CLOSED'] = tangon;
            tangon = _closure1_slot34;
            michal['WINDOW_FOCUS'] = tangon;
            michal['IDLE'] = tangon;
            michal['CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN'] = tangon;
            tangon = _closure1_slot37;
            michal['CONTENT_INVENTORY_MANUAL_REFRESH'] = tangon;
            tangon = _closure1_slot38;
            michal['CONTENT_INVENTORY_INBOX_STALE'] = tangon;
            tangon = _closure1_slot39;
            michal['SPOTIFY_NEW_TRACK'] = tangon;
            tangon = _closure1_slot40;
            michal['GAME_PROFILE_OPEN'] = tangon;
            zuuluu = _closure1_slot41;
            michal['OVERLAY_READY'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    sizing = tangon;
    michal = new sizing[michal](kiloes);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 25;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/content_inventory/ContentInventoryManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();