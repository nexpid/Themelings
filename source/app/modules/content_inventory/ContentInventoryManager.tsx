// app/modules/content_inventory/ContentInventoryManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    entity = function() { // Original name: getBackoffJitter
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = arguments[0];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00004_ip = 11; continue _fun00003 }
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
            entity = _closure1_slot16;
            entity = michal * entity;
            return entity;
        }
    };
    var _closure1_slot25 = entity;
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
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: canFetch
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot20;
            michal = zuuluu.has;
            michal = michal.bind(zuuluu)(tangon);
            if(michal) { _fun00006_ip = 285; continue _fun00005 }
 26:
            michal = _closure1_slot14;
            michal = michal.GAME_PROFILE_FEED;
            if(!(tangon === michal)) { _fun00006_ip = 108; continue _fun00005 }
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
            if(michal) { _fun00006_ip = 86; continue _fun00005 }
 82:
            michal = false;
            return michal;
 86:
            report = _closure1_slot13;
            michal = report.getFeed;
            michal = michal.bind(report)(tangon);
            if(!(zuuluu === michal)) { _fun00006_ip = 281; continue _fun00005 }
 108:
            michal = _closure1_slot17;
            if(!(tangon === michal)) { _fun00006_ip = 269; continue _fun00005 }
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
            if(michal) { _fun00006_ip = 165; continue _fun00005 }
 161:
            michal = false;
            return michal;
 165:
            michal = _closure1_slot12;
            michal = michal.hidden;
            if(!michal) { _fun00006_ip = 199; continue _fun00005 }
 178:
            zuuluu = _closure1_slot13;
            michal = zuuluu.getFeed;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = null;
            if(!(michal == zuuluu)) { _fun00006_ip = 277; continue _fun00005 }
 199:
            zuuluu = _closure1_slot9;
            michal = zuuluu.isConnected;
            michal = michal.bind(zuuluu)();
            if(michal) { _fun00006_ip = 220; continue _fun00005 }
 216:
            michal = false;
            return michal;
 220:
            zuuluu = _closure1_slot11;
            michal = zuuluu.getIdleSince;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            if(!(michal != zuuluu)) { _fun00006_ip = 269; continue _fun00005 }
 240:
            michal = global;
            tangon = michal.Date;
            michal = tangon.now;
            michal = michal.bind(tangon)();
            michal = michal - zuuluu;
            entity = _closure1_slot18;
            if(!(!(michal > entity))) { _fun00006_ip = 273; continue _fun00005 }
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
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: cancelScheduledFetch
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot26;
            zuuluu = {};
            entity = false;
            zuuluu['loading'] = entity;
            entity = undefined;
            zuuluu = report.bind(entity)(tangon, zuuluu);
            report = _closure1_slot19;
            zuuluu = report.get;
            report = zuuluu.bind(report)(tangon);
            if(!(entity !== report)) { _fun00008_ip = 72; continue _fun00007 }
 45:
            zuuluu = global;
            zuuluu = zuuluu.clearTimeout;
            zuuluu = zuuluu.bind(entity)(report);
            zuuluu = _closure1_slot19;
            michal = zuuluu.delete;
            michal = michal.bind(zuuluu)(tangon);
 72:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: scheduleNextFetch
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = _closure1_slot21;
            zuuluu = tangon.get;
            entity = _closure1_slot17;
            zuuluu = zuuluu.bind(tangon)(entity);
            tangon = null;
            report = tangon != zuuluu;
            verify = 0;
            entity = 0;
            if(!report) { _fun00010_ip = 37; continue _fun00009 }
 34:
            entity = zuuluu;
 37:
            if(!(entity > verify)) { _fun00010_ip = 51; continue _fun00009 }
 41:
            zuuluu = 4;
            if(!(!(entity <= zuuluu))) { _fun00010_ip = 451; continue _fun00009 }
 51:
            report = _closure1_slot28;
            zuuluu = _closure1_slot17;
            golfie = undefined;
            zuuluu = report.bind(golfie)(zuuluu);
            report = _closure1_slot27;
            zuuluu = _closure1_slot17;
            zuuluu = report.bind(golfie)(zuuluu);
            if(!zuuluu) { _fun00010_ip = 451; continue _fun00009 }
 85:
            oscard = _closure1_slot13;
            report = oscard.getFeed;
            zuuluu = _closure1_slot17;
            report = report.bind(oscard)(zuuluu);
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00010_ip = 119; continue _fun00009 }
 113:
            zuuluu = report.refresh_stale_inbox_after_ms;
 119:
            if(!(tangon != zuuluu)) { _fun00010_ip = 134; continue _fun00009 }
 123:
            zuuluu = _closure1_slot22;
            if(!(tangon != zuuluu)) { _fun00010_ip = 451; continue _fun00009 }
 134:
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00010_ip = 149; continue _fun00009 }
 143:
            zuuluu = report.expired_at;
 149:
            zuuluu = tangon == zuuluu;
            option = 0;
            if(zuuluu) { _fun00010_ip = 221; continue _fun00009 }
 158:
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
 221:
            zuuluu = _closure1_slot22;
            zuuluu = tangon == zuuluu;
            oscard = 0;
            if(zuuluu) { _fun00010_ip = 295; continue _fun00009 }
 234:
            zuuluu = global;
            offset = zuuluu.Date;
            foxtra = _closure1_slot22;
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
 295:
            entity = entity > verify;
            tangon = 0;
            if(!entity) { _fun00010_ip = 312; continue _fun00009 }
 304:
            entity = _closure1_slot25;
            tangon = entity.bind(golfie)();
 312:
            entity = global;
            report = entity.Math;
            zuuluu = report.max;
            zuuluu = zuuluu.bind(report)(verify, oscard, option);
            oscard = zuuluu + tangon;
            report = _closure1_slot26;
            tangon = _closure1_slot17;
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
            tangon = _closure1_slot19;
            zuuluu = tangon.set;
            michal = _closure1_slot17;
            report = entity.setTimeout;
            entity = function() {
                zuuluu = _closure1_slot30;
                michal = {};
                tangon = _closure1_slot17;
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
 451:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: fetchInventory
        entity = undefined;
        tangon = _closure1_slot31;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: _fetchInventory
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 625; continue _fun00011 }
 15:
                    zuuluu = michal.feedId;
                    tangon = zuuluu;
                    var _closure4_slot0 = zuuluu;
                    zuuluu = michal.feature;
                    foxtra = zuuluu;
                    var _closure4_slot1 = zuuluu;
                    verify = michal.force;
                    zuuluu = undefined;
                    if(!(verify === zuuluu)) { _fun00012_ip = 55; continue _fun00011 }
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
                    if(report) { _fun00012_ip = 622; continue _fun00011 }
 78:
                    yankee = _closure1_slot27;
                    offset = tangon;
                    offset = yankee.bind(zuuluu)(offset);
                    if(offset) { _fun00012_ip = 102; continue _fun00011 }
 96:
                    if(!verify) { _fun00012_ip = 619; continue _fun00011 }
 102: // try_start_0
                    offset = _closure1_slot13;
                    verify = offset.getFeed;
                    yankee = tangon;
                    backup = verify.bind(offset)(yankee);
                    kiloes = backup;
                    offset = _closure1_slot20;
                    verify = offset.add;
                    verify = verify.bind(offset)(yankee);
                    offset = _closure1_slot26;
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
                    if(sizing) { _fun00012_ip = 203; continue _fun00011 }
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
                    if(yankee) { _fun00012_ip = 367; continue _fun00011 }
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
                    backup = _closure1_slot21;
                    foxtra = backup.set;
                    yankee = 0;
                    yankee = foxtra.bind(backup)(romeon, yankee);
                    foxtra = _closure1_slot20;
                    yankee = foxtra.delete;
                    yankee = yankee.bind(foxtra)(romeon);
                    foxtra = _closure1_slot26;
                    yankee = {};
                    backup = false;
                    yankee['loading'] = backup;
                    yankee = foxtra.bind(zuuluu)(romeon, yankee);
                    yankee = _closure1_slot17;
                    if(!(romeon === yankee)) { _fun00012_ip = 362; continue _fun00011 }
 350:
                    _closure1_slot22 = offset;
                    offset = _closure1_slot29;
                    offset = offset.bind(zuuluu)();
 362: // try_end0
                    _fun00012_ip = 619; continue _fun00011;
 367:
                    return verify;
 370: // catch_target0
                    CatchBlockStart(arg_register=8);
                    yankee = _closure1_slot21;
                    offset = yankee.get;
                    verify = tangon;
                    offset = offset.bind(yankee)(verify);
                    option = offset;
                    verify = null;
                    offset = verify != offset;
                    verify = 0;
                    if(!offset) { _fun00012_ip = 406; continue _fun00011 }
 403:
                    verify = option;
 406:
                    golfie = verify;
                    option = 4;
                    if(!(!(verify < option))) { _fun00012_ip = 471; continue _fun00011 }
 416:
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
                    _fun00012_ip = 605; continue _fun00011;
 471:
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
                    golfie = _closure1_slot25;
                    yankee = golfie.bind(zuuluu)(offset);
                    option = _closure1_slot19;
                    golfie = option.set;
                    verify = tangon;
                    romeon = romeon.setTimeout;
                    yankee = foxtra + yankee;
                    oscard = function() {
                        zuuluu = _closure1_slot30;
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
                    option = _closure1_slot21;
                    golfie = option.set;
                    oscard = 1;
                    oscard = offset + oscard;
                    oscard = golfie.bind(option)(verify, oscard);
 605:
                    oscard = _closure1_slot20;
                    report = oscard.delete;
                    tangon = report.bind(oscard)(tangon);
 619:
                    return zuuluu;
 622:
                    return michal;
 625:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot31 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: handleUpdatePollingState
        michal = _closure1_slot29;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: handlePostConnectionOpen
        michal = _closure1_slot32;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: handleConnectionClosed
        zuuluu = _closure1_slot28;
        michal = _closure1_slot17;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: handleManualRefresh
        entity = argFoo;
        report = entity.feedId;
        tangon = entity.feature;
        zuuluu = _closure1_slot28;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(report);
        zuuluu = _closure1_slot30;
        michal = {};
        michal['feedId'] = report;
        michal['feature'] = tangon;
        tangon = true;
        michal['force'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: handleInboxStale
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            report = entity.refreshAfterMs;
            tangon = _closure1_slot13;
            zuuluu = tangon.getFeed;
            entity = _closure1_slot17;
            oscard = zuuluu.bind(tangon)(entity);
            golfie = null;
            tangon = golfie == oscard;
            entity = undefined;
            zuuluu = undefined;
            if(tangon) { _fun00014_ip = 50; continue _fun00013 }
 44:
            zuuluu = oscard.refresh_stale_inbox_after_ms;
 50:
            if(!(golfie != zuuluu)) { _fun00014_ip = 133; continue _fun00013 }
 54:
            zuuluu = global;
            option = zuuluu.Date;
            tangon = option.now;
            tangon = tangon.bind(option)();
            if(!(golfie == report)) { _fun00014_ip = 81; continue _fun00013 }
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
            _closure1_slot22 = zuuluu;
            michal = _closure1_slot29;
            michal = michal.bind(entity)();
 133:
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: handleSpotifyNewTrack
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tangon = entity.connectionId;
            zuuluu = entity.track;
            michal = null;
            if(!(michal != tangon)) { _fun00016_ip = 79; continue _fun00015 }
 20:
            golfie = _closure1_slot10;
            oscard = golfie.getAccount;
            report = _closure1_slot15;
            report = report.SPOTIFY;
            oscard = oscard.bind(golfie)(tangon, report);
            golfie = michal == oscard;
            michal = undefined;
            report = undefined;
            if(golfie) { _fun00016_ip = 66; continue _fun00015 }
 60:
            report = oscard.showActivity;
 66:
            if(!report) { _fun00016_ip = 79; continue _fun00015 }
 69:
            entity = _closure1_slot23;
            entity = entity.bind(michal)(tangon, zuuluu);
 79:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function() { // Original name: handleFetchGameProfileFeed
        zuuluu = _closure1_slot30;
        michal = {};
        tangon = _closure1_slot14;
        tangon = tangon.GLOBAL_FEED;
        michal['feedId'] = tangon;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 20;
        tangon = tangon[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        tangon = tangon.ContentInventoryFeature;
        tangon = tangon.GAME_PROFILE;
        michal['feature'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot38 = entity;
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
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
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
    option = golfie.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 9;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    option = 10;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot12 = option;
    option = 11;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot13 = option;
    option = 12;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.ContentInventoryFeedKey;
    var _closure1_slot14 = offset;
    option = 13;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.PlatformTypes;
    var _closure1_slot15 = option;
    option = 14;
    yankee = oscard[option];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.Millis;
    yankee = yankee.MINUTE;
    yankee = romeon * yankee;
    var _closure1_slot16 = yankee;
    offset = offset.GLOBAL_FEED;
    var _closure1_slot17 = offset;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    option = option.Millis;
    offset = option.MINUTE;
    option = 15;
    offset = option * offset;
    var _closure1_slot18 = offset;
    offset = verify.Map;
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    sizing = yankee;
    offset = new sizing[offset](kiloes);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot19 = offset;
    offset = verify.Set;
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    sizing = yankee;
    offset = new sizing[offset](kiloes);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot20 = offset;
    verify = verify.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    sizing = offset;
    verify = new sizing[verify](kiloes);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot21 = verify;
    verify = null;
    var _closure1_slot22 = verify;
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
    var _closure1_slot23 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: ContentInventoryManager
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                golfie = _closure1_slot4;
                michal = _closure2_slot0;
                tangon = undefined;
                golfie = golfie.bind(tangon)(report, michal);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot24;
                entity = entity.bind(tangon)();
                if(entity) { _fun00018_ip = 84; continue _fun00017 }
 71:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00018_ip = 118; continue _fun00017;
 84:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 118:
                entity = michal.bind(tangon)(report, entity);
                michal = {};
                tangon = _closure1_slot33;
                michal['POST_CONNECTION_OPEN'] = tangon;
                tangon = _closure1_slot34;
                michal['CONNECTION_CLOSED'] = tangon;
                tangon = _closure1_slot32;
                michal['WINDOW_FOCUS'] = tangon;
                michal['IDLE'] = tangon;
                michal['CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN'] = tangon;
                tangon = _closure1_slot35;
                michal['CONTENT_INVENTORY_MANUAL_REFRESH'] = tangon;
                tangon = _closure1_slot36;
                michal['CONTENT_INVENTORY_INBOX_STALE'] = tangon;
                tangon = _closure1_slot37;
                michal['SPOTIFY_NEW_TRACK'] = tangon;
                zuuluu = _closure1_slot38;
                michal['GAME_PROFILE_OPEN'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
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
    tangon = 22;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/content_inventory/ContentInventoryManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();