// app/modules/notification_center/NotificationCenterItemsStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
            entity = _closure1_slot16;
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
    var _closure1_slot15 = entity;
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
            _closure1_slot16 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: _validate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = michal.id;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00006_ip = 26; continue _fun00005 }
 17:
            michal = michal.type;
            entity = zuuluu != michal;
 26:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: handleReset
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = arguments[0];
            entity = undefined;
            if(!(michal === entity)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            michal = {};
 11:
            tangon = michal.keepLocalItems;
            if(!(tangon === entity)) { _fun00008_ip = 23; continue _fun00007 }
 21:
            tangon = false;
 23:
            zuuluu = {'loading': false, 'initialized': false, 'errored': false, 'isDataStale': false};
            michal = false;
            report = new Array(0);
            zuuluu['notifCenterItems'] = report;
            report = new Array(0);
            zuuluu['staleNotifCenterItems'] = report;
            report = global;
            report = report.Set;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            golfie = oscard;
            report = new golfie[report](oscard);
            report = report instanceof Object ? report : oscard;
            zuuluu['notifCenterIds'] = report;
            if(tangon) { _fun00008_ip = 95; continue _fun00007 }
 89:
            tangon = new Array(0);
            _fun00008_ip = 108; continue _fun00007;
 95:
            report = _closure1_slot14;
            tangon = report.notifCenterLocalItems;
 108:
            zuuluu['notifCenterLocalItems'] = tangon;
            tangon = true;
            zuuluu['paginationHasMore'] = tangon;
            zuuluu['paginationCursor'] = entity;
            zuuluu['notifCenterActive'] = michal;
            zuuluu['notifCenterTabFocused'] = michal;
            _closure1_slot14 = zuuluu;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: handleResetRemoteState
        zuuluu = _closure1_slot18;
        michal = {};
        entity = true;
        michal['keepLocalItems'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: toNotificationCenterItem
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            report = michal.item_enum;
            oscard = _closure1_slot0;
            entity = _closure1_slot2;
            option = 11;
            entity = entity[option];
            zuuluu = undefined;
            entity = oscard.bind(zuuluu)(entity);
            entity = entity.ItemEnum;
            entity = entity.FIRST_MESSAGE;
            entity = report === entity;
            if(!entity) { _fun00010_ip = 91; continue _fun00009 }
 53:
            oscard = michal.type;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            report = report[option];
            report = golfie.bind(zuuluu)(report);
            report = report.NotificationCenterItems;
            report = report.LIFECYCLE_ITEM;
            entity = oscard === report;
 91:
            if(!entity) { _fun00010_ip = 106; continue _fun00009 }
 94:
            entity = 'https://discord.com/feature/composeMessage';
            michal['deeplink'] = entity;
 106:
            entity = {};
            offset = entity;
            verify = michal;
            report = copyDataProperties(offset, verify);
            oscard = 'notification-center-item';
            report = 'kind';
            entity[report] = oscard;
            oscard = michal.message;
            report = null;
            golfie = report != oscard;
            oscard = undefined;
            if(!golfie) { _fun00010_ip = 185; continue _fun00009 }
 149:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 12;
            tangon = option[tangon];
            option = golfie.bind(zuuluu)(tangon);
            golfie = option.createMessageRecord;
            tangon = michal.message;
            oscard = golfie.bind(option)(tangon);
 185:
            tangon = 'message';
            entity[tangon] = oscard;
            tangon = michal.application;
            tangon = report != tangon;
            zuuluu = undefined;
            if(!tangon) { _fun00010_ip = 218; continue _fun00009 }
 208:
            michal = michal.application;
            zuuluu = michal.id;
 218:
            michal = 'applicationId';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    offset = function(argFoo) { // Original name: handleAddItem
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = 'NOTIFICATION_CENTER_ITEM_CREATE';
            if(!(michal !== zuuluu)) { _fun00012_ip = 23; continue _fun00011 }
 16:
            report = entity.item;
            _fun00012_ip = 42; continue _fun00011;
 23:
            zuuluu = _closure1_slot20;
            michal = entity.item;
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
 42:
            entity = _closure1_slot14;
            entity = entity.initialized;
            if(!entity) { _fun00012_ip = 196; continue _fun00011 }
 61:
            zuuluu = _closure1_slot17;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(report);
            if(!zuuluu) { _fun00012_ip = 196; continue _fun00011 }
 75:
            zuuluu = _closure1_slot14;
            oscard = zuuluu.notifCenterIds;
            tangon = oscard.has;
            zuuluu = report.id;
            zuuluu = tangon.bind(oscard)(zuuluu);
            if(zuuluu) { _fun00012_ip = 196; continue _fun00011 }
 103:
            zuuluu = _closure1_slot14;
            oscard = zuuluu.notifCenterIds;
            tangon = oscard.add;
            zuuluu = report.id;
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = _closure1_slot14;
            zuuluu = new Array(1);
            zuuluu[0] = report;
            report = _closure1_slot14;
            option = report.notifCenterItems;
            golfie = 1;
            verify = zuuluu;
            report = arraySpread(verify, option, golfie);
            tangon['notifCenterItems'] = zuuluu;
            michal = _closure1_slot14;
            tangon = michal.notifCenterItems;
            zuuluu = tangon.sort;
            michal = function(argFoo, argBar) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.compare;
                entity = argBar;
                michal = entity.id;
                entity = argFoo;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
 196:
            entity = false;
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: updateItemsAck
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        michal = _closure1_slot14;
        report = michal.notifCenterItems;
        tangon = report.map;
        zuuluu = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                report = _closure2_slot0;
                michal = report.includes;
                entity = tangon.id;
                michal = michal.bind(report)(entity);
                entity = tangon;
                if(!michal) { _fun00014_ip = 59; continue _fun00013 }
 31:
                michal = {};
                golfie = michal;
                oscard = tangon;
                tangon = copyDataProperties(golfie, oscard);
                tangon = _closure2_slot1;
                zuuluu = 'acked';
                michal[zuuluu] = tangon;
                entity = michal;
 59:
                return entity;
            }
        };
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.filter;
        entity = _closure1_slot17;
        entity = zuuluu.bind(tangon)(entity);
        michal['notifCenterItems'] = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: isItem
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.type;
            entity = argBar;
            entity = zuuluu === entity;
            if(!entity) { _fun00016_ip = 47; continue _fun00015 }
 18:
            michal = michal.other_user;
            zuuluu = null;
            tangon = zuuluu == michal;
            zuuluu = undefined;
            if(tangon) { _fun00016_ip = 40; continue _fun00015 }
 35:
            zuuluu = michal.id;
 40:
            michal = argBaz;
            entity = zuuluu === michal;
 47:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: isGameRelationshipItem
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            report = _closure1_slot22;
            tangon = undefined;
            zuuluu = argBar;
            entity = argBaz;
            entity = report.bind(tangon)(michal, zuuluu, entity);
            if(!entity) { _fun00018_ip = 40; continue _fun00017 }
 28:
            zuuluu = michal.applicationId;
            michal = argCor;
            entity = zuuluu === michal;
 40:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    verify = function(argFoo) { // Original name: handleRelationshipAddOrUpdate
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            oscard = michal.relationship;
            var _closure2_slot0 = oscard;
            michal = oscard.id;
            var _closure2_slot1 = michal;
            report = oscard.type;
            zuuluu = oscard.isSpamRequest;
            tangon = oscard.userIgnored;
            golfie = oscard.user;
            var _closure2_slot2 = golfie;
            backup = oscard.since;
            option = oscard.originApplicationId;
            verify = _closure1_slot13;
            verify = verify.PENDING_INCOMING;
            if(!(report === verify)) { _fun00020_ip = 311; continue _fun00019 }
 82:
            if(zuuluu) { _fun00020_ip = 311; continue _fun00019 }
 88:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 14;
            zuuluu = offset[zuuluu];
            kiloes = undefined;
            offset = verify.bind(kiloes)(zuuluu);
            verify = offset.isEligibleForStealthRemediation;
            zuuluu = {};
            yankee = 'notification-center';
            zuuluu['location'] = yankee;
            zuuluu = verify.bind(offset)(zuuluu);
            if(!zuuluu) { _fun00020_ip = 142; continue _fun00019 }
 136:
            if(tangon) { _fun00020_ip = 311; continue _fun00019 }
 142:
            zuuluu = null;
            if(!(zuuluu != backup)) { _fun00020_ip = 309; continue _fun00019 }
 151:
            if(!(zuuluu != golfie)) { _fun00020_ip = 311; continue _fun00019 }
 158:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 13;
            verify = yankee[verify];
            yankee = offset.bind(kiloes)(verify);
            offset = yankee.getIsFriendTiersUIEnabled;
            verify = {};
            romeon = 'NotificationCenterItemsStore';
            verify['location'] = romeon;
            verify = offset.bind(yankee)(verify);
            foxtra = undefined;
            if(!verify) { _fun00020_ip = 209; continue _fun00019 }
 206:
            foxtra = option;
 209:
            verify = _closure1_slot12;
            option = verify.getUser;
            golfie = golfie.id;
            romeon = option.bind(verify)(golfie);
            if(!(zuuluu != romeon)) { _fun00020_ip = 311; continue _fun00019 }
 233:
            option = _closure1_slot14;
            result = option.notifCenterLocalItems;
            golfie = new Array(1);
            output = 0;
            echoed = golfie;
            offset = arraySpread(echoed, result, output);
            yankee = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 15;
            verify = sizing[verify];
            yankee = yankee.bind(kiloes)(verify);
            verify = yankee.incomingFriendRequestLocalItem;
            verify = verify.bind(yankee)(romeon, backup, foxtra);
            golfie[offset] = verify;
            verify = 1;
            verify = offset + verify;
            option['notifCenterLocalItems'] = golfie;
            _fun00020_ip = 311; continue _fun00019;
 309:
            return zuuluu;
 311:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.FRIEND;
            zuuluu = report !== zuuluu;
            if(zuuluu) { _fun00020_ip = 339; continue _fun00019 }
 328:
            golfie = oscard.user;
            oscard = null;
            zuuluu = oscard == golfie;
 339:
            if(zuuluu) { _fun00020_ip = 345; continue _fun00019 }
 342:
            zuuluu = tangon;
 345:
            if(zuuluu) { _fun00020_ip = 379; continue _fun00019 }
 348:
            oscard = _closure1_slot14;
            option = oscard.notifCenterLocalItems;
            golfie = option.map;
            zuuluu = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    tangon = argFoo;
                    option = _closure1_slot22;
                    michal = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscard = 11;
                    entity = entity[oscard];
                    report = undefined;
                    entity = michal.bind(report)(entity);
                    entity = entity.NotificationCenterLocalItems;
                    michal = entity.INCOMING_FRIEND_REQUESTS;
                    entity = _closure2_slot0;
                    entity = entity.user;
                    entity = entity.id;
                    michal = option.bind(report)(tangon, michal, entity);
                    entity = tangon;
                    if(!michal) { _fun00022_ip = 205; continue _fun00021 }
 77:
                    michal = {};
                    foxtra = michal;
                    romeon = tangon;
                    option = copyDataProperties(foxtra, romeon);
                    verify = true;
                    option = 'acked';
                    michal[option] = verify;
                    verify = false;
                    option = 'forceUnacked';
                    michal[option] = verify;
                    golfie = _closure2_slot2;
                    offset = golfie.id;
                    verify = tangon.id;
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    option = tangon.concat;
                    golfie = 'incoming_friend_requests_accepted_';
                    tangon = '_';
                    golfie = option.bind(golfie)(offset, tangon, verify);
                    tangon = 'local_id';
                    michal[tangon] = golfie;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[oscard];
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = zuuluu.NotificationCenterLocalItems;
                    tangon = zuuluu.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                    zuuluu = 'type';
                    michal[zuuluu] = tangon;
                    entity = michal;
 205:
                    return entity;
                }
            };
            zuuluu = golfie.bind(option)(zuuluu);
            oscard['notifCenterLocalItems'] = zuuluu;
 379:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.BLOCKED;
            zuuluu = report === zuuluu;
            if(zuuluu) { _fun00020_ip = 399; continue _fun00019 }
 396:
            zuuluu = tangon;
 399:
            if(!zuuluu) { _fun00020_ip = 433; continue _fun00019 }
 402:
            michal = _closure1_slot14;
            tangon = michal.notifCenterLocalItems;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    oscard = argFoo;
                    golfie = _closure1_slot22;
                    michal = _closure1_slot0;
                    entity = _closure1_slot2;
                    option = 11;
                    entity = entity[option];
                    report = undefined;
                    entity = michal.bind(report)(entity);
                    entity = entity.NotificationCenterLocalItems;
                    tangon = entity.INCOMING_FRIEND_REQUESTS;
                    entity = _closure2_slot1;
                    entity = golfie.bind(report)(oscard, tangon, entity);
                    if(entity) { _fun00024_ip = 105; continue _fun00023 }
 61:
                    verify = _closure1_slot22;
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    tangon = golfie.bind(report)(tangon);
                    tangon = tangon.NotificationCenterLocalItems;
                    golfie = tangon.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                    tangon = _closure2_slot1;
                    entity = verify.bind(report)(oscard, golfie, tangon);
 105:
                    if(entity) { _fun00024_ip = 152; continue _fun00023 }
 108:
                    verify = _closure1_slot22;
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    tangon = golfie.bind(report)(tangon);
                    tangon = tangon.NotificationCenterLocalItems;
                    golfie = tangon.INCOMING_GAME_FRIEND_REQUESTS;
                    tangon = _closure2_slot1;
                    entity = verify.bind(report)(oscard, golfie, tangon);
 152:
                    if(entity) { _fun00024_ip = 199; continue _fun00023 }
 155:
                    tangon = _closure1_slot22;
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[option];
                    zuuluu = golfie.bind(report)(zuuluu);
                    zuuluu = zuuluu.NotificationCenterLocalItems;
                    zuuluu = zuuluu.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                    michal = _closure2_slot1;
                    entity = tangon.bind(report)(oscard, zuuluu, michal);
 199:
                    entity = !entity;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['notifCenterLocalItems'] = entity;
 433:
            entity = undefined;
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: updateGuildEvent
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            tangon = _closure1_slot9;
            entity = undefined;
            tangon = tangon.bind(entity)(report);
            if(!tangon) { _fun00026_ip = 57; continue _fun00025 }
 26:
            zuuluu = _closure1_slot14;
            report = zuuluu.notifCenterItems;
            tangon = report.map;
            michal = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.type;
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    entity = report.bind(entity)(michal);
                    entity = entity.NotificationCenterItems;
                    michal = entity.GUILD_SCHEDULED_EVENT_STARTED;
                    entity = zuuluu;
                    if(!(tangon === michal)) { _fun00028_ip = 105; continue _fun00027 }
 52:
                    tangon = zuuluu.guild_scheduled_event_id;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = zuuluu;
                    if(!(tangon === michal)) { _fun00028_ip = 105; continue _fun00027 }
 77:
                    michal = {};
                    golfie = michal;
                    oscard = zuuluu;
                    zuuluu = copyDataProperties(golfie, oscard);
                    tangon = true;
                    zuuluu = 'disable_action';
                    michal[zuuluu] = tangon;
                    entity = michal;
 105:
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
            zuuluu['notifCenterItems'] = michal;
 57:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    romeon = global;
    foxtra = romeon.Object;
    option = foxtra.defineProperty;
    michal = {};
    yankee = true;
    michal['value'] = yankee;
    entity = '__esModule';
    entity = option.bind(foxtra)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.isGuildEventEnded;
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot12 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.RelationshipTypes;
    var _closure1_slot13 = michal;
    michal = {'loading': false, 'initialized': false, 'errored': false, 'isDataStale': false};
    option = false;
    foxtra = new Array(0);
    michal['notifCenterItems'] = foxtra;
    foxtra = new Array(0);
    michal['staleNotifCenterItems'] = foxtra;
    romeon = romeon.Set;
    foxtra = romeon.prototype;
    foxtra = Object.create(foxtra, {constructor: {value: romeon}});
    output = foxtra;
    romeon = new output[romeon](sizing);
    romeon = romeon instanceof Object ? romeon : foxtra;
    michal['notifCenterIds'] = romeon;
    romeon = new Array(0);
    michal['notifCenterLocalItems'] = romeon;
    michal['paginationHasMore'] = yankee;
    michal['paginationCursor'] = entity;
    michal['notifCenterActive'] = option;
    michal['notifCenterTabFocused'] = option;
    var _closure1_slot14 = michal;
    michal = 17;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: NotificationCenterItemsStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot15;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = argFoo;
                golfie = this;
                oscard = golfie.waitFor;
                report = _closure1_slot12;
                tangon = _closure1_slot11;
                zuuluu = _closure1_slot8;
                zuuluu = oscard.bind(golfie)(report, tangon, zuuluu);
                zuuluu = null;
                if(!(zuuluu != entity)) { _fun00030_ip = 133; continue _fun00029 }
 40:
                tangon = entity.notifCenterItems;
                zuuluu = tangon.map;
                entity = function(argFoo) {
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        michal = argFoo;
                        entity = {};
                        golfie = entity;
                        oscard = michal;
                        zuuluu = copyDataProperties(golfie, oscard);
                        tangon = michal.message;
                        zuuluu = null;
                        tangon = zuuluu != tangon;
                        zuuluu = undefined;
                        if(!tangon) { _fun00032_ip = 63; continue _fun00031 }
 31:
                        report = _closure1_slot10;
                        golfie = michal.message;
                        tangon = report.prototype;
                        tangon = Object.create(tangon, {constructor: {value: report}});
                        option = tangon;
                        michal = new option[report](golfie, oscard);
                        zuuluu = michal instanceof Object ? michal : tangon;
 63:
                        michal = 'message';
                        entity[michal] = zuuluu;
                        return entity;
                    }
                };
                tangon = zuuluu.bind(tangon)(entity);
                zuuluu = tangon.length;
                entity = 0;
                if(!(zuuluu > entity)) { _fun00030_ip = 133; continue _fun00029 }
 74:
                entity = {};
                verify = _closure1_slot14;
                offset = entity;
                zuuluu = copyDataProperties(offset, verify);
                report = true;
                zuuluu = 'initialized';
                entity[zuuluu] = report;
                zuuluu = 'isDataStale';
                entity[zuuluu] = report;
                report = new Array(0);
                zuuluu = 'notifCenterItems';
                entity[zuuluu] = report;
                zuuluu = 'staleNotifCenterItems';
                entity[zuuluu] = tangon;
                _closure1_slot14 = entity;
 133:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(11);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            tangon = function(argFoo) { // Original name: pack
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    michal = argFoo;
                    entity = {};
                    oscard = entity;
                    report = michal;
                    zuuluu = copyDataProperties(oscard, report);
                    tangon = michal.message;
                    zuuluu = null;
                    tangon = zuuluu != tangon;
                    zuuluu = undefined;
                    if(!tangon) { _fun00034_ip = 46; continue _fun00033 }
 31:
                    tangon = michal.message;
                    michal = tangon.toJS;
                    zuuluu = michal.bind(tangon)();
 46:
                    michal = 'message';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            entity = {};
            oscard = _closure1_slot14;
            golfie = entity;
            zuuluu = copyDataProperties(golfie, oscard);
            zuuluu = _closure1_slot14;
            report = zuuluu.notifCenterItems;
            zuuluu = report.map;
            report = zuuluu.bind(report)(tangon);
            zuuluu = 'notifCenterItems';
            entity[zuuluu] = report;
            michal = _closure1_slot14;
            zuuluu = michal.staleNotifCenterItems;
            michal = zuuluu.map;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = 'staleNotifCenterItems';
            entity[michal] = zuuluu;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'loading';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.loading;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'initialized';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.initialized;
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'items';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                entity = _closure1_slot14;
                entity = entity.isDataStale;
                michal = _closure1_slot14;
                if(entity) { _fun00036_ip = 28; continue _fun00035 }
 20:
                entity = michal.notifCenterItems;
                _fun00036_ip = 34; continue _fun00035;
 28:
                entity = michal.staleNotifCenterItems;
 34:
                return entity;
            }
        };
        report['get'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'hasMore';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.paginationHasMore;
            return entity;
        };
        report['get'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'cursor';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.paginationCursor;
            return entity;
        };
        report['get'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'errored';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.errored;
            return entity;
        };
        report['get'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'active';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.notifCenterActive;
            return entity;
        };
        report['get'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'localItems';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.notifCenterLocalItems;
            return entity;
        };
        report['get'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'tabFocused';
        report['key'] = golfie;
        oscard = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.notifCenterTabFocused;
            return entity;
        };
        report['get'] = oscard;
        entity[10] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'NotificationCenterItemsStore';
    option['displayName'] = michal;
    michal = 'NotificationCenterItemsStore_v2';
    option['persistKey'] = michal;
    michal = 18;
    michal = oscard[michal];
    sizing = golfie.bind(entity)(michal);
    michal = {};
    yankee = function(argFoo) { // Original name: handleConnectionOpen
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            report = argFoo;
            zuuluu = new Array(0);
            var _closure2_slot0 = zuuluu;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 13;
            oscard = verify[entity];
            entity = undefined;
            offset = option.bind(entity)(oscard);
            golfie = offset.getIsFriendTiersUIEnabled;
            oscard = {};
            yankee = 'NotificationCenterItemsStore';
            oscard['location'] = yankee;
            oscard = golfie.bind(offset)(oscard);
            var _closure2_slot1 = oscard;
            golfie = 14;
            golfie = verify[golfie];
            verify = option.bind(entity)(golfie);
            option = verify.isEligibleForStealthRemediation;
            golfie = {};
            offset = 'notification-center';
            golfie['location'] = offset;
            golfie = option.bind(verify)(golfie);
            var _closure2_slot2 = golfie;
            golfie = global;
            golfie = golfie.Set;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            foxtra = option;
            golfie = new foxtra[golfie](romeon);
            golfie = golfie instanceof Object ? golfie : option;
            var _closure2_slot3 = golfie;
            verify = report.relationships;
            option = verify.forEach;
            golfie = function(argFoo) {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = argFoo;
                    offset = entity.type;
                    michal = entity.user;
                    verify = entity.since;
                    golfie = entity.is_spam_request;
                    zuuluu = entity.user_ignored;
                    report = entity.origin_application_id;
                    entity = null;
                    if(!(entity != michal)) { _fun00040_ip = 199; continue _fun00039 }
 46:
                    oscard = _closure2_slot2;
                    if(!oscard) { _fun00040_ip = 59; continue _fun00039 }
 56:
                    oscard = zuuluu;
 59:
                    if(!oscard) { _fun00040_ip = 81; continue _fun00039 }
 62:
                    yankee = _closure2_slot3;
                    option = yankee.add;
                    zuuluu = michal.id;
                    zuuluu = option.bind(yankee)(zuuluu);
 81:
                    option = _closure1_slot13;
                    option = option.PENDING_INCOMING;
                    if(!(offset === option)) { _fun00040_ip = 197; continue _fun00039 }
 98:
                    if(golfie) { _fun00040_ip = 197; continue _fun00039 }
 101:
                    if(oscard) { _fun00040_ip = 197; continue _fun00039 }
 104:
                    if(!(entity != verify)) { _fun00040_ip = 197; continue _fun00039 }
 108:
                    golfie = _closure1_slot12;
                    oscard = golfie.getUser;
                    michal = michal.id;
                    option = oscard.bind(golfie)(michal);
                    if(!(entity != option)) { _fun00040_ip = 195; continue _fun00039 }
 132:
                    oscard = _closure2_slot1;
                    michal = undefined;
                    golfie = undefined;
                    if(!oscard) { _fun00040_ip = 146; continue _fun00039 }
 143:
                    golfie = report;
 146:
                    report = _closure2_slot0;
                    tangon = report.push;
                    oscard = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 15;
                    zuuluu = offset[zuuluu];
                    oscard = oscard.bind(michal)(zuuluu);
                    zuuluu = oscard.incomingFriendRequestLocalItem;
                    zuuluu = zuuluu.bind(oscard)(option, verify, golfie);
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 195:
                    return entity;
 197:
                    return entity;
 199:
                    return entity;
                }
            };
            golfie = option.bind(verify)(golfie);
            if(!oscard) { _fun00038_ip = 181; continue _fun00037 }
 160:
            option = report.gameRelationships;
            golfie = option.forEach;
            oscard = function(argFoo) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.type;
                    report = entity.id;
                    golfie = entity.application_id;
                    oscard = entity.since;
                    michal = _closure1_slot13;
                    michal = michal.PENDING_INCOMING;
                    if(!(zuuluu === michal)) { _fun00042_ip = 132; continue _fun00041 }
 42:
                    tangon = _closure2_slot3;
                    zuuluu = tangon.has;
                    zuuluu = zuuluu.bind(tangon)(report);
                    if(zuuluu) { _fun00042_ip = 132; continue _fun00041 }
 62:
                    tangon = _closure1_slot12;
                    zuuluu = tangon.getUser;
                    report = zuuluu.bind(tangon)(report);
                    zuuluu = null;
                    if(!(zuuluu != report)) { _fun00042_ip = 132; continue _fun00041 }
 83:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.push;
                    option = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 15;
                    tangon = tangon[entity];
                    entity = undefined;
                    tangon = option.bind(entity)(tangon);
                    entity = tangon.incomingGameFriendRequestLocalItem;
                    entity = entity.bind(tangon)(report, oscard, golfie);
                    entity = michal.bind(zuuluu)(entity);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = golfie.bind(option)(oscard);
 181:
            oscard = report.guilds;
            report = oscard.forEach;
            tangon = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.guild_scheduled_events;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    zuuluu = _closure1_slot24;
                    entity = undefined;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            michal = _closure1_slot14;
            michal['notifCenterLocalItems'] = zuuluu;
            return entity;
        }
    };
    michal['CONNECTION_OPEN'] = yankee;
    yankee = function() { // Original name: LOGOUT
        michal = _closure1_slot18;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['LOGOUT'] = yankee;
    yankee = function(argFoo) { // Original name: handleAck
        entity = argFoo;
        tangon = entity.ids;
        zuuluu = _closure1_slot21;
        entity = undefined;
        michal = true;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    michal['NOTIFICATION_CENTER_ITEMS_ACK'] = yankee;
    yankee = function(argFoo) { // Original name: handleAckFailure
        entity = argFoo;
        tangon = entity.ids;
        zuuluu = _closure1_slot21;
        entity = undefined;
        michal = false;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    michal['NOTIFICATION_CENTER_ITEMS_ACK_FAILURE'] = yankee;
    yankee = function(argFoo) { // Original name: handleGuildScheduledEventUpdate
        entity = argFoo;
        zuuluu = entity.guildScheduledEvent;
        michal = _closure1_slot24;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['GUILD_SCHEDULED_EVENT_UPDATE'] = yankee;
    michal['NOTIFICATION_CENTER_ITEM_CREATE'] = offset;
    yankee = function(argFoo) { // Original name: handleDelete
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            michal = argFoo;
            report = michal.id;
            var _closure2_slot0 = report;
            zuuluu = _closure1_slot14;
            tangon = zuuluu.notifCenterIds;
            zuuluu = tangon.has;
            zuuluu = zuuluu.bind(tangon)(report);
            if(zuuluu) { _fun00044_ip = 44; continue _fun00043 }
 40:
            zuuluu = false;
            return zuuluu;
 44:
            zuuluu = _closure1_slot14;
            tangon = zuuluu.notifCenterIds;
            zuuluu = tangon.delete;
            zuuluu = zuuluu.bind(tangon)(report);
            michal = _closure1_slot14;
            tangon = michal.notifCenterItems;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal !== entity;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['notifCenterItems'] = entity;
            entity = undefined;
            return entity;
        }
    };
    michal['NOTIFICATION_CENTER_ITEM_DELETE'] = yankee;
    michal['NOTIFICATION_CENTER_ITEM_DELETE_FAILURE'] = offset;
    offset = function() { // Original name: handleLoad
        michal = _closure1_slot14;
        entity = true;
        michal['loading'] = entity;
        entity = undefined;
        return entity;
    };
    michal['LOAD_NOTIFICATION_CENTER_ITEMS'] = offset;
    offset = function() { // Original name: handleLoadFailure
        zuuluu = _closure1_slot14;
        michal = false;
        zuuluu['loading'] = michal;
        zuuluu = _closure1_slot14;
        michal = true;
        zuuluu['initialized'] = michal;
        entity = _closure1_slot14;
        entity['errored'] = michal;
        entity = undefined;
        return entity;
    };
    michal['LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE'] = offset;
    offset = function(argFoo) { // Original name: handleLoadSuccess
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.items;
            option = michal.hasMore;
            oscard = michal.cursor;
            tangon = _closure1_slot14;
            tangon = tangon.loading;
            if(!tangon) { _fun00046_ip = 278; continue _fun00045 }
 42:
            tangon = _closure1_slot14;
            report = false;
            tangon['loading'] = report;
            golfie = _closure1_slot14;
            tangon = true;
            golfie['initialized'] = tangon;
            tangon = _closure1_slot14;
            tangon['errored'] = report;
            tangon = _closure1_slot14;
            tangon['isDataStale'] = report;
            tangon = null;
            tangon = tangon != oscard;
            if(!tangon) { _fun00046_ip = 115; continue _fun00045 }
 95:
            report = _closure1_slot14;
            golfie = report.notifCenterIds;
            report = golfie.has;
            tangon = report.bind(golfie)(oscard);
 115:
            if(tangon) { _fun00046_ip = 172; continue _fun00045 }
 118:
            report = _closure1_slot14;
            tangon = zuuluu.length;
            golfie = 0;
            tangon = tangon > golfie;
            if(!tangon) { _fun00046_ip = 139; continue _fun00045 }
 136:
            tangon = option;
 139:
            report['paginationHasMore'] = tangon;
            report = _closure1_slot14;
            tangon = zuuluu.length;
            golfie = tangon > golfie;
            tangon = undefined;
            if(!golfie) { _fun00046_ip = 166; continue _fun00045 }
 163:
            tangon = oscard;
 166:
            report['paginationCursor'] = tangon;
 172:
            report = _closure1_slot14;
            yankee = report.notifCenterItems;
            tangon = new Array(0);
            offset = 0;
            romeon = tangon;
            offset = arraySpread(romeon, yankee, offset);
            option = zuuluu.map;
            oscard = _closure1_slot20;
            verify = option.bind(zuuluu)(oscard);
            option = verify.filter;
            oscard = function(argFoo) {
                entity = _closure1_slot14;
                zuuluu = entity.notifCenterIds;
                michal = zuuluu.has;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            yankee = option.bind(verify)(oscard);
            romeon = tangon;
            oscard = arraySpread(romeon, yankee, offset);
            report['notifCenterItems'] = tangon;
            michal = _closure1_slot14;
            report = michal.notifCenterItems;
            tangon = report.sort;
            michal = function(argFoo, argBar) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.compare;
                entity = argBar;
                michal = entity.id;
                entity = argFoo;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = tangon.bind(report)(michal);
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                entity = _closure1_slot14;
                zuuluu = entity.notifCenterIds;
                michal = zuuluu.add;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 278:
            entity = undefined;
            return entity;
        }
    };
    michal['LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS'] = offset;
    offset = function() { // Original name: RESET_NOTIFICATION_CENTER
        michal = _closure1_slot19;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['RESET_NOTIFICATION_CENTER'] = offset;
    offset = function(argFoo) { // Original name: handleSetActive
        entity = argFoo;
        michal = entity.active;
        entity = _closure1_slot14;
        entity['notifCenterActive'] = michal;
        entity = undefined;
        return entity;
    };
    michal['NOTIFICATION_CENTER_SET_ACTIVE'] = offset;
    offset = function(argFoo) { // Original name: handleTabFocused
        entity = argFoo;
        michal = entity.focused;
        entity = _closure1_slot14;
        entity['notifCenterTabFocused'] = michal;
        entity = undefined;
        return entity;
    };
    michal['NOTIFICATION_CENTER_TAB_FOCUSED'] = offset;
    michal['RELATIONSHIP_ADD'] = verify;
    michal['RELATIONSHIP_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleRelationshipRemove
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = _closure1_slot14;
        tangon = michal.notifCenterLocalItems;
        zuuluu = tangon.filter;
        entity = function(argFoo) {
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                oscard = argFoo;
                golfie = _closure1_slot22;
                michal = _closure1_slot0;
                entity = _closure1_slot2;
                option = 11;
                entity = entity[option];
                report = undefined;
                entity = michal.bind(report)(entity);
                entity = entity.NotificationCenterLocalItems;
                tangon = entity.INCOMING_FRIEND_REQUESTS;
                entity = _closure2_slot0;
                entity = entity.relationship;
                entity = entity.id;
                tangon = golfie.bind(report)(oscard, tangon, entity);
                entity = !tangon;
                if(tangon) { _fun00048_ip = 133; continue _fun00047 }
 75:
                tangon = _closure1_slot22;
                golfie = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[option];
                zuuluu = golfie.bind(report)(zuuluu);
                zuuluu = zuuluu.NotificationCenterLocalItems;
                zuuluu = zuuluu.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                michal = _closure2_slot0;
                michal = michal.relationship;
                michal = michal.id;
                michal = tangon.bind(report)(oscard, zuuluu, michal);
                entity = !michal;
 133:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity);
        michal['notifCenterLocalItems'] = entity;
        entity = undefined;
        return entity;
    };
    michal['RELATIONSHIP_REMOVE'] = verify;
    verify = function(argFoo) { // Original name: handleGameRelationshipAddOrUpdate
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.gameRelationship;
            entity = undefined;
            var _closure2_slot0 = entity;
            var _closure2_slot1 = entity;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 13;
            report = golfie[report];
            golfie = oscard.bind(entity)(report);
            oscard = golfie.getIsFriendTiersUIEnabled;
            report = {};
            option = 'NotificationCenterItemsStore';
            report['location'] = option;
            report = oscard.bind(golfie)(report);
            if(report) { _fun00050_ip = 74; continue _fun00049 }
 70:
            report = false;
            return report;
 74:
            report = zuuluu.id;
            _closure2_slot0 = report;
            oscard = zuuluu.type;
            verify = zuuluu.since;
            option = zuuluu.applicationId;
            _closure2_slot1 = option;
            golfie = _closure1_slot11;
            zuuluu = golfie.isBlockedOrIgnored;
            zuuluu = zuuluu.bind(golfie)(report);
            if(zuuluu) { _fun00050_ip = 296; continue _fun00049 }
 124:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.PENDING_INCOMING;
            if(!(oscard !== zuuluu)) { _fun00050_ip = 189; continue _fun00049 }
 138:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.FRIEND;
            if(!(oscard === zuuluu)) { _fun00050_ip = 185; continue _fun00049 }
 152:
            zuuluu = _closure1_slot14;
            golfie = zuuluu.notifCenterLocalItems;
            oscard = golfie.map;
            michal = function(argFoo) {
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    tangon = argFoo;
                    verify = _closure1_slot23;
                    michal = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscard = 11;
                    entity = entity[oscard];
                    report = undefined;
                    entity = michal.bind(report)(entity);
                    entity = entity.NotificationCenterLocalItems;
                    foxtra = entity.INCOMING_GAME_FRIEND_REQUESTS;
                    romeon = _closure2_slot0;
                    yankee = _closure2_slot1;
                    kiloes = undefined;
                    backup = tangon;
                    michal = kiloes[verify](backup, foxtra, romeon, yankee, offset);
                    entity = tangon;
                    if(!michal) { _fun00052_ip = 196; continue _fun00051 }
 73:
                    michal = {};
                    backup = michal;
                    foxtra = tangon;
                    option = copyDataProperties(backup, foxtra);
                    verify = true;
                    option = 'acked';
                    michal[option] = verify;
                    verify = false;
                    option = 'forceUnacked';
                    michal[option] = verify;
                    offset = _closure2_slot0;
                    verify = tangon.id;
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    option = tangon.concat;
                    golfie = 'incoming_game_friend_requests_accepted_';
                    tangon = '_';
                    golfie = option.bind(golfie)(offset, tangon, verify);
                    tangon = 'local_id';
                    michal[tangon] = golfie;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[oscard];
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = zuuluu.NotificationCenterLocalItems;
                    tangon = zuuluu.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                    zuuluu = 'type';
                    michal[zuuluu] = tangon;
                    entity = michal;
 196:
                    return entity;
                }
            };
            michal = oscard.bind(golfie)(michal);
            zuuluu['notifCenterLocalItems'] = michal;
            _fun00050_ip = 294; continue _fun00049;
 185:
            michal = false;
            return michal;
 189:
            zuuluu = _closure1_slot12;
            michal = zuuluu.getUser;
            golfie = michal.bind(zuuluu)(report);
            zuuluu = null;
            michal = zuuluu != verify;
            if(!michal) { _fun00050_ip = 217; continue _fun00049 }
 213:
            michal = zuuluu != golfie;
 217:
            if(!michal) { _fun00050_ip = 294; continue _fun00049 }
 220:
            zuuluu = _closure1_slot14;
            romeon = zuuluu.notifCenterLocalItems;
            michal = new Array(1);
            yankee = 0;
            foxtra = michal;
            report = arraySpread(foxtra, romeon, yankee);
            oscard = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 15;
            tangon = offset[tangon];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.incomingGameFriendRequestLocalItem;
            tangon = tangon.bind(oscard)(golfie, verify, option);
            michal[report] = tangon;
            tangon = 1;
            tangon = report + tangon;
            zuuluu['notifCenterLocalItems'] = michal;
 294:
            return entity;
 296:
            entity = false;
            return entity;
        }
    };
    michal['GAME_RELATIONSHIP_ADD'] = verify;
    verify = function(argFoo) { // Original name: handleGameRelationshipRemove
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.userId;
            var _closure2_slot0 = zuuluu;
            entity = entity.applicationId;
            var _closure2_slot1 = entity;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 13;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.getIsFriendTiersUIEnabled;
            tangon = {};
            golfie = 'NotificationCenterItemsStore';
            tangon['location'] = golfie;
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00054_ip = 78; continue _fun00053 }
 74:
            tangon = false;
            return tangon;
 78:
            zuuluu = _closure1_slot14;
            report = zuuluu.notifCenterLocalItems;
            tangon = report.filter;
            michal = function(argFoo) {
                _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                    golfie = argFoo;
                    verify = _closure1_slot23;
                    michal = _closure1_slot0;
                    entity = _closure1_slot2;
                    option = 11;
                    entity = entity[option];
                    oscard = undefined;
                    entity = michal.bind(oscard)(entity);
                    entity = entity.NotificationCenterLocalItems;
                    romeon = entity.INCOMING_GAME_FRIEND_REQUESTS;
                    yankee = _closure2_slot0;
                    offset = _closure2_slot1;
                    backup = undefined;
                    foxtra = golfie;
                    tangon = backup[verify](foxtra, romeon, yankee, offset, verify);
                    entity = !tangon;
                    if(tangon) { _fun00056_ip = 123; continue _fun00055 }
 70:
                    report = _closure1_slot23;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[option];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.NotificationCenterLocalItems;
                    romeon = zuuluu.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                    yankee = _closure2_slot0;
                    offset = _closure2_slot1;
                    backup = undefined;
                    foxtra = golfie;
                    michal = backup[report](foxtra, romeon, yankee, offset, verify);
                    entity = !michal;
 123:
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
            zuuluu['notifCenterLocalItems'] = michal;
            return entity;
        }
    };
    michal['GAME_RELATIONSHIP_REMOVE'] = verify;
    verify = function(argFoo) { // Original name: handleCompleted
        entity = argFoo;
        entity = entity.item_enum;
        var _closure2_slot0 = entity;
        michal = _closure1_slot14;
        report = michal.notifCenterItems;
        tangon = report.map;
        zuuluu = function(argFoo) {
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                zuuluu = argFoo;
                tangon = zuuluu.item_enum;
                michal = _closure2_slot0;
                entity = zuuluu;
                if(!(tangon === michal)) { _fun00058_ip = 58; continue _fun00057 }
 23:
                michal = {};
                oscard = michal;
                report = zuuluu;
                zuuluu = copyDataProperties(oscard, report);
                tangon = true;
                zuuluu = 'completed';
                michal[zuuluu] = tangon;
                zuuluu = 'acked';
                michal[zuuluu] = tangon;
                entity = michal;
 58:
                return entity;
            }
        };
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.filter;
        entity = _closure1_slot17;
        entity = zuuluu.bind(tangon)(entity);
        michal['notifCenterItems'] = entity;
        entity = undefined;
        return entity;
    };
    michal['NOTIFICATION_CENTER_ITEM_COMPLETED'] = verify;
    verify = function() { // Original name: SET_RECENT_MENTIONS_FILTER
        michal = _closure1_slot19;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['SET_RECENT_MENTIONS_FILTER'] = verify;
    tangon = function(argFoo) { // Original name: handleMobileNativeUpdate
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            entity = argFoo;
            oscard = entity.newBuild;
            entity = undefined;
            var _closure2_slot0 = entity;
            zuuluu = null;
            if(!(zuuluu !== oscard)) { _fun00060_ip = 149; continue _fun00059 }
 26:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 15;
            tangon = golfie[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.mobileNativeUpdateAvailableLocalItem;
            tangon = tangon.bind(report)(oscard);
            _closure2_slot0 = tangon;
            report = _closure1_slot14;
            golfie = report.notifCenterLocalItems;
            oscard = golfie.find;
            report = function(argFoo) {
                entity = argFoo;
                michal = entity.local_id;
                entity = _closure2_slot0;
                entity = entity.local_id;
                entity = michal === entity;
                return entity;
            };
            report = oscard.bind(golfie)(report);
            if(!(entity === report)) { _fun00060_ip = 149; continue _fun00059 }
 93:
            zuuluu = _closure1_slot14;
            oscard = zuuluu.notifCenterLocalItems;
            report = oscard.filter;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.kind;
                entity = _closure2_slot0;
                entity = entity.kind;
                entity = michal !== entity;
                return entity;
            };
            verify = report.bind(oscard)(michal);
            michal = new Array(1);
            option = 0;
            offset = michal;
            report = arraySpread(offset, verify, option);
            michal[report] = tangon;
            tangon = 1;
            tangon = report + tangon;
            zuuluu['notifCenterLocalItems'] = michal;
 149:
            return entity;
        }
    };
    michal['MOBILE_NATIVE_UPDATE_CHECK_FINISHED'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    output = tangon;
    kiloes = michal;
    michal = new output[option](sizing, kiloes, backup);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/notification_center/NotificationCenterItemsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();